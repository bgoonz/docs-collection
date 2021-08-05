<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format" alt="Multiple Shifting Gears." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/4bvbhJ3F0uGKvw5DLTMy.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#progressive-web-apps-in-multi-origin-sites" class="w-toc__header--link">Progressive Web Apps in multi-origin sites</a>

- [Background](#background)
- [Good and bad uses of multiple origins](#good-and-bad-uses-of-multiple-origins)
- [The good](#the-good)
- [The bad](#the-bad)
- [Challenges and Workarounds for PWAs across different origins](#challenges-and-workarounds-for-pwas-across-different-origins)
- [Service workers](#service-workers)
- [Caching](#caching)
- [Permissions](#permissions)
- [Installation](#installation)
- [Standalone Mode](#standalone-mode)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Progressive Web Apps in multi-origin sites

Challenges and workarounds for building Progressive Web Apps in multi-origin sites.

Aug 19, 2019

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Demian Renzulli" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/demianrenzulli/)

<a href="/authors/demianrenzulli/" class="w-author__name-link">Demian Renzulli</a>

- <a href="https://twitter.com/drenzulli" class="w-author__link">Twitter</a>
- <a href="https://github.com/demianrenzulli" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@demianrenzulli" class="w-author__link">Glitch</a>

## Background <a href="#background" class="w-headline-link">#</a>

In the past, there were some advantages to using multi-origin architectures, but for Progressive Web Apps, that approach presents many challenges. In particular, the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), imposes restrictions for sharing things like service workers and caches, permissions, and for achieving a standalone experience across multiple origins. This article will describe the good and bad uses of multiple origins, and explain the challenges and workarounds for building Progressive Web Apps in multi-origin sites.

## Good and bad uses of multiple origins <a href="#good-and-bad-uses-of-multiple-origins" class="w-headline-link">#</a>

There are a few legitimate reasons for sites to employ a multi-origin architecture, mostly related to providing an independent set of web applications, or to create experiences that are completely isolated from each other. There are also uses that should be avoided.

### The good <a href="#the-good" class="w-headline-link">#</a>

Let's look at the useful reasons first:

- **Localization / Language:** Using a [country-code top-level domain](https://developer.mozilla.org/en-US/docs/Glossary/TLD), to separate sites to be served in different countries (e.g. `https://www.google.com.ar`), or using subdomains to divide sites targeted to different locations (e.g.: `https://newyork.craigslist.org`) or to offer content for a specific language (e.g. `https://en.wikipedia.org`).

- **Independent webapps:** Using different subdomains to provide experiences whose purpose differs considerably from the site on the main origin. For example, in a news site, the crosswords webapp could be intentionally served from `https://crosswords.example.com`, and installed and used as an independent PWA, without having to share any resources or functionality with the main website.

### The bad <a href="#the-bad" class="w-headline-link">#</a>

If you're not doing any of these things, it's likely that using a multi-origin architecture will be a disadvantage when building Progressive Web Apps.

Despite this, many sites continue being structured this way for no particular reason, or for 'legacy' reasons. One example is using subdomains to arbitrarily separate parts of a site that should be part of a unified experience.

The following patterns, for example, are highly discouraged:

- **Site sections:** Separating different sections of a site on subdomains. In news sites, it's not uncommon to see the home page at: `https://www.example.com`, while the sports section lives at `https://sports.example.com`, politics at `https://politics.example.com`, and so forth. In the case of an e-commerce site, using something like `https://category.example.com` for product categories, `https://product.example.com` for product pages, etc.

- **User Flow:** Another approach that's discouraged is to separate different smaller parts of the site, like pages for the login or purchase flows in subdomains. For example, using `https://login.example.com`, and `https://checkout.example.com`.

When building a site from scratch it's highly recommended to avoid dividing it into subdomains. For existing sites, migrating to a single origin is the best approach.

For those cases where migrating to a single origin is not possible, what follows is a list of challenges, and (where possible), workarounds that can be considered when building Progressive Web Apps.

## Challenges and Workarounds for PWAs across different origins <a href="#challenges-and-workarounds-for-pwas-across-different-origins" class="w-headline-link">#</a>

When building a website on multiple origins, providing a unified PWA experience is challenging, mostly because of the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), which imposes a number of constraints. Let's look at them one at a time.

### Service workers <a href="#service-workers" class="w-headline-link">#</a>

The origin of the service worker script URL has to be the same as the origin of the page calling [register()](https://w3c.github.io/ServiceWorker/#navigator-service-worker-register). This means that, for example, a page at `https://www.example.com` can't call `register()` with a service worker url at `https://section.example.com`.

Another consideration is that a service worker can only control pages hosted under the origin and path it belongs to. This means that, if the service worker is hosted at `https://www.example.com` it can only control URLs from that origin (according to the path defined in the [scope parameter](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameters)), but won't control any page in other subdomains such as, for example, those in `https://section.example.com`.

In this case, the only workaround is to use multiple service workers (one per origin).

**Caution**: Registering, and having multiple active service workers consumes additional resources (memory, CPU, etc.), so use your best judgement on how many active service workers a user will likely need to navigate across the site.

### Caching <a href="#caching" class="w-headline-link">#</a>

The Cache object, indexedDB, and localStorage are also constrained to a single origin. This means it's not possible to access the caches that belong to `https://www.example.com`, from, for example: `https://www.section.example.com`.

Here are some things you can do to manage caches properly in scenarios like this:

- **Leverage browser caching:** Using [traditional browser caching best practices](https://webkit.org/blog/8090/workers-at-your-service/) is always recommended. This technique provides the added benefit of reusing cached resources across origins, which can't be done with the service worker's cache. For best practices on how to use HTTP Cache with service workers, you can take a look at [this post](https://jakearchibald.com/2016/caching-best-practices/#the-service-worker-the-http-cache-play-well-together-dont-make-them-fight).

- **Keep service worker installation lightweight:** If you are maintaining multiple service workers, avoid making users pay a big installation cost every time they navigate to a new origin. In other words: only pre-cache resources that are absolutely necessary.

**Gotchas!**

Once the service worker is active and running, the same-origin policy also restricts cross-origin requests made **_inside_** service workers. Fortunately this has a recommended workaround, which is to use [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (as explained [here](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api#cross-origin_requests)). Using the [no-cors mode](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) when fetching resources inside the service worker is not recommended.

### Permissions <a href="#permissions" class="w-headline-link">#</a>

Permissions are also scoped to origins. This means that if a user granted a given permission to the origin `https://section.example.com`, it won't carry over to other origins, like `https://www.example.com`.

Since there's no way to share permissions across origins, the only solution here is to ask for permission on each of subdomain where a given feature is required (e.g. location). For things like web push, you can maintain a cookie to track if the permission has been accepted by the user in another subdomain, to avoid requesting it again.

### Installation <a href="#installation" class="w-headline-link">#</a>

To install a PWA, each origin must have its own manifest with a `start_url` that's [relative to itself](https://w3c.github.io/manifest/#start_url-member). This means that a user receiving the installation prompt on a given origin (i.e: `https://section.example.com`) won't be able to install the PWA with a `start_url` on a different one (i.e: `https://www.example.com`). In other words, users receiving the installation prompt in a subdomain will only be able to install PWAs for the subpages, not for the main URL of the app.

There's also the issue that the same user could receive multiple installation prompts when navigating the site, if each subdomain meets the [installation criteria](https://developers.google.com/web/fundamentals/app-install-banners/#criteria), and prompts the user to install the PWA.

To mitigate this problem you can make sure that the prompt is shown only on the main origin. When a user visits a subdomain that passes the installation criteria:

1.  [Listen for `beforeinstallprompt` event](https://developers.google.com/web/fundamentals/app-install-banners/#listen_for_beforeinstallprompt).
2.  [Prevent the prompt from appearing](https://developers.google.com/web/fundamentals/app-install-banners/#preventing_the_mini-infobar_from_appearing), calling `event.preventDefault()`.

That way, you make sure the prompt is not shown in unintended parts of the site, while you can continue showing it, for example, in the main origin (e.g. Home page).

### Standalone Mode <a href="#standalone-mode" class="w-headline-link">#</a>

While navigating in a standalone window, the browser will behave differently when the user moves outside of the scope set by the PWA's manifest. The behavior depends on each browser version and vendor. For example, the latest Chrome versions open a [Chrome Custom Tab](https://developer.chrome.com/multidevice/android/customtabs), when a user moves out of the scope in standalone mode.

In most cases, there's no solution for this, but a workaround can be applied for small parts of the experience that are hosted in subdomains (for example: login workflows):

1.  The new URL, `https://login.example.com`, could open inside a full screen iframe.
2.  Once the task is completed inside the iframe (for example, the login process), [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) can be used, to pass any resulting information from the iframe back to the parent page.
3.  As a final step, once the message is received by the main page, the listeners can be unregistered, and the iframe finally be removed from the DOM.

**Caution**: The previous technique can help mitigating the potential UI change in a small part of the site, where the user can perform an action in a subdomain and return to the main origin (like in a login flow), but won't be an efficient technique to implement for entire paths, including many pages hosted in subdomains (like entire site sections).

In the context of [Trusted Web Actitivies](https://developers.google.com/web/updates/2019/02/using-twa), there's a recommended way of avoiding this issue, by [validating all origins using Digital Asset Links](https://developers.google.com/web/updates/2020/01/twa-multi-origin).

### Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Same-origin policy imposes many restrictions for sites built on top of multiple origins that want to achieve a coherent PWA experience. For that reason, to provide the best experience to users, we strongly recommend against dividing sites into different origins.

For existing sites that are already built in this way, it can be challenging to make multi-origin PWAs work correctly, but we have explored some potential workarounds. Each can come with tradeoffs, so use your judgement when deciding which approach to take on your website.

When evaluating a long-term strategy or site redesign, consider migrating to a single origin, unless there's an important reason to keep the multi-origin architecture.

_With many thanks for their technical reviews and suggestions: Penny Mclachlan, Paul Covell, Dominick Ng, Alberto Medina, Pete LePage, Joe Medley, Cheney Tsai, Martin Schierle, and Andre Bandarra._

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a>

<span class="w-mr--sm"> Last updated: Aug 19, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/multi-origin-pwas/index.md)

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
