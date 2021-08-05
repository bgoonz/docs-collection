<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#async-functions:-making-promises-friendly" class="w-toc__header--link">Async functions: making promises friendly</a>

- [Example: logging a fetch](#example:-logging-a-fetch)
- [Async return values](#async-return-values)
- [Example: streaming a response](#example:-streaming-a-response)
- [Other async function syntax](#other-async-function-syntax)
- [Arrow functions](#arrow-functions)
- [Object methods](#object-methods)
- [Class methods](#class-methods)
- [Careful! Avoid going too sequential](#careful!-avoid-going-too-sequential)
- [Example: outputting fetches in order](#example:-outputting-fetches-in-order)
- [Browser support and workarounds](#browser-support-and-workarounds)
- [Workaround: generators](#workaround:-generators)
- [Workaround: regenerator](#workaround:-regenerator)
- [Async all the things!](#async-all-the-things!)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

# Async functions: making promises friendly

Async functions allow you to write promise-based code as if it were synchronous.

Oct 20, 2016 <span class="w-author__separator">•</span> Updated Feb 22, 2021

[<img src="https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jake Archibald" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jakearchibald/)

<a href="/authors/jakearchibald/" class="w-author__name-link">Jake Archibald</a>

- <a href="https://twitter.com/jaffathecake" class="w-author__link">Twitter</a>
- <a href="https://jakearchibald.com/" class="w-author__link">Blog</a>

Async functions are enabled by default in Chrome, Edge, Firefox, and Safari, and they're quite frankly marvelous. They allow you to write promise-based code as if it were synchronous, but without blocking the main thread. They make your asynchronous code less "clever" and more readable.

Async functions work like this:

    async function myFirstAsyncFunction() {
      try {
        const fulfilledValue = await promise;
      }
      catch (rejectedValue) {
        // …
      }
    }

If you use the `async` keyword before a function definition, you can then use `await` within the function. When you `await` a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.

If you're unfamiliar with promises, check out [our promises guide](/promises).

## Example: logging a fetch <a href="#example:-logging-a-fetch" class="w-headline-link">#</a>

Say you want to fetch a URL and log the response as text. Here's how it looks using promises:

    function logFetch(url) {
      return fetch(url)
        .then(response => response.text())
        .then(text => {
          console.log(text);
        }).catch(err => {
          console.error('fetch failed', err);
        });
    }

And here's the same thing using async functions:

    async function logFetch(url) {
      try {
        const response = await fetch(url);
        console.log(await response.text());
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    }

It's the same number of lines, but all the callbacks are gone. This makes it way easier to read, especially for those less familiar with promises.

Anything you `await` is passed through `Promise.resolve()`, so you can safely `await` non-platform promises, such as those created by promise polyfills.

## Async return values <a href="#async-return-values" class="w-headline-link">#</a>

Async functions _always_ return a promise, whether you use `await` or not. That promise resolves with whatever the async function returns, or rejects with whatever the async function throws. So with:

    // wait ms milliseconds
    function wait(ms) {
      return new Promise(r => setTimeout(r, ms));
    }

    async function hello() {
      await wait(500);
      return 'world';
    }

…calling `hello()` returns a promise that _fulfills_ with `"world"`.

    async function foo() {
      await wait(500);
      throw Error('bar');
    }

…calling `foo()` returns a promise that _rejects_ with `Error('bar')`.

## Example: streaming a response <a href="#example:-streaming-a-response" class="w-headline-link">#</a>

The benefit of async functions increases in more complex examples. Say you wanted to stream a response while logging out the chunks, and return the final size.

The phrase "logging out the chunks" made me sick in my mouth.

Here it is with promises:

    function getResponseSize(url) {
      return fetch(url).then(response => {
        const reader = response.body.getReader();
        let total = 0;

        return reader.read().then(function processResult(result) {
          if (result.done) return total;

          const value = result.value;
          total += value.length;
          console.log('Received chunk', value);

          return reader.read().then(processResult);
        })
      });
    }

Check me out, Jake "wielder of promises" Archibald. See how I'm calling `processResult()` inside itself to set up an asynchronous loop? Writing that made me feel _very smart_. But like most "smart" code, you have to stare at it for ages to figure out what it's doing, like one of those magic-eye pictures from the 90's.

Let's try that again with async functions:

    async function getResponseSize(url) {
      const response = await fetch(url);
      const reader = response.body.getReader();
      let result = await reader.read();
      let total = 0;

      while (!result.done) {
        const value = result.value;
        total += value.length;
        console.log('Received chunk', value);
        // get the next result
        result = await reader.read();
      }

      return total;
    }

All the "smart" is gone. The asynchronous loop that made me feel so smug is replaced with a trusty, boring, while-loop. Much better. In future, you'll get [async iterators](https://github.com/tc39/proposal-async-iteration), which would [replace the `while` loop with a for-of loop](https://gist.github.com/jakearchibald/0b37865637daf884943cf88c2cba1376), making it even neater.

I'm sort-of in love with streams. If you're unfamiliar with streaming, [check out my guide](https://jakearchibald.com/2016/streams-ftw/#streams-the-fetch-api).

## Other async function syntax <a href="#other-async-function-syntax" class="w-headline-link">#</a>

I've shown you `async function() {}` already, but the `async` keyword can be used with other function syntax:

### Arrow functions <a href="#arrow-functions" class="w-headline-link">#</a>

    // map some URLs to json-promises
    const jsonPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.json();
    });

The `array.map(func)` doesn't care that I gave it an async function. It just sees it as a function that returns a promise. It won't wait for the first function to complete before calling the second.

### Object methods <a href="#object-methods" class="w-headline-link">#</a>

    const storage = {
      async getAvatar(name) {
        const cache = await caches.open('avatars');
        return cache.match(`/avatars/${name}.jpg`);
      }
    };

    storage.getAvatar('jaffathecake').then(…);

### Class methods <a href="#class-methods" class="w-headline-link">#</a>

    class Storage {
      constructor() {
        this.cachePromise = caches.open('avatars');
      }

      async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
      }
    }

    const storage = new Storage();
    storage.getAvatar('jaffathecake').then(…);

Class constructors and getters/setters cannot be async.

## Careful! Avoid going too sequential <a href="#careful!-avoid-going-too-sequential" class="w-headline-link">#</a>

Although you're writing code that looks synchronous, ensure you don't miss the opportunity to do things in parallel.

    async function series() {
      await wait(500); // Wait 500ms…
      await wait(500); // …then wait another 500ms.
      return "done!";
    }

The above takes 1000ms to complete, whereas:

    async function parallel() {
      const wait1 = wait(500); // Start a 500ms timer asynchronously…
      const wait2 = wait(500); // …meaning this timer happens in parallel.
      await wait1; // Wait 500ms for the first timer…
      await wait2; // …by which time this timer has already finished.
      return "done!";
    }

The above takes 500ms to complete, because both waits happen at the same time. Let's look at a practical example.

### Example: outputting fetches in order <a href="#example:-outputting-fetches-in-order" class="w-headline-link">#</a>

Say you wanted to fetch a series of URLs and log them as soon as possible, in the correct order.

_Deep breath_ - here's how that looks with promises:

    function logInOrder(urls) {
      // fetch all the URLs
      const textPromises = urls.map(url => {
        return fetch(url).then(response => response.text());
      });

      // log them in order
      textPromises.reduce((chain, textPromise) => {
        return chain.then(() => textPromise)
          .then(text => console.log(text));
      }, Promise.resolve());
    }

Yeah, that's right, I'm using `reduce` to chain a sequence of promises. I'm _so smart_. But this is a bit of _so smart_ coding you're better off without.

However, when converting the above to an async function, it's tempting to go _too sequential_:

Not recommended - too sequential

    async function logInOrder(urls) {
      for (const url of urls) {
        const response = await fetch(url);
        console.log(await response.text());
      }
    }

Looks much neater, but my second fetch doesn't begin until my first fetch has been fully read, and so on. This is much slower than the promises example that performs the fetches in parallel. Thankfully there's an ideal middle-ground.

Recomm ended - nice and parallel

    async function logInOrder(urls) {
      // fetch all the URLs in parallel
      const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
      });

      // log them in sequence
      for (const textPromise of textPromises) {
        console.log(await textPromise);
      }
    }

In this example, the URLs are fetched and read in parallel, but the "smart" `reduce` bit is replaced with a standard, boring, readable for-loop.

## Browser support and workarounds <a href="#browser-support-and-workarounds" class="w-headline-link">#</a>

Async functions are enabled by default in most major browsers. If your site still needs to support older browsers without async, here are a few workarounds.

### Workaround: generators <a href="#workaround:-generators" class="w-headline-link">#</a>

If you're targeting browsers that support generators (which includes [the latest version of every major browser](http://kangax.github.io/compat-table/es6/#test-generators) ) you can sort-of polyfill async functions.

[Babel](https://babeljs.io/) will do this for you, [here's an example via the Babel REPL](https://goo.gl/0Cg1Sq)

- note how similar the transpiled code is. This transformation is part of [Babel's es2017 preset](http://babeljs.io/docs/plugins/preset-es2017/).

Babel REPL is fun to say. Try it.

I recommend the transpiling approach, because you can just turn it off once your target browsers support async functions, but if you _really_ don't want to use a transpiler, you can take [Babel's polyfill](https://gist.github.com/jakearchibald/edbc78f73f7df4f7f3182b3c7e522d25) and use it yourself. Instead of:

    async function slowEcho(val) {
      await wait(1000);
      return val;
    }

…you'd include [the polyfill](https://gist.github.com/jakearchibald/edbc78f73f7df4f7f3182b3c7e522d25) and write:

    const slowEcho = createAsyncFunction(function*(val) {
      yield wait(1000);
      return val;
    });

Note that you have to pass a generator (`function*`) to `createAsyncFunction`, and use `yield` instead of `await`. Other than that it works the same.

### Workaround: regenerator <a href="#workaround:-regenerator" class="w-headline-link">#</a>

If you're targeting older browsers, Babel can also transpile generators, allowing you to use async functions all the way down to IE8. To do this you need [Babel's es2017 preset](http://babeljs.io/docs/plugins/preset-es2017/) _and_ the [es2015 preset](http://babeljs.io/docs/plugins/preset-es2015/).

The [output is not as pretty](https://goo.gl/jlXboV), so watch out for code-bloat.

## Async all the things! <a href="#async-all-the-things!" class="w-headline-link">#</a>

Once async functions land across all browsers, use them on every promise-returning function! Not only do they make your code tidier, but it makes sure that function will _always_ return a promise.

I got really excited about async functions [back in 2014](https://jakearchibald.com/2014/es7-async-functions/), and it's great to see them land, for real, in browsers. Whoop!

<a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: Feb 22, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/async-functions/index.md)

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
