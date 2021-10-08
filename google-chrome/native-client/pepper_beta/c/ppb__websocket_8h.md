—json {“title”:“ppb\_websocket.h File Reference”} —

Include dependency graph for ppb\_websocket.h:

![](/docs/native-client/pepper_beta/c/ppb__websocket_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0/" class="el">PPB_WebSocket</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPB_WebSocket</code> interface provides bi-directional, full-duplex, communications over a single TCP socket. <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0#details">More…</a><br />
</td></tr></tbody></table>

Defines
-------

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h#ad613dc4aff545f9e9885c415f1673107" class="el">PPB_WEBSOCKET_INTERFACE</a>   “PPB_WebSocket;1.0”</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h#a6d56a012c9350b4cc4e55b668d3fbe75" class="el">PPB_WEBSOCKET_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h#ad613dc4aff545f9e9885c415f1673107" class="el">PPB_WEBSOCKET_INTERFACE</a></td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___web_socket__1__0/" class="el">PPB_WebSocket</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___interfaces#gad0e152d14cefb0b480228f3fc7070faf" class="el">PPB_WebSocket</a></td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#gade61cdf6a7470769b571925694d91a89" class="el">PP_WebSocketReadyState</a> {<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#ggade61cdf6a7470769b571925694d91a89a6c603b9df214e22d8b8202431866b26b" class="el">PP_WEBSOCKETREADYSTATE_INVALID</a> = -1, <a href="/docs/native-client/pepper_beta/c/group___enums#ggade61cdf6a7470769b571925694d91a89a9ad491ea639e22b598d4e8cab463acd9" class="el">PP_WEBSOCKETREADYSTATE_CONNECTING</a> = 0, <a href="/docs/native-client/pepper_beta/c/group___enums#ggade61cdf6a7470769b571925694d91a89a60f99e31f237d57df167d70e7c1ada7d" class="el">PP_WEBSOCKETREADYSTATE_OPEN</a> = 1, <a href="/docs/native-client/pepper_beta/c/group___enums#ggade61cdf6a7470769b571925694d91a89a45ce2585ba8b200c6c02112098df6447" class="el">PP_WEBSOCKETREADYSTATE_CLOSING</a> = 2,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#ggade61cdf6a7470769b571925694d91a89a43865a04fac402be4f589d2c7f9f02f4" class="el">PP_WEBSOCKETREADYSTATE_CLOSED</a> = 3<br />
}</td></tr><tr class="even"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga8458f33f09ecc56fcf486c60b844678d" class="el">PP_WebSocketCloseCode</a> {<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678dace8b6cbd5ab6bdecc5762b8753702d47" class="el">PP_WEBSOCKETSTATUSCODE_NOT_SPECIFIED</a> = 1005, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678daff82b3d825f09240d64479d5ae0a2e00" class="el">PP_WEBSOCKETSTATUSCODE_NORMAL_CLOSURE</a> = 1000, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da9d8d5c41a6592a609324249950468fb4" class="el">PP_WEBSOCKETSTATUSCODE_GOING_AWAY</a> = 1001, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678daf20b614979599d2a2ed79543618d6ef4" class="el">PP_WEBSOCKETSTATUSCODE_PROTOCOL_ERROR</a> = 1002,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da4c63e46fd3e2a3b03fdcc577431f85ba" class="el">PP_WEBSOCKETSTATUSCODE_UNSUPPORTED_DATA</a> = 1003, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da75580d49b265525d2f8591be2aa02fe6" class="el">PP_WEBSOCKETSTATUSCODE_NO_STATUS_RECEIVED</a> = 1005, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678dad80b864c592819db0cb640d2b6e74a3f" class="el">PP_WEBSOCKETSTATUSCODE_ABNORMAL_CLOSURE</a> = 1006, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678daea768048eaff4826bf06550d8da0dd42" class="el">PP_WEBSOCKETSTATUSCODE_INVALID_FRAME_PAYLOAD_DATA</a> = 1007,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da4d4405b66c4b436c9bb31dfa4fa71523" class="el">PP_WEBSOCKETSTATUSCODE_POLICY_VIOLATION</a> = 1008, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da7c8d17601c982c62a933a3f721c049ef" class="el">PP_WEBSOCKETSTATUSCODE_MESSAGE_TOO_BIG</a> = 1009, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da5fae5457554a0cad877ccfa1d5636b8d" class="el">PP_WEBSOCKETSTATUSCODE_MANDATORY_EXTENSION</a> = 1010, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da7318b30a65ea442445e754453a73be81" class="el">PP_WEBSOCKETSTATUSCODE_INTERNAL_SERVER_ERROR</a> = 1011,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da8aef76170a2836b651922555aa26348d" class="el">PP_WEBSOCKETSTATUSCODE_TLS_HANDSHAKE</a> = 1015, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da3a87714e399ce00177f60f85c9a993ba" class="el">PP_WEBSOCKETSTATUSCODE_USER_REGISTERED_MIN</a> = 3000, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da08c67e1fcd33b07c350be618d7d72403" class="el">PP_WEBSOCKETSTATUSCODE_USER_REGISTERED_MAX</a> = 3999, <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da491bd1d7c9ada2c129062beb9eaeded1" class="el">PP_WEBSOCKETSTATUSCODE_USER_PRIVATE_MIN</a> = 4000,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga8458f33f09ecc56fcf486c60b844678da242327b17ab568d625627236de721e5b" class="el">PP_WEBSOCKETSTATUSCODE_USER_PRIVATE_MAX</a> = 4999<br />
}</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#gade61cdf6a7470769b571925694d91a89" class="el">PP_WebSocketReadyState</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga8458f33f09ecc56fcf486c60b844678d" class="el">PP_WebSocketCloseCode</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the `PPB_WebSocket` interface providing bi-directional, full-duplex, communications over a single TCP socket.

------------------------------------------------------------------------

Define Documentation
--------------------

<span id="a6d56a012c9350b4cc4e55b668d3fbe75" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h#a6d56a012c9350b4cc4e55b668d3fbe75" class="el">PPB_WEBSOCKET_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h#ad613dc4aff545f9e9885c415f1673107" class="el">PPB_WEBSOCKET_INTERFACE</a></td></tr></tbody></table>

<span id="ad613dc4aff545f9e9885c415f1673107" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__websocket_8h#ad613dc4aff545f9e9885c415f1673107" class="el">PPB_WEBSOCKET_INTERFACE</a>   “PPB_WebSocket;1.0”</td></tr></tbody></table>
