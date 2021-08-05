<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format" alt="Dew on a thin leaf in macro" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/CYbrrEv8KBJtPHCvLV4Y.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-google-improved-ads-performance-with-stale-while-revalidate" class="w-toc__header--link">How Google improved ads performance with stale-while-revalidate</a>

- [Background](#background)
- [The problem](#the-problem)
- [The solution](#the-solution)
- [Google display ads case study](#google-display-ads-case-study)
- [Implementing stale-while-revalidate on your site](#implementing-stale-while-revalidate-on-your-site)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How Google improved ads performance with stale-while-revalidate

Find out how loading third-party resources faster can increase revenue.

Mar 5, 2020

[<img src="https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Beng Eu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thebengeu/)

<a href="/authors/thebengeu/" class="w-author__name-link">Beng Eu</a>

- <a href="https://twitter.com/thebengeu" class="w-author__link">Twitter</a>
- <a href="https://github.com/thebengeu" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@thebengeu" class="w-author__link">Glitch</a>

[<img src="https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jonathon Imperiosi" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jimper/)

<a href="/authors/jimper/" class="w-author__name-link">Jonathon Imperiosi</a>

- <a href="https://github.com/jimper" class="w-author__link">GitHub</a>

This case study highlights how improving the performance of third-party resources can boost business metrics. While a [previous study](/fast-ads-matter/#fast-ads-make-you-more-money) measured the cost of added ads latency, this study demonstrates the value of a real-world performance improvement:

0.5<sub>%</sub>

Revenue lift for publishers

2<sub>%</sub>

Increase in early ad script loads

Source: Google Internal Data, June to July 2019.

## Background <a href="#background" class="w-headline-link">#</a>

The [Google Publisher Tag (GPT)](https://support.google.com/admanager/answer/181073) is the ad tagging script for Google Ad Manager that requests and renders display ads on the web. By implementing a simple [`stale-while-revalidate`](/stale-while-revalidate/) HTTP header for GPT, the GPT team was able to improve the speed and performance of Google display ads for its publisher partners. This same technique can be applied to any other scenario where loading scripts as quickly as possible is more important than loading the freshest code.

## The problem <a href="#the-problem" class="w-headline-link">#</a>

GPT is deployed as a bootstrapping script, `gpt.js`, which is given a short time to live (TTL) of 15 minutes. This short TTL allows the script to be updated or rolled back quickly. Once loaded, `gpt.js` requests and loads additional implementation scripts, which have a longer TTL.

Once the 15 minute TTL expires, the version of `gpt.js` in cache goes stale and needs to be revalidated. Previously, this revalidation process involved making a synchronous network request to fetch a fresh copy of the script, adding latency to the first ad request.

## The solution <a href="#the-solution" class="w-headline-link">#</a>

The [`stale-while-revalidate`](https://tools.ietf.org/html/rfc5861#section-3) attribute is used by the `Cache-Control` header and defines an extra window of time during which a cache can use a stale asset while the asset is revalidated asynchronously. This helps developers balance between immediacy—_loading cached content right away_—and freshness—_ensuring updates to the cached content are used in the future_.

## Google display ads case study <a href="#google-display-ads-case-study" class="w-headline-link">#</a>

The GPT team added this `Cache-Control` header in the `gpt.js` HTTP response in 2016, in anticipation of browsers implementing `stale-while-revalidate`:

    cache-control: private, max-age=900, stale-while-revalidate=3600

This setting means that if `gpt.js` is requested between 15 and 60 minutes after the previous cached value, then the cached value will be used to fulfill the request even though it's stale. At the same time, a revalidation request will be made in the background to populate the cache with a fresh value for future use.

Chrome rolled out `stale-while-revalidate` in version 75 to 99% of all traffic, leaving 1% of traffic with the feature disabled temporarily to measure its impact. The GPT team logged metrics from this 1% (the experimental group) as well as a 1% sample of traffic with the feature enabled (the control group), to test the effectiveness of `stale-while-revalidate` for ad scripts. Over the course of 2 weeks of metrics logged from a sample size of 5.2 billion Google display ad impressions, the control group observed:

- 0.3% increase in ad impressions.
- 0.5% increase in revenue.
- 2% increase in early ad script loads (&lt;500ms from the start of page load).
- 1.1% increase in successful ad script loads overall.

<figure><img src="https://web-dev.imgix.net/image/admin/ZRKz2IHKdGNTDM3WdsvX.svg" alt="Source: Google Internal Data, June to July 2019." width="800" height="600" /><figcaption>Source: Google Internal Data, June to July 2019.</figcaption></figure>As shown in the chart above, the results of this experiment can be attributed to an increase in successful ad script loads, with a majority occurring early in the page load process.

## Implementing stale-while-revalidate on your site <a href="#implementing-stale-while-revalidate-on-your-site" class="w-headline-link">#</a>

The GPT team has seen that making a relatively simple change to HTTP headers with `stale-while-revalidate` can improve speed and boost business metrics. Check out the [Keeping things fresh with stale-while-revalidate](/stale-while-revalidate) post for more on implementing `stale-while-revalidate` on your own site.

Photo by [Kahica](https://unsplash.com/@kahika) on [Unsplash](https://unsplash.com/photos/XSSibD1bt80)

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Mar 5, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/ads-case-study-stale-while-revalidate/index.md)

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
