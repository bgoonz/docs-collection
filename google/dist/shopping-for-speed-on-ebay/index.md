<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format" alt="The eBay Logo and a screenshot of the eBay site" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UMFt6kc3YZIaF2Qzqd0d.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#shopping-for-speed-on-ebay.com" class="w-toc__header--link">Shopping for speed on eBay.com</a>

- [Web Performance "cuts"](#web-performance-)
- [Reduce payload across all text resources](#reduce-payload-across-all-text-resources)
- [Critical path optimization for above-the-fold content](#critical-path-optimization-for-above-the-fold-content)
- [Image optimizations](#image-optimizations)
- [Predictive prefetch of static assets](#predictive-prefetch-of-static-assets)
- [Prefetching top search results](#prefetching-top-search-results)
- [Eager downloading of search images](#eager-downloading-of-search-images)
- [Edge caching for autosuggestion data](#edge-caching-for-autosuggestion-data)
- [Edge caching for unrecognized homepage users](#edge-caching-for-unrecognized-homepage-users)
- [Optimizations for other platforms](#optimizations-for-other-platforms)
- [iOS/Android app parsing improvements](#iosandroid-app-parsing-improvements)
- [Android app startup time improvements](#android-app-startup-time-improvements)
- [Conclusions](#conclusions)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Shopping for speed on eBay.com

Optimizing the performance of eBay's sites and apps for a faster user experience.

Jan 22, 2020

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

Speed was a [company-wide initiative](https://tech.ebayinc.com/engineering/speed-by-a-thousand-cuts/) for eBay in 2019, with many teams determined to make the site and apps as fast as possible for users. In fact, **for every 100 milliseconds improvement in search page loading time, eBay saw a 0.5% increase in "Add to Cart" count.**

100<sub>ms</sub>

Improvement in load time

0.5<sub>%</sub>

Increase in "Add to Cart" count

Through the adoption of [Performance Budgets](/performance-budgets-101/) (derived after doing a competitive study with the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)) and a focus on key [user-centric performance metrics](/user-centric-performance-metrics/), eBay was able to make significant improvements to site speed.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format" alt="eBay&#39;s speed improvements." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JXQCBQRuezhMQhfQShXq.png?auto=format&amp;w=1600 1600w" width="800" height="186" /><figcaption>eBay's speed improvements.</figcaption></figure>…and their Chrome User Experience Report data highlights these improvements, too.

<figure><img src="https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format" alt="Chrome User Experience Report data for First Contentful Paint and First Input Delay for the eBay.com origin." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/YeJPjxdDBrdbgLxcbl7E.png?auto=format&amp;w=1600 1600w" width="800" height="237" /><figcaption>Chrome User Experience Report data for <a href="/fcp/">First Contentful Paint</a> and <a href="/fid/">First Input Delay</a> for the eBay.com origin.</figcaption></figure>There's still more work ahead but here's eBay's learnings so far.

## Web Performance "cuts" <a href="#web-performance-%22cuts%22" class="w-headline-link">#</a>

The improvements eBay made were possible due to the reduction or "cuts" (in the size and time) of various entities that take part in a user's journey. This post covers topics that are relevant to the web developer community at large, rather than eBay-specific topics.

## Reduce payload across all text resources <a href="#reduce-payload-across-all-text-resources" class="w-headline-link">#</a>

One way to make sites fast is to simply load less code. eBay reduced their text payloads by trimming all the [unused and unnecessary bytes](/remove-unused-code/) of JavaScript, CSS, HTML, and JSON responses served to users. Previously, with every new feature, eBay kept increasing the payload of their responses, without cleaning up what was unused. This added up over time and became a performance bottleneck. Teams usually procrastinated on this cleanup activity, but you'd be surprised by how much eBay saved.

The "cut" here is the wasted bytes in the response payload.

## Critical path optimization for above-the-fold content <a href="#critical-path-optimization-for-above-the-fold-content" class="w-headline-link">#</a>

Not every pixel on the screen is equally important. The content [above-the-fold](https://www.optimizely.com/optimization-glossary/above-the-fold/) is [more critical](/extract-critical-css/) than something below-the-fold. iOS/Android/desktop and web apps are aware of this, but what about services? eBay's service architecture has a layer called [Experience Services](https://tech.ebayinc.com/engineering/experience-services-ebays-solution-to-multi-screen-application-development/), which the frontends (platform-specific apps and web servers) talk to. This layer is specifically designed to be view- or device-based, rather than entity-based like item, user, or order. eBay then introduced the concept of the critical path for Experience Services. When a request comes to these services, they work on getting the data for above-the-fold content immediately, by calling other upstream services in parallel. Once data is ready, it is instantly flushed. The below-the-fold data is sent in a later chunk or lazy-loaded. The outcome: users get to see above-the-fold content quicker.

The "cut" here is the time spent by services to display relevant content.

## Image optimizations <a href="#image-optimizations" class="w-headline-link">#</a>

Images are [one of the largest contributors to page bloat](https://almanac.httparchive.org/en/2019/media). Even small optimizations go a long way. eBay did two optimizations for images.

First, eBay standardized on the [WebP image format](/serve-images-webp/) for search results across all platforms, including iOS, Android, and [supported browsers](https://caniuse.com/#feat=webp). The search results page is the most image-heavy page at eBay, and they were already using WebP, but not in a consistent pattern.

<figure><img src="https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format" alt="WebP images being served to supported browsers on eBay.com." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wxY64wQbCvgdEuI8DlUY.png?auto=format&amp;w=1600 1600w" width="800" height="506" /><figcaption>WebP images being served to supported browsers on eBay.com.</figcaption></figure>Second, though eBay's listing images are heavily optimized (in both size and format), the same rigor did not apply for curated images (for example, the top module on the [homepage](https://www.ebay.com/)). eBay has a lot of hand-curated images, which are uploaded through various tools. Previously the optimizations were up to the uploader, but now eBay enforces the rules within the tools, so all images uploaded will be optimized appropriately.

The "cut" here is the wasted image bytes sent to users.

## Predictive prefetch of static assets <a href="#predictive-prefetch-of-static-assets" class="w-headline-link">#</a>

A user session on eBay is not just one page. It is a flow. For example, the flow can be a navigation from the homepage to a search page to an item page. So why don't pages in the flow help each other? That is the idea of [predictive prefetch](/predictive-prefetching/), where one page prefetches the static assets required for the next likely page.

With predictive prefetch, when a user navigates to the predicted page, the assets are already in the browser cache. This is done for CSS and JavaScript assets, where the URLs can be retrieved ahead of time. One thing to note here is that it helps only on first-time navigations. On subsequent navigations, the static assets will already be in the cache.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dcipECBEv200bO8CWkrs.png?auto=format&amp;w=1600 1600w" width="800" height="448" /></figure>The "cut" here is the network time for CSS and JavaScript static assets on the first navigation.

## Prefetching top search results <a href="#prefetching-top-search-results" class="w-headline-link">#</a>

When a user searches eBay, eBay's analytics data suggests that it is highly likely that the user will navigate to an item in the top 10 of the search results. So eBay now prefetches the items from search and keeps them ready for when the user navigates. The prefetching happens at two levels.

The first level happens server-side, where the item service caches the top 10 items in search results. When the user goes to one of those items, eBay now saves server processing time. Server-side caching is leveraged by platform-specific apps and is rolled out globally.

The other level happens in the browser cache, which is available in Australia. Item prefetch was an advanced optimization due to the dynamic nature of items. There are also many nuances to it: page impressions, capacity, auction items, and so on. You can learn more about it in [LinkedIn's Performance Engineering Meetup presentation](https://www.youtube.com/watch?v=ogEhUnQdQiU&t=984s), or stay tuned for a detailed blog post on the topic from eBay's engineers.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6wW7yHAD7vMBDUDCzm2B.png?auto=format&amp;w=1600 1600w" width="800" height="451" /></figure>The "cut" here can either be server processing time or network time, depending on where the item is cached.

## Eager downloading of search images <a href="#eager-downloading-of-search-images" class="w-headline-link">#</a>

In the search results page, when a query is issued at a high level, two things happen. One is the recall/ranking step, where the most relevant items matching the query are returned. The second step is augmenting the recalled items with additional user-context related information such as shipping costs. eBay now immediately sends the first 10 item images to the browser in a chunk along with the header, so the downloads can start before the rest of the markup arrives. As a result, the images will now appear quicker. This change is rolled out globally for the web platform.

The "cut" here is the download start time for search result images.

## Edge caching for autosuggestion data <a href="#edge-caching-for-autosuggestion-data" class="w-headline-link">#</a>

When users type in letters in the search box, suggestions pop-up. These suggestions do not change for letter combinations for at least a day. They are ideal candidates to be cached and served from a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) (for a max of 24 hours), instead of requests going all the way to a data center. International markets especially benefit from CDN caching.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5HVWuq5nIvQ6aCoaltIl.png?auto=format&amp;w=1600 1600w" width="800" height="417" /></figure>There was a catch, though. eBay had some elements of personalization in the suggestions pop-up, which can't be cached efficiently. Fortunately, it was not an issue in the platform-specific apps, as the user interface for personalization and suggestions could be separated. For the web, in international markets, latency was more important than the small benefit of personalization. With that out of the way, eBay now has autosuggestions served from a CDN cache globally for platform-specific apps and non-US markets for eBay.com.

The "cut" here is the network latency and server processing time for autosuggestions.

## Edge caching for unrecognized homepage users <a href="#edge-caching-for-unrecognized-homepage-users" class="w-headline-link">#</a>

For the web platform, the homepage content for unrecognized users is the same for a particular region. These are users who are either using eBay for the first time or starting a fresh session, hence no personalization. Though the homepage creatives keep changing frequently there is still room for caching.

eBay decided to cache the unrecognized user content (HTML) on their edge network ([PoPs](https://en.wikipedia.org/wiki/Point_of_presence)) for a short period. First-time users can now get homepage content served from a server near them, instead of from a faraway data center. eBay is still experimenting with this in international markets, where it will have a bigger impact.

The "cut" here is again both network latency and server processing time for unrecognized users.

## Optimizations for other platforms <a href="#optimizations-for-other-platforms" class="w-headline-link">#</a>

### iOS/Android app parsing improvements <a href="#iosandroid-app-parsing-improvements" class="w-headline-link">#</a>

iOS/Android apps talk to backend services whose response format is typically JSON. These JSON payloads can be large. Instead of parsing the whole JSON to render something on the screen, eBay introduced an efficient parsing algorithm that optimizes for content that needs to be displayed immediately.

Users can now see the content quicker. In addition, for the Android app, eBay starts initializing the search view controllers as soon as the user starts typing in the search box (iOS already had this optimization). Previously this happened only after users pressed the search button. Now users can get to their search results faster. The "cut" here is the time spent by devices to display relevant content.

### Android app startup time improvements <a href="#android-app-startup-time-improvements" class="w-headline-link">#</a>

This applies to [cold start](https://developer.android.com/topic/performance/vitals/launch-time#cold) time optimizations for Android apps. When an app is cold started, a lot of initialization happens both at the OS level and application level. Reducing the initialization time at the application level helps users see the home screen quicker. eBay did some profiling and noticed that not all initializations are required to display content and that some can be done lazily.

More importantly, eBay observed that there was a blocking third-party analytics call that delayed the rendering on the screen. Removing the blocking call and making it async further helped cold start times. The "cut" here is the unnecessary startup time for Android apps.

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

All the performance "cuts" eBay made collectively contributed towards moving the needle, and it happened over a period of time. The releases were phased in throughout the year, with each release shaving off tens of milliseconds, ultimately reaching the point where eBay is now:

<figure><img src="https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format" alt="The impact of eBay&#39;s speed efforts on their field metrics over time, as illustrated by the Chrome UX Report Dashboard." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/GxKfB8GHUd9cQWLb0Pkj.png?auto=format&amp;w=1600 1600w" width="800" height="529" /><figcaption>The impact of eBay's speed efforts on their field metrics over time, as illustrated by the <a href="https://g.co/chromeuxdash">Chrome UX Report Dashboard</a>.</figcaption></figure>Performance is a feature and a [competitive advantage](/value-of-speed/). Optimized experiences lead to higher user engagement, conversions, and ROI. In eBay's case, these optimizations varied from things that were low-effort to a few that were advanced.

Check out [Speed by a thousand cuts](https://tech.ebayinc.com/engineering/speed-by-a-thousand-cuts/) to learn more and be on the lookout for more detailed articles by eBay engineers on their performance work in the near future.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Jan 22, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/shopping-for-speed-on-ebay/index.md)

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
