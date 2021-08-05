<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format" alt="Sun and moon" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8O1JKZ6YxdA0IIuYtECB.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#user-preference-media-features-client-hints-headers" class="w-toc__header--link">User preference media features client hints headers</a>

- [Background on client hints](#background-on-client-hints)
- [Complete list of the client hints](#complete-list-of-the-client-hints)
- [Background on critical client hints](#background-on-critical-client-hints)
- [Browser support](#browser-support)
- [Client hint syntax](#client-hint-syntax)
- [Demo of Sec-CH-Prefers-Color-Scheme](#demo-of-sec-ch-prefers-color-scheme)
- [How it works](#how-it-works)
- [Node.js example](#node.js-example)
- [Privacy and security considerations](#privacy-and-security-considerations)
- [References](#references)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# User preference media features client hints headers

The `Sec-CH-Prefers-Color-Scheme` client hint header allows sites to obtain the user's color scheme preferences optionally at request time, allowing servers to inline the right CSS and therefore avoid a flash of incorrect color theme.

Aug 2, 2021 <span class="w-author__separator">•</span> Updated Aug 3, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

CSS media queries, and specifically [user preference media features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) like [`prefers-color-scheme`](/prefers-color-scheme/) or [`prefers-reduced-motion`](/prefers-reduced-motion/), have a potentially [significant impact](https://webkit.org/blog/8892/dark-mode-in-web-inspector/#:~:text=Implementing%20Dark%20Mode%20took%20over%201%2C000%20lines%20of%20CSS.) on the amount of CSS that needs to be delivered by a page, and on the experience the user is going to have when the page loads.

Focusing on `prefers-color-scheme`—but highlighting that the reasoning applies to other user preference media features as well—it is a best practice to not load CSS for the particular non-matching color scheme in the critical rendering path, and instead to initially only load the currently relevant CSS. One way of doing so is [via `<link media>`](/prefers-color-scheme/#loading-strategy).

However, high-traffic sites like [Google Search](https://www.google.com/) that wish to honor user preference media features like `prefers-color-scheme` and that inline CSS for performance reasons, need to know about the preferred color scheme (or other user preference media features respectively) ideally at request time, so that the initial HTML payload already has the right CSS inlined.

Additionally, and specifically for `prefers-color-scheme`, sites by all means want to avoid a [flash of inaccurate color theme](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/).

The `Sec-CH-Prefers-Color-Scheme` client hint header is the first of a [series of user preference media features client hints headers](https://wicg.github.io/user-preference-media-features-headers/) that aims to solve this issue.

### Background on client hints <a href="#background-on-client-hints" class="w-headline-link">#</a>

[HTTP Client Hints](https://datatracker.ietf.org/doc/html/rfc8942) defines an `Accept-CH` response header that servers can use to advertise their use of request headers for proactive content negotiation, colloquially referred to as client hints. The [User Preference Media Features Client Hints Headers](https://wicg.github.io/user-preference-media-features-headers/) proposal defines a set of client hints aimed at conveying user preference media features. These client hints are named after the corresponding user preference media feature that they report on. For example, the currently preferred color scheme as per `prefers-color-scheme` is reported via the aptly named `Sec-CH-Prefers-Color-Scheme` client hint.

### Background on critical client hints <a href="#background-on-critical-client-hints" class="w-headline-link">#</a>

The client hints proposed in [User Preference Media Features Client Hints Headers](https://wicg.github.io/user-preference-media-features-headers/) will presumably most commonly be used as [Critical Client Hints](https://tools.ietf.org/html/draft-davidben-http-client-hint-reliability-02). Critical Client Hints are Client Hints which meaningfully change the resulting resource. Such a resource should be fetched consistently across page loads (including the _initial_ page load) to avoid jarring user-visible switches.

### Client hint syntax <a href="#client-hint-syntax" class="w-headline-link">#</a>

User preference media features consist of a name (like `prefers-reduced-motion`) and allowed values (like `no-preference` or `reduce`. Each client hint header field is represented as [Structured Headers for HTTP](https://tools.ietf.org/html/draft-ietf-httpbis-header-structure-15) object containing an [item](https://tools.ietf.org/html/draft-ietf-httpbis-header-structure-15#section-3.3) whose value is a [string](https://tools.ietf.org/html/draft-ietf-httpbis-header-structure-15#section-3.3.3). For example, to convey that the user prefers a dark theme and reduced motion, the client hints look like in the example below.

    GET / HTTP/2
    Host: example.com
    Sec-CH-Prefers-Color-Scheme: "dark"
    Sec-CH-Prefers-Reduced-Motion: "reduce"

The CSS equivalent of the information conveyed in the above client hints is `@media (prefers-color-scheme: dark) {}` and `@media (prefers-reduced-motion: reduce) {}` respectively.

## Complete list of the client hints <a href="#complete-list-of-the-client-hints" class="w-headline-link">#</a>

While the [User Preference Media Features Client Hints Headers](https://wicg.github.io/user-preference-media-features-headers/) proposal defines a set of client hints, Chromium at the time of writing only supports `Sec-CH-Prefers-Color-Scheme`.

The list of the client hints is modeled after the [user preference media features](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) in [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme).

<table><thead><tr class="header"><th>Client Hint</th><th>Allowed Values</th><th>Corresponding User Preference Media Feature</th></tr></thead><tbody><tr class="odd"><td><code>Sec-CH-Prefers-Reduced-Motion</code></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference"><code>no-preference</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce"><code>reduce</code></a></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion"><code>prefers-reduced-motion</code></a></td></tr><tr class="even"><td><code>Sec-CH-Prefers-Reduced-Transparency</code></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-no-preference"><code>no-preference</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-reduce"><code>reduce</code></a></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency"><code>prefers-reduced-transparency</code></a></td></tr><tr class="odd"><td><code>Sec-CH-Prefers-Contrast</code></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-no-preference"><code>no-preference</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-less"><code>less</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-more"><code>more</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-custom"><code>custom</code></a></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#prefers-contrast"><code>prefers-contrast</code></a></td></tr><tr class="even"><td><code>Sec-CH-Forced-Colors</code></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-forced-colors-active"><code>active</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-forced-colors-none"><code>none</code></a></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#forced-colors"><code>forced-colors</code></a></td></tr><tr class="odd"><td><code>Sec-CH-Prefers-Color-Scheme</code></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-color-scheme-light"><code>light</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-color-scheme-dark"><code>dark</code></a></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme"><code>prefers-color-scheme</code></a></td></tr><tr class="even"><td><code>Sec-CH-Prefers-Reduced-Data</code></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-data-no-preference"><code>no-preference</code></a>, <a href="https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-data-reduce"><code>reduce</code></a></td><td><a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data"><code>prefers-reduced-data</code></a></td></tr></tbody></table>

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

The `Sec-CH-Prefers-Color-Scheme` client hint header is supported on Chromium 93. Other vendors' feedback, namely [WebKit's](https://lists.webkit.org/pipermail/webkit-dev/2021-May/031856.html) and [Mozilla's](https://github.com/mozilla/standards-positions/issues/526), is pending.

## Demo of `Sec-CH-Prefers-Color-Scheme` <a href="#demo-of-sec-ch-prefers-color-scheme" class="w-headline-link">#</a>

Try the [demo](https://sec-ch-prefers-color-scheme.glitch.me/) in Chromium 93 and notice how the inlined CSS changes according to the user's preferred color scheme.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format" alt="Sec-CH-Prefers-Color-Scheme: dark" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pKAKyrN18CjhAYUNpJyk.png?auto=format&amp;w=1600 1600w" width="800" height="541" /> <img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format" alt="Sec-CH-Prefers-Color-Scheme: light" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/6Xujcgyveo0QY0E3LQOF.png?auto=format&amp;w=1600 1600w" width="800" height="541" />

## How it works <a href="#how-it-works" class="w-headline-link">#</a>

1.  The client makes an initial request to the server.

        GET / HTTP/2
        Host: example.com

2.  The server responds, telling the client via `Accept-CH` that it accepts the `Sec-CH-Prefers-Color-Scheme` and the `Sec-CH-Prefers-Contrast` Client Hints, out of which as per `Critical-CH` it considers `Sec-CH-Prefers-Color-Scheme` a Critical Client Hint that it also varies the response on as conveyed by `Vary`.

        HTTP/2 200 OK
        Content-Type: text/html
        Accept-CH: Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Contrast
        Vary: Sec-CH-Prefers-Color-Scheme
        Critical-CH: Sec-CH-Prefers-Color-Scheme

3.  The client then retries the request, telling the server via `Sec-CH-Prefers-Color-Scheme` that it has a user preference for dark-schemed content.

        GET / HTTP/2
        Host: example.com
        Sec-CH-Prefers-Color-Scheme: "dark"

4.  The server can then tailor the response to the client's preferences accordingly and, for example, inline the CSS responsible for the dark theme into the response body.

## Node.js example <a href="#node.js-example" class="w-headline-link">#</a>

The Node.js example below, written for the popular Express.js framework, shows how dealing with the `Sec-CH-Prefers-Color-Scheme` client hint header could look like in practice. This code is what actually powers the [demo](#demo-of-sec-ch-prefers-color-scheme) above.

    app.get("/", (req, res) => {
      // Tell the client the server accepts the `Sec-CH-Prefers-Color-Scheme` client hint…
      res.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme");
      // …and that the server's response will vary based on its value…
      res.set("Vary", "Sec-CH-Prefers-Color-Scheme");
      // …and that the server considers this client hint a _critical_ client hint.
      res.set("Critical-CH", "Sec-CH-Prefers-Color-Scheme");
      // Read the user's preferred color scheme from the headers…
      const prefersColorScheme = req.get("sec-ch-prefers-color-scheme");
      // …and send the adequate HTML response with the right CSS inlined.
      res.send(getHTML(prefersColorScheme));
    });

## Privacy and security considerations <a href="#privacy-and-security-considerations" class="w-headline-link">#</a>

The Chromium team has designed and implemented User Preference Media Features Client Hints Headers using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

The [Security Considerations](https://datatracker.ietf.org/doc/html/rfc8942#section-4) of HTTP Client Hints and the [Security Considerations](https://tools.ietf.org/html/draft-davidben-http-client-hint-reliability-02#section-5) of Client Hint Reliability likewise apply to this proposal.

## References <a href="#references" class="w-headline-link">#</a>

- [Spec draft](https://wicg.github.io/user-preference-media-features-headers/)
- [Explainer](https://github.com/WICG/user-preference-media-features-headers#readme)
- [Chrome Status entry](https://chromestatus.com/feature/5642300464037888)
- [Chromium bug](https://crbug.com/1207897)
- [WebKit thread](https://lists.webkit.org/pipermail/webkit-dev/2021-May/031856.html)
- [Mozilla Standards Position](https://github.com/mozilla/standards-positions/issues/526)
- [Client Hints](https://datatracker.ietf.org/doc/html/rfc8942)
- [Client Hint Reliability](https://tools.ietf.org/html/draft-davidben-http-client-hint-reliability-02)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme)
- [Structured Headers for HTTP](https://tools.ietf.org/html/draft-ietf-httpbis-header-structure-19)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Many thanks for valuable feedback and advice from [Yoav Weiss](https://github.com/yoavweiss). Hero image by [Tdadamemd](https://commons.wikimedia.org/wiki/User:Tdadamemd) on [Wikimedia Commons](<https://commons.wikimedia.org/wiki/File:Sun%26Moon_apparent_sizes_(min-max_halved).jpg>).

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Aug 3, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/user-preference-media-features-headers/index.md)

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
