Our CreateLink mutation left incomplete because we could not authorize users back then, so let’s get back to it and complete the implementation. With what we have now, we can check whether the user is logged in or not by checking the Authorization HTTP header. With what we did in authentication middleware we can retrieve user in resolvers using ctx argument. so in CreateLink function add these lines:

`schema.resolvers.go`:

    func (r *mutationResolver) CreateLink(ctx context.Context, input model.NewLink) (*model.Link, error) {
        // 1
        user := auth.ForContext(ctx)
        if user == nil {
            return &model.Link{}, fmt.Errorf("access denied")
        }
        .
        .
        .
        // 2
        link.User = user
        linkID := link.Save()
        grahpqlUser := &model.User{
            ID:   user.ID,
            Name: user.Username,
        }
        return &model.Link{ID: strconv.FormatInt(linkID, 10), Title:link.Title, Address:link.Address, User:grahpqlUser}, nil
    }

Explanation: \* 1: we get user object from ctx and if user is not set we return error with message access denied. \* 2: then we set user of that link equal to the user is requesting to create the link.

And edit the links query to get user from db too.

`schema.resolvers.go`:

    func (r *queryResolver) Links(ctx context.Context) ([]*model.Link, error) {
        var resultLinks []*model.Link
        var dbLinks []links.Link
        dbLinks = links.GetAll()
        for _, link := range dbLinks{
            grahpqlUser := &model.User{
                ID:   link.User.ID,
                Name: link.User.Username,
            }
            resultLinks = append(resultLinks, &model.Link{ID: link.ID, Title: link.Title, Address: link.Address, User: grahpqlUser})
        }
        return resultLinks, nil
    }

The part that is left here is our database operation for creating link, We need to create foreign key from the link we inserting to that user.

`internal/links/links.go`: In our Save method from links changed the query statement to:

    stmt, err := database.Db.Prepare("INSERT INTO Links(Title,Address, UserID) VALUES(?,?, ?)")

and the line that we execute query to:

    res, err := stmt.Exec(link.Title, link.Address, link.User.ID)

Then when we query for users we also fill the `User` field for Link, so we need to join Links and Users table in our `GetAll` functions to fill the User field. If you are not familiar with join checkout [this link](https://www.w3schools.com/sql/sql_join_inner.asp).

`internal/links/links.go`:

    func GetAll() []Link {
        stmt, err := database.Db.Prepare("select L.id, L.title, L.address, L.UserID, U.Username from Links L inner join Users U on L.UserID = U.ID") // changed
        if err != nil {
            log.Fatal(err)
        }
        defer stmt.Close()
        rows, err := stmt.Query()
        if err != nil {
            log.Fatal(err)
        }
        defer rows.Close()
        var links []Link
        var username string
        var id string
        for rows.Next() {
            var link Link
            err := rows.Scan(&link.ID, &link.Title, &link.Address, &id, &username) // changed
            if err != nil{
                log.Fatal(err)
            }
            link.User = &users.User{
                ID:       id,
                Username: username,
            } // changed
            links = append(links, link)
        }
        if err = rows.Err(); err != nil {
            log.Fatal(err)
        }
        return links
    }

and Our app is finally complete. To test the endpoint navigate to localhost:8080 and write the mutation to create link:

    mutation {
      createLink(input: {title: "real link!", address: "www.graphql.org"}){
        user{
          name
        }
      }
    }

if you try it now you will get a access denied message:

    {
      "errors": [
        {
          "message": "access denied",
          "path": [
            "createLink"
          ]
        }
      ],
      "data": null
    }

So you may realize that we prevented not logged in users from submitting links, To create link now you must set the Authorization header. From the bottom select HTTP Headers button and fill it like this:

    {
      "Authorization": "" // use your own generated token
    }

Try again you should be able to create a new link now.
