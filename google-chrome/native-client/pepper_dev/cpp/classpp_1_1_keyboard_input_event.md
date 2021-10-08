---json {"title":"pp::KeyboardInputEvent Class Reference"} ---

Inheritance diagram for pp::KeyboardInputEvent:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a07197d3bf22df18ab201dd593ec14b46" class="el">KeyboardInputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#ae0817f051306805db56dbbf837da57bb" class="el">KeyboardInputEvent</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp;event)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a3adab90fc81122554ec878ab2fb8d506" class="el">KeyboardInputEvent</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_InputEvent_Type type, PP_TimeTicks time_stamp, uint32_t modifiers, uint32_t key_code, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;character_text)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a95f16a4bee09b84cb38614f457038dca" class="el">KeyboardInputEvent</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_InputEvent_Type type, PP_TimeTicks time_stamp, uint32_t modifiers, uint32_t key_code, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;character_text, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;code)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a5d6c799091a2adce32d3e20fd1a63017" class="el">GetKeyCode</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a343bd835af56bd7875b0d82361680e4a" class="el">GetCharacterText</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#ad65274e6cb38165fa7bb5d03f2a76b93" class="el">GetCode</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a07197d3bf22df18ab201dd593ec14b46" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a07197d3bf22df18ab201dd593ec14b46" class="el">pp::KeyboardInputEvent::KeyboardInputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> keyboard input event object.

<span id="ae0817f051306805db56dbbf837da57bb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a07197d3bf22df18ab201dd593ec14b46" class="el">pp::KeyboardInputEvent::KeyboardInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp; </td><td><em>event</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a keyboard input event object from the provided generic input event.

If the given event is itself <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> or is not a keyboard input event, the keybaord object will be <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>event</td><td>A generic input event.</td></tr></tbody></table>

<span id="a3adab90fc81122554ec878ab2fb8d506" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a07197d3bf22df18ab201dd593ec14b46" class="el">pp::KeyboardInputEvent::KeyboardInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_InputEvent_Type </td><td><em>type</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_TimeTicks </td><td><em>time_stamp</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>modifiers</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>key_code</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>character_text</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Constructs a keyboard input even from the given parameters.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr><tr class="odd"><td>[in]</td><td>key_code</td><td>This value reflects the DOM KeyboardEvent <code>keyCode</code> field. Chrome populates this with the Windows-style Virtual Key code of the key.</td></tr><tr class="even"><td>[in]</td><td>character_text</td><td>This value represents the typed character as a UTF-8 string.</td></tr></tbody></table>

<span id="a95f16a4bee09b84cb38614f457038dca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a07197d3bf22df18ab201dd593ec14b46" class="el">pp::KeyboardInputEvent::KeyboardInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_InputEvent_Type </td><td><em>type</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_TimeTicks </td><td><em>time_stamp</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>modifiers</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>key_code</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>character_text</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>code</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Constructs a keyboard input even from the given parameters.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr><tr class="odd"><td>[in]</td><td>key_code</td><td>This value reflects the DOM KeyboardEvent <code>keyCode</code> field. Chrome populates this with the Windows-style Virtual Key code of the key.</td></tr><tr class="even"><td>[in]</td><td>character_text</td><td>This value represents the typed character as a UTF-8 string.</td></tr><tr class="odd"><td>[in]</td><td>code</td><td>This value reflects the DOM KeyboardEvent <code>code</code> field, which identifies the physical key associated with the event.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a343bd835af56bd7875b0d82361680e4a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a343bd835af56bd7875b0d82361680e4a" class="el">pp::KeyboardInputEvent::GetCharacterText</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the typed character for the given character event.

**Returns:**  
A string var representing a single typed character for character input events. For non-character input events the return value will be an undefined var.

<span id="ad65274e6cb38165fa7bb5d03f2a76b93" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#ad65274e6cb38165fa7bb5d03f2a76b93" class="el">pp::KeyboardInputEvent::GetCode</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the DOM |code| for the keyboard event.

**Returns:**  
A string var representing a physical key that was pressed to generate this event.

<span id="a5d6c799091a2adce32d3e20fd1a63017" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_keyboard_input_event#a5d6c799091a2adce32d3e20fd1a63017" class="el">pp::KeyboardInputEvent::GetKeyCode</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the DOM keyCode field for the keyboard event.

Chrome populates this with the Windows-style Virtual Key code of the key.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/input__event_8h/" class="el">input_event.h</a>
