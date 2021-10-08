---json {"title":"pp::Graphics2D Class Reference"} ---

Inheritance diagram for pp::Graphics2D:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#aef2cf8f0798d4980309f9bc888a73463" class="el">Graphics2D</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a144e483e91d77dd7314698a87d57c7ca" class="el">Graphics2D</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a193584685783cfcf3ab4bd01a5ca6e14" class="el">Graphics2D</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_size/" class="el">Size</a> &amp;<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ad623f80db2c0cc679619303a0c0b9eff" class="el">size</a>, bool is_always_opaque)</td></tr><tr class="even"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#aa40a889094d345add38f16d559ae0ebd" class="el">~Graphics2D</a> ()</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ad19b4539e1c1fdacc6ff41383b6cd3ba" class="el">operator=</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ad623f80db2c0cc679619303a0c0b9eff" class="el">size</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el">PaintImageData</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;image, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp;top_left)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#af779f51bfb0c4064535ea91b2470ddc7" class="el">PaintImageData</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;image, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp;top_left, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp;src_rect)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a6a4256bb84cab71909821699d7aea369" class="el">Scroll</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp;clip, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp;amount)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a73185e278ea87d33cfec2f00a56314d9" class="el">ReplaceContents</a> (<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data/" class="el">ImageData</a> *image)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el">Flush</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a96a91958227a7e42a829033241fac6b1" class="el">SetScale</a> (float scale)</td></tr><tr class="odd"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a5b927eaabdd78b1a0094aa1a3695bae2" class="el">GetScale</a> ()</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3babd6bb9c922a650b3c7c57d1e36d8c" class="el">SetLayerTransform</a> (float scale, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp;origin, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp;translate)</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="aef2cf8f0798d4980309f9bc888a73463" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#aef2cf8f0798d4980309f9bc888a73463" class="el">pp::Graphics2D::Graphics2D</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `Graphics2D` object.

<span id="a144e483e91d77dd7314698a87d57c7ca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#aef2cf8f0798d4980309f9bc888a73463" class="el">pp::Graphics2D::Graphics2D</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a>.

The underlying 2D context is not copied; this constructor creates another reference to the original 2D context.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A pointer to a <code>Graphics2D</code> context.</td></tr></tbody></table>

<span id="a193584685783cfcf3ab4bd01a5ca6e14" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#aef2cf8f0798d4980309f9bc888a73463" class="el">pp::Graphics2D::Graphics2D</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><em>size</em>,</td></tr><tr class="odd"><td></td><td></td><td>bool </td><td><em>is_always_opaque</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor allocating a new 2D graphics context with the given size in the browser, resulting object will be <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> if the allocation failed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>size</td><td>The size of the 2D graphics context in the browser, measured in pixels. See <code>SetScale()</code> for more information.</td></tr><tr class="odd"><td>[in]</td><td>is_always_opaque</td><td>Set the <code>is_always_opaque</code> flag to true if you know that you will be painting only opaque data to this context. This option will disable blending when compositing the module with the web page, which might give higher performance on some computers.</td></tr></tbody></table>

If you set `is_always_opaque`, your alpha channel should always be set to 0xFF or there may be painting artifacts. The alpha values overwrite the destination alpha values without blending when `is_always_opaque` is true.

<span id="aa40a889094d345add38f16d559ae0ebd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#aa40a889094d345add38f16d559ae0ebd" class="el">pp::Graphics2D::~Graphics2D</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

A destructor that decrements the reference count of a `Graphics2D` object made using the previous copy constructor.

It is possible that the destructor does not totally destroy the underlying 2D context if there are outstanding references to it.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a3c1e23ad48ad62860a125d471b7664a4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el">pp::Graphics2D::Flush</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> flushes any enqueued paint, scroll, and replace commands to the backing store.

This actually executes the updates, and causes a repaint of the webpage, assuming this graphics context is bound to a module instance.

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> runs in asynchronous mode. Specify a callback function and the argument for that callback function. The callback function will be executed on the calling thread when the image has been painted to the screen. While you are waiting for a `Flush` callback, additional calls to <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> will fail.

Because the callback is executed (or thread unblocked) only when the module's image is actually on the screen, this function provides a way to rate limit animations. By waiting until the image is on the screen before painting the next frame, you can ensure you're not flushing 2D graphics faster than the screen can be updated.

**Unbound contexts** If the context is not bound to a module instance, you will still get a callback. The callback will execute after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a> returns to avoid reentrancy. The callback will not wait until anything is painted to the screen because there will be nothing on the screen. The timing of this callback is not guaranteed and may be deprioritized by the browser because it is not affecting the user experience.

**Off-screen instances** If the context is bound to an instance that is currently not visible (for example, scrolled out of view) it will behave like the "unbound context" case.

**Detaching a context** If you detach a context from a module instance, any pending flush callbacks will be converted into the "unbound context" case.

