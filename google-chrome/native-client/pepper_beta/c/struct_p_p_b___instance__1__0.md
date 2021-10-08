---json {"title":"PPB\_Instance Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___instance__1__0#ae5b0da2fc0975c82213f687d96434625" class="el">BindGraphics</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> device)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___instance__1__0#a1a7dc39b5aa46596c91299047c6ab8b2" class="el">IsFullFrame</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The PPB\_Instance interface contains pointers to functions related to the module instance on a web page.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ae5b0da2fc0975c82213f687d96434625" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___instance__1__0#ae5b0da2fc0975c82213f687d96434625" class="el">PPB_Instance::BindGraphics</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> device)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___instance__1__0#ae5b0da2fc0975c82213f687d96434625" class="el" title="BindGraphics() binds the given graphics as the current display surface.">BindGraphics()</a> binds the given graphics as the current display surface.

The contents of this device is what will be displayed in the instance's area on the web page. The device must be a 2D or a 3D device.

You can pass a `NULL` resource as the device parameter to unbind all devices from the given instance. The instance will then appear transparent. Re-binding the same device will return `PP_TRUE` and will do nothing.

Any previously-bound device will be released. It is an error to bind a device when it is already bound to another instance. If you want to move a device between instances, first unbind it from the old one, and then rebind it to the new one.

Binding a device will invalidate that portion of the web page to flush the contents of the new device to the screen.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A PP_Instance identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>device</td><td>A PP_Resource corresponding to a graphics device.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_Bool` containing `PP_TRUE` if bind was successful or `PP_FALSE` if the device was not the correct type. On success, a reference to the device will be held by the instance, so the caller can release its reference if it chooses.

<span id="a1a7dc39b5aa46596c91299047c6ab8b2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___instance__1__0#a1a7dc39b5aa46596c91299047c6ab8b2" class="el">PPB_Instance::IsFullFrame</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___instance__1__0#a1a7dc39b5aa46596c91299047c6ab8b2" class="el" title="IsFullFrame() determines if the instance is full-frame.">IsFullFrame()</a> determines if the instance is full-frame.

Such an instance represents the entire document in a frame rather than an embedded resource. This can happen if the user does a top-level navigation or the page specifies an iframe to a resource with a MIME type registered by the module.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` containing `PP_TRUE` if the instance is full-frame.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__instance_8h/" class="el">ppb_instance.h</a>
