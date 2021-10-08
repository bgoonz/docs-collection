---json {"title":"pp::Graphics3D Class Reference"} ---

Inheritance diagram for pp::Graphics3D:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a36b6d8c818d0af11128d9522dd7f8bc2" class="el">Graphics3D</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a072a5e20977e193d02b2e509ad72d11e" class="el">Graphics3D</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const int32_t attrib_list[])</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a53586ebd53025ff6e1e0c4b89e471f68" class="el">Graphics3D</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d/" class="el">Graphics3D</a> &amp;share_context, const int32_t attrib_list[])</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a134128672575294aeb17c263189b9da0" class="el">~Graphics3D</a> ()</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae4527f4526a090c05ab7d9ce9fafb3de" class="el">GetAttribs</a> (int32_t attrib_list[]) const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a504e04ec5f21e324439fe8edc3622957" class="el">SetAttribs</a> (const int32_t attrib_list[])</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a21b887529bdba99089ff3c1fa16d3d7c" class="el">ResizeBuffers</a> (int32_t width, int32_t height)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el">SwapBuffers</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This class represents a 3D rendering context in the browser.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a36b6d8c818d0af11128d9522dd7f8bc2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a36b6d8c818d0af11128d9522dd7f8bc2" class="el">pp::Graphics3D::Graphics3D</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d/" class="el" title="This class represents a 3D rendering context in the browser.">Graphics3D</a> object.

<span id="a072a5e20977e193d02b2e509ad72d11e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a36b6d8c818d0af11128d9522dd7f8bc2" class="el">pp::Graphics3D::Graphics3D</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const int32_t </td><td><em>attrib_list</em>[] </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor for creating and initializing a 3D rendering context.

The returned context is created off-screen and must be attached to a module instance using `Instance::BindGraphics` to draw on the web page.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>attrib_list</td><td>The list of attributes (name=value pairs) for the context. The list is terminated with <code>PP_GRAPHICS3DATTRIB_NONE</code>. The <code>attrib_list</code> may be <code>NULL</code> or empty (first attribute is <code>PP_GRAPHICS3DATTRIB_NONE</code>). If an attribute is not specified in <code>attrib_list</code>, then the default value is used.</td></tr></tbody></table>

Attributes are classified into two categories:

1. AtLeast: The attribute value in the returned context will meet or exceed the value requested when creating the object. 2. Exact: The attribute value in the returned context is equal to the value requested when creating the object.

AtLeast attributes are (all have default values of 0):

`PP_GRAPHICS3DATTRIB_ALPHA_SIZE` `PP_GRAPHICS3DATTRIB_BLUE_SIZE` `PP_GRAPHICS3DATTRIB_GREEN_SIZE` `PP_GRAPHICS3DATTRIB_RED_SIZE` `PP_GRAPHICS3DATTRIB_DEPTH_SIZE` `PP_GRAPHICS3DATTRIB_STENCIL_SIZE` `PP_GRAPHICS3DATTRIB_SAMPLES` `PP_GRAPHICS3DATTRIB_SAMPLE_BUFFERS`

Exact attributes are:

`PP_GRAPHICS3DATTRIB_WIDTH` Default 0 `PP_GRAPHICS3DATTRIB_HEIGHT` Default 0 `PP_GRAPHICS3DATTRIB_SWAP_BEHAVIOR` Default: Implementation defined.

On failure, the object will be <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

<span id="a53586ebd53025ff6e1e0c4b89e471f68" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a36b6d8c818d0af11128d9522dd7f8bc2" class="el">pp::Graphics3D::Graphics3D</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d/" class="el">Graphics3D</a> &amp; </td><td><em>share_context</em>,</td></tr><tr class="odd"><td></td><td></td><td>const int32_t </td><td><em>attrib_list</em>[] </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor for creating and initializing a 3D rendering context.

The returned context is created off-screen. It must be attached to a module instance using `Instance::BindGraphics` to draw on the web page.

This constructor is identical to the 2-argument version except that this version allows sharing of resources with another context.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance that will own the new <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d/" class="el" title="This class represents a 3D rendering context in the browser.">Graphics3D</a>.</td></tr><tr class="even"><td>[in]</td><td>share_context</td><td>Specifies the context with which all shareable data will be shared. The shareable data is defined by the client API (note that for OpenGL and OpenGL ES, shareable data excludes texture objects named 0). An arbitrary number of <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d/" class="el" title="This class represents a 3D rendering context in the browser.">Graphics3D</a> resources can share data in this fashion.</td></tr><tr class="odd"><td>[in]</td><td>attrib_list</td><td>The list of attributes for the context. See the 2-argument version of this constructor for more information.</td></tr></tbody></table>

On failure, the object will be <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>.

