<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format" alt="Guess.js logo" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/1jRaJzDtk6w4vYxbqDn3.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#faster-web-navigation-with-predictive-prefetching" class="w-toc__header--link">Faster web navigation with predictive prefetching</a>

- [Code splitting for faster web apps](#code-splitting-for-faster-web-apps)
- [Prefetching JavaScript](#prefetching-javascript)
- [Predictive prefetching with Guess.js](#predictive-prefetching-with-guess.js)
- [Integration with frameworks](#integration-with-frameworks)
- [How does Guess.js work?](#how-does-guess.js-work)
- [Learn more](#learn-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Faster web navigation with predictive prefetching

Learn about predictive prefetching and how Guess.js implements it.

Jul 8, 2019

[<img src="https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Minko Gechev" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mgechev/)

<a href="/authors/mgechev/" class="w-author__name-link">Minko Gechev</a>

- <a href="https://twitter.com/mgechev" class="w-author__link">Twitter</a>
- <a href="https://github.com/mgechev" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@mgechev" class="w-author__link">Glitch</a>
- <a href="https://blog.mgechev.com/" class="w-author__link">Blog</a>

In my [Faster Web Navigation with Predictive Prefetching](https://www.youtube.com/watch?v=0jB4YWgAxUo) session at Google I/O 2019, I began by talking about optimizing web apps with code splitting and the potential performance implications for subsequent page navigation. In the second part of the talk, I discussed how to improve navigation speed by using Guess.js to set up predictive prefetching:

## Code splitting for faster web apps <a href="#code-splitting-for-faster-web-apps" class="w-headline-link">#</a>

Web apps are slow, and JavaScript is among the most expensive resources that you ship. Waiting for a slow web app to load can frustrate your users and decrease conversions.

<img src="https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format" alt="Slow web apps are stressful." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Ex1RhD84fTzpNwYM6Ocy.png?auto=format&amp;w=1600 1600w" width="800" height="438" />

Lazy-loading is an efficient technique to reduce the bytes of JavaScript that you're transferring over the wire. You can use several techniques to lazy-load JavaScript, including:

- Component-level code splitting
- Route-level code splitting

With component-level code splitting, you can move individual components into separate JavaScript chunks. On particular events, you can load the relevant scripts and render the components.

With route-level code splitting, however, you move entire _routes_ into independent chunks. When users transition from one route to another, they have to download the associated JavaScript and bootstrap the requested page. These operations can lead to significant delays, especially on slow networks.

## Prefetching JavaScript <a href="#prefetching-javascript" class="w-headline-link">#</a>

Prefetching allows the browser to download and cache resources that the user is likely to need soon. The usual method is to use `<link rel="prefetch">`, but there are two common pitfalls:

- Prefetching too many resources (_overfetching_) consumes a lot of data.
- Some resources the user needs may never be prefetched.

Predictive prefetching solves these problems by using a report of users' navigational patterns to determine what assets to prefetch.

<img src="https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format" alt="Prefetching example" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/vkK5KhZKhSo6bDIBuVrn.png?auto=format&amp;w=1600 1600w" width="800" height="517" />

## Predictive prefetching with Guess.js <a href="#predictive-prefetching-with-guess.js" class="w-headline-link">#</a>

[Guess.js](https://github.com/guess-js) is a JavaScript library that provides predictive prefetching functionality. Guess.js consumes a report from Google Analytics or another analytics provider to build a predictive model that can be used to smartly prefetch only what the user is likely to need.

Guess.js has integrations with [Angular](https://angular.io), [Next.js](https://nextjs.org/), [Nuxt.js](https://nuxtjs.org/), and [Gatsby](https://www.gatsbyjs.org/). To use it in your application, add these lines to your webpack configuration to specify a [Google Analytics view ID](https://stackoverflow.com/questions/36898103/what-is-a-viewid-in-google-analytics):

    const { GuessPlugin } = require('guess-webpack');

    // ...
    plugins: [
       // ...
       new GuessPlugin({ GA: 'XXXXXX' })
    ]
    // ...

If you're not using Google Analytics, you can specify a `reportProvider` and download data from your favorite service.

### Integration with frameworks <a href="#integration-with-frameworks" class="w-headline-link">#</a>

To learn more about how to integrate Guess.js with your favorite framework check out these resources:

- [Using Guess.js with Angular](https://guess-js.github.io/docs/angular)
- [Using Guess.js with Next.js](https://guess-js.github.io/docs/next)
- [Using Guess.js with Nuxt.js](https://guess-js.github.io/docs/nuxt)

For a quick walkthrough on the integration with Angular, check out this video:

### How does Guess.js work? <a href="#how-does-guess.js-work" class="w-headline-link">#</a>

Here's how Guess.js implements predictive prefetching:

1.  It first extracts data for the user navigational patterns from your favorite analytics provider.
2.  It then maps the URLs from the report to the JavaScript chunks produced by webpack.
3.  Based on the extracted data, it creates a simple predictive model of which pages a user is likely to navigate to from any given page.
4.  It invokes the model for each JavaScript chunk, predicting the other chunks that are likely to be needed next.
5.  It adds prefetching instructions to each chunk.

When Guess.js is done, each chunk will contain prefetching instructions similar to:

    __GUESS__.p(
      ['a.js', 0.2],
      ['b.js', 0.8]
    )

This Guess.js-generated code is telling the browser to consider prefetching chunk `a.js` with probability `0.2` and chunk `b.js` with probability `0.8`.

Once the browser executes the code, Guess.js will check the user's connection speed. If it's sufficient, Guess.js will insert two `<link rel="prefetch">` tags in the header of the page, one for each chunk. If the user is on a high-speed network, Guess.js will prefetch both chunks. If the user has a poor network connection, Guess.js will only prefetch chunk `b.js` since it has a high probability of being needed.

## Learn more <a href="#learn-more" class="w-headline-link">#</a>

To learn more about Guess.js, check out these resources:

- [Faster Web Navigation with Predictive Prefetching](https://www.youtube.com/watch?v=0jB4YWgAxUo)
- [Introducing Guess.js - a toolkit for enabling data-driven user-experiences on the Web](https://blog.mgechev.com/2018/05/09/introducing-guess-js-data-driven-user-experiences-web/)
- [Documentation](https://guess-js.github.io)
- [Source code](https://github.com/guess-js)

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Jul 8, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/predictive-prefetching/index.md)

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
