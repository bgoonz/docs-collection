In this section, you’ll learn how you can implement authentication functionality with Apollo and Graphcool to provide a login to the user.

### Prepare the VueJS components

As in the sections before, you’ll set the stage for the login functionality by preparing the VueJS components that are needed for this feature. You’ll start by implementing the `AppLogin` component.

Create a new file in `src/components` and call it `AppLogin.vue`. Then paste the following code inside of it:

    <template>
      <div>
        <h4 class='mv3'>{{login ? 'Login' : 'Sign Up'}}</h4>
        <div class='flex flex-column'>
          <input
            v-show="!login"
            v-model="name"
            type="text"
            placeholder="Your name">
          <input
            v-model="email"
            type="text"
            placeholder="Your email address">
          <input
            v-model="password"
            type="password"
            placeholder="Password">
        </div>
        <div class='flex mt3'>
          <button
            type="button"
            class='pointer mr2 button'
            @click="confirm()">
            {{login ? 'login' : 'create account'}}
          </button>
          <button
            type="button"
            class='pointer button'
            @click="login = !login">
            {{login ? 'need to create an account?' : 'already have an account?'}}
          </button>
        </div>
      </div>
    </template>

    <script>
      import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'

      export default {
        name: 'AppLogin',
        data () {
          return {
            email: '',
            login: true,
            name: '',
            password: ''
          }
        },
        methods: {
          confirm () {
            // ... you'll implement this in a bit
          },
          saveUserData (id, token) {
            localStorage.setItem(GC_USER_ID, id)
            localStorage.setItem(GC_AUTH_TOKEN, token)
            this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
          }
        }
      }
    </script>

Let’s quickly gain an understanding of the structure of this new component which can have two major states.

One state is for users that already have an account and only need to login. In this state, the component will only render two `input` fields for the user to provide their `email` and `password`. Notice that `login` will be `true` in this case.

The second state is for users that haven’t created an account yet, and thus still need to sign up. Here, you also render a third `input` field where users can provide their `name`. In this case, `login` will be `false`.

The method `confirm` will be used to implement the mutations that we need to send for the login functionality.

Next you also need to provide the `src/constants/settings.js` file that we use to define keys for the credentials that we’re storing in the browser’s `localStorage`.

In `src/constants`, create a new file called `settings.js` and add the following two definitions:

    export const GC_USER_ID = 'graphcool-user-id'
    export const GC_AUTH_TOKEN = 'graphcool-auth-token'

With that component in place, you can go ahead and add a new route to your `src/router/index.js` file.

Open `src/router/index.js` and update the `routes` array to include the new route:

    routes: [
      {
        path: '/',
        component: LinkList
      },
      {
        path: '/create',
        component: CreateLink
      },
      {
        path: '/login',
        component: AppLogin
      }
    ],

Also import the `AppLogin` component near top of the same file:

    import AppLogin from '../components/AppLogin'

Finally, go ahead and add the `AppLink` to the `AppHeader` component that allows users to navigate to the `Login` page.

Open `src/components/AppHeader.vue` and update the file to look like the following:

    <template>
      <div class="flex pa1 justify-between nowrap orange">
        <div class="flex flex-fixed black">
          <div class="fw7 mr1">Hacker News</div>
          <router-link to="/" class="ml1 no-underline black">new</router-link>
          <div class="flex" v-if="userId">
            <div class="ml1">|</div>
            <router-link to="/create" class="ml1 no-underline black">submit</router-link>
          </div>
        </div>
        <div class="flex flex-fixed">
          <div v-if="userId" class="ml1 pointer black" @click="logout()">logout</div>
          <router-link v-else to="/login" class="ml1 no-underline black">login</router-link>
        </div>
      </div>
    </template>

    <script>
      import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'

      export default {
        name: 'AppHeader',
        computed: {
          userId () {
            return this.$root.$data.userId
          }
        },
        methods: {
          logout () {
            localStorage.removeItem(GC_USER_ID)
            localStorage.removeItem(GC_AUTH_TOKEN)
            this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
          }
        }
      }
    </script>

