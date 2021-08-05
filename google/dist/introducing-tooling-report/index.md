<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format" alt="A grid of cards showing test names and test results from across tooling.report." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/y3f0yAb97pLOpTQrhUNA.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#choose-the-best-build-tool-for-your-project-with-tooling.report" class="w-toc__header--link">Choose the best build tool for your project with tooling.report</a>

- [Build tools often get in our way](#build-tools-often-get-in-our-way)
- [Our approach](#our-approach)
- [We only use ${tool_name}, should I still care?](#we-only-use-dollartool_name-should-i-still-care)
- [Can I contribute to the site?](#can-i-contribute-to-the-site)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Choose the best build tool for your project with tooling.report

Select and configure build tools based on best practices.

Jun 29, 2020 <span class="w-author__separator">•</span> Updated Aug 20, 2020

Today web.dev is launching a new initiative called [tooling.report](https://tooling.report). It's a website that gives web developers an overview of the features supported across a selection of popular build tools. We built this site to help you choose the right build tool for your next project, decide if migrating from one tool to another is worth it, or figure out how to incorporate best practices into your tooling configuration and code base. Tools have different focus areas and cater to a different set of needs, which means selecting and configuring tools involves making tradeoffs. With tooling.report, we aim to explain these tradeoffs and document how to follow best practices with any given build tool.

Sounds exciting? Visit tooling.report to start exploring, or read on to learn more about why and how we developed this site.

## Build tools often get in our way <a href="#build-tools-often-get-in-our-way" class="w-headline-link">#</a>

Over at [GoogleChromeLabs](https://github.com/GoogleChromeLabs), we've built web apps like [Squoosh](https://squoosh.app/) and [Proxx](https://proxx.app/), as well as websites like the one for [Chrome Dev Summit 2019](https://developer.chrome.com/devsummit/). As with any web development project, we generally start by discussing project infrastructure like the hosting environment, frameworks, and our build tool setup. That infrastructure is updated as the project progresses: new plugins are added in order to accommodate frameworks or techniques we adopt, or the way we write code is changed so that our build tools better understand what we are trying to achieve. Throughout this process, we have often found that the tools we select end up getting in our way.

Our team is focused on providing the best web experience to users, which often results in fine-tuning how our frontend assets are assembled and delivered. For example, if a main thread script and web worker script have shared dependencies, we would like to download the dependencies once instead of bundling it twice for each script. Some tools support this out of the box, some need significant customization effort to change default behaviors, and for others it's outright impossible.

This experience led us to investigate what different build tools can and cannot do. Our hope was to create a checklist for features so that next time we start a new project, we can evaluate and choose which tool is best suited for our project.

## Our approach <a href="#our-approach" class="w-headline-link">#</a>

How can we evaluate and compare different build tools in one place? We approached it by writing test cases.

Our team discussed and designed test criteria that we believe represent best practices for web development. We specifically focused on how to deliver fast, responsive, and smooth user experiences, intentionally excluding tests related to developer experience in order to avoid measuring two incomparable outcomes.

Once the test list was created, we went ahead and wrote a build script for each tool to check if the tool can fulfil the test's success criteria. As an initial set, we decided to investigate webpack v4, Rollup v2, and Parcel v2. We also tested Browserify + Gulp since a large number of projects still use this setup. For a test to pass, only publicly documented features of the tool or a plugin for the tool can be used. After the initial set of tests were written, we worked with the build tool authors to make sure we used their tools correctly and represented them fairly.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0OauqO2tSeOTDpDGutmk.jpg?auto=format&amp;w=1600 1600w" width="800" height="394" /></figure>We only use ${tool_name}, should I still care? <a href="#we-only-use-dollartool_name-should-i-still-care" class="w-headline-link">#</a>

In many teams, there are people dedicated to maintaining the build infrastructure, and other members of the team might never get to make a choice when it comes to build tools. We hope this site is still useful for you too, as a way to set expectations for the tools you rely on. For each test, we've included an explanation of why the test is important along with additional resources. And if you want to adopt a best practice with the tool of your choice, the test setup in our repository contains the configuration files necessary to do so.

## Can I contribute to the site? <a href="#can-i-contribute-to-the-site" class="w-headline-link">#</a>

If you think a certain feature should be tested that is currently missing, please [propose it in a GitHub issue](https://github.com/GoogleChromeLabs/tooling.report/issues/new) to start the discussion. We aim to encapsulate real-world use cases, and any additional tests that better assess these outcomes are welcome.

If you want to write tests for tools we did not include in the initial set, we welcome that too! Please see [CONTRIBUTING.md](https://github.com/GoogleChromeLabs/tooling.report/blob/dev/CONTRIBUTING.md) for more information.

<a href="/tags/tools/" class="w-chip">Tools</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/html/" class="w-chip">HTML</a>

<span class="w-mr--sm"> Last updated: Aug 20, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/introducing-tooling-report/index.md)

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
