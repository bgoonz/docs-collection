<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format" alt="A hand touching a smartphone screen" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WH0KlcJXJlxvsxU9ow2i.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#optimize-first-input-delay" class="w-toc__header--link">Optimize First Input Delay</a>

- [Heavy JavaScript execution](#heavy-javascript-execution)
- [Break up Long Tasks](#long-tasks)
- [Optimize your page for interaction readiness](#optimize-your-page-for-interaction-readiness)
- [First-party script execution can delay interaction readiness](#first-party-script-execution-can-delay-interaction-readiness)
- [Data-fetching can impact many aspects of interaction readiness](#data-fetching-can-impact-many-aspects-of-interaction-readiness)
- [Third-party script execution can delay interaction latency too](#third-party-script-execution-can-delay-interaction-latency-too)
- [Use a web worker](#use-a-web-worker)
- [Reduce JavaScript execution time](#reduce-javascript-execution)
- [Developer tools](#developer-tools)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Optimize First Input Delay

How to respond faster to user interactions.

May 5, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Houssein Djirdeh" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/houssein/)

<a href="/authors/houssein/" class="w-author__name-link">Houssein Djirdeh</a>

- <a href="https://twitter.com/hdjirdeh" class="w-author__link">Twitter</a>
- <a href="https://github.com/housseindjirdeh" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@housseindjirdeh" class="w-author__link">Glitch</a>
- <a href="https://houssein.me/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

> I clicked but nothing happened! Why can't I interact with this page? 😢

[First Contentful Paint](/fcp/) (FCP) and [Largest Contentful Paint](/lcp/) (LCP) are both metrics that measure the time it takes for content to visually render (paint) on a page. Although important, paint times do not capture _load responsiveness_: or how quickly a page responds to user interaction.

[First Input Delay](/fid/) (FID) is a [Core Web Vitals](/vitals/) metric that captures a user's first impression of a site's interactivity and responsiveness. It measures the time from when a user first interacts with a page to the time when the browser is actually able to respond to that interaction. FID is a [field metric](/user-centric-performance-metrics/#in-the-field) and cannot be simulated in a lab environment. **A real user interaction** is required in order to measure the response delay.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Se4TiXIdp8jtLJVScWed.svg" alt="Good fid values are 2.5 seconds, poor values are greater than 4.0 seconds and anything in between needs improvement" class="w-screenshot w-screenshot--filled width-full" width="384" height="96" />

To help predict FID in the [lab](/how-to-measure-speed/#lab-data-vs-field-data), we recommend [Total Blocking Time (TBT)](/tbt/). They measure different things, but improvements in TBT usually correspond to improvements in FID.

The main cause of a poor FID is **heavy JavaScript execution**. Optimizing how JavaScript parses, compiles, and executes on your web page will directly reduce FID.

## Heavy JavaScript execution <a href="#heavy-javascript-execution" class="w-headline-link">#</a>

The browser cannot respond to most user input while it's executing JavaScript on the main thread. In other words, the browser can't respond to user interactions while the main thread is busy. To improve this:

- [Break up Long Tasks](#long-tasks)
- [Optimize your page for interaction readiness](#optimize-interaction-readiness)
- [Use a web worker](#use-a-web-worker)
- [Reduce JavaScript execution time](#reduce-javascript-execution)

## Break up Long Tasks <a href="#long-tasks" class="w-headline-link">#</a>

If you've already attempted to reduce the amount of JavaScript that loads on a single page, it can be useful to break down long-running code into **smaller, asynchronous tasks**.

[**Long Tasks**](/custom-metrics/#long-tasks-api) are JavaScript execution periods where users may find your UI unresponsive. Any piece of code that blocks the main thread for 50 ms or more can be characterized as a Long Task. Long Tasks are a sign of potential JavaScript bloat (loading and executing more than a user may need right now). Splitting up long tasks can reduce input delay on your site.

<figure><img src="https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format" alt="Chrome DevTools visualizes Long Tasks in the Performance Panel" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/THLKu0sOPhSghNr0XkP1.png?auto=format&amp;w=1600 1600w" width="800" height="132" /><figcaption>Chrome DevTools <a href="https://developers.google.com/web/updates/2020/03/devtools#long-tasks">visualizes Long Tasks</a> in the Performance Panel</figcaption></figure>FID should improve noticeably as you adopt best practices like code-splitting and breaking up your Long Tasks. While TBT is not a field metric, it's useful for checking progress towards ultimately improving both Time To Interactive (TTI) and FID.

For more information, take a look at [Are long JavaScript tasks delaying your Time to Interactive?](/long-tasks-devtools/).

## Optimize your page for interaction readiness <a href="#optimize-your-page-for-interaction-readiness" class="w-headline-link">#</a>

There are a number of common causes for poor FID and TBT scores in web apps that rely heavily on JavaScript:

### First-party script execution can delay interaction readiness <a href="#first-party-script-execution-can-delay-interaction-readiness" class="w-headline-link">#</a>

- JavaScript size bloat, heavy execution times and inefficient chunking can slow down how soon a page can respond to user input and impact FID, TBT, and TTI. Progressive loading of code and features can help spread this work out and improve interaction readiness.
- Server-side rendered apps may look like they're getting pixels painted on the screen quickly, but beware of user interactions being blocked by large script executions (e.g. re-hydration to wire up event listeners). This can take several hundred milliseconds, sometimes even seconds, if route-based code splitting is being used. Consider shifting more logic server-side or generating more content statically during build time.

Below are the TBT scores before and after optimizing first-party script loading for an application. By moving costly script loading (and execution) for a non-essential component off the critical path, users were able to interact with the page much sooner.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format" alt="Improvements in TBT score in Lighthouse after optimizing the first-party script." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TEIbBnIAyfzIoQtvXvMk.png?auto=format&amp;w=1600 1600w" width="800" height="148" />

### Data-fetching can impact many aspects of interaction readiness <a href="#data-fetching-can-impact-many-aspects-of-interaction-readiness" class="w-headline-link">#</a>

- Waiting on a waterfall of cascading fetches (e.g. JavaScript and data fetches for components) can impact interaction latency. Aim to minimize a reliance on cascading data fetches.
- Large inline datastores can push out HTML parsing time and impact both paint and interaction metrics. Aim to minimize how much data needs to be post-processed on the client-side.

### Third-party script execution can delay interaction latency too <a href="#third-party-script-execution-can-delay-interaction-latency-too" class="w-headline-link">#</a>

- Many sites include third-party tags and analytics which can keep the network busy and make the main thread periodically unresponsive, impacting interaction latency. Explore on-demand loading of third-party code (e.g. maybe don't load those below-the-fold ads until they're scrolled closer to the viewport).
- In some cases, third-party scripts can pre-empt first-party ones in terms of priority and bandwidth on the main thread, also delaying how soon a page is interaction-ready. Attempt to prioritize loading what you believe offers the greatest value to users first.

## Use a web worker <a href="#use-a-web-worker" class="w-headline-link">#</a>

A blocked main thread is one of the main causes of input delay. [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker) make it possible to run JavaScript on a background thread. Moving non-UI operations to a separate worker thread can cut down main thread blocking time and consequently improve FID.

Consider using the following libraries to make it easier to use web workers on your site:

- [Comlink](https://github.com/GoogleChromeLabs/comlink): A helper library that abstracts `postMessage` and makes it easier to use
- [Workway](https://github.com/WebReflection/workway): A general purpose web worker exporter
- [Workerize](https://github.com/developit/workerize): Move a module into a web worker

To learn more about how web workers can execute code off the main thread, refer to [Use Web Workers to run JavaScript off the browser's main thread](/off-main-thread/).

### Reduce JavaScript execution time <a href="#reduce-javascript-execution" class="w-headline-link">#</a>

Limiting the amount of JavaScript on your page reduces the amount of time that the browser needs to spend executing JavaScript code. This speeds up how fast the browser can begin to respond to any user interactions.

To reduce the amount of JavaScript executed on your page:

- Defer unused JavaScript
- Minimize unused polyfills

#### Defer unused JavaScript <a href="#defer-unused-javascript" class="w-headline-link">#</a>

By default all JavaScript is render-blocking. When the browser encounters a script tag that links to an external JavaScript file, it must pause what it's doing and download, parse, compile, and execute that JavaScript. Therefore you should only load the code that's needed for the page or responding to user input.

The [Coverage](https://developers.google.com/web/tools/chrome-devtools/coverage) tab in Chrome DevTools can tell you how much JavaScript is not being used on your web page.

<img src="https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format" alt="The Coverage tab." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UNEigFiwsGu48rtXMZM4.png?auto=format&amp;w=1600 1600w" width="800" height="559" />

To cut down on unused JavaScript:

- Code-split your bundle into multiple chunks
- Defer any non-critical JavaScript, including third-party scripts, using `async` or `defer`

**Code-splitting** is the concept of splitting a single large JavaScript bundle into smaller chunks that can be conditionally loaded (also known as lazy-loading). [Most newer browsers support dynamic import syntax](https://caniuse.com/#feat=es6-module-dynamic-import), which allows for module fetching on demand:

    import('module.js').then((module) => {
      // Do something with the module.
    });

Dynamically importing JavaScript on certain user interactions (such as changing a route or displaying a modal) will make sure that code not used for the initial page load is only fetched when needed.

Aside from general browser support, dynamic import syntax can be used in many different build systems.

- If you use [webpack](https://webpack.js.org/guides/code-splitting/), [Rollup](https://medium.com/rollup/rollup-now-has-code-splitting-and-we-need-your-help-46defd901c82), or [Parcel](https://parceljs.org/code_splitting.html) as a module bundler, take advantage of their dynamic import support.
- Client-side frameworks, like [React](https://reactjs.org/docs/code-splitting.html#reactlazy), [Angular](https://angular.io/guide/lazy-loading-ngmodules), and [Vue](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components) provide abstractions to make it easier to lazy-load at the component-level.

Take a look at [Reduce JavaScript payloads with code splitting](/reduce-javascript-payloads-with-code-splitting/) to learn more about code-splitting.

Aside from code-splitting, always use [async or defer](https://javascript.info/script-async-defer) for scripts that are not necessary for critical-path or above-the-fold content.

    <script defer src="…"></script>
    <script async src="…"></script>

Unless there is a specific reason not to, all third-party scripts should be loaded with either `defer` or `async` by default.

#### Minimize unused polyfills <a href="#minimize-unused-polyfills" class="w-headline-link">#</a>

If you author your code using modern JavaScript syntax and reference modern browsers APIs, you will need to transpile it and include polyfills in order for it to work in older browsers.

One of the main performance concerns of including polyfills and transpiled code in your site is that newer browsers shouldn't have to download it if they do not need it. To cut down on the JavaScript size of your application, minimize unused polyfills as much as possible and restrict their usage to environments where they're needed.

To optimize polyfill usage on your site:

- If you use [Babel](https://babeljs.io/docs/en/index.html) as a transpiler, use [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) to only include the polyfills needed for the browsers you plan on targeting. For Babel 7.9, enable the [`bugfixes`](https://babeljs.io/docs/en/babel-preset-env#bugfixes) option to further cut down on any unneeded polyfills

- Use the module/nomodule pattern to deliver two separate bundles (`@babel/preset-env` also supports this via [`target.esmodules`](https://babeljs.io/docs/en/babel-preset-env#targetsesmodules))

      <script type="module" src="modern.js"></script>
      <script nomodule src="legacy.js" defer></script>

  Many newer ECMAScript features compiled with Babel are already supported in environments that support JavaScript modules. So by doing this, you simplify the process of making sure that only transpiled code is used for browsers that actually need it.

The [Serve modern code to modern browsers for faster page loads](/serve-modern-code-to-modern-browsers/) guide goes into more detail about this topic.

## Developer tools <a href="#developer-tools" class="w-headline-link">#</a>

A number of tools are available to measure and debug FID:

- [Lighthouse 6.0](https://developers.google.com/web/tools/lighthouse) does not include support for FID since it is a field metric. However, [Total Blocking Time](/tbt/) (TBT) can be used as a proxy. Optimizations that improve TBT should also improve FID in the field.

  <img src="https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format" alt="Lighthouse 6.0." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/FRM9kHWmsDv9dddGMgwu.jpg?auto=format&amp;w=1600 1600w" width="800" height="309" />

- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) provides real-world FID values aggregated at the origin-level

_With thanks to Philip Walton, Kayce Basques, Ilya Grigorik, and Annie Sullivan for their reviews._

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: May 5, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/optimize-fid/index.md)

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
