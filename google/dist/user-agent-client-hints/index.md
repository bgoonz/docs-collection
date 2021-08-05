<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format" alt="A variety of different footprints in the snow. A hint at who&#39;s been there." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/xlg4t3uiTp0L5TBThFHQ.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#improving-user-privacy-and-developer-experience-with-user-agent-client-hints" class="w-toc__header--link">Improving user privacy and developer experience with User-Agent Client Hints</a>

- [Background](#background)
- [The state of the User-Agent string](#the-state-of-the-user-agent-string)
- [Introducing the new User-Agent Client Hints](#introducing-the-new-user-agent-client-hints)
- [User-Agent Client Hints from Chromium 84](#user-agent-client-hints-from-chromium-84)
- [User-Agent response and request headers](#user-agent-response-and-request-headers)
- [Example exchange](#example-exchange)
- [JavaScript API](#javascript-api)
- [Demo](#demo)
- [Hint life-time and resetting](#hint-life-time-and-resetting)
- [Hint scope and cross-origin requests](#hint-scope-and-cross-origin-requests)
- [Where to use User-Agent Client Hints?](#where-to-use-user-agent-client-hints)
- [What happens to the User-Agent string?](#what-happens-to-the-user-agent-string)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Improving user privacy and developer experience with User-Agent Client Hints

User-Agent Client Hints are a new expansion to the Client Hints API, that enables developers to access information about a user's browser in a privacy-preserving and ergonomic way.

Jun 25, 2020 <span class="w-author__separator">•</span> Updated Feb 12, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rowan Merewood" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rowan_m/)

<a href="/authors/rowan_m/" class="w-author__name-link">Rowan Merewood</a>

- <a href="https://twitter.com/rowan_m" class="w-author__link">Twitter</a>
- <a href="https://github.com/rowan-m" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rowan-m" class="w-author__link">Glitch</a>

[<img src="https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yoav Weiss" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/yoavweiss/)

<a href="/authors/yoavweiss/" class="w-author__name-link">Yoav Weiss</a>

- <a href="https://twitter.com/yoavweiss" class="w-author__link">Twitter</a>
- <a href="https://github.com/yoavweiss" class="w-author__link">GitHub</a>

Client Hints enable developers to actively request information about the user's device or conditions, rather than needing to parse it out of the User-Agent (UA) string. Providing this alternative route is the first step to eventually reducing User-Agent string granularity.

Learn how to update your existing functionality that relies on parsing the User-Agent string to make use of User-Agent Client Hints instead.

If you are already using User-Agent Client Hints, pay attention to the upcoming changes. The header format is changing so the `Accept-CH` tokens exactly match the returned headers. Previously a site could have sent `Accept-CH: UA-Platform` to receive the `Sec-CH-UA-Platform` header and now that site should send `Accept-CH: Sec-CH-UA-Platform`. If you've already implemented User-Agent Client Hints, send both formats until the change has fully rolled out in stable Chromium. See [Intent to Remove: Rename User-Agent Client Hint ACCEPT-CH tokens](https://groups.google.com/a/chromium.org/g/blink-dev/c/t-S9nnos9qU/m/pUFJb00jBAAJ) for updates.

## Background <a href="#background" class="w-headline-link">#</a>

When web browsers make requests they include information about the browser and its environment so that servers can enable analytics and customize the response. This was defined all the way back in 1996 (RFC 1945 for HTTP/1.0), where you can find the [original definition for the User-Agent string](https://tools.ietf.org/html/rfc1945#section-10.15), which includes an example:

    User-Agent: CERN-LineMode/2.15 libwww/2.17b3

This header was intended to specify, in order of significance, the product (e.g. browser or library) and a comment (e.g. version).

### The state of the User-Agent string <a href="#the-state-of-the-user-agent-string" class="w-headline-link">#</a>

Over the intervening _decades_, this string has accrued a variety of additional details about the client making the request (as well as cruft, due to backwards compatibility). We can see that when looking at Chrome's current User-Agent string:

    Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4076.0 Mobile Safari/537.36

The above string contains information about the user's operating system and version, the device model, the browser's brand and full version, enough clues to infer it's a mobile browser, and not to mention a number of references to other browsers for historical reasons.

The combination of these parameters with the sheer diversity of possible values means the User-Agent string could contain enough information to allow individual users to be uniquely identified. If you test your own browser at [AmIUnique](https://amiunique.org/), you can see just how closely **your** User-Agent string identifies **you**. The lower your resulting "Similarity ratio" is, the more unique your requests are, the easier it is for servers to covertly track you.

The User-Agent string enables many legitimate [use cases](https://github.com/WICG/ua-client-hints/blob/main/README.md#use-cases), and serves an important purpose for developers and site owners. However, it is also critical that users' privacy is protected against covert tracking methods, and sending UA information by default goes against that goal.

There's also a need to improve web compatibility when it comes to the User-Agent string. It is unstructured, so parsing it results in unnecessary complexity, which is often the cause for bugs and site compatibility issues that hurt users. These issues also disproportionately hurt users of less common browsers, as sites may have failed to test against their configuration.

## Introducing the new User-Agent Client Hints <a href="#introducing-the-new-user-agent-client-hints" class="w-headline-link">#</a>

[User-Agent Client Hints](https://github.com/WICG/ua-client-hints#explainer-reducing-user-agent-granularity) enable access to the same information but in a more privacy-preserving way, in turn enabling browsers to eventually reduce the User-Agent string's default of broadcasting everything. [Client Hints](https://tools.ietf.org/html/draft-ietf-httpbis-client-hints) enforce a model where the server must ask the browser for a set of data about the client (the hints) and the browser applies its own policies or user configuration to determine what data is returned. This means that rather than exposing **all** the User-Agent information by default, access is now managed in an explicit and auditable fashion. Developers also benefit from a simpler API - no more regular expressions!

The current set of Client Hints primarily describes the browser's display and connection capabilities. You can explore the details in [Automating Resource Selection with Client Hints](https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints), but here's a quick refresher on the process.

The server asks for specific Client Hints via a header:

⬇️ _Response from server_

    Accept-CH: Viewport-Width, Width

Or a meta tag:

    <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />

The browser can then choose to send the following headers back in subsequent requests:

⬆️ _Subsequent request_

    Viewport-Width: 460
    Width: 230

The server can choose to vary its responses, for example by serving images at an appropriate resolution.

There are ongoing discussions on enabling Client Hints on an initial request, but you should consider [responsive design](/responsive-web-design-basics) or progressive enhancement before going down this route.

User-Agent Client Hints expand the range of properties with the `Sec-CH-UA` prefix that can be specified via the `Accept-CH` server response header. For all the details, start with [the explainer](https://github.com/WICG/ua-client-hints/blob/main/README.md) and then dive into the [full proposal](https://wicg.github.io/ua-client-hints/).

Client Hints are **only sent over secure connections**, so make sure you have [migrated your site to HTTPS](/why-https-matters).

The new set of hints is available from Chromium 84, so let's explore how it all works.

## User-Agent Client Hints from Chromium 84 <a href="#user-agent-client-hints-from-chromium-84" class="w-headline-link">#</a>

User-Agent Client Hints will only be enabled gradually on Chrome Stable as [compatibility concerns](https://bugs.chromium.org/p/chromium/issues/detail?id=1091285) are resolved. To force the functionality on for testing:

- Use Chrome 84 **beta** or equivalent.
- Enable the `about://flags/#enable-experimental-web-platform-features` flag.

By default, the browser returns the browser brand, significant / major version, and an indicator if the client is a mobile device:

⬆️ _All requests_

    Sec-CH-UA: "Chromium";v="84", "Google Chrome";v="84"
    Sec-CH-UA-Mobile: ?0

**Caution**: These properties are more complex than just a single value, so [Structured Headers](https://httpwg.org/http-extensions/draft-ietf-httpbis-header-structure.html) are used for representing lists and booleans.

### User-Agent response and request headers <a href="#user-agent-response-and-request-headers" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>⬇️ Response <code>Accept-CH</code><br />
⬆️ Request header</th><th>⬆️ Request<br />
Example value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>Sec-CH-UA</code></td><td><code>"Chromium";v="84",</code><br />
<code>"Google Chrome";v="84"</code></td><td>List of browser brands and their significant version.</td></tr><tr class="even"><td><code>Sec-CH-UA-Mobile</code></td><td><code>?1</code></td><td>Boolean indicating if the browser is on a mobile device (<code>?1</code> for true) or not (<code>?0</code> for false).</td></tr><tr class="odd"><td><code>Sec-CH-UA-Full-Version</code></td><td><code>"84.0.4143.2"</code></td><td>The complete version for the browser.</td></tr><tr class="even"><td><code>Sec-CH-UA-Platform</code></td><td><code>"Android"</code></td><td>The platform for the device, usually the operating system (OS).</td></tr><tr class="odd"><td><code>Sec-CH-UA-Platform-Version</code></td><td><code>"10"</code></td><td>The version for the platform or OS.</td></tr><tr class="even"><td><code>Sec-CH-UA-Arch</code></td><td><code>"arm"</code></td><td>The underlying architecture for the device. While this may not be relevant to displaying the page, the site may want to offer a download which defaults to the right format.</td></tr><tr class="odd"><td><code>Sec-CH-UA-Model</code></td><td><code>"Pixel 3"</code></td><td>The device model.</td></tr></tbody></table>

**Gotchas!**

Privacy and compatibility considerations mean the value may be blank, not returned, or populated with a varying value. This is referred to as [GREASE](https://wicg.github.io/ua-client-hints/#grease).

### Example exchange <a href="#example-exchange" class="w-headline-link">#</a>

An example exchange would look like this:

⬆️ _Initial request from browser_  
The browser is requesting the `/downloads` page from the site and sends its default basic User-Agent.

    GET /downloads HTTP/1.1
    Host: example.site

    Sec-CH-UA: "Chromium";v="84", "Google Chrome";v="84"
    Sec-CH-UA-Mobile: ?0

⬇️ _Response from server_  
The server sends the page back and additionally asks for the full browser version and the platform.

    HTTP/1.1 200 OK
    Accept-CH: Sec-CH-UA-Full-Version, Sec-CH-UA-Platform

⬆️ _Subsequent requests_  
The browser grants the server access to the additional information and sends the extra hints back in all subsequent responses.

    GET /downloads/app1 HTTP/1.1
    Host: example.site

    Sec-CH-UA: "Chromium";v="84", "Google Chrome";v="84"
    Sec-CH-UA-Mobile: ?0
    Sec-CH-UA-Full-Version: "84.0.4143.2"
    Sec-CH-UA-Platform: "Android"

### JavaScript API <a href="#javascript-api" class="w-headline-link">#</a>

Alongside the headers, the User-Agent can also be accessed in JavaScript via `navigator.userAgentData`. The default `Sec-CH-UA` and `Sec-CH-UA-Mobile` header information can be accessed via the `brands` and `mobile` properties, respectively:

    // Log the brand data
    console.log(navigator.userAgentData.brands);

    // output
    [
      {
        brand: 'Chromium',
        version: '84',
      },
      {
        brand: 'Google Chrome',
        version: '84',
      },
    ];

    // Log the mobile indicator
    console.log(navigator.userAgentData.mobile);

    // output
    false;

The additional values are accessed via the `getHighEntropyValues()` call. The "high entropy" term is a reference to [information entropy](<https://en.wikipedia.org/wiki/Entropy_(information_theory)>), in other words - the amount of information that these values reveal about the user's browser. As with requesting the additional headers, it's down to the browser what values, if any, are returned.

    // Log the full user-agent data
    navigator
      .userAgentData.getHighEntropyValues(
        ["architecture", "model", "platform", "platformVersion",
         "uaFullVersion"])
      .then(ua => { console.log(ua) });

    // output
    {
      "architecture": "x86",
      "model": "",
      "platform": "Linux",
      "platformVersion": "",
      "uaFullVersion": "84.0.4143.2"
    }

### Demo <a href="#demo" class="w-headline-link">#</a>

You can try out both the headers and the JavaScript API on your own device at [user-agent-client-hints.glitch.me](https://user-agent-client-hints.glitch.me).

Ensure you're using Chrome 84 Beta or equivalent with `about://flags/#enable-experimental-web-platform-features` enabled.

### Hint life-time and resetting <a href="#hint-life-time-and-resetting" class="w-headline-link">#</a>

Hints specified via the `Accept-CH` header will be sent for the duration of the browser session or until a different set of hints are specified.

That means if the server sends:

⬇️ _Response_

    Accept-CH: Sec-CH-UA-Full-Version

Then the browser will send the `Sec-CH-UA-Full-Version` header on all requests for that site until the browser is closed.

⬆️ _Subsequent requests_

    Sec-CH-UA-Full-Version: "84.0.4143.2"

However, if another `Accept-CH` header is received then that will **completely replace** the current hints the browser is sending.

⬇️ _Response_

    Accept-CH: Sec-CH-UA-Platform

⬆️ _Subsequent requests_

    Sec-CH-UA-Platform: "Android"

The previously asked-for `Sec-CH-UA-Full-Version` **will not be sent**.

It's best to think of the `Accept-CH` header as specifying the complete set of hints desired for that page, meaning the browser then sends the specified hints for all the subresources on that page. While hints will persist to the next navigation, the site should not rely or assume they will be delivered.

**Success**: Always ensure you can still deliver a meaningful experience without this information. This is to enhance the user experience, not define it. That's why they're called "hints" and not "answers" or "requirements"!

You can also use this to effectively clear all hints being sent by the browser by sending a blank `Accept-CH` in the response. Consider adding this anywhere that the user is resetting preferences or signing out of your site.

This pattern also matches how hints work via the `<meta http-equiv="Accept-CH" …>` tag. The requested hints will only be sent on requests initiated by the page and not on any subsequent navigation.

### Hint scope and cross-origin requests <a href="#hint-scope-and-cross-origin-requests" class="w-headline-link">#</a>

By default, Client Hints will only be sent on same-origin requests. That means if you ask for specific hints on `https://example.com`, but the resources you want to optimize are on `https://downloads.example.com` they **will not** receive any hints.

To allow hints on cross-origin requests each hint and origin must be specified by a `Feature-Policy` header. To apply this to a User-Agent Client Hint, you need to lowercase the hint and remove the `sec-` prefix. For example:

⬇️ _Response from `example.com`_

    Accept-CH: Sec-CH-UA-Platform, DPR
    Feature-Policy: ch-ua-platform downloads.example.com;
                    ch-dpr cdn.provider img.example.com

⬆️ _Request to `downloads.example.com`_

    Sec-CH-UA-Platform: "Android"

⬆️ _Requests to `cdn.provider` or `img.example.com`_

    DPR: 2

## Where to use User-Agent Client Hints? <a href="#where-to-use-user-agent-client-hints" class="w-headline-link">#</a>

The quick answer is that you should refactor any instances where you are parsing either the User-Agent header or making use of any of the JavaScript calls that access the same information (i.e. `navigator.userAgent`, `navigator.appVersion`, or `navigator.platform`) to make use of User-Agent Client Hints instead.

Taking this a step further, you should re-examine your use of User-Agent information, and replace it with other methods whenever possible. Often, you can accomplish the same goal by making use of progressive enhancement, feature detection, or [responsive design](/responsive-web-design-basics). The base problem with relying on the User-Agent data is that you are always maintaining a mapping between the property you're inspecting and the behavior it enables. It's a maintenance overhead to ensure that your detection is comprehensive and remains up-to-date.

With these caveats in mind, the [User-Agent Client Hints repo lists some valid use cases](https://github.com/WICG/ua-client-hints#use-cases) for sites.

## What happens to the User-Agent string? <a href="#what-happens-to-the-user-agent-string" class="w-headline-link">#</a>

The plan is to minimize the ability for covert tracking on the web by reducing the amount of identifying information exposed by the existing User-Agent string while not causing undue disruption on existing sites. Introducing User-Agent Client Hints now gives you a chance to understand and experiment with the new capability, before any changes are made to User-Agent strings.

[Eventually](https://groups.google.com/a/chromium.org/d/msg/blink-dev/-2JIRNMWJ7s/u-YzXjZ8BAAJ), the information in the User-Agent string will be reduced so it maintains the legacy format while only providing the same high-level browser and significant version information as per the default hints. In Chromium, this change has been deferred until at least 2021 to provide additional time for the ecosystem to evaluate the new User Agent Client Hints capabilities.

You can test a version of this by enabling the `about://flags/#reduce-user-agent` flag from Chrome 93 (Note: this flag was named `about://flags/#freeze-user-agent` in versions Chrome 84 - 92). This will return a string with the historical entries for compatibility reasons, but with sanitized specifics. For example, something like:

    Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36

_Photo by [Sergey Zolkin](https://unsplash.com/@szolkin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/m9qMoh-scfE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

<a href="/tags/privacy/" class="w-chip">Privacy</a> <a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Feb 12, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/user-agent-client-hints/index.md)

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
