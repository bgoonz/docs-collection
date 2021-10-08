—json {“title”:“pp::CompositorLayer Class Reference”} —

Inheritance diagram for pp::CompositorLayer:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9666ec00c4436b55a72e5d40aa3dc7b6" class="el">CompositorLayer</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#accac5a185f09a0090eb646593714358a" class="el">CompositorLayer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer/" class="el">CompositorLayer</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a93dea71aef9af347d0198f80ba59df77" class="el">CompositorLayer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#aa8c5c916890ad4df1bb5a9f602d1be72" class="el">CompositorLayer</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a612e4be9de4ad166199629c3bee2fca6" class="el">~CompositorLayer</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a287280d4de4751d6402fbc0a99f66927" class="el">SetColor</a> (float red, float green, float blue, float alpha, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp;size)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a758f644c0ce8f5203d2788ca77c99826" class="el">SetTexture</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_graphics3_d/" class="el">Graphics3D</a> &amp;context, uint32_t target, uint32_t texture, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp;size, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a10ed72ce036d1a4c506850139dc4cb8d" class="el">SetImage</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;image, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a4f7720cf49b3ae6c67e1d66361ba10ae" class="el">SetImage</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;image, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp;size, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#ada122da8347b677780971404a32ab3e1" class="el">SetClipRect</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp;rect)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a1c3c017389c63792f2e69408c3cd9346" class="el">SetTransform</a> (const float matrix[16])</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9b7cc79b29fcfa6cb249ae1bb9f0258f" class="el">SetOpacity</a> (float opacity)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a5a778db6f1685c638f874493712f901a" class="el">SetBlendMode</a> (PP_BlendMode mode)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#ac5686c87e1b2c683b3b5f1c1fac27040" class="el">SetSourceRect</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_rect/" class="el">FloatRect</a> &amp;rect)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a21e927dbcdfdd33608f662951decc913" class="el">SetPremultipliedAlpha</a> (bool premult)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a7223bd5964107f9a905a77aa37047c8d" class="el">IsCompositorLayer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a9666ec00c4436b55a72e5d40aa3dc7b6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9666ec00c4436b55a72e5d40aa3dc7b6" class="el">pp::CompositorLayer::CompositorLayer</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `CompositorLayer` object.

<span id="accac5a185f09a0090eb646593714358a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9666ec00c4436b55a72e5d40aa3dc7b6" class="el">pp::CompositorLayer::CompositorLayer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer/" class="el">CompositorLayer</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `CompositorLayer`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>CompositorLayer</code>.</td></tr></tbody></table>

<span id="a93dea71aef9af347d0198f80ba59df77" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9666ec00c4436b55a72e5d40aa3dc7b6" class="el">pp::CompositorLayer::CompositorLayer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `CompositorLayer` from a `Resource`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_CompositorLayer</code> resource.</td></tr></tbody></table>

<span id="aa8c5c916890ad4df1bb5a9f602d1be72" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9666ec00c4436b55a72e5d40aa3dc7b6" class="el">pp::CompositorLayer::CompositorLayer</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_CompositorLayer</code> resource.</td></tr></tbody></table>

<span id="a612e4be9de4ad166199629c3bee2fca6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a612e4be9de4ad166199629c3bee2fca6" class="el">pp::CompositorLayer::~CompositorLayer</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a7223bd5964107f9a905a77aa37047c8d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a7223bd5964107f9a905a77aa37047c8d" class="el">pp::CompositorLayer::IsCompositorLayer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Checks whether a `Resource` is a compositor layer, to test whether it is appropriate for use with the `CompositorLayer` constructor.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Resource</code> to test.</td></tr></tbody></table>

**Returns:**  
True if `resource` is a compositor layer.

<span id="a5a778db6f1685c638f874493712f901a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a5a778db6f1685c638f874493712f901a" class="el">pp::CompositorLayer::SetBlendMode</a></td><td>(</td><td>PP_BlendMode </td><td><em>mode</em></td><td>)</td><td></td></tr></tbody></table>

Sets the blend mode which is used to composite the layer.

param\[in\] mode A `PP_BlendMode`. The default value is `PP_BLENDMODE_SRC_OVER`.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="ada122da8347b677780971404a32ab3e1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#ada122da8347b677780971404a32ab3e1" class="el">pp::CompositorLayer::SetClipRect</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_rect/" class="el">Rect</a> &amp; </td><td><em>rect</em></td><td>)</td><td></td></tr></tbody></table>

Sets a clip rectangle for a compositor layer.

The Chromium compositor applies a transform matrix on the layer first, and then clips the layer with the rectangle.

