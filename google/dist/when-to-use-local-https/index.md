<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/rIRKS6XfdH4ZU6N1y4zE.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#when-to-use-https-for-local-development" class="w-toc__header--link">When to use HTTPS for local development</a>

- [Summary](#summary)
- [Why your development site should behave securely](#why-your-development-site-should-behave-securely)
- [Use http://localhost by default](#use-http:localhost-by-default)
- [When to use HTTPS for local development](#when-to-use-https-for-local-development)
- [How to use HTTPS for local development](#how-to-use-https-for-local-development)
- [Tips if you're using a custom hostname](#tips-if-you're-using-a-custom-hostname)
- [Learn more](#learn-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# When to use HTTPS for local development

Using http://localhost for local development is fine most of the time, except in some special cases. This post explains when you need to run your local development site with HTTPS.

Jan 25, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Maud Nalpas" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/maudn/)

<a href="/authors/maudn/" class="w-author__name-link">Maud Nalpas</a>

- <a href="https://twitter.com/maudnals" class="w-author__link">Twitter</a>
- <a href="https://github.com/maudnals" class="w-author__link">GitHub</a>

Also see: [How to use HTTPS for local development](/how-to-use-local-https).

_In this post, statements about `localhost` are valid for `127.0.0.1` and `[::1]` as well, since they both describe the local computer address, also called "loopback address". Also, to keep things simple, the port number isn't specified._ _So when you see `http://localhost`, read it as `http://localhost:{PORT}` or `http://127.0.0.1:{PORT}`._

## Summary <a href="#summary" class="w-headline-link">#</a>

When developing locally, use `http://localhost` by default. Service Workers, Web Authentication API, and more will work. However, in the following cases, you'll need HTTPS for local development:

- Setting Secure cookies in a consistent way across browsers

- Debugging mixed-content issues

- Using HTTP/2 and later

- Using third-party libraries or APIs that require HTTPS

- Using a custom hostname

  <figure><img src="https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format" alt="When to use HTTPS for local development." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ifswaep3VUkY7cjArbIc.png?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>When to use HTTPS for local development.</figcaption></figure>

If you need HTTPS for one of the above use cases, check out [How to use HTTPS for local development](/how-to-use-local-https).

✨ This is all you need to know. If you're interested in more details keep reading!

## Why your development site should behave securely <a href="#why-your-development-site-should-behave-securely" class="w-headline-link">#</a>

To avoid running into unexpected issues, you want your local development site to behave as much as possible like your production website. So, if your production website uses HTTPS, you want your local development site to behave **like an HTTPS site**.

**Warning**: If your production website doesn't use HTTPS, [make it a priority](/why-https-matters/).

## Use `http://localhost` by default <a href="#use-http:localhost-by-default" class="w-headline-link">#</a>

Browsers treat `http://localhost` in a special way: **although it's HTTP, it mostly behaves like an HTTPS site**.

On `http://localhost`, Service Workers, Sensor APIs, Authentication APIs, Payments, and [other features that require certain security guarantees](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) are supported and behave exactly like on an HTTPS site.

## When to use HTTPS for local development <a href="#when-to-use-https-for-local-development" class="w-headline-link">#</a>

You may encounter special cases where `http://localhost` _doesn't_ behave like an HTTPS site—or you may simply want to use a custom site name that's not `http://localhost`.

You need to use HTTPS for local development in the following cases:

- You need to [set a cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) locally that is `Secure`, or `SameSite:none`, or has the `__Host` prefix. `Secure` cookies are set only on HTTPS, but not on `http://localhost` for all browsers. And because `SameSite:none` and `__Host` also require the cookie to be `Secure`, setting such cookies on your local development site requires HTTPS as well.

  **Gotchas!**
  When it comes to setting `Secure` cookies locally, not all browsers behave in the same way! For example, Chrome and Safari don't set `Secure` cookies on localhost, but Firefox does. In Chrome, this is considered a [bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1056543&q=localhost%20secure%20cookie&can=2).

- You need to debug locally an issue that only occurs on an HTTPS website but not on an HTTP site, not even `http://localhost`, such as a [mixed-content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) issue.

- You need to locally test or reproduce a behaviour specific to HTTP/2 or newer. For example, if you need to test loading performance on HTTP/2 or newer. Insecure HTTP/2 or newer is not supported, not even on `localhost`.

- You need to locally test third-party libraries or APIs that require HTTPS (for example OAuth).

- You're not using `localhost`, but a custom host name for local development, for example `mysite.example`. Typically, this means you've overridden your local hosts file:

  <figure><img src="https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format" alt="Editing a hosts file to add a custom hostname." sizes="(min-width: 740px) 740px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/i7dPGFARXLbg9oIAUol2.jpg?auto=format&amp;w=1480 1480w" width="740" height="318" /><figcaption>Editing a hosts file to add a custom hostname.</figcaption></figure>In this case, Chrome, Edge, Safari, and Firefox by default do *not* consider `mysite.example` to be secure, even though it's a local site. So it won't behave like an HTTPS site.

- Other cases! This is not an exhaustive list, but if you encounter a case that's not listed here, you'll know: things will break on `http://localhost`, or it won't quite behave like your production site. 🙃

**In all of these cases, you need to use HTTPS for local development.**

## How to use HTTPS for local development <a href="#how-to-use-https-for-local-development" class="w-headline-link">#</a>

If you need to use HTTPS for local development, head over to [How to use HTTPS for local development](/how-to-use-local-https).

## Tips if you're using a custom hostname <a href="#tips-if-you&#39;re-using-a-custom-hostname" class="w-headline-link">#</a>

**If you're using a custom hostname, for example, editing your hosts file:**

- Don't use a bare hostname like `mysite` because if there's a [top-level domain (TLD)](https://en.wikipedia.org/wiki/Top-level_domain) that happens to have the same name (`mysite`), you'll run into issues. And it's not that unlikely: in 2020, there are over 1,500 TLDs, and the list is growing. `coffee`, `museum`, `travel`, and many large company names (maybe even the company you're working at!) are TLDs. [See the full list here](https://data.iana.org/TLD/tlds-alpha-by-domain.txt).
- Only use domains that are yours, or that are reserved for this purpose. If you don't have a domain of your own, you can use either `test` or `localhost` (`mysite.localhost`). `test` doesn't have special treatment in browsers, but `localhost` does: Chrome and Edge support `http://<name>.localhost` out of the box, and it will behave securely when localhost does. Try it out: run any site on localhost and access `http://<whatever name you like>.localhost:<your port>` in Chrome or Edge. This may soon be possible in Firefox and [Safari](https://bugs.webkit.org/show_bug.cgi?id=160504) as well. The reason you can do this (have subdomains like `mysite.localhost`) is because `localhost` is not just a hostname: it's also a full TLD, like `com`.

## Learn more <a href="#learn-more" class="w-headline-link">#</a>

- [Secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts)
- [localhost as a secure context](https://www.w3.org/TR/secure-contexts/#localhost)
- [localhost as a secure context in Chrome](https://www.chromestatus.com/feature/6269417340010496)

_With many thanks for contributions and feedback to all reviewers—especially Ryan Sleevi, Filippo Valsorda, Milica Mihajlija, Rowan Merewood and Jake Archibald. 🙌_

_Hero image by [@moses_lee](https://unsplash.com/@moses_lee) on [Unsplash](https://unsplash.com/photos/Q2Xy_hYzrgg), edited._

<a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Jan 25, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/when-to-use-local-https/index.md)

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
