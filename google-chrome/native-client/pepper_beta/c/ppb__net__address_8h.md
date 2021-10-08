—json {“title”:“ppb\_net\_address.h File Reference”} —

Include dependency graph for ppb\_net\_address.h:

![](/docs/native-client/pepper_beta/c/ppb__net__address_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv4/" class="el">PP_NetAddress_IPv4</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>All members are expressed in network byte order. <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv4#details">More…</a><br />
</td></tr><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv6/" class="el">PP_NetAddress_IPv6</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>All members are expressed in network byte order. <a href="/docs/native-client/pepper_beta/c/struct_p_p___net_address___i_pv6#details">More…</a><br />
</td></tr><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0/" class="el">PPB_NetAddress</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPB_NetAddress</code> interface provides operations on network addresses. <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0#details">More…</a><br />
</td></tr></tbody></table>

Defines
-------

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h#aa487d14ecdf0f4ce95f95f429599b940" class="el">PPB_NETADDRESS_INTERFACE</a>   “PPB_NetAddress;1.0”</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h#a4797048cd8b1d0ab96d600d0f2003f88" class="el">PPB_NETADDRESS_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h#aa487d14ecdf0f4ce95f95f429599b940" class="el">PPB_NETADDRESS_INTERFACE</a></td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___net_address__1__0/" class="el">PPB_NetAddress</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___interfaces#gad6c325ff5a0a74f318a680971d0a7c52" class="el">PPB_NetAddress</a></td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga43636bcadf9aa312a4c345d210ae6c55" class="el">PP_NetAddress_Family</a> { <a href="/docs/native-client/pepper_beta/c/group___enums#gga43636bcadf9aa312a4c345d210ae6c55a2aef50ef77ad0122b649f0b9ac4c41bc" class="el">PP_NETADDRESS_FAMILY_UNSPECIFIED</a> = 0, <a href="/docs/native-client/pepper_beta/c/group___enums#gga43636bcadf9aa312a4c345d210ae6c55a054684e064e8d819f8b2d80640196585" class="el">PP_NETADDRESS_FAMILY_IPV4</a> = 1, <a href="/docs/native-client/pepper_beta/c/group___enums#gga43636bcadf9aa312a4c345d210ae6c55aa70bb3acced932eb4fe7df3aae85c27a" class="el">PP_NETADDRESS_FAMILY_IPV6</a> = 2 }</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga43636bcadf9aa312a4c345d210ae6c55" class="el">PP_NetAddress_Family</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___structs#ga34eaf167d3bf1a00281de167719ca604" class="el">PP_NetAddress_IPv4</a></td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___structs#ga1301bb0d95a4b2e8907002b3bdc8f6d9" class="el">PP_NetAddress_IPv6</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the `PPB_NetAddress` interface.

------------------------------------------------------------------------

Define Documentation
--------------------

<span id="a4797048cd8b1d0ab96d600d0f2003f88" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h#a4797048cd8b1d0ab96d600d0f2003f88" class="el">PPB_NETADDRESS_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h#aa487d14ecdf0f4ce95f95f429599b940" class="el">PPB_NETADDRESS_INTERFACE</a></td></tr></tbody></table>

<span id="aa487d14ecdf0f4ce95f95f429599b940" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__net__address_8h#aa487d14ecdf0f4ce95f95f429599b940" class="el">PPB_NETADDRESS_INTERFACE</a>   “PPB_NetAddress;1.0”</td></tr></tbody></table>
