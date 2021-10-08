—json {“title”:“PPB\_VideoFrame Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a4b1d739620b38f0c02eb93f5e3ab95f2" class="el">IsVideoFrame</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#ac489deabb1c82426ad1d58be078cfb26" class="el">GetTimestamp</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a01d82a532ca1f1158b82862cb94c586d" class="el">SetTimestamp</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> timestamp)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4e7cf746d8acbfa268db1f5ebe8061bf" class="el">PP_VideoFrame_Format</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a62323240cc59ea9fd8725a44c69b17c6" class="el">GetFormat</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a6ddf0fe2f254810d969eda729db095d9" class="el">GetSize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size)</td></tr><tr class="even"><td style="text-align: right;">void <em>(</em> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a01acb2d82746ce41c37d69a74c055ce0" class="el">GetDataBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a29e5e9e9bb2abc0563b1e9ecbc4c880c" class="el">GetDataBufferSize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a01acb2d82746ce41c37d69a74c055ce0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void<em>(</em> <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a01acb2d82746ce41c37d69a74c055ce0" class="el">PPB_VideoFrame::GetDataBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

Gets the data buffer for video frame pixels.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a video frame resource.</td></tr></tbody></table>

**Returns:**  
A pointer to the beginning of the data buffer.

<span id="a29e5e9e9bb2abc0563b1e9ecbc4c880c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a29e5e9e9bb2abc0563b1e9ecbc4c880c" class="el">PPB_VideoFrame::GetDataBufferSize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

Gets the size of data buffer.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a video frame resource.</td></tr></tbody></table>

**Returns:**  
The size of the data buffer.

<span id="a62323240cc59ea9fd8725a44c69b17c6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4e7cf746d8acbfa268db1f5ebe8061bf" class="el">PP_VideoFrame_Format</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a62323240cc59ea9fd8725a44c69b17c6" class="el">PPB_VideoFrame::GetFormat</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

Gets the format of the video frame.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a video frame resource.</td></tr></tbody></table>

**Returns:**  
A `PP_VideoFrame_Format` containing the format of the video frame.

<span id="a6ddf0fe2f254810d969eda729db095d9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a6ddf0fe2f254810d969eda729db095d9" class="el">PPB_VideoFrame::GetSize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *size)</td></tr></tbody></table>

Gets the size of the video frame.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a video frame resource.</td></tr><tr class="even"><td>[out]</td><td>size</td><td>A <code>PP_Size</code>.</td></tr></tbody></table>

**Returns:**  
A `PP_Bool` with `PP_TRUE` on success or `PP_FALSE` on failure.

<span id="ac489deabb1c82426ad1d58be078cfb26" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#ac489deabb1c82426ad1d58be078cfb26" class="el">PPB_VideoFrame::GetTimestamp</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

Gets the timestamp of the video frame.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a video frame resource.</td></tr></tbody></table>

**Returns:**  
A `PP_TimeDelta` containing the timestamp of the video frame. Given in seconds since the start of the containing video stream.

<span id="a4b1d739620b38f0c02eb93f5e3ab95f2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a4b1d739620b38f0c02eb93f5e3ab95f2" class="el">PPB_VideoFrame::IsVideoFrame</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a resource is a VideoFrame resource.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The <code>PP_Resource</code> to test.</td></tr></tbody></table>

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is a VideoFrame resource or `PP_FALSE` otherwise.

<span id="a01d82a532ca1f1158b82862cb94c586d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_frame__0__1#a01d82a532ca1f1158b82862cb94c586d" class="el">PPB_VideoFrame::SetTimestamp</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> timestamp)</td></tr></tbody></table>

Sets the timestamp of the video frame.

Given in seconds since the start of the containing video stream.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a video frame resource.</td></tr><tr class="even"><td>[in]</td><td>timestamp</td><td>A <code>PP_TimeDelta</code> containing the timestamp of the video frame. Given in seconds since the start of the containing video stream.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__video__frame_8h/" class="el">ppb_video_frame.h</a>
