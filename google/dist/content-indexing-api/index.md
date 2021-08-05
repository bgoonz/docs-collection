<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format" alt="Index cards in a filing cabinet." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/tuIkBEm2DdHBYy62dDac.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#indexing-your-offline-capable-pages-with-the-content-indexing-api" class="w-toc__header--link">Indexing your offline-capable pages with the Content Indexing API</a>

- [What is the Content Indexing API?](#what)
- [See it in action](#see-it-in-action)
- [Using the API](#using-the-api)
- [What type of URLs can be indexed as offline-capable?](#offline-capable-urls)
- [Overview](#api-overview)
- [Adding to the index](#adding-items)
- [Listing the index's contents](#listing-items)
- [Removing items from the index](#removing-items)
- [Handling a user delete event](#handling-contentdelete)
- [Feedback about the API design](#feedback-design)
- [Problem with the implementation?](#feedback-implementation)
- [Planning to use the API?](#planning-to-use)
- [What are some security and privacy implications of content indexing?](#security-privacy)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Indexing your offline-capable pages with the Content Indexing API

Enabling service workers to tell browsers which pages work offline

Dec 12, 2019 <span class="w-author__separator">•</span> Updated Jun 14, 2021

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

**Success**: The Content Indexing API, part of the [capabilities project](/fugu-status/), launched in Chrome 84 for Android.

## What is the Content Indexing API? <a href="#what" class="w-headline-link">#</a>

Using a [progressive web app](https://developers.google.com/web/progressive-web-apps) means having access to information people care about—images, videos, articles, and more—regardless of the current state of your network connection. Technologies like [service workers](https://developers.google.com/web/fundamentals/primers/service-workers), the [Cache Storage API](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api), and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) provide you with the building blocks for storing and serving data when folks interact directly with a PWA. But building a high-quality, offline-first PWA is only part of the story. If folks don't realize that a web app's content is available while they're offline, they won't take full advantage of the work you put into implementing that functionality.

This is a **discovery** problem; how can your PWA make users aware of its offline-capable content so that they can discover and view what's available? The Content Indexing API is a solution to this problem. The developer-facing portion of this solution is an extension to service workers, which allows developers to add URLs and metadata of offline-capable pages to a local index maintained by the browser. That enhancement is available in Chrome 84 and later.

Once the index is populated with content from your PWA, as well as any other installed PWAs, it will be surfaced by the browser as shown below.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format" alt="First, select the Downloads menu item on Chrome&#39;s new tab page." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rJF9Cl75c7tcsBL6PQe0.png?auto=format&amp;w=1600 1600w" width="800" height="1480" /><figcaption>First, select the <strong>Downloads</strong> menu item on Chrome's new tab page.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format" alt="Media and articles that have been added to the index will be shown in the Articles for You section." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VFgYcvSwBjxP0OqOAyoR.png?auto=format&amp;w=1600 1600w" width="800" height="1480" /><figcaption>Media and articles that have been added to the index will be shown in the <strong>Articles for You</strong> section.</figcaption></figure>

Additionally, Chrome can proactively recommend content when it detects that a user is offline.

The Content Indexing API **is not an alternative way of caching content**. It's a way of providing metadata about pages that are already cached by your service worker, so that the browser can surface those pages when folks are likely to want to view them. The Content Indexing API helps with **discoverability** of cached pages.

The Content Indexing API is not a searchable index. While you can get a list of all indexed entries, there's no way to query against indexed metadata directly.

## See it in action <a href="#see-it-in-action" class="w-headline-link">#</a>

The best way to get a feel for the Content Indexing API is to try a sample application.

1.  Make sure that you're using a supported browser and platform. Currently, that's limited to **Chrome 84 or later on Android**. Go to `about://version` to see what version of Chrome you're running.
2.  Visit <https://contentindex.dev>
3.  Click the `+` button next to one or more of the items on the list.
4.  (Optional) Disable your device's Wi-Fi and cellular data connection, or enable airplane mode to simulate taking your browser offline.
5.  Choose **Downloads** from Chrome's menu, and switch to the **Articles for You** tab.
6.  Browse through the content that you previously saved.

You can view [the source of the sample application on GitHub](https://github.com/rayankans/contentindex.dev).

Another sample application, a [Scrapbook PWA](https://scrapbook-pwa.web.app/), illustrates the use of the Content Indexing API with the [Web Share Target API](/web-share-target/). The [code demonstrates a technique](https://github.com/GoogleChrome/samples/blob/gh-pages/web-share/src/js/contentIndexing.js) for keeping the Content Indexing API in sync with items stored by a web app using the [Cache Storage API](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api).

## Using the API <a href="#using-the-api" class="w-headline-link">#</a>

To use the API your app must have a service worker and URLs that are navigable offline. If your web app does not currently have a service worker, the [Workbox libraries](https://developers.google.com/web/tools/workbox/) can simplify creating one.

### What type of URLs can be indexed as offline-capable? <a href="#offline-capable-urls" class="w-headline-link">#</a>

The API supports indexing URLs corresponding to HTML documents. A URL for a cached media file, for example, can't be indexed directly. Instead, you need to provide a URL for a page that displays media, and which works offline.

A recommended pattern is to create a "viewer" HTML page that could accept the underlying media URL as a query parameter and then display the contents of the file, potentially with additional controls or content on the page.

Web apps can only add URLs to the content index that are under the [scope](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker) of the current service worker. In other words, a web app could not add a URL belonging to a completely different domain into the content index.

### Overview <a href="#api-overview" class="w-headline-link">#</a>

The Content Indexing API supports three operations: adding, listing, and removing metadata. These methods are exposed from a new property, `index`, that has been added to the `ServiceWorkerRegistration` interface.

The first step in indexing content is getting a reference to the current [`ServiceWorkerRegistration`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration). Using `navigator.serviceWorker.ready` is the most straightforward way:

    const registration = await navigator.serviceWorker.ready;

    // Remember to feature-detect before using the API:
    if ('index' in registration) {
      // Your Content Indexing API code goes here!
    }

If you're making calls to the Content Indexing API from within a service worker, rather than inside a web page, you can refer to the `ServiceWorkerRegistration` directly via `registration`. It will [already be defined](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/registration) as part of the `ServiceWorkerGlobalScope.`

### Adding to the index <a href="#adding-items" class="w-headline-link">#</a>

Use the `add()` method to index URLs and their associated metadata. It's up to you to choose when items are added to the index. You might want to add to the index in response to an input, like clicking a "save offline" button. Or you might add items automatically each time cached data is updated via a mechanism like [periodic background sync](https://developers.google.com/web/updates/2019/08/periodic-background-sync).

    await registration.index.add({
      // Required; set to something unique within your web app.
      id: 'article-123',

      // Required; url needs to be an offline-capable HTML page.
      url: '/articles/123',

      // Required; used in user-visible lists of content.
      title: 'Article title',

      // Required; used in user-visible lists of content.
      description: 'Amazing article about things!',

      // Required; used in user-visible lists of content.
      icons: [{
        src: '/img/article-123.png',
        sizes: '64x64',
        type: 'image/png',
      }],

      // Optional; valid categories are currently:
      // 'homepage', 'article', 'video', 'audio', or '' (default).
      category: 'article',
    });

Adding an entry only affects the content index; it does not add anything to the [cache](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api).

#### Edge case: Call `add()` from `window` context if your icons rely on a `fetch` handler <a href="#edge-case:-call-add()-from-window-context-if-your-icons-rely-on-a-fetch-handler" class="w-headline-link">#</a>

When you call `add()`, Chrome will make a request for each icon's URL to ensure that it has a copy of the icon to use when displaying a list of indexed content.

- If you call `add()` from the `window` context (in other words, from your web page), this request will trigger a `fetch` event on your service worker.

- If you call `add()` within your service worker (perhaps inside another event handler), the request will **not** trigger the service worker's `fetch` handler. The icons will be fetched directly, without any service worker involvement. Keep this in mind if your icons rely on your `fetch` handler, perhaps because they only exist in the local cache and not on the network. If they do, make sure that you only call `add()` from the `window` context.

### Listing the index's contents <a href="#listing-items" class="w-headline-link">#</a>

The `getAll()` method returns a promise for an iterable list of indexed entries and their metadata. Returned entries will contain all of the data saved with `add()`.

    const entries = await registration.index.getAll();
    for (const entry of entries) {
      // entry.id, entry.launchUrl, etc. are all exposed.
    }

### Removing items from the index <a href="#removing-items" class="w-headline-link">#</a>

To remove an item from the index, call `delete()` with the `id` of the item to remove:

    await registration.index.delete('article-123');

Calling `delete()` only affects the index. It does not delete anything from the [cache](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api).

**Warning**: Once indexed, entries do not automatically expire. It's up to you to either present an interface in your web app for clearing out entries, or periodically remove older entries that you know should no longer be available offline.

### Handling a user delete event <a href="#handling-contentdelete" class="w-headline-link">#</a>

When the browser displays the indexed content, it may include its own user interface with a **Delete** menu item, giving people a chance to indicate that they're done viewing previously indexed content. This is how the deletion interface looks in Chrome 80:

<figure><img src="https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/1t7pdD45CTmo2Gqbdxro.png?auto=format&amp;w=1600 1600w" width="800" height="840" /></figure>When someone selects that menu item, your web app's service worker will receive a `contentdelete` event. While handling this event is optional, it provides a chance for your service worker to "clean up" content, like locally cached media files, that someone has indicated they are done with.

You do not need to call `registration.index.delete()` inside your `contentdelete` handler; if the event has been fired, the relevant index deletion has already been performed by the browser.

    self.addEventListener('contentdelete', (event) => {
      // event.id will correspond to the id value used
      // when the indexed content was added.
      // Use that value to determine what content, if any,
      // to delete from wherever your app stores it—usually
      // the Cache Storage API or perhaps IndexedDB.
    });

The `contentdelete` event is only fired when the deletion happens due to interaction with the browser's built-in user interface. It is _not_ fired when `registration.index.delete()` is called. If your web app triggers the index deletion using that API method, it should also [clean up cached content](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete) at the same time.

### Feedback about the API design <a href="#feedback-design" class="w-headline-link">#</a>

Is there something about the API that's awkward or doesn't work as expected? Or are there missing pieces that you need to implement your idea?

File an issue on the [Content Indexing API explainer GitHub repo](https://github.com/WICG/content-index/issues), or add your thoughts to an existing issue.

### Problem with the implementation? <a href="#feedback-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation?

File a bug at <https://new.crbug.com>. Include as much detail as you can, simple instructions for reproducing, and set **Components** to `Blink>ContentIndexing`.

### Planning to use the API? <a href="#planning-to-use" class="w-headline-link">#</a>

Planning to use the Content Indexing API in your web app? Your public support helps Chrome prioritize features, and shows other browser vendors how critical it is to support them.

- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#ContentIndexingAPI`](https://twitter.com/search?q=%23ContentIndexingAPI&src=typed_query&f=live) and details on where and how you're using it.

## What are some security and privacy implications of content indexing? <a href="#security-privacy" class="w-headline-link">#</a>

Check out [the answers](https://github.com/WICG/content-index/blob/main/SECURITY_AND_PRIVACY.md) provided in response to the W3C's [Security and Privacy questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/). If you have further questions, please start a discussion via the project's [GitHub repo](https://github.com/WICG/content-index/issues).

_Hero image by Maksym Kaharlytskyi on [Unsplash](https://unsplash.com/photos/Q9y3LRuuxmg)._

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a>

<span class="w-mr--sm"> Last updated: Jun 14, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/content-indexing-api/index.md)

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
