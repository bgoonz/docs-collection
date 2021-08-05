<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format" alt="A photograph of a half-painted wall." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/skgQgcT3q8fdBGGNL3o1.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#keeping-things-fresh-with-stale-while-revalidate" class="w-toc__header--link">Keeping things fresh with stale-while-revalidate</a>

- [What shipped?](#what-shipped)
- [What's it mean?](#what's-it-mean)
- [Live Example](#live-example)
- [What are the common use cases?](#what-are-the-common-use-cases)
- [How does it interact with service workers?](#how-does-it-interact-with-service-workers)
- [Use a service worker approach if…](#use-a-service-worker-approach-if...)
- [Use a Cache-Control approach if…](#use-a-cache-control-approach-if...)
- [Learn more](#learn-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Keeping things fresh with stale-while-revalidate

An additional tool to help you balance immediacy and freshness when serving your web app.

Jul 18, 2019

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

## What shipped? <a href="#what-shipped" class="w-headline-link">#</a>

[`stale-while-revalidate`](https://tools.ietf.org/html/rfc5861#section-3) helps developers balance between immediacy—_loading cached content right away_—and freshness—_ensuring updates to the cached content are used in the future_. If you maintain a third-party web service or library that updates on a regular schedule, or your first-party assets tend to have short lifetimes, then `stale-while-revalidate` may be a useful addition to your existing caching policies.

Support for setting `stale-while-revalidate` alongside `max-age` in your `Cache-Control` response header is available in [Chrome 75](https://chromestatus.com/feature/5050913014153216) and [Firefox 68](https://bugzilla.mozilla.org/show_bug.cgi?id=1536511).

Browsers that don't support `stale-while-revalidate` will silently ignore that configuration value, and use [`max-age`](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#max-age), as I'll explain shortly…

## What's it mean? <a href="#what&#39;s-it-mean" class="w-headline-link">#</a>

Let's break down `stale-while-revalidate` into two parts: the idea that a cached response might be stale, and the process of revalidation.

First, how does the browser know whether a cached response is "stale"? A [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) response header that contains `stale-while-revalidate` should also contain `max-age`, and the number of seconds specified via `max-age` is what determines staleness. Any cached response newer than `max-age` is considered fresh, and older cached responses are stale.

If the locally cached response is still fresh, then it can be used as-is to fulfill a browser's request. From the perspective of `stale-while-revalidate`, there's nothing to do in this scenario.

But if the cached response is stale, then another age-based check is performed: is the age of the cached response within the window of time covered by the `stale-while-revalidate` setting?

If the age of a stale response falls into this window, then it will be used to fulfill the browser's request. At the same time, a "revalidation" request will be made against the network in a way that doesn't delay the use of the cached response. The returned response might contain the same information as the previously cached response, or it might be different. Either way, the network response is stored locally, replacing whatever was previously cache, and resetting the "freshness" timer used during any future `max-age` comparisons.

However, if the stale cached response is old enough that it falls outside the `stale-while-revalidate` window of time, then it will not fulfill the browser's request. The browser will instead retrieve a response from the network, and use that for both fulfilling the initial request and also populating the local cache with a fresh response.

## Live Example <a href="#live-example" class="w-headline-link">#</a>

Below is a simple example of an HTTP API for returning the current time—more specifically, the current number of minutes past the hour.

In this scenario, the web server uses this `Cache-Control` header in its HTTP response:

    Cache-Control: max-age=1, stale-while-revalidate=59

This setting means that, if a request for the time is repeated within the next 1 second, the previously cached value will still be fresh, and used as-is, without any revalidation.

If a request is repeated between 1 and 60 seconds later, then the cached value will be stale, but will be used to fulfill the API request. At the same time, "in the background," a revalidation request will be made to populate the cache with a fresh value for future use.

If a request is repeated after more than 60 seconds, then the stale response isn't used at all, and both fulfilling the browser's request and the cache revalidation will depend on getting a response back from the network.

Here's a breakdown of those three distinct states, along with the window of time in which each of them apply for our example:

<img src="https://web-dev.imgix.net/image/admin/C8lg2FSEqhTKR6WmYky3.svg" alt="A diagram illustrating the information from the previous section." width="719" height="370" />

## What are the common use cases? <a href="#what-are-the-common-use-cases" class="w-headline-link">#</a>

While the above example for a "minutes after the hour" API service is contrived, it illustrates the expected use case—services that provide information which needs to be refreshed, but where some degree of staleness is acceptable.

Less contrived examples might be an API for the current weather conditions, or the top news headlines that were written in the past hour.

Generally, any response that updates at a known interval, is likely to be requested multiple times, and is static within that interval is a good candidate for short-term caching via `max-age`. Using `stale-while-revalidate` in addition to `max-age` increases the likelihood that future requests can be fulfilled from the cache with fresher content, without blocking on a network response.

## How does it interact with service workers? <a href="#how-does-it-interact-with-service-workers" class="w-headline-link">#</a>

If you've heard of `stale-while-revalidate` chances are that it was in the context of [recipes](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate) used within a [service worker](/service-workers-cache-storage/).

Using stale-while-revalidate via a `Cache-Control` header shares some similarities with its use in a service worker, and many of the same considerations around freshness trade-offs and maximum lifetimes apply. However, there are a few considerations that you should take into account when deciding whether to implement a service worker-based approach, or just rely on the `Cache-Control` header configuration.

### Use a service worker approach if… <a href="#use-a-service-worker-approach-if..." class="w-headline-link">#</a>

- You're already using a service worker in your web app.
- You need fine-grained control over the contents of your caches, and want to implement something like a least-recently used expiration policy. Workbox's [Cache Expiration](https://developers.google.com/web/tools/workbox/modules/workbox-cache-expiration) module can help with this.
- You want to be notified when a stale response changes in the background during the revalidation step. Workbox's [Broadcast Cache Update](https://developers.google.com/web/tools/workbox/modules/workbox-broadcast-cache-update) module can help with this.
- You need this `stale-while-revalidate` behavior in all modern browsers.

### Use a Cache-Control approach if… <a href="#use-a-cache-control-approach-if..." class="w-headline-link">#</a>

- You would rather not deal with the overhead of deploying and maintaining a service worker for your web app.
- You are fine with letting the browser's automatic cache management prevent your local caches from growing too large.
- You are fine with an approach that is not currently supported in all modern browsers (as of July 2019; support may grow in the future).

If you're using a service worker and also have `stale-while-revalidate` enabled for some responses via a `Cache-Control` header, then the service worker will, in general, have "first crack" at responding to a request. If the service worker decides not to respond, or if in the process of generating a response it makes a network request using [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), then the behavior configured via the `Cache-Control` header will end up going into effect.

## Learn more <a href="#learn-more" class="w-headline-link">#</a>

- [`stale-while-revalidate` response](https://fetch.spec.whatwg.org/#concept-stale-while-revalidate-response) in the Fetch API spec.
- [RFC 5861](https://tools.ietf.org/html/rfc5861), covering the initial `stale-while-revalidate` specification.
- [The HTTP cache: your first line of defense](/http-cache/), from the "Network reliability" guide on this site.

_Hero image by Samuel Zeller._

<span class="w-mr--sm"> Last updated: Jul 18, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/stale-while-revalidate/index.md)

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
