<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format" alt="Clipboard with handwritten page showing list of vegetables sown." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/YfAltWqxvie1SP19BxBj.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#sign-up-form-best-practices" class="w-toc__header--link">Sign-up form best practices</a>

- [Checklist](#checklist)
- [Avoid sign-in if you can](#no-forced-sign-in)
- [Make sign-in obvious](#obvious-account-creation)
- [Cut form clutter](#cut-clutter)
- [Consider session length](#session-length)
- [Help password managers securely suggest and store passwords](#help-password-managers)
- [Ensure users enter secure passwords](#secure-passwords)
- [Don't allow compromised passwords](#no-compromised-passwords)
- [Don't prohibit password pasting](#allow-password-pasting)
- [Never store or transmit passwords in plain text](#salt-and-hash)
- [Don't force password updates](#no-forced-password-updates)
- [Make it simple to change or reset passwords](#password-change)
- [Offer login via third-party identity providers](#federated-login)
- [Make account switching simple](#account-switching)
- [Consider offering multi-factor authentication](#multi-factor-authentication)
- [Take care with usernames](#username)
- [Test on a range of devices, platforms, browsers and versions](#test-platforms)
- [Implement analytics and Real User Monitoring](#analytics-rum)
- [Keep learning](#resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Sign-up form best practices

Help your users sign up, log in and manage their account details with a minimum of fuss.

Dec 9, 2020 <span class="w-author__separator">•</span> Updated Dec 11, 2020

[<img src="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Dutton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samdutton/)

<a href="/authors/samdutton/" class="w-author__name-link">Sam Dutton</a>

- <a href="https://twitter.com/sw12" class="w-author__link">Twitter</a>
- <a href="https://github.com/samdutton" class="w-author__link">GitHub</a>

If users ever need to log in to your site, then good sign-up form design is critical. This is especially true for people on poor connections, on mobile, in a hurry, or under stress. Poorly designed sign-up forms get high bounce rates. Each bounce could mean a lost and disgruntled user—not just a missed sign-up opportunity.

**Try it**! If you would prefer to learn these best practices with a hands-on tutorial, check out the [Sign-up form best practices codelab](/codelab-sign-up-form-best-practices).

Here is an example of a very simple sign-up form that demonstrates all of the best practices:

**Caution**: This post is about form best practices.

It does not explain how to implement sign-up via a third-party identity provider (federated login) or show how to build backend services to authenticate users, store credentials, and manage accounts.

[Integrating Google Sign-In into your web app](https://developers.google.com/identity/sign-in/web/sign-in) explains how to add federated login to your sign-up options.

[12 best practices for user account, authorization and password management](https://cloud.google.com/blog/products/gcp/12-best-practices-for-user-account) outlines core back-end principles for managing user accounts.

## Checklist <a href="#checklist" class="w-headline-link">#</a>

- [Avoid sign-in if you can](#no-forced-sign-in).
- [Make it obvious how to create an account](#obvious-account-creation).
- [Make it obvious how to access account details](#obvious-account-details).
- [Cut form clutter](#cut-clutter).
- [Consider session length](#session-length).
- [Help password managers securely suggest and store passwords](#help-password-managers).
- [Don't allow compromised passwords](#no-compromised-passwords).
- [Do allow password pasting](#allow-password-pasting).
- [Never store or transmit passwords in plain text](#salt-and-hash).
- [Don't force password updates](#no-forced-password-updates).
- [Make it simple to change or reset passwords](#password-change).
- [Enable federated login](#federated-login).
- [Make account switching simple](#account-switching).
- [Consider offering multi-factor authentication](#multi-factor-authentication).
- [Take care with usernames](#username).
- [Test in the field as well as the lab](#analytics-rum).
- [Test on a range of browsers, devices and platforms](#test-platforms).

## Avoid sign-in if you can <a href="#no-forced-sign-in" class="w-headline-link">#</a>

Before you implement a sign-up form and ask users to create an account on your site, consider whether you really need to. Wherever possible you should avoid gating features behind login.

The best sign-up form is no sign-up form!

By asking a user to create an account, you come between them and what they're trying to achieve. You're asking a favor, and asking the user to trust you with personal data. Every password and item of data you store carries privacy and security "data debt", becoming a cost and liability for your site.

If the main reason you ask users to create an account is to save information between navigations or browsing sessions, [consider using client-side storage](/storage-for-the-web) instead. For shopping sites, forcing users to create an account to make a purchase is cited as a major reason for shopping cart abandonment. You should [make guest checkout the default](/payment-and-address-form-best-practices#guest-checkout).

## Make sign-in obvious <a href="#obvious-account-creation" class="w-headline-link">#</a>

Make it obvious how to create an account on your site, for example with a **Login** or **Sign in** button at the top right of the page. Avoid using an ambiguous icon or vague wording ("Get on board!", "Join us") and don't hide login in a navigational menu. The usability expert Steve Krug summed up this approach to website usability: [Don't make me think!](https://uxplanet.org/dont-make-me-think-20-wise-thoughts-about-usability-from-steve-krug-876b563f1d63) If you need to convince others on your web team, use [analytics](#analytics-rum) to show the impact of different options.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format" alt="Make sign-in obvious. An icon may be ambiguous, but a Sign in button or link is obvious." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/KeztoU8KgAqrQ5CKBSWw.jpg?auto=format&amp;w=1600 1600w" width="800" height="737" /><figcaption>Make sign-in obvious. An icon may be ambiguous, but a <strong>Sign in</strong> button or link is obvious.</figcaption></figure>You may be wondering whether to add a button (or link) to create an account and another one for existing users to sign in. Many popular sites now simply display a single **Sign in** button. When the user taps or clicks on that, they also get a link to create an account if necessary. That's a common pattern now, and your users are likely to understand it, but you can use [interaction analytics](#analytics-rum) to monitor whether or not a single button works best.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format" alt="The Gmail sign-in page has a link to create an account. At window sizes larger than shown here, Gmail displays a Sign in link and a Create an account button." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WUgCNqhEgvoWEVwGjfrA.jpg?auto=format&amp;w=1600 1600w" width="800" height="545" /><figcaption>The Gmail sign-in page has a link to create an account.<br />
At window sizes larger than shown here, Gmail displays a <strong>Sign in</strong> link and a <strong>Create an account</strong> button.</figcaption></figure>Make sure to link accounts for users who sign up via an identity provider such as Google and who also sign up using email and password. That's easy to do if you can access a user's email address from the profile data from the identity provider, and match the two accounts. The code below shows how to access email data for a Google Sign-in user.

    // auth2 is initialized with gapi.auth2.init()
    if (auth2.isSignedIn.get()) {
      var profile = auth2.currentUser.get().getBasicProfile();
      console.log(`Email: ${profile.getEmail()}`);
    }

Once a user has signed in, make it clear how to access account details. In particular, make it obvious how to [change or reset passwords](#password-change).

## Cut form clutter <a href="#cut-clutter" class="w-headline-link">#</a>

In the sign-up flow, your job is to minimize complexity and keep the user focused. Cut the clutter. This is not the time for distractions and temptations!

Don't distract users from completing sign-up.

On sign-up, ask for as little as possible. Collect additional user data (such as name and address) only when you need to, and when the user sees a clear benefit from providing that data. Bear in mind that every item of data you communicate and store incurs cost and liability.

Don't double up your inputs just to make sure users get their contact details right. That slows down form completion and doesn't make sense if form fields are autofilled. Instead, send a confirmation code to the user once they've entered their contact details, then continue with account creation once they respond. This is a common sign-up pattern: users are used to it.

You may want to consider password-free sign-in by sending users a code every time they sign in on a new device or browser. Sites such as Slack and Medium use a version of this.

Password-free sign-in on medium.com.

As with federated login, this has the added benefit that you don't have to manage user passwords.

## Consider session length <a href="#session-length" class="w-headline-link">#</a>

Whatever approach you take to user identity, you'll need to make a careful decision about session length: how long the user remains logged in, and what might cause you to log them out.

Consider whether your users are on mobile or desktop, and whether they are sharing on desktop, or sharing devices.

You can get around some of the issues of shared devices by enforcing re-authentication for sensitive features, for example when a purchase is made or an account updated. You can find out more about ways to implement re-authentication from the codelab [Your First WebAuthn App](https://codelabs.developers.google.com/codelabs/webauthn-reauth/#0).

## Help password managers securely suggest and store passwords <a href="#help-password-managers" class="w-headline-link">#</a>

You can help third party and built-in browser password managers suggest and store passwords, so that users don't need to choose, remember or type passwords themselves. Password managers work well in modern browsers, synchronizing accounts across devices, across platform-specific and web apps—and for new devices.

This makes it extremely important to code sign-up forms correctly, in particular to use the correct autocomplete values. For sign-up forms use `autocomplete="new-password"` for new passwords, and add correct autocomplete values to other form fields wherever possible, such as `autocomplete="email"` and `autocomplete="tel"`. You can also help password managers by using different `name` and `id` values in sign-up and sign-in forms, for the `form` element itself, as well as any `input`, `select` and `textarea` elements.

You should also use the appropriate [`type` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email) to provide the right keyboard on mobile and enable basic built-in validation by the browser. You can find out more from [Payment and address form best practices](/payment-and-address-form-best-practices#type).

[Sign-in form best practices](/sign-in-form-best-practices) has lots more tips on how to improve form design, layout and accessibility, and how to code forms correctly in order to take advantage of built-in browser features.

## Ensure users enter secure passwords <a href="#secure-passwords" class="w-headline-link">#</a>

Enabling password managers to suggest passwords is the best option, and you should encourage users to accept the strong passwords suggested by browsers and third-party browser managers.

However, many users want to enter their own passwords, so you need to implement rules for password strength. The US National Institute of Standards and Technology explains [how to avoid insecure passwords](https://pages.nist.gov/800-63-3/sp800-63b.html#5-authenticator-and-verifier-requirements).

**Warning**: Sign-up forms on some sites have password validation rules that don't allow the strong passwords generated by browser and third-party password managers. Make sure your site doesn't do this, since it interrupts form completion, annoys users, and requires users to make up their own passwords, which may be less secure than those generated by password managers.

## Don't allow compromised passwords <a href="#no-compromised-passwords" class="w-headline-link">#</a>

Whatever rules you choose for passwords, you should never allow passwords that have been [exposed in security breaches](https://haveibeenpwned.com/PwnedWebsites).

Once a user has entered a password, you need to check that it's not a password that's already been compromised. The site [Have I Been Pwned](https://haveibeenpwned.com/Passwords) provides an API for password checking, or you can run this as a service yourself.

Google's Password Manager also allows you to [check if any of your existing passwords have been compromised](https://passwords.google.com/checkup).

If you do reject the password that a user proposes, tell them specifically why it was rejected. [Show problems inline and explain how to fix them](https://baymard.com/blog/inline-form-validation), as soon as the user has entered a value—not after they've submitted the sign-up form and had to wait for a response from your server.

Be clear why a password is rejected.

## Don't prohibit password pasting <a href="#allow-password-pasting" class="w-headline-link">#</a>

Some sites don't allow text to be pasted into password inputs.

Disallowing password pasting annoys users, encourages passwords that are memorable (and therefore may be easier to compromise) and, according to organizations such as the UK National Cyber Security Centre, may actually [reduce security](https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords). Users only become aware that pasting is disallowed _after_ they try to paste their password, so [disallowing password pasting doesn't avoid clipboard vulnerabilities](https://github.com/OWASP/owasp-masvs/issues/106).

## Never store or transmit passwords in plain text <a href="#salt-and-hash" class="w-headline-link">#</a>

Make sure to [salt and hash](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#Use_a_cryptographically_strong_credential-specific_salt) passwords—and [don't try to invent your own hashing algorithm](https://www.schneier.com/blog/archives/2011/04/schneiers_law.html)!

## Don't force password updates <a href="#no-forced-password-updates" class="w-headline-link">#</a>

[Don't force users to update their passwords arbitrarily.](<https://pages.nist.gov/800-63-3/sp800-63b.html#-5112-memorized-secret-verifiers:~:text=Verifiers%20SHOULD%20NOT%20require%20memorized%20secrets%20to%20be%20changed%20arbitrarily%20(e.g.%2C%20periodically).>)

Forcing password updates can be costly for IT departments, annoying to users, and [doesn't have much impact on security](https://pages.nist.gov/800-63-FAQ/#q-b05). It's also likely to encourage people to use insecure memorable passwords, or to keep a physical record of passwords.

Rather than force password updates, you should monitor for unusual account activity and warn users. If possible you should also monitor for passwords that become compromised because of data breaches.

You should also provide your users with access to their account login history, showing them where and when a login happened.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format" alt="Gmail account activity page." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/zZXmhWc9bZ1GtvrE5Ooq.jpg?auto=format&amp;w=1600 1600w" width="800" height="469" /><figcaption><a href="https://support.google.com/mail/answer/45938?hl=en-GB" title="Find out how to view Gmail account activity.">Gmail account activity page</a>.</figcaption></figure>Make it simple to change or reset passwords <a href="#password-change" class="w-headline-link">#</a>

Make it obvious to users where and how to **update** their account password. On some sites, it's surprisingly difficult.

You should, of course, also make it simple for users to **reset** their password if they forget it. The Open Web Application Security Project provides detailed guidance on [how to handle lost passwords](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).

To keep your business and your users safe, it's especially important to help users change their password if they discover that it's been compromised. To make this easier, you should add a [`/.well-known/change-password`](https://w3c.github.io/webappsec-change-password-url/) URL to your site that redirects to your password management page. This enables password managers to navigate your users directly to the page where they can change their password for your site. This feature is now implemented in Safari, Chrome, and is coming to other browsers. [Help users change passwords easily by adding a well-known URL for changing passwords](/change-password-url) explains how to implement this.

You should also make it simple for users to delete their account if that's what they want.

## Offer login via third-party identity providers <a href="#federated-login" class="w-headline-link">#</a>

Many users prefer to log in to websites using an email address and password sign-up form. However, you should also enable users to log in via a third party identity provider, also known as federated login.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format" alt="WordPress login page, with Google and Apple login options." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jubgwX1shLB7qAIiioTU.jpg?auto=format&amp;w=1600 1600w" width="800" height="513" /><figcaption>WordPress login page, with Google and Apple login options.</figcaption></figure>This approach has several advantages. For users who create an account using federated login, you don't need to ask for, communicate, or store passwords.

You may also be able to access additional verified profile information from federated login, such as an email address—which means the user doesn't have to enter that data and you don't need to do the verification yourself. Federated login can also make it much easier for users when they get a new device.

[Integrating Google Sign-In into your web app](https://developers.google.com/identity/sign-in/web/sign-in) explains how to add federated login to your sign-up options. [Many other](https://en.wikipedia.org/wiki/Federated_identity#Examples) identity platforms are available.

"First day experience" when you get a new device is increasingly important. Users expect to log in from multiple devices including their phone, laptop, desktop, tablet, TV, or from a car. If your sign-up and sign-in forms aren't seamless, this is a moment where you risk losing users, or at least losing contact with them until they get set up again. You need to make it as quick and easy as possible for users on new devices to get up and running on your site. This is another area where federated login can help.

## Make account switching simple <a href="#account-switching" class="w-headline-link">#</a>

Many users share devices and swap between accounts using the same browser. Whether users access federated login or not, you should make account switching simple.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format" alt="Account switching on Gmail." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/sPDZJIY5Vo2ijqyuofCy.jpg?auto=format&amp;w=1600 1600w" width="800" height="494" /><figcaption>Account switching on Gmail.</figcaption></figure>Consider offering multi-factor authentication <a href="#multi-factor-authentication" class="w-headline-link">#</a>

Multi-factor authentication means ensuring that users provide authentication in more than one way. For example, as well as requiring the user to set a password, you might also enforce verification using a one-time-passcode sent by email or an SMS text message, or by using an app-based one-time code, security key or fingerprint sensor. [SMS OTP best practices](/sms-otp-form) and [Enabling Strong Authentication with WebAuthn](https://developers.google.com/web/updates/2018/05/webauthn) explain how to implement multi-factor authentication.

You should certainly offer (or enforce) multi-factor authentication if your site handles personal or sensitive information.

## Take care with usernames <a href="#username" class="w-headline-link">#</a>

Don't insist on a username unless (or until) you need one. Enable users to sign up and sign in with only an email address (or telephone number) and password—or [federated login](#federated-login) if they prefer. Don't force them to choose and remember a username.

If your site does require usernames, don't impose unreasonable rules on them, and don't stop users from updating their username. On your backend you should generate a unique ID for every user account, not an identifier based on personal data such as username.

Also make sure to use `autocomplete="username"` for usernames.

**Caution**: As with personal names, ensure that usernames aren't restricted to characters from the [Latin alphabet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#Types:~:text=Latin%20alphabet). [Payment and address form best practices](/payment-and-address-form-best-practices#unicode-matching) explains how and why to validate using Unicode letter matching.

## Test on a range of devices, platforms, browsers and versions <a href="#test-platforms" class="w-headline-link">#</a>

Test sign-up forms on the platforms most common for your users. Form element functionality may vary, and differences in viewport size can cause layout problems. BrowserStack enables [free testing for open source projects](https://www.browserstack.com/open-source) on a range of devices and browsers.

## Implement analytics and Real User Monitoring <a href="#analytics-rum" class="w-headline-link">#</a>

You need [field data as well as lab data](/how-to-measure-speed/#lab-data-vs-field-data) to understand how users experience your sign-up forms. Analytics and [Real User Monitoring](https://developer.mozilla.org/en-US/docs/Web/Performance/Rum-vs-Synthetic#Real_User_Monitoring) (RUM) provide data for the actual experience of your users, such as how long sign-up pages take to load, which UI components users interact with (or not) and how long it takes users to complete sign-up.

- **Page analytics**: [page views, bounce rates and exits](https://analytics.google.com/analytics/academy/course/6) for every page in your sign-up flow.
- **Interaction analytics**: [goal funnels](https://support.google.com/analytics/answer/6180923?hl=en) and [events](https://developers.google.com/analytics/devguides/collection/gtagjs/events) indicate where users abandon the sign-up flow and what proportion of users click buttons, links, and other components of your sign-up pages.
- **Website performance**: [user-centric metrics](/user-centric-performance-metrics) can tell you if your sign-up flow is slow to load or [visually unstable](/cls).

Small changes can make a big difference to completion rates for sign-up forms. Analytics and RUM enable you to optimize and prioritize changes, and monitor your site for problems that aren't exposed by local testing.

## Keep learning <a href="#resources" class="w-headline-link">#</a>

- [Sign-in form best practices](/sign-in-form-best-practices)
- [Payment and address form best practices](/payment-and-address-form-best-practices)
- [Create Amazing Forms](https://developers.google.com/web/fundamentals/design-and-ux/input/forms)
- [Best Practices For Mobile Form Design](https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/)
- [More capable form controls](/more-capable-form-controls)
- [Creating Accessible Forms](https://webaim.org/techniques/forms/)
- [Streamlining the Sign-up Flow Using Credential Management API](https://developers.google.com/web/updates/2016/04/credential-management-api)
- [Verify phone numbers on the web with the WebOTP API](/web-otp)

Photo by [@ecowarriorprincess](https://unsplash.com/@ecowarriorprincess) on [Unsplash](https://unsplash.com/photos/lUShu7PHIGA).

<a href="/tags/forms/" class="w-chip">Forms</a> <a href="/tags/identity/" class="w-chip">Identity</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/mobile/" class="w-chip">Mobile</a> <a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Dec 11, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/sign-up-form-best-practices/index.md)

## Codelabs

See it in action

Learn more and put this guide into action.

- <a href="/codelab-sign-up-form-best-practices/" class="w-callout__link w-callout__link--codelab">Sign-up form best practices codelab</a>

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
