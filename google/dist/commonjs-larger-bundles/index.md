<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format" alt="How CommonJS is making your bundles larger" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/S5JWmwRRW3rEXKwJR0JA.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-commonjs-is-making-your-bundles-larger" class="w-toc__header--link">How CommonJS is making your bundles larger</a>

- [What's CommonJS?](#what's-commonjs)
- [How does CommonJS affect your final bundle size?](#how-does-commonjs-affect-your-final-bundle-size)
- [Why does CommonJS make your app larger?](#why-does-commonjs-make-your-app-larger)
- [Tree-shaking with CommonJS](#tree-shaking-with-commonjs)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How CommonJS is making your bundles larger

Learn how CommonJS modules are impacting the tree-shaking of your application

May 8, 2020 <span class="w-author__separator">•</span> Updated May 26, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/fast" class="w-post-signpost__link">Fast load times</a>

[<img src="https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Minko Gechev" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/OPpZ9x8KCVcxvqgdWXM5.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mgechev/)

<a href="/authors/mgechev/" class="w-author__name-link">Minko Gechev</a>

- <a href="https://twitter.com/mgechev" class="w-author__link">Twitter</a>
- <a href="https://github.com/mgechev" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@mgechev" class="w-author__link">Glitch</a>
- <a href="https://blog.mgechev.com/" class="w-author__link">Blog</a>

In this post, we'll look into what CommonJS is and why it's making your JavaScript bundles larger than necessary.

Summary: **To ensure the bundler can successfully optimize your application, avoid depending on CommonJS modules, and use ECMAScript module syntax in your entire application.**

## What's CommonJS? <a href="#what&#39;s-commonjs" class="w-headline-link">#</a>

CommonJS is a standard from 2009 that established conventions for JavaScript modules. It was initially intended for use outside of the web browser, primarily for server-side applications.

With CommonJS you can define modules, export functionality from them, and import them in other modules. For example, the snippet below defines a module which exports five functions: `add`, `subtract`, `multiply`, `divide`, and `max`:

    // utils.js
    const { maxBy } = require('lodash-es');
    const fns = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
      max: arr => maxBy(arr)
    };

    Object.keys(fns).forEach(fnName => module.exports[fnName] = fns[fnName]);

Later on, another module can import and use some or all of these functions:

    // index.js
    const { add } = require('./utils');
    console.log(add(1, 2));

Invoking `index.js` with `node` will output the number `3` in the console.

Because of the lack of a standardized module system in the browser in the early 2010s, CommonJS became a popular module format for JavaScript client-side libraries as well.

## How does CommonJS affect your final bundle size? <a href="#how-does-commonjs-affect-your-final-bundle-size" class="w-headline-link">#</a>

The size of your server-side JavaScript application is not as critical as in the browser, that's why CommonJS was not designed with reducing the production bundle size in mind. At the same time, [analysis](https://v8.dev/blog/cost-of-javascript-2019) shows that the JavaScript bundle size is still the number one reason for making browser apps slower.

JavaScript bundlers and minifiers, such as `webpack` and `terser`, perform different optimizations to reduce the size of your app. Analyzing your application at build time, they try to remove as much as possible from the source code you're not using.

For example, in the snippet above, your final bundle should only include the `add` function since this is the only symbol from `utils.js` that you import in `index.js`.

Let's build the app using the following `webpack` configuration:

    const path = require('path');
    module.exports = {
      entry: 'index.js',
      output: {
        filename: 'out.js',
        path: path.resolve(__dirname, 'dist'),
      },
      mode: 'production',
    };

Here we specify that we want to use production mode optimizations and use `index.js` as an entry point. After invoking `webpack`, if we explore the [output](https://github.com/mgechev/commonjs-example/blob/master/commonjs/dist/out.js) size, we'll see something like this:

    $ cd dist && ls -lah
    625K Apr 13 13:04 out.js

Notice that **the bundle is 625KB**. If we look into the output, we'll find all the functions from `utils.js` plus a lot of modules from [`lodash`](https://lodash.com/)**. Although we do not use `lodash` in `index.js` it's part of the output**, which adds a lot of extra weight to our production assets.

Now let us change the module format to [ECMAScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and try again. This time, `utils.js` would look like this:

    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;
    export const multiply = (a, b) => a * b;
    export const divide = (a, b) => a / b;

    import { maxBy } from 'lodash-es';

    export const max = arr => maxBy(arr);

And `index.js` would import from `utils.js` using ECMAScript module syntax:

    import { add } from './utils';

    console.log(add(1, 2));

Using the same `webpack` configuration, we can build our application and open the output file. **It is now 40 bytes** with the following [output](https://github.com/mgechev/commonjs-example/blob/master/esm/dist/out.js):

    (()=>{"use strict";console.log(1+2)})();

Notice that the final bundle does not contain any of the functions from `utils.js` that we don't use, and there's no trace from `lodash`! Even further, `terser` (the JavaScript minifier that `webpack` uses) inlined the `add` function in `console.log`.

A fair question you might ask is, **why does using CommonJS cause the output bundle to be almost 16,000 times bigger**? Of course, this is a toy example, in reality, the size difference might not be that large, but the chances are that CommonJS adds significant weight to your production build.

**CommonJS modules are harder to optimize in the general case because they are much more dynamic than ES modules. To ensure your bundler and minifier can successfully optimize your application, avoid depending on CommonJS modules, and use ECMAScript module syntax in your entire application.**

Notice that even if you're using ECMAScript modules in `index.js`, if the module you're consuming is a CommonJS module, your app's bundle size will suffer.

## Why does CommonJS make your app larger? <a href="#why-does-commonjs-make-your-app-larger" class="w-headline-link">#</a>

To answer this question, we'll look at the behavior of the `ModuleConcatenationPlugin` in `webpack` and, after that, discuss static analyzability. This plugin concatenates the scope of all your modules into one closure and allows for your code to have a faster execution time in the browser. Let's look at an example:

    // utils.js
    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;

    // index.js
    import { add } from './utils';
    const subtract = (a, b) => a - b;

    console.log(add(1, 2));

Above, we have an ECMAScript module, which we import in `index.js`. We also define a `subtract` function. We can build the project using the same `webpack` configuration as above, but this time, we'll disable minimization:

    const path = require('path');

    module.exports = {
      entry: 'index.js',
      output: {
        filename: 'out.js',
        path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
        minimize: false
      },
      mode: 'production',
    };

Let us look at the produced output:

    /******/ (() => { // webpackBootstrap
    /******/    "use strict";

    // CONCATENATED MODULE: ./utils.js**
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    // CONCATENATED MODULE: ./index.js**
    const index_subtract = (a, b) => a - b;**
    console.log(add(1, 2));**

    /******/ })();

In the output above, all the functions are inside the same namespace. To prevent collisions, webpack renamed the `subtract` function in `index.js` to `index_subtract`.

If a minifier processes the source code above, it will:

- Remove the unused functions `subtract` and `index_subtract`
- Remove all the comments and redundant whitespace
- Inline the body of the `add` function in the `console.log` call

Often developers refer to this **removal of unused imports as tree-shaking**. Tree-shaking was only possible because webpack was able to statically (at build time) understand which symbols we are importing from `utils.js` and what symbols it exports.

This behavior is enabled by default for **ES modules** because they **are more statically analyzable**, compared to CommonJS.

Let us look at the exact same example, but this time change `utils.js` to use CommonJS instead of ES modules:

    // utils.js
    const { maxBy } = require('lodash-es');

    const fns = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
      max: arr => maxBy(arr)
    };

    Object.keys(fns).forEach(fnName => module.exports[fnName] = fns[fnName]);

This small update will significantly change the output. Since it's too long to embed on this page, I've shared only a small portion of it:

    ...
    (() => {

    "use strict";
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
    const subtract = (a, b) => a - b;
    console.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .add */ .IH)(1, 2));

    })();

Notice that the final bundle contains some `webpack` "runtime": injected code that is responsible for importing/exporting functionality from the bundled modules. This time, instead of placing all the symbols from `utils.js` and `index.js` under the same namespace, we require dynamically, at runtime, the `add` function using `__webpack_require__`.

This is necessary because with CommonJS we can get the export name from an arbitrary expression. For example, the code below is an absolutely valid construct:

    module.exports[localStorage.getItem(Math.random())] = () => { … };

There's no way for the bundler to know at build-time what the name of the exported symbol is since this requires information that's only available at runtime, in the context of the user's browser.

**This way, the minifier is incapable of understanding what exactly `index.js` uses from its dependencies so it can't tree-shake it away.** We'll observe the exact same behavior for third-party modules as well. **If we import a CommonJS module from `node_modules`, your build toolchain will not be able to optimize it properly.**

## Tree-shaking with CommonJS <a href="#tree-shaking-with-commonjs" class="w-headline-link">#</a>

It's much harder to analyze CommonJS modules since they are dynamic by definition. For example, the import location in ES modules is always a string literal, compared to CommonJS, where it is an expression.

In some cases, if the library you're using follows specific conventions on how it uses CommonJS, it's possible to remove unused exports at build time using a third-party `webpack` [plugin](https://github.com/indutny/webpack-common-shake). Although this plugin adds support for tree-shaking, it does not cover all the different ways your dependencies could use CommonJS. This means that you're not getting the same guarantees as with ES modules. Additionally, it adds an extra cost as part of your build process on top of the default `webpack` behavior.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

**To ensure the bundler can successfully optimize your application, avoid depending on CommonJS modules, and use ECMAScript module syntax in your entire application.**

Here are a few actionable tips to verify you're on the optimal path:

- Use Rollup.js's [node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) plugin and set the `modulesOnly` flag to specify that you want to depend only on ECMAScript modules.
- Use the package [`is-esm`](https://github.com/mgechev/is-esm) to verify that an npm package uses ECMAScript modules.
- If you're using Angular, by default you'll get a warning if you depend on non-tree-shakeable modules.

<a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/modules/" class="w-chip">Modules</a>

<span class="w-mr--sm"> Last updated: May 26, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/commonjs-larger-bundles/index.md)

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
