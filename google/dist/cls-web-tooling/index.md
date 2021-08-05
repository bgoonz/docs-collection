<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format" alt="The Lighthouse Scoring Calculator" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/ENrTmCSZl69N9gmf0twL.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#evolving-cumulative-layout-shift-in-web-tooling" class="w-toc__header--link">Evolving Cumulative Layout Shift in web tooling</a>

- [Rolling out the windowing adjustment to CLS](#rolling-out-the-windowing-adjustment-to-cls)
- ["Old" CLS](#)
- [Updating the CLS weighting in Lighthouse](#updating-the-cls-weighting-in-lighthouse)
- [Measuring in the field yourself](#measuring-in-the-field-yourself)
- [Additional updates](#additional-updates)
- [Conclusions](#conclusions)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Evolving Cumulative Layout Shift in web tooling

Starting today, a change to CLS has been rolled out across a number of Chrome's web tooling surfaces including Lighthouse, PageSpeed Insights, and Chrome UX Report.

Jun 2, 2021

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/IyB0bE6NGAvhRJkD6wRz.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Elizabeth Sweeny" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/IyB0bE6NGAvhRJkD6wRz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/IyB0bE6NGAvhRJkD6wRz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/IyB0bE6NGAvhRJkD6wRz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/IyB0bE6NGAvhRJkD6wRz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/IyB0bE6NGAvhRJkD6wRz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/egsweeny/)

<a href="/authors/egsweeny/" class="w-author__name-link">Elizabeth Sweeny</a>

- <a href="https://twitter.com/egsweeny" class="w-author__link">Twitter</a>
- <a href="https://github.com/egsweeny" class="w-author__link">GitHub</a>

Today we would like to share how we are evolving measurement of the [Cumulative Layout Shift](/cls) (CLS) metric across a number of Chrome's web tooling surfaces. For developers, these changes will better reflect the user-experience for [long-lived pages](/evolving-cls/) (such as those with infinite scroll or single-page apps). These updates to CLS will be rolling out to tools including Lighthouse, PageSpeed Insights, and Chrome UX Report.

We all wish we saw fewer layout shifts on the web. This is where the CLS metric has proved useful in measuring the visual stability of a web page. It helps to encourage sites to better set dimensions for content, such as images or ads, that may contribute to surprising jumps of content for their users.

The metric is named "cumulative" because the score of each individual shift is summed throughout the lifespan of a page. While all layout shifts on the web cause poor user experiences, long-lived pages like Single-Page Apps (SPAs) or infinite scroll apps naturally accumulate more CLS over time. By capping the aggregation to the worst 'window' of shifts, CLS can now be more consistently measured regardless of session duration.

As we announced in [Evolving the CLS metric](/evolving-cls/), we are adjusting the CLS metric to a [maximum session window with a 1 second gap, capped at 5 seconds](/evolving-cls/), this update better reflects the user experience for long lived pages. With this change in place, 70% of origins should not expect to see any CLS change at the 75th percentile, and the remaining 30% of origins will see an improvement.

## Rolling out the windowing adjustment to CLS <a href="#rolling-out-the-windowing-adjustment-to-cls" class="w-headline-link">#</a>

We've talked about the updated CLS definition being a max session window with a 1 second gap, capped at 5 seconds. What does that mean for tools?

Starting today, this change to CLS has been rolled out across a number of Chrome's web tooling surfaces including Lighthouse, PageSpeed Insights, and Chrome UX Report. Below you can see a summary of the CLS windowing adjustment rollout, as well as which tools still provide the ability to benchmark against the original implementation.

Tool

CLS windowing adjustment 'live'

"Old" CLS Availability

Lighthouse DevTools Panel

Canary channel, 2 June 2021

N/A

[Lighthouse CLI](https://developers.google.com/web/tools/lighthouse#cli)

v8, released 1 June 2021

Available as totalCumulativeLayoutShift in Lighthouse v8

[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

v0.7.3, 3 June 2021

N/A

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) (PSI)

1 June 2021

NA

[PSI API](https://developers.google.com/speed/docs/insights/v5/get-started)

1 June 2021

Available in the `lighthouseResult` as `totalCumulativeLayoutShift`. Not available in the field `loadingExperience` data

[Chrome UX Report (CrUX) - BigQuery](https://web.dev/chrome-ux-report-bigquery/)

202105 dataset, published 8 June 2021

Available as `experimental.uncapped_cumulative_layout_shift` through 202111

[Chrome UX Report (CrUX) - API](https://developers.google.com/web/tools/chrome-user-experience-report/api/reference)

1 June 2021

After 1 June 2021, available as `experimental_uncapped_cumulative_layout_shift` December 14th, 2021

Chrome DevTools will also be updated to support the windowing adjustment shortly. The update to CLS has also been made to [Search Console](https://search.google.com/search-console/about) and will be reflective from 1 June, 2021.

For most developers, this change is expected to happen seamlessly with no action needed to take advantage of data from the fix.

## "Old" CLS <a href="#%22old%22-cls" class="w-headline-link">#</a>

As a reminder, the "old" CLS measures layout shift over the entire lifespan of the page. As some developers may wish to monitor the older definition of CLS alongside the windowing-adjustment, we have good news to share: we are exposing "old CLS" in Lighthouse and CrUX.

In Lighthouse v8, it's available in the JSON as `audits['cumulative-layout-shift'].details.items[0].totalCumulativeLayoutShift`.

You'll find it as `experimental_uncapped_cumulative_layout_shift` in the CrUX API and as `experimental.uncapped_cumulative_layout_shift` in CrUX BigQuery.

After June 1st, [the following CrUX API request](https://developers.google.com/web/tools/chrome-user-experience-report/api/reference/rest/v1/records/queryRecord?apix_params=%7B%22resource%22%3A%7B%22origin%22%3A%22https%3A%2F%2Fweb.dev%22%2C%22metrics%22%3A%5B%22experimental_uncapped_cumulative_layout_shift%22%5D%7D%7D) will return the "old CLS" metric:

    {
      "origin": "https://web.dev",
      "metrics": [
        "experimental_uncapped_cumulative_layout_shift"
      ]
    }

After June 8, the following [CrUX BigQuery](https://developers.google.com/web/tools/chrome-user-experience-report/bigquery/getting-started) will compare old and new CLS:

    WITH
      new_data AS (
      SELECT
        cls
      FROM
        `chrome-ux-report.all.202105`,
        UNNEST(layout_instability.cumulative_layout_shift.histogram.bin) AS cls
      WHERE
        origin = 'https://web.dev'
        AND effective_connection_type.name = '4G'
        AND form_factor.name = 'phone'),
      old_data AS (
      SELECT
        uncapped_cls
      FROM
        `chrome-ux-report.all.202105`,
        UNNEST(experimental.uncapped_cumulative_layout_shift.histogram.bin) AS uncapped_cls
      WHERE
        origin = 'https://web.dev'
        AND effective_connection_type.name = '4G'
        AND form_factor.name = 'phone')
    SELECT
      cls.start AS start,
      cls.`END` AS `end`,
      cls.density AS cls_density,
      uncapped_cls.density AS uncapped_cls_density
    FROM
      new_data
    INNER JOIN
      old_data
    ON
      new_data.cls.start = old_data.uncapped_cls.start

You will be able to continue relying on this data to be present for a period of up to 6 months, with "old CLS" being retired on December 14th, 2021.

## Updating the CLS weighting in Lighthouse <a href="#updating-the-cls-weighting-in-lighthouse" class="w-headline-link">#</a>

When CLS was first introduced in Lighthouse, it was a brand new sparkly metric. As such, in order to make sure developers had time to test, benchmark, and optimize against it, CLS was weighed less heavily in the performance score.

Now, after having had some time in the hands of developers, the Lighthouse score has increased the weight of CLS from 5% to 15%, consistent with the methodology of having Core Web Vitals be the most heavily weighted metrics in the Lighthouse score.

You can find the updated weightings of metrics in Lighthouse v8 in the [scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/).

<img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format" alt="Lighthouse scoring calculator" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/UAslFmRMON2y5qtY1TZE.png?auto=format&amp;w=1600 1600w" width="800" height="405" />

Lighthouse 8.0's CLS implementation includes both windowing and CLS contribution from subframes. Prior to 8.0, CLS in Lighthouse didn't include subframes' CLS in the metric calculation, but now does. And just for confirmation, field CLS measured by CrUX also handles windowing and subframes similarly.

Still, the primary difference between lab and field CLS is that lab CLS's window of observation ends at "fully loaded" as determined under lab conditions, whereas in the field, the window of observation extends to the entire page lifetime, including post-load activity. That said, the windowing adjustment does mitigate this difference substantially.

## Measuring in the field yourself <a href="#measuring-in-the-field-yourself" class="w-headline-link">#</a>

Should you wish to measure the latest CLS implementation, you can also record this for your field data via RUM using the [following](/cls/#measure-cls-in-javascript) PerformanceObserver snippet.

Or by relying directly on the [Web Vitals JavaScript library](https://github.com/GoogleChrome/web-vitals), which has also been updated with this change.

## Additional updates <a href="#additional-updates" class="w-headline-link">#</a>

Outside of the updates to Cumulative Layout Shift, the following metrics-related updates have also been made to our web tooling:

- We're updating to [the most recent definition of the Largest Contentful Paint metric](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/2020_11_lcp.md). CrUX API, PSI, PSI API, Search Console will update on June 1, 2021. CrUX BigQuery will update on June 8, 2021.
- In CrUX, First Contentful Paint tri-binning thresholds have been updated to be, Good: \[0-1.8s\], Needs Improvement: (1.8s-3s), Poor: \[3s-∞\]

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

We expect this change to reflect a smooth transition for most sites and encourage you to check out [Web Vitals](/vitals/) and [Optimize CLS](optimize-cls) for tips and tricks on how to measure and optimize your layout shifts away. As always, feel free to reach out on the [web-vitals-feedback group](https://groups.google.com/g/web-vitals-feedback) for feedback about the metrics and our tooling specific feedback forums for [Lighthouse](https://github.com/GoogleChrome/lighthouse), and [Chrome UX Report](https://groups.google.com/a/chromium.org/g/chrome-ux-report) for tooling issues. Cheers!

_With thanks to Johannes Henkel, Rick Viscomi, Vivek Sekhar, Rachel Andrew, Milica Mihajlija, Jeff Jose and Paul Irish for their feedback._

_Hero image by Barn Images / @barnimages on [Unsplash](https://unsplash.com/photos/t5YUoHW6zRo)_

<a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jun 2, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/cls-web-tooling/index.md)

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
