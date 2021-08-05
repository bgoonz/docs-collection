<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#new-capabilities-status" class="w-toc__header--link">New capabilities status</a>

- [Capabilities available behind a flag](#flag)
- [Capabilities available as an origin trial](#origin-trial)
- [Capabilities available in stable](#in-stable)
- [Suggest a new capability](#suggest-new)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# New capabilities status

Web apps should be able to do anything iOS/Android/desktop apps can. The members of the cross-company capabilities project want to make it possible for you to build and deliver apps on the open web that have never been possible before.

Nov 12, 2018 <span class="w-author__separator">•</span> Updated Jun 8, 2021

This is a living document and will be updated as features move between states.

The [capabilities project](https://developers.google.com/web/updates/capabilities) is a cross-company effort with the objective of making it possible for web apps to do anything iOS/Android/desktop apps can, by exposing the capabilities of these platforms to the web platform, while maintaining user security, privacy, trust, and other core tenets of the web.

You can see the full list of new and potential capabilities at the [Fugu API Tracker](https://goo.gle/fugu-api-tracker).

## Capabilities available behind a flag <a href="#flag" class="w-headline-link">#</a>

These APIs are only available behind a flag. They're experimental and still under development. They are not ready for use in production. There's a good chance there are bugs, that these APIs will break, or the API surface will change.<span id="shape-face-text"></span>

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Capability</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><a href="/shape-detection/">Shape Detection (Face and Text)</a></td><td>Shape detection opens up standardized implementations of shape detection services and exposes them through a set of JavaScript interfaces. In additon to the APIs below, the Barcode Detection API is available in stable. For more information, see <a href="#shape-barcode">Shape Detection (Barcode)</a>.<ul><li><a href="https://www.chromestatus.com/feature/5678216012365824">Face Detection API</a></li><li><a href="https://www.chromestatus.com/feature/5644087665360896">Text Detection API</a></li></ul><em>Updated April 14, 2020</em></td></tr></tbody></table>

## Capabilities available as an origin trial <a href="#origin-trial" class="w-headline-link">#</a>

These APIs are available as an [origin trial](https://developers.chrome.com/origintrials/#/trials/active) in Chrome. Origin trials provide an opportunity for Chrome to validate experimental features and APIs, and make it possible for you to provide feedback on their usability and effectiveness in broader deployment.

Opting into an origin trial allows you to build demos and prototypes that your beta testing users can try for the duration of the trial without requiring them to flip any special flags in their browser. There's more info on origin trials in the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md).

<table><thead><tr class="header"><th>Capability</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><a href="/handwriting-recognition/">Handwriting Recognition</a></td><td>The Handwriting Recognition API lets web applications use advanced handwriting recognition services to translate handwriting to text as it's written.<br />
<em>Updated May 11, 2021</em></td></tr><tr class="even"><td><a href="/idle-detection/">Idle Detection API</a></td><td>The Idle Detection API notifies developers when a user is idle, indicating such things as lack of interaction with the keyboard, mouse, screen, activation of a screensaver, locking of the screen, or moving to a different screen. A developer-defined threshold triggers the notification.<br />
<em>Updated August 11, 2020</em></td></tr><tr class="odd"><td><a href="/notification-triggers/">Notification Triggers</a></td><td>Notification Triggers let you schedule notifications in advance, so that the operating system will deliver the notification at the right time-even if there is no network connectivity, or the device is in battery saver mode.<br />
<em>Updated September 28, 2020</em></td></tr></tbody></table>

## Capabilities available in stable <a href="#in-stable" class="w-headline-link">#</a>

The following APIs have graduated from origin trial and are available in the latest version of Chrome, and in many cases other Chromium based browsers.

<table><thead><tr class="header"><th>Capability</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><a href="/image-support-for-async-clipboard/">Async Clipboard API (images)</a></td><td>The Asynchronous Clipboard API makes it possible to read and write text or image data to the clipboard, without blocking the main thread.<br />
<em>Updated February 26, 2020</em></td></tr><tr class="even"><td><a href="/badging-api/">Badging API</a></td><td>The Badging API allows web apps to set an application-wide badge, shown in an operating-system-specific place associated with the application, such as the shelf or home screen. Badging makes it easy to subtly notify the user that there is some new activity that might require their attention, or it can be used to indicate a small amount of information, such as an unread count.<br />
<em>Updated March 16, 2020</em></td></tr><tr class="odd"><td><a href="/camera-pan-tilt-zoom/">Camera pan, tilt, and zoom</a></td><td>Pan, tilt, and zoom features on cameras are accessible on the web, after requesting proper user permissions.<br />
<em>Updated October 5, 2020</em></td></tr><tr class="even"><td><a href="/contact-picker/">Contact Picker API</a></td><td>The Contact Picker API is an on-demand picker that allows users to select entries from their contact list and share limited details of the selected entries with a website. It allows users to share only what they want, when they want, and makes it easier for users to reach and connect with their friends and family.<br />
<em>Updated January 10, 2020</em></td></tr><tr class="odd"><td><a href="/content-indexing-api/">Content Indexing API</a></td><td>Your PWA might cache articles and media files, but how will your users know that your pages work while offline? The Content Indexing API is one answer to this question. Once the index is populated with content from your PWA, as well as any other installed PWAs, it will show up in dedicated areas of supported browsers.<br />
<em>Updated January 21, 2021</em></td></tr><tr class="even"><td><a href="/file-system-access/">File System Access API</a></td><td>The File System Access API (formerly known as Native File System API and prior to that Writable Files API) enables developers to build powerful web apps that interact with files on the user's local device, like IDEs, photo and video editors, text editors, and more. After a user grants a web app access, this API allows web apps to read or save changes directly to files and folders on the user's device.<br />
<em>Updated September 23, 2020</em></td></tr><tr class="odd"><td><a href="/get-installed-related-apps/">Get Installed Related Apps API</a></td><td>The Get Installed Related Apps API is a web platform API that allows your web app to check to see if your iOS or Android app is installed on the users device, and vice versa.<br />
<em>Updated December 18, 2019</em></td></tr><tr class="even"><td><a href="/periodic-background-sync/">Periodic Background Sync API</a></td><td>Periodic Background Sync enables web applications to periodically synchronize data in the background, bringing web apps closer to the behavior of a platform-specific app.<br />
<em>Updated December 18, 2019</em><span id="shape-barcode"></span></td></tr><tr class="odd"><td><a href="/shape-detection/">Shape Detection (Barcode)</a></td><td>Shape detection opens up standardized implementations of shape detection services and exposes them through a set of JavaScript interfaces. Shape detection has three separate APIs, of which the Barcode API is only one. See <a href="#shape-face-text">Shape Detection (Face and Text)</a> for information on other shape detection APIs that are under development.<br />
<em>Updated April 14, 2020</em></td></tr><tr class="even"><td><a href="/wake-lock/">Wake Lock API</a></td><td>To avoid draining the battery, most devices will quickly fall asleep when left idle. While this is fine most of the time, there are some applications that need to keep the screen or the device awake in order to complete some work. The Wake Lock API provides a way to prevent the device from dimming or locking the screen or prevent the device from going to sleep when an application needs to keep running.<br />
<em>Updated June 24, 2020</em></td></tr><tr class="odd"><td><a href="/nfc/">Web NFC</a></td><td>Web NFC provides sites the ability to read and write to NFC tags when they are in close proximity to the user's device. For example, museums and art galleries could display additional information about a display when the user touches their device to an NFC card near the exhibit; or an inventory management web app could read or write data to an NFC tag on a container to update information on its contents.<br />
<em>Updated January 21, 2021</em></td></tr><tr class="even"><td><a href="/serial/">Web Serial API</a></td><td>The Web Serial API provides a way for websites to read from and write to a serial device with scripts. The API bridges the web and the physical world by allowing websites to communicate with serial devices, such as microcontrollers and 3D printers.<br />
<em>Updated January 21, 2021</em></td></tr><tr class="odd"><td><a href="/sms-receiver-api-announcement/">WebOTP API</a></td><td>Finding, memorizing, and typing OTPs sent via SMS is cumbersome. The WebOTP API (formerly the SMS Receiver API) simplifies the OTP workflow for users.<br />
<em>Updated March 26, 2020</em></td></tr><tr class="even"><td><a href="/web-share/">Web Share</a></td><td>With the Web Share API, web apps are able to use the same system-provided share capabilities as platform-specific apps. The Web Share API makes it possible for web apps to share links, text, and files to other apps installed on the device in the same way as platform-specific apps.<br />
<em>Updated November 8, 2019</em></td></tr><tr class="odd"><td><a href="/web-share-target/">Web Share Target</a></td><td>The Web Share Target API allows installed web apps to register with the underlying OS as a share target to receive shared content from either the Web Share API or system events, like the OS-level share button.<br />
<em>Updated November 8, 2019</em></td></tr><tr class="even"><td><a href="/hid/">WebHID API</a></td><td>There is a long tail of human interface devices (HIDs), such as alternative keyboards or exotic gamepads, that are too new, too old, or too uncommon to be accessible by systems' device drivers. The WebHID API solves this by providing a way to implement device-specific logic in JavaScript.<br />
<em>Updated January 21, 2021</em></td></tr></tbody></table>

## Suggest a new capability <a href="#suggest-new" class="w-headline-link">#</a>

Do you have a suggestion for a capability you think Chromium should consider? Tell us about it by filing a [new feature request](https://goo.gl/qWhHXU). Please be sure to include as much detail as you can, such as the problem you're trying to solve, suggested use cases, and anything else that might be helpful.

Want to try some of these new capabilities? Check out the [Web Capabilities Codelab](https://developers.google.com/codelabs/project-fugu#0).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jun 8, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/fugu-status/index.md)

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
