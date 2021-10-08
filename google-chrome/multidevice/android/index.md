2014-02-28

Google Chrome is available on Android devices with Android 4.0 (Ice Cream Sandwich) and later versions. You can also download it from [Google Play](https://play.google.com/store/apps/details?id=com.android.chrome).

For a complete list of developer features in Chrome, see [chromestatus.com](http://chromestatus.com/).

## A first-class browsing experience

When the user signs into Chrome on one device, the tabs and browsing history of that session are available to the user when she signs into Chrome on another device. Note, it’s the entire page content that gets synchronized between Chrome instances, not just the URL, so the user doesn’t have to resubmit credentials to see a boarding pass or an article on a site that requires a login.

The address bar uses prefetching to fill in URLs and performs search queries with suggestions based on browsing history and local bookmarks. To save bandwidth, this feature only runs when the user is connected to a wifi network.

Highlights of this user experience include:

- Smooth scrolling of independent elements on the same page
- Fixed-position elements that hold their spot while the user scrolls through the page
- Native inertial scrolling by default
- A much improved [multi-touch](http://www.html5rocks.com/mobile/touch.html) implementation
- HTML date/time pickers
- [Text auto-sizing](https://bugs.webkit.org/show_bug.cgi?id=84186), also known as font boosting

With these improvements, Chrome for Android enables interactive mobile web experiences.

See all the [Chrome for Android features](http://www.google.com/intl/en/chrome/android/features.html) such as tabs, incognito mode, and sync across devices for the user’s Google account.

## Performance

Chrome for Android brings to small devices the same multi-process architecture, GPU-accelerated rendering, and the V8 JavaScript engine - all optimized for mobile architectures. Chrome for Android delivers fast graphics performance through:

- GPU acceleration for the [`canvas` element](http://www.html5rocks.com/tutorials/canvas/performance)
- Fluid CSS3 transforms and transitions
- Support for `requestAnimationFrame` for more efficient animations

## Use Developer Tools to find problems—and fix them

Debugging web pages on the small screen is difficult. There’s just not enough real estate to inspect elements and resources on the device. Now you can debug mobile web sites with the full suite of [Chrome Developer Tools](/devtools/index.html) running on a desktop browser that’s connected to your phone via USB. See [Remote Debugging](/devtools/docs/remote-debugging) for further details.

In addition to the powerful Chrome Developer Tools, Chrome for Android provides more advanced developer features for very specific use cases:

- GPU diagnostics: `chrome://gpu`
- AppCache debugging: `chrome://appcache-internals`
- Net stack debugging: `chrome://net-internals`

You can also use the [Resource Timing](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API) and [User Timing](http://www.html5rocks.com/en/tutorials/webperformance/usertiming/) APIs to analyze application performance.

## Working offline

Working online is convenient, but connections sometimes fail when the signal is blocked or nonexistent. Chrome for Android supports the latest open web HTML5 features that address this concern, including:

- [AppCache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) or application cache.
- [FileSystem](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem) and [File APIs](https://developer.mozilla.org/en-US/docs/Web/API/File) (File, FileList, FileReader, Blob)
- [localStorage](https://web.dev/storage-for-the-web/) for storing simple key-value pairs
- [WebSQL](https://web.dev/storage-for-the-web/) for relational data (deprecated)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB), a standard indexed data store

For more about off-line storage, see [these articles](https://web.dev/storage-for-the-web/).

## Standards and APIs

Chrome for Android supports modern web standards. This section presents a sampling of features; for an updated view of features per Chrome release, see [chromestatus.com](https://chromestatus.com).

### CSS and presentation

New CSS3 artifacts are available:

- Support for the standard [CSS calc](<https://developer.mozilla.org/en-US/docs/Web/CSS/calc()>) function (prefixed as -webkit-calc)
- [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) are supported (prefixed as -webkit-filter)
- The [Flexbox](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_flexible_boxes) layout model is fully supported (prefixed as -webkit-flex)
- [Viewport units](https://developer.mozilla.org/en-US/docs/CSS/length), `vh`, `vmin`, and `vw` for responsive design
- <span class="citation" data-cites="supports">\[@supports\]</span>[23](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) conditional blocks to test whether Chromium supports certain property/value pairs
- The [:unresolved CSS pseudo-class](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/#fouc) that lets you style a custom element that hasn’t been registered in the browser yet (custom elements are part of the [Web Components](https://developers.google.com/web/fundamentals/web-components/customelements) standard in development)

### Elements

Newer standard HTML5 elements supported include the following:

- [iframe](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe) elements with seamless, srcdoc, and sandbox attributes
- [Shadow DOM](http://www.html5rocks.com/tutorials/webcomponents/shadowdom/) is now exposed via `element.webkitCreateShadowRoot()`.
- The [track](https://developer.mozilla.org/en-US/docs/HTML/Element/track) element, for use with the audio and video tags, lets you set metadata, subtitles, and so forth
- The [viewport](https://web.dev/responsive-web-design-basics/#viewport) element that provides for a better presentation of web pages on mobile devices

### Device APIs

In a mobile world, it’s important to be able to access your user’s contextual surroundings, from location and device orientation to camera access. Chrome for Android provides:

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) for accessing location
- [HTML media capture](http://www.w3.org/TR/2010/WD-html-media-capture-20100928/) for camera access
- [Device orientation](http://www.html5rocks.com/tutorials/device/orientation/) for portrait vs. landscape orientation
- [Android Intent URIs](http://developer.android.com/guide/appendix/g-app-intents.html) such as `tel:` and `geo:` that give access to the dialer and Google maps

### Standard APIs

Chrome for Android supports many HTML5 APIs that are ready to use in your apps.

- [requestAnimationFrame](http://www.html5rocks.com/en/tutorials/speed/animations/) to achieve optimum animation performance
- Interactive communication between server and client with [WebSockets](https://developer.mozilla.org/en-US/docs/WebSockets).
- Multi-threading with [Web Workers](http://www.html5rocks.com/en/tutorials/workers/basics/) (dedicated only)
- [requestFullscreen](http://www.html5rocks.com/en/mobile/fullscreen/#toc-request) method (presently via the prefixed call, `webkitRequestFullScreen()`) to allow you to hide the browser UI (chrome)
- [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) for real-time communication without a plug-in
- [WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to process and synthesize audio signals
- Experimental support (via `chrome://flags` in the Chrome address bar) for the following APIs:
  - [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) for creating three-dimensional graphics for web browsers

### Security

Chrome for Android supports [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to significantly reduce the risk and impact of XSS attacks, using the standard (non-prefixed) HTTP header, `Content-Security-Policy`.

## More resources

For a complete list of developer features in Chrome, see [chromestatus.com](http://chromestatus.com/).

Find more information about open web platform APIs and technologies for mobile on [WebPlatform.org](https://web.dev/responsive-web-design-basics/).

## Known issues

Development is still underway, and there are many additional features being added to Google Chrome for Android. For current status, see the issues list at [crbug.com](https://crbug.com) and star the ones you need the most. If you find a new issue, log it using [new.crbug.com](https://new.crbug.com).

## Share your thoughts

If you run into a mobile web development problem and would like help, please post it to [Stack Overflow](http://stackoverflow.com/questions/tagged/google-chrome+android) using the `[google-chrome]` and `[android]` tags.
