---json {"title":"PPB\_MediaStreamAudioTrack Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a578685c385942e0f9e9e3b041dea4f17" class="el">IsMediaStreamAudioTrack</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a73f0f222f60ceed5f662ef3db7dee21b" class="el">Configure</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, const int32_t attrib_list[], struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a3ad96bc4cd30dd580871a789a749819c" class="el">GetAttrib</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, <a href="/docs/native-client/pepper_beta/c/group___enums#ga2f729c238ba74adc778c0d0bc17c453f" class="el">PP_MediaStreamAudioTrack_Attrib</a> attrib, int32_t *value)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a54bbc279f3440f49fbb9ad357ba4d224" class="el">GetId</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a21037392fc0a6fb893881fddb204002f" class="el">HasEnded</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#af7941e0bcb6c2aac5bb2dc7397d22b96" class="el">GetBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#af43b8871ebeeed2466437fcb23ce994d" class="el">RecycleBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a459bc28c5a626eb4a59a81286e9f8a58" class="el">Close</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track)</td></tr></tbody></table>

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a459bc28c5a626eb4a59a81286e9f8a58" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a459bc28c5a626eb4a59a81286e9f8a58" class="el">PPB_MediaStreamAudioTrack::Close</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track)</td></tr></tbody></table>

Closes the MediaStream audio track and disconnects it from the audio source.

After calling `Close()`, no new buffers will be received.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>A <code>PP_Resource</code> corresponding to a MediaStream audio track resource.</td></tr></tbody></table>

<span id="a73f0f222f60ceed5f662ef3db7dee21b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a73f0f222f60ceed5f662ef3db7dee21b" class="el">PPB_MediaStreamAudioTrack::Configure</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, const int32_t attrib_list[], struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Configures underlying buffers for incoming audio samples.

If the application doesn't want to drop samples, then the `PP_MEDIASTREAMAUDIOTRACK_ATTRIB_BUFFERS` should be chosen such that inter-buffer processing time variability won't overrun all the input buffers. If all buffers are filled, then samples will be dropped. The application can detect this by examining the timestamp on returned buffers. If `Configure()` is not called, default settings will be used. Calls to Configure while the plugin holds buffers will fail. Example usage from plugin code:

     int32_t attribs[] = {
         PP_MEDIASTREAMAUDIOTRACK_ATTRIB_BUFFERS, 4,
         PP_MEDIASTREAMAUDIOTRACK_ATTRIB_DURATION, 10,
         PP_MEDIASTREAMAUDIOTRACK_ATTRIB_NONE};
     track_if->Configure(track, attribs, callback);

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr><tr class="even"><td>[in]</td><td>attrib_list</td><td>A list of attribute name-value pairs in which each attribute is immediately followed by the corresponding desired value. The list is terminated by <code>PP_MEDIASTREAMAUDIOTRACK_ATTRIB_NONE</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <code>Configure()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a3ad96bc4cd30dd580871a789a749819c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a3ad96bc4cd30dd580871a789a749819c" class="el">PPB_MediaStreamAudioTrack::GetAttrib</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, <a href="/docs/native-client/pepper_beta/c/group___enums#ga2f729c238ba74adc778c0d0bc17c453f" class="el">PP_MediaStreamAudioTrack_Attrib</a> attrib, int32_t *value)</td></tr></tbody></table>

Gets attribute value for a given attribute name.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr><tr class="even"><td>[in]</td><td>attrib</td><td>A <code>PP_MediaStreamAudioTrack_Attrib</code> for querying.</td></tr><tr class="odd"><td>[out]</td><td>value</td><td>A int32_t for storing the attribute value on success. Otherwise, the value will not be changed.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="af7941e0bcb6c2aac5bb2dc7397d22b96" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#af7941e0bcb6c2aac5bb2dc7397d22b96" class="el">PPB_MediaStreamAudioTrack::GetBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets the next audio buffer from the MediaStream track.

If internal processing is slower than the incoming buffer rate, new buffers will be dropped from the incoming stream. Once all buffers are full, audio samples will be dropped until `RecycleBuffer()` is called to free a slot for another buffer. If there are no audio data in the input buffer, `PP_OK_COMPLETIONPENDING` will be returned immediately and the `callback` will be called, when a new buffer of audio samples is received or an error happens.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr><tr class="even"><td>[out]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an AudioBuffer resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#af7941e0bcb6c2aac5bb2dc7397d22b96" class="el" title="Gets the next audio buffer from the MediaStream track.">GetBuffer()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a54bbc279f3440f49fbb9ad357ba4d224" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a54bbc279f3440f49fbb9ad357ba4d224" class="el">PPB_MediaStreamAudioTrack::GetId</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track)<code> [read]</code></td></tr></tbody></table>

Returns the track ID of the underlying MediaStream audio track.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>The <code>PP_Resource</code> to check.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` containing the MediaStream track ID as a string.

<span id="a21037392fc0a6fb893881fddb204002f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a21037392fc0a6fb893881fddb204002f" class="el">PPB_MediaStreamAudioTrack::HasEnded</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track)</td></tr></tbody></table>

Checks whether the underlying MediaStream track has ended.

Calls to GetBuffer while the track has ended are safe to make and will complete, but will fail.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>The <code>PP_Resource</code> to check.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given MediaStream track has ended or `PP_FALSE` otherwise.

<span id="a578685c385942e0f9e9e3b041dea4f17" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#a578685c385942e0f9e9e3b041dea4f17" class="el">PPB_MediaStreamAudioTrack::IsMediaStreamAudioTrack</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a resource is a MediaStream audio track resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The <code>PP_Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is a Mediastream audio track resource or `PP_FALSE` otherwise.

<span id="af43b8871ebeeed2466437fcb23ce994d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___media_stream_audio_track__0__1#af43b8871ebeeed2466437fcb23ce994d" class="el">PPB_MediaStreamAudioTrack::RecycleBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_track, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Recycles a buffer returned by `GetBuffer()`, so the track can reuse the buffer.

And the buffer will become invalid. The caller should release all references it holds to `buffer` and not use it anymore.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_track</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr><tr class="even"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an AudioBuffer resource returned by <code>GetBuffer()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__media__stream__audio__track_8h/" class="el">ppb_media_stream_audio_track.h</a>
