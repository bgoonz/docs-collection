—json {“title”:“PPB\_VideoEncoder Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a94d87da92ccfb984cef497977d00d80c" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9006f1c2d0d3fe9a71bb2343e22e679a" class="el">IsVideoEncoder</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#abe007473d19c6c82555799c0ecff0cc7" class="el">GetSupportedProfiles</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el">Initialize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4e7cf746d8acbfa268db1f5ebe8061bf" class="el">PP_VideoFrame_Format</a> input_format, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *input_visible_size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> output_profile, uint32_t initial_bitrate, <a href="/docs/native-client/pepper_beta/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> acceleration, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a468e94294b704c002a6532687bb53ed0" class="el">GetFramesRequired</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#adbd41c5b25729bbfb1ad90124d9e9528" class="el">GetFrameCodedSize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *coded_size)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a64a5b77b1130f13184b797828a49587a" class="el">GetVideoFrame</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *video_frame, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a873344d65a32d15426cd4424e76bb6d9" class="el">Encode</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_frame, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> force_keyframe, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a8b2b489462a35bdc6300bcf1fdadabe4" class="el">GetBitstreamBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___bitstream_buffer/" class="el">PP_BitstreamBuffer</a> *bitstream_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a072f3199019aa262fbdf42412678220a" class="el">RecycleBitstreamBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___bitstream_buffer/" class="el">PP_BitstreamBuffer</a> *bitstream_buffer)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#aa1a3fa20e5d8c56e420d169af6f02845" class="el">RequestEncodingParametersChange</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, uint32_t bitrate, uint32_t framerate)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#afe91b697d39e41ca9c4b187e1f66749f" class="el">Close</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Video encoder interface.

Typical usage:

-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a94d87da92ccfb984cef497977d00d80c" class="el" title="Creates a new video encoder resource.">Create()</a> to create a new video encoder resource.
-   Call GetSupportedFormats() to determine which codecs and profiles are available.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> to initialize the encoder for a supported profile.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a64a5b77b1130f13184b797828a49587a" class="el" title="Gets a blank video frame which can be filled with video data and passed to the encoder.">GetVideoFrame()</a> to get a blank frame and fill it in, or get a video frame from another resource, e.g. `PPB_MediaStreamVideoTrack`.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a873344d65a32d15426cd4424e76bb6d9" class="el" title="Encodes a video frame.">Encode()</a> to push the video frame to the encoder. If an external frame is pushed, wait for completion to recycle the frame.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a8b2b489462a35bdc6300bcf1fdadabe4" class="el" title="Gets the next encoded bitstream buffer from the encoder.">GetBitstreamBuffer()</a> continuously (waiting for each previous call to complete) to pull encoded pictures from the encoder.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a072f3199019aa262fbdf42412678220a" class="el" title="Recycles a bitstream buffer back to the encoder.">RecycleBitstreamBuffer()</a> after consuming the data in the bitstream buffer.
-   To destroy the encoder, the plugin should release all of its references to it. Any pending callbacks will abort before the encoder is destroyed.

Available video codecs vary by platform. All: vp8 (software). ChromeOS, depending on your device: h264 (hardware), vp8 (hardware)

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="afe91b697d39e41ca9c4b187e1f66749f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#afe91b697d39e41ca9c4b187e1f66749f" class="el">PPB_VideoEncoder::Close</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder)</td></tr></tbody></table>

