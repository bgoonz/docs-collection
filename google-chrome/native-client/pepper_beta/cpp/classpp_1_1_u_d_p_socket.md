---json {"title":"pp::UDPSocket Class Reference"} ---

Inheritance diagram for pp::UDPSocket:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aba8a6c1b62bc3c8883296a9445131da5" class="el">UDPSocket</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aa2b691e69558b5d7d43a91bd61550b2c" class="el">UDPSocket</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#ac824fba529205830d0c2c54a21ed449b" class="el">UDPSocket</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a88fb9b2ed5c7726d0f4bf55948ef5be2" class="el">UDPSocket</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket/" class="el">UDPSocket</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a5fe143ce6bcaf1ac67748325acde1c50" class="el">~UDPSocket</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket/" class="el">UDPSocket</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a72112f67b757bbbfaaf67ae3cfe2f602" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket/" class="el">UDPSocket</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a5f9b7edf613c59091eb66dc074d7f7c1" class="el">Bind</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;addr, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#ae98c9decb3c3ea4ba1006943577b684d" class="el">GetBoundAddress</a> ()</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a496b1742a9b4ef27d23c9b4b96b9fd0a" class="el">RecvFrom</a> (char *buffer, int32_t num_bytes, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &gt; &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a657309cd3bc38cf28e25f4c71190d1a0" class="el">SendTo</a> (const char *buffer, int32_t num_bytes, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;addr, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aa1f03d8d0e7ef59c40724e2691f165f2" class="el">Close</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a5ff91fd2342e534b57980c0c2e414251" class="el">SetOption</a> (PP_UDPSocket_Option name, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;value, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a51bdeaeeef690d741850e7d691fa479d" class="el">JoinGroup</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;group, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a7efaa9eda9e58ffbd5f6b5c5c9e8b38c" class="el">LeaveGroup</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;group, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> callback)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a76a2e93f2fa01d0dce8d8216d53b4f44" class="el">IsAvailable</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `UDPSocket` class provides UDP socket operations.

Permissions: Apps permission `socket` with subrule `udp-bind` is required for `Bind()`; subrule `udp-send-to` is required for `SendTo()`. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="aba8a6c1b62bc3c8883296a9445131da5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aba8a6c1b62bc3c8883296a9445131da5" class="el">pp::UDPSocket::UDPSocket</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `UDPSocket` object.

<span id="aa2b691e69558b5d7d43a91bd61550b2c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aba8a6c1b62bc3c8883296a9445131da5" class="el">pp::UDPSocket::UDPSocket</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a `UDPSocket` object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="ac824fba529205830d0c2c54a21ed449b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aba8a6c1b62bc3c8883296a9445131da5" class="el">pp::UDPSocket::UDPSocket</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_UDPSocket</code> resource.</td></tr></tbody></table>

<span id="a88fb9b2ed5c7726d0f4bf55948ef5be2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aba8a6c1b62bc3c8883296a9445131da5" class="el">pp::UDPSocket::UDPSocket</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket/" class="el">UDPSocket</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `UDPSocket`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>UDPSocket</code>.</td></tr></tbody></table>

<span id="a5fe143ce6bcaf1ac67748325acde1c50" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a5fe143ce6bcaf1ac67748325acde1c50" class="el">pp::UDPSocket::~UDPSocket</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

The destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a5f9b7edf613c59091eb66dc074d7f7c1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a5f9b7edf613c59091eb66dc074d7f7c1" class="el">pp::UDPSocket::Bind</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>addr</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Binds the socket to the given address.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>NetAddress</code> object.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. `PP_ERROR_NOACCESS` will be returned if the caller doesn't have required permissions. `PP_ERROR_ADDRESS_IN_USE` will be returned if the address is already in use.

<span id="aa1f03d8d0e7ef59c40724e2691f165f2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#aa1f03d8d0e7ef59c40724e2691f165f2" class="el">pp::UDPSocket::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Cancels all pending reads and writes, and closes the socket.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. After a call to this method, no output paramters passed into previous `RecvFrom()` calls will be accessed. It is not valid to call `Bind()` again.

The socket is implicitly closed if it is destroyed, so you are not required to call this method.

<span id="ae98c9decb3c3ea4ba1006943577b684d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#ae98c9decb3c3ea4ba1006943577b684d" class="el">pp::UDPSocket::GetBoundAddress</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Get the address that the socket is bound to.

