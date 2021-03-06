In this section, we’ll implement a search feature and learn about the filtering capabilities of our GraphQL API.

### Preparing the React components

The search will be available under a new route and implemented in a new React component.

Start by creating a new file called `Search.js` in `src/components` and add the following code:

    import React, { useState } from 'react';
    import { useLazyQuery } from '@apollo/client';
    import gql from 'graphql-tag';
    import Link from './Link';

    const Search = () => {
      const [searchFilter, setSearchFilter] = useState('');
      return (
        <>
          <div>
            Search
            <input
              type="text"
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <button>OK</button>
          </div>
          {data &&
            data.feed.links.map((link, index) => (
              <Link key={link.id} link={link} index={index} />
            ))}
        </>
      );
    };

    export default Search;

Again, this is a pretty standard setup. You’re rendering an `input` field where the user can type a search string.

The `Search` component uses the `useState` hook to hold a search term supplied by the user. The `setSearchFilter` functions is called in the `onChange` event on the input to update this value.

The component is also looking for a variable called `data` which it iterates over to render `Link` components with the search results. We’ll define and execute the query a bit later.

Let’s now add the `Search` component as a new route to the app. Open `App.js` and update it to look as follows:

    const App = () => (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/new/1" />}
            />

            <Route
              exact
              path="/create"
              component={CreateLink}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );

Also import the `Search` component at the top of the file:

    import Search from './Search';

For the user to be able to comfortably navigate to the search functionality, let’s also add a new navigation item to the `Header`.

Open `Header.js` and put a new `Link` between `new` and `submit`:

    <div className="flex flex-fixed black">
      <div className="fw7 mr1">Hacker News</div>
      <Link to="/" className="ml1 no-underline black">
        new
      </Link>
      <div className="ml1">|</div>
      <Link to="/search" className="ml1 no-underline black">
        search
      </Link>
      {authToken && (
        <div className="flex">
          <div className="ml1">|</div>
          <Link to="/create" className="ml1 no-underline black">
            submit
          </Link>
        </div>
      )}
    </div>

We can now navigate to the search feature using the new button in the `Header`:

![We can navigate to the search feature](https://imgur.com/7R4RlyG.png)

Great, let’s now go back to the `Search` component and see how we can implement the actual search.

### Filtering Links

Open `Search.js` and add the following query definition at the top of the file:

    const FEED_SEARCH_QUERY = gql`
      query FeedSearchQuery($filter: String!) {
        feed(filter: $filter) {
          id
          links {
            id
            url
            description
            createdAt
            postedBy {
              id
              name
            }
            votes {
              id
              user {
                id
              }
            }
          }
        }
      }
    `;

This query looks similar to the `feed` query that’s used in `LinkList`. However, this time it takes in an argument called `filter` that will be used to constrain the list of links we want to retrieve.

The actual filter is built and used in the `feed` resolver which is implemented in `server/src/resolvers/Query.js`:

    async function feed(parent, args, context, info) {
      const where = args.filter
        ? {
            OR: [
              { description: { contains: args.filter } },
              { url: { contains: args.filter } }
            ]
          }
        : {};

      const links = await context.prisma.link.findMany({
        where,
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy
      });

      const count = await context.prisma.link.count({ where });

      return {
        id: 'main-feed',
        links,
        count
      };
    }

    module.exports = {
      feed
    };

> **Note**: To understand what’s going on in this resolver, check out the [Node tutorial](https://www.howtographql.com/graphql-js/0-introduction/).

In this case, two `where` conditions are specified: A link is only returned if either its `url` contains the provided `filter` _or_ its `description` contains the provided `filter`. Both conditions are combined using Prisma’s `OR` operator.

Perfect, the query is defined! But this time we actually want to load the data every time the user hits the **OK** button, not upon the initial load of the component. To do this, we’ll use a hook supplied by Apollo called `useLazyQuery`. This hook performs a query in the same way the `useQuery` hook does but the difference is that it must be executed manually. This is perfect for our situation––we want to execute the query when the **OK** button is clicked.

Let’s include `useLazyQuery` and execute it when the **OK** button is clicked.

    const Search = () => {
      const [searchFilter, setSearchFilter] = useState('');
      const [executeSearch, { data }] = useLazyQuery(
        FEED_SEARCH_QUERY
      );
      return (
        <>
          <div>
            Search
            <input
              type="text"
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <button
              onClick={() =>
                executeSearch({
                  variables: { filter: searchFilter }
                })
              }
            >
              OK
            </button>
          </div>
          {data &&
            data.feed.links.map((link, index) => (
              <Link key={link.id} link={link} index={index} />
            ))}
        </>
      );
    };

We’ll want to be sure to import `useLazyQuery` at the top of the file.

    import { useLazyQuery } from '@apollo/client';

The implementation is almost trivial! We’re executing the `FEED_SEARCH_QUERY` manually and retrieving the `links` from the response that’s returned by the server. These links are put into the component’s `state` so that they can be rendered.

Go ahead and test the app by running `yarn start` in a terminal and navigating to `http://localhost:3000/search`. Then type a search string into the text field, click the **OK** button and verify the links that are returned fit the filter conditions.
