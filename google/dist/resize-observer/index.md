<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format" alt="Growing plants in boxes." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WJ69aw9UMPwsc7ShYvif.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#resizeobserver:-it&#39;s-like-document.onresize-for-elements" class="w-toc__header--link">ResizeObserver: it’s like document.onresize for elements</a>

- [API](#api)
- [Some details](#some-details)
- [What is being reported?](#what-is-being-reported)
- [When is it being reported?](#when-is-it-being-reported)
- [Gotcha](#gotcha)
- [Application](#application)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# ResizeObserver: it’s like document.onresize for elements

`ResizeObserver` lets you know when an element's size changes.

Oct 7, 2016 <span class="w-author__separator">•</span> Updated May 26, 2020

[<img src="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Surma" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/surma/)

<a href="/authors/surma/" class="w-author__name-link">Surma</a>

- <a href="https://twitter.com/DasSurma" class="w-author__link">Twitter</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Before `ResizeObserver`, you had to attach a listener to the document's `resize` event to get notified of any change of the viewport's dimensions. In the event handler, you would then have to figure out which elements have been affected by that change and call a specific routine to react appropriately. If you needed the new dimensions of an element after a resize, you had to call `getBoundingClientRect()` or `getComputedStyle()`, which can cause layout thrashing if you don't take care of batching _all_ your reads and _all_ your writes.

This didn't even cover cases where elements change their size without the main window having been resized. For example, appending new children, setting an element's `display` style to `none`, or similar actions can change the size of an element, its siblings, or its ancestors.

This is why `ResizeObserver` is a useful primitive. It reacts to changes in size of any of the observed elements, independent of what caused the change. It provides access to the new size of the observed elements too.

## API <a href="#api" class="w-headline-link">#</a>

All the APIs with the `Observer` suffix we mentioned above share a simple API design. `ResizeObserver` is no exception. You create a `ResizeObserver` object and pass a callback to the constructor. The callback is passed an array of `ResizeObserverEntry` objects—one entry per observed element—which contains the new dimensions for the element.

    var ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        console.log('Element:', entry.target);
        console.log(`Element size: ${cr.width}px x ${cr.height}px`);
        console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
      }
    });

    // Observe one or multiple elements
    ro.observe(someElement);

## Some details <a href="#some-details" class="w-headline-link">#</a>

### What is being reported? <a href="#what-is-being-reported" class="w-headline-link">#</a>

Generally, a [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) reports the content box of an element through a property called `contentRect`, which returns a [`DOMRectReadOnly`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly) object. The content box is the box in which content can be placed. It is the border box minus the padding.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format" sizes="(min-width: 727px) 727px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CKxpe8LNq2CMPFdtLtVK.png?auto=format&amp;w=1454 1454w" width="727" height="562" /></figure>It's important to note that while `ResizeObserver` *reports* both the dimensions of the `contentRect` and the padding, it only *watches* the `contentRect`. *Don't* confuse `contentRect` with the bounding box of the element. The bounding box, as reported by `getBoundingClientRect()`, is the box that contains the entire element and its descendants. SVGs are an exception to the rule, where `ResizeObserver` will report the dimensions of the bounding box.

As of Chrome 84, `ResizeObserverEntry` has three new properties to provide more detailed information. Each of these properties returns a `ResizeObserverSize` object containing a `blockSize` property and an `inlineSize` property. This information is about the observered element at the time the callback is invoked.

- `borderBoxSize`
- `contentBoxSize`
- `devicePixelContentBoxSize`

All of these items return read-only arrays because in the future it's hoped that they can support elements that have multiple fragments, which occur in multi-column scenarios. For now, these arrays will only contain one element.

Platform support for these properties is limited, but [Firefox already supports](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry#Browser_compatibility) the first two.

### When is it being reported? <a href="#when-is-it-being-reported" class="w-headline-link">#</a>

The spec proscribes that `ResizeObserver` should process all resize events before paint and after layout. This makes the callback of a `ResizeObserver` the ideal place to make changes to your page's layout. Because `ResizeObserver` processing happens between layout and paint, doing so will only invalidate layout, not paint.

### Gotcha <a href="#gotcha" class="w-headline-link">#</a>

You might be asking yourself: what happens if I change the size of an observed element inside the callback to `ResizeObserver`? The answer is: you will trigger another call to the callback right away. Fortunately, `ResizeObserver` has a mechanism to avoid infinite callback loops and cyclic dependencies. Changes will only be processed in the same frame if the resized element is deeper in the DOM tree than the _shallowest_ element processed in the previous callback. Otherwise, they'll get deferred to the next frame.

## Application <a href="#application" class="w-headline-link">#</a>

One thing that `ResizeObserver` allows you to do is to implement per-element media queries. By observing elements, you can imperatively define your design breakpoints and change an element's styles. In the following [example](https://googlechrome.github.io/samples/resizeobserver/), the second box will change its border radius according to its width.

    const ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        entry.target.style.borderRadius =
            Math.max(0, 250 - entry.contentRect.width) + 'px';
      }
    });
    // Only observe the second box
    ro.observe(document.querySelector('.box:nth-child(2)'));

Another interesting example to look at is a chat window. The problem that arises in a typical top-to-bottom conversation layout is scroll positioning. To avoid confusing the user, it is helpful if the window sticks to the bottom of the conversation, where the newest messages appear. Additionally, any kind of layout change (think of a phone going from landscape to portrait or vice versa) should achieve the same.

`ResizeObserver` allows you to write a _single_ piece of code that takes care of _both_ scenarios. Resizing the window is an event that a `ResizeObserver` can capture by definition, but calling `appendChild()` also resizes that element (unless`overflow: hidden` is set), because it needs to make space for the new elements. With this in mind, it takes very few lines to achieve the desired effect:

    const ro = new ResizeObserver(entries => {
      document.scrollingElement.scrollTop =
        document.scrollingElement.scrollHeight;
    });

    // Observe the scrollingElement for when the window gets resized
    ro.observe(document.scrollingElement);
    // Observe the timeline to process new messages
    ro.observe(timeline);

Pretty neat, huh?

From here, I could add more code to handle the case where the user has scrolled up manually and wants scrolling to stick to _that_ message when a new message comes in.

Another use case is for any kind of custom element that is doing its own layout. Until `ResizeObserver`, there was no reliable way to get notified when its dimensions change so its children can be laid out again.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

`ResizeObserver` is available in [most major browsers](https://developer.mozilla.org/docs/Web/API/ResizeObserver#Browser_compatibility). In some cases, that availability is quite recent. There are [some polyfills available](https://github.com/WICG/ResizeObserver/issues/3) but it is not possible to completely duplicate the functionality of `ResizeObserver`. Current implementations either rely on polling or on adding sentinel elements to the DOM. The former will drain your battery on mobile by keeping the CPU busy while the latter modifies your DOM and might mess up styling and other DOM-reliant code.

Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/observe-growth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

<a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/rendering/" class="w-chip">Rendering</a>

<span class="w-mr--sm"> Last updated: May 26, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/resize-observer/index.md)

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
