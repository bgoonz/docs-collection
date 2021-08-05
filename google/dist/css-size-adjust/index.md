<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format" alt="Well used letters from a letterpress, set into rows" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fL3dWSY7YBfagFP0ikMW.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#css-lesscodegreatersize-adjustlesscodegreater-for-lesscodegreater@font-facelesscodegreater" class="w-toc__header--link">CSS <code>size-adjust</code> for <code>@font-face</code></a>

- [How to scale fonts with size-adjust](#how-to-scale-fonts-with-size-adjust)
- [Mitigating CLS with seamless font swapping](#mitigating-cls-with-seamless-font-swapping)
- [Calibrating fonts](#calibrating-fonts)
- [Finer tuning with ascent-override, descent-override and line-gap-override](#finer-tuning-with-ascent-override-descent-override-and-line-gap-override)
- [ascent-override](#ascent-override)
- [descent-override](#descent-override)
- [line-gap-override](#line-gap-override)
- [Putting it all together](#putting-it-all-together)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# CSS `size-adjust` for `@font-face`

As a web font loads, you can now adjust its scale, to normalize the document font sizes and prevent layout shift when switching between fonts

Jun 9, 2021 <span class="w-author__separator">•</span> Updated Jun 9, 2021

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

Consider the following [demo](https://codepen.io/argyleink/pen/8ace843980e2fd24bf15c8bd1bd072e4?editors=1100) where the `font-size` is a consistent `64px`, and the only difference between each of these headers is the `font-family`. The examples on the left have not been adjusted and have an inconsistent final size. The examples on the right use `size-adjust` to ensure `64px` is the consistent final size.

In this example Chrome DevTools CSS grid layout debug tools are used to show heights.

This post explores a [new CSS font-face descriptor](https://drafts.csswg.org/css-fonts-5/#size-adjust-desc) called `size-adjust`, available in Chromium 92 and Firefox 89 (behind a flag); (see [caniuse](https://caniuse.com/mdn-css_at-rules_font-face_size-adjust) for latest support). It also demonstrates a few ways to correct and normalize font sizes for smoother user experience, consistent design systems and more predictable page layout. One important use case is optimizing web font rendering to prevent [cumulative layout shift](/cls/) (CLS).

Here's an interactive [demo](https://codepen.io/argyleink/pen/rNyMjxR) of the problem space. Try changing the typeface with the dropdown and observe:

1.  The height differences in the results.
2.  Visually jarring content shifts.
3.  Moving interactive target areas (the dropdown jumps around!).

**Key Term**:  
Font family vs Typeface: A **typeface** is referred to by its family name plus its font face. `Helvetica Bold` is referring to the specific bold typeface while `Helvetica` is generically referring to the entire family of 8+ typefaces (normal, bold, italic, etc). With CSS `@font-face` you'll be dealing with typefaces, even though to use them you need to write `font-family`.

## How to scale fonts with `size-adjust` <a href="#how-to-scale-fonts-with-size-adjust" class="w-headline-link">#</a>

An introduction to the syntax:

    @font-face {
      font-family: "Adjusted Typeface";
      size-adjust: 150%;
      src: url(some/path/to/typeface.woff2) format('woff2');
    }

1.  Creates a custom typeface named `Adjusted Typeface`.
2.  Uses `size-adjust` to scale up each glyph to 150% their default size.
3.  Affects only the single imported typeface.

Use the above custom typeface like this:

    h1 {
      font-family: "Adjusted Typeface";
    }

**Warning**:  
If the second headline in the above demo is not larger than the first one, your browser does not support `size-adjust`.

### Mitigating CLS with seamless font swapping <a href="#mitigating-cls-with-seamless-font-swapping" class="w-headline-link">#</a>

In the following gif, watch the examples on the left and how there's a shift when the font is changed. This is just a small example with a single headline element and the issue is very noticeable.

The example on the left has layout shift, the one on the right does not.

To improve font rendering, a great technique is [font swapping](/font-display/). Render a quick-loading system font to show the content first, then swap that with a web font when the web font finishes loading. This gives you the best of both worlds: the content is visible as soon as possible, and you get a nicely styled page without sacrificing your user's time to content. The problem however, is that sometimes when the web font loads, it shifts the entire page around since it presents at a slightly different box height size.

more content equals more potential layout shift when font swaps

By putting `size-adjust` in the `@font-face` rule, it sets a global glyph adjustment for the font face. Timing this right will lead to minimal visual change, a seamless swap. To create a seamless swap, hand adjust or try this [size-adjust calculator](https://deploy-preview-15--upbeat-shirley-608546.netlify.app/perfect-ish-font-fallback) by [Malte Ubl](https://twitter.com/cramforce).

Choose a [Google Web Font](https://fonts.google.com/), get back a pre-adjusted `@font-face` snippet.

At the beginning of this post, fixing the font size issue was done by trial and error. `size-adjust` was nudged in the source code until the same header in `Cookie` and `Arial` rendered the same `64px` as `Press Start 2P` did naturally. I aligned two fonts to a target font size.

    @font-face {
      font-family: 'Adjusted Arial';
      size-adjust: 86%;
      src: local(Arial);
    }

    @font-face {
      font-family: 'Cookie';
      size-adjust: 90.25%;
      src: url(...woff2) format('woff2');
    }

### Calibrating fonts <a href="#calibrating-fonts" class="w-headline-link">#</a>

You as the author determine the calibration target(s) for normalizing font scale. You might normalize on Times, Arial, or a system font, then adjust custom fonts to match. Or, you might adjust local fonts to match what you download.

Strategies for `size-adjust` calibration:

1.  **Remote target:**  
    Adjust local fonts towards downloaded fonts.
2.  **Local target:**  
    Adjust downloaded fonts towards local target fonts.

#### Example 1: Remote target <a href="#example-1:-remote-target" class="w-headline-link">#</a>

Consider the following snippet which adjusts a locally available font to size match a remote src custom font. A remote custom font is the target for calibration, a brand font perhaps:

    @font-face {
      font-family: "Adjusted Regular Arial For Brand";
      src: local(Arial);
      size-adjust: 90%;
    }

    @font-face {
      font-family: "Rad Brand";
      src: url(some/path/to/a.woff2) format('woff2');
    }

    html {
      font-family: "Rad Brand", "Adjusted Regular Arial For Brand";
    }

In this example, local font Arial is adjusting in anticipation of a loaded custom font, for a seamless swap.

This strategy has an advantage of offering designers and developers the same font for sizing and typography. **The brand is the calibration target.** This is great news for design systems.

Having a brand typeface as the target is also how Malte's calculator works. Choose a Google Font and it will calculate how to adjust Arial to seamlessly swap with it. Here's an example of Roboto CSS from [the calculator](https://deploy-preview-15--upbeat-shirley-608546.netlify.app/perfect-ish-font-fallback), where Arial is loaded and named "Roboto-fallback":

    @font-face {
        font-family: "Roboto-fallback";
        size-adjust: 100.06%;
        src: local("Arial");
    }

**Warning**:  
The order of `font-family` is critical. It's where order and priority go. Ensure the typeface you want the most, is first. Furthermore, `local(Arial)` may not be available on all your user's devices, therefore it's important to provide multiple fallbacks in the font-family.

To create a fully cross platform adjustment, see the following example which provides 2 adjusted local fallback fonts in anticipation of a brand font.

    @font-face {
        font-family: "Roboto-fallback-1";
        size-adjust: 100.06%;
        src: local("Arial");
    }

    @font-face {
        font-family: "Roboto-fallback-2";
        size-adjust: 99.94%;
        src: local("Arimo");
    }

    @font-face {
      font-family: "Roboto Regular";
      src: url(some/path/to/roboto.woff2) format('woff2');
    }

    html {
      font-family: "Roboto Regular", "Roboto-fallback-1", "Roboto-fallback-2";
    }

#### Example 2: Local target <a href="#example-2:-local-target" class="w-headline-link">#</a>

Consider the following snippet which adjusts a brand custom font to match Arial:

    @font-face {
      font-family: "Rad Brand - Adjusted For Arial";
      src: url(some/path/to/a.woff2) format('woff2');
      size-adjust: 110%;
    }

    html {
      font-family: "Rad Brand - Adjusted For Arial", Arial;
    }

This strategy has the advantage of rendering without any adjustments, then adjusting any incoming fonts to match.

## Finer tuning with `ascent-override`, `descent-override` and `line-gap-override` <a href="#finer-tuning-with-ascent-override-descent-override-and-line-gap-override" class="w-headline-link">#</a>

If generic scaling of glyphs isn't enough adjustment for your design or loading strategies, here are some finer tuning options that work along with `size-adjust`. The [`ascent-override`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override), [`descent-override`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/descent-override), and [`line-gap-override`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/line-gap-override) properties are currently implemented in Chromium 87+, and Firefox 89+.

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format" alt="scissors above and blow the word overrides, demonstrating the areas the features can trim to" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/R0VZLOdnHUWpAomfMK3g.png?auto=format&amp;w=1600 1600w" width="800" height="136" />

### `ascent-override` <a href="#ascent-override" class="w-headline-link">#</a>

The `ascent-override` descriptor defines the height above the baseline of a font.

    @font-face {
      font-family: "Ascent Adjusted Arial Bold";
      src: local(Arial Bold);
      ascent-override: 71%;
    }

The red headline (unadjusted) has space above it's capital letter A and O, while the blue headline has been adjusted so it's [cap height](https://en.wikipedia.org/wiki/Cap_height) fits snug against the overall bounding box.

### `descent-override` <a href="#descent-override" class="w-headline-link">#</a>

The `descent-override` descriptor defines the height below the baseline of the font.

    @font-face {
      font-family: "Ascent Adjusted Arial Bold";
      src: local(Arial Bold);
      descent-override: 0%;
    }

The red headline (unadjusted) has space below it's D and O [baselines](<https://en.wikipedia.org/wiki/Baseline_(typography)>), while the blue headline has been adjusted so it's letters rest snug on the baseline.

### `line-gap-override` <a href="#line-gap-override" class="w-headline-link">#</a>

The `line-gap-override` descriptor defines the line-gap metric for the font. This is the font recommended line-gap or external leading.

    @font-face {
      font-family: "Line Gap Adjusted Arial";
      src: local(Arial);
      line-gap-override: 50%;
    }

The red headline (unadjusted) has no `line-gap-override`, essentially it's at `0%`, while the blue headline has been adjusted up by 50%, creating space above and below the letters accordingly.

### Putting it all together <a href="#putting-it-all-together" class="w-headline-link">#</a>

Each of these overrides offer an additional way to trim excess from the web's safe text bounding box. You can tailor the text box for precise presentation.

**Warning**: If any of the above demos aren't showing differences, your browser does not support the overrides.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The `@font-face` `size-adjust` CSS feature is an exciting way to customize the text bounding box of your web layouts to improve the font swapping experience thus avoiding layout shift for your users. To learn more, check out these resources:

- [CSS Fonts Level 5 Spec](https://drafts.csswg.org/css-fonts-5/#size-adjust-desc)
- [Size Adjust on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust)
- [Seamless swap @font-face generator](https://deploy-preview-15--upbeat-shirley-608546.netlify.app/perfect-ish-font-fallback/?font=Montserrat)
- [Cumulative Layout Shift (CLS) on web.dev](https://web.dev/cls/)
- [A New Way To Reduce Font Loading Impact: CSS Font Descriptors](https://www.smashingmagazine.com/2021/05/reduce-font-loading-impact-css-descriptors/)

_Photo by [Kristian Strand](https://unsplash.com/@kristianstrand) on [Unsplash](https://unsplash.com/photos/p8gzCnZf39k)_

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Jun 9, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-size-adjust/index.md)

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
