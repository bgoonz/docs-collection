—json {“title”:“pp::TCPSocket Class Reference”} —

Inheritance diagram for pp::TCPSocket:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a8752f9c331ea25e01bf4a80be95117ef" class="el">TCPSocket</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#af33619315cc5eeff15174a78b0fff44d" class="el">TCPSocket</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#aa7af4b57237e461a79ba33e044d688fe" class="el">TCPSocket</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a528305852766af8c12284e6ef7e94058" class="el">TCPSocket</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a32547904059796aa6def4c9ab6107c80" class="el">~TCPSocket</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#ae7c8888a8f6ef5187547de8b8db3bb98" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a266c28928c7524fa8bad8bca513c8f2b" class="el">Bind</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;addr, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a939f7d319a58c60afcb71f6356223aac" class="el">Connect</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;addr, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#ad35bf6762cac2eceb4469eba0275ed7f" class="el">GetLocalAddress</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a6d8c7d3ab135c58f0cd92202946c1ea8" class="el">GetRemoteAddress</a> () const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a598efe777f0ef2eb9117b11437e1bedb" class="el">Read</a> (char *buffer, int32_t bytes_to_read, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#aef066de742e7271ca72fa8e4e177f63b" class="el">Write</a> (const char *buffer, int32_t bytes_to_write, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#afed8c462e80b265b132a53e8cbd87fbb" class="el">Listen</a> (int32_t backlog, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#aef5daadffa0cf98464d30c418f1eceb1" class="el">Accept</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &gt; &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#abc186103df13872795525a65ab48a478" class="el">Close</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a71fdfb61f8ab4fbc805bb66b34a77484" class="el">SetOption</a> (PP_TCPSocket_Option name, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;value, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#addc35d01f8547e3128358c401a2a8e47" class="el">IsAvailable</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `TCPSocket` class provides TCP socket operations.

Permissions: Apps permission `socket` with subrule `tcp-connect` is required for `Connect()`; subrule `tcp-listen` is required for `Listen()`. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a8752f9c331ea25e01bf4a80be95117ef" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a8752f9c331ea25e01bf4a80be95117ef" class="el">pp::TCPSocket::TCPSocket</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `TCPSocket` object.

<span id="af33619315cc5eeff15174a78b0fff44d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a8752f9c331ea25e01bf4a80be95117ef" class="el">pp::TCPSocket::TCPSocket</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a `TCPSocket` object.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="aa7af4b57237e461a79ba33e044d688fe" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a8752f9c331ea25e01bf4a80be95117ef" class="el">pp::TCPSocket::TCPSocket</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_TCPSocket</code> resource.</td></tr></tbody></table>

<span id="a528305852766af8c12284e6ef7e94058" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a8752f9c331ea25e01bf4a80be95117ef" class="el">pp::TCPSocket::TCPSocket</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `TCPSocket`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>TCPSocket</code>.</td></tr></tbody></table>

<span id="a32547904059796aa6def4c9ab6107c80" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a32547904059796aa6def4c9ab6107c80" class="el">pp::TCPSocket::~TCPSocket</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

The destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="aef5daadffa0cf98464d30c418f1eceb1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#aef5daadffa0cf98464d30c418f1eceb1" class="el">pp::TCPSocket::Accept</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Accepts a connection.

The socket must be listening.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_CONNECTION_ABORTED`: A connection has been aborted.

<span id="a266c28928c7524fa8bad8bca513c8f2b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a266c28928c7524fa8bad8bca513c8f2b" class="el">pp::TCPSocket::Bind</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>addr</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Binds the socket to the given address.

The socket must not be bound.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>NetAddress</code> object.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_ADDRESS_IN_USE`: the address is already in use.
-   `PP_ERROR_ADDRESS_INVALID`: the address is invalid.

<span id="abc186103df13872795525a65ab48a478" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#abc186103df13872795525a65ab48a478" class="el">pp::TCPSocket::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Cancels all pending operations and closes the socket.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. After a call to this method, no output buffer pointers passed into previous `Read()` or `Accept()` calls will be accessed. It is not valid to call `Connect()` or `Listen()` again.

The socket is implicitly closed if it is destroyed, so you are not required to call this method.

<span id="a939f7d319a58c60afcb71f6356223aac" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a939f7d319a58c60afcb71f6356223aac" class="el">pp::TCPSocket::Connect</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>addr</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Connects the socket to the given address.

