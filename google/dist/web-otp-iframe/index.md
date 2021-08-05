<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format" alt="A man entering the credit card number on a computer." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/YLflGBAPWecgtKJLqCJHSzHqe2J2/cjCJPMZpWEK9MgnH3MK1.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#fill-otp-forms-within-cross-origin-iframes-with-webotp-api" class="w-toc__header--link">Fill OTP forms within cross-origin iframes with WebOTP API</a>

- [How WebOTP API works](#how-webotp-api-works)
- [Cross-origin iframes use cases](#cross-origin-iframes-use-cases)
- [How to use WebOTP API from a cross-origin iframe](#how-to-use-webotp-api-from-a-cross-origin-iframe)
- [Annotate bound-origins to the SMS text message](#annotate-bound-origins-to-the-sms-text-message)
- [Configure Permissions Policy](#configure-permissions-policy)
- [Caveats](#caveats)
- [Interoperability](#interoperability)
- [Feedback](#feedback)
- [Resources](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Fill OTP forms within cross-origin iframes with WebOTP API

WebOTP API can now receive OTPs from within iframes.

Apr 21, 2021

[<img src="https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yi Gu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/1jsaXAFfmWcyGObF0MF3.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/yigu/)

<a href="/authors/yigu/" class="w-author__name-link">Yi Gu</a>

- <a href="https://twitter.com/yigsgu" class="w-author__link">Twitter</a>
- <a href="https://github.com/yi-gu" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eiji Kitamura" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/agektmr/)

<a href="/authors/agektmr/" class="w-author__name-link">Eiji Kitamura</a>

- <a href="https://twitter.com/agektmr" class="w-author__link">Twitter</a>
- <a href="https://github.com/agektmr" class="w-author__link">GitHub</a>
- <a href="https://blog.agektmr.com" class="w-author__link">Blog</a>

SMS OTPs (one-time passwords) are commonly used to verify phone numbers, for example as a second step in authentication, or to verify payments on the web. However, switching between the browser and the SMS app, to copy-paste or manually enter the OTP makes it easy to make mistakes and adds friction to the user experience.

The [WebOTP API](/web-otp) gives websites the ability to programmatically obtain the one-time password from a SMS message and enter it automatically in the form for the users with just one tap without switching the app. The SMS is specially-formatted and bound to the origin, so it mitigates chances for phishing websites to steal the OTP as well.

One use case that has yet to be supported in WebOTP was targeting an origin inside an iframe. This is typically used for payment confirmation, especially with [3D Secure](https://en.wikipedia.org/wiki/3-D_Secure). Having [the common format to support cross-origin iframes](https://wicg.github.io/sms-one-time-codes/), WebOTP API now delivers OTPs bound to nested origins starting in Chrome 91.

## How WebOTP API works <a href="#how-webotp-api-works" class="w-headline-link">#</a>

WebOTP API itself is simple enough:

    …
      const otp = await navigator.credentials.get({
        otp: { transport:['sms'] }
      });
    …

The SMS message must be [formatted with the origin-bound one-time codes](/web-otp/#format).

    Your OTP is: 123456.

    @web-otp.glitch.me #12345

Notice that at the last line it contains the origin to be bound to preceded with a `@` followed by the OTP preceded with a `#`.

When the text message arrives, an info bar pops up and prompts the user to verify their phone number. After the user clicks the `Verify` button, the browser automatically forwards the OTP to the site and resolves the `navigator.credentials.get()`. The website can then extract the OTP and complete the verification process.

Learn the basics of using WebOTP at [Verify phone numbers on the web with the WebOTP API](/web-otp/).

## Cross-origin iframes use cases <a href="#cross-origin-iframes-use-cases" class="w-headline-link">#</a>

Entering an OTP in a form within a cross-origin iframe is common in payment scenarios. Some credit card issuers require an additional verification step to check the payer's authenticity. This is called 3D Secure and the form is typically exposed within an iframe on the same page as if it's a part of the payment flow.

For example:

- A user visits `shop.example` to purchase a pair of shoes with a credit card.
- After entering the credit card number, the integrated payment provider shows a form from `bank.example` within an iframe asking the user to verify their phone number for fast checkout.
- `bank.example` sends an SMS that contains an OTP to the user so that they can enter it to verify their identity.

## How to use WebOTP API from a cross-origin iframe <a href="#how-to-use-webotp-api-from-a-cross-origin-iframe" class="w-headline-link">#</a>

To use WebOTP API from within a cross-origin iframe, you need to do two things:

- Annotate both the top-frame origin and the iframe origin in the SMS text message.
- Configure permissions policy to allow the cross-origin iframe to receive OTP from the user directly.

WebOTP API within an iframe in action.

You can try the demo yourself at <https://web-otp-iframe-demo.stackblitz.io>.

### Annotate bound-origins to the SMS text message <a href="#annotate-bound-origins-to-the-sms-text-message" class="w-headline-link">#</a>

When WebOTP API is called from within an iframe, the SMS text message must include the top-frame origin preceded by `@` followed by the OTP preceded by `#` followed by the iframe origin preceded by `@`.

    @shop.example #123456 @bank.exmple

### Configure Permissions Policy <a href="#configure-permissions-policy" class="w-headline-link">#</a>

To use WebOTP in a cross-origin iframe, the embedder must grant access to this API via otp-credentials [permissions policy](https://www.w3.org/TR/permissions-policy-1) to avoid unintended behavior. In general there are two ways to achieve this goal:

- via HTTP Header:

<!-- -->

    Permissions-Policy: otp-credentials=(self "https://bank.example")

- via iframe `allow` attribute:

<!-- -->

    <iframe src="https://bank.example/…" allow="otp-credentials"></iframe>

See [more examples on how to specify a permission policy](https://github.com/w3c/webappsec-permissions-policy/blob/master/permissions-policy-explainer.md#how-is-a-policy-specified) .

### Caveats <a href="#caveats" class="w-headline-link">#</a>

#### Nesting levels <a href="#nesting-levels" class="w-headline-link">#</a>

At the moment Chrome only supports WebOTP API calls from cross-origin iframes that have **no more than one** unique origin in its ancestor chain. In the following scenarios:

- a.com -&gt; b.com
- a.com -&gt; b.com -&gt; b.com
- a.com -&gt; a.com -&gt; b.com
- a.com -&gt; b.com -&gt; c.com

using WebOTP in b.com is supported but using it in c.com is not.

Note that the following scenario is also not supported because of lack of demand and UX complexities.

- a.com -&gt; b.com -&gt; a.com (calls WebOTP API)

## Interoperability <a href="#interoperability" class="w-headline-link">#</a>

While browser engines other than Chromium do not implement the WebOTP API, Safari shares the same [SMS format](https://wicg.github.io/sms-one-time-codes/) with its `input[autocomplete="one-time-code"]` support. In Safari, as soon as an SMS that contains an origin-bound one-time code format arrives with the matched origin, the keyboard suggests to enter the OTP to the input field.

As of April 2021, Safari supports iframe with [a unique SMS format using `%`](https://github.com/WICG/sms-one-time-codes/issues/4#issuecomment-709557866). However, as the spec discussion concluded to go with `@` instead, we hope the implementation of supported SMS format will converge.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

Your feedback is invaluable in making WebOTP API better, so go on and try it out and [let us know](https://bugs.chromium.org/p/chromium/issues/detail?id=1136506) what you think.

## Resources <a href="#resources" class="w-headline-link">#</a>

- [Verify phone numbers on the web with the Web OTP API](https://web.dev/web-otp/)
- [SMS OTP form best practices](https://web.dev/sms-otp-form/)
- [WebOTP API](https://wicg.github.io/web-otp/)
- [Origin-bound one-time codes delivered via SMS](https://wicg.github.io/sms-one-time-codes/)

Photo by [rupixen.com](https://unsplash.com/@rupixen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/online-payment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

<a href="/tags/identity/" class="w-chip">Identity</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Apr 21, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-otp-iframe/index.md)

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
