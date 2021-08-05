<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#top-tips-for-web-performance" class="w-toc__header--link">Top tips for web performance</a>

- [tl;dr](#tldr)
- [Save images with the right size](#save-images-with-the-right-size)
- [But… what if display size varies?](#but...-what-if-display-size-varies)
- [Help the browser choose the right image size](#help-the-browser-choose-the-right-image-size)
- [How can I create multiple image sizes?](#how-can-i-create-multiple-image-sizes)
- [Incorporate image processing in your build process](#incorporate-image-processing-in-your-build-process)
- [Use an image service](#use-an-image-service)
- [What if the image doesn't look right at different sizes?](#what-if-the-image-doesn't-look-right-at-different-sizes)
- [What about pixel density?](#what-about-pixel-density)
- [What about the display size of the image?](#what-about-the-display-size-of-the-image)
- [What about browser support?](#what-about-browser-support)
- [Learn more](#learn-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Top tips for web performance

Use srcset to automatically choose the right image size.

Jun 24, 2019

[<img src="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Sam Dutton" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/wPss4TJX9IJ1CJza7iFY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/samdutton/)

<a href="/authors/samdutton/" class="w-author__name-link">Sam Dutton</a>

- <a href="https://twitter.com/sw12" class="w-author__link">Twitter</a>
- <a href="https://github.com/samdutton" class="w-author__link">GitHub</a>

According to [HTTP Archive](https://httparchive.org/reports/state-of-images), a typical mobile web page weighs over 2.6 MB, and more than two thirds of that weight is images. That's a great opportunity for optimization!

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/8A7JasX5JOADmB1XkjMC.svg" alt="Average mobile page bytes by content type" width="700" height="320" /><figcaption><a href="https://mobile.httparchive.org/">Average mobile page bytes by content type</a></figcaption></figure>tl;dr <a href="#tldr" class="w-headline-link">#</a>

- Don't save images larger than their display size.
- Save multiple sizes for each image and use the [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) attribute to enable the browser to choose the smallest. The `w` value tells the browser the width of each version:

<!-- -->

    <img src="small.jpg"
         srcset="small.jpg 500w,
                 medium.jpg 1000w,
                 large.jpg 1500w"
         alt="…">

## Save images with the right size <a href="#save-images-with-the-right-size" class="w-headline-link">#</a>

You can make your website faster and less data hungry by using images with dimensions that match the display size. In other words, give images the right width and height when you save them.

Take a look at the images below.

They appear nearly identical, but the file size of one is more than 10 times larger than the other.

<figure><img src="https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format" alt="Saved width 1000 px, file size 184 KB" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/IHpM8DG6qiNlRcbfxnt8.jpg?auto=format&amp;w=1600 1600w" width="800" height="534" /><figcaption>Saved width 1000 px, file size 184 KB</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format" alt="Saved width 300 px, file size 16 KB" class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/XThwdsYxfx6KHkMxgbYI.jpg?auto=format&amp;w=600 600w" width="300" height="200" /><figcaption>Saved width 300 px, file size 16 KB</figcaption></figure>

The first image is much larger in file size because it's saved with dimensions much larger than the display size. Both images are displayed with a fixed width of 300 pixels, so it makes sense to use an image saved at the same size.

**For fixed widths, use images saved with the same dimensions as the display size.**

## But… what if display size varies? <a href="#but...-what-if-display-size-varies" class="w-headline-link">#</a>

In a multi-device world, images aren't always displayed at a single fixed size.

Image elements might have a percentage width, or be part of responsive layouts where image display sizes change to fit the screen size.

…and what about pixel-hungry devices like Retina displays?

## Help the browser choose the right image size <a href="#help-the-browser-choose-the-right-image-size" class="w-headline-link">#</a>

Wouldn't it be great if you could make each image available at different sizes, then let the browser choose the best size for the device and display size? Unfortunately there's a [catch-22](<https://en.wikipedia.org/wiki/Catch-22_(logic)>) when it comes to working out which image is best. The browser should use the smallest possible image, but it can't know the width of an image without downloading it to check.

This is where `srcset` comes in handy. You save images at different sizes, then tell the browser the width of each version:

    <img src="small.jpg"
         srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
         alt="…">

The `w` values show the width of each image in pixels. For example, `small.jpg 500w` tells the browser that [small.jpg](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format) is 500 pixels wide. This enables the browser to choose the smallest possible image, depending on the screen type and the viewport size—without having to download images to check their size.

**Caution**: `srcset` gives the browser information about the saved width of each image file.

It does _not_ specify the size to display the image—you still need CSS for that!

You can see `srcset` in action for the image below. If you're on a laptop or desktop computer, change your browser window size and reopen this page. Then use the Network panel of your browser tools to check which image was used. (You'll need to do that in an Incognito or Private window, otherwise the original image file will be cached.)

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format" alt="Lias and Little Puss: two ten week old grey tabby kittens" sizes="(min-width: 500px) 500px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/scLPehGom3IZLxPJiPPF.jpg?auto=format&amp;w=1000 1000w" width="500" height="334" />

## How can I create multiple image sizes? <a href="#how-can-i-create-multiple-image-sizes" class="w-headline-link">#</a>

You'll need to make multiple sizes available for every image you want to use with `srcset`.

For one-off images such as hero images you can manually save different sizes. If you have lots of images, such as product photos, you'll need to automate. For that there are two approaches.

### Incorporate image processing in your build process <a href="#incorporate-image-processing-in-your-build-process" class="w-headline-link">#</a>

As part of your build process, you can add steps to create different sized versions of your images. See ["Use Imagemin to compress images"](/use-imagemin-to-compress-images) to learn more.

### Use an image service <a href="#use-an-image-service" class="w-headline-link">#</a>

Image creation and delivery can be automated using a commercial service like [Cloudinary](https://cloudinary.com/), or an open source equivalent such as [Thumbor](https://github.com/thumbor/thumbor) that you install and run yourself.

You upload your high resolution images, and the image service automatically creates and delivers different image formats and sizes depending on the URL parameters. For an example, open [this sample image on Cloudinary](https://res.cloudinary.com/webdotdev/f_auto/w_500/IMG_20190113_113201.jpg) and try changing the `w` value or the file extension in the URL bar.

Image services also have more advanced features such as the ability to automate "smart cropping" for different image sizes and automatically deliver [WebP](https://developers.google.com/speed/webp/) images to browsers that support the format, instead of JPEGs—without changing the file extension.

You can check the format delivered using your browser tools.

For the image URL above, a WebP file is automatically delivered to browsers that support WebP, without changing the `.jpg` file extension.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format" alt="Chrome DevTools showing WebP content-type header for file served by Cloudinary" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Y0ra5DLlntYoLV46uU1f.png?auto=format&amp;w=1600 1600w" width="800" height="146" />

## What if the image doesn't look right at different sizes? <a href="#what-if-the-image-doesn&#39;t-look-right-at-different-sizes" class="w-headline-link">#</a>

In that case, you'll need to use the `<picture>` element for "art direction": providing a different image or image crop at different sizes. To learn more take a look at the ["Art direction"](/codelab-art-direction) codelab.

## What about pixel density? <a href="#what-about-pixel-density" class="w-headline-link">#</a>

High-end devices have smaller (more dense) physical pixels. For example, a high-end phone might have two or three times as many pixels in each row of pixels as a cheaper device.

That can affect the size you need to save your images. We won't go into the gory details here, but you can find out more from the ["Use density descriptors"](/codelab-density-descriptors) codelab.

## What about the display size of the image? <a href="#what-about-the-display-size-of-the-image" class="w-headline-link">#</a>

You can use `sizes` to make `srcset` work even better.

Without it, the browser uses the full width of the viewport when choosing an image from a `srcset`. The `sizes` attribute tells the browser the width that an image element will be displayed, so the browser can choose the smallest possible image file—before it makes any layout calculations.

In the example below, `sizes="50vw"` tells the browser that this image will be displayed at 50% of the viewport width.

    <img src="small.jpg"
         srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
         sizes="50vw"
         alt="…">

You can see this in action at [simpl.info/sizes](https://simpl.info/sizeswvalues/) and the ["Specifying multiple slot widths"](/codelab-specifying-multiple-slot-widths) codelab.

**Caution**: `sizes` gives the browser information about the display width of an image element.

As with `srcset` it does NOT specify the size to display the image—you need CSS for that.

## What about browser support? <a href="#what-about-browser-support" class="w-headline-link">#</a>

`srcset` and `sizes` are [supported by over 90% of browsers globally](https://caniuse.com/#feat=srcset).

If a browser does not support `srcset` or `sizes` it will fall back to just using the `src` attribute.

This makes `srcset` and `sizes` great progressive enhancements!

## Learn more <a href="#learn-more" class="w-headline-link">#</a>

Take a look at the ["Optimize your images"](/fast#optimize-your-images) section of web.dev for a deeper dive into image optimization. For a more guided experience, consider trying the free ["Responsive Images"](https://udacity.com/course/responsive-images--ud882) course offered by Udacity.

This post accompanies [**Top tips for web performance**](https://www.youtube.com/playlist?list=PLNYkxOF6rcICVl6Vb-AFlw81bQLuv6a_P): a fortnightly video series showing simple techniques to improve site speed.

<a href="/tags/images/" class="w-chip">Images</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Jun 24, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/use-srcset-to-automatically-choose-the-right-image/index.md)

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
