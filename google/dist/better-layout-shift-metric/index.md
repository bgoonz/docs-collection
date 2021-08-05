<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<embed src="https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#feedback-wanted:-the-road-to-a-better-layout-shift-metric-for-long-lived-pages" class="w-toc__header--link">Feedback wanted: The road to a better layout shift metric for long-lived pages</a>

- [How would we decide if a new metric is better?](#how-would-we-decide-if-a-new-metric-is-better)
- [What metric ideas did we test?](#what-metric-ideas-did-we-test)
- [Windowing strategies](#windowing-strategies)
- [Window sizes](#window-sizes)
- [Summarization](#summarization)
- [Other strategies](#other-strategies)
- [The initial results](#the-initial-results)
- [Best strategies](#best-strategies)
- [Strategies that didn't work out](#strategies-that-didn't-work-out)
- [Next steps](#next-steps)
- [Larger-scale analysis](#larger-scale-analysis)
- [Feedback on our approach](#feedback-on-our-approach)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Feedback wanted: The road to a better layout shift metric for long-lived pages

Learn about our plans for improving the Cumulative Layout Shift metric and give us feedback.

Jan 25, 2021

[<img src="https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Annie Sullivan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/anniesullie/)

<a href="/authors/anniesullie/" class="w-author__name-link">Annie Sullivan</a>

- <a href="https://twitter.com/anniesullie" class="w-author__link">Twitter</a>
- <a href="https://github.com/anniesullie" class="w-author__link">GitHub</a>
- <a href="https://anniesullie.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/urYfROhm806fvOPRMsRg.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Michal Mocny" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/urYfROhm806fvOPRMsRg.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/urYfROhm806fvOPRMsRg.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/urYfROhm806fvOPRMsRg.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/urYfROhm806fvOPRMsRg.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/urYfROhm806fvOPRMsRg.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mmocny/)

<a href="/authors/mmocny/" class="w-author__name-link">Michal Mocny</a>

- <a href="https://twitter.com/mmocny" class="w-author__link">Twitter</a>
- <a href="https://github.com/mmocny" class="w-author__link">GitHub</a>

[Cumulative Layout Shift](/cls) (CLS) is a metric that measures the visual stability of a web page. The metric is called cumulative layout shift because the score of every individual shift is summed throughout the lifespan of the page.

While all layout shifts are poor user experiences, they do add up more on pages that are open longer. That's why the Chrome Speed Metrics Team set out to improve the CLS metric to be more neutral to the time spent on a page.

It's important that the metric focuses on user experience through the full page lifetime, as we've found that users often have negative experiences after load, while scrolling or navigating through pages. But we've heard concerns about how this impacts long-lived pages—pages which the user generally has open for a long time. There are several different types of pages which tend to stay open longer; some of the most common are social media apps with infinite scroll and single-page applications.

An internal analysis of long-lived pages with high CLS scores found that most problems were caused by the following patterns:

- [Infinite scrollers shifting content](https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/) as the user scrolls.
- Input handlers taking longer than 500 ms to update the UI in response to a user interaction, without any kind of placeholder or skeleton pattern.

While we encourage developers to improve those user experiences, we're also working towards improving the metric and looking for feedback on possible approaches.

## How would we decide if a new metric is better? <a href="#how-would-we-decide-if-a-new-metric-is-better" class="w-headline-link">#</a>

Before diving into metric design, we wanted to ensure that we evaluated our ideas on a wide variety of real-world web pages and use cases. To start, we designed a small user study.

First, we recorded videos and [Chrome traces](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool) of 34 user journeys through various websites. In selecting the user journeys, we aimed for a few things:

- A variety of different types of sites, such as news and shopping sites.
- A variety of user journeys, such as initial page load, scrolling, single-page app navigations, and user interactions.
- A variety of both number and intensity of individual layout shifts on the sites.
- Few negative experiences on the sites apart from layout shifts.

We asked 41 of our colleagues to watch two videos at a time, rating which of the pair was better in terms of layout shift. From these ratings, we created an idealized ranking order of the sites. The results of the user ranking confirmed our suspicions that our colleagues, like most users, are really frustrated by layout shifts after load, especially during scrolling and single-page app navigations. We saw that some sites have much better user experiences during these activities than others.

Since we recorded Chrome traces along with the videos, we had all the details of the individual layout shifts in each user journey. We used those to compute metric values for each idea for each user journey. This allowed us to see how each metric variant ranked the user journeys, and how different each was from the ideal ranking.

## What metric ideas did we test? <a href="#what-metric-ideas-did-we-test" class="w-headline-link">#</a>

### Windowing strategies <a href="#windowing-strategies" class="w-headline-link">#</a>

Often pages have multiple layout shifts bunched closely together, because elements can shift multiple times as new content comes in piece by piece. This prompted us to try out techniques for grouping shifts together. To accomplish that, we looked at three windowing approaches:

- Tumbling windows
- Sliding windows
- Session windows

In each of these examples, the page has layout shifts of varying severity over time. Each blue bar represents a single layout shift, and the length represents the [score](/cls/#layout-shift-score) of that shift. The images illustrate the ways different windowing strategies group the layout shifts over time.

#### Tumbling windows <a href="#tumbling-windows" class="w-headline-link">#</a>

Example of a tumbling window.

The simplest approach is just to break the page into windows of equal-sized chunks. These are called tumbling windows. You'll notice above that the fourth bar really looks like it should be grouped into the second tumbling window, but because the windows are all a fixed size it is in the first window instead. If there are slight differences in timing of loads or user interactions on the page, the same layout shifts might fall on different sides of the tumbling window boundaries.

#### Sliding windows <a href="#sliding-windows" class="w-headline-link">#</a>

Example of a sliding window.

An approach that lets us see more possible groupings of the same length is to continuously update the potential window over time. The image above shows one sliding window at a time, but we could look at all possible sliding windows or a subset of them to create a metric.

#### Session windows <a href="#session-windows" class="w-headline-link">#</a>

Example of a session window.

If we wanted to focus on identifying areas of the page with bursts of layout shifts, we could start each window at a shift, and keep growing it until we encountered a gap of a given size between layout shifts. This approach groups the layout shifts together, and ignores most of the non-shifting user experience. One potential problem is that if there are no gaps in the layout shifts, a metric based on session windows could grow unbounded just like the current CLS metric. So we tried this out with a maximum window size as well.

### Window sizes <a href="#window-sizes" class="w-headline-link">#</a>

The metric might give very different results depending on how big the windows actually are, so we tried multiple different window sizes:

- Each shift as its own window (no windows)
- 100 ms
- 300 ms
- 1 second
- 5 seconds

### Summarization <a href="#summarization" class="w-headline-link">#</a>

We tried out many ways to summarize the different windows.

#### Percentiles <a href="#percentiles" class="w-headline-link">#</a>

We looked at the maximum window value, as well as the 95th percentile, 75th percentile, and median.

#### Average <a href="#average" class="w-headline-link">#</a>

We looked at the mean window value.

#### Budgets <a href="#budgets" class="w-headline-link">#</a>

We wondered if maybe there was some minimum layout shift score that users wouldn't notice, and we could just count layout shifts over that "budget" in the score. So for various potential "budget" values, we looked at the percentage of shifts over budget, and the total shift score over budget.

### Other strategies <a href="#other-strategies" class="w-headline-link">#</a>

We also looked at many strategies that didn't involve windows, like the total layout shift divided by time on page, and the average of the worst N individual shifts.

## The initial results <a href="#the-initial-results" class="w-headline-link">#</a>

Overall, we tested **145 different metric definitions** based on permutations of the above ideas. For each metric, we ranked all the user journeys by their score on the metric, and then ranked the metrics by how close they were to the ideal ranking.

To get a baseline, we also ranked all the sites by their current CLS score. CLS placed 32nd, tied with 13 other strategies, so it was better than most permutations of the strategies above. To ensure the results were meaningful, we also added in three random orderings. As expected, the random orderings did worse than every strategy tested.

To understand if we might be overfitting for the data set, after our analysis we recorded some new layout shift videos and traces, manually ranked those, and saw that the metric rankings were very similar for the new data set and the original one.

A few different strategies stood out in the rankings.

### Best strategies <a href="#best-strategies" class="w-headline-link">#</a>

When we ranked the strategies, we found that three types of strategies topped the list. Each had roughly the same performance, so we plan to move forward with a deeper analysis on all three. We'd also like to hear developer feedback to understand if there are factors outside of user experience we should be considering when deciding between them. (See below for how to give feedback.)

#### High percentiles of long windows <a href="#high-percentiles-of-long-windows" class="w-headline-link">#</a>

A few windowing strategies worked well with long window sizes:

- 1 second sliding windows
- Session windows capped at 5 seconds with 1 second gap
- Session windows uncapped with 1 second gap

These all ranked really well at both the 95th percentile and the maximum.

But for such large window sizes, we were concerned about using the 95th percentile—often we were looking at only 4-6 windows, and taking the 95th percentile of that is a lot of interpolation. It's unclear what the interpolation is doing in terms of the metric value. The maximum value is a lot clearer, so we decided to move forward with checking the maximum.

#### Average of session windows with long gaps <a href="#average-of-session-windows-with-long-gaps" class="w-headline-link">#</a>

Averaging the scores of all uncapped session windows with 5 second gaps between them performed really well. This strategy has a few interesting characteristics:

- If the page doesn't have gaps between layout shifts, it ends up being one long session window with the exact same score as the current CLS.
- This metric didn't take idle time into account directly; it only looked at the shifts that happened on the page, and not at points in time when the page was not shifting.

#### High percentiles of short windows <a href="#high-percentiles-of-short-windows" class="w-headline-link">#</a>

The maximum 300 ms sliding window ranked very highly, as well as the 95th percentile. For the shorter window size, there is less percentile interpolation than larger window sizes, but we were also concerned about "repeat" sliding windows—if a set of layout shifts occurs over two frames, there are multiple 300 ms windows that include them. Taking the maximum is much clearer and simpler than taking the 95th percentile one. So again we decided to move forward with checking the maximum.

### Strategies that didn't work out <a href="#strategies-that-didn&#39;t-work-out" class="w-headline-link">#</a>

Strategies that tried to look at the "average" experience of time spent both without layout shifts and with layout shifts did very poorly. None of the median or 75th percentile summaries of any windowing strategy ranked the sites well. Neither did the sum of layout shifts over time.

We evaluated a number of different "budgets" for acceptable layout shifts:

- Percent of layout shifts above some budget. For various budgets, these all ranked quite poorly.
- Average layout shift above some excess. Most variations on this strategy did poorly, but average excess over a long session with a large gap did almost as well as the average of session windows with long gaps. We decided to move forward with only the latter because it is simpler.

## Next steps <a href="#next-steps" class="w-headline-link">#</a>

### Larger-scale analysis <a href="#larger-scale-analysis" class="w-headline-link">#</a>

We've implemented the top strategies listed above in Chrome, so that we can get data on real-world usage for a much larger set of websites. We plan to use a similar approach of ranking sites based on their metric scores to do the larger-scale analysis:

- Rank all the sites by CLS, and by each new metric candidate.
  - Which sites are ranked most differently by CLS and each candidate? Do we find anything unexpected when we look at these sites?
  - What are the largest differences between the new metric candidates? Do any of the differences stand out as advantages or disadvantages of a specific candidate?
- Repeat the above analysis, but bucketing by time spent on each page load. Do we see an expected improvement for long-lived page loads with acceptable layout shift? Do we see any unexpected results for short-lived pages?

### Feedback on our approach <a href="#feedback-on-our-approach" class="w-headline-link">#</a>

We'd love to get feedback from web developers on these approaches. Some things to keep in mind while considering the new approaches:

#### What's not changing <a href="#what&#39;s-not-changing" class="w-headline-link">#</a>

We do want to clarify that a lot of things will not be changing with a new approach:

- None of our metric ideas change the way layout shift scores for [individual frames are calculated](/cls/#layout-shift-score), only the way we summarize multiple frames. This means that the [JavaScript API](/cls/#measure-cls-in-javascript) for layout shifts will stay the same, and the underlying events in Chrome traces that developer tools use will also stay the same, so layout shift rects in tools like WebPageTest and Chrome DevTools will continue to work the same way.
- We'll continue to work hard on making the metrics easy for developers to adopt, including them in the [web-vitals library](https://github.com/GoogleChrome/web-vitals), documenting on [web.dev](/metrics), and reporting them in our developer tooling like Lighthouse.

#### Trade-offs between metrics <a href="#trade-offs-between-metrics" class="w-headline-link">#</a>

One of the top strategies summarizes the layout shift windows as an average, and the rest report the maximum window. For pages which are open a very long time, the average will likely report a more representative value, but in general it will likely be easier for developers to act on a single window—they can log when it occurred, the elements that shifted, and so on. We'd love feedback on which is more important to developers.

Do you find sliding or session windows easier to understand? Are the differences important to you?

#### How to give feedback <a href="#how-to-give-feedback" class="w-headline-link">#</a>

You can try out the new layout shift metrics on any site using our [example JavaScript implementations](https://github.com/mmocny/web-vitals/wiki/Snippets-for-LSN-using-PerformanceObserver) or our [fork of the Core Web Vitals extension](https://github.com/mmocny/web-vitals-extension/tree/experimental-ls).

Please email feedback to our **[web-vitals-feedback](https://groups.google.com/g/web-vitals-feedback)** Google group, with "\[Layout Shift Metrics\]" in the subject line. We're really looking forward to hearing what you think!

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jan 25, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/better-layout-shift-metric/index.md)

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
