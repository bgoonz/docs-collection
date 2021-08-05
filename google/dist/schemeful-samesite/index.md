<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format" alt="Two separate plates of cookies. The plates represent the different schemes, HTTP and HTTPS. The cookies represent cookies." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UMxBPy0AKAfbzxwgTroV.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#schemeful-same-site" class="w-toc__header--link">Schemeful Same-Site</a>

- [Common cross-scheme scenarios](#common-cross-scheme-scenarios)
- [Navigation](#navigation)
- [Loading subresources](#loading-subresources)
- [POSTing a form](#posting-a-form)
- [How can I test my site?](#how-can-i-test-my-site)
- [FAQ](#faq)
- [My site is already fully available on HTTPS, why am I seeing issues in my browser's DevTools?](#my-site-is-already-fully-available-on-https-why-am-i-seeing-issues-in-my-browser's-devtools)
- [What if I can't upgrade to HTTPS?](#what-if-i-can't-upgrade-to-https)
- [How does this affect my cookies if I haven't specified a SameSite attribute?](#how-does-this-affect-my-cookies-if-i-haven't-specified-a-samesite-attribute)
- [How are WebSockets affected?](#how-are-websockets-affected)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Schemeful Same-Site

The definition of "same-site" is evolving to include the URL scheme, so links between HTTP and HTTPS versions of a site now count as cross-site requests. Upgrade to HTTPS by default to avoid issues where possible or read on for details of what SameSite attribute values are needed.

Nov 20, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/32OlQmcgfam3csi9SBGI.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Steven Bingler" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/32OlQmcgfam3csi9SBGI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/32OlQmcgfam3csi9SBGI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/32OlQmcgfam3csi9SBGI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/32OlQmcgfam3csi9SBGI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/32OlQmcgfam3csi9SBGI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/bingler/)

<a href="/authors/bingler/" class="w-author__name-link">Steven Bingler</a>

- <a href="https://github.com/sbingler" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rowan Merewood" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/TASwqsVceW68MrM7bjt8.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rowan_m/)

<a href="/authors/rowan_m/" class="w-author__name-link">Rowan Merewood</a>

- <a href="https://twitter.com/rowan_m" class="w-author__link">Twitter</a>
- <a href="https://github.com/rowan-m" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rowan-m" class="w-author__link">Glitch</a>

This article is part of a series on the `SameSite` cookie attribute changes:

- [SameSite cookies explained](/samesite-cookies-explained/)
- [SameSite cookies recipes](/samesite-cookie-recipes/)
- [Schemeful Same-Site](/schemeful-samesite)

[Schemeful Same-Site](https://mikewest.github.io/cookie-incrementalism/draft-west-cookie-incrementalism.html#rfc.section.3.3) modifies the definition of a (web)site from just the registrable domain to the scheme + registrable domain. You can find more details and examples in [Understanding "same-site" and "same-origin"](/same-site-same-origin/#%22schemeful-same-site%22).

**Key Term**: This means that the insecure HTTP version of a site, for example, **http**://website.example, and the secure HTTPS version of that site, **https**://website.example, are now considered **cross-site** to each other.

The good news is: if your website is already fully upgraded to HTTPS then you don't need to worry about anything. Nothing will change for you.

If you haven't fully upgraded your website yet then this should be the priority. However, if there are cases where your site visitors will go between HTTP and HTTPS then some of those common scenarios and the associated `SameSite` cookie behavior are outlined below.

**Warning**: The long-term plan is to [phase out support for third-party cookies entirely](https://blog.chromium.org/2020/10/progress-on-privacy-sandbox-and.html), replacing them with privacy preserving alternatives. Setting `SameSite=None; Secure` on a cookie to allow it to be sent across schemes should only be considered a temporary solution in the migration towards full HTTPS.

You can enable these changes for testing in both Chrome and Firefox.

- From Chrome 86, enable `about://flags/#schemeful-same-site`. Track progress on the [Chrome Status page](https://chromestatus.com/feature/5096179480133632).
- From Firefox 79, set `network.cookie.sameSite.schemeful` to `true` via `about:config`. Track progress via [the Bugzilla issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1651119).

One of the main reasons for the change to `SameSite=Lax` as the default for cookies was to protect against [Cross-Site Request Forgery (CSRF)](https://developer.mozilla.org/en-US/docs/Glossary/CSRF). However, insecure HTTP traffic still presents an opportunity for network attackers to tamper with cookies that will then be used on the secure HTTPS version of the site. Creating this additional cross-site boundary between schemes provides further defense against these attacks.

## Common cross-scheme scenarios <a href="#common-cross-scheme-scenarios" class="w-headline-link">#</a>

**Key Term**: In the examples below where the URLs all have the same registrable domain, e.g. site.example, but different schemes, for example, **http**://site.example vs. **https**://site.example, they are referred to as **cross-scheme** to each other.

### Navigation <a href="#navigation" class="w-headline-link">#</a>

Navigating between cross-scheme versions of a website (for example, linking from **http**://site.example to **https**://site.example) would previously allow `SameSite=Strict` cookies to be sent. This is now treated as a cross-site navigation which means `SameSite=Strict` cookies will be blocked.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format" alt="Cross-scheme navigation from HTTP to HTTPS." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yDViqKg9eeEeAEiCNqe4.png?auto=format&amp;w=1600 1600w" width="800" height="342" /><figcaption>Cross-scheme navigation from HTTP to HTTPS.</figcaption></figure><table><tbody><tr class="odd"><td></td><td><strong>HTTP → HTTPS</strong></td><td><strong>HTTPS → HTTP</strong></td></tr><tr class="even"><td><code>SameSite=Strict</code></td><td>⛔ Blocked</td><td>⛔ Blocked</td></tr><tr class="odd"><td><code>SameSite=Lax</code></td><td>✓ Allowed</td><td>✓ Allowed</td></tr><tr class="even"><td><code>SameSite=None;Secure</code></td><td>✓ Allowed</td><td>⛔ Blocked</td></tr></tbody></table>

### Loading subresources <a href="#loading-subresources" class="w-headline-link">#</a>

**Warning**: All major browsers block [active mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) such as scripts or iframes. Additionally, browsers including [Chrome](https://blog.chromium.org/2019/10/no-more-mixed-messages-about-https.html) and [Firefox](https://groups.google.com/g/mozilla.dev.platform/c/F163Jz32oYY) are working toward upgrading or blocking passive mixed content.

Any changes you make here should only be considered a temporary fix while you work to upgrade to full HTTPS.

Examples of subresources include images, iframes, and network requests made with XHR or Fetch.

Loading a cross-scheme subresource on a page would previously allow `SameSite=Strict` or `SameSite=Lax` cookies to be sent or set. Now this is treated the same way as any other third-party or cross-site subresource which means that any `SameSite=Strict` or `SameSite=Lax` cookies will be blocked.

Additionally, even if the browser does allow resources from insecure schemes to be loaded on a secure page, all cookies will be blocked on these requests as third-party or cross-site cookies require `Secure`.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format" alt="An HTTP page including a cross-scheme subresource via HTTPS." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GgR6Yln1f9JGkt04exRC.png?auto=format&amp;w=1600 1600w" width="800" height="285" /><figcaption>An HTTP page including a cross-scheme subresource via HTTPS.</figcaption></figure><table><tbody><tr class="odd"><td></td><td><strong>HTTP → HTTPS</strong></td><td><strong>HTTPS → HTTP</strong></td></tr><tr class="even"><td><code>SameSite=Strict</code></td><td>⛔ Blocked</td><td>⛔ Blocked</td></tr><tr class="odd"><td><code>SameSite=Lax</code></td><td>⛔ Blocked</td><td>⛔ Blocked</td></tr><tr class="even"><td><code>SameSite=None;Secure</code></td><td>✓ Allowed</td><td>⛔ Blocked</td></tr></tbody></table>

### POSTing a form <a href="#posting-a-form" class="w-headline-link">#</a>

Posting between cross-scheme versions of a website would previously allow cookies set with `SameSite=Lax` or `SameSite=Strict` to be sent. Now this is treated as a cross-site POST—only `SameSite=None` cookies can be sent. You may encounter this scenario on sites that present the insecure version by default, but upgrade users to the secure version on submission of the sign-in or check-out form.

As with subresources, if the request is going from a secure, e.g. HTTPS, to an insecure, e.g. HTTP, context then all cookies will be blocked on these requests as third-party or cross-site cookies require `Secure`.

**Warning**: The best solution here is to ensure both the form page and destination are on a secure connection such as HTTPS. This is especially important if the user is entering any sensitive information into the form.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format" alt="Cross-scheme form submission from HTTP to HTTPS." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ud9LkDeGJUWHObifD718.png?auto=format&amp;w=1600 1600w" width="800" height="376" /><figcaption>Cross-scheme form submission from HTTP to HTTPS.</figcaption></figure><table><tbody><tr class="odd"><td></td><td><strong>HTTP → HTTPS</strong></td><td><strong>HTTPS → HTTP</strong></td></tr><tr class="even"><td><code>SameSite=Strict</code></td><td>⛔ Blocked</td><td>⛔ Blocked</td></tr><tr class="odd"><td><code>SameSite=Lax</code></td><td>⛔ Blocked</td><td>⛔ Blocked</td></tr><tr class="even"><td><code>SameSite=None;Secure</code></td><td>✓ Allowed</td><td>⛔ Blocked</td></tr></tbody></table>

## How can I test my site? <a href="#how-can-i-test-my-site" class="w-headline-link">#</a>

Developer tooling and messaging are available in Chrome and Firefox.

From Chrome 86, the [Issue tab in DevTools](https://developers.google.com/web/tools/chrome-devtools/issues) will include Schemeful Same-Site issues. You may see the following issues highlighted for your site.

Navigation issues:

- "Migrate entirely to HTTPS to continue having cookies sent on same-site requests"—A warning that the cookie **will be** blocked in a future version of Chrome.
- "Migrate entirely to HTTPS to have cookies sent on same-site requests"—A warning that the cookie **has been** blocked.

Subresource loading issues:

- "Migrate entirely to HTTPS to continue having cookies sent to same-site subresources" or "Migrate entirely to HTTPS to continue allowing cookies to be set by same-site subresources"—Warnings that the cookie **will be** blocked in a future version of Chrome.
- "Migrate entirely to HTTPS to have cookies sent to same-site subresources" or "Migrate entirely to HTTPS to allow cookies to be set by same-site subresources"—Warnings that the cookie **has been** blocked. The latter warning can also appear when POSTing a form.

More detail is available in [Testing and Debugging Tips for Schemeful Same-Site](https://www.chromium.org/updates/schemeful-same-site/testing-and-debugging-tips-for-schemeful-same-site).

From Firefox 79, with `network.cookie.sameSite.schemeful` set to `true` via `about:config` the console will display message for Schemeful Same-Site issues. You may see the following on your site:

- "Cookie `cookie_name` **will be soon** treated as cross-site cookie against `http://site.example/` because the scheme does not match."
- "Cookie `cookie_name` **has been** treated as cross-site against `http://site.example/` because the scheme does not match."

## FAQ <a href="#faq" class="w-headline-link">#</a>

### My site is already fully available on HTTPS, why am I seeing issues in my browser's DevTools? <a href="#my-site-is-already-fully-available-on-https-why-am-i-seeing-issues-in-my-browser&#39;s-devtools" class="w-headline-link">#</a>

It's possible that some of your links and subresources still point to insecure URLs.

One way to fix this issue is to use [HTTP Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) and the `includeSubDomain` directive. With HSTS + `includeSubDomain` even if one of your pages accidentally includes an insecure link the browser will automatically use the secure version instead.

### What if I can't upgrade to HTTPS? <a href="#what-if-i-can&#39;t-upgrade-to-https" class="w-headline-link">#</a>

While we strongly recommend that you upgrade your site entirely to HTTPS to protect your users, if you're unable to do so yourself we suggest speaking with your hosting provider to see if they can offer that option. If you self-host, then [Let's Encrypt](https://letsencrypt.org/) provides a number of tools to install and configure a certificate. You can also investigate moving your site behind a CDN or other proxy that can provide the HTTPS connection.

If that's still not possible then try relaxing the `SameSite` protection on affected cookies.

- In cases where only `SameSite=Strict` cookies are being blocked you can lower the protection to `Lax`.
- In cases where both `Strict` and `Lax` cookies are being blocked and your cookies are being sent to (or set from) a secure URL you can lower the protections to `None`.
  - This workaround will **fail** if the URL you're sending cookies to (or setting them from) is insecure. This is because `SameSite=None` requires the `Secure` attribute on cookies which means those cookies may not be sent or set over an insecure connection. In this case you will be unable to access that cookie until your site is upgraded to HTTPS.
  - Remember, this is only temporary as eventually third-party cookies will be phased out entirely.

### How does this affect my cookies if I haven't specified a `SameSite` attribute? <a href="#how-does-this-affect-my-cookies-if-i-haven&#39;t-specified-a-samesite-attribute" class="w-headline-link">#</a>

Cookies without a `SameSite` attribute are treated as if they specified `SameSite=Lax` and the same cross-scheme behavior applies to these cookies as well. Note that the temporary exception to unsafe methods still applies, see [the Lax + POST mitigation in the Chromium `SameSite` FAQ](https://www.chromium.org/updates/same-site/faq) for more information.

### How are WebSockets affected? <a href="#how-are-websockets-affected" class="w-headline-link">#</a>

WebSocket connections will still be considered same-site if they're the same secureness as the page.

Same-site:

- `wss://` connection from `https://`
- `ws://` connection from `http://`

Cross-site:

- `wss://` connection from `http://`
- `ws://` connection from `https://`

_Photo by [Julissa Capdevilla](https://unsplash.com/photos/wNjgWrEXAL0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

<a href="/tags/privacy/" class="w-chip">Privacy</a> <a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Nov 20, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/schemeful-samesite/index.md)

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
