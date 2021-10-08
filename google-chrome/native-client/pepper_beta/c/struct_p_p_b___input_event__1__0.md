—json {“title”:“PPB\_InputEvent Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el">RequestInputEvents</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t event_classes)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el">RequestFilteringInputEvents</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t event_classes)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#aec4b0db6ac3dca03f4d3a1c034f84a5a" class="el">ClearInputEventRequest</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t event_classes)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a292409d067d969ee6357af350f6fb544" class="el">IsInputEvent</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a1d83a144ef7cb784a34caabc81786538" class="el">GetType</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> event)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a9bf9a261e8161a3a6ec4093ba6f737b2" class="el">GetTimeStamp</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> event)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a31311048765ee5af6dd3fb62ae014372" class="el">GetModifiers</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> event)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_InputEvent` interface contains pointers to several functions related to generic input events on the browser.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="aec4b0db6ac3dca03f4d3a1c034f84a5a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#aec4b0db6ac3dca03f4d3a1c034f84a5a" class="el">PPB_InputEvent::ClearInputEventRequest</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t event_classes)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#aec4b0db6ac3dca03f4d3a1c034f84a5a" class="el" title="ClearInputEventRequest() requests that input events corresponding to the given input classes no longe...">ClearInputEventRequest()</a> requests that input events corresponding to the given input classes no longer be delivered to the instance.

By default, no input events are delivered. If you have previously requested input events via <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el" title="RequestInputEvent() requests that input events corresponding to the given input events are delivered ...">RequestInputEvents()</a> or <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el" title="RequestFilteringInputEvents() requests that input events corresponding to the given input events are ...">RequestFilteringInputEvents()</a>, this function will unregister handling for the given instance. This will allow greater browser performance for those events.

Note that you may still get some input events after clearing the flag if they were dispatched before the request was cleared. For example, if there are 3 mouse move events waiting to be delivered, and you clear the mouse event class during the processing of the first one, you’ll still receive the next two. You just won’t get more events generated.

**Parameters:**  

<table><tbody><tr class="odd"><td>instance</td><td>The <code>PP_Instance</code> of the instance requesting to no longer receive the given events.</td></tr><tr class="even"><td>event_classes</td><td>A combination of flags from <code>PP_InputEvent_Class</code> that identify the classes of events the instance is no longer interested in.</td></tr></tbody></table>

<span id="a31311048765ee5af6dd3fb62ae014372" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a31311048765ee5af6dd3fb62ae014372" class="el">PPB_InputEvent::GetModifiers</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a31311048765ee5af6dd3fb62ae014372" class="el" title="GetModifiers() returns a bitfield indicating which modifiers were down at the time of the event...">GetModifiers()</a> returns a bitfield indicating which modifiers were down at the time of the event.

This is a combination of the flags in the `PP_InputEvent_Modifier` enum.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to an input event.</td></tr></tbody></table>

**Returns:**  
The modifiers associated with the event, or 0 if the given resource is not a valid event resource.

<span id="a9bf9a261e8161a3a6ec4093ba6f737b2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a9bf9a261e8161a3a6ec4093ba6f737b2" class="el">PPB_InputEvent::GetTimeStamp</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a9bf9a261e8161a3a6ec4093ba6f737b2" class="el" title="GetTimeStamp() Returns the time that the event was generated.">GetTimeStamp()</a> Returns the time that the event was generated.

This will be before the current time since processing and dispatching the event has some overhead. Use this value to compare the times the user generated two events without being sensitive to variable processing time.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to the event.</td></tr></tbody></table>

**Returns:**  
The return value is in time ticks, which is a monotonically increasing clock not related to the wall clock time. It will not change if the user changes their clock or daylight savings time starts, so can be reliably used to compare events. This means, however, that you can’t correlate event times to a particular time of day on the system clock.

<span id="a1d83a144ef7cb784a34caabc81786538" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a1d83a144ef7cb784a34caabc81786538" class="el">PPB_InputEvent::GetType</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a1d83a144ef7cb784a34caabc81786538" class="el" title="GetType() returns the type of input event for the given input event resource.">GetType()</a> returns the type of input event for the given input event resource.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to an input event.</td></tr></tbody></table>

**Returns:**  
A `PP_InputEvent_Type` if its a valid input event or `PP_INPUTEVENT_TYPE_UNDEFINED` if the resource is invalid.

<span id="a292409d067d969ee6357af350f6fb544" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a292409d067d969ee6357af350f6fb544" class="el">PPB_InputEvent::IsInputEvent</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a292409d067d969ee6357af350f6fb544" class="el" title="IsInputEvent() returns true if the given resource is a valid input event resource.">IsInputEvent()</a> returns true if the given resource is a valid input event resource.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a generic resource.</td></tr></tbody></table>

