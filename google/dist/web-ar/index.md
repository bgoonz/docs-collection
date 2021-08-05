<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format" alt="A person using augmented reality with a smartphone." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/VMTT5zbuFgXWfTj7Hlvv.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#augmented-reality:-you-may-already-know-it" class="w-toc__header--link">Augmented reality: You may already know it</a>

- [What's it useful for?](#what's-it-useful-for)
- [Requesting a session](#requesting-a-session)
- [A convenience property](#a-convenience-property)
- [Entering a session](#entering-a-session)
- [Reference spaces](#reference-spaces)
- [Running a frame loop](#running-a-frame-loop)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Augmented reality: You may already know it

If you've used the WebXR Device API already, you're most of the way there.

Feb 13, 2020

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

The WebXR Device API shipped last fall in Chrome 79. As stated then, Chrome's implementation of the API is a work in progress. Chrome is happy to announce that some of the work is finished. In Chrome 81, two new features have arrived:

- [Augmented reality session types](https://www.chromestatus.com/feature/5450241148977152).
- [Hit testing](https://www.chromestatus.com/feature/4755348300759040).

This article covers augmented reality. If you've already used the WebXR Device API, you'll be happy to know there's very little new to learn. Entering a WebXR session is largely the same. Running a frame loop is largely the same. The differences lie in configurations that allow content to be shown appropriately for augmented reality. If you're not familiar with the basic concepts of WebXR, you should read my earlier posts on the WebXR Device API, or at least be familiar with the topics covered therein. You should know how to [request and enter a session](/vr-comes-to-the-web/) and you should know how to run [a frame loop](/vr-comes-to-the-web-pt-ii).

For information on hit testing, see the companion article [Positioning virtual objects in real-world views](/ar-hit-test). The code in this article is based on the Immersive AR Session sample ([demo](https://immersive-web.github.io/webxr-samples/immersive-ar-session.html) [source](https://github.com/immersive-web/webxr-samples/blob/master/immersive-vr-session.html)) from the Immersive Web Working Group's [WebXR Device API samples](https://immersive-web.github.io/webxr-samples/).

Before diving into the code you should use the [Immersive AR Session sample](https://immersive-web.github.io/webxr-samples/immersive-ar-session.html) at least once. You'll need a modern Android phone with Chrome 81 or later.

## What's it useful for? <a href="#what&#39;s-it-useful-for" class="w-headline-link">#</a>

Augmented reality will be a valuable addition to a lot of existing or new web pages by allowing them to implement AR use cases without leaving the browser. For example, it can help people learn on education sites, and allow potential buyers to visualize objects in their home while shopping.

Consider the second use case. Imagine simulating placing a life-size representation of a virtual object in a real scene. Once placed, the image stays on the selected surface, appears the size it would be if the actual item were on that surface, and allows the user to move around it as well as closer to it or farther from it. This gives viewers a deeper understanding of the object than is possible with a two dimensional image.

I'm getting a little ahead of myself. To actually do what I've described, you need AR functionality and some means of detecting surfaces. This article covers the former. The accompanying article on the WebXR Hit Test API (linked to above) covers the latter.

## Requesting a session <a href="#requesting-a-session" class="w-headline-link">#</a>

Requesting a session is very much like what you've seen before. First find out if the session type you want is available on the current device by calling `xr.isSessionSupported()`. Instead of requesting `'immersive-vr'` as before, request `'immersive-ar'`.

    if (navigator.xr) {
      const supported = await navigator.xr.isSessionSupported('immersive-ar');
      if (supported) {
        xrButton.addEventListener('click', onButtonClicked);
        xrButton.textContent = 'Enter AR';
        xrButton.enabled = supported; // supported is Boolean
      }
    }

As before, this enables an 'Enter AR' button. When the user clicks it, call `xr.requestSession()`, also passing `'immersive-ar'`.

    let xrSession = null;
    function onButtonClicked() {
      if (!xrSession) {
        navigator.xr.requestSession('immersive-ar')
        .then((session) => {
          xrSession = session;
          xrSession.isImmersive = true;
          xrButton.textContent = 'Exit AR';
          onSessionStarted(xrSession);
        });
      } else {
        xrSession.end();
      }
    }

### A convenience property <a href="#a-convenience-property" class="w-headline-link">#</a>

You've probably noticed that I highlighted two lines in the last code sample. The `XRSession` object would seem to have a property called `isImmersive`. This is a convenience property I've created myself, and not part of the spec. I'll use it later to make decisions about what to show the viewer. Why isn't this property part of the API? Because your app may need to track this property differently so the spec authors decided to keep the API clean.

## Entering a session <a href="#entering-a-session" class="w-headline-link">#</a>

Recall what `onSessionStarted()` looked like in my earlier article:

    function onSessionStarted(xrSession) {
      xrSession.addEventListener('end', onSessionEnded);

      let canvas = document.createElement('canvas');
      gl = canvas.getContext('webgl', { xrCompatible: true });

      xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl)
      });

      xrSession.requestReferenceSpace('local-floor')
      .then((refSpace) => {
        xrRefSpace = refSpace;
        xrSession.requestAnimationFrame(onXRFrame);
      });
    }

I need to add a few things to account for rendering augmented reality. Turn off the background First, I'm going to determine whether I need the background. This is the first place I'm going to use my convenience property.

    function onSessionStarted(xrSession) {
      xrSession.addEventListener('end', onSessionEnded);

      if (session.isImmersive) {
        removeBackground();
      }

      let canvas = document.createElement('canvas');
      gl = canvas.getContext('webgl', { xrCompatible: true });

      xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl)
      });

      refSpaceType = xrSession.isImmersive ? 'local' : 'viewer';
      xrSession.requestReferenceSpace(refSpaceType).then((refSpace) => {
        xrSession.requestAnimationFrame(onXRFrame);
      });

    }

### Reference spaces <a href="#reference-spaces" class="w-headline-link">#</a>

My earlier articles skimmed over reference spaces. The sample I'm describing uses two of them, so it's time to correct that omission.

A full explanation of reference spaces would be longer than I can provide here. I'm only going to discuss reference spaces in regards to augmented reality.

A reference space describes the relationship between the virtual world and the user's physical environment. It does this by:

- Specifying the origin for the coordinate system used for expressing positions in the virtual world.
- Specifying whether the user is expected to move within that coordinate system.
- Whether that coordinate system has pre-established boundaries. (The examples shown here do not use coordinate systems with pre-established boundaries.)

For all reference spaces, the X coordinate expresses left and right, the Y expresses up and down, and Z expresses forward and backward. Positive values are right, up, and backward, respectively.

The coordinates returned by `XRFrame.getViewerPose()` depend on the requested [reference space type](https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace#Reference_space_types). More about that when we get to the frame loop. Right now we need to select a reference type that's appropriate for augmented reality. Again, this uses my convenience property.

    let refSpaceType
    function onSessionStarted(xrSession) {
      xrSession.addEventListener('end', onSessionEnded);

      if (session.isImmersive) {
        removeBackground();
      }

      let canvas = document.createElement('canvas');
      gl = canvas.getContext('webgl', { xrCompatible: true });

      xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl)
      });

      refSpaceType = xrSession.isImmersive ? 'local' : 'viewer';
      xrSession.requestReferenceSpace(refSpaceType).then((refSpace) => {
        xrSession.requestAnimationFrame(onXRFrame);
      });
    }

If you've visited the [Immersive AR Session Sample](https://immersive-web.github.io/webxr-samples/immersive-ar-session.html) you'll notice that initially the scene is static and not at all augmented reality. You can drag and swipe with your finger to move around the scene. If you click "START AR", the background drops out and you can move around the scene by moving the device. The modes use different reference space types. The highlighted text above shows how this is selected. It uses the following reference types:

`local` - The origin is at the viewer's position at the time of session creation. This means the experience doesn't necessarily have a well-defined floor and the exact position of the origin may vary by platform. Though there are no pre-established boundaries to the space, it's expected that content can be viewed with no movement other than rotation. As you can see from our own AR example, some movement within the space may be possible.

`viewer` - Used most frequently for content presented inline in the page, this space follows the viewing device. When passed to getViewerPose it provides no tracking, and thus always reports a pose at the origin unless the application modifies it with `XRReferenceSpace.getOffsetReferenceSpace()`. The sample uses this to enable touch-based panning of the camera.

## Running a frame loop <a href="#running-a-frame-loop" class="w-headline-link">#</a>

Conceptually, nothing changes from what I did in the VR session described in my earlier articles. Pass the reference space type to `XRFrame.getViewerPose()`. The returned `XRViewerPose` will be for the current reference space type. Using `viewer` as the default allows a page to show content previews before user consent is requested for AR or VR. This illustrates an important point: the inline content uses the same frame loop as the immersive content, cutting down the amount of code that needs to be maintained.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(refSpaceType);
      if (xrViewerPose) {
        // Render based on the pose.
      }
    }

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

This series of articles only covers the basics of implementing immersive content on the web. Many more capabilities and use cases are presented by the Immersive Web Working Group's [WebXR Device API samples](https://immersive-web.github.io/webxr-samples/). We've also just published a [hit test article](/ar-hit-test/) which explains an API for detecting surfaces and placing virtual items in a real-world camera view. Check them out and watch The web.dev blog for more articles in the year to come.

Photo by [David Grandmougin](https://unsplash.com/@davidgrdm) on [Unsplash](https://unsplash.com/)

<a href="/tags/augmented-reality/" class="w-chip">Augmented Reality</a> <a href="/tags/virtual-reality/" class="w-chip">Virtual Reality</a> <a href="/tags/webxr/" class="w-chip">WebXR</a>

<span class="w-mr--sm"> Last updated: Feb 13, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-ar/index.md)

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
