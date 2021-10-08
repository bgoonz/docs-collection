—json {“title”:“pp::TouchInputEvent Class Reference”} —

Inheritance diagram for pp::TouchInputEvent:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a29020b28f060c5ce45ae5c3fc7512e43" class="el">TouchInputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a601fab40cbb3e8f2f1824f655192b541" class="el">TouchInputEvent</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp;event)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a4a14ab4999f452f368e61c815c976eb3" class="el">TouchInputEvent</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_InputEvent_Type type, PP_TimeTicks time_stamp, uint32_t modifiers)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a0a323b8bd08e02d816b6fffa9b6299c0" class="el">AddTouchPoint</a> (PP_TouchListType list, PP_TouchPoint point)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a5bdc7a4cd409586cab33e509dad43461" class="el">GetTouchCount</a> (PP_TouchListType list) const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el">TouchPoint</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#ac68cc82bbf2fcc88d449c5430cc02505" class="el">GetTouchByIndex</a> (PP_TouchListType list, uint32_t index) const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el">TouchPoint</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a66228762dbdfbb3404853a87c37b1736" class="el">GetTouchById</a> (PP_TouchListType list, uint32_t id) const</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a29020b28f060c5ce45ae5c3fc7512e43" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a29020b28f060c5ce45ae5c3fc7512e43" class="el">pp::TouchInputEvent::TouchInputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> touch input event object.

<span id="a601fab40cbb3e8f2f1824f655192b541" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a29020b28f060c5ce45ae5c3fc7512e43" class="el">pp::TouchInputEvent::TouchInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp; </td><td><em>event</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a touch input event object from the given generic input event.

If the given event is itself <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> or is not a touch input event, the touch object will be <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

<span id="a4a14ab4999f452f368e61c815c976eb3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a29020b28f060c5ce45ae5c3fc7512e43" class="el">pp::TouchInputEvent::TouchInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_InputEvent_Type </td><td><em>type</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_TimeTicks </td><td><em>time_stamp</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>modifiers</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Constructs a touch input even from the given parameters.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a0a323b8bd08e02d816b6fffa9b6299c0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a0a323b8bd08e02d816b6fffa9b6299c0" class="el">pp::TouchInputEvent::AddTouchPoint</a></td><td>(</td><td>PP_TouchListType </td><td><em>list</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_TouchPoint </td><td><em>point</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Adds the touch-point to the specified TouchList.

<span id="a66228762dbdfbb3404853a87c37b1736" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el">TouchPoint</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a66228762dbdfbb3404853a87c37b1736" class="el">pp::TouchInputEvent::GetTouchById</a></td><td>(</td><td>PP_TouchListType </td><td><em>list</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>id</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td>const</td></tr></tbody></table>

**Returns:**  
The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a> in the given list with the given identifier, or an empty <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a> if the list does not contain a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a> with that identifier.

<span id="ac68cc82bbf2fcc88d449c5430cc02505" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el">TouchPoint</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#ac68cc82bbf2fcc88d449c5430cc02505" class="el">pp::TouchInputEvent::GetTouchByIndex</a></td><td>(</td><td>PP_TouchListType </td><td><em>list</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>index</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td>const</td></tr></tbody></table>

**Returns:**  
The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a> at the given index of the given list, or an empty <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a> if the index is out of range.

<span id="a5bdc7a4cd409586cab33e509dad43461" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_touch_input_event#a5bdc7a4cd409586cab33e509dad43461" class="el">pp::TouchInputEvent::GetTouchCount</a></td><td>(</td><td>PP_TouchListType </td><td><em>list</em></td><td>)</td><td>const</td></tr></tbody></table>

**Returns:**  
The number of TouchPoints in this TouchList.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/input__event_8h/" class="el">input_event.h</a>
