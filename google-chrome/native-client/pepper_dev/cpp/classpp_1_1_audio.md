---json {"title":"pp::Audio Class Reference"} ---

Inheritance diagram for pp::Audio:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_audio__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_audio-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#abcb6131f91a53e36f9626843d86e8109" class="el">Audio</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#af597f4db73cfa15c3dd7eae9b7307fd2" class="el">Audio</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a> &amp;<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a750898b5f065621e86472cf1799401bb" class="el">config</a>, PPB_Audio_Callback callback, void *user_data)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a856666bd5087947481ac2728bcd26c60" class="el">Audio</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a> &amp;<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a750898b5f065621e86472cf1799401bb" class="el">config</a>, PPB_Audio_Callback callback, void *user_data)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a750898b5f065621e86472cf1799401bb" class="el">config</a> ()</td></tr><tr class="odd"><td style="text-align: right;">const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a51dffc59dc1d654d23c7f8730c87552a" class="el">config</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#aa8311c20bbeffd9e22ba21218695f6e4" class="el">StartPlayback</a> ()</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#ae71f91edd576129f8c82db997bd1f163" class="el">StopPlayback</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

An audio resource.

Refer to the [Audio](/docs/native-client/devguide/coding/audio) chapter in the Developer's Guide for information on using this interface.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="abcb6131f91a53e36f9626843d86e8109" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#abcb6131f91a53e36f9626843d86e8109" class="el">pp::Audio::Audio</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

An empty constructor for an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio/" class="el" title="An audio resource.">Audio</a> resource.

<span id="af597f4db73cfa15c3dd7eae9b7307fd2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#abcb6131f91a53e36f9626843d86e8109" class="el">pp::Audio::Audio</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a> &amp; </td><td><em>config</em>,</td></tr><tr class="odd"><td></td><td></td><td>PPB_Audio_Callback </td><td><em>callback</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor that creates an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio/" class="el" title="An audio resource.">Audio</a> resource.

No sound will be heard until <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#aa8311c20bbeffd9e22ba21218695f6e4" class="el" title="StartPlayback() starts playback of audio.">StartPlayback()</a> is called. The callback is called with the buffer address and given user data whenever the buffer needs to be filled. From within the callback, you should not call `PPB_Audio` functions. The callback will be called on a different thread than the one which created the interface. For performance-critical applications (such as low-latency audio), the callback should avoid blocking or calling functions that can obtain locks, such as malloc. The layout and the size of the buffer passed to the audio callback will be determined by the device configuration and is specified in the `AudioConfig` documentation.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>config</td><td>An <code>AudioConfig</code> containing the audio config resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PPB_Audio_Callback</code> callback function that the browser calls when it needs more samples to play.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>A pointer to user data used in the callback function.</td></tr></tbody></table>

<span id="a856666bd5087947481ac2728bcd26c60" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#abcb6131f91a53e36f9626843d86e8109" class="el">pp::Audio::Audio</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a> &amp; </td><td><em>config</em>,</td></tr><tr class="odd"><td></td><td></td><td>PPB_Audio_Callback_1_0 </td><td><em>callback</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor that creates an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio/" class="el" title="An audio resource.">Audio</a> resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>config</td><td>An <code>AudioConfig</code> containing the audio config resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PPB_Audio_Callback</code> callback function that the browser calls when it needs more samples to play.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>A pointer to user data used in the callback function.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a750898b5f065621e86472cf1799401bb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a>&amp; <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a750898b5f065621e86472cf1799401bb" class="el">pp::Audio::config</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PPB_AudioConfig` struct.

**Returns:**  
A mutable reference to the PPB\_AudioConfig struct.

<span id="a51dffc59dc1d654d23c7f8730c87552a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio_config/" class="el">AudioConfig</a>&amp; <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#a750898b5f065621e86472cf1799401bb" class="el">pp::Audio::config</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PPB_AudioConfig` struct.

**Returns:**  
A const reference to the internal `PPB_AudioConfig` struct.

<span id="aa8311c20bbeffd9e22ba21218695f6e4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#aa8311c20bbeffd9e22ba21218695f6e4" class="el">pp::Audio::StartPlayback</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#aa8311c20bbeffd9e22ba21218695f6e4" class="el" title="StartPlayback() starts playback of audio.">StartPlayback()</a> starts playback of audio.

**Returns:**  
true if successful, otherwise false.

<span id="ae71f91edd576129f8c82db997bd1f163" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_audio#ae71f91edd576129f8c82db997bd1f163" class="el">pp::Audio::StopPlayback</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

StopPlayback stops playback of audio.

**Returns:**  
true if successful, otherwise false.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/audio_8h/" class="el">audio.h</a>
