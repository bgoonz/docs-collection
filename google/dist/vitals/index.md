<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/BHaoqqR73jDWe6FL2kfw.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#web-vitals" class="w-toc__header--link">Web Vitals</a>

- [Overview](#overview)
- [Core Web Vitals](#core-web-vitals)
- [Tools to measure and report Core Web Vitals](#tools-to-measure-and-report-core-web-vitals)
- [Recommendations for improving your scores](#recommendations-for-improving-your-scores)
- [Other Web Vitals](#other-web-vitals)
- [Evolving Web Vitals](#evolving-web-vitals)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

# Web Vitals

Apr 30, 2020 <span class="w-author__separator">•</span> Updated Jul 21, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Philip Walton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/philipwalton/)

<a href="/authors/philipwalton/" class="w-author__name-link">Philip Walton</a>

- <a href="https://twitter.com/philwalton" class="w-author__link">Twitter</a>
- <a href="https://github.com/philipwalton" class="w-author__link">GitHub</a>
- <a href="https://philipwalton.com" class="w-author__link">Blog</a>

Optimizing for quality of user experience is key to the long-term success of any site on the web. Whether you're a business owner, marketer, or developer, Web Vitals can help you quantify the experience of your site and identify opportunities to improve.

## Overview <a href="#overview" class="w-headline-link">#</a>

Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Google has provided a number of tools over the years to measure and report on performance. Some developers are experts at using these tools, while others have found the abundance of both tools and metrics challenging to keep up with.

Site owners should not have to be performance gurus in order to understand the quality of experience they are delivering to their users. The Web Vitals initiative aims to simplify the landscape, and help sites focus on the metrics that matter most, the **Core Web Vitals**.

## Core Web Vitals <a href="#core-web-vitals" class="w-headline-link">#</a>

Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable [in the field](/user-centric-performance-metrics/#how-metrics-are-measured), and reflects the real-world experience of a critical [user-centric](/user-centric-performance-metrics/#how-metrics-are-measured) outcome.

The metrics that make up Core Web Vitals will [evolve](#evolving-web-vitals) over time. The current set for 2020 focuses on three aspects of the user experience—_loading_, _interactivity_, and _visual stability_—and includes the following metrics (and their respective thresholds):

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" alt="Largest Contentful Paint threshold recommendations" width="400" height="350" /> <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg" alt="First Input Delay threshold recommendations" width="400" height="350" /> <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg" alt="Cumulative Layout Shift threshold recommendations" width="400" height="350" />

- **[Largest Contentful Paint (LCP)](/lcp/)**: measures _loading_ performance. To provide a good user experience, LCP should occur within **2.5 seconds** of when the page first starts loading.
- **[First Input Delay (FID)](/fid/)**: measures _interactivity_. To provide a good user experience, pages should have a FID of **100 milliseconds** or less.
- **[Cumulative Layout Shift (CLS)](/cls/)**: measures _visual stability_. To provide a good user experience, pages should maintain a CLS of **0.1.** or less.

For each of the above metrics, to ensure you're hitting the recommended target for most of your users, a good threshold to measure is the **75th percentile** of page loads, segmented across mobile and desktop devices.

Tools that assess Core Web Vitals compliance should consider a page passing if it meets the recommended targets at the 75th percentile for all of the above three metrics.

To learn more about the research and methodology behind these recommendations, see: [Defining the Core Web Vitals metrics thresholds](/defining-core-web-vitals-thresholds/)

### Tools to measure and report Core Web Vitals <a href="#tools-to-measure-and-report-core-web-vitals" class="w-headline-link">#</a>

Google believes that the Core Web Vitals are critical to all web experiences. As a result, it is committed to surfacing these metrics [in all of its popular tools](/vitals-tools/). The following sections details which tools support the Core Web Vitals.

#### Field tools to measure Core Web Vitals <a href="#field-tools-to-measure-core-web-vitals" class="w-headline-link">#</a>

The [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) collects anonymized, real user measurement data for each Core Web Vital. This data enables site owners to quickly assess their performance without requiring them to manually instrument analytics on their pages, and powers tools like [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), and Search Console's [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520).

<table><tbody><tr class="odd"><td> </td><td>LCP</td><td>FID</td><td>CLS</td></tr><tr class="even"><td><a href="https://developers.google.com/web/tools/chrome-user-experience-report">Chrome User Experience Report</a></td><td>✔</td><td>✔</td><td>✔</td></tr><tr class="odd"><td><a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a></td><td>✔</td><td>✔</td><td>✔</td></tr><tr class="even"><td><a href="https://support.google.com/webmasters/answer/9205520">Search Console (Core Web Vitals report)</a></td><td>✔</td><td>✔</td><td>✔</td></tr></tbody></table>

For guidance on how to use these tools, and which tool is right for your use case, see: [Getting started with measuring Web Vitals](/vitals-measurement-getting-started/)

The data provided by Chrome User Experience Report offers a quick way to assess the performance of sites, but it does not provide the detailed, per-pageview telemetry that is often necessary to accurately diagnose, monitor, and quickly react to regressions. As a result, we strongly recommend that sites set up their own real-user monitoring.

#### Measure Core Web Vitals in JavaScript <a href="#measure-core-web-vitals-in-javascript" class="w-headline-link">#</a>

Each of the Core Web Vitals can be measured in JavaScript using standard web APIs.

The easiest way to measure all the Core Web Vitals is to use the [web-vitals](https://github.com/GoogleChrome/web-vitals) JavaScript library, a small, production-ready wrapper around the underlying web APIs that measures each metric in a way that accurately matches how they're reported by all the Google tools listed above.

With the [web-vitals](https://github.com/GoogleChrome/web-vitals) library, measuring each metric is as simple as calling a single function (see the documentation for complete [usage](https://github.com/GoogleChrome/web-vitals#usage) and [API](https://github.com/GoogleChrome/web-vitals#api) details):

    import {getCLS, getFID, getLCP} from 'web-vitals';

    function sendToAnalytics(metric) {
      const body = JSON.stringify(metric);
      // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
      (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
          fetch('/analytics', {body, method: 'POST', keepalive: true});
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getLCP(sendToAnalytics);

Once you've configured your site to use the [web-vitals](https://github.com/GoogleChrome/web-vitals) library to measure and send your Core Web Vitals data to an analytics endpoint, the next step is to aggregate and report on that data to see if your pages are meeting the recommended thresholds for at least 75% of page visits.

While some analytics providers have built-in support for Core Web Vitals metrics, even those that don't should include basic custom metric features that allow you to measure Core Web Vitals in their tool.

One example of this is the [Web Vitals Report](https://github.com/GoogleChromeLabs/web-vitals-report), which allows site owners to measure their Core Web Vitals using Google Analytics. For guidance on measuring Core Web Vitals using other analytics tools, see [Best practices for measuring Web Vitals in the field](/vitals-field-measurement-best-practices/).

You can also report on each of the Core Web Vitals without writing any code using the [Web Vitals Chrome Extension](https://github.com/GoogleChrome/web-vitals-extension). This extension uses the [web-vitals](https://github.com/GoogleChrome/web-vitals) library to measure each of these metrics and display them to users as they browse the web.

This extension can be helpful in understanding the performance of your own sites, your competitor's sites, and the web at large.

<table><thead><tr class="header"><th> </th><th>LCP</th><th>FID</th><th>CLS</th></tr></thead><tbody><tr class="odd"><td><a href="https://github.com/GoogleChrome/web-vitals">web-vitals</a></td><td>✔</td><td>✔</td><td>✔</td></tr><tr class="even"><td><a href="https://github.com/GoogleChrome/web-vitals-extension">Web Vitals Extension</a></td><td>✔</td><td>✔</td><td>✔</td></tr></tbody></table>

Alternatively, developers who prefer to measure these metrics directly via the underlying web APIs can refer to these metric guides for implementation details:

- [Measure LCP in JavaScript](/lcp/#measure-lcp-in-javascript)
- [Measure FID in JavaScript](/fid/#measure-fid-in-javascript)
- [Measure CLS in JavaScript](/cls/#measure-cls-in-javascript)

For additional guidance on how to measure these metrics using popular analytics services (or your own in-house analytics tools), see: [Best practices for measuring Web Vitals in the field](/vitals-field-measurement-best-practices/)

#### Lab tools to measure Core Web Vitals <a href="#lab-tools-to-measure-core-web-vitals" class="w-headline-link">#</a>

While all of the Core Web Vitals are, first and foremost, field metrics, many of them are also measurable in the lab.

Lab measurement is the best way to test the performance of features during development—before they've been released to users. It's also the best way to catch performance regressions before they happen.

The following tools can be used to measure the Core Web Vitals in a lab environment:

<table><thead><tr class="header"><th> </th><th>LCP</th><th>FID</th><th>CLS</th></tr></thead><tbody><tr class="odd"><td><a href="https://developers.google.com/web/tools/chrome-devtools">Chrome DevTools</a></td><td>✔</td><td>✘ (use <a href="/tbt/">TBT</a> instead)</td><td>✔</td></tr><tr class="even"><td><a href="https://developers.google.com/web/tools/lighthouse">Lighthouse</a></td><td>✔</td><td>✘ (use <a href="/tbt/">TBT</a> instead)</td><td>✔</td></tr></tbody></table>

Tools like Lighthouse that load pages in a simulated environment without a user cannot measure FID (there is no user input). However, the Total Blocking Time (TBT) metric is lab-measurable and is an excellent proxy for FID. Performance optimizations that improve TBT in the lab should improve FID in the field (see performance recommendations below).

While lab measurement is an essential part of delivering great experiences, it is not a substitute for field measurement.

The performance of a site can vary dramatically based on a user's device capabilities, their network conditions, what other processes may be running on the device, and how they're interacting with the page. In fact, each of the Core Web Vitals metrics can have its score affected by user interaction. Only field measurement can accurately capture the complete picture.

### Recommendations for improving your scores <a href="#recommendations-for-improving-your-scores" class="w-headline-link">#</a>

Once you've measured the Core Web Vitals and identified areas for improvement, the next step is to optimize. The following guides offer specific recommendations for how to optimize your pages for each of the Core Web Vitals:

- [Optimize LCP](/optimize-lcp/)
- [Optimize FID](/optimize-fid/)
- [Optimize CLS](/optimize-cls/)

## Other Web Vitals <a href="#other-web-vitals" class="w-headline-link">#</a>

While the Core Web Vitals are the critical metrics for understanding and delivering a great user experience, there are other vital metrics as well.

These other Web Vitals often serve as proxy or supplemental metrics for the Core Web Vitals, to help capture a larger part of the experience or to aid in diagnosing a specific issue.

For example, the metrics [Time to First Byte (TTFB)](/time-to-first-byte/) and [First Contentful Paint (FCP)](/fcp/) are both vital aspects of the _loading_ experience, and are both useful in diagnosing issues with LCP (slow [server response times](/overloaded-server/) or [render-blocking resources](/render-blocking-resources/), respectively).

Similarly, metrics like [Total Blocking Time (TBT)](/tbt/) and [Time to Interactive (TTI)](/tti/) are lab metrics that are vital in catching and diagnosing potential _interactivity_ issues that will impact FID. However, they are not part of the Core Web Vitals set because they are not field-measurable, nor do they reflect a [user-centric](/user-centric-performance-metrics/#how-metrics-are-measured) outcome.

## Evolving Web Vitals <a href="#evolving-web-vitals" class="w-headline-link">#</a>

Web Vitals and Core Web Vitals represent the best available signals developers have today to measure quality of experience across the web, but these signals are not perfect and future improvements or additions should be expected.

The **Core Web Vitals** are relevant to all web pages and featured across relevant Google tools. Changes to these metrics will have wide-reaching impact; as such, developers should expect the definitions and thresholds of the Core Web Vitals to be stable, and updates to have prior notice and a predictable, annual cadence.

The other Web Vitals are often context or tool specific, and may be more experimental than the Core Web Vitals. As such, their definitions and thresholds may change with greater frequency.

For all Web Vitals, changes will be clearly documented in this public [CHANGELOG](http://bit.ly/chrome-speed-metrics-changelog).

<a href="/tags/metrics/" class="w-chip">Metrics</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jul 21, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/vitals/index.md)

<a href="/learn-web-vitals" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to all articles</a>

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
