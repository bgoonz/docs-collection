<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format" alt="Photograph of a prickly pear cactus, whose sharp thorns guard a succulent fruit." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/Hdl5V6rz7DOLmC7LkYaX.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#the-performance-effects-of-too-much-lazy-loading" class="w-toc__header--link">The performance effects of too much lazy-loading</a>

- [Adoption](#adoption)
- [Correlational performance](#correlational-performance)
- [Causal performance](#causal-performance)
- [Testing a fix](#testing-a-fix)
- [Rolling it out](#rolling-it-out)
- [Wrapping it up](#wrapping-it-up)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# The performance effects of too much lazy-loading

Data-driven advice for lazy-loading images with Core Web Vitals in mind.

Jul 15, 2021

[<img src="https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rick Viscomi" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rviscomi/)

<a href="/authors/rviscomi/" class="w-author__name-link">Rick Viscomi</a>

- <a href="https://twitter.com/rick_viscomi" class="w-author__link">Twitter</a>
- <a href="https://github.com/rviscomi" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Felix Arntz" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/felixarntz/)

<a href="/authors/felixarntz/" class="w-author__name-link">Felix Arntz</a>

- <a href="https://twitter.com/felixarntz" class="w-author__link">Twitter</a>
- <a href="https://felix-arntz.me" class="w-author__link">Blog</a>

Lazy-loading is a technique to defer downloading a resource until it's needed, which conserves data and reduces network contention for critical assets. It became a web standard in [2019](/browser-level-image-lazy-loading/) and today `loading="lazy"` for images is [supported](https://caniuse.com/loading-lazy-attr) by most major browsers. That sounds great, but is there such a thing as too much lazy loading?

This post summarizes how we analyzed publicly available web transparency data and ad hoc A/B testing to understand the adoption and performance characteristics of native image lazy-loading. What we found is that lazy-loading can be an amazingly effective tool for reducing unneeded image bytes, but overuse can negatively affect performance. Concretely, our analysis shows that more eagerly loading images within the initial viewport—while liberally lazy-loading the rest—can give us the best of both worlds: fewer bytes loaded and improved [Core Web Vitals](/vitals/#core-web-vitals).

## Adoption <a href="#adoption" class="w-headline-link">#</a>

According to the most recent data in [HTTP Archive](https://httparchive.org/), native image lazy-loading is used by [17%](https://httparchive.org/reports/state-of-images?start=2020_01_01&end=2021_06_01#imgLazy) of websites and adoption is growing rapidly. This much of a foothold in the ecosystem is remarkable for a relatively new API.

<figure><img src="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format" alt="Breakdown of the types of websites that make use of native image lazy-loading. (Source)" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/9RDh3CEC9vb1jCjVAIIi.png?auto=format&amp;w=1600 1600w" width="800" height="491" /><figcaption>Breakdown of the types of websites that make use of native image lazy-loading. <em>(<a href="https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-wp-cms-sql">Source</a>)</em></figcaption></figure>[Querying](https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-wp-cms-sql) the raw data in the HTTP Archive project gives us a clearer understanding of what kinds of websites are driving adoption: 84% of sites that use native image lazy-loading use WordPress, 2% use another CMS, and the remaining 14% don't use a known CMS. These results make clear how [WordPress is leading the charge](https://make.wordpress.org/core/2020/07/14/lazy-loading-images-in-5-5/) in adoption.

<figure><img src="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format" alt="Breakdown of the types of websites that make use of native image lazy-loading. (Source)" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/XgHvIF8JyybNZCNwXL35.png?auto=format&amp;w=1600 1600w" width="800" height="507" /><figcaption>Breakdown of the types of websites that make use of native image lazy-loading. <em>(<a href="https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-wp-cms-timeseries-sql">Source</a>)</em></figcaption></figure>The [rate of adoption](https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-wp-cms-timeseries-sql) is also worth noting. One year ago in July 2020, WordPress sites that use lazy-loading made up tens of thousands websites in the corpus of about 6 million (1% of total). Lazy-loading adoption in WordPress alone has since grown to over 1 million websites (14% of total).

## Correlational performance <a href="#correlational-performance" class="w-headline-link">#</a>

[Digging deeper](https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-crux-lcp-sql) into HTTP Archive, we can compare how pages with and without native image lazy loading perform with the [Largest Contentful Paint](/lcp/) (LCP) metric. The LCP data comes from real-user experiences from the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) (CrUX) as opposed to synthetic testing in the lab. The chart below uses a box-and-whisker plot to visualize the distributions of each pages' 75th percentile LCP: the lines represent the 10th and 90th percentiles and the boxes represent the 25th and 75th percentiles.

<figure><img src="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format" alt="Distribution of all pages&#39; 75th percentile LCP experience, broken down by whether they use native image lazy-loading. (Source)" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/W8gsHQn1IjlRuAgnSizY.png?auto=format&amp;w=1600 1600w" width="800" height="488" /><figcaption>Distribution of all pages' 75th percentile LCP experience, broken down by whether they use native image lazy-loading. <em>(<a href="https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-crux-lcp-sql">Source</a>)</em></figcaption></figure>The median page without lazy-loading has a 75th percentile LCP of 2,922 ms, compared to 3,546 ms for the median page with lazy-loading. Overall, websites that use lazy-loading tend to have worse LCP performance.

It's important to point out that these are _correlational_ results and they don't necessarily point to lazy-loading as being the _cause_ of the slower performance. Hypothetically, if WordPress sites tend to be a bit slower, and given how much they make up the lazy-loading cohort, that could explain the difference. So let's try to eliminate that variability by looking only at WordPress sites.

<figure><img src="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format" alt="Distribution of WordPress pages&#39; 75th percentile LCP experience, broken down by whether they use native image lazy-loading. (Source)" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/STd8eW8CSiNp5B1bX0R6Dww2eH32/k1YlIULhqpx3CJV2OPYc.png?auto=format&amp;w=1600 1600w" width="800" height="488" /><figcaption>Distribution of WordPress pages' 75th percentile LCP experience, broken down by whether they use native image lazy-loading. <em>(<a href="https://gist.github.com/rviscomi/44d80c1a0f4dec9cbafb37347c770278#file-lazy-loading-crux-lcp-wordpress-sql">Source</a>)</em></figcaption></figure>Unfortunately, the same pattern emerges when we drill down into WordPress pages; those that use lazy-loading tend to have slower LCP performance. The median WordPress page without lazy-loading has a 75th percentile LCP of 3,495 ms, compared to 3,768 ms for the median page with lazy-loading.

This still doesn't prove that lazy-loading _causes_ pages to get slower, but using it does coincide with having slower performance. To try to answer the causality question, we set up a lab-based A/B test.

## Causal performance <a href="#causal-performance" class="w-headline-link">#</a>

The goal for the A/B test was to prove or disprove the hypothesis that native image lazy-loading, as implemented in WordPress core, resulted in slower LCP performance and fewer image bytes. The methodology we used was to test a demo WordPress website with the [twentytwentyone](https://wordpress.org/themes/twentytwentyone/) theme. We tested both archive and single page types, which are like the home and article pages, on desktop and emulated mobile devices using [WebPageTest](https://webpagetest.org/). We tested each combination of pages with and without lazy-loading enabled and ran each test nine times to get the median LCP value and number of image bytes.

Series

default

disabled

Difference from default

[twentytwentyone-archive-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcQM_859caf47f070026732f4da3f70b8afe3-l:fix,210625_BiDcPT_2b89f12170b7180acf06cb35d3125d6a-l:disabled,210625_AiDc28_df202856ac4f0da4748c7a84a7a455a8-l:default)

2,029

1,759

-13%

[twentytwentyone-archive-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcV5_003a2ee20d6ee7323fca102afe3ef511-l:fix,210625_BiDcET_810fe76322f8a6003c38f0bc901e4025-l:disabled,210625_BiDc99_44b0562e9077eb01e1e18dceec69bca9-l:default)

1,657

1,403

-15%

[twentytwentyone-single-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_AiDcR8_47e248c3211951b7af3bc9a87f205cc7-l:fix,210625_AiDcXB_3d9db18bf36397fcdc5d3db207d0d9e7-l:disabled,210625_AiDc2G_ee59429fac9a388b2184758078610b61-l:default)

1,655

1,726

4%

[twentytwentyone-single-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcR1_c349d38d4c7151772f2678fa7767ff42-l:fix,210625_AiDcD9_502bb504fc87aebafc5f8c9aaa70faa5-l:disabled,210625_BiDcPS_de2a3e5a526e470287d850d1dbc96fb7-l:default)

1,352

1,384

2%

Change in LCP (ms) by disabling native image lazy-loading on sample WordPress pages.

The results above compare the median LCP in milliseconds for tests on archive and single pages for desktop and mobile. When we disabled lazy-loading on archive pages, we observed LCP improving by a significant margin. On single pages, however, the difference was more neutral.

It's worth noting that the effect of disabling lazy-loading actually appears to make the single pages slightly faster. However, the difference in LCP is less than one standard deviation for both desktop and mobile tests, so we attribute this to variance and consider the change neutral overall. By comparison, the difference for archive pages is more like two to three standard deviations.

Series

default

disabled

Difference from default

[twentytwentyone-archive-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcQM_859caf47f070026732f4da3f70b8afe3-l:fix,210625_BiDcPT_2b89f12170b7180acf06cb35d3125d6a-l:disabled,210625_AiDc28_df202856ac4f0da4748c7a84a7a455a8-l:default)

577

1173

103%

[twentytwentyone-archive-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcV5_003a2ee20d6ee7323fca102afe3ef511-l:fix,210625_BiDcET_810fe76322f8a6003c38f0bc901e4025-l:disabled,210625_BiDc99_44b0562e9077eb01e1e18dceec69bca9-l:default)

172

378

120%

[twentytwentyone-single-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_AiDcR8_47e248c3211951b7af3bc9a87f205cc7-l:fix,210625_AiDcXB_3d9db18bf36397fcdc5d3db207d0d9e7-l:disabled,210625_AiDc2G_ee59429fac9a388b2184758078610b61-l:default)

301

850

183%

[twentytwentyone-single-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcR1_c349d38d4c7151772f2678fa7767ff42-l:fix,210625_AiDcD9_502bb504fc87aebafc5f8c9aaa70faa5-l:disabled,210625_BiDcPS_de2a3e5a526e470287d850d1dbc96fb7-l:default)

114

378

233%

Change in the number of image bytes (KB) by disabling native image lazy-loading on sample WordPress pages.

The results above compare the median number of image bytes (in KB) for each test. As expected, lazy-loading has a very clear positive effect on reducing the number of image bytes. If a real user were to scroll the entire page down, all images would load anyway as they cross into the viewport, but these results show the improved performance of the initial page load.

To summarize the results of the A/B test, the lazy-loading technique used by WordPress very clearly helps reduce image bytes but at the cost of a delayed LCP.

## Testing a fix <a href="#testing-a-fix" class="w-headline-link">#</a>

Before we get into how the fix was implemented, let's look at how lazy-loading works in WordPress today. The most important aspect of the current implementation is that it lazy-loads images above the fold (within the viewport). The CMS blog post [acknowledges](/browser-level-lazy-loading-for-cmss/#avoid-lazy-loading-above-the-fold-elements) this as a pattern to avoid, but experimental data at the time indicated that the effect on LCP was minimal and worth simplifying the implementation in WordPress core.

Given this new data, we created an experimental fix that avoids lazy-loading images that are above the fold and we tested it under the same conditions as the first A/B test.

Series

default

disabled

fix

Difference from default

Difference from disabled

[twentytwentyone-archive-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcQM_859caf47f070026732f4da3f70b8afe3-l:fix,210625_BiDcPT_2b89f12170b7180acf06cb35d3125d6a-l:disabled,210625_AiDc28_df202856ac4f0da4748c7a84a7a455a8-l:default)

2,029

1,759

1,749

-14%

-1%

[twentytwentyone-archive-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcV5_003a2ee20d6ee7323fca102afe3ef511-l:fix,210625_BiDcET_810fe76322f8a6003c38f0bc901e4025-l:disabled,210625_BiDc99_44b0562e9077eb01e1e18dceec69bca9-l:default)

1,657

1,403

1,352

-18%

-4%

[twentytwentyone-single-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_AiDcR8_47e248c3211951b7af3bc9a87f205cc7-l:fix,210625_AiDcXB_3d9db18bf36397fcdc5d3db207d0d9e7-l:disabled,210625_AiDc2G_ee59429fac9a388b2184758078610b61-l:default)

1,655

1,726

1,676

1%

-3%

[twentytwentyone-single-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcR1_c349d38d4c7151772f2678fa7767ff42-l:fix,210625_AiDcD9_502bb504fc87aebafc5f8c9aaa70faa5-l:disabled,210625_BiDcPS_de2a3e5a526e470287d850d1dbc96fb7-l:default)

1,352

1,384

1,342

-1%

-3%

Change in LCP (ms) by the proposed fix for native image lazy-loading on sample WordPress pages.

These results are much more promising. Lazy-loading only the images below the fold results in a complete reversal of the LCP regression and possibly even a slight _improvement_ over disabling LCP entirely. How could it be faster than not lazy-loading at all? One explanation is that by not loading below-the-fold images, there's less network contention with the LCP image, which enables it to load more quickly.

Series

default

disabled

fix

Difference from default

Difference from disabled

[twentytwentyone-archive-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcQM_859caf47f070026732f4da3f70b8afe3-l:fix,210625_BiDcPT_2b89f12170b7180acf06cb35d3125d6a-l:disabled,210625_AiDc28_df202856ac4f0da4748c7a84a7a455a8-l:default)

577

1173

577

0%

-51%

[twentytwentyone-archive-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcV5_003a2ee20d6ee7323fca102afe3ef511-l:fix,210625_BiDcET_810fe76322f8a6003c38f0bc901e4025-l:disabled,210625_BiDc99_44b0562e9077eb01e1e18dceec69bca9-l:default)

172

378

172

0%

-54%

[twentytwentyone-single-desktop](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_AiDcR8_47e248c3211951b7af3bc9a87f205cc7-l:fix,210625_AiDcXB_3d9db18bf36397fcdc5d3db207d0d9e7-l:disabled,210625_AiDc2G_ee59429fac9a388b2184758078610b61-l:default)

301

850

301

0%

-65%

[twentytwentyone-single-mobile](https://www.webpagetest.org/video/compare.php?medianMetric=chromeUserTiming.LargestContentfulPaint&highlightLCP=1&thumbSize=200&ival=100&end=visual&tests=210625_BiDcR1_c349d38d4c7151772f2678fa7767ff42-l:fix,210625_AiDcD9_502bb504fc87aebafc5f8c9aaa70faa5-l:disabled,210625_BiDcPS_de2a3e5a526e470287d850d1dbc96fb7-l:default)

114

378

114

0%

-70%

Change in the number of image bytes (KB) by the proposed fix for native image lazy-loading on sample WordPress pages.

In terms of image bytes, the fix has absolutely no change as compared to the default behavior. This is great because that was one of the strengths of the current approach.

There are some caveats with this fix. WordPress determines which images to lazy-load on the server-side, which means that it doesn't know anything about the user's viewport size or whether images will initially load within it. So the fix uses heuristics about the images' relative location in the markup to guess whether it will be in the viewport. Specifically, if the image is the first featured image on the page or the first image in the main content, it's assumed to be above the fold (or close to it), and it will not be lazy-loaded. Page-level conditions like the number of words in the heading or the amount of paragraph text early in the main content may affect whether the image is within the viewport. There are also user-level conditions that may affect the accuracy of the heuristics, especially the viewport size and the usage of anchor links that change the scroll position of the page. For those reasons, it's important to acknowledge that the fix is only calibrated to provide good performance in the general case and fine-tuning may be needed to make these results applicable to all real-world scenarios.

## Rolling it out <a href="#rolling-it-out" class="w-headline-link">#</a>

Now that we've identified a better way to lazy-load images, all of the image savings and faster LCP performance, how can we get sites to start using it? The highest priority change is to submit a patch to WordPress core to implement the experimental fix. We'll also be updating the guidance in the [Browser-level lazy-loading for CMSs](/browser-level-lazy-loading-for-cmss/) blog post to clarify the negative effects of above-the-fold lazy-loading and how CMSs can use heuristics to avoid it.

Since these best practices are applicable to all web developers, it may also be worth flagging lazy-loading antipatterns in tools like Lighthouse. Refer to the [feature request](https://github.com/GoogleChrome/lighthouse/issues/12785) on GitHub if you're interested to follow along with progress on that audit. Until then, one thing developers could do to find instances of LCP elements being lazy-loaded is to add more detailed logging to their field data.

    webVitals.getLCP(lcp => {
      const latestEntry = lcp.entries[lcp.entries.length - 1];
      if (latestEntry?.element?.getAttribute('loading') == 'lazy') {
        console.warn('Warning: LCP element was lazy loaded', latestEntry);
      }
    });

The JavaScript snippet above will evaluate the most recent LCP element and log a warning if it was lazy-loaded.

This also highlights a sharp edge of the lazy-loading technique and the potential for API improvements at the platform level. For example, there's an open issue in Chromium to [experiment](https://bugs.chromium.org/p/chromium/issues/detail?id=996963) with natively loading the first few images eagerly, similar to the fix, despite the `loading` attribute.

## Wrapping it up <a href="#wrapping-it-up" class="w-headline-link">#</a>

If your site uses native image lazy-loading, check how it's implemented and run A/B tests to better understand its performance costs. It may benefit from more eagerly loading images above the fold. If you have a WordPress site, there will hopefully be a patch landing in WordPress core soon. And if you're using another CMS, make sure they're aware of the potential performance issues described here.

Trying out relatively new web platform APIs can come with both risks and rewards—they're called cutting edge features for a reason. While we're starting to get a sense of the thorniness of native image lazy-loading, we're also seeing the upsides of how to use it to achieve better performance.

<span class="small">_Photo by [Frankie Lopez](https://unsplash.com/@frankielopez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/prickly-pear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_</span>

<a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/images/" class="w-chip">Images</a>

<span class="w-mr--sm"> Last updated: Jul 15, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/lcp-lazy-loading/index.md)

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
