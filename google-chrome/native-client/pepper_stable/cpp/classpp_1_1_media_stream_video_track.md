---json {"title":"pp::MediaStreamVideoTrack Class Reference"} ---

Inheritance diagram for pp::MediaStreamVideoTrack:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#afab1665269ee190c464473f521f5473a" class="el">MediaStreamVideoTrack</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a08eec69e7bbf66c711de2821478cb4d4" class="el">MediaStreamVideoTrack</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track/" class="el">MediaStreamVideoTrack</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a338b214467629e34e2d7981b1c7371e1" class="el">MediaStreamVideoTrack</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#ad2d03ab8d65a7ca1b7f1528a07babdd6" class="el">MediaStreamVideoTrack</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#af9edc2e09f5a446493630b67ef99c557" class="el">MediaStreamVideoTrack</a> (<a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a2ea78c7d8c2c7446407b5556d5992fbb" class="el">~MediaStreamVideoTrack</a> ()</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a1a7050062a28190a931e4b70b0e0b04d" class="el">Configure</a> (const int32_t attributes[], const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a583de5b5879d53faf118713b1c4c7e63" class="el">GetAttrib</a> (PP_MediaStreamVideoTrack_Attrib attrib, int32_t *value)</td></tr><tr class="odd"><td style="text-align: right;">std::string </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a7f6e47d4d127856184f6143841b52f24" class="el">GetId</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#acada0b5f53399c99f3cd37c3a6a6c86d" class="el">HasEnded</a> () const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#aeea5ef2549e1caeddea6ed783d0efe32" class="el">GetFrame</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &gt; &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#ab3df0710c423f1c2b1e45da957bc65e4" class="el">RecycleFrame</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp;frame)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a14c2317a98dd4f9458ba277783e57a7d" class="el">Close</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a0b37dca2ecdb94582b3cb6527328098d" class="el">GetEmptyFrame</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &gt; &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a33a83be29146dc26f5eb2dca77131b05" class="el">PutFrame</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp;frame)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a53a235a74b0d6393d04d1ecda9125268" class="el">IsMediaStreamVideoTrack</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `MediaStreamVideoTrack` class contains methods for receiving video frames from a MediaStream video track in the browser.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="afab1665269ee190c464473f521f5473a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#afab1665269ee190c464473f521f5473a" class="el">pp::MediaStreamVideoTrack::MediaStreamVideoTrack</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `MediaStreamVideoTrack` object.

<span id="a08eec69e7bbf66c711de2821478cb4d4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#afab1665269ee190c464473f521f5473a" class="el">pp::MediaStreamVideoTrack::MediaStreamVideoTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track/" class="el">MediaStreamVideoTrack</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `MediaStreamVideoTrack`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>MediaStreamVideoTrack</code>.</td></tr></tbody></table>

<span id="a338b214467629e34e2d7981b1c7371e1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#afab1665269ee190c464473f521f5473a" class="el">pp::MediaStreamVideoTrack::MediaStreamVideoTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `MediaStreamVideoTrack` from a `Resource`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_MediaStreamVideoTrack</code> resource.</td></tr></tbody></table>

<span id="ad2d03ab8d65a7ca1b7f1528a07babdd6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#afab1665269ee190c464473f521f5473a" class="el">pp::MediaStreamVideoTrack::MediaStreamVideoTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `MediaStreamVideoTrack` that outputs given frames to a new video track, which will be consumed by Javascript.

<span id="af9edc2e09f5a446493630b67ef99c557" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#afab1665269ee190c464473f521f5473a" class="el">pp::MediaStreamVideoTrack::MediaStreamVideoTrack</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_MediaStreamVideoTrack</code> resource.</td></tr></tbody></table>

<span id="a2ea78c7d8c2c7446407b5556d5992fbb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a2ea78c7d8c2c7446407b5556d5992fbb" class="el">pp::MediaStreamVideoTrack::~MediaStreamVideoTrack</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a14c2317a98dd4f9458ba277783e57a7d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a14c2317a98dd4f9458ba277783e57a7d" class="el">pp::MediaStreamVideoTrack::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Closes the MediaStream video track, and disconnects it from video source.

After calling `Close()`, no new frames will be received.

