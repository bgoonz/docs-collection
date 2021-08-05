<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Codelab: Build a push notification client

Nov 11, 2020 <span class="w-author__separator">•</span> Updated Dec 6, 2020

[<img src="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kayce Basques" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kaycebasques/)

<a href="/authors/kaycebasques/" class="w-author__name-link">Kayce Basques</a>

- <a href="https://twitter.com/kaycebasques" class="w-author__link">Twitter</a>
- <a href="https://github.com/kaycebasques" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@kaycebasques" class="w-author__link">Glitch</a>
- <a href="https://kayce.basqu.es/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kate Jeffreys" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/InS6CReujIoGmjKuOTaA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katejeffreys/)

<a href="/authors/katejeffreys/" class="w-author__name-link">Kate Jeffreys</a>

This codelab shows you, step-by-step, how to build a push notification client. By the end of the codelab you'll have a client that:

- Subscribes the user to push notifications.
- Receives push messages and displays them as notifications.
- Unsubscribes the user from push notifications.

This codelab is focused on helping you learn by doing and doesn't talk about concepts much. Check out [How do push notifications work?](/push-notifications-overview/#how) to learn about push notification concepts.

The server code of this codelab is already complete. You'll only be implementing the client in this codelab. To learn how to implement a push notification server, check out [Codelab: Build a push notification server](/push-notifications-server-codelab).

Check out [push-notifications-client-codelab-complete](https://push-notifications-client-codelab-complete.glitch.me/) ([source](https://glitch.com/edit/#!/push-notifications-client-codelab-complete)) to see the complete code.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

This codelab is known to work with the following operating system and browser combinations:

- Windows: Chrome, Edge
- macOS: Chrome, Firefox
- Android: Chrome, Firefox

This codelab is known to **not** work with the following operating systems (or operating system and browser combinations):

- macOS: Brave, Edge, Safari
- iOS

## Setup <a href="#setup" class="w-headline-link">#</a>

### Get an editable copy of the code <a href="#remix" class="w-headline-link">#</a>

The code editor that you see to the right of these instructions will be called the **Glitch UI** throughout this codelab.

1.  Click **Remix to Edit** to make the project editable.

**Gotchas!**

If you're in a Chrome incognito or guest window, you may have trouble completing the codelab. Consider using a signed-in profile instead.

### Set up authentication <a href="#authentication" class="w-headline-link">#</a>

Before you can get push notifications working, you need to set up your server and client with authentication keys. See [Sign your web push protocol requests](/push-notifications-overview/#sign) to learn why.

1.  In the Glitch UI click **Tools** and then click **Terminal** to open the Glitch Terminal.
2.  In the Glitch Terminal, run `npx web-push generate-vapid-keys`. Copy the private key and public key values.
3.  In the Glitch UI open `.env` and update `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY`. Set `VAPID_SUBJECT` to `mailto:test@test.test`. All of these values should be wrapped in double quotes. After making your updates, your `.env` file should look similar to this:

<!-- -->

    VAPID_PUBLIC_KEY="BKiwTvD9HA…"
    VAPID_PRIVATE_KEY="4mXG9jBUaU…"
    VAPID_SUBJECT="mailto:test@test.test"

1.  Close the Glitch Terminal.

**Gotchas!**

Environment variable values (the stuff in `.env`) are unique to a single Glitch project. If you remix your project, the values in `.env` won't get copied over.

1.  Open `public/index.js`.
2.  Replace `VAPID_PUBLIC_KEY_VALUE_HERE` with the value of your public key.

## Register a service worker <a href="#register-a-service-worker" class="w-headline-link">#</a>

Your client will eventually need a service worker to receive and display notifications. It's best to register the service worker as early as possible. See [Receive and display the pushed messages as notifications](/push-notifications-overview/#notification) for more context.

1.  Replace the `// TODO add startup logic here` comment with the following code:

<!-- -->

    // TODO add startup logic here
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('./service-worker.js').then(serviceWorkerRegistration => {
        console.info('Service worker was registered.');
        console.info({serviceWorkerRegistration});
      }).catch(error => {
        console.error('An error occurred while registering the service worker.');
        console.error(error);
      });
      subscribeButton.disabled = false;
    } else {
      console.error('Browser does not support service workers or push messages.');
    }

    subscribeButton.addEventListener('click', subscribeButtonHandler);
    unsubscribeButton.addEventListener('click', unsubscribeButtonHandler);

1.  To preview the site, press **View App**. Then press **Fullscreen** ![fullscreen](/images/glitch/fullscreen.svg).

**Key Term**: The tab that you just opened will be referred to as the **app tab** throughout this codelab.

1.  Press `Control+Shift+J` (or `Command+Option+J` on Mac) to open DevTools.
2.  Click the **Console** tab. You should see the message `Service worker was registered.` logged to the Console.

The previous instruction assumes that you're using Google Chrome and Chrome DevTools.

## Request push notification permission <a href="#request-push-notification-permission" class="w-headline-link">#</a>

You should never request permission to send push notifications on page load. Instead, your UI should ask the user if they want to receive push notifications. Once they explicitly confirm (with a button click, for example) then you can start the formal process for getting push notification permission from the browser.

1.  In the Glitch UI click **View Source** to return to your code.
2.  In `public/index.js` replace the `// TODO` comment in `subscribeButtonHandler()` with the following code:

<!-- -->

    // TODO
    // Prevent the user from clicking the subscribe button multiple times.
    subscribeButton.disabled = true;
    const result = await Notification.requestPermission();
    if (result === 'denied') {
      console.error('The user explicitly denied the permission request.');
      return;
    }
    if (result === 'granted') {
      console.info('The user accepted the permission request.');
    }

1.  Go back to the app tab and click **Subscribe to push**. Your browser or operating system will probably ask you if you want to let the website send you push notifications. Click **Allow** (or whatever equivalent phrase your browser/OS uses). In the Console you should see a message indicating whether the request was accepted or denied.

**Gotchas!**

If you're in an incognito or guest window, your browser may deny the request automatically. Keep an eye out for any browser UI indicating that the request was blocked automatically.

## Subscribe to push notifications <a href="#subscribe-to-push-notifications" class="w-headline-link">#</a>

The subscription process involves interacting with a web service controlled by the browser vendor that's called a **push service**. Once you get the push notification subscription information you need to send it to a server and have the server store it in a database long-term. See [Subscribe the client to push notifications](/push-notifications-overview/#subscription) for more context about the subscription process.

1.  Add the following highlighted code to `subscribeButtonHandler()`:

<!-- -->

    subscribeButton.disabled = true;
    const result = await Notification.requestPermission();
    if (result === 'denied') {
      console.error('The user explicitly denied the permission request.');
      return;
    }
    if (result === 'granted') {
      console.info('The user accepted the permission request.');
    }
    const registration = await navigator.serviceWorker.getRegistration();
    const subscribed = await registration.pushManager.getSubscription();
    if (subscribed) {
      console.info('User is already subscribed.');
      notifyMeButton.disabled = false;
      unsubscribeButton.disabled = false;
      return;
    }
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
    });
    notifyMeButton.disabled = false;
    fetch('/add-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription)
    });