The socket must not be listening. Binding the socket beforehand is optional.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>NetAddress</code> object.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_NOACCESS`: the caller doesn’t have required permissions.
-   `PP_ERROR_ADDRESS_UNREACHABLE`: `addr` is unreachable.
-   `PP_ERROR_CONNECTION_REFUSED`: the connection attempt was refused.
-   `PP_ERROR_CONNECTION_FAILED`: the connection attempt failed.
-   `PP_ERROR_CONNECTION_TIMEDOUT`: the connection attempt timed out.

Since version 1.1, if the socket is listening/connected or has a pending listen/connect request, `Connect()` will fail without starting a connection attempt. Otherwise, any failure during the connection attempt will cause the socket to be closed.

<span id="ad35bf6762cac2eceb4469eba0275ed7f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#ad35bf6762cac2eceb4469eba0275ed7f" class="el">pp::TCPSocket::GetLocalAddress</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the local address of the socket, if it is bound.

**Returns:**  
A `NetAddress` object. The object will be null (i.e., <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> returns true) on failure.

<span id="a6d8c7d3ab135c58f0cd92202946c1ea8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a6d8c7d3ab135c58f0cd92202946c1ea8" class="el">pp::TCPSocket::GetRemoteAddress</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the remote address of the socket, if it is connected.

**Returns:**  
A `NetAddress` object. The object will be null (i.e., <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> returns true) on failure.

<span id="addc35d01f8547e3128358c401a2a8e47" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#addc35d01f8547e3128358c401a2a8e47" class="el">pp::TCPSocket::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Static function for determining whether the browser supports the `PPB_TCPSocket` interface.

**Returns:**  
true if the interface is available, false otherwise.

<span id="afed8c462e80b265b132a53e8cbd87fbb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#afed8c462e80b265b132a53e8cbd87fbb" class="el">pp::TCPSocket::Listen</a></td><td>(</td><td>int32_t </td><td><em>backlog</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Starts listening.

The socket must be bound and not connected.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>backlog</td><td>A hint to determine the maximum length to which the queue of pending connections may grow.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`, including (but not limited to):

-   `PP_ERROR_NOACCESS`: the caller doesn’t have required permissions.
-   `PP_ERROR_ADDRESS_IN_USE`: Another socket is already listening on the same port.

<span id="ae7c8888a8f6ef5187547de8b8db3bb98" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a>&amp; pp::TCPSocket::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket/" class="el">TCPSocket</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The assignment operator for `TCPSocket`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>TCPSocket</code>.</td></tr></tbody></table>

**Returns:**  
A reference to this `TCPSocket` object.

<span id="a598efe777f0ef2eb9117b11437e1bedb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a598efe777f0ef2eb9117b11437e1bedb" class="el">pp::TCPSocket::Read</a></td><td>(</td><td>char * </td><td><em>buffer</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>bytes_to_read</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Reads data from the socket.

The socket must be connected. It may perform a partial read.

**Caveat:** You should be careful about the lifetime of `buffer`. Typically you will use a `CompletionCallbackFactory` to scope callbacks to the lifetime of your class. When your class goes out of scope, the callback factory will not actually cancel the operation, but will rather just skip issuing the callback on your class. This means that if the underlying `PPB_TCPSocket` resource outlives your class, the browser will still try to write into your buffer when the operation completes. The buffer must be kept valid until then to avoid memory corruption. If you want to release the buffer while the `Read()` call is still pending, you should call `Close()` to ensure that the buffer won’t be accessed in the future.

**Parameters:**  

<table><tbody><tr class="odd"><td>[out]</td><td>buffer</td><td>The buffer to store the received data on success. It must be at least as large as <code>bytes_to_read</code>.</td></tr><tr class="even"><td>[in]</td><td>bytes_to_read</td><td>The number of bytes to read.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
A non-negative number on success to indicate how many bytes have been read, 0 means that end-of-file was reached; otherwise, an error code from `pp_errors.h`.

<span id="a71fdfb61f8ab4fbc805bb66b34a77484" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#a71fdfb61f8ab4fbc805bb66b34a77484" class="el">pp::TCPSocket::SetOption</a></td><td>(</td><td>PP_TCPSocket_Option </td><td><em>name</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>value</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets a socket option on the TCP socket.

Please see the `PP_TCPSocket_Option` description for option names, value types and allowed values.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>name</td><td>The option to set.</td></tr><tr class="even"><td>[in]</td><td>value</td><td>The option value to set.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="aef066de742e7271ca72fa8e4e177f63b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_t_c_p_socket#aef066de742e7271ca72fa8e4e177f63b" class="el">pp::TCPSocket::Write</a></td><td>(</td><td>const char * </td><td><em>buffer</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>bytes_to_write</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Writes data to the socket.

The socket must be connected. It may perform a partial write.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>The buffer containing the data to write.</td></tr><tr class="even"><td>[in]</td><td>bytes_to_write</td><td>The number of bytes to write.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
A non-negative number on success to indicate how many bytes have been written; otherwise, an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/tcp__socket_8h/" class="el">tcp_socket.h</a>
