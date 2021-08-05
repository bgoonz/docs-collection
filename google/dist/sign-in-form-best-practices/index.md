<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format" alt="A person holding a phone." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/pErOjllBUXhnj68qOhfr.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#sign-in-form-best-practices" class="w-toc__header--link">Sign-in form best practices</a>

- [Checklist](#checklist)
- [Use meaningful HTML](#meaningful-html)
- [Use &lt;form&gt;](#form)
- [Use &lt;label&gt;](#label)
- [Use &lt;button&gt;](#button)
- [Ensure successful form submission](#submission)
- [Don't double up inputs](#no-double-inputs)
- [Make the most of element attributes](#element-attributes)
- [Help users start faster](#autofocus)
- [Keep passwords private—but enable users to see them if they want](#show-password)
- [Give mobile users the right keyboard](#mobile-keyboards)
- [Prevent mobile keyboard from obstructing the Sign in button](#keyboard-obstruction)
- [Help users to avoid re-entering data](#autofill)
- [Use autocomplete="new-password" and id="new-password" for a new password](#new-password)
- [Use autocomplete="current-password" and id="current-password" for an existing password](#current-password)
- [Support password managers](#password-managers)
- [Enable the browser to suggest a strong password](#password-suggestions)
- [Help save users from accidentally missing inputs](#required-fields)
- [Design for fingers and thumbs](#mobile-design)
- [Make sure inputs and buttons are large enough](#tap-targets)
- [Make text big enough](#size-text-correctly)
- [Provide enough space between inputs](#size-margins-correctly)
- [Make sure your inputs are clearly visible](#visible-inputs)
- [Use built-in browser features to warn of invalid input values](#built-in-validation)
- [Use JavaScript where necessary](#javascript)
- [Toggle password display](#password-display)
- [Make password inputs accessible](#accessible-password-inputs)
- [Validate in realtime and before submission](#validation)
- [Analytics and RUM](#analytics)
- [General guidelines](#general-guidelines)
- [Keep learning](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Sign-in form best practices

Use cross-platform browser features to build sign-in forms that are secure, accessible and easy to use.

Jun 29, 2020 <span class="w-author__separator">•</span> Updated Feb 26, 2021

[<img src="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Dutton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samdutton/)

<a href="/authors/samdutton/" class="w-author__name-link">Sam Dutton</a>

- <a href="https://twitter.com/sw12" class="w-author__link">Twitter</a>
- <a href="https://github.com/samdutton" class="w-author__link">GitHub</a>

If users ever need to log in to your site, then good sign-in form design is critical. This is especially true for people on poor connections, on mobile, in a hurry, or under stress. Poorly designed sign-in forms get high bounce rates. Each bounce could mean a lost and disgruntled user—not just a missed sign-in opportunity.

**Try it**! If you would prefer to learn these best practices with a hands-on tutorial, check out the [Sign-in form best practices codelab](/codelab-sign-in-form-best-practices/).

Here is an example of a simple sign-in form that demonstrates all of the best practices:

## Checklist <a href="#checklist" class="w-headline-link">#</a>

- [Use meaningful HTML elements](#meaningful-html): `<form>`, `<input>`, `<label>`, and `<button>`.
- [Label each input with a `<label>`](#label).
- Use element attributes to [access built-in browser features](#element-attributes): `type`, `name`, `autocomplete`, `required`, `autofocus`.
- Give input `name` and `id` attributes stable values that don't change between page loads or website deployments.
- Put sign-in [in its own &lt;form&gt; element](#single-form).
- [Ensure successful form submission](#submission).
- Use [`autocomplete="new-password"`](#new-password) and [`id="new-password"`](#new-password) for the password input in a sign-up form, and for the new password in a reset-password form.
- Use [`autocomplete="current-password"`](#current-password) and [`id="current-password"`](#current-password) for a sign-in password input.
- Provide [Show password](#show-password) functionality.
- [Use `aria-label` and `aria-describedby`](#accessible-password-inputs) for password inputs.
- [Don't double-up inputs](#no-double-inputs).
- Design forms so the [mobile keyboard doesn't obscure inputs or buttons](#keyboard-obstruction).
- Ensure forms are usable on mobile: use [legible text](#size-text-correctly), and make sure inputs and buttons are [large enough to work as touch targets](#tap-targets).
- [Maintain branding and style](#general-guidelines) on your sign-up and sign-in pages.
- [Test in the field as well as the lab](#analytics): build page analytics, interaction analytics, and user-centric performance measurement into your sign-up and sign-in flow.
- [Test across browsers and devices](#devices): form behaviour varies significantly across platforms.

This article is about frontend best practices. It does not explain how to build backend services to authenticate users, store their credentials, or manage their accounts. [12 best practices for user account, authorization and password management](https://cloud.google.com/blog/products/gcp/12-best-practices-for-user-account) outlines core principles for running your own backend. If you have users in different parts of the world, you need to consider localizing your site's use of third-party identity services as well as its content.

There are also two relatively new APIs not covered in this article which can help you build a better sign-in experience:

- [**WebOTP**](/web-otp/): to deliver one-time passcodes or PIN numbers via SMS to mobile phones. This can allow users to select a phone number as an identifier (no need to enter an email address!) and also enables two-step verification for sign-in and one-time codes for payment confirmation.
- [**Credential Management**](https://developers.google.com/web/updates/2016/04/credential-management-api): to enable developers to store and retrieve password credentials and federated credentials programmatically.

## Use meaningful HTML <a href="#meaningful-html" class="w-headline-link">#</a>

Use elements built for the job: `<form>`, `<label>` and `<button>`. These enable built-in browser functionality, improve accessibility, and add meaning to your markup.

### Use `<form>` <a href="#form" class="w-headline-link">#</a>

You might be tempted to wrap inputs in a `<div>` and handle input data submission purely with JavaScript. It's generally better to use a plain old [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element. This makes your site accessible to screenreaders and other assistive devices, enables a range of built-in browser features, makes it simpler to build basic functional sign-in for older browsers, and can still work even if JavaScript fails.

**Gotchas!**

A common mistake is to wrap a whole web page in a single form, but this is liable to cause problems for browser password managers and autofill. Use a different &lt;form&gt; for each UI component that needs a form. For example, if you have sign-in and search on the same page, you should use two form elements.

### Use `<label>` <a href="#label" class="w-headline-link">#</a>

To label an input, use a [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)!

    <label for="email">Email</label>
    <input id="email" …>

Two reasons:

- A tap or click on a label moves focus to its input. Associate a label with an input by using the label's `for` attribute with the input's `name` or `id`.
- Screenreaders announce label text when the label or the label's input gets focus.

Don't use placeholders as input labels. People are liable to forget what the input was for once they've started entering text, especially if they get distracted ("Was I entering an email address, a phone number, or an account ID?"). There are lots of other potential problems with placeholders: see [Don't Use The Placeholder Attribute](https://www.smashingmagazine.com/2018/06/placeholder-attribute/) and [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/) if you're unconvinced.

It's probably best to put your labels above your inputs. This enables consistent design across mobile and desktop and, according to [Google AI research](https://ai.googleblog.com/2014/07/simple-is-better-making-your-web-forms.html), enables quicker scanning by users. You get full width labels and inputs, and you don't need to adjust label and input width to fit the label text.

<figure><img src="https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format" alt="Label and input width is limited when both are on the same line." class="w-screenshot" sizes="(min-width: 500px) 500px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/k0ioJa9CqnMI8vyAvQPS.png?auto=format&amp;w=1000 1000w" width="500" height="253" /><figcaption>Label and input width is limited when both are on the same line.</figcaption></figure>Open the [label-position](https://label-position.glitch.me) Glitch on a mobile device to see for yourself.

### Use `<button>` <a href="#button" class="w-headline-link">#</a>

Use [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) for buttons! Button elements provide accessible behaviour and built-in form submission functionality, and they can easily be styled. There's no point in using a `<div>` or some other element pretending to be a button.

Ensure that the submit button says what it does. Examples include **Create account** or **Sign in**, not **Submit** or **Start**.

### Ensure successful form submission <a href="#submission" class="w-headline-link">#</a>

Help password managers understand that a form has been submitted. There are two ways to do that:

- Navigate to a different page.
- Emulate navigation with `History.pushState()` or `History.replaceState()`, and remove the password form.

With an `XMLHttpRequest` or `fetch` request, make sure that sign-in success is reported in the response and handled by taking the form out of the DOM as well as indicating success to the user.

Consider disabling the **Sign in** button once the user has tapped or clicked it. [Many users click buttons multiple times](https://baymard.com/blog/users-double-click-online) even on sites that are fast and responsive. That slows down interactions and adds to server load.

Conversely, don't disable form submission awaiting user input. For example, don't disable the **Sign in** button if users haven't entered their customer PIN. Users may miss out something in the form, then try repeatedly tapping the (disabled) **Sign in** button and think it's not working. At the very least, if you must disable form submission, explain to the user what's missing when they click on the disabled button.

**Caution**: The default type for a button in a form is `submit`. If you want to add another button in a form (for **Show password**, for example) add `type="button"`. Otherwise clicking or tapping on it will submit the form.

### Don't double up inputs <a href="#no-double-inputs" class="w-headline-link">#</a>

Some sites force users to enter emails or passwords twice. That might reduce errors for a few users, but causes extra work for _all_ users, and [increases abandonment rates](https://uxmovement.com/forms/why-the-confirm-password-field-must-die/). Asking twice also makes no sense where browsers autofill email addresses or suggest strong passwords. It's better to enable users to confirm their email address (you'll need to do that anyway) and make it easy for them to reset their password if necessary.

## Make the most of element attributes <a href="#element-attributes" class="w-headline-link">#</a>

This is where the magic really happens! Browsers have multiple helpful built-in features that use input element attributes.

### Help users start faster <a href="#autofocus" class="w-headline-link">#</a>

Add an `autofocus` attribute to the first input in your sign-in form. That makes it clear where to start and, on desktop at least, means users don't have to select the input to start typing.

## <figure><img src="https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format" alt="Autofocus provides clear visual focus on desktop." class="w-screenshot" sizes="(min-width: 500px) 500px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/27x2icJSXCMdfWOjVAdR.png?auto=format&amp;w=1000 1000w" width="500" height="451" /><figcaption>Autofocus provides clear visual focus on desktop.</figcaption></figure>Keep passwords private—but enable users to see them if they want <a href="#show-password" class="w-headline-link">#</a>

Passwords inputs should have `type="password"` to hide password text and help the browser understand that the input is for passwords. (Note that browsers use [a variety of techniques](#autofill) to understand input roles and decide whether or not to offer to save passwords.)

You should add a **Show password** icon or button to enable users to check the text they've entered—and don't forget to add a **Forgot password** link. See [Enable password display](#password-display).

## <figure><img src="https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format" alt="Password input from the Google sign-in form: with Show password icon and Forgot password link." class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/58suVe0HnSLaJvNjKY53.png?auto=format&amp;w=600 600w" width="300" height="107" /><figcaption>Password input from the Google sign-in form: with <strong>Show password</strong> icon and <strong>Forgot password</strong> link.</figcaption></figure>Give mobile users the right keyboard <a href="#mobile-keyboards" class="w-headline-link">#</a>

Use `<input type="email">` to give mobile users an appropriate keyboard and enable basic built-in email address validation by the browser… no JavaScript required!

If you need to use a telephone number instead of an email address, `<input type="tel">` enables a telephone keypad on mobile. You can also use the `inputmode` attribute where necessary: `inputmode="numeric"` is ideal for PIN numbers. [Everything You Ever Wanted to Know About inputmode](https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/) has more detail.

**Caution**: `type="number"` adds an up/down arrow to increment numbers, so don't use it for numbers that aren't meant to be incremented, such as IDs and account numbers.

### Prevent mobile keyboard from obstructing the **Sign in** button <a href="#keyboard-obstruction" class="w-headline-link">#</a>

Unfortunately, if you're not careful, mobile keyboards may cover your form or, worse, partially obstruct the **Sign in** button. Users may give up before realizing what has happened.

<figure><img src="https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format" alt="The Sign in button: now you see it, now you don&#39;t." class="w-screenshot" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rLo5sW9LBpTcJU7KNnb7.png?auto=format&amp;w=800 800w" width="400" height="360" /><figcaption>The <strong>Sign in</strong> button: now you see it, now you don't.</figcaption></figure>Where possible, avoid this by displaying only the email/phone and password inputs and **Sign in** button at the top of your sign-in page. Put other content below.

<figure><img src="https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format" alt="The keyboard doesn&#39;t obstruct the Sign in button." class="w-screenshot" sizes="(min-width: 200px) 200px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/0OebKiAP4sTgaXbcbvYx.png?auto=format&amp;w=400 400w" width="200" height="342" /><figcaption>The keyboard doesn't obstruct the <strong>Sign in</strong> button.</figcaption></figure>#### Test on a range of devices <a href="#devices" class="w-headline-link">#</a>

You'll need to test on a range of devices for your target audience, and adjust accordingly. BrowserStack enables [free testing for open source projects](https://www.browserstack.com/open-source) on a range of real devices and browsers.

<figure><img src="https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format" alt="The Sign in button: obscured on iPhone 7 and 8, but not on iPhone 11." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/jToMlWgjS3J2WKmjs1hx.png?auto=format&amp;w=1600 1600w" width="800" height="522" /><figcaption>The <strong>Sign in</strong> button: obscured on iPhone 7 and 8, but not on iPhone 11.</figcaption></figure>#### Consider using two pages <a href="#two-pages" class="w-headline-link">#</a>

Some sites (including Amazon and eBay) avoid the problem by asking for email/phone and password on two pages. This approach also simplifies the experience: the user is only tasked with one thing at a time.

<figure><img src="https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format" alt="Two-stage sign-in: email or phone, then password." class="w-screenshot" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/CxpObjYZMs0MMFo66f4P.png?auto=format&amp;w=800 800w" width="400" height="385" /><figcaption>Two-stage sign-in: email or phone, then password.</figcaption></figure>Ideally, this should be implemented with a single &lt;form&gt;. Use JavaScript to initially display only the email input, then hide it and show the password input. If you must force the user to navigate to a new page between entering their email and password, the form on the second page should have a hidden input element with the email value, to help enable password managers to store the correct value. [Password Form Styles that Chromium Understands](https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands) provides a code example.

### Help users to avoid re-entering data <a href="#autofill" class="w-headline-link">#</a>

You can help browsers store data correctly and autofill inputs, so users don't have to remember to enter email and password values. This is particularly important on mobile, and crucial for email inputs, which get [high abandonment rates](https://www.formisimo.com/blog/conversion-rate-increases-57-with-form-analytics-case-study/).

There are two parts to this:

1.  The `autocomplete`, `name`, `id`, and `type` attributes help browsers understand the role of inputs in order to store data that can later be used for autofill. To allow data to be stored for autofill, modern browsers also require inputs to have a stable `name` or `id` value (not randomly generated on each page load or site deployment), and to be in a &lt;form&gt; with a `submit` button.

2.  The `autocomplete` attribute helps browsers correctly autofill inputs using stored data.

For email inputs use `autocomplete="username"`, since `username` is recognized by password managers in modern browsers—even though you should use `type="email"` and you may want to use `id="email"` and `name="email"`.

For password inputs, use the appropriate `autocomplete` and `id` values to help browsers differentiate between new and current passwords.

### Use `autocomplete="new-password"` and `id="new-password"` for a new password <a href="#new-password" class="w-headline-link">#</a>

- Use `autocomplete="new-password"` and `id="new-password"` for the password input in a sign-up form, or the new password in a change-password form.

### Use `autocomplete="current-password"` and `id="current-password"` for an existing password <a href="#current-password" class="w-headline-link">#</a>

- Use `autocomplete="current-password"` and `id="current-password"` for the password input in a sign-in form, or the input for the user's old password in a change-password form. This tells the browser that you want it to use the current password that it has stored for the site.

For a sign-up form:

    <input type="password" autocomplete="new-password" id="new-password" …>

For sign-in:

    <input type="password" autocomplete="current-password" id="current-password" …>

Browsers such as Chrome can use the browser's password manager to autofill fields in the sign-in process for returning users. For these features to work, the browser needs to be able to distinguish when a user changes their password.

Specifically the form for changing the user's password should be cleared or hidden from the page after the new password is set up. If the form for changing the user's password stays filled out on the page after the password change has occurred, the browser may not be able to record the update.

### Support password managers <a href="#password-managers" class="w-headline-link">#</a>

Different browsers handle email autofill and password suggestion somewhat differently, but the effects are much the same. On Safari 11 and above on desktop, for example, the password manager is displayed, and then biometric authentication (fingerprint or facial recognition) is used if available.

<figure><img src="https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format" alt="Sign-in with autocomplete—no text entry required!" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UjBRRYaLbX9bh3LDFcAM.png?auto=format&amp;w=1600 1600w" width="800" height="234" /><figcaption>Sign-in with autocomplete—no text entry required!</figcaption></figure>Chrome on desktop displays email suggestions, shows the password manager, and autofills the password.

<figure><img src="https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format" alt="Autocomplete sign-in flow in Chrome 84." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/mDm1cstWZB9jJDzMmzgE.png?auto=format&amp;w=1600 1600w" width="800" height="232" /><figcaption>Autocomplete sign-in flow in Chrome 84.</figcaption></figure>Browser password and autofill systems are not simple. The algorithms for guessing, storing and displaying values are not standardized, and vary from platform to platform. For example, as pointed out by [Hidde de Vries](https://hiddedevries.nl/en/blog/2018-01-13-making-password-managers-play-ball-with-your-login-form): "Firefox's password manager complements its heuristics with a [recipe system](https://bugzilla.mozilla.org/show_bug.cgi?id=1119454)."

[Autofill: What web devs should know, but don't](https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont) has a lot more information about using `name` and `autocomplete`. The [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control) lists all 59 possible values.

You can help password managers by using different `name` and `id` values in sign-up and sign-in forms, for the `form` element itself, as well as any `input`, `select` and `textarea` elements.

### Enable the browser to suggest a strong password <a href="#password-suggestions" class="w-headline-link">#</a>

Modern browsers use heuristics to decide when to show the password manager UI and suggest a strong password.

Here's how Safari does it on desktop.

<figure><img src="https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format" alt="Password suggestion flow in Safari." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/B1DlZK0CllVjrOUbb5xB.png?auto=format&amp;w=1600 1600w" width="800" height="229" /><figcaption>Password suggestion flow in Safari.</figcaption></figure>(Strong unique password suggestion has been available in Safari since version 12.0.)

Built-in browser password generators mean users and developers don't need to work out what a "strong password" is. Since browsers can securely store passwords and autofill them as necessary, there's no need for users to remember or enter passwords. Encouraging users to take advantage of built-in browser password generators also means they're more likely to use a unique, strong password on your site, and less likely to reuse a password that could be compromised elsewhere.

The downside with this approach is that there's no way to share passwords across platforms. For example, a user may use Safari on their iPhone and Chrome on their Windows laptop.

### Help save users from accidentally missing inputs <a href="#required-fields" class="w-headline-link">#</a>

Add the `required` attribute to both email and password fields. Modern browsers automatically prompt and set focus for missing data. No JavaScript required!

## <figure><img src="https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format" alt="Prompt and focus for missing data on Firefox for desktop (version 76) and Chrome for Android (version 83)." class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/n5Nr290upVmQGvlc263U.png?auto=format&amp;w=1200 1200w" width="600" height="392" /><figcaption>Prompt and focus for missing data on Firefox for desktop (version 76) and Chrome for Android (version 83).</figcaption></figure>Design for fingers and thumbs <a href="#mobile-design" class="w-headline-link">#</a>

The default browser size for just about everything relating to input elements and buttons is too small, especially on mobile. This may seem obvious, but it's a common problem with sign-in forms on many sites.

### Make sure inputs and buttons are large enough <a href="#tap-targets" class="w-headline-link">#</a>

The default size and padding for inputs and buttons is too small on desktop and even worse on mobile.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lJNO6w2dOyp4cYKl5b3y.png?auto=format&amp;w=1600 1600w" width="800" height="434" /></figure>According to [Android accessibility guidance](https://support.google.com/accessibility/android/answer/7101858?hl=en-GB) the recommended target size for touchscreen objects is 7–10 mm. Apple interface guidelines suggest 48x48 px, and the W3C suggest [at least 44x44 CSS pixels](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html). On that basis, add (at least) about 15 px of padding to input elements and buttons for mobile, and around 10 px on desktop. Try this out with a real mobile device and a real finger or thumb. You should comfortably be able to tap each of your inputs and buttons.

The [Tap targets are not sized appropriately](/tap-targets/) Lighthouse audit can help you automate the process of detecting input elements that are too small.

#### Design for thumbs <a href="#design-for-thumbs" class="w-headline-link">#</a>

Search for [touch target](https://www.google.com/search?q=touch+target) and you'll see lots of pictures of forefingers. However, in the real world, many people use their thumbs to interact with phones. Thumbs are bigger than forefingers, and control is less precise. All the more reason for adequately sized touch targets.

### Make text big enough <a href="#size-text-correctly" class="w-headline-link">#</a>

As with size and padding, the default browser font size for input elements and buttons is too small, particularly on mobile.

<figure><img src="https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format" alt="Default styling on desktop and mobile: input text is too small to be legible for many users." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/EeIsqWhLbot15p4SYpo2.png?auto=format&amp;w=1600 1600w" width="800" height="494" /><figcaption>Default styling on desktop and mobile: input text is too small to be legible for many users.</figcaption></figure>Browsers on different platforms size fonts differently, so it's difficult to specify a particular font size that works well everywhere. A quick survey of popular websites shows sizes of 13–16 pixels on desktop: matching that physical size is a good minimum for text on mobile.

This means you need to use a larger pixel size on mobile: `16px` on Chrome for desktop is quite legible, but even with good vision it's difficult to read `16px` text on Chrome for Android. You can set different font pixel sizes for different viewport sizes using [media queries](https://developers.google.com/web/fundamentals/design-and-ux/responsive#apply_media_queries_based_on_viewport_size). `20px` is about right on mobile—but you should test this out with friends or colleagues who have low vision.

The [Document doesn't use legible font sizes](/font-size/) Lighthouse audit can help you automate the process of detecting text that's too small.

### Provide enough space between inputs <a href="#size-margins-correctly" class="w-headline-link">#</a>

Add enough margin to make inputs work well as touch targets. In other words, aim for about a finger width of margin.

### Make sure your inputs are clearly visible <a href="#visible-inputs" class="w-headline-link">#</a>

The default border styling for inputs makes them hard to see. They're almost invisible on some platforms such as Chrome for Android.

As well as padding, add a border: on a white background, a good general rule is to use `#ccc` or darker.

<figure><img src="https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format" alt="Legible text, visible input borders, adequate padding and margins." class="w-screenshot" sizes="(min-width: 250px) 250px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/OgDJ5V2N7imHXSBkN4pr.png?auto=format&amp;w=500 500w" width="250" height="525" /><figcaption>Legible text, visible input borders, adequate padding and margins.</figcaption></figure>### Use built-in browser features to warn of invalid input values <a href="#built-in-validation" class="w-headline-link">#</a>

Browsers have built-in features to do basic form validation for inputs with a `type` attribute. Browsers warn when you submit a form with an invalid value, and set focus on the problematic input.

<figure><img src="https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format" alt="Basic built-in validation by the browser." sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Phf9m5J66lIX9x5brzOL.png?auto=format&amp;w=600 600w" width="300" height="290" /><figcaption>Basic built-in validation by the browser.</figcaption></figure>You can use the `:invalid` CSS selector to highlight invalid data. Use `:not(:placeholder-shown)` to avoid selecting inputs with no content.

    input[type=email]:not(:placeholder-shown):invalid {
      color: red;
      outline-color: red;
    }

Try out different ways of highlighting inputs with invalid values.

## Use JavaScript where necessary <a href="#javascript" class="w-headline-link">#</a>

### Toggle password display <a href="#password-display" class="w-headline-link">#</a>

You should add a **Show password** icon or button to enable users to check the text they've entered. [Usability suffers](https://www.nngroup.com/articles/stop-password-masking/) when users can't see the text they've entered. Currently there's no built-in way to do this, though [there are plans for implementation](https://twitter.com/sw12/status/1251191795377156099). You'll need to use JavaScript instead.

<figure><img src="./show-password-google.png" alt="Google sign-in form: with Show password icon and Forgot password link." class="w-screenshot" width="350" /><figcaption>Google sign-in form: with <strong>Show password</strong> icon and <strong>Forgot password</strong> link.</figcaption></figure>The following code uses a text button to add **Show password** functionality.

HTML:

    <section>
      <label for="password">Password</label>
      <button id="toggle-password" type="button" aria-label="Show password as plain text. Warning: this will display your password on the screen.">Show password</button>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
    </section>

Here's the CSS to make the button look like plain text:

    button#toggle-password {
      background: none;
      border: none;
      cursor: pointer;
      /* Media query isn't shown here. */
      font-size: var(--mobile-font-size);
      font-weight: 300;
      padding: 0;
      /* Display at the top right of the container */
      position: absolute;
      top: 0;
      right: 0;
    }

And the JavaScript for showing the password:

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

Here's the end result:

<figure><img src="https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format" alt="Sign-in form with Show password text &#39;button&#39;, in Safari on Mac and iPhone 7." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/x4NP9JMf1KI8PapQ9JFh.png?auto=format&amp;w=1600 1600w" width="800" height="468" /><figcaption>Sign-in form with <strong>Show password</strong> text 'button', in Safari on Mac and iPhone 7.</figcaption></figure>### Make password inputs accessible <a href="#accessible-password-inputs" class="w-headline-link">#</a>

Use `aria-describedby` to outline password rules by giving it the ID of the element that describes the constraints. Screenreaders provide the label text, the input type (password), and then the description.

    <input type="password" aria-describedby="password-constraints" …>
    <div id="password-constraints">Eight or more characters with a mix of letters, numbers and symbols.</div>

When you add **Show password** functionality, make sure to include an `aria-label` to warn that the password will be displayed. Otherwise users may inadvertently reveal passwords.

    <button id="toggle-password"
            aria-label="Show password as plain text.
                        Warning: this will display your password on the screen.">
      Show password
    </button>

You can see both ARIA features in action in the following Glitch:

[Creating Accessible Forms](https://webaim.org/techniques/forms/) has more tips to help make forms accessible.

### Validate in realtime and before submission <a href="#validation" class="w-headline-link">#</a>

HTML form elements and attributes have built-in features for basic validation, but you should also use JavaScript to do more robust validation while users are entering data and when they attempt to submit the form.

**Warning**: Client-side validation helps users enter data and can avoid unnecessary server load, but you must always validate and sanitize data on your backend.

[Step 5](https://glitch.com/edit/#!/sign-in-form-codelab-5) of the sign-in form codelab uses the [Constraint Validation API](https://html.spec.whatwg.org/multipage/forms.html#constraints) (which is [widely supported](https://caniuse.com/#feat=constraint-validation)) to add custom validation using built-in browser UI to set focus and display prompts.

Find out more: [Use JavaScript for more complex real-time validation](https://developers.google.com/web/fundamentals/design-and-ux/input/forms#use_javascript_for_more_complex_real-time_validation).

### Analytics and RUM <a href="#analytics" class="w-headline-link">#</a>

"What you cannot measure, you cannot improve" is particularly true for sign-up and sign-in forms. You need to set goals, measure success, improve your site—and repeat.

[Discount usability testing](https://www.nngroup.com/articles/discount-usability-20-years/) can be helpful for trying out changes, but you'll need real-world data to really understand how your users experience your sign-up and sign-in forms:

- **Page analytics**: sign-up and sign-in page views, bounce rates, and exits.
- **Interaction analytics**: [goal funnels](https://support.google.com/analytics/answer/6180923?hl=en) (where do users abandon your sign-in or sign-in flow?) and [events](https://developers.google.com/analytics/devguides/collection/gtagjs/events) (what actions do users take when interacting with your forms?)
- **Website performance**: [user-centric metrics](/user-centric-performance-metrics) (are your sign-up and sign-in forms slow for some reason and, if so, what is the cause?).

You may also want to consider implementing A/B testing in order to try out different approaches to sign-up and sign-in, and staged rollouts to validate the changes on a subset of users before releasing changes to all users.

## General guidelines <a href="#general-guidelines" class="w-headline-link">#</a>

Well designed UI and UX can reduce sign-in form abandonment:

- Don't make users hunt for sign-in! Put a link to the sign-in form at the top of the page, using well-understood wording such as **Sign In**, **Create Account** or **Register**.
- Keep it focused! Sign-up forms are not the place to distract people with offers and other site features.
- Minimize sign-up complexity. Collect other user data (such as addresses or credit card details) only when users see a clear benefit from providing that data.
- Before users start on your sign-up form, make it clear what the value proposition is. How do they benefit from signing in? Give users concrete incentives to complete sign-up.
- If possible allow users to identify themselves with a mobile phone number instead of an email address, since some users may not use email.
- Make it easy for users to reset their password, and make the **Forgot your password?** link obvious.
- Link to your terms of service and privacy policy documents: make it clear to users from the start how you safeguard their data.
- Include the logo and name of your company or organization on your signup and sign-in pages, and make sure that language, fonts and styles match the rest of your site. Some forms don't feel like they belong to the same site as other content, especially if they have a significantly different URL.

## Keep learning <a href="#resources" class="w-headline-link">#</a>

- [Create Amazing Forms](https://developers.google.com/web/fundamentals/design-and-ux/input/forms)
- [Best Practices For Mobile Form Design](https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/)
- [More capable form controls](/more-capable-form-controls)
- [Creating Accessible Forms](https://webaim.org/techniques/forms/)
- [Streamlining the Sign-in Flow Using Credential Management API](https://developers.google.com/web/updates/2016/04/credential-management-api)
- [Verify phone numbers on the web with the WebOTP API](/web-otp/)

Photo by [Meghan Schiereck](https://unsplash.com/photos/_XFObcM_7KU) on [Unsplash](https://unsplash.com).

<a href="/tags/forms/" class="w-chip">Forms</a> <a href="/tags/identity/" class="w-chip">Identity</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/mobile/" class="w-chip">Mobile</a> <a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Feb 26, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/sign-in-form-best-practices/index.md)

## Codelabs

See it in action

Learn more and put this guide into action.

- <a href="/codelab-sign-in-form-best-practices/" class="w-callout__link w-callout__link--codelab">Use cross-platform browser features to build a sign-in form</a>

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
