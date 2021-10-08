---json {"title":"pp::MediaStreamAudioTrack Class Reference"} ---

Inheritance diagram for pp::MediaStreamAudioTrack:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#aba4674796b58027523c3429e6e6c977f" class="el">MediaStreamAudioTrack</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#adc7d45a01c7f7e27a94a033e957e0587" class="el">MediaStreamAudioTrack</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track/" class="el">MediaStreamAudioTrack</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a5b0e9a5ede7bb5e265007b9e2b7c06f9" class="el">MediaStreamAudioTrack</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ad0f8599de42327cda5850db05b1b5be6" class="el">MediaStreamAudioTrack</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a4efdf0aeb1ec01ff29c16c94174bc1f8" class="el">~MediaStreamAudioTrack</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ad3572da8199315fc90248f5634358211" class="el">Configure</a> (const int32_t attributes[], const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ac1767869e698082610ee3f9cb5a28561" class="el">GetAttrib</a> (PP_MediaStreamAudioTrack_Attrib attrib, int32_t *value)</td></tr><tr class="even"><td style="text-align: right;">std::string </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ac04877194c84ddbb004265e476275a46" class="el">GetId</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ae1be4d89810f272b4e43b1ca07a7b0de" class="el">HasEnded</a> () const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#acc9e47e460bae4a6d0ade366b5cf33ed" class="el">GetBuffer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_audio_buffer/" class="el">AudioBuffer</a> &gt; &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a0601e973dc3020973cfb001ee320aa36" class="el">RecycleBuffer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_audio_buffer/" class="el">AudioBuffer</a> &amp;buffer)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a2ad0471a5fb098f84ec301d52bca269a" class="el">Close</a> ()</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a66b94f4551e3e1db35fc9cdfdb686097" class="el">IsMediaStreamAudioTrack</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `MediaStreamAudioTrack` class contains methods for receiving audio buffers from a MediaStream audio track in the browser.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="aba4674796b58027523c3429e6e6c977f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#aba4674796b58027523c3429e6e6c977f" class="el">pp::MediaStreamAudioTrack::MediaStreamAudioTrack</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `MediaStreamAudioTrack` object.

<span id="adc7d45a01c7f7e27a94a033e957e0587" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#aba4674796b58027523c3429e6e6c977f" class="el">pp::MediaStreamAudioTrack::MediaStreamAudioTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track/" class="el">MediaStreamAudioTrack</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `MediaStreamAudioTrack`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>MediaStreamAudioTrack</code>.</td></tr></tbody></table>

<span id="a5b0e9a5ede7bb5e265007b9e2b7c06f9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#aba4674796b58027523c3429e6e6c977f" class="el">pp::MediaStreamAudioTrack::MediaStreamAudioTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `MediaStreamAudioTrack` from a `Resource`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_MediaStreamAudioTrack</code> resource.</td></tr></tbody></table>

<span id="ad0f8599de42327cda5850db05b1b5be6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#aba4674796b58027523c3429e6e6c977f" class="el">pp::MediaStreamAudioTrack::MediaStreamAudioTrack</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_MediaStreamAudioTrack</code> resource.</td></tr></tbody></table>

<span id="a4efdf0aeb1ec01ff29c16c94174bc1f8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a4efdf0aeb1ec01ff29c16c94174bc1f8" class="el">pp::MediaStreamAudioTrack::~MediaStreamAudioTrack</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a2ad0471a5fb098f84ec301d52bca269a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a2ad0471a5fb098f84ec301d52bca269a" class="el">pp::MediaStreamAudioTrack::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Closes the MediaStream audio track, and disconnects it from the audio source.

After calling `Close()`, no new buffers will be received.

<span id="ad3572da8199315fc90248f5634358211" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ad3572da8199315fc90248f5634358211" class="el">pp::MediaStreamAudioTrack::Configure</a></td><td>(</td><td>const int32_t </td><td><em>attributes</em>[],</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Configures underlying buffer buffers for incoming audio samples.

