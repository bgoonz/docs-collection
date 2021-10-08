---json {"title":"PPB\_TCPSocket Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a889fb7b3263304ef5057cd541a197312" class="el">Create</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a5355f00c99cd7fb9563eb9987a73a3c5" class="el">IsTCPSocket</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#aeb78a27cd902e93c557a0015812237f9" class="el">Bind</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#ad107b3d5541072b14e2b8acc836b3939" class="el">Connect</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a5916aca75506efccaa2905bb758421a2" class="el">GetLocalAddress</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#abb362a218eef33522ea9b508d482a015" class="el">GetRemoteAddress</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#aac72febd03fe6e6e5adafcfd2b24a8b1" class="el">Read</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, char *buffer, int32_t bytes_to_read, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#ac798b76c497f00231bd592ebdb584042" class="el">Write</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, const char *buffer, int32_t bytes_to_write, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#acffd2f5faddf094ccd9638128167259d" class="el">Listen</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, int32_t backlog, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#ad9b1525032df05cf446f7d7c27c6145a" class="el">Accept</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *accepted_tcp_socket, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a6ca1887389cfaf357054e016adf7fc77" class="el">Close</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#aa42176651e65cf589fc310c0b2ed5751" class="el">SetOption</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___enums#ga1557c0bbce8739a3418e6027a9c44e12" class="el">PP_TCPSocket_Option</a> name, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> value, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_TCPSocket` interface provides TCP socket operations.

Permissions: Apps permission `socket` with subrule `tcp-connect` is required for `Connect()`; subrule `tcp-listen` is required for `Listen()`. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ad9b1525032df05cf446f7d7c27c6145a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#ad9b1525032df05cf446f7d7c27c6145a" class="el">PPB_TCPSocket::Accept</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *accepted_tcp_socket, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Accepts a connection.

The socket must be listening.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[out]</td><td>accepted_tcp_socket</td><td>Stores the accepted TCP socket on success.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_CONNECTION_ABORTED`: A connection has been aborted.

<span id="aeb78a27cd902e93c557a0015812237f9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#aeb78a27cd902e93c557a0015812237f9" class="el">PPB_TCPSocket::Bind</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Binds the socket to the given address.

The socket must not be bound.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[in]</td><td>addr</td><td>A <code>PPB_NetAddress</code> resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_ADDRESS_IN_USE`: the address is already in use.
-   `PP_ERROR_ADDRESS_INVALID`: the address is invalid.

<span id="a6ca1887389cfaf357054e016adf7fc77" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a6ca1887389cfaf357054e016adf7fc77" class="el">PPB_TCPSocket::Close</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket)</td></tr></tbody></table>

Cancels all pending operations and closes the socket.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. After a call to this method, no output buffer pointers passed into previous `Read()` or `Accept()` calls will be accessed. It is not valid to call `Connect()` or `Listen()` again.

The socket is implicitly closed if it is destroyed, so you are not required to call this method.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr></tbody></table>

<span id="ad107b3d5541072b14e2b8acc836b3939" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#ad107b3d5541072b14e2b8acc836b3939" class="el">PPB_TCPSocket::Connect</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Connects the socket to the given address.

The socket must not be listening. Binding the socket beforehand is optional.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[in]</td><td>addr</td><td>A <code>PPB_NetAddress</code> resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_NOACCESS`: the caller doesn't have required permissions.
-   `PP_ERROR_ADDRESS_UNREACHABLE`: `addr` is unreachable.
-   `PP_ERROR_CONNECTION_REFUSED`: the connection attempt was refused.
-   `PP_ERROR_CONNECTION_FAILED`: the connection attempt failed.
-   `PP_ERROR_CONNECTION_TIMEDOUT`: the connection attempt timed out.

Since version 1.1, if the socket is listening/connected or has a pending listen/connect request, `Connect()` will fail without starting a connection attempt; otherwise, any failure during the connection attempt will cause the socket to be closed.

<span id="a889fb7b3263304ef5057cd541a197312" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a889fb7b3263304ef5057cd541a197312" class="el">PPB_TCPSocket::Create</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a TCP socket resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a TCP socket or 0 on failure.

<span id="a5916aca75506efccaa2905bb758421a2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a5916aca75506efccaa2905bb758421a2" class="el">PPB_TCPSocket::GetLocalAddress</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket)</td></tr></tbody></table>

Gets the local address of the socket, if it is bound.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PPB_NetAddress` resource on success or 0 on failure.

<span id="abb362a218eef33522ea9b508d482a015" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#abb362a218eef33522ea9b508d482a015" class="el">PPB_TCPSocket::GetRemoteAddress</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket)</td></tr></tbody></table>

Gets the remote address of the socket, if it is connected.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PPB_NetAddress` resource on success or 0 on failure.

<span id="a5355f00c99cd7fb9563eb9987a73a3c5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#a5355f00c99cd7fb9563eb9987a73a3c5" class="el">PPB_TCPSocket::IsTCPSocket</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a given resource is a TCP socket.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> to check.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the input is a `PPB_TCPSocket` resource; `PP_FALSE` otherwise.

<span id="acffd2f5faddf094ccd9638128167259d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#acffd2f5faddf094ccd9638128167259d" class="el">PPB_TCPSocket::Listen</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, int32_t backlog, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Starts listening.

The socket must be bound and not connected.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[in]</td><td>backlog</td><td>A hint to determine the maximum length to which the queue of pending connections may grow.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_NOACCESS`: the caller doesn't have required permissions.
-   `PP_ERROR_ADDRESS_IN_USE`: Another socket is already listening on the same port.

<span id="aac72febd03fe6e6e5adafcfd2b24a8b1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#aac72febd03fe6e6e5adafcfd2b24a8b1" class="el">PPB_TCPSocket::Read</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, char *buffer, int32_t bytes_to_read, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Reads data from the socket.

The socket must be connected. It may perform a partial read.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[out]</td><td>buffer</td><td>The buffer to store the received data on success. It must be at least as large as <code>bytes_to_read</code>.</td></tr><tr class="odd"><td>[in]</td><td>bytes_to_read</td><td>The number of bytes to read.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A non-negative number on success to indicate how many bytes have been read, 0 means that end-of-file was reached; otherwise, an error code from `pp_errors.h`.

<span id="aa42176651e65cf589fc310c0b2ed5751" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#aa42176651e65cf589fc310c0b2ed5751" class="el">PPB_TCPSocket::SetOption</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, <a href="/docs/native-client/pepper_dev/c/group___enums#ga1557c0bbce8739a3418e6027a9c44e12" class="el">PP_TCPSocket_Option</a> name, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> value, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Sets a socket option on the TCP socket.

Please see the `PP_TCPSocket_Option` description for option names, value types and allowed values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[in]</td><td>name</td><td>The option to set.</td></tr><tr class="odd"><td>[in]</td><td>value</td><td>The option value to set.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="ac798b76c497f00231bd592ebdb584042" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___t_c_p_socket__1__2#ac798b76c497f00231bd592ebdb584042" class="el">PPB_TCPSocket::Write</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> tcp_socket, const char *buffer, int32_t bytes_to_write, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Writes data to the socket.

The socket must be connected. It may perform a partial write.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>tcp_socket</td><td>A <code>PP_Resource</code> corresponding to a TCP socket.</td></tr><tr class="even"><td>[in]</td><td>buffer</td><td>The buffer containing the data to write.</td></tr><tr class="odd"><td>[in]</td><td>bytes_to_write</td><td>The number of bytes to write.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A non-negative number on success to indicate how many bytes have been written; otherwise, an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__tcp__socket_8h/" class="el">ppb_tcp_socket.h</a>
