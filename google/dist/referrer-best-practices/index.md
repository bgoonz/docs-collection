<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/kh2IMJFSJ3Cj6Zo8jEv5.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#referer-and-referrer-policy-best-practices" class="w-toc__header--link">Referer and Referrer-Policy best practices</a>

- [Summary](#summary)
- [Referer and Referrer-Policy 101](#referer-and-referrer-policy-101)
- [What policies are available and how do they differ?](#what-policies-are-available-and-how-do-they-differ)
- [Default referrer policies in browsers](#default-referrer-policies-in-browsers)
- [Setting your referrer policy: best practices](#setting-your-referrer-policy:-best-practices)
- [How to see the referrer policy?](#how-to-see-the-referrer-policy)
- [Which policy should you set for your website?](#which-policy-should-you-set-for-your-website)
- [Why "explicitly"?](#why-)
- [Why strict-origin-when-cross-origin (or stricter)?](<#why-strict-origin-when-cross-origin-(or-stricter)>)
- [What if strict-origin-when-cross-origin (or stricter) doesn't accommodate all your use cases?](<#what-if-strict-origin-when-cross-origin-(or-stricter)-doesn't-accommodate-all-your-use-cases>)
- [Example: element-level policy](#example:-element-level-policy)
- [Example: request-level policy](#example:-request-level-policy)
- [What else should you consider?](#what-else-should-you-consider)
- [Using the referrer from incoming requests: best practices](#using-the-referrer-from-incoming-requests:-best-practices)
- [What to do if your site's functionality uses the referrer URL of incoming requests?](#what-to-do-if-your-site's-functionality-uses-the-referrer-url-of-incoming-requests)
- [Cross-Site Request Forgery (CSRF) protection](<#cross-site-request-forgery-(csrf)-protection>)
- [Logging](#logging)
- [Payments](#payments)
- [Conclusion](#conclusion)
- [Resources](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Referer and Referrer-Policy best practices

Best practices to set your Referrer-Policy and use the referrer in incoming requests.

Jul 30, 2020 <span class="w-author__separator">•</span> Updated Sep 23, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Maud Nalpas" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/maudn/)

<a href="/authors/maudn/" class="w-author__name-link">Maud Nalpas</a>

- <a href="https://twitter.com/maudnals" class="w-author__link">Twitter</a>
- <a href="https://github.com/maudnals" class="w-author__link">GitHub</a>

## Summary <a href="#summary" class="w-headline-link">#</a>

- Unexpected cross-origin information leakage hinders web users' privacy. A protective referrer policy can help.
- Consider setting a referrer policy of `strict-origin-when-cross-origin`. It retains much of the referrer's usefulness, while mitigating the risk of leaking data cross-origins.
- Don't use referrers for Cross-Site Request Forgery (CSRF) protection. Use [CSRF tokens](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#token-based-mitigation) instead, and other headers as an extra layer of security.

Before we start:

- If you're unsure of the difference between "site" and "origin", check out [Understanding "same-site" and "same-origin"](/same-site-same-origin/).
- The `Referer` header is missing an R, due to an original misspelling in the spec. The `Referrer-Policy` header and `referrer` in JavaScript and the DOM are spelled correctly.

## Referer and Referrer-Policy 101 <a href="#referer-and-referrer-policy-101" class="w-headline-link">#</a>

HTTP requests may include the optional [`Referer` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer), which indicates the origin or web page URL the request was made from. The [`Referrer-Policy` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) defines what data is made available in the `Referer` header.

In the example below, the `Referer` header includes the complete URL of the page on `site-one` from which the request was made.

<figure><img src="https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/cXgqJfmD5OPdzqXl9RNt.jpg?auto=format&amp;w=1600 1600w" width="800" height="573" /></figure>The `Referer` header might be present in different types of requests:

- Navigation requests, when a user clicks a link
- Subresource requests, when a browser requests images, iframes, scripts, and other resources that a page needs.

For navigations and iframes, this data can also be accessed via JavaScript using `document.referrer`.

The `Referer` value can be insightful. For example, an analytics service might use the value to determine that 50% of the visitors on `site-two.example` came from `social-network.example`.

But when the full URL including the path and query string is sent in the `Referer` **across origins**, this can be **privacy-hindering** and pose **security risks** as well. Take a look at these URLs:

<figure><img src="https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/oTUtfrwaGYYjlOJ6KRs6.jpg?auto=format&amp;w=1600 1600w" width="800" height="370" /></figure>URLs \#1 to \#5 contain private information—sometimes even identifying or sensitive. Leaking these silently across origins can compromise web users' privacy.

URL \#6 is a [capability URL](https://www.w3.org/TR/capability-urls/). You don't want it to fall in the hands of anyone other than the intended user. If this were to happen, a malicious actor could hijack this user's account.

**In order to restrict what referrer data is made available for requests from your site, you can set a referrer policy.**

## What policies are available and how do they differ? <a href="#what-policies-are-available-and-how-do-they-differ" class="w-headline-link">#</a>

You can select one of eight policies. Depending on the policy, the data available from the `Referer` header (and `document.referrer`) can be:

- No data (no `Referer` header is present)
- Only the [origin](/same-site-same-origin/#origin)
- The full URL: origin, path, and query string

<figure><img src="https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UR1U0HRP0BOF1e0XnyWA.jpg?auto=format&amp;w=1600 1600w" width="800" height="255" /></figure>Some policies are designed to behave differently depending on the **context**: cross-origin or same-origin request, security (whether the request destination is as secure as the origin), or both. This is useful to limit the amount of information shared across origins or to less secure origins—while maintaining the richness of the referrer within your own site.

Here is an overview showing how referrer policies restrict the URL data available from the Referer header and `document.referrer`:

<figure><img src="https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/BIHWDY60CI317O7IzmQs.jpg?auto=format&amp;w=1600 1600w" width="800" height="537" /></figure>MDN provides a [full list of policies and behavior examples](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#Directives).

Things to note:

- All policies that take the scheme (HTTPS vs. HTTP) into account (`strict-origin`, `no-referrer-when-downgrade` and `strict-origin-when-cross-origin`) treat requests from an HTTP origin to another HTTP origin the same way as requests from an HTTPS origin to another HTTPS origin—even if HTTP is less secure. That's because for these policies, what matters is whether a security **downgrade** takes place, i.e. if the request can expose data from an encrypted origin to an unencrypted one. An HTTP → HTTP request is unencrypted all along, so there is no downgrade. HTTPS → HTTP requests, on the contrary, present a downgrade.
- If a request is **same-origin**, this means that the scheme (HTTPS or HTTP) is the same; hence there is no security downgrade.

## Default referrer policies in browsers <a href="#default-referrer-policies-in-browsers" class="w-headline-link">#</a>

_As of July 2020_

**If no referrer policy is set, the browser's default policy will be used.**

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Browser</th><th>Default <code>Referrer-Policy</code> / Behavior</th></tr></thead><tbody><tr class="odd"><td>Chrome</td><td>Planning to switch to <code>strict-origin-when-cross-origin</code> in <a href="https://developers.google.com/web/updates/2020/07/referrer-policy-new-chrome-default">version 85</a> (previously <code>no-referrer-when-downgrade</code>)</td></tr><tr class="even"><td>Firefox</td><td><ul><li><code>strict-origin-when-cross-origin</code> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1589074">see closed bug</a>)</li><li><code>strict-origin-when-cross-origin</code> in Private Browsing and for trackers</li></ul></td></tr><tr class="odd"><td>Edge</td><td><ul><li><code>no-referrer-when-downgrade</code></li><li><a href="https://github.com/privacycg/proposals/issues/13">Experimenting</a> with <code>strict-origin-when-cross-origin</code></li></ul></td></tr><tr class="even"><td>Safari</td><td>Similar to <code>strict-origin-when-cross-origin</code>. See <a href="https://webkit.org/blog/9661/preventing-tracking-prevention-tracking/">Preventing Tracking Prevention Tracking</a> for details.</td></tr></tbody></table>

## Setting your referrer policy: best practices <a href="#setting-your-referrer-policy:-best-practices" class="w-headline-link">#</a>

**Objective**: Explicitly set a privacy-enhancing policy, such as `strict-origin-when-cross-origin`(or stricter).

There are different ways to set referrer policies for your site:

- As an HTTP header
- Within your [HTML](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#Integration_with_HTML)
- From JavaScript on a [per-request basis](https://javascript.info/fetch-api#referrer-referrerpolicy)

You can set different policies for different pages, requests or elements.

The HTTP header and the meta element are both page-level. The precedence order when determining an element's effective policy is:

1.  Element-level policy
2.  Page-level policy
3.  Browser default

**Example:**

`index.html`:

    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <img src="..." referrerpolicy="no-referrer-when-downgrade" />

The image will be requested with a `no-referrer-when-downgrade` policy, while all other subresource requests from this page will follow the `strict-origin-when-cross-origin` policy.

## How to see the referrer policy? <a href="#how-to-see-the-referrer-policy" class="w-headline-link">#</a>

[securityheaders.com](https://securityheaders.com/) is handy to determine the policy a specific site or page is using.

You can also use the developer tools of Chrome, Edge, or Firefox to see the referrer policy used for a specific request. At the time of this writing, Safari doesn't show the `Referrer-Policy` header but does show the `Referer` that was sent.

## <figure><img src="https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format" alt="Chrome DevTools, Network panel with a request selected." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8Qlu6ZzSVgL2f9iYIplJ.jpg?auto=format&amp;w=1600 1600w" width="800" height="416" /><figcaption>Chrome DevTools, <strong>Network</strong> panel with a request selected.</figcaption></figure>Which policy should you set for your website? <a href="#which-policy-should-you-set-for-your-website" class="w-headline-link">#</a>

Summary: Explicitly set a privacy-enhancing policy such as `strict-origin-when-cross-origin` (or stricter).

### Why "explicitly"? <a href="#why-%22explicitly%22" class="w-headline-link">#</a>

If no referrer policy is set, the browser's default policy will be used—in fact, websites often defer to the browser's default. But this is not ideal, because:

- Browser default policies are either `no-referrer-when-downgrade`, `strict-origin-when-cross-origin`, or stricter—depending on the browser and mode (private/incognito). So your website won't behave predictably across browsers.
- Browsers are adopting stricter defaults such as `strict-origin-when-cross-origin` and mechanisms such as [referrer trimming](https://github.com/privacycg/proposals/issues/13) for cross-origin requests. Explicitly opting into a privacy-enhancing policy before browser defaults change gives you control and helps you run tests as you see fit.

### Why `strict-origin-when-cross-origin` (or stricter)? <a href="#why-strict-origin-when-cross-origin-(or-stricter)" class="w-headline-link">#</a>

You need a policy that is secure, privacy-enhancing, and useful—what "useful" means depends on what you want from the referrer:

- **Secure**: if your website uses HTTPS ([if not, make it a priority](/why-https-matters/)), you don't want your website's URLs to leak in non-HTTPS requests. Since anyone on the network can see these, this would expose your users to person-in-the-middle-attacks. The policies `no-referrer-when-downgrade`, `strict-origin-when-cross-origin`, `no-referrer` and `strict-origin` solve this problem.
- **Privacy-enhancing**: for a cross-origin request, `no-referrer-when-downgrade` shares the full URL—this is not privacy-enhancing. `strict-origin-when-cross-origin` and `strict-origin` only share the origin, and `no-referrer` shares nothing at all. This leaves you with `strict-origin-when-cross-origin`, `strict-origin`, and `no-referrer` as privacy-enhancing options.
- **Useful**: `no-referrer` and `strict-origin` never share the full URL, even for same-origin requests—so if you need this, `strict-origin-when-cross-origin` is a better option.

All of this means that **`strict-origin-when-cross-origin`** is generally a sensible choice.

**Example: Setting a `strict-origin-when-cross-origin` policy:**

`index.html`:

    <meta name="referrer" content="strict-origin-when-cross-origin" />

Or server-side, for example in Express:

    const helmet = require('helmet');
    app.use(helmet.referrerPolicy({policy: 'strict-origin-when-cross-origin'}));

### What if `strict-origin-when-cross-origin` (or stricter) doesn't accommodate all your use cases? <a href="#what-if-strict-origin-when-cross-origin-(or-stricter)-doesn&#39;t-accommodate-all-your-use-cases" class="w-headline-link">#</a>

In this case, take a **progressive approach**: set a protective policy like `strict-origin-when-cross-origin` for your website and if need be, a more permissive policy for specific requests or HTML elements.

### Example: element-level policy <a href="#example:-element-level-policy" class="w-headline-link">#</a>

`index.html`:

    <head>
      <!-- document-level policy: strict-origin-when-cross-origin -->
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <head>
        <body>
          <!-- policy on this <a> element: no-referrer-when-downgrade -->
          <a src="…" href="…" referrerpolicy="no-referrer-when-downgrade"></a>
          <body></body>
        </body>
      </head>
    </head>

Note that Safari/WebKit may cap `document.referrer` or the `Referer` header for [cross-site](/same-site-same-origin/#same-site-cross-site) requests. See [details](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/).

### Example: request-level policy <a href="#example:-request-level-policy" class="w-headline-link">#</a>

`script.js`:

    fetch(url, {referrerPolicy: 'no-referrer-when-downgrade'});

### What else should you consider? <a href="#what-else-should-you-consider" class="w-headline-link">#</a>

Your policy should depend on your website and use cases—this is up to you, your team, and your company. If some URLs contain identifying or sensitive data, set a protective policy.

**Warning**: Data that might not look sensitive to you can be sensitive for your users, or is simply not data they want or expect to silently leak cross-origin.

## Using the referrer from incoming requests: best practices <a href="#using-the-referrer-from-incoming-requests:-best-practices" class="w-headline-link">#</a>

### What to do if your site's functionality uses the referrer URL of incoming requests? <a href="#what-to-do-if-your-site&#39;s-functionality-uses-the-referrer-url-of-incoming-requests" class="w-headline-link">#</a>

#### Protect users' data <a href="#protect-users&#39;-data" class="w-headline-link">#</a>

The `Referer` may contain private, personal, or identifying data—so make sure you treat it as such.

#### Keep in mind that the `Referer` you receive may change <a href="#keep-in-mind-that-the-referer-you-receive-may-change" class="w-headline-link">#</a>

Using the referrer from incoming cross-origin requests has a few limitations:

- If you have no control over the request emitter's implementation, you can't make assumptions about the `Referer` header (and `document.referrer`) you receive. The request emitter may decide anytime to switch to a `no-referrer` policy, or more generally to a stricter policy than what they used before—meaning you'll get less data via the `Referer` than you used to.
- Browsers are increasingly using the Referrer-Policy `strict-origin-when-cross-origin` by default. This means that you may now receive only the origin (instead of full referrer URL) in incoming cross-origin requests, if the site that sends these has no policy set.
- Browsers may change the way they manage `Referer`; for example, in the future, they may decide to always trim referrers to origins in cross-origin subresource requests, in order to protect user privacy.
- The `Referer` header (and `document.referrer`) may contain more data than you need, for example a full URL when you only want to know if the request is cross-origin.

#### Alternatives to `Referer` <a href="#alternatives-to-referer" class="w-headline-link">#</a>

You may need to consider alternatives if:

- An essential functionality of your site uses the referrer URL of incoming cross-origin requests;
- And/or if your site is not receiving anymore the part of the referrer URL it needs in a cross-origin request. This happens when the request emitter changed their policy or when they have no policy set and the browser default's policy changed (like in [Chrome 85](https://developers.google.com/web/updates/2020/07/referrer-policy-new-chrome-default)).

To define alternatives, analyze first what part of the referrer you're using.

**If you only need the origin (`https://site-one.example`):**

- If you're using the referrer in a script that has top-level access to the page, `window.location.origin` is an alternative.
- If available, headers like [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) and [`Sec-Fetch-Site`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site) give you the `Origin` or describe whether the request is cross-origin, which may be exactly what you need.

**If you need other elements of the URL (path, query parameters…):**

- Request parameters may address your use case and this saves you the work of parsing the referrer.
- If you're using the referrer in a script that has top-level access to the page, `window.location.pathname` may be an alternative. Extract only the path section of the URL and pass it on as an argument, so any potentially sensitive information in the URL parameters isn't passed on.

**If you can't use these alternatives:**

- Check if your systems can be changed to expect the request emitter (`site-one.example`) to explicitly set the information you need in a configuration of some sort. Pro: more explicit, more privacy-preserving for `site-one.example` users, more future-proof. Con: potentially more work from your side or for your system's users.
- Check whether the site that emits the requests may agree to set a per-element or per-request Referrer-Policy of `no-referrer-when-downgrade`. Con: potentially less privacy-preserving for `site-one.example` users, potentially not supported in all browsers.

### Cross-Site Request Forgery (CSRF) protection <a href="#cross-site-request-forgery-(csrf)-protection" class="w-headline-link">#</a>

Note that a request emitter can always decide not to send the referrer by setting a `no-referrer` policy (and a malicious actor could even spoof the referrer).

Use [CSRF tokens](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#token-based-mitigation) as your primary protection. For extra protection, use [SameSite](/samesite-cookie-recipes/#%22unsafe%22-requests-across-sites)—and instead of `Referer`, use headers such as [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) (available on POST and CORS requests) and [`Sec-Fetch-Site`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site) (if available).

### Logging <a href="#logging" class="w-headline-link">#</a>

Make sure to protect users' personal or sensitive data that may be in the `Referer`.

If you're only using the origin, check if the [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) header could be an alternative. This may give you the information that you need for debugging purposes in a simpler way and without needing to parse the referrer.

### Payments <a href="#payments" class="w-headline-link">#</a>

Payment providers may rely on the `Referer` header of incoming requests for security checks.

For example:

- The user clicks a **Buy** button on `online-shop.example/cart/checkout`.
- `online-shop.example` redirects to `payment-provider.example` to manage the transaction.
- `payment-provider.example` checks the `Referer` of this request against a list of allowed `Referer` values set up by the merchants. If it doesn't match any entry in the list, `payment-provider.example` rejects the request. If it does match, the user can proceed to the transaction.

#### Best practices for payment flow security checks <a href="#best-practices-for-payment-flow-security-checks" class="w-headline-link">#</a>

**Summary: as a payment provider, you can use the `Referer` as a basic check against naive attacks—but you should absolutely have another, more reliable verification method in place.**

The `Referer` header alone isn't a reliable basis for a check: the requesting site, whether they're a legitimate merchant or not, can set a `no-referrer` policy which will make the `Referer` information unavailable to the payment provider. However, as a payment provider, looking at the `Referer` may help you catch naive attackers who did not set a `no-referrer` policy. So you can decide to use the `Referer` as a first basic check. If you do so:

- **Do not expect the `Referer` to always be present; and if it's present, only check against the piece of data it will include at the minimum: the origin**. When setting the list of allowed `Referer` values, make sure that no path is included, but only the origin. Example: the allowed `Referer` values for `online-shop.example` should be `online-shop.example`, not `online-shop.example/cart/checkout`. Why? Because by expecting either no `Referer` at all or a `Referer` value that is the origin of the requesting website, you prevent unexpected errors since you're **not making assumptions about the `Referrer-Policy`** your merchant has set or about the browser's behavior if the merchant has no policy set. Both the site and the browser could strip the `Referer` sent in the incoming request to only the origin or not send the `Referer` at all.
- If the `Referer` is absent or if it's present and your basic `Referer` origin check was successful: you can move onto your other, more reliable verification method (see below).

**What is a more reliable verification method?**

One reliable verification method is to let the requester **hash the request parameters** together with a unique key. As a payment provider, you can then **calculate the same hash on your side** and only accept the request if it matches your calculation.

**What happens to the `Referer` when an HTTP merchant site with no referrer policy redirects to an HTTPS payment provider?**

No `Referer` will be visible in the request to the HTTPS payment provider, because [most browsers](#default-referrer-policies-in-browsers) use `strict-origin-when-cross-origin` or `no-referrer-when-downgrade` by default when a website has no policy set. Also note that [Chrome's change to a new default policy](https://developers.google.com/web/updates/2020/07/referrer-policy-new-chrome-default) won't change this behaviour.

If your website uses HTTP, [migrate to HTTPS](/why-https-matters/).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

A protective referrer policy is a great way to give your users more privacy.

To learn more about different techniques to protect your users, check out web.dev's [Safe and secure](/secure/) collection!

_With many thanks for contributions and feedback to all reviewers - especially Kaustubha Govind, David Van Cleve, Mike West, Sam Dutton, Rowan Merewood, Jxck and Kayce Basques._

## Resources <a href="#resources" class="w-headline-link">#</a>

- [Understanding "same-site" and "same-origin"](/same-site-same-origin/)
- [A new security header: Referrer Policy (2017)](https://scotthelme.co.uk/a-new-security-header-referrer-policy/)
- [Referrer-Policy on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
- [Referer header: privacy and security concerns on MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- [Chrome change: Blink intent to implement](https://groups.google.com/a/chromium.org/d/msg/blink-dev/aBtuQUga1Tk/n4BLwof4DgAJ)
- [Chrome change: Blink intent to ship](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/lqFuqwZDDR8)
- [Chrome change: status entry](https://www.chromestatus.com/feature/6251880185331712)
- [Chrome change: 85 beta blogpost](https://blog.chromium.org/2020/07/chrome-85-upload-streaming-human.html)
- [Referrer trimming GitHub thread: what different browsers do](https://github.com/privacycg/proposals/issues/13)
- [Referrer-Policy Spec](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-delivery)

<a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/privacy/" class="w-chip">Privacy</a>

<span class="w-mr--sm"> Last updated: Sep 23, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/referrer-best-practices/index.md)

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
