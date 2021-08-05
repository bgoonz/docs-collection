<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format" alt="Apollo Mission Control Center." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/LbRdd1MCPC2zKv6ptamD.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#know-your-code-health-with-the-lesscodegreaterreportingobserverlesscodegreater-api" class="w-toc__header--link">Know your code health with the <code>ReportingObserver</code> API</a>

- [Background](#background)
- [The API](#the-api)
- [Filtered reports](#filtered-reports)
- [Buffered reports](#buffered-reports)
- [Stop observing](#stop-observing)
- [Examples](#examples)
- [Report browser interventions to an analytics provider](#report-browser-interventions-to-an-analytics-provider)
- [Be notified when APIs are going to be removed](#be-notified-when-apis-are-going-to-be-removed)
- [Conclusion](#conclusion)
- [Future work](#future)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Know your code health with the `ReportingObserver` API

Find deprecated APIs in your production apps.

Aug 21, 2019 <span class="w-author__separator">•</span> Updated May 27, 2020

[<img src="https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eric Bidelman" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/ericbidelman/)

<a href="/authors/ericbidelman/" class="w-author__name-link">Eric Bidelman</a>

- <a href="https://twitter.com/ebidel" class="w-author__link">Twitter</a>

`ReportingObserver` lets you know when your site uses a deprecated API or runs into a [browser intervention](https://www.chromestatus.com/features#intervention). The basic functionality originally landed in Chrome 69. As of Chrome 84, it can be used in workers.

    const observer = new ReportingObserver((reports, observer) => {
      for (const report of reports) {
        console.log(report.type, report.url, report.body);
      }
    }, {buffered: true});

    observer.observe();

Use the callback to send reports to a backend or analytics provider for analysis.

Why is that useful? Until this API, deprecation and intervention warnings were only available in DevTools as Console messages. Interventions, in particular, are only triggered by various real-world constraints like device and network conditions. Thus, you may never even see these messages when developing/testing a site locally. `ReportingObserver` provides a solution to this problem. When users experience potential issues in the wild, web developers can be notified about them.

`ReportingObserver` has only shipped in Chrome 69. It is being considered by other browsers.

## Background <a href="#background" class="w-headline-link">#</a>

A while back, I wrote a blog post ([Observing your web app](https://ericbidelman.tumblr.com/post/149032341876/observing-your-web-app)) because I found it fascinating how many APIs there are for monitoring the "stuff" that happens in a web app. For example, there are APIs that can observe information about the DOM: [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver), [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver), [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). [`PerformanceObserver`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) captures performance measurements. And methods like [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror) and [`window.onunhandledrejection`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection) even let us know when something goes wrong.

However, there are other types of warnings which are not captured by the existing APIs. When your site uses a deprecated API or runs up against a [browser intervention](https://www.chromestatus.com/features#intervention), DevTools is the first to tell you about them:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format" alt="Browser-initiated warnings in the DevTools Console." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/VJmhfngEVxQBSc9im0pg.png?auto=format&amp;w=1600 1600w" width="800" height="79" /><figcaption>Browser-initiated warnings in the DevTools Console.</figcaption></figure>One would naturally think `window.onerror` captures these warnings. It does not. That's because `window.onerror` does not fire for warnings generated directly by the user agent itself. It fires for runtime errors (JavaScript exceptions and syntax errors) caused by code execution.

`ReportingObserver` picks up the slack. It provides a programmatic way to be notified about browser-issued warnings such as [deprecations](https://www.chromestatus.com/features#intervention) and [interventions](https://www.chromestatus.com/features#intervention). You can use it as a reporting tool and lose less sleep wondering if users are hitting unexpected issues on your live site.

**Key Term**: `ReportingObserver` is part of a larger spec, the [Reporting API](https://developers.google.com/web/updates/2018/09/reportingapi), which provides a common way to send these different reports to a back end. The Reporting API is a generic framework to specify a set of server endpoints to report issues to.

## The API <a href="#the-api" class="w-headline-link">#</a>

`ReportingObserver` is not unlike the other `Observer` APIs such as `IntersectionObserver` and `ResizeObserver`. You give it a callback; it gives you information. The information that the callback receives is a list of issues that the page caused:

    const observer = new ReportingObserver((reports, observer) => {
      for (const report of reports) {
        // → report.type === 'deprecation'
        // → report.url === 'https://reporting-observer-api-demo.glitch.me'
        // → report.body.id === 'XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload'
        // → report.body.message === 'Synchronous XMLHttpRequest is deprecated...'
        // → report.body.lineNumber === 11
        // → report.body.columnNumber === 22
        // → report.body.sourceFile === 'https://reporting-observer-api-demo.glitch.me'
        // → report.body.anticipatedRemoval === <JS_DATE_STR> or null
      }
    });

    observer.observe();

### Filtered reports <a href="#filtered-reports" class="w-headline-link">#</a>

Reports can be pre-filtered to only observe certain report types. Right now, there are two report types: `'deprecation'` and `'intervention'`.

    const observer = new ReportingObserver((reports, observer) => {
      …
    }, {types: ['deprecation']});

### Buffered reports <a href="#buffered-reports" class="w-headline-link">#</a>

Use the `buffered: true` option when you want to see the reports that were generated before the observer instance was created:

    const observer = new ReportingObserver((reports, observer) => {
      …
    }, {types: ['intervention'], buffered: true});

This option is great for situations like lazy-loading a library that uses a `ReportingObserver`. The observer gets added late, but you don't miss out on anything that happened earlier in the page load.

### Stop observing <a href="#stop-observing" class="w-headline-link">#</a>

Stop observing using the `disconnect()` method:

    observer.disconnect();

## Examples <a href="#examples" class="w-headline-link">#</a>

### Report browser interventions to an analytics provider <a href="#report-browser-interventions-to-an-analytics-provider" class="w-headline-link">#</a>

    const observer = new ReportingObserver((reports, observer) => {
      for (const report of reports) {
        sendReportToAnalytics(JSON.stringify(report.body));
      }
    }, {types: ['intervention'], buffered: true});

    observer.observe();

### Be notified when APIs are going to be removed <a href="#be-notified-when-apis-are-going-to-be-removed" class="w-headline-link">#</a>

    const observer = new ReportingObserver((reports, observer) => {
      for (const report of reports) {
        if (report.type === 'deprecation') {
          sendToBackend(`Using a deprecated API in ${report.body.sourceFile} which will be
                         removed on ${report.body.anticipatedRemoval}. Info: ${report.body.message}`);
        }
      }
    });

    observer.observe();

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

`ReportingObserver` gives you an additional way for discovering and monitoring potential issues in your web app. It's even a useful tool for understanding the health of your code base (or lack thereof). Send reports to a backend, know about the real-world issues, update code, profit!

## Future work <a href="#future" class="w-headline-link">#</a>

In the future, my hope is that `ReportingObserver` becomes the de-facto API for catching all types of issues in JavaScript. Imagine one API to catch everything that goes wrong in your app:

- [Browser interventions](https://www.chromestatus.com/features#intervention)
- Deprecations
- [Feature Policy](https://developers.google.com/web/updates/2018/06/feature-policy) violations. See [Chromium Issue \#867471](https://crbug.com/867471).
- JS exceptions and errors (currently serviced by `window.onerror`).
- Unhandled JS promise rejections (currently serviced by `window.onunhandledrejection`)

**Additional resources**:

- [W3c spec](https://w3c.github.io/reporting/#observers)
- [chromestatus.com entry](https://www.chromestatus.com/feature/4691191559880704)

[Hero image](https://unsplash.com/photos/6SyrBaRjLJ4) by [Sieuwert Otterloo](https://unsplash.com/@sieuwert) on [Unsplash](https://unsplash.com).

<a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: May 27, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/reporting-observer/index.md)

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
