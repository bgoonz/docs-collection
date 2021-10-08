---json {"title":"pp::ImageData Class Reference"} ---

Inheritance diagram for pp::ImageData:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2ef5c9156701868eede2c839309a04f9" class="el">ImageData</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#ae8a198b71756afbeb745beeadec032f9" class="el">ImageData</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a9943421a80760f3de284ae9d7ce9e431" class="el">ImageData</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a9c2c26e4130e33d9d7ad7c72e32cea1d" class="el">ImageData</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_ImageDataFormat <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a0985d86289358e1f4298c176818b9a91" class="el">format</a>, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp;<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2c5e0060b4227c0c9dd28287bc2e4961" class="el">size</a>, bool init_to_zero)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a35b7e23dbb14817eacca3967dc4ef6b7" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">PP_ImageDataFormat </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a0985d86289358e1f4298c176818b9a91" class="el">format</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2c5e0060b4227c0c9dd28287bc2e4961" class="el">size</a> () const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a3c107aead77cea8ba1adcbc5654078b7" class="el">stride</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void * </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a545dece2d1350ab9ecea5592a665b78c" class="el">data</a> () const</td></tr><tr class="even"><td style="text-align: right;">const uint32_t * </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#af646177d375e11d77eec52e9324fc076" class="el">GetAddr32</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;coord) const</td></tr><tr class="odd"><td style="text-align: right;">uint32_t * </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a8aaf07d11584a06313cf03ca2440bb12" class="el">GetAddr32</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;coord)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a9be445247d64ddaad4b6623021db7232" class="el">IsImageDataFormatSupported</a> (PP_ImageDataFormat <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a0985d86289358e1f4298c176818b9a91" class="el">format</a>)</td></tr><tr class="even"><td style="text-align: right;">static PP_ImageDataFormat </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a4208e7eabf98df7b91c01ed6fcd92425" class="el">GetNativeImageDataFormat</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a2ef5c9156701868eede2c839309a04f9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2ef5c9156701868eede2c839309a04f9" class="el">pp::ImageData::ImageData</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `ImageData` object.

<span id="ae8a198b71756afbeb745beeadec032f9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2ef5c9156701868eede2c839309a04f9" class="el">pp::ImageData::ImageData</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has already been reference counted.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A PP_Resource corresponding to image data.</td></tr></tbody></table>

<span id="a9943421a80760f3de284ae9d7ce9e431" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2ef5c9156701868eede2c839309a04f9" class="el">pp::ImageData::ImageData</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `ImageData`.

This constructor produces an `ImageData` object that shares the underlying `Image` resource with `other`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A pointer to an image data.</td></tr></tbody></table>

<span id="a9c2c26e4130e33d9d7ad7c72e32cea1d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2ef5c9156701868eede2c839309a04f9" class="el">pp::ImageData::ImageData</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_ImageDataFormat </td><td><em>format</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><em>size</em>,</td></tr><tr class="even"><td></td><td></td><td>bool </td><td><em>init_to_zero</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor that allocates a new `ImageData` in the browser with the provided parameters.

The resulting object will be <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> if the allocation failed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>format</td><td>A PP_ImageDataFormat containing desired image format. PP_ImageDataFormat is an enumeration of the different types of image data formats. Refer to <a href="/docs/native-client/pepper_beta/c/ppb__image__data_8h/"><code>ppb_image_data.h</code></a> for further information.</td></tr><tr class="odd"><td>[in]</td><td>size</td><td>A pointer to a <code>Size</code> containing the image size.</td></tr><tr class="even"><td>[in]</td><td>init_to_zero</td><td>A bool used to determine transparency at creation. Set the <code>init_to_zero</code> flag if you want the bitmap initialized to transparent during the creation process. If this flag is not set, the current contents of the bitmap will be undefined, and the module should be sure to set all the pixels.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a545dece2d1350ab9ecea5592a665b78c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void* <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a545dece2d1350ab9ecea5592a665b78c" class="el">pp::ImageData::data</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

