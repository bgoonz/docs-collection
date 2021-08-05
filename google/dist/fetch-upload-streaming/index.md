<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format" alt="A canoe pointed up stream." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/9U7u4C7WCGbrdHm3181W.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#streaming-requests-with-the-fetch-api" class="w-toc__header--link">Streaming requests with the fetch API</a>

- [Try out request streams](#try-out-request-streams)
- [Enabling via about://flags](#enable-flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Demo](#demo)
- [Previously on the exciting adventures of fetch streams](#previously-on-the-exciting-adventures-of-fetch-streams)
- [Streaming request bodies](#streaming-request-bodies)
- [Writable streams](#writable-streams)
- [Feature detection](#feature-detection)
- [Restrictions](#restrictions)
- [Restricted redirects](#restricted-redirects)
- [HTTP/2 only by default](#http2-only-by-default)
- [No duplex communication](#no-duplex-communication)
- [Potential issues](#potential-issues)
- [Incompatibility on the server side](#incompatibility-on-the-server-side)
- [Incompatibility outside of your control](#incompatibility-outside-of-your-control)
- [Feedback welcome](#feedback-welcome)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Streaming requests with the fetch API

Jul 22, 2020 <span class="w-author__separator">•</span> Updated Jul 22, 2020

[<img src="https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jake Archibald" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jakearchibald/)

<a href="/authors/jakearchibald/" class="w-author__name-link">Jake Archibald</a>

- <a href="https://twitter.com/jaffathecake" class="w-author__link">Twitter</a>
- <a href="https://jakearchibald.com/" class="w-author__link">Blog</a>

Chrome 85 has an experimental implementation of request streams, meaning you can start making a request before you have the whole body available.

You could use this to:

- Warm up the server. In other words, you could start the request once the user focuses a text input field, and get all of the headers out of the way, then wait until the user presses 'send' before sending the data they entered.
- Gradually send data generated on the client, such as audio, video, or input data.
- Recreate web sockets over HTTP.

But since this is a low-level web platform feature, don't be limited by _my_ ideas. Maybe you can think of a much more exciting use-case for request streaming.

## Try out request streams <a href="#try-out-request-streams" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enable-flags" class="w-headline-link">#</a>

Try out request streams in Chrome 85 by flipping an experimental flag: `enable-experimental-web-platform-features`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Fetch request streams are available in an origin trial as of Chrome 85. The origin trial is expected to end in Chrome 87.

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developers.chrome.com/origintrials/#/view_trial/-7680889164480380927) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

## Demo <a href="#demo" class="w-headline-link">#</a>

This shows how you can stream data from the user to the server, and send data back that can be processed in real time.

Yeah ok it isn't the most imaginative example, I just wanted to keep it simple, okay?

Anyway, how does this work?

## Previously on the exciting adventures of fetch streams <a href="#previously-on-the-exciting-adventures-of-fetch-streams" class="w-headline-link">#</a>

_Response_ streams have been available in all modern browsers for a while now. They allow you to access parts of a response as they arrive from the server:

    const response = await fetch(url);
    const reader = response.body.getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      console.log('Received', value);
    }

    console.log('Response fully received');

Each `value` is a `Uint8Array` of bytes. The number of arrays you get and the size of the arrays depends on the speed of the network. If you're on a fast connection, you'll get fewer, larger 'chunks' of data. If you're on a slow connection, you'll get more, smaller chunks.

If you want to convert the bytes into text, you can use [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode), or the newer transform stream if your [target browsers support it](https://caniuse.com/#feat=mdn-api_textdecoderstream):

    const response = await fetch(url);
    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

`TextDecoderStream` is a transform stream that grabs all those `Uint8Array` chunks and converts them to strings.

Streams are great, as you can start acting on the data as it arrives. For instance, if you're receiving a list of 100 'results', you can display the first result as soon as you receive it, rather than waiting for all 100.

Anyway, that's response streams, the exciting new thing I wanted to talk about is request streams.

## Streaming request bodies <a href="#streaming-request-bodies" class="w-headline-link">#</a>

Requests can have bodies:

    await fetch(url, {
      method: 'POST',
      body: requestBody,
    });

Previously, you needed the whole body ready to go before you could start the request, but now in Chrome 85 you can provide your own `ReadableStream` of data:

    function wait(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    const stream = new ReadableStream({
      async start(controller) {
        await wait(1000);
        controller.enqueue('This ');
        await wait(1000);
        controller.enqueue('is ');
        await wait(1000);
        controller.enqueue('a ');
        await wait(1000);
        controller.enqueue('slow ');
        await wait(1000);
        controller.enqueue('request.');
        controller.close();
      },
    }).pipeThrough(new TextEncoderStream());

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: stream,
    });

The above will send "This is a slow request" to the server, one word at a time, with a one second pause between each word.

Each chunk of a request body needs to be a `Uint8Array` of bytes, so I'm using `pipeThrough(new TextEncoderStream())` to do the conversion for me.

### Writable streams <a href="#writable-streams" class="w-headline-link">#</a>

Sometimes it's easier to work with streams when you have a `WritableStream`. You can do this using an 'identity' stream, which is a readable/writable pair that takes anything that's passed to its writable end, and sends it to the readable end. You can create one of these by creating a `TransformStream` without any arguments:

    const { readable, writable } = new TransformStream();

    const responsePromise = fetch(url, {
      method: 'POST',
      body: readable,
    });

Now, anything you send to the writable stream will be part of the request. This lets you compose streams together. For instance, here's a silly example where data is fetched from one URL, compressed, and sent to another URL:

    // Get from url1:
    const response = await fetch(url1);
    const { readable, writable } = new TransformStream();

    // Compress the data from url1:
    response.body
      .pipeThrough(new CompressionStream('gzip'))
      .pipeTo(writable);

    // Post to url2:
    await fetch(url2, {
      method: 'POST',
      body: readable,
    });

The above example uses [compression streams](https://chromestatus.com/feature/5855937971617792) to compress arbitrary data using gzip.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

    const supportsRequestStreamsP = (async () => {
      const supportsStreamsInRequestObjects = !new Request('', {
        body: new ReadableStream(),
        method: 'POST',
      }).headers.has('Content-Type');

      if (!supportsStreamsInRequestObjects) return false;

      return fetch('data:a/a;charset=utf-8,', {
        method: 'POST',
        body: new ReadableStream(),
      }).then(() => true, () => false);
    })();

    // Note: supportsRequestStreamsP is a promise.
    if (await supportsRequestStreamsP) {
      // …
    } else {
      // …
    }

If you're curious, here's how the feature detection works:

If the browser doesn't support a particular `body` type, it calls `toString()` on the object and uses the result as the body. So, if the browser doesn't support request streams, the request body becomes the string `"[object ReadableStream]"`. When a string is used as a body, it conveniently sets the `Content-Type` header to `text/plain;charset=UTF-8`. So, if that header is set, then we know the browser _doesn't_ support streams in request objects, and we can exit early.

Unfortunately, Safari _does_ support streams in request objects, but _doesn't_ allow them to be used with `fetch`.

To test that, we try `fetch` with a stream body. The test would be flakey and slow if it depended on the network, but thankfully a quirk in the spec allows for `POST` requests to be made to `data:` URLs. This is fast and works without a connection. Safari will reject this call because it doesn't support the stream body.

## Restrictions <a href="#restrictions" class="w-headline-link">#</a>

Streaming requests are a new power for the web, so they come with a few restrictions:

### Restricted redirects <a href="#restricted-redirects" class="w-headline-link">#</a>

Some forms of HTTP redirect require the browser to resend the body of the request to another URL. To support this, the browser would have to buffer the contents of the stream, which sort-of defeats the point, so it doesn't do that.

Instead, if the request has a streaming body, and the response is an HTTP redirect other than 303, the fetch will reject and the redirect will _not_ be followed.

303 redirects are allowed, since they explicitly change the method to `GET` and discard the request body.

### HTTP/2 only by default <a href="#http2-only-by-default" class="w-headline-link">#</a>

By default, the fetch will be rejected if the connection isn't HTTP/2. If you want to use streaming requests over HTTP/1.1, you need to opt in:

    await fetch(url, {
      method: 'POST',
      body: stream,
      allowHTTP1ForStreamingUpload: true,
    });

**Caution**: `allowHTTP1ForStreamingUpload` is non-standard and will only be used as part of Chrome's experimental implementation.

According to HTTP/1.1 rules, request and response bodies either need to send a `Content-Length` header, so the other side knows how much data it'll receive, or change the format of the message to use [chunked encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding). With chunked encoding, the body is split into parts, each with their own content length.

Chunked encoding is pretty common when it comes to HTTP/1.1 _responses_, but very rare when it comes to _requests_. Because of this, Chrome is a little worried about compatibility, so it's opt-in for now.

This isn't an issue for HTTP/2, as HTTP/2 data is always 'chunked', although it calls the chunks [frames](https://developers.google.com/web/fundamentals/performance/http2#streams_messages_and_frames). Chunked encoding wasn't introduced until HTTP/1.1, so requests with streaming bodies will always fail on HTTP/1 connections.

Depending on how this trial goes, the spec will either restrict streaming responses to HTTP/2, or always allow it for both HTTP/1.1 and HTTP/2.

### No duplex communication <a href="#no-duplex-communication" class="w-headline-link">#</a>

A little-known feature of HTTP (although, whether this is standard behaviour depends on who you ask) is that you can start receiving the response while you're still sending the request. However, it's so little-known, that it isn't well supported by servers, and, well, browsers.

In Chrome's current implementation, you won't get the response until the body has been fully sent. In the following example `responsePromise` won't resolve until the readable stream has been closed. Anything the server sends before that point will be buffered.

    const responsePromise = fetch(url, {
      method: 'POST',
      body: readableStream,
    });

The next best thing to duplex communication is to make one fetch with a streaming request, then make another fetch to receive the streaming response. The server will need some way to associate these two requests, like an ID in the URL. That's how the [demo](#demo) works.

## Potential issues <a href="#potential-issues" class="w-headline-link">#</a>

Yeah, so… this is a new feature, and one that's underused on the internet today. Here are some issues to look out for:

### Incompatibility on the server side <a href="#incompatibility-on-the-server-side" class="w-headline-link">#</a>

Some app servers don't support streaming requests, and instead wait for the full request to be received before letting you see any of it, which kinda defeats the point. Instead, use an app server that supports streaming, like [NodeJS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_class_http_incomingmessage).

But, you're not out of the woods yet! The application server, such as NodeJS, usually sits behind another server, often called a "front-end server", which may in turn sit behind a CDN. If any of those decide to buffer the request before giving it to the next server in the chain, you lose the benefit of request streaming.

Also, if you're using HTTP/1.1, one of the servers may not be prepared for chunked encoding, and may fail with an error. But hey, at least you can test that and try to change servers if needed.

_…long sigh…_

### Incompatibility outside of your control <a href="#incompatibility-outside-of-your-control" class="w-headline-link">#</a>

If you're using HTTPS you don't need to worry about proxies between you and the user, but the user may be running a proxy on their machine. Some internet protection software does this to allow it to monitor everything that goes between the browser and network.

There may be cases where this software buffers request bodies, or in the case of HTTP/1.1, doesn't expect chunked encoding, and breaks in some exciting way.

Right now, it's not clear how often this will happen, if at all.

If you want to protect against this, you can create a 'feature test' similar to the [demo above](#demo), where you try to stream some data without closing the stream. If the server receives the data, it can respond via a different fetch. Once this happens, you know the client supports streaming requests end-to-end.

## Feedback welcome <a href="#feedback-welcome" class="w-headline-link">#</a>

Feedback from the community is crucial to the design of new APIs, so please try it out and tell us what you think! If you encounter any bugs, please [report them](https://bugs.chromium.org/p/chromium/issues/list), but if you have general feedback, please send it to the [blink-network-dev Google Group](https://groups.google.com/a/chromium.org/forum/#!forum/blink-network-dev).

Photo by [Laura Lefurgey-Smith](https://unsplash.com/@lauralefurgeysmith?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/canoe-stream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

<a href="/tags/network/" class="w-chip">Network</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a>

<span class="w-mr--sm"> Last updated: Jul 22, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/fetch-upload-streaming/index.md)

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
