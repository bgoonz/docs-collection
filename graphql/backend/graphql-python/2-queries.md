### About the Django structure

It’s important to understand how the Django project structure works before moving on.

In the last chapter, you created a _Django Project_, which holds everything related to your application. However, Django separates the project into _apps_. Think about apps as a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). You will have two apps, one for Users and one for the Links.

Another essential decision is about the database. Django works out of the box with [SQLite](https://www.sqlite.org/) – a file based database – which you will use. On production systems, you should have a more robust database, such as [PostgreSQL](https://www.postgresql.org/).

### Creating the Links app

In the project’s root (next to the `manage.py` file), create the `links` app:

    python manage.py startapp links

It will create the links app and some default files inside it.

With an app in place, you need to define a Model – the layer between Django and the database.

In the `links/models.py` file, add the following content:

    class Link(models.Model):
        url = models.URLField()
        description = models.TextField(blank=True)

Lastly, configure Django to use the new `links` app in the `hackernews/settings.py` file:

    INSTALLED_APPS = (
        # After the graphene_django app
        'links',
    )

Create the database tables:

    python manage.py makemigrations
    python manage.py migrate

Enter the Django shell with the command `python manage.py shell` and create some links:

    from links.models import Link
    Link.objects.create(url='https://www.howtographql.com/', description='The Fullstack Tutorial for GraphQL')
    Link.objects.create(url='https://twitter.com/jonatasbaldin/', description='The Jonatas Baldin Twitter')

### Creating your first Type and Schema

In GraphQL, a _Type_ is an object that may contain multiple _fields_. Each field is calculated through _resolvers_, that returns a value. A collection of types is called a _schema_. Every schema has a special type called _query_ for getting data from the server and _mutation_ for sending data to the server.

This is a simple overview of the concepts, but it should be enough to go through the tutorial. You can read more about it [here](http://graphql.org/learn/schema/).

Create the `links/schema.py` file, with the content below:

    import graphene
    from graphene_django import DjangoObjectType

    from .models import Link


    class LinkType(DjangoObjectType):
        class Meta:
            model = Link


    class Query(graphene.ObjectType):
        links = graphene.List(LinkType)

        def resolve_links(self, info, **kwargs):
            return Link.objects.all()

In the snippet above, the `LinkType` was created using the `DjangoObjectType` – a custom type available in Graphene Django. Also, the special type query was created with a resolver for the field `links`, which returns all the links.

Create the `hackernews/schema.py` file, with the query type:

    import graphene

    import links.schema


    class Query(links.schema.Query, graphene.ObjectType):
        pass


    schema = graphene.Schema(query=Query)

Why creating another query? This query just inherits the query defined before. This way, you are able to keep every part of the schema isolated in the apps.

Wow, that’s a lot, right? But now you can finally query some data!

### Introducing GraphiQL

[GraphiQL](https://github.com/graphql/graphiql) is a graphical interactive in-browser GraphQL IDE. In other words, a playground. Note that you need to disable the [Django CSRF protection](https://docs.djangoproject.com/en/2.0/ref/csrf/).

To install it, add the following in the `hackernews/urls.py` file:

    ... # code
    from django.views.decorators.csrf import csrf_exempt
    from graphene_django.views import GraphQLView

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    ]

Open your browser and access `http://localhost:8000/graphql/`, you should see a screen like this:

![Access GraphiQL at localhost:8000/graphql](http://i.imgur.com/b8Zrtvh.png)

On the right there’s the **Documentation Explorer**, information about our schema created automatically through [introspection](http://graphql.org/learn/introspection/). On the left, to create your first query, typing the following:

    query {
      links {
        id
        description
        url
      }
    }

You should see a response link this:

![Query response](http://i.imgur.com/bND8TCT.png)

Congratulations! Play around a little bit, try to remove some fields or add others. Break it! It’s the best way of learning!
