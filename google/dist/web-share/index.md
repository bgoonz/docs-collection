<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format" alt="An illustration demonstrating that web apps can use the system-provided sharing UI." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ruvEms3AeSZvlEI01DKo.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#integrate-with-the-os-sharing-ui-with-the-web-share-api" class="w-toc__header--link">Integrate with the OS sharing UI with the Web Share API</a>

- [Concepts and usage](#concepts-and-usage)
- [Capabilities and limitations](#capabilities-and-limitations)
- [Sharing links and text](#sharing-links-and-text)
- [Sharing files](#sharing-files)
- [Santa Tracker case study](#santa-tracker-case-study)
- [Browser support](#browser-support)
- [Show support for the API](#show-support-for-the-api)
- [Helpful Links](#helpful-links)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Integrate with the OS sharing UI with the Web Share API

Web apps can use the same system-provided share capabilities as platform-specific apps.

Nov 8, 2019 <span class="w-author__separator">•</span> Updated Jul 9, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

With the Web Share API, web apps are able to use the same system-provided share capabilities as platform-specific apps. The Web Share API makes it possible for web apps to share links, text, and files to other apps installed on the device in the same way as platform-specific apps.

Sharing is only half of the magic. Web apps can also be share targets, meaning they can receive data, links, text, and files from platform-specific or web apps. See the [Receive shared data](/web-share-target/) post for details on how to register your app as a share target.

## Concepts and usage <a href="#concepts-and-usage" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format" alt="System-level share target picker with an installed PWA as an option." sizes="(min-width: 370px) 370px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/cCXNoHbXAfkAQzTTuS0Z.png?auto=format&amp;w=740 740w" width="370" height="349" /><figcaption>System-level share target picker with an installed PWA as an option.</figcaption></figure>### Capabilities and limitations <a href="#capabilities-and-limitations" class="w-headline-link">#</a>

Web share has the following capabilities and limitations:

- It can only be used on a site that is [accessed via HTTPS](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features).
- It must be invoked in response to a user action such as a click. Invoking it through the `onload` handler is impossible.
- It can share, URLs, text, or files.
- As of January 2021, it is available on Safari, Android in Chromium forks, Chrome OS, and Chrome on Windows. Chrome on MacOS is still in development. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share#Browser_compatibility) for details.

### Sharing links and text <a href="#sharing-links-and-text" class="w-headline-link">#</a>

To share links and text, use the `share()` method, which is a promise-based method with a required properties object. To keep the browser from throwing a `TypeError`, the object must contain at least one of the following properties: `title`, `text`, `url` or `files`. You can, for example, share text without a URL or vice versa. Allowing all three members expands the flexibility of use cases. Imagine if after running the code below, the user chose an email application as the target. The `title` parameter might become the email subject, the `text`, the message body, and the files, the attachments.

    if (navigator.share) {
      navigator.share({
        title: 'web.dev',
        text: 'Check out web.dev.',
        url: 'https://web.dev/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }

If your site has multiple URLs for the same content, share the page's canonical URL instead of the current URL. Instead of sharing `document.location.href`, you would check for a canonical URL `<meta>` tag in the page's `<head>` and share that. This will provide a better experience to the user. Not only does it avoid redirects, but it also ensures that a shared URL serves the correct user experience for a particular client. For example, if a friend shares a mobile URL and you look at it on a desktop computer, you should see a desktop version:

    let url = document.location.href;
    const canonicalElement = document.querySelector('link[rel=canonical]');
    if (canonicalElement !== null) {
        url = canonicalElement.href;
    }
    navigator.share({url});

### Sharing files <a href="#sharing-files" class="w-headline-link">#</a>

To share files, first test for and call `navigator.canShare()`. Then include an array of files in the call to `navigator.share()`:

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      navigator.share({
        files: filesArray,
        title: 'Vacation Pictures',
        text: 'Photos from September 27 to October 14.',
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }

Notice that the sample handles feature detection by testing for `navigator.canShare()` rather than for `navigator.share()`. The data object passed to `canShare()` only supports the `files` property. Image, video, audio, and text files can be shared. (See [Permitted File Extensions in Chromium](https://docs.google.com/document/d/1tKPkHA5nnJtmh2TgqWmGSREUzXgMUFDL6yMdVZHqUsg/edit?usp=sharing).) More file types may be added in the future.

## Santa Tracker case study <a href="#santa-tracker-case-study" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format" alt="Santa Tracker share button." sizes="(min-width: 343px) 343px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/2I5iOXaOpzEJlEbM694n.png?auto=format&amp;w=686 686w" width="343" height="600" /><figcaption>Santa Tracker share button.</figcaption></figure>[Santa Tracker](https://santatracker.google.com/), an open-source project, is a holiday tradition at Google. Every December, you can celebrate the season with games and educational experiences.

In 2016, the Santa Tracker team used the Web Share API on Android. This API was a perfect fit for mobile. In previous years, the team removed share buttons on mobile because space is at a premium, and they couldn't justify having several share targets.

But with the Web Share API, they were able to present one button, saving precious pixels. They also found that users shared with Web Share around 20% more than users without the API enabled. Head to [Santa Tracker](https://santatracker.google.com/) to see Web Share in action.

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

Browser support for the Web Share API is nuanced, and it's recommended that you use feature detection (as described in the earlier code samples) instead of assuming that a particular method is supported.

As of early 2021, using the API to share title, text, and URL is supported by:

- Safari 12 or later on macOS and iOS.
- Chrome 75 or later on Android, and 89 or later on Chrome OS and Windows.

Using the API to share files is supported by:

- Safari 15 or later on macOS and iOS.
- Chrome 75 or later on Android, and 89 or later on Chrome OS and Windows.

(Most Chromium-based browsers, like Edge, have the same support for this feature as the corresponding version of Chrome.)

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Web Share API? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#WebShare`](https://twitter.com/search?q=%23WebShare&src=recent_search_click&f=live) and let us know where and how you're using it.

## Helpful Links <a href="#helpful-links" class="w-headline-link">#</a>

- [Web Share Demos](https://w3c.github.io/web-share/demos/share-files.html)
- [Scrapbook PWA](https://github.com/GoogleChrome/samples/blob/gh-pages/web-share/README.md#web-share-demo)

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=web-share), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bweb-share%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 9, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-share/index.md)

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
