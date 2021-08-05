<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format" alt="Code snippets demonstrating cross-site scripting vulnerabilities." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/3Mgu37qU0P4fVdI4NTxM.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#prevent-dom-based-cross-site-scripting-vulnerabilities-with-trusted-types" class="w-toc__header--link">Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types</a>

- [Why should you care?](#why-should-you-care)
- [Background](#background)
- [API introduction](#api-introduction)
- [How to use Trusted Types](#how-to-use-trusted-types)
- [Prepare for Content Security Policy violation reports](#prepare-for-content-security-policy-violation-reports)
- [Add a report-only CSP header](#add-a-report-only-csp-header)
- [Identify Trusted Types violations](#identify-trusted-types-violations)
- [Fix the violations](#fix-the-violations)
- [Switch to enforcing Content Security Policy](#switch-to-enforcing-content-security-policy)
- [Further reading](#further-reading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types

Reduce the DOM XSS attack surface of your application.

Mar 25, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/1v5F1SOBl46ZghbHQMle.svg" alt="Krzysztof Kotowicz" class="w-author__image" width="64" height="64" />](/authors/koto/)

<a href="/authors/koto/" class="w-author__name-link">Krzysztof Kotowicz</a>

- <a href="https://twitter.com/kkotowicz" class="w-author__link">Twitter</a>
- <a href="https://github.com/koto" class="w-author__link">GitHub</a>

## Why should you care? <a href="#why-should-you-care" class="w-headline-link">#</a>

DOM-based cross-site scripting (DOM XSS) is one of the most common web security vulnerabilities, and it's very easy to introduce it in your application. [Trusted Types](https://github.com/w3c/webappsec-trusted-types) give you the tools to write, security review, and maintain applications free of DOM XSS vulnerabilities by making the dangerous web API functions secure by default. Trusted Types are supported in Chrome 83, and a [polyfill](https://github.com/w3c/webappsec-trusted-types#polyfill) is available for other browsers. See [Browser compatibility](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types#browser_compatibility) for up-to-date cross-browser support information.

**Key Term**: DOM-based cross-site scripting happens when data from a user controlled _source_ (like user name, or redirect URL taken from the URL fragment) reaches a _sink_, which is a function like `eval()` or a property setter like `.innerHTML`, that can execute arbitrary JavaScript code.

## Background <a href="#background" class="w-headline-link">#</a>

For many years [DOM XSS](https://owasp.org/www-community/attacks/xss/) has been one of the most prevalent—and dangerous—web security vulnerabilities.

There are two distinct groups of cross-site scripting. Some XSS vulnerabilities are caused by the server-side code that insecurely creates the HTML code forming the website. Others have a root cause on the client, where the JavaScript code calls dangerous functions with user-controlled content.

To [prevent server-side XSS](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), don't generate HTML by concatenating strings and use safe contextual-autoescaping templating libraries instead. Use a [nonce-based Content Security Policy](https://csp.withgoogle.com/docs/strict-csp.html) for additional mitigation against the bugs as they inevitably happen.

Now a browser can also help prevent the client-side (also known as DOM-based) XSSes with [Trusted Types](https://bit.ly/trusted-types).

## API introduction <a href="#api-introduction" class="w-headline-link">#</a>

Trusted Types work by locking down the following risky sink functions. You might already recognize some of them, as browsers vendors and [web frameworks](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) already steer you away from using these features for security reasons.

- **Script manipulation**:  
  [`<script src>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) and setting text content of [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) elements.

- **Generating HTML from a string**:

  [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), [`outerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML),[`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML), [`<iframe> srcdoc`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-srcdoc), [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write), [`document.writeln`](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln), and [`DOMParser.parseFromString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser#DOMParser.parseFromString)

- **Executing plugin content**:  
  [`<embed src>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed#attr-src), [`<object data>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#attr-data) and [`<object codebase>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#attr-codebase)

- **Runtime JavaScript code compilation**:  
  `eval`, `setTimeout`, `setInterval`, `new Function()`

Trusted Types require you to process the data before passing it to the above sink functions. Just using a string will fail, as the browser doesn't know if the data is trustworthy:

Don't

    anElement.innerHTML  = location.href;

With Trusted Types enabled, the browser throws a _TypeError_ and prevents use of a DOM XSS sink with a string.

To signify that the data was securely processed, create a special object - a Trusted Type.

Do

    anElement.innerHTML = aTrustedHTML;

With Trusted Types enabled, the browser accepts a `TrustedHTML` object for sinks that expect HTML snippets. There are also `TrustedScript` and `TrustedScriptURL` objects for other sensitive sinks.

Trusted Types heavily reduce the DOM XSS [attack surface](https://en.wikipedia.org/wiki/Attack_surface) of your application. It simplifies security reviews, and allows you to enforce the type-based security checks done when compiling, linting, or bundling your code at runtime, in the browser.

## How to use Trusted Types <a href="#how-to-use-trusted-types" class="w-headline-link">#</a>

### Prepare for Content Security Policy violation reports <a href="#prepare-for-content-security-policy-violation-reports" class="w-headline-link">#</a>

You can deploy a report collector (such as the open-source [go-csp-collector](https://github.com/jacobbednarz/go-csp-collector)), or use one of the commercial equivalents. You can also debug the violations in the browser:

    window.addEventListener('securitypolicyviolation',
        console.error.bind(console));

### Add a report-only CSP header <a href="#add-a-report-only-csp-header" class="w-headline-link">#</a>

Add the following HTTP Response header to documents that you want to migrate to Trusted Types.

    Content-Security-Policy-Report-Only: require-trusted-types-for 'script'; report-uri //my-csp-endpoint.example

Now all the violations are reported to `//my-csp-endpoint.example`, but the website continues to work. The next section explains how `//my-csp-endpoint.example` works.

**Caution**: Trusted Types are only available in a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) like HTTPS and `localhost`.

### Identify Trusted Types violations <a href="#identify-trusted-types-violations" class="w-headline-link">#</a>

From now on, every time Trusted Types detect a violation, a report will be sent to a configured `report-uri`. For example, when your application passes a string to `innerHTML`, the browser sends the following report:

    {
    "csp-report": {
        "document-uri": "https://my.url.example",
        "violated-directive": "require-trusted-types-for",
        "disposition": "report",
        "blocked-uri": "trusted-types-sink",
        "line-number": 39,
        "column-number": 12,
        "source-file": "https://my.url.example/script.js",
        "status-code": 0,
        "script-sample": "Element innerHTML <img src=x"
    }
    }

This says that in `https://my.url.example/script.js` on line 39 `innerHTML` was called with the string beginning with `<img src=x`. This information should help you narrow down which parts of code may be introducing DOM XSS and need to change.

Most of the violations like this can also be detected by running a code linter or [static code checkers](https://github.com/mozilla/eslint-plugin-no-unsanitized) on your codebase. This helps quickly identify a large chunk of violations.

That said, you should also analyze the CSP violations, as these trigger when the non-conforming code is executed.

### Fix the violations <a href="#fix-the-violations" class="w-headline-link">#</a>

There are a couple of options for fixing a Trusted Type violation. You can [remove the offending code](#remove-the-offending-code), [use a library](#use-a-library), [create a Trusted Type policy](#create-a-trusted-type-policy) or, as a last resort, [create a default policy](#create-a-default-policy).

#### Rewrite the offending code <a href="#rewrite-the-offending-code" class="w-headline-link">#</a>

Perhaps the non-conforming functionality is not needed anymore or can be rewritten in a modern way without using the error-prone functions?

Don't

    el.innerHTML = '<img src=xyz.jpg>';

Do

    el.textContent = '';
    const img = document.createElement('img');
    img.src = 'xyz.jpg';
    el.appendChild(img);

#### Use a library <a href="#use-a-library" class="w-headline-link">#</a>

Some libraries already generate Trusted Types that you can pass to the sink functions. For example, you can use [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize an HTML snippet, removing XSS payloads.

    import DOMPurify from 'dompurify';
    el.innerHTML = DOMPurify.sanitize(html, {RETURN_TRUSTED_TYPE: true});

DOMPurify [supports Trusted Types](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) and will return sanitized HTML wrapped in a `TrustedHTML` object such that the browser does not generate a violation.

**Caution**: If the sanitization logic in DOMPurify is buggy, your application might still have a DOM XSS vulnerability. Trusted Types force you to process a value _somehow_, but don't yet define what the exact processing rules are, and whether they are safe.

#### Create a Trusted Type policy <a href="#create-a-trusted-type-policy" class="w-headline-link">#</a>

Sometimes it's not possible to remove the functionality, and there is no library to sanitize the value and create a Trusted Type for you. In those cases, create a Trusted Type object yourself.

For that, first create a [policy](https://w3c.github.io/webappsec-trusted-types/dist/spec/#policies-hdr). Policies are factories for Trusted Types that enforce certain security rules on their input:

    if (window.trustedTypes && trustedTypes.createPolicy) { // Feature testing
      const escapeHTMLPolicy = trustedTypes.createPolicy('myEscapePolicy', {
        createHTML: string => string.replace(/\</g, '&lt;')
      });
    }

This code creates a policy called `myEscapePolicy` that can produce `TrustedHTML` objects via its `createHTML()` function. The defined rules will HTML-escape `<` characters to prevent the creation of new HTML elements.

Use the policy like so:

    const escaped = escapeHTMLPolicy.createHTML('<img src=x onerror=alert(1)>');
    console.log(escaped instanceof TrustedHTML);  // true
    el.innerHTML = escaped;  // '&lt;img src=x onerror=alert(1)>'

While the JavaScript function passed to `trustedTypes.createPolicy()` as `createHTML()` returns a string, `createPolicy()` returns a policy object that wraps the return value in a correct type - in this case `TrustedHTML`.

#### Use a default policy <a href="#use-a-default-policy" class="w-headline-link">#</a>

Sometimes you can't change the offending code. For example, this is the case if you're loading a third-party library from a CDN. In that case, use a [default policy](https://w3c.github.io/webappsec-trusted-types/dist/spec/#default-policy-hdr):

    if (window.trustedTypes && trustedTypes.createPolicy) { // Feature testing
      trustedTypes.createPolicy('default', {
        createHTML: (string, sink) => DOMPurify.sanitize(string, {RETURN_TRUSTED_TYPE: true})
      });
    }

The policy with a name `default` is used wherever a string is used in a sink that only accepts Trusted Type.

**Gotchas!**

Use the default policy sparingly, and prefer refactoring the application to use regular policies instead. Doing so encourages designs in which the security rules are close to the data that they process, where you have the most context to correctly sanitize the value.

### Switch to enforcing Content Security Policy <a href="#switch-to-enforcing-content-security-policy" class="w-headline-link">#</a>

When your application no longer produces violations, you can start enforcing Trusted Types:

    Content-Security-Policy: require-trusted-types-for 'script'; report-uri //my-csp-endpoint.example

Voila! Now, no matter how complex your web application is, the only thing that can introduce a DOM XSS vulnerability, is the code in one of your policies - and you can lock that down even more by [limiting policy creation](https://w3c.github.io/webappsec-trusted-types/dist/spec/#trusted-types-csp-directive).

## Further reading <a href="#further-reading" class="w-headline-link">#</a>

- [Trusted Types GitHub](https://github.com/w3c/webappsec-trusted-types)
- [W3C specification draft](https://w3c.github.io/webappsec-trusted-types/dist/spec/)
- [FAQ](https://github.com/w3c/webappsec-trusted-types/wiki/FAQ)
- [Integrations](https://github.com/w3c/webappsec-trusted-types/wiki/Integrations)

<a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Mar 25, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/trusted-types/index.md)

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
