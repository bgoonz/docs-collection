<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format" alt="A screenshot of JavaScript code setting a strict Content Security Policy." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/3lmWcR1VGYVMicNlBh4aZWBTcSg1/mhE0NYvP3JFyvNyiQ1dj.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#mitigate-cross-site-scripting-(xss)-with-a-strict-content-security-policy-(csp)" class="w-toc__header--link">Mitigate cross-site scripting (XSS) with a strict Content Security Policy (CSP)</a>

- [Why should you deploy a strict Content Security Policy (CSP)?](<#why-should-you-deploy-a-strict-content-security-policy-(csp)>)
- [Why a strict CSP is recommended over allowlist CSPs](#why-a-strict-csp-is-recommended-over-allowlist-csps)
- [What is a strict Content Security Policy?](#what-is-a-strict-content-security-policy)
- [Adopting a strict CSP](#adopting-a-strict-csp)
- [Step 1: Decide if you need a nonce- or hash-based CSP](#step-1:-decide-if-you-need-a-nonce-or-hash-based-csp)
- [Step 2: Set a strict CSP and prepare your scripts](#step-2:-set-a-strict-csp-and-prepare-your-scripts)
- [Step 3: Refactor HTML templates and client-side code to remove patterns incompatible with CSP](#step-3:-refactor-html-templates-and-client-side-code-to-remove-patterns-incompatible-with-csp)
- [Step 4: Add fallbacks to support Safari and older browsers](#step-4:-add-fallbacks-to-support-safari-and-older-browsers)
- [Step 5: Deploy your CSP](#step-5:-deploy-your-csp)
- [Limitations](#limitations)
- [Further reading](#further-reading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Mitigate cross-site scripting (XSS) with a strict Content Security Policy (CSP)

How to deploy a CSP based on script nonces or hashes as a defense-in-depth against cross-site scripting.

Mar 15, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Lukas Weichselbaum" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/lwe/)

<a href="/authors/lwe/" class="w-author__name-link">Lukas Weichselbaum</a>

- <a href="https://twitter.com/we1x" class="w-author__link">Twitter</a>
- <a href="https://github.com/lweichselbaum" class="w-author__link">GitHub</a>
- <a href="https://webappsec.dev" class="w-author__link">Blog</a>

## Why should you deploy a strict Content Security Policy (CSP)? <a href="#why-should-you-deploy-a-strict-content-security-policy-(csp)" class="w-headline-link">#</a>

[Cross-site scripting (XSS)](https://www.google.com/about/appsecurity/learning/xss/)—the ability to inject malicious scripts into a web application—has been one of the biggest web security vulnerabilities for over a decade.

[Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is an added layer of security that helps to mitigate XSS. Configuring a CSP involves adding the Content-Security-Policy HTTP header to a web page and setting values to control what resources the user agent is allowed to load for that page. This article explains how to use a CSP based on nonces or hashes to mitigate XSS instead of the commonly used host-allowlist-based CSPs which often leave the page exposed to XSS as they can be [bypassed in most configurations](https://research.google.com/pubs/pub45542.html).

**Key Term**: A _nonce_ is a random number used only once that can be used to mark a `<script>` tag as trusted.

**Key Term**: A hash function is a mathematical function that converts an input value into a compressed numerical value—a hash. A _hash_ (such as [SHA-256](https://en.wikipedia.org/wiki/SHA-2)) can be used to mark an inline `<script>` tag as trusted.

A Content Security Policy based on nonces or hashes is often called a _strict CSP_. When an application uses a strict CSP, attackers who find HTML injection flaws will generally not be able to use them to force the browser to execute malicious scripts in the context of the vulnerable document. This is because strict CSP only permits hashed scripts or scripts with the correct nonce value generated on the server, so attackers cannot execute the script without knowing the correct nonce for a given response.

To protect your site from XSS, make sure to sanitize user input _and_ use CSP as an extra security layer. CSP is a [defense-in-depth](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) technique that can prevent the execution of malicious scripts, but it's not a substitute for avoiding (and promptly fixing) XSS bugs.

### Why a strict CSP is recommended over allowlist CSPs <a href="#why-a-strict-csp-is-recommended-over-allowlist-csps" class="w-headline-link">#</a>

If your site already has a CSP that looks like this: `script-src www.googleapis.com`, it may not be effective against cross-site scripting! This type of CSP is called an allowlist CSP and it has a couple of downsides:

- It requires a lot of customization.
- It can be [bypassed in most configurations](https://research.google.com/pubs/pub45542.html).

This makes allowlist CSPs generally ineffective at preventing attackers from exploiting XSS. That's why it's recommended to use a strict CSP based on cryptographic nonces or hashes, which avoids the pitfalls outlined above.

Allowlist CSP

- Doesn't effectively protect your site. ❌
- Must be highly customized. 😓

Strict CSP

- Effectively protects your site. ✅
- Always has the same structure. 😌

## What is a strict Content Security Policy? <a href="#what-is-a-strict-content-security-policy" class="w-headline-link">#</a>

A strict Content Security Policy has the following structure and is enabled by setting one of the following HTTP response headers:

- **Nonce-based strict CSP**

<!-- -->

    Content-Security-Policy:
      script-src 'nonce-{RANDOM}' 'strict-dynamic';
      object-src 'none';
      base-uri 'none';

<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/er4BaGCJzBwDaESFKfZd.jpg?auto=format&amp;w=1600 1600w" width="800" height="279" />

- **Hash-based strict CSP**

<!-- -->

    Content-Security-Policy:
      script-src 'sha256-{HASHED_INLINE_SCRIPT}' 'strict-dynamic';
      object-src 'none';
      base-uri 'none';

This is the most stripped-down version of a strict CSP. You'll need to tweak it to make it effective across browsers. See [add a fallback to support Safari and older browsers](#step-4:-add-fallbacks-to-support-safari-and-older-browsers) for details.

The following properties make a CSP like the one above "strict" and hence secure:

- Uses nonces `'nonce-{RANDOM}'` or hashes `'sha256-{HASHED_INLINE_SCRIPT}'` to indicate which `<script>` tags are trusted by the site's developer and should be allowed to execute in the user's browser.

- Sets [`'strict-dynamic'`](https://www.w3.org/TR/CSP3/#strict-dynamic-usage) to reduce the effort of deploying a nonce- or hash-based CSP by automatically allowing the execution of scripts that are created by an already trusted script. This also unblocks the use of most third party JavaScript libraries and widgets.

- Not based on URL allowlists and therefore doesn't suffer from [common CSP bypasses](https://speakerdeck.com/lweichselbaum/csp-is-dead-long-live-strict-csp-deepsec-2016?slide=15).

- Blocks untrusted inline scripts like inline event handlers or `javascript:` URIs.

- Restricts `object-src` to disable dangerous plugins such as Flash.

- Restricts `base-uri` to block the injection of `<base>` tags. This prevents attackers from changing the locations of scripts loaded from relative URLs.

Another advantage of a strict CSP is that the CSP always has the same structure and doesn't need to be customized for your application.

## Adopting a strict CSP <a href="#adopting-a-strict-csp" class="w-headline-link">#</a>

To adopt a strict CSP, you need to:

1.  Decide if your application should set a nonce- or hash-based CSP.
2.  Copy the CSP from the [What is a strict Content Security Policy](#what-is-a-strict-content-security-policy) section and set it as a response header across your application.
3.  Refactor HTML templates and client-side code to remove patterns that are incompatible with CSP.
4.  Add fallbacks to support Safari and older browsers.
5.  Deploy your CSP.

You can use [Lighthouse](https://developers.google.com/web/tools/lighthouse) (v7.3.0 and above with flag `--preset=experimental`) **Best Practices** audit throughout this process to check whether your site has a CSP, and whether it's strict enough to be effective against XSS.

<img src="https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format" alt="Lighthouse report warning that no CSP is found in enforcement mode." class="w-screenshot" sizes="(min-width: 730px) 730px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/9B7J9oWjgsWbuE84mmxDaY37Wpw2/42a4iEEKsD4T3yU47vNQ.png?auto=format&amp;w=1460 1460w" width="730" height="78" />

### Step 1: Decide if you need a nonce- or hash-based CSP <a href="#step-1:-decide-if-you-need-a-nonce-or-hash-based-csp" class="w-headline-link">#</a>

There are two types of strict CSPs, nonce- and hash-based. Here's how they work:

- **Nonce-based CSP**: You generate a random number _at runtime_, include it in your CSP, and associate it with every script tag in your page. An attacker can't include and run a malicious script in your page, because they would need to guess the correct random number for that script. This only works if the number is not guessable and newly generated at runtime for every response.
- **Hash-based CSP**: The hash of every inline script tag is added to the CSP. Note that each script has a different hash. An attacker can't include and run a malicious script in your page, because the hash of that script would need to be present in your CSP.

Criteria for choosing a strict CSP approach:

<table><caption>Criteria for choosing a strict CSP approach</caption><thead><tr class="header"><th>Nonce-based CSP</th><th>For HTML pages rendered on the server where you can create a new random token (nonce) for every response.</th></tr></thead><tbody><tr class="odd"><td>Hash-based CSP</td><td>For HTML pages served statically or those that need to be cached. For example, single-page web applications built with frameworks such as Angular, React or others, that are statically served without server-side rendering.</td></tr></tbody></table>

### Step 2: Set a strict CSP and prepare your scripts <a href="#step-2:-set-a-strict-csp-and-prepare-your-scripts" class="w-headline-link">#</a>

When setting a CSP, you have a few options:

- Report-only mode (`Content-Security-Policy-Report-Only`) or enforcement mode (`Content-Security-Policy`). In report-only, the CSP won't block resources yet—nothing will break—but you'll be able to see errors and receive reports for what would have been blocked. Locally, when you're in the process of setting a CSP, this doesn't really matter, because both modes will show you the errors in the browser console. If anything, enforcement mode will make it even easier for you to see blocked resources and tweak your CSP, since your page will look broken. Report-only mode becomes most useful later in the process (see [Step 5](#step-5:-deploy-your-csp)).
- Header or HTML `<meta>` tag. For local development, a `<meta>` tag may be more convenient for tweaking your CSP and quickly seeing how it affects your site. However:
  - Later on, when deploying your CSP in production, it is recommended to set it as an HTTP header.
  - If you want to set your CSP in report-only mode, you'll need to set it as a header—CSP meta tags don't support report-only mode.

<span id="nonce-based-csp"></span>

## Option A: Nonce-based CSP

Set the following `Content-Security-Policy` HTTP response header in your application:

    Content-Security-Policy:
      script-src 'nonce-{RANDOM}' 'strict-dynamic';
      object-src 'none';
      base-uri 'none';

**Caution**:

Replace the `{RANDOM}` placeholder with a _random_ nonce that is regenerated **on every server response**.

#### Generate a nonce for CSP <a href="#generate-a-nonce-for-csp" class="w-headline-link">#</a>

A nonce is a random number used only once per page load. A nonce-based CSP can only mitigate XSS if the nonce value is **not guessable** by an attacker. A nonce for CSP needs to be:

- A cryptographically **strong random** value (ideally 128+ bits in length)
- Newly **generated for every response**
- Base64 encoded

Here are some examples on how to add a CSP nonce in server-side frameworks:

- [Django (python)](https://django-csp.readthedocs.io/en/latest/nonce.html)
- Express (JavaScript):

<!-- -->

    const app = express();
    app.get('/', function(request, response) {
        // Generate a new random nonce value for every response.
        const nonce = crypto.randomBytes(16).toString("base64");
        // Set the strict nonce-based CSP response header
        const csp = `script-src 'nonce-${nonce}' 'strict-dynamic' https:; object-src 'none'; base-uri 'none';`;
        response.set("Content-Security-Policy", csp);
        // Every <script> tag in your application should set the `nonce` attribute to this value.
        response.render(template, { nonce: nonce });
      });
    }

#### Add a `nonce` attribute to `<script>` elements <a href="#add-a-nonce-attribute-to-lessscriptgreater-elements" class="w-headline-link">#</a>

With a nonce-based CSP, every `<script>` element must have a `nonce` attribute which matches the random nonce value specified in the CSP header (all scripts can have the same nonce). The first step is to add these attributes to all scripts:

Blocked by CSP

    <script src="/path/to/script.js"></script>
    <script>foo()</script>

CSP will block these scripts, because they don't have `nonce` attributes.

Allowed by CSP

    <script nonce="${NONCE}" src="/path/to/script.js"></script>
    <script nonce="${NONCE}">foo()</script>

CSP will allow the execution of these scripts if `${NONCE}` is replaced with a value matching the nonce in the CSP response header. Note that some browsers will hide the `nonce` attribute when inspecting the page source.

**Gotchas!**

With `'strict-dynamic'` in your CSP, you'll only have to add nonces to `<script>` tags that are present in the initial HTML response.`'strict-dynamic'` allows the execution of scripts dynamically added to the page, as long as they were loaded by a safe, already-trusted script (see the [specification](https://www.w3.org/TR/CSP3/#strict-dynamic-usage)).

<span id="hash-based-csp"></span>

## Option B: Hash-based CSP Response Header

Set the following `Content-Security-Policy` HTTP response header in your application:

    Content-Security-Policy:
      script-src 'sha256-{HASHED_INLINE_SCRIPT}' 'strict-dynamic';
      object-src 'none';
      base-uri 'none';

For several inline scripts, the syntax is as follows: `'sha256-{HASHED_INLINE_SCRIPT_1}' 'sha256-{HASHED_INLINE_SCRIPT_2}'`.

**Caution**: The `{HASHED_INLINE_SCRIPT}` placeholder must be replaced with a base64-encoded SHA-256 hash of an inline script that can be used to load other scripts (see next section). You can calculate SHA hashes of static inline `<script>` blocks with this [tool](https://strict-csp-codelab.glitch.me/csp_sha256_util.html). An alternative is to inspect the CSP violation warnings in Chrome's developer console, which contains hashes of blocked scripts, and add these hashes to the policy as 'sha256-…'.

A script injected by an attacker will be blocked by the browser as only the hashed inline script and any scripts dynamically added by it will be allowed to execute by the browser.

#### Load sourced scripts dynamically <a href="#load-sourced-scripts-dynamically" class="w-headline-link">#</a>

All scripts that are externally sourced need to be loaded dynamically via an inline script, because CSP hashes are supported across browsers only for inline scripts (hashes for sourced scripts are [not well-supported across browsers](https://wpt.fyi/results/content-security-policy/script-src/script-src-sri_hash.sub.html?label=master&label=experimental&aligned)).

<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/B2YsfJDYw8PRI6kJI7Bs.jpg?auto=format&amp;w=1600 1600w" width="800" height="333" />

Blocked by CSP

    <script src="https://example.org/foo.js"></script>
    <script src="https://example.org/bar.js"></script>

CSP will block these scripts since only inline-scripts can be hashed.

Allowed by CSP

    <script>
    var scripts = [ 'https://example.org/foo.js', 'https://example.org/bar.js'];
    scripts.forEach(function(scriptUrl) {
      var s = document.createElement('script');
      s.src = scriptUrl;
      s.async = false; // to preserve execution order
      document.head.appendChild(s);
    });
    </script>

To allow execution of this script, the hash of the inline script must be calculated and added to the CSP response header, replacing the `{HASHED_INLINE_SCRIPT}` placeholder. To reduce the amount of hashes, you can optionally merge all inline scripts into a single script. To see this in action checkout the [example](https://strict-csp-codelab.glitch.me/solution_hash_csp#) and examine the [code](https://glitch.com/edit/#!/strict-csp-codelab?path=demo%2Fsolution_hash_csp.html%3A1%3A).

**Gotchas!**

When calculating a CSP hash for inline scripts, whitespace characters between the opening and closing `<script>` tags matter. You can calculate CSP hashes for inline scripts using this [tool](https://strict-csp-codelab.glitch.me/csp_sha256_util.html).

## About `async = false` and script loading `async = false`

isn't blocking in this case, but use this with care.

In the code snippet above, `s.async = false` is added to ensure that foo executes before bar (even if bar loads first). **In this snippet, `s.async = false` does not block the parser while the scripts load**; that's because the scripts are added dynamically. The parser will only stop as the scripts are being executed, just like it would behave for `async` scripts. However, with this snippet, keep in mind:

- One/both scripts may execute before the document has finished downloading. If you want the document to be ready by the time the scripts execute, you need to wait for the [`DOMContentLoaded` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) before you append the scripts. If this causes a performance issue (because the scripts don't start downloading early enough), you can use [preload tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) earlier in the page.
- `defer = true` won't do anything. If you need that behaviour, you'll have to manually run the script at the time you want to run it.

### Step 3: Refactor HTML templates and client-side code to remove patterns incompatible with CSP <a href="#step-3:-refactor-html-templates-and-client-side-code-to-remove-patterns-incompatible-with-csp" class="w-headline-link">#</a>

Inline event handlers (such as `onclick="…"`, `onerror="…"`) and JavaScript URIs (`<a href="javascript:…">`) can be used to run scripts. This means that an attacker who finds an XSS bug could inject this kind of HTML and execute malicious JavaScript. A nonce- or hash-based CSP disallows the use of such markup. If your site makes use of any of the patterns described above, you'll need to refactor them into safer alternatives.

If you enabled CSP in the previous step, you'll be able to see CSP violations in the console every time CSP blocks an incompatible pattern.

<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format" alt="CSP violation reports in the Chrome developer console." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/mRWfNxAhQXzInOLCgtv8.jpg?auto=format&amp;w=1600 1600w" width="800" height="235" />

In most cases, the fix is straightforward:

#### To refactor inline event handlers, rewrite them to be added from a JavaScript block <a href="#to-refactor-inline-event-handlers-rewrite-them-to-be-added-from-a-javascript-block" class="w-headline-link">#</a>

Blocked by CSP

    <span onclick="doThings();">A thing.</span>

CSP will block inline event handlers.

Allowed by CSP

    <span id="things">A thing.</span>
    <script nonce="${nonce}">
      document.getElementById('things')
              .addEventListener('click', doThings);
    </script>

CSP will allow event handlers that are registered via JavaScript.

#### For `javascript:` URIs, you can use a similar pattern <a href="#for-javascript:-uris-you-can-use-a-similar-pattern" class="w-headline-link">#</a>

Blocked by CSP

    <a href="javascript:linkClicked()">foo</a>

CSP will block javascript: URIs.

Allowed by CSP

    <a id="foo">foo</a>
    <script nonce="${nonce}">
      document.getElementById('foo')
              .addEventListener('click', linkClicked);
    </script>

CSP will allow event handlers that are registered via JavaScript.

#### Use of `eval()` in JavaScript <a href="#use-of-eval()-in-javascript" class="w-headline-link">#</a>

If your application uses `eval()` to convert JSON string serializations into JS objects, you should refactor such instances to `JSON.parse()`, which is also [faster](https://v8.dev/blog/cost-of-javascript-2019#json).

If you cannot remove all uses of `eval()`, you can still set a strict nonce-based CSP, but you will have to use the `'unsafe-eval'` CSP keyword which will make your policy slightly less secure.

You can find these and more examples of such refactoring in this strict CSP Codelab:

### Step 4: Add fallbacks to support Safari and older browsers <a href="#step-4:-add-fallbacks-to-support-safari-and-older-browsers" class="w-headline-link">#</a>

CSP is supported by all major browsers, but you'll need two fallbacks:

- Using `'strict-dynamic'` requires adding `https:` as a fallback for Safari, the only major browser without support for `'strict-dynamic'`. By doing so:

  - All browsers that support `'strict-dynamic'` will ignore the `https:` fallback, so this won't reduce the strength of the policy.
  - In Safari, externally sourced scripts will be allowed to load only if they come from an HTTPS origin. This is less secure than a strict CSP–it's a fallback–but would still prevent certain common XSS causes like injections of `javascript:` URIs because `'unsafe-inline'` is not present or ignored in presence of a hash or nonce.

- To ensure compatibility with very old browser versions (4+ years), you can add `'unsafe-inline'` as a fallback. All recent browsers will ignore `'unsafe-inline'` if a CSP nonce or hash is present.

<!-- -->

    Content-Security-Policy:
      script-src 'nonce-{random}' 'strict-dynamic' https: 'unsafe-inline';
      object-src 'none';
      base-uri 'none';

`https:` and `unsafe-inline` don't make your policy less safe because they will be ignored by browsers which support `strict-dynamic`.

### Step 5: Deploy your CSP <a href="#step-5:-deploy-your-csp" class="w-headline-link">#</a>

After confirming that no legitimate scripts are being blocked by CSP in your local development environment, you can proceed with deploying your CSP to your (staging, then) production environment:

1.  (Optional) Deploy your CSP in report-only mode using the `Content-Security-Policy-Report-Only` header. Learn more about the [Reporting API](https://developers.google.com/web/updates/2018/09/reportingapi). Report-only mode is handy to test a potentially breaking change like a new CSP in production, before actually enforcing CSP restrictions. In report-only mode, your CSP does not affect the behavior of your application (nothing will actually break). But the browser will still generate console errors and violation reports when patterns incompatible with CSP are encountered (so you can see what would have broken for your end-users).
2.  Once you're confident that your CSP won't induce breakage for your end-users, deploy your CSP using the `Content-Security-Policy` response header. **Only once you've completed this step, will CSP begin to protect your application from XSS**. Setting your CSP via a HTTP header server-side is more secure than setting it as a `<meta>` tag; use a header if you can.

**Gotchas!**

Make sure that the CSP you're using is "strict" by checking it with the [CSP Evaluator](https://csp-evaluator.withgoogle.com) or Lighthouse. This is very important, as even small changes to a policy can significantly reduce its security.

**Caution**: When enabling CSP for production traffic, you may see some noise in the CSP violation reports due to browser extensions and malware.

## Limitations <a href="#limitations" class="w-headline-link">#</a>

Generally speaking, a strict CSP provides a strong added layer of security that helps to mitigate XSS. In most cases, CSP reduces the attack surface significantly (dangerous patterns like `javascript:` URIs are completely turned off). However, based on the type of CSP you're using (nonces, hashes, with or without `'strict-dynamic'`), there are cases where CSP doesn't protect:

- If you nonce a script, but there's an injection directly into the body or into the `src` parameter of that `<script>` element.
- If there are injections into the locations of dynamically created scripts (`document.createElement('script')`), including into any library functions which create `script` DOM nodes based on the value of their arguments. This includes some common APIs such as jQuery's `.html()`, as well as `.get()` and `.post()` in jQuery &lt; 3.0.
- If there are template injections in old AngularJS applications. An attacker who can inject an AngularJS template can use it to [execute arbitrary JavaScript](https://sites.google.com/site/bughunteruniversity/nonvuln/angularjs-expression-sandbox-bypass).
- If the policy contains `'unsafe-eval'`, injections into `eval()`, `setTimeout()` and a few other rarely used APIs.

Developers and security engineers should pay particular attention to such patterns during code reviews and security audits. You can find more details on the cases described above in [this CSP presentation](https://static.sched.com/hosted_files/locomocosec2019/db/CSP%20-%20A%20Successful%20Mess%20Between%20Hardening%20and%20Mitigation%20%281%29.pdf#page=27).

Trusted Types complements strict CSP very well and can efficiently protect against some of the limitations listed above. Learn more about [how to use Trusted Types at web.dev](/trusted-types).

## Further reading <a href="#further-reading" class="w-headline-link">#</a>

- [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://research.google/pubs/pub45542/)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [LocoMoco Conference: Content Security Policy - A successful mess between hardening and mitigation](https://static.sched.com/hosted_files/locomocosec2019/db/CSP%20-%20A%20Successful%20Mess%20Between%20Hardening%20and%20Mitigation%20%281%29.pdf)
- [Google I/O talk: Securing Web Apps with Modern Platform Features](https://webappsec.dev/assets/pub/Google_IO-Securing_Web_Apps_with_Modern_Platform_Features.pdf)

<a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Mar 15, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/strict-csp/index.md)

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
