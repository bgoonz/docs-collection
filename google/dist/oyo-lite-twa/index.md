<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#oyo-lite:-a-twa-with-the-best-of-web-and-android-apps" class="w-toc__header--link">OYO Lite: a TWA with the best of web and Android apps</a>

- [What's a TWA?](#what's-a-twa)
- [Why create a TWA rather than a platform-specific app?](#why-create-a-twa-rather-than-a-platform-specific-app)
- [Building OYO Lite](#building-oyo-lite)
- [How a TWA helped OYO meet the needs of its users](#how-a-twa-helped-oyo-meet-the-needs-of-its-users)
- [Build your own TWA](#build-your-own-twa)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# OYO Lite: a TWA with the best of web and Android apps

How a hospitality startup built an Android app that relies on web content to dramatically increase user engagement and keep file size low

Nov 7, 2019 <span class="w-author__separator">•</span> Updated Nov 8, 2019

[<img src="https://web-dev.imgix.net/image/admin/IZc31j5Pp3h5rm00jpKO.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Ankit Jain" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/IZc31j5Pp3h5rm00jpKO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/IZc31j5Pp3h5rm00jpKO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/IZc31j5Pp3h5rm00jpKO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/IZc31j5Pp3h5rm00jpKO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/IZc31j5Pp3h5rm00jpKO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/ajain/)

<a href="/authors/ajain/" class="w-author__name-link">Ankit Jain</a>

- <a href="https://twitter.com/AnkitJainOAJ" class="w-author__link">Twitter</a>

[<img src="https://web-dev.imgix.net/image/admin/z1OxoDh8QIp4q9l3wOCO.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Michael Friesenhahn" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/z1OxoDh8QIp4q9l3wOCO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/z1OxoDh8QIp4q9l3wOCO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/z1OxoDh8QIp4q9l3wOCO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/z1OxoDh8QIp4q9l3wOCO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/z1OxoDh8QIp4q9l3wOCO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mfriesenhahn/)

<a href="/authors/mfriesenhahn/" class="w-author__name-link">Michael Friesenhahn</a>

- <a href="https://github.com/mfriesenhahn" class="w-author__link">GitHub</a>

Founded in 2013, [OYO Rooms](https://www.oyorooms.com/) has become one of India's largest hospitality companies, with hotels across hundreds of cities in more than 80 countries. That success came in part from making their online reservation experience as fast and easy as possible.

Until recently, the OYO team was offering both a [Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps) and an Android app to achieve that goal. The Android app had significantly higher engagement: users converted three times as often as those using the PWA. But users also tended to uninstall the Android app over time because of concerns about storage space.

To reduce the Android app's footprint on users' devices while keeping the benefits of the Android experience, the team decided to turn to [Trusted Web Activities (TWAs)](https://developers.google.com/web/updates/2019/02/using-twa).

## What's a TWA? <a href="#what&#39;s-a-twa" class="w-headline-link">#</a>

Before Chrome 72, Android developers who wanted to display web content in their platform-specific apps had to use [WebView](https://developer.android.com/reference/android/webkit/WebView), which came with some meaningful limitations: it's not as fast as Chrome and doesn't include all of Chrome's APIs and features. So, if you wanted behavior that WebView's rendering engine didn't support, you had to build your own browser around it—which isn't exactly trivial!

[Trusted Web Activities (TWAs)](https://developers.google.com/web/updates/2019/02/using-twa) address those limitations by showing web content directly in Chrome. Breaking down the TWA name helps explain its features:

- An _activity_ is one screen or view in an Android app's user interface.
- TWAs use Chrome to display _web_ content for the app's activities.
- A TWA's content is _trusted_ because it uses [Digital Asset Links](https://developers.google.com/digital-asset-links/v1/getting-started) to verify that the same person created the Android app and the web content that it's displaying.

It's easy to confuse PWAs and TWAs. _PWAs_ use web technologies to create experiences comparable to Android/iOS/desktop apps. _TWAs_ allow you to display a PWA in an Android app wrapper that can be downloaded from the Google Play Store.

## Why create a TWA rather than a platform-specific app? <a href="#why-create-a-twa-rather-than-a-platform-specific-app" class="w-headline-link">#</a>

More and more Android apps are delivering content from developers' own websites. TWAs acknowledge that reality by offering the best of the platform-specific and web app worlds:

- They have all the expected functionality of Android apps, including a launcher icon, push notifications, and fullscreen display.
- They offer the performance and features of Chrome.
- They use the version of Chrome installed on the device, so they always have the latest APIs and features.
- They use significantly less storage than a platform-specific app, which is a concern for many users, especially those with lower-end devices.

Running in Chrome also has a number of handy perks. For example, TWAs share Chrome's storage, including cookies, passwords, and anything stored using the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). One benefit of this setup is that users stay logged in across the browser and the TWA app.

TWA support will soon be available in several Android browsers; both Samsung and FireFox have committed to TWA. You can specify what browser you want your app to use, though it's best to select the user's default browser.

## Building OYO Lite <a href="#building-oyo-lite" class="w-headline-link">#</a>

The OYO team wanted to give their users a full-featured app experience without having to compromise on device storage, so they decided to create [OYO Lite](https://play.google.com/store/apps/details?id=com.oyo.consumerlite), a TWA built on their existing PWA.

Starting with a PWA is essential. Users expect a full-featured experience in an app they run from the Android launcher, so web content served in a TWA must provide that experience, including:

- Fast load and response times
- Reliability when the user has limited or no connectivity
- A unified look and feel (by providing, for example, a splash screen and app color)

Meeting the [Lighthouse requirements for a PWA](/lighthouse-pwa) is actually a prerequisite for TWAs. To learn more about building a PWA, see the [Installable collection](/installable).

If you already have a PWA, the steps for creating a basic TWA are designed to be low-effort, even if you've never developed for Android before. Here's what the OYO team did:

- Created an [Android manifest file](https://developer.android.com/guide/topics/manifest/manifest-intro) containing a `DEFAULT_URL` and [intent filters](https://developer.android.com/guide/components/intents-filters) to allow the app to display content from [oyorooms.com](https://oyorooms.com).
- Removed the browser's URL bar using [Digital Asset Link](https://developers.google.com/digital-asset-links/v1/getting-started) verification.
- Created a launcher icon.
- Created a custom splash screen.

And here's the result:

OYO Lite in action.

For a more detailed walkthrough of building a basic TWA, check out Peter McLachlan and Andre Bandarra's [TWA talk from Google I/O 2019](https://youtu.be/6lHBw3F4cWs).

To learn more about how the OYO team created OYO Lite—including a deep dive into their approach for creating a splash screen that's accessible to all Android users—take a look at Ankit Jain's [post on Medium](https://medium.com/@ankitjainaj/3dd327d7afc5).

## How a TWA helped OYO meet the needs of its users <a href="#how-a-twa-helped-oyo-meet-the-needs-of-its-users" class="w-headline-link">#</a>

By storing most of their app assets in Chrome's cache, the OYO team was able to get the initial download size for OYO Lite down to a svelte 850 KB. That's just 7% the size of their Android app!

That small footprint combined with the amenities of an Android app downloadable from the Google Play Store led to significant gains in user engagement:

- A conversion rate three times higher than the PWA's rate
- Three times more logged-in users than the PWA, on average
- A 4.1 rating on the Google Play Store

And aside from the user-facing benefits, going with a TWA meant the team had only one codebase, which they could easily update without having to wait for users to download the latest version of the app.

## Build your own TWA <a href="#build-your-own-twa" class="w-headline-link">#</a>

OYO's online reservation platform is only one use case for TWAs. They can be a great fit for many projects currently built as platform-specific apps or web pages, from shopping carts and checkout flows to FAQs and contact forms.

Check out these links to get started with TWAs:

- [Using Trusted Web Activities](https://developers.google.com/web/updates/2019/02/using-twa)
- [Taking Chrome Full Screen with Trusted Web Activities (YouTube)](https://youtu.be/6lHBw3F4cWs)
- [A complete guide to Trusted Web Activity (TWA): OYO case study](https://medium.com/@ankitjainaj/3dd327d7afc5)

<a href="/tags/case-study/" class="w-chip">Case Study</a>

<span class="w-mr--sm"> Last updated: Nov 8, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/oyo-lite-twa/index.md)

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
