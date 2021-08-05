<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format" alt="An illustration of e-commerce icons next to the text &quot;Scale on web&quot;" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/MaUpfoZXyw4uhTEBLuV1.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-focusing-on-web-performance-improved-tokopedia&#39;s-click-through-rate-by-35percent" class="w-toc__header--link">How focusing on web performance improved Tokopedia's click-through rate by 35%</a>

- [Highlighting the opportunity](#highlighting-the-opportunity)
- [The approach they used](#the-approach-they-used)
- [JavaScript and resource optimization](#javascript-and-resource-optimization)
- [Homepage optimization](#homepage-optimization)
- [Performance budgeting and monitoring](#performance-budgeting-and-monitoring)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How focusing on web performance improved Tokopedia's click-through rate by 35%

Creating a web performance dashboard and optimizing JavaScript, resources, and the homepage to achieve business success.

Oct 13, 2020

Tokopedia is one of the largest e-commerce companies in Indonesia. With 2.7M+ nationwide merchant networks, 18M+ product listings, and 50M+ monthly visitors, the web team knew that investment in web performance was essential. By building a performance-first culture, they achieved a 35% increase in click-through rates (CTR) and an 8% increase in conversions (CVR).

35<sub>%</sub>

Increase in CTR

8<sub>%</sub>

Increase in CVR

4<sub>sec</sub>

Improvement in TTI

## Highlighting the opportunity <a href="#highlighting-the-opportunity" class="w-headline-link">#</a>

The web team talked to their leadership team on the importance of investing in web performance to improve user experience and engagement, and also showed the impact of performance using advanced patterns and APIs.

Check out web.dev's [Build a performance culture](/fast/#build-a-performance-culture) collection for tips on how to persuade your cross-functional stakeholders to focus on website performance.

## The approach they used <a href="#the-approach-they-used" class="w-headline-link">#</a>

### JavaScript and resource optimization <a href="#javascript-and-resource-optimization" class="w-headline-link">#</a>

Render-blocking or long-running [JavaScript](/fast/#optimize-your-javascript) is a common cause of performance issues. The team took several steps to minimize this:

- Built a script controller library to selectively load third-party scripts to optimize for critical rendering path.
- Replaced heavier libraries with lighter ones.
- Implemented [code splitting](/reduce-javascript-payloads-with-code-splitting/) and optimized for above-the-fold content.
- Implemented [adaptive loading](/adaptive-loading-cds-2019/), e.g. only loading high-quality images for devices on fast networks and using lower-quality images for devices on slow networks.
- [Lazy-loaded](/lazy-loading-images/) below-the-fold images.
- Deferred loading of non-critical JavaScript.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G8s0LNl7BwXuNJkCsPwV.png?auto=format&amp;w=1600 1600w" width="800" height="707" /></figure>

### Homepage optimization <a href="#homepage-optimization" class="w-headline-link">#</a>

The team used [Svelte](https://svelte.dev/) to build a lite version of the homepage for first-time visitors, ensuring a fast website experience. This version also used a service worker to cache the non-lite assets in the background.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gSJXd2GT8nT7Uzsth4Gg.png?auto=format&amp;w=1600 1600w" width="800" height="657" /></figure>

### Performance budgeting and monitoring <a href="#performance-budgeting-and-monitoring" class="w-headline-link">#</a>

The team built a performance monitoring dashboard using [Lighthouse](/lighthouse-whats-new-6.0/) and other tools to improve the quality of web pages:

- Measures network quality, infrastructure monitoring, frontend performance, and server performance.
- Uses a combination of web platform APIs (such as the [Resource Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API) and the `Server-Timing` header), the [PageSpeed Insights (PSI) API](https://developers.google.com/speed/docs/insights/v5/get-started), and [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) data to monitor field and lab metrics.
- Analyzes images from Lighthouse to help identify image optimization opportunities.
- Enforces a bundle-size budget during continuous integration (CI). The CI run fails if the bundle size is over budget.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gObv2y7p7ozM190w61M3.png?auto=format&amp;w=1600 1600w" width="800" height="1097" /></figure>

> Being an e-commerce business, user acquisition is at the heart of our success. We acknowledge the importance of the web and thus we are passionate about investing in all the tools and features that will give the best user experience to our users.
>
> Dendi Sunardi, Engineering Manager, Web Platform, Tokopedia

Check out the [Scale on web case studies](/scale-on-web) page for more success stories from India and Southeast Asia.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/scale-on-web/" class="w-chip">Scale on web</a>

<span class="w-mr--sm"> Last updated: Oct 13, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/tokopedia/index.md)

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
