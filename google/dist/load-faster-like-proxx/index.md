<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format" alt="A screenshot of PROXX" class="w-hero w-hero--cover w-hero--center" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/14VzGmCgR470nlhPy3Fv.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#techniques-to-make-a-web-app-load-fast-even-on-a-feature-phone" class="w-toc__header--link">Techniques to make a web app load fast, even on a feature phone</a>

- [Capturing the status quo](#capturing-the-status-quo)
- [Waterfall analysis](#waterfall-analysis)
- [Reducing connection count](#reducing-connection-count)
- [Parallelizing loads](#parallelizing-loads)
- [Results](#results)
- [Prerendering](#prerendering)
- [Inlining](#inlining)
- [Aggressive code splitting](#aggressive-code-splitting)
- [More Sleight of Hand](#more-sleight-of-hand)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Techniques to make a web app load fast, even on a feature phone

How we used code splitting, code inlining, and server-side rendering in PROXX.

Sep 23, 2019 <span class="w-author__separator">•</span> Updated May 19, 2021

[<img src="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Surma" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/surma/)

<a href="/authors/surma/" class="w-author__name-link">Surma</a>

- <a href="https://twitter.com/DasSurma" class="w-author__link">Twitter</a>

At Google I/O 2019 Mariko, Jake, and I shipped [PROXX](https://proxx.app), a modern Minesweeper-clone for the web. Something that sets PROXX apart is the focus on accessibility (you can play it with a screenreader!) and the ability to run as well on a feature phone as on a high-end desktop device. Feature phones are constrained in multiple ways:

- Weak CPUs
- Weak or non-existent GPUs
- Small screens without touch input
- Very limited amounts of memory

But they run a modern browser and are very affordable. For this reason, feature phones are making a resurgence in emerging markets. Their price point allows a whole new audience, who previously couldn't afford it, to come online and make use of the modern web. **[For 2019 it is projected that around 400 million feature phones will be sold in India alone](https://www.counterpointresearch.com/more-than-a-billion-feature-phones-to-be-sold-over-next-three-years/)**, so users on feature phones might become a significant portion of your audience. In addition to that, connection speeds akin to 2G are the norm in emerging markets. How did we manage to make PROXX work well under feature phone conditions?

PROXX gameplay.

Performance is important, and that includes both loading performance and runtime performance. It has been shown that **good performance correlates with increased user retention, improved conversions and—most importantly—increased inclusivity.** [Jeremy Wagner](https://twitter.com/malchata) has much more data and insight on [why performance matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/).

This is part 1 of a two-part series. **Part 1 focuses on loading performance**, and part 2 will focus on runtime performance.

## Capturing the status quo <a href="#capturing-the-status-quo" class="w-headline-link">#</a>

Testing your loading performance on a _real_ device is critical. If you don't have a real device at hand, I recommend [WebPageTest](https://webpagetest.org) (WPT), specifically the ["simple" setup](https://webpagetest.org/easy). **WPT runs a battery of loading tests on a _real_ device with an emulated 3G connection.**

3G is a good speed to measure. While you might be used to 4G, LTE or soon even 5G, the reality of mobile internet looks quite different. Maybe you're on a train, at a conference, at a concert, or on a flight. What you'll be experiencing there is most likely closer to 3G, and sometimes even worse.

That being said, we're going to focus on 2G in this article because PROXX is explicitly targeting feature phones and emerging markets in its target audience. Once WebPageTest has run its test, you get a waterfall (similar to what you see in DevTools) as well as a filmstrip at the top. The film strip shows what your user sees while your app is loading. On 2G, the loading experience of the unoptimized version of PROXX is pretty bad:

The filmstrip video shows what the user sees when PROXX is loading on a real, low-end device over an emulated 2G connection.

When loaded over 3G, the user sees 4 seconds of white nothingness. **Over 2G the user sees absolutely nothing for over 8 seconds.** If you read [why performance matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) you know that we have now lost a good portion of our potential users due to impatience. The user needs to download all of the 62 KB of JavaScript for anything to appear on screen. The silver lining in this scenario is that the second anything appears on screen it is also interactive. Or is it?

<figure><embed src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/CwGKJEpvyPw9UmvJf3su.webp?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>The <a href="/first-meaningful-paint">First Meaningful Paint</a> in the unoptimized version of PROXX is <em>technically</em> <a href="/interactive">interactive</a> but useless to the user.</figcaption></figure>After about 62 KB of gzip'd JS has been downloaded and the DOM has been generated, the user gets to see our app. The app is *technically* interactive. Looking at the visual, however, shows a different reality. The web fonts are still loading in the background and until they are ready the user can see no text. While this state qualifies as a [First Meaningful Paint (FMP)](/first-meaningful-paint), it surely does not qualify as properly [interactive](/interactive), as the user can't tell what any of the inputs are about. It takes another second on 3G and 3 seconds on 2G until the app is ready to go. **All in all, the app takes 6 seconds on 3G and 11 seconds on 2G to become interactive.**

## Waterfall analysis <a href="#waterfall-analysis" class="w-headline-link">#</a>

Now that we know _what_ the user sees, we need to figure out the _why_. For this we can look at the waterfall and analyze why resources are loading too late. In our 2G trace for PROXX we can see two major red flags:

1.  There are multiple, multi-colored thin lines.
2.  JavaScript files form a chain. For example, the second resource only starts loading once the first resource is finished, and the third resource only starts when the second resource is finished.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format" alt="The waterfall gives insight into which resources are loading when and how long they take." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Vcd5JU5MJNr0IHyMMtAU.png?auto=format&amp;w=1600 1600w" width="800" height="345" /><figcaption>The waterfall gives insight into which resources are loading when and how long they take.</figcaption></figure>### Reducing connection count <a href="#reducing-connection-count" class="w-headline-link">#</a>

Each thin line (`dns`, `connect`, `ssl`) stands for the creation of a new HTTP connection. Setting up a new connection is costly as it takes around 1s on 3G and roughly 2.5s on 2G. In our waterfall we see a new connection for:

- Request \#1: Our `index.html`
- Request \#5: The font styles from `fonts.googleapis.com`
- Request \#8: Google Analytics
- Request \#9: A font file from `fonts.gstatic.com`
- Request \#14: The web app manifest

The new connection for `index.html` is unavoidable. The browser _has_ to create a connection to our server to get the contents. The new connection for Google Analytics could be avoided by inlining something like [Minimal Analytics](https://minimalanalytics.com), but Google Analytics is not blocking our app from rendering or becoming interactive, so we don't really care about how fast it loads. Ideally, Google Analytics should be loaded in idle time, when everything else has already loaded. That way it won't take up bandwidth or processing power during the initial load. The new connection for the web app manifest is [prescribed by the fetch spec](https://fetch.spec.whatwg.org/#connections), as the manifest has to be loaded over a non-credentialed connection. Again, the web app manifest doesn't block our app from rendering or becoming interactive, so we don't need to care that much.

The two fonts and their styles, however, are a problem as they block rendering and also interactivity. If we look at the CSS that is delivered by `fonts.googleapis.com`, it's just two `@font-face` rules, one for each font. The font _styles_ are so small in fact, that we decided to inline it into our HTML, removing one unnecessary connection. To avoid the cost of the connection setup for the font _files_, we can copy them to our own server.

**Note:** Copying CSS or font files to your own server is okay when using [Google Fonts](https://fonts.google.com). Other font providers might have different rules. Please check with your font provider's terms of service!

### Parallelizing loads <a href="#parallelizing-loads" class="w-headline-link">#</a>

Looking at the waterfall, we can see that once the first JavaScript file is done loading, new files start loading immediately. This is typical for module dependencies. Our main module probably has static imports, so the JavaScript cannot run until those imports are loaded. The important thing to realize here is that these kinds of dependencies are known at build time. We can make use of `<link rel="preload">` tags to make sure all dependencies start loading the second we receive our HTML.

### Results <a href="#results" class="w-headline-link">#</a>

Let's take a look at what our changes have achieved. It's important to not change any other variables in our test setup that could skew the results, so we will be using [WebPageTest's simple setup](https://webpagetest.org/easy) for the rest of this article and look at the filmstrip:

We use WebPageTest's filmstrip to see what our changes have achieved.

**These changes reduced our TTI from 11 to 8.5**, which is roughly the 2.5s of connection setup time we aimed to remove. Well done us.

## Prerendering <a href="#prerendering" class="w-headline-link">#</a>

While we just reduced our [TTI](/interactive), we haven't really affected the eternally long white screen the user has to endure for 8.5 seconds. Arguably **the biggest improvements for [FMP](/first-meaningful-paint) can be achieved by sending styled markup in your `index.html`**. Common techniques to achieve this are prerendering and server-side rendering, which are closely related and are explained in [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web). Both techniques run the web app in Node and serialize the resulting DOM to HTML. Server-side rendering does this per request on the, well, server side, while prerendering does this at build time and stores the output as your new `index.html`. Since PROXX is a [JAMStack](https://jamstack.org/) app and has no server side, we decided to implement prerendering.

There are many ways to implement a prerenderer. In PROXX we chose to use [Puppeteer](https://pptr.dev), which starts Chrome without any UI and allows you to remote control that instance with a Node API. We use this to inject our markup and our JavaScript and then read back the DOM as a string of HTML. Because we are using [CSS Modules](https://github.com/css-modules/css-modules), we get CSS inlining of the styles that we need for free.

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(rawIndexHTML);
      await page.evaluate(codeToRun);
      const renderedHTML = await page.content();
      browser.close();
      await writeFile("index.html", renderedHTML);

With this in place, we can expect an improvement for our FMP. We still need to load and execute the same amount of JavaScript as before, so we shouldn't expect TTI to change much. If anything, our `index.html` has gotten bigger and might push back our TTI a bit. There's only one way to find out: running WebPageTest.

The filmstrip shows a clear improvement for our FMP metric. TTI is mostly unaffected.

**Our First Meaningful Paint has moved from 8.5 seconds to 4.9 seconds,** a massive improvement. Our TTI still happens at around 8.5 seconds so it has been largely unaffected by this change. What we did here is a _perceptual_ change. Some might even call it a sleight of hand. By rendering an intermediate visual of the game, we are changing the perceived loading performance for the better.

## Inlining <a href="#inlining" class="w-headline-link">#</a>

Another metric that both DevTools and WebPageTest give us is [Time To First Byte (TTFB)](/time-to-first-byte). This is the time it takes from the first byte of the request being sent to the first byte of the response being received. This time is also often called a Round Trip Time (RTT), although technically there is a difference between these two numbers: RTT does not include the processing time of the request on the server side. [DevTools](https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-preview) and WebPageTest visualize TTFB with a light color within the request/response block.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J86O71iJ9OPjlginvwrp.svg" alt="The light section of a request signifies the request is waiting to receive the first byte of the response." width="800" height="171" /><figcaption>The light section of a request signifies the request is waiting to receive the first byte of the response.</figcaption></figure>Looking at our waterfall, we can see that the **all of requests spend the *majority* of their time waiting** for the first byte of the response to arrive.

This problem was what HTTP/2 Push was originally conceived for. The app developer _knows_ that certain resources are needed and can _push_ them down the wire. By the time the client realizes that it needs to fetch additional resources, they are already in the browser's caches. **HTTP/2 Push turned out to be too hard to get right and is considered discouraged.** This problem space will be revisited during the standardization of HTTP/3. For now, **the easiest solution is to _inline_ all the critical resources** at the expense of caching efficiency.

Our critical CSS is already inlined thanks to CSS Modules and our Puppeteer-based prerenderer. For JavaScript we need to inline our critical modules _and their dependencies_. This task has varying difficulty, based on the bundler that you're using.

**Note:** In this step we also subset our font files to contain only the glyphs that we need for our landing page. I am not going to go into detail on this step as it is not easily abstracted and sometimes not even practical. We still load the full font files lazily, but they are not needed for the initial render.

With the inlining of our JavaScript we have reduced our TTI from 8.5s to 7.2s.

This shaved 1 second off our TTI. We have now reached the point where our `index.html` contains everything that is needed for the initial render and becoming interactive. The HTML can render while it is still downloading, creating our FMP. The moment the HTML is done parsing and executing, the app is interactive.

## Aggressive code splitting <a href="#aggressive-code-splitting" class="w-headline-link">#</a>

Yes, our `index.html` contains everything that is needed to become interactive. But on closer inspection it turns out it also contains everything else. Our `index.html` is around 43 KB. Let's put that in relation to what the user can interact with at the start: We have a form to configure the game containing a couple of components, a start button and probably some code to persist and load user settings. That's pretty much it. 43 KB seems like a lot.

<figure><embed src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PDjREt9PrWz9oqayT3CE.webp?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>The landing page of PROXX. Only critical components are used here.</figcaption></figure>To understand where our bundle size is coming from we can use a [source map explorer](https://npm.im/source-map-explorer) or a similar tool to break down what the bundle consists of. As predicted, our bundle contains the game logic, the rendering engine, the win screen, the lose screen and a bunch of utilities. Only a small subset of these modules are needed for the landing page. Moving everything that is not strictly required for interactivity into a lazily-loaded module will decrease TTI *significantly*.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4j3GRcHylDnIuwhH8iKT.svg" alt="Analyzing the contents of PROXX&#39;s `index.html` shows a lot of unneeded resources. Critical resources are highlighted." width="700" height="700" /><figcaption>Analyzing the contents of PROXX's `index.html` shows a lot of unneeded resources. Critical resources are highlighted.</figcaption></figure>What we need to do is [code split](/reduce-javascript-payloads-with-code-splitting/). Code splitting breaks apart your monolithic bundle into smaller parts that can be lazy-loaded on-demand. Popular bundlers like [Webpack](https://webpack.js.org), [Rollup](https://rollupjs.org), and [Parcel](https://parceljs.org) support code splitting by using dynamic `import()`. The bundler will analyze your code and *inline* all modules that are imported *statically*. Everything that you import *dynamically* will be put into its own file and will only be fetched from the network once the `import()` call gets executed. Of course hitting the network has a cost and should only be done if you have the time to spare. **The mantra here is to statically import the modules that are *critically* needed at load time and dynamically load everything else.** But you shouldn't wait to the very last moment to lazy-load modules that are definitely going to be used. [Phil Walton](https://twitter.com/philwalton)'s [Idle Until Urgent](https://philipwalton.com/articles/idle-until-urgent/) is a great pattern for a healthy middle ground between lazy loading and eager loading.

In PROXX we created a `lazy.js` file that statically imports everything that we _don't_ need. In our main file, we can then _dynamically_ import `lazy.js`. However, some of our [Preact](https://preactjs.com) components ended up in `lazy.js`, which turned out to be a bit of a complication as Preact can't handle lazily-loaded components out of the box. For this reason we wrote a little `deferred` component wrapper that allows us to render a placeholder until the actual component has loaded.

    export default function deferred(componentPromise) {
      return class Deferred extends Component {
        constructor(props) {
          super(props);
          this.state = {
            LoadedComponent: undefined
          };
          componentPromise.then(component => {
            this.setState({ LoadedComponent: component });
          });
        }

        render({ loaded, loading }, { LoadedComponent }) {
          if (LoadedComponent) {
            return loaded(LoadedComponent);
          }
          return loading();
        }
      };
    }

With this in place, we can use a Promise of a component in our `render()` functions. For example, the `<Nebula>` component, which renders the animated background image, will be replaced by an empty `<div>` while the component is loading. Once the component is loaded and ready to use, the `<div>` will be replaced with the actual component.

    const NebulaDeferred = deferred(
      import("/components/nebula").then(m => m.default)
    );

    return (
      // ...
      <NebulaDeferred
        loading={() => <div />}
        loaded={Nebula => <Nebula />}
      />
    );

With all of this in place, we reduced our `index.html` to a mere 20 KB, less than half of the original size. What effect does this have on FMP and TTI? WebPageTest will tell!

The filmstrip confirms: Our TTI is now at 5.4s. A drastic improvement from our original 11s.

Our FMP and TTI are only 100ms apart, as it is only a matter of parsing and executing the inlined JavaScript. After just 5.4s on 2G, the app is completely interactive. All the other, less essential modules are loaded in the background.

## More Sleight of Hand <a href="#more-sleight-of-hand" class="w-headline-link">#</a>

If you look at our list of critical modules above, you'll see that the rendering engine is not part of the critical modules. Of course, the game cannot start until we have our rendering engine to render the game. We could disable the "Start" button until our rendering engine is ready to start the game, but in our experience the user usually takes long enough to configure their game settings that this isn't necessary. Most of the time the rendering engine and the other remaining modules are done loading by the time the user presses "Start". In the rare case that the user is quicker than their network connection, we show a simple loading screen that waits for the remaining modules to finish.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Measuring is important. To avoid spending time on problems that are not real, we recommend to always measure first before implementing optimizations. Additionally, measurements should be done on _real_ devices on a 3G connection or on [WebPageTest](https://webpagetest.org/easy) if no real device is at hand.

The filmstrip can give insight into how loading your app _feels_ for the user. The waterfall can tell you what resources are responsible for potentially long loading times. Here's a checklist of things you can do to improve loading performance:

- Deliver as many assets as possible over one connection.
- [Preload](/preload-critical-assets) or even inline resources that are required for the first render and interactivity.
- Prerender your app to improve perceived loading performance.
- Make use of aggressive [code splitting](/reduce-javascript-payloads-with-code-splitting/) to reduce the amount of code needed for interactivity.

Stay tuned for part 2 where we discuss how to optimize runtime performance on hyper-constrained devices.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/memory/" class="w-chip">Memory</a>

<span class="w-mr--sm"> Last updated: May 19, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/load-faster-like-proxx/index.md)

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
