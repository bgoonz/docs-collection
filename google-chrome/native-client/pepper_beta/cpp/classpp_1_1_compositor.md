---json {"title":"pp::Compositor Class Reference"} ---

Inheritance diagram for pp::Compositor:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abe16adaeaac2569518d28e070ce487b2" class="el">Compositor</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#a0dc88d1d68ca2ab34f0c8ffa1a0b2f4b" class="el">Compositor</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#a30abcad5657f2b7779c20764f9026460" class="el">Compositor</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor/" class="el">Compositor</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#ad1130a511519ff5a5bc7bfae44cb0b6d" class="el">Compositor</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#a43e403e54998200768d198ae95571461" class="el">Compositor</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abf2a4c7ef3a0a727d1b80a5cd2f39729" class="el">~Compositor</a> ()</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer/" class="el">CompositorLayer</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#adddfb226d04f6169def30afe3639c15d" class="el">AddLayer</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#ad9171e29e89900cccd7c10cc4654cae1" class="el">CommitLayers</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#a178daa26f7dd593a6905235fa840d54b" class="el">ResetLayers</a> ()</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#ab699455da240e4a7ed01740b4c05d81f" class="el">IsCompositor</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `Compositor` interface is used for setting `CompositorLayer` layers to the Chromium compositor for compositing.

This allows a plugin to combine different sources of visual data efficiently, such as `ImageData` images and OpenGL textures. See also `CompositorLayer` for more information.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="abe16adaeaac2569518d28e070ce487b2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abe16adaeaac2569518d28e070ce487b2" class="el">pp::Compositor::Compositor</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `Compositor` object.

<span id="a0dc88d1d68ca2ab34f0c8ffa1a0b2f4b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abe16adaeaac2569518d28e070ce487b2" class="el">pp::Compositor::Compositor</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor for creating and initializing a compositor.

On failure, the object will be <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

<span id="a30abcad5657f2b7779c20764f9026460" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abe16adaeaac2569518d28e070ce487b2" class="el">pp::Compositor::Compositor</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor/" class="el">Compositor</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `Compositor`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>Compositor</code>.</td></tr></tbody></table>

<span id="ad1130a511519ff5a5bc7bfae44cb0b6d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abe16adaeaac2569518d28e070ce487b2" class="el">pp::Compositor::Compositor</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `Compositor` from a `Resource`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_Compositor</code> resource.</td></tr></tbody></table>

<span id="a43e403e54998200768d198ae95571461" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abe16adaeaac2569518d28e070ce487b2" class="el">pp::Compositor::Compositor</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added on behalf of the caller.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_Compositor</code> resource.</td></tr></tbody></table>

<span id="abf2a4c7ef3a0a727d1b80a5cd2f39729" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#abf2a4c7ef3a0a727d1b80a5cd2f39729" class="el">pp::Compositor::~Compositor</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="adddfb226d04f6169def30afe3639c15d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor_layer/" class="el">CompositorLayer</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#adddfb226d04f6169def30afe3639c15d" class="el">pp::Compositor::AddLayer</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Creates a new `CompositorLayer` and adds it to the end of the layer stack.

A `CompositorLayer` containing the layer is returned. It is uninitialized, `SetColor()`, `SetTexture` or `SetImage` should be used to initialize it. The layer will appear above other pre-existing layers. If `ResetLayers` is called or the `PPB_Compositor` is released, the returned layer will be invalidated, and any further calls on the layer will return `PP_ERROR_BADRESOURCE`.

**Returns:**  
A `CompositorLayer` containing the compositor layer resource.

<span id="ad9171e29e89900cccd7c10cc4654cae1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#ad9171e29e89900cccd7c10cc4654cae1" class="el">pp::Compositor::CommitLayers</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

Commits layers added by `AddLayer()` to the chromium compositor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called when layers have been represented on screen.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="ab699455da240e4a7ed01740b4c05d81f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#ab699455da240e4a7ed01740b4c05d81f" class="el">pp::Compositor::IsCompositor</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Checks whether a `Resource` is a compositor, to test whether it is appropriate for use with the `Compositor` constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
True if `resource` is a compositor.

<span id="a178daa26f7dd593a6905235fa840d54b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_compositor#a178daa26f7dd593a6905235fa840d54b" class="el">pp::Compositor::ResetLayers</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Resets layers added by `AddLayer()`

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/compositor_8h/" class="el">compositor.h</a>
