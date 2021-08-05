<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format" alt="Simulated trading desk showing multiple fake cryptocurrencies and their price charts." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/9wQYJACMKOM6aUA0BPsW.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#managing-several-displays-with-the-multi-screen-window-placement-api" class="w-toc__header--link">Managing several displays with the Multi-Screen Window Placement API</a>

- [Suggested use cases](#use-cases)
- [Current status](#status)
- [How to use the Multi-Screen Window Placement API](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [The problem](#the-problem)
- [Feature detection](#feature-detection)
- [The window-placement permission](#the-window-placement-permission)
- [The window.screen.isExtended property](#the-window.screen.isextended-property)
- [The getScreens() method](<#the-getscreens()-method>)
- [The screenschange event](#the-screenschange-event)
- [The currentscreenchange event](#the-currentscreenchange-event)
- [The change event](#the-change-event)
- [New fullscreen options](#new-fullscreen-options)
- [Polyfill](#polyfill)
- [Demo](#demo)
- [Security and permissions](#security-and-permissions)
- [User control](#user-control)
- [Transparency](#transparency)
- [Permission persistence](#permission-persistence)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Managing several displays with the Multi-Screen Window Placement API

Get information about connected displays and position windows relative to those displays.

Sep 14, 2020 <span class="w-author__separator">•</span> Updated Jul 19, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The Multi-Screen Window Placement API is part of the [capabilities project](/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

The Multi-Screen Window Placement API allows you to enumerate the displays connected to your machine and to place windows on specific screens.

### Suggested use cases <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- Multi-window graphics editors à la [Gimp](https://www.gimp.org/release-notes/gimp-2.8.html#single-window-mode) can place various editing tools in accurately positioned windows.
- Virtual trading desks can show market trends in multiple windows any of which can be viewed in fullscreen mode.
- Slideshow apps can show speaker notes on the internal primary screen and the presentation on an external projector.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/webscreens/window-placement/blob/main/EXPLAINER.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://webscreens.github.io/window-placement/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><strong><a href="https://developer.chrome.com/origintrials/#/view_trial/-8087339030850568191">In progress</a></strong></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use the Multi-Screen Window Placement API <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the Multi-Screen Window Placement API locally, without an origin trial token, enable the `#enable-experimental-web-platform-features` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

A first origin trial ran from Chromium 86 to Chromium 88. After this origin trial, we made some [changes](https://github.com/webscreens/window-placement/blob/main/CHANGES.md) to the API. The article has been updated accordingly.

Starting in Chromium 93, the Multi-Screen Window Placement API will again be available as an origin trial in Chromium. This second origin trial is expected to end in Chromium 95 (November 10, 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/-8087339030850568191) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### The problem <a href="#the-problem" class="w-headline-link">#</a>

The time-tested approach to controlling windows, [`Window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open), is unfortunately unaware of additional screens. While some aspects of this API seem a little archaic, such as its [`windowFeatures`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Parameters:~:text=title.-,windowFeatures) `DOMString` parameter, it has nevertheless served us well over the years. To specify a window's [position](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Position), you can pass the coordinates as `left` and `top` (or `screenX` and `screenY` respectively) and pass the desired [size](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Size:~:text=well.-,Size) as `width` and `height` (or `innerWidth` and `innerHeight` respectively). For example, to open a 400×300 window at 50 pixels from the left and 50 pixels from the top, this is the code that you could use:

    const popup = window.open(
      'https://example.com/',
      'My Popup',
      'left=50,top=50,width=400,height=300',
    );

You can get information about the current screen by looking at the [`window.screen`](https://developer.mozilla.org/en-US/docs/Web/API/Window/screen) property, which returns a [`Screen`](https://developer.mozilla.org/en-US/docs/Web/API/Screen) object. This is the output on my MacBook Pro 13″:

    window.screen;
    /* Output from my MacBook Pro 13″:
      availHeight: 969
      availLeft: 0
      availTop: 25
      availWidth: 1680
      colorDepth: 30
      height: 1050
      id: ""
      internal: false
      isExtended: true
      left: 0
      onchange: null
      orientation: ScreenOrientation {angle: 0, type: "landscape-primary", onchange: null}
      pixelDepth: 30
      primary: false
      scaleFactor: 2
      top: 0
      touchSupport: false
      width: 1680
    */

Like most people working in tech, I have had to adapt myself to the new work reality and set up my personal home office. Mine looks like on the photo below (if you are interested, you can read the [full details about my setup](https://blog.tomayac.com/2020/03/23/my-working-from-home-setup-during-covid-19/)). The iPad next to my MacBook is connected to the laptop via [Sidecar](https://support.apple.com/en-us/HT210380), so whenever I need to, I can quickly turn the iPad into a second screen.

<figure><img src="https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format" alt="A multi-screen setup." sizes="(min-width: 558px) 558px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Qt3SlHOLDzxpZ3l3bN5t.jpg?auto=format&amp;w=1116 1116w" width="558" height="520" /><figcaption>A multi-screen setup.</figcaption></figure>If I want to take advantage of the bigger screen, I can put the popup from the [code sample](/multi-screen-window-placement/#the-problem) above on to the second screen. I do it like this:

    popup.moveTo(2500, 50);

This is a rough guess, since there is no way to know the dimensions of the second screen. The info from `window.screen` only covers the built-in screen, but not the iPad screen. The reported `width` of the built-in screen was `1680` pixels, so moving to `2500` pixels _might_ work to shift the window over to the iPad, since _I_ happen to know that it is located on the right of my MacBook. How can I do this in the general case? Turns out, there is a better way than guessing. That way is the Multi-Screen Window Placement API.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the Multi-Screen Window Placement API is supported, use:

    if ('getScreens' in window) {
      // The Multi-Screen Window Placement API is supported.
    }

### The `window-placement` permission <a href="#the-window-placement-permission" class="w-headline-link">#</a>

Before I can use the Multi-Screen Window Placement API, I must ask the user for permission to do so. The new `window-placement` permission can be queried with the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) like so:

    let granted = false;
    try {
      const { state } = await navigator.permissions.query({ name: 'window-placement' });
      granted = state === 'granted';
    } catch {
      // Nothing.
    }

The browser [can](https://webscreens.github.io/window-placement/#usage-overview-screen-information:~:text=This%20method%20may%20prompt%20the%20user%20for%20permission) choose to show the permission prompt dynamically on the first attempt to use any of the methods of the new API. Read on to learn more.

### The `window.screen.isExtended` property <a href="#the-window.screen.isextended-property" class="w-headline-link">#</a>

To find out if more than one screen is connected to my device, I access the `window.screen.isExtended` property. It returns `true` or `false`. For my setup, it returns `true`.

    window.screen.isExtended;
    // Returns `true` or `false`.

### The `getScreens()` method <a href="#the-getscreens()-method" class="w-headline-link">#</a>

Now that I know that the current setup is multi-screen, I can obtain more information about the second screen using `Window.getScreens()`. Calling this function will show a permission prompt that asks me whether the site may open and place windows on my screen. The function returns a promise that resolves with an array of `ScreenAdvanced` objects. On my MacBook Pro 13 with a connected iPad, this returns an array of two `ScreenAdvanced` objects:

    await window.getScreens();
    /* Output from my MacBook Pro 13″ with the iPad attached:
    {
      currentScreen: ScreenAdvanced {left: 0, top: 0, isPrimary: true, isInternal: true, devicePixelRatio: 2, …}
      oncurrentscreenchange: null
      onscreenschange: null
      screens: [{
        // The MacBook Pro
        availHeight: 969
        availLeft: 0
        availTop: 25
        availWidth: 1680
        colorDepth: 30
        devicePixelRatio: 2
        height: 1050
        id: ""
        internal: false
        isExtended: true
        isInternal: true
        isPrimary: true
        label: ""
        left: 0
        onchange: null
        orientation: ScreenOrientation {angle: 0, type: "landscape-primary", onchange: null}
        pixelDepth: 30
        pointerTypes: []
        primary: false
        scaleFactor: 2
        top: 0
        touchSupport: false
        width: 1680
      },
      {
        // The iPad
        availHeight: 999
        availLeft: 1680
        availTop: 25
        availWidth: 1366
        colorDepth: 24
        devicePixelRatio: 2
        height: 1024
        id: ""
        internal: false
        isExtended: true
        isInternal: false
        isPrimary: false
        label: ""
        left: 1680
        onchange: null
        orientation: ScreenOrientation {angle: 0, type: "landscape-primary", onchange: null}
        pixelDepth: 24
        pointerTypes: []
        primary: false
        scaleFactor: 2
        top: 0
        touchSupport: false
      }]
    }
    */

Information about the connected screens is available in the `screens` array. Note how the value of `left` for the iPad starts at `1680`, which is exactly the `width` of the built-in display. This allows me to determine exactly how the screens are arranged logically (next to each other, on top of each other, etc.). There is also data now for each screen to show whether it is an `isInternal` one and whether it is an `isPrimary` one. Note that the built-in screen [is not necessarily the primary screen](https://osxdaily.com/2010/04/27/set-the-primary-display-mac/#:~:text=Click%20on%20the%20Display%20icon,primary%20display%20for%20your%20Mac). Both also have a `label` and an `id`, which, if persisted across browser sessions, allows for window arrangements to be restored. Information about the possible input methods are available in the `pointerTypes` array.

The `currentScreen` field is a live object corresponding to the current `window.screen`. The object is updated on cross-screen window placements or device changes.

### The `screenschange` event <a href="#the-screenschange-event" class="w-headline-link">#</a>

The only thing missing now is a way to detect when my screen setup changes. A new event, `screenschange`, does exactly that: it fires whenever the screen constellation is modified. (Notice that "screens" is plural in the event name.) This means the event fires whenever a new screen or an existing screen is (physically or virtually in the case of Sidecar) plugged in or unplugged.

Note that you need to look up the new screen details asynchronously, the `screenschange` event itself does not provide this data. To look up the screen details, use the live object from a cached `Screens` interface.

    const screensInterface = await window.getScreens();
    let cachedScreensLength = screensInterface.screens.length;
    screensInterface.addEventListener('screenschange', (event) => {
      if (screensInterface.screens.length !== cachedScreensLength) {
        console.log(
          `The screen count changed from ${cachedScreensLength} to ${screensInterface.screens.length}`,
        );
        cachedScreensLength = screensInterface.screens.length;
      }
    });

### The `currentscreenchange` event <a href="#the-currentscreenchange-event" class="w-headline-link">#</a>

If I am only interested in changes to the current screen (that is, the value of the live object `currentScreen`), I can listen for the `currentscreenchange` event.

    const screensInterface = await window.getScreens();
    screensInterface.addEventListener('currentscreenchange', async (event) => {
      const details = screensInterface.currentScreen;
      console.log('The current screen has changed.', event, details);
    });

### The `change` event <a href="#the-change-event" class="w-headline-link">#</a>

Finally, if I am only interested in changes to a concrete screen, I can listen to that screen's `change` event.

    const firstScreen = (await window.getScreens())[0];
    firstScreen.addEventListener('change', async (event) => {
      console.log('The first screen has changed.', event, firstScreen);
    });

### New fullscreen options <a href="#new-fullscreen-options" class="w-headline-link">#</a>

Until now, you could request that elements be displayed in fullscreen mode via the aptly named [`requestFullScreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen) method. The method takes an `options` parameter where you can pass [`FullscreenOptions`](https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions). So far, its only property has been [`navigationUI`](https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions/navigationUI). The Multi-Screen Window Placement API adds a new `screen` property that allows you to determine which screen to start the fullscreen view on. For example, if you want to make the primary screen fullscreen:

    try {
      const primaryScreen = (await getScreens()).filter((screen) => screen.primary)[0];
      await document.body.requestFullscreen({ screen: primaryScreen });
    } catch (err) {
      console.error(err.name, err.message);
    }

### Polyfill <a href="#polyfill" class="w-headline-link">#</a>

It is not possible to polyfill the Multi-Screen Window Placement API, but you can shim its shape so you can code exclusively against the new API:

    if (!('getScreens' in window)) {
      // Returning a one-element array with the current screen,
      // noting that there might be more.
      window.getScreens = async () => [window.screen];
      // Set to `false`, noting that this might be a lie.
      window.screen.isExtended = false;
    }

The other aspects of the API, that is, the various screen change events and the `screen` property of the `FullscreenOptions`, would simply never fire or silently be ignored respectively by non-supporting browsers.

## Demo <a href="#demo" class="w-headline-link">#</a>

If you are anything like me, you keep a close eye on the development of the various cryptocurrencies. (In reality I very much do not, but, for the sake of this article, just assume I do.) To keep track of the cryptocurrencies that I own, I have developed a web app that allows me to watch the markets in all life situations, such as from the comfort of my bed, where I have a decent single-screen setup.

<figure><img src="https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format" alt="Relaxing and watching the markets." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/sSLkcAMHuqBaj4AmT5eP.jpg?auto=format&amp;w=1600 1600w" width="800" height="863" /><figcaption>Relaxing and watching the markets.</figcaption></figure>This being about crypto, the markets can get hectic at any time. Should this happen, I can quickly move over to my desk where I have a multi-screen setup. I can click on any currency's window and quickly see the full details in a fullscreen view on the opposite screen. Below is a recent photo of me taken during the last [YCY bloodbath](https://www.youtube.com/watch?v=dQw4w9WgXcQ). It caught me completely off-guard and left me [with my hands on my face](https://www.buzzfeednews.com/article/gavon/brokers-with-hands-on-their-faces).

<figure><img src="https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format" alt="Panicky, witnessing the YCY bloodbath." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wFu8TBzOAqaKCgcERr3z.jpg?auto=format&amp;w=1600 1600w" width="800" height="600" /><figcaption>Panicky, witnessing the YCY bloodbath.</figcaption></figure>You can play with the [demo](https://window-placement.glitch.me/) embedded below, or see its [source code](https://glitch.com/edit/#!/window-placement) on glitch.

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chrome team has designed and implemented the Multi-Screen Window Placement API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. The Multi-Screen Window Placement API exposes new information about the screens connected to a device, increasing the fingerprinting surface of users, especially those with multiple screens consistently connected to their devices. As one mitigation of this privacy concern, the exposed screen properties are limited to the minimum needed for common placement use cases. User permission is required for sites to get multi-screen information and place windows on other screens.

### User control <a href="#user-control" class="w-headline-link">#</a>

The user is in full control of the exposure of their setup. They can accept or decline the permission prompt, and revoke a previously granted permission via the site information feature in the browser.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

The fact whether the permission to use the Multi-Screen Window Placement API has been granted is exposed in the browser's site information and is also queryable via the Permissions API.

### Permission persistence <a href="#permission-persistence" class="w-headline-link">#</a>

The browser persists permission grants. The permission can be revoked via the browser's site information.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the Multi-Screen Window Placement API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that does not work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model?

- File a spec issue on the corresponding [GitHub repo](https://github.com/webscreens/window-placement/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter [`Blink>WindowDialog`](https://bugs.chromium.org/p/chromium/issues/list?q=component:Blink%3EWindowDialog) in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Multi-Screen Window Placement API? Your public support helps the Chrome team to prioritize features and shows other browser vendors how critical it is to support them.

- Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/proposal-supporting-window-placement-on-multi-screen-devices/3948).
- Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#WindowPlacement`](https://twitter.com/search?q=%23WindowPlacement&src=typed_query&f=live) and let us know where and how you are using it.
- Ask other browser vendors to implement the API.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Spec draft](https://webscreens.github.io/window-placement/)
- [Public explainer](https://github.com/webscreens/window-placement/blob/main/EXPLAINER.md)
- [Multi-Screen Window Placement API demo](https://window-placement.glitch.me/) | [Multi-Screen Window Placement API demo source](https://glitch.com/edit/#!/window-placement)
- [Chromium tracking bug](https://crbug.com/897300)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5252960583942144)
- Blink Component: [`Blink>WindowDialog`](https://bugs.chromium.org/p/chromium/issues/list?q=component:Blink%3EWindowDialog)
- [TAG Review](https://github.com/w3ctag/design-reviews/issues/522)
- [Intent to Experiment](https://groups.google.com/a/chromium.org/g/blink-dev/c/C6xw8i1ZIdE/m/TJsr0zXxBwAJ)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The Multi-Screen Window Placement API spec was edited by [Victor Costan](https://www.linkedin.com/in/pwnall) and [Joshua Bell](https://www.linkedin.com/in/joshuaseanbell). The API was implemented by [Mike Wasserman](https://www.linkedin.com/in/mike-wasserman-9900a079/) and [Adrienne Walker](https://github.com/quisquous). This article was reviewed by [Joe Medley](https://github.com/jpmedley), [François Beaufort](https://github.com/beaufortfrancois), and [Kayce Basques](https://github.com/kaycebasques). Thanks to Laura Torrent Puig for the photos.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 19, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/multi-screen-window-placement/index.md)

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
