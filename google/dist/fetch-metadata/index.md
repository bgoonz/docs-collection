<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format" alt="A screenshot of Python code related to Resource Isolation Policy." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/El8ytnIgMDWVzdsglcfv.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#protect-your-resources-from-web-attacks-with-fetch-metadata" class="w-toc__header--link">Protect your resources from web attacks with Fetch Metadata</a>

- [Why should you care about isolating your web resources?](#why-should-you-care-about-isolating-your-web-resources)
- [Browser compatibility](#compatibility)
- [Background](#background)
- [Introducing Fetch Metadata](#introduction)
- [Sec-Fetch-Site](#sec-fetch-site)
- [Sec-Fetch-Mode](#sec-fetch-mode)
- [Sec-Fetch-Dest](#sec-fetch-dest)
- [How to use Fetch Metadata to protect against cross-origin attacks](#how-to-use-fetch-metadata-to-protect-against-cross-origin-attacks)
- [Implementing a Resource Isolation Policy](#implementing-a-resource-isolation-policy)
- [Deploying a Resource Isolation Policy](#deploying-a-resource-isolation-policy)
- [Identifying and fixing policy violations](#identifying-and-fixing-policy-violations)
- [Enforcing a Resource Isolation Policy](#enforcing-a-resource-isolation-policy)
- [Further reading](#further-reading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Protect your resources from web attacks with Fetch Metadata

Prevent CSRF, XSSI, and cross-origin information leaks.

Jun 4, 2020 <span class="w-author__separator">•</span> Updated Jun 10, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Lukas Weichselbaum" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/SR3DdHwfeqxp5k9ojcr6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/lwe/)

<a href="/authors/lwe/" class="w-author__name-link">Lukas Weichselbaum</a>

- <a href="https://twitter.com/we1x" class="w-author__link">Twitter</a>
- <a href="https://github.com/lweichselbaum" class="w-author__link">GitHub</a>
- <a href="https://webappsec.dev" class="w-author__link">Blog</a>

## Why should you care about isolating your web resources? <a href="#why-should-you-care-about-isolating-your-web-resources" class="w-headline-link">#</a>

Many web applications are vulnerable to [cross-origin](/same-site-same-origin/#%22same-origin%22-and-%22cross-origin%22) attacks like [cross-site request forgery](https://portswigger.net/web-security/csrf) (CSRF), [cross-site script inclusion](https://portswigger.net/research/json-hijacking-for-the-modern-web) (XSSI), timing attacks, [cross-origin information leaks](https://arxiv.org/pdf/1908.02204.pdf) or speculative execution side-channel ([Spectre](https://developers.google.com/web/updates/2018/02/meltdown-spectre)) attacks.

[Fetch Metadata](https://www.w3.org/TR/fetch-metadata/) request headers allow you to deploy a strong defense-in-depth mechanism—a Resource Isolation Policy—to protect your application against these common cross-origin attacks.

It is common for resources exposed by a given web application to only be loaded by the application itself, and not by other websites. In such cases, deploying a Resource Isolation Policy based on Fetch Metadata request headers takes little effort, and at the same time protects the application from cross-site attacks.

## Browser compatibility <a href="#compatibility" class="w-headline-link">#</a>

Fetch Metadata request headers are supported as of Chrome 76 and in other Chromium-based browsers, and are under development in Firefox. See [Browser compatibility](https://developer.mozilla.org/docs/Web/HTTP/Headers/Sec-Fetch-Site#Browser_compatibility) for up-to-date browser support information.

## Background <a href="#background" class="w-headline-link">#</a>

Many cross-site attacks are possible because the web is open by default and your application server cannot easily protect itself from communication originating from external applications. A typical cross-origin attack is cross-site request forgery (CSRF) where an attacker lures a user onto a site they control and then submits a form to the server the user is logged in to. Since the server cannot tell if the request originated from another domain (cross-site) and the browser automatically attaches cookies to cross-site requests, the server will execute the action requested by the attacker on behalf of the user.

Other cross-site attacks like cross-site script inclusion (XSSI) or cross-origin information leaks are similar in nature to CSRF and rely on loading resources from a victim application in an attacker-controlled document and leaking information about the victim applications. Since applications cannot easily distinguish trusted requests from untrusted ones, they cannot discard malicious cross-site traffic.

**Gotchas!**

Apart from attacks on resources as described above, _window references_ can also lead to cross-origin information leaks and Spectre attacks. You can prevent them by setting the `Cross-Origin-Opener-Policy` response header to `same-origin`.

## Introducing Fetch Metadata <a href="#introduction" class="w-headline-link">#</a>

Fetch Metadata request headers are a new web platform security feature designed to help servers defend themselves against cross-origin attacks. By providing information about the context of an HTTP request in a set of `Sec-Fetch-*` headers, they allow the responding server to apply security policies before processing the request. This lets developers decide whether to accept or reject a request based on the way it was made and the context in which it will be used, making it possible to respond to only legitimate requests made by their own application.

<figure><img src="https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format" alt="Requests originating from sites served by your own server (same-origin) will continue to work." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/aRsy2xULTR4TM2sMMsbQ.png?auto=format&amp;w=1600 1600w" width="800" height="176" /><figcaption>Requests originating from sites served by your own server (same-origin) will continue to work.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format" alt="Malicious cross-site requests can be rejected by the server because of the additional context in the HTTP request provided by Sec-Fetch-* headers." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/xY4yB36JqsVw62wNMIWt.png?auto=format&amp;w=1600 1600w" width="800" height="171" /><figcaption>Malicious cross-site requests can be rejected by the server because of the additional context in the HTTP request provided by <code>Sec-Fetch-*</code> headers.</figcaption></figure>### `Sec-Fetch-Site` <a href="#sec-fetch-site" class="w-headline-link">#</a>

`Sec-Fetch-Site` tells the server which [site](/same-site-same-origin) sent the request. The browser sets this value to one of the following:

- `same-origin`, if the request was made by your own application (e.g. `site.example`)
- `same-site`, if the request was made by a subdomain of your site (e.g. `bar.site.example`)
- `none`, if the request was explicitly caused by a user's interaction with the user agent (e.g. clicking on a bookmark)
- `cross-site`, if the request was sent by another website (e.g. `evil.example`)

### `Sec-Fetch-Mode` <a href="#sec-fetch-mode" class="w-headline-link">#</a>

`Sec-Fetch-Mode` indicates the [mode](https://developer.mozilla.org/docs/Web/API/Request/mode) of the request. This roughly corresponds to the type of the request and allows you to distinguish resource loads from navigation requests. For example, a destination of `navigate` indicates a top-level navigation request while `no-cors` indicates resource requests like loading an image.

### `Sec-Fetch-Dest` <a href="#sec-fetch-dest" class="w-headline-link">#</a>

`Sec-Fetch-Dest` exposes a request's [destination](https://developer.mozilla.org/docs/Web/API/Request/destination) (e.g. if a `script` or an `img` tag caused a resource to be requested by the browser).

## How to use Fetch Metadata to protect against cross-origin attacks <a href="#how-to-use-fetch-metadata-to-protect-against-cross-origin-attacks" class="w-headline-link">#</a>

The extra information these request headers provide is quite simple, but the additional context allows you to build powerful security logic on the server-side, also referred to as a Resource Isolation Policy, with just a few lines of code.

### Implementing a Resource Isolation Policy <a href="#implementing-a-resource-isolation-policy" class="w-headline-link">#</a>

A Resource Isolation Policy prevents your resources from being requested by external websites. Blocking such traffic mitigates common cross-site web vulnerabilities such as CSRF, XSSI, timing attacks, and cross-origin information leaks. This policy can be enabled for all endpoints of your application and will allow all resource requests coming from your own application as well as direct navigations (via an HTTP `GET` request). Endpoints that are supposed to be loaded in a cross-site context (e.g. endpoints loaded using CORS) can be opted out of this logic.

#### Step 1: Allow requests from browsers which don't send Fetch Metadata <a href="#step-1:-allow-requests-from-browsers-which-don&#39;t-send-fetch-metadata" class="w-headline-link">#</a>

Since not all browsers support Fetch Metadata, you need to allow requests that don't set `Sec-Fetch-*` headers by checking for the presence of `sec-fetch-site`.

All of the following examples are Python code.

    if not req['sec-fetch-site']:
      return True  # Allow this request

**Caution**: Since Fetch Metadata is only supported in Chromium-based browsers, it should be used as a [defense-in-depth protection](https://static.googleusercontent.com/media/landing.google.com/en//sre/static/pdf/Building_Secure_and_Reliable_Systems.pdf#page=181) and not as your primary line of defense.

#### Step 2: Allow same-site and browser-initiated requests <a href="#step-2:-allow-same-site-and-browser-initiated-requests" class="w-headline-link">#</a>

Any requests that do not originate from a cross-origin context (like `evil.example`) will be allowed. In particular, these are requests that:

- Originate from your own application (e.g. a same-origin request where `site.example` requests `site.example/foo.json` will always be allowed).
- Originate from your subdomains.
- Are explicitly caused by a user's interaction with the user agent (e.g. direct navigation or by clicking a bookmark, etc.).

<!-- -->

    if req['sec-fetch-site'] in ('same-origin', 'same-site', 'none'):
      return True  # Allow this request

**Gotchas!**

In case your subdomains are not fully trusted, you can make the policy stricter by blocking requests from subdomains by removing the `same-site` value.

#### Step 3: Allow simple top-level navigation and iframing <a href="#step-3:-allow-simple-top-level-navigation-and-iframing" class="w-headline-link">#</a>

To ensure that your site can still be linked from other sites, you have to allow simple (`HTTP GET`) top-level navigation.

    if req['sec-fetch-mode'] == 'navigate' and req.method == 'GET'
      # <object> and <embed> send navigation requests, which we disallow.
      and req['sec-fetch-dest'] not in ('object', 'embed'):
        return True  # Allow this request

**Gotchas!**

The logic above protects your application's endpoints from being used as resources by other websites, but will permit top-level navigation and embedding (e.g. loading in an `<iframe>`). To further improve security, you can use Fetch Metadata headers to restrict cross-site navigations to only an allowed set of pages.

#### Step 4: Opt out endpoints that are meant to serve cross-site traffic (Optional) <a href="#step-4:-opt-out-endpoints-that-are-meant-to-serve-cross-site-traffic-(optional)" class="w-headline-link">#</a>

In some cases, your application might provide resources which are meant to be loaded cross-site. These resources need to be exempted on a per-path or per-endpoint basis. Examples of such endpoints are:

- Endpoints meant to be accessed cross-origin: If your application is serving endpoints that are `CORS` enabled, you need to explicitly opt them out from resource isolation to ensure that cross-site requests to these endpoints are still possible.
- Public resources (e.g. images, styles, etc.): Any public and unauthenticated resources that should be loadable cross-origin from other sites can be exempted as well.

<!-- -->

    if req.path in ('/my_CORS_endpoint', '/favicon.png'):
      return True

**Caution**: Before opting out parts of your application from these security restrictions, make sure they are static and don't contain any sensitive user information.

#### Step 5: Reject all other requests that are cross-site and not navigational <a href="#step-5:-reject-all-other-requests-that-are-cross-site-and-not-navigational" class="w-headline-link">#</a>

Any other **cross-site** request will be rejected by this Resource Isolation Policy and thus protect your application from common cross-site attacks.

**Gotchas!**

By default, requests violating your policy should be rejected with an `HTTP 403` response. But, depending on your use case, you can also consider other actions, such as:

- **Only logging violations**. This is especially useful when testing the compatibility of the policy and finding endpoints that might need to be opted out.
- **Modifying the request**. In certain scenarios, consider performing other actions like redirecting to your landing page and dropping authentication credentials (e.g. cookies). However, be aware that this could weaken the protections of a Fetch Metadata-based policy.

**Example:** The following code demonstrates a complete implementation of a robust Resource Isolation Policy on the server or as a middleware to deny potentially malicious cross-site resource requests, while allowing simple navigational requests:

    # Reject cross-origin requests to protect from CSRF, XSSI, and other bugs
    def allow_request(req):
      # Allow requests from browsers which don't send Fetch Metadata
      if not req['sec-fetch-site']:
        return True

      # Allow same-site and browser-initiated requests
      if req['sec-fetch-site'] in ('same-origin', 'same-site', 'none'):
        return True

      # Allow simple top-level navigations except <object> and <embed>
      if req['sec-fetch-mode'] == 'navigate' and req.method == 'GET'
        and req['sec-fetch-dest'] not in ('object', 'embed'):
          return True

      # [OPTIONAL] Exempt paths/endpoints meant to be served cross-origin.
      if req.path in ('/my_CORS_endpoint', '/favicon.png'):
        return True

      # Reject all other requests that are cross-site and not navigational
      return False

### Deploying a Resource Isolation Policy <a href="#deploying-a-resource-isolation-policy" class="w-headline-link">#</a>

1.  Install a module like the code snippet from above to log and monitor how your site behaves and make sure the restrictions don't affect any legitimate traffic.
2.  Fix potential violations by exempting legitimate cross-origin endpoints.
3.  Enforce the policy by dropping non-compliant requests.

### Identifying and fixing policy violations <a href="#identifying-and-fixing-policy-violations" class="w-headline-link">#</a>

It's recommended that you test your policy in a side-effect free way by first enabling it in reporting mode in your server-side code. Alternatively, you can implement this logic in middleware, or in a reverse proxy which logs any violations that your policy might produce when applied to production traffic.

From our experience of rolling out a Fetch Metadata Resource Isolation Policy at Google, most applications are by default compatible with such a policy and rarely require exempting endpoints to allow cross-site traffic.

### Enforcing a Resource Isolation Policy <a href="#enforcing-a-resource-isolation-policy" class="w-headline-link">#</a>

After you've checked that your policy doesn't impact legitimate production traffic, you're ready to enforce restrictions, guaranteeing that other sites will not be able to request your resources and protecting your users from cross-site attacks.

**Caution**: Make sure that you reject invalid requests before running authentication checks or any other processing of the request to prevent revealing sensitive timing information.

## Further reading <a href="#further-reading" class="w-headline-link">#</a>

- [W3C Fetch Metadata Request Headers specification](https://www.w3.org/TR/fetch-metadata/)
- [Fetch Metadata Playground](https://secmetadata.appspot.com/)
- [Google I/O talk: Securing Web Apps with Modern Platform Features](https://webappsec.dev/assets/pub/Google_IO-Securing_Web_Apps_with_Modern_Platform_Features.pdf) (Slides)

<a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Jun 10, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/fetch-metadata/index.md)

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
