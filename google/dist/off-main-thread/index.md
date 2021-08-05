<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#use-web-workers-to-run-javascript-off-the-browser&#39;s-main-thread" class="w-toc__header--link">Use web workers to run JavaScript off the browser's main thread</a>

- [Threading with web workers](#threading-with-web-workers)
- [main.js](#main.js)
- [worker.js](#worker.js)
- [main.js](#main.js-2)
- [worker.js](#worker.js-2)
- [Comlink: making web workers less work](#comlink:-making-web-workers-less-work)
- [worker.js](#worker.js-3)
- [main.js](#main.js-3)
- [What code should you move to a web worker?](#what-code-should-you-move-to-a-web-worker)
- [PROXX: an OMT case study](#proxx:-an-omt-case-study)
- [Implications of an OMT architecture](#implications-of-an-omt-architecture)
- [Considering the tradeoffs](#considering-the-tradeoffs)
- [A note about tooling](#a-note-about-tooling)
- [Summing up](#summing-up)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Use web workers to run JavaScript off the browser's main thread

An off-main-thread architecture can significantly improve your app's reliability and user experience.

Dec 5, 2019

[<img src="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Surma" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/surma/)

<a href="/authors/surma/" class="w-author__name-link">Surma</a>

- <a href="https://twitter.com/DasSurma" class="w-author__link">Twitter</a>

In the past 20 years, the web has evolved dramatically from static documents with a few styles and images to complex, dynamic applications. However, one thing has remained largely unchanged: we have just one thread per browser tab (with some exceptions) to do the work of rendering our sites and running our JavaScript.

As a result, the main thread has become incredibly overworked. And as web apps grow in complexity, the main thread becomes a significant bottleneck for performance. To make matters worse, the amount of time it takes to run code on the main thread for a given user is **almost completely unpredictable** because device capabilities have a massive effect on performance. That unpredictability will only grow as users access the web from an increasingly diverse set of devices, from hyper-constrained feature phones to high-powered, high-refresh-rate flagship machines.

If we want sophisticated web apps to reliably meet performance guidelines like the [RAIL model](https://developers.google.com/web/fundamentals/performance/rail)—which is based on empirical data about human perception and psychology—we need ways to execute our code **off the main thread (OMT)**.

If you want to hear more about the case for an OMT architecture, watch my CDS 2019 talk below.

## Threading with web workers <a href="#threading-with-web-workers" class="w-headline-link">#</a>

Other platforms typically support parallel work by allowing you to give a thread a function, which runs in parallel with the rest of your program. You can access the same variables from both threads, and access to these shared resources can be synchronized with mutexes and semaphores to prevent race conditions.

In JavaScript, we can get roughly similar functionality from web workers, which have been around since 2007 and supported across all major browsers since 2012. Web workers run in parallel with the main thread, but unlike OS threading they can't share variables.

Don't confuse web workers with [service workers](/service-workers-cache-storage) or [worklets](https://developer.mozilla.org/en-US/docs/Web/API/Worklet). While the names are similar, the functionality and uses are different.

To create a web worker, pass a file to the worker constructor, which starts running that file in a separate thread:

    const worker = new Worker("./worker.js");

Communicate with the web worker by sending messages via the [`postMessage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). Pass the message value as a parameter in the `postMessage` call and then add a message event listener to the worker:

### `main.js` <a href="#main.js" class="w-headline-link">#</a>

    const worker = new Worker("./worker.js");
    worker.postMessage([40, 2]);

### `worker.js` <a href="#worker.js" class="w-headline-link">#</a>

    addEventListener("message", event => {
      const [a, b] = event.data;
      // Do stuff with the message
    });

To send a message back to the main thread, use the same `postMessage` API in the web worker and set up an event listener on the main thread:

### `main.js` <a href="#main.js-2" class="w-headline-link">#</a>

    const worker = new Worker("./worker.js");
    worker.postMessage([40, 2]);
    worker.addEventListener("message", event => {
      console.log(event.data);
    });

### `worker.js` <a href="#worker.js-2" class="w-headline-link">#</a>

    addEventListener("message", event => {
      const [a, b] = event.data;
      // Do stuff with the message
      postMessage(a+b);
    });

Admittedly, this approach is somewhat limited. Historically, web workers have mainly been used for moving a single piece of heavy work off the main thread. Trying to handle multiple operations with a single web worker gets unwieldy quickly: you have to encode not only the parameters but also the operation in the message, and you have to do bookkeeping to match responses to requests. That complexity is likely why web workers haven't been adopted more widely.

But if we could remove some of the difficulty of communicating between the main thread and web workers, this model could be a great fit for many use cases. And, luckily, there's a library that does just that!

## Comlink: making web workers less work <a href="#comlink:-making-web-workers-less-work" class="w-headline-link">#</a>

[Comlink](http://npm.im/comlink) is a library whose goal is to let you use web workers without having to think about the details of `postMessage`. Comlink lets you to share variables between web workers and the main thread almost like other programming languages that support threading.

You set up Comlink by importing it in a web worker and defining a set of functions to expose to the main thread. You then import Comlink on the main thread, wrap the worker, and get access to the exposed functions:

### `worker.js` <a href="#worker.js-3" class="w-headline-link">#</a>

    import {expose} from "comlink";

    const api = {
      someMethod() { /* … */ }
    }
    expose(api);

### `main.js` <a href="#main.js-3" class="w-headline-link">#</a>

    import {wrap} from "comlink";

    const worker = new Worker("./worker.js");
    const api = wrap(worker);

The `api` variable on main thread behaves the same as the one in the web worker, except that every function returns a promise for a value rather than the value itself.

## What code should you move to a web worker? <a href="#what-code-should-you-move-to-a-web-worker" class="w-headline-link">#</a>

Web workers don't have access to the DOM and many APIs like [WebUSB](https://developer.mozilla.org/en-US/docs/Web/API/USB), [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API), or [Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), so you can't put pieces of your app that rely on such access in a worker. Still, every small piece of code moved to a worker buys more headroom on the main thread for stuff that _has_ to be there—like updating the user interface.

Restricting UI access to the main thread is actually typical in other languages. In fact, both iOS and Android call the main thread the _UI thread_.

One problem for web developers is that most web apps rely on a UI framework like Vue or React to orchestrate everything in the app; everything is a component of the framework and so is inherently tied to the DOM. That would seem to make it difficult to migrate to an OMT architecture.

However, if we shift to a model in which UI concerns are separated from other concerns, like state management, web workers can be quite useful even with framework-based apps. That's exactly the approach taken with PROXX.

## PROXX: an OMT case study <a href="#proxx:-an-omt-case-study" class="w-headline-link">#</a>

The Google Chrome team developed [PROXX](/load-faster-like-proxx/) as a Minesweeper clone that meets [Progressive Web App](https://developers.google.com/web/progressive-web-apps) requirements, including working offline and having an engaging user experience. Unfortunately, early versions of the game performed poorly on constrained devices like feature phones, which led the team to realize that the main thread was a bottleneck.

The team decided to use web workers to separate the game's visual state from its logic:

- The main thread handles rendering of animations and transitions.
- A web worker handles game logic, which is purely computational.

This approach is similar to the Redux [Flux pattern](https://facebook.github.io/flux/), so many Flux apps may be able to migrate fairly easily to an OMT architecture. Take a look at [this blog post](http://dassur.ma/things/react-redux-comlink/) to read more about applying OMT to a Redux app.

OMT had interesting effects on PROXX's feature phone performance. In the non-OMT version, the UI is frozen for six seconds after the user interacts with it. There's no feedback, and the user has to wait for the full six seconds before being able to do something else.

UI response time in the **non-OMT** version of PROXX.

In the OMT version, however, the game takes _twelve_ seconds to complete a UI update. While that seems like a performance loss, it actually leads to increased feedback to the user. The slowdown occurs because the app is shipping more frames than the non-OMT version, which isn't shipping any frames at all. The user therefore knows that something is happening and can continue playing as the UI updates, making the game feel considerably better.

UI response time in the **OMT** version of PROXX.

This is a conscious tradeoff: we give users of constrained devices an experience that _feels_ better without penalizing users of high-end devices.

## Implications of an OMT architecture <a href="#implications-of-an-omt-architecture" class="w-headline-link">#</a>

As the PROXX example shows, OMT makes your app reliably run on a wider range of devices, but it doesn't make your app faster:

- You're just moving work from the main thread, not reducing the work.
- The extra communication overhead between the web worker and the main thread can sometimes make things marginally slower.

### Considering the tradeoffs <a href="#considering-the-tradeoffs" class="w-headline-link">#</a>

Since the main thread is free to process user interactions like scrolling while JavaScript is running, there are fewer dropped frames even though total wait time may be marginally longer. Making the user wait a bit is preferable to dropping a frame because the margin of error is smaller for dropped frames: dropping a frame happens in milliseconds, while you have _hundreds_ of milliseconds before a user perceives wait time.

Because of the unpredictability of performance across devices, the goal of OMT architecture is really about **reducing risk**—making your app more robust in the face of highly variable runtime conditions—not about the performance benefits of parallelization. The increase in resilience and the improvements to UX are more than worth any small tradeoff in speed.

Developers are sometimes concerned about the cost of copying complex objects across the main thread and web workers. There's more detail in the talk, but, in general, you shouldn't break your performance budget if your object's stringified JSON representation is less than 10 KB. If you need to copy larger objects, consider using [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or [WebAssembly](https://webassembly.org/). You can read more about this issue in [this blog post about `postMessage` performance](https://dassur.ma/things/is-postmessage-slow).

### A note about tooling <a href="#a-note-about-tooling" class="w-headline-link">#</a>

Web workers aren't yet mainstream, so most module tools—like [WebPack](https://webpack.js.org/) and [Rollup](https://github.com/rollup/rollup)—don't support them out of the box. ([Parcel](https://parceljs.org/) does though!) Luckily, there are plugins to make web workers, well, _work_ with WebPack and Rollup:

- [worker-plugin](https://github.com/GoogleChromeLabs/worker-plugin) for WebPack
- [rollup-plugin-off-main-thread](https://github.com/surma/rollup-plugin-off-main-thread) for Rollup

## Summing up <a href="#summing-up" class="w-headline-link">#</a>

To make sure our apps are as reliable and accessible as possible, especially in an increasingly globalized marketplace, we need to support constrained devices—they're how most users are accessing the web globally. OMT offers a promising way to increase performance on such devices without adversely affecting users of high-end devices.

Also, OMT has secondary benefits:

- It moves JavaScript execution costs to a separate thread.
- It moves _parsing_ costs, meaning UI might boot up faster. That might reduce [First Contentful Paint](/first-contentful-paint) or even [Time to Interactive](/interactive), which can in turn increase your [Lighthouse](https://developers.google.com/web/tools/lighthouse) score.

Web workers don't have to be scary. Tools like Comlink are taking the work out of workers and making them a viable choice for a wide range of web applications.

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Dec 5, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/off-main-thread/index.md)

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
