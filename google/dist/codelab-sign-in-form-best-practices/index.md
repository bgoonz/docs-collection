<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Use cross-platform browser features to build a sign-in form

Jun 29, 2020 <span class="w-author__separator">•</span> Updated Aug 5, 2020

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

This codelab teaches you how to build a sign-in form that's secure, accessible, and easy to use.

1. Use meaningful HTML <a href="#1.-use-meaningful-html" class="w-headline-link">#</a>

---

Use these elements built for the job:

- `<form>`
- `<section>`
- `<label>`
- `<button>`

As you'll see, these elements enable built-in browser functionality, improve accessibility, and add meaning to your markup.

1.  Click Remix to edit to make the project editable.

2.  Add the following code to the `<body>` element:

<!-- -->

    <form action="#" method="post">
      <h1>Sign in</h1>
      <section>
        <label>Email</label>
        <input>
      </section>
      <section>
        <label>Password</label>
        <input>
      </section>
      <button>Sign in</button>
    </form>

Here's how your `index.html` file should look at this point:

1.  Click **View App** to preview your sign-in form. The HTML that you added is valid and correct, but the default browser styling makes it looks terrible and hard to use, especially on mobile devices.

2.  Click **View Source** to return to your source code.

3.  Design for fingers and thumbs <a href="#2.-design-for-fingers-and-thumbs" class="w-headline-link">#</a>

---

Adjust padding, margins, and font sizes to ensure that your inputs work well on mobile.

1.  Copy the following CSS and paste it into your `style.css` file:

1.  Click **View App** to see your freshly styled sign-in form.

1.  Click **View Source** to return to your `style.css` file.

That's quite a lot of code! The main things to be aware of are the changes to sizes:

- `padding` and `margin` are added to inputs.
- `font-size` is different for mobile and desktop.

The `:invalid` selector is used to indicate when an input has an invalid value. This doesn't work yet.

The CSS layout is mobile-first:

- The default CSS is for viewports less than 450 pixels wide.
- The media query section sets overrides for viewports that are at least 450 pixels wide.

When building your own form like this, it's very important at this point in the process to test your code on real devices on desktop and mobile:

- Is label and input text readable, especially for people with low vision?
- Are the inputs and **Sign in** button large enough to use as touch targets for thumbs?

3. Add input attributes to enable built-in browser features <a href="#3.-add-input-attributes-to-enable-built-in-browser-features" class="w-headline-link">#</a>

---

Enable the browser to store and autofill input values, and provide access to built-in password-management features.

1.  Add attributes to your form HTML so it looks like this:

<!-- -->

    <form action="#" method="post">
      <h1>Sign in</h1>
      <section>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="username" required autofocus>
      </section>
      <section>
        <label for="current-password">Password</label>
        <input id="password" name="password" type="password" autocomplete="new-password" required>
      </section>
      <button id="sign-in">Sign in</button>
    </form>

1.  View your app again and then click **Email**.

    Notice how focus moves to the email input. This is because the label is associated with the input through the `for="email"` attribute. Screenreaders also announce the label text when the label or the label's associated input gets focus.

2.  Focus the email input on a mobile device.

    Notice how the keyboard is optimized for typing an email address. For example, the `@` and `.` characters might be shown on the primary keyboard, and the operating system might show stored emails above the keyboard. All of this happens because the `type="email"` attribute is applied to an `<input>` element.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=200   200w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=228   228w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=260   260w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=296   296w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=338   338w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=385   385w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=439   439w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=500   500w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=571   571w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=650   650w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=741   741w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=845   845w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=964   964w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=1098 1098w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=1252 1252w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=1428 1428w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dUtDcvYy1RMzEYBi7Ce0.png?auto=format&amp;w=1600 1600w
                  " width="800" height="1504" /></figure>1.  Type some text into the password input.

    The text is hidden by default because the `type="password"` attribute has been applied to the element.

