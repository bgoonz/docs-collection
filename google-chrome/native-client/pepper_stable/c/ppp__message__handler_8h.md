---json {"title":"ppp\_message\_handler.h File Reference"} ---

Include dependency graph for ppp\_message\_handler.h:

![](/docs/native-client/pepper_stable/c/ppp__message__handler_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2/" class="el">PPP_MessageHandler</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPP_MessageHandler</code> interface is implemented by the plugin if the plugin wants to receive messages from a thread other than the main Pepper thread, or if the plugin wants to handle blocking messages which JavaScript may send via postMessageAndAwaitResponse(). <a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#details">More...</a><br />
</td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct<br />
<a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2/" class="el">PPP_MessageHandler</a> </td><td><a href="/docs/native-client/pepper_stable/c/group___interfaces#gac581e9ff6162ebea9f26153854e7d6f2" class="el">PPP_MessageHandler</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the `PPP_MessageHandler` interface that plugins can implement and register using <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___messaging__1__2#ae5abee73dc21a290514f7f3554a7e895" class="el" title="Registers a handler for receiving messages from JavaScript.">PPB_Messaging::RegisterMessageHandler</a> in order to handle messages sent from JavaScript via postMessage() or postMessageAndAwaitResponse().
