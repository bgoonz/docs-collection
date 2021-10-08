---json {"title":"PP\_InputEvent\_Character Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___character#a6505d006cdb0e52d39e94b540b923b9a" class="el">modifier</a></td></tr><tr class="even"><td style="text-align: right;">int8_t </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___character#a02f4d484985b53e378df8f0281a268ba" class="el">text</a> [5]</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PP_InputEvent_Character` struct represents a typed character event.

Normally, the program will receive a key down event, followed by a character event, followed by a key up event. The character event will have any modifier keys applied. Obvious examples are symbols, where Shift-5 gives you a ''. The key down and up events will give you the scan code for the "5" key, and the character event will give you the '' character.

You may not get a character event for all key down events if the key doesn't generate a character. Likewise, you may actually get multiple character events in a row. For example, some locales have an accent key that modifies the next character typed. You might get this stream of events: accent down, accent up (it didn't generate a character), letter key down, letter with accent character event (it was modified by the previous accent key), letter key up. If the letter can't be combined with the accent, like an umlaut and an 'R', the system might send umlaut down, umlaut up, 'R' key down, umlaut character (can't combine it with 'R', so just send the raw umlaut so it isn't lost"), 'R' character event, 'R' key up.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a6505d006cdb0e52d39e94b540b923b9a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___character#a6505d006cdb0e52d39e94b540b923b9a" class="el">PP_InputEvent_Character::modifier</a></td></tr></tbody></table>

A combination of the `PP_InputEvent_Modifier` flags.

<span id="a02f4d484985b53e378df8f0281a268ba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int8_t <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___character#a02f4d484985b53e378df8f0281a268ba" class="el">PP_InputEvent_Character::text</a>[5]</td></tr></tbody></table>

This value represents the typed character as a single null-terminated UTF-8 character.

Any unused bytes will be filled with null bytes. Since the maximum UTF-8 character is 4 bytes, there will always be at least one null at the end so you can treat this as a null-terminated UTF-8 string.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/pp__input__event_8h/" class="el">pp_input_event.h</a>
