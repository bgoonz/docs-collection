<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format" alt="Green RAM stick. Photo by Harrison Broadbent on Unsplash." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Ne2U4cUtHG6bJ0YeIkt5.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#monitor-your-web-page&#39;s-total-memory-usage-with-lesscodegreatermeasureuseragentspecificmemory()lesscodegreater" class="w-toc__header--link">Monitor your web page's total memory usage with <code>measureUserAgentSpecificMemory()</code></a>

- [How is performance.measureUserAgentSpecificMemory() different from the legacy performance.memory API?](#legacy-api)
- [Suggested use cases](#use-cases)
- [Browser compatibility](#compatibility)
- [Current status](#status)
- [Using performance.measureUserAgentSpecificMemory()](<#using-performance.measureuseragentspecificmemory()>)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Feature detection](#feature-detection)
- [Local testing](#local-testing)
- [Example](#example)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support](#show-support)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Monitor your web page's total memory usage with `measureUserAgentSpecificMemory()`

Learn how to measure memory usage of your web page in production to detect regressions.

Apr 13, 2020 <span class="w-author__separator">•</span> Updated Oct 19, 2020

[<img src="https://web-dev.imgix.net/image/admin/PmkU3edj6n65Zh0bjaX7.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Ulan Degenbaev" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/PmkU3edj6n65Zh0bjaX7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/PmkU3edj6n65Zh0bjaX7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/PmkU3edj6n65Zh0bjaX7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/PmkU3edj6n65Zh0bjaX7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/PmkU3edj6n65Zh0bjaX7.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/ulan/)

<a href="/authors/ulan/" class="w-author__name-link">Ulan Degenbaev</a>

- <a href="https://twitter.com/ulandev" class="w-author__link">Twitter</a>
- <a href="https://github.com/ulan" class="w-author__link">GitHub</a>

**Updates**

**April 23rd, 2021**: Updated the status and clarified the scope of the API with a note about out-of-process iframes.

**January 20th, 2021**: `performance.measureMemory` is renamed to `performance.measureUserAgentSpecificMemory` and enabled by default in Chrome 89 for [cross-origin isolated](/coop-coep) web pages. The format of the result also [has changed](https://github.com/WICG/performance-measure-memory/blob/master/ORIGIN_TRIAL.md#result-differences) slightly compared to the Origin Trial version.

Browsers manage the memory of web pages automatically. Whenever a web page creates an object, the browser allocates a chunk of memory "under the hood" to store the object. Since memory is a finite resource, the browser performs garbage collection to detect when an object is no longer needed and to free the underlying memory chunk. The detection is not perfect though, and it [was proven](https://en.wikipedia.org/wiki/Halting_problem) that perfect detection is an impossible task. Therefore browsers approximate the notion of "an object is needed" with the notion of "an object is reachable". If the web page cannot reach an object via its variables and the fields of other reachable objects, then the browser can safely reclaim the object. The difference between these two notions leads to memory leaks as illustrated by the following example.

    const object = { a: new Array(1000), b: new Array(2000) };
    setInterval(() => console.log(object.a), 1000);

Here the larger array `b` is no longer needed, but the browser does not reclaim it because it is still reachable via `object.b` in the callback. Thus the memory of the larger array is leaked.

Memory leaks are [prevalent on the Web](https://docs.google.com/presentation/d/14uV5jrJ0aPs0Hd0Ehu3JPV8IBGc3U8gU6daLAqj6NrM/edit#slide=id.p). It is easy to introduce one by forgetting to unregister an event listener, by accidentally capturing objects from an iframe, by not closing a worker, by accumulating objects in arrays, and so on. If a web page has memory leaks, then its memory usage grows over time and the web page appears slow and bloated to the users.

The first step in solving this problem is measuring it. The new [`performance.measureUserAgentSpecificMemory()` API](https://github.com/WICG/performance-measure-memory) allows developers to measure memory usage of their web pages in production and thus detect memory leaks that slip through local testing.

## How is `performance.measureUserAgentSpecificMemory()` different from the legacy `performance.memory` API? <a href="#legacy-api" class="w-headline-link">#</a>

If you are familiar with the existing non-standard `performance.memory` API, you might be wondering how the new API differs from it. The main difference is that the old API returns the size of the JavaScript heap whereas the new API estimates the memory used by the web page. This difference becomes important when Chrome shares the same heap with multiple web pages (or multiple instances of the same web page). In such cases, the result of the old API may be arbitrarily off. Since the old API is defined in implementation-specific terms such as "heap", standardizing it is hopeless.

Another difference is that the new API performs memory measurement during garbage collection. This reduces the noise in the results, but it may take a while until the results are produced. Note that other browsers may decide to implement the new API without relying on garbage collection.

## Suggested use cases <a href="#use-cases" class="w-headline-link">#</a>

Memory usage of a web page depends on the timing of events, user actions, and garbage collections. That is why the memory measurement API is intended for aggregating memory usage data from production. The results of individual calls are less useful. Example use cases:

- Regression detection during rollout of a new version of the web page to catch new memory leaks.
- A/B testing a new feature to evaluate its memory impact and detect memory leaks.
- Correlating memory usage with session duration to verify presence or absence of memory leaks.
- Correlating memory usage with user metrics to understand the overall impact of memory usage.

## Browser compatibility <a href="#compatibility" class="w-headline-link">#</a>

Currently the API is supported only in Chrome 83 as an origin trial. The result of the API is highly implementation-dependent because browsers have different ways of representing objects in memory and different ways of estimating the memory usage. Browsers may exclude some memory regions from accounting if proper accounting is too expensive or infeasible. Thus, results cannot be compared across browsers. It is only meaningful to compare the results for the same browser.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/performance-measure-memory">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/performance-measure-memory/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback and iterate design</td><td><a href="#feedback">In Progress</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developers.chrome.com/origintrials/#/view_trial/1281274093986906113">Complete</a></td></tr><tr class="odd"><td>5. Launch</td><td>Enabled by default in Chrome 89</td></tr></tbody></table>

## Using `performance.measureUserAgentSpecificMemory()` <a href="#using-performance.measureuseragentspecificmemory()" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with `performance.measureUserAgentSpecificMemory()` without an origin trial token, enable the `#experimental-web-platform-features` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

The `performance.measureUserAgentSpecificMemory()` API is available as an origin trial starting in Chrome 83. The origin trial is expected to end in Chrome 86, in early November 2020.

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developers.chrome.com/origintrials/#/view_trial/1281274093986906113) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

The `performance.measureUserAgentSpecificMemory()` function may fail with a [SecurityError](https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-SecurityError) if the execution environment does not fulfil the security requirements for preventing cross-origin information leaks. During the origin trial in Chrome, the API requires that [Site Isolation](https://developers.google.com/web/updates/2018/07/site-isolation) is enabled. When the API ships, it will rely on [cross-origin isolation](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated). A web page can opt-in to cross-origin isolation by setting [COOP+COEP headers](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit).

    if (performance.measureUserAgentSpecificMemory) {
      let result;
      try {
        result = await performance.measureUserAgentSpecificMemory();
      } catch (error) {
        if (error instanceof DOMException &&
            error.name === "SecurityError") {
          console.log("The context is not secure.");
        } else {
          throw error;
        }
      }
      console.log(result);
    }

### Local testing <a href="#local-testing" class="w-headline-link">#</a>

Chrome performs the memory measurement during garbage collection. This means that the API does not resolve the result promise immediately and instead waits for the next garbage collection. The API forces a garbage collection after some timeout, which is currently set to 20 seconds. Starting Chrome with the `--enable-blink-features='ForceEagerMeasureMemory'` command-line flag reduces the timeout to zero and is useful for local debugging and testing.

## Example <a href="#example" class="w-headline-link">#</a>

The recommended usage of the API is to define a global memory monitor that samples memory usage of the whole web page and sends the results to a server for aggregation and analysis. The simplest way is to sample periodically, for example every `M` minutes. That however introduces bias to data because the memory peaks may occur between the samples. The following example shows how to do unbiased memory measurements using a [Poisson process](https://en.wikipedia.org/wiki/Poisson_point_process), which guarantees that samples are equally likely to occur at any point in time ([demo](https://performance-measure-memory.glitch.me/), [source](https://glitch.com/edit/#!/performance-measure-memory?path=script.js:1:0)).

First, define a function that schedules the next memory measurement using `setTimeout()` with a randomized interval. The function should be called after page load on the main window.

    function scheduleMeasurement() {
      if (!performance.measureUserAgentSpecificMemory) {
        console.log("performance.measureUserAgentSpecificMemory() is not available.");
        return;
      }
      const interval = measurementInterval();
      console.log("Scheduling memory measurement in " +
          Math.round(interval / 1000) + " seconds.");
      setTimeout(performMeasurement, interval);
    }

    // Start measurements after page load on the main window.
    window.onload = function () {
      scheduleMeasurement();
    }

The `measurementInterval()` function computes a random interval in milliseconds such that on average there is one measurement every five minutes. See [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution#Computational_methods) if you are interested in the math behind the function.

    function measurementInterval() {
      const MEAN_INTERVAL_IN_MS = 5 * 60 * 1000;
      return -Math.log(Math.random()) * MEAN_INTERVAL_IN_MS;
    }

Finally, the async `performMeasurement()` function invokes the API, records the result, and schedules the next measurement.

    async function performMeasurement() {
      // 1. Invoke performance.measureUserAgentSpecificMemory().
      let result;
      try {
        result = await performance.measureUserAgentSpecificMemory();
      } catch (error) {
        if (error instanceof DOMException &&
            error.name === "SecurityError") {
          console.log("The context is not secure.");
          return;
        }
        // Rethrow other errors.
        throw error;
      }
      // 2. Record the result.
      console.log("Memory usage:", result);
      // 3. Schedule the next measurement.
      scheduleMeasurement();
    }

The result may look as follows:

    // Console output:
    {
      bytes: 60_000_000,
      breakdown: [
        {
          bytes: 40_000_000,
          attribution: [
            {
              url: "https://foo.com",
              scope: "Window",
            },
          ]
          types: ["JS"]
        },
        {
          bytes: 0,
          attribution: [],
          types: []
        },
        {
          bytes: 20_000_000,
          attribution: [
            {
              url: "https://foo.com/iframe",
              container: {
                id: "iframe-id-attribute",
                src: "redirect.html?target=iframe.html",
              },
            },
          ],
          types: ["JS"]
        },
      ]
    }

The total memory usage estimate is returned in the `bytes` field. The value of bytes is using [numeric separator syntax](https://v8.dev/features/numeric-separators). This value is highly implementation-dependent and cannot be compared across browsers. It may even change between different versions of the same browser. During the origin trial the value includes JavaScript memory usage of the main window and all **same-site** iframes and related windows. When the API ships, the value will account for JavaScript and DOM memory of all iframes, related windows, and web workers in the current process. Note that the API does not measure the memory of cross-site [out-of-process iframes](https://www.chromium.org/developers/design-documents/oop-iframes) when [Site Isolation](https://www.chromium.org/Home/chromium-security/site-isolation) is enabled.

The `breakdown` list provides further information about the used memory. Each entry describes some portion of the memory and attributes it to a set of windows, iframes, and workers identified by URLs. The `types` field lists the implementation-specific memory types associated with the memory.

It is important to treat all lists in a generic way and to not hardcode assumptions based on a particular browser. For example, some browsers may return an empty `breakdown` or an empty `attribution`. Other browsers may return multiple entries in `attribution` indicating they could not distinguish which of these entries owns the memory.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The [Web Performance Community Group](https://www.w3.org/community/webperfs/) and the Chrome team would love to hear about your thoughts and experiences with `performance.measureUserAgentSpecificMemory()`.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work as expected? Or are there missing properties that you need to implement your idea? File a spec issue on the [performance.measureUserAgentSpecificMemory() GitHub repo](https://github.com/WICG/performance-measure-memory/issues) or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EPerformanceAPIs). Be sure to include as much detail as you can, provide simple instructions for reproducing the bug, and have **Components** set to `Blink>PerformanceAPIs`. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support <a href="#show-support" class="w-headline-link">#</a>

Are you planning to use `performance.measureUserAgentSpecificMemory()`? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them. Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Explainer](https://github.com/WICG/performance-measure-memory)
- [Demo](https://performance-measure-memory.glitch.me/) | [Demo source](https://glitch.com/edit/#!/performance-measure-memory?path=script.js:1:0)
- [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1281274093986906113)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1049093)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/5685965186138112)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Big thanks to Domenic Denicola, Yoav Weiss, Mathias Bynens for API design reviews, and Dominik Inführ, Hannes Payer, Kentaro Hara, Michael Lippautz for code reviews in Chrome. I also thank Per Parker, Philipp Weis, Olga Belomestnykh, Matthew Bolohan, and Neil Mckay for providing valuable user feedback that greatly improved the API.

[Hero image](https://unsplash.com/photos/5tLfQGURzHM) by [Harrison Broadbent](https://unsplash.com/@harrisonbroadbent) on [Unsplash](https://unsplash.com)

<a href="/tags/memory/" class="w-chip">Memory</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: Oct 19, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/monitor-total-page-memory-usage/index.md)

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
