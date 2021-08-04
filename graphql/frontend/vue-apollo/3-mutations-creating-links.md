In this section, you’ll learn how you can send mutations with Apollo. It’s actually not that different from sending queries and follows similar steps that were mentioned before with queries:

1.  Write the query as a JS constant using the `gql` parser function
2.  use `apollo` to call the mutation through the `mutate` method

### Preparing the VueJS components

Like before, let’s start by writing the VueJS component where users will be able to add new links.

Create a new file in the `src/components` directory and call it `CreateLink.vue`. Then paste the following code into it:

    <template>
      <div>
        <div class="flex flex-column mt3">
          <input
            class="mb2"
            v-model="description"
            type="text"
            placeholder="A description for the link">
          <input
            class="mb2"
            v-model="url"
            type="text"
            placeholder="The URL for the link">
        </div>
        <button @click="createLink()">Submit</button>
      </div>
    </template>

    <script>
      export default {
        name: 'CreateLink',
        data () {
          return {
            description: '',
            url: ''
          }
        },
        methods: {
          createLink () {
            // ... you'll implement this in a bit
          }
        }
      }
    </script>

This is a standard setup for a VueJS component with two `input` fields where users can provide the `url` and `description` of the `Link` they want to create. The data that’s typed into these fields is stored in the component’s `data` and will be used in `createLink` when the mutation is sent.

### Writing the Mutation

But how can you now actually send the mutation? Let’s follow the three steps from before.

First you need to define the mutation in your `graphql` constants file and parse your query with `gql`. You’ll do that in a similar way as with the query before.

In `src/constants/graphql.js`, add the following statement to the bottom of the file:

    // 1
    export const CREATE_LINK_MUTATION = gql`
      # 2
      mutation CreateLinkMutation($description: String!, $url: String!) {
        createLink(
          description: $description,
          url: $url,
        ) {
          id
          createdAt
          url
          description
        }
      }
    `

Let’s take a closer look again to understand what’s going on:

1.  You first create the JavaScript constant called `CREATE_LINK_MUTATION` that stores the mutation.
2.  Now you define the actual GraphQL mutation. It takes two arguments, `url` and `description`, that you’ll have to provide when calling the mutation.

Before moving on, you need to import the mutation from the `graphql` constants file. Add the following to the top of `src/components/CreateLink.vue`’s `script` block:

    import { CREATE_LINK_MUTATION } from '../constants/graphql'

Let’s see the mutation in action!

Still in `src/components/CreateLink.vue`, implement the `createLink` mutation as follows:

    createLink () {
      const { description, url } = this.$data
      this.$apollo.mutate({
        mutation: CREATE_LINK_MUTATION,
        variables: {
          description,
          url
        }
      })
    }

As promised, all you need to do is call `this.$apollo.mutate` and pass the mutation and the variables that represent the user input.

Go ahead and see if the mutation works. To be able to test the code, open `src/App.vue` and change the template to looks as follows:

    <template>
      <div id="app">
        <link-list></link-list>
        <create-link></create-link>
      </div>
    </template>

Next, import the `CreateLink` component by adding the following statement to the top of `src/App.vue`’s `script` block:

    import CreateLink from './components/CreateLink'

Still in the `App` component you also need to add `CreateLink` to the `components` object:

    components: {
      CreateLink,
      LinkList
    }

You should now see the following screen:

![The app running at localhost:8080](http://imgur.com/KXMe1MG.png)

Two input fields and a _submit_-button - not very pretty, but functional.

Enter some data into the fields, e.g.:

- **Description**: `The best learning resource for GraphQL`
- **URL**: `www.howtographql.com`

Then click the _submit_-button. You won’t get any visual feedback in the UI, but let’s see if the query actually worked by checking the current list of links in a Playground.

Type `graphcool playground` into a Terminal and send the following query:

    {
      allLinks {
        description
        url
      }
    }

You’ll see the following server response:

    {
      "data": {
        "allLinks": [
          // ...,
          {
            "description": "The best learning resource for GraphQL",
            "url": "www.howtographql.com"
          }
        ]
      }
    }

Awesome! The mutation works, great job! 💪
