<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format" alt="A screenshot of the Core Web Vitals report." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/yUVYFuA1d5E33nfvT0fs.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#web-developer-tools-for-debugging-javascript-issues-in-google-search" class="w-toc__header--link">Web developer tools for debugging JavaScript issues in Google Search</a>

- [Find basic SEO issues with Lighthouse](#find-basic-seo-issues-with-lighthouse)
- [Validate pages with Google Search testing tools](#validate-pages-with-google-search-testing-tools)
- [Investigate site health with Google Search Console](#investigate-site-health-with-google-search-console)
- [Coverage report](#coverage-report)
- [Core Web Vitals report](#core-web-vitals-report)
- [Make these tools part of your developer tooling](#make-these-tools-part-of-your-developer-tooling)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Web developer tools for debugging JavaScript issues in Google Search

How to debug SEO issues on individual pages or across an entire site.

Jun 25, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/discoverable" class="w-post-signpost__link">Easily discoverable</a>

[<img src="https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Martin Splitt" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/HoAwoSaHr3yneJoSxKYc.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/martinsplitt/)

<a href="/authors/martinsplitt/" class="w-author__name-link">Martin Splitt</a>

- <a href="https://twitter.com/g33konaut" class="w-author__link">Twitter</a>
- <a href="https://github.com/AVGP" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@AVGP" class="w-author__link">Glitch</a>

Google provides a lot of tools to help you debug JavaScript SEO issues in Google Search. This guide gives you an overview of the available tools and suggestions on when to use each tool.

## Find basic SEO issues with Lighthouse <a href="#find-basic-seo-issues-with-lighthouse" class="w-headline-link">#</a>

Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for your first investigation. It comes with a bunch of [SEO audits](/pass-lighthouse-seo-audit/).

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/c6SfL83IXMmBArczs9Le.png?auto=format&amp;w=1600 1600w" width="800" height="74" /></figure>The Lighthouse SEO audits are very basic first checks for a single page of your website. They catch the most common mistakes and give you a first impression on how your website is doing in terms of search engine discoverability. Note that Lighthouse runs in your browser, which is not an accurate representation of how Googlebot might see a web page. For instance, browsers (and Lighthouse) don't use `robots.txt` to decide if they can fetch resources from the network, while Googlebot does. So when Lighthouse identifies potential problems, you should fix them, but you may have to use other tools to debug issues further.

## Validate pages with Google Search testing tools <a href="#validate-pages-with-google-search-testing-tools" class="w-headline-link">#</a>

Google Search provides [a set of tools for testing how Googlebot sees your web content](https://developers.google.com/search/tools).  
Some of these tools are particularly useful when testing from your development environment:

- The [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) ensures that a page is mobile-friendly, which has been a [Google Search ranking signal since 2015](https://webmasters.googleblog.com/2015/02/finding-more-mobile-friendly-search.html)
- The [Rich Results Test](https://search.google.com/test/rich-results) validates that a page is eligible for [rich results](https://developers.google.com/search/docs/guides/search-gallery) based on the structured data that it provides
- The [AMP Test](https://search.google.com/test/amp) validates your AMP HTML

In combination with [tools like local-tunnel or ngrok](https://developers.google.com/search/docs/guides/debug#testing-firewalled-pages) you can create a temporary public URL from your local development environment and iterate quickly while you are testing with Google's testing tools.

These testing tools provide you with multiple helpful pieces of information, like:

- The rendered HTML that Googlebot will use for indexing
- An overview of the resources loaded and explanations of why resources can't be loaded
- Console log messages and JavaScript errors with stack traces

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HxpuDusVnyVm21QSD20b.png?auto=format&amp;w=1600 1600w" width="800" height="492" /></figure>The Google Search Console [URL Inspection Tool](https://support.google.com/webmasters/answer/9012289) can also give you detailed information about the status of a page.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jyUDvp0zvkpUEgDjEULN.png?auto=format&amp;w=1600 1600w" width="800" height="590" /></figure>Here you can find out:

- If the URL is in the Google Search index or can be indexed in the future
- What the rendered HTML from the most recent crawl looks like
- What the rendered HTML looks like for a fresh crawl of the page
- Information about page resources
- JavaScript log messages and errors with stack traces
- A screenshot
- Mobile usability issues
- What structured data was detected on the page and if it's valid

Using these tools you can identify most issues and resolve them. Google Search also provides documentation for [fixing Google Search-related JavaScript problems](https://developers.google.com/search/docs/guides/fix-search-javascript) for more guidance on what to do once you identified the cause of a problem.

## Investigate site health with Google Search Console <a href="#investigate-site-health-with-google-search-console" class="w-headline-link">#</a>

The tools from the last section are great at resolving specific issues on a single page of your website, but if you want to get a better overview of your entire website, the [Google Search Console](https://search.google.com/search-console/about) is where you need to go.

### Coverage report <a href="#coverage-report" class="w-headline-link">#</a>

The [Coverage report](https://support.google.com/webmasters/answer/7440203) shows you which pages of your website are indexed and which ones have problems.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format" class="w-screenshot" sizes="(min-width: 754px) 754px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/A1KZQbjh96n9uv48fBCT.png?auto=format&amp;w=1508 1508w" width="754" height="567" /></figure>### Core Web Vitals report <a href="#core-web-vitals-report" class="w-headline-link">#</a>

The [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520) helps you get an overview of how the pages of your website are performing in terms of the [Core Web Vitals](/vitals/#core-web-vitals).

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format" class="w-screenshot" sizes="(min-width: 744px) 744px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LL7U1EcPCyuDcmjPD13c.png?auto=format&amp;w=1488 1488w" width="744" height="596" /></figure>Make these tools part of your developer tooling <a href="#make-these-tools-part-of-your-developer-tooling" class="w-headline-link">#</a>

In this article, we've seen a series of tools for various purposes from testing a page before publishing it to monitoring the pages on a live website that give you transparency on how your website does in terms of discoverability for Google Search. Some of these tools might become useful parts of your development toolkit, others might be more like ad-hoc tools to identify the cause of a problem and fix affected pages. To learn more about Google Search for developers or [JavaScript SEO](https://developers.google.com/search/docs/guides/javascript-seo-basics), check out the official [Search for developers](https://developers.google.com/search) documentation.

<a href="/tags/seo/" class="w-chip">SEO</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/lighthouse/" class="w-chip">Lighthouse</a>

<span class="w-mr--sm"> Last updated: Jun 25, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/google-search-tools/index.md)

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
