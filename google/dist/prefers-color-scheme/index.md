<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format" alt="Silhouette photo of a mountain during nighttime, photo by Nathan Anderson on Unsplash." class="w-hero w-hero--cover w-hero--bottom" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/dgDcIJUyuWB5xNn9CODd.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#prefers-color-scheme:-hello-darkness-my-old-friend" class="w-toc__header--link">prefers-color-scheme: Hello darkness, my old friend</a>

- [Introduction](#introduction)
- [Dark mode before Dark Mode](#dark-mode-before-dark-mode)
- [Why dark mode](#why-dark-mode)
- [Activating dark mode in the operating system](#activating-dark-mode-in-the-operating-system)
- [The prefers-color-scheme media query](#the-prefers-color-scheme-media-query)
- [Supporting dark mode](#supporting-dark-mode)
- [Finding out if dark mode is supported by the browser](#finding-out-if-dark-mode-is-supported-by-the-browser)
- [Learning about a user's preferences at request time](#learning-about-a-user's-preferences-at-request-time)
- [Dark mode in practice](#dark-mode-in-practice)
- [Loading strategy](#loading-strategy)
- [Stylesheet architecture](#stylesheet-architecture)
- [Full example](#full-example)
- [Loading impact](#loading-impact)
- [Reacting on dark mode changes](#reacting-on-dark-mode-changes)
- [Debugging and testing dark mode](#debugging-and-testing-dark-mode)
- [Emulating prefers-color-scheme in DevTools](#emulating-prefers-color-scheme-in-devtools)
- [Screenshotting prefers-color-scheme with Puppeteer](#screenshotting-prefers-color-scheme-with-puppeteer)
- [Dark mode best practices](#dark-mode-best-practices)
- [Avoid pure white](#avoid-pure-white)
- [Re-colorize and darken photographic images](#re-colorize-and-darken-photographic-images)
- [Invert vector graphics and icons](#invert-vector-graphics-and-icons)
- [Use currentColor for inline SVGs](#use-currentcolor-for-inline-svgs)
- [Smooth transitions between modes](#smooth-transitions-between-modes)
- [Art direction with dark mode](#art-direction-with-dark-mode)
- [Dark mode, but add an opt-out](#dark-mode-but-add-an-opt-out)
- [Conclusions](#conclusions)
- [Related links](#related-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# prefers-color-scheme: Hello darkness, my old friend

Overhyped or necessity? Learn everything about dark mode and how to support it to the benefit of your users!

Jun 27, 2019 <span class="w-author__separator">•</span> Updated Aug 2, 2020

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

## Introduction <a href="#introduction" class="w-headline-link">#</a>

I have done a lot of background research on the history and theory of dark mode, if you are only interested in working with dark mode, feel free to [skip the introduction](#activating-dark-mode-in-the-operating-system).

### Dark mode before _Dark Mode_ <a href="#dark-mode-before-dark-mode" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format" alt="Green screen (Source)" sizes="(min-width: 233px) 233px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/fmdRPm6K5SXiIRLgyz4y.jpg?auto=format&amp;w=466 466w" width="233" height="175" /><figcaption>Green screen (<a href="https://commons.wikimedia.org/wiki/File:Compaq_Portable_and_Wordperfect.JPG">Source</a>)</figcaption></figure>We have gone full circle with dark mode. In the dawn of personal computing, dark mode wasn't a matter of choice, but a matter of fact: Monochrome CRT computer monitors worked by firing electron beams on a phosphorescent screen and the phosphor used in early CRTs was green. Because text was displayed in green and the rest of the screen was black, these models were often referred to as [green screens](https://commons.wikimedia.org/wiki/File:Schneider_CPC6128_with_green_monitor_GT65,_start_screen.jpg).

<figure><img src="https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format" alt="Dark-on-white (Source)" sizes="(min-width: 222px) 222px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/l9oDlIO59oyJiXVegxIV.jpg?auto=format&amp;w=444 444w" width="222" height="175" /><figcaption>Dark-on-white (<a href="https://www.youtube.com/watch?v=qKkABzt0Zqg">Source</a>)</figcaption></figure>The subsequently introduced Color CRTs displayed multiple colors through the use of red, green, and blue phosphors. They created white by activating all three phosphors simultaneously. With the advent of more sophisticated WYSIWYG [desktop publishing](https://en.wikipedia.org/wiki/Desktop_publishing), the idea of making the virtual document resemble a physical sheet of paper became popular.

<figure><img src="https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format" alt="The WorldWideWeb browser (Source)" sizes="(min-width: 233px) 233px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/lnuLLcQzIF7r08lt479k.png?auto=format&amp;w=466 466w" width="233" height="175" /><figcaption>The WorldWideWeb browser (<a href="https://commons.wikimedia.org/wiki/File:WorldWideWeb_FSF_GNU.png">Source</a>)</figcaption></figure>This is where *dark-on-white* as a design trend started, and this trend was carried over to the [early document-based web](http://info.cern.ch/hypertext/WWW/TheProject.html). The first ever browser, [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) (remember, [CSS wasn't even invented](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#History) yet), [displayed webpages](https://commons.wikimedia.org/wiki/File:WorldWideWeb_FSF_GNU.png) this way. Fun fact: the second ever browser, [Line Mode Browser](https://en.wikipedia.org/wiki/Line_Mode_Browser)—a terminal-based browser—was green on dark. These days, web pages and web apps are typically designed with dark text on a light background, a baseline assumption that is also hard-coded in user agent stylesheets, including [Chrome's](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css).

<figure><img src="https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format" alt="Smartphone used in bed (Source: Unsplash)" sizes="(min-width: 262px) 262px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zCdyRdnAnbrB7aAB0TQi.jpg?auto=format&amp;w=524 524w" width="262" height="175" /><figcaption>Smartphone used in bed (Source: Unsplash)</figcaption></figure>The days of CRTs are long over. Content consumption and creation has shifted to mobile devices that use backlit LCD or energy-saving AMOLED screens. Smaller and more transportable computers, tablets, and smartphones led to new usage patterns. Leisure tasks like web browsing, coding for fun, and high-end gaming frequently happen after-hours in dim environments. People even enjoy their devices in their beds at night-time. The more people use their devices in the dark, the more the idea of going back to the roots of *light-on-dark* becomes popular.

### Why dark mode <a href="#why-dark-mode" class="w-headline-link">#</a>

#### Dark mode for aesthetic reasons <a href="#dark-mode-for-aesthetic-reasons" class="w-headline-link">#</a>

When people get asked [why they like or want dark mode](https://medium.com/dev-channel/let-there-be-darkness-maybe-9facd9c3023d), the most popular response is that _"it's easier on the eyes,"_ followed by _"it's elegant and beautiful."_ Apple in their [Dark Mode developer documentation](https://developer.apple.com/documentation/appkit/supporting_dark_mode_in_your_interface) explicitly writes: _"The choice of whether to enable a light or dark appearance is an aesthetic one for most users, and might not relate to ambient lighting conditions."_

Read up more on [user research regarding why people want dark mode and how they use it](https://medium.com/dev-channel/let-there-be-darkness-maybe-9facd9c3023d).

<figure><img src="https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format" alt="System 7 CloseView (Source)" sizes="(min-width: 193px) 193px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=193 193w,     https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=220 220w,     https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=251 251w,     https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=286 286w,     https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=326 326w,     https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=372 372w,     https://web-dev.imgix.net/image/admin/WZ9I5g1YGG6S1TjygEIq.png?auto=format&amp;w=386 386w" width="193" height="225" /><figcaption>System 7 CloseView (<a href="https://archive.org/details/mac_Macintosh_System_7_at_your_Fingertips_1992">Source</a>)</figcaption></figure>#### Dark mode as an accessibility tool <a href="#dark-mode-as-an-accessibility-tool" class="w-headline-link">#</a>

There are also people who actually _need_ dark mode and use it as another accessibility tool, for example, users with low vision. The earliest occurrence of such an accessibility tool I could find is [System 7](https://en.wikipedia.org/wiki/System_7)'s _CloseView_ feature, which had a toggle for _Black on White_ and _White on Black_. While System 7 supported color, the default user interface was still black-and-white.

These inversion-based implementations demonstrated their weaknesses once color was introduced. User research by Szpiro _et al._ on [how people with low vision access computing devices](https://dl.acm.org/citation.cfm?id=2982168) showed that all interviewed users disliked inverted images, but that many preferred light text on a dark background. Apple accommodates for this user preference with a feature called [Smart Invert](https://www.apple.com//accessibility/iphone/vision/), which reverses the colors on the display, except for images, media, and some apps that use dark color styles.

A special form of low vision is Computer Vision Syndrome, also known as Digital Eye Strain, which is [defined](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1475-1313.2011.00834.x) as _"the combination of eye and vision problems associated with the use of computers (including desktop, laptop, and tablets) and other electronic displays (e.g. smartphones and electronic reading devices)."_ It has been [proposed](https://bmjopen.bmj.com/content/5/1/e006748) that the use of electronic devices by adolescents, particularly at night time, leads to an increased risk of shorter sleep duration, longer sleep-onset latency, and increased sleep deficiency. Additionally, exposure to blue light has been widely [reported](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4254760/) to be involved in the regulation of [circadian rhythm](https://en.wikipedia.org/wiki/Circadian_rhythm) and the sleep cycle, and irregular light environments may lead to sleep deprivation, possibly affecting mood and task performance, according to [research by Rosenfield](https://www.college-optometrists.org/oip-resource/computer-vision-syndrome--a-k-a--digital-eye-strain.html). To limit these negative effects, reducing blue light by adjusting the display color temperature through features like iOS' [Night Shift](https://support.apple.com/en-us/HT207570) or Android's [Night Light](https://support.google.com/pixelphone/answer/7169926?) can help, as well as avoiding bright lights or irregular lights in general through dark themes or dark modes.

#### Dark mode power savings on AMOLED screens <a href="#dark-mode-power-savings-on-amoled-screens" class="w-headline-link">#</a>

Finally, dark mode is known to save a _lot_ of energy on AMOLED screens. Android case studies that focused on popular Google apps like YouTube have shown that the power savings can be up to 60%. The video below has more details on these case studies and the power savings per app.

## Activating dark mode in the operating system <a href="#activating-dark-mode-in-the-operating-system" class="w-headline-link">#</a>

Now that I have covered the background of why dark mode is such a big deal for many users, let's review how you can support it.

<figure><img src="https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format" alt="Android Q dark theme settings" sizes="(min-width: 218px) 218px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format&amp;w=436 436w" width="218" height="250" /><figcaption>Android Q dark theme settings</figcaption></figure>Operating systems that support a dark mode or dark theme typically have an option to activate it somewhere in the settings. On macOS X, it's in the system preference's *General* section and called *Appearance* ([screenshot](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/lUAnDhiGiZxigDbCqfn1.png?auto=format)), and on Windows 10, it's in the *Colors* section and called *Choose your color* ([screenshot](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ahr8nkFttRPCe4RH8IEk.png?auto=format)). For Android Q, you can find it under *Display* as a *Dark Theme* toggle switch ([screenshot](https://web-dev.imgix.net/image/admin/Yh6SEoWDK1SbqcGjlL6d.png?auto=format)), and on iOS 13, you can change the *Appearance* in the *Display & Brightness* section of the settings ([screenshot](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/K0QTu4Elw1ETabtoJjZ1.jpg?auto=format)).

## The `prefers-color-scheme` media query <a href="#the-prefers-color-scheme-media-query" class="w-headline-link">#</a>

One last bit of theory before I get going. [Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) allow authors to test and query values or features of the user agent or display device, independent of the document being rendered. They are used in the CSS `@media` rule to conditionally apply styles to a document, and in various other contexts and languages, such as HTML and JavaScript. [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/) introduces so-called user preference media features, that is, a way for sites to detect the user's preferred way to display content.

☝️ An established user preference media feature is `prefers-reduced-motion` that lets you detect the desire for less motion on a page. I have [written about `prefers-reduced-motion`](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion) before.

The [`prefers-color-scheme`](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme) media feature is used to detect if the user has requested the page to use a light or dark color theme. It works with the following values:

- `light`: Indicates that the user has notified the system that they prefer a page that has a light theme (dark text on light background).
- `dark`: Indicates that the user has notified the system that they prefer a page that has a dark theme (light text on dark background).

An earlier version of the spec included a third value, `no-preference`. It was meant to indicate that the user has made no preference known to the system. Since no browser ever implemented it, the value was [removed](https://github.com/w3c/csswg-drafts/issues/3857#issuecomment-634779976) from the spec.

## Supporting dark mode <a href="#supporting-dark-mode" class="w-headline-link">#</a>

### Finding out if dark mode is supported by the browser <a href="#finding-out-if-dark-mode-is-supported-by-the-browser" class="w-headline-link">#</a>

As dark mode is reported through a media query, you can easily check if the current browser supports dark mode by checking if the media query `prefers-color-scheme` matches at all. Note how I don't include any value, but purely check if the media query alone matches.

    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      console.log('🎉 Dark mode is supported');
    }

At the time of writing, `prefers-color-scheme` is supported on both desktop and mobile (where available) by Chrome and Edge as of version 76, Firefox as of version 67, and Safari as of version 12.1 on macOS and as of version 13 on iOS. For all other browsers, you can check the [Can I use support tables](https://caniuse.com/#feat=prefers-color-scheme).

There is a custom element [`<dark-mode-toggle>`](https://github.com/GoogleChromeLabs/dark-mode-toggle) available that adds dark mode support to older browsers. I write about it [further down in this article](#the-lessdark-mode-togglegreater-custom-element).

### Learning about a user's preferences at request time <a href="#learning-about-a-user&#39;s-preferences-at-request-time" class="w-headline-link">#</a>

The [`Sec-CH-Prefers-Color-Scheme`](/user-preference-media-features-headers/) client hint header allows sites to obtain the user's color scheme preferences optionally at request time, allowing servers to inline the right CSS and therefore avoid a flash of incorrect color theme.

### Dark mode in practice <a href="#dark-mode-in-practice" class="w-headline-link">#</a>

Let's finally see how supporting dark mode looks like in practice. Just like with the [Highlander](<https://en.wikipedia.org/wiki/Highlander_(film)>), with dark mode _there can be only one_: dark or light, but never both! Why do I mention this? Because this fact should have an impact on the loading strategy. **Please don't force users to download CSS in the critical rendering path that is for a mode they don't currently use.** To optimize load speed, I have therefore split my CSS for the example app that shows the following recommendations in practice into three parts in order to [defer non-critical CSS](/defer-non-critical-css/):

- `style.css` that contains generic rules that are used universally on the site.
- `dark.css` that contains only the rules needed for dark mode.
- `light.css` that contains only the rules needed for light mode.

### Loading strategy <a href="#loading-strategy" class="w-headline-link">#</a>

The two latter ones, `light.css` and `dark.css`, are loaded conditionally with a `<link media>` query. Initially, [not all browsers will support `prefers-color-scheme`](https://caniuse.com/#feat=prefers-color-scheme) (detectable using the [pattern above](#finding-out-if-dark-mode-is-supported-by-the-browser)), which I deal with dynamically by loading the default `light.css` file via a conditionally inserted `<link rel="stylesheet">` element in a minuscule inline script (light is an arbitrary choice, I could also have made dark the default fallback experience). To avoid a [flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), I hide the content of the page until `light.css` has loaded.

    <script>
      // If `prefers-color-scheme` is not supported, fall back to light mode.
      // In this case, light.css will be downloaded with `highest` priority.
      if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
        document.documentElement.style.display = 'none';
        document.head.insertAdjacentHTML(
          'beforeend',
          '<link rel="stylesheet" href="/light.css" onload="document.documentElement.style.display = \'\'">',
        );
      }
    </script>
    <!--
      Conditionally either load the light or the dark stylesheet. The matching file
      will be downloaded with `highest`, the non-matching file with `lowest`
      priority. If the browser doesn't support `prefers-color-scheme`, the media
      query is unknown and the files are downloaded with `lowest` priority (but
      above I already force `highest` priority for my default light experience).
    -->
    <link rel="stylesheet" href="/dark.css" media="(prefers-color-scheme: dark)" />
    <link
      rel="stylesheet"
      href="/light.css"
      media="(prefers-color-scheme: light)"
    />
    <!-- The main stylesheet -->
    <link rel="stylesheet" href="/style.css" />

### Stylesheet architecture <a href="#stylesheet-architecture" class="w-headline-link">#</a>

I make maximum use of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var), this allows my generic `style.css` to be, well, generic, and all the light or dark mode customization happens in the two other files `dark.css` and `light.css`. Below you can see an excerpt of the actual styles, but it should suffice to convey the overall idea. I declare two variables, `-⁠-⁠color` and `-⁠-⁠background-color` that essentially create a _dark-on-light_ and a _light-on-dark_ baseline theme.

    /* light.css: 👉 dark-on-light */
    :root {
      --color: rgb(5, 5, 5);
      --background-color: rgb(250, 250, 250);
    }

    /* dark.css: 👉 light-on-dark */
    :root {
      --color: rgb(250, 250, 250);
      --background-color: rgb(5, 5, 5);
    }

In my `style.css`, I then use these variables in the `body { … }` rule. As they are defined on the [`:root` CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)—a selector that in HTML represents the `<html>` element and is identical to the selector `html`, except that its specificity is higher—they cascade down, which serves me for declaring global CSS variables.

    /* style.css */
    :root {
      color-scheme: light dark;
    }

    body {
      color: var(--color);
      background-color: var(--background-color);
    }

In the code sample above, you will probably have noticed a property [`color-scheme`](https://drafts.csswg.org/css-color-adjust-1/#propdef-color-scheme) with the space-separated value `light dark`.

This tells the browser which color themes my app supports and allows it to activate special variants of the user agent stylesheet, which is useful to, for example, let the browser render form fields with a dark background and light text, adjust the scroll bars, or to enable a theme-aware highlight color. The exact details of `color-scheme` are specified in [CSS Color Adjustment Module Level 1](https://drafts.csswg.org/css-color-adjust-1/).

🌒 Read up more on [what `color-scheme` actually does](/color-scheme/).

Everything else is then just a matter of defining CSS variables for things that matter on my site. Semantically organizing styles helps a lot when working with dark mode. For example, rather than `-⁠-⁠highlight-yellow`, consider calling the variable `-⁠-⁠accent-color`, as "yellow" may actually not be yellow in dark mode or vice versa. Below is an example of some more variables that I use in my example.

    /* dark.css */
    :root {
      --color: rgb(250, 250, 250);
      --background-color: rgb(5, 5, 5);
      --link-color: rgb(0, 188, 212);
      --main-headline-color: rgb(233, 30, 99);
      --accent-background-color: rgb(0, 188, 212);
      --accent-color: rgb(5, 5, 5);
    }

    /* light.css */
    :root {
      --color: rgb(5, 5, 5);
      --background-color: rgb(250, 250, 250);
      --link-color: rgb(0, 0, 238);
      --main-headline-color: rgb(0, 0, 192);
      --accent-background-color: rgb(0, 0, 238);
      --accent-color: rgb(250, 250, 250);
    }

### Full example <a href="#full-example" class="w-headline-link">#</a>

In the following [Glitch](https://dark-mode-baseline.glitch.me/) embed, you can see the complete example that puts the concepts from above into practice. Try toggling dark mode in your particular [operating system's settings](#activating-dark-mode-in-the-operating-system) and see how the page reacts.

### Loading impact <a href="#loading-impact" class="w-headline-link">#</a>

When you play with this example, you can see why I load my `dark.css` and `light.css` via media queries. Try toggling dark mode and reload the page: the particular currently non-matching stylesheets are still loaded, but with the lowest priority, so that they never compete with resources that are needed by the site right now.

😲 Read up more on [why browsers download stylesheets with non-matching media queries](https://blog.tomayac.com/2018/11/08/why-browsers-download-stylesheets-with-non-matching-media-queries-180513).

<figure><img src="https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format" alt="Site in light mode loads the dark mode CSS with lowest priority." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/flTdLliru6GmqqlOKjNx.png?auto=format&amp;w=1600 1600w" width="800" height="417" /><figcaption>Site in light mode loads the dark mode CSS with lowest priority.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format" alt="Site in dark mode loads the light mode CSS with lowest priority." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/IDs6Le0VBhHu9QEDdxL6.png?auto=format&amp;w=1600 1600w" width="800" height="417" /><figcaption>Site in dark mode loads the light mode CSS with lowest priority.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format" alt="Site in default light mode on a browser that doesn&#39;t support prefers-color-scheme loads the dark mode CSS with lowest priority." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zJqu5k3TIgcZf1OHWWIq.png?auto=format&amp;w=1600 1600w" width="800" height="417" /><figcaption>Site in default light mode on a browser that doesn't support <code>prefers-color-scheme</code> loads the dark mode CSS with lowest priority.</figcaption></figure>### Reacting on dark mode changes <a href="#reacting-on-dark-mode-changes" class="w-headline-link">#</a>

Like any other media query change, dark mode changes can be subscribed to via JavaScript. You can use this to, for example, dynamically change the [favicon](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/#provide_great_icons_tiles) of a page or change the [`<meta name="theme-color">`](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/#meta_theme_color_for_chrome_and_opera) that determines the color of the URL bar in Chrome. The [full example](#full-example) above shows this in action, in order to see the theme color and favicon changes, open the [demo in a separate tab](https://dark-mode-baseline.glitch.me/).

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addListener((e) => {
      const darkModeOn = e.matches;
      console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
    });

As of Chromium 93 and Safari 15, you can adjust the color based on a media query with the `media` attribute of the `meta` theme color element. The first one that matches will be picked. For example, you could have one color for light mode and another one for dark mode. At the time of writing, you can't define those in your manifest. See [w3c/manifest\#975 GitHub issue](https://github.com/w3c/manifest/issues/975).

    <meta
      name="theme-color"
      media="(prefers-color-scheme: light)"
      content="white"
    />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />

## Debugging and testing dark mode <a href="#debugging-and-testing-dark-mode" class="w-headline-link">#</a>

### Emulating `prefers-color-scheme` in DevTools <a href="#emulating-prefers-color-scheme-in-devtools" class="w-headline-link">#</a>

Switching the entire operating system's color scheme can get annoying real quick, so Chrome DevTools now allows you to emulate the user's preferred color scheme in a way that only affects the currently visible tab. Open the [Command Menu](https://developers.google.com/web/tools/chrome-devtools/command-menu), start typing `Rendering`, run the `Show Rendering` command, and then change the **Emulate CSS media feature prefers-color-scheme** option.

<figure><img src="https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RIq2z6Ja1zSzfNTHic5z.png?auto=format&amp;w=1600 1600w" width="800" height="552" /></figure>### Screenshotting `prefers-color-scheme` with Puppeteer <a href="#screenshotting-prefers-color-scheme-with-puppeteer" class="w-headline-link">#</a>

[Puppeteer](https://github.com/GoogleChrome/puppeteer/) is a Node.js library that provides a high-level API to control Chrome or Chromium over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/). With [`dark-mode-screenshot`](https://www.npmjs.com/package/dark-mode-screenshot), we provide a Puppeteer script that lets you create screenshots of your pages in both dark and light mode. You can run this script as a one-off, or alternatively make it part of your Continuous Integration (CI) test suite.

    npx dark-mode-screenshot --url https://googlechromelabs.github.io/dark-mode-toggle/demo/ --output screenshot --fullPage --pause 750

## Dark mode best practices <a href="#dark-mode-best-practices" class="w-headline-link">#</a>

### Avoid pure white <a href="#avoid-pure-white" class="w-headline-link">#</a>

A small detail you may have noticed is that I don't use pure white. Instead, to prevent glowing and bleeding against the surrounding dark content, I choose a slightly darker white. Something like `rgb(250, 250, 250)` works well.

### Re-colorize and darken photographic images <a href="#re-colorize-and-darken-photographic-images" class="w-headline-link">#</a>

If you compare the two screenshots below, you will notice that not only the core theme has changed from _dark-on-light_ to _light-on-dark_, but that also the hero image looks slightly different. My [user research](https://medium.com/dev-channel/re-colorization-for-dark-mode-19e2e17b584b) has shown that the majority of the surveyed people prefer slightly less vibrant and brilliant images when dark mode is active. I refer to this as _re-colorization_.

<figure><img src="https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format" alt="Hero image slightly darkened in dark mode." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/qzzYCKNSwoJr9BBEQlR7.png?auto=format&amp;w=1600 1600w" width="800" height="618" /><figcaption>Hero image slightly darkened in dark mode.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format" alt="Regular hero image in light mode." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/41RbLRZ5wzkoVnIRJkNl.png?auto=format&amp;w=1600 1600w" width="800" height="618" /><figcaption>Regular hero image in light mode.</figcaption></figure>

Re-colorization can be achieved through a CSS filter on my images. I use a CSS selector that matches all images that don't have `.svg` in their URL, the idea being that I can give vector graphics (icons) a different re-colorization treatment than my images (photos), more about this in the [next paragraph](#vector-graphics-and-icons). Note how I again use a [CSS variable](https://developer.mozilla.org/en-US/docs/Web/CSS/var), so I can later on flexibly change my filter.

🎨 Read up more on [user research regarding re-colorization preferences with dark mode](https://medium.com/dev-channel/re-colorization-for-dark-mode-19e2e17b584b).

As re-colorization is only needed in dark mode, that is, when `dark.css` is active, there are no corresponding rules in `light.css`.

    /* dark.css */
    --image-filter: grayscale(50%);

    img:not([src*='.svg']) {
      filter: var(--image-filter);
    }

#### Customizing dark mode re-colorization intensities with JavaScript <a href="#customizing-dark-mode-re-colorization-intensities-with-javascript" class="w-headline-link">#</a>

Not everyone is the same and people have different dark mode needs. By sticking to the re-colorization method described above, I can easily make the grayscale intensity a user preference that I can [change via JavaScript](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Values_in_JavaScript), and by setting a value of `0%`, I can also disable re-colorization completely. Note that [`document.documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) provides a reference to the root element of the document, that is, the same element I can reference with the [`:root` CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root).

    const filter = 'grayscale(70%)';
    document.documentElement.style.setProperty('--image-filter', value);

### Invert vector graphics and icons <a href="#invert-vector-graphics-and-icons" class="w-headline-link">#</a>

For vector graphics—that in my case are used as icons that I reference via `<img>` elements—I use a different re-colorization method. While [research](https://dl.acm.org/citation.cfm?id=2982168) has shown that people don't like inversion for photos, it does work very well for most icons. Again I use CSS variables to determine the inversion amount in the regular and in the [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) state.

<figure><img src="https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format" alt="Icons are inverted in dark mode." sizes="(min-width: 744px) 744px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/JGYFpAPi4233HrEKTQZp.png?auto=format&amp;w=1488 1488w" width="744" height="48" /><figcaption>Icons are inverted in dark mode.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format" alt="Regular icons in light mode." sizes="(min-width: 744px) 744px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/W8AWbuqWthI6CfFsYunk.png?auto=format&amp;w=1488 1488w" width="744" height="48" /><figcaption>Regular icons in light mode.</figcaption></figure>

Note how again I only invert icons in `dark.css` but not in `light.css`, and how `:hover` gets a different inversion intensity in the two cases to make the icon appear slightly darker or slightly brighter, dependent on the mode the user has selected.

    /* dark.css */
    --icon-filter: invert(100%);
    --icon-filter_hover: invert(40%);

    img[src*='.svg'] {
      filter: var(--icon-filter);
    }

    /* light.css */
    --icon-filter_hover: invert(60%);

    /* style.css */
    img[src*='.svg']:hover {
      filter: var(--icon-filter_hover);
    }

### Use `currentColor` for inline SVGs <a href="#use-currentcolor-for-inline-svgs" class="w-headline-link">#</a>

For _inline_ SVG images, instead of [using inversion filters](#invert-vector-graphics-and-icons), you can leverage the [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword) CSS keyword that represents the value of an element's `color` property. This lets you use the `color` value on properties that do not receive it by default. Conveniently, if `currentColor` is used as the value of the SVG [`fill` or `stroke` attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes#Fill_and_Stroke_Attributes), it instead takes its value from the inherited value of the color property. Even better: this also works for [`<svg><use href="…"></svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use), so you can have separate resources and `currentColor` will still be applied in context. Please note that this only works for _inline_ or `<use href="…">` SVGs, but not SVGs that are referenced as the `src` of an image or somehow via CSS. You can see this applied in the demo below.

    <!-- Some inline SVG -->
    <svg xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
    >
      […]
    </svg>

### Smooth transitions between modes <a href="#smooth-transitions-between-modes" class="w-headline-link">#</a>

Switching from dark mode to light mode or vice versa can be smoothed thanks to the fact that both `color` and `background-color` are [animatable CSS properties](https://www.quackit.com/css/css3/animations/animatable_properties/). Creating the animation is as easy as declaring two `transition`s for the two properties. The example below illustrates the overall idea, you can experience it live in the [demo](https://dark-mode-baseline.glitch.me/).

    body {
      --duration: 0.5s;
      --timing: ease;

      color: var(--color);
      background-color: var(--background-color);

      transition: color var(--duration) var(--timing), background-color var(
            --duration
          ) var(--timing);
    }

### Art direction with dark mode <a href="#art-direction-with-dark-mode" class="w-headline-link">#</a>

While for loading performance reasons in general I recommend to exclusively work with `prefers-color-scheme` in the `media` attribute of `<link>` elements (rather than inline in stylesheets), there are situations where you actually may want to work with `prefers-color-scheme` directly inline in your HTML code. Art direction is such a situation. On the web, art direction deals with the overall visual appearance of a page and how it communicates visually, stimulates moods, contrasts features, and psychologically appeals to a target audience.

With dark mode, it's up to the judgment of the designer to decide what is the best image at a particular mode and whether [re-colorization of images](#photographic-images) is maybe _not_ good enough. If used with the `<picture>` element, the `<source>` of the image to be shown can be made dependent on the `media` attribute. In the example below, I show the Western hemisphere for dark mode, and the Eastern hemisphere for light mode or when no preference is given, defaulting to the Eastern hemisphere in all other cases. This is of course purely for illustrative purposes. Toggle dark mode on your device to see the difference.

    <picture>
      <source srcset="western.webp" media="(prefers-color-scheme: dark)" />
      <source srcset="eastern.webp" media="(prefers-color-scheme: light)" />
      <img src="eastern.webp" />
    </picture>

### Dark mode, but add an opt-out <a href="#dark-mode-but-add-an-opt-out" class="w-headline-link">#</a>

As mentioned in the [why dark mode](#why-dark-mode) section above, dark mode is an aesthetic choice for most users. In consequence, some users may actually like to have their operating system UI in dark, but still prefer to see their webpages the way they are used to seeing them. A great pattern is to initially adhere to the signal the browser sends through `prefers-color-scheme`, but to then optionally allow users to override their system-level setting.

#### The `<dark-mode-toggle>` custom element <a href="#the-lessdark-mode-togglegreater-custom-element" class="w-headline-link">#</a>

You can of course create the code for this yourself, but you can also just use a ready-made custom element (web component) that I have created right for this purpose. It's called [`<dark-mode-toggle>`](https://github.com/GoogleChromeLabs/dark-mode-toggle) and it adds a toggle (dark mode: on/off) or a theme switcher (theme: light/dark) to your page that you can fully customize. The demo below shows the element in action (oh, and I have also 🤫 silently snuck it in all of the [other](https://dark-mode-baseline.glitch.me/) [examples](https://dark-mode-currentcolor.glitch.me/) [above](https://dark-mode-picture.glitch.me/)).

    <dark-mode-toggle
      legend="Theme Switcher"
      appearance="switch"
      dark="Dark"
      light="Light"
      remember="Remember this"
    ></dark-mode-toggle>

<figure><img src="https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format" alt="&lt;dark-mode-toggle&gt; in light mode." sizes="(min-width: 140px) 140px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=140 140w,     https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=160 160w,     https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=182 182w,     https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=207 207w,     https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=236 236w,     https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=270 270w,     https://web-dev.imgix.net/image/admin/Xy3uus69HnrkRPO4EuRu.png?auto=format&amp;w=280 280w" width="140" height="76" /><figcaption><code>&lt;dark-mode-toggle&gt;</code> in light mode.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format" alt="&lt;dark-mode-toggle&gt; in dark mode." sizes="(min-width: 140px) 140px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=140 140w,     https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=160 160w,     https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=182 182w,     https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=207 207w,     https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=236 236w,     https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=270 270w,     https://web-dev.imgix.net/image/admin/glRVRJpQ9hMip6MbqY9N.png?auto=format&amp;w=280 280w" width="140" height="76" /><figcaption><code>&lt;dark-mode-toggle&gt;</code> in dark mode.</figcaption></figure>

Try clicking or tapping the dark mode controls in the upper right corner in the demo below. If you check the checkbox in the third and the fourth control, see how your mode selection is remembered even when you reload the page. This allows your visitors to keep their operating system in dark mode, but enjoy your site in light mode or vice versa.

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

Working with and supporting dark mode is fun and opens up new design avenues. For some of your visitors it can be the difference between not being able to handle your site and being a happy user. There are some pitfalls and careful testing is definitely required, but dark mode is definitely a great opportunity for you to show that you care about all of your users. The best practices mentioned in this post and helpers like the [`<dark-mode-toggle>`](https://github.com/GoogleChromeLabs/dark-mode-toggle) custom element should make you confident in your ability to create an amazing dark mode experience. [Let me know on Twitter](https://twitter.com/tomayac) what you create and if this post was useful or also suggestions for improving it. Thanks for reading! 🌒

## Related links <a href="#related-links" class="w-headline-link">#</a>

Resources for the `prefers-color-scheme` media query:

- [Chrome Platform Status page](https://chromestatus.com/feature/5109758977638400)
- [Chromium bug](https://crbug.com/889087)
- [Media Queries Level 5 spec](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme)

Resources for the `color-scheme` meta tag and CSS property:

- [The `color-scheme` CSS property and meta tag](/color-scheme/)
- [Chrome Platform Status page](https://chromestatus.com/feature/5330651267989504)
- [Chromium bug](http://crbug.com/925935)
- [CSS Color Adjustment Module Level 1 spec](https://drafts.csswg.org/css-color-adjust-1/)
- [CSS WG GitHub Issue for the meta tag and the CSS property](https://github.com/w3c/csswg-drafts/issues/3299)
- [HTML WHATWG GitHub Issue for the meta tag](https://github.com/whatwg/html/issues/4504)

General dark mode links:

- [Material Design—Dark Theme](https://material.io/design/color/dark-theme.html)
- [Dark Mode in Web Inspector](https://webkit.org/blog/8892/dark-mode-in-web-inspector/)
- [Dark Mode Support in WebKit](https://webkit.org/blog/8840/dark-mode-support-in-webkit/)
- [Apple Human Interface Guidelines—Dark Mode](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/)

Background research articles for this post:

- [What Does Dark Mode's "supported-color-schemes" Actually Do? 🤔](https://medium.com/dev-channel/what-does-dark-modes-supported-color-schemes-actually-do-69c2eacdfa1d)
- [Let there be darkness! 🌚 Maybe…](https://medium.com/dev-channel/let-there-be-darkness-maybe-9facd9c3023d)
- [Re-Colorization for Dark Mode](https://medium.com/dev-channel/re-colorization-for-dark-mode-19e2e17b584b)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The `prefers-color-scheme` media feature, the `color-scheme` CSS property, and the related meta tag are the implementation work of 👏 [Rune Lillesveen](https://twitter.com/runeli). Rune is also a co-editor of the [CSS Color Adjustment Module Level 1](https://drafts.csswg.org/css-color-adjust-1/) spec. I would like to 🙏 thank [Lukasz Zbylut](https://www.linkedin.com/in/lukasz-zbylut/), [Rowan Merewood](https://twitter.com/rowan_m), [Chirag Desai](https://www.linkedin.com/in/chiragd/), and [Rob Dodson](https://twitter.com/rob_dodson) for their thorough reviews of this article. The [loading strategy](#loading-strategy) is the brainchild of [Jake Archibald](https://twitter.com/jaffathecake). [Emilio Cobos Álvarez](https://twitter.com/ecbos_) has pointed me to the correct `prefers-color-scheme` detection method. The tip with referenced SVGs and `currentColor` came from [Timothy Hatcher](https://twitter.com/xeenon). Finally, I am thankful to the many anonymous participants of the various user studies that have helped shape the recommendations in this article. Hero image by [Nathan Anderson](https://unsplash.com/photos/kujXUuh1X0o).

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Aug 2, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/prefers-color-scheme/index.md)

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
