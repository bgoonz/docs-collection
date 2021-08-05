<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format" alt="Cat sleeping. Photo by Kate Stone Matheson on Unsplash." class="w-hero w-hero--cover w-hero--center" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zMncl9cgWdAc8W24yav3.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#stay-awake-with-the-screen-wake-lock-api" class="w-toc__header--link">Stay awake with the Screen Wake Lock API</a>

- [What is the Screen Wake Lock API?](#what)
- [Suggested use cases for the Screen Wake Lock API](#use-cases)
- [Current status](#status)
- [Using the Screen Wake Lock API](#use)
- [Wake lock types](#wake-lock-types)
- [Feature detection](#feature-detection)
- [Getting a screen wake lock](#get-wake-lock)
- [Releasing a screen wake lock](#release-wake-lock)
- [The screen wake lock lifecycle](#wake-lock-lifecycle)
- [Minimize your impact on system resources](#best-practices)
- [Demo](#demo)
- [Screen Wake Locks in the OS task manager](#screen-wake-locks-in-the-os-task-manager)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Stay awake with the Screen Wake Lock API

The Screen Wake Lock API provides a way to prevent devices from dimming or locking the screen when an application needs to keep running.

Dec 18, 2018 <span class="w-author__separator">•</span> Updated Feb 23, 2021

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

**Success**: The Screen Wake Lock API, part of Google's [capabilities project](https://developers.google.com/web/updates/capabilities), launched in Chrome 84.

## What is the Screen Wake Lock API? <a href="#what" class="w-headline-link">#</a>

To avoid draining the battery, most devices quickly go to sleep when left idle. While this is fine most of the time, some applications need to keep the screen awake to complete their work. Examples include cooking apps that show the steps of a recipe or a game like [Ball Puzzle](https://ball-puzzle.appspot.com/), which uses the device motion APIs for input.

The [Screen Wake Lock API](https://w3c.github.io/wake-lock/) provides a way to prevent the device from dimming and locking the screen. This capability enables new experiences that, until now, required a platform-specific app.

The Screen Wake Lock API reduces the need for hacky and potentially power-hungry workarounds. It addresses the shortcomings of an older API that was limited to simply keeping the screen on and had a number of security and privacy issues.

## Suggested use cases for the Screen Wake Lock API <a href="#use-cases" class="w-headline-link">#</a>

[RioRun](https://www.theguardian.com/sport/2016/aug/06/rio-running-app-marathon-course-riorun), a web app developed by [The Guardian](https://www.theguardian.com/), was a perfect use case (though it's no longer available). The app takes you on a virtual audio tour of Rio, following the route of the 2016 Olympic marathon. Without wake locks, users' screens would turn off frequently while the tour played, making it hard to use.

Of course, there are plenty of other use cases:

- A recipe app that keeps the screen on while you bake a cake or cook dinner
- A boarding pass or ticket app that keeps the screen on until the barcode has been scanned
- A kiosk-style app that keeps the screen on continuously
- A web-based presentation app that keeps the screen on during a presentation

**Success**: After implementing the Screen Wake Lock API, _Betty Crocker_, a major cooking site in the US, saw a 300% increase in purchase intent indicators for their users. Read more in the 🍰 [Betty Crocker case study](/betty-crocker/).

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td>N/A</td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://w3c.github.io/wake-lock/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback and iterate design</td><td><a href="#feedback">Complete</a></td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Complete</strong></td></tr></tbody></table>

Big thanks to the folks at Intel, specifically Mrunal Kapade, for implementing this API. Chrome depends on a community of committers working together to move the Chromium project forward. Not every Chromium committer is a Googler, and these contributors deserve special recognition!

## Using the Screen Wake Lock API <a href="#use" class="w-headline-link">#</a>

### Wake lock types <a href="#wake-lock-types" class="w-headline-link">#</a>

The Screen Wake Lock API currently provides just one type of wake lock: `screen`.

#### `screen` wake lock <a href="#screen-wake-lock" class="w-headline-link">#</a>

A `screen` wake lock prevents the device's screen from turning off so that the user can see the information that's displayed on screen.

**Caution**: An earlier version of the specification allowed an additional `system` wake lock that prevents the device's CPU from entering standby mode so that your app can continue running. We have decided to not proceed with this type for the moment.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

Browser support for the Screen Wake Lock API can be tested as follows:

    if ('wakeLock' in navigator) {
      // Screen Wake Lock API supported 🎉
    }

### Getting a screen wake lock <a href="#get-wake-lock" class="w-headline-link">#</a>

To request a screen wake lock, you need to call the `navigator.wakeLock.request()` method that returns a `WakeLockSentinel` object. You pass this method the desired wake lock type as a parameter, which _currently_ is limited to just `'screen'` and therefore is _optional_. The browser can refuse the request for various reasons (for example, because the battery charge level is too low), so it's a good practice to wrap the call in a `try…catch` statement. The exception's message will contain more details in case of failure.

### Releasing a screen wake lock <a href="#release-wake-lock" class="w-headline-link">#</a>

You also need a way to release the screen wake lock, which is achieved by calling the `release()` method of the `WakeLockSentinel` object. If you don't store a reference to the `WakeLockSentinel`, there's no way to release the lock manually, but it will be released once the current tab is invisible.

If you want to automatically release the screen wake lock after a certain period of time has passed, you can use `window.setTimeout()` to call `release()`, as shown in the example below.

    // The wake lock sentinel.
    let wakeLock = null;

    // Function that attempts to request a screen wake lock.
    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request();
        wakeLock.addEventListener('release', () => {
          console.log('Screen Wake Lock released:', wakeLock.released);
        });
        console.log('Screen Wake Lock released:', wakeLock.released);
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    };

    // Request a screen wake lock…
    await requestWakeLock();
    // …and release it again after 5s.
    window.setTimeout(() => {
      wakeLock.release();
      wakeLock = null;
    }, 5000);

The `WakeLockSentinel` object has a property called `released` that indicates whether a sentinel has already been released. Its value is initially `false`, and changes to `true` once a `"release"` event is dispatched. This property helps web developers know when a lock has been released so that they do not need to keep track of this manually. It is available as of Chrome 87.

### The screen wake lock lifecycle <a href="#wake-lock-lifecycle" class="w-headline-link">#</a>

When you play with the [screen wake lock demo](https://wake-lock-demo.glitch.me/), you'll notice that screen wake locks are sensitive to [page visibility](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API). This means that the screen wake lock will automatically be released when you minimize a tab or window, or switch away from a tab or window where a screen wake lock is active.

To reacquire the screen wake lock, listen for the [`visibilitychange`](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) event and request a new screen wake lock when they occur:

    const handleVisibilityChange = async () => {
      if (wakeLock !== null && document.visibilityState === 'visible') {
        await requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

## Minimize your impact on system resources <a href="#best-practices" class="w-headline-link">#</a>

Should you use a screen wake lock in your app? The approach you take depends on the needs of your app. Regardless, you should use the most lightweight approach possible for your app to minimize its impact on system resources.

Before adding a screen wake lock to your app, consider whether your use cases could be solved with one of the following alternative solutions:

- If your app is performing long-running downloads, consider using [background fetch](https://developers.google.com/web/updates/2018/12/background-fetch).
- If your app is synchronizing data from an external server, consider using [background sync](https://developers.google.com/web/updates/2015/12/background-sync).

Like most other powerful web APIs, the Screen Wake Lock API is only available when served over **HTTPS**.

### Demo <a href="#demo" class="w-headline-link">#</a>

Check out the [Screen Wake Lock demo](https://wake-lock-demo.glitch.me/) and [demo source](https://glitch.com/edit/#!/wake-lock-demo?path=script.js:1:0). Notice how the screen wake lock is automatically released when you switch tabs or apps.

### Screen Wake Locks in the OS task manager <a href="#screen-wake-locks-in-the-os-task-manager" class="w-headline-link">#</a>

You can use your operating system's task manager to see if an application is preventing your computer from sleeping. The video below shows the macOS [Activity Monitor](https://support.apple.com/guide/activity-monitor/welcome/mac) indicating that Chrome has an active screen wake lock that keeps the system awake.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The [Web Platform Incubator Community Group (WICG)](https://www.w3.org/community/wicg/) and the Chrome team want to hear about your thoughts and experiences with the Screen Wake Lock API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work as expected? Or are there missing methods or properties that you need to implement your idea?

- File a spec issue on the [Screen Wake Lock API GitHub repo](https://github.com/w3c/wake-lock/issues) or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EWakeLock). Be sure to include as much detail as you can, provide simple instructions for reproducing the bug, and set _Components_ to `Blink>WakeLock`. [Glitch](https://glitch.com) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Screen Wake Lock API? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them.

- Share how you plan to use the API on the [WICG Discourse thread](https://discourse.wicg.io/t/wake-lock-api-suppressing-power-management-screensavers/769).
- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#WakeLock`](https://twitter.com/search?q=%23WakeLock&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- Specification [Candidate Recommendation](https://www.w3.org/TR/wake-lock/) | [Editor's Draft](https://w3c.github.io/wake-lock/)
- [Screen Wake Lock Demo](https://wake-lock-demo.glitch.me/) | [Screen Wake Lock Demo source](https://glitch.com/edit/#!/wake-lock-demo?path=script.js:1:0)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=257511)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/4636879949398016)
- [Experimenting with the Wake Lock API](https://medium.com/dev-channel/experimenting-with-the-wake-lock-api-b6f42e0a089f)
- Blink Component: [`Blink>WakeLock`](https://chromestatus.com/features#component%3ABlink%3EWakeLock)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

[Hero image](https://unsplash.com/photos/uy5t-CJuIK4) by [Kate Stone Matheson](https://unsplash.com/@kstonematheson) on Unsplash. Task manager video courtesy of [Henry Lim](https://twitter.com/henrylim96/status/1359914993399959559).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/wake-lock/index.md)

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
