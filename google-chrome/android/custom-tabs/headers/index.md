2020-08-12

HTTP requests contain headers such as User-Agent or Content-Type. Apart from headers attached by browsers, Android apps may add extra headers, like Cookie or Referrer through the [`EXTRA_HEADERS`](https://developer.android.com/reference/android/provider/Browser#EXTRA_HEADERS) Intent extra. For security reasons, Chrome filters some of the extra headers depending on how and where an intent is launched.

[Cross-origin](https://docs.google.com/document/d/1sN6Y31giDbdGj6R4p3QJ20gD1ggBIosae7yrsSZ3Ins/edit#heading=h.ey2vxjsxytw6) requests require an additional layer of security as the client and server are not owned by the same party. This guide discusses launching such requests through Chrome [custom tabs](/docs/android/custom-tabs/), i.e. intents launched from apps that open a URL in the browser tab. Until Chrome 83, developers could add any headers when launching a Custom Tab. From version 83 onward, Chrome started filtering all except [whitelisted](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) cross-origin headers, since non-whitelisted headers posed a security risk. Starting with Chrome 86, it is possible to attach non-whitelisted headers to cross-origin requests, when the server and client are related using a [digital asset link](https://developers.google.com/digital-asset-links/v1/getting-started). This behaviour is summarised in the following table:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th><strong>Chrome version</strong></th><th><strong>CORS headers allowed</strong></th></tr></thead><tbody><tr class="odd"><td>before Chrome 83</td><td>whitelisted, non-whitelisted</td></tr><tr class="even"><td>Chrome 83 to Chrome 85</td><td>whitelisted</td></tr><tr class="odd"><td>from Chrome 86 onwards</td><td>whitelisted, non-whitelisted when a digital asset link is set up</td></tr></tbody></table>

**Table 1.:** Filtering of non-whitelisted CORS headers.

This article shows how to set up a verified connection between the server and client and use that to send whitelisted as well as non-whitelisted http headers. You can skip to [Adding Extra Headers to CustomTab Intents](#adding-extra-headers) for the code.

Background
----------

### Whitelisted vs. Non-whitelisted CORS Request Headers

[Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) allows a web application from one origin to request resources of a different origin. The list of **CORS-whitelisted** headers is maintained in the [HTML Standard](https://fetch.spec.whatwg.org/#cors-safelisted-request-header). Example whitelisted headers are shown in the next table:

<table><thead><tr class="header"><th><strong>Header</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td>accept-language</td><td>advertises natural languages the client understands</td></tr><tr class="even"><td>content-language</td><td>describes language intended for the current audience</td></tr><tr class="odd"><td>content-type</td><td>indicates the media type of the resource</td></tr></tbody></table>

**Table 2.:** Example whitelisted CORS headers.

The whitelisted headers are considered safe because they don’t contain sensitive user information and are unlikely to cause the server to perform potentially damaging operations.

Examples of non-whitelisted headers are shown in the following table:

<table><thead><tr class="header"><th><strong>Header</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td>bearer-token</td><td>authenticates client at a server</td></tr><tr class="even"><td>origin</td><td>indicates origin of request</td></tr><tr class="odd"><td>cookie</td><td>contains cookies set by server</td></tr></tbody></table>

**Table 3.:** Example non-whitelisted CORS headers.

Attaching non-whitelisted headers to CORS requests is discouraged by the HTML standard and servers assume that cross-origin requests contain only whitelisted headers. Sending non-whitelisted headers from cross-origin domains would allow malicious third-party apps to craft headers that misuse user cookies that Chrome (or another browser) stores and attaches to requests. The cookies could authenticate malicious server transactions that would otherwise not be possible.

### Attaching CORS whitelisted headers to Custom Tabs requests

[Custom Tabs](/docs/android/custom-tabs/) are a special way of launching web pages in a customised browser tab. Custom Tab intents can be created using `CustomTabsIntent.Builder()`. You can also attach headers to these intents using a `Bundle` with the [`Borwser.EXTRA_HEADERS` flag](https://developer.android.com/reference/android/provider/Browser#EXTRA_HEADERS):

    CustomTabsIntent intent = new CustomTabsIntent.Builder(session).build();

    Bundle headers = new Bundle();
    headers.putString("bearer-token", "Some token");
    headers.putString("redirect-url", "Some redirect url");   
    intent.intent.putExtra(Browser.EXTRA_HEADERS, headers);

    intent.launchUrl(Activity.this, Uri.parse("http://www.google.com"));

We can always attach whitelisted headers to custom tabs CORS requests. However, Chrome filters non-whitelisted headers by default. Although other browsers may have different behaviour, developers should expect non-whitelisted headers to be blocked in general.

The supported way of including non-whitelisted headers in custom tabs is to first verify the cross-origin connection using a digital access link. The next section shows how to set these up and launch a Custom Tabs intent with the required headers.

Adding Extra Headers to CustomTab Intents {: \#adding-extra-headers }
---------------------------------------------------------------------

### Set up digital asset links

To allow non-whitelisted headers to be passed through custom tab intents, it is necessary to set up a digital asset link between the android and web application that verifies that the author owns both applications.

Follow the [official guide](https://developers.google.com/digital-asset-links/v1/getting-started) to set up a digital asset link. For the link relation use “delegate\_permission/common.use\_as\_origin”\` which indicates that both apps belong to the same origin once the link is verified.

### Create Custom Tab Intent with Extra Headers

There are multiple ways for creating a [custom tabs intent](/docs/android/custom-tabs/). You can use the builder available in androidX by adding the library to the build dependencies:

    implementation 'androidx.browser:browser:1.2.0'

Build the intent and add extra headers:

    CustomTabsIntent constructExtraHeadersIntent(CustomTabsSession session) {
        CustomTabsIntent intent = new CustomTabsIntent.Builder(session).build();

        // Example non-cors-whitelisted headers.
        Bundle headers = new Bundle();
        headers.putString("bearer-token", "Some token");
        headers.putString("redirect-url", "Some redirect url");
        intent.intent.putExtra(Browser.EXTRA_HEADERS, headers);
        return intent;
    }

### Set up a Custom Tabs Connection to Validate the Asset Link

A Custom Tabs connection is used for setting up a `CustomTabsSession` between the app and the Chrome tab. We need the session to verify that the app and web app belong to the same origin. The verification only passes if the digital asset links were set up correctly.

It is encouraged to call `CustomTabsClient.warmup()`. It allows the browser application to pre-initialize in the background and speed up the URL opening process.

    // Set up a connection that warms up and validates a session.
    CustomTabsServiceConnection connection = new CustomTabsServiceConnection() {
        @Override
        public void onCustomTabsServiceConnected(@NonNull ComponentName name, 
            @NonNull CustomTabsClient client) {
            // Create session after service connected.
            mSession = client.newSession(callback);
            client.warmup(0);
            // Validate the session as the same origin to allow cross origin headers.
            mSession.validateRelationship(CustomTabsService.RELATION_USE_AS_ORIGIN, 
                Uri.parse(url), null);
        }
        @Override
        public void onServiceDisconnected(ComponentName componentName) { }
    };

### Set up a Callback that Launches the Intent after Validation

The `CustomTabsCallback` was passed into the session. We set up its `onRelationshipValidationResult()` to launch the previously created `CustomTabsIntent` once the origin verification succeeds.

    // Set up a callback that launches the intent after session validated.
    CustomTabsCallback callback = new CustomTabsCallback() {
        @Override
        public void onRelationshipValidationResult(int relation, @NonNull Uri requestedOrigin, 
            boolean result, @Nullable Bundle extras) {
            // Launch custom tabs intent after session was validated as the same origin.
            CustomTabsIntent intent = constructExtraHeadersIntent(mSession);
            intent.launchUrl(MainActivity.this, Uri.parse(url));
        }
    };

### Bind the custom tabs service connection

Binding the service launches the service and the connection’s `onCustomTabsServiceConnected()` will be called eventually. Don’t forget to unbind the service appropriately. Binding and unbinding is commonly done in the `onStart()` and `onStop()` activity lifecycle methods.

    // Bind the custom tabs service connection.
    // Call this in onStart()
    CustomTabsClient.bindCustomTabsService(this,
        CustomTabsClient.getPackageName(MainActivity.this, null), connection);

    // …
    // Unbind the custom tabs service.
    // Call this in onStop().
    unbindService(connection);

### Demo application code

You can find more details about Custom Tabs Service [here](/docs/android/custom-tabs/integration-guide#connect_to_the_custom_tabs_service). See the [android-browser-helper](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos) GitHub repository for a working example app.

Summary
-------

This guide demonstated how to add arbitrary headers to custom tabs CORS requests. Whitelisted headers can be attached to every custom tabs CORS request. Non-whitelisted headers are generally considered unsafe in CORS requests and chrome filters them by default. Attaching them is allowed only for clients and servers of the same origin, verified by a digital asset link.
