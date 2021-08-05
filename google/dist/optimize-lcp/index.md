<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format" alt="Optimize LCP banner" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/qqTKhxUFqdLXnST2OFWN.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#optimize-largest-contentful-paint" class="w-toc__header--link">Optimize Largest Contentful Paint</a>

- [Slow server response times](#slow-servers)
- [Optimize your server](#optimize-your-server)
- [Route users to a nearby CDN](#route-users-to-a-nearby-cdn)
- [Cache assets](#cache-assets)
- [Serve HTML pages cache-first](#serve-html-pages-cache-first)
- [Establish third-party connections early](#establish-third-party-connections-early)
- [Use signed exchanges (SXGs)](<#use-signed-exchanges-(sxgs)>)
- [Render blocking JavaScript and CSS](#render-blocking-resources)
- [Reduce CSS blocking time](#reduce-css-blocking-time)
- [Minify CSS](#minify-css)
- [Defer non-critical CSS](#defer-non-critical-css)
- [Inline critical CSS](#inline-critical-css)
- [Reduce JavaScript blocking time](#reduce-javascript-blocking-time)
- [Slow resource load times](#slow-resource-load-times)
- [Optimize and compress images](#optimize-and-compress-images)
- [Preload important resources](#preload-important-resources)
- [Compress text files](#compress-text-files)
- [Adaptive serving](#adaptive-serving)
- [Cache assets using a service worker](#cache-assets-using-a-service-worker)
- [Client-side rendering](#client-side-rendering)
- [Minimize critical JavaScript](#minimize-critical-javascript)
- [Use server-side rendering](#use-server-side-rendering)
- [Use pre-rendering](#use-pre-rendering)
- [Developer tools](#developer-tools)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Optimize Largest Contentful Paint

How to render your main content faster.

May 5, 2020 <span class="w-author__separator">•</span> Updated Aug 20, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Houssein Djirdeh" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/houssein/)

<a href="/authors/houssein/" class="w-author__name-link">Houssein Djirdeh</a>

- <a href="https://twitter.com/hdjirdeh" class="w-author__link">Twitter</a>
- <a href="https://github.com/housseindjirdeh" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@housseindjirdeh" class="w-author__link">Glitch</a>
- <a href="https://houssein.me/" class="w-author__link">Blog</a>

> I can't see any useful content! Why does it take so long to load? 😖

One factor contributing to a poor user experience is how long it takes a user to see any content rendered to the screen. [First Contentful Paint](/fcp) (FCP) measures how long it takes for initial DOM content to render, but it does not capture how long it took the largest (usually more meaningful) content on the page to render.

[Largest Contentful Paint](/lcp) (LCP) is a [Core Web Vitals](/vitals/) metric and measures when the largest content element in the viewport becomes visible. It can be used to determine when the main content of the page has finished rendering on the screen.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/9trpfS9wruEPGekHqBdn.svg" alt="Good LCP values are 2.5 seconds, poor values are greater than 4.0 seconds and anything in between needs improvement" class="w-screenshot w-screenshot--filled width-full" width="384" height="96" />

The most common causes of a poor LCP are:

- [Slow server response times](#slow-servers)
- [Render-blocking JavaScript and CSS](#render-blocking-resources)
- [Slow resource load times](#slow-resource-load-times)
- [Client-side rendering](#client-side-rendering)

## Slow server response times <a href="#slow-servers" class="w-headline-link">#</a>

The longer it takes a browser to receive content from the server, the longer it takes to render anything on the screen. A faster server response time directly improves every single page-load metric, including LCP.

Before anything else, improve how and where your server handles your content. Use [**Time to First Byte**](/time-to-first-byte) (TTFB) to measure your server response times. You can improve your TTFB in a number of different ways:

- Optimize your server
- Route users to a nearby CDN
- Cache assets
- Serve HTML pages cache-first
- Establish third-party connections early
- Use signed exchanges

### Optimize your server <a href="#optimize-your-server" class="w-headline-link">#</a>

Are you running expensive queries that take your server a significant amount of time to complete? Or are there other complex operations happening server-side that delay the process to return page content? Analyzing and improving the efficiency of your server-side code will directly improve the time it takes for the browser to receive the data.

Instead of just immediately serving a static page on a browser request, many server-side web frameworks need to create the web page dynamically. In other words, rather than just sending a complete HTML file that's already ready when the browser requests it, the frameworks need to run logic to construct the page. This could be due to pending results from a database query or even because components need to be generated into markup by a UI framework (such as [React](https://reactjs.org/docs/react-dom-server.html)). Many web frameworks that run on the server have performance guidance that you can use to speed up this process.

Check out [Fix an overloaded server](/overloaded-server/) for more tips.

### Route users to a nearby CDN <a href="#route-users-to-a-nearby-cdn" class="w-headline-link">#</a>

A Content Delivery Network (CDN) is a network of servers distributed in many different locations. If the content on your web page is being hosted on a single server, your website will load slower for users that are geographically farther away because their browser requests literally have to travel around the world. Consider using a CDN to ensure that your users never have to wait for network requests to faraway servers.

### Cache assets <a href="#cache-assets" class="w-headline-link">#</a>

If your HTML is static and doesn't need to change on every request, caching can prevent it from being recreated unnecessarily. By storing a copy of the generated HTML on disk, server-side caching can reduce TTFB and minimize resource usage.

Depending on your toolchain, there are many different ways to apply server caching:

- Configure reverse proxies ([Varnish](https://varnish-cache.org/), [nginx](https://www.nginx.com/)) to serve cached content or act as a cache server when installed in front of an application server
- Configure and manage your cloud provider's ([Firebase](https://firebase.google.com/docs/hosting/manage-cache), [AWS](https://aws.amazon.com/caching/), [Azure](https://docs.microsoft.com/en-us/azure/architecture/best-practices/caching)) cache behavior
- Use a CDN that provides edge servers so that your content is cached and stored closer to your users

### Serve HTML pages cache-first <a href="#serve-html-pages-cache-first" class="w-headline-link">#</a>

When installed, a [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) runs in the browser background and can intercept requests from the server. This level of programmatic cache control makes it possible to cache some or all of the HTML page's content and only update the cache when the content has changed.

The following chart shows how LCP distributions have been reduced on a site using this pattern:

<figure><img src="https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format" alt="Largest Contentful Paint distribution, for page loads with and without a service worker - philipwalton.com" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/uB0Sm56R88MRF16voQ1k.png?auto=format&amp;w=1600 1600w" width="800" height="495" /><figcaption>Largest Contentful Paint distribution, for page loads with and without a service worker - <a href="https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/">philipwalton.com</a></figcaption></figure>The chart shows the distribution for LCP from a single site over the last 28 days, segmented by service worker state. Notice how far more page loads have a faster LCP value after cache-first HTML page serving was introduced in the service worker (blue portion of chart).

To learn more about techniques for serving full or partial HTML pages cache-first, take a look at [Smaller HTML Payloads with Service Workers](https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/)

### Establish third-party connections early <a href="#establish-third-party-connections-early" class="w-headline-link">#</a>

Server requests to third-party origins can also impact LCP, especially if they're needed to display critical content on the page. Use `rel="preconnect"` to inform the browser that your page intends to establish a connection as soon as possible.

    <link rel="preconnect" href="https://example.com" />

You can also use `dns-prefetch` to resolve DNS lookups faster.

    <link rel="dns-prefetch" href="https://example.com" />

Although both hints work differently, consider using `dns-prefetch` as a fallback for browsers that do not support `preconnect`.

    <head>
      …
      <link rel="preconnect" href="https://example.com" />
      <link rel="dns-prefetch" href="https://example.com" />
    </head>

Learn more by reading [Establish network connections early to improve perceived page speed](/preconnect-and-dns-prefetch/)

### Use signed exchanges (SXGs) <a href="#use-signed-exchanges-(sxgs)" class="w-headline-link">#</a>

[Signed exchanges (SXGs)](https://web.dev/signed-exchanges) are a delivery mechanism that allow for faster user experiences by providing content in an easily cacheable format. Specifically, [Google Search](https://developers.google.com/search/docs/advanced/experience/signed-exchange) will cache and sometimes prefetch SXGs. For sites that receive a large portion of their traffic from Google Search, SXGs can be an important tool for improving LCP. For more information, see [Signed Exchanges](/signed-exchanges).

## Render blocking JavaScript and CSS <a href="#render-blocking-resources" class="w-headline-link">#</a>

Before a browser can render any content, it needs to parse HTML markup into a DOM tree. The HTML parser will pause if it encounters any external stylesheets (`<link rel="stylesheet">`) or synchronous JavaScript tags (`<script src="main.js">`).

Scripts and stylesheets are both render blocking resources which delay FCP, and consequently LCP. Defer any non-critical JavaScript and CSS to speed up loading of the main content of your web page.

### Reduce CSS blocking time <a href="#reduce-css-blocking-time" class="w-headline-link">#</a>

Ensure that only the minimal amount of necessary CSS is blocking render on your site with the following:

- Minify CSS
- Defer non-critical CSS
- Inline critical CSS

### Minify CSS <a href="#minify-css" class="w-headline-link">#</a>

For easier legibility, CSS files can contain characters such as spacing, indentation, or comments. These characters are all unnecessary for the browser, and minifying these files will ensure that they get removed. Ultimately, reducing the amount of blocking CSS will always improve the time it takes to fully render the main content of the page (LCP).

If you use a module bundler or build tool, include an appropriate plugin to minify CSS files on every build:

- For webpack: [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
- For Gulp: [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- For Rollup: [rollup-plugin-css-porter](https://www.npmjs.com/package/rollup-plugin-css-porter)

<figure><img src="https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format" alt="Example of LCP improvement: Before and after minifying CSS" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/vQXSKrY1Eq3CKkNbu9Td.png?auto=format&amp;w=1600 1600w" width="800" height="139" /><figcaption>Example of LCP improvement: Before and after minifying CSS</figcaption></figure>For more details, refer to the [Minify CSS](/minify-css/) guide.

### Defer non-critical CSS <a href="#defer-non-critical-css" class="w-headline-link">#</a>

Use the [Coverage](https://developers.google.com/web/tools/chrome-devtools/coverage) tab in Chrome DevTools to find any unused CSS on your web page.

<img src="https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format" alt="Coverage tab in Chrome DevTools" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wjS4NrU5EsJeCuvK0zhn.png?auto=format&amp;w=1600 1600w" width="800" height="559" />

To optimize:

- Remove any unused CSS entirely or move it to another stylesheet if used on a separate page of your site.

- For any CSS not needed for initial rendering, use [loadCSS](https://github.com/filamentgroup/loadCSS/blob/master/README.md) to load files asynchronously, which leverages `rel="preload"`and `onload`.

  `html <link rel="preload" href="stylesheet.css" as="style" onload="this.rel='stylesheet'">`

  <figure><img src="https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format" alt="Example of LCP improvement: Before and after deferring non-critical CSS" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/2fcwrkXQRQrM8w1qyy3P.png?auto=format&amp;w=1600 1600w" width="800" height="139" /><figcaption>Example of LCP improvement: Before and after deferring non-critical CSS</figcaption></figure>

For more details, refer to the [Defer non-critical CSS](/defer-non-critical-css/) guide.

### Inline critical CSS <a href="#inline-critical-css" class="w-headline-link">#</a>

Inline any critical-path CSS used for above-the-fold content by including it directly in `<head>.`

<figure><img src="https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format" alt="Critical CSS inlined" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/m0n0JsLpH9JsNnXywSwz.png?auto=format&amp;w=1600 1600w" width="800" height="325" /><figcaption>Critical CSS inlined</figcaption></figure>Inlining important styles eliminates the need to make a round-trip request to fetch critical CSS. Deferring the rest minimizes CSS blocking time.

If you cannot manually add inline styles to your site, use a library to automate the process. Some examples:

- [Critical](https://github.com/addyosmani/critical), [CriticalCSS](https://github.com/filamentgroup/criticalCSS), and [Penthouse](https://github.com/pocketjoso/penthouse) are all packages that extract and inline above-the-fold CSS
- [Critters](https://github.com/GoogleChromeLabs/critters) is a webpack plugin that inlines critical CSS and lazy-loads the rest

<figure><img src="https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format" alt="Example of LCP improvement: Before and after inlining critical CSS" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/L8sc51bd3ckxwnUfczC4.png?auto=format&amp;w=1600 1600w" width="800" height="175" /><figcaption>Example of LCP improvement: Before and after inlining critical CSS</figcaption></figure>Take a look at the [Extract critical CSS](/extract-critical-css/) guide to learn more.

### Reduce JavaScript blocking time <a href="#reduce-javascript-blocking-time" class="w-headline-link">#</a>

Download and serve the minimal amount of necessary JavaScript to users. Reducing the amount of blocking JavaScript results in a faster render, and consequently a better LCP.

This can be accomplished by optimizing your scripts in a few different ways:

- [Minify and compress JavaScript files](https://web.dev/reduce-network-payloads-using-text-compression/)
- [Defer unused JavaScript](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
- [Minimize unused polyfills](https://web.dev/serve-modern-code-to-modern-browsers/)

The [Optimize First Input Delay](/optimize-fid/) guide covers all techniques needed to reduce JavaScript blocking time in a little more detail.

## Slow resource load times <a href="#slow-resource-load-times" class="w-headline-link">#</a>

Although an increase in CSS or JavaScript blocking time will directly result in worse performance, the time it takes to load many other types of resources can also affect paint times. The types of elements that affect LCP are:

- `<img>` elements
- `<image>` elements inside an `<svg>` element
- `<video>` elements (the [poster](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-poster) image is used to measure LCP)
- An element with a background image loaded via the [`url()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/url()>) function (as opposed to a CSS gradient)
- [Block-level](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) elements containing text nodes or other inline-level text elements

The time it takes to load these elements if rendered above-the-fold will have a direct effect on LCP. There are a few ways to ensure these files are loaded as fast as possible:

- Optimize and compress images
- Preload important resources
- Compress text files
- Deliver different assets based on network connection (adaptive serving)
- Cache assets using a service worker

### Optimize and compress images <a href="#optimize-and-compress-images" class="w-headline-link">#</a>

For many sites, images are the largest element in view when the page has finished loading. Hero images, large carousels or banner images are all common examples of this.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format" alt="Image as the largest page element: design.google" sizes="(min-width: 459px) 459px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/unWra6cq0hPJJJT7Y3ye.png?auto=format&amp;w=918 918w" width="459" height="925" /><figcaption>Image as the largest page element: <a href="https://design.google/">design.google</a></figcaption></figure>Improving how long it takes to load and render these types of images will directly speed up LCP. To do this:

- Consider not using an image in the first place. If it's not relevant to the content, remove it.
- Compress images (with [Imagemin](/use-imagemin-to-compress-images) for example)
- Convert images into newer formats (JPEG 2000, JPEG XR, or WebP)
- Use responsive images
- Consider using an image CDN

Take a look at [Optimize your images](/fast/#optimize-your-images) for guides and resources that explain all of these techniques in detail.

### Preload important resources <a href="#preload-important-resources" class="w-headline-link">#</a>

At times, important resources that are declared or used in a certain CSS or JavaScript file may be fetched later than you would like, such as a font tucked deep in one of the many CSS files of an application.

If you know that a particular resource should be prioritized, use `<link rel="preload">` to fetch it sooner. [Many types of resources](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#What_types_of_content_can_be_preloaded) can be preloaded, but you should first focus on [preloading critical assets](/preload-critical-assets/), such as fonts, above-the-fold images or videos, and critical-path CSS or JavaScript.

    <link rel="preload" as="script" href="script.js" />
    <link rel="preload" as="style" href="style.css" />
    <link rel="preload" as="image" href="img.png" />
    <link rel="preload" as="video" href="vid.webm" type="video/webm" />
    <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin />

Since Chrome 73, preloading can be used along with [responsive images](/preload-responsive-images/) to combine both patterns for much faster image loading.

    <link
      rel="preload"
      as="image"
      href="wolf.jpg"
      imagesrcset="wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w"
      imagesizes="50vw"
    />

### Compress text files <a href="#compress-text-files" class="w-headline-link">#</a>

Compression algorithms, like [Gzip](https://www.youtube.com/watch?v=whGwm0Lky2s&feature=youtu.be&t=14m11s) and [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html), can significantly reduce the size of text files (HTML, CSS, JavaScript) as they're transferred between the server and browser. Gzip is effectively supported in all browsers and Brotli, which provides even better compression results, [can be used in almost all newer browsers](https://caniuse.com/#feat=brotli).

Compressing your resources will minimize their delivery size, improving load times and consequently LCP.

1.  First, check if your server already compresses files automatically. Most hosting platforms, CDNs, and reverse proxy servers either encode assets with compression by default or allow you to easily configure them.
2.  If you need to modify your server to compress files, consider using Brotli instead of gzip since it can provide better compression ratios.
3.  Once you pick a compression algorithm to use, compress assets ahead of time during the build process instead of on-the-fly as they are requested by the browser. This minimizes server overhead and prevents delays when requests are made, especially when using high compression ratios.

<figure><img src="https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format" alt="Example of LCP improvement: Before and after Brotli compression" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Ckh2Jjkoh7ojLj5Wxeqc.png?auto=format&amp;w=1600 1600w" width="800" height="139" /><figcaption>Example of LCP improvement: Before and after Brotli compression</figcaption></figure>For more details, refer to the [Minify and compress network payloads](/reduce-network-payloads-using-text-compression/) guide.

### Adaptive serving <a href="#adaptive-serving" class="w-headline-link">#</a>

When loading resources that make up the main content of a page, it can be effective to conditionally fetch different assets depending on the user's device or network conditions. This can be done using the [Network Information](https://wicg.github.io/netinfo/), [Device Memory](https://www.w3.org/TR/device-memory/), and [HardwareConcurrency](https://html.spec.whatwg.org/multipage/workers.html#navigator.hardwareconcurrency) APIs.

If you have large assets that are critical for initial rendering, you can use different variations of the same resource depending on the user's connection or device. For example, you can display an image instead of a video for any connection speeds lower than 4G:

    if (navigator.connection && navigator.connection.effectiveType) {
      if (navigator.connection.effectiveType === '4g') {
        // Load video
      } else {
        // Load image
      }
    }

A list of useful properties that you can use:

- `navigator.connection.effectiveType`: Effective connection type
- `navigator.connection.saveData`: Data-saver enabled/disabled
- `navigator.hardwareConcurrency`: CPU core count
- `navigator.deviceMemory`: Device Memory

For more information, refer to [Adaptive serving based on network quality](/adaptive-serving-based-on-network-quality/).

### Cache assets using a service worker <a href="#cache-assets-using-a-service-worker" class="w-headline-link">#</a>

Service workers can be used for many useful tasks, including serving smaller HTML responses as mentioned earlier in this article. They can also be used to cache any static resource which can be served to the browser instead of from the network on repeat requests.

Precaching critical resources using a service worker can reduce their load times significantly, especially for users who reload the web page with a weaker connection (or even access it offline). Libraries like [Workbox](https://developers.google.com/web/tools/workbox/) can make the process of updating precached assets easier than writing a custom service worker to handle this yourself.

Take a look at [Network reliability](/reliable/) to learn more about service workers and Workbox.

## Client-side rendering <a href="#client-side-rendering" class="w-headline-link">#</a>

Many sites use client-side JavaScript logic to render pages directly in the browser. Frameworks and libraries, like [React](https://reactjs.org/), [Angular](https://angular.io/), and [Vue](https://vuejs.org/), have made it easier to build single-page applications that handle different facets of a web page entirely on the client rather on the server.

If you're building a site that is mostly rendered on the client, you should be wary of the effect it can have on LCP if a large JavaScript bundle is used. If optimizations aren't in place to prevent it, users may not see or interact with any content on the page until all the critical JavaScript has finished downloading and executing.

When building a client-side rendered site, consider the following optimizations:

- Minimize critical JavaScript
- Use server-side rendering
- Use pre-rendering

### Minimize critical JavaScript <a href="#minimize-critical-javascript" class="w-headline-link">#</a>

If content on your site only becomes visible, or can be interacted with, after a certain amount of JavaScript is downloaded: it becomes even more important to cut down on the size of your bundle as much as possible. This can be done by:

- Minifying JavaScript
- Deferring unused JavaScript
- Minimizing unused polyfills

Go back to the [Reduce JavaScript blocking time](#reduce-javascript-blocking-time) section to read more about these optimizations.

### Use server-side rendering <a href="#use-server-side-rendering" class="w-headline-link">#</a>

Minimizing the amount of JavaScript should always be the first thing to focus on for sites that are mostly client-rendered. However, you should also consider combining a server rendering experience to improve LCP as much as possible.

This concept works by using the server to render the application into HTML, where the client then "[hydrates](https://www.gatsbyjs.org/docs/react-hydration/)" all the JavaScript and required data onto the same DOM content. This can improve LCP by ensuring the main content of the page is first rendered on the server rather than only on the client, but there are a few drawbacks:

- Maintaining the same JavaScript-rendered application on the server and the client can increase complexity.
- Executing JavaScript to render an HTML file on the server will always increase server response times (TTFB) as compared to just serving static pages from the server.
- A server-rendered page may look like it can be interacted with, but it can't respond to any user input until all the client-side JavaScript has executed. In short, it can make [**Time to Interactive**](/tti/) (TTI) worse.

### Use pre-rendering <a href="#use-pre-rendering" class="w-headline-link">#</a>

Pre-rendering is a separate technique that is less complex than server-side rendering and also provides a way to improve LCP in your application. A headless browser, which is a browser without a user interface, is used to generate static HTML files of every route during build time. These files can then be shipped along with the JavaScript bundles that are needed for the application.

With pre-rendering, TTI is still negatively impacted but server response times aren't as affected as they would be with a server-side rendering solution that dynamically renders each page only after it's requested.

<figure><img src="https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format" alt="Example of LCP improvement: Before and after pre-rendering" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/sm9s16UHfh8a5MDEWjxa.png?auto=format&amp;w=1600 1600w" width="800" height="139" /><figcaption>Example of LCP improvement: Before and after pre-rendering</figcaption></figure>For a deeper dive into different server-rendering architectures, take a look at [Rendering on the web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web).

## Developer tools <a href="#developer-tools" class="w-headline-link">#</a>

A number of tools are available to measure and debug LCP:

- [Lighthouse 6.0](https://developers.google.com/web/tools/lighthouse) includes support for measuring LCP in a lab setting.

  <img src="https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format" alt="Lighthouse 6.0" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Sar3Pa7TDe9ibny6sfq4.jpg?auto=format&amp;w=1600 1600w" width="800" height="309" />

- The **Timings** section of the [Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance) panel in Chrome DevTools includes a LCP marker and shows you which element is associated with LCP when you hover over the **Related Node** field.

  <img src="https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format" alt="LCP in Chrome DevTools" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/sxczQPKH0cvMBsNCx5uH.png?auto=format&amp;w=1600 1600w" width="800" height="509" />

- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) provides real-world LCP values aggregated at the origin-level

_With thanks to Philip Walton, Katie Hempenius, Kayce Basques, and Ilya Grigorik for their reviews._

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Aug 20, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/optimize-lcp/index.md)

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
