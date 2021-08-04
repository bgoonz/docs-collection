In this section, you’ll learn how you can send mutations with urql. It’s actually not that different from sending queries and follows the same three steps that were mentioned before, with minor (but logical) differences in the last two steps:

1.  write the query as a JavaScript constant using the `gql` parser function
2.  use the `useMutation` hook passing the GraphQL mutation as the first and only argument
3.  call the `executeMutation` with the mutation’s variables and receive the result as a promise or in the first `state` part of the array that the `useMutation` hook returns

The difference between `useQuery` and `useMutation` are minor. While `useQuery` accepts multiple options, including `query` and `variables`, the `useMutation` hook accepts the mutation definition as its only argument. It still returns an array of `[state, executeMutation]`. The `executeMutation` function accepts variables as its first argument and returns a promise of the mutation result. The `state` part of the array will be updated with the mutation’s state and `data` as well.

### Why do the promise _and_ the `state` both exist?

As you can tell the `useMutation` hook still returns `[state, executeMutation]` very similar to `useQuery` which returns `[state, executeQuery]`. In both cases, the `state` part is updated with the current mutation’s or query’s result. The difference is that `useQuery` eagerly executes the queries you pass to it, and the `useMutation` hook only executes once you call `executeMutation`.

Furthermore, `executeMutation` returns a promise of the mutation’s result, which is very similar to `state`, except that it’s missing the `fetching: boolean` property.

This is because accessing both `useMutation`’s state and having a promise cover very common use-cases. You may want to run a side-effect after a mutation completes, for instance navigating away from the current page or closing a modal. Meanwhile you may also want to use `state.fetching` to change the UI while the mutation is running. This is why `useMutation` provides both!

### Preparing the React components

Like before, let’s start by writing the React component where users will be able to add new links.

Create a new file in the `src/components` directory and call it `CreateLink.js`. Then paste the following code into it:

    import React from 'react'

    const CreateLink = props => {
      const [description, setDescription] = React.useState('')
      const [url, setUrl] = React.useState('')

      const submit = React.useCallback(() => {
        // ... you'll implement this 🔜
      }, [])

      return (
        <div>
          <div className="flex flex-column mt3">
            <input
              className="mb2"
              value={description}
              onChange={e => setDescription(e.target.value)}
              type="text"
              placeholder="A description for the link"
            />
            <input
              className="mb2"
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="text"
              placeholder="The URL for the link"
            />
          </div>
          <button onClick={submit}>
            Submit
          </button>
        </div>
      )
    }

    export default CreateLink

Here you’ve added two `input` fields using which users will provide the `url` and `description` of the `Link` that they want to create. The data that’s typed into these fields is stored in `React.useState` hooks and will be used when the mutation is sent.

### Writing the mutation

But how can you now actually send the mutation to your server? Let’s follow the three steps from before.

First you need to define the mutation and add a `useMutation` hook to the `CreateLink` component, much in a similar way as we’ve added a query to `LinkList` before.

In `CreateLink.js`, add the following statement to the top of the file:

    import gql from 'graphql-tag';
    import { useMutation } from 'urql';

    const POST_MUTATION = gql`
      mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
          id
          createdAt
          url
          description
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
    `

Then add the `useMutation` hook to the `CreateLink` component and implement a handler by replacing the `submit` stub:

    const CreateLink = props => {
      const [description, setDescription] = React.useState('')
      const [url, setUrl] = React.useState('')

      const [state, executeMutation] = useMutation(POST_MUTATION)

      const submit = React.useCallback(() => {
        executeMutation({ url, description })
      }, [executeMutation, url, description])

      // ...
    }

Let’s take a closer look again to understand what’s going on:

1.  You’ve added imports for the `gql` tag and the `useMutation` hook.
2.  Then you’ve defined `POST_MUTATION` which accepts a description and url as variables.
3.  You’ve added the `useMutation` hook which accepts the new mutation and returns you the current state of the mutation and an `executeMutation` function as an array.
4.  Lastly you’ve written a `submit` handler, which calls `executeMutation` with the variables from your input state hooks.

Let’s see the mutation in action!

Still in `CreateLink.js`, replace the `button` element as follows:

    <button
      disabled={state.fetching}
      onClick={submit}
    >
      Submit
    </button>

As you can see, `useMutation` is as simple to use as `useQuery`. All you need to do is pass it a mutation definition and call `executeMutation` with your variables. It also returns `state`, which is used here to disable the “Submit” button, while the mutation is still in progress.

Go ahead and see if the mutation works. To be able to test the code, open `App.js` and change it to render `CreateLink` instead of `LinkList`:

    import React from 'react'
    // import LinkList from './LinkList'
    import CreateLink from './CreateLink'

    const App = () => <CreateLink />

    export default App

Now, run `yarn start` and you’ll see the following screen:

![Run yarn start](http://imgur.com/AJNlEfj.png)

Two input fields and a “Submit” button. Not pretty, but functional.

Enter some data into the fields, e.g.:

- **Description**: `The best learning resource for GraphQL`
- **URL**: `www.howtographql.com`

Then submit! You won’t get any visual feedback in the UI apart from the button switching to its disabled state, but let’s see if the query actually worked by checking the current list of links in a Playground.

You can open a Playground again by navigating to `http://localhost:4000` in your browser. Then send the following query:

    {
      feed {
        links {
          description
          url
        }
      }
    }

You’ll see the following server response:

    {
      "data": {
        "feed": {
          "links": [
            // ...
            {
              "description": "The best learning resource for GraphQL",
              "url": "www.howtographql.com"
            }
          ]
        }
      }
    }

Awesome! The mutation works, great job! 💪
