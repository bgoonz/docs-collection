<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format" alt="Two pairs of hands holding a cup of tomatoes." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Cos9WFMqJGVZjBdQHcMU.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#integrate-pwas-into-built-in-sharing-uis-with-workbox" class="w-toc__header--link">Integrate PWAs into built-in sharing UIs with Workbox</a>

- [On the same page](#on-the-same-page)
- [Service worker share targets with Workbox](#service-worker-share-targets-with-workbox)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Integrate PWAs into built-in sharing UIs with Workbox

How to get your PWA to show up next to platform-specific apps in system-level sharing UIs

Dec 19, 2019

[<img src="https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Richard" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/5kuER6QRWs54zbYIJ4zS.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samrichard/)

<a href="/authors/samrichard/" class="w-author__name-link">Sam Richard</a>

- <a href="https://twitter.com/snugug" class="w-author__link">Twitter</a>
- <a href="https://github.com/snugug" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@snugug" class="w-author__link">Glitch</a>
- <a href="https://snugug.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

The [Web Share Target API](/web-share-target/) lets you display your [Progressive Web App](https://developers.google.com/web/progressive-web-apps/checklist) in a user's system-level share [sheet](https://material.io/develop/android/components/bottom-sheet-behavior/) after it's been installed. While it works great if you have a server available to receive the request, it's much harder to get working if you don't.

In this article we'll use [Workbox](https://developers.google.com/web/tools/workbox), a set of JavaScript libraries for adding offline support to web apps, to create a share target URL that lives entirely inside your [service worker](/service-workers-cache-storage/). This lets static sites and single-page apps serve as share targets without a dedicated server endpoint.

## <figure><img src="https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format" alt="System-level share target picker with an installed PWA called Share Target Test as an option." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/mp2bdiP2gVeMQ4UX12vd.png?auto=format&amp;w=800 800w" width="400" height="377" /><figcaption>System-level share target picker with an installed PWA called <code>Share Target Test</code> as an option.</figcaption></figure>On the same page <a href="#on-the-same-page" class="w-headline-link">#</a>

If you're unfamiliar with how Web Share Target Works, [Receiving shared data with the Web Share Target API](/web-share-target/) gives you an in-depth introduction. Here's a quick review.

There are two parts to implementing web share target functionality. First, update your [web app manifest](/add-manifest/) to indicate that you want your app to be a share target when installed. The following example directs shares to the `/share` url via a `POST` request. It is encoded as a multipart form, with title being called `name`, text being called `description`, and JPEG images being called `photos`.

    …
    "share_target": {
      "action": "/share",
      "method": "POST",
      "enctype": "multipart/form-data",
      "params": {
        "title": "name",
        "text": "description",
        "files": [
          {
            "name": "photos",
            "accept": ["image/jpeg", ".jpg"]
          }
        ]
      }
    }
    …

## Service worker share targets with Workbox <a href="#service-worker-share-targets-with-workbox" class="w-headline-link">#</a>

While normally handled by a server endpoint, a neat trick you can do for a share target is to register a route directly in your service worker to handle the request. This will let your app be a share target without a backend.

You do this in [Workbox](https://developers.google.com/web/tools/workbox) by registering a route that's handled by your service worker. Start by importing `registerRoute` from `'workbox-routing'`. Notice that it's registered for the `/share` route, the same one listed in the example web app manifest. In response it calls `shareTargetHandler()`.

    import { registerRoute } from 'workbox-routing';

    registerRoute(
      '/share',
      shareTargetHandler,
      'POST'
    );

The `shareTargetHandler()` function is asynchronous and takes the event, awaits the form data, then retrieves the media files from that.

    async function shareTargetHandler ({event}) {
      const formData = await event.request.formData();
      const mediaFiles = formData.getAll('media');

      for (const mediaFile of mediaFiles) {
        // Do something with mediaFile
        // Maybe cache it or post it back to a server
      });

      // Do something with the rest of formData as you need
      // Maybe save it to IndexedDB
    };

You can then do whatever you'd like with these files. You can cache them. You can send them somewhere with a fetch request. You can even use the other manifest options, maybe serving a page with some query parameters for the other shared items or storing the data and pointers to the media in the [Cache Storage API](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api) or [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

You can try it out on the sample app [Fugu Journal](https://fugu-journal.web.app/) and see its service worker implementation in its [source code](https://github.com/chromeos/bridging-the-native-app-gap/blob/master/fugu-journal/src/js/service-worker.js).

One common thing you might do is hold shared resources until better network connections are available. Workbox also supports [periodic background sync](/periodic-background-sync/).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The Share Target API is a simple way to deeply integrate your Progressive Web App into user's devices, putting them on-par with platform-specific applications for the critical task of sharing content between apps. But doing so usually requires a server available to receive the request. By leveraging Workbox to create a share target route directly in your service worker, your app is free of this constraint, allowing Share Target to work for apps while offline and without backends.

Photo by [Elaine Casap](https://unsplash.com/@ecasap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/share?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Dec 19, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/workbox-share-targets/index.md)

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
