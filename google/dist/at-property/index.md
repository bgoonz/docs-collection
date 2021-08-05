<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format" alt="A sparkler." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Iajld9FPY089XWDAZVQ4.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#@property:-giving-superpowers-to-css-variables" class="w-toc__header--link">@property: giving superpowers to CSS variables</a>

- [Writing Houdini custom properties](#writing-houdini-custom-properties)
- [Fallback values](#fallback-values)
- [Syntax](#syntax)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# @property: giving superpowers to CSS variables

The Houdini Properties and Values API is coming to your CSS file in Chromium 85.

Jul 21, 2020

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

[CSS Houdini](https://ishoudinireadyyet.com) is an umbrella term that covers a set of low-level APIs that expose parts of the CSS rendering engine, and give developers access to the CSS Object Model. This is a huge change for the CSS ecosystem, as it enables developers to tell the browser how to read and parse custom CSS without waiting for browser vendors to provide built-in support for these features. So exciting!

One of the most exciting additions to CSS within the Houdini umbrella is the [Properties and Values API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API). This API supercharges your CSS custom properties (also commonly referred to as CSS variables) by giving them semantic meaning (defined by a syntax) and even fallback values, enabling CSS testing.

## Writing Houdini custom properties <a href="#writing-houdini-custom-properties" class="w-headline-link">#</a>

Here's an example of setting a custom property (think: CSS variable), but now with a syntax (type), initial value (fallback), and inheritance boolean (does it inherit the value from it's parent or not?). The current way to do this is through `CSS.registerProperty()` in JavaScript, but in Chromium 85 and later, the `@property` syntax will be supported in your CSS files:

Separate JavaScript file (Chromium 78)

    CSS.registerProperty({
      name: '--colorPrimary',
      syntax: '<color>',
      initialValue: 'magenta',
      inherits: false
    });

Included in CSS file (Chromium 85)

    @property --colorPrimary {
      syntax: '<color>';
      initial-value: magenta;
      inherits: false;
    }

Now you can access `--colorPrimary` like any other CSS custom property, via `var(--colorPrimary)`. However, the difference here is that `--colorPrimary` isn't just read as a string. It has data!

**Gotchas!**

When writing a registered custom property with a specified `syntax`, you _must_ also include an `initial-value`.

## Fallback values <a href="#fallback-values" class="w-headline-link">#</a>

As with any other custom property, you can get (using var) or set (write/rewrite) values, but with Houdini custom properties, if you set a falsey value when overriding it, the CSS rendering engine will send the initial value (its fallback value) instead of ignoring the line.

Consider the example below. The `--colorPrimary` variable has an `initial-value` of `magenta`. But the developer has given it the invalid value "23". Without `@property`, the CSS parser would ignore the invalid code. Now, the parser falls back to `magenta`. This allows for true fallbacks and testing within CSS. Neat!

    .card {
      background-color: var(--colorPrimary); /* magenta */
    }

    .highlight-card {
      --colorPrimary: yellow;
      background-color: var(--colorPrimary); /* yellow */
    }

    .another-card {
      --colorPrimary: 23;
      background-color: var(--colorPrimary); /* magenta */
    }

## Syntax <a href="#syntax" class="w-headline-link">#</a>

With the syntax feature, you can now write semantic CSS by specifying a type. The current types that are allowed include:

- `length`
- `number`
- `percentage`
- `length-percentage`
- `color`
- `image`
- `url`
- `integer`
- `angle`
- `time`
- `resolution`
- `transform-list`
- `transform-function`
- `custom-ident` (a custom identifier string)

Setting a syntax enables the browser to type-check custom properties. This has many benefits.

To illustrate this point, I'll show you how to animate a gradient. Currently, there is no way to smoothly animate (or interpolate) between gradient values, as each gradient declaration is parsed as a string.

<figure><img src="https://storage.googleapis.com/web-dev-assets/at-property/support1.gif" alt="Using a custom property with a &quot;number&quot; syntax, the gradient on the left shows a smooth transition between stop values. The gradient on the right uses a default custom property (no syntax defined) and shows an abrupt transition." class="w-screenshot" /><figcaption>Using a custom property with a "number" syntax, the gradient on the left shows a smooth transition between stop values. The gradient on the right uses a default custom property (no syntax defined) and shows an abrupt transition.</figcaption></figure>In this example, the gradient stop percentage is being animated from a starting value of 40% to an ending value of 100% via a hover interaction. You should see a smooth transition of that top gradient color downward.

The browser on the left supports the Houdini Properties and Values API, enabling a smooth gradient stop transition. The browser on the right does not. The non-supporting browser is only able to understand this change as a string going from point A to point B. There is no opportunity to interpolate the values, and thus you don't see that smooth transition.

However, if you declare syntax type when writing custom properties, and then use those custom properties to enable the animation, you'll see the transition. You can instantiate the custom property `--gradPoint` like so:

    /* Check for Houdini support & register property */
    @supports (background: paint(something)) {
      @property --gradPoint {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 40%;
      }
    }

And then when it comes time to animate it, you can update the value from the initial `40%` to `100%`:

    @supports (background: paint(something)) {
      .post:hover,
      .post:focus {
        --gradPoint: 100%;
      }
    }

This will now enable that smooth gradient transition.

## <figure><img src="https://storage.googleapis.com/web-dev-assets/at-property/demo.gif" alt="Smoothly transitioning gradient borders. See Demo on Glitch" class="w-screenshot" /><figcaption>Smoothly transitioning gradient borders. <a href="https://glitch.com/~houdini-gradient-borders">See Demo on Glitch</a></figcaption></figure>Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The `@property` rule makes an exciting technology even more accessible by allowing you to write semantically meaningful CSS within CSS itself. To learn more about CSS Houdini and the Properties and Values API, check out these resources:

- [Is Houdini Ready Yet?](http://ishoudinireadyyet.com/)
- [MDN Houdini Reference](https://developer.mozilla.org/en-US/docs/Web/Houdini)
- [Smarter custom properties with Houdini's new API](/css-props-and-vals/)
- [Houdini CSSWG Issue Queue](https://github.com/w3c/css-houdini-drafts/issues)

Photo by [Cristian Escobar](https://unsplash.com/@cristian1) on Unsplash.

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/houdini/" class="w-chip">Houdini</a>

<span class="w-mr--sm"> Last updated: Jul 21, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/at-property/index.md)

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
