<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format" alt="Scissors hanging on a wall." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Pl4AScfj5y8ovHD1pi64.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#create-interesting-image-shapes-with-css&#39;s-clip-path-property" class="w-toc__header--link">Create interesting image shapes with CSS's clip-path property</a>

- [Browser compatibility](#browser-compatibility)
- [Basic shapes](#basic-shapes)
- [inset()](<#inset()>)
- [circle()](<#circle()>)
- [ellipse()](<#ellipse()>)
- [polygon()](<#polygon()>)
- [Shapes from box values](#shapes-from-box-values)
- [Using an SVG element](#using-an-svg-element)
- [Animating the clipped area](#animating-the-clipped-area)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Create interesting image shapes with CSS's clip-path property

Using clipping in CSS can help us move away from everything in our designs looking like a box. By using various basic shapes, or an SVG, you can create a clip path. Then cut away the parts of an element you don't want to show.

Sep 14, 2020

[<img src="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rachel Andrew" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rachelandrew/)

<a href="/authors/rachelandrew/" class="w-author__name-link">Rachel Andrew</a>

- <a href="https://twitter.com/rachelandrew" class="w-author__link">Twitter</a>
- <a href="https://github.com/rachelandrew" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rachelandrew" class="w-author__link">Glitch</a>
- <a href="https://rachelandrew.co.uk/" class="w-author__link">Blog</a>

Elements on web pages are all defined inside a rectangular box. However that doesn't mean that we have to make everything look like a box. You can use the CSS `clip-path` property to clip away parts of an image or other element, to create interesting effects.

In the example above, the balloon image is square ([source](https://cdn.glitch.com/5984697d-c5e8-4a63-a765-7e7ac3916fc0%2Fround-balloon.jpg?v=1597216988521)). Using `clip-path` and the basic shape value of `circle()` the additional sky around the balloon is clipped away leaving a circular image on the page.

As the image is a link you can see something else about the `clip-path` property. Only the visible area of the image can be clicked on, as events do not fire on the hidden parts of the image.

Clipping can be applied to any HTML element, not just images. There are a few different ways to create a `clip-path`, in this post we will take a look at them.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

Other than the box values as explained later in the post, the various values of `clip-path` demonstrated have [excellent browser support](https://caniuse.com/#feat=css-clip-path). For legacy browsers a fallback may be to allow the browser to ignore the `clip-path` property and show the unclipped image. If this is a problem you could test for `clip-path` in a feature query and offer an alternate layout for unsupporting browsers.

    @supports(clip-path: circle(45%)) {
      /* code that requires clip-path here. */
    }

## Basic shapes <a href="#basic-shapes" class="w-headline-link">#</a>

The `clip-path` property can take a number of values. The value used in the initial example was `circle()`. This is one of the basic shape values, which are defined in the [CSS Shapes specification](https://www.w3.org/TR/css-shapes-1/#basic-shape-functions). This means that you can clip an area, and also use the same value for `shape-outside` to cause text to wrap around that shape.

Note that CSS Shapes can only be applied to floated elements. The `clip-path` property does not require the element to be floated.

The full list of basic shapes is:

- [`inset()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes#inset)
- [`circle()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes#circle)
- [`ellipse()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes#ellipse)
- [`polygon()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes#polygon)

### `inset()` <a href="#inset()" class="w-headline-link">#</a>

The `inset()` value insets the clipped area from the edge of the element, and can be passed values for the top, right, bottom, and left edges. A `border-radius` can also be added to curve the corners of the clipped area, by using the `round` keyword.

In my example I have two boxes both with a class of `.box`. The first box has no clipping, the second is clipped using `inset()` values.

### `circle()` <a href="#circle()" class="w-headline-link">#</a>

As you have seen, the `circle()` value creates a circular clipped area. The first value is a length or a percentage and is the radius of the circle. A second optional value allows you to set the center of the circle. In the example below I am using keyword values to set my clipped circle top right. You could also use lengths or percentages.

#### Watch out for flat edges! <a href="#watch-out-for-flat-edges!" class="w-headline-link">#</a>

Be aware with all of these values that the shape will be clipped by the margin box on the element. If you create a circle on an image, and that shape would extend outside of the natural size of the image, you will get a flat edge.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format" alt="The image used earlier now has circle(50%) applied. As the image is not square, we hit the margin box at the top and bottom and the circle is clipped." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sQPOF6oaR31kjSVGzztu.jpg?auto=format&amp;w=1600 1600w" width="800" height="427" /><figcaption>The image used earlier now has <code>circle(50%)</code> applied. As the image is not square, we hit the margin box at the top and bottom and the circle is clipped.</figcaption></figure>### `ellipse()` <a href="#ellipse()" class="w-headline-link">#</a>

An ellipse is essentially a squashed circle, and so acts very much like `circle()` but accepts a radius for x and a radius for y, plus the value for the center of the ellipse.

### `polygon()` <a href="#polygon()" class="w-headline-link">#</a>

The `polygon()` value can help you create fairly complex shapes, defining as many points as you need, by setting the coordinates of each point.

To help you create polygons and see what is possible check out [Clippy](https://bennettfeely.com/clippy/), a `clip-path` generator, then copy and paste the code into your own project.

## Shapes from box values <a href="#shapes-from-box-values" class="w-headline-link">#</a>

Also defined in CSS Shapes are shapes from [box values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/From_box_values). These relate to the CSS Box Model -- the content box, padding box, border box, and margin box with keyword values of `content-box`, `border-box`, `padding-box`, and `margin-box`.

These values can be used alone, or alongside a basic shape to define the reference box used by the shape. For example, the following would clip the shape to the edge of the content.

    .box {
      clip-path: content-box;
    }

In this example the circle would use the `content-box` as the reference box rather than the `margin-box` (which is the default).

    .box {
      clip-path: circle(45%) content-box;
    }

Currently browsers do not support the use of box values for the `clip-path` property. They are supported for `shape-outside` however.

## Using an SVG element <a href="#using-an-svg-element" class="w-headline-link">#</a>

For more control over your clipped area than is possible with basic shapes, use an SVG `clipPath` element. Then reference that ID, using `url()` as the value for `clip-path`.

## Animating the clipped area <a href="#animating-the-clipped-area" class="w-headline-link">#</a>

CSS transitions and animations can be applied to the `clip-path` to create some interesting effects. In this next example I am animating a circle on hover by transitioning between two circles with a different radius value.

There are lots of creative ways in which animation can be used with clipping. [Animating with clip-path](https://css-tricks.com/animating-with-clip-path/) on CSS Tricks runs through some ideas.

_Photo by [Matthew Henry](https://burst.shopify.com/@matthew_henry) on Burst._

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Sep 14, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-clipping/index.md)

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
