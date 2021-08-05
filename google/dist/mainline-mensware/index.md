<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Yz5G0leLpdHLidygym31.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#mainline-menswear-implements-pwa-and-sees-a-55percent-conversion-rate-uplift" class="w-toc__header--link">Mainline Menswear implements PWA and sees a 55% conversion rate uplift</a>

- [Challenge](#challenge)
- [Solution](#solution)
- [Results](#results)
- [Technical deep dive](#technical-deep-dive)
- [Generating a service worker file](#generating-a-service-worker-file)
- [Anatomy of the web app manifest](#anatomy-of-the-web-app-manifest)
- [Runtime caching for faster navigations](#runtime-caching-for-faster-navigations)
- [Providing offline functionality](#providing-offline-functionality)
- [Demo](#demo)
- [Reporting successful installs](#reporting-successful-installs)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Mainline Menswear implements PWA and sees a 55% conversion rate uplift

Apr 20, 2021 <span class="w-author__separator">•</span> Updated May 19, 2021

[<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/RDHNBibB1P7yeOIrw0JX.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Charis Theodoulou" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/RDHNBibB1P7yeOIrw0JX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/RDHNBibB1P7yeOIrw0JX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/RDHNBibB1P7yeOIrw0JX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/RDHNBibB1P7yeOIrw0JX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/RDHNBibB1P7yeOIrw0JX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/charistheodoulou/)

<a href="/authors/charistheodoulou/" class="w-author__name-link">Charis Theodoulou</a>

- <a href="https://twitter.com/charistheo_dev" class="w-author__link">Twitter</a>
- <a href="https://www.charistheo.io/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ccGMk9IszZxs7LbBum7s.png?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Natasha Kosoglov" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ccGMk9IszZxs7LbBum7s.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ccGMk9IszZxs7LbBum7s.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ccGMk9IszZxs7LbBum7s.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ccGMk9IszZxs7LbBum7s.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ccGMk9IszZxs7LbBum7s.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/natashakosoglov/)

<a href="/authors/natashakosoglov/" class="w-author__name-link">Natasha Kosoglov</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Mainline is an online clothing retailer that offers the biggest designer brand names in fashion. The UK-based company entrusts its team of in-house experts, blended strategically with key partners, to provide a frictionless shopping experience for all. With market presence in over 100 countries via seven custom-built territorial websites and an app, Mainline will continue to ensure the ecommerce offering is rivalling the competition.

## Challenge <a href="#challenge" class="w-headline-link">#</a>

Mainline Menswear's goal was to complement the current mobile optimized website with progressive features that would adhere to their 'mobile first' vision, focusing on mobile-friendly design and functionality with a growing smartphone market in mind.

## Solution <a href="#solution" class="w-headline-link">#</a>

The objective was to build and launch a PWA that complemented the original mobile friendly version of the Mainline Menswear website, and then compare the stats to their hybrid mobile app, which is currently available on Android and iOS.

Once the app launched and was being used by a small section of Mainline Menswear users, they were able to determine the difference in key stats between PWA, app, and Web.

The approach Mainline took when converting their website to a PWA was to make sure that the framework they selected for their website (Nuxt.js, utilizing Vue.js) would be future-proof and enable them to take advantage of fast moving web technology.

## Results <a href="#results" class="w-headline-link">#</a>

139<sub>%</sub>

More pages per session in PWA vs. web.

161<sub>%</sub>

Longer session durations in PWA vs. web.

10<sub>%</sub>

Lower bounce rate in PWA vs. web

12.5<sub>%</sub>

Higher average order value in PWA vs. web

55<sub>%</sub>

Higher conversion rate in PWA vs. web.

243<sub>%</sub>

Higher revenue per session in PWA vs. web.

## Technical deep dive <a href="#technical-deep-dive" class="w-headline-link">#</a>

[Mainline Menswear](https://www.mainlinemenswear.co.uk/) is using the [Nuxt.js framework](https://nuxtjs.org/) to bundle and render their site, which is a single page application (SPA).

### Generating a service worker file <a href="#generating-a-service-worker-file" class="w-headline-link">#</a>

For generating the service worker, Mainline Menswear added configuration through a custom implementation of the [`nuxt/pwa` Workbox module](https://pwa.nuxtjs.org/workbox).

The reason they forked the `nuxt/pwa` module was to allow the team to add more customizations to the service worker file that they weren't able to or had issues with when using the standard version. One such optimization was around the [offline functionality](#providing-offline-functionality) of the site like, for example, serving a default offline page and gathering analytics while offline.

### Anatomy of the web app manifest <a href="#anatomy-of-the-web-app-manifest" class="w-headline-link">#</a>

The team generated a manifest with icons for different mobile app icon sizes and other web app details like `name`, `description` and `theme_color`:

    {
      "name": "Mainline Menswear",
      "short_name": "MMW",
      "description": "Shop mens designer clothes with Mainline Menswear. Famous brands including Hugo Boss, Adidas, and Emporio Armani.",
      "icons": [
        {
          "src": "/_nuxt/icons/icon_512.c2336e.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "theme_color": "#107cbb"
    }

The web app, once installed, can be launched from the home screen without the browser getting in the way. This is achieved by adding the `display` parameter in the web app manifest file:

    {
      "display": "standalone"
    }

Last but not the least, the company is now able to easily track how many users are visiting their web app from the home screen by simply appending a `utm_source` parameter in the `start_url` field of the manifest:

    {
      "start_url": "/?utm_source=pwa"
    }

See [Add a web app manifest](/add-manifest/) for a more in-depth explanation of all the web app manifest fields.

### Runtime caching for faster navigations <a href="#runtime-caching-for-faster-navigations" class="w-headline-link">#</a>

Caching for web apps is a must for page speed optimization and for providing a better user experience for returning users.

For caching on the web, there are quite a few [different approaches](https://dev.to/jonchen/service-worker-caching-and-http-caching-p82). The team is using a mix of the [HTTP cache](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) and the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) for caching assets on the client side.

The Cache API gives Mainline Menswear finer control over the cached assets, allowing them to apply complex strategies to each file type. While all this sounds complicated and hard to set up and maintain, [Workbox](https://developers.google.com/web/tools/workbox) provides them with an easy way of declaring such complex strategies and eases the pain of maintenance.

#### Caching CSS and JS <a href="#caching-css-and-js" class="w-headline-link">#</a>

For CSS and JS files, the team chose to cache them and serve them over the cache using the [`StaleWhileRevalidate`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.StaleWhileRevalidate) Workbox strategy. This strategy allows them to serve all Nuxt CSS and JS files fast, which significantly increases their site's performance. At the same time, the files are being updated in the background to the latest version for the next visit:

    /* sw.js */
    workbox.routing.registerRoute(
      /\/_nuxt\/.*(?:js|css)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css_js',
      }),
      'GET',
    );

#### Caching Google fonts <a href="#caching-google-fonts" class="w-headline-link">#</a>

The strategy for caching Google Fonts depends on two file types:

- The stylesheet that contains the `@font-face` declarations.
- The underlying font files (requested within the stylesheet mentioned above).

<!-- -->

    // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
    workbox.routing.registerRoute(
      /https:\/\/fonts\.googleapis\.com\/*/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google_fonts_stylesheets',
      }),
      'GET',
    );

    // Cache the underlying font files with a cache-first strategy for 1 year.
    workbox.routing.registerRoute(
      /https:\/\/fonts\.gstatic\.com\/*/,
      new workbox.strategies.CacheFirst({
        cacheName: 'google_fonts_webfonts',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            maxEntries: 30,
          }),
        ],
      }),
      'GET',
    );

A full example of the common Google Fonts strategy can be found in the [Workbox Docs](https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts).

#### Caching images <a href="#caching-images" class="w-headline-link">#</a>

For images, Mainline Menswear decided to go with two strategies. The first strategy applies to all images coming from their CDN, which are usually product images. Their pages are image-heavy so they are conscious of not taking too much of their users' device storage. So through Workbox, they added a strategy that is **caching images coming only from their CDN** with a **maximum of 60 images** using the [`ExpirationPlugin`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-expiration.ExpirationPlugin).

The 61st (newest) image requested, replaces the 1st (oldest) image so that no more than 60 product images are cached at any point in time.

    workbox.routing.registerRoute(
      ({ url, request }) =>
        url.origin === 'https://mainline-menswear-res.cloudinary.com' &&
        request.destination === 'image',
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'product_images',
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            // Only cache 60 images.
            maxEntries: 60,
            purgeOnQuotaError: true,
          }),
        ],
      }),
    );

The second image strategy handles the rest of the images being requested by the origin. These images tend to be very few and small across the whole origin, but to be on the safe side, the number of these cached images is also limited to 60.

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            // Only cache 60 images.
            maxEntries: 60,
            purgeOnQuotaError: true,
          }),
        ],
      }),
    );

