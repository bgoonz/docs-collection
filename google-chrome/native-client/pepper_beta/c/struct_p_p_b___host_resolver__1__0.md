—json {“title”:“PPB\_HostResolver Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a7dfb4977c9bb0b3efb8016393e1adcc1" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a26202fbec754f45ec43e1b7479f07365" class="el">IsHostResolver</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a006c54c355fc4258fc1c9e75e8861dea" class="el">Resolve</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver, const char <em>host, uint16_t port, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___host_resolver___hint/" class="el">PP_HostResolver_Hint</a></em> hint, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a5edb535ad2bdc3db835ef7ec57f98f49" class="el">GetCanonicalName</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#afe9dc8c673c2a12331eceaf60ecba911" class="el">GetNetAddressCount</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a7202ffb6c7b6d02da4ece9e748aaa886" class="el">GetNetAddress</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver, uint32_t index)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_HostResolver` interface supports host name resolution.

Permissions: In order to run `Resolve()`, apps permission `socket` with subrule `resolve-host` is required. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a7dfb4977c9bb0b3efb8016393e1adcc1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a7dfb4977c9bb0b3efb8016393e1adcc1" class="el">PPB_HostResolver::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a host resolver resource.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

**Returns:**  
A `PP_Resource` corresponding to a host reslover or 0 on failure.

<span id="a5edb535ad2bdc3db835ef7ec57f98f49" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a5edb535ad2bdc3db835ef7ec57f98f49" class="el">PPB_HostResolver::GetCanonicalName</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver)<code> [read]</code></td></tr></tbody></table>

Gets the canonical name of the host.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>host_resolver</td><td>A <code>PP_Resource</code> corresponding to a host resolver.</td></tr></tbody></table>

**Returns:**  
A string `PP_Var` on success, which is an empty string if `PP_HOSTRESOLVER_FLAG_CANONNAME` is not set in the hint flags when calling `Resolve()`; an undefined `PP_Var` if there is a pending `Resolve()` call or the previous `Resolve()` call failed.

<span id="a7202ffb6c7b6d02da4ece9e748aaa886" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a7202ffb6c7b6d02da4ece9e748aaa886" class="el">PPB_HostResolver::GetNetAddress</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver, uint32_t index)</td></tr></tbody></table>

Gets a network address.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>host_resolver</td><td>A <code>PP_Resource</code> corresponding to a host resolver.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>An index indicating which address to return.</td></tr></tbody></table>

**Returns:**  
A `PPB_NetAddress` resource on success; 0 if there is a pending `Resolve()` call or the previous `Resolve()` call failed, or the specified index is out of range.

<span id="afe9dc8c673c2a12331eceaf60ecba911" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#afe9dc8c673c2a12331eceaf60ecba911" class="el">PPB_HostResolver::GetNetAddressCount</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver)</td></tr></tbody></table>

Gets the number of network addresses.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>host_resolver</td><td>A <code>PP_Resource</code> corresponding to a host resolver.</td></tr></tbody></table>

**Returns:**  
The number of available network addresses on success; 0 if there is a pending `Resolve()` call or the previous `Resolve()` call failed.

<span id="a26202fbec754f45ec43e1b7479f07365" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a26202fbec754f45ec43e1b7479f07365" class="el">PPB_HostResolver::IsHostResolver</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a given resource is a host resolver.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> to check.</td></tr></tbody></table>

**Returns:**  
`PP_TRUE` if the input is a `PPB_HostResolver` resource; `PP_FALSE` otherwise.

<span id="a006c54c355fc4258fc1c9e75e8861dea" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___host_resolver__1__0#a006c54c355fc4258fc1c9e75e8861dea" class="el">PPB_HostResolver::Resolve</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> host_resolver, const char <em>host, uint16_t port, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___host_resolver___hint/" class="el">PP_HostResolver_Hint</a></em> hint, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Requests resolution of a host name.

If the call completes successfully, the results can be retrieved by `GetCanonicalName()`, `GetNetAddressCount()` and `GetNetAddress()`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>host_resolver</td><td>A <code>PP_Resource</code> corresponding to a host resolver.</td></tr><tr class="even"><td>[in]</td><td>host</td><td>The host name (or IP address literal) to resolve.</td></tr><tr class="odd"><td>[in]</td><td>port</td><td>The port number to be set in the resulting network addresses.</td></tr><tr class="even"><td>[in]</td><td>hint</td><td>A <code>PP_HostResolver_Hint</code> structure providing hints for host resolution.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. `PP_ERROR_NOACCESS` will be returned if the caller doesn’t have required permissions. `PP_ERROR_NAME_NOT_RESOLVED` will be returned if the host name couldn’t be resolved.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__host__resolver_8h/" class="el">ppb_host_resolver.h</a>
