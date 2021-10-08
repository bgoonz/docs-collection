---json {"title":"PPB\_VpnProvider Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a2ec07eb1aaf01c4e7050c198e96a8f76" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a55919d9d06bd5ecd2c8365b872e1db9f" class="el">IsVpnProvider</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a7b925b10a83d769e6d80d22fcace7833" class="el">Bind</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> vpn_provider, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> configuration_id, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> configuration_name, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a43d8ddc1da63d7ee94c26721599c34db" class="el">SendPacket</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> vpn_provider, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> packet, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a767149d43eb103ad379dddcb04d1ca22" class="el">ReceivePacket</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> vpn_provider, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *packet, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Use the `PPB_VpnProvider` interface to implement a VPN client.

Important: This API is available only on Chrome OS.

This interface enhances the `chrome.vpnProvider` JavaScript API by providing a high performance path for packet handling.

Permissions: Apps permission `vpnProvider` is required for `PPB_VpnProvider.Bind()`.

Typical usage:

-   Create a `PPB_VpnProvider` instance.
-   Register the callback for `PPB_VpnProvider.ReceivePacket()`.
-   In the extension follow the usual workflow for configuring a VPN connection via the `chrome.vpnProvider` API until the step for notifying the connection state as "connected".
-   Bind to the previously created connection using `PPB_VpnProvider.Bind()`.
-   Notify the connection state as "connected" from JavaScript using `chrome.vpnProvider.notifyConnectionStateChanged`.
-   When the steps above are completed without errors, a virtual tunnel is created to the network stack of Chrome OS. IP packets can be sent through the tunnel using `PPB_VpnProvider.SendPacket()` and any packets originating on the Chrome OS device will be received using the callback registered for `PPB_VpnProvider.ReceivePacket()`.
-   When the user disconnects from the VPN configuration or there is an error the extension will be notfied via `chrome.vpnProvider.onPlatformMessage`.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a7b925b10a83d769e6d80d22fcace7833" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a7b925b10a83d769e6d80d22fcace7833" class="el">PPB_VpnProvider::Bind</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> vpn_provider, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> configuration_id, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> configuration_name, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a7b925b10a83d769e6d80d22fcace7833" class="el" title="Bind() binds to an existing configuration created from JavaScript by chrome.vpnProvider.createConfig.">Bind()</a> binds to an existing configuration created from JavaScript by `chrome.vpnProvider.createConfig`.

All packets will be routed via `SendPacket` and `ReceivePacket`. The user should register the callback for `ReceivePacket` before calling `Bind()`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>vpn_provider</td><td>A <code>PP_Resource</code> corresponding to a VpnProvider.</td></tr><tr class="even"><td>[in]</td><td>configuration_id</td><td>A <code>PP_VARTYPE_STRING</code> representing the configuration id from the callback of <code>chrome.vpnProvider.createConfig</code>.</td></tr><tr class="odd"><td>[in]</td><td>configuration_name</td><td>A <code>PP_VARTYPE_STRING</code> representing the configuration name as defined by the user when calling <code>chrome.vpnProvider.createConfig</code>.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_INPROGRESS` if a previous call to `Bind()` has not completed. Returns `PP_ERROR_BADARGUMENT` if either `configuration_id` or `configuration_name` are not of type `PP_VARTYPE_STRING`. Returns `PP_ERROR_NOACCESS` if the caller does the have the required "vpnProvider" permission. Returns `PP_ERROR_FAILED` if `connection_id` and `connection_name` could not be matched with the existing connection, or if the plugin originates from a different extension than the one that created the connection.

<span id="a2ec07eb1aaf01c4e7050c198e96a8f76" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a2ec07eb1aaf01c4e7050c198e96a8f76" class="el">PPB_VpnProvider::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a2ec07eb1aaf01c4e7050c198e96a8f76" class="el" title="Create() creates a VpnProvider instance.">Create()</a> creates a VpnProvider instance.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the VpnProvider.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a VpnProvider if successful.

<span id="a55919d9d06bd5ecd2c8365b872e1db9f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a55919d9d06bd5ecd2c8365b872e1db9f" class="el">PPB_VpnProvider::IsVpnProvider</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a55919d9d06bd5ecd2c8365b872e1db9f" class="el" title="IsVpnProvider() determines if the provided resource is a VpnProvider instance.">IsVpnProvider()</a> determines if the provided `resource` is a VpnProvider instance.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a VpnProvider.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` if `resource` is a `PPB_VpnProvider`, `PP_FALSE` if the `resource` is invalid or some type other than `PPB_VpnProvider`.

<span id="a767149d43eb103ad379dddcb04d1ca22" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a767149d43eb103ad379dddcb04d1ca22" class="el">PPB_VpnProvider::ReceivePacket</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> vpn_provider, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *packet, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a767149d43eb103ad379dddcb04d1ca22" class="el" title="ReceivePacket() receives an IP packet from the tunnel for the VPN session.">ReceivePacket()</a> receives an IP packet from the tunnel for the VPN session.

This function only returns a single packet. This function must be called at least N times to receive N packets, no matter the size of each packet. The callback should be registered before calling `Bind()`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>vpn_provider</td><td>A <code>PP_Resource</code> corresponding to a VpnProvider.</td></tr><tr class="even"><td>[out]</td><td>packet</td><td>The received packet is copied to provided <code>packet</code>. The <code>packet</code> must remain valid until <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a767149d43eb103ad379dddcb04d1ca22" class="el" title="ReceivePacket() receives an IP packet from the tunnel for the VPN session.">ReceivePacket()</a> completes. Its received <code>PP_VarType</code> will be <code>PP_VARTYPE_ARRAY_BUFFER</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_INPROGRESS` if a previous call to `ReceivePacket()` has not completed.

<span id="a43d8ddc1da63d7ee94c26721599c34db" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a43d8ddc1da63d7ee94c26721599c34db" class="el">PPB_VpnProvider::SendPacket</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> vpn_provider, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> packet, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___vpn_provider__0__1#a43d8ddc1da63d7ee94c26721599c34db" class="el" title="SendPacket() sends an IP packet through the tunnel created for the VPN session.">SendPacket()</a> sends an IP packet through the tunnel created for the VPN session.

This will succeed only when the VPN session is owned by the module and the connection is bound.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>vpn_provider</td><td>A <code>PP_Resource</code> corresponding to a VpnProvider.</td></tr><tr class="even"><td>[in]</td><td>packet</td><td>A <code>PP_VARTYPE_ARRAY_BUFFER</code> corresponding to an IP packet to be sent to the platform.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_FAILED` if the connection is not bound. Returns `PP_ERROR_INPROGRESS` if a previous call to `SendPacket()` has not completed. Returns `PP_ERROR_BADARGUMENT` if `packet` is not of type `PP_VARTYPE_ARRAY_BUFFER`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__vpn__provider_8h/" class="el">ppb_vpn_provider.h</a>
