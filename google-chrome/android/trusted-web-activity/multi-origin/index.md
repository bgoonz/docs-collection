2020-01-17

{% Aside %} If you are new to Trusted Web Activities, you may want to read the [Trusted Web Activity Quick Start Guide](/docs/android/trusted-web-activity/quick-start) or the [Introduction to Trusted Web Activities](/docs/android/trusted-web-activity) before reading this documentation. {% endAside%}

**Trusted Web Activities** are a new way to integrate your web-app content such as your PWA with your Android app using a protocol based on Custom Tabs.

{% Img src=“image/Vww75TFpThOgTNuASFM6UYfBAp53/UezlUQRyJ17S0S1KPGO0.gif”, alt=“ff-origin navigation”, width=“200”, height=“411” %}

A Trusted Web Activity needs the origins being opened to be validated using [Digital Asset Links](https://developers.google.com/digital-asset-links), in order to show the content in full-screen.

When a user navigates off the validated origin, Custom Tab UI is shown. The URL bar in the Custom Tab tells the users they are now navigating in a domain outside the application, while also providing the user with an X button that allows them to quickly return to the validated origin.

But it is also common for Web Apps to create experiences that span multiple origins - An example would be a shopping application with the main experience at *www.example.com*, while the checkout flow is hosted at _checkout.example.com_.

In cases like that, showing the Custom Tabs is undesirable, not only because the user is in the same application, but also because the top bar could make the user think they left the application and abandon the checkout.

Trusted Web Activities allow developers to validate multiple origins, and the user will remain in full-screen when navigating across those origins. As with the main domain, the developer must be able to control each validated origin.

## Setting up validation for multiple origins

As in the main origin, the validation is achieved via Digital Asset Links and each domain to be validated needs to have its own assetlinks.json file.

### Add an assetlinks file to each origin

In our example with *www.example.com* and _checkout.example.com_, we would have:

- `https://www.example.com/.well-known/assetlinks.json`
- `https://checkout.example.com/.well-known/assetlinks.json`

Since each domain is getting connected to the same Android application, the `assetlinks.json` files look exactly the same.

Assuming the package name for the Android application is `com.example.twa`, both `assetlink.json` files would contain something similar to the following:

    [{
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
      "namespace": "android_app",
      "package_name": "com.example",
       "sha256_cert_fingerprints": ["..."]}
    }]

Note: An application using Trusted Web Activities can have any number of validated domains, as long as Digital Asset Links are implemented for all of them.

### Add multiple origins to the Android Application

On the Android application, the `asset_statements` declaration needs to be updated to contain all origins that need to be validated:

    <string name="asset_statements">
    [{
        \"relation\": [\"delegate_permission/common.handle_all_urls\"],
        \"target\": {
            \"namespace\": \"web\",
            \"site\": \"https://www.example.com\"
        }
    }],
    [{
        \"relation\": [\"delegate_permission/common.handle_all_urls\"],
        \"target\": {
            \"namespace\": \"web\",
            \"site\": \"https://checkout.example.com\"
        }
    }],
    </string>

Note: Applications based on the [svgomg-twa demo](https://github.com/GoogleChromeLabs/svgomg-twa) application or [bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) have the `asset_statements` declaration inside `app/build.gradle`. Even though the location of the declaration is different, the JSON content is the same.

## Add extra origins to the LauncherActivity

### Using the default LauncherActivity

The [`LauncherActivity`](https://github.com/GoogleChrome/android-browser-helper/blob/master/androidbrowserhelper/src/main/java/com/google/androidbrowserhelper/trusted/LauncherActivity.java) that is part of the [`android-browser-helper`](https://github.com/GoogleChrome/android-browser-helper/) support library provides a way to add multiple origins to be validated by configuring the Android project.

First, add a `string-array` element to the `res/values/strings.xml` file. Each extra URL to be validated will be inside an `item` sub-element:

    ...
    <string-array name="additional_trusted_origins">
        <item>https://www.google.com</item>
    </string-array>
    ...

Next, add a new `meta-data` tag inside the existing activity element that references the `LauncherActivity`, inside `AndroidManifest.xml`:

    ...
    <activity android:name="com.google.androidbrowserhelper.trusted.LauncherActivity"
        android:label="@string/app_name">


        <meta-data
            android:name="android.support.customtabs.trusted.ADDITIONAL_TRUSTED_ORIGINS"
            android:resource="@array/additional_trusted_origins" />


        ...
    </activity>
    ...

## Using a custom LauncherActivity

When using custom code to launch a Trusted Web Activity, adding extra origins can be achieved by calling `setAdditionalTrustedOrigins` when building the Intent to launch the Trusted Web Activity:

    public void launcherWithMultipleOrigins(View view) {
      List<String> origins = Arrays.asList(
          "https://checkout.example.com/"
      );


      TrustedWebActivityIntentBuilder builder = new TrustedWebActivityIntentBuilder(LAUNCH_URI)
          .setAdditionalTrustedOrigins(origins);


      new TwaLauncher(this).launch(builder, null, null);
    }

## Conclusion

With those steps, the Trusted Web Activity is now ready to support multiple origins. android-browser-helper has a [sample application](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos/twa-multi-domain) for multi origin Trusted Web Activities. Make sure to check it.

## Troubleshooting

Setting up Digital Asset Links has a few moving parts. If the application is still showing the Custom Tabs bar on the top, it’s likely that something is wrong with the configuration.

The [Trusted Web Activity Quick Start Guide](/docs/android/trusted-web-activity/quick-start) has a great [troubleshooting section](/docs/android/trusted-web-activity/quick-start#troubleshooting) on how to debug Digital Asset Link issues.

There’s also the amazing [Peter’s Asset Link Tool](https://play.google.com/store/apps/details?id=dev.conn.assetlinkstool), which helps debuggint Digital Asset Links on applications installed on the device..
