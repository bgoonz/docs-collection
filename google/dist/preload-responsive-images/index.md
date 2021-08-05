<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format" alt="A wall with a bunch of image frames in different sizes." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/QDCTiiyXE11bYSZMP3Yt.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#preloading-responsive-images" class="w-toc__header--link">Preloading responsive images</a>

- [Responsive images overview](#responsive-images-overview)
- [Preload overview](#preload-overview)
- [Responsive images + preload = faster image loads](#responsive-images-+-preload-faster-image-loads)
- [imagesrcset and imagesizes](#imagesrcset-and-imagesizes)
- [Use cases](#use-cases)
- [Preloading dynamically-injected responsive images](#preloading-dynamically-injected-responsive-images)
- [Preloading background images using image-set](#preloading-background-images-using-image-set)
- [Preloading responsive images in action](#preloading-responsive-images-in-action)
- [Preload and &lt;picture&gt;?](#preload-and-lesspicturegreater)
- [Summary](#summary)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Preloading responsive images

Starting in Chrome 73, link rel="preload" and responsive images can be combined in order to load images faster.

Sep 30, 2019

[<img src="https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yoav Weiss" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/FOIxDKJfuHssXMNzezIt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/yoavweiss/)

<a href="/authors/yoavweiss/" class="w-author__name-link">Yoav Weiss</a>

- <a href="https://twitter.com/yoavweiss" class="w-author__link">Twitter</a>
- <a href="https://github.com/yoavweiss" class="w-author__link">GitHub</a>

This article gives me an opportunity to discuss two of my favorite things: responsive images _and_ preload. As someone who was heavily involved in developing both of those features, I'm super excited to see them working together!

## Responsive images overview <a href="#responsive-images-overview" class="w-headline-link">#</a>

Suppose you're browsing the web on a screen that's 300 pixels wide, and the page just requested an image that's 1500 pixels wide. That page just wasted a lot of your cellular data because your screen can't do anything with all of that extra resolution. Ideally, the browser should fetch a version of the image that's just a _little_ wider than your screen size, say 325 pixels. This ensures a high-resolution image without wasting data. And, even better, the image will load faster. [Responsive images](/serve-responsive-images/#serve-multiple-image-versions) enable browsers to fetch different image resources to different devices. If you don't use an [image CDN](/image-cdns/) you need to save multiple dimensions for each image and specify them in the `srcset` attribute. The `w` value tells the browser the width of each version. Depending on the device, the browser can choose the appropriate one:

    <img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" alt="…">

## Preload overview <a href="#preload-overview" class="w-headline-link">#</a>

[Preload](/preload-critical-assets) lets you tell the browser about critical resources that you want to load as soon as possible, before they are discovered in HTML. This is especially useful for resources that are not easily discoverable, such as fonts included in stylesheets, background images, or resources loaded from a script.

    <link rel="preload" as="image" href="important.png">

## Responsive images + preload = faster image loads <a href="#responsive-images-+-preload-faster-image-loads" class="w-headline-link">#</a>

Responsive images and preload have been available for the last few years, but at the same time something was missing: there was no way to preload responsive images. [Starting in Chrome 73](https://developers.google.com/web/updates/2019/03/nic73#more), the browser can preload the right variant of responsive images specified in `srcset` before it discovers the `img` tag!

Depending on your site's structure, that could mean significantly faster image display! We ran tests on a site that uses JavaScript to lazy-load responsive images. Preloading resulted in images loading 1.2 seconds faster.

Responsive images are [supported in all modern browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Browser_compatibility) while preloading them is [supported only in Chromium-based browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#Browser_compatibility).

## `imagesrcset` and `imagesizes` <a href="#imagesrcset-and-imagesizes" class="w-headline-link">#</a>

To preload responsive images, new attributes were recently added to the `<link>` element: `imagesrcset` and `imagesizes`. They are used with `<link rel="preload">` and match the `srcset` and `sizes` syntax used in `<img>` element.

For example, if you want to preload a responsive image specified with:

    <img src="wolf.jpg" srcset="wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w" sizes="50vw" alt="A rad wolf">

You can do that by adding the following to your HTML's `<head>`:

    <link rel="preload" as="image" href="wolf.jpg" imagesrcset="wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w" imagesizes="50vw">

This kicks off a request using the same resource selection logic that `srcset` and `sizes` will apply.

## Use cases <a href="#use-cases" class="w-headline-link">#</a>

### Preloading dynamically-injected responsive images <a href="#preloading-dynamically-injected-responsive-images" class="w-headline-link">#</a>

Let's say you're dynamically-loading hero images as part of a slideshow and know which image will be displayed first. In that case, you probably want to avoid waiting for the script before loading the image in question, as that would delay when users can see it.

You can inspect this issue on a website with a dynamically-loaded image gallery:

1.  Open [this example website](https://responsive-preload.glitch.me/no_preload.html) in a new tab.

2.  Press `Control+Shift+J` (or `Command+Option+J` on Mac) to open DevTools.

3.  Click the **Network** tab.

4.  In the **Throttling** drop-down list, select **Fast 3G**.

5.  Disable the **Disable cache** checkbox.

6.  Reload the page.

<figure><img src="https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format" alt="This waterfall shows that the images only start loading after the browser has finished running the script, introducing unnecessary delay to the time the image is initially displayed to the user." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/cyocwRmB3XlfY26vUZ5h.png?auto=format&amp;w=1600 1600w" width="800" height="481" /><figcaption>This waterfall shows that the images only start loading after the browser has finished running the script, introducing unnecessary delay to the time the image is initially displayed to the user.</figcaption></figure>Using `preload` helps here because the image starts loading ahead of time and is likely to already be there when the browser needs to display it.

<figure><img src="https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format" alt="This waterfall shows that the first image started loading at the same time as the script, avoiding unnecessary delays and resulting in faster displaying images." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/rIRdFypLWf1ljMaXCVCs.png?auto=format&amp;w=1600 1600w" width="800" height="481" /><figcaption>This waterfall shows that the first image started loading at the same time as the script, avoiding unnecessary delays and resulting in faster displaying images.</figcaption></figure>To see the difference that preloading makes, you can inspect the same dynamically-loaded image gallery but [with preloaded first image](https://responsive-preload.glitch.me/preload.html) by following the steps from the first example.

An alternative way to avoid the problem would be to use a markup-based carousel and have the [browser's preloader](https://hacks.mozilla.org/2017/09/building-the-dom-faster-speculative-parsing-async-defer-and-preload/) pick up the required resources. However, this approach may not always be practical. (For example, if you are reusing an existing component, which is not markup-based.)

### Preloading background images using image-set <a href="#preloading-background-images-using-image-set" class="w-headline-link">#</a>

If you have different background images for different screen densities, you can specify them in your CSS with the `image-set` syntax. The browser can then choose which one to display based on the screen's [DPR](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio).

    background-image: image-set( "cat.png" 1x, "cat-2x.png" 2x);

The above syntax ignores the fact that vendor prefixes are needed for this feature in both Chromium and WebKit based browsers. If you're planning to use this feature, you should consider using [Autoprefixer](https://github.com/postcss/autoprefixer) to address that automatically.

The problem with CSS background images is that they are discovered by the browser only after it has downloaded and processed all the CSS in the page's `<head>`, which can be a lot of CSS…

You can inspect this issue on an example website with [responsive background image](https://responsive-preload.glitch.me/background_no_preload.html).

<figure><img src="https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format" alt="In this example, the image download doesn&#39;t start until the CSS is fully downloaded, resulting in unnecessary lag to the image&#39;s display." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/7sjFt1RsoEOKn5zlS5zb.png?auto=format&amp;w=1600 1600w" width="800" height="451" /><figcaption>In this example, the image download doesn't start until the CSS is fully downloaded, resulting in unnecessary lag to the image's display.</figcaption></figure>Responsive image preloading provides a simple and hack-free way to load those images faster.

    <link rel=preload href=cat.png as=image imagesrcset="cat.png 1x, cat-2x.png 2x">

You can inspect how the previous example behaves with [preloaded responsive background image](https://responsive-preload.glitch.me/background_preload.html).

## <figure><img src="https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format" alt="Here the image and CSS start downloading at the same time, avoiding delays and resulting in a faster loading image." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/dOI6EmChfahBujnZOke7.png?auto=format&amp;w=1600 1600w" width="800" height="439" /><figcaption>Here the image and CSS start downloading at the same time, avoiding delays and resulting in a faster loading image.</figcaption></figure>Preloading responsive images in action <a href="#preloading-responsive-images-in-action" class="w-headline-link">#</a>

Preloading your responsive images can speed them up in theory, but what does it do in practice?

To answer that I created two copies of a [demo PWA shop](https://github.com/GoogleChromeLabs/sample-pie-shop): [one that does not preload images](https://20190710t144416-dot-pie-shop-app.appspot.com/apparel), and [one that preloads some of them](https://20190710t132936-dot-pie-shop-app.appspot.com/apparel). Since the site lazy loads images using JavaScript, it's likely to benefit from preloading the ones that will be in the initial viewport.

That gave me the following results for [no preload](https://www.webpagetest.org/result/190710_VM_30b9d4c993a1e60befba17e1261ba1ca/) and for [image preload](https://www.webpagetest.org/result/190710_7B_a99e792121760f81a270b4b9c847797b/). Looking at the raw numbers we see that [Start Render](https://github.com/WPO-Foundation/webpagetest-docs/blob/master/user/Quick%20Start%20Guide.md#start-render) stayed the same, [Speed Index](/speed-index/) slightly improved (273 ms, as images arrive faster, but don't take up a huge chunk of the pixel area), but the real metric which captures the difference is the [Last Painted Hero](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/HeroElements.md) metric, which improved by 1.2 seconds. 🎉🎉

Of course, nothing captures the visual difference quite like a filmstrip comparison:

## <figure><img src="https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format" alt="The filmstrip shows that images arrive significantly faster when preloaded, resulting in a hugely-improved user experience." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/sXyZOvsNoAY0K2NRqT4U.png?auto=format&amp;w=1600 1600w" width="800" height="328" /><figcaption>The filmstrip shows that images arrive significantly faster when preloaded, resulting in a hugely-improved user experience.</figcaption></figure>Preload and `<picture>`? <a href="#preload-and-lesspicturegreater" class="w-headline-link">#</a>

If you're familiar with responsive images, you may be wondering "What about [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)?".

The Web Performance Working Group is talking about adding a preload equivalent for `srcset` and `sizes`, but not the `<picture>` element, which tackles the ["art direction"](/codelab-art-direction/) use-case.

Why is this use-case being "neglected"?

While there's interest in solving that use case as well, there are still a number of [technical issues to sort out](https://calendar.perfplanet.com/2018/how-the-sausage-is-made-webperfwg-meeting-summary/) which means that a solution here would have significant complexity. On top of that, it seems like for the most part, the use-case can be addressed today, even if in a hacky way (see below).

Given that, the Web Performance WG decided to ship `srcset` first and see if the demand for equivalent `picture` support arises.

If you do find yourself in a position to preload `<picture>` you may be able to use the following technique as a workaround.

Given the following scenario:

    <picture>
        <source src="small_cat.jpg" media="(max-width: 400px)">
        <source src="medium_cat.jpg" media="(max-width: 800px)">
        <img src="huge_cat.jpg">
    </picture>

The `<picture>` element's logic (or the image source selection logic, to be precise), would be to go over the `media` attributes of the `<source>` elements in order, find the first one that matches, and use the attached resource.

Because responsive preload has no notion of "order" or "first match", the breakpoints need to be translated into something like:

    <link rel="preload" href="small_cat.jpg" as="image" media="(max-width: 400px)">
    <link rel="preload" href="medium_cat.jpg" as="image" media="(min-width: 400.1px) and (max-width: 800px)">
    <link rel="preload" href="large_cat.jpg" as="image" media="(min-width: 800.1px)">

## Summary <a href="#summary" class="w-headline-link">#</a>

Responsive image preload gives us new and exciting possibilities to preload responsive images in ways that were previously only possible using hacks. It's an important new addition to the speed-conscious developer's toolbox and enables us to make sure the important images we want to get in front of our users as soon as possible will be there when we need them.

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/images/" class="w-chip">Images</a>

<span class="w-mr--sm"> Last updated: Sep 30, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/preload-responsive-images/index.md)

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