**Objective**: Even though the caching strategy is exactly the same as the previous one, by splitting images into two caches (`product_images` and `images`), it allows for more flexible updates to the strategies or caches.

### Providing offline functionality <a href="#providing-offline-functionality" class="w-headline-link">#</a>

The offline page is precached right after the service worker is installed and activated. They do this by creating a list of all offline dependencies: the offline HTML file and an offline SVG icon.

    const OFFLINE_HTML = '/offline/offline.html';
    const PRECACHE = [
      { url: OFFLINE_HTML, revision: '70f044fda3e9647a98f084763ae2c32a' },
      { url: '/offline/offline.svg', revision: 'efe016c546d7ba9f20aefc0afa9fc74a' },
    ];

The precache list is then fed into Workbox which takes care of all the heavy lifting of adding the URLs to the cache, checking for any revision mismatch, updating, and serving the precached files with a `CacheFirst` strategy.

    workbox.precaching.precacheAndRoute(PRECACHE);

#### Handling offline navigations <a href="#handling-offline-navigations" class="w-headline-link">#</a>

Once the service worker activates and the offline page is precached, it is then used to **respond to offline navigation requests by the user**. While Mainline Menswear's web app is an SPA, the offline page shows only after the page reloads, the user closes and reopens the browser tab, or when the web app is launched from the home screen while offline.

