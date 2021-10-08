---json {"title":"pp::URLRequestInfo Class Reference"} ---

Inheritance diagram for pp::URLRequestInfo:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afd2068e004d90104cdc8472756d6131d" class="el">URLRequestInfo</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a95ae0d638a82bcd18318ae6340735321" class="el">URLRequestInfo</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a6f52f41f98fa5917addd412417b7d5d4" class="el">URLRequestInfo</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info/" class="el">URLRequestInfo</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a679c2c4a7247e0b0985595c24e61cf9c" class="el">SetProperty</a> (PP_URLRequestProperty property, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;value)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#ab16f2efba1f2ddc434e2fc860dcbe900" class="el">AppendDataToBody</a> (const void *data, uint32_t len)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af19afd7e5849e68497f1e4f4b7400995" class="el">AppendFileToBody</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp;file_ref, PP_Time expected_last_modified_time=0)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a1ae72c8ac65a6cd6c174c8df238038fd" class="el">AppendFileRangeToBody</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp;file_ref, int64_t start_offset, int64_t length, PP_Time expected_last_modified_time=0)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a97cdeb02a63922704d47c585a4e2baaf" class="el">SetURL</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;url_string)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#abf4024d196a5139dbca2e95b9ab9bdb6" class="el">SetMethod</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;method_string)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a7105409f66e2eb5595eec0e0ae07c4f6" class="el">SetHeaders</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;headers_string)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a7bd36cb47bc0bc3579292f81581359b8" class="el">SetStreamToFile</a> (bool enable)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a72dd5d3b335a429af0ffa266e338a110" class="el">SetFollowRedirects</a> (bool enable)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aca69393ce31673c1cc5407d15774e310" class="el">SetRecordDownloadProgress</a> (bool enable)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a52cfef994077173627a809bdf891e01a" class="el">SetRecordUploadProgress</a> (bool enable)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af6232dbb546c37c5438fadbada30353a" class="el">SetCustomReferrerURL</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;url)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a39a5000e734a378d412fbe87e38dabe4" class="el">SetAllowCrossOriginRequests</a> (bool enable)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afa23501e503ee1787c4663d74f00d0c4" class="el">SetAllowCredentials</a> (bool enable)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af25b7f4b3aa00af49140921d28fa09c9" class="el">SetCustomContentTransferEncoding</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;content_transfer_encoding)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aa2c6bb4f07e5372bd4b0ed49f9b67990" class="el">SetPrefetchBufferUpperThreshold</a> (int32_t size)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a498fc64ad75ed2d44e33f2fdb3c0cad3" class="el">SetPrefetchBufferLowerThreshold</a> (int32_t size)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aaaf79f763cd4d72c8507c2fa19b7fcaf" class="el">SetCustomUserAgent</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;user_agent)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info/" class="el" title="URLRequestInfo provides an API for creating and manipulating URL requests.">URLRequestInfo</a> provides an API for creating and manipulating URL requests.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="afd2068e004d90104cdc8472756d6131d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afd2068e004d90104cdc8472756d6131d" class="el">pp::URLRequestInfo::URLRequestInfo</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Default constructor.

This constructor creates an `is_null` resource.

<span id="a95ae0d638a82bcd18318ae6340735321" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afd2068e004d90104cdc8472756d6131d" class="el">pp::URLRequestInfo::URLRequestInfo</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to allocate a new `URLLoader` in the browser.

The resulting object will be `is_null` if the allocation failed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a6f52f41f98fa5917addd412417b7d5d4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afd2068e004d90104cdc8472756d6131d" class="el">pp::URLRequestInfo::URLRequestInfo</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info/" class="el">URLRequestInfo</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `URLRequestInfo`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <code>URLRequestInfo</code> to be copied.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="ab16f2efba1f2ddc434e2fc860dcbe900" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#ab16f2efba1f2ddc434e2fc860dcbe900" class="el">pp::URLRequestInfo::AppendDataToBody</a></td><td>(</td><td>const void * </td><td><em>data</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>len</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#ab16f2efba1f2ddc434e2fc860dcbe900" class="el" title="AppendDataToBody() appends data to the request body.">AppendDataToBody()</a> appends data to the request body.

