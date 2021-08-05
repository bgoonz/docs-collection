<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format" alt="A brightly lit route through a cold, dark landscape. Follow that path!" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/VWw0b3pM7jdugTkwI6Y81n6f5Yc2/uHTVU6MzCWYVPzLposSy.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#migrate-to-user-agent-client-hints" class="w-toc__header--link">Migrate to User-Agent Client Hints</a>

- [Audit collection and use of user-agent data](#audit-collection-and-use-of-user-agent-data)
- [Are you only using basic user-agent data?](#are-you-only-using-basic-user-agent-data)
- [Strategy: On-demand client-side JavaScript API](#strategy:-on-demand-client-side-javascript-api)
- [Strategy: Static server-side header](#strategy:-static-server-side-header)
- [Strategy: Delegating hints to cross-origin requests](#strategy:-delegating-hints-to-cross-origin-requests)
- [Strategy: Delegating hints to iframes](#strategy:-delegating-hints-to-iframes)
- [Strategy: Dynamic server-side hints](#strategy:-dynamic-server-side-hints)
- [Strategy: Server-side hints required on first request](#strategy:-server-side-hints-required-on-first-request)
- [Strategy: Legacy support](#strategy:-legacy-support)
- [Further support](#further-support)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Migrate to User-Agent Client Hints

Strategies to migrate your site from relying on the user-agent string to the new User-Agent Client Hints.

May 19, 2021

[<img src="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rowan Merewood" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rowan_m/)

<a href="/authors/rowan_m/" class="w-author__name-link">Rowan Merewood</a>

- <a href="https://twitter.com/rowan_m" class="w-author__link">Twitter</a>
- <a href="https://github.com/rowan-m" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rowan-m" class="w-author__link">Glitch</a>

The [User-Agent string](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) is a significant [passive fingerprinting surface](https://w3c.github.io/fingerprinting-guidance/#passive) in browsers, as well as being difficult to process. However, there are all kinds of valid reasons for collecting and processing user-agent data, so what's needed is a path to a better solution. User-Agent Client Hints provide both an explicit way to declare your need for user-agent data and methods to return the data in an easy-to-use format.

For more information on Client Hints and expanding them with user-agent data, read the [introductory article on User-Agent Client Hints](/user-agent-client-hints).

This article will take you through auditing your access to user-agent data and migrating user-agent string usage to User-Agent Client Hints.

## Audit collection and use of user-agent data <a href="#audit-collection-and-use-of-user-agent-data" class="w-headline-link">#</a>

As with any form of data collection, you should always understand **why** you are collecting it. The first step, regardless of whether or not you will be taking any action, is to understand where and why you are using user-agent data.

If you don't know if or where user-agent data is being used, consider searching your front-end code for use of `navigator.userAgent` and your back-end code for use of the `User-Agent` HTTP header. You should also check your front-end code for use of already deprecated features, such as `navigator.platform` and `navigator.appVersion`.

From a functional point of view, think about anywhere in your code where you are recording or processing:

- Browser name or version
- Operating system name or version
- Device make or model
- CPU type, architecture, or bitness (for example, 64-bit)

It's also likely that you may be using a third-party library or service to process the user-agent. In this case, check to see if they are updating to support User-Agent Client Hints.

### Are you only using basic user-agent data? <a href="#are-you-only-using-basic-user-agent-data" class="w-headline-link">#</a>

The default set of User-Agent Client Hints includes:

- `Sec-CH-UA`: browser name and major/significant version
- `Sec-CH-UA-Mobile`: boolean value indicating a mobile device
- `Sec-CH-UA-Platform`: operating system name
  - _Note that this has been updated in the spec and will be [reflected in Chrome](https://groups.google.com/a/chromium.org/g/blink-dev/c/dafizBGwWMw/m/72l-1zm6AAAJ) and other Chromium-based browsers shortly._

The reduced version of the user-agent string that is proposed will also retain this basic information in a backwards-compatible way. For example, instead of `Chrome/90.0.4430.85` the string would include `Chrome/90.0.0.0`.

If you are only checking the user-agent string for browser name, major version, or operating system, then your code will continue to work though you are likely to see deprecation warnings.

While you can and should migrate to User-Agent Client Hints, you may have legacy code or resource constraints that prevent this. The reduction of information in the user-agent string in this backwards-compatible way is intended to ensure that while existing code will receive less detailed information, it should still retain basic functionality.

## Strategy: On-demand client-side JavaScript API <a href="#strategy:-on-demand-client-side-javascript-api" class="w-headline-link">#</a>

If you are currently using `navigator.userAgent` you should transition to preferring `navigator.userAgentData` before falling back to parsing the user-agent string.

    if (navigator.userAgentData) {
      // use new hints
    } else {
      // fall back to user-agent string parsing
    }

If you are checking for mobile or desktop, use the boolean `mobile` value:

    const isMobile = navigator.userAgentData.mobile;

`userAgentData.brands` is an array of objects with `brand` and `version` properties where the browser is able to list its compatibility with those brands. You can access it directly as an array or you may want to use a `some()` call to check if a specific entry is present:

    function isCompatible(item) {
      // In real life you most likely have more complex rules here
      return ['Chromium', 'Google Chrome', 'NewBrowser'].includes(item.brand);
    }
    if (navigator.userAgentData.brands.some(isCompatible)) {
      // browser reports as compatible
    }

**Gotchas!**

`userAgentData.brands` will contain varying values in a varying order, so don't rely on something appearing at a certain index.

If you need one of the more detailed, high-entropy user-agent values, you will need to specify it and check for the result in the returned `Promise`:

    navigator.userAgentData.getHighEntropyValues(['model'])
      .then(ua => {
        // requested hints available as attributes
        const model = ua.model
      });

You may also want to use this strategy if you would like to move from server-side processing to client-side processing. The JavaScript API does not require access to HTTP request headers, so user-agent values can be requested at any point.

Try the [User-Agent Client Hints JavaScript API demo](https://user-agent-client-hints.glitch.me/javascript.html).

## Strategy: Static server-side header <a href="#strategy:-static-server-side-header" class="w-headline-link">#</a>

If you are using the `User-Agent` request header on the server and your needs for that data are relatively consistent across your entire site, then you can specify the desired client hints as a static set in your responses. This is a relatively simple approach since you generally only need to configure it in one location. For example, it may be in your web server configuration if you already add headers there, your hosting configuration, or top-level configuration of the framework or platform you use for your site.

Consider this strategy if you are transforming or customizing the responses served based on the user-agent data.

You can also consider migrating to the [On-demand client-side JavaScript API](#strategy:-on-demand-client-side-javascript-api) strategy instead of sending additional headers.

Browsers or other clients may choose to supply different default hints, so it's good practice to specify everything you need, even if it's generally provided by default.

For example, the current defaults for Chrome would be represented as:

⬇️ Response headers

    Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA

If you also wanted to receive the device model in responses, then you would send:

⬇️ Response headers

    Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA

**Gotchas!**

Ordering is not important, the example is listed alphabetically.

When processing this on the server-side you should first check if the desired `Sec-CH-UA` header has been sent and then fallback to the `User-Agent` header parsing if it is not available.

Try the [User-Agent Client Hints HTTP header demo](https://user-agent-client-hints.glitch.me/).

## Strategy: Delegating hints to cross-origin requests <a href="#strategy:-delegating-hints-to-cross-origin-requests" class="w-headline-link">#</a>

If you are requesting cross-origin or cross-site subresources that require User-Agent Client Hints to be sent on their requests then you will need to explicitly specify the desired hints using a Permissions Policy.

[Permissions Policy](https://www.w3.org/TR/permissions-policy-1/) is the new form of Feature Policy

For example, let's say that `https://blog.site` hosts resources on `https://cdn.site` which can return resources optimized for a specific device. `https://blog.site` can ask for the `Sec-CH-UA-Model` hint, but needs to explicitly delegate it to `https://cdn.site` using the `Permissions-Policy` header. The list of policy-controlled hints is available in the [Clients Hints Infrastructure draft](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-client-hints-features)

⬇️ Response from `blog.site` delegating the hint

    Accept-CH: Sec-CH-UA-Model
    Permissions-Policy: ch-ua-model=(self "https://cdn.site")

⬆️ Request to subresources on `cdn.site` include the delegated hint

    Sec-CH-UA-Model: "Pixel 5"

You can specify multiple hints for multiple origins, and not just from the `ch-ua` range:

⬇️ Response from `blog.site` delegating multiple hints to multiple origins

    Accept-CH: Sec-CH-UA-Model, DPR
    Permissions-Policy: ch-ua-model=(self "https://cdn.site"),
                        ch-dpr=(self "https://cdn.site" "https://img.site")

**Gotchas!**

You do **not** need to include each delegated hint in `Accept-CH`, but you **do** need to include `self` for each hint, even if you are not using it directly at the top-level.

## Strategy: Delegating hints to iframes <a href="#strategy:-delegating-hints-to-iframes" class="w-headline-link">#</a>

Cross-origin iframes work in a similar way to cross-origin resources, but you specify the hints you would like to delegate in the `allow` attribute.

⬇️ Response from `blog.site`

    Accept-CH: Sec-CH-UA-Model

↪️ HTML for `blog.site`

    <iframe src="https://widget.site" allow="ch-ua-model"></iframe>

⬆️ Request to `widget.site`

    Sec-CH-UA-Model: "Pixel 5"

The `allow` attribute in the iframe will override any `Accept-CH` header that `widget.site` may send itself, so make sure you've specified everything the iframe'd site will need.

## Strategy: Dynamic server-side hints <a href="#strategy:-dynamic-server-side-hints" class="w-headline-link">#</a>

If you have specific parts of the user journey where you need a larger selection of hints than across the rest of the site, you may choose to request those hints on demand rather than statically across the entire site. This is more complex to manage, but if you already set different headers on a per route basis it may be feasible.

The important thing to remember here is that each instance of the `Accept-CH` header will effectively overwrite the existing set. So, if you are dynamically setting the header then each page must request the full set of hints required.

For example, you may have one section on your site where you want to provide icons and controls that match the user's operating system. For this, you may want to additionally pull in `Sec-CH-UA-Platform-Version` to serve appropriate subresources.

⬇️ Response headers for `/blog`

    Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA

⬇️ Response headers for `/app`

    Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA

## Strategy: Server-side hints required on first request <a href="#strategy:-server-side-hints-required-on-first-request" class="w-headline-link">#</a>

There may be cases where you require more than the default set of hints on the very first request, however this is likely to be rare so make sure you've reviewed the reasoning.

The first request really means the very first top-level request for that origin sent in that browsing session. The default set of hints includes the browser name with major version, the platform, and the mobile indicator. So the question to ask here is, do you require extended data on the initial page load?

Also consider making use of the [On-demand client-side JavaScript API strategy](#strategy:-on-demand-client-side-javascript-api) to alter content within the page as opposed to server-side.

For additional hints on the first request there are two options. First, you can make use of the `Critical-CH` header. This takes the same format as `Accept-CH` but tells the browser that it should immediately retry the request if the first one was sent without the critical hint.

⬆️ Initial request

    [With default headers]

⬇️ Response headers

    Accept-CH: Sec-CH-UA-Model
    Critical-CH: Sec-CH-UA-Model

🔃 Browser retries initial request with the extra header

    [With default headers + …]
    Sec-CH-UA-Model: Pixel 5

This will incur the overhead of the retry on the very first request, but the implementation cost is relatively low. Send the extra header and the browser will do the rest.

**Gotchas!**

Any `Critical-CH` values must be a subset of the values in `Accept-CH`. `Accept-CH` is all the values you would like for the page, `Critical-CH` is the subset of those values you **must** have or you cannot load the page properly.

For situations where you require really do require additional hints on the very first page load, the [Client Hints Reliability proposal](https://github.com/WICG/client-hints-infrastructure/blob/main/reliability.md#connection-level-settings) is laying out a route to specify hints in the connection-level settings. This makes use of the [Application-Layer Protocol Settings(ALPS)](https://tools.ietf.org/html/draft-vvv-tls-alps) extension to TLS 1.3 to enable this early passing of hints on HTTP/2 and HTTP/3 connections. This is still at a very early stage, but if you actively manage your own TLS and connection settings then this is an ideal time to contribute.

## Strategy: Legacy support <a href="#strategy:-legacy-support" class="w-headline-link">#</a>

You may have legacy or third-party code on your site that depends on `navigator.userAgent`, including portions of the user-agent string that will be reduced. Long-term you should plan to move to the equivalent `navigator.userAgentData` calls, but there is an interim solution.

**Warning**: This is not recommended and not supported in any way. This solution is included for completeness but if you spend any time attempting to fix bugs in it, that time would be better spent doing the actual migration.

[UA-CH retrofill](https://github.com/GoogleChromeLabs/uach-retrofill) is a small library that allows you to overwrite `navigator.userAgent` with a new string built from the requested `navigator.userAgentData` values.

For example, this code will generate a user-agent string that additionally includes the "model" hint:

    import { overrideUserAgentUsingClientHints } from './uach-retrofill.js';
    overrideUserAgentUsingClientHints(['model'])
      .then(() => { console.log(navigator.userAgent); });

The resulting string would show the `Pixel 5` model, but still shows the reduced `92.0.0.0` as the `uaFullVersion` hint was not requested:

    Mozilla/5.0 (Linux; Android 10.0; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.0.0 Mobile Safari/537.36

## Further support <a href="#further-support" class="w-headline-link">#</a>

If these strategies do not cover your use case, please start a [Discussion in privacy-sandbox-dev-support repo](https://github.com/GoogleChromeLabs/privacy-sandbox-dev-support/discussions) and we can explore your issue together.

_Photo by [Ricardo Rocha](https://unsplash.com/@rcrazy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/nj1bqRzClq8)_

<a href="/tags/privacy/" class="w-chip">Privacy</a>

<span class="w-mr--sm"> Last updated: May 19, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/migrate-to-ua-ch/index.md)

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
