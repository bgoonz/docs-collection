<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format" alt="The Workbox logo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KW5Rgyo01HyimeALdCZD.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#extending-workbox" class="w-toc__header--link">Extending Workbox</a>

- [What's Workbox?](#what's-workbox)
- [Custom strategies](#custom-strategies)
- [Handle simultaneous, duplicate requests with DedupeNetworkFirst](#handle-simultaneous-duplicate-requests-with-dedupenetworkfirst)
- [Create a race between the cache and network with CacheNetworkRace](#create-a-race-between-the-cache-and-network-with-cachenetworkrace)
- [StategyHandler: the recommended approach for creating custom strategies](#stategyhandler:-the-recommended-approach-for-creating-custom-strategies)
- [Drop-in support for routing](#drop-in-support-for-routing)
- [Custom plugins](#custom-plugins)
- [Lifecycle event overview](#lifecycle-event-overview)
- [Lifecycle events example: FallbackOnErrorPlugin](#lifecycle-events-example:-fallbackonerrorplugin)
- [Custom strategy or custom plugin?](#custom-strategy-or-custom-plugin)
- [Takeaways](#takeaways)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Extending Workbox

Write your own reusable, shareable strategies and plugins.

Dec 10, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/reliable" class="w-post-signpost__link">Network reliability</a>

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

In this article, we're going to take a quick tour of some ways of extending [Workbox](https://developers.google.com/web/tools/workbox). By the end, you'll be writing your own strategies and plugins, and hopefully sharing them with the world.

If you're more of a visual person, you can watch a recording of a Chrome Dev Summit talk covering the same material:

## What's Workbox? <a href="#what&#39;s-workbox" class="w-headline-link">#</a>

At its core, Workbox is a set of libraries to help with common service worker caching scenarios. And when we've written about Workbox in the past, the emphasis has been on "common" scenarios. For most developers, the [caching strategies](https://developers.google.com/web/tools/workbox/modules/workbox-strategies) that Workbox already provides will handle your caching needs.

The built-in strategies include [stale-while-revalidate](https://developers.google.com/web/tools/workbox/modules/workbox-strategies#stale-while-revalidate), where a cached response is used to respond to a request immediately, while the cache is also updated so that it's fresh the next time around. They also include [network-first](https://developers.google.com/web/tools/workbox/modules/workbox-strategies#network_first_network_falling_back_to_cache), falling back to the cache when the network is unavailable, and a few more.

## Custom strategies <a href="#custom-strategies" class="w-headline-link">#</a>

But what if you wanted to go beyond those common caching scenarios? Let's cover writing your own custom caching strategies. [Workbox v6](https://github.com/GoogleChrome/workbox/releases/tag/v6.0.0) offers a new [`Strategy` base class](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.Strategy) that sits in front of lower-level APIs, like [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [Cache Storage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage). You can extend the `Strategy` base class, and then implement your own logic in the [`_handle()` method](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.Strategy#_handle).

### Handle simultaneous, duplicate requests with DedupeNetworkFirst <a href="#handle-simultaneous-duplicate-requests-with-dedupenetworkfirst" class="w-headline-link">#</a>

For instance, imagine that you want to implement a strategy that can handle multiple, simultaneous requests for the same URL by deduplicating them. A copy of the response is then used to fulfill all of the in-flight requests, saving bandwidth that would otherwise be wasted.

Here's the code you can use to implement that, by extending the [`NetworkFirst` strategy](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.NetworkFirst) (which itself extends the `Strategy` base):

    // See https://developers.google.com/web/tools/workbox/guides/using-bundlers
    import {NetworkFirst} from 'workbox-strategies';

    class DedupeNetworkFirst extends NetworkFirst {
      constructor(options) {
        super(options);
        // This maps inflight requests to response promises.
        this._requests = new Map();
      }

      // _handle is the standard entry point for our logic.
      async _handle(request, handler) {
        let responsePromise = this._requests.get(request.url);

        if (responsePromise) {
          // If there's already an inflight request, return a copy
          // of the eventual response.
          const response = await responsePromise;
          return response.clone();
        } else {
          // If there isn't already an inflight request, then use
          // the _handle() method of NetworkFirst to kick one off.
          responsePromise = super._handle(request, handler);
          this._requests.set(request.url, responsePromise);
          try {
            const response = await responsePromise;
            return response.clone();
          } finally {
            // Make sure to clean up after a batch of inflight
            // requests are fulfilled!
            this._requests.delete(request.url);
          }
        }
      }
    }

This code assumes that all requests for the same URL can be satisfied with the same response, which won't always be the case if cookies or session state information comes into play.

### Create a race between the cache and network with CacheNetworkRace <a href="#create-a-race-between-the-cache-and-network-with-cachenetworkrace" class="w-headline-link">#</a>

Here's another example of a custom strategy—one that's a twist on stale-while-revalidate, where both the network and cache are checked at the same time, with a race to see which will return a response first.

    // See https://developers.google.com/web/tools/workbox/guides/using-bundlers
    import {Strategy} from 'workbox-strategies';

    // Instead of extending an existing strategy,
    // this extends the generic Strategy base class.
    class CacheNetworkRace extends Strategy {
      // _handle is the standard entry point for our logic.
      _handle(request, handler) {
        // handler is an instance of the StrategyHandler class,
        // and exposes helper methods for interacting with the
        // cache and network.
        const fetchDone = handler.fetchAndCachePut(request);
        const matchDone = handler.cacheMatch(request);

        // The actual response generation logic relies on a "race"
        // between the network and cache promises.
        return new Promise((resolve, reject) => {
          fetchDone.then(resolve);
          matchDone.then((response) => response && resolve(response));

          // Promise.allSettled() is implemented in recent browsers.
          Promise.allSettled([fetchDone, matchDone]).then(results => {
            if (results[0].status === 'rejected' &&
                !results[1].value) {
              reject(results[0].reason);
            }
          });
        });
      }
    }

## StategyHandler: the recommended approach for creating custom strategies <a href="#stategyhandler:-the-recommended-approach-for-creating-custom-strategies" class="w-headline-link">#</a>

Although it's not required, it's strongly recommended that when interacting with the network or cache, you use the instance of the [`StrategyHandler` class](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.StrategyHandler) that's passed to your `_handle()` method. It's the second parameter, called `handler` in the example code.

This `StrategyHandler` instance will automatically pick up the cache name you've configured for the strategy, and calling its methods will invoke the expected plugin lifecycle callbacks that we'll describe soon.

A `StrategyHandler` instance supports the following methods:

<table><thead><tr class="header"><th>Method</th><th>Purpose</th></tr></thead><tbody><tr class="odd"><td><code>fetch</code></td><td>Calls <code>fetch()</code>, invokes lifecycle events.</td></tr><tr class="even"><td><code>cachePut</code></td><td>Calls <code>cache.put()</code> on the configured cache, invokes lifecycle events.</td></tr><tr class="odd"><td><code>cacheMatch</code></td><td>Calls <code>cache.match()</code> on the configured cache, invokes lifecycle events.</td></tr><tr class="even"><td><code>fetchAndCachePut</code></td><td>Calls <code>fetch()</code> and then <code>cache.put()</code> on the configured cache, invokes lifecycle events.</td></tr></tbody></table>

### Drop-in support for routing <a href="#drop-in-support-for-routing" class="w-headline-link">#</a>

Writing a Workbox strategy class is a great way to package up response logic in a reusable, and shareable, form. But once you've written one, how do you use it within your larger Workbox service worker? That's the best part—you can drop any of these strategies directly into your existing Workbox [routing rules](https://developers.google.com/web/tools/workbox/guides/route-requests), just like any of the "official" strategies.

    // See https://developers.google.com/web/tools/workbox/guides/using-bundlers
    import {ExpirationPlugin} from 'workbox-expiration';
    import {registerRoute} from 'workbox-routing';

    // DedupeNetworkFirst can be defined inline, or imported.

    registerRoute(
      ({url}) => url.pathname.startsWith('/api'),
      // DedupeNetworkFirst supports the standard strategy
      // configuration options, like cacheName and plugins.
      new DedupeNetworkFirst({
        cacheName: 'my-cache',
        plugins: [
          new ExpirationPlugin({...}),
        ]
      })
    );

A properly written strategy should automatically work with all plugins as well. This applies to the standard plugins that Workbox provides, like the one that handles [cache expiration](https://developers.google.com/web/tools/workbox/modules/workbox-expiration). But you're not limited to using the standard set of plugins! Another great way to extend Workbox is to write your own reusable plugins.

## Custom plugins <a href="#custom-plugins" class="w-headline-link">#</a>

Taking a step back, what is a Workbox plugin, and why would you write your own? A plugin doesn't fundamentally change the order of network and cache operations performed by a strategy. Instead, it allows you to add in extra code that will be run at critical points in the lifetime of a request, like when a network request fails, or when a cached response is about to be returned to the page.

### Lifecycle event overview <a href="#lifecycle-event-overview" class="w-headline-link">#</a>

Here's an overview of all the events that a plugin could listen to. Technical details about implementing callbacks for these events is in the [Workbox documentation](https://developers.google.com/web/tools/workbox/guides/using-plugins).

<table><thead><tr class="header"><th>Lifecycle Event</th><th>Purpose</th></tr></thead><tbody><tr class="odd"><td><code>cacheWillUpdate</code></td><td>Change response before it's written to cache.</td></tr><tr class="even"><td><code>cacheDidUpdate</code></td><td>Do something following a cache write.</td></tr><tr class="odd"><td><code>cacheKeyWillBeUsed</code></td><td>Override the cache key used for reads or writes.</td></tr><tr class="even"><td><code>cachedResponseWillBeUsed</code></td><td>Change response read from cache before it's used.</td></tr><tr class="odd"><td><code>requestWillFetch</code></td><td>Change request before it's sent to the network.</td></tr><tr class="even"><td><code>fetchDidFail</code></td><td>Do something when a network request fails.</td></tr><tr class="odd"><td><code>fetchDidSucceed</code></td><td>Do something when a network request succeeds.</td></tr><tr class="even"><td><code>handlerWillStart</code></td><td>Take note of when a handler starts up.</td></tr><tr class="odd"><td><code>handlerWillRespond</code></td><td>Take note of when a handler is about to respond.</td></tr><tr class="even"><td><code>handlerDidRespond</code></td><td>Take note of when a handler finishes responding.</td></tr><tr class="odd"><td><code>handlerDidComplete</code></td><td>Take note of when a handler has run all its code.</td></tr><tr class="even"><td><code>handlerDidError</code></td><td>Provide a fallback response if a handler throws an error.</td></tr></tbody></table>

When writing your own plugin, you'll only implement callbacks for the limited number of events that match your purpose—there's no need to add in callbacks for _all_ of the possible events. Additionally, it's up to you whether you implement your plugin as an `Object` with properties that match the lifecycle event names, or as a class that exposes methods with those names.

### Lifecycle events example: FallbackOnErrorPlugin <a href="#lifecycle-events-example:-fallbackonerrorplugin" class="w-headline-link">#</a>

For instance, here's a custom plugin class that implements callback methods for two events: `fetchDidSucceed`, and `handlerDidError`.

    class FallbackOnErrorPlugin {
      constructor(fallbackURL) {
        // Pass in a URL that you know is cached.
        this.fallbackURL = fallbackURL;
      }

      fetchDidSucceed({response}) {
        // If the network request returned a 2xx response,
        // just use it as-is.
        if (response.ok) {
          return response;
        };

        // Otherwise, throw an error to trigger handlerDidError.
        throw new Error(`Error response (${response.status})`);
      }

      // Invoked whenever the strategy throws an error during handling.
      handlerDidError() {
        // This will match the cached URL regardless of whether
        // there's any query parameters, i.e. those added
        // by Workbox precaching.
        return caches.match(this.fallbackURL, {
          ignoreSearch: true,
        });
      }
    }

This plugin class provides a "fallback" whenever a strategy would otherwise generate an error response. It can be added to any strategy class, and if running that strategy does not result in a `2xx OK` response, it will use a backup response from the cache instead.

## Custom strategy or custom plugin? <a href="#custom-strategy-or-custom-plugin" class="w-headline-link">#</a>

Now that you know more about custom strategies and plugins, you might be wondering which one to write for a given use case.

A good rule of thumb is to sketch out a diagram of your desired request and response flow, taking into account the network and cache interactions. Then, compare that to the [diagrams](https://developers.google.com/web/tools/workbox/modules/workbox-strategies) of the built-in strategies. If your diagram has a set of connections then that's fundamentally different, that's a sign that a custom strategy is the best solution.

Conversely, if your diagram ends up looking mostly like a standard strategy but with a few extra pieces of logic injected at keys points, then you should probably write a custom plugin.

## Takeaways <a href="#takeaways" class="w-headline-link">#</a>

Whichever approach to customizing Workbox you go with, I hope this article has inspired you write your own strategies and plugins, and then release them on [npm](https://www.npmjs.com/), tagged with `workbox-strategy` or `workbox-plugin`.

Using those tags, you can search npm for [strategies](https://www.npmjs.com/search?q=workbox-strategy) and [plugins](https://www.npmjs.com/search?q=workbox-plugin) that have already been released.

Go out there and extend Workbox, and then share what you build!

<a href="/tags/service-worker/" class="w-chip">Service Worker</a> <a href="/tags/offline/" class="w-chip">Offline</a> <a href="/tags/network/" class="w-chip">Network</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Dec 10, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/extending-workbox/index.md)

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
