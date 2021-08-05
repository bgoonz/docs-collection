<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format" alt="Roadblock barricades" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/DF5rqLYGcuCpQZv1vXKS.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#improving-page-dismissal-in-synchronous-xmlhttprequest()" class="w-toc__header--link">Improving page dismissal in synchronous XMLHttpRequest()</a>

- [Temporary opt-outs](#temporary-opt-outs)
- [Alternatives](#alternatives)
- [Fetch keepalive](#fetch-keepalive)
- [SendBeacon()](<#sendbeacon()>)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Improving page dismissal in synchronous XMLHttpRequest()

Reducing delayed navigations

Dec 18, 2019 <span class="w-author__separator">•</span> Updated Jul 17, 2020

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

It's common for a page or app to have unsubmitted analytics or other data at the time a user closes it. To prevent data loss, some sites use a synchronous call to `XMLHttpRequest()` to keep the page or app open until its data is passed to the server. Not only are there better ways to save data, but this technique creates a bad user experience by delaying closing of the page for up to several seconds.

This practice needs to change, and browsers are responding. The `XMLHttpRequest()` specification is already [slated for deprecation and removal](https://xhr.spec.whatwg.org/#sync-warning). Chrome 80 takes the first step by disallowing synchronous calls inside several event handlers, specifically `beforeunload`, `unload`, `pagehide`, and `visibilitychange` when they are fired in the dismissal. WebKit also recently landed [a commit implementing the same behavior change](https://bugs.webkit.org/show_bug.cgi?id=204912).

In this article I'll briefly describe options for those who need time to update their sites and outline the alternatives to `XMLHttpRequest()`.

## Temporary opt-outs <a href="#temporary-opt-outs" class="w-headline-link">#</a>

Chrome does not simply want to pull the plug on `XMLHttpRequest()`, which is why a few temporary opt-out options are available. For sites on the internet, [an origin trial is available](https://developers.chrome.com/origintrials/#/view_trial/4391009636686233601). With this, you add an origin-specific token to your page headers that enables synchronous `XMLHttpRequest()` calls. This option ends shortly before Chrome 89 ships, sometime in March 2021. Enterprise Chrome customers can also use the `AllowSyncXHRInPageDismissal` policy flag, which ends at the same time.

## Alternatives <a href="#alternatives" class="w-headline-link">#</a>

Regardless of how you send data back to the server, it's best to avoid waiting until page unload to send all the data at once. Aside from creating a bad user experience, unload is unreliable on modern browsers and risks data loss if something goes wrong. Specifically, unload events [often don't fire on mobile browsers](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) because there are [many ways to close](https://developers.google.com/web/updates/2018/07/page-lifecycle-api) a tab or browser on mobile operating systems without the `unload` event firing. With `XMLHttpRequest()`, using small payloads was a choice. Now it's a requirement. Both of its alternatives have an upload limit of 64 KB per context, as required by the specification.

### Fetch keepalive <a href="#fetch-keepalive" class="w-headline-link">#</a>

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides a robust means of dealing with server interactions and [a consistent interface](https://fetch.spec.whatwg.org/#preface) for use across different platform APIs. Among its options is `keepalive`, which ensures that a request continues whether or not the page that made it stays open:

    window.addEventListener('unload', {
      fetch('/siteAnalytics', {
        method: 'POST',
        body: getStatistics(),
        keepalive: true
      });
    }

The `fetch()` method has the advantage of greater control over what's sent to the server. What I don't show in the example is that `fetch()` also returns a promise that resolves with a `Response` object. Since I'm trying to get out of the way of the page's unloading, I chose not to do anything with it.

### SendBeacon() <a href="#sendbeacon()" class="w-headline-link">#</a>

[`SendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) actually uses the Fetch API under the hood, which is why it has the same 64 KB payload limitation and why it also ensures that a request continues after a page unload. Its primary advantage is its simplicity. It lets you submit your data with a single line of code:

    window.addEventListener('unload', {
      navigator.sendBeacon('/siteAnalytics', getStatistics());
    }

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

With the [increased availability of `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Browser_compatibility) across browsers, `XMLHttpRequest()` will hopefully be removed from the web platform at some point. Browser vendors agree it should be removed, but it will take time. Deprecating one of its worst use cases is a first step that improves the user experience for everyone.

_Photo by [Matthew Hamilton](https://unsplash.com/@thatsmrbio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/roadblock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

<span class="w-mr--sm"> Last updated: Jul 17, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/disallow-synchronous-xhr/index.md)

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
