---json {"title":"pp::HostResolver Class Reference"} ---

Inheritance diagram for pp::HostResolver:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a98885c5eb6ba873ee54cbb657f9e43f5" class="el">HostResolver</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#aea32a40269f4ad3dc9d9cbadc89bea4f" class="el">HostResolver</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#adc4f2b44c8281920fbce2c4b93eddce2" class="el">HostResolver</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a74ea3a85ad41ded8128b188c821cdb28" class="el">HostResolver</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver/" class="el">HostResolver</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ad4d39f4e863917bc881fc98c236c9f84" class="el">~HostResolver</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver/" class="el">HostResolver</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ab773cb42d3130d6973a8743bc7aba7bd" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver/" class="el">HostResolver</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a894d4ae712b4b30e639f6d838c2f9d98" class="el">Resolve</a> (const char *host, uint16_t port, const PP_HostResolver_Hint &amp;hint, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#aaa2e0834d48b8356f8f3185bc615611d" class="el">GetCanonicalName</a> () const</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ace959e4cb6fd0a51669f6eff64e08ae3" class="el">GetNetAddressCount</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a3680cf97d53a80a536c5dc6441a4c6e7" class="el">GetNetAddress</a> (uint32_t index) const</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ad56c139fa37d665cbb7e33f4d592b421" class="el">IsAvailable</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `HostResolver` class supports host name resolution.

Permissions: In order to run `Resolve()`, apps permission `socket` with subrule `resolve-host` is required. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a98885c5eb6ba873ee54cbb657f9e43f5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a98885c5eb6ba873ee54cbb657f9e43f5" class="el">pp::HostResolver::HostResolver</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `HostResolver` object.

<span id="aea32a40269f4ad3dc9d9cbadc89bea4f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a98885c5eb6ba873ee54cbb657f9e43f5" class="el">pp::HostResolver::HostResolver</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a `HostResolver` object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="adc4f2b44c8281920fbce2c4b93eddce2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a98885c5eb6ba873ee54cbb657f9e43f5" class="el">pp::HostResolver::HostResolver</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_HostResolver</code> resource.</td></tr></tbody></table>

<span id="a74ea3a85ad41ded8128b188c821cdb28" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a98885c5eb6ba873ee54cbb657f9e43f5" class="el">pp::HostResolver::HostResolver</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver/" class="el">HostResolver</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `HostResolver`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>HostResolver</code>.</td></tr></tbody></table>

<span id="ad4d39f4e863917bc881fc98c236c9f84" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ad4d39f4e863917bc881fc98c236c9f84" class="el">pp::HostResolver::~HostResolver</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

The destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="aaa2e0834d48b8356f8f3185bc615611d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#aaa2e0834d48b8356f8f3185bc615611d" class="el">pp::HostResolver::GetCanonicalName</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the canonical name of the host.

**Returns:**  
A string `Var` on success, which is an empty string if `PP_HOSTRESOLVER_FLAG_CANONNAME` is not set in the hint flags when calling `Resolve()`; an undefined `Var` if there is a pending `Resolve()` call or the previous `Resolve()` call failed.

<span id="a3680cf97d53a80a536c5dc6441a4c6e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a3680cf97d53a80a536c5dc6441a4c6e7" class="el">pp::HostResolver::GetNetAddress</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

Gets a network address.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>index</td><td>An index indicating which address to return.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `NetAddress` object. The object will be null (i.e., <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> returns true) if there is a pending `Resolve()` call or the previous `Resolve()` call failed, or the specified index is out of range.

<span id="ace959e4cb6fd0a51669f6eff64e08ae3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ace959e4cb6fd0a51669f6eff64e08ae3" class="el">pp::HostResolver::GetNetAddressCount</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the number of network addresses.

**Returns:**  
The number of available network addresses on success; 0 if there is a pending `Resolve()` call or the previous `Resolve()` call failed.

<span id="ad56c139fa37d665cbb7e33f4d592b421" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#ad56c139fa37d665cbb7e33f4d592b421" class="el">pp::HostResolver::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Static function for determining whether the browser supports the `PPB_HostResolver` interface.

**Returns:**  
true if the interface is available, false otherwise.

<span id="ab773cb42d3130d6973a8743bc7aba7bd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver/" class="el">HostResolver</a>&amp; pp::HostResolver::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver/" class="el">HostResolver</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The assignment operator for `HostResolver`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>HostResolver</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A reference to this `HostResolver` object.

<span id="a894d4ae712b4b30e639f6d838c2f9d98" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_host_resolver#a894d4ae712b4b30e639f6d838c2f9d98" class="el">pp::HostResolver::Resolve</a></td><td>(</td><td>const char * </td><td><em>host</em>,</td></tr><tr class="even"><td></td><td></td><td>uint16_t </td><td><em>port</em>,</td></tr><tr class="odd"><td></td><td></td><td>const PP_HostResolver_Hint &amp; </td><td><em>hint</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Requests resolution of a host name.

If the call completes successully, the results can be retrieved by `GetCanonicalName()`, `GetNetAddressCount()` and `GetNetAddress()`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>host</td><td>The host name (or IP address literal) to resolve.</td></tr><tr class="even"><td>[in]</td><td>port</td><td>The port number to be set in the resulting network addresses.</td></tr><tr class="odd"><td>[in]</td><td>hint</td><td>A <code>PP_HostResolver_Hint</code> structure providing hints for host resolution.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. `PP_ERROR_NOACCESS` will be returned if the caller doesn't have required permissions. `PP_ERROR_NAME_NOT_RESOLVED` will be returned if the host name couldn't be resolved.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/host__resolver_8h/" class="el">host_resolver.h</a>
