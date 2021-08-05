<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Zo1KkESK9CfEIYpbWzap.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#building-a-sidenav-component" class="w-toc__header--link">Building a sidenav component</a>

- [Overview](#overview)
- [Web Tactics](#web-tactics)
- [CSS :target pseudo-class](#target-psuedo-class)
- [CSS Grid](#grid-stacks)
- [CSS 3D transforms & transitions](#transforms)
- [Accessibility UX enhancements](#ux-enhancements)
- [Conclusion](#conclusion)
- [Community remixes](#community-remixes)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building a sidenav component

A foundational overview of how to build a responsive slide out sidenav

Jan 21, 2021

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

In this post I want to share with you how I prototyped a Sidenav component for the web that is responsive, stateful, supports keyboard navigation, works with and without JavaScript, and works across browsers. Try the [demo](https://gui-challenges.web.app/sidenav/dist/).

If you prefer video, here's a YouTube version of this post:

## Overview <a href="#overview" class="w-headline-link">#</a>

It's tough building a responsive navigation system. Some users will be on a keyboard, some will have powerful desktops, and some will visit from a small mobile device. Everyone visiting should be able to open and close the menu.

Desktop to mobile responsive layout demo

Light and dark theme down on iOS and Android

## Web Tactics <a href="#web-tactics" class="w-headline-link">#</a>

In this component exploration I had the joy of combining a few critical web platform features:

1.  CSS [`:target`](#target-psuedo-class)
2.  CSS [grid](#grid-stack)
3.  CSS [transforms](#transforms)
4.  CSS Media Queries for viewport and user preference
5.  JS for `focus` [UX enhancements](#ux-enhancements)

My solution has one sidebar and toggles only when at a "mobile" viewport of `540px` or less. `540px` will be our breakpoint for switching between the mobile interactive layout and the static desktop layout.

### CSS `:target` pseudo-class <a href="#target-psuedo-class" class="w-headline-link">#</a>

One `<a>` link sets the url hash to `#sidenav-open` and the other to empty (`''`). Lastly, an element has the `id` to match the hash:

    <a href="#sidenav-open" id="sidenav-button" title="Open Menu" aria-label="Open Menu">

    <a href="#" id="sidenav-close" title="Close Menu" aria-label="Close Menu"></a>

    <aside id="sidenav-open">
      …
    </aside>

Clicking each of these links changes the hash state of our page URL, then with a pseudo-class I show and hide the sidenav:

    @media (max-width: 540px) {
      #sidenav-open {
        visibility: hidden;
      }

      #sidenav-open:target {
        visibility: visible;
      }
    }

### CSS Grid <a href="#grid-stacks" class="w-headline-link">#</a>

In the past, I only used absolute or fixed position sidenav layouts and components. Grid though, with its `grid-area` syntax, lets us assign multiple elements to the same row or column.

#### Stacks <a href="#stacks" class="w-headline-link">#</a>

The primary layout element `#sidenav-container` is a grid that creates 1 row and 2 columns, 1 of each are named `stack`. When space is constrained, CSS assigns all of the `<main>` element's children to the same grid name, placing all elements into the same space, creating a stack.

    #sidenav-container {
      display: grid;
      grid: [stack] 1fr / min-content [stack] 1fr;
      min-height: 100vh;
    }

    @media (max-width: 540px) {
      #sidenav-container > * {
        grid-area: stack;
      }
    }

#### Menu backdrop <a href="#menu-backdrop" class="w-headline-link">#</a>

The `<aside>` is the animating element that contains the side navigation. It has 2 children: the navigation container `<nav>` named `[nav]` and a backdrop `<a>` named `[escape]`, which is used to close the menu.

    #sidenav-open {
      display: grid;
      grid-template-columns: [nav] 2fr [escape] 1fr;
    }

Adjust `2fr` & `1fr` to find the ratio you like for the menu overlay and its negative space close button.

A demo of what happens when you change the ratio.

### CSS 3D transforms & transitions <a href="#transforms" class="w-headline-link">#</a>

Our layout is now stacked at a mobile viewport size. Until I add some new styles, it's overlaying our article by default. Here's some UX I'm shooting for in this next section:

- Animate open and close
- Only animate with motion if the user is OK with that
- Animate `visibility` so keyboard focus doesn't enter the offscreen element

As I begin to implement motion animations, I want to start with accessibility top of mind.

#### Accessible motion <a href="#accessible-motion" class="w-headline-link">#</a>

Not everyone will want a slide out motion experience. In our solution this preference is applied by adjusting a `--duration` CSS variable inside a media query. This media query value represents a user's operating system preference for motion (if available).

    #sidenav-open {
      --duration: .6s;
    }

    @media (prefers-reduced-motion: reduce) {
      #sidenav-open {
        --duration: 1ms;
      }
    }

A demo of the interaction with and without duration applied.

Now when our sidenav is sliding open and closed, if a user prefers reduced motion, I instantly move the element into view, maintaining state without motion.

#### Transition, transform, translate <a href="#transition-transform-translate" class="w-headline-link">#</a>

##### Sidenav out (default) <a href="#sidenav-out-(default)" class="w-headline-link">#</a>

To set the default state of our sidenav on mobile to an offscreen state, I position the element with `transform: translateX(-110vw)`.

Note, I added another `10vw` to the typical offscreen code of `-100vw`, to ensure the `box-shadow` of the sidenav doesn't peek into the main viewport when it's hidden.

    @media (max-width: 540px) {
      #sidenav-open {
        visibility: hidden;
        transform: translateX(-110vw);
        will-change: transform;
        transition:
          transform var(--duration) var(--easeOutExpo),
          visibility 0s linear var(--duration);
      }
    }

##### Sidenav in <a href="#sidenav-in" class="w-headline-link">#</a>

When the `#sidenav` element matches as `:target`, set the `translateX()` position to homebase `0`, and watch as CSS slides the element from its out position of `-110vw`, to its "in" position of `0` over `var(--duration)` when the URL hash is changed.

    @media (max-width: 540px) {
      #sidenav-open:target {
        visibility: visible;
        transform: translateX(0);
        transition:
          transform var(--duration) var(--easeOutExpo);
      }
    }

#### Transition visibility <a href="#transition-visibility" class="w-headline-link">#</a>

The goal now is to hide the menu from screenreaders when it's out, so systems don't put focus into an offscreen menu. I accomplish this by setting a visibility transition when the `:target` changes.

- When going in, don't transition visibility; be visible right away so I can see the element slide in and accept focus.
- When going out, transition visibility but delay it, so it flips to `hidden` at the end of the transition out.

### Accessibility UX enhancements <a href="#ux-enhancements" class="w-headline-link">#</a>

#### Links <a href="#links" class="w-headline-link">#</a>

This solution relies on changing the URL in order for the state to be managed. Naturally, the `<a>` element should be used here, and it gets some nice accessibility features for free. Let's adorn our interactive elements with labels clearly articulating intent.

    <a href="#" id="sidenav-close" title="Close Menu" aria-label="Close Menu"></a>

    <a href="#sidenav-open" id="sidenav-button" class="hamburger" title="Open Menu" aria-label="Open Menu">
      <svg>...</svg>
    </a>

A demo of the voiceover and keyboard interaction UX.

Now our primary interaction buttons clearly state their intent for both mouse and keyboard.

#### `:is(:hover, :focus)` <a href="#:is(:hover-:focus)" class="w-headline-link">#</a>

This handy CSS functional pseudo-selector lets us swiftly be inclusive with our hover styles by sharing them with focus as well.

    .hamburger:is(:hover, :focus) svg > line {
      stroke: hsl(var(--brandHSL));
    }

#### Sprinkle on JavaScript <a href="#sprinkle-on-javascript" class="w-headline-link">#</a>

##### Press `escape` to close <a href="#press-escape-to-close" class="w-headline-link">#</a>

The `Escape` key on your keyboard should close the menu right? Let's wire that up.

    const sidenav = document.querySelector('#sidenav-open');

    sidenav.addEventListener('keyup', event => {
      if (event.code === 'Escape') document.location.hash = '';
    });

##### Focus UX <a href="#focus-ux" class="w-headline-link">#</a>

The next snippet helps us put focus on the open and close buttons after they open or close. I want to make toggling easy.

    sidenav.addEventListener('transitionend', e => {
      const isOpen = document.location.hash === '#sidenav-open';

      isOpen
          ? document.querySelector('#sidenav-close').focus()
          : document.querySelector('#sidenav-button').focus();
    })

When the sidenav opens, focus the close button. When the sidenav closes, focus the open button. I do this by calling `focus()` on the element in JavaScript.

### Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Now that you know how I did it, how would you?! This makes for some fun component architecture! Who's going to make the 1st version with slots? 🙂

Let's diversify our approaches and learn all the ways to build on the web. Create a [Glitch](https://glitch.com), [tweet me](https://twitter.com/argyleink) your version, and I'll add it to the [Community remixes](#community-remixes) section below.

## Community remixes <a href="#community-remixes" class="w-headline-link">#</a>

- [@\_developit](https://twitter.com/_developit) with custom elements: [demo & code](https://glitch.com/edit/#!/app-drawer)
- [@mayeedwin1](https://twitter.com/mayeedwin1) with HTML/CSS/JS: [demo & code](https://glitch.com/edit/#!/maye-gui-challenge)
- [@a_nurella](https://twitter.com/a_nurella) with a Glitch Remix: [demo & code](https://glitch.com/edit/#!/sidenav-with-adam)
- [@EvroMalarkey](https://twitter.com/EvroMalarkey) with HTML/CSS/JS: [demo & code](https://evromalarkey.github.io/scrollsnap-drawer/index.html)

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/mobile/" class="w-chip">Mobile</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Jan 21, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/building-a-sidenav-component/index.md)

## Codelabs

See it in action

Learn more and put this guide into action.

- <a href="/codelab-building-a-sidenav-component/" class="w-callout__link w-callout__link--codelab">Codelab: Building a Sidenav component</a>

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
