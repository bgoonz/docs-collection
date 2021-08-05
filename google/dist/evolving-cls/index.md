<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<embed src="https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/JSBg0yF1fatrTDQSKiTW.webp?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#evolving-the-cls-metric" class="w-toc__header--link">Evolving the CLS metric</a>

- [How did we evaluate the options?](#how-did-we-evaluate-the-options)
- [Decision points](#decision-points)
- [Why a session window?](#why-a-session-window)
- [Why the maximum session window?](#why-the-maximum-session-window)
- [Why 5 seconds?](#why-5-seconds)
- [How will this affect my page's CLS score?](#how-will-this-affect-my-page's-cls-score)
- [How can I try it out?](#how-can-i-try-it-out)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Evolving the CLS metric

Plans for improving the CLS metric to be more fair to long-lived pages.

Apr 7, 2021

[<img src="https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Annie Sullivan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/anniesullie/)

<a href="/authors/anniesullie/" class="w-author__name-link">Annie Sullivan</a>

- <a href="https://twitter.com/anniesullie" class="w-author__link">Twitter</a>
- <a href="https://github.com/anniesullie" class="w-author__link">GitHub</a>
- <a href="https://anniesullie.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Hongbo Song" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/hbsong/)

<a href="/authors/hbsong/" class="w-author__name-link">Hongbo Song</a>

- <a href="https://twitter.com/HongboSong" class="w-author__link">Twitter</a>
- <a href="https://github.com/debugtive0517" class="w-author__link">GitHub</a>

**Jun 2, 2021:** The update to CLS described in this post is now available across Chrome's web tooling surfaces. See [Evolving Cumulative Layout Shift in web tooling](/cls-web-tooling/) for details.

We (the Chrome Speed Metrics Team) recently outlined our initial research into [options for making the CLS metric more fair to pages that are open for a long time](/better-layout-shift-metric/). We've received a lot of very helpful feedback and after completing the large-scale analysis, we've finalized the change we plan to make to the metric: **maximum session window with 1 second gap, capped at 5 seconds**.

Read on for the details!

## How did we evaluate the options? <a href="#how-did-we-evaluate-the-options" class="w-headline-link">#</a>

We reviewed all the feedback received from the developer community and took it into account.

We also implemented the [top options](/better-layout-shift-metric/#best-strategies) in Chrome and did a large-scale analysis of the metrics over millions of web pages. We checked what types of sites each option improved, and how the options compared, especially looking into the sites which were scored differently by different options. Overall, we found that:

- **All** the options reduced the correlation between time spent on page and layout shift score.
- **None** of the options resulted in a worse score for any page. So there is no need to be concerned that this change will worsen the scores for your site.

## Decision points <a href="#decision-points" class="w-headline-link">#</a>

### Why a session window? <a href="#why-a-session-window" class="w-headline-link">#</a>

In our [earlier post](/better-layout-shift-metric/), we covered [a few different windowing strategies](/better-layout-shift-metric/#windowing-strategies) for grouping together layout shifts while ensuring the score doesn't grow unbounded. The feedback we received from developers overwhelmingly favored the session window strategy because it groups the layout shifts together most intuitively.

To review session windows, here's an example:

Example of a session window.

In the example above, many layout shifts occur over time as the user views the page. Each is represented by a blue bar. You'll notice above that the blue bars have different heights; those represent the [score](/cls/#layout-shift-score) of each individual layout shift. A session window starts with the first layout shift and continues to expand until there is a gap with no layout shifts. When the next layout shift occurs, a new session window starts. Since there are three gaps with no layout shifts, there are three session windows in the example. Similar to the current definition of CLS, the scores of each shift are added up, so that each window's score is the sum of its individual layout shifts.

Based on the [initial research](/better-layout-shift-metric/#best-strategies), we chose a 1 second gap between session windows, and that gap worked well in our large-scale analysis. So the "Session Gap" shown in the example above is 1 second.

### Why the maximum session window? <a href="#why-the-maximum-session-window" class="w-headline-link">#</a>

We narrowed the [summarization strategies](/better-layout-shift-metric/#summarization) down to two options in our initial research:

- The **average** score of all the session windows, for very large session windows (uncapped windows with 5 second gaps between them).
- The **maximum** score of all the session windows, for smaller session windows (capped at 5 seconds, with 1 second gaps between them).

After the initial research, we added each metric to Chrome so that we could do a large-scale analysis over millions of URLs. In the large-scale analysis, we found a lot of URLs with layout shift patterns like this:

<img src="https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format" alt="Example of a small layout shift pulling down the average" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/bW3lHZmss3cqGayZsq4P.png?auto=format&amp;w=1600 1600w" width="800" height="550" />

On the bottom right, you can see there is only a single, tiny layout shift in Session Window 2, giving it a very low score. That means that the average score is pretty low. But what if the developer fixes that tiny layout shift? Then the score is calculated just on Session Window 1, which means that the page's score _nearly doubles_. It would be really confusing and discouraging to developers to improve their layout shifts only to find that the score got worse. And removing this small layout shift is obviously slightly better for the user experience, so it shouldn't worsen the score.

Because of this problem with averages, we decided to move forward with the smaller, capped, maximum windows. So in the example above, Session Window 2 would be ignored and only the sum of the layout shifts in Session Window 1 would be reported.

### Why 5 seconds? <a href="#why-5-seconds" class="w-headline-link">#</a>

We evaluated multiple window sizes and found two things:

- For short windows, slower page loads and slower responses to user interactions could break layout shifts into multiple windows and improve the score. We wanted to keep the window large enough so it doesn't reward slowdowns!
- There are some pages with a continual stream of small layout shifts. For example, a sports score page that shifts a bit with each score update. These shifts are annoying, but they don't get more annoying as time passes. So we wanted to ensure that the window was capped for these types of layout shifts.

With these two things in mind, comparing a variety of window sizes on many real-world web pages, we concluded that 5 seconds would be a good limit to the window size.

## How will this affect my page's CLS score? <a href="#how-will-this-affect-my-page&#39;s-cls-score" class="w-headline-link">#</a>

Since this update caps the CLS of a page, **no page will have a worse score** as a result of this change.

And based on our analysis, **55% of origins will not see a change in CLS at all at the 75th percentile**. This is because their pages either do not currently have any layout shifts or the shifts they do have are already confined to a single session window.

**The rest of the origins will see improved scores at the 75th percentile with this change.** Most will only see a slight improvement, but about 3% will see their scores improve from having a "needs improvement" or "poor" rating to having a "good" rating. These pages tend to use infinite scrollers or have many slow UI updates, as described in our [earlier post](/better-layout-shift-metric/).

## How can I try it out? <a href="#how-can-i-try-it-out" class="w-headline-link">#</a>

We'll be updating our tools to use the new metric definition soon! Until then, you can try out the updated version of CLS on any site using the [example JavaScript implementations](https://github.com/mmocny/web-vitals/wiki/Snippets-for-LSN-using-PerformanceObserver) or the [fork of the Web Vitals extension](https://github.com/mmocny/web-vitals-extension/tree/experimental-ls).

Thanks to everyone who took the time to read the previous post and give their feedback!

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Apr 7, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/evolving-cls/index.md)

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
