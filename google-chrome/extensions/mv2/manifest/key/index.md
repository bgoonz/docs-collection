2013-05-12

This value can be used to control the unique ID of an extension, app, or theme when it is loaded during development.

**Note:** You don’t usually need to use this value. Instead, write your code so that the key value doesn’t matter by using [relative paths](/extensions/overview#relative-urls) and [extension.getURL](/extensions/extension#method-getURL).

To get a suitable key value, first install your extension from a `.crx` file (you may need to [upload your extension](https://chrome.google.com/webstore/developer/dashboard) or [package it manually](/docs/extensions/packaging)). Then, in your [user data directory](https://www.chromium.org/user-experience/user-data-directory), look in the file `Default/Extensions/_<extensionId>_/_<versionString>_/manifest.json`. You will see the key value filled in there.
