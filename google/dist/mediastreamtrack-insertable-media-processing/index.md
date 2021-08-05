<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format" alt="Cup of coffee and a laptop with a video conference showing many participants." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/Qu2wfQ3pxR8AeEfty88S.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#insertable-streams-for-mediastreamtrack" class="w-toc__header--link">Insertable streams for MediaStreamTrack</a>

- [Background](#background)
- [What is insertable streams for MediaStreamTrack?](#what-is-insertable-streams-for-mediastreamtrack)
- [Use cases](#use-cases)
- [Current status](#status)
- [How to use insertable streams for MediaStreamTrack](#how-to-use-insertable-streams-for-mediastreamtrack)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Feature detection](#feature-detection)
- [Core concepts](#core-concepts)
- [Bringing it all together](#bringing-it-all-together)
- [Demo](#demo)
- [Security and Privacy considerations](#security-and-privacy-considerations)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Insertable streams for MediaStreamTrack

The content of a `MediaStreamTrack` is exposed as a stream that can be manipulated or used to generate new content.

May 4, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Insertable streams for `MediaStreamTrack` is part of the [capabilities project](https://web.dev/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

## Background <a href="#background" class="w-headline-link">#</a>

In the context of the [Media Capture and Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API) the [`MediaStreamTrack`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) interface represents a single media track within a stream; typically, these are audio or video tracks, but other track types may exist. [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) objects consist of zero or more `MediaStreamTrack` objects, representing various audio or video tracks. Each `MediaStreamTrack` may have one or more channels. The channel represents the smallest unit of a media stream, such as an audio signal associated with a given speaker, like left or right in a stereo audio track.

## What is insertable streams for `MediaStreamTrack`? <a href="#what-is-insertable-streams-for-mediastreamtrack" class="w-headline-link">#</a>

The core idea behind insertable streams for `MediaStreamTrack` is to expose the content of a `MediaStreamTrack` as a collection of [streams](/streams/) (as defined by the WHATWG [Streams API](https://streams.spec.whatwg.org/)). These streams can be manipulated to introduce new components.

Granting developers access to the video (or audio) stream directly allows them to apply modifications directly to the stream. In contrast, realizing the same video manipulation task with traditional methods requires developers to use intermediaries such as `<canvas>` elements. (For details of this type of process, see, for example, [video + canvas = magic](https://html5doctor.com/video-canvas-magic/).)

## Use cases <a href="#use-cases" class="w-headline-link">#</a>

Use cases for insertable streams for `MediaStreamTrack` include, but are not limited to:

- Video conferencing gadgets like "funny hats" or virtual backgrounds.
- Voice processing like software [vocoders](https://en.wikipedia.org/wiki/Vocoder).

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/w3c/mediacapture-transform/blob/main/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://w3c.github.io/mediacapture-transform/">In Progress</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><strong><a href="https://developer.chrome.com/origintrials/#/view_trial/-7811493553674125311">In progress</a></strong></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use insertable streams for `MediaStreamTrack` <a href="#how-to-use-insertable-streams-for-mediastreamtrack" class="w-headline-link">#</a>

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chrome 90, insertable streams for `MediaStreamTrack` is available as part of the WebCodecs origin trial in Chrome. The origin trial is expected to end in Chrome 91 (July 14, 2021). If necessary, a separate origin trial will continue for insertable streams for `MediaStreamTrack`.

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/-7811493553674125311) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with insertable streams for `MediaStreamTrack` locally, without an origin trial token, enable the `#enable-experimental-web-platform-features` flag in `about://flags`.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

You can feature-detect insertable streams for `MediaStreamTrack` support as follows.

    if ('MediaStreamTrackProcessor' in window && 'MediaStreamTrackGenerator' in window) {
      // Insertable streams for `MediaStreamTrack` is supported.
    }

### Core concepts <a href="#core-concepts" class="w-headline-link">#</a>

Insertable streams for `MediaStreamTrack` builds on concepts previously proposed by [WebCodecs](https://web.dev/webcodecs/) and conceptually splits the `MediaStreamTrack` into two components:

- The `MediaStreamTrackProcessor`, which consumes a `MediaStreamTrack` object's source and generates a stream of media frames, specifically [`VideoFrame`](https://w3c.github.io/webcodecs/#videoframe-interface) or [`AudioFrame`](https://w3c.github.io/webcodecs/#audioframe-interface)) objects. You can think of this as a track sink that is capable of exposing the unencoded frames from the track as a `ReadableStream`. It also exposes a control channel for signals going in the opposite direction.
- The `MediaStreamTrackGenerator`, which consumes a stream of media frames and exposes a `MediaStreamTrack` interface. It can be provided to any sink, just like a track from `getUserMedia()`. It takes media frames as input. In addition, it provides access to control signals that are generated by the sink.

#### The `MediaStreamTrackProcessor` <a href="#the-mediastreamtrackprocessor" class="w-headline-link">#</a>

A `MediaStreamTrackProcessor` object exposes two properties:

- `readable`: Allows reading the frames from the `MediaStreamTrack`. If the track is a video track, chunks read from `readable` will be `VideoFrame` objects. If the track is an audio track, chunks read from `readable` will be `AudioFrame` objects.
- `writableControl`: Allows sending control signals to the track. Control signals are objects of type `MediaStreamTrackSignal`.

#### The `MediaStreamTrackGenerator` <a href="#the-mediastreamtrackgenerator" class="w-headline-link">#</a>

A `MediaStreamTrackGenerator` object likewise exposes two properties:

- `writable`: A `WritableStream` that allows writing media frames to the `MediaStreamTrackGenerator`, which is itself a `MediaStreamTrack`. If the `kind` attribute is `"audio"`, the stream accepts `AudioFrame` objects and fails with any other type. If kind is `"video"`, the stream accepts `VideoFrame` objects and fails with any other type. When a frame is written to `writable`, the frame's `close()` method is automatically invoked, so that its media resources are no longer accessible from JavaScript.
- `readableControl`: A `ReadableStream` that allows reading control signals sent from any sinks connected to the `MediaStreamTrackGenerator`. Control signals are objects of type `MediaStreamTrackSignal`.

In the `MediaStream` model, apart from media, which flows from sources to sinks, there are also control signals that flow in the opposite direction (i.e., from sinks to sources via the track). A `MediaStreamTrackProcessor` is a sink and it allows sending control signals to its track and source via its `writableControl` property. A `MediaStreamTrackGenerator` is a track for which a custom source can be implemented by writing media frames to its `writable` field. Such a source can receive control signals sent by sinks via its `readableControl` property.

### Bringing it all together <a href="#bringing-it-all-together" class="w-headline-link">#</a>

The core idea is to create a processing chain as follows:

Platform Track → Processor → Transform → Generator → Platform Sinks

For a barcode scanner application, this chain would look as in the code sample below.

    const stream = await getUserMedia({ video: true });
    const videoTrack = stream.getVideoTracks()[0];

    const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
    const trackGenerator = new MediaStreamTrackGenerator({ kind: 'video' });

    const transformer = new TransformStream({
      async transform(videoFrame, controller) {
        const barcodes = await detectBarcodes(videoFrame);
        const newFrame = highlightBarcodes(videoFrame, barcodes);
        videoFrame.close();
        controller.enqueue(newFrame);
      },
    });

    trackProcessor.readable.pipeThrough(transformer).pipeTo(trackGenerator.writable);

    trackGenerator.readableControl.pipeTo(trackProcessor.writableControl);

This article barely scratches the surface of what is possible and going into the details is way beyond the scope of this publication. For more examples, see the extended [video processing demo](https://webrtc.github.io/samples/src/content/insertable-streams/video-processing/) and the [audio processing demo](https://webrtc.github.io/samples/src/content/insertable-streams/audio-processing/) respectively. You can find the source code for both demos [on GitHub](https://github.com/webrtc/samples/tree/gh-pages/src/content/insertable-streams).

## Demo <a href="#demo" class="w-headline-link">#</a>

You can see the [QR code scanner demo](https://mediastreamtrack.glitch.me/) from the section above in action on a desktop or mobile browser. Hold a QR code in front of the camera and the app will detect it and highlight it. You can see the application's source code [on Glitch](https://glitch.com/edit/#!/mediastreamtrack?path=index.html%3A21%3A50).

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format" alt="QR code scanner running in desktop browser tab showing a detected and highlighted QR code on the phone the user holds in front of the laptop&#39;s camera." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/VwysZHgnzswePs684xOJ.png?auto=format&amp;w=1600 1600w" width="800" height="481" />

## Security and Privacy considerations <a href="#security-and-privacy-considerations" class="w-headline-link">#</a>

The security of this API relies on existing mechanisms in the web platform. As data is exposed using the `VideoFrame` and `AudioFrame` interfaces, the rules of those interfaces to deal with origin-tainted data apply. For example, data from cross-origin resources cannot be accessed due to existing restrictions on accessing such resources (e.g., it is not possible to access the pixels of a cross-origin image or video element). In addition, access to media data from cameras, microphones, or screens is subject to user authorization. The media data this API exposes is already available through other APIs. In addition to the media data, this API exposes some control signals such as requests for new frames. These signals are intended as hints and do not pose a significant security risk.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with insertable streams for `MediaStreamTrack`.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that does not work like you expected? Or are there missing methods or properties that you need to implement your idea? Do you have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/w3c/mediacapture-transform/), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>MediaStream` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use insertable streams for `MediaStreamTrack`? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#InsertableStreams`](https://twitter.com/search?q=%23InsertableStreams&src=recent_search_click&f=live) and let us know where and how you are using it.

## Helpful links <a href="#helpful-links" class="w-headline-link">#</a>

- [Spec draft](https://w3c.github.io/mediacapture-transform/)
- [Explainer](https://github.com/w3c/mediacapture-transform/blob/main/explainer.md)
- [ChromeStatus](https://chromestatus.com/feature/5499415634640896)
- [Chromium bug](https://crbug.com/1142955)
- [TAG review](https://github.com/w3ctag/design-reviews/issues/603)
- [GitHub repo](https://github.com/w3c/mediacapture-transform/)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The insertable streams for `MediaStreamTrack` spec was written by [Harald Alvestrand](https://github.com/alvestrand) and [Guido Urdaneta](https://github.com/guidou). This article was reviewed by Harald Alvestrand, [Joe Medley](https://github/com/jpmedley), [Ben Wagner](https://github.com/dogben), [Huib Kleinhout](https://github.com/huibk), and [François Beaufort](https://github.com/beaufortfrancois). Hero image by [Chris Montgomery](https://unsplash.com/@cwmonty) on [Unsplash](https://unsplash.com/photos/smgTvepind4).

<a href="/tags/media/" class="w-chip">Media</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: May 4, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/mediastreamtrack-insertable-media-processing/index.md)

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
