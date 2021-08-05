<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/V0dgwWTA61NTc55CAhSD.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#samesite-cookie-recipes" class="w-toc__header--link">SameSite cookie recipes</a>

- [Cross-browser support](#cross-browser-support)
- [Use cases for cross-site or third-party cookies](#use-cases-for-cross-site-or-third-party-cookies)
- [Content within an &lt;iframe&gt;](#content-within-an-lessiframegreater)
- ["Unsafe" requests across sites](#)
- [Remote resources](#remote-resources)
- [Content within a WebView](#content-within-a-webview)
- [How to implement SameSite today](#how-to-implement-samesite-today)
- [Handling incompatible clients](#handling-incompatible-clients)
- [Support for SameSite=None in languages, libraries, and frameworks](#support-for-samesitenone-in-languages-libraries-and-frameworks)
- [Getting help](#getting-help)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# SameSite cookie recipes

Update your site's cookies to prepare for the upcoming changes to the SameSite attribute's behavior.

Oct 30, 2019 <span class="w-author__separator">•</span> Updated May 28, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rowan Merewood" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rowan_m/)

<a href="/authors/rowan_m/" class="w-author__name-link">Rowan Merewood</a>

- <a href="https://twitter.com/rowan_m" class="w-author__link">Twitter</a>
- <a href="https://github.com/rowan-m" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rowan-m" class="w-author__link">Glitch</a>

This article is part of a series on the `SameSite` cookie attribute changes:

- [SameSite cookies explained](/samesite-cookies-explained/)
- [SameSite cookies recipes](/samesite-cookie-recipes/)
- [Schemeful Same-Site](/schemeful-samesite)

[Chrome](https://www.chromium.org/updates/same-site), [Firefox](https://groups.google.com/d/msg/mozilla.dev.platform/nx2uP0CzA9k/BNVPWDHsAQAJ), [Edge](https://groups.google.com/a/chromium.org/d/msg/blink-dev/AknSSyQTGYs/8lMmI5DwEAAJ), and others will be changing their default behavior in line with the IETF proposal, [Incrementally Better Cookies](https://tools.ietf.org/html/draft-west-cookie-incrementalism-00) so that:

- Cookies without a `SameSite` attribute will be treated as `SameSite=Lax`, meaning the default behavior will be to restrict cookies to first party contexts **only**.
- Cookies for cross-site usage **must** specify `SameSite=None; Secure` to enable inclusion in third party context.

This feature is the [default behavior from Chrome 84 stable onward](https://blog.chromium.org/2020/05/resuming-samesite-cookie-changes-in-july.html). If you have not already done so, you should update the attributes for your third-party cookies so they will not be blocked in the future.

## Cross-browser support <a href="#cross-browser-support" class="w-headline-link">#</a>

See the [Browser compatibility](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie#Browser_compatibility) section of MDN's [`Set-Cookie`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie) page.

## Use cases for cross-site or third-party cookies <a href="#use-cases-for-cross-site-or-third-party-cookies" class="w-headline-link">#</a>

There are a number of common use cases and patterns where cookies need to be sent in a third-party context. If you provide or depend on one of these use cases, ensure that either you or the provider are updating their cookies to ensure the service continues to function correctly.

### Content within an `<iframe>` <a href="#content-within-an-lessiframegreater" class="w-headline-link">#</a>

Content from a different site displayed in an `<iframe>` is in a third-party context. Standard use cases here are:

- Embedded content shared from other sites, such as videos, maps, code samples, and social posts.
- Widgets from external services such as payments, calendars, booking, and reservation functionality.
- Widgets such as social buttons or anti-fraud services that create less obvious `<iframes>`.

Cookies may be used here to, among other things, maintain session state, store general preferences, enable statistics, or personalize content for users with existing accounts.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format" alt="If the embedded content doesn&#39;t come from the same site as the top-level browsing context, it&#39;s third-party content." sizes="(min-width: 468px) 468px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fTUQP4SffHHcexSipvlz.png?auto=format&amp;w=936 936w" width="468" height="383" /><figcaption>If the embedded content doesn't come from the same site as the top-level browsing context, it's third-party content.</figcaption></figure>Additionally, as the web is inherently composable, `<iframes>` are used to embed content that is also viewed in a top-level or first-party context. Any cookies used by that site will be considered as third-party cookies when the site is displayed within the frame. If you're creating sites that you intend to be easily embedded by others while also relying on cookies to function, you will also need to ensure those are marked for cross-site usage or that you can gracefully fallback without them.

### "Unsafe" requests across sites <a href="#%22unsafe%22-requests-across-sites" class="w-headline-link">#</a>

While "unsafe" may sound slightly concerning here, this refers to any request that may be intended to change state. On the web that's primarily POST requests. Cookies marked as `SameSite=Lax` will be sent on safe top-level navigations, e.g. clicking a link to go to a different site. However something like a `<form>` submission via POST to a different site would not include cookies.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format" alt="If the incoming request uses a &quot;safe&quot; method then the cookies will be sent." sizes="(min-width: 719px) 719px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vddDg7f9Gp93OgaqWwHu.png?auto=format&amp;w=1438 1438w" width="719" height="382" /><figcaption>If the incoming request uses a "safe" method then the cookies will be sent.</figcaption></figure>This pattern is used for sites that may redirect the user out to a remote service to perform some operation before returning, for example redirecting to a third-party identity provider. Before the user leaves the site, a cookie is set containing a single use token with the expectation that this token can be checked on the returning request to mitigate [Cross Site Request Forgery (CSRF)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) attacks. If that returning request comes via POST then it will be necessary to mark the cookies as `SameSite=None; Secure`.

### Remote resources <a href="#remote-resources" class="w-headline-link">#</a>

Any remote resource on a page may be relying on cookies to be sent with a request, from `<img>` tags, `<script>` tags, and so on. Common use cases include tracking pixels and personalizing content.

This also applies to requests initiated from your JavaScript by `fetch` or `XMLHttpRequest`. If `fetch()` is called with the [`credentials: 'include'` option](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Sending_a_request_with_credentials_included) this is a good indication that cookies may well be expected on those requests. For `XMLHttpRequest` you should look for instances of the [`withCredentials` property](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) being set to `true`. This is a good indication that cookies may well be expected on those requests. Those cookies will need to be appropriately marked to be included in cross-site requests.

### Content within a WebView <a href="#content-within-a-webview" class="w-headline-link">#</a>

A WebView in a platform-specific app is powered by a browser and you will need to test if the same restrictions or issues apply. In Android, if the WebView is powered by Chrome the new defaults **will not** immediately be applied with Chrome 84. However the intent is to apply them in the future, so you should still test and prepare for this. Additionally, Android allows its platform-specific apps to set cookies directly via the [CookieManager API](https://developer.android.com/reference/android/webkit/CookieManager). As with cookies set via headers or JavaScript, consider including `SameSite=None; Secure` if they are intended for cross-site use.

## How to implement `SameSite` today <a href="#how-to-implement-samesite-today" class="w-headline-link">#</a>

For cookies where they are only needed in a first-party context you should ideally mark them as `SameSite=Lax` or `SameSite=Strict` depending on your needs. You can also choose to do nothing and just allow the browser to enforce its default, but this comes with the risk of inconsistent behavior across browsers and potential console warnings for each cookie.

    Set-Cookie: first_party_var=value; SameSite=Lax

For cookies needed in a third-party context, you will need to ensure they are marked as `SameSite=None; Secure`. Note that you need both attributes together. If you just specify `None` without `Secure` the cookie will be rejected. There are some mutually incompatible differences in browser implementations though, so you may need to use some of the mitigating strategies described in [Handling incompatible clients](#handling-incompatible-clients) below.

    Set-Cookie: third_party_var=value; SameSite=None; Secure

### Handling incompatible clients <a href="#handling-incompatible-clients" class="w-headline-link">#</a>

As these changes to include `None` and update default behavior are still relatively new, there are inconsistencies amongst browsers as to how these changes are handled. You can refer to the [updates page on chromium.org](https://www.chromium.org/updates/same-site/incompatible-clients) for the issues currently known, however it's not possible to say if this is exhaustive. While this is not ideal, there are workarounds you can employ during this transitionary phase. The general rule though is to treat incompatible clients as the special case. Do not create an exception for browsers implementing the newer rules.

The first option is to set both the new and old style cookies:

    Set-cookie: 3pcookie=value; SameSite=None; Secure
    Set-cookie: 3pcookie-legacy=value; Secure

Browsers implementing the newer behavior will set the cookie with the `SameSite` value, while other browsers may ignore or incorrectly set it. However, those same browsers will set the `3pcookie-legacy` cookie. When processing included cookies, the site should first check for the presence of the new style cookie and if it's not found, then fallback to the legacy cookie.

The example below shows how to do this in Node.js, making use of the [Express framework](https://expressjs.com) and its [cookie-parser](https://www.npmjs.com/package/cookie-parser) middleware.

    const express = require('express');
    const cp = require('cookie-parser');
    const app = express();
    app.use(cp());

    app.get('/set', (req, res) => {
      // Set the new style cookie
      res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
      // And set the same value in the legacy cookie
      res.cookie('3pcookie-legacy', 'value', { secure: true });
      res.end();
    });

    app.get('/', (req, res) => {
      let cookieVal = null;

      if (req.cookies['3pcookie']) {
        // check the new style cookie first
        cookieVal = req.cookies['3pcookie'];
      } else if (req.cookies['3pcookie-legacy']) {
        // otherwise fall back to the legacy cookie
        cookieVal = req.cookies['3pcookie-legacy'];
      }

      res.end();
    });

    app.listen(process.env.PORT);

The downside is that this involves setting redundant cookies to cover all browsers and requires making changes both at the point of setting and reading the cookie. However, this approach should cover all browsers regardless of their behavior and ensure third-party cookies continue to function as before.

Alternatively at the point of sending the `Set-Cookie` header, you can choose to detect the client via the user agent string. Refer to the [list of incompatible clients](https://www.chromium.org/updates/same-site/incompatible-clients) and then make use of an appropriate library for your platform, for example [ua-parser-js](https://www.npmjs.com/package/ua-parser-js) library on Node.js. It's advisable to find a library to handle user agent detection as you most probably don't want to write those regular expressions yourself.

The benefit of this approach is that it only requires making one change at the point of setting the cookie. However, the necessary warning here is that user agent sniffing is inherently fragile and may not catch all of the affected users.

Regardless of what option you choose, it's advisable to ensure you have a way of logging the levels of traffic that are going through the legacy route. Make sure you have a reminder or alert to remove this workaround once those levels drop below an acceptable threshold for your site.

## Support for `SameSite=None` in languages, libraries, and frameworks <a href="#support-for-samesitenone-in-languages-libraries-and-frameworks" class="w-headline-link">#</a>

The majority of languages and libraries support the `SameSite` attribute for cookies, however the addition of `SameSite=None` is still relatively new which means that you may need to work around some of the standard behavior for now. These are documented in the [`SameSite` examples repo on GitHub](https://github.com/GoogleChromeLabs/samesite-examples).

## Getting help <a href="#getting-help" class="w-headline-link">#</a>

Cookies are all over the place and it's rare for any site to have completely audited where they're set and used, especially once you throw cross-site use cases in the mix. When you encounter an issue, it may well be the first time anyone has encountered it - so don't hesitate to reach out:

- Raise an issue on the [`SameSite` examples repo on GitHub](https://github.com/GoogleChromeLabs/samesite-examples).
- blog a question on the ["samesite" tag on StackOverflow](https://stackoverflow.com/questions/tagged/samesite).
- For issues with Chromium's behavior, raise a bug via the [\[SameSite cookies\] issue template](https://bit.ly/2lJMd5c).
- Follow Chrome's progress on the [`SameSite` updates page](https://www.chromium.org/updates/same-site).

_Cookie hero image by [Cayla1](https://unsplash.com/@calya1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

<a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/cookies/" class="w-chip">Cookies</a>

<span class="w-mr--sm"> Last updated: May 28, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/samesite-cookie-recipes/index.md)

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