**Returns:**  
`PP_TRUE` if the given resource is a valid input event resource.

<span id="a42dcc8edf80141680e919258f3066069" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el">PPB_InputEvent::RequestFilteringInputEvents</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t event_classes)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el" title="RequestFilteringInputEvents() requests that input events corresponding to the given input events are ...">RequestFilteringInputEvents()</a> requests that input events corresponding to the given input events are delivered to the instance for filtering.

By default, no input events are delivered. In most cases you would register to receive events by calling <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el" title="RequestInputEvent() requests that input events corresponding to the given input events are delivered ...">RequestInputEvents()</a>. In some cases, however, you may wish to filter events such that they can be bubbled up to the default handlers. In this case, register for those classes of events using this function instead of <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el" title="RequestInputEvent() requests that input events corresponding to the given input events are delivered ...">RequestInputEvents()</a>.

Filtering input events requires significantly more overhead than just delivering them to the instance. As such, you should only request filtering in those cases where it’s absolutely necessary. The reason is that it requires the browser to stop and block for the instance to handle the input event, rather than sending the input event asynchronously. This can have significant overhead.

**Example:**

       RequestInputEvents(instance, PP_INPUTEVENT_CLASS_MOUSE);
       RequestFilteringInputEvents(instance,
           PP_INPUTEVENT_CLASS_WHEEL | PP_INPUTEVENT_CLASS_KEYBOARD);

**Returns:**  
`PP_OK` if the operation succeeded, `PP_ERROR_BADARGUMENT` if instance is invalid, or `PP_ERROR_NOTSUPPORTED` if one of the event class bits were illegal. In the case of an invalid bit, all valid bits will be applied and only the illegal bits will be ignored.

<span id="a369d79730ad84d0b8dee9127c114086e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a369d79730ad84d0b8dee9127c114086e" class="el">PPB_InputEvent::RequestInputEvents</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t event_classes)</td></tr></tbody></table>

RequestInputEvent() requests that input events corresponding to the given input events are delivered to the instance.

It’s recommended that you use <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el" title="RequestFilteringInputEvents() requests that input events corresponding to the given input events are ...">RequestFilteringInputEvents()</a> for keyboard events instead of this function so that you don’t interfere with normal browser accelerators.

By default, no input events are delivered. Call this function with the classes of events you are interested in to have them be delivered to the instance. Calling this function will override any previous setting for each specified class of input events (for example, if you previously called <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el" title="RequestFilteringInputEvents() requests that input events corresponding to the given input events are ...">RequestFilteringInputEvents()</a>, this function will set those events to non-filtering mode).

Input events may have high overhead, so you should only request input events that your plugin will actually handle. For example, the browser may do optimizations for scroll or touch events that can be processed substantially faster if it knows there are no non-default receivers for that message. Requesting that such messages be delivered, even if they are processed very quickly, may have a noticeable effect on the performance of the page.

Note that synthetic mouse events will be generated from touch events if (and only if) you do not request touch events.

When requesting input events through this function, the events will be delivered and *not* bubbled to the default handlers.

**Example:**

       RequestInputEvents(instance, PP_INPUTEVENT_CLASS_MOUSE);
       RequestFilteringInputEvents(instance,
           PP_INPUTEVENT_CLASS_WHEEL | PP_INPUTEVENT_CLASS_KEYBOARD);

**Parameters:**  

<table><tbody><tr class="odd"><td>instance</td><td>The <code>PP_Instance</code> of the instance requesting the given events.</td></tr><tr class="even"><td>event_classes</td><td>A combination of flags from <code>PP_InputEvent_Class</code> that identifies the classes of events the instance is requesting. The flags are combined by logically ORing their values.</td></tr></tbody></table>

**Returns:**  
`PP_OK` if the operation succeeded, `PP_ERROR_BADARGUMENT` if instance is invalid, or `PP_ERROR_NOTSUPPORTED` if one of the event class bits were illegal. In the case of an invalid bit, all valid bits will be applied and only the illegal bits will be ignored. The most common cause of a `PP_ERROR_NOTSUPPORTED` return value is requesting keyboard events, these must use <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___input_event__1__0#a42dcc8edf80141680e919258f3066069" class="el" title="RequestFilteringInputEvents() requests that input events corresponding to the given input events are ...">RequestFilteringInputEvents()</a>.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__input__event_8h/" class="el">ppb_input_event.h</a>
