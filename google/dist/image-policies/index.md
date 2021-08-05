<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format" alt="A description of the hero image for screen reader users." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/OHtpn2oJuumNzReNNI6f.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#image-policies-for-fast-load-times-and-more" class="w-toc__header--link">Image policies for fast load times and more</a>

- [Optimized image policies](#optimized-image-policies)
- [oversized-images](#oversized-images)
- [unoptimized-{lossy,lossless}-images](#unoptimized-lossylossless-images)
- [Report-only mode in the wild](#report-only-mode-in-the-wild)
- [Limitations](#limitations)
- [Optimizing your images](#optimizing-your-images)
- [Experiment with the policies in origin trials](#experiment-with-the-policies-in-origin-trials)
- [Please give us feedback](#please-give-us-feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Image policies for fast load times and more

Use optimized image policies to ensure your site is using the best performing images.

May 31, 2019

[<img src="https://web-dev.imgix.net/image/admin/NTv1ih4WoIEUdRA0psCk.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Luna Lu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/NTv1ih4WoIEUdRA0psCk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/NTv1ih4WoIEUdRA0psCk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/NTv1ih4WoIEUdRA0psCk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/NTv1ih4WoIEUdRA0psCk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/NTv1ih4WoIEUdRA0psCk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/lunalu/)

<a href="/authors/lunalu/" class="w-author__name-link">Luna Lu</a>

- <a href="https://github.com/loonybear" class="w-author__link">GitHub</a>

Images often take up a significant amount of visual space and make up the majority of the downloaded bytes on a website. Optimizing images can improve loading performance and reduce network traffic.

Surprisingly, more than half of the sites on the web are serving poorly compressed or unnecessarily large images. This leaves a lot of room for performance improvements simply by optimizing the images.

You may ask, how do I know if my images are optimized and how should I optimize them? We are experimenting with a new set of feature policies for image optimization: `oversized-images`, `unoptimized-lossy-images`, `unoptimized-lossless-images`, and`unoptimized-lossless-images-strict`. All are now available for [origin trials](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md).

## Optimized image policies <a href="#optimized-image-policies" class="w-headline-link">#</a>

Feature policy is introducing a new set restrictions on images that can be applied with development-time enforcement. Images violating any of the restrictions will be rendered as placeholder images, which are easy to identify and fix. These policies can be specified in report-only mode where images will render normally without enforcement while violations are being observed via reports. (See [Report-only mode in the wild](#report-only-mode-in-the-wild), below for details.)

### oversized-images <a href="#oversized-images" class="w-headline-link">#</a>

The `oversized-images` feature policy restricts the intrinsic dimensions of an image in relation to its container size.

When a document uses the `oversized-images` policy, any `<img>` element whose intrinsic resolution is more than X times larger than the container size in either dimension will be replaced with a placeholder image.

#### Why? <a href="#why" class="w-headline-link">#</a>

Serving images larger than what the viewing device can render—for example, serving desktop images to mobile contexts, or serving high-pixel-density images to a low-pixel-density device—is wasting network traffic and device memory. Read [Serve images with correct dimensions](/serve-images-with-correct-dimensions/) and [Serve responsive images](/serve-responsive-images/) for information on optimizing your images.

#### Examples <a href="#examples" class="w-headline-link">#</a>

A few examples illustrate this. The following shows the default behavior when cutting an image's display size in half.

<figure><img src="https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format" alt="The default resizing behavior." sizes="(min-width: 326px) 326px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QR01OUN3VXTbOhhSOZBz.png?auto=format&amp;w=652 652w" width="326" height="401" /><figcaption>The default resizing behavior.</figcaption></figure>If I apply the following feature policy, I get a placeholder image instead.

`Feature-Policy: oversized-images *(2);`

<figure><img src="https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format" alt="When the image is too large for the container." sizes="(min-width: 326px) 326px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/NErIMVS4qsSVHek2UtDZ.png?auto=format&amp;w=652 652w" width="326" height="401" /><figcaption>When the image is too large for the container.</figcaption></figure>I get similar results if I lower only the width or the height.

<figure><img src="https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format" alt="Resize width and height." sizes="(min-width: 326px) 326px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/S11HV1w6uqkXq6GDRKVx.png?auto=format&amp;w=652 652w" width="326" height="401" /><figcaption>Resize width and height.</figcaption></figure>#### How to use <a href="#how-to-use" class="w-headline-link">#</a>

To summarize, `oversized-images` policy can be specified through either:

- `Feature-Policy` HTTP header
- `<iframe>` `allow` attribute

To declare the `oversized-images` policy, you need to provide:

- The feature name, `oversized-images` (Required)
- A list of origins (Optional)
- The threshold values (i.e., the downscaling ratio X) for the origins, specified in parenthesis (Optional)

We recommend a downscaling ratio of 2.0 or lower. Consider using [responsive images](/serve-responsive-images/) with different resolutions to best serve images on various screen sizes, resolutions, and so on.

#### More examples <a href="#more-examples" class="w-headline-link">#</a>

`Feature-Policy: oversized-images *(2.0)`

The policy is enforced on all origins with a threshold value of 2.0. Any `<img>` element with an image whose downscaling ratio that is greater than 2.0 is disallowed and will be replaced with a placeholder image.

`Feature-Policy: oversized-images *(inf) 'self'(1.5)`

The policy is enforced on the site's origin with a threshold value of 1.5. `<img>` elements in top-level browsing contexts and same origin nested browsing contexts will only render normally if the downscaling ratio is less than or equal to 1.5. `<img>` elements everywhere else will render normally.

### unoptimized-{lossy,lossless}-images <a href="#unoptimized-lossylossless-images" class="w-headline-link">#</a>

The `unoptimized-lossy-images`, `unoptimized-lossless-images`, `unoptimized-lossless-images-strict` feature policies restrict the file size of an image in relation to its intrinsic resolution:

`unoptimized-lossy-images`  
Lossy formats should not exceed a byte-per-pixel ratio of X, with a fixed **1KB** overhead allowance. For a W x H image, the file size threshold is calculated as W x H x X + 1024.

`unoptimized-lossless-images`  
Lossless formats should not exceed a byte-per-pixel ratio of X, with a fixed **10KB** overhead allowance. For a W x H image, the file size threshold is calculated as W x H x X + 10240.

`unoptimized-lossless-images-strict`  
Lossless formats should not exceed a byte-per-pixel ratio of X, with a fixed **1KB** overhead allowance. For a W x H image, the file size threshold is calculated as W x H x X + 1024.

When a document uses any of these policies, any `<img>` element violating the constraint will be replaced with a placeholder image.

#### Why? <a href="#why-2" class="w-headline-link">#</a>

The larger the download size is, the longer it takes for an image to load. The file size should be kept as small as possible when optimizing an image: stripping metadata, picking a good image format, using image compression, and so on. Read [Use Imagemin to compress images](/use-imagemin-to-compress-images/) and [Use WebP images](/serve-images-webp/) for information on optimizing your images.

#### Example <a href="#example" class="w-headline-link">#</a>

The following shows the default browser behavior. Without the feature policy an unoptimized lossy image can be displayed just the same as an optimized image.

<figure><img src="https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format" alt="Comparing an optimized image with an unoptimized image." sizes="(min-width: 326px) 326px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/kxabc5874fW5IvPnqR9E.png?auto=format&amp;w=652 652w" width="326" height="401" /><figcaption>Comparing an optimized image with an unoptimized image.</figcaption></figure>If I apply the following feature policy, I get a placeholder image instead.

`Feature-Policy: unoptimized-lossy-images *(0.5);`

<figure><img src="https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format" alt="When the image is not optimized." sizes="(min-width: 326px) 326px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Y0cCIEuFI1M3DaKfxBkI.png?auto=format&amp;w=652 652w" width="326" height="401" /><figcaption>When the image is not optimized.</figcaption></figure>#### How to use <a href="#how-to-use-2" class="w-headline-link">#</a>

If you are new to feature policy, please check out [Introduction to Feature Policy](https://developers.google.com/web/updates/2018/06/feature-policy) for more details.

To summarize, `unoptimized-{lossy,lossless}-images` policies can be either specified through:

- `Feature-Policy` HTTP header
- `<iframe>` `allow` attribute

To declare an `unoptimized-{lossy,lossless}-images` policy, you will need to provide:

- The feature name, for example, `unoptimized-lossy-images` (Required)
- A list of origins (Optional)
- The threshold values (i.e., byte-per-pixel ratio X) for the origins, specified in parenthesis (Optional)

We recommend a byte-per-pixel ratio of 0.5 or lower for `unoptimized-lossy-images` and a byte-per-pixel ratio of 1 or lower for `unoptimized-lossless-images` and `unoptimized-lossless-images-strict`.

WebP formats have better compression ratios than other formats. Serve all your images in WebP lossy format if you can. If that is not sufficient, try WebP lossless format. Use JPEG on browsers that don't support WebP formats. Use PNG if none of thes formats work.

If you are using WebP formats, try with stricter thresholds:

- 0.2 for WEBPV8
- 0.5 for WEBPL

#### More examples <a href="#more-examples-2" class="w-headline-link">#</a>

    Feature-Policy:  unoptimized-lossy-images *(0.5);
                     unoptimized-lossless-images *(1.0);
                     unoptimized-lossless-images-strict *(1.0);

This policy is enforced on all origins with a threshold value of 0.5 (for lossy formats) and 1 (for lossless formats). Any `<img>` element whose image has a byte-per-pixel ratio exceeding the constraint is disallowed and will be replaced with a placeholder image.

    Feature-Policy: unoptimized-lossy-images *(inf) 'self'(0.3);
                    unoptimized-lossless-images *(inf) 'self'(0.8);
                    unoptimized-lossless-images-strict *(inf) 'self'(0.8);

This policy is enforced on the site's origin with a threshold value of 0.3 (for lossy formats) and 0.8 (for lossless formats). The `<img>` elements in top-level browsing contexts and same origin nested browsing contexts will only render normally if the byte-per-pixel ratio meets these constraints. The `<img>` elements everywhere else will render normally.

### Report-only mode in the wild <a href="#report-only-mode-in-the-wild" class="w-headline-link">#</a>

Publishing a site with placeholder images may not be what you want. You can use the policies in enforcement mode (with unoptimized images rendered as placeholder images) during development and staging, and use report-only mode in production. (Check out [Feature Policy Reporting](https://github.com/w3c/webappsec-feature-policy/blob/master/reporting.md) for more details.) Similar to `Feature-Policy` HTTP header, the `Feature-Policy-Report-Only` header lets you observe violation reports in the wild without any enforcement.

### Limitations <a href="#limitations" class="w-headline-link">#</a>

Image policies only work on HTML image elements (`<img>`, `<source>`, etc.) and are not yet supported on background images or generated content. If you would like to have policies supported on broader contents, please let us know.

## Optimizing your images <a href="#optimizing-your-images" class="w-headline-link">#</a>

I've talked quite a bit about optimizing your images, but haven't said how to do it. That topic is out of scope for this article, but you can learn more from the links below and from the codelabs listed at the end of the article.

- [Optimizing images](/fast#optimize-your-images)
- [Serve images with correct dimensions](/serve-images-with-correct-dimensions/)

## Experiment with the policies in origin trials <a href="#experiment-with-the-policies-in-origin-trials" class="w-headline-link">#</a>

Image policies are available in Chrome 75 via an origin trial.

To participate:

1.  [request a token](https://developers.chrome.com/origintrials/#/view_trial/2562548187973812225)

2.  Add the token on any pages in your origin using an `Origin-Trial` HTTP header:

    `Origin-Trial: **token as provided in the developer console**`

3.  Specify an image policy via HTTP header Feature-Policy header:
    `Feature-Policy: **image policies specified here**`

Check out [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md) for more details.

## Please give us feedback <a href="#please-give-us-feedback" class="w-headline-link">#</a>

Hopefully this article has given you a good understanding of the image policies and gotten you excited. We'd really love for you to try out the policies and give us feedback.

You can give us feedback for each of the features mentioned in this article to our mailing list: [feature-control@](mailto:feature-control@chromium.org)[chromium.org](mailto:feature-control@chromium.org).

We would love to know what threshold values you used and found useful. We would love to know whether `unoptimized-lossless-images` or `unoptimized-lossless-images-strict` is more intuitive and easy to use, or if we should use a difference overhead allowance instead. We will be sending out a survey near the end of the trial. Stay tuned!

<a href="/tags/images/" class="w-chip">Images</a> <a href="/tags/origin-trials/" class="w-chip">Origin Trials</a>

<span class="w-mr--sm"> Last updated: May 31, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/image-policies/index.md)

undefined

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