<span id="a1a7050062a28190a931e4b70b0e0b04d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a1a7050062a28190a931e4b70b0e0b04d" class="el">pp::MediaStreamVideoTrack::Configure</a></td><td>(</td><td>const int32_t </td><td><em>attributes</em>[],</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Configures underlying frame buffers for incoming frames.

If the application doesn't want to drop frames, then the `PP_MEDIASTREAMVIDEOTRACK_ATTRIB_BUFFERED_FRAMES` should be chosen such that inter-frame processing time variability won't overrun the input buffer. If the buffer is overfilled, then frames will be dropped. The application can detect this by examining the timestamp on returned frames. If some attributes are not specified, default values will be used for those unspecified attributes. If `Configure()` is not called, default settings will be used. Example usage from plugin code:

     int32_t attribs[] = {
         PP_MEDIASTREAMVIDEOTRACK_ATTRIB_BUFFERED_FRAMES, 4,
         PP_MEDIASTREAMVIDEOTRACK_ATTRIB_NONE};
     track.Configure(attribs, callback);

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>attrib_list</td><td>A list of attribute name-value pairs in which each attribute is immediately followed by the corresponding desired value. The list is terminated by <code>PP_MEDIASTREAMVIDEOTRACK_ATTRIB_NONE</code>.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion of <code>Configure()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`. Returns `PP_ERROR_INPROGRESS` if there is a pending call of `Configure()` or `GetFrame()`, or the plugin holds some frames which are not recycled with `RecycleFrame()`. If an error is returned, all attributes and the underlying buffer will not be changed.

<span id="a583de5b5879d53faf118713b1c4c7e63" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a583de5b5879d53faf118713b1c4c7e63" class="el">pp::MediaStreamVideoTrack::GetAttrib</a></td><td>(</td><td>PP_MediaStreamVideoTrack_Attrib </td><td><em>attrib</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t * </td><td><em>value</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Gets attribute value for a given attribute name.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>attrib</td><td>A <code>PP_MediaStreamVideoTrack_Attrib</code> for querying.</td></tr><tr class="even"><td>[out]</td><td>value</td><td>A int32_t for storing the attribute value.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

<span id="a0b37dca2ecdb94582b3cb6527328098d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a0b37dca2ecdb94582b3cb6527328098d" class="el">pp::MediaStreamVideoTrack::GetEmptyFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

<span id="aeea5ef2549e1caeddea6ed783d0efe32" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#aeea5ef2549e1caeddea6ed783d0efe32" class="el">pp::MediaStreamVideoTrack::GetFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Gets the next video frame from the MediaStream track.

If internal processing is slower than the incoming frame rate, new frames will be dropped from the incoming stream. Once the input buffer is full, frames will be dropped until `RecycleFrame()` is called to free a spot for another frame to be buffered. If there are no frames in the input buffer, `PP_OK_COMPLETIONPENDING` will be returned immediately and the `callback` will be called when a new frame is received or some error happens.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion of <code>GetFrame()</code>. If success, a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> will be passed into the completion callback function.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`. Returns PP\_ERROR\_NOMEMORY if `max_buffered_frames` frames buffer was not allocated successfully.

<span id="a7f6e47d4d127856184f6143841b52f24" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>std::string <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a7f6e47d4d127856184f6143841b52f24" class="el">pp::MediaStreamVideoTrack::GetId</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Returns the track ID of the underlying MediaStream video track.

<span id="acada0b5f53399c99f3cd37c3a6a6c86d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#acada0b5f53399c99f3cd37c3a6a6c86d" class="el">pp::MediaStreamVideoTrack::HasEnded</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Checks whether the underlying MediaStream track has ended.

Calls to GetFrame while the track has ended are safe to make and will complete, but will fail.

<span id="a53a235a74b0d6393d04d1ecda9125268" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a53a235a74b0d6393d04d1ecda9125268" class="el">pp::MediaStreamVideoTrack::IsMediaStreamVideoTrack</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Checks whether a `Resource` is a MediaStream video track, to test whether it is appropriate for use with the `MediaStreamVideoTrack` constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
True if `resource` is a MediaStream video track.

<span id="a33a83be29146dc26f5eb2dca77131b05" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#a33a83be29146dc26f5eb2dca77131b05" class="el">pp::MediaStreamVideoTrack::PutFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp; </td><td><em>frame</em></td><td>)</td><td></td></tr></tbody></table>

<span id="ab3df0710c423f1c2b1e45da957bc65e4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_media_stream_video_track#ab3df0710c423f1c2b1e45da957bc65e4" class="el">pp::MediaStreamVideoTrack::RecycleFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp; </td><td><em>frame</em></td><td>)</td><td></td></tr></tbody></table>

Recycles a frame returned by `GetFrame()`, so the track can reuse the underlying buffer of this frame.

And the frame will become invalid. The caller should release all references it holds to `frame` and not use it anymore.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>frame</td><td>A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> returned by <code>GetFrame()</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/media__stream__video__track_8h/" class="el">media_stream_video_track.h</a>
