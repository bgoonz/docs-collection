<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format" alt="Stylized photo of a half-hidden person." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/lrAkOWYTyGkK2BKXoF9y.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#lesscodegreatercontent-visibilitylesscodegreater:-the-new-css-property-that-boosts-your-rendering-performance" class="w-toc__header--link"><code>content-visibility</code>: the new CSS property that boosts your rendering performance</a>

- [Browser support](#support)
- [CSS Containment](#containment)
- [Skipping rendering work with content-visibility](#skipping-rendering-work-with-content-visibility)
- [A note on accessibility](#a-note-on-accessibility)
- [Example: a travel blog](#example)
- [Specifying the natural size of an element with contain-intrinsic-size](#specifying-the-natural-size-of-an-element-with-contain-intrinsic-size)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# `content-visibility`: the new CSS property that boosts your rendering performance

Improve initial load time by skipping the rendering of offscreen content.

Aug 5, 2020 <span class="w-author__separator">•</span> Updated Mar 9, 2021

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/dmYne3aSCS1fj5ZfL8If.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Vladimir Levin" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dmYne3aSCS1fj5ZfL8If.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/dmYne3aSCS1fj5ZfL8If.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/dmYne3aSCS1fj5ZfL8If.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/dmYne3aSCS1fj5ZfL8If.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/dmYne3aSCS1fj5ZfL8If.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/vladimirlevin/)

<a href="/authors/vladimirlevin/" class="w-author__name-link">Vladimir Levin</a>

The [`content-visibility`](https://drafts.csswg.org/css-contain/#propdef-content-visibility) property, launching in Chromium 85, might be one of the most impactful new CSS properties for improving page load performance. `content-visibility` enables the user agent to skip an element's rendering work, including layout and painting, until it is needed. Because rendering is skipped, if a large portion of your content is off-screen, leveraging the `content-visibility` property makes the initial user load much faster. It also allows for faster interactions with the on-screen content. Pretty neat.

## <figure><img src="https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format" alt="In our article demo, applying content-visibility: auto to chunked content areas gives a 7x rendering performance boost on initial load. Read on to learn more." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/v6WcSx9Fq76lCD0iqFCQ.jpg?auto=format&amp;w=1600 1600w" width="800" height="554" /><figcaption>In our article demo, applying <code>content-visibility: auto</code> to chunked content areas gives a <strong>7x</strong> rendering performance boost on initial load. Read on to learn more.</figcaption></figure>Browser support <a href="#support" class="w-headline-link">#</a>

`content-visibility` relies on primitives within the [the CSS Containment Spec](http://drafts.csswg.org/css-contain/). While `content-visibility` is only supported in Chromium 85 for now (and deemed ["worth prototyping"](https://github.com/mozilla/standards-positions/issues/135) for Firefox), the Containment Spec is supported in [most modern browsers](https://caniuse.com/#feat=css-containment).

## CSS Containment <a href="#containment" class="w-headline-link">#</a>

The key and overarching goal of CSS containment is to enable rendering performance improvements of web content by providing **predictable isolation of a DOM subtree** from the rest of the page.

Basically a developer can tell a browser what parts of the page are encapsulated as a set of content, allowing the browsers to reason about the content without needing to consider state outside of the subtree. Knowing which bits of content (subtrees) contain isolated content means the browser can make optimization decisions for page rendering.

There are four types of [CSS containment](https://developers.google.com/web/updates/2016/06/css-containment), each a potential value for the `contain` CSS property, which can be combined together in a space-separated list of values:

- `size`: Size containment on an element ensures that the element's box can be laid out without needing to examine its descendants. This means we can potentially skip layout of the descendants if all we need is the size of the element.
- `layout`: Layout containment means that the descendants do not affect the external layout of other boxes on the page. This allows us to potentially skip layout of the descendants if all we want to do is lay out other boxes.
- `style`: Style containment ensures that properties which can have effects on more than just its descendants don't escape the element (e.g. counters). This allows us to potentially skip style computation for the descendants if all we want is to compute styles on other elements.
- `paint`: Paint containment ensures that the descendants of the containing box don't display outside its bounds. Nothing can visibly overflow the element, and if an element is off-screen or otherwise not visible, its descendants will also not be visible. This allows us to potentially skip painting the descendants if the element is offscreen.

## Skipping rendering work with `content-visibility` <a href="#skipping-rendering-work-with-content-visibility" class="w-headline-link">#</a>

It may be hard to figure out which containment values to use, since browser optimizations may only kick in when an appropriate set is specified. You can play around with the values to see [what works best](https://developers.google.com/web/updates/2016/06/css-containment), or you can use another CSS property called `content-visibility` to apply the needed containment automatically. `content-visibility` ensures that you get the largest performance gains the browser can provide with minimal effort from you as a developer.

The content-visibility property accepts several values, but `auto` is the one that provides immediate performance improvements. An element that has `content-visibility: auto` gains `layout`, `style` and `paint` containment. If the element is off-screen (and not otherwise relevant to the user—relevant elements would be the ones that have focus or selection in their subtree), it also gains `size` containment (and it stops [painting](https://developers.google.com/web/updates/2018/09/inside-browser-part3#paint) and [hit-testing](https://developers.google.com/web/updates/2018/09/inside-browser-part4#finding_the_event_target) its contents).

What does this mean? In short, if the element is off-screen its descendants are not rendered. The browser determines the size of the element without considering any of its contents, and it stops there. Most of the rendering, such as styling and layout of the element's subtree are skipped.

As the element approaches the viewport, the browser no longer adds the `size` containment and starts painting and hit-testing the element's content. This enables the rendering work to be done just in time to be seen by the user.

## A note on accessibility <a href="#a-note-on-accessibility" class="w-headline-link">#</a>

One of the features of `content-visibility: auto` is that the off-screen content remains available in the document object model and therefore, the accessibility tree (unlike with `visibility: hidden`). This means, that content can be searched for on the page, and navigated to, without waiting for it to load or sacrificing rendering performance.

The flip-side of this, however, is that [landmark](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles) elements with style features such as `display: none` or `visibility: hidden` will also appear in the accessibility tree when off-screen, since the browser will not render these styles until they enter the viewport. To prevent these from being visible in the accessibility tree, potentially causing clutter, be sure to also add `aria-hidden="true"`.

**Caution**: In Chromium 85-89, off-screen children within `content-visibility: auto` were marked as invisible. In particular, [headings](https://marcysutton.com/content-visibility-accessible-semantics) and landmark roles were not exposed to accessibility tools. In Chromium 90 this was updated so that they are exposed.

## Example: a travel blog <a href="#example" class="w-headline-link">#</a>

In this example, we baseline our travel blog on the right, and apply `content-visibility: auto` to chunked areas on the left. The results show rendering times going from **232ms** to **30ms** on initial page load.

A travel blog typically contains a set of stories with a few pictures, and some descriptive text. Here is what happens in a typical browser when it navigates to a travel blog:

1.  A part of the page is downloaded from the network, along with any needed resources.
2.  The browser styles and lays out all of the contents of the page, without considering if the content is visible to the user.
3.  The browser goes back to step 1 until all of the page and resources are downloaded.

In step 2, the browser processes all of the contents looking for things that may have changed. It updates the style and layout of any new elements, along with the elements that may have shifted as a result of new updates. This is rendering work. This takes time.

<figure><img src="https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format" alt="An example of a travel blog. See Demo on Codepen" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/57Zh2hjcXJjJIBSE648j.jpg?auto=format&amp;w=1600 1600w" width="800" height="563" /><figcaption>An example of a travel blog. See <a href="https://codepen.io/una/pen/rNxEWLo">Demo on Codepen</a></figcaption></figure>Now consider what happens if you put `content-visibility: auto` on each of the individual stories in the blog. The general loop is the same: the browser downloads and renders chunks of the page. However, the difference is in the amount of work that it does in step 2.

With content-visibility, it will style and layout all of the contents that are currently visible to the user (they are on-screen). However, when processing the story that is fully off-screen, the browser will skip the rendering work and only style and layout the element box itself.

The performance of loading this page would be as if it contained full on-screen stories and empty boxes for each of the off-screen stories. This performs much better, with _expected reduction of 50% or more_ from the rendering cost of loading. In our example, we see a boost from a **232ms** rendering time to a **30ms** rendering time. That's a **7x** performance boost.

What is the work that you need to do in order to reap these benefits? First, we chunk the content into sections:

<figure><img src="https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format" alt="Example of chunking content into sections with the story class applied, to receive content-visibility: auto. See Demo on Codepen" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/29uexe2kBwIsrAuILPnp.jpg?auto=format&amp;w=1600 1600w" width="800" height="563" /><figcaption>Example of chunking content into sections with the <code>story</code> class applied, to receive <code>content-visibility: auto</code>. See <a href="https://codepen.io/vmpstr/pen/xxZoyMb">Demo on Codepen</a></figcaption></figure>Then, we apply the following style rule to the sections:

    .story {
      content-visibility: auto;
      contain-intrinsic-size: 1000px; /* Explained in the next section. */
    }

Note that as content moves in and out of visibility, it will start and stop being rendered as needed. However, this does not mean that the browser will have to render and re-render the same content over and over again, since the rendering work is saved when possible.

### Specifying the natural size of an element with `contain-intrinsic-size` <a href="#specifying-the-natural-size-of-an-element-with-contain-intrinsic-size" class="w-headline-link">#</a>

In order to realize the potential benefits of `content-visibility`, the browser needs to apply size containment to ensure that the rendering results of contents do not affect the size of the element in any way. This means that the element will lay out as if it was empty. If the element does not have a height specified in a regular block layout, then it will be of 0 height.

This might not be ideal, since the size of the scrollbar will shift, being reliant on each story having a non-zero height.

Thankfully, CSS provides another property, `contain-intrinsic-size`, which effectively specifies the natural size of the element _if the element is affected by size containment_. In our example, we are setting it to `1000px` as an estimate for the height and width of the sections.

This means it will lay out as if it had a single child of "intrinsic-size" dimensions, ensuring that your unsized divs still occupy space. `contain-intrinsic-size` acts as a placeholder size in lieu of rendered content.

We can use `IntersectionObserver` and `MutationObserver` to set the correct sizes inline for each element. [Alex Russell](https://twitter.com/slightlylate) explains how this works in [`content-visibility` without jittery scrollbars](https://infrequently.org/2020/12/content-visibility-scroll-fix/), and [Resize-Resilient `content-visibility` Fixes](https://infrequently.org/2020/12/resize-resilient-deferred-rendering/).

\#\# Hiding content with \`content-visibility: hidden\`

What if you want to keep the content unrendered regardless of whether or not it is on-screen, while leveraging the benefits of cached rendering state? Enter: `content-visibility: hidden`.

The `content-visibility: hidden` property gives you all of the same benefits of unrendered content and cached rendering state as `content-visibility: auto` does off-screen. However, unlike with `auto`, it does not automatically start to render on-screen.

This gives you more control, allowing you to hide an element's contents and later unhide them quickly.

Compare it to other common ways of hiding element's contents:

- `display: none`: hides the element and destroys its rendering state. This means unhiding the element is as expensive as rendering a new element with the same contents.
- `visibility: hidden`: hides the element and keeps its rendering state. This doesn't truly remove the element from the document, as it (and it's subtree) still takes up geometric space on the page and can still be clicked on. It also updates the rendering state any time it is needed even when hidden.

`content-visibility: hidden`, on the other hand, hides the element while preserving its rendering state, so, if there are any changes that need to happen, they only happen when the element is shown again (i.e. the `content-visibility: hidden` property is removed).

Some great use cases for `content-visibility: hidden` are when implementing advanced virtual scrollers, and measuring layout. They're also great for single-page applications (SPA's). Inactive app views can be left in the DOM with `content-visibility: hidden` applied to prevent their display but maintain their cached state. This makes the view quick to render when it becomes active again.

In an experiment, Facebook engineers observed an up to 250ms improvement in navigation times when going back to previously cached views.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

`content-visibility` and the CSS Containment Spec mean some exciting performance boosts are coming right to your CSS file. For more information on these properties, check out:

- [The CSS Containment Spec](http://drafts.csswg.org/css-contain/)
- [MDN Docs on CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)
- [CSSWG Drafts](https://github.com/w3c/csswg-drafts)

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Mar 9, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/content-visibility/index.md)

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
