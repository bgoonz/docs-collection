<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format" alt="An inline flow arrow (right) and a block flow arrow (down)" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/GjMb0QfIM77KF22nEHcX.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#logical-layout-enhancements-with-flow-relative-shorthands" class="w-toc__header--link">Logical layout enhancements with flow-relative shorthands</a>

- [Document flow](#document-flow)
- [New shorthands](#new-shorthands)
- [Margin shorthands](#margin-shorthands)
- [Padding shorthands](#padding-shorthands)
- [Inset and shorthands](#inset-and-shorthands)
- [Border shorthands](#border-shorthands)
- [Logical property &lt;figure&gt; example](#logical-property-lessfiguregreater-example)
- [Polyfilling and cross-browser support](#browser-compatibility)
- [What's next](#what's-next)
- [Feedback](#feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Logical layout enhancements with flow-relative shorthands

New logical property shorthands and new inset properties for Chromium.

Oct 13, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Oriol Brufau" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/loirooriol/)

<a href="/authors/loirooriol/" class="w-author__name-link">Oriol Brufau</a>

- <a href="https://github.com/Loirooriol" class="w-author__link">GitHub</a>

Since Chromium 69 (September 3rd 2018), [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) and values have helped developers maintain control of their international layouts through logical, rather than physical, direction and dimension styles. In Chromium 87, shorthands and offsets have shipped to make these logical properties and values a bit easier to write. This catches Chromium up to Firefox, which has had support for the shorthands [since 66](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/66). Safari has them ready in their [tech preview](https://webkit.org/blog/11300/release-notes-for-safari-technology-preview-114/).

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2y5tF9s3Wcp50kJJMmm.png?auto=format&amp;w=1600 1600w" width="800" height="577" /></figure>Document flow <a href="#document-flow" class="w-headline-link">#</a>

If you're already familiar with logical properties, inline and block axes, and don't want a refresher, you can [skip ahead](#new-shorthands). Otherwise, here's a short refresher.

In English, letters and words flow left to right while paragraphs are stacked top to bottom. In traditional Chinese, letters and words are top to bottom while paragraphs are stacked right to left. In just these 2 cases, if we write CSS that puts "margin top" on a paragraph, we're only appropriately spacing 1 language style. If the page is translated into traditional Chinese from English, the margin may well not make sense in the new vertical writing mode.

Therefore the physical side of the box isn't very useful internationally. Thus begins the process of supporting multiple languages; learning about physical versus logical sides of the box model.

**Key Term**: A _logical property_ is one that references a side, corner or axis of the box model in context of the applicable language direction. It's akin to referencing someone's `strong` arm, rather than assuming it's their `right` arm. "Right" is a physical arm reference, "strong" is a logical arm reference, **contextual to the individual**.

Have you ever inspected the `p` element in Chrome DevTools? If so, you might have noticed that the [default User Agent styles](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=blockquote%2C%20figure%2C%20listing%2C%20p%2C%20plaintext%2C%20pre%2C,%7D) are not physical, but logical.

    p {
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

<span class="small">CSS from [Chromium's User Agent Stylesheet](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)</span>

The margin is not on the top or bottom like an English reader might believe. It's `block-start` and `block-end`! These logical properties are akin to an English reader's top and bottom, but **also** akin to a Japanese reader as right and left. Written once, works everywhere.

Normal flow is when the webpage is part of this multi-directionality intentionally. When page content updates according to document direction changes, the layout and its elements are considered in flow. Read more about "in" and "out" of flow [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) or in the [CSS Display Module spec](https://drafts.csswg.org/css-display-3/#out-of-flow). While logical properties are not required to be in flow, they do much of the heavy lifting for you as directionality changes. Flow implies direction, which letters, words and content need to travel along. This leads us to block and inline logical directions.

Block direction is the direction that new content blocks follow, like asking yourself, "where to put the next paragraph?". You might think of it as a "content block", or "block of text". Every language arranges their blocks and orders them along their respective `block-axis`. `block-start` is the side a paragraph is first placed, while `block-end` is the side new paragraphs flow towards.

**Key Term**: The _block direction_ is defined by the `writing-mode` property. For example, `horizontal-tb` (the initial value) has a vertical block axis that flows top-to-bottom (`tb`). Other values have an horizontal block axis, which can flow left-to-right (like in `vertical-lr`) or right-to-left (like in `vertical-rl`).

In traditional Japanese handwriting, for example, block direction flows right to left:

Inline direction is the direction that letters and words go. Consider the direction your arm and hand travel when you write; they are traveling along the `inline-axis`. `inline-start` is the side where you start writing, while `inline-end` is the side where writing ends or wraps. The above video, the `inline-axis` is top to bottom, but in this next video the `inline-axis` flows right to left.

**Key Term**: The _inline direction_ is defined by both `writing-mode` and `direction`. For example, it flows left-to-right with `horizontal-tb` and `ltr`, right-to-left with `horizontal-tb` and `rtl`, top-to-bottom with `vertical-lr` and `ltr`, and bottom-to-top with `vertical-rl` and `rtl`.

Being [`flow-relative`](https://www.w3.org/TR/css-writing-modes-4/#logical-directions) means that the styles written for one language will be contextual and appropriately applied into other languages. Content will flow relative to the language it's being delivered for.

## New shorthands <a href="#new-shorthands" class="w-headline-link">#</a>

Some of the following shorthands are not new features for the browser, rather, easier ways to write styles by taking advantage of being able to set values on both block or inline edges at once. The `inset-*` logical properties **do** bring new abilities, as there were no longhand ways to specify absolute positions with logical properties before it. Insets and shorthands flow (hehe) together so well though, I'm going to tell you about all of the new logical properties features landing in Chromium 87 at once.

### Margin shorthands <a href="#margin-shorthands" class="w-headline-link">#</a>

No new abilities shipped, but some super handy shorthands did:  
[`margin-block`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block) and [`margin-inline`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline).

**Caution**: If the above items do not have space between them, then `margin-block` shorthand is not supported in your browser.

Longhand

    margin-block-start: 2ch;
    margin-block-end: 2ch;

New shorthand

    margin-block: 2ch;
    /* or */
    margin-block: 2ch 2ch;

There is no shorthand for "top and bottom" or "left and right"… until now! You probably reference all 4 sides using the shorthand of `margin: 10px;`, and now you can easily reference 2 complimentary sides by using the logical property shorthand.

Longhand

    margin-inline-start: 4ch;
    margin-inline-end: 2ch;

New shorthand

    margin-inline: 4ch 2ch;

### Padding shorthands <a href="#padding-shorthands" class="w-headline-link">#</a>

No new abilities shipped, but more super handy shorthands did:  
[`padding-block`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block) and [`padding-inline`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline).

Longhand

    padding-block-start: 2ch;
    padding-block-end: 2ch;

New shorthand

    padding-block: 2ch;
    /* or */
    padding-block: 2ch 2ch;

And the `inline` complimentary set of shorthands:

Longhand

    padding-inline-start: 4ch;
    padding-inline-end: 2ch;

New shorthand

    padding-inline: 4ch 2ch;

### Inset and shorthands <a href="#inset-and-shorthands" class="w-headline-link">#</a>

The physical properties `top`, `right`, `bottom` and `left` can all be written as values for the `inset` property. Any value of `position` can benefit from setting sides with inset.

    .cover {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      inset: 0;
    }

Physical longhand

    position: absolute;
    top: 1px;
    right: 2px;
    bottom: 3px;
    left: 4px;

New physical shorthand

    position: absolute;
    inset: 1px 2px 3px 4px;

That should look immediately convenient! Inset is shorthand for the physical sides, and it works just like margin and padding.

#### New features <a href="#new-features" class="w-headline-link">#</a>

As exciting as the physical sides shorthand is, there's even more from the logical features brought by additional `inset` shorthands. These shorthands bring developer authoring convenience (they're shorter to type) but also increase the potential reach for the layout because they're flow-relative.

Physical longhand

    position: absolute;
    top: 10px;
    bottom: 10px;

Logical shorthand

    position: absolute;
    inset-block: 10px;

Physical longhand

    position: absolute;
    left: 10px;
    right: 20px;

Logical shorthand

    position: absolute;
    inset-inline: 10px 20px;

Further reading and a [full list of inset shorthand and longhand](https://developer.mozilla.org/en-US/docs/Web/CSS/inset) is available on MDN.

### Border shorthands <a href="#border-shorthands" class="w-headline-link">#</a>

Border, plus its nested `color`, `style`, and `width` properties have all got new logical shorthands as well.

Physical longhand

    border-top-color: hotpink;
    border-bottom-color: hotpink;

Logical shorthand

    border-block-color: hotpink;
    /* or */
    border-block-color: hotpink hotpink;

Physical longhand

    border-left-style: dashed;
    border-right-style: dashed;

Logical shorthand

    border-inline-style: dashed;
    /* or */
    border-inline-style: dashed dashed;

Physical longhand

    border-left-width: 1px;
    border-right-width: 1px;

Logical shorthand

    border-inline-width: 1px;
    /* or */
    border-inline-width: 1px 1px;

Further reading and a [full list of border shorthand and longhand](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block) is available on MDN.

## Logical property `<figure>` example <a href="#logical-property-lessfiguregreater-example" class="w-headline-link">#</a>

Let's put it all together in a small example. Logical properties can layout an image with a caption to handle different writing and document directions.

Or try it!

You don't have to do much to make a card internationally responsive with a `<figure>` and a few logical properties. If you're curious how all this internationally considerate CSS works together, I hope this is a small meaningful introduction.

### Polyfilling and cross-browser support <a href="#browser-compatibility" class="w-headline-link">#</a>

The Cascade or build tools are viable options to have old and new browsers alike, properly spaced with updated logical properties. For Cascade fallbacks, follow a physical property with a logical one and the browser will use the "last" property it found during style resolution.

    p {
      /* for unsupporting browsers */
      margin-top: 1ch;
      margin-bottom: 2ch;

      /* for supporting browsers to use */
      /* and unsupporting browsers to ignore and go 🤷‍♂️ */
      margin-block: 1ch 2ch;
    }

That's not quite a full solution for everyone though. Here's a handwritten fallback that leverages the `:lang()` pseudo-selector to target specific languages, adjusts their physical spacing appropriately, then at the end offers the logical spacing for supporting browsers:

    /* physical side styles */
    p {
      margin-top: 1ch;
      margin-bottom: 2ch;
    }

    /* adjusted physical side styles per language */
    :lang(ja) {
      p {
        /* zero out styles not useful for traditional Japanese */
        margin-top: 0;
        margin-bottom: 0;

        /* add appropriate styles for traditional Japanese */
        margin-right: 1ch;
        margin-left: 2ch;
      }
    }

    /* add selectors and adjust for languages all supported */
    :lang(he) {…}
    :lang(mn) {…}

    /* Logical Sides */
    /* Then, for supporting browsers to use */
    /* and unsupporting browsers to ignore #TheCascade */
    p {
      /* remove any potential physical cruft.. */
      margin: 0;
      /* explicitly set logical value */
      margin-block: 1ch 2ch;
    }

You could also use `@supports` to determine whether or not to provide physical property fallbacks:

    p {
      margin-top: 1ch;
      margin-bottom: 2ch;
    }

    @supports (margin-block: 0) {
      p {
        margin-block: 1ch 2ch;
      }
    }

[Sass](https://sass-lang.com), [PostCSS](https://github.com/csstools/postcss-logical), [Emotion](https://emotion.sh) and others have automated bundler and/or build time offerings that have a wide array of fallbacks or solutions. Check out each one to see which matches your toolchain and overall site strategy.

## What's next <a href="#what&#39;s-next" class="w-headline-link">#</a>

More of CSS will offer logical properties, it's not done yet! There's one big missing set of shorthands though, and a resolution is still pending in this [Github issue](https://github.com/w3c/csswg-drafts/issues/1282). There is a temporary solution [in a draft](https://drafts.csswg.org/css-logical/#logical-shorthand-keyword). What if you want to style all logical sides of a box with a shorthand?

Physical shorthand

    margin: 1px 2px 3px 4px;
    margin: 1px 2px;
    margin: 2px;

Logical shorthand

    margin: logical 1px 2px 3px 4px;
    margin: logical 1px 2px;
    margin: logical 2px;

The current draft proposal would mean you have to write `logical` in every shorthand in order to get the logical equivalent applied, which doesn't sound very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) to some.

There are other proposals to change it at the block or page level, but that could leak logical uses into styles still assuming physical sides.

    html {
      flow-mode: physical;
      /* or */
      flow-mode: logical;
      /* now all margin/padding/etc references are logical */
    }

    /* hopefully no 3rd/1st party code is hard coded to top/left/etc ..? */

It's a tough one! Cast your vote, voice your opinion, we want to hear from you.

Want to learn or study logical properties more? Here's a detailed reference, along with guides and examples, [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) 🤓

## Feedback <a href="#feedback" class="w-headline-link">#</a>

- To propose changes to the CSS syntax of flow-relative shorthands, first [check the existing issues](https://github.com/w3c/csswg-drafts/labels/css-logical-1) on the csswg-drafts repository. If none of the existing issues match your proposal, [create a new issue](https://github.com/w3c/csswg-drafts/issues/new?title=%5Bcss-logical-1%5D).
- To report bugs on Chromium's implementation of flow-relative shorthands, first [check the existing issues](https://bugs.chromium.org/p/chromium/issues/list?q=component%3ABlink%3ECSS%20logical&can=2) on Chromium Bug Tracker. If none of the existing issues match your bug, [create a new issue](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ECSS).

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/layout/" class="w-chip">Layout</a>

<span class="w-mr--sm"> Last updated: Oct 13, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/logical-property-shorthands/index.md)

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
