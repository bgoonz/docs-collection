—json {“title”:“PP\_InputEvent\_Key Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___input_event___key#a13f50c267c45d439f009094515c75c10" class="el">modifier</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___input_event___key#ad7b017ab264c307ce846d5df8a8bf867" class="el">key_code</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PP_InputEvent_Key` struct represents a key up or key down event.

Key up and key down events correspond to physical keys on the keyboard. The actual character that the user typed (if any) will be delivered in a “character” event.

If the user loses focus on the module while a key is down, a key up event might not occur. For example, if the module has focus and the user presses and holds the shift key, the module will see a “shift down” message. Then if the user clicks elsewhere on the web page, the module’s focus will be lost and no more input events will be delivered.

If your module depends on receiving key up events, it should also handle “lost focus” as the equivalent of “all keys up.”

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ad7b017ab264c307ce846d5df8a8bf867" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___input_event___key#ad7b017ab264c307ce846d5df8a8bf867" class="el">PP_InputEvent_Key::key_code</a></td></tr></tbody></table>

This value reflects the DOM KeyboardEvent `keyCode` field.

Chrome populates this with the Windows-style Virtual Key code of the key.

<span id="a13f50c267c45d439f009094515c75c10" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___input_event___key#a13f50c267c45d439f009094515c75c10" class="el">PP_InputEvent_Key::modifier</a></td></tr></tbody></table>

This value is a bit field combination of the EVENT\_MODIFIER flags.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__input__event_8h/" class="el">pp_input_event.h</a>
