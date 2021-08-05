<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KVRAyvGzRVa1vS8filbH.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#adaptive-loading:-improving-web-performance-on-slow-devices" class="w-toc__header--link">Adaptive loading: improving web performance on slow devices</a>

- [What is adaptive loading?](#what-is-adaptive-loading)
- [How to implement adaptive loading](#how-to-implement-adaptive-loading)
- [Adaptive loading in React](#adaptive-loading-in-react)
- [Adaptive loading in action](#adaptive-loading-in-action)
- [Adaptive loading at Facebook](#adaptive-loading-at-facebook)
- [Learn more about adaptive loading](#learn-more-about-adaptive-loading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Adaptive loading: improving web performance on slow devices

Learn how to ensure every user gets the best possible experience by optimizing your sites for specific hardware and network constraints.

Dec 16, 2019

[<img src="https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Milica Mihajlija" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mihajlija/)

<a href="/authors/mihajlija/" class="w-author__name-link">Milica Mihajlija</a>

- <a href="https://twitter.com/bibydigital" class="w-author__link">Twitter</a>
- <a href="https://github.com/mihajlija" class="w-author__link">GitHub</a>
- <a href="https://mihajlija.github.io/" class="w-author__link">Blog</a>

Device capabilities and network connections vary a lot. Sites that delight users on high-end devices can be [unusable](https://v8.dev/blog/cost-of-javascript-2019) on low-end ones. Sites that load smoothly on fast networks can come to a halt on slow ones. Any user can experience a slow website, that's why developing "one-size fits all" solutions may not always work.

In their [Chrome Dev Summit talk](https://www.youtube.com/watch?v=puUPpVrIRkc), Addy Osmani from Google and Nate Schloss from Facebook explore a solution to that problem—a pattern for delivering pages that better cater to a variety of user constraints. They call it **_adaptive loading_**.

## What is adaptive loading? <a href="#what-is-adaptive-loading" class="w-headline-link">#</a>

Adaptive loading involves delivering different experiences to different users based on their network and hardware constraints, specifically:

- A fast core experience for all users (including low-end devices).

- Progressively adding high-end-only features, if a user's network and hardware can handle it.

By optimizing for specific hardware and network constraints you enable every user to get the best possible experience for their device. Tailoring the experience to users' constraints can include:

- Serving low-quality images and videos on slow networks.

- Throttling the frame-rate of animations on low-end devices.

- Avoiding computationally expensive operations on low-end devices.

- Blocking third-party scripts on slower devices.

- Loading non-critical JavaScript for interactivity only on fast CPUs.

## How to implement adaptive loading <a href="#how-to-implement-adaptive-loading" class="w-headline-link">#</a>

The signals you can use for adaptive loading are:

- Network—for fine-tuning data transfer to use less bandwidth (via [`navigator.connection.effectiveType`](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType)). You can also leverage the user's Data Saver preferences (via [`navigator.connection.saveData`](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data#detecting_the_save-data_setting)).

- Memory—for reducing memory consumption on low-end devices (via [`navigator.deviceMemory`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory)).

- CPU core count—for limiting costly JavaScript execution and reducing CPU intensive logic when a device can't handle it well (via [`navigator.hardwareConcurrency`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)).

There are two places where you can make a decision about what to serve to users: the client and the server. On the client, you have the JavaScript APIs noted above. On the server, you can use [client hints](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints) to get insight into the user's device capabilities and the network they're connected to.

### Adaptive loading in React <a href="#adaptive-loading-in-react" class="w-headline-link">#</a>

[React Adaptive Loading Hooks & Utilities](https://github.com/GoogleChromeLabs/react-adaptive-hooks) is a suite for the React ecosystem that makes it easier to adapt your sites to lower-end devices. It includes:

- The `useNetworkStatus()` hook for adapting based on network status (`slow-2g`, `2g`, `3g`, or `4g`).

- The `useSaveData()` hook for adapting based on the user's Data Saver preferences.

- The `useHardwareConcurrency()` hook for adapting based on the number of logical CPU processor cores on the user's device.

- The `useMemoryStatus()` hook for adapting based on the user's device memory (RAM).

Each hook accepts an optional argument for setting the initial value. This option is useful in two scenarios: when the user's browser does not support the relevant API and for server-side rendering where you can use the client hint data to set the initial value on the server. For example, the `useNetworkStatus()` hook can use the initial value passed from client hint for server-side rendering and, when executed on the client, update itself if the network effective type changes.

React Adaptive Loading Hooks & Utilities are implemented using web platform APIs ([Network Information](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API), [Device Memory](https://developers.google.com/web/updates/2017/12/device-memory) and [Hardware Concurrency](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)). You can use the same APIs to apply adaptive loading concepts to other frameworks and libraries, such as [Angular](https://netbasal.com/connection-aware-components-in-angular-3a66bb0bab6f), [Vue](https://dev.to/vorillaz/serving-adaptive-components-using-the-network-information-api-lbo), and others.

## Adaptive loading in action <a href="#adaptive-loading-in-action" class="w-headline-link">#</a>

This section explores demos of how you could use adaptive loading and real-world examples from sites such as Facebook, eBay, Tinder, and others.

The [React Movie](https://adaptive-loading.web.app/react-movie-network-aware-loading/) demo shows how to [adapt media serving based on the network status](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-movie-network-aware-loading). It's an application for browsing movies that shows posters, summaries, and cast lists. Based on the user's effective connection type, it serves high-quality posters on fast connections and low-quality posters on slow ones.

[Twitter has a Data Saver mode](https://twitter.com/twittersupport/status/1047607749708668928) designed to reduce the amount of data used. In this mode, preview images load in low-resolution and large images load only when you tap on the preview. With this option enabled, users on iOS and Android saved 50% in data-usage from images, and users on the web saved 80%. Here's a React [demo](<https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-twitter-save-data-loading(hook)>) that uses the Save Data hook to replicate the Twitter timeline. Try opening your DevTools **Network** panel and looking at the difference in the amount of data transferred as you scroll while Save Data is disabled versus when it's enabled.

A screencast comparing scrolling the Twitter timeline with Data Saver on and off. With Data Saver on, only image previews are loaded and videos don't autoplay.

eBay conditionally turns on and off features like zooming when a user's hardware or network conditions don't support them well. You can achieve this through adaptive [code-splitting](/reduce-javascript-payloads-with-code-splitting/) and code loading—a way to conditionally load more highly interactive components or run more computationally heavy operations on high-end devices, while not sending those scripts down to users on slower devices. Check out the video at [16 mins](https://youtu.be/puUPpVrIRkc?t=973) where Addy shows this pattern implemented with [React.lazy() and Suspense](/code-splitting-suspense/) on a [demo eBay product page](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-ebay-network-aware-code-splitting).

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format" alt="A diagram of modules shipped for a product page on low-end and high-end devices: both versions include &quot;image viewer&quot;, while the high-end version includes additional &quot;zoom&quot; and &quot;carousel&quot; modules." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gdXBknVxIdd8FcSvIrxw.png?auto=format&amp;w=1600 1600w" width="800" height="446" />

Tinder is using a number of adaptive loading patterns in its [web](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0) and [Lite app](https://blog.gotinder.com/introducing-tinder-lite/) to keep the experience fast for everyone. If a user is on a slow network or has Data Saver enabled, they disable video autoplay, limit [route prefetching](/link-prefetch/) and limit loading the next image in the carousel to loading images one at a time as users swipe. After implementing these optimizations, they've seen significant improvements in average swipe count in countries such as Indonesia.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/N1xJkEMQ9rE513TNm8va.png?auto=format&amp;w=1600 1600w" width="800" height="445" /></figure>### Adaptive loading at Facebook <a href="#adaptive-loading-at-facebook" class="w-headline-link">#</a>

One issue that comes up in adaptive loading is grouping devices into high-end and low-end classes based on available signals. On mobile devices the [user-agent (UA)](https://developer.chrome.com/multidevice/user-agent) string provides the device name which enables Facebook to use publicly available data on device characteristics to group mobile devices into classes. However, on desktop devices the only relevant information the UA provides is the device's operating system.

For grouping desktop devices, Facebook logs the data about the operating system, CPU cores (from `navigator.hardwareConcurrency`), and RAM memory (`navigator.deviceMemory`) in their performance monitoring. Looking at the relationships between different types of hardware and performance, they classified devices into five categories. With hardware classes integrated into performance monitoring, they get a more complete picture of how people use Facebook products depending on their device and can identify regressions more easily.

Check out the video at [24 mins](https://youtu.be/puUPpVrIRkc?t=1443), where Nate walks through how Facebook approaches device grouping and uses adaptive loading for animations and loading JavaScript.

## Learn more about adaptive loading <a href="#learn-more-about-adaptive-loading" class="w-headline-link">#</a>

Adaptive loading is all about designing your sites with inclusivity in mind. Build a core experience that works great for everyone, then toggle or layer features that make it even more awesome if a user has enough memory, CPU, or a fast network. To learn more about adaptive loading, check out the available [demos](https://github.com/GoogleChromeLabs/adaptive-loading#full-applications) and watch the Chrome Dev Summit talk:

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/memory/" class="w-chip">Memory</a>

<span class="w-mr--sm"> Last updated: Dec 16, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/adaptive-loading-cds-2019/index.md)

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
