---json {"title":"PPB\_Graphics3D Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a80698c6d8c8b04e07d08c4595e0e977b" class="el">GetAttribMaxValue</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> instance, int32_t attribute, int32_t *value)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a818bc5829aac77215321b30f85e26e01" class="el">Create</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> share_context, const int32_t attrib_list[])</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#af59ffbcc71e08386f66594a138ab4ea5" class="el">IsGraphics3D</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#aae3be34b7308c4510a3952b06fb7d6d9" class="el">GetAttribs</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, int32_t attrib_list[])</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a093c4674cef82a08f5726bed8361d49d" class="el">SetAttribs</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, const int32_t attrib_list[])</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#ae6e9764a94663000dcb2aa610fac724c" class="el">GetError</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a3bea5a6f3fc77df73c1cf4f02d32b4ec" class="el">ResizeBuffers</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, int32_t width, int32_t height)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a293c6941c0da084267ffba3954793497" class="el">SwapBuffers</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

`PPB_Graphics3D` defines the interface for a 3D graphics context.

**Example usage from plugin code:**

**Setup:**

     PP_Resource context;
     int32_t attribs[] = {PP_GRAPHICS3DATTRIB_WIDTH, 800,
                          PP_GRAPHICS3DATTRIB_HEIGHT, 800,
                          PP_GRAPHICS3DATTRIB_NONE};
     context = g3d->Create(instance, 0, attribs);
     inst->BindGraphics(instance, context);

**Present one frame:**

     PP_CompletionCallback callback = {
       DidFinishSwappingBuffers, 0, PP_COMPLETIONCALLBACK_FLAG_NONE,
     };
     gles2->Clear(context, GL_COLOR_BUFFER_BIT);
     g3d->SwapBuffers(context, callback);

**Shutdown:**

     core->ReleaseResource(context);

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a818bc5829aac77215321b30f85e26e01" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a818bc5829aac77215321b30f85e26e01" class="el">PPB_Graphics3D::Create</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> share_context, const int32_t attrib_list[])</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a818bc5829aac77215321b30f85e26e01" class="el" title="Create() creates and initializes a 3D rendering context.">Create()</a> creates and initializes a 3D rendering context.

The returned context is off-screen to start with. It must be attached to a plugin instance using `PPB_Instance::BindGraphics` to draw on the web page.

**Parameters:**  
<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The module instance.</td></tr><tr class="even"><td>[in]</td><td>share_context</td><td>The 3D context with which the created context would share resources. If <code>share_context</code> is not 0, then all shareable data, as defined by the client API (note that for OpenGL and OpenGL ES, shareable data excludes texture objects named 0) will be shared by <code>share_context</code><code>, all other contexts </code><code>share_context</code> already shares with, and the newly created context. An arbitrary number of <code>PPB_Graphics3D</code> can share data in this fashion.</td></tr><tr class="odd"><td>[in]</td><td>attrib_list</td><td><code></code><code>specifies a list of attributes for the context. It is a list of attribute name-value pairs in which each attribute is immediately followed by the corresponding desired value. The list is terminated with </code><code>PP_GRAPHICS3DATTRIB_NONE</code>. The <code>attrib_list</code><code> may be 0 or empty (first attribute is </code><code>PP_GRAPHICS3DATTRIB_NONE</code>). If an attribute is not specified in <code>attrib_list</code>, then the default value is used (it is said to be specified implicitly). Attributes for the context are chosen according to an attribute-specific criteria. Attributes can be classified into two categories:<ul><li>AtLeast: The attribute value in the returned context meets or exceeds the value specified in <code>attrib_list</code>.</li><li>Exact: The attribute value in the returned context is equal to the value specified in <code>attrib_list</code>.</li></ul></td></tr></tbody></table>

Attributes that can be specified in `attrib_list` include:

