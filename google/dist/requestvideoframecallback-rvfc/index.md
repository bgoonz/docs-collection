<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format" alt="Film roll." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/gpmA4LxerS1wqYgY19W7.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#perform-efficient-per-video-frame-operations-on-video-with-lesscodegreaterrequestvideoframecallback()lesscodegreater" class="w-toc__header--link">Perform efficient per-video-frame operations on video with <code>requestVideoFrameCallback()</code></a>

- [Difference with requestAnimationFrame()](<#difference-with-requestanimationframe()>)
- [What's in a name?](#what's-in-a-name)
- [Browser support and feature detection](#browser-support-and-feature-detection)
- [Using the requestVideoFrameCallback() method](<#using-the-requestvideoframecallback()-method>)
- [If things seem one frame off…](#if-things-seem-one-frame-off...)
- [Demo](#demo)
- [Conclusions](#conclusions)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Perform efficient per-video-frame operations on video with `requestVideoFrameCallback()`

Learn how to use the `requestVideoFrameCallback()` to work more efficiently with videos in the browser.

Jun 29, 2020 <span class="w-author__separator">•</span> Updated Aug 17, 2020

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

There's a new Web API on the block, defined in the [`HTMLVideoElement.requestVideoFrameCallback()`](https://wicg.github.io/video-rvfc/) specification. The `requestVideoFrameCallback()` method allows web authors to register a callback that runs in the rendering steps when a new video frame is sent to the compositor. This is intended to allow developers to perform efficient per-video-frame operations on video, such as video processing and painting to a canvas, video analysis, or synchronization with external audio sources.

## Difference with requestAnimationFrame() <a href="#difference-with-requestanimationframe()" class="w-headline-link">#</a>

Operations like drawing a video frame to a canvas via [`drawImage()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) made through this API will be synchronized as a best effort with the frame rate of the video playing on screen. Different from [`window.requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame), which usually fires about 60 times per second, `requestVideoFrameCallback()` is bound to the actual video frame rate—with an important [exception](https://wicg.github.io/video-rvfc/#ref-for-update-the-rendering%E2%91%A2:~:text=Note%3A%20The%20effective%20rate%20at%20which,browser%20would%20fire%20callbacks%20at%2060hz.):

> The effective rate at which callbacks are run is the lesser rate between the video's rate and the browser's rate. This means a 25fps video playing in a browser that paints at 60Hz would fire callbacks at 25Hz. A 120fps video in that same 60Hz browser would fire callbacks at 60Hz.

## What's in a name? <a href="#what&#39;s-in-a-name" class="w-headline-link">#</a>

Due to its similarity with `window.requestAnimationFrame()`, the method initially was [proposed as `video.requestAnimationFrame()`](https://discourse.wicg.io/t/proposal-video-requestanimationframe/3691), but I'm happy with the new name, `requestVideoFrameCallback()`, which was agreed on after a [lengthy discussion](https://github.com/WICG/video-rvfc/issues/44). Yay, [bikeshedding](https://css-tricks.com/what-is-bikeshedding/) for the win!

## Browser support and feature detection <a href="#browser-support-and-feature-detection" class="w-headline-link">#</a>

The method is [implemented in Chromium](https://chromestatus.com/feature/6335927192387584) already, and [Mozilla folks like it](https://mozilla.github.io/standards-positions/#requestVideoFrameCallback). For what it's worth, I have also filed a [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=211945) asking for it. Feature detection of the API works like this:

    if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
      // The API is supported!
    }

## Using the requestVideoFrameCallback() method <a href="#using-the-requestvideoframecallback()-method" class="w-headline-link">#</a>

If you have ever used the `requestAnimationFrame()` method, you will immediately feel at home with the `requestVideoFrameCallback()` method. You register an initial callback once, and then re-register whenever the callback fires.

    const doSomethingWithTheFrame = (now, metadata) => {
      // Do something with the frame.
      console.log(now, metadata);
      // Re-register the callback to be notified about the next frame.
      video.requestVideoFrameCallback(doSomethingWithTheFrame);
    };
    // Initially register the callback to be notified about the first frame.
    video.requestVideoFrameCallback(doSomethingWithTheFrame);

In the callback, `now` is a [`DOMHighResTimeStamp`](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) and `metadata` is a [`VideoFrameMetadata`](https://wicg.github.io/video-rvfc/#dictdef-videoframemetadata) dictionary with the following properties:

- `presentationTime`, of type `DOMHighResTimeStamp`: The time at which the user agent submitted the frame for composition.
- `expectedDisplayTime`, of type `DOMHighResTimeStamp`: The time at which the user agent expects the frame to be visible.
- `width`, of type `unsigned long`: The width of the video frame, in media pixels.
- `height`, of type `unsigned long`: The height of the video frame, in media pixels.
- `mediaTime`, of type `double`: The media presentation timestamp (PTS) in seconds of the frame presented (e.g., its timestamp on the `video.currentTime` timeline).
- `presentedFrames`, of type `unsigned long`: A count of the number of frames submitted for composition. Allows clients to determine if frames were missed between instances of `VideoFrameRequestCallback`.
- `processingDuration`, of type `double`: The elapsed duration in seconds from submission of the encoded packet with the same presentation timestamp (PTS) as this frame (e.g., same as the `mediaTime`) to the decoder until the decoded frame was ready for presentation.

For WebRTC applications, additional properties may appear:

- `captureTime`, of type `DOMHighResTimeStamp`: For video frames coming from either a local or remote source, this is the time at which the frame was captured by the camera. For a remote source, the capture time is estimated using clock synchronization and RTCP sender reports to convert RTP timestamps to capture time.
- `receiveTime`, of type `DOMHighResTimeStamp`: For video frames coming from a remote source, this is the time the encoded frame was received by the platform, i.e., the time at which the last packet belonging to this frame was received over the network.
- `rtpTimestamp`, of type `unsigned long`: The RTP timestamp associated with this video frame.

Note that `width` and `height` might differ from `videoWidth` and `videoHeight` in certain cases (e.g., an anamorphic video might have rectangular pixels).

Of special interest in this list is `mediaTime`. In Chromium's implementation, we use the audio clock as the time source that backs `video.currentTime`, whereas the `mediaTime` is directly populated by the `presentationTimestamp` of the frame. The `mediaTime` is what you should use if you want to exactly identify frames in a reproducible way, including to identify exactly which frames you missed.

Unfortunately, the video element does not guarantee frame-accurate _seeking_. This has been an ongoing [subject of discussion](https://github.com/w3c/media-and-entertainment/issues/4). [WebCodecs](https://github.com/WICG/web-codecs) will eventually allow for frame accurate applications.

### If things seem one frame off… <a href="#if-things-seem-one-frame-off..." class="w-headline-link">#</a>

Vertical synchronization (or just vsync), is a graphics technology that synchronizes the frame rate of a video and the refresh rate of a monitor. Since `requestVideoFrameCallback()` runs on the main thread, but, under the hood, video compositing happens on the compositor thread, everything from this API is a best effort, and we do not offer any strict guarantees. What may be happening is that the API can be one vsync late relative to when a video frame is rendered. It takes one vsync for changes made to the web page through the API to appear on screen (same as `window.requestAnimationFrame()`). So if you keep updating the `mediaTime` or frame number on your web page and compare that against the numbered video frames, eventually the video will look like it is one frame ahead.

What is really happening is that the frame is ready at vsync x, the callback is fired and the frame is rendered at vsync x+1, and changes made in the callback are rendered at vsync x+2. You can check whether the callback is a vsync late (and the frame is already rendered on screen) by checking whether the `metadata.expectedDisplayTime` is roughly `now` or one vsync in the future. If it is within about five to ten microseconds of `now`, the frame is already rendered; if the `expectedDisplayTime` is approximately sixteen milliseconds in the future (assuming your browser/screen is refreshing at 60Hz), then you are in sync with the frame.

## Demo <a href="#demo" class="w-headline-link">#</a>

I have created a small [demo on Glitch](https://requestvideoframecallback.glitch.me/) that shows how frames are drawn on a canvas at exactly the frame rate of the video and where the frame metadata is logged for debugging purposes. The core logic is just a couple of lines of JavaScript.

    let paintCount = 0;
    let startTime = 0.0;

    const updateCanvas = (now, metadata) => {
      if (startTime === 0.0) {
        startTime = now;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const elapsed = (now - startTime) / 1000.0;
      const fps = (++paintCount / elapsed).toFixed(3);
      fpsInfo.innerText = `video fps: ${fps}`;
      metadataInfo.innerText = JSON.stringify(metadata, null, 2);

      video.requestVideoFrameCallback(updateCanvas);
    };

    video.requestVideoFrameCallback(updateCanvas);

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

I have done frame-level processing for a long time—without having access to the actual frames, only based on `video.currentTime`. I implemented video shot segmentation in JavaScript in a rough-and-ready manner; you can still read the accompanying [research paper](https://www2012.universite-lyon.fr/proceedings/nocompanion/DevTrack_028.pdf). Had the `requestVideoFrameCallback()` existed back then, my life would have been much simpler…

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The `requestVideoFrameCallback` API was specified and implemented by [Thomas Guilbert](https://github.com/tguilbert-google). This article was reviewed by [Joe Medley](https://github.com/jpmedley) and [Kayce Basques](https://github.com/kaycebasques). [Hero image](https://unsplash.com/photos/tV80374iytg) by [Denise Jans](https://unsplash.com/@dmjdenise) on Unsplash.

<a href="/tags/media/" class="w-chip">Media</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Aug 17, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/requestvideoframecallback-rvfc/index.md)

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
