---json {"title":"PPB_Graphics2D Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a10e02f41b41c26bb88398b591f06ff12" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> is_always_opaque)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#acae7c38863e9997fc0eee88a54d3d60d" class="el">IsGraphics2D</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a49dcb387e7e420bdd1c22344f3f35718" class="el">Describe</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> *is_always_opaque)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a20071a446e8d7695c697f81a449597fe" class="el">PaintImageData</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *top_left, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *src_rect)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a3f87a2d280d6d4e6b9a2679787f5de1d" class="el">Scroll</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *clip_rect, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *amount)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a533a03163e1617692885aca78e72905a" class="el">ReplaceContents</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el">Flush</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a4b16d1210b49c45edfe477396934238a" class="el">SetScale</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, float scale)</td></tr><tr class="odd"><td style="text-align: right;">float(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#aa2820c6356e60627a175942ddd265753" class="el">GetScale</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#af7d4955738f54da9eda60e5c052bf361" class="el">SetLayerTransform</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, float scale, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *origin, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *translate)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

`PPB_Graphics2D` defines the interface for a 2D graphics context.

---

## Field Documentation

<span id="a10e02f41b41c26bb88398b591f06ff12" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a10e02f41b41c26bb88398b591f06ff12" class="el">PPB_Graphics2D::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> is_always_opaque)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a10e02f41b41c26bb88398b591f06ff12" class="el" title="Create() creates a 2D graphics context.">Create()</a> creates a 2D graphics context.

The returned graphics context will not be bound to the module instance on creation (call BindGraphics() on the module instance to bind the returned graphics context to the module instance).

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The module instance.</td></tr><tr class="even"><td>[in]</td><td>size</td><td>The size of the graphic context.</td></tr><tr class="odd"><td>[in]</td><td>is_always_opaque</td><td>Set the <code>is_always_opaque</code> flag to <code>PP_TRUE</code> if you know that you will be painting only opaque data to this context. This option will disable blending when compositing the module with the web page, which might give higher performance on some computers.</td></tr></tbody></table>

If you set `is_always_opaque`, your alpha channel should always be set to 0xFF or there may be painting artifacts. The alpha values overwrite the destination alpha values without blending when `is_always_opaque` is true.

**Returns:**  
A `PP_Resource` containing the 2D graphics context if successful or 0 if unsuccessful.

<span id="a49dcb387e7e420bdd1c22344f3f35718" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a49dcb387e7e420bdd1c22344f3f35718" class="el">PPB_Graphics2D::Describe</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> *is_always_opaque)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a49dcb387e7e420bdd1c22344f3f35718" class="el" title="Describe() retrieves the configuration for the given graphics context, filling the given values (whic...">Describe()</a> retrieves the configuration for the given graphics context, filling the given values (which must not be `NULL`).

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The 2D Graphics resource.</td></tr><tr class="even"><td>[in,out]</td><td>size</td><td>The size of the 2D graphics context in the browser.</td></tr><tr class="odd"><td>[in,out]</td><td>is_always_opaque</td><td>Identifies whether only opaque data will be painted.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` on success or `PP_FALSE` if the resource is invalid. The output parameters will be set to 0 on a `PP_FALSE`.

<span id="a65dfb539bd057e33977a78537564885e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el">PPB_Graphics2D::Flush</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> flushes any enqueued paint, scroll, and replace commands to the backing store.

This function actually executes the updates, and causes a repaint of the webpage, assuming this graphics context is bound to a module instance.

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> runs in asynchronous mode. Specify a callback function and the argument for that callback function. The callback function will be executed on the calling thread when the image has been painted to the screen. While you are waiting for a flush callback, additional calls to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> will fail.

Because the callback is executed (or thread unblocked) only when the instance's image is actually on the screen, this function provides a way to rate limit animations. By waiting until the image is on the screen before painting the next frame, you can ensure you're not flushing 2D graphics faster than the screen can be updated.

**Unbound contexts** If the context is not bound to a module instance, you will still get a callback. The callback will execute after <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> returns to avoid reentrancy. The callback will not wait until anything is painted to the screen because there will be nothing on the screen. The timing of this callback is not guaranteed and may be deprioritized by the browser because it is not affecting the user experience.

**Off-screen instances** If the context is bound to an instance that is currently not visible (for example, scrolled out of view) it will behave like the "unbound context" case.

**Detaching a context** If you detach a context from a module instance, any pending flush callbacks will be converted into the "unbound context" case.

**Released contexts** A callback may or may not get called even if you have released all of your references to the context. This scenario can occur if there are internal references to the context suggesting it has not been internally destroyed (for example, if it is still bound to an instance) or due to other implementation details. As a result, you should be careful to check that flush callbacks are for the context you expect and that you're capable of handling callbacks for unreferenced contexts.

**Shutdown** If a module instance is removed when a flush is pending, the callback will not be executed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>graphics_2d</td><td>The 2D Graphics resource.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called when the image has been painted on the screen.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_OK` on success or `PP_ERROR_BADRESOURCE` if the graphics context is invalid, `PP_ERROR_BADARGUMENT` if the callback is null and flush is being called from the main thread of the module, or `PP_ERROR_INPROGRESS` if a flush is already pending that has not issued its callback yet. In the failure case, nothing will be updated and no callback will be scheduled.

