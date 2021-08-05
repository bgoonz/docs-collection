<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format" alt="Photo of fast-moving traffic." class="w-hero w-hero--cover w-hero--center" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Wh6q6ughWxUYcu4iOutU.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#experimenting-with-webtransport" class="w-toc__header--link">Experimenting with WebTransport</a>

- [Background](#background)
- [What's WebTransport?](#what's-webtransport)
- [Use cases](#use-cases)
- [Current status](#status)
- [WebTransport's relationship to other technologies](#webtransport's-relationship-to-other-technologies)
- [Is WebTransport a replacement for WebSockets?](#is-webtransport-a-replacement-for-websockets)
- [Is WebTransport the same as a UDP Socket API?](#is-webtransport-the-same-as-a-udp-socket-api)
- [Is WebTransport an alternative to WebRTC data channels?](#is-webtransport-an-alternative-to-webrtc-data-channels)
- [Try it out](#try-it-out)
- [Using the API](#using-the-api)
- [Connecting to a server](#connecting-to-a-server)
- [Datagram APIs](#datagram)
- [Streams APIs](#stream)
- [More examples](#more-examples)
- [Enabling support during the origin trial](#register-for-ot)
- [WebTransport in Chrome's DevTools](#webtransport-in-chrome's-devtools)
- [Privacy and security considerations](#privacy-and-security-considerations)
- [Feedback](#feedback)
- [Feedback about the API design](#feedback-about-the-api-design)
- [Problem with the implementation?](#problem-with-the-implementation)
- [Planning to use the API?](#planning-to-use-the-api)
- [General discussion](#general-discussion)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Experimenting with WebTransport

WebTransport is a new API offering low-latency, bidirectional, client-server messaging. Learn more about its use cases, and how to give feedback about the future of the implementation.

Jun 8, 2020 <span class="w-author__separator">•</span> Updated Feb 23, 2021

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

**Caution**: This proposal continues to change during the origin trial period. There may be a divergence between the browser implementation and the information in this article.

For the latest on this evolving proposal, please read refer to the [editor's draft of WebTransport](https://w3c.github.io/webtransport/).

Once the proposal stabilizes, we will update this article and associated code samples with up to date information.

## Background <a href="#background" class="w-headline-link">#</a>

### What's WebTransport? <a href="#what&#39;s-webtransport" class="w-headline-link">#</a>

[WebTransport](https://w3c.github.io/webtransport/) is a web API that uses the [HTTP/3](https://quicwg.org/base-drafts/draft-ietf-quic-http.html) protocol as a bidirectional transport. It's intended for two-way communications between a web client and an HTTP/3 server. It supports sending data both unreliably via its [datagram APIs](#datagram), and reliably via its [streams APIs](#stream).

[Datagrams](https://tools.ietf.org/html/draft-ietf-quic-datagram-00) are ideal for sending and receiving data that do not need strong delivery guarantees. Individual packets of data are limited in size by the [maximum transmission unit (MTU)](https://en.wikipedia.org/wiki/Maximum_transmission_unit) of the underlying connection, and may or may not be transmitted successfully, and if they are transferred, they may arrive in an arbitrary order. These characteristics make the datagram APIs ideal for low-latency, best-effort data transmission. You can think of datagrams as [user datagram protocol (UDP)](https://en.wikipedia.org/wiki/User_Datagram_Protocol) messages, but encrypted and congestion-controlled.

The streams APIs, in contrast, provide [reliable](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>), ordered data transfer. They're [well-suited](https://quicwg.org/base-drafts/draft-ietf-quic-transport.html#name-streams) to scenarios where you need to send or receive one or more streams of ordered data. Using multiple WebTransport streams is analogous to establishing multiple [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connections, but since HTTP/3 uses the lighter-weight [QUIC](https://www.chromium.org/quic) protocol under the hood, they can be opened and closed without as much overhead.

### Use cases <a href="#use-cases" class="w-headline-link">#</a>

This a small list of possible ways developers might use WebTransport.

- Sending game state at a regular interval with minimal latency to a server via small, unreliable, out-of-order messages.
- Receiving media streams pushed from a server with minimal latency, independent of other data streams.
- Receiving notifications pushed from a server while a web page is open.

As part of the origin trial process, we're interested in [hearing more](#feedback) about how you plan to use WebTransport.

Many of the concepts in this proposal were previously experimented with as part of the earlier QuicTransport origin trial, which did not end up being released as part of Chrome.

WebTransport helps with similar use cases as QuicTransport, with the primary difference being that [HTTP/3](https://quicwg.org/base-drafts/draft-ietf-quic-http.html) instead of [QUIC](https://www.chromium.org/quic) is the underlying transport protocol.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/w3c/webtransport/blob/main/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://w3c.github.io/webtransport/">Complete</a></td></tr><tr class="odd"><td><strong>3. Gather feedback and iterate design</strong></td><td><a href="#feedback"><strong>In Progress</strong></a></td></tr><tr class="even"><td><strong>4. Origin trial</strong></td><td><a href="#register-for-ot"><strong>In Progress</strong></a></td></tr><tr class="odd"><td>5. Launch</td><td>Not Started</td></tr></tbody></table>

## WebTransport's relationship to other technologies <a href="#webtransport&#39;s-relationship-to-other-technologies" class="w-headline-link">#</a>

### Is WebTransport a replacement for WebSockets? <a href="#is-webtransport-a-replacement-for-websockets" class="w-headline-link">#</a>

Maybe. There are use cases where either [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) or WebTransport might be valid communication protocols to use.

WebSockets communications are modeled around a single, reliable, ordered stream of messages, which is fine for some types of communication needs. If you need those characteristics, then WebTransport's streams APIs can provide them as well. In comparison, WebTransport's datagram APIs provide low-latency delivery, without guarantees about reliability or ordering, so they're not a direct replacement for WebSockets.

Using WebTransport, via the datagram APIs or via multiple concurrent Streams API instances, means that you don't have to worry about [head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking), which can be an issue with WebSockets. Additionally, there are performance benefits when establishing new connections, as the underlying [QUIC handshake](https://www.fastly.com/blog/quic-handshake-tls-compression-certificates-extension-study) is faster than starting up TCP over TLS.

WebTransport is part of a new draft specification, and as such the WebSocket ecosystem around client and server libraries is currently much more robust. If you need something that works "out of the box" with common server setups, and with broad web client support, WebSockets is a better choice today.

### Is WebTransport the same as a UDP Socket API? <a href="#is-webtransport-the-same-as-a-udp-socket-api" class="w-headline-link">#</a>

No. WebTransport is not a [UDP Socket API](https://www.w3.org/TR/raw-sockets/). While WebTransport uses HTTP/3, which in turn uses UDP "under the hood," WebTransport has requirements around encryption and congestion control that make it more than a basic UDP Socket API.

### Is WebTransport an alternative to WebRTC data channels? <a href="#is-webtransport-an-alternative-to-webrtc-data-channels" class="w-headline-link">#</a>

Yes, for client-server connections. WebTransport shares many of the same properties as [WebRTC data channels](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel), although the underlying protocols are different.

WebRTC data channels support peer-to-peer communications, but WebTransport only supports client-server connection. If you have multiple clients that need to talk directly to each other, then WebTransport isn't a viable alternative.

Generally, running a HTTP/3-compatible server requires less setup and configuration than maintaining a WebRTC server, which involves understanding multiple protocols ([ICE](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Connectivity#ICE_candidates), [DTLS](https://webrtc-security.github.io/#4.3.1.), and [SCTP](https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport)) in order to get a working transport. WebRTC entails many more moving pieces that could lead to failed client/server negotiations.

The WebTransport API was designed with the web developer use cases in mind, and should feel more like writing modern web platform code than using WebRTC's data channel interfaces. [Unlike WebRTC](https://bugs.chromium.org/p/chromium/issues/detail?id=302019), WebTransport is supported inside of [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), which allows you to perform client-server communications independent of a given HTML page. Because WebTransport exposes a [Streams](https://streams.spec.whatwg.org/)-compliant interface, it supports optimizations around [backpressure](https://streams.spec.whatwg.org/#backpressure).

However, if you already have a working WebRTC client/server setup that you're happy with, switching to WebTransport may not offer many advantages.

## Try it out <a href="#try-it-out" class="w-headline-link">#</a>

The best way to experiment with WebTransport is to start up a compatible HTTP/3 server locally. (Unfortunately, a public reference server compatible with the latest specification is not currently available.) You can then use this page with a [basic JavaScript client](https://googlechrome.github.io/samples/webtransport/client.html) to try out client/server communications.

## Using the API <a href="#using-the-api" class="w-headline-link">#</a>

WebTransport was designed on top of modern web platform primitives, like the [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API). It relies heavily on [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises), and works well with [`async` and `await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await).

The WebTransport [origin trial](#register-for-ot) supports three distinct types of traffic: datagrams, as well as both unidirectional and bidirectional streams.

### Connecting to a server <a href="#connecting-to-a-server" class="w-headline-link">#</a>

You can connect to a HTTP/3 server by creating a `WebTransport` instance. The scheme of the URL should be `https`. You need to explicitly specify the port number.

You should use the `ready` promise to wait for the connection to be established. This promise will not be fulfilled until the setup is complete, and will reject if the connection fails at the QUIC/TLS stage.

The `closed` promise fulfills when the connection closes normally, and rejects if the closure was unexpected.

If the server rejects the connection due to a [client indication](https://tools.ietf.org/html/draft-vvv-webtransport-quic-01#section-3.2) error (e.g. the path of the URL is invalid), then that causes `closed` to reject, while `ready` remains unresolved.

    const url = 'https://example.com:4999/foo/bar';
    const transport = new WebTransport(url);

    // Optionally, set up functions to respond to
    // the connection closing:
    transport.closed.then(() => {
      console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
    }).catch((error) => {
      console.error('The HTTP/3 connection to ${url} closed due to ${error}.');
    });

    // Once .ready fulfills, the connection can be used.
    await transport.ready;

### Datagram APIs <a href="#datagram" class="w-headline-link">#</a>

Once you have a WebTransport instance that's connected to a server, you can use it to send and receive discrete bits of data, known as [datagrams](https://en.wikipedia.org/wiki/Datagram).

The `writeable` getter returns a `WritableStream`, which a web client can use to send data to the server. The `readable` getter returns a `ReadableStream`, allowing you to listen for data from the server. Both streams are inherently unreliable, so it is possible that the data you write will not be received by the server, and vice versa.

Both types of streams use `Uint8Array` instances for data transfer.

    // Send two datagrams to the server.
    const writer = transport.datagrams.writable.getWriter();
    const data1 = new Uint8Array([65, 66, 67]);
    const data2 = new Uint8Array([68, 69, 70]);
    writer.write(data1);
    writer.write(data2);

    // Read datagrams from the server.
    const reader = transport.datagrams.readable.getReader();
    while (true) {
      const {value, done} = await reader.read();
      if (done) {
        break;
      }
      // value is a Uint8Array.
      console.log(value);
    }

Chrome does not [currently](https://bugs.chromium.org/p/chromium/issues/detail?id=929585) expose an [async iterator](https://github.com/whatwg/streams/issues/778) for a `ReadableStream`. For the time being, using the `getReader()` method combined with a `while()` loop is the best way to read from the stream.

### Streams APIs <a href="#stream" class="w-headline-link">#</a>

Once you've connected to the server, you could also use WebTransport to send and receive data via its Streams APIs.

Each chunk of all streams is a `Uint8Array`. Unlike with the Datagram APIs, these streams are reliable. But each stream is independent, so data order across streams is not guaranteed.

#### SendStream <a href="#sendstream" class="w-headline-link">#</a>

A `SendStream` is created by the web client using the `createSendStream()` method of a `WebTransport` instance, which returns a promise for the `SendStream`.

Use the `close()` method of the `WritableStreamDefaultWriter` to close the associated HTTP/3 connection. The browser tries to send all pending data before actually closing the associated connection.

    // Send two Uint8Arrays to the server.
    const stream = await transport.createSendStream();
    const writer = stream.writable.getWriter();
    const data1 = new Uint8Array([65, 66, 67]);
    const data2 = new Uint8Array([68, 69, 70]);
    writer.write(data1);
    writer.write(data2);
    try {
      await writer.close();
      console.log('All data has been sent.');
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }

Similarly, use the `abort()` method of the `WritableStreamDefaultWriter` to send a [QUIC RESET_STREAM](https://tools.ietf.org/html/draft-ietf-quic-transport-27#section-19.4) to the server. When using `abort()`, the browser may discard any pending data that hasn't yet been sent.

    const ws = await transport.createSendStream();
    const writer = ws.getWriter();
    writer.write(...);
    writer.write(...);
    await writer.abort();
    // Not all the data may have been written.

#### ReceiveStream <a href="#receivestream" class="w-headline-link">#</a>

A `ReceiveStream` is initiated by the server. Obtaining a `ReceiveStream` is a two-step process for a web client. First, it calls the `receiveStreams()` method of a `WebTransport` instance, which returns a `ReadableStream`. Each chunk of that `ReadableStream`, is, in turn, a `ReceiveStream` that can be used to read `Uint8Array` instances sent by the server.

    async function readFrom(receiveStream) {
      const reader = receiveStream.readable.getReader();
      while (true) {
        const {done, value} = await reader.read();
        if (done) {
          break;
        }
        // value is a Uint8Array
        console.log(value);
      }
    }

    const rs = transport.receiveStreams();
    const reader = rs.getReader();
    while (true) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      // value is an instance of ReceiveStream
      await readFrom(value);
    }

You can detect stream closure using the `closed` promise of the `ReadableStreamDefaultReader`. When the underlying HTTP/3 connection is [closed with the FIN bit](https://tools.ietf.org/html/draft-ietf-quic-transport-27#section-19.8), the `closed` promise is fulfilled after all the data is read. When the HTTP/3 connection is closed abruptly (for example, by `STREAM_RESET`), then the `closed` promise rejects.

    // Assume an active receiveStream
    const reader = receiveStream.readable.getReader();
    reader.closed.then(() => {
      console.log('The receiveStream closed gracefully.');
    }).catch(() => {
      console.error('The receiveStream closed abruptly.');
    });

#### BidirectionalStream <a href="#bidirectionalstream" class="w-headline-link">#</a>

A `BidirectionalStream` might be created either by the server or the client.

Web clients can create one using the `createBidirectionalStream()` method of a `WebTransport` instance, which returns a promise for a `BidirectionalStream`.

    const stream = await transport.createBidirectionalStream();
    // stream is a BidirectionalStream
    // stream.readable is a ReadableStream
    // stream.writable is a WritableStream

You can listen for a `BidirectionalStream` created by the server with the `receiveBidirectionalStreams()` method of a `WebTransport` instance, which returns a `ReadableStream`. Each chunk of that `ReadableStream`, is, in turn, a `BidirectionalStream`.

    const rs = transport.receiveBidrectionalStreams();
    const reader = rs.getReader();
    while (true) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      // value is a BidirectionalStream
      // value.readable is a ReadableStream
      // value.writable is a WritableStream
    }

A `BidirectionalStream` is just a combination of a `SendStream` and `ReceiveStream`. The examples from the previous two sections explain how to use each of them.

### More examples <a href="#more-examples" class="w-headline-link">#</a>

The [WebTransport draft specification](https://wicg.github.io/web-transport/) includes a number of additional inline examples, along with full documentation for all of the methods and properties.

## Enabling support during the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/793759434324049921) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### WebTransport in Chrome's DevTools <a href="#webtransport-in-chrome&#39;s-devtools" class="w-headline-link">#</a>

Unfortunately, [Chrome's DevTools](https://developers.google.com/web/tools/chrome-devtools) support for WebTransport is not ready for the start of the origin trial. You can "star" [this Chrome issue](https://bugs.chromium.org/p/chromium/issues/detail?id=1069742) to be notified about updates on the DevTools interface.

## Privacy and security considerations <a href="#privacy-and-security-considerations" class="w-headline-link">#</a>

See the [corresponding section](https://wicg.github.io/web-transport/#privacy-security) of the draft specification for authoritative guidance.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear your thoughts and experiences using this API throughout the origin trial process.

### Feedback about the API design <a href="#feedback-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that's awkward or doesn't work as expected? Or are there missing pieces that you need to implement your idea?

File an issue on the [Web Transport GitHub repo](https://github.com/WICG/web-transport/issues), or add your thoughts to an existing issue.

### Problem with the implementation? <a href="#problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation?

File a bug at <https://new.crbug.com>. Include as much detail as you can, along with simple instructions for reproducing.

### Planning to use the API? <a href="#planning-to-use-the-api" class="w-headline-link">#</a>

Your public support helps Chrome prioritize features, and shows other browser vendors how critical it is to support them.

- Be sure you have signed up for the [origin trial](https://developer.chrome.com/origintrials/#/view_trial/793759434324049921) to show your interest and provide your domain and contact info.
- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#WebTransport`](https://twitter.com/search?q=%23WebTransport&src=typed_query&f=live) and details on where and how you're using it.

### General discussion <a href="#general-discussion" class="w-headline-link">#</a>

You can use the [web-transport-dev Google Group](https://groups.google.com/a/chromium.org/g/web-transport-dev) for general questions or problems that don't fit into one of the other categories.

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article incorporates information from the [WebTransport Explainer](https://github.com/wicg/web-transport/blob/master/explainer.md), [draft specification](https://wicg.github.io/web-transport/), and [related design docs](https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJvIQFX6UCXeCbOtX_wMgwD_es/edit#). Thank you to the respective authors for providing that foundation.

_The hero image on this post is by [Robin Pierre](https://unsplash.com/photos/dPgPoiUIiXk) on Unsplash._

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/network/" class="w-chip">Network</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/webtransport/index.md)

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
