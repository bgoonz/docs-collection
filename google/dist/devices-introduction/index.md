<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format" alt="A woman sitting in front of a wooden desk photo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/vAnNpGQruw5EUXxob47V.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#accessing-hardware-devices-on-the-web" class="w-toc__header--link">Accessing hardware devices on the web</a>

- [🕹 Receive input events from this device](#input)
- [📸 Access audio and video from this device](#audio-video)
- [🖨 Print to this device](#print)
- [🔐 Authenticate with this device](#auth)
- [🗄 Access files on this device](#files)
- [🧲 Access sensors on this device](#sensors)
- [🛰 Access GPS coordinates on this device](#gps)
- [🔋 Check the battery on this device](#battery)
- [📞 Communicate with this device over the network](#network)
- [🧱 Discover how to communicate with your device](#discover)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Accessing hardware devices on the web

Pick the appropriate API to communicate with a hardware device of your choice.

Feb 12, 2021 <span class="w-author__separator">•</span> Updated Feb 12, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

The goal of this guide is to help you pick the best API to communicate with a hardware device (e.g. webcam, microphone, etc.) on the web. By "best" I mean it gives you everything you need with the shortest amount of work. In other words, you know the general use case you want to solve (e.g. accessing video) but you don't know what API to use or wonder if there's another way to achieve it.

One problem that I commonly see web developers fall into is jumping into low-level APIs without learning about the higher-level APIs that are easier to implement and provide a better UX. Therefore, this guide starts by recommending higher-level APIs first, but also mentions lower-level APIs in case you have determined that the higher-level API doesn't meet your needs.

## 🕹 Receive input events from this device <a href="#input" class="w-headline-link">#</a>

Try listening for [Keyboard](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) and [Pointer](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) events. If this device is a game controller, use the [Gamepad API](/gamepad/) to know which buttons are being pressed and which axes moved.

If none of these options work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 📸 Access audio and video from this device <a href="#audio-video" class="w-headline-link">#</a>

Use [MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) to get live audio and video streams from this device and learn about [capturing audio and video](https://www.html5rocks.com/en/tutorials/getusermedia/intro/). You can also [control the camera's pan, tilt, and zoom](/camera-pan-tilt-zoom/), and other camera settings such as [brightness and contrast](https://developers.google.com/web/updates/2016/12/imagecapture), and even [take still images](https://beaufortfrancois.github.io/sandbox/image-capture/playground). [Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) can be used to add effects to audio, create audio visualizations, or apply spatial effects (such as panning). Check out [how to profile the performance of Web Audio apps](/profiling-web-audio-apps-in-chrome/) in Chrome as well.

If none of these options work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 🖨 Print to this device <a href="#print" class="w-headline-link">#</a>

Use [window.print()](https://developer.mozilla.org/en-US/docs/Web/API/Window/print) to open a browser dialog that lets the user pick this device as a destination to print the current document.

If this doesn't work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 🔐 Authenticate with this device <a href="#auth" class="w-headline-link">#</a>

Use [WebAuthn](https://webauthn.io/) to create a strong, attested, and origin-scoped public-key credential with this hardware security device to authenticate users. It supports the use of Bluetooth, NFC, and USB-roaming U2F or FIDO2 authenticators —also known as security keys— as well as a platform authenticator, which lets users authenticate with their fingerprints or screen locks. Check out [Build your first WebAuthn app](https://codelabs.developers.google.com/codelabs/webauthn-reauth/).

If this device is another type of hardware security device (e.g. a cryptocurrency wallet), a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 🗄 Access files on this device <a href="#files" class="w-headline-link">#</a>

Use the [File System Access API](/file-system-access/) to read from and save changes directly to files and folders on the user's device. If not available, use the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to ask the user to select local files from a browser dialog and then read the contents of those files.

If none of these options work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 🧲 Access sensors on this device <a href="#sensors" class="w-headline-link">#</a>

Use the [Generic Sensor API](/generic-sensor/) to read raw sensor values from motion sensors (e.g. accelerometer or gyroscope) and environmental sensors (e.g. ambient light, magnetometer). If not available, use the [DeviceMotion and DeviceOrientation](https://developers.google.com/web/fundamentals/native-hardware/device-orientation) events to get access to the built-in accelerometer, gyroscope, and compass in mobile devices.

If it doesn't work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 🛰 Access GPS coordinates on this device <a href="#gps" class="w-headline-link">#</a>

Use the [Geolocation API](https://developers.google.com/web/fundamentals/native-hardware/user-location) to get the latitude and longitude of the user's current position on this device.

If it doesn't work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 🔋 Check the battery on this device <a href="#battery" class="w-headline-link">#</a>

Use the [Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) to get host information about the battery charge level and be notified when the battery level or charging status change.

If it doesn't work for you, a low-level API may be the solution. Check out [Discover how to communicate with your device](#discover) to start your journey.

## 📞 Communicate with this device over the network <a href="#network" class="w-headline-link">#</a>

In the local network, use the [Remote Playback API](https://www.chromestatus.com/feature/5778318691401728) to broadcast audio and/or video on a remote playback device (e.g. a smart TV or a wireless speaker) or use the [Presentation API](https://developers.google.com/web/updates/2018/04/present-web-pages-to-secondary-attached-displays) to render a web page on a second screen (e.g. a secondary display connected with an HDMI cable or a smart TV connected wirelessly).

If this device exposes a web server, use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and/or [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to fetch some data from this device by hitting appropriate endpoints. While TCP and UDP sockets are not available on the web, check out [WebTransport](/webtransport/) to handle interactive, bidirectional, and multiplexed network connections. Note that [WebRTC](/webrtc-standard-announcement/) can also be used to communicate data in real-time with other browsers using a peer-to-peer protocol.

## 🧱 Discover how to communicate with your device <a href="#discover" class="w-headline-link">#</a>

The decision of what low-level API you should use is determined by the nature of your physical connection to the device. If it is wireless, check out Web NFC for very short-range wireless connections and Web Bluetooth for nearby wireless devices.

- With [Web NFC](/nfc), read and write to this device when it's in close proximity to the user's device (usually 5–10 cm, 2–4 inches). Tools like [NFC TagInfo by NXP](https://play.google.com/store/apps/details?id=com.nxp.taginfolite) allow you to browse the content of this device for reverse-engineering purposes.

- With [Web Bluetooth](/bluetooth/), connect to this device over a Bluetooth Low Energy connection. It should be pretty easy to communicate with when it uses standardized Bluetooth GATT services (such as the battery service) as their behavior is [well-documented](https://www.bluetooth.com/specifications/gatt/). If not, at this point, you either have to find some hardware documentation for this device or reverse-engineer it. You can use external tools like [nRF Connect for Mobile](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) and built-in browser tools such as the internal page `about://bluetooth-internals` in Chromium-based browsers for that. Check out [Reverse-Engineering a Bluetooth Lightbulb](https://urish.medium.com/reverse-engineering-a-bluetooth-lightbulb-56580fcb7546) from Uri Shaked. Note that Bluetooth devices may also speak the HID or serial protocols.

If wired, check out these APIs in this specific order:

1.  With [WebHID](/hid/), understanding HID reports and report descriptors through [collections](https://webhid-collections.glitch.me/) is key to your comprehension of this device. This can be challenging without vendor documentation for this device. Tools like [Wireshark](https://gitlab.com/wireshark/wireshark/-/wikis/CaptureSetup/USB) can help you reverse-engineering it.

2.  With [Web Serial](/serial/), without vendor documentation for this device and what commands this device supports, it's hard but still possible with lucky guessing. Reverse-engineering this device can be done by capturing raw USB traffic with tools like [Wireshark](https://gitlab.com/wireshark/wireshark/-/wikis/CaptureSetup/USB). You can also use the [Serial Terminal web app](https://googlechromelabs.github.io/serial-terminal/) to experiment with this device if it uses a human-readable protocol.

3.  With [WebUSB](/usb/), without clear documentation for this device and what USB commands this device supports, it's hard but still possible with lucky guessing. Watch [Exploring WebUSB and its exciting potential](https://www.youtube.com/watch?v=IpfZ8Nj3uiE) from Suz Hinton. You can also reverse-engineer this device by capturing raw USB traffic and inspecting [USB descriptors](https://www.beyondlogic.org/usbnutshell/usb5.shtml) with external tools like Wireshark and built-in browser tools such as the internal page `about://usb-internals` in Chromium-based browsers.

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [Reilly Grant](https://github.com/reillyeon), [Thomas Steiner](/authors/thomassteiner/), and [Kayce Basques](/authors/kaycebasques/) for reviewing this article.

Photo by [Darya Tryfanava](https://unsplash.com/@darya_tryfanava) on [Unsplash](https://unsplash.com/photos/uZBGDkYkvhM).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Feb 12, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/devices-introduction/index.md)

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