param\[in\] rect The clip rectangle. The origin is top-left corner of the plugin.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a287280d4de4751d6402fbc0a99f66927" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a287280d4de4751d6402fbc0a99f66927" class="el">pp::CompositorLayer::SetColor</a></td><td>(</td><td>float </td><td><em>red</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>green</em>,</td></tr><tr class="odd"><td></td><td></td><td>float </td><td><em>blue</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>alpha</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><em>size</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets the color of a solid color layer.

If the layer is uninitialized, it will initialize the layer first, and then set its color. If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] red A `float` for the red color component. It will be clamped to \[0, 1\] param\[in\] green A `float` for the green color component. It will be clamped to \[0, 1\]. param\[in\] blue A `float` for the blue color component. It will be clamped to \[0, 1\]. param\[in\] alpha A `float` for the alpha color component. It will be clamped to \[0, 1\]. param\[in\] size A `Size` for the size of the layer before transform.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a10ed72ce036d1a4c506850139dc4cb8d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a10ed72ce036d1a4c506850139dc4cb8d" class="el">pp::CompositorLayer::SetImage</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>image</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets the image of an image layer.

If the layer is uninitialized, it will initiliaze the layer first, and then set the image of it. If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] image\_data A `PP_Resource` corresponding to an image data resource. param\[in\] cc A `CompletionCallback` to be called when the image data is released by Chromium compositor.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a4f7720cf49b3ae6c67e1d66361ba10ae" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a10ed72ce036d1a4c506850139dc4cb8d" class="el">pp::CompositorLayer::SetImage</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>image</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><em>size</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets the image of an image layer.

If the layer is uninitialized, it will initialize the layer first, and then set its image. The layer size will be set to the image’s size. The source rect will be set to the full image. If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] image\_data A `ImageData` corresponding to an image data resource. param\[in\] size A `Size` for the size of the layer before transform. param\[in\] cc A `CompletionCallback` to be called when the image data is released by Chromium compositor.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a9b7cc79b29fcfa6cb249ae1bb9f0258f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a9b7cc79b29fcfa6cb249ae1bb9f0258f" class="el">pp::CompositorLayer::SetOpacity</a></td><td>(</td><td>float </td><td><em>opacity</em></td><td>)</td><td></td></tr></tbody></table>

Sets the opacity value which will be applied to the layer.

The effective value of each pixel is computed as:

if (premult\_alpha) pixel.rgb = pixel.rgb \* opacity; pixel.a = pixel.a \* opactiy;

param\[in\] opacity A `float` for the opacity value. The default value is 1.0f.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a21e927dbcdfdd33608f662951decc913" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a21e927dbcdfdd33608f662951decc913" class="el">pp::CompositorLayer::SetPremultipliedAlpha</a></td><td>(</td><td>bool </td><td><em>premult</em></td><td>)</td><td></td></tr></tbody></table>

Sets the premultiplied alpha for an texture layer.

param\[in\] premult A `bool` with `true` if pre-multiplied alpha is used.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="ac5686c87e1b2c683b3b5f1c1fac27040" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#ac5686c87e1b2c683b3b5f1c1fac27040" class="el">pp::CompositorLayer::SetSourceRect</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_rect/" class="el">FloatRect</a> &amp; </td><td><em>rect</em></td><td>)</td><td></td></tr></tbody></table>

Sets a source rectangle for a texture layer or an image layer.

param\[in\] rect A `FloatRect` for an area of the source to consider. For a texture layer, rect is in uv coordinates. For an image layer, rect is in pixels. If the rect is beyond the dimensions of the texture or image, `PP_ERROR_BADARGUMENT` will be returned. If the layer size does not match the source rect size, bilinear scaling will be used.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a758f644c0ce8f5203d2788ca77c99826" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a758f644c0ce8f5203d2788ca77c99826" class="el">pp::CompositorLayer::SetTexture</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_graphics3_d/" class="el">Graphics3D</a> &amp; </td><td><em>context</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>target</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>texture</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><em>size</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets the texture of a texture layer.

If the layer is uninitialized, it will initialize the layer first, and then set its texture. The source rect will be set to ((0, 0), (1, 1)). If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] context A `Graphics3D` corresponding to a graphics 3d resource which owns the GL texture. param\[in\] target GL texture target (GL\_TEXTURE\_2D, etc). param\[in\] texture A GL texture object id. param\[in\] size A `Size` for the size of the layer before transform. param\[in\] cc A `CompletionCallback` to be called when the texture is released by Chromium compositor.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a1c3c017389c63792f2e69408c3cd9346" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer#a1c3c017389c63792f2e69408c3cd9346" class="el">pp::CompositorLayer::SetTransform</a></td><td>(</td><td>const float </td><td><em>matrix</em>[16]</td><td>)</td><td></td></tr></tbody></table>

Sets a transform matrix which is used to composite the layer.

param\[in\] matrix A float array with 16 elements. The matrix is coloum major. The default transform matrix is an identity matrix.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/compositor__layer_8h/" class="el">compositor_layer.h</a>
