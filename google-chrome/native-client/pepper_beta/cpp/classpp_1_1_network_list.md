—json {“title”:“pp::NetworkList Class Reference”} —

Inheritance diagram for pp::NetworkList:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a2f79e2f0c884db428a4e1df63b64e2c0" class="el">NetworkList</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a3d91fdce92976477be4a131fdd5c21e1" class="el">NetworkList</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a4dd51a7af2b0af6c6b962e975131c3e2" class="el">GetCount</a> () const</td></tr><tr class="even"><td style="text-align: right;">std::string </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#acb253aedb772fc42bdfbb5d05331d8b1" class="el">GetName</a> (uint32_t index) const</td></tr><tr class="odd"><td style="text-align: right;">PP_NetworkList_Type </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a61d4a2421294e176d749115cbf5fb91b" class="el">GetType</a> (uint32_t index) const</td></tr><tr class="even"><td style="text-align: right;">PP_NetworkList_State </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a9c4a05d5bc5d0d23aac52f59f1718e32" class="el">GetState</a> (uint32_t index) const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#ab2dee43ce3ac787852438210b80361d8" class="el">GetIpAddresses</a> (uint32_t index, std::vector&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &gt; *addresses) const</td></tr><tr class="even"><td style="text-align: right;">std::string </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a5a9aff0b4b03205a35ba0298fb9d383f" class="el">GetDisplayName</a> (uint32_t index) const</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#aebbb32231a87568e7fbe29e50e16fc58" class="el">GetMTU</a> (uint32_t index) const</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#ab059a90bb9e2aced3f0e709853d0e61f" class="el">IsAvailable</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a2f79e2f0c884db428a4e1df63b64e2c0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a2f79e2f0c884db428a4e1df63b64e2c0" class="el">pp::NetworkList::NetworkList</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<span id="a3d91fdce92976477be4a131fdd5c21e1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a2f79e2f0c884db428a4e1df63b64e2c0" class="el">pp::NetworkList::NetworkList</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a4dd51a7af2b0af6c6b962e975131c3e2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a4dd51a7af2b0af6c6b962e975131c3e2" class="el">pp::NetworkList::GetCount</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
Returns the number of available network interfaces or 0 if the list has never been updated.

<span id="a5a9aff0b4b03205a35ba0298fb9d383f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>std::string <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a5a9aff0b4b03205a35ba0298fb9d383f" class="el">pp::NetworkList::GetDisplayName</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
Returns the display name for the network interface with the specified `index`.

<span id="ab2dee43ce3ac787852438210b80361d8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#ab2dee43ce3ac787852438210b80361d8" class="el">pp::NetworkList::GetIpAddresses</a></td><td>(</td><td>uint32_t </td><td><em>index</em>,</td></tr><tr class="even"><td></td><td></td><td>std::vector&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_net_address/" class="el">NetAddress</a> &gt; * </td><td><em>addresses</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td>const</td></tr></tbody></table>

Gets the list of IP addresses for the network interface with the specified `index` and stores them in `addresses`.

<span id="aebbb32231a87568e7fbe29e50e16fc58" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#aebbb32231a87568e7fbe29e50e16fc58" class="el">pp::NetworkList::GetMTU</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
Returns the MTU for the network interface with the specified `index`.

<span id="acb253aedb772fc42bdfbb5d05331d8b1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>std::string <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#acb253aedb772fc42bdfbb5d05331d8b1" class="el">pp::NetworkList::GetName</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
Returns the name for the network interface with the specified `index`.

<span id="a9c4a05d5bc5d0d23aac52f59f1718e32" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_NetworkList_State <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a9c4a05d5bc5d0d23aac52f59f1718e32" class="el">pp::NetworkList::GetState</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
Returns the current state of the network interface with the specified `index`.

<span id="a61d4a2421294e176d749115cbf5fb91b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_NetworkList_Type <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#a61d4a2421294e176d749115cbf5fb91b" class="el">pp::NetworkList::GetType</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
Returns the type of the network interface with the specified `index`.

<span id="ab059a90bb9e2aced3f0e709853d0e61f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_network_list#ab059a90bb9e2aced3f0e709853d0e61f" class="el">pp::NetworkList::IsAvailable</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Returns true if the required interface is available.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/network__list_8h/" class="el">network_list.h</a>