The socket must be bound.

**Returns:**  
A `NetAddress` object. The object will be null (i.e., <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> returns true) on failure.

<span id="a76a2e93f2fa01d0dce8d8216d53b4f44" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a76a2e93f2fa01d0dce8d8216d53b4f44" class="el">pp::UDPSocket::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Static function for determining whether the browser supports the `PPB_UDPSocket` interface.

**Returns:**  
true if the interface is available, false otherwise.

<span id="a51bdeaeeef690d741850e7d691fa479d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a51bdeaeeef690d741850e7d691fa479d" class="el">pp::UDPSocket::JoinGroup</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>group</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Joins the multicast group with address specified by `group` parameter, which is expected to be a `NetAddress` object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>group</td><td>A <code>NetAddress</code> corresponding to the network address of the multicast group.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a7efaa9eda9e58ffbd5f6b5c5c9e8b38c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a7efaa9eda9e58ffbd5f6b5c5c9e8b38c" class="el">pp::UDPSocket::LeaveGroup</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>group</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Leaves the multicast group with address specified by `group` parameter, which is expected to be a `NetAddress` object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>group</td><td>A <code>NetAddress</code> corresponding to the network address of the multicast group.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a72112f67b757bbbfaaf67ae3cfe2f602" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket/" class="el">UDPSocket</a>&amp; pp::UDPSocket::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket/" class="el">UDPSocket</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The assignment operator for `UDPSocket`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>UDPSocket</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A reference to this `UDPSocket` object.

<span id="a496b1742a9b4ef27d23c9b4b96b9fd0a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a496b1742a9b4ef27d23c9b4b96b9fd0a" class="el">pp::UDPSocket::RecvFrom</a></td><td>(</td><td>char * </td><td><em>buffer</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>num_bytes</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &gt; &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Receives data from the socket and stores the source address.

The socket must be bound.

**Caveat:** You should be careful about the lifetime of `buffer`. Typically you will use a `CompletionCallbackFactory` to scope callbacks to the lifetime of your class. When your class goes out of scope, the callback factory will not actually cancel the operation, but will rather just skip issuing the callback on your class. This means that if the underlying `PPB_UDPSocket` resource outlives your class, the browser will still try to write into your buffer when the operation completes. The buffer must be kept valid until then to avoid memory corruption. If you want to release the buffer while the `RecvFrom()` call is still pending, you should call `Close()` to ensure that the buffer won't be accessed in the future.

**Parameters:**  
<table><tbody><tr class="odd"><td>[out]</td><td>buffer</td><td>The buffer to store the received data on success. It must be at least as large as <code>num_bytes</code>.</td></tr><tr class="even"><td>[in]</td><td>num_bytes</td><td>The number of bytes to receive.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A non-negative number on success to indicate how many bytes have been received; otherwise, an error code from `pp_errors.h`.

<span id="a657309cd3bc38cf28e25f4c71190d1a0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a657309cd3bc38cf28e25f4c71190d1a0" class="el">pp::UDPSocket::SendTo</a></td><td>(</td><td>const char * </td><td><em>buffer</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>num_bytes</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>addr</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sends data to a specific destination.

The socket must be bound.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>The buffer containing the data to send.</td></tr><tr class="even"><td>[in]</td><td>num_bytes</td><td>The number of bytes to send.</td></tr><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>NetAddress</code> object holding the destination address.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A non-negative number on success to indicate how many bytes have been sent; otherwise, an error code from `pp_errors.h`. `PP_ERROR_NOACCESS` will be returned if the caller doesn't have required permissions. `PP_ERROR_INPROGRESS` will be returned if the socket is busy sending. The caller should wait until a pending send completes before retrying.

<span id="a5ff91fd2342e534b57980c0c2e414251" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_u_d_p_socket#a5ff91fd2342e534b57980c0c2e414251" class="el">pp::UDPSocket::SetOption</a></td><td>(</td><td>PP_UDPSocket_Option </td><td><em>name</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>value</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets a socket option on the UDP socket.

Please see the `PP_UDPSocket_Option` description for option names, value types and allowed values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>name</td><td>The option to set.</td></tr><tr class="even"><td>[in]</td><td>value</td><td>The option value to set.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/udp__socket_8h/" class="el">udp_socket.h</a>
