---json {"title":"pp::NetworkProxy Class Reference"} ---

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_network_proxy-members/)

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_network_proxy#a864362732834af39e12f699ff5e1888d" class="el">IsAvailable</a> ()</td></tr><tr class="even"><td style="text-align: right;">static int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_network_proxy#a03ae12454a920710272c15431039b6fd" class="el">GetProxyForURL</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> &amp;url, const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> &gt; &amp;callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This class provides a way to determine the appropriate proxy settings for for a given URL.

Permissions: Apps permission `socket` with subrule `resolve-proxy` is required for using this API. For more details about network communication permissions, please see: [/apps/app\_network.html](/apps/app_network.html)

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a03ae12454a920710272c15431039b6fd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_network_proxy#a03ae12454a920710272c15431039b6fd" class="el">pp::NetworkProxy::GetProxyForURL</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>url</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> &gt; &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [static]</code></td></tr></tbody></table>

Retrieves the proxy that will be used for the given URL.

The result will be a string in PAC format. For more details about PAC format, please see <http://en.wikipedia.org/wiki/Proxy_auto-config>

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>An <code>InstanceHandle</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>url</td><td>A string <code>Var</code> containing a URL.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion. It will be passed a string <code>Var</code> containing the appropriate PAC string for <code>url</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a864362732834af39e12f699ff5e1888d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_network_proxy#a864362732834af39e12f699ff5e1888d" class="el">pp::NetworkProxy::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Returns true if the browser supports this API, false otherwise.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/network__proxy_8h/" class="el">network_proxy.h</a>
