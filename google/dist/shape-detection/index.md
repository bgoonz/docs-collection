<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format" alt="QR code being scanned by a mobile phone" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/pcEIwc0D09iF7BPo3TT1.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#the-shape-detection-api:-a-picture-is-worth-a-thousand-words-faces-and-barcodes" class="w-toc__header--link">The Shape Detection API: a picture is worth a thousand words, faces, and barcodes</a>

- [What is the Shape Detection API?](#what)
- [Suggested use cases](#use-cases)
- [Current status](#status)
- [How to use the Shape Detection API](#use)
- [Working with the BarcodeDetector](#barcodedetector)
- [Working with the FaceDetector](#facedetector)
- [Working with the TextDetector](#textdetector)
- [Feature detection](#featuredetection)
- [Operating system support](#os-support)
- [Best practices](#bestpractices)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Problem with the implementation?](#problem-with-the-implementation)
- [Planning to use the API?](#planning-to-use-the-api)
- [Helpful links](#helpful)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# The Shape Detection API: a picture is worth a thousand words, faces, and barcodes

The Shape Detection API detects faces, barcodes, and text in images.

Jan 7, 2019 <span class="w-author__separator">•</span> Updated Feb 23, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

This API is part of the new [capabilities project](https://developers.google.com/web/updates/capabilities). Barcode detection has launched in Chrome 83. Face and text detection are available behind a flag. This post will be updated as the Shape Detection API evolves.

## What is the Shape Detection API? <a href="#what" class="w-headline-link">#</a>

With APIs like [`navigator.mediaDevices.getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) and the Chrome for Android [photo picker](https://bugs.chromium.org/p/chromium/issues/detail?id=656015), it has become fairly easy to capture images or live video data from device cameras, or to upload local images. So far, this dynamic image data—as well as static images on a page—has not been accessible by code, even though images may actually contain a lot of interesting features such as faces, barcodes, and text.

For example, in the past, if developers wanted to extract such features on the client to build a [QR code reader](https://qrsnapper.appspot.com/), they had to rely on external JavaScript libraries. This could be expensive from a performance point of view and increase the overall page weight. On the other hand, operating systems including Android, iOS, and macOS, but also hardware chips found in camera modules, typically already have performant and highly optimized feature detectors such as the Android [`FaceDetector`](https://developer.android.com/reference/android/media/FaceDetector) or the iOS generic feature detector, [`CIDetector`](https://developer.apple.com/documentation/coreimage/cidetector?language=objc).

The [Shape Detection API](https://wicg.github.io/shape-detection-api) exposes these implementations through a set of JavaScript interfaces. Currently, the supported features are face detection through the `FaceDetector` interface, barcode detection through the `BarcodeDetector` interface, and text detection (Optical Character Recognition, (OCR)) through the `TextDetector` interface.

**Caution**: Text detection, despite being an interesting field, is not considered stable enough across either computing platforms or character sets to be standardized at the moment, which is why text detection has been moved to a separate [informative specification](https://wicg.github.io/shape-detection-api/text.html).

### Suggested use cases <a href="#use-cases" class="w-headline-link">#</a>

As outlined above, the Shape Detection API currently supports the detection of faces, barcodes, and text. The following bullet list contains examples of use cases for all three features.

#### Face detection <a href="#face-detection" class="w-headline-link">#</a>

- Online social networking or photo sharing sites commonly let their users annotate people in images. By highlighting the boundaries of detected faces, this task can be facilitated.
- Content sites can dynamically crop images based on potentially detected faces rather than relying on other heuristics, or highlight detected faces with [Ken Burns](https://en.wikipedia.org/wiki/Ken_Burns_effect)-like panning and zooming effects in story-like formats.
- Multimedia messaging sites can allow their users to overlay funny objects like [sunglasses or mustaches](https://beaufortfrancois.github.io/sandbox/media-recorder/mustache.html) on detected face landmarks.

#### Barcode detection <a href="#barcode-detection" class="w-headline-link">#</a>

- Web applications that read QR codes can unlock interesting use cases like online payments or web navigation, or use barcodes for establishing social connections on messenger applications.
- Shopping apps can allow their users to scan [EAN](https://en.wikipedia.org/wiki/International_Article_Number) or [UPC](https://en.wikipedia.org/wiki/Universal_Product_Code) barcodes of items in a physical store to compare prices online.
- Airports can provide web kiosks where passengers can scan their boarding passes' [Aztec codes](https://en.wikipedia.org/wiki/Aztec_Code) to show personalized information related to their flights.

#### Text detection <a href="#text-detection" class="w-headline-link">#</a>

- Online social networking sites can improve the accessibility of user-generated image content by adding detected texts as `alt` attributes for `<img>` tags when no other descriptions are provided.
- Content sites can use text detection to avoid placing headings on top of hero images with contained text.
- Web applications can use text detection to translate texts such as, for example, restaurant menus.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://docs.google.com/document/d/1QeCDBOoxkElAB0x7ZpM3VN3TQjS1ub1mejevd2Ik1gQ/edit">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/shape-detection-api">In Progress</a></td></tr><tr class="odd"><td><strong>3. Gather feedback &amp; iterate on design</strong></td><td><a href="#feedback"><strong>In progress</strong></a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developers.chrome.com/origintrials/#/view_trial/-2341871806232657919">Complete</a></td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td>Barcode detection <strong>Complete</strong><br />
Face Detection <a href="https://www.chromestatus.com/feature/5678216012365824">In Progress</a><br />
Text Detection <a href="https://www.chromestatus.com/feature/5644087665360896">In Progress</a></td></tr></tbody></table>

## How to use the Shape Detection API <a href="#use" class="w-headline-link">#</a>

**Warning**: So far only barcode detection is available by default, starting in Chrome 83, but face and text detection are available behind a flag. You can always use the Shape Detection API for local experiments by enabling the `#enable-experimental-web-platform-features` flag.

If you want to experiment with the Shape Detection API locally, enable the `#enable-experimental-web-platform-features` flag in `about://flags`.

The interfaces of all three detectors, `FaceDetector`, `BarcodeDetector`, and `TextDetector`, are similar. They all provide a single asynchronous method called `detect()` that takes an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) as an input (that is, either a [`CanvasImageSource`](https://html.spec.whatwg.org/multipage/canvas.html#canvasimagesource), a [`Blob`](https://w3c.github.io/FileAPI/#dfn-Blob), or [`ImageData`](https://html.spec.whatwg.org/multipage/canvas.html#imagedata)).

For `FaceDetector` and `BarcodeDetector`, optional parameters can be passed to the detector's constructor that allow for providing hints to the underlying detectors.

Please carefully check the support matrix in the [explainer](https://github.com/WICG/shape-detection-api#overview) for an overview of the different platforms.

**Gotchas!**

If your `ImageBitmapSource` has an [effective script origin](https://html.spec.whatwg.org/multipage/#concept-origin) which is not the same as the document's effective script origin, then attempts to call `detect()` will fail with a new `SecurityError` [`DOMException`](https://heycam.github.io/webidl/#idl-DOMException). If your image origin supports CORS, you can use the [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute to request CORS access.

### Working with the `BarcodeDetector` <a href="#barcodedetector" class="w-headline-link">#</a>

The `BarcodeDetector` returns the barcode raw values it finds in the `ImageBitmapSource` and the bounding boxes, as well as other information like the formats of the detected barcodes.

    const barcodeDetector = new BarcodeDetector({
      // (Optional) A series of barcode formats to search for.
      // Not all formats may be supported on all platforms
      formats: [
        'aztec',
        'code_128',
        'code_39',
        'code_93',
        'codabar',
        'data_matrix',
        'ean_13',
        'ean_8',
        'itf',
        'pdf417',
        'qr_code',
        'upc_a',
        'upc_e'
      ]
    });
    try {
      const barcodes = await barcodeDetector.detect(image);
      barcodes.forEach(barcode => searchProductDatabase(barcode));
    } catch (e) {
      console.error('Barcode detection failed:', e);
    }

### Working with the `FaceDetector` <a href="#facedetector" class="w-headline-link">#</a>

The `FaceDetector` always returns the bounding boxes of faces it detects in the `ImageBitmapSource`. Depending on the platform, more information regarding face landmarks like eyes, nose, or mouth may be available. It is important to note that this API only detects faces. It does not identify who a face belongs to.

    const faceDetector = new FaceDetector({
      // (Optional) Hint to try and limit the amount of detected faces
      // on the scene to this maximum number.
      maxDetectedFaces: 5,
      // (Optional) Hint to try and prioritize speed over accuracy
      // by, e.g., operating on a reduced scale or looking for large features.
      fastMode: false
    });
    try {
      const faces = await faceDetector.detect(image);
      faces.forEach(face => drawMustache(face));
    } catch (e) {
      console.error('Face detection failed:', e);
    }

### Working with the `TextDetector` <a href="#textdetector" class="w-headline-link">#</a>

The `TextDetector` always returns the bounding boxes of the detected texts, and on some platforms the recognized characters.

**Caution**: Text recognition is not universally available.

    const textDetector = new TextDetector();
    try {
      const texts = await textDetector.detect(image);
      texts.forEach(text => textToSpeech(text));
    } catch (e) {
      console.error('Text detection failed:', e);
    }

## Feature detection <a href="#featuredetection" class="w-headline-link">#</a>

Purely checking for the existence of the constructors to feature detect the Shape Detection API doesn't suffice. The presence of an interface doesn't tell you whether the underlying platform supports the feature. This is working [as intended](https://crbug.com/920961). It's why we recommend a _defensive programming_ approach by doing feature detection like this:

    const supported = await (async () => 'FaceDetector' in window &&
        await new FaceDetector().detect(document.createElement('canvas'))
        .then(_ => true)
        .catch(e => e.name === 'NotSupportedError' ? false : true))();

The `BarcodeDetector` interface has been updated to include a `getSupportedFormats()` method and similar interfaces have been proposed [for `FaceDetector`](https://github.com/WICG/shape-detection-api/issues/53) and [for `TextDetector`](https://github.com/WICG/shape-detection-api/issues/57).

    await BarcodeDetector.getSupportedFormats();
    /* On a macOS computer logs
      [
        "aztec",
        "code_128",
        "code_39",
        "code_93",
        "data_matrix",
        "ean_13",
        "ean_8",
        "itf",
        "pdf417",
        "qr_code",
        "upc_e"
      ]
    */

This allows you to detect the specific feature you need, for example, QR code scanning:

    if (('BarcodeDetector' in window) &&
        ((await BarcodeDetector.getSupportedFormats()).includes('qr_code'))) {
      console.log('QR code scanning is supported.');
    }

This is better than hiding the interfaces because even across platforms, capabilities may vary and so developers should be encouraged to check for precisely the capability (such as a particular barcode format or facial landmark) they require.

## Operating system support <a href="#os-support" class="w-headline-link">#</a>

Barcode detection is available on macOS, Chrome OS, and Android. [Google Play Services](https://play.google.com/store/apps/details?id=com.google.android.gms) are required on Android.

## Best practices <a href="#bestpractices" class="w-headline-link">#</a>

All detectors work asynchronously, that is, they do not block the main thread. So don't rely on realtime detection, but rather allow for some time for the detector to do its work.

If you are a fan of [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), you'll be happy to know that detectors are exposed there as well. Detection results are serializable and can thus be passed from the worker to the main app via `postMessage()`. The [demo](https://shape-detection-demo.glitch.me/) shows this in action.

Not all platform implementations support all features, so be sure to check the support situation carefully and use the API as a progressive enhancement. For example, some platforms might support face detection per se, but not face landmark detection (eyes, nose, mouth, etc.); or the existence and the location of text may be recognized, but not text contents.

**Caution**: This API is an optimization and not something guaranteed to be available from the platform for every user. Developers are expected to combine this with their own [image recognition code](https://github.com/mjyc/opencv) and take advantage of the platform optimization when it is available.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team and the web standards community want to hear about your experiences with the Shape Detection API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model?

- File a spec issue on the [Shape Detection API GitHub repo](https://github.com/WICG/shape-detection-api/issues), or add your thoughts to an existing issue.

### Problem with the implementation? <a href="#problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at <https://new.crbug.com>. Be sure to include as much detail as you can, simple instructions for reproducing, and set _Components_ to `Blink>ImageCapture`. [Glitch](https://glitch.com) works great for sharing quick and easy repros.

### Planning to use the API? <a href="#planning-to-use-the-api" class="w-headline-link">#</a>

Planning to use the Shape Detection API on your site? Your public support helps us to prioritize features, and shows other browser vendors how critical it is to support them.

- Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/rfc-proposal-for-face-detection-api/1642/3).
- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#ShapeDetection`](https://twitter.com/search?q=%23ShapeDetection&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://docs.google.com/document/d/1QeCDBOoxkElAB0x7ZpM3VN3TQjS1ub1mejevd2Ik1gQ/edit)
- [API Demo](https://shape-detection-demo.glitch.me/) | [API Demo source](https://glitch.com/edit/#!/shape-detection-demo)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=728474)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/4757990523535360)
- Blink Component: `Blink>ImageCapture`

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/origin-trials/" class="w-chip">Origin Trials</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/shape-detection/index.md)

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
