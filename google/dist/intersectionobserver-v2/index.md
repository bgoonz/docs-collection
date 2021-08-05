<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format" alt="Eye of a cat looking through a gap in a fence." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/wUCO2CgK5UOz6URpXEtd.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#trust-is-good-observation-is-better:-intersection-observer-v2" class="w-toc__header--link">Trust is good, observation is better: Intersection Observer v2</a>

- [What's challenging with Intersection Observer v1?](#what's-challenging-with-intersection-observer-v1)
- [Why is actual visibility such a big deal?](#why-is-actual-visibility-such-a-big-deal)
- [How does Intersection Observer v2 fix this?](#how-does-intersection-observer-v2-fix-this)
- [What does the new code look like in practice?](#what-does-the-new-code-look-like-in-practice)
- [Related Links](#related-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Trust is good, observation is better: Intersection Observer v2

Intersection Observer v2 adds the capability to not only observe intersections per se, but to also detect if the intersecting element was visible at the time of intersection.

Feb 15, 2019 <span class="w-author__separator">•</span> Updated Feb 26, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Intersection Observer v1 is one of those APIs that's probably universally loved, and, now that [Safari supports it](https://webkit.org/blog/8582/intersectionobserver-in-webkit/) as well, it's also finally universally usable in all major browsers. For a quick refresher of the API, I recommend watching [Surma](/authors/surma/)'s [Supercharged Microtip](https://www.youtube.com/watch?v=kW_atFXMG98) on Intersection Observer v1 that is embedded below. You can also read Surma's in-depth [article](https://developers.google.com/web/updates/2016/04/intersectionobserver). People have used Intersection Observer v1 for a wide range of use cases like [lazy loading of images and videos](/fast/#lazy-load-images-and-video), [being notified when elements reach `position: sticky`](https://developers.google.com/web/updates/2017/09/sticky-headers), [firing analytics events](https://github.com/ampproject/amphtml/blob/master/extensions/amp-analytics/0.1/visibility-manager.js), and many more.

For the full details, check out the [Intersection Observer docs on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), but as a short reminder, this is what the Intersection Observer v1 API looks like in the most basic case:

    const onIntersection = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          console.log(entry);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersection);
    observer.observe(document.querySelector('#some-target'));

## What's challenging with Intersection Observer v1? <a href="#what&#39;s-challenging-with-intersection-observer-v1" class="w-headline-link">#</a>

To be clear, Intersection Observer v1 is great, but it's not perfect. There are some corner cases where the API falls short. Let's have a closer look! The Intersection Observer v1 API can tell you when an element is scrolled into the window's viewport, but it _doesn't_ tell you whether the element is covered by any other page content (that is, when the element is occluded) or whether the element's visual display has been modified by visual effects like `transform`, `opacity`, `filter`, etc., which _effectively_ can make it invisible.

For an element in the top-level document, this information can be determined by analyzing the DOM via JavaScript, for example via [`DocumentOrShadowRoot.elementFromPoint()`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint) and then digging deeper. In contrast, the same information cannot be obtained if the element in question is located in a third-party iframe.

## Why is actual visibility such a big deal? <a href="#why-is-actual-visibility-such-a-big-deal" class="w-headline-link">#</a>

The Internet is, unfortunately, a place that attracts bad actors with worse intentions. For example, a shady publisher that serves pay-per-click ads on a content site might be incentivized to trick people into clicking their ads to increase the publisher's ad payout (at least for a short period, until the ad network catches them). Typically, such ads are served in iframes. Now if the publisher wanted to get users to click such ads, they could make the ad iframes completely transparent by applying a CSS rule `iframe { opacity: 0; }` and overlaying the iframes on top of something attractive, like a cute cat video that users would actually want to click. This is called _clickjacking_. You can see such a clickjacking attack in action in the upper section of this [demo](https://trick-ad-click.glitch.me/) (try "watching" the cat video and activate "trick mode"). You will notice that the ad in the iframe "thinks" it received legitimate clicks, even if it was completely transparent when you (pretend-involuntarily) clicked it.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format" alt="Tricking a user into clicking an ad by styling it transparent and overlaying it on top of something attractive." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/oSQhudX6lenD4Pld7PJD.png?auto=format&amp;w=1600 1600w" width="800" height="533" />

## How does Intersection Observer v2 fix this? <a href="#how-does-intersection-observer-v2-fix-this" class="w-headline-link">#</a>

Intersection Observer v2 introduces the concept of tracking the actual "visibility" of a target element as a human being would define it. By setting an option in the [`IntersectionObserver` constructor](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver), intersecting [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) instances will then contain a new boolean field named `isVisible`. A `true` value for `isVisible` is a strong guarantee from the underlying implementation that the target element is completely unoccluded by other content and has no visual effects applied that would alter or distort its display on screen. In contrast, a `false` value means that the implementation cannot make that guarantee.

An important detail of the [spec](https://w3c.github.io/IntersectionObserver/v2/#calculate-visibility-algo) is that the implementation _is permitted_ to report _false negatives_ (that is, setting `isVisible` to `false` even when the target element is completely visible and unmodified). For performance or other reasons, browsers limit themselves to working with bounding boxes and rectilinear geometry; they don't try to achieve pixel-perfect results for modifications like `border-radius`.

That said, _false positives_ are _not permitted_ under any circumstances (that is, setting `isVisible` to `true` when the target element is not completely visible and unmodified).

**Warning**: Visibility is _much more expensive_ to compute than intersection. For that reason, Intersection Observer v2 is _not intended to be used broadly_ in the way that Intersection Observer v1 is. Intersection Observer v2 is focused on combatting fraud and should be used only when the visibility information is needed and when Intersection Observer v1 functionality is therefore insufficient.

## What does the new code look like in practice? <a href="#what-does-the-new-code-look-like-in-practice" class="w-headline-link">#</a>

The `IntersectionObserver` constructor now takes two additional configuration properties: `delay` and `trackVisibility`. The `delay` is a number indicating the minimum delay in milliseconds between notifications from the observer for a given target. The `trackVisibility` is a boolean indicating whether the observer will track changes in a target's visibility.

It's important to note here that when `trackVisibility` is `true`, `delay` is required to be at least `100` (that is, no more than one notification every 100ms). As noted before, visibility is expensive to calculate, and this requirement is a precaution against performance degradation and battery consumption. The responsible developer will use the _largest tolerable value_ for delay.

According to the current [spec](https://w3c.github.io/IntersectionObserver/v2/#calculate-visibility-algo), visibility is calculated as follows:

- If the observer's `trackVisibility` attribute is `false`, then the target is considered visible. This corresponds to the current v1 behavior.

- If the target has an effective transformation matrix other than a 2D translation or proportional 2D upscaling, then the target is considered invisible.

- If the target, or any element in its containing block chain, has an effective opacity other than 1.0, then the target is considered invisible.

- If the target, or any element in its containing block chain, has any filters applied, then the target is considered invisible.

- If the implementation cannot guarantee that the target is completely unoccluded by other page content, then the target is considered invisible.

This means current implementations are pretty conservative with guaranteeing visibility. For example, applying an almost unnoticeable grayscale filter like `filter: grayscale(0.01%)` or setting an almost invisible transparency with `opacity: 0.99` would all render the element invisible.

Below is a short code sample that illustrates the new API features. You can see its click tracking logic in action in the second section of the [demo](https://trick-ad-click.glitch.me/) (but now, try "watching" the puppy video). Be sure to activate "trick mode" again to immediately convert yourself into a shady publisher and see how Intersection Observer v2 prevents non-legitimate ad clicks from being tracked. This time, Intersection Observer v2 has our back! 🎉

In contrast to typical lazy-loading code, if you use Intersection Observer to prevent this kind of clickjacking attack, you _must not_ `unobserve` the element after the first intersection.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format" alt="Intersection Observer v2 preventing an unintended click on an ad." sizes="(min-width: 612px) 612px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6n5a6quLhExtwlFoNVdr.png?auto=format&amp;w=1224 1224w" width="612" height="876" />

    <!DOCTYPE html>
    <!-- This is the ad running in the iframe -->
    <button id="callToActionButton">Buy now!</button>

    // This is code running in the iframe.

    // The iframe must be visible for at least 800ms prior to an input event
    // for the input event to be considered valid.
    const minimumVisibleDuration = 800;

    // Keep track of when the button transitioned to a visible state.
    let visibleSince = 0;

    const button = document.querySelector('#callToActionButton');
    button.addEventListener('click', (event) => {
      if ((visibleSince > 0) &&
          (performance.now() - visibleSince >= minimumVisibleDuration)) {
        trackAdClick();
      } else {
        rejectAdClick();
      }
    });

    const observer = new IntersectionObserver((changes) => {
      for (const change of changes) {
        // ⚠️ Feature detection
        if (typeof change.isVisible === 'undefined') {
          // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
          change.isVisible = true;
        }
        if (change.isIntersecting && change.isVisible) {
          visibleSince = change.time;
        } else {
          visibleSince = 0;
        }
      }
    }, {
      threshold: [1.0],
      // 🆕 Track the actual visibility of the element
      trackVisibility: true,
      // 🆕 Set a minimum delay between notifications
      delay: 100
    }));

    // Require that the entire iframe be visible.
    observer.observe(document.querySelector('#ad'));

## Related Links <a href="#related-links" class="w-headline-link">#</a>

- Latest Editor's Draft of the [Intersection Observer spec](https://w3c.github.io/IntersectionObserver/v2/).
- Intersection Observer v2 on [Chrome Platform Status](https://www.chromestatus.com/feature/5878481493688320).
- Intersection Observer v2 [Chromium bug](https://crbug.com/827639).
- Blink [Intent to Implement posting](https://groups.google.com/a/chromium.org/d/msg/blink-dev/tudxAHN9-AY/vz91o_aNDwAJ).

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [Simeon Vincent](https://twitter.com/dotproto), [Yoav Weiss](https://twitter.com/yoavweiss), and [Mathias Bynens](https://twitter.com/mathias) for reviewing this article, as well as [Stefan Zager](https://twitter.com/stefanzager) likewise for reviewing and for implementing the feature in Chrome. Hero image by Sergey Semin on [Unsplash](https://unsplash.com/photos/ZuXDaoIx_Bc).

<span class="w-mr--sm"> Last updated: Feb 26, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/intersectionobserver-v2/index.md)

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
