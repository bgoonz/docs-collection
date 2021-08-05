<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/uz0bDoJvK4kbtjozekGA.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#centering-in-css" class="w-toc__header--link">Centering in CSS</a>

- [The challenge](#the-challenge)
- [The Resilience Ringer](#the-resilience-ringer)
- [The 5 Contestants](#the-5-contestants)
- [1. Content Center](#1.-content-center)
- [2. Gentle Flex](#2.-gentle-flex)
- [3. Autobot](#3.-autobot)
- [4. Fluffy Center](#4.-fluffy-center)
- [5. Pop & Plop](#5.-pop-and-plop)
- [The winner](#the-winner)
- [MVP](#mvp)
- [Conclusion](#conclusion)
- [Community remixes](#community-remixes)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Centering in CSS

Follow 5 centering techniques as they go through a series of tests to see which one is the most resilient to change.

Dec 16, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

Centering in CSS is a notorious challenge, fraught with jokes and mockery. 2020 CSS is all grown up and now we can laugh at those jokes honestly, not through clenched teeth.

If you prefer video, here's a YouTube version of this post:

## The challenge <a href="#the-challenge" class="w-headline-link">#</a>

**There are difference types of centering.** From differing use cases, number of things to center, etc. In order to demonstrate a rationale behind "a winning" centering technique, I created The Resilience Ringer. It's a series of stress tests for each centering strategy to balance within and you to observe their performance. At the end, I reveal the highest scoring technique, as well as a "most valuable." Hopefully you walk away with new centering techniques and solutions.

### The Resilience Ringer <a href="#the-resilience-ringer" class="w-headline-link">#</a>

The Resilience Ringer is a representation of my beliefs that a centering strategy should be resilient to international layouts, variable sized viewports, text edits and dynamic content. These tenets helped shape the following resilience tests for the centering techniques to endure:

1.  **Squished:** centering should be able to handle changes to width
2.  **Squashed:** centering should be able to handle changes to height
3.  **Duplicate:** centering should be dynamic to number of items
4.  **Edit:** centering should be dynamic to length and language of content
5.  **Flow:** centering should be document direction and writing mode agnostic

The winning solution should demonstrate its resilience by keeping contents in center while being squished, squashed, duplicated, edited, and swapped to various language modes and directions. Trustworthy and resilient center, a safe center.

#### Legend <a href="#legend" class="w-headline-link">#</a>

I've provided some visual color hinting to help you keep some meta information in context:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4K35cL1tVpEsGqb4FgKp.png?auto=format&amp;w=1600 1600w" width="800" height="438" /></figure>-   A pink border indicates ownership of centering styles
-   The grey box is the background on the container which seeks to have centered items
-   Each child has a white background color so you can see any effects the centering technique has on child box sizes (if any)

## The 5 Contestants <a href="#the-5-contestants" class="w-headline-link">#</a>

5 centering techniques enter the Resilience Ringer, only one will receive the Resilience Crown 👸.

### 1. Content Center <a href="#1.-content-center" class="w-headline-link">#</a>

Editing and duplicating content with [VisBug](https://github.com/GoogleChromeLabs/ProjectVisBug#visbug)

1.  **Squish**: great!
2.  **Squash**: great!
3.  **Duplicate**: great!
4.  **Edit**: great!
5.  **Flow**: great!

It's going to be hard to beat the conciseness of `display: grid` and the `place-content` shorthand. Since it centers and justifies children collectively, it's a solid centering technique for groups of elements meant to be read.

    .content-center {
      display: grid;
      place-content: center;
      gap: 1ch;
    }

Pros

- Content is centered even under constrained space and overflow
- Centering edits and maintenance are all in one spot
- Gap guarantees equal spacing amongst _n_ children
- Grid creates rows by default

Cons

- The widest child (`max-content`) sets the width for all the rest. This will be discussed more in [Gentle Flex](#gentle-flex).

**Great for** macro layouts containing paragraphs and headlines, prototypes, or generally things that need legible centering.

`place-content` is not exclusive to `display: grid`. `display: flex` can also benefit from `place-content` and `place-item` [shorthands](https://codepen.io/argyleink/pen/PoqWOPZ).

### 2. Gentle Flex <a href="#2.-gentle-flex" class="w-headline-link">#</a>

1.  **Squish:** great!
2.  **Squash:** great!
3.  **Duplicate:** great!
4.  **Edit:** great!
5.  **Flow:** great!

Gentle Flex is a truer centering-_only_ strategy. It's soft and gentle, because unlike `place-content: center`, no children's box sizes are changed during the centering. As gently as possible, all items are stacked, centered, and spaced.

    .gentle-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1ch;
    }

Pros

- Only handles alignment, direction, and distribution
- Edits and maintenance are all in one spot
- Gap guarantees equal spacing amongst _n_ children

Cons

- Most lines of code

**Great for** both macro and micro layouts.

**Key Term**: **Macro layouts** are like states or territories of a country: very high-level, large coverage zones. The zones created by macro layouts tend to contain more layouts. The less surface the layout covers, the less of a macro layout it becomes. As a layout covers less surface area or contains less layouts, it becomes more of a micro layout.

### 3. Autobot <a href="#3.-autobot" class="w-headline-link">#</a>

1.  **Squish:** great
2.  **Squash:** great
3.  **Duplicate:** fine
4.  **Edit:** great
5.  **Flow:** great

The container is set to flex with no alignment styles, while the direct children are styled with auto margins. There's something nostalgic and wonderful about `margin: auto` working on all sides of the element.

    .autobot {
      display: flex;
    }
    .autobot > * {
      margin: auto;
    }

Pros

- Fun trick
- Quick and dirty

Cons

- Awkward results when overflowing
- Reliance on distribution instead of gap means layouts can occur with children touching sides
- Being "pushed" into position doesn't seem optimal and can result in a change to the child's box size

**Great for** centering icons or pseudo-elements.

### 4. Fluffy Center <a href="#4.-fluffy-center" class="w-headline-link">#</a>

1.  **Squish:** bad
2.  **Squash:** bad
3.  **Duplicate:** bad
4.  **Edit:** great!
5.  **Flow:** great! (so long as you use logical properties)

Contestant "fluffy center" is by far our tastiest sounding contender, and is the only centering technique that's entirely element/child owned. See our solo inner pink border!?

    .fluffy-center {
      padding: 10ch;
    }

Pros

- Protects content
- Atomic
- Every test is secretly containing this centering strategy
- Word space is gap

Cons

- Illusion of not being useful
- There's a clash between the container and the items, naturally since each are being very firm about their sizing

**Great for** word or phrase-centric centering, tags, pills, buttons, chips, and more.

### 5. Pop & Plop <a href="#5.-pop-and-plop" class="w-headline-link">#</a>

1.  **Squish:** okay
2.  **Squash:** okay
3.  **Duplicate:** bad
4.  **Edit:** fine
5.  **Flow:** fine

This "pops" because the absolute positioning pops the element out of normal flow. The "plop" part of the names comes from when I find it most useful: plopping it on top of other stuff. It's a classic and handy overlay centering technique that's flexible and dynamic to content size. Sometimes you just need to plop UI on top of other UI.

Pros

- Useful
- Reliable
- When you need it, it’s invaluable

Cons

- Code with negative percentage values
- Requires `position: relative` to force a containing block
- Early and awkward line breaks
- There can be only 1 per containing block without additional effort

**Great for** modals, toasts and messages, stacks and depth effects, popovers.

## The winner <a href="#the-winner" class="w-headline-link">#</a>

If I was on an island and could only have 1 centering technique, it would be…

\[drum roll\]

**Gentle Flex** 🎉

    .gentle-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1ch;
    }

You can always find it in my stylesheets because it's useful for both macro and micro layouts. It's an all-around reliable solution with results that match my expectations. Also, because I'm an intrinsic sizing junkie, I tend to graduate into this solution. True, it's a lot to type out, but the benefits it provides outweighs the extra code.

### MVP <a href="#mvp" class="w-headline-link">#</a>

**Fluffy Center**

    .fluffy-center {
      padding: 2ch;
    }

Fluffy Center is so micro that it's easy to overlook as a centering technique, but it's a staple of my centering strategies. It's so atomic that sometimes I forget I'm using it.

### Conclusion <a href="#conclusion" class="w-headline-link">#</a>

What types of things break your centering strategies? What other challenges could be added to the resilience ringer? I considered translation and an auto-height switch on the container… what else!?

Now that you know how I did it, how would you?! Let's diversify our approaches and learn all the ways to build on the web. Follow the codelab with this post to create your own centering example, just like the ones in this post. [Tweet me](https://twitter.com/argyleink) your version, and I'll add it to the [Community remixes](#community-remixes) section below.

## Community remixes <a href="#community-remixes" class="w-headline-link">#</a>

- [CSS Tricks](https://css-tricks.com/) with a [blog post](https://css-tricks.com/centering-in-css/)

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/layout/" class="w-chip">Layout</a>

<span class="w-mr--sm"> Last updated: Dec 16, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/centering-in-css/index.md)

## Codelabs

See it in action

Learn more and put this guide into action.

- <a href="/codelab-centering-in-css/" class="w-callout__link w-callout__link--codelab">Codelab: Centering in CSS</a>

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
