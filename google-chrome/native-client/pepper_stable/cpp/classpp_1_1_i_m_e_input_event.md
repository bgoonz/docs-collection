---json {"title":"pp::IMEInputEvent Class Reference"} ---

Inheritance diagram for pp::IMEInputEvent:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a44a2a4139e63a21757a50c731e17bacd" class="el">IMEInputEvent</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#aedfd74fe9ee6c1cbdbcc9f78b25a5621" class="el">IMEInputEvent</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp;event)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a9004ae92edc6bcb797dd3720acb290af" class="el">IMEInputEvent</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_InputEvent_Type type, PP_TimeTicks time_stamp, const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> &amp;text, const std::vector&lt; uint32_t &gt; &amp;segment_offsets, int32_t target_segment, const std::pair&lt; uint32_t, uint32_t &gt; &amp;selection)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#ae2b82f9465fa0847af7e0214fb43232f" class="el">GetText</a> () const</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#aee5f2af391fd269f35271012247768ac" class="el">GetSegmentNumber</a> () const</td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a3deeed9cfbc9f2cff0cb027b870e3ce6" class="el">GetSegmentOffset</a> (uint32_t index) const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#ada4e768c2aea31e443d8bc9d5e4a9f36" class="el">GetTargetSegment</a> () const</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a94e9078036a3bdf0af6d5508d9115cf6" class="el">GetSelection</a> (uint32_t *start, uint32_t *end) const</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a44a2a4139e63a21757a50c731e17bacd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a44a2a4139e63a21757a50c731e17bacd" class="el">pp::IMEInputEvent::IMEInputEvent</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs an <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> IME input event object.

<span id="aedfd74fe9ee6c1cbdbcc9f78b25a5621" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a44a2a4139e63a21757a50c731e17bacd" class="el">pp::IMEInputEvent::IMEInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_input_event/" class="el">InputEvent</a> &amp; </td><td><em>event</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs an IME input event object from the provided generic input event.

If the given event is itself <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> or is not an IME input event, the object will be <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>event</td><td>A generic input event.</td></tr></tbody></table>

<span id="a9004ae92edc6bcb797dd3720acb290af" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a44a2a4139e63a21757a50c731e17bacd" class="el">pp::IMEInputEvent::IMEInputEvent</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_InputEvent_Type </td><td><em>type</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_TimeTicks </td><td><em>time_stamp</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>text</em>,</td></tr><tr class="odd"><td></td><td></td><td>const std::vector&lt; uint32_t &gt; &amp; </td><td><em>segment_offsets</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>target_segment</em>,</td></tr><tr class="odd"><td></td><td></td><td>const std::pair&lt; uint32_t, uint32_t &gt; &amp; </td><td><em>selection</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

This constructor manually constructs an IME event from the provided parameters.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance for which this event occurred.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_InputEvent_Type</code> identifying the type of input event. The type must be one of the ime event types.</td></tr><tr class="odd"><td>[in]</td><td>time_stamp</td><td>A <code>PP_TimeTicks</code> indicating the time when the event occurred.</td></tr><tr class="even"><td>[in]</td><td>text</td><td>The string returned by <code>GetText</code>.</td></tr><tr class="odd"><td>[in]</td><td>segment_offsets</td><td>The array of numbers returned by <code>GetSegmentOffset</code>.</td></tr><tr class="even"><td>[in]</td><td>target_segment</td><td>The number returned by <code>GetTargetSegment</code>.</td></tr><tr class="odd"><td>[in]</td><td>selection</td><td>The range returned by <code>GetSelection</code>.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="aee5f2af391fd269f35271012247768ac" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#aee5f2af391fd269f35271012247768ac" class="el">pp::IMEInputEvent::GetSegmentNumber</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the number of segments in the composition text.

**Returns:**  
The number of segments. For events other than COMPOSITION\_UPDATE, returns 0.

<span id="a3deeed9cfbc9f2cff0cb027b870e3ce6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a3deeed9cfbc9f2cff0cb027b870e3ce6" class="el">pp::IMEInputEvent::GetSegmentOffset</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

Returns the position of the index-th segmentation point in the composition text.

The position is given by a byte-offset (not a character-offset) of the string returned by <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#ae2b82f9465fa0847af7e0214fb43232f" class="el" title="Returns the composition text as a UTF-8 string for the given IME event.">GetText()</a>. It always satisfies 0=GetSegmentOffset(0) &lt; ... &lt; GetSegmentOffset(i) &lt; GetSegmentOffset(i+1) &lt; ... &lt; GetSegmentOffset(<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#aee5f2af391fd269f35271012247768ac" class="el" title="Returns the number of segments in the composition text.">GetSegmentNumber()</a>)=(byte-length of <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#ae2b82f9465fa0847af7e0214fb43232f" class="el" title="Returns the composition text as a UTF-8 string for the given IME event.">GetText()</a>). Note that \[GetSegmentOffset(i), GetSegmentOffset(i+1)) represents the range of the i-th segment, and hence <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#aee5f2af391fd269f35271012247768ac" class="el" title="Returns the number of segments in the composition text.">GetSegmentNumber()</a> can be a valid argument to this function instead of an off-by-1 error.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>ime_event</td><td>A <code>PP_Resource</code> corresponding to an IME event.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>An integer indicating a segment.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The byte-offset of the segmentation point. If the event is not COMPOSITION\_UPDATE or index is out of range, returns 0.

<span id="a94e9078036a3bdf0af6d5508d9115cf6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#a94e9078036a3bdf0af6d5508d9115cf6" class="el">pp::IMEInputEvent::GetSelection</a></td><td>(</td><td>uint32_t * </td><td><em>start</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t * </td><td><em>end</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td>const</td></tr></tbody></table>

Obtains the range selected by caret in the composition text.

**Parameters:**  
<table><tbody><tr class="odd"><td>[out]</td><td>start</td><td>An integer indicating a start offset of selection range.</td></tr><tr class="even"><td>[out]</td><td>end</td><td>An integer indicating an end offset of selection range.</td></tr></tbody></table>

<span id="ada4e768c2aea31e443d8bc9d5e4a9f36" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#ada4e768c2aea31e443d8bc9d5e4a9f36" class="el">pp::IMEInputEvent::GetTargetSegment</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the index of the current target segment of composition.

**Returns:**  
An integer indicating the index of the target segment. When there is no active target segment, or the event is not COMPOSITION\_UPDATE, returns -1.

<span id="ae2b82f9465fa0847af7e0214fb43232f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_i_m_e_input_event#ae2b82f9465fa0847af7e0214fb43232f" class="el">pp::IMEInputEvent::GetText</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the composition text as a UTF-8 string for the given IME event.

**Returns:**  
A string var representing the composition text. For non-IME input events the return value will be an undefined var.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/input__event_8h/" class="el">input_event.h</a>
