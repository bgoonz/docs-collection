<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/i7tjE04MYo7xJOZKkyQI.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#best-practices-for-carousels" class="w-toc__header--link">Best practices for carousels</a>

- [Performance](#performance)
- [Performance best practices](#performance-best-practices)
- [Load carousel content using HTML](#load-carousel-content-using-html)
- [Avoid layout shifts](#avoid-layout-shifts)
- [Use modern technology](#use-modern-technology)
- [Optimize carousel content](#optimize-carousel-content)
- [Performance measurement](#performance-measurement)
- [LCP measurement for carousels](#lcp-measurement-for-carousels)
- [Changes to LCP calculation for carousels in Chrome 88](#changes-to-lcp-calculation-for-carousels-in-chrome-88)
- [Other considerations](#other-considerations)
- [Navigation best practices](#navigation-best-practices)
- [Readability best practices](#readability-best-practices)
- [Product best practices](#product-best-practices)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Best practices for carousels

Optimize carousels for performance and usability.

Jan 26, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

A carousel is a UX component that displays content in slideshow-like manner. Carousels can "autoplay" or be navigated manually by users. Although carousels can be used elsewhere, they are most frequently used to display images, products, and promotions on homepages.

This article discusses performance and UX best practices for carousels.

## <figure><img src="https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format" class="w-screenshot" sizes="(min-width: 629px) 629px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/u2FlXalClwBeDOBBiwxu.png?auto=format&amp;w=1258 1258w" width="629" height="420" /></figure>Performance <a href="#performance" class="w-headline-link">#</a>

A well-implemented carousel, in and of itself, should have very minimal or no impact on performance. However, carousels often contain large media assets. Large assets can impact performance regardless of whether they are displayed in a carousel or elsewhere.

- **LCP (Largest Contentful Paint)**

  Large, above-the-fold carousels often contain the page's LCP element, and therefore can have a significant impact on LCP. In these scenarios, optimizing the carousel may significantly improve LCP. For an in-depth explanation of how LCP measurement works on pages containing carousels, refer to the [LCP measurement for carousels](#lcp-measurement-for-carousels) section.

- **FID (First Input Delay)**

  Carousels have minimal JavaScript requirements and therefore should not impact page interactivity. If you discover that your site's carousel has long-running scripts, you should consider replacing your carousel tooling.

- **CLS (Cumulative Layout Shift)**

  A surprising number of carousels use janky, non-composited animations that can contribute to CLS. On pages with autoplaying carousels, this has the potential to cause infinite CLS. This type of CLS typically isn't apparent to the human eye, which makes the issue easy to overlook. To avoid this issue, [avoid using non-composited animations](/non-composited-animations/) in your carousel (for example, during slide transitions).

## Performance best practices <a href="#performance-best-practices" class="w-headline-link">#</a>

### Load carousel content using HTML <a href="#load-carousel-content-using-html" class="w-headline-link">#</a>

Carousel content should be loaded via the page's HTML markup so that it is discoverable by the browser early in the page load process. Using JavaScript to initiate the loading of carousel content is probably the single biggest performance mistake to avoid when using carousels. This delays image loading and can negatively impact LCP.

Do

    <div class="slides">
      <img src="https://example.com/cat1.jpg">
      <img src="https://example.com/cat2.jpg">
      <img src="https://example.com/cat3.jpg">
    </div>

Don't

    const slides = document.querySelector(".slides");
    const newSlide = document.createElement("img");
    newSlide.src = "htttp://example.com/cat1.jpg";
    slides.appendChild(newSlide);

For advanced carousel optimization, consider loading the first slide statically, then progressively enhancing it to include navigation controls and additional content. This technique is most applicable to environments where you have a user's prolonged attention—this gives the additional content time to load. In environments like home pages, where users may only stick around for a second or two, only loading a single image may be similarly effective.

### Avoid layout shifts <a href="#avoid-layout-shifts" class="w-headline-link">#</a>

Chrome 88-90 shipped a variety of [bug fixes](https://chromium.googlesource.com/chromium/src/+/master/docs/speed/metrics_changelog/cls.md) related to how layout shifts are calculated. Many of these bug fixes are relevant to carousels. As a result of these fixes, sites should expect to see lower carousel-related layout shift scores in later versions of Chrome.

Slide transitions and navigation controls are the two most common sources of layout shifts in carousels:

- **Slide transitions:** Layout shifts that occur during slide transitions are usually caused by updating the layout-inducing properties of DOM elements. Examples of some of these properties include: `left`, `top`, `width`, and `marginTop`. To avoid layout shifts, instead use the CSS [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property to transition these elements. This [demo](https://glitch.com/~basic-carousel) shows how to use `transform` to build a basic carousel.

- **Navigation controls:** Moving or adding/removing carousel navigation controls from the DOM can cause layout shifts depending on how these changes are implemented. Carousels that exhibit this behavior typically do so in response to user hover.

These are some of the common points of confusion regarding CLS measurement for carousels:

- **Autoplay carousels:** Slide transitions are the most common source of carousel-related layout shifts. In a non-autoplay carousel these layout shifts typically occur within 500ms of a user interaction and [therefore do not count towards Cumulative Layout Shift (CLS)](/cls/#expected-vs.-unexpected-layout-shifts). However, for autoplay carousels, not only can these layout shifts potentially count towards CLS - but they can also repeat indefinitely. Thus, it is particularly important to verify that an autoplay carousel is not a source of layout shifts.

- **Scrolling:** Some carousels allow users to use scrolling to navigate through carousel slides. If an element's start position changes but its scroll offset (that is, [`scrollLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft) or [`scrollTop`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)) changes by the same amount (but in the opposite direction) this is not considered a layout shift provided that they occur in the same frame.

For more information on layout shifts, see [Debug layout shifts](/debug-layout-shifts/#identifying-the-cause-of-a-layout-shift).

### Use modern technology <a href="#use-modern-technology" class="w-headline-link">#</a>

Many sites use [third-party JavaScript](/third-party-javascript) libraries to implement carousels. If you currently use older carousel tooling, you may be able to improve performance by switching to newer tooling. Newer tools tend to use more efficient APIs and are less likely to require additional dependencies like jQuery.

However, dependng on the type of carousel you are building, you may not need JavaScript at all. The new [Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) API makes it possible to implement carousel-like transitions using only HTML and CSS.

Here are some resources on using `scroll-snap` that you may find helpful:

- [Building a Stories component (web.dev)](/building-a-stories-component/)
- [Next-generation web styling: scroll snap (web.dev)](/next-gen-css-2019/#scroll-snap)
- [CSS-Only Carousel (CSS Tricks)](https://css-tricks.com/css-only-carousel/)
- [How to Make a CSS-Only Carousel (CSS Tricks)](https://css-tricks.com/how-to-make-a-css-only-carousel/)

### Optimize carousel content <a href="#optimize-carousel-content" class="w-headline-link">#</a>

Carousels often contain some of a site's largest images, so it can be worth your time to make sure that these images are fully optimized. Choosing the right image format and compression level, [using an image CDN](/image-cdns), and [using srcset to serve multiple image versions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) are all techniques that can reduce the transfer size of images.

## Performance measurement <a href="#performance-measurement" class="w-headline-link">#</a>

This section discusses LCP measurement as it relates to carousels. Although carousels are treated no differently than any other UX element during LCP calculation, the mechanics of calculating LCP for autoplaying carousels is a common point of confusion.

### LCP measurement for carousels <a href="#lcp-measurement-for-carousels" class="w-headline-link">#</a>

These are the key points to understanding how LCP calculation works for carousels:

- LCP considers page elements as they are painted to the frame. New candidates for the LCP element are no longer considered once the user interacts (taps, scrolls, or keypresses) with the page. Thus, any slide in an autoplaying carousel has the potential to be the final LCP element—whereas in a static carousel only the first slide would be a potential LCP candidate.
- If two equally sized images are rendered, the first image will be considered the LCP element. The LCP element is only updated when the LCP candidate is larger than the current LCP element. Thus, if all carousel elements are equally sized, the LCP element should be the first image that is displayed.
- When evaluating LCP candidates, LCP considers the "[visible size or the intrinsic size, whichever is smaller](/lcp)." Thus, if an autoplaying carousel displays images at a consistent size, but contains images of varying [intrinsic sizes](https://developer.mozilla.org/en-US/docs/Glossary/Intrinsic_Size) that are smaller than the display size, the LCP element may change as new slides are displayed. In this case, if all images are displayed at the same size, the image with the largest intrinsic size will be considered the LCP element. To keep LCP low, you should ensure that all items in an autoplaying carousel are the same intrinsic size.

### Changes to LCP calculation for carousels in Chrome 88 <a href="#changes-to-lcp-calculation-for-carousels-in-chrome-88" class="w-headline-link">#</a>

As of [Chrome 88](https://chromium.googlesource.com/chromium/src/+/master/docs/speed/metrics_changelog/2020_11_lcp.md), images that are later removed from the DOM are considered as potential largest contentful paints. Prior to Chrome 88, these images were excluded from consideration. For sites that use autoplaying carousels, this definition change will either have a neutral or positive impact on LCP scores.

This change was made in response to the [observation](https://github.com/anniesullie/LCP_Examples/tree/master/removed_from_dom) that many sites implement carousel transitions by removing the previously displayed image from the DOM tree. Prior to Chrome 88, each time that a new slide was presented, the removal of the previous element would trigger an LCP update. This change only affects autoplaying carousels-by definition, potential largest contentful paints can only occur before a user first interacts with the page.

## Other considerations <a href="#other-considerations" class="w-headline-link">#</a>

This section discusses UX and product best practices that you should keep in mind when implementing carousels. Carousels should advance your business goals and present content in a way that is easy to navigate and read.

### Navigation best practices <a href="#navigation-best-practices" class="w-headline-link">#</a>

#### Provide prominent navigation controls <a href="#provide-prominent-navigation-controls" class="w-headline-link">#</a>

Carousel navigation controls should be easy to click and highly visible. This is something that is rarely done well-most carousels have navigation controls that are both small and subtle. Keep in mind that a single color or style of navigation control will rarely work in all situations. For example, an arrow that is clearly visible against a dark background might be difficult to see against a light background.

#### Indicate navigation progress <a href="#indicate-navigation-progress" class="w-headline-link">#</a>

Carousel navigation controls should provide context about the total number of slides and the user's progress through them. This information makes it easier for the user to navigate to a particular slide and understand which content has already been viewed. In some situations providing a preview of upcoming content—whether it be an excerpt of the next slide or a list of thumbnails-can also be helpful and increase engagement.

#### Support mobile gestures <a href="#support-mobile-gestures" class="w-headline-link">#</a>

On mobile, swipe gestures should be supported in addition to traditional navigation controls (such as on screen buttons).

#### Provide alternate navigation paths <a href="#provide-alternate-navigation-paths" class="w-headline-link">#</a>

Because it's unlikely that most users will engage with all carousel content, the content that carousel slides link to should be accessible from other navigation paths.

### Readability best practices <a href="#readability-best-practices" class="w-headline-link">#</a>

#### Don't use autoplay <a href="#don&#39;t-use-autoplay" class="w-headline-link">#</a>

The use of autoplay creates two almost paradoxical problems: on-screen animations tend to distract users and move the eyes away from more important content; simultaneously, because users often associate animations with ads, they will ignore carousels that autoplay.

Thus, it's a rare that autoplay is a good choice. If content is important, not using autoplay will maximize its exposure; if carousel content is not important, then the use of autoplay will detract from more important content. In addition, autoplaying carousels can be difficult to read (and annoying, too). People read at different speeds, so it's rare that a carousel consistently transitions at the "right" time for different users.

Ideally, slide navigation should be user-directed via navigation controls. If you must use autoplay, autoplay should be disabled on user hover. In addition, the slide transition rate should take slide content into account-the more text that a slide contains, the longer it should be displayed on screen.

#### Keep text and images separate <a href="#keep-text-and-images-separate" class="w-headline-link">#</a>

Carousel text content is often "baked into" the corresponding image file, rather than displayed separately using HTML markup. This approach is bad for accessibility, localization, and compression rates. It also encourages a one-size-fits-all approach to asset creation. However, the same image and text formatting is rarely equally readable across desktop and mobile formats.

#### Be concise <a href="#be-concise" class="w-headline-link">#</a>

You only have a fraction of a second to catch a user's attention. Short, to-the-point copy will increase the odds that your message gets across.

### Product best practices <a href="#product-best-practices" class="w-headline-link">#</a>

Carousels work well in situations where using additional vertical space to display additional content is not an option. Carousels on product pages are often a good example of this use case.

However, carousels are not always used effectively.

- Carousels, particularly if they contain promotions or advance automatically, are easily [mistaken](https://www.nngroup.com/articles/auto-forwarding/) for advertisements by users. Users tend to ignore advertisements—a phenomenon known as [banner blindness](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/).
- Carousels are often used to placate multiple departments and avoid making decisions about business priorities. As a result, carousels can easily turn into a dumping ground for ineffective content.

#### Test your assumptions <a href="#test-your-assumptions" class="w-headline-link">#</a>

The business impact of carousels, particularly those on homepages, should be evaluated and tested. Carousel clickthrough rates can help you determine whether a carousel and its content is effective.

#### Be relevant <a href="#be-relevant" class="w-headline-link">#</a>

Carousels work best when they contain interesting and relevant content that is presented with a clear context. If content wouldn't engage a user outside of a carousel—placing it in a carousel won't make it perform any better. If you must use a carousel, prioritize content and ensure that each slide is sufficiently relevant that a user would want to click through to the subsequent slide.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jan 26, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/carousel-best-practices/index.md)

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
