<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Address form best practices codelab

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

How can you design a form that works well for a variety of names and address formats? Minor form glitches irritate users and can cause them to leave your site or give up on completing a purchase or sign-up.

This codelab shows you how to build an easy-to-use, accessible form that works well for most users.

## Step 1: Make the most of HTML elements and attributes <a href="#step-1:-make-the-most-of-html-elements-and-attributes" class="w-headline-link">#</a>

You'll start this part of the codelab with an empty form, just a heading and a button all on their own. Then you'll begin adding inputs. (CSS and a little bit of JavaScript are already included.)

- Click **Remix to Edit** to make the project editable.

<!-- -->

- Add a name field to your `<form>` element with the following code:

<!-- -->

    <section>
      <label for="name">Name</label>
      <input id="name" name="name">
    </section>

That may look complicated and repetitive for just one name field, but it already does a lot.

You associated the `label` with the `input` by matching the `label`'s `for` attribute with the `input`'s `name` or `id`. A tap or click on a label moves focus to its input, making a much bigger target than the input on its own—which is good for fingers, thumbs and mouse clicks! Screenreaders announce label text when the label or the label's input gets focus.

What about `name="name"`? This is the name (which happens to be 'name'!) associated with the data from this input which is sent to the server when the form is submitted. Including a `name` attribute also means that the data from this element can be accessed by the [FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects).

## Step 2: Add attributes to help users enter data <a href="#step-2:-add-attributes-to-help-users-enter-data" class="w-headline-link">#</a>

What happens when you tap or click in the **Name** input in Chrome? You should see autofill suggestions that the browser has stored and guesses are appropriate for this input, given its `name` and `id` values.

Now add `autocomplete="name"` to your input code so it looks like this:

    <section>
      <label for="name">Name</label>
      <input id="name" name="name" autocomplete="name">
    </section>

Reload the page in Chrome and tap or click in the **Name** input. What differences do you see?

Ever wondered how to delete autofill suggestions in Chrome?

- Windows: `Shift` + `delete`
- Mac: `Shift` + `fn` + `delete`

You should notice a subtle change: with `autocomplete="name"`, the suggestions are now specific values that were used previously in form inputs that also had `autocomplete="name"`. The browser isn't just guessing what might be appropriate: you have control. You'll also see the **Manage…** option to view and edit the names and addresses stored by your browser.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format" alt="UI for autofill with guessed values, versus autocomplete." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=200   200w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=228   228w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=260   260w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=296   296w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=338   338w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=385   385w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=439   439w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=500   500w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=571   571w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=650   650w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=741   741w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=845   845w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=964   964w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=1098 1098w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=1252 1252w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=1428 1428w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/uSc6aqRgHoL2qIDyj803.jpg?auto=format&amp;w=1600 1600w
                  " width="800" height="684" /><figcaption>UI for autofill with guessed values, versus autocomplete.</figcaption></figure>If an [appropriate autocomplete value](/payment-and-address-form-best-practices/#autocomplete-attribute) is available for an `input`, `select` or `textarea`, you should use it!

Now add [constraint validation attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) `maxlength`, `pattern` and `required` so your input code looks like this:

    <section>
      <label for="name">Name</label>
      <input id="name" name="name" autocomplete="name"
        maxlength="100" pattern="[\p{L} \-\.]+" required>
    </section>

- `maxlength="100"` means the browser won't allow any input longer than 100 characters.

