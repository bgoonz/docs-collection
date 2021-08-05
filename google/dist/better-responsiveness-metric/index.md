<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format" alt="Hand about to press a key in a keyboard" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/TwRpOuLV9Z5GEZkGmAXi.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#towards-a-better-responsiveness-metric" class="w-toc__header--link">Towards a better responsiveness metric</a>

- [What is First Input Delay?](#what-is-first-input-delay)
- [Why did we choose FID?](#why-did-we-choose-fid)
- [What improvements are we considering?](#what-improvements-are-we-considering)
- [Capture the full event duration](#capture-the-full-event-duration)
- [Group events into interactions](#group-events-into-interactions)
- [Aggregate all interactions per page](#aggregate-all-interactions-per-page)
- [How does this look like on web performance APIs?](#how-does-this-look-like-on-web-performance-apis)
- [What's missing from Event Timing?](#what's-missing-from-event-timing)
- [What can you try right now?](#what-can-you-try-right-now)
- [Feedback](#feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Towards a better responsiveness metric

Learn about our thoughts on measuring responsiveness and give us feedback.

Jun 21, 2021

[<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/SCSIEb0Qtv6tPWel5tfd.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Nicolás Peña Moreno" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/SCSIEb0Qtv6tPWel5tfd.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/SCSIEb0Qtv6tPWel5tfd.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/SCSIEb0Qtv6tPWel5tfd.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/SCSIEb0Qtv6tPWel5tfd.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/SCSIEb0Qtv6tPWel5tfd.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/npm/)

<a href="/authors/npm/" class="w-author__name-link">Nicolás Peña Moreno</a>

- <a href="https://twitter.com/NicPenaM" class="w-author__link">Twitter</a>
- <a href="https://github.com/npm1" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Annie Sullivan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Elo3rfkiDHm148ov4IZU.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/anniesullie/)

<a href="/authors/anniesullie/" class="w-author__name-link">Annie Sullivan</a>

- <a href="https://twitter.com/anniesullie" class="w-author__link">Twitter</a>
- <a href="https://github.com/anniesullie" class="w-author__link">GitHub</a>
- <a href="https://anniesullie.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Hongbo Song" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/MZfwZ8oVW8U6tzo5CXffcER0jR83/ieAP4AO0so7own9kFVW4.png?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/hbsong/)

<a href="/authors/hbsong/" class="w-author__name-link">Hongbo Song</a>

- <a href="https://twitter.com/HongboSong" class="w-author__link">Twitter</a>
- <a href="https://github.com/debugtive0517" class="w-author__link">GitHub</a>

On the Chrome Speed Metrics team, we're working on deepening our understanding of how quickly web pages respond to user input. We'd like to share some ideas for improving responsiveness metrics and hear your feedback.

This post will cover two main topics:

1.  Review our current responsiveness metric, First Input Delay (FID), and explain why we chose FID rather than some of the alternatives.
2.  Present some improvements we've been considering that should better capture the end-to-end latency of individual events. These improvements also aim to capture a more holistic picture of the overall responsiveness of a page throughout its lifetime.

## What is First Input Delay? <a href="#what-is-first-input-delay" class="w-headline-link">#</a>

The [First Input Delay (FID)](/fid/) metric measures how long it takes the browser to begin processing the first user interaction on a page. In particular, it measures the difference between the time when the user interacts with the device and the time when the browser is actually able to begin processing event handlers. FID is just measured for taps and key presses, which means that it only considers the very first occurrence of the following events:

- `click`
- `keydown`
- `mousedown`
- `pointerdown` (only if it is followed by `pointerup`)

The following diagram illustrates FID:

<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format" alt="First Input Delay measures from when input occurs to when input can be handled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/Jn1Xkxxf03O1llwutAq2.jpeg?auto=format&amp;w=1600 1600w" width="800" height="330" />

FID does not include the time spent running those event handlers, nor any work done by the browser afterwards to update the screen. It measures the amount of time the main thread was busy before having the chance to handle an input. This blocking time is usually caused by long JavaScript tasks, as these can't just be stopped at any time, so the current task must complete before the browser can start processing the input.

### Why did we choose FID? <a href="#why-did-we-choose-fid" class="w-headline-link">#</a>

We believe it is important to measure actual user experience in order to ensure that improvements on the metric result in real benefits to the user. We chose to measure FID because it represents the part of the user experience when the user decides to interact with a site that has just been loaded. FID captures some of the time that the user has to wait in order to see a response from their interaction with a site. In other words, FID is a lower bound on the amount of time a user waits after interacting.

Other metrics like [Total Blocking Time (TBT)](/tbt/) and [Time To Interactive (TTI)](/tti/) are based on [long tasks](https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API) and, like FID, also measure main thread blocking time during load. Since these metrics can be measured in both the field and the lab, many developers have asked why we don't prefer one of these over FID.

There are several reasons for this. Perhaps the most important reason is that these metrics do not measure the user experience directly. All of these metrics measure how much JavaScript runs on the page. While long running JavaScript does tend to cause problems to sites, these tasks don't necessarily impact the user experience if the user is not interacting with the page when they occur. A page can have a great score on TBT and TTI but feel slow or it can have a poor score while feeling fast for users. In our experience, these indirect measurements result in metrics that work great for some sites but not for most sites. In short, the fact that long tasks and TTI are not user-centric makes these weaker candidates.

While [lab measurement](/user-centric-performance-metrics/#in-the-lab) is certainly important and an invaluable tool for diagnostics, what really matters is how users experience sites. By having a user-centric metric that reflects real-user conditions, you are guaranteed to capture something meaningful about the experience. We decided to start with a small portion of that experience, even though we know this portion is not representative of the full experience. This is why we're working on capturing a larger chunk of the time a user waits for their inputs to be handled.

If you're interested in a deeper dive into some of the metrics we looked into, here is a [study about TBT](https://docs.google.com/document/d/1xCERB_X7PiP5RAZDwyIkODnIXoBk-Oo7Mi9266aEdGg/edit#heading=h.ypzsa9g2mv2g) and a [study about TTI](https://docs.google.com/document/d/1sHy6R58olikMTwk5hkJL4jd9S1jbksdMY5ve3Shdg-g/edit).

#### A note on measuring TTI in the field

Measuring TTI on real users in the field is problematic because it occurs very late in the page load. A 5-second network quiet window is required before TTI can even be computed. In the lab, you can choose to unload the page whenever you have all the data that you need, but that's not the case with real-user monitoring in the field. A user may choose to leave the page or interact with it at any time. In particular, users may choose to leave pages that take a long time to load, and an accurate TTI will not be recorded in those cases. When we measured TTI for real users in Chrome, we found that only about half of page loads reached TTI.

## What improvements are we considering? <a href="#what-improvements-are-we-considering" class="w-headline-link">#</a>

We would like to develop a new metric that extends what FID measures today yet still retains its strong connection to user experience.

We want the new metric to:

1.  Consider the responsiveness of all user inputs (not just the first one)
2.  Capture each event's full duration (not just the delay).
3.  Group events together that occur as part of the same logical user interaction and define that interaction's latency as the max duration of all its events.
4.  Create an aggregate score for all interactions that occur on a page, throughout its full lifecycle.

To be successful, we should be able to say with high confidence that if a site scores poorly on this new metric, it is not responding quickly to user interactions.

### Capture the full event duration <a href="#capture-the-full-event-duration" class="w-headline-link">#</a>

The first obvious improvement is to try to capture broader end-to-end latency of an event. As mentioned above, FID only captures the delay portion of the input event. It does not account for the time it takes the browser to actually process the event handlers.

There are various stages in the lifecycle of an event, as illustrated in this diagram:

<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format" alt="Five steps in the lifecycle of an event" sizes="(min-width: 610px) 610px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/l9CfiUoTxQQ7KmOzzXWn.jpeg?auto=format&amp;w=1220 1220w" width="610" height="383" />

The following are steps Chrome takes to process an input:

1.  The input from the user occurs. The time at which this occurs is the event's `timeStamp`.
2.  The browser performs hit testing to decide which HTML frame (main frame or some iframe) an event belongs to. Then the browser sends the event to the appropriate renderer process in charge of that HTML frame.
3.  The renderer receives the event and queues it so that it can process when it becomes available to do so.
4.  The renderer processes the event by running its handlers. These handlers may queue additional asynchronous work, such as `setTimeout` and fetches, that are part of the input handling. But at this point, the synchronous work is complete.
5.  A frame is painted to the screen that reflects the result of event handlers running. Note that any asynchronous tasks queued by the event handlers may still be unfinished.

The time between steps (1) and (3) above is an event's _delay_, which is what FID measures.

The time between steps (1) and (5) above is an event's _duration_. This is what our new metric will measure.

The event's duration includes the delay, but it also includes the work occurring in event handlers and the work the browser needs to do to paint the next frame after those handlers have run. The duration of an event is currently available in the [Event Timing API](/custom-metrics/#event-timing-api) via the entry's [duration](https://w3c.github.io/performance-timeline/#dom-performanceentry-duration) attribute.

#### A note on asynchronous tasks

Ideally we would love to also capture asynchronous work triggered by the event. But the problem is that the definition of asynchronous work triggered by the event is extremely tricky to get right. As an example, a developer may choose to begin some animation on event handlers and use a `setTimeout` to begin such animation. If we captured all tasks posted on the handlers, the animation would delay the completion time for as long as the animation runs. We believe it is worthwhile to investigate options on how to use heuristics to capture work that is asynchronous and which should be completed ASAP. However, we want to be really careful when doing so because we don't want to penalize work that is meant to take a long time to be finished. Thus, our initial effort will look at step 5 as the end point: it will only consider synchronous work and the amount of time it takes to paint after such work is completed. That is, we're not going to apply heuristics to guess the work that would be kicked off asynchronously in step 4 in our initial effort.

It's worth noting that, in many cases, work should be executed synchronously. In fact, this may be unavoidable because events are sometimes dispatched one after the other and the event handlers need to be executed in order. That said, we will still miss important work, like events which trigger fetching or which rely on important work to be done at the next `requestAnimationFrame` callback, for example.

### Group events into interactions <a href="#group-events-into-interactions" class="w-headline-link">#</a>

Extending the metric measurement from _delay_ to _duration_ is a good first step, but it still leaves a critical gap in the metric: it focuses on individual events and not the user experience of interacting with the page.

Many different events can fire as a result of a single user interaction, and separately measuring each doesn't build a clear picture of what the user experiences. We want to make sure our metric captures the full amount of time a user has to wait for a response when tapping, pressing keys, scrolling, and dragging as accurately as possible. So we're introducing the concept of **_interactions_** to measure the latency of each.

#### Interaction types <a href="#interaction-types" class="w-headline-link">#</a>

The following table lists the four interactions we want to define along with the DOM events that they're associated with. Note that this is not quite the same as the set of all events that are dispatched when such user interaction occurs. For instance, when a user scrolls, a scroll event is dispatched, but it happens after the screen has been updated to reflect the scrolling, so we don't consider it part of the interaction latency.

Interaction

Start / end

Desktop events

Mobile events

Keyboard

Key pressed

`keydown`

`keydown`

`keypress`

`keypress`

Key released

`keyup`

`keyup`

Tap or drag

Tap start or drag start

`pointerdown`

`pointerdown`

`mousedown`

`touchstart`

Tap up or drag end

`pointerup`

`pointerup`

`mouseup`

`touchend`

`click`

`mousedown`

`mouseup`

`click`

Scroll

N/A

DOM events for each interaction type.

The first three interactions listed above (keyboard, tap, and drag) are currently covered by FID. For our new responsiveness metric, we want to include scrolling as well, since scrolling is extremely common on the web and is a critical aspect of how responsive a page feels to users.

##### A note on start and end

Note that each of these interactions has two parts: when the user presses the mouse, finger, or key down and when they lift it up. We need to ensure our metric doesn't count time the user spends holding the finger down between these two actions as part of the page's latency!

##### Keyboard <a href="#keyboard" class="w-headline-link">#</a>

A keyboard interaction has two parts to it: when the user presses the key and when they release it. There are three associated events with this user interaction: `keydown`, `keyup`, and `keypress`. The following diagram illustrates the `keydown` and `keyup` delays and durations for a keyboard interaction:

<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format" alt="Keyboard interaction with disjoint event durations" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/zjRipPR9ioi551DUa3pj.jpeg?auto=format&amp;w=1600 1600w" width="800" height="286" />

In the diagram above, the durations are disjoint because the frame from `keydown` updates is presented before the `keyup` occurs, but this does not need to be the case always. In addition, note that a frame can be presented in the middle of a task in the renderer process since the last steps required to produce the frame are done outside of the renderer process.

The `keydown` and `keypress` occur when the user presses the key, while the `keyup` occurs when the user releases the key. Generally the main content update occurs when the key is pressed: text appears on the screen, or the modifier effect is applied. That said, we want to capture the more rare cases where `keyup` would also present interesting UI updates, so we want to look at the overall time taken.

In order to capture the overall time taken by the keyboard interaction, we can compute the maximum of the duration of the `keydown` and the `keyup` events.

The `keypress` event is deprecated, and it should be fired in the same task as the `keydown` event, so its duration will always overlap with the duration of the`keydown`.

###### A note on repeating keypresses

There is an edge case here worth mentioning: there may be cases where the user presses a key and takes a while to release it. In this case, the sequence of events dispatched can [vary](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#auto-repeat_handling). In these cases, we would consider there to be one interaction per `keydown`, which may or may not have a corresponding `keyup`.

##### Tap <a href="#tap" class="w-headline-link">#</a>

Another important user interaction is when the user taps or clicks on a website. Similar to `keypress`, some events are fired as the user presses down, and others as they release, as shown in the diagram above, Note the events associated with a tap are a little different on desktop vs mobile.

For a tap or click, the release is generally the one which triggers the majority of reactions, but, as with keyboard interactions, we want to capture the full interaction. And in this case it's more important to do so because having some UI updates upon tap press is not actually that uncommon.

We'd like to include the event durations for all of these events, but as many of them overlap completely, we need to measure just `pointerdown`, `pointerup`, and `click` to cover the full interaction.

###### Can we narrow further to just `pointerdown` and `pointerup`?

One initial thought would be to use the `pointerdown` and `pointerup` events and assume that they cover all of the durations that we're interested in. Sadly, this is not the case, as this [edge case](https://output.jsbin.com/buyiyew/quiet) shows. Try opening this site on mobile, or with mobile emulation, and tapping where it says "Click me". This site triggers the [browser tap delay](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away). It can be seen that the `pointerdown`, `pointerup`, and `touchend` are dispatched quickly, whereas the `mousedown`, `mouseup`, and `click` wait for the delay before being dispatched. This means that if we only looked at `pointerdown` and `pointerup` then we'd miss the duration from the synthetic events, which is large due to the browser tap delay and should be included. So we should measure `pointerdown`, `pointerup`, and `click` to cover the full interaction.

##### Drag <a href="#drag" class="w-headline-link">#</a>

We decided to include dragging as well since it has similar associated events and since it generally causes important UI updates to sites. But for our metric we intend to only consider the drag start and the drag end - the initial and final parts of the drag. This is to make it easier to reason about as well as make the latencies comparable with the other interactions considered. This is consistent with our decision to exclude continuous events such as `mouseover`.

We're also not considering drags implemented via the [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) because they only work on desktop.

##### Scrolling <a href="#scrolling" class="w-headline-link">#</a>

One of the most common forms of interacting with a site is via scrolling. For our new metric, we'd like to measure the latency for the initial scrolling interaction of the user. In particular, we care about the initial reaction of the browser to the fact that the user requested a scroll. We will not cover the whole scrolling experience. That is, scrolling produces many frames, and we'll focus our attention on the initial frame produced as a reaction to the scroll.

Why just the first one? For one, subsequent frames may be captured by a separate smoothness [proposal](https://docs.google.com/presentation/d/1VwGIzypntWNosCTXWMsUI6ifw4sEKSRQgnwx3P_wqVg/edit#slide=id.p). That is, once the user has been shown the first result of scrolling, the rest should be measured in terms of how smooth the scrolling experience feels. Therefore, we think that the smoothness effort could better capture this. So, as with FID, we choose to stick to discrete user experiences: user experiences that have clear points in time associated with them and for which we can easily compute their latency. Scrolling as a whole is a continuous experience, so we do not intend to measure all of it in this metric.

So why measure scrolls? The scrolling performance we've gathered in Chrome shows that scrolling is generally very fast. That said, we still want to include initial scroll latencies in our new metric for various reasons. First, scrolling is fast only because it has been optimized so much, because it is so important. But there are still ways for a website to bypass some of the performance gains that the browser offers. The most common one in Chrome is to force scrolling to happen on the main thread. So our metric should be able to say when this happens and causes poor scrolling performance for users. Second, scrolling is just too important to ignore. We worry that if we exclude scrolling then we'll have a big blindspot, and scrolling performance could decrease over time without web developers properly noticing.

There are several events that are dispatched when a user scrolls, such as `touchstart`, `touchmove`, and `scroll`. Except for the scroll event, this is largely dependent on the device used for scrolling: touch events are dispatched when scrolling with the finger on mobile devices, while wheel events occur when scrolling with a mouse wheel. The scroll events are fired after initial scrolling has completed. And in general, no DOM event blocks scrolling, unless the website uses [non-passive event listeners](/uses-passive-event-listeners/). So we think of scrolling as decoupled from DOM Events altogether. What we want to measure is the time from when the user moves enough to produce a scroll gesture until the first frame that shows that scrolling happened.

#### How to define the latency of an interaction? <a href="#how-to-define-the-latency-of-an-interaction" class="w-headline-link">#</a>

As we noted above, interactions that have a "down" and "up" component need to be considered separately in order to avoid attributing the time the user spent holding their finger down.

For these types of interactions, we'd like the latency to involve the durations of all events associated with them. Since event durations for each "down" and "up" part of the interaction can overlap, the simplest definition of interaction latency that achieves this is the maximum duration of any event associated with it. Referring back to the keyboard diagram from earlier, this would be the `keydown` duration, as it is longer than the `keyup`:

<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format" alt="Keyboard interaction with maximum duration highlighted" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/WFPm4W86CqhFsNc1UZuW.jpeg?auto=format&amp;w=1600 1600w" width="800" height="311" />

The `keydown` and `keyup` durations may overlap as well. This may happen for instance when the frame presented for both events is the same, as in the following diagram:

<img src="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format" alt="Keyboard interaction where press and release occur in the same frame" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/kns0INkO77RkiEStzHWYrugyWj32/e7htYAZb44AW4UeplBwJ.jpeg?auto=format&amp;w=1600 1600w" width="800" height="311" />

There's are pros and cons to this approach of using the maximum, and we're interested in [hearing your feedback](#feedback):

- **Pro**: It is aligned with how we intend to measure scroll in that it only measures a single duration value.
- **Pro**: It aims to reduce noise for cases like keyboard interactions, where the `keyup` usually does nothing and where the user may execute the key press and release quickly or slowly.
- **Con**: It does not capture the full wait time of the user. For instance, it will capture the start or end of a drag, but not both.

For scrolling (which just has a single associated event) we'd like to define its latency as the time it takes for the browser to produce the first frame as a result of scrolling. That is, the latency is the delta between the event `timeStamp` of the first DOM event (like `touchmove`, if using a finger) that is large enough to trigger a scroll and the first paint which reflects the scrolling taking place.

### Aggregate all interactions per page <a href="#aggregate-all-interactions-per-page" class="w-headline-link">#</a>

Once we've defined what the latency of an interaction is, we'll need to compute an aggregate value for a page load, which may have many user interactions. Having an aggregated value enables us to:

- Form correlations with business metrics.
- Evaluate correlations with other performance metrics. Ideally, our new metric will be sufficiently independent that it adds value to the existing metrics.
- Easily expose values in tooling in ways that are easy to digest.

In order to perform this aggregation we need to solve two questions:

1.  What numbers do we try to aggregate?
2.  How do we aggregate those numbers?

We're exploring and evaluating several options. We welcome your thoughts on this aggregation.

One option is to define a budget for the latency of an interaction, which may depend on the type (scroll, keyboard, tap, or drag). So for example if the budget for taps is 100 ms and the latency of a tap is 150 ms then the amount over budget for that interaction would be 50 ms. Then we could compute the maximum amount of latency that goes over the budget for any user interaction in the page.

Another option is to compute the average or median latency of the interactions throughout the life of the page. So if we had latencies of 80 ms, 90 ms, and 100 ms, then the average latency for the page would be 90 ms. We could also consider the average or median "over budget" to account for different expectations depending on the type of interaction.

## How does this look like on web performance APIs? <a href="#how-does-this-look-like-on-web-performance-apis" class="w-headline-link">#</a>

### What's missing from Event Timing? <a href="#what&#39;s-missing-from-event-timing" class="w-headline-link">#</a>

Unfortunately not all of the ideas presented in this post can be captured using the Event Timing API. In particular, there's no simple way to know the events associated with a given user interaction with the API. In order to do this, we've [proposed adding an `interactionID` to the API](https://docs.google.com/presentation/d/1nxNFwsGqYy7WmIZ3uv_0HsSIQMSXQA9_PqlOD3V74Us/edit#slide=id.p).

Another shortcoming of the Event Timing API is that there is no way to measure the scroll interaction, so we're [working on enabling these measurements](https://docs.google.com/presentation/d/1qVdMlqgi9uuyx9imCauzMjLGHQK6TGOIZV_RnlGBKis/edit) (via Event Timing or a separate API).

### What can you try right now? <a href="#what-can-you-try-right-now" class="w-headline-link">#</a>

Right now, it is still possible to compute the maximum latency for taps/drags and for keyboard interactions. The following code snippet would produce these two metrics.

    let maxTapOrDragDuration = 0;
    let maxKeyboardDuration = 0;
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        switch(entry.name) {
          case "keydown":
          case "keyup":
            maxKeyboardDuration = Math.max(maxKeyboardDuration,
                entry.duration);
            break;
          case "pointerdown":
          case "pointerup":
          case "click":
            maxTapOrDragDuration = Math.max(maxTapOrDragDuration,
                entry.duration);
            break;
        }
      });
    });
    observer.observe({type: "event", minDuration: 16, buffered: true});
    // We can report maxTapDragDuration and maxKeyboardDuration when sending
    // metrics to analytics.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

Let us know what you think about these ideas by emailing: web-vitals-feedback@googlegroups.com!

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jun 21, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/better-responsiveness-metric/index.md)

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