A getter function for returning a raw pointer to the image pixels.

**Returns:**  
A raw pointer to the image pixels.

<span id="a0985d86289358e1f4298c176818b9a91" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_ImageDataFormat <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a0985d86289358e1f4298c176818b9a91" class="el">pp::ImageData::format</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

A getter function for returning the current format for images.

**Returns:**  
`PP_ImageDataFormat` containing the preferred format.

<span id="af646177d375e11d77eec52e9324fc076" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const uint32_t* <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#af646177d375e11d77eec52e9324fc076" class="el">pp::ImageData::GetAddr32</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>coord</em></td><td>)</td><td>const</td></tr></tbody></table>

This function is used retrieve the address of the given pixel for 32-bit pixel formats.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>coord</td><td>A <code>Point</code> representing the x and y coordinates for a specific pixel.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The address for the pixel.

<span id="a8aaf07d11584a06313cf03ca2440bb12" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t* <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#af646177d375e11d77eec52e9324fc076" class="el">pp::ImageData::GetAddr32</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>coord</em></td><td>)</td><td></td></tr></tbody></table>

This function is used retrieve the address of the given pixel for 32-bit pixel formats.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>coord</td><td>A <code>Point</code> representing the x and y coordinates for a specific pixel.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The address for the pixel.

<span id="a4208e7eabf98df7b91c01ed6fcd92425" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static PP_ImageDataFormat <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a4208e7eabf98df7b91c01ed6fcd92425" class="el">pp::ImageData::GetNativeImageDataFormat</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a4208e7eabf98df7b91c01ed6fcd92425" class="el" title="GetNativeImageDataFormat() determines the browser&#39;s preferred format for images.">GetNativeImageDataFormat()</a> determines the browser's preferred format for images.

Using this format guarantees no extra conversions will occur when painting.

**Returns:**  
`PP_ImageDataFormat` containing the preferred format.

<span id="a9be445247d64ddaad4b6623021db7232" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a9be445247d64ddaad4b6623021db7232" class="el">pp::ImageData::IsImageDataFormatSupported</a></td><td>(</td><td>PP_ImageDataFormat </td><td><em>format</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a9be445247d64ddaad4b6623021db7232" class="el" title="IsImageDataFormatSupported() returns true if the supplied format is supported by the browser...">IsImageDataFormatSupported()</a> returns `true` if the supplied format is supported by the browser.

Note: `PP_IMAGEDATAFORMAT_BGRA_PREMUL` and `PP_IMAGEDATAFORMAT_RGBA_PREMUL` formats are always supported. Other image formats do not make this guarantee, and should be checked first with <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a9be445247d64ddaad4b6623021db7232" class="el" title="IsImageDataFormatSupported() returns true if the supplied format is supported by the browser...">IsImageDataFormatSupported()</a> before using.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>format</td><td>Image data format.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`true` if the format is supported by the browser.

<span id="a35b7e23dbb14817eacca3967dc4ef6b7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a>&amp; pp::ImageData::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data/" class="el">ImageData</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

This function decrements the reference count of this `ImageData` and increments the reference count of the `other` `ImageData`.

This `ImageData` shares the underlying image resource with `other`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>An other image data.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new image data context.

<span id="a2c5e0060b4227c0c9dd28287bc2e4961" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a2c5e0060b4227c0c9dd28287bc2e4961" class="el">pp::ImageData::size</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

A getter function for returning the image size.

**Returns:**  
The image size in pixels.

<span id="a3c107aead77cea8ba1adcbc5654078b7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_image_data#a3c107aead77cea8ba1adcbc5654078b7" class="el">pp::ImageData::stride</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

A getter function for returning the row width in bytes.

**Returns:**  
The row width in bytes.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/image__data_8h/" class="el">image_data.h</a>