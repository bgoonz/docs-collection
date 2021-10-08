Lists the [in-app product](/docs/webstore/webstore_api/inAppProducts) information of an item.

Request {: \#request }
----------------------

### HTTP request

    GET https://www.googleapis.com/chromewebstore/v1.1/items/itemId/skus

### Parameters

Parameter name

Value

Description

**Path parameters**

`itemId`

`string`

The ID of the item to query for in-app products.

**Optional query parameters**

`gl`

`string`

Specifies the region code of the in-app product when projection is `THIN`.

`hl`

`string`

Specifies the language code of the in-app product when projection is `THIN`.

`projection`

`string`

Whether to return a subset of the result.  
  
Acceptable values are:

-   “`ALL`”: Return in-app product info for all available regions and languages.
-   “`THIN`”: Return in-app product info for only the requested region and language.

### Authorization {: \#auth }

This request requires authorization with the following scope.

<table><thead><tr class="header"><th>Scope</th></tr></thead><tbody><tr class="odd"><td><code>https://www.googleapis.com/auth/chromewebstore.readonly</code></td></tr><tr class="even"><td>The above URL is used as the scope parameter when generating an access token. For more details on API authorization and authentication, consult the <a href="https://developers.google.com/accounts/docs/OAuth2">OAuth 2.0 documentation</a>.</td></tr></tbody></table>

### Request body

Do not supply a request body with this method.

Response {: \#response }
------------------------

If successful, this method returns a response body with the following structure:

    {
      "kind": "chromewebstore#inAppProductList",
      "inAppProducts": [
        inAppProducts Resource
      ]
    }

<table><thead><tr class="header"><th>Property name</th><th>Value</th><th>Description</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><code>kind</code></td><td><code>string</code></td><td>Static value always returns a string of <code>“chromewebstore#inAppProductList”</code>.</td><td></td></tr><tr class="even"><td><code>inAppProducts[]</code></td><td><code>list</code></td><td>List of in-app product objects.</td><td></td></tr></tbody></table>
