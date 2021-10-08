2014-02-28

Since Android 4.4 (KitKat), the WebView component is based on the Chromium open source project. WebViews now include an updated version of the V8 JavaScript engine and support for modern web standards previously missing in old WebViews. New Webviews also share the same rendering engine as Chrome for Android, so rendering should be much more consistent between the WebView and Chrome.

In Android 5.0 (Lollipop), the WebView has moved to an APK so it can be updated seperately to the Android platform. To see what version of Chrome is currently used on a Lollipop device, simply go to Settings &lt; Apps &lt; Android System WebView and look at the version.

If you’re a web developer looking to start developing a WebView-based Android application, see [Getting Started: WebView-based Applications for Web Developers](/docs/multidevice/webview/gettingstarted/).

If you’re primarily planning to show external web content inside of your app, you should consider [Custom Tabs](/docs/multidevice/android/customtabs/#whentouse) instead.

For tips on scaling WebView content for mobile devices, see [Pixel-Perfect UI in the WebView](/docs/multidevice/webview/pixelperfect/).

The new WebView also supports [remote debugging](/devtools/docs/remote-debugging) using the Chrome DevTools.

WebView FAQ
-----------

### What version of Chrome is it based on?

The WebView shipped with **Android 4.4 (KitKat)** is based on the same code as Chrome for Android version 30. This WebView does not have full feature parity with Chrome for Android and is given the version number **30.0.0.0**.

The updated WebView shipped with **Android 4.4.3** has the version number **33.0.0.0**.

A developer preview WebView is shipping with the [Android L Developer Preview](http://developer.android.com/preview/). The developer preview version number is **36.0.0.0**.

**Caution:** You cannot publish apps using the L Developer Preview to the Google Play store.

The WebView in Android L can be updated via the Play Store, so you need to check the latest version on the device under App Settings.

### Will the new WebView auto-update?

The WebView will auto-update for mobile devices with Android L and above.

For future proofing you app, you can use the Beta WebView to test versions of the WebView before it’s launched. Checkout this [Android Developer blog post for more details](http://android-developers.blogspot.com/2015/02/beta-channel-for-android-webview.html).

### What is the default user-agent?

The new WebView adds **Chrome/\_version\_** to the user-agent string. Refer to [Chrome User Agent Strings](/docs/multidevice/user-agent/#webview_user_agent) for an example.

### How do I set the user-agent of the WebView?

You can set the user-agent by using the Java [setUserAgentString](http://developer.android.com/reference/android/webkit/WebSettings.html#setUserAgentString(java.lang.String)) method. This method only changes the user-agent string for requests sent by the WebView itself.

You can’t set the user-agent string used for `XMLHttpRequest`s made from JavaScript. Those requests always use the default user-agent string.

### Does this mean Chrome for Android is using the WebView?

No, Chrome for Android is separate from WebView. They’re both based on the same code, including a common JavaScript engine and rendering engine.

### Does the new WebView have feature parity with Chrome for Android?

For the most part, features that work in Chrome for Android should work in the new WebView.

Chrome for Android supports a few features which aren’t enabled in the WebView, including:

<table><thead><tr class="header"><th>Feature</th><th>WebView v30</th><th>WebView v33</th><th>WebView v36</th></tr></thead><tbody><tr class="odd"><td><a href="http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/">WebGL</a></td><td>x</td><td>x</td><td>✓</td></tr><tr class="even"><td><a href="http://www.html5rocks.com/en/tutorials/webrtc/basics/">WebRTC</a></td><td>x</td><td>x</td><td>✓</td></tr><tr class="odd"><td><a href="http://www.html5rocks.com/en/tutorials/webaudio/intro/">WebAudio</a></td><td>x</td><td>x</td><td>✓</td></tr><tr class="even"><td><a href="http://www.html5rocks.com/en/mobile/fullscreen/">Fullscreen API</a></td><td>x</td><td>x</td><td>x</td></tr><tr class="odd"><td><a href="http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/">Form validation</a></td><td>x</td><td>✓</td><td>✓</td></tr><tr class="even"><td><a href="http://www.html5rocks.com/en/tutorials/file/filesystem/">Filesystem API</a></td><td>x</td><td>x</td><td>x</td></tr><tr class="odd"><td><a href="http://updates.html5rocks.com/2012/08/Integrating-input-type-file-with-the-Filesystem-API">File input type</a></td><td>x</td><td>x</td><td>x</td></tr><tr class="even"><td><a href="http://updates.html5rocks.com/tag/datalist"><code>&lt;datalist&gt;</code></a></td><td>x</td><td>✓</td><td>✓</td></tr></tbody></table>

### What hardware sensor APIs are available to the new WebView?

Some HTML5 APIs can be used to access the hardware sensors on an Android device. Chrome for Android supports a few of these APIs but not all of them are currently enabled in the WebView.

<table><colgroup><col style="width: 12%" /><col style="width: 44%" /><col style="width: 44%" /></colgroup><thead><tr class="header"><th>API</th><th>WebView v30</th><th>WebView v33</th></tr></thead><tbody><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API">Geolocation API</a> (requires <code>android.permission.ACCESS_COARSE_LOCATION</code> and/or <code>android.permission.ACCESS_FINE_LOCATION</code> permissions)</td><td>✓</td><td>✓</td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event">Device Orientation API</a></td><td>x</td><td>x</td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API">Media Capture and Streams</a></td><td>x</td><td>x</td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API">Vibration API</a> (requires <code>android.permission.VIBRATE</code> permission)</td><td>x</td><td>✓</td></tr></tbody></table>

### What does the new WebView mean for developers?

This is a big change from the original WebView as it brings a new set of HTML5 feature support, improved JavaScript performance, and remote debugging of web content using the Chrome DevTools.

There **are** some changes that will affect existing apps.

If you are currently using `content://` URLs to load files from a content provider in your application, note that these URLs only work when accessed from local content. That is, web content hosted outside your application is not allowed to access files built into your application.

There are a small number of other changes that might impact your application. Read the [migration guide](http://developer.android.com/guide/webapps/migrating.html) for more information.

### How do I enable remote debugging?

See the [remote debugging guide](/devtools/docs/remote-debugging).

### Does the WebView support the Chrome Apps APIs?

No. The Chrome Apps platform isn’t yet supported on Android.

### Should I enable hardware acceleration?

Hardware acceleration is enabled by default. If you are explicitly disabling it for older versions of Android you should try enabling it for KitKat based devices and see if it improves performance.
