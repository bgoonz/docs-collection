<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Sign-up form best practices codelab

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

This codelab shows you how to build a sign-up form that's secure, accessible, and easy to use.

## Step 1: Use meaningful HTML <a href="#step-1:-use-meaningful-html" class="w-headline-link">#</a>

In this step you'll learn how to use form elements to make the most of built-in browser features.

- Click **Remix to Edit** to make the project editable.

Take a look at the HTML for your form in `index.html`. You'll see there are inputs for name, email and password. Each is in a section, and each has a label. The **Sign up** button is… a `<button>`! Later in this codelab, you'll learn the special powers of all these elements.

`<input>` elements don't have closing tags. That's because they are [void](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements) (empty) elements: they don't have any content in themselves. A "/" character at the end of a void element is optional: either `<input>` or `<input />` is OK.

    <form action="#" method="post">

      <h1>Sign up</h1>

      <section>
        <label>Full name</label>
        <input>
      </section>

      <section>
        <label>Email</label>
        <input>
      </section>

      <section>
        <label>Password</label>
        <input>
      </section>

      <button id="sign-up">Sign up</button>

    </form>

Click **View App** to preview your sign-up form. This shows you what a form looks like with no CSS other than the [default browser styles](https://bitsofco.de/a-look-at-css-resets-in-2018).

- Do the default styles _look_ OK? What would you change to make the form look better?
- Do the default styles _work_ OK? What problems might be encountered using your form as it is? What about on mobile? What about for screenreaders or other [assistive technologies](/a11y-tips-for-web-dev)?
- Who are your users, and what devices and browsers are you targeting?

[Browser Default Styles](https://browserdefaultstyles.com) lists default CSS for HTML elements.

### Test your form <a href="#test-your-form" class="w-headline-link">#</a>

You could acquire a lot of hardware and set up a [device lab](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/), but there are cheaper and simpler ways to try out your form on a range of browsers, platforms and devices:

- [Use Chrome DevTools Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode) to simulate mobile devices.
- [Send the URL from your computer to your phone](https://support.google.com/chrome/answer/9430554).
- Use a service such as [BrowserStack](https://www.browserstack.com/open-source) to test on a range of devices and browsers.
- Try out the form using a screenreader tool such as the [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) Chrome extension.

**Warning**: Testing your site on a range of devices and browsers is especially important for forms, because [small problems can cause high bounce rates](https://baymard.com/checkout-usability) and cause users to give up on creating an account or completing a purchase.

Click **View App** to preview your sign-up form.

- Try out your form on different devices using Chrome DevTools Device Mode.
- Now open the form on a phone or other real devices. What differences do you see?

## Step 2: Add CSS to make the form work better <a href="#step-2:-add-css-to-make-the-form-work-better" class="w-headline-link">#</a>

Click **View Source** to return to your source code.

There's nothing wrong with the HTML so far, but you need to make sure your form works well for a range of users on mobile and desktop.

In this step you'll add CSS to make the form easier to use.

Copy and paste all the following CSS into `css/main.css` file:

Click **View App** to see your styled sign-up form. Then click **View Source** to return to `css/main.css`.

- Does this CSS work for a variety of browsers and screen sizes?

- Try adjusting `padding`, `margin`, and `font-size` to suit your test devices.

- The CSS is mobile-first. [Media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries) are used to apply CSS rules for viewports that are at least `400px` wide, and then again for viewports that are at least `500px` wide. Are these [breakpoints](https://www.browserstack.com/guide/responsive-design-breakpoints) adequate? How should you choose breakpoints for forms?

**Viewport** in this context means the display area available for your page. Mobile phones have a smaller viewport than laptops, and a small browser window on a desktop monitor has a smaller viewport than a maximized browser window.

## Step 3: Add attributes to help users enter data <a href="#step-3:-add-attributes-to-help-users-enter-data" class="w-headline-link">#</a>

In this step you add attributes to your input elements to enable the browser to store and autofill form field values, and warn of fields with missing or invalid data.

Update your `index.html` file so the form code looks like this:

    <form action="#" method="post">

      <h1>Sign up</h1>

      <section>
        <label for="name">Full name</label>
        <input id="name" name="name" autocomplete="name"
               pattern="[\p{L}\.\- ]+" required>
      </section>

      <section>
        <label for="email">Email</label>
        <input id="email" name="email" autocomplete="username"
               type="email" required>
      </section>

      <section>
        <label for="password">Password</label>
        <input id="password" name="password" autocomplete="new-password"
               type="password" minlength="8" required>
      </section>

      <button id="sign-up">Sign up</button>

    </form>

The `type` values do a lot:

- `type="password"` obscures text as it's entered and enables the browser's [password manager](https://passwords.google.com/) to suggest a strong password.
- `type="email"` provides basic validation and ensures mobile users get an appropriate keyboard. Try it out!

Click **View App** and then click the **Email** label. What happens? Focus moves to the email input because the label has a `for` value that matches the email input's `id`. The other labels and inputs work the same way. Screenreaders also announce label text when the label (or the label's associated input) gets focus. You can try that using the [ChromeVox extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en).

Try submitting the form with an empty field. The browser won't submit the form, and it prompts to complete missing data and sets focus. That's because you added the `require` attribute to all the inputs. Now try submitting with a password that has less than eight characters. The browser warns that the password isn't long enough and sets focus on the password input because of the `minlength="8"` attribute. The same works for `pattern` (used for the name input) and other [validation constraints](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation). The browser does all this automatically, without needing any extra code.

Using the `autocomplete` value `name` for the **Full name** input makes sense, but what about the other inputs?

- `autocomplete="username"` for the **Email** input means the browser's password manager will store the email address as the 'name' for this user (the username!) to go with the password.
- `autocomplete="new-password"` for **Password** is a hint to the password manager that it should offer to store this value as the password for the current site. You can then use `autocomplete="current-password"` to enable autofill in a sign-in form (remember, this is _sign-up_ form).

[Sign-in form best practices](/sign-in-form-best-practices) has more tips for improving form design, layout, and accessibility.

## Step 4: Help users enter secure passwords <a href="#step-4:-help-users-enter-secure-passwords" class="w-headline-link">#</a>

With the form as it is, did you notice anything wrong with the password input?

There are two issues:

- There's no way to know if there are constraints on the password value.
- You can't see the password to check if you got it right.

Don't make users guess!

Update the password section of `index.html` with the following code:

    <section>
      <label for="password">Password</label>
      <button id="toggle-password" type="button" aria-label="Show password as plain text.
              Warning: this will display your password on the screen.">Show password</button>
      <input id="password" name="password" type="password" autocomplete="new-password"
             minlength="8" aria-describedby="password-constraints" required>
      <div id="password-constraints">Eight or more characters.</div>
    </section>

This adds new features to help users enter passwords:

- A button (actually just text) to toggle password display. (The button functionality will be added with JavaScript.)
- An `aria-label` attribute for the password-toggle button.
- An `aria-describedby` attribute for the password input. Screenreaders read the label text, the input type (password), and then the description.

To enable the password-toggle button and show users information about password constraints, copy all the JavaScript below and paste it into your own `js/main.js` file.

(The CSS is already in place from step 2. Take a look, to see how the password-toggle button is styled and positioned.)

- Would an [icon](<(https://material.io/resources/icons/?icon=visibility)>) work better than text to toggle password display? Try [Discount Usability Testing](https://www.nngroup.com/articles/discount-usability-20-years/) with a small group of friends or colleagues.

- To experience how screenreaders work with forms, install the [ChromeVox extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) and navigate through the form. Could you complete the form using ChromeVox only? If not, what would you change?

Here's how your form should look at this point:

## Going further <a href="#going-further" class="w-headline-link">#</a>

This codelab doesn't cover several important features:

- Checking for compromised passwords. You should never allow passwords that have been compromised. You can (and should) [use a password-checking service to catch compromised passwords](/sign-up-form-best-practices/#no-compromised-passwords). You can use an existing service or run one yourself on your own servers. Try it out! Add password checking to your form.

- Link to your Terms of Service and privacy policy documents: make it clear to users how you safeguard their data.

- Style and branding: make sure these match the rest of your site. When entering names and addresses and making payment, users need to feel comfortable, trusting that they're still in the right place.

- [Analytics and Real User Monitoring](/payment-and-address-form-best-practices#analytics-rum): enable the performance and usability of your form design to be tested and monitored for real users.

<a href="/sign-up-form-best-practices" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to article</a>

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
