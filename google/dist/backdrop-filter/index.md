<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format" alt="A view through a rain-covered foggy window." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#create-os-style-backgrounds-with-backdrop-filter" class="w-toc__header--link">Create OS-style backgrounds with backdrop-filter</a>

- [Basics](#basics)
- [Feature detection and fallback](#feature-detection-and-fallback)
- [Examples](#examples)
- [Single filter](#single-filter)
- [Multiple filters](#multiple-filters)
- [Overlays](#overlays)
- [Text contrast on dynamic backgrounds](#text-contrast-on-dynamic-backgrounds)
- [Conclusion](#conclusion)
- [Additional resources](#additional-resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Create OS-style backgrounds with backdrop-filter

Blurring and color shifting behind an element.

Jul 26, 2019 <span class="w-author__separator">•</span> Updated Aug 29, 2019

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Translucence, blurring, and other effects are useful ways of creating depth while keeping the context of the background content. They support a host of use cases such as frosted glass, video overlays, translucent navigation headers, inappropriate image censoring, image loading, and so on. You may recognize these effects from two popular operating systems: [Windows 10](https://i.kinja-img.com/gawker-media/image/upload/s--9RLXARU4--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/trgz8yivyyqrpcnwscu5.png) and [iOS](https://static.businessinsider.com/image/51fd2822eab8eae16e00000b-750.jpg).

<figure><img src="https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format" alt="An example of a frosted glass effect. Source." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/mEc6bdwB2ZX6VSXvyJEn.jpg?auto=format&amp;w=800 800w" width="400" height="300" /><figcaption>An example of a frosted glass effect. <a href="https://dribbble.com/shots/733714-Weather-App?list=tags&amp;tag=android">Source</a>.</figcaption></figure>Historically, these techniques were difficult to implement on the web, requiring less than perfect [hacks or workarounds](https://stackoverflow.com/questions/38145368/css-workaround-to-backdrop-filter). In recent years both [Safari](https://webkit.org/blog/3632/introducing-backdrop-filters/) and Edge have provided these capabilities through the `background-filter` (and alternatively, the `-webkit-backdrop-filter`) property, which dynamically blends foreground and background colors based on filter functions. Now Chrome supports `background-filter`, starting in version 76.

A demonstration of the filter functions for `backdrop-filter`. Try the example on [CodePen](https://codepen.io/robinrendle/pen/LmzLEL).

## Basics <a href="#basics" class="w-headline-link">#</a>

- The `backdrop-filter` property applies one or more filters to an element, changing the appearance of anything behind the element.
- The overlaying element must be at least partially transparent.
- The overlaying element will get a new stacking context.

**Caution**: `backdrop-filter` may harm performance. Test it before deploying.

CSS `backdrop-filter` applies one or more effects to an element that is translucent or transparent. To understand that, consider the images below.

<figure><img src="https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format" sizes="(min-width: 480px) 480px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/LOqxvB3qqVkbZBmxMmKS.png?auto=format&amp;w=960 960w" width="480" height="283" /></figure><figure><img src="https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format" sizes="(min-width: 480px) 480px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/VbyjpS6Td39E4FudeiVg.png?auto=format&amp;w=960 960w" width="480" height="283" /></figure>

The image on the left shows how overlapping elements would be rendered if `backdrop-filter` were not used or supported. The image on the right applies a blurring effect using `backdrop-filter`. Notice that it uses `opacity` in addition to `backdrop-filter`. Without `opacity`, there would be nothing to apply blurring to. It almost goes without saying that if `opacity` is set to `1` (fully opaque) there will be no effect on the background.

The `backdrop-filter` property is like CSS [filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) in that all your favorite [filter functions](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Filter_functions) are supported: `blur()`, `brightness()`, `contrast()`, `opacity()`, `drop-shadow()`, and so on. It also supports the `url()` function if you want to use an external image as the filter, as well as the keywords `none`, `inherit`, `initial`, and `unset`. There are explanations for all of this on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter), including descriptions of syntax, filters, and values.

When `backdrop-filter` is set to anything other than `none`, the browser creates a new [stacking context](https://www.w3.org/TR/CSS21/zindex.html). A [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) may also be created, but only if the element has absolute and fixed position descendants.

You can combine filters for rich and clever effects, or use just one filter for more subtle or precise effects. You can even combine them with [SVG filters](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter).

## Feature detection and fallback <a href="#feature-detection-and-fallback" class="w-headline-link">#</a>

As with many features of the modern web, you'll want to know whether the user's browser supports `backdrop-filter` before using it. Do this with `@supports()`. For performance reasons, fall back to an image instead of a polyfill when `backdrop-image` isn't supported. The example below shows this.

    @supports (backdrop-filter: none) {
       .background {
            backdrop-filter: blur(10px);
        }
    }

    @supports not (backdrop-filter: none) {
      .background {
        background-image: blurred-hero.png;
      }
    }

## Examples <a href="#examples" class="w-headline-link">#</a>

Design techniques and styles previously reserved for operating systems are now performant and achievable with a single CSS declaration. Let's look at some examples.

### Single filter <a href="#single-filter" class="w-headline-link">#</a>

In the following example, the frosted effect is achieved by combining color and blur. The blur is supplied by `backdrop-filter`, while the color comes from the element's semi-transparent background color.

    .blur-behind-me {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(.5rem);
    }

Try this example for yourself in [CodePen](https://codepen.io/netsi1964/pen/JqBLPK).

### Multiple filters <a href="#multiple-filters" class="w-headline-link">#</a>

Sometimes you'll need multiple filters to achieve the desired effect. To do this, provide a list of filters separated by a space. For example:

    .brighten-saturate-and-blur-behind-me {
      backdrop-filter: brightness(150%) saturate(150%) blur(1rem);
    }

In the following example, each of the four panes has a different combination of backdrop filters while the same set of shapes are animated behind them.

Try this example for yourself in [CodePen](https://codepen.io/pepf/pen/GqZkdj).

### Overlays <a href="#overlays" class="w-headline-link">#</a>

This example shows how to blur a semi-transparent background to make text readable while stylistically blending with a page's background.

    .modal {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.5);
    }

Try this [example](https://mfreed7.github.io/backdrop-filter-feature/examples/scrollable.html) for yourself.

### Text contrast on dynamic backgrounds <a href="#text-contrast-on-dynamic-backgrounds" class="w-headline-link">#</a>

As stated earlier, `backdrop-filter` allows performant effects that would be difficult or impossible on the web. An example of this is changing a background in response to an animation. In this example, `backdrop-filter` maintains the high contrast between the text and its background in spite of what's going on behind the text. It starts with the default background color `darkslategray` and uses `backdrop-filter` to invert the colors after the transformation.

    .container::before {
      z-index: 1;
      background-color: darkslategray;
      filter: invert(1);
    }

    .container::after {
        backdrop-filter: invert(1);
      z-index: 3;
    }

Try this example from [Chen Hui Jing](https://www.chenhuijing.com/#%F0%9F%91%9F) in [Codrops](https://tympanus.net/codrops-playground/huijing/Qqpwg5Iy/editor).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

More than 560 of you have upvoted the [Chromium bug](https://crbug.com/497522) over the past few years, clearly marking this as a long awaited CSS feature. Chrome's release of `backdrop-filter` in version 76 brings the web a step closer to truly OS-like UI presentation.

### Additional resources <a href="#additional-resources" class="w-headline-link">#</a>

- [Specification](https://drafts.fxtf.org/filter-effects-2/#BackdropFilterProperty)
- [Chrome Platform Status](https://www.chromestatus.com/feature/5679432723333120)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [`background-filter` at CSS Tricks](https://css-tricks.com/the-backdrop-filter-css-property/)
- [Samples on Codepen](https://codepen.io/tag/backdrop-filter/#)

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Aug 29, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/backdrop-filter/index.md)

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
