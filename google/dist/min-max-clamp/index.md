<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format" alt="Set of tools on a desk." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/aVL3BEXD3AF9fFzPGKMf.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#min()-max()-and-clamp():-three-logical-css-functions-to-use-today" class="w-toc__header--link">min(), max(), and clamp(): three logical CSS functions to use today</a>

- [Background](#background)
- [Usage](#usage)
- [The perfect width](#the-perfect-width)
- [Padding management](#padding-management)
- [Fluid typography](#fluid-typography)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# min(), max(), and clamp(): three logical CSS functions to use today

Learn how to control element sizing, maintain proper spacing, and implement fluid typography using these well-supported CSS functions.

Oct 14, 2020

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

With responsive design evolving and becoming increasingly nuanced, CSS itself is constantly evolving and providing authors increased control. The [`min()`](https://developer.mozilla.org/en-US/docs/Web/CSS/min), [`max()`](https://developer.mozilla.org/en-US/docs/Web/CSS/max), and [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) functions, now supported in all modern browsers, are among the latest tools in making authoring websites and apps more dynamic and responsive.

When it comes to flexible and fluid typography, controlled element resizing, and maintaining proper spacing, `min()`, `max()`, and `clamp()` can help.

## Background <a href="#background" class="w-headline-link">#</a>

> The math functions, `calc()`, `min()`, `max()`, and `clamp()` allow mathematical expressions with addition (+), subtraction (-), multiplication (\*), and division (/) to be used as component values
>
> [CSS Values And Units Level 4](https://www.w3.org/TR/css-values-4/#calc-notation)

Safari was the first to [ship](https://bugs.webkit.org/show_bug.cgi?id=167000) the complete set of functions in April 2019, with Chromium following later that year in version 79. This year, with Firefox [75](https://bugzilla.mozilla.org/show_bug.cgi?id=1519519) shipping, we now have browser parity for `min()`, `max()`, and `clamp()` in all evergreen browsers.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format" alt="Caniuse support table." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZIgePP41Quh7ubYh54vo.png?auto=format&amp;w=1600 1600w" width="800" height="246" /><figcaption><a href="https://caniuse.com/css-math-functions">Caniuse</a> support table.</figcaption></figure>Usage <a href="#usage" class="w-headline-link">#</a>

Showing how the min() function selects a value based on a list of options and its parent. [See Demo on Codepen.](https://codepen.io/una/pen/rNeGNVL)

You can use `min()`, `max()`, and `clamp()` on the right hand side of any CSS expression where it would make sense. For `min()` and `max()`, you provide an argument list of values, and the browser determines which one is either the smallest or largest, respectively. For example, in the case of: `min(1rem, 50%, 10vw)`, the browser calculates which of these relative units is the smallest, and uses that value as the actual value.

Showing how the max() function selects a value based on a list of options and its parent. [See Demo on Codepen.](https://codepen.io/una/pen/RwaZXqR)

The `max()` function selects the largest value from a list of comma-separated expressions.

Showing how the clamp() function selects a value based on a list of options and its parent. [See Demo on Codepen.](https://codepen.io/una/pen/bGpoGdJ)

To use `clamp()` enter three values: a minimum value, ideal value (from which to calculate), and maximum value.

Any of these functions can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` is allowed. You can use these on their own (i.e. `font-size: max(0.5vw, 50%, 2rem)`), in conjunction with `calc()` (i.e. `font-size: max(calc(0.5vw - 1em), 2rem)`), or composed (i.e. `font-size: max(min(0.5vw, 1em), 2rem)`).

When using a calculation inside of a `min()`, `max()`, or `clamp()` function, you can remove the call to `calc()`. For example, writing `font-size: max(calc(0.5vw - 1em), 2rem)` would be the same as `font-size: max(0.5vw - 1em, 2rem)`.

To recap:

- `min(<value-list>)`: selects the smallest (most negative) value from a list of comma-separated expressions
- `max(<value-list>)`: selects the largest (most positive) value from a list of comma-separated expressions
- `clamp(<min>, <ideal>, <max>)`: clamps a value between an upper and lower bound, based on a set ideal value

Let's take a look at some examples.

## The perfect width <a href="#the-perfect-width" class="w-headline-link">#</a>

According to [The Elements of Typographic Style](http://webtypography.net/2.1.2#:~:text=%E2%80%9CAnything%20from%2045%20to%2075,is%2040%20to%2050%20characters.%E2%80%9D) by Robert Bringhurst, "anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size."

To ensure that your text blocks are not narrower than 45 characters or wider than 75 characters, use `clamp()` and the `ch` (0-width [character advance](https://developer.mozilla.org/en-US/docs/Web/CSS/length)) unit:

    p {
      width: clamp(45ch, 50%, 75ch);
    }

This allows for the browser to determine the width of the paragraph. It will set the width to 50%, unless 50% is smaller than `45ch`, at which point `45ch` will be selected, and visa versa for if 50% is wider than `75ch`. In this demo, the card itself is getting clamped:

Using the clamp() function to limit a minimum and maximum width. [See Demo on Codepen.](https://codepen.io/una/pen/QWyLxaL)

You could break this up with just the `min()` or `max()` function. If you want the element to always be at `50%` width, and not exceed `75ch` in width (i.e. on larger screens), write: `width: min(75ch, 50%);`. This essentially sets a "max" size by using the `min()` function.

Using the clamp() function to limit a minimum and maximum width.

By the same token, you can ensure a minimum size for legible text using the `max()` function. This would look like: `width: max(45ch, 50%);`. Here, the browser selects whichever is larger, `45ch` or `50%`, meaning the element must be at _least_ `45ch` or larger.

Using the clamp() function to limit a minimum and maximum width.

## Padding management <a href="#padding-management" class="w-headline-link">#</a>

Using the same concept as above, where the `min()` function can set a "max" value and `max()` sets a "min" value, you can use `max()` to set a minimum padding size. This example comes from [CSS Tricks](https://css-tricks.com/using-max-for-an-inner-element-max-width/), where reader Caluã de Lacerda Pataca shared this idea: The idea is to enable an element to have additional padding at larger screen sizes, but maintain a minimum padding at smaller screen sizes, particularly on the inline padding. To achieve this, use `calc()` and subtract the minimum padding from either side: `calc((100vw - var(--contentWidth)) / 2)`, _or_ use max: `max(2rem, 50vw - var(--contentWidth) / 2)`. All together it looks like:

    footer {
      padding: var(--blockPadding) max(2rem, 50vw - var(--contentWidth) / 2);
    }

Setting a minimum padding for a component using the max() function. [See Demo on Codepen.](https://codepen.io/chriscoyier/pen/qBZqNKa)

## Fluid typography <a href="#fluid-typography" class="w-headline-link">#</a>

In order to enable [fluid typography](https://www.smashingmagazine.com/2016/05/fluid-typography/), [Mike Riethmeuller](https://twitter.com/mikeriethmuller) popularized a technique that uses the `calc()` function to set a minimum font size, maximum font size, and allow for scaling from the min to the max.

Creating fluid typography with clamp(). [See Demo on Codepen.](https://codepen.io/una/pen/ExyYXaN)

With `clamp()`, you can write this more clearly. Rather than requiring a complex string, the browser can do the work for you. Set the minimum acceptable font size (for example, `1.5rem` for a title, maximum size (i.e. `3rem`) and ideal size of `5vw`.

Now, we get typography that scales with the viewport width of the page until it reaches the limiting minimum and maximum values, in a much more succinct line of code:

    p {
      font-size: clamp(1.5rem, 5vw, 3rem);
    }

**Warning**: Limiting how large text can get with `max()` or `clamp()` can cause a WCAG failure under [1.4.4 Resize text (AA)](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144#resize-text) , because a user may be unable to scale the text to 200% of its original size. Be certain to [test the results with zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The CSS math functions, `min()`, `max()`, and `clamp()` are very powerful, well supported, and could be just what you're looking for to help you build responsive UIs. For more resources, check out:

- [CSS Values and Units on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Values and Units Level 4 Spec](https://www.w3.org/TR/css-values-4/)
- [CSS Tricks on Article on Inner-Element Width](https://css-tricks.com/using-max-for-an-inner-element-max-width/)
- [min(), max(), clamp() Overview by Ahmad Shadeed](https://ishadeed.com/article/css-min-max-clamp/)

Cover image from [@yer_a_wizard](https://unsplash.com/@yer_a_wizard) on Unsplash.

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/layout/" class="w-chip">Layout</a>

<span class="w-mr--sm"> Last updated: Oct 14, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/min-max-clamp/index.md)

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
