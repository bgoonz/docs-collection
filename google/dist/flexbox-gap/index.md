<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format" alt="A brick wall with gaps." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/arR9d29YxN1N5Rak6OH6.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#chromium-lands-flexbox-lesscodegreatergaplesscodegreater" class="w-toc__header--link">Chromium lands Flexbox <code>gap</code></a>

- [Browser compatibility](#browser-compatibility)
- [CSS Gap](#css-gap)
- [Usage](#usage)
- [Flexbox gap](#flexbox-gap)
- [Previous Attempts](#previous-attempts)
- [The Antidote: gap](#the-antidote:-gap)
- [Chromium DevTools updates](#chromium-devtools-updates)
- [New layout potential](#new-layout-potential)
- [Multi-column gap](#multi-column-gap)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

# Chromium lands Flexbox `gap`

The CSS `gap` property is here for Chromium's CSS Flexbox and Multi-Column layout engines.

May 7, 2020 <span class="w-author__separator">•</span> Updated Jun 19, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/qPVct6hKRbw1YO0qVMcc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="David Grogan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/qPVct6hKRbw1YO0qVMcc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/qPVct6hKRbw1YO0qVMcc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/qPVct6hKRbw1YO0qVMcc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/qPVct6hKRbw1YO0qVMcc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/qPVct6hKRbw1YO0qVMcc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/dgrogan/)

<a href="/authors/dgrogan/" class="w-author__name-link">David Grogan</a>

- <a href="https://github.com/davidsgrogan" class="w-author__link">GitHub</a>

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

At the time of writing `gap` is supported in desktop Firefox 63, Firefox for Android 63, and Chromium 84 (desktop and Android). See [Browser compatibility](https://developer.mozilla.org/docs/Web/CSS/gap#Browser_compatibility) for updates.

## CSS Gap <a href="#css-gap" class="w-headline-link">#</a>

**Key Term**: `gap` is the spacing _between children_. You may have heard of this type of spacing being called "gutters" or "alleys". It's space only where the children box edges touch.

`gap` is [flow relative](https://www.w3.org/TR/css-logical-1/#intro), meaning it changes dynamically based on the direction of content flow. For example, `gap` will automatically adjust for the different `writing-mode` or `direction` values that you set for your international users. This significantly eases the burden of spacing challenges for the component and CSS author. **Less code scaling further.**

Gap demonstrating localization support, as it handles changes to direction and writing-mode: [Codepen](https://codepen.io/argyleink/pen/MWaoZJM) | [Tweet](https://twitter.com/argyleink/status/1254794309263491072?s=20)

### Usage <a href="#usage" class="w-headline-link">#</a>

`gap` accepts any CSS [length](https://drafts.csswg.org/css-values-4/#lengths) or [percentage](https://www.w3.org/TR/css-values-3/#percentages) as a value.

    .gap-example {
      display: grid;
      gap: 10px;
      gap: 2ch;
      gap: 5%;
      gap: 1em;
      gap: 3vmax;
    }

Gap can be passed 1 length, which will be used for both row and column.

Shorthand

    .grid {
      display: grid;
      gap: 10px;
    }

Set both rows and columns **together** at once

Expanded

    .grid {
      display: grid;
      row-gap: 10px;
      column-gap: 10px;
    }

Gap can be passed 2 lengths, which will be used for row and column.

Shorthand

    .grid {
      display: grid;
      gap: 10px 5%;
    }

Set both rows and columns **separately** at once

Expanded

    .grid {
      display: grid;
      row-gap: 10px;
      column-gap: 5%;
    }

## Flexbox `gap` <a href="#flexbox-gap" class="w-headline-link">#</a>

Before `gap` was in Flexbox, strategies involved negative margins, complex selectors, `:last` or `:first` type pseudo-class selectors, or other means to manage the space of a dynamically layed-out and wrapping set of children.

### Previous Attempts <a href="#previous-attempts" class="w-headline-link">#</a>

The following are patterns that folks have used to get gap-like spacing.

pseudo-class selectors

    .layout > :not(:last-child) {
      margin-bottom: 10px;
      margin-right: 10px;
    }

lobotomized owl

    .layout > * + * {
      margin-bottom: 10px;
      margin-right: 10px;
    }

[Source](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/)

The above are not a full replacement for `gap` though, and often need `@media` or `:lang()` adjustments to account for wrapping scenarios, writing modes or direction. Adding one or two media queries doesn't seem so bad, but they can add up and lead to complicated layout logic.

What the above author really intended was to have none of the child items touch.

### The Antidote: gap <a href="#the-antidote:-gap" class="w-headline-link">#</a>

    .layout {
      display: flex;
      gap: 10px;
    }

The ownership of the spacing shifts from the child to the parent

In the first 2 examples (without Flexbox `gap`), the children are targeted and assigned spacing from other elements. In the antidote gap example, the container owns the spacing. Each child can relieve itself of the burden, while also centralizing the spacing ownership. Simplifying consistency. Reorder, change viewports, remove elements, append new elements, etc. and spacing remains consistent. No new selectors, no new media queries, just space.

## Chromium DevTools updates <a href="#chromium-devtools-updates" class="w-headline-link">#</a>

With these updates come changes to Chromium DevTools, notice how the **Styles** pane handles `grid-gap` and `gap` now 👍

<figure><img src="https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format" alt="Devtools shows the both grid-gap and gap, with gap shown used below grid-gap as to let the cascade use the latest syntax." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/7ZxgySczxUR1qxuD8cbC.png?auto=format&amp;w=800 800w" width="400" height="273" /><figcaption>Devtools shows the both <code>grid-gap and gap</code>, with <code>gap</code> shown used below <code>grid-gap</code> as to let the cascade use the latest syntax.</figcaption></figure>DevTools supports both `grid-gap` and `gap`, this is because `gap` is essentially an alias to the previous syntaxes.

## New layout potential <a href="#new-layout-potential" class="w-headline-link">#</a>

With Flexbox `gap`, we unlock more than convenience. We unlock powerful, perfectly spaced, intrinsic layouts. In the video and following code sample below, Grid cannot achieve the layout that Flexbox can. Grid must have equal rows and columns, even if they're intrinsically assigned.

[Tweet](https://twitter.com/argyleink/status/1255201934241198081?s=20)

Also, notice how dynamic the spacing between children is when they wrap intrinsically like that. Media queries can't detect wrapping like that to make intelligent adjustments. Flexbox `gap` can, and will, do it for you across all internationalizations.

## Multi-column `gap` <a href="#multi-column-gap" class="w-headline-link">#</a>

In addition to Flexbox supporting the `gap` syntax, multi-column layouts also support the shorter `gap` syntax.

    article {
      column-width: 40ch;
      column-gap: 5ch;
      gap: 5ch;
    }

Pretty rad.

<span class="w-mr--sm"> Last updated: Jun 19, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/flexbox-gap/index.md)

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
