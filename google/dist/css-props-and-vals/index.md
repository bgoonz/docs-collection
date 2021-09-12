<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format" alt="A black screen shows development work.." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/H6F7W8nUez3vaOv8hD8i.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#smarter-custom-properties-with-houdini&#39;s-new-api" class="w-toc__header--link">Smarter custom properties with Houdini’s new API</a>

- [What Is Houdini?](#what-is-houdini)
- [CSS Properties and Values API Level 1](#css-properties-and-values-api-level-1)
- [Anatomy of a registered property](#anatomy-of-a-registered-property)
- [Gotchas](#gotchas)
- [Animating custom properties](#animating-custom-properties)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Smarter custom properties with Houdini’s new API

Transitions and data protection in CSS

Sep 19, 2019

[<img src="https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Richard" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samrichard/)

<a href="/authors/samrichard/" class="w-author__name-link">Sam Richard</a>

- <a href="https://twitter.com/snugug" class="w-author__link">Twitter</a>
- <a href="https://github.com/snugug" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@snugug" class="w-author__link">Glitch</a>
- <a href="https://snugug.com" class="w-author__link">Blog</a>

CSS custom properties, also known as [CSS variables](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care), let you define your own properties in CSS and use their values throughout your CSS. While incredibly useful today, they have shortcomings that can make them hard to work with: they can take any value so they may be accidentally overridden with something unexpected, they always inherit their values from their parent, and you can't transition them. With Houdini's [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api/), now available in Chrome 78, these shortcomings are transcended, making CSS custom properties incredibly powerful!

## What Is Houdini? <a href="#what-is-houdini" class="w-headline-link">#</a>

Before talking about the new API, let's talk about Houdini quickly. The CSS-TAG Houdini Task Force, better known as CSS Houdini or simply Houdini, exists to "develop features that explain the 'magic' of styling and layout on the web". The collection of [Houdini specifications](https://drafts.css-houdini.org/) are designed to open up the power of the browser's rendering engine, allowing both deeper insight into our styles and the ability to extend our rendering engine. With this, typed CSS values in JavaScript and polyfilling or inventing new CSS without a performance hit are finally possible. Houdini has the potential to superpower creativity on the web.

## CSS Properties and Values API Level 1 <a href="#css-properties-and-values-api-level-1" class="w-headline-link">#</a>

The [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api/) (Houdini Props and Vals) allows us to give structure to our custom properties. This is the current situation when using custom properties:

    .thing {
      --my-color: green;
    }

Because custom properties don't have types, they can be overridden in unexpected ways. For example, consider what happens if you define `--my-color` with a URL.

    .thing {
      --my-color: url('not-a-color');
      color: var(--my-color);
    }

Here, because `--my-color` isn't typed, it doesn't know that a URL isn't a valid color value! When we use it, it falls back to default values (black for `color`, transparent for `background`). With Houdini Props and Vals, custom properties can be _registered_ so that the browser knows what it _should_ be!

Now, the custom property `--my-color` is registered as a color! This tells the browser what kinds of values are allowed and how it can type and treat that property!

### Anatomy of a registered property <a href="#anatomy-of-a-registered-property" class="w-headline-link">#</a>

Registering a property looks like this:

    window.CSS.registerProperty({
      name: '--my-color',
      syntax: '<color>',
      inherits: false,
      initialValue: 'black',
    });

It supports the following options:

#### `name: string` <a href="#name:-string" class="w-headline-link">#</a>

The name of the custom property.

#### `syntax: string` <a href="#syntax:-string" class="w-headline-link">#</a>

How to parse the custom property. You can find a complete list of possible values in the [CSS Values and Units](https://drafts.csswg.org/css-values-3/) specification. Defaults to `*`.

#### `inherits: boolean` <a href="#inherits:-boolean" class="w-headline-link">#</a>

Whether it inherits its parent's value. Defaults to `true`.

#### `initialValue: string` <a href="#initialvalue:-string" class="w-headline-link">#</a>

Initial value of the custom property.

Taking a closer look at `syntax`. There are a number of [valid options](https://drafts.css-houdini.org/css-properties-values-api/#supported-names) ranging from numbers to colors to [`<custom-ident>`](https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident) types. These syntaxes can also be modified by using the following values

- Appending `+` signifies that it accepts a space-separated list of values of that syntax. For example, `<length>+` would be a space-separated list of lengths
- Appending`#` signifies that it accepts a comma-separated list of values of that syntax. For example, `<color>#` would be a comma-separated list of colors
- Adding `|` between syntaxes or identifiers signifies that any of the provided options are valid. For example, `<color># | <url> | magic` would allow either a comma-separated list of colors, a URL, or the word `magic`.

### Gotchas <a href="#gotchas" class="w-headline-link">#</a>

There are two gotchas with Houdini Props and Vals. The first is that, once defined, there's no way to update an existing registered property, and trying to re-register a property will throw an error indicating that it's already been defined.

Second, unlike standard properties, registered properties aren't validated when they're parsed. Rather they're validated when they're computed. That means both that invalid values won't appear as invalid when inspecting the element's properties, and including an invalid property after a valid one won't fall back to the valid one; an invalid property will, however, fall back to the registered property's default.

## Animating custom properties <a href="#animating-custom-properties" class="w-headline-link">#</a>

A registered custom property provides a fun bonus beyond type checking: the ability to animate it! A basic animation example looks like this:

    <script>
    CSS.registerProperty({
      name: '--stop-color',
      syntax: '<color>',
      inherits: false,
      initialValue: 'blue',
    });
    </script>

    <style>
    button {
      --stop-color: red;
      transition: --stop-color: 1s;
    }

    button:hover {
      --stop-color: green;
    }
    </style>

When you hover over the button, it'll animate from red to green! Without registering the property, it'll jump from one color to the other Because, without being registered, the browser doesn't know what to expect between one value and the next and therefore can't guarantee the ability to transition them. This example can be taken a step further, though, to animate CSS gradients! The following CSS can be written with the same registered property:

    button {
      --stop-color: red;
      background: linear-gradient(var(--stop-color), black);
      transition: --stop-color 1s;
    }

    button:hover {
      --stop-color: green;
    }

This will animate our custom property that's part of the `linear-gradient`, thus animating our linear gradient. Check out the Glitch below to see the full code in action and play around with it yourself.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Houdini [is on its way](http://ishoudinireadyyet.com/) to browsers, and with it, entirely new ways of working with and extending CSS. With the [Paint API](https://developers.google.com/web/updates/2018/01/paintapi) already shipped and now Custom Props and Vals, our creative toolbox is expanding, allowing us to define typed CSS properties and use them to create and animate new and exciting designs. There's more on the way, too, in the [Houdini issue queue](https://github.com/w3c/css-houdini-drafts/issues) where you can give feedback and see what's next for Houdini. Houdini exists to develop features that explain the "magic" of styling and layout on the web, so get out there and put those magical features to good use.

_Photo by [Maik Jonietz](https://unsplash.com/@der_maik_?utm*source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

<a href="/tags/houdini/" class="w-chip">Houdini</a> <a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Sep 19, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-props-and-vals/index.md)

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
