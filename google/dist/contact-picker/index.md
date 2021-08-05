<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format" alt="Telephone on yellow background." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/K1IN7zWIjFLjZzJ4Us3J.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#a-contact-picker-for-the-web" class="w-toc__header--link">A contact picker for the web</a>

- [What is the Contact Picker API?](#what)
- [Current status](#status)
- [Using the Contact Picker API](#how-to-use)
- [Feature detection](#feature-detection)
- [Opening the Contact Picker](#opening-the-contact-picker)
- [Detecting available properties](#detecting-available-properties)
- [Handling the results](#handling-the-results)
- [Security and permissions](#security-considerations)
- [User control](#security-control)
- [Transparency](#security-transparency)
- [No permission persistence](#security-persistence)
- [Feedback](#feedback)
- [Problem with the implementation?](#problem-with-the-implementation)
- [Planning to use the API?](#planning-to-use-the-api)
- [Helpful links](#helpful)
- [Thanks](#thanks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# A contact picker for the web

The Contact Picker API provides an easy way for users to share contacts from their contact list.

Aug 7, 2019 <span class="w-author__separator">•</span> Updated Feb 23, 2021

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

## What is the Contact Picker API? <a href="#what" class="w-headline-link">#</a>

Access to the user's contacts on a mobile device has been a feature of iOS/Android apps since (almost) the dawn of time. It's one of the most common feature requests I hear from web developers, and is often the key reason they build an iOS/Android app.

Available in Chrome 80 on Android, the [Contact Picker API](https://wicg.github.io/contact-api/spec/) is an on-demand API that allows users to select entries from their contact list and share limited details of the selected entries with a website. It allows users to share only what they want, when they want, and makes it easier for users to reach and connect with their friends and family.

For example, a web-based email client could use the Contact Picker API to select the recipient(s) of an email. A voice-over-IP app could look up which phone number to call. Or a social network could help a user discover which friends have already joined.

**Caution**: The Chrome team has put a lot of thought into the design and implementation of the Contact Picker API to ensure that the browser will only share exactly what people choose. See the [Security and Privacy](#security-considerations) section below.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/contact-api/">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/contact-api/spec/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="https://wicg.github.io/contact-api/spec/">Complete</a></td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Chrome 80</strong><br />
Available on Android only.</td></tr></tbody></table>

## Using the Contact Picker API <a href="#how-to-use" class="w-headline-link">#</a>

The Contact Picker API requires a method call with an options parameter that specifies the types of contact information you want. A second method tells you what information the underlying system will provide.

Check out the [Contact Picker API demo](https://contact-picker.glitch.me) and view the [source](https://glitch.com/edit/#!/contact-picker?path=demo.js:20:0).

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the Contact Picker API is supported, use:

    const supported = ('contacts' in navigator && 'ContactsManager' in window);

In addition, on Android, the Contact Picker requires Android M or later.

### Opening the Contact Picker <a href="#opening-the-contact-picker" class="w-headline-link">#</a>

The entry point to the Contact Picker API is `navigator.contacts.select()`. When called, it returns a promise and shows the contact picker, allowing the user to select the contact(s) they want to share with the site. After selecting what to share and clicking **Done**, the promise resolves with an array of contacts selected by the user.

When calling `select()` you must provide an array of properties you'd like returned as the first parameter (with the allowed values being any of `'name'`, `'email'`, `'tel'`, `'address'`, or `'icon'`), and optionally whether multiple contacts can be selected as a second parameter.

    const props = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = {multiple: true};

    try {
      const contacts = await navigator.contacts.select(props, opts);
      handleResults(contacts);
    } catch (ex) {
      // Handle any errors here.
    }

**Caution**: Support for `'address'` and `'icon'` requires Chrome 84 or later.

The Contacts Picker API can only be called from a [secure](https://w3c.github.io/webappsec-secure-contexts/), top-level browsing context, and like other powerful APIs, it requires a user gesture.

### Detecting available properties <a href="#detecting-available-properties" class="w-headline-link">#</a>

To detect which properties are available, call `navigator.contacts.getProperties()`. It returns a promise that resolves with an array of strings indicating which properties are available. For example: `['name', 'email', 'tel', 'address']`. You can pass these values to `select()`.

Remember, properties are not always available, and new properties may be added. In the future, other platforms and contact sources may restrict which properties are be shared.

### Handling the results <a href="#handling-the-results" class="w-headline-link">#</a>

The Contact Picker API returns an array of contacts, and each contact includes an array of the requested properties. If a contact doesn't have data for the requested property, or the user chooses to opt-out of sharing a particular property, the API returns an empty array. (I describe how the user chooses properties in the [User control](#security-control) section.)

For example, if a site requests `name`, `email`, and `tel`, and a user selects a single contact that has data in the name field, provides two phone numbers, but does not have an email address, the response returned will be:

    [{
      "email": [],
      "name": ["Queen O'Hearts"],
      "tel": ["+1-206-555-1000", "+1-206-555-1111"]
    }]

**Caution**: Labels and other semantic information on contact fields are dropped.

## Security and permissions <a href="#security-considerations" class="w-headline-link">#</a>

The Chrome team designed and implemented the Contact Picker API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. I'll explain each.

### User control <a href="#security-control" class="w-headline-link">#</a>

Access to the users' contacts is via the picker, and it can only be called with a user gesture, on a [secure](https://w3c.github.io/webappsec-secure-contexts/), top-level browsing context. This ensures that a site can't show the picker on page load, or randomly show the picker without any context.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format" alt="Users can choose not to share some properties. In this screenshot, the user has unchecked the &#39;Phone numbers&#39; button. Even though the site asked for phone numbers, they will not be shared with the site." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EiHIOYdno52DZ6TNHcfI.jpg?auto=format&amp;w=1600 1600w" width="800" height="639" /><figcaption>Users can choose not to share some properties. In this screenshot, the user has unchecked the 'Phone numbers' button. Even though the site asked for phone numbers, they will not be shared with the site.</figcaption></figure>There's no option to bulk-select all contacts so that users are encouraged to select only the contacts that they need to share for that particular website. Users can also control which properties are shared with the site by toggling the property button at the top of the picker.

### Transparency <a href="#security-transparency" class="w-headline-link">#</a>

To clarify which contact details are being shared, the picker always shows the contact's name and icon, plus any properties that the site has requested. For example, if a site requests `name`, `email`, and `tel`, all three properties will be shown in the picker. Alternatively, if a site only requests `tel`, the picker will show only the name, and telephone numbers.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format" alt="Picker, site requesting name, email, and tel, one contact selected." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ig9SBKtJPlSE3mCjR2Go.jpg?auto=format&amp;w=1600 1600w" width="800" height="639" /><figcaption>Picker, site requesting <code>name</code>, <code>email</code>, and <code>tel</code>, one contact selected.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format" alt="Picker, site requesting only tel, one contact selected." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vOB2nPSrfi1GnmtitElf.jpg?auto=format&amp;w=1600 1600w" width="800" height="639" /><figcaption>Picker, site requesting only <code>tel</code>, one contact selected.</figcaption></figure>

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format" alt="The result of a long press on a contact." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qLxdnKZwW0e4teyw2OOU.jpg?auto=format&amp;w=1600 1600w" width="800" height="389" /><figcaption>The result of a long press on a contact.</figcaption></figure>A long press on a contact will show all of the information that will be shared if the contact is selected. (See the Cheshire Cat contact image.)

### No permission persistence <a href="#security-persistence" class="w-headline-link">#</a>

Access to contacts is on-demand, and not persisted. Each time a site wants access, it must call `navigator.contacts.select()` with a user gesture, and the user must individually choose the contact(s) they want to share with the site.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the Contact Picker API.

### Problem with the implementation? <a href="#problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EContacts). Be sure to include as much detail as you can, provide simple instructions for reproducing the bug, and set _Components_ to `Blink>Contacts`. [Glitch](https://glitch.com) works great for sharing quick and easy problem reproductions.

### Planning to use the API? <a href="#planning-to-use-the-api" class="w-headline-link">#</a>

Are you planning to use the Contact Picker API? Your public support helps the Chrome team to prioritize features, and shows other browser vendors how critical it is to support them.

- Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/proposal-contact-picker-api/3507).
- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#ContactPicker`](https://twitter.com/search?q=%23ContactPicker&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/WICG/contact-api/)
- [Contact Picker Specification](https://wicg.github.io/contact-api/spec/)
- [Contact Picker API Demo](https://contact-picker.glitch.me) and [Contact Picker API demo source](https://glitch.com/edit/#!/contact-picker?path=demo.js:20:0)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=860467)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/6511327140904960)
- Blink Component: `Blink>Contacts`

### Thanks <a href="#thanks" class="w-headline-link">#</a>

Big shout out and thanks to Finnur Thorarinsson and Rayan Kanso who are implementing the feature and Peter Beverloo whose [code](https://tests.peter.sh/contact-api/) I shamelessly <s>stole and</s> refactored for the demo.

PS: The names in my contact picker are characters from Alice in Wonderland.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/contact-picker/index.md)

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
