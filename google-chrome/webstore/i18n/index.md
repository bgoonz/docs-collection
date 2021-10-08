2017-08-30

Unless your app is strictly local in scope, you should *internationalize* it, making it easy to adapt to various languages and regions. You can then *localize* it—translate and otherwise adapt it so that it works well in a particular locale.

You can internationalize your app even if it initially supports just one locale. For example, you might initially publish your app in English (locale code: “en”). Then, after a few weeks or months, you might add support for additional locales such as French (locale code: “fr”) and Arabic (locale code: “ar”).

{% Aside %} The word *internationalization* is often abbreviated to *i18n*, referring to the 18 letters between the letters *i* and *n*. *Localization* is sometimes abbreviated to *l10n*. {% endAside %}

Overview
--------

Here are the steps you need to follow when you internationalize and localize an app to be published in the Chrome Web Store:

1.  Decide which [locales](#localeTable) you want to support.
2.  Internationalize and localize the app’s UI.
3.  Localize your app’s [name and description](#manifest).
4.  Upload your app using the Chrome Developer Dashboard.
5.  Edit your listing, providing localized versions of the [detailed description](#longDescription) and [screenshots](#screenshots).
6.  [Specify which regions](#where) you want to support.

How you accomplish step 2 depends on whether you’re writing an extension, packaged app, or hosted app. [Extensions](http://code.google.com/chrome/extensions/overview.html) and [packaged apps](http://code.google.com/chrome/extensions/apps.html) can use the [extension system i18n support](http://code.google.com/chrome/extensions/i18n.html) to provide the appropriate UI strings for each locale. [Hosted apps](https://developers.google.com/chrome/apps/docs/developers_guide) don’t have access to the extension i18n support for their main UIs, but they can use whatever other i18n techniques and libraries suit the app.

In step 3 you localize the name and description by editing the manifest file and providing strings for your chosen locales. Once you’ve uploaded your app (step 4), you can finish your app’s listing (step 5).

If you provide strings for at least two locales in step 3, then you’ll be able to provide locale-specific information in step 5. Otherwise, your listing will be the same in all locales.

**Note**: You can significantly **increase your app’s ranking** in the locales that you support by localizing the name, description, and detailed description.

Choosing locales to support
---------------------------

You can localize your app to any of the following locales.

<table><thead><tr class="header"><th>Locale code</th><th>Language (region)</th></tr></thead><tbody><tr class="odd"><td>ar</td><td>Arabic</td></tr><tr class="even"><td>am</td><td>Amharic</td></tr><tr class="odd"><td>bg</td><td>Bulgarian</td></tr><tr class="even"><td>bn</td><td>Bengali</td></tr><tr class="odd"><td>ca</td><td>Catalan</td></tr><tr class="even"><td>cs</td><td>Czech</td></tr><tr class="odd"><td>da</td><td>Danish</td></tr><tr class="even"><td>de</td><td>German</td></tr><tr class="odd"><td>el</td><td>Greek</td></tr><tr class="even"><td>en</td><td>English</td></tr><tr class="odd"><td>en_GB</td><td>English (Great Britain)</td></tr><tr class="even"><td>en_US</td><td>English (USA)</td></tr><tr class="odd"><td>es</td><td>Spanish</td></tr><tr class="even"><td>es_419</td><td>Spanish (Latin America and Caribbean)</td></tr><tr class="odd"><td>et</td><td>Estonian</td></tr><tr class="even"><td>fa</td><td>Persian</td></tr><tr class="odd"><td>fi</td><td>Finnish</td></tr><tr class="even"><td>fil</td><td>Filipino</td></tr><tr class="odd"><td>fr</td><td>French</td></tr><tr class="even"><td>gu</td><td>Gujarati</td></tr><tr class="odd"><td>he</td><td>Hebrew</td></tr><tr class="even"><td>hi</td><td>Hindi</td></tr><tr class="odd"><td>hr</td><td>Croatian</td></tr><tr class="even"><td>hu</td><td>Hungarian</td></tr><tr class="odd"><td>id</td><td>Indonesian</td></tr><tr class="even"><td>it</td><td>Italian</td></tr><tr class="odd"><td>ja</td><td>Japanese</td></tr><tr class="even"><td>kn</td><td>Kannada</td></tr><tr class="odd"><td>ko</td><td>Korean</td></tr><tr class="even"><td>lt</td><td>Lithuanian</td></tr><tr class="odd"><td>lv</td><td>Latvian</td></tr><tr class="even"><td>ml</td><td>Malayalam</td></tr><tr class="odd"><td>mr</td><td>Marathi</td></tr><tr class="even"><td>ms</td><td>Malay</td></tr><tr class="odd"><td>nl</td><td>Dutch</td></tr><tr class="even"><td>no</td><td>Norwegian</td></tr><tr class="odd"><td>pl</td><td>Polish</td></tr><tr class="even"><td>pt_BR</td><td>Portuguese (Brazil)</td></tr><tr class="odd"><td>pt_PT</td><td>Portuguese (Portugal)</td></tr><tr class="even"><td>ro</td><td>Romanian</td></tr><tr class="odd"><td>ru</td><td>Russian</td></tr><tr class="even"><td>sk</td><td>Slovak</td></tr><tr class="odd"><td>sl</td><td>Slovenian</td></tr><tr class="even"><td>sr</td><td>Serbian</td></tr><tr class="odd"><td>sv</td><td>Swedish</td></tr><tr class="even"><td>sw</td><td>Swahili</td></tr><tr class="odd"><td>ta</td><td>Tamil</td></tr><tr class="even"><td>te</td><td>Telugu</td></tr><tr class="odd"><td>th</td><td>Thai</td></tr><tr class="even"><td>tr</td><td>Turkish</td></tr><tr class="odd"><td>uk</td><td>Ukrainian</td></tr><tr class="even"><td>vi</td><td>Vietnamese</td></tr><tr class="odd"><td>zh_CN</td><td>Chinese (China)</td></tr><tr class="even"><td>zh_TW</td><td>Chinese (Taiwan)</td></tr></tbody></table>

Localizing your app listing
---------------------------

To localize your app’s listing, you first localize the name and description. Then, after uploading your localized app, you can edit your app’s listing to specify localized versions of your app’s detailed description and screenshots.

### Name and description

You localize the name and description by modifying `manifest.json` and providing a `_locales` directory in your app’s ZIP file. Specifically, you need to:

-   Modify the “name” and “description” manifest fields
-   Add a “default\_locale” field
-   Provide at least one `_locales/_locale_/messages.json` file, where *`locale`* is a [locale code](#localeTable); each `messages.json` file contains the strings for one locale

Here’s an example of how you might specify the name and description of an internationalized hosted app that has English as its default language and British English as its secondary language:

    //in manifest.json:
      "name": "__MSG_appName__",
      "description": "__MSG_appDesc__",
      "default_locale": "en",

    //in _locales/en/messages.json:
    {
      "appName": {
        "message": "My App",
        "description": "The title of the application, displayed in the web store."
      },
      "appDesc": {
        "message": "This app does something awesome.",
        "description":"The description of the application, displayed in the web store."
      }
    }

    //in _locales/en_GB/messages.json:
    {
      "appName": {
        "message": "My Application"
      },
      "appDesc": {
        "message": "This application does something brilliant."
      }
    }

If you add a locale later, you just need to add a `_locales/_locale_/messages.json` file for that new locale. For example, if you add support for French and Arabic, you’ll need to add two files: `_locales/fr/messages.json` and `_locales/ar/messages.json`. Each of those files can be a copy of `_locales/en_GB/messages.json`, but with translated versions of the “message” values.

For more details, see the following examples and documentation.

-   Example: [Minimal Localized Hosted App](http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/i18n/localizedHostedApp/)
    -   [manifest.json](http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/i18n/localizedHostedApp/manifest.json)
    -   [\_locales/en/messages.json](http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/i18n/localizedHostedApp/_locales/en/messages.json)
    -   [\_locales/de/messages.json](http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/i18n/localizedHostedApp/_locales/de/messages.json)
-   Examples: [Extensions that use i18n APIs](http://code.google.com/chrome/extensions/samples.html#i18n)
-   Extensions documentation: [Internationalization](http://code.google.com/chrome/extensions/i18n.html)
    -   The [How extensions find strings](http://code.google.com/chrome/extensions/i18n.html#locales-usage) section shows how you can sometimes omit message strings. For example, if the app’s name isn’t translated, you can leave it out for non-default locales.
    -   The [How to set your browser’s locale](http://code.google.com/chrome/extensions/i18n.html#locales-testing) section is helpful when you test your translations.

Once you’ve completed this step, upload your app using the Developer Dashboard, as described in [Publishing Your App](/docs/webstore/publish#step3).

### Detailed description

For each locale your app supports, edit your app’s listing to provide a detailed description of your app.

First, get to your app’s Edit page, which you can do by going to the dashboard and clicking the “Edit” link for the app. As the following figure shows, if you support multiple locales a pull-down list appears at the top of your app’s Edit page. Each item in the list corresponds to one of the `_locales/_locale_` directories that you uploaded.

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/MbFyk7NrqNRhTLkOeIMT.png”, alt=“screenshot of the locale pull-down”, height=“57”, width=“525” %}

Next, choose the locale that you want to edit. (Skip this if your app supports only one locale.)

Now edit the detailed description, providing text for the currently selected locale (or for the default locale, if you support just one).

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/vJ5OLO5OdFBcmV963q8e.jpg”, alt=“screenshot of the Detailed Description section for an app”, height=“258”, width=“527” %}

If you support multiple locales, repeat the previous two steps until you’ve provided a detailed description for each supported locale.

### Screenshots

As the [screenshot guidelines](/docs/webstore/images#screenshots) say, you should provide screenshots for your app. You can tailor these screenshots for each locale.

To add a screenshot, click the **Choose File** button in the **Screenshots** section of the Edit page.

If your app supports multiple locales, then after you upload each screenshot, you can specify whether it’s for all locales or just for the one you’re currently editing.

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/TTqmjZAmXBuov9HRBISe.png”, alt=“screenshot of screenshots with localization options”, height=“375”, width=“430” %}

To change the locale information for a screenshot, first use the pull-down list at the top of the page to choose the locale where you want the screenshot to appear. (If you don’t see the screenshot, go to the locale that it’s restricted to and click “Show this item in **all** locales”.) Click the thumbnail for the screenshot, so that it’s displayed at full size above the thumbnails. Now you can change the locale for the screenshot.

Specifying where to publish your app
------------------------------------

By default, your app is listed in all regions that can use the Chrome Web Store. If you don’t want your app to be listed in a particular region, unselect that region from the following list in the **Regions** section of the Edit page.

-   Argentina
-   Australia
-   Austria
-   Belgium
-   Brazil
-   Canada
-   China
-   Czech Republic
-   Denmark
-   Finland
-   France
-   Germany
-   Hong Kong
-   India
-   Indonesia
-   Israel
-   Italy
-   Japan
-   Mexico
-   Netherlands
-   New Zealand
-   Norway
-   Philippines
-   Poland
-   Portugal
-   Russia
-   Singapore
-   Spain
-   Sweden
-   Switzerland
-   United Kingdom
-   United States

{% Aside %} Unselecting a region prevents your app from being listed in that region. {% endAside %}
