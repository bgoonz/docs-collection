<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format" alt="A teddy bear wearing a facemask." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/uNWkHLVFNcTDk09OplrA.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#apply-effects-to-images-with-css&#39;s-mask-image-property" class="w-toc__header--link">Apply effects to images with CSS's mask-image property</a>

- [Browser compatibility](#browser-compatibility)
- [Masking with an image](#masking-with-an-image)
- [Masking with SVG](#masking-with-svg)
- [Masking with a gradient](#masking-with-a-gradient)
- [Using multiple masks](#using-multiple-masks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Apply effects to images with CSS's mask-image property

CSS masking gives you the option of using an image as a mask layer. This means that you can use an image, an SVG, or a gradient as your mask, to create interesting effects without an image editor.

Sep 14, 2020

[<img src="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rachel Andrew" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rachelandrew/)

<a href="/authors/rachelandrew/" class="w-author__name-link">Rachel Andrew</a>

- <a href="https://twitter.com/rachelandrew" class="w-author__link">Twitter</a>
- <a href="https://github.com/rachelandrew" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rachelandrew" class="w-author__link">Glitch</a>
- <a href="https://rachelandrew.co.uk/" class="w-author__link">Blog</a>

When you [clip an element](/css-clipping) using the `clip-path` property the clipped area becomes invisible. If instead you want to make part of the image opaque or apply some other effect to it, then you need to use masking. This post explains how to use the [`mask-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image) property in CSS, which lets you specify an image to use as a mask layer. This gives you three options. You can use an image file as your mask, an SVG, or a gradient.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

Most browsers only have partial support for the standard CSS masking property. You will need to use the `-webkit-` prefix in addition to the standard property in order to achieve the best browser compatibility. See [Can I use CSS Masks?](https://caniuse.com/#feat=css-masks) for full browser support information.

While browser support using the prefixed property is good, when using masking to make text on top of an image visible take care of what will happen if masking is unavailable. It may be worth using feature queries to detect support for `mask-image` or `-webkit-mask-image` and providing a readable fallback before adding your masked version.

    @supports(-webkit-mask-image: url(#mask)) or (mask-image: url(#mask)) {
      /* code that requires mask-image here. */
    }

## Masking with an image <a href="#masking-with-an-image" class="w-headline-link">#</a>

The `mask-image` property works in a similar way to the `background-image` property. Use a `url()` value to pass in an image. Your mask image needs to have a transparent or semi-transparent area.

A fully transparent area will cause the part of the image under that area to be invisible. Using an area which is semi-transparent however will allow some of the original image to show through. You can see the difference in the Glitch below. The first image is the original image of balloons with no mask. The second image has a mask applied which has a white star on a fully transparent background. The third image has a white star on a background with a gradient transparency.

In this example I am also using the `mask-size` property with a value of `cover`. This property works in the same way as [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size). You can use the keywords `cover` and `contain` or you can give the background a size using any valid length unit, or a percentage.

You can also repeat your mask just as you might repeat a background image, in order to use a small image as a repeating pattern.

## Masking with SVG <a href="#masking-with-svg" class="w-headline-link">#</a>

Rather than using an image file as the mask, you could use SVG. There are a couple of ways this can be achieved. The first is to have a `<mask>` element inside the SVG and reference the ID of that element in the `mask-image` property.

    <svg width="0" height="0" viewBox="0 0 400 300">
      <defs>
        <mask id="mask">
          <rect fill="#000000" x="0" y="0" width="400" height="300"></rect>
          <circle fill="#FFFFFF" cx="150" cy="150" r="100" />
          <circle fill="#FFFFFF" cx="50" cy="50" r="150" />
        </mask>
      </defs>
    </svg>

    <div class="container">
        <img src="balloons.jpg" alt="Balloons">
    </div>

    .container img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      -webkit-mask-image: url(#mask);
      mask-image: url(#mask);
    }

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format" class="w-screenshot" sizes="(min-width: 699px) 699px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3HnPhISiVazDTwezxfcy.jpg?auto=format&amp;w=1398 1398w" width="699" height="490" /></figure>The advantage of this approach is that the mask could be applied to any HTML element, not just an image. Unfortunately Firefox is the only browser that supports this approach.

All is not lost however, as for the most common scenario of masking an image, we can include the image in the SVG.

## Masking with a gradient <a href="#masking-with-a-gradient" class="w-headline-link">#</a>

Using a CSS gradient as your mask is an elegant way of achieving a masked area without needing to go to the trouble of creating an image or SVG.

A simple linear gradient used as a mask could ensure that the bottom part of an image will not be too dark underneath a caption, for example.

You can use any of the supported gradient types, and get as creative as you like. This next example uses a radial gradient to create a circular mask to illuminate behind the caption.

## Using multiple masks <a href="#using-multiple-masks" class="w-headline-link">#</a>

As with background images you can specify multiple mask sources, combining them to get the effect that you want. This is particularly useful if you want to use a pattern generated with CSS gradients as your mask. These typically will use multiple background images and so can be translated easily into a mask.

As an example, I found a nice checkerboard pattern in [this article](https://cssgradient.io/blog/gradient-patterns/). The code, using background images, looks like this:

    background-image:
      linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size:20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

To turn this, or any other pattern designed for background images, into a mask, you will need to replace the `background-*` properties with the relevant `mask` properties, including the `-webkit` prefixed ones.

    -webkit-mask-image:
      linear-gradient(45deg, #000000 25%, rgba(0,0,0,0.2) 25%),
      linear-gradient(-45deg, #000000 25%, rgba(0,0,0,0.2) 25%),
      linear-gradient(45deg, rgba(0,0,0,0.2) 75%, #000000 75%),
      linear-gradient(-45deg, rgba(0,0,0,0.2) 75%, #000000 75%);
    -webkit-mask-size:20px 20px;
      -webkit-mask-position: 0 0, 0 10px, 10px -10px, -10px 0px;

There are some really nice effects to be made by applying gradient patterns to images. Try remixing the Glitch and testing out some other variations.

Along with clipping, CSS masks are a way to add interest to images and other HTML elements without needing to use a graphics application.

_Photo by [Julio Rionaldo](https://unsplash.com/@juliorionaldo) on Unsplash._

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Sep 14, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-masking/index.md)

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
