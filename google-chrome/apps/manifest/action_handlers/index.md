2017-02-03

{% Aside ‘caution’ %}

**Important:** Chrome will be removing support for Chrome Apps on all platforms. Chrome browser and the Chrome Web Store will continue to support extensions. [**Read the announcement**](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html) and learn more about [**migrating your app**](/apps/migration).

{% endAside %}

The `action_handlers` manifest property declares which user actions or intents the application supports; these can serve as alternate launch points for your application. This API is only available on ChromeOS.

This list contains one or more of the `ActionType` values specified in the `ActionType` entry of [app.runtime.onLaunched](../app_runtime#event-onLaunched).

## Sample manifest.json {: \#manifest }

    {
      "name": "My note app",
      "action_handlers": ["new_note"],
      ...
    }
