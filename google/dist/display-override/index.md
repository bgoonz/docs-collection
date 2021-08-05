<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format" alt="Web app manifest source code excerpt." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/woTD625c2X9tODE58koK.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#preparing-for-the-display-modes-of-tomorrow" class="w-toc__header--link">Preparing for the display modes of tomorrow</a>

- [Shortcomings of the display property](#shortcomings-of-the-display-property)
- [The display_override property](#the-display_override-property)
- [Browser compatibility](#browser-compatibility)
- [Useful links](#useful-links)
- [Acknowledgments](#acknowledgments)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Preparing for the display modes of tomorrow

PWAs can use the "display_override" property to deal with special display modes.

Feb 25, 2021 <span class="w-author__separator">•</span> Updated May 28, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

A [web app manifest](/add-manifest/) is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. Via the [`display`](/add-manifest/#display) property, you can customize what browser UI is shown when your app is launched. For example, you can hide the address bar and browser chrome. Games can even be made to launch full screen. As a quick recap, below are the display modes that are specified at the time this article was written.

<table><thead><tr class="header"><th><strong>Property</strong></th><th><strong>Use</strong></th></tr></thead><tbody><tr class="odd"><td><code>fullscreen</code></td><td>Opens the web application without any browser UI and takes up the entirety of the available display area.</td></tr><tr class="even"><td><code>standalone</code></td><td>Opens the web app to look and feel like a standalone app. The app runs in its own window, separate from the browser, and hides standard browser UI elements like the URL bar.</td></tr><tr class="odd"><td><code>minimal-ui</code></td><td>This mode is similar to <code>standalone</code>, but provides the user a minimal set of UI elements for controlling navigation (such as back and reload).</td></tr><tr class="even"><td><code>browser</code></td><td>A standard browser experience.</td></tr></tbody></table>

These display modes follow a [well-defined fallback chain](https://w3c.github.io/manifest/#dfn-fallback-display-mode) (`"fullscreen"` → `"standalone"` → `"minimal-ui"` → `"browser"`). If a browser does not support a given mode, it falls back to the next display mode in the chain.

## Shortcomings of the `display` property <a href="#shortcomings-of-the-display-property" class="w-headline-link">#</a>

The problem with this hard-wired fallback chain approach is threefold:

- A developer cannot request `"minimal-ui"` without being forced back into the `"browser"` display mode in case `"minimal-ui"` is not supported by a given browser.
- Developers have no way of handling cross-browser differences, like if the browser includes or excludes a [back button](https://twitter.com/ChromiumDev/status/1012065260625383425/photo/1) in the window for `"standalone"` mode.
- The current behavior makes it impossible to introduce new display modes in a backward compatible way, since explorations like tabbed application mode do not have a natural place in the fallback chain.

## The `display_override` property <a href="#the-display_override-property" class="w-headline-link">#</a>

These problems are solved by the `display_override` property, which the browser considers _before_ the `display` property. Its value is a sequence of strings that are considered in-order, and the first supported display mode is applied. If none are supported, the browser falls back to evaluating the `display` field.

The `display_override` property is meant to solve special corner cases. In almost all circumstances the regular `display` property is what developers should reach for.

In the example below, the display mode fallback chain would be as follows. (The details of `"window-controls-overlay"` are out-of-scope for this article.)

1.  `"window-controls-overlay"` (First, look at `display_override`.)
2.  `"minimal-ui"`
3.  `"standalone"` (When `display_override` is exhausted, evaluate `display`.)
4.  `"minimal-ui"` (Finally, use the `display` fallback chain.)
5.  `"browser"`

<!-- -->

    {
      "display_override": ["window-controls-overlay", "minimal-ui"],
      "display": "standalone",
    }

The browser will not consider `display_override` unless `display` is also present.

To remain backward compatible, any future display mode will only be acceptable as a value of `display_override`, but not `display`. Browsers that do not support `display_override` fall back to the `display` property and ignore `display_override` as an unknown web app manifest property.

The `display_override` property is defined independently from its potential values.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

The `display_override` property is supported as of Chromium 89. Other browsers support the `display` property, which caters to the majority of display mode use cases.

## Useful links <a href="#useful-links" class="w-headline-link">#</a>

- [Explainer](https://github.com/WICG/display-override/blob/master/explainer.md)
- [Intent to Ship thread](https://groups.google.com/a/chromium.org/g/blink-dev/c/MZgYJgS4Lcs/m/NnUxG2_mAAAJ)
- [Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1092667)
- [Chrome Status entry](https://chromestatus.com/feature/5728570678706176)
- [Manifest Incubations repository](https://github.com/WICG/manifest-incubations)

## Acknowledgments <a href="#acknowledgments" class="w-headline-link">#</a>

The `display_override` property was formalized by [Daniel Murphy](https://github.com/dmurph).

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/web-app-manifest/" class="w-chip">Web App Manifest</a>

<span class="w-mr--sm"> Last updated: May 28, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/display-override/index.md)

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
