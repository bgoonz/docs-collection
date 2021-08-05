<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#how-to-file-a-good-browser-bug" class="w-toc__header--link">How to file a good browser bug</a>

- [Verify it is a bug](#verify-it-is-a-bug)
- [What's the correct behavior?](#what's-the-correct-behavior)
- [Does it work in a different browser?](#does-it-work-in-a-different-browser)
- [Did it break in a recent release?](#did-it-break-in-a-recent-release)
- [Are others seeing the same problem?](#are-others-seeing-the-same-problem)
- [Has it been reported before?](#has-it-been-reported-before)
- [Report the bug](#report-the-bug)
- [Create a minimized test case](#minified-test-case)
- [Filing your issue](#filing-your-issue)
- [Provide a clear description and the steps required to reproduce the issue](#provide-a-clear-description-and-the-steps-required-to-reproduce-the-issue)
- [Include details of the environment](#include-details-of-the-environment)
- [Submit the bug](#submit-the-bug)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How to file a good browser bug

Telling browser vendors about issues you find in their browser is an integral part of making the web platform better!

Jun 15, 2020 <span class="w-author__separator">•</span> Updated Jun 15, 2020

[<img src="https://web-dev.imgix.net/image/admin/fbCJc4uifsZ4d5KolJ7j.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Robert Nyman" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fbCJc4uifsZ4d5KolJ7j.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fbCJc4uifsZ4d5KolJ7j.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fbCJc4uifsZ4d5KolJ7j.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fbCJc4uifsZ4d5KolJ7j.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fbCJc4uifsZ4d5KolJ7j.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/robertnyman/)

<a href="/authors/robertnyman/" class="w-author__name-link">Robert Nyman</a>

- <a href="https://twitter.com/robertnyman" class="w-author__link">Twitter</a>
- <a href="https://github.com/robnyman" class="w-author__link">GitHub</a>
- <a href="https://robertnyman.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

Filing a good bug isn't hard, but takes a little work. The goal is to make it easy to find what's broken, reach the root cause and, most importantly, find a way to fix it. Bugs that make fast progress tend to be easy to reproduce with a clear expected behavior.

## Verify it is a bug <a href="#verify-it-is-a-bug" class="w-headline-link">#</a>

The first step is to figure out what the "correct" behavior should be.

### What's the correct behavior? <a href="#what&#39;s-the-correct-behavior" class="w-headline-link">#</a>

Check the relevant API docs on [MDN](https://developer.mozilla.org/), or try to find related specs. This information can help you decide which API is actually broken, where it's broken, and what the expected behavior is.

### Does it work in a different browser? <a href="#does-it-work-in-a-different-browser" class="w-headline-link">#</a>

Behavior that differs between browsers is generally prioritized higher as an interoperability issue, especially when the browser containing the bug is the odd one out. Try to test on the latest versions of Chrome, Firefox, Safari and Edge, possibly using a tool like [BrowserStack](https://www.browserstack.com/).

If possible, check that the page isn't intentionally behaving differently due to user agent sniffing. In Chrome DevTools, try [setting the `User-Agent` string to another browser](https://developers.google.com/web/tools/chrome-devtools/device-mode/override-user-agent).

### Did it break in a recent release? <a href="#did-it-break-in-a-recent-release" class="w-headline-link">#</a>

Did this work as expected in the past, but broke in a recent browser release? Such "regressions" can be acted upon much quicker, especially if you supply a version number where it worked and a version where it failed. Tools like [BrowserStack](https://www.browserstack.com/) can make it easy to check old browser versions and the [bisect-builds tool](https://www.chromium.org/developers/bisect-builds-py) (for Chromium) allows searching for the change very efficiently.

If an issue is a regression and can be reproduced, the root cause can usually be found and fixed quickly.

### Are others seeing the same problem? <a href="#are-others-seeing-the-same-problem" class="w-headline-link">#</a>

If you're experiencing problems, there's a good chance other developers are too. First, try searching for the bug on [Stack Overflow](http://stackoverflow.com/). This might help you translate an abstract problem into a specific broken API, and it might help you find a short term workaround until the bug is fixed.

## Has it been reported before? <a href="#has-it-been-reported-before" class="w-headline-link">#</a>

Once you have an idea of what the bug is, it's time to check to see if the bug has already been reported by searching the browser bug database.

- Chromium-based browsers: [https://crbug.com](https://crbug.com/)
- Firefox: <https://bugzilla.mozilla.org/>
- Safari & WebKit-based browsers: <https://bugs.webkit.org/>

If you find an existing bug that describes the problem, add your support by starring, favoriting, or commenting on the bug. And, on many sites, you can add yourself to the CC list and get updates when the bug changes.

If you decide to comment on the bug, include information about how the bug affects your website. Avoid adding "+1" style comments, as bug trackers typically send emails for every comment.

## Report the bug <a href="#report-the-bug" class="w-headline-link">#</a>

If the bug hasn't been reported before, it's time to tell the browser vendor about it.

### Create a minimized test case <a href="#minified-test-case" class="w-headline-link">#</a>

Mozilla has a great article on [how to create a minimized test case](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Reducing_testcases). To make a long story short, while a description of the problem is a great start, nothing beats providing a linked demo in the bug that shows the problem. To maximize the chance of fast progress the example should contain the minimum possible code needed to demonstrate the problem. A minimal code sample is the number one thing you can do to increase the odds of your bug getting fixed.

Here are a few tips for minimizing a test case:

- Download the web page, add [`<base href="https://original.url">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) and verify that the bug exists locally. This may require a live HTTPS server if the URL uses HTTPS.
- Test the local files on the latest builds of as many browsers as you can.
- Try to condense everything into 1 file.
- Remove code (starting with things you know to be unnecessary) until the bug goes away.
- Use version control so that you can save your work and undo things that go wrong.

#### Hosting a minified test case <a href="#hosting-a-minified-test-case" class="w-headline-link">#</a>

If you're looking for a good place to host your minified test case, there are several good places available:

- [Glitch](https://glitch.com)
- [JSBin](https://jsbin.com)
- [JSFiddle](https://jsfiddle.net)
- [CodePen](https://codepen.io)

Be aware that several of those sites display content in an iframe, which may cause features or bugs to behave differently.

## Filing your issue <a href="#filing-your-issue" class="w-headline-link">#</a>

Once you've got your minimized test case, you're ready to file that bug. Head over to the right bug tracking site, and create a new issue.

- Chromium-based browsers - <https://crbug.com/new>
- Firefox - <https://bugzilla.mozilla.org/>
- Safari & WebKit-based browsers - <https://bugs.webkit.org/>

### Provide a clear description and the steps required to reproduce the issue <a href="#provide-a-clear-description-and-the-steps-required-to-reproduce-the-issue" class="w-headline-link">#</a>

First, provide a clear description to help engineers quickly understand what the problem is and help to triage the issue.

    When installing a PWA using the `beforeinstallprompt.prompt()`, the
    `appinstalled` event fires before the call to `prompt()` resolves.

Next, provide the detailed steps required to reproduce the issue. This is where your [minified test case](#minified-test-case) comes in.

    What steps will reproduce the problem?
    1. Go to https://basic-pwa.glitch.me/, open DevTools and look at the
       console tab.
    2. Click the Install button in the page, you might need to interact with
       the page a bit before it becomes enabled.
    3. Click Install on the browser modal install confirmation.

And finally, describe the _actual_, and _expected_ result.

    What is the actual result? In the console:
    0. INSTALL: Available (logged when `beforeinstallprompt` event fired)
    1. INSTALL: Success (logged when `appinstalled` event fired)
    2. INSTALL_PROMPT_RESPONSE: {outcome: "accepted", platform: "web"}
       (logged when beforeinstallprompt.prompt()` resolves)

    What is the expected result? In the console:
    0. INSTALL: Available (logged when `beforeinstallprompt` event fired)
    1. INSTALL_PROMPT_RESPONSE: {outcome: "accepted", platform: "web"}
       (logged when beforeinstallprompt.prompt()` resolves)
    2. INSTALL: Success (logged when `appinstalled` event fired)

For more information, check out [Bug report writing guidelines](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines) on MDN.

#### Bonus: Add a screenshot or screencast of the issue <a href="#bonus:-add-a-screenshot-or-screencast-of-the-issue" class="w-headline-link">#</a>

Though not required, in some cases, it can be helpful to add a screenshot, or screencast of the issue. This is especially helpful in cases where bugs may require some odd steps to reproduce. Being able to see what happens in a screencast, or on a screenshot can frequently be helpful.

### Include details of the environment <a href="#include-details-of-the-environment" class="w-headline-link">#</a>

Some bugs are reproducible only on certain operating systems, or only on specific kinds of displays (for example, low-dpi or high-dpi). Be sure to include the details of any test environments you used.

### Submit the bug <a href="#submit-the-bug" class="w-headline-link">#</a>

Finally, submit the bug. Then, remember to keep an eye on your email for any responses to the bug. Typically during investigation and when fixing the bug, engineers may have additional questions, or if they have difficulty reproducing the issue, they may reach out.

<span class="w-mr--sm"> Last updated: Jun 15, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/how-to-file-a-good-bug/index.md)

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
