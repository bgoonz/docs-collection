<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format" alt="Abandoned computer on a bed with someone&#39;s leg next to it." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/FXoKxeVCmPgEStieWKm2.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#detect-inactive-users-with-the-idle-detection-api" class="w-toc__header--link">Detect inactive users with the Idle Detection API</a>

- [What is the Idle Detection API?](#what)
- [Suggested use cases for the Idle Detection API](#use-cases)
- [Current status](#status)
- [How to use the Idle Detection API](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Feature detection](#feature-detection)
- [Idle Detection API concepts](#idle-detection-api-concepts)
- [Using the Idle Detection API](#using-the-idle-detection-api)
- [DevTools support](#devtools-support)
- [Puppeteer support](#puppeteer-support)
- [Demo](#demo)
- [Polyfilling](#polyfilling)
- [Security and permissions](#security-and-permissions)
- [User control and privacy](#user-control-and-privacy)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Detect inactive users with the Idle Detection API

Use the Idle Detection API to find out when the user isn't actively using their device.

May 18, 2020 <span class="w-author__separator">•</span> Updated Feb 23, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The Idle Detection API is part of the [capabilities project](https://developers.google.com/web/updates/capabilities) and is currently in development. This post will be updated as the implementation progresses.

## What is the Idle Detection API? <a href="#what" class="w-headline-link">#</a>

The Idle Detection API notifies developers when a user is idle, indicating such things as lack of interaction with the keyboard, mouse, screen, activation of a screensaver, locking of the screen, or moving to a different screen. A developer-defined threshold triggers the notification.

### Suggested use cases for the Idle Detection API <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- Chat applications or online social networking sites can use this API to let the user know if their contacts are currently reachable.
- Publicly exposed kiosk apps, for example in museums, can use this API to return to the "home" view if no one interacts with the kiosk anymore.
- Apps that require expensive calculations, for example to draw charts, can limit these calculations to moments when the user interacts with their device.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/wicg/idle-detection/blob/master/README.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/idle-detection">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developer.chrome.com/origintrials/#/view_trial/551690954352885761">In progress</a></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use the Idle Detection API <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the Idle Detection API locally, without an origin trial token, enable the `#enable-experimental-web-platform-features` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chrome 88, the Idle Detection API is available as an origin trial in Chrome. The origin trial is expected to end in Chrome 90 (May 19, 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/551690954352885761) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

An earlier origin trial for this feature ran from Chrome 84 to Chrome 86.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the Idle Detection API is supported, use:

    if ('IdleDetector' in window) {
      // Idle Detector API supported
    }

### Idle Detection API concepts <a href="#idle-detection-api-concepts" class="w-headline-link">#</a>

The Idle Detection API assumes that there is some level of engagement between the user, the user agent (that is, the browser), and the operating system of the device in use. This is represented in two dimensions:

- **The user idle state:** `active` or `idle`: the user has or has not interacted with the user agent for some period of time.
- **The screen idle state:** `locked` or `unlocked`: the system has an active screen lock (like a screensaver) preventing interaction with the user agent.

Distinguishing `active` from `idle` requires heuristics that may differ across user, user agent, and operating system. It should also be a reasonably coarse threshold (see [Security and Permissions](#security-and-permissions)).

The model intentionally does not formally distinguish between interaction with particular content (that is, the webpage in a tab using the API), the user agent as a whole, or the operating system; this definition is left to the user agent.

### Using the Idle Detection API <a href="#using-the-idle-detection-api" class="w-headline-link">#</a>

The first step when using the Idle Detection API is to ensure the `'idle-detection'` permission is granted. If the permission is not granted, you need to request it via `IdleDetector.requestPermission()`. Note that calling this method requires a user gesture.

    // Make sure 'idle-detection' permission is granted.
    const state = await IdleDetector.requestPermission();
    if (state !== 'granted') {
      // Need to request permission first.
      return console.log('Idle detection permission not granted.');
    }

Initially, idle detection was gated behind the notifications permission. While many, but not all, use cases of this API involve notifications, the Idle Detection spec editors have decided to gate it behind a dedicated idle detection permission.

The second step is then to instantiate the `IdleDetector`. The minimum `threshold` is 60,000 milliseconds (1 minute). You can finally start the idle detection by calling the `IdleDetector`'s `start()` method. It takes an object with the desired idle `threshold` in milliseconds and an optional `signal` with an [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) to abort idle detection as parameters.

    try {
      const controller = new AbortController();
      const signal = controller.signal;

      const idleDetector = new IdleDetector();
      idleDetector.addEventListener('change', () => {
        const userState = idleDetector.userState;
        const screenState = idleDetector.screenState;
        console.log(`Idle change: ${userState}, ${screenState}.`);
      });

      await idleDetector.start({
        threshold: 60000,
        signal,
      });
      console.log('IdleDetector is active.');
    } catch (err) {
      // Deal with initialization errors like permission denied,
      // running outside of top-level frame, etc.
      console.error(err.name, err.message);
    }

You can abort the idle detection by calling the [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)'s [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) method.

    controller.abort();
    console.log('IdleDetector is stopped.');

### DevTools support <a href="#devtools-support" class="w-headline-link">#</a>

Starting in Chrome 86, you can emulate idle events in Chrome DevTools without actually being idle. In DevTools, open the **Sensors** tab and look for **Emulate Idle Detector state**. You can see the various options in the video below.

Idle Detector state emulation in DevTools.

### Puppeteer support <a href="#puppeteer-support" class="w-headline-link">#</a>

As of Puppeteer version 5.3.1, you can [emulate the various idle states](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pageemulateidlestateoverrides) to programmatically test how your web app's behavior changes.

### Demo <a href="#demo" class="w-headline-link">#</a>

You can see the Idle Detection API in action with the [Ephemeral Canvas demo](https://idle-detection.glitch.me/) that erases its contents after 60 seconds of inactivity. You could imagine this being deployed in a department store for kids to doodle on.

<img src="https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format" alt="Ephemeral Canvas demo" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/n0ysuaHUCcrRRf4b7pU0.png?auto=format&amp;w=1600 1600w" width="800" height="953" />

### Polyfilling <a href="#polyfilling" class="w-headline-link">#</a>

Some aspects of the Idle Detection API are polyfillable and idle detection libraries like [idle.ts](https://github.com/dropbox/idle.ts) exist, but these approaches are constrained to a web app's own content area: The library running in the context of the web app needs to expensively poll for input events or listen to visibility changes. More restrictively, though, libraries cannot tell today when a user goes idle outside of its content area (e.g., when a user is on a different tab or logged out of their computer altogether).

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chrome team has designed and implemented the Idle Detection API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. The ability to use this API is controlled by the [`'idle-detection'` permission](https://w3c.github.io/permissions/#permission-registry). In order to use the API, an app also must be running in a [top-level secure context](https://www.w3.org/TR/secure-contexts/#examples-top-level).

### User control and privacy <a href="#user-control-and-privacy" class="w-headline-link">#</a>

We always want to prevent malicious actors from misusing new APIs. Seemingly independent websites, but that in fact are controlled by the same entity, might obtain user idle information and correlate the data to identify unique users across origins. To mitigate these sort of attacks, the Idle Detection API limits the granularity of the reported idle events.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the Idle Detection API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/samuelgoto/idle-detection/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>Input` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Idle Detection API? Your public support helps the Chrome team to prioritize features and shows other browser vendors how critical it is to support them.

- Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/idle-detection-api/2959).
- Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#IdleDetection`](https://twitter.com/search?q=%23IdleDetection&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/wicg/idle-detection/blob/master/README.md)
- [Draft specification](https://wicg.github.io/idle-detection)
- [Idle Detection API Demo](https://idle-detection.glitch.me/) | [Idle Detection API Demo source](https://glitch.com/edit/#!/idle-detection)
- [Tracking bug](https://crbug.com/878979)
- [ChromeStatus.com entry](https://chromestatus.com/feature/4590256452009984)
- Blink Component: [`Blink>Input`](https://chromestatus.com/features#component%3ABlink%3EInput)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The Idle Detection API was implemented by [Sam Goto](https://twitter.com/samuelgoto). DevTools support was added by [Maksim Sadym](https://www.linkedin.com/in/sadym/). Thanks to [Joe Medley](https://github.com/jpmedley), [Kayce Basques](https://github.com/kaycebasques), and [Reilly Grant](https://github.com/reillyeon) for their reviews of this article. The hero image is by [Fernando Hernandez](https://unsplash.com/@_ferh97) on [Unsplash](https://unsplash.com/photos/8Facxtxqojc).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/idle-detection/index.md)

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
