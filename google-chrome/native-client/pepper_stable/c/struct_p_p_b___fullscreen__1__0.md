---json {"title":"PPB\_Fullscreen Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a8b6a560d3a57b6df9395b5dcf138cd1d" class="el">IsFullscreen</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a1074f98a5800667313de626b0ed8ad27" class="el">SetFullscreen</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> fullscreen)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#afc4e416a40c4bf0ed1dd0cae74547c86" class="el">GetScreenSize</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___size/" class="el">PP_Size</a> *size)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_Fullscreen` interface is implemented by the browser.

This interface provides a way of checking the current screen mode and toggling fullscreen mode.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="afc4e416a40c4bf0ed1dd0cae74547c86" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#afc4e416a40c4bf0ed1dd0cae74547c86" class="el">PPB_Fullscreen::GetScreenSize</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___size/" class="el">PP_Size</a> *size)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#afc4e416a40c4bf0ed1dd0cae74547c86" class="el" title="GetScreenSize() gets the size of the screen in pixels.">GetScreenSize()</a> gets the size of the screen in pixels.

The module instance will be resized to this size when <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a1074f98a5800667313de626b0ed8ad27" class="el" title="SetFullscreen() switches the module instance to and from fullscreen mode.">SetFullscreen()</a> is called to enter fullscreen mode.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[out]</td><td>size</td><td>The size of the entire screen in pixels.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` on success or `PP_FALSE` on failure.

<span id="a8b6a560d3a57b6df9395b5dcf138cd1d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a8b6a560d3a57b6df9395b5dcf138cd1d" class="el">PPB_Fullscreen::IsFullscreen</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a8b6a560d3a57b6df9395b5dcf138cd1d" class="el" title="IsFullscreen() checks whether the module instance is currently in fullscreen mode.">IsFullscreen()</a> checks whether the module instance is currently in fullscreen mode.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the module instance is in fullscreen mode, `PP_FALSE` if the module instance is not in fullscreen mode.

<span id="a1074f98a5800667313de626b0ed8ad27" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a1074f98a5800667313de626b0ed8ad27" class="el">PPB_Fullscreen::SetFullscreen</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> fullscreen)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a1074f98a5800667313de626b0ed8ad27" class="el" title="SetFullscreen() switches the module instance to and from fullscreen mode.">SetFullscreen()</a> switches the module instance to and from fullscreen mode.

The transition to and from fullscreen mode is asynchronous. During the transition, <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a8b6a560d3a57b6df9395b5dcf138cd1d" class="el" title="IsFullscreen() checks whether the module instance is currently in fullscreen mode.">IsFullscreen()</a> will return the previous value and no 2D or 3D device can be bound. The transition ends at DidChangeView() when <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___fullscreen__1__0#a8b6a560d3a57b6df9395b5dcf138cd1d" class="el" title="IsFullscreen() checks whether the module instance is currently in fullscreen mode.">IsFullscreen()</a> returns the new value. You might receive other DidChangeView() calls while in transition.

The transition to fullscreen mode can only occur while the browser is processing a user gesture, even if `PP_TRUE` is returned.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>fullscreen</td><td><code>PP_TRUE</code> to enter fullscreen mode, or <code>PP_FALSE</code> to exit fullscreen mode.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` on success or `PP_FALSE` on failure.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__fullscreen_8h/" class="el">ppb_fullscreen.h</a>