Closes the video encoder, and cancels any pending encodes.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` . It is not valid to call any encoder functions after a call to this method. **Note:** Destroying the video encoder closes it implicitly, so you are not required to call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#afe91b697d39e41ca9c4b187e1f66749f" class="el" title="Closes the video encoder, and cancels any pending encodes.">Close()</a>.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr></tbody></table>

<span id="a94d87da92ccfb984cef497977d00d80c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a94d87da92ccfb984cef497977d00d80c" class="el">PPB_VideoEncoder::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a new video encoder resource.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the video encoder.</td></tr></tbody></table>

**Returns:**  
A `PP_Resource` corresponding to a video encoder if successful or 0 otherwise.

<span id="a873344d65a32d15426cd4424e76bb6d9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a873344d65a32d15426cd4424e76bb6d9" class="el">PPB_VideoEncoder::Encode</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_frame, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> force_keyframe, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Encodes a video frame.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[in]</td><td>video_frame</td><td>The <code>PPB_VideoFrame</code> to be encoded.</td></tr><tr class="odd"><td>[in]</td><td>force_keyframe</td><td>A <code>PP_Bool&gt; specifying whether the encoder should emit a key frame for this video frame. </code></td></tr><tr class="even"><td>[in]</td><td>callback</td><td><code>A </code><code>PP_CompletionCallback</code> to be called upon completion. Plugins that pass <code>PPB_VideoFrame</code> resources owned by other resources should wait for completion before reusing them.</td></tr></tbody></table>

**Returns:**  
``` An int32_t containing an error code from ``pp_errors.h ```. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="a8b2b489462a35bdc6300bcf1fdadabe4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a8b2b489462a35bdc6300bcf1fdadabe4" class="el">PPB_VideoEncoder::GetBitstreamBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___bitstream_buffer/" class="el">PP_BitstreamBuffer</a> *bitstream_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets the next encoded bitstream buffer from the encoder.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[out]</td><td>bitstream_buffer</td><td>A <code>PP_BitstreamBuffer</code> containing encoded video data.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion. The plugin can call GetBitstreamBuffer from the callback in order to continuously “pull” bitstream buffers from the encoder.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed. Returns PP\_ERROR\_INPROGRESS if a prior call to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a8b2b489462a35bdc6300bcf1fdadabe4" class="el" title="Gets the next encoded bitstream buffer from the encoder.">GetBitstreamBuffer()</a> has not completed.

<span id="adbd41c5b25729bbfb1ad90124d9e9528" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#adbd41c5b25729bbfb1ad90124d9e9528" class="el">PPB_VideoEncoder::GetFrameCodedSize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *coded_size)</td></tr></tbody></table>

Gets the coded size of the video frames required by the encoder.

Coded size is the logical size of the input frames, in pixels. The encoder may have hardware alignment requirements that make this different from |input\_visible\_size|, as requested in the call to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a>.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[in]</td><td>coded_size</td><td>A <code>PP_Size</code> to hold the coded size.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="a468e94294b704c002a6532687bb53ed0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a468e94294b704c002a6532687bb53ed0" class="el">PPB_VideoEncoder::GetFramesRequired</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder)</td></tr></tbody></table>

Gets the number of input video frames that the encoder may hold while encoding.

If the plugin is providing the video frames, it should have at least this many available.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing the number of frames required, or an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="abe007473d19c6c82555799c0ecff0cc7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#abe007473d19c6c82555799c0ecff0cc7" class="el">PPB_VideoEncoder::GetSupportedProfiles</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets an array of supported video encoder profiles.

These can be used to choose a profile before calling <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a>.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[in]</td><td>output</td><td>A <code>PP_ArrayOutput</code> to receive the supported <code>PP_VideoProfileDescription</code> structs.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
If &gt;= 0, the number of supported profiles returned, otherwise an error code from `pp_errors.h`.

<span id="a64a5b77b1130f13184b797828a49587a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a64a5b77b1130f13184b797828a49587a" class="el">PPB_VideoEncoder::GetVideoFrame</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *video_frame, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets a blank video frame which can be filled with video data and passed to the encoder.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[out]</td><td>video_frame</td><td>A blank <code>PPB_VideoFrame</code> resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="a9cd78deaf493477ca7ec96a6e6445561" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el">PPB_VideoEncoder::Initialize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4e7cf746d8acbfa268db1f5ebe8061bf" class="el">PP_VideoFrame_Format</a> input_format, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> *input_visible_size, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> output_profile, uint32_t initial_bitrate, <a href="/docs/native-client/pepper_beta/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> acceleration, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Initializes a video encoder resource.

The plugin should call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9cd78deaf493477ca7ec96a6e6445561" class="el" title="Initializes a video encoder resource.">Initialize()</a> successfully before calling any of the functions below.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[in]</td><td>input_format</td><td>The <code>PP_VideoFrame_Format</code> of the frames which will be encoded.</td></tr><tr class="odd"><td>[in]</td><td>input_visible_size</td><td>A <code>PP_Size</code> specifying the dimensions of the visible part of the input frames.</td></tr><tr class="even"><td>[in]</td><td>output_profile</td><td>A <code>PP_VideoProfile</code> specifying the codec profile of the encoded output stream.</td></tr><tr class="odd"><td>[in]</td><td>acceleration</td><td>A <code>PP_HardwareAcceleration</code> specifying whether to use a hardware accelerated or a software implementation.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_NOTSUPPORTED if video encoding is not available, or the requested codec profile is not supported.

<span id="a9006f1c2d0d3fe9a71bb2343e22e679a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a9006f1c2d0d3fe9a71bb2343e22e679a" class="el">PPB_VideoEncoder::IsVideoEncoder</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if the given resource is a video encoder.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> identifying a resource.</td></tr></tbody></table>

**Returns:**  
`PP_TRUE` if the resource is a `PPB_VideoEncoder`, `PP_FALSE` if the resource is invalid or some other type.

<span id="a072f3199019aa262fbdf42412678220a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#a072f3199019aa262fbdf42412678220a" class="el">PPB_VideoEncoder::RecycleBitstreamBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___bitstream_buffer/" class="el">PP_BitstreamBuffer</a> *bitstream_buffer)</td></tr></tbody></table>

Recycles a bitstream buffer back to the encoder.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[in]</td><td>bitstream_buffer</td><td>A <code>PP_BitstreamBuffer</code> that is no longer needed by the plugin.</td></tr></tbody></table>

<span id="aa1a3fa20e5d8c56e420d169af6f02845" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___video_encoder__0__2#aa1a3fa20e5d8c56e420d169af6f02845" class="el">PPB_VideoEncoder::RequestEncodingParametersChange</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_encoder, uint32_t bitrate, uint32_t framerate)</td></tr></tbody></table>

Requests a change to encoding parameters.

This is only a request, fulfilled on a best-effort basis.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>video_encoder</td><td>A <code>PP_Resource</code> identifying the video encoder.</td></tr><tr class="even"><td>[in]</td><td>bitrate</td><td>The requested new bitrate, in bits per second.</td></tr><tr class="odd"><td>[in]</td><td>framerate</td><td>The requested new framerate, in frames per second.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__video__encoder_8h/" class="el">ppb_video_encoder.h</a>
