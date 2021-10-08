—json {“title”:“PPB\_NetAddress Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a82fab17541bec1817622932f102afdf9" class="el">CreateFromIPv4Address</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv4/" class="el">PP_NetAddress_IPv4</a> *ipv4_addr)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a7531096a8ddbda89e83b1b57958337df" class="el">CreateFromIPv6Address</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv6/" class="el">PP_NetAddress_IPv6</a> *ipv6_addr)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a13f63cdfe4ee93b2539f73ec23739422" class="el">IsNetAddress</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga43636bcadf9aa312a4c345d210ae6c55" class="el">PP_NetAddress_Family</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a139a1f09d00f0dcfce2eaad70af24124" class="el">GetFamily</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a7552e536b89cc3aa4415f41a5c7ee7ee" class="el">DescribeAsString</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> include_port)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#af04c1b08407b0db414d796d2c733f0c0" class="el">DescribeAsIPv4Address</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv4/" class="el">PP_NetAddress_IPv4</a> *ipv4_addr)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a613670dcb447c3c32c2b39c8faa14b88" class="el">DescribeAsIPv6Address</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv6/" class="el">PP_NetAddress_IPv6</a> *ipv6_addr)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_NetAddress` interface provides operations on network addresses.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a82fab17541bec1817622932f102afdf9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a82fab17541bec1817622932f102afdf9" class="el">PPB_NetAddress::CreateFromIPv4Address</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv4/" class="el">PP_NetAddress_IPv4</a> *ipv4_addr)</td></tr></tbody></table>

Creates a `PPB_NetAddress` resource with the specified IPv4 address.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>ipv4_addr</td><td>An IPv4 address.</td></tr></tbody></table>

**Returns:**  
A `PP_Resource` representing the same address as `ipv4_addr` or 0 on failure.

<span id="a7531096a8ddbda89e83b1b57958337df" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a7531096a8ddbda89e83b1b57958337df" class="el">PPB_NetAddress::CreateFromIPv6Address</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv6/" class="el">PP_NetAddress_IPv6</a> *ipv6_addr)</td></tr></tbody></table>

Creates a `PPB_NetAddress` resource with the specified IPv6 address.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>ipv6_addr</td><td>An IPv6 address.</td></tr></tbody></table>

**Returns:**  
A `PP_Resource` representing the same address as `ipv6_addr` or 0 on failure.

<span id="af04c1b08407b0db414d796d2c733f0c0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#af04c1b08407b0db414d796d2c733f0c0" class="el">PPB_NetAddress::DescribeAsIPv4Address</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv4/" class="el">PP_NetAddress_IPv4</a> *ipv4_addr)</td></tr></tbody></table>

Fills a `PP_NetAddress_IPv4` structure if the network address is of `PP_NETADDRESS_FAMILY_IPV4` address family.

Note that passing a network address of `PP_NETADDRESS_FAMILY_IPV6` address family will fail even if the address is an IPv4-mapped IPv6 address.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>PP_Resource</code> corresponding to a network address.</td></tr><tr class="even"><td>[out]</td><td>ipv4_addr</td><td>A <code>PP_NetAddress_IPv4</code> structure to store the result.</td></tr></tbody></table>

**Returns:**  
A `PP_Bool` value indicating whether the operation succeeded.

<span id="a613670dcb447c3c32c2b39c8faa14b88" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a613670dcb447c3c32c2b39c8faa14b88" class="el">PPB_NetAddress::DescribeAsIPv6Address</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv6/" class="el">PP_NetAddress_IPv6</a> *ipv6_addr)</td></tr></tbody></table>

Fills a `PP_NetAddress_IPv6` structure if the network address is of `PP_NETADDRESS_FAMILY_IPV6` address family.

Note that passing a network address of `PP_NETADDRESS_FAMILY_IPV4` address family will fail - this method doesn’t map it to an IPv6 address.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>PP_Resource</code> corresponding to a network address.</td></tr><tr class="even"><td>[out]</td><td>ipv6_addr</td><td>A <code>PP_NetAddress_IPv6</code> structure to store the result.</td></tr></tbody></table>

**Returns:**  
A `PP_Bool` value indicating whether the operation succeeded.

<span id="a7552e536b89cc3aa4415f41a5c7ee7ee" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a7552e536b89cc3aa4415f41a5c7ee7ee" class="el">PPB_NetAddress::DescribeAsString</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> include_port)<code> [read]</code></td></tr></tbody></table>

Returns a human-readable description of the network address.

The description is in the form of host \[ “:” port \] and conforms to <a href="http://tools.ietf.org/html/rfc3986#section-3.2" class="uri">http://tools.ietf.org/html/rfc3986#section-3.2</a> for IPv4 and IPv6 addresses (e.g., “192.168.0.1”, “192.168.0.1:99”, or “\[::1\]:80”).

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>PP_Resource</code> corresponding to a network address.</td></tr><tr class="even"><td>[in]</td><td>include_port</td><td>Whether to include the port number in the description.</td></tr></tbody></table>

**Returns:**  
A string `PP_Var` on success; an undefined `PP_Var` on failure.

<span id="a139a1f09d00f0dcfce2eaad70af24124" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga43636bcadf9aa312a4c345d210ae6c55" class="el">PP_NetAddress_Family</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a139a1f09d00f0dcfce2eaad70af24124" class="el">PPB_NetAddress::GetFamily</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> addr)</td></tr></tbody></table>

Gets the address family.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>addr</td><td>A <code>PP_Resource</code> corresponding to a network address.</td></tr></tbody></table>

**Returns:**  
The address family on success; `PP_NETADDRESS_FAMILY_UNSPECIFIED` on failure.

<span id="a13f63cdfe4ee93b2539f73ec23739422" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#a13f63cdfe4ee93b2539f73ec23739422" class="el">PPB_NetAddress::IsNetAddress</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a given resource is a network address.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> to check.</td></tr></tbody></table>

**Returns:**  
`PP_TRUE` if the input is a `PPB_NetAddress` resource; `PP_FALSE` otherwise.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h/" class="el">ppb_net_address.h</a>
