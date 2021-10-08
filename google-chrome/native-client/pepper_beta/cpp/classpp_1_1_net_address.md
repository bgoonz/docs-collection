---json {"title":"pp::NetAddress Class Reference"} ---

Inheritance diagram for pp::NetAddress:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#abe4887a33342dac27318079f07bb012d" class="el">NetAddress</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#ade2ad27841d2ccedbb202ee2c1eade14" class="el">NetAddress</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#ae54044b80f97d259cb23b924a877ce53" class="el">NetAddress</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const PP_NetAddress_IPv4 &amp;ipv4_addr)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a76442610ed533079115a5150b7a9c98c" class="el">NetAddress</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const PP_NetAddress_IPv6 &amp;ipv6_addr)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a8c0b559bd205387c199aba688c356298" class="el">NetAddress</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a06b05fdecaf0b32ee74e7ebbb85a0674" class="el">~NetAddress</a> ()</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#ab12bb266c9714d818aedc9cce7a209cf" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">PP_NetAddress_Family </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a271533da67cd5c6f536c6595b439bd9b" class="el">GetFamily</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a9ff9ad19269af1c00ff02542397e92cc" class="el">DescribeAsString</a> (bool include_port) const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a3fdbd86db0384bf334dabcefa5e46237" class="el">DescribeAsIPv4Address</a> (PP_NetAddress_IPv4 *ipv4_addr) const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a81991279a52f8d38d9b75e1e607a81a5" class="el">DescribeAsIPv6Address</a> (PP_NetAddress_IPv6 *ipv6_addr) const</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a15547416a0b50b6ebd271ca421a91068" class="el">IsAvailable</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `NetAddress` class represents a network address.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="abe4887a33342dac27318079f07bb012d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#abe4887a33342dac27318079f07bb012d" class="el">pp::NetAddress::NetAddress</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `NetAddress` object.

<span id="ade2ad27841d2ccedbb202ee2c1eade14" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#abe4887a33342dac27318079f07bb012d" class="el">pp::NetAddress::NetAddress</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_NetAddress</code> resource.</td></tr></tbody></table>

<span id="ae54044b80f97d259cb23b924a877ce53" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#abe4887a33342dac27318079f07bb012d" class="el">pp::NetAddress::NetAddress</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const PP_NetAddress_IPv4 &amp; </td><td><em>ipv4_addr</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used to create a `NetAddress` object with the specified IPv4 address.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>ipv4_addr</td><td>An IPv4 address.</td></tr></tbody></table>

<span id="a76442610ed533079115a5150b7a9c98c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#abe4887a33342dac27318079f07bb012d" class="el">pp::NetAddress::NetAddress</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const PP_NetAddress_IPv6 &amp; </td><td><em>ipv6_addr</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used to create a `NetAddress` object with the specified IPv6 address.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>ipv6_addr</td><td>An IPv6 address.</td></tr></tbody></table>

<span id="a8c0b559bd205387c199aba688c356298" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#abe4887a33342dac27318079f07bb012d" class="el">pp::NetAddress::NetAddress</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `NetAddress`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>NetAddress</code>.</td></tr></tbody></table>

<span id="a06b05fdecaf0b32ee74e7ebbb85a0674" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a06b05fdecaf0b32ee74e7ebbb85a0674" class="el">pp::NetAddress::~NetAddress</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

The destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a3fdbd86db0384bf334dabcefa5e46237" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a3fdbd86db0384bf334dabcefa5e46237" class="el">pp::NetAddress::DescribeAsIPv4Address</a></td><td>(</td><td>PP_NetAddress_IPv4 * </td><td><em>ipv4_addr</em></td><td>)</td><td>const</td></tr></tbody></table>

Fills a `PP_NetAddress_IPv4` structure if the network address is of `PP_NETADDRESS_FAMILY_IPV4` address family.

Note that passing a network address of `PP_NETADDRESS_FAMILY_IPV6` address family will fail even if the address is an IPv4-mapped IPv6 address.

**Parameters:**  
<table><tbody><tr class="odd"><td>[out]</td><td>ipv4_addr</td><td>A <code>PP_NetAddress_IPv4</code> structure to store the result.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A boolean value indicating whether the operation succeeded.

<span id="a81991279a52f8d38d9b75e1e607a81a5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a81991279a52f8d38d9b75e1e607a81a5" class="el">pp::NetAddress::DescribeAsIPv6Address</a></td><td>(</td><td>PP_NetAddress_IPv6 * </td><td><em>ipv6_addr</em></td><td>)</td><td>const</td></tr></tbody></table>

Fills a `PP_NetAddress_IPv6` structure if the network address is of `PP_NETADDRESS_FAMILY_IPV6` address family.

Note that passing a network address of `PP_NETADDRESS_FAMILY_IPV4` address family will fail - this method doesn't map it to an IPv6 address.

**Parameters:**  
<table><tbody><tr class="odd"><td>[out]</td><td>ipv6_addr</td><td>A <code>PP_NetAddress_IPv6</code> structure to store the result.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A boolean value indicating whether the operation succeeded.

<span id="a9ff9ad19269af1c00ff02542397e92cc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a9ff9ad19269af1c00ff02542397e92cc" class="el">pp::NetAddress::DescribeAsString</a></td><td>(</td><td>bool </td><td><em>include_port</em></td><td>)</td><td>const</td></tr></tbody></table>

Returns a human-readable description of the network address.

The description is in the form of host \[ ":" port \] and conforms to <http://tools.ietf.org/html/rfc3986#section-3.2> for IPv4 and IPv6 addresses (e.g., "192.168.0.1", "192.168.0.1:99", or "\[::1\]:80").

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>include_port</td><td>Whether to include the port number in the description.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A string `Var` on success; an undefined `Var` on failure.

<span id="a271533da67cd5c6f536c6595b439bd9b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_NetAddress_Family <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a271533da67cd5c6f536c6595b439bd9b" class="el">pp::NetAddress::GetFamily</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the address family.

**Returns:**  
The address family on success; `PP_NETADDRESS_FAMILY_UNSPECIFIED` on failure.

<span id="a15547416a0b50b6ebd271ca421a91068" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address#a15547416a0b50b6ebd271ca421a91068" class="el">pp::NetAddress::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Static function for determining whether the browser supports the `PPB_NetAddress` interface.

**Returns:**  
true if the interface is available, false otherwise.

<span id="ab12bb266c9714d818aedc9cce7a209cf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a>&amp; pp::NetAddress::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The assignment operator for `NetAddress`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to another <code>NetAddress</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A reference to this `NetAddress` object.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/net__address_8h/" class="el">net_address.h</a>
