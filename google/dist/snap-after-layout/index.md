<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#scroll-snapping-after-layout-changes" class="w-toc__header--link">Scroll snapping after layout changes</a>

- [Interoperability](#interoperability)
- [Background](#background)
- [CSS Scroll Snap](#css-scroll-snap)
- [Shortcomings](#shortcomings)
- [Built-in support for re-snapping after layout changes in Chrome 81](#built-in-support-for-re-snapping-after-layout-changes-in-chrome-81)
- [Example: Sticky scrollbars](#example:-sticky-scrollbars)
- [Future work](#future-work)
- [Feedback](#feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Scroll snapping after layout changes

Starting in Chrome 81, you no longer need to add event listeners to force resnapping.

Feb 22, 2020

[<img src="https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yi Gu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/yigu/)

<a href="/authors/yigu/" class="w-author__name-link">Yi Gu</a>

- <a href="https://twitter.com/yigsgu" class="w-author__link">Twitter</a>
- <a href="https://github.com/yi-gu" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/4PTUuazRuGaWSV1LbAOz.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kaan Alsan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/4PTUuazRuGaWSV1LbAOz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/4PTUuazRuGaWSV1LbAOz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/4PTUuazRuGaWSV1LbAOz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/4PTUuazRuGaWSV1LbAOz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/4PTUuazRuGaWSV1LbAOz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/alsan/)

<a href="/authors/alsan/" class="w-author__name-link">Kaan Alsan</a>

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[CSS Scroll Snap](https://developers.google.com/web/updates/2018/07/css-scroll-snap) allows web developers to create well-controlled scroll experiences by declaring scroll snapping positions. One shortcoming of the current implementation is that scroll snapping does not work well when the layout changes, such as when the viewport is resized or the device is rotated. This shortcoming is fixed in Chrome 81.

## Interoperability <a href="#interoperability" class="w-headline-link">#</a>

Many browsers have basic support for CSS Scroll Snap. See [Can I use CSS Scroll Snap?](https://caniuse.com/#feat=css-snappoints) for more information.

Chrome is currently the only browser to implement scroll snapping after layout changes. Firefox has a [ticket](https://bugzilla.mozilla.org/show_bug.cgi?id=1530253) open for implementing this and Safari also has an open [ticket](https://bugs.webkit.org/show_bug.cgi?id=144826) for re-snapping after a scroller's content changes. For now, you can simulate this behaviour by adding the following code to event listeners to force a snapping to execute:

    scroller.scrollBy(0,0);

However, this will not guarantee that the scroller snaps back to the same element.

## Background <a href="#background" class="w-headline-link">#</a>

### CSS Scroll Snap <a href="#css-scroll-snap" class="w-headline-link">#</a>

The CSS Scroll Snap feature allows web developers to create well-controlled scroll experiences by declaring scroll snapping positions. These positions ensure that scrollable content is properly aligned with its container to overcome the issues of imprecise scrolling. In other words, scroll snapping:

- Prevents awkward scroll positions when scrolling.
- Creates the effect of paging through content.

Paginated articles and image carousels are two common use cases for scroll snaps.

<figure><img src="https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format" alt="Example of CSS scroll snap. At the end of scrolling an image&#39;s horizontal center is aligned with the horizontal center of the scroll container." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/MzdzDJ2j4jJtfAYgg9e6.png?auto=format&amp;w=1600 1600w" width="800" height="356" /><figcaption>Example of CSS scroll snap. At the end of scrolling an image's horizontal center is aligned with the horizontal center of the scroll container.</figcaption></figure>### Shortcomings <a href="#shortcomings" class="w-headline-link">#</a>

Snap positions get lost when resizing a window.

Scroll snapping allows users to effortlessly navigate through content, but its inability to adapt to changes in content and layout blocks some of its potential benefits. As shown in the [example](https://codepen.io/argyleink/pen/MWWpOmz) above, users have to re-adjust scroll positions whenever resizing a window to find the previously snapped element. Some common scenarios that cause layout change are:

- Resizing a window
- Rotating a device
- Opening DevTools

The first two scenarios make CSS Scroll Snap less appealing for users and the third one is a nightmare for developers when debugging. Developers also need to consider these shortcomings when trying to make a dynamic experience that supports actions such as adding, removing, or moving content.

A common fix for this is to add listeners that execute a programmatic scroll via JavaScript to force snapping to execute whenever any of these mentioned layout changes happen. This workaround can be ineffective when the user expects the scroller to snap back to the same content as before. Any further handling with JavaScript seems to almost defeat the purpose of this CSS feature.

## Built-in support for re-snapping after layout changes in Chrome 81 <a href="#built-in-support-for-re-snapping-after-layout-changes-in-chrome-81" class="w-headline-link">#</a>

The mentioned shortcomings no longer exist in Chrome 81: scrollers will remain snapped even after changing layout. They will re-evaluate scroll positions after changing their layout, and re-snap to the closest snap position if necessary. If the scroller was previously snapped to an element that still exists after the layout change, then the scroller will try to snap back to it. Pay attention to what happens when the layout changes in the following [example](https://codepen.io/argyleink/full/YzXyOaX).

Snap position lost

Rotating a device **does not** preserve the snap positions in Chrome 80. After scrolling to the slide that says `NOPE` and changing the device orientation from portrait to landscape, a blank screen is shown, which indicates that the scroll snap position was lost.

Snap position preserved

Rotating a device **does** preserve the snap positions in Chrome 81. The slide that says `NOPE` remains in view even though the device orientation changes multiple times.

See the [Re-snapping after layout changes specification](https://drafts.csswg.org/css-scroll-snap-1/#re-snap) for more details.

**Caution**: Snapping is also executed when the page loads. This affects the initial scroll offset of scrollers using the scroll snap feature.

## Example: Sticky scrollbars <a href="#example:-sticky-scrollbars" class="w-headline-link">#</a>

With "Snap after layout changes", developers can implement sticky scrollbars with a few lines of CSS:

    .container {
      scroll-snap-type: y proximity;
    }

    .container::after {
      scroll-snap-align: end;
      display: block;
    }

Want to learn more? See the following [demo chat UI](https://codepen.io/argyleink/pen/RwPWqKe) for visuals.

Adding a new message triggers re-snap which makes it stick to the bottom in Chrome 81.

## Future work <a href="#future-work" class="w-headline-link">#</a>

All re-snapping scroll effects are currently instant; a potential follow-up is to support re-snapping with [smooth scrolling effects](https://developers.google.com/web/updates/2016/02/smooth-scrolling-in-chrome-49). See the [specification issue](https://github.com/w3c/csswg-drafts/issues/4609) for details.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

Your feedback is invaluable in making re-snapping after layout changes better, so go on and try it out and [let the Chromium engineers know](https://bugs.chromium.org/p/chromium/issues/detail?id=866127) what you think.

<span class="w-mr--sm"> Last updated: Feb 22, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/snap-after-layout/index.md)

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
