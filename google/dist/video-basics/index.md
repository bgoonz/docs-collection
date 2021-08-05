<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format" alt="A description of the hero image for screen reader users." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ZzDrBdBMFxBtALr0uCz6.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#going-beyond-images-with-basic-video-for-the-web" class="w-toc__header--link">Going beyond images with basic video for the web</a>

- [The &lt;video&gt; tag](#the-lessvideogreater-tag)
- [The &lt;source&gt; tag](#the-lesssourcegreater-tag)
- [The preload attribute](#the-preload-attribute)
- [preload='auto'](#preload'auto')
- [preload='metadata'](#preload'metadata')
- [preload='none'](#preload'none')
- [poster](#poster)
- [Playback controls](#playback-controls)
- [muted](#muted)
- [loop](#loop)
- [Autoplaying video](#autoplaying-video)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Going beyond images with basic video for the web

Learn basic video. Increase engagement.

Sep 3, 2019

[<img src="https://web-dev.imgix.net/image/admin/pl93DWDPXm3Jkz7V0Lnt.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Doug Sillars" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/pl93DWDPXm3Jkz7V0Lnt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/pl93DWDPXm3Jkz7V0Lnt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/pl93DWDPXm3Jkz7V0Lnt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/pl93DWDPXm3Jkz7V0Lnt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/pl93DWDPXm3Jkz7V0Lnt.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/dougsillars/)

<a href="/authors/dougsillars/" class="w-author__name-link">Doug Sillars</a>

- <a href="https://twitter.com/dougsillars" class="w-author__link">Twitter</a>
- <a href="https://github.com/Dougsillars" class="w-author__link">GitHub</a>
- <a href="https://dougsillars.com" class="w-author__link">Blog</a>

Are you thinking about adding video to your website? As devices and network connections have become faster and more powerful, you can move beyond images and add video to your toolchest of techniques to build the web. [Research shows](https://www.foodbloggerpro.com/blog/how-we-improved-our-landing-page-conversion-rate-by-138/) that websites with video lead to higher engagement and sales. So even if you haven't added video to your sites yet, it's probably just a matter of time until you do.

In all likelihood, the video files you add to your site will be the largest files that are downloaded. For that reason, it's extremely important to ensure that the files are built for fast and steady playback to all of your customers. Even though video can increase engagement and customer satisfaction, a video that doesn't play or stalls during playback can lead to customer frustration. This post focuses on using the HTML5 `<video>` tag for delivering video, and therefore will not cover streaming video.

So let's get started!

## The &lt;video&gt; tag <a href="#the-lessvideogreater-tag" class="w-headline-link">#</a>

It seems obvious, right? To add video, you have to add the `<video>` tag, point to a source, and then you're off to the races!

    <video src="myVideo.mp4">

And, you're right. At the highest level, this is all you need to add a video to the web. But there are a lot of attributes that you can add to the video tag to improve the layout and delivery of the video.

## The &lt;source&gt; tag <a href="#the-lesssourcegreater-tag" class="w-headline-link">#</a>

Perhaps the best way to improve the delivery of video on the web is to optimize the files that are delivered to the browser. The way to do this is using the `<source>` tag:

    <video>
      <source src="myWebmVideo.webm" type="video/webm">
      <source src="myh265Video.mp4" type="video/mp4">
      <source src="myh264Video.mp4" type="video/mp4">
    </video>

This references three separate source files. The browser starts at the top, and picks the first format and codec that it can use. In the video world, the file format, usually called the container, can be saved with different codecs, each with different attributes. ([More on this here](https://developers.google.com/web/fundamentals/media/manipulating/applications).) In the example above, the first choice is the WebM format ([which can be encoded with VP8 or VP9 codecs](https://www.webmproject.org/about/)), and is supported (at the time of writing) by 78% of [global users](https://caniuse.com/#search=webm). The second choice is the H.265 codec of mp4, which is supported on [iOS and newer Macs](https://caniuse.com/#search=h265). These codecs are newer and have improved data compression, while delivering the same quality video as older video formats.

The final choice in our list is H.264 mp4, which boasts support on 92% of all [global users](https://caniuse.com/#search=h264), but is an older format, and as such, is generally a lot larger than WebM or H.265 videos. In one example, you can see the difference for a two minute movie:

<table><thead><tr class="header"><th>Codec</th><th>File size</th></tr></thead><tbody><tr class="odd"><td>VP8</td><td>5.5 MB</td></tr><tr class="even"><td>VP9</td><td>4.2 MB</td></tr><tr class="odd"><td>H.265</td><td>5.4 MB</td></tr><tr class="even"><td>H.264</td><td>16.1 MB</td></tr></tbody></table>

Delivering files that are smaller is the best performance optimization you can make to better deliver your videos. When a smaller video is downloaded, video playback occurs sooner, and the video buffer fills up faster. This leads to fewer stalls during video playback. Additionally, server load is decreased, which makes up for the increased storage requirements of multiple video files.

## The preload attribute <a href="#the-preload-attribute" class="w-headline-link">#</a>

Videos cannot begin playback until there is some video downloaded and stored locally. Using the preload attribute, you can control how much video is downloaded on page load. There are three values for the preload attribute: `auto`, `metadata`, and `none`.

### preload='auto' <a href="#preload&#39;auto&#39;" class="w-headline-link">#</a>

If `'auto'` is used, the entire video will be downloaded, no matter if the user presses play or not. This enables fast video playback as the video is downloaded locally before the user presses play. From a data usage (and server load perspective) this should only be used when it is highly probable that the video is to be watched. Otherwise all the data of a full video download will be wasted.

### preload='metadata' <a href="#preload&#39;metadata&#39;" class="w-headline-link">#</a>

This is the default setting for preload on Chrome and Safari. When `'metadata'` is used, the first 3% of the video is downloaded. Though this shares caveats with `'auto'`, downloading just 3% of the video holds a much smaller server/data usage cost than the entire video, while still ensuring a portion of the video is stored locally for fast video startup.

### preload='none' <a href="#preload&#39;none&#39;" class="w-headline-link">#</a>

This saves the most data, but will lead to slower video startup when play is pressed, because as the setting states, zero kilobytes of the video is preloaded locally on the device. For videos that are present, but unlikely to be played, this is the appropriate setting. This might also be used if the user has enabled [Lite mode](https://blog.chromium.org/2019/04/data-saver-is-now-lite-mode.html) in their browser.

## poster <a href="#poster" class="w-headline-link">#</a>

You may want to have a poster image that displays over the video window before the video starts playing:

    <video src="myVideo.mp4" poster="/image/myVideoImage.jpg">

<figure><img src="https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format" sizes="(min-width: 478px) 478px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/g25bdsYqmAWM39KhjGTj.png?auto=format&amp;w=956 956w" width="478" height="269" /></figure>No poster image

A video without a poster shows a black screen before it starts.

<figure><img src="https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format" sizes="(min-width: 478px) 478px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/QVLwk1zEOzqllD8eY3pc.png?auto=format&amp;w=956 956w" width="478" height="269" /></figure>With a poster image

A video with a poster is much more engaging.

By adding a photo instead of a black box on the page, you make your website more engaging and interactive. However, using the `poster` attribute adds an image download before the video download begins. For that reason, you might consider avoiding adding a poster for videos that autoplay (as the additional download will delay the video download).

## Playback controls <a href="#playback-controls" class="w-headline-link">#</a>

Adding a `controls` attribute adds playback controls. Without these, your customers cannot start or stop your video. You should add this for videos so that users can stop and pause, change the volume, and so on. For background or looping videos, you may wish to omit this attribute.

## muted <a href="#muted" class="w-headline-link">#</a>

The `muted` attribute causes playback to begin in a muted state. If no controls are supplied, it will remain muted for the entirety of playback. If that is intended it might make sense to remove the audio track from the video. This further reduces the size of the video file being delivered to the customer.

As with containers and codecs, removing the audio file, also called demuxing, is also beyond the scope of this article. You can find instructions in the [Media Manipulation Cheat Sheet](https://developers.google.com/web/fundamentals/media/manipulating/cheatsheet#demux_split_audio_and_video).

## loop <a href="#loop" class="w-headline-link">#</a>

To deliver a video that loops the content (like an animated GIF), add the `loop` attribute. As video files are typically much smaller than animated GIFs, this mechanism allows you to [replace your GIFs with video files](https://dougsillars.com/2017/04/12/animated-gifs-vs-video-files/).

## Autoplaying video <a href="#autoplaying-video" class="w-headline-link">#</a>

If you want your video to play immediately (for example as a background video, or a video that loops like an animated GIF) you can add the `autoplay` attribute:

    <video src="myVideo.mp4" autoplay>

That said, in order for a video to autoplay on mobile browsers, the `muted` attribute must also be added:

    <video src="myVideo.mp4" autoplay muted>

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Simply adding a video to your website will add a new realm of engagement for your customers, but it is important that you deliver the content properly—ensuring that the playback of the video is seamless and without stalls. Using the built in attributes of the &lt;video&gt; tag can greatly help you deliver flawless video to everyone who visits your website.

<a href="/tags/media/" class="w-chip">Media</a>

<span class="w-mr--sm"> Last updated: Sep 3, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/video-basics/index.md)

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
