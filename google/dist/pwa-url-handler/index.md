<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format" alt="Interconnected chains, symbolizing the handling of URLs." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/tCdgaIMviiwzyggA2dBt.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#pwas-as-url-handlers" class="w-toc__header--link">PWAs as URL Handlers</a>

- [What is PWAs as URL Handlers?](#what)
- [Suggested use cases for PWAs as URL Handlers](#use-cases)
- [Current status](#status)
- [How to use PWAs as URL Handlers](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [The "url_handlers" web app manifest member](#the-)
- [The web-app-origin-association file](#the-web-app-origin-association-file)
- [Demo](#demo)
- [Security and permissions](#security-and-permissions)
- [User control](#user-control)
- [Transparency](#transparency)
- [Permission persistence](#permission-persistence)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# PWAs as URL Handlers

Let installed PWAs handle URLs for a more integrated experience.

Jun 3, 2021 <span class="w-author__separator">•</span> Updated Jun 29, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

PWAs as URL Handlers is part of the [capabilities project](https://web.dev/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

## What is PWAs as URL Handlers? <a href="#what" class="w-headline-link">#</a>

Imagine you are chatting with a friend using an instant messenger application like Messages on macOS and you are talking about music. Further imagine you both have the `music.example.com` PWA installed on your devices. If you want to share your favorite track for your friend to enjoy, you can send them a deep link like `https://music.example.com/rick-astley/never-gonna-give-you-up`. Since this link is pretty long, the developers of `music.example.com` may have decided to add an additional short link to each track, like, for example, `https://🎵.example.com/r-a/n-g-g-y-u`.

PWA as URL Handlers allows apps like `music.example.com` to register themselves as URL handlers for URLs that match patterns like `https://music.example.com`, `https://*.music.example.com`, or `https://🎵.example.com`, so that links from outside of the PWA, for example, from an instant messenger application or an email client, open in the installed PWA rather than in a browser tab.

PWA as URL Handlers consists of two additions:

1.  The `"url_handlers"` web app manifest member.
2.  The `web-app-origin-association` file format for validating in- and out-of-scope URL associations.

### Suggested use cases for PWAs as URL Handlers <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- Music or video streaming sites so track links or playlist links open in the player experience of the app.
- News or RSS readers so followed or subscribed-to sites open in the app's reader mode.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/pwa-url-handler/blob/main/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. Origin trial</td><td>Not started</td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use PWAs as URL Handlers <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with PWAs as URL Handlers locally, without an origin trial token, enable the `#enable-desktop-pwas-url-handling` flag in `about://flags`.

Support for the PWAs as URL Handlers feature is limited to desktop operating systems like Windows, macOS, and Linux. On Android, Chromium browsers install PWAs by generating a [WebAPK](https://developers.google.com/web/fundamentals/integration/webapks), which can register a set of intent filters for all URLs within the scope of the app. This means that PWAs already handle associated URLs on Android at the operating system level using intent filters.

### The `"url_handlers"` web app manifest member <a href="#the-%22url_handlers%22-web-app-manifest-member" class="w-headline-link">#</a>

To associate an installed PWA with URL patterns, these patterns need to be specified in the web app manifest. This happens through the `"url_handlers"` member. It accepts an array of objects with an `origin` property, which is a required `string` that is a pattern for matching origins. These patterns are allowed to have a wildcard (`*`) prefix in order to include multiple sub-domains (like `https://*.example.com`). URLs that match these origins could be handled by this web app. The scheme is always assumed to be `https://`, but it needs to be explicitly mentioned.

The excerpt of a web app manifest below shows how the music PWA example from the introductory paragraph could set this up. The second entry with the wildcard (`"https://*.music.example.com"`) makes sure that the app also gets activated for `https://www.music.example.com` or potential other examples like `https://marketing-activity.music.example.com`.

    {
      "url_handlers": [
        {
          "origin": "https://music.example.com"
        },
        {
          "origin": "https://*.music.example.com"
        },
        {
          "origin": "https://🎵.example.com"
        }
      ]
    }

While in an online scenario, short links from `https://🎵.example.com` would typically be redirected to `https://music.example.com`. Such navigation redirection is not a good alternative with respect to offline scenarios. Therefore the app needs to register for both origins.

### The `web-app-origin-association` file <a href="#the-web-app-origin-association-file" class="w-headline-link">#</a>

Since the PWA lives on a different origin (`music.example.com`) than some of the URLs it needs to handle (e.g., `https://🎵.example.com`), the app needs to verify ownership of these other origins. This happens in a `web-app-origin-association` file hosted on the other origins.

This file must contain valid JSON. The top-level structure is an object, with a member named `"web_apps"`. This member is an array of objects and each object represents an entry for a unique web app. Each object contains:

<table><thead><tr class="header"><th>Field</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>"manifest"</code></td><td>(Required) URL string of the web app manifest of the associated PWA</td><td><code>string</code></td><td>N/A</td></tr><tr class="even"><td><code>"details"</code></td><td>(Optional) An object that contains arrays of included and excluded URL patterns</td><td><code>object</code></td><td>N/A</td></tr></tbody></table>

Each `"details"` object contains:

<table><thead><tr class="header"><th>Field</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><code>"paths"</code></td><td>(Optional) Array of allowed path strings</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr class="even"><td><code>"exclude_paths"</code></td><td>(Optional) Array of disallowed path strings</td><td><code>string[]</code></td><td><code>[]</code></td></tr></tbody></table>

An example `web-app-origin-association` file for the music PWA example from above is given below. It would be hosted on the origin `🎵.example.com` and establishes the association with the `music.example.com` PWA, identified by its web app manifest URL.

    {
      "web_apps": [
        {
          "manifest": "https://music.example.com/manifest.json",
          "details": {
            "paths": ["/*"],
            "exclude_paths": ["/internal/*"]
          }
        }
      ]
    }

The `web-app-origin-association` file is similar to [Apple's associated domain file](https://developer.apple.com/documentation/safariservices/supporting_associated_domains_in_your_app#3001215), [Android's `assetlinks.json` file](https://developer.android.com/training/app-links/verify-site-associations), and [Windows' `windows-app-web-link` file](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/web-to-app-linking#associate-your-app-and-website-with-a-json-file). What differs is that the `web-app-origin-association` file does not reference PWAs using a platform-specific app ID, but by their web app manifest URL.

#### When does a URL match? <a href="#when-does-a-url-match" class="w-headline-link">#</a>

A PWA matches a URL for handling if both of the following conditions are fulfilled:

- The URL matches one of the origin strings in `"url_handlers"`.
- The browser is able to validate via the respective `web-app-origin-association` file that each origin agrees to let this app handle such a URL.

#### Regarding `web-app-origin-association` file discovery <a href="#regarding-web-app-origin-association-file-discovery" class="w-headline-link">#</a>

For the browser to discover the `web-app-origin-association` file, developers need to place the `web-app-origin-association` file in the [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc8615) folder at the root of the app. For this to work, the file name must exactly be `web-app-origin-association`.

## Demo <a href="#demo" class="w-headline-link">#</a>

To test PWAs as URL Handlers, be sure to [set the browser flag](#enabling-via-about:flags) as outlined above and then install the PWA at <https://mandymsft.github.io/pwa/>. By looking at its [web app manifest](https://github.com/mandymsft/pwa/blob/main/manifest.json), you can see that it handles URLs with the following URL patterns: `https://mandymsft.github.io` and `https://luhuangmsft.github.io`. Since the latter is on a different origin (`luhuangmsft.github.io`) than the PWA, the PWA on `mandymsft.github.io` needs to prove ownership, which happens via the `web-app-origin-association` file hosted at <https://luhuangmsft.github.io/.well-known/web-app-origin-association>.

To test that it is indeed working, send yourself a test message using an instant messaging app of your choice or an email viewed in an email client that is not web-based like Mail on macOS. The email or text message should contain either of the links `https://mandymsft.github.io` or `https://luhuangmsft.github.io`. Both should open in the installed PWA.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format" alt="The Windows Skype instant messenger app next to the installed demo PWA, which is opened in standalone mode after clicking a link handled by it in a Skype chat message." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/EjFQNwv2IfINKykzsxxs.png?auto=format&amp;w=1600 1600w" width="800" height="498" />

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chromium team has designed and implemented PWAs as URL Handlers using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

### User control <a href="#user-control" class="w-headline-link">#</a>

If more than one PWA registers as a URL handler for a given URL pattern, the user will be prompted to choose which PWA they want to handle the pattern with—if any at all. Navigations that start in a browser tab are not handled by this proposal, it is explicitly aimed at navigations that start outside of the browser.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

If the necessary association validation cannot be completed successfully during PWA installation for any reason, the browser will not register the app as an active URL handler for the affected URLs. URL handlers, if improperly implemented, can be used to hijack traffic for websites. This is why the app association mechanism is an important part of the scheme.

Platform-specific applications can already use operating system APIs to enumerate installed applications on the user's system. For example, applications on Windows can use the [`FindAppUriHandlersAsync`](https://docs.microsoft.com/en-us/uwp/api/windows.system.launcher.findappurihandlersasync) API to enumerate URL handlers. If PWAs register as OS level URL handlers in Windows, their presence would be visible to other applications.

### Permission persistence <a href="#permission-persistence" class="w-headline-link">#</a>

An origin could modify its associations with PWAs at any time. Browsers will regularly attempt to revalidate the associations of installed web apps. If a URL handler registration fails to revalidate because the association data has changed or is no longer available, the browser will remove registrations.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with the PWAs as URL Handlers.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/pwa-url-handler/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `UI>Browser>WebAppInstalls` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use PWAs as URL Handlers? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#URLHandlers`](https://twitter.com/search?q=%23URLHandlers&src=recent_search_click&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/WICG/pwa-url-handler/blob/main/explainer.md)
- [Demo](https://mandymsft.github.io/pwa/) | [Demo source](https://github.com/mandymsft/pwa/)
- [Chromium tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1072058)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5739732661174272)
- Blink Component: [`UI>Browser>WebAppInstalls`](https://bugs.chromium.org/p/chromium/issues/list?q=component:UI%3EBrowser%3EWebAppInstalls)
- [TAG Review](https://github.com/w3ctag/design-reviews/issues/552)
- [Microsoft documentation](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/#url-link-handling)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

PWAs as URL Handlers was specified and implemented by [Lu Huang](https://github.com/LuHuangMSFT) and [Mandy Chen](https://github.com/mandymsft) from the Microsoft Edge team. This article was reviewed by [Joe Medley](https://github.com/jpmedley). Hero image by [Bryson Hammer](https://unsplash.com/@trhammerhead) on [Unsplash](https://unsplash.com/photos/JZ8AHFr2aEg).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: Jun 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/pwa-url-handler/index.md)

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
