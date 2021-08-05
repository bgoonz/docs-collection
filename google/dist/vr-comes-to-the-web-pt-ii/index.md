<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format" alt="A person using a virtual reality headset." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/2OEKtIp4RJNtX0stioZF.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#virtual-reality-comes-to-the-web-part-ii" class="w-toc__header--link">Virtual reality comes to the web, part II</a>

- [What this article is not](#what-this-article-is-not)
- [The players and the game](#the-players-and-the-game)
- [The players](#the-players)
- [XRViewerPose](#xrviewerpose)
- [XRView](#xrview)
- [XRWebGLLayer](#xrwebgllayer)
- [WebGLFramebuffer](#webglframebuffer)
- [XRViewport](#xrviewport)
- [WebGLRenderingContext](#webglrenderingcontext)
- [The game](#the-game)
- [Get the viewer's pose](#get-the-viewer's-pose)
- [A short detour](#a-short-detour)
- [Pass ('bind') the WebGLFramebuffer](<#pass-('bind')-the-webglframebuffer>)
- [Iterate over each XRView object](#iterate-over-each-xrview-object)
- [Pass the XRViewport object to the WebGLRenderingContext](#pass-the-xrviewport-object-to-the-webglrenderingcontext)
- [Draw something to the framebuffer](#draw-something-to-the-framebuffer)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Virtual reality comes to the web, part II

All about the frame loop

Feb 13, 2020

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Recently, I published [Virtual reality comes to the web](/vr-comes-to-the-web/), an article that introduced basic concepts behind the [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API). I also provided instructions for requesting, entering, and ending an XR session.

This article describes the frame loop, which is a user-agent controlled infinite loop in which content is repeatedly drawn to the screen. Content is drawn in discrete blocks called frames. The succession of frames creates the illusion of movement.

## What this article is not <a href="#what-this-article-is-not" class="w-headline-link">#</a>

WebGL and WebGL2 are the only means of rendering content during a frame loop in a WebXR App. Fortunately many frameworks provide a layer of abstraction on top of WebGL and WebGL2. Such frameworks include [three.js](https://threejs.org/), [babylonjs](https://www.babylonjs.com/), and [PlayCanvas](https://playcanvas.com/), while [A-Frame](https://aframe.io/) and [React 360](https://facebook.github.io/react-360/) are designed for interacting with WebXR.

This article is neither a WebGL nor a framework tutorial. It explains basics of a frame loop using the Immersive Web Working Group's Immersive VR Session sample ([demo](https://immersive-web.github.io/webxr-samples/immersive-vr-session.html), [source](https://github.com/immersive-web/webxr-samples/blob/master/immersive-vr-session.html)). If you want to dive into WebGL or one of the frameworks, the internet provides a growing list of articles.

## The players and the game <a href="#the-players-and-the-game" class="w-headline-link">#</a>

When trying to understand the frame loop, I kept getting lost in the details. There's a lot of objects in play, and some of them are only named by reference properties on other objects. To help you keep it straight, I'll describe the objects, which I'm calling 'players'. Then I'll describe how they interact, which I'm calling 'the game'.

## The players <a href="#the-players" class="w-headline-link">#</a>

### XRViewerPose <a href="#xrviewerpose" class="w-headline-link">#</a>

A pose is the position and orientation of something in 3D space. Both viewers and input devices have a pose, but it's the viewer's pose we're concerned with here. Both viewer and input device poses have a `transform` attribute describing its position as a vector and its orientation as a quaternion relative to the origin. The origin is specified based on the requested reference space type when calling `XRSession.requestReferenceSpace()`.

Reference spaces take a bit to explain. I cover them in depth in [Augmented reality](/web-ar/). The sample I'm using as the basis for this article uses a `'local'` reference space which means the origin is at the viewer's position at the time of session creation without a well-defined floor, and its precise position may vary by platform.

### XRView <a href="#xrview" class="w-headline-link">#</a>

A view corresponds to a camera viewing the virtual scene. A view also has a `transform` attribute describing it's position as a vector and its orientation. These are provided both as a vector/quaternion pair and as an equivalent matrix, you can use either representation depending on which best fits your code. Each view corresponds to a display or a portion of a display used by a device to present imagery to the viewer. `XRView` objects are returned in an array from the `XRViewerPose` object. The number of views in the array varies. On mobile devices an AR scene has one view, which may or may not cover the device screen. Headsets typically have two views, one for each eye.

### XRWebGLLayer <a href="#xrwebgllayer" class="w-headline-link">#</a>

Layers provide a source of bitmap images and descriptions of how those images are to be rendered in the device. This description doesn't quite capture what this player does. I've come to think of it as a middleman between a device and a `WebGLRenderingContext`. MDN takes much the same view, stating that it 'provides a linkage' between the two. As such, it provides access to the other players.

In general, WebGL objects store state information for rendering 2D and 3D graphics.

### WebGLFramebuffer <a href="#webglframebuffer" class="w-headline-link">#</a>

A framebuffer provides image data to the `WebGLRenderingContext`. After retrieving it from the `XRWebGLLayer`, you simply pass it to the current `WebGLRenderingContext`. Other than calling `bindFramebuffer()` (more about that later) you will never access this object directly. You will merely pass it from the `XRWebGLLayer` to the WebGLRenderingContext.

### XRViewport <a href="#xrviewport" class="w-headline-link">#</a>

A viewport provides the coordinates and dimensions of a rectangular region in the `WebGLFramebuffer`.

### WebGLRenderingContext <a href="#webglrenderingcontext" class="w-headline-link">#</a>

A rendering context is a programmatic access point for a canvas (the space we're drawing on). To do this, it needs both a `WebGLFramebuffer` and an XRViewport.

Notice the relationship between `XRWebGLLayer` and `WebGLRenderingContext`. One corresponds to the viewer's device and the other corresponds to the web page. `WebGLFramebuffer` and `XRViewport` are passed from the former to the latter.

## <figure><img src="https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format" alt="The relationship between XRWebGLLayer and WebGLRenderingContext" sizes="(min-width: 711px) 711px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ZdH8cIApe8jUr7F1WNgC.png?auto=format&amp;w=1422 1422w" width="711" height="94" /><figcaption>The relationship between <code>XRWebGLLayer</code> and <code>WebGLRenderingContext</code></figcaption></figure>The game <a href="#the-game" class="w-headline-link">#</a>

Now that we know who the players are, let's look at the game they play. It's a game that starts over with every frame. Recall that frames are part of a [frame loop](/vr-comes-to-the-web/#running-a-frame-loop) that happens at a rate that depends on the underlying hardware. For VR applications the frames per second can be anywhere from 60 to 144. AR for Android runs at 30 frames per second. Your code should not assume any particular frame rate.

The basic process for the frame loop looks like this:

1.  Call `XRSession.requestAnimationFrame()`. In response, the user agent invokes the `XRFrameRequestCallback`, which is defined by you.
2.  Inside your callback function:
    1.  Call `XRSession.requestAnimationFrame()` again.
    2.  Get the viewer's pose.
    3.  Pass ('bind') the `WebGLFramebuffer` from the `XRWebGLLayer` to the `WebGLRenderingContext`.
    4.  Iterate over each `XRView` object, retrieving its `XRViewport` from the `XRWebGLLayer` and passing it to the `WebGLRenderingContext`.
    5.  Draw something to the framebuffer.

Because steps 1 and 2a were covered in the previous article, I'll start at step 2b.

### Get the viewer's pose <a href="#get-the-viewer&#39;s-pose" class="w-headline-link">#</a>

It probably goes without saying. To draw anything in AR or VR, I need to know where the viewer is and where they're looking. The viewer's position and orientation are provided by an [XRViewerPose object](https://developer.mozilla.org/en-US/docs/Web/API/XRViewerPose). I get the viewer's pose by calling `XRFrame.getViewerPose()` on the current animation frame. I pass it the reference space I acquired when I set up the session. The values returned by this object are always relative to the reference space I requested when I [entered the current session](/vr-comes-to-the-web/#entering-a-session). As you may recall, I have to pass the current reference space when requesting the pose.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);
      if (xrViewerPose) {
        // Render based on the pose.
      }
    }

There's one viewer pose that represents the user's overall position, meaning either the viewer's head or the phone camera in the case of a smartphone. The pose tells your application where the viewer is. Actual image rendering uses `XRView` objects, which I'll get to in a bit.

Before moving on, I test whether the viewer pose was returned in case the system loses tracking or blocks the pose for privacy reasons. Tracking is the XR device's ability to know where it and/or it's input devices are relative to the environment. Tracking can be lost in several ways, and varies depending on the method used for tracking. For example, if cameras on the headset or phone are used for tracking the device may lose its ability to determine where it is in situations with low or no light, or if the cameras are covered.

An example of blocking the pose for privacy reasons is if the headset is showing a security dialog such as a permission prompt, the browser may stop providing poses to the application while this is happening. But I"ve already called `XRSession.requestAnimationFrame()` so that if the system can recover, the frame loop will continue. If not, the user agent will end the session and call the `end` event handler.

### A short detour <a href="#a-short-detour" class="w-headline-link">#</a>

The next step requires objects created during [session set-up](/vr-comes-to-the-web/#requesting-a-session). Recall that I created a canvas and instructed it to create an XR-compatible Web GL rendering context, which I got by calling `canvas.getContext()`. All drawing is done using the WebGL API, the WebGL2 API, or a WebGL-based framework such as Three.js. This context was passed to the session object via `updateRenderState()`, along with a new instance of `XRWebGLLayer`.

    let canvas = document.createElement('canvas');
    // The rendering context must be based on WebGL or WebGL2
    let webGLRenContext = canvas.getContext('webgl', { xrCompatible: true });
    xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(xrSession, webGLRenContext)
      });

### Pass ('bind') the WebGLFramebuffer <a href="#pass-(&#39;bind&#39;)-the-webglframebuffer" class="w-headline-link">#</a>

The `XRWebGLLayer` provides a framebuffer for the `WebGLRenderingContext` provided specifically for use with WebXR and replacing the rendering contexts default framebuffer. This is called 'binding' in the language of WebGL.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);
      if (xrViewerPose) {
        let glLayer = xrSession.renderState.baseLayer;
        webGLRenContext.bindFramebuffer(webGLRenContext.FRAMEBUFFER, glLayer.framebuffer);
        // Iterate over the views
      }
    }

### Iterate over each XRView object <a href="#iterate-over-each-xrview-object" class="w-headline-link">#</a>

After getting the pose and binding the framebuffer, it's time to get the viewports. The `XRViewerPose` contains an array of XRView interfaces each of which represents a display or a portion of a display. They contain information that's needed to render content that's correctly positioned for the device and the viewer such as the field of view, eye offset, and other optical properties. Since I'm drawing for two eyes, I have two views, which I loop through and draw a separate image for each.

When implementing for phone-based augmented reality, I would have only one view but I'd still use a loop. Though it may seem pointless to iterate through one view, doing so allows you to have a single rendering path for a spectrum of immersive experiences. This is an important difference between WebXR and other immersive systems.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);
      if (xrViewerPose) {
        let glLayer = xrSession.renderState.baseLayer;
        webGLRenContext.bindFramebuffer(webGLRenContext.FRAMEBUFFER, glLayer.framebuffer);
        for (let xrView of xrViewerPose.views) {
          // Pass viewports to the context
        }
      }
    }

### Pass the XRViewport object to the WebGLRenderingContext <a href="#pass-the-xrviewport-object-to-the-webglrenderingcontext" class="w-headline-link">#</a>

An `XRView` object refers to what's observable on a screen. But to draw to that view I need coordinates and dimensions that are specific to my device. As with the framebuffer, I request them from the `XRWebGLLayer` and pass them to the `WebGLRenderingContext`.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);
      if (xrViewerPose) {
        let glLayer = xrSession.renderState.baseLayer;
        webGLRenContext.bindFramebuffer(webGLRenContext.FRAMEBUFFER, glLayer.framebuffer);
        for (let xrView of xrViewerPose.views) {
          let viewport = glLayer.getViewport(xrView);
          webGLRenContext.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
          // Draw something to the framebuffer
        }
      }
    }

#### The webGLRenContext <a href="#the-webglrencontext" class="w-headline-link">#</a>

In writing this article I had a debate with a few collegues over the naming of the `webGLRenContext` object. The sample scripts and most WebXR code simpley calls this variable `gl`. When I was working to understand the samples, I kept forgetting what `gl` referred to. I've called it `webGLRenContext` to remind you while your learning that this is an instance of `WebGLRenderingContext`.

The reason is that using `gl` allows method names to look like their counterparts in the OpenGL ES 2.0 API, used for creating VR in compiled languages. This fact is obvious if you've written VR apps using OpenGL, but confusing if you're completely new to this technology.

### Draw something to the framebuffer <a href="#draw-something-to-the-framebuffer" class="w-headline-link">#</a>

If you're feeling really ambitious, you can use WebGL directly, but I don't recommend that. It's much simpler to use one of the frameworks [listed at the top](#what-this-article-is-not).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

This is not the end of WebXR updates or articles. You can find a [reference for all of WebXR's interfaces and members](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) at MDN. For upcoming enhancements to the interfaces themselves, follow individual features on [Chrome Status](https://www.chromestatus.com/features#WebXR).

Photo by [JESHOOTS.COM](https://unsplash.com/@jeshoots) on [Unsplash](https://unsplash.com/)

<a href="/tags/augmented-reality/" class="w-chip">Augmented Reality</a> <a href="/tags/virtual-reality/" class="w-chip">Virtual Reality</a> <a href="/tags/webxr/" class="w-chip">WebXR</a>

<span class="w-mr--sm"> Last updated: Feb 13, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/vr-comes-to-the-web-pt-ii/index.md)

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
