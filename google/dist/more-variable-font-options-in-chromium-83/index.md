<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format" alt="A bright pink and purple gradient with &quot;macOS Catalina system-ui&quot; going from thin to think from left to right, demonstrating some of the new variation settings" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RgpA9x73j3OnnrC8z97g.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#more-variable-font-options-for-the-macos-lesscodegreatersystem-uilesscodegreater-font-in-chromium-83" class="w-toc__header--link">More variable font options for the macOS <code>system-ui</code> font in Chromium 83</a>

- [Browser compatibility](#browser-compatibility)
- [New powers](#new-powers)
- [wght](#wght)
- [opsz](#opsz)
- [GRAD](#grad)
- [YAXS](#yaxs)
- [Combining the options](#combining-the-options)
- [Playground](#playground)
- [Appendix: The system-ui regression](#regression)
- [Background](#background)
- [Not done yet](#not-done-yet)
- [The fix](#the-fix)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# More variable font options for the macOS `system-ui` font in Chromium 83

Catalina brings a new united variable system font to macOS.

May 21, 2020 <span class="w-author__separator">•</span> Updated May 26, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/xb7jK8lMyvbHQrBJzlxv.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Dominik Röttsches" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/xb7jK8lMyvbHQrBJzlxv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/xb7jK8lMyvbHQrBJzlxv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/xb7jK8lMyvbHQrBJzlxv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/xb7jK8lMyvbHQrBJzlxv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/xb7jK8lMyvbHQrBJzlxv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/drott/)

<a href="/authors/drott/" class="w-author__name-link">Dominik Röttsches</a>

- <a href="https://twitter.com/abrax5" class="w-author__link">Twitter</a>
- <a href="https://github.com/drott" class="w-author__link">GitHub</a>

The ['system-ui' section](https://drafts.csswg.org/css-fonts-4/#system-ui-def) of the CSS Fonts Module Level 4 spec defines a `system-ui` font keyword that allows developers to use the built-in, turbo-optimized, localized, mega-high-quality, no-download-needed, default operating system font right in their sites and apps.

    body {
      font-family: system-ui;
    }

This typography choice is akin to saying "use the default system font for the current locale of this user."

On macOS, the `system-ui` font is San Francisco, a font that a design team vetted, tested, and… recently upgraded! First we'll cover the [new exciting variable font features in Catalina](#new-powers), then we'll cover a couple of [bugs and how Chromium engineers resolved them](#regression).

This post assumes that you're already familiar with variable fonts. If not, check out [Introduction to variable fonts on the web](/variable-fonts/) and the video below.

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

At the time of writing, `system-ui` has support from Chromium (since 56), Edge (since 79), Safari (since 11), and from Firefox (since 43) but with the `-apple-system` keyword. See [Can I use variable fonts?](https://caniuse.com/#feat=variable-fonts) for updates.

## New powers <a href="#new-powers" class="w-headline-link">#</a>

The new abilities that Catalina brought to the system font are now available to web developers as of Chromium 83. The `system-ui` font now **has more variable settings**: optical sizing and 2 unique weight adjustments:

Mojave

    h1 {
      font-family: system-ui;
      font-weight: 700;
      font-variation-settings:
        'wght' 750
      ;
    }

Catalina

    h1 {
      font-family: system-ui;
      font-weight: 700;
      font-variation-settings:
        'wght' 750,
        'opsz' 20,
        'GRAD' 400,
        'YAXS' 400
      ;
    }

**Gotchas!**

These variant features are only available for macOS Catalina users.

On Mojave, `system-ui` is a variable font with only `wght` settings. While `system-ui` on Catalina is a variable font with `wght`, `opsz`, `GRAD`, and `YAXS` settings.

Looks like some neat progressive enhancement design opportunities to me! Really dig into the subtleties of the system font if you want.

### `wght` <a href="#wght" class="w-headline-link">#</a>

Accepts a font weight between `0` and `900` and is applied equally to all characters.

    /* 0-900 */
    font-variation-settings: 'wght' 750;

### `opsz` <a href="#opsz" class="w-headline-link">#</a>

Optical sizing is similar to kerning or letter-spacing, but the spacing is done by a human eye instead of math. A value of `19` or below is intended for text and body copy spacing, while `20` or above is for spacing display headers and titles.

    /* 19 or 20 */
    font-variation-settings: 'opsz' 20;

### `GRAD` <a href="#grad" class="w-headline-link">#</a>

Similar to weight, but without touching horizontal spacing. It accepts values between `400` and `1000`.

    /* 400-1000 */
    font-variation-settings: 'GRAD' 500;

### `YAXS` <a href="#yaxs" class="w-headline-link">#</a>

Stretches the glyph vertically. It accepts values between `400` and `1000`.

    /* 400-1000 */
    font-variation-settings: 'YAXS' 500;

### Combining the options <a href="#combining-the-options" class="w-headline-link">#</a>

With a few lines of CSS, we can tweak the font settings into a bold of our choice or try out other interesting combinations:

    font-weight: 700;
    font-weight: bold;
    font-variation-settings: 'wght' 750, 'YAXS' 600, 'GRAD' 500, 'opsz' 20;

And just like that, Chromium users on macOS see your upgraded, custom 750 weight with some fun other tweaks 👍

## Playground <a href="#playground" class="w-headline-link">#</a>

Click **Remix to Edit** in the Glitch below to get an editable copy of the Glitch, and then edit the new `font-variation-settings` options to see how it affects your font. Remember that this Glitch will only work if you're using a macOS Catalina device.

macOS 10.15 added new features to its system font, and in macOS 10.15 a tricky `system-ui` bug was logged in the Chromium bug tracker. I wonder if they are related!?

The image for this article was made with CSS and `system-ui`. Here's the [codepen](https://codepen.io/argyleink/pen/eYpbwWd).

## Appendix: The `system-ui` regression <a href="#regression" class="w-headline-link">#</a>

The rest of this blog post explains how `system-ui` broke in Chromium 80 and how the Chromium engineers fixed it. If this isn't interesting or relevant for you, you can stop reading now.

This story starts with a different bug: [\#1005969](https://crbug.com/1005969). This was reported against macOS 10.15 because the `system-ui` font spacing looked narrow and crammed.

<figure><img src="https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format" alt="Chrome on left (tighter tracking), Safari on right (better optical spacing)" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/f0xi5DBj1M6v72VcKNUx.jpg?auto=format&amp;w=1600 1600w" width="800" height="417" /><figcaption>Chrome on left (tighter tracking), Safari on right (better optical spacing)</figcaption></figure>### Background <a href="#background" class="w-headline-link">#</a>

Did you ever notice on macOS 10.14 how your paragraphs or headers "snapped" to a different looking font when the size went up or down?

On Mojave (macOS 10.14), the `system-ui` font switched between two fonts depending on the target font size. When text was under `20px`, macOS used "San Francisco Text". When text was `20px` or over, macOS used "San Francisco Display". Optical sizing was built statically into two separate fonts.

Catalina (macOS 10.15) shipped a new united variable font for San Francisco. No more managing "Text" and "Display". It also gained the new variation setting [`opsz`](#opsz) described earlier.

    h1 {
      font-variation-settings: 'opsz' 20;
    }

Unfortunately, the default `opsz` value in the new Catalina font is `20`, and Chromium engineers were not prepared to apply `opsz` to the system font. This led to smaller sizes displaying too narrow.

To fix that, Chromium needed to apply `opsz` correctly to the system font. This led to [Issue \#1005969](https://crbug.com/1005969) getting fixed. Victory! Or was it…?

### Not done yet <a href="#not-done-yet" class="w-headline-link">#</a>

This is where it got tricky: Chromium applied `opsz` but something did not look right still. System fonts on Mac have an additional font table called [`trak`](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6trak.html), which tweaks horizontal spacing. While working on the fix, Chromium engineers noticed that on macOS, when retrieving horizontal metrics from a `CTFontRef` object, the `trak` metrics were already getting factored into the metrics results. Chromium's shaping library [`HarfBuzz`](https://github.com/harfbuzz/harfbuzz) needs metrics where the `trak` values are not yet factored in.

<figure><img src="https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format" alt="Left: Bold weights applied to font sizes 19 and below. Right: Font sizes 20 and up lose bold styling" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/rq7Vpi6ZfUzFNKEOVACk.jpg?auto=format&amp;w=1600 1600w" width="800" height="481" /><figcaption>Left: Bold weights applied to font sizes 19 and below. Right: Font sizes 20 and up lose bold styling</figcaption></figure>Internally, [Skia](https://skia.org/) (the graphics library, not the typeface of the same name) uses both the `CGFontRef` class from [`CoreGraphics`](https://developer.apple.com/documentation/coregraphics) and the `CTFontRef` class from [`CoreText`](https://developer.apple.com/documentation/coretext). Due to required internal conversions between those objects (used for keeping backwards compatibility and accessing needed APIs on both classes), Skia would lose weight information in certain circumstances and bold fonts would stop working. This was tracked in [Issue \#1057654](https://crbug.com/1057654).

Skia still needs to support macOS 10.11 because Chromium still supports it. On 10.11 the "San Francisco Text" and "San Francisco Display" fonts weren't even variable fonts. Rather, each was a family of separate fonts for every weight available. At some point their glyph IDs became out of sync with each other. So if Skia did text shaping (converting text into glyphs that can be drawn) with "San Francisco Text", it would be gibberish if drawn with "San Francisco Display", and vice versa. And even if Skia just asked for a different size macOS might switch to the other. It should be possible to always use one of the fonts and just scale it (using a matrix to scale it up instead of asking for a larger size) but `CoreText` has an issue where it will not scale sbix (color emoji) glyphs up (only down). It's a bit more complex than that. `CoreText` actually seems to cap the vertical extent after matrix application, which seems to be related to it not being able to draw emoji at 45 degree angles. In any event, if you want your emoji to be shown big, you need to make a copy of the font to get a big version.

So in order to create copies of `CTFont` objects at different sizes internally while ensuring that the same underlying font data is used, Chromium pulled the `CGFont` off the `CTFont`, then made a new `CTFont` from the `CGFont` (`CGFont` objects are size independent, the magic switching happens at the `CoreText` level). This worked fine until 10.154. In 10.15 this round trip ended up losing too much information, resulting in the weight issue. [Flutter noticed the weight issue](https://github.com/flutter/flutter/issues/49492) and an alternate fix for resizing was made to create the new `CTFont` directly from the original `CTFont` while controlling the optical size directly using an old but undocumented attribute in `CoreText`. This keeps things working on 10.11 and fixes other issues (like explicitly setting the optical size to the default value).

However, this preserves more of the `CoreText` 'magic' in the font. One of these seems to be that it still tweaks the glyph advances in some way other than just the `trak` table (the application of which Chromium was already trying to suppress through yet another undocumented attribute).

`CGFont` doesn't do any of this 'magic' so maybe Chromium could get the `CGFont` off the `CTFont` and just use it to get advances? Unfortunately this wouldn't work because `CoreText` is known to muck with fonts in other ways as well. For example, it makes small emoji slightly bigger than you actually requested (boosting their size a bit). `CGFont` doesn't know about this, so you'd end up with your sbix-based emoji too close to each other since you'd be measuring at one size but `CoreText` would draw them bigger by some amount. Chromium does want the `CTFont` advances, but it wants them without tracking, and preferably without any other mucking about.

Since the fix for the spacing issue required a set of interconnected Blink and Skia fixes, the Chromium engineers could not "just revert" to fix the problem. The Chromium engineers also tried using a different build flag for changing a font-related codepath in Skia, which fixed the bold fonts problem, but regressed the spacing problem.

## The fix <a href="#the-fix" class="w-headline-link">#</a>

In the end, of course Chromium wanted to fix both things. Chromium now resorts to using HarfBuzz built-in font OpenType font metrics functions for retrieving horizontal metrics directly from the binary data in the system font's font tables. Using this, Chromium is sidestepping `CoreText` and Skia when the font has a `trak` table (except when it's the emoji font).

<figure><img src="https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/9KOCF5Gh0tEWETkmDEVo.jpg?auto=format&amp;w=1600 1600w" width="800" height="481" /></figure>In the meantime there's still [Skia Issue \#10123](https://bugs.chromium.org/p/skia/issues/detail?id=10123) to track fixing this fully in Skia, and to go back to using Skia to retrieve the system font metrics from there, instead of the current fix that goes through `HarfBuzz`.

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/fonts/" class="w-chip">Fonts</a>

<span class="w-mr--sm"> Last updated: May 26, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/more-variable-font-options-in-chromium-83/index.md)

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
