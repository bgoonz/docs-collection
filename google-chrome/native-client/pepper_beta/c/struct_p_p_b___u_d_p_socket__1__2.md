---json {"title":"PPB_UDPSocket Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#abe2a2dc1170e9ea60f63656152b7b3ce" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a955e5c21c99668dc80fa54f8a12119de" class="el">IsUDPSocket</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a07dad506a240b35c8ceb5dcd5f9e12ce" class="el">Bind</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a2195768a7698776e83298b86b9670fa4" class="el">GetBoundAddress</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#afaf246c84eb76e033ee8794faa997af5" class="el">RecvFrom</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, char *buffer, int32_t num_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#ae6764f319a9af980dbb1ba5625a417be" class="el">SendTo</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, const char *buffer, int32_t num_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#ae27417e3577d5dbb3a88efa7867df7b9" class="el">Close</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#ac0656c7002acbb1d9c4b17fb679f63df" class="el">SetOption</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___enums#ga1a8472fa3e7150615c45c38fa8c12ce2" class="el">PP_UDPSocket_Option</a> name, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> value, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a3012f1d7f38fff9d45925e05850cfdb0" class="el">JoinGroup</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> group, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a5e46591a3a742ee1a9e3de81a76624d3" class="el">LeaveGroup</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> group, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `PPB_UDPSocket` interface provides UDP socket operations.

Permissions: Apps permission `socket` with subrule `udp-bind` is required for `Bind()`; subrule `udp-send-to` is required for `SendTo()`. For more details about network communication permissions, please see: [/apps/app_network.html](/apps/app_network.html)

---

## Field Documentation

<span id="a07dad506a240b35c8ceb5dcd5f9e12ce" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a07dad506a240b35c8ceb5dcd5f9e12ce" class="el">PPB_UDPSocket::Bind</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Binds the socket to the given address.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr><tr class="even"><td>[in]</td><td>addr</td><td>A <code>PPB_NetAddress</code> resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`. `PP_ERROR_NOACCESS` will be returned if the caller doesn't have required permissions. `PP_ERROR_ADDRESS_IN_USE` will be returned if the address is already in use.

<span id="ae27417e3577d5dbb3a88efa7867df7b9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#ae27417e3577d5dbb3a88efa7867df7b9" class="el">PPB_UDPSocket::Close</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket)</td></tr></tbody></table>

Cancels all pending reads and writes, and closes the socket.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. After a call to this method, no output parameters passed into previous `RecvFrom()` calls will be accessed. It is not valid to call `Bind()` again.

The socket is implicitly closed if it is destroyed, so you are not required to call this method.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr></tbody></table>

<span id="abe2a2dc1170e9ea60f63656152b7b3ce" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#abe2a2dc1170e9ea60f63656152b7b3ce" class="el">PPB_UDPSocket::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a UDP socket resource.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a UDP socket or 0 on failure.

<span id="a2195768a7698776e83298b86b9670fa4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a2195768a7698776e83298b86b9670fa4" class="el">PPB_UDPSocket::GetBoundAddress</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket)</td></tr></tbody></table>

Gets the address that the socket is bound to.

The socket must be bound.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PPB_NetAddress` resource on success or 0 on failure.

<span id="a955e5c21c99668dc80fa54f8a12119de" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a955e5c21c99668dc80fa54f8a12119de" class="el">PPB_UDPSocket::IsUDPSocket</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a given resource is a UDP socket.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> to check.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the input is a `PPB_UDPSocket` resource; `PP_FALSE` otherwise.

<span id="a3012f1d7f38fff9d45925e05850cfdb0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a3012f1d7f38fff9d45925e05850cfdb0" class="el">PPB_UDPSocket::JoinGroup</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> group, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Joins the multicast group with address specified by `group` parameter, which is expected to be a `PPB_NetAddress` object.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr><tr class="even"><td>[in]</td><td>group</td><td>A <code>PP_Resource</code> corresponding to the network address of the multicast group.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="a5e46591a3a742ee1a9e3de81a76624d3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#a5e46591a3a742ee1a9e3de81a76624d3" class="el">PPB_UDPSocket::LeaveGroup</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> group, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Leaves the multicast group with address specified by `group` parameter, which is expected to be a `PPB_NetAddress` object.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr><tr class="even"><td>[in]</td><td>group</td><td>A <code>PP_Resource</code> corresponding to the network address of the multicast group.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="afaf246c84eb76e033ee8794faa997af5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#afaf246c84eb76e033ee8794faa997af5" class="el">PPB_UDPSocket::RecvFrom</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, char *buffer, int32_t num_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Receives data from the socket and stores the source address.

The socket must be bound.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr><tr class="even"><td>[out]</td><td>buffer</td><td>The buffer to store the received data on success. It must be at least as large as <code>num_bytes</code>.</td></tr><tr class="odd"><td>[in]</td><td>num_bytes</td><td>The number of bytes to receive.</td></tr><tr class="even"><td>[out]</td><td>addr</td><td>A <code>PPB_NetAddress</code> resource to store the source address on success.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A non-negative number on success to indicate how many bytes have been received; otherwise, an error code from `pp_errors.h`.

<span id="ae6764f319a9af980dbb1ba5625a417be" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#ae6764f319a9af980dbb1ba5625a417be" class="el">PPB_UDPSocket::SendTo</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, const char *buffer, int32_t num_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Sends data to a specific destination.

The socket must be bound.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr><tr class="even"><td>[in]</td><td>buffer</td><td>The buffer containing the data to send.</td></tr><tr class="odd"><td>[in]</td><td>num_bytes</td><td>The number of bytes to send.</td></tr><tr class="even"><td>[in]</td><td>addr</td><td>A <code>PPB_NetAddress</code> resource holding the destination address.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A non-negative number on success to indicate how many bytes have been sent; otherwise, an error code from `pp_errors.h`. `PP_ERROR_NOACCESS` will be returned if the caller doesn't have required permissions. `PP_ERROR_INPROGRESS` will be returned if the socket is busy sending. The caller should wait until a pending send completes before retrying.

<span id="ac0656c7002acbb1d9c4b17fb679f63df" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_d_p_socket__1__2#ac0656c7002acbb1d9c4b17fb679f63df" class="el">PPB_UDPSocket::SetOption</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> udp_socket, <a href="/docs/native-client/pepper_beta/c/group___enums#ga1a8472fa3e7150615c45c38fa8c12ce2" class="el">PP_UDPSocket_Option</a> name, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> value, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Sets a socket option on the UDP socket.

Please see the `PP_UDPSocket_Option` description for option names, value types and allowed values.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>udp_socket</td><td>A <code>PP_Resource</code> corresponding to a UDP socket.</td></tr><tr class="even"><td>[in]</td><td>name</td><td>The option to set.</td></tr><tr class="odd"><td>[in]</td><td>value</td><td>The option value to set.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__udp__socket_8h/" class="el">ppb_udp_socket.h</a>
