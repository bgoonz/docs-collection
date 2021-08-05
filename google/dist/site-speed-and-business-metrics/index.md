<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/YwyFi7zlQ4LjXilIiD3y.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#relating-site-speed-and-business-metrics" class="w-toc__header--link">Relating site speed and business metrics</a>

- [Step 1: Pick a page to A/B test](#step-1:-pick-a-page-to-ab-test)
- [Step 2: Measure performance](#step-2:-measure-performance)
- [Step 3: Create speed performance variants](#step-3:-create-speed-performance-variants)
- [Step 4: Create an A/B test](#step-4:-create-an-ab-test)
- [Step 5: Analyze A/B test](#step-5:-analyze-ab-test)
- [Step 6: Draw conclusions and decide on next steps](#step-6:-draw-conclusions-and-decide-on-next-steps)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Relating site speed and business metrics

Leverage A/B testing to evaluate the impact of site speed on your business metrics.

Jul 17, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/fast" class="w-post-signpost__link">Fast load times</a>

[<img src="https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Dikla Cohen" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/b9zEc84wlzbNww2MKoBL.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/msdikla/)

<a href="/authors/msdikla/" class="w-author__name-link">Dikla Cohen</a>

- <a href="https://twitter.com/diklla" class="w-author__link">Twitter</a>
- <a href="https://github.com/diklla" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Martin Schierle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/DheRfImH6FxRNajMslIk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/martinschierle/)

<a href="/authors/martinschierle/" class="w-author__name-link">Martin Schierle</a>

- <a href="https://twitter.com/martinschierle" class="w-author__link">Twitter</a>
- <a href="https://github.com/martinschierle" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/ChOBe0OzPT7siDgFmjC9.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Bart Jarochowski" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ChOBe0OzPT7siDgFmjC9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ChOBe0OzPT7siDgFmjC9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ChOBe0OzPT7siDgFmjC9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ChOBe0OzPT7siDgFmjC9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ChOBe0OzPT7siDgFmjC9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/bpj/)

<a href="/authors/bpj/" class="w-author__name-link">Bart Jarochowski</a>

- <a href="https://twitter.com/maranag" class="w-author__link">Twitter</a>
- <a href="https://github.com/maranag" class="w-author__link">GitHub</a>

Over the last few years it has been well established that site speed performance is a significant part of the user experience and that improving it benefits different business metrics such as conversion rates and bounce rates. Multiple articles and case studies have been published to back this up, including Cloudflare's [How Website Performance Affects Conversion Rates](https://www.cloudflare.com/learning/performance/more/website-performance-conversion-rates/), Deloitte's [Milliseconds Make Millions](https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html), and [Shopping for Speed on eBay.com](/shopping-for-speed-on-ebay/), to name a few.

Even though the case for speed is clear, many companies still struggle with prioritizing work that will improve their site speed since they do not know exactly how it affects **their** users and as a result **their** business.

In the absence of data, it is easy to delay site speed work and focus on other tasks. A common scenario is having some people in the company recognize the importance of site speed and yet not be able to build a case for it and convince multiple stakeholders to invest accordingly.

This article provides high-level guidance on how to leverage A/B testing to evaluate the impact of site speed on business metrics therefore enabling more effective decision-making on the matter.

## Step 1: Pick a page to A/B test <a href="#step-1:-pick-a-page-to-ab-test" class="w-headline-link">#</a>

Your aim is to test the hypothesis that page speed relates to your business metrics. For simplicity's sake, you can initially limit yourself to identifying a single page for analysis. Future work can expand to multiple pages of the same type to verify findings, and then to other areas of the site. Some suggestions for where to start are provided at the bottom of this step. Several requirements drive the page selection process:

- The A/B test should only be run on the devices of mobile users. Globally, the partner sites we assist see an average of [more than 50%](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide) (and growing!) of their traffic coming from mobile, but this can increase significantly based on [region](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india) and [vertical](https://www.salecycle.com/blog/stats/2019-ecommerce-year-in-review-infographic/). Mobile devices are more sensitive to slower websites due to processing and memory constraints and less stable networks. Also, on-the-go usage patterns mean expectations for speed are higher.

- The page you choose for testing should be an important part of your conversion funnel. Every site has a different purpose, so every site tracks different success metrics. These metrics are usually related to a user journey which is analyzed using a funnel. For example, users on an e-commerce website will have to navigate through a home page, category pages, product pages, and a checkout page to complete a purchase. If you're optimizing for conversions, one of those pages would be a good candidate.

- The page should have a singular purpose. Unless your site has a very specific mission, it's usually best to avoid using the homepage for your test. Many commercial sites' homepages are portals to a wide variety of functionality that will make your analysis noisy. For example, if you're optimizing for pageviews per session on a news site, it might be best to exclude the non-commercial portions of the site and focus on monetized sections and articles.

- The page chosen should get enough traffic so that you don't have to wait long before getting a statistically significant result.

- The selected page should be relatively slow. In fact, the slower the better. This not only means that you will likely have an easier time improving the page, it also means that the data should be much clearer. You can do a quick scan through your [Google Analytics Speed Report](https://support.google.com/analytics/answer/1205784) or [Search Console Core Web Vitals report](https://support.google.com/webmasters/answer/9205520) to see which of your pages are slowest.

- The page should be relatively stable. Don't update pages (anything that would impact business metrics) until the test is complete. The fewer external factors there are to consider, the cleaner the analysis will be.

Using the above as a guide it should be a bit more clear which pages are good candidates for your test. Ad landing pages are also a good choice, because you're likely to have built-in business metrics, A/B testing, and analysis at your disposal. In case you're still unsure, here are some ideas per vertical:

- Content Websites: sections, articles
- Storefronts: category pages, product pages
- Media Players: video discovery/search pages, video play page
- Services & Discovery (travel, rental cars, service registration, etc.): initial form-entry page

## Step 2: Measure performance <a href="#step-2:-measure-performance" class="w-headline-link">#</a>

There are two general ways to measure metrics: [in the lab and in the field](/user-centric-performance-metrics/#how-metrics-are-measured). We personally have found measuring metrics in the field (also known as Real User Monitoring (RUM)) to be more useful because it reflects the experience of real users. Examples of libraries and services that can help you report RUM data include [Perfume](https://zizzamia.github.io/perfume/), [Firebase Performance Monitoring](https://firebase.google.com/docs/perf-mon), and [Google Analytics Events](https://developers.google.com/analytics/devguides/collection/analyticsjs/events).

There are [many metrics to choose from](/user-centric-performance-metrics/) because they aim to capture different aspects of the user experience. Remember that your goal is to eventually determine if there's a direct correlation between your speed and business metrics, so it might be useful to track a few speed metrics in order to determine which one has the strongest correlation with your business success. In general we recommend starting with the [Core Web Vitals](/vitals/#core-web-vitals). The [web-vitals.js](https://github.com/GoogleChrome/web-vitals) library can help you measure some of the Core Web Vitals in the field, although note that [browser support isn't 100%](https://github.com/GoogleChrome/web-vitals#browser-support). Beyond the Core Web Vitals, the [Other Web Vitals](/vitals/#other-web-vitals) are also worth checking out. You can also define [custom metrics](/user-centric-performance-metrics/#custom-metrics), such as "Time To First Ad Click".

## Step 3: Create speed performance variants <a href="#step-3:-create-speed-performance-variants" class="w-headline-link">#</a>

In this stage you will implement changes to create a faster version of the page to be tested against the current version.

A couple of things to keep in mind:

1.  Avoid making any changes to the UI or UX. Aside from one page being faster than the other, changes must be invisible to users.
2.  Measuring is also a key aspect of this stage. While developing, lab testing tools such as Lighthouse should be used to indicate the effect your changes have on performance. Keep in mind that changes to one metric can often influence another. Once the pages are live, stick to RUM for a more accurate evaluation.

Creating performance variants can be done in different ways. For the purpose of the test, you would want to do so as simply as possible. Below are a few options.

**Create a faster page**

- Use a tool like [Squoosh](https://squoosh.app/) to manually optimize the images on your test page
- [Use DevTools code coverage](https://developers.google.com/web/tools/chrome-devtools/coverage) to manually eliminate unused JavaScript or CSS just for that one page
- [Efficiently load third-party scripts](/efficiently-load-third-party-javascript/)
- Use a tool like [Critical](https://github.com/addyosmani/critical) to break out and inline critical CSS
- Remove non-critical JavaScript code that does not impact the user experience and which you can do without for the purpose of the test (for example, certain third-party libraries)
- Implement [browser-level lazy loading](/browser-level-image-lazy-loading/) which isn't supported by all browsers but may still improve performance significantly where supported
- Remove non-critical analytics tags or load them asynchronously

Additional optimizations to consider can be found at [Fast load times](/fast/) and [Frontend Performance Checklist](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/). You can also use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to run Lighthouse, which identifies opportunities to improve performance.

**Slow down the page**

This may be the easiest way to create variants and can be achieved by adding a simple script, slowing down server response times, loading larger images, etc. The Financial Times opted for this option when testing how performance impacted their business metrics: see [A faster FT.com](https://medium.com/ft-product-technology/a-faster-ft-com-10e7c077dc1c).

**Speed up page load**

For cases where the test page (let's say a product detail page) is mostly linked out from a different page (let's say the homepage), [prefetching](/link-prefetch/) or [prerendering](https://developers.google.com/web/updates/2018/07/nostate-prefetch) the product page directly from the homepage for the test group will speed up the subsequent load of the page. Note that in this case the A/B test split (step 4) is done on the homepage. In addition, all of this may slow down the first page so be sure to measure that and take it under consideration when analyzing the test results (step 5).

## Step 4: Create an A/B test <a href="#step-4:-create-an-ab-test" class="w-headline-link">#</a>

Once you have two versions of the same page where one is faster than the other, the next step is to split traffic to measure impact. In general there are many techniques and tools to perform A/B tests, but be aware that not all methods are well suited to measure speed performance impact.

If you're using an A/B testing tool like [Optimizely](https://www.optimizely.com/de/) or [Optimize](https://optimize.google.com/optimize/home/) we strongly recommend setting up a server-side test instead of a client-side test, as client side A/B testing often works by hiding page content until the experiment is loaded, which would mean the A/B testing itself would skew the metrics you wanted to measure. If you can only do client-side testing, consider setting up the experiment on a different page and changing the link outs to your test page to split the traffic. This way the test page itself isn't dragged down by the client-side test.

## Example

Example of AB testing performance changes on a given product detail page (PDP) via server-side testing:

<img src="https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format" alt="Server side testing diagram" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/xQWUEAAfowEg0wjmVsrm.jpg?auto=format&amp;w=1600 1600w" width="800" height="230" />

The request goes to the backend, which distributes the users to the two different versions of the page. While this is in general a good setup, it often needs IT resources to set up the server-side split.

Here is an example of a client side testing setup, using the prior page (the homepage in the diagram below) to run the testing JavaScript:

<img src="https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format" alt="Client side testing diagram" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/tX6XL3IoZBVdJXCPAE1E.jpg?auto=format&amp;w=1600 1600w" width="800" height="337" />

The testing JavaScript manipulates the outgoing link to give the two test groups of users links to the two versions of the PDP in question. This is easy to setup and maintain through common A/B testing tools like Optimizely or Optimize and does not influence the performance test because the testing JavaScript runs on a different page.

Alternatively, you can pick two pages which behave and perform very similarly (for example, for two very similar products). Apply your changes to one of them and then compare the difference in metrics over time. This will mean you're not conducting a proper A/B test, yet it can still be quite insightful.

In case your test page is used as a landing page for ad campaigns, it can be handy to use your ad network's built-in A/B testing tools, like [Facebook Ads Split Test](https://www.facebook.com/business/help/1159714227408868) or [Google Ads Drafts & Experiments](https://support.google.com/google-ads/answer/6318732?hl=en). If that's not an option, you can use two campaigns with the same setup, and set different landing pages as targets.

## Step 5: Analyze A/B test <a href="#step-5:-analyze-ab-test" class="w-headline-link">#</a>

After you've run your test for long enough and have enough data to feel confident about the results, it's time to put it all together and run an analysis. How you do that really depends on how the test has run, so let's go through the options.

If your test was run on ad landing pages using the above-mentioned tools, analysis should be as straightforward as reading a result. If you're using Google's Drafts & Experiments, take a look at the comparison using the [ScoreCard](https://support.google.com/google-ads/answer/6318747?hl=en).

Platforms like Optimizely or Optimize also offer [easy ways](https://support.google.com/optimize/answer/6218117?hl=en) to interpret the results and determine how much of an impact speed has on your pages.

If you're using Google Analytics or a similar tool, you will have to pull together the report yourself. Luckily, Google Analytics makes it pretty easy to build [custom reports](https://support.google.com/analytics/answer/1151300?hl=en), so that's where you should start. If you've sent speed data to Google Analytics using a custom dimension, check out the [Reporting guide](https://support.google.com/analytics/answer/2709828?hl=en#reporting) to learn how to set those up and include them in your custom reports. Make sure your report covers the date of the experiment and is configured to display both variants. What should go in this report?

- Primarily, you need to include the business metrics that you most care about: conversions, page views, ads viewed, conversion rate, e-commerce metrics, click-through rate, etc.
- Additionally, other standard page metrics that also make a good case for improving site speed are bounce rate, average session duration, and exit percentage.

You may also need to filter for mobile and make sure to [exclude bots and other non-user traffic](https://support.google.com/analytics/thread/16422940?hl=en&msgid=16485536). More advanced analysis would also filter by region, networks, devices, traffic source, and user profiles and types, such as new users versus repeat visitors. Each group of users may be more or less sensitive to slower speeds and identifying these is also quite helpful.

[Data Studio](https://support.google.com/datastudio/answer/6283323?hl=en) or other data visualization tools make it easy to integrate various data sources including Google Analytics. This makes it easy to conduct analysis, and also create dashboards that are shareable with the many stakeholders involved in running a modern website for further buy-in. For example, the Guardian created an [automated alert system](https://www.theguardian.com/info/developer-blog/2017/mar/06/empowering-our-editorial-teams-to-impact-page-performance) that warned the editorial team when recently published content crossed their page size or speed thresholds and was likely to result in unsatisfied users.

## Step 6: Draw conclusions and decide on next steps <a href="#step-6:-draw-conclusions-and-decide-on-next-steps" class="w-headline-link">#</a>

Once you have data that connects performance and business metrics, you can examine the results and start to draw conclusions.

If you can clearly see a correlation between improving performance and improving business metrics, summarize the results and report them across the company. Now that you can talk about speed performance in a "business language" you are more likely to grab the attention of different stakeholders and place site speed performance on everyone's radar. The next step is to set [performance budgets](/your-first-performance-budget/) based on the results, and plan out work to meet those budgets. Since you know the value such work will provide, you'll be able to prioritize accordingly.

If you can't identify a correlation, take a look at the caveats below and assess whether similar tests should be run elsewhere on the site (for example, through the entire purchase funnel or on a different type of page).

**Caveats**

There might be several reasons for not finding significant correlation between site speed metrics and business metrics:

- The page chosen does not have enough influence on the business metrics you're examining. For example, a faster product page may not have a big effect on conversion rates if the checkout page is very unfriendly or slow. Consider looking at more relevant metrics such as bounce rates, add-to-basket rates or any other metric that is more directly connected to the page you're testing.
- The difference in speed is not significant enough between the two versions. This should be evaluated according to the RUM metrics you're measuring.
- There's a fault with the A/B testing mechanism. Traffic might not be distributed properly or analytics not reported correctly. In order to rule this out, consider running an A/A test where you test the same version of a page using the same testing mechanism and ensure there's no difference in results when doing so.
- Site speed really doesn't influence your business metrics. This is rare but can occur in cases where your target market is less sensitive to speed (e.g. the site is mostly accessed from powerful devices on a strong network) or user demand is very high and choice is limited (e.g. a ticketing service that exclusively sells tickets for high-demand shows). Note that this does not mean that a faster site will not improve user experience and as a result [affect brand reputation](https://www.thinkwithgoogle.com/intl/en-154/marketing-collections/mobile/why-mobile-speed-means-loyal-customers-and-how-make-it-happen/).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

While it is tempting to launch speed optimizations across the entire site, it is usually more beneficial in the long run to first understand what it means to your users and your company to have a faster website. It is the difference between saying "we improved FCP by 1.5 seconds" and "we improved FCP by 1.5 seconds and that improved our conversion rates by 5%". This will allow you to prioritize further work, get buy-in from different stakeholders and [make site speed performance a company-wide effort](/fixing-website-speed-cross-functionally/).

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/metrics/" class="w-chip">Metrics</a> <a href="/tags/analytics/" class="w-chip">Analytics</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jul 17, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/site-speed-and-business-metrics/index.md)

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
