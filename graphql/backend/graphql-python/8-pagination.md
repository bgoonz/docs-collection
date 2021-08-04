Imagine that your Hackernews has thousands of created links – that would be awesome for you – but the clients making the request wouldn’t be happy. Retrieving too much data on a single request is unpractical and may even break your app. Pagination exists to solve this problem, allowing the client to specify how many items it wants.

The simple way defined in the GraphQL [pagination](http://graphql.org/learn/pagination/) documentation is to slice the results using two parameters: `first`, which returns the first _n_ items and `skip`, which skips the first _n_ items.

Let’s implement it in the links query.

### Paginating Links

Change your links query class to the following:

    class Query(graphene.ObjectType):
        # Add the first and skip parameters
        links = graphene.List(
            LinkType,
            search=graphene.String(),
            first=graphene.Int(),
            skip=graphene.Int(),
        )
        votes = graphene.List(VoteType)

        # Use them to slice the Django queryset
        def resolve_links(self, info, search=None, first=None, skip=None, **kwargs):
            qs = Link.objects.all()

            if search:
                filter = (
                    Q(url__icontains=search) |
                    Q(description__icontains=search)
                )
                qs = qs.filter(filter)

            if skip:
                qs = qs[skip:]

            if first:
                qs = qs[:first]

            return qs

        def resolve_votes(self, info, **kwargs):
            return Vote.objects.all()

The `skip` and `first` uses [Python Slicing](https://www.dotnetperls.com/slice-python).

Testing it in the Insomnia interface:

![Insomnia interface](https://i.imgur.com/pcNvb8y.png)
