---json {"title":"PPB_URLLoader Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#ab0ab892fe290ba6449d467db53fd4987" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a70db3876aed119140479e952cb7b1057" class="el">IsURLLoader</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el">Open</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request_info, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a1932cf9779391f4d3efb4582ff49b0a6" class="el">FollowRedirect</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#abb04744dfe5fce11e46c0e7e36c30b65" class="el">GetUploadProgress</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, int64_t *bytes_sent, int64_t *total_bytes_to_be_sent)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a3673506c6e0e23287b7d10e1163a0bbe" class="el">GetDownloadProgress</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, int64_t *bytes_received, int64_t *total_bytes_to_be_received)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a4901dcc43cfdc026e582555974d4d853" class="el">GetResponseInfo</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a92d0f2dc44bc4d087ad0ddca6557fb05" class="el">ReadResponseBody</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, void *buffer, int32_t bytes_to_read, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a187774b3255231fa00ad1fe1364677ff" class="el">FinishStreamingToFile</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#af96116176988be90bdee2619deff6e42" class="el">Close</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The **PPB_URLLoader** interface contains pointers to functions for loading URLs.

The typical steps for loading a URL are:

1.  Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#ab0ab892fe290ba6449d467db53fd4987" class="el" title="Create() creates a new URLLoader object.">Create()</a> to create a URLLoader object.
2.  Create a `URLRequestInfo` object and set properties on it. Refer to `PPB_URLRequestInfo` for further information.
3.  Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> with the `URLRequestInfo` as an argument.
4.  When <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> completes, call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a4901dcc43cfdc026e582555974d4d853" class="el" title="GetResponseInfo() returns the current URLResponseInfo object.">GetResponseInfo()</a> to examine the response headers. Refer to `PPB_URLResponseInfo` for further information.
5.  Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a92d0f2dc44bc4d087ad0ddca6557fb05" class="el" title="ReadResponseBody() is used to read the response body.">ReadResponseBody()</a> to stream the data for the response.

Alternatively, if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was set on the `URLRequestInfo` in step \#2:

- Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a187774b3255231fa00ad1fe1364677ff" class="el" title="FinishStreamingToFile() is used to wait for the response body to be completely downloaded to the file...">FinishStreamingToFile()</a>, after examining the response headers (step \#4), to wait for the downloaded file to be complete.
- Then, access the downloaded file using the GetBodyAsFileRef() function of the `URLResponseInfo` returned in step \#4.

---

## Field Documentation

<span id="af96116176988be90bdee2619deff6e42" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#af96116176988be90bdee2619deff6e42" class="el">PPB_URLLoader::Close</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader)</td></tr></tbody></table>

Close is a pointer to a function used to cancel any pending IO and close the `URLLoader` object.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. It is NOT valid to call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> again after a call to this function.

**Note:** If the `URLLoader` object is destroyed while it is still open, then it will be implicitly closed so you are not required to call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#af96116176988be90bdee2619deff6e42" class="el" title="Close is a pointer to a function used to cancel any pending IO and close the URLLoader object...">Close()</a>.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr></tbody></table>

<span id="ab0ab892fe290ba6449d467db53fd4987" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#ab0ab892fe290ba6449d467db53fd4987" class="el">PPB_URLLoader::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#ab0ab892fe290ba6449d467db53fd4987" class="el" title="Create() creates a new URLLoader object.">Create()</a> creates a new `URLLoader` object.

The `URLLoader` is associated with a particular instance, so that any UI dialogs that need to be shown to the user can be positioned relative to the window containing the instance.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a URLLoader if successful, 0 if the instance is invalid.

<span id="a187774b3255231fa00ad1fe1364677ff" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a187774b3255231fa00ad1fe1364677ff" class="el">PPB_URLLoader::FinishStreamingToFile</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a187774b3255231fa00ad1fe1364677ff" class="el" title="FinishStreamingToFile() is used to wait for the response body to be completely downloaded to the file...">FinishStreamingToFile()</a> is used to wait for the response body to be completely downloaded to the file provided by the GetBodyAsFileRef() in the current `URLResponseInfo`.

This function is only used if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was set on the `URLRequestInfo` passed to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a>.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to run on asynchronous completion. This callback will run when body is downloaded or an error occurs after <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a187774b3255231fa00ad1fe1364677ff" class="el" title="FinishStreamingToFile() is used to wait for the response body to be completely downloaded to the file...">FinishStreamingToFile()</a> returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing the number of bytes read or an error code from `pp_errors.h`.

