---json {"title":"pp::MouseCursor Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_cursor-members/)

## Static Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_cursor#a94fc61cd6f995af87e1bf198c3fe788d" class="el">SetCursor</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_MouseCursor_Type type, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;image=<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a>(), const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;hot_spot=<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a>(0, 0))</td></tr></tbody></table>

---

## Member Function Documentation

<span id="a94fc61cd6f995af87e1bf198c3fe788d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_cursor#a94fc61cd6f995af87e1bf198c3fe788d" class="el">pp::MouseCursor::SetCursor</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_MouseCursor_Type </td><td><em>type</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>image</em> = <code>ImageData()</code>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>hot_spot</em> = <code>Point(0, 0)</code> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [static]</code></td></tr></tbody></table>

Sets the given mouse cursor.

The mouse cursor will be in effect whenever the mouse is over the given instance until it is set again by another call. Note that you can hide the mouse cursor by setting it to the `PP_MOUSECURSOR_TYPE_NONE` type.

This function allows setting both system defined mouse cursors and custom cursors. To set a system-defined cursor, pass the type you want and set the custom image to a default-constructor <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> object. To set a custom cursor, set the type to `PP_MOUSECURSOR_TYPE_CUSTOM` and specify your image and hot spot.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A handle identifying the instance that the mouse cursor will affect.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A <code>PP_MouseCursor_Type</code> identifying the type of mouse cursor to show. See <code>ppapi/c/ppb_mouse_cursor.h</code>.</td></tr><tr class="odd"><td>[in]</td><td>image</td><td>A <code>ImageData</code> object identifying the custom image to set when the type is <code>PP_MOUSECURSOR_TYPE_CUSTOM</code>. The image must be less than 32 pixels in each direction and must be of the system's native image format. When you are specifying a predefined cursor, this parameter should be a default-constructed <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a>.</td></tr><tr class="even"><td>[in]</td><td>hot_spot</td><td>When setting a custom cursor, this identifies the pixel position within the given image of the "hot spot" of the cursor. When specifying a stock cursor, this parameter is ignored.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true on success, or false if the instance or cursor type was invalid or if the image was too large.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/mouse__cursor_8h/" class="el">mouse_cursor.h</a>
