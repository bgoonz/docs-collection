<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format" alt="Icons contained inside white circles compared to icons covering its entire circle" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/lzLo9JCh6bcehH2nSH0n.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#adaptive-icon-support-in-pwas-with-maskable-icons" class="w-toc__header--link">Adaptive icon support in PWAs with maskable icons</a>

- [What are maskable icons?](#what)
- [Are my current icons ready?](#are-my-current-icons-ready)
- [How do I adopt maskable icons?](#how-do-i-adopt-maskable-icons)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Adaptive icon support in PWAs with maskable icons

A new icon format to use adaptive icons on supporting platforms.

Dec 19, 2019 <span class="w-author__separator">•</span> Updated May 19, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/xxIhAVCPO90YG4I5LFYI.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Tiger Oakes" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/xxIhAVCPO90YG4I5LFYI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/xxIhAVCPO90YG4I5LFYI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/xxIhAVCPO90YG4I5LFYI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/xxIhAVCPO90YG4I5LFYI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/xxIhAVCPO90YG4I5LFYI.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/tigeroakes/)

<a href="/authors/tigeroakes/" class="w-author__name-link">Tiger Oakes</a>

- <a href="https://twitter.com/Not_Woods" class="w-author__link">Twitter</a>
- <a href="https://github.com/NotWoods" class="w-author__link">GitHub</a>
- <a href="https://tigeroakes.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

## What are maskable icons? <a href="#what" class="w-headline-link">#</a>

If you've installed a Progressive Web App on a recent Android phone, you might notice the icon shows up with a white background. Android Oreo introduced adaptive icons, which display app icons in a variety of shapes across different device models. Icons that don't follow this new format are given white backgrounds.

<figure><img src="https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format" alt="Transparent PWA icons appear inside white circles on Android" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/jzjx6dGkXN9EdqnUzAeg.png?auto=format&amp;w=800 800w" width="400" height="100" /><figcaption>Transparent PWA icons appear inside white circles on Android</figcaption></figure>Maskable icons are a new icon format that give you more control and let your Progressive Web App use adaptive icons. If you supply a maskable icon, your icon can fill up the entire shape and look great on all Android devices. Firefox and Chrome have recently added support for this new format, and you can adopt it in your apps.

## <figure><img src="https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format" alt="Maskable icons cover the entire circle instead" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/J7gkg9ylP2ANlFawblze.png?auto=format&amp;w=800 800w" width="400" height="100" /><figcaption>Maskable icons cover the entire circle instead</figcaption></figure>Are my current icons ready? <a href="#are-my-current-icons-ready" class="w-headline-link">#</a>

Since maskable icons need to support a variety of shapes, you supply an opaque image with some padding that the browser can later crop into the desired shape and size. It's best not to rely on any particular shape, since the ultimately chosen shape can vary by browser and per platform.

Different platform specific shapes

Luckily, there's a well-defined and [standardized](https://w3c.github.io/manifest/#icon-masks) "minimum safe zone" that all platforms respect. The important parts of your icon, such as your logo, should be within a circular area in the center of the icon with a radius equal to 40% of the icon width. The outer 10% edge may be cropped.

You can check which parts of your icons land within the safe zone with Chrome DevTools. With your Progressive Web App open, launch DevTools and navigate to the **Application** panel. In the **Icons** section, you can choose to **Show only the minimum safe area for maskable icons**. Your icons will be trimmed so that only the safe area is visible. If your logo is visible within this safe area, you're good to go.

<figure><img src="https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format" alt="The Applications panel" class="w-screenshot" sizes="(min-width: 762px) 762px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/UeKTJM2SE0SQhgnnyaQG.png?auto=format&amp;w=1524 1524w" width="762" height="423" /><figcaption>The Applications panel</figcaption></figure>To test your maskable icon with the variety of Android shapes, use the [Maskable.app](https://maskable.app/) tool I've created. Open an icon, then Maskable.app will let you try out various shapes and sizes, and you can share the preview with others on your team.

## How do I adopt maskable icons? <a href="#how-do-i-adopt-maskable-icons" class="w-headline-link">#</a>

If you want to create a maskable icon based on your existing icon, you can use the [Maskable.app Editor](https://maskable.app/editor). Upload your icon, adjust the color and size, then export the image.

<figure><img src="https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format" alt="Creating icons in Maskable.app Editor" class="w-screenshot" sizes="(min-width: 670px) 670px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/MDXDwH3RWyj4po6daeXw.png?auto=format&amp;w=1340 1340w" width="670" height="569" /><figcaption>Creating icons in Maskable.app Editor</figcaption></figure>Once you've created a maskable icon image and tested it out in DevTools, you'll need to update your [web app manifest](https://developers.google.com/web/fundamentals/web-app-manifest) to point to the new assets. The web app manifest provides information about your web app in a JSON file, and includes an [`icons` array](https://developers.google.com/web/fundamentals/web-app-manifest#icons).

With the inclusion of maskable icons, a new property value has been added for image resources listed in a web app manifest. The `purpose` field tells the browser how your icon should be used. By default, icons will have a purpose of `"any"`. These icons will be resized on top of a white background on Android.

Maskable icons should use a different purpose: `"maskable"`. This indicates that an image is meant to be used with icon masks, giving you more control over the result. This way, your icons will not have a white background. You can also specify multiple space-separated purposes (for example, `"any maskable"`), if you want your maskable icon to be used without a mask on other devices.

While you _can_ specify multiple space-separated purposes like `"any maskable"`, in practice you _shouldn't_. Using `"maskable"` icons as `"any"` icons is suboptimal as the icon is going to be used as-is, resulting in excess padding and making the core icon content smaller. Ideally, icons for the `"any"` purpose should have transparent regions and no extra padding, like your site's favicons, since the browser isn't going to add that for them.

    {
      …
      "icons": [
        …
        {
          "src": "path/to/regular_icon.png",
          "sizes": "196x196",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "path/to/maskable_icon.png",
          "sizes": "196x196",
          "type": "image/png",
          "purpose": "maskable" // <-- New property value `"maskable"`
        },
        …
      ],
      …
    }

With this, you can go forth and create your own maskable icons, making sure you app looks great edge-to-edge (and for what it's worth, circle-to-circle, oval-to-oval 😄).

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [Joe Medley](https://github.com/jpmedley).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: May 19, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/maskable-icon/index.md)

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
