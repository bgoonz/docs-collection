2012-10-08

{% include ‘partials/extensions/mv2-legacy-page.md’ %}

To use most chrome.\* APIs, your extension or app must declare its intent in the “permissions” field of the [manifest](/docs/extensions/mv2/manifest). Each permission can be either one of a list of known strings (such as “geolocation”) or a [match pattern](/docs/extensions/mv2/match_patterns) that gives access to one or more hosts. Permissions help to limit damage if your extension or app is compromised by malware. Some permissions are also displayed to users before installation, as detailed in [Permission Warnings](/docs/extensions/mv2/permission_warnings).

If an API requires you to declare a permission in the manifest, then its documentation tells you how to do so. For example, the [Storage](/docs/extensions/reference/storage) page shows you how to declare the “storage” permission.

Here’s an example of the permissions part of a manifest file:

    "permissions": [
      "tabs",
      "bookmarks",
      "http://www.blogger.com/",
      "http://*.google.com/",
      "unlimitedStorage"
    ],

The following table lists the currently available permissions:

Permission

Description

`“activeTab”`

Requests that the extension be granted permissions according to the [activeTab](/docs/extensions/mv2/manifest/activeTab) specification.

`“alarms”`

Gives your extension access to the [chrome.alarms](/docs/extensions/reference/alarms) API.

`“background”`

Makes Chrome start up early and shut down late, so that apps and extensions can have a longer life.

When any installed hosted app, packaged app, or extension has “background” permission, Chrome runs (invisibly) as soon as the user logs into their computer—before the user launches Chrome. The “background” permission also makes Chrome continue running (even after its last window is closed) until the user explicitly quits Chrome.

**Note:** Disabled apps and extensions are treated as if they aren’t installed.

