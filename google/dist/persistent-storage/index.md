<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format" alt="Printed circuit board" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/0TWeS0GZhDTpPzQVhDVS.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#persistent-storage" class="w-toc__header--link">Persistent storage</a>

- [Check if your site's storage has been marked as persistent](#check-if-your-site's-storage-has-been-marked-as-persistent)
- [When should I ask for persistent storage?](#when-should-i-ask-for-persistent-storage)
- [Request persistent storage](#request-persistent-storage)
- [How is permission granted?](#how-is-permission-granted)
- [What storage is protected by persistent storage?](#what-storage-is-protected-by-persistent-storage)
- [How to turn off persistent storage](#how-to-turn-off-persistent-storage)
- [Conclusion](#conclusion)
- [Thanks](#thanks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Persistent storage

Persistent storage can help protect critical data from eviction, and reduce the chance of data loss.

May 12, 2020 <span class="w-author__separator">•</span> Updated May 12, 2020

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

When faced with storage pressure like low disk space, browsers will typically [evict data](/storage-for-the-web/#eviction), including from the Cache API and IndexedDB, from the least recently used origin. This may cause data loss if the app hasn't synced data with the server, and reduce the reliability of the app by removing resources required for the app to work, both of which lead to negative user experiences.

Thankfully, research by the Chrome team shows that data is very rarely cleared automatically by Chrome. It is far more common for users to manually clear storage. Thus if a user visits your site regularly, the chances are small that your data will be evicted. To prevent the browser from deleting your data, you can request that your entire site's storage be marked persistent.

Requesting that all your site's data be marked as persistent should only be done for critical data (for example, end-to-end encryption keys) that if not backed up to the cloud, could result in significant data loss if not saved. Persistent storage is not deleted by the browser, even if storage is running low. It will only be deleted if the user chooses to remove it via their site settings.

Persistent storage is [supported in many modern](https://caniuse.com/#feat=mdn-api_permissions_persistent-storage_permission) browsers. To learn more about eviction, how much you can store, and how to handle quota limitations, see [Storage for the web](/storage-for-the-web/).

## Check if your site's storage has been marked as persistent <a href="#check-if-your-site&#39;s-storage-has-been-marked-as-persistent" class="w-headline-link">#</a>

You can use JavaScript to determine if your site's storage has been marked as persistent. Calling `navigator.storage.persisted()` returns a Promise that resolves with a boolean, indicating whether storage has been marked as persisted.

    // Check if site's storage has been marked as persistent
    if (navigator.storage && navigator.storage.persist) {
      const isPersisted = await navigator.storage.persisted();
      console.log(`Persisted storage granted: ${isPersisted}`);
    }

## When should I ask for persistent storage? <a href="#when-should-i-ask-for-persistent-storage" class="w-headline-link">#</a>

The best time to request your storage be marked as persistent is when you save critical user data, and the request should ideally be wrapped in a user gesture. Do not ask for persistent storage on page load, or in other bootstrap code, the browser may prompt the user for permission. If the user isn't doing anything that they think needs to be saved, the prompt may be confusing, and they'll likely reject the request. Additionally, don't prompt too frequently. If the user decided not to grant permission, don't immediately prompt again on the next save.

## Request persistent storage <a href="#request-persistent-storage" class="w-headline-link">#</a>

To request persistent storage for your site's data, call `navigator.storage.persist()`. It returns a Promise that resolves with a boolean, indicating whether the persistent storage permission was granted.

    // Request persistent storage for site
    if (navigator.storage && navigator.storage.persist) {
      const isPersisted = await navigator.storage.persist();
      console.log(`Persisted storage granted: ${isPersisted}`);
    }

The API names to _check_ if your site's storage has already been marked persistent, and to _request_ persistent storage are very similar. The way I remember the difference is `persisted()` is past-tense, and is used to check if it's already persist**ed**. Whereas `persist()` is present-tense and asks for it now.

### How is permission granted? <a href="#how-is-permission-granted" class="w-headline-link">#</a>

Persistent storage is treated as a [permission](https://storage.spec.whatwg.org/#persistence). Browsers use different factors to decide whether to grant persistent storage permissions.

#### Chrome and other Chromium-based browsers <a href="#chrome-and-other-chromium-based-browsers" class="w-headline-link">#</a>

Chrome, and most other Chromium-based browsers automatically handle the permission request, and do not show any prompts to the user. Instead, if a site is considered important, the persistent storage permission is automatically granted, otherwise it is silently denied.

The heuristics to determine if a site is important include:

- How high is the level of site engagement?
- Has the site been installed or bookmarked?
- Has the site been granted permission to show notifications?

If the request was denied, it can be requested again later and will be evaluated using the same heuristics.

#### Firefox <a href="#firefox" class="w-headline-link">#</a>

Firefox delegates the permission request to the user. When persistent storage is requested, it prompts the user with a UI popup asking if they will allow the site to store data in persistent storage.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format" alt="A popup shown by Firefox when a site requests persistent storage." sizes="(min-width: 428px) 428px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/o8W7pNTZ5dFKeDg2cmvA.jpg?auto=format&amp;w=856 856w" width="428" height="177" /><figcaption>A popup shown by Firefox when a site requests persistent storage.</figcaption></figure>What storage is protected by persistent storage? <a href="#what-storage-is-protected-by-persistent-storage" class="w-headline-link">#</a>

If the persistent storage permission is granted, the browser will not evict data stored in:

- Cache API
- Cookies
- DOM Storage (Local Storage)
- File System API (browser-provided and sandboxed file system)
- IndexedDB
- Service workers
- App Cache (deprecated, should not be used)
- WebSQL (deprecated, should not be used)

## How to turn off persistent storage <a href="#how-to-turn-off-persistent-storage" class="w-headline-link">#</a>

At this time, there is no programmatic way to tell the browser you no longer need persistent storage.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Research from the Chrome team shows that although possible, stored data is rarely cleared automatically by Chrome. To protect critical data that may not be stored in the cloud, or will result in significant data loss, persistent storage can be a helpful tool to ensure that your data is not removed by the browser when the local device is faced with storage pressure. And remember, only request persistent storage when the user is most likely to want it.

### Thanks <a href="#thanks" class="w-headline-link">#</a>

Special thanks to Victor Costan, and Joe Medley for reviewing this article. Thanks to Chris Wilson who wrote the original version of this article that first appeared on WebFundamentals.

Hero image by Umberto on [Unsplash](https://unsplash.com/photos/jXd2FSvcRr8)

<a href="/tags/storage/" class="w-chip">Storage</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: May 12, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/persistent-storage/index.md)

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
