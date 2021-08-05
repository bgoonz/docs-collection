<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format" alt="Monthly graph overlayed with stopwatches labeled LCP, FID, and CLS." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/QxMJKZcue9RS5u05XxTE.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#getting-started-with-measuring-web-vitals" class="w-toc__header--link">Getting started with measuring Web Vitals</a>

- [Measuring Web Vitals using RUM data](#measuring-web-vitals-using-rum-data)
- [Getting started](#getting-started)
- [Collecting RUM data](#collecting-rum-data)
- [The web-vitals JavaScript library](#the-web-vitals-javascript-library)
- [Data aggregation](#data-aggregation)
- [Data interpretation](#data-interpretation)
- [Measuring Web Vitals using lab data](#measuring-web-vitals-using-lab-data)
- [Considerations](#considerations)
- [Tooling](#tooling)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Getting started with measuring Web Vitals

May 27, 2020 <span class="w-author__separator">•</span> Updated May 27, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

Collecting data on your site's Web Vitals is the first step towards improving them. A well-rounded analysis will collect performance data from both real-world and lab environments. Measuring Web Vitals requires minimal code changes and can be accomplished using free tooling.

## Measuring Web Vitals using RUM data <a href="#measuring-web-vitals-using-rum-data" class="w-headline-link">#</a>

[Real User Monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring) (RUM) data, also known as field data, captures the performance experienced by a site's actual users. RUM data is what Google uses to determine whether a site meets the [recommended Core Web Vitals thresholds.](/vitals/)

### Getting started <a href="#getting-started" class="w-headline-link">#</a>

If you don't have a RUM setup, the following tools will quickly provide you with data about the real-world performance of your site. These tools are all based on the same underlying data set (the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)), but have slightly different use cases:

- **PageSpeed Insights (PSI)**: [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) reports on the aggregate page-level and origin-level performance over the past 28 days. In addition, it provides suggestions on how to improve performance. If you're looking for a single action to take in order to get started with measuring and improving your site's Web Vitals, we recommend using PSI to audit your site. PSI is available on the [web](https://developers.google.com/speed/pagespeed/insights/) and as an [API](https://developers.google.com/speed/docs/insights/v5/get-started).
- **Search Console**: [Search Console](https://search.google.com/search-console/welcome) reports performance data on a per-page basis. This makes it well-suited for identifying specific pages that need improvement. Unlike PageSpeed Insights, Search Console reporting includes historical performance data. Search Console can only be used with sites that you own and have verified ownership of.
- **CrUX dashboard**: [CrUX dashboard](https://developers.google.com/web/updates/2018/08/chrome-ux-report-dashboard) is a pre-built dashboard that surfaces CrUX data for an origin of your choosing. It is built on top of Data Studio and the setup process takes about a minute. Compared to PageSpeed Insights and Search Console, CrUX dashboard reporting includes more dimensions - for example, data can be broken down by device and connection type.

It's worth noting that although the tools listed above are well-suited for "getting started" with measuring Web Vitals, they can be useful in other contexts as well. In particular, both CrUX and PSI are available as an API and can be used to [build dashboards](https://dev.to/chromiumdev/a-step-by-step-guide-to-monitoring-the-competition-with-the-chrome-ux-report-4k1o) and other reporting.

### Collecting RUM data <a href="#collecting-rum-data" class="w-headline-link">#</a>

Although CrUX-based tools are a good starting point for investigating Web Vitals performance, we strongly recommend supplementing it with your own RUM. RUM data that you collect yourself can provide more detailed and immediate feedback on your site's performance. This makes it easier to identify issues and test possible solutions.

CrUX-based data sources report data using a granularity of approximately one month - however, the details of this vary slightly by tool. For example, PSI and Search Console report the performance observed over the past 28 days, whereas the CrUX dataset and dashboard is broken down by calendar month.

You can collect your own RUM data by using a dedicated RUM provider, or, by setting up your own tooling.

Dedicated RUM providers specialize in collecting and reporting RUM data. To use Core Web Vitals with these services, ask your RUM provider about enabling Core Web Vitals monitoring for your site.

If you don't have a RUM provider, you may be able to augment your existing analytics setup to collect and report on these metrics by using the [`web-vitals` JavaScript library](https://github.com/GoogleChrome/web-vitals). This method is explained in more detail below.

### The web-vitals JavaScript library <a href="#the-web-vitals-javascript-library" class="w-headline-link">#</a>

If you're implementing your own RUM setup for Web Vitals, the easiest way to collect Web Vitals measurements is to use the [`web-vitals`](https://github.com/GoogleChrome/web-vitals) JavaScript library. `web-vitals` is a small, modular library (~1KB) that provides a convenient API for collecting and reporting each of the [field-measurable](/user-centric-performance-metrics/#in-the-field) Web Vitals metrics.

The metrics that make up Web Vitals are not all directly exposed by the browser's built-in performance APIs - but rather built on top of them. For example, [Cumulative Layout Shift (CLS)](/cls/) is implemented using the [Layout Instability API](https://wicg.github.io/layout-instability/). By using `web-vitals`, you don't need to worry about implementing these metrics yourself; it also ensures that the data you collect matches the methodology and best practices for each metric.

For more information on implementing `web-vitals`, refer to the [documentation](https://github.com/GoogleChrome/web-vitals) and the [Best practices for measuring Web Vitals in the field](/vitals-field-measurement-best-practices/) guide.

### Data aggregation <a href="#data-aggregation" class="w-headline-link">#</a>

It is essential that you report the measurements collected by `web-vitals`. If this data is measured but not reported, you'll never see it. The `web-vitals` documentation includes examples showing how to send the data to [a generic API endpoint](https://github.com/GoogleChrome/web-vitals#send-the-results-to-an-analytics-endpoint), [Google Analytics](https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics), or [Google Tag Manager](https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-tag-manager).

If you already have a favorite reporting tool, consider using that. If not, Google Analytics is free and can be used for this purpose.

When considering which tool to use, it is helpful to think about who will need to have access to the data. Businesses typically achieve the biggest performance wins when the whole company, rather than a single department, is interested in improving performance. See [Fixing website speed cross-functionally](/fixing-website-speed-cross-functionally/) to learn how to get buy-in from different departments.

### Data interpretation <a href="#data-interpretation" class="w-headline-link">#</a>

When analyzing performance data, it's important to pay attention to the tails of the distribution. RUM data often reveals that performance varies widely - some users have fast experiences, others have slow experiences. However, using the median to summarize data can easily mask this behavior.

With regards to Web Vitals, Google uses the percentage of "good" experiences, rather than statistics like medians or averages, to determine whether a site or page meets the recommended thresholds. Specifically, for a site or page to be considered as meeting the Core Web Vitals thresholds, 75% of page visits should meet the "good" threshold for each metric.

## Measuring Web Vitals using lab data <a href="#measuring-web-vitals-using-lab-data" class="w-headline-link">#</a>

[Lab data](/user-centric-performance-metrics/#in-the-lab), also known as synthetic data, is collected from a controlled environment, rather than actual users. Unlike RUM data, lab data can be collected from pre-production environments and therefore incorporated into developer workflows and continuous integration processes. Examples of tools that collect synthetic data are Lighthouse and WebPageTest.

### Considerations <a href="#considerations" class="w-headline-link">#</a>

There will always be discrepancies between RUM data and lab data - particularly if the network conditions, device type, or location of the lab environment differs significantly from that of users. However, when it comes to collecting lab data on Web Vitals metrics in particular, there are a couple specific considerations that are important to note:

- **Cumulative Layout Shift (CLS):** The [Cumulative Layout Shift](/cls/) measured in lab environments can be artificially lower than the CLS observed in RUM data. CLS is defined as the "sum total of all individual layout shift scores for every unexpected layout shift that occurs _during the entire lifespan of the page_." However, the lifespan of a page is typically very different depending on whether it is being loaded by a real user or a synthetic performance measurement tool. Many lab tools only load the page - they don't interact with it. As a result, they only capture layout shifts that occur during initial page load. By contrast, the CLS measured by RUM tools captures [unexpected layout shifts](/cls/#expected-vs.-unexpected-layout-shifts) that occur throughout the entire lifespan of the page.
- **First Input Delay (FID):** [First Input Delay](/fid/) can't be measured in lab environments because it requires user interactions with the page. As a result, [Total Blocking Time](/tbt/) (TBT) is the recommended lab proxy for FID. TBT measures the "total amount of time between First Contentful Paint and Time to Interactive during which the page is blocked from responding to user input". Although FID and TBT are calculated differently, they are both reflections of a blocked main thread during the bootstrap process. When the main thread is blocked, the browser is delayed in responding to user interactions. FID measures the delay, if any, that occurs the first time a user tries to interact with a page.

### Tooling <a href="#tooling" class="w-headline-link">#</a>

These tools can be used to gather lab measurements of Web Vitals:

- **Web Vitals Chrome Extension:** The Web Vitals Chrome [extension](https://github.com/GoogleChrome/web-vitals-extension) measures and reports the Core Web Vitals (LCP, FID, and CLS) for a given page. This tool is intended to provide developers with real-time performance feedback as they make code changes.
- **Lighthouse:** Lighthouse reports on LCP, CLS, and TBT, and also highlights possible performance improvements. Lighthouse is available in Chrome DevTools, as a Chrome Extension, and as an npm package. Lighthouse can also be incorporated into continuous integration workflows via [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci).
- **WebPageTest:** [WebPageTest](https://webpagetest.org/) includes Web Vitals as a part of its standard reporting. WebPageTest is useful for gathering information on Web Vitals under particular device and network conditions.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: May 27, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/vitals-measurement-getting-started/index.md)

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
