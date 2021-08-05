<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format" alt="A large letter A from a type set sitting on a white table." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wv5DLtYiAhHm4lNemN1E.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#prevent-layout-shifting-and-flashes-of-invisible-text-(foit)-by-preloading-optional-fonts" class="w-toc__header--link">Prevent layout shifting and flashes of invisible text (FOIT) by preloading optional fonts</a>

- [Browser compatibility](#compatibility)
- [Font rendering](#font-rendering)
- [Optional fonts](#optional-fonts)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Prevent layout shifting and flashes of invisible text (FOIT) by preloading optional fonts

Starting in Chrome 83, link rel="preload" and font-display: optional can be combined to remove layout jank completely

Mar 18, 2020

[<img src="https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Houssein Djirdeh" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/BibySYHD7JweNcHZCCOe.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/houssein/)

<a href="/authors/houssein/" class="w-author__name-link">Houssein Djirdeh</a>

- <a href="https://twitter.com/hdjirdeh" class="w-author__link">Twitter</a>
- <a href="https://github.com/housseindjirdeh" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@housseindjirdeh" class="w-author__link">Glitch</a>
- <a href="https://houssein.me/" class="w-author__link">Blog</a>

In Chrome 83, new font loading improvements have been made to completely eliminate layout shifting and flash of invisible text (FOIT) when optional fonts are preloaded.

By optimizing rendering cycles, Chrome 83 eliminates layout shifting when preloading optional fonts. Combining `<link rel="preload">` with `font-display: optional` is the most effective way to guarantee no layout jank when rendering custom fonts.

## Browser compatibility <a href="#compatibility" class="w-headline-link">#</a>

Check out MDN's data for up-to-date cross-browser support information:

- [`<link rel="preload">`](https://developer.mozilla.org/docs/Web/HTML/Preloading_content#Browser_compatibility)
- [`font-display`](https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display#Browser_compatibility)

## Font rendering <a href="#font-rendering" class="w-headline-link">#</a>

Layout shifting, or re-layout, occurs when a resource on a web page changes dynamically, resulting in a "shift" of content. Fetching and rendering web fonts can directly cause layout shifts in one of two ways:

- A fallback font is swapped with a new font ("flash of unstyled text")
- "Invisible" text is shown until a new font is rendered into the page ("flash of invisible text")

The CSS [`font-display`](https://font-display.glitch.me/) property provides a way to modify rendering behavior of custom fonts through a range of different supported values (`auto`, `block`, `swap`, `fallback`, and `optional`). Choosing which value to use depends on the preferred behavior for asynchronously loaded fonts. However, every one of these supported values can trigger re-layout in one of the two ways listed above, until now!

The [Cumulative Layout Shift](/cls/) metric makes it possible to measure the layout instability on a web page.

## Optional fonts <a href="#optional-fonts" class="w-headline-link">#</a>

The `font-display` property uses a timeline of three periods to handle fonts that need to be downloaded before they can be rendered:

- **Block:** Render "invisible" text, but switch to the web font as soon as it finishes loading.
- **Swap:** Render text using a fallback system font, but switch to the web font as soon as it finishes loading.
- **Fail:** Render text using a fallback system font.

Previously, fonts designated with `font-display: optional` had a 100ms block period and no swap period. This means that "invisible" text is displayed very briefly before switching to a fallback font. If the font is not downloaded within 100ms, then the fallback font is used and no swapping occurs.

<figure><img src="https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format" alt="Previous font-display: optional behavior in Chrome when font is downloaded after the 100ms block period" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WHLORYEu864QRRveFQUz.png?auto=format&amp;w=1600 1600w" width="800" height="340" /><figcaption>Previous <code>font-display: optional</code> behavior in Chrome when font is downloaded <strong>after</strong> the 100ms block period</figcaption></figure>However, in the case that the font is downloaded before the 100ms block period completes, the custom font is rendered and used on the page.

<figure><img src="https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format" alt="Previous font-display: optional behavior in Chrome when font is downloaded before the 100ms block period" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/mordYRjmCCDtlMcNXEOU.png?auto=format&amp;w=1600 1600w" width="800" height="318" /><figcaption>Previous <code>font-display: optional</code> behavior in Chrome when font is downloaded <strong>before</strong> the 100ms block period</figcaption></figure>Chrome re-renders the page **twice** in both instances, regardless of whether the fallback font is used or if the custom font finishes loading in time. This causes a slight flicker of invisible text and, in cases when a new font is rendered, layout jank that moves some of the page's content. This occurs even if the font is stored in the browser's disk cache and can load well before the block period is complete.

[Optimizations](https://bugs.chromium.org/p/chromium/issues/detail?id=1040632) have landed in Chrome 83 to entirely remove the first render cycle for optional fonts that are preloaded with [`<link rel="preload'>`](/codelab-preload-web-fonts/). Instead, rendering is blocked until the custom font has finished loading or a certain period of time has passed. This timeout period is currently set at 100ms, but may possibly change in the near future to optimize performance.

<figure><img src="https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format" alt="New font-display: optional behavior in Chrome when fonts are preloaded and font is downloaded after the 100ms block period (no flash of invisible text)" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zLldiq9J3duBTaeRN88e.png?auto=format&amp;w=1600 1600w" width="800" height="353" /><figcaption>New <code>font-display: optional</code> behavior in Chrome when fonts are preloaded and font is downloaded <strong>after</strong> the 100ms block period (no flash of invisible text)</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format" alt="New font-display: optional behavior in Chrome when fonts are preloaded and font is downloaded before the 100ms block period (no flash of invisible text)" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/OEHClGFMFspaWjb3xXLY.png?auto=format&amp;w=1600 1600w" width="800" height="346" /><figcaption>New <code>font-display: optional</code> behavior in Chrome when fonts are preloaded and font is downloaded <strong>before</strong> the 100ms block period (no flash of invisible text)</figcaption></figure>Preloading optional fonts in Chrome removes the possibility of layout jank and flash of unstyled text. This matches the required behavior as specified in [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#valdef-font-face-font-display-optional) where optional fonts should never cause re-layout and user agents can instead delay rendering for a suitable period of time.

Although it is not necessary to preload an optional font, it greatly improves the chance for it to load before the first render cycle, especially if it is not yet stored in the browser's cache.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The Chrome team is interested to hear your experiences preloading optional fonts with these new optimizations in place! File an [issue](https://bugs.chromium.org/p/chromium/issues/entry) if you experience any problems or would like to drop any feature suggestions.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/fonts/" class="w-chip">Fonts</a>

<span class="w-mr--sm"> Last updated: Mar 18, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/preload-optional-fonts/index.md)

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
