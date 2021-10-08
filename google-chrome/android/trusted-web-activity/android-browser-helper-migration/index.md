2020-01-10

We have released version [1.0.0](https://github.com/GoogleChrome/android-browser-helper/releases/tag/1.0.0) of, [android-browser-helper](https://github.com/GoogleChrome/android-browser-helper), a new Android Library for [Trusted Web Activity](/docs/android/trusted-web-activity/) which, besides being built on top of the modern [Android JetPack](https://developer.android.com/jetpack/) libraries, makes it easier for developers to use Trusted Web Activity to build their Android applications.

**android-browser-helper is now the recommended library to build applications that use Trusted Web Activity.**

The library is hosted on the official [Google Maven repository](https://maven.google.com/), which works out of the box in Android Projects, and is also compatible with AndroidX, which was a common [issue](https://bugs.chromium.org/p/chromium/issues/detail?id=983378#c4) with the previous library.

More features and development experience improvements will be added this library. This is a short list of what has already been added:

-   Handles opening the content in a browser that supports Trusted Web Activities and, if one is not installed, implements a fallback strategy.
-   Makes the fallback strategy customizable, so developers can customize how their application behaves when a browser the supports Trusted Web Activities is not installed. The [twa-webview-fallback](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos/twa-webview-fallback) demo shows how to use a fallback strategy that uses the [Android WebView](https://developer.android.com/guide/webapps/webview), for example.
-   Makes configuring Trusted Web Actitivities that work with multiple origins easier, as illustrated on the twa-multi-domain\][4](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos/twa-multi-domain) demo.

The library can be added to Android application by using the following dependency to the appllication `build.gradle`:

    dependencies {
        //...
        implementation 'com.google.androidbrowserhelper:androidbrowserhelper:2.2.0'
    }

Migrating from the custom-tabs-client
-------------------------------------

Developers who were using the previous [`custom-tabs-client`](https://jitpack.io/#GoogleChrome/custom-tabs-client) will have to implement a few changes in their application, when migrating to `android-browser-helper`.

Fortunately, besides replacing using the old library with the new library, those changes mainly involve changing searching and replacing a few strings throughout `AndroidManifest.xml`.

Here’s a summary of the names changed:

<table style="width:99%;"><colgroup><col style="width: 51%" /><col style="width: 48%" /></colgroup><thead><tr class="header"><th>Name on custom-tabs-client (Old Library)</th><th>Name on android-browser-helper (New Library)</th></tr></thead><tbody><tr class="odd"><td>android.support.customtabs.trusted.LauncherActivity</td><td>com.google.androidbrowserhelper.trusted.LauncherActivity</td></tr><tr class="even"><td>android.support.v4.content.FileProvider</td><td>androidx.core.content.FileProvider</td></tr><tr class="odd"><td>android.support.customtabs.trusted.TrustedWebActivityService</td><td>com.google.androidbrowserhelper.trusted.DelegationService</td></tr></tbody></table>

The [svgomg-twa demo](https://github.com/GoogleChromeLabs/svgomg-twa) has been updated to use android-browser-helper. this [diff](https://github.com/GoogleChromeLabs/svgomg-twa/pull/76/files) shows all the changes required when migrating an existing project using `custom-tabs-client` to `android-browser-helper`.

Are we missing anything?
------------------------

android-browser-helper has the goal of simplifying the development of applications using Trusted Web Activities. The library will continue to evolve as Trusted Web Activity get more features.

If you are missing a feature in Trusted Web Activities, think of ways that android-browser-helper could make make the development work simpler, or have a question on how to use the library, make sure to pop by the [GitHub repository](https://github.com/GoogleChrome/android-browser-helper) and file an [issue](https://github.com/GoogleChrome/android-browser-helper/issues).

Feedback {: \#feedback .hide-from-toc }
---------------------------------------