You first retrieve the `userId` from `this.$root.$data`. If the `userId` is not available, the *submit*-button won’t be rendered anymore. That way you make sure only authenticated users can create new links.

You’re also adding a second button on the right side of the `AppHeader` that users can use to login and logout.

Here is what the `AppLogin` and `AppHeader` components now look like:

![AppLogin and AppHeader running](http://imgur.com/YgAgtTB.png)

Before you can implement the authentication functionality in `src/components/AppLogin.vue`, you need to prepare the Graphcool project and enable authentication on the server-side.

### Enabling Email-and-Password Authentication & Updating the Schema

In the directory where `project.graphcool` is located, type the following into the terminal:

    graphcool console

This will open up the Graphcool Console - the web UI that allows you to configure your Graphcool project.

Select the *Integrations*-tab on the left side-menu and then click on the *Email-Password-Auth*-integration.

![The email-password-auth integration](http://imgur.com/FkyzuuM.png)

This will open the popup that allows you to enable Graphcool’s email-based authentication mechanism.

In the popup, simply click *Enable*.

![Click enable in the popup](http://imgur.com/HNdmas3.png)

Having the `Email-and-Password` auth provider enabled adds two new mutations to the project’s API:

    # 1. Create new user
    createUser(authProvider: { email: { email, password } }): User

    # 2. Login existing user
    signinUser(email: { email, password }): SignInUserPayload

    # SignInUserPayload bundles information about the `user` and `token`
    type SignInUserPayload {
      user: User
      token: String
    }

Next, you have to make sure that the changes introduced by the authentication provider are reflected in your local project file. You can use the `graphcool pull` command to update your local schema file with changes that happened remotely.

Open a terminal window and navigate to the directory where `project.graphcool` is located. Then run the following command:

    graphcool pull

> Note: Before the remote schema gets fetched, you will be asked to confirm that you want to override the current project file. You can confirm by typing `y`.

This will bump the schema `version` to `2` and update the `User` type to now also include the `email` and `password` fields:

    type User @model {
      createdAt: DateTime!
      email: String @isUnique
      id: ID! @isUnique
      password: String
      updatedAt: DateTime!
    }

Next you need to make one more modification to the schema. Generally, when updating the schema of a Graphcool project, you’ve got two ways of doing so:

1.  Use the web-based [Graphcool Console](https://console.graph.cool) and change the schema directly
2.  Use the Graphcool project file and the CLI to update the schema from your local machine

Open your project file `project.graphcool` and update the `User` and `Link` types as follows:

    type Link @model {
      createdAt: DateTime!
      description: String!
      id: ID! @isUnique
      updatedAt: DateTime!
      url: String!
      postedBy: User @relation(name: "UsersLinks")
    }

    type User @model {
      createdAt: DateTime!
      id: ID! @isUnique
      email: String @isUnique
      updatedAt: DateTime!
      name: String!
      password: String
      links: [Link!]! @relation(name: "UsersLinks")
    }

You added two things to the schema:

-   A new field on the `User` type to store the `name` of the user.
-   A new relation between the `User` and the `Link` type that represents a one-to-many relationship and expresses that one `User` can be associated with multiple links. The relation manifests itself in the two fields `postedBy` and `links`.

Save the file and execute the following command in the Terminal:

    graphcool push

Here is the Terminal output after you issue the command:

    $ graphcool push
     ✔ Your schema was successfully updated. Here are the changes:

      | (*)  The type `User` is updated.
      ├── (+)  A new field with the name `name` and type `String!` is created.
      |
      | (+)  The relation `UsersLinks` is created. It connects the type `Link` with the type `User`.

    Your project file project.graphcool was updated. Reload it in your editor if needed.

> **Note**: You can also use the `graphcool status` command after having made changes to the schema to preview the potential changes that would be performed with `graphcool push`.

Perfect, you’re all set now to actually implement the authentication functionality inside your app.

### Implementing the Login Mutations

`createUser` and `signinUser` are two regular GraphQL mutations that you can use in the same way as you did with the `createLink` mutation from before.

Open `src/constants/graphql.js` and add the following two definitions to the file:

    export const CREATE_USER_MUTATION = gql`
      mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
        createUser(
          name: $name,
          authProvider: {
            email: {
              email: $email,
              password: $password
            }
          }
        ) {
          id
        }

        signinUser(email: {
          email: $email,
          password: $password
        }) {
          token
          user {
            id
          }
        }
      }
    `

    export const SIGNIN_USER_MUTATION = gql`
      mutation SigninUserMutation($email: String!, $password: String!) {
        signinUser(email: {
          email: $email,
          password: $password
        }) {
          token
          user {
            id
          }
        }
      }
    `

Now, let’s gain a better understanding what’s going on in the two mutations that you just added to the `src/constants/graphql.js` file.

The `SIGNIN_USER_MUTATION` looks very similar to the mutations we saw before. It simply takes the `email` and `password` as arguments and returns info about the `user` as well as a `token` that you can attach to subsequent requests to authenticate the user. You’ll learn in a bit how to do so.

The `CREATE_USER_MUTATION` however is a bit different! Here, we actually define *two* mutations at once! When you’re doing that, the execution order is always *from top to bottom*. So, in your case the `createUser` mutation will be executed *before* the `signinUser` mutation. Bundling two mutations like this allows you to sign up and login in a single request!

All right, all that’s left to do is to call the two mutations inside the `AppLogin` component!

Open `src/components/AppLogin.vue` and implement `confirm` as follows:

    confirm () {
      const { name, email, password } = this.$data
      if (this.login) {
        this.$apollo.mutate({
          mutation: SIGNIN_USER_MUTATION,
          variables: {
            email,
            password
          }
        }).then((result) => {
          const id = result.data.signinUser.user.id
          const token = result.data.signinUser.token
          this.saveUserData(id, token)
        }).catch((error) => {
          alert(error)
        })
      } else {
        this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            name,
            email,
            password
          }
        }).then((result) => {
          const id = result.data.signinUser.user.id
          const token = result.data.signinUser.token
          this.saveUserData(id, token)
        }).catch((error) => {
          alert(error)
        })
      }
      this.$router.push({path: '/'})
    }

The code is pretty straightforward. If the user wants to only login, you’re calling the `signinUserMutation` and pass the provided `email` and `password` as arguments. Otherwise you’re using the `createUserMutation` where you also pass the user’s `name`. After the mutation is performed, you’re storing the `id` and `token` in `localStorage` and navigating back to the root route.

Also import the `CREATE_USER_MUTATION` and `SIGNIN_USER_MUTATION` constants near top of the `script` block:

    import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../constants/graphql'

You now need to make a couple more changes to `src/main.js` to get things working.

First, import `GC_USER_ID` near top of `src/main.js`:

    import { GC_USER_ID } from './constants/settings'

Still in `src/main.js` make the following change to the bottom of the file:

    // 1
    let userId = localStorage.getItem(GC_USER_ID)

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      provide: apolloProvider.provide(),
      router,
      // 2
      data: {
        userId
      },
      render: h => h(App)
    })

