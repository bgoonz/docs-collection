<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format" alt="How to measure Web Vitals with your current analytics tool" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#best-practices-for-measuring-web-vitals-in-the-field" class="w-toc__header--link">Best practices for measuring Web Vitals in the field</a>

- [Use custom metrics or events](#use-custom-metrics-or-events)
- [Ensure you can report a distribution](#ensure-you-can-report-a-distribution)
- [Send your data at the right time](#send-your-data-at-the-right-time)
- [Monitor performance over time](#monitor-performance-over-time)
- [Version your changes](#version-your-changes)
- [Run experiments](#run-experiments)
- [Ensure measurement doesn't affect performance](#ensure-measurement-doesn't-affect-performance)
- [Defer your analytics](#defer-your-analytics)
- [Do not create long tasks](#do-not-create-long-tasks)
- [Use non-blocking APIs](#use-non-blocking-apis)
- [Don't track more than what you need](#don't-track-more-than-what-you-need)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Best practices for measuring Web Vitals in the field

How to measure Web Vitals with your current analytics tool.

May 27, 2020 <span class="w-author__separator">•</span> Updated Jul 21, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Philip Walton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ovBM8MF9rYDxVVHUVlcG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/philipwalton/)

<a href="/authors/philipwalton/" class="w-author__name-link">Philip Walton</a>

- <a href="https://twitter.com/philwalton" class="w-author__link">Twitter</a>
- <a href="https://github.com/philipwalton" class="w-author__link">GitHub</a>
- <a href="https://philipwalton.com" class="w-author__link">Blog</a>

Having the ability to measure and report on the real-world performance of your pages is critical for diagnosing and improving performance over time. Without [field data](/user-centric-performance-metrics/#in-the-field), it's impossible to know for sure whether the changes you're making to your site are actually achieving their desired results.

Many popular [Real User Monitoring (RUM)](https://en.wikipedia.org/wiki/Real_user_monitoring) analytics providers already support the [Core Web Vitals](/vitals/#core-web-vitals) metrics in their tools (as well as many [other Web Vitals](/vitals/#other-web-vitals)). If you're currently using one of these RUM analytics tools, you're in great shape to assess how well the pages on your site meet the [recommended Core Web Vitals thresholds](/vitals/#core-web-vitals) and prevent regressions in the future.

While we do recommend using an analytics tool that supports the Core Web Vitals metrics, if the analytics tool you're currently using does not support them, you don't necessarily need to switch. Almost all analytics tools offer a way to define and measure [custom metrics](https://support.google.com/analytics/answer/2709828) or [events](https://support.google.com/analytics/answer/1033068), which means you can likely use your current analytics provider to measure the Core Web Vitals metrics and add them to your existing analytics reports and dashboards.

This guide discusses best practices for measuring Core Web Vitals metrics (or any custom metrics) with a third-party or in-house analytics tool. It can also serve as a guide for analytics vendors wishing to add Core Web Vitals support to their service.

## Use custom metrics or events <a href="#use-custom-metrics-or-events" class="w-headline-link">#</a>

As mentioned above, most analytics tools let you measure custom data. If your analytics tool supports this, you should be able to measure each of the Core Web Vitals metrics using this mechanism.

Measuring custom metrics or events in an analytics tool is generally a three-step process:

1.  [Define or register](https://support.google.com/analytics/answer/2709829?hl=en&ref_topic=2709827) the custom metric in your tool's admin (if required). _(Note: not all analytics providers require custom metrics to be defined ahead of time.)_
2.  Compute the value of the metric in your frontend JavaScript code.
3.  Send the metric value to your analytics backend, ensuring the name or ID matches what was defined in step 1 _(again, if required)_.

For steps 1 and 3, you can refer to your analytics tool's documentation for instructions. For step 2 you can use the [web-vitals](https://github.com/GoogleChrome/web-vitals) JavaScript library to compute the value of each of the Core Web Vitals metrics.

The following code sample shows how easy it can be to track these metrics in code and send them to an analytics service.

    import {getCLS, getFID, getLCP} from 'web-vitals';

    function sendToAnalytics({name, value, id}) {
      const body = JSON.stringify({name, value, id});
      // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
      (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
          fetch('/analytics', {body, method: 'POST', keepalive: true});
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getLCP(sendToAnalytics);

## Ensure you can report a distribution <a href="#ensure-you-can-report-a-distribution" class="w-headline-link">#</a>

Once you've computed the values for each of the Core Web Vitals metrics and sent them to your analytics service using a custom metric or event, the next step is to build a report or dashboard displaying the values that have been collected.

To ensure you're meeting the [recommended Core Web Vitals thresholds](/vitals/#core-web-vitals), you'll need your report to display the value of each metric at the 75th percentile.

If your analytics tool does not offer quantile reporting as a built-in feature, you can probably still get this data manually by generating a report that lists every metric value sorted in ascending order. Once this report is generated, the result that is 75% of the way through the full, sorted list of all values in that report will be the 75th percentile for that metric—and this will be the case no matter how you segment your data (by device type, connection type, country, etc.).

If your analytic tool does not give you metric-level reporting granularity by default, you can probably achieve the same result if your analytics tool supports [custom dimensions](https://support.google.com/analytics/answer/2709828). By setting a unique, custom dimension value for each individual metric instance you track, you should be able to generate a report, broken down by individual metric instances, if you include the custom dimension in the report configuration. Since each instance will have a unique dimension value, no grouping will occur.

The [Web Vitals Report](https://github.com/GoogleChromeLabs/web-vitals-report) is an example of this technique that uses Google Analytics. The code for the report is [open source](https://github.com/GoogleChromeLabs/web-vitals-report), so developers can reference it as an example of the techniques outlined in this section.

![Screenshots of the Web VitalsReport](https://user-images.githubusercontent.com/326742/101584324-3f9a0900-3992-11eb-8f2d-182f302fb67b.png)

Tip: The [`web-vitals`](https://github.com/GoogleChrome/web-vitals) JavaScript library provides an ID for each metric instance reported making it possible to build distributions in most analytics tools. See the [`Metric`](https://github.com/GoogleChrome/web-vitals#metric) interface documentation for more details.

## Send your data at the right time <a href="#send-your-data-at-the-right-time" class="w-headline-link">#</a>

Some performance metrics can be calculated once the page has finished loading, while others (like CLS) consider the entire lifespan of the page—and are only final once the page has started unloading.

This can be problematic, however, since both the `beforeunload` and `unload` events are not reliable (especially on mobile) and their use is [not recommended](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#legacy-lifecycle-apis-to-avoid) (since they can prevent a page from being eligible for the [Back-Forward Cache](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#page-navigation-cache)).

For metrics that track the entire lifespan of a page, it's best to send whatever the metric's current value is during the `visibilitychange` event, whenever the page's visibility state changes to `hidden`. This is because—once the page's visibility state changes to `hidden`—there's no guarantee that any script on that page will be able to run again. This is especially true on mobile operating systems where the browser app itself can be closed without any page callbacks being fired.

Note that mobile operating systems do generally fire the `visibilitychange` event when switching tabs, switching apps, or closing the browser app itself. They also fire the `visibilitychange` event when closing a tab or navigating to a new page. This makes the `visibilitychange` event far more reliable than the `unload` or `beforeunload` events.

**Gotchas!**

Due to [some browser bugs](https://github.com/w3c/page-visibility/issues/59#issue-554880545), there are a few cases where the `visibilitychange` event does not fire. If you're building your own analytics library, it's important to be aware of these bugs. Note that the [web-vitals](https://github.com/GoogleChrome/web-vitals) JavaScript library does account for all of these bugs.

## Monitor performance over time <a href="#monitor-performance-over-time" class="w-headline-link">#</a>

Once you've updated your analytics implementation to both track and report on the Core Web Vitals metrics, the next step is to track how changes to your site affect performance over time.

### Version your changes <a href="#version-your-changes" class="w-headline-link">#</a>

A naive (and ultimately unreliable) approach to tracking changes is to deploy changes to production and then assume that all metrics received after the deployment date correspond to the new site and all metrics received before the deployment date correspond to the old site. However, any number of factors (including caching at the HTTP, service worker, or CDN layer) can prevent this from working.

A much better approach is to create a unique version for each deployed change and then track that version in your analytics tool. Most analytics tools support setting a version. If yours does not, you can create a custom dimension and set that dimension to your deployed version.

### Run experiments <a href="#run-experiments" class="w-headline-link">#</a>

You can take versioning one step further by tracking multiple versions (or experiments) at the same time.

If your analytics tool lets you define experiment groups, use that feature. Otherwise, you can use custom dimensions to ensure each of your metric values can be associated with a particular experiment group in your reports.

With experimentation in place in your analytics, you can roll out an experimental change to a subset of your users and compare the performance of that change to the performance of users in the control group. Once you have confidence that a change does indeed improve performance, you can roll it out to all users.

Experiment groups should always be set on the server. Avoid using any experimentation or A/B testing tool that runs on the client. These tools will typically block rendering until a user's experiment group is determined, which can be detrimental to your LCP times.

## Ensure measurement doesn't affect performance <a href="#ensure-measurement-doesn&#39;t-affect-performance" class="w-headline-link">#</a>

When measuring performance on real users, it's absolutely critical that any performance measurement code you're running does not negatively impact the performance of your page. If it does, then any conclusions you attempt to draw on how your performance affects your business will be unreliable, as you'll never know if the presence of the analytics code itself is having the largest negative impact.

Always follow these principles when deploying RUM analytics code on your production site:

### Defer your analytics <a href="#defer-your-analytics" class="w-headline-link">#</a>

Analytics code should always be loaded in an asynchronous, non-blocking way, and generally it should be loaded last. If you load your analytics code in a blocking way, it can negatively affect LCP.

All of the APIs used to measure the Core Web Vitals metrics were specifically designed to support asynchronous and deferred script loading (via the [`buffered`](https://www.chromestatus.com/feature/5118272741572608) flag), so there's no need to rush to get your scripts loaded early.

In the event that you're measuring a metric that cannot be computed later in the page load timeline, you should inline _only_ the code that needs to run early into the `<head>` of your document (so it's not a [render-blocking request](/render-blocking-resources/)) and defer the rest. Do not load all your analytics early just because a single metric requires it.

### Do not create long tasks <a href="#do-not-create-long-tasks" class="w-headline-link">#</a>

Analytics code often runs in response to user input, but if your analytics code is conducting a lot of DOM measurements or using other processor-intensive APIs the analytics code itself can cause poor input responsiveness. In addition, if the JavaScript file containing your analytics code is large, executing that file can block the main thread and negatively affect FID.

### Use non-blocking APIs <a href="#use-non-blocking-apis" class="w-headline-link">#</a>

APIs like `sendBeacon()` and `requestIdleCallback()` are specifically designed for running non-critical tasks in a way that doesn't block user-critical tasks.

These APIs are great tools to use in a RUM analytics library.

In general, all analytics beacons should be sent using the `sendBeacon()` API (if available), and all passive analytics measurement code should be run during idle periods.

For guidance on how to maximize the use of idle time, while still ensuring code can be run urgently when needed (like when a user is unloading the page), refer to the [idle-until-urgent](https://philipwalton.com/articles/idle-until-urgent/) pattern.

### Don't track more than what you need <a href="#don&#39;t-track-more-than-what-you-need" class="w-headline-link">#</a>

The browser exposes a lot of performance data, but just because the data is available does not necessarily mean you should record it and send it to your analytics servers.

For example, the [Resource Timing API](https://w3c.github.io/resource-timing/) provides detailed timing data for every single resource loaded on your page. However, it's unlikely that all of that data will be necessarily or useful in improving resource load performance.

In short, don't just track data because it's there, ensure the data will be used before consuming resources tracking it.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jul 21, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/vitals-field-measurement-best-practices/index.md)

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
