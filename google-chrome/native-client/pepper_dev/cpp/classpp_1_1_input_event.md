---json {"title":"pp::InputEvent Class Reference"} ---

Inheritance diagram for pp::InputEvent:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#ac7581e4321abe8de6f3b48d70f4aa65d" class="el">InputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a1d4f7d3fb88de3cccc60ab26b92ccf23" class="el">InputEvent</a> (PP_Resource input_event_resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a2492183af4fecec44a423a5b7eae6faf" class="el">~InputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;">PP_InputEvent_Type </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a73ca79c06ff9a39304e3b390090f03dc" class="el">GetType</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_TimeTicks </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#acc79ecdcf19f5b8a8a7268fc8ff51531" class="el">GetTimeStamp</a> () const</td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a6f94a5cd8453f1b69e55aadde73354e7" class="el">GetModifiers</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This class represents an input event resource.

Normally you will get passed this object through the HandleInputEvent() function on the `Instance` object.

Typically you would check the type of the event and then create the appropriate event-specific object to query the properties.

**Example:**

     bool MyInstance::HandleInputEvent(const pp::InputEvent& event) {
       switch (event.GetType()) {
         case PP_INPUTEVENT_TYPE_MOUSEDOWN {
           pp::MouseInputEvent mouse_event(event);
           return HandleMouseDown(mouse_event.GetMousePosition());
         }
         default:
           return false;
     }

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="ac7581e4321abe8de6f3b48d70f4aa65d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#ac7581e4321abe8de6f3b48d70f4aa65d" class="el">pp::InputEvent::InputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor that creates an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event/" class="el" title="This class represents an input event resource.">InputEvent</a> object.

<span id="a1d4f7d3fb88de3cccc60ab26b92ccf23" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#ac7581e4321abe8de6f3b48d70f4aa65d" class="el">pp::InputEvent::InputEvent</a></td><td>(</td><td>PP_Resource </td><td><em>input_event_resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

This constructor constructs an input event from the provided input event resource ID.

The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event/" class="el" title="This class represents an input event resource.">InputEvent</a> object will be <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> if the given resource is not a valid input event.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>input_event_resource</td><td>A input event resource ID.</td></tr></tbody></table>

<span id="a2492183af4fecec44a423a5b7eae6faf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a2492183af4fecec44a423a5b7eae6faf" class="el">pp::InputEvent::~InputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a6f94a5cd8453f1b69e55aadde73354e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a6f94a5cd8453f1b69e55aadde73354e7" class="el">pp::InputEvent::GetModifiers</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a6f94a5cd8453f1b69e55aadde73354e7" class="el" title="GetModifiers() returns a bitfield indicating which modifiers were down at the time of the event...">GetModifiers()</a> returns a bitfield indicating which modifiers were down at the time of the event.

This is a combination of the flags in the `PP_InputEvent_Modifier` enum.

**Returns:**  
The modifiers associated with the event, or 0 if the given resource is not a valid event resource.

<span id="acc79ecdcf19f5b8a8a7268fc8ff51531" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_TimeTicks <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#acc79ecdcf19f5b8a8a7268fc8ff51531" class="el">pp::InputEvent::GetTimeStamp</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#acc79ecdcf19f5b8a8a7268fc8ff51531" class="el" title="GetTimeStamp() returns the time that the event was generated.">GetTimeStamp()</a> returns the time that the event was generated.

The time will be before the current time since processing and dispatching the event has some overhead. Use this value to compare the times the user generated two events without being sensitive to variable processing time.

The return value is in time ticks, which is a monotonically increasing clock not related to the wall clock time. It will not change if the user changes their clock or daylight savings time starts, so can be reliably used to compare events. This means, however, that you can't correlate event times to a particular time of day on the system clock.

**Returns:**  
A `PP_TimeTicks` containing the time the event was generated.

<span id="a73ca79c06ff9a39304e3b390090f03dc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_InputEvent_Type <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a73ca79c06ff9a39304e3b390090f03dc" class="el">pp::InputEvent::GetType</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event#a73ca79c06ff9a39304e3b390090f03dc" class="el" title="GetType() returns the type of input event for this input event object.">GetType()</a> returns the type of input event for this input event object.

**Returns:**  
A `PP_InputEvent_Type` if successful, PP\_INPUTEVENT\_TYPE\_UNDEFINED if the resource is invalid.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/input__event_8h/" class="el">input_event.h</a>
