### Attaching Users to Links

With sign in power, you can now create your _own_ links, posted by you. To make it possible, let’s integrate the Links and Users models:

In the Link models file, import the Django settings:

    from django.conf import settings
    # ...code

And add the `posted_by` field at the very end:

    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)

Run the Django commands to reflect the changes in the database:

    python manage.py makemigrations
    python manage.py migrate

In the `CreateLink` mutation, return the User in the new created field:

    # ...code
    # Add the following imports
    from users.schema import UserType


    # ...code
    # Change the CreateLink mutation
    class CreateLink(graphene.Mutation):
        id = graphene.Int()
        url = graphene.String()
        description = graphene.String()
        posted_by = graphene.Field(UserType)

        class Arguments:
            url = graphene.String()
            description = graphene.String()

        def mutate(self, info, url, description):
            user = info.context.user or None

            link = Link(
                url=url,
                description=description,
                posted_by=user,
            )
            link.save()

            return CreateLink(
                id=link.id,
                url=link.url,
                description=link.description,
                posted_by=link.posted_by,
            )

To test it, send a mutation to the server (remember to use the token!):

![send a mutation to the server](https://i.imgur.com/XBsEwK8.png)

Neat!

### Adding Votes

One of the Hackernews’ features is to vote on links, making ones more popular than others. To create this, you’ll need to create a Vote model and a `CreateVote` mutation. Let’s begin:

Add the Vote model in `links/models.py`:

    class Vote(models.Model):
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
        link = models.ForeignKey('links.Link', related_name='votes', on_delete=models.CASCADE)

And reflect the changes in the database:

    python manage.py makemigrations
    python manage.py migrate

Finally, add a new mutation for voting:

    # ...code
    # In the same import line, add the Vote model
    from links.models import Link, Vote


    # ...code
    # Add the CreateVote mutation
    class CreateVote(graphene.Mutation):
        user = graphene.Field(UserType)
        link = graphene.Field(LinkType)

        class Arguments:
            link_id = graphene.Int()

        def mutate(self, info, link_id):
            user = info.context.user
            if user.is_anonymous:
                raise Exception('You must be logged to vote!')

            link = Link.objects.filter(id=link_id).first()
            if not link:
                raise Exception('Invalid Link!')

            Vote.objects.create(
                user=user,
                link=link,
            )

            return CreateVote(user=user, link=link)


    # ...code
    # Add the mutation to the Mutation class
    class Mutation(graphene.ObjectType):
        create_link = CreateLink.Field()
        create_vote = CreateVote.Field()

Voting time! Try to vote for the first link:

![vote for the first link](https://i.imgur.com/5NUS0fu.png)

### Relating Links and Votes

You can already vote, but you can’t see it! A solution for this is being able to get a list of all the votes and a list of votes from each link. Follow the next steps to accomplish it:

Add the `VoteType` and a `votes` field to get all votes:

    # ...code
    # Add after the LinkType
    class VoteType(DjangoObjectType):
        class Meta:
            model = Vote

And add the `votes` field and the `resolve_votes` method:

    # ...code
    # Add the votes field
    class Query(graphene.ObjectType):
        links = graphene.List(LinkType)
        votes = graphene.List(VoteType)

        def resolve_links(self, info, **kwargs):
            return Link.objects.all()

        def resolve_votes(self, info, **kwargs):
            return Vote.objects.all()

Awesome! On Insomnia, try to fetch the list of votes:

![fetch the list of votes](https://i.imgur.com/LJ0CMn6.png)

To close this chapter, make a query for all the links and see how smoothly the votes become available:

![make a query for all the links and see how smoothly the votes become available](https://i.imgur.com/jAlDphd.png)

Yay!
