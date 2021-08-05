<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format" alt="A fast train (source: https://unsplash.com/photos/60VrGk-bfeA)" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HNGPDotyTYOuPE0YxLQ9.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-wix-improved-website-performance-by-evolving-their-infrastructure" class="w-toc__header--link">How Wix improved website performance by evolving their infrastructure</a>

- [Overview](#overview)
- [Speaking in a common language](#speaking-in-a-common-language)
- [Site complexity and performance scores](#site-complexity-and-performance-scores)
- [The journey](#the-journey)
- [In the beginning, there was HTML](#in-the-beginning-there-was-html)
- [Introducing caching in multiple locations](#introducing-caching-in-multiple-locations)
- [Browser caching (and preparations for CDNs)](<#browser-caching-(and-preparations-for-cdns)>)
- [DNS, SSL and HTTP/2](#dns-ssl-and-http2)
- [Brotli compression (vs. gzip)](<#brotli-compression-(vs.-gzip)>)
- [Content delivery networks (CDNs)](<#content-delivery-networks-(cdns)>)
- [Dynamic CDN selection](#dynamic-cdn-selection)
- [Coming soon… user domains served by CDNs](#coming-soon...-user-domains-served-by-cdns)
- [A few words on performance monitoring](#a-few-words-on-performance-monitoring)
- [Conclusion](#conclusion)
- [So, how does your recent Wix site performance look like?](#so-how-does-your-recent-wix-site-performance-look-like)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How Wix improved website performance by evolving their infrastructure

A case study of some major changes introduced at Wix to improve website loading performance for millions of sites, clearing the path for them to receive good PageSpeed Insights and Core Web Vitals scores.

Mar 10, 2021

[<img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9zVJ5KLkDStLNSz2ZxPE.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Alon Kochba" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9zVJ5KLkDStLNSz2ZxPE.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9zVJ5KLkDStLNSz2ZxPE.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9zVJ5KLkDStLNSz2ZxPE.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9zVJ5KLkDStLNSz2ZxPE.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9zVJ5KLkDStLNSz2ZxPE.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/alonko/)

<a href="/authors/alonko/" class="w-author__name-link">Alon Kochba</a>

- <a href="https://twitter.com/alonkochba" class="w-author__link">Twitter</a>
- <a href="https://github.com/alonkochba" class="w-author__link">GitHub</a>

Alon leads the core backend team at [Wix](https://www.wix.com).

Thanks to leveraging industry standards, cloud providers, and CDN capabilities, combined with a major rewrite of our website runtime, the percentage of Wix sites reaching good 75th percentile scores on all Core Web Vitals (CWV) metrics **more than tripled** year over year, according to data from [CrUX](https://developers.google.com/web/tools/chrome-user-experience-report) and [HTTPArchive](https://httparchive.org/faq#how-do-i-use-bigquery-to-write-custom-queries-over-the-data).

Wix adopted a performance-oriented culture, and further improvements will continue rolling out to users. As we focus on performance KPIs, we expect to see the number of sites passing CWV thresholds grow.

## Overview <a href="#overview" class="w-headline-link">#</a>

The world of performance is [beautifully complex](https://youtu.be/ctavZT87syI), with many variables and intricacies. Research shows that site [speed has a direct impact on conversion rates and revenues](/milliseconds-make-millions) for businesses. In recent years, the industry has put more emphasis on performance visibility and [making the web faster](/fast). Starting in May 2021, [page experience signals](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) will be included in Google Search ranking.

The unique challenge at Wix is supporting **millions** of sites, some of which were built _many years ago_ and have not been updated since. We have various [tools and articles](https://support.wix.com/en/performance-and-technical-issues/site-performance) to assist our users on what they can do to analyze and improve the performance of their sites.

Wix is a managed environment and not everything is in the hands of the user. Sharing common infrastructures presents many challenges for all these sites, but also opens opportunities for major enhancements across the board, i.e. leveraging the economies of scale.

_In this post I will focus on enhancements done around serving the initial HTML, which initiates the page loading process._

### Speaking in a common language <a href="#speaking-in-a-common-language" class="w-headline-link">#</a>

One of the core difficulties with performance is finding a common terminology to discuss different aspects of the user experience, while considering both the technical and perceived performance. Using a well-defined, common language within the organization enabled us to easily discuss and categorize the different technical parts and trade-offs, clarified our performance reports and tremendously helped to understand what aspects we should focus on improving first.

We adjusted all our monitoring and internal discussions to include industry standard metrics such as [Web Vitals](/vitals/), which include:

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format" alt="Core Web Vitals" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/PLF62sx8lHkpKbnvYKKR.jpg?auto=format&amp;w=1600 1600w" width="800" height="215" /><figcaption>Core Web Vitals</figcaption></figure>### Site complexity and performance scores <a href="#site-complexity-and-performance-scores" class="w-headline-link">#</a>

It's pretty easy to create a site that loads instantly so long as you [make it very simple](https://justinjackson.ca/words.html) using only HTML and serve it via a CDN.

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/xMUN9CUVvgnHofImPcV5.jpg?auto=format&amp;w=1600 1600w" width="800" height="647" /></figure>However, the reality is that sites are getting more and more complex and sophisticated, operating more like applications rather than documents, and supporting functionalities such as blogs, e-commerce solutions, custom code, etc.

Wix offers a very large [variety of templates](https://www.wix.com/website/templates), enabling its users to easily build a site with many business capabilities. Those additional features often come with _some_ performance costs.

## The journey <a href="#the-journey" class="w-headline-link">#</a>

### In the beginning, there was HTML <a href="#in-the-beginning-there-was-html" class="w-headline-link">#</a>

Every time a webpage is loaded, it always starts with an initial request to a URL in order to retrieve the HTML document. This HTML response triggers all the additional client requests and browser logic to run and render your site. This is the most important part of the page loading, because nothing happens until the beginning of the response arrives (known as TTFB - time to first byte).

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format" alt="WebPageTest First View" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/b1KKSlUQQTuNCDj4ndyJ.jpg?auto=format&amp;w=1600 1600w" width="800" height="411" /><figcaption>WebPageTest First View</figcaption></figure>#### The past: client-side rendering (CSR) <a href="#the-past:-client-side-rendering-(csr)" class="w-headline-link">#</a>

When operating large scale systems, you always have trade-offs you need to consider, such as performance, reliability and costs. Up to a few years ago, Wix used client-side rendering (CSR), in which the actual HTML content was generated via JavaScript on the client side (i.e. in the browser) allowing us to support a high scale of sites without having huge backend operational costs.

CSR enabled us to use a common HTML document, which was essentially empty. All it did was trigger the download of the required code and data which was then used to generate the full HTML on the client device.

#### Today: server-side rendering (SSR) <a href="#today:-server-side-rendering-(ssr)" class="w-headline-link">#</a>

A few years ago we transitioned to server-side rendering (SSR), as that was beneficial both to SEO and performance, improving initial page visibility times and ensuring better indexing for search engines that do not have full support for running JavaScript.

This approach improved the visibility experience, especially on slower devices/connections, and opened the door for further performance optimizations. However, it also meant that for each web page request, a unique HTML response was generated on the fly, which is **far** from optimal, especially for sites with a large amount of views.

### Introducing caching in multiple locations <a href="#introducing-caching-in-multiple-locations" class="w-headline-link">#</a>

The HTML for each site was mostly static, but it had a few caveats:

1.  It frequently changes. Each time a user edits their site, or makes changes in site data, such as on the website store inventory.
2.  It had certain data and cookies that were **visitor specific**, meaning two people visiting the same site would see somewhat different HTML. For example, to support products features such as remembering what items a visitor put in the cart, or the chat the visitor started with the business earlier, and more.
3.  Not all pages are cacheable. For example a page with custom user code on it, that displays the current time as part of the document, is not eligible for caching.

Initially, we took the relatively safe approach of caching the HTML <span style="text-decoration:underline;">without</span> visitor data, and then only modified specific parts of the HTML response on the fly for each visitor, for each cache hit.

#### In-house CDN solution <a href="#in-house-cdn-solution" class="w-headline-link">#</a>

We did this by deploying an in-house solution: Using [Varnish HTTP Cache](https://varnish-cache.org/) for proxying and caching, Kafka for invalidation messages, and a Scala/Netty-based service which proxies these HTML responses, but mutates the HTML and adds visitor-specific data and cookies to the cached response.

This solution enabled us to deploy these **slim** components in many more geographic locations and multiple cloud provider regions, which are spread across the world. In 2019, we introduced **over 15 new regions**, and gradually enabled caching for over 90% of our page views that were eligible for caching. Serving sites from additional locations reduced the [network latency](https://www.cloudping.co/grid) between the clients and the servers serving the HTML response, by bringing the content closer to the website's visitors.

We also started caching certain read-only API responses by using the same solution and invalidating the cache on any change to the site content. For example, the list of blog posts on the site is cached and invalidated when a post is published/modified.

#### Reducing complexities <a href="#reducing-complexities" class="w-headline-link">#</a>

Implementing caching improved performance substantially, mostly on the [TTFB](/time-to-first-byte/) and [FCP](/fcp/) phases, and improved our reliability by serving the content from a location closer to the end user.

However, the need to modify the HTML for each response introduced an unnecessary complexity that, if removed, presented an opportunity for further performance improvements.

### Browser caching (and preparations for CDNs) <a href="#browser-caching-(and-preparations-for-cdns)" class="w-headline-link">#</a>

~ 13<sub>%</sub>

HTML requests served directly from the browser cache, saving much bandwidth and reducing loading times for repeat views

The next step was to actually remove this visitor-specific data from the HTML <span style="text-decoration:underline;">entirely</span>, and retrieve it from a separate endpoint, called by the client for this purpose, after the HTML has arrived.

We carefully migrated this data and cookies to a new endpoint, which is called on each page load, but returns a slim JSON, which is required only for the [hydration process](https://reactjs.org/docs/react-dom.html#hydrate), to reach full page interactivity.

This allowed us to enable browser caching of the HTML, which means that browsers now save the HTML response for repeating visits, and only call the server to validate that the content hasn't changed. This is done using [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag), which is basically an identifier assigned to a specific version of an HTML resource. If the content is still the same, a [304 Not Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) response is sent by our servers to the client, without a body.

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format" alt="WebPageTest Repeat View" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hr1xnQccJEkHTBGxS5wF.jpg?auto=format&amp;w=1600 1600w" width="800" height="410" /><figcaption>WebPageTest Repeat View</figcaption></figure>In addition, this change means that our HTML is no longer visitor-specific and contains no cookies. In other words it can basically be cached anywhere, opening the door to using CDN providers that have much better geo presence in hundreds of locations around the world.

### DNS, SSL and HTTP/2 <a href="#dns-ssl-and-http2" class="w-headline-link">#</a>

With caching enabled, wait times were reduced and other important parts of the initial connection became more substantial. Enhancing our networking infrastructure and monitoring enabled us to improve our DNS, connection, and SSL times.

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Uuvh9xTItQ8wMA9s13RP.jpg?auto=format&amp;w=1600 1600w" width="800" height="441" /></figure>[HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) was enabled for all user domains, reducing both the amount of connections required and the overhead that comes with each new connection. This was a relatively easy change to deploy, while taking advantage of the [performance and resilience benefits](https://developers.google.com/web/fundamentals/performance/http2) that come with HTTP/2.

### Brotli compression (vs. gzip) <a href="#brotli-compression-(vs.-gzip)" class="w-headline-link">#</a>

21 - 25<sub>%</sub>

Reduction of median file transfer size

Traditionally, all our files were compressed using [gzip compression](https://en.wikipedia.org/wiki/Gzip), which is the most prevalent HTML compression option on the web. This compression protocol was initially implemented almost 30 years ago!

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format" alt="Brotli Compression Level Estimator" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/h7KzeAfg2THMdDGMYvlR.jpg?auto=format&amp;w=1600 1600w" width="800" height="805" /><figcaption><a href="https://tools.paulcalvano.com/compression.php">Brotli Compression Level Estimator</a></figcaption></figure>The newer [Brotli compression](https://en.wikipedia.org/wiki/Brotli) introduces compression improvements with almost no trade-offs, and is slowly becoming more popular, as described in the yearly Web Almanac [Compression chapter](https://almanac.httparchive.org/en/2020/compression#what-type-of-content-should-we-compress). It has been supported by [all the major browsers](https://caniuse.com/brotli) for a while.

We enabled Brotli support on our nginx proxies in the edges, for all clients that support it.

Moving to use Brotli compression reduced our median file transfer sizes by **21% to 25%** resulting in a reduced bandwidth usage and improved loading times.

## <figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format" alt="Median Response Sizes" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/392RWYamrwkdFozk91LC.jpg?auto=format&amp;w=1600 1600w" width="800" height="173" /><figcaption>Median Response Sizes</figcaption></figure>Content delivery networks (CDNs) <a href="#content-delivery-networks-(cdns)" class="w-headline-link">#</a>

### Dynamic CDN selection <a href="#dynamic-cdn-selection" class="w-headline-link">#</a>

At Wix, we have always used [CDNs](/content-delivery-networks/) to serve all the JavaScript code and images on user websites.

Recently, we integrated with a solution by our DNS provider, to automatically select the best performing CDN according to the client's network and origin. This enables us to serve the static files from the best location for each visitor, and avoid availability issues on a certain CDN.

### Coming soon… user domains served by CDNs <a href="#coming-soon...-user-domains-served-by-cdns" class="w-headline-link">#</a>

The final piece of the puzzle is serving the last, and most critical part, through a CDN: the HTML from the user domain.

As described above, we created our own in-house solution to cache and serve the site-specific HTML and API results. Maintaining this solution in so many new regions also has its operational costs, and adding new locations becomes a process we need to manage and continually optimize.

We are currently integrating with various CDN providers to support serving the entire Wix site directly from CDN locations to improve the distribution of our servers across the globe and thus further improve response times. This is a challenge due to the large amount of domains we serve, which require SSL termination at the edge.

Integrating with CDNs brings Wix websites closer than ever to the customer and comes with more improvements to the loading experience, including newer technologies such as HTTP/3 without added effort on our side.

---

### A few words on performance monitoring <a href="#a-few-words-on-performance-monitoring" class="w-headline-link">#</a>

If you run a Wix site, you're probably wondering how this translates to your Wix site performance results, and how we compare against other website platforms.

Most of the work done above has been deployed in the past year, and some is still being rolled out.

The Web Almanac by HTTPArchive recently published the [2020 edition](https://almanac.httparchive.org/en/2020) which includes an excellent chapter on [CMS user experience](https://almanac.httparchive.org/en/2020/cms). Keep in mind that many of the numbers described in this article are from the middle of 2020.

We look forward to seeing the updated report in 2021, and are actively monitoring [CrUX](https://developers.google.com/web/tools/chrome-user-experience-report/) reports for our sites as well as our internal performance metrics.

We are committed to continuously improve loading times and provide our users with a platform where they can build sites as they imagine, without compromising on performance.

<figure><img src="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format" alt="LCP, Speed Index and FCP for a mobile site over time" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AADz7d1yVOWZlq0iSb6P.jpg?auto=format&amp;w=1600 1600w" width="800" height="259" /><figcaption>LCP, Speed Index and FCP for a mobile site over time</figcaption></figure>DebugBear recently released a very interesting [Website Builder Performance Review](https://www.debugbear.com/blog/website-builder-performance-review), which touches on some of the areas I mentioned above and examines the performance of very simple sites built on each platform. This [site](https://matt05041.wixsite.com/bizsolutions) was built almost two years ago, and not modified since, but the platform is continually improving, and the site performance along with it, which can be witnessed by [viewing its data](https://www.debugbear.com/project/175/pageLoad/873/overview?dateRange=2019-03-31T21%3A00Z-to-2021-03-31T21%3A59Z) over the past year and a half.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

We hope our experience inspires you to adopt a performance-oriented culture at your organisation and that the details above are helpful and applicable to your platform or site.

To sum up:

- Pick a set of metrics that you can track consistently using tools endorsed by the industry. We recommend Core Web Vitals.
- Leverage browser caching and CDNs.
- Migrate to HTTP/2 (or HTTP/3 if possible).
- Use Brotli compression.

Thanks for learning our story and we invite you to ask questions, share ideas on [Twitter](https://twitter.com/alonkochba) and [GitHub](https://github.com/alonkochba) and join the web performance conversation on your favorite channels.

## So, how does **your** recent Wix site performance look like? <a href="#so-how-does-your-recent-wix-site-performance-look-like" class="w-headline-link">#</a>

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/case-study/" class="w-chip">Case Study</a>

<span class="w-mr--sm"> Last updated: Mar 10, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/wix/index.md)

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
