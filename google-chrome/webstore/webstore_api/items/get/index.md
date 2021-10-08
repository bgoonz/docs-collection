Gets a Chrome Web Store [item](/docs/webstore/webstore_api/items/). Provide projection=“DRAFT” (case sensitive) in URL as a URL Parameter.

Request {: \#request }
----------------------

### HTTP request

    GET https://www.googleapis.com/chromewebstore/v1.1/items/itemId

### Parameters

Parameter name

Value

Description

**Path parameters**

`itemId`

`string`

Unique identifier representing the Chrome App, Chrome Extension, or the Chrome Theme.

**Optional query parameters**

`projection`

`string`

Determines which subset of the item information to return.  
  
Acceptable values are:

-   “`DRAFT`”: Return information extracted from the current draft.
-   “`PUBLISHED`”: Return information extracted from the published item draft.

Note that only `“DRAFT”` is supported at this time.

### Authorization {: \#auth }

This request requires authorization with the following scope.

<table><thead><tr class="header"><th>Scope</th></tr></thead><tbody><tr class="odd"><td><code>https://www.googleapis.com/auth/chromewebstore.readonly</code></td></tr><tr class="even"><td>The above URL is used as the scope parameter when generating an access token. For more details on API authorization and authentication, consult the <a href="https://developers.google.com/accounts/docs/OAuth2">OAuth 2.0 documentation</a>.</td></tr></tbody></table>

### Request body

Do not supply a request body with this method.

Response {: \#response }
------------------------

If successful, this method returns an [Items resource](/docs/webstore/webstore_api/items/#resource) in the response body.
