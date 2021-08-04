In this section, you’ll learn how you can bring realtime functionality into your app by implementing GraphQL subscriptions. The goal is to implement two subscriptions to be exposed by your GraphQL server:

- Send realtime updates to subscribed clients when a new `Link` element is _created_
- Send realtime updates to subscribed clients when an existing `Link` element is _upvoted_

### What are GraphQL subscriptions?

Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific _event_ happens. Subscriptions are usually implemented with [WebSockets](https://en.wikipedia.org/wiki/WebSocket). In that setup, the server maintains a steady connection to its subscribed client. This also breaks the “Request-Response-Cycle” that were used for all previous interactions with the API.

Instead, the client initially opens up a long-lived connection to the server by sending a _subscription query_ that specifies which _event_ it is interested in. Every time this particular event happens, the server uses the connection to push the event data to the subscribed client(s).

### Implementing GraphQL subscriptions

We will be using `PubSub` from the `apollo-server` library that we have already been using for our GraphQL server to implement subscriptions to the following _events_:

- A new model is **created**
- An existing model **updated**
- An existing model is **deleted**

You will do this by first adding an instance of `PubSub` to the context, just as we did with `PrismaClient`, and then calling its methods in the resolvers that handle each of the above events.

### Setting up `PubSub`

Open your `index.js` file where we instantiate the server and add the following code:

    // ... previous import statements
    const { PubSub } = require('apollo-server')

    const pubsub = new PubSub()

Here, you’re creating an instance of `PubSub` and storing it in the variable `pubsub`, just as we stored an instance of `PrismaClient` in the variable `prisma`.

Now, in the same file, add `pubsub` to the context, just as did with `prisma`:

    const server = new ApolloServer({
      typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
      resolvers,
      context: ({ req }) => {
        return {
          ...req,
          prisma,
          pubsub,
          userId:
            req && req.headers.authorization
              ? getUserId(req)
              : null
        };
      }
    });

Great! Now we can access the methods we need to implement our subscriptions from inside our resolvers via `context.pubsub`!

### Subscribing to new `Link` elements

Alright – let’s go ahead and implement the subscription that allows your clients to subscribe to newly created `Link` elements.

Just like with queries and mutations, the first step to implement a subscription is to extend your GraphQL schema definition.

Open your application schema and add the `Subscription` type:

    type Subscription {
      newLink: Link
    }

Next, go ahead and implement the resolver for the `newLink` field. Resolvers for subscriptions are slightly different than the ones for queries and mutations:

1.  Rather than returning any data directly, they return an `AsyncIterator` which subsequently is used by the GraphQL server to push the event data to the client.
2.  Subscription resolvers are wrapped inside an object and need to be provided as the value for a `subscribe` field. You also need to provide another field called `resolve` that actually returns the data from the data emitted by the `AsyncIterator`.

To adhere to the modular structure of your resolver implementation, first create a new file called `Subscription.js`:

    touch src/resolvers/Subscription.js

Here’s how you need to implement the subscription resolver in that new file:

    function newLinkSubscribe(parent, args, context, info) {
      return context.pubsub.asyncIterator("NEW_LINK")
    }

    const newLink = {
      subscribe: newLinkSubscribe,
      resolve: payload => {
        return payload
      },
    }

    module.exports = {
      newLink,
    }

The code seems pretty straightforward. As mentioned before, the subscription resolver is provided as the value for a `subscribe` field inside a plain JavaScript object.

Now you can see how we access `pubsub` on the `context` and call `asyncIterator()` passing the string `"NEW_LINK"` into it. This function is used to resolve subscriptions and push the event data.

### Adding subscriptions to your resolvers

The last thing we need to do for our subscription implementation itself is to actually call this function inside of a resolver!

Pop over to `Mutation.js` and locate your `post` resolver function, adding the following call to `pubsub.publish()` right before we return our `newLink`:

    async function post(parent, args, context, info) {
      const { userId } = context;

      const newLink = await context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
          postedBy: { connect: { id: userId } },
        }
      })
      context.pubsub.publish("NEW_LINK", newLink)

      return newLink
    }

Now you can see how we pass the same string to the `publish` method as you added in your `newLinkSubscribe` function just above, along with passing in the `newLink` as a second argument!

