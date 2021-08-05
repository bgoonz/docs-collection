<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format" alt="Five persons in a conference room photo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wbcUb7ooaR1nCeYnSiCV.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#control-camera-pan-tilt-and-zoom" class="w-toc__header--link">Control camera pan, tilt, and zoom</a>

- [Using the API](#use)
- [Feature detection](#feature-detection)
- [Request camera PTZ access](#request)
- [Control camera PTZ](#control)
- [Playground](#playground)
- [Security Considerations](#security)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Control camera pan, tilt, and zoom

Pan, tilt, and zoom features on cameras are finally controllable on the web.

Oct 5, 2020 <span class="w-author__separator">•</span> Updated Mar 22, 2021

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

Room-scale video conferencing solutions deploy cameras with pan, tilt, and zoom (PTZ) capabilities so that software can point the camera at meeting participants. Starting in Chrome 87, the pan, tilt, and zoom features on cameras are available to websites using media track constraints in `MediaDevices.getUserMedia()` and `MediaStreamTrack.applyConstraints()`.

## Using the API <a href="#use" class="w-headline-link">#</a>

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

Feature detection for hardware is different from what you're probably used to. The presence of `"pan"`, `"tilt"`, and `"zoom"` constraint names in `navigator.mediaDevices.getSupportedConstraints()` tells you that the browser supports the API to control camera PTZ, but not whether the camera hardware supports it. As of Chrome 87, controlling camera PTZ is supported on desktop, while Android still supports zoom only.

    const supports = navigator.mediaDevices.getSupportedConstraints();
    if (supports.pan && supports.tilt && supports.zoom) {
      // Browser supports camera PTZ.
    }

### Request camera PTZ access <a href="#request" class="w-headline-link">#</a>

A website is allowed to control camera PTZ only if the user has explicitly granted the camera with PTZ permission through a prompt.

To request camera PTZ access, call `navigator.mediaDevices.getUserMedia()` with the PTZ constraints as shown below. This will prompt the user to grant both regular camera and camera with PTZ permissions.

<figure><img src="https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format" alt="Camera PTZ user prompt." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/WmkzmVeiplCoh3HesJS5.jpg?auto=format&amp;w=1600 1600w" width="800" height="382" /><figcaption>Camera PTZ user prompt.</figcaption></figure>The returned promise will resolve with a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) object used to show the camera video stream to the user. If the camera does not support PTZ, the user will get a regular camera prompt.

    try {
      // User is prompted to grant both camera and PTZ access in a single call.
      // If camera doesn't support PTZ, it falls back to a regular camera prompt.
      const stream = await navigator.mediaDevices.getUserMedia({
        // Website asks to control camera PTZ as well without altering the
        // current pan, tilt, and zoom settings.
        video: { pan: true, tilt: true, zoom: true }
      });

      // Show camera video stream to user.
      document.querySelector("video").srcObject = stream;
    } catch (error) {
      // User denies prompt or matching media is not available.
      console.log(error);
    }

A previously-granted camera permission, specifically one without PTZ access, does not automatically gain PTZ access if it becomes available. This is true even when the camera itself supports PTZ. The permission must be requested again. Fortunately, you can use the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) to query and monitor the status of PTZ permission.

    try {
      const panTiltZoomPermissionStatus = await navigator.permissions.query({
        name: "camera",
        panTiltZoom: true
      });

      if (panTiltZoomPermissionStatus.state == "granted") {
        // User has granted access to the website to control camera PTZ.
      }

      panTiltZoomPermissionStatus.addEventListener("change", () => {
        // User has changed PTZ permission status.
      });
    } catch (error) {
      console.log(error);
    }

To know whether a Chromium-based browser supports PTZ for a camera, go to the internal `about://media-internals` page and check out the "Pan-Tilt-Zoom" column in the "Video Capture" tab; "pan tilt" and "zoom" respectively mean the camera supports the "PanTilt (Absolute)" and "Zoom (Absolute)" [UVC controls](https://www.usb.org/document-library/video-class-v15-document-set). The "PanTilt (Relative)" and "Zoom (Relative)" UVC controls are not supported in Chromium-based browsers.

<figure><img src="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format" alt="Internal page to debug PTZ camera support." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/4EDS8fYYifXAUY6SBaiV.png?auto=format&amp;w=1600 1600w" width="800" height="481" /><figcaption>Internal page to debug PTZ camera support.</figcaption></figure>### Control camera PTZ <a href="#control" class="w-headline-link">#</a>

Manipulate camera PTZ capabilities and settings using the preview `MediaStreamTrack` from the `stream` object obtained earlier. `MediaStreamTrack.getCapabilities()` returns a dictionary with the supported capabilities and the ranges or allowed values. Correspondingly, `MediaStreamTrack.getSettings()` returns the current settings.

Pan, tilt, and zoom capabilities and settings are available only if supported by the camera and the user has granted PTZ permission to the camera.

Controlling Camera PTZ.

Call `videoTrack.applyConstraints()` with the appropriate [PTZ advanced constraints](https://bugs.chromium.org/p/chromium/issues/detail?id=1126045) to control camera pan, tilt, and zoom as shown in the example below. The returned promise will resolve if successful. Otherwise it will reject if either:

- the camera with PTZ permission is not granted.
- the camera hardware does not support the PTZ constraint.
- the page is not visible to the user. Use the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) to detect page visibility changes.

<!-- -->

    // Get video track capabilities and settings.
    const [videoTrack] = stream.getVideoTracks();
    const capabilities = videoTrack.getCapabilities();
    const settings = videoTrack.getSettings();

    // Let the user control the camera pan motion if the camera supports it
    // and PTZ access is granted.
    if ("pan" in settings) {
      const input = document.querySelector("input[type=range]");
      input.min = capabilities.pan.min;
      input.max = capabilities.pan.max;
      input.step = capabilities.pan.step;
      input.value = settings.pan;

      input.addEventListener("input", async () => {
        await videoTrack.applyConstraints({ advanced: [{ pan: input.value }] });
      });
    }

    if ("tilt" in settings) {
      // similar for tilt...
    }
    if ("zoom" in settings) {
      // similar for zoom...
    }

It is also possible to configure camera pan, tilt, and zoom by calling `navigator.mediaDevices.getUserMedia()` with some camera PTZ ideal constraint values. This is handy when camera PTZ capabilities are known in advance. Note that [mandatory constraints](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints#Specifying_a_range_of_values:~:text=mandatory) (min, max, exact) are not allowed here.

    const stream = await navigator.mediaDevices.getUserMedia({
      // Website asks to reset known camera pan.
      video: { pan: 0, deviceId: { exact: "myCameraDeviceId" } }
    });

## Playground <a href="#playground" class="w-headline-link">#</a>

You can play with the API by running the [demo](https://ptz.glitch.me/) on Glitch. Be sure to [check out the source code](https://glitch.com/edit/#!/ptz?path=public%2Fscript.js).

Tip: If you don't have a camera that supports PTZ, you can [run Chrome with the switch](https://www.chromium.org/developers/how-tos/run-chromium-with-flags) `--use-fake-device-for-media-stream` to simulate one on your machine. Enjoy!

## Security Considerations <a href="#security" class="w-headline-link">#</a>

The spec authors have designed and implemented this API using the core including user control, transparency, and ergonomics. The ability to use this API is primarily gated by the same permission model as the [Media Capture and Streams API](https://w3c.github.io/mediacapture-main). In response to a user prompt, the website is allowed to control camera PTZ only when the page is visible to the user.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [PTZ Explainer](https://github.com/w3c/mediacapture-image/blob/master/ptz-explainer.md)
- [Specification draft](https://w3c.github.io/mediacapture-image/)
- [GitHub repository](https://github.com/w3c/mediacapture-image)
- [ChromeStatus entry](https://www.chromestatus.com/feature/5570717087170560)
- [Chrome tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=934063)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [Joe Medley](https://github.com/jpmedley) and [Thomas Steiner](https://github.com/tomayac). Thanks to [Rijubrata Bhaumik](https://github.com/riju) and [Eero Häkkinen](https://github.com/eehakkin) at Intel for their work on the spec and the implementation. Hero image by [Christina @ wocintechchat.com](https://unsplash.com/@wocintechchat) on [Unsplash](https://unsplash.com/photos/lqPLmYD_MO8).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/media/" class="w-chip">Media</a>

<span class="w-mr--sm"> Last updated: Mar 22, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/camera-pan-tilt-zoom/index.md)

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
