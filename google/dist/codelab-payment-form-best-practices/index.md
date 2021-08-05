<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Payment form best practices codelab

Dec 9, 2020 <span class="w-author__separator">•</span> Updated Dec 9, 2020

[<img src="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Dutton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="
                        https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,
                        https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,
                        https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,
                        https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,
                        https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x
                      " width="64" height="64" />](/authors/samdutton/)

<a href="/authors/samdutton/" class="w-author__name-link">Sam Dutton</a>

- <a href="https://twitter.com/sw12" class="w-author__link">Twitter</a>
- <a href="https://github.com/samdutton" class="w-author__link">GitHub</a>

This codelab shows you how to build a payment form that is secure, accessible and easy to use.

**Caution**: This article is about frontend best practices for payment forms. It does not explain how to implement transactions on your site. To find out more about adding payment functionality to your website, see [Web Payments](/payments).

## Step 1: Use HTML as intended <a href="#step-1:-use-html-as-intended" class="w-headline-link">#</a>

Use elements built for the job:

- `<form>`
- `<section>`
- `<label>`
- `<input>`, `<select>`, `<textarea>`
- `<button>`

As you'll see, these elements enable built-in browser functionality, improve accessibility, and add meaning to your markup.

- Click **Remix to Edit** to make the project editable.

Take a look at the HTML for your form in `index.html`.

    <form action="#" method="post">

      <h1>Payment form</h1>

      <section>
        <label>Card number</label>
        <input>
      </section>

      <section>
        <label>Name on card</label>
        <input>
      </section>

      <section id="cc-exp-csc">
        <div>
          <label>Expiry date</label>
          <input>
        </div>
        <div>
          <label>Security code</label>
          <input>
          <div class="explanation">Last 3 digits on back of card</div>
        </div>
      </section>

      <button id="complete-payment">Complete payment</button>

    </form>

There are `<input>` elements for card number, name on card, expiry date and security code. They're all wrapped in `<section>` elements, and each has a label. The **Complete Payment** button is an HTML `<button>`. Later in this codelab you'll learn about the browser features you can access by using these elements.

`<input>` elements don't have closing tags. That's because they are [void](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements) (empty) elements: they don't have any content in themselves. A "/" character at the end of a void element is optional: either `<input>` or `<input />` is OK.

Click **View App** to preview your payment form.

- Does the form work well enough as it is?
- Is there anything you would change to make it work better?
- How about on mobile?

Click **View Source** to return to your source code.

## Step 2: Design for mobile and desktop <a href="#step-2:-design-for-mobile-and-desktop" class="w-headline-link">#</a>

The HTML you added is valid, but the default browser styling makes the form hard to use, especially on mobile. It doesn't look too good, either.

You need to ensure your forms work well on a range of devices by adjusting padding, margins, and font sizes.

Copy all the CSS below and paste it into your own `css/main.css` file.

That's a lot of CSS! The main things to be aware of are the changes to sizes:

- `padding` and `margin` are added to inputs.
- `font-size` and other values are different for different viewport sizes.

When you're ready, click **View App** to see the styled form. You'll also notice that borders have been adjusted, and `display: block;` is used for labels so they go on a line on their own, and inputs can be full width. [Sign-in form best practices](/sign-in-form-best-practices/#label:~:text=put%20your%20labels%20above%20your%20inputs) explains the benefits of this approach in more detail.

The `:invalid` selector is used to indicate when an input has an invalid value. (You'll use this later in the codelab.)

The CSS is mobile-first:

- The default CSS is for viewports less than `400px` wide.
- [Media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries) are used to override the default for viewports that are at least `400px` wide, and then again for viewports that are at least `500px` wide. This should work well for smaller phones, mobile devices with larger screens, and on desktop.

Whenever you build for the web, you need to test on different devices and viewport sizes. That's especially true for forms, because one small glitch can make them unusable. You should always adjust [CSS breakpoints](/responsive-web-design-basics/#breakpoints) to ensure they work well with your content and your target devices.

- Is the whole form visible?
- Are the form inputs big enough?
- Is all the text readable?
- Did you notice any differences between using a real mobile device, and viewing the form in Device Mode in Chrome DevTools?
- Did you need to adjust breakpoints?

There are several ways to test your form on different devices:

- [Use Chrome DevTools Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode) to simulate mobile devices.
- [Send the URL from your computer to your phone](https://support.google.com/chrome/answer/9430554).
- Use a service such as [BrowserStack](https://www.browserstack.com/open-source) to test on a range of devices and browsers.

## Step 3: Add attributes to help users enter data <a href="#step-3:-add-attributes-to-help-users-enter-data" class="w-headline-link">#</a>

Enable the browser to store and autofill input values, and provide access to secure built-in payment and validation features.

Add attributes to the form in your `index.html` file so it looks like this:

    <form action="#" method="post">

      <h1>Payment form</h1>

      <section>
        <label for="cc-number">Card number</label>
        <input id="cc-number" name="cc-number" autocomplete="cc-number" inputmode="numeric" pattern="[\d ]{10,30}" required>
      </section>

      <section>
        <label for="cc-name">Name on card</label>
        <input id="cc-name" name="cc-name" autocomplete="cc-name" pattern="[\p{L} \-\.]+" required>
      </section>

      <section id="cc-exp-csc">
        <div>
          <label for="cc-exp">Expiry date</label>
          <input id="cc-exp" name="cc-exp" autocomplete="cc-exp" placeholder="MM/YY" maxlength="5" required>
        </div>
        <div>
          <label for="cc-csc">Security code</label>
          <input id="cc-csc" name="cc-csc" autocomplete="cc-csc" inputmode="numeric" maxlength="3" required>
          <div class="explanation">Back of card, last 3 digits</div>
        </div>
      </section>

      <button id="complete-payment">Complete payment</button>

    </form>

View your app again and then tap or click in the **Card number** field. Depending on the device and platform, you may see a chooser showing payment methods stored for the browser, like the one below.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format" alt="Built-in browser payment chooser and autofill." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=200   200w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=228   228w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=260   260w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=296   296w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=338   338w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=385   385w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=439   439w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=500   500w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=571   571w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=650   650w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=741   741w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=845   845w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=964   964w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=1098 1098w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=1252 1252w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=1428 1428w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/yPPoZYFMeSILBjgyjcFI.png?auto=format&amp;w=1600 1600w
                  " width="800" height="684" /><figcaption>Built-in browser payment chooser and autofill.</figcaption></figure>Once you select a payment method and enter your security code, the browser autofills the form using the payment card `autocomplete` values you added to the form:

- `cc-number`
- `cc-name`
- `cc-exp`
- `cc-csc`

Many browsers also check and confirm the validity of credit card numbers and security codes.

Don't be alarmed! Your browser may be able to autofill the form with stored payment card data, but no payment can be made, and no data is transferred or saved.

On a mobile device you'll also notice that you get a numeric keyboard as soon as you tap into the **Card number** field. That's because you used `inputmode="numeric"`. For numeric fields this makes it easier to enter numbers and impossible to enter non-numeric characters, and nudges users to remember the type of data they're entering.

It's extremely important to correctly add all available `autocomplete` values to payment forms. It's quite common for sites to miss out the `autocomplete` value for the card expiry date and other fields. If a single `autofill` value is wrong or missing, users will need to retrieve their actual card to manually enter card data, and you may lose out on a sale. If autofill on payment forms doesn't work properly, users may also decide to keep a record of payment card details on their phone or computer, which is highly insecure.

Research shows that [it may be better to use separate select elements for month and year](https://baymard.com/blog/how-to-format-expiration-date-fields) rather than a single input. It's up to you which you think is best. Test this out by remixing and editing the HTML from our complete [payment form demo](https://glitch.com/~payment-form), which includes code for both types of expiry date field.

Try submitting the payment form with an empty field. The browser prompts to complete missing data. Now add a letter to the value in the **Card number** field and try submitting the form. The browser warns that value is invalid. This happens because you used the `pattern` attribute to specify valid values for a field. The same works for `maxlength` and other [validation constraints](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) No JavaScript required.

Your payment form should now look this:

- Try removing `autocomplete` values and filling in the payment form. What difficulties do you encounter?
- Try out payment forms on online stores. Consider what works well and what goes wrong. Are there any common problems or best practices you should follow?

## Step 4: Disable the payment button once the form is submitted <a href="#step-4:-disable-the-payment-button-once-the-form-is-submitted" class="w-headline-link">#</a>

You should consider disabling a submit button once the user has tapped or clicked it—especially when the user is making payment. [Many users tap or click buttons repeatedly](https://baymard.com/blog/users-double-click-online), even if they're working fine. That can cause problems with payment processing and add to server load.

Add the following JavaScript to your `js/main.js` file:

    const form = document.querySelector('form');
    const completePaymentButton = document.querySelector('button#complete-payment');

    form.addEventListener('submit', handleFormSubmission);

    function handleFormSubmission(event) {
      event.preventDefault();
      if (form.checkValidity() === false) {
        // Handle invalid form data.
      } else {
        completePaymentButton.textContent = 'Making payment...';
        completePaymentButton.disabled = 'true';
        setTimeout(() => {alert('Made payment!');}, 500);
      }
    }

Try submitting the payment form and see what happens.

**Caution**: Some sites leave form submit buttons disabled until the user has correctly completed all form fields. It's best not to do that, since users may accidentally leave out a required value, or use an invalid value, then tap or click the disabled submit button and assume your site is broken! Even if you mark form values as invalid or missing, the user may not see the warnings (especially for longer forms, and on mobile). Better to validate inline while the user is entering data–_and_ when they try to submit the form.

Here is how your code should look at this point, with the addition of some comments and a `validate()` function:

- You'll notice that the JavaScript includes commented-out code for data validation. This code uses the [Constraint Validation API](https://html.spec.whatwg.org/multipage/forms.html#constraints) (which is [widely supported](https://caniuse.com/#search=constraint%20validation)) to add custom validation, accessing built-in browser UI to set focus and display prompts. Un-comment the code and try it out. You'll need to set appropriate values for `someregex` and `message`, and set a value for `someField`.

- What [analytics and Real User Monitoring data](/payment-and-address-form-best-practices#analytics-rum) would you monitor in order to identify ways to improve your forms?

Your complete payment form should now look like this:

- [Try out your form on different devices](#different-devices). What devices and browsers are you targeting? How could the form be improved?

## Going further <a href="#going-further" class="w-headline-link">#</a>

Consider the following crucial form features that are not covered in this codelab:

- Link to your Terms of Service and privacy policy documents: make it clear to users how you safeguard their data.

- Style and branding: make sure these match the rest of your site. When entering names and addresses and making payment, users need to feel comfortable, trusting that they're still in the right place.

- [Analytics and Real User Monitoring](/payment-and-address-form-best-practices#analytics-rum): enable the performance and usability of your form design to be tested and monitored for real users.

<a href="/payment-and-address-form-best-practices" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to article</a>

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
