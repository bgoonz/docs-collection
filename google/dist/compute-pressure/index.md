<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format" alt="A pressure gauge and pipes." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/H9cVTFMj4cYmoIfGYQqd.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#observing-compute-pressure" class="w-toc__header--link">Observing compute pressure</a>

- [Background](#background)
- [Use cases](#use-cases)
- [Video conferencing](#video-conferencing)
- [Video games](#video-games)
- [CPU utilization](#cpu-utilization)
- [CPU clock speed](#cpu-clock-speed)
- [Using the API](#using-the-api)
- [Exposing limited information via thresholds and buckets](#exposing-limited-information-via-thresholds-and-buckets)
- [Try a demo](#try-a-demo)
- [API status](#api-status)
- [API Availability](#api-availability)
- [Enabling support during the origin trial phase](#ot)
- [Register for the origin trial](#register-for-ot)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Feature detection](#feature-detection)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Observing compute pressure

An experimental API for reacting to changes in CPU use.

Jun 3, 2021 <span class="w-author__separator">•</span> Updated Jun 7, 2021

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

The Compute Pressure API is part of the [capabilities project](https://web.dev/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

## Background <a href="#background" class="w-headline-link">#</a>

The sound of fans revving up inside of a laptop's body, or a phone that's warm to the touch are unpleasant, if all too familiar, sensations. They're signs that the hardware inside of a device is being pushed to its limit, and the only options are dissipating the associated heat, or deliberately slowing down the speed of the processors so that they'll run cooler. Most installed applications are able to detect when a device is under this type of CPU stress, and can selectively disable features or reduce their workloads in response. Increasingly, there are web applications that would benefit from the same information.

[Compute Pressure](https://github.com/oyiptong/compute-pressure/) is a new, experimental API allows web applications to gain insight into the CPU utilization of the browser's device. The API provides a callback that receives periodic updates, allowing developers to observe changes in CPU utilization over time. A web app that uses this API can enable or disable heavyweight features in response to these observations. It's a feedback mechanism that unlocks new doors for adaptive behavior, which can in turn lead to smoother, cooler experiences across a range of hardware devices.

## Use cases <a href="#use-cases" class="w-headline-link">#</a>

The motivating use cases are helping video conferencing and video game web applications adapt to CPU utilization. The initial experimental implementation of the API aims to support the decisions listed here.

### Video conferencing <a href="#video-conferencing" class="w-headline-link">#</a>

- Dynamically adjusting the number of live video feeds displayed on the screen at once.
- Adjusting the video resolution or frame rate.
- Skipping non-essential video processing, such as cosmetic filters.
- Disabling non-essential audio processing, such as noise suppression.
- Skewing the quality-vs-speed and size-vs-speed knobs towards "speed" in video and audio encoding.

### Video games <a href="#video-games" class="w-headline-link">#</a>

- Using lower-quality video and audio assets as needed.
- Disabling optional effects like reflections, glare, or particle animations that don't affect gameplay.
- Tweaking quality-vs-speed knobs in the game's rendering engine, affecting areas like shadow quality, texture filtering, and view distance.

The secondary use case is measuring the CPU resource consumption of a feature. This ultimately supports the main goal of avoiding driving user devices into high CPU utilization. The API helps developers make the types of decisions listed here.

- Comparing the CPU consumption of alternative implementations of the same feature to find out which is more efficient. The API supports measuring CPU utilization in the field via [A/B tests](https://en.wikipedia.org/wiki/A/B_testing) because a feature's CPU utilization depends on the hardware it's running on. Most developers cannot afford performance measurement labs covering all the devices owned by their users.
- Estimating the impact on CPU consumption of enabling a feature. This cost estimate feeds into the decisions outlined in the primary use case.

## CPU utilization <a href="#cpu-utilization" class="w-headline-link">#</a>

The CPU utilization of a device is the average of the utilization of all the device's [CPU cores](https://en.wikipedia.org/wiki/Multi-core_processor), represented in the API as a number between `0.0` and `1.0`.

A CPU core's utilization is the fraction of time that the core has been executing code belonging to a thread, as opposed to being in an idle state.

A CPU utilization close to `0.0` indicates that the processor has been almost entirely idle. A CPU utilization close to `1.0` is very likely to generate excessive heat. Web applications can help avoiding bad user experiences by reducing their compute demands when the CPU utilization is high.

## CPU clock speed <a href="#cpu-clock-speed" class="w-headline-link">#</a>

Modern CPU cores support a set of clock speeds. The device's firmware or operating system can set the core clock speed in order to trade off the available CPU computational resources with power consumption.

From a user experience standpoint, the following are the most interesting clock speeds:

- The minimum clock speed, which results in the lowest power consumption.
- The base clock speed, which results in a moderate level of power consumption and heat generation. This tends to be the speed advertised in marketing materials.
- The maximum clock speed, sometimes marketed as "turbo boost." Running at this speed causes unsustainable amounts of heating. It can only be used for short periods of time, to satisfy bursts in demand for computing power.

When a device's CPU utilization gets high, the device may increase clock speeds across its CPU cores, in an attempt to meet the demand for computing power. As the speeds exceed the base clock speed, the elevated power consumption increases the CPU's temperature. At some point, the device enters a [thermal throttling regime](https://en.wikipedia.org/wiki/Dynamic_frequency_scaling), where the CPU clock speed is reduced in order to bring the temperature down.

As with CPU utilization, values from `0.0` (minimal) to `1.0` (boosted) are used to normalize clock speeds. A value of `0.5` represents the base clock speed for a given CPU.

## Using the API <a href="#using-the-api" class="w-headline-link">#</a>

The following code creates a `ComputePressureObserver`, configured with specific triggering thresholds, along with an associated callback function that may be invoked when a threshold is crossed. The callback is intentionally rate-limited, with the current implementation maxing out at one invocation per second for a page in the foreground, and once per ten seconds for background pages.

Inside the callback function, your web application can respond to the changing utilization and clock speed levels by enabling or disabling CPU-intensive functionality.

    function callback(update) {
      if (update.cpuSpeed > 0.5) {
        // The CPU is running at faster than base speed.
      } else {
        // The CPU is running at normal or reduced speed.
      }

      if (update.cpuUtilization >= 0.9) {
        // CPU utilization is over 90%.
      } else if (update.cpuUtilization >= 0.75) {
        // CPU utilization is over 75%.
      } else if (update.cpuUtilization >= 0.5) {
        // CPU utilization is over 50%.
      } else {
        // CPU utilization is under 50%.
      }
    }

    const observer = new ComputePressureObserver(callback, {
      // Thresholds divide the interval [0.0 .. 1.0] into ranges.
      cpuUtilizationThresholds: [0.5, 0.75, 0.9],
      // The minimum clock speed is 0.0, and the maximum speed is 1.0.
      // 0.5 represents the base clock speed.
      cpuSpeedThresholds: [0.5],
    });

    // Begin observing changes and triggering callbacks:
    observer.observe();

    // ...later on, to stop observing changes:
    observer.unobserve();

### Exposing limited information via thresholds and buckets <a href="#exposing-limited-information-via-thresholds-and-buckets" class="w-headline-link">#</a>

One of the key API design goals is to provide enough information for an application to make useful decisions based on compute pressure, while not exposing information that might [harm a user's privacy](https://github.com/oyiptong/compute-pressure/blob/main/security-privacy-self-assessment.md).

With this in mind, the API reports normalized, unitless values between `0.0` and `1.0` instead of more identifiable values like clock speeds in GHz. The values passed to the callback fall into one of the "buckets" defined by the thresholds used to configure the observer. The actual value will be the midpoint between the upper and lower bounds for the bucket. In other words, they will be values determined by how you configure the observer, and not based on the actual device.

To give an example, the configuration in the preceding section uses `cpuUtilizationThresholds: [0.5, 0.75, 0.9]`. This configuration sets up a total of four possible buckets that the reported values might fall into, covering the ranges 0.0 to 0.5, 0.5 to 0.75, 0.75 to 0.9, and 0.9 to 1.0. To represent bucket membership, the value reported to the callback is the average between the lower and upper bounds for the bucket.

<figure><img src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/VUrr3MykViLDtHuTkjYG.svg" alt="This diagram illustrates the relationship between three thresholds and the four buckets that they form." width="800" height="549" /><figcaption>This diagram illustrates the relationship between three thresholds and the four buckets that they form.</figcaption></figure>Here's how some "real" CPU utilization values, as reported by the operating system to the browser, would be represented as values passed to your callback:

- "Real" 0% utilization would map to the 0.0 to 0.5 bucket, and would be reported as `cpuUtilization: 0.25`, since 0.25 is the average of 0.0 and 0.5.
- "Real" 40% utilization would similarly map to the 0.0 to 0.5 bucket, and be reported as `cpuUtilization: 0.25`
- "Real" 60% utilization would map to the 0.5 to 0.75 bucket, and be reported as `cpuUtilization: 0.625`
- "Real" 80% utilization would map to the 0.75 to 0.9 bucket, and be reported as `cpuUtilization: 0.825`

The same threshold and bucket system applies to the exposed CPU speed values.

The values reported by the API reflect the overall state of the CPU, due to utilization across all applications currently running. Therefore, even if your own web application is almost entirely idle, you may see high utilization and clock speed values reported, due to the activities of other applications.

## Try a demo <a href="#try-a-demo" class="w-headline-link">#</a>

When accessed on a browser that supports the origin trial (currently Chrome 92 or later), [this demo](https://googlechrome.github.io/samples/compute-pressure/index.html) will display an ongoing readout of your device's CPU utilization and speed.

## API status <a href="#api-status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/oyiptong/compute-pressure/blob/main/README.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://oyiptong.github.io/compute-pressure/">In Progress</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td>In progress</td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><a href="#ot">In progress</a></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## API Availability <a href="#api-availability" class="w-headline-link">#</a>

### Enabling support during the origin trial phase <a href="#ot" class="w-headline-link">#</a>

Starting in Chrome 92, the Compute Pressure API can be used as part of an origin trial.

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/1838594547874004993) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the API locally, without an origin trial token, enable the `#enable-experimental-web-platform-features` flag in about://flags.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

You should check for the presence of `ComputePressureObserver` in the `window` scope to see if the feature is available:

    if ('ComputePressureObserver' in window) {
      // The Compute Pressure API is available.
    }

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This blog post is derived on the sample code and [API explainer](https://github.com/oyiptong/compute-pressure/blob/main/README.md) created by Olivier Yiptong and Victor Costan.

The hero image was created by Robert Anasch on [Unsplash](https://unsplash.com/photos/-C7IKRBZHrg). The diagram illustrating bucketing was created by [Adam Argyle](/authors/adamargyle/).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jun 7, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/compute-pressure/index.md)

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
