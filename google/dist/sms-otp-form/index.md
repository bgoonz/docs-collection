<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format" alt="A neon chat bubble sign." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/J3XT84NDBPLlsRN0PhLl.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#sms-otp-form-best-practices" class="w-toc__header--link">SMS OTP form best practices</a>

- [Checklist](#checklist)
- [Use the &lt;input&gt; element](#use-the-lessinputgreater-element)
- [type="text"](#type)
- [inputmode="numeric"](#inputmode)
- [autocomplete="one-time-code"](#autocomplete)
- [Format the SMS text](#format)
- [Use the WebOTP API](#use-the-webotp-api)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# SMS OTP form best practices

Learn how to optimize your SMS OTP form and improve user experience.

Dec 9, 2020 <span class="w-author__separator">•</span> Updated Dec 9, 2020

[<img src="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eiji Kitamura" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/agektmr/)

<a href="/authors/agektmr/" class="w-author__name-link">Eiji Kitamura</a>

- <a href="https://twitter.com/agektmr" class="w-author__link">Twitter</a>
- <a href="https://github.com/agektmr" class="w-author__link">GitHub</a>
- <a href="https://blog.agektmr.com" class="w-author__link">Blog</a>

Asking a user to provide the OTP (one time password) delivered via SMS is a common way to confirm a user's phone number. There are a few use cases for SMS OTP:

- **Two-factor authentication.** In addition to username and password, SMS OTP can be used as a strong signal that the account is owned by the person who received the SMS OTP.
- **Phone number verification.** Some services use a phone number as the user's primary identifier. In such services, users can enter their phone number and the OTP received via SMS to prove their identity. Sometimes it's combined with a PIN to constitute a two-factor authentication.
- **Account recovery.** When a user loses access to their account, there needs to be a way to recover it. Sending an email to their registered email address or an SMS OTP to their phone number are common account recovery methods.
- **Payment confirmation** In payment systems, some banks or credit card issuers request additional authentication from the payer for security reasons. SMS OTP is commonly used for that purpose.

This post explains best practices to build an SMS OTP form for the above use cases.

**Caution**: While this post discusses SMS OTP form best practices, be aware that SMS OTP is not the most secure method of authentication by itself because phone numbers can be recycled and sometimes hijacked. And [the concept of OTP itself is not phishing resistant](https://youtu.be/kGGMgEfSzMw?t=1133).

If you are looking for better security, consider using [WebAuthn](https://www.w3.org/TR/webauthn-2/). Learn more about it from the talk "[What's new in sign-up & sign-in](https://goo.gle/webauthn-video)" at the Chrome Dev Summit 2019 and build a reauthentication experience using a biometric sensor with "[Build your first WebAuthn app](https://goo.gle/WebAuthnReauthCodelab)" codelab.

## Checklist <a href="#checklist" class="w-headline-link">#</a>

To provide the best user experience with the SMS OTP, follow these steps:

- Use the `<input>` element with:
  - `type="text"`
  - `inputmode="numeric"`
  - `autocomplete="one-time-code"`
- Use `@BOUND_DOMAIN #OTP_CODE` as the last line of the OTP SMS message.
- Use the [WebOTP API](/web-otp/).

## Use the `<input>` element <a href="#use-the-lessinputgreater-element" class="w-headline-link">#</a>

Using a form with an `<input>` element is the most important best practice you can follow because it works in all browsers. Even if other suggestions from this post don't work in some browser, the user will still be able to enter and submit the OTP manually.

    <form action="/verify-otp" method="POST">
      <input type="text"
             inputmode="numeric"
             autocomplete="one-time-code"
             pattern="\d{6}"
             required>
    </form>

The following are a few ideas to ensure an input field gets the best out of browser functionality.

### `type="text"` <a href="#type%22text%22" class="w-headline-link">#</a>

Since OTPs are usually five or six digit numbers, using `type="number"` for an input field might seem intuitive because it changes the mobile keyboard to numbers only. This is not recommended because the browser expects an input field to be a countable number rather than a sequence of multiple numbers, which can cause unexpected behavior. Using `type="number"` causes up and down buttons to be displayed beside the input field; pressing these buttons increments or decrements the number and may remove preceding zeros.

Use `type="text"` instead. This won't turn the mobile keyboard into numbers only, but that is fine because the next tip for using `inputmode="numeric"` does that job.

### `inputmode="numeric"` <a href="#inputmode%22numeric%22" class="w-headline-link">#</a>

Use [`inputmode="numeric"`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode) to change the mobile keyboard to numbers only.

Some websites use `type="tel"` for OTP input fields since it also turns the mobile keyboard to numbers only (including `*` and `#`) when focused. This hack was used in the past when `inputmode="numeric"` wasn't widely supported. Since [Firefox started supporting `inputmode="numeric"`](https://github.com/mdn/browser-compat-data/pull/6782), there's no need to use the semantically incorrect `type="tel"` hack.

### `autocomplete="one-time-code"` <a href="#autocomplete%22one-time-code%22" class="w-headline-link">#</a>

[`autocomplete`](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete) attribute lets developers specify what permission the browser has to provide autocomplete assistance and informs the browser about the type of information expected in the field.

With `autocomplete="one-time-code"` whenever a user receives an SMS message while a form is open, the operating system will parse the OTP in the SMS heuristically and the keyboard will suggest the OTP for the user to enter. It works only on Safari 12 and later on iOS, iPadOS, and macOS, but we strongly recommend using it, because it is an easy way to improve the SMS OTP experience on those platforms.

\`autocomplete="one-time-code"\` in action.

`autocomplete="one-time-code"` improves the user experience, but there's more you can do by [ensuring that the SMS message complies with the origin-bound message format](#format).

Optional attributes:

- [`pattern`](https://developer.mozilla.org/docs/Web/HTML/Attributes/pattern) specifies the format that the entered OTP must match. Use regular expressions to specify the matching pattern, for example, `\d{6}` constrains the OTP to a six digit string. Learn more about the `pattern` attribute in \[Use JavaScript for more complex real-time validation\] (https://developers.google.com/web/fundamentals/design-and-ux/input/forms\#use\_javascript\_for\_more\_complex\_real-time\_validation)

- [`required`](https://developer.mozilla.org/docs/Web/HTML/Attributes/required) indicates that a field is required.

For more general form best practices, [Sam Dutton](/authors/samdutton/)'s [Sign-in form best practices](/sign-in-form-best-practices/) is a great starting point.

## Format the SMS text <a href="#format" class="w-headline-link">#</a>

Enhance the user experience of entering an OTP by aligning with [the origin-bound one-time codes delivered via SMS](https://wicg.github.io/sms-one-time-codes/) specification.

The format rule is simple: Finish the SMS message with the receiver domain preceded with `@` and the OTP preceded with `#`.

For example:

    Your OTP is 123456

    @web-otp.glitch.me #123456

Using a standard format for OTP messages makes extraction of codes from them easier and more reliable. Associating OTP codes with websites makes it harder to trick users into providing a code to malicious sites.

The precise rules are:

- The message begins with (optional) human-readable text that contains a four to ten character alphanumeric string with at least one number, leaving the last line for the URL and the OTP.
- The domain part of the URL of the website that invoked the API must be preceded by `@`.
- The URL must contain a pound sign ("`#`") followed by the OTP.

Make sure the number of characters doesn't exceed 140 in total.

To learn more about Chrome specific rules, read [Format the SMS message section of WebOTP API post](/web-otp/#format).

Using this format provides a couple of benefits:

- The OTP will be bound to the domain. If the user is on domains other than the one specified in the SMS message, the OTP suggestion won't appear. This also mitigates the risk of phishing attacks and potential account hijacks.
- Browser will now be able to reliably extract the OTP without depending on mysterious and flaky heuristics.

When a website uses `autocomplete="one-time-code"`, Safari with iOS 14 or later will suggest the OTP following the above rules.

If the user is on a desktop with macOS Big Sur with the same iCloud account set up as on iOS, the OTP received on the iOS device will be available on the desktop Safari as well.

To learn more about other benefits and nuances of the availability on Apple platforms, read [Enhance SMS-delivered code security with domain-bound codes](https://developer.apple.com/news/?id=z0i801mg).

This SMS message format also benefits browsers other than Safari. Chrome, Opera, and Vivaldi on Android also support the origin-bound one-time codes rule with the WebOTP API, though not through `autocomplete="one-time-code"`.

## Use the WebOTP API <a href="#use-the-webotp-api" class="w-headline-link">#</a>

[The WebOTP API](https://wicg.github.io/web-otp/) provides access to the OTP received in an SMS message. By calling [`navigator.credentials.get()`](https://developer.mozilla.org/docs/Web/API/CredentialsContainer/get) with `otp` type (`OTPCredential`) where `transport` includes `sms`, the website will wait for an SMS that complies with the origin-bound one-time codes to be delivered and granted access by the user. Once the OTP is passed to JavaScript, the website can use it in a form or POST it directly to the server.

**Caution**: The WebOTP API requires a secure origin (HTTPS).

    navigator.credentials.get({
      otp: {transport:['sms']}
    })
    .then(otp => input.value = otp.code);

WebOTP API in action.

Learn how to use the WebOTP API in detail in [Verify phone numbers on the web with the WebOTP API](/web-otp/) or copy and paste the following snippet. (Make sure the `<form>` element has an `action` and `method` attribute properly set.)

    // Feature detection
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', e => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        // Cancel the WebOTP API if the form is submitted manually.
        const ac = new AbortController();
        const form = input.closest('form');
        if (form) {
          form.addEventListener('submit', e => {
            // Cancel the WebOTP API.
            ac.abort();
          });
        }
        // Invoke the WebOTP API
        navigator.credentials.get({
          otp: { transport:['sms'] },
          signal: ac.signal
        }).then(otp => {
          input.value = otp.code;
          // Automatically submit the form when an OTP is obtained.
          if (form) form.submit();
        }).catch(err => {
          console.log(err);
        });
      });
    }

Photo by [Jason Leung](https://unsplash.com/photos/mZNRsYE9Qi4) on [Unsplash](https://unsplash.com).

<a href="/tags/identity/" class="w-chip">Identity</a> <a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/forms/" class="w-chip">Forms</a>

<span class="w-mr--sm"> Last updated: Dec 9, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/sms-otp-form/index.md)

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
