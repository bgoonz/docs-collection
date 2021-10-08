---json {"title":"PPP\_InputEvent Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___input_event__0__1#ae684a39a2bf6b58aee0f7420aab43150" class="el">HandleInputEvent</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> input_event)</td></tr></tbody></table>

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ae684a39a2bf6b58aee0f7420aab43150" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___input_event__0__1#ae684a39a2bf6b58aee0f7420aab43150" class="el">PPP_InputEvent::HandleInputEvent</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> input_event)</td></tr></tbody></table>

Function for receiving input events from the browser.

In order to receive input events, you must register for them by calling <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el" title="RequestInputEvent() requests that input events corresponding to the given input events are delivered ...">PPB_InputEvent.RequestInputEvents()</a> or RequestFilteringInputEvents(). By default, no events are delivered.

If the event was handled, it will not be forwarded to the default handlers in the web page. If it was not handled, it may be dispatched to a default handler. So it is important that an instance respond accurately with whether event propagation should continue.

Event propagation also controls focus. If you handle an event like a mouse event, typically the instance will be given focus. Returning false from a filtered event handler or not registering for an event type means that the click will be given to a lower part of the page and your instance will not receive focus. This allows an instance to be partially transparent, where clicks on the transparent areas will behave like clicks to the underlying page.

In general, you should try to keep input event handling short. Especially for filtered input events, the browser or page may be blocked waiting for you to respond.

The caller of this function will maintain a reference to the input event resource during this call. Unless you take a reference to the resource to hold it for later, you don't need to release it.

**Note:** If you're not receiving input events, make sure you register for the event classes you want by calling RequestInputEvents or RequestFilteringInputEvents. If you're still not receiving keyboard input events, make sure you're returning true (or using a non-filtered event handler) for mouse events. Otherwise, the instance will not receive focus and keyboard events will not be sent.

**See also:**  
<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el" title="RequestInputEvent() requests that input events corresponding to the given input events are delivered ...">PPB_InputEvent.RequestInputEvents</a> and <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el" title="RequestFilteringInputEvents() requests that input events corresponding to the given input events are ...">PPB_InputEvent.RequestFilteringInputEvents</a>

<!-- -->

**Returns:**  
PP\_TRUE if the event was handled, PP\_FALSE if not. If you have registered to filter this class of events by calling RequestFilteringInputEvents, and you return PP\_FALSE, the event will be forwarded to the page (and eventually the browser) for the default handling. For non-filtered events, the return value will be ignored.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppp__input__event_8h/" class="el">ppp_input_event.h</a>
