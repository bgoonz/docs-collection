<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format" alt="Gamer girl is playing FPS online video game on her computer" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8cpTXMJGUfcdNXLc6obE.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#disable-mouse-acceleration-to-provide-a-better-fps-gaming-experience" class="w-toc__header--link">Disable mouse acceleration to provide a better FPS gaming experience</a>

- [Using the API](#use)
- [Request a pointer lock](#request)
- [Disable mouse acceleration](#disable-mouse-acceleration)
- [Browser support](#browser-support)
- [Operating system support](#os-support)
- [Sample](#sample)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Disable mouse acceleration to provide a better FPS gaming experience

Web apps can now disable mouse acceleration when capturing pointer events.

Nov 26, 2020

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

Accelerated movement is an ergonomic feature when using a mouse or trackpad to move the pointer on screen. It allows precise movement by moving slowly while also allowing the pointer to cross the entire screen with a quick short motion. Specifically, for the same physical distance that you move the mouse, the pointer on screen travels further if the distance was traveled faster.

Operating systems enable mouse acceleration by default. For some [first-party perspective](<https://en.wikipedia.org/wiki/First-person_(video_games)>) games, commonly first party shooters (FPS), raw mouse input data is used to control camera rotation without an acceleration adjustment. The same physical motion, slow or fast, results in the same rotation. This results in a better gaming experience and higher accuracy according to professional gamers.

<figure><img src="https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format" alt="Pointer motion control in Windows 10 settings." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/4x9YZ7nC3SJMN9FI46zN.png?auto=format&amp;w=1600 1600w" width="800" height="260" /><figcaption>Pointer motion control in Windows 10 settings.</figcaption></figure>Starting in Chrome 88, web apps can switch back and forth between accelerated and non-accelerated mouse movement data thanks to the [updated Pointer Lock API](https://github.com/w3c/pointerlock/pull/49).

Web-based gaming platforms such as [Google Stadia](https://en.wikipedia.org/wiki/Google_Stadia) and [Nvidia GeForce Now](https://en.wikipedia.org/wiki/GeForce_Now) already use these new capabilities to please FPS gamers.

## Using the API <a href="#use" class="w-headline-link">#</a>

### Request a pointer lock <a href="#request" class="w-headline-link">#</a>

A pointer lock is the canonical term for when a desktop application hides the pointer icon and interprets mouse motion for something else, e.g. looking around in a 3D world.

The `movementX` and `movementY` attributes from the `mousemove` document events tell you how much the mouse pointer moved since the last move event. However, those are not updated when the pointer moves outside of the web page.

    document.addEventListener("mousemove", (event) => {
      console.log(`movementX: ${event.movementX} movementY: ${event.movementY}`);
    });

Capturing the mouse pointer (or requesting a pointer lock) allows you to not worry about the pointer moving outside anymore. This is especially useful for immersive web games. When the pointer is locked, all mouse events go to the target element of the pointer lock.

Call `requestPointerLock()` on the target element to request a pointer lock, and listen to `pointerlockchange` and `pointerlockerror` events to monitor pointer lock changes.

    const myTargetElement = document.body;

    // Call this function to request a pointer lock.
    function requestPointerLock() {
      myTargetElement.requestPointerLock();
    }

    document.addEventListener("pointerlockchange", () => {
      if (document.pointerLockElement) {
        console.log(`pointer is locked on ${document.pointerLockElement}`);
      } else {
        console.log("pointer is unlocked");
      }
    });

    document.addEventListener("pointerlockerror", () => {
      console.log("pointer lock error");
    });

### Disable mouse acceleration <a href="#disable-mouse-acceleration" class="w-headline-link">#</a>

Call `requestPointerLock()` with `{ unadjustedMovement: true }` to disable OS-level adjustment for mouse acceleration, and access raw mouse input. This way, mouse movement data from `mousemove` events won't include mouse acceleration when the pointer is locked.

Use the new returned promise from `requestPointerLock()` to know if the request was successful.

    function requestPointerLockWithUnadjustedMovement() {
      const promise = myTargetElement.requestPointerLock({
        unadjustedMovement: true,
      });

      if (!promise) {
        console.log("disabling mouse acceleration is not supported");
        return;
      }

      return promise
        .then(() => console.log("pointer is locked"))
        .catch((error) => {
          if (error.name === "NotSupportedError") {
            // Some platforms may not support unadjusted movement.
            // You can request again a regular pointer lock.
            return myTargetElement.requestPointerLock();
          }
        });
    }

It is possible to toggle between accelerated and non-accelerated mouse movement data without releasing the pointer lock. Simply request the pointer lock again with the desired option. If that request fails, the original lock will remain intact and the returned promise will reject. No pointer lock events will fire for a failed change request.

### Browser support <a href="#browser-support" class="w-headline-link">#</a>

The Pointer Lock API is [well supported across browsers](https://caniuse.com/?search=pointerlock). However Chromium-based browsers (e.g. Chrome, Edge, etc.) are the only ones to support disabling OS-level adjustment for mouse acceleration as of October 2020. See MDN's [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API#Browser_compatibility) table for updates.

### Operating system support <a href="#os-support" class="w-headline-link">#</a>

Disabling OS-level adjustment for mouse acceleration is supported on Chrome OS, macOS Catalina 10.15.1, and Windows. Linux will follow.

## Sample <a href="#sample" class="w-headline-link">#</a>

You can play with the Pointer Lock API by running the [sample](https://unadjusted-movement.glitch.me/) on Glitch. Be sure to [check out the source code](https://glitch.com/edit/#!/unadjusted-movement?path=script.js).

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Explainer](https://github.com/slightlyoff/unadjusted_pointer_lock_explainer)
- [Specification PR](https://github.com/w3c/pointerlock/pull/49)
- [GitHub repository](https://github.com/w3c/pointerlock)
- [ChromeStatus entry](https://www.chromestatus.com/feature/5723553087356928)
- [Chrome tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=982379)
- [Intent to ship](https://groups.google.com/a/chromium.org/d/msg/blink-dev/cQn7OwcMQ64/OWmA9KMKBQAJ)
- [Mozilla's position](https://github.com/mozilla/standards-positions/issues/448)
- [WebKit's position](https://lists.webkit.org/pipermail/webkit-dev/2020-October/031473.html)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [James Hollyer](https://github.com/jameshollyergoogle), [Thomas Steiner](https://github.com/tomayac), [Joe Medley](https://github.com/jpmedley), [Kayce Basques](https://github.com/kaycebasques), and [Vincent Scheib](https://github.com/scheib) for their reviews of this article.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/games/" class="w-chip">Games</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Nov 26, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/disable-mouse-acceleration/index.md)

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
