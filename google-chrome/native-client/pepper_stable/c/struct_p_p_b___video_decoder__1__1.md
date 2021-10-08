---json {"title":"PPB\_VideoDecoder Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab84df8254cf35702e09425b835b5958f" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#aa32bb990160f3e1fbfa90a2f363c61bc" class="el">IsVideoDecoder</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a65fc7d77135a1c55eb77ad4f7fd1a8a8" class="el">Initialize</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics3d_context, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> profile, <a href="/docs/native-client/pepper_stable/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> acceleration, uint32_t min_picture_count, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el">Decode</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, uint32_t decode_id, uint32_t size, const void *buffer, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el">GetPicture</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___video_picture/" class="el">PP_VideoPicture</a> *picture, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab0b4f4b781cf6c0b347832961a08b6bb" class="el">RecyclePicture</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___video_picture/" class="el">PP_VideoPicture</a> *picture)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a40e2989df1005096fd6fc9832e078413" class="el">Flush</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el">Reset</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Video decoder interface.

Typical usage:

-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab84df8254cf35702e09425b835b5958f" class="el" title="Creates a new video decoder resource.">Create()</a> to create a new video decoder resource.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a65fc7d77135a1c55eb77ad4f7fd1a8a8" class="el" title="Initializes a video decoder resource.">Initialize()</a> to initialize it with a 3d graphics context and the desired codec profile.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> continuously (waiting for each previous call to complete) to push bitstream buffers to the decoder.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> continuously (waiting for each previous call to complete) to pull decoded pictures from the decoder.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a40e2989df1005096fd6fc9832e078413" class="el" title="Flushes the decoder.">Flush()</a> to signal end of stream to the decoder and perform shutdown when it completes.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> to quickly stop the decoder (e.g. to implement Seek) and wait for the callback before restarting decoding at another point.
-   To destroy the decoder, the plugin should release all of its references to it. Any pending callbacks will abort before the decoder is destroyed.

Available video codecs vary by platform. All: theora, vorbis, vp8. Chrome and ChromeOS: aac, h264. ChromeOS: mpeg4.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ab84df8254cf35702e09425b835b5958f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab84df8254cf35702e09425b835b5958f" class="el">PPB_VideoDecoder::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a new video decoder resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the video decoder.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a video decoder if successful or 0 otherwise.

<span id="a5f87d174876dc480029275f94e4669cd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el">PPB_VideoDecoder::Decode</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, uint32_t decode_id, uint32_t size, const void *buffer, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Decodes a bitstream buffer.

Copies |size| bytes of data from the plugin's |buffer|. The plugin should wait until the decoder signals completion by returning PP\_OK or by running |callback| before calling <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> again.

In general, each bitstream buffer should contain a demuxed bitstream frame for the selected video codec. For example, H264 decoders expect to receive one AnnexB NAL unit, including the 4 byte start code prefix, while VP8 decoders expect to receive a bitstream frame without the IVF frame header.

If the call to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> eventually results in a picture, the |decode\_id| parameter is copied into the returned picture. The plugin can use this to associate decoded pictures with <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> calls (e.g. to assign timestamps or frame numbers to pictures.) This value is opaque to the API so the plugin is free to pass any value.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_decoder</td><td>A <code>PP_Resource</code> identifying the video decoder.</td></tr><tr class="even"><td>[in]</td><td>decode_id</td><td>An optional value, chosen by the plugin, that can be used to associate calls to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> with decoded pictures returned by <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a>.</td></tr><tr class="odd"><td>[in]</td><td>size</td><td>Buffer size in bytes.</td></tr><tr class="even"><td>[in]</td><td>buffer</td><td>Starting address of buffer.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn't initialized or if a <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a40e2989df1005096fd6fc9832e078413" class="el" title="Flushes the decoder.">Flush()</a> or <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> call is pending. Returns PP\_ERROR\_INPROGRESS if there is another <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> call pending. Returns PP\_ERROR\_NOMEMORY if a bitstream buffer can't be created. Returns PP\_ERROR\_ABORTED when <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> is called while <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> is pending.

<span id="a40e2989df1005096fd6fc9832e078413" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a40e2989df1005096fd6fc9832e078413" class="el">PPB_VideoDecoder::Flush</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Flushes the decoder.

The plugin should call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a40e2989df1005096fd6fc9832e078413" class="el" title="Flushes the decoder.">Flush()</a> when it reaches the end of its video stream in order to stop cleanly. The decoder will run any pending <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> call to completion. The plugin should make no further calls to the decoder other than <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> and <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab0b4f4b781cf6c0b347832961a08b6bb" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a> until the decoder signals completion by running |callback|. Just before completion, any pending <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> call will complete by running its callback with result PP\_ERROR\_ABORTED to signal that no more pictures are available. Any pictures held by the plugin remain valid during and after the flush and should be recycled back to the decoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_decoder</td><td>A <code>PP_Resource</code> identifying the video decoder.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn't initialized.

<span id="adc8b4eb41199cdf96aaa55d9a2df0b6c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el">PPB_VideoDecoder::GetPicture</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___video_picture/" class="el">PP_VideoPicture</a> *picture, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets the next picture from the decoder.

The picture is valid after the decoder signals completion by returning PP\_OK or running |callback|. The plugin can call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> again after the decoder signals completion. When the plugin is finished using the picture, it should return it to the system by calling <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab0b4f4b781cf6c0b347832961a08b6bb" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_decoder</td><td>A <code>PP_Resource</code> identifying the video decoder.</td></tr><tr class="even"><td>[out]</td><td>picture</td><td>A <code>PP_VideoPicture</code> to hold the decoded picture.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn't initialized or if a <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> call is pending. Returns PP\_ERROR\_INPROGRESS if there is another <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> call pending. Returns PP\_ERROR\_ABORTED when <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> is called, or if a call to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a40e2989df1005096fd6fc9832e078413" class="el" title="Flushes the decoder.">Flush()</a> completes while <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> is pending.

<span id="a65fc7d77135a1c55eb77ad4f7fd1a8a8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a65fc7d77135a1c55eb77ad4f7fd1a8a8" class="el">PPB_VideoDecoder::Initialize</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> graphics3d_context, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> profile, <a href="/docs/native-client/pepper_stable/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> acceleration, uint32_t min_picture_count, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Initializes a video decoder resource.

This should be called after <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab84df8254cf35702e09425b835b5958f" class="el" title="Creates a new video decoder resource.">Create()</a> and before any other functions.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_decoder</td><td>A <code>PP_Resource</code> identifying the video decoder.</td></tr><tr class="even"><td>[in]</td><td>graphics3d_context</td><td>A <code>PPB_Graphics3D</code> resource to use during decoding.</td></tr><tr class="odd"><td>[in]</td><td>profile</td><td>A <code>PP_VideoProfile</code> specifying the video codec profile.</td></tr><tr class="even"><td>[in]</td><td>acceleration</td><td>A <code>PP_HardwareAcceleration</code> specifying whether to use a hardware accelerated or a software implementation.</td></tr><tr class="odd"><td>[in]</td><td>min_picture_count</td><td>A count of pictures the plugin would like to have in flight. This is effectively the number of times the plugin can call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> and get a decoded frame without calling <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab0b4f4b781cf6c0b347832961a08b6bb" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a>. The decoder has its own internal minimum count, and will take the larger of its internal and this value. A client that doesn't care can therefore just pass in zero for this argument.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_NOTSUPPORTED if video decoding is not available, or the requested profile is not supported. In this case, the client may call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a65fc7d77135a1c55eb77ad4f7fd1a8a8" class="el" title="Initializes a video decoder resource.">Initialize()</a> again with different parameters to find a good configuration. Returns PP\_ERROR\_BADARGUMENT if the requested minimum picture count is unreasonably large.

<span id="aa32bb990160f3e1fbfa90a2f363c61bc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#aa32bb990160f3e1fbfa90a2f363c61bc" class="el">PPB_VideoDecoder::IsVideoDecoder</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if the given resource is a video decoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> identifying a resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `PPB_VideoDecoder`, `PP_FALSE` if the resource is invalid or some other type.

<span id="ab0b4f4b781cf6c0b347832961a08b6bb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab0b4f4b781cf6c0b347832961a08b6bb" class="el">PPB_VideoDecoder::RecyclePicture</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, const struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___video_picture/" class="el">PP_VideoPicture</a> *picture)</td></tr></tbody></table>

Recycles a picture that the plugin has received from the decoder.

The plugin should call this as soon as it has finished using the texture so the decoder can decode more pictures.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_decoder</td><td>A <code>PP_Resource</code> identifying the video decoder.</td></tr><tr class="even"><td>[in]</td><td>picture</td><td>A <code>PP_VideoPicture</code> to return to the decoder.</td></tr></tbody></table>

<span id="ad8151e35df062e82434fb1d6e0629fd0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el">PPB_VideoDecoder::Reset</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_decoder, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Resets the decoder as quickly as possible.

The plugin can call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> to skip to another position in the video stream. After <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ad8151e35df062e82434fb1d6e0629fd0" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> returns, any pending calls to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#a5f87d174876dc480029275f94e4669cd" class="el" title="Decodes a bitstream buffer.">Decode()</a> and <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#adc8b4eb41199cdf96aaa55d9a2df0b6c" class="el" title="Gets the next picture from the decoder.">GetPicture()</a>) abort, causing their callbacks to run with PP\_ERROR\_ABORTED. The plugin should not make further calls to the decoder other than <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___video_decoder__1__1#ab0b4f4b781cf6c0b347832961a08b6bb" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a> until the decoder signals completion by running |callback|. Any pictures held by the plugin remain valid during and after the reset and should be recycled back to the decoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_decoder</td><td>A <code>PP_Resource</code> identifying the video decoder.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn't initialized.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__video__decoder_8h/" class="el">ppb_video_decoder.h</a>
