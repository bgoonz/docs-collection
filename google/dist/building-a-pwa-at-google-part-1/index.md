<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format" alt="A group of people working on their computers at a table." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/mgB3j6NZa6F1CkoD9YI4.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#building-a-pwa-at-google-part-1" class="w-toc__header--link">Building a PWA at Google, part 1</a>

- [Background](#background)
- [Why we chose to build a PWA](#why-pwa)
- [Our framework](#framework)
- [What we learned about service workers](#lessons-learned)
- [Generate it if you can](#generate)
- [Not all libraries are service-worker-compatible](#libraries)
- [Avoid accessing IndexedDB during initialization](#idb)
- [Make it resilient](#resilient)
- [Don't depend on global state](#global-state)
- [Local development](#local-development)
- [Lighthouse](#lighthouse)
- [Embrace continuous delivery](#continuous-delivery)
- [Getting cookie values in a service worker](#cookies)
- [Pitfalls for non-generated service workers](#pitfalls)
- [Ensure service worker script changes if any static cached file changes](#regeneration)
- [Unit testing](#unit-testing)
- [Stay tuned for parts 2 and 3](#stay-tuned)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building a PWA at Google, part 1

What the Bulletin team learned about service workers while developing a PWA.

Jul 29, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/ecKzFuXSShBZ0BOyQmgS.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joel Riley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ecKzFuXSShBZ0BOyQmgS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ecKzFuXSShBZ0BOyQmgS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ecKzFuXSShBZ0BOyQmgS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ecKzFuXSShBZ0BOyQmgS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ecKzFuXSShBZ0BOyQmgS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joelriley/)

<a href="/authors/joelriley/" class="w-author__name-link">Joel Riley</a>

- <a href="https://twitter.com/j0000el" class="w-author__link">Twitter</a>
- <a href="https://github.com/j0000el" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/32FlxFjSQeesv2IgBva4.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Douglas Parker" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/32FlxFjSQeesv2IgBva4.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/32FlxFjSQeesv2IgBva4.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/32FlxFjSQeesv2IgBva4.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/32FlxFjSQeesv2IgBva4.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/32FlxFjSQeesv2IgBva4.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/douglasparker/)

<a href="/authors/douglasparker/" class="w-author__name-link">Douglas Parker</a>

- <a href="https://twitter.com/develwoutacause" class="w-author__link">Twitter</a>
- <a href="https://github.com/dgp1130" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Dikla Cohen" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/msdikla/)

<a href="/authors/msdikla/" class="w-author__name-link">Dikla Cohen</a>

- <a href="https://twitter.com/diklla" class="w-author__link">Twitter</a>
- <a href="https://github.com/diklla" class="w-author__link">GitHub</a>

This is the first of a series of blog posts about the lessons that the Google Bulletin team learned while building an external-facing PWA. In these posts we'll share some of the challenges we faced, the approaches we took to overcome them, and general advice for avoiding pitfalls. This is by no means a complete overview of PWAs. The aim is to share learnings from our team's experience.

For this first post we'll cover a little background information first and then dive into all the stuff we learned about service workers.

Bulletin was shut down in 2019 due to lack of product/market fit. We still learned a lot about PWAs along the way!

## Background <a href="#background" class="w-headline-link">#</a>

Bulletin was in active development from mid-2017 to mid-2019.

### Why we chose to build a PWA <a href="#why-pwa" class="w-headline-link">#</a>

Before we delve into the development process, let's examine why building a PWA was an attractive option for this project:

- **Ability to iterate quickly**. Especially valuable since Bulletin would be piloted in multiple markets.
- **Single code base**. Our users were roughly evenly split between Android and iOS. A PWA meant we could build a single web app that would work on both platforms. This increased the velocity and impact of the team.
- **Updated quickly and independent of user behavior**. PWAs can automatically update which reduces the amount of out-of-date clients in the wild. We were able to push out breaking backend changes with a very short amount of migration time for clients.
- **Easily integrated with first- and third-party apps.** Such integrations were a requirement for the app. With a PWA it often meant simply opening a URL.
- **Removed the friction of installing an app.**

### Our framework <a href="#framework" class="w-headline-link">#</a>

For Bulletin, we used [Polymer](https://www.polymer-project.org/), but any modern, well-supported framework will work.

## What we learned about service workers <a href="#lessons-learned" class="w-headline-link">#</a>

You can't have a PWA without a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers/). Service workers give you a lot of power, such as advanced caching strategies, offline capabilities, background sync, etc. While service workers do add some complexity, we found that their benefits outweighed the added complexity.

### Generate it if you can <a href="#generate" class="w-headline-link">#</a>

Avoid writing a service worker script by hand. Writing service workers by hand requires manually managing cached resources and rewriting logic that is common to most service workers libraries, such as [Workbox](https://developers.google.com/web/tools/workbox/).

Having said that, due to our internal tech stack we could not use a library to generate and manage our service worker. Our learnings below will at times reflect that. Go to [Pitfalls for non-generated service workers](#pitfalls) to read more.

### Not all libraries are service-worker-compatible <a href="#libraries" class="w-headline-link">#</a>

Some JS libraries make assumptions that don't work as expected when run by a service worker. For instance, assuming `window` or `document` are available, or using an API not available to service workers (`XMLHttpRequest`, local storage, etc). Make sure any critical libraries you need for your application are service-worker compatible. For this particular PWA, we wanted to use [gapi.js](https://github.com/google/google-api-javascript-client) for authentication, but were unable to because it did not support service workers. Library authors should also reduce or remove unnecessary assumptions about the JavaScript context where possible to support service worker use cases, such as by avoiding service worker-incompatible APIs and [avoiding global state](#global-state).

### Avoid accessing IndexedDB during initialization <a href="#idb" class="w-headline-link">#</a>

Don't read [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) when initializing your service worker script, or else you can get into this undesired situation:

1.  User has web app with IndexedDB (IDB) version N
2.  New web app is pushed with IDB version N+1
3.  User visits PWA, which triggers download of new service worker
4.  New service worker reads from IDB before registering `install` event handler, triggering an IDB upgrade cycle to go from N to N+1
5.  Since user has old client with version N, service worker upgrade process hangs as active connections are still open to the old version of the database
6.  Service worker hangs, and never installs

In our case, the cache was invalidated on service worker install, so if the service worker never installed, users never received the updated app.

### Make it resilient <a href="#resilient" class="w-headline-link">#</a>

Though service worker scripts run in the background, they can also be terminated at any time, even when in the middle of I/O operations (network, IDB, etc). Any long-running process should be resumable at any point.

In the case of a sync process that uploaded large files to the server and saved to IDB, our solution for interrupted partial uploads was to take advantage of our internal upload library's resumable system, saving the resumable upload URL to IDB prior to uploading, and using that URL to resume an upload if it did not complete the first time around. Also before any long running I/O operation, the state was saved to IDB to indicate where in the process we were for each record.

### Don't depend on global state <a href="#global-state" class="w-headline-link">#</a>

Because service workers exist in a different context, many symbols you might expect to exist are not present. A lot of our code ran in both a `window` context, as well as a service worker context (such as logging, flags, syncing, etc.). Code needs to be defensive about the services it uses, such as local storage or cookies. You can use [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) to refer to the global object in a manner which will work across all contexts. Also use data stored in global variables sparingly, as there is no guarantee as to when the script will be terminated and the state evicted.

### Local development <a href="#local-development" class="w-headline-link">#</a>

A major component of service workers is caching resources locally. However, during development this is the exact _opposite_ of what you want, particularly when updates are done lazily. You still want the server worker installed so you can debug problems with it or work with other APIs like background sync, or notifications. On Chrome you can achieve this through Chrome DevTools by enabling the **Bypass for network** checkbox (**Application** panel &gt; **Service workers** pane) in addition to enabling the **Disable cache** checkbox in the **Network** panel in order to also disable the memory cache. In order to cover more browsers, we opted for a different solution by including a flag to disable caching in our service worker which is enabled by default on developer builds. This ensures that devs always get their most recent changes without any caching issues. It's important to include the `Cache-Control: no-cache` header as well to [prevent the browser from caching any assets](/http-cache/#unversioned-urls).

### Lighthouse <a href="#lighthouse" class="w-headline-link">#</a>

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) provides a number of debugging tools useful for PWAs. It scans a site and generates reports covering PWAs, performance, accessibility, SEO, and other best practices. We recommend [running Lighthouse on continuous integration](https://github.com/GoogleChrome/lighthouse-ci) to alert you if you break one of the criteria to be a PWA. This actually happened to us once, where the service worker wasn't installing and we didn't realize it before a production push. Having Lighthouse as part of our CI would have prevented that.

### Embrace continuous delivery <a href="#continuous-delivery" class="w-headline-link">#</a>

Because service workers can automatically update, users lack the ability to limit upgrades. This significantly reduces the amount of out-of-date clients in the wild. When the user opened our app, the service worker would serve the old client while it lazily downloaded the new client. Once the new client downloaded, it would prompt the user to refresh the page to access new features. Even if the user ignored this request, the next time they refreshed the page they would receive the new version of the client. As a result, it is quite difficult for a user to refuse updates in the same way they can for iOS/Android apps.

We were able to push out breaking backend changes with a very short amount of migration time for clients. Typically, we would give a month for users to update to newer clients before making breaking changes. Since the app would serve while stale, it was actually possible for older clients to exist in the wild if the user had not opened the app for a long time. On iOS, service workers are [evicted after a couple weeks](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/#post-10218:~:text=7%2DDay%20Cap%20on%20All%20Script%2DWriteable%20Storage) so this case does not happen. For Android, this problem could be mitigated by not serving while stale, or manually expiring the content after a few weeks. In practice, we never encountered problems from stale clients. How strict a given team wants to be here is up to their specific use case, but PWAs provide significantly more flexibility than iOS/Android apps.

### Getting cookie values in a service worker <a href="#cookies" class="w-headline-link">#</a>

Sometimes it is necessary to access cookie values in a service worker context. In our case, we needed to access cookie values to generate a token to authenticate first-party API requests. In a service worker, synchronous APIs such as `document.cookies` are not available. You can always send a message to active (windowed) clients from the service worker to request the cookie values, though it's possible for the service worker to run in the background without any windowed clients available, such as during a background sync. To work around this, we created an endpoint on our frontend server that simply echoed the cookie value back to the client. The service worker made a network request to this endpoint and read the response to get the cookie values.

With the release of the [Cookie Store API](https://developers.google.com/web/updates/2018/09/asynchronous-access-to-http-cookies), this workaround should no longer be necessary for browsers that support it, as it provides asynchronous access to browser cookies and can be used directly by the service worker.

## Pitfalls for non-generated service workers <a href="#pitfalls" class="w-headline-link">#</a>

### Ensure service worker script changes if any static cached file changes <a href="#regeneration" class="w-headline-link">#</a>

A common PWA pattern is for a service worker to install all static application files during its `install` phase, which enables clients to hit the Cache Storage API cache directly for all subsequent visits . Service workers are only installed when the browser detects that the service worker script has changed in some way, so we had to ensure the service worker script file itself changed in some way when a cached file changed. We did this manually by embedding a hash of the static resource fileset within our service worker script, so every release produced a distinct service worker JavaScript file. Service worker libraries like [Workbox](https://developers.google.com/web/tools/workbox/) automate this process for you.

### Unit testing <a href="#unit-testing" class="w-headline-link">#</a>

Service worker APIs function by adding event listeners to the global object. For example:

    self.addEventListener('fetch', (evt) => evt.respondWith(fetch('/foo')));

This can be a pain to test because you need to mock the event trigger, the event object, wait for the `respondWith()` callback, and then await the promise, before finally asserting on the result. An easier way to structure this is to delegate all implementation to another file, which is more easily tested.

    import fetchHandler from './fetch_handler.js';
    self.addEventListener('fetch', (evt) => evt.respondWith(fetchHandler(evt)));

Due to the difficulties of unit testing a service worker script, we kept the core service worker script as bare-bones as possible, splitting most of the implementation into other modules. Since those files were just standard JS modules, they could be more easily unit tested with standard test libraries.

## Stay tuned for parts 2 and 3 <a href="#stay-tuned" class="w-headline-link">#</a>

In parts 2 and 3 of this series we'll talk about media management and iOS-specific issues. If you want to ask us more about building a PWA at Google, visit our author profiles to find out how to contact us:

- [Joel](/authors/joelriley)
- [Douglas](/authors/douglasparker)
- [Dikla](/authors/msdikla)

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/storage/" class="w-chip">Storage</a> <a href="/tags/testing/" class="w-chip">Testing</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/building-a-pwa-at-google-part-1/index.md)

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
