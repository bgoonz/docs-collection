<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/XEdZ5JBzgWLES21OvPjE.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#automating-audits-with-autowebperf" class="w-toc__header--link">Automating audits with AutoWebPerf</a>

- [What is AutoWebPerf (AWP)?](<#what-is-autowebperf-(awp)>)
- [What is AWP for?](#what-is-awp-for)
- [Architecture overview](#architecture-overview)
- [Automating audits with AWP](#automating-audits-with-awp)
- [Recurring audits](#recurring-audits)
- [Visualising audit results in Data Studio](#data-studio)
- [What's next?](#what's-next)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Automating audits with AutoWebPerf

A new modular tool that enables automatic gathering of performance data from multiple sources.

Dec 9, 2020 <span class="w-author__separator">•</span> Updated Jan 8, 2021

[<img src="https://web-dev.imgix.net/image/admin/DSWao9z2Qq584d9kbjit.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jonathan Chen" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/DSWao9z2Qq584d9kbjit.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/DSWao9z2Qq584d9kbjit.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/DSWao9z2Qq584d9kbjit.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/DSWao9z2Qq584d9kbjit.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/DSWao9z2Qq584d9kbjit.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jonchen/)

<a href="/authors/jonchen/" class="w-author__name-link">Jonathan Chen</a>

- <a href="https://twitter.com/jonchenn" class="w-author__link">Twitter</a>
- <a href="https://github.com/jonchenn" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jonchenn" class="w-author__link">Glitch</a>

[<img src="https://web-dev.imgix.net/image/admin/4CxwBoPk1E2KKHDkdY1s.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Gilberto Cocchi" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/4CxwBoPk1E2KKHDkdY1s.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/4CxwBoPk1E2KKHDkdY1s.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/4CxwBoPk1E2KKHDkdY1s.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/4CxwBoPk1E2KKHDkdY1s.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/4CxwBoPk1E2KKHDkdY1s.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/gilbertococchi/)

<a href="/authors/gilbertococchi/" class="w-author__name-link">Gilberto Cocchi</a>

- <a href="https://twitter.com/gilberto_cocchi" class="w-author__link">Twitter</a>
- <a href="https://github.com/gilbertococchi" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/xCDa34tJbhKRgr8pj5BJ.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Antoine Bisch" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/xCDa34tJbhKRgr8pj5BJ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/xCDa34tJbhKRgr8pj5BJ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/xCDa34tJbhKRgr8pj5BJ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/xCDa34tJbhKRgr8pj5BJ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/xCDa34tJbhKRgr8pj5BJ.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/antoinebisch/)

<a href="/authors/antoinebisch/" class="w-author__name-link">Antoine Bisch</a>

- <a href="https://github.com/antoinebisch" class="w-author__link">GitHub</a>

## What is AutoWebPerf (AWP)? <a href="#what-is-autowebperf-(awp)" class="w-headline-link">#</a>

[AutoWebPerf](https://github.com/GoogleChromeLabs/AutoWebPerf) (AWP) is a modular tool that enables automatic gathering of performance data from multiple sources. Currently there are [many tools available](/vitals-tools/) to measure website performance for different scopes ([lab and field](/how-to-measure-speed/#lab-data-vs-field-data)), such as Chrome UX Report, PageSpeed Insights, or WebPageTest. AWP offers integration with various audit tools with a simple setup so you can continuously monitor the site performance in one place.

The release of [Web Vitals](/vitals/) guidance means that close and active monitoring of web pages is becoming increasingly important. The engineers behind this tool have been doing performance audits for years and they created AWP to automate a manual, recurring, and time consuming part of their daily activities. Today, AWP has reached a level of maturity and it's ready to be shared broadly so anyone can benefit from the automation it brings.

The tool is accessible on the [AutoWebPerf](https://github.com/GoogleChromeLabs/AutoWebPerf) public repository on GitHub.

## What is AWP for? <a href="#what-is-awp-for" class="w-headline-link">#</a>

Although several tools and APIs are available to monitor the performance of web pages, most of them expose data measured at a specific time. To adequately monitor a website and maintain good performance of key pages, it's recommended to continuously take measurements of [Core Web Vitals](/vitals/#core-web-vitals) over time and observe trends.

AWP makes that easier by providing an engine and pre-built API integrations which can be programmatically configured to automate recurrent queries to various performance monitoring APIs.

For example, with AWP, you can set a daily test on your home page to capture the field data from [CrUX API](/chrome-ux-report-api/) and lab data from a [Lighthouse report from PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). This data can be written and stored over time, for example, in [Google Sheets](https://www.google.co.uk/sheets/about/) and then visualised in the [Data Studio dashboard](https://datastudio.google.com/c/u/0/navigation/reporting). AWP automates the heavy-lifting part of the entire process, making it a great solution to follow lab and field trends over time. See [Visualising audit results in Data Studio](#data-studio) below for more details).

## Architecture overview <a href="#architecture-overview" class="w-headline-link">#</a>

AWP is a modular-based library with three different types of modules:

- the **engine**
- **connector** modules
- **gatherer** modules

The engine takes a list of tests from a connector (for example, from a local CSV file), runs performance audits through selected gatherers (such as PageSpeed Insights), and writes results to the output connector (for example, Google Sheets).

<img src="https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format" alt="A diagram of AWP&#39;s architecture." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/GqufPfzbuslrT4st1FmP.png?auto=format&amp;w=1600 1600w" width="800" height="439" />

AWP comes with a number of pre-implemented gatherers and connectors:

- Pre-implemented gatherers:
  - [CrUX API](/chrome-ux-report-api/)
  - [CrUX BigQuery](/chrome-ux-report-bigquery/)
  - [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
  - [WebPageTest API](https://www.webpagetest.org/getkey.php)
- Pre-implemented connectors:
  - Google Sheets
  - JSON
  - CSV

## Automating audits with AWP <a href="#automating-audits-with-awp" class="w-headline-link">#</a>

AWP automates the performance audits via your preferred audit platforms such as [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), [WebPageTest](https://webpagetest.org/), or [CrUX API](https://developers.google.com/web/tools/chrome-user-experience-report/api/reference). AWP offers the flexibility to choose where to load the list of tests, and where to write the results to.

For example, you can run audits for a list of tests stored in a Google Sheet, and write the results to a CSV file, with the command below:

    PSI_APIKEY=<YOUR_KEY> SHEETS_APIKEY=<YOUR_KEY> ./awp run sheets:<SheetID> csv:output.csv

### Recurring audits <a href="#recurring-audits" class="w-headline-link">#</a>

You can run recurring audits in daily, weekly, or monthly frequency. For example, you can run daily audits for a list of tests defined in a local JSON like below:

    {
      "tests": [
        {
          "label": "web.dev",
          "url": "https://web.dev",
          "gatherer": "psi"
        }
      ]
    }

The command below reads the list of audit tests from the local JSON file, runs audits on a local machine, then outputs results to a local CSV file:

    PSI_APIKEY=<YOUR_KEY> ./awp run json:tests.json csv:output.csv

To run audits every day as a background service continuously, you can use the command below instead:

    PSI_APIKEY=<YOUR_KEY> ./awp continue json:tests.json csv:output.csv

Alternatively, you can set up the [crontab](https://www.geeksforgeeks.org/how-to-setup-cron-jobs-in-ubuntu/) in a Unix-like environment to run AWP as a daily cron job:

    0 0 * * * PSI_APIKEY=<YOUR_KEY> ./awp run json:tests.json csv:output.csv

You can find more ways to automate daily audits and result collection in the [AWP GitHub repository](https://github.com/GoogleChromeLabs/AutoWebPerf).

## Visualising audit results in Data Studio <a href="#data-studio" class="w-headline-link">#</a>

Along with continuously measuring Core Web Vitals, it is important to be able to evaluate the trends and discover potential regressions with real user metrics (RUM) or the Chrome UX Report (CrUX) data collected by AWP. Note that Chrome UX Report (CrUX) is a 28-day moving aggregation, hence it is recommended to also use your own RUM data along with CrUX so you can spot regressions sooner.

Data Studio is a free visualization tool that you can easily load performance metrics into and draw trends as charts. For example, the time series charts below show Core Web Vitals based on Chrome UX Report data. One of the charts shows increasing Cumulative Layout Shift in recent weeks, which means regressions in the layout stability for certain pages. In this scenario, you would want to prioritize the efforts to analyze the underlying issues of these pages.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Cpi7NkLvKyvf2xYzFwAn.png?auto=format&amp;w=1600 1600w" width="800" height="904" /></figure>To simplify the end-to-end process from data collection to visualization, you can run AWP with a list of URLs to automatically export results to Google Sheets with the following command:

    PSI_APIKEY=<YOUR_KEY> SHEETS_APIKEY=<YOUR_KEY> ./awp run sheets:<SheetID> csv:output.csv

After collecting daily metrics in a spreadsheet, you can create a Data Studio dashboard that loads the data directly from the spreadsheet, and plots the trends into a time series chart. Check out [Google Spreadsheets API Connector](https://github.com/GoogleChromeLabs/AutoWebPerf/blob/stable/docs/sheets-connector.md) for detailed steps about how to set up AWP with spreadsheets as a data source to visualize on Data Studio.

## What's next? <a href="#what&#39;s-next" class="w-headline-link">#</a>

AWP provides a simple and integrated way to minimize the efforts to set up a continuous monitoring pipeline to measure Core Web Vitals and other performance metrics. As for now, AWP covers the most common use cases and will continue to provide more features to address other use cases in the future.

Learn more in the [AutoWebPerf](https://github.com/GoogleChromeLabs/AutoWebPerf) repository.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/tools/" class="w-chip">Tools</a>

<span class="w-mr--sm"> Last updated: Jan 8, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/autowebperf/index.md)

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