-   `````````PP_GRAPHICS3DATTRIB_ALPHA_SIZE`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_BLUE_SIZE`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_GREEN_SIZE`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_RED_SIZE`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_DEPTH_SIZE`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_STENCIL_SIZE`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_SAMPLES`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_SAMPLE_BUFFERS`: Category: AtLeast Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_WIDTH`: Category: Exact Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_HEIGHT`: Category: Exact Default: 0.
-   `````````PP_GRAPHICS3DATTRIB_SWAP_BEHAVIOR`: Category: Exact Default: Implementation defined.

``````` `

**Returns:**  
A `PP_Resource` containing the 3D graphics context if successful or 0 if unsuccessful.

<span id="a80698c6d8c8b04e07d08c4595e0e977b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a80698c6d8c8b04e07d08c4595e0e977b" class="el">PPB_Graphics3D::GetAttribMaxValue</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> instance, int32_t attribute, int32_t *value)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a80698c6d8c8b04e07d08c4595e0e977b" class="el" title="GetAttribMaxValue() retrieves the maximum supported value for the given attribute.">GetAttribMaxValue()</a> retrieves the maximum supported value for the given attribute.

This function may be used to check if a particular attribute value is supported before attempting to create a context.

**Parameters:**  
<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The module instance.</td></tr><tr class="even"><td>[in]</td><td>attribute</td><td>The attribute for which maximum value is queried. Attributes that can be queried for include:<ul><li><code>PP_GRAPHICS3DATTRIB_ALPHA_SIZE</code></li><li><code>PP_GRAPHICS3DATTRIB_BLUE_SIZE</code></li><li><code>PP_GRAPHICS3DATTRIB_GREEN_SIZE</code></li><li><code>PP_GRAPHICS3DATTRIB_RED_SIZE</code></li><li><code>PP_GRAPHICS3DATTRIB_DEPTH_SIZE</code></li><li><code>PP_GRAPHICS3DATTRIB_STENCIL_SIZE</code></li><li><code>PP_GRAPHICS3DATTRIB_SAMPLES</code></li><li><code>PP_GRAPHICS3DATTRIB_SAMPLE_BUFFERS</code></li><li><code>PP_GRAPHICS3DATTRIB_WIDTH</code></li><li><code>PP_GRAPHICS3DATTRIB_HEIGHT</code></li></ul></td></tr><tr class="odd"><td>[out]</td><td>value</td><td>The maximum supported value for <code>attribute</code></td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` on success or the following on error:

-   `PP_ERROR_BADRESOURCE` if `instance` is invalid
-   `PP_ERROR_BADARGUMENT` if `attribute` is invalid or `value` is 0

<span id="aae3be34b7308c4510a3952b06fb7d6d9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#aae3be34b7308c4510a3952b06fb7d6d9" class="el">PPB_Graphics3D::GetAttribs</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, int32_t attrib_list[])</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#aae3be34b7308c4510a3952b06fb7d6d9" class="el" title="GetAttribs() retrieves the value for each attribute in attrib_list.">GetAttribs()</a> retrieves the value for each attribute in `attrib_list`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>context</td><td>The 3D graphics context.</td></tr><tr class="even"><td>[in,out]</td><td>attrib_list</td><td>The list of attributes that are queried. <code>attrib_list</code> has the same structure as described for <code>PPB_Graphics3D::Create</code>. It is both input and output structure for this function. All attributes specified in <code>PPB_Graphics3D::Create</code> can be queried for.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_OK` on success or:

-   `PP_ERROR_BADRESOURCE` if context is invalid
-   `PP_ERROR_BADARGUMENT` if attrib\_list is 0 or any attribute in the `attrib_list` is not a valid attribute.

**Example usage:** To get the values for rgb bits in the color buffer, this function must be called as following:

     int attrib_list[] = {PP_GRAPHICS3DATTRIB_RED_SIZE, 0,
                          PP_GRAPHICS3DATTRIB_GREEN_SIZE, 0,
                          PP_GRAPHICS3DATTRIB_BLUE_SIZE, 0,
                          PP_GRAPHICS3DATTRIB_NONE};
     GetAttribs(context, attrib_list);
     int red_bits = attrib_list[1];
     int green_bits = attrib_list[3];
     int blue_bits = attrib_list[5];

<span id="ae6e9764a94663000dcb2aa610fac724c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#ae6e9764a94663000dcb2aa610fac724c" class="el">PPB_Graphics3D::GetError</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#ae6e9764a94663000dcb2aa610fac724c" class="el" title="GetError() returns the current state of the given 3D context.">GetError()</a> returns the current state of the given 3D context.

The recoverable error conditions that have no side effect are detected and returned immediately by all functions in this interface. In addition the implementation may get into a fatal state while processing a command. In this case the application must destroy the context and reinitialize client API state and objects to continue rendering.

Note that the same error code is also returned in the SwapBuffers callback. It is recommended to handle error in the SwapBuffers callback because GetError is synchronous. This function may be useful in rare cases where drawing a frame is expensive and you want to verify the result of ResizeBuffers before attempting to draw a frame.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>The</td><td>3D graphics context.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns:

-   `PP_OK` if no error
-   `PP_ERROR_NOMEMORY`
-   `PP_ERROR_CONTEXT_LOST`

