---json {"title":"PPB\_TouchInputEvent Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a7666b79ad84dcd67d9ba8ab448f6a3a7" class="el">Create</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a> type, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, uint32_t modifiers)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a1fa8f3a2ab507f8d4c7909a6cb0305f1" class="el">AddTouchPoint</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> touch_event, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a> *point)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a5ce256fff8d0440c707ee6d8392f7a23" class="el">IsTouchInputEvent</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a0e5f9c40c7a21b9a2971377245c5c00f" class="el">GetTouchCount</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a4059007ab8e5b9e7686bf5c6c8fe52a5" class="el">GetTouchByIndex</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t index)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#aaa250b041f0d9071a37592b9f78d7e22" class="el">GetTouchById</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t touch_id)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a97b9fb0b26cd8cb3c1d0e6bdd1fb6a34" class="el">GetTouchTiltByIndex</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t index)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a71df06c106c639bf8bf18ac59691c9fd" class="el">GetTouchTiltById</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t touch_id)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_TouchInputEvent` interface contains pointers to several functions related to touch events.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a1fa8f3a2ab507f8d4c7909a6cb0305f1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a1fa8f3a2ab507f8d4c7909a6cb0305f1" class="el">PPB_TouchInputEvent::AddTouchPoint</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> touch_event, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a> *point)</td></tr></tbody></table>

Adds a touch point to the touch event in the specified touch-list.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>touch_event</td><td>A <code>PP_Resource</code> corresponding to a touch event.</td></tr><tr class="even"><td>[in]</td><td>list</td><td>The list to add the touch point to.</td></tr><tr class="odd"><td>[in]</td><td>point</td><td>The point to add to the list.</td></tr></tbody></table>

<span id="a7666b79ad84dcd67d9ba8ab448f6a3a7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a7666b79ad84dcd67d9ba8ab448f6a3a7" class="el">PPB_TouchInputEvent::Create</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a> type, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, uint32_t modifiers)</td></tr></tbody></table>

Creates a touch input event with the given parameters.

Normally you will get a touch event passed through the HandleInputEvent and will not need to create them, but some applications may want to create their own for internal use. The type must be one of the touch event types. This newly created touch input event does not have any touch point in any of the touch-point lists. `AddTouchPoint` should be called to add the touch-points.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the new touch input event.

<span id="aaa250b041f0d9071a37592b9f78d7e22" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#aaa250b041f0d9071a37592b9f78d7e22" class="el">PPB_TouchInputEvent::GetTouchById</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t touch_id)<code> [read]</code></td></tr></tbody></table>

Returns the touch-point with the specified touch-id in the specified list.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a touch event.</td></tr><tr class="even"><td>[in]</td><td>list</td><td>The list.</td></tr><tr class="odd"><td>[in]</td><td>touch_id</td><td>The id of the touch-point.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_TouchPoint` representing the touch-point.

<span id="a4059007ab8e5b9e7686bf5c6c8fe52a5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a4059007ab8e5b9e7686bf5c6c8fe52a5" class="el">PPB_TouchInputEvent::GetTouchByIndex</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t index)<code> [read]</code></td></tr></tbody></table>

Returns the touch-point at the specified index from the specified list.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a touch event.</td></tr><tr class="even"><td>[in]</td><td>list</td><td>The list.</td></tr><tr class="odd"><td>[in]</td><td>index</td><td>The index.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_TouchPoint` representing the touch-point.

<span id="a0e5f9c40c7a21b9a2971377245c5c00f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a0e5f9c40c7a21b9a2971377245c5c00f" class="el">PPB_TouchInputEvent::GetTouchCount</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list)</td></tr></tbody></table>

Returns the number of touch-points in the specified list.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a touch event.</td></tr><tr class="even"><td>[in]</td><td>list</td><td>The list.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of touch-points in the specified list.

<span id="a71df06c106c639bf8bf18ac59691c9fd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a71df06c106c639bf8bf18ac59691c9fd" class="el">PPB_TouchInputEvent::GetTouchTiltById</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t touch_id)<code> [read]</code></td></tr></tbody></table>

Returns the touch-tilt with the specified touch-id in the specified list.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a touch event.</td></tr><tr class="even"><td>[in]</td><td>list</td><td>The list.</td></tr><tr class="odd"><td>[in]</td><td>touch_id</td><td>The id of the touch-point.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_FloatPoint` representing the tilt of the touch-point.

<span id="a97b9fb0b26cd8cb3c1d0e6bdd1fb6a34" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a97b9fb0b26cd8cb3c1d0e6bdd1fb6a34" class="el">PPB_TouchInputEvent::GetTouchTiltByIndex</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, <a href="/docs/native-client/pepper_dev/c/group___enums#gad5885a239d04166c8777432c81e39d0a" class="el">PP_TouchListType</a> list, uint32_t index)<code> [read]</code></td></tr></tbody></table>

Returns the touch-tilt with the specified index in the specified list.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a touch event.</td></tr><tr class="even"><td>[in]</td><td>list</td><td>The list.</td></tr><tr class="odd"><td>[in]</td><td>index</td><td>The index.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_FloatPoint` representing the tilt of the touch-point.

<span id="a5ce256fff8d0440c707ee6d8392f7a23" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a5ce256fff8d0440c707ee6d8392f7a23" class="el">PPB_TouchInputEvent::IsTouchInputEvent</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___touch_input_event__1__4#a5ce256fff8d0440c707ee6d8392f7a23" class="el" title="IsTouchInputEvent() determines if a resource is a touch event.">IsTouchInputEvent()</a> determines if a resource is a touch event.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to an event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the given resource is a valid touch input event, otherwise `PP_FALSE`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__input__event_8h/" class="el">ppb_input_event.h</a>
