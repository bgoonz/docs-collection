<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format" alt="The AVIF logo" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/0jtMLyN4T7C7UazJCYEH.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#using-avif-to-compress-images-on-your-site" class="w-toc__header--link">Using AVIF to compress images on your site</a>

- [What's New](#what's-new)
- [Libaom](#libaom)
- [Libavif](#libavif)
- [Encoding AVIF images with avifenc](#encoding-avif-images-with-avifenc)
- [Building command line encoder avifenc](#building-command-line-encoder-avifenc)
- [Understanding the avifenc command line parameters](#understanding-the-avifenc-command-line-parameters)
- [Create an AVIF image with default settings](#create-an-avif-image-with-default-settings)
- [Speeding up the encoder](#speeding-up-the-encoder)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Using AVIF to compress images on your site

Jun 7, 2021

[<img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/BKGlQ9PreNrLEV74mhKX.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jai Krishnan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/BKGlQ9PreNrLEV74mhKX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/BKGlQ9PreNrLEV74mhKX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/BKGlQ9PreNrLEV74mhKX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/BKGlQ9PreNrLEV74mhKX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/BKGlQ9PreNrLEV74mhKX.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jaikk/)

<a href="/authors/jaikk/" class="w-author__name-link">Jai Krishnan</a>

[<img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/tyVCzJx2Qe2hCSwXzhrk.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Wan-Teh Chang" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/tyVCzJx2Qe2hCSwXzhrk.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/tyVCzJx2Qe2hCSwXzhrk.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/tyVCzJx2Qe2hCSwXzhrk.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/tyVCzJx2Qe2hCSwXzhrk.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/tyVCzJx2Qe2hCSwXzhrk.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/wtc/)

<a href="/authors/wtc/" class="w-author__name-link">Wan-Teh Chang</a>

We [frequently write](/fast/#optimize-your-images) about the bloat on websites from images, and tools like [Lighthouse](/optimize-vitals-lighthouse/) highlight when image loading is having a negative impact on user experience, such as increasing load time, or taking bandwidth away from more important resources. One way to fix this is to use modern compression to reduce the file size of images, and a new option for web developers is the [AVIF image format](https://aomediacodec.github.io/av1-avif/). This blog post talks about recent updates to open source tooling for AVIF, introduces the libaom and libavif encoding libraries, and includes a tutorial for using these libraries to encode AVIF images efficiently.

AVIF is an image format based on the AV1 video codec, and standardized by the [Alliance for Open Media](https://aomedia.org). AVIF offers significant compression gains over other image formats like JPEG and WebP. While the exact savings will depend on the content, encoding settings, and quality target, [we](https://jakearchibald.com/2020/avif-has-landed/) and [others](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4) have seen &gt;50% savings vs. JPEG.

[<embed src="https://storage.googleapis.com/web-dev-uploads/image/foR0vJZKULb5AGJExlazy1xYDgI2/kVqh1xli2O6mqKF3fQNx.avif" width="1120" height="840" />](https://storage.googleapis.com/web-dev-uploads/image/foR0vJZKULb5AGJExlazy1xYDgI2/kVqh1xli2O6mqKF3fQNx.avif)

1120 x 840 AVIF at 18,769 bytes (click to enlarge)

<figure><img src="https://storage.googleapis.com/web-dev-uploads/image/foR0vJZKULb5AGJExlazy1xYDgI2/Jy0O0q0mLXl668HAo43n.jpeg" alt="1120 x 840 JPEG at 20,036 bytes (click to enlarge)" width="1120" height="840" /><figcaption>1120 x 840 JPEG at 20,036 bytes (click to enlarge)</figcaption></figure>

Additionally, AVIF adds codec and container support for new image features such as [High Dynamic Range and Wide Color Gamut](https://w3c.github.io/ColorWeb-CG/), [film grain synthesis](https://norkin.org/research/film_grain/), and progressive decoding.

AVIF supports two types of progressive decoding. Spatial scalability can be used to offer a lower resolution image for network constrained users and 'progressively' provide a higher resolution image by sending just the additional data required to fill in the high frequency details. Quality scalability offers a similar progression by steadily improving visual quality with each render.

## What's New <a href="#what&#39;s-new" class="w-headline-link">#</a>

Since landing AVIF support in Chrome M85 last summer, AVIF support in the open source ecosystem has improved on a number of fronts.

### Libaom <a href="#libaom" class="w-headline-link">#</a>

[Libaom](https://aomedia.googlesource.com/aom/) is an open source AV1 encoder and decoder maintained by the companies in the Alliance for Open Media, and used in many production services at Google and other member companies. Between the libaom 2.0.0 release—around the same time Chrome added AVIF support—and the recent 3.1.0 release, there have been significant still image encoding optimizations added to the codebase. These include:

- Optimizations for multi-threading and tiled encoding.
- 5x reduction in memory usage.
- 6.5x reduction in CPU usage, as shown in the chart below.

<figure><img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format" alt="Using speed=6, cq-level=18, for 8.1 MP images" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/mJJfiNsC7Qgl98IJ1LNi.png?auto=format&amp;w=1600 1600w" width="800" height="467" /><figcaption>Using speed=6, cq-level=18, for 8.1 MP images</figcaption></figure>These changes massively reduce the cost of encoding AVIF— particularly the most frequently loaded, or highest priority images on your site. As [hardware-accelerated encoding](https://www.cnet.com/news/google-supercharges-youtube-with-a-custom-video-chip/) of AV1 becomes more available on servers and cloud services, the cost to create AVIF images will continue to drop.

### Libavif <a href="#libavif" class="w-headline-link">#</a>

[Libavif](https://github.com/AOMediaCodec/libavif), the reference implementation of AVIF, is an open source AVIF muxer and parser which is used in Chrome for decoding AVIF images. It can also be used with libaom for creating AVIF images from your existing uncompressed images, or transcoding from existing web images (JPEG, PNG, etc).

Libavif recently added support for a wider range of encoder settings, including integration with more advanced libaom encoder settings. Optimizations in the processing pipeline like fast YUV-to-RGB conversion using libyuv and premultiplied alpha support further speed up the decoding process. And finally, support for the all-intra encoding mode newly added in libaom 3.1.0 brings all the libaom improvements mentioned in the above.

Note: [libheif](https://github.com/strukturag/libheif) is another popular open source AVIF muxer and parser, used in [ImageMagick](https://imagemagick.org/index.php), [libvips](https://github.com/libvips/libvips), and the [sharp](https://sharp.pixelplumbing.com/) Node.js module.

## Encoding AVIF images with avifenc <a href="#encoding-avif-images-with-avifenc" class="w-headline-link">#</a>

A quick way to experiment with AVIF is [Squoosh.app](https://squoosh.app/). Squoosh runs a WebAssembly version of libavif, and exposes many of the same features as the command line tools. It's an easy way to compare AVIF to other formats old and new. There's also a [CLI version](https://www.npmjs.com/package/@squoosh/cli) of Squoosh aimed at Node apps.

However, WebAssembly doesn't yet have access to all the performance primitives of CPUs, so if you want to run libavif at its fastest, we recommend the command line encoder, avifenc.

To understand how to encode AVIF images, we will present a tutorial using the [same source image](https://codelabs.developers.google.com/codelabs/avif/images/happy_dog.jpg) used in our example above. To start, you will need:

- [Chrome](https://www.google.com/chrome/) version 85 or later
- [cmake](https://cmake.org/)
- [git](https://git-scm.com/)
- [ninja](https://ninja-build.org/)

You will also need to install the development packages for zlib, libpng, and libjpeg. The commands for the Debian and Ubuntu Linux distributions are:

    sudo apt-get install zlib1g-dev
    sudo apt-get install libpng-dev
    sudo apt-get install libjpeg-dev

### Building command line encoder avifenc <a href="#building-command-line-encoder-avifenc" class="w-headline-link">#</a>

#### 1. Get the code <a href="#1.-get-the-code" class="w-headline-link">#</a>

Check out a release tag of libavif.

    git clone -b v0.9.1 https://github.com/AOMediaCodec/libavif.git

#### 2. Change directory to libavif <a href="#2.-change-directory-to-libavif" class="w-headline-link">#</a>

    cd libavif

There are many different ways you can configure avifenc and libavif to build. You can find more information at [libavif](https://github.com/AOMediaCodec/libavif). We are going to build avifenc so that it is statically linked to the AV1 encoder and decoder library, [libaom](https://aomedia.googlesource.com/aom).

#### 3. Get and build libaom <a href="#3.-get-and-build-libaom" class="w-headline-link">#</a>

Change to the libavif external dependencies directory.

    cd ext

The next command will pull the libaom source code and build libaom statically.

    ./aom.cmd

Change directory to libavif.

    cd ..

#### 4. Build the command line encoding tool, avifenc <a href="#4.-build-the-command-line-encoding-tool-avifenc" class="w-headline-link">#</a>

It is a good idea to create a build directory for avifenc.

    mkdir build

Change to the build directory.

    cd build

Create the build files for avifenc.

    cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=0 -DAVIF_CODEC_AOM=1 -DAVIF_LOCAL_AOM=1 -DAVIF_BUILD_APPS=1 ..

Build avifenc.

    make

You have successfully built avifenc!

### Understanding the avifenc command line parameters <a href="#understanding-the-avifenc-command-line-parameters" class="w-headline-link">#</a>

avifenc uses the command-line structure:

    ./avifenc [options] input.file output.avif

The basic parameters for avifenc used in this tutorial are:

<table><thead><tr class="header"><th>avifenc</th><th></th></tr></thead><tbody><tr class="odd"><td>--min 0</td><td>Set min quantizer for color to 0</td></tr><tr class="even"><td>--max 63</td><td>Set max quantizer for color to 63</td></tr><tr class="odd"><td>--minalpha 0</td><td>Set min quantizer for alpha to 0</td></tr><tr class="even"><td>--maxalpha 63</td><td>Set max quantizer for alpha to 63</td></tr><tr class="odd"><td>-a end-usage=q</td><td>Set the rate control mode to Constant Quality (Q) mode</td></tr><tr class="even"><td>-a cq-level=Q</td><td>Set quantize level for both color and alpha to Q</td></tr><tr class="odd"><td>-a color:cq-level=Q</td><td>Set quantize level for color to Q</td></tr><tr class="even"><td>-a alpha:cq-level=Q</td><td>Set quantize level for alpha to Q</td></tr><tr class="odd"><td>-a tune=ssim</td><td>Tune for SSIM (default is to tune for PSNR)</td></tr><tr class="even"><td>--jobs J</td><td>Use J worker threads (default: 1)</td></tr><tr class="odd"><td>--speed S</td><td>Set encoder speed from 0-10 (slowest-fastest. default: 6)</td></tr></tbody></table>

The cq-level option sets the quantize level (0-63) to control the quality for color or alpha.

You can think of cq-level as the "amount" of quantization, so a lower value yields higher quality

Higher speed settings will run faster, but produce worse compression efficiency and quality. This tutorial uses the default setting of Speed 6, which we recommend as a balance of encode speed, compression efficiency, and quality.

### Create an AVIF image with default settings <a href="#create-an-avif-image-with-default-settings" class="w-headline-link">#</a>

The most basic parameters for avifenc to run, are setting the input and output files.

    ./avifenc happy_dog.jpg happy_dog.avif

We recommend the following command line to encode an image, say at quantize level 18:

    ./avifenc --min 0 --max 63 -a end-usage=q -a cq-level=18 -a tune=ssim happy_dog.jpg happy_dog.avif

`"--min 0 --max 63 -a end-usage=q -a cq-level=18 -a tune=ssim"` are the recommended settings for AVIF images. If the image has an alpha channel, add `"--minalpha 0 --maxalpha 63"`. To specify different quantize levels for color and alpha, replace `"-a cq-level=18"` with, say, `"-a color:cq-level=18 -a alpha:cq-level=10"`.

Avifenc has a lot of options that will affect both quality and speed. If you want to see the options and learn more about them just run `./avifenc`

You now have your very own AVIF image!

### Speeding up the encoder <a href="#speeding-up-the-encoder" class="w-headline-link">#</a>

One parameter that may be good to change depending on how many cores you have on your machine is the `--jobs` parameter. This parameter sets how many threads avifenc will use to create AVIF images. Try running this at the command line.

    ./avifenc --min 0 --max 63 -a end-usage=q -a cq-level=18 -a tune=ssim --jobs 8 happy_dog.jpg happy_dog.avif

This tells avifenc to use 8 threads when creating the AVIF image, which speeds up AVIF encoding by roughly 5x.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Using libaom, libavif and other open source tooling, you can get the best image quality and performance for your website using AVIF. The format is still relatively new, and optimizations and tooling integrations are actively being developed. If you have questions, comments, or feature requests, reach out on the [av1-discuss mailing list](https://groups.google.com/a/aomedia.org/g/av1-discuss), [AOM Github community](https://github.com/AOMediaCodec/community/wiki), and [AVIF wiki](https://github.com/AOMediaCodec/av1-avif/wiki).

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Jun 7, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/compress-images-avif/index.md)

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
