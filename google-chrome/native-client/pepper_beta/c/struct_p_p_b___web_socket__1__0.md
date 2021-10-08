---json {"title":"PPB\_WebSocket Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a220cff8f5aa9f742d2b9cc4ab0e8de1b" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#afa66d61dd10155dd445a13f1c6280a79" class="el">IsWebSocket</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aaff1d1e6f3240e5ce9c772ad80aa38d5" class="el">Connect</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> url, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> protocols[], uint32_t protocol_count, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aa2f3e391713d6097f1d0b2944acab8e8" class="el">Close</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, uint16_t code, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> reason, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el">ReceiveMessage</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> *message, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a05bf8512a7c566f59d527c4a7e92f194" class="el">SendMessage</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> message)</td></tr><tr class="odd"><td style="text-align: right;">uint64_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a45b1ad062facdf02199d1879a55c6299" class="el">GetBufferedAmount</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="even"><td style="text-align: right;">uint16_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#ac0bfae85f51a9e2d5b7fb9660f24968e" class="el">GetCloseCode</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aef09f974f4c6ebc9c23a9161ae7c2945" class="el">GetCloseReason</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#afaf7ee244ffe9aae026b7fbca7a6eff4" class="el">GetCloseWasClean</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a71d0d4a01f5e11520d56b668ff178c20" class="el">GetExtensions</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a0f5f83152a917998a23e0a10b3a0fa4a" class="el">GetProtocol</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#gade61cdf6a7470769b571925694d91a89" class="el">PP_WebSocketReadyState</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#abd52bebffd4153294734168663057ecc" class="el">GetReadyState</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a130ed98f0ebabb614b6637ca6f800e13" class="el">GetURL</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_WebSocket` interface provides bi-directional, full-duplex, communications over a single TCP socket.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="aa2f3e391713d6097f1d0b2944acab8e8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aa2f3e391713d6097f1d0b2944acab8e8" class="el">PPB_WebSocket::Close</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, uint16_t code, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> reason, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aa2f3e391713d6097f1d0b2944acab8e8" class="el" title="Close() closes the specified WebSocket connection by specifying code and reason.">Close()</a> closes the specified WebSocket connection by specifying `code` and `reason`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr><tr class="even"><td>[in]</td><td>code</td><td>The WebSocket close code. This is ignored if it is <code>PP_WEBSOCKETSTATUSCODE_NOT_SPECIFIED</code>. <code>PP_WEBSOCKETSTATUSCODE_NORMAL_CLOSURE</code> must be used for the usual case. To indicate some specific error cases, codes in the range <code>PP_WEBSOCKETSTATUSCODE_USER_REGISTERED_MIN</code> to <code>PP_WEBSOCKETSTATUSCODE_USER_REGISTERED_MAX</code>, and in the range <code>PP_WEBSOCKETSTATUSCODE_USER_PRIVATE_MIN</code> to <code>PP_WEBSOCKETSTATUSCODE_USER_PRIVATE_MAX</code> are available.</td></tr><tr class="odd"><td>[in]</td><td>reason</td><td>A <code>PP_Var</code> representing the WebSocket close reason. This is ignored if it is <code>PP_VARTYPE_UNDEFINED</code>. Otherwise, its <code>PP_VarType</code> must be <code>PP_VARTYPE_STRING</code>.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> called when the connection is closed or an error occurs in closing the connection.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_BADARGUMENT` if `reason` contains an invalid character as a UTF-8 string, or is longer than 123 bytes. `PP_ERROR_BADARGUMENT` corresponds to a JavaScript SyntaxError in the WebSocket API specification. Returns `PP_ERROR_NOACCESS` if the code is not an integer equal to 1000 or in the range 3000 to 4999. `PP_ERROR_NOACCESS` corresponds to an InvalidAccessError in the WebSocket API specification. Returns `PP_ERROR_INPROGRESS` if a previous call to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aa2f3e391713d6097f1d0b2944acab8e8" class="el" title="Close() closes the specified WebSocket connection by specifying code and reason.">Close()</a> is not finished.

<span id="aaff1d1e6f3240e5ce9c772ad80aa38d5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aaff1d1e6f3240e5ce9c772ad80aa38d5" class="el">PPB_WebSocket::Connect</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> url, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> protocols[], uint32_t protocol_count, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aaff1d1e6f3240e5ce9c772ad80aa38d5" class="el" title="Connect() connects to the specified WebSocket server.">Connect()</a> connects to the specified WebSocket server.

You can call this function once for a `web_socket`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr><tr class="even"><td>[in]</td><td>url</td><td>A <code>PP_Var</code> representing a WebSocket server URL. The <code>PP_VarType</code> must be <code>PP_VARTYPE_STRING</code>.</td></tr><tr class="odd"><td>[in]</td><td>protocols</td><td>A pointer to an array of <code>PP_Var</code> specifying sub-protocols. Each <code>PP_Var</code> represents one sub-protocol and its <code>PP_VarType</code> must be <code>PP_VARTYPE_STRING</code>. This argument can be null only if <code>protocol_count</code> is 0.</td></tr><tr class="even"><td>[in]</td><td>protocol_count</td><td>The number of sub-protocols in <code>protocols</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> called when a connection is established or an error occurs in establishing connection.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_BADARGUMENT` if the specified `url`, or `protocols` contain an invalid string as defined in the WebSocket API specification. `PP_ERROR_BADARGUMENT` corresponds to a SyntaxError in the WebSocket API specification. Returns `PP_ERROR_NOACCESS` if the protocol specified in the `url` is not a secure protocol, but the origin of the caller has a secure scheme. Also returns `PP_ERROR_NOACCESS` if the port specified in the `url` is a port that the user agent is configured to block access to because it is a well-known port like SMTP. `PP_ERROR_NOACCESS` corresponds to a SecurityError of the specification. Returns `PP_ERROR_INPROGRESS` if this is not the first call to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aaff1d1e6f3240e5ce9c772ad80aa38d5" class="el" title="Connect() connects to the specified WebSocket server.">Connect()</a>.

<span id="a220cff8f5aa9f742d2b9cc4ab0e8de1b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a220cff8f5aa9f742d2b9cc4ab0e8de1b" class="el">PPB_WebSocket::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a220cff8f5aa9f742d2b9cc4ab0e8de1b" class="el" title="Create() creates a WebSocket instance.">Create()</a> creates a WebSocket instance.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a WebSocket if successful.

<span id="a45b1ad062facdf02199d1879a55c6299" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint64_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a45b1ad062facdf02199d1879a55c6299" class="el">PPB_WebSocket::GetBufferedAmount</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a45b1ad062facdf02199d1879a55c6299" class="el" title="GetBufferedAmount() returns the number of bytes of text and binary messages that have been queued for...">GetBufferedAmount()</a> returns the number of bytes of text and binary messages that have been queued for the WebSocket connection to send, but have not been transmitted to the network yet.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns the number of bytes.

<span id="ac0bfae85f51a9e2d5b7fb9660f24968e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint16_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#ac0bfae85f51a9e2d5b7fb9660f24968e" class="el">PPB_WebSocket::GetCloseCode</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#ac0bfae85f51a9e2d5b7fb9660f24968e" class="el" title="GetCloseCode() returns the connection close code for the WebSocket connection.">GetCloseCode()</a> returns the connection close code for the WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns 0 if called before the close code is set.

<span id="aef09f974f4c6ebc9c23a9161ae7c2945" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aef09f974f4c6ebc9c23a9161ae7c2945" class="el">PPB_WebSocket::GetCloseReason</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aef09f974f4c6ebc9c23a9161ae7c2945" class="el" title="GetCloseReason() returns the connection close reason for the WebSocket connection.">GetCloseReason()</a> returns the connection close reason for the WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns a `PP_VARTYPE_STRING` var. If called before the close reason is set, the return value contains an empty string. Returns a `PP_VARTYPE_UNDEFINED` if called on an invalid resource.

<span id="afaf7ee244ffe9aae026b7fbca7a6eff4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#afaf7ee244ffe9aae026b7fbca7a6eff4" class="el">PPB_WebSocket::GetCloseWasClean</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#afaf7ee244ffe9aae026b7fbca7a6eff4" class="el" title="GetCloseWasClean() returns if the connection was closed cleanly for the specified WebSocket connectio...">GetCloseWasClean()</a> returns if the connection was closed cleanly for the specified WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_FALSE` if called before the connection is closed, called on an invalid resource, or closed for abnormal reasons. Otherwise, returns `PP_TRUE` if the connection was closed cleanly.

<span id="a71d0d4a01f5e11520d56b668ff178c20" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a71d0d4a01f5e11520d56b668ff178c20" class="el">PPB_WebSocket::GetExtensions</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a71d0d4a01f5e11520d56b668ff178c20" class="el" title="GetExtensions() returns the extensions selected by the server for the specified WebSocket connection...">GetExtensions()</a> returns the extensions selected by the server for the specified WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns a `PP_VARTYPE_STRING` var. If called before the connection is established, the var's data is an empty string. Returns a `PP_VARTYPE_UNDEFINED` if called on an invalid resource.

<span id="a0f5f83152a917998a23e0a10b3a0fa4a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a0f5f83152a917998a23e0a10b3a0fa4a" class="el">PPB_WebSocket::GetProtocol</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a0f5f83152a917998a23e0a10b3a0fa4a" class="el" title="GetProtocol() returns the sub-protocol chosen by the server for the specified WebSocket connection...">GetProtocol()</a> returns the sub-protocol chosen by the server for the specified WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns a `PP_VARTYPE_STRING` var. If called before the connection is established, the var contains the empty string. Returns a `PP_VARTYPE_UNDEFINED` if called on an invalid resource.

<span id="abd52bebffd4153294734168663057ecc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#gade61cdf6a7470769b571925694d91a89" class="el">PP_WebSocketReadyState</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#abd52bebffd4153294734168663057ecc" class="el">PPB_WebSocket::GetReadyState</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#abd52bebffd4153294734168663057ecc" class="el" title="GetReadyState() returns the ready state of the specified WebSocket connection.">GetReadyState()</a> returns the ready state of the specified WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_WEBSOCKETREADYSTATE_INVALID` if called before <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aaff1d1e6f3240e5ce9c772ad80aa38d5" class="el" title="Connect() connects to the specified WebSocket server.">Connect()</a> is called, or if this function is called on an invalid resource.

<span id="a130ed98f0ebabb614b6637ca6f800e13" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a130ed98f0ebabb614b6637ca6f800e13" class="el">PPB_WebSocket::GetURL</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a130ed98f0ebabb614b6637ca6f800e13" class="el" title="GetURL() returns the URL associated with specified WebSocket connection.">GetURL()</a> returns the URL associated with specified WebSocket connection.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns a `PP_VARTYPE_STRING` var. If called before the connection is established, the var contains the empty string. Returns a `PP_VARTYPE_UNDEFINED` if this function is called on an invalid resource.

<span id="afa66d61dd10155dd445a13f1c6280a79" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#afa66d61dd10155dd445a13f1c6280a79" class="el">PPB_WebSocket::IsWebSocket</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#afa66d61dd10155dd445a13f1c6280a79" class="el" title="IsWebSocket() determines if the provided resource is a WebSocket instance.">IsWebSocket()</a> determines if the provided `resource` is a WebSocket instance.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` if `resource` is a `PPB_WebSocket`, `PP_FALSE` if the `resource` is invalid or some type other than `PPB_WebSocket`.

<span id="aedebd5c21bc451e6b99ea1b2de884122" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el">PPB_WebSocket::ReceiveMessage</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> *message, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el" title="ReceiveMessage() receives a message from the WebSocket server.">ReceiveMessage()</a> receives a message from the WebSocket server.

This interface only returns a single message. That is, this interface must be called at least N times to receive N messages, no matter the size of each message.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr><tr class="even"><td>[out]</td><td>message</td><td>The received message is copied to provided <code>message</code>. The <code>message</code> must remain valid until <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el" title="ReceiveMessage() receives a message from the WebSocket server.">ReceiveMessage()</a> completes. Its received <code>PP_VarType</code> will be <code>PP_VARTYPE_STRING</code> or <code>PP_VARTYPE_ARRAY_BUFFER</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> called when <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el" title="ReceiveMessage() receives a message from the WebSocket server.">ReceiveMessage()</a> completes. This callback is ignored if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el" title="ReceiveMessage() receives a message from the WebSocket server.">ReceiveMessage()</a> completes synchronously and returns <code>PP_OK</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. If an error is detected or connection is closed, <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el" title="ReceiveMessage() receives a message from the WebSocket server.">ReceiveMessage()</a> returns `PP_ERROR_FAILED` after all buffered messages are received. Until buffered message become empty, <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#aedebd5c21bc451e6b99ea1b2de884122" class="el" title="ReceiveMessage() receives a message from the WebSocket server.">ReceiveMessage()</a> continues to return `PP_OK` as if connection is still established without errors.

<span id="a05bf8512a7c566f59d527c4a7e92f194" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a05bf8512a7c566f59d527c4a7e92f194" class="el">PPB_WebSocket::SendMessage</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> web_socket, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> message)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#a05bf8512a7c566f59d527c4a7e92f194" class="el" title="SendMessage() sends a message to the WebSocket server.">SendMessage()</a> sends a message to the WebSocket server.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>web_socket</td><td>A <code>PP_Resource</code> corresponding to a WebSocket.</td></tr><tr class="even"><td>[in]</td><td>message</td><td>A message to send. The message is copied to an internal buffer, so the caller can free <code>message</code> safely after returning from the function. Its sent <code>PP_VarType</code> must be <code>PP_VARTYPE_STRING</code> or <code>PP_VARTYPE_ARRAY_BUFFER</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_FAILED` if the ReadyState is `PP_WEBSOCKETREADYSTATE_CONNECTING`. `PP_ERROR_FAILED` corresponds to a JavaScript InvalidStateError in the WebSocket API specification. Returns `PP_ERROR_BADARGUMENT` if the provided `message` contains an invalid character as a UTF-8 string. `PP_ERROR_BADARGUMENT` corresponds to a JavaScript SyntaxError in the WebSocket API specification. Otherwise, returns `PP_OK`, which doesn't necessarily mean that the server received the message.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h/" class="el">ppb_websocket.h</a>
