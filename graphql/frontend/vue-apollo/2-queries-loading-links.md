### Preparing the VueJS components

The first piece of functionality that you’ll implement in the app is loading and displaying a list of `LinkItem` elements. You’ll walk your way up in the VueJS component hierarchy and start with the component that will render a single link.

Remove the `Hello.vue` file from `src/components`. You will be creating several new components throughout the remainder of this tutorial.

Create a new file called `LinkItem.vue` in the `src/components` directory and add the following code:

    <template>
      <div>{{link.description}} ({{link.url}})</div>
    </template>

    <script>
      export default {
        name: 'LinkItem',
        props: ['link']
      }
    </script>

This is a simple VueJS component that expects a `link` in its `props` and renders the link’s `description` and `url`. Easy as pie! 🍰

Next, you’ll implement the component that renders a list of links.

Again, in the `src/components` directory, go ahead and create a new file called `LinkList.vue` and add the following code:

    <template>
      <div>
        <link-item
          v-for="link in allLinks"
          :key="link.id"
          :link="link">
        </link-item>
      </div>
    </template>

    <script>
      import LinkItem from './LinkItem'

      export default {
        name: 'LinkList',
        data () {
          return {
            allLinks: [
              {
                id: '1',
                description: 'The Coolest GraphQL Backend 😎',
                url: 'https://www.graph.cool'
              }, {
                id: '2',
                description: 'The Best GraphQL Client',
                url: 'http://dev.apollodata.com/'
              }
            ]
          }
        },
        components: {
          LinkItem
        }
      }
    </script>

Here, you’re using mock data for now to make sure the component setup works. You’ll soon replace this with some actual data loaded from the server - patience, young Padawan!

To complete the setup, open `src/App.vue` and replace the current contents with the following:

    <template>
      <div id="app">
        <link-list></link-list>
      </div>
    </template>

    <script>
      import LinkList from './components/LinkList'

      export default {
        name: 'app',
        components: {
          LinkList
        }
      }
    </script>

    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, sans-serif;
      }

      input {
        max-width: 500px;
      }

      .gray {
        color: #828282;
      }

      .orange {
        background-color: #ff6600;
      }

      .background-gray {
        background-color: rgb(246,246,239);
      }

      .f11 {
        font-size: 11px;
      }

      .w85 {
        width: 85%;
      }

      .button {
        font-family: monospace;
        font-size: 10pt;
        color: black;
        background-color: buttonface;
        text-align: center;
        padding: 2px 6px 3px;
        border-width: 2px;
        border-style: outset;
        border-color: buttonface;
        cursor: pointer;
        max-width: 250px;
      }
    </style>

Note that you only changed the `template` and `script` blocks here. You are now displaying the `LinkList` component within the top-level `App` component.

You need to make one more change before testing out the app.

Open `src/main.js` and remove the two references to router for now. After removing them, `src/main.js` should look like this:

    import { ApolloClient } from 'apollo-client'
    import { HttpLink } from 'apollo-link-http'
    import { InMemoryCache } from 'apollo-cache-inmemory'
    import 'tachyons'
    import Vue from 'vue'
    import VueApollo from 'vue-apollo'

    import App from './App'

    Vue.config.productionTip = false

    const httpLink = new HttpLink({
      // You should use an absolute URL here
      uri: '__SIMPLE_API_ENDPOINT__'
    })

    const apolloClient = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
      connectToDevTools: true
    })

    Vue.use(VueApollo)

    const apolloProvider = new VueApollo({
      defaultClient: apolloClient,
      defaultOptions: {
        $loadingKey: 'loading'
      }
    })

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      provide: apolloProvider.provide(),
      render: h => h(App)
    })

Run the app to check if everything works so far (`npm run dev`)! The app should now display the two links from the `allLinks` array:

![Run the app using npm run dev](http://imgur.com/NKQswvL.png)

### Writing the GraphQL Query

You’ll now load the actual links that are stored on the server. The first thing you need to do for that is define the GraphQL query that you want to send to the API.

Here is what it looks like:

    query AllLinks {
      allLinks {
        id
        createdAt
        description
        url
      }
    }

You could now simply execute this query in a Playground and retrieve the results from your GraphQL server. But how can you use it inside your JavaScript code?

### Queries with Apollo Client

When using VueJS with `vue-apollo` the `apollo` object makes it easy to fetch GraphQL data.

With this approach, all you need to do when it comes to data fetching is write the GraphQL query and `apollo-client` will fetch the data for you under the hood and then make it available in your component’s `data`.

In general, the process for you to add some data fetching logic will be very similar every time:

1.  Write the query as a JS constant using the `gql` parser function
2.  Initialize the property in your component’s `data` property
3.  Use the `apollo` object to fetch the results of your `graphql` query
4.  Access the query results in the component’s `data`

You will be writing your queries and mutations in a `constants` folder and simply importing these queries and mutations into components as needed.

Create a directory within `src` called `constants`. Within this new directory, create a file called `graphql.js`. This is where all of your queries and mutations will live.

Open up `src/constants/graphql.js` and add your first query:

    // 1
    import gql from 'graphql-tag'

    // 2
    export const ALL_LINKS_QUERY = gql`
      query AllLinksQuery {
        allLinks {
          id
          createdAt
          url
          description
        }
      }
    `

What’s going on here?

1.  First, you import `gql` from the `graphql-tag` package. The `gql` function is used to parse the plain GraphQL code.
2.  Now you define the plain GraphQL query. The name `AllLinksQuery` is the _operation name_ and will be used by Apollo to refer to this query in its internals. You export this parsed query as `ALL_LINKS_QUERY` so you can easily import it into components.

Next, you will add an `apollo` object to the `LinkList` component and call this newly created query to fetch data.

Open up `src/components/LinkList.vue`, import `ALL_LINKS_QUERY`, remove the hard-coded `allLinks`, and add the `apollo` object. Your `LinkList` component should now look like this:

    <template>
      <div>
        <!-- 1 -->
        <h4 v-if="loading">Loading...</h4>
        <link-item
          v-for="link in allLinks"
          :key="link.id"
          :link="link">
        </link-item>
      </div>
    </template>

    <script>
      // 2
      import { ALL_LINKS_QUERY } from '../constants/graphql'
      import LinkItem from './LinkItem'

      export default {
        name: 'LinkList',
        data () {
          return {
            // 3
            allLinks: [],
            loading: 0
          }
        },
        components: {
          LinkItem
        },
        // 4
        apollo: {
          allLinks: {
            query: ALL_LINKS_QUERY
          }
        }
      }
    </script>

What’s going on here?

1.  First, you use `v-if` to display a loading indicator while data is being fetched.
2.  You import the `ALL_LINKS_QUERY` which you just created
3.  Next, you initialize the `allLinks` data property to an empty array, and `loading` to 0. This will be incremented to 1 once data loads.
4.  Now you add an `apollo` object to your component and add an `allLinks` property to it. This property requires a `query` and you pass it the `ALL_LINKS_QUERY`.

That’s it! If you ran `npm run dev` earlier, you should see your UI update and show the two links thanks to built-in [hot-reloading](https://vue-loader.vuejs.org/en/features/hot-reload.html).
