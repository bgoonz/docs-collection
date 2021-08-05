<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format" alt="Option screen with illustrated characters and a moving blue target." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/FHGNLoi8kcbaHlFTYb4H.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#web-animations-api-improvements-in-chromium-84" class="w-toc__header--link">Web Animations API improvements in Chromium 84</a>

- [Getting started](#getting-started)
- [Beyond element.animate()](<#beyond-element.animate()>)
- [Orchestrating animations with promises](#orchestrating-animations-with-promises)
- [Example: Play, pause, and reverse](#example:-play-pause-and-reverse)
- [Example: Dynamic interactions with partial keyframes](#example:-dynamic-interactions-with-partial-keyframes)
- [Performance improvements with replaceable animations](#performance-improvements-with-replaceable-animations)
- [Smoother animations with composite modes](#smoother-animations-with-composite-modes)
- [What's next for the Web Animations API](#what's-next-for-the-web-animations-api)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Web Animations API improvements in Chromium 84

Orchestrating animations with promises, performance improvements with replaceable animations, smoother animations with composite modes, and more.

May 27, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/animations" class="w-post-signpost__link">Animations</a>

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/IQ4fOKz2TfwgCfiF4AZv.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kevin Ellis" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/IQ4fOKz2TfwgCfiF4AZv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/IQ4fOKz2TfwgCfiF4AZv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/IQ4fOKz2TfwgCfiF4AZv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/IQ4fOKz2TfwgCfiF4AZv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/IQ4fOKz2TfwgCfiF4AZv.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kevinellis/)

<a href="/authors/kevinellis/" class="w-author__name-link">Kevin Ellis</a>

When used correctly, [animations improve user perception and memory](https://www.researchgate.net/publication/229351931_The_Effects_of_Animation_and_Format_on_the_Perception_and_Memory_of_Online_Advertising) of your brand, guide user actions, and help users navigate your application—providing context in a digital space.

The [Web Animations API](https://www.w3.org/TR/web-animations-1/) is a tool that enables developers to write [imperative animations with JavaScript](https://www.youtube.com/watch?v=WaNoqBAp8NI). It was written to underpin both CSS animation and transition implementations and enable future effects to be developed, as well as existing effects to be composed and timed.

While [Firefox](https://platform-status.mozilla.org/#web-animations) and [Safari](https://webkit.org/status/#specification-web-animations) have already implemented the full set of spec [features](https://caniuse.com/#feat=web-animation), Chromium 84 brings a slew of previously unsupported features to [Chrome and Edge](https://developer.microsoft.com/en-us/microsoft-edge/status/webanimationsjavascriptapi/) enabling cross-browser interoperability.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format" alt="The long history of the Web Animations API in Chromium." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mdsjLgrX6rngEnBZo5Nu.png?auto=format&amp;w=1600 1600w" width="800" height="374" /><figcaption>The long history of the Web Animations API in Chromium.</figcaption></figure>Getting started <a href="#getting-started" class="w-headline-link">#</a>

Creating an animation via the Web Animations API should feel very familiar if you've used `@keyframe` rules. First you'll need to create a Keyframe Object. What might look like [this](https://codepen.io/una/pen/RwWMvPw) in CSS:

    @keyframes openAnimation {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

would look like [this](https://codepen.io/una/pen/abvYXJX) in JavaScript:

    const openAnimation = [
      { transform: 'scale(0)' },
      { transform: 'scale(1)' },
    ];

Where you set parameters for animation in CSS:

    .modal {
      animation: openAnimation 1s 1 ease-in;
    }

you would set in JS:

    document.querySelector('.modal').animate(
        openAnimation, {
          duration: 1000, // 1s
          iterations: 1, // single iteration
          easing: 'ease-in' // easing function
        }
    );

The amount of code is about the same, but with JavaScript, you get a couple of superpowers that you don't have with CSS alone. This includes the ability to sequence effects, and an increased control of their play states.

Hyphenated property names become camel case when used in keyframes (e.g. `background-color` to `backgroundColor`)

### Beyond `element.animate()` <a href="#beyond-element.animate()" class="w-headline-link">#</a>

However, with the update, the Web Animations API is no longer restricted to animations created via `element.animate()`. We can manipulate CSS animations and transitions as well.

`getAnimations()` is a method that returns all animations on an element regardless of whether it was created via `element.animate()` or via CSS rules (CSS animation or transition). Here is an example of what this looks like:

You first `"get"` the keyframes for the transition to determine where we are transitioning from. Then, you create two new opacity animations, enabling the cross fade effect. Once the cross-fade completes, you delete the copy.

## Orchestrating animations with promises <a href="#orchestrating-animations-with-promises" class="w-headline-link">#</a>

In Chromium 84, you now have two methods that can be used with promises: `animation.ready` and `animation.finished`.

- `animation.ready` enables you to wait for pending changes to take effect (i.e. switching between playback control methods such as play and pause).
- `animation.finished` provides a means of executing custom JavaScript code when an animation is complete.

Let's continue with our example, and create an orchestrated animation chain with `animation.finished`. Here, you have a vertical transformation (`scaleY`), followed by a horizontal transformation (`scaleX`), followed by an opacity change on a child element:

Applying transformations and opacity to an opening modal element. [See Demo on Codepen](https://codepen.io/una/pen/dyYKJMz)

    const transformAnimation = modal.animate(openModal, openModalSettings);
    transformAnimation.finished.then(() => { text.animate(fadeIn, fadeInSettings)});

We've chained these animations using `animation.finished.then()` prior to executing the next animation set in the chain. This way, the animations appear in order, and you are even applying effects to different target elements with different options set (such as speed and ease).

Within CSS, this would be cumbersome to recreate, especially when applying unique, yet sequenced animations to multiple elements. You'd have to use a `@keyframe`, sort out the correct timing percentages to place the animations, and use `animation-delay` prior to triggering the animations in the sequence.

### Example: Play, pause, and reverse <a href="#example:-play-pause-and-reverse" class="w-headline-link">#</a>

What can open, should close! Luckily, since [Chromium 39](https://developers.google.com/web/updates/2014/12/web-animation-playback), the Web Animations API has provided us the ability to play, pause, and reverse our animations.

You can take the above animation, and give it a smooth, reversed animation when clicking the button again using `.reverse()`. This way, you can create a smoother and more contextual interaction for our modal.

An example of a modal opening and closing upon button click. [See Demo on Glitch](https://glitch.com/~waapi-promises)

What you can do is create two play-pending animations (`openModal`, and an inline opacity transformation), and then pause one of the animations, delaying it until the other is finished. You can then use promises to wait for each to be finished before playing. Finally, you can check to see if a flag is set, and then reverse each animation.

### Example: Dynamic interactions with partial keyframes <a href="#example:-dynamic-interactions-with-partial-keyframes" class="w-headline-link">#</a>

Retargeting example, where a mouse click adjusts the animation to a new location. [See Demo on Glitch](https://glitch.com/~waapi-retargetting)

    selector.animate([{transform: `translate(${x}px, ${y}px)`}],
        {duration: 1000, fill: 'forwards'});

In this example, there is only one keyframe, and no specified start position. This is an example of using **partial keyframes**. The mouse handler does a few things here: it sets a new end location and triggers a new animation. The new start position is inferred from the current underlying position.

New transitions can be triggered while existing ones are still running. This means that the current transition is interrupted, and a new one is created.

## Performance improvements with replaceable animations <a href="#performance-improvements-with-replaceable-animations" class="w-headline-link">#</a>

When creating animations based on events, such as on `'mousemove'`, a new animation is created each time, which can quickly consume memory and degrade performance. To address this problem, replaceable animations were introduced in Chromium 83, enabling automated cleanup, where finished animations are flagged as replaceable and automatically removed if replaced by another finished animation. Consider the following example:

A comet trail animates when the mouse moves. [See Demo on Glitch](https://glitch.com/~waapi-replaced)

    elem.addEventListener('mousemove', evt => {
     rectangle.animate(
       { transform: translate(${evt.clientX}px, ${evt.clientY}px) },
       { duration: 500, fill: 'forwards' }
     );
    });

Each time the mouse moves, the browser re-calculates the position for each ball in the comet trail and creates an animation to this new point. The browser now knows to remove old animations (enabling replacement) when:

1.  The animation is finished.
2.  There is one or more animations higher in composite ordering that are also finished.
3.  The new animations are animating the same properties.

You can see exactly how many animations are being replaced by tallying up a counter with each removed animation, using `anim.onremove` to trigger the counter.

There are a few additional methods to take your animation control even further:

- `animation.replaceState()` provides a means of tracking whether an animation is active, persisted, or removed.
- `animation.commitStyles()` updates the style of an element based on the underlying style along with all animations on the element in the composite order.
- `animation.persist()` marks an animation as non-replaceable.

`animation.commitStyles()` and `animation.persist()` are commonly used with compositing modes, such as "add". Check out the composite modes demo below to see them in action.

## Smoother animations with composite modes <a href="#smoother-animations-with-composite-modes" class="w-headline-link">#</a>

With the Web Animations API, you can now set the composite mode of your animations, meaning they can be additive or accumulative, in addition to the default mode of "replace". [Composite modes](https://css-tricks.com/additive-animation-web-animations-api/) allow developers to write distinct animations and have control over how effects are combined. Three composite modes are now supported: `'replace'` (the default mode), `'add'`, and `'accumulate'`.

When you composite animations, a developer can write short, distinct effects and see them combined together. In the example below, we are applying a rotation and scale keyframe to each box, with the only adjustment being the composite mode, added as an option:

A demo showing the default, add, and accumulate composite modes. [See Demo on Glitch](https://glitch.com/~waapi-composite-demos)

In the default `'replace'` composite mode, the final animation replaces the transform property and ends up at `rotate(360deg) scale(1.4)`. For `'add'`, composite adds the rotation and multiplies the scale, resulting in a final state of `rotate(720deg) scale(1.96)`. `'accumulate'` combines the transformations, resulting in `rotate(720deg) scale(1.8)`. For more on the intricacies of these composite modes, check out [The CompositeOperation and CompositeOperationOrAuto enumerations](https://www.w3.org/TR/web-animations-1/#the-compositeoperation-enumeration) from the Web Animations spec.

Let's take a look at a UI element example:

A bouncy dropdown menu which has two composited animations applied to it. [See Demo on Glitch](https://glitch.com/~waapi-composited)

Here, two `top` animations are composited. The first is a macro-animation, which moves the dropdown by the full height of the menu itself as a slide-in effect from the top of the page, and the second, a micro-animation, applies a little bounce as it hits the bottom. Using the `'add'` composite mode enables a smoother transition.

    const dropDown = menu.animate(
        [
          { top: `${-menuHeight}px`, easing: 'ease-in' },
          { top: 0 }
        ], { duration: 300, fill: 'forwards' });

      dropDown.finished.then(() => {
        const bounce = menu.animate(
          [
            { top: '0px', easing: 'ease-in' },
            { top: '10px', easing: 'ease-out' },
            { ... }
          ], { duration: 300, composite: 'add' });
      });

### What's next for the Web Animations API <a href="#what&#39;s-next-for-the-web-animations-api" class="w-headline-link">#</a>

These are all exciting additions to animations capabilities in today's browsers, and even more additions are coming down the pipeline. Check out these future specifications for some further reading on what's coming next:

- [Scroll-linked animations with the Houdini API](https://www.w3.org/TR/css-animation-worklet-1/#scroll-timeline)
- [Mutable timelines](https://drafts.csswg.org/web-animations-2/#setting-the-timeline)
- [Group Effect and Synchronization](https://drafts.csswg.org/web-animations-2/#grouping-and-synchronization)

<a href="/tags/animations/" class="w-chip">Animations</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: May 27, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-animations/index.md)

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
