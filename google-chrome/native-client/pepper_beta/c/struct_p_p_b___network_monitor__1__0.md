—json {“title”:“PPB\_NetworkMonitor Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_monitor__1__0#a854eb22d3a1241f6d03602392fa7a6af" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_monitor__1__0#ade2323702ca75e315fac9e4fa6a9f5d5" class="el">UpdateNetworkList</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> network_monitor, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *network_list, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_monitor__1__0#ac631ae11ea28c1274eed22b7725ccfe4" class="el">IsNetworkMonitor</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_NetworkMonitor` allows to get network interfaces configuration and monitor network configuration changes.

Permissions: Apps permission `socket` with subrule `network-state` is required for `UpdateNetworkList()`. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a854eb22d3a1241f6d03602392fa7a6af" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_monitor__1__0#a854eb22d3a1241f6d03602392fa7a6af" class="el">PPB_NetworkMonitor::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a Network Monitor resource.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

**Returns:**  
A `PP_Resource` corresponding to a network monitor or 0 on failure.

<span id="ac631ae11ea28c1274eed22b7725ccfe4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_monitor__1__0#ac631ae11ea28c1274eed22b7725ccfe4" class="el">PPB_NetworkMonitor::IsNetworkMonitor</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if the specified `resource` is a `NetworkMonitor` object.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> resource.</td></tr></tbody></table>

**Returns:**  
Returns `PP_TRUE` if `resource` is a `PPB_NetworkMonitor`, `PP_FALSE` otherwise.

<span id="ade2323702ca75e315fac9e4fa6a9f5d5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_monitor__1__0#ade2323702ca75e315fac9e4fa6a9f5d5" class="el">PPB_NetworkMonitor::UpdateNetworkList</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> network_monitor, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *network_list, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets current network configuration.

When called for the first time, completes as soon as the current network configuration is received from the browser. Each consequent call will wait for network list changes, returning a new `PPB_NetworkList` resource every time.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>network_monitor</td><td>A <code>PP_Resource</code> corresponding to a network monitor.</td></tr><tr class="even"><td>[out]</td><td>network_list</td><td>The <code>PPB_NetworkList</code><code> resource with the current state of network interfaces. </code></td></tr><tr class="odd"><td>[in]</td><td>callback</td><td><code></code><code>A </code><code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
\``An int32_t containing an error code from`pp\_errors.h`.`PP\_ERROR\_NOACCESS\` will be returned if the caller doesn’t have required permissions.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__network__monitor_8h/" class="el">ppb_network_monitor.h</a>
