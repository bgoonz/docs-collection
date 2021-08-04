### Preparing the React components

The first piece of functionality we’ll implement in the app is loading and displaying a list of `Link` elements. We’ll walk up our way in the React component hierarchy and start with the component that will render a single link.

Create a new file called `Link.js` in the `components` directory and add the following code:

    import React from 'react';

    const Link = (props) => {
      const { link } = props;
      return (
        <div>
          <div>
            {link.description} ({link.url})
          </div>
        </div>
      );
    };

    export default Link;

This is a simple React component that expects a `link` in its `props` and renders the link’s `description` and `url`. Easy as pie! 🍰

Next, let’s implement the component that renders a list of links.

Again, in the `components` directory, go ahead and create a new file called `LinkList.js`. Then add the following code:

    import React from 'react';
    import Link from './Link';

    const LinkList = () => {
      const linksToRender = [
        {
          id: '1',
          description:
            'Prisma gives you a powerful database toolkit 😎',
          url: 'https://prisma.io'
        },
        {
          id: '2',
          description: 'The best GraphQL client',
          url: 'https://www.apollographql.com/docs/react/'
        }
      ];

      return (
        <div>
          {linksToRender.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </div>
      );
    };

    export default LinkList;

Here, we’re using local mock data for now to make sure the component setup works. We’ll soon replace this with some actual data loaded from the server - patience, young Padawan!

To complete the setup, open `App.js` and replace the current contents with the following:

    import React, { Component } from 'react';
    import LinkList from './LinkList';

    class App extends Component {
      render() {
        return <LinkList />;
      }
    }

    export default App;

Run the app to check if everything works so far! The app should now display the two links from the `linksToRender` array:

![Run the app to check that it’s working](https://imgur.com/CK8nPPh.png)

### Writing the GraphQL query

Let’s now load the actual links that are stored in the database. The first thing we need to do for that is define the GraphQL query we want to send to the API.

Here is what it looks like:

    {
      feed {
        id
        links {
          id
          createdAt
          description
          url
        }
      }
    }

We could now simply execute this query in a [Playground](https://github.com/graphql/graphql-playground) (against the _application schema_) and retrieve the results from the GraphQL server. But how can we use it inside our JavaScript code?

### Queries with Apollo Client

The most common (and probably the most flexible) way of making queries with Apollo Client is to use the `useQuery` hook it provides. With the `useQuery` hook, all we need to do is pass a GraphQL query document in and Apollo will take care of the fetching and will surface the returned data and any errors for us.

Open up `LinkList.js` and add the query to the top of the file:

    import { useQuery, gql } from '@apollo/client';

    const FEED_QUERY = gql`
      {
        feed {
          id
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `;

Next, instead of iterating over the hardcoded `linksToRender` array, pass the `FEED_QUERY` query document into `useQuery` and iterate over the returned links.

    const LinkList = () => {
      const { data } = useQuery(FEED_QUERY);

      return (
        <div>
          {data && (
            <>
              {data.feed.links.map((link) => (
                <Link key={link.id} link={link} />
              ))}
            </>
          )}
        </div>
      );
    };

Let’s take a moment to walk through what’s happening with this new code.

The `FEED_QUERY` variable uses `gql`, a library that uses [tagged template literals](https://wesbos.com/tagged-template-literals) to parse the GraphQL query document we define. This query document is then passed into the `useQuery` hook in the `LinkList` component.

This hook returns three items that are relevant for our purposes at this point:

1.  `loading`: Is `true` as long as the request is still ongoing and the response hasn’t been received.
2.  `error`: In case the request fails, this field will contain information about what exactly went wrong.
3.  `data`: This is the actual data that was received from the server. It has the `links` property which represents a list of `Link` elements.

> The injected props actually contain even more functionality. You can read more in the [API overview](https://www.apollographql.com/docs/react/essentials/queries.html#render-prop).

When the `LinkList` component initially renders, there won’t be any information on the `data` variable. For this reason, we need to check that `data` is truthy before trying to render any of the links that will come out of it. Once our GraphQL request resolves with some data, the `LinkList` component will re-render and `data` will be truthy. Our links are available on `data.feed.links` which we can map over to render.

That’s it! You should see the exact same screen as before.

> **Note**: If the browser on `http://localhost:4000` only says error and is empty otherwise, you probably forgot to have your server running. Note that for the app to work the server needs to run as well - so you have two running processes in your terminal: One for the server and one for the React app. To start the server, navigate into the `server` directory and run `yarn start`.
