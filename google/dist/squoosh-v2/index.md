<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format" alt="A screen capture of the new Squoosh homepage" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/T6HOx3Tl5ns0H9sTolsh.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#announcing-squoosh-v2" class="w-toc__header--link">Announcing Squoosh v2</a>

- [New codecs support](#new-codecs-support)
- [Launching a command line Squoosh!](#launching-a-command-line-squoosh!)
- [Build process change from Webpack to Rollup](#build-process-change-from-webpack-to-rollup)
- [Updated UI design](#updated-ui-design)
- [What's next ?](#what's-next)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Announcing Squoosh v2

New codecs support, updated design, and CLI support!

Dec 9, 2020

[<img src="https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Mariko Kosaka" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/TaVHIb4KixCUF6XheH7z.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kosamari/)

<a href="/authors/kosamari/" class="w-author__name-link">Mariko Kosaka</a>

- <a href="https://twitter.com/kosamari" class="w-author__link">Twitter</a>
- <a href="https://github.com/kosamari" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@kosamari" class="w-author__link">Glitch</a>
- <a href="https://kosamari.com/" class="w-author__link">Blog</a>

[Squoosh](https://squoosh.app) is an image compression app our team built and [debuted at Chrome Dev Summit 2018](https://youtu.be/ipNW6lJHVEs). We built it to make it easy to experiment with different image codecs, and to showcase the capabilities of the modern web.

Today, we are releasing a major update to the app with more codecs support, a new design, and a new way to use Squoosh on your command line called Squoosh CLI.

## New codecs support <a href="#new-codecs-support" class="w-headline-link">#</a>

We now support OxiPNG, MozJPEG, WebP, and AVIF, in addition to codecs natively supported in your browser. A new codec was made possible again with the use of WebAssembly. By compiling a codec encoder and decoder as WebAssembly module users can access and experiment with newer codecs even if their preferred browser does not support them.

## Launching a command line Squoosh! <a href="#launching-a-command-line-squoosh!" class="w-headline-link">#</a>

Ever since the original launch in 2018, common user request was to interact with Squoosh programmatically without UI. We felt a bit conflicted about this path since our app was a UI on top of command-line-based codec tools. However we do understand the desire to interact with the whole package of codecs instead of multiple tools. Squoosh CLI does just that.

You can install the beta version of the Squoosh CLI by running `npm -i @squoosh/cli` or run it directly using `npx @squoosh/cli [parameters]`.

The Squoosh CLI is written in Node and makes use of the exact same WebAssembly modules the PWA uses. Through extensive use of workers, all images are decoded, processed and encoded in parallel. We also use Rollup to bundle everything into one JavaScript file to make sure installation via `npx` is quick and seamless. The CLI also offers auto compression, where it tries to reduce the quality of an image as much as possible without degrading the visual fidelity (using the [Butteraugli metric](https://github.com/google/butteraugli)).

With the Squoosh CLI you can compress the images in your web app to multiple formats and use the [`<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) to let the browser choose the best version. We also plan to build plugins for Webpack, Rollup, and other build tools to make image compression an automatic part of your build process.

## Build process change from Webpack to Rollup <a href="#build-process-change-from-webpack-to-rollup" class="w-headline-link">#</a>

The same team that built Squoosh has spent a significant amount of time looking at build tooling this year for [Tooling Report](https://bundlers.tooling.report/), and decided to switch our build process from Webpack to Rollup.

The project was initially started with Webpack because we wanted to try it as a team, and at the time in 2018 Webpack was the only tool that gave us enough control to set up the project the way we wanted. Over time, we've found Rollup's easy plugin system and simplicity with ESM made it a natural choice for this project.

## Updated UI design <a href="#updated-ui-design" class="w-headline-link">#</a>

We've also updated the UI design of the app featuring `blobs` as a visual element. It is a little pun on how we treat data in our code. Squoosh passes image data around as a blob, so it felt natural to include some blobs in the design (get it?).

Color usage was honed in as well, so that color was more than an accent but additionally a vector to distinguish and reinforce which image is in context for the options. All in all, the homepage is a bit more vibrant and the tool itself is a bit more clear and concise.

## What's next ? <a href="#what&#39;s-next" class="w-headline-link">#</a>

We plan to keep working on Squoosh. As the new image format gets released, we want our users to have a place where they can play with the codec without heavy lifting. We also hope to expand use of Squoosh CLI and integrate more into the build process of a web application.

Squoosh has always been open source but we've never had focus on growing the community. In 2021, we plan to expand our contributor base and have a better onboarding process to the project.

Do you have any ideas for Squoosh? Please let us know on our [issue tracker](https://github.com/GoogleChromeLabs/squoosh/issues). The team is headed to extended winter vacation but we promise to get back to you in the new year.

<a href="/tags/tools/" class="w-chip">Tools</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/images/" class="w-chip">Images</a>

<span class="w-mr--sm"> Last updated: Dec 9, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/squoosh-v2/index.md)

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
