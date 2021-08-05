<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/5fmiwGShxNngW0sOeKvf.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#fix-an-overloaded-server" class="w-toc__header--link">Fix an overloaded server</a>

- [Overview](#overview)
- [Assess](#assess)
- [Stabilize](#stabilize)
- [Rate Limiting](#rate-limiting)
- [HTTP Caching](#http-caching)
- [Graceful Degradation](#graceful-degradation)
- [Improve](#improve)
- [Use a content delivery network (CDN)](<#use-a-content-delivery-network-(cdn)>)
- [Scale compute resources](#scale-compute-resources)
- [Enable compression](#enable-compression)
- [Optimize images and media](#optimize-images-and-media)
- [Minify JS and CSS](#minify-js-and-css)
- [Monitor](#monitor)
- [Fix](#fix-8)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Fix an overloaded server

How to determine a server's bottleneck, quickly fix the bottleneck, improve server performance, and prevent regressions.

Mar 31, 2020

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

## Overview <a href="#overview" class="w-headline-link">#</a>

This guide shows you how to fix an overloaded server in 4 steps:

1.  [Assess](#assess): Determine the server's bottleneck.
2.  [Stabilize](#stabilize): Implement quick fixes to mitigate impact.
3.  [Improve](#improve): Augment and optimize server capabilities.
4.  [Monitor](#monitor): Use automated tools to help prevent future issues.

If you have questions or feedback on this guide, or you want to share your own tips and tricks, please leave a comment in [PR \#2479](https://github.com/GoogleChrome/web.dev/pull/2479).

## Assess <a href="#assess" class="w-headline-link">#</a>

When traffic overloads a server, one or more of the following can become a bottleneck: CPU, network, memory, or disk I/O. Identifying which of these is the bottleneck makes it possible to focus efforts on the most impactful mitigations.

- CPU: CPU usage that is consistently over 80% should be investigated and fixed. Server performance often degrades once CPU usage reaches ~80-90%, and becomes more pronounced as usuage gets closer to 100%. The CPU utilization of serving a single request is negligible, but doing this at the scale encountered during traffic spikes can sometimes overwhelm a server. Offloading serving to other infrastructure, reducing expensive operations, and limiting the quantity of requests will reduce CPU utilization.
- Network: During periods of high traffic, the network throughput required to fulfill user requests can exceed capacity. Some sites, depending on the hosting provider, may also hit caps regarding cumulative data transfer. Reducing the size and quantity of data transferred to and from the server will remove this bottleneck.
- Memory: When a system doesn't have enough memory, data has to be offloaded to disk for storage. Disk is considerably slower to access than memory, and this can slow down an entire application. If memory becomes completely exhausted, it can result in [Out of Memory](https://en.wikipedia.org/wiki/Out_of_memory) (OOM) errors. Adjusting memory allocation, fixing memory leaks, and upgrading memory can remove this bottleneck.
- Disk I/O: The rate at which data can be read or written from disk is constrained by the disk itself. If disk I/O is a bottleneck, increasing the amount of data cached in memory can alleviate this issue (at the cost of increased memory utilization). If this doesn't work, it may be necessary to upgrade your disks.

The techniques in this guide focus on addressing CPU and network bottlenecks. For most sites, CPU and network will be the most relevant bottlenecks during a traffic spike.

Running [`top`](https://linux.die.net/man/1/top) on the affected server is a good starting place for investigating bottlenecks. If available, supplement this with historical data from your hosting provider or monitoring tooling.

## Stabilize <a href="#stabilize" class="w-headline-link">#</a>

An overloaded server can quickly lead to [cascading failures](https://en.wikipedia.org/wiki/Cascading_failure) elsewhere in the system. Thus, it's important to stabilize the server before attempting to make more significant changes.

### Rate Limiting <a href="#rate-limiting" class="w-headline-link">#</a>

Rate limiting protects infrastructure by limiting the number of incoming requests. This is increasingly important as server performance degrades: as response times increase, users tend to aggressively refresh the page - increasing the server load even further.

#### Fix <a href="#fix" class="w-headline-link">#</a>

Although rejecting a request is relatively inexpensive, the best way to protect your server is to handle rate limiting somewhere upstream from it - for instance, via a load balancer, reverse proxy, or CDN.

Instructions:

- [NGINX](https://www.nginx.com/blog/rate-limiting-nginx/)
- [HAProxy](https://www.haproxy.com/blog/four-examples-of-haproxy-rate-limiting/)
- [Microsoft IIS](https://docs.microsoft.com/en-us/iis/configuration/system.applicationhost/sites/site/limits)

Further reading:

- [Rate-limiting Strategies & Techniques](https://cloud.google.com/solutions/rate-limiting-strategies-techniques)

### HTTP Caching <a href="#http-caching" class="w-headline-link">#</a>

Look for ways to more aggressively cache content. If a resource can be served from an HTTP cache (whether it's the browser cache or a CDN), then it doesn't need to be requested from the origin server, which reduces server load.

HTTP headers like [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control), [`Expires`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires), and [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) indicate how a resource should be cached by an HTTP cache. Auditing and fixing these headers will improve caching.

Although [service workers](https://developers.google.com/web/fundamentals/primers/service-workers) can also be used for caching, they utilize a separate [cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) and are a supplement, rather than a replacement, for proper HTTP caching. For this reason, when handling an overloaded server, efforts should be focused on optimizing HTTP caching.

#### Diagnose <a href="#diagnose" class="w-headline-link">#</a>

Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) and look at the [Serve static assets with an efficient cache policy](https://developers.google.com/web/tools/lighthouse/audits/cache-policy) audit to view a list of resources with a short to medium [time to live](https://en.wikipedia.org/wiki/Time_to_live) (TTL). For each listed resource, consider if the TTL should be increased. As a rough guideline:

- Static resources should be cached with a long TTL (1 year).
- Dynamic resources should be cached with a short TTL (3 hours).

#### Fix <a href="#fix-2" class="w-headline-link">#</a>

Set the [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) header's `max-age` directive to the appropriate number of seconds.

Instructions:

- [NGINX](http://nginx.org/en/docs/http/ngx_http_headers_module.html)
- [Apache](http://httpd.apache.org/docs/current/mod/mod_expires.html)
- [Microsoft](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/staticcontent/clientcache)

Note: The `max-age` directive is just one of many caching directives. There are many other directives and headers that will affect the caching behavior of your application. For a more in-depth explanation of caching strategy it is highly recommended that you read [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching).

### Graceful Degradation <a href="#graceful-degradation" class="w-headline-link">#</a>

Graceful degradation is the strategy of temporarily reducing functionality in order to shed excess load from a system. This concept can be applied in many different ways: for example, serving a static text page instead of a full-featured application, disabling search or returning fewer search results, or disabling certain expensive or non-essential features. Emphasis should be placed on removing functionalities that can be safely and easily removed with minimal business impact.

## Improve <a href="#improve" class="w-headline-link">#</a>

### Use a content delivery network (CDN) <a href="#use-a-content-delivery-network-(cdn)" class="w-headline-link">#</a>

Serving static assets can be offloaded from your server to a content delivery network (CDN), thereby reducing the load.

The primary function of a CDN is to deliver content to users quickly by providing a large network of servers that are located close to users. However, most CDNs also offer additional performance-related features like compression, load balancing, and media optimization.

#### Set up a CDN <a href="#set-up-a-cdn" class="w-headline-link">#</a>

CDNs benefit from scale, so operating your own CDN rarely makes sense. A basic CDN configuration is fairly quick to set up (~30 minutes) and consists of updating DNS records to point at the CDN.

#### Optimize CDN Usage <a href="#optimize-cdn-usage" class="w-headline-link">#</a>

#### Diagnose <a href="#diagnose-2" class="w-headline-link">#</a>

Identify resources that are not being served from a CDN (but should be) by running [WebPageTest](https://webpagetest.org/). On the results page, click on the square above 'Effective use of CDN' to see the list of resources that should be served from a CDN.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format" alt="WebPageTest results" class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/awCu4XpFI9IQ1bfhIaWJ.jpg?auto=format&amp;w=600 600w" width="300" height="109" /><figcaption>WebPageTest results</figcaption></figure>#### Fix <a href="#fix-3" class="w-headline-link">#</a>

If a resource is not being cached by the CDN, check that the following conditions are met:

- It has a [`Cache-Control: public`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#Cacheability) header.
- It has a [`Cache-Control: s-maxage`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#Expiration), [`Cache-Control: max-age`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#Expiration), or [`Expires`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires) header.
- It has a [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length), [`Content-Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range), or [`Transfer-Encoding header`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding).

### Scale compute resources <a href="#scale-compute-resources" class="w-headline-link">#</a>

The decision to scale compute resources should be made carefully. Although it is often necessary to scale compute resources, doing so prematurely can generate unnecessary architectural complexity and financial costs.

#### Diagnose <a href="#diagnose-3" class="w-headline-link">#</a>

A high [Time To First Byte](/time-to-first-byte/) (TTFB) can be a sign that a server is nearing its capacity. You can find this information in the Lighthouse [Reduce server response times (TTFB)](https://developers.google.com/web/tools/lighthouse/audits/ttfb) audit.

To investigate further, use a monitoring tool to assess CPU usage. If current or anticipated CPU usage exceeds 80% you should consider increasing your servers.

#### Fix <a href="#fix-4" class="w-headline-link">#</a>

Adding a load balancer makes it possible to distribute traffic across multiple servers. A load balancer sits in front of a pool of servers and routes traffic to the appropriate server. Cloud providers offer their own load balancers ([GCP](https://cloud.google.com/load-balancing), [AWS](https://aws.amazon.com/elasticloadbalancing/), [Azure](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview)) or you can set up your own using [HAProxy](https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts) or [NGINX](http://nginx.org/en/docs/http/load_balancing.html). Once a load balancer is in place, additional servers can be added.

In addition to load balancing, most cloud providers offer autoscaling ([GCP](https://cloud.google.com/compute/docs/load-balancing-and-autoscaling), [AWS](https://docs.aws.amazon.com/ec2/index.html), [Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-overview)). Autoscaling works in conjunction with load balancing - autoscaling automatically scales compute resources up and down given demand at a given time. That being said, autoscaling is not magical - it takes time for new instances to come online and it requires significant configuration. Because of the additional complexity that autoscaling entails, a simpler load balancer-based setup should be considered first.

### Enable compression <a href="#enable-compression" class="w-headline-link">#</a>

Text-based resources should be compressed using gzip or brotli. Gzip can reduce the transfer size of these resources by ~70%.

#### Diagnose <a href="#diagnose-4" class="w-headline-link">#</a>

Use the Lighthouse [Enable text compression](https://developers.google.com/web/tools/lighthouse/audits/text-compression) audit to identify resources that should be compressed.

#### Fix <a href="#fix-5" class="w-headline-link">#</a>

Enable compression by updating your server configuration. Instructions:

- [NGINX](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)
- [Apache](https://httpd.apache.org/docs/trunk/mod/mod_deflate.html)
- [Microsoft](https://docs.microsoft.com/en-us/iis/extensions/iis-compression/iis-compression-overview)

### Optimize images and media <a href="#optimize-images-and-media" class="w-headline-link">#</a>

[Images make up the majority of the file size of most websites](https://images.guide/#introduction); optimizing images can quickly and significantly reduce the size of a site.

#### Diagnose <a href="#diagnose-5" class="w-headline-link">#</a>

Lighthouse has a variety of audits that flag potential image optimizations. Alternatively, another strategy is to use DevTools to identify the largest image files - these images will likely be good candidates for optimization.

Relevant Lighthouse audits:

- [Properly size images](https://developers.google.com/web/tools/lighthouse/audits/oversized-images)
- [Defer offscreen images](https://developers.google.com/web/tools/lighthouse/audits/offscreen-images)
- [Efficiently encode images](/uses-optimized-images/)
- [Serve images in next-gen formats](https://developers.google.com/web/tools/lighthouse/audits/webp)
- [Use video formats for animated content](/efficient-animated-content/)

Chrome DevTools workflow:

- [Log network activity](https://developers.google.com/web/tools/chrome-devtools/network#load)
- Click **Img** to [filter out non-image resources](https://developers.google.com/web/tools/chrome-devtools/network/reference#filter-by-type)
- Click the **Size** column to sort the image files by size

#### Fix <a href="#fix-6" class="w-headline-link">#</a>

_If you have limited time…_

Focus your time on Identifying large and frequently loaded images and manually optimizing them with a tool like [Squoosh](https://squoosh.app/). Hero images are often good candidates for optimization.

Things to keep in mind:

- Size: Images should be no larger than necessary.
- Compression: Generally speaking, a quality level of 80-85 will have a minimal effect on image quality while yielding a 30-40% reduction in file size.
- Format: Use JPEGs for photos rather than PNG; use MP4 for [animated content](/replace-gifs-with-videos/) rather than GIF.

_If you have more time…_

Consider setting up an image CDN if images make up a substantial portion of your site. Image CDNs are designed for serving and optimizing images and they will offload image serving from the origin server. Setting up an image CDN is straightforward but requires updating existing image URLs to point at the image CDN.

Further reading:

- [Use image CDNs to optimize images](/image-cdns/#optimize-your-images)
- [images.guide](https://images.guide/)

### Minify JS and CSS <a href="#minify-js-and-css" class="w-headline-link">#</a>

Minification removes unnecessary characters from JavaScript and CSS.

#### Diagnose <a href="#diagnose-6" class="w-headline-link">#</a>

Use the [Minify CSS](https://developers.google.com/web/tools/lighthouse/audits/minify-css) and [Minify JavaScript](/unminified-javascript/) Lighthouse audits to identify resources that are in need of minification.

#### Fix <a href="#fix-7" class="w-headline-link">#</a>

If you have limited time, focus on minifying your JavaScript. Most sites have more JavaScript than CSS, so this will be more impactful.

- [Minify JavaScript](/reduce-network-payloads-using-text-compression/)
- [Minify CSS](/minify-css/)

## Monitor <a href="#monitor" class="w-headline-link">#</a>

Server monitoring tools provide data collection, dashboards, and alerting regarding server performance. Their usage can help prevent and mitigate future server performance issues.

A monitoring setup should be kept as simple as possible. Excessive data collection and alerting has its costs: the greater the scope or frequency of data collection, the more expensive it is to collect and store; excessive alerting inevitably leads to ignored pages.

Alerting should use metrics that consistently and accurately detect issues. Server response time (latency) is a metric that works particularly well for this: it catches a wide variety of issues and correlates directly with user experience. Alerting based on lower-level metrics like CPU usage can be a useful supplement but will catch a smaller subset of issues. In addition, alerting should be based on the performance observed at the tail (in the other words the 95th or 99th percentiles), rather than averages. Otherwise, averages can easily obscure issues that don't affect all users.

### Fix <a href="#fix-8" class="w-headline-link">#</a>

All major cloud providers offer their own monitoring tooling ([GCP](https://codelabs.developers.google.com/codelabs/cloud-monitoring-alerting/index.html?index=..%2F..index), [AWS](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitoring-system-instance-status-check.html), [Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/)). In addition, [Netdata](https://github.com/topics/monitoring) is an excellent free and open-source alternative. Regardless of which tool you choose, you will need to install the tool's monitoring agent on each server that you want to monitor. Once complete, make sure to set up alerting.

Instructions:

- [GCP](https://cloud.google.com/monitoring/alerts)
- [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html)
- [Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/app/alerts)
- [Netdata](https://docs.netdata.cloud/health/)

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Mar 31, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/overloaded-server/index.md)

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
