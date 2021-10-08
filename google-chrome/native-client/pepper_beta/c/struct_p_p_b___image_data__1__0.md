---json {"title":"PPB\_ImageData Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#adba78e8f9e623809b6b23419dbce4d65" class="el">GetNativeImageDataFormat</a> )(void)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a451a583a5caa74bdc735e324de282b82" class="el">IsImageDataFormatSupported</a> )(<a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a> format)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#ab7146e66c91e651259ef9d81bcee7776" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a> format, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> init_to_zero)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a1e208943ea241fc4050d0190a0e92492" class="el">IsImageData</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a0598a298c53b777d9909f80c70987629" class="el">Describe</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc/" class="el">PP_ImageDataDesc</a> *desc)</td></tr><tr class="even"><td style="text-align: right;">void *(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a2e7d4b40b88c0680b263db05745055e9" class="el">Map</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#ab0fc702469c51be79b2f8b74d9148c81" class="el">Unmap</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_ImageData` interface contains pointers to several functions for determining the browser's treatment of image data.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ab7146e66c91e651259ef9d81bcee7776" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#ab7146e66c91e651259ef9d81bcee7776" class="el">PPB_ImageData::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a> format, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> init_to_zero)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#ab7146e66c91e651259ef9d81bcee7776" class="el" title="Create() allocates an image data resource with the given format and size.">Create()</a> allocates an image data resource with the given format and size.

For security reasons, if uninitialized, the bitmap will not contain random memory, but may contain data from a previous image produced by the same module if the bitmap was cached and re-used.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>format</td><td>The desired image data format.</td></tr><tr class="odd"><td>[in]</td><td>size</td><td>A pointer to a <code>PP_Size</code> containing the image size.</td></tr><tr class="even"><td>[in]</td><td>init_to_zero</td><td>A <code>PP_Bool</code> to determine transparency at creation. Set the <code>init_to_zero</code> flag if you want the bitmap initialized to transparent during the creation process. If this flag is not set, the current contents of the bitmap will be undefined, and the module should be sure to set all the pixels.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` with a nonzero ID on success or zero on failure. Failure means the instance, image size, or format was invalid.

<span id="a0598a298c53b777d9909f80c70987629" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a0598a298c53b777d9909f80c70987629" class="el">PPB_ImageData::Describe</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc/" class="el">PP_ImageDataDesc</a> *desc)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a0598a298c53b777d9909f80c70987629" class="el" title="Describe() computes the description of the image data.">Describe()</a> computes the description of the image data.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image_data</td><td>A <code>PP_Resource</code> corresponding to image data.</td></tr><tr class="even"><td>[in,out]</td><td>desc</td><td>A pointer to a <code>PP_ImageDataDesc</code> containing the description.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` on success or `PP_FALSE` if the resource is not an image data. On `PP_FALSE`, the `desc` structure will be filled with 0.

<span id="adba78e8f9e623809b6b23419dbce4d65" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#adba78e8f9e623809b6b23419dbce4d65" class="el">PPB_ImageData::GetNativeImageDataFormat</a>)(void)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#adba78e8f9e623809b6b23419dbce4d65" class="el" title="GetNativeImageDataFormat() returns the browser&#39;s preferred format for image data.">GetNativeImageDataFormat()</a> returns the browser's preferred format for image data.

The browser uses this format internally for painting. Other formats may require internal conversions to paint or may have additional restrictions depending on the function.

**Returns:**  
A `PP_ImageDataFormat` containing the preferred format.

<span id="a1e208943ea241fc4050d0190a0e92492" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a1e208943ea241fc4050d0190a0e92492" class="el">PPB_ImageData::IsImageData</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a1e208943ea241fc4050d0190a0e92492" class="el" title="IsImageData() determines if a given resource is image data.">IsImageData()</a> determines if a given resource is image data.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image_data</td><td>A <code>PP_Resource</code> corresponding to image data.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is an image data or `PP_FALSE` if the resource is invalid or some type other than image data.

<span id="a451a583a5caa74bdc735e324de282b82" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a451a583a5caa74bdc735e324de282b82" class="el">PPB_ImageData::IsImageDataFormatSupported</a>)(<a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a> format)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a451a583a5caa74bdc735e324de282b82" class="el" title="IsImageDataFormatSupported() determines if the given image data format is supported by the browser...">IsImageDataFormatSupported()</a> determines if the given image data format is supported by the browser.

Note: `PP_IMAGEDATAFORMAT_BGRA_PREMUL` and `PP_IMAGEDATAFORMAT_RGBA_PREMUL` formats are always supported. Other image formats do not make this guarantee, and should be checked first with <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a451a583a5caa74bdc735e324de282b82" class="el" title="IsImageDataFormatSupported() determines if the given image data format is supported by the browser...">IsImageDataFormatSupported()</a> before using.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>format</td><td>The image data format.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given image data format is supported by the browser.

<span id="a2e7d4b40b88c0680b263db05745055e9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void*(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a2e7d4b40b88c0680b263db05745055e9" class="el">PPB_ImageData::Map</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#a2e7d4b40b88c0680b263db05745055e9" class="el" title="Map() maps an image data into the module address space.">Map()</a> maps an image data into the module address space.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image_data</td><td>A <code>PP_Resource</code> corresponding to image data.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A pointer to the beginning of the data.

<span id="ab0fc702469c51be79b2f8b74d9148c81" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___image_data__1__0#ab0fc702469c51be79b2f8b74d9148c81" class="el">PPB_ImageData::Unmap</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> image_data)</td></tr></tbody></table>

Unmap is a pointer to a function that unmaps an image data from the module address space.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>image_data</td><td>A <code>PP_Resource</code> corresponding to image data.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__image__data_8h/" class="el">ppb_image_data.h</a>
