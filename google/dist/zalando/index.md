<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format" alt="Zalando web store on laptop, phone, and tablet." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D3aV6VLiccC31BJIwo3z.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-zalando-reduced-performance-feedback-time-from-1-day-to-15-minutes-with-lighthouse-ci" class="w-toc__header--link">How Zalando reduced performance feedback time from 1 day to 15 minutes with Lighthouse CI</a>

- [Company buy-in does not always translate to performance](#company-buy-in-does-not-always-translate-to-performance)
- [The web at Zalando](#the-web-at-zalando)
- [Web Vitals and Lighthouse to the rescue](#web-vitals-and-lighthouse-to-the-rescue)
- [Giving performance feedback to developers on pull requests](#giving-performance-feedback-to-developers-on-pull-requests)
- [Extending the performance coverage](#extending-the-performance-coverage)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How Zalando reduced performance feedback time from 1 day to 15 minutes with Lighthouse CI

The web team at Zalando found that integrating Lighthouse CI enabled a proactive approach to performance, with automated status checks able to compare the current commit to the main branch to prevent performance regressions.

Apr 13, 2021

[<img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/IycLA5UeiU6yGAlwrkQ0.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeremy Colin" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/IycLA5UeiU6yGAlwrkQ0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/IycLA5UeiU6yGAlwrkQ0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/IycLA5UeiU6yGAlwrkQ0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/IycLA5UeiU6yGAlwrkQ0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/IycLA5UeiU6yGAlwrkQ0.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jcolin/)

<a href="/authors/jcolin/" class="w-author__name-link">Jeremy Colin</a>

- <a href="https://twitter.com/jee_colin" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeremycolin" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/OKm64vE60MFeWq62TFBh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jan Brockmeyer" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/OKm64vE60MFeWq62TFBh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/OKm64vE60MFeWq62TFBh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/OKm64vE60MFeWq62TFBh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/OKm64vE60MFeWq62TFBh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/OKm64vE60MFeWq62TFBh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jbrockmeyer/)

<a href="/authors/jbrockmeyer/" class="w-author__name-link">Jan Brockmeyer</a>

- <a href="https://twitter.com/jan_brockmeyer" class="w-author__link">Twitter</a>
- <a href="https://github.com/jabro86" class="w-author__link">GitHub</a>

This case study was authored by Jeremy Colin and Jan Brockmeyer from the Zalando web infrastructure team.

With more than 35 million active customers, [Zalando](https://www.zalando.com) is Europe's leading online fashion platform. In this post we explain why we started to use Lighthouse CI, the ease of implementation, and the advantages to our team.

At Zalando, we know the relationship between website performance and revenue. In the past, [we tested how artificially increasing the loading time on Catalog pages](https://engineering.zalando.com/posts/2018/06/loading-time-matters.html) affected bounce rates, conversion rates, and revenue per user. The results were clear. A 100 milliseconds page load time improvement led to increased engagement with lower bounce rate and a 0.7% uplift in revenue per session.

100<sub>ms</sub>

Page load time improvement

0.7<sub>%</sub>

Increased revenue per session

## Company buy-in does not always translate to performance <a href="#company-buy-in-does-not-always-translate-to-performance" class="w-headline-link">#</a>

Despite the strong performance buy-in inside the company, if performance is not set as a product delivery criteria it can easily slip away. When we were redesigning Zalando website in 2020 we focused on delivering [new features](https://corporate.zalando.com/en/newsroom/news-stories/zalando-sets-out-revolutionize-pre-owned-fashion-europe) while maintaining excellent user experience and applying a facelift to the website with custom fonts and more vibrant colors. However, when the redesigned website and app were ready for release, early adopter metrics revealed that the new version was slower. First Contentful Paint was up to 53% slower, and our measured Time to Interactive reported up to 59% slower.

## The web at Zalando <a href="#the-web-at-zalando" class="w-headline-link">#</a>

The Zalando website is created by a core team developing a framework, [with over 15 feature teams contributing frontend microservices](https://engineering.zalando.com/posts/2021/03/micro-frontends-part1.html). While supporting the new release, we also transitioned part of our website to a more centralized architecture.

The previous architecture called [Mosaic](https://www.mosaic9.org/) included a way to measure page performance with in-house metrics. However, it was difficult to compare performance metrics prior to rolling out to real users as we lacked internal lab performance monitoring tools. Despite deploying every day, there was a feedback loop of around one day for developers working on performance improvements.

## Web Vitals and Lighthouse to the rescue <a href="#web-vitals-and-lighthouse-to-the-rescue" class="w-headline-link">#</a>

We were not entirely satisfied with our in-house metrics as they did not adapt well to our new setup. More importantly, they were not centered on customer experience. We switched to [Core Web Vitals](/vitals/) as they provided a condensed, yet comprehensive and user-centric set of metrics.

In order to improve the performance before the release, we needed to create a proper [lab environment](/how-to-measure-speed/#lab-data-vs-field-data). This provided reproducible measurements, in addition to testing conditions representing our 90th percentile of field data. Now, engineers working on performance improvements knew where to focus their efforts to make the biggest impact. We were already using Lighthouse audit reports locally. So our first iteration was to develop a service based on [Lighthouse node module](https://github.com/GoogleChrome/lighthouse#using-the-node-module), where changes could be tested from our staging environment. This gave us a reliable performance feedback loop of around one hour, which enabled us to bring the performance on par and save our release!

## Giving performance feedback to developers on pull requests <a href="#giving-performance-feedback-to-developers-on-pull-requests" class="w-headline-link">#</a>

We did not want to stop there, as we wanted to take the opportunity to not only be reactive towards performance but also proactive. Making the jump from Lighthouse node module to [Lighthouse CI (LHCI) server](/lighthouse-ci/) was not too difficult. We opted for the self hosted solution in order to give us a a better integration with our existing company services. Our LHCI server application gets built as a Docker image, which is then deployed to our Kubernetes cluster together with a PostgreSQL database, and reports to our GitHub.

Our framework was already providing some performance feedback to developers— component bundle sizes were being compared to threshold values on every commit. Now we are able to report Lighthouse metrics as GitHub status checks. These cause the CI pipeline to fail if they do not meet the performance thresholds, with a link to the detailed Lighthouse reports as shown in the following images.

## <figure><img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format" alt="Lighthouse CI GitHub status checks make it easy for developers to understand the regression and address it before it reaches production." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/vPqK9LEp3dKrHSSqULRe.png?auto=format&amp;w=1600 1600w" width="800" height="126" /><figcaption>Lighthouse CI GitHub status checks make it easy for developers to understand the regression and address it before it reaches production.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format" alt="Lighthouse CI detailed commit report compared to the main branch." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/PRQBzVBLG7wG1Ftngp6B.png?auto=format&amp;w=1600 1600w" width="800" height="370" /><figcaption>Lighthouse CI detailed commit report compared to the main branch.</figcaption></figure>Extending the performance coverage <a href="#extending-the-performance-coverage" class="w-headline-link">#</a>

We started with a very pragmatic approach. Currently Lighthouse only runs on two of our most important pages: the home page and product detail page. Fortunately, Lighthouse CI makes it easy to extend the run configurations. Feature teams working on specific pages of our website are able to set up their matching URL pattern and assertions. With this in place, we are pretty confident that our performance coverage will increase.

We are now much more confident when building larger releases, and developers can enjoy a much shorter feedback loop on the performance of their code.

<a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/case-study/" class="w-chip">Case Study</a>

<span class="w-mr--sm"> Last updated: Apr 13, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/zalando/index.md)

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