Ok, I’m sure you’re dying to test out your brand-spanking new Subscription! All we need to do now is make sure your GraphQL server knows about your changes.

Open `index.js` and add an import statement for the `Subscription` module to the top of the file:

    const Subscription = require('./resolvers/Subscription')

Then, update the definition of the `resolvers` object to looks as follows:

    const resolvers = {
      Query,
      Mutation,
      Subscription,
      User,
      Link,
    }

### Testing subscriptions

With all the code in place, it’s time to test your realtime API ⚡️ You can do so by using two instances (i.e. tabs or windows) of the GraphQL Playground at once.

If you haven’t already, restart the server by first killing it with **CTRL+C**, then run `node src/index.js` again.

Next, open two browser windows and navigate both to the endpoint of your GraphQL server: [`http://localhost:4000`](http://localhost:4000).

As you might guess, you’ll use one Playground to send a subscription query and thereby create a permanent websocket connection to the server. The second one will be used to send a `post` mutation which triggers the subscription.

In one Playground, send the following subscription:

    subscription {
      newLink {
        id
        url
        description
        postedBy {
          id
          name
          email
        }
      }
    }

In contrast to what happens when sending queries and mutations, you’ll not immediately see the result of the operation. Instead, there’s a loading spinner indicating that it’s waiting for an event to happen.

![loading spinner](https://imgur.com/hmqRJws.png)

Time to trigger a subscription event.

Send the following `post` mutation inside a GraphQL Playground. Remember that you need to be authenticated for that (see the previous chapter to learn how that works):

    mutation {
      post(url: "www.graphqlweekly.com", description: "Curated GraphQL content coming to your email inbox every Friday") {
        id
      }
    }

Now observe the Playground where the subscription was running:

![subscription running](https://imgur.com/0BJQhWj.png)

### Adding a voting feature

#### Implementing a `vote` mutation

The next feature to be added is a voting feature which lets users _upvote_ certain links. The very first step here is to extend your Prisma data model to represent votes in the database.

Open `prisma/schema.prisma` and adjust it to look as follows:

    model Link {
      id          Int      @id @default(autoincrement())
      createdAt   DateTime @default(now())
      description String
      url         String
      postedBy    User?     @relation(fields: [postedById], references: [id])
      postedById  Int?
      votes       Vote[]
    }

    model User {
      id       Int    @id @default(autoincrement())
      name     String
      email    String @unique
      password String
      links    Link[]
      votes    Vote[]
    }

    model Vote {
      id     Int  @id @default(autoincrement())
      link   Link @relation(fields: [linkId], references: [id])
      linkId Int
      user   User @relation(fields: [userId], references: [id])
      userId Int

      @@unique([linkId, userId])
    }

As you can see, you added a new `Vote` type to the data model. It has one-to-many relationships to the `User` and the `Link` type.

Now migrate your database schema with the following commands:

    npx prisma migrate dev --name "add-vote-model"

To apply the changes and update your Prisma Client API so it exposes CRUD queries for the new `Vote` model, regenerate `PrismaClient`.

Run the following command in your terminal:

    npx prisma generate

Now, with the process of schema-driven development in mind, go ahead and extend the schema definition of your application schema so that your GraphQL server also exposes a `vote` mutation:

    type Mutation {
      post(url: String!, description: String!): Link!
      signup(email: String!, password: String!, name: String!): AuthPayload
      login(email: String!, password: String!): AuthPayload
      vote(linkId: ID!): Vote
    }

The referenced `Vote` type also needs to be defined in the GraphQL schema:

    type Vote {
      id: ID!
      link: Link!
      user: User!
    }

It should also be possible to query all the `votes` from a `Link`, so you need to adjust the `Link` type in `schema.graphql` as well.

Open `schema.graphql` and add the `votes` field to `Link`:

    type Link {
      id: ID!
      description: String!
      url: String!
      postedBy: User
      votes: [Vote!]!
    }

You know what’s next: Implementing the corresponding resolver functions.

Add the following function to `src/resolvers/Mutation.js`:

    async function vote(parent, args, context, info) {
      // 1
      const userId = context.userId

      // 2
      const vote = await context.prisma.vote.findUnique({
        where: {
          linkId_userId: {
            linkId: Number(args.linkId),
            userId: userId
          }
        }
      })

      if (Boolean(vote)) {
        throw new Error(`Already voted for link: ${args.linkId}`)
      }

      // 3
      const newVote = context.prisma.vote.create({
        data: {
          user: { connect: { id: userId } },
          link: { connect: { id: Number(args.linkId) } },
        }
      })
      context.pubsub.publish("NEW_VOTE", newVote)

      return newVote
    }

Here is what’s going on:

1.  Similar to what you’re doing in the `post` resolver, the first step is to validate the incoming JWT with the `getUserId` helper function. If it’s valid, the function will return the `userId` of the `User` who is making the request. If the JWT is not valid, the function will throw an exception.
2.  To protect against those pesky “double voters” (or honest folks who accidentally click twice), you need to check if the vote already exists or not. First, you try to fetch a vote with the same `linkId` and `userId`. If the vote exists, it will be stored in the `vote` variable, resulting in the boolean `true` from your call to `Boolean(vote)` – throwing an error kindly telling the user that they already voted.
3.  If that `Boolean(vote)` call returns `false`, the `vote.create` method will be used to create a new `Vote` that’s _connected_ to the `User` and the `Link`.

Also, don’t forget to adjust the export statement to include the `vote` resolver in the module:

    module.exports = {
      post,
      signup,
      login,
      vote,
    }

You also need to account for the new relations in your GraphQL schema:

- `votes` on `Link`
- `user` on `Vote`
- `link` on `Vote`

Similar to before, you need to implement resolvers for these.

Open `Link.js` and add the following function to it:

    function votes(parent, args, context) {
      return context.prisma.link.findUnique({ where: { id: parent.id } }).votes()
    }

Don’t forget to include the new resolver in the exports:

    module.exports = {
      postedBy,
      votes,
    }

Finally you need to resolve the relations from the `Vote` type.

Create a new file called `Vote.js` inside `resolvers`:

    touch src/resolvers/Vote.js

Great job!

Now add the following code to it:

    function link(parent, args, context) {
      return context.prisma.vote.findUnique({ where: { id: parent.id } }).link()
    }

    function user(parent, args, context) {
      return context.prisma.vote.findUnique({ where: { id: parent.id } }).user()
    }

    module.exports = {
      link,
      user,
    }

Finally the `Vote` resolver needs to be included in the main `resolvers` object in `index.js`.

Open `index.js` and add a new import statement to its top:

    const Vote = require('./resolvers/Vote')

Finally, include the `Vote` resolver in the `resolvers` object:

    const resolvers = {
      Query,
      Mutation,
      Subscription,
      User,
      Link,
      Vote,
    }

Your GraphQL API now accepts `vote` mutations! 👏

#### Subscribing to new votes

The last task in this chapter is to add a subscription that fires when new `Vote`s are being created. You’ll use an analogous approach as for the `newLink` query for that.

Add a new field to the `Subscription` type of your GraphQL schema:

    type Subscription {
      newLink: Link
      newVote: Vote
    }

Next, you need to add the subscription resolver function.

Add the following code to `Subscription.js`:

    function newVoteSubscribe(parent, args, context, info) {
      return context.pubsub.asyncIterator("NEW_VOTE")
    }

    const newVote = {
      subscribe: newVoteSubscribe,
      resolve: payload => {
        return payload
      },
    }

And update the export statement of the file accordingly:

    module.exports = {
      newLink,
      newVote,
    }

All right, that’s it! You can now test the implementation of your `newVote` subscription!

If you haven’t done so already, stop and restart the server by first killing it with **CTRL+C**, then run `node src/index.js`. Afterwards, open a new Playground with the GraphQL CLI by running `graphql playground`.

You can use the following subscription for that:

    subscription {
      newVote {
        id
        link {
          url
          description
        }
        user {
          name
          email
        }
      }
    }

If you’re unsure about writing one yourself, here’s a sample `vote` mutation you can use. You’ll need to replace the `__LINK_ID__` placeholder with the `id` of an actual `Link` from your database. Also, make sure that you’re authenticated when sending the mutation.

    mutation {
      vote(linkId: "__LINK_ID__") {
        link {
          url
          description
        }
        user {
          name
          email
        }
      }
    }

![authenticated when sending the mutation](https://i.imgur.com/cYkqy1j.png)
