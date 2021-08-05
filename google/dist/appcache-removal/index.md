<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format" alt="An old-fashioned storage container." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/YDs2H4gLPhIwPMjPtc8o.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#preparing-for-appcache-removal" class="w-toc__header--link">Preparing for AppCache removal</a>

- [Timeline](#timeline)
- [Origin trial](#origin-trial)
- [Why are tokens needed in multiple places?](#why-are-tokens-needed-in-multiple-places)
- [Origin trial deployment timing and logistics](#origin-trial-deployment-timing-and-logistics)
- [Testing prior to removal](#testing-prior-to-removal)
- [Migration strategies](#migration-strategies)
- [Service workers and AppCache are mutually exclusive](#service-workers-and-appcache-are-mutually-exclusive)
- [The cross-platform story](#the-cross-platform-story)
- [Firefox on all platforms](#firefox-on-all-platforms)
- [Safari on iOS and macOS](#safari-on-ios-and-macos)
- [Chrome on iOS](#chrome-on-ios)
- [Android WebViews](#android-webviews)
- [Learn more](#learn-more)
- [Articles](#articles)
- [Tools](#tools)
- [Getting help](#getting-help)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Preparing for AppCache removal

Chrome 85 removes support for AppCache by default. Most developers should migrate off AppCache now, and not wait any longer.

May 18, 2020 <span class="w-author__separator">•</span> Updated Feb 1, 2021

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

Following up on [previous announcements](https://blog.chromium.org/2020/01/appcache-scope-restricted.html), support for [AppCache](https://developer.mozilla.org/docs/Web/HTML/Using_the_application_cache) will be removed from Chrome and other Chromium-based browsers. We encourage developers to migrate off of AppCache now, rather than waiting any longer.

[Service workers](https://developers.google.com/web/fundamentals/primers/service-workers), which are widely supported in current browsers, offer an alternative to providing the offline experience that AppCache had offered. See [Migration strategies](#migration-strategies).

## Timeline <a href="#timeline" class="w-headline-link">#</a>

[Recent changes](https://blog.chromium.org/2020/03/chrome-and-chrome-os-release-updates.html) to the Chrome release schedule means that the timing of some of these steps may vary. We will attempt to keep this timeline up-to-date, but at this point, please migrate off of AppCache as soon as possible, instead of waiting for specific milestones.

A "deprecated" feature still exists, but logs warning messages discouraging use. A "removed" feature no longer exists in the browser.

<table><tbody><tr class="odd"><td><a href="https://groups.google.com/a/chromium.org/g/blink-dev/c/UKF8cK0EwMI/m/NLhsIrs-AQAJ">Deprecation in non-secure contexts</a></td><td>Chrome 50 (April 2016)</td></tr><tr class="even"><td><a href="https://groups.google.com/a/chromium.org/g/blink-dev/c/ANnafFBhReY/m/1Xdr53KxBAAJ?pli=1">Removal from non-secure contexts</a></td><td>Chrome 70 (October 2018)</td></tr><tr class="odd"><td><a href="https://groups.google.com/a/chromium.org/g/blink-dev/c/FvM-qo7BfkI/m/0daqyD8kCQAJ">Deprecation in secure contexts</a></td><td>Chrome 79 (December 2019)</td></tr><tr class="even"><td><a href="https://blog.chromium.org/2020/01/appcache-scope-restricted.html">AppCache scope restriction</a></td><td>Chrome 80 (February 2020)</td></tr><tr class="odd"><td>"Reverse" origin trial begins</td><td>Chrome 84 (<a href="https://chromiumdash.appspot.com/schedule">estimated July 2020</a>)</td></tr><tr class="even"><td><a href="https://groups.google.com/a/chromium.org/g/blink-dev/c/FvM-qo7BfkI/m/AvxoE6JpBgAJ">Removal from secure contexts</a>, except for those opted-in to the origin trial</td><td>Chrome 85 (<a href="https://chromiumdash.appspot.com/schedule">estimated August 2020</a>)</td></tr><tr class="odd"><td>Complete removal from secure contexts for everyone, with completion of origin trial</td><td>Chrome 93 (<a href="https://chromiumdash.appspot.com/schedule">estimated October 2021</a>)</td></tr></tbody></table>

This timeline applies to Chrome on **all platforms other than iOS**. There is also an adjusted timeline for AppCache used within an Android [WebView](https://developer.android.com/reference/android/webkit/WebView). For more info, see [The cross-platform story](#the-cross-platform-story) later in this post.

## Origin trial <a href="#origin-trial" class="w-headline-link">#</a>

The timeline lists two upcoming milestones for removal. Beginning with Chrome 85, AppCache will no longer be available in Chrome by default. Developers who require additional time to migrate off of AppCache can [sign up](https://developers.chrome.com/origintrials/#/register_trial/1776670052997660673) for a "reverse" [origin trial](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md) to extend the availability of AppCache for their web apps. The origin trial will start in Chrome 84 (in advance of the default removal in Chrome 85), and will be active through Chrome 89. Starting with Chrome 90, AppCache will be fully removed for everyone, even those who had signed up for the origin trial.

Why are we calling this a "reverse" origin trial? Normally, an origin trial allows developers to opt-in to early access to new functionality before it has shipped by default in Chrome. In this case, we're allowing developers to opt-in to using legacy technology even after it's been removed from Chrome, but only temporarily.

To participate in the "reverse" origin trial:

1.  [Request a token](https://developers.chrome.com/origintrials/#/register_trial/1776670052997660673) for your origin.
2.  Add the token to your HTML pages. There are [two ways](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md#how-do-i-enable-an-experimental-feature-on-my-origin) to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example: `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - Alternatively, configure your server to return responses containing the `Origin-Trial` HTTP header. The resulting response header should look something like: `Origin-Trial: TOKEN_GOES_HERE`
3.  Add the same token to your AppCache manifests. Do this via a new field in your manifest, with the format:

        ORIGIN-TRIAL:
        TOKEN_GOES_HERE

    (There needs to be a new line between `ORIGIN-TRIAL` and your token.)

The token for a manifest **must** be in an `ORIGIN-TRIAL` field of the manifest itself. Unlike an HTML page's token, it can't be provided via an HTTP header.

You can see a sample project embedded below that demonstrates adding the correct origin trial tokens into both the `index.html` and `manifest.appcache` files.

### Why are tokens needed in multiple places? <a href="#why-are-tokens-needed-in-multiple-places" class="w-headline-link">#</a>

The **same origin trial token** needs to be associated with:

- **All of your HTML pages** that use AppCache.
- **All of your AppCache manifests** via the `ORIGIN-TRIAL` manifest field.

If you've participated in origin trials in the past, you might have added the token just to your HTML pages. The AppCache "reverse" origin trial is special in that you need to associate a token with each of your AppCache manifests as well.

Adding the origin trial token to your HTML pages enables the `window.applicationCache` interface from within your web apps. Pages that are not associated with a token won't be able to use `window.applicationCache` methods and events. Pages without a token also won't be able to load resources from the AppCache. Starting with Chrome 85, they will behave as if AppCache did not exist.

Adding the origin trial token to your AppCache manifests indicates that each manifest is still valid. Starting with Chrome 85, any manifests that does not have an `ORIGIN-TRIAL` field will be treated as malformed, and the rules within the manifest will be ignored.

### Origin trial deployment timing and logistics <a href="#origin-trial-deployment-timing-and-logistics" class="w-headline-link">#</a>

While the "reverse" origin trial officially starts with Chrome 84, you can [sign up](https://developers.chrome.com/origintrials/#/register_trial/1776670052997660673) for the origin trial today and add the tokens to your HTML and AppCache manifests. As your web app's audience gradually upgrades to Chrome 84, any tokens that you've already added will go into effect.

Once you've added a token to your AppCache manifest, visit `about://appcache-internals` to confirm that your local instance of Chrome (version 84 or later) has properly associated the origin trial token with your manifest's cached entries. If your origin trial is recognized, you should see a field with `Token Expires: Tue Apr 06 2021...` on that page, associated with your manifest:

## <figure><img src="https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format" class="w-screenshot" sizes="(min-width: 550px) 550px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Xid94kdPT5yGbQzBL4at.jpg?auto=format&amp;w=1100 1100w" width="550" height="203" /></figure>Testing prior to removal <a href="#testing-prior-to-removal" class="w-headline-link">#</a>

We strongly encourage you to migrate off of AppCache as soon as is feasible. If you want to test removal of AppCache on your web apps, use the `about://flags/#app-cache` [flag](https://www.chromium.org/developers/how-tos/run-chromium-with-flags) to simulate its removal. This flag is available starting with Chrome 84.

## Migration strategies <a href="#migration-strategies" class="w-headline-link">#</a>

Service workers, which are [widely supported in current browsers](https://developer.mozilla.org/docs/Web/API/ServiceWorker#Browser_compatibility), offer an alternative to the offline experience provided by AppCache.

We've provided a [polyfill](https://github.com/GoogleChromeLabs/sw-appcache-behavior) that uses a service worker to replicate some of the functionality of AppCache, though it does not replicate the entire AppCache interface. In particular, it does not provide a replacement for the `window.applicationCache` interface or the related AppCache events.

For more complex cases, libraries like [Workbox](https://developers.google.com/web/tools/workbox/) provide an easy way to create a modern service worker for your web app.

### Service workers and AppCache are mutually exclusive <a href="#service-workers-and-appcache-are-mutually-exclusive" class="w-headline-link">#</a>

While working on your migration strategy, please keep in mind that Chrome will disable AppCache functionality on any page that's loaded under the [control](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#scope_and_control) of a service worker. In other words, as soon as you deploy a service worker that controls a given page, you're no longer able to use AppCache on that page.

Because of this, we recommend that you do not attempt to migrate to service workers piece-by-piece. It would be a mistake to deploy a service worker that only contains some of your caching logic. You cannot fall back on AppCache to "fill in the gaps."

Similarly, if you deploy a service worker prior to AppCache removal, and then discover that you need to roll back to your previous AppCache implementation, you need to ensure that you [unregister](https://stackoverflow.com/a/33705250/385997) that service worker. As long as there's a registered service worker in scope for a given page, AppCache will not be used.

## The cross-platform story <a href="#the-cross-platform-story" class="w-headline-link">#</a>

We encourage you to follow up with a specific browser vendor if you'd like more information about their plans for AppCache removal.

### Firefox on all platforms <a href="#firefox-on-all-platforms" class="w-headline-link">#</a>

Firefox [deprecated](https://www.fxsitecompat.dev/en-CA/docs/2015/application-cache-api-has-been-deprecated/) AppCache in release 44 (September 2015), and has [removed](https://www.fxsitecompat.dev/en-CA/docs/2019/application-cache-storage-has-been-removed-in-nightly-and-early-beta/) support for it in its Beta and Nightly builds as of September 2019.

### Safari on iOS and macOS <a href="#safari-on-ios-and-macos" class="w-headline-link">#</a>

Safari [deprecated](https://bugs.webkit.org/show_bug.cgi?id=181764) AppCache in early 2018.

### Chrome on iOS <a href="#chrome-on-ios" class="w-headline-link">#</a>

Chrome for iOS is a special case, as it uses a different browser engine than Chrome on other platforms: the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview). Service workers are not currently supported in iOS apps using WKWebView, and Chrome's AppCache removal announcement does not cover the [availability of AppCache on Chrome for iOS](https://webkit.org/status/#specification-application-cache). Please keep this in mind if you know that your web app has a significant Chrome for iOS audience.

### Android WebViews <a href="#android-webviews" class="w-headline-link">#</a>

Some developers of Android applications use Chrome [WebView](https://developer.android.com/reference/android/webkit/WebView) to display web content, and might also use AppCache. However, it's not possible to enable an origin trial for a WebView. In light of that, Chrome WebView will support AppCache without an origin trial until the final removal takes place, expected in Chrome 90.

## Learn more <a href="#learn-more" class="w-headline-link">#</a>

Here are some resources for developers migrating from AppCache to service workers.

### Articles <a href="#articles" class="w-headline-link">#</a>

- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
- [The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
- [Progressive Web Apps Training](https://developers.google.com/web/ilt/pwa)
- [Network Reliability](/reliable/)

### Tools <a href="#tools" class="w-headline-link">#</a>

- [AppCache Polyfill](https://github.com/GoogleChromeLabs/sw-appcache-behavior)
- [Workbox](https://developers.google.com/web/tools/workbox/)
- [PWA Builder](https://www.pwabuilder.com/)

## Getting help <a href="#getting-help" class="w-headline-link">#</a>

If you run into an issue using a specific tool, open an issue in its GitHub repository.

You can ask a general question about migrating off of AppCache on [Stack Overflow](https://stackoverflow.com/), using the tag `html5-appcache`.

If you encounter a bug related to Chrome's AppCache removal, please [report it](https://crbug.com/new) using the Chromium issue tracker.

_Hero image based on [Smithsonian Institution Archives, Acc. 11-007, Box 020, Image No. MNH-4477](https://www.si.edu/object/usnm-storage-drawer:siris_arc_391797)._

<a href="/tags/service-worker/" class="w-chip">Service Worker</a>

<span class="w-mr--sm"> Last updated: Feb 1, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/appcache-removal/index.md)

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
