---json {"title":"PPB\_MediaStreamVideoTrack Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#ae8c4dcff35a89de06875295ce6791f52" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a145d621225b6d7e1501d862823c94380" class="el">IsMediaStreamVideoTrack</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a511bd529cecdee0573bd27d49bc97229" class="el">Configure</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, const int32_t attrib_list[], struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a512c61d2da03d815abfc3d5eff3fb152" class="el">GetAttrib</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___enums#ga49cd0a65c15c8a91959310699afc36b7" class="el">PP_MediaStreamVideoTrack_Attrib</a> attrib, int32_t *value)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a5ea1040a0248265660173d334009ea4e" class="el">GetId</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a1b5e00cfe17f935bedefc9fc32f43bdd" class="el">HasEnded</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a81a2f469f7311aaf784bfa8cb57e5a1a" class="el">GetFrame</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *frame, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a5f37a68d85311c2ae4ef229b411bb718" class="el">RecycleFrame</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a8d76657c5d43a1ad785f2069c68bc70b" class="el">Close</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a3d5241dc22fa9cc03b96fb8f2e3c976e" class="el">GetEmptyFrame</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *frame, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#ab3bbbc3074a6198d696521351608313f" class="el">PutFrame</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a8d76657c5d43a1ad785f2069c68bc70b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a8d76657c5d43a1ad785f2069c68bc70b" class="el">PPB_MediaStreamVideoTrack::Close</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track)</td></tr></tbody></table>

Closes the MediaStream video track and disconnects it from video source.

After calling `Close()`, no new frames will be received.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>A <code>PP_Resource</code> corresponding to a MediaStream video track resource.</td></tr></tbody></table>

<span id="a511bd529cecdee0573bd27d49bc97229" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a511bd529cecdee0573bd27d49bc97229" class="el">PPB_MediaStreamVideoTrack::Configure</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, const int32_t attrib_list[], struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Configures underlying frame buffers for incoming frames.

If the application doesn't want to drop frames, then the `PP_MEDIASTREAMVIDEOTRACK_ATTRIB_BUFFERED_FRAMES` should be chosen such that inter-frame processing time variability won't overrun the input buffer. If the buffer is overfilled, then frames will be dropped. The application can detect this by examining the timestamp on returned frames. If some attributes are not specified, default values will be used for those unspecified attributes. If `Configure()` is not called, default settings will be used. Example usage from plugin code:

     int32_t attribs[] = {
         PP_MEDIASTREAMVIDEOTRACK_ATTRIB_BUFFERED_FRAMES, 4,
         PP_MEDIASTREAMVIDEOTRACK_ATTRIB_NONE};
     track_if->Configure(track, attribs, callback);

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>A <code>PP_Resource</code> corresponding to a video resource.</td></tr><tr class="even"><td>[in]</td><td>attrib_list</td><td>A list of attribute name-value pairs in which each attribute is immediately followed by the corresponding desired value. The list is terminated by <code>PP_MEDIASTREAMVIDEOTRACK_ATTRIB_NONE</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td><code>PP_CompletionCallback</code> to be called upon completion of <code>Configure()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`. Returns `PP_ERROR_INPROGRESS` if there is a pending call of `Configure()` or `GetFrame()`, or the plugin holds some frames which are not recycled with `RecycleFrame()`. If an error is returned, all attributes and the underlying buffer will not be changed.

<span id="ae8c4dcff35a89de06875295ce6791f52" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#ae8c4dcff35a89de06875295ce6791f52" class="el">PPB_MediaStreamVideoTrack::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a PPB\_MediaStreamVideoTrack resource for video output.

Call this when you will be creating frames and putting them to the track.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a PPB\_MediaStreamVideoTrack resource if successful, 0 if failed.

<span id="a512c61d2da03d815abfc3d5eff3fb152" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a512c61d2da03d815abfc3d5eff3fb152" class="el">PPB_MediaStreamVideoTrack::GetAttrib</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___enums#ga49cd0a65c15c8a91959310699afc36b7" class="el">PP_MediaStreamVideoTrack_Attrib</a> attrib, int32_t *value)</td></tr></tbody></table>

Gets attribute value for a given attribute name.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>A <code>PP_Resource</code> corresponding to a video resource.</td></tr><tr class="even"><td>[in]</td><td>attrib</td><td>A <code>PP_MediaStreamVideoTrack_Attrib</code> for querying.</td></tr><tr class="odd"><td>[out]</td><td>value</td><td>A int32_t for storing the attribute value on success. Otherwise, the value will not be changed.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a3d5241dc22fa9cc03b96fb8f2e3c976e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a3d5241dc22fa9cc03b96fb8f2e3c976e" class="el">PPB_MediaStreamVideoTrack::GetEmptyFrame</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *frame, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets a free frame for output.

The frame is allocated by `Configure()`. The caller should fill it with frame data, and then use |PutFrame()| to send the frame back.

<span id="a81a2f469f7311aaf784bfa8cb57e5a1a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a81a2f469f7311aaf784bfa8cb57e5a1a" class="el">PPB_MediaStreamVideoTrack::GetFrame</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *frame, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets the next video frame from the MediaStream track.

If internal processing is slower than the incoming frame rate, new frames will be dropped from the incoming stream. Once the input buffer is full, frames will be dropped until `RecycleFrame()` is called to free a spot for another frame to be buffered. If there are no frames in the input buffer, `PP_OK_COMPLETIONPENDING` will be returned immediately and the `callback` will be called when a new frame is received or an error happens.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>A <code>PP_Resource</code> corresponding to a video resource.</td></tr><tr class="even"><td>[out]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a VideoFrame resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a81a2f469f7311aaf784bfa8cb57e5a1a" class="el" title="Gets the next video frame from the MediaStream track.">GetFrame()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`. Returns PP\_ERROR\_NOMEMORY if `max_buffered_frames` frames buffer was not allocated successfully.

