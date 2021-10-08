2013-05-12

Technologies required by the app or extension. Hosting sites such as the Chrome Web Store may use this list to dissuade users from installing apps or extensions that will not work on their computer. Supported requirements currently include “3D” and “plugins”; additional requirements checks may be added in the future.

The “3D” requirement denotes GPU hardware acceleration. The “webgl” requirement refers to the [WebGL API](https://www.khronos.org/webgl/). For more information on Chrome 3D graphics support, see the help article on [WebGL and 3D graphics](https://support.google.com/chrome/answer/1220892). You can list the 3D-related features your app requires, as demonstrated in the following example:

    "requirements": {
      "3D": {
        "features": ["webgl"]
      }
    }

NPAPI Plugin support for extension has been [discontinued](https://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html). As part of this, the **“plugins”** requirement described below has been deprecated.

The “plugins” requirement indicates if an app or extension requires NPAPI to run. This requirement is enabled by default when the manifest includes the [“plugins” field](/docs/extensions/npapi). For apps and extensions that still work when plugins aren’t available, you can disable this requirement by setting NPAPI to false. You can also enable this requirement manually, by setting NPAPI to true, as shown in this example:

    "requirements": {
      "plugins": {
        "npapi": true
      }
    }