A content-length request header will be automatically generated.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>data</td><td>A pointer to a buffer holding the data.</td></tr><tr class="even"><td>[in]</td><td>len</td><td>The length, in bytes, of the data.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if any of the parameters are invalid.

<span id="a1ae72c8ac65a6cd6c174c8df238038fd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a1ae72c8ac65a6cd6c174c8df238038fd" class="el">pp::URLRequestInfo::AppendFileRangeToBody</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp; </td><td><em>file_ref</em>,</td></tr><tr class="even"><td></td><td></td><td>int64_t </td><td><em>start_offset</em>,</td></tr><tr class="odd"><td></td><td></td><td>int64_t </td><td><em>length</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_Time </td><td><em>expected_last_modified_time</em> = <code>0</code> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a1ae72c8ac65a6cd6c174c8df238038fd" class="el" title="AppendFileRangeToBody() is a pointer to a function used to append part or all of a file...">AppendFileRangeToBody()</a> is a pointer to a function used to append part or all of a file, to be uploaded, to the request body.

A content-length request header will be automatically generated.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>FileRef</code> containing the file reference.</td></tr><tr class="even"><td>[in]</td><td>start_offset</td><td>An optional starting point offset within the file.</td></tr><tr class="odd"><td>[in]</td><td>length</td><td>An optional number of bytes of the file to be included. If the value is -1, then the sub-range to upload extends to the end of the file.</td></tr><tr class="even"><td>[in]</td><td>expected_last_modified_time</td><td>An optional (non-zero) last modified time stamp used to validate that the file was not modified since the given time before it was uploaded. The upload will fail with an error code of <code>PP_ERROR_FILECHANGED</code> if the file has been modified since the given time. If expected_last_modified_time is 0, then no validation is performed.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if any of the parameters are invalid.

<span id="af19afd7e5849e68497f1e4f4b7400995" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af19afd7e5849e68497f1e4f4b7400995" class="el">pp::URLRequestInfo::AppendFileToBody</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp; </td><td><em>file_ref</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_Time </td><td><em>expected_last_modified_time</em> = <code>0</code> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af19afd7e5849e68497f1e4f4b7400995" class="el" title="AppendFileToBody() is used to append an entire file, to be uploaded, to the request body...">AppendFileToBody()</a> is used to append an entire file, to be uploaded, to the request body.

A content-length request header will be automatically generated.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>FileRef</code> containing the file reference.</td></tr><tr class="even"><td>[in]</td><td>expected_last_modified_time</td><td>An optional (non-zero) last modified time stamp used to validate that the file was not modified since the given time before it was uploaded. The upload will fail with an error code of <code>PP_ERROR_FILECHANGED</code> if the file has been modified since the given time. If expected_last_modified_time is 0, then no validation is performed.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if any of the parameters are invalid.