The `userVisibleOnly` option must be `true`. It may one day be possible to push messages without displaying user-visible notifications (**silent pushes**) but browsers currently don't allow that capability because of privacy concerns.

The `applicationServerKey` value relies on a utility function that converts a base64 string to a Uint8Array. This value is used for authentication between your server and the push service.

## Unsubscribe from push notifications <a href="#unsubscribe-from-push-notifications" class="w-headline-link">#</a>

After a user has subscribed to push notifications, your UI needs to provide a way to unsubscribe in case the user changes their mind and no longer wants to receive push notifications.

1.  Replace the `// TODO` comment in `unsubscribeButtonHandler()` with the following code:

<!-- -->

    // TODO
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration.pushManager.getSubscription();
    fetch('/remove-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({endpoint: subscription.endpoint})
    });
    const unsubscribed = await subscription.unsubscribe();
    if (unsubscribed) {
      console.info('Successfully unsubscribed from push notifications.');
      unsubscribeButton.disabled = true;
      subscribeButton.disabled = false;
      notifyMeButton.disabled = true;
    }

## Receive a push message and display it as a notification <a href="#receive-a-push-message-and-display-it-as-a-notification" class="w-headline-link">#</a>

As mentioned before, you need a service worker to handle the receiving and displaying of messages that were pushed to the client from your server. See [Receive and display the pushed messages as notifications](/push-notifications-overview/#notification) for more detail.

1.  Open `public/service-worker.js` and replace the `// TODO` comment in the service worker's `push` event handler with the following code:

<!-- -->

    // TODO
    let data = event.data.json();
    const image = 'https://cdn.glitch.com/614286c9-b4fc-4303-a6a9-a4cef0601b74%2Flogo.png?v=1605150951230';
    const options = {
      body: data.options.body,
      icon: image
    }
    self.registration.showNotification(
      data.title,
      options
    );

1.  Go back to the app tab.
2.  Click **Notify me**. You should receive a push notification.
3.  Try opening the URL of your app tab on other browsers (or even other devices), going through the subscription workflow, and then clicking **Notify all**. You should receive the same push notification on all of the browsers that you subscribed. Refer back to [Browser compatibility](#browser-compatibility) to see a list of browser/OS combinations that are known to work or not work.

You can customize the notification in lots of ways. See the parameters of [`ServiceWorkerRegistration.showNotification()`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification) to learn more.

**Gotchas!**

The call to [`self.skipWaiting()`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) in your service worker's `install` listener is important to understand. See [Skip the waiting phase](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase) for an explanation. Without it, the code changes that you make to your service worker wouldn't take effect immediately. You may or may not want to use this feature on your own website depending on your needs, but either way it's important to understand its effect.

## Open a URL when a user clicks a notification <a href="#open-a-url-when-a-user-clicks-a-notification" class="w-headline-link">#</a>

In the real-world, you'll probably use the notification as a way to re-engage your user and prompt them to visit your site. To do that, you need to configure your service worker a bit more.

1.  Replace the `// TODO` comment in the service worker's `notificationclick` event handler with the following code:

<!-- -->

    // TODO
    event.notification.close();
    event.waitUntil(self.clients.openWindow('https://web.dev'));

1.  Go back to the app tab, send yourself another notification, and then click the notification. Your browser should open a new tab and load `https://web.dev`.

## Next steps <a href="#next-steps" class="w-headline-link">#</a>

- Look at [`ServiceWorkerRegistration.showNotification()`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification) to discover all of the different ways you can customize notifications.
- Read [Push notifications overview](/push-notifications-overview) for a deeper conceptual understanding of how push notifications work.
- Check out [Codelab: Build a push notification server](/push-notifications-server-codelab/) to learn how to build a server that manages subscriptions and sends web push protocol requests.
- Try out [Notification Generator](https://tests.peter.sh/notification-generator/) to test out all the ways you can customize notifications.

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
