<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format" alt="An illustration demonstrating that platform-specific apps can now share content with web apps." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RfxdrfKdh5Fp8camulRt.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#receiving-shared-data-with-the-web-share-target-api" class="w-toc__header--link">Receiving shared data with the Web Share Target API</a>

- [See Web Share Target in action](#see-web-share-target-in-action)
- [Register your app as a share target](#register-your-app-as-a-share-target)
- [Update your web app manifest](#update-your-web-app-manifest)
- [Accepting basic information](#accepting-basic-information)
- [Accepting application changes](#accepting-application-changes)
- [Accepting files](#accepting-files)
- [Handle the incoming content](#handle-the-incoming-content)
- [Processing GET shares](#processing-get-shares)
- [Processing POST shares](#processing-post-shares)
- [Verifying shared content](#verifying-shared-content)
- [Browser support](#browser-support)
- [Sample applications](#sample-applications)
- [Show support for the API](#show-support-for-the-api)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Receiving shared data with the Web Share Target API

Sharing on mobile and desktop made simple with the Web Share Target API

Nov 8, 2019 <span class="w-author__separator">•</span> Updated Jun 7, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

On a mobile or desktop device, sharing should be as straightforward as clicking the **Share** button, choosing an app, and choosing who to share with. For example, you may want to share an interesting article, either by emailing it to friends or tweeting it to the world.

In the past, only platform-specific apps could register with the operating system to receive shares from other installed apps. But with the Web Share Target API, installed web apps can register with the underlying operating system as a share target to receive shared content.

The Web Share Target API is only half of the magic. Web apps can share data, files, links, or text using the Web Share API. See [Web Share API](/web-share/) for details.

## <figure><img src="https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format" alt="System-level share target picker with an installed PWA as an option." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Q4nuOQMpsQrTilpXA3fL.png?auto=format&amp;w=800 800w" width="400" height="377" /><figcaption>System-level share target picker with an installed PWA as an option.</figcaption></figure>See Web Share Target in action <a href="#see-web-share-target-in-action" class="w-headline-link">#</a>

1.  Using either Chrome 76 or later for Android, or Chrome 89 or later on desktop, open the [Web Share Target demo](https://web-share.glitch.me/).
2.  When prompted, click **Install** to add the app to your home screen, or use the Chrome menu to add it to your home screen.
3.  Open any app that supports sharing, or use the Share button in the demo app.
4.  From the target picker, choose **Web Share Test**.

After sharing, you should see all of the shared information in the web share target web app.

## Register your app as a share target <a href="#register-your-app-as-a-share-target" class="w-headline-link">#</a>

To register your app as a share target, it needs to meet [Chrome's installability criteria](https://developers.google.com/web/fundamentals/app-install-banners/#criteria). In addition, before a user can share to your app, they must add it to their home screen. This prevents sites from randomly adding themselves to the user's share intent chooser and ensures that sharing is something that users want to do with your app.

## Update your web app manifest <a href="#update-your-web-app-manifest" class="w-headline-link">#</a>

To register your app as a share target, add a `share_target` entry to its [web app manifest](/add-manifest/). This tells the operating system to include your app as an option in the intent chooser. What you add to the manifest controls the data that your app will accept. There are three common scenarios for the `share_target` entry:

- Accepting basic information
- Accepting application changes
- Accepting files

You can only have one `share_target` per manifest, if you want to share to different places within your app, provide that as an option within the share target landing page.

### Accepting basic information <a href="#accepting-basic-information" class="w-headline-link">#</a>

If your target app is merely accepting basic information such as data, links, and text, add the following to the `manifest.json` file:

    "share_target": {
      "action": "/share-target/",
      "method": "GET",
      "params": {
        "title": "title",
        "text": "text",
        "url": "url"
      }
    }

If your application already has a share URL scheme, you can replace the `param` values with your existing query parameters. For example, if your share URL scheme uses `body` instead of `text`, you could replace `"text": "text"` with `"text": "body"`.

The `method` value defaults to `"GET"` if not provided. The `enctype` field, not shown in this example, indicates the [type of encoding](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) for the data. For the `"GET"` method, `enctype` defaults to `"application/x-www-form-urlencoded"` and is ignored if it's set to anything else.

### Accepting application changes <a href="#accepting-application-changes" class="w-headline-link">#</a>

If the shared data changes the target app in some way—for example, saving a bookmark in the target application—set the `method` value to `"POST"` and include the `enctype` field. The example below creates a bookmark in the target app, so it uses `"POST"` for the `method` and `"multipart/form-data"` for the `enctype`:

    {
      "name": "Bookmark",
      "share_target": {
        "action": "/bookmark",
        "method": "POST",
        "enctype": "multipart/form-data",
        "params": {
          "url": "link"
        }
      }
    }

### Accepting files <a href="#accepting-files" class="w-headline-link">#</a>

As with application changes, accepting files requires that `method` be `"POST"` and that `enctype` be present. Additionally, `enctype` must be `"multipart/form-data"`, and a `files` entry must be added.

You must also add a `files` array defining the types of files your app accepts. The array elements are entries with two members: a `name` field and an `accept` field. The `accept` field takes a MIME type, a file extension, or an array containing both. It's best to provide an array that includes both a MIME type and a file extension since operating systems differ in which they prefer.

    {
      "name": "Aggregator",
      "share_target": {
        "action": "/cgi-bin/aggregate",
        "method": "POST",
        "enctype": "multipart/form-data",
        "params": {
          "title": "name",
          "text": "description",
          "url": "link",
          "files": [
            {
              "name": "records",
              "accept": ["text/csv", ".csv"]
            },
            {
              "name": "graphs",
              "accept": "image/svg+xml"
            }
          ]
        }
      }
    }

## Handle the incoming content <a href="#handle-the-incoming-content" class="w-headline-link">#</a>

How you deal with the incoming shared data is up to you and depends on your app. For example:

- An email client could draft a new email using `title` as the subject of an email, with `text` and `url` concatenated together as the body.
- A social networking app could draft a new post ignoring `title`, using `text` as the body of the message, and adding `url` as a link. If `text` is missing, the app might use `url` in the body as well. If `url` is missing, the app might scan `text` looking for a URL and add that as a link.
- A photo sharing app could create a new slideshow using `title` as the slideshow title, `text` as a description, and `files` as the slideshow images.
- A text messaging app could draft a new message using `text` and `url` concatenated together and dropping `title`.

### Processing GET shares <a href="#processing-get-shares" class="w-headline-link">#</a>

If the user selects your application, and your `method` is `"GET"` (the default), the browser opens a new window at the `action` URL. The browser then generates a query string using the URL-encoded values supplied in the manifest. For example, if the sharing app provides `title` and `text`, the query string is `?title=hello&text=world`. To process this, use a `DOMContentLoaded` event listener in your foreground page and parse the query string:

    window.addEventListener('DOMContentLoaded', () => {
      const parsedUrl = new URL(window.location);
      // searchParams.get() will properly handle decoding the values.
      console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
      console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
      console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
    });

Be sure to use a service worker to [precache](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker) the `action` page so that it will load quickly and work reliably, even if the user is offline. [Workbox](https://developers.google.com/web/tools/workbox/) is a tool that can help you [implement precaching](/precache-with-workbox/) in your service worker.

### Processing POST shares <a href="#processing-post-shares" class="w-headline-link">#</a>

If your `method` is `"POST"`, as it would be if your target app accepts a saved bookmark or shared files, then the body of the incoming `POST` request contains the data passed by the sharing application, encoded using the `enctype` value provided in the manifest.

The foreground page cannot process this data directly. Since the page sees the data as a request, the page passes it to the service worker, where you can intercept it with a `fetch` event listener. From here, you can pass the data back to the foreground page using `postMessage()` or pass it on to the server:

    self.addEventListener('fetch', event => {
      const url = new URL(event.request.url);
      // If this is an incoming POST request for the
      // registered "action" URL, respond to it.
      if (event.request.method === 'POST' &&
          url.pathname === '/bookmark') {
        event.respondWith((async () => {
          const formData = await event.request.formData();
          const link = formData.get('link') || '';
          const responseUrl = await saveBookmark(link);
          return Response.redirect(responseUrl, 303);
        })());
      }
    });

### Verifying shared content <a href="#verifying-shared-content" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format" alt="The sample sharing target app." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/hSwbgPk8IFgPC81oJbxZ.png?auto=format&amp;w=800 800w" width="400" height="280" /><figcaption>The sample sharing target app.</figcaption></figure>Be sure to verify incoming data. Unfortunately, there is no guarantee that other apps will share the appropriate content in the right parameter.

For example, on Android, the [`url` field will be empty](https://bugs.chromium.org/p/chromium/issues/detail?id=789379) because it's not supported in Android's share system. Instead, URLs will often appear in the `text` field, or occasionally in the `title` field.

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

As of early 2021, the Web Share Target API is supported by:

- Chrome and Edge 76 or later on Android.
- Chrome 89 or later on Chrome OS.

On all platforms, your web app has to be [installed](https://developers.google.com/web/fundamentals/app-install-banners/#criteria) before it will show up as a potential target for receiving shared data.

## Sample applications <a href="#sample-applications" class="w-headline-link">#</a>

- [Squoosh](https://github.com/GoogleChromeLabs/squoosh)
- [Scrapbook PWA](https://github.com/GoogleChrome/samples/blob/gh-pages/web-share/README.md#web-share-demo)

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Web Share Target API? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#WebShareTarget`](https://twitter.com/search?q=%23WebShareTarget&src=recent_search_click&f=live) and let us know where and how you're using it.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: Jun 7, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/web-share-target/index.md)

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
