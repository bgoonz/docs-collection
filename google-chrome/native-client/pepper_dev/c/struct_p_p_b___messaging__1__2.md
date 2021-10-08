---json {"title":"PPB\_Messaging Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a3ad76397ae4e47e768a6b12d8dc0ea11" class="el">PostMessage</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> message)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#ae5abee73dc21a290514f7f3554a7e895" class="el">RegisterMessageHandler</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p_p___message_handler__0__2/" class="el">PPP_MessageHandler</a> *handler, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a898754602cac55875f298938e18bf017" class="el">UnregisterMessageHandler</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_Messaging` interface is implemented by the browser and is related to sending messages to JavaScript message event listeners on the DOM element associated with specific module instance.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a3ad76397ae4e47e768a6b12d8dc0ea11" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a3ad76397ae4e47e768a6b12d8dc0ea11" class="el">PPB_Messaging::PostMessage</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> message)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a3ad76397ae4e47e768a6b12d8dc0ea11" class="el" title="PostMessage() asynchronously invokes any listeners for message events on the DOM element for the give...">PostMessage()</a> asynchronously invokes any listeners for message events on the DOM element for the given module instance.

A call to <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a3ad76397ae4e47e768a6b12d8dc0ea11" class="el" title="PostMessage() asynchronously invokes any listeners for message events on the DOM element for the give...">PostMessage()</a> will not block while the message is processed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>message</td><td>A <code>PP_Var</code> containing the data to be sent to JavaScript. <code>message</code> can be any <code>PP_Var</code> type except <code>PP_VARTYPE_OBJECT</code>. Array/Dictionary types are supported from Chrome M29 onward. All var types are copied when passing them to JavaScript.</td></tr></tbody></table>

When passing array or dictionary `PP_Var`s, the entire reference graph will be converted and transferred. If the reference graph has cycles, the message will not be sent and an error will be logged to the console.

Listeners for message events in JavaScript code will receive an object conforming to the HTML 5 `MessageEvent` interface. Specifically, the value of message will be contained as a property called data in the received `MessageEvent`.

This messaging system is similar to the system used for listening for messages from Web Workers. Refer to `http://www.whatwg.org/specs/web-workers/current-work/` for further information.

**Example:**

     <body>
       <object id="plugin"
               type="application/x-ppapi-postMessage-example"/>
       <script type="text/javascript">
         var plugin = document.getElementById('plugin');
         plugin.addEventListener("message",
                                 function(message) { alert(message.data); },
                                 false);
       </script>
     </body>

The module instance then invokes <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a3ad76397ae4e47e768a6b12d8dc0ea11" class="el" title="PostMessage() asynchronously invokes any listeners for message events on the DOM element for the give...">PostMessage()</a> as follows:

      char hello_world[] = "Hello world!";
      PP_Var hello_var = ppb_var_interface->VarFromUtf8(instance,
                                                        hello_world,
                                                        sizeof(hello_world));
      ppb_messaging_interface->PostMessage(instance, hello_var); // Copies var.
      ppb_var_interface->Release(hello_var);

The browser will pop-up an alert saying "Hello world!"

<span id="ae5abee73dc21a290514f7f3554a7e895" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#ae5abee73dc21a290514f7f3554a7e895" class="el">PPB_Messaging::RegisterMessageHandler</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, void *user_data, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p_p___message_handler__0__2/" class="el">PPP_MessageHandler</a> *handler, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop)</td></tr></tbody></table>

Registers a handler for receiving messages from JavaScript.

If a handler is registered this way, it will replace PPP\_Messaging, and all messages sent from JavaScript via postMessage and postMessageAndAwaitResponse will be dispatched to `handler`.

The function calls will be dispatched via `message_loop`. This means that the functions will be invoked on the thread to which `message_loop` is attached, when `message_loop` is run. It is illegal to pass the main thread message loop; RegisterMessageHandler will return PP\_ERROR\_WRONG\_THREAD in that case. If you quit `message_loop` before calling Unregister(), the browser will not be able to call functions in the plugin's message handler any more. That could mean missing some messages or could cause a leak if you depend on Destroy() to free hander data. So you should, whenever possible, Unregister() the handler prior to quitting its event loop.

Attempting to register a message handler when one is already registered will cause the current MessageHandler to be unregistered and replaced. In that case, no messages will be sent to the "default" message handler (PPP\_Messaging). Messages will stop arriving at the prior message handler and will begin to be dispatched at the new message handler.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>A pointer the plugin may choose to use when handling calls to functions within PPP_MessageHandler. The browser will pass this same pointer when invoking functions within PPP_MessageHandler.</td></tr><tr class="odd"><td>[in]</td><td>handler</td><td>The plugin-provided set of functions for handling messages.</td></tr><tr class="even"><td>[in]</td><td>message_loop</td><td>Represents the message loop on which PPP_MessageHandler functions should be invoked.</td></tr></tbody></table>

<!-- -->

**Returns:**  
PP\_OK on success, or an error from <a href="/docs/native-client/pepper_dev/c/pp__errors_8h/" class="el" title="This file defines an enumeration of all PPAPI error codes.">pp_errors.h</a>.

<span id="a898754602cac55875f298938e18bf017" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___messaging__1__2#a898754602cac55875f298938e18bf017" class="el">PPB_Messaging::UnregisterMessageHandler</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Unregisters the current message handler for `instance` if one is registered.

After this call, the message handler (if one was registered) will have "Destroy" called on it and will receive no further messages after that point. After that point, all messages sent from JavaScript using postMessage() will be dispatched to PPP\_Messaging (if the plugin supports PPP\_MESSAGING\_INTERFACE). Attempts to call postMessageAndAwaitResponse() from JavaScript will fail.

Attempting to unregister a message handler when none is registered has no effect.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__messaging_8h/" class="el">ppb_messaging.h</a>
