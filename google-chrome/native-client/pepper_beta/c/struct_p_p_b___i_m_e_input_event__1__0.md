---json {"title":"PPB_IMEInputEvent Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#ad4bd2c64c71c9af07c110e47d64d94c4" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a> type, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> text, uint32_t segment_number, const uint32_t segment_offsets[], int32_t target_segment, uint32_t selection_start, uint32_t selection_end)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a73a886654b174d99af7f52c13272dce0" class="el">IsIMEInputEvent</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a107e031acc73b3c620b0d92245952e6e" class="el">GetText</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a1b3d8e023aa9400dff5b3a32a49cc018" class="el">GetSegmentNumber</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a5d469ddc9be36e60eda5ab74878da205" class="el">GetSegmentOffset</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event, uint32_t index)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#ac4891be932c004cff409df47fe4627fa" class="el">GetTargetSegment</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a42150bcee1b6416ec89780343ce2b30a" class="el">GetSelection</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event, uint32_t *start, uint32_t *end)</td></tr></tbody></table>

---

## Field Documentation

<span id="ad4bd2c64c71c9af07c110e47d64d94c4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#ad4bd2c64c71c9af07c110e47d64d94c4" class="el">PPB_IMEInputEvent::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gaca7296cfec99fcb6646b7144d1d6a0c5" class="el">PP_InputEvent_Type</a> type, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a> time_stamp, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> text, uint32_t segment_number, const uint32_t segment_offsets[], int32_t target_segment, uint32_t selection_start, uint32_t selection_end)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#ad4bd2c64c71c9af07c110e47d64d94c4" class="el" title="Create() creates an IME input event with the given parameters.">Create()</a> creates an IME input event with the given parameters.

Normally you will get an IME event passed through the `HandleInputEvent` and will not need to create them, but some applications may want to create their own for internal use.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event. The type must be one of the IME event types.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>text</td><td>The string returned by <code>GetText</code>.</td></tr><tr class="odd"><td>[in]</td><td>segment_number</td><td>The number returned by <code>GetSegmentNumber</code>.</td></tr><tr class="even"><td>[in]</td><td>segment_offsets</td><td>The array of numbers returned by <code>GetSegmentOffset</code>. If <code>segment_number</code> is zero, the number of elements of the array should be zero. If <code>segment_number</code> is non-zero, the length of the array must be <code>segment_number</code> + 1.</td></tr><tr class="odd"><td>[in]</td><td>target_segment</td><td>The number returned by <code>GetTargetSegment</code>.</td></tr><tr class="even"><td>[in]</td><td>selection_start</td><td>The start index returned by <code>GetSelection</code>.</td></tr><tr class="odd"><td>[in]</td><td>selection_end</td><td>The end index returned by <code>GetSelection</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the new IME input event.

<span id="a1b3d8e023aa9400dff5b3a32a49cc018" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a1b3d8e023aa9400dff5b3a32a49cc018" class="el">PPB_IMEInputEvent::GetSegmentNumber</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a1b3d8e023aa9400dff5b3a32a49cc018" class="el" title="GetSegmentNumber() returns the number of segments in the composition text.">GetSegmentNumber()</a> returns the number of segments in the composition text.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>ime_event</td><td>A <code>PP_Resource</code> corresponding to an IME event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of segments. For events other than COMPOSITION_UPDATE, returns 0.

<span id="a5d469ddc9be36e60eda5ab74878da205" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a5d469ddc9be36e60eda5ab74878da205" class="el">PPB_IMEInputEvent::GetSegmentOffset</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event, uint32_t index)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a5d469ddc9be36e60eda5ab74878da205" class="el" title="GetSegmentOffset() returns the position of the index-th segmentation point in the composition text...">GetSegmentOffset()</a> returns the position of the index-th segmentation point in the composition text.

The position is given by a byte-offset (not a character-offset) of the string returned by <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a107e031acc73b3c620b0d92245952e6e" class="el" title="GetText() returns the composition text as a UTF-8 string for the given IME event.">GetText()</a>. It always satisfies 0=GetSegmentOffset(0) &lt; ... &lt; GetSegmentOffset(i) &lt; GetSegmentOffset(i+1) &lt; ... &lt; GetSegmentOffset(<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a1b3d8e023aa9400dff5b3a32a49cc018" class="el" title="GetSegmentNumber() returns the number of segments in the composition text.">GetSegmentNumber()</a>)=(byte-length of <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a107e031acc73b3c620b0d92245952e6e" class="el" title="GetText() returns the composition text as a UTF-8 string for the given IME event.">GetText()</a>). Note that \[GetSegmentOffset(i), GetSegmentOffset(i+1)) represents the range of the i-th segment, and hence <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a1b3d8e023aa9400dff5b3a32a49cc018" class="el" title="GetSegmentNumber() returns the number of segments in the composition text.">GetSegmentNumber()</a> can be a valid argument to this function instead of an off-by-1 error.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>ime_event</td><td>A <code>PP_Resource</code> corresponding to an IME event.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>An integer indicating a segment.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The byte-offset of the segmentation point. If the event is not COMPOSITION_UPDATE or index is out of range, returns 0.

<span id="a42150bcee1b6416ec89780343ce2b30a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a42150bcee1b6416ec89780343ce2b30a" class="el">PPB_IMEInputEvent::GetSelection</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event, uint32_t *start, uint32_t *end)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a42150bcee1b6416ec89780343ce2b30a" class="el" title="GetSelection() returns the range selected by caret in the composition text.">GetSelection()</a> returns the range selected by caret in the composition text.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>ime_event</td><td>A <code>PP_Resource</code> corresponding to an IME event.</td></tr><tr class="even"><td>[out]</td><td>start</td><td>The start position of the current selection.</td></tr><tr class="odd"><td>[out]</td><td>end</td><td>The end position of the current selection.</td></tr></tbody></table>

<span id="ac4891be932c004cff409df47fe4627fa" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#ac4891be932c004cff409df47fe4627fa" class="el">PPB_IMEInputEvent::GetTargetSegment</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#ac4891be932c004cff409df47fe4627fa" class="el" title="GetTargetSegment() returns the index of the current target segment of composition.">GetTargetSegment()</a> returns the index of the current target segment of composition.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>ime_event</td><td>A <code>PP_Resource</code> corresponding to an IME event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An integer indicating the index of the target segment. When there is no active target segment, or the event is not COMPOSITION_UPDATE, returns -1.

<span id="a107e031acc73b3c620b0d92245952e6e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a107e031acc73b3c620b0d92245952e6e" class="el">PPB_IMEInputEvent::GetText</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> ime_event)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a107e031acc73b3c620b0d92245952e6e" class="el" title="GetText() returns the composition text as a UTF-8 string for the given IME event.">GetText()</a> returns the composition text as a UTF-8 string for the given IME event.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>ime_event</td><td>A <code>PP_Resource</code> corresponding to an IME event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A string var representing the composition text. For non-IME input events the return value will be an undefined var.

<span id="a73a886654b174d99af7f52c13272dce0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a73a886654b174d99af7f52c13272dce0" class="el">PPB_IMEInputEvent::IsIMEInputEvent</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___i_m_e_input_event__1__0#a73a886654b174d99af7f52c13272dce0" class="el" title="IsIMEInputEvent() determines if a resource is an IME event.">IsIMEInputEvent()</a> determines if a resource is an IME event.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to an event.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the given resource is a valid input event.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__input__event_8h/" class="el">ppb_input_event.h</a>
