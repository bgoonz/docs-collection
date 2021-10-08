---json {"title":"PPB\_WheelInputEvent Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#ab9058129b7d0988881f1eea9734e4a4d" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, uint32_t modifiers, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> *wheel_delta, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> *wheel_ticks, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> scroll_by_page)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#aa67dcdcd6b98c48f5564987a0b080c13" class="el">IsWheelInputEvent</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a7a6b1fb017bb6d872b014def298f70db" class="el">GetDelta</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> wheel_event)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#acc7a5e1f0cfe6481ccc33bbb3b06cd33" class="el">GetTicks</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> wheel_event)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a51ceeec58953923770768c283405612b" class="el">GetScrollByPage</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> wheel_event)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_WheelIputEvent` interface contains pointers to several functions related to wheel input events.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ab9058129b7d0988881f1eea9734e4a4d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#ab9058129b7d0988881f1eea9734e4a4d" class="el">PPB_WheelInputEvent::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, uint32_t modifiers, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> *wheel_delta, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> *wheel_ticks, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> scroll_by_page)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#ab9058129b7d0988881f1eea9734e4a4d" class="el" title="Create() creates a wheel input event with the given parameters.">Create()</a> creates a wheel input event with the given parameters.

Normally you will get a wheel event passed through the `HandleInputEvent` and will not need to create them, but some applications may want to create their own for internal use.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="odd"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr><tr class="even"><td>[in]</td><td>wheel_delta</td><td>The scroll wheel's horizontal and vertical scroll amounts.</td></tr><tr class="odd"><td>[in]</td><td>wheel_ticks</td><td>The number of "clicks" of the scroll wheel that have produced the event.</td></tr><tr class="even"><td>[in]</td><td>scroll_by_page</td><td>When true, the user is requesting to scroll by pages. When false, the user is requesting to scroll by lines.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the new wheel input event.

<span id="a7a6b1fb017bb6d872b014def298f70db" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a7a6b1fb017bb6d872b014def298f70db" class="el">PPB_WheelInputEvent::GetDelta</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> wheel_event)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a7a6b1fb017bb6d872b014def298f70db" class="el" title="GetDelta() returns the amount vertically and horizontally the user has requested to scroll by with th...">GetDelta()</a> returns the amount vertically and horizontally the user has requested to scroll by with their mouse wheel.

A scroll down or to the right (where the content moves up or left) is represented as positive values, and a scroll up or to the left (where the content moves down or right) is represented as negative values.

This amount is system dependent and will take into account the user's preferred scroll sensitivity and potentially also nonlinear acceleration based on the speed of the scrolling.

Devices will be of varying resolution. Some mice with large detents will only generate integer scroll amounts. But fractional values are also possible, for example, on some trackpads and newer mice that don't have "clicks".

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>wheel_event</td><td>A <code>PP_Resource</code> corresponding to a wheel event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The vertical and horizontal scroll values. The units are either in pixels (when scroll\_by\_page is false) or pages (when scroll\_by\_page is true). For example, y = -3 means scroll up 3 pixels when scroll\_by\_page is false, and scroll up 3 pages when scroll\_by\_page is true.

<span id="a51ceeec58953923770768c283405612b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a51ceeec58953923770768c283405612b" class="el">PPB_WheelInputEvent::GetScrollByPage</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> wheel_event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a51ceeec58953923770768c283405612b" class="el" title="GetScrollByPage() indicates if the scroll delta x/y indicates pages or lines to scroll by...">GetScrollByPage()</a> indicates if the scroll delta x/y indicates pages or lines to scroll by.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>wheel_event</td><td>A <code>PP_Resource</code> corresponding to a wheel event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the event is a wheel event and the user is scrolling by pages. `PP_FALSE` if not or if the resource is not a wheel event.

<span id="acc7a5e1f0cfe6481ccc33bbb3b06cd33" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#acc7a5e1f0cfe6481ccc33bbb3b06cd33" class="el">PPB_WheelInputEvent::GetTicks</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> wheel_event)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#acc7a5e1f0cfe6481ccc33bbb3b06cd33" class="el" title="GetTicks() returns the number of &quot;clicks&quot; of the scroll wheel that have produced the event...">GetTicks()</a> returns the number of "clicks" of the scroll wheel that have produced the event.

The value may have system-specific acceleration applied to it, depending on the device. The positive and negative meanings are the same as for <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#a7a6b1fb017bb6d872b014def298f70db" class="el" title="GetDelta() returns the amount vertically and horizontally the user has requested to scroll by with th...">GetDelta()</a>.

If you are scrolling, you probably want to use the delta values. These tick events can be useful if you aren't doing actual scrolling and don't want or pixel values. An example may be cycling between different items in a game.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>wheel_event</td><td>A <code>PP_Resource</code> corresponding to a wheel event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of "clicks" of the scroll wheel. You may receive fractional values for the wheel ticks if the mouse wheel is high resolution or doesn't have "clicks". If your program wants discrete events (as in the "picking items" example) you should accumulate fractional click values from multiple messages until the total value reaches positive or negative one. This should represent a similar amount of scrolling as for a mouse that has a discrete mouse wheel.

<span id="aa67dcdcd6b98c48f5564987a0b080c13" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#aa67dcdcd6b98c48f5564987a0b080c13" class="el">PPB_WheelInputEvent::IsWheelInputEvent</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___wheel_input_event__1__0#aa67dcdcd6b98c48f5564987a0b080c13" class="el" title="IsWheelInputEvent() determines if a resource is a wheel event.">IsWheelInputEvent()</a> determines if a resource is a wheel event.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>wheel_event</td><td>A <code>PP_Resource</code> corresponding to an event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the given resource is a valid wheel input event.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__input__event_8h/" class="el">ppb_input_event.h</a>
