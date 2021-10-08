---json {"title":"PPB\_URLResponseInfo Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a0bb553375716a3966176ae01f6146d5a" class="el">IsURLResponseInfo</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a3fff27f7102320e9efbd59dc83e62ddf" class="el">GetProperty</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> response, <a href="/docs/native-client/pepper_dev/c/group___enums#ga642e6199b27df69aad84aff5597041e0" class="el">PP_URLResponseProperty</a> property)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a5c826b8217ceede947eda843e0566d2b" class="el">GetBodyAsFileRef</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> response)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The PPB\_URLResponseInfo interface contains APIs for examining URL responses.

Refer to `PPB_URLLoader` for further information.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a5c826b8217ceede947eda843e0566d2b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a5c826b8217ceede947eda843e0566d2b" class="el">PPB_URLResponseInfo::GetBodyAsFileRef</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> response)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a5c826b8217ceede947eda843e0566d2b" class="el" title="GetBodyAsFileRef() returns a FileRef pointing to the file containing the response body...">GetBodyAsFileRef()</a> returns a FileRef pointing to the file containing the response body.

This is only valid if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was set on the `URLRequestInfo` used to produce this response. This file remains valid until the `URLLoader` associated with this `URLResponseInfo` is closed or destroyed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>request</td><td>A <code>PP_Resource</code> corresponding to a <code>URLResponseInfo</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a `FileRef` if successful, 0 if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was not requested or if the `URLLoader` has not been opened yet.

<span id="a3fff27f7102320e9efbd59dc83e62ddf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a3fff27f7102320e9efbd59dc83e62ddf" class="el">PPB_URLResponseInfo::GetProperty</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> response, <a href="/docs/native-client/pepper_dev/c/group___enums#ga642e6199b27df69aad84aff5597041e0" class="el">PP_URLResponseProperty</a> property)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a3fff27f7102320e9efbd59dc83e62ddf" class="el" title="GetProperty() gets a response property.">GetProperty()</a> gets a response property.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>request</td><td>A <code>PP_Resource</code> corresponding to a <code>URLResponseInfo</code>.</td></tr><tr class="even"><td>[in]</td><td>property</td><td>A <code>PP_URLResponseProperty</code> identifying the type of property in the response.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` containing the response property value if successful, `PP_VARTYPE_VOID` if an input parameter is invalid.

<span id="a0bb553375716a3966176ae01f6146d5a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a0bb553375716a3966176ae01f6146d5a" class="el">PPB_URLResponseInfo::IsURLResponseInfo</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___u_r_l_response_info__1__0#a0bb553375716a3966176ae01f6146d5a" class="el" title="IsURLResponseInfo() determines if a response is a URLResponseInfo.">IsURLResponseInfo()</a> determines if a response is a `URLResponseInfo`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>URLResponseInfo</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `URLResponseInfo`, `PP_FALSE` if the resource is invalid or some type other than `URLResponseInfo`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__url__response__info_8h/" class="el">ppb_url_response_info.h</a>
