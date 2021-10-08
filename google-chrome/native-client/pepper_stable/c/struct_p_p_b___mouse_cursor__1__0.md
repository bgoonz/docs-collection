---json {"title":"PPB\_MouseCursor Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___mouse_cursor__1__0#affb0522468db2deccac0715c3997c2da" class="el">SetCursor</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, enum <a href="/docs/native-client/pepper_stable/c/group___enums#gac53273018386c1db9542d2a06bbe118b" class="el">PP_MouseCursor_Type</a> type, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___point/" class="el">PP_Point</a> *hot_spot)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_MouseCursor` allows setting the mouse cursor.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="affb0522468db2deccac0715c3997c2da" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___mouse_cursor__1__0#affb0522468db2deccac0715c3997c2da" class="el">PPB_MouseCursor::SetCursor</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, enum <a href="/docs/native-client/pepper_stable/c/group___enums#gac53273018386c1db9542d2a06bbe118b" class="el">PP_MouseCursor_Type</a> type, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___point/" class="el">PP_Point</a> *hot_spot)</td></tr></tbody></table>

Sets the given mouse cursor.

The mouse cursor will be in effect whenever the mouse is over the given instance until it is set again by another call. Note that you can hide the mouse cursor by setting it to the `PP_MOUSECURSOR_TYPE_NONE` type.

This function allows setting both system defined mouse cursors and custom cursors. To set a system-defined cursor, pass the type you want and set the custom image to 0 and the hot spot to NULL. To set a custom cursor, set the type to `PP_MOUSECURSOR_TYPE_CUSTOM` and specify your image and hot spot.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance that the mouse cursor will affect.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_MouseCursor_Type</code> identifying the type of mouse cursor to show.</td></tr><tr class="odd"><td>[in]</td><td>image</td><td>A <code>PPB_ImageData</code> resource identifying the custom image to set when the type is <code>PP_MOUSECURSOR_TYPE_CUSTOM</code>. The image must be less than 32 pixels in each direction and must be of the system's native image format. When you are specifying a predefined cursor, this parameter must be 0.</td></tr><tr class="even"><td>[in]</td><td>hot_spot</td><td>When setting a custom cursor, this identifies the pixel position within the given image of the "hot spot" of the cursor. When specifying a stock cursor, this parameter is ignored.</td></tr></tbody></table>

<!-- -->

**Returns:**  
PP\_TRUE on success, or PP\_FALSE if the instance or cursor type is invalid, or if the image is too large.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h/" class="el">ppb_mouse_cursor.h</a>
