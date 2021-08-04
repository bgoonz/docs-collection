There are two top-level operation types in GraphQL: queries and mutations.

Queries are used when we want to read data.

Mutations are used when we want to change data. We use mutations when we want to create, update, or delete records.

In this section, we’ll learn how to send mutations with Apollo. Doing so is actually not that much different than sending queries and follows similar steps.

1.  Write the mutation as a JavaScript constant using the `gql` parser function
2.  Use the `useMutation` hook provided by Apollo Client to send mutations to our GraphQL server
3.  Read the result of the mutation

### Preparing the React components

Like before, let’s start by writing the React component where users will be able to add new links.

Create a new file in the `src/components` directory and call it `CreateLink.js`. Then paste the following code into it:

    import React, { useState } from 'react';

    const CreateLink = () => {
      const [formState, setFormState] = useState({
        description: '',
        url: ''
      });

      return (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-column mt3">
              <input
                className="mb2"
                value={formState.description}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    description: e.target.value
                  })
                }
                type="text"
                placeholder="A description for the link"
              />
              <input
                className="mb2"
                value={formState.url}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    url: e.target.value
                  })
                }
                type="text"
                placeholder="The URL for the link"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };

    export default CreateLink;

This is a standard setup for a React component with two `input` fields where users can provide the `url` and `description` of the `Link` they want to create. The data that’s typed into these fields is held in the component’s local state by way of the `useState` hook.

### Writing the mutation

Our job now is to take the user input and send it as arguments in a GraphQL mutation.

First, we need to define the mutation in our JavaScript code and use the `useMutation` hook to fire the mutation.

In `CreateLink.js`, add the following statement to the top of the file:

    import { useMutation, gql } from '@apollo/client';

    const CREATE_LINK_MUTATION = gql`
      mutation PostMutation(
        $description: String!
        $url: String!
      ) {
        post(description: $description, url: $url) {
          id
          createdAt
          url
          description
        }
      }
    `;

Next, pass the `CREATE_LINK_MUTATION` to the `useMutation` hook and pass in the data provided in the input fields as variables.

    const CreateLink = () => {
      // ...
      const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
          description: formState.description,
          url: formState.url
        }
      });
      // ...
    };

When we use the `useMutation` hook, we need to destructure out a function that can be used to call the mutaton. That’s what `createLink` is in the code block above. We’re now free to call the function whenever we need to when the component renders.

Make a call to `createLink` in the `onSubmit` event on the `form` tag.

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createLink();
          }}
        >
          ...
        </form>
      </div>
    );

We’re now ready to check wether the mutations are working. Open `App.js` and change it up as follows:

    import React from 'react';
    import CreateLink from './CreateLink';
    import LinkList from './LinkList';

    const App = () => {
      return <CreateLink />;
    };

    export default App;

Now, when we run `yarn start`, we should see the following:

![Running yarn start](https://imgur.com/FBEyWMp.png)

Two input fields and a **Submit** button - not very pretty but functional.

Enter some data into the fields, e.g.:

- **Description**: `The best learning resource for GraphQL`
- **URL**: `howtographql.com`

Then click the **Submit** button. You won’t get any visual feedback in the UI, but let’s see if the query actually worked by checking the current list of links in a Playground.

You can open a Playground again by navigating to `http://localhost:4000` in your browser. Then send the following query:

    # Try to write the query here
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
              "url": "howtographql.com"
            }
          ]
        }
      }
    }

Awesome! The mutation works, great job! 💪
