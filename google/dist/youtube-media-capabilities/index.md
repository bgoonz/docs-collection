<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format" alt="Youtube application screenshot" class="w-hero w-hero--cover w-hero--top" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/cuUZo9Ed6tzFgwRxbFgF.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-youtube-improved-video-performance-with-the-media-capabilities-api" class="w-toc__header--link">How YouTube improved video performance with the Media Capabilities API</a>

- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [YouTube Case Study](#youtube-case-study)
- [Implementing Media Capabilities API on your site](#implementing-media-capabilities-api-on-your-site)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How YouTube improved video performance with the Media Capabilities API

Ensuring buttery smooth video playback across all devices.

Jun 12, 2019

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

In an experiment with the Media Capabilities API, YouTube saw a 7.1% increase in MTBR with only a 0.4% decrease in average resolution of videos served.

**Key Term**: MTBR (Mean Time Between Rebuffers) is total play time divided by the number of rebuffering events.

## The Problem <a href="#the-problem" class="w-headline-link">#</a>

Typically, media sites have several variants of each video that they can present to users, encoded in different frame rates, resolutions, and codecs. Until recently, web developers had to rely solely on `isTypeSupported()` or `canPlayType()` to determine whether each variant could be played in an individual user's browser. While this told the developer whether media could be played at all, it didn't provide an indication of playback quality, such as whether there would be frame drops or device battery drain. Without this information, developers either had to create their own heuristics or just assume that if a device could play a codec/resolution combination, it could do so smoothly and with power efficiency. For users with less capable devices, this often led to a poor experience.

## The Solution <a href="#the-solution" class="w-headline-link">#</a>

The [Media Capabilities](https://wicg.github.io/media-capabilities/) API allows websites to get more information about the client's video decode performance and make an informed decision about which codec and resolution to deliver to the user. Specifically, the API provides the developer with an estimate of the smoothness and power efficiency of a particular codec and resolution combination. This allows the developer to avoid scenarios where the client is likely to have a poor playback experience.

In Chrome, the Media Capabilities API uses metrics from previous playbacks to predict whether future playbacks in the same codec and at the same resolution will be smoothly decoded.

## YouTube Case Study <a href="#youtube-case-study" class="w-headline-link">#</a>

YouTube used the [Media Capabilities](https://wicg.github.io/media-capabilities/) API to prevent their adaptive bitrate algorithm from automatically selecting resolutions that a device could not play smoothly.

Users who were part of the experimental group collectively saw less frequent rebuffers (the mean time between rebuffers, or MTBR, increased by 7.1%) while the average resolution, measured by video height, served to the aggregate group only declined by 0.4%. The substantial increase in the MTBR with the small corresponding reduction in average resolution indicates that this change significantly improved quality for a small subset of users who previously had a poor experience.

## Implementing Media Capabilities API on your site <a href="#implementing-media-capabilities-api-on-your-site" class="w-headline-link">#</a>

Check out the [official sample](https://googlechrome.github.io/samples/media-capabilities/decoding-info.html) to see how the Decoding Info API works.

<a href="/tags/media/" class="w-chip">Media</a> <a href="/tags/ux/" class="w-chip">UX</a> <a href="/tags/case-study/" class="w-chip">Case Study</a>

<span class="w-mr--sm"> Last updated: Jun 12, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/youtube-media-capabilities/index.md)

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