<span id="a1932cf9779391f4d3efb4582ff49b0a6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a1932cf9779391f4d3efb4582ff49b0a6" class="el">PPB_URLLoader::FollowRedirect</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a1932cf9779391f4d3efb4582ff49b0a6" class="el" title="FollowRedirect() can be invoked to follow a redirect after Open() completed on receiving redirect hea...">FollowRedirect()</a> can be invoked to follow a redirect after <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> completed on receiving redirect headers.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to run on asynchronous completion of <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a1932cf9779391f4d3efb4582ff49b0a6" class="el" title="FollowRedirect() can be invoked to follow a redirect after Open() completed on receiving redirect hea...">FollowRedirect()</a>. This callback will run when response headers for the redirect url are received or error occurred. This callback will only run if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a1932cf9779391f4d3efb4582ff49b0a6" class="el" title="FollowRedirect() can be invoked to follow a redirect after Open() completed on receiving redirect hea...">FollowRedirect()</a> returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="a3673506c6e0e23287b7d10e1163a0bbe" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a3673506c6e0e23287b7d10e1163a0bbe" class="el">PPB_URLLoader::GetDownloadProgress</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, int64_t *bytes_received, int64_t *total_bytes_to_be_received)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a3673506c6e0e23287b7d10e1163a0bbe" class="el" title="GetDownloadProgress() returns the current download progress, which is meaningful after Open() has bee...">GetDownloadProgress()</a> returns the current download progress, which is meaningful after <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> has been called.

Progress only refers to the response body and does not include the headers.

This data is only available if the `URLRequestInfo` passed to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> had the `PP_URLREQUESTPROPERTY_REPORTDOWNLOADPROGRESS` property set to `PP_TRUE`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr><tr class="even"><td>[in]</td><td>bytes_received</td><td>The number of bytes received thus far.</td></tr><tr class="odd"><td>[in]</td><td>total_bytes_to_be_received</td><td>The total number of bytes to be received. The total bytes to be received may be unknown, in which case <code>total_bytes_to_be_received</code> will be set to -1.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the download progress is available, `PP_FALSE` if it is not available.

<span id="a4901dcc43cfdc026e582555974d4d853" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a4901dcc43cfdc026e582555974d4d853" class="el">PPB_URLLoader::GetResponseInfo</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a4901dcc43cfdc026e582555974d4d853" class="el" title="GetResponseInfo() returns the current URLResponseInfo object.">GetResponseInfo()</a> returns the current `URLResponseInfo` object.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to the `URLResponseInfo` if successful, 0 if the loader is not a valid resource or if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> has not been called.

<span id="abb04744dfe5fce11e46c0e7e36c30b65" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#abb04744dfe5fce11e46c0e7e36c30b65" class="el">PPB_URLLoader::GetUploadProgress</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, int64_t *bytes_sent, int64_t *total_bytes_to_be_sent)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#abb04744dfe5fce11e46c0e7e36c30b65" class="el" title="GetUploadProgress() returns the current upload progress (which is meaningful after Open() has been ca...">GetUploadProgress()</a> returns the current upload progress (which is meaningful after <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> has been called).

Progress only refers to the request body and does not include the headers.

This data is only available if the `URLRequestInfo` passed to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> had the `PP_URLREQUESTPROPERTY_REPORTUPLOADPROGRESS` property set to PP_TRUE.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr><tr class="even"><td>[in]</td><td>bytes_sent</td><td>The number of bytes sent thus far.</td></tr><tr class="odd"><td>[in]</td><td>total_bytes_to_be_sent</td><td>The total number of bytes to be sent.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the upload progress is available, `PP_FALSE` if it is not available.

<span id="a70db3876aed119140479e952cb7b1057" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a70db3876aed119140479e952cb7b1057" class="el">PPB_URLLoader::IsURLLoader</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a70db3876aed119140479e952cb7b1057" class="el" title="IsURLLoader() determines if a resource is an URLLoader.">IsURLLoader()</a> determines if a resource is an `URLLoader`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `URLLoader`, `PP_FALSE` if the resource is invalid or some type other than `URLLoader`.

<span id="a5e7fca398c1042e2c81211da80d20e14" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el">PPB_URLLoader::Open</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> request_info, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> begins loading the `URLRequestInfo`.

The operation completes when response headers are received or when an error occurs. Use <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a4901dcc43cfdc026e582555974d4d853" class="el" title="GetResponseInfo() returns the current URLResponseInfo object.">GetResponseInfo()</a> to access the response headers.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr><tr class="even"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>URLRequestInfo</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to run on asynchronous completion of <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a>. This callback will run when response headers for the url are received or error occurred. This callback will only run if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a5e7fca398c1042e2c81211da80d20e14" class="el" title="Open() begins loading the URLRequestInfo.">Open()</a> returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="a92d0f2dc44bc4d087ad0ddca6557fb05" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a92d0f2dc44bc4d087ad0ddca6557fb05" class="el">PPB_URLLoader::ReadResponseBody</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> loader, void *buffer, int32_t bytes_to_read, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_loader__1__0#a92d0f2dc44bc4d087ad0ddca6557fb05" class="el" title="ReadResponseBody() is used to read the response body.">ReadResponseBody()</a> is used to read the response body.

The size of the buffer must be large enough to hold the specified number of bytes to read. This function might perform a partial read.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>loader</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code>.</td></tr><tr class="even"><td>[in,out]</td><td>buffer</td><td>A pointer to the buffer for the response body.</td></tr><tr class="odd"><td>[in]</td><td>bytes_to_read</td><td>The number of bytes to read.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to run on asynchronous completion. The callback will run if the bytes (full or partial) are read or an error occurs asynchronously. This callback will run only if this function returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing the number of bytes read or an error code from `pp_errors.h`.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__url__loader_8h/" class="el">ppb_url_loader.h</a>
