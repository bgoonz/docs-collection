<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format" alt="Kid drawing, crafting, and painting rocks." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KEHQXWqr6s7VnEfTqVOC.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#customize-the-window-controls-overlay-of-your-pwa&#39;s-title-bar" class="w-toc__header--link">Customize the window controls overlay of your PWA's title bar</a>

- [Window Controls Overlay components](#window-controls-overlay-components)
- [What is Window Controls Overlay](#what-is-window-controls-overlay)
- [Current status](#status)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [How to use Window Controls Overlay](#how-to-use-window-controls-overlay)
- [Adding window-controls-overlay to the web app manifest](#adding-window-controls-overlay-to-the-web-app-manifest)
- [Moving content into the title bar](#moving-content-into-the-title-bar)
- [Determining which parts of the title bar are draggable](#determining-which-parts-of-the-title-bar-are-draggable)
- [Feature detection](#feature-detection)
- [Querying the window controls region with windowControlsOverlay](#querying-the-window-controls-region-with-windowcontrolsoverlay)
- [Determining if the window controls overlay is visible](#determining-if-the-window-controls-overlay-is-visible)
- [Being notified of geometry changes](#being-notified-of-geometry-changes)
- [Compatibility when running in a tab and on non-supporting browsers](#compatibility-when-running-in-a-tab-and-on-non-supporting-browsers)
- [Demo](#demo)
- [Security considerations](#security-considerations)
- [Spoofing](#spoofing)
- [Fingerprinting](#fingerprinting)
- [Navigation](#navigation)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Customize the window controls overlay of your PWA's title bar

Make use of the title bar area next to the window controls to make your PWA feel more like an app.

Apr 22, 2021 <span class="w-author__separator">•</span> Updated Aug 4, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/nr8opTnZn8ZFfrXzfGkV.png?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Amanda Baker" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/nr8opTnZn8ZFfrXzfGkV.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/nr8opTnZn8ZFfrXzfGkV.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/nr8opTnZn8ZFfrXzfGkV.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/nr8opTnZn8ZFfrXzfGkV.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/nr8opTnZn8ZFfrXzfGkV.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/amandabaker/)

<a href="/authors/amandabaker/" class="w-author__name-link">Amanda Baker</a>

- <a href="https://github.com/amandabaker" class="w-author__link">GitHub</a>

If you remember my article [Make your PWA feel more like an app](/app-like-pwas/), you may recall how I mentioned [customizing the title bar of your app](/app-like-pwas/#customized-title-bar) as a strategy for creating a more app-like experience. Here is an example of how this can look like showing the macOS Podcasts app.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format" alt="macOS Podcasts app title bar showing media control buttons and metadata about the currently playing podcast." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/o5gZ3GSKyUZOPhFxX7js.png?auto=format&amp;w=1600 1600w" width="800" height="63" />

Now you may be tempted to object by saying that Podcasts is a platform-specific macOS app that does not run in a browser and therefore can do what it wants without having to play by the browser's rules. True, but the good news is that the Window Controls Overlay feature, which is the topic of this very article, soon lets you create similar user interfaces for your PWA.

## Window Controls Overlay components <a href="#window-controls-overlay-components" class="w-headline-link">#</a>

Window Controls Overlay consists of four sub-features:

1.  The `"window-controls-overlay"` value for the [`"display_override"`](/display-override/) field in the web app manifest.
2.  The CSS environment variables `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, and `titlebar-area-height`.
3.  The standardization of the previously proprietary CSS property `-webkit-app-region` as the `app-region` property to define draggable regions in web content.
4.  A mechanism to query for and work around the window controls region via the `windowControlsOverlay` member of `window.navigator`.

## What is Window Controls Overlay <a href="#what-is-window-controls-overlay" class="w-headline-link">#</a>

The title bar area refers to the space to the left or right of the window controls (that is, the buttons to minimize, maximize, close, etc.) and often contains the title of the application. Window Controls Overlay lets progressive web applications (PWAs) provide a more app-like feel by swapping the existing full-width title bar for a small overlay containing the window controls. This allows developers to place custom content in what was previously the browser-controlled title bar area.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/window-controls-overlay/blob/main/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><a href="https://developer.chrome.com/origintrials/#/view_trial/-9105152546636300287"><strong>In progress</strong></a></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with Window Controls Overlay locally, without an origin trial token, enable the `#enable-desktop-pwas-window-controls-overlay` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chrome 92, Window Controls Overlay will be available as an origin trial in Chrome. The origin trial is expected to end in Chrome 94 (expected in July 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/-9105152546636300287) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

## How to use Window Controls Overlay <a href="#how-to-use-window-controls-overlay" class="w-headline-link">#</a>

### Adding `window-controls-overlay` to the web app manifest <a href="#adding-window-controls-overlay-to-the-web-app-manifest" class="w-headline-link">#</a>

A progressive web app can opt-in to the window controls overlay by adding `"window-controls-overlay"` as the primary `"display_override"` member in the web app manifest:

    {
      "display_override": ["window-controls-overlay"]
    }

The window controls overlay will be visible only when all of the following conditions are satisfied:

1.  The app is _not_ opened in the browser, but in a separate PWA window.
2.  The manifest includes `"display_override": ["window-controls-overlay"]`. (Other values are allowed thereafter.)
3.  The PWA is running on a desktop operating system.
4.  The current origin matches the origin for which the PWA was installed.

The result of this is an empty title bar area with the regular window controls on the left or the right, depending on the operating system.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format" alt="App window with an empty titlebar with the window controls on the right." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/7slf2HkHYGyhhLzdBz9Q.png?auto=format&amp;w=1600 1600w" width="800" height="112" />

### Moving content into the title bar <a href="#moving-content-into-the-title-bar" class="w-headline-link">#</a>

Now that there is space in the title bar, you can move something there. For this article, I have built a Chuck Norris jokes PWA. A useful feature for this app may be a search for words in jokes. Fun fact: Chuck Norris has installed this PWA on his iPhone and has let me know he loves the push notifications he receives whenever a new joke is submitted. The HTML for the search feature looks like this:

    <div class="search">
      <img src="chuck-norris.png" alt="Chuck Norris" width="32" height="32" />
      <label>
        <input type="search" />
        Search words in jokes
      </label>
    </div>

To move this `div` up into the title bar, some CSS is needed:

    .search {
      /* Make sure the `div` stays there, even when scrolling. */
      position: fixed;
      /**
       * Gradient, because why not. Endless opportunities.
       * The gradient ends in maroon, which happens to be the app's
       * `<meta name="theme-color" content="maroon">`.
       */
      background-image: linear-gradient(90deg, #131313, 33%, maroon);
      /* Use the environment variable for the left anchoring with a fallback. */
      left: env(titlebar-area-x, 0);
      /* Use the environment variable for the top anchoring with a fallback. */
      top: env(titlebar-area-y, 0);
      /* Use the environment variable for setting the width with a fallback. */
      width: env(titlebar-area-width, 100%);
      /* Use the environment variable for setting the height with a fallback. */
      height: env(titlebar-area-height, 33px);
    }

You can see the effect of this code in the screenshot below. The title bar is fully responsive. When you resize the PWA window, the title bar reacts as if it were composed of regular HTML content, which, in fact, it is.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format" alt="App window with a search bar in the title bar." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/5dc2j3CfrKczvTaASvKE.png?auto=format&amp;w=1600 1600w" width="800" height="112" />

### Determining which parts of the title bar are draggable <a href="#determining-which-parts-of-the-title-bar-are-draggable" class="w-headline-link">#</a>

While the screenshot above suggests that you are done, you are not done quite yet. The PWA window is no longer draggable (apart from a very small area), since the window controls buttons are no drag areas, and the rest of the title bar consists of the search widget. This can be fixed by leveraging the `app-region` CSS property with a value of `drag`. In the concrete case, it is fine to make everything besides the `input` element draggable.

    /* The entire search `div` is draggable… */
    .search {
      -webkit-app-region: drag;
      app-region: drag;
    }

    /* …except for the `input`. */
    input {
      -webkit-app-region: no-drag;
      app-region: no-drag;
    }

For now, `app-region` has not been standardized yet, so the plan is to continue using the prefixed `-webkit-app-region` until `app-region` is standardized. Currently, only `-webkit-app-region` is supported in the browser.

With this CSS in place, the user can drag the app window as usual by dragging the `div`, the `img`, or the `label`. Only the `input` element is interactive so the search query can be entered.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

Support for Window Controls Overlay can be detected by testing for the existence of `windowControlsOverlay`:

    if ('windowControlsOverlay' in navigator) {
      // Window Controls Overlay is supported.
    }

### Querying the window controls region with `windowControlsOverlay` <a href="#querying-the-window-controls-region-with-windowcontrolsoverlay" class="w-headline-link">#</a>

The code so far has only one problem: on some platforms the window controls are on the right, on others they are on the left. To make matters worse, the "three dots" Chrome menu will change position, too, based on the platform. This means that the linear gradient background image needs to be dynamically adapted to run from `#131313`→`maroon` or `maroon`→`#131313`→`maroon`, so that it blends in with the title bar's `maroon` background color that is determined by `<meta name="theme-color" content="maroon">`. This can be achieved by querying the [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) API on the `navigator.windowControlsOverlay` property.

    if ('windowControlsOverlay' in navigator) {
      const { x } = navigator.windowControlsOverlay.getBoundingClientRect();
      // Window controls are on the right (like on Windows).
      // Chrome menu is left of the window controls.
      // [ windowControlsOverlay___________________ […] [_] [■] [X] ]
      if (x === 0) {
        div.classList.add('search-controls-right');
      }
      // Window controls are on the left (like on macOS).
      // Chrome menu is right of the window controls overlay.
      // [ [X] [_] [■] ___________________windowControlsOverlay [⋮] ]
      else {
        div.classList.add('search-controls-left');
      }
    } else {
      // When running in a non-supporting browser tab.
      div.classList.add('search-controls-right');
    }

Rather than having the background image in the `.search` class CSS rules directly (as before), the modified code now uses two classes that the code above sets dynamically.

    /* For macOS: */
    .search-controls-left {
      background-image: linear-gradient(90deg, maroon, 45%, #131313, 90%, maroon);
    }

    /* For Windows: */
    .search-controls-right {
      background-image: linear-gradient(90deg, #131313, 33%, maroon);
    }

### Determining if the window controls overlay is visible <a href="#determining-if-the-window-controls-overlay-is-visible" class="w-headline-link">#</a>

The window controls overlay will not be visible in the title bar area in all circumstances. While it will naturally not be there on browsers that do not support the Window Controls Overlay feature, it will also not be there when the PWA in question runs in a tab. To detect this situation, you can query the `visible` property of the `windowControlsOverlay`:

    if (navigator.windowControlsOverlay.visible) {
      // The window controls overlay is visible in the title bar area.
    }

The window controls overlay visibility is not to be confused with the visibility in the CSS sense of whatever HTML content you place next to the window controls overlay. Even if you set `display: none` on the `div` placed into the window controls overlay, the `visible` property of the window controls overlay would still report `true`.

### Being notified of geometry changes <a href="#being-notified-of-geometry-changes" class="w-headline-link">#</a>

Querying the window controls overlay area with `getBoundingClientRect()` can suffice for one-off things like setting the correct background image based on where the window controls are, but in other cases, more fine-grained control is necessary. For example, a possible use case could be to adapt the window controls overlay based on the available space and to add a joke right in the window control overlay when there is enough space.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format" alt="Window controls overlay area on wide window displaying an additional joke (which reads Chuck Norris can find a word that rhymes with orange.)" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Unm5S2dB3szfFF2YCcFO.png?auto=format&amp;w=1600 1600w" width="800" height="73" />

You can be notified of geometry changes by subscribing to `navigator.windowControlsOverlay.ongeometrychange` or by setting up an event listener for the `geometrychange` event. This event will only fire when the window controls overlay is visible, that is, when `navigator.windowControlsOverlay.visible` is `true`.

Since this event fires frequently (comparable to how a scroll listener fires), I always recommend you use a [debounce function](https://css-tricks.com/the-difference-between-throttling-and-debouncing/#debouncing-enforces-that-a-function-not-be-called-again-until-a-certain-amount-of-time-has-passed-without-it-being-called-as-in-execute-this-function-only-if-100-milliseconds-have-passed-witho) so the event does not fire too often.

    const debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    if ('windowControlsOverlay' in navigator) {
      navigator.windowControlsOverlay.ongeometrychange = debounce((e) => {
        span.hidden = e.boundingRect.width < 800;
      }, 250);
    }

Rather than assigning a function to `ongeometrychange`, you can also add an event listener to `windowControlsOverlay` like below. You can read up on the difference between the two on [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers).

    navigator.windowControlsOverlay.addEventListener(
      'geometrychange',
      debounce((e) => {
        span.hidden = e.boundingRect.width < 800;
      }, 250),
    );

### Compatibility when running in a tab and on non-supporting browsers <a href="#compatibility-when-running-in-a-tab-and-on-non-supporting-browsers" class="w-headline-link">#</a>

There are two possible cases to consider:

- The case where an app is running in a browser that _does_ support Window Controls Overlay, but where the app is used in a browser tab.
- The case where an app is running in a browser that _does not_ support Window Controls Overlay.

In both cases, by default the HTML the developer has determined to be placed in the window controls overlay will display inline like regular HTML content and the `env()` variables' fallback values will kick in for the positioning. On supporting browsers, you can also decide to not display the HTML designated for the window controls overlay by checking the overlay's `visible` property, and if it reports `false`, then hiding that HTML content.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format" alt="PWA running in a browser tab with the window controls overlay displayed in the body." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jgS3hkEbaJ8bU2Jl9Pdz.png?auto=format&amp;w=1600 1600w" width="800" height="118" />

As a reminder, non-supporting browsers will either not consider the [`"display_override"`](/display-override/) web app manifest property at all, or not recognize the `"window-controls-overlay"` and thus use the next possible value according to the fallback chain, for example, `"standalone"`.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format" alt="PWA running in standalone mode with the window controls overlay displayed in the body." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/MMgzCRS0207kFpQnNwgb.png?auto=format&amp;w=1600 1600w" width="800" height="99" />

## Demo <a href="#demo" class="w-headline-link">#</a>

I have created a [demo](https://window-controls-overlay.glitch.me/) that you can play with in different supporting and non-supporting browsers and in the installed and non-installed state. For the actual Window Controls Overlay experience, you need to install the app and set the [flag](#enabling-via-chrome:flags). You can see two screenshots of what to expect below. The [source code](https://glitch.com/edit/#!/window-controls-overlay) of the app is available on Glitch.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format" alt="Chuck Norris jokes demo app with Window Controls Overlay." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lbwvSfjfLzPUSCDfDFDE.png?auto=format&amp;w=800 800w" width="400" height="312" />

The search feature in the window controls overlay is fully functional:

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format" alt="Chuck Norris jokes demo app with Window Controls Overlay and active search for the term &#39;canyon&#39; highlighting one of the jokes with the matched term." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KpJcvlSpdiVw4wG9zPt3.png?auto=format&amp;w=800 800w" width="400" height="312" />

## Security considerations <a href="#security-considerations" class="w-headline-link">#</a>

The Chromium team has designed and implemented the Window Controls Overlay API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

### Spoofing <a href="#spoofing" class="w-headline-link">#</a>

Giving sites partial control of the title bar leaves room for developers to spoof content in what was previously a trusted, browser-controlled region. Currently, in Chromium browsers, standalone mode includes a title bar which on initial launch displays the title of the webpage on the left, and the origin of the page on the right (followed by the "settings and more" button and the window controls). After a few seconds, the origin text disappears. If the browser is set to a right-to-left (RTL) language, this layout is flipped such that the origin text is on the left. This opens the window controls overlay to spoof the origin if there is insufficient padding between the origin and the right edge of the overlay. For example, the origin "evil.ltd" could be appended with a trusted site "google.com", leading users to believe that the source is trustworthy. The plan is to keep this origin text so that users know what the origin of the app is and can ensure that it matches their expectations. For RTL configured browsers, there must be enough padding to the right of the origin text to prevent a malicious website from appending the unsafe origin with a trusted origin.

### Fingerprinting <a href="#fingerprinting" class="w-headline-link">#</a>

Enabling the window controls overlay and draggable regions do not pose considerable privacy concerns other than feature detection. However, due to differing sizes and positions of the window controls buttons across operating systems, the JavaScript API for `navigator.windowControlsOverlay.getBoundingClientRect()` will return a [`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) whose position and dimensions will reveal information about the operating system upon which the browser is running. Currently, developers can already discover the OS from the user agent string, but due to fingerprinting concerns, there is discussion about freezing the UA string and unifying OS versions. There is an ongoing effort with the community to understand how frequently the size of the window controls overlay changes across platforms, as the current assumption is that these are fairly stable across OS versions and thus would not be useful for observing minor OS versions. Although this is a potential fingerprinting issue, it only applies to installed PWAs that use the custom title bar feature and does not apply to general browser usage. Additionally, the `navigator.windowControlsOverlay` API will not be available to iframes embedded inside of a PWA.

### Navigation <a href="#navigation" class="w-headline-link">#</a>

Navigating to a different origin within the PWA will cause it to fall back to the normal standalone title bar, even if it meets the above criteria and is launched with the window controls overlay. This is to accommodate the black bar that appears on navigation to a different origin. After navigating back to the original origin, the window controls overlay will be used again.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format" alt="Black URL bar for out-of-origin navigation." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/8Yn3rH0FirYKgiHKUCA7.png?auto=format&amp;w=1600 1600w" width="800" height="169" />

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with the Window Controls Overlay API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/window-controls-overlay/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `UI>Browser>WebAppInstalls` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Window Controls Overlay API? Your public support helps the Chromium team to prioritize features and shows other browser vendors how critical it is to support them.

Send a Tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) with the [`#WindowControlsOverlay`](https://twitter.com/search?q=%23WindowControlsOverlay&src=recent_search_click&f=live) hashtag and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Explainer](https://github.com/WICG/window-controls-overlay/blob/main/explainer.md)
- [Chromium bug](https://crbug.com/937121)
- [Chrome Platform Status entry](https://chromestatus.com/feature/5741247866077184)
- [TAG review](https://github.com/w3ctag/design-reviews/issues/481)
- [Microsoft Edge's related docs](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/experimental-features/#window-controls-overlay-for-installed-desktop-web-apps)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Window Controls Overlay was implemented and specified by [Amanda Baker](https://www.linkedin.com/in/amanda-baker-20a2b962/) from the Microsoft Edge team. This article was reviewed by [Joe Medley](https://github.com/jpmedley) and [Kenneth Rohde Christiansen](https://github.com/kenchris). Hero image by [Sigmund](https://unsplash.com/@sigmund) on [Unsplash](https://unsplash.com/photos/OV44gxH71DU).

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Aug 4, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/window-controls-overlay/index.md)

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
