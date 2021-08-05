<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/IhujMvzGa5Mf0aNWYRXW.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#customize-media-notifications-and-playback-controls-with-the-media-session-api" class="w-toc__header--link">Customize media notifications and playback controls with the Media Session API</a>

- [Cross-browser support](#cross-browser-support)
- [About the Media Session API](#about-the-media-session-api)
- [Let users know what's playing](#let-users-know-what's-playing)
- [Let users control what's playing](#let-users-control-what's-playing)
- [Play / pause](#play-pause)
- [Previous track](#previous-track)
- [Next track](#next-track)
- [Stop](#stop)
- [Seek backward / forward](#seek-backward-forward)
- [Seek to a specific time](#seek-to-a-specific-time)
- [Set playback position](#set-playback-position)
- [Video conferencing actions](#video-conferencing-actions)
- [Toggle microphone](#toggle-microphone)
- [Toggle camera](#toggle-camera)
- [Hang up](#hang-up)
- [Samples](#samples)
- [Resources](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Customize media notifications and playback controls with the Media Session API

How to integrate with hardware media keys, customize media notifications, and more.

Mar 6, 2020 <span class="w-author__separator">•</span> Updated Jul 1, 2021

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

To let users know what's currently playing in their browser and control it without returning to the page that launched it, the Media Session API has been introduced. It allows web developers to customize this experience through metadata in custom media notifications, media events such as playing, pausing, seeking, track changing, and video conferencing events such as mute/unmute microphone, turnon/turnoff camera, and hang up. These customizations are available in several contexts including desktop media hubs, media notifications on mobile, and even on wearable devices. I'll describe these customizations in this article.

## <figure><img src="https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format" alt="Media hub on desktop, media notification on mobile, and a wearable device." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/qwTz64KKq4rq7WeA3rlT.jpg?auto=format&amp;w=1600 1600w" width="800" height="330" /><figcaption>Media hub on desktop, media notification on mobile, and a wearable device.</figcaption></figure>Cross-browser support <a href="#cross-browser-support" class="w-headline-link">#</a>

At the time of writing, Chrome is the only browser that supports the Media Session API both on desktop and mobile. Firefox has partial support for the Media Session API on desktop behind a flag, and Samsung Internet also has partial support. See [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/MediaSession#Browser_compatibility) for up-to-date information.

## About the Media Session API <a href="#about-the-media-session-api" class="w-headline-link">#</a>

The Media session API provides several benefits and capabilities:

- Hardware media keys are supported.
- Media notifications are customized on mobile, Chrome OS, and paired wearable device.
- The [media hub](https://blog.google/products/chrome/manage-audio-and-video-in-chrome/) is available on desktop.
- Lock screen media controls are available on [Chrome OS](https://www.blog.google/products/chromebooks/whats-new-december2019/) and mobile.
- Picture-in-Picture window controls are available for both [audio playback](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture#show_canvas_element_in_picture-in-picture_window) and [video conferencing](#video-conferencing-actions).
- Assistant integration on mobile is available.

A few examples will illustrate some of these points.

**Example 1:** If users press the "next track" media key of their keyboard, web developers can handle this user action whether Chrome is in the foreground or the background.

**Example 2:** If users listen to a podcast on the web while their device screen is locked, they can still hit the "seek backward" icon from the lock screen media controls so that web developers move playback time backward by few seconds.

**Example 3:** If users have tabs playing audio, they can easily stop playback from the media hub on desktop so that web developers have a chance to clear their state.

**Example 4:** If users are on a video call, they can press the "toggle microphone" control in the Picture-in-Picture window to stop the website from receiving microphone data.

This is all done through two different interfaces: The `MediaSession` interface and the `MediaMetadata` interface. The first lets users control whatever's playing. The second is how you tell `MediaSession` what needs to be controlled.

To illustrate, the image below shows how these interfaces relate to specific media controls, in this case a media notification on mobile.

## <figure><img src="https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format" alt="Anatomy of a media notification on mobile." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/eiavbbCE6TlI8osR1tYT.jpg?auto=format&amp;w=1600 1600w" width="800" height="353" /><figcaption>Anatomy of a media notification on mobile.</figcaption></figure>Let users know what's playing <a href="#let-users-know-what&#39;s-playing" class="w-headline-link">#</a>

When a website is playing audio or video, users automatically get media notifications either in the notification tray on mobile, or the media hub on desktop. Chrome does its best to show appropriate information by using the document's title and the largest icon image it can find. With the Media Session API, it's possible to customize the media notification with some richer media metadata such as the title, artist name, album name, and artwork as shown below.

Chrome requests "full" audio focus to show media notifications only when the media duration is [at least 5 seconds](https://chromium.googlesource.com/chromium/src/+/5d8eab739eb23c4fd27ba6a18b0e1afc15182321/media/base/media_content_type.cc#10). This ensures that incidental sounds such as dings don't show notifications.

    // After media (video or audio) starts playing
    await document.querySelector("video").play();

    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        album: 'Whenever You Need Somebody',
        artwork: [
          { src: 'https://via.placeholder.com/96',   sizes: '96x96',   type: 'image/png' },
          { src: 'https://via.placeholder.com/128', sizes: '128x128', type: 'image/png' },
          { src: 'https://via.placeholder.com/192', sizes: '192x192', type: 'image/png' },
          { src: 'https://via.placeholder.com/256', sizes: '256x256', type: 'image/png' },
          { src: 'https://via.placeholder.com/384', sizes: '384x384', type: 'image/png' },
          { src: 'https://via.placeholder.com/512', sizes: '512x512', type: 'image/png' },
        ]
      });

      // TODO: Update playback state.
    }

When playback ends, there is no need to "release" the media session as the notification will automatically disappear. Keep in mind that `navigator.mediaSession.metadata` will be used when the next playback starts though. This is why it's important to update it when the media playback source changes to make sure relevant information is shown in the media notification.

There are a few things to note about the media metadata.

- Notification artwork array supports blob URLs and data URLs.
- If no artwork is defined and there is an icon image (specified using `<link rel=icon>`) at a desirable size, media notifications will use it.
- Notification artwork target size in Chrome for Android is `512x512`. For low-end devices, it is `256x256`.
- The `title` attribute of the media HTML element is used in the "Now playing" macOS widget.
- If the media resource is embedded (for example in a iframe), Media Session API information must be set from the embedded context. See snippet below.

<!-- -->

    <iframe id="iframe">
      <video>...</video>
    </iframe>
    <script>
      iframe.contentWindow.navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Never Gonna Give You Up',
        ...
      });
    </script>

## Let users control what's playing <a href="#let-users-control-what&#39;s-playing" class="w-headline-link">#</a>

A media session action is an action (for example "play" or "pause") that a website can handle for users when they interact with the current media playback. Actions are analogous to and work much the same as events. Like events, actions are implemented by setting handlers on an appropriate object, an instance of `MediaSession`, in this case. Some actions are triggered when users press buttons from a headset, another remote device, a keyboard, or interact with a media notification.

<figure><img src="https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format" alt="Customized media notification in Windows 10." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/9rN4x5GXdhg4qjC0ZEmk.jpg?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>Customized media notification in Windows 10.</figcaption></figure>Because some media session actions may not be supported, it is recommended to use a `try…catch` block when setting them.

    const actionHandlers = [
      ['play',          () => { /* ... */ }],
      ['pause',         () => { /* ... */ }],
      ['previoustrack', () => { /* ... */ }],
      ['nexttrack',     () => { /* ... */ }],
      ['stop',          () => { /* ... */ }],
      ['seekbackward',  (details) => { /* ... */ }],
      ['seekforward',   (details) => { /* ... */ }],
      ['seekto',        (details) => { /* ... */ }],
      /* Video conferencing actions */
      ['togglemicrophone', () => { /* ... */ }],
      ['togglecamera',     () => { /* ... */ }],
      ['hangup',           () => { /* ... */ }],
    ];

    for (const [action, handler] of actionHandlers) {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch (error) {
        console.log(`The media session action "${action}" is not supported yet.`);
      }
    }

Unsetting a media session action handler is as easy as setting it to `null`.

    try {
      // Unset the "nexttrack" action handler at the end of a playlist.
      navigator.mediaSession.setActionHandler('nexttrack', null);
    } catch (error) {
      console.log(`The media session action "nexttrack" is not supported yet.`);
    }

Once set, media session action handlers will persist through media playbacks. This is similar to the event listener pattern except that handling an event means that the browser stops doing any default behavior and uses this as a signal that the website supports the media action. Hence, media action controls won't be shown unless the proper action handler is set.

<figure><img src="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format" alt="Now Playing widget in macOS Big Sur (requires Chrome 91)." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/WBZAf1ymhtXInsWumHtw.jpg?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>Now Playing widget in macOS Big Sur (requires Chrome 91).</figcaption></figure>### Play / pause <a href="#play-pause" class="w-headline-link">#</a>

The `"play"` action indicates that the user wants to resume the media playback while `"pause"` indicates a desire to temporarily halt it.

The "play/pause" icon is always shown in a media notification and the related media events are handled automatically by the browser. To override their default behavior, handle "play" and "pause" media actions as shown below.

The browser may consider a website to not be playing media when seeking or loading for instance. In this case, override this behavior by setting `navigator.mediaSession.playbackState` to `"playing"` or `"paused"` to make sure the website UI stays in sync with media notification controls.

    const video = document.querySelector('video');

    navigator.mediaSession.setActionHandler('play', async () => {
      // Resume playback
      await video.play();
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      // Pause active playback
      video.pause();
    });

    video.addEventListener('play', () => {
      navigator.mediaSession.playbackState = 'playing';
    });

    video.addEventListener('pause', () => {
      navigator.mediaSession.playbackState = 'paused';
    });

### Previous track <a href="#previous-track" class="w-headline-link">#</a>

The `"previoustrack"` action indicates that the user either wants to start the current media playback from the beginning if the media playback has a notion of beginning, or move to the previous item in the playlist if the media playback has a notion of a playlist.

    navigator.mediaSession.setActionHandler('previoustrack', () => {
      // Play previous track.
    });

### Next track <a href="#next-track" class="w-headline-link">#</a>

The `"nexttrack"` action indicates that the user wants to move media playback to the next item in the playlist if the media playback has a notion of a playlist.

    navigator.mediaSession.setActionHandler('nexttrack', () => {
      // Play next track.
    });

### Stop <a href="#stop" class="w-headline-link">#</a>

The `"stop"` action indicates that the user wants to stop the media playback and clear the state if appropriate.

    navigator.mediaSession.setActionHandler('stop', () => {
      // Stop playback and clear state if appropriate.
    });

### Seek backward / forward <a href="#seek-backward-forward" class="w-headline-link">#</a>

The `"seekbackward"` action indicates that the user wants to move the media playback time backward by a short period while `"seekforward"` indicates a desire to move the media playback time forward by a short period. In both cases, a short period means a few seconds.

The `seekOffset` value provided in the action handler is the time in seconds to move the media playback time by. If it is not provided (for example `undefined`), then you should use a sensible time (for example 10-30 seconds).

    const video = document.querySelector('video');
    const defaultSkipTime = 10; /* Time to skip in seconds by default */

    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
      const skipTime = details.seekOffset || defaultSkipTime;
      video.currentTime = Math.max(video.currentTime - skipTime, 0);
      // TODO: Update playback state.
    });

    navigator.mediaSession.setActionHandler('seekforward', (details) => {
      const skipTime = details.seekOffset || defaultSkipTime;
      video.currentTime = Math.min(video.currentTime + skipTime, video.duration);
      // TODO: Update playback state.
    });

### Seek to a specific time <a href="#seek-to-a-specific-time" class="w-headline-link">#</a>

The `"seekto"` action indicates that the user wants to move the media playback time to a specific time.

The `seekTime` value provided in the action handler is the time in seconds to move the media playback time to.

The `fastSeek` boolean provided in the action handler is true if the action is being called multiple times as part of a sequence and this is not the last call in that sequence.

    const video = document.querySelector('video');

    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.fastSeek && 'fastSeek' in video) {
        // Only use fast seek if supported.
        video.fastSeek(details.seekTime);
        return;
      }
      video.currentTime = details.seekTime;
      // TODO: Update playback state.
    });

## Set playback position <a href="#set-playback-position" class="w-headline-link">#</a>

Accurately displaying the media playback position in a notification is as simple as setting the position state at an appropriate time as shown below. The position state is a combination of the media playback rate, duration, and current time.

<figure><img src="https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format" alt="Lock screen media controls in Chrome OS." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Rlw13wMoaJrDziraXgUc.jpg?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>Lock screen media controls in Chrome OS.</figcaption></figure>The duration must be provided and positive. The position must be positive and less than the duration. The playback rate must be greater than 0.

    const video = document.querySelector('video');

    function updatePositionState() {
      if ('setPositionState' in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: video.duration,
          playbackRate: video.playbackRate,
          position: video.currentTime,
        });
      }
    }

    // When video starts playing, update duration.
    await video.play();
    updatePositionState();

    // When user wants to seek backward, update position.
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
      /* ... */
      updatePositionState();
    });

    // When user wants to seek forward, update position.
    navigator.mediaSession.setActionHandler('seekforward', (details) => {
      /* ... */
      updatePositionState();
    });

    // When user wants to seek to a specific time, update position.
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      /* ... */
      updatePositionState();
    });

    // When video playback rate changes, update position state.
    video.addEventListener('ratechange', (event) => {
      updatePositionState();
    });

Resetting the position state is as easy as setting it to `null`.

    // Reset position state when media is reset.
    navigator.mediaSession.setPositionState(null);

## Video conferencing actions <a href="#video-conferencing-actions" class="w-headline-link">#</a>

When the user puts their video call into a Picture-in-Picture window, the browser may display controls for the microphone and camera, and for hanging up. When the user clicks those, the website handles them through the video conferencing actions below.

<figure><img src="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format" alt="Video conferencing controls in a Picture-in-Picture window." sizes="(min-width: 748px) 748px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/fXc7jqc95Oa6sKce7kpZ.jpg?auto=format&amp;w=1496 1496w" width="748" height="464" /><figcaption>Video conferencing controls in a Picture-in-Picture window.</figcaption></figure>At the time of writing, video conferencing actions are available only in Chrome 92 on desktop.

### Toggle microphone <a href="#toggle-microphone" class="w-headline-link">#</a>

The `"togglemicrophone"` action indicates that the user wants to mute or unmute the microphone. The `setMicrophoneActive(isActive)` method tells the browser whether the website currently considers the microphone to be active.

    let isMicrophoneActive = false;

    navigator.mediaSession.setActionHandler('togglemicrophone', () => {
      if (isMicrophoneActive) {
        // Mute the microphone.
      } else {
        // Unmute the microphone.
      }
      isMicrophoneActive = !isMicrophoneActive;
      navigator.mediaSession.setMicrophoneActive(isMicrophoneActive);
    });

### Toggle camera <a href="#toggle-camera" class="w-headline-link">#</a>

The `"togglecamera"` action indicates that the user wants to turn the active camera on or off. The `setCameraActive(isActive)` method indicates whether the browser considers the website to be active.

    let isCameraActive = false;

    navigator.mediaSession.setActionHandler('togglemicrophone', () => {
      if (isCameraActive) {
        // Disable the camera.
      } else {
        // Enable the camera.
      }
      isCameraActive = !isCameraActive;
      navigator.mediaSession.setCameraActive(isCameraActive);
    });

### Hang up <a href="#hang-up" class="w-headline-link">#</a>

The `"hangup"` action indicates that the user wants to end a call.

    navigator.mediaSession.setActionHandler('hangup', () => {
      // End the call.
    });

## Samples <a href="#samples" class="w-headline-link">#</a>

Check out some [Media Session samples](https://googlechrome.github.io/samples/media-session/) featuring [Blender Foundation](http://www.blender.org/) and [Jan Morgenstern's work](http://www.wavemage.com/category/music/).

A screencast illustrating the Media Session API.

## Resources <a href="#resources" class="w-headline-link">#</a>

- Media Session Spec: [wicg.github.io/mediasession](https://wicg.github.io/mediasession)
- Spec Issues: [github.com/WICG/mediasession/issues](https://github.com/WICG/mediasession/issues)
- Chrome Bugs: [crbug.com](https://crbug.com/?q=component:Internals%3EMedia%3ESession)

<a href="/tags/media/" class="w-chip">Media</a> <a href="/tags/audio/" class="w-chip">Audio</a>

<span class="w-mr--sm"> Last updated: Jul 1, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/media-session/index.md)

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
