<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format" alt="Computer processor graphic" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/I7oZWRPOJABk1YBGGisK.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#threading-the-web-with-module-workers" class="w-toc__header--link">Threading the web with module workers</a>

- [History: classic workers](#history:-classic-workers)
- [Enter module workers](#enter-module-workers)
- [Preload workers with modulepreload](#preload-workers-with-modulepreload)
- [What about shared workers?](#what-about-shared-workers)
- [What about service worker?](#what-about-service-worker)
- [Additional resources and further reading](#additional-resources-and-further-reading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Threading the web with module workers

Moving heavy lifting into background threads is now easier with JavaScript modules in web workers.

Dec 17, 2019

[<img src="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jason Miller" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/developit/)

<a href="/authors/developit/" class="w-author__name-link">Jason Miller</a>

- <a href="https://twitter.com/_developit" class="w-author__link">Twitter</a>
- <a href="https://github.com/developit" class="w-author__link">GitHub</a>
- <a href="https://jasonformat.com" class="w-author__link">Blog</a>

JavaScript is single-threaded, which means it can only perform one operation at a time. This is intuitive and works well for lots of cases on the web, but can become problematic when we need to do heavy lifting tasks like data processing, parsing, computation, or analysis. As more and more complex applications are delivered on the web, there's an increased need for multi-threaded processing.

On the web platform, the main primitive for threading and parallelism is the [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). Workers are a lightweight abstraction on top of [operating system threads](https://en.wikipedia.org/wiki/Thread_%28computing%29) that expose a message passing API for inter-thread communication. This can be immensely useful when performing costly computations or operating on large datasets, allowing the main thread to run smoothly while performing the expensive operations on one or more background threads.

Here's a typical example of worker usage, where a worker script listens for messages from the main thread and responds by sending back messages of its own:

page.js:

    const worker = new Worker('worker.js');
    worker.addEventListener('message', e => {
      console.log(e.data);
    });
    worker.postMessage('hello');

worker.js:

    addEventListener('message', e => {
      if (e.data === 'hello') {
        postMessage('world');
      }
    });

The Web Worker API has been available in most browsers for over ten years. While that means workers have excellent browser support and are well-optimized, it also means they long predate JavaScript modules. Since there was no module system when workers were designed, the API for loading code into a worker and composing scripts has remained similar to the synchronous script loading approaches common in 2009.

## History: classic workers <a href="#history:-classic-workers" class="w-headline-link">#</a>

The Worker constructor takes a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) URL, which is relative to the document URL. It immediately returns a reference to the new worker instance, which exposes a messaging interface as well as a `terminate()` method that immediately stops and destroys the worker.

    const worker = new Worker('worker.js');

An `importScripts()` function is available within web workers for loading additional code, but it pauses execution of the worker in order to fetch and evaluate each script. It also executes scripts in the global scope like a classic `<script>` tag, meaning the variables in one script can be overwritten by the variables in another.

worker.js:

    importScripts('greet.js');
    // ^ could block for seconds
    addEventListener('message', e => {
      postMessage(sayHello());
    });

greet.js:

    // global to the whole worker
    function sayHello() {
      return 'world';
    }

For this reason, web workers have historically imposed an outsized effect on the architecture of an application. Developers have had to create clever tooling and workarounds to make it possible to use web workers without giving up modern development practices. As an example, bundlers like webpack embed a small module loader implementation into generated code that uses `importScripts()` for code loading, but wraps modules in functions to avoid variable collisions and simulate dependency imports and exports.

## Enter module workers <a href="#enter-module-workers" class="w-headline-link">#</a>

A new mode for web workers with the ergonomics and performance benefits of [JavaScript modules](https://v8.dev/features/modules) is shipping in Chrome 80, called module workers. The `Worker` constructor now accepts a new `{type:"module"}` option, which changes script loading and execution to match `<script type="module">`.

    const worker = new Worker('worker.js', {
      type: 'module'
    });

Since module workers are standard JavaScript modules, they can use import and export statements. As with all JavaScript modules, dependencies are only executed once in a given context (main thread, worker, etc.), and all future imports reference the already-executed module instance. The loading and execution of JavaScript modules is also optimized by browsers. A module's dependencies can be loaded prior to the module being executed, which allows entire module trees to be loaded in parallel. Module loading also caches parsed code, which means modules that are used on the main thread and in a worker only need to be parsed once.

Moving to JavaScript modules also enables the use of [dynamic import](https://v8.dev/features/dynamic-import) for lazy-loading code without blocking execution of the worker. Dynamic import is much more explicit than using `importScripts()` to load dependencies, since the imported module's exports are returned rather than relying on global variables.

worker.js:

    import { sayHello } from './greet.js';
    addEventListener('message', e => {
      postMessage(sayHello());
    });

greet.js:

    import greetings from './data.js';
    export function sayHello() {
      return greetings.hello;
    }

To ensure great performance, the old `importScripts()` method is not available within module workers. Switching workers to use JavaScript modules means all code is loaded in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). Another notable change is that the value of `this` in the top-level scope of a JavaScript module is `undefined`, whereas in classic workers the value is the worker's global scope. Fortunately, there has always been a `self` global that provides a reference to the global scope. It's available in all types of workers including service workers, as well as in the DOM.

Module workers also remove support for HTML-style comments. Did you know you could use HTML comments in web worker scripts?

## Preload workers with `modulepreload` <a href="#preload-workers-with-modulepreload" class="w-headline-link">#</a>

One substantial performance improvement that comes with module workers is the ability to preload workers and their dependencies. With module workers, scripts are loaded and executed as standard JavaScript modules, which means they can be preloaded and even pre-parsed using `modulepreload`:

    <!-- preloads worker.js and its dependencies: -->
    <link rel="modulepreload" href="worker.js">

    <script>
      addEventListener('load', () => {
        // our worker code is likely already parsed and ready to execute!
        const worker = new Worker('worker.js', { type: 'module' });
      });
    </script>

Preloaded modules can also be used by both the main thread and module workers. This is useful for modules that are imported in both contexts, or in cases where it's not possible to know in advance whether a module will be used on the main thread or in a worker.

Previously, the options available for preloading web worker scripts were limited and not necessarily reliable. Classic workers had their own "worker" resource type for preloading, but no browsers implemented `<link rel="preload" as="worker">`. As a result, the primary technique available for preloading web workers was to use `<link rel="prefetch">`, which relied entirely on the HTTP cache. When used in combination with the correct caching headers, this made it possible to avoid worker instantiation having to wait to download the worker script. However, unlike `modulepreload` this technique did not support preloading dependencies or pre-parsing.

## What about shared workers? <a href="#what-about-shared-workers" class="w-headline-link">#</a>

[Shared workers](https://developer.mozilla.org/docs/Web/API/SharedWorker/SharedWorker) have been updated with support for JavaScript modules as of Chrome 83. Like dedicated workers, constructing a shared worker with the `{type:"module"}` option now loads the worker script as a module rather than a classic script:

    const worker = new SharedWorker('/worker.js', {
      type: 'module'
    });

Prior to support of JavaScript modules, the `SharedWorker()` constructor expected only a URL and an optional `name` argument. This will continue to work for classic shared worker usage; however creating module shared workers requires using the new `options` argument. The [available options](https://html.spec.whatwg.org/multipage/workers.html#shared-workers-and-the-sharedworker-interface) are the same as those for a dedicated worker, including the `name` option that supersedes the previous `name` argument.

## What about service worker? <a href="#what-about-service-worker" class="w-headline-link">#</a>

The service worker specification [has already been updated](https://w3c.github.io/ServiceWorker/#service-worker-concept) to support accepting a JavaScript module as the entry point, using the same `{type:"module"}` option as module workers, however this change has yet to be implemented in browsers. Once that happens, it will be possible to instantiate a service worker using a JavaScript module using the following code:

    navigator.serviceWorker.register('/sw.js', {
      type: 'module'
    });

Now that the specification has been updated, browsers are beginning to implement the new behavior. This takes time because there are some extra complications associated with bringing JavaScript modules to service worker. Service worker registration needs to [compare imported scripts with their previous cached versions](https://chromestatus.com/feature/6533131347689472) when determining whether to trigger an update, and this needs to be implemented for JavaScript modules when used for service workers. Also, service workers need to be able to [bypass the cache](https://chromestatus.com/feature/5897293530136576) for scripts in certain cases when checking for updates.

## Additional resources and further reading <a href="#additional-resources-and-further-reading" class="w-headline-link">#</a>

- [Feature status, browser consensus and standardization](https://www.chromestatus.com/feature/5761300827209728)
- [Original module workers spec addition](https://github.com/whatwg/html/pull/608)
- [JavaScript modules for shared workers](https://www.chromestatus.com/feature/5169440012369920)
- JavaScript modules for service workers: [Chrome implementation status](https://bugs.chromium.org/p/chromium/issues/detail?id=824647)

<a href="/tags/modules/" class="w-chip">Modules</a>

<span class="w-mr--sm"> Last updated: Dec 17, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/module-workers/index.md)

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
