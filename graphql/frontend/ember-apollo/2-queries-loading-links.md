### Preparing the components

The first piece of functionality that you’ll implement in the app is loading and displaying a list of links. You’ll build each part of the hierarchy, but for now start with the component that’ll render a single link.

In your terminal, create a new component named `link-post`. You are naming this component `link-post`, as opposed to `link`, because Ember requires all components to have a hyphen in it’s name.

    ember generate component link-post

Running that generator creates a component file and a handlebars template along with a test for the component.

Replace the code in the `link-post` template with the following:

    <div>
      <div>{{link.description}} ({{link.url}})</div>
    </div>

This is a simple component that takes a `link` and renders the link’s `description` and `url`. Easy peasy!

Next, you’ll implement the route that renders a list of links.

Again, you will use an ember-cli generate command to create a links route.

    ember generate route links

This creates a few files including a route file, template for the route, and it adds a `/links` route to the router map.

Replace the contents of the route template with the following:

    <div>
      {{#each model as |link index|}}
        {{link-post index=index link=link}}
      {{/each}}
    </div>

In the link route’s `model` hook, add the following code:

    model() {
      return [
        {
          id: '1',
          description: 'The Coolest GraphQL Backend 😎',
          url: 'https://www.graph.cool'
        },
        {
          id: '2',
          description: 'The Best GraphQL Client',
          url: 'http://dev.apollodata.com/'
        }
      ];
    }

Here, you’re using mock data for now to make sure the setup works. You’ll soon replace this with some actual data loaded from the server.

To complete the setup, open `router.js` and change the links route to add a custom pathname.

    Router.map(function() {
      this.route('links', { path: '/' });
    });

Run the app to check if everything works so far! The app should now display the two links from the array:

![Run the app to check that it works](http://i.imgur.com/Oky5GLx.png)

### Writing the GraphQL Query

You’ll now load the actual links that are stored on the server. The first thing you need to do for that is define the GraphQL query that you want to send to the API.

Here is what that GraphQL query looks like:

    query AllLinks {
      allLinks {
        id
        createdAt
        description
        url
      }
    }

You could now simply execute this query in a Playground and retrieve the results from your GraphQL server. But how can you use it inside your Ember app?

### Queries with `ember-apollo-client`

When using Apollo in Ember, you can use the [`query`](http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient.query) method on the `ApolloClient`. This will fetch the data and will allow you to process the response as a _promise_. This method is exposed by the `ember-apollo-client` add-on through the `apollo` service.

A example would look as follows:

    this.get(‘apollo’).query({
      query: gql`
        query AllLinks {
          allLinks {
            id
          }
        }
      `
    }, ‘allLinks’).then(response => console.log(response))

In general, the process for you to add some data fetching logic will be very similar every time:

1.  Write the query into a `.graphql` file.
2.  Import the query and use the `apollo` service to query your GraphQL endpoint.
3.  Access the query results via the promise that is returned.

You can store your queries and mutations in separate files within your `app` folder, so add your first query!

Create a nested set of folders in the `app` folder like so:

    .
    ├── app
    │ ├── gql
    │ │ ├── queries
    │ │ ├── mutations

In the `queries` folder, create a new file named `allLinks.graphql` and add the following contents:

    query AllLinksQuery {
      allLinks {
        id
        createdAt
        url
        description
      }
    }

What’s going on here?

You defined the plain GraphQL query. The name `AllLinksQuery` is the _operation name_ and will be used by Apollo to refer to this query in its internals.

You can now finally remove the mock data and render actual links that are fetched from the server.

In the `links.js` route file, update the code as follows:

    import Ember from 'ember';
    import UnsubscribeRoute from 'ember-apollo-client/mixins/unsubscribe-route';
    import query from ‘hackernews-ember-apollo/gql/queries/allLinks';

    // 1.
    export default Ember.Route.extend(UnsubscribeRoute, {
      // 2.
      apollo: Ember.inject.service(),

      model() {
        // 3.
        return this.get('apollo').query({ query }, 'allLinks').catch(error => alert(error));
      }
    });

Let’s walk through what’s happening in this code.

1.  After importing your query and the `UnsubscribeRoute` mixin, you are extending the route and using the `UnsubscribeRoute` mixin. More about this mixin in the “More Mutations and Updating the Store” section.
2.  Here you are injecting the `apollo` service that `ember-apollo-client` exposes.
3.  Finally you are using the `apollo` service to query your GraphQL endpoint. The final string, `allLinks`, is specifying where in the returned data your expected data will be located.

That’s it! Go ahead and run `yarn start` again. You should see the exact same screen as before.
