---json {"title":"PPB\_TextInputController Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#a4cb36e7536a78dc5893c288c2885cb97" class="el">SetTextInputType</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_stable/c/group___enums#ga5fef49ee4c2cc6dcead825340da0f116" class="el">PP_TextInput_Type</a> type)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#ab34cfc4db88d4387845317042ceb63af" class="el">UpdateCaretPosition</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___rect/" class="el">PP_Rect</a> *caret)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#a4b05a8a76a6daadab941fb24ce5d23ce" class="el">CancelCompositionText</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#aca1b52ba11e4384255eeecd90fc45ba5" class="el">UpdateSurroundingText</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> text, uint32_t caret, uint32_t anchor)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

`PPB_TextInputController` provides a set of functions for giving hints to the browser about the text input status of plugins, and functions for controlling input method editors (IMEs).

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a4b05a8a76a6daadab941fb24ce5d23ce" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#a4b05a8a76a6daadab941fb24ce5d23ce" class="el">PPB_TextInputController::CancelCompositionText</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Cancels the current composition in IME.

<span id="a4cb36e7536a78dc5893c288c2885cb97" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#a4cb36e7536a78dc5893c288c2885cb97" class="el">PPB_TextInputController::SetTextInputType</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_stable/c/group___enums#ga5fef49ee4c2cc6dcead825340da0f116" class="el">PP_TextInput_Type</a> type)</td></tr></tbody></table>

Informs the browser about the current text input mode of the plugin.

Typical use of this information in the browser is to properly display/suppress tools for supporting text inputs (such as virtual keyboards in touch screen based devices, or input method editors often used for composing East Asian characters).

<span id="ab34cfc4db88d4387845317042ceb63af" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#ab34cfc4db88d4387845317042ceb63af" class="el">PPB_TextInputController::UpdateCaretPosition</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___rect/" class="el">PP_Rect</a> *caret)</td></tr></tbody></table>

Informs the browser about the coordinates of the text input caret area.

Typical use of this information in the browser is to layout IME windows etc.

<span id="aca1b52ba11e4384255eeecd90fc45ba5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#aca1b52ba11e4384255eeecd90fc45ba5" class="el">PPB_TextInputController::UpdateSurroundingText</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> text, uint32_t caret, uint32_t anchor)</td></tr></tbody></table>

Informs the browser about the current text selection and surrounding text.

`text` is a UTF-8 string that contains the current range of text selection in the plugin. `caret` is the byte-index of the caret position within `text`. `anchor` is the byte-index of the anchor position (i.e., if a range of text is selected, it is the other edge of selection different from `caret`. If there are no selection, `anchor` is equal to `caret`.

Typical use of this information in the browser is to enable "reconversion" features of IME that puts back the already committed text into the pre-commit composition state. Another use is to improve the precision of suggestion of IME by taking the context into account (e.g., if the caret looks to be on the beginning of a sentence, suggest capital letters in a virtual keyboard).

When the focus is not on text, call this function setting `text` to an empty string and `caret` and `anchor` to zero. Also, the plugin should send the empty text when it does not want to reveal the selection to IME (e.g., when the surrounding text is containing password text).

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h/" class="el">ppb_text_input_controller.h</a>
