In this chapter, you’ll implement pagination functionality. The goal is that the user can load the links in smaller, more consumable chunks instead _all_ of them at once. You’ll realize this with a _More_-button that will be placed below the list and that allows to load another chunk of links that’s then added to the list.

### Preparing the React Components

As before, the first step towards this new functionality is to make adjustments to the plain React components so that you can add the actual data fetching logic later.

This time, this only means adding the _More_-button at the bottom of the `LinkList` component so the user has a way to go and load more links that will be fetched and fetched to the list.

Open `LinkList.js` and adjust `render` to now also include the _More_-button:

    render() {

      return (
        <div>
          <div>
            {this.props.viewer.allLinks.edges.map(({node}, index) => (
              <Link key={node.__id} index={index} link={node}/>
            ))}
          </div>
          <div className='flex ml4 mv3 gray'>
            <div className='pointer' onClick={() => this._loadMore()}>More</div>
          </div>
        </div>
      )

    }

The button invokes a method called `_loadMore` which will be used to add the actual pagination logic. Go ahead and create the stub for that method already.

Still in `LinkList.js`, add the empty `_loadMore` method to the class:

    _loadMore() {
      // ... you'll implement this in a bit
    }

### Pagination with Relay Modern

You already know about Relay’s `FragmentContainer` API that allows you to wrap a React component along with a GraphQL fragment that represents the component’s data dependencies and then lets Relay figure out how and when to fetch the needed data.

In this chapter, you’ll get to know a new API that’s called `PaginationContainer` and that provides a nice abstraction for implementing pagination in a Relay app.

#### Relay Connections

