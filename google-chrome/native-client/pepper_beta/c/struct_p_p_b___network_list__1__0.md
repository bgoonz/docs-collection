---json {"title":"PPB_NetworkList Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#ac8ab7ecff9909962a839d10f6e571954" class="el">IsNetworkList</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a9240190a389e0068088e604704b153de" class="el">GetCount</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a59fdecb98a8a25e7bf257d7106d74bae" class="el">GetName</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga1c967cb753eb468493b3bf72e6733983" class="el">PP_NetworkList_Type</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#ae272fca616d11a27ea09c06a0659e0cc" class="el">GetType</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga9188881b5d3346626db0ea8e6aaecf1f" class="el">PP_NetworkList_State</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a2d9043e33c1c09f9eeea4b49be1629b1" class="el">GetState</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a0dcbe767aed13b3b3492343eb0aa9756" class="el">GetIpAddresses</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a54e77303af12f276181b32ff94820bd8" class="el">GetDisplayName</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a19ecaf7b4627fe7f5d2b0edf02232e8f" class="el">GetMTU</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `PPB_NetworkList` is used to represent a list of network interfaces and their configuration.

The content of the list is immutable. The current networks configuration can be received using the `PPB_NetworkMonitor` interface.

---

## Field Documentation

<span id="a9240190a389e0068088e604704b153de" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a9240190a389e0068088e604704b153de" class="el">PPB_NetworkList::GetCount</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Gets number of interfaces in the list.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns number of available network interfaces or 0 if the list has never been updated.

<span id="a54e77303af12f276181b32ff94820bd8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a54e77303af12f276181b32ff94820bd8" class="el">PPB_NetworkList::GetDisplayName</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)<code> [read]</code></td></tr></tbody></table>

Gets display name of a network interface.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>Index of the network interface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns display name for the network interface with the specified `index`.

<span id="a0dcbe767aed13b3b3492343eb0aa9756" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a0dcbe767aed13b3b3492343eb0aa9756" class="el">PPB_NetworkList::GetIpAddresses</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output)</td></tr></tbody></table>

Gets list of IP addresses for a network interface.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>Index of the network interface.</td></tr><tr class="odd"><td>[in]</td><td>output</td><td>An output array which will receive <code>PPB_NetAddress</code> resources on success. Please note that the ref count of those resources has already been increased by 1 for the caller.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An error code from `pp_errors.h`.

<span id="a19ecaf7b4627fe7f5d2b0edf02232e8f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a19ecaf7b4627fe7f5d2b0edf02232e8f" class="el">PPB_NetworkList::GetMTU</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr></tbody></table>

Gets MTU (Maximum Transmission Unit) of a network interface.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>Index of the network interface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns MTU for the network interface with the specified `index` or 0 if MTU is unknown.

<span id="a59fdecb98a8a25e7bf257d7106d74bae" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a59fdecb98a8a25e7bf257d7106d74bae" class="el">PPB_NetworkList::GetName</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)<code> [read]</code></td></tr></tbody></table>

Gets name of a network interface.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>Index of the network interface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns name for the network interface with the specified `index`.

<span id="a2d9043e33c1c09f9eeea4b49be1629b1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga9188881b5d3346626db0ea8e6aaecf1f" class="el">PP_NetworkList_State</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#a2d9043e33c1c09f9eeea4b49be1629b1" class="el">PPB_NetworkList::GetState</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr></tbody></table>

Gets state of a network interface.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>Index of the network interface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns current state of the network interface with the specified `index`.

<span id="ae272fca616d11a27ea09c06a0659e0cc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga1c967cb753eb468493b3bf72e6733983" class="el">PP_NetworkList_Type</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#ae272fca616d11a27ea09c06a0659e0cc" class="el">PPB_NetworkList::GetType</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, uint32_t index)</td></tr></tbody></table>

Gets type of a network interface.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a network list.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>Index of the network interface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns type of the network interface with the specified `index`.

<span id="ac8ab7ecff9909962a839d10f6e571954" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___network_list__1__0#ac8ab7ecff9909962a839d10f6e571954" class="el">PPB_NetworkList::IsNetworkList</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if the specified `resource` is a `NetworkList` object.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` if `resource` is a `PPB_NetworkList`, `PP_FALSE` otherwise.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__network__list_8h/" class="el">ppb_network_list.h</a>
