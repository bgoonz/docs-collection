<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#fixing-layout-instability" class="w-toc__header--link">Fixing layout instability</a>

- [Measuring layout shifts](#measuring-layout-shifts)
- [Measuring layout shifts in WebPageTest](#measuring-layout-shifts-in-webpagetest)
- [Identifying causes of layout instability](#identifying-causes-of-layout-instability)
- [Fixing layout instability](#fixing-layout-instability)
- [Verifying the optimizations](#verifying-the-optimizations)
- [Conclusion](#conclusion)
- [(One more thing) Measuring layout instability experienced by real users](<#(one-more-thing)-measuring-layout-instability-experienced-by-real-users>)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Fixing layout instability

A walkthrough of using WebPageTest to identify and fix layout instability issues.

Sep 30, 2019

[<img src="https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rick Viscomi" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/oWRqaR6XXwIdNXPLpUMn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rviscomi/)

<a href="/authors/rviscomi/" class="w-author__name-link">Rick Viscomi</a>

- <a href="https://twitter.com/rick_viscomi" class="w-author__link">Twitter</a>
- <a href="https://github.com/rviscomi" class="w-author__link">GitHub</a>

In an earlier post I wrote about [measuring Cumulative Layout Shift](https://dev.to/chromiumdev/measuring-cumulative-layout-shift-cls-in-webpagetest-5cle) (CLS) in WebPageTest. CLS is an aggregation of all layout shifts, so in this post I thought it'd be interesting to dive deeper and inspect each individual layout shift on a page to try to understand what could be causing the instability and actually try to fix the issue(s).

## Measuring layout shifts <a href="#measuring-layout-shifts" class="w-headline-link">#</a>

Using the Layout Instability API, we can get a list of all layout shift events on a page:

    new Promise(resolve => {
      new PerformanceObserver(list => {
        resolve(list.getEntries().filter(entry => !entry.hadRecentInput));
      }).observe({type: "layout-shift", buffered: true});
    }).then(console.log);

This produces an array of layout shifts that are not preceded by input events:

    [
      {
        "name": "",
        "entryType": "layout-shift",
        "startTime": 210.78500000294298,
        "duration": 0,
        "value": 0.0001045969445437389,
        "hadRecentInput": false,
        "lastInputTime": 0
      }
    ]

In this example there was a single very tiny shift of 0.01% at 210ms.

Knowing the time and severity of the shift is useful to help narrow down what could have caused the shift. Let's turn back to [WebPageTest](https://webpagetest.org) for a lab environment to do more testing.

## Measuring layout shifts in WebPageTest <a href="#measuring-layout-shifts-in-webpagetest" class="w-headline-link">#</a>

Similar to measuring CLS in WebPageTest, measuring individual layout shifts will require a custom metric. Fortunately, the process is easier now that Chrome 77 is stable. The Layout Instability API is enabled by default, so you should be able to execute that JS snippet on any website within Chrome 77 and get results immediately. In WebPageTest, you can use the default Chrome browser and not have to worry about command line flags or using Canary.

So let's modify that script to produce a custom metric for WebPageTest:

    [LayoutShifts]
    return new Promise(resolve => {
      new PerformanceObserver(list => {
        resolve(JSON.stringify(list.getEntries().filter(entry => !entry.hadRecentInput)));
      }).observe({type: "layout-shift", buffered: true});
    });

The promise in this script resolves to a JSON representation of the array rather than the array itself. This is because custom metrics can only produce primitive data types like strings or numbers.

The website I'll use for the test is [ismyhostfastyet.com](https://ismyhostfastyet.com/), a site I built to compare real world loading performance of web hosts.

## Identifying causes of layout instability <a href="#identifying-causes-of-layout-instability" class="w-headline-link">#</a>

In the [results](http://webpagetest.org/custom_metrics.php?test=190918_6E_ef3c166b4a34033171d47e389cf82939&run=5&cached=0) we can see the LayoutShifts custom metric has this value:

    [
      {
        "name": "",
        "entryType": "layout-shift",
        "startTime": 3087.2349999990547,
        "duration": 0,
        "value": 0.3422101449275362,
        "hadRecentInput": false,
        "lastInputTime": 0
      }
    ]

To summarize, there is a single layout shift of 34.2% happening at 3087ms. To help identify the culprit, let's use WebPageTest's [filmstrip view](http://webpagetest.org/video/compare.php?tests=190918_6E_ef3c166b4a34033171d47e389cf82939-r%3A5-c%3A0&thumbSize=200&ival=100&end=visual).

<figure><img src="https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format" alt="Two cells in the filmstrip, showing screenshots before and after the layout shift." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/h1QidJnqWmFsk25yq1iu.png?auto=format&amp;w=1600 1600w" width="800" height="341" /><figcaption>Two cells in the filmstrip, showing screenshots before and after the layout shift.</figcaption></figure>Scrolling to the ~3 second mark in the filmstrip shows us exactly what the cause of the 34% layout shift is: the colorful table. The website asynchronously fetches a JSON file, then renders it to a table. The table is initially empty, so waiting to fill it up when the results are loaded is causing the shift.

<figure><img src="https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format" alt="Web font header appearing out of nowhere." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/hlbsiYTsFfVjpNk18ii4.png?auto=format&amp;w=1600 1600w" width="800" height="336" /><figcaption>Web font header appearing out of nowhere.</figcaption></figure>But that's not all. When the page is visually complete at ~4.3 seconds, we can see that the `<h1>` of the page "Is my host fast yet?" appears out of nowhere. This happens because the site uses a web font and hasn't taken any steps to optimize rendering. The layout doesn't actually appear to shift when this happens, but it's still a poor user experience to have to wait so long to read the title.

## Fixing layout instability <a href="#fixing-layout-instability" class="w-headline-link">#</a>

Now that we know the asynchronously generated table is causing one-third of the viewport to shift, it's time to fix it. We don't know the contents of the table until the JSON results are actually loaded, but we can still populate the table with some kind of _placeholder data_ so that the layout itself is relatively stable when the DOM is rendered.

Here's the code to generate placeholder data:

    function getRandomFiller(maxLength) {
      var filler = '█';
      var len = Math.ceil(Math.random() * maxLength);
      return new Array(len).fill(filler).join('');
    }

    function getRandomDistribution() {
      var fast = Math.random();
      var avg = (1 - fast) * Math.random();
      var slow = 1 - (fast + avg);
      return [fast, avg, slow];
    }

    // Temporary placeholder data.
    window.data = [];
    for (var i = 0; i < 36; i++) {
      var [fast, avg, slow] = getRandomDistribution();
      window.data.push({
        platform: getRandomFiller(10),
        client: getRandomFiller(5),
        n: getRandomFiller(1),
        fast,
        avg,
        slow
      });
    }
    updateResultsTable(sortResults(window.data, 'fast'));

The placeholder data is generated randomly before being sorted. It includes the "█" character repeated a random number of times to create visual placeholders for the text and a randomly generated distribution of the three main values. I also added some styles to desaturate all color from the table to make it clear that the data is not fully loaded yet.

The appearance of the placeholders you use don't matter for layout stability. The purpose of the placeholders is to assure users that content _is_ coming and the page isn't broken.

Here's what the placeholders look like while the JSON data is loading:

<figure><img src="https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format" alt="The data table is rendered with placeholder data." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/hF2EmHSpJArXA6TQ6Cm7.png?auto=format&amp;w=1600 1600w" width="800" height="486" /><figcaption>The data table is rendered with placeholder data.</figcaption></figure>Addressing the web font issue is much simpler. Because the site is using Google Fonts, we just need to pass in the `display=swap` property in the CSS request. That's all. The Fonts API will add the `font-display: swap` style in the font declaration, enabling the browser to render text in a fallback font immediately. Here's the corresponding markup with the fix included:

    <link href="https://fonts.googleapis.com/css?family=Chivo:900&display=swap" rel="stylesheet">

## Verifying the optimizations <a href="#verifying-the-optimizations" class="w-headline-link">#</a>

After rerunning the page through WebPageTest, we can generate a before and after [comparison](http://webpagetest.org/video/compare.php?tests=190918_6E_ef3c166b4a34033171d47e389cf82939%2C190918_WF_60f9c9a1c669b20039860c09ca27df7c&thumbSize=200&ival=100&end=visual) to visualize the difference and measure the new degree of layout instability:

<figure><img src="https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format" alt="WebPageTest filmstrip showing both sites loading side-by-side with and without layout optimizations." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/1BJlP3HxeynRw0gRt52H.png?auto=format&amp;w=1600 1600w" width="800" height="288" /><figcaption>WebPageTest filmstrip showing both sites loading side-by-side with and without layout optimizations.</figcaption></figure>[
      {
        "name": "",
        "entryType": "layout-shift",
        "startTime": 3070.9349999997357,
        "duration": 0,
        "value": 0.000050272187989256116,
        "hadRecentInput": false,
        "lastInputTime": 0
      }
    ]

According to the [custom metric](http://webpagetest.org/custom_metrics.php?test=190918_WF_60f9c9a1c669b20039860c09ca27df7c&run=9&cached=0), there is still a layout shift occurring at 3071ms (about the same time as before) but the severity of the shift is _much_ smaller: 0.005%. I can live with this.

It's also clear from the filmstrip that the `<h1>` font is immediately falling back to a system font, enabling users to read it sooner.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Complex websites will probably experience many more layout shifts than in this example, but the remediation process is still the same: add layout instability metrics to WebPageTest, cross-reference the results with the visual loading filmstrip to identify the culprits, and implement a fix using placeholders to reserve the screen real estate.

### (One more thing) Measuring layout instability experienced by real users <a href="#(one-more-thing)-measuring-layout-instability-experienced-by-real-users" class="w-headline-link">#</a>

It's nice to be able to run WebPageTest on a page before and after an optimization and see an improvement to a metric, but what really matters is that the user experience is actually getting better. Isn't that why we're trying to make the site better in the first place?

So what would be great is if we start measuring the layout instability experiences of real users along with our traditional web performance metrics. This is a crucial piece of the optimization feedback loop because having data from the field tells us where the problems are and whether our fixes made a positive difference.

In addition to collecting your own layout instability data, check out the [Chrome UX Report](https://twitter.com/ChromeUXReport/status/1138555303379816448), which includes Cumulative Layout Shift data from real user experiences on millions of websites. It allows you to find out how you (or your competitors) are performing, or you can use it to explore the state of layout instability across the web.

<a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Sep 30, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/fixing-layout-instability/index.md)

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
