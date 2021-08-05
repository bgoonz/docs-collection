<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format" alt="The web.dev LIVE logo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/H60ns6FN1VtNrlx8e3EU.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#web.dev-live-wrap-up" class="w-toc__header--link">web.dev LIVE wrap-up</a>

- [Web Vitals](#web-vitals)
- [tooling.report](#tooling.report)
- [Privacy and security on the web](#privacy-and-security-on-the-web)
- [Building a web with powerful capabilities](#building-a-web-with-powerful-capabilities)
- [What's new in Chrome DevTools and Lighthouse 6.0](#what's-new-in-chrome-devtools-and-lighthouse-6.0)
- [Chrome Devtools: new Issues tab, color deficiencies emulator, and Web Vitals support](#chrome-devtools:-new-issues-tab-color-deficiencies-emulator-and-web-vitals-support)
- [Lighthouse 6.0: New metrics, Core Web Vitals lab measurements, an updated Performance score, and new audits](#lighthouse-6.0:-new-metrics-core-web-vitals-lab-measurements-an-updated-performance-score-and-new-audits)
- [Learn more](#learn-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# web.dev LIVE wrap-up

A summary of the major news and updates that were announced during our 3-day online community event, and a reminder about upcoming regional events.

Jul 6, 2020

We just wrapped up our three-day event, [web.dev LIVE](/live), where some of the web community came together online to talk about the state of web development. We kicked off each day in a different regional timezone, and Googlers shared a round of updates, news, and tips in the spirit of helping developers with tools and guidance to keep the web stable, powerful, and accessible.

If you missed some of the live stream, all of the [sessions are recorded](/live) and available for you to watch on YouTube. We've also got upcoming [regional events](/live/#regional-events) all around the world which are organized by Google Developer Groups and will provide deep-dive sessions on topics related to what we covered during web.dev LIVE.

Let's dive into some of the news and updates that were shared over the three days.

## Web Vitals <a href="#web-vitals" class="w-headline-link">#</a>

The Chrome team [announced](https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html) the [Web Vitals](/vitals) initiative to provide unified guidance, metrics, and tools to help developers deliver great user experiences on the web. The Google Search team also [recently announced](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html) that they will be evaluating page experience as a ranking criteria, and will include [Core Web Vitals](/vitals/#core-web-vitals) metrics as its foundation.

The three pillars of the 2020 Core Web Vitals are loading, interactivity, and visual stability of page content, which are captured by the following metrics:

<figure><img src="https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/kzOdl2pRyEEPEQI0U2lQ.png?auto=format&amp;w=1600 1600w" width="800" height="232" /></figure>-   [Largest Contentful Paint](/lcp/) measures perceived load speed and marks the point in the page load timeline when a page's main content has likely loaded.
-   [First Input Delay](/fid/) measures responsiveness and quantifies the experience users feel when trying to first interact with a page.
-   [Cumulative Layout Shift](/cls/) measures visual stability and quantifies the amount of unexpected movement of page content.

At web.dev LIVE, we shared best practices on how to [optimize for Core Web Vitals](https://youtu.be/AQqFZ5t8uNc) and how to use [Chrome DevTools to explore your site's vitals values](https://youtu.be/OHb3xZIqUeU). We also shared plenty of other performance-related talks that you can find at [web.dev/live](/live) in the Day 1 schedule.

## tooling.report <a href="#tooling.report" class="w-headline-link">#</a>

Developing for a platform as broad as the web can be challenging. Build tools are often at the heart of your web development project, taking on a key role in handling your developer and product lifecycle.

We have all seen unwieldy build config files, so to help web developers _and_ tooling authors conquer the complexity of the web, we built [tooling.report](/introducing-tooling-report). It's a website that helps you choose the right build tool for your next project, decide if migrating from one tool to another is worth it, or figure out how to incorporate best practices into your tooling configuration and code base.

We designed a suite of tests to determine which build tools allow you to follow web development best practices. We worked with the build tool authors to make sure we used their tools correctly and represented them fairly.

<figure><img src="https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/awFmvfMqFv3gvbpIICJY.png?auto=format&amp;w=1600 1600w" width="800" height="316" /></figure>The initial release of tooling.report covers webpack v4, Rollup v2, Parcel v2, and Browserify with Gulp, which appear to be the most popular build tools right now. We built tooling.report with the flexibility of adding more build tools and additional tests with help from the community.

If we're missing a best practice that should be tested, please [propose it in a GitHub issue](https://github.com/GoogleChromeLabs/tooling.report/issues/new). If you're up for writing a test or adding a new tool we did not include in the initial set, we welcome you to [contribute](https://github.com/GoogleChromeLabs/tooling.report/blob/dev/CONTRIBUTING.md)!

In the meantime, you can read more about our [approach towards building tooling.report](/introducing-tooling-report) and watch our [session from web.dev LIVE](https://youtu.be/vsMJiNtQWvw).

## Privacy and security on the web <a href="#privacy-and-security-on-the-web" class="w-headline-link">#</a>

Chrome believes in an open web that is respectful of users' privacy and maintains key use cases that keep the web working for everyone.

In 2019, Chrome [proposed](https://blog.chromium.org/2019/05/improving-privacy-and-security-on-web.html) an update to the cookie standard to restrict cookies to first-party contexts by default and require cookies for third-party contexts to be explicitly marked as such. Specifically, this provides a line of defense against Cross-Site Request Forgery attacks. The proposal is now being adopted by Chrome, Firefox, Edge, and other browsers.

While Chrome decided to [temporarily rollback](https://blog.chromium.org/2020/04/temporarily-rolling-back-samesite.html) these changes in light of COVID-19, sadly, during a crisis when people are most vulnerable, you also see these kinds of attacks increase. So, with the Chrome 84 Stable release (mid-July 2020), the changes will [start to roll out again](https://www.chromium.org/updates/same-site?pli=1#20200528) across all Chrome versions from 80 and up. Check out the [SameSite cookies guidance](/samesite-cookies-explained/) as well as the [web.dev LIVE session](https://youtu.be/Fet6-IiX69E) to learn more.

Moreover, under the banner of the [Privacy Sandbox](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html) Chrome is introducing a number of standards proposals that aim to support the use cases that let people make their living using the web platform, but do it in a way that better respects user privacy. Chrome is actively seeking feedback on these proposals, and is participating within the open forums of the W3C to discuss the proposals as well as those submitted by other parties. Learn more about this initiative in the [Security and privacy for the open web](https://youtu.be/8Tl0uQdVpxU) session.

Finally, looking at user security, [Spectre](https://meltdownattack.com/) was a vulnerability that meant malicious code running in one browser process might be able to read any data associated with that process even if it's from a different origin. One of the browser mitigations for this is site isolation, i.e. putting each site into a separate process. Watch the web.dev LIVE session on the [new Cross-Origin Opener and Embedder Policies](https://youtu.be/XLNJYhjA-0c) (COOP and COEP) to learn more.

## Building a web with powerful capabilities <a href="#building-a-web-with-powerful-capabilities" class="w-headline-link">#</a>

Chrome wants you to be free to create the highest quality web apps that give you the biggest reach to users across devices. Combining the installability and reliability of PWAs, with the [capabilities project](/fugu-status/) (Project Fugu), Chrome is focusing on three things to close the gap between platform-specific apps and the web, to help you build and deliver great experiences.

First, Chrome teams have been working hard to give web developers and users [more control over the install experience](/customize-install/), [adding an install promotion to the omnibox](/install-criteria/), and [more](/promote-install/#browser-promotion). Despite the web's ubiquity, it's still important for some businesses to have their app in the store. To help, Chrome launched [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap), a library and CLI that makes it trivial to get your PWA into the Play Store. In fact, [PWABuilder.com](http://PWABuilder.com) now uses Bubblewrap under the hood. In just a few mouse clicks, you can generate an APK and upload your PWA to the Play Store, as long as you meet the [criteria](https://blog.chromium.org/2020/06/changes-to-quality-criteria-for-pwas.html).

Second, Chrome is providing tighter integration with the operating system, such as the ability to share a photo, song, or whatever by invoking the system-level share service with the [Web Share API](/web-share/), or the ability to [receive content when shared from a different installed app](/web-share-target/). You can keep users up-to-date, or subtly notify them of new activity with [app badging](/badging-api/). Also, it's now easier for users to quickly start an action using [App Shortcuts](/app-shortcuts/), which will land in Chrome 84 (mid-July 2020).

And finally, Chrome has been working on new capabilities that enable new scenarios that weren't possible before, like editors that [read and write to files on the user's local file system](/file-system-access/), or get the list of locally installed fonts so that users can use them in their designs.

During web.dev LIVE, we spoke about [lots of other capabilities and features](https://youtu.be/NXCT3htg9nk) that can enable you to deliver the same kind of experience, with the same capabilities, as platform-specific apps. See all sessions at [web.dev/live](/live) in the Day 2 schedule.

## What's new in Chrome DevTools and Lighthouse 6.0 <a href="#what&#39;s-new-in-chrome-devtools-and-lighthouse-6.0" class="w-headline-link">#</a>

### Chrome Devtools: new Issues tab, color deficiencies emulator, and Web Vitals support <a href="#chrome-devtools:-new-issues-tab-color-deficiencies-emulator-and-web-vitals-support" class="w-headline-link">#</a>

One of the most powerful features of Chrome DevTools is its ability to spot issues on a web page and bring them to the developer's attention. This is most pertinent as we move into the next phase of a [privacy-first web](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html). To reduce notification fatigue and clutter in the Console, Chrome DevTools launched the [Issues tab](https://developers.google.com/web/tools/chrome-devtools/issues) which focuses on three types of critical issues to start with: [cookie problems](/samesite-cookies-explained), [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), and [COEP issues](/coop-coep/). Watch the web.dev LIVE session on [finding and fixing problems with the Issues tab](https://youtu.be/1TbkSxQb4bI) to get started.

<figure><img src="https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/G7AmzK1btOMBUPEhnFhV.png?auto=format&amp;w=1600 1600w" width="800" height="535" /></figure>Moreover, with the [Core Web Vitals](/vitals/#core-web-vitals) becoming one of the most critical sets of metrics for web developers to track and measure, DevTools wants to ensure developers are able to easily track how they perform against these thresholds. So these three metrics are now in the Chrome DevTools Performance panel.

And finally, with an increasing number of developers focusing on accessibility, DevTools also introduced a [color vision deficiencies emulator](https://twitter.com/mathias/status/1237393102635012101?) that allows developers to emulate blurred vision and other types of vision deficiencies. You can learn more about this and many other features in the [What's new in DevTools](https://youtu.be/6yrJZHqJe2k) session.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3gTvVdPvTN3IUyhSN8gn.png?auto=format&amp;w=1600 1600w" width="800" height="509" /></figure>### Lighthouse 6.0: New metrics, Core Web Vitals lab measurements, an updated Performance score, and new audits <a href="#lighthouse-6.0:-new-metrics-core-web-vitals-lab-measurements-an-updated-performance-score-and-new-audits" class="w-headline-link">#</a>

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is an open-source automated tool that helps developers improve their site's performance. In its latest version, the Lighthouse team focused on providing insights based on metrics that give you a balanced view of the quality of your user experience against critical dimensions.

To ensure consistency, Lighthouse added support for the Core Web Vitals: [LCP](/lcp/), [TBT](/tbt/) (a proxy for [FID](/fid/) since Lighthouse is a lab tool and FID can only be measured in the field) and [CLS](/cls/). Lighthouse also removed three old metrics: [First Meaningful Paint](/first-meaningful-paint/), [First CPU Idle](/first-cpu-idle/), and [Max Potential FID](/lighthouse-max-potential-fid/). These removals are due to considerations like metric variability and newer metrics offering better reflections of the part of user experience that Lighthouse is trying to measure. Additionally, Lighthouse also made some adjustments to how much each metric factors into the overall Performance score based on user feedback.

Lighthouse also added a [scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/) to help you explore your performance scoring, by providing a comparison between version 5 and 6 scores. When you run an audit with Lighthouse 6.0, the report comes with a link to the calculator with your results populated.

And finally, Lighthouse added a bunch of [new audits](/lighthouse-whats-new-6.0/#new-audits), with a focus on JavaScript analysis and accessibility.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qAVFUVHR7Ad0tm05J1d3.png?auto=format&amp;w=1600 1600w" width="800" height="450" /></figure>Learn more by watching the [What's new in speed tooling](https://youtu.be/yDHfrhCGFQw) session.

## Learn more <a href="#learn-more" class="w-headline-link">#</a>

Thank you to everyone in the community who joined us to discuss the web platform's opportunities and challenges.

This post summarized some of the highlights of the event, but there was so much more. Make sure to check out all the [sessions](/live) and [subscribe to the web.dev newsletter](/newsletter) if you'd like more content straight to your inbox. And visit the [Regional Events](/live#regional-events) section on web.dev/live to find an upcoming community event in your timezone!

<a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/security/" class="w-chip">Security</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/accessibility/" class="w-chip">Accessibility</a> <a href="/tags/metrics/" class="w-chip">Metrics</a> <a href="/tags/devtools/" class="w-chip">DevTools</a> <a href="/tags/lighthouse/" class="w-chip">Lighthouse</a> <a href="/tags/privacy/" class="w-chip">Privacy</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/install/" class="w-chip">Install</a>

<span class="w-mr--sm"> Last updated: Jul 6, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/live-wrap-up/index.md)

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
