<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format" alt="Murmuration of starlings over Brighton pier" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/GA543wiVTwpbwp6Zmw0H.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#what-is-floc" class="w-toc__header--link">What is FLoC?</a>

- [Why do we need FLoC?](#why-do-we-need-floc)
- [What can FLoC be used for?](#what-can-floc-be-used-for)
- [How does FLoC work?](#how-does-floc-work)
- [1. FLoC service](#1.-floc-service)
- [2. Browser](#2.-browser)
- [3. Advertiser: shoestore.example](#3.-advertiser:-shoestore.example)
- [4. Publisher: dailynews.example](#4.-publisher:-dailynews.example)
- [5. Adtech platform: adnetwork.example](#5.-adtech-platform:-adnetwork.example)
- [Who runs the back-end service that creates the FLoC model?](#who-runs-the-back-end-service-that-creates-the-floc-model)
- [How does the FLoC service enable the browser to work out its cohort?](#floc-server)
- [Can a browser's cohort change?](#can-a-browser's-cohort-change)
- [How does the browser work out its cohort?](#floc-algorithm)
- [How does FLoC work out the right size of cohort?](#how-does-floc-work-out-the-right-size-of-cohort)
- [Can FLoC be used to group people based on sensitive categories?](#can-floc-be-used-to-group-people-based-on-sensitive-categories)
- [Is FLoC just another way of categorizing people online?](#is-floc-just-another-way-of-categorizing-people-online)
- [Do websites have to participate and share information?](#do-websites-have-to-participate-and-share-information)
- [As a web developer how can I try out FLoC?](#as-a-web-developer-how-can-i-try-out-floc)
- [How can websites opt out of the FLoC computation?](#how-can-websites-opt-out-of-the-floc-computation)
- [How can I make suggestions or provide feedback?](#how-can-i-make-suggestions-or-provide-feedback)
- [Find out more](#find-out-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# What is FLoC?

FLoC enables ad selection without sharing the browsing behaviour of individual users.

Mar 30, 2021 <span class="w-author__separator">•</span> Updated May 14, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/secure" class="w-post-signpost__link">Safe and secure</a>

[<img src="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Dutton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samdutton/)

<a href="/authors/samdutton/" class="w-author__name-link">Sam Dutton</a>

- <a href="https://twitter.com/sw12" class="w-author__link">Twitter</a>
- <a href="https://github.com/samdutton" class="w-author__link">GitHub</a>

FLoC provides a privacy-preserving mechanism for interest-based ad selection.

As a user moves around the web, their browser uses the FLoC algorithm to work out its "interest cohort", which will be the same for thousands of browsers with a similar recent browsing history. The browser recalculates its cohort periodically, on the user's device, without sharing individual browsing data with the browser vendor or anyone else.

FLoC is now in [origin trial in Chrome](/origin-trials/). Find out more: [How to take part in the FLoC origin trial](https://developer.chrome.com/blog/floc/).

During the current FLoC origin trial, a page visit will only be included in the browser's FLoC computation for one of two reasons:

- The FLoC API (`document.interestCohort()`) is used on the page.
- Chrome detects that the page [loads ads or ads-related resources](https://github.com/WICG/floc/issues/82).

For other clustering algorithms, the trial may experiment with different inclusion criteria: that's part of the origin trial experiment process.

Advertisers (sites that pay for advertisements) can include code on their own websites in order to gather and provide cohort data to their adtech platforms (companies that provide software and tools to deliver advertising). For example, an adtech platform might learn from an online shoe store that browsers from cohorts 1101 and 1354 seem interested in the store's hiking gear. From other advertisers, the adtech platform learns about other interests of those cohorts.

Subsequently, the ad platform can use this data to select relevant ads (such as an ad for hiking boots from the shoe store) when a browser from one of those cohorts requests a page from a site that displays ads, such as a news website.

The Privacy Sandbox is a series of proposals to satisfy third-party use cases without third-party cookies or other tracking mechanisms. See [Digging into the Privacy Sandbox](/digging-into-the-privacy-sandbox) for an overview of all the proposals.

**This proposal needs your feedback.** If you have comments, please [create an issue](https://github.com/WICG/floc/issues/new) on the [FLoC Explainer](https://github.com/WICG/floc) repository. If you have feedback on Chrome's experiment with this proposal, please post a reply on the [Intent to Experiment](https://groups.google.com/a/chromium.org/g/blink-dev/c/MmijXrmwrJs).

## Why do we need FLoC? <a href="#why-do-we-need-floc" class="w-headline-link">#</a>

Many businesses rely on advertising to drive traffic to their sites, and many publisher websites fund content by selling advertising inventory. People generally prefer to see ads that are relevant and useful to them, and relevant ads also bring more business to advertisers and [more revenue to the websites that host them](https://services.google.com/fh/files/misc/disabling_third-party_cookies_publisher_revenue.pdf). In other words, ad space is more valuable when it displays relevant ads. Thus, selecting relevant ads increases revenue for ad-supported websites. That, in turn, means that relevant ads help fund content creation that benefits users.

However, many people are concerned about the privacy implications of tailored advertising, which currently relies on techniques such as tracking cookies and device fingerprinting which are used to track individual browsing behavior. The FLoC proposal aims to allow more effective ad selection without compromising privacy.

## What can FLoC be used for? <a href="#what-can-floc-be-used-for" class="w-headline-link">#</a>

- Show ads to people whose browsers belong to a cohort that has been observed to frequently visit an advertiser's site or shows interest in relevant topics.
- Use machine learning models to predict the probability a user will convert based on their cohort, in order to inform ad auction bidding behavior.
- Recommend content to users. For example, suppose a news site observes that their sports podcast page has become especially popular with visitors from cohorts 1234 and 7. They can recommend that content to other visitors from those cohorts.

## How does FLoC work? <a href="#how-does-floc-work" class="w-headline-link">#</a>

The example below describes the different roles in selecting an ad using FLoC.

- The **advertiser** (a company that pays for advertising) in this example is an online shoe retailer:  
  **<span class="underline">shoestore.example</span>**

- The **publisher** (a site that sells ad space) in the example is a news site:  
  **<span class="underline">dailynews.example</span>**

- The **adtech platform** (which provides software and tools to deliver advertising) is:  
  **<span class="underline">adnetwork.example</span>**

<img src="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format" alt="Diagram showing, step by step, the different roles in selecting and delivering an ad using FLoC: FLoC service, Browser, Advertisers, Publisher (to observe cohorts), Adtech, Publisher (to display ads)" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/wnJ1fSECf5STngywgE7V.png?auto=format&amp;w=1600 1600w" width="800" height="359" />

In this example we've called the users **Yoshi** and **Alex**. Initially their browsers both belong to the same cohort, 1354.

We've called the users here Yoshi and Alex, but this is only for the purpose of the example. Names and individual identities are not revealed to the advertiser, publisher, or adtech platform with FLoC.

Don't think of a cohort as a collection of people. Instead, think of a cohort as a grouping of browsing activity.

### 1. FLoC service <a href="#1.-floc-service" class="w-headline-link">#</a>

1.  The FLoC service used by the browser creates a mathematical model with thousands of "cohorts", each of which will correspond to thousands of web browsers with similar recent browsing histories. More about how this works [below](#floc-server).
2.  Each cohort is given a number.

### 2. Browser <a href="#2.-browser" class="w-headline-link">#</a>

1.  From the FLoC service, Yoshi's browser gets data describing the FLoC model.
2.  Yoshi's browser works out its cohort [by using the FLoC model's algorithm](#floc-algorithm) to calculate which cohort corresponds most closely to its own browsing history. In this example, that will be the cohort 1354. Note that Yoshi's browser does not share any data with the FLoC service.
3.  In the same way, Alex's browser calculates its cohort ID. Alex's browsing history is different from Yoshi's, but similar enough that their browsers both belong to cohort 1354.

### 3. Advertiser: <span style="font-weight:normal">shoestore.example</span> <a href="#3.-advertiser:-shoestore.example" class="w-headline-link">#</a>

1.  Yoshi visits <span class="underline">shoestore.example</span>.
2.  The site asks Yoshi's browser for its cohort: 1354.
3.  Yoshi looks at hiking boots.
4.  The site records that a browser from cohort 1354 showed interest in hiking boots.
5.  The site later records additional interest in its products from cohort 1354, as well as from other cohorts.
6.  The site periodically aggregates and shares information about cohorts and product interests with its adtech platform <span class="underline">adnetwork.example</span>.

Now it's Alex's turn.

### 4. Publisher: <span style="font-weight:normal">dailynews.example</span> <a href="#4.-publisher:-dailynews.example" class="w-headline-link">#</a>

1.  Alex visits <span class="underline">dailynews.example</span>.
2.  The site asks Alex's browser for its cohort.
3.  The site then makes a request for an ad to its adtech platform, <span class="underline">adnetwork.example</span>, including Alex's browser's cohort: 1354.

### 5. Adtech platform: <span style="font-weight:normal">adnetwork.example</span> <a href="#5.-adtech-platform:-adnetwork.example" class="w-headline-link">#</a>

1.  <span class="underline">adnetwork.example</span> can select an ad suitable for Alex by combining the data it has from the publisher <span class="underline">dailynews.example</span> and the advertiser <span class="underline">shoestore.example</span>:
    - Alex's browser's cohort (1354) provided by <span class="underline">dailynews.example</span>.
    - Data about cohorts and product interests from <span class="underline">shoestore.example</span>: "Browsers from cohort 1354 might be interested in hiking boots."
2.  <span class="underline">adnetwork.example</span> selects an ad appropriate to Alex: an ad for hiking boots on <span class="underline">shoestore.example</span>.
3.  <span class="underline">dailynews.example</span> displays the ad 🥾.

Current approaches for ad selection rely on techniques such as tracking cookies and device fingerprinting, which are used by third parties such as advertisers to track individual browsing behavior.

With FLoC, the browser **does not share** its browsing history with the FLoC service or anyone else. The browser, on the user's device, works out which cohort it belongs to. The user's browsing history never leaves the device.

## Who runs the back-end service that creates the FLoC model? <a href="#who-runs-the-back-end-service-that-creates-the-floc-model" class="w-headline-link">#</a>

Every browser vendor will need to make their own choice of how to group browsers into cohorts. Chrome is running its own FLoC service; other browsers might choose to implement FLoC with a different clustering approach, and would run their own service to do so.

## How does the FLoC service enable the browser to work out its cohort? <a href="#floc-server" class="w-headline-link">#</a>

1.  The FLoC service used by the browser creates a multi-dimensional mathematical representation of all potential web browsing histories. We'll call this model "cohort space".
2.  The service divides up this space into thousands of segments. Each segment represents a cluster of thousands of similar browsing histories. These groupings aren't based on knowing any actual browsing histories; they're simply based on picking random centers in "cohort space" or cutting up the space with random lines.
3.  Each segment is given a cohort number.
4.  The web browser gets this data describing "cohort space" from its FLoC service.
5.  As a user moves around the web, their browser [uses an algorithm](#floc-algorithm) to periodically calculate the region in "cohort space" that corresponds most closely to its own browsing history.

<figure><img src="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format" alt="The FLoC service divides up &quot;cohort space&quot; into thousands of segments (only a few are shown here)." sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/32k5jByqLrgwSMwb9mqo.png?auto=format&amp;w=800 800w" width="400" height="359" /><figcaption>The FLoC service divides up "cohort space" into thousands of segments (only a few are shown here).</figcaption></figure>At no point in this process is the user's browsing history shared with the FLoC service, or any third party. The browser's cohort is calculated by the browser, on the user's device. No user data is acquired or stored by the FLoC service.

## Can a browser's cohort change? <a href="#can-a-browser&#39;s-cohort-change" class="w-headline-link">#</a>

_Yes_! A browser's cohort definitely can change! You probably don't visit the same websites every week, and your browser's cohort will reflect that.

A cohort represents a cluster of browsing activity, not a collection of people. The activity characteristics of a cohort are generally consistent over time, and cohorts are useful for ad selection because they group similar recent browsing behavior. Individual people's browsers will float in and out of a cohort as their browsing behavior changes. Initially, we expect the browser to recalculate its cohort every seven days.

In the example above, both Yoshi and Alex's browser's cohort is 1354. In the future, Yoshi's browser and Alex's browser may move to a different cohort if their interests change. In the example below, Yoshi's browser moves to cohort 1101 and Alex's browser moves to cohort 1378. Other people's browsers will move into and out of cohorts as their browsing interests change.

<figure><img src="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format" alt="Yoshi&#39;s and Alex&#39;s browser cohort may change if their interests change." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/LMkb62V3iJTqkOrFACnM.png?auto=format&amp;w=1600 1600w" width="800" height="533" /><figcaption>Yoshi's and Alex's browser cohort may change if their interests change.</figcaption></figure>A cohort defines a grouping of browsing activity, not a group of people. Browsers will move in and out of a cohort as their activity changes.

## How does the browser work out its cohort? <a href="#floc-algorithm" class="w-headline-link">#</a>

As described above, the user's browser gets data from its FLoC service that describes the mathematical model for cohorts: a multi-dimensional space that represents the browsing activity of all users. The browser then uses an algorithm to work out which region of this "cohort space" (that is, which cohort) most closely matches its own recent browsing behavior.

## How does FLoC work out the right size of cohort? <a href="#how-does-floc-work-out-the-right-size-of-cohort" class="w-headline-link">#</a>

There will be thousands of browsers in each cohort.

A smaller cohort size might be more useful for personalizing ads, but is less likely to stop user tracking—and vice versa. A mechanism for assigning browsers to cohorts needs to make a trade off between privacy and utility. The Privacy Sandbox uses [k-anonymity](https://en.wikipedia.org/wiki/K-anonymity) to allow a user to "hide in a crowd". A cohort is k-anonymous if it is shared by at least k users. The higher the k number, the more privacy-preserving the cohort.

## Can FLoC be used to group people based on sensitive categories? <a href="#can-floc-be-used-to-group-people-based-on-sensitive-categories" class="w-headline-link">#</a>

The clustering algorithm used to construct the FLoC cohort model is designed to evaluate whether a cohort may be correlated with sensitive categories, without learning why a category is sensitive. Cohorts that might reveal sensitive categories such as race, sexuality, or medical history will be blocked. In other words, when working out its cohort, a browser will only be choosing between cohorts that won't reveal sensitive categories.

## Is FLoC just another way of categorizing people online? <a href="#is-floc-just-another-way-of-categorizing-people-online" class="w-headline-link">#</a>

With FLoC, a user's browser will belong to one of thousands of cohorts, along with thousands of other users' browsers. Unlike with third-party cookies and other targeting mechanisms, FLoC only reveals the cohort a user's browser is in, and not an individual user ID. It does not enable others to distinguish an individual within a cohort. In addition, the information about browsing activity that is used to work out a browser's cohort is kept local on the browser or device, and is not uploaded elsewhere. The browser may further leverage other anonymization methods, such as [differential privacy](https://en.wikipedia.org/wiki/Differential_privacy).

## Do websites have to participate and share information? <a href="#do-websites-have-to-participate-and-share-information" class="w-headline-link">#</a>

Websites will have the ability to opt in or out of FLoC, so sites about sensitive topics will be able to prevent visits to their site from being included in the FLoC calculation. As additional protection, analysis by the FLoC service will evaluate whether a cohort may reveal sensitive information about users without learning why that cohort is sensitive. If a cohort might represent a greater-than-typical number of people who visit sites in a sensitive category, that entire cohort is removed. Negative financial status and mental health are among the sensitive categories covered by this analysis.

Websites [can exclude a page from the FLoC calculation](https://github.com/WICG/floc#opting-out-of-computation) by setting a [Permissions-Policy](https://www.w3.org/TR/permissions-policy-1/#introduction) header `interest-cohort=()` for that page. For pages that haven't been excluded, a page visit will be included in the browser's FLoC calculation if `document.interestCohort()` is used on the page. During the current [FLoC origin trial](https://developer.chrome.com/origintrials/#/view_trial/213920982300098561), a page will also be included in the calculation if Chrome detects that the page [loads ads or ads-related resources](https://github.com/WICG/floc/issues/82). ([Ad Tagging in Chromium](https://chromium.googlesource.com/chromium/src/+/master/docs/ad_tagging.md) explains how Chrome's ad detection mechanism works.)

Pages served from private IP addresses, such as intranet pages, won't be part of the FLoC computation.

## As a web developer how can I try out FLoC? <a href="#as-a-web-developer-how-can-i-try-out-floc" class="w-headline-link">#</a>

The FLoC API is very simple: just a single method that returns a promise that resolves to an object providing the cohort `id` and `version`:

    const { id, version } = await document.interestCohort();
    console.log('FLoC ID:', id);
    console.log('FLoC version:', version);

The cohort data made available looks like this:

    {
      id: "14159",
       version: "chrome.1.0"
    }

The `version` value enables sites using FLoC to know which browser and which FLoC model the cohort ID refers to. As described below, the promise returned by `document.interestCohort()` will reject for any frame that is not allowed the `interest-cohort` permission.

The FLoC API is available in Chrome 89 and above, but if you are not taking part in the origin trial, you will need to set flags and run Chrome from the command line. [Run Chromium with flags](http://www.chromium.org/developers/how-tos/run-chromium-with-flags) explains how to do this for different operating systems.

1.  Start Chrome with the following flags:

        --enable-blink-features=InterestCohortAPI
        --enable-features="FederatedLearningOfCohorts:update_interval/10s/minimum_history_domain_size_required/1,FlocIdSortingLshBasedComputation,InterestCohortFeaturePolicy"

2.  Make sure third-party cookies are not blocked and that no ad blocker is running.

3.  View the demo at [floc.glitch.me](https://floc.glitch.me/).

[How to take part in the FLoC origin trial](https://developer.chrome.com/blog/floc) explains how to try out FLoC in both first- and third-party contexts.

## How can websites opt out of the FLoC computation? <a href="#how-can-websites-opt-out-of-the-floc-computation" class="w-headline-link">#</a>

The `interest-cohort` permissions policy enables a site to declare that it does not want to be included in the user's list of sites for cohort calculation. The policy will be `allow` by default. The promise returned by `document.interestCohort()` will reject for any frame that is not allowed `interest-cohort` permission. If the main frame does not have the `interest-cohort` permission, then the page visit will not be included in the interest cohort calculation.

For example, a site can opt out of all FLoC cohort calculation by sending the following HTTP response header:

      Permissions-Policy: interest-cohort=()

## How can I make suggestions or provide feedback? <a href="#how-can-i-make-suggestions-or-provide-feedback" class="w-headline-link">#</a>

If you have comments on the API, please [create an issue](https://github.com/WICG/floc/issues/new) on the [FLoC Explainer](https://github.com/WICG/floc) repository.

## Find out more <a href="#find-out-more" class="w-headline-link">#</a>

- [FLoC demo](https://floc.glitch.me)
- [How to take part in the FLoC origin trial](https://developer.chrome.com/blog/floc)
- [Digging in to the Privacy Sandbox](/digging-into-the-privacy-sandbox/)
- [FLoC Explainer](https://github.com/WICG/floc)
- [Evaluation of cohort Algorithms for the FLoC API](https://github.com/google/ads-privacy/blob/master/proposals/FLoC/README.md)

---

Photo by [Rhys Kentish](https://unsplash.com/@rhyskentish) on [Unsplash](https://unsplash.com/photos/I5AYxsxSuVA).

<a href="/tags/privacy/" class="w-chip">Privacy</a> <a href="/tags/security/" class="w-chip">Security</a>

<span class="w-mr--sm"> Last updated: May 14, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/floc/index.md)

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