<span id="afa23501e503ee1787c4663d74f00d0c4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afa23501e503ee1787c4663d74f00d0c4" class="el">pp::URLRequestInfo::SetAllowCredentials</a></td><td>(</td><td>bool </td><td><em>enable</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#afa23501e503ee1787c4663d74f00d0c4" class="el" title="SetAllowCredentials() sets the PP_URLREQUESTPROPERTY_ALLOWCREDENTIALS (corresponding to a bool of typ...">SetAllowCredentials()</a> sets the `PP_URLREQUESTPROPERTY_ALLOWCREDENTIALS` (corresponding to a bool of type `PP_VARTYPE_BOOL`).

The default of the property is false. Whether HTTP credentials are sent with cross-origin requests. If false, no credentials are sent with the request and cookies are ignored in the response. If the request is not cross-origin, this property is ignored.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>enable</td><td>A <code>bool</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a39a5000e734a378d412fbe87e38dabe4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a39a5000e734a378d412fbe87e38dabe4" class="el">pp::URLRequestInfo::SetAllowCrossOriginRequests</a></td><td>(</td><td>bool </td><td><em>enable</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a39a5000e734a378d412fbe87e38dabe4" class="el" title="SetAllowCrossOriginRequests() sets the PP_URLREQUESTPROPERTY_ALLOWCROSSORIGINREQUESTS (corresponding ...">SetAllowCrossOriginRequests()</a> sets the `PP_URLREQUESTPROPERTY_ALLOWCROSSORIGINREQUESTS` (corresponding to a bool of type `PP_VARTYPE_BOOL`).

The default of the property is false. Whether cross-origin requests are allowed. Cross-origin requests are made using the CORS (Cross-Origin <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el" title="A reference counted module resource.">Resource</a> Sharing) algorithm to check whether the request should be allowed. For the complete CORS algorithm, refer to the [Cross-Origin Resource Sharing](http://www.w3.org/TR/access-control) documentation.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>enable</td><td>A <code>bool</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="af25b7f4b3aa00af49140921d28fa09c9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af25b7f4b3aa00af49140921d28fa09c9" class="el">pp::URLRequestInfo::SetCustomContentTransferEncoding</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>content_transfer_encoding</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af25b7f4b3aa00af49140921d28fa09c9" class="el" title="SetCustomContentTransferEncoding() sets the PP_URLREQUESTPROPERTY_CUSTOMCONTENTTRANSFERENCODING (corr...">SetCustomContentTransferEncoding()</a> sets the `PP_URLREQUESTPROPERTY_CUSTOMCONTENTTRANSFERENCODING` (corresponding to a string of type `PP_VARTYPE_STRING` or might be set to undefined as `PP_VARTYPE_UNDEFINED`).

Set it to a string to set a custom content-transfer-encoding header (if empty, that header will be omitted), or to undefined to use the default (if any). Only loaders with universal access (only available on trusted implementations) will accept `URLRequestInfo` objects that try to set a custom content transfer encoding; if given to a loader without universal access, `PP_ERROR_BADARGUMENT` will result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>content_transfer_encoding</td><td>A <code>Var</code> containing the property value. To use the default content transfer encoding, set <code>content_transfer_encoding</code> to an undefined <code>Var</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="af6232dbb546c37c5438fadbada30353a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af6232dbb546c37c5438fadbada30353a" class="el">pp::URLRequestInfo::SetCustomReferrerURL</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>url</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#af6232dbb546c37c5438fadbada30353a" class="el" title="SetCustomReferrerURL() sets the PP_URLREQUESTPROPERTY_CUSTOMREFERRERURL (corresponding to a string of...">SetCustomReferrerURL()</a> sets the `PP_URLREQUESTPROPERTY_CUSTOMREFERRERURL` (corresponding to a string of type `PP_VARTYPE_STRING` or might be set to undefined as `PP_VARTYPE_UNDEFINED`).

Set it to a string to set a custom referrer (if empty, the referrer header will be omitted), or to undefined to use the default referrer. Only loaders with universal access (only available on trusted implementations) will accept `URLRequestInfo` objects that try to set a custom referrer; if given to a loader without universal access, `PP_ERROR_BADARGUMENT` will result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>url</td><td>A <code>Var</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="aaaf79f763cd4d72c8507c2fa19b7fcaf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aaaf79f763cd4d72c8507c2fa19b7fcaf" class="el">pp::URLRequestInfo::SetCustomUserAgent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>user_agent</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aaaf79f763cd4d72c8507c2fa19b7fcaf" class="el" title="SetCustomUserAgent() sets the PP_URLREQUESTPROPERTY_CUSTOMUSERAGENT (corresponding to a string of typ...">SetCustomUserAgent()</a> sets the `PP_URLREQUESTPROPERTY_CUSTOMUSERAGENT` (corresponding to a string of type `PP_VARTYPE_STRING` or might be set to undefined as `PP_VARTYPE_UNDEFINED`).

Set it to a string to set a custom user-agent header (if empty, that header will be omitted), or to undefined to use the default. Only loaders with universal access (only available on trusted implementations) will accept `URLRequestInfo` objects that try to set a custom user agent; if given to a loader without universal access, `PP_ERROR_BADARGUMENT` will result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>user_agent</td><td>A <code>Var</code> containing the property value. To use the default user agent, set <code>user_agent</code> to an undefined <code>Var</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a72dd5d3b335a429af0ffa266e338a110" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a72dd5d3b335a429af0ffa266e338a110" class="el">pp::URLRequestInfo::SetFollowRedirects</a></td><td>(</td><td>bool </td><td><em>enable</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a72dd5d3b335a429af0ffa266e338a110" class="el" title="SetFollowRedirects() sets the PP_URLREQUESTPROPERTY_FOLLOWREDIRECT (corresponding to a bool of type P...">SetFollowRedirects()</a> sets the `PP_URLREQUESTPROPERTY_FOLLOWREDIRECT` (corresponding to a bool of type `PP_VARTYPE_BOOL`).

The default of the property is true. Set this value to false if you want to use URLLoader::FollowRedirects() to follow the redirects only after examining redirect headers.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>enable</td><td>A <code>bool</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a7105409f66e2eb5595eec0e0ae07c4f6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a7105409f66e2eb5595eec0e0ae07c4f6" class="el">pp::URLRequestInfo::SetHeaders</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>headers_string</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a7105409f66e2eb5595eec0e0ae07c4f6" class="el" title="SetHeaders() sets the PP_URLREQUESTPROPERTY_HEADERS (corresponding to a   delimited string of type PP...">SetHeaders()</a> sets the `PP_URLREQUESTPROPERTY_HEADERS` (corresponding to a `` delimited string of type `PP_VARTYPE_STRING`) property for the request.

Refer to the &lt;a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html"Header Field Definitions documentation for further information.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>headers_string</td><td>A <code>Var</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="abf4024d196a5139dbca2e95b9ab9bdb6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#abf4024d196a5139dbca2e95b9ab9bdb6" class="el">pp::URLRequestInfo::SetMethod</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>method_string</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#abf4024d196a5139dbca2e95b9ab9bdb6" class="el" title="SetMethod() sets the PP_URLREQUESTPROPERTY_METHOD (corresponding to a string of type PP_VARTYPE_STRIN...">SetMethod()</a> sets the `PP_URLREQUESTPROPERTY_METHOD` (corresponding to a string of type `PP_VARTYPE_STRING`) property for the request.

This string is either a POST or GET. Refer to the [HTTP Methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html) documentation for further information.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>method_string</td><td>A <code>Var</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a498fc64ad75ed2d44e33f2fdb3c0cad3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a498fc64ad75ed2d44e33f2fdb3c0cad3" class="el">pp::URLRequestInfo::SetPrefetchBufferLowerThreshold</a></td><td>(</td><td>int32_t </td><td><em>size</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a498fc64ad75ed2d44e33f2fdb3c0cad3" class="el" title="SetPrefetchBufferLowerThreshold() sets the PP_URLREQUESTPROPERTY_PREFETCHBUFFERLOWERTHRESHOLD (corres...">SetPrefetchBufferLowerThreshold()</a> sets the `PP_URLREQUESTPROPERTY_PREFETCHBUFFERLOWERTHRESHOLD` (corresponding to a integer of type `PP_VARTYPE_INT32`).

The default is not defined and is set by the browser to a value appropriate for the default `PP_URLREQUESTPROPERTY_PREFETCHBUFFERUPPERTHRESHOLD`. Set it to an integer to set a lower threshold for the prefetched buffer of an asynchronous load. When reached, the browser will resume loading if If `PP_URLREQUESTPROPERTY_PREFETCHBUFFERLOWERERTHRESHOLD` had previously been reached. When setting this property, `PP_URLREQUESTPROPERTY_PREFETCHBUFFERUPPERTHRESHOLD` must also be set. Behavior is undefined if the former is &gt;= the latter.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>size</td><td>An int32_t containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="aa2c6bb4f07e5372bd4b0ed49f9b67990" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aa2c6bb4f07e5372bd4b0ed49f9b67990" class="el">pp::URLRequestInfo::SetPrefetchBufferUpperThreshold</a></td><td>(</td><td>int32_t </td><td><em>size</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aa2c6bb4f07e5372bd4b0ed49f9b67990" class="el" title="SetPrefetchBufferUpperThreshold() sets the PP_URLREQUESTPROPERTY_PREFETCHBUFFERUPPERTHRESHOLD (corres...">SetPrefetchBufferUpperThreshold()</a> sets the `PP_URLREQUESTPROPERTY_PREFETCHBUFFERUPPERTHRESHOLD` (corresponding to a integer of type `PP_VARTYPE_INT32`).

The default is not defined and is set by the browser possibly depending on system capabilities. Set it to an integer to set an upper threshold for the prefetched buffer of an asynchronous load. When exceeded, the browser will defer loading until `PP_URLREQUESTPROPERTY_PREFETCHBUFFERLOWERERTHRESHOLD` is hit, at which time it will begin prefetching again. When setting this property, `PP_URLREQUESTPROPERTY_PREFETCHBUFFERLOWERERTHRESHOLD` must also be set. Behavior is undefined if the former is &lt;= the latter.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>size</td><td>An int32_t containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a679c2c4a7247e0b0985595c24e61cf9c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a679c2c4a7247e0b0985595c24e61cf9c" class="el">pp::URLRequestInfo::SetProperty</a></td><td>(</td><td>PP_URLRequestProperty </td><td><em>property</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>value</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a679c2c4a7247e0b0985595c24e61cf9c" class="el" title="SetProperty() sets a request property.">SetProperty()</a> sets a request property.

The value of the property must be the correct type according to the property being set.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>property</td><td>A <code>PP_URLRequestProperty</code> identifying the property to set.</td></tr><tr class="even"><td>[in]</td><td>value</td><td>A <code>Var</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if any of the parameters are invalid.

<span id="aca69393ce31673c1cc5407d15774e310" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aca69393ce31673c1cc5407d15774e310" class="el">pp::URLRequestInfo::SetRecordDownloadProgress</a></td><td>(</td><td>bool </td><td><em>enable</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#aca69393ce31673c1cc5407d15774e310" class="el" title="SetRecordDownloadProgress() sets the PP_URLREQUESTPROPERTY_RECORDDOWNLOADPROGESS (corresponding to a ...">SetRecordDownloadProgress()</a> sets the `PP_URLREQUESTPROPERTY_RECORDDOWNLOADPROGESS` (corresponding to a bool of type `PP_VARTYPE_BOOL`).

The default of the property is false. Set this value to true if you want to be able to poll the download progress using <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#ada4a1757e7883912626e2ece85ec1c53" class="el" title="This function returns the current download progress, which is meaningful after Open() has been called...">URLLoader::GetDownloadProgress()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>enable</td><td>A <code>bool</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a52cfef994077173627a809bdf891e01a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a52cfef994077173627a809bdf891e01a" class="el">pp::URLRequestInfo::SetRecordUploadProgress</a></td><td>(</td><td>bool </td><td><em>enable</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a52cfef994077173627a809bdf891e01a" class="el" title="SetRecordUploadProgress() sets the PP_URLREQUESTPROPERTY_RECORDUPLOADPROGRESS (corresponding to a boo...">SetRecordUploadProgress()</a> sets the `PP_URLREQUESTPROPERTY_RECORDUPLOADPROGRESS` (corresponding to a bool of type `PP_VARTYPE_BOOL`).

The default of the property is false. Set this value to true if you want to be able to poll the upload progress using <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a5e3723f5c5d10394329899f75121faf1" class="el" title="This function returns the current upload progress (which is only meaningful after Open() has been cal...">URLLoader::GetUploadProgress()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>enable</td><td>A <code>bool</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a7bd36cb47bc0bc3579292f81581359b8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a7bd36cb47bc0bc3579292f81581359b8" class="el">pp::URLRequestInfo::SetStreamToFile</a></td><td>(</td><td>bool </td><td><em>enable</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a7bd36cb47bc0bc3579292f81581359b8" class="el" title="SetStreamToFile() sets the PP_URLREQUESTPROPERTY_STREAMTOFILE (corresponding to a bool of type PP_VAR...">SetStreamToFile()</a> sets the `PP_URLREQUESTPROPERTY_STREAMTOFILE` (corresponding to a bool of type `PP_VARTYPE_BOOL`).

The default of the property is false. Set this value to true if you want to download the data to a file. Use URL\_Loader::FinishStreamingToFile() to complete the download.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>enable</td><td>A <code>bool</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

<span id="a97cdeb02a63922704d47c585a4e2baaf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a97cdeb02a63922704d47c585a4e2baaf" class="el">pp::URLRequestInfo::SetURL</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>url_string</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info#a97cdeb02a63922704d47c585a4e2baaf" class="el" title="SetURL() sets the PP_URLREQUESTPROPERTY_URL property for the request.">SetURL()</a> sets the `PP_URLREQUESTPROPERTY_URL` property for the request.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>url_string</td><td>A <code>Var</code> containing the property value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, false if the parameter is invalid.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/url__request__info_8h/" class="el">url_request_info.h</a>