- The `autocomplete`, `name`, `id`, and `type` attributes help browsers understand the role of inputs in order to store data that can be used later for autofill.

1.  Focus the email input on a desktop device and type some text.

    You can see the URL of your app when you click **Fullscreen** ![The Fullscreen icon](/images/glitch/fullscreen.svg). If you stored any email addresses in your browser, you probably see a dialog that lets you select from those stored emails. This happens because the `autocomplete="username"` attribute applied to the email input.

- `autocomplete="username"` and `autocomplete="current-password"` help browsers use stored values to autofill the inputs.

For email inputs, use `autocomplete="username"` because `username` is recognized by password managers in modern browsers, even though you should use `type="email"`, and you may want to use `id="email"` and `name="email"`.

Different browsers use [different techniques](/sign-in-form-best-practices/#password-managers:~:text=Browser%20password%20and%20autofill%20systems%20are%20not%20simple) to work out the role of form inputs and provide autofill for a range of different websites.

Add and remove attributes to try this yourself.

It's extremely important to test behavior across platforms. You should enter values and submit the form in different browsers on different devices. It's easy to test on a range of platforms with BrowserStack, which is [free for open source projects](https://www.browserstack.com/open-source). Try it!

Here's how your `index.html` file should look at this point:

4. Add UI to toggle password display <a href="#4.-add-ui-to-toggle-password-display" class="w-headline-link">#</a>

---

Usability experts [strongly recommend](https://www.nngroup.com/articles/stop-password-masking/) the addition of an icon or button that lets users see the text that they enter in the **Password** field. There's [no built-in way to do this](https://twitter.com/sw12/status/1251191795377156099), so you need to implement it yourself with JavaScript.

The code to add this functionality is straightforward. This example uses text, not an icon.

Update the [`index.html`](https://glitch.com/edit/#!/sign-in-form-codelab-4?path=index.html:22:2), [`style.css`](https://glitch.com/edit/#!/sign-in-form-codelab-4?path=style.css:34:0), and [`script.js`](https://glitch.com/edit/#!/sign-in-form-codelab-4?path=script.js) files as follows.

1.  Add a toggle to the password section in the `index.html` file:

<!-- -->

    <section>
      <label for="password">Password</label>
      <button id="toggle-password" type="button" aria-label="Show password as plain text. Warning: this will display your password on the screen.">Show password</button>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
    </section>

1.  Add the following CSS to the bottom of the `style.css` file:

<!-- -->

    button#toggle-password {
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 300;
      padding: 0;
      position: absolute;
      top: -4px;
      right: -2px;
    }

This makes the **Show password** button look like plain text and displays it in the top-right corner of the password section.

1.  Add the following JavaScript to the `script.js` file to toggle password display and set the appropriate `aria-label`:

<!-- -->

    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');

    togglePasswordButton.addEventListener('click', togglePassword);

    function togglePassword() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Hide password';
        togglePasswordButton.setAttribute('aria-label',
          'Hide password.');
      } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Show password';
        togglePasswordButton.setAttribute('aria-label',
          'Show password as plain text. ' +
          'Warning: this will display your password on the screen.');
      }
    }

1.  Try the show password logic now.

    a. View your app. b. Enter some text in the password field. c. Click **Show password**.

2.  Repeat the fourth step on multiple browsers on different operating systems.