1.  You get the current `GC_USER_ID` from `localStorage` if there is one
2.  You set this `userId` on the `$root` `$data` object

You can now create an account by providing a `name`, `email` and `password`. Once you do so, the *submit*-button will be rendered again:

![Creating an account by providing name, email, and password](http://imgur.com/WoWLmDJ.png)

### Updating the `createLink`-mutation

Since you’re now able to authenticate users and also added a new relation between the `Link` and `User` type, you can also make sure that every new link that gets created in the app can store information about the user that posted it. That’s what the `postedBy` field on `Link` will be used for.

Open `src/constants/graphql.js` and update the definition of `CREATE_LINK_MUTATION` as follows:

    export const CREATE_LINK_MUTATION = gql`
      mutation CreateLinkMutation($description: String!, $url: String!, $postedById: ID!) {
        createLink(
          description: $description,
          url: $url,
          postedById: $postedById
        ) {
          id
          createdAt
          url
          description
          postedBy {
            id
            name
          }
        }
      }
    `

There are two major changes. You first added another argument to the mutation that represents the `id` of the user that is posting the link. Secondly, you also include the `postedBy` information in the *payload* of the mutation.

Now you need to make sure that the `id` of the posting user is included when you’re calling the mutation in `createLink`.

Open `src/components/CreateLink.vue` and update the implementation of `createLink` like so:

    createLink () {
      const postedById = localStorage.getItem(GC_USER_ID)
      if (!postedById) {
        console.error('No user logged in')
        return
      }

      const newDescription = this.description
      const newUrl = this.url
      this.description = ''
      this.url = ''

      this.$apollo.mutate({
        mutation: CREATE_LINK_MUTATION,
        variables: {
          description: newDescription,
          url: newUrl,
          postedById
        },
        update: (store, { data: { createLink } }) => {
          const data = store.readQuery({ query: ALL_LINKS_QUERY })
          data.allLinks.push(createLink)
          store.writeQuery({ query: ALL_LINKS_QUERY, data })
        }
      }).then((data) => {
        this.$router.push({path: '/'})
      }).catch((error) => {
        console.error(error)
        this.newDescription = newDescription
        this.newUrl = newUrl
      })
    }

For this to work, you also need to import the `GC_USER_ID` key.

Add the following import statement near the top of `src/components/CreateLink.vue`’s `script` block.

    import { GC_USER_ID } from '../constants/settings'

Perfect! Before sending the mutation, you’re now also retrieving the corresponding user id from `localStorage`. If that succeeds, you’ll pass it to the call to `createLinkMutation` so that every new `Link` will from now on store information about the `User` who created it.

If you haven’t done so before, go ahead and test the login functionality. Open `http://localhost:8080/login`. Then click the *need to create an account?*-button and provide some user data for the user you’re creating. Finally, click the *create Account*-button. If all went well, the app navigates back to the root route and your user was created. You can verify that the new user is there by checking the [data browser](https://www.graph.cool/docs/reference/console/data-browser-och3ookaeb/) or sending the `allUsers` query in a Playground.

### Configuring Apollo with the Auth Token

Now that users are able to login and obtain a token that authenticates them against the Graphcool backend, you actually need to make sure that the token gets attached to all requests that are sent to the API.

Since all the API requests are actually created and sent by the `ApolloClient` in your app, you need to make sure it knows about the user’s token. Luckily, Apollo provides a nice way for authenticating all requests by using [middleware](http://dev.apollodata.com/react/auth.html#Header).

Open `src/main.js` and put the following code *between* the creation of the `httpLink` and the instantiation of the `ApolloClient`:

    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      const token = localStorage.getItem(GC_AUTH_TOKEN)
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : null
        }
      })

      return forward(operation)
    })

Then directly import the key that you need to retrieve the token from `localStorage` on top of the same file:

    import { GC_USER_ID, GC_AUTH_TOKEN } from './constants/settings'

Everything looks fine but there is no `ApolloLink` (1) and auth middleware is not connected yet (2) to the instance of `ApolloClient`. Let’s fix this:

    import { ApolloClient } from 'apollo-client'
    import { HttpLink } from 'apollo-link-http'
    import { InMemoryCache } from 'apollo-cache-inmemory'
    // 1
    import { ApolloLink } from 'apollo-link'

    // ...

    const apolloClient = new ApolloClient({
      // 2
      link: authMiddleware.concat(httpLink),
      cache: new InMemoryCache(),
      connectToDevTools: true
    })

That’s it - now all your API requests will be authenticated if a `token` is available.

> Note: In a real application you would now configure the [authorization rules](https://www.graph.cool/docs/reference/auth/authorization-iegoo0heez/) (permissions) of your project to define what kind of operations authenticated and non-authenticated users should be allowed to perform.
