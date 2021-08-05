<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format" alt="Phone outline with loading image and assets" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/dMCW2Qqi5Qp2DB3w4DyE.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#it&#39;s-time-to-lazy-load-offscreen-iframes!" class="w-toc__header--link">It's time to lazy-load offscreen iframes!</a>

- [Why should we lazy-load iframes?](#why-should-we-lazy-load-iframes)
- [How does built-in lazy-loading for iframes work?](#how-does-built-in-lazy-loading-for-iframes-work)
- [What impact might we see from lazy-loading popular iframe embeds?](#what-impact-might-we-see-from-lazy-loading-popular-iframe-embeds)
- [Case study: Lazy-loading the Facebook's social plugins](#case-study:-lazy-loading-the-facebook's-social-plugins)
- [Wait, can't browsers just automatically lazy-load offscreen iframes?](#wait-can't-browsers-just-automatically-lazy-load-offscreen-iframes)
- [Can I lazy-load iframes cross-browser? Yes](#can-i-lazy-load-iframes-cross-browser-yes)
- [An option for WordPress users](#wordpress)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# It's time to lazy-load offscreen iframes!

Browser-level built-in lazy-loading for iframes is here

Jul 24, 2020

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

[Standardized lazy-loading for images](/browser-level-image-lazy-loading/) landed in Chrome 76 via the `loading` attribute and later came to Firefox. We are happy to share that **browser-level lazy-loading for iframes** is now [standardized](https://github.com/whatwg/html/pull/5579) and is also supported in Chrome and Chromium-based browsers.

    <iframe src="https://example.com"
            loading="lazy"
            width="600"
            height="400"></iframe>

Standardized lazy-loading of iframes defers offscreen iframes from being loaded until the user scrolls near them. This saves data, speeds up the loading of other parts of the page, and reduces memory usage.

This [demo](https://lazy-load.netlify.app/iframes/) of `<iframe loading=lazy>` shows lazy-loading video embeds:

### Why should we lazy-load iframes? <a href="#why-should-we-lazy-load-iframes" class="w-headline-link">#</a>

Third-party embeds cover a wide range of use cases, from video players, to social media posts, to ads. Often this content is not immediately visible in the user's viewport. Rather, it's only seen once they scroll further down the page. Despite this, users pay the cost of downloading data and costly JavaScript for each frame, even if they don't scroll to it.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xqZMRuULxbz6DVXNP8ea.png?auto=format&amp;w=1600 1600w" width="800" height="460" /></figure>Based off Chrome's research into [automatically lazy-loading offscreen iframes for Data Saver users](https://blog.chromium.org/2019/10/automatically-lazy-loading-offscreen.html), lazy-loading iframes could lead to 2-3% median data savings, 1-2% [First Contentful Paint](/fcp/) reductions at the median, and 2% [First Input Delay](/fid/) (FID) improvements at the 95th percentile.

### How does built-in lazy-loading for iframes work? <a href="#how-does-built-in-lazy-loading-for-iframes-work" class="w-headline-link">#</a>

The `loading` attribute allows a browser to defer loading offscreen iframes and images until users scroll near them. `loading` supports three values:

- `lazy`: is a good candidate for lazy-loading.
- `eager`: is not a good candidate for lazy-loading. Load right away.
- `auto`: browser will determine whether or not to lazily load.

`auto` is currently a non-standard value, but is the default in Chrome today. Chrome intends on bringing a proposal for this value to the standards table.

Using the `loading` attribute on iframes works as follows:

    <!-- Lazy-load the iframe -->
    <iframe src="https://example.com"
            loading="lazy"
            width="600"
            height="400"></iframe>

    <!-- Eagerly load the iframe -->
    <iframe src="https://example.com"
            width="600"
            height="400"></iframe>

    <!-- or use loading="eager" to opt out of automatic
    lazy-loading in Lite Mode -->
    <iframe src="https://example.com"
            loading="eager"
            width="600"
            height="400"></iframe>

Not specifying the attribute at all will have the same impact as explicitly eagerly loading the resource, except for [Lite Mode](https://blog.chromium.org/2019/04/data-saver-is-now-lite-mode.html) users, where Chrome will use the `auto` value to decide whether it should be lazy-loaded.

If you need to _dynamically_ create iframes via JavaScript, setting `iframe.loading = 'lazy'` on the element is also [supported](https://bugs.chromium.org/p/chromium/issues/detail?id=993273):

    var iframe = document.createElement('iframe');
    iframe.src = 'https://example.com';
    iframe.loading = 'lazy';
    document.body.appendChild(iframe);

#### iframe-specific lazy-loading behavior <a href="#iframe-specific-lazy-loading-behavior" class="w-headline-link">#</a>

The loading attribute affects iframes differently than images, depending on whether the iframe is hidden. (Hidden iframes are often used for analytics or communication purposes.) Chrome uses the following criteria to determine whether an iframe is hidden:

- The iframe's width and height are `4px` or smaller.
- `display: none` or `visibility: hidden` is applied.
- The iframe is placed off-screen using negative X or Y positioning.
- This criteria applies to both `loading=lazy` and `loading=auto`.

If an iframe meets any of these conditions, Chrome considers it hidden and won't lazy-load it in most cases. iframes that aren't hidden will only load when they're within the [load-in distance threshold](/browser-level-image-lazy-loading/#load-in-distance-threshold). Chrome shows a placeholder for lazy-loaded iframes that are still being fetched.

### What impact might we see from lazy-loading popular iframe embeds? <a href="#what-impact-might-we-see-from-lazy-loading-popular-iframe-embeds" class="w-headline-link">#</a>

What if we could change the web at large so that lazy-loading offscreen iframes was the default? It would look a little like this:

Lazy-loading YouTube video embeds (saves ~500KB on initial page load):

    <iframe src="https://www.youtube.com/embed/YJGCZCaIZkQ"
            loading="lazy"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay;
            encrypted-media; gyroscope;
            picture-in-picture"
            allowfullscreen></iframe>

**Anecdote:** when we switched to lazy-loading YouTube embeds for Chrome.com, we saved 10 seconds off of how soon our pages could be interactive on mobile devices. I have opened an internal bug with YouTube to discuss adding `loading=lazy` to its embed code.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HQkwBgEoyiZsiOaPyz8v.png?auto=format&amp;w=1600 1600w" width="800" height="460" /></figure>If you are looking for more efficient ways to load YouTube embeds, you may be interested in the [YouTube lite component](https://github.com/paulirish/lite-youtube-embed).

**Lazy-loading Instagram embeds (saves &gt;100KB gzipped on initial load):**

Instagram embeds provide a block of markup and a script, which injects an iframe into your page. Lazy-loading this iframe avoids having to load all of the script necessary for the embed. Given such embeds are often displayed below the viewport in most articles, this seems like a reasonable candidate for lazy-loading of their iframe.

**Lazy-loading Spotify embeds (saves 514KB on initial load):**

    <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
            loading="lazy"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"></iframe>

Although the above embeds illustrate the potential benefits to lazy-loading iframes for media content, there's the potential to also see these benefits for ads.

### Case study: Lazy-loading the Facebook's social plugins <a href="#case-study:-lazy-loading-the-facebook&#39;s-social-plugins" class="w-headline-link">#</a>

Facebook's _social plugins_ allow developers to embed Facebook content in their web pages. There's a number of these plugins offered, such as embedded posts, photos, videos, comments… The most popular is the [Like plugin](https://developers.facebook.com/docs/plugins/like-button/) - a button that shows a count of who has "liked" the page. By default, embedding the Like plugin in a webpage (using the FB JSSDK) pulls in ~215KB of resources, 197KB of which is JavaScript. In many cases, the plugin may appear at the end of an article or near the end of a page, so loading it eagerly when it's offscreen may be suboptimal.

<figure><img src="https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/fdy8o61jxPN560IkF2Ne.png?auto=format&amp;w=1600 1600w" width="800" height="71" /></figure>Thanks to engineer Stoyan Stefanov, [all of Facebook's social plugins now support standardized iframe lazy-loading](https://developers.facebook.com/docs/plugins/like-button#settings). Developers who opt in to lazy-loading via the plugins' `data-lazy` configuration will now be able to avoid it loading until the user scrolls nearby. This enables the embed to still fully function for users that need it, while offering data-savings for those who are not scrolling all the way down a page. We are hopeful this is the first of many embeds to explore standardized iframe lazy-loading in production.

### Wait, can't browsers just automatically lazy-load offscreen iframes? <a href="#wait-can&#39;t-browsers-just-automatically-lazy-load-offscreen-iframes" class="w-headline-link">#</a>

They certainly can. In Chrome 77, Chrome added support for automatically lazy-loading offscreen images and iframes when a user has opted into [Lite Mode](https://blog.chromium.org/2019/04/data-saver-is-now-lite-mode.html) (Data Saver mode) in Chrome for Android.

Lite Mode is commonly used in regions of the world where network connection quality and data plans are not the greatest. Every byte matters and so lazy-loading iframes has the potential to make a meaningful difference for these users.

Origins can detect what percentage of their traffic is coming from Lite Mode users by checking the `navigator.connection.saveData` property, which is part of the [`NetworkInformation` API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation).

### Can I lazy-load iframes cross-browser? Yes <a href="#can-i-lazy-load-iframes-cross-browser-yes" class="w-headline-link">#</a>

iframe lazy-loading can be applied as a progressive enhancement. Browsers which support `loading=lazy` on iframes will lazy-load the iframe, while the `loading` attribute will be safely ignored in browsers which do not support it yet.

It is also possible to lazy-load offscreen iframes using the [lazysizes](/use-lazysizes-to-lazyload-images/) JavaScript library. This may be desirable if you:

- require more custom lazy-loading thresholds than what standardized lazy-loading currently offers
- wish to offer users a consistent iframe lazy-loading experience across browsers

<!-- -->

    <script src="lazysizes.min.js" async></script>

    <iframe frameborder="0"
          class="lazyload"
        allowfullscreen=""
        width="600"
        height="400"
        data-src="//www.youtube.com/embed/ZfV-aYdU4uE">
    </iframe>

Use the following pattern to feature detect lazy-loading and fetch lazysizes when it's not available:

    <iframe frameborder="0"
       class="lazyload"
        loading="lazy"
        allowfullscreen=""
        width="600"
        height="400"
        data-src="//www.youtube.com/embed/ZfV-aYdU4uE">
    </iframe>

    <script>
      if ('loading' in HTMLIFrameElement.prototype) {
        const iframes = document.querySelectorAll('iframe[loading="lazy"]');

        iframes.forEach(iframe => {
          iframe.src = iframe.dataset.src;
        });

      } else {
        // Dynamically import the LazySizes library
        const script = document.createElement('script');
        script.src =
          'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
        document.body.appendChild(script);
      }

    </script>

### An option for WordPress users <a href="#wordpress" class="w-headline-link">#</a>

You might have many iframes scattered across years worth of post content in a WordPress site. You can optionally add the following code to your WordPress theme's `functions.php` file to automatically insert `loading="lazy"` to your existing iframes without having to manually update them each individually.

Note that [browser-level support for lazy-loading iframes is also being worked on in WordPress core](https://core.trac.wordpress.org/ticket/50756). The following snippet will check for the relevant flags so that, once WordPress has the functionality built-in, it will no longer manually add the `loading="lazy"` attribute, ensuring it is interoperable with those changes and will not result in a duplicate attribute.

    // TODO: Remove once https://core.trac.wordpress.org/ticket/50756 lands.
    function wp_lazy_load_iframes_polyfill( $content ) {
     // If WP core lazy-loads iframes, skip this manual implementation.
       if ( function_exists( 'wp_lazy_loading_enabled' ) && wp_lazy_loading_enabled( 'iframe', 'the_content' ) ) {
         return $content;
      }

        return str_replace( '<iframe ', '<iframe loading="lazy" ', $content );
    }
    add_filter( 'the_content', 'wp_lazy_load_iframes_polyfill' );

If your WordPress site utilizes caching (hint: it should), don't forget to rebuild your site's cache afterwards.

### Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Baking in standardized support for lazy-loading iframes makes it significantly easier for you to improve the performance of your web pages. If you have any feedback, please feel free to submit an issue to the [Chromium Bug Tracker](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ELoader%3ELazyLoad).

And, in case you missed it, check out web.dev's [image and video lazy-loading collection](/fast/#lazy-load-images-and-video) for more lazy-loading ideas.

_With thanks to Dom Farolino, Scott Little, Houssein Djirdeh, Simon Pieters, Kayce Basques, Joe Medley and Stoyan Stefanov for their reviews._

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/memory/" class="w-chip">Memory</a>

<span class="w-mr--sm"> Last updated: Jul 24, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/iframe-lazy-loading/index.md)

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
