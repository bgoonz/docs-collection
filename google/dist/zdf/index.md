<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format" alt="A person looking at the ZDF PWA on a smartphone." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8NYB8FoRFfEIIurhIwsS.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-zdf-created-a-video-pwa-with-offline-and-dark-mode" class="w-toc__header--link">How ZDF created a video PWA with offline and dark mode</a>

- [Adding a service worker](#adding-a-service-worker)
- [Adding a custom install prompt](#adding-a-custom-install-prompt)
- [Building an offline page to access downloads](#building-an-offline-page-to-access-downloads)
- [Using frame loading rate for adaptive features](#using-frame-loading-rate-for-adaptive-features)
- [Dark mode](#dark-mode)
- [Results](#results)
- [What's next?](#what's-next)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How ZDF created a video PWA with offline and dark mode

Learn how ZDF created a progressive web app (PWA) with modern features like offline support, installability, and dark mode.

Oct 7, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/D4T7yi0PpYUsSRf38KKc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Scott Friesen" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/D4T7yi0PpYUsSRf38KKc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/D4T7yi0PpYUsSRf38KKc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/D4T7yi0PpYUsSRf38KKc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/D4T7yi0PpYUsSRf38KKc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/D4T7yi0PpYUsSRf38KKc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/scottfriesen/)

<a href="/authors/scottfriesen/" class="w-author__name-link">Scott Friesen</a>

- <a href="https://github.com/scott-friesen" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Martin Schierle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/martinschierle/)

<a href="/authors/martinschierle/" class="w-author__name-link">Martin Schierle</a>

- <a href="https://twitter.com/martinschierle" class="w-author__link">Twitter</a>
- <a href="https://github.com/martinschierle" class="w-author__link">GitHub</a>

When broadcaster ZDF was considering redesigning their frontend technology stack, they decided to take a closer look at [Progressive Web Apps](/pwa/) for their streaming site [ZDFmediathek](https://pwa.zdf.de/). Development agency [Cellular](https://www.cellular.de/) took on the challenge to build a web-based experience that is on par with ZDF's platform-specific iOS and Android apps. The PWA offers installability, offline video playback, transition animations, and a dark mode.

## Adding a service worker <a href="#adding-a-service-worker" class="w-headline-link">#</a>

A key feature of a PWA is offline support. For ZDF most of the heavy lifting is done by [Workbox](/workbox/), a set of libraries and Node modules that make it easy to support different caching strategies. The ZDF PWA is built with TypeScript and React, so it uses the Workbox library already built into [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to precache static assets. This lets the application focus on making the dynamic content available offline, in this case the videos and their metadata.

The basic idea is quite simple: fetch the video and store it as a blob in IndexedDB. Then during playback, listen for online/offline events, and switch to the downloaded version when the device goes offline.

Unfortunately things turned out to be a little more complex. One of the project requirements was to use the official ZDF web player which doesn't provide any offline support. The player takes a content ID as input, talks to the ZDF API, and plays back the associated video.

This is where one of the web's most powerful features comes to the rescue: [service workers](/service-worker-mindset/).

The service worker can intercept the various requests done by the player and respond with the data from IndexedDB. This transparently adds offline capabilities without having to change a single line of the player's code.

Since offline videos tend to be quite large, a big question is how many of them can actually be stored on a device. With the help of the [StorageManager API](/storage-for-the-web/#how-much) the app can estimate the available space and inform the user when there is insufficient space before even starting the download. Unfortunately Safari isn't on the list of browsers implementing this API and at the time of writing there wasn't much up-to-date information about how other browsers applied quotas. Therefore, the team wrote a [small utility](https://cellular.github.io/quota) to test the behavior on various devices. By now a [comprehensive article](/storage-for-the-web/) exists that sums up all the details.

## Adding a custom install prompt <a href="#adding-a-custom-install-prompt" class="w-headline-link">#</a>

The ZDF PWA offers a custom in-app installation flow and prompts users to install the app as soon as they want to download their first video. This is a good point in time to prompt for install because the user has expressed a clear intention to use the app offline.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format" alt="Custom install prompt being triggered when downloading a video for offline consumption." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sj4J2JMlYdgf4BrhaRsT.jpg?auto=format&amp;w=1600 1600w" width="800" height="1595" /><figcaption>Custom install prompt being triggered when downloading a video for offline consumption.</figcaption></figure>Building an offline page to access downloads <a href="#building-an-offline-page-to-access-downloads" class="w-headline-link">#</a>

When the device is not connected to the internet and the user navigates to a page that is not available in offline mode, a special page is shown instead that lists all videos that have previously been downloaded or (in case no content has been downloaded yet) a short explanation of the offline feature.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format" alt="Offline page showing all content available for watching offline." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FcWDhtuSSpHg04krFqUD.png?auto=format&amp;w=1600 1600w" width="800" height="1418" /><figcaption>Offline page showing all content available for watching offline.</figcaption></figure>Using frame loading rate for adaptive features <a href="#using-frame-loading-rate-for-adaptive-features" class="w-headline-link">#</a>

To offer a rich user experience the ZDF PWA includes some subtle transitions that happen when the user scrolls or navigates. On low-end devices such animations usually have the opposite effect and make the app feel sluggish and less responsive if they don't run at 60 frames per second. To take this into account the app measures the actual frame rate via `requestAnimationFrame()` while the application loads and disables all animations when the value drops below a certain threshold.

    const frameRate = new Promise(resolve => {
      let lastTick;
      const samples = [];

      function measure() {
        const tick = Date.now();
        if (lastTick) samples.push(tick - lastTick);
        lastTick = tick;
        if (samples.length < 20) requestAnimationFrame(measure);
        else {
          const avg = samples.reduce((a, b) => a + b) / samples.length;
          const fps = 1000 / avg;
          resolve(fps);
        }
      }
      measure();
    });

Even if this measurement provides only a rough indication of the device's performance and varies on each load, it was still a good basis for decision-making. It's worth mentioning that depending on the use case there are [other techniques for adaptive loading](/adaptive-loading-with-service-workers/) that developers can implement. One great advantage of this approach is that it is available on all platforms.

## Dark mode <a href="#dark-mode" class="w-headline-link">#</a>

A popular feature for modern mobile experiences is [dark mode](/prefers-color-scheme/). Especially when watching videos in low ambient light many people prefer a dimmed UI. The ZDF PWA not only provides a switch that allows users to toggle between a light and a dark theme, it also reacts to changes of the OS-wide color preferences. This way the app will automatically change its appearance on devices that have set up a schedule to change the theme base on the time of day.

## Results <a href="#results" class="w-headline-link">#</a>

The new progressive web app was silently launched as a public beta in March 2020 and has received a lot of positive feedback since then. While the beta phase continues, the PWA still runs under its own temporary domain. Even though the PWA wasn't publicly promoted there is a steadily growing number of users. Many of these are from the Microsoft Store which allows Windows 10 users to discover PWAs and install them like platform-specific apps.

## What's next? <a href="#what&#39;s-next" class="w-headline-link">#</a>

ZDF plans to continue adding features to their PWA, including login for personalization, cross-device and platform viewing, and push notifications.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: Oct 7, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/zdf/index.md)

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
