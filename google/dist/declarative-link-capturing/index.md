<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format" alt="A hand and several hanging chains, symbolizing links." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/ynRFiUuv3sccX4qUAAPw.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#choose-how-in-scope-links-open-your-pwa-with-declarative-link-capturing" class="w-toc__header--link">Choose how in-scope links open your PWA with Declarative Link Capturing</a>

- [What is Declarative Link Capturing?](#what)
- [Suggested use cases](#suggested-use-cases)
- [Current status](#status)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [How to use Declarative Link Capturing?](#use)
- [Demo](#demo)
- [Security and permissions](#security-and-permissions)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Choose how in-scope links open your PWA with Declarative Link Capturing

Declarative Link Capturing is a proposal for a web app manifest property called `"capture_links"` that lets developers determine declaratively what should happen when the browser navigates to a URL that is within the application's navigation scope, from a context outside of the navigation scope.

May 19, 2021 <span class="w-author__separator">•</span> Updated Jun 18, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Declarative Link Capturing is part of the [capabilities project](https://web.dev/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

## What is Declarative Link Capturing? <a href="#what" class="w-headline-link">#</a>

Clicking links on the web can sometimes be a pleasant surprise. For example, clicking a web page link to YouTube on a mobile device opens the YouTube iOS or Android app, if it is installed. But when you install the [YouTube PWA](https://www.youtube.com/) on a desktop computer and click a link, it opens in… 🥁 a browser tab.

But it gets more complex. What if the link appears not in a website, but in a chat message that you receive in one of Google's chat apps? On desktop operating systems that have the notion of separate app windows, if the app is open already, should a new window or tab be created for each link click that is captured? When you think about it, there are many ways links and navigations can be captured, including, but not limited to, the following:

- Clicked links from other web pages.
- URL launches from a platform-specific app in the operating system.
- Navigations originating from the [App Shortcuts API](/app-shortcuts/)
- Links that go through [URL protocol handlers](/url-protocol-handler/)
- Navigations caused by [file handlers](/file-handling/)
- Navigations caused by the [Share Target API](/web-share-target/)
- …and others

Declarative Link Capturing is a proposal for a web app manifest property called `"capture_links"` that lets developers determine declaratively what should happen when the browser is asked to navigate to a URL that is within the application's navigation scope, from a context outside of the navigation scope. This proposal does not apply if the user is already within the navigation scope (for instance, if the user has a browser tab open that is within scope, and clicks an internal link).

**Key Term**: The [navigation scope](https://web.dev/add-manifest/#scope) of a web app manifest is the `"scope"` item of a processed manifest. The navigation scope restricts the set of URLs to which an application context can be navigated while the manifest is applied. If the `"scope"` member is not present in the manifest, it defaults to the parent path of the `"start_url"` member.

Some special conditions like middle-clicking a link (or right-clicking and then "open in new tab") would typically not trigger the link capturing behavior. Whether a link is `target=_self` or `target=_blank` does not matter, so that links clicked in a browser window (or window of a different PWA) would be opened in the PWA even if they would normally cause a navigation within the same tab.

## Suggested use cases <a href="#suggested-use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- PWAs that want to open a window, rather than a browser tab, when the user clicks on a link to them. In a desktop environment, it often makes sense to have multiple application windows open at a time.
- Single-window PWAs where the developer prefers to only have a single instance of the app open at any time, with new navigations focusing the existing instance. Sub-use cases include:
  - Apps for which it make sense to have only one instance running (e.g., a music player, a game).
  - Apps that include multi-document management within a single instance (e.g., an HTML-implemented tab strip).

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/sw-launch/blob/main/declarative_link_capturing.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://github.com/w3c/manifest/issues/764">In Progress</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td><strong>4. Origin trial</strong></td><td><strong><a href="https://developer.chrome.com/origintrials/#/view_trial/4285175045443026945">In progress</a></strong> (on Chrome OS)</td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with Declarative Link Capturing locally, without an origin trial token, enable the `#enable-desktop-pwas-link-capturing` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chromium 91, Declarative Link Capturing will be available as an origin trial in Chromium. The origin trial is expected to end in Chromium 94 (October 13, 2021).

**Caution**: The origin trial is initially limited to Chrome OS.

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/4285175045443026945) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

## How to use Declarative Link Capturing? <a href="#use" class="w-headline-link">#</a>

Developers can declaratively determine how links should be captured by leveraging the additional web app manifest field `"capture_links"`. It takes a string or a an array of strings as its value. If an array of strings is given, the user agent chooses the first supported item in the list, defaulting to `"none"`. The following values are supported:

- `"none"` (the default): No link capturing; links clicked leading to this PWA scope navigate as normal without opening a PWA window.
- `"new-client"`: Each clicked link opens a new PWA window at that URL.
- `"existing-client-navigate"`: The clicked link opens in an existing PWA window, if one is available, or in a new window if it is not. If more than one PWA window exists, the browser may choose one arbitrarily. This behaves like `"new-client"` if no window is currently open. 🚨 Careful! This option potentially leads to data loss, as pages can be arbitrarily navigated away from. Sites should be aware that they are opting into such behavior by choosing this option. This option works best for "read-only" sites that do not hold user data in memory, such as music players. If the page being navigated away from has a [`beforeunload` event](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload), the user would see the prompt before the navigation completes.

There is discussion about adding options that do not open a window at all, but instead fire a `launch` event in a chosen foreground window or the service worker. See the [`launch` event explainer](https://github.com/WICG/sw-launch/blob/main/explainer.md) for details, and, more specifically, the sections on [`existing-client-event`](https://github.com/WICG/sw-launch/blob/main/declarative_link_capturing.md#:~:text=completes-,existing-client-event,-when) and [`service-worker`](https://github.com/WICG/sw-launch/blob/main/declarative_link_capturing.md#:~:text=future-,serviceworker,-doesn).

## Demo <a href="#demo" class="w-headline-link">#</a>

The demo for Declarative Link Capturing actually consists of two demos that interact together:

1.  <https://continuous-harvest-tomato.glitch.me/>
2.  <https://hill-glitter-tree.glitch.me/>

The screencast below shows how the two interact. They show two different behaviors, `"new-client"` and `"existing-client-navigate"`. Be sure to test the apps in different states, running in a tab or as an installed PWA, to see the difference in behavior.

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chromium team has designed and implemented Declarative Link Capturing using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. This API allows sites new additional control options. First, being able to automatically open installed apps in a window. This uses existing UI but makes it possible for the site to automatically trigger it. Second, the capability to focus an existing window on its own domain and fire an event containing the clicked URL. This is intended to allow the site to navigate an existing window to a new page, overriding the default HTML navigation flow.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with Declarative Link Capturing.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that does not work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/sw-launch/issues/), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `UI>Browser>WebAppInstalls` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use Declarative Link Capturing? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#DeclarativeLinkCapturing`](https://twitter.com/search?q=%23DeclarativeLinkCapturing&src=recent_search_click&f=live) and let us know where and how you are using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Spec draft](https://github.com/w3c/manifest/issues/764)
- [Explainer](https://github.com/WICG/sw-launch/blob/main/declarative_link_capturing.md)
- [Chromium bug](https://crbug.com/1163398)
- [Intent to Prototype](https://groups.google.com/a/chromium.org/g/blink-dev/c/2ZnA1IrSpS8/m/7wx6dENTAwAJ)
- [Intent to Experiment](https://groups.google.com/a/chromium.org/g/blink-dev/c/q6ivDcvAJwQ/m/XTlva-lGBQAJ)
- [ChromeStatus entry](https://chromestatus.com/feature/5734953453092864)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Declarative Link Capturing was specified by [Matt Giuca](https://twitter.com/mgiuca) with input from Alan Cutter and [Dominick Ng](https://twitter.com/dominickng). The API was implemented by Alan Cutter. This article was reviewed by [Joe Medley](https://github.com/jpmedley), Matt Giuca, Alan Cutter, and [Shunya Shishido](https://github.com/sisidovski). Hero image by [Zulmaury Saavedra](https://unsplash.com/@zulmaury) on [Unsplash](https://unsplash.com/photos/zh0J32MrJfA).

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/web-app-manifest/" class="w-chip">Web App Manifest</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jun 18, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/declarative-link-capturing/index.md)

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
