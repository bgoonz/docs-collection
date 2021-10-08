—json {“title”:“ppb\_url\_request\_info.h File Reference”} —

Include dependency graph for ppb\_url\_request\_info.h:

![](/docs/native-client/pepper_beta/c/ppb__url__request__info_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_request_info__1__0/" class="el">PPB_URLRequestInfo</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPB_URLRequestInfo</code> interface is used to create and handle URL requests. <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_request_info__1__0#details">More…</a><br />
</td></tr></tbody></table>

Defines
-------

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__url__request__info_8h#a1624264dba578e2c15b257f7680a43de" class="el">PPB_URLREQUESTINFO_INTERFACE</a>   “PPB_URLRequestInfo;1.0”</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__url__request__info_8h#a61dc8b05683833153b9368eabebc5441" class="el">PPB_URLREQUESTINFO_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__url__request__info_8h#a1624264dba578e2c15b257f7680a43de" class="el">PPB_URLREQUESTINFO_INTERFACE</a></td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct<br />
<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___u_r_l_request_info__1__0/" class="el">PPB_URLRequestInfo</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___interfaces#gad60387934d9e235d3d145ee5a1fb4e74" class="el">PPB_URLRequestInfo</a></td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga41975630f0a4c49e47d4a21754f8402d" class="el">PP_URLRequestProperty</a> {<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da89e44812e771fed9df0ff8994690e44d" class="el">PP_URLREQUESTPROPERTY_URL</a> = 0, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da9cb5229069aac201622dbaa9cbca592c" class="el">PP_URLREQUESTPROPERTY_METHOD</a> = 1, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402dac4b3809e34561a77c75b31eac1589e8d" class="el">PP_URLREQUESTPROPERTY_HEADERS</a> = 2, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402dac43d267f888233c994bd1ca2b5b6b249" class="el">PP_URLREQUESTPROPERTY_STREAMTOFILE</a> = 3,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da5f1270ecf041c6c0a6ef351eb0c12127" class="el">PP_URLREQUESTPROPERTY_FOLLOWREDIRECTS</a> = 4, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da6846ea1e9c4ef7e09ea0f330a90cb7a6" class="el">PP_URLREQUESTPROPERTY_RECORDDOWNLOADPROGRESS</a> = 5, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da9202c5a8c6afdc6fa9808ab21b95376c" class="el">PP_URLREQUESTPROPERTY_RECORDUPLOADPROGRESS</a> = 6, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da6130d3b9dc8ae434752612ef155e3a38" class="el">PP_URLREQUESTPROPERTY_CUSTOMREFERRERURL</a> = 7,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da23f6523485b5bedf17882fb7a8796c03" class="el">PP_URLREQUESTPROPERTY_ALLOWCROSSORIGINREQUESTS</a> = 8, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da7da4140fde998f227f82d8064e9f5460" class="el">PP_URLREQUESTPROPERTY_ALLOWCREDENTIALS</a> = 9, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da094e978814d887d1888a2652aa91fc8b" class="el">PP_URLREQUESTPROPERTY_CUSTOMCONTENTTRANSFERENCODING</a> = 10, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da69ab9c81542c755313fc906d27396a9e" class="el">PP_URLREQUESTPROPERTY_PREFETCHBUFFERUPPERTHRESHOLD</a> = 11,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402da8529403a539c1f604f8b0507078d804d" class="el">PP_URLREQUESTPROPERTY_PREFETCHBUFFERLOWERTHRESHOLD</a> = 12, <a href="/docs/native-client/pepper_beta/c/group___enums#gga41975630f0a4c49e47d4a21754f8402dacf34504e827fdce2895f2b504cdd0653" class="el">PP_URLREQUESTPROPERTY_CUSTOMUSERAGENT</a> = 13<br />
}</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga41975630f0a4c49e47d4a21754f8402d" class="el">PP_URLRequestProperty</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the `PPB_URLRequestInfo` API for creating and manipulating URL requests.

------------------------------------------------------------------------

Define Documentation
--------------------

<span id="a61dc8b05683833153b9368eabebc5441" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__url__request__info_8h#a61dc8b05683833153b9368eabebc5441" class="el">PPB_URLREQUESTINFO_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__url__request__info_8h#a1624264dba578e2c15b257f7680a43de" class="el">PPB_URLREQUESTINFO_INTERFACE</a></td></tr></tbody></table>

<span id="a1624264dba578e2c15b257f7680a43de" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__url__request__info_8h#a1624264dba578e2c15b257f7680a43de" class="el">PPB_URLREQUESTINFO_INTERFACE</a>   “PPB_URLRequestInfo;1.0”</td></tr></tbody></table>