<span id="af59ffbcc71e08386f66594a138ab4ea5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#af59ffbcc71e08386f66594a138ab4ea5" class="el">PPB_Graphics3D::IsGraphics3D</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#af59ffbcc71e08386f66594a138ab4ea5" class="el" title="IsGraphics3D() determines if the given resource is a valid Graphics3D context.">IsGraphics3D()</a> determines if the given resource is a valid `Graphics3D` context.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Graphics3D</code> context resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
PP\_TRUE if the given resource is a valid `Graphics3D`, `PP_FALSE` if it is an invalid resource or is a resource of another type.

<span id="a3bea5a6f3fc77df73c1cf4f02d32b4ec" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a3bea5a6f3fc77df73c1cf4f02d32b4ec" class="el">PPB_Graphics3D::ResizeBuffers</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, int32_t width, int32_t height)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a3bea5a6f3fc77df73c1cf4f02d32b4ec" class="el" title="ResizeBuffers() resizes the backing surface for context.">ResizeBuffers()</a> resizes the backing surface for context.

If the surface could not be resized due to insufficient resources, `PP_ERROR_NOMEMORY` error is returned on the next `SwapBuffers` callback.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>context</td><td>The 3D graphics context.</td></tr><tr class="even"><td>[in]</td><td>width</td><td>The width of the backing surface.</td></tr><tr class="odd"><td>[in]</td><td>height</td><td>The height of the backing surface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_OK` on success or:

-   `PP_ERROR_BADRESOURCE` if context is invalid.
-   `PP_ERROR_BADARGUMENT` if the value specified for `width` or `height` is less than zero.

<span id="a093c4674cef82a08f5726bed8361d49d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a093c4674cef82a08f5726bed8361d49d" class="el">PPB_Graphics3D::SetAttribs</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, const int32_t attrib_list[])</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a093c4674cef82a08f5726bed8361d49d" class="el" title="SetAttribs() sets the values for each attribute in attrib_list.">SetAttribs()</a> sets the values for each attribute in `attrib_list`.

**Parameters:**  
<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><tbody><tr class="odd"><td>[in]</td><td>context</td><td>The 3D graphics context.</td></tr><tr class="even"><td>[in]</td><td>attrib_list</td><td>The list of attributes whose values need to be set. <code>attrib_list</code> has the same structure as described for <code>PPB_Graphics3D::Create</code>. Attributes that can be specified are:<ul><li><code>PP_GRAPHICS3DATTRIB_SWAP_BEHAVIOR</code></li></ul></td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_OK` on success or:

-   `PP_ERROR_BADRESOURCE` if `context` is invalid.
-   `PP_ERROR_BADARGUMENT` if `attrib_list` is 0 or any attribute in the `attrib_list` is not a valid attribute.

<span id="a293c6941c0da084267ffba3954793497" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a293c6941c0da084267ffba3954793497" class="el">PPB_Graphics3D::SwapBuffers</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___graphics3_d__1__0#a293c6941c0da084267ffba3954793497" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> makes the contents of the color buffer available for compositing.

This function has no effect on off-screen surfaces - ones not bound to any plugin instance. The contents of ancillary buffers are always undefined after calling `SwapBuffers`. The contents of the color buffer are undefined if the value of the `PP_GRAPHICS3DATTRIB_SWAP_BEHAVIOR` attribute of context is not `PP_GRAPHICS3DATTRIB_BUFFER_PRESERVED`.

`SwapBuffers` runs in asynchronous mode. Specify a callback function and the argument for that callback function. The callback function will be executed on the calling thread after the color buffer has been composited with rest of the html page. While you are waiting for a SwapBuffers callback, additional calls to SwapBuffers will fail.

Because the callback is executed (or thread unblocked) only when the plugin's current state is actually on the screen, this function provides a way to rate limit animations. By waiting until the image is on the screen before painting the next frame, you can ensure you're not generating updates faster than the screen can be updated.

SwapBuffers performs an implicit flush operation on context. If the context gets into an unrecoverable error condition while processing a command, the error code will be returned as the argument for the callback. The callback may return the following error codes:

-   `PP_ERROR_NOMEMORY`
-   `PP_ERROR_CONTEXT_LOST` Note that the same error code may also be obtained by calling GetError.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>context</td><td>The 3D graphics context.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>The callback that will executed when <code>SwapBuffers</code> completes.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns PP\_OK on success or:

-   `PP_ERROR_BADRESOURCE` if context is invalid.
-   `PP_ERROR_BADARGUMENT` if callback is invalid.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__graphics__3d_8h/" class="el">ppb_graphics_3d.h</a>
