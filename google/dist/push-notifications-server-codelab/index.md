<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Codelab: Build a push notification server

Nov 11, 2020 <span class="w-author__separator">•</span> Updated Dec 6, 2020

[<img src="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kayce Basques" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kaycebasques/)

<a href="/authors/kaycebasques/" class="w-author__name-link">Kayce Basques</a>

- <a href="https://twitter.com/kaycebasques" class="w-author__link">Twitter</a>
- <a href="https://github.com/kaycebasques" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@kaycebasques" class="w-author__link">Glitch</a>
- <a href="https://kayce.basqu.es/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kate Jeffreys" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katejeffreys/)

<a href="/authors/katejeffreys/" class="w-author__name-link">Kate Jeffreys</a>

This codelab shows you, step-by-step, how to build a push notification server. By the end of the codelab you'll have a server that:

- Keeps track of push notification subscriptions (i.e. the server creates a new database record when a client opts in to push notifications, and it deletes an existing database record when a client opts out)
- Sends a push notification to a single client
- Sends a push notification to all subscribed clients

This codelab is focused on helping you learn by doing and doesn't talk about concepts much. Check out [How do push notifications work?](/push-notifications-overview/#how) to learn about push notification concepts.

The client code of this codelab is already complete. You'll only be implementing the server in this codelab. To learn how to implement a push notification client, check out [Codelab: Build a push notification client](/push-notifications-client-codelab).

