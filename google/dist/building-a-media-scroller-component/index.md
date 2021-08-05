<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/I83Y9EaBPBXbE6TywvLg.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#building-a-media-scroller-component" class="w-toc__header--link">Building a media scroller component</a>

- [Overview](#overview)
- [Start with accessible markup](#start-with-accessible-markup)
- [Support the user's color scheme preference](#support-the-user's-color-scheme-preference)
- [Add content](#add-content)
- [Add style with CSS](#add-style-with-css)
- [Creating the scroller layout](#creating-the-scroller-layout)
- [Scroll padding](#scroll-padding)
- [Scroll snapping](#scroll-snapping)
- [Focus](#focus)
- [Roving index](#roving-index)
- [Aspect-ratio](#aspect-ratio)
- [Prefers reduced data](#prefers-reduced-data)
- [Conclusion](#conclusion)
- [Community remixes](#community-remixes)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building a media scroller component

A foundational overview of how to build a responsive horizontal scrollview for TVs, phones, desktops, etc.

May 12, 2021

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

In this post I want to share thinking on ways to create horizontal scrolling experiences for the web that are minimal, responsive, accessible and work across browsers and platforms (like TVs!). Try the [demo](https://gui-challenges.web.app/media-scroller/dist/).

[Demo](https://gui-challenges.web.app/media-scroller/dist/)

If you prefer video, here's a YouTube version of this post:

## Overview <a href="#overview" class="w-headline-link">#</a>

We'll be building a horizontal scroll layout meant for hosting thumbnails of media or products. The component begins as a humble `<ul>` list but is transformed with CSS into a satisfying and smooth scroll experience, showcasing images and snapping them to a grid. JavaScript is added to facilitate roving-index interactions, helping keyboard users skip traversing 100+ items. Plus an experimental media query, `prefers-reduced-data`, is used to turn the media scroller into a lightweight title scroller experience.

## Start with accessible markup <a href="#start-with-accessible-markup" class="w-headline-link">#</a>

A media scroller is made of just a couple of core components, a list with items. A list, in its simplest form, can travel all over the world and be clearly consumed by all. A user landing at this page can browse a list and click a link to view an item. This is our accessible base.

Deliver a list with a `<ul>` element:

    <ul class="horizontal-media-scroller">
      <li></li>
      <li></li>
      <li></li>
      ...
    <ul>

Make the list items interactive with an `<a>` element:

    <li>
      <a href="#">
        ...
      </a>
    </li>

Use a `<figure>` element to semantically represent an image and its caption:

    <figure>
      <picture>
        <img alt="..." loading="lazy" src="https://picsum.photos/500/500?1">
      </picture>
      <figcaption>Legends</figcaption>
    </figure>

Notice the `alt` and `loading` attributes on the `<img>`. Alt text for a media scroller is a **UX opportunity** to help bring the thumbnail extra context, or as fallback text if the image didn't load, or it provides a spoken UI for users relying on assistive technology like a screen reader. Learn more with [Five golden rules for compliant alt text](https://abilitynet.org.uk/news-blogs/five-golden-rules-compliant-alt-text).

The `loading` attribute accepts the keyword `lazy` as a way to signal this image source should be fetched only when the image is within the viewport. This can be really nice for large lists, as users will only download images for items they scrolled into view.

### Support the user's color scheme preference <a href="#support-the-user&#39;s-color-scheme-preference" class="w-headline-link">#</a>

Use `color-scheme` as a `<meta>` tag to signal to the browser that your page wants both the light and dark provided user-agent styles. It's a free dark mode or light mode, depending on how you look at it:

    <meta name="color-scheme" content="dark light">

The meta tag provides the earliest signal possible, so the browser can select a dark default canvas color if the user has a dark theme preference. This means that navigations between pages of the site won't flash a white canvas background between loads. Seamless dark theme between loads, much nicer on the eyes.

Learn much more from [Thomas Steiner](https://web.dev/authors/thomassteiner/) at <https://web.dev/color-scheme/>.

### Add content <a href="#add-content" class="w-headline-link">#</a>

Given the above content structure of `ul > li > a > figure > picture > img`, the next task is to add images and titles to scroll through. I've packed the demo with static placeholder images and text, but feel free to power this from your favorite data source.

## Add style with CSS <a href="#add-style-with-css" class="w-headline-link">#</a>

Now it's time for CSS to take this generic list of content and turn it into an experience. Netflix, App stores and many more sites and apps use horizontal scrolling areas to pack the viewport with categories and options.

### Creating the scroller layout <a href="#creating-the-scroller-layout" class="w-headline-link">#</a>

It's important to avoid cutting off content in layouts or leaning on text truncation with ellipsis. Many television sets have media scrollers just like this one, but all too often resort to ellipsing content. This layout does not! It also lets the media content override the column size, making 1 layout flexible enough to handle many interesting combinations.

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format" alt="2 scrolling rows shown. One has no ellipsis, which means it&#39;s taller and each title is fully legible. The other is shorter and many titles are cutoff with ellipsis." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/VFIcWLB6bnyYAszFzoE8.png?auto=format&amp;w=1600 1600w" width="800" height="501" />

The container allows overriding the column size by providing the default size as a custom property. This grid layout is opinionated about column size, it's managing spacing and direction only:

    .horizontal-media-scroller {
      --size: 150px;

      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--gap) / 2); /* parent owned value for children to be relative to*/
      margin: 0;
    }

The custom property is then used by the `<picture>` element to create our base aspect ratio: a box:

    .horizontal-media-scroller {
      --size: 150px;

      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--gap) / 2);
      margin: 0;

      & picture {
        inline-size: var(--size);
        block-size: var(--size);
      }
    }

With only a few more minor styles, complete the barebones of the media scroller:

    .horizontal-media-scroller {
      --size: 150px;

      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--gap) / 2);
      margin: 0;

      overflow-x: auto;
      overscroll-behavior-inline: contain;

      & > li {
        display: inline-block; /* removes the list-item bullet */
      }

      & picture {
        inline-size: var(--size);
        block-size: var(--size);
      }
    }

Setting `overflow` sets the `<ul>` up to allow scrolling and keyboard navigation through its list, then each direct child `<li>` element has its `::marker` removed by getting a new display type of `inline-block`.

The images aren't responsive yet though, and burst right out of the boxes they're inside. Tame them with some sizes, fit, and border styles, and a background gradient for when they're lazy loading:

    img {
      /* smash into whatever box it's in */
      inline-size: 100%;
      block-size: 100%;

      /* don't squish but do cover the space */
      object-fit: cover;

      /* soften the edges */
      border-radius: 1ex;
      overflow: hidden;

      /* if empty, show a gradient placeholder */
      background-image:
        linear-gradient(
          to bottom,
          hsl(0 0% 40%),
          hsl(0 0% 20%)
        );
    }

### Scroll padding <a href="#scroll-padding" class="w-headline-link">#</a>

Alignment to page content, plus an edge-to-edge scrolling surface area, are critical to a harmonious and minimal component.

To accomplish the edge-to-edge scroll layout which aligns with our typography and layout lines, use `padding` that matches the `scroll-padding`:

    .horizontal-media-scroller {
      --size: 150px;

      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--gap) / 2);
      margin: 0;

      overflow-x: auto;
      overscroll-behavior-inline: contain;

      padding-inline: var(--gap);
      scroll-padding-inline: var(--gap);
      padding-block: calc(var(--gap) / 2); /* make space for scrollbar and focus outline */
    }

I've simplified the example CSS here to only the logical properties. The hosted demo linked in this post has fallbacks for browsers without support for these logical shorthands.

**Horizontal scroll padding bug fix** The above shows how easy it should be to pad a scroll container, but there's outstanding compatibility issues with it (fixed in Chromium 91+ though!). See [here](https://bugs.chromium.org/p/chromium/issues/detail?id=1069614) for a bit of the history, but the short version is that padding wasn't always accounted for in a scroll view.

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format" alt="A box is highlighted on the inline-end side of the last list item, showing the padding and element have the same width as to create the desired alignment." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/jpOZQeMvnHwqiH0jatl7.png?auto=format&amp;w=1600 1600w" width="800" height="272" />

To trick browsers into putting the padding at the end of the scroller I'll target the last figure in each list and append a pseudo element that's the amount of padding desired.

    .horizontal-media-scroller > li:last-of-type figure {
      position: relative;

      &::after {
        content: "";
        position: absolute;

        inline-size: var(--gap);
        block-size: 100%;

        inset-block-start: 0;
        inset-inline-end: calc(var(--gap) * -1);
      }
    }

Using logical properties enables the media scroller to work in any writing mode and document direction.

### Scroll snapping <a href="#scroll-snapping" class="w-headline-link">#</a>

A scrolling container with overflow can become a snapping viewport with one line of CSS, then it's on children to specify how they'd like to align with that viewport.

    .horizontal-media-scroller {
      --size: 150px;

      display: grid;
      grid-auto-flow: column;
      gap: calc(var(--gap) / 2);
      margin: 0;

      overflow-x: auto;
      overscroll-behavior-inline: contain;

      padding-inline: var(--gap);
      scroll-padding-inline: var(--gap);
      padding-block-end: calc(var(--gap) / 2);

      scroll-snap-type: inline mandatory;

      & figure {
        scroll-snap-align: start;
      }
    }

### Focus <a href="#focus" class="w-headline-link">#</a>

The inspiration for this component comes from its massive popularity on TVs, in App Stores, and more. Many video game platforms use a media scroller very similar to this one, as their primary home screen layout. Focus is a huge UX moment here, not just a small addition. Imagine using this media scroller from your couch with a remote, give that interaction some small enhancements:

    .horizontal-media-scroller a {
      outline-offset: 12px;

      &:focus {
        outline-offset: 7px;
      }

      @media (prefers-reduced-motion: no-preference) {
        & {
          transition: outline-offset .25s ease;
        }
      }
    }

This sets the focus outline style `7px` away from the box, giving it some nice space. If the user has no motion preferences around reducing motion, the offset is transitioned, giving subtle motion to the focus event.

This focus state is an opportunity for unique and brand defining micro-interaction UX

### Roving index <a href="#roving-index" class="w-headline-link">#</a>

Gamepad and keyboard users need special attention in these longs lists of scrolling content and options. The common pattern for solving this is called [roving index](https://web.dev/control-focus-with-tabindex/). It's when a container of items is keyboard focused but only 1 child is allowed to hold focus at a time. This single focusable item at a time experience is designed to allow bypassing the potentially long list of items, as opposed to pressing tab 50+ times to reach the end.

There's 300 items in that first scroller of the demo. We can do better than make them traverse all of them to reach the next section.

To create this experience, JavaScript needs to observe keyboard events and focus events. I created [a small open source library on npm](https://github.com/argyleink/roving-ux) to help make this user experience easy to achieve. Here's how to use it for the 3 scrollers:

    import {rovingIndex} from 'roving-ux';

    rovingIndex({
      element: someElement
    });

This demo queries the document for the scrollers and for each of them calls the `rovingIndex()` function. Pass the `rovingIndex()` the element to get the roving experience, like a list container, and a target query selector, in case the focus targets aren't direct descendants.

    document.querySelectorAll('.horizontal-media-scroller')
      .forEach(scroller =>
        rovingIndex({
          element: scroller,
          target: 'a',
    }))

To learn more about this effect, see the open source library [roving-ux](https://github.com/argyleink/roving-ux).

### Aspect-ratio <a href="#aspect-ratio" class="w-headline-link">#</a>

As of writing this post, the [support for `aspect-ratio`](https://caniuse.com/mdn-css_properties_aspect-ratio) is behind a flag in Firefox but available in Chromium browsers or set top boxes. Since the media scroller grid layout only specifies direction and spacing, the sizing can change inside a media query which feature checks for aspect-ratio support. Progressive enhancement into some more dynamic media scrollers.

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format" alt="A box with 4:4 aspect ratio is shown next to the other design ratios used of 16:9 and 4:3" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/ffm4hCXrnxKiLcBNNigP.png?auto=format&amp;w=1600 1600w" width="800" height="324" />

    @supports (aspect-ratio: 1) {
      .horizontal-media-scroller figure > picture {
        inline-size: auto; /* for a block-size driven ratio */
        aspect-ratio: 1; /* boxes by default */

        @nest section:nth-child(2) & {
          aspect-ratio: 16/9;
        }

        @nest section:nth-child(3) & {
          /* double the size of the others */
          block-size: calc(var(--size) * 2);
          aspect-ratio: 4/3;

          /* adjust size to fit more items into the viewport */
          @media (width <= 480px) {
            block-size: calc(var(--size) * 1.5);
          }
        }
      }
    }

If the browser supports `aspect-ratio` syntax, the media scroller pictures are upgraded to `aspect-ratio` sizing. Using the draft nesting syntax, each picture changes its aspect ratio depending if it's the first, second, or third rows. The [nest syntax](https://drafts.csswg.org/css-nesting-1/) also allows setting some small viewport adjustments, right there with the other sizing logic.

With that CSS, as the feature is available in more browser engines, an easy to manage but more visually appealing layout will render.

### Prefers reduced data <a href="#prefers-reduced-data" class="w-headline-link">#</a>

While this next technique is only available [behind a flag](about://flags/#enable-experimental-web-platform-features) in [Canary](https://www.google.com/chrome/canary/), I wanted to share how I could save a considerable amount of page load time and data use with a few lines of CSS. The `prefers-reduced-data` media query from [level 5](https://drafts.csswg.org/mediaqueries-5/) allows asking if the device is in any reduced data states, like a data saver mode. If it is, I can modify the document, and in this case, hide the images.

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format" alt="ALT_TEXT_HERE" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/PRhulaSe06O9XbM9V2hb.png?auto=format&amp;w=1600 1600w" width="800" height="502" />

    figure {
      @media (prefers-reduced-data: reduce) {
        & {
          min-inline-size: var(--size);

          & > picture {
            display: none;
          }
        }
      }
    }

The content is still navigable but without the cost of the heavy images being downloaded. Here's the site before adding the `prefers-reduced-data` CSS:

(7 requests, 100kb of resources in 131ms)

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format" alt="ALT_TEXT_HERE" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/63Zcpf05AN5sarJxTHE9.png?auto=format&amp;w=1600 1600w" width="800" height="841" />

Here's the site performance after adding the `prefers-reduced-data` CSS:

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format" alt="ALT_TEXT_HERE" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/nhNncPluLqgEabbRkKaG.png?auto=format&amp;w=1600 1600w" width="800" height="841" />

(71 requests, 1.2mb of resources in 1.07s)

64 fewer requests, that would be the ~60 images within the viewport (tests taken on a wide screen display) of this browser tab, a page load boost of ~80%, and 10% of the data over the wire. Pretty powerful CSS.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Now that you know how I did it, how would you?! 🙂

Let's diversify our approaches and learn all the ways to build on the web. Create a Codepen or host your own demo, tweet me with it, and I'll add it to the Community remixes section below.

**Source**

- [GUI Challenges source on GitHub](https://github.com/argyleink/gui-challenges)
- [Media scroller Codepen starter](https://codepen.io/argyleink/pen/bGgyOGP)

## Community remixes <a href="#community-remixes" class="w-headline-link">#</a>

_Nothing to see here yet!_

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: May 12, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/building-a-media-scroller-component/index.md)

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