You typically use the “background” permission with a [background page](/docs/extensions/mv2/background_pages), [event page](/docs/apps/event_pages) or (for hosted apps) a [background window](http://developers.google.com/chrome/apps/docs/background.html).

`“bookmarks”`

Gives your extension access to the [chrome.bookmarks](/docs/extensions/reference/bookmarks) API.

`“browsingData”`

Gives your extension access to the [chrome.browsingData](/docs/extensions/reference/browsingData/) API.

`“certificateProvider”`

Gives your extension access to the [chrome.certificateProvider](/docs/extensions/reference/certificateProvider/) API.

`“clipboardRead”`

Required if the extension or app uses `document.execCommand(‘paste’)`.

`“clipboardWrite”`

Indicates the extension or app uses `document.execCommand(‘copy’)` or `document.execCommand(‘cut’)`. This permission is **required for hosted apps**; it’s recommended for extensions and packaged apps.

`“contentSettings”`

Gives your extension access to the [chrome.contentSettings](/docs/extensions/reference/contentSettings/) API.

`“contextMenus”`

Gives your extension access to the [chrome.contextMenus](/docs/extensions/reference/contextMenus/) API.

`“cookies”`

Gives your extension access to the [chrome.cookies](/docs/extensions/reference/cookies/) API.

`“debugger”`

Gives your extension access to the [chrome.debugger](/docs/extensions/reference/debugger/) API.

`“declarativeContent”`

Gives your extension access to the [chrome.declarativeContent](/docs/extensions/reference/declarativeContent/) API.

`“declarativeNetRequest”`

Gives your extension access to the [chrome.declarativeNetRequest](/docs/extensions/reference/declarativeNetRequest/) API.

`“declarativeNetRequestFeedback”`

Grants the extension access to events and methods within the [chrome.declarativeNetRequest](/docs/extensions/reference/declarativeNetRequest/) API which return information on declarative rules matched.

`“declarativeWebRequest”`

Gives your extension access to the [chrome.declarativeWebRequest](/docs/extensions/reference/declarativeWebRequest/) API.

`“desktopCapture”`

Gives your extension access to the [chrome.desktopCapture](/docs/extensions/reference/desktopCapture/) API.

`“documentScan”`

Gives your extension access to the [chrome.documentScan](/docs/extensions/reference/documentScan/) API.

`“downloads”`

Gives your extension access to the [chrome.downloads](/docs/extensions/reference/downloads/) API.

`“enterprise.deviceAttributes”`

Gives your extension access to the [chrome.enterprise.deviceAttributes](/docs/extensions/reference/enterprise_deviceAttributes/) API.

`“enterprise.hardwarePlatform”`

Gives your extension access to the [chrome.enterprise.hardwarePlatform](/docs/extensions/reference/enterprise_hardwarePlatform/) API.

`“enterprise.networkingAttributes”`

Gives your extension access to the [chrome.enterprise.networkingAttributes](/docs/extensions/reference/enterprise_networkingAttributes/) API.

`“enterprise.platformKeys”`

Gives your extension access to the [chrome.enterprise.platformKeys](/docs/extensions/reference/enterprise_platformKeys/) API.

`“experimental”`

Required if the extension or app uses any [chrome.experimental.\* APIs](/docs/extensions/reference/#experimental_apis/).

`“fileBrowserHandler”`

Gives your extension access to the [chrome.fileBrowserHandler](/docs/extensions/reference/fileBrowserHandler/) API.

`“fileSystemProvider”`

Gives your extension access to the [chrome.fileSystemProvider](/docs/extensions/reference/fileSystemProvider/) API.

`“fontSettings”`

Gives your extension access to the [chrome.fontSettings](/docs/extensions/reference/fontSettings/) API.

`“gcm”`

Gives your extension access to the [chrome.gcm](/docs/extensions/reference/gcm/) API.

`“geolocation”`

Allows the extension or app to use the [geolocation API](https://dev.w3.org/geo/api/spec-source.html) without prompting the user for permission.

`“history”`

Gives your extension access to the [chrome.history](/docs/extensions/reference/history/) API.

`“identity”`

Gives your extension access to the [chrome.identity](/docs/extensions/reference/identity/) API.

`“idle”`

Gives your extension access to the [chrome.idle](/docs/extensions/reference/idle/) API.

`“loginState”`

Gives your extension access to the [chrome.loginState](/docs/extensions/reference/loginState/) API.

`“management”`

Gives your extension access to the [chrome.management](/docs/extensions/reference/management/) API.

`“nativeMessaging”`

Gives your extension access to the [native messaging API](/docs/apps/nativeMessaging/).

`“notifications”`

Gives your extension access to the [chrome.notifications](/docs/extensions/reference/notifications/) API.

`“pageCapture”`

Gives your extension access to the [chrome.pageCapture](/docs/extensions/reference/pageCapture/) API.

`“platformKeys”`

Gives your extension access to the [chrome.platformKeys](/docs/extensions/reference/platformKeys/) API.

`“power”`

Gives your extension access to the [chrome.power](/docs/extensions/reference/power/) API.

`“printerProvider”`

Gives your extension access to the [chrome.printerProvider](/docs/extensions/reference/printerProvider/) API.

`“printing”`

Gives your extension access to the [chrome.printing](/docs/extensions/reference/printing/) API.

`“printingMetrics”`

Gives your extension access to the [chrome.printingMetrics](/docs/extensions/reference/printingMetrics/) API.

`“privacy”`

Gives your extension access to the [chrome.privacy](/docs/extensions/reference/privacy/) API.

`“processes”`

Gives your extension access to the [chrome.processes](/docs/extensions/reference/processes/) API.

`“proxy”`

Gives your extension access to the [chrome.proxy](/docs/extensions/reference/proxy/) API.

`“scripting”`

Gives your extension access to the [chrome.scripting](/docs/extensions/reference/scripting/) API.

`“search”`

Gives your extension access to the [chrome.search](/docs/extensions/reference/search/) API.

`“sessions”`

Gives your extension access to the [chrome.sessions](/docs/extensions/reference/sessions/) API.

`“signedInDevices”`

Gives your extension access to the [chrome.signedInDevices](/docs/extensions/reference/signedInDevices/) API.

`“storage”`

Gives your extension access to the [chrome.storage](/docs/extensions/reference/storage/) API.

`“system.cpu”`

Gives your extension access to the [chrome.system.cpu](/docs/extensions/reference/system_cpu/) API.

`“system.display”`

Gives your extension access to the [chrome.system.display](/docs/extensions/reference/system_display/) API.

`“system.memory”`

Gives your extension access to the [chrome.system.memory](/docs/extensions/reference/system_memory/) API.

`“system.storage”`

Gives your extension access to the [chrome.system.storage](/docs/extensions/reference/system_storage/) API.

`“tabCapture”`

Gives your extension access to the [chrome.tabCapture](/docs/extensions/reference/tabCapture/) API.

`“tabGroups”`

Gives your extension access to the [chrome.tabGroups](/docs/extensions/reference/tabGroups/) API.

`“tabs”`

Gives your extension access to privileged fields of the [`Tab`](/extensions/tabs#type-Tab) objects used by several APIs including [chrome.tabs](/extensions/tabs) and [chrome.windows](/extensions/windows). In many circumstances your extension will not need to declare the `“tabs”` permission to make use of these APIs.

`“topSites”`

Gives your extension access to the [chrome.topSites](/docs/extensions/reference/topSites/) API.

`“tts”`

Gives your extension access to the [chrome.tts](/docs/extensions/reference/tts/) API.

`“ttsEngine”`

Gives your extension access to the [chrome.ttsEngine](/docs/extensions/reference/ttsEngine/) API.

`“unlimitedStorage”`

Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension or app is limited to 5 MB of local storage.

**Note:** This permission applies only to Web SQL Database and application cache (see issue [58985](http://crbug.com/58985)). Also, it doesn’t currently work with wildcard subdomains such as `http://*.example.com`.

      </td>
    </tr>
    <tr id="vpnProvider">
      <td><code>"vpnProvider"</code></td>
      <td>Gives your extension access to the <a href="/docs/extensions/reference/vpnProvider/">chrome.vpnProvider</a> API.</td>
    </tr>
    <tr id="wallpaper">
      <td><code>"wallpaper"</code></td>
      <td>Gives your extension access to the <a href="/docs/extensions/reference/wallpaper/">chrome.wallpaper</a> API.</td>
    </tr>
    <tr id="webNavigation">
      <td><code>"webNavigation"</code></td>
      <td>Gives your extension access to the <a href="/docs/extensions/reference/webNavigation/">chrome.webNavigation</a> API.</td>
    </tr>
    <tr id="webRequest">
      <td><code>"webRequest"</code></td>
      <td>Gives your extension access to the <a href="/docs/extensions/reference/webRequest/">chrome.webRequest</a> API.</td>
    </tr>
    <tr id="webRequestBlocking">
      <td><code>"webRequestBlocking"</code></td>
      <td>Required if the extension uses the <a href="/docs/extensions/reference/webRequest/">chrome.webRequest</a> API in a blocking fashion.</td>
    </tr>
