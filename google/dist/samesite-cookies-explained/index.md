<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UTOC41rgCccAqVNbJlyK.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#samesite-cookies-explained" class="w-toc__header--link">SameSite cookies explained</a>

- [What are first-party and third-party cookies?](#what-are-first-party-and-third-party-cookies)
- [Explicitly state cookie usage with the SameSite attribute](#explicitly-state-cookie-usage-with-the-samesite-attribute)
- [Changes to the default behavior without SameSite](#changes-to-the-default-behavior-without-samesite)
- [SameSite=Lax by default](#samesitelax-by-default)
- [SameSite=None must be secure](#samesitenone-must-be-secure)
- [SameSite cookie recipes](#samesite-cookie-recipes)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# SameSite cookies explained

Secure your site by learning how to explicitly mark your cross-site cookies.

May 7, 2019 <span class="w-author__separator">•</span> Updated May 28, 2020

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

Cookies are one of the methods available for adding persistent state to web sites. Over the years their capabilities have grown and evolved, but left the platform with some problematic legacy issues. To address this, browsers (including Chrome, Firefox, and Edge) are changing their behavior to enforce more privacy-preserving defaults.

Each cookie is a `key=value` pair along with a number of attributes that control when and where that cookie is used. You've probably already used these attributes to set things like expiration dates or indicating the cookie should only be sent over HTTPS. Servers set cookies by sending the aptly-named `Set-Cookie` header in their response. For all the detail you can dive into [RFC6265bis](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1), but for now here's a quick refresher.

Say you have a blog where you want to display a "What's new" promo to your users. Users can dismiss the promo and then they won't see it again for a while. You can store that preference in a cookie, set it to expire in a month (2,600,000 seconds), and only send it over HTTPS. That header would look like this:

    Set-Cookie: promo_shown=1; Max-Age=2600000; Secure

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format" alt="Servers set cookies using the Set-Cookie header." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jJ1fqcsAk9Ig3hManFBO.png?auto=format&amp;w=1600 1600w" width="800" height="276" /><figcaption>Servers set cookies using the <code>Set-Cookie</code> header.</figcaption></figure>When your reader views a page that meets those requirements, i.e. they're on a secure connection and the cookie is less than a month old, then their browser will send this header in its request:

    Cookie: promo_shown=1

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format" alt="Your browser sends cookies back in the Cookie header." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rq21WQpOZFvfgS9bbjmc.png?auto=format&amp;w=1600 1600w" width="800" height="165" /><figcaption>Your browser sends cookies back in the <code>Cookie</code> header.</figcaption></figure>You can also add and read the cookies available to that site in JavaScript using `document.cookie`. Making an assignment to `document.cookie` will create or override a cookie with that key. For example, you can try the following in your browser's JavaScript console:

    > document.cookie = "promo_shown=1; Max-Age=2600000; Secure"
    < "promo_shown=1; Max-Age=2600000; Secure"

Reading `document.cookie` will output all the cookies accessible in the current context, with each cookie separated by a semicolon:

    > document.cookie;
    < "promo_shown=1; color_theme=peachpuff; sidebar_loc=left"

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format" alt="JavaScript can access cookies using document.cookie." sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mbV00Gy5VAPTUls0i7cM.png?auto=format&amp;w=1200 1200w" width="600" height="382" /><figcaption>JavaScript can access cookies using <code>document.cookie</code>.</figcaption></figure>If you try this on a selection of popular sites you will notice that most of them set significantly more than just three cookies. In most cases, those cookies are sent on every single request to that domain, which has a number of implications. Upload bandwidth is often more restricted than download for your users, so that overhead on all outbound requests is adding a delay on your time to first byte. Be conservative in the number and size of cookies you set. Make use of the `Max-Age` attribute to help ensure that cookies don't hang around longer than needed.

## What are first-party and third-party cookies? <a href="#what-are-first-party-and-third-party-cookies" class="w-headline-link">#</a>

If you go back to that same selection of sites you were looking at before, you probably noticed that there were cookies present for a variety of domains, not just the one you were currently visiting. Cookies that match the domain of the current site, i.e. what's displayed in the browser's address bar, are referred to as **first-party** cookies. Similarly, cookies from domains other than the current site are referred to as **third-party** cookies. This isn't an absolute label but is relative to the user's context; the same cookie can be either first-party or third-party depending on which site the user is on at the time.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format" alt="Cookies may come from a variety of different domains on one page." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zjXpDz2jAdXMT83Nm3IT.png?auto=format&amp;w=1600 1600w" width="800" height="346" /><figcaption>Cookies may come from a variety of different domains on one page.</figcaption></figure>Continuing the example from above, let's say one of your blog posts has a picture of a particularly amazing cat in it and it's hosted at `/blog/img/amazing-cat.png`. Because it's such an amazing image, another person uses it directly on their site. If a visitor has been to your blog and has the `promo_shown` cookie, then when they view `amazing-cat.png` on the other person's site that cookie **will be sent** in that request for the image. This isn't particularly useful for anyone since `promo_shown` isn't used for anything on this other person's site, it's just adding overhead to the request.

If that's an unintended effect, why would you want to do this? It's this mechanism that allows sites to maintain state when they are being used in a third-party context. For example, if you embed a YouTube video on your site then visitors will see a "Watch later" option in the player. If your visitor is already signed in to YouTube, that session is being made available in the embedded player by a third-party cookie—meaning that "Watch later" button will just save the video in one go rather than prompting them to sign in or having to navigate them away from your page and back over to YouTube.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format" alt="A cookie in a third-party context is sent when visiting different pages." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u9chHBLm3i27yFRwHx5W.png?auto=format&amp;w=1600 1600w" width="800" height="433" /><figcaption>A cookie in a third-party context is sent when visiting different pages.</figcaption></figure>One of the cultural properties of the web is that it's tended to be open by default. This is part of what has made it possible for so many people to create their own content and apps there. However, this has also brought a number of security and privacy concerns. Cross-site request forgery (CSRF) attacks rely on the fact that cookies are attached to any request to a given origin, no matter who initiates the request. For example, if you visit `evil.example` then it can trigger requests to `your-blog.example`, and your browser will happily attach the associated cookies. If your blog isn't careful with how it validates those requests then `evil.example` could trigger actions like deleting posts or adding their own content.

Users are also becoming more aware of how cookies can be used to track their activity across multiple sites. However until now there hasn't been a way to explicitly state your intent with the cookie. Your `promo_shown` cookie should only be sent in a first-party context, whereas a session cookie for a widget meant to be embedded on other sites is intentionally there for providing the signed-in state in a third-party context.

## Explicitly state cookie usage with the `SameSite` attribute <a href="#explicitly-state-cookie-usage-with-the-samesite-attribute" class="w-headline-link">#</a>

The introduction of the `SameSite` attribute (defined in [RFC6265bis](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)) allows you to declare if your cookie should be restricted to a first-party or same-site context. It's helpful to understand exactly what 'site' means here. The site is the combination of the domain suffix and the part of the domain just before it. For example, the `www.web.dev` domain is part of the `web.dev` site.

**Key Term**:

If the user is on `www.web.dev` and requests an image from `static.web.dev` then that is a **same-site** request.

The [public suffix list](https://publicsuffix.org/) defines this, so it's not just top-level domains like `.com` but also includes services like `github.io`. That enables `your-project.github.io` and `my-project.github.io` to count as separate sites.

**Key Term**:

If the user is on `your-project.github.io` and requests an image from `my-project.github.io` that's a **cross-site** request.

Introducing the `SameSite` attribute on a cookie provides three different ways to control this behaviour. You can choose to not specify the attribute, or you can use `Strict` or `Lax` to limit the cookie to same-site requests.

If you set `SameSite` to `Strict`, your cookie will only be sent in a first-party context. In user terms, the cookie will only be sent if the site for the cookie matches the site currently shown in the browser's URL bar. So, if the `promo_shown` cookie is set as follows:

    Set-Cookie: promo_shown=1; SameSite=Strict

When the user is on your site, then the cookie will be sent with the request as expected. However when following a link into your site, say from another site or via an email from a friend, on that initial request the cookie will not be sent. This is good when you have cookies relating to functionality that will always be behind an initial navigation, such as changing a password or making a purchase, but is too restrictive for `promo_shown`. If your reader follows the link into the site, they want the cookie sent so their preference can be applied.

That's where `SameSite=Lax` comes in by allowing the cookie to be sent with these top-level navigations. Let's revisit the cat article example from above where another site is referencing your content. They make use of your photo of the cat directly and provide a link through to your original article.

    <p>Look at this amazing cat!</p>
    <img src="https://blog.example/blog/img/amazing-cat.png" />
    <p>Read the <a href="https://blog.example/blog/cat.html">article</a>.</p>

And the cookie has been set as so:

    Set-Cookie: promo_shown=1; SameSite=Lax

When the reader is on the other person's blog the cookie **will not be sent** when the browser requests `amazing-cat.png`. However when the reader follows the link through to `cat.html` on your blog, that request **will include** the cookie. This makes `Lax` a good choice for cookies affecting the display of the site with `Strict` being useful for cookies related to actions your user is taking.

**Caution**:

Neither `Strict` nor `Lax` are a complete solution for your site's security. Cookies are sent as part of the user's request and you should treat them the same as any other user input. That means sanitizing and validating the input. Never use a cookie to store data you consider a server-side secret.

Finally there is the option of not specifying the value which has previously been the way of implicitly stating that you want the cookie to be sent in all contexts. In the latest draft of [RFC6265bis](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03) this is being made explicit by introducing a new value of `SameSite=None`. This means you can use `None` to clearly communicate that you intentionally want the cookie sent in a third-party context.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format" alt="Explicitly mark the context of a cookie as None, Lax, or Strict." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1MhNdg9exp0rKnHpwCWT.png?auto=format&amp;w=1600 1600w" width="800" height="456" /><figcaption>Explicitly mark the context of a cookie as <code>None</code>, <code>Lax</code>, or <code>Strict</code>.</figcaption></figure>If you provide a service that other sites consume such as widgets, embedded content, affiliate programs, advertising, or sign-in across multiple sites then you should use `None` to ensure your intent is clear.

## Changes to the default behavior without SameSite <a href="#changes-to-the-default-behavior-without-samesite" class="w-headline-link">#</a>

While the `SameSite` attribute is widely supported, it has unfortunately not been widely adopted by developers. The open default of sending cookies everywhere means all use cases work but leaves the user vulnerable to CSRF and unintentional information leakage. To encourage developers to state their intent and provide users with a safer experience, the IETF proposal, [Incrementally Better Cookies](https://tools.ietf.org/html/draft-west-cookie-incrementalism-00) lays out two key changes:

- Cookies without a `SameSite` attribute will be treated as `SameSite=Lax`.
- Cookies with `SameSite=None` must also specify `Secure`, meaning they require a secure context.

Chrome implements this default behavior as of version 84. [Firefox](https://groups.google.com/d/msg/mozilla.dev.platform/nx2uP0CzA9k/BNVPWDHsAQAJ) has them available to test as of Firefox 69 and will make them default behaviors in the future. To test these behaviors in Firefox, open [`about:config`](http://kb.mozillazine.org/About:config) and set `network.cookie.sameSite.laxByDefault`. [Edge](https://groups.google.com/a/chromium.org/d/msg/blink-dev/AknSSyQTGYs/8lMmI5DwEAAJ) also plans to change its default behaviors.

This article will be updated as additional browsers announce support.

### `SameSite=Lax` by default <a href="#samesitelax-by-default" class="w-headline-link">#</a>

No attribute set

    Set-Cookie: promo_shown=1

If you send a cookie without any `SameSite` attribute specified…

Default behavior applied

    Set-Cookie: promo_shown=1; SameSite=Lax

The browser will treat that cookie as if `SameSite=Lax` was specified.

While this is intended to apply a more secure default, you should ideally set an explicit `SameSite` attribute rather than relying on the browser to apply that for you. This makes your intent for the cookie explicit and improves the chances of a consistent experience across browsers.

**Caution**:

The default behaviour applied by Chrome is slightly more permissive than an explicit `SameSite=Lax` as it will allow certain cookies to be sent on top-level POST requests. You can see the exact details on [the blink-dev announcement](https://groups.google.com/a/chromium.org/d/msg/blink-dev/AknSSyQTGYs/YKBxPCScCwAJ). This is intended as a temporary mitigation, you should still be fixing your cross-site cookies to use `SameSite=None; Secure`.

### `SameSite=None` must be secure <a href="#samesitenone-must-be-secure" class="w-headline-link">#</a>

Rejected

    Set-Cookie: widget_session=abc123; SameSite=None

Setting a cookie without `Secure` **will be rejected**.

Accepted

    Set-Cookie: widget_session=abc123; SameSite=None; Secure

You must ensure that you pair `SameSite=None` with the `Secure` attribute.

You can test this behavior as of Chrome 76 by enabling `about://flags/#cookies-without-same-site-must-be-secure` and from Firefox 69 in [`about:config`](http://kb.mozillazine.org/About:config) by setting `network.cookie.sameSite.noneRequiresSecure`.

You will want to apply this when setting new cookies and actively refresh existing cookies even if they are not approaching their expiry date.

If you rely on any services that provide third-party content on your site, you should also check with the provider that they are updating their services. You may need to update your dependencies or snippets to ensure that your site picks up the new behavior.

Both of these changes are backwards-compatible with browsers that have correctly implemented the previous version of the `SameSite` attribute, or just do not support it at all. By applying these changes to your cookies, you are making their intended use explicit rather than relying on the default behavior of the browser. Likewise, any clients that do not recognize `SameSite=None` as of yet should ignore it and carry on as if the attribute was not set.

**Warning**:

A number of older versions of browsers including Chrome, Safari, and UC browser are incompatible with the new `None` attribute and may ignore or restrict the cookie. This behavior is fixed in current versions, but you should check your traffic to determine what proportion of your users are affected. You can see the [list of known incompatible clients on the Chromium site](https://www.chromium.org/updates/same-site/incompatible-clients).

## `SameSite` cookie recipes <a href="#samesite-cookie-recipes" class="w-headline-link">#</a>

For further detail on exactly how to update your cookies to successfully handle these changes to `SameSite=None` and the difference in browser behavior, head to the follow up article, [SameSite cookie recipes](/samesite-cookie-recipes).

_Kind thanks for contributions and feedback from Lily Chen, Malte Ubl, Mike West, Rob Dodson, Tom Steiner, and Vivek Sekhar_

_Cookie hero image by [Pille-Riin Priske](https://unsplash.com/photos/UiP3uF5JRWM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

<a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/cookies/" class="w-chip">Cookies</a>

<span class="w-mr--sm"> Last updated: May 28, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/samesite-cookies-explained/index.md)

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