If the application doesn't want to drop samples, then the `PP_MEDIASTREAMAUDIOTRACK_ATTRIB_BUFFERS` should be chosen such that inter-buffer processing time variability won't overrun all input buffers. If all buffers are filled, then samples will be dropped. The application can detect this by examining the timestamp on returned buffers. If `Configure()` is not called, default settings will be used. Calls to Configure while the plugin holds buffers will fail. Example usage from plugin code:

     int32_t attribs[] = {
         PP_MEDIASTREAMAUDIOTRACK_ATTRIB_BUFFERS, 4,
         PP_MEDIASTREAMAUDIOTRACK_ATTRIB_DURATION, 10,
         PP_MEDIASTREAMAUDIOTRACK_ATTRIB_NONE};
     track.Configure(attribs, callback);

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>attrib_list</td><td>A list of attribute name-value pairs in which each attribute is immediately followed by the corresponding desired value. The list is terminated by <code>PP_MEDIASTREAMAUDIOTRACK_AUDIO_NONE</code>.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion of <code>Configure()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="ac1767869e698082610ee3f9cb5a28561" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ac1767869e698082610ee3f9cb5a28561" class="el">pp::MediaStreamAudioTrack::GetAttrib</a></td><td>(</td><td>PP_MediaStreamAudioTrack_Attrib </td><td><em>attrib</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t * </td><td><em>value</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Gets attribute value for a given attribute name.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>attrib</td><td>A <code>PP_MediaStreamAudioTrack_Attrib</code> for querying.</td></tr><tr class="even"><td>[out]</td><td>value</td><td>A int32_t for storing the attribute value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="acc9e47e460bae4a6d0ade366b5cf33ed" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#acc9e47e460bae4a6d0ade366b5cf33ed" class="el">pp::MediaStreamAudioTrack::GetBuffer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_audio_buffer/" class="el">AudioBuffer</a> &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Gets the next audio buffer from the MediaStream track.

If internal processing is slower than the incoming buffer rate, new buffers will be dropped from the incoming stream. Once all buffers are full, audio samples will be dropped until `RecycleBuffer()` is called to free a spot for another buffer. If there are no audio data in the input buffer, `PP_OK_COMPLETIONPENDING` will be returned immediately and the `callback` will be called when a new buffer of audio samples is received or some error happens.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion of <code>GetBuffer()</code>. If success, an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_audio_buffer/" class="el">AudioBuffer</a> will be passed into the completion callback function.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="ac04877194c84ddbb004265e476275a46" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>std::string <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ac04877194c84ddbb004265e476275a46" class="el">pp::MediaStreamAudioTrack::GetId</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the track ID of the underlying MediaStream audio track.

<span id="ae1be4d89810f272b4e43b1ca07a7b0de" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#ae1be4d89810f272b4e43b1ca07a7b0de" class="el">pp::MediaStreamAudioTrack::HasEnded</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Checks whether the underlying MediaStream track has ended.

Calls to GetBuffer while the track has ended are safe to make and will complete, but will fail.

<span id="a66b94f4551e3e1db35fc9cdfdb686097" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a66b94f4551e3e1db35fc9cdfdb686097" class="el">pp::MediaStreamAudioTrack::IsMediaStreamAudioTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Checks whether a `Resource` is a MediaStream audio track, to test whether it is appropriate for use with the `MediaStreamAudioTrack` constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
True if `resource` is a MediaStream audio track.

<span id="a0601e973dc3020973cfb001ee320aa36" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_media_stream_audio_track#a0601e973dc3020973cfb001ee320aa36" class="el">pp::MediaStreamAudioTrack::RecycleBuffer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_audio_buffer/" class="el">AudioBuffer</a> &amp; </td><td><em>buffer</em></td><td>)</td><td></td></tr></tbody></table>

Recycles a buffer returned by `GetBuffer()`, so the track can reuse the buffer.

And the buffer will become invalid. The caller should release all references it holds to `buffer` and not use it anymore.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_audio_buffer/" class="el">AudioBuffer</a> returned by <code>GetBuffer()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/media__stream__audio__track_8h/" class="el">media_stream_audio_track.h</a>
