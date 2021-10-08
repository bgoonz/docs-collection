---json {"title":"PP\_InputEvent\_Wheel Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#ad4af418584f964e9191e78be05bbb3f7" class="el">modifier</a></td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#aed0a1a8148ecfb7efe2443c412b8904d" class="el">delta_x</a></td></tr><tr class="odd"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#a51339c7b39cce3073f98f8a7f048f69d" class="el">delta_y</a></td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#a0ebc9809d9333e68b63ad7dc7c421775" class="el">wheel_ticks_x</a></td></tr><tr class="odd"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#af39e6e81fc7166e745e3fdb4b4d3ff4e" class="el">wheel_ticks_y</a></td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#ad51a5319a1eb82706371d495e397e909" class="el">scroll_by_page</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PP_InputEvent_Wheel` struct represents all mouse wheel events.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="aed0a1a8148ecfb7efe2443c412b8904d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#aed0a1a8148ecfb7efe2443c412b8904d" class="el">PP_InputEvent_Wheel::delta_x</a></td></tr></tbody></table>

The mouse wheel's horizontal scroll amount.

A scroll to the right (where the content moves left) is represented as positive values, and a scroll to the left (where the content moves right) is represented as negative values.

The units are either in pixels (when scroll\_by\_page is false) or pages (when scroll\_by\_page is true). For example, delta\_y = -3 means scroll up 3 pixels when scroll\_by\_page is false, and scroll up 3 pages when scroll\_by\_page is true.

This amount is system dependent and will take into account the user's preferred scroll sensitivity and potentially also nonlinear acceleration based on the speed of the scrolling.

Devices will be of varying resolution. Some mice with large detents will only generate integer scroll amounts. But fractional values are also possible, for example, on some trackpads and newer mice that don't have "clicks".

<span id="a51339c7b39cce3073f98f8a7f048f69d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#a51339c7b39cce3073f98f8a7f048f69d" class="el">PP_InputEvent_Wheel::delta_y</a></td></tr></tbody></table>

The mouse wheel's vertical scroll amount.

A scroll down (where the content moves up) is represented as positive values, and a scroll up (where the content moves down) is represented as negative values.

The units are either in pixels (when scroll\_by\_page is false) or pages (when scroll\_by\_page is true). For example, delta\_y = -3 means scroll up 3 pixels when scroll\_by\_page is false, and scroll up 3 pages when scroll\_by\_page is true.

This amount is system dependent and will take into account the user's preferred scroll sensitivity and potentially also nonlinear acceleration based on the speed of the scrolling.

Devices will be of varying resolution. Some mice with large detents will only generate integer scroll amounts. But fractional values are also possible, for example, on some trackpads and newer mice that don't have "clicks".

<span id="ad4af418584f964e9191e78be05bbb3f7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#ad4af418584f964e9191e78be05bbb3f7" class="el">PP_InputEvent_Wheel::modifier</a></td></tr></tbody></table>

This value represents a combination of the `EVENT_MODIFIER` flags.

<span id="ad51a5319a1eb82706371d495e397e909" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#ad51a5319a1eb82706371d495e397e909" class="el">PP_InputEvent_Wheel::scroll_by_page</a></td></tr></tbody></table>

Indicates if the scroll `delta_x`/`delta_y` indicates pages or lines to scroll by.

When true, the user is requesting to scroll by pages.

<span id="a0ebc9809d9333e68b63ad7dc7c421775" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#a0ebc9809d9333e68b63ad7dc7c421775" class="el">PP_InputEvent_Wheel::wheel_ticks_x</a></td></tr></tbody></table>

The number of "clicks" of the scroll wheel that have produced the event.

The value may have system-specific acceleration applied to it, depending on the device. The positive and negative meanings are the same as for `delta_x` and `delta_y`.

If you are scrolling, you probably want to use the delta values above. These tick events can be useful if you aren't doing actual scrolling and don't want or pixel values. An example may be cycling between different items in a game.

You may receive fractional values for the wheel ticks if the mouse wheel is high resolution or doesn't have "clicks". If your program wants discrete events (as in the "picking items" example) you should accumulate fractional click values from multiple messages until the total value reaches positive or negative one. This should represent a similar amount of scrolling as for a mouse that has a discrete mouse wheel.

<span id="af39e6e81fc7166e745e3fdb4b4d3ff4e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/c/struct_p_p___input_event___wheel#af39e6e81fc7166e745e3fdb4b4d3ff4e" class="el">PP_InputEvent_Wheel::wheel_ticks_y</a></td></tr></tbody></table>

This value represents.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/pp__input__event_8h/" class="el">pp_input_event.h</a>
