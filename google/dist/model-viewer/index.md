<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/MY2KWQPCX2P9kDNLX69Q.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#the-andltmodel-viewerandgt-web-component" class="w-toc__header--link">The &lt;model-viewer&gt; web component</a>

- [What is a web component?](#what-is-a-web-component)
- [What can &lt;model-viewer&gt; do?](#what-can-lessmodel-viewergreater-do)
- [Basic 3D models](#basic-3d-models)
- [Adding motion and interactivity](#adding-motion-and-interactivity)
- [Delayed loading with poster images](#delayed-loading-with-poster-images)
- [Responsive design](#responsive-design)
- [Looking Forward](#looking-forward)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# The &lt;model-viewer&gt; web component

Adding 3D models to a website can be tricky; &lt;model-viewer&gt; is as easy as writing HTML.

Feb 6, 2019 <span class="w-author__separator">•</span> Updated Aug 21, 2020

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Adding 3D models to a website is tricky. 3D models ideally will be shown in a viewer that can work responsively on all browsers including smartphones, desktop, or even new head-mounted displays. The viewer should support progressive enhancement for performance and rendering quality. It should support use cases on all devices ranging from older, lower-powered smartphones to newer devices that support augmented reality. It should stay up to date with current technologies. It should be performant and accessible. However, building such a viewer requires specialty 3D programming skills, and can be a challenge for web developers that want to host their own models instead of using a third-party hosting service.

To help with that, the `<model-viewer>` web component, which just released [version 1.1](https://modelviewer.dev/), lets you declaratively add a 3D model to a web page, while hosting the model on your own site. The web component supports responsive design and use cases like augmented reality on some devices, and it includes features for accessibility, rendering quality, and interactivity. The goal of the component is to enable adding 3D models to your website without understanding the underlying technology and platforms.

We're always [updating and improving](https://github.com/google/model-viewer/releases) `<model-viewer>`. Check out the [`<model-viewer>` homepage](https://modelviewer.dev/) to explore what &lt;model-viewer&gt; 1.1 can do.

## What is a web component? <a href="#what-is-a-web-component" class="w-headline-link">#</a>

A web component is a custom HTML element built from standard web platform features. A web component behaves for all intents and purposes like a standard element. It has a unique tag, it can have properties and methods, and it can fire and respond to events. In short, you don't need to know anything special to use any web component, much less `<model-viewer>`.

In this article, I will show you things that are particular to `<model-viewer>`. If you're interested in learning more about web components, [webcomponents.org](https://www.webcomponents.org/) is a good place to start.

## What can &lt;model-viewer&gt; do? <a href="#what-can-lessmodel-viewergreater-do" class="w-headline-link">#</a>

I'll show you a few current capabilities of `<model-viewer>`. You'll get a great experience today, and `<model-viewer>` will get better over time as Google adds new features and improves rendering quality. The examples I'm provided are just to give you a sense of what it does. If you want to try them there are installation and usage instructions in [its GitHub repo](https://modelviewer.dev/).

### Basic 3D models <a href="#basic-3d-models" class="w-headline-link">#</a>

Embedding a 3D model is as simple as the markup below. By [using glb files](https://www.marxentlabs.com/glb-files/), we've ensured that this component will work on any major browser.

    <!-- Import the component -->
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
    <!-- Use it like any other HTML element -->
    <model-viewer id="mv-demo" shadow-intensity="1" src="./spacesuit.glb"
    alt="A 3D model of an astronaut" auto-rotate camera-controls
    poster="./spacesuit.jpg"></model-viewer>

That code renders like this:

### Adding motion and interactivity <a href="#adding-motion-and-interactivity" class="w-headline-link">#</a>

The `auto-rotate` and `camera-controls` attributes provide motion and user control. Those aren't the only possible attributes. See the documentation for [a complete list of attributes](https://modelviewer.dev/#section-attributes).

    <model-viewer src="assets/Astronaut.glb" auto-rotate camera-controls>

### Delayed loading with poster images <a href="#delayed-loading-with-poster-images" class="w-headline-link">#</a>

Some 3D models can be very large, so you might want to hold off loading them until the user has requested the model. For this, the component has a built-in means of delaying loading until the user wants it. That's what the `poster` attribute does.

    <model-viewer src="assets/Astronaut.glb" controls auto-rotate
    poster="./spacesuit.jpg">

To show your users that it's a 3D model, and not just an image, you can provide some preload animation by using script to switch between multiple posters.

    <model-viewer id="toggle-poster" src="assets/Astronaut.glb" controls
    auto-rotate poster="assets/poster2.png"></model-viewer>
    <script>
        const posters = ['poster.png', 'poster2.png'];
        let i = 0;
        setInterval(() =>
            document.querySelector('#toggle-poster').setAttribute('poster',
                `assets/${posters[i++ % 2]}`), 2000);
    </script>

### Responsive design <a href="#responsive-design" class="w-headline-link">#</a>

The component handles some types of [responsive design](/responsive-web-design-basics), scaling for both mobile and desktop. It can also manage multiple instances on a page and uses [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) to conserve battery power and GPU cycles when a model isn't visible.

## <figure><img src="https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format" alt="Multiple spacesuit images representing responsiveness." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8jXl21iFxh7O3QeEeL0k.png?auto=format&amp;w=1600 1600w" width="800" height="453" /><figcaption>Multiple spacesuit images representing responsiveness.</figcaption></figure>Looking Forward <a href="#looking-forward" class="w-headline-link">#</a>

[Install `<model-viewer>` and give it a try](https://modelviewer.dev/) The project team wants `<model-viewer>` to be useful to you, and wants your input on its future. That's not to say they don't have ideas. So give it a try and let us know what you think by [filing an issue in GitHub](https://github.com/google/model-viewer/issues).

<a href="/tags/3d/" class="w-chip">3D</a> <a href="/tags/augmented-reality/" class="w-chip">Augmented Reality</a> <a href="/tags/virtual-reality/" class="w-chip">Virtual Reality</a> <a href="/tags/webxr/" class="w-chip">WebXR</a>

<span class="w-mr--sm"> Last updated: Aug 21, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/model-viewer/index.md)

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
