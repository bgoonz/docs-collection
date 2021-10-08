---json {"title":"pp::WheelInputEvent Class Reference"} ---

Inheritance diagram for pp::WheelInputEvent:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a85e0f60e68512da2339d61158371fa59" class="el">WheelInputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#ab933e1f6aac0f96cdb2d84153bf957ca" class="el">WheelInputEvent</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp;event)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a5b9fc5bc86d59a7a5f7703511e41fb33" class="el">WheelInputEvent</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_TimeTicks time_stamp, uint32_t modifiers, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;wheel_delta, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;wheel_ticks, bool scroll_by_page)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#ac9cfe394244f9ea55a842a0cd5ee7ab8" class="el">GetDelta</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a6c841300d5c71d9cf83eec7da8bbf084" class="el">GetTicks</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a8082fa4d12d5b66aa0364825d1549ca6" class="el">GetScrollByPage</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a85e0f60e68512da2339d61158371fa59" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a85e0f60e68512da2339d61158371fa59" class="el">pp::WheelInputEvent::WheelInputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> wheel input event object.

<span id="ab933e1f6aac0f96cdb2d84153bf957ca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a85e0f60e68512da2339d61158371fa59" class="el">pp::WheelInputEvent::WheelInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp; </td><td><em>event</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

This constructor constructs a wheel input event object from the provided generic input event.

If the given event is itself <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> or is not a wheel input event, the wheel object will be <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>event</td><td>A generic input event.</td></tr></tbody></table>

<span id="a5b9fc5bc86d59a7a5f7703511e41fb33" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a85e0f60e68512da2339d61158371fa59" class="el">pp::WheelInputEvent::WheelInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_TimeTicks </td><td><em>time_stamp</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>modifiers</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>wheel_delta</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>wheel_ticks</em>,</td></tr><tr class="even"><td></td><td></td><td>bool </td><td><em>scroll_by_page</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Constructs a wheel input even from the given parameters.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="odd"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr><tr class="even"><td>[in]</td><td>wheel_delta</td><td>The scroll wheel's horizontal and vertical scroll amounts.</td></tr><tr class="odd"><td>[in]</td><td>wheel_ticks</td><td>The number of "clicks" of the scroll wheel that have produced the event.</td></tr><tr class="even"><td>[in]</td><td>scroll_by_page</td><td>When true, the user is requesting to scroll by pages. When false, the user is requesting to scroll by lines.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="ac9cfe394244f9ea55a842a0cd5ee7ab8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#ac9cfe394244f9ea55a842a0cd5ee7ab8" class="el">pp::WheelInputEvent::GetDelta</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#ac9cfe394244f9ea55a842a0cd5ee7ab8" class="el" title="GetDelta() returns the amount vertically and horizontally the user has requested to scroll by with th...">GetDelta()</a> returns the amount vertically and horizontally the user has requested to scroll by with their mouse wheel.

A scroll down or to the right (where the content moves up or left) is represented as positive values, and a scroll up or to the left (where the content moves down or right) is represented as negative values.

This amount is system dependent and will take into account the user's preferred scroll sensitivity and potentially also nonlinear acceleration based on the speed of the scrolling.

Devices will be of varying resolution. Some mice with large detents will only generate integer scroll amounts. But fractional values are also possible, for example, on some trackpads and newer mice that don't have "clicks".

**Returns:**  
The vertical and horizontal scroll values. The units are either in pixels (when scroll\_by\_page is false) or pages (when scroll\_by\_page is true). For example, y = -3 means scroll up 3 pixels when scroll\_by\_page is false, and scroll up 3 pages when scroll\_by\_page is true.

<span id="a8082fa4d12d5b66aa0364825d1549ca6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a8082fa4d12d5b66aa0364825d1549ca6" class="el">pp::WheelInputEvent::GetScrollByPage</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a8082fa4d12d5b66aa0364825d1549ca6" class="el" title="GetScrollByPage() indicates if the scroll delta x/y indicates pages or lines to scroll by...">GetScrollByPage()</a> indicates if the scroll delta x/y indicates pages or lines to scroll by.

**Returns:**  
true if the event is a wheel event and the user is scrolling by pages, false if not or if the resource is not a wheel event.

<span id="a6c841300d5c71d9cf83eec7da8bbf084" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a6c841300d5c71d9cf83eec7da8bbf084" class="el">pp::WheelInputEvent::GetTicks</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#a6c841300d5c71d9cf83eec7da8bbf084" class="el" title="GetTicks() returns the number of &quot;clicks&quot; of the scroll wheel that have produced the event...">GetTicks()</a> returns the number of "clicks" of the scroll wheel that have produced the event.

The value may have system-specific acceleration applied to it, depending on the device. The positive and negative meanings are the same as for <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_wheel_input_event#ac9cfe394244f9ea55a842a0cd5ee7ab8" class="el" title="GetDelta() returns the amount vertically and horizontally the user has requested to scroll by with th...">GetDelta()</a>.

If you are scrolling, you probably want to use the delta values. These tick events can be useful if you aren't doing actual scrolling and don't want or pixel values. An example may be cycling between different items in a game.

**Returns:**  
The number of "clicks" of the scroll wheel. You may receive fractional values for the wheel ticks if the mouse wheel is high resolution or doesn't have "clicks". If your program wants discrete events (as in the "picking items" example) you should accumulate fractional click values from multiple messages until the total value reaches positive or negative one. This should represent a similar amount of scrolling as for a mouse that has a discrete mouse wheel.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/input__event_8h/" class="el">input_event.h</a>
