<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format" alt="An illustration of icons related to website performance and the text &#39;scale on web&#39; and &#39;NDTV&#39;." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/55a7gPUzz2ORKgMIfodA.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#ndtv-achieved-a-55percent-improvement-in-lcp-by-optimizing-for-core-web-vitals" class="w-toc__header--link">NDTV achieved a 55% improvement in LCP by optimizing for Core Web Vitals</a>

- [Highlighting the opportunity](#highlighting-the-opportunity)
- [The approach they used](#the-approach-they-used)
- [Impact](#impact)
- [Return on investment](#return-on-investment)
- [Overall business results](#overall-business-results)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# NDTV achieved a 55% improvement in LCP by optimizing for Core Web Vitals

NDTV enhanced user experience and thus retention by optimizing for Web Vitals.

Oct 27, 2020 <span class="w-author__separator">•</span> Updated Oct 28, 2020

[NDTV](https://ndtv.com) is one of India's leading news stations and websites. By following the [Web Vitals](/vitals/) program, they improved one of their most important user metrics, [Largest Contentful Paint](/lcp/) (LCP), by 55% in just a month. This was correlated with a 50% reduction in bounce rates.

NDTV made other product changes while they optimized for Web Vitals so it is not possible to conclusively say that optimizing for Web Vitals was the only cause of the bounce rate reduction.

55<sub>%</sub>

Improvement in LCP

50<sub>%</sub>

Reduction in bounce rates

## Highlighting the opportunity <a href="#highlighting-the-opportunity" class="w-headline-link">#</a>

With close to 200M unique users every month, it was critical for NDTV to optimize for quality of user experience. Although their engagement rates were well over industry average and the highest amongst their peers, the NDTV team still saw room for improvement and decided to invest in Web Vitals along with other product changes to further improve their engagement rates.

## The approach they used <a href="#the-approach-they-used" class="w-headline-link">#</a>

With the help of tools like [PageSpeed Insights](/chrome-ux-report-pagespeed-insights/), [web.dev/measure](/measure), and [WebPageTest](https://www.webpagetest.org/) the NDTV team analyzed potential improvement areas on the site. These clearly defined optimization ideas helped them re-prioritize high-impact tasks and achieve immediate results in the improvement of Core Web Vitals. Optimizations included:

- **Prioritizing the largest content block** by [delaying third-party requests](/efficiently-load-third-party-javascript/#use-async-or-defer), including ad calls for below-the-fold ad slots, and social network embeds, which are also below-the-fold.
- **Increasing the [caching](/uses-long-cache-ttl/)** of static content from a few minutes to 30 days.
- **Using [`font-display`](/avoid-invisible-text/)** to display text sooner while fonts are downloaded.
- **Using vector graphics for icons** instead of TrueType Fonts (TTF).
- **Lazy loading [JavaScript](/efficiently-load-third-party-javascript/#lazy-load-third-party-resources) and [CSS](https://css-tricks.com/native-lazy-loading/)**: loading the page with the minimum possible JS and CSS and then lazy loading the remaining JS and CSS on page scroll.
- **[Preconnecting](/uses-rel-preconnect/)** to origins delivering critical assets.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/h8k2D4AqsGbeDtpjsfNe.png?auto=format&amp;w=1600 1600w" width="800" height="920" /></figure>

## Impact <a href="#impact" class="w-headline-link">#</a>

Web Vitals equipped the team with metric-driven signals to expedite the process of improving user experience.

Before beginning the optimization project, the NDTV team benchmarked their LCP score at 3.0 seconds (for the 75th percentile of their users, based on [Chrome User Experience Report](/chrome-ux-report/) field data). After the optimization project, it was down to 1.6 seconds. They also reduced their [Cumulative Layout Shift](/cls) (CLS) score to 0.05. Other metrics on WebPageTest like "[First Byte Time](/time-to-first-byte)" and "Effective use of [CDN](/content-delivery-networks/)" improved to an A grade.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WSQ9ATmLBzHmNtTWBIf8.png?auto=format&amp;w=1600 1600w" width="800" height="370" /></figure>

When optimizing your site, remember that it's important to not think of your metric scores as single values, but rather a distribution of field data values from real users. You'll want to make sure that the distribution overall is improving. See [Web Performance: Leveraging The Metrics That Most Affect UX](https://youtu.be/6Ljq-Jn-EgU?t=120) for more information.

## Return on investment <a href="#return-on-investment" class="w-headline-link">#</a>

Despite the complexity and depth of [ndtv.com](https://ndtv.com), the site was already achieving decent FID and CLS scores, thanks to the team's longstanding focus on performance and UX best practices. To further improve their user experience, the team focused on LCP and managed to meet the threshold within a few weeks of kicking off their optimization work.

## Overall business results <a href="#overall-business-results" class="w-headline-link">#</a>

- 55% improvement in LCP as a result of optimizing for Core Web Vitals.
- 50% reduction in bounce rate on the website after optimizing for Core Web Vitals, along with other product changes.
- Increased engagement and consumption of content directly, and proportionally increased revenue for their website.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lN46T0iOTj45lSOkE8mo.png?auto=format&amp;w=1600 1600w" width="800" height="825" /></figure>

> NDTV has long followed best practices to deliver a top-quality user experience. We consider measuring Web Vitals to be an integral part of our product development now, and the engagement uplift we've seen makes it a good ROI.
>
> Kawaljit Singh Bedi, Chief Technology and Product Officer, NDTV Group

Check out the [Scale on web case studies](/scale-on-web) page for more success stories from India and Southeast Asia.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/scale-on-web/" class="w-chip">Scale on web</a>

<span class="w-mr--sm"> Last updated: Oct 28, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/ndtv/index.md)

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
