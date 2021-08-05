<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format" alt="Black and white photograph of hand holding token" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/okxi2ttRG3h1Z4F3cylI.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#getting-started-with-trust-tokens" class="w-toc__header--link">Getting started with Trust Tokens</a>

- [Summary](#summary)
- [Why do we need Trust Tokens?](#why-do-we-need-trust-tokens)
- [What's in the Trust Tokens proposal?](#what's-in-the-trust-tokens-proposal)
- [Sample API usage](#sample-api-usage)
- [Trust token issuance](#trust-token-issuance)
- [Trust token redemption](#trust-token-redemption)
- [Privacy considerations](#privacy-considerations)
- [Security considerations](#security-considerations)
- [Request mechanisms](#request-mechanisms)
- [Find out more](#find-out-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Getting started with Trust Tokens

Trust Tokens is a new API to help combat fraud and distinguish bots from real humans, without passive tracking.

Jun 22, 2020 <span class="w-author__separator">•</span> Updated Feb 1, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Dutton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samdutton/)

<a href="/authors/samdutton/" class="w-author__name-link">Sam Dutton</a>

- <a href="https://twitter.com/sw12" class="w-author__link">Twitter</a>
- <a href="https://github.com/samdutton" class="w-author__link">GitHub</a>

## Summary <a href="#summary" class="w-headline-link">#</a>

Trust tokens enable an origin to issue cryptographic tokens to a user it trusts. The tokens are stored by the user's browser. The browser can then use the tokens in other contexts to evaluate the user's authenticity.

The Trust Token API enables trust of a user in one context to be conveyed to another context without identifying the user or linking the two identities.

You can try out Trust Tokens with our [demo](https://trust-token-demo.glitch.me) and, from Chrome 89, [inspect Trust Tokens](https://developers.google.com/web/updates/2021/01/devtools#trust-token) in the Chrome DevTools **Network** and **Application** tabs.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format" alt="Trust Tokens in the Chrome DevTools Network tab." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/krrI292OLd6awb4dxkN0.jpg?auto=format&amp;w=1600 1600w" width="800" height="584" /><figcaption>Trust Tokens in the Chrome DevTools <strong>Network</strong> tab.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format" alt="Trust Tokens in the Chrome DevTools Application tab." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/cwR9JdoVo1M4VDovP2oM.jpg?auto=format&amp;w=1600 1600w" width="800" height="584" /><figcaption>Trust Tokens in the Chrome DevTools <strong>Application</strong> tab.</figcaption></figure>The Privacy Sandbox is a series of proposals to satisfy third-party use cases without third-party cookies or other tracking mechanisms. See [Digging into the Privacy Sandbox](/digging-into-the-privacy-sandbox) for an overview of all the proposals.

**This proposal needs your feedback!** If you have comments, please [create an issue](https://github.com/WICG/trust-token-api/issues/new) on the [Trust Token explainer](https://github.com/WICG/trust-token-api) repository.

## Why do we need Trust Tokens? <a href="#why-do-we-need-trust-tokens" class="w-headline-link">#</a>

The web needs ways to establish trust signals which show that a user is who they say they are, and not a bot pretending to be a human, or a malicious third-party defrauding a real person or service. Fraud protection is particularly important for advertisers, ad providers, and CDNs.

Unfortunately, many existing mechanisms to gauge and propagate trustworthiness—to work out if an interaction with a site is from a real human, for example—take advantage of techniques that can also be used for fingerprinting.

**Key Term**: **Fingerprinting** enables sites to identify and track individual users by getting data about their device, operating system, and browser setup (such as language preferences, [user agent](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent), and available fonts) or changes in device state. This may be done on the server by checking request headers or on the client with JavaScript.

Fingerprinting uses mechanisms that users aren't aware of and can't control. Sites such as [Panopticlick](https://panopticlick.eff.org/) and [amiunique.org](https://amiunique.org/) show how fingerprint data can be combined to identify you as an individual.

The API must preserve privacy, enabling trust to be propagated across sites without individual user tracking.

## What's in the Trust Tokens proposal? <a href="#what&#39;s-in-the-trust-tokens-proposal" class="w-headline-link">#</a>

The web relies on building trust signals to detect fraud and spamming. One way to do this is by tracking browsing with global, cross-site per-user identifiers. For a privacy-preserving API, that's not acceptable.

From the proposal [**explainer**](https://github.com/WICG/trust-token-api#overview):

> This API proposes a new per-origin storage area for "Privacy Pass" style cryptographic tokens, which are accessible in third party contexts. These tokens are non-personalized and cannot be used to track users, but are cryptographically signed so they cannot be forged.
>
> When an origin is in a context where they trust the user, they can issue the browser a batch of tokens, which can be "spent" at a later time in a context where the user would otherwise be unknown or less trusted. Crucially, the tokens are indistinguishable from one another, preventing websites from tracking users through them.
>
> We further propose an extension mechanism for the browser to sign outgoing requests with keys bound to a particular token redemption.

## Sample API usage <a href="#sample-api-usage" class="w-headline-link">#</a>

The following is adapted from [sample code in the API explainer](https://github.com/WICG/trust-token-api#sample-api-usage).

The code in this post uses updated syntax available since Chrome 88.

Imagine that a user visits a news website (`publisher.example`) which embeds advertising from a third party ad network (`foo.example`). The user has previously used a social media site that issues trust tokens (`issuer.example`).

The sequence below shows how trust tokens work.

1. The user visits `issuer.example`.

2. `issuer.example` verifies the user is a human, and runs the following JavaScript:

    fetch('https://issuer.example/issue', {
      trustToken: {
        type: 'token-request'
      }
    });

3. The user's browser stores the trust tokens associated with `issuer.example`.

4. Some time later, the user visits `publisher.example`.

5. `publisher.example` wants to know if the user is a human, so they ask `issuer.example` by running the following JavaScript:

    fetch('https://issuer.example/redeem', {
      trustToken: {
        type: 'token-redemption'
      }
    });

With this code:

1.  The browser requests a redemption.
2.  The issuer returns a Redemption Record (RR) which indicates that at some point they issued a valid token to this browser.
3.  When the promise returned resolves, the RR can be used in subsequent resource requests.

6. `publisher.example` can then run the following JavaScript in a top-level document:

    fetch('foo.example/get-content', {
      trustToken: {
        type: 'send-redemption-record',
        issuers: ['https://issuer.example']
      }
    });

With this code:

1.  `foo.example` receives the RR and can parse the record to determine whether `issuer.example` thought this user was a human.
2.  `foo.example` responds accordingly.

## How can a website work out whether to trust you?

You might have shopping history with an ecommerce site, checkins on a location platform, or account history at a bank. Issuers might also look at other factors such as how long you've had an account, or other interactions (such as CAPTCHAs or form submission) that increase the issuer's trust in the likelihood that you're a real human.

### Trust token issuance <a href="#trust-token-issuance" class="w-headline-link">#</a>

If the user is deemed to be trustworthy by a trust token issuer such as `issuer.example`, the issuer can fetch trust tokens for the user by making a `fetch()` request with a new `trustToken` parameter:

    fetch('issuer.example/.well-known/trust-token', {
      trustToken: {
        type: 'token-request'
      }
    }).then(...)

This invokes an extension of the [Privacy Pass](https://privacypass.github.io/) issuance protocol using a [new cryptographic primitive](https://eprint.iacr.org/2020/072.pdf):

1.  Generate a set of pseudo-random numbers known as _nonces_.

2.  Blind the nonces (encode them so the issuer can't view their contents) and attach them to the request in a `Sec-Trust-Token` header.

3.  Send a POST request to the endpoint provided.

The endpoint responds with blinded tokens (signatures on the blind nonces), then the tokens are unblinded and stored internally together with the associated nonces by the browser as trust tokens.

### Trust token redemption <a href="#trust-token-redemption" class="w-headline-link">#</a>

A publisher site (such as `publisher.example` in the example above) can check if there are trust tokens available for the user:

    const userHasTokens = await document.hasTrustToken(<issuer>);

If there are tokens available, the publisher site can redeem them to get a redemption record:

    fetch('issuer.example/.well-known/trust-token', {
      ...
      trustToken: {
        type: 'token-redemption',
        refreshPolicy: 'none'
      }
      ...
    }).then(...)

Then the publisher site can send the RR to requests it makes using the following API:

    fetch('<url>', {
      ...
      trustToken: {
        type: 'send-redemption-record',
        issuers: [<issuer>, ...]
      }
      ...
    }).then(...);

The publisher should include the RR in requests that will require a trust token, such as posting a comment, liking a page, or voting in a poll.

Trust tokens are only accessible through options to Fetch, XHR, and the HTML `<iframe>` element: they cannot be accessed directly.

### Privacy considerations <a href="#privacy-considerations" class="w-headline-link">#</a>

Tokens are designed to be 'unlinkable'. An issuer can learn aggregate information about which sites its users visit, but can't link issuance with redemption: when a user redeems a token, the issuer can't tell the token apart from other tokens it has created. However, trust tokens currently do not exist in a vacuum: there are other ways an issuer could currently—in theory—join a user's identity across sites, such as third-party cookies and covert tracking techniques. It is important for sites to understand this ecosystem transition as they plan their support. This is a general aspect of the transition for many Privacy Sandbox APIs, so not discussed further here.

### Security considerations <a href="#security-considerations" class="w-headline-link">#</a>

**Trust token exhaustion:** a malicious site could deliberately deplete a user's supply of tokens from a particular issuer. There are several mitigations against this kind of attack, such as enabling issuers to provide many tokens at once, so users have an adequate supply of ensuring browsers only ever redeem one token per top-level page view.

**Double-spend prevention:** malware might attempt to access all of a user's trust tokens. However, tokens will run out over time, since every redemption is sent to the same token issuer, which can verify that each token is used only once. To mitigate risk, issuers could also sign fewer tokens.

### Request mechanisms <a href="#request-mechanisms" class="w-headline-link">#</a>

It might be possible to allow for sending RRs outside of `fetch()`, for example with navigation requests. Sites might also be able to include issuer data in HTTP response headers to enable token redemption in parallel with page loading.

**To reiterate: this proposal needs your feedback!** If you have comments, please [create an issue](https://github.com/WICG/trust-token-api/issues/new) on the Trust Token [explainer repository](https://github.com/WICG/trust-token-api).

## Find out more <a href="#find-out-more" class="w-headline-link">#</a>

- [Trust Tokens demo](https://trust-token-demo.glitch.me)
- [Digging in to the Privacy Sandbox](/digging-into-the-privacy-sandbox/)
- [Trust Token API Explainer](https://github.com/WICG/trust-token-api)
- [Chromium Projects: Trust Token API](https://sites.google.com/a/chromium.org/dev/updates/trust-token)
- [Intent to Implement: Trust Token API](https://groups.google.com/a/chromium.org/g/blink-dev/c/X9sF2uLe9rA/m/1xV5KEn2DgAJ)
- [Privacy Pass](https://privacypass.github.io/)
- [Extensions of Privacy Pass](https://eprint.iacr.org/2020/072.pdf)

---

Thanks to Kayce Basques, David Van Cleve, Steven Valdez, Tancrède Lepoint and Marshall Vale for their help with writing and reviewing this post.

Photo by [ZSun Fu](https://unsplash.com/photos/b4D7FKAghoE) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

<a href="/tags/privacy/" class="w-chip">Privacy</a> <a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Feb 1, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/trust-tokens/index.md)

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
