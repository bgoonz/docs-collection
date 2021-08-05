<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format" alt="A globe with code overlaid" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/W2buTZDHpZeTqiO1pbCQ.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-we&#39;re-bringing-google-earth-to-the-web" class="w-toc__header--link">How we're bringing Google Earth to the web</a>

- [Why we chose WebAssembly for Google Earth](#why-we-chose-webassembly-for-google-earth)
- [A thread on threading](#a-thread-on-threading)
- [How WebAssembly works with different browsers](#how-webassembly-works-with-different-browsers)
- [Edge](#edge)
- [Chrome](#chrome)
- [Firefox](#firefox)
- [Opera](#opera)
- [Safari](#safari)
- [Looking forward to more adoption of WebAssembly features](#looking-forward-to-more-adoption-of-webassembly-features)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How we're bringing Google Earth to the web

Improving cross-browser access to Google Earth with WebAssembly.

Jun 20, 2019

[<img src="https://web-dev.imgix.net/image/admin/NjW9TEPrICgYcmSWgliA.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jordon Mears‎" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/NjW9TEPrICgYcmSWgliA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/NjW9TEPrICgYcmSWgliA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/NjW9TEPrICgYcmSWgliA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/NjW9TEPrICgYcmSWgliA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/NjW9TEPrICgYcmSWgliA.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jormears/)

<a href="/authors/jormears/" class="w-author__name-link">Jordon Mears‎</a>

- <a href="https://www.finefrog.com/" class="w-author__link">Blog</a>

In an ideal world, every application that developers build, regardless of technology, would be available in the browser. But there are barriers to bringing projects to the web, depending on the technology they were built with and how well that technology is supported by the various browser vendors. [WebAssembly](https://webassembly.org/) (Wasm) is a compile target standardized by the [W3C](https://www.w3.org/) that helps us solve this problem by allowing us to run codebases from languages other than JavaScript on the web.

We've done just that with Google Earth, available today in [preview beta](https://g.co/earth/beta) on WebAssembly. Keep in mind that this is still a beta of Google Earth and may not be as smooth as you're used to (try out regular [Earth for web](https://earth.google.com/web/)). You can experiment with this beta in Chrome and other Chromium-based browsers, including Edge (Canary version) and Opera, as well as Firefox. Consider this beta your inspiration if you too are looking for better cross-browser support for your platform-specific applications.

## Why we chose WebAssembly for Google Earth <a href="#why-we-chose-webassembly-for-google-earth" class="w-headline-link">#</a>

We originally wrote most of Google Earth in C++ because it was a desktop application intended for install. Then we were able to port it to Android and iOS as smartphones took hold, retaining most of our C++ codebase using [NDK](https://developer.android.com/ndk) and [Objective-C++](https://www.wikipedia.org/wiki/Objective-C#Objective-C++). In 2017, when we brought Earth to the web, we used [Native Client](https://developer.chrome.com/native-client) (NaCl) to compile the C++ code and run it in the Chrome browser.

At the time, NaCl was the only browser technology that allowed us to port our C++ code to the browser and give us the kind of performance Earth needed. Unfortunately, NaCl was a Chrome-only technology that never saw adoption across browsers. Now we're starting to switch to WebAssembly, which lets us take that same code and run it across browsers. This means Earth will be available to more people across the web.

<embed src="https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/xZ614l31AdC5L8qd44Kq.webp?auto=format&amp;w=1600 1600w" width="800" height="447" />

## A thread on threading <a href="#a-thread-on-threading" class="w-headline-link">#</a>

WebAssembly is still evolving as a standard, and browsers continue to get extended with more features and functionality. From the Earth perspective, the most significant difference in support for WebAssembly between browsers is support for threading. Some browsers offer multi-threading support and others don't. Think of Earth like a huge 3D video game of the real world. As such, we're constantly streaming data to the browser, decompressing it and making it ready for rendering to the screen. Being able to do this work on a background thread has shown a clear improvement in [the performance of Earth in the browser](https://medium.com/google-earth/performance-of-web-assembly-a-thread-on-threading-54f62fd50cf7).

Multi-threaded WebAssembly relies on a browser feature called SharedArrayBuffer, which was pulled from browsers after the Spectre and Meltdown security vulnerabilities were revealed. To mitigate potential damage from attacks, Chrome's security team [introduced Site Isolation](https://security.googleblog.com/2018/07/mitigating-spectre-with-site-isolation.html) in Chrome for all desktop operating systems. Site Isolation limits each renderer process to documents from a single site. With this security feature in place, Chrome re-enabled SharedArrayBuffer for desktop—which allowed us to use multi-threaded WebAssembly with Earth for Chrome.

Other browsers are working on Site Isolation or other mitigations in order to re-enable SharedArrayBuffer. In the meantime, Earth runs single-threaded in those browsers.

## How WebAssembly works with different browsers <a href="#how-webassembly-works-with-different-browsers" class="w-headline-link">#</a>

We've learned a lot about the state of WebAssembly support in browsers porting Earth. If you're going to develop applications using WebAssembly, it's important to understand the current state of how WebAssembly works with different browsers.

### Edge <a href="#edge" class="w-headline-link">#</a>

Edge is on the verge of becoming two distinct development experiences based on Microsoft's choice to move from the EdgeHTML renderer over to a Chromium-based renderer. At the moment, the Google Earth beta on WebAssembly won't run on the current public version of Edge due to lack of support for WebGL2. That will be fixed once the new version of Edge, based on Chromium, ships in the near future. In the meantime, you can [download the Canary version of Edge](https://www.microsoftedgeinsider.com/download) and see that Earth works quite well.

### Chrome <a href="#chrome" class="w-headline-link">#</a>

Chrome has strong support for WebAssembly, including multi-threading on desktop, so you can expect Earth to run smoother as a result. However, we look forward to Chrome adding support for dynamic memory allocation with multi-threading in WebAssembly. Until then, Earth may fail to start on devices with limited amounts of memory (such as 32-bit machines).

### Firefox <a href="#firefox" class="w-headline-link">#</a>

Firefox offers good support for WebAssembly, but has disabled support for multi-threading. As a result, you can expect a slower experience with Earth. We look forward to Mozilla bringing back support for multi-threading in future versions. On the upside, Firefox does support dynamic memory allocation.

### Opera <a href="#opera" class="w-headline-link">#</a>

Opera is based on Chromium just as Chrome is, along with upcoming versions of Edge. However, the current version of Opera only offers single-threaded support of WebAssembly. Earth does run in Opera, but at a somewhat degraded experience. Hopefully newer versions of Opera will have support for multi-threading and more robust WebAssembly support.

### Safari <a href="#safari" class="w-headline-link">#</a>

Safari has a strong implementation of WebAssembly, but it lacks full support for WebGL2. Therefore, Earth with WebAssembly does not run in Safari. Specifically, some of our shaders require GLSL 1.2. We hope that Earth will be available on Safari as well, once better support for WebGL2 is added.

## Looking forward to more adoption of WebAssembly features <a href="#looking-forward-to-more-adoption-of-webassembly-features" class="w-headline-link">#</a>

It's been a long road to make Earth available on the web. About six years ago, we started with an initial [asm.js](http://asmjs.org/)-based internal demo that was maintained and expanded over the years. It was then converted into a WebAssembly build of Earth, as WebAssembly became the W3C adopted standard.

We still have a ways to go for WebAssembly and Earth. Specifically, we'd like to move to the LLVM backend using Emscripten (the toolchain to generate WebAssembly out of C++ code). This change will enable future SIMD support, as well as stronger debugging tools like source maps for source-language code. Other things we hope to see are adoption of [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) and full support for dynamic memory allocation in WebAssembly. But we know we're on the right track: WebAssembly is the long-term future for Earth on the web.

Please take a moment to try our [beta](https://g.co/earth/beta). Let us know how it works for you by leaving feedback directly in Earth.

<a href="/tags/webassembly/" class="w-chip">WebAssembly</a> <a href="/tags/case-study/" class="w-chip">Case Study</a>

<span class="w-mr--sm"> Last updated: Jun 20, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/earth-webassembly/index.md)

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
