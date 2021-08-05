<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover w-hero--center" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/6ZuVN2HFiIqTVrmjN5XC.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#notification-triggers" class="w-toc__header--link">Notification Triggers</a>

- [What are Notification Triggers?](#what)
- [Use cases](#use-cases)
- [Current status](#status)
- [How to use notification triggers](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Feature detection](#feature-detection)
- [Scheduling a notification](#scheduling-a-notification)
- [Canceling a scheduled notification](#canceling-a-scheduled-notification)
- [Debugging](#debugging)
- [Demo](#demo)
- [Security and permissions](#security-and-permissions)
- [User control](#user-control)
- [Transparency](#transparency)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Problem with the implementation?](#problem-with-the-implementation)
- [Planning to use the API?](#planning-to-use-the-api)
- [Helpful Links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Notification Triggers

Notification Triggers allows you to schedule local notifications that don't require a network connection, which makes them ideal for use cases like calendar apps.

Oct 24, 2019 <span class="w-author__separator">•</span> Updated May 28, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The development of Notification Triggers API, part of Google's [capabilities project](https://developers.google.com/web/updates/capabilities), is currently in development. This post will be updated as the implementation progresses.

## What are Notification Triggers? <a href="#what" class="w-headline-link">#</a>

Web developers can display notifications using the [Web Notifications API](https://www.w3.org/TR/notifications/). This feature is often used with the [Push API](https://w3c.github.io/push-api/) to inform the user of time-sensitive information, such as breaking news events or received messages. Notifications are shown by running JavaScript on the user's device.

The problem with the Push API is that it's not reliable for triggering notifications which _must_ be shown when a particular condition, like time or location, is met. An example of a _time-based condition_ is a calendar notification that reminds you of an important meeting with your boss at 2 PM. An example of a _location-based condition_ is a notification that reminds you to buy milk when you enter the vicinity of your grocery store. Network connectivity or battery-preserving features like doze mode can delay the delivery of push based notifications.

Notification triggers solve this problem by letting you schedule notifications with their triggering condition in advance, so that the operating system will deliver the notification at the right time even if there is no network connectivity or the device is in battery saver mode.

For now, Chrome only supports _time-based triggers_. Additional triggers, such as location-based triggers, may be added in the future based on developer demand.

### Use cases <a href="#use-cases" class="w-headline-link">#</a>

Calendar applications can use time-based notification triggers to remind a user of upcoming meetings. The default notification scheme for a calendar app could be to show a first heads-up notification one hour before a meeting and then another more urgent notification five minutes before.

A TV network might remind users that their favorite TV show is about to start or a conference live stream is about to begin.

Time zone conversion sites can use time-based notification triggers to let their users schedule alarms for telephone conferences or video calls.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/beverloo/notification-triggers/blob/master/README.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. <strong>Gather feedback and iterate on design.</strong></td><td><strong><a href="#feedback">In progress</a></strong></td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use notification triggers <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the Notification Triggers API locally, without an origin trial token, enable the `#enable-experimental-web-platform-features` flag in `about://flags`.

Two earlier origin trials for the feature, which gave developers a chance to try out the proposed API, ran from Chrome 80 to 83 and from Chrome 86 to 88. You can read the summary of the [feedback obtained](https://docs.google.com/document/d/1Nl1emEqxjTzPLNIAPiS26Vtq3mBdNyCxfMY6QwaD45s/edit) so far.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

You can find out if the browser supports Notification Triggers by checking for the existence of the `showTrigger` property:

    if ('showTrigger' in Notification.prototype) {
      /* Notification Triggers supported */
    }

### Scheduling a notification <a href="#scheduling-a-notification" class="w-headline-link">#</a>

Scheduling a notification is similar to showing a regular push notification, except that you need to pass a `showTrigger` condition property with a `TimestampTrigger` object as the value to the notification's `options` object.

    const createScheduledNotification = async (tag, title, timestamp) => {
      const registration = await navigator.serviceWorker.getRegistration();
      registration.showNotification(title, {
        tag: tag,
        body: 'This notification was scheduled 30 seconds ago',
        showTrigger: new TimestampTrigger(timestamp + 30 * 1000),
      });
    };

On desktop, notification triggers fire only if Chrome is running. On Android, they fire regardless.

### Canceling a scheduled notification <a href="#canceling-a-scheduled-notification" class="w-headline-link">#</a>

To cancel scheduled notifications, first request a list of all notifications that match a certain tag through `ServiceWorkerRegistration.getNotifications()`. Note that you need to pass the `includeTriggered` flag for scheduled notifications to be included in the list:

    const cancelScheduledNotification = async (tag) => {
      const registration = await navigator.serviceWorker.getRegistration();
      const notifications = await registration.getNotifications({
        tag: tag,
        includeTriggered: true,
      });
      notifications.forEach((notification) => notification.close());
    };

### Debugging <a href="#debugging" class="w-headline-link">#</a>

You can use the [Chrome DevTools Notifications panel](https://developers.google.com/web/updates/2019/07/devtools#backgroundservices) to debug notifications. To start debugging, press **Start recording events** <img src="https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format" alt="Start recording events" sizes="(min-width: 24px) 24px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=24 24w,     https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=27 27w,     https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=31 31w,     https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=36 36w,     https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=41 41w,     https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=46 46w,     https://web-dev.imgix.net/image/admin/vf1pad201b4NM9WjgNQh.png?auto=format&amp;w=48 48w" width="24" height="24" /> or Control+E (Command+E on Mac). Chrome DevTools records all notification events, including scheduled, displayed, and closed notifications, for three days, even when DevTools is closed.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format" alt="A scheduled notification." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Fcyc3iFPdNexgqh1peA8.png?auto=format&amp;w=1600 1600w" width="800" height="247" /><figcaption>A scheduled notification.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format" alt="A displayed notification." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7Sj2NxYKbSXv4P894aLh.png?auto=format&amp;w=1600 1600w" width="800" height="247" /><figcaption>A displayed notification.</figcaption></figure>### Demo <a href="#demo" class="w-headline-link">#</a>

You can see Notification Triggers in action in the [demo](https://notification-triggers.glitch.me/), which allows you to schedule notifications, list scheduled notifications, and cancel them. The source code is available on [Glitch](https://glitch.com/edit/#!/notification-triggers).

## <figure><img src="https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format" alt="The Notification Triggers demo." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WVlem3Tf2GEEFwNVA2L1.png?auto=format&amp;w=1600 1600w" width="800" height="525" /><figcaption>The Notification Triggers <a href="https://notification-triggers.glitch.me/">demo</a>.</figcaption></figure>Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chrome team has designed and implemented the Notification Triggers API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. Because this API requires service workers, it also requires a secure context. Using the API requires the same permission as regular push notifications.

### User control <a href="#user-control" class="w-headline-link">#</a>

This API is only available in the context of a `ServiceWorkerRegistration`. This implies that all required data is stored in the same context and is automatically deleted when the service worker is deleted or the user deletes all site data for the origin. Blocking cookies also prevents service workers from being installed in Chrome, and therefore this API from being used. Notifications can always be disabled by the user for the site in site settings.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

Unlike the Push API, this API does not depend on the network, which implies scheduled notifications need all required data beforehand, including image resources referenced by the `badge`, `icon` and `image` attributes. This means showing a scheduled notification is not observable by the developer and doesn't involve waking up the service worker until the user interacts with the notification. Consequently, there is currently no known way the developer could obtain information about the user through potentially privacy-invading approaches like IP address geolocation lookup. This design also allows the feature to optionally tap into scheduling mechanisms provided by the operating system like Android's [`AlarmManager`](https://developer.android.com/reference/android/app/AlarmManager), which helps preserve battery.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with Notification Triggers.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the [Notification Triggers GitHub repo](https://github.com/beverloo/notification-triggers/issues), or add your thoughts to an existing issue.

### Problem with the implementation? <a href="#problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com/). Be sure to include as much detail as you can, simple instructions for reproducing, and set Components to `UI>Notifications`. Glitch works great for sharing quick and easy bug reproductions.

### Planning to use the API? <a href="#planning-to-use-the-api" class="w-headline-link">#</a>

Planning to use Notification Triggers on your site? Your public support helps us to prioritize features and shows other browser vendors how critical it is to support them. Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#NotificationTriggers`](https://twitter.com/search?q=%23NotificationTriggers&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful Links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/beverloo/notification-triggers/blob/master/README.md)
- [Notification Triggers demo](https://notification-triggers.glitch.me/) | [Notification Triggers demo source](https://glitch.com/edit/#!/notification-triggers)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=891339)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/5133150283890688)
- Blink Component: `UI>Notifications`

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Notification Triggers was implemented by [Richard Knoll](https://uk.linkedin.com/in/richardknoll) and the explainer written by [Peter Beverloo](https://twitter.com/beverloo?lang=en), with contributions from Richard. The following people have reviewed the article: [Joe Medley](https://twitter.com/medleyjp), [Pete LePage](https://twitter.com/petele), as well as Richard and Peter. [Hero image](https://unsplash.com/photos/UAvYasdkzq8) by [Lukas Blazek](https://unsplash.com/@goumbik) on Unsplash.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: May 28, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/notification-triggers/index.md)

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
