2020-02-04

A complete example is available on [the GitHub sample application](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos/custom-tabs-example-app). It contains re-usable classes to customize the UI, connect to the background service, and handle the lifecycle of both the application and the custom tab activity.

If you follow the guidance from this page, you will be able to create a great integration.

The first step for a Custom Tabs integration is adding the [AndroidX Browser Library](https://developer.android.com/jetpack/androidx/releases/browser#declaring_dependencies) to your project. Open the `app/build.gradle` file and add the browser library to the dependencies section.

    dependencies {
        ...
        implementation "androidx.browser:browser:1.3.0"
    }

Once the Browser Library is added to your project there are two sets of possible customizations:

- Customizing the UI and interaction with the custom tabs.
- Making the page load faster, and keeping the application alive.

The UI Customizations are done by using the [`CustomTabsIntent`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent) and the [`CustomTabsIntent.Builder`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent.Builder) classes; the performance improvements are achieved by using the [`CustomTabsClient`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient) to connect to the Custom Tabs service, warm-up the browser and let it know which urls will be opened.

## Opening a Custom Tab

A [`CustomTabsIntent.Builder`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent.Builder) can be used to configure a Custom Tab. Once ready, call [`CustomTabsIntent.Builder.build`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent.Builder#build()>) to create a [`CustomTabsIntent`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent) and launch the desired Url with [`CustomTabsIntent.launchUrl`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent#launchUrl(android.content.Context,%20android.net.Uri)>).

    String url = ¨https://paul.kinlan.me/¨;
    CustomTabsIntent.Builder builder = new CustomTabsIntent.Builder();
    CustomTabsIntent customTabsIntent = builder.build();
    customTabsIntent.launchUrl(this, Uri.parse(url));

## Configure the color of the address bar

One of the most important (and simplest to implement) aspects of Custom Tabs is the ability for you to change the color of the address bar to be consistent with your app’s theme.

The snippet below changes the background color for the address bar. colorInt is an int that specifies a [`Color`](https://developer.android.com/reference/android/graphics/Color).

    int colorInt = Color.parseColor("#FF0000"); //red
    CustomTabColorSchemeParams defaultColors = new CustomTabColorSchemeParams.Builder()
        .setToolbarColor(colorInt)
        .build();
    intentBuilder.setDefaultColorSchemeParams(defaultColors);

## Configure a custom action button

    builder.setActionButton(icon, description, pendingIntent, tint);

{% Img src=“image/Vww75TFpThOgTNuASFM6UYfBAp53/wBbdC6mX8P6moJRJekjL.png”, alt=“Screenshot of the Action Button in the Tumblr app”, width=“800”, height=“1422” %}

As the developer of your app, you have full control over the Action Button that is presented to your users inside the browser tab.

In most cases, this will be a primary action such as Share, or another common activity that your users will perform.

The Action Button is represented as a Bundle with an icon of the action button and a [`PendingIntent`](https://developer.android.com/reference/android/app/PendingIntent) that will be called by the browser when your user hits the action button. The icon is currenlty 24dp in height and 24-48 dp in width.

It can be customized by calling [`CustomTabsIntentBuilder#setActionButton`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent.Builder#setActionButton(android.graphics.Bitmap,%20java.lang.String,%20android.app.PendingIntent,%20boolean)>):

- `icon` is a [`Bitmap`](https://developer.android.com/reference/android/graphics/Bitmap) to be used as the [image source](<https://developer.android.com/reference/android/widget/ImageView#setImageDrawable(android.graphics.drawable.Drawable)>) for the action button.
- `description` is a [`String`](https://developer.android.com/reference/java/lang/String) be used as an accessible description for the button.
- `pendingIntent` is a [`PendingIntent`](https://developer.android.com/reference/android/app/PendingIntent) to launch when the action button or menu item was tapped. The browser will be calling [`PendingIntent#send`](<https://developer.android.com/reference/android/app/PendingIntent#send(android.content.Context,%20int,%20android.content.Intent)>) on taps after adding the url as data. The client app can call [`Intent#getDataString`](<https://developer.android.com/reference/android/content/Intent#getDataString()>) to get the url.
- `tint` is a [boolean](https://developer.android.com/reference/java/lang/Boolean) that defines if the Action Button should be tinted.

## Configure a custom menu

    builder.addMenuItem(menuItemTitle, menuItemPendingIntent);

{% Img src=“image/Vww75TFpThOgTNuASFM6UYfBAp53/7vKsCO6qBKcuOeYk1tnv.png”, alt=“Screenshot of the menu on the Twitter app”, width=“800”, height=“1422” %}

The browser has a comprehensive menu of actions that users will perform frequently inside a browser, however they may not be relevant to your application context.

Custom Tabs will have a set of default actions provided by the browser. Those actions can include items like “Forward”, “Page Info”, “Refresh”, “Find in Page” or “Open in Browser”.

As the developer, you can add and customize up to five menu items that will appear between the icon row and foot items.

A menu item is added by calling [`CustomTabsIntent.Builder#addMenuItem`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent.Builder#addMenuItem(java.lang.String,%20android.app.PendingIntent)>) with title and a [`PendingIntent`](https://developer.android.com/reference/android/app/PendingIntent) that browser will call on your behalf when the user taps the item are passed as parameters.

## Configure custom enter and exit animations

Many Android applications use custom View Entrance and Exit animations when transitioning between Activities on Android. Custom Tabs is no different, you can change the entrance and exit (when the user presses Back) animations to keep them consistent with the rest of your application.

    builder.setStartAnimations(this, R.anim.slide_in_right, R.anim.slide_out_left);
    builder.setExitAnimations(this, R.anim.slide_in_left, R.anim.slide_out_right);

## Warm up the browser to make pages load faster

By default, when [`CustomTabsIntent#launchUrl`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent#launchUrl(android.content.Context,%20android.net.Uri)>) is called, it will spin up the browser and launch the URL. This can take up precious time and impact on the perception of smoothness.

We believe that users demand a near instantaneous experience, so we have provided a Service that your app can connect to and tell the browser and its native components to warm up. Custom Tabs also provide the ability for you, the developer to tell the browser the likely set of web pages the user will visit. Browsers will then be able to perform:

- DNS pre-resolution of the main domain
- DNS pre-resolution of the most likely sub-resources
- Pre-connection to the destination including HTTPS/TLS negotiation.

The process for warming up the browser is as follows:

- Use [`CustomTabsClient#bindCustomTabsService`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#bindCustomTabsService(android.content.Context,%20java.lang.String,%20androidx.browser.customtabs.CustomTabsServiceConnection)>) to connect to the service.
- Once the service is connected, call [`CustomTabsClient#warmup`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#warmup(long)>) to start the browser behind the scenes.
- Call [`CustomTabsClient#newSession`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#newSession(androidx.browser.customtabs.CustomTabsCallback)>) to create a new session. This session is used for all requests to the API.
- Optionally, attach a [`CustomTabsCallback`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsCallback) as a parameter when creating a new session, so that you know a page was loaded.
- Tell the browser which pages the user is likely to load with [`CustomTabsSession#mayLaunchUrl`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsSession)
- Call the [`CustomTabsIntent.Builder`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsIntent.Builder) constructor passing the created [`CustomTabsSession`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsSession) as a parameter.

## Connect to the Custom Tabs Service

The [`CustomTabsClient#bindCustomTabsService`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#bindCustomTabsService(android.content.Context,%20java.lang.String,%20androidx.browser.customtabs.CustomTabsServiceConnection)>) method takes away the complexity of connecting to the Custom Tabs service.

Create a class that extends [`CustomTabsServiceConnection`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsServiceConnection) and use [`onCustomTabsServiceConnected`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsServiceConnection#onCustomTabsServiceConnected(android.content.ComponentName,%20androidx.browser.customtabs.CustomTabsClient)>) to get an instance of the [`CustomTabsClient`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient). This instance will be needed on the next steps.

    // Package name for the Chrome channel the client wants to connect to. This
    // depends on the channel name.
    // Stable = com.android.chrome
    // Beta = com.chrome.beta
    // Dev = com.chrome.dev
    public static final String CUSTOM_TAB_PACKAGE_NAME = "com.android.chrome";  // Change when in stable

    CustomTabsServiceConnection connection = new CustomTabsServiceConnection() {
        @Override
        public void onCustomTabsServiceConnected(ComponentName name, CustomTabsClient client) {
            mCustomTabsClient = client;
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {

        }
    };
    boolean ok = CustomTabsClient.bindCustomTabsService(this, mPackageNameToBind, connection);

## Warm up the Browser Process

[`boolean warmup(long flags)`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#warmup(long)>)

Warms up the browser process and loads the native libraries. Warmup is asynchronous, the return value indicates whether the request has been accepted. Multiple successful calls will also return true.

Returns `true` if successful.

## Create a new tab session

[`boolean newSession(CustomTabsCallback callback)`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#newSession(androidx.browser.customtabs.CustomTabsCallback)>)

Session is used in subsequent calls to link mayLaunchUrl call, the CustomTabsIntent and the tab generated to each other. The callback provided here is associated with the created session. Any updates for the created session (see Custom Tabs Callback below) is also received through this callback. Returns whether a session was created successfully. Multiple calls with the same CustomTabsCallback or a null value will return false.

## Tell the browser what URLs the user is likely to open

[`boolean mayLaunchUrl(Uri url, Bundle extras, List<Bundle> otherLikelyBundles)`](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsSession)

This CustomTabsSession method tells the browser of a likely future navigation to a URL. The method [`warmup()`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsClient#warmup(long)>) should be called first as a best practice. The most likely URL has to be specified first. Optionally, a list of other likely URLs can be provided. They are treated as less likely than the first one, and have to be sorted in decreasing priority order. These additional URLs may be ignored. All previous calls to this method will be deprioritized. Returns whether the operation completed successfully.

## Custom Tabs Connection Callback

[`void onNavigationEvent(int navigationEvent, Bundle extras)`](<https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsCallback#onNavigationEvent(int,%20android.os.Bundle)>)

Will be called when a navigation event happens in the custom tab. The `navigationEvent int` is one of 6 values that defines the state of the page is in. See below for more information.

    /**
    * Sent when the tab has started loading a page.
    */
    public static final int NAVIGATION_STARTED = 1;

    /**
    * Sent when the tab has finished loading a page.
    */
    public static final int NAVIGATION_FINISHED = 2;

    /**
    * Sent when the tab couldn't finish loading due to a failure.
    */
    public static final int NAVIGATION_FAILED = 3;

    /**
    * Sent when loading was aborted by a user action before it finishes like clicking on a link
    * or refreshing the page.
    */
    public static final int NAVIGATION_ABORTED = 4;

    /**
    * Sent when the tab becomes visible.
    */
    public static final int TAB_SHOWN = 5;

    /**
    * Sent when the tab becomes hidden.
    */
    public static final int TAB_HIDDEN = 6;

## What happens if the user doesn’t have a browser that supports Custom Tabs installed?

Custom Tabs is supported by most Android browsers. Nevertheless, since it uses an `ACTION_VIEW` Intent with key Extras to customize the UI it will open in the system browser, or the user’s default browser if Custom Tabs is not supported.

If the user has a browser that supports Custom Tab installed and it is the default browser, it will automatically pick up the EXTRAS and present a customized UI.

## How can I check whether the Android device has a browser that supports Custom Tab?

It is possible to use the [`PackageManager`](https://developer.android.com/reference/android/content/pm/PackageManager) to query the Android device for applications that can handle Custom Tabs. We query for applications that are able to handle `http` Intents, then check if those applications also declare support for the Custom Tabs Service:

    /**
    * Returns a list of packages that support Custom Tabs.
    */
    public static ArrayList<ResolveInfo> getCustomTabsPackages(Context context) {
        PackageManager pm = context.getPackageManager();
        // Get default VIEW intent handler.
        Intent activityIntent = new Intent()
            .setAction(Intent.ACTION_VIEW)
            .addCategory(Intent.CATEGORY_BROWSABLE)
            .setData(Uri.fromParts("http", "", null));

        // Get all apps that can handle VIEW intents.
        List<ResolveInfo> resolvedActivityList = pm.queryIntentActivities(activityIntent, 0);
        ArrayList<ResolveInfo> packagesSupportingCustomTabs = new ArrayList<>();
        for (ResolveInfo info : resolvedActivityList) {
            Intent serviceIntent = new Intent();
            serviceIntent.setAction(ACTION_CUSTOM_TABS_CONNECTION);
            serviceIntent.setPackage(info.activityInfo.packageName);
            // Check if this package also resolves the Custom Tabs service.
            if (pm.resolveService(serviceIntent, 0) != null) {
                packagesSupportingCustomTabs.add(info);
            }
        }
        return packagesSupportingCustomTabs;
    }

Android 11 has introduced [package visiblity changes](https://developer.android.com/preview/privacy/package-visibility). If your Android app is targeting API level 30 or above, adding a `queries` section to `AndroidManifest.xml` is needed, otherwise the code snippet above won’t return results:

    <queries>
        <intent>
            <action android:name=
                "android.support.customtabs.action.CustomTabsService" />
        </intent>
    </queries>