As mentioned briefly in the 3rd chapter, lists in Relay are implemented using the concept of [_connections_](https://facebook.github.io/relay/docs/graphql-connections.html).

The goal of this concept is to _enrich_ a simple list of items with meta information about the list itself. This meta information can be used by clients to implement more sophisticated pagination approaches than a simple [limit-offset pagination](https://www.postgresql.org/docs/8.2/static/queries-limit.html) (also referred to as _numbered pages_).

> Note: The article [Understanding pagination: REST, GraphQL, and Relay](https://dev-blog.apollodata.com/understanding-pagination-rest-graphql-and-relay-b10f835549e7) on the Apollo blog has a great overview on different pagination models.

If you’ve wondered why in the previous chapters you had to do the `edges`-`node`-dance everytime you needed to access information about the items in a list that was returned by the server - this is the answer to it. Instead of directly exposing the items that are inside the list, a connection will store additional data about the _context_ of each item, where context refers to the position of the item in the list as well as the parts of the list that come directly before and after it.

To be more concrete, here is what the Relay server needs to provide so that a list of items is considered a connection:

- Each item in the list is wrapped in an [`Edge`](https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types) type.
- This `Edge` type has to expose (at least) two fields:
  - `node`: Contains information about the _actual_ item.
  - `cursor`: Represents the _position_ of that items inside the list - note that `cursor` is represent as an _opaque_ string (opaque essentially means that it can not be generated on the frontend).
- The connection itself needs to expose a `pageInfo` field which again needs to expose the following four fields:
  - `hasNextPage`: A boolean value that indicates whether the _end_ of the list was reached (only relevant when paginating _forward_ through a list).
  - `hasPreviousPage`: A boolean value that indicates whether the _beginning_ of the list was reached (only relevant when paginating _backwards_ through a list).
  - `startCursor` & `endCursor`: Represent the cursors that are associated with the first and last edges in the list of edges that’s returned for the current query.
- The connection also needs to expose a number of different arguments that can be used for _slicing_ and _pagination_:
  - `first` and `last` each expect integer values can be used to _slice_ the list and only ask for a subset of the actual list
  - `before` and `after` each expect strings representing the cursor.
- Note that `Graphcool` also implements a `count` field on the connection itself that allows to retrieve the number of items that are currently in the list.

> For the detailed requirements, take a look at the official [Relay Cursor Connections Specification](https://facebook.github.io/relay/graphql/connections.htm).

The last point in the list in particular enables the pagination functionality since combining either `first` and `after` (_forward pagination_) or `last` and `before` (_backward pagination_) allows to retrieve concrete chunks from the list. In fact, Relay requires them to be included when retrieving data from a connection and the Relay Compiler will throw an error if you don’t include at least `first` _or_ `last` (`before` and `after` are optional). These two GitHub issues have interesting discussions around this requirement: [facebook/relay \#1201](https://github.com/facebook/relay/issues/1201) and [graphql/graphql-relay-js \#20](https://github.com/graphql/graphql-relay-js/issues/20).

#### The `PaginationContainer` API

When using Relay’s `PaginationContainer`, it’s crucial that the Relay server adheres to the official connection specification since the implementation relies on the mentioned fields to be present. A `PaginationContainer` can be used instead of a `FragmentContainer` when requesting data from a connection and directly includes some methods that are convenient when implementing pagination:

- `hasMore`: Returns a `boolean` that indicates whether there is at least one more page.
- `isLoading`: Returns a `boolean` that indicates whether one or more requests triggered by `loadMore` are currently pending.
- `loadMore`: Allows to load the next chunk of items for the current connection (pagination direction, `forward` or `backward` will be inferred).
- `refetchConnection`: Allows to refetch items in the connection (with potentially new variables).

All these methods can be called on the `relay` object that’s injected into the props of a component that’s passed into `createPaginationContainer`. You’ll see in a bit how this works.

### Using `createPaginationContainer`

That was enough background info to give you the basic grasp on Relay’s pagination functionality, you can finally go and start with the implementation!

Open `LinkList.js` and replace the current export statement with the following:

    export default createPaginationContainer(LinkList,
      {
        viewer: graphql`
          fragment LinkList_viewer on Viewer {
            allLinks(
              first: $count,
              after: $after,
              orderBy: createdAt_DESC
            ) @connection(key: "LinkList_allLinks") {
              edges {
                node {
                  ...Link_link
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `,
      },
      { // ... this will be added soon }
    )

Let’s take a closer look at what’s going on there! Instead of simply passing a React component with a fragment to `createFragmentContainer` as was the case before, you’re now passing a React component along with two configuration objects to `createPaginationContainer` (the second of which is not yet implemented).

The first configuration object is similar defines the fragments that express the component’s data requirements - so here it’s quite similar to the fragment that you used for the previous call to `createFragmentContainer`. Notice that instead of hardcoding the value for `last`, you’re now using a variable called `$count` that you’re passing in for the `first` argument. You need to use `first` here as you want to implement _forward_ pagination. You’re also adding the `after` argument to the fragment which will receive the cursor that indicates where the list should be sliced.

Another field that was added to the payload of this fragment is `pageInfo` including relevant information that’s needed for the forward pagination. If you were to implement _backward_ pagination, you’d have to specify `hasPreviousPage` and `startCursor` instead.

Go ahead and add the second configuration object next.

Replace the empty object that only contains the `... this will be added soon` comment with the following:

    {
      direction: 'forward',
      query: graphql`
        query LinkListForwardQuery(
          $count: Int!,
          $after: String,
        ) {
          viewer {
            ...LinkList_viewer
          }
        }
      `,
      getConnectionFromProps(props) {
        return props.viewer && props.viewer.allLinks
      },
      getFragmentVariables(previousVariables, totalCount) {
        return {
          ...previousVariables,
          count: totalCount,
        }
      },
      getVariables(props, paginationInfo, fragmentVariables) {
        return {
          count: paginationInfo.count,
          after: paginationInfo.cursor,
        }
      },
    }

Let’s discuss the properties of this configuration object:

- `direction`: Indicates whether you want implement `forward` or `backward` pagination (these are also the only two valid values you can provide).
- `query`: You define another query, this one will be used for all the requests triggered through `loadMore`.
- `getConnectionFromProps`: Should return the connection you want to paginate on (this is relevant in case a component would request data from multiple connections).
- `getFragmentVariables`: These are the variables used to read the data from the fragment.
- `getVariables`: These are the variables to use when sending the pagination `query`.

> Note: There is not much documentation on this configuration object. However, the comments in the actual implementation [on GitHub](https://github.com/facebook/relay/blob/0581cb39009733238d062d98388dc7ecfb683ee1/packages/react-relay/modern/ReactRelayPaginationContainer.js#L194) do provide some helpful hints.

As you’re now using `createPaginationContainer` instead of `createFragmentContainer`, you also need to adjust your imports.

At the top of `LinkList.js`, replace the import of `createFragmentContainer` from `react-relay` with `createPaginationContainer`.

The next thing you need to do is make sure the variables returned by `getVariables` can be passed into the root query that’s used by the `QueryRenderer` at the root of the component hierarchy.

Open `LinkListPage.js` and update the root query to accept the `$count` and `$after` arguments:

    const LinkListPageQuery = graphql`
      query LinkListPageQuery(
        $count: Int!,
        $after: String
      ) {
        viewer {
          ...LinkList_viewer
        }
      }
    `

Since the `$count` argument is required, you have to pass a value for it to the initial call performed by the `QueryRenderer`. You do this by adding the `variables` prop to it.

Still in `LinkListPage.js` update the code of the `QueryRenderer` as follows:

    <QueryRenderer
      environment={environment}
      query={LinkListPageQuery}
      variables={{
        count: ITEMS_PER_PAGE,
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <LinkList viewer={props.viewer} />
        }
        return <div>Loading</div>
      }}
    />

Notice that `count` is set to a constant here that should live where you’ve been putting all the declaration of constants.

Open `constants.js` and add the following definition to it:

    export const ITEMS_PER_PAGE = 1 // setting this only to one so you can easily test your pagination implementation

Then of course you also need the corresponding import statement.

Back in `LinkListPage.js`, import the constant you just defined:

    import {ITEMS_PER_PAGE} from '../constants'

All right - you’re almost there! The last thing you need is actually calling Relay’s `loadMore` function to fetch the next chunk of links from the server.

Open `LinkList.js` and implement `_loadMore` as like so:

    _loadMore() {
      if (!this.props.relay.hasMore()) {
        console.log(`Nothing more to load`)
        return
      } else if (this.props.relay.isLoading()) {
        console.log(`Request is already pending`)
        return
      }

      this.props.relay.loadMore(ITEMS_PER_PAGE)
    }

Notice that you’re again using `ITEMS_PER_PAGE`, so make sure to import it here as well.

Still in `LinkList.js` add the following import statement at the top:

    import {ITEMS_PER_PAGE} from '../constants'

Perfect, that’s all the code you need to write to get the pagination to work! You can now go ahead and run the Relay Compiler and then test your implementation!

In a terminal, navigate to the root directory of the project and invoke the Relay Compiler:

    relay-compiler --src ./src --schema ./schema.graphql

Now you can run the app with `yarn start` and load more links as needed 🙌
