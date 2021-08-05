<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Y4NLEbOwgTWdMNoxRYXw.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#boldly-link-where-no-one-has-linked-before:-text-fragments" class="w-toc__header--link">Boldly link where no one has linked before: Text Fragments</a>

- [Fragment Identifiers](#fragment-identifiers)
- [Text Fragments](#text-fragments)
- [Browser compatibility](#browser-compatibility)
- [textStart](#textstart)
- [textStart and textEnd](#textstart-and-textend)
- [prefix- and -suffix](#prefix-and-suffix)
- [The full syntax](#the-full-syntax)
- [Creating Text Fragment URLs with a browser extension](#creating-text-fragment-urls-with-a-browser-extension)
- [Multiple text fragments in one URL](#multiple-text-fragments-in-one-url)
- [Mixing element and text fragments](#mixing-element-and-text-fragments)
- [The fragment directive](#the-fragment-directive)
- [Feature detection](#feature-detection)
- [Styling text fragments](#styling-text-fragments)
- [Polyfillability](#polyfillability)
- [Programmatic Text Fragment link generation](#programmatic-text-fragment-link-generation)
- [Obtaining Text Fragments for analytics purposes](#obtaining-text-fragments-for-analytics-purposes)
- [Security](#security)
- [Privacy](#privacy)
- [Disabling text fragments](#disabling-text-fragments)
- [Text fragments in web search](#text-fragments-in-web-search)
- [Conclusion](#conclusion)
- [Related links](#related-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Boldly link where no one has linked before: Text Fragments

Text Fragments let you specify a text snippet in the URL fragment. When navigating to a URL with such a text fragment, the browser can emphasize and/or bring it to the user's attention.

Jun 17, 2020 <span class="w-author__separator">•</span> Updated May 17, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

## Fragment Identifiers <a href="#fragment-identifiers" class="w-headline-link">#</a>

Chrome 80 was a big release. It contained a number of highly anticipated features like [ECMAScript Modules in Web Workers](/module-workers/), [nullish coalescing](https://v8.dev/features/nullish-coalescing), [optional chaining](https://v8.dev/features/optional-chaining), and more. The release was, as usual, announced through a [blog post](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html) on the Chromium blog. You can see an excerpt of the blog post in the screenshot below.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format" alt="Chromium blog post with red boxes around elements with an id attribute." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/egsW6tkKWYI8IHE6JyMZ.png?auto=format&amp;w=800 800w" width="400" height="628" /><figcaption>Chromium blog post with red boxes around elements with an <code>id</code> attribute.</figcaption></figure>You are probably asking yourself what all the red boxes mean. They are the result of running the following snippet in DevTools. It highlights all elements that have an `id` attribute.

    document.querySelectorAll('[id]').forEach((el) => {
      el.style.border = 'solid 2px red';
    });

I can place a deep link to any element highlighted with a red box thanks to the [fragment identifier](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#Fragment) which I then use in the [hash](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) of the page's URL. Assuming I wanted to deep link to the _Give us feedback in our [Product Forums](http://support.google.com/bin/static.py?hl=en&page=portal_groups.cs)_ box in the aside, I could do so by handcrafting the URL [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#HTML1`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#HTML1). As you can see in the Elements panel of the Developer Tools, the element in question has an `id` attribute with the value `HTML1`.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format" alt="Dev Tools showing the id of an element." sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/whVXhhrYwA55S3i4J3l5.png?auto=format&amp;w=1200 1200w" width="600" height="97" /><figcaption>Dev Tools showing the <code>id</code> of an element.</figcaption></figure>If I parse this URL with JavaScript's `URL()` constructor, the different components are revealed. Notice the `hash` property with the value `#HTML1`.

    new URL('https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#HTML1');
    /* Creates a new `URL` object
    URL {
      hash: "#HTML1"
      host: "blog.chromium.org"
      hostname: "blog.chromium.org"
      href: "https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#HTML1"
      origin: "https://blog.chromium.org"
      password: ""
      pathname: "/2019/12/chrome-80-content-indexing-es-modules.html"
      port: ""
      protocol: "https:"
      search: ""
      searchParams: URLSearchParams {}
      username: ""
    }
    */

The fact though that I had to open the Developer Tools to find the `id` of an element speaks volumes about the probability this particular section of the page was meant to be linked to by the author of the blog post.

What if I want to link to something without an `id`? Say I want to link to the _ECMAScript Modules in Web Workers_ heading. As you can see in the screenshot below, the `<h1>` in question does not have an `id` attribute, meaning there is no way I can link to this heading. This is the problem that Text Fragments solve.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format" alt="Dev Tools showing a heading without an id." sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1g4rTS1q5LKHEHnDoF9o.png?auto=format&amp;w=1200 1200w" width="600" height="71" /><figcaption>Dev Tools showing a heading without an <code>id</code>.</figcaption></figure>Text Fragments <a href="#text-fragments" class="w-headline-link">#</a>

The [Text Fragments](https://wicg.github.io/ScrollToTextFragment/) proposal adds support for specifying a text snippet in the URL hash. When navigating to a URL with such a text fragment, the user agent can emphasize and/or bring it to the user's attention.

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

The Text Fragments feature is supported in version 80 and beyond of Chromium-based browsers. At the time of writing, Safari and Firefox have not publicly signaled an intent to implement the feature. See [Related links](#related-links) for pointers to the Safari and Firefox discussions.

**Success**: These links used to not work when served across [client-side redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections#Alternative_way_of_specifying_redirections) that some common services like Twitter use. This issue was tracked as [crbug.com/1055455](https://crbug.com/1055455) and is now fixed. Regular [HTTP redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections#Principle) always worked fine.

For [security](#security) reasons, the feature requires links to be opened in a [`noopener`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener) context. Therefore, make sure to include [`rel="noopener"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) in your `<a>` anchor markup or add [`noopener`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#noopener) to your `Window.open()` list of window functionality features.

### `textStart` <a href="#textstart" class="w-headline-link">#</a>

In its simplest form, the syntax of Text Fragments is as follows: The hash symbol `#` followed by `:~:text=` and finally `textStart`, which represents the [percent-encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) text I want to link to.

    #:~:text=textStart

For example, say that I want to link to the _ECMAScript Modules in Web Workers_ heading in the [blog post announcing features in Chrome 80](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html), the URL in this case would be:

[`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript%20Modules%20in%20Web%20Workers`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript%20Modules%20in%20Web%20Workers)

The text fragment is emphasized like this. If you click the link in a supporting browser like Chrome, the text fragment is highlighted and scrolls into view:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format" alt="Text fragment scrolled into view and highlighted." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/D3jwPrJlvN3FmJo3pADt.png?auto=format&amp;w=800 800w" width="400" height="208" /><figcaption>Text fragment scrolled into view and highlighted.</figcaption></figure>### `textStart` and `textEnd` <a href="#textstart-and-textend" class="w-headline-link">#</a>

Now what if I want to link to the entire _section_ titled _ECMAScript Modules in Web Workers_, not just its heading? Percent-encoding the entire text of the section would make the resulting URL impracticably long.

Luckily there is a better way. Rather than the entire text, I can frame the desired text using the `textStart,textEnd` syntax. Therefore, I specify a couple of percent-encoded words at the beginning of the desired text, and a couple of percent-encoded words at the end of the desired text, separated by a comma `,`.

That looks like this:

[`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript%20Modules%20in%20Web%20Workers,ES%20Modules%20in%20Web%20Workers.`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript%20Modules%20in%20Web%20Workers,ES%20Modules%20in%20Web%20Workers.).

For `textStart`, I have `ECMAScript%20Modules%20in%20Web%20Workers`, then a comma `,` followed by `ES%20Modules%20in%20Web%20Workers.` as `textEnd`. When you click through on a supporting browser like Chrome, the whole section is highlighted and scrolled into view:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format" alt="Text fragment scrolled into view and highlighted." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2yTYmKnjHTnqXkcmHF1F.png?auto=format&amp;w=800 800w" width="400" height="343" /><figcaption>Text fragment scrolled into view and highlighted.</figcaption></figure>Now you may wonder about my choice of `textStart` and `textEnd`. Actually, the slightly shorter URL [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript%20Modules,Web%20Workers.`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript%20Modules,Web%20Workers.) with only two words on each side would have worked, too. Compare `textStart` and `textEnd` with the previous values.

If I take it one step further and now use only one word for both `textStart` and `textEnd`, you can see that I am in trouble. The URL [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript,Workers.`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=ECMAScript,Workers.) is even shorter now, but the highlighted text fragment is no longer the originally desired one. The highlighting stops at the first occurrence of the word `Workers.`, which is correct, but not what I intended to highlight. The problem is that the desired section is not uniquely identified by the current one-word `textStart` and `textEnd` values:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format" alt="Non-intended text fragment scrolled into view and highlighted." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GGbbtHBpsoFyubnISyZw.png?auto=format&amp;w=800 800w" width="400" height="342" /><figcaption>Non-intended text fragment scrolled into view and highlighted.</figcaption></figure>### `prefix-` and `-suffix` <a href="#prefix-and-suffix" class="w-headline-link">#</a>

Using long enough values for `textStart` and `textEnd` is one solution for obtaining a unique link. In some situations, however, this is not possible. On a side note, why did I choose the Chrome 80 release blog post as my example? The answer is that in this release Text Fragments were introduced:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format" alt="Text Fragments announcement blog post excerpt." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yA1p3CijeDbTRwMys9Hq.png?auto=format&amp;w=1600 1600w" width="800" height="200" /><figcaption>Text Fragments announcement blog post excerpt.</figcaption></figure>Notice how in the screenshot above the word "text" appears four times. The forth occurrence is written in a green code font. If I wanted to link to this particular word, I would set `textStart` to `text`. Since the word "text" is, well, only one word, there cannot be a `textEnd`. What now? The URL [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=text`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=text) matches at the first occurrence of the word "Text" already in the heading:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format" alt="Text Fragment matching at the first occurrence of &quot;Text&quot;." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nXxCskUwdCxwxejPSSZW.png?auto=format&amp;w=1600 1600w" width="800" height="209" /><figcaption>Text Fragment matching at the first occurrence of "Text".</figcaption></figure>**Caution**: Note that text fragment matching is case-insensitive.

Luckily there is a solution. In cases like this, I can specify a `prefix​-` and a `-suffix`. The word before the green code font "text" is "the", and the word after is "parameter". None of the other three occurrences of the word "text" has the same surrounding words. Armed with this knowledge, I can tweak the previous URL and add the `prefix-` and the `-suffix`. Like the other parameters, they, too, need to be percent-encoded and can contain more than one word. [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=the-,text,-parameter`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=the-,text,-parameter). To allow the parser to clearly identify the `prefix-` and the `-suffix`, they need to be separated from the `textStart` and the optional `textEnd` with a dash `-`.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format" alt="Text Fragment matching at the desired occurrence of &quot;text&quot;." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3L5BVSMmzGY6xdkabP6.png?auto=format&amp;w=1600 1600w" width="800" height="203" /><figcaption>Text Fragment matching at the desired occurrence of "text".</figcaption></figure>### The full syntax <a href="#the-full-syntax" class="w-headline-link">#</a>

The full syntax of Text Fragments is shown below. (Square brackets indicate an optional parameter.) The values for all parameters need to be percent-encoded. This is especially important for the dash `-`, ampersand `&`, and comma `,` characters, so they are not being interpreted as part of the text directive syntax.

    #:~:text=[prefix-,]textStart[,textEnd][,-suffix]

Each of `prefix-`, `textStart`, `textEnd`, and `-suffix` will only match text within a single [block-level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements), but full `textStart,textEnd` ranges _can_ span multiple blocks. For example, `:~:text=The quick,lazy dog` will fail to match in the following example, because the starting string "The quick" does not appear within a single, uninterrupted block-level element:

    <div>
      The
      <div></div>
      quick brown fox
    </div>
    <div>jumped over the lazy dog</div>

It does, however, match in this example:

    <div>The quick brown fox</div>
    <div>jumped over the lazy dog</div>

### Creating Text Fragment URLs with a browser extension <a href="#creating-text-fragment-urls-with-a-browser-extension" class="w-headline-link">#</a>

Creating Text Fragments URLs by hand is tedious, especially when it comes to making sure they are unique. If you really want to, the specification has some tips and lists the exact [steps for generating Text Fragment URLs](https://wicg.github.io/ScrollToTextFragment/#generating-text-fragment-directives). We provide an open-source browser extension called [Link to Text Fragment](https://github.com/GoogleChromeLabs/link-to-text-fragment) that lets you link to any text by selecting it, and then clicking "Copy Link to Selected Text" in the context menu. This extension is available for the following browsers:

- [Link to Text Fragment for Google Chrome](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
- [Link to Text Fragment for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/link-to-text-fragment/pmdldpbcbobaamgkpkghjigngamlolag)
- [Link to Text Fragment for Mozilla Firefox](https://addons.mozilla.org/firefox/addon/link-to-text-fragment/)
- [Link to Text Fragment for Apple Safari](https://apps.apple.com/app/link-to-text-fragment/id1532224396)

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format" alt="Link to Text Fragment browser extension." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASLtFCPoHvyTKrAtKAv4.png?auto=format&amp;w=1600 1600w" width="800" height="500" /><figcaption><a href="https://github.com/GoogleChromeLabs/link-to-text-fragment">Link to Text Fragment</a> browser extension.</figcaption></figure>### Multiple text fragments in one URL <a href="#multiple-text-fragments-in-one-url" class="w-headline-link">#</a>

Note that multiple text fragments can appear in one URL. The particular text fragments need to be separated by an ampersand character `&`. Here is an example link with three text fragments: [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=Text%20URL%20Fragments&text=text,-parameter&text=:~:text=On%20islands,%20birds%20can%20contribute%20as%20much%20as%2060%25%20of%20a%20cat's%20diet`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=Text%20URL%20Fragments&text=text,-parameter&text=:~:text=On%20islands,%20birds%20can%20contribute%20as%20much%20as%2060%25%20of%20a%20cat's%20diet).

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format" alt="Three text fragments in one URL." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ffsq7aoSoVd9q6r5cquY.png?auto=format&amp;w=1600 1600w" width="800" height="324" /><figcaption>Three text fragments in one URL.</figcaption></figure>### Mixing element and text fragments <a href="#mixing-element-and-text-fragments" class="w-headline-link">#</a>

Traditional element fragments can be combined with text fragments. It is perfectly fine to have both in the same URL, for example, to provide a meaningful fallback in case the original text on the page changes, so that the text fragment does not match anymore. The URL [`https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#HTML1:~:text=Give%20us%20feedback%20in%20our%20Product%20Forums.`](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#HTML1:~:text=Give%20us%20feedback%20in%20our%20Product%20Forums.) linking to the _Give us feedback in our [Product Forums](http://support.google.com/bin/static.py?hl=en&page=portal_groups.cs)_ section contains both an element fragment (`HTML1`), as well as a text fragment (`text=Give%20us%20feedback%20in%20our%20Product%20Forums.`):

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format" alt="Linking with both element fragment and text fragment." sizes="(min-width: 237px) 237px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/JRKCM6Ihrq8sgRZRiymr.png?auto=format&amp;w=474 474w" width="237" height="121" /><figcaption>Linking with both element fragment and text fragment.</figcaption></figure>### The fragment directive <a href="#the-fragment-directive" class="w-headline-link">#</a>

There is one element of the syntax I have not explained yet: the fragment directive `:~:`. To avoid compatibility issues with existing URL element fragments as shown above, the [Text Fragments specification](https://wicg.github.io/ScrollToTextFragment/) introduces the fragment directive. The fragment directive is a portion of the URL fragment delimited by the code sequence `:~:`. It is reserved for user agent instructions, such as `text=`, and is stripped from the URL during loading so that author scripts cannot directly interact with it. User agent instructions are also called _directives_. In the concrete case, `text=` is therefore called a _text directive_.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To detect support, test for the read-only `fragmentDirective` property on `document`. The fragment directive is a mechanism for URLs to specify instructions directed to the browser rather than the document. It is meant to avoid direct interaction with author script, so that future user agent instructions can be added without fear of introducing breaking changes to existing content. One potential example of such future additions could be translation hints.

    if ('fragmentDirective' in document) {
      // Text Fragments is supported.
    }

From Chrome 80 to Chrome 85, the `fragmentDirective` property was defined on `Location.prototype`. For details on this change, see [WICG/scroll-to-text-fragment\#130](https://github.com/WICG/scroll-to-text-fragment/issues/130).

Feature detection is mainly intended for cases where links are dynamically generated (for example by search engines) to avoid serving text fragments links to browsers that do not support them.

### Styling text fragments <a href="#styling-text-fragments" class="w-headline-link">#</a>

By default, browsers style text fragments the same way they style [`mark`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark) (typically black on yellow, the CSS [system colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors) for `mark`). The user-agent stylesheet contains CSS that looks like this:

    :root::target-text {
      color: MarkText;
      background: Mark;
    }

As you can see, the browser exposes a pseudo selector [`::target-text`](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) that you can use to customize the applied highlighting. For example, you could design your text fragments to be black text on a red background. As always, be sure to [check the color contrast](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference#contrast) so your override styling does not cause accessibility issues and make sure the highlighting actually visually stands out from the rest of the content.

    :root::target-text {
      color: black;
      background-color: red;
    }

### Polyfillability <a href="#polyfillability" class="w-headline-link">#</a>

The Text Fragments feature can be polyfilled to some extent. We provide a [polyfill](https://github.com/GoogleChromeLabs/text-fragments-polyfill), which is used internally by the [extension](https://github.com/GoogleChromeLabs/link-to-text-fragment), for browsers that do not provide built-in support for Text Fragments where the functionality is implemented in JavaScript.

### Programmatic Text Fragment link generation <a href="#programmatic-text-fragment-link-generation" class="w-headline-link">#</a>

The [polyfill](https://github.com/GoogleChromeLabs/text-fragments-polyfill) contains a file `fragment-generation-utils.js` that you can import and use to generate Text Fragment links. This is outlined in the code sample below:

    const { generateFragment } = await import('https://unpkg.com/text-fragments-polyfill/dist/fragment-generation-utils.js');
    const result = generateFragment(window.getSelection());
    if (result.status === 0) {
      let url = `${location.origin}${location.pathname}${location.search}`;
      const fragment = result.fragment;
      const prefix = fragment.prefix ?
        `${encodeURIComponent(fragment.prefix)}-,` :
        '';
      const suffix = fragment.suffix ?
        `,-${encodeURIComponent(fragment.suffix)}` :
        '';
      const textStart = encodeURIComponent(fragment.textStart);
      const textEnd = fragment.textEnd ?
        `,${encodeURIComponent(fragment.textEnd)}` :
        '';
      url += `#:~:text=${prefix}${textStart}${textEnd}${suffix}`;
      console.log(url);
    }

### Obtaining Text Fragments for analytics purposes <a href="#obtaining-text-fragments-for-analytics-purposes" class="w-headline-link">#</a>

Plenty of sites use the fragment for routing, which is why browsers strip out Text Fragments so as to not break those pages. There is an [acknowledged need](https://github.com/WICG/scroll-to-text-fragment/issues/128) to expose Text Fragments links to pages, for example, for analytics purposes, but the proposed solution is not implemented yet. As a workaround for now, you can use the code below to extract the desired information.

    new URL(performance.getEntries().find(({ type }) => type === 'navigate').name).hash;

### Security <a href="#security" class="w-headline-link">#</a>

Text fragment directives are invoked only on full (non-same-page) navigations that are the result of a [user activation](https://html.spec.whatwg.org/multipage/interaction.html#tracking-user-activation). Additionally, navigations originating from a different origin than the destination will require the navigation to take place in a [`noopener`](https://html.spec.whatwg.org/multipage/links.html#link-type-noopener) context, such that the destination page is known to be sufficiently isolated. Text fragment directives are only applied to the main frame. This means that text will not be searched inside iframes, and iframe navigation will not invoke a text fragment.

### Privacy <a href="#privacy" class="w-headline-link">#</a>

It is important that implementations of the Text Fragments specification do not leak whether a text fragment was found on a page or not. While element fragments are fully under the control of the original page author, text fragments can be created by anyone. Remember how in my example above there was no way to link to the _ECMAScript Modules in Web Workers_ heading, since the `<h1>` did not have an `id`, but how anyone, including me, could just link to anywhere by carefully crafting the text fragment?

Imagine I ran an evil ad network `evil-ads.example.com`. Further imagine that in one of my ad iframes I dynamically created a hidden cross-origin iframe to `dating.example.com` with a Text Fragment URL `dating.example.com#:~:text=Log%20Out` once the user interacts with the ad. If the text "Log Out" is found, I know the victim is currently logged in to `dating.example.com`, which I could use for user profiling. Since a naive Text Fragments implementation might decide that a successful match should cause a focus switch, on `evil-ads.example.com` I could listen for the `blur` event and thus know when a match occurred. In Chrome, we have implemented Text Fragments in such a way that the above scenario cannot happen.

Another attack might be to exploit network traffic based on scroll position. Assume I had access to network traffic logs of my victim, like as the admin of a company intranet. Now imagine there existed a long human resources document _What to Do If You Suffer From…_ and then a list of conditions like _burn out_, _anxiety_, etc. I could place a tracking pixel next to each item on the list. If I then determine that loading the document temporally co-occurs with the loading of the tracking pixel next to, say, the _burn out_ item, I can then, as the intranet admin, determine that an employee has clicked through on a text fragment link with `:~:text=burn%20out` that the employee may have assumed was confidential and not visible to anyone. Since this example is somewhat contrived to begin with and since its exploitation requires _very_ specific preconditions to be met, the Chrome security team evaluated the risk of implementing scroll on navigation to be manageable. Other user agents may decide to show a manual scroll UI element instead.

For sites that wish to opt-out, Chromium supports a [Document Policy](https://wicg.github.io/document-policy/) header value that they can send so user agents will not process Text Fragment URLs.

    Document-Policy: force-load-at-top

## Disabling text fragments <a href="#disabling-text-fragments" class="w-headline-link">#</a>

The easiest way for disabling the feature is by using an extension that can inject HTTP response headers, for example, [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj) (not a Google product), to insert a response (_not_ request) header as follows:

    Document-Policy: force-load-at-top

Another, more involved, way to opt out is by using the enterprise setting [`ScrollToTextFragmentEnabled`](https://cloud.google.com/docs/chrome-enterprise/policies/?policy=ScrollToTextFragmentEnabled). To do this on macOS, paste the command below in the terminal.

    defaults write com.google.Chrome ScrollToTextFragmentEnabled -bool false

On Windows, follow the documentation on the [Google Chrome Enterprise Help](https://support.google.com/chrome/a/answer/9131254?hl=en) support site.

**Warning**: Only try this when you know what you are doing.

## Text fragments in web search <a href="#text-fragments-in-web-search" class="w-headline-link">#</a>

For some searches, the search engine Google provides a quick answer or summary with a content snippet from a relevant website. These _featured snippets_ are most likely to show up when a search is in the form of a question. Clicking a featured snippet takes the user directly to the featured snippet text on the source web page. This works thanks to automatically created Text Fragments URLs.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format" alt="Google search engine results page showing a featured snippet. The status bar shows the Text Fragments URL." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KbZgnGxZOOymLxYPZyGH.png?auto=format&amp;w=1600 1600w" width="800" height="451" /><figcaption>Google search engine results page showing a featured snippet. The status bar shows the Text Fragments URL.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format" alt="After clicking through, the relevant section of the page is scrolled into view." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4Q7zk9xBnb2uw8GRaLnU.png?auto=format&amp;w=1600 1600w" width="800" height="451" /><figcaption>After clicking through, the relevant section of the page is scrolled into view.</figcaption></figure>Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Text Fragments URL is a powerful feature to link to arbitrary text on webpages. The scholarly community can use it to provide highly accurate citation or reference links. Search engines can use it to deeplink to text results on pages. Social networking sites can use it to let users share specific passages of a webpage rather than inaccessible screenshots. I hope you start [using Text Fragment URLs](https://blog.chromium.org/2019/12/chrome-80-content-indexing-es-modules.html#:~:text=Text%20URL%20Fragments&text=text,-parameter&text=:~:text=On%20islands,%20birds%20can%20contribute%20as%20much%20as%2060%25%20of%20a%20cat's%20diet) and find them as useful as I do. Be sure to install the [Link to Text Fragment](https://github.com/GoogleChromeLabs/link-to-text-fragment) browser extension.

## Related links <a href="#related-links" class="w-headline-link">#</a>

- [Spec draft](https://wicg.github.io/scroll-to-text-fragment/)
- [TAG Review](https://github.com/w3ctag/design-reviews/issues/392)
- [Chrome Platform Status entry](https://chromestatus.com/feature/4733392803332096)
- [Chrome tracking bug](https://crbug.com/919204)
- [Intent to Ship thread](https://groups.google.com/a/chromium.org/d/topic/blink-dev/zlLSxQ9BA8Y/discussion)
- [WebKit-Dev thread](https://lists.webkit.org/pipermail/webkit-dev/2019-December/030978.html)
- [Mozilla standards position thread](https://github.com/mozilla/standards-positions/issues/194)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Text Fragments was implemented and specified by [Nick Burris](https://github.com/nickburris) and [David Bokan](https://github.com/bokand), with contributions from [Grant Wang](https://github.com/grantjwang). Thanks to [Joe Medley](https://github.com/jpmedley) for the thorough review of this article. Hero image by [Greg Rakozy](https://unsplash.com/@grakozy) on [Unsplash](https://unsplash.com/photos/oMpAz-DN-9I).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: May 17, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/text-fragments/index.md)

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