- `pattern="[\p{L} \-\.]+"` uses a regular expression that allows [Unicode letter characters](https://javascript.info/regexp-unicode), hyphens and periods (full stops). That means names such as Françoise or Jörg aren't classed as 'invalid'. That isn't the case if you use the value `\w` which \[only allows characters from the [Latin alphabet](/payment-and-address-form-best-practices/#unicode-matching).

- `required` means… required! The browser will not allow the form to be submitted without data for this field, and will warn and highlight the input if you attempt to submit it. No extra code required!

**Caution**: This codelab doesn't address (😜) localization or internationalization. Depending on where your users are located, you need to consider address _formats_ as well as the different _names_ used for address components, even within the same language: ZIP, postal code, Eircode or PIN? It may be necessary for your site to [customize for multiple locales](https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites#determining-user-s-language-and-region), but the address form in this codelab is designed for flexibility, and should work "well enough" for a range of addresses.

To test how the form works with and without these attributes, try entering data:

- Try entering values that don't fit the `pattern` attribute.
- Try submitting the form with an empty input. You'll see built-in browser functionality warning of the empty required field and setting focus on it.

## Step 3: Add a flexible address field to your form <a href="#step-3:-add-a-flexible-address-field-to-your-form" class="w-headline-link">#</a>

To add an address field, add the following code to your form:

    <section>
      <label for="address">Address</label>
      <textarea id="address" name="address" autocomplete="address"
        maxlength="300" required></textarea>
    </section>

A `textarea` is the most flexible way for your users to enter their address, and it's great for cutting and pasting.

You should avoid splitting your address form into components such as street name and number unless you really need to. Don't force users to try to fit their address into fields that don't make sense.

Consider the way that address data from your form is being used. What's it for? Make sure to understand data requirements and who sets them.

Now add fields for **ZIP or postal code**, and **Country or region**. For simplicity, only the first five countries are included here. A full list is included in the [completed address form](https://address-form.glitch.me).

    <section>
      <label for="postal-code">ZIP or postal code (optional)</label>
      <input id="postal-code" name="postal-code"
        autocomplete="postal-code" maxlength="20">
    </section>

    <section id="country-region">
      <label for="">Country or region</label>
      <select id="country" name="country" autocomplete="country"
        required>
          <option selected value="SPACER"> </option>
          <option value="AF">Afghanistan</option>
          <option value="AX">Åland Islands</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
      </select>
    </section>

You'll see that **Postal code** is optional: that's because [many countries don't use postal codes](https://hellowahab.wordpress.com/2011/05/24/list-of-countries-without-postal-codes/). ([Global Sourcebook](https://www.grcdi.nl/gsb/global%20sourcebook.html) provides information about address formats for 194 different countries, including sample addresses.) The label **Country or region** is used instead of **Country**, because some options from the full list (such as the United Kingdom) are not single countries (despite the `autocomplete` value).

## Step 4: Enable customers to easily enter shipping and billing addresses <a href="#step-4:-enable-customers-to-easily-enter-shipping-and-billing-addresses" class="w-headline-link">#</a>

You've built a highly functional address form, but what if your site requires more than one address, for shipping and billing, for example? Try updating your form to enable customers to enter shipping and billing addresses. How can you make data entry as quick and easy as possible, especially if the two addresses are the same? The article that goes with this codelab explains [techniques for handling multiple addresses](/payment-and-address-form-best-practices#billing-address). Whatever you do, make sure to use the correct `autocomplete` values!

## Step 5: Add a telephone number field <a href="#step-5:-add-a-telephone-number-field" class="w-headline-link">#</a>

To add a telephone number input, add the following code to the form:

    <section>
      <label for="tel">Telephone</label>
      <input id="tel" name="tel" autocomplete="tel" type="tel"
        maxlength="30" pattern="[\d \-\+]+" enterkeyhint="done"
        required>
    </section>

For phone numbers use a single input: don't split the number into parts. That makes it easier for users to enter data or copy and paste, makes validation simpler, and enables browsers to autofill.

There are two attributes that can improve the user experience of entering a telephone number:

- `type="tel"` ensures mobile users get the right keyboard.
- `enterkeyhint="done"` sets the mobile keyboard enter key label to show that this is the last field and the form can now be submitted (the default is `next`).

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format" alt="Use the enterkeyhint attribute to set the Enter button label: &#39;next&#39; and &#39;done&#39;." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=200   200w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=228   228w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=260   260w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=296   296w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=338   338w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=385   385w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=439   439w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=500   500w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=571   571w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=650   650w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=741   741w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=845   845w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=964   964w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=1098 1098w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=1252 1252w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=1428 1428w,
                    https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/vReqMRQjLSI7e6UQ5WwX.png?auto=format&amp;w=1600 1600w
                  " width="800" height="684" /><figcaption>Use the enterkeyhint attribute to set the Enter button label: 'next' and 'done'.</figcaption></figure>**Gotchas!**

Using `type="number"` adds an up/down arrow to increment numbers, which makes no sense for data such as telephone, payment card, or account numbers. Instead, you should use `type="tel"` for telephone numbers. For other numbers, use `type="text"` (or leave off the attribute, since `text` is the default) and add `inputmode="numeric"` to get a numeric keyboard on mobile.

Can you see any problems with using a single input for telephone number? Do you store phone number parts (country and area code) separately? If so, why?

Your complete address form should now look like this:

- Try out your form on different devices. What devices and browsers are you targeting? How could the form be improved?

There are several ways to test your form on different devices:

- [Use Chrome DevTools Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode) to simulate mobile devices.
- [Send the URL from your computer to your phone](https://support.google.com/chrome/answer/9430554).
- Use a service such as [BrowserStack](https://www.browserstack.com/open-source) to test on a range of devices and browsers.

Before you start building forms, make sure to understand what data is required and if that data is strictly necessary. Don't ask for data you don't need! The simplest way to reduce form complexity and improve privacy is to remove unnecessary fields. Storing less data also reduces back-end data cost and liability.

## Going further <a href="#going-further" class="w-headline-link">#</a>

- [Analytics and Real User Monitoring](/payment-and-address-form-best-practices#analytics-rum): enable the performance and usability of your form design to be tested and monitored for real users, and to check if changes are successful. You should monitor load performance and other [Web Vitals](/vitals), as well as page analytics (what proportion of users bounce from your address form without completing it? how long do users spend on your address form pages?) and interaction analytics (which page components do users interact with, or not?)

- Where are your users located? How do they format their address? What names do they use for address components, such as ZIP or postal code? [Frank's Compulsive Guide to Postal Addresses](http://www.columbia.edu/~fdc/postal/) provides useful links and extensive guidance detailing address formats in over 200 countries.

- Country selectors are notorious for [poor usability](https://www.smashingmagazine.com/2011/11/redesigning-the-country-selector/). It's [best to avoid select elements for a long list of items](https://baymard.com/blog/drop-down-usability#in-general-avoid-drop-downs-when-there-are-more-than-10-or-fewer-than-5-options) and the ISO 3166 country-code standard [currently lists 249 countries](https://www.iso.org/obp/ui/#search/code/)! Instead of a `<select>` you may want to consider an alternative such as the [Baymard Institute country selector](https://baymard.com/labs/country-selector).

  Can you design a better selector for lists with a lot of items? How would you ensure your design is accessible across a range of devices and platforms? (The `<select>` element doesn't work well for a large number of items, but at least it's usable on virtually all browsers and assistive devices!)

  The blog post [&lt;input type="country" /&gt;](https://shkspr.mobi/blog/2017/11/input-type-country/) discusses the complexity of standardizing a country selector. Localization of country names can also be problematic. [Countries Lists](http://www.countries-list.info/Download-List) has a tool for downloading country codes and names in multiple languages, in multiple formats.

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
