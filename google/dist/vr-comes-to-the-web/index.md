<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format" alt="A person using a virtual reality headset." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/5TAFoyhWvniJzDchNzPT.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#virtual-reality-comes-to-the-web" class="w-toc__header--link">Virtual reality comes to the web</a>

- [What is the immersive web?](#what-is-the-immersive-web)
- [Concepts and usage](#concepts-and-usage)
- [Request a session](#request-a-session)
- [Enter a session](#enter-a-session)
- [Run a frame loop](#run-a-frame-loop)
- [End the session](#end-the-session)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Virtual reality comes to the web

A few basics to prepare you for a spectrum of immersive experiences: virtual reality, augmented reality, and everything in between.

Oct 31, 2019 <span class="w-author__separator">•</span> Updated Mar 2, 2020

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Immersive experiences came to the web in Chrome 79. The WebXR Device API brings virtual reality brought virtual reality, while support for augmented reality arrives in Chrome 81. While an update to the GamePad API extends the advanced use of controlls to VR. Other browsers will be supporting these specs soon, including Firefox Reality, Oculus Browser, Edge and Magic Leap's Helio browser, among others.

This article begins a series on the immersive web. This installment covers setting up a basic WebXR application as well as entering and exiting an XR session. Later articles will cover the frame loop (the workhorse of WebXR experience), the specifics of augmented reality, and the WebXR Hit Test API, a means of detecting surfaces in an AR session. Unless stated otherwise, everything I cover in this and succeeding articles applies equally to both AR and VR.

## What is the immersive web? <a href="#what-is-the-immersive-web" class="w-headline-link">#</a>

Though we use two terms to describe immersive experiences—augmented reality and virtual reality—many think of them on a spectrum from complete reality to completely virtual, with degrees of immersion in between. The 'X' in XR is intended to reflect that thinking by being a sort of algebraic variable that stands for anything in the spectrum of immersive experiences.

<figure><img src="https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format" alt="The spectrum of immersive experiences" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/iQ99APUTFIgjdRPyS1C4.png?auto=format&amp;w=1600 1600w" width="800" height="204" /><figcaption>The spectrum of immersive experiences</figcaption></figure>Examples of immersive experiences include:

- Games
- 360° videos
- Traditional 2D (or 3D) videos presented in immersive surroundings
- Home buying
- Viewing products in your home before you buy them
- Immersive art
- Something cool nobody's thought of yet

## Concepts and usage <a href="#concepts-and-usage" class="w-headline-link">#</a>

I'll explain a few basics of using the WebXR Device API. If you need more depth than I've provided, check out the Immersive Web Working Group's [WebXR samples](https://immersive-web.github.io/webxr-samples/) or [MDN's growing reference materials](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API). If you're familiar with early versions of the WebXR Device API, you should glance over all of this material. There have been changes.

The code in this article is based on the Immersive Web Working Group's barebones sample ([demo](https://immersive-web.github.io/webxr-samples/vr-barebones.html), [source](https://github.com/immersive-web/webxr-samples/blob/master/vr-barebones.html)), but is edited for clarity and simplicity.

Part of creating the WebXR specification has been fleshing out security and privacy measures to protect users. Consequently, implementations must adhere to certain requirements. A web page or app must be active and focused before it can request anything sensitive from the viewer. Web pages or apps must be served over HTTPS. The API itself is designed to protect information obtained from sensors and cameras, which it needs in order to function.

### Request a session <a href="#request-a-session" class="w-headline-link">#</a>

Entering an XR session requires a user gesture. To get that, use feature detection to test for `XRSystem` (via `navigator.xr`) and make a call to `XRSystem.isSessionSupported()`. Be aware that in Chrome versions 79 and 80 the `XRSystem` object was called `XR`.

In the example below, I've indicated that I want a virtual reality session with the `'immersive-vr'` session type. The [other session types](https://developer.mozilla.org/en-US/docs/Web/API/XR/isSessionSupported#Syntax) are `'immersive-ar'` and `'inline'`. An inline session is for presenting content within HTML and is mainly used for teaser content. The [Immersive AR Session](https://immersive-web.github.io/webxr-samples/immersive-ar-session.html) sample demonstrates this. I'll explain that in a later article.

Once I know that virtual reality sessions are supported, I enable a button that lets me acquire a user gesture.

    if (navigator.xr) {
      const supported = await navigator.xr.isSessionSupported('immersive-vr');
      if (supported) {
        xrButton.addEventListener('click', onButtonClicked);
        xrButton.textContent = 'Enter VR';
        xrButton.enabled = supported; // supported is Boolean
      }
    }

After enabling the button, I wait for a click event then request a session.

    let xrSession = null;
    function onButtonClicked() {
      if (!xrSession) {
        navigator.xr.requestSession('immersive-vr')
        .then((session) => {
          xrSession = session;
          xrButton.textContent = 'Exit XR';
          onSessionStarted(xrSession);
        });
      } else {
        xrSession.end();
      }
    }

Notice the object hierarchy in this code. It moves from `navigator` to `xr` to an `XRSession` instance. In early versions of the API, a script had to request a device before requesting a session. Now, the device is acquired implicitly.

### Enter a session <a href="#enter-a-session" class="w-headline-link">#</a>

After getting a session, I need to start it and enter it. But first, I need to set up a few things. A session needs an `onend` event handler so that the app or web page can be reset when the user exits.

I'll also need a `<canvas>` element to draw my scene on. It needs to be an XR-compatible [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext) or [WebGL2RenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext). All drawing is done using them or a WebGL-based framework such as [Three.js](https://threejs.org/).

Now that I have a place to draw, I need a source of content to draw on it. For that, I create an instance of `XRWebGLLayer`. I associate it with the canvas by calling `XRSession.updateRenderState()`.

Once I'm in a session, I need a way of determining where things are in virtual reality. I'll need a reference space. A `'local-floor'` reference space is one where the origin is located near the viewer and the y-axis is 0 at floor level and is not expected to move. There are [other types of reference spaces](https://developer.mozilla.org/en-US/docs/Web/API/XRSession/requestReferenceSpace), but that is a more complicated topic than I can go into here. I save the reference space to a variable because I'll need it when I draw to the screen.

    function onSessionStarted(xrSession) {
      xrSession.addEventListener('end', onSessionEnded);

      let canvas = document.createElement('canvas');
      webGLRenContext = canvas.getContext('webgl', { xrCompatible: true });

      xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(xrSession, webGLRenContext)
      });

      xrSession.requestReferenceSpace('local-floor')
      .then((refSpace) => {
        xrRefSpace = refSpace;
        xrSession.requestAnimationFrame(onXRFrame);
      });
    }

After getting a reference space, I call `XRSession.requestAnimationFrame()`. This is the start of presenting virtual content, which is done in the frame loop.

### Run a frame loop <a href="#run-a-frame-loop" class="w-headline-link">#</a>

The frame loop is a user-agent controlled infinite loop in which content is repeatedly drawn to the screen. Content is drawn in discrete blocks called frames. The succession of frames creates the illusion of movement. For VR applications the frames per second can be anywhere from 60 to 144. AR for Android runs at 30 frames per second. Your code should not assume any particular frame rate.

The basic process for the frame loop is:

1.  Call `XRSession.requestAnimationFrame()`. In response, the user agent invokes the `XRFrameRequestCallback`, which is defined by you.
2.  Inside your callback function:
    1.  Call `XRSession.requestAnimationFrame()` again.
    2.  Get the viewer's pose.
    3.  Pass ('bind') the `WebGLFramebuffer` from the `XRWebGLLayer` to the `WebGLRenderingContext`.
    4.  Iterate over each `XRView` object, retrieving its `XRViewport` from the `XRWebGLLayer` and passing it to the `WebGLRenderingContext`.
    5.  Draw something to the framebuffer.

The remainder of this article describes step 1 and part of step 2, setting up and calling the `XRFrameRequestCallback`. The remaining items of step 2 are covered in part II.

#### The XRFrameRequestCallback <a href="#the-xrframerequestcallback" class="w-headline-link">#</a>

The `XRFrameRequestCallback` is defined by you. It takes two parameters: a `DOMHighResTimeStamp` and an `XRFrame` instance. The `XRFrame` object provides the information needed to render a single frame to the display. The `DOMHighResTimeStamp` argument is for future use.

Before doing anything else, I'm going to request the next animation frame. As previously stated, the timing of frames is determined by the user agent based on the underlying hardware. Requesting the next frame first ensures that the frame loop continues if something during the callback throws an error.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      // Render a frame.
    }

At this point, it's time to draw something for the viewer. That's a discussion for part II. Before going there, let me show you how to end a session.

### End the session <a href="#end-the-session" class="w-headline-link">#</a>

An immersive session may end for several reasons including ending by your own code through a call to `XRSession.end()`. Other causes include the headset being disconnected or another application taking control of it. This is why a well-behaved application should monitor the `end` event. When it occurs, discard the session and its related render objects. An ended immersive session cannot be resumed. To reenter the immersive experience, my app needs to start a new session.

Recall from [Entering a session](#entering-a-session) that during setup, I added an `onend` event handler.

    function onSessionStarted(xrSession) {
      xrSession.addEventListener('end', onSessionEnded);
      // More setup…
    }

Inside the event handler, restore the state of the app before the user entered a session.

    function onSessionEnded(event) {
      xrSession = null;
      xrButton.textContent = 'Enter VR';
    }

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

I haven't explained everthing you need to write a Web XR or AR application. Hopefull, I've give you enought to start making sense of the code for yourself, and enough to start experimenting. In the next article, I'll explain the frame loop, which is where content is drawn to the screen.

Photo by [JESHOOTS.COM](https://unsplash.com/@jeshoots) on [Unsplash](https://unsplash.com/)

<a href="/tags/augmented-reality/" class="w-chip">Augmented Reality</a> <a href="/tags/virtual-reality/" class="w-chip">Virtual Reality</a> <a href="/tags/webxr/" class="w-chip">WebXR</a>

<span class="w-mr--sm"> Last updated: Mar 2, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/vr-comes-to-the-web/index.md)

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
