<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format" alt="Adam&#39;s Creation by Michelangelo on Sistine Chapel ceiling" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Dyccd1RLN0fzhjPXswmL.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#establish-network-connections-early-to-improve-perceived-page-speed" class="w-toc__header--link">Establish network connections early to improve perceived page speed</a>

- [Establish early connections with rel=preconnect](#establish-early-connections-with-relpreconnect)
- [Use-cases for rel=preconnect](#use-cases-for-relpreconnect)
- [Knowing where from, but not what you're fetching](#knowing-where-from-but-not-what-you're-fetching)
- [Streaming media](#streaming-media)
- [How to implement rel=preconnect](#how-to-implement-relpreconnect)
- [Resolve domain name early with rel=dns-prefetch](#resolve-domain-name-early-with-reldns-prefetch)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Establish network connections early to improve perceived page speed

Learn about rel=preconnect and rel=dns-prefetch resource hints and how to use them.

Jul 30, 2019

<span class="w-post-signpost__title">Appears in:</span> <a href="/fast" class="w-post-signpost__link">Fast load times</a>

[<img src="https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Milica Mihajlija" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mihajlija/)

<a href="/authors/mihajlija/" class="w-author__name-link">Milica Mihajlija</a>

- <a href="https://twitter.com/bibydigital" class="w-author__link">Twitter</a>
- <a href="https://github.com/mihajlija" class="w-author__link">GitHub</a>
- <a href="https://mihajlija.github.io/" class="w-author__link">Blog</a>

Before the browser can request a resource from a server, it must establish a connection. Establishing a secure connection involves three steps:

- Look up the domain name and resolve it to an IP address.

- Set up a connection to the server.

- Encrypt the connection for security.

In each of these steps the browser sends a piece of data to a server, and the server sends back a response. That journey, from origin to destination and back, is called a [round trip](<https://developer.mozilla.org/en-US/docs/Glossary/Round_Trip_Time_(RTT)>).

Depending on network conditions, a single round trip might take a significant amount of time. The connection setup process might involve up to three round trips—and more in unoptimized cases.

Taking care of all that ahead of time makes applications feel much faster. This post explains how to achieve that with two resource hints: `<link rel=preconnect>` and `<link rel=dns-prefetch>`.

## Establish early connections with `rel=preconnect` <a href="#establish-early-connections-with-relpreconnect" class="w-headline-link">#</a>

Modern browsers [try their best to anticipate](https://www.igvita.com/posa/high-performance-networking-in-google-chrome/#tcp-pre-connect) what connections a page will need, but they cannot reliably predict them all. The good news is that you can give them a (resource 😉) hint.

Adding `rel=preconnect` to a `<link>` informs the browser that your page intends to establish a connection to another domain, and that you'd like the process to start as soon as possible. Resources will load more quickly because the setup process has already been completed by the time the browser requests them.

Resource hints get their name because they are not mandatory instructions. They provide the information about what you'd like to happen, but it's ultimately up to the browser to decide whether to execute them. Setting up and keeping a connection open is a lot of work, so the browser might choose to ignore resource hints or execute them partially depending on the situation.

Informing the browser of your intention is as simple as adding a `<link>` tag to your page:

    <link rel="preconnect" href="https://example.com">

<img src="https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format" alt="A diagram showing how the download doesn&#39;t start for a while after the connection is established." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/988BgvmiVEAp2YVKt2jq.png?auto=format&amp;w=1600 1600w" width="800" height="539" />

You can speed up the load time by 100–500 ms by establishing early connections to important third-party origins. These numbers might seem small, but they make a difference in how [users perceive web page performance](https://developers.google.com/web/fundamentals/performance/rail#ux).

chrome.com [improved Time To Interactive](https://twitter.com/addyosmani/status/1090874825286000640) by almost 1 s by pre-connecting to important origins.

## Use-cases for `rel=preconnect` <a href="#use-cases-for-relpreconnect" class="w-headline-link">#</a>

### Knowing _where from_, but not _what_ you're fetching <a href="#knowing-where-from-but-not-what-you&#39;re-fetching" class="w-headline-link">#</a>

Due to versioned dependencies, you sometimes end up in a situation where you know you'll be requesting a resource from a particular CDN, but not the exact path for it.

<figure><img src="https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format" alt="An example of a versioned URL." sizes="(min-width: 450px) 450px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/PsP4qymb1gIp8Ip2sD9W.png?auto=format&amp;w=900 900w" width="450" height="50" /><figcaption>An example of a versioned URL.</figcaption></figure>The other common case is loading images from an [image CDN](/image-cdns), where the exact path for an image depends on media queries or runtime feature checks on the user's browser.

<figure><img src="https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format" alt="An example of an image CDN URL." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Xx4ai7tzSq12DJsQXaL1.png?auto=format&amp;w=1600 1600w" width="800" height="52" /><figcaption>An example of an image CDN URL.</figcaption></figure>In these situations, if the resource you'll be fetching is important, you want to save as much time as possible by pre-connecting to the server. The browser won't download the file until your page requests it, but at least it can handle the connection aspects ahead of time, saving the user from waiting for several round trips.

### Streaming media <a href="#streaming-media" class="w-headline-link">#</a>

Another example where you may want to save some time in the connection phase, but not necessarily start retrieving content right away, is when streaming media from a different origin.

Depending on how your page handles the streamed content, you may want to wait until your scripts have loaded and are ready to process the stream. Pre-connecting helps you cut the waiting time to a single round trip once you're ready to start fetching.

## How to implement `rel=preconnect` <a href="#how-to-implement-relpreconnect" class="w-headline-link">#</a>

One way of initiating a `preconnect` is adding a `<link>` tag to the `<head>` of the document.

    <head>
        <link rel="preconnect" href="https://example.com">
    </head>

Preconnecting is only effective for domains other than the origin domain, so you shouldn't use it for your site.

**Caution**: Only preconnect to critical domains you will use soon because the browser closes any connection that isn't used within 10 seconds. Unnecessary preconnecting can delay other important resources, so limit the number of preconnected domains and [test the impact preconnecting makes](https://andydavies.me/blog/2019/08/07/experimenting-with-link-rel-equals-preconnect-using-custom-script-injection-in-webpagetest/).

You can also initiate a preconnect via the [`Link` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link):

`Link: <https://example.com/>; rel=preconnect`

A benefit of specifying a preconnect hint in the HTTP header is that it doesn't rely on markup being parsed, and it can be triggered by requests for stylesheets, scripts, and more. For example, Google Fonts sends a `Link` header in the stylesheet response to preconnect to the domain that hosts the font files.

Some types of resources, such as fonts, are loaded in [anonymous mode](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements). For those you must set the `crossorigin` attribute with the `preconnect` hint:

    <link rel="preconnect" href="https://example.com/ComicSans" crossorigin>

If you omit the `crossorigin` attribute, the browser only performs the DNS lookup.

## Resolve domain name early with `rel=dns-prefetch` <a href="#resolve-domain-name-early-with-reldns-prefetch" class="w-headline-link">#</a>

You remember sites by their names, but servers remember them by IP addresses. This is why the domain name system (DNS) exists. The browser uses DNS to convert the site name to an IP address. This process—[domain name resolution](https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/)— is the first step in establishing a connection.

If a page needs to make connections to many third-party domains, preconnecting all of them is counterproductive. The `preconnect` hint is best used for only the most critical connections. For all the rest, use `<link rel=dns-prefetch>` to save time on the first step, the DNS lookup, which usually takes around [20–120 ms](https://www.keycdn.com/support/reduce-dns-lookups).

DNS resolution is initiated similarly to `preconnect`: by adding a `<link>` tag to the `<head>` of the document.

    <link rel="dns-prefetch" href="http://example.com">

[Browser support for `dns-prefetch`](https://caniuse.com/#search=dns-prefetch) is slightly different from [`preconnect`](https://caniuse.com/#search=preconnect) [support](https://caniuse.com/#search=preconnect), so `dns-prefetch` can serve as a fallback for browsers that don't support `preconnect`.

Do

    <link rel="preconnect" href="http://example.com">
    <link rel="dns-prefetch" href="http://example.com">

To safely implement the fallback technique, use separate link tags.

Don't

    <link rel="preconnect dns-prefetch" href="http://example.com">

Implementing `dns-prefetch` fallback in the same `<link>` tag causes a bug in Safari where `preconnect` gets cancelled.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

These two resource hints are helpful for improving page speed when you know you'll download something from a third-party domain soon, but you don't know the exact URL for the resource. Examples include CDNs that distribute JavaScript libraries, images or fonts. Be mindful of constraints, use `preconnect` only for the most important resources, rely on `dns-prefetch` for the rest, and always measure the impact in the real-world.

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Jul 30, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/preconnect-and-dns-prefetch/index.md)

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
