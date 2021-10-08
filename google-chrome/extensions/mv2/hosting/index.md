2012-09-18

{% include ‘partials/extensions/mv2-legacy-page.md’ %}

Most extensions are hosted in the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions) to best [protect users from malicious extensions](http://blog.chromium.org/2015/05/continuing-to-protect-chrome-users-from.html).

## Hosting {: \#hosting }

All extensions are distributed to users as a special ZIP file with a `.crx` suffix. Extensions hosted in the [Chrome Web Store](/docs/webstore) are uploaded through the [Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) as `.zip` files. The [publishing](/docs/webstore/publish) process automatically converts the `.zip` into a `.crx` file.

There are three exceptions to the Chrome Web Store hosting rule:

1.  Extensions that are distributed through the [enterprise policy](https://support.google.com/chrome/a/answer/7666985).
2.  Unpacked extension directories from a local machine while in [developer mode](/docs/extensions/mv2/getstarted#unpacked).
3.  [Linux installation](/docs/extensions/mv2/linux_hosting).

[Read more about the hosting policy](/docs/extensions/mv2/hosting_changes).

## Updating {: \#updating }

The Chrome Browser periodically checks for new versions of installed extensions and updates them without user intervention.

To release an update to an extension, increase the number in the [`version`](/docs/extensions/mv2/manifest/version/) field of the manifest.

    {
      ...
      "version": "1.5",
      ...
    }

    {
      ...
      "version": "1.6",
      ...
    }

Convert the updated extension directory into a ZIP file and locate the old version in the [Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard). Select **Edit**, upload the new package, and hit **Publish**. The browser will automatically update the extension for users after the new version is published.
