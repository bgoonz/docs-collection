2014-04-15

{% Aside ‘caution’ %}

**Important:** Chrome will be removing support for Chrome Apps on all platforms. Chrome browser and the Chrome Web Store will continue to support extensions. [**Read the announcement**](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html) and learn more about [**migrating your app**](/apps/migration).

{% endAside %}

***The toolchain for running Chrome Apps on mobile is in early developer preview. Feel free to give us your feedback using the [Github issue tracker](https://github.com/MobileChromeApps/mobile-chrome-apps/issues), our [Chrome Apps developer forum](http://groups.google.com/a/chromium.org/group/chromium-apps/topics), on [Stack Overflow](http://stackoverflow.com/questions/tagged/google-chrome-app), or our [G+ Developers page](https://plus.google.com/+GoogleChromeDevelopers/).***

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/FNYKWfrpCKjWdrBh45zK.jpg”, alt=“A Chrome App running on both desktop and mobile”, height=“459”, width=“800” %}

Overview {: \#overview }
------------------------

You can run your [Chrome Apps](/apps) on Android and iOS via a [toolchain](https://github.com/MobileChromeApps/mobile-chrome-apps) based on [Apache Cordova](http://cordova.apache.org), an open source mobile development framework for building mobile apps with native capabilities using HTML, CSS and JavaScript.

Apache Cordova wraps your application’s web code with a native application shell and allows you to distribute your hybrid web app via Google Play and/or the Apple App Store. To use Apache Cordova with an existing Chrome App, you use the `cca` (**c** ordova **c** hrome **a** pp) command-line tool.

Additional resources {: \#additional-resources }
------------------------------------------------

-   There are a few special considerations that you should keep in mind when developing with Cordova; we’ve listed them in the [considerations section](#special-considerations-when-developing-with-cordova).
-   To view which Chrome APIs are supported on mobile, visit the [API Status](https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/docs/APIStatus.md) page.
-   To preview your Chrome App on an Android device without the toolchain, use the [Chrome Apps Developer Tool (ADT)](#chrome-apps-developer-tool-adt-for-android).

Let’s get started.

Step 1: Install your development tools {: \#step-1-install-your-development-tools }
-----------------------------------------------------------------------------------

The Chrome Apps for mobile toolchain can target iOS 6+ and Android 4.x+.

### Development dependencies for all platforms {: \#development-dependencies-for-all-platforms }

-   [Node.js](http://nodejs.org) version 0.10.0 (or higher) with `npm` is required:

    -   **Windows**: Install Node.js using the installation executables downloadable from [nodejs.org](http://nodejs.org).
    -   **OS X** or **Linux**: Installation executables are also available from [nodejs.org](http://nodejs.org). If you wish to avoid the need for root access, it may be more convenient to install via [nvm](https://github.com/creationix/nvm). Example:

            curl https://raw.github.com/creationix/nvm/master/install.sh | sh
            source ~/.bash_profile || source ~/.profile || source ~/.bashrc
            nvm install 0.10
            nvm alias default 0.10

### Targeting Android {: \#targeting-android }

When developing an application for Android, you will also need to install:

-   [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 7 (or higher)
-   [Android SDK](http://developer.android.com/sdk/index.html) version 4.4.2 (or higher)
    -   Install the Android SDK and Android Developer Tools which come bundled with Android ADT Bundle.
    -   Add `sdk/tools` and `sdk/platform-tools` [to your PATH](https://www.google.com/search?q=how+to+add+sdktools+to+path) environment variable.
    -   **OS X**: The version of Eclipse that comes with the Android SDK requires JRE 6. If opening Eclipse.app does not prompt you to install JRE 6, get it through the Mac App Store.
    -   **Linux**: The Android SDK requires 32 bit support libraries. On Ubuntu, get these via: `apt-get install ia32-libs`.
-   [Apache Ant](http://ant.apache.org/bindownload.cgi)
    -   Add `apache-ant-x.x.x/bin` [to your PATH](https://www.google.com/search?q=how+to+add+sdktools+to+path) environment variable.

### Targeting iOS {: \#targeting-ios }

Please note that iOS development can only be done on OS X. In addition, you will need to install:

-   [Xcode](https://developer.apple.com/xcode/) 5 (or higher) which includes the Xcode command line tools
-   [ios-deploy](https://github.com/phonegap/ios-deploy) (needed to deploy to an iOS device)
    -   `npm install -g ios-deploy`
-   [ios-sim](https://github.com/phonegap/ios-sim) (needed to deploy to iOS Simulator)
    -   `npm install -g ios-sim`
-   Optional: Register as an iOS developer
    -   This is necessary for testing on real devices and for submitting to the app store.
    -   You can skip registration if you only plan to use the iPhone/iPad simulators.

### Install the `cca` command-line tool {: \#install-the-cca-command-line-tool }

Install `cca` via npm:

    npm install -g cca

To update the toolchain later with new releases: `npm update -g cca`.

Confirm that everything is installed correctly by running this command from the command line:

    cca checkenv

You will see the version number of `cca` outputted and confirmation about your Android or iOS SDK installation.

Step 2: Create a project {: \#step-2-create-a-project }
-------------------------------------------------------

To create a default mobile Chrome App project in a directory named `YourApp` run:

    cca create YourApp

If you have already built a Chrome App and wish to port it to a mobile platform, you can use the `--link-to` flag to create a *symlink* to it:

    cca create YourApp --link-to=path/to/manifest.json

If you instead wish to *copy* your existing Chrome App files, you can use the `--copy-from` flag:

    cca create YourApp --copy-from=path/to/manifest.json

Don’t have your own Chrome App yet? Try one of the many [sample Chrome Apps with mobile support](https://github.com/GoogleChrome/chrome-app-samples#mobile-support).

Step 3: Develop {: \#step-3-develop }
-------------------------------------

You can build and run your application in two ways:

-   Option A: From the command line, using the `cca` tool, or
-   Option B: By using an IDE, like Eclipse or Xcode. The use of an IDE is entirely optional (but often useful) to assist with launching, configuring, and debugging your hybrid mobile application.

### Option A: Develop and build using the command line {: \#option-a-develop-and-build-using-the-command-line }

From the root of your `cca`-generated project folder:

#### Android

-   To run your app on the Android Emulator: `cca emulate android`
    -   Note: This requires that you’ve set up an emulator. You can run `android avd` to set this up. Download additional emulator images by running `android`. To make the intel images run faster, install [Intel’s HAXM](http://software.intel.com/en-us/articles/intel-hardware-accelerated-execution-manager/).
-   To run your app on a connected Android device: `cca run android`

#### iOS

-   To run your app on the iOS Simulator: `cca emulate ios`
-   To run your app on a connected iOS device: `cca run ios`
    -   Note: This requires that you’ve set up a [Provisioning Profile](http://stackoverflow.com/questions/3362652/what-is-a-provisioning-profile-used-for-when-developing-iphone-applications) for your device.

### Option B: Develop and build using an IDE {: \#option-b-develop-and-build-using-an-ide }

#### Android

1.  In Eclipse, select `File` -&gt; `Import`.
2.  Choose `Android` &gt; `Existing Android Code Into Workspace`.
3.  Import from the path you just created with `cca`.
    -   You should expect to have two projects to import, one of which is `*-CordovaLib`.
4.  Click the Play button to run your app.
    -   You will need to create a Run Configuration (as with all Java applications). You *usually* get prompted for this the first time automatically.
    -   You will need to manage your devices/emulators the first time as well.

#### iOS

1.  Open the project in Xcode by typing the following in a terminal window:

        cd YourApp
        open platforms/ios/*.xcodeproj

2.  Make sure you are building the right target.

    In the top left (beside Run and Stop buttons), there is a dropdown to select target project and device. Ensure that `YourApp` is selected and not `CordovaLib`.

3.  Click the Play button.

### Making changes to your app source code {: \#making-changes-to-your-app-source-code }

Your HTML, CSS, and JavaScript files live within the `www` directory of your cca project folder.

**Important**: After making changes to `www/`, you must run `cca prepare` before deploying your application. If you are running `cca build`, `cca run`, or `cca emulate` from the command line, the prepare step is done automatically. If you are developing using Eclipse/XCode, you must run `cca prepare` manually.

### Debugging {: \#debugging }

You can debug your Chrome App on mobile the same way that you [debug Cordova applications](https://github.com/phonegap/phonegap/wiki/Debugging-in-PhoneGap).

Step 4: Next Steps {: \#step-4-next-steps }
-------------------------------------------

Now that you have a working mobile Chrome App, there are lots of ways to improve the experience on mobile devices.

### Mobile Manifest {: \#mobile-manifest }

There are certain Chrome App settings that only apply to mobile platforms. We have created a `www/manifest.mobile.json` file to contain these, and the specific values are referenced throughout the plugin documentation and this guide.

You should adjust the values here accordingly.

### Icons {: \#icons }

Mobile apps need a few more icon resolutions than desktop Chrome Apps.

For Android, these sizes are needed:

-   36px, 48px, 78px, 96px

For iOS apps, the required sizes differ depending on whether you support [iOS 6](https://developer.apple.com/library/ios/qa/qa1686/_index.html) vs [iOS 7](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/IconMatrix.html). The minimum number of icons required are:

-   **iOS 6**: 57px, 72px, 114px, 144px
-   **iOS 7**: 72px, 120px, 152px

A complete icon list would look like this in your `manifest.json` file:

    "icons": {
      "16": "assets/icons/icon16.png",
      "36": "assets/icons/icon36.png",
      "48": "assets/icons/icon48.png",
      "57": "assets/icons/icon57.png",
      "72": "assets/icons/icon72.png",
      "78": "assets/icons/icon78.png",
      "96": "assets/icons/icon96.png",
      "114": "assets/icons/icon114.png",
      "120": "assets/icons/icon120.png",
      "128": "assets/icons/icon128.png",
      "144": "assets/icons/icon144.png",
      "152": "assets/icons/icon152.png"
    }

The icons will be copied to the appropriate places for each platform every time you run `cca prepare`.

### Splash Screens {: \#splash-screens }

Apps on iOS show a brief splash screen as the app is loading. A set of default Cordova splash screens are included in `platforms/ios/[AppName]/Resources/splash`.

The sizes needed are:

-   320px x 480px + 2x
-   768px x 1024px + 2x (iPad portrait)
-   1024px x 768px + 2x (iPad landscape)
-   640px x 1146px

Splash screen images are not currently modified by `cca`.

Step 5: Publish {: \#step-5-publish }
-------------------------------------

In your project’s `platforms` directory, you have two complete native projects: one for Android, and one for iOS. You can build release versions of these projects and publish them to Google Play or to the iOS App Store.

### Publish to the Play Store {: \#publish-to-the-play-store }

To publish your Android application to the Play Store:

1.  Update the two Android version ids, then run `cca prepare`:

    -   `android:versionName` is set using the `version` key in `www/manifest.json` (this sets the version of your desktop packaged app, too).
    -   `android:versionCode` is set using the `versionCode` key in `www/manifest.mobile.js`.

2.  Edit (or create) `platforms/android/ant.properties` and set the `key.store` and `key.alias` properties (as explained [in the Android developer docs](http://developer.android.com/tools/building/building-cmdline.html#ReleaseMode)).
3.  Build your project:

        ./platforms/android/cordova/build --release

4.  Find your signed .apk located inside `platforms/android/ant-build/`.
5.  Upload your signed application to the [Google Play developer console](https://play.google.com/apps/publish).

### Publish to the iOS App Store {: \#publish-to-the-ios-app-store }

1.  Update the app version by setting the `CFBundleVersion` key in `www/manifest.mobile.js`, then run `cca prepare`.
2.  Open the Xcode project file found under your `platforms/ios` directory:

    open platforms/ios/\*.xcodeproj

3.  Follow Apple’s [App Distribution Guide](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

Special considerations {: \#special-considerations }
----------------------------------------------------

If you’re new to Chrome Apps, the biggest gotcha is that some [web features are disabled](/apps/app_deprecated). However, several of these do currently work within Cordova.

A Chrome App may not work out of the box on mobile. Some common problems with porting to mobile:

-   Layout issues with small screens, especially while in a portrait orientation.
    -   *Suggested fix:* Use [CSS media queries](http://www.html5rocks.com/en/mobile/mobifying/#toc-mediaqueries) to optimize your content for smaller screens.
-   Chrome App window sizes set via [chrome.app.window](/docs/extensions/reference/app_window) will be ignored, instead using the device’s native dimensions.
    -   *Suggested fix:* Remove hard-coded window dimensions; design your app with different sizes in mind.
-   Small buttons and links will be hard to tap with a finger.
    -   *Suggested fix:* Adjust your touch targets to be at least 44 x 44 points.
-   Unexpected behavior when relying on mouse hover which does not exist on touch screens.
    -   *Suggested fix:* In addition to hover, activate UI elements such as dropdowns and tooltips on tap.
-   A 300ms tap delay.
    -   *Suggested fix:* Use the [FastClick by FT Labs](https://github.com/ftlabs/fastclick) JavaScript polyfill.
    -   Read this [HTML5Rocks article](http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away) for some background info.

### Supported Chrome APIs {: \#supported-chrome-apis }

We’ve made many of the core Chrome APIs available to Chrome Apps for Mobile, including:

-   [identity](/docs/extensions/reference/identity) - sign-in users using OAuth2
-   [payments](https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/chrome-cordova/plugins/google.payments/README.md) - sell virtual goods within your mobile app
-   [pushMessaging](/docs/extensions/reference/pushMessaging) - push messages to your app from your server
-   [sockets](/docs/extensions/reference/socket) - send and receive data over the network using TCP and UDP
-   [notifications](/docs/extensions/reference/notifications) (Android only) - send rich notifications from your mobile app
-   [storage](/docs/extensions/reference/storage) - store and retrieve key-value data locally
-   [syncFileSystem](/docs/extensions/reference/syncFileSystem) - store and retrieve files backed by Google Drive
-   [alarms](/docs/extensions/reference/alarms) - run tasks periodically
-   [idle](/docs/extensions/reference/idle) - detect when the machine’s idle state changes
-   [power](/docs/extensions/reference/power) - override the system’s power management features

However, not all Chrome JavaScript APIs are implemented. And not all Chrome Desktop features are available on mobile:

-   no `<webview>` tag
-   no IndexedDB
-   no getUserMedia()
-   no NaCl

You can track progress from our [API Status](https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/docs/APIStatus.md) page.

Chrome Apps Developer Tool {: \#chrome-apps-developer-tool }
------------------------------------------------------------

The Chrome Apps Developer Tool (ADT) for Android is a standalone Android app that allows you to download and run a Chrome App without setting up the development toolchain as described above. Use the Chrome ADT when you want to quickly preview an existing Chrome App (already packaged as a .crx) on your Android device.

The Chrome ADT for Android is currently in a pre-alpha release. To try it out, view the [ChromeADT.apk release notes](https://github.com/MobileChromeApps/harness/releases/) for installation and usage instructions.
