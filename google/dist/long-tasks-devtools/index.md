<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format" alt="An hourglass with sand pouring through it" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/QvWXvBSXsRKtpGOcakb5.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#are-long-javascript-tasks-delaying-your-time-to-interactive" class="w-toc__header--link">Are long JavaScript tasks delaying your Time to Interactive?</a>

- [What are Long Tasks?](#what-are-long-tasks)
- [Are there Long Tasks in my page that could delay interactivity?](#are-there-long-tasks-in-my-page-that-could-delay-interactivity)
- [What is causing my Long Tasks?](#what-is-causing-my-long-tasks)
- [What are common ways to optimize Long Tasks?](#what-are-common-ways-to-optimize-long-tasks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Are long JavaScript tasks delaying your Time to Interactive?

Learn to diagnose costly work preventing user interaction.

May 29, 2019

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

**tl;dr: Long Tasks can keep the main thread busy, delaying user interaction. Chrome DevTools can now visualize Long Tasks, making it easier to see tasks to optimize.**

If you use Lighthouse to audit your pages, you may be familiar with [Time to Interactive](/interactive), a metric representing when users can interact with your page and get a response. But did you know Long (JavaScript) Tasks can contribute heavily to a poor TTI?

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format" alt="Time to Interactive displayed in the Lighthouse Report" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4XCzYI9gaUJDTTJu9JxH.png?auto=format&amp;w=1600 1600w" width="800" height="169" />

## What are Long Tasks? <a href="#what-are-long-tasks" class="w-headline-link">#</a>

A [Long Task](https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API) is JavaScript code that monopolizes the main thread for extended periods of time, causing the UI to "freeze".

While a web page is loading, Long Tasks can tie up the main thread and make the page unresponsive to user input even if it looks ready. Clicks and taps often don't work because event listeners, click handlers etc have not yet been attached.

CPU-heavy Long Tasks occur due to complex work that takes longer than 50ms. Why 50ms? [The RAIL model](https://developers.google.com/web/fundamentals/performance/rail) suggests you process user input events in [50ms](https://developers.google.com/web/fundamentals/performance/rail#response) to ensure a visible response within 100ms. If you don't, the connection between action and reaction is broken.

## Are there Long Tasks in my page that could delay interactivity? <a href="#are-there-long-tasks-in-my-page-that-could-delay-interactivity" class="w-headline-link">#</a>

Until now, you've needed to manually look for "long yellow blocks" of script over 50ms long in [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) or use the [Long Tasks API](https://calendar.perfplanet.com/2017/tracking-cpu-with-long-tasks-api/) to figure out what tasks were delaying interactivity. This could be a little cumbersome.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format" alt="A DevTools Performance panel screenshot showing the differences between short tasks and long tasks" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/mSKnMWBcEBHWkXzTGCAH.png?auto=format&amp;w=1600 1600w" width="800" height="450" />

To help ease your performance auditing workflow, [DevTools now visualizes Long Tasks](https://developers.google.com/web/updates/2019/03/devtools#longtasks). Tasks (shown in gray) have red flags if they are Long Tasks.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format" alt="DevTools visualizing Long Tasks as gray bars in the Performance Panel with a red flag for long tasks" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/fyDPyO4XbSINMVpSSY9E.png?auto=format&amp;w=1600 1600w" width="800" height="450" />

- Record a trace in the [Performance panel](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/) of loading up a web page.
- Look for a red flag in the main thread view. You should see tasks are now gray ("Task").
- Hovering over a bar will let you know the duration of the task and if it was considered "long".

## What is causing my Long Tasks? <a href="#what-is-causing-my-long-tasks" class="w-headline-link">#</a>

To discover what is causing a long task, select the gray **Task** bar. In the drawer beneath, select **Bottom-Up** and **Group by Activity**. This allows you to see what activities contributed the most (in total) to the task taking so long to complete. Below, it appears to be a costly set of DOM queries.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format" alt="Selecting a long task (labelled &#39;Task&#39;) in DevTools allows us to drill-down into the activities that were responsible for it." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/7irBiePkFJRmzKMlcJUV.png?auto=format&amp;w=1600 1600w" width="800" height="450" />

## What are common ways to optimize Long Tasks? <a href="#what-are-common-ways-to-optimize-long-tasks" class="w-headline-link">#</a>

Large scripts are often a major cause of Long Tasks so consider [splitting them up](/reduce-javascript-payloads-with-code-splitting). Also keep an eye on third-party scripts; their Long Tasks can delay primary content from getting interactive.

Break all your work into small chunks (that run in &lt; 50ms) and run these chunks at the right place and time; the right place may even be off the main thread, in a worker. Phil Walton's [Idle Until Urgent](https://philipwalton.com/articles/idle-until-urgent/) is a good read on this topic.

Keep your pages responsive. Minimizing Long Tasks is a great way to ensure your users have a delightful experience when they visit your site. For more on Long Tasks, check out [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#tracking_long_tasks).

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: May 29, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/long-tasks-devtools/index.md)

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
