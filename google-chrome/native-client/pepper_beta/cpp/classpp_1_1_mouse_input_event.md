---json {"title":"pp::MouseInputEvent Class Reference"} ---

Inheritance diagram for pp::MouseInputEvent:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a3a7fa73996bd504fc3aa86c447222761" class="el">MouseInputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#ad63fc6a3e5f29b5cb787fc74ebf0b33d" class="el">MouseInputEvent</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp;event)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a4e2f16fb54382135f07cf53e22905d3a" class="el">MouseInputEvent</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_InputEvent_Type type, PP_TimeTicks time_stamp, uint32_t modifiers, PP_InputEvent_MouseButton mouse_button, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;mouse_position, int32_t click_count, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;mouse_movement)</td></tr><tr class="even"><td style="text-align: right;">PP_InputEvent_MouseButton </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#ae953b64120ab5c84c31114d1e5d15e1b" class="el">GetButton</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a95bb484c3628871ed4d8cbd3b44effe2" class="el">GetPosition</a> () const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a2e125cde20848ee70495e2f981b7417e" class="el">GetClickCount</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a33e589dc8460c5fd2064cef39f19970b" class="el">GetMovement</a> () const</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This class handles mouse events.

---

## Constructor & Destructor Documentation

<span id="a3a7fa73996bd504fc3aa86c447222761" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a3a7fa73996bd504fc3aa86c447222761" class="el">pp::MouseInputEvent::MouseInputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> mouse input event object.

<span id="ad63fc6a3e5f29b5cb787fc74ebf0b33d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a3a7fa73996bd504fc3aa86c447222761" class="el">pp::MouseInputEvent::MouseInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp; </td><td><em>event</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

This constructor constructs a mouse input event object from the provided generic input event.

If the given event is itself <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> or is not a mouse input event, the mouse object will be <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

**Parameters:**

<table><tbody><tr class="odd"><td>event</td><td>An <code>InputEvent</code>.</td></tr></tbody></table>

<span id="a4e2f16fb54382135f07cf53e22905d3a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a3a7fa73996bd504fc3aa86c447222761" class="el">pp::MouseInputEvent::MouseInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_InputEvent_Type </td><td><em>type</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_TimeTicks </td><td><em>time_stamp</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>modifiers</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_InputEvent_MouseButton </td><td><em>mouse_button</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>mouse_position</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>click_count</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>mouse_movement</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

This constructor manually constructs a mouse event from the provided parameters.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr><tr class="odd"><td>[in]</td><td>mouse_button</td><td>The button that changed for mouse down or up events. This value will be <code>PP_EVENT_MOUSEBUTTON_NONE</code> for mouse move, enter, and leave events.</td></tr><tr class="even"><td>[in]</td><td>mouse_position</td><td>A <code>Point</code> containing the x and y position of the mouse when the event occurred.</td></tr><tr class="odd"><td>[in]</td><td>click_count</td><td></td></tr><tr class="even"><td>[in]</td><td>mouse_movement</td><td>The change in position of the mouse.</td></tr></tbody></table>

---

## Member Function Documentation

<span id="ae953b64120ab5c84c31114d1e5d15e1b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_InputEvent_MouseButton <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#ae953b64120ab5c84c31114d1e5d15e1b" class="el">pp::MouseInputEvent::GetButton</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#ae953b64120ab5c84c31114d1e5d15e1b" class="el" title="GetButton() returns the mouse position for a mouse input event.">GetButton()</a> returns the mouse position for a mouse input event.

**Returns:**  
The mouse button associated with mouse down and up events. This value will be PP_EVENT_MOUSEBUTTON_NONE for mouse move, enter, and leave events, and for all non-mouse events.

<span id="a2e125cde20848ee70495e2f981b7417e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a2e125cde20848ee70495e2f981b7417e" class="el">pp::MouseInputEvent::GetClickCount</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<span id="a33e589dc8460c5fd2064cef39f19970b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a33e589dc8460c5fd2064cef39f19970b" class="el">pp::MouseInputEvent::GetMovement</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the change in position of the mouse.

When the mouse is locked, although the mouse position doesn't actually change, this function still provides movement information, which indicates what the change in position would be had the mouse not been locked.

**Returns:**  
The change in position of the mouse, relative to the previous position.

<span id="a95bb484c3628871ed4d8cbd3b44effe2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a95bb484c3628871ed4d8cbd3b44effe2" class="el">pp::MouseInputEvent::GetPosition</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_input_event#a95bb484c3628871ed4d8cbd3b44effe2" class="el" title="GetPosition() returns the pixel location of a mouse input event.">GetPosition()</a> returns the pixel location of a mouse input event.

When the mouse is locked, it returns the last known mouse position just as mouse lock was entered.

**Returns:**  
The point associated with the mouse event, relative to the upper- left of the instance receiving the event. These values can be negative for mouse drags. The return value will be (0, 0) for non-mouse events.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/input__event_8h/" class="el">input_event.h</a>
