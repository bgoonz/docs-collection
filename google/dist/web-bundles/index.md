<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format" alt="The Web Bundle logo" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Z9ZE5FjAFT4R6eOaCWPl.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#get-started-with-web-bundles" class="w-toc__header--link">Get started with Web Bundles</a>

- [Browser compatibility](#browser-compatibility)
- [Introducing the Web Bundles API](#introducing-the-web-bundles-api)
- [Explaining Web Bundles](#explaining-web-bundles)
- [Building Web Bundles](#building-web-bundles)
- [Playing around with Web Bundles](#playing-around-with-web-bundles)
- [Send feedback](#send-feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Get started with Web Bundles

Share websites as a single file over Bluetooth and run them offline in your origin's context

Nov 11, 2019

[<img src="https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yusuke Utsunomiya" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/uskay/)

<a href="/authors/uskay/" class="w-author__name-link">Yusuke Utsunomiya</a>

- <a href="https://twitter.com/uskay" class="w-author__link">Twitter</a>
- <a href="https://blog.uskay.io/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/I92nHj8yNfMgjnpIsvL6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kenji Baheux" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/I92nHj8yNfMgjnpIsvL6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/I92nHj8yNfMgjnpIsvL6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/I92nHj8yNfMgjnpIsvL6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/I92nHj8yNfMgjnpIsvL6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/I92nHj8yNfMgjnpIsvL6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kenjibaheux/)

<a href="/authors/kenjibaheux/" class="w-author__name-link">Kenji Baheux</a>

- <a href="https://twitter.com/KenjiBaheux" class="w-author__link">Twitter</a>

Bundling a full website as a single file and making it shareable opens up new use cases for the web. Imagine a world where you can:

- Create your own content and distribute it in all sorts of ways without being restricted to the network
- Share a web app or piece of web content with your friends via Bluetooth or Wi-Fi Direct
- Carry your site on your own USB or even host it on your own local network

The Web Bundles API is a bleeding edge proposal that lets you do all of this.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

The Web Bundles API is currently only supported in Chromium-based browsers behind an experimental flag.

## Introducing the Web Bundles API <a href="#introducing-the-web-bundles-api" class="w-headline-link">#</a>

A Web Bundle is a file format for encapsulating one or more HTTP resources in a single file. It can include one or more HTML files, JavaScript files, images, or stylesheets.

Web Bundles, more formally known as [Bundled HTTP Exchanges](https://wicg.github.io/webpackage/draft-yasskin-wpack-bundled-exchanges.html), are part of the [Web Packaging](https://github.com/WICG/webpackage) proposal.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format" alt="How Web Bundles work" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/nIq4lyKZAV6XgbgDgNSk.png?auto=format&amp;w=1600 1600w" width="800" height="466" /><figcaption>How Web Bundles work</figcaption></figure>HTTP resources in a Web Bundle are indexed by request URLs, and can optionally come with signatures that vouch for the resources. Signatures allow browsers to understand and verify where each resource came from, and treats each as coming from its true origin. This is similar to how [Signed HTTP Exchanges](https://developers.google.com/web/updates/2018/11/signed-exchanges), a feature for signing a single HTTP resource, are handled.

This article walks you through what a Web Bundle is and how to use one.

## Explaining Web Bundles <a href="#explaining-web-bundles" class="w-headline-link">#</a>

To be precise, a Web Bundle is a [CBOR file](https://cbor.io/) with a `.wbn` extension (by convention) which packages HTTP resources into a binary format, and is served with the `application/webbundle` MIME type. You can read more about this in the [Top-level structure](https://wicg.github.io/webpackage/draft-yasskin-wpack-bundled-exchanges.html#top-level) section of the spec draft.

Web Bundles have multiple unique features:

- Encapsulates multiple pages, enabling bundling of a complete website into a single file
- Enables executable JavaScript, unlike MHTML
- Uses [HTTP Variants](https://tools.ietf.org/id/draft-ietf-httpbis-variants-00.html) to do content negotiation, which enables internationalization with the `Accept-Language` header even if the bundle is used offline
- Loads in the context of its origin when cryptographically signed by its publisher
- Loads nearly instantly when served locally

These features open multiple scenarios. One common scenario is the ability to build a self-contained web app that's easy to share and usable without an internet connection. For example, say you're on an airplane from Tokyo to San Francisco with your friend. You don't like the in-flight entertainment. Your friend is playing an interesting web game called [PROXX](https://proxx.app/), and tells you that they downloaded the game as a Web Bundle before boarding the plane. It works flawlessly offline. Before Web Bundles, the story would end there and you would either have to take turns playing the game on your friend's device, or find something else to pass the time. But with Web Bundles, here's what you can now do:

1.  Ask your friend to share the `.wbn` file of the game. For example the file could easily be shared peer-to-peer using a file sharing app.
2.  Open the `.wbn` file in a browser that supports Web Bundles.
3.  Start playing the game on your own device and try to beat your friend's high score.

Here's a video that explains this scenario.

As you can see, a Web Bundle can contain every resource, making it work offline and load instantly.

Currently Chrome 80 only supports unsigned bundles (that is, Web Bundles without origin signatures). Bundling PROXX without signatures doesn't work well due to web worker cross-origin issues. Chrome is working on fixing this. In the meantime, check out [Dealing with Common Problems in Unsigned Bundles](https://chromium.googlesource.com/chromium/src/+/refs/heads/master/content/browser/web_package/using_web_bundles.md#Dealing-with-Common-Problems-in-Unsigned-Bundles) to learn how to avoid cross-origin issues.

## Building Web Bundles <a href="#building-web-bundles" class="w-headline-link">#</a>

The [`go/bundle`](https://github.com/WICG/webpackage/tree/master/go/bundle) CLI is currently the easiest way to bundle a website. `go/bundle` is a reference implementation of the Web Bundles specification built in [Go](https://golang.org/).

1.  [Install Go](https://golang.org/doc/install).

2.  Install `go/bundle`.

        go get -u github.com/WICG/webpackage/go/bundle/cmd/...

3.  Clone the [preact-todomvc](https://github.com/developit/preact-todomvc) repository and build the web app to get ready to bundle the resources.

        git clone https://github.com/developit/preact-todomvc.git
        cd preact-todomvc
        npm i
        npm run build

4.  Use the `gen-bundle` command to build a `.wbn` file.

        gen-bundle -dir build -baseURL https://preact-todom.vc/ -primaryURL https://preact-todom.vc/ -o todomvc.wbn

Congratulations! TodoMVC is now a Web Bundle.

There are other options for bundling and more are coming. The `go/bundle` CLI lets you build a Web Bundle using a HAR file or a custom list of resource URLs. Visit the [GitHub repo](https://github.com/WICG/webpackage/tree/master/go/bundle) to learn more about `go/bundle`. You can also try out the experimental Node.js module for bundling, [`wbn`](https://www.npmjs.com/package/wbn). Note that `wbn` is still in the early stages of development.

## Playing around with Web Bundles <a href="#playing-around-with-web-bundles" class="w-headline-link">#</a>

To try out a Web Bundle:

1.  Go to `about://version` to see what version of Chrome you're running. If you're running version 80 or later, skip the next step.

2.  Download [Chrome Canary](https://www.google.com/chrome/canary/) if you're not running Chrome 80 or later.

3.  Open `about://flags/#web-bundles`.

4.  Set the **Web Bundles** flag to **Enabled**.

    <figure><img src="https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format" alt="Enabling Web Bundles in about://flags" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/tt32OXyh9PdrKK9KnMto.png?auto=format&amp;w=1600 1600w" width="800" height="315" /><figcaption>Enabling Web Bundles in <code>about://flags</code></figcaption></figure>5.  Relaunch Chrome.

5.  Drag-and-drop the `todomvc.wbn` file into Chrome if you're on desktop, or tap it in a file management app if you're on Android.

Everything magically works.

The Preact implementation of TodoMVC working offline as a web bundle

You could also try out other sample web bundles:

- [web.dev.wbn](https://storage.googleapis.com/web-dev-assets/web-bundles/web.dev.wbn) is a snapshot of the entire web.dev site, as of 2019 October 15.
- [proxx.wbn](https://storage.googleapis.com/web-dev-assets/web-bundles/proxx.wbn): [PROXX](/proxx-announce/) is a Minesweeper clone that works offline.
- [squoosh.wbn](https://storage.googleapis.com/web-dev-assets/web-bundles/squoosh.wbn): [Squoosh](https://squoosh.app) is a convenient and fast image optimization tool that lets you do side-by-side comparisons of various image compression formats, with support for resizing and format conversions.

Currently you can only navigate into a Web Bundle stored in a local file, but that's only a temporary restriction.

## Send feedback <a href="#send-feedback" class="w-headline-link">#</a>

The Web Bundle API implementation in Chrome is experimental and incomplete. Not everything is working and it might fail or crash. That's why it's behind an experimental flag. But the API is ready enough for you to explore it in Chrome. Feedback from web developers is crucial to the design of new APIs, so please try it out and tell the people working on Web Bundles what you think.

- Send general feedback to <webpackage-dev@chromium.org>.
- If you have feedback on the spec visit <https://github.com/WICG/webpackage/issues/new> to file a new spec issue, or email <wpack@ietf.org>.
- If you find any issues in Chrome's behavior visit <https://crbug.com/new> to file a Chromium bug.
- Any contributions to the spec discussion and tooling are also more than welcome. Visit the [spec repo](https://github.com/WICG/webpackage) to get involved.

**Acknowledgements**

We would like to give a big shout-out to the wonderful Chrome engineering team, [Kunihiko Sakamoto](https://github.com/irori), [Tsuyoshi Horo](https://twitter.com/horo), [Takashi Toyoshima](https://twitter.com/toyoshim), [Kinuko Yasuda](https://twitter.com/kinu) and [Jeffrey Yasskin](https://twitter.com/jyasskin) that worked hard contributing to the spec, building the feature on Canary and reviewing this article. During the standardization process [Dan York](http://danyork.me/) has helped navigate the IETF discussion and also [Dave Cramer](https://twitter.com/dauwhe) has been a great resource on what publishers actually need. We also want to thank [Jason Miller](https://twitter.com/_developit) for the amazing preact-todomvc and his restless effort on making the framework better.

<a href="/tags/web-bundles/" class="w-chip">Web Bundles</a>

<span class="w-mr--sm"> Last updated: Nov 11, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-bundles/index.md)

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
