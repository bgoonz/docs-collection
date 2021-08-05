<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format" alt="Speedometer on a retro car" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/3ewq4uJrMKiYvuXxkQGI.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#speed-at-scale:-what&#39;s-new-in-web-performance" class="w-toc__header--link">Speed at scale: what's new in web performance?</a>

- [Lighthouse now supports Performance Budgeting](#lighthouse-now-supports-performance-budgeting)
- [Browser-level image and iframe lazy-loading comes to the web](#browser-level-image-and-iframe-lazy-loading-comes-to-the-web)
- [Google Fonts now supports font-display as a query parameter](#google-fonts-now-supports-font-display-as-a-query-parameter)
- [Watch for more](#watch-for-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Speed at scale: what's new in web performance?

Learn about three new web performance launches from I/O 2019.

May 24, 2019

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

During the ["Speed at Scale" talk](https://www.youtube.com/watch?v=YJGCZCaIZkQ&feature=youtu.be) at Google I/O 2019, we announced three things that we hope will improve web performance over the coming year.

## Lighthouse now supports Performance Budgeting <a href="#lighthouse-now-supports-performance-budgeting" class="w-headline-link">#</a>

[LightWallet](https://developers.google.com/web/tools/lighthouse/audits/budgets) is a new feature in Lighthouse that adds support for [performance budgets](/fast#set-performance-budgets). Performance budgets establish standards for the performance of your site. More importantly, they make it is easy to identify and fix performance regressions before they ship.

<figure><img src="https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/b1hw1bMU0dCIqS45XdfW.png?auto=format&amp;w=1600 1600w" width="800" height="607" /></figure>LightWallet is available in the newest version of the Lighthouse CLI and only takes a couple minutes to set up. These [instructions](https://developers.google.com/web/tools/lighthouse/audits/budgets) provide more information.

Unsure what your budgets should be? Try our experimental [Performance Budget Calculator](https://bit.ly/perf-budget-calculator) which can generate a LightWallet compatible budget configuration.

## Browser-level image and iframe lazy-loading comes to the web <a href="#browser-level-image-and-iframe-lazy-loading-comes-to-the-web" class="w-headline-link">#</a>

Web pages often contain a large number of images, which contribute to data-usage, [page-bloat](https://httparchive.org/reports/state-of-images) and slower page loads. Many of these images are offscreen, requiring a user to scroll in order to view them.

Until now, you've needed to solve lazy-loading images using a JavaScript library but that may soon change. This summer, Chrome will be launching support for the [loading](https://addyosmani.com/blog/lazy-loading/) attribute which brings standardized `<img>` and `<iframe>` lazy-loading to the web.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/5W51sHaRUB0NEuN0MaFh.png?auto=format&amp;w=1600 1600w" width="800" height="450" /></figure>The `loading` attribute allows a browser to defer loading offscreen images and iframes until users scroll near them. `loading` supports three values:

- `lazy`: is a good candidate for lazy loading.
- `eager`: is not a good candidate for lazy loading. Load right away.
- `auto`: browser will determine whether or not to lazily load.

<!-- -->

    <img src="io2019.jpg" loading="lazy" alt="..." />
    <iframe src="video-player.html" loading="lazy"></iframe>

The exact heuristics for "when the user scrolls near" is left up to the browser. In general, our hope is that browsers will start fetching deferred images and iframe content a little before it comes into the viewport.

The `loading` attribute is implemented behind flags in Chrome Canary. You can try out [this demo](https://mathiasbynens.be/demo/img-loading-lazy) in Chrome 75+ with the `about://flags/#enable-lazy-image-loading` and `about://flags/#enable-lazy-frame-loading` flags turned on.

A [write-up](https://addyosmani.com/blog/lazy-loading/) on the lazy-loading feature is available with more details.

## Google Fonts now supports font-display as a query parameter <a href="#google-fonts-now-supports-font-display-as-a-query-parameter" class="w-headline-link">#</a>

We announced support for [font-display](https://font-display.glitch.me) is now available in production for all [Google Fonts](https://fonts.google.com) via the [display query-string parameter](https://developers.google.com/fonts/docs/getting_started#use_font-display):

    https://fonts.googleapis.com/css?family=Lobster&display=swap

The `font-display` descriptor lets you decide how your web fonts will render or fallback, depending on how long it takes for them to load. It supports a number of values including `auto`, `block`, `swap`, `fallback` and `optional`.

Previously, the only way to specify `font-display` for web fonts from Google Fonts was to self-host them but this change removes the need to do so.

The [Google Fonts documentation](https://developers.google.com/fonts/docs/getting_started#use_font-display) has been updated to include `font-display` in the default code embeds (as seem below). We hope this will encourage more developers to try out this exciting addition.

<figure><img src="https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/aJqdPp1xobaYRDNx4aJd.png?auto=format&amp;w=1600 1600w" width="800" height="528" /></figure>Here's a [demo](https://glitch.com/~truth-bookcase) on Glitch of using display with multiple font families. Try it out with [DevTools network emulation](https://developers.google.com/web/tools/chrome-devtools/network/#throttle) to see the impact of `font-display: swap`.

## Watch for more <a href="#watch-for-more" class="w-headline-link">#</a>

Our talk also covered several production case studies of using advanced performance patterns to improve user-experience. These included sites leveraging image CDNs, [Brotli compression](/fast/reduce-network-payloads-using-text-compression/codelab-text-compression-brotli), smart JavaScript serving and prefetching to speed up their pages. [Watch the talk](https://www.youtube.com/watch?v=YJGCZCaIZkQ&feature=youtu.be) to learn more :)

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: May 24, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/speed-at-scale/index.md)

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
