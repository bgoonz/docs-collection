<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format" alt="A long-exposure shot of a moving subway train and advertisement posters at the station photo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/xw8W0H84I776HdSNR1NJ.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#fast-ads-matter" class="w-toc__header--link">Fast ads matter</a>

- [Why do fast ads matter?](#why-do-fast-ads-matter)
- [Fast ads improve the user experience](#fast-ads-improve-the-user-experience)
- [Fast ads make you more money](#fast-ads-make-you-more-money)
- [A framework for thinking about ad speed](#a-framework-for-thinking-about-ad-speed)
- [Know why you want to improve ad speed](#know-why-you-want-to-improve-ad-speed)
- [Know your inventory and dependencies](#know-your-inventory-and-dependencies)
- [Know where you want to improve](#know-where-you-want-to-improve)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Fast ads matter

Learn how improving ad speed can increase revenue and makes users happy, and how to approach ad speed improvements.

Oct 29, 2019

[<img src="https://web-dev.imgix.net/image/admin/pXu2oWi0XOi9mzoNTtOG.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Gustav Ernberg von Heijne" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/pXu2oWi0XOi9mzoNTtOG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/pXu2oWi0XOi9mzoNTtOG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/pXu2oWi0XOi9mzoNTtOG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/pXu2oWi0XOi9mzoNTtOG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/pXu2oWi0XOi9mzoNTtOG.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/gernberg/)

<a href="/authors/gernberg/" class="w-author__name-link">Gustav Ernberg von Heijne</a>

- <a href="https://github.com/gernberg" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jonathon Imperiosi" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/9HsIJu89Pj0CqvED7rsc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jimper/)

<a href="/authors/jimper/" class="w-author__name-link">Jonathon Imperiosi</a>

- <a href="https://github.com/jimper" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/kqqjE2pJsDjyakfSPtsT.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rob Hazan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/kqqjE2pJsDjyakfSPtsT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/kqqjE2pJsDjyakfSPtsT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/kqqjE2pJsDjyakfSPtsT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/kqqjE2pJsDjyakfSPtsT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/kqqjE2pJsDjyakfSPtsT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/robhazan/)

<a href="/authors/robhazan/" class="w-author__name-link">Rob Hazan</a>

[<img src="https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Beng Eu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/JcKHWSuhVrG1uuxlLaUq.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thebengeu/)

<a href="/authors/thebengeu/" class="w-author__name-link">Beng Eu</a>

- <a href="https://twitter.com/thebengeu" class="w-author__link">Twitter</a>
- <a href="https://github.com/thebengeu" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@thebengeu" class="w-author__link">Glitch</a>

If you're like most publishers on the web, your business offers a simple value exchange: you provide content that users find valuable, and in the process present them with relevant ads to generate revenue. But if those ads slow down the content, are you really upholding your end of the bargain?

This post explains how fast ads benefit everyone, and how to start investigating and improving ad speed on your sites.

## Why do fast ads matter? <a href="#why-do-fast-ads-matter" class="w-headline-link">#</a>

### Fast ads improve the user experience <a href="#fast-ads-improve-the-user-experience" class="w-headline-link">#</a>

Users come to your site to be entertained, get informed, or learn something new, and they expect your site to load quickly, with minimal interruption. If your site helps users do that well, they tend to return more often. While ads may be necessary for your business, if they're slowing down your site they can create a tension with the user's purpose.

The browser has limited resources to work with—memory, CPU, and network bandwidth. The more of these resources your ads consume, the longer it takes for your page to become visually complete and [interactive](/interactive/). This can be a drag on user experience metrics like [session length](<https://en.wikipedia.org/wiki/Session_(web_analytics)>) and [bounce rate](https://en.wikipedia.org/wiki/Bounce_rate). You can improve these metrics by serving the most lightweight ads possible and loading them at the right time (which is not always right away).

For many e-commerce publishers, display ads are a secondary source of revenue. If you're one of these publishers, you know that any ads you place on the page have some negative impact on your primary business metrics (sales, subscriptions, and more). Fast ads, by getting out of the page's way, give your primary business metrics a boost as well.

When asked about their reasons for installing ad blockers, [many users cited "interruption" and "speed"](https://pagefair.com/blog/2017/adblockreport/) as primary motivators. Since fast ads result in improved user experience metrics, a focus on improving ad speed may decrease the incentive for users to install ad blockers.

### Fast ads make you more money <a href="#fast-ads-make-you-more-money" class="w-headline-link">#</a>

Another way to think about this topic is from an advertiser's point of view. The sooner an ad appears on the page, the longer it will be visible on the screen, meaning it's more likely to be seen and interacted with. As views and interactions increase, so does the value of your ad slots in the eyes of advertisers.

Conversely, [impressions](<https://en.wikipedia.org/wiki/Impression_(online_media)>) and [viewable impressions](https://en.wikipedia.org/wiki/Viewable_Impression) decrease the longer an ad takes to appear on the page. To provide a sense of the magnitude of this problem, the charts below show aggregated data from an experiment where a delay between 100 ms and 1 s was injected before each ad response, across 4 billion impressions on websites with the Google Publisher Tag in multi-request mode. The dotted lines are extrapolations to visualize how improving ad speed could increase impressions and viewability rate.

With 1 s of added delay, impressions decreased by 1.1% for mobile traffic and 1.9% for desktop traffic:

<figure><img src="https://web-dev.imgix.net/image/admin/upKhjFZogtlvQGtTfwrX.svg" alt="Source: Google Internal Data, December 2016 to January 2017." width="800" height="600" /><figcaption>Source: Google Internal Data, December 2016 to January 2017.</figcaption></figure>With 1 s of added delay, viewability rate decreased by 3.6% for mobile traffic and 2.9% for desktop traffic:

## <figure><img src="https://web-dev.imgix.net/image/admin/PeyZqzqs99y5kklrE2XK.svg" alt="Source: Google Internal Data, December 2016 to January 2017." width="800" height="600" /><figcaption>Source: Google Internal Data, December 2016 to January 2017.</figcaption></figure>A framework for thinking about ad speed <a href="#a-framework-for-thinking-about-ad-speed" class="w-headline-link">#</a>

Modern websites tend to have complex and diverse ad serving setups, which means there's no one-size-fits-all method of making ads fast. Instead, the following sections give you a framework for thinking about ad speed. Some points are specific to Google Ad Manager, but the principles apply even if you're using a different ad server.

### Know why you want to improve ad speed <a href="#know-why-you-want-to-improve-ad-speed" class="w-headline-link">#</a>

Before you start working to improve ad speed, you should be clear on what your goals are. Is it to improve the user experience? To increase viewability? Both?

Whatever your specific goals are, it's important to identify the metrics you can use to measure and track progress towards them over time. Having the right metrics in place allows you to:

- Know if the changes you're making are moving you in the right direction.
- Run experiments, such as A/B tests, to evaluate the effectiveness of specific changes.

Once you've decided on the metrics that make sense for you, be sure to configure reporting so you can easily keep track of them. A dashboard you can check periodically or scheduled reports sent to you by email work well for that.

### Know your inventory and dependencies <a href="#know-your-inventory-and-dependencies" class="w-headline-link">#</a>

To identify opportunities for improving ad speed, you first need to understand the types of inventory your site supports and the technical dependencies of each.

As an example, suppose a site supports the following inventory types:

- Desktop leaderboard
- Mobile banner

To load and display ads, the example site uses the following:

- A consent management platform
- Audience scripts
- Header bidding scripts
- A rendering framework

First, create a flowchart for each inventory type to visualize how the various dependencies interact in order to load and display an ad. Desktop leaderboard inventory may look like this:

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Kj5Vv9SffxhrfWmNtptm.svg" alt="An example workflow for the desktop leaderboard inventory type." width="800" height="92" />

While a more complex inventory type, such as mobile banner, may look like this:

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lzFgP8eaVWqLIlpBibyX.svg" alt="An example workflow for the mobile banner inventory type." width="800" height="287" />

Then, use this information to create a simple table like the one below, which maps each inventory type to its dependencies in an easily digestible format.

<table><thead><tr class="header"><th>Type of inventory</th><th>Consent management platform</th><th>Audience script</th><th>Header bidding script</th><th>Rendering framework</th></tr></thead><tbody><tr class="odd"><td>Desktop leaderboard</td><td>✔</td><td>✔ (X)</td><td>✔ (A)</td><td>-</td></tr><tr class="even"><td>Mobile banner</td><td>✔</td><td>✔ (X and Y)</td><td>✔ (A and B)</td><td>✔</td></tr></tbody></table>

Creating an overview of inventory types and dependencies like this helps to identify critical paths and areas for optimization. For example, you may find that some dependencies are included unnecessarily and can be removed for a quick speed improvement. This information is especially useful to have when analyzing ad loading times.

### Know where you want to improve <a href="#know-where-you-want-to-improve" class="w-headline-link">#</a>

A good way to approach improving ad speed is to focus on reducing the amount of time it takes for the first ad on your page to load. This time can be broken down into three main intervals:

Time to load ad libraries  
The time it takes to load all ad libraries necessary to issue the first ad request. May be improved by removing or [delaying the loading of scripts](/efficiently-load-third-party-javascript/) that are not related to making ad requests.

Time to first ad request  
The time elapsed from ad library load to the first ad request being made. May be improved by parallelizing header bidding requests and avoiding tasks that [block the main thread](/mainthread-work-breakdown/).

Time to render first ad  
The time elapsed from the first ad request being made to the first ad being rendered. May be improved by reducing ad complexity and creative file size.

Before you start making any changes, you need to decide which of these metrics to focus on. While the ultimate goal is to minimize them all, the relative importance of improving each (and the methods you use to do so) will greatly depend on your specific setup.

You can use a tool like [Publisher Ads Audits for Lighthouse](https://developers.google.com/publisher-ads-audits) to help you analyze your site, identify bottlenecks, and make an informed decision about what to focus your efforts on.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Now that you understand the importance of ad speed and have a framework for thinking about it, it's time to identify areas for improvement in your sites and make your ads fast. Finally, consider authoring your ads in [AMP](https://amp.dev/about/ads/), a format that reliably produces fast ads.

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Oct 29, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/fast-ads-matter/index.md)

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
