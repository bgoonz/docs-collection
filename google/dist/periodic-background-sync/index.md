<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format" alt="Colorful airplanes flying in sync" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Bz7MndcsUGPLAnQwIMfJ.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#richer-offline-experiences-with-the-periodic-background-sync-api" class="w-toc__header--link">Richer offline experiences with the Periodic Background Sync API</a>

- [Current status](#current-status)
- [Try it](#try-it)
- [Concepts and usage](#concepts-and-usage)
- [Getting user engagement right](#getting-user-engagement-right)
- [When can it be used?](#when-can-it-be-used)
- [When should it be used?](#when-should-it-be-used)
- [Permissions](#permissions)
- [Registering a periodic sync](#registering-a-periodic-sync)
- [Verifying a registration](#verifying-a-registration)
- [Responding to a periodic background sync event](#responding-to-a-periodic-background-sync-event)
- [Unregistering a sync](#unregistering-a-sync)
- [Interfaces](#interfaces)
- [Example](#example)
- [Updating content](#updating-content)
- [Adding periodic background sync to an existing web app](#adding-periodic-background-sync-to-an-existing-web-app)
- [Debugging](#debugging)
- [Recording local activity](#recording-local-activity)
- [Simulating events](#simulating-events)
- [Using the DevTools interface](#using-the-devtools-interface)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Richer offline experiences with the Periodic Background Sync API

Sync your web app's data in the background for a more-like experience

Nov 10, 2019 <span class="w-author__separator">•</span> Updated Aug 18, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Web apps should be able to do anything iOS/Android/desktop apps can. The [Capabilities project](https://developers.google.com/web/updates/capabilities), of which Periodic Background Sync is only a part, aims to do just that. To learn about other capabilities and to keep up with their progress, follow [Unlocking new capabilities for the web](https://developers.google.com/web/updates/capabilities).

Have you ever been in any of the following situations?

- Riding a train or subway with flaky or no connectivity
- Been throttled by your carrier after watching too many videos
- Living in a country where bandwidth struggles to keep up with the demand

If you have, then you've surely felt the frustration of getting certain things done on the web, and wondered why platform-specific apps so often do better in these scenarios. Platform-specific apps can fetch fresh content such as news articles or weather information ahead of time. Even if there's no network in the subway, you can still read the news.

Periodic Background Sync enables web applications to periodically synchronize data in the background, bringing web apps closer to the behavior of a platform-specific app.

## Current status <a href="#current-status" class="w-headline-link">#</a>

The table below explains the current status of the Periodic Background Sync API.

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/BackgroundSync/tree/master/explainers">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/periodic-background-sync/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback and iterate on design</td><td>In Progress</td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Chrome 80</strong></td></tr></tbody></table>

## Try it <a href="#try-it" class="w-headline-link">#</a>

You can try periodic background sync with the [live demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html). Before using it, make sure that:

- You're using Chrome 80 or later.
- You [install](https://developers.google.com/web/fundamentals/app-install-banners/) the web app before enabling periodic background sync.

## Concepts and usage <a href="#concepts-and-usage" class="w-headline-link">#</a>

Periodic background sync lets you show fresh content when a progressive web app or service worker-backed page is launched. It does this by downloading data in the background when the app or page is not being used. This prevents the app's content from refreshing after launch while it's being viewed. Better yet, it prevents the app from showing a content spinner before refreshing.

Without periodic background sync, web apps must use alternative methods to download data. A common example is using a push notification to wake a service worker. The user is interrupted by a message such as 'new data available'. Updating the data is essentially a side effect. You still have the option of using push notifications for truly important updates, such as significant breaking news.

Periodic background sync is easily confused with background sync. Though they have similar names, their use cases are different. Among other things, background sync is most commonly used for resending data to a server when a previous request has failed.

### Getting user engagement right <a href="#getting-user-engagement-right" class="w-headline-link">#</a>

Done incorrectly, periodic background sync could be wasteful of users' resources. Before releasing it, Chrome put it through a trial period to make sure it was right. This section explains some of the design decisions Chrome took to make this feature as helpful as possible.

The first design decision Chrome made is that a web app can only use periodic background sync after a person has installed it on their device, and has launched it as a distinct application. Periodic background sync is not available in the context of a regular tab in Chrome.

Furthermore, since Chrome doesn't want unused or seldom used web apps to gratuitously consume battery or data, Chrome designed periodic background sync such that developers will have to earn it by providing value to their users. Concretely, Chrome is using a [site engagement score](https://www.chromium.org/developers/design-documents/site-engagement) (`about://site-engagement/`) to determine if and how often periodic background syncs can happen for a given web app. In other words, a `periodicsync` event won't be fired at all unless the engagement score is greater than zero, and its value affects the frequency at which the `periodicsync` event fires. This ensures that the only apps syncing in the background are the ones you are actively using.

Periodic background sync shares some similarities with existing APIs and practices on popular platforms. For instance, one-off background sync as well as push notifications allow a web app's logic to live a little longer (via its service worker) after a person has closed the page. On most platforms, it's common for people to have installed apps that periodically access the network in the background to provide a better user experience for critical updates, prefetching content, syncing data, and so on. Similarly, periodic background sync also extends the lifetime of a web app's logic to run at regular periods for what might be a few minutes at a time.

If the browser allowed this to occur frequently and without restrictions, it could result in some privacy concerns. Here's how Chrome has addressed this risk for periodic background sync:

- The background sync activity only occurs on a network that the device has previously connected to. Chrome recommends to only connect to networks operated by trustworthy parties.
- As with all internet communications, periodic background sync reveals the IP addresses of the client, the server it's talking to, and the name of the server. To reduce this exposure to roughly what it would be if the app only synced when it was in the foreground, the browser limits the frequency of an app's background syncs to align with how often the person uses that app. If the person stops frequently interacting with the app, periodic background sync will stop triggering. This is a net improvement over the status quo in platform-specific apps.

### When can it be used? <a href="#when-can-it-be-used" class="w-headline-link">#</a>

Rules for use vary by browser. To summarize from above, Chrome puts the following requirements on periodic background sync:

- A particular user engagement score.
- Presence of a previously used network.

The timing of synchronizations are not controlled by developers. The synchronization frequency will align with how often the app is used. (Note that platform-specific apps currently don't do this.) It also takes into the device's power and connectivity state.

### When should it be used? <a href="#when-should-it-be-used" class="w-headline-link">#</a>

When your service worker wakes up to handle a `periodicsync` event, you have the _opportunity_ to request data, but not the _obligation_ to do so. When handling the event you should take network conditions and available storage into consideration and download different amounts of data in response. You can use the following resources to help:

- [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
- [Detecting data saver mode](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/#detecting_the_save-data_setting)
- [Estimating available storage](https://developers.google.com/web/updates/2017/08/estimating-available-storage-space)

### Permissions <a href="#permissions" class="w-headline-link">#</a>

After the service worker is installed, use the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) to query for `periodic-background-sync`. You can do this from either a window or a service worker context.

    const status = await navigator.permissions.query({
      name: 'periodic-background-sync',
    });
    if (status.state === 'granted') {
      // Periodic background sync can be used.
    } else {
      // Periodic background sync cannot be used.
    }

### Registering a periodic sync <a href="#registering-a-periodic-sync" class="w-headline-link">#</a>

As already stated, periodic background sync requires a service worker. Retrieve a `PeriodicSyncManager` using `ServiceWorkerRegistration.periodicSync` and call `register()` on it. Registering requires both a tag and a minimum synchronization interval (`minInterval`). The tag identifies the registered sync so that multiple syncs can be registered. In the example below, the tag name is `'content-sync'` and the `minInterval` is one day.

    const registration = await navigator.serviceWorker.ready;
    if ('periodicSync' in registration) {
      try {
        await registration.periodicSync.register('content-sync', {
          // An interval of one day.
          minInterval: 24 * 60 * 60 * 1000,
        });
      } catch (error) {
        // Periodic background sync cannot be used.
      }
    }

### Verifying a registration <a href="#verifying-a-registration" class="w-headline-link">#</a>

Call `periodicSync.getTags()` to retrieve an array of registration tags. The example below uses tag names to confirm that cache updating is active to avoid updating again.

    const registration = await navigator.serviceWorker.ready;
    if ('periodicSync' in registration) {
      const tags = await registration.periodicSync.getTags();
      // Only update content if sync isn't set up.
      if (!tags.includes('content-sync')) {
        updateContentOnPageLoad();
      }
    } else {
      // If periodic background sync isn't supported, always update.
      updateContentOnPageLoad();
    }

You can also use `getTags()` to show a list of active registrations in your web app's settings page so that users can enable or disable specific types of updates.

### Responding to a periodic background sync event <a href="#responding-to-a-periodic-background-sync-event" class="w-headline-link">#</a>

To respond to a periodic background sync event add a `periodicsync` event handler to your service worker. The `event` object passed to it will contain a `tag` parameter matching the value used during registration. For example if a periodic background sync was registered with the name `'content-sync'`, then `event.tag` will be `'content-sync'`.

    self.addEventListener('periodicsync', (event) => {
      if (event.tag === 'content-sync') {
        // See the "Think before you sync" section for
        // checks you could perform before syncing.
        event.waitUntil(syncContent());
      }
      // Other logic for different tags as needed.
    });

### Unregistering a sync <a href="#unregistering-a-sync" class="w-headline-link">#</a>

To end a registered sync, call `periodicSync.unregister()` with the name of the sync you want to unregister.

    const registration = await navigator.serviceWorker.ready;
    if ('periodicSync' in registration) {
      await registration.periodicSync.unregister('content-sync');
    }

## Interfaces <a href="#interfaces" class="w-headline-link">#</a>

Here's a quick run down of the interfaces provided by the Periodic Background Sync API.

- `PeriodicSyncEvent`. Passed to the `ServiceWorkerGlobalScope.onperiodicsync` event handler at a time of the browser's choosing.
- `PeriodicSyncManager`. Registers and unregisters periodic syncs and provides tags for registered syncs. Retrieve an instance of this class from the ServiceWorkerRegistration.periodicSync\` property.
- `ServiceWorkerGlobalScope.onperiodicsync`. Registers a handler to receive the `PeriodicSyncEvent`.
- `ServiceWorkerRegistration.periodicSync`. Returns a reference to the `PeriodicSyncManager`.

## Example <a href="#example" class="w-headline-link">#</a>

### Updating content <a href="#updating-content" class="w-headline-link">#</a>

The following example uses periodic background sync to download and cache up-to-date articles for a news site or blog. Notice the tag name, which indicates the kind of sync this is (`'update-articles'`). The call to `updateArticles()` is wrapped in `event.waitUntil()` so that the service worker won't terminate before the articles are downloaded and stored.

    async function updateArticles() {
      const articlesCache = await caches.open('articles');
      await articlesCache.add('/api/articles');
    }

    self.addEventListener('periodicsync', (event) => {
      if (event.tag === 'update-articles') {
        event.waitUntil(updateArticles());
      }
    });

### Adding periodic background sync to an existing web app <a href="#adding-periodic-background-sync-to-an-existing-web-app" class="w-headline-link">#</a>

[This set of changes](https://github.com/GoogleChromeLabs/so-pwa/pull/11) were needed to add periodic background sync to an [existing PWA](https://so-pwa.firebaseapp.com/). This example includes a number of helpful logging statements that describe the state of periodic background sync in the web app.

## Debugging <a href="#debugging" class="w-headline-link">#</a>

It can be a challenge to get and end-to-end view of periodic background sync while testing locally. Information about active registrations, approximate sync intervals, and logs of past sync events provide valuable context while debugging your web app's behavior. Fortunately, you can find all of that information through an experimental feature in Chrome DevTools.

Periodic background sync debugging is enabled in Chrome 81 and later.

### Recording local activity <a href="#recording-local-activity" class="w-headline-link">#</a>

The **Periodic Background Sync** section of DevTools is organized around key events in the periodic background sync lifecycle: registering for sync, performing a background sync, and unregistering. To obtain information about these events, click **Start recording**.

<figure><img src="https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format" alt="The record button in DevTools" class="w-screenshot" sizes="(min-width: 708px) 708px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wcl5Bm6Pe9xn5Dps6IN6.png?auto=format&amp;w=1416 1416w" width="708" height="90" /><figcaption>The record button in DevTools</figcaption></figure>While recording, entries will appear in DevTools corresponding to events, with context and metadata logged for each.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format" alt="An example of recorded periodic background sync data" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/m92Art0OwiM0VyI7czFB.png?auto=format&amp;w=1600 1600w" width="800" height="357" /><figcaption>An example of recorded periodic background sync data</figcaption></figure>After enabling recording once, it will stay enabled for up to three days, allowing DevTools to capture local debugging information about background syncs that might take place, even hours in the future.

### Simulating events <a href="#simulating-events" class="w-headline-link">#</a>

While recording background activity can be helpful, there are times when you'll want to test your `periodicsync` handler immediately, without waiting for an event to fire on its normal cadence.

You can do this via the **Service Workers** section within the Application panel in Chrome DevTools. The **Periodic Sync** field allows you to provide a tag for the event to use, and to trigger it as many times as you'd like.

Manually triggering a `periodicsync` event requires Chrome 81 or later.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ5QdjwaRDP42cHqW98W.png?auto=format&amp;w=1600 1600w" width="800" height="321" /></figure>Using the DevTools interface <a href="#using-the-devtools-interface" class="w-headline-link">#</a>

Starting in Chrome 81, you'll see a **Periodic Background Sync** section in the DevTools _Application_ panel.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format" class="w-screenshot" sizes="(min-width: 382px) 382px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eYJtJfZ9Qo145lUQe4Ur.png?auto=format&amp;w=764 764w" width="382" height="253" /></figure><a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a>

<span class="w-mr--sm"> Last updated: Aug 18, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/periodic-background-sync/index.md)

<a href="/blog" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to all articles</a>

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
