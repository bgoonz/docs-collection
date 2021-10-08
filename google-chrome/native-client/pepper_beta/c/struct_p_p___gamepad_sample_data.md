—json {“title”:“PP\_GamepadSampleData Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a27e25af2c4d7278951c71d5a71821db5" class="el">axes_length</a></td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a044a97b221c1e87e26ecbd39b584b416" class="el">axes</a> [16]</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#ae58bc687fc618e4a957dda7cd087bd58" class="el">buttons_length</a></td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#ac9b7def0b695e6009e685b79d883a9a2" class="el">buttons</a> [32]</td></tr><tr class="odd"><td style="text-align: right;">double </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#af832f6af0964f9023d712712a6e3afc7" class="el">timestamp</a></td></tr><tr class="even"><td style="text-align: right;">uint16_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a0a4d0498f6beecb54628a4f1919c48e3" class="el">id</a> [128]</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#ae955efce5fcd9de08ab8d4c7f52d0af7" class="el">connected</a></td></tr><tr class="even"><td style="text-align: right;">int8_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a6d8faab2471cbf6133481d7df6c53c3f" class="el">unused_pad_</a> [4]</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The data for one gamepad device.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a044a97b221c1e87e26ecbd39b584b416" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a044a97b221c1e87e26ecbd39b584b416" class="el">PP_GamepadSampleData::axes</a>[16]</td></tr></tbody></table>

Normalized values for the axes, indices valid up to |axes\_length|-1.

Axis values range from -1..1, and are in order of “importance”.

<span id="a27e25af2c4d7278951c71d5a71821db5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a27e25af2c4d7278951c71d5a71821db5" class="el">PP_GamepadSampleData::axes_length</a></td></tr></tbody></table>

Number of valid elements in the |axes| array.

<span id="ac9b7def0b695e6009e685b79d883a9a2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#ac9b7def0b695e6009e685b79d883a9a2" class="el">PP_GamepadSampleData::buttons</a>[32]</td></tr></tbody></table>

Normalized values for the buttons, indices valid up to |buttons\_length|.

-   1.  Button values range from 0..1, and are in order of importance.

<span id="ae58bc687fc618e4a957dda7cd087bd58" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#ae58bc687fc618e4a957dda7cd087bd58" class="el">PP_GamepadSampleData::buttons_length</a></td></tr></tbody></table>

Number of valid elements in the |buttons| array.

<span id="ae955efce5fcd9de08ab8d4c7f52d0af7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#ae955efce5fcd9de08ab8d4c7f52d0af7" class="el">PP_GamepadSampleData::connected</a></td></tr></tbody></table>

Is there a gamepad connected at this index? If this is false, no other data in this structure is valid.

<span id="a0a4d0498f6beecb54628a4f1919c48e3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint16_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a0a4d0498f6beecb54628a4f1919c48e3" class="el">PP_GamepadSampleData::id</a>[128]</td></tr></tbody></table>

Identifier for the type of device/manufacturer.

<span id="af832f6af0964f9023d712712a6e3afc7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>double <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#af832f6af0964f9023d712712a6e3afc7" class="el">PP_GamepadSampleData::timestamp</a></td></tr></tbody></table>

Monotonically increasing value that is incremented when the data have been updated.

<span id="a6d8faab2471cbf6133481d7df6c53c3f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int8_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___gamepad_sample_data#a6d8faab2471cbf6133481d7df6c53c3f" class="el">PP_GamepadSampleData::unused_pad_</a>[4]</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__gamepad_8h/" class="el">ppb_gamepad.h</a>