Think about UX design: will users notice **Show password** and understand it? Is there a better way to provide this functionality? This is a good moment to try [discount usability testing](https://www.nngroup.com/articles/discount-usability-20-years/) with a small group of friends or colleagues.

To understand how this functionality works for screenreaders, install the [ChromeVox Classic Extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) and navigate through the form. Do the `aria-label` values work as intended?

Some websites, such as [Gmail](https://mail.google.com), use icons, not text, to toggle password display. When you're done with this codelab, implement this with SVG images. [Material Design](https://material.io/resources/icons/?icon=visibility) offers high-quality icons that you can download for free.

Here's how your code should look at this point:

5. Add form validation <a href="#5.-add-form-validation" class="w-headline-link">#</a>

---

You can help users enter their data correctly when you let them validate their data before form submission and show them what they need to change.

HTML form elements and attributes have built-in features for basic validation, but you should also use JavaScript to do more robust validation while users enter data and when they attempt to submit the form.

**Warning**: Client-side validation helps users enter data and can avoid unnecessary server load, but you must always validate and sanitize data on your backend.

This step uses the [Constraint Validation API](https://html.spec.whatwg.org/multipage/forms.html#constraints) (which is [widely supported](https://caniuse.com/#search=constraint%20validation)) to add custom validation with built-in browser UI that sets focus and displays prompts.

Tell users the constraints for passwords and any other inputs. Don't make them guess!

1.  Update the password section of the `index.html` file:

<!-- -->

    <section>
      <label for="password">Password</label>
      <button id="toggle-password" type="button" aria-label="Show password as plain text. Warning: this will display your password on the screen.">Show password</button>
      <input id="password" name="password" type="password" autocomplete="current-password" aria-describedby="password-constraints" required>
      <div id="password-constraints">At least eight characters, with at least one lowercase and one uppercase letter.</div>
    </section>

This adds two new features:

- Information about password constraints
- An `aria-describedby` attribute for the password input (Screenreaders read the label text, the input type (password), and then the description.)

1.  Add the following CSS to the bottom of the `style.css` file:

<!-- -->

    div#password-constraints {
      margin: 5px 0 0 0;
      font-size: 16px;
    }

1.  Add the following JavaScript to `script.js` file:

<!-- -->

    passwordInput.addEventListener('input', resetCustomValidity);
    function resetCustomValidity() {
      passwordInput.setCustomValidity('');
    }

    // A production site would use more stringent password testing.
    function validatePassword() {
      let message= '';
      if (!/.{8,}/.test(passwordInput.value)) {
        message = 'At least eight characters. ';
      }
      if (!/.*[A-Z].*/.test(passwordInput.value)) {
        message += 'At least one uppercase letter. ';
      }
      if (!/.*[a-z].*/.test(passwordInput.value)) {
        message += 'At least one lowercase letter.';
      }
      passwordInput.setCustomValidity(message);
    }

    const form = document.querySelector('form');
    const signinButton = document.querySelector('button#sign-in');

    form.addEventListener('submit', handleFormSubmission);

    function handleFormSubmission(event) {
      event.preventDefault();
      validatePassword();
      form.reportValidity();
      if (form.checkValidity() === false) {
      } else {
        // On a production site do form submission.
        alert('Logging in!')
        signinButton.disabled = 'true';
      }
    }

1.  Try it!

    All recent browsers have built-in features for form validation and support validation with JavaScript.

    a. Enter an invalid email address and click **Sign in**. The browser displays a warning—no JavaScript required!

    b. Enter a valid email address, but then click **Sign in** without a password value. The browser warns that you missed a required value and sets focus on the password input.

    c. Enter an invalid password and click **Sign in**. Now you see different messages depending on what's wrong.

2.  Try different ways to help users enter email addresses and passwords. [Better password form fields](https://aerotwist.com/blog/better-password-form-fields/) offers some clever suggestions.

    Here's how your code should look at this point:

## Go further <a href="#go-further" class="w-headline-link">#</a>

They're not shown in this codelab, but you still need these four crucial sign-in form features:

- Add **Forgot your password?**, a button that makes it easy for users to reset their passwords.

- Link to your terms of service and privacy policy documents so that your users know how you safeguard their data.

- Consider style and branding, and ensure that these additional features match the rest of your website.

- Add [Analytics and RUM](/sign-in-form-best-practices#analytics) so that you can test and monitor the performance and usability of your form design.

<a href="/sign-in-form-best-practices" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to article</a>

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
