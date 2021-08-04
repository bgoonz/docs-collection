### Overview

GraphQL is the rising star of backend technologies. It replaces REST as an API design paradigm and is becoming the new standard for exposing the data and functionality of a web server.

In this tutorial, you’ll learn how to build an _idiomatic_ GraphQL server entirely from scratch. You are going to use the following technologies:

- [Apollo Server 2.18](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server): Fully-featured GraphQL Server with focus on easy setup, performance and great developer experience, [`graphql-js`](https://github.com/graphql/graphql-js) and more.
- [Prisma](https://www.prisma.io/): Replaces traditional ORMs. Use Prisma Client to access your database inside of GraphQL resolvers.
- [GraphQL Playground](https://github.com/prisma/graphql-playground): A “GraphQL IDE” that allows you to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to [Postman](https://www.getpostman.com/) which offers comparable functionality for REST APIs. Among other things, GraphQL Playground:
  - Auto-generates comprehensive documentation for all available API operations.
  - Provides an editor where you can write queries, mutations & subscriptions, with auto-completion(!) and syntax highlighting.
  - Lets you easily share your API operations.

### What to expect

The goal of this tutorial is to build an API for a [Hacker News](https://news.ycombinator.com/) clone. Here is a quick rundown of what to expect.

You’ll start by learning the basics of how a GraphQL server works, simply by defining a [_GraphQL schema_](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e) for the server and writing corresponding _resolver functions_. In the beginning, these resolvers will only work with data that’s stored in-memory - so nothing will persist beyond the runtime of the server.

Nobody wants a server that’s not able to store and persist data, right? Not to worry! Next, you’re going to add a [SQLite](http://sqlite.org/) database to the project which will be managed with [Prisma](https://www.prisma.io/).

Once you have the database connected, you are going to add more advanced features to the API.

You’ll start by implementing signup/login functionality that enables users to authenticate against the API. This will also allow you to check the permissions of your users for certain API operations.

Next, you’ll allow the consumers of the API to constrain the list of items they retrieve from the API by adding filtering and pagination capabalities to it.

Let’s get started 🚀