<span id="aa2820c6356e60627a175942ddd265753" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#aa2820c6356e60627a175942ddd265753" class="el">PPB_Graphics2D::GetScale</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<span id="acae7c38863e9997fc0eee88a54d3d60d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#acae7c38863e9997fc0eee88a54d3d60d" class="el">PPB_Graphics2D::IsGraphics2D</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#acae7c38863e9997fc0eee88a54d3d60d" class="el" title="IsGraphics2D() determines if the given resource is a valid Graphics2D.">IsGraphics2D()</a> determines if the given resource is a valid `Graphics2D`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Graphics2D</code> context resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
PP_TRUE if the given resource is a valid `Graphics2D`, `PP_FALSE` if it is an invalid resource or is a resource of another type.

<span id="a20071a446e8d7695c697f81a449597fe" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a20071a446e8d7695c697f81a449597fe" class="el">PPB_Graphics2D::PaintImageData</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *top_left, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *src_rect)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a20071a446e8d7695c697f81a449597fe" class="el" title="PaintImageData() enqueues a paint of the given image into the context.">PaintImageData()</a> enqueues a paint of the given image into the context.

This function has no effect until you call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> As a result, what counts is the contents of the bitmap when you call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>, not when you call this function.

The provided image will be placed at `top_left` from the top left of the context's internal backing store. Then the pixels contained in `src_rect` will be copied into the backing store. This means that the rectangle being painted will be at `src_rect` offset by `top_left`.

The `src_rect` is specified in the coordinate system of the image being painted, not the context. For the common case of copying the entire image, you may specify an empty `src_rect`.

The painted area of the source bitmap must fall entirely within the context. Attempting to paint outside of the context will result in an error. However, the source bitmap may fall outside the context, as long as the `src_rect` subset of it falls entirely within the context.

There are two methods most modules will use for painting. The first method is to generate a new `ImageData` and then paint it. In this case, you'll set the location of your painting to `top_left` and set `src_rect` to `NULL`. The second is that you're generating small invalid regions out of a larger bitmap representing your entire instance. In this case, you would set the location of your image to (0,0) and then set `src_rect` to the pixels you changed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The 2D Graphics resource.</td></tr><tr class="even"><td>[in]</td><td>image</td><td>The <code>ImageData</code> to be painted.</td></tr><tr class="odd"><td>[in]</td><td>top_left</td><td>A <code>Point</code> representing the <code>top_left</code> location where the <code>ImageData</code> will be painted.</td></tr><tr class="even"><td>[in]</td><td>src_rect</td><td>The rectangular area where the <code>ImageData</code> will be painted.</td></tr></tbody></table>

<span id="a533a03163e1617692885aca78e72905a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a533a03163e1617692885aca78e72905a" class="el">PPB_Graphics2D::ReplaceContents</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a533a03163e1617692885aca78e72905a" class="el" title="ReplaceContents() provides a slightly more efficient way to paint the entire module&#39;s image...">ReplaceContents()</a> provides a slightly more efficient way to paint the entire module's image.

Normally, calling <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a20071a446e8d7695c697f81a449597fe" class="el" title="PaintImageData() enqueues a paint of the given image into the context.">PaintImageData()</a> requires that the browser copy the pixels out of the image and into the graphics context's backing store. This function replaces the graphics context's backing store with the given image, avoiding the copy.

The new image must be the exact same size as this graphics context. If the new image uses a different image format than the browser's native bitmap format (use `PPB_ImageData.GetNativeImageDataFormat()` to retrieve the format), then a conversion will be done inside the browser which may slow the performance a little bit.

