In this section, you’ll implement a search feature and learn about the filtering capabilities of your GraphQL API.

> Note: If you’re interested in all the filtering capabilities of Graphcool, you can check out the [documentation](https://www.graph.cool/docs/reference/simple-api/filtering-by-field-xookaexai0/) on it.

### Preparing the route

The search will be available under a new route. Start by creating a new route called `search`:

    ember generate route search

This will generate a new route, add it to your `router.js` and create a new template. You won’t be needing the route file go delete `app/routes/search.js`.

Open that template (`app/templates/search.hbs`) and replace the contents with the following code:

    <div>
      <form {{action 'executeSearch' on='submit'}}>
        {{input type='text' value=searchText}}
        {{input type='submit' value='search'}}
      </form>
      {{#each model as |link index|}}
        {{link-post index=index link=link}}
      {{/each}}
    </div>

Again, this is a pretty standard setup. You’re rendering an `input` field where the user can type a search string.

Notice that you are also preparing to display the results using the `link-post` component.

For the user to be able to comfortably navigate to the search functionality, you should also add a new navigation item to the `site-header` component.

Open the template for your `site-header` component and insert a new link between `new` and `submit`:

    <div class='flex pa1 justify-between nowrap orange'>
      <div class='flex flex-fixed black'>
        <div class='fw7 mr1'>Hacker News</div>
        {{#link-to 'links' class='ml1 no-underline black'}}new{{/link-to}}
        <div class='ml1'>|</div>
        {{#link-to 'search' class='ml1 no-underline black'}}search{{/link-to}}
        {{#if userLoggedIn}}
          <div class='flex'>
            <div class='ml1'>|</div>
            {{#link-to 'create' class='ml1 no-underline black'}}submit{{/link-to}}
          </div>
        {{/if}}
      </div>
      <div class='flex flex-fixed'>
        {{#if userLoggedIn}}
          <div class='ml1 pointer black' {{action 'logout'}}>
            logout
          </div>
        {{else}}
          {{#link-to 'login' class='ml1 no-underline black'}}login{{/link-to}}
        {{/if}}
      </div>
    </div>

You can now navigate to the search functionality using the new button in the `site-header` component.

### Filtering Links

Create a new controller for this route by adding a new file in your `app/controllers` folder. Name the file `search.js` and add the following code:

    import Ember from 'ember';
    import query from 'hackernews-ember-apollo/gql/queries/allLinksSearch';

    export default Ember.Controller.extend({
      actions: {
        executeSearch() {
          const searchText = this.get('searchText');
          if (!searchText) return console.error('No search text provided.');
          return this.get('apollo').queryOnce({ query, variables: { searchText } }, 'allLinks').then(result => {
            this.set('model', result);
          }).catch(error => alert(error));
        }
      },

      apollo: Ember.inject.service()
    });

Also create a new file named `allLinksSearch.graphql` in your `app/gql/queries` directory, and add the following contents:

    query AllLinksSearchQuery($searchText: String!) {
      allLinks(filter: { OR: [{ url_contains: $searchText }, { description_contains: $searchText }] }) {
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

This query looks similar to the `allLinks` query that’s used in many places. However, this time it takes in an argument called `searchText` and specifies a `filter` object that will be used to specify conditions on the links that you want to retrieve.

In this case, you’re specifying two filters that account for the following two conditions: A link is only returned if either its `url` contains the provided `searchText` _or_ its `description` contains the provided `searchText`. Both conditions can be combined using the `OR` operator.

Perfect, the query is defined! But this time you actually want to load the data every time the user hits the _search_-button which is what the `executeSearch` method is handling. You are getting the `searchText` the user provided, running a `queryOnce` method on your Apollo client, and setting the results to your model.

Notice that you aren’t using the `query` method, but are instead using `queryOnce`. The difference is subtle, but important. `ember-apollo-client`s `query` method, by default, sets an internal Apollo subscription. This allows the client to be notified if another component calls your server and receives results that would need to update the data in your store.

Basically, by default, `ember-apollo-client` is trying to help you prevent stale data, if possible. The `queryOnce` method does not setup that internal Apollo subscription. Since you don’t care about being notified when a detail on your search results changes, you are using `queryOnce`.

Go ahead and test the app by running `yarn start` in a Terminal and navigating to `http://localhost:4200/search`. Then type a search string into the text field, click the _search_-button and verify the links that are returned fit the filter conditions.
