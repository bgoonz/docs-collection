<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format" alt="A drawing of a woman using OTP to log in to a web app." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/iVHsQYbBj8qNYZeSZKwK.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#verify-phone-numbers-on-the-web-with-the-webotp-api" class="w-toc__header--link">Verify phone numbers on the web with the WebOTP API</a>

- [What is the WebOTP API?](#what-is-the-webotp-api)
- [See it in action](#see-it-in-action)
- [Annotate an &lt;input&gt; tag](#annotate-an-lessinputgreater-tag)
- [Use the WebOTP API](#use-the-webotp-api)
- [Feature detection](#feature-detection)
- [Process the OTP](#process-the-otp)
- [Aborting the message](#aborting)
- [Format the SMS message](#format)
- [Demos](#demos)
- [Use WebOTP from a cross-origin iframe](#use-webotp-from-a-cross-origin-iframe)
- [Annotate bound-origins to the SMS text message](#annotate-bound-origins-to-the-sms-text-message)
- [Configure Permissions Policy](#configure-permissions-policy)
- [FAQ](#faq)
- [The dialog doesn't appear though I'm sending a properly formatted message. What's going wrong?](#no-dialog)
- [Is this API compatible between different browsers?](#is-this-api-compatible-between-different-browsers)
- [Is it safe to use SMS as a way to authenticate?](#is-it-safe-to-use-sms-as-a-way-to-authenticate)
- [Where do I report bugs in Chrome's implementation?](#where-do-i-report-bugs-in-chrome's-implementation)
- [How can I help this feature?](#how-can-i-help-this-feature)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Verify phone numbers on the web with the WebOTP API

Help users with OTPs received through SMS

Oct 7, 2019 <span class="w-author__separator">•</span> Updated Jun 4, 2021

[<img src="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eiji Kitamura" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/agektmr/)

<a href="/authors/agektmr/" class="w-author__name-link">Eiji Kitamura</a>

- <a href="https://twitter.com/agektmr" class="w-author__link">Twitter</a>
- <a href="https://github.com/agektmr" class="w-author__link">GitHub</a>
- <a href="https://blog.agektmr.com" class="w-author__link">Blog</a>

**Gotchas!**

If you want to learn more general SMS OTP form best practices including WebOTP API, checkout [SMS OTP form best practices](/sms-otp-form).

## What is the WebOTP API? <a href="#what-is-the-webotp-api" class="w-headline-link">#</a>

These days, most people in the world own a mobile device and developers are commonly using phone numbers as an identifier for users of their services.

There are a variety of ways to verify phone numbers, but a randomly generated one-time password (OTP) sent by SMS is one of the most common. Sending this code back to the developer's server demonstrates control of the phone number.

This idea is already deployed in many scenarios to achieve:

- **Phone number as an identifier for the user.** When signing up for a new service, some websites ask for a phone number instead of an email address and use it as an account identifier.
- **Two step verification.** When signing in, a website asks for a one-time code sent via SMS on top of a password or other knowledge factor for extra security.
- **Payment confirmation.** When a user is making a payment, asking for a one-time code sent via SMS can help verify the person's intent.

The current process creates friction for users. Finding an OTP within an SMS message, then copying and pasting it to the form is cumbersome, lowering conversion rates in critical user journeys. Easing this has been a long standing request for the web from many of the largest global developers. Android has [an API that does exactly this](https://developers.google.com/identity/sms-retriever/). So does [iOS](https://developer.apple.com/documentation/security/password_autofill/about_the_password_autofill_workflow) and [Safari](https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element).

The WebOTP API lets your app receive specially-formatted messages bound to your app's domain. From this, you can programmatically obtain an OTP from an SMS message and verify a phone number for the user more easily.

**Warning**: Attackers can spoof SMS and hijack a person's phone number. Carriers can also recycle phone numbers to new users after an account is closed. While SMS OTP is useful to verify a phone number for the use cases above, we recommend using additional and stronger forms of authentication (such as multiple factors and the [Web Authentication API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API) to establish new sessions for these users.

## See it in action <a href="#see-it-in-action" class="w-headline-link">#</a>

Let's say a user wants to verify their phone number with a website. The website sends a text message to the user over SMS and the user enters the OTP from the message to verify the ownership of the phone number.

With the WebOTP API, these steps are as easy as one tap for the user, as demonstrated in the video. When the text message arrives, a bottom sheet pops up and prompts the user to verify their phone number. After clicking the **Verify** button on the bottom sheet, the browser pastes the OTP into the form and the form is submitted without the user needing to press **Continue**.

The whole process is diagrammed in the image below.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format" alt="WebOTP API diagram" sizes="(min-width: 494px) 494px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/GrFHzEg98jxCOguAQwHe.png?auto=format&amp;w=988 988w" width="494" height="391" /><figcaption>WebOTP API diagram</figcaption></figure>Try [the demo](https://web-otp.glitch.me) yourself. It doesn't ask for your phone number or send an SMS to your device, but you can send one from another device by copying the text displayed in the demo. This works because it doesn't matter who the sender is when using the WebOTP API.

1.  Go to <https://web-otp.glitch.me> in Chrome 84 or later on an Android device.
2.  Send your phone the following SMS text message from the another phone.

<!-- -->

    Your OTP is: 123456.

    @web-otp.glitch.me #12345

Did you receive the SMS and see the prompt to enter the code to the input area? That is how the WebOTP API works for users.

**Gotchas!**

If the dialog doesn't appear for you, check out [the FAQ](#no-dialog).

Using the WebOTP API consists of three parts:

- A properly annotated `<input>` tag
- JavaScript in your web app
- Formatted message text sent via SMS.

I'll cover the `<input>` tag first.

## Annotate an `<input>` tag <a href="#annotate-an-lessinputgreater-tag" class="w-headline-link">#</a>

WebOTP itself works without any HTML annotation, but for cross-browser compatibility, I highly recommend that you add `autocomplete="one-time-code"` to the `<input>` tag where you expect the user entering an OTP.

This allows Safari 14 or later to suggest that the user to autofill the `<input>` field with an OTP when they receive an SMS with the format described in [Format the SMS message](#format) even though it doesn't support WebOTP.

HTML

    <form>
      <input autocomplete="one-time-code" required/>
      <input type="submit">
    </form>

## Use the WebOTP API <a href="#use-the-webotp-api" class="w-headline-link">#</a>

Because WebOTP is simple, just copying and pasting the following code will do the job. I'll walk you through what's happening anyway.

JavaScript

    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', e => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest('form');
        if (form) {
          form.addEventListener('submit', e => {
            ac.abort();
          });
        }
        navigator.credentials.get({
          otp: { transport:['sms'] },
          signal: ac.signal
        }).then(otp => {
          input.value = otp.code;
          if (form) form.submit();
        }).catch(err => {
          console.log(err);
        });
      });
    }

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

Feature detection is the same as for many other APIs. Listening to `DOMContentLoaded` event will wait for the DOM tree to be ready to query.

JavaScript

    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', e => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        …
        const form = input.closest('form');
        …
      });
    }

**Caution**:

The WebOTP API requires a secure origin (HTTPS). The feature detection on an HTTP website will fail.

### Process the OTP <a href="#process-the-otp" class="w-headline-link">#</a>

The WebOTP API itself is simple enough. Use [`navigator.credentials.get()`](https://developer.mozilla.org/docs/Web/API/CredentialsContainer/get) to obtain the OTP. WebOTP adds a new `otp` option to that method. It only has one property: `transport`, whose value must be an array with the string `'sms'`.

JavaScript

        …
        navigator.credentials.get({
          otp: { transport:['sms'] }
          …
        }).then(otp => {
        …

This triggers the browser's permission flow when an SMS message arrives. If permission is granted, the returned promise resolves with an `OTPCredential` object.

Content of obtained `OTPCredential` object

    {
      code: "123456" // Obtained OTP
      type: "otp"  // `type` is always "otp"
    }

Next, pass the OTP value to the `<input>` field. Submitting the form directly will eliminate the step requiring the user to tap a button.

JavaScript

        …
        navigator.credentials.get({
          otp: { transport:['sms'] }
          …
        }).then(otp => {
          input.value = otp.code;
          if (form) form.submit();
        }).catch(err => {
          console.error(err);
        });
        …

### Aborting the message <a href="#aborting" class="w-headline-link">#</a>

In case the user manually enters an OTP and submits the form, you can cancel the `get()` call by using an `AbortController` instance in the [`options` object](https://developer.mozilla.org/docs/Web/API/CredentialsContainer/get#Parameters).

JavaScript

        …
        const ac = new AbortController();
        …
        if (form) {
          form.addEventListener('submit', e => {
            ac.abort();
          });
        }
        …
        navigator.credentials.get({
          otp: { transport:['sms'] },
          signal: ac.signal
        }).then(otp => {
        …

## Format the SMS message <a href="#format" class="w-headline-link">#</a>

The API itself should look simple enough, but there are a few things you should know before using it. The message must be sent after `navigator.credentials.get()` is called and it must be received on the device where `get()` was called. Finally, the message must adhere to the following formatting:

- The message begins with (optional) human-readable text that contains a four to ten character alphanumeric string with at least one number leaving the last line for the URL and the OTP.
- The domain part of the URL of the website that invoked the API must be preceded by `@`.
- The URL must contain a pound sign ('`#`') followed by the OTP.

For example:

    Your OTP is: 123456.

    @www.example.com #123456

Here are bad examples:

<table><thead><tr class="header"><th>Example malformed SMS Text</th><th>Why this won't work</th></tr></thead><tbody><tr class="odd"><td><code>Here is your code for @example.com #123456</code></td><td><code>@</code> is expected to be the first character of the last line.</td></tr><tr class="even"><td><code>Your code for @example.com is #123456</code></td><td><code>@</code> is expected to be the first character of the last line.</td></tr><tr class="odd"><td><code>Your verification code is 123456</code><br />
<br />
<code>@example.com\t#123456</code></td><td>A single space is expected between <code>@host</code> and <code>#code</code>.</td></tr><tr class="even"><td><code>Your verification code is 123456</code><br />
<br />
<code>@example.com</code><code>  </code><code>#123456</code></td><td>A single space is expected between <code>@host</code> and <code>#code</code>.</td></tr><tr class="odd"><td><code>Your verification code is 123456</code><br />
<br />
<code>@ftp://example.com #123456</code></td><td>URL scheme cannot be included.</td></tr><tr class="even"><td><code>Your verification code is 123456</code><br />
<br />
<code>@https://example.com #123456</code></td><td>URL scheme cannot be included.</td></tr><tr class="odd"><td><code>Your verification code is 123456</code><br />
<br />
<code>@example.com:8080 #123456</code></td><td>Port cannot be included.</td></tr><tr class="even"><td><code>Your verification code is 123456</code><br />
<br />
<code>@example.com/foobar #123456</code></td><td>Path cannot be included.</td></tr><tr class="odd"><td><code>Your verification code is 123456</code><br />
<br />
<code>@example .com #123456</code></td><td>No whitespace in domain.</td></tr><tr class="even"><td><code>Your verification code is 123456</code><br />
<br />
<code>@domain-forbiden-chars-#%/:&lt;&gt;?@[] #123456</code></td><td>No <a href="https://url.spec.whatwg.org/#forbidden-host-code-point">forbidden chars</a> in domain.</td></tr><tr class="odd"><td><code>@example.com #123456</code><br />
<br />
<code>Mambo Jumbo</code></td><td><code>@host</code> and <code>#code</code> are expected to be the last line.</td></tr><tr class="even"><td><code>@example.com #123456</code><br />
<br />
<code>App hash #oudf08lkjsdf834</code></td><td><code>@host</code> and <code>#code</code> are expected to be the last line.</td></tr><tr class="odd"><td><code>Your verification code is 123456</code><br />
<br />
<code>@example.com 123456</code></td><td>Missing <code>#</code>.</td></tr><tr class="even"><td><code>Your verification code is 123456</code><br />
<br />
<code>example.com #123456</code></td><td>Missing <code>@</code>.</td></tr><tr class="odd"><td><code>Hi mom, did you receive my last text</code></td><td>Missing <code>@</code> and <code>#</code>.</td></tr></tbody></table>

## Demos <a href="#demos" class="w-headline-link">#</a>

Try various messages with the demo: <https://web-otp.glitch.me>

You may also fork it and create your version: <https://glitch.com/edit/#!/web-otp>.

## Use WebOTP from a cross-origin iframe <a href="#use-webotp-from-a-cross-origin-iframe" class="w-headline-link">#</a>

Entering an SMS OTP to a cross-origin iframe is typically used for payment confirmation, especially with 3D Secure. Having the common format to support cross-origin iframes, WebOTP API delivers OTPs bound to nested origins. For example:

- A user visits `shop.example` to purchase a pair of shoes with a credit card.
- After entering the credit card number, the integrated payment provider shows a form from `bank.example` within an iframe asking the user to verify their phone number for fast checkout.
- `bank.example` sends an SMS that contains an OTP to the user so that they can enter it to verify their identity.

To use WebOTP API from within a cross-origin iframe, you need to do two things:

- Annotate both the top-frame origin and the iframe origin in the SMS text message.
- Configure permissions policy to allow the cross-origin iframe to receive OTP from the user directly.

WebOTP API within an iframe in action.

You can try the demo at <https://web-otp-iframe-demo.stackblitz.io>.

### Annotate bound-origins to the SMS text message <a href="#annotate-bound-origins-to-the-sms-text-message" class="w-headline-link">#</a>

When WebOTP API is called from within an iframe, the SMS text message must include the top-frame origin preceded by `@` followed by the OTP preceded by `#` and the iframe origin preceded by `@` at the last line.

    Your verification code is 123456

    @shop.example #123456 @bank.exmple

### Configure Permissions Policy <a href="#configure-permissions-policy" class="w-headline-link">#</a>

To use WebOTP in a cross-origin iframe, the embedder must grant access to this API via otp-credentials [permissions policy](https://www.w3.org/TR/permissions-policy-1) to avoid unintended behavior. In general there are two ways to achieve this goal:

via HTTP Header:

    Permissions-Policy: otp-credentials=(self "https://bank.example")

via iframe `allow` attribute:

    <iframe src="https://bank.example/…" allow="otp-credentials"></iframe>

See [more examples on how to specify a permission policy](https://github.com/w3c/webappsec-permissions-policy/blob/master/permissions-policy-explainer.md#how-is-a-policy-specified) .

At the moment Chrome only supports WebOTP API calls from cross-origin iframes that have **no more than one** unique origin in its ancestor chain. In the following scenarios:

- `a.com` -&gt; `b.com`
- `a.com` -&gt; `b.com` -&gt; `b.com`
- `a.com` -&gt; `a.com` -&gt; `b.com`
- `a.com` -&gt; `b.com` -&gt; `c.com`

using WebOTP in `b.com` is supported but using it in `c.com` is not.

Note that the following scenario is also not supported because of lack of demand and UX complexities.

- `a.com` -&gt; `b.com` -&gt; `a.com` (calls WebOTP API)

## FAQ <a href="#faq" class="w-headline-link">#</a>

### The dialog doesn't appear though I'm sending a properly formatted message. What's going wrong? <a href="#no-dialog" class="w-headline-link">#</a>

There are a couple of caveats when testing the API:

- If the sender's phone number is included in the receiver's contact list, this API will not be triggered due to the design of the underlying [SMS User Consent API](https://developers.google.com/identity/sms-retriever/user-consent/request#2_start_listening_for_incoming_messages).
- If you are using a work profile on your Android device and the WebOTP does not work, try installing and using Chrome on your personal profile instead (i.e. the same profile in which you receive SMS messages).

Check back at [the format](#format) to see if your SMS is correctly formatted.

### Is this API compatible between different browsers? <a href="#is-this-api-compatible-between-different-browsers" class="w-headline-link">#</a>

Chromium and WebKit agreed on [the SMS text message format](https://wicg.github.io/sms-one-time-codes) and [Apple announced Safari's support for it](https://developer.apple.com/news/?id=z0i801mg) starting in iOS 14 and macOS Big Sur. Though Safari doesn't support the WebOTP JavaScript API, by annotating `input` element with `autocomplete=["one-time-code"]`, the default keyboard automatically suggests that you enter the OTP if the SMS message complies with the format.

### Is it safe to use SMS as a way to authenticate? <a href="#is-it-safe-to-use-sms-as-a-way-to-authenticate" class="w-headline-link">#</a>

While SMS OTP is useful to verify a phone number when the number is first provided, phone number verification via SMS must be used carefully for re-authentication since phone numbers can be hijacked and recycled by carriers. WebOTP is a convenient re-auth and recovery mechanism, but services should combine it with additional factors, such as a knowledge challenge, or use the [Web Authentication API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API) for strong authentication.

### Where do I report bugs in Chrome's implementation? <a href="#where-do-i-report-bugs-in-chrome&#39;s-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation?

- File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ESMS). Include as much detail as you can, simple instructions for reproducing, and set **Components** to `Blink>WebOTP`.

### How can I help this feature? <a href="#how-can-i-help-this-feature" class="w-headline-link">#</a>

Are you planning to use the WebOTP API? Your public support helps us prioritize features, and shows other browser vendors how critical it is to support them. Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#WebOTP`](https://twitter.com/search?q=%23WebOTP&src=typed_query&f=live) and let us know where and how you're using it.

Find more questions at [the FAQ section in the explainer](https://github.com/WICG/WebOTP/blob/master/FAQ.md).

<a href="/tags/identity/" class="w-chip">Identity</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jun 4, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-otp/index.md)

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
