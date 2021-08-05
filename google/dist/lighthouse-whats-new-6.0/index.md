<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/93kZL2w49CLIc514qojJ.svg" alt="Lighthouse logo." class="w-hero w-hero--cover" width="1600" height="480" />

## <a href="#what&#39;s-new-in-lighthouse-6.0" class="w-toc__header--link">What's New in Lighthouse 6.0</a>

- [New metrics](#new-metrics)
- [Largest Contentful Paint (LCP)](#lcp)
- [Cumulative Layout Shift (CLS)](#cls)
- [Total Blocking Time (TBT)](#tbt)
- [Performance score update](#score)
- [Shifts in scores](#score-shifts)
- [Scoring calculator](#calculator)
- [New audits](#new-audits)
- [Unused JavaScript](#unused-javascript)
- [Accessibility audits](#a11y)
- [Maskable icon](#maskable-icon)
- [Charset declaration](#charset)
- [Lighthouse CI](#ci)
- [Renamed Chrome DevTools panel](#devtools)
- [Mobile emulation](#emulation)
- [Browser extension](#extension)
- [Budgets](#budgets)
- [Source location links](#source-location)
- [On the horizon](#horizon)
- [Thank you!](#thanks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# What's New in Lighthouse 6.0

New metrics, Performance score update, new audits, and more.

May 19, 2020

[<img src="https://web-dev.imgix.net/image/admin/JDJv4ZTKpDobwrJ8MSkZ.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Connor Clark" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/JDJv4ZTKpDobwrJ8MSkZ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/JDJv4ZTKpDobwrJ8MSkZ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/JDJv4ZTKpDobwrJ8MSkZ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/JDJv4ZTKpDobwrJ8MSkZ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/JDJv4ZTKpDobwrJ8MSkZ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/cjamcl/)

<a href="/authors/cjamcl/" class="w-author__name-link">Connor Clark</a>

- <a href="https://twitter.com/cjamcl" class="w-author__link">Twitter</a>
- <a href="https://github.com/connorjclark" class="w-author__link">GitHub</a>

Today we're releasing Lighthouse 6.0!

[Lighthouse](https://github.com/GoogleChrome/lighthouse/) is an automated website auditing tool that helps developers with opportunities and diagnostics to improve the user experience of their sites. It's available in Chrome DevTools, npm (as a Node module and a CLI), or as a browser extension (in [Chrome](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/google-lighthouse/)). It powers many Google services, including [web.dev/measure](/measure/) and [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

Lighthouse 6.0 is available immediately on npm and in [Chrome Canary](https://www.google.com/chrome/canary/). Other Google services that leverage Lighthouse will get the update by the end of the month. It will land in Chrome Stable in Chrome 84 (mid-July).

To try the Lighthouse Node CLI, use the following commands:

    npm install -g lighthouse
    lighthouse https://www.example.com --view

This version of Lighthouse comes with a large number of changes that are [listed in the 6.0 changelog](https://github.com/GoogleChrome/lighthouse/releases/tag/v6.0.0). We'll cover the highlights in this article.

- [New metrics](#new-metrics)
- [Performance score update](#score)
- [New audits](#new-audits)
- [Lighthouse CI](#ci)
- [Renamed Chrome DevTools panel](#devtools)
- [Mobile emulation](#emulation)
- [Browser extension](#extension)
- [Budgets](#budgets)
- [Source location links](#source-location)
- [On the horizon](#horizon)
- [Thank you!](#thanks)

## New metrics <a href="#new-metrics" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format" class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Yo1oNtdfEF4PhD7zHDHQ.png?auto=format&amp;w=1200 1200w" width="600" height="251" /></figure>Lighthouse 6.0 introduces three new metrics to the report. Two of these new metrics–Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)–are lab implementations of [Core Web Vitals](/vitals/).

### Largest Contentful Paint (LCP) <a href="#lcp" class="w-headline-link">#</a>

[Largest Contentful Paint (LCP)](https://www.web.dev/lcp/) is a measurement of perceived loading experience. It marks the point during page load when the primary–or "largest"–content has loaded and is visible to the user. LCP is an important complement to First Contentful Paint (FCP) which only captures the very beginning of the loading experience. LCP provides a signal to developers about how quickly a user is actually able to see the content of a page. An LCP score below 2.5 seconds is considered 'Good.'

For more information, [watch this deep-dive on LCP](https://youtu.be/diAc65p15ag) by Paul Irish.

### Cumulative Layout Shift (CLS) <a href="#cls" class="w-headline-link">#</a>

[Cumulative Layout Shift (CLS)](https://www.web.dev/cls/) is a measurement of visual stability. It quantifies how much a page's content visually shifts around. A low CLS score is a signal to developers that their users aren't experiencing undue content shifts; a CLS score below 0.10 is considered 'Good.'

CLS in a lab environment is measured through the end of page load. Whereas in the field, you can measure CLS up to the first user interaction or including all user input.

For more information, [watch this deep-dive on CLS](https://youtu.be/zIJuY-JCjqw) by Annie Sullivan.

### Total Blocking Time (TBT) <a href="#tbt" class="w-headline-link">#</a>

[Total Blocking Time (TBT)](https://www.web.dev/tbt/) quantifies load responsiveness, measuring the total amount of time when the main thread was blocked long enough to prevent input responsiveness. TBT measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI). It is a companion metric to TTI and it brings more nuance to quantifying main thread activity that blocks a user's ability to interact with your page.

Additionally, TBT correlates well with the field metric [First Input Delay](/fid/) (FID), which is a Core Web Vital.

## Performance score update <a href="#score" class="w-headline-link">#</a>

The [performance score in Lighthouse](/performance-scoring/) is calculated from a weighted blend of multiple metrics to summarize a page's speed. The 6.0 performance score formula follows.

<table><thead><tr class="header"><th><strong>Phase</strong></th><th><strong>Metric Name</strong></th><th><strong>Metric Weight</strong></th></tr></thead><tbody><tr class="odd"><td>Early (15%)</td><td>First Contentful Paint (FCP)</td><td>15%</td></tr><tr class="even"><td>Mid (40%)</td><td>Speed Index (SI)</td><td>15%</td></tr><tr class="odd"><td></td><td>Largest Contentful Paint (LCP)</td><td>25%</td></tr><tr class="even"><td>Late (15%)</td><td>Time To Interactive (TTI)</td><td>15%</td></tr><tr class="odd"><td>Main Thread (25%)</td><td>Total Blocking Time (TBT)</td><td>25%</td></tr><tr class="even"><td>Predictability (5%)</td><td>Cumulative Layout Shift (CLS)</td><td>5%</td></tr></tbody></table>

While three new metrics have been added, three old ones have been removed: First Meaningful Paint, First CPU Idle, and Max Potential FID. The weights of remaining metrics have been modified to emphasize main thread interactivity and layout predictability.

For comparison, here is version 5 scoring:

<table><thead><tr class="header"><th><strong>Phase</strong></th><th><strong>Metric Name</strong></th><th><strong>Weight</strong></th></tr></thead><tbody><tr class="odd"><td>Early (23%)</td><td>First Contentful Paint (FCP)</td><td>23%</td></tr><tr class="even"><td>Mid (34%)</td><td>Speed Index (SI)</td><td>27%</td></tr><tr class="odd"><td></td><td>First Meaningful Paint (FMP)</td><td>7%</td></tr><tr class="even"><td>Finished (46%)</td><td>Time to Interactive (TTI)</td><td>33%</td></tr><tr class="odd"><td></td><td>First CPU Idle (FCI)</td><td>13%</td></tr><tr class="even"><td>Main Thread</td><td>Max Potential FID</td><td>0%</td></tr></tbody></table>

<img src="https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format" alt="Lighthouse scoring changes between versions 5 and 6." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/gJnkac5fOfjOvmeLXdPO.png?auto=format&amp;w=1600 1600w" width="800" height="165" />

Some highlights of scoring changes between Lighthouse versions 5 and 6:

- **TTI's weight has been reduced from 33% to 15%**. This was in direct response to user feedback about TTI variability, as well as inconsistencies in metric optimizations leading to improvements in user experience. TTI is still a useful signal for when a page is fully interactive, however with TBT as a complement–[variability is reduced](https://docs.google.com/document/d/1xCERB_X7PiP5RAZDwyIkODnIXoBk-Oo7Mi9266aEdGg/edit#heading=h.vkfjuiyx1s5l). With this scoring change, we hope developers are more effectively encouraged to optimize for user interactivity.
- **FCP's weight has been reduced from 23% to 15%.** Measuring only when the first pixel is painted (FCP) didn't give us a complete picture. Combining it with measuring when users are able to see what they most likely care about (LCP) better reflects the loading experience.
- **Max Potential FID** **has been deprecated**. It is no longer shown in the report, but is still available in the JSON. It is now recommended to look at TBT to quantify your interactivity instead of mpFID.
- **First Meaningful Paint has been deprecated.** This metric was too variant and had no viable path to standardization as the implementation is specific to Chrome rendering internals. While some teams do find the FMP timing to be worthwhile on their site, the metric will not receive additional improvements.
- **First CPU Idle has been deprecated** because it's not distinct enough from TTI. TBT and TTI are the go-to metrics for interactivity now.
- CLS's weight is relatively low, though we expect to increase it in a future major version.

### Shifts in scores <a href="#score-shifts" class="w-headline-link">#</a>

How do these changes affect the scores of real sites? We have published an [analysis](https://docs.google.com/spreadsheets/d/1BZFh7AyyaLHCj5LGAbrn3m72ysu4yv8okyHG-f3MoXI/edit?usp=sharing) of the score changes using two datasets: a [general set of sites](https://gist.github.com/connorjclark/8afe673d4e7c6e17204834a256e7caf1) and a [set of static sites](https://gist.github.com/connorjclark/0be52464887ae3a6f29ad5a798122e0c#file-readme-md) built with [Eleventy](https://www.11ty.dev/). In summary, ~20% of sites see noticeably higher scores, ~30% have hardly any change, and ~50% see a decrease of at least five points.

The score changes can be broken down into three primary components:

- score weight changes
- bug fixes to underlying metric implementations
- individual score curve changes

Score weight changes and the introduction of three new metrics drove a majority of overall score changes. New metrics that developers have yet to optimize for carry significant weight in the version 6 performance score. While the average performance score of the test corpus in version 5 was around 50, the average scores on the new Total Blocking Time and Largest Contentful Paint metrics were around 30. Together those two metrics account for 50% of the weight in the Lighthouse version 6 performance score, so naturally a large percentage of sites saw decreases.

Bug fixes to the underlying metric computation can result in different scores. This affects relatively few sites but can have sizable impact in certain situations. Overall, about 8% of sites experienced a score improvement due to metric implementation changes and about 4% of sites saw a score decrease due to metric implementation changes. Approximately 88% of sites were unaffected by these fixes.

Individual score curve changes also impacted the overall score shifts although very slightly. We periodically ensure that the score curve aligns with the observed metrics in the [HTTPArchive dataset](http://httparchive.org/). Excluding sites affected by major implementation changes, minor adjustments to the score curve for individual metrics improved the scores of about 3% of sites and decreased the scores of about 4% of sites. Approximately 93% of sites were unaffected by this change.

### Scoring calculator <a href="#calculator" class="w-headline-link">#</a>

We've published a [scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/) to help you explore performance scoring. The calculator also gives you a comparison between Lighthouse version 5 and 6 scores. When you run an audit with Lighthouse 6.0, the report comes with a link to the calculator with your results populated.

## <figure><img src="https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format" alt="Huge thanks to Ana Tudor for the gauge upgrade!" class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/N8cRFUnM526m3fB4GQVf.png?auto=format&amp;w=1200 1200w" width="600" height="319" /><figcaption>Huge thanks to <a href="https://twitter.com/anatudor">Ana Tudor</a> for the gauge upgrade!</figcaption></figure>New audits <a href="#new-audits" class="w-headline-link">#</a>

### Unused JavaScript <a href="#unused-javascript" class="w-headline-link">#</a>

We are leveraging [DevTools code coverage](https://developers.google.com/web/tools/chrome-devtools/coverage) in a new audit: [**Unused JavaScript**](/remove-unused-code/).

This audit isn't _entirely_ new: it was [added in mid-2017](https://github.com/GoogleChrome/lighthouse/issues/1852#issuecomment-306900595), but because of the performance overhead it was disabled by default to keep the Lighthouse as fast as possible. Collecting this coverage data is far more efficient now, so we feel comfortable enabling it by default.

### Accessibility audits <a href="#a11y" class="w-headline-link">#</a>

Lighthouse uses the wonderful [axe-core](https://github.com/dequelabs/axe-core) library to power the accessibility category. In Lighthouse 6.0, we've added the following audits:

- [aria-hidden-body](/aria-hidden-body/)
- [aria-hidden-focus](/aria-hidden-focus/)
- [aria-input-field-name](/aria-input-field-name/)
- [aria-toggle-field-name](/aria-toggle-field-name/)
- [form-field-multiple-labels](/form-field-multiple-labels/)
- [heading-order](/heading-order/)
- [duplicate-id-active](/duplicate-id-active/)
- [duplicate-id-aria](/duplicate-id-aria/)

### Maskable icon <a href="#maskable-icon" class="w-headline-link">#</a>

[Maskable icons](/maskable-icon/) is a new icon format that makes icons for your PWA look great across all types of devices. To help your PWA look as good as possible, we've introduced a new audit to check if your manifest.json supports this new format.

### Charset declaration <a href="#charset" class="w-headline-link">#</a>

The [meta charset element](/charset/) declares what character encoding should be used to interpret an HTML document. If this element is missing, or if it is declared late in the document, browsers employ a number of heuristics to guess which encoding should be used. If a browser guesses incorrectly, and a late meta charset element is found, the parser generally throws out all the work done so far and starts over, leading to poor experiences for the user. This new audit verifies the page has a valid character encoding and it's defined early and up front.

## Lighthouse CI <a href="#ci" class="w-headline-link">#</a>

At [CDS last November](/lighthouse-evolution-cds-2019/#lighthouse-ci-alpha-release) we announced [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), the open source Node CLI and server that tracks Lighthouse results on every commit in your continuous integration pipeline, and we've come a long way since the alpha release. Lighthouse CI now has support for numerous CI providers including Travis, Circle, GitLab, and Github Actions. Ready-to-deploy [docker images](https://github.com/GoogleChrome/lighthouse-ci/tree/master/docs/recipes) make setup a breeze, and a comprehensive dashboard redesign now reveals trends across every category and metric in Lighthouse for detailed analysis.

Start using Lighthouse CI on your project today by following our [getting started guide](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md).

## <figure><img src="https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format" class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=571 571w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=650 650w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=741 741w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=845 845w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=964 964w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=1098 1098w,      https://web-dev.imgix.net/image/admin/sXnTzewqGuc84MOCzFJe.png?auto=format&amp;w=1200 1200w" width="600" height="413" /></figure><figure><img src="https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format" class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=571 571w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=650 650w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=741 741w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=845 845w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=964 964w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=1098 1098w,      https://web-dev.imgix.net/image/admin/uGT7AUJEQeqK1vlKySLb.png?auto=format&amp;w=1200 1200w" width="600" height="412" /></figure><figure><img src="https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format" class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=571 571w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=650 650w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=741 741w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=845 845w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=964 964w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=1098 1098w,      https://web-dev.imgix.net/image/admin/ZR48KZebW43eyAvB1RkT.png?auto=format&amp;w=1200 1200w" width="600" height="354" /></figure>Renamed Chrome DevTools panel <a href="#devtools" class="w-headline-link">#</a>

We've renamed the **Audits** panel to the **Lighthouse** panel. Enough said!

Depending on your DevTools window size, the panel is probably behind the `»` button. You can drag the tab to change the order.

To quickly reveal the panel with the [Command menu](https://developers.google.com/web/tools/chrome-devtools/command-menu):

1.  Press `Control+Shift+J` (or `Command+Option+J` on Mac) to open DevTools.
2.  Press `Control+Shift+P` (or `Command+Shift+P` on Mac) to open the **Command** menu.
3.  Start typing "Lighthouse".
4.  Press `Enter`.

## Mobile emulation <a href="#emulation" class="w-headline-link">#</a>

Lighthouse follows a mobile-first mindset. Performance problems are more apparent under typical mobile conditions, but developers often don't test in these conditions. This is why the default configuration in Lighthouse applies mobile emulation. The emulation consists of:

- Simulated slow network and CPU conditions (via a simulation engine called [Lantern](https://github.com/GoogleChrome/lighthouse/blob/master/docs/lantern.md)).
- Device screen emulation (the same found in Chrome DevTools).

Since the beginning, Lighthouse has used Nexus 5X as its reference device. In recent years, most performance engineers have been using Moto G4 for testing purposes. Now Lighthouse is following suit and has changed its reference device to Moto G4. In practice, this change is not very noticeable, but here are all the changes detectable by a webpage:

- Screen size is changed from 412x660 px to 360x640 px.
- The user agent string is changed slightly, the device portion that was previously `Nexus 5 Build/MRA58N` will now be `Moto G (4)`.

As of Chrome 81, Moto G4 is also available in the Chrome DevTools device emulation list.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wMyHDbxs49CTJ831UBp7.png?auto=format&amp;w=1600 1600w" width="800" height="653" /></figure>Browser extension <a href="#extension" class="w-headline-link">#</a>

The [Chrome extension for Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) has been a convenient way to run Lighthouse locally. Unfortunately, it was complicated to support. We felt that because the Chrome DevTools **Lighthouse** panel is a better experience (the report integrates with other panels), we could reduce our engineering overhead by simplifying the Chrome extension.

Instead of running Lighthouse locally, the extension now uses the [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started). We recognize that this will not be a sufficient replacement for some of our users. These are the key differences:

- PageSpeed Insights is unable to audit non-public websites, since it is run via a remote server and not your local Chrome instance. If you need to audit a non-public website, use the DevTools **Lighthouse** panel, or the Node CLI.
- PageSpeed Insights is not guaranteed to use the latest Lighthouse release. If you want to use the latest release, use the Node CLI. The browser extension will get the update ~1-2 weeks after release.
- PageSpeed Insights is a Google API, using it constitutes accepting the Google API Terms of Service. If you do not wish to or cannot accept the terms of service, use the DevTools **Lighthouse** panel, or the Node CLI.

The good news is that simplifying the product story allowed us to focus on other engineering problems. As a result, we released the [Lighthouse Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/google-lighthouse/)!

## Budgets <a href="#budgets" class="w-headline-link">#</a>

Lighthouse 5.0 introduced [performance budgets](/performance-budgets-101/) which supported adding thresholds for [how much of each resource type](https://github.com/GoogleChrome/lighthouse/blob/master/docs/performance-budgets.md#resource-budgets) (such as scripts, images, or css) a page can serve.

Lighthouse 6.0 adds [support for budgeting metrics](https://github.com/GoogleChrome/lighthouse/blob/master/docs/performance-budgets.md#timing-budgets), so now you can set thresholds for specific metrics such as FCP. For now, budgets are only available to the Node CLI and Lighthouse CI.

## Source location links <a href="#source-location" class="w-headline-link">#</a>

Some of the issues that Lighthouse finds about a page can be traced back to a specific line of source code and the report will state the exact file and line that's relevant. To make this easy to explore in DevTools, clicking on the locations specified in the report will open the relevant files in the **Sources** panel.

DevTools reveals the exact line of code that causes the issue.

## On the horizon <a href="#horizon" class="w-headline-link">#</a>

Lighthouse has begun experimenting with collecting source maps to power new features, such as:

- Detecting duplicate modules in JavaScript bundles.
- Detecting excessive polyfills or transforms in code sent to modern browsers.
- Augmenting the Unused JavaScript audit to provide module-level granularity.
- Treemap visualizations highlighting the modules that require action.
- Displaying the original source code for report items with a "source location".

<figure><img src="https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format" alt="The Unused JavaScript audit using source maps to show unused code in specific bundled modules." class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/iZPhM3KNQebgwCsgXTuf.png?auto=format&amp;w=1200 1200w" width="600" height="566" /><figcaption>The Unused JavaScript audit using source maps to show unused code in specific bundled modules.</figcaption></figure>These features will be enabled by default in a future version of Lighthouse. For now, you can view Lighthouse's experimental audits with the following CLI flag:

    lighthouse https://web.dev --view --preset experimental

## Thank you! <a href="#thanks" class="w-headline-link">#</a>

We thank you for using Lighthouse and providing feedback. Your feedback helps us improve Lighthouse and we hope Lighthouse 6.0 will make it easier for you to improve the performance of your websites.

What can you do next?

- Open Chrome Canary and give the **Lighthouse** panel a go.
- Use the Node CLI: `npm install -g lighthouse && lighthouse https://yoursite.com --view`.
- Get [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci#lighthouse-ci) running with your project.
- Review the [Lighthouse audit documentation](/learn/#lighthouse).
- Have fun making the web better!

We're passionate about the web and we love working with the developer community to build tooling to help improve the web. Lighthouse is an open source project and we extend a huge thanks to all the contributors helping out with everything from typo fixes to documentation refactors to brand new audits. [Interested in contributing?](https://github.com/GoogleChrome/lighthouse/blob/master/CONTRIBUTING.md) Swing by the [Lighthouse GitHub repo](https://github.com/GoogleChrome/lighthouse).

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/lighthouse/" class="w-chip">Lighthouse</a>

<span class="w-mr--sm"> Last updated: May 19, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/lighthouse-whats-new-6.0/index.md)

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
