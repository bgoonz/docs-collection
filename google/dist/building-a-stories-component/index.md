<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/OghwTxMrgwyEpzqQeuCa.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#building-a-stories-component" class="w-toc__header--link">Building a Stories component</a>

- [Overview](#overview)
- [Picking the right tools for the job](#features)
- [CSS Grid](#grid)
- [CSS Scroll Snap Points](#scroll-snap-points)
- [Cross-browser compatibility](#compatibility)
- [scroll-snap-stop](#scroll-snap-stop)
- [overscroll-behavior](#overscroll-behavior)
- [scrollIntoView({behavior: 'smooth'})](#scrollintoview)
- [Hands-on](#hands-on)
- [Community remixes](#remixes)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building a Stories component

A foundational overview of how to build an experience similar to Instagram Stories on the web.

Nov 25, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

In this post I want to share thinking on building a Stories component for the web that is responsive, supports keyboard navigation, and works across browsers.

[Demo](https://gui-challenges-stories.glitch.me/)

If you would prefer a hands-on demonstration of building this Stories component yourself, check out the [Stories component codelab](/codelab-building-a-stories-component).

If you prefer video, here's a YouTube version of this post:

## Overview <a href="#overview" class="w-headline-link">#</a>

Two popular examples of the Stories UX are Snapchat Stories and Instagram Stories (not to mention fleets). In general UX terms, Stories are usually a mobile-only, tap-centric pattern for navigating multiple subscriptions. For example, on Instagram, users open a friend's story and go through the pictures in it. They generally do this many friends at a time. By tapping on the right side of the device, a user skips ahead to that friend's next story. By swiping right, a user skips ahead to a different friend. A Story component is fairly similar to a carousel, but allows navigating a multi-dimensional array as opposed to a single-dimensional array. It's as if there's a carousel inside each carousel. 🤯

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format" alt=" 1st carousel of friends  2nd &quot;stacked&quot; carousel of stories 👍 List in a list, aka: a multi-dimensional array" class="w-screenshot w-screenshot--filled" sizes="(min-width: 716px) 716px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0yVm8NC0TiAsl6hcDxys.png?auto=format&amp;w=1432 1432w" width="716" height="255" /><figcaption><span style="width: 1rem; height: 1rem; background: #EB00FF; display: inline-block; border-radius: 3px; position: relative; top: .2em;"></span> 1st carousel of friends<br />
<span style="width: 1rem; height: 1rem; background: #00D8FF; display: inline-block; border-radius: 3px; position: relative; top: .2em;"></span> 2nd "stacked" carousel of stories<br />
👍 List in a list, aka: a multi-dimensional array</figcaption></figure>Picking the right tools for the job <a href="#features" class="w-headline-link">#</a>
-------------------------------------------------------------------------------------

All in all I found this component pretty straightforward to build, thanks to a few critical web platform features. Let's cover them!

### CSS Grid <a href="#grid" class="w-headline-link">#</a>

Our layout turned out to be no tall order for CSS Grid as it's equipped with some powerful ways to wrangle content.

#### Friends layout <a href="#friends-layout" class="w-headline-link">#</a>

Our primary `.stories` component wrapper is a mobile-first horizontal scrollview:

    .stories {
      inline-size: 100vw;
      block-size: 100vh;

      display: grid;
      grid: 1fr / auto-flow 100%;
      gap: 1ch;

      overflow-x: auto;
      scroll-snap-type: x mandatory;
      overscroll-behavior: contain;
      touch-action: pan-x;
    }

    /* desktop constraint */
    @media (hover: hover) and (min-width: 480px) {
      max-inline-size: 480px;
      max-block-size: 848px;
    }

Using Chrome DevTools' [Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode) to highlight the columns created by Grid

Let's breakdown that `grid` layout:

- We explicitly fill the viewport on mobile with `100vh` and `100vw` and constrain the size on desktop
- `/` separates our row and column templates
- `auto-flow` translates to [`grid-auto-flow: column`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
- The autoflow template is `100%`, which in this case is whatever the scroll window width is

Note that the location of the `/` separator relative to `auto-flow` is important. If `auto-flow` came before `/` it would be shorthand for `grid-auto-flow: row`.

On a mobile phone, think of this like the row size being the viewport height and each column being the viewport width. Continuing with the Snapchat Stories and Instagram Stories example, each column will be a friend's story. We want friends stories to continue outside of the viewport so we have somewhere to scroll to. Grid will make however many columns it needs to layout your HTML for each friend story, creating a dynamic and responsive scrolling container for us. Grid enabled us to centralize the whole effect.

#### Stacking <a href="#stacking" class="w-headline-link">#</a>

For each friend we need their stories in a pagination-ready state. In preparation for animation and other fun patterns, I chose a stack. When I say stack, I mean like you're looking down on a sandwich, not like you're looking from the side.

With CSS grid, we can define a single-cell grid (i.e. a square), where the rows and columns share an alias (`[story]`), and then each child gets assigned to that aliased single-cell space:

    .user {
      display: grid;
      grid: [story] 1fr / [story] 1fr;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    .story {
      grid-area: story;
      background-size: cover;
      …
    }

This puts our HTML in control of the stacking order and also keeps all elements in flow. Notice how we didn't need to do anything with `absolute` positioning or `z-index` and we didn't need to box correct with `height: 100%` or `width: 100%`. The parent grid already defined the size of the story picture viewport, so none of these story components needed to be told to fill it!

### CSS Scroll Snap Points <a href="#scroll-snap-points" class="w-headline-link">#</a>

The [CSS Scroll Snap Points spec](https://www.w3.org/TR/css-scroll-snap-1/) makes it a cinch to lock elements into the viewport on scroll. Before these CSS properties existed, you had to use JavaScript, and it was… tricky, to say the least. Check out [Introducing CSS Scroll Snap Points](https://css-tricks.com/introducing-css-scroll-snap-points/) by Sarah Drasner for a great breakdown of how to use them.

Horizontal scrolling without and with `scroll-snap-points` styles. Without it, users can free scroll as normal. With it, the browser rests gently on each item.

parent

    .stories {
      display: grid;
      grid: 1fr / auto-flow 100%;
      gap: 1ch;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      overscroll-behavior: contain;
      touch-action: pan-x;
    }

Parent with overscroll defines snap behavior.

child

    .user {
      display: grid;
      grid: [story] 1fr / [story] 1fr;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

Children opt into being a snap target.

I chose Scroll Snap Points for a few reasons:

- **Free accessibility**. The Scroll Snap Points spec states that pressing the Left Arrow and Right Arrow keys should move through the snap points by default.
- **A growing spec**. The Scroll Snap Points spec is getting new features and improvements all the time, which means that my Stories component will probably only get better from here on out.
- **Ease of implementation**. Scroll Snap Points are practically built for the touch-centric horizontal-pagination use case.
- **Free platform-style inertia**. Every platform will scroll and rest in its style, as opposed to normalized inertia which can have an uncanny scrolling and resting style.

## Cross-browser compatibility <a href="#compatibility" class="w-headline-link">#</a>

We tested on Opera, Firefox, Safari, and Chrome, plus Android and iOS. Here's a brief rundown of the web features where we found differences in capabilities and support.

**Success**: All of the features chosen were supported and none were buggy.

We did though have some CSS not apply, so some platforms are currently missing out on UX optimizations. I did enjoy not needing to manage these features and feel confident that they'll eventually reach other browsers and platforms.

### `scroll-snap-stop` <a href="#scroll-snap-stop" class="w-headline-link">#</a>

Carousels were one of the major UX use cases that prompted the creation of the CSS Scroll Snap Points spec. Unlike Stories, a carousel doesn't always need to stop on each image after a user interacts with it. It might be fine or encouraged to quickly cycle through the carousel. Stories, on the other hand, are best navigated one-by-one, and that's exactly what `scroll-snap-stop` provides.

    .user {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

At the time of writing this post, `scroll-snap-stop` is only supported on Chromium-based browsers. Check out [Browser compatibility](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop#Browser_compatibility) for updates. It's not a blocker, though. It just means that on unsupported browsers users can accidentally skip a friend. So users will just have to be more careful, or we'll need to write JavaScript to ensure that a skipped friend isn't marked as viewed.

Read more in [the spec](https://www.w3.org/TR/css-scroll-snap-1/#scroll-snap-stop) if you're interested.

### `overscroll-behavior` <a href="#overscroll-behavior" class="w-headline-link">#</a>

Have you ever been scrolling through a modal when all of a sudden you start scrolling the content behind the modal? [`overscroll-behavior`](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) lets the developer trap that scroll and never let it leave. It's nice for all sorts of occasions. My Stories component uses it to prevent additional swipes and scrolling gestures from leaving the component.

    .stories {
      overflow-x: auto;
      overscroll-behavior: contain;
    }

Safari and Opera were the 2 browsers that didn't [support](https://caniuse.com/#search=overscroll-behavior) this, and that's totally OK. Those users will get an overscroll experience like they're used to and may never notice this enhancement. I'm personally a big fan and like including it as part of nearly every overscroll feature I implement. It's a harmless addition that can only lead to improved UX.

### `scrollIntoView({behavior: 'smooth'})` <a href="#scrollintoview" class="w-headline-link">#</a>

When a user taps or clicks and has reached the end of a friend's set of stories, it's time to move to the next friend in the scroll snap point set. With JavaScript, we were able to reference the next friend and request for it to be scrolled into view. The support for the basics of this are great; every browser scrolled it into view. But, not every browser did it `'smooth'`. This just means it's scrolled into view instead of snapped.

    element.scrollIntoView({
      behavior: 'smooth'
    })

Safari was the only browser not to support `behavior: 'smooth'` here. Check out [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#Browser_compatibility) for updates.

## Hands-on <a href="#hands-on" class="w-headline-link">#</a>

Now that you know how I did it, how would you?! Let's diversify our approaches and learn all the ways to build on the web. Create a [Glitch](https://glitch.com), [tweet me](https://twitter.com/argyleink) your version, and I'll add it to the [Community remixes](#community-remixes) section below.

## Community remixes <a href="#remixes" class="w-headline-link">#</a>

- [@geoffrich\_](https://twitter.com/geoffrich_) with [Svelte](https://svelte.dev): [demo](https://svelte-stories.glitch.me) & [code](https://github.com/geoffrich/svelte-stories)
- [@GauteMeekOlsen](https://twitter.com/GauteMeekOlsen) with [Vue](https://vuejs.org/): [demo + code](https://stackblitz.com/edit/stories)
- [@AnaestheticsApp](https://twitter.com/AnaestheticsApp) with [Lit](https://lit-element.polymer-project.org/): [demo](https://lit-stories.glitch.me/) & [code](https://github.com/anaestheticsapp/web-stories)

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/mobile/" class="w-chip">Mobile</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Nov 25, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/building-a-stories-component/index.md)

## Codelabs

See it in action

Learn more and put this guide into action.

- <a href="/codelab-building-a-stories-component/" class="w-callout__link w-callout__link--codelab">Codelab: Building a Stories component</a>

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
