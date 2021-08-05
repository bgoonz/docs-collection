<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#discover-performance-opportunities-with-lighthouse" class="w-toc__header--link">Discover performance opportunities with Lighthouse</a>

- [Run Lighthouse from your profile page](#run-lighthouse-from-your-profile-page)
- [Run Lighthouse from Chrome DevTools](#run-lighthouse-from-chrome-devtools)
- [Understand your report](#understand-your-report)
- [Next steps](#next-steps)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Discover performance opportunities with Lighthouse

Nov 5, 2018

[<img src="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kayce Basques" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kaycebasques/)

<a href="/authors/kaycebasques/" class="w-author__name-link">Kayce Basques</a>

- <a href="https://twitter.com/kaycebasques" class="w-author__link">Twitter</a>
- <a href="https://github.com/kaycebasques" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@kaycebasques" class="w-author__link">Glitch</a>
- <a href="https://kayce.basqu.es/" class="w-author__link">Blog</a>

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is a tool that helps you measure and find ways to improve a page's performance. Here's the general workflow for how you use Lighthouse:

1.  You tell Lighthouse what page to audit.
2.  Lighthouse loads that page and records how long the page takes to hit various performance milestones. These milestones are called **metrics**.
3.  Lighthouse gives you a report on how the page did. The report provides a score for each metric and a list of **opportunities** which, if you implement them, should make the page load faster.

Your mission is to improve your metrics scores over time, or at least make sure that they don't get worse. There's no way to work on metrics directly, though. Instead, you follow the opportunities that Lighthouse provides. Working on those opportunities tends to improve your metrics scores.

## Run Lighthouse from your profile page <a href="#run-lighthouse-from-your-profile-page" class="w-headline-link">#</a>

Run Lighthouse from your [web.dev profile](/measure) page:

1.  Provide any URL, and Lighthouse runs a series of audits generating a report of how well the page did.

2.  Review the audits report to identify areas in which your page can be improved.

3.  For each audit, you'll find guidance and immediate steps you can take to improve your scores.

## Run Lighthouse from Chrome DevTools <a href="#run-lighthouse-from-chrome-devtools" class="w-headline-link">#</a>

Chrome DevTools is the set of web developer tools that are built directly into the Google Chrome browser. You don't have to download anything to get DevTools. If you have Chrome, then you have DevTools.

1.  In Chrome, go to the page that you want to audit.
2.  Press `Control+Shift+J` (or `Command+Option+J` on Mac) to open DevTools.

<img src="https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format" alt="DevTools opened and docked to the right hand side of the screen." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/yfEKnxDJWT3JY6FWNiOZ.png?auto=format&amp;w=1600 1600w" width="800" height="475" />

Click the **Audits** tab. If you don't see this tab, click the » symbol and then select **Audits** from the list. Lighthouse is the engine that powers the **Audits** panel. That's why you see an image of a lighthouse.

<img src="https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format" alt="DevTools opened to the Lighthouse audits panel." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ugJI2r5k9y3puAuCX66f.png?auto=format&amp;w=1600 1600w" width="800" height="475" />

1.  Make sure the **Mobile** radio button is selected. When Lighthouse audits your page, it will simulate a mobile device's viewport and user agent string.
2.  Make sure the **Performance** checkbox is enabled. You can enable or disable the rest of the checkboxes in the **Audits** section. If you enable them, then you'll see a bunch of opportunities on ways to improve those other aspects of your page.
3.  Make sure the **Simulated Fast 3G, 4x CPU Slowdown** radio button is selected. Lighthouse doesn't actually throttle your network or CPU while it loads the page. Instead, it looks at how long the page took to load under normal conditions, and then it estimates how long it would have taken on a fast 3G network with a CPU that is 4 times less powerful than your machine's.
4.  Make sure that the **Clear Storage** checkbox is enabled. This option forces Lighthouse to go to the network for every page resource, which is how first-time visitors experience the page.
5.  Click **Run Audits**. After 5 to 10 seconds, Lighthouse shows you a report.

<img src="https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format" alt="DevTools showing a Lighthouse audit results report." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/wy0Zq7fFXXSBeGwK8OgP.png?auto=format&amp;w=1600 1600w" width="800" height="475" />

You can set the configuration options to whatever makes the most sense for your needs. If you don't understand them, the ones mentioned here are good defaults. If you can get your page fast with these options, then your page will be fast for everyone. The important thing is to stay consistent with the options across audits.

For example, if you run some audits with **Simulated Fast 3G**, **4x CPU Slowdown throttling enabled** and then other times you run audits with throttling disabled, your metrics scores will be significantly lower when you have throttling enabled. You might spend a lot of time trying to figure out why your page is so much slower now, when in reality the only thing that changed was your configuration.

### Understand your report <a href="#understand-your-report" class="w-headline-link">#</a>

The top-right of your report lists your overall performance score. 100 is a perfect score. Below the overall score are the metrics scores. [Lighthouse v3 Scoring Guide](https://developers.google.com/web/tools/lighthouse/v3/scoring) explains how each metric score contributes to the overall score.

<img src="https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format" alt="Lighthouse metrics scores showing green, passing scores, and yellow, warning scores." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/3kKMRoc1EY2kHDy8NIHi.png?auto=format&amp;w=1600 1600w" width="800" height="504" />

Hover over a metric to learn more about it. Click **Learn more** to read documentation about it.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/jnSx7PT4NXRW6c88vVjj.png?auto=format&amp;w=1600 1600w" width="800" height="504" />

Below your metrics scores you see screenshots of how the page looked while it loaded.

<img src="https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format" alt="DevTools&#39; filmstrip view of a page loading." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/hDyQRm4B1K1dRciNTvC1.png?auto=format&amp;w=1600 1600w" width="800" height="504" />

Below the screenshots you see opportunities for improving the page's performance.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xn9EDUNnxVhdD5FcfAMA.png?auto=format&amp;w=1600 1600w" width="800" height="504" />

Click an opportunity to learn more about it.

<img src="https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format" alt="An expanded audit titled Defer offscreen images shows a number of image paths that can be optimized." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/5dHwPPWIho3SckhvsGHt.png?auto=format&amp;w=1600 1600w" width="800" height="652" />

## Next steps <a href="#next-steps" class="w-headline-link">#</a>

Try using Lighthouse to audit your page, either from your profile page or from Chrome DevTools. Implement one of the opportunities, and then audit your page again to see how the change affected your report. Your metrics scores should ideally be a little better, and Lighthouse should no longer be flagging that opportunity as something to work on.

Running Lighthouse yourself is great for spot-checking issues, but ultimately you'll want to setup continuous monitoring to make sure your site stays healthy. To track your Lighthouse progress over time add your site to the your [profile](/measure).

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/devtools/" class="w-chip">DevTools</a>

<span class="w-mr--sm"> Last updated: Nov 5, 2018 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/discover-performance-opportunities-with-lighthouse/index.md)

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
