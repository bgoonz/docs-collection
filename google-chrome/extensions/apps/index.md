2012-09-17

{% Aside ‘warning’ %}

**Warning:** All content in this doc refers to the legacy version of packaged apps. Legacy packaged apps are discontinued, and Chrome will **stop loading them** in June 2015. Check out the new version of [Chrome Apps](/docs/apps/about_apps) or read the [migration tutorial for legacy packaged apps](/docs/webstore/migrating).

{% endAside %}

This page talks about legacy packaged apps—how you implement them, and how they’re different from extensions and ordinary web apps.

## Overview {: \#overview }

A legacy packaged app is a web app that’s bundled into a `.crx` file. In the past, legacy packaged apps could use most of the extension APIs, but [since November 2012](https://blog.chromium.org/2012/11/restricting-extension-apis-in-legacy.html), the feature set of legacy packaged apps was reduced. And in June 2014, discontinuation of legacy packaged apps [was announced](https://blog.chromium.org/2014/06/migrate-your-legacy-packaged-apps-to.html); support for them will be removed from Chrome in June 2015.

The term “packaged app” used to refer to the “legacy packaged app” as described in this document, but [since the introduction of Chrome Apps in August 2012](https://blog.chromium.org/2012/08/the-evolution-of-chrome-packaged-apps.html), the term “packaged app” is also used to refer to [Chrome Apps](/docs/apps/about_apps). Keep this in mind when you read about “packaged apps” in online resources.

A close alternative to legacy packaged apps are [hosted apps](https://developers.google.com/chrome/apps/docs/developers_guide), which are ordinary web apps with a bit of additional metadata. To learn more about extensions, packaged apps, and hosted apps, read [Choosing an App Type](/docs/webstore/choosing).

## The manifest {: \#manifest }

A packaged app’s manifest can have any field that’s available to extensions, except for “browser_action” and “page_action”. In addition, a packaged app’s manifest **must** have an “app” field. Here is a typical manifest for a packaged app:

    {
      "name": "My Awesome Racing Game",
      "description": "Enter a world where a Vanagon can beat a Maserati",
      "version": "1",
      "app": {
        "launch": {
          "local_path": "main.html"
        }
      },
      "icons": {
        "16": "icon_16.png",
        "128": "icon_128.png"
      }
    }

The “app” field has one subfield, “launch”, which specifies the _launch page_ for the app—the page (HTML file bundled into the `.crx` file) that the browser goes to when the user clicks the app’s icon in the New Tab page. The “launch” field can contain the following:

local*path:  
\_Required.* Specifies the launch page as a relative path referring to a file in the `.crx` package.

container:  
The value “panel” makes the app appear in an app panel. By default, or when you specify “tab”, the app appears in a tab.

height:  
If the container is set to “panel”, this integer specifies the height of the panel in pixels. For example, you might specify `"height":400`. Note that you don’t use quotation marks in the value. This field specifies the height of the area to display contents in; window decorations add a few more pixels to the total height. If the container isn’t a panel, this field is ignored.

width:  
Similar to “height”, but specifies the width of the panel.

Packaged apps usually provide a 16x16 icon to be used as the favicon for tabs that contain app’s pages. They also should provide a 128x128 icon, but not a 48x48 icon. See the manifest documentation for the [“icons” field](/docs/extensions/mv2/manifest/icons) for more information.

For further details on what a packaged app’s manifest can contain, see the [manifest documentation](/docs/extensions/mv2/tabs).

## What next? {: \#next }

Read the [Overview](/docs/extensions/mv2/overview) to learn basic concepts about extensions.
