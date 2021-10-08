2014-02-28

A browser’s user agent string (UA) helps identify which browser is being used, what version, and on which operating system. When feature detection APIs are not available, use the UA to customize behavior or content to specific browser versions.

Like all other browsers, Chrome for Android sends this information in the `User-Agent` HTTP header every time it makes a request to any site. It’s also available in the client through JavaScript using the `navigator.userAgent` call.

Chrome for Android
------------------

[Chrome for Android](https://play.google.com/store/apps/details?id=com.android.chrome) reports its UA in the following formats, depending on whether the device is a phone or a tablet.

**Phone UA:**

    Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) 
    AppleWebKit/{WebKit Rev} (KHTML, like Gecko)
    Chrome/{Chrome Rev} Mobile Safari/{WebKit Rev}

**Tablet UA:**

    Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) 
    AppleWebKit/{WebKit Rev} (KHTML, like Gecko) 
    Chrome/{Chrome Rev} Safari/{WebKit Rev}

Here’s an example of the Chrome user agent string on a Galaxy Nexus:

    Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) 
    AppleWebKit/535.19 (KHTML, like Gecko) 
    Chrome/18.0.1025.133 Mobile Safari/535.19

If you are parsing user agent strings using regular expressions, the following can be used to check against Chrome on Android phones and tablets:

-   **Phone pattern:** `'Android' + 'Chrome/[.0-9]* Mobile'`
-   **Tablet pattern:** `'Android' + 'Chrome/[.0-9]* (?!Mobile)'`

Chrome for iOS
--------------

The UA in Chrome for iOS is the same as the Mobile Safari user agent, with `CriOS/<ChromeRevision>` instead of `Version/<VersionNum>`.

Here’s an example of the **Chrome** UA on iPhone:

    Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) 
    AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75
    Mobile/14E5239e Safari/602.1

For comparison, the **Mobile Safari** UA:

    Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)
    AppleWebKit/603.1.23 (KHTML, like Gecko)
    Version/10.0 Mobile/14E5239e Safari/602.1

Up to Chrome 84, when the Request Desktop Site feature is enabled, the **Desktop Safari** UA is sent:

    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4)
    AppleWebKit/600.7.12 (KHTML, like Gecko)
    Version/8.0.7 Safari/600.7.12

Starting from Chrome 85, when the Request Desktop Site feature is enabled, the UA is the same as the **Desktop Safari** UA with `CriOS/<ChromeMajorRevision>` being added:

    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5)
    AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85
    Version/11.1.1 Safari/605.1.15

WebView on Android
------------------

The Android 4.4 (KitKat) [Chromium-based WebView](/docs/multidevice/webview/) adds **Chrome/\_version\_** to the user agent string.

Old WebView UA:

    Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP)
    AppleWebKit/534.30 (KHTML, like Gecko)
    Version/4.0 Safari/534.30

**WebView UA in KitKat to Lollipop**

    Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) 
    AppleWebKit/537.36 (KHTML, like Gecko) 
    Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36

If you’re attempting to differentiate between the WebView and Chrome for Android, you should look for the presence of the **Version/\_X.X\_** string in the WebView user-agent string. Don’t rely on the specific Chrome version number (for example, 30.0.0.0) as the version numbers changes with each release.

**WebView UA in Lollipop and Above**

In the newer versions of WebView, you can differentiate the WebView by looking for the wv field as highlighted below.

    Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv)
    AppleWebKit/537.36 (KHTML, like Gecko) 
    Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36
