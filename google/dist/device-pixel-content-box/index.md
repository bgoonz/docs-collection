<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format" alt="A closeup image of a computer screen." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/t9UnR0miKBlEuPbvPdPH.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#pixel-perfect-rendering-with-devicepixelcontentbox" class="w-toc__header--link">Pixel-perfect rendering with devicePixelContentBox</a>

- [Background: CSS pixels, canvas pixels, and physical pixels](#background:-css-pixels-canvas-pixels-and-physical-pixels)
- [Pixel perfection](#pixel-perfection)
- [Pixel snapping](#pixel-snapping)
- [devicePixelContentBox](#devicepixelcontentbox)
- [Feature detection](#feature-detection)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Pixel-perfect rendering with devicePixelContentBox

How many pixels are there _really_ in a canvas?

Jul 7, 2020

[<img src="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Surma" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/MPQ3Co9Ej7Uka4cgPePh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/surma/)

<a href="/authors/surma/" class="w-author__name-link">Surma</a>

- <a href="https://twitter.com/DasSurma" class="w-author__link">Twitter</a>

Since Chrome 84, [ResizeObserver](/resize-observer/) supports a new box measurement called `device-pixel-content-box`, that measures the element's dimension in _physical_ pixels. This enables rendering pixel-perfect graphics, especially in the context of high-density screens.

## Background: CSS pixels, canvas pixels, and physical pixels <a href="#background:-css-pixels-canvas-pixels-and-physical-pixels" class="w-headline-link">#</a>

While we often work with abstract units of length like `em`, `%` or `vh`, it all boils down to pixels. Whenever we specify the size or position of an element in CSS, the browser's layout engine will eventually convert that value to pixels (`px`). These are "CSS Pixels", which have a lot of history and only have a loose relationship with the pixels you have on your screen.

For a long time, it was fairly reasonable to estimate anyone's screen pixel density with 96DPI ("dots per inch"), meaning any given monitor would have roughly 38 pixels per cm. Over time, monitors grew and/or shrunk or started to have more pixels on the same surface area. Combine that with the fact that lots of content on the web define their dimensions, including font sizes, in `px`, and we end up with illegible text on these high-density ("HiDPI") screens. As a counter-measure, browsers hide the monitor's actual pixel density and instead pretend that the user has a 96 DPI display. The `px` unit in CSS represents the size of one pixel on this _virtual_ 96 DPI display, hence the name "CSS Pixel". This unit is only used for measurement and positioning. Before any actual rendering happens, a conversion to physical pixels happens.

How do we go from this virtual display to the user's real display? Enter `devicePixelRatio`. This global value tells you how many _physical_ pixels you need to form a single CSS pixel. If `devicePixelRatio` (dPR) is `1`, you are working on a monitor with roughly 96DPI. If you have a retina screen, your dPR is probably `2`. On phones it is not uncommon to encounter higher (and weirder) dPR values like `2`, `3` or even `2.65`. It is essential to note that this value is _exact_, but doesn't let you derive the monitor's _actual_ DPI value. A dPR of `2` means that 1 CSS pixel will map to _exactly_ 2 physical pixels.

## Example

My monitor has a dPR of `1` according to Chrome…

It has 3440 pixels in width and the display area is 79cm wide. That leads to a resolution of 110 DPI. Close to 96, but not quite. That is also the reason why a `<div style="width: 1cm; height: 1cm">` will not exactly measure 1cm in size on most displays.

Finally, dPR can also be affected by your browser's zoom feature. If you zoom in, the browser increases the reported dPR, causing everything to render bigger. If you check `devicePixelRatio` in a DevTools Console while zooming, you can see fractional values appear.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format" alt="DevTools showing a variety of fractional devicePixelRatio due to zooming." sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ko6ehWmACBrUcPrl4AGO.png?auto=format&amp;w=1200 1200w" width="600" height="314" /><figcaption>DevTools showing a variety of fractional <code>devicePixelRatio</code> due to zooming.</figcaption></figure>Let's add the `<canvas>` element to the mix. You can specify how many pixels you want the canvas to have using the `width` and `height` attributes. So `<canvas width=40 height=30>` would be a canvas with 40 by 30 pixels. However, this does not mean that it will be *displayed* at 40 by 30 pixels. By default, the canvas will use the `width` and `height` attribute to define its intrinsic size, but you can arbitrarily resize the canvas using all the CSS properties you know and love. With everything we have learned so far, it might occur to you that this will not be ideal in every scenario. One pixel on the canvas might end up covering multiple physical pixels, or just a fraction of a physical pixel. This can lead to unpleasing visual artifacts.

To summarize: Canvas elements have a given size to define the area that you can draw on. The number of canvas pixels is completely independent from the canvas' display size, specified in CSS pixels. The number of CSS pixels is not the same as the number of physical pixels.

### Pixel perfection <a href="#pixel-perfection" class="w-headline-link">#</a>

In some scenarios, it is desirable to have an exact mapping from canvas pixels to physical pixels. If this mapping is achieved, it's called "pixel-perfect". Pixel-perfect rendering is crucial for legible rendering of text, especially when using [subpixel rendering](https://en.wikipedia.org/wiki/Subpixel_rendering) or when displaying graphics with tightly aligned lines of alternating brightness.

To achieve something as close to a pixel-perfect canvas as possible on the web, this has been more or less the go-to approach:

    <style>
      /* … styles that affect the canvas' size … */
    </style>
    <canvas id="myCanvas"></canvas>
    <script>
      const cvs = document.querySelector('#myCanvas');
      // Get the canvas' size in CSS pixels
      const rectangle = cvs.getBoundingClientRect();
      // Convert it to real pixels. Ish.
      cvs.width = rectangle.width * devicePixelRatio;
      cvs.height = rectangle.height * devicePixelRatio;
      // Start drawing…
    </script>

The astute reader might be wondering what happens when dPR is not an integer value. That is a good question and exactly where the crux of this entire problem lies. In addition, if you specify an element's position or size using percentages, `vh`, or other indirect values, it is possible that they will resolve to fractional CSS pixel values. An element with `margin-left: 33%` can end up with a rectangle like this:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format" alt="DevTools showing fractional pixel values as a result of a getBoundingClientRect() call." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/gWP1lVOw8ITEJhziaKnU.png?auto=format&amp;w=1600 1600w" width="800" height="409" /><figcaption>DevTools showing fractional pixel values as a result of a <code>getBoundingClientRect()</code> call.</figcaption></figure>CSS pixels are purely virtual, so having fractions of a pixel is okay in theory, but how does the browser figure out the mapping to physical pixels? Because fractional *physical* pixels are not a thing.

## Pixel snapping <a href="#pixel-snapping" class="w-headline-link">#</a>

The part of the unit conversion process that takes care of aligning elements with physical pixels is called "pixel snapping", and it does what it says on the tin: It snaps fractional pixel values to integer, physical pixel values. How exactly this happens is different from browser to browser. If we have an element with a width of `791.984px` on a display where dPR is 1, one browser might render the element at `792px` physical pixels, while another browser might render it at `791px`. That's just a single pixel off, but a single pixel can be detrimental to renderings that need to be pixel-perfect. This can lead to blurriness or even more visible artifacts like the [Moiré effect](https://en.wikipedia.org/wiki/Moir%C3%A9_pattern).

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format" alt="The top image is a raster of differently colored pixels. The bottom image is the same as above, but the width and height have been reduced by one pixel using bilinear scaling. The emerging pattern is called the Moiré effect. (You might have to open this image in a new tab to see it without any scaling applied to it.)" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/11FeCvp9aKLnDk05vYwY.png?auto=format&amp;w=1200 1200w" width="600" height="802" /><figcaption>The top image is a raster of differently colored pixels. The bottom image is the same as above, but the width and height have been reduced by one pixel using bilinear scaling. The emerging pattern is called the Moiré effect.<br />
(You might have to open this image in a new tab to see it without any scaling applied to it.)</figcaption></figure>`devicePixelContentBox` <a href="#devicepixelcontentbox" class="w-headline-link">#</a>
--------------------------------------------------------------------------------------

`devicePixelContentBox` gives you an element's content box in device pixel (i.e. physical pixel) units. It's part of `ResizeObserver`. While [ResizeObserver is now supported in all major browsers](https://caniuse.com/#feat=resizeobserver) since Safari 13.1, the `devicePixelContentBox` property is only in Chrome 84+ for now.

As mentioned in [`ResizeObserver`: it's like `document.onresize` for elements](/resize-observer/), the callback function of a `ResizeObserver` will be called before paint and after layout. That means that the `entries` parameter to the callback will contain the sizes of all observed elements just before they are being painted. In the context of our canvas problem outlined above, we can use this opportunity to adjust the number of pixels on our canvas, ensuring that we end up with an exact one-to-one mapping between canvas pixels and physical pixels.

    const observer = new ResizeObserver((entries) => {
      const entry = entries.find((entry) => entry.target === canvas);
      canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
      canvas.height = entry.devicePixelContentBoxSize[0].blockSize;

      /* … render to canvas … */
    });
    observer.observe(canvas, {box: ['device-pixel-content-box']});

The `box` property in the options object for `observer.observe()` lets you define which sizes you wish to _observe_. So while each `ResizeObserverEntry` will always provide `borderBoxSize`, `contentBoxSize` and `devicePixelContentBoxSize` (provided the browser supports it), the callback will only be invoked if any of the _observed_ box metrics change.

All of the box metrics are arrays to allow `ResizeObserver` to handle fragmentation in the future. At the time of writing, the array is always of length 1.

With this new property, we can even animate our canvas' size and position (effectively guaranteeing fractional pixel values), and not see any Moiré effects on the rendering. If you would like to see the Moiré effect on the approach using `getBoundingClientRect()`, and how the new `ResizeObserver` property allows you to avoid it, take a look at the [demo](https://device-pixel-content-box.glitch.me/) in Chrome 84 or later!

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if a user's browser has support for `devicePixelContentBox`, we can observe any element, and check if the property is present on the `ResizeObserverEntry`:

    function hasDevicePixelContentBox() {
      return new Promise((resolve) => {
        const ro = new ResizeObserver((entries) => {
          resolve(entries.every((entry) => 'devicePixelContentBoxSize' in entry));
          ro.disconnect();
        });
        ro.observe(document.body, {box: ['device-pixel-content-box']});
      }).catch(() => false);
    }

    if (!(await hasDevicePixelContentBox())) {
      // The browser does NOT support devicePixelContentBox
    }

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Pixels are a surprisingly complex topic on the web and up until now there was no way for you to know the exact number of physical pixels an element occupies on the user's screen. The new `devicePixelContentBox` property on a `ResizeObserverEntry` gives you that piece of information and allows you to do pixel-perfect renderings with `<canvas>`. `devicePixelContentBox` is supported in Chrome 84+.

<a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/rendering/" class="w-chip">Rendering</a>

<span class="w-mr--sm"> Last updated: Jul 7, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/device-pixel-content-box/index.md)

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
