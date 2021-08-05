<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format" alt="An illustration of an e-commerce app next to the text &#39;SCALE ON WEB&#39;." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/tQYdZJzfseUxfjtvK3bL.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#rakuten-24&#39;s-investment-in-pwa-increases-user-retention-by-450percent" class="w-toc__header--link">Rakuten 24’s investment in PWA increases user retention by 450%</a>

- [Highlighting the opportunity](#opportunity)
- [The tools they used](#tools)
- [Installability](#installability)
- [beforeinstallprompt](#beforeinstallprompt)
- [Custom installation instructions](#instructions)
- [Workbox for service workers](#workbox)
- [Overall business results](#results)
- [Other ways the business improved with installability](#other-improvements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Rakuten 24’s investment in PWA increases user retention by 450%

Making their web app installable resulted in increased traffic, visitor retention, sales per customer, and conversions.

Nov 17, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[Rakuten 24](https://24.rakuten.co.jp/) is an online store provided by Rakuten, one of the largest e-commerce companies in Japan. It provides a wide selection of everyday items including grocery, medicine, healthcare, kitchen utensils, and more. The team's main goal over the last year was to improve mobile customer retention and re-engagement. By making their web app [installable](/define-install-strategy/), they saw a 450% jump in visitor retention rate as compared to the previous mobile web flow over a 1-month timeframe.

## Highlighting the opportunity <a href="#opportunity" class="w-headline-link">#</a>

In their efforts to gain market share and improve user experience, Rakuten 24 identified the following areas of opportunities:

- As a relatively new service, Rakuten 24 was not in a position to invest the time and cost in developing a platform-specific app both for iOS and Android and were seeking an alternative, efficient way to fill this gap.
- As Rakuten-Ichiba (Rakuten's e-commerce marketplace) is the biggest service in Japan, many people think Rakuten 24 is a seller in Rakuten-Ichiba. As a result, they acknowledged the need to invest in brand awareness and drive more user retention.

## The tools they used <a href="#tools" class="w-headline-link">#</a>

### Installability <a href="#installability" class="w-headline-link">#</a>

To capture the two opportunities identified above, Rakuten 24 decided to build [Progressive Web App](/pwa) (PWA) features on an incremental basis, starting with [installability](/define-install-strategy/). Implementing installability resulted in increased traffic, visitor retention, sales per customer, and conversions.

### `beforeinstallprompt` <a href="#beforeinstallprompt" class="w-headline-link">#</a>

To gain more flexibility and control over their install dialogue's behaviour, the team implemented their own install prompt using the [`beforeinstallprompt`](https://developers.google.com/web/updates/2018/06/a2hs-updates) event. In doing so, they were able to detect if the app was already installed on Android or iOS and provide a more meaningful and relevant experience to their users.

### Custom installation instructions <a href="#instructions" class="w-headline-link">#</a>

For users who weren't able to install the PWA from the banner, they created a [custom guide](https://24.rakuten.co.jp/addto/) (linked from the banner) with instructions on how to install the PWA manually on both Android and iOS devices.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/APDhzk6SjyxQTgxVidFR.png?auto=format&amp;w=1600 1600w" width="800" height="480" /></figure>### Workbox for service workers <a href="#workbox" class="w-headline-link">#</a>

The Rakuten 24 team used [Workbox](https://developers.google.com/web/tools/workbox) (the [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) to be precise) to ensure their PWA worked well even when the user was offline or on a bad network. Workbox's APIs for controlling [the cache](/service-workers-cache-storage/#the-cache-storage-api) worked significantly better than Rakuten 24's previous in-house script. Moreover, with workbox-webpack-plugin (and Babel), was able to automate the process of supporting a wider range of browsers. To further build network resilience, they implemented a [cache-first strategy](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker) for their CSS and JS assets, and used [stale-while-revalidate](/stale-while-revalidate/) for their images that don't change frequently.

## Overall business results <a href="#results" class="w-headline-link">#</a>

By implementing installability, Rakuten 24 was able to increase visit frequency per user by 310% compared to the rest of their web users. It also saw a 450% jump in visitor retention (compared to the previous mobile web flow), a 150% increase in sales per customer, and a 200% increase in conversion rate. All of the improvements were observed over a 1-month timeframe.

All stats represent users that installed the Rakuten 24 PWA, compared to web users who did not.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/l49plmwrrFO3V953MQZD.png?auto=format&amp;w=1600 1600w" width="800" height="1074" /></figure>

## Other ways the business improved with installability <a href="#other-improvements" class="w-headline-link">#</a>

- **Brand Awareness:** Since users can directly access Rakuten 24 from their home screen, it helped both users and Rakuten separate Rakuten 24 from Rakuten-Ichiba.
- **Efficiency:** Rakuten 24 was able to drive these results without spending significant time and money building platform-specific apps for iOS and Android.

> Our mission is to contribute to society by creating value through innovation and 　 entrepreneurship. A step towards achieving this was to improve the Rakuten 24 customer experience by implementing A2HS. And in the near future we also plan to enhance our PWA engagement and customer proposition by developing push notifications using the Web Push API.
>
> Masashi Watanabe, General Manager, Group Marketing Department, Rakuten Inc.

Previously the concept of installability was known as _add to homescreen_ (A2HS).

Check out the [Scale on web case studies](/scale-on-web) page for more success stories from India and Asia.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/install/" class="w-chip">Install</a> <a href="/tags/mobile/" class="w-chip">Mobile</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/scale-on-web/" class="w-chip">Scale on web</a>

<span class="w-mr--sm"> Last updated: Nov 17, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/rakuten-24/index.md)

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
