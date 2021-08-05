<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format" alt="A 3D image of a shark." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/shbwwMBKANGHEy6TtBV7.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#introducing-andltmodel-viewerandgt-1.1" class="w-toc__header--link">Introducing &lt;model-viewer&gt; 1.1</a>

- [What's new since last year?](#what's-new-since-last-year)
- [Augmented reality](#augmented-reality)
- [Camera controls](#camera-controls)
- [Annotations](#annotations)
- [Editor](#editor)
- [Rendering and performance improvements](#rendering-and-performance-improvements)
- [Stability](#stability)
- [What's next?](#what's-next)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Introducing &lt;model-viewer&gt; 1.1

3D models for your web page as easily as writing HTML.

Sep 3, 2020 <span class="w-author__separator">•</span> Updated Sep 3, 2020

[<img src="https://web-dev.imgix.net/image/admin/2TCATL7dglEFzZZWnXo0.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rob Kochman" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/2TCATL7dglEFzZZWnXo0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/2TCATL7dglEFzZZWnXo0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/2TCATL7dglEFzZZWnXo0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/2TCATL7dglEFzZZWnXo0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/2TCATL7dglEFzZZWnXo0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rkochman/)

<a href="/authors/rkochman/" class="w-author__name-link">Rob Kochman</a>

- <a href="https://twitter.com/rkochman" class="w-author__link">Twitter</a>
- <a href="https://github.com/rkochman" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rkochman" class="w-author__link">Glitch</a>

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

3D models are more relevant than ever. Retailers bring in-store shopping experiences to customers' homes. Museums are making 3D models of their artifacts available to everyone on the web. Unfortunately, it can be difficult to add a 3D model to a website in a way that provides a great user experience without a deep knowledge of 3D technologies or resorting to hosting 3D content on a third-party site. The `<model-viewer>` web component, [introduced in early 2019](/model-viewer), seeks to make putting 3D models on the web as easy as writing a few lines of HTML. Since then, the team has been working to address feedback and requests from the community. The culmination of that work was `<model-viewer>` version 1.0, released earlier this year. We're now announcing the release of `<model-viewer>` 1.1. You can [read the release notes](https://github.com/google/model-viewer/releases/tag/v1.1.0) in GitHub.

## What's new since last year? <a href="#what&#39;s-new-since-last-year" class="w-headline-link">#</a>

Version 1.1 includes built-in support for augmented reality (AR) on the web, improvements to speed and fidelity, and other frequently-requested features.

### Augmented reality <a href="#augmented-reality" class="w-headline-link">#</a>

Viewing a 3D model on a blank canvas is great, but being able to view it in your space is even better. For an entirely-within-the-browser 3D and AR Chrome Android supports [augmented reality](https://modelviewer.dev/examples/augmented-reality.html) using WebXR .

A demonstration of the `<model-viewer>` AR capability.

When it's ready, you'll be able to use it by add an `ar` attribute to the `<model-viewer>` tag. Other attributes allow you to customize the WebXR AR experience, as shown in [the WebXR sample on modelviewer.dev](https://modelviewer.dev/examples/webxr.html). The code sample below shows what this might look like.

    <model-viewer src="Chair.glb"
      ar ar-scale="auto"
      camera-controls
      alt="A 3D model of an office chair.">
    </model-viewer>

It looks something like the embedded video shown under this heading.

### Camera controls <a href="#camera-controls" class="w-headline-link">#</a>

`<model-viewer>` now gives full control over the view's virtual camera (the perspective of the viewer). This includes the camera target, orbit (position relative to the model), and field of view. You can also enable auto-rotation and set limits on user interaction (e.g. maximum and minimum fields of view).

### Annotations <a href="#annotations" class="w-headline-link">#</a>

You can also annotate your models using HTML and CSS. This capability is often used to "attach" labels to parts of the model in a way that moves with the model as it's manipulated. The annotations are customizable, including their appearance and the extent to which they're hidden by the model. Annotations also work in AR.

    <style>
      button{
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        border: 3px solid blue;
        background-color: blue;
        box-sizing: border-box;
      }

      #annotation{
        background-color: #dddddd;
        position: absolute;
        transform: translate(10px, 10px);
        border-radius: 10px;
        padding: 10px;
      }
    </style>
    <model-viewer src="https://modelviewer.dev/assets/ShopifyModels/ToyTrain.glb" alt="A 3D model of a Toy Train" camera-controls>
      <button slot="hotspot-hand" data-position="-0.023 0.0594 0.0714" data-normal="-0.3792 0.0004 0.9253">
        <div id="annotation">Whistle</div>
      </button>
    </model-viewer>

<figure><img src="https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format" alt="A space suit with an annotation." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/CG1JQXZP9Gncr7qLz5JZ.png?auto=format&amp;w=1600 1600w" width="800" height="839" /><figcaption>A space suit with an annotation.</figcaption></figure>See the [annotations documentation page](https://modelviewer.dev/examples/annotations.html) for more information.

### Editor <a href="#editor" class="w-headline-link">#</a>

Version 1.1 introduces and hosts a `<model-viewer>` ["editing" tool](https://modelviewer.dev/editor/), which enables you to quickly preview your model, try out different `<model-viewer>` configurations (e.g. exposure and shadow softness), generate a poster image, and interactively get coordinates for annotations.

### Rendering and performance improvements <a href="#rendering-and-performance-improvements" class="w-headline-link">#</a>

Rendering fidelity is greatly improved, especially for high dynamic range (HDR) environments. `<model-viewer>` now also uses a direct render path when only one `<model-viewer>` element is in the viewport, which increases performance (especially on Firefox). Lastly, dynamically scaling the render resolution improved frame rate dramatically. The example below shows off some of these recent improvements.

    <model-viewer camera-controls
                  skybox-image="spruit_sunrise_1k_HDR.hdr"
                  alt="A 3D model of a well-worn  helmet"
                  src="DamagedHelmet.glb"></model-viewer>

<figure><img src="https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format" alt="A 3D model of a well-worn helmet." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ZAID4J5TsJTcJs3qPNTp.png?auto=format&amp;w=1600 1600w" width="800" height="809" /><figcaption>A 3D model of a well-worn helmet.</figcaption></figure>### Stability <a href="#stability" class="w-headline-link">#</a>

With `<model-viewer>` reaching its first major version, API stability is a priority, so breaking changes will be avoided until version 2.0 is released.

## What's next? <a href="#what&#39;s-next" class="w-headline-link">#</a>

`<model-viewer>` version 1.0 includes the most-requested capabilities, but the team is not done yet. More features will be added, as will improvements in performance, stability, documentation, and tooling. If you have suggestions, file an [issue in Github](https://github.com/google/model-viewer/issues); also, PRs are always welcome. You can stay connected by following [`<model-viewer>` on Twitter](https://twitter.com/modelviewer) and checking out the [community chat on Spectrum](https://spectrum.chat/model-viewer?tab=posts).

<a href="/tags/3d/" class="w-chip">3D</a> <a href="/tags/augmented-reality/" class="w-chip">Augmented Reality</a> <a href="/tags/virtual-reality/" class="w-chip">Virtual Reality</a> <a href="/tags/webxr/" class="w-chip">WebXR</a>

<span class="w-mr--sm"> Last updated: Sep 3, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/introducing-model-viewer/index.md)

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