**Note:** The new image will not be painted until you call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>.

After this call, you should take care to release your references to the image. If you paint to the image after <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a533a03163e1617692885aca78e72905a" class="el" title="ReplaceContents() provides a slightly more efficient way to paint the entire module&#39;s image...">ReplaceContents()</a>, there is the possibility of significant painting artifacts because the page might use partially-rendered data when copying out of the backing store.

In the case of an animation, you will want to allocate a new image for the next frame. It is best if you wait until the flush callback has executed before allocating this bitmap. This gives the browser the option of caching the previous backing store and handing it back to you (assuming the sizes match). In the optimal case, this means no bitmaps are allocated during the animation, and the backing store and "front buffer" (which the plugin is painting into) are just being swapped back and forth.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>graphics_2d</td><td>The 2D Graphics resource.</td></tr><tr class="even"><td>[in]</td><td>image</td><td>The <code>ImageData</code> to be painted.</td></tr></tbody></table>

<span id="a3f87a2d280d6d4e6b9a2679787f5de1d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a3f87a2d280d6d4e6b9a2679787f5de1d" class="el">PPB_Graphics2D::Scroll</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics_2d, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *clip_rect, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *amount)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a3f87a2d280d6d4e6b9a2679787f5de1d" class="el" title="Scroll() enqueues a scroll of the context&#39;s backing store.">Scroll()</a> enqueues a scroll of the context's backing store.

This function has no effect until you call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>. The data within the provided clipping rectangle will be shifted by (dx, dy) pixels.

This function will result in some exposed region which will have undefined contents. The module should call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a20071a446e8d7695c697f81a449597fe" class="el" title="PaintImageData() enqueues a paint of the given image into the context.">PaintImageData()</a> on these exposed regions to give the correct contents.

The scroll can be larger than the area of the clipping rectangle, which means the current image will be scrolled out of the rectangle. This scenario is not an error but will result in a no-op.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>graphics_2d</td><td>The 2D Graphics resource.</td></tr><tr class="even"><td>[in]</td><td>clip</td><td>The clipping rectangle.</td></tr><tr class="odd"><td>[in]</td><td>amount</td><td>The amount the area in the clipping rectangle will shifted.</td></tr></tbody></table>

<span id="af7d4955738f54da9eda60e5c052bf361" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#af7d4955738f54da9eda60e5c052bf361" class="el">PPB_Graphics2D::SetLayerTransform</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, float scale, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *origin, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *translate)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#af7d4955738f54da9eda60e5c052bf361" class="el" title="SetLayerTransform() sets a transformation factor that will be applied for the current graphics contex...">SetLayerTransform()</a> sets a transformation factor that will be applied for the current graphics context displayed on the output device.

If both SetScale and SetLayerTransform will be used, they are going to get combined for the final result.

This function has no effect until you call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a65dfb539bd057e33977a78537564885e" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>scale</td><td>The scale to be applied.</td></tr><tr class="even"><td>[in]</td><td>origin</td><td>The origin of the scale.</td></tr><tr class="odd"><td>[in]</td><td>translate</td><td>The translation to be applied.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` on success or `PP_FALSE` if the resource is invalid or the scale factor is 0 or less.

<span id="a4b16d1210b49c45edfe477396934238a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a4b16d1210b49c45edfe477396934238a" class="el">PPB_Graphics2D::SetScale</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, float scale)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___graphics2_d__1__2#a4b16d1210b49c45edfe477396934238a" class="el" title="SetScale() sets the scale factor that will be applied when painting the graphics context onto the out...">SetScale()</a> sets the scale factor that will be applied when painting the graphics context onto the output device.

Typically, if rendering at device resolution is desired, the context would be created with the width and height scaled up by the view's GetDeviceScale and SetScale called with a scale of 1.0 / GetDeviceScale(). For example, if the view resource passed to DidChangeView has a rectangle of (w=200, h=100) and a device scale of 2.0, one would call Create with a size of (w=400, h=200) and then call SetScale with 0.5. One would then treat each pixel in the context as a single device pixel.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Graphics2D</code> context resource.</td></tr><tr class="even"><td>[in]</td><td>scale</td><td>The scale to apply when painting.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` on success or `PP_FALSE` if the resource is invalid or the scale factor is 0 or less.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__graphics__2d_8h/" class="el">ppb_graphics_2d.h</a>
