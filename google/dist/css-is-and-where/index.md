<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format" alt="A bright and white library, rows and rows of books, with a single person in the middle reaching for a single book." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/bFO3SPdt1bPIB8EylsB7.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#new-css-functional-pseudo-class-selectors-lesscodegreater:is()lesscodegreater-and-lesscodegreater:where()lesscodegreater" class="w-toc__header--link">New CSS functional pseudo-class selectors <code>:is()</code> and <code>:where()</code></a>

- [Browser compatibility](#browser-compatibility)
- [Meet :is() and :where()](<#meet-:is()-and-:where()>)
- [Selector grouping](#selector-grouping)
- [Using simple and complex selectors with :is()](<#using-simple-and-complex-selectors-with-:is()>)
- [The difference between :is() and :where()](<#the-difference-between-:is()-and-:where()>)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# New CSS functional pseudo-class selectors `:is()` and `:where()`

These seemingly small additions to CSS selector syntax are going to have a big impact.

May 27, 2021 <span class="w-author__separator">•</span> Updated May 27, 2021

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

When writing CSS, you can sometimes end up with long selector lists to target multiple elements with the same style rules. For example, if you want to color adjust any `<b>` tags found inside a heading element, you could write:

    h1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b {
      color: hotpink;
    }

Instead, you could use `:is()` and improve legibility while avoiding a long selector:

    :is(h1,h2,h3,h4,h5,h6) > b {
      color: hotpink;
    }

Legibility and shorter selector conveniences are only a piece of the value that `:is()` and `:where()` bring to CSS. In this post, you'll discover the syntax and value of these two functional pseudo selectors.

An infinite visual of before and after using `:is()`

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

The `:is` and `:where` pseudo-classes are supported in Chromium (&gt;=88), Firefox (&gt;= 78) and Safari (&gt;=14). See MDN's [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/:where#Browser_compatibility) table for more information. Some older browser versions support the `:is()` selector as `:matches()` or `-webkit-any()`. For more information see the [`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) page on MDN.

## Meet `:is()` and `:where()` <a href="#meet-:is()-and-:where()" class="w-headline-link">#</a>

These are functional pseudo-class selectors, notice the `()` at the end and the way they start with `:`. Think of these as runtime dynamic function calls that match elements. When writing CSS, they give you a way to group elements together in the middle, beginning or end of a selector. They also can change specificity, giving you power to nullify or increase specificity.

### Selector grouping <a href="#selector-grouping" class="w-headline-link">#</a>

Anything that `:is()` can do regarding grouping, so can `:where()`. This includes being used anywhere in the selector, nesting, and stacking them. Full CSS flexibility you know and love. Here's a few examples:

    /* at the beginning */
    :where(h1,h2,h3,h4,h5,h6) > b {
      color: hotpink;
    }

    /* in the middle */
    article :is(header,footer) > p {
      color: gray;
    }

    /* at the end */
    .dark-theme :where(button,a) {
      color: rebeccapurple;
    }

    /* multiple */
    :is(.dark-theme, .dim-theme) :where(button,a) {
      color: rebeccapurple;
    }

    /* stacked */
    :is(h1,h2):where(.hero,.subtitle) {
      text-transform: uppercase;
    }

    /* nested */
    .hero:is(h1,h2,:is(.header,.boldest)) {
      font-weight: 900;
    }

Each of the above selector examples demonstrates the flexibility of these two functional pseudo-classes. To find areas of your code that could benefit from `:is()` or `:where()`, look for selectors with multiple commas and selector repetition.

### Using simple and complex selectors with `:is()` <a href="#using-simple-and-complex-selectors-with-:is()" class="w-headline-link">#</a>

For a brush up on selectors, check out the [selectors module on Learn CSS](/learn/css/selectors/#complex-selectors). Here's a few examples of simple and complex selectors to help illustrate the ability:

    article > :is(p,blockquote) {
      color: black;
    }

    :is(.dark-theme.hero > h1) {
      font-weight: bold;
    }

    article:is(.dark-theme:not(main .hero)) {
      font-size: 2rem;
    }

**Gotchas!**

Normally, when using a `,` to create a list of selectors, if any of the selectors are invalid, all of the selectors are invalidated and the list will fail to match elements. That is to say they are not forgiving of errors. `:is()` and `:where()` though [are forgiving](https://developer.mozilla.org/en-US/docs/Web/CSS/:is#forgiving_selector_parsing), and can [get you out of a bind](https://css-tricks.com/almanac/selectors/i/is/#forgiving-selector-lists)!

So far, `:is()` and `:where()` are syntactically interchangeable. It's time to look at how they're different.

### The difference between `:is()` and `:where()` <a href="#the-difference-between-:is()-and-:where()" class="w-headline-link">#</a>

When it comes to specificity, `:is()` and `:where()` strongly diverge. For a brush up on specificity, see the [specificity module on Learn CSS](/learn/css/specificity/).

In short

- `:where()` has no specificity.  
  `:where()` squashes all the specificity in the selector list passed as functional parameters. This is a first of its kind selector feature.
- `:is()` takes the specificity of its most specific selector.  
  `:is(a,div,#id)` has a specificity score of an ID, 100 points.

Taking on the highest specificity selector from the list has only been a gotcha for me when I was getting too excited about grouping. I was always able to improve legibility by moving the high specificity selector to it's own selector where it wouldn't have so much impact. Here's an example of what I mean:

    article > :is(header, #nav) {
      background: white;
    }

    /* better as */
    article > header,
    article > #nav {
      background: white;
    }

With `:where()`, I'm waiting to see libraries offer versions with no specificity. The specificity competition between author styles and library styles could come to an end. There would be no specificity to compete with when writing CSS. CSS has been working on a grouping feature like this for quite some time, it's here, and it's still largely unexplored territory. Have fun making smaller stylesheets and removing commas.

_Photo by [Markus Winkler](https://unsplash.com/@markuswinkler) on [Unsplash](https://unsplash.com/photos/afW1hht0NSs)_

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: May 27, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-is-and-where/index.md)

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
