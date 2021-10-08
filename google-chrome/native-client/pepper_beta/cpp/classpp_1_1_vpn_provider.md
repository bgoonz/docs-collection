—json {“title”:“pp::VpnProvider Class Reference”} —

Inheritance diagram for pp::VpnProvider:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a5d44d34828cce02849b2ade71de054f6" class="el">VpnProvider</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="even"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a0ae82ce542bed9af72da27fb4c94ec42" class="el">~VpnProvider</a> ()</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a90d17a19973f48a31ea933325e0b61af" class="el">Bind</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;configuration_id, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;configuration_name, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#ae692340a675bcd27c756e98779efe615" class="el">SendPacket</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;packet, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a745f12bb3d3eb9bf7f29892a717caefb" class="el">ReceivePacket</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &gt; &amp;callback)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a0a6b1fd0a843997fafe1bf5bed85b3b9" class="el">IsAvailable</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `VpnProvider` class enhances the `chrome.vpnProvider` JavaScript API by providing a high performance path for packet handling.

Permissions: Apps permission `vpnProvider` is required for `VpnProvider.Bind()`.

Typical usage:

-   Create a `VpnProvider` instance.
-   Register the callback for `VpnProvider.ReceivePacket()`.
-   In the extension follow the usual workflow for configuring a VPN connection via the `chrome.vpnProvider` API until the step for notifying the connection state as “connected”.
-   Bind to the previously created connection using `VpnProvider.Bind()`.
-   Notify the connection state as “connected” from JavaScript using `chrome.vpnProvider.notifyConnectionStateChanged`.
-   When the steps above are completed without errors, a virtual tunnel is created to the network stack of Chrome OS. IP packets can be sent through the tunnel using `VpnProvider.SendPacket()` and any packets originating on the Chrome OS device will be received using the callback registered for `VpnProvider.ReceivePacket()`.
-   When the user disconnects from the VPN configuration or there is an error the extension will be notfied via `chrome.vpnProvider.onPlatformMessage`.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a5d44d34828cce02849b2ade71de054f6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a5d44d34828cce02849b2ade71de054f6" class="el">pp::VpnProvider::VpnProvider</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider/" class="el" title="The VpnProvider class enhances the chrome.vpnProvider JavaScript API by providing a high performance ...">VpnProvider</a> object.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a0ae82ce542bed9af72da27fb4c94ec42" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a0ae82ce542bed9af72da27fb4c94ec42" class="el">pp::VpnProvider::~VpnProvider</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

Destructs a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider/" class="el" title="The VpnProvider class enhances the chrome.vpnProvider JavaScript API by providing a high performance ...">VpnProvider</a> object.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a90d17a19973f48a31ea933325e0b61af" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a90d17a19973f48a31ea933325e0b61af" class="el">pp::VpnProvider::Bind</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>configuration_id</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>configuration_name</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Binds to an existing configuration created from JavaScript by `chrome.vpnProvider.createConfig`.

All packets will be routed via `SendPacket` and `ReceivePacket`. The user should register the callback for `ReceivePacket` before calling `Bind()`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>configuration_id</td><td>The configuration id from the callback of <code>chrome.vpnProvider.createConfig</code>. This <code>Var</code> must be of string type.</td></tr><tr class="even"><td>[in]</td><td>configuration_name</td><td>The configuration name as defined by the user when calling <code>chrome.vpnProvider.createConfig</code>. This <code>Var</code> must be of string type.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_INPROGRESS` if a previous call to `Bind()` has not completed. Returns `PP_ERROR_BADARGUMENT` if the `Var` type of either `configuration_id` or `configuration_name` is not of string type. Returns `PP_ERROR_NOACCESS` if the caller does the have the required “vpnProvider” permission. Returns `PP_ERROR_FAILED` if `connection_id` and `connection_name` could not be matched with the existing connection, or if the plugin originates from a different extension than the one that created the connection.

<span id="a0a6b1fd0a843997fafe1bf5bed85b3b9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a0a6b1fd0a843997fafe1bf5bed85b3b9" class="el">pp::VpnProvider::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Static function for determining whether the browser supports the `VpnProvider` interface.

**Returns:**  
true if the interface is available, false otherwise.

<span id="a745f12bb3d3eb9bf7f29892a717caefb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#a745f12bb3d3eb9bf7f29892a717caefb" class="el">pp::VpnProvider::ReceivePacket</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Receives an IP packet from the tunnel for the VPN session.

This function only returns a single packet. That is, this function must be called at least N times to receive N packets, no matter the size of each packet. The callback should be registered before calling `Bind()`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion of ReceivePacket. It will be passed an ArrayBuffer type <code>Var</code> containing an IP packet to be sent to the platform.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_INPROGRESS` if a previous call to `ReceivePacket()` has not completed.

<span id="ae692340a675bcd27c756e98779efe615" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_vpn_provider#ae692340a675bcd27c756e98779efe615" class="el">pp::VpnProvider::SendPacket</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>packet</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sends an IP packet through the tunnel created for the VPN session.

This will succeed only when the VPN session is owned by the module and connection is bound.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>packet</td><td>IP packet to be sent to the platform. The <code>Var</code> must be of ArrayBuffer type.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns `PP_ERROR_FAILED` if the connection is not bound. Returns `PP_ERROR_INPROGRESS` if a previous call to `SendPacket()` has not completed. Returns `PP_ERROR_BADARGUMENT` if the `Var` type of `packet` is not of ArrayBuffer type.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/vpn__provider_8h/" class="el">vpn_provider.h</a>
