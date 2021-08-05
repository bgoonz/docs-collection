<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format" alt="A pile of gears." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/k1FlFDvBm4ERrbUiVws4.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#making-javascript-and-google-search-work-together" class="w-toc__header--link">Making JavaScript and Google Search work together</a>

- [Meet the evergreen Googlebot](#meet-the-evergreen-googlebot)
- [Learn how Googlebot works](#learn-how-googlebot-works)
- [Use feature detection and handle errors](#use-feature-detection-and-handle-errors)
- [Choose the right rendering strategy for your web app](#choose-the-right-rendering-strategy-for-your-web-app)
- [Test your pages](#test-your-pages)
- [Stay up to date and get in touch](#stay-up-to-date-and-get-in-touch)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Making JavaScript and Google Search work together

Get the latest updates and insights from Google I/O 2019.

Jun 5, 2019

[<img src="https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Martin Splitt" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/martinsplitt/)

<a href="/authors/martinsplitt/" class="w-author__name-link">Martin Splitt</a>

- <a href="https://twitter.com/g33konaut" class="w-author__link">Twitter</a>
- <a href="https://github.com/AVGP" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@AVGP" class="w-author__link">Glitch</a>

[<img src="https://web-dev.imgix.net/image/admin/qAnatGOMJMeJhHbHwbWp.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Lizzi Harvey" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/qAnatGOMJMeJhHbHwbWp.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/qAnatGOMJMeJhHbHwbWp.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/qAnatGOMJMeJhHbHwbWp.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/qAnatGOMJMeJhHbHwbWp.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/qAnatGOMJMeJhHbHwbWp.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/ekharvey/)

<a href="/authors/ekharvey/" class="w-author__name-link">Lizzi Harvey</a>

- <a href="https://twitter.com/HarveyLizzi" class="w-author__link">Twitter</a>
- <a href="https://github.com/ekharvey" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@ekharvey" class="w-author__link">Glitch</a>

Great things are happening with Google Search, and we were excited to share them at Google I/O 2019!

In this post we'll focus on best practices for making JavaScript web apps discoverable in Google Search, including:

- The new evergreen Googlebot
- Googlebot's pipeline for crawling, rendering and indexing
- Feature detection and error handling
- Rendering strategies
- Testing tools for your website in Google Search
- Common challenges and possible solutions
- Best practices for SEO in JavaScript web apps

## Meet the evergreen Googlebot <a href="#meet-the-evergreen-googlebot" class="w-headline-link">#</a>

This year we announced the much-awaited [new evergreen Googlebot](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html).

<figure><img src="https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format" alt="Googlebot is now running a modern Chromium rendering engine." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/q6RSuwuwLT7mcgE9Joqp.png?auto=format&amp;w=800 800w" width="400" height="401" /><figcaption>Googlebot is now running a modern Chromium rendering engine.</figcaption></figure>Googlebot now uses a modern Chromium engine to render websites for Google Search. On top of that, we will test newer versions of Chromium to *keep* Googlebot updated, usually within a few weeks of each stable Chrome release. This announcement is big news for web developers and SEOs because it marks the arrival of [1000+ new features](https://caniuse.com/#compare=chrome+41,chrome+74)—such as ES6+, `IntersectionObserver`, and Web Components v1—in Googlebot.

## Learn how Googlebot works <a href="#learn-how-googlebot-works" class="w-headline-link">#</a>

Googlebot is a pipeline with several components. Let's take a look to understand how Googlebot indexes pages for Google Search.

<figure><img src="https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format" alt="Googlebot&#39;s pipeline for crawling, rendering, and indexing a page." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zu4wDqHHxpU0dbwSajqA.png?auto=format&amp;w=1600 1600w" width="800" height="446" /><figcaption>Googlebot's pipeline for crawling, rendering, and indexing a page.</figcaption></figure>The process works like this:

1.  Googlebot queues URLs for crawling.
2.  It then fetches the URLs with an HTTP request based on the [crawl budget](https://webmasters.googleblog.com/2017/01/what-crawl-budget-means-for-googlebot.html).
3.  Googlebot scans the HTML for links and queues the discovered links for crawling.
4.  Googlebot then queues the page for rendering.
5.  As soon as possible, a headless Chromium instance renders the page, which includes JavaScript execution.
6.  Googlebot uses the rendered HTML to index the page.

Your technical setup can influence the process of crawling, rendering, and indexing. For example, slow response times or server errors can impact the [crawl budget](https://webmasters.googleblog.com/2017/01/what-crawl-budget-means-for-googlebot.html). Another example would be requiring JavaScript to render the links can lead to a slower discovery of these links.

## Use feature detection and handle errors <a href="#use-feature-detection-and-handle-errors" class="w-headline-link">#</a>

The evergreen Googlebot has lots of new features, but some features are still not supported. Relying on unsupported features or not handling errors properly can mean Googlebot can't render or index your content.

Let's look at an example:

     <body>
       <script>
         navigator.geolocation.getCurrentPosition(function onSuccess(position) {
           loadLocalContent(position);
         });
       </script>
     </body>

This page might not show any content in some cases because the code doesn't handle when the user declines the permission or when getCurrentPosition call returns an error. Googlebot declines permission requests like this by default.

This is a better solution:

     <body>
       <script>
         if (navigator.geolocation) {
           // this browser supports the Geolocation API, request location!
           navigator.geolocation.getCurrentPosition(
             function onSuccess(position) {
               // we successfully got the location, show local content
               loadLocalContent(position);
             }, function onError() {
               // we failed to get the location, show fallback content
               loadGlobalContent();
             });
         } else {
           // this browser does not support the Geolocation API, show fallback content
           loadGlobalContent();
         }
       </script>
     </body>

If you have problems with getting your JavaScript site indexed, [walk through our troubleshooting guide](https://developers.google.com/search/docs/guides/fix-search-javascript) to find solutions.

## Choose the right rendering strategy for your web app <a href="#choose-the-right-rendering-strategy-for-your-web-app" class="w-headline-link">#</a>

The default rendering strategy for single-page apps today is client-side rendering. The HTML loads the JavaScript, which then generates the content in the browser as it executes.

Let's look at a web app that shows a collection of cat images and uses JavaScript to render entirely in the browser.

<figure><img src="https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format" alt="The rendering strategy influences the performance and robustness of your web apps." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/lzijYVwo1DPX3Fa2liXk.png?auto=format&amp;w=1600 1600w" width="800" height="447" /><figcaption>The rendering strategy influences the performance and robustness of your web apps.</figcaption></figure>If you're free to choose your rendering strategy, consider server-side rendering or pre-rendering. They execute JavaScript on the server to generate the initial HTML content, which can improve performance for both users and crawlers. These strategies allow the browser to start rendering HTML as it arrives over the network, making the page load faster. The [rendering session at I/O](https://www.youtube.com/watch?v=k-A2VfuUROg) or [the blog post about rendering on the web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) shows how server-side rendering and hydration can improve the performance and user experience of web apps and provides more code examples for these strategies.

If you're looking for a workaround to help crawlers that don't execute JavaScript—or if you can't make changes to your frontend codebase—consider [dynamic rendering](https://developers.google.com/search/docs/guides/dynamic-rendering), which you can try out in [this codelab](https://codelabs.developers.google.com/codelabs/dynamic-rendering). Note, though, that you won't get the user experience or performance benefits that you would with server-side rendering or pre-rendering because dynamic rendering only serves static HTML to crawlers. That makes it a stop-gap rather than a long-term strategy.

## Test your pages <a href="#test-your-pages" class="w-headline-link">#</a>

While most pages generally work fine with Googlebot, we recommend testing your pages regularly to make sure your content is available to Googlebot and there are no problems. There are several great tools to help you do that.

The easiest way to do a quick check of a page is the [Mobile-Friendly Test](https://g.co/mobilefriendly). Besides showing you issues with mobile-friendliness, it also gives you a screenshot of the above-the-fold content and the rendered HTML as Googlebot sees it.

<figure><img src="https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format" alt="The mobile-friendly test shows you the rendered HTML Googlebot uses." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/15IgtDchchBvLsVyzmG2.png?auto=format&amp;w=1600 1600w" width="800" height="414" /><figcaption>The mobile-friendly test shows you the rendered HTML Googlebot uses.</figcaption></figure>You can also find out if there are resource loading issues or JavaScript errors.

<figure><img src="https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/22ttektRnHrbGT0zvbHK.png?auto=format&amp;w=1600 1600w" width="800" height="414" /></figure>It's recommended to verify your domain in [Google Search Console](https://g.co/searchconsole) so you can use the URL inspection tool to find out more about the crawling and indexing state of a URL, receive messages when Search Console detects issues and find out more details of how your site performs in Google Search.

<figure><img src="https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format" alt="The URL Inspection Tool in Search Console shows the status of a page in crawling, rendering, and indexing." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/JYsPy8FXL3E86gCzekQ3.png?auto=format&amp;w=1600 1600w" width="800" height="655" /><figcaption>The URL Inspection Tool in Search Console shows the status of a page in crawling, rendering, and indexing.</figcaption></figure>For general SEO tips and guidance, you can use the SEO audits in Lighthouse. To integrate SEO audits into your testing suite, use the [Lighthouse CLI](https://github.com/GoogleChrome/lighthouse/tree/master/lighthouse-cli) or the [Lighthouse CI bot](https://github.com/GoogleChromeLabs/lighthousebot).

<figure><img src="https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format" alt="Lighthouse shows general SEO recommendations for a page." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ctch0ql8UQZiaKaWy34u.png?auto=format&amp;w=1600 1600w" width="800" height="443" /><figcaption>Lighthouse shows general SEO recommendations for a page.</figcaption></figure>These tools help you identify, debug, and fix issues with pages in Google Search and should be part of your development routine.

## Stay up to date and get in touch <a href="#stay-up-to-date-and-get-in-touch" class="w-headline-link">#</a>

To stay up to date with announcements and changes to Google Search, keep an eye on our [Webmasters Blog](https://webmasters.googleblog.com), the [Google Webmasters Youtube channel](https://youtube.com/GoogleWebmasterHelp), and our [Twitter account](https://twitter.com/googlewmc). Also check out our [developer guide to Google Search](http://developers.google.com/search/docs/guides/) and our [JavaScript SEO video series](https://www.youtube.com/watch?v=LXF8bM4g-J4&list=PLKoqnv2vTMUPOalM1zuWDP9OQl851WMM9) to learn more about SEO and JavaScript.

<a href="/tags/seo/" class="w-chip">SEO</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: Jun 5, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/javascript-and-google-search-io-2019/index.md)

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
