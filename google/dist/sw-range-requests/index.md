<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format" alt="Photo of sliced cucumbers." class="w-hero w-hero--cover w-hero--center" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/5HWlDEheVYh9LAs0p8vg.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#handling-range-requests-in-a-service-worker" class="w-toc__header--link">Handling range requests in a service worker</a>

- [What's the issue?](#what's-the-issue)
- [What's been fixed?](#what's-been-fixed)
- [Which browsers behave correctly?](#which-browsers-behave-correctly)
- [What about serving range requests from the cache?](#what-about-serving-range-requests-from-the-cache)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Handling range requests in a service worker

Make sure your service worker knows what to do when a partial response is requested.

Oct 6, 2020 <span class="w-author__separator">•</span> Updated Oct 6, 2020

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

Some HTTP requests contain a [`Range:` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range), indicating that only a portion of the full resource should be returned. They're commonly used for streaming audio or video content to allow smaller chunks of media to be loaded on demand, instead of requesting the entirety of the remote file all at once.

A [service worker](https://developers.google.com/web/fundamentals/primers/service-workers) is JavaScript code that sits in between your web app and the network, potentially intercepting outgoing network requests and generating responses for them.

Historically, range requests and service workers haven't played nicely together. It's been necessary to take special steps to avoid bad outcomes in your service worker. Fortunately, this is starting to change. In browsers exhibiting the correct behavior, range requests will "just work" when passing through a service worker.

## What's the issue? <a href="#what&#39;s-the-issue" class="w-headline-link">#</a>

Consider a service worker with the following `fetch` event listener, which takes every incoming request and passes it to the network:

    self.addEventListener('fetch', (event) => {
      // The Range: header will not pass through in
      // browsers that behave incorrectly.
      event.respondWith(fetch(event.request));
    });

This sort of trivial `fetch` event listener should [normally be avoided](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#never_use_a_passthrough_fetch_handler); it's used here for illustrative purposes.

In browsers with the incorrect behavior, if `event.request` included a `Range:` header, that header would be silently dropped. The request that was received by the remote server would not include `Range:` at all. This would not necessarily "break" anything, since a server is _technically_ allowed to return the full response body, with a [`200` status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200), even when a `Range:` header is present in the original request. But it would result in more data being transferred than is strictly needed from the perspective of the browser.

Developers who were aware of this behavior could work around it by explicitly checking for the presence of a `Range:` header, and not calling `event.respondWith()` if one is present. By doing this, the service worker effectively removes itself from the response generation picture, and the default browser networking logic, which knows how to preserve range requests, is used instead.

    self.addEventListener('fetch', (event) => {
      // Return without calling event.respondWith()
      // if this is a range request.
      if (event.request.headers.has('range')) {
        return;
      }

      event.respondWith(fetch(event.request));
    });

It's safe to say that most developers were not aware of the need to do this, though. And it wasn't clear _why_ that should be required. Ultimately, this limitation was due to [browsers](https://bugs.chromium.org/p/chromium/issues/detail?id=847428) needing to catch up to [changes in the underlying specification](https://github.com/whatwg/fetch/pull/560), which added support for this functionality.

## What's been fixed? <a href="#what&#39;s-been-fixed" class="w-headline-link">#</a>

Browsers that behave correctly preserve the `Range:` header when `event.request` is passed to `fetch()`. This means the service worker code in my initial example will allow the remote server to see the `Range:` header, if it was set by the browser:

    self.addEventListener('fetch', (event) => {
      // The Range: header will pass through in browsers
      // that behave correctly.
      event.respondWith(fetch(event.request));
    });

The server now gets a chance to properly handle the range request and return a partial response with a [`206` status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206).

## Which browsers behave correctly? <a href="#which-browsers-behave-correctly" class="w-headline-link">#</a>

Recent versions of Safari have the [correct functionality](https://trac.webkit.org/changeset/252047/webkit). Chrome and Edge, starting with [version 87](https://chromestatus.com/feature/5648276147666944), behave correctly as well.

As of this October 2020, Firefox has not yet fixed this behavior, so you may still need to account for it while deploying your service worker's code to production.

Checking the "Include range header in network request" row of the [Web Platform Tests dashboard](https://wpt.fyi/results/fetch/range/sw.https.window.html?label=master&label=experimental&aligned) is the best way to confirm whether or not a given browser has corrected this behavior.

## What about serving range requests from the cache? <a href="#what-about-serving-range-requests-from-the-cache" class="w-headline-link">#</a>

Service workers can do much more than just pass a request through to the network. A common use case is to add resources, like audio and video files, to a [local cache](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage). A service worker can then fulfill requests from that cache, bypassing the network entirely.

All browsers, including Firefox, support inspecting a request inside a `fetch` handler, checking for the presence of the `Range:` header, and then locally fulfilling the request with a [`206` response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206) that comes from a cache. The service worker code to properly parse the `Range:` header and return only the appropriate segment of the complete cached response is not trivial, though.

Fortunately, developers who want some help can turn to [Workbox](https://developers.google.com/web/tools/workbox/), which is a set of libraries that simplifies common service worker use cases. The [`workbox-range-request module`](https://developers.google.com/web/tools/workbox/modules/workbox-range-requests) implements all the logic necessary to serve partial responses directly from the cache. A full recipe for this use case can be found [in the Workbox documentation](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#cached-av).

_The hero image on this post is by [Natalie Rhea Riggs](https://unsplash.com/photos/OnAwTs0tu3k) on Unsplash._

<a href="/tags/audio/" class="w-chip">Audio</a> <a href="/tags/media/" class="w-chip">Media</a> <a href="/tags/offline/" class="w-chip">Offline</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a>

<span class="w-mr--sm"> Last updated: Oct 6, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/sw-range-requests/index.md)

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
