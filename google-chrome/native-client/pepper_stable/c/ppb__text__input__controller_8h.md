---json {"title":"ppb\_text\_input\_controller.h File Reference"} ---

Include dependency graph for ppb\_text\_input\_controller.h:

![](/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0/" class="el">PPB_TextInputController</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td><code>PPB_TextInputController</code> provides a set of functions for giving hints to the browser about the text input status of plugins, and functions for controlling input method editors (IMEs). <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0#details">More...</a><br />
</td></tr></tbody></table>

Defines
-------

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h#a6ca7f2ae09c011c13d12c79ba155e12a" class="el">PPB_TEXTINPUTCONTROLLER_INTERFACE</a>   "PPB_TextInputController;1.0"</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h#a9a28f7fd2db84c2cd550ed272070c0ee" class="el">PPB_TEXTINPUTCONTROLLER_INTERFACE</a>   <a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h#a6ca7f2ae09c011c13d12c79ba155e12a" class="el">PPB_TEXTINPUTCONTROLLER_INTERFACE</a></td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct<br />
<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___text_input_controller__1__0/" class="el">PPB_TextInputController</a> </td><td><a href="/docs/native-client/pepper_stable/c/group___interfaces#gab387085f6044f3a0b1631d119d22a942" class="el">PPB_TextInputController</a></td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga5fef49ee4c2cc6dcead825340da0f116" class="el">PP_TextInput_Type</a> {<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116a0d75c884156553959d65252e65aa0916" class="el">PP_TEXTINPUT_TYPE_NONE</a> = 0, <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116a0e5e4072fce915eca7e4dfd7c639626c" class="el">PP_TEXTINPUT_TYPE_TEXT</a> = 1, <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116a00f508676278dd45e0335a8d5d715114" class="el">PP_TEXTINPUT_TYPE_PASSWORD</a> = 2, <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116a0d7975532097315f198617ad5e59bc32" class="el">PP_TEXTINPUT_TYPE_SEARCH</a> = 3,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116a027963b61eb55438f92662e72e939cf8" class="el">PP_TEXTINPUT_TYPE_EMAIL</a> = 4, <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116af71a3fb3f651ad5b417592433278fd1e" class="el">PP_TEXTINPUT_TYPE_NUMBER</a> = 5, <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116a181e9bd71e6a97acd6c5dace9f0b5fb3" class="el">PP_TEXTINPUT_TYPE_TELEPHONE</a> = 6, <a href="/docs/native-client/pepper_stable/c/group___enums#gga5fef49ee4c2cc6dcead825340da0f116ad4371ecdd1a6631a78d4721d83062394" class="el">PP_TEXTINPUT_TYPE_URL</a> = 7<br />
}</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga5fef49ee4c2cc6dcead825340da0f116" class="el">PP_TextInput_Type</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the `PPB_TextInputController` interface.

------------------------------------------------------------------------

Define Documentation
--------------------

<span id="a9a28f7fd2db84c2cd550ed272070c0ee" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h#a9a28f7fd2db84c2cd550ed272070c0ee" class="el">PPB_TEXTINPUTCONTROLLER_INTERFACE</a>   <a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h#a6ca7f2ae09c011c13d12c79ba155e12a" class="el">PPB_TEXTINPUTCONTROLLER_INTERFACE</a></td></tr></tbody></table>

<span id="a6ca7f2ae09c011c13d12c79ba155e12a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_stable/c/ppb__text__input__controller_8h#a6ca7f2ae09c011c13d12c79ba155e12a" class="el">PPB_TEXTINPUTCONTROLLER_INTERFACE</a>   "PPB_TextInputController;1.0"</td></tr></tbody></table>
