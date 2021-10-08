---json {"title":"pp::VideoEncoder Class Reference"} ---

Inheritance diagram for pp::VideoEncoder:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a6a84b977ee05e00bb2c00519d1893d08" class="el">VideoEncoder</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a479c6cbd73b497c98871d877ef9e0b29" class="el">VideoEncoder</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad9d09d444a0480153aa5086fda13f064" class="el">VideoEncoder</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder/" class="el">VideoEncoder</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a5c264d3b6ec0a5970cc1dee74dbfaf55" class="el">GetSupportedProfiles</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; std::vector&lt; PP_VideoProfileDescription &gt; &gt; &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el">Initialize</a> (const PP_VideoFrame_Format &amp;input_format, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp;input_visible_size, const PP_VideoProfile &amp;output_profile, const uint32_t initial_bitrate, PP_HardwareAcceleration acceleration, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ae673a5ebfed4fc3198a405cccecfbe54" class="el">GetFramesRequired</a> ()</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a2112ec6caf60385c1625b85e3697d777" class="el">GetFrameCodedSize</a> (<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> *coded_size)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a5c5fabe6a00afe6b8849bbc612183bb2" class="el">GetVideoFrame</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &gt; &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a39755b4e3aee295d8ba509da9904e5cd" class="el">Encode</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp;video_frame, bool force_keyframe, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a9c0861d91f7c93cb15cf917ca6d6cf95" class="el">GetBitstreamBuffer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; PP_BitstreamBuffer &gt; &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a81aec23c26a3f9c16ff90efdc38b2895" class="el">RecycleBitstreamBuffer</a> (const PP_BitstreamBuffer &amp;bitstream_buffer)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a727159fe366c6ce146dce4c42a608fd7" class="el">RequestEncodingParametersChange</a> (uint32_t bitrate, uint32_t framerate)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a411036495143eb6484b668e2d26c1170" class="el">Close</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Video encoder interface.

Typical usage:

-   Call Create() to create a new video encoder resource.
-   Call GetSupportedFormats() to determine which codecs and profiles are available.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a> to initialize the encoder for a supported profile.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a5c5fabe6a00afe6b8849bbc612183bb2" class="el" title="Gets a blank video frame which can be filled with video data and passed to the encoder.">GetVideoFrame()</a> to get a blank frame and fill it in, or get a video frame from another resource, e.g. `PPB_MediaStreamVideoTrack`.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a39755b4e3aee295d8ba509da9904e5cd" class="el" title="Encodes a video frame.">Encode()</a> to push the video frame to the encoder. If an external frame is pushed, wait for completion to recycle the frame.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a9c0861d91f7c93cb15cf917ca6d6cf95" class="el" title="Gets the next encoded bitstream buffer from the encoder.">GetBitstreamBuffer()</a> continuously (waiting for each previous call to complete) to pull encoded pictures from the encoder.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a81aec23c26a3f9c16ff90efdc38b2895" class="el" title="Recycles a bitstream buffer back to the encoder.">RecycleBitstreamBuffer()</a> after consuming the data in the bitstream buffer.
-   To destroy the encoder, the plugin should release all of its references to it. Any pending callbacks will abort before the encoder is destroyed.

Available video codecs vary by platform. All: vp8 (software). ChromeOS, depending on your device: h264 (hardware), vp8 (hardware)

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a6a84b977ee05e00bb2c00519d1893d08" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a6a84b977ee05e00bb2c00519d1893d08" class="el">pp::VideoEncoder::VideoEncoder</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `VideoEncoder` object.

<span id="a479c6cbd73b497c98871d877ef9e0b29" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a6a84b977ee05e00bb2c00519d1893d08" class="el">pp::VideoEncoder::VideoEncoder</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a `VideoEncoder` and associate it with the provided `Instance`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="ad9d09d444a0480153aa5086fda13f064" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a6a84b977ee05e00bb2c00519d1893d08" class="el">pp::VideoEncoder::VideoEncoder</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder/" class="el">VideoEncoder</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `VideoEncoder`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>VideoEncoder</code>.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a411036495143eb6484b668e2d26c1170" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a411036495143eb6484b668e2d26c1170" class="el">pp::VideoEncoder::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Closes the video encoder, and cancels any pending encodes.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` . It is not valid to call any encoder functions after a call to this method. **Note:** Destroying the video encoder closes it implicitly, so you are not required to call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a411036495143eb6484b668e2d26c1170" class="el" title="Closes the video encoder, and cancels any pending encodes.">Close()</a>.

<span id="a39755b4e3aee295d8ba509da9904e5cd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a39755b4e3aee295d8ba509da9904e5cd" class="el">pp::VideoEncoder::Encode</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp; </td><td><em>video_frame</em>,</td></tr><tr class="even"><td></td><td></td><td>bool </td><td><em>force_keyframe</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Encodes a video frame.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>video_frame</td><td>The <code>VideoFrame</code> to be encoded.</td></tr><tr class="even"><td>[in]</td><td>force_keyframe</td><td>A <code>PP_Bool&gt; specifying whether the encoder should emit a key frame for this video frame. </code></td></tr><tr class="odd"><td>[in]</td><td>callback</td><td><code>A </code><code>CompletionCallback</code> to be called upon completion. Plugins that pass <code>VideoFrame</code> resources owned by other resources should wait for completion before reusing them.</td></tr></tbody></table>

<!-- -->

**Returns:**  
` An int32_t containing an error code from ``pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="a9c0861d91f7c93cb15cf917ca6d6cf95" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a9c0861d91f7c93cb15cf917ca6d6cf95" class="el">pp::VideoEncoder::GetBitstreamBuffer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; PP_BitstreamBuffer &gt; &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

Gets the next encoded bitstream buffer from the encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[out]</td><td>bitstream_buffer</td><td>A <code>PP_BitstreamBuffer</code> containing encoded video data.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion with the next bitstream buffer. The plugin can call GetBitstreamBuffer from the callback in order to continuously "pull" bitstream buffers from the encoder.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed. Returns PP\_ERROR\_INPROGRESS if a prior call to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a9c0861d91f7c93cb15cf917ca6d6cf95" class="el" title="Gets the next encoded bitstream buffer from the encoder.">GetBitstreamBuffer()</a> has not completed.

<span id="a2112ec6caf60385c1625b85e3697d777" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a2112ec6caf60385c1625b85e3697d777" class="el">pp::VideoEncoder::GetFrameCodedSize</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> * </td><td><em>coded_size</em></td><td>)</td><td></td></tr></tbody></table>

Gets the coded size of the video frames required by the encoder.

Coded size is the logical size of the input frames, in pixels. The encoder may have hardware alignment requirements that make this different from |input\_visible\_size|, as requested in the call to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>coded_size</td><td>A <code>Size</code> to hold the coded size.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing a result code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="ae673a5ebfed4fc3198a405cccecfbe54" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ae673a5ebfed4fc3198a405cccecfbe54" class="el">pp::VideoEncoder::GetFramesRequired</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Gets the number of input video frames that the encoder may hold while encoding.

If the plugin is providing the video frames, it should have at least this many available.

**Returns:**  
An int32\_t containing the number of frames required, or an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a> has not successfully completed.

<span id="a5c264d3b6ec0a5970cc1dee74dbfaf55" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a5c264d3b6ec0a5970cc1dee74dbfaf55" class="el">pp::VideoEncoder::GetSupportedProfiles</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; std::vector&lt; PP_VideoProfileDescription &gt; &gt; &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

Gets an array of supported video encoder profiles.

These can be used to choose a profile before calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el" title="Initializes a video encoder resource.">Initialize()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion with the PP_VideoProfileDescription structs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
If &gt;= 0, the number of supported profiles returned, otherwise an error code from `pp_errors.h`.

<span id="a5c5fabe6a00afe6b8849bbc612183bb2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a5c5fabe6a00afe6b8849bbc612183bb2" class="el">pp::VideoEncoder::GetVideoFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &gt; &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

Gets a blank video frame which can be filled with video data and passed to the encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion with the blank <code>VideoFrame</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="ad2c47c10cfe92a3bf41e204d326560c7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#ad2c47c10cfe92a3bf41e204d326560c7" class="el">pp::VideoEncoder::Initialize</a></td><td>(</td><td>const PP_VideoFrame_Format &amp; </td><td><em>input_format</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> &amp; </td><td><em>input_visible_size</em>,</td></tr><tr class="odd"><td></td><td></td><td>const PP_VideoProfile &amp; </td><td><em>output_profile</em>,</td></tr><tr class="even"><td></td><td></td><td>const uint32_t </td><td><em>initial_bitrate</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_HardwareAcceleration </td><td><em>acceleration</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Initializes a video encoder resource.

This should be called after <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a5c264d3b6ec0a5970cc1dee74dbfaf55" class="el" title="Gets an array of supported video encoder profiles.">GetSupportedProfiles()</a> and before any functions below.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>input_format</td><td>The <code>PP_VideoFrame_Format</code> of the frames which will be encoded.</td></tr><tr class="even"><td>[in]</td><td>input_visible_size</td><td>A <code>Size</code> specifying the dimensions of the visible part of the input frames.</td></tr><tr class="odd"><td>[in]</td><td>output_profile</td><td>A <code>PP_VideoProfile</code> specifying the codec profile of the encoded output stream.</td></tr><tr class="even"><td>[in]</td><td>acceleration</td><td>A <code>PP_HardwareAcceleration</code> specifying whether to use a hardware accelerated or a software implementation.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_NOTSUPPORTED if video encoding is not available, or the requested codec profile is not supported. Returns PP\_ERROR\_NOMEMORY if frame and bitstream buffers can't be created.

<span id="a81aec23c26a3f9c16ff90efdc38b2895" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a81aec23c26a3f9c16ff90efdc38b2895" class="el">pp::VideoEncoder::RecycleBitstreamBuffer</a></td><td>(</td><td>const PP_BitstreamBuffer &amp; </td><td><em>bitstream_buffer</em></td><td>)</td><td></td></tr></tbody></table>

Recycles a bitstream buffer back to the encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>bitstream_buffer</td><td>A <code>PP_BitstreamBuffer</code> that is no longer needed by the plugin.</td></tr></tbody></table>

<span id="a727159fe366c6ce146dce4c42a608fd7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_encoder#a727159fe366c6ce146dce4c42a608fd7" class="el">pp::VideoEncoder::RequestEncodingParametersChange</a></td><td>(</td><td>uint32_t </td><td><em>bitrate</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>framerate</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Requests a change to encoding parameters.

This is only a request, fulfilled on a best-effort basis.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>bitrate</td><td>The requested new bitrate, in bits per second.</td></tr><tr class="even"><td>[in]</td><td>framerate</td><td>The requested new framerate, in frames per second.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/video__encoder_8h/" class="el">video_encoder.h</a>
