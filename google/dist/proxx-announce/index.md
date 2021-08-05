<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format" alt="a logo image of PROXX." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/cQAxElnaPyIPqlB9wkrb.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#introducing-proxx" class="w-toc__header--link">Introducing PROXX</a>

- [Our baseline](#our-baseline)
- [Web Workers](#web-workers)
- [Build time pre-render](#build-time-pre-render)
- [Canvas for animation, (invisible) DOM For accessibility](<#canvas-for-animation-(invisible)-dom-for-accessibility>)
- [Rollup for bundling and code splitting](#rollup-for-bundling-and-code-splitting)
- [Supporting feature phones](#supporting-feature-phones)
- [What's next](#what's-next)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Introducing PROXX

A game of proximity, inspired by minesweeper.

May 9, 2019

[<img src="https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Mariko Kosaka" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kosamari/)

<a href="/authors/kosamari/" class="w-author__name-link">Mariko Kosaka</a>

- <a href="https://twitter.com/kosamari" class="w-author__link">Twitter</a>
- <a href="https://github.com/kosamari" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@kosamari" class="w-author__link">Glitch</a>
- <a href="https://kosamari.com/" class="w-author__link">Blog</a>

The team that brought you [squoosh.app](https://squoosh.app) is back! This time, we built a web-based game called PROXX ([proxx.app](https://proxx.app)). PROXX is a game of proximity inspired by the legendary game Minesweeper. The game is situated in the space and your job is to find out where the black holes are. It works on all kinds of devices—from desktop all the way to feature phones. Users can play the game using a mouse, keyboard, d-pad even with a screen reader.

PROXX on a feature phone.

## Our baseline <a href="#our-baseline" class="w-headline-link">#</a>

Before building this game, we set the following goals and budgets for the application:

- **Same core experience**: all devices must function the same way
- **Accessible**: mouse, keyboard, touch, d-pad, screen readers
- **Performant**:
  - Less than 25kb of initial payload
  - Less than 5 seconds TTI ([time to interactive](/interactive)) on slow 3G
  - Consistent 60fps animation

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format" alt="PROXX on a pixelbook." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ka9f7OrsFGjsulY1QoYe.jpg?auto=format&amp;w=1600 1600w" width="800" height="445" /><figcaption>PROXX on a pixelbook.</figcaption></figure>Web Workers <a href="#web-workers" class="w-headline-link">#</a>

The game consists of 4 main entities, the core game logic, the UI service, the state service, and the animation graphics. Since we knew from the get-go we would have to run heavily animated graphics on the main thread, we moved the game logic and state service to a web worker in order to keep the main thread as free as possible.

## Build time pre-render <a href="#build-time-pre-render" class="w-headline-link">#</a>

Our UI is built with [Preact](https://preactjs.com/), as it allows us to hit our aggressive target for an initial payload that is less than 25kb. In order to give a good initial loading experience, we decided to pre-render our 1st view. We prerender at build time using [Puppeteer](https://pptr.dev/) to access the top page and let preact populate the DOM. The resulting DOM is then serialized to HTML and saved as index.html

## Canvas for animation, (invisible) DOM For accessibility <a href="#canvas-for-animation-(invisible)-dom-for-accessibility" class="w-headline-link">#</a>

We render the game graphics in a canvas using [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API). One canvas is responsible for the background animation and another one canvas for the game grid on top. We also have an HTML table with buttons for accessibility reasons, that is on top of both of these canvases, but is made invisible (opacity: 0). Even though what you see is a canvas rendering of the game state, the player is interacting with the invisible DOM table, giving us the ability to attach event listeners and rely on the browser's focus management.

By keeping the DOM element in the canvas, we are able to tap into browsers built-in accessibility features. For example: by setting `role="grid"` on our game table, screen readers can announce the row and column of the focused cell without us having to implement that.

## Rollup for bundling and code splitting <a href="#rollup-for-bundling-and-code-splitting" class="w-headline-link">#</a>

Our total size for the app comes down to 100KB gzipped. Out of that, 20KB is for the initial payload (index.html). We use [Rollup.js](https://rollupjs.org) for this project. We have shared dependencies between the main thread and our web worker, and Rollup can put these shared dependencies in a separate chunk that only needs to be loaded once. Other bundlers like webpack duplicate the shared dependencies which results in double-loading.

## Supporting feature phones <a href="#supporting-feature-phones" class="w-headline-link">#</a>

Smart feature phones such as [KaiOS](https://www.kaiostech.com/) phones are rapidly gaining popularity. These are very resource constrained devices, but our approach of using web workers whenever we can allowed us to make the experience highly responsive on these phones as well. Since feature phones come with different input interface (d-pad and number keys, no touchscreen), we also implemented key-based interface.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format" alt="PROXX on a feature phone." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zk0lWvjbZ0V2Shz53d42.jpg?auto=format&amp;w=1600 1600w" width="800" height="512" /><figcaption>PROXX on a feature phone.</figcaption></figure>What's next <a href="#what&#39;s-next" class="w-headline-link">#</a>

We had great but busy time building this game in time for Google I/O 2019, so we will take some well-deserved time off to rest, but plan to come back with more in-depth documentation on each of these areas of the game.

Until then, please check the talk Mariko gave at I/O on this project.

You can browse the code at [the proxx github repo](https://github.com/GoogleChromeLabs/proxx).

Cheers! Surma, Jake, Mariko

<a href="/tags/games/" class="w-chip">Games</a>

<span class="w-mr--sm"> Last updated: May 9, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/proxx-announce/index.md)

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