<span id="a5ea1040a0248265660173d334009ea4e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a5ea1040a0248265660173d334009ea4e" class="el">PPB_MediaStreamVideoTrack::GetId</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track)<code> [read]</code></td></tr></tbody></table>

Returns the track ID of the underlying MediaStream video track.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>The <code>PP_Resource</code> to check.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` containing the MediaStream track ID as a string.

<span id="a1b5e00cfe17f935bedefc9fc32f43bdd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a1b5e00cfe17f935bedefc9fc32f43bdd" class="el">PPB_MediaStreamVideoTrack::HasEnded</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track)</td></tr></tbody></table>

Checks whether the underlying MediaStream track has ended.

Calls to GetFrame while the track has ended are safe to make and will complete, but will fail.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>The <code>PP_Resource</code> to check.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given MediaStream track has ended or `PP_FALSE` otherwise.

<span id="a145d621225b6d7e1501d862823c94380" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a145d621225b6d7e1501d862823c94380" class="el">PPB_MediaStreamVideoTrack::IsMediaStreamVideoTrack</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a resource is a MediaStream video track resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The <code>PP_Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is a Mediastream video track resource or `PP_FALSE` otherwise.

<span id="ab3bbbc3074a6198d696521351608313f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#ab3bbbc3074a6198d696521351608313f" class="el">PPB_MediaStreamVideoTrack::PutFrame</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

Sends a frame returned by |GetEmptyFrame()| to the output track.

After this function, the |frame| should not be used anymore and the caller should release the reference that it holds.

<span id="a5f37a68d85311c2ae4ef229b411bb718" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___media_stream_video_track__1__0#a5f37a68d85311c2ae4ef229b411bb718" class="el">PPB_MediaStreamVideoTrack::RecycleFrame</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> video_track, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> frame)</td></tr></tbody></table>

Recycles a frame returned by `GetFrame()`, so the track can reuse the underlying buffer of this frame.

And the frame will become invalid. The caller should release all references it holds to `frame` and not use it anymore.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_track</td><td>A <code>PP_Resource</code> corresponding to a video resource.</td></tr><tr class="even"><td>[in]</td><td>frame</td><td>A <code>PP_Resource</code> corresponding to a VideoFrame resource returned by <code>GetFrame()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__media__stream__video__track_8h/" class="el">ppb_media_stream_video_track.h</a>
