This API reference is organized by resource type. Each resource type has one or more data representations and one or more methods.

Resource types
--------------

1.  [InAppProducts](#InAppProducts)
2.  [Items](#Items)
3.  [Licenses](#Licenses)
4.  [UserLicenses](#userLicenses)
5.  [Payments](#Payments)

InAppProducts {: \#InAppProducts }
----------------------------------

For InAppProducts Resource details, see the [resource representation](/docs/webstore/webstore_api/inAppProducts/#resource) page.

Method

HTTP request

Description

URIs relative to https://www.googleapis.com/chromewebstore/v1.1, unless otherwise noted

[get](/webstore/webstore_api/inAppProducts/get/)

`GET  /items/itemId/skus/sku`

Gets the in-app product information of an item.

[list](/webstore/webstore_api/inAppProducts/list/)

`GET  /items/itemId/skus`

Lists the in-app product information of an item.

Items {: \#Items }
------------------

For Items Resource details, see the [resource representation](/docs/webstore/webstore_api/items/#resource) page.

Method

HTTP request

Description

URIs relative to https://www.googleapis.com, unless otherwise noted

[get](/webstore/webstore_api/items/get/)

`GET/chromewebstore/v1.1/items/itemId`

Gets a Chrome Web Store item. Provide `projection=“DRAFT”` in URL (case sensitive).

[insert](/webstore/webstore_api/items/insert/)

`POST/upload/chromewebstore/v1.1/items`

Inserts a new item.

[publish](/webstore/webstore_api/items/publish/)

`POST  /chromewebstore/v1.1/items/itemId/publish`

Publishes an item. Provide defined `publishTarget` in URL (case sensitive): `publishTarget = “trustedTesters”` or `publishTarget = “default”`.

[update](/webstore/webstore_api/items/update/)

`PUT/upload/chromewebstore/v1.1/items/itemId`  
   
and  
   
`PUT  /items/itemId`

Updates an existing item.

Licenses {: \#Licenses }
------------------------

For Licenses Resource details, see the [resource representation](/docs/webstore/webstore_api/licenses/#resource) page.

Method

HTTP request

Description

URIs relative to https://www.googleapis.com/chromewebstore/v1.1, unless otherwise noted

[get](/webstore/webstore_api/licenses/get/)

`GET  /licenses/appId/userId`

Gets the licenses for Chrome hosted apps.

UserLicenses {: \#userLicenses }
--------------------------------

For UserLicenses Resource details, see the [resource representation](/docs/webstore/webstore_api/userLicenses/#resource) page.

Method

HTTP request

Description

URIs relative to https://www.googleapis.com/chromewebstore/v1.1, unless otherwise noted

[getUserLicense](/webstore/webstore_api/userLicenses/getUserLicense/)

`GET  /userlicenses/appId`

Gets the user licenses for Chrome Apps and Chrome Extensions.

Payments {: \#Payments }
------------------------

For Payments Resource details, see the [resource representation](/docs/webstore/webstore_api/payments/#resource) page.

Method

HTTP request

Description

URIs relative to https://www.googleapis.com/chromewebstore/v1.1, unless otherwise noted

[list](/webstore/webstore_api/payments/list/)

`GET  /items/itemId/payments`

Lists the in-app products that the user has purchased.
