An Item resource represents a Chrome App, Chrome Extension, Theme or hosted app.

Resource representation {: \#resource }
---------------------------------------

### JSON

    {
      "kind": "chromewebstore#item",
      "id": string,
      "publicKey": string,
      "uploadState": string,
      "itemError": [
        (value)
      ]
    }

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>id</code></td><td><code>string</code></td><td>Unique ID of the item.</td></tr><tr class="even"><td><code>itemError[]</code></td><td><code>list</code></td><td>Detail human-readable status of the operation, in English only. Same error messages are displayed when you upload your app to the Chrome Web Store.</td></tr><tr class="odd"><td><code>kind</code></td><td><code>string</code></td><td>Identifies this resource as an Item. Value: the fixed string <code>“chromewebstore#item”</code>.</td></tr><tr class="even"><td><code>publicKey</code></td><td><code>string</code></td><td>Public key of this item.</td></tr><tr class="odd"><td><code>uploadState</code></td><td><code>string</code></td><td>Status of the operation.<br />
<br />
Acceptable values are:<ul><li>“<code>FAILURE</code>”</li><li>“<code>IN_PROGRESS</code>”</li><li>“<code>NOT_FOUND</code>”</li><li>“<code>SUCCESS</code>”</li></ul></td></tr></tbody></table>

Methods {: \#methods }
----------------------

[get](/docs/webstore/webstore_api/items/get/)  
Gets your own Chrome Web Store item. Provide `projection="DRAFT"` as a URL parameter (case sensitive).

[insert](/docs/webstore/webstore_api/items/insert/)  
Inserts a new item.

[publish](/docs/webstore/webstore_api/items/publish/)  
Publishes an item. Add the `publishTarget` URL parameter to the end of the URL with either `publishTarget ="trustedTesters"` or `publishTarget="default"` (case sensitive) as the value.

[update](/docs/webstore/webstore_api/items/update/)  
Updates an existing item.
