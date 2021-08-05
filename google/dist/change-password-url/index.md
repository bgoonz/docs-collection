<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format" alt="Neon lights shaped into various symbols that are commonly used in passwords." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/IOO23TBT2cCBNmsm9HKf.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#help-users-change-passwords-easily-by-adding-a-well-known-url-for-changing-passwords" class="w-toc__header--link">Help users change passwords easily by adding a well-known URL for changing passwords</a>

- [Introduction](#introduction)
- [How password managers help](#how-password-managers-help)
- [Set up "a well-known URL for changing passwords"](#set-up-)
- [Revisit your change password page HTML](#revisit-your-change-password-page-html)
- [How it is used in real world](#how-it-is-used-in-real-world)
- [Examples](#examples)
- [Browser compatibility](#browser-compatibility)
- [Chrome's password manager behavior](#chrome's-password-manager-behavior)
- [Feedback](#feedback)
- [Resources](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Help users change passwords easily by adding a well-known URL for changing passwords

Redirect a request to `/.well-known/change-password` to the change-passwords URL

Sep 1, 2020 <span class="w-author__separator">•</span> Updated Sep 24, 2020

[<img src="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eiji Kitamura" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/agektmr/)

<a href="/authors/agektmr/" class="w-author__name-link">Eiji Kitamura</a>

- <a href="https://twitter.com/agektmr" class="w-author__link">Twitter</a>
- <a href="https://github.com/agektmr" class="w-author__link">GitHub</a>
- <a href="https://blog.agektmr.com" class="w-author__link">Blog</a>

Set a redirect from `/.well-known/change-password` to the change password page of your website. This will enable password managers to navigate your users directly to that page.

## Introduction <a href="#introduction" class="w-headline-link">#</a>

As you may know, [passwords are not the best way to manage accounts](https://security.googleblog.com/2017/11/new-research-understanding-root-cause.html). Luckily, there are emerging technologies such as [WebAuthn](https://webauthn.io/) and techniques such as one-time passwords that are helping us get closer to a world without passwords. However, these technologies are still being developed and things won't change rapidly. Many developers will still need to deal with passwords for at least the next few years. While we wait for the emerging technologies and techniques to become commonplace, we can at least make passwords easier to use.

A good way to do this is to provide better support for password managers.

### How password managers help <a href="#how-password-managers-help" class="w-headline-link">#</a>

Password managers can be built into browsers or provided as third-party apps. They can help users in various ways:

**Autofill the password for the correct input field**: Some browsers can find the correct input heuristically even if the website is not optimized for this purpose. Web developers can help password managers by correctly [annotating HTML input tags](/sign-in-form-best-practices/#new-password).

**Prevent phishing**: Because password managers remember where the password was recorded, the password can be autofilled only at appropriate URLs, and not at phishing websites.

**Generate strong and unique passwords**: Because strong and unique passwords are directly generated and stored by the password manager, users don't have to remember a single character of the password.

Generating and autofilling passwords using a password manager have already served the web well, but considering their lifecycle, updating the passwords whenever it's required is as important as generating and autofilling. To properly leverage that, password managers are adding a new feature:

**Detect vulnerable passwords and suggest updating them**: Password managers can detect passwords that are reused, analyze the entropy and weakness of them, and even detect potentially leaked passwords or ones that are known to be unsafe from sources such as [Have I Been Pwned](https://haveibeenpwned.com/).

A password manager can warn users about problematic passwords, but there's a lot of friction in asking users to navigate from the homepage to a change password page, on top of going through the actual process of changing the password (which varies from site to site). It would be much easier if password managers could navigate the user directly to the change-password URL. This is where [a well-known URL for changing passwords](https://w3c.github.io/webappsec-change-password-url/) becomes useful.

By reserving a well-known URL path that redirects the user to the change password page, the website can easily redirect users to the right place to change their passwords.

## Set up "a well-known URL for changing passwords" <a href="#set-up-%22a-well-known-url-for-changing-passwords%22" class="w-headline-link">#</a>

`.well-known/change-password` is proposed as [a well-known URL for changing passwords](https://wicg.github.io/change-password-url/). All you have to do is to configure your server to redirect requests for `.well-known/change-password` to the change password URL of your website.

For example, let's say your website is `https://example.com` and the change password URL is `https://example.com/settings/password`. You'll just need to set your server to redirect a request for `https://example.com/.well-known/change-password` to `https://example.com/settings/password`. That's it. For the redirection, [use the HTTP status code](https://wicg.github.io/change-password-url/#semantics) [`302 Found`](https://developer.mozilla.org/docs/Web/HTTP/Status/302), [`303 See Other`](https://developer.mozilla.org/docs/Web/HTTP/Status/303) or [`307 Temporary Redirect`](https://developer.mozilla.org/docs/Web/HTTP/Status/307).

Alternatively you can serve HTML at your `.well-known/change-password` URL with a `<meta>` tag using an [`http-equiv="refresh"`](https://developer.mozilla.org/docs/Web/HTML/Element/meta#attr-http-equiv).

    <meta http-equiv="refresh" content="0;url=https://example.com/settings/password">

### Revisit your change password page HTML <a href="#revisit-your-change-password-page-html" class="w-headline-link">#</a>

The goal of this feature is to help the user's password lifecycle be more fluid. You can do two things to empower the user to update their password without friction:

- If your change-password form needs the current password, add `autocomplete="current-password"` to the `<input>` tag to help the password manager autofill it.
- For the new password field (in many cases it's two fields to ensure that the user has entered the new password correctly), add `autocomplete="new-password"` to the `<input>` tag to help the password manager suggest a generated password.

Learn more at [Sign-in form best practices](/sign-in-form-best-practices/#new-password).

## How it is used in real world <a href="#how-it-is-used-in-real-world" class="w-headline-link">#</a>

### Examples <a href="#examples" class="w-headline-link">#</a>

Thanks to Apple Safari's [implementation](https://developer.apple.com/documentation/safari-release-notes/safari-13-release-notes), `/.well-known/change-password`, has already been available on some major websites for a while:

- [Google](https://accounts.google.com/.well-known/change-password)
- [GitHub](https://github.com/.well-known/change-password)
- [Facebook](https://www.facebook.com/.well-known/change-password)
- [Twitter](http://twitter.com/.well-known/change-password)
- [WordPress](https://wordpress.com/.well-known/change-password)

Try them yourself and do the same for yours!

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

A well-known URL for changing passwords has been [supported in Safari since 2019](https://webkit.org/blog/9170/safari-technology-preview-84-with-safari-13-features-is-now-available/). Chrome's password manager is starting to support it from version 86 onwards (which is scheduled for Stable release in late October 2020) and other Chromium-based browsers may follow. [Firefox considers it worth implementing](https://mozilla.github.io/standards-positions/#change-password-url), but has not signalled that it plans to do so as of August 2020.

### Chrome's password manager behavior <a href="#chrome&#39;s-password-manager-behavior" class="w-headline-link">#</a>

Let's have a look at how Chrome's password manager treats vulnerable passwords.

Chrome's password manager is able to check for leaked passwords. By navigating to `about://settings/passwords` users can run **Check passwords** against stored passwords, and see a list of passwords that are recommended for update.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format" alt="Chrome&#39;s Check passwords functionality" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2qTEnaWJhxDcvX6hfgrY.png?auto=format&amp;w=1600 1600w" width="1478" height="845" /><figcaption>Chrome's <strong>Check passwords</strong> functionality</figcaption></figure>By clicking the **Change password** button next to a password that is recommended to be updated, the browser will:

- Open the website's change password page if `/.well-known/change-password` is set up correctly.
- Open the website's homepage if `/.well-known/change-password` is not set up and Google doesn't know the fallback.

## What if the server returns `200 OK` even `/.well-known/change-password` doesn't exist?

Password managers try to determine if a website supports a well-known URL for changing passwords by sending a request to `/.well-known/change-password` before actually forwarding a user to this URL. If the request returns `404 Not Found` it is obvious that the URL is not available, but a `200 OK` response doesn't necessarily mean that the URL is available, because there are a few edge cases:

- A server-side-rendering website displays "Not found" when there is no content but with `200 OK`.
- A server-side-rendering website responds with `200 OK` when there is no content after redirecting to the "Not found" page.
- A single page app responds with the shell with `200 OK` and renders the "Not found" page on the client side when there is no content.

For these edge cases users will be forwarded to a "Not Found" page and that will be a source of confusion.

That's why there's [a proposed standard mechanism](https://wicg.github.io/change-password-url/response-code-reliability.html) to determine whether the server is configured to respond with `404 Not Found` when there is genuinely no content, by requesting a random page. Actually, the URL is also reserved: `/.well-known/resource-that-should-not-exist-whose-status-code-should-not-be-200`. Chrome for example uses this URL path to determine whether it can expect a proper change password URL from `/.well-known/change-password` in advance.

When you are deploying `/.well-known/change-password`, make sure that your server returns `404 Not Found` for any non-existing contents.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

If you have any feedback on the specification, please file an issue to [the spec repository](https://github.com/wicg/change-password-url/issues).

## Resources <a href="#resources" class="w-headline-link">#</a>

- [A Well-Known URL for Changing Passwords](https://wicg.github.io/change-password-url/)
- [Detecting the reliability of HTTP status codes](https://wicg.github.io/change-password-url/response-code-reliability.html)
- [Sign-in form best practices](/sign-in-form-best-practices/)

Photo by [Matthew Brodeur](https://unsplash.com/photos/zEFyM4sulJ8) on [Unsplash](https://unsplash.com)

<a href="/tags/identity/" class="w-chip">Identity</a> <a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: Sep 24, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/change-password-url/index.md)

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
