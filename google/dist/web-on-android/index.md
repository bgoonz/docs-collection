<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/874Rka3L44UJd5zLIyR5.svg" alt="Android robot" class="w-hero w-hero--cover" width="1600" height="480" />

## <a href="#web-on-android" class="w-toc__header--link">Web on Android</a>

- [Android WebView](#android-webview)
- [The in-app browser challenge](#the-in-app-browser-challenge)
- [Custom Tabs as a solution for in-app browsers](#custom-tabs-as-a-solution-for-in-app-browsers)
- [Open Progressive Web Apps using Trusted Web Activity](#open-progressive-web-apps-using-trusted-web-activity)
- [Limitations of the current solutions](#limitations-of-the-current-solutions)
- [Summary](#summary)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Web on Android

How different components can be used to render web content inside Android apps.

Jul 30, 2020 <span class="w-author__separator">•</span> Updated Aug 5, 2020

[<img src="https://web-dev.imgix.net/image/admin/XVGMhdOgHJhch3EBcw89.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="André Cipriani Bandarra" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/XVGMhdOgHJhch3EBcw89.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/XVGMhdOgHJhch3EBcw89.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/XVGMhdOgHJhch3EBcw89.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/XVGMhdOgHJhch3EBcw89.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/XVGMhdOgHJhch3EBcw89.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/andreban/)

<a href="/authors/andreban/" class="w-author__name-link">André Cipriani Bandarra</a>

- <a href="https://twitter.com/andreban" class="w-author__link">Twitter</a>
- <a href="https://github.com/andreban" class="w-author__link">GitHub</a>
- <a href="https://bandarra.me/" class="w-author__link">Blog</a>

The Android platform has been around for more than ten years, and since its early days it has had great support for the Web. It shipped with WebView, a component that allows developers to use the web inside their own Android Apps. More than that, Android allows developers to bring their own browser engine into the platform, fostering competition and innovation.

Developers can include the web in their Android applications in many ways. WebView is frequently used to render ads, as a layout component used along with Android UI elements, or for packaging HTML 5 games. Custom Tabs allows developers to build in-app browsers and provide a seamless navigation experience to third-party web content, and Trusted Web Activity allows developers to use their Progressive Web Apps (PWAs) in Android apps, which can be downloaded from the Play Store.

### Android WebView <a href="#android-webview" class="w-headline-link">#</a>

WebView gives developers access to modern HTML, CSS, and JavaScript inside their Android apps, and allows content to be shipped inside the APK or hosted on the internet. It's one of Android's most flexible and powerful components, which can be used for most of the use-cases where web content is included in an Android app. From powering ad services like AdMob to building and shipping complete HTML5 games that use modern APIs such as WebGL.

But, when used to create an in-app-browser or including a PWA in an Android application, WebView lacks the security, features, and capabilities of the web platform.

### The in-app browser challenge <a href="#the-in-app-browser-challenge" class="w-headline-link">#</a>

Over time, more and more developers have built browser experiences incorporating third-party content into their Android application, with the goal of creating a more seamless experience for their users when navigating to third-party websites. Those experiences became known as in-app browsers.

WebView has extensive support for the modern web tech stack and supports many modern web APIs, like WebGL. But WebView is primarily a web UI toolkit. It [is not meant to - and does not - support all features of the web platform](https://research.google/pubs/pub46739/). When an API already has an OS-level alternative, like Web Bluetooth, or it requires browser UI to be implemented, like push notifications, it may not be supported. As the web platform evolves and adds more features that were only available to Android apps, this gap will become even larger. As app developers don't control which features are used when opening third-party content, it makes WebView a poor choice for in-app browsers or opening Progressive Web Apps. Even if WebView implemented support for all web platform features, developers would still need to write code and implement their own UI for functionality like permissions or push notifications, making it hard to achieve consistency for users.

#### Security Considerations for using WebView as an in-app browser <a href="#security-considerations-for-using-webview-as-an-in-app-browser" class="w-headline-link">#</a>

WebView gives the embedder application full access to the rendered content, including cookies and the DOM. Those are powerful features that require a high level of trust from users.

Since WebView is not intended as a framework for building browsers, it lacks security features available in modern browsers.

##### Multi-process architecture and site isolation <a href="#multi-process-architecture-and-site-isolation" class="w-headline-link">#</a>

Browsers are designed to be secure while rendering and executing content that is untrusted. To ensure the user stays safe while navigating content that is potentially untrustworthy or even malicious, modern browsers employ techniques such as using [multi-process architecture](https://blog.chromium.org/2008/09/multi-process-architecture.html) and [site isolation](https://www.chromium.org/Home/chromium-security/site-isolation).

Without the multi-process architecture, a crash caused by the web page can crash the entire browser app, or a vulnerability can be exploited to take control of the entire device. Site isolation adds another layer of security that makes it harder for untrustworthy sites to access and steal information from other sites.

Until Android 8.0 Oreo, the WebView renderer used the same process as the embedder application. On newer versions of the OS, and when devices are capable enough, the renderer runs in a different process. However, a single process is still shared between all pages and WebView instances running them, making it impossible to fully implement site isolation.

The lack of a multi-process architecture and site isolation is not an issue for applications that render content that they own and trust, but can be a problem for applications running untrusted third-party content, like in-app browsers, and leaves users exposed to vulnerabilities like [Meltdown](<https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)>) and [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), which could be used for stealing cookies, banking details, personal information, and more.

##### Secure UI Indicators <a href="#secure-ui-indicators" class="w-headline-link">#</a>

It is also important to provide good security indicators to users, and browsers put a lot of effort and are [always evolving](https://blog.chromium.org/2018/05/evolving-chromes-security-indicators.html) in this area. However, the WebView lacks an API for checking if a site's connection is secure that allows application developers to build trustworthy security indicators. The lack of such an API could cause, for instance, a URL displayed in the address bar to not match the page displayed to the user, even over secure HTTPS connections.

Another option available to developers is embedding a browser engine in their application. Besides leading to increased application size, this approach is both complex and time-consuming.

### Custom Tabs as a solution for in-app browsers <a href="#custom-tabs-as-a-solution-for-in-app-browsers" class="w-headline-link">#</a>

Custom Tabs was [introduced in Chrome 45](https://android-developers.googleblog.com/2015/09/chrome-custom-tabs-smooth-transition.html) and allows developers to use a tab from the user's default browser as part of their application. Custom Tabs was originally launched by Chrome, and was therefore known as "Chrome Custom Tabs". Today it's an [Android API](https://developer.android.com/reference/androidx/browser/customtabs/package-summary) and most popular browsers support Custom Tabs, including Chrome, Firefox, Edge, and Samsung Internet, so it's more appropriate to just call it "Custom Tabs".

Custom Tabs helps developers seamlessly integrate web content into their app experience. They also allow developers to customise the activity in which web content is shown by allowing them to customize the toolbar color, action buttons, transition animation, and more.

They also offer features that were previously unavailable when using WebView or embedding a browser engine. Since the in-app browser is powered by the user's browser, Custom Tabs shares storage with the browser, so users don't need to re-login to their favourite websites every time one of their installed apps starts an In-App browsing session.

Unlike WebViews, Custom Tabs supports all web platform features and APIs that are supported by the browser powering it.

### Open Progressive Web Apps using Trusted Web Activity <a href="#open-progressive-web-apps-using-trusted-web-activity" class="w-headline-link">#</a>

[Progressive Web Apps](/progressive-web-apps/) bring many behaviors and capabilities that were once only available to platform-specific apps to the web. With the introduction of app-like behaviour, the desire from developers to re-use those experiences on Android increased, and developers started asking for ways to integrate PWAs into their apps.

Custom Tabs has support for all modern web capabilities and APIs but, since it was primarily designed to open third-party content, it has a toolbar on the top that tells the users which URL they are visiting, as well as the lock icon indicating whether the site is secure. When opening an app's own experience, the toolbar prevents the application from feeling like it is integrated with the operating system.

[Trusted Web Activities](https://developers.google.com/web/android/trusted-web-activity/) was introduced in Chrome 72 and allows developers to [use their PWA inside an Android](/using-a-pwa-in-your-android-app/) app. Its protocol is similar to the Custom Tabs protocol, but introduces APIs that allow developers to verify (through [Digital Asset Links](https://developers.google.com/digital-asset-links)) that they control both the Android app and the URL being opened and remove the URL bar when both are true.

They also introduced APIs for creating splash screens when opening the PWA or delegating web notifications to be handled by Android code. More features like support for Play Billing are coming soon.

Since URLs opened in Trusted Web Activities are expected to be PWAs and have a set of behaviors and performance characteristics, Trusted Web Activities introduces [quality criteria](/using-a-pwa-in-your-android-app/#quality-criteria) for PWAs being opened inside it.

### Limitations of the current solutions <a href="#limitations-of-the-current-solutions" class="w-headline-link">#</a>

Developer feedback showed a need for the platform compatibility of Custom Tabs combined with the flexibility of WebView so they could, for instance, access the DOM or inject JavaScript, into their in-app browsers.

Custom Tabs is effectively a tab rendered by the user's browser, with a custom UI or with no UI at all. This means that the browser needs to honour the user's expectations around privacy and security towards the browser, making some of those features impossible.

The Web on Android team at Google is looking into alternatives and experimenting with solutions to solve those use-cases. Stay tuned for details!

### Summary <a href="#summary" class="w-headline-link">#</a>

WebView is useful when an application needs HTML, CSS, and JavaScript inside their Android app, but doesn't use more advanced features and capabilities available on the modern web such as Push Notifications, Web Bluetooth and others. It is not recommended when opening content that has been designed for the modern web platform, as it may not be displayed in the way the developer intended. WebView is not recommended for creating in-app browsers. On the other hand displaying first-party web content is an area where WebViews really shine.

Trusted Web Activity should be used when the developers want to render their own Progressive Web App in fullscreen inside their Android application. It can be used as the only activity in the app or used along with other Android activities.

Custom Tabs is the recommended way for opening third-party content that is designed for the web platform, also known as in-app browsers.

<span class="w-mr--sm"> Last updated: Aug 5, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-on-android/index.md)

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
