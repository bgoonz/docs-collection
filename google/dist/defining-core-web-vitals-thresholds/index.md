<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format" alt="The research and methodology behind Core Web Vitals thresholds" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WNrgCVjmp8Gyc8EbZ9Jv.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#defining-the-core-web-vitals-metrics-thresholds" class="w-toc__header--link">Defining the Core Web Vitals metrics thresholds</a>

- [Refresher: Core Web Vitals metrics and thresholds](#refresher:-core-web-vitals-metrics-and-thresholds)
- [Criteria for the Core Web Vitals metric thresholds](#criteria-for-the-core-web-vitals-metric-thresholds)
- [High-quality user experience](#high-quality-user-experience)
- [Achievable by existing web content](#achievable-by-existing-web-content)
- [Final thoughts on criteria](#final-thoughts-on-criteria)
- [Choice of percentile](#choice-of-percentile)
- [Largest Contentful Paint](#largest-contentful-paint)
- [Quality of experience](#quality-of-experience)
- [Achievability](#achievability)
- [First Input Delay](#first-input-delay)
- [Quality of experience](#quality-of-experience-2)
- [Achievability](#achievability-2)
- [Cumulative Layout Shift](#cumulative-layout-shift)
- [Quality of experience](#quality-of-experience-3)
- [Achievability](#achievability-3)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Defining the Core Web Vitals metrics thresholds

The research and methodology behind Core Web Vitals thresholds

May 21, 2020 <span class="w-author__separator">•</span> Updated May 27, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/KVeCLO473nZtAEMzDpo6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Bryan McQuade" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KVeCLO473nZtAEMzDpo6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/KVeCLO473nZtAEMzDpo6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/KVeCLO473nZtAEMzDpo6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/KVeCLO473nZtAEMzDpo6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/KVeCLO473nZtAEMzDpo6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/bmcquade/)

<a href="/authors/bmcquade/" class="w-author__name-link">Bryan McQuade</a>

- <a href="https://twitter.com/bryanmcquade" class="w-author__link">Twitter</a>

[Core Web Vitals](/vitals/#core-web-vitals) are a set of field metrics that measure important aspects of real-world user experience on the web. Core Web Vitals includes metrics, as well as target thresholds for each metric, which help developers qualitatively understand whether the experience of their site is "good", "needs improvement", or is "poor". This post will explain the approach used to choose thresholds for Core Web Vitals metrics generally, as well as how the thresholds for each specific Core Web Vitals metric were chosen.

## Refresher: Core Web Vitals metrics and thresholds <a href="#refresher:-core-web-vitals-metrics-and-thresholds" class="w-headline-link">#</a>

In 2020 the Core Web Vitals are three metrics: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Each metric measures a different aspect of user experience: LCP measures perceived load speed and marks the point in the page load timeline when the page's main content has likely loaded; FID measures responsiveness and quantifies the experience users feel when trying to first interact with the page; and CLS measures visual stability and quantifies the amount of unexpected layout shift of visible page content.

Each Core Web Vitals metric has associated thresholds, which categorize performance as either "good", "needs improvement", or "poor":

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" alt="Largest Contentful Paint threshold recommendations" width="400" height="350" /> <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg" alt="First Input Delay threshold recommendations" width="400" height="350" /> <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg" alt="Cumulative Layout Shift threshold recommendations" width="400" height="350" />

<table><thead><tr class="header"><th> </th><th>Good</th><th>Poor</th><th>Percentile</th></tr></thead><tbody><tr class="odd"><td>Largest Contentful Paint</td><td>≤2500ms</td><td>&gt;4000ms</td><td>75</td></tr><tr class="even"><td>First Input Delay</td><td>≤100ms</td><td>&gt;300ms</td><td>75</td></tr><tr class="odd"><td>Cumulative Layout Shift</td><td>≤0.1</td><td>&gt;0.25</td><td>75</td></tr></tbody></table>

Additionally, to classify the overall performance of a page or site, we use the 75th percentile value of all page views to that page or site. In other words, if at least 75 percent of page views to a site meet the "good" threshold, the site is classified as having "good" performance for that metric. Conversely, if at least 25 percent of page views meet the "poor" threshold, the site is classified as having "poor" performance. So, for example, a 75th percentile LCP of 2 seconds is classified as "good", while a 75th percentile LCP of 5 seconds is classified as "poor".

## Criteria for the Core Web Vitals metric thresholds <a href="#criteria-for-the-core-web-vitals-metric-thresholds" class="w-headline-link">#</a>

When establishing thresholds for Core Web Vitals metrics, we first identified criteria that each threshold had to meet. Below, I explain the criteria we used at Google for evaluating 2020 Core Web Vitals metric thresholds. The subsequent sections will go into more detail on how these criteria were applied to select the thresholds for each metric in 2020. In future years we anticipate making improvements and additions to the criteria and thresholds to further improve our ability to measure great user experiences on the web.

### High-quality user experience <a href="#high-quality-user-experience" class="w-headline-link">#</a>

Our primary goal is to optimize for the user and their quality of experience. Given this, we aim to ensure that pages that meet the Core Web Vitals "good" thresholds deliver a high quality user experience.

To identify a threshold associated with high-quality user experience, we look to human perception and HCI research. While this research is sometimes summarized using a single fixed threshold, we find that the underlying research is typically expressed as a range of values. For example, research on the amount of time users typically wait before losing focus is sometimes described as 1 second, while the underlying research is actually expressed as a range, from hundreds of milliseconds to multiple seconds. The fact that perception thresholds vary depending on user and context is further supported by aggregated and anonymized Chrome metrics data, which shows that there is not a single amount of time users wait for a web page to display content before aborting the page load. Rather, this data shows a smooth and continuous distribution. For a more in depth look at human perception thresholds and relevant HCI research, see [The Science Behind Web Vitals](https://blog.chromium.org/2020/05/the-science-behind-web-vitals.html).

In cases where relevant user experience research is available for a given metric and there is reasonable consensus on the range of values in the literature, we use this range as an input to guide our threshold selection process. In cases where relevant user experience research is unavailable, such as for a new metric like Cumulative Layout Shift, we instead evaluate real-world pages that meet different candidate thresholds for a metric, to identify a threshold that results in a good user experience.

### Achievable by existing web content <a href="#achievable-by-existing-web-content" class="w-headline-link">#</a>

Additionally, to ensure that site owners can succeed in optimizing their sites to meet the "good" thresholds, we require that these thresholds are achievable for existing content on the web. For example, while zero milliseconds is an ideal LCP "good" threshold, resulting in instant loading experiences, a zero millisecond threshold is not practically achievable in most cases, due to network and device processing latencies. Thus, zero milliseconds is not a reasonable LCP "good" threshold for Core Web Vitals.

When evaluating candidate Core Web Vitals "good" thresholds, we verify that those thresholds are achievable, based on data from the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) (CrUX). To confirm that a threshold is achievable, we require that at least 10% of [origins](/same-site-same-origin/#origin) currently meet the "good" threshold. Additionally, to ensure that well-optimized sites are not misclassified due to variability in field data, we also verify that well-optimized content consistently meets the "good" threshold.

Conversely, we establish the "poor" threshold by identifying a level of performance that only a minority of origins are not currently meeting. Unless there is research available relevant to defining a "poor" threshold, by default the worst-performing 10-30% of origins are classified as "poor".

### Final thoughts on criteria <a href="#final-thoughts-on-criteria" class="w-headline-link">#</a>

When evaluating candidate thresholds, we found that the criteria were sometimes in conflict with one another. For example, there can be a tension between a threshold being consistently achievable and it ensuring consistently good user experiences. Additionally, given that human perception research typically provides a range of values, and user behavior metrics show gradual changes in behavior, we found there is often no single "correct" threshold for a metric. Thus, our approach for the 2020 Core Web Vitals has been to choose thresholds that best meet the above criteria, while recognizing that there is no one perfect threshold and that we may sometimes need to choose from multiple reasonable candidate thresholds. Rather than asking "what is the perfect threshold?" we instead focused on asking "which candidate threshold best achieves our criteria?"

## Choice of percentile <a href="#choice-of-percentile" class="w-headline-link">#</a>

As noted earlier, to classify the overall performance of a page or site, we use the 75th percentile value of all visits to that page or site. The 75th percentile was chosen based on two criteria. First, the percentile should ensure that a majority of visits to a page or site experienced the target level of performance. Second, the value at the chosen percentile should not be overly impacted by outliers.

These goals are somewhat at odds with one another. To satisfy the first goal, a higher percentile is typically a better choice. However, with higher percentiles, the likelihood of the resulting value being impacted by outliers also increases. If a few visits to a site happen to be on flaky network connections which result in excessively large LCP samples, we don't want our site classification to be decided by these outlier samples. For example, if we were evaluating the performance of a site with 100 visits using a high percentile such as the 95th, it would take just 5 outlier samples for the 95th percentile value to be affected by the outliers.

Given these goals are a bit at odds, after analysis, we concluded that the 75th percentile strikes a reasonable balance. By using the 75th percentile, we know that most visits to the site (3 of 4) experienced the target level of performance or better. Additionally, the 75th percentile value is less likely to be affected by outliers. Returning to our example, for a site with 100 visits, 25 of those visits would need to report large outlier samples for the value at the 75th percentile to be affected by outliers. While 25 of 100 samples being outliers is possible, it is much less likely than for the 95th percentile case.

## Largest Contentful Paint <a href="#largest-contentful-paint" class="w-headline-link">#</a>

### Quality of experience <a href="#quality-of-experience" class="w-headline-link">#</a>

1 second is often cited as the amount of time a user will wait before they begin to lose focus on a task. On closer inspection of relevant research, we found that 1 second is an approximation to describe a range of values, from roughly several hundred milliseconds to several seconds.

Two commonly cited sources for the 1 second threshold are [Card et al](https://dl.acm.org/doi/10.1145/108844.108874) and [Miller](https://dl.acm.org/doi/10.1145/1476589.1476628). Card defines a 1-second "immediate response" threshold, citing Newell's [Unified Theories of Cognition](https://dl.acm.org/doi/book/10.5555/86564). Newell explains immediate responses as "responses that must be made to some stimulus within _very approximately one second_ (that is, roughly from ~0.3sec to ~3sec)." This follows Newell's discussion on "real-time constraints on cognition", where it is noted that "interactions with the environment which evoke cognitive considerations take place on the order of seconds" which range from roughly 0.5 to 2-3 seconds. Miller, another commonly cited source for the 1 second threshold, notes "tasks which humans can and will perform with machine communications will seriously change their character if response delays are greater than two seconds, with some possible extension of another second or so."

Miller and Card's research describes the amount of time a user will wait before losing focus as a range, from roughly 0.3 to 3 seconds, which suggests our LCP "good" threshold should be in this range. Additionally, given that the existing First Contentful Paint "good" threshold is 1 second, and that the Largest Contentful Paint typically occurs after First Contentful Paint, we further constrain our range of candidate LCP thresholds, from 1 second to 3 seconds. To choose the threshold in this range that best meets our criteria, we look at the achievability of these candidate thresholds, below.

### Achievability <a href="#achievability" class="w-headline-link">#</a>

Using data from CrUX, we can determine the percentage of origins on the web that meet our candidate LCP "good" thresholds.

**% of CrUX origins classified as "good" (for candidate LCP thresholds)**

<table><thead><tr class="header"><th> </th><th>1 second</th><th>1.5 seconds</th><th>2 seconds</th><th>2.5 seconds</th><th>3 seconds</th></tr></thead><tbody><tr class="odd"><td><strong>phone</strong></td><td>3.5%</td><td>13%</td><td>27%</td><td>42%</td><td>55%</td></tr><tr class="even"><td><strong>desktop</strong></td><td>6.9%</td><td>19%</td><td>36%</td><td>51%</td><td>64%</td></tr></tbody></table>

While less than 10% of origins meet the 1 second threshold, all other thresholds from 1.5 to 3 seconds satisfy our requirement that at least 10% of origins meet the "good" threshold, and are thus still valid candidates.

In addition, to ensure the chosen threshold is consistently achievable for well-optimized sites, we analyze LCP performance for top-performing sites across the web, to determine which thresholds are consistently achievable for these sites. Specifically, we aim to identify a threshold that is consistently achievable at the 75th percentile for top performing sites. We find that the 1.5 and 2 second thresholds are not consistently achievable, while 2.5 seconds is consistently achievable.

To identify a "poor" threshold for LCP, we use CrUX data to identify a threshold met by most origins:

**% of CrUX origins classified as "poor" (for candidate LCP thresholds)**

<table><thead><tr class="header"><th> </th><th>3 seconds</th><th>3.5 seconds</th><th>4 seconds</th><th>4.5 seconds</th><th>5 seconds</th></tr></thead><tbody><tr class="odd"><td><strong>phone</strong></td><td>45%</td><td>35%</td><td>26%</td><td>20%</td><td>15%</td></tr><tr class="even"><td><strong>desktop</strong></td><td>36%</td><td>26%</td><td>19%</td><td>14%</td><td>10%</td></tr></tbody></table>

For a 4 second threshold, roughly 26% of phone origins, and 21% of desktop origins, would be classified as poor. This falls in our target range of 10-30%, so we conclude that 4 seconds is an acceptable "poor" threshold.

Thus, we conclude that 2.5 seconds is a reasonable "good" threshold, and 4 seconds is a reasonable "poor" threshold for Largest Contentful Paint.

## First Input Delay <a href="#first-input-delay" class="w-headline-link">#</a>

### Quality of experience <a href="#quality-of-experience-2" class="w-headline-link">#</a>

Research is reasonably consistent in concluding that delays in visual feedback of up to around 100ms are perceived as being caused by an associated source, such as a user input. This suggests that a 100ms First Input Delay "good" threshold is likely appropriate as a minimum bar: if the delay for processing input exceeds 100ms, there is no chance for other processing and rendering steps to complete in time.

Jakob Nielsen's commonly cited [Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) defines 0.1 second as the limit for having the user feel that the system is reacting instantaneously. Nielsen cites Miller and Card, who cites Michotte's 1962 [The Perception of Causality](https://psycnet.apa.org/record/1964-05029-000). In Michotte's research, experiment participants are shown "two objects on a screen. Object A sets off and moves towards B. It stops at the moment when it comes into contact with B, while the latter then starts and moves away from A." Michotte varies the time interval between when Object A stops and when Object B starts to move. Michotte finds that, for delays up to roughly 100ms, participants have the impression that Object A causes the motion of Object B. For delays from roughly 100ms to 200ms, the perception of causality is mixed, and for delays over 200ms, the motion of Object B is no longer seen as having been caused by Object A.

Similarly, Miller defines a response threshold for "Response to control activation" as "the indication of action given, ordinarily, by the movement of a key, switch or other control member that signals it has been physically actIvated. This response should be…perceived as a part of the mechanical action induced by the operator. Time delay: No more than 0.1 second" and later "the delay between depressing a key and visual feedback should be no more than 0.1 to 0.2 seconds".

More recently, in [Towards the Temporally Perfect Virtual Button](https://dl.acm.org/doi/10.1145/2611387), Kaaresoja et al investigated the perception of simultaneity between touching a virtual button on a touchscreen and subsequent visual feedback indicating the button was touched, for various delays. When the delay between button press and visual feedback was 85ms or less, participants reported the visual feedback appeared simultaneously with the button press 75% of the time. Additionally, for delays of 100ms or less, participants reported a consistently high perceived quality of the button press, with perceived quality falling off for delays of 100ms to 150ms, and reaching very low levels for delays of 300ms.

Given the above, we conclude that research points to a range of values around 100ms as an appropriate First Input Delay threshold for Web Vitals. Additionally, given users reported low quality levels for delays of 300ms or more, 300ms presents as a reasonable "poor" threshold.

### Achievability <a href="#achievability-2" class="w-headline-link">#</a>

Using data from CrUX, we determine that the majority of origins on the web meet the 100ms FID "good" threshold at the 75th percentile:

**% of CrUX origins classified as "good" for FID 100ms threshold**

<table><thead><tr class="header"><th></th><th>100ms</th></tr></thead><tbody><tr class="odd"><td><strong>phone</strong></td><td>78%</td></tr><tr class="even"><td><strong>desktop</strong></td><td>&gt;99%</td></tr></tbody></table>

Additionally, we observe that top sites across the web are able to consistently meet this threshold at the 75th percentile (and often meet it at the 95th percentile).

Given the above, we conclude that 100ms is a reasonable "good" threshold for FID.

## Cumulative Layout Shift <a href="#cumulative-layout-shift" class="w-headline-link">#</a>

### Quality of experience <a href="#quality-of-experience-3" class="w-headline-link">#</a>

Cumulative Layout Shift (CLS) is a new metric that measures how much the visible content of a page shifts around. Given CLS is new, we are not aware of research that can directly inform the thresholds for this metric. Thus, to identify a threshold that is aligned with user expectations, we evaluated real-world pages with different amounts of layout shift, to determine the maximum amount of shift that is perceived as acceptable before causing significant disruptions when consuming page content. In our internal testing, we found that levels of shift from 0.15 and above were consistently perceived as disruptive, while shifts of 0.1 and below were noticeable but not excessively disruptive. Thus, while zero layout shift is ideal, we concluded that values up to 0.1 are candidate "good" CLS thresholds.

### Achievability <a href="#achievability-3" class="w-headline-link">#</a>

Based on CrUX data, we can see that nearly 50% of origins have CLS of 0.05 or below.

**% of CrUX origins classified as "good" (for candidate CLS thresholds)**

<table><thead><tr class="header"><th> </th><th>0.05</th><th>0.1</th><th>0.15</th></tr></thead><tbody><tr class="odd"><td><strong>phone</strong></td><td>49%</td><td>60%</td><td>69%</td></tr><tr class="even"><td><strong>desktop</strong></td><td>42%</td><td>59%</td><td>69%</td></tr></tbody></table>

While the CrUX data suggests that 0.05 might be a reasonable CLS "good" threshold, we recognize that there are some use cases where it is currently difficult to avoid disruptive layout shifts. For example, for third-party embedded content, such as social media embeds, the height of the embedded content is sometimes not known until it finishes loading, which can lead to a layout shift greater than 0.05. Thus, we conclude that, while many origins meet the 0.05 threshold, the slightly less stringent CLS threshold of 0.1 strikes a better balance between quality of experience and achievability. It is our hope that, going forward, the web ecosystem will identify solutions to address layout shifts caused by third party embeds, which would allow for using a more stringent CLS "good" threshold of 0.05 or 0 in a future iteration of Core Web Vitals.

Additionally, to determine a "poor" threshold for CLS, we used CrUX data to identify a threshold met by most origins:

**% of CrUX origins classified as "poor" (for candidate CLS thresholds)**

<table><thead><tr class="header"><th> </th><th>0.15</th><th>0.2</th><th>0.25</th><th>0.3</th></tr></thead><tbody><tr class="odd"><td><strong>phone</strong></td><td>31%</td><td>25%</td><td>20%</td><td>18%</td></tr><tr class="even"><td><strong>desktop</strong></td><td>31%</td><td>23%</td><td>18%</td><td>16%</td></tr></tbody></table>

For a 0.25 threshold, roughly 20% of phone origins, and 18% of desktop origins, would be classified as "poor". This falls in our target range of 10-30%, so we concluded that 0.25 is an acceptable "poor" threshold.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: May 27, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/defining-core-web-vitals-thresholds/index.md)

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
