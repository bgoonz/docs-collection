In this section, you’ll learn how you can send mutations with Apollo. It’s actually not that different from sending queries and follows the same steps that were mentioned before:

1.  Write the mutation in a `.graphql` file.
2.  Import the mutation and use the `apollo` service to send the mutation.

### Preparing the app

Like before, start by creating the route and template where users will be able to add new links.

From the terminal, use the Ember generator and create a new route:

    ember generate route create

You will not be needing the route file the generator created, so delete the `app/routes/create.js` file. You used the ember-cli generator mainly for the template and the route addition to your router.

Replace the code in the `app/templates/create.hbs` file with the following:

    <div>
      <form class='flex flex-column mt3' {{action 'createLink' on='submit'}}>
        {{input class='mb2' type='text' placeholder='A description for the link' value=description}}
        {{input class='mb2' type='text' placeholder='The URL for the link' value=url}}
        <div class='flex'>
          {{input type='submit' value='submit'}}
        </div>
      </form>
    </div>

This is a standard setup for a form with two `input` fields where users can provide the `url` and `description` of the link they want to create.

### Writing the Mutation

But how can you now actually send the mutation? Follow the three steps from before.

First you need to define the mutation in a `.graphql` file. You’ll do that in a similar way as with the query before.

In the `app/gql/mutations` folder you created before, add a new file named `createLink.graphql` and add the following code:

    mutation CreateLinkMutation($description: String!, $url: String!) {
      createLink(description: $description, url: $url) {
        id
        createdAt
        url
        description
      }
    }

Here you are defining the actual GraphQL mutation. It takes two arguments, `description` and `url` that you’ll have to provide when calling the mutation. After the link is created, the fields defined are returned.

Time to wire everything up and see it in action!

The first thing you will need to do is create a controller for your `create` route. You can do that using an Ember generator:

    ember generate controller create

Add the following to the new controller:

    import Ember from 'ember';
    // 1.
    import mutation from ‘hackernews-ember-apollo/gql/mutations/createLink';

    export default Ember.Controller.extend({
      actions: {
        // 2.
        createLink() {
          // 3.
          const description = this.get('description');
          const url = this.get('url');
          let variables = { description, url };

          // 4.
          return this.get('apollo')
            .mutate(
              {
                mutation,
                variables
              },
              'createLink'
            )
            .then(() => {
              // 5.
              this.set('description', '');
              this.set('url', '');
              this.transitionToRoute('links');
            }).catch(error => alert(error));
        }
      },

      // 6.
      apollo: Ember.inject.service()
    });

Let’s walk through what is happening in the controller:

1.  First, you are importing the mutation that you just defined.
2.  An action titled `createLink` is added. Within that action you are:
3.  Accessing the values from the form and setting those into a `variables` variable.
4.  Calling the `mutate` method on your `apollo` service and passing in the mutation you wrote earlier along with the variables to save the link.
5.  After your promise resolves, you are clearing the form and transitioning to the `link` route.
6.  Last, and surely not least, you are injecting your `apollo` service.

Pretty simple!

Go ahead and see if the mutation works; run `yarn start` and you’ll see the following screen:

![Run yarn start to test the mutation](http://i.imgur.com/om3TXDz.png)

Two input fields and a _submit_-button - not very pretty but functional.

Enter some data into the fields, e.g.:

- **Description**: `The best learning resource for GraphQL`
- **URL**: `www.howtographql.com`

Then click the _submit_-button. You won’t get any visual feedback in the UI until after the page transitions, but you can still see if the query actually worked by checking the current list of links in a Playground.

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
          {
            "description": "The best learning resource for GraphQL",
            "url": "www.howtographql.com"
          },
          // ...
        ]
      }
    }

Awesome! The mutation works, great job! 💪
