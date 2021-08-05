<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format" alt="Artistic image of microphone and pop filter" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/uXHdcVy0A8BFAdNr8bXu.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#profiling-web-audio-apps-in-chrome" class="w-toc__header--link">Profiling Web Audio apps in Chrome</a>

- [Web Audio profiling tools](#web-audio-profiling-tools)
- [When do you use about://tracing?](#when-do-you-use-about:tracing)
- [When do you use the WebAudio tab?](#when-do-you-use-the-webaudio-tab)
- [Use about://tracing](#use-about:tracing)
- [How to capture tracing data](#how-to-capture-tracing-data)
- [How to analyze tracing data](#how-to-analyze-tracing-data)
- [Learning from real-world examples](#learning-from-real-world-examples)
- [Use the WebAudio tab in Chrome DevTools](#use-the-webaudio-tab-in-chrome-devtools)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Profiling Web Audio apps in Chrome

Learn how to profile the performance of Web Audio apps in Chrome using `about://tracing` and the **WebAudio** tab in DevTools.

May 4, 2020

[<img src="https://web-dev.imgix.net/image/admin/YbudG6EUF3JjB7u1iLey.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Hongchan Choi" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/YbudG6EUF3JjB7u1iLey.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/YbudG6EUF3JjB7u1iLey.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/YbudG6EUF3JjB7u1iLey.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/YbudG6EUF3JjB7u1iLey.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/YbudG6EUF3JjB7u1iLey.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/hongchanchoi/)

<a href="/authors/hongchanchoi/" class="w-author__name-link">Hongchan Choi</a>

- <a href="https://twitter.com/hochsays" class="w-author__link">Twitter</a>
- <a href="https://github.com/hoch" class="w-author__link">GitHub</a>
- <a href="https://hoch.io/" class="w-author__link">Blog</a>

You reached this documentation probably because you're developing an app that uses the [Web Audio API](https://developer.mozilla.org/docs/Web/API/Web_Audio_API) and experienced some unexpected glitches such as popping noises from the output. You might already be involved in a [crbug.com](https://crbug.com) discussion and a Chrome engineer has asked you to upload "tracing data". This guide shows how to obtain the data so you can help engineers triage, and eventually fix, the issue.

## Web Audio profiling tools <a href="#web-audio-profiling-tools" class="w-headline-link">#</a>

There are two tools that will help you when profiling Web Audio, `about://tracing` and the **WebAudio** tab in Chrome DevTools.

### When do you use `about://tracing`? <a href="#when-do-you-use-about:tracing" class="w-headline-link">#</a>

When mysterious "glitches" happen. Profiling the app with the tracing tools gives you insights on:

- **Time slices spent by specific function calls** on different threads
- **Audio callback timing** in the timeline view

It usually shows the missed deadlines or the big garbage collection stops that might cause unexpected audio glitches. This information is useful for triaging a bug. Chromium engineers will ask for tracing data if a local reproduction of the issue is not feasible. See [The Trace Event Profiling Tool](https://www.chromium.org/developers/how-tos/trace-event-profiling-tool) for general instructions on how to trace.

### When do you use the **WebAudio** tab? <a href="#when-do-you-use-the-webaudio-tab" class="w-headline-link">#</a>

When you want to get a feel for how the application performs in the real world. DevTools shows you a running estimate of render capacity, which indicates how the web audio rendering engine is handling render tasks over a given render budget (for example, approximately 2.67ms @ 48KHz). If the capacity goes near 100%, that means your app is likely to produce glitches because the renderer is failing to finish the work in the render budget.

## Use `about://tracing` <a href="#use-about:tracing" class="w-headline-link">#</a>

### How to capture tracing data <a href="#how-to-capture-tracing-data" class="w-headline-link">#</a>

_The instructions below written are for Chrome 80 and later._

For best results, close all other tabs and windows, and disable extensions. Alternatively you can either [launch a new instance of Chrome](https://developer.chrome.com/devtools/docs/clean-testing-environment) or use other builds from [different release channels](https://www.chromium.org/getting-involved/dev-channel) (e.g. Beta or Canary). Once you have the browser ready, follow the steps below:

1.  Open your application (web page) on a tab.

2.  Open another tab and go to `about://tracing`.

3.  Press the **Record** button and select **Manually select settings**.

4.  Press the **None** buttons on both the **Record Categories** and **Disabled by Default Categories** sections.

5.  In the **Record Categories** section, select the following:

    - `audio`
    - `blink_gc`
    - `media`
    - `v8.execute` (if you're interested in `AudioWorklet` JS code performance)
    - `webaudio`

6.  In the **Disabled by Default Categories** section, select the following:

    - `audio-worklet` (if you're interested in where the `AudioWorklet` thread starts)
    - `webaudio.audionode` (if you need the detailed trace for each `AudioNode`)

7.  Press the **Record** button at the bottom.

8.  Go back to your application tab and redo the steps that triggered the issue.

9.  When you have enough trace data, go back to the tracing tab and press **Stop**.

10. The tracing tab will visualize the result.

    <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format" alt="Screen shot after tracing has completed." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/3GqKLXTP7XzFp6ADztc4.jpg?auto=format&amp;w=1600 1600w" width="800" height="525" />

11. Press **Save** to save the tracing data.

### How to analyze tracing data <a href="#how-to-analyze-tracing-data" class="w-headline-link">#</a>

The tracing data visualizes how Chrome's web audio engine renders the audio. The renderer has two different render modes: **Operating system mode** and **Worklet mode**. Each mode uses a different threading model, so the tracing results also differ.

#### Operating system mode <a href="#operating-system-mode" class="w-headline-link">#</a>

In operating system mode, the [`AudioOutputDevice`](https://source.chromium.org/chromium/chromium/src/+/master:media/audio/audio_output_device.h) thread runs all the web audio code. The `AudioOutputDevice` is a real-time priority thread originating from the browser's Audio Service that is driven by the audio hardware clock. If you see irregularity from the trace data in this lane, it means the callback timing from the device may be jittery. The combination of Linux and Pulse Audio is known to have this problem. See the following Chromium issues for more details: [\#825823](https://crbug.com/825823), [\#864463](https://crbug.com/864463).

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format" alt="Screen shot of operating system mode tracing result." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Mf64zHw10phOMhU3gXsJ.jpg?auto=format&amp;w=1600 1600w" width="800" height="398" />

#### Worklet mode <a href="#worklet-mode" class="w-headline-link">#</a>

In Worklet Mode, which is characterized by one thread jump from `AudioOutputDevice` to the [`AudioWorklet` thread](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/modules/webaudio/audio_worklet_thread.h), you should see well-aligned traces in two thread lanes as shown below. When the worklet is activated all the web audio operations are rendered by the `AudioWorklet` thread. This thread is currently not a real-time priority one. The common irregularity here is a big block caused by the garbage collection or missed render deadlines. Both cases lead to glitches in the audio stream.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format" alt="Screen shot of worklet mode tracing result." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/2kSG5BoaXZ5CZIlVvIYI.png?auto=format&amp;w=1600 1600w" width="800" height="449" />

In both cases, the ideal tracing data is characterized by well-aligned audio device callback invocations and render tasks being completed well within the given render budget. The two screenshots above are great examples of the ideal tracing data.

### Learning from real-world examples <a href="#learning-from-real-world-examples" class="w-headline-link">#</a>

#### Example 1: Render tasks going beyond render budget <a href="#example-1:-render-tasks-going-beyond-render-budget" class="w-headline-link">#</a>

The screenshot below ([Chromium issue \#796330](https://crbug.com/796330)) is a typical example of when code in `AudioWorkletProcessor` takes too long and goes beyond a given render budget. The callback timing is well behaved but the audio processing function call of the Web Audio API failed to complete the work before the next device callback.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format" alt="Diagram showing audio glitch due to render task overflowing budget." class="w-screenshot w-screenshot--filled" sizes="(min-width: 734px) 734px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/J3CkP24NupnqB1XDGH6w.png?auto=format&amp;w=1468 1468w" width="734" height="362" />

**Your options:**

- Reduce the workload of the audio graph by using fewer `AudioNode` instances.
- Reduce the workload of your code in the `AudioWorkletProcessor`.
- Increase the base latency of `AudioContext`.

#### Example 2: Significant garbage collection on the worklet thread <a href="#example-2:-significant-garbage-collection-on-the-worklet-thread" class="w-headline-link">#</a>

Unlike on the operating system audio rendering thread, garbage collection is managed on the worklet thread. That means if your code does memory allocation/deallocation (e.g. new arrays) it eventually triggers a garbage collection which synchronously blocks the thread. If the workload of web audio operations and garbage collection is bigger than a given render budget, it results in glitches in the audio stream. The following screenshot is an extreme example of this case.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format" alt="Audio glitches caused by garbage collection." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ckdPwqnRtoHsRQkOVy8J.png?auto=format&amp;w=1600 1600w" width="800" height="334" />

Chrome's `AudioWorkletProcessor` implementation generates `Float32Array` instances for the input and output buffer every audio processing callback. This also slowly builds up the memory usage over time. The team has a plan to improve the design once the related specification is finalized.

**Your options:**

- Allocate the memory up front and reuse it whenever possible.
- Use different design patterns based on `SharedArrayBuffer`. Although this is not a perfect solution, several web audio apps use a similar pattern with `SharedArrayBuffer` to run the intensive audio code. Examples:
  - [Audio Worklet Design Pattern (Web Audio Power House)](https://developers.google.com/web/updates/2018/06/audio-worklet-design-pattern#webaudio_powerhouse_audio_worklet_and_sharedarraybuffer)
  - [Audio Device Client Prototype](https://github.com/GoogleChromeLabs/audio-device-client-prototype)

#### Example 3: Jittery audio device callback from `AudioOutputDevice` <a href="#example-3:-jittery-audio-device-callback-from-audiooutputdevice" class="w-headline-link">#</a>

The precise timing of audio callback is the most important thing for web audio. This should be the most precise clock in your system. If the operating system or its audio subsystem cannot guarantee a solid callback timing, all the subsequent operations will be affected. The following image is an example of jittery audio callback. Compared to the previous two images, the interval between each callback varies significantly.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format" alt="Screen shot comparing unstable vs stable callback timing." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1UN5udXOW56ooihw5M18.png?auto=format&amp;w=1600 1600w" width="800" height="252" />

This is a known issue on Linux, which uses Pulse Audio as an audio backend. This is still under investigation ([Chromium issue \#825823](https://crbug.com/825823)).

## Use the **WebAudio** tab in Chrome DevTools <a href="#use-the-webaudio-tab-in-chrome-devtools" class="w-headline-link">#</a>

You also can use the DevTools tab specifically designed for web audio. This is less comprehensive compared to the tracing tool, but it is useful if you want to gauge the running performance of your application.

Access the panel by opening the **Main Menu** of DevTools, then go to **More tools** &gt; **WebAudio**.

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format" alt="Screen shot showing how to open WebAudio panel in Chrome DevTools." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/t2eX431PTio5oOFkmOtR.jpg?auto=format&amp;w=1600 1600w" width="800" height="423" /> <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format" alt="Screen shot of WebAudio panel in Chrome DevTools." class="w-screenshot w-screenshot--filled" sizes="(min-width: 595px) 595px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/HBdc8LHEgIRHkHUJdtBq.png?auto=format&amp;w=1190 1190w" width="595" height="299" />

This tab shows information about running instances of `BaseAudioContext`. Use it to see how the web audio renderer is performing on the page.

Since a page can have multiple `BaseAudioContext` instances, the **Context Selector** (which is the drop-down menu that says `realtime (4e1073)` in the last screenshot), allows you to choose what you want to inspect. The inspector view shows the properties (e.g. sample rate, buffer size, channel count, and context state) of a `BaseAudioContext` instance that you select, and it dynamically changes when properties change.

The most useful thing in this view is the status bar at the bottom. It is only active when the selected `BaseAudioContext` is an `AudioContext`, which runs in real-time. This bar shows the instantaneous audio stream quality of a selected `AudioContext` and is updated every second. It provides the following information:

- **Callback interval** (ms): Displays the weighted mean/variance of callback interval. Ideally the mean should be stable and the variance should be close to zero. Otherwise the operating system's audio infra might have problems in deeper layers.
- **Render Capacity** (percent): Follows this formula: (_time spent in actual rendering / instantaneous callback interval_) × 100. When the capacity gets close to 100 percent, it means that the renderer is doing too much for a given render budget, so you should consider doing less in the web audio code.

You can manually trigger a garbage collector by clicking the trash can icon.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Debugging audio is hard. Debugging audio in the browser is even harder. However, these tools can ease the pain by providing you with useful insights on how the web audio code performs. In some cases, you may find that web audio does not behave as it should - then do not be afraid to [file a bug on Chromium Bug Tracker](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EWebAudio). While filling out the information, you can follow the guideline above and submit the tracing data you captured with a reproducible test case. With this data the Chrome engineers will be able to fix your bug much faster.

Photo by Jonathan Velasquez on [Unsplash](https://unsplash.com/photos/c1ZN57GfDB0)

<a href="/tags/media/" class="w-chip">Media</a> <a href="/tags/memory/" class="w-chip">Memory</a>

<span class="w-mr--sm"> Last updated: May 4, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/profiling-web-audio-apps-in-chrome/index.md)

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
