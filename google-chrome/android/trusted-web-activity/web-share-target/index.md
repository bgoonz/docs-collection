2020-11-10

[Web Share Target](https://web.dev/web-share-target/) enables PWAs to receive shared content from other applications installed on the device. This feature can be used, for instance, by applications such as image editors to receive an image from a camera app, or a social network to receive an image or a video for sharing.

Starting with Chrome 86, Web Share Target is now also available to applications using [Trusted Web Activity](/docs/android/trusted-web-activity/). While the PWA should work out of the box, a few changes are required to the Android Application.

This article assumes the developer is familiar with Trusted Web Activities. Readers who are new to the technology can get started with the [Integration Guide](/docs/android/trusted-web-activity/integration-guide).

Along the same lines, a full explanation of the Web Share Target implementation in a PWA is outside scope and developers can find more information in [this article](https://web.dev/web-share-target/).

The demo application at <https://scrapbook-pwa.web.app/> will be used as the PWA for this article, and its source code is available on [Github](https://github.com/GoogleChrome/samples/tree/gh-pages/web-share), and the Android Application is based on the [basic Trusted Web Activity demo](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos/twa-basic).

Add Web Share Target to the Android app
---------------------------------------

In order to modify an existing Trusted Web Activity based application to implement Web Share Target, modifications to three different files are required:

### build.gradle

The [android-browser-helper](https://github.com/GoogleChrome/android-browser-helper) library has been updated with support for Web Share Target. As a first step, update the application to use a version that is higher or equal to 2.0.1.

    dependencies {
        ...
        implementation 'com.google.androidbrowserhelper:androidbrowserhelper:2.2.0'
    }

### res/strings.xml

The application needs to tell the Trusted Web Activity the details of the sharing it supports receiving, such as which Urls to open, the method to be used, and mime-types supported.

This is done via a JSON, made available to the Trusted Web Activity with a string resource. The fields are the same as the `share_target` field available in the Web Manifest and can be added to a string inside `strings.xml`, almost as-is, with two important notes:

1.  The value of the action attribute must be the full Url, including the origin.
2.  Double quotes must be escaped, so each `"` becomes `\"`.

This is how the `share_target` section of <https://scrapbook-pwa.web.app/manifest.json> looks like:

    {
      ...
      "share_target": {
        "action": "/_share-target",
        "enctype": "multipart/form-data",
        "method": "POST",
        "params": {
          "files": [{
            "name": "media",
            "accept": [
              "audio/*",
              "image/*",
              "video/*"
            ]
          }]
        }
      },
      ...
    }

And the new string element will look like the following:

    <string name="share_target">
    {
        \"action\": \"https://twa-web-scrapbook.web.app/_share-target\",
        \"method\": \"POST\",
        \"enctype\": \"multipart/form-data\",
        \"params\": {
          \"files\": [{
              \"name\": \"media\",
              \"accept\": [\"image/*\", \"audio/*\", \"video/*\"]
          }]
        }
    }
    </string>

### AndroidManifest.xml

A couple of changes are required on the Android Manifest. First we need to ensure that the `DelegationService` is declared, exported and enabled.

Developers who built their application based on the basic demo will already have the service included and the markup should be inside the application tag and look like the following:

    <service
        android:name="com.google.androidbrowserhelper.trusted.DelegationService"
        android:enabled="true"
        android:exported="true">

        <intent-filter>
            <action android:name="android.support.customtabs.trusted.TRUSTED_WEB_ACTIVITY_SERVICE"/>
            <category android:name="android.intent.category.DEFAULT"/>
        </intent-filter>
    </service>

Finally, two new items need to be added to the LauncherActivity activity tag: - A `meta-data` tag that references the JSON defined in strings.xml. - An `intent-filter` that declares which mime-types the application is able to handle to other apps on the device.

    <meta-data
        android:name="android.support.customtabs.trusted.METADATA_SHARE_TARGET"
        android:resource="@string/share_target"/>

    <intent-filter>
        <action android:name="android.intent.action.SEND" />
        <action android:name="android.intent.action.SEND_MULTIPLE" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:mimeType="audio/*" />
        <data android:mimeType="image/*" />
        <data android:mimeType="video/*" />
    </intent-filter>

As can be seen in the markup above, a `data` element should be added for each `mime-type` declared in the `share_target` JSON.

Conclusion
----------

The Web Share Target integration enables PWAs inside a Trusted Web Activity to be more deeply integrated with other applications installed on an Android device.

As described in the steps above, the additional markup needed to add support for the API in an existing Android app that uses Trusted Web Activity is made simpler by android-browser-helper.

Check out the [Web Share Target article](https://web.dev/web-share-target/) to learn more using the API on a PWA and the [Web Share API](https://web.dev/web-share/) to learn how to share content from the Progressive Web App.

Troubleshooting
---------------

**My application doesn’t show as an option when I try to share a file from another application.**

When the application doesn’t show as an option, this indicates that the `intent-filter` is incorrect. Double check the `intent-filter` markup, ensure it contains the correct actions, category, and `mime-types` handled by the application.

**My application shows as an option, the PWA is started, but the data is not shared.**

There are a few things that can cause this. This is a checklist of things to look at:

-   Ensure that the Digital Asset Links validation is successful.
-   Check the JSON inside strings.xml for correctness.
