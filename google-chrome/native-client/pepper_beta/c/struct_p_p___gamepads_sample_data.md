—json {“title”:“PP\_GamepadsSampleData Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepads_sample_data#abc9c0c8b20cfe0219a5ab4e38dd5a800" class="el">length</a></td></tr><tr class="even"><td style="text-align: right;">int8_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepads_sample_data#a8da16be21054bad05283f6cbc7ab226a" class="el">unused_pad_</a> [4]</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data/" class="el">PP_GamepadSampleData</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepads_sample_data#ab0fa87f088fef743ba879a2f91363bfe" class="el">items</a> [4]</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The data for all gamepads connected to the system.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ab0fa87f088fef743ba879a2f91363bfe" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data/" class="el">PP_GamepadSampleData</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepads_sample_data#ab0fa87f088fef743ba879a2f91363bfe" class="el">PP_GamepadsSampleData::items</a>[4]</td></tr></tbody></table>

Data for an individual gamepad device connected to the system.

<span id="abc9c0c8b20cfe0219a5ab4e38dd5a800" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepads_sample_data#abc9c0c8b20cfe0219a5ab4e38dd5a800" class="el">PP_GamepadsSampleData::length</a></td></tr></tbody></table>

Number of valid elements in the |items| array.

<span id="a8da16be21054bad05283f6cbc7ab226a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int8_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepads_sample_data#a8da16be21054bad05283f6cbc7ab226a" class="el">PP_GamepadsSampleData::unused_pad_</a>[4]</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__gamepad_8h/" class="el">ppb_gamepad.h</a>
