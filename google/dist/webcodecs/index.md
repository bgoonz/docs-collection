<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format" alt="A roll of film." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/I09h0la9qLPSRLZs1ruB.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#video-processing-with-webcodecs" class="w-toc__header--link">Video processing with WebCodecs</a>

- [Current status](#status)
- [Video processing workflow](#video-processing-workflow)
- [WebCodecs in action](#webcodecs-in-action)
- [Encoding](#encoding)
- [Decoding](#decoding)
- [Demo](#demo)
- [Feature detection](#feature-detection)
- [Using the WebCodecs API](#use)
- [Enabling via a command line flag](#enabling-via-a-command-line-flag)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#ot)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Video processing with WebCodecs

Manipulating video stream components.

Oct 13, 2020 <span class="w-author__separator">•</span> Updated Oct 16, 2020

[<img src="https://web-dev.imgix.net/image/admin/MWYHP293xzaBdw30G3Ts.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eugene Zemtsov" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MWYHP293xzaBdw30G3Ts.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/MWYHP293xzaBdw30G3Ts.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/MWYHP293xzaBdw30G3Ts.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/MWYHP293xzaBdw30G3Ts.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/MWYHP293xzaBdw30G3Ts.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/djuffin/)

<a href="/authors/djuffin/" class="w-author__name-link">Eugene Zemtsov</a>

- <a href="https://github.com/djuffin" class="w-author__link">GitHub</a>

Modern web technologies provide ample ways to work with video. [Media Stream API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API), [Media Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API), [Media Source API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API), and [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) add up to a rich tool set for recording, transferring, and playing video streams. While solving certain high-level tasks, these APIs don't let web programmers work with individual components of a video stream such as frames and unmuxed chunks of encoded video or audio. To get low-level access to these basic components, developers have been using WebAssembly to bring [video and audio codecs](https://en.wikipedia.org/wiki/Video_codec) into the browser. But given that modern browsers already ship with a variety of codecs (which are often accelerated by hardware), repackaging them as WebAssembly seems like a waste of human and computer resources.

[WebCodecs API](https://wicg.github.io/web-codecs/) eliminates this inefficiency by giving programmers a way to use media components that are already present in the browser. Specifically:

- Video and audio decoders
- Video and audio encoders
- Raw video frames
- Image decoders

The WebCodecs API is useful for web applications that require full control over the way media content is processed, such as video editors, video conferencing, video streaming, etc.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/web-codecs/blob/master/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/web-codecs/">Complete</a></td></tr><tr class="odd"><td><strong>3. Gather feedback &amp; iterate on design</strong></td><td><a href="#feedback"><strong>In Progress</strong></a></td></tr><tr class="even"><td><strong>4. Origin trial</strong></td><td><a href="#ot"><strong>In Progress</strong></a></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## Video processing workflow <a href="#video-processing-workflow" class="w-headline-link">#</a>

Frames are the centerpiece in video processing. Thus in WebCodecs most classes either consume or produce frames. Video encoders convert frames into encoded chunks. Video decoders do the opposite. Track readers turn video tracks into a sequence of frames. By design all these transformations happen asynchronously. WebCodecs API tries to keep the web responsive by keeping the heavy lifting of video processing off the main thread.

Currently in WebCodecs the only way to show a frame on the page is to convert it into an [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) and either draw the bitmap on a canvas or convert it into a [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture).

## WebCodecs in action <a href="#webcodecs-in-action" class="w-headline-link">#</a>

### Encoding <a href="#encoding" class="w-headline-link">#</a>

It all starts with a `VideoFrame`. There are two ways to convert existing pictures into `VideoFrame` objects.

The first is to create a frame directly from an [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap). Just call the `VideoFrame()` constructor and give it a bitmap and a presentation timestamp.

    let cnv = document.createElement('canvas');
    // draw something on the canvas
    …
    let bitmap = await createImageBitmap(cnv);
    let frame_from_bitmap = new VideoFrame(bitmap, { timestamp: 0 });

<figure><img src="https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format" alt="The path from ImageBitmap to the network or to storage." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/7LNdjNlwCUB1csF9DDl8.png?auto=format&amp;w=1600 1600w" width="800" height="291" /><figcaption>The path from <code>ImageBitmap</code> to the network or to storage.</figcaption></figure>The second is to use `VideoTrackReader` to set a function that will be called each time a new frame appears in a [`MediaStreamTrack`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack). This is useful when you need to capture a video stream from a camera or the screen.

    let frames_from_stream = [];
    let stream = await navigator.mediaDevices.getUserMedia({ … });
    let vtr = new VideoTrackReader(stream.getVideoTracks()[0]);
    vtr.start((frame) => {
      frames_from_stream.push(frame);
    });

<figure><img src="https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format" alt="The path from MediaStreamTrack to the network or to storage." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/f3IxThFMnEnfj4aBExHk.png?auto=format&amp;w=1600 1600w" width="800" height="389" /><figcaption>The path from <code>MediaStreamTrack</code> to the network or to storage.</figcaption></figure>No matter where they are coming from, frames can be encoded into `EncodedVideoChunk` objects with a `VideoEncoder`.

Before encoding, `VideoEncoder` needs to be given two JavaScript objects:

- Init dictionary with two functions for handling encoded chunks and errors. These functions are developer-defined and can't be changed after they're passed to the `VideoEncoder` constructor.
- Encoder configuration object, which contains parameters for the output video stream. You can change these parameters later by calling `configure()`.

<!-- -->

    const init = {
      output: handleChunk,
      error: (e) => {
        console.log(e.message);
      }
    };

    let config = {
      codec: 'vp8',
      width: 640,
      height: 480,
      bitrate: 8_000_000,     // 8 Mbps
      framerate: 30,
    };

    let encoder = new VideoEncoder(init);
    encoder.configure(config);

After the encoder has been set up, it's ready to start accepting frames. When frames are coming from a media stream, the callback given to `VideoTrackReader.start()` will pump frames into the encoder, periodically inserting [keyframes](https://en.wikipedia.org/wiki/Key_frame#Video_compression) and checking that the encoder is not overwhelmed with incoming frames. Both `configure()` and `encode()` return immediately without waiting for the actual work to complete. It allows several frames to queue for encoding at the same time. But it makes error reporting somewhat cumbersome. Errors are reported either by immediately throwing exceptions or by calling the `error()` callback. Some errors are easy to detect immediately, others become evident only during encoding. If encoding completes successfully the `output()` callback is called with a new encoded chunk as an argument. Another important detail here is that `encode()` consumes the frame, if the frame is needed later (for example, to encode with another encoder) it needs to be duplicated by calling `clone()`.

    let frame_counter = 0;
    let pending_outputs = 0;
    let vtr = new VideoTrackReader(stream.getVideoTracks()[0]);

    vtr.start((frame) => {
      if (pending_outputs > 30) {
        // Too many frames in flight, encoder is overwhelmed
        // let's drop this frame.
        return;
      }
      frame_counter++;
      pending_outputs++;
      const insert_keyframe = (frame_counter % 150) == 0;
      encoder.encode(frame, { keyFrame: insert_keyframe });
    });

Finally it's time to finish encoding code by writing a function that handles chunks of encoded video as they come out of the encoder. Usually this function would be sending data chunks over the network or [muxing](https://en.wikipedia.org/wiki/Multiplexing#Video_processing) them into a media container for storage.

    function handleChunk(chunk) {
      let data = new Uint8Array(chunk.data);  // actual bytes of encoded data
      let timestamp = chunk.timestamp;        // media time in microseconds
      let is_key = chunk.type == 'key';       // can also be 'delta'
      pending_outputs--;
      fetch(`/upload_chunk?timestamp=${timestamp}&type=${chunk.type}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: data
      });
    }

If at some point you'd need to make sure that all pending encoding requests have been completed, you can call `flush()` and wait for its promise.

    await encoder.flush();

### Decoding <a href="#decoding" class="w-headline-link">#</a>

Setting up a `VideoDecoder` is similar to what's been done for the `VideoEncoder`: two functions are passed when the decoder is created, and codec parameters are given to `configure()`. The set of codec parameters can vary from codec to codec, for example for H264 you currently need to specify a [binary blob](https://wicg.github.io/web-codecs/#dom-audiodecoderconfig-description) with AVCC extradata.

    const init = {
      output: handleFrame,
      error: (e) => {
        console.log(e.message);
      }
    };

    const config = {
      codec: 'vp8',
      codedWidth: 640,
      codedHeight: 480
    };

    let decoder = new VideoDecoder(init);
    decoder.configure(config);

Once the decoder is initialized, you can start feeding it with `EncodedVideoChunk` objects. Creating a chunk just takes a [`BufferSource`](https://developer.mozilla.org/en-US/docs/Web/API/BufferSource)of data and a frame timestamp in microseconds. Any chunks emitted by the encoder are ready for the decoder as is, although it's hard to imagine a real-world use case for decoding newly encoded chunks (except for the demo below). All of the things said above about the asynchronous nature of encoder's methods are equally true for decoders.

    let responses = await downloadVideoChunksFromServer(timestamp);
    for (let i = 0; i < responses.length; i++) {
      let chunk = new EncodedVideoChunk({
        timestamp: responses[i].timestamp,
        data: new Uint8Array ( responses[i].body )
      });
      decoder.decode(chunk);
    }
    await decoder.flush();

<figure><img src="https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format" alt="The path from the network or storage to an ImageBitmap." sizes="(min-width: 675px) 675px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/dOekoTYsgE2j6WrHi4TV.png?auto=format&amp;w=1350 1350w" width="675" height="295" /><figcaption>The path from the network or storage to an <code>ImageBitmap</code>.</figcaption></figure>Now it's time to show how a freshly decoded frame can be shown on the page. It's better to make sure that the decoder output callback (`handleFrame()`) quickly returns. In the example below, it only adds a frame to the queue of frames ready for rendering. Rendering happens separately, and consists of three steps:

1.  Converting the `VideoFrame` into an [`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap).
2.  Waiting for the right time to show the frame.
3.  Drawing the image on the canvas.

Once a frame is no longer needed, call `destroy()` to release underlying memory before the garbage collector gets to it, this will reduce the average amount of memory used by the web application.

    let cnv = document.getElementById('canvas_to_render');
    let ctx = cnv.getContext('2d', { alpha: false });
    let ready_frames = [];
    let underflow = true;
    let time_base = 0;

    function handleFrame(frame) {
      ready_frames.push(frame);
      if (underflow)
        setTimeout(render_frame, 0);
    }

    function delay(time_ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, time_ms);
      });
    }

    function calculateTimeTillNextFrame(timestamp) {
      if (time_base == 0)
        time_base = performance.now();
      let media_time = performance.now() - time_base;
      return Math.max(0, (timestamp / 1000) - media_time);
    }

    async function render_frame() {
      if (ready_frames.length == 0) {
        underflow = true;
        return;
      }
      let frame = ready_frames.shift();
      underflow = false;

      let bitmap = await frame.createImageBitmap();
      // Based on the frame's timestamp calculate how much of real time waiting
      // is needed before showing the next frame.
      let time_till_next_frame = calculateTimeTillNextFrame(frame.timestamp);
      await delay(time_till_next_frame);
      ctx.drawImage(bitmap, 0, 0);

      // Immediately schedule rendering of the next frame
      setTimeout(render_frame, 0);
      frame.destroy();
    }

## Demo <a href="#demo" class="w-headline-link">#</a>

The demo below shows two canvases, the first one is animated at the refresh rate of your display, the second one shows a sequence of frames captured by `VideoTrackReader` at 30 FPS, encoded and decoded using WebCodecs API.

## Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check for WebCodecs support:

    if ('VideoEncoder' in window) {
      // WebCodecs API is supported.
    }

## Using the WebCodecs API <a href="#use" class="w-headline-link">#</a>

### Enabling via a command line flag <a href="#enabling-via-a-command-line-flag" class="w-headline-link">#</a>

To experiment with the WebCodecs API locally on all desktop platforms, without an origin trial token, start Chrome with a command line flag:

    --enable-blink-features=WebCodecs

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

The WebCodecs API is available on all desktop platforms (Chrome OS, Linux, macOS, and Windows) as an origin trial in Chrome 86. The origin trial is expected to end just before Chrome 88 moves to stable in February 2021. The API can also be enabled using a flag.

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#ot" class="w-headline-link">#</a>

1.  [Request a token](https://developers.chrome.com/origintrials/#/view_trial/-7811493553674125311) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the Idle Detection API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/web-codecs/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EMedia%3EWebCodecs). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>Media>WebCodecs` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the WebCodecs API? Your public support helps the Chrome team to prioritize features and shows other browser vendors how critical it is to support them.

Send emails to <media-dev@chromium.org> or send a tweet to \[@ChromiumDev\]\[cr-dev-twitter\] using the hashtag [`#WebCodecs`](https://twitter.com/search?q=%23WebCodecs&src=typed_query&f=live) and let us know where and how you're using it.

[Hero image](https://unsplash.com/photos/8eQOBtgn9Qo) by [Denise Jans](https://unsplash.com/@dmjdenise) on [Unsplash](https://unsplash.com).

<a href="/tags/media/" class="w-chip">Media</a>

<span class="w-mr--sm"> Last updated: Oct 16, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/webcodecs/index.md)

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
