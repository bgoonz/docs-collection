---json {"title":"PPB\_CompositorLayer Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a18886277850d090dc4040673be1a95a5" class="el">IsCompositorLayer</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a95a6b0d11f2c26dc5606deedbb5fdd1d" class="el">SetColor</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, float red, float green, float blue, float alpha, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___size/" class="el">PP_Size</a> *size)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a553c839ad958f88e01ec248f4a7644ea" class="el">SetTexture</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, uint32_t target, uint32_t texture, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___size/" class="el">PP_Size</a> *size, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a97246f75ba980f6a42f4857b83b971e1" class="el">SetImage</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___size/" class="el">PP_Size</a> *size, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a5c43b254fe0c939f312d81ac111545b3" class="el">SetClipRect</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___rect/" class="el">PP_Rect</a> *rect)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#ae662f2bc5b7fd01b971f0e2bd4f2773e" class="el">SetTransform</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, const float matrix[16])</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a4c4323eb27d3d562edc3e6f610efd222" class="el">SetOpacity</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, float opacity)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a64905f3e51f0dfaa28f3a44dda9493ae" class="el">SetBlendMode</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___enums#ga89e5ae33b72af2b38dc8f1a7324944f0" class="el">PP_BlendMode</a> mode)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a47daf85ecbdcb484d691e3b59f550bda" class="el">SetSourceRect</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___float_rect/" class="el">PP_FloatRect</a> *rect)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#aa593f2d0f12f118e01a69259f39d5e07" class="el">SetPremultipliedAlpha</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> premult)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Defines the `PPB_CompositorLayer` interface.

It is used by `PPB_Compositor`.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a18886277850d090dc4040673be1a95a5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a18886277850d090dc4040673be1a95a5" class="el">PPB_CompositorLayer::IsCompositorLayer</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a resource is a compositor layer resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The <code>PP_Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is a compositor layer resource or `PP_FALSE` otherwise.

<span id="a64905f3e51f0dfaa28f3a44dda9493ae" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a64905f3e51f0dfaa28f3a44dda9493ae" class="el">PPB_CompositorLayer::SetBlendMode</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___enums#ga89e5ae33b72af2b38dc8f1a7324944f0" class="el">PP_BlendMode</a> mode)</td></tr></tbody></table>

Sets the blend mode which is used to composite the layer.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] mode A `PP_BlendMode`. The default mode is `PP_BLENDMODE_SRC_OVER`.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a5c43b254fe0c939f312d81ac111545b3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a5c43b254fe0c939f312d81ac111545b3" class="el">PPB_CompositorLayer::SetClipRect</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___rect/" class="el">PP_Rect</a> *rect)</td></tr></tbody></table>

Sets a clip rectangle for a compositor layer.

The Chromium compositor applies a transform matrix on the layer first, and then clips the layer with the rectangle.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] rect The clip rectangle. The origin is top-left corner of the plugin.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a95a6b0d11f2c26dc5606deedbb5fdd1d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a95a6b0d11f2c26dc5606deedbb5fdd1d" class="el">PPB_CompositorLayer::SetColor</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, float red, float green, float blue, float alpha, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___size/" class="el">PP_Size</a> *size)</td></tr></tbody></table>

Sets the color of a solid color layer.

If the layer is uninitialized, it will initialize the layer first, and then set its color. If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] red A `float` for the red color component. It will be clamped to \[0, 1\]. param\[in\] green A `float` for the green color component. It will be clamped to \[0, 1\]. param\[in\] blue A `float` for the blue color component. It will be clamped to \[0, 1\]. param\[in\] alpha A `float` for the alpha color component. It will be clamped to \[0, 1\]. param\[in\] size A `PP_Size` for the size of the layer before transform.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a97246f75ba980f6a42f4857b83b971e1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a97246f75ba980f6a42f4857b83b971e1" class="el">PPB_CompositorLayer::SetImage</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___size/" class="el">PP_Size</a> *size, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> cc)</td></tr></tbody></table>

Sets the image of an image layer.

If the layer is uninitialized, it will initialize the layer first, and then set its image. The layer size will be set to the image's size. The source rect will be set to the full image. If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] image\_data A `PP_Resource` corresponding to an image data resource. param\[in\] size A `PP_Size` for the size of the layer before transform. If NULL, the image's size will be used. param\[in\] cc A `PP_CompletionCallback` to be called when the image data is released by Chromium compositor.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a4c4323eb27d3d562edc3e6f610efd222" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a4c4323eb27d3d562edc3e6f610efd222" class="el">PPB_CompositorLayer::SetOpacity</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, float opacity)</td></tr></tbody></table>

Sets the opacity value which will be applied to the layer.

The effective value of each pixel is computed as:

if (premult\_alpha) pixel.rgb = pixel.rgb \* opacity; pixel.a = pixel.a \* opactiy;

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] opacity A `float` for the opacity value, The default value is 1.0f.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="aa593f2d0f12f118e01a69259f39d5e07" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#aa593f2d0f12f118e01a69259f39d5e07" class="el">PPB_CompositorLayer::SetPremultipliedAlpha</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> premult)</td></tr></tbody></table>

Sets the premultiplied alpha for an texture layer.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] premult A `PP_Bool` with `PP_TRUE` if pre-multiplied alpha is used.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a47daf85ecbdcb484d691e3b59f550bda" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a47daf85ecbdcb484d691e3b59f550bda" class="el">PPB_CompositorLayer::SetSourceRect</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___float_rect/" class="el">PP_FloatRect</a> *rect)</td></tr></tbody></table>

Sets a source rectangle for a texture layer or an image layer.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] rect A `PP_FloatRect` for an area of the source to consider. For a texture layer, rect is in uv coordinates. For an image layer, rect is in pixels. If the rect is beyond the dimensions of the texture or image, `PP_ERROR_BADARGUMENT` will be returned. If the layer size does not match the source rect size, bilinear scaling will be used.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a553c839ad958f88e01ec248f4a7644ea" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#a553c839ad958f88e01ec248f4a7644ea" class="el">PPB_CompositorLayer::SetTexture</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> context, uint32_t target, uint32_t texture, const struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___size/" class="el">PP_Size</a> *size, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> cc)</td></tr></tbody></table>

Sets the texture of a texture layer.

If the layer is uninitialized, it will initialize the layer first, and then set its texture. The source rect will be set to ((0, 0), (1, 1)). If the layer has been initialized to another kind of layer, the layer will not be changed, and `PP_ERROR_BADARGUMENT` will be returned.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] context A `PP_Resource` corresponding to a graphics 3d resource which owns the GL texture. param\[in\] target GL texture target (GL\_TEXTURE\_2D, etc). param\[in\] texture A GL texture object id. param\[in\] size A `PP_Size` for the size of the layer before transform. param\[in\] cc A `PP_CompletionCallback` to be called when the texture is released by Chromium compositor.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="ae662f2bc5b7fd01b971f0e2bd4f2773e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___compositor_layer__0__2#ae662f2bc5b7fd01b971f0e2bd4f2773e" class="el">PPB_CompositorLayer::SetTransform</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> layer, const float matrix[16])</td></tr></tbody></table>

Sets a transform matrix which is used to composite the layer.

param\[in\] layer A `PP_Resource` corresponding to a compositor layer resource. param\[in\] matrix A float array with 16 elements. The matrix is column major. The default transform matrix is an identity matrix.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__compositor__layer_8h/" class="el">ppb_compositor_layer.h</a>
