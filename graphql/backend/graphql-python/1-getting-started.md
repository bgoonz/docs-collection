### What are you going to build?

In this tutorial, you are going to create a [Hackernews](https://news.ycombinator.com) clone using Django and Graphene. The platform will have the following features:

- List of Users and Links
- Users creation and authentication
- Users can create Links and vote on them

### Creating your local environment

Before starting, make sure you have Python 3.6 installed. If not, you can download it [here](https://www.python.org/downloads/). The installation is pretty straightforward on any supported operating system.

When working with Python, you will use _Virtual Environment_: a tool for keeping all the project’s dependencies isolated from your system – or other projects.

In the terminal, create a new virtual environment and activate it:

    python3.6 -m venv venv
    source venv/bin/activate

You’ll notice your prompt changed to `(venv) ...`. It means you are _inside_ your virtual environment, every Python package will be installed there. If you want to leave it, just type `deactivate`. Make sure to _always_ have the virtual environment activated.

### Installing Django and Graphene

The tool used to manage Python packages is `pip`, which should be available with your Python installation.

With the virtual environment activated, run the following commands:

    pip install django==2.1.4 graphene-django==2.2.0 django-filter==2.0.0 django-graphql-jwt==0.1.5
    django-admin startproject hackernews
    cd hackernews
    python manage.py migrate
    python manage.py runserver

Don’t worry about the `hackernews/hackernews` structure, this is just the way Django works!

The commands above will install the necessary libraries, create a new Django project, create the base Django tables and start its builtin web server. To test it, open your browser and access the `http://localhost:8000` address. You should see the following page:

![The install worked successfully!](https://i.imgur.com/QDZzLye.png)

### Configuring Graphene Django

In the `hackernews/settings.py` file, search for the `INSTALLED_APPS` variable and add the following:

    INSTALLED_APPS = (
        # After the default packages
        'graphene_django',
    )

And add following at the bottom of the file:

    GRAPHENE = {
        'SCHEMA': 'hackernews.schema.schema',
    }
