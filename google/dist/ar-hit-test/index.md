<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format" alt="A virtual object in a real-world view." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/7wUhOX8bWoohQObJO6lL.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#positioning-virtual-objects-in-real-world-views" class="w-toc__header--link">Positioning virtual objects in real-world views</a>

- [The immersive AR session sample](#the-immersive-ar-session-sample)
- [Create the reticle](#create-the-reticle)
- [Request a session](#request-a-session)
- [Entering a session](#entering-a-session)
- [Multiple reference spaces](#multiple-reference-spaces)
- [Running a frame loop](#running-a-frame-loop)
- [Placing an object](#placing-an-object)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Positioning virtual objects in real-world views

The Hit Test API lets you position virtual items in a real-world view.

Feb 13, 2020 <span class="w-author__separator">•</span> Updated Jun 4, 2020

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

The WebXR Device API shipped last fall in Chrome 79. As stated then, Chrome's implementation of the API is a work in progress. Chrome is happy to announce that some of the work is finished. In Chrome 81, two new features have arrived:

- [Augmented reality session types](https://www.chromestatus.com/feature/5450241148977152)
- [Hit testing](https://www.chromestatus.com/feature/4755348300759040)

This article covers the [WebXR Hit Test API](https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md), a means of placing virtual objects in a real-world camera view.

In this article I assume you already know how to create an augmented reality session and that you know how to run a frame loop. If you're not familiar with these concepts, you should read the earlier articles in this series.

- [Virtual reality comes to the web](/vr-comes-to-the-web/)
- [Virtual reality comes to the web, part II](/vr-comes-to-the-web-pt-ii/)
- [Web AR: you may already know how to use it](/web-ar)

## The immersive AR session sample <a href="#the-immersive-ar-session-sample" class="w-headline-link">#</a>

The code in this article is based on, but not identical to, that found in the Immersive Web Working Group's Hit Test sample ([demo](https://immersive-web.github.io/webxr-samples/hit-test.html), [source](https://github.com/immersive-web/webxr-samples/blob/master/hit-test.html)). This example lets you place virtual sunflowers on surfaces in the real world.

When you first open the app, you'll see a blue circle with a dot in the middle. The dot is the intersection between an imaginary line from your device to the point in the environment. It moves as you move the device. As it finds intersection points, it appears to snap to surfaces such as floors, table tops, and walls. It does this because hit testing provides the position and orientation of the intersection point, but nothing about the surfaces themselves.

A reminder for those of you are new: in the WebXR device API "position and orientation" are covered by the term pose. I will be using that term from here on.

This circle is called a _reticle_, which is a temporary image that aids in placing an object in augmented reality. If you tap the screen, a sunflower is placed on the surface at the reticle location and orientation of the reticle point, regardless of where you tapped the screen. The reticle continues to move with your device.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format" alt="The reticle is a temporary image that aids in placing an object in augmented reality." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/42fbB0q2WTa9ytTm8NZN.png?auto=format&amp;w=1600 1600w" width="800" height="1422" /><figcaption>The reticle is a temporary image that aids in placing an object in augmented reality.</figcaption></figure>Create the reticle <a href="#create-the-reticle" class="w-headline-link">#</a>

You must create the reticle image yourself since it is not provided by the browser or the API. The method of loading and drawing it is framework specific. If you're not drawing it directly using WebGL or WebGL2 consult your framework documentation. For this reason, I won't go into detail about how the reticle is drawn in the sample. Below I show one line of it for one reason only: so that in later code samples, you'll know what I'm referring to when I use the `reticle` variable.

    let reticle = new Gltf2Node({url: 'media/gltf/reticle/reticle.gltf'});

## Request a session <a href="#request-a-session" class="w-headline-link">#</a>

When requesting a session, you must request `'hit-test'` in the `requiredFeatures` array as shown below.

    navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['local', 'hit-test']
    })
    .then((session) => {
      // Do something with the session
    });

## Entering a session <a href="#entering-a-session" class="w-headline-link">#</a>

In previous articles I've presented code for entering an XR session. I've shown a version of this below with some additions. First I've added the `select` event listener. When the user taps the screen, a flower will be placed in the camera view based on the pose of the reticle. I'll describe that event listener later.

    function onSessionStarted(xrSession) {
      xrSession.addEventListener('end', onSessionEnded);
      xrSession.addEventListener('select', onSelect);

      let canvas = document.createElement('canvas');
      gl = canvas.getContext('webgl', { xrCompatible: true });

      xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl)
      });

      xrSession.requestReferenceSpace('viewer').then((refSpace) => {
        xrViewerSpace = refSpace;
        xrSession.requestHitTestSource({ space: xrViewerSpace })
        .then((hitTestSource) => {
          xrHitTestSource = hitTestSource;
        });
      });

      xrSession.requestReferenceSpace('local').then((refSpace) => {
        xrRefSpace = refSpace;
        xrSession.requestAnimationFrame(onXRFrame);
      });
    }

### Multiple reference spaces <a href="#multiple-reference-spaces" class="w-headline-link">#</a>

Notice that the highlighted code calls `XRSession.requestReferenceSpace()` twice. I initially found this confusing. I asked why does the hit test code not request an animation frame (starting the frame loop) and why does the frame loop seem to not involve hit tests. The source of the confusion was a misunderstanding of reference spaces. Reference spaces express relationships between an origin and the world.

To understand what this code is doing, pretend that you're viewing this sample using a standalone rig, and you have both a headset and a controller. To measure distances from the controller, you would use a controller-centered frame of reference. But to draw something to the screen you would use user-centered coordinates.

In this sample, the viewer and the controller are the same device. But I have a problem. What I draw must be stable with regard to the environment, but the 'controller' I'm drawing with is moving.

For image drawing, I use the `local` reference space, which gives me stability in terms of the environment. After getting this I start the frame loop by calling `requestAnimationFrame()`.

For hit testing, I use the `viewer` reference space, which is based on the device's pose at the time of the hit test. The label 'viewer' is somewhat confusing in this context because I'm talking about a controller. It makes sense if you think of the controller as an electronic viewer. After getting this, I call `xrSession.requestHitTestSource()`, which creates the source of hit test data that I'll use when drawing.

## Running a frame loop <a href="#running-a-frame-loop" class="w-headline-link">#</a>

The `requestAnimationFrame()` callback also gets new code to handle hit testing.

As you move your device, the reticle needs to move with it as it tries to find surfaces. To create the illusion of movement, redraw the reticle in every frame. But don't show the reticle if the hit test fails. So, for the reticle I created earlier, I set it's `visible` property to `false`.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);

      reticle.visible = false;

      // Reminder: the hitTestSource was acquired during onSessionStart()
      if (xrHitTestSource && xrViewerPose) {
        let hitTestResults = xrFrame.getHitTestResults(xrHitTestSource);
        if (hitTestResults.length > 0) {
          let pose = hitTestResults[0].getPose(xrRefSpace);
          reticle.visible = true;
          reticle.matrix = pose.transform.matrix;
        }
      }

      // Draw to the screen
    }

To draw anything in AR, I need to know where the viewer is and where they're looking. So I test that `hitTestSource` and the `xrViewerPose` are still valid.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);

      reticle.visible = false;

      // Reminder: the hitTestSource was acquired during onSessionStart()
      if (xrHitTestSource && xrViewerPose) {
        let hitTestResults = xrFrame.getHitTestResults(xrHitTestSource);
        if (hitTestResults.length > 0) {
          let pose = hitTestResults[0].getPose(xrRefSpace);
          reticle.visible = true;
          reticle.matrix = pose.transform.matrix;
        }
      }

      // Draw to the screen
    }

Now I call `getHitTestResults()`. It takes the `hitTestSource` as an argument and returns an array of `HitTestResult` instances. The hit test may find multiple surfaces. The first one in the array is the one closest to the camera. Most of the time you will use it, but an array is returned for advanced use cases. For example, imagine your camera is pointed at a box on a table on a floor. It's possible that the hit test will return all three surfaces in the array. In most cases, it will be the box that I care about. If the length of the returned array is 0, in other words, if no hit test is returned, continue onward. Try again in the next frame.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);

      reticle.visible = false;

      // Reminder: the hitTestSource was acquired during onSessionStart()
      if (xrHitTestSource && xrViewerPose) {
        let hitTestResults = xrFrame.getHitTestResults(xrHitTestSource);
        if (hitTestResults.length > 0) {
          let pose = hitTestResults[0].getPose(xrRefSpace);
          reticle.visible = true;
          reticle.matrix = pose.transform.matrix;
        }
      }

      // Draw to the screen
    }