<span id="a134128672575294aeb17c263189b9da0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a134128672575294aeb17c263189b9da0" class="el">pp::Graphics3D::~Graphics3D</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="ae4527f4526a090c05ab7d9ce9fafb3de" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae4527f4526a090c05ab7d9ce9fafb3de" class="el">pp::Graphics3D::GetAttribs</a></td><td>(</td><td>int32_t </td><td><em>attrib_list</em>[]</td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae4527f4526a090c05ab7d9ce9fafb3de" class="el" title="GetAttribs() retrieves the value for each attribute in attrib_list.">GetAttribs()</a> retrieves the value for each attribute in `attrib_list`.

The list has the same structure as described for the constructor. All attribute values specified in `pp_graphics_3d.h` can be retrieved.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in,out]</td><td>attrib_list</td><td>The list of attributes (name=value pairs) for the context. The list is terminated with <code>PP_GRAPHICS3DATTRIB_NONE</code>.</td></tr></tbody></table>

The following error codes may be returned on failure:

PP\_ERROR\_BADRESOURCE if context is invalid. PP\_ERROR\_BADARGUMENT if `attrib_list` is NULL or any attribute in the `attrib_list` is not a valid attribute.

**Example:**

     int attrib_list[] = {PP_GRAPHICS3DATTRIB_RED_SIZE, 0,
                          PP_GRAPHICS3DATTRIB_GREEN_SIZE, 0,
                          PP_GRAPHICS3DATTRIB_BLUE_SIZE, 0,
                          PP_GRAPHICS3DATTRIB_NONE};
     GetAttribs(context, attrib_list);
     int red_bits = attrib_list[1];
     int green_bits = attrib_list[3];
     int blue_bits = attrib_list[5];

This example retrieves the values for rgb bits in the color buffer.

<span id="a21b887529bdba99089ff3c1fa16d3d7c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a21b887529bdba99089ff3c1fa16d3d7c" class="el">pp::Graphics3D::ResizeBuffers</a></td><td>(</td><td>int32_t </td><td><em>width</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>height</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a21b887529bdba99089ff3c1fa16d3d7c" class="el" title="ResizeBuffers() resizes the backing surface for the context.">ResizeBuffers()</a> resizes the backing surface for the context.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>width</td><td>The width of the backing surface.</td></tr><tr class="even"><td>[in]</td><td>height</td><td>The height of the backing surface.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing `PP_ERROR_BADRESOURCE` if context is invalid or `PP_ERROR_BADARGUMENT` if the value specified for width or height is less than zero. `PP_ERROR_NOMEMORY` might be returned on the next <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> callback if the surface could not be resized due to insufficient resources.

<span id="a504e04ec5f21e324439fe8edc3622957" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a504e04ec5f21e324439fe8edc3622957" class="el">pp::Graphics3D::SetAttribs</a></td><td>(</td><td>const int32_t </td><td><em>attrib_list</em>[]</td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#a504e04ec5f21e324439fe8edc3622957" class="el" title="SetAttribs() sets the values for each attribute in attrib_list.">SetAttribs()</a> sets the values for each attribute in `attrib_list`.

The list has the same structure as the list used in the constructors.

Attributes that can be specified are:

-   PP\_GRAPHICS3DATTRIB\_SWAP\_BEHAVIOR

On failure the following error codes may be returned:

-   PP\_ERROR\_BADRESOURCE if context is invalid.
-   PP\_ERROR\_BADARGUMENT if attrib\_list is NULL or any attribute in the attrib\_list is not a valid attribute.

<span id="ae1d1c071bf2737ab310a32558ec5f507" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el">pp::Graphics3D::SwapBuffers</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> makes the contents of the color buffer available for compositing.

This function has no effect on off-screen surfaces: surfaces not bound to any module instance. The contents of ancillary buffers are always undefined after calling <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a>. The contents of the color buffer are undefined if the value of the `PP_GRAPHICS3DATTRIB_SWAP_BEHAVIOR` attribute of context is not `PP_GRAPHICS3DATTRIB_BUFFER_PRESERVED`.

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> runs in asynchronous mode. Specify a callback function and the argument for that callback function. The callback function will be executed on the calling thread after the color buffer has been composited with rest of the html page. While you are waiting for a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> callback, additional calls to <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> will fail.

Because the callback is executed (or thread unblocked) only when the instance's current state is actually on the screen, this function provides a way to rate limit animations. By waiting until the image is on the screen before painting the next frame, you can ensure you're not generating updates faster than the screen can be updated.

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a> performs an implicit flush operation on context. If the context gets into an unrecoverable error condition while processing a command, the error code will be returned as the argument for the callback. The callback may return the following error codes:

`PP_ERROR_NOMEMORY` `PP_ERROR_CONTEXT_LOST`

Note that the same error code may also be obtained by calling GetError().

param\[in\] cc A `CompletionCallback` to be called upon completion of <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_graphics3_d#ae1d1c071bf2737ab310a32558ec5f507" class="el" title="SwapBuffers() makes the contents of the color buffer available for compositing.">SwapBuffers()</a>.

**Returns:**  
An int32\_t containing `PP_ERROR_BADRESOURCE` if context is invalid or `PP_ERROR_BADARGUMENT` if callback is invalid.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/graphics__3d_8h/" class="el">graphics_3d.h</a>
