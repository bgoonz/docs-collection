<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/fyXjSb1sdmnCw3SoXUs2.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#using-the-event-conversion-measurement-api" class="w-toc__header--link">Using the Event Conversion Measurement API</a>

- [Demo](#demo)
- [Browser support](#browser-support)
- [Experiment with end users](#experiment-with-end-users)
- [Experiment with the API, with end users](#experiment-with-the-api-with-end-users)
- [Design your experiment](#design-your-experiment)
- [Set up your experiment](#set-up-your-experiment)
- [Run your experiment](#run-your-experiment)
- [Develop locally](#develop-locally)
- [Set up your browser for local development](#set-up-your-browser-for-local-development)
- [Debug](#debug)
- [Test your origin trial token(s)](<#test-your-origin-trial-token(s)>)
- [Share your feedback](#share-your-feedback)
- [Further reading](#further-reading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Using the Event Conversion Measurement API

Must-dos and tips to use the Event Conversion Measurement API.

Nov 12, 2020 <span class="w-author__separator">•</span> Updated Feb 10, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Maud Nalpas" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/F620GZorjY0JjKas3p3J.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/maudn/)

<a href="/authors/maudn/" class="w-author__name-link">Maud Nalpas</a>

- <a href="https://twitter.com/maudnals" class="w-author__link">Twitter</a>
- <a href="https://github.com/maudnals" class="w-author__link">GitHub</a>

The Conversion Measurement API will be renamed to _Attribution Reporting API_ and offer more features.

- If you're experimenting with ([Conversion Measurement API](https://github.com/WICG/conversion-measurement-api/blob/3e0ef7d3cee8d7dc5a4b953e70cb027b0e13943b/README.md)) in [Chrome 91](https://chromestatus.com/features/schedule) and below, read this post to find more details, use cases and instructions for how to use the API.
- If you're interested in the next iteration of this API (Attribution Reporting), which will be available for experimentation in Chrome (origin trial), [join the mailing list](https://groups.google.com/u/1/a/chromium.org/g/attribution-reporting-api-dev) for updates on available experiments.

The [Event Conversion Measurement API](/conversion-measurement) measures when an ad click leads to a conversion, without using cross-site identifiers. Here, you'll find must-dos and tips to use this API locally or as an experiment for your end users.

## Demo <a href="#demo" class="w-headline-link">#</a>

If you're considering using the API, see the [demo](https://goo.gle/demo-event-level-conversion-measurement-api) and the corresponding [code](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/conversion-measurement) for a simple end-to-end implementation example.

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

The Event Conversion Measurement API is supported:

- As an [origin trial](/origin-trials/), from Chrome 86 beta until Chrome 91 (April 2021). Origin trials enable the API for **all visitors** of a given [origin](/same-site-same-origin/#origin). **You need to register your origin for the origin trial in order to try the API with end users**.
- Or by turning on flags, in Chrome 86 and later. Flags enable the API on a **single user**'s browser. **Flags are useful when [developing locally](#develop-locally)**.

See details about the Chrome versions where the API is active on the [Chrome feature entry](https://chromestatus.com/feature/6412002824028160).

## Experiment with end users <a href="#experiment-with-end-users" class="w-headline-link">#</a>

## Experiment with the API, with end users <a href="#experiment-with-the-api-with-end-users" class="w-headline-link">#</a>

To test the API with end users, you'll need to:

1.  Design your experiment.
2.  Set it up.
3.  Run it.

### Design your experiment <a href="#design-your-experiment" class="w-headline-link">#</a>

Defining your goal will help you outline your plan for your experiment.

If your goal is to **understand the API mechanics**, run your experiment as follows:

- Track conversions.
- See how you can assign different values to conversion events.
- Look at the conversion reports you're receiving.

If your goal is to **see how well the API satisfies basic use cases**, run your experiment as follows:

- Track conversions.
- Look at the aggregate count of conversions you're receiving.
- Recover the corrected count of conversions. See how in [Recover the corrected conversion count](<#(optional)-recover-the-corrected-conversion-count>).
- Optionally, if you want to try something more advanced: tweak the noise correction script. For example, try different groupings to see what sizes are necessary for the noise to be negligible.
- Compare the corrected count of conversions with source-of-truth data (cookie-based conversion data).

### Set up your experiment <a href="#set-up-your-experiment" class="w-headline-link">#</a>

#### Register for the origin trial <a href="#register-for-the-origin-trial" class="w-headline-link">#</a>

Registering for an [origin trial](/origin-trials/) is the first step to activate the API for end users. Upon registering for an origin trial, you have two choices to make: what **type of tokens** you need, and how the **API usage should be controlled**.

**Token type:**

- If you're planning to use the API directly on your own [origin(s)](/same-site-same-origin/#origin), register your origin(s) for a regular origin trial.
- If you're planning on using the API as a third-party—for example if you need to use the API in a script you wrote that is executed on origins you don't own—you may be eligible to register your origin for a [third-party origin trial](/third-party-origin-trials). This is convenient if you need to test at scale across different sites.

**API usage control:**

Origin trial features shouldn't exceed a small percentage of global page loads, because they're ephemeral. Because of this, sites that have registered for origin trials typically need to selectively enable API usage for small portions of their users. You can do this yourself, or let Chrome do this for you. In the dropdown **How is (third-party) usage controlled?**:

- Select **Standard limit** to activate the API for all end users on origins where a token is present. Pick this if you don't need to A/B Test (with/without the experiment) or if you want to selectively enable API usage for small portions of your users yourself.
- Select **Exclude a subset of users** to let Chrome selectively activate the API on a small subset of users on origins where a token is present. This consistently diverts a user into an experiment group across sites to avoid the usage limit. Pick this if you don't want to worry about implementing throttling for your API usage.

**Gotchas!**

If you pick **Exclude a subset of users**, the API won't be enabled for all users, even for origins that are registered for origin trials. This is the intended behaviour.

#### Add your origin trial tokens <a href="#add-your-origin-trial-tokens" class="w-headline-link">#</a>

Once your origin trial tokens are created, [add them](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md#how-do-i-enable-an-experimental-feature-on-my-origin) where relevant.

#### Adapt your code <a href="#adapt-your-code" class="w-headline-link">#</a>

If you've picked **Exclude a subset of users**, use client-side feature detection alongside the origin trial to check whether the API can be used.

### Run your experiment <a href="#run-your-experiment" class="w-headline-link">#</a>

You're now ready to run your experiment.

#### (Optional) Recover the corrected conversion count <a href="#(optional)-recover-the-corrected-conversion-count" class="w-headline-link">#</a>

Even though the conversion data is [noised](/conversion-measurement/#noising-of-conversion-data), the reporting endpoint can recover the true count of reports that have a specific conversion value. See how in this [noise corrector example script](https://github.com/WICG/conversion-measurement-api/blob/master/noise_corrector.py).

User privacy isn't impacted by this technique, because you can't determine whether a specific event's conversion data was noised. But this gives you the correct conversion count at an **aggregated** level.

## Develop locally <a href="#develop-locally" class="w-headline-link">#</a>

A few tips when developing locally with the conversion measurement API.

### Set up your browser for local development <a href="#set-up-your-browser-for-local-development" class="w-headline-link">#</a>

- Use Chrome version 86 or later. You can check what version of Chrome you're using by typing `about://version` in the URL bar.
- To activate the feature locally (for example if you're developing on `localhost`), enable flags. Go to flags by typing `about://flags` in Chrome's URL bar. Turn on the **two** flags `#enable-experimental-web-platform-features` and `#conversion-measurement-api`.
- Disable third-party cookie blocking. In the long term, dedicated browser settings will be available to allow/block the API. Until then, third-party cookie blocking is used as the signal that users don't want to share data about their conversions—and hence that this API should be disabled.
- Don't use **Incognito** or **Guest** mode. The API is disabled on these profiles.
- Some ad-blocking browser extensions may block some of the API's functionality (e.g. script names containing `ad`). Deactivate ad-blocking extensions on the pages where you need to test the API, or create a fresh user profile without extensions.

### Debug <a href="#debug" class="w-headline-link">#</a>

You can see the conversion reports the browser has scheduled to send at `about://conversion-internals/` &gt; **Pending Reports**. Reports are sent at scheduled times, but for debugging purposes you may want to get the reports immediately.

- To receive all of the scheduled reports now, click **Send All Reports** in `about://conversion-internals/` &gt; **Pending Reports**.
- To always receive reports **immediately** without having to click this button, enable the flag `about://flags/#conversion-measurement-debug-mode`.

### Test your origin trial token(s) <a href="#test-your-origin-trial-token(s)" class="w-headline-link">#</a>

If you've chosen **Exclude a subset of users** in the dropdown **How is usage controlled?** when you've registered your token(s), the API is only enabled for a subset of Chrome users. You may not be part of this group. To test your origin trial tokens, enforce that your browser behave as if it was in the selected Chrome group by enabling the flag `#conversion-measurement-api`.

## Share your feedback <a href="#share-your-feedback" class="w-headline-link">#</a>

If you're experimenting with the API, your feedback is key in order to improve the API and support more use cases—please [share it](/conversion-measurement/#share-your-feedback)!

## Further reading <a href="#further-reading" class="w-headline-link">#</a>

- [Origin trials developer guide](/third-party-origin-trials/)
- [Getting started with Chrome's origin trials](/origin-trials/)
- [What are third-party origin trials?](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md)

_With many thanks to Jxck and John Delaney for their feedback on this article._

_Hero image by William Warby / @wawarby on [Unsplash](https://unsplash.com/photos/WahfNoqbYnM), edited._

<a href="/tags/privacy/" class="w-chip">Privacy</a>

<span class="w-mr--sm"> Last updated: Feb 10, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/using-conversion-measurement/index.md)

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
