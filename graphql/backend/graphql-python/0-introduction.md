### Motivation

[Python](https://www.python.org) is a general purpose and mature language, used to create solutions from Web APIs to Artificial Intelligence. It has a lovable community, empowering the minorities and making everyone feel welcomed. If you are new to the language, you might want to check [Learn Python the Hard Way](https://learnpythonthehardway.org/) – it’s really easy!

One of its most famous libraries is [Django](https://www.djangoproject.com/), _the web framework for perfectionists with deadlines_. It allows you to quickly prototype and build full web applications with less code.

Last but not least, there’s [Graphene](http://graphene-python.org/) and [Graphene-Django](http://docs.graphene-python.org/projects/django/en/latest/), exposing a simple and powerful API for creating GraphQL servers.

In this tutorial, you’ll implement your own GraphQL server by developing a Hackernews clone using the technologies mentioned above.

### What is a GraphQL Server?

A GraphQL server should be able to:

- Receive requests following the GraphQL format, for example:

<!-- -->

    { "query": "query { allLinks { url } }" }

- Connect to any necessary databases or services responsible for storing/fetching the actual data.
- Return a GraphQL response with the requested data, such as this:

<!-- -->

    { "data": { "allLinks": { "url": "http://graphql.org/" } } }

- Validate incoming requests against the schema definition and the supported format. For example, if a query is made with an unknown field, the response should be something like:

<!-- -->

    {
      "errors": [{
        "message": "Cannot query field \"unknown\" on type \"Link\"."
      }]
    }

These are the basic features all GraphQL servers have, but of course, they can do much more as needed. You can read in more detail about the expected behavior of a GraphQL server in the [official specification](https://graphql.org/).

### Schema-Driven Development

An important thing to note about building a GraphQL server is that the main development process will revolve around the schema definition. You’ll see in this chapter that the main steps we’ll follow will be something like this:

1.  Define your types and the appropriate queries and mutations for them.
2.  Implement functions called **resolvers** to handle these types and their fields.
3.  As new requirements arrive, go back to step 1 to update the schema and continue through the other steps.

The schema is a _contract_ agreed on between the frontend and backend, so keeping it at the center allows both sides of the development to evolve without going off the spec. This also makes it easier to parallelize the work, since the frontend can move on with full knowledge of the API from the start, using a simple mocking service which can later be easily replaced with the final server.

### Revisions

#### v2.0

Add Token based authentication with [django-graphql-jwt](https://github.com/flavors/django-graphql-jwt). Thanks [mongkok](https://github.com/mongkok) for the library and contribution!

#### v1.1

Change Django and Graphene to version 2.

#### v1.0

Original content :)
