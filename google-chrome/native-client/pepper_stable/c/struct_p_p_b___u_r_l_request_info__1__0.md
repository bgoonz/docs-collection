---json {"title":"PPB\_URLRequestInfo Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#af46135ad86d3444f19a8aa30dd5cd202" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#ab23f1a2c86c64b64e806ba85cc5d1817" class="el">IsURLRequestInfo</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#a47e9163b0ee627496a249171dc5c53be" class="el">SetProperty</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request, <a href="/docs/native-client/pepper_stable/c/group___enums#ga41975630f0a4c49e47d4a21754f8402d" class="el">PP_URLRequestProperty</a> property, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#ac27a819ffd3ac75686e436f09c8c0ac1" class="el">AppendDataToBody</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request, const void *data, uint32_t len)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#af6edaa0b0f19cb902e5e1d8b3ad2a43b" class="el">AppendFileToBody</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, int64_t start_offset, int64_t number_of_bytes, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> expected_last_modified_time)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_URLRequestInfo` interface is used to create and handle URL requests.

This API is used in conjunction with `PPB_URLLoader`. Refer to `PPB_URLLoader` for further information.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ac27a819ffd3ac75686e436f09c8c0ac1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#ac27a819ffd3ac75686e436f09c8c0ac1" class="el">PPB_URLRequestInfo::AppendDataToBody</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request, const void *data, uint32_t len)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#ac27a819ffd3ac75686e436f09c8c0ac1" class="el" title="AppendDataToBody() appends data to the request body.">AppendDataToBody()</a> appends data to the request body.

A Content-Length request header will be automatically generated.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>request</td><td>A <code>PP_Resource</code> corresponding to a <code>URLRequestInfo</code>.</td></tr><tr class="even"><td>[in]</td><td>data</td><td>A pointer to a buffer holding the data.</td></tr><tr class="odd"><td>[in]</td><td>len</td><td>The length, in bytes, of the data.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if successful, `PP_FALSE` if any of the parameters are invalid.

<span id="af6edaa0b0f19cb902e5e1d8b3ad2a43b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#af6edaa0b0f19cb902e5e1d8b3ad2a43b" class="el">PPB_URLRequestInfo::AppendFileToBody</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, int64_t start_offset, int64_t number_of_bytes, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> expected_last_modified_time)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#af6edaa0b0f19cb902e5e1d8b3ad2a43b" class="el" title="AppendFileToBody() appends a file, to be uploaded, to the request body.">AppendFileToBody()</a> appends a file, to be uploaded, to the request body.

A content-length request header will be automatically generated.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>request</td><td>A <code>PP_Resource</code> corresponding to a <code>URLRequestInfo</code>.</td></tr><tr class="even"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="odd"><td>[in]</td><td>start_offset</td><td>An optional starting point offset within the file.</td></tr><tr class="even"><td>[in]</td><td>number_of_bytes</td><td>An optional number of bytes of the file to be included. If <code>number_of_bytes</code> is -1, then the sub-range to upload extends to the end of the file.</td></tr><tr class="odd"><td>[in]</td><td>expected_last_modified_time</td><td>An optional (non-zero) last modified time stamp used to validate that the file was not modified since the given time before it was uploaded. The upload will fail with an error code of <code>PP_ERROR_FILECHANGED</code> if the file has been modified since the given time. If <code>expected_last_modified_time</code> is 0, then no validation is performed.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if successful, `PP_FALSE` if any of the parameters are invalid.

<span id="af46135ad86d3444f19a8aa30dd5cd202" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#af46135ad86d3444f19a8aa30dd5cd202" class="el">PPB_URLRequestInfo::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#af46135ad86d3444f19a8aa30dd5cd202" class="el" title="Create() creates a new URLRequestInfo object.">Create()</a> creates a new `URLRequestInfo` object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` identifying the `URLRequestInfo` if successful, 0 if the instance is invalid.

<span id="ab23f1a2c86c64b64e806ba85cc5d1817" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#ab23f1a2c86c64b64e806ba85cc5d1817" class="el">PPB_URLRequestInfo::IsURLRequestInfo</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#ab23f1a2c86c64b64e806ba85cc5d1817" class="el" title="IsURLRequestInfo() determines if a resource is a URLRequestInfo.">IsURLRequestInfo()</a> determines if a resource is a `URLRequestInfo`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>URLRequestInfo</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `URLRequestInfo`, `PP_FALSE` if the resource is invalid or some type other than `URLRequestInfo`.

<span id="a47e9163b0ee627496a249171dc5c53be" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#a47e9163b0ee627496a249171dc5c53be" class="el">PPB_URLRequestInfo::SetProperty</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request, <a href="/docs/native-client/pepper_stable/c/group___enums#ga41975630f0a4c49e47d4a21754f8402d" class="el">PP_URLRequestProperty</a> property, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___u_r_l_request_info__1__0#a47e9163b0ee627496a249171dc5c53be" class="el" title="SetProperty() sets a request property.">SetProperty()</a> sets a request property.

The value of the property must be the correct type according to the property being set.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>request</td><td>A <code>PP_Resource</code> corresponding to a <code>URLRequestInfo</code>.</td></tr><tr class="even"><td>[in]</td><td>property</td><td>A <code>PP_URLRequestProperty</code> identifying the property to set.</td></tr><tr class="odd"><td>[in]</td><td>value</td><td>A <code>PP_Var</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if successful, `PP_FALSE` if any of the parameters are invalid.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__url__request__info_8h/" class="el">ppb_url_request_info.h</a>
