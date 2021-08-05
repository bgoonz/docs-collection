<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format" alt="AirSHIFT&#39;s logo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/LD0Xn6rMjbIo8nCziZhK.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#five-ways-airshift-improved-their-react-app&#39;s-runtime-performance" class="w-toc__header--link">Five ways AirSHIFT improved their React app's runtime performance</a>

- [Slow response, less productivity](#slow-response-less-productivity)
- [1. Virtualize large tables](#1.-virtualize-large-tables)
- [Results](#results)
- [2. Audit with User Timing API](#2.-audit-with-user-timing-api)
- [Results](#results-2)
- [3. Lazy load components and move expensive logic to web workers](#3.-lazy-load-components-and-move-expensive-logic-to-web-workers)
- [Results](#results-3)
- [4. Setting a performance budget](#4.-setting-a-performance-budget)
- [Results](#results-4)
- [5. Performance hackathons](#5.-performance-hackathons)
- [Results](#results-5)
- [Summary](#summary)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Five ways AirSHIFT improved their React app's runtime performance

A real-world case study of React SPA performance optimization.

Nov 6, 2019

[<img src="https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yusuke Utsunomiya" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/uskay/)

<a href="/authors/uskay/" class="w-author__name-link">Yusuke Utsunomiya</a>

- <a href="https://twitter.com/uskay" class="w-author__link">Twitter</a>
- <a href="https://blog.uskay.io/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/XCKP6ZnBZIezAB5ReAfk.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yosuke Furukawa" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/XCKP6ZnBZIezAB5ReAfk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/XCKP6ZnBZIezAB5ReAfk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/XCKP6ZnBZIezAB5ReAfk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/XCKP6ZnBZIezAB5ReAfk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/XCKP6ZnBZIezAB5ReAfk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/yosuke_furukawa/)

<a href="/authors/yosuke_furukawa/" class="w-author__name-link">Yosuke Furukawa</a>

- <a href="https://twitter.com/yosuke_furukawa" class="w-author__link">Twitter</a>

[<img src="https://web-dev.imgix.net/image/admin/bSMJWJHcRvGcRhnwVxs7.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Satoshi Arai" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/bSMJWJHcRvGcRhnwVxs7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/bSMJWJHcRvGcRhnwVxs7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/bSMJWJHcRvGcRhnwVxs7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/bSMJWJHcRvGcRhnwVxs7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/bSMJWJHcRvGcRhnwVxs7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/satoshi_arai/)

<a href="/authors/satoshi_arai/" class="w-author__name-link">Satoshi Arai</a>

[<img src="https://web-dev.imgix.net/image/admin/6IoGBLrEZkQnm0JfMV0O.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kento Tsuji" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/6IoGBLrEZkQnm0JfMV0O.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/6IoGBLrEZkQnm0JfMV0O.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/6IoGBLrEZkQnm0JfMV0O.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/6IoGBLrEZkQnm0JfMV0O.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/6IoGBLrEZkQnm0JfMV0O.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kento_tsuji/)

<a href="/authors/kento_tsuji/" class="w-author__name-link">Kento Tsuji</a>

- <a href="https://twitter.com/maxmellon_9039" class="w-author__link">Twitter</a>

Website performance is not just about load time. It is critical to provide a fast and responsive experience to users, especially for productivity desktop apps which people use everyday. The engineering team at [Recruit Technologies](https://recruit-tech.co.jp/) went through a refactoring project to improve one of their web apps, [AirSHIFT](https://airregi.jp/shift/), for better user input performance. Here's how they did it.

## Slow response, less productivity <a href="#slow-response-less-productivity" class="w-headline-link">#</a>

AirSHIFT is a desktop web application that helps store owners, like restaurants and cafes, to manage the shift work of their staff members. Built with React, the single page application provides rich client features including various grid tables of shift schedules organized by day, week, month and more.

<img src="https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format" alt="A screenshot of the AirSHIFT web app." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/q7g5sY2ix1oTwoPJX7qX.png?auto=format&amp;w=1600 1600w" width="800" height="626" />

As the Recruit Technologies engineering team added new features to the AirSHIFT app, they started seeing more feedback around slow performance. The engineering manager of AirSHIFT, Yosuke Furukawa, said:

> In a user research study, we were shocked when one of the store owners said she would leave her seat to brew coffee after clicking a button, just to kill time waiting for the shift table to load.

After going through the research, the engineering team realized that many of their users were trying to load massive shift tables on low spec computers, such as a 1 GHz Celeron M laptop from 10 years ago.

Endless spinner on low end devices.

The AirSHIFT app was blocking the main thread with expensive scripts, but the engineering team didn't realize how expensive the scripts were because they were developing and testing on rich spec computers with fast Wi-Fi connections.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format" alt="When loading the shift table, around 80% of the load time was consumed by running scripts." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/RAi3zG4JngSi0UlSMi0a.png?auto=format&amp;w=1600 1600w" width="800" height="476" /><figcaption>When loading the shift table, around 80% of the load time was consumed by running scripts.</figcaption></figure>After profiling their performance in Chrome DevTools with CPU and network throttling enabled, it became clear that performance optimization was needed. AirSHIFT formed a task force to tackle this issue. Here are 5 things they focused on to make their app more responsive to user input.

1. Virtualize large tables <a href="#1.-virtualize-large-tables" class="w-headline-link">#</a>

---

Displaying the shift table required multiple expensive steps: constructing the virtual DOM and rendering it on screen in proportion to the number of staff members and time slots. For example, if a restaurant had 50 working members and wanted to check their monthly shift schedule, it would be a table of 50 (members) multiplied by 30 (days) which would lead to 1,500 cell components to render. This is a very expensive operation, especially for low spec devices. In reality, things were worse. From the research they learned there were shops managing 200 staff members, requiring around 6,000 cell components in a single monthly table.

To reduce the cost of this operation, AirSHIFT virtualized the shift table. The app now only mounts the components within the viewport and unmounts the off-screen components.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format" alt="Before: Rendering all the shift table cells." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/QOVmOQa0Jryhg8tKPBFs.png?auto=format&amp;w=1600 1600w" width="800" height="306" /><figcaption>Before: Rendering all the shift table cells.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format" alt="After: Only rendering the cells within the viewport." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/NLSdFKj1gpGBO82pfNNO.png?auto=format&amp;w=1600 1600w" width="800" height="307" /><figcaption>After: Only rendering the cells within the viewport.</figcaption></figure>In this case, AirSHIFT used [react-virtualized](https://github.com/bvaughn/react-virtualized) as there were requirements around enabling complex two dimensional grid tables. They are also exploring ways to convert the implementation to use the lightweight [react-window](/virtualize-long-lists-react-window/) in the future.

### Results <a href="#results" class="w-headline-link">#</a>

Virtualizing the table alone reduced scripting time by 6 seconds (on a 4x CPU slowdown + Fast 3G throttled Macbook Pro environment). This was the most impactful performance improvement in the refactoring project.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format" alt="Before: Around 10 seconds of scripting after user input." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pRX1ap7tVOdAoTo35MWj.png?auto=format&amp;w=1600 1600w" width="800" height="289" /><figcaption>Before: Around 10 seconds of scripting after user input.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format" alt="After: 4 seconds of scripting after user input." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/bCy17DjlhMWXSsN1cFAZ.png?auto=format&amp;w=1600 1600w" width="800" height="358" /><figcaption>After: 4 seconds of scripting after user input.</figcaption></figure>2. Audit with User Timing API <a href="#2.-audit-with-user-timing-api" class="w-headline-link">#</a>

Next, the AirSHIFT team refactored the scripts that run on user input. The [flame chart](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#main) of [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) makes it possible to analyze what's actually happening in the main thread. But the AirSHIFT team found it easier to analyze application activity based on React's lifecycle.

React 16 provides its performance trace via the [User Timing API](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API), which you can visualize from the [Timings section](https://developers.google.com/web/updates/2018/04/devtools#tabs) of Chrome DevTools. AirSHIFT used the Timings section to find unnecessary logic running in React lifecycle events.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format" alt="React&#39;s User Timing events." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zTvUhCKRSCvZzo9mlkte.png?auto=format&amp;w=1600 1600w" width="800" height="388" /><figcaption>React's User Timing events.</figcaption></figure>Related article: [Profiling Components with the Chrome Performance Tab](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)

### Results <a href="#results-2" class="w-headline-link">#</a>

The AirSHIFT team discovered that an unnecessary [React Tree Reconciliation](https://reactjs.org/docs/reconciliation.html) was happening right before every route navigation. This meant that React was updating the shift table unnecessarily before navigations. An unnecessary Redux state update was causing this issue. Fixing it saved around 750 ms of scripting time. AirSHIFT made other micro optimizations as well which eventually led to a 1 second total reduction in scripting time.

3. Lazy load components and move expensive logic to web workers <a href="#3.-lazy-load-components-and-move-expensive-logic-to-web-workers" class="w-headline-link">#</a>

---

AirSHIFT has a built-in chat application. Many store owners communicate with their staff members via the chat while looking at the shift table, which means that a user might be typing a message while the table is loading. If the main thread is occupied with scripts that are rendering the table, user input could be janky.

To improve this experience, AirSHIFT now uses [React.lazy and Suspense](/code-splitting-suspense/) to show placeholders for table contents while lazily loading the actual components.

The AirSHIFT team also migrated some of the expensive business logic within the lazily loaded components to [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). This solved the user input jank problem by freeing up the main thread so that it could focus on responding to user input.

Typically developers face complexity in using workers but this time [Comlink](https://github.com/GoogleChromeLabs/comlink) did the heavy lifting for them. Below is the pseudo code of how AirSHIFT workerized one of the most expensive operations they had: calculating total labor costs.

_In App.js, use React.lazy and Suspense to show fallback content while loading_

    /** App.js */
    import React, { lazy, Suspense } from 'react'

    // Lazily loading the Cost component with React.lazy
    const Hello = lazy(() => import('./Cost'))

    const Loading = () => (
      <div>Some fallback content to show while loading</div>
    )

    // Showing the fallback content while loading the Cost component by Suspense
    export default function App({ userInfo }) {
       return (
        <div>
          <Suspense fallback={<Loading />}>
            <Cost />
          </Suspense>
        </div>
      )
    }

_In the Cost component, use comlink to execute the calc logic_

    /** Cost.js */
    import React from 'react';
    import { proxy } from 'comlink';

    // import the workerlized calc function with comlink
    const WorkerlizedCostCalc = proxy(new Worker('./WorkerlizedCostCalc.js'));
    export default async function Cost({ userInfo }) {
      // execute the calculation in the worker
      const instance = await new WorkerlizedCostCalc();
      const cost = await instance.calc(userInfo);
      return <p>{cost}</p>;
    }

_Implement the calculation logic that runs in the worker and expose it with comlink_

    // WorkerlizedCostCalc.js
    import { expose } from 'comlink'
    import { someExpensiveCalculation } from './CostCalc.js'

    // Expose the new workerlized calc function with comlink
    expose({
      calc(userInfo) {
        // run existing (expensive) function in the worker
        return someExpensiveCalculation(userInfo);
      }
    }, self);

Related article: [React + Redux + Comlink = Off-main-thread](https://dassur.ma/things/react-redux-comlink/)

### Results <a href="#results-3" class="w-headline-link">#</a>

Despite the limited amount of logic they workerized as a trial, AirSHIFT shifted around 100 ms of their JavaScript from the main thread to the worker thread (simulated with 4x CPU throttling).

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format" alt="A screenshot of a Chrome DevTools Performance panel recording that shows that scripting is now occurring on a web worker rather than the main thread." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cFIFNeEKqbyWGBEuPCy2.png?auto=format&amp;w=1600 1600w" width="800" height="99" />

AirSHIFT is currently exploring whether they can lazy load other components and offload more logic to web workers to further reduce jank.

4. Setting a performance budget <a href="#4.-setting-a-performance-budget" class="w-headline-link">#</a>

---

Having implemented all of these optimizations, it was critical to make sure that the app remains performant over time. AirSHIFT now uses [bundlesize](https://github.com/siddharthkp/bundlesize) to not exceed the current JavaScript and CSS file size. Aside from setting these basic budgets, they built a dashboard to show various percentiles of the shift table loading time to check whether the application is performant even in non-ideal conditions.

- The script completion time for every Redux event is now measured
- Performance data is collected in [Elasticsearch](https://www.elastic.co/jp/)
- 10th, 25th, 50th, and 75th percentile performance of each event is visualized with [Kibana](https://www.elastic.co/jp/products/kibana)

AirSHIFT is now monitoring the shift table loading event to make sure it completes in 3 seconds for the 75th percentile users. This is an unenforced budget for now but they are considering auto-notifications via Elasticsearch when they exceed their budget.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format" alt="The Kibana dashboard showing daily performance data by percentiles." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/pSRqSKpmHKYGg8jalEr7.png?auto=format&amp;w=1600 1600w" width="800" height="549" /><figcaption>The Kibana dashboard showing daily performance data by percentiles.</figcaption></figure>Related article: [Performance budgets 101](/performance-budgets-101)

### Results <a href="#results-4" class="w-headline-link">#</a>

From the graph above, you can tell that AirSHIFT is now mostly hitting the 3 seconds budget for 75th percentile users and also loading the shift table within a second for 25th percentile users. By capturing RUM performance data from various conditions and devices, AirSHIFT can now check whether a new feature release is actually affecting the application's performance or not.

5. Performance hackathons <a href="#5.-performance-hackathons" class="w-headline-link">#</a>

---

Even though all of these performance optimization efforts were important and impactful, it's not always easy to get engineering and business teams to prioritize non-functional development. Part of the challenge is that some of these performance optimizations can't be planned. They require experimentation and a trial-and-error mindset.

AirSHIFT is now conducting internal 1-day performance hackathons to let engineers focus only on performance related work. In these hackathons they remove all constraints and respect the engineers' creativity, meaning any implementation that contributes to speed is worth considering. To accelerate the hackathon, AirSHIFT splits the group into small teams and each team competes to see who can get the biggest [Lighthouse](https://developers.google.com/web/tools/lighthouse) performance score improvement. The teams get very competitive! 🔥

<img src="https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format" alt="Photos of the hackathon." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/A1nus9lmROXOGm9rpCsO.png?auto=format&amp;w=1600 1600w" width="800" height="462" />

### Results <a href="#results-5" class="w-headline-link">#</a>

The hackathon approach is working well for them.

- Performance bottlenecks can be easily detected by actually trying out multiple approaches during the hackathon and measuring each with Lighthouse.
- After the hackathon, it's rather easy to convince the team which optimization they should be prioritizing for production release.
- It's also an effective way of advocating the importance of speed. Every participant can understand the correlation between how you code and how it results in performance.

A good side effect was that many other engineering teams within Recruit got interested in this hands-on approach and the AirSHIFT team is now facilitating multiple speed hackathons within the company.

## Summary <a href="#summary" class="w-headline-link">#</a>

It was definitely not the easiest journey for AirSHIFT to work on these optimizations but it certainly paid off. Now AirSHIFT is loading the shift table within 1.5 sec in median which is a 6x improvement from their performance before the project.

After the performance optimizations launched, one user said:

> Thank you so much for making the shift table load fast. Arranging the shift work is so much more efficient now.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Nov 6, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/five-ways-airshift-improved-their-react-app/index.md)

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
