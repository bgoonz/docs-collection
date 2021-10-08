---json {"title":"pp::URLLoader Class Reference"} ---

Inheritance diagram for pp::URLLoader:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a22b752c975a9302efa2eceb20ecf92ed" class="el">URLLoader</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a187f5a2c8422c072c2a33bca4de9e39d" class="el">URLLoader</a> (PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a806606ad9e924708b69ae124b4c9d97d" class="el">URLLoader</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#ac590ce0a1992376bcf154c4e3cce1ab2" class="el">URLLoader</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader/" class="el">URLLoader</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el">Open</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info/" class="el">URLRequestInfo</a> &amp;request_info, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a411a79d6e9e5335ce31d187d137420af" class="el">FollowRedirect</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a5e3723f5c5d10394329899f75121faf1" class="el">GetUploadProgress</a> (int64_t *bytes_sent, int64_t *total_bytes_to_be_sent) const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#ada4a1757e7883912626e2ece85ec1c53" class="el">GetDownloadProgress</a> (int64_t *bytes_received, int64_t *total_bytes_to_be_received) const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_response_info/" class="el">URLResponseInfo</a> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a92757c9e1261280cb4f8fd65e0c8df6f" class="el">GetResponseInfo</a> () const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a907697c3c268a68eb3b4ca341aea4812" class="el">ReadResponseBody</a> (void *buffer, int32_t bytes_to_read, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a2e40e91e7a9ffca3f697497abef843f4" class="el">FinishStreamingToFile</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a43858cb7d3c64dc37128434e18a2ea1c" class="el">Close</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader/" class="el" title="URLLoader provides an API for loading URLs.">URLLoader</a> provides an API for loading URLs.

Refer to `ppapi/examples/url_loader/streaming.cc` for an example of how to use this class.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a22b752c975a9302efa2eceb20ecf92ed" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a22b752c975a9302efa2eceb20ecf92ed" class="el">pp::URLLoader::URLLoader</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `URLLoader` object.

<span id="a187f5a2c8422c072c2a33bca4de9e39d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a22b752c975a9302efa2eceb20ecf92ed" class="el">pp::URLLoader::URLLoader</a></td><td>(</td><td>PP_Resource </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used when a `PP_Resource` is provided as a return value whose reference count we need to increment.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>URLLoader</code> resource.</td></tr></tbody></table>

<span id="a806606ad9e924708b69ae124b4c9d97d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a22b752c975a9302efa2eceb20ecf92ed" class="el">pp::URLLoader::URLLoader</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to allocate a new <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader/" class="el" title="URLLoader provides an API for loading URLs.">URLLoader</a> in the browser.

The resulting object will be `is_null` if the allocation failed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="ac590ce0a1992376bcf154c4e3cce1ab2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a22b752c975a9302efa2eceb20ecf92ed" class="el">pp::URLLoader::URLLoader</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader/" class="el">URLLoader</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `URLLoader`.

**Parameters:**  
<table><tbody><tr class="odd"><td>other</td><td>A <code>URLLoader</code> to be copied.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a43858cb7d3c64dc37128434e18a2ea1c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a43858cb7d3c64dc37128434e18a2ea1c" class="el">pp::URLLoader::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

This function is used to cancel any pending IO and close the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader/" class="el" title="URLLoader provides an API for loading URLs.">URLLoader</a> object.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. It is NOT valid to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> again after a call to this function.

**Note:** If the `URLLoader` object is destroyed while it is still open, then it will be implicitly closed so you are not required to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a43858cb7d3c64dc37128434e18a2ea1c" class="el" title="This function is used to cancel any pending IO and close the URLLoader object.">Close()</a>.

<span id="a2e40e91e7a9ffca3f697497abef843f4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a2e40e91e7a9ffca3f697497abef843f4" class="el">pp::URLLoader::FinishStreamingToFile</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

This function is used to wait for the response body to be completely downloaded to the file provided by the GetBodyAsFileRef() in the current `URLResponseInfo`.

This function is only used if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was set on the `URLRequestInfo` passed to <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to run on asynchronous completion. This callback will run when body is downloaded or an error occurs after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a2e40e91e7a9ffca3f697497abef843f4" class="el" title="This function is used to wait for the response body to be completely downloaded to the file provided ...">FinishStreamingToFile()</a> returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing the number of bytes read or an error code from `pp_errors.h`.

<span id="a411a79d6e9e5335ce31d187d137420af" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a411a79d6e9e5335ce31d187d137420af" class="el">pp::URLLoader::FollowRedirect</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

This function can be invoked to follow a redirect after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> completed on receiving redirect headers.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to run on asynchronous completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a411a79d6e9e5335ce31d187d137420af" class="el" title="This function can be invoked to follow a redirect after Open() completed on receiving redirect header...">FollowRedirect()</a>. This callback will run when response headers for the redirect url are received or error occurred. This callback will only run if <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a411a79d6e9e5335ce31d187d137420af" class="el" title="This function can be invoked to follow a redirect after Open() completed on receiving redirect header...">FollowRedirect()</a> returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="ada4a1757e7883912626e2ece85ec1c53" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#ada4a1757e7883912626e2ece85ec1c53" class="el">pp::URLLoader::GetDownloadProgress</a></td><td>(</td><td>int64_t * </td><td><em>bytes_received</em>,</td></tr><tr class="even"><td></td><td></td><td>int64_t * </td><td><em>total_bytes_to_be_received</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td>const</td></tr></tbody></table>

This function returns the current download progress, which is meaningful after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> has been called.

Progress only refers to the response body and does not include the headers.

This data is only available if the `URLRequestInfo` passed to <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> had the `PP_URLREQUESTPROPERTY_REPORTDOWNLOADPROGRESS` property set to PP\_TRUE.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>bytes_received</td><td>The number of bytes received thus far.</td></tr><tr class="even"><td>[in]</td><td>total_bytes_to_be_received</td><td>The total number of bytes to be received. The total bytes to be received may be unknown, in which case <code>total_bytes_to_be_received</code> will be set to -1.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the download progress is available, false if it is not available.

<span id="a92757c9e1261280cb4f8fd65e0c8df6f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_response_info/" class="el">URLResponseInfo</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a92757c9e1261280cb4f8fd65e0c8df6f" class="el">pp::URLLoader::GetResponseInfo</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

This is a function that returns the current `URLResponseInfo` object.

**Returns:**  
A `URLResponseInfo` corresponding to the `URLResponseInfo` if successful, an `is_null` object if the loader is not a valid resource or if <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> has not been called.

<span id="a5e3723f5c5d10394329899f75121faf1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a5e3723f5c5d10394329899f75121faf1" class="el">pp::URLLoader::GetUploadProgress</a></td><td>(</td><td>int64_t * </td><td><em>bytes_sent</em>,</td></tr><tr class="even"><td></td><td></td><td>int64_t * </td><td><em>total_bytes_to_be_sent</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td>const</td></tr></tbody></table>

This function returns the current upload progress (which is only meaningful after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> has been called).

Progress only refers to the request body and does not include the headers.

This data is only available if the `URLRequestInfo` passed to <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> had the `PP_URLREQUESTPROPERTY_REPORTUPLOADPROGRESS` property set to `PP_TRUE`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>bytes_sent</td><td>The number of bytes sent thus far.</td></tr><tr class="even"><td>[in]</td><td>total_bytes_to_be_sent</td><td>The total number of bytes to be sent.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the upload progress is available, false if it is not available.

<span id="afb72f38f30b94a2d5494225e364395b8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el">pp::URLLoader::Open</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info/" class="el">URLRequestInfo</a> &amp; </td><td><em>request_info</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

This function begins loading the `URLRequestInfo`.

The operation completes when response headers are received or when an error occurs. Use <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a92757c9e1261280cb4f8fd65e0c8df6f" class="el" title="This is a function that returns the current URLResponseInfo object.">GetResponseInfo()</a> to access the response headers.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>request_info</td><td>A <code>URLRequestInfo</code> corresponding to a <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_request_info/" class="el" title="URLRequestInfo provides an API for creating and manipulating URL requests.">URLRequestInfo</a>.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to run on asynchronous completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a>. This callback will run when response headers for the url are received or error occurred. This callback will only run if <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#afb72f38f30b94a2d5494225e364395b8" class="el" title="This function begins loading the URLRequestInfo.">Open()</a> returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a907697c3c268a68eb3b4ca341aea4812" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_u_r_l_loader#a907697c3c268a68eb3b4ca341aea4812" class="el">pp::URLLoader::ReadResponseBody</a></td><td>(</td><td>void * </td><td><em>buffer</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>bytes_to_read</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

This function is used to read the response body.

The size of the buffer must be large enough to hold the specified number of bytes to read. This function might perform a partial read.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in,out]</td><td>buffer</td><td>A pointer to the buffer for the response body.</td></tr><tr class="even"><td>[in]</td><td>bytes_to_read</td><td>The number of bytes to read.</td></tr><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to run on asynchronous completion. The callback will run if the bytes (full or partial) are read or an error occurs asynchronously. This callback will run only if this function returns <code>PP_OK_COMPLETIONPENDING</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing the number of bytes read or an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/url__loader_8h/" class="el">url_loader.h</a>
