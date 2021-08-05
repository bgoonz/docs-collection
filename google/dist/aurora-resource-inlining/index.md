<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format" alt="A labyrinth." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/yXASsFeUg39y0K7aFJIY.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#resource-inlining-in-javascript-frameworks" class="w-toc__header--link">Resource inlining in JavaScript frameworks</a>

- [Font inlining](#font-inlining)
- [Font inlining is now available in Next.js and Angular](#font-inlining-is-now-available-in-next.js-and-angular)
- [Inlining critical CSS](#inlining-critical-css)
- [Conclusions](#conclusions)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Resource inlining in JavaScript frameworks

Improving Largest Contentful Paint across the JavaScript ecosystem.

Jun 28, 2021

[<img src="https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Minko Gechev" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mgechev/)

<a href="/authors/mgechev/" class="w-author__name-link">Minko Gechev</a>

- <a href="https://twitter.com/mgechev" class="w-author__link">Twitter</a>
- <a href="https://github.com/mgechev" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@mgechev" class="w-author__link">Glitch</a>
- <a href="https://blog.mgechev.com/" class="w-author__link">Blog</a>

As part of project [Aurora](/introducing-aurora/), Google has been working with popular web frameworks to ensure they perform well according to [Core Web Vitals](/vitals). Angular and Next.js have already landed font inlining, which is explained in the first part of this article. The second optimization we will cover is critical CSS inlining which is now enabled by default in Angular CLI and has a work in progress implementation in Nuxt.js.

## Font inlining <a href="#font-inlining" class="w-headline-link">#</a>

After analyzing hundreds of applications, the Aurora team found that developers often include fonts in their applications by referencing them in the `<head>` element of `index.html`. Here's an example of how this would look like when including Material Icons:

    <!doctype html>
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      ...
    </html>

Even though this pattern is completely valid and functional, it blocks the application's rendering and introduces an extra request. To better understand what is going on, take a look at the source code of the stylesheet referenced in the HTML above:

    /* fallback */
    @font-face {
      font-family: 'Material Icons';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/font.woff2) format('woff2');
    }

    .material-icons {
      /*...*/
    }

Notice how the `font-face` definition references an external file hosted on `fonts.gstatic.com`. When loading the application, the browser first has to download the original stylesheet referenced in the head.

<figure><img src="https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format" alt="First, the website loads the font stylesheet." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/46NStJqOoW7xsrDe12Uf.png?auto=format&amp;w=1600 1600w" width="800" height="267" /><figcaption>First, the website loads the font stylesheet.</figcaption></figure>Next, the browser downloads the `woff2` file, then finally, it's able to proceed with rendering the application.

<figure><img src="https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format" alt="Next, a request is made to load the font." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/S838B7UEsdXmwrD8q5gvNlWTHHP2/V1uQUNEvw4vHwAW1ekPk.png?auto=format&amp;w=1600 1600w" width="800" height="281" /><figcaption>Next, a request is made to load the font.</figcaption></figure>An opportunity for optimization is to download the initial stylesheet at build time and inline it in `index.html`. This skips an entire round trip to the CDN at runtime, reducing the blocking time.

When building the application, a request is sent to the CDN, this fetches the stylesheet and inlines it in the HTML file, adding a `<link rel=preconnect>` to the domain. Applying this technique, we'd get the following result:

    <!doctype html>
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin >
      <style type="text/css">
      @font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/font.woff2) format('woff2');}.material-icons{/*...*/}</style>
      ...
    </html>

### Font inlining is now available in Next.js and Angular <a href="#font-inlining-is-now-available-in-next.js-and-angular" class="w-headline-link">#</a>

When framework developers implement optimization in the underlying tooling, they make it easier for existing and new applications to enable it, bringing the improvement to the entire ecosystem.

This improvement is enabled by default from Next.js v10.2 and Angular v11. Both have support for inlining Google and Adobe fonts. Angular is expecting to introduce the latter in v12.2.

You can find the implementation of [font inlining in Next.js on GitHub](https://github.com/vercel/next.js/pull/14746), and check out the [video explaining this optimization in the context of Angular](https://www.youtube.com/watch?v=yOpy9UMQG-Y).

## Inlining critical CSS <a href="#inlining-critical-css" class="w-headline-link">#</a>

Another enhancement involves improving the [First Contentful Paint (FCP)](/fcp) and [Largest Contentful Paint (LCP)](/lcp) metrics by inlining critical CSS. The critical CSS of a page includes all of the styles used at its initial rendering. To learn more about the topic, check out [Defer non-critical CSS](/defer-non-critical-css/).

We observed that many applications are loading styles synchronously, which blocks application rendering. A quick fix is to load the styles asynchronously. Rather than loading the scripts with `media="all"`, set the value of the `media` attribute to `print`, and once the loading completes, replace the attribute value to `all`:

    <link rel="stylesheet" href="..." media="print" onload="this.media='all'">

This practice, however, can cause flickering of unstyled content.

The page appears to flicker as the styles load in.

The video above shows the rendering of a page, which loads its styles asynchronously. The flicker happens because the browser first starts downloading the styles, then renders the HTML which follows. Once the browser downloads the styles, it triggers the `onload` event of the link element, updating the `media` attribute to `all`, and applies the styles to the DOM.

During the time between rendering the HTML and applying the styles the page is partially unstyled. When the browser uses the styles, we see flickering, which is a bad user experience and results in regressions in [Cumulative Layout Shift (CLS)](/cls/).

[Critical CSS inlining](/extract-critical-css/), along with asynchronous style loading, can improve the loading behavior. The [critters](http://npmjs.com/package/critters) tool finds which styles are used on the page, by looking at the selectors in a stylesheet and matching them against the HTML. When it finds a match, it considers the corresponding styles as part of the critical CSS, and inlines them.

Let's look at an example:

Example before inlining

    <head>
       <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
    </head>
    <body>
      <section>
        <button class="primary"></button>
      </section>
    </body>

    /* styles.css */
    section button.primary {
      /* ... */
    }
    .list {
      /* ... */
    }

In the example above, critters will read and parse the content of `styles.css`, after that it matches the two selectors against the HTML and discovers that we use `section button.primary`. Finally critters will inline the corresponding styles in the `<head>` of the page resulting in:

Example after inlining

    <head>
      <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
      <style>
      section button.primary {
        /* ... */
      }
      </style>
    </head>
    <body>
      <section>
        <button class="primary"></button>
      </section>
    </body>

After inlining the critical CSS in the HTML you will find that the flickering of the page is gone:

The page loading after CSS inlining.

Critical CSS inlining is now available in Angular and enabled by default in v12. If you're on v11, turn it on by [setting the `inlineCritical` property to `true`](https://angular.io/guide/workspace-config#styles-optimization-options) in `angular.json`. To opt into this feature in Next.js add `experimental: { optimizeCss: true }` to your `next.config.js`.

Enabling the critical CSS and font inlining on angular.io improved the Lighthouse score by 27 points on a slow 3G network.

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

In this post we touched on some of the collaboration between Chrome and web frameworks. If you're a framework author and recognize some of the problems we tackled in your technology, we hope our findings inspire you to apply similar performance optimizations.

Find out more about the improvements at [web.dev/aurora](/aurora). You can find a comprehensive list of the optimization work we've been doing for Core Web Vitals in the post [Introducing Aurora](/introducing-aurora/#what-has-our-work-unlocked-so-far).

<a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jun 28, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/aurora-resource-inlining/index.md)

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
