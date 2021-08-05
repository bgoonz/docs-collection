<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format" alt="Stack of shipping containers" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/c8u2hKEFoFfgTsmcKeuK.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#storage-for-the-web" class="w-toc__header--link">Storage for the web</a>

- [What should I use?](#recommendation)
- [What about other storage mechanisms?](#other)
- [How much can I store?](#how-much)
- [How can I check how much storage is available?](#check)
- [Inspect](#inspect)
- [How to handle going over quota?](#over-quota)
- [IndexedDB](#indexeddb)
- [Cache API](#cache-api)
- [How does eviction work?](#eviction)
- [Bonus: Why use a wrapper for IndexedDB](#bonus:-why-use-a-wrapper-for-indexeddb)
- [Conclusion](#conclusion)
- [Additional resources](#additional-resources)
- [Thanks](#thanks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Storage for the web

There are many different options for storing data in the browser. Which one is best for your needs?

Apr 27, 2020 <span class="w-author__separator">•</span> Updated Feb 11, 2021

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

Internet connections can be flakey or non-existent on the go, which is why offline support and reliable performance are common features in [progressive web apps](/progressive-web-apps/). Even in perfect wireless environments, judicious use of caching and other storage techniques can substantially improve the user experience. There are several ways to cache your static application resources (HTML, JavaScript, CSS, images, etc.), and data (user data, news articles, etc.). But which is the best solution? How much can you store? How do you prevent it from being evicted?

## What should I use? <a href="#recommendation" class="w-headline-link">#</a>

Here's a general recommendation for storing resources:

- For the network resources necessary to load your app and file-based content, use the [**Cache Storage API**](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api) (part of [service workers](https://developers.google.com/web/fundamentals/primers/service-workers)).
- For other data, use [**IndexedDB**](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) (with a [promises wrapper](https://www.npmjs.com/package/idb)).

IndexedDB and the Cache Storage API are supported in every modern browser. They're both asynchronous, and will not block the main thread. They're accessible from the `window` object, web workers, and service workers, making it easy to use them anywhere in your code.

## What about other storage mechanisms? <a href="#other" class="w-headline-link">#</a>

There are several other storage mechanisms available in the browser, but they have limited use and may cause significant performance issues.

[SessionStorage](https://developer.mozilla.org/en/docs/Web/API/Window/sessionStorage) is tab specific, and scoped to the lifetime of the tab. It may be useful for storing small amounts of session specific information, for example an IndexedDB key. It should be used with caution because it is synchronous and will block the main thread. It is limited to about 5MB and can contain only strings. Because it is tab specific, it is not accessible from web workers or service workers.

[LocalStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) should be avoided because it is synchronous and will block the main thread. It is limited to about 5MB and can contain only strings. LocalStorage is not accessible from web workers or service workers.

[Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) have their uses, but should not be used for storage. Cookies are sent with every HTTP request, so storing anything more than a small amount of data will significantly increase the size of every web request. They are synchronous, and are not accessible from web workers. Like LocalStorage and SessionStorage, cookies are limited to only strings.

The [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) and FileWriter API provide methods for reading and writing files to a sandboxed file system. While it is asynchronous, it is not recommended because it is [only available in Chromium-based browsers](https://caniuse.com/#feat=filesystem).

The [File System Access API](/file-system-access/) was designed to make it easy for users to read and edit files on their local file system. The user must grant permission before a page can read or write to any local file, and permissions are not persisted across sessions.

WebSQL should **not** be used, and existing usage should be migrated to IndexedDB. Support has [been removed](https://caniuse.com/#feat=sql-storage) from almost all major browsers. The W3C [stopped maintaining the Web SQL spec](https://www.w3.org/TR/webdatabase/) in 2010, with no plans to further updates planned.

Application Cache should **not** be used, and existing usage should be migrated to service workers and the Cache API. It has been [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache) and support will be removed from browsers in the future.

## How much can I store? <a href="#how-much" class="w-headline-link">#</a>

In short, **a lot**, at least a couple of hundred megabytes, and potentially hundreds of gigabytes or more. Browser implementations vary, but the amount of storage available is usually based on the amount of storage available on the device.

- Chrome allows the browser to use up to 80% of total disk space. An origin can use up to 60% of the total disk space. You can use the [StorageManager API](#check) to determine the maximum quota available. Other Chromium-based browsers may allow the browser to use more storage. See [PR \#3896](https://github.com/GoogleChrome/web.dev/pull/3896) for details about Chrome's implementation.
- Internet Explorer 10 and later can store up to 250MB and will prompt the user when more than 10MB has been used.
- Firefox allows the browser to use up to 50% of free disk space. An [eTLD+1](https://godoc.org/golang.org/x/net/publicsuffix) group (e.g., `example.com`, `www.example.com` and `foo.bar.example.com`) [may use up to 2GB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#Storage_limits). You can use the [StorageManager API](#check-available) to determine how much space is still available.
- Safari (both desktop and mobile) appears to allow about 1GB. When the limit is reached, Safari will prompt the user, increasing the limit in 200MB increments. I was unable to find any official documentation on this.
  - If a PWA is added to the home screen on mobile Safari, it appears to create a new storage container, and nothing is shared between the PWA and mobile Safari. Once the quota has been hit for an installed PWA, there doesn't appear to be any way to request additional storage.

In the past, if a site exceeded a certain threshold of data stored, the browser would prompt the user to grant permission to use more data. For example, if the origin used more than 50MB, the browser would prompt the user to allow it to store up to 100MB, then ask again at 50MB increments.

Today, most modern browsers will not prompt the user, and will allow a site to use up to its allotted quota. The exception appears to be Safari, which prompts at 750MB, asking permission to store up to 1.1GB. If an origin attempts to use more than its allotted quota, further attempts to write data will fail.

## How can I check how much storage is available? <a href="#check" class="w-headline-link">#</a>

In [many browsers](https://caniuse.com/#feat=mdn-api_storagemanager), you can use the [StorageManager API](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate) to determine the amount of storage available to the origin, and how much storage it's using. It reports the total number of bytes used by IndexedDB and the Cache API, and makes it possible to calculate the approximate remaining storage space available.

    if (navigator.storage && navigator.storage.estimate) {
      const quota = await navigator.storage.estimate();
      // quota.usage -> Number of bytes used.
      // quota.quota -> Maximum number of bytes available.
      const percentageUsed = (quota.usage / quota.quota) * 100;
      console.log(`You've used ${percentageUsed}% of the available storage.`);
      const remaining = quota.quota - quota.usage;
      console.log(`You can write up to ${remaining} more bytes.`);
    }

The StorageManager isn't [implemented](https://caniuse.com/#feat=mdn-api_storagemanager) in all browsers yet, so you must feature detect it before using it. Even when it is available, you must still catch over-quota errors (see below). In some cases, it's possible for the available quota to exceed the actual amount of storage available.

Other Chromium-based browsers may factor in the amount of free space when reporting the available quota. Chrome does not, and will always report 60% of the actual disk size. This helps to reduce the ability to determine the size of stored cross origin resources.

### Inspect <a href="#inspect" class="w-headline-link">#</a>

During development, you can use your browser's DevTools to inspect the different storage types, and easily clear all stored data.

A new feature was added in Chrome 88 that lets you override the site's storage quota in the Storage Pane. This feature gives you the ability to simulate different devices and test the behavior of your apps in low disk availability scenarios. Go to **Application** then **Storage**, enable the **Simulate custom storage quota** checkbox, and enter any valid number to simulate the storage quota.

<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format" alt="DevTools Storage pane." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/tYlbklNwF6DFKNV2cY0D.png?auto=format&amp;w=1600 1600w" width="800" height="567" />

While working on this article, I wrote a [simple tool](https://storage-quota.glitch.me/) to attempt to quickly use as much storage as possible. It's a quick and easy way to experiment with different storage mechanisms, and see what happens when you use all of your quota.

## How to handle going over quota? <a href="#over-quota" class="w-headline-link">#</a>

What should you do when you go over quota? Most importantly, you should always catch and handle write errors, whether it's a `QuotaExceededError` or something else. Then, depending on your app design, decide how to handle it. For example delete content that hasn't been accessed in a long time, remove data based on size, or provide a way for users to choose what they want to delete.

Both IndexedDB and the Cache API both throw a `DOMError` named `QuotaExceededError` when you've exceeded the quota available.

### IndexedDB <a href="#indexeddb" class="w-headline-link">#</a>

If the origin has exceeded its quota, attempts to write to IndexedDB will fail. The transaction's `onabort()` handler will be called, passing an event. The event will include a `DOMException` in the error property. Checking the error `name` will return `QuotaExceededError`.

    const transaction = idb.transaction(['entries'], 'readwrite');
    transaction.onabort = function(event) {
      const error = event.target.error; // DOMException
      if (error.name == 'QuotaExceededError') {
        // Fallback code goes here
      }
    };

### Cache API <a href="#cache-api" class="w-headline-link">#</a>

If the origin has exceeded its quota, attempts to write to the Cache API will reject with a `QuotaExceededError` `DOMException`.

    try {
      const cache = await caches.open('my-cache');
      await cache.add(new Request('/sample1.jpg'));
    } catch (err) {
      if (error.name === 'QuotaExceededError') {
        // Fallback code goes here
      }
    }

## How does eviction work? <a href="#eviction" class="w-headline-link">#</a>

Web storage is categorized into two buckets, "Best Effort" and "Persistent". Best effort means the storage can be cleared by the browser without interrupting the user, but is less durable for long-term or critical data. Persistent storage is not automatically cleared when storage is low. The user needs to manually clear this storage (via browser settings).

By default, a site's data (including IndexedDB, Cache API, etc) falls into the best effort category, which means unless a site has [requested persistent storage](https://developers.google.com/web/updates/2016/06/persistent-storage), the browser may evict site data at its discretion, for example, when device storage is low.

The eviction policy for best effort is:

- Chromium-based browsers will begin to evict data when the browser runs out of space, clearing all site data from the least recently used origin first, then the next, until the browser is no longer over the limit.
- Internet Explorer 10+ will not evict data, but will prevent the origin from writing any more.
- Firefox will begin to evict data when the available disk space is filled up, clearing all site data from the least recently used origin first, then the next, until the browser is no longer over the limit.
- Safari previously did not evict data, but recently implemented a new seven-day cap on all writable storage (see below).

Starting in iOS and iPadOS 13.4 and Safari 13.1 on macOS, there is a seven-day cap on all script writable storage, including IndexedDB, service worker registration, and the Cache API. This means Safari will evict all content from the cache after seven days of Safari use if the user does not interact with the site. This eviction policy **does not apply to installed PWAs** that have been added to the home screen. See [Full Third-Party Cookie Blocking and More](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/) on the WebKit blog for complete details.

You can request [persistent storage](/persistent-storage/) for your site to protect critical user or application data.

## Bonus: Why use a wrapper for IndexedDB <a href="#bonus:-why-use-a-wrapper-for-indexeddb" class="w-headline-link">#</a>

IndexedDB is a low level API that requires significant setup before use, which can be particularly painful for storing simple data. Unlike most modern promise-based APIs, it is event based. Promise wrappers like [idb](https://www.npmjs.com/package/idb) for IndexedDB hide some of the powerful features but more importantly, hide the complex machinery (e.g. transactions, schema versioning) that comes with the IndexedDB library.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Gone are the days of limited storage and prompting the user to store more and more data. Sites can store effectively all of the resources and data they need to run. Using the [StorageManager API](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate) you can determine how much is available to you, and how much you've used. And with [persistent storage](https://developers.google.com/web/updates/2016/06/persistent-storage), unless the user removes it, you can protect it from eviction.

### Additional resources <a href="#additional-resources" class="w-headline-link">#</a>

- [IndexedDB Best Practices](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/indexeddb-best-practices)
- [Chrome Web Storage and Quota Concepts](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/preview)

### Thanks <a href="#thanks" class="w-headline-link">#</a>

Special thanks to Jarryd Goodman, Phil Walton, Eiji Kitamura, Daniel Murphy, Darwin Huang, Josh Bell, Marijn Kruisselbrink, and Victor Costan for reviewing this article. Thanks to Eiji Kitamura, Addy Osmani, and Marc Cohen who wrote the original articles that this is based on. Eiji wrote a helpful tool called [Browser Storage Abuser](http://demo.agektmr.com/storage/) that was useful in validating current behavior. It allows you to store as much data as possible and see the storage limits on your browser. Thanks to Francois Beaufort who did the digging into Safari to figure out its storage limits.

The hero image is by Guillaume Bolduc on [Unsplash](https://unsplash.com/photos/uBe2mknURG4).

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/storage/" class="w-chip">Storage</a> <a href="/tags/memory/" class="w-chip">Memory</a>

<span class="w-mr--sm"> Last updated: Feb 11, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/storage-for-the-web/index.md)

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