Finally, I need to process the hit test results. The basic process is this. Get a pose from the hit test result, transform (move) the reticle image to the hit test position, then set its `visible` property to true. The pose represents the pose of a point on a surface.

    function onXRFrame(hrTime, xrFrame) {
      let xrSession = xrFrame.session;
      xrSession.requestAnimationFrame(onXRFrame);
      let xrViewerPose = xrFrame.getViewerPose(xrRefSpace);

      reticle.visible = false;

      // Reminder: the hitTestSource was acquired during onSessionStart()
      if (xrHitTestSource && xrViewerPose) {
        let hitTestResults = xrFrame.getHitTestResults(xrHitTestSource);
        if (hitTestResults.length > 0) {
          let pose = hitTestResults[0].getPose(xrRefSpace);
          reticle.matrix = pose.transform.matrix;
          reticle.visible = true;

        }
      }

      // Draw to the screen
    }

## Placing an object <a href="#placing-an-object" class="w-headline-link">#</a>

An object is placed in AR when the user taps the screen. I already added a `select` event handler to the session. ([See above](#entering-a-session).)

The important thing in this step is knowing where to place it. Since the moving reticle gives you a constant source of hit tests, the simplest way to place an object is to draw it at the location of the reticle at the last hit test.

    function onSelect(event) {
      if (reticle.visible) {
        // The reticle should already be positioned at the latest hit point,
        // so we can just use its matrix to save an unnecessary call to
        // event.frame.getHitTestResults.
        addARObjectAt(reticle.matrix);
      }
    }

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The best way to get a handle on this is to step through the [sample code](https://immersive-web.github.io/webxr-samples/immersive-ar-session.html) or try out the [codelab](https://codelabs.developers.google.com/codelabs/ar-with-webxr). I hope I've given you enough background to make sense of both.

We're not done building immersive web APIs, not by a long shot. We'll publish new articles here as we make progress.

Photo by [Daniel Frank](https://unsplash.com/@fr3nks) on [Unsplash](https://unsplash.com/)

<a href="/tags/augmented-reality/" class="w-chip">Augmented Reality</a> <a href="/tags/virtual-reality/" class="w-chip">Virtual Reality</a> <a href="/tags/webxr/" class="w-chip">WebXR</a>

<span class="w-mr--sm"> Last updated: Jun 4, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/ar-hit-test/index.md)

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