Check out [push-notifications-server-codelab-complete](https://push-notifications-server-codelab-complete.glitch.me/) ([source](https://glitch.com/edit/#!/push-notifications-server-codelab-complete)) to see the complete code.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

This codelab is known to work with the following operating system and browser combinations:

- Windows: Chrome, Edge
- macOS: Chrome, Firefox
- Android: Chrome, Firefox

This codelab is known to **not** work with the following operating systems (or operating system and browser combinations):

- macOS: Brave, Edge, Safari
- iOS

## Application stack <a href="#stack" class="w-headline-link">#</a>

- The server is built on top of [Express.js](https://expressjs.com/).
- The [web-push](https://www.npmjs.com/package/web-push) Node.js library handles all of the push notification logic.
- Subscription data is written to a JSON file using [lowdb](https://www.npmjs.com/package/lowdb).

You don't have to use any of these technologies to implement push notifications. We chose these technologies because they provide a reliable codelab experience.

## Setup <a href="#setup" class="w-headline-link">#</a>

### Get an editable copy of the code <a href="#remix" class="w-headline-link">#</a>

The code editor that you see to the right of these instructions will be called the **Glitch UI** throughout this codelab.

1.  Click **Remix to Edit** to make the project editable.

### Set up authentication <a href="#authentication" class="w-headline-link">#</a>

Before you can get push notifications working, you need to set up your server and client with authentication keys. See [Sign your web push protocol requests](/push-notifications-overview/#sign) to learn why.

1.  Open the Glitch terminal by clicking **Tools** and then clicking **Terminal**.
2.  In the terminal, run `npx web-push generate-vapid-keys`. Copy the private key and public key values.
3.  Open `.env` and update `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY`. Set `VAPID_SUBJECT` to `mailto:test@test.test`. All of these values should be wrapped in double quotes. After making your updates, your `.env` file should look similar to this:

<!-- -->

    VAPID_PUBLIC_KEY="BKiwTvD9HA…"
    VAPID_PRIVATE_KEY="4mXG9jBUaU…"
    VAPID_SUBJECT="mailto:test@test.test"

1.  Close the Glitch terminal.

**Gotchas!**

Environment variable values (the stuff in `.env`) are unique to a single Glitch project. If you remix your project, the values in `.env` won't get copied over.

1.  Open `public/index.js`.
2.  Replace `VAPID_PUBLIC_KEY_VALUE_HERE` with the value of your public key.

## Manage subscriptions <a href="#manage" class="w-headline-link">#</a>

Your client handles most of the subscription process. The main things your server needs to do are save new push notification subscriptions and delete old subscriptions. These subscriptions are what enable you to push messages to clients in the future. See [Subscribe the client to push notifications](/push-notifications-overview/#subscription) for more context about the subscription process.

### Save new subscription information <a href="#save" class="w-headline-link">#</a>

1.  To preview the site, press **View App**. Then press **Fullscreen** ![fullscreen](/images/glitch/fullscreen.svg).

**Key Term**: We'll refer to the tab that you just opened as the **app tab**.

1.  Click **Register service worker** in the app tab. In the status box you should see a message similar to this:

<!-- -->

    Service worker registered. Scope: https://desert-cactus-sunset.glitch.me/

1.  In the app tab click **Subscribe to push**. Your browser or operating system will probably ask you if you want to let the website send you push notifications. Click **Allow** (or whatever equivalent phrase your browser/OS uses). In the status box you should see a message similar to this:

<!-- -->

    Service worker subscribed to push.  Endpoint: https://fcm.googleapis.com/fcm/send/…

The endpoint URL changes depending on what browser you're using. For example, on Firefox the URL starts with `https://updates.push.services.mozilla.com/…`.

1.  Go back to your code by clicking **View Source** in the Glitch UI.
2.  Open the Glitch Logs by clicking **Tools** and then clicking **Logs**. You should see `/add-subscription` followed by some data. `/add-subscription` is the URL that the client sends a [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) request to when it wants to subscribe to push notifications. The data that follows is the client's subscription information that you need to save.
3.  Open `server.js`.
4.  Update the `/add-subscription` route handler logic with the following code:

<!-- -->

    app.post('/add-subscription', (request, response) => {
      console.log('/add-subscription');
      console.log(request.body);
      console.log(`Subscribing ${request.body.endpoint}`);
      db.get('subscriptions')
        .push(request.body)
        .write();
      response.sendStatus(200);
    });

The database writes to `.data/db.json`. To inspect this file in Glitch, click **Tools**, then click **Terminal**, then run `cat .data/db.json` in the Terminal. `.data/db.json` is deleted every time that you edit your app. This is because Glitch runs the `start` script in `package.json` every time you edit your app, and that script includes a call to `rm .data/db.json`.

### Delete old subscription information <a href="#delete-old-subscription-information" class="w-headline-link">#</a>

1.  Go back to the app tab.
2.  Click **Unsubscribe from push**.
3.  Look at the Glitch Logs again. You should see `/remove-subscription` followed by the client's subscription information.
4.  Update the `/remove-subscription` route handler logic with the following code:

<!-- -->

    app.post('/remove-subscription', (request, response) => {
      console.log('/remove-subscription');
      console.log(request.body);
      console.log(`Unsubscribing ${request.body.endpoint}`);
      db.get('subscriptions')
        .remove({endpoint: request.body.endpoint})
        .write();
      response.sendStatus(200);
    });

## Send notifications <a href="#send-notifications" class="w-headline-link">#</a>

As explained in [Send a push message](/push-notifications-overview/#send), your server doesn't actually send the push messages directly to clients. Rather, it relies on a push service to do that. Your server basically just kicks off the process of pushing messages to clients by making web service requests (web push protocol requests) to a web service (the push service) owned by the browser vendor that your user uses.

1.  Update the `/notify-me` route handler logic with the following code:

<!-- -->

    app.post('/notify-me', (request, response) => {
      console.log('/notify-me');
      console.log(request.body);
      console.log(`Notifying ${request.body.endpoint}`);
      const subscription =
          db.get('subscriptions').find({endpoint: request.body.endpoint}).value();
      sendNotifications([subscription]);
      response.sendStatus(200);
    });

1.  Update the `sendNotifications()` function with the following code:

<!-- -->

    function sendNotifications(subscriptions) {
      // TODO
      // Create the notification content.
      const notification = JSON.stringify({
        title: "Hello, Notifications!",
        options: {
          body: `ID: ${Math.floor(Math.random() * 100)}`
        }
      });
      // Customize how the push service should attempt to deliver the push message.
      // And provide authentication information.
      const options = {
        TTL: 10000,
        vapidDetails: vapidDetails
      };
      // Send a push message to each client specified in the subscriptions array.
      subscriptions.forEach(subscription => {
        const endpoint = subscription.endpoint;
        const id = endpoint.substr((endpoint.length - 8), endpoint.length);
        webpush.sendNotification(subscription, notification, options)
          .then(result => {
            console.log(`Endpoint ID: ${id}`);
            console.log(`Result: ${result.statusCode}`);
          })
          .catch(error => {
            console.log(`Endpoint ID: ${id}`);
            console.log(`Error: ${error} `);
          });
      });
    }

1.  Update the `/notify-all` route handler logic with the following code:

<!-- -->

    app.post('/notify-all', (request, response) => {
      console.log('/notify-all');
      response.sendStatus(200);
      console.log('Notifying all subscribers');
      const subscriptions =
          db.get('subscriptions').cloneDeep().value();
      if (subscriptions.length > 0) {
        sendNotifications(subscriptions);
        response.sendStatus(200);
      } else {
        response.sendStatus(409);
      }
    });

1.  Go back to the app tab.
2.  Click **Unsubscribe from push** and then click **Subscribe to push** again. This is only necessary because, as mentioned before, Glitch restarts the project every time you edit the code and the project is configured to delete the database on startup.
3.  Click **Notify me**. You should receive a push notification. The title should be `Hello, Notifications!` and the body should be `ID: <ID>` where `<ID>` is a random number.
4.  Open your app on other browsers or devices and try subscribing them to push notifications and then clicking the **Notify all** button. You should receive the same notification on all of your subscribed devices (i.e. the ID in the body of the push notification should be the same).

## Next steps <a href="#next-steps" class="w-headline-link">#</a>

- Read [Push notifications overview](/push-notifications-overview) for a deeper conceptual understanding of how push notifications work.
- Check out [Codelab: Build a push notification client](/push-notifications-client-codelab/) to learn how to build a client that requests notification permission, subscribes the device to receive push notifications, and uses a service worker to receive push messages and display the messages as notifications.

<a href="/push-notifications-overview" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to article</a>

- ### Contribute

  - <a href="https://github.com/GoogleChrome/web.dev/issues/new?assignees=&amp;labels=bug&amp;template=bug_report.md&amp;title=" class="w-footer__linkbox-link">File a bug</a>
  - <a href="https://github.com/googlechrome/web.dev" class="w-footer__linkbox-link">View source</a>

- ### Related content

  - <a href="https://blog.chromium.org/" class="w-footer__linkbox-link">Chrome updates</a>
  - <a href="https://developers.google.com/web/" class="w-footer__linkbox-link">Web Fundamentals</a>
  - <a href="https://developers.google.com/web/showcase/" class="w-footer__linkbox-link">Case studies</a>
  - <a href="https://devwebfeed.appspot.com/" class="w-footer__linkbox-link">DevWeb Content Firehose</a>
  - <a href="/podcasts/" class="w-footer__linkbox-link">Podcasts</a>
  - <a href="/shows/" class="w-footer__linkbox-link">Shows</a>

- ### Connect

  - <a href="https://www.twitter.com/@ChromiumDev" class="w-footer__linkbox-link">Twitter</a>
  - <a href="https://www.youtube.com/user/ChromeDevelopers" class="w-footer__linkbox-link">YouTube</a>

<a href="https://developers.google.com/" class="w-footer__utility-logo-link"><img src="/images/lockup-color.png" alt="Google Developers" class="w-footer__utility-logo" width="185" height="33" /></a>

- <a href="https://developer.chrome.com/home" class="w-footer__utility-link">Chrome</a>
- <a href="https://firebase.google.com/" class="w-footer__utility-link">Firebase</a>
- <a href="https://cloud.google.com/" class="w-footer__utility-link">Google Cloud Platform</a>
- <a href="https://developers.google.com/products" class="w-footer__utility-link">All products</a>

<!-- -->

- <a href="https://policies.google.com/" class="w-footer__utility-link">Terms &amp; Privacy</a>
- <a href="/community-guidelines/" class="w-footer__utility-link">Community Guidelines</a>

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies).
