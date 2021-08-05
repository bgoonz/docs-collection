<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format" alt="Image of colorful telephones resized with the same aspect ratio." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/I14dS86oJT2f0uHaDLEM.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#new-aspect-ratio-css-property-supported-in-chromium-safari-technology-preview-and-firefox-nightly" class="w-toc__header--link">New aspect-ratio CSS property supported in Chromium, Safari Technology Preview, and Firefox Nightly</a>

- [Aspect ratio](#aspect-ratio)
- [Object-fit](#object-fit)
- [The old hack: maintaining aspect ratio with padding-top](#the-old-hack:-maintaining-aspect-ratio-with-padding-top)
- [Maintaining aspect ratio with aspect-ratio](#maintaining-aspect-ratio-with-aspect-ratio)
- [Example: consistency in a grid](#example:-consistency-in-a-grid)
- [Example: preventing layout shift](#example:-preventing-layout-shift)
- [Bonus tip: image attributes for aspect ratio](#bonus-tip:-image-attributes-for-aspect-ratio)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# New aspect-ratio CSS property supported in Chromium, Safari Technology Preview, and Firefox Nightly

The new CSS property that helps maintain spacing in responsive layouts.

Jan 28, 2021

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

Summary: Maintaining a consistent width-to-height ratio, called an _aspect ratio_, is critical in responsive web design and for preventing [cumulative layout shift](/cls/). Now, there's a more straightforward way to do this with the new `aspect-ratio` property launching in [Chromium 88](https://www.chromestatus.com/feature/5738050678161408), [Firefox 87](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features#property_aspect-ratio), and [Safari Technology Preview 118](https://developer.apple.com/safari/technology-preview/release-notes/).

## Aspect ratio <a href="#aspect-ratio" class="w-headline-link">#</a>

Aspect ratio is most commonly expressed as two integers and a colon in the dimensions of: width:height, or x:y. The most common aspect ratios for photography are 4:3 and 3:2, while video, and more recent consumer cameras, tend to have a 16:9 aspect ratio.

<figure><img src="https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format" alt="Two images with the same aspect ratio. One is 634 x 951px while the other is 200 x 300px. Both have a 2:3 aspect ratio." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/od54hUUe21UABpbWxSFG.jpg?auto=format&amp;w=1600 1600w" width="800" height="526" /><figcaption>Two images with the same aspect ratio. One is 634 x 951px while the other is 200 x 300px. Both have a 2:3 aspect ratio.</figcaption></figure>With the advent of responsive design, maintaining aspect ratio has been increasingly important for web developers, especially as image dimensions differ and element sizes shift based on available space.

Some examples of where maintaining aspect ratio become important are:

- Creating responsive iframes, where they are 100% of a parent's width, and the height should remain a specific viewport ratio
- Creating intrinsic placeholder containers for images, [videos](http://fitvidsjs.com/), and embeds to prevent re-layout when the items load and take up space
- Creating uniform, responsive space for interactive data visualizations or SVG animations
- Creating uniform, responsive space for multi-element components such as cards or calendar dates
- Creating uniform, responsive space for multiple images of varying dimension (can be used alongside `object-fit`)

## Object-fit <a href="#object-fit" class="w-headline-link">#</a>

Defining an aspect ratio helps us with sizing media in a responsive context. Another tool in this bucket is the `object-fit` property, which enables users to describe how an object (such an as image) within a block should fill that block:

<figure><img src="https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format" alt="Showcasing various object-fit values. See demo on Codepen." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/A7uj6u5MULodlw4lVsI2.jpg?auto=format&amp;w=1600 1600w" width="800" height="236" /><figcaption>Showcasing various <code>object-fit</code> values. See <a href="https://codepen.io/una/pen/mdrLGjR">demo on Codepen</a>.</figcaption></figure>The `initial` and `fill` values re-adjust the image to fill the space. In our example, this causes the image to be squished and blurry, as it re-adjusts pixels. Not ideal. `object-fit: cover` uses the image's smallest dimension to fill the space and crops the image to fit into it based on this dimension. It "zooms in" at its lowest boundary. `object-fit: contain` ensures that the entire image is always visible, and so the opposite of `cover`, where it takes the size of the largest boundary (in our example above this is width), and resizes the image to maintain its intrinsic aspect ratio while fitting into the space. The `object-fit: none` case shows the image cropped in its center (default object position) at its natural size.

`object-fit: cover` tends to work in most situations to ensure a nice uniform interface when dealing with images of varying dimensions, however, you lose information this way (the image is cropped at its longest edges).

If these details are important (for example, when working with a flat lay of beauty products), cropping important content is not acceptable. So the ideal scenario would be responsive images of varying sizes that fit the UI space without cropping.

## The old hack: maintaining aspect ratio with `padding-top` <a href="#the-old-hack:-maintaining-aspect-ratio-with-padding-top" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format" alt="Using padding-top to set a 1:1 aspect ratio on post preview images within a carousel." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/j3YJicINXjly349uEEUt.jpg?auto=format&amp;w=1600 1600w" width="800" height="296" /><figcaption>Using <code>padding-top</code> to set a 1:1 aspect ratio on post preview images within a carousel.</figcaption></figure>In order to make these more responsive, we can use aspect ratio. This allows for us to set a specific ratio size and base the rest of the media on an individual axis (height or width).

A currently well-accepted cross-browser solution for maintaining aspect ratio based on an image's width is known as the "Padding-Top Hack". This solution requires a parent container and an absolutely placed child container. One would then calculate the aspect ratio as a percentage to set as the `padding-top`. For example:

- 1:1 aspect ratio = 1 / 1 = 1 = `padding-top: 100%`
- 4:3 aspect ratio = 3 / 4 = 0.75 = `padding-top: 75%`
- 3:2 aspect ratio = 2 / 3 = 0.66666 = `padding-top: 66.67%`
- 16:9 aspect ratio = 9 / 16 = 0.5625 = `padding-top: 56.25%`

Now that we have identified the aspect ratio value, we can apply that to our parent container. Consider the following example:

    <div class="container">
      <img class="media" src="..." alt="...">
    </div>

We could then write the following CSS:

    .container {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }

    .media {
      position: absolute;
      top: 0;
    }

## Maintaining aspect ratio with `aspect-ratio` <a href="#maintaining-aspect-ratio-with-aspect-ratio" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format" alt="Using aspect-ratio to set a 1:1 aspect ratio on post preview images within a carousel." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/XT8PbPiYx1IJq3Pvmanz.jpg?auto=format&amp;w=1600 1600w" width="800" height="296" /><figcaption>Using <code>aspect-ratio</code> to set a 1:1 aspect ratio on post preview images within a carousel.</figcaption></figure>Unfortunately, calculating these `padding-top` values is not very intuitive, and requires some additional overhead and positioning. With the new intrinsic `aspect-ratio` [CSS property](https://drafts.csswg.org/css-sizing-4/#aspect-ratio), the language for maintaining aspect ratios is much more clear.

With the same markup, we can replace: `padding-top: 56.25%` with `aspect-ratio: 16 / 9`, setting `aspect-ratio` to a specified ratio of `width` / `height`.

Using padding-top

    .container {
      width: 100%;
      padding-top: 56.25%;
    }

Using aspect-ratio

    .container {
      width: 100%;
      aspect-ratio: 16 / 9;
    }

Using `aspect-ratio` instead of `padding-top` is much more clear, and does not overhaul the padding property to do something outside of its usual scope.

This new property also adds the ability to set aspect ratio to `auto`, where "replaced elements with an intrinsic aspect ratio use that aspect ratio; otherwise the box has no preferred aspect ratio." If both `auto` and a `<ratio>` are specified together, the preferred aspect ratio is the specified ratio of `width` divided by `height` unless it is a [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) with an intrinsic aspect ratio, in which case that aspect ratio is used instead.

## Example: consistency in a grid <a href="#example:-consistency-in-a-grid" class="w-headline-link">#</a>

This works really well with CSS layout mechanisms like CSS Grid and Flexbox as well. Consider a list with children that you want to maintain a 1:1 aspect ratio, such as a grid of sponsor icons:

    <ul class="sponsor-grid">
      <li class="sponsor">
        <img src="..." alt="..."/>
      </li>
      <li class="sponsor">
        <img src="..." alt="..."/>
      </li>
    </ul>

    .sponsor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .sponsor img {
      aspect-ratio: 1 / 1;
      width: 100%;
      object-fit: contain;
    }

Images in a grid with their parent element at various aspect ratio dimensions. [See demo on Codepen.](https://codepen.io/una/pen/PoGddaw)

## Example: preventing layout shift <a href="#example:-preventing-layout-shift" class="w-headline-link">#</a>

Another great feature of `aspect-ratio` is that it can create placeholder space to prevent [Cumulative Layout Shift](/cls/) and deliver better [Web Vitals](/learn-web-vitals/). In this first example, loading an asset from an API such as [Unsplash](https://source.unsplash.com/) creates a layout shift when the media is finished loading.

Video of cumulative layout shift that happens when no aspect ratio is set on a loaded asset. This video is recorded with an emulated 3G network.

Using `aspect-ratio`, on the other hand, creates a placeholder to prevent this layout shift:

    img {
      width: 100%;
      aspect-ratio: 8 / 6;
    }

Video with a set aspect ratio is set on a loaded asset. This video is recorded with an emulated 3G network. [See demo on Codepen.](https://codepen.io/una/pen/GRjLZmG)

### Bonus tip: image attributes for aspect ratio <a href="#bonus-tip:-image-attributes-for-aspect-ratio" class="w-headline-link">#</a>

Another way to set an image's aspect ratio is through [image attributes](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/). If you know the dimensions of the image ahead of time, it is a [best practice](/image-aspect-ratio/#check-the-image's-width-and-height-attributes-in-the-html) to set these dimensions as its `width` and `height`.

For our example above, knowing the dimensions are 800px by 600px, the image markup would look like: `<img src="image.jpg" alt="..." width="800" height="600">`. If the image sent has the same aspect ratio, but not necessarily those exact pixel values, we could still use image attribute values to set the ratio, combined with a style of `width: 100%` so that the image takes up the proper space. All together that would look like:

    <!-- Markup -->
    <img src="image.jpg" alt="..." width="8" height="6">

    /* CSS */
    img {
      width: 100%;
    }

In the end, the effect is the same as setting the `aspect-ratio` on the image via CSS, and cumulative layout shift is avoided ([see demo on Codepen](https://codepen.io/una/pen/gOwJWoz)).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

With the new `aspect-ratio` CSS property, launching across multiple modern browsers, maintaining proper aspect ratios in your media and layout containers gets a little bit more straightforward.

Photos by [Amy Shamblen](https://unsplash.com/photos/TXg_38oImi0) and [Lionel Gustave](https://unsplash.com/photos/c1rOy44wuts) via Unsplash.

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Jan 28, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/aspect-ratio/index.md)

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
