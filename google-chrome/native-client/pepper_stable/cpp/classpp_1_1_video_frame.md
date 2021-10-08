---json {"title":"pp::VideoFrame Class Reference"} ---

Inheritance diagram for pp::VideoFrame:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a2875cb170789aa00c3e9d5b3e96daa51" class="el">VideoFrame</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a00e462115cc543192cf8736373e72d51" class="el">VideoFrame</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#aa3f0c75b3e71a5aa450bb59db405d7f2" class="el">VideoFrame</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a9174464e29af68a4b701469ad3ad8cba" class="el">VideoFrame</a> (<a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#af4f974572030ac92546b75a93a9e2b09" class="el">~VideoFrame</a> ()</td></tr><tr class="even"><td style="text-align: right;">PP_TimeDelta </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#ab2cfae58a6d08410ca7351bd123a6a66" class="el">GetTimestamp</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a1c77d15f28b8252dd711f2fc39448b41" class="el">SetTimestamp</a> (PP_TimeDelta timestamp)</td></tr><tr class="even"><td style="text-align: right;">PP_VideoFrame_Format </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#ad03a1634ce404649f2f484159fd73be8" class="el">GetFormat</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a7d4026c03a06f519175406a55d254e60" class="el">GetSize</a> (<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_size/" class="el">Size</a> *size) const</td></tr><tr class="even"><td style="text-align: right;">void * </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#abc019dddc8f073fb5ebb72e51a400f5e" class="el">GetDataBuffer</a> ()</td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a9e993de4bf5349f3420a9e7dde2dd89f" class="el">GetDataBufferSize</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a2875cb170789aa00c3e9d5b3e96daa51" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a2875cb170789aa00c3e9d5b3e96daa51" class="el">pp::VideoFrame::VideoFrame</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `VideoFrame` object.

<span id="a00e462115cc543192cf8736373e72d51" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a2875cb170789aa00c3e9d5b3e96daa51" class="el">pp::VideoFrame::VideoFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame/" class="el">VideoFrame</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `VideoFrame`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>VideoFrame</code>.</td></tr></tbody></table>

<span id="aa3f0c75b3e71a5aa450bb59db405d7f2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a2875cb170789aa00c3e9d5b3e96daa51" class="el">pp::VideoFrame::VideoFrame</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `VideoFrame` from a `Resource`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_VideoFrame</code> resource.</td></tr></tbody></table>

<span id="a9174464e29af68a4b701469ad3ad8cba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a2875cb170789aa00c3e9d5b3e96daa51" class="el">pp::VideoFrame::VideoFrame</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has had 1 ref added for you.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PPB_VideoFrame</code> resource.</td></tr></tbody></table>

<span id="af4f974572030ac92546b75a93a9e2b09" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#af4f974572030ac92546b75a93a9e2b09" class="el">pp::VideoFrame::~VideoFrame</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="abc019dddc8f073fb5ebb72e51a400f5e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void* <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#abc019dddc8f073fb5ebb72e51a400f5e" class="el">pp::VideoFrame::GetDataBuffer</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Gets the data buffer for video frame pixels.

**Returns:**  
A pointer to the beginning of the data buffer.

<span id="a9e993de4bf5349f3420a9e7dde2dd89f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a9e993de4bf5349f3420a9e7dde2dd89f" class="el">pp::VideoFrame::GetDataBufferSize</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the size of data buffer in bytes.

**Returns:**  
The size of the data buffer in bytes.

<span id="ad03a1634ce404649f2f484159fd73be8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_VideoFrame_Format <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#ad03a1634ce404649f2f484159fd73be8" class="el">pp::VideoFrame::GetFormat</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the format of the video frame.

**Returns:**  
A `PP_VideoFrame_Format` containing the format of the video frame.

<span id="a7d4026c03a06f519175406a55d254e60" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a7d4026c03a06f519175406a55d254e60" class="el">pp::VideoFrame::GetSize</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_size/" class="el">Size</a> * </td><td><em>size</em></td><td>)</td><td>const</td></tr></tbody></table>

Gets the size of the video frame.

**Parameters:**  
<table><tbody><tr class="odd"><td>[out]</td><td>size</td><td>A <code>Size</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
True on success or false on failure.

<span id="ab2cfae58a6d08410ca7351bd123a6a66" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_TimeDelta <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#ab2cfae58a6d08410ca7351bd123a6a66" class="el">pp::VideoFrame::GetTimestamp</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the timestamp of the video frame.

**Returns:**  
A `PP_TimeDelta` containing the timestamp of the video frame. Given in seconds since the start of the containing video stream.

<span id="a1c77d15f28b8252dd711f2fc39448b41" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_video_frame#a1c77d15f28b8252dd711f2fc39448b41" class="el">pp::VideoFrame::SetTimestamp</a></td><td>(</td><td>PP_TimeDelta </td><td><em>timestamp</em></td><td>)</td><td></td></tr></tbody></table>

Sets the timestamp of the video frame.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>timestamp</td><td>A <code>PP_TimeDelta</code> containing the timestamp of the video frame. Given in seconds since the start of the containing video stream.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/video__frame_8h/" class="el">video_frame.h</a>
