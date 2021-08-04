Finally, let’s learn how to easily deploy Angular applications with [Surge.sh](http://surge.sh/).

## Installing and running Surge

First, you need to install Surge globally.

Open up a terminal window and run:

    npm install -g surge

Now you need to build your application for production.

Open up a terminal and navigate to your project directory and run the following:

    npm run build

This command will build your app for production and output the results into the `/dist` directory.

Finally, you need to run Surge within this newly created `/dist` directory.

Open up a terminal, navigate to `/dist`, and run the `surge` command:

    cd dist
    surge

You may be asked to login or create an account. After you do so and hit `enter` a couple times to proceed, you will be presented with a URL for your deployed app. Paste this URL into your browser and you will see your app up and running. Share this link with your friends to show them the sweet new app you just created through HowToGraphQL!
