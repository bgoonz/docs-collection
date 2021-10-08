---json {"title":"PPP\_MessageHandler Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#ab8b6b045541790d1d0ca862d0a225f27" class="el">HandleMessage</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *message)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#aca37a8a59cb6a0b9be2846a2ab3e2828" class="el">HandleBlockingMessage</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *message, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *response)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#a0804b4fbaab3b6abedd888e96107fd4d" class="el">Destroy</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPP_MessageHandler` interface is implemented by the plugin if the plugin wants to receive messages from a thread other than the main Pepper thread, or if the plugin wants to handle blocking messages which JavaScript may send via postMessageAndAwaitResponse().

This interface struct should not be returned by PPP\_GetInterface; instead it must be passed as a parameter to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___messaging__1__2#ae5abee73dc21a290514f7f3554a7e895" class="el" title="Registers a handler for receiving messages from JavaScript.">PPB_Messaging::RegisterMessageHandler</a>.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a0804b4fbaab3b6abedd888e96107fd4d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#a0804b4fbaab3b6abedd888e96107fd4d" class="el">PPP_MessageHandler::Destroy</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data)</td></tr></tbody></table>

Invoked when the handler object is no longer needed.

After this, no more calls will be made which pass this same value for `instance` and `user_data`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>is the same pointer which was provided by a call to RegisterMessageHandler.</td></tr></tbody></table>

<span id="aca37a8a59cb6a0b9be2846a2ab3e2828" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#aca37a8a59cb6a0b9be2846a2ab3e2828" class="el">PPP_MessageHandler::HandleBlockingMessage</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *message, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *response)</td></tr></tbody></table>

Invoked as a result of JavaScript invoking postMessageAndAwaitResponse() on the plugin's DOM element.

NOTE: JavaScript execution is blocked during the duration of this call. Hence, the plugin should respond as quickly as possible. For this reason, blocking completion callbacks are disallowed while handling a blocking message.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>is the same pointer which was provided by a call to RegisterMessageHandler().</td></tr><tr class="odd"><td>[in]</td><td>message</td><td>is a copy of the parameter that JavaScript provided to postMessageAndAwaitResponse().</td></tr><tr class="even"><td>[out]</td><td>response</td><td>will be copied to a JavaScript object which is returned as the result of postMessageAndAwaitResponse() to the invoking</td></tr></tbody></table>

<span id="ab8b6b045541790d1d0ca862d0a225f27" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_p___message_handler__0__2#ab8b6b045541790d1d0ca862d0a225f27" class="el">PPP_MessageHandler::HandleMessage</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> *message)</td></tr></tbody></table>

Invoked as a result of JavaScript invoking postMessage() on the plugin's DOM element.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>is the same pointer which was provided by a call to RegisterMessageHandler().</td></tr><tr class="odd"><td>[in]</td><td>message</td><td>A copy of the parameter that JavaScript provided to postMessage().</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppp__message__handler_8h/" class="el">ppp_message_handler.h</a>
