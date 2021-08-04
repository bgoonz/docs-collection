### Preparing the React components

The first piece of functionality you’ll implement in the app is loading and displaying a list of `Link` elements. We’ll start by preparing some React components for displaying the links. Let’s begin at the bottom of the component hierarchy by writing one that’ll render a single link.

Create a new file called `Link.js` in the `components` directory and add the following code:

    import React from 'react'

    const Link = ({ link }) => (
      <div>
        <div>
          {link.description} ({link.url})
        </div>
      </div>
    )

    export default Link

This is a simple React component that expects a `link` in its `props` and renders the link’s `description` and `url`. Easy as pie! 🍰

> **Note**: This tutorial doesn’t focus too much on using semantic HTML elements, for the sake of simplifying parts of the steps we’ll take to create this app. The two `<div>`s here are later used for styling.

Next, you’ll implement the component that renders a list of links.

Again, in the `components` directory, go ahead and create a new file called `LinkList.js`. Then add the following code:

    import React from 'react'
    import Link from './Link'

    const linksToRender = [
      {
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://formidable.com/open-source/urql/',
      },
    ]

    const LinkList = () => (
      <div>
        {linksToRender.map(link => <Link key={link.id} link={link} />)}
      </div>
    )

    export default LinkList

For now you’re pasting in some mock data to make sure the component setup works. You’ll soon replace this with some actual data loaded from the server!

To complete the setup, open `App.js` and replace the current contents with the following:

    import React from 'react'
    import LinkList from './LinkList'

    const App = () => <LinkList />

    export default App

Run the app to check if everything works so far! The app should now display the two links from the `linksToRender` array:

![Run the app to ensure everything works](https://imgur.com/VJzRyjq.png)

### Writing the GraphQL query

Next you’ll load the actual links that are stored in the database from your GraphQL API. The first thing you need to do for that is define the GraphQL query you want to send.

Here is what it looks like:

    {
      feed {
        links {
          id
          createdAt
          description
          url
        }
      }
    }

You could now simply execute this query in a [Playground](https://github.com/graphql/graphql-playground) (against the _application schema_) and retrieve the results from your GraphQL server. But let’s see how to run this query in your React app with urql!

### Queries with urql

When using urql, you’ve got several ways of sending queries to the server. The React bindings for urql call methods on the Client that return a “stream” of results. These low-level methods are called `executeQuery`, `executeMutation`, and `executeSubscription`. The returned stream of results is implemented using the [Wonka library, which you can read more about on its site](https://wonka.kitten.sh/).

A practical example of using these is a little longer than using the React bindings, but would look as follows:

    import { createRequest } from 'urql'
    import { pipe, subscribe } from 'wonka'

    const request = createRequest(gql`
      {
        feed {
          links {
            id
          }
        }
      }
    `, {
      // ... variables
    });

    pipe(
      client.executeQuery(request),
      subscribe(response => {
        console.log(response.data.feed);
      })
    );

> **Note**: `urql` is planned to expose helper methods on its Client that internally call `useRequest` for you eventually, but since it is primarily meant to be used with its React bindings, these methods haven’t been implemented yet. Stay tuned!

The more declarative way when using React however is to use [`urql`’s hook APIs](https://formidable.com/open-source/urql/docs/api/#react-components-and-hooks) to manage your GraphQL data just using components.

Depending on whether you’re using queries, mutations, or subscriptions there are three corresponding hooks: `useQuery`, `useMutation`, and `useSubscription`. All three also have corresponding components with render prop APIs.

These hooks and components are convenient wrappers around the urql Client! They automatically take care of cancellation, updates, and correctly set the initial state for you.

When it comes to making a GraphQL query using the urql hooks, you will need to pass your query as an option to `useQuery` and optionally pass some variables as well. The hook will internally tell the client to execute your query, and the cache will be able to proactively send updates to your components, when the data changes or the cached data is invalidated.

In general, the process for you to add some data fetching logic will be very similar every time:

1.  write the query as a JavaScript constant using the `gql` parser function
2.  use the `useQuery` hook passing the GraphQL query and variables as `{ query, variables }`
3.  access the query results that the hook returns, `const [result] = useQuery(...)`

Open up `LinkList.js` and add the query to the top of the file:

    const FEED_QUERY = gql`
      {
        feed {
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `

Then replace the current `LinkList` component with the following:

    const LinkList = () => {
      useQuery({ query: FEED_QUERY });

      return (
        <div>
          {linksToRender.map(link => <Link key={link.id} link={link} />)}
        </div>
      );
    };

What’s going on here?

1.  First, you create a JavaScript constant called `FEED_QUERY` that holds your GraphQL query. The `gql` function parses the plain string that contains the GraphQL code (if you’re unfamiliar with the backtick-syntax, you can read up on JavaScript’s [tagged template literals](http://wesbos.com/tagged-template-literals/)).
2.  Finally, you add the `useQuery` hook to the component, passing `FEED_QUERY` to the `query` option.

> **Note**: Notice that the example still returns the mocked `linksToRender` as a function result, as you haven’t written any code just yet to use the result from `useQuery`.

For this code to work, you also need to import the corresponding dependencies. Add the following two lines to the top of the file, right below the other import statements:

    import { useQuery } from 'urql'
    import gql from 'graphql-tag'

Awesome, that’s all your data fetching code. If you check your app now you can see that a request is sent to your GraphQL API. But as you can already tell, `LinkList` is not using the server data yet, so let’s make it happen 🤩

You can now finally remove the mock data and render actual links that are fetched from the server.

Still in `LinkList.js`, delete the `linksToRender` mock data and then update the `LinkList` component as follows:

    const LinkList = () => {
      const [result] = useQuery({ query: FEED_QUERY })
      const { data, fetching, error } = result

      if (fetching) return <div>Fetching</div>
      if (error) return <div>Error</div>

      const linksToRender = data.feed.links

      return (
        <div>
          {linksToRender.map(link => <Link key={link.id} link={link} />)}
        </div>
      )
    }

Let’s walk through what’s happening in this code. As expected, `useQuery` returns an array with the result as the first item. It returns this array because the second value of any hook that `urql` exposes is always an `execute` function that can be used to refetch queries.

The properties of the `result` from the hook tell us more about the state of your query and pass you the data that it receives from your GraphQL API:

1.  `fetching`: Is `true` as long as the request is still ongoing and the response hasn’t been received, otherwise it’ll be `false`
2.  `error`: In case the request fails, this field will contain a `CombinedError` that tells you what exactly went wrong. Depending on what error has occured it’ll either have a `networkError` or a `graphQLErrors` property.
3.  `data`: This is the actual data that is received from the server. It’ll have a `links` property with a list of `Link` elements, since the `FEED_QUERY` definition is requesting them.

That’s it! You should see the exact same screen as before! 🤩 And to summarize, in this section you’ve:

- created a `Link` and `LinkList`
- added a `useQuery` hook to load some feed data from your GraphQL API

> **Note**: If the browser on `http://localhost:4000` only says error and is empty otherwise, you probably forgot to have your server running. Note that for the app to work the server needs to run as well - so you have two running processes in your terminal: One for the server and one for the React app. To start the server, navigate into the `server` directory and run `yarn start`.
