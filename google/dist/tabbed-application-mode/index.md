<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format" alt="Dictionary thumb index." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/N08W5skJmcYgS7346DBS.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#tabbed-application-mode-for-pwas" class="w-toc__header--link">Tabbed application mode for PWAs</a>

- [What is tabbed application mode](#what-is-tabbed-application-mode)
- [Suggested use cases for tabbed application mode](#suggested-use-cases-for-tabbed-application-mode)
- [Differences to developer-built tabs](#differences-to-developer-built-tabs)
- [Differences to "display": "browser"](#differences-to-)
- [Current status](#current-status)
- [Using tabbed application mode](#using-tabbed-application-mode)
- [Trying tabbed application mode](#trying-tabbed-application-mode)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Useful links](#useful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Tabbed application mode for PWAs

Work on more than one document at a time with tabs in your Progressive Web App

Feb 25, 2021 <span class="w-author__separator">•</span> Updated Jun 11, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Tabbed application mode is part of the [capabilities project](/fugu-status/) and is currently in development. This post will be updated as the implementation progresses. Tabbed application mode is an early-stage exploration of the Chrome team. It is not ready for production yet.

In the world of computing, the [desktop metaphor](https://en.wikipedia.org/wiki/Desktop_metaphor) is an interface metaphor that is a set of unifying concepts used by graphical user interfaces (GUI) to help users interact more easily with the computer. In keeping with the desktop metaphor, GUI tabs are modeled after traditional card tabs inserted in books, paper files, or card indexes. A _tabbed document interface_ (TDI) or tab is a graphical control element that allows multiple documents or panels to be contained within a single window, using tabs as a navigational widget for switching between sets of documents.

Progressive Web Apps can run in [various display modes](/add-manifest/#display) determined by the `display` property in the web app manifest. Examples are `fullscreen`, `standalone`, `minimal-ui`, and `browser`. These display modes follow a [well-defined fallback chain](https://w3c.github.io/manifest/#dfn-fallback-display-mode) (`"fullscreen"` → `"standalone"` → `"minimal-ui"` → `"browser"`). If a browser does not support a given mode, it falls back to the next display mode in the chain. Via the [`"display_override"`](/display-override/) property, developers can specify their own fallback chain if they need to.

## What is tabbed application mode <a href="#what-is-tabbed-application-mode" class="w-headline-link">#</a>

Something that has been missing from the platform so far is a way to let PWA developers offer their users a tabbed document interface, for example, to enable editing different files in the same PWA window. Tabbed application mode closes this gap.

This feature is about having a standalone app window with multiple tabs (containing separate documents inside the app scope) inside it. It is not to be confused with the existing `"display": "browser"`, which has a separate meaning (specifically, that the app is opened in a regular browser tab).

### Suggested use cases for tabbed application mode <a href="#suggested-use-cases-for-tabbed-application-mode" class="w-headline-link">#</a>

Examples of sites that may use tabbed application mode include:

- Productivity apps that let the user edit more than one document (or file) at the same time.
- Communication apps that let the user have conversations in different rooms per tab.
- Reading apps that open article links in new in-app tabs.

### Differences to developer-built tabs <a href="#differences-to-developer-built-tabs" class="w-headline-link">#</a>

Having documents in separate browser tabs comes with resource isolation for free, which is not possible using the web today. Developer-built tabs would not scale acceptably to hundreds of tabs like browser tabs do. Developer-built tabs could also not be dragged out of the window to split into a separate application window, or be dragged back in to combine them back into a single window. Browser affordances such as navigation history, "Copy this page URL", "Cast this tab" or "Open this page in a web browser" would be applied to the developer-built tabbed interface page, but not the currently selected document page.

### Differences to `"display": "browser"` <a href="#differences-to-%22display%22:-%22browser%22" class="w-headline-link">#</a>

The current `"display": "browser"` already has a [specific meaning](https://w3c.github.io/manifest/#dom-displaymodetype-browser):

> Opens the web application using the platform-specific convention for opening hyperlinks in the user agent (e.g., in a browser tab or a new window).

While browsers can do whatever they want regarding UI, it would clearly be a pretty big subversion of developer expectations if `"display": "browser"` suddenly meant "run in a separate application-specific window with no browser affordances, but a tabbed document interface".

Setting `"display": "browser"` is effectively the way you _opt out_ of being put into an application window.

## Current status <a href="#current-status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/w3c/manifest/issues/737">In progress</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. Origin trial</td><td>Not started</td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## Using tabbed application mode <a href="#using-tabbed-application-mode" class="w-headline-link">#</a>

To use tabbed application mode, developers need to opt their apps in by setting a specific [`"display_override"`](/display-override/) mode value in the web app manifest.

    {
      …
      "display": "standalone",
      "display_override": ["tabbed"],
      …
    }

### Trying tabbed application mode <a href="#trying-tabbed-application-mode" class="w-headline-link">#</a>

You can try tabbed application mode on Chrome OS devices running Chrome 83 and up today:

1.  Set the `#enable-desktop-pwas-tab-strip` flag.
2.  Install any web app that runs in `standalone` mode, for example, [Excalidraw](https://excalidraw.com/).
3.  Pin the app icon to the shelf, right click the icon, and select "New tabbed window" from the context menu.
4.  Open the app and interact with the tab strip.

The video below shows the current iteration of the feature in action. There is no need to make any changes to the web app manifest for this to work.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with tabbed application mode.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about tabbed application mode that does not work like you expected? Comment on the [web app manifest Issue](https://github.com/w3c/manifest/issues/737) that we have created.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `UI>Browser>WebAppInstalls` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy reproduction cases.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use tabbed application mode? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#TabbedApplicationMode`](https://twitter.com/search?q=%23TabbedApplicationMode&src=typed_query&f=live) and let us know where and how you are using it.

## Useful links <a href="#useful-links" class="w-headline-link">#</a>

- [Web app manifest spec issue](https://github.com/w3c/manifest/issues/737)
- [Chromium bug](https://crbug.com/897314)
- Blink Component: [`UI>Browser>WebAppInstalls`](https://chromestatus.com/features#component%3ABlink%3EUI%3EBrowser%3EWebAppInstalls)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Tabbed application mode was explored by [Matt Giuca](https://github.com/mgiuca). The experimental implementation in Chrome was the work of [Alan Cutter](https://github.com/alancutter). This article was reviewed by [Joe Medley](https://github.com/jpmedley). Hero image by [Till Niermann](https://commons.wikimedia.org/wiki/User:Till.niermann) on [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dictionary_indents_headon.jpg).

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jun 11, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/tabbed-application-mode/index.md)

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
