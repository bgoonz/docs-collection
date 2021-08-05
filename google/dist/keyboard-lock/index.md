<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UypqCqH1QwndHuE6xFfg.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#capture-keys-with-the-keyboard-lock-api" class="w-toc__header--link">Capture Keys with the Keyboard Lock API</a>

- [Using the Keyboard Lock API](#using-the-keyboard-lock-api)
- [Prerequisite](#prerequisite)
- [Browser compatibility](#browser-compatibility)
- [Feature detection](#feature-detection)
- [Locking the keyboard](#locking-the-keyboard)
- [Unlocking the keyboard](#unlocking-the-keyboard)
- [Demo](#demo)
- [Security Considerations](#security-considerations)
- [Helpful links](#helpful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Capture Keys with the Keyboard Lock API

Provide an immersive, full screen experience for a variety of use cases including interactive websites, games, and remote desktop or application streaming.

Jul 28, 2020

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

With more and more users spending most of their time in the browser, richly interactive websites, games, remote desktop streaming, and application streaming strive to provide an immersive, full screen experience. To accomplish this, sites need access to special keys and keyboard shortcuts while they are in full screen mode, so that they can be used for navigation, menus, or gaming functionality. Some examples of the keys that may be required are Esc, Alt + Tab, Cmd + \`, and Ctrl + N.

By default, these keys are not available to the web application because they are captured by the browser or the underlying operating system. The Keyboard Lock API enables websites to use all available keys allowed by the host OS (see [Browser compatibility](#browser-compatibility)).

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format" alt="The problem: a streamed Ubuntu Linux remote desktop not running in full screen mode and without active keyboard lock, so system keys are still captured by the macOS host operating system and the experience is not immersive yet." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/6iFOOM7ImdtiMJHlbCnz.png?auto=format&amp;w=1600 1600w" width="800" height="496" /><figcaption>The problem: a streamed Ubuntu Linux remote desktop <em>not</em> running in full screen mode and <em>without</em> active keyboard lock, so system keys are still captured by the macOS host operating system and the experience is <em>not</em> immersive yet.</figcaption></figure>Using the Keyboard Lock API <a href="#using-the-keyboard-lock-api" class="w-headline-link">#</a>

The [`Keyboard` interface](https://developer.mozilla.org/en-US/docs/Web/API/Keyboard) of the Keyboard API provides functions that toggle capturing of key presses from the physical keyboard as well as getting information about the used [keyboard layout](https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/getLayoutMap).

### Prerequisite <a href="#prerequisite" class="w-headline-link">#</a>

There are two different types of full screen available in modern browsers: JavaScript-initiated via the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) and user-initiated via a keyboard shortcut. The Keyboard Lock API is only available when [JavaScript-initiated full screen](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen) is active. Here's an example of JavaScript-initiated full screen:

    await document.documentElement.requestFullscreen();

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

You can see browser compatibility on [Can I use](https://caniuse.com/#feat=mdn-api_keyboard_lock). Note that not all system keys can be locked. This varies from operating system to operating system. For example, follow [crbug.com/855738](https://crbug.com/855738) for progress updates on system keyboard lock for macOS.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

You can use the following pattern to check if the Keyboard Lock API is supported:

    if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
      // Supported!
    }

### Locking the keyboard <a href="#locking-the-keyboard" class="w-headline-link">#</a>

The [`lock()`](https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/lock) method of the `Keyboard` interface returns a promise after enabling the capture of key presses for any or all of the keys on the physical keyboard. This method can only capture keys that are granted access by the underlying operating system. The `lock()` method takes an array of one or more key codes to lock. If no key codes are provided, all keys will be locked. A list of valid key code values is available in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#keyboard-key-codes) spec.

#### Capturing all keys <a href="#capturing-all-keys" class="w-headline-link">#</a>

The following example captures all key presses.

    navigator.keyboard.lock();

#### Capturing specific keys <a href="#capturing-specific-keys" class="w-headline-link">#</a>

The following example captures the W, A, S, and D keys. It captures these keys regardless of which modifiers are used with the key press. Assuming a US QWERTY layout, registering `"KeyW"` ensures that W, Shift + W, Control + W, Control + Shift + W, and all other key modifier combinations with W are sent to the app. The same applies to `"KeyA"`, `"KeyS"`, and `"KeyD"`.

    await navigator.keyboard.lock([
      "KeyW",
      "KeyA",
      "KeyS",
      "KeyD",
    ]);

You can respond to captured key presses using keyboard events. For example this code uses the `onkeydown` event:

    document.addEventListener('keydown', (e) => {
      if ((e.code === 'KeyA') && !(event.ctrlKey || event.metaKey)) {
        // Do something when the 'A' key was pressed, but only
        // when not in combination with the command or control key.
      }
    });

### Unlocking the keyboard <a href="#unlocking-the-keyboard" class="w-headline-link">#</a>

The [`unlock()`](https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/unlock) method unlocks all keys captured by the `lock()` method and returns synchronously.

    navigator.keyboard.unlock();

When a document is closed, the browser always implicitly calls `unlock()`.

## Demo <a href="#demo" class="w-headline-link">#</a>

You can test the Keyboard Lock API by running the [demo](https://keyboard-lock.glitch.me/) on Glitch. Be sure to [check out the source code](https://glitch.com/edit/#!/keyboard-lock). Clicking the Enter full screen button below launches the demo in a new window so it can enter full screen mode.

## Security Considerations <a href="#security-considerations" class="w-headline-link">#</a>

One concern with this API is that it could be used to grab all of the keys and (in conjunction with the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) and the [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API)) prevent the user from exiting the web page. To prevent this, the spec requires the browser to provide a way for the user to exit from keyboard lock even if all of the keys are requested by the API. In Chrome, this escape hatch is a long (two second) Esc key press to trigger an exit from Keyboard Lock.

## Helpful links <a href="#helpful-links" class="w-headline-link">#</a>

- [Specification draft](https://wicg.github.io/keyboard-lock/)
- [GitHub repository](https://github.com/WICG/keyboard-lock)
- [ChromeStatus entry](https://chromestatus.com/feature/5642959835889664)
- [Chrome tracking bug](https://crbug.com/677559)
- [Key codes for standard keyboards](https://www.w3.org/TR/uievents-code/#keyboard-key-codes)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [Joe Medley](https://github.com/jpmedley) and [Kayce Basques](https://github.com/kaycebasques). The Keyboard Lock spec is authored by [Gary Kacmarcik](https://www.linkedin.com/in/garykac) and [Jamie Walch](https://www.linkedin.com/in/jamie-walch-395b332b). Hero image by [Ken Suarez](https://unsplash.com/@kensuarez) on [Unsplash](https://unsplash.com/s/photos/padlock-computer).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 28, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/keyboard-lock/index.md)

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
