---json {"title":"PPB\_Compositor Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a22fb77daabd3894db97ab1111d111a92" class="el">IsCompositor</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a3b479b946dcec4b3315c5f3cdccba5ce" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a54fc4ef7119d18446a836aef08384da6" class="el">AddLayer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> compositor)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a5082b0dce4a58032439bc3dd4ff741fd" class="el">CommitLayers</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> compositor, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a9a0e4e7aed4b13dbea426a75a8311172" class="el">ResetLayers</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> compositor)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Defines the `PPB_Compositor` interface.

Used for setting `PPB_CompositorLayer` layers to the Chromium compositor for compositing. This allows a plugin to combine different sources of visual data efficiently, such as `PPB_ImageData` images and OpenGL textures. See also `PPB_CompositorLayer` for more information. This interface is still in development (Dev API status) and may change, so is only supported on Dev channel and Canary currently.

**Example usage from plugin code:**

**Setup:**

     PP_Resource compositor;
     compositor = compositor_if->Create(instance);
     instance_if->BindGraphics(instance, compositor);

**Setup layer stack:**

     PP_Resource color_layer = compositor_if->AddLayer(compositor);
     PP_Resource texture_layer = compositor_if->AddLayer(compositor);

**Present one frame:** layer\_if-&gt;SetColor(color\_layer, 255, 255, 0, 255, PP\_MakeSize(400, 400)); <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el" title="PP_CompletionCallback is a common mechanism for supporting potentially asynchronous calls in browser ...">PP_CompletionCallback</a> release\_callback = { TextureReleasedCallback, 0, PP\_COMPLETIONCALLBACK\_FLAG\_NONE, }; layer\_if-&gt;SetTexture(texture\_layer, graphics3d, texture\_id, PP\_MakeSize(300, 300), release\_callback);

<a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el" title="PP_CompletionCallback is a common mechanism for supporting potentially asynchronous calls in browser ...">PP_CompletionCallback</a> callback = { DidFinishCommitLayersCallback, (void\*) texture\_id, PP\_COMPLETIONCALLBACK\_FLAG\_NONE, }; compositor\_if-&gt;CommitLayers(compositor, callback);

**release callback** void ReleaseCallback(int32\_t result, void\* user\_data) { if (result == PP\_OK) { uint32\_t texture\_id = (uint32\_t) user\_data; // reuse the texture or delete it. } }

**Shutdown:**

     core->ReleaseResource(color_layer);
     core->ReleaseResource(texture_layer);
     core->ReleaseResource(compositor);

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a54fc4ef7119d18446a836aef08384da6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a54fc4ef7119d18446a836aef08384da6" class="el">PPB_Compositor::AddLayer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> compositor)</td></tr></tbody></table>

Creates a new `PPB_CompositorLayer` and adds it to the end of the layer stack.

A `PP_Resource` containing the layer is returned. It is uninitialized, `SetColor()`, `SetTexture` or `SetImage` should be used to initialize it. The layer will appear above other pre-existing layers. If `ResetLayers` is called or the `PPB_Compositor` is released, the returned layer will be invalidated, and any further calls on the layer will return `PP_ERROR_BADRESOURCE`.

param\[in\] compositor A `PP_Resource` corresponding to a compositor layer resource.

**Returns:**  
A `PP_Resource` containing the compositor layer resource if successful or 0 otherwise.

<span id="a5082b0dce4a58032439bc3dd4ff741fd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a5082b0dce4a58032439bc3dd4ff741fd" class="el">PPB_Compositor::CommitLayers</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> compositor, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> cc)</td></tr></tbody></table>

Commits layers added by `AddLayer()` to the chromium compositor.

param\[in\] compositor A `PP_Resource` corresponding to a compositor layer resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>PP_CompletionCallback</code> to be called when layers have been represented on screen.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a3b479b946dcec4b3315c5f3cdccba5ce" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a3b479b946dcec4b3315c5f3cdccba5ce" class="el">PPB_Compositor::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a Compositor resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the compositor resource if successful or 0 otherwise.

<span id="a22fb77daabd3894db97ab1111d111a92" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a22fb77daabd3894db97ab1111d111a92" class="el">PPB_Compositor::IsCompositor</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a resource is a compositor resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The <code>PP_Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is a compositor resource or `PP_FALSE` otherwise.

<span id="a9a0e4e7aed4b13dbea426a75a8311172" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___compositor__0__1#a9a0e4e7aed4b13dbea426a75a8311172" class="el">PPB_Compositor::ResetLayers</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> compositor)</td></tr></tbody></table>

Resets layers added by `AddLayer()`.

param\[in\] compositor A `PP_Resource` corresponding to a compositor layer resource.

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__compositor_8h/" class="el">ppb_compositor.h</a>
