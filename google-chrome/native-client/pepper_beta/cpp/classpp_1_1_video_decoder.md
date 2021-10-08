—json {“title”:“pp::VideoDecoder Class Reference”} —

Inheritance diagram for pp::VideoDecoder:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#afc9613c960f58ff4c97804da4645cd64" class="el">VideoDecoder</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a5c7b1010b42e179cf51e55266eb1491a" class="el">VideoDecoder</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a0eec2949dd73ef6d52b6782cee3b427d" class="el">VideoDecoder</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder/" class="el">VideoDecoder</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a284c6a99f5c3ea83465f7eab81ca4ba8" class="el">Initialize</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_graphics3_d/" class="el">Graphics3D</a> &amp;graphics3d_context, PP_VideoProfile profile, PP_HardwareAcceleration acceleration, uint32_t min_picture_count, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el">Decode</a> (uint32_t decode_id, uint32_t size, const void *buffer, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el">GetPicture</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; PP_VideoPicture &gt; &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a7b9c4917ebd205572a0fe69a34f1bfd9" class="el">RecyclePicture</a> (const PP_VideoPicture &amp;picture)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#adb59ebce58f83b1c27e9c427596fb366" class="el">Flush</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el">Reset</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Video decoder interface.

Typical usage:

-   Call Create() to create a new video decoder resource.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a284c6a99f5c3ea83465f7eab81ca4ba8" class="el" title="Initializes a video decoder resource.">Initialize()</a> to initialize it with a 3d graphics context and the desired codec profile.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> continuously (waiting for each previous call to complete) to push bitstream buffers to the decoder.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> continuously (waiting for each previous call to complete) to pull decoded pictures from the decoder.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#adb59ebce58f83b1c27e9c427596fb366" class="el" title="Flushes the decoder.">Flush()</a> to signal end of stream to the decoder and perform shutdown when it completes.
-   Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> to quickly stop the decoder (e.g. to implement Seek) and wait for the callback before restarting decoding at another point.
-   To destroy the decoder, the plugin should release all of its references to it. Any pending callbacks will abort before the decoder is destroyed.

Available video codecs vary by platform. All: theora, vorbis, vp8. Chrome and ChromeOS: aac, h264. ChromeOS: mpeg4.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="afc9613c960f58ff4c97804da4645cd64" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#afc9613c960f58ff4c97804da4645cd64" class="el">pp::VideoDecoder::VideoDecoder</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `VideoDecoder` object.

<span id="a5c7b1010b42e179cf51e55266eb1491a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#afc9613c960f58ff4c97804da4645cd64" class="el">pp::VideoDecoder::VideoDecoder</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a `VideoDecoder` and associate it with the provided `Instance`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a0eec2949dd73ef6d52b6782cee3b427d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#afc9613c960f58ff4c97804da4645cd64" class="el">pp::VideoDecoder::VideoDecoder</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder/" class="el">VideoDecoder</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `VideoDecoder`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>VideoDecoder</code>.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a2f1a48cf6d2f1854b20e6a747c9b03e3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el">pp::VideoDecoder::Decode</a></td><td>(</td><td>uint32_t </td><td><em>decode_id</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>size</em>,</td></tr><tr class="odd"><td></td><td></td><td>const void * </td><td><em>buffer</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Decodes a bitstream buffer.

Copies |size| bytes of data from the plugin’s |buffer|. The plugin should wait until the decoder signals completion by returning PP\_OK or by running |callback| before calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> again.

In general, each bitstream buffer should contain a demuxed bitstream frame for the selected video codec. For example, H264 decoders expect to receive one AnnexB NAL unit, including the 4 byte start code prefix, while VP8 decoders expect to receive a bitstream frame without the IVF frame header.

If the call to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> eventually results in a picture, the |decode\_id| parameter is copied into the returned picture. The plugin can use this to associate decoded pictures with <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> calls (e.g. to assign timestamps or frame numbers to pictures.) This value is opaque to the API so the plugin is free to pass any value.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>decode_id</td><td>An optional value, chosen by the plugin, that can be used to associate calls to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> with decoded pictures returned by <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a>.</td></tr><tr class="even"><td>[in]</td><td>size</td><td>Buffer size in bytes.</td></tr><tr class="odd"><td>[in]</td><td>buffer</td><td>Starting address of buffer.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn’t initialized or if a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#adb59ebce58f83b1c27e9c427596fb366" class="el" title="Flushes the decoder.">Flush()</a> or <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> call is pending. Returns PP\_ERROR\_INPROGRESS if there is another <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> call pending. Returns PP\_ERROR\_NOMEMORY if a bitstream buffer can’t be created. Returns PP\_ERROR\_ABORTED when <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> is called while <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> is pending.

<span id="adb59ebce58f83b1c27e9c427596fb366" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#adb59ebce58f83b1c27e9c427596fb366" class="el">pp::VideoDecoder::Flush</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Flushes the decoder.

