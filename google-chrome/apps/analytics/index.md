2013-08-01

{% Aside ‘caution’ %}

**Important:** Chrome will be removing support for Chrome Apps on all platforms. Chrome browser and the Chrome Web Store will continue to support extensions. [**Read the announcement**](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html) and learn more about [**migrating your app**](/apps/migration).

{% endAside %}

<table><tbody><tr class="odd"><td><strong>Description:</strong></td><td>Use the Chrome Platform Analytics JavaScript library to measure user interactions with your app.</td></tr><tr class="even"><td><strong>Samples:</strong></td><td><a href="https://github.com/GoogleChrome/chrome-platform-analytics/tree/master/src/example">JavaScript and Closure examples</a></td></tr><tr class="odd"><td><strong>Learn more:</strong></td><td><a href="https://github.com/GoogleChrome/chrome-platform-analytics/wiki">Chrome Platform Analytics</a></td></tr></tbody></table>

Overview {: \#overview }
------------------------

The [Google Analytics Platform](https://developers.google.com/analytics/devguides/platform/) lets you measure user interactions with your business across various devices and environments. The platform provides resources to collect, store, process, and report on user interactions. [Chrome Platform Analytics](https://github.com/GoogleChrome/chrome-platform-analytics/wiki) (CPA) is a client library that lets you collect user interactions in Packaged Apps and Extensions, and send them to the Google Analytics Platform.

The CPA library follows the basic usage pattern of [Google Analytics](http://www.google.com/analytics/index.html) and will feel familiar to existing users of Google Analytics. However, unlike the web-centric official Google Analytics JavaScript libraries, the CPA library uses an “app-centric” model that is better suited for Packaged Apps. Among other features, the library provides methods for specific types of hits, such as “event” and “appView”, and it can be used in both Closure-based and traditional JavaScript projects.

Privacy {: \#privacy }
----------------------

[Google Analytics Policies](https://developers.google.com/analytics/devguides/collection/protocol/policy) require you to give users notice about analytics tracking and the option to opt out of tracking. The CPA library makes it easy to build privacy-friendly apps by providing library-level support for user opt-out.

Library {: \#library }
----------------------

The CPA library is hosted on GitHub: [chrome-platform-analytics](https://github.com/GoogleChrome/chrome-platform-analytics).

The library is [google-analytics-bundle.js](https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/google-analytics-bundle.js).

Documentation {: \#documentation }
----------------------------------

Documentation for the CPA library is aslo on GitHub. See specifically:

-   [Prerequisites](https://github.com/GoogleChrome/chrome-platform-analytics/wiki#prerequisites)
-   [API Reference](https://github.com/GoogleChrome/chrome-platform-analytics/wiki#api-reference)
-   [How-To](https://github.com/GoogleChrome/chrome-platform-analytics/wiki#how-to)

Examples {: \#examples }
------------------------

For an illustration of how to use the CPA library to measure user interactions in an app, see the [examples](https://github.com/GoogleChrome/chrome-platform-analytics/tree/master/src/example).
