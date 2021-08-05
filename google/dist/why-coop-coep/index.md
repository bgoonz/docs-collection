<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/h8g1TQjkfkJSpWJrPakB.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#why-you-need-andquotcross-origin-isolatedandquot-for-powerful-features" class="w-toc__header--link">Why you need "cross-origin isolated" for powerful features</a>

- [Introduction](#introduction)
- [Background](#background)
- [Cross Origin Embedder Policy](#coep)
- [Cross Origin Resource Sharing](#cors)
- [Cross Origin Resource Policy](#corp)
- [Cross Origin Opener Policy](#coop)
- [Summary](#summary)
- [Resources](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Why you need "cross-origin isolated" for powerful features

Learn why cross-origin isolation is needed to use powerful features such as `SharedArrayBuffer`, `performance.measureUserAgentSpecificMemory()`, high resolution timer with better precision and the JS Self-Profiling API.

May 4, 2020 <span class="w-author__separator">•</span> Updated Apr 12, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eiji Kitamura" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/agektmr/)

<a href="/authors/agektmr/" class="w-author__name-link">Eiji Kitamura</a>

- <a href="https://twitter.com/agektmr" class="w-author__link">Twitter</a>
- <a href="https://github.com/agektmr" class="w-author__link">GitHub</a>
- <a href="https://blog.agektmr.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/HXHbHrl9qxcxCQK90yIc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Domenic Denicola" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/HXHbHrl9qxcxCQK90yIc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/HXHbHrl9qxcxCQK90yIc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/HXHbHrl9qxcxCQK90yIc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/HXHbHrl9qxcxCQK90yIc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/HXHbHrl9qxcxCQK90yIc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/domenic/)

<a href="/authors/domenic/" class="w-author__name-link">Domenic Denicola</a>

- <a href="https://twitter.com/domenic" class="w-author__link">Twitter</a>
- <a href="https://github.com/domenic" class="w-author__link">GitHub</a>

## Introduction <a href="#introduction" class="w-headline-link">#</a>

In [Making your website "cross-origin isolated" using COOP and COEP](/coop-coep/) we explained how to adopt to "cross-origin isolated" state using COOP and COEP. This is a companion article that explains why cross-origin isolation is required to enable powerful features on the browser.

**Key Term**: This article uses many similar-sounding terminologies. To make things clearer, let's define them:

- [COEP: Cross Origin Embedder Policy](https://wicg.github.io/cross-origin-embedder-policy/)
- [COOP: Cross Origin Opener Policy](https://github.com/whatwg/html/pull/5334/files)
- [CORP: Cross Origin Resource Policy](<https://developer.mozilla.org/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>)
- [CORS: Cross Origin Resource Sharing](https://developer.mozilla.org/docs/Web/HTTP/CORS)
- [CORB: Cross Origin Read Blocking](https://www.chromium.org/Home/chromium-security/corb-for-developers)

## Background <a href="#background" class="w-headline-link">#</a>

The web is built on the [same-origin policy](/same-origin-policy/): a security feature that restricts how documents and scripts can interact with resources from another origin. This principle restricts the ways websites can access cross-origin resources. For example, a document from `https://a.example` is prevented from accessing data hosted at `https://b.example`.

However, the same-origin policy has had some historical exceptions. Any website can:

- Embed cross-origin iframes
- Include cross-origin resources such as images or scripts
- Open cross-origin popup windows with a DOM reference

If the web could be designed from scratch, these exceptions wouldn't exist. Unfortunately, by the time the web community realized the key benefits of a strict same-origin policy, the web was already relying on these exceptions.

The security side-effects of such a lax same-origin policy were patched in two ways. One way was through the introduction of a new protocol called [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) whose purpose is to make sure that the server allows sharing a resource with a given origin. The other way is by implicitly removing direct script access to cross-origin resources while preserving backward compatibility. Such cross-origin resources are called "opaque" resources. For example, this is why manipulating the pixels of a cross-origin image via `CanvasRenderingContext2D` fails unless CORS is applied to the image.

All these policy decisions are happening within a browsing context group.

<img src="https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format" alt="Browsing Context Group" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/z1Gr4mmJMo383dR9FQUk.png?auto=format&amp;w=1600 1600w" width="800" height="469" />

For a long time, the combination of CORS and opaque resources was enough to make browsers safe. Sometimes edge cases (such as [JSON vulnerabilities](https://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)) were discovered, and needed to be patched, but overall the principle of not allowing direct read access to the raw bytes of cross-origin resources was successful.

This all changed with [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), which makes any data that is loaded to the same browsing context group as your code potentially readable. By measuring the time certain operations take, attackers can guess the contents of the CPU caches, and through that, the contents of the process' memory. Such timing attacks are possible with low-granularity timers that exist in the platform, but can be sped up with high-granularity timers, both explicit (like `performance.now()`) and implicit (like `SharedArrayBuffer`s). If `evil.com` embeds a cross-origin image, they can use a Spectre attack to read its pixel data, which makes protections relying on "opaqueness" ineffective.

<img src="https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format" alt="Spectr" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wN636enwMtBrrOfhzEoq.png?auto=format&amp;w=1600 1600w" width="800" height="500" />

Ideally, all cross-origin requests should be explicitly vetted by the server that owns the resource. If vetting is not provided by the resource-owning server, then the data will never make it into the browsing context group of an evil actor, and therefore will stay out of reach of any Spectre attacks a web page could carry out. We call it a cross-origin isolated state. This is exactly what COOP+COEP is about.

Under a cross-origin isolated state, the requesting site is considered less dangerous and this unlocks powerful features such as `SharedArrayBuffer`, `performance.measureUserAgentSpecificMemory()`, [high resolution timers](https://www.w3.org/TR/hr-time/) with better precision and the JS Self-Profiling API which could otherwise be used for Spectre-like attacks. It also prevents modifying `document.domain`.

### Cross Origin Embedder Policy <a href="#coep" class="w-headline-link">#</a>

[Cross Origin Embedder Policy (COEP)](https://wicg.github.io/cross-origin-embedder-policy/) prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS). With this feature, you can declare that a document cannot load such resources.

<img src="https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format" alt="How COEP works" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/MAhaVZdShm8tRntWieU4.png?auto=format&amp;w=1600 1600w" width="800" height="410" />

To activate this policy, append the following HTTP header to the document:

    Cross-Origin-Embedder-Policy: require-corp

The `require-corp` keyword is the only accepted value for COEP. This enforces the policy that the document can only load resources from the same origin, or resources explicitly marked as loadable from another origin.

For resources to be loadable from another origin, they need to support either Cross Origin Resource Sharing (CORS) or Cross Origin Resource Policy (CORP).

### Cross Origin Resource Sharing <a href="#cors" class="w-headline-link">#</a>

If a cross origin resource supports [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), you may use the [`crossorigin` attribute](https://developer.mozilla.org/docs/Web/HTML/Attributes/crossorigin) to load it to your web page without being blocked by COEP.

    <img src="https://third-party.example.com/image.jpg" crossorigin>

For example, if this image resource is served with CORS headers, use the `crossorigin` attribute so that the request to fetch the resource will use [CORS mode](https://developer.mozilla.org/docs/Web/API/Request/mode). This also prevents the image from being loaded unless it sets CORS headers.

Similarly, you may fetch cross origin data through the `fetch()` method, which doesn't require special handling as long as the server responds with [the right HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers).

### Cross Origin Resource Policy <a href="#corp" class="w-headline-link">#</a>

[Cross Origin Resource Policy (CORP)](https://developer.mozilla.org/docs/Web/HTTP/Cross-Origin_Resource_Policy_%28CORP%29) was originally introduced as an opt-in to protect your resources from being loaded by another origin. In the context of COEP, CORP can specify the resource owner's policy for who can load a resource.

The `Cross-Origin-Resource-Policy` header takes three possible values:

    Cross-Origin-Resource-Policy: same-site

Resources that are marked `same-site` can only be loaded from the same site.

    Cross-Origin-Resource-Policy: same-origin

Resources that are marked `same-origin` can only be loaded from the same origin.

    Cross-Origin-Resource-Policy: cross-origin

Resources that are marked `cross-origin` can be loaded by any website. ([This value](https://mikewest.github.io/corpp/#integration-fetch) was added to the CORP spec along with COEP.)

Once you add the COEP header, you won't be able to bypass the restriction by using service workers. If the document is protected by a COEP header, the policy is respected before the response enters the document process, or before it enters the service worker that is controlling the document.

### Cross Origin Opener Policy <a href="#coop" class="w-headline-link">#</a>

[Cross Origin Opener Policy (COOP)](https://github.com/whatwg/html/pull/5334/files) allows you to ensure that a top-level window is isolated from other documents by putting them in a different browsing context group, so that they cannot directly interact with the top-level window. For example, if a document with COOP opens a pop-up, its `window.opener` property will be `null`. Also, the `.closed` property of the opener's reference to it will return `true`.

<img src="https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format" alt="COOP" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/eUu74n3GIlK1fj9ACxF8.png?auto=format&amp;w=1600 1600w" width="800" height="452" />

The `Cross-Origin-Opener-Policy` header takes three possible values:

    Cross-Origin-Opener-Policy: same-origin

Documents that are marked `same-origin` can share the same browsing context group with same-origin documents that are also explicitly marked `same-origin`.

<img src="https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format" alt="COOP" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/he8FaRE2ef67lamrFG60.png?auto=format&amp;w=1600 1600w" width="800" height="507" />

    Cross-Origin-Opener-Policy: same-origin-allow-popups

A top-level document with `same-origin-allow-popups` retains references to any of its popups which either don't set COOP or which opt out of isolation by setting a COOP of `unsafe-none`.

<img src="https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format" alt="COOP" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/AJdm6vFq4fQXUWOTFeFa.png?auto=format&amp;w=1600 1600w" width="800" height="537" />

    Cross-Origin-Opener-Policy: unsafe-none

`unsafe-none` is the default and allows the document to be added to its opener's browsing context group unless the opener itself has a COOP of `same-origin`.

The [`noopener`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features) attribute has a similar effect to what you would expect from COOP except that it works only from the opener side. (You can't disassociate your window when it is opened by a third party.) When you attach `noopener` by doing something such as `window.open(url, '_blank', 'noopener')` or `<a target="_blank" rel="noopener">`, you can deliberately disassociate your window from the opened window.

While `noopener` can be replaced by COOP, it's still useful for when you want to protect your website in browsers that don't support COOP.

## Summary <a href="#summary" class="w-headline-link">#</a>

If you want guaranteed access to powerful features like `SharedArrayBuffer`, `performance.measureUserAgentSpecificMemory()`, [high resolution timers](https://www.w3.org/TR/hr-time/) with better precision or JS Self-Profiling API, just remember that your document needs to use both COEP with the value of `require-corp` and COOP with the value of `same-origin`. In the absence of either, the browser will not guarantee sufficient isolation to safely enable those powerful features. You can determine your page's situation by checking if [`self.crossOriginIsolated`](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated) returns `true`.

Learn the steps to implement this at [Making your website "cross-origin isolated" using COOP and COEP](/coop-coep/).

## Resources <a href="#resources" class="w-headline-link">#</a>

- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit)
- [Planned changes to shared memory - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes)

<a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Apr 12, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/why-coop-coep/index.md)

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
