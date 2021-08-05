<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#how-to-distribute-signed-http-exchanges-(sxg)-using-nginx" class="w-toc__header--link">How to distribute Signed HTTP Exchanges (SXG) using nginx</a>

- [Cross-browser support](#cross-browser-support)
- [Get SXG files](#get-sxg-files)
- [Serve a simple SXG file](#serve-a-simple-sxg-file)
- [Prefetch subresources](#prefetch-subresources)
- [Send feedback](#send-feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How to distribute Signed HTTP Exchanges (SXG) using nginx

How to get and serve SXG files using nginx, and the challenges of subresource prefetching.

Mar 11, 2020

[<img src="https://web-dev.imgix.net/image/admin/Y780bmlJiHhk6UwxgOFF.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Hiroki Kumazaki" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Y780bmlJiHhk6UwxgOFF.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Y780bmlJiHhk6UwxgOFF.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Y780bmlJiHhk6UwxgOFF.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Y780bmlJiHhk6UwxgOFF.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Y780bmlJiHhk6UwxgOFF.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kumagi/)

<a href="/authors/kumagi/" class="w-author__name-link">Hiroki Kumazaki</a>

- <a href="https://twitter.com/kumagi" class="w-author__link">Twitter</a>
- <a href="https://github.com/kumagi" class="w-author__link">GitHub</a>

As a [Signed HTTP Exchanges (SXG)](https://developers.google.com/web/updates/2018/11/signed-exchanges) distributor, you can deliver SXG files on behalf of the original content creators. Web browsers that support SXG will display such SXG files as if they were delivered from the original content creators. This enables you to implement cross-site preloading without violating privacy. This guide shows you how to distribute SXG properly.

## Cross-browser support <a href="#cross-browser-support" class="w-headline-link">#</a>

Chrome is currently the only browser that supports SXG. See the Consensus & Standardization section of [Origin-Signed HTTP Exchanges](https://www.chromestatus.com/feature/5745285984681984) for more up-to-date information.

## Get SXG files <a href="#get-sxg-files" class="w-headline-link">#</a>

Specify in your `Accept` request header that you want the server to return an SXG file along with the request:

    Accept: application/signed-exchange;v=b3,*/*;q=0.8

This guide assumes that you put your SXG files in `/var/www/sxg`.

## Serve a simple SXG file <a href="#serve-a-simple-sxg-file" class="w-headline-link">#</a>

Attach the following headers to distribute a single SXG file:

    Content-Type: application/signed-exchange;v=v3
    X-Content-Type-Options: nosniff

Configure `nginx`:

    http {
        ...
        types {
            application/signed-exchange;v=b3  sxg;
        }
        add_header X-Content-Type-Options nosniff;

        location / {
            more_set_headers "Content-Type: application/signed-exchange;v=b3";
            alias /var/www/sxg/;
            try_files $uri.sxg $uri =404;
            autoindex off;
        }
        ...

Load the new configuration into `nginx`:

    sudo systemctl restart nginx.service

`nginx` will start serving SXG files. When Chrome accesses your server, the address of the original content publisher will appear in the bar!

## Prefetch subresources <a href="#prefetch-subresources" class="w-headline-link">#</a>

Most web pages consist of multiple subresources, such as CSS, JavaScript, fonts, and images. The content of SXG cannot be changed without the content creator's private key. This causes problems when the browser tries to resolve subresources.

For example, suppose `index.html.sxg` from `https://website.test/index.html` has a link to `https://website.test/app.js`. When a user's browser receives the SXG file from `https://distributor.test/example.com/index.html.sxg`, it will find the link to `https://website.test/app.js`. The browser can fetch `https://website.test/app.js` directly on actual access, but it should not be done in the preload phase to preserve privacy. If the resource was fetched during the preload phase, it would be possible for the content creator (`website.test`) to be able to detect which content distributor (`distributor.test`) is requesting the resource.

<img src="https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format" alt="The link to app.js in distributor.test/index.html.sxg points to website.test/app.js." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/1wbVnJkocJ9cv3lR2wZv.png?auto=format&amp;w=1600 1600w" width="800" height="214" />

If the distributor wants to serve `app.js.sxg` from their own service and tries to modify `https://website.test/app.js` to be the distributor's version of that subresource (such as `https://distributor.test/website.test/app.js.sxg`), it will cause a signature mismatch and make the SXG invalid.

<img src="https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format" alt="An attempt to link the reference to app.js in distributor.test/index.html.sxg to distributor.test/app.js causes a signature mismatch." sizes="(min-width: 592px) 592px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/IRRFoXyhnmwVXwiDgeny.png?auto=format&amp;w=1184 1184w" width="592" height="258" />

To solve this problem, there's an experimental SXG subresource prefetching feature in Chrome now. You can enable it at: `about://flags/#enable-sxg-subresource-prefetching`. To use subresource prefetching the following conditions must be met:

- The publisher must embed a response header entry in SXG, such as: `link: <https://website.test/app.js>;rel="preload";as="script",<https://website.test/app.js>;rel="allowed-alt-sxg";header-integrity="sha256-h6GuCtTXe2nITIHHpJM+xCxcKrYDpOFcIXjihE4asxk="`. This specifies the subresource that can be substituted with the SXG's specific integrity hash.
- The distributor must attach a response header when serving the SXG, such as: `link: <https://distributor.test/website.test/app.js.sxg>;rel="alternate";type="application/signed-exchange;v=b3";anchor="https://website.test/app.js"`. This specifies the path of `app.js` and corresponds to the subresource.

<img src="https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format" alt="anchor" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zsSl4DBys5jv8i5bQ6AT.png?auto=format&amp;w=1600 1600w" width="800" height="244" />

The first one is relatively easy because [`nginx-sxg-module`](https://github.com/google/nginx-sxg-module) can calculate integrity hashes and embed them into link headers from upstream responses. But the second one is more difficult because the content distributor must be aware of the specified subresources in the SXG.

If there are no subresources other than `https://website.test/app.js`, then all you need to append in your nginx config is:

    add_header link <https://distributor.test/website.test/app.js.sxg>;rel="alter...

But such cases are rare because typical websites consist of a lot of subresources. Additionally, the distributor must attach the proper anchor link header when serving an SXG file. Currently, there is no easy way to resolve this issue, so stay tuned for updates!

## Send feedback <a href="#send-feedback" class="w-headline-link">#</a>

Chromium engineers are keen to hear your feedback on distributing SXG at <webpackage-dev@chromium.org>. You can also join [the spec discussion](https://github.com/WICG/webpackage/issues), or [report a bug](https://bugs.chromium.org/p/chromium/issues/entry?status=untriaged&components=Blink%3ELoader&labels=Type-Bug,Hotlist-SignedExchange) to the team. Your feedback will greatly help the standardization process and also help address implementation issues. Thank you!

<span class="w-mr--sm"> Last updated: Mar 11, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/how-to-distribute-signed-http-exchanges/index.md)

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
