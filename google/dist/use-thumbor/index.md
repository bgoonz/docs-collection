<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format" alt="A pile of photos." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/yNqbzg2R9PIkqTfywZSw.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#optimize-images-with-thumbor" class="w-toc__header--link">Optimize images with Thumbor</a>

- [Prequisites](#prequisites)
- [Thumbor URL Format](#thumbor-url-format)
- [Origin](#origin)
- [Security Key](#security-key)
- [Size](#size)
- [Filters](#filters)
- [Transforming Images](#transforming-images)
- [Compression](#compression)
- [Resizing](#resizing)
- [File Formats](#file-formats)
- [Next Steps](#next-steps)
- [Appendix: thumbor.conf](#appendix:-thumbor.conf)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Optimize images with Thumbor

Thumbor can be used for free to resize, compress, and transform images on-demand.

Sep 23, 2019

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

[Thumbor](http://thumbor.org/) is a free, open source image CDN that makes it easy to compress, resize, and transform images. This post lets you try out Thumbor firsthand without needing to install anything. We've set up a sandbox Thumbor server for you to try out at `http://34.67.235.246:8888`. The image that you're going to experiment with is available at <http://34.67.235.246:8888/unsafe/https://web.dev/backdrop-filter/hero.jpg>.

## Prequisites <a href="#prequisites" class="w-headline-link">#</a>

This post assumes that you understand how image CDNs can improve your load performance. If not, check out [Use image CDNs to optimize images](/image-cdns). It also assumes that you've built basic websites before.

If you would like to install Thumbor on your own server and then follow along with this post, check out [How to install the Thumbor image CDN](/install-thumbor). Whenever you see `http://34.67.235.246:8888` in this post you'll need to replace that origin with your Thumbor instance's origin.

## Thumbor URL Format <a href="#thumbor-url-format" class="w-headline-link">#</a>

As mentioned in [Use Image CDNs to Optimize Images](/image-cdns), each image CDN uses a slightly different URL format for images. Figure 1 represents Thumbor's format.

<figure><img src="https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format" alt="Thumbor&#39;s URL format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/lo1hS8qn53XCztrlgvl7.jpg?auto=format&amp;w=1600 1600w" width="800" height="89" /><figcaption>Thumbor's URL format</figcaption></figure>### Origin <a href="#origin" class="w-headline-link">#</a>

Like all [origins](https://html.spec.whatwg.org/multipage/origin.html#concept-origin), the origin of a Thumbor URL is composed of three parts: a [scheme](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Definition) (which is almost always `http` or `https`), a host, and a port. In this example, the host is identified using an IP address, but if you're using a DNS server it might look like `thumbor-server.my-site.com`. By default, Thumbor uses port `8888` to serve images.

### Security Key <a href="#security-key" class="w-headline-link">#</a>

The `unsafe` part of the URL indicates that you're using Thumbor without a security key. A security key prevents a user from making unauthorized changes to your image URLs. By changing the image URL, a user could use your server (and your hosting bill) to resize their images, or, more maliciously, to overload your server. This guide won't cover setting up [Thumbor's security key feature](https://github.com/thumbor/thumbor/wiki/security).

### Size <a href="#size" class="w-headline-link">#</a>

This part of the URL specifies the desired size of the output image. This can be omitted if you don't want to change the size of the image. Thumbor will use different approaches like cropping or scaling to achieve the desired size depending on the other URL parameters. The next section of this post explains how to resize images in more detail.

Try it now:

1.  Click the following URL to view the image served at its original size in a new tab: <http://34.67.235.246:8888/unsafe/https://web.dev/backdrop-filter/hero.jpg>

    <figure><img src="https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format" alt="Original image" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/R2Xp5XxJi4CFGjXlPx4X.jpg?auto=format&amp;w=1600 1600w" width="800" height="500" /><figcaption>Original image</figcaption></figure>2.  Resize the image to 100x100 pixels: <http://34.67.235.246:8888/unsafe/100x100/https://web.dev/backdrop-filter/hero.jpg>

<figure><img src="https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format" alt="Image resized to 100x100 pixels" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/QXf1r4Ov6gXDtbrcmLWZ.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Image resized to 100x100 pixels</figcaption></figure>### Filters <a href="#filters" class="w-headline-link">#</a>

Filters transform an image. The filters part of the URL segment starts with `filters:` followed by a colon-separated list of filters; this can be omitted if you are not using any filters. The syntax for individual filters resembles a function call (for example `grayscale()`) containing zero or more arguments.

Try it now:

1.  Apply a single filter: a Gaussian [blur](https://thumbor.readthedocs.io/en/latest/blur.html) effect with a radius of 25 pixels: <http://34.67.235.246:8888/unsafe/filters:blur(25)/https://web.dev/backdrop-filter/hero.jpg>

    <figure><img src="https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format" alt="Blurred image" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/e5zG6ghl8IADjEKMGBzf.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Blurred image</figcaption></figure>2.  Apply multiple filter. Convert to [grayscale](https://thumbor.readthedocs.io/en/latest/grayscale.html) and [rotate](https://thumbor.readthedocs.io/en/latest/rotate.html) the image 90 degrees: <http://34.67.235.246:8888/unsafe/filters:grayscale():blur(90)/https://web.dev/backdrop-filter/hero.jpg>

## <figure><img src="https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format" alt="Grayscale, rotated image" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/U9atnYPla5L93UmVx9di.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Grayscale, rotated image</figcaption></figure>Transforming Images <a href="#transforming-images" class="w-headline-link">#</a>

This section focuses on the Thumbor functionalities most relevant to performance: compression, resizing, and conversion between file formats.

### Compression <a href="#compression" class="w-headline-link">#</a>

The [quality](https://thumbor.readthedocs.io/en/latest/quality.html) filter compresses JPEG images to the desired image quality level (1-100). If no quality level is provided, Thumbor compresses the image to a quality level of 80. This is a good default: quality levels 80-85 typically have little noticeable effect on image quality, but usually decrease image size by 30-40%.

Try it now:

1.  Compress the image to a quality of 1 (very bad): <http://34.67.235.246:8888/unsafe/filters:quality(1)/https://web.dev/backdrop-filter/hero.jpg>

    <figure><img src="https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format" alt="Low-quality image" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/DyC3mcwd1vn0Xnv7GUco.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Low-quality image</figcaption></figure>2.  Compress the image using Thumbor's default compression settings: <http://34.67.235.246:8888/unsafe/filters:quality()/https://web.dev/backdrop-filter/hero.jpg>

<figure><img src="https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format" alt="Compressed image" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/vOZpDiHEPMTQOEZ3YG7e.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Compressed image</figcaption></figure>### Resizing <a href="#resizing" class="w-headline-link">#</a>

To resize an image while maintaining its original proportions use the format `$WIDTHx0` or `0x$HEIGHT` within the `size` portion of the URL string.

Try it now:

1.  Resize the image to a width of 200 pixels while maintaining original proportions: <http://34.67.235.246:8888/unsafe/200x0/https://web.dev/backdrop-filter/hero.jpg>

    <figure><img src="https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format" alt="Image resized to a width of 200 pixels" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/afo1UErx1tzpBz5mO0nQ.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Image resized to a width of 200 pixels</figcaption></figure>2.  Resize the image to a height of 500 pixels while maintaining original proportion: <http://34.67.235.246:8888/unsafe/0x500/https://web.dev/backdrop-filter/hero.jpg>

<img src="https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format" alt="Image that is 500 pixels tall" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ln4jTuQjlK8DDsutTH9i.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" />

Image resized to a height of 500 pixels

You can also resize images to a percentage of the original by using the [proportion](https://thumbor.readthedocs.io/en/latest/proportion.html) filter. If size is specified in conjunction with the proportion filter, the image will be resized, and then the proportion filter will be applied.

Try it now:

1.  Resize the image to 50% of the original: <http://34.67.235.246:8888/unsafe/filters:proportion(.5)/https://web.dev/backdrop-filter/hero.jpg>

    <figure><img src="https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format" alt="Image resized to 50% the size of the original" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KmAi5ht9IUiFPkyu6zjA.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Image resized to 50% the size of the original</figcaption></figure>2.  Resize the image to a width of 1000 pixels, then resize the image to 10% of its current size: <http://34.67.235.246:8888/unsafe/1000x/filters:proportion(.1)/https://web.dev/backdrop-filter/hero.jpg>

<figure><img src="https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format" alt="Image resized to a width of 100 pixels" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/F4jHvji47nFA7RiVdsAF.jpg?auto=format&amp;w=1600 1600w" width="800" height="505" /><figcaption>Image resized to a width of 100 pixels</figcaption></figure>These methods are just a few of Thumbor's many cropping and resizing options. To read about other options, check out [Usage](https://github.com/thumbor/thumbor/wiki/Usage).

### File Formats <a href="#file-formats" class="w-headline-link">#</a>

The [format](https://thumbor.readthedocs.io/en/latest/format.html) filter converts images to `jpeg`, `webp`, `gif`, or `png`. Keep in mind that if you're optimizing for performance you should [use either JPEG or WebP](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization) as PNG and GIF files tend to be significantly larger and do not compress as well.

Try it now:

1.  Convert the image to WebP. If you open the **Network** panel of DevTools the document's **Content-Type response header** shows that the server returned a WebP image: <http://34.67.235.246:8888/unsafe/filters:format(webp)/https://web.dev/backdrop-filter/hero.jpg>

## <figure><img src="https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format" alt="The content-type response header shown in DevTools" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/78Jp9l7N0gUQtiuxbNSn.jpg?auto=format&amp;w=1600 1600w" width="800" height="469" /><figcaption>The <code>content-type</code> response header shown in DevTools</figcaption></figure>Next Steps <a href="#next-steps" class="w-headline-link">#</a>

Try out other [filters](https://thumbor.readthedocs.io/en/latest/filters.html) and transformations on the `hero.jpg` image.

If you're following along using your own Thumbor installation, check out the appendix below that explains how and why to use the `thumbor.conf` file.

## Appendix: `thumbor.conf` <a href="#appendix:-thumbor.conf" class="w-headline-link">#</a>

Many of the configuration options discussed in this post, plus many others, can be established as defaults by setting up and using a `thumbor.conf` configuration file. Settings in the `thumbor.conf` file will be applied to all images unless overridden by the URL string parameters.

1.  Run the `thumbor-config` command to create a new `thumbor.conf` file.

        thumbor-config > ./thumbor.conf

2.  Open your new `thumbor.conf` file. The `thumbor-config` command generated a file that lists and explains all Thumbor configuration options.

3.  Configure settings by uncommenting lines and changing the default values. You may find it useful to set the following settings:

    - `QUALITY`
    - `AUTO_WEBP`
    - `MAX_WIDTH` and `MAX_HEIGHT`
    - `ALLOW_ANIMATED_GIFS`

4.  Run Thumbor with the `--conf` flag to use your `thumbor.conf` settings.

        thumbor --conf /path/to/thumbor.conf

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/images/" class="w-chip">Images</a>

<span class="w-mr--sm"> Last updated: Sep 23, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/use-thumbor/index.md)

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