The plugin should call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#adb59ebce58f83b1c27e9c427596fb366" class="el" title="Flushes the decoder.">Flush()</a> when it reaches the end of its video stream in order to stop cleanly. The decoder will run any pending <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> call to completion. The plugin should make no further calls to the decoder other than <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> and <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a7b9c4917ebd205572a0fe69a34f1bfd9" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a> until the decoder signals completion by running |callback|. Just before completion, any pending <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> call will complete by running its callback with result PP\_ERROR\_ABORTED to signal that no more pictures are available. Any pictures held by the plugin remain valid during and after the flush and should be recycled back to the decoder.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn’t initialized.

<span id="aec1a1bc95b8d3eea64b942af48dff02a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el">pp::VideoDecoder::GetPicture</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; PP_VideoPicture &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Gets the next picture from the decoder.

The picture is valid after the decoder signals completion by returning PP\_OK or running |callback|. The plugin can call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> again after the decoder signals completion. When the plugin is finished using the picture, it should return it to the system by calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a7b9c4917ebd205572a0fe69a34f1bfd9" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a>.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called on completion, and on success, to hold the picture descriptor.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn’t initialized or if a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> call is pending. Returns PP\_ERROR\_INPROGRESS if there is another <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> call pending. Returns PP\_ERROR\_ABORTED when <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> is called, or if a call to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#adb59ebce58f83b1c27e9c427596fb366" class="el" title="Flushes the decoder.">Flush()</a> completes while <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> is pending.

<span id="a284c6a99f5c3ea83465f7eab81ca4ba8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a284c6a99f5c3ea83465f7eab81ca4ba8" class="el">pp::VideoDecoder::Initialize</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_graphics3_d/" class="el">Graphics3D</a> &amp; </td><td><em>graphics3d_context</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_VideoProfile </td><td><em>profile</em>,</td></tr><tr class="odd"><td></td><td></td><td>PP_HardwareAcceleration </td><td><em>acceleration</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>min_picture_count</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Initializes a video decoder resource.

This should be called after Create() and before any other functions.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>graphics3d_context</td><td>A <code>PPB_Graphics3D</code> resource to use during decoding.</td></tr><tr class="even"><td>[in]</td><td>profile</td><td>A <code>PP_VideoProfile</code> specifying the video codec profile.</td></tr><tr class="odd"><td>[in]</td><td>acceleration</td><td>A <code>PP_HardwareAcceleration</code> specifying whether to use a hardware accelerated or a software implementation.</td></tr><tr class="even"><td>[in]</td><td>min_picture_count</td><td>A count of pictures the plugin would like to have in flight. This is effectively the number of times the plugin can call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a> and get a decoded frame without calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a7b9c4917ebd205572a0fe69a34f1bfd9" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a>. The decoder has its own internal minimum count, and will take the larger of its internal and this value. A client that doesn’t care can therefore just pass in zero for this argument.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_NOTSUPPORTED if video decoding is not available, or the requested profile is not supported. In this case, the client may call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a284c6a99f5c3ea83465f7eab81ca4ba8" class="el" title="Initializes a video decoder resource.">Initialize()</a> again with different parameters to find a good configuration.

<span id="a7b9c4917ebd205572a0fe69a34f1bfd9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a7b9c4917ebd205572a0fe69a34f1bfd9" class="el">pp::VideoDecoder::RecyclePicture</a></td><td>(</td><td>const PP_VideoPicture &amp; </td><td><em>picture</em></td><td>)</td><td></td></tr></tbody></table>

Recycles a picture that the plugin has received from the decoder.

The plugin should call this as soon as it has finished using the texture so the decoder can decode more pictures.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>picture</td><td>A <code>PP_VideoPicture</code> to return to the decoder.</td></tr></tbody></table>

<span id="aa05481906b07e929c9567bc22a48917a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el">pp::VideoDecoder::Reset</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

Resets the decoder as quickly as possible.

The plugin can call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> to skip to another position in the video stream. After <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aa05481906b07e929c9567bc22a48917a" class="el" title="Resets the decoder as quickly as possible.">Reset()</a> returns, any pending calls to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a2f1a48cf6d2f1854b20e6a747c9b03e3" class="el" title="Decodes a bitstream buffer.">Decode()</a> and <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#aec1a1bc95b8d3eea64b942af48dff02a" class="el" title="Gets the next picture from the decoder.">GetPicture()</a>) abort, causing their callbacks to run with PP\_ERROR\_ABORTED. The plugin should not make further calls to the decoder other than <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_video_decoder#a7b9c4917ebd205572a0fe69a34f1bfd9" class="el" title="Recycles a picture that the plugin has received from the decoder.">RecyclePicture()</a> until the decoder signals completion by running |callback|. Any pictures held by the plugin remain valid during and after the reset and should be recycled back to the decoder.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> to be called on completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if the decoder isn’t initialized.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/video__decoder_8h/" class="el">video_decoder.h</a>