To achieve this, Mainline Menswear provided a fallback to failed [`NavigationRoute`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing.NavigationRoute) requests with the precached offline page:

    const htmlHandler = new workbox.strategies.NetworkOnly();
    const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
        const request = event.request;
        // A NavigationRoute matches navigation requests in the browser, i.e. requests for HTML
        return htmlHandler.handle({ event, request }).catch(() => caches.match(OFFLINE_HTML, {
            ignoreSearch: true
        }));
    });
    workbox.routing.registerRoute(navigationRoute);

## Demo <a href="#demo" class="w-headline-link">#</a>

Offline page example as seen on www.mainlinemenswear.co.uk.

### Reporting successful installs <a href="#reporting-successful-installs" class="w-headline-link">#</a>

Apart from the home screen launch tracking (with `"start_url": "/?utm_source=pwa"` in the web application manifest), the web app also reports successful app installs by listening to the `appinstalled` event on `window`:

    window.addEventListener('appinstalled', (evt) => {
      ga('send', 'event', 'Install', 'Success');
    });

> Adding PWA capabilities to your website will further enhance your customers experience of shopping with you, and will be quicker to market than a \[platform-specific\] app. Andy Hoyle, Head of Development

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

To learn more about progressive web apps and how to build them, head to the [Progressive Web Apps section](/progressive-web-apps/) on web.dev.

To read more Progressive Web Apps case studies, browse to the [case studies section](https://web.dev/tags/case-study/).

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: May 19, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/mainline-mensware/index.md)

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
