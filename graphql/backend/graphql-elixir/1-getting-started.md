### Install Dependencies

It’s time to start creating your project. The First you’ll need to have Elixir and Erlang installed on your machine. See https://elixir-lang.org/install.html

Unlike some frameworks, Phoenix works within the ordinary structure of a regular Elixir application. It does however bring its own generator to add in some basic Phoenix code to get you going.

Install this generator:

    mix local.hex --force && \
    mix local.rebar --force && \
    mix archive.install hex phx_new

This tutorial also uses Postgres as the database for this app. See here for installing postgres on your OS: https://wiki.postgresql.org/wiki/Detailed\_installation\_guides

For OS X users it should be as simple as `brew install postgres`.

### Setting up your App

You’re going to build an app called Community, and you can think of it as a miniature version of Hacker News, Slashdot, or any other site that displays content on the basis of user submissions and votes.

Use the `phx.new` generator (confirm with `y` when prompted):

    mix phx.new community --no-webpack --no-html

Say `y` to the question about fetching and installing dependencies, and then cd into the application directory.

In order to support GraphQL your application needs some additional dependencies which are configured in the `mix.exs` file. They go inside the list found within the `defp deps do` function:

    {:absinthe, "~> 1.6"},
    {:absinthe_plug, "~> 1.5"},
    {:jason, "~> 1.1"}

Then run

    mix deps.get

You’re also going to generate some of the database tables and seed data now so that you’re all set for the rest of the tutorial.

    mix phx.gen.context News Link links url:string description:text

Add the following lines to `priv/repo/seeds.exs` so that you have some basic seed data:

    alias Community.News.Link
    alias Community.Repo

    %Link{url: "http://graphql.org/", description: "The Best Query Language"} |> Repo.insert!
    %Link{url: "http://dev.apollodata.com/", description: "Awesome GraphQL Client"} |> Repo.insert!

Now just run

    mix ecto.setup

At this point the database tables have been created, and the migrations ran. If at any point you want to clear everything out you can just run `mix ecto.reset`. If you get postgres connection issues be sure to double check your database credentials inside `config/dev.exs`.
