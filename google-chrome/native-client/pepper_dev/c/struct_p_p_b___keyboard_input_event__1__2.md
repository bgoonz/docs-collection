---json {"title":"PPB\_KeyboardInputEvent Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a7f685c043948fdb5a166f5bf6a342e96" class="el">Create</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a> type, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, uint32_t modifiers, uint32_t key_code, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> character_text, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> code)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#ae3fed704fb8f527fb7fd94e8c34ac13a" class="el">IsKeyboardInputEvent</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a1862b7cf375179c7a990b61ffad1ce6a" class="el">GetKeyCode</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> key_event)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#aaf9bb52daef6052c4f4bf4f84efee9d2" class="el">GetCharacterText</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> character_event)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a84c476e78ea7c066f9e89b5ae828ffa8" class="el">GetCode</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> key_event)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_KeyboardInputEvent` interface contains pointers to several functions related to keyboard input events.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a7f685c043948fdb5a166f5bf6a342e96" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a7f685c043948fdb5a166f5bf6a342e96" class="el">PPB_KeyboardInputEvent::Create</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a> type, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, uint32_t modifiers, uint32_t key_code, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> character_text, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> code)</td></tr></tbody></table>

Creates a keyboard input event with the given parameters.

Normally you will get a keyboard event passed through the HandleInputEvent and will not need to create them, but some applications may want to create their own for internal use. The type must be one of the keyboard event types.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>modifiers</td><td>A bit field combination of the <code>PP_InputEvent_Modifier</code> flags.</td></tr><tr class="odd"><td>[in]</td><td>key_code</td><td>This value reflects the DOM KeyboardEvent <code>keyCode</code> field, which is the Windows-style Virtual Key code of the key.</td></tr><tr class="even"><td>[in]</td><td>character_text</td><td>This value represents the typed character as a UTF-8 string.</td></tr><tr class="odd"><td>[in]</td><td>code</td><td>This value represents the DOM3 |code| string that corresponds to the physical key being pressed.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the new keyboard input event.

<span id="aaf9bb52daef6052c4f4bf4f84efee9d2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#aaf9bb52daef6052c4f4bf4f84efee9d2" class="el">PPB_KeyboardInputEvent::GetCharacterText</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> character_event)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#aaf9bb52daef6052c4f4bf4f84efee9d2" class="el" title="GetCharacterText() returns the typed character as a UTF-8 string for the given character event...">GetCharacterText()</a> returns the typed character as a UTF-8 string for the given character event.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>character_event</td><td>A <code>PP_Resource</code> corresponding to a keyboard event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A string var representing a single typed character for character input events. For non-character input events the return value will be an undefined var.

<span id="a84c476e78ea7c066f9e89b5ae828ffa8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a84c476e78ea7c066f9e89b5ae828ffa8" class="el">PPB_KeyboardInputEvent::GetCode</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> key_event)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a84c476e78ea7c066f9e89b5ae828ffa8" class="el" title="GetCode() returns the DOM |code| field for this keyboard event, as defined in the DOM3 Events spec: h...">GetCode()</a> returns the DOM |code| field for this keyboard event, as defined in the DOM3 Events spec: <http://www.w3.org/TR/DOM-Level-3-Events/>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>key_event</td><td>The key event for which to return the key code.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The string that contains the DOM |code| for the keyboard event.

<span id="a1862b7cf375179c7a990b61ffad1ce6a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a1862b7cf375179c7a990b61ffad1ce6a" class="el">PPB_KeyboardInputEvent::GetKeyCode</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> key_event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#a1862b7cf375179c7a990b61ffad1ce6a" class="el" title="GetKeyCode() returns the DOM keyCode field for the keyboard event.">GetKeyCode()</a> returns the DOM keyCode field for the keyboard event.

Chrome populates this with the Windows-style Virtual Key code of the key.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>key_event</td><td>A <code>PP_Resource</code> corresponding to a keyboard event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The DOM keyCode field for the keyboard event.

<span id="ae3fed704fb8f527fb7fd94e8c34ac13a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#ae3fed704fb8f527fb7fd94e8c34ac13a" class="el">PPB_KeyboardInputEvent::IsKeyboardInputEvent</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___keyboard_input_event__1__2#ae3fed704fb8f527fb7fd94e8c34ac13a" class="el" title="IsKeyboardInputEvent() determines if a resource is a keyboard event.">IsKeyboardInputEvent()</a> determines if a resource is a keyboard event.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to an event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the given resource is a valid input event.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__input__event_8h/" class="el">ppb_input_event.h</a>
