<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format" alt="A sparkler." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/qphHgunn2LamPL1qODh5.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#cross-browser-paint-worklets-and-houdini.how" class="w-toc__header--link">Cross-browser paint worklets and Houdini.how</a>

- [Understanding Houdini worklets](#understanding-houdini-worklets)
- [Implementing your own features with the CSS Painting API](#implementing-your-own-features-with-the-css-painting-api)
- [Houdini.how](#houdini.how)
- [Using Houdini](#using-houdini)
- [1. Prototyping with a CDN](#1.-prototyping-with-a-cdn)
- [2. Managing worklets via NPM](#2.-managing-worklets-via-npm)
- [Contribute](#contribute)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Cross-browser paint worklets and Houdini.how

Supercharging your CSS with Houdini paint worklets is just a few clicks away.

Dec 10, 2020

[<img src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Una Kravets" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/una/)

<a href="/authors/una/" class="w-author__name-link">Una Kravets</a>

- <a href="https://twitter.com/una" class="w-author__link">Twitter</a>
- <a href="https://github.com/una" class="w-author__link">GitHub</a>
- <a href="https://una.im/" class="w-author__link">Blog</a>

CSS [Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini) is an umbrella term that describes a series of low-level browser APIs that give developers much more control and power over the styles they write.

<figure><img src="https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KgTxiRodgp6kFwHGHvqA.jpg?auto=format&amp;w=1600 1600w" width="800" height="599" /></figure>Houdini enables more semantic CSS with the [Typed Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API/Guide). Developers can define advanced CSS custom properties with syntax, default values, and inheritance through the [Properties and Values API](/at-property/).

It also introduces paint, layout, and animation [worklets](https://developers.google.com/web/updates/2018/10/animation-worklet), which open up a world of possibilities, by making it easier for authors to hook into the styling and layout process of the browser's rendering engine.

## Understanding Houdini worklets <a href="#understanding-houdini-worklets" class="w-headline-link">#</a>

Houdini worklets are browser instructions that run off the main thread and can be called when needed. Worklets enable you to write modular CSS to accomplish specific tasks, and require a single line of JavaScript to import and register. Much like service workers for CSS style, Houdini worklets are registered to your application, and once registered can be used in your CSS by name.

Write worklet file Register worklet module (`CSS.paintWorklet.addModule(workletURL)`) Use worklet (`background: paint(confetti)`)

## Implementing your own features with the CSS Painting API <a href="#implementing-your-own-features-with-the-css-painting-api" class="w-headline-link">#</a>

The [CSS Painting API](https://drafts.css-houdini.org/css-paint-api/) is an example of such a worklet (the Paint worklet), and enables developers to define canvas-like custom painting functions that can be used directly in CSS as backgrounds, borders, masks, and more. There is a whole world of possibilities for how you can use CSS Paint in your own user interfaces.

For example, instead of waiting for a browser to implement an angled borders feature, you can write your own Paint worklet, or use an existing published worklet. Then, rather than using border-radius apply this worklet to borders and clipping.

The example above uses the same paint worklet with different arguments (see code below) to accomplish this result. Demo on [Glitch](https://glitch.com/~angled-corners).

    .angled {
      --corner-radius: 15 0 0 0;
      --paint-color: #6200ee;
      --stroke-weight: 0;

      /* Mask every angled button with fill mode */
      -webkit-mask: paint(angled-corners, filled);
    }

    .outline {
      --stroke-weight: 1;

      /* Paint outline */
      border-image: paint(angled-corners, outlined) 0 fill !important;
    }

The CSS Painting API is currently one of the best-supported Houdini APIs, its spec being a W3C candidate recommendation. It is currently enabled in all Chromium-based browsers, partially supported in Safari, and is under consideration for Firefox.

<figure><img src="https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format" alt="The CSS Painting API is currently supported on Chromium-based browsers." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/vL8Z5YEwk2g2QJ6T6IWp.png?auto=format&amp;w=1600 1600w" width="800" height="176" /><figcaption>The CSS Painting API is currently supported on Chromium-based browsers.</figcaption></figure>But even without full browser support, you can still get creative with the Houdini Paint API and see your styles work across all modern browsers with the [CSS Paint Polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill). And to showcase a few unique implementations, as well as to provide a resource and worklet library, my team built [houdini.how](https://houdini.how).

## Houdini.how <a href="#houdini.how" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format" alt="Screenshot from the Houdini.how homepage." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UKenhKMvDWI9PvWGcTG4.png?auto=format&amp;w=1600 1600w" width="800" height="833" /><figcaption>Screenshot from the <a href="https://houdini.how">Houdini.how</a> homepage.</figcaption></figure>[Houdini.how](https://houdini.how) is a library and reference for Houdini worklets and resources. It provides everything you need to know about CSS Houdini: browser support, an [overview](https://houdini.how/about) of its various APIs, [usage](https://houdini.how/usage) information, additional [resources](https://houdini.how/resources), and live paint worklet [samples](https://houdini.how/). Each sample on Houdini.how is backed by the CSS Paint API, meaning they each work on all modern browsers. Give it a whirl!

## Using Houdini <a href="#using-houdini" class="w-headline-link">#</a>

Houdini worklets must either be run via a server locally, or on HTTPS in production. In order to work with a Houdini worklet, you will need to either install it locally or use a content delivery network (CDN) like [unpkg](https://unpkg.com) to serve the files. You will then need to register the worklet locally.

There are a few ways to include the Houdini.how showcase worklets in your own web projects. They can either be used via a CDN in a prototyping capacity, or you can manage the worklets on your own using npm modules. Either way, you'll want to also include the CSS Paint Polyfill to ensure they are cross-browser compatible.

### 1. Prototyping with a CDN <a href="#1.-prototyping-with-a-cdn" class="w-headline-link">#</a>

When registering from unpkg, you can link directly to the worklet.js file without needing to locally install the worklet. Unpkg will resolve to the worklet.js as the main script, or you can specify it yourself. Unpkg will not cause CORS issues, as it is served over HTTPS.

    CSS.paintWorklet.addModule("https://unpkg.com/<package-name>");

Note that this does not register the custom properties for syntax and fallback values. Instead, they each have fallback values embedded into the worklet.

To optionally register the custom properties, include the properties.js file as well.

    <script src="https://unpkg.com/<package-name>/properties.js"></script>

To include the CSS Paint Polyfill with unpkg:

    <script src="https://unpkg.com/css-paint-polyfill"></script>

### 2. Managing worklets via NPM <a href="#2.-managing-worklets-via-npm" class="w-headline-link">#</a>

Install your worklet from npm:

    npm install <package-name>
    npm install css-paint-polyfill

Importing this package does not automatically inject the paint worklet. To install the worklet, you'll need to generate a URL that resolves to the package's worklet.js, and register that. You do so with:

    CSS.paintWorklet.addModule(..file-path/worklet.js)

The npm package name and link can be found on each worklet card.

You will also need to include the CSS Paint Polyfill via script or import it directly, as you would with a framework or bundler.

Here is an example of how to use Houdini with the paint polyfill in modern bundlers:

    import 'css-paint-polyfill';
    import '<package-name>/properties.js'; // optionally register properties
    import workletURL from 'url:<package-name>/worklet.js';

    CSS.paintWorklet.addModule(workletURL);

For more specific instruction per-bundler, check out the [usage page](https://houdini.how/usage) on Houdini.how.

## Contribute <a href="#contribute" class="w-headline-link">#</a>

Now that you've played around with some Houdini samples, it's your turn to contribute your own! Houdini.how does not host any worklets itself, and instead showcases the work of the community. If you have a worklet or resource you would like to submit, check out the [github repo](https://github.com/GoogleChromeLabs/houdini.how/blob/main/CONTRIBUTING.md) with contribution guidelines. We'd love to see what you come up with!

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/houdini/" class="w-chip">Houdini</a>

<span class="w-mr--sm"> Last updated: Dec 10, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/houdini-how/index.md)

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
