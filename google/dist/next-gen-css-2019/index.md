<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format" alt="Adam Argyle and Una Kravetz showing that they&#39;ll talk about 12 CSS features." class="w-hero w-hero--contain" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/FRL8ZuF0ng2d37BufMOj.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#next-generation-web-styling" class="w-toc__header--link">Next-generation web styling</a>

- [Contents](#contents)
- [Scroll Snap](#scroll-snap)
- [:focus-within](#:focus-within)
- [Media Queries Level 5](#media-queries-level-5)
- [Logical properties](#logical-properties)
- [position: sticky](#position:-sticky)
- [Sticky Stack](#sticky-stack)
- [Sticky Slide](#sticky-slide)
- [Sticky Desperado](#sticky-desperado)
- [backdrop-filter](#backdrop-filter)
- [:is()](<#:is()>)
- [gap](#gap)
- [CSS Houdini](#css-houdini)
- [Overflow](#overflow)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Next-generation web styling

Get up to date on some of the exciting features in modern CSS.

Dec 5, 2019 <span class="w-author__separator">•</span> Updated Sep 24, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

There are a _ton_ of exciting things happening in CSS right now—and many of them are already supported in today's browsers! Our talk at CDS 2019, which you can watch below, covers several new and upcoming features we thought should get some attention.

This post focuses on the features you can use today, so be sure to watch the talk for a deeper discussion of upcoming features like Houdini. You can also find demos for all the features we discuss on our [CSS@CDS page](https://a.nerdy.dev/css-at-cds).

## Contents <a href="#contents" class="w-headline-link">#</a>

- [Scroll Snap](#scroll-snap)
- [`:focus-within`](#:focus-within)
- [Media Queries Level 5](#media-queries-level-5)
- [Logical properties](#logical-properties)
- [`position: sticky`](#position:-sticky)
- [`backdrop-filter`](#backdrop-filter)
- [`:is()`](#is)
- [`gap`](#gap)
- [CSS Houdini](#css-houdini)
- [Overflow](#overflow)

## Scroll Snap <a href="#scroll-snap" class="w-headline-link">#</a>

[Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts) lets you define snap points as the user scrolls your content vertically, horizontally, or both. It offers built-in scroll inertia and deceleration, and it's touch enabled.

This sample code sets up horizontal scrolling in a `<section>` element with snap points aligned to the left sides of child `<picture>` elements:

    section {
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scroll-snap-type: x mandatory;
    }

    section > picture {
      scroll-snap-align: start;
    }

Here's how it works:

- On the parent `<section>` element,
  - `overflow-x` is set to `auto` to allow horizontal scrolling.
  - `overscroll-behavior-x` is set to `contain` to prevent any parent elements from scrolling when the user reaches the boundaries of the `<section>` element's scroll area. (This isn't strictly necessary for snapping, but it's usually a good idea.)
  - `scroll-snap-type` is set to `x`—for horizontal snapping—and `mandatory`—to ensure that the viewport always snaps to the closest snap point.
- On the child `<picture>` elements, `scroll-snap-align` is set to start, which sets the snap points on the left side of each picture (assuming `direction` is set to `ltr`).

And here's a live demo:

See the Pen [Awww Scroll Snap \[horizontal\]](https://codepen.io/argyleink/pen/zYYZPqb) by Adam Argyle ([@argyleink](https://codepen.io/argyleink)) on [CodePen](https://codepen.io).

You can also take a look at demos for [vertical scroll snap](https://codepen.io/argyleink/pen/oNNZoZj) and [matrix scroll snap](https://codepen.io/argyleink/pen/MWWpOmz).

While scroll snap supports vertical snapping, be cautious when using it at the page level since it can feel like control is being taken from the user in some cases. It's usually best to apply snapping to a component on your page rather than the page itself.

## `:focus-within` <a href="#:focus-within" class="w-headline-link">#</a>

[`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) addresses a long-standing accessibility issue: there are many cases when focusing a child element should affect the presentation of a parent element so that the UI is accessible to users of assistive technologies.

For example, if you have a dropdown menu with several items, the menu should remain visible while any of the items has focus. Otherwise, the menu disappears for keyboard users.

`:focus-within` tells the browser to apply a style when focus is on any child element of a specified element. Returning to the menu example, by setting `:focus-within` on the menu element, you can make sure it stays visible when a menu item has focus:

    .menu:focus-within {
      display: block;
      opacity: 1;
      visibility: visible;
    }

<img src="https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format" alt="An illustration showing the difference in behavior between focus and focus-within." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/NmLEz3wQMUv0QYIuhv2c.png?auto=format&amp;w=1600 1600w" width="800" height="559" />

Try tabbing through the focusable elements in the demo below. You'll notice that the menus remain visible as you focus on the menu items:

See the Pen [Simple CSS Dropdown Menu with Hover and :focus-within and Focus states](https://codepen.io/una/pen/RMmogp) by Una Kravets ([@una](https://codepen.io/una)) on [CodePen](https://codepen.io).

## Media Queries Level 5 <a href="#media-queries-level-5" class="w-headline-link">#</a>

[New media queries](https://drafts.csswg.org/mediaqueries-5/#environment-blending) give us powerful ways to adjust the user experience of our apps based on a user's device preferences. Basically, the browser serves as a proxy for system-level preferences that we can respond to in our CSS using the `prefers-*` group of media queries:

<img src="https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format" alt="A diagram showing media queries interpreting system-level user preferences." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/f5Y9OhN3VMQz8nZMcZar.png?auto=format&amp;w=1600 1600w" width="800" height="400" />

Here are the new queries we think developers will be most excited about:

- [prefers-reduced-motion](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion)
- [prefers-color-scheme](/prefers-color-scheme/)
- [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)
- [prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)
- [forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
- [inverted-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors)

These queries are a huge win for accessibility. Previously we had no way to know, for example, that a user had set their OS to high-contrast mode. If you wanted to provide a high-contrast mode for a web app that remained true to your brand, you had to ask users to choose it from UI within your app. Now you can detect the high-contrast setting from the OS using `prefers-contrast`.

One exciting implication of these media queries is that we can design for multiple combinations of system-level user preferences to accommodate the wide range of user preferences and accessibility needs. If a user wants high-contrast dark mode when in dimly lit environments, you can do that!

It's important to Adam that "prefers reduced motion" doesn't get implemented as "no motion." The user is saying they prefer less motion, not that they don't want any animation. He asserts reduced motion is not no motion. Here's an example that uses a crossfade animation when the user prefers reduced motion:

In Chrome Canary, you can test CSS that uses `prefers-reduced-motion` or `prefers-color-scheme` by choosing the appropriate settings in the DevTools **Rendering** drawer. To access **Rendering**, [open the Command Menu](https://developers.google.com/web/tools/chrome-devtools/command-menu) and run the `Show Rendering` command.

## Logical properties <a href="#logical-properties" class="w-headline-link">#</a>

[Logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) solve a problem that has gained visibility as more developers tackle internationalization. Many layout properties like `margin` and `padding` assume a language that is read top-to-bottom and left-to-right.

<img src="https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format" alt="A diagram showing traditional CSS layout properties." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/mLz4eB2iG7yGUJ92DA0D.png?auto=format&amp;w=1600 1600w" width="800" height="559" />

When designing pages for multiple languages with varying writing modes, developers have had to adjust all those properties individually across multiple elements, which quickly becomes a maintainability nightmare.

Logical properties let you maintain layout integrity across translations and writing modes. They dynamically update based on the semantic ordering of content rather than its spatial arrangement. With logical properties, each element has two dimensions:

- The **block** dimension is **perpendicular** to the flow of text in a line. (In English, `block-size` is the same as `height`.)
- The **inline** dimension is **parallel** to the flow of text in a line. (In English, `inline-size` is the same as `width`.)

These dimension names apply to all logical layout properties. So, for example, in English, `block-start` is the same as `top`, and `inline-end` is the same as `right`.

<img src="https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format" alt="A diagram showing new CSS logical layout properties." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/NcIz3jADhMnRMqRTUPKr.png?auto=format&amp;w=1600 1600w" width="800" height="559" />

With logical properties, you can automatically update your layout for other languages by simply changing the `writing-mode` and `direction` properties for your page rather than updating dozens of layout properties on individual elements.

You can see how logical properties work in the demo below by setting the `writing-mode` property on the `<body>` element to different values:

See the Pen [Logical Properties Demo](https://codepen.io/una/pen/mddxpaY) by Una Kravets ([@una](https://codepen.io/una)) on [CodePen](https://codepen.io).

## `position: sticky` <a href="#position:-sticky" class="w-headline-link">#</a>

An element with [`position: sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning) remains in block flow until it starts to go offscreen, at which point it stops scrolling with the rest of the page and sticks to the position specified by the element's `top` value. The space allocated for that element remains in the flow, and the element returns to it when the user scrolls back up.

Sticky positioning lets you create many useful effects that previously required JavaScript. To show some of the possibilities, we've created several demos. Each demo uses largely the same CSS and only slightly adjusts the HTML markup to create each effect.

### [Sticky Stack](https://codepen.io/argyleink/pen/YzzZyMx) <a href="#sticky-stack" class="w-headline-link">#</a>

In this demo, all sticky elements share the same container. That means that each sticky element slides over the previous one as the user scrolls down. The sticky elements share the same stuck position.

### [Sticky Slide](https://codepen.io/argyleink/pen/abbJOjP) <a href="#sticky-slide" class="w-headline-link">#</a>

Here, the sticky elements are cousins. (That is, their parents are siblings.) When a sticky element hits the lower boundary of its container, it moves up with the container, creating the impression that lower sticky elements are pushing up higher ones. In other words, they appear to compete for the stuck position.

### [Sticky Desperado](https://codepen.io/argyleink/pen/qBBrbyx) <a href="#sticky-desperado" class="w-headline-link">#</a>

Like Sticky Slide, the sticky elements in this demo are cousins. However, they've been placed in containers set to a two-column grid layout.

## `backdrop-filter` <a href="#backdrop-filter" class="w-headline-link">#</a>

The [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) property lets you apply graphical effects to the area _behind_ an element rather than to the element itself. This makes lots of cool effects that were previously only achievable using complicated CSS and JavaScript hacks doable with one line of CSS.

For example, this demo uses `backdrop-filter` to achieve OS-style blurring:

See the Pen [mddjjor](https://codepen.io/una/pen/mddjjor) by Una Kravets ([@una](https://codepen.io/una)) on [CodePen](https://codepen.io).

We already have a [great post about `backdrop-filter`](/backdrop-filter/), so head there for more info.

## `:is()` <a href="#:is()" class="w-headline-link">#</a>

While the [`:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) is actually over ten years old, it still doesn't see as much use as we think it deserves. It takes a comma-separated list of selectors as its argument and matches any selectors in that list. That flexibility makes it incredibly handy and can significantly reduce the amount of CSS you ship.

Here's a quick example:

    button.focus,
    button:focus {
      …
    }

    article > h1,
    article > h2,
    article > h3,
    article > h4,
    article > h5,
    article > h6 {
      …
    }

    /* selects the same elements as the code above */
    button:is(.focus, :focus) {
      …
    }

    article > :is(h1,h2,h3,h4,h5,h6) {
      …
    }

## `gap` <a href="#gap" class="w-headline-link">#</a>

[CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) has had [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) (previously `grid-gap`) for some time. By specifying the internal spacing of a containing element rather than the spacing around child elements, `gap` solves many common layout issues. For example, with gap, you don't have to worry about margins on child elements causing unwanted whitespace around the edges of a containing element:

<img src="https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format" alt="Illustration showing how the gap property avoids unintended spacing around edges of a container element." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Jzlzz2MdQmMGudZxcvZk.png?auto=format&amp;w=1600 1600w" width="800" height="846" />

Even better news: `gap` is coming to flexbox, bringing all the same spacing perks that grid has:

- There's one spacing declaration rather than many.
- There's no need to establish conventions for your project about which child elements should own spacing—the containing element owns the spacing instead.
- The code is more easily understandable than older strategies like the [lobotomized owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/).

The following video shows the benefits of using a single `gap` property for two elements, one with a grid layout and one with a flex layout:

Right now, only FireFox supports `gap` in flex layouts, but play around with this demo to see how it works:

See the Pen [Gappy](https://codepen.io/argyleink/pen/abbVqEv) by Adam Argyle ([@argyleink](https://codepen.io/argyleink)) on [CodePen](https://codepen.io).

## CSS Houdini <a href="#css-houdini" class="w-headline-link">#</a>

[Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini) is a set of low-level APIs for the browser's rendering engine that lets you tell the browser how to interpret custom CSS. In other words, it gives you access to the [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model), letting you _extend_ CSS via JavaScript. This has several benefits:

- It gives you much more power to create custom CSS features.
- It's easier to separate rendering concerns from application logic.
- It's more performant than the CSS polyfilling we currently do with JavaScript since the browser will no longer have to parse scripts and do a second rendering cycle; Houdini code is parsed in the first rendering cycle.

<img src="https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format" alt="Illustration showing how Houdini works compared to traditional JavaScript polyfills." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Lh9zGq0HWW4amjfHbpRQ.png?auto=format&amp;w=1600 1600w" width="800" height="599" />

Houdini is an umbrella name for [several APIs](https://developer.mozilla.org/en-US/docs/Web/Houdini#The_Houdini_APIs). If you want more information about them and their current status, take a look at [Is Houdini Ready Yet?](https://ishoudinireadyyet.com/) In our talk, we covered the Properties and Values API, the Paint API, and the Animation Worklet because they're currently the most supported. We could easily dedicate a full post to each of these exciting APIs, but, for now, check out our talk for an overview and some cool demos that start to give a sense of what you can do with the APIs.

## Overflow <a href="#overflow" class="w-headline-link">#</a>

There are a few more things on the horizon that we wanted to discuss but didn't have time to cover in depth, so we ran through them in a speed round.⚡ If you haven't heard of some of these features yet, be sure to watch [the last part of the talk](https://youtu.be/-oyeaIirVC0?t=1825)!

- `size`: a property that will allow you to set height and width at the same time
- `aspect-ratio`: a property that sets an aspect ratio for elements that don't have one intrinsically
- `min()`, `max()`, and `clamp()`: functions that will let you set numeric constraints on any CSS property, not just width and height
- `list-style-type` an existing property, but it will soon support a wider range of values, including emoji and SVGs
- `display: outer inner`: The `display` property will soon accept two parameters, which will let you explicitly specify its outer and inner layouts rather than using compound keywords like `inline-flex`.
- CSS regions: will let you fill a specified, non-rectangular area that content can flow into and out of
- CSS modules: JavaScript will be able to request a CSS module and get a rich object back that's easy to perform operations on

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/accessibility/" class="w-chip">Accessibility</a> <a href="/tags/houdini/" class="w-chip">Houdini</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Sep 24, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/next-gen-css-2019/index.md)

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