**Released contexts** A callback may or may not still get called even if you have released all of your references to the context. This can occur if there are internal references to the context that means it has not been internally destroyed (for example, if it is still bound to an instance) or due to other implementation details. As a result, you should be careful to check that flush callbacks are for the context you expect and that you're capable of handling callbacks for context that you may have released your reference to.

**Shutdown** If a module instance is removed when a Flush is pending, the callback will not be executed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called when the image has been painted on the screen.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_OK` on success or `PP_ERROR_BADRESOURCE` if the graphics context is invalid, `PP_ERROR_BADARGUMENT` if the callback is null and flush is being called from the main thread of the module, or `PP_ERROR_INPROGRESS` if a flush is already pending that has not issued its callback yet. In the failure case, nothing will be updated and no callback will be scheduled.

<span id="a5b927eaabdd78b1a0094aa1a3695bae2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a5b927eaabdd78b1a0094aa1a3695bae2" class="el">pp::Graphics2D::GetScale</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a5b927eaabdd78b1a0094aa1a3695bae2" class="el" title="GetScale() gets the scale factor that will be applied when painting the graphics context onto the out...">GetScale()</a> gets the scale factor that will be applied when painting the graphics context onto the output device.

**Returns:**  
Returns the scale factor for the graphics context. If the resource is invalid, 0.0 will be returned. The default scale for a graphics context is 1.0.

<span id="ad19b4539e1c1fdacc6ff41383b6cd3ba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a>&amp; pp::Graphics2D::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

This function assigns one 2D graphics context to this 2D graphics context.

This function increases the reference count of the 2D resource of the other 2D graphics context while decrementing the reference counter of this 2D graphics context.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>An other 2D graphics context.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d/" class="el">Graphics2D</a> context.

<span id="ab61e3018d1f5c4301f71ad0001d3ad8e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el">pp::Graphics2D::PaintImageData</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>image</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>top_left</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el" title="PaintImageData() enqueues a paint command of the given image into the context.">PaintImageData()</a> enqueues a paint command of the given image into the context.

This command has no effect until you call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>. As a result, what counts is the contents of the bitmap when you call Flush, not when you call this function.

The provided image will be placed at `top_left` from the top left of the context's internal backing store. This version of PaintImageData paints the entire image. Refer to the other version of this function to paint only part of the area.

The painted area of the source bitmap must fall entirely within the context. Attempting to paint outside of the context will result in an error.

There are two methods most modules will use for painting. The first method is to generate a new `ImageData` and then paint it. In this case, you'll set the location of your painting to `top_left` and set `src_rect` to `NULL`. The second is that you're generating small invalid regions out of a larger bitmap representing your entire module's image.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image</td><td>The <code>ImageData</code> to be painted.</td></tr><tr class="even"><td>[in]</td><td>top_left</td><td>A <code>Point</code> representing the <code>top_left</code> location where the <code>ImageData</code> will be painted.</td></tr></tbody></table>

<span id="af779f51bfb0c4064535ea91b2470ddc7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el">pp::Graphics2D::PaintImageData</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>image</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>top_left</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp; </td><td><em>src_rect</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el" title="PaintImageData() enqueues a paint command of the given image into the context.">PaintImageData()</a> enqueues a paint command of the given image into the context.

This command has no effect until you call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>. As a result, what counts is the contents of the bitmap when you call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>, not when you call this function.

The provided image will be placed at `top_left` from the top left of the context's internal backing store. Then the pixels contained in `src_rect` will be copied into the backing store. This means that the rectangle being painted will be at `src_rect` offset by `top_left`.

The `src_rect` is specified in the coordinate system of the image being painted, not the context. For the common case of copying the entire image, you may specify an empty `src_rect`.

The painted area of the source bitmap must fall entirely within the context. Attempting to paint outside of the context will result in an error. However, the source bitmap may fall outside the context, as long as the `src_rect` subset of it falls entirely within the context.

There are two methods most modules will use for painting. The first method is to generate a new `ImageData` and then paint it. In this case, you'll set the location of your painting to `top_left` and set `src_rect` to `NULL`. The second is that you're generating small invalid regions out of a larger bitmap representing your entire module. In this case, you would set the location of your image to (0,0) and then set `src_rect` to the pixels you changed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image</td><td>The <code>ImageData</code> to be painted.</td></tr><tr class="even"><td>[in]</td><td>top_left</td><td>A <code>Point</code> representing the <code>top_left</code> location where the <code>ImageData</code> will be painted.</td></tr><tr class="odd"><td>[in]</td><td>src_rect</td><td>The rectangular area where the <code>ImageData</code> will be painted.</td></tr></tbody></table>

<span id="a73185e278ea87d33cfec2f00a56314d9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a73185e278ea87d33cfec2f00a56314d9" class="el">pp::Graphics2D::ReplaceContents</a></td><td>(</td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data/" class="el">ImageData</a> * </td><td><em>image</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a73185e278ea87d33cfec2f00a56314d9" class="el" title="ReplaceContents() provides a slightly more efficient way to paint the entire module&#39;s image...">ReplaceContents()</a> provides a slightly more efficient way to paint the entire module's image.

Normally, calling <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el" title="PaintImageData() enqueues a paint command of the given image into the context.">PaintImageData()</a> requires that the browser copy the pixels out of the image and into the graphics context's backing store. This function replaces the graphics context's backing store with the given image, avoiding the copy.

The new image must be the exact same size as this graphics context. If the new image uses a different image format than the browser's native bitmap format (use <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_image_data#a4208e7eabf98df7b91c01ed6fcd92425" class="el" title="GetNativeImageDataFormat() determines the browser&#39;s preferred format for images.">ImageData::GetNativeImageDataFormat()</a> to retrieve the format), then a conversion will be done inside the browser which may slow the performance a little bit.

**Note:** The new image will not be painted until you call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>.

After this call, you should take care to release your references to the image. If you paint to the image after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a73185e278ea87d33cfec2f00a56314d9" class="el" title="ReplaceContents() provides a slightly more efficient way to paint the entire module&#39;s image...">ReplaceContents()</a>, there is the possibility of significant painting artifacts because the page might use partially-rendered data when copying out of the backing store.

In the case of an animation, you will want to allocate a new image for the next frame. It is best if you wait until the flush callback has executed before allocating this bitmap. This gives the browser the option of caching the previous backing store and handing it back to you (assuming the sizes match). In the optimal case, this means no bitmaps are allocated during the animation, and the backing store and "front buffer" (which the module is painting into) are just being swapped back and forth.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image</td><td>The <code>ImageData</code> to be painted.</td></tr></tbody></table>

<span id="a6a4256bb84cab71909821699d7aea369" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a6a4256bb84cab71909821699d7aea369" class="el">pp::Graphics2D::Scroll</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp; </td><td><em>clip</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>amount</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a6a4256bb84cab71909821699d7aea369" class="el" title="Scroll() enqueues a scroll of the context&#39;s backing store.">Scroll()</a> enqueues a scroll of the context's backing store.

This function has no effect until you call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3c1e23ad48ad62860a125d471b7664a4" class="el" title="Flush() flushes any enqueued paint, scroll, and replace commands to the backing store.">Flush()</a>. The data within the provided clipping rectangle will be shifted by (dx, dy) pixels.

This function will result in some exposed region which will have undefined contents. The module should call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ab61e3018d1f5c4301f71ad0001d3ad8e" class="el" title="PaintImageData() enqueues a paint command of the given image into the context.">PaintImageData()</a> on these exposed regions to give the correct contents.

The scroll can be larger than the area of the clipping rectangle, which means the current image will be scrolled out of the rectangle. This scenario is not an error but will result in a no-op.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>clip</td><td>The clipping rectangle.</td></tr><tr class="even"><td>[in]</td><td>amount</td><td>The amount the area in the clipping rectangle will shifted.</td></tr></tbody></table>

<span id="a3babd6bb9c922a650b3c7c57d1e36d8c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a3babd6bb9c922a650b3c7c57d1e36d8c" class="el">pp::Graphics2D::SetLayerTransform</a></td><td>(</td><td>float </td><td><em>scale</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>origin</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>translate</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<span id="a96a91958227a7e42a829033241fac6b1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a96a91958227a7e42a829033241fac6b1" class="el">pp::Graphics2D::SetScale</a></td><td>(</td><td>float </td><td><em>scale</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#a96a91958227a7e42a829033241fac6b1" class="el" title="SetScale() sets the scale factor that will be applied when painting the graphics context onto the out...">SetScale()</a> sets the scale factor that will be applied when painting the graphics context onto the output device.

Typically, if rendering at device resolution is desired, the context would be created with the width and height scaled up by the view's GetDeviceScale and SetScale called with a scale of 1.0 / GetDeviceScale(). For example, if the view resource passed to DidChangeView has a rectangle of (w=200, h=100) and a device scale of 2.0, one would call Create with a size of (w=400, h=200) and then call SetScale with 0.5. One would then treat each pixel in the context as a single device pixel.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>scale</td><td>The scale to apply when painting.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `true` on success or `false` if the resource is invalid or the scale factor is 0 or less.

<span id="ad623f80db2c0cc679619303a0c0b9eff" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_size/" class="el">Size</a>&amp; <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_graphics2_d#ad623f80db2c0cc679619303a0c0b9eff" class="el">pp::Graphics2D::size</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning size of the 2D graphics context.

**Returns:**  
The size of the 2D graphics context measured in pixels.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/graphics__2d_8h/" class="el">graphics_2d.h</a>
