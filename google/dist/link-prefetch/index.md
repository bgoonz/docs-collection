<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#prefetch-resources-to-speed-up-future-navigations" class="w-toc__header--link">Prefetch resources to speed up future navigations</a>

- [Improve navigations with rel=prefetch](#improve-navigations-with-relprefetch)
- [Use cases](#use-cases)
- [Prefetching subsequent pages](#prefetching-subsequent-pages)
- [Prefetching static assets](#prefetching-static-assets)
- [Prefetching on-demand JavaScript chunks](#prefetching-on-demand-javascript-chunks)
- [How to implement rel=prefetch](#how-to-implement-relprefetch)
- [Prefetching JavaScript modules with webpack magic comments](#prefetching-javascript-modules-with-webpack-magic-comments)
- [Smart prefetching with quicklink and Guess.js](#smart-prefetching-with-quicklink-and-guess.js)
- [Prefetching under the hood](#prefetching-under-the-hood)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Prefetch resources to speed up future navigations

Learn about rel=prefetch resource hint and how to use it.

Sep 12, 2019

<span class="w-post-signpost__title">Appears in:</span> <a href="/fast" class="w-post-signpost__link">Fast load times</a>

[<img src="https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Demian Renzulli" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/demianrenzulli/)

<a href="/authors/demianrenzulli/" class="w-author__name-link">Demian Renzulli</a>

- <a href="https://twitter.com/drenzulli" class="w-author__link">Twitter</a>
- <a href="https://github.com/demianrenzulli" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@demianrenzulli" class="w-author__link">Glitch</a>

Research shows that [faster load times result in higher conversion rates](https://wpostats.com/) and better user experiences. If you have insight into how users move through your website and which pages they will likely visit next, you can improve load times of future navigations by downloading the resources for those pages ahead of time.

This guide explains how to achieve that with `<link rel=prefetch>`, a [resource hint](https://www.w3.org/TR/resource-hints/) that enables you to implement prefetching in an easy and efficient way.

## Improve navigations with `rel=prefetch` <a href="#improve-navigations-with-relprefetch" class="w-headline-link">#</a>

Adding `<link rel=prefetch>` to a web page tells the browser to download entire pages, or some of the resources (like scripts or CSS files), that the user might need in the future. This can improve metrics like [First Contentful Paint](/first-contentful-paint) and [Time to Interactive](/interactive/) and can often make subsequent navigations appear to load instantly.

    <link rel="prefetch" href="/articles/" as="document">

<img src="https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format" alt="A diagram showing how link prefetch works." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/djLGrbmj5eovwa6qhlm1.png?auto=format&amp;w=1600 1600w" width="800" height="413" />

The `prefetch` hint consumes extra bytes for resources that are not immediately needed, so this technique needs to be applied thoughtfully; only prefetch resources when you are confident that users will need them. Consider not prefetching when users are on slow connections. You can detect that with the [Network Information API](/adaptive-serving-based-on-network-quality/).

There are different ways to determine which links to prefetch. The simplest one is to prefetch the first link or the first few links on the current page. There are also libraries that use more sophisticated approaches, explained later in this post.

## Use cases <a href="#use-cases" class="w-headline-link">#</a>

### Prefetching subsequent pages <a href="#prefetching-subsequent-pages" class="w-headline-link">#</a>

Prefetch HTML documents when subsequent pages are predictable, so that when a link is clicked, the page is loaded instantly.

For example, in a product listing page, you can prefetch the page for the most popular product in the list. In some cases, the next navigation is even easier to anticipate—on a shopping cart page, the likelihood of a user visiting the checkout page is usually high which makes it a good candidate for prefetching.

eBay implemented prefetching for the first five results on a search page to speed up future pages loads and saw a positive impact on conversion rates.

### Prefetching static assets <a href="#prefetching-static-assets" class="w-headline-link">#</a>

Prefetch static assets, like scripts or stylesheets, when subsequent sections the user might visit can be predicted. This is especially useful when those assets are shared across many pages.

For example, Netflix takes advantage of the time users spend on logged-out pages, to prefetch React, which will be used once users log in. Thanks to this, they [reduced Time to Interactive by 30% for future navigations](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9).

**Gotchas!**

At the time of this writing, it is possible to share prefetched resources among pages served from different origins. When [Double-keyed HTTP cache](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/6KKXv1PqPZ0/oguPntMGDgAJ) ships, this will only work for top-level navigations and same-origin subresources, but it won't be possible to reuse prefetched subresources among different origins. This means that, if `a.com` prefetches the resource `b.com/library.js`, it won't be available in `c.com` cache. Some browsers, such as WebKit-based ones, already [partition caches and HTML5 storage](https://webkit.org/blog/7675/intelligent-tracking-prevention/) for all third-party domains.

### Prefetching on-demand JavaScript chunks <a href="#prefetching-on-demand-javascript-chunks" class="w-headline-link">#</a>

[Code-splitting](/reduce-javascript-payloads-with-code-splitting) your JavaScript bundles allows you to initially load only parts of an app and lazy-load the rest. If you're using this technique, you can apply prefetch to routes or components that are not immediately necessary but will likely be requested soon.

For example, if you have a page that contains a button that opens a dialog box which contains an emoji picker, you can divide it into three JavaScript chunks—home, dialog and picker. Home and dialog could be initially loaded, while the picker could be loaded on-demand. Tools like webpack allow you to instruct the browser to prefetch these on-demand chunks.

## How to implement `rel=prefetch` <a href="#how-to-implement-relprefetch" class="w-headline-link">#</a>

The simplest way to implement `prefetch` is adding a `<link>` tag to the `<head>` of the document:

    <head>
     ...
     <link rel="prefetch" href="/articles/" as="document">
        ...
    </head>

The `as` attribute is not mandatory, but it's recommended. It helps the browser set the right headers, and determine whether the resource is already in the cache. Example values for this attribute include: `document`, `script`, `style`, `font`, `image`, and [others](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#Attributes).

You can also initiate prefetching via the [`Link` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link):

`Link: </css/style.css>; rel=prefetch`

A benefit of specifying a prefetch hint in the HTTP Header is that the browser doesn't need to parse the document to find the resource hint, which can offer small improvements in some cases.

`prefetch` is supported in [all modern browsers except Safari](https://caniuse.com/#search=prefetch). You can implement a fallback technique for Safari with [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) requests or the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Prefetching JavaScript modules with webpack magic comments <a href="#prefetching-javascript-modules-with-webpack-magic-comments" class="w-headline-link">#</a>

webpack enables you to prefetch scripts for routes or functionality you're reasonably certain users will visit or use soon.

The following code snippet lazy-loads a sorting functionality from the [lodash](https://lodash.com/) library to sort a group of numbers that will be submitted by a form:

    form.addEventListener("submit", e => {
     e.preventDefault()
     import('lodash.sortby')
          .then(module => module.default)
            .then(sortInput())
           .catch(err => { alert(err) });
    });

Instead of waiting for the 'submit' event to take place to load this functionality, you can prefetch this resource to increase the chances of having it available in the cache by the time the user submits the form. webpack allows that using the [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) inside `import()`:

    form.addEventListener("submit", e => {
       e.preventDefault()
       import(/* webpackPrefetch: true */ 'lodash.sortby')
             .then(module => module.default)
             .then(sortInput())
             .catch(err => { alert(err) });
    });

This tells webpack to inject the `<link rel="prefetch">` tag into the HTML document:

    <link rel="prefetch" as="script" href="1.bundle.js">

### Smart prefetching with quicklink and Guess.js <a href="#smart-prefetching-with-quicklink-and-guess.js" class="w-headline-link">#</a>

You can also implement smarter prefetching with libraries that use `prefetch` under the hood:

- [quicklink](https://github.com/GoogleChromeLabs/quicklink) uses [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect when links come into the viewport and prefetches linked resources during [idle time](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback). Bonus: quicklink weighs less than 1 KB!
- [Guess.js](https://github.com/guess-js) uses analytics reports to build a predictive model that is used to [smartly prefetch](/predictive-prefetching/) only what the user is likely to need.

Both quicklink and Guess.js use the [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) to avoid prefetching if a user is on a slow network or has [`Save-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data) turned on.

A wine company Jabong implemented prefetching with quicklink and achieved 2.7 s faster Time To Interactive on future pages.

## Prefetching under the hood <a href="#prefetching-under-the-hood" class="w-headline-link">#</a>

Resource hints are not mandatory instructions and it's up to the browser to decide if, and when, they get executed.

You can use prefetch multiple times in the same page. The browser queues up all hints and requests each resource when it's [idle](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#How_is_browser_idle_time_determined.3F). In Chrome, if a prefetch has not finished loading and the user navigates to the destined prefetch resource, the in-flight load is picked up as the navigation by the browser (other browser vendors might implement this differently).

Prefetching takes place at the ['Lowest' priority](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit), so prefetched resources do not compete for bandwidth with the resources required in the current page.

Prefetched files are stored in the [HTTP Cache](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching), or the [memory cache](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/) (depending on whether the resource is cacheable or not), for an amount of time that varies by browsers. For example, in Chrome resources are kept around for five minutes, after which the normal cache-control rules for the resource apply.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Using `prefetch` can greatly improve load times of future navigations and even make pages appear to load instantly. `prefetch` is widely supported in modern browsers, which makes it an attractive technique to improve the navigation experience for many users. This technique requires loading extra bytes that might not be used, so be mindful when you use it; only do it when necessary, and ideally, only on fast networks.

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Sep 12, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/link-prefetch/index.md)

undefined

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
