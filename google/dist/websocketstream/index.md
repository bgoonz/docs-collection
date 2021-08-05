<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format" alt="A fire hose with water dripping out of it." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8SrIq5at2bH6i98stCgs.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#websocketstream:-integrating-streams-with-the-websocket-api" class="w-toc__header--link">WebSocketStream: integrating streams with the WebSocket API</a>

- [Background](#background)
- [The WebSocket API](#the-websocket-api)
- [The Streams API](#the-streams-api)
- [The Problem with the current WebSocket API](#the-problem-with-the-current-websocket-api)
- [What is the WebSocketStream API?](#what)
- [Suggested use cases for the WebSocketStream API](#use-cases)
- [Current status](#status)
- [How to use the WebSocketStream API](#use)
- [Introductory example](#introductory-example)
- [Advanced examples](#advanced-examples)
- [Information about closed WebSocketStream connection](#information-about-closed-websocketstream-connection)
- [Closing a WebSocketStream connection](#closing-a-websocketstream-connection)
- [Progressive enhancement and interoperability](#progressive-enhancement-and-interoperability)
- [Demo](#demo)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# WebSocketStream: integrating streams with the WebSocket API

Prevent your app from getting drowned in WebSocket messages or flooding a WebSocket server with messages by applying backpressure.

Mar 27, 2020 <span class="w-author__separator">•</span> Updated Feb 23, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

## Background <a href="#background" class="w-headline-link">#</a>

### The WebSocket API <a href="#the-websocket-api" class="w-headline-link">#</a>

The [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) provides a JavaScript interface to the [WebSocket protocol](https://tools.ietf.org/html/rfc6455), which makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without polling the server for a reply.

### The Streams API <a href="#the-streams-api" class="w-headline-link">#</a>

The [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) allows JavaScript to programmatically access streams of data chunks received over the network and process them as desired. An important concept in the context of streams is [backpressure](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts#Backpressure). This is the process by which a single stream or a pipe chain regulates the speed of reading or writing. When the stream itself or a stream later in the pipe chain is still busy and isn't yet ready to accept more chunks, it sends a signal backwards through the chain to slow delivery as appropriate.

### The Problem with the current WebSocket API <a href="#the-problem-with-the-current-websocket-api" class="w-headline-link">#</a>

#### Applying backpressure to received messages is impossible <a href="#applying-backpressure-to-received-messages-is-impossible" class="w-headline-link">#</a>

With the current WebSocket API, reacting to a message happens in [`WebSocket.onmessage`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onmessage), an `EventHandler` called when a message is received from the server.

Let's assume you had an application that needs to perform heavy data crunching operations whenever a new message is received. You would probably set up the flow similar to the code below, and since you `await` the result of the `process()` call, you should be good, right?

    // A heavy data crunching operation.
    const process = async (data) => {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          console.log('WebSocket message processed:', data);
          return resolve('done');
        }, 1000);
      });
    };

    webSocket.onmessage = async (event) => {
      const data = event.data;
      // Await the result of the processing step in the message handler.
      await process(data);
    };

Wrong! The problem with the current WebSocket API is that there is no way to apply backpressure. When messages arrive faster than the `process()` method can handle them, the render process will either fill up memory by buffering those messages, become unresponsive due to 100% CPU usage, or both.

#### Applying backpressure to sent messages is non-ergonomic <a href="#applying-backpressure-to-sent-messages-is-non-ergonomic" class="w-headline-link">#</a>

Applying backpressure to sent messages is possible, but involves polling the [`WebSocket.bufferedAmount`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount) property, which is inefficient and non-ergonomic. This read-only property returns the number of bytes of data that have been queued using calls to [`WebSocket.send()`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send), but not yet transmitted to the network. This value resets to zero once all queued data has been sent, but if you keep calling `WebSocket.send()`, it will continue to climb.

## What is the WebSocketStream API? <a href="#what" class="w-headline-link">#</a>

The WebSocketStream API deals with the problem of non-existent or non-ergonomic backpressure by integrating streams with the WebSocket API. This means backpressure can be applied "for free", without any extra cost.

### Suggested use cases for the WebSocketStream API <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that can use this API include:

- High-bandwidth WebSocket applications that need to retain interactivity, in particular video and screen-sharing.
- Similarly, video capture and other applications that generate a lot of data in the browser that needs to be uploaded to the server. With backpressure, the client can stop producing data rather than accumulating data in memory.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/ricea/websocketstream-explainer/blob/master/README.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://github.com/ricea/websocketstream-explainer/blob/master/README.md">In progress</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developers.chrome.com/origintrials/#/view_trial/1977080236415647745">Complete</a></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use the WebSocketStream API <a href="#use" class="w-headline-link">#</a>

### Introductory example <a href="#introductory-example" class="w-headline-link">#</a>

The WebSocketStream API is promise-based, which makes dealing with it feel natural in a modern JavaScript world. You start by constructing a new `WebSocketStream` and passing it the URL of the WebSocket server. Next, you wait for the `connection` to be established, which results in a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream) and/or a [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/WritableStream).

By calling the [`ReadableStream.getReader()`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader) method, you finally obtain a [`ReadableStreamDefaultReader`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader), which you can then [`read()`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read) data from until the stream is done, that is, until it returns an object of the form `{value: undefined, done: true}`.

Accordingly, by calling the [`WritableStream.getWriter()`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/getWriter) method, you finally obtain a [`WritableStreamDefaultWriter`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter), which you can then [`write()`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/write) data to.

      const wss = new WebSocketStream(WSS_URL);
      const {readable, writable} = await wss.connection;
      const reader = readable.getReader();
      const writer = writable.getWriter();

      while (true) {
        const {value, done} = await reader.read();
        if (done) {
          break;
        }
        const result = await process(value);
        await writer.write(result);
      }

#### Backpressure <a href="#backpressure" class="w-headline-link">#</a>

What about the promised backpressure feature? As I wrote above, you get it "for free", no extra steps needed. If `process()` takes extra time, the next message will only be consumed once the pipeline is ready. Likewise the `WritableStreamDefaultWriter.write()` step will only proceed if it is safe to do so.

### Advanced examples <a href="#advanced-examples" class="w-headline-link">#</a>

The second argument to WebSocketStream is an option bag to allow for future extension. Currently the only option is `protocols`, which behaves the same as the [second argument to the WebSocket constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket#Parameters:~:text=respond.-,protocols):

    const chatWSS = new WebSocketStream(CHAT_URL, {protocols: ['chat', 'chatv2']});
    const {protocol} = await chatWSS.connection;

The selected `protocol` as well as potential `extensions` are part of the dictionary available via the `WebSocketStream.connection` promise. All the information about the live connection is provided by this promise, since it is not relevant if the connection fails.

    const {readable, writable, protocol, extensions} = await chatWSS.connection;

### Information about closed WebSocketStream connection <a href="#information-about-closed-websocketstream-connection" class="w-headline-link">#</a>

The information that was available from the [`WebSocket.onclose`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onclose) and [`WebSocket.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onerror) events in the WebSocket API is now available via the `WebSocketStream.closed` promise. The promise rejects in the event of an unclean close, otherwise it resolves to the code and reason sent by the server.

All possible status codes and their meaning is explained in the [list of `CloseEvent` status codes](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes).

    const {code, reason} = await chatWSS.closed;

### Closing a WebSocketStream connection <a href="#closing-a-websocketstream-connection" class="w-headline-link">#</a>

A WebSocketStream can be closed with an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController). Therefore, pass an [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) to the `WebSocketStream` constructor.

    const controller = new AbortController();
    const wss = new WebSocketStream(URL, {signal: controller.signal});
    setTimeout(() => controller.abort(), 1000);

As an alternative, you can also use the `WebSocketStream.close()` method, but its main purpose is to permit specifying the [code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes) and reason which is sent to the server.

    wss.close({code: 4000, reason: 'Game over'});

### Progressive enhancement and interoperability <a href="#progressive-enhancement-and-interoperability" class="w-headline-link">#</a>

Chrome is currently the only browser to implement the WebSocketStream API. For interoperability with the classic WebSocket API, applying backpressure to received messages is not possible. Applying backpressure to sent messages is possible, but involves polling the [`WebSocket.bufferedAmount`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount) property, which is inefficient and non-ergonomic.

#### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the WebSocketStream API is supported, use:

    if ('WebSocketStream' in window) {
      // `WebSocketStream` is supported!
    }

## Demo <a href="#demo" class="w-headline-link">#</a>

On supporting browsers, you can see the WebSocketStream API in action in the embedded iframe, or [directly on Glitch](https://websocketstream-demo.glitch.me/).

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the WebSocketStream API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/ricea/websocketstream-explainer/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>Network>WebSockets` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy reproduction cases.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the WebSocketStream API? Your public support helps the Chrome team to prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#WebSocketStream`](https://twitter.com/search?q=%23WebSocketStream&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/ricea/websocketstream-explainer/blob/master/README.md)
- [WebSocketStream API Demo](https://websocketstream-demo.glitch.me/) | [WebSocketStream API Demo source](https://glitch.com/edit/#!/websocketstream-demo)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=983030)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5189728691290112)
- Blink Component: [`Blink>Network>WebSockets`](https://bugs.chromium.org/p/chromium/issues/list?q=component:Blink%3ENetwork%3EWebSockets)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The WebSocketStream API was implemented by [Adam Rice](https://github.com/ricea) and [Yutaka Hirano](https://github.com/yutakahirano). Hero image by [Daan Mooij](https://unsplash.com/@daanmooij) on [Unsplash](https://unsplash.com/photos/91LGCVN5SAI).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/websocketstream/index.md)

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
