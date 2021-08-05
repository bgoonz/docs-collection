<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format" alt="Multi-colored gradient" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/uq7JQlKJo7KBETXnVuTf.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#css-for-web-vitals" class="w-toc__header--link">CSS for Web Vitals</a>

- [Layout](#layout)
- [Inserting content into the DOM](#inserting-content-into-the-dom)
- [Images](#images)
- [Images and Largest Contentful Paint (LCP)](<#images-and-largest-contentful-paint-(lcp)>)
- [Images and layout shifts](#images-and-layout-shifts)
- [Fonts](#fonts)
- [Delayed text rendering](#delayed-text-rendering)
- [Layout shifts](#layout-shifts)
- [Animations](#animations)
- [Identify](#identify-4)
- [Fix](#fix-5)
- [Critical CSS](#critical-css)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# CSS for Web Vitals

CSS-related techniques for optimizing Web Vitals

Jun 2, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

The way you write your styles and build layouts can have a major impact on [Core Web Vitals](/learn-web-vitals). This is particularly true for [Cumulative Layout Shift (CLS)](/cls) and [Largest Contentful Paint (LCP)](/lcp).

This article covers CSS-related techniques for optimizing Web Vitals. These optimizations are broken down by different aspects of a page: layout, images, fonts, animations, and loading. Along the way, we'll explore improving an [example page](https://codepen.io/una/pen/vYyLKvY):

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format" alt="Screenshot of example site" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/pgmpMOmweK7BVBsVkQ5g.png?auto=format&amp;w=1600 1600w" width="800" height="646" />

## Layout <a href="#layout" class="w-headline-link">#</a>

### Inserting content into the DOM <a href="#inserting-content-into-the-dom" class="w-headline-link">#</a>

Inserting content into a page after the surrounding content has already loaded pushes everything else on the page down. This causes [layout shifts](/cls/#layout-shifts-in-detail).

[Cookie notices](/cookie-notice-best-practices/), particularly those placed at the top of the page, are a common example of this problem. Other page elements that often cause this type of layout shift when they load include ads and embeds.

#### Identify <a href="#identify" class="w-headline-link">#</a>

The Lighthouse "Avoid large layout shifts" audit identifies page elements that have shifted. For this demo, the results look like this:

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format" alt="Lighthouse&#39;s &#39;Avoid large layout shifts&#39; audit" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/jaHtgwzDXCjx3vAFOO33.png?auto=format&amp;w=1600 1600w" width="800" height="500" />

The cookie notice is not listed in these findings because the cookie notice itself isn't shifting when it loads. Rather, it causes the items below it on the page (that is, `div.hero` and `article`) to shift. For more information on identifying and fixing layout shifts, see [Debugging Layout Shifts](/debugging-layout-shifts).

Lighthouse only analyzes a page's performance up until the "page load" event. Cookie banners, ads, and other widgets sometimes do not load until after page load. These layout shifts still affect users—even if they are not flagged by Lighthouse.

#### Fix <a href="#fix" class="w-headline-link">#</a>

Place the cookie notice at the bottom of the page using absolute or fixed positioning.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format" alt="Cookie notice displayed at bottom of page" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/YBYLT9jJ9AXrbsaRNVoa.png?auto=format&amp;w=1600 1600w" width="800" height="656" />

Before:

    .banner {
      position: sticky;
      top: 0;
    }

After:

    .banner {
      position: fixed;
      bottom: 0;
    }

Another way to fix this layout shift would be to reserve space for the cookie notice at the top of the screen. This approach is equally effective. For more information, see [Cookie notice best practices](/cookie-notice-best-practices/).

The cookie notice is one of multiple page elements that are triggering layout shifts when it loads. To help us get a closer look at these page elements, subsequent demo steps will not include the cookie notice.

## Images <a href="#images" class="w-headline-link">#</a>

### Images and Largest Contentful Paint (LCP) <a href="#images-and-largest-contentful-paint-(lcp)" class="w-headline-link">#</a>

Images are commonly the Largest Contentful Paint (LCP) element on a page. Other [page elements that can be the LCP element](/lcp/#what-elements-are-considered) include text blocks and video poster images. The time at which the LCP element loads determines LCP.

It's important to note that a page's LCP element can vary from page load to page load depending on the content that is visible to the user when the page is first displayed. For example, in this demo, the background of the cookie notice, the hero image, and the article text are some of the potential LCP elements.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format" alt="Diagram highlighting the page&#39;s LCP element in different scenarios." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/bMoAoohyLOgTqV6B7lHr.png?auto=format&amp;w=1600 1600w" width="800" height="498" />

In the example site, the background image of the cookie notice is actually a large image. To improve LCP, you could instead paint the gradient in CSS, rather than load an image to create the effect.

#### Fix <a href="#fix-2" class="w-headline-link">#</a>

Change the `.banner` CSS to use a CSS gradient rather than an image:

Before:

    background: url("https://cdn.pixabay.com/photo/2015/07/15/06/14/gradient-845701\_960\_720.jpg")

After:

    background: linear-gradient(135deg, #fbc6ff 20%, #bdfff9 90%);

### Images and layout shifts <a href="#images-and-layout-shifts" class="w-headline-link">#</a>

Browsers can only determine the size of an image once the image loads. If the image load occurs after the page has been rendered, but no space has been reserved for the image, a layout shift occurs when the image appears. In the demo, the hero image is causing a layout shift when it loads.

The phenomenon of images causing layout shifts is more obvious in situations where images are slow to load - for example, on a slow connection or when loading an image with a particularly large file size.

#### Identify <a href="#identify-2" class="w-headline-link">#</a>

To identify images without explicit `width` and `height`, use Lighthouse's "Image elements have explicit width and height" audit.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format" alt="Lighthouse&#39;s &#39;Image elements have explicit width and height&#39; audit" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wDGRVi7JaUOTjD9ODOk9.png?auto=format&amp;w=1600 1600w" width="800" height="274" />

In this example, both the hero image and article image are missing `width` and `height` attributes.

#### Fix <a href="#fix-3" class="w-headline-link">#</a>

Set the `width` and `height` attributes on these images to avoid layout shifts.

Before:

    <img src="https://source.unsplash.com/random/2000x600" alt="image to load in">
    <img src="https://source.unsplash.com/random/800x600" alt="image to load in">

After:

    <img src="https://source.unsplash.com/random/2000x600" width="2000" height="600" alt="image to load in">
    <img src="https://source.unsplash.com/random/800x600" width="800" height="600" alt="image to load in">

The image now loads without causing a layout shift.

Another approach to loading images is to use the [`srcset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) and [`sizes`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes) attributes in conjunction with specifying `width` and `height` attributes. This has the additional performance advantage of allowing you to serve different sized images to different devices. For more information, see [Serve responsive images](/serve-responsive-images/).

## Fonts <a href="#fonts" class="w-headline-link">#</a>

Fonts can delay text rendering and cause layout shifts. As a result, it is important to deliver fonts quickly.

### Delayed text rendering <a href="#delayed-text-rendering" class="w-headline-link">#</a>

By default, a browser will not immediately render a text element if its associated web fonts have not loaded yet. This is done to prevent a ["flash of unstyled text" (FOUT)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). In many situations, this delays [First Contentful Paint (FCP)](/fcp). In some situations, this delays Largest Contentful Paint (LCP).

By default, Chromium-based and Firefox browsers will [block text rendering for up to 3 seconds](https://developers.google.com/web/updates/2016/02/font-display) if the associated web font has not loaded; Safari will block text rendering indefinitely. The [block period](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display#the_font_display_timeline) begins when the browser requests a web font. If the font has still not loaded by the end of the block period, the browser will render the text using a fallback font and swap in the web font once available.

### Layout shifts <a href="#layout-shifts" class="w-headline-link">#</a>

Font swapping, while excellent for displaying content to the user quickly, has the potential to cause layout shifts. These layout shifts occur when a web font and its fallback font take up different amounts of space on the page. Using similarly proportioned fonts will minimize the size of these layout shifts.

<figure><img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format" alt="In this example, font swapping caused page elements to shift upwards by five pixels." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/g0892nhvz3SnSaasaO1b.png?auto=format&amp;w=1600 1600w" width="800" height="452" /><figcaption>In this example, font swapping caused page elements to shift upwards by five pixels.</figcaption></figure>#### Identify <a href="#identify-3" class="w-headline-link">#</a>

To see the fonts that are being loaded on a particular page, open the **Network** tab in DevTools and filter by **Font**. Fonts can be large files, so only using fewer fonts is generally better for performance.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format" alt="Screenshot of a font displayed in DevTools" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/Ts38bQtR6x0SDgufA9vz.png?auto=format&amp;w=1600 1600w" width="800" height="252" />

To see how long it takes for the font to be requested, click on the **Timing** tab. The sooner that a font is requested, the sooner it can be loaded and used.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format" alt="Screenshot of &#39;Timing&#39; tab in DevTools" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/wfS7qVThKMkGA7SHd439.png?auto=format&amp;w=1600 1600w" width="800" height="340" />

To see the request chain for a font, click on the **Initiator** tab. Generally speaking, the shorter the request chain, the sooner the font can be requested.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format" alt="Screenshot of &#39;Initiator&#39; tab in DevTools" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/0tau1GQnZfj5vPhzwnIQ.png?auto=format&amp;w=1600 1600w" width="800" height="189" />

#### Fix <a href="#fix-4" class="w-headline-link">#</a>

This demo uses the Google Fonts API. Google Fonts provides the option to load fonts via `<link>` tags or an `@import` statement. The `<link>` code snippet includes a `preconnect` resource hint. This should result in faster stylesheet delivery than using the `@import` version.

At a very high-level, you can think of [resource hints](https://www.w3.org/TR/resource-hints/#resource-hints) as a way to hint to the browser that it will need to set up a particular connection or download a particular resource. As a result, the browser will prioritize these actions. When using resource hints, keep in mind that prioritizing a particular action takes away browser resources from other actions. Thus, resource hints should be used thoughtfully and not for everything. For more information, see [Establish network connections early to improve perceived page speed](/preconnect-and-dns-prefetch/).

Remove the following `@import` statement from your stylesheet:

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Roboto:wght@300&display=swap');

Add the following `<link>` tags to the `<head>` of the document:

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

These link tags instruct the browser to establish an early connection to the origins used by Google Fonts and to load the stylesheet that contains the font declaration for Montserrat and Roboto. These `<link>` tags should be placed as early in the `<head>` as possible.

To only load a subset of a font from Google Fonts, add the [`?text=`](https://developers.google.com/fonts/docs/getting_started) API parameter. For example, `?text=ABC` loads only the characters necessary to render "ABC". This is a good way to reduce the file size of a font.

## Animations <a href="#animations" class="w-headline-link">#</a>

The primary way that animations affect Web Vitals is when they cause layout shifts. There are two types of animations that you should avoid using: [animations that trigger layout](/animations-guide/#triggers) and "animation-like" effects that move page elements. Typically these animations can be replaced with more performant equivalents by using CSS properties like [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity), and [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter). For more information, see [How to create high-performance CSS animations](/animations/).

### Identify <a href="#identify-4" class="w-headline-link">#</a>

The Lighthouse "Avoid non-composited animations" audit may be helpful for identifying non-performant animations.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format" alt="Lighthouse&#39;s &#39;Avoid non-composited animations&#39; audit" sizes="(min-width: 512px) 512px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/mXgypW9x3qgvmWDLbIZx.png?auto=format&amp;w=1024 1024w" width="512" height="132" />

**Caution**:

The Lighthouse "Avoid non-composited animations" audit only identifies non-performant _CSS animations_; JavaScript-driven animations (for example, using [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) to "animate" an element) are bad for performance but will not be flagged by this audit.

### Fix <a href="#fix-5" class="w-headline-link">#</a>

Change the `slideIn` animation sequence to use `transform: translateX()` rather than transitioning the`margin-left` property.

Before:

    .header {
      animation: slideIn 1s 1 ease;
    }

    @keyframes slideIn {
      from {
        margin-left: -100%;
      }
      to {
        margin-left: 0;
      }
    }

After:

    .header {
      animation: slideIn 1s 1 ease;
    }

    @keyframes slideIn {
      from {
        transform: translateX(-100%);
      }

      to {
        transform: translateX(0);
      }
    }

## Critical CSS <a href="#critical-css" class="w-headline-link">#</a>

Stylesheets are render-blocking. This means that the browser encounters a stylesheet, it will stop downloading other resources until the browser has downloaded and parsed the stylesheet. This may delay LCP. To improve performance, consider [removing unused CSS](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/), [inlining critical CSS](/extract-critical-css/), and [deferring non-critical CSS](/defer-non-critical-css/#optimize).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Although there is still room for further improvements (for example, using [image compression](/use-imagemin-to-compress-images/) to deliver images more quickly), these changes have significantly improved the Web Vitals of this site. If this were a real site, the next step would be to [collect performance data from real users](/vitals-measurement-getting-started/#measuring-web-vitals-using-rum-data) to assess whether it is [meeting the Web Vitals thresholds for most users](/vitals-measurement-getting-started/#data-interpretation). For more information about Web Vitals, see [Learn Web Vitals](/learn-web-vitals).

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Jun 2, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-web-vitals/index.md)

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
