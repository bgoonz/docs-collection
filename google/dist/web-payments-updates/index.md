<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format" alt="Transfering money from a phone" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/BBvuUcrVtDPtSK0R1x3v.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#updates-to-the-web-payments-apis" class="w-toc__header--link">Updates to the Web Payments APIs</a>

- [New method: hasEnrolledInstrument()](<#new-method:-hasenrolledinstrument()>)
- [canMakePayment() no longer checks for instrument presence](<#canmakepayment()-no-longer-checks-for-instrument-presence>)
- [languageCode removed from basic-card payment method](#languagecode-removed-from-basic-card-payment-method)
- [PaymentRequest.show() now takes an optional detailsPromise](<#paymentrequest.show()-now-takes-an-optional-detailspromise>)
- [PaymentRequestEvent.changePaymentMethod()](<#paymentrequestevent.changepaymentmethod()>)
- [Improved local development](#improved-local-development)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Updates to the Web Payments APIs

Stay up to date on what's new in Web Payments.

Jun 13, 2019

[<img src="https://web-dev.imgix.net/image/admin/ShZR6Eo34U1LJkBEIgk7.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rouslan Solomakhin" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ShZR6Eo34U1LJkBEIgk7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ShZR6Eo34U1LJkBEIgk7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ShZR6Eo34U1LJkBEIgk7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ShZR6Eo34U1LJkBEIgk7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ShZR6Eo34U1LJkBEIgk7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rsolomakhin/)

<a href="/authors/rsolomakhin/" class="w-author__name-link">Rouslan Solomakhin</a>

- <a href="https://twitter.com/rsolomakhin" class="w-author__link">Twitter</a>

[<img src="https://web-dev.imgix.net/image/admin/usgKL78gSEe0uJ7AE2rT.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Danyao Wang" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/usgKL78gSEe0uJ7AE2rT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/usgKL78gSEe0uJ7AE2rT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/usgKL78gSEe0uJ7AE2rT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/usgKL78gSEe0uJ7AE2rT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/usgKL78gSEe0uJ7AE2rT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/danyao/)

<a href="/authors/danyao/" class="w-author__name-link">Danyao Wang</a>

- <a href="https://twitter.com/danyaowang" class="w-author__link">Twitter</a>

[<img src="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eiji Kitamura" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Mh9DRmQhjlroJM9JDqsu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/agektmr/)

<a href="/authors/agektmr/" class="w-author__name-link">Eiji Kitamura</a>

- <a href="https://twitter.com/agektmr" class="w-author__link">Twitter</a>
- <a href="https://github.com/agektmr" class="w-author__link">GitHub</a>
- <a href="https://blog.agektmr.com" class="w-author__link">Blog</a>

Web Payments have been publicly available in browsers since 2016. The core feature—the [Payment Request API](https://www.w3.org/TR/payment-request/)—is now available across multiple browsers: Chrome, Safari, Edge and soon Firefox. If you're new to Web Payments take a look at the ["Web Payments Overview"](https://developers.google.com/web/fundamentals/payments/?hl=en) to get started.

Since the launch of the Payment Request API and the [Payment Handler API](https://w3c.github.io/payment-handler/), there have been quite a few changes made to their respective specifications. These changes won't break your working code, but we recommend that you look out for them. This post summarizes those updates and will continue accumulating those API changes.

If you want to subscribe to further upcoming changes to Chrome's Web Payments implementation, please join the [Public Payment Request Announcements group](https://groups.google.com/a/chromium.org/forum/#!forum/paymentrequest).

Alternatively, join the [public Web Payments community](https://spectrum.chat/web-payments) for the same updates. You may ask questions there as well.

If you want to check older updates to Chrome, head over to ["Changes in the Payment Request API" article at Web Fundamentals](https://developers.google.com/web/updates/2017/01/payment-request-updates).

## New method: `hasEnrolledInstrument()` <a href="#new-method:-hasenrolledinstrument()" class="w-headline-link">#</a>

In the previous version of the Payment Request API, `canMakePayment()` was used to check for the user's presence of the user's payment instrument. In a recent update to the spec, `canMakePayment()` has been replaced with [`hasEnrolledInstrument()`](https://w3c.github.io/payment-request/#hasenrolledinstrument-method) without changing its functionality.

The [`hasEnrolledInstrument()`](https://chromestatus.com/feature/5646573451083776) method has [consensus from all major browsers](https://chromestatus.com/feature/5646573451083776). Chrome has implemented it in version 74 and both [Webkit](https://bugs.webkit.org/show_bug.cgi?id=197386) and [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=1528663) have tracking bugs but have not yet implemented the method as of June 2019.

To use the new `hasEnrolledInstrument()` method, replace code that looks like this:

    // Checking for instrument presence.
    request.canMakePayment().then(handleInstrumentPresence).catch(handleError);

With code that looks like this:

    // Checking for instrument presence.
    if (request.hasEnrolledInstrument) {
      // hasEnrolledInstrument() is available.
      request.hasEnrolledInstrument().then(handleInstrumentPresence).catch(handleError);
    } else {
      request.canMakePayment().then(handleInstrumentPresence).catch(handleError);
    }

## `canMakePayment()` no longer checks for instrument presence <a href="#canmakepayment()-no-longer-checks-for-instrument-presence" class="w-headline-link">#</a>

Because `hasEnrolledInstrument()` now handles checking for the user's payment instrument, [`canMakePayment()`](https://w3c.github.io/payment-request/#canmakepayment-method) has been updated to only check for payment app availability.

This change to `canMakePayment()` is bound to the implementation of `hasEnrolledInstrument()`. As of June 2019, it is implemented in Chrome 74 but not in any other browsers. Be sure to check if the `hasEnrolledInstrument()` method is available in the user's browser before attempting to use it.

    // Checking for payment app availability without checking for instrument presence.
    if (request.hasEnrolledInstrument) {
      // `canMakePayment()` behavior change corresponds to
      // `hasEnrolledInstrument()` availability.
      request.canMakePayment().then(handlePaymentAppAvailable).catch(handleError);
    } else {
      console.log("Cannot check for payment app availability without checking for instrument presence.");
    }

## `languageCode` removed from `basic-card` payment method <a href="#languagecode-removed-from-basic-card-payment-method" class="w-headline-link">#</a>

`PaymentAddress.languageCode` has been removed from the shipping addresses and billing addresses for `basic-card`. The billing addresses of other payment methods (such as Google Pay) are not affected.

This change has been implemented [in Chrome 74, Firefox, and Safari](https://chromestatus.com/feature/4992562146312192).

## `PaymentRequest.show()` now takes an optional `detailsPromise` <a href="#paymentrequest.show()-now-takes-an-optional-detailspromise" class="w-headline-link">#</a>

[`PaymentRequest.show()`](https://w3c.github.io/payment-request/#show-method) allows a merchant to present a payment request UI before the final total is known. The merchant has ten seconds to resolve the `detailsPromise` before a timeout. This feature is intended for a quick server-side roundtrip.

This feature has shipped in Chrome 75 and Safari.

    // Not implemented in Chrome 74 and older.
    // There's no way to feature-detect this, so check a few
    // older versions of Chrome that you're seeing hit your servers.
    if (/Chrome\/((6[0-9])|(7[0-4]))/g.exec(navigator.userAgent) !== null) {
      return;
    }

    // Supported in Chrome 75+.
    request.show(new Promise(function(resolveDetailsPromise, rejectDetailsPromise) {
      // Find out the exact total amount and call
      // `resolveDetailsPromise(details)`.
      // Use a 3 second timeout as an example.
      window.setTimeout(function() {
        resolveDetailsPromise(details);
      }, 3000); // 3 seconds.
    }))
    .then(handleResponse)
    .catch(handleError);

## `PaymentRequestEvent.changePaymentMethod()` <a href="#paymentrequestevent.changepaymentmethod()" class="w-headline-link">#</a>

The Payment Handler API feature [`PaymentRequestEvent.changePaymentMethod()`](https://chromestatus.com/feature/5698314223747072) allows payment handlers (e.g., Google Pay) to trigger the [`onpaymentmethodchange`](https://w3c.github.io/payment-request/#dom-paymentmethodchangeevent) event handler. `changePaymentMethod()` returns a promise that resolves to a [merchant response](https://w3c.github.io/payment-handler/#dom-paymentmethodchangeresponse) with updated price information (e.g., tax recalculation).

Both `PaymentRequestEvent.changePaymentMethod()` and the `paymentmethodchange` event are available in Chrome 76 and Webkit has implemented the [`paymentmethodchange` event in its Technology Preview](https://webkit.org/blog/9167/whats-new-in-the-payment-request-api-for-apple-pay/).

    // In service worker context, `self` is the global object.
    self.addEventListener('paymentrequest', (evt) => {
      evt.respondWith(new Promise((confirmPaymentFunction, rejectPaymentFunction) => {
        if (evt.changePaymentMethod === undefined) {
          // Not implemented in this version of Chrome.
          return;
        }
        // Notify merchant that the user selected a different payment method.
        evt.changePaymentMethod('https://paymentapp.com', {country: 'US'})
        .then((responseFromMerchant) => {
          if (responseFromMerchant === null) {
            // Merchant ignored the 'paymentmethodchange' event.
            return;
          }
          handleResponseFromMerchant(responseFromMerchant);
        })
        .catch((error) => {
          handleError(error);
        });
      }));
    });

Merchant example:

    if (request.onpaymentmethodchange === undefined) {
      // Feature not available in this browser.
      return;
    }

    request.addEventListener('paymentmethodchange', (evt) => {
      evt.updateWith(updateDetailsBasedOnPaymentMethod(evt, paymentDetails));
    });

**Try it yourself**! We've put together [an example so you can experiment with this API](https://rsolomakhin.github.io/pr/apps/pmc/).

## Improved local development <a href="#improved-local-development" class="w-headline-link">#</a>

Chrome 76 adds two small improvements for developer productivity. If your local development environment uses a self-signed certificate, you can now use the `--ignore-certificate-errors` command line flag to make Chrome allow Web Payments APIs in your development environment. If you develop using a local web server that does not support HTTPS, you can also use the `--unsafely-treat-insecure-origin-as-secure=<origin>` flag to make Chrome treat the HTTP origin as HTTPS.

<span class="w-mr--sm"> Last updated: Jun 13, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-payments-updates/index.md)

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
