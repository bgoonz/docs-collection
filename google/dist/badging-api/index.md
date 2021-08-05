<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format" alt="Neon sign with heart and zero" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/AFvb0uBtN7ZX9qToptEo.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#badging-for-app-icons" class="w-toc__header--link">Badging for app icons</a>

- [What is the App Badging API?](#what)
- [Possible use cases](#use-cases)
- [Current status](#status)
- [Try it](#try-it)
- [How to use the App Badging API](#use)
- [Setting and clearing the badge in the background from a service worker](#setting-and-clearing-the-badge-in-the-background-from-a-service-worker)
- [Periodic background sync](#periodic-background-sync)
- [Web Push API](#web-push-api)
- [A combination of both](#a-combination-of-both)
- [The future](#the-future)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Badging for app icons

The App Badging API allows installed web apps to set an application-wide badge on the app icon.

Dec 11, 2018 <span class="w-author__separator">•</span> Updated Feb 23, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

## What is the App Badging API? <a href="#what" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format" alt="Example of Twitter with eight notifications and another app showing a flag type badge." sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t7XqI06whZr4oJe0yawc.jpg?auto=format&amp;w=1200 1200w" width="600" height="189" /><figcaption>Example of Twitter with eight notifications and another app showing a flag type badge.</figcaption></figure>The App Badging API allows installed web apps to set an application-wide badge, shown in an operating-system-specific place associated with the application (such as the shelf or home screen).

Badging makes it easy to subtly notify the user that there is new activity that might require their attention, or to indicate a small amount of information, such as an unread count.

Badges tend to be more user-friendly than notifications, and can be updated with a much higher frequency, since they don't interrupt the user. And, because they don't interrupt the user, they don't need the user's permission.

### Possible use cases <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- Chat, email, and social apps, to signal that new messages have arrived, or to show the number of unread items.
- Productivity apps, to signal that a long-running background task (such as rendering an image or video) has completed.
- Games, to signal that a player action is required (e.g., in Chess, when it is the player's turn).

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/badging/blob/master/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/badging/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td>Complete</td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Complete</strong></td></tr></tbody></table>

The App Badging API works on Windows, and macOS, in Chrome 81 or later. It has also been confirmed to work on Edge 84 or later. Support for Chrome OS is in development and will be available in a future release of Chrome. On Android, the Badging API is not supported. Instead, Android automatically shows a badge on app icon for the installed web app when there is an unread notification, just as for Android apps.

## Try it <a href="#try-it" class="w-headline-link">#</a>

1.  Using Chrome 81 or later on Windows or Mac, open the [App Badging API demo](https://badging-api.glitch.me/).
2.  When prompted, click **Install** to install the app, or use the Chrome menu to install it.
3.  Open it as an installed PWA. Note, it must be running as an installed PWA (in your task bar or dock).
4.  Click the **Set** or **Clear** button to set or clear the badge from the app icon. You can also provide a number for the _Badge value_.

## How to use the App Badging API <a href="#use" class="w-headline-link">#</a>

To use the App Badging API, your web app needs to meet [Chrome's installability criteria](/install-criteria/#criteria), and users must add it to their home screens.

The Badge API consists of two methods on `navigator`:

- `setAppBadge(`_`number`_`)`: Sets the app's badge. If a value is provided, set the badge to the provided value otherwise, display a plain white dot (or other flag as appropriate to the platform). Setting _`number`_ to `0` is the same as calling `clearAppBadge()`.
- `clearAppBadge()`: Removes app's badge.

Both return empty promises you can use for error handling.

The badge can either be set from the current page, or from the registered service worker. To set or clear the badge (in either the foreground page or the service worker), call:

    // Set the badge
    const unreadCount = 24;
    navigator.setAppBadge(unreadCount).catch((error) => {
      //Do something with the error.
    });

    // Clear the badge
    navigator.clearAppBadge().catch((error) => {
      // Do something with the error.
    });

In some cases, the OS may not allow the exact representation of the badge. In such cases, the browser will attempt to provide the best representation for that device. For example, because the Badging API isn't supported on Android, Android only ever shows a dot instead of a numeric value.

Don't assume anything about how the user agent displays the badge. Some user agents may take a number like "4000" and rewrite it as "99+". If you saturate the badge yourself (for example by setting it to "99") then the "+" won't appear. No matter the actual number, just call `setAppBadge(unreadCount)` and let the user agent deal with displaying it accordingly.

While the App Badging API _in Chrome_ requires an installed app, you shouldn't make calls to the Badging API dependent on the install state. Just call the API when it exists, as other browsers may show the badge in other places. If it works, it works. If not, it simply doesn't.

## Setting and clearing the badge in the background from a service worker <a href="#setting-and-clearing-the-badge-in-the-background-from-a-service-worker" class="w-headline-link">#</a>

You can also set the app badge in the background using the service worker, allowing them to be updated even when the app isn't open. Do this either through the Push API, periodic background sync, or a combination of both.

### Periodic background sync <a href="#periodic-background-sync" class="w-headline-link">#</a>

[Periodic background sync](/periodic-background-sync/) allows a service worker to periodically poll the server, which could be used to get an updated status, and call `navigator.setAppBadge()`.

However, the frequency at which the sync is called isn't perfectly reliable, and is called the at discretion of the browser.

### Web Push API <a href="#web-push-api" class="w-headline-link">#</a>

The [Push API](https://www.w3.org/TR/push-api/) allows servers to send messages to service workers, which can run JavaScript code even when no foreground page is running. Thus, a server push could update the badge by calling `navigator.setAppBadge()`.

However, most browsers, Chrome included, require a notification to be displayed whenever a push message is received. This is fine for some use cases (for example showing a notification when updating the badge) but makes it impossible to subtly update the badge without displaying a notification.

In addition, users must grant your site notification permission in order to receive push messages.

### A combination of both <a href="#a-combination-of-both" class="w-headline-link">#</a>

While not perfect, using Push API and periodic background sync together provide a good solution. High priority information is delivered via the Push API, showing a notification and updating the badge. And lower priority information is delivered by updating the badge, either when the page is open, or via periodic background sync.

### The future <a href="#the-future" class="w-headline-link">#</a>

The Chrome team is investigating ways to more reliably [update the app badge in the background](https://github.com/w3c/badging/blob/master/explainer.md#background-updates), and wants to hear from you. Let them know what works best for your use case by commenting on the [Notification Background Updates](https://github.com/w3c/badging/issues/28) issue.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the App Badging API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something in the API that doesn't work as you expected? Or are there missing methods or properties that you need to implement your idea? Do you have a question or comment on the security model?

- File a spec issue on the [Badging API GitHub repo](https://github.com/WICG/badging/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at <https://new.crbug.com>. Be sure to include as much detail as you can, simple instructions for reproducing, and set **Components** to `UI>Browser>WebAppInstalls`. [Glitch](https://glitch.com) works great for sharing quick and easy reproductions.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Planning to use the App Badging API on your site? Your public support helps the Chrome team to prioritize features, and shows other browser vendors how critical it is to support them.

- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#BadgingAPI`](https://twitter.com/search?q=%23BadgingAPI&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/WICG/badging/blob/master/explainer.md)
- [Badging API Demo](https://badging-api.glitch.me/) | [Badging API Demo source](https://glitch.com/edit/#!/badging-api?path=demo.js)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=719176)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/6068482055602176)
- Blink Component: `UI>Browser>WebAppInstalls`

Hero [photo](https://unsplash.com/photos/xv7-GlvBLFw) by [Prateek Katyal](https://unsplash.com/@prateekkatyal) on [Unsplash](https://unsplash.com/)

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/notifications/" class="w-chip">Notifications</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/badging-api/index.md)

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
