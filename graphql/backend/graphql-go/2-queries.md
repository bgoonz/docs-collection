In the previous section we setup up the server, Now we try to implement a Query that we defined in `schema.graphqls`.

## What Is A Query <span id="what-is-a-query"></span>

a query in graphql is asking for data, you use a query and specify what you want and graphql will return it back to you.

## Simple Query <span id="simple-query"></span>

open `schema.resolvers.go` file and take a look at Links function,

    func (r *queryResolver) Links(ctx context.Context) ([]*model.Link, error) {

Notice that this function takes a Context and returns slice of Links and an error(if there are any). ctx argument contains the data from the person who sends request like which user is working with app(we’ll see how later), etc.

Let’s make a dummy response for this function, for now.

`schema.resolvers.go`:

    func (r *queryResolver) Links(ctx context.Context) ([]*model.Link, error) {
      var links []*model.Link
      dummyLink := model.Link{
        Title: "our dummy link",
        Address: "https://address.org",
        User: &model.User{Name: "admin"},
      }
        links = append(links, &dummyLink)
        return links, nil
    }

now run the server with `go run server.go` and send this query in Graphiql:

    query {
        links{
        title
        address,
        user{
          name
        }
      }
    }

And you will get:

    {
      "data": {
        "links": [
          {
            "title": "our dummy link",
            "address": "https://address.org",
            "user": {
              "name": "admin"
            }
          }
        ]
      }
    }

Now you know how we generate response for our graphql server. But this response is just a dummy response we want be able to query all other users links, In the next section we setup database for our app to be able to save links and retrieve them from database.
