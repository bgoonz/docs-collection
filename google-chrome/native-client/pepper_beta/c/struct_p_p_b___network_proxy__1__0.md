---json {"title":"PPB_NetworkProxy Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_proxy__1__0#af417cbf01c96db637472ac31bb4c6fbb" class="el">GetProxyForURL</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> url, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> *proxy_string, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This interface provides a way to determine the appropriate proxy settings for a given URL.

Permissions: Apps permission `socket` with subrule `resolve-proxy` is required for using this API. For more details about network communication permissions, please see: [/apps/app_network.html](/apps/app_network.html)

---

## Field Documentation

<span id="af417cbf01c96db637472ac31bb4c6fbb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_proxy__1__0#af417cbf01c96db637472ac31bb4c6fbb" class="el">PPB_NetworkProxy::GetProxyForURL</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> url, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> *proxy_string, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Retrieves the proxy that will be used for the given URL.

The result will be a string in PAC format. For more details about PAC format, please see <http://en.wikipedia.org/wiki/Proxy_auto-config>

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>url</td><td>A string <code>PP_Var</code> containing a URL.</td></tr><tr class="odd"><td>[out]</td><td>proxy_string</td><td>A <code>PP_Var</code> that GetProxyForURL will set upon successful completion. If the call fails, <code>proxy_string </code> will be unchanged. Otherwise, it will be set to a string <code> PP_Var</code> containing the appropriate PAC string for <code>url</code>. If set, <code>proxy_string</code> will have a reference count of 1 which the plugin must manage.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__network__proxy_8h/" class="el">ppb_network_proxy.h</a>
