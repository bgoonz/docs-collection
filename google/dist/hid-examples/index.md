<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format" alt="A generic game controller" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8TCwHOfb8SUWaVEtCx6j.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#human-interface-devices-on-the-web:-a-few-quick-examples" class="w-toc__header--link">Human interface devices on the web: a few quick examples</a>

- [What is the WebHID API?](#what)
- [Suggested use cases for the WebHID API](#use-cases)
- [Demos, demos, demos](#demos)
- [MacBook Pro keyboard backlight](#macbook-pro-keyboard-backlight)
- [Game controllers](#game-controllers)
- [PlayStation 4 Wireless controller](#playstation-4-wireless-controller)
- [Nintendo Switch Joy-Con controllers](#nintendo-switch-joy-con-controllers)
- [The BlinkStick Strip](#the-blinkstick-strip)
- [Blink, blink, blink](#blink-blink-blink)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Human interface devices on the web: a few quick examples

Connecting to uncommon devices from your app.

Jul 22, 2020 <span class="w-author__separator">•</span> Updated Jan 25, 2021

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/g2zwlKdDpsMMPtgkx3Gb.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Matt Reynolds" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/g2zwlKdDpsMMPtgkx3Gb.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/g2zwlKdDpsMMPtgkx3Gb.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/g2zwlKdDpsMMPtgkx3Gb.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/g2zwlKdDpsMMPtgkx3Gb.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/g2zwlKdDpsMMPtgkx3Gb.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mattreynolds/)

<a href="/authors/mattreynolds/" class="w-author__name-link">Matt Reynolds</a>

**Success**: The [WebHID API](/hid), part of the [capabilities project](/fugu-status/), launched in Chrome 89.

## What is the WebHID API? <a href="#what" class="w-headline-link">#</a>

There is a long tail of human interface devices (HIDs) that are too new, too old, or too uncommon to be accessible by systems' device drivers. The [WebHID API](/hid) solves this by providing a way to implement device-specific logic in JavaScript.

### Suggested use cases for the WebHID API <a href="#use-cases" class="w-headline-link">#</a>

An HID takes input from or provides output to humans. Examples of devices include keyboards, pointing devices (mice, touchscreens, etc.), and gamepads. The [HID protocol](https://www.usb.org/hid) makes it possible to access these devices on desktop computers using operating system drivers. The web platform supports HIDs by relying on these drivers.

The inability to access uncommon HID devices is particularly painful when it comes to gamepad support. Gamepads designed for PC often use HID for gamepad inputs (buttons, joysticks, triggers) and outputs (LEDs, rumble). However, gamepad inputs and outputs are not well standardized and web browsers often require custom logic for specific devices. This is unsustainable and results in poor support for the long tail of older and uncommon devices. It also causes the browser to depend on quirks present in the behavior of specific devices.

## Demos, demos, demos <a href="#demos" class="w-headline-link">#</a>

If you're curious about how any of these samples work, the source code for all of them is available on GitHub. [There's a barebones code example](https://github.com/WICG/webhid/blob/master/EXPLAINER.md#example) in the explainer.

### MacBook Pro keyboard backlight <a href="#macbook-pro-keyboard-backlight" class="w-headline-link">#</a>

The biggest barrier to trying out any of these demos is lack of access to the device. Fortunately, if you have a MacBook Pro with a TouchBar, you don't need to buy anything. This demo lets you use the API right from your laptop. It also shows how WebHID can be used to unlock functionality of built-in devices, not just peripherals.

**Author:** FWeinb  
**Demo/Source:** [Keyboard Backlight](https://codesandbox.io/s/webhid-demo-keyboard-backlight-qlq95)

## Game controllers <a href="#game-controllers" class="w-headline-link">#</a>

### PlayStation 4 Wireless controller <a href="#playstation-4-wireless-controller" class="w-headline-link">#</a>

Next up is something fewer of you are likely to have. Sony's DualShock 4 is a wireless controller for PlayStation 4 game consoles.

The DualShock 4 Demo uses WebHID to receive the raw input reports from the DualShock 4 and provides a high-level API to access the controller's gyroscope, accelerometer, touchpad, button, and thumbstick inputs. It also supports rumble and setting the color of an RGB LED housed within the controller.

**Author:** TheBITLINK  
**Demo:** [DualShock 4 Demo](https://thebitlink.github.io/WebHID-DS4/) ([Source](https://github.com/TheBITLINK/WebHID-DS4))

### Nintendo Switch Joy-Con controllers <a href="#nintendo-switch-joy-con-controllers" class="w-headline-link">#</a>

Play the Chrome dino 🦖 offline game by actually jumping with a Nintendo Switch Joy-Con controller in your pants pockets. This demo is powered by [Joy-Con WebHID](https://github.com/tomayac/joy-con-webhid), a WebHID driver for the Nintendo Switch Joy-Con controllers.

**Author:** [Thomas Steiner](/authors/thomassteiner/)  
**Demo:** [Chrome Dino WebHID](https://tomayac.github.io/chrome-dino-webhid/) ([demo source](https://github.com/tomayac/chrome-dino-webhid), [driver source](https://github.com/tomayac/joy-con-webhid))

### The BlinkStick Strip <a href="#the-blinkstick-strip" class="w-headline-link">#</a>

BlinkStick Strip is a HID-compliant light strip with 8 RGB LEDs. The demo allows the user to select from several blink patterns including chase, blink, and Larson scanner (aka Cylon).

**Author:** Robat Williams  
**Demo:** [blinkstick-strip](https://robatwilliams.github.io/webhid-demos/blinkstick-strip/) ([source](https://github.com/robatwilliams/webhid-demos))

### Blink, blink, blink <a href="#blink-blink-blink" class="w-headline-link">#</a>

What does this demo do? (Wait for it.) It blinks. Actually it's three demos that use the blink(1) USB notification light.

blink(1) is simple and well-documented, which makes it a great option for getting started with HID.

**Author:** Tod E. Kurt  
**Demos:** [blink(1)](https://blink1.thingm.com/) ([source](https://github.com/todbot/blink1-webhid))

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thank you to [Pete LePage](/authors/petelepage/) and [Kayce Basques](https://github.com/kaycebasques) for reviews of this article.

Photo by [Ugur Akdemir](https://unsplash.com/@ugur?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/game-controllers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/games/" class="w-chip">Games</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Jan 25, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/hid-examples/index.md)

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
