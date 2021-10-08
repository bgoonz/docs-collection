2012-09-17

{% include ‘partials/extensions/mv2-legacy-page.md’ %}

{% Aside ‘warning’ %} **Warning:** `webKitNotifications.createHTMLNotification()` in the [web notifications API](http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification) has been deprecated. The new [web notifications API](http://www.w3.org/TR/notifications/) only allows text. [Chrome notifications API](/docs/extensions/notifications) will be promoted to stable soon and web notifications will be updated to use the new rich notifications format. {% endAside %}

Use rich desktop notifications to notify users that something important has happened. Notifications appear outside the browser window. As the following snapshots show, the details of how notifications look and where they’re shown depend on the platform.

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/nbLinHu3r2DVL7DWmssr.png”, alt=“Notifications on Microsoft Windows”, height=“135”, width=“330” %}

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/aG2rad4dnaqo3hWMCcvv.png”, alt=“Notifications on Mac OS X”, height=“135”, width=“330” %}

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/2A4keArJesaukD4UiIvk.png”, alt=“Notifications on Ubuntu Linux”, height=“135”, width=“330” %}

You create the notification window using a bit of JavaScript and, optionally, an HTML page packaged inside your extension.

## Example {: \#example }

First, declare the `notifications` permission in your manifest:

    {
      "name": "My extension",
      "manifest_version": 2,
      ...
      "permissions": [
        "notifications"
      ],
      ...
      // Note: Because of bug 134315, you must declare any images you
      // want to use with createNotification() as a web accessible resource.
      "web_accessible_resources": [
        "48.png"
      ],
    }

Then, use `webkitNotifications` object to create notifications:

    // Note: There's no need to call webkitNotifications.checkPermission().
    // Extensions that declare the notifications permission are always
    // allowed create notifications.

    // Create a simple text notification:
    var notification = webkitNotifications.createNotification(
      '48.png',  // icon url - can be relative
      'Hello!',  // notification title
      'Lorem ipsum...'  // notification body text
    );

    // Or create an HTML notification:
    var notification = webkitNotifications.createHTMLNotification(
      'notification.html'  // html url - can be relative
    );

    // Then show the notification.
    notification.show();

## API reference {: \#reference }

See the [Desktop Notifications Draft Specification](http://dev.chromium.org/developers/design-documents/desktop-notifications/api-specification).

## Communicating with other views {: \#communication }

You can communicate between a notification and other views in your extension using [extension.getBackgroundPage](/docs/extensions/extension#method-getBackgroundPage) and [extension.getViews](/docs/extensions/extension#method-getViews). For example:

    chrome.extension.getBackgroundPage().doThing();

    chrome.extension.getViews({type:"notification"}).forEach(function(win) {
      win.doOtherThing();
    });

## More examples {: \#examples }

You can find a simple example of using notifications in the [examples/api/notifications](https://github.com/GoogleChrome/chrome-extensions-samples/tree/master/mv2-archive/api/notifications/) directory. For other examples and for help in viewing the source code, see [Samples](/docs/extensions/mv2/samples).

Also see html5rocks.com’s [notifications tutorial](http://www.html5rocks.com/tutorials/notifications/quick/). Ignore the permission-related code; it’s unnecessary if you declare the “notifications” permission.
