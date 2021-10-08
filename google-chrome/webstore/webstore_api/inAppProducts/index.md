An `inAppProducts` resource represents a digital good that is sold inside of a Chrome App or Chrome Extension and is available for purchase by the user.

inAppProduct Representation {: \#iaprepresentation }
----------------------------------------------------

    {
      "kind": "chromewebstore#inAppProduct",
      "sku": string,
      "item_id": string,
      "type": string,
      "state": string,
      "prices": [
        {
          "valueMicros": long,
          "currencyCode": string,
          "regionCode": string
        }
      ],
      "localeData": [
        {
          "title": string,
          "description": string,
          "languageCode": string
        }
      ]
    }

<table><thead><tr class="header"><th>Property name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>item_id</code></td><td><code>string</code></td><td>Unique identifier for a Chrome App, Chrome Extension, or Chrome Theme.</td></tr><tr class="even"><td><code>type</code></td><td><code>string</code></td><td>Either <code>inapp</code> or <code>subs</code>.</td></tr><tr class="odd"><td><code>kind</code></td><td><code>string</code></td><td>Identifies this resource as an inAppProduct. Value: the fixed string <code>“chromewebstore#inAppProduct”</code>.</td></tr><tr class="even"><td><code>localeData[]</code></td><td><code>list</code></td><td>Locale data of the in-app product.</td></tr><tr class="odd"><td><code>localeData[].description</code></td><td><code>string</code></td><td>Description of the in-app product in the specified locale.</td></tr><tr class="even"><td><code>localeData[].languageCode</code></td><td><code>string</code></td><td>Language code for the locale data.</td></tr><tr class="odd"><td><code>localeData[].title</code></td><td><code>string</code></td><td>Title of the in-app product in the specified locale.</td></tr><tr class="even"><td><code>prices[]</code></td><td><code>list</code></td><td>Price of the in-app product.</td></tr><tr class="odd"><td><code>prices[].currencyCode</code></td><td><code>string</code></td><td>Currency code for the in-app product, for example, “USD”.</td></tr><tr class="even"><td><code>prices[].regionCode</code></td><td><code>string</code></td><td>Region code for the in-app product, for example, “US”.</td></tr><tr class="odd"><td><code>prices[].valueMicros</code></td><td><code>long</code></td><td>Monetary value of the in-app product multiplied by 1000.</td></tr><tr class="even"><td><code>sku</code></td><td><code>string</code></td><td>Unique identifer (Product ID) for an individual In-App Product (IAP). Product IDs must start with a lowercase letter or number and can only contain lowercase letters(a-z), numbers(0-9), dots(.) and underscores(_).</td></tr><tr class="odd"><td><code>state</code></td><td><code>string</code></td><td>State of this in-app product, <code>ACTIVE</code> or <code>INACTIVE</code>. In-app products can be inactive until you are ready to make them available to your users.</td></tr></tbody></table>

Methods {: \#iapmethods }
-------------------------

[get](/docs/webstore/webstore_api/inAppProducts/get) {: \#getmethod }  
Gets the in-app product information of an item.

[list](/docs/webstore/webstore_api/inAppProducts/list) {: \#listmethod }  
Lists the in-app product information of an item.
