---json {"title":"pp::TextInputController Class Reference"} ---

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a6fe3648b0322ad724f0d103b61cbaee9" class="el">TextInputController</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a19e3cd5588f61113d4037cbf15069a96" class="el">~TextInputController</a> ()</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#acef9638552ba5254401ea3330140e67f" class="el">SetTextInputType</a> (PP_TextInput_Type type)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a884a00a9d265d812424874542c2ee34c" class="el">UpdateCaretPosition</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp;caret)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a19329ad0e0ca3e7a7d31cf51462643cb" class="el">CancelCompositionText</a> ()</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a59fc139f69ed425f632c16313e69ceca" class="el">UpdateSurroundingText</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp;text, uint32_t caret, uint32_t anchor)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This class can be used for giving hints to the browser about the text input status of plugins.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a6fe3648b0322ad724f0d103b61cbaee9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a6fe3648b0322ad724f0d103b61cbaee9" class="el">pp::TextInputController::TextInputController</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor for creating a `TextInputController`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a19e3cd5588f61113d4037cbf15069a96" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a19e3cd5588f61113d4037cbf15069a96" class="el">pp::TextInputController::~TextInputController</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a19329ad0e0ca3e7a7d31cf51462643cb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a19329ad0e0ca3e7a7d31cf51462643cb" class="el">pp::TextInputController::CancelCompositionText</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a19329ad0e0ca3e7a7d31cf51462643cb" class="el" title="CancelCompositionText() informs the browser that the current composition text is cancelled by the plu...">CancelCompositionText()</a> informs the browser that the current composition text is cancelled by the plugin.

<span id="acef9638552ba5254401ea3330140e67f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#acef9638552ba5254401ea3330140e67f" class="el">pp::TextInputController::SetTextInputType</a></td><td>(</td><td>PP_TextInput_Type </td><td><em>type</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#acef9638552ba5254401ea3330140e67f" class="el" title="SetTextInputType() informs the browser about the current text input mode of the plugin.">SetTextInputType()</a> informs the browser about the current text input mode of the plugin.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>type</td><td>The type of text input type.</td></tr></tbody></table>

<span id="a884a00a9d265d812424874542c2ee34c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a884a00a9d265d812424874542c2ee34c" class="el">pp::TextInputController::UpdateCaretPosition</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp; </td><td><em>caret</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a884a00a9d265d812424874542c2ee34c" class="el" title="UpdateCaretPosition() informs the browser about the coordinates of the text input caret area...">UpdateCaretPosition()</a> informs the browser about the coordinates of the text input caret area.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>caret</td><td>A rectangle indicating the caret area.</td></tr></tbody></table>

<span id="a59fc139f69ed425f632c16313e69ceca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a59fc139f69ed425f632c16313e69ceca" class="el">pp::TextInputController::UpdateSurroundingText</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>text</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>caret</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>anchor</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_text_input_controller#a59fc139f69ed425f632c16313e69ceca" class="el" title="UpdateSurroundingText() informs the browser about the current text selection and surrounding text...">UpdateSurroundingText()</a> informs the browser about the current text selection and surrounding text.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>text</td><td>A UTF-8 sting indicating string buffer of current input context.</td></tr><tr class="even"><td>[in]</td><td>caret</td><td>A integer indicating the byte index of caret location in <code>text</code>.</td></tr><tr class="odd"><td>[in]</td><td>caret</td><td>A integer indicating the byte index of anchor location in <code>text</code>. If there is no selection, this value should be equal to <code>caret</code>.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/text__input__controller_8h/" class="el">text_input_controller.h</a>
