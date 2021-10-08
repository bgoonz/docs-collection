---json {"title":"pp::AudioConfig Class Reference"} ---

Inheritance diagram for pp::AudioConfig:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#ad7a5caaa08c531acf7e2975a790db98e" class="el">AudioConfig</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#aa6dcb1ed3086502f03d9e1d73124421a" class="el">AudioConfig</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_AudioSampleRate <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a988b8489ec9335be25605561d0293813" class="el">sample_rate</a>, uint32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#ad7cb79f7f92993257643574457ee8d0c" class="el">sample_frame_count</a>)</td></tr><tr class="odd"><td style="text-align: right;">PP_AudioSampleRate </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a988b8489ec9335be25605561d0293813" class="el">sample_rate</a> () const</td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#ad7cb79f7f92993257643574457ee8d0c" class="el">sample_frame_count</a> () const</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static PP_AudioSampleRate </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#abf073122a1b9ef65f149fda9be57246f" class="el">RecommendSampleRate</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="even"><td style="text-align: right;">static uint32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a53611e94bca5d4a5f7acdd3e5285adb9" class="el">RecommendSampleFrameCount</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_AudioSampleRate <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a988b8489ec9335be25605561d0293813" class="el">sample_rate</a>, uint32_t requested_sample_frame_count)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A 16 bit stereo <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config/" class="el" title="A 16 bit stereo AudioConfig resource.">AudioConfig</a> resource.

Refer to the [Audio](/docs/native-client/devguide/coding/audio) chapter in the Developer's Guide for information on using this interface.

A single sample frame on a stereo device means one value for the left channel and one value for the right channel.

Buffer layout for a stereo int16 configuration:

`int16_t *buffer16;` `buffer16[0]` is the first left channel sample. `buffer16[1]` is the first right channel sample. `buffer16[2]` is the second left channel sample. `buffer16[3]` is the second right channel sample. `...` `buffer16[2 * (sample_frame_count - 1)]` is the last left channel sample. `buffer16[2 * (sample_frame_count - 1) + 1]` is the last right channel sample. Data will always be in the native endian format of the platform.

**Example:**

     // Create an audio config with a supported frame count.
     uint32_t sample_frame_count = AudioConfig::RecommendSampleFrameCount(
        PP_AUDIOSAMPLERATE_44100, 4096);
      AudioConfig config(PP_AUDIOSAMPLERATE_44100, sample_frame_count);
      if (config.is_null())
        return false;  // Couldn't configure audio.

       // Then use the config to create your audio resource.
      Audio audio(instance, config, callback, user_data);
       if (audio.is_null())
         return false;  // Couldn't create audio.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="ad7a5caaa08c531acf7e2975a790db98e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#ad7a5caaa08c531acf7e2975a790db98e" class="el">pp::AudioConfig::AudioConfig</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

An empty constructor for an `AudioConfig` resource.

<span id="aa6dcb1ed3086502f03d9e1d73124421a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#ad7a5caaa08c531acf7e2975a790db98e" class="el">pp::AudioConfig::AudioConfig</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_AudioSampleRate </td><td><em>sample_rate</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>sample_frame_count</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor that creates an audio config based on the given sample rate and frame count.

If the rate and frame count aren't supported, the resulting resource will be <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a>. You can pass the result of <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a53611e94bca5d4a5f7acdd3e5285adb9" class="el" title="RecommendSampleFrameCount() returns a supported frame count closest to the requested count...">RecommendSampleFrameCount()</a> as the sample frame count.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance associated with this resource.</td></tr><tr class="even"><td>[in]</td><td>sample_rate</td><td>A <code>PP_AudioSampleRate</code> which is either <code>PP_AUDIOSAMPLERATE_44100</code> or <code>PP_AUDIOSAMPLERATE_48000</code>.</td></tr><tr class="odd"><td>[in]</td><td>sample_frame_count</td><td>A uint32_t frame count returned from the <code>RecommendSampleFrameCount</code> function.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a53611e94bca5d4a5f7acdd3e5285adb9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static uint32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a53611e94bca5d4a5f7acdd3e5285adb9" class="el">pp::AudioConfig::RecommendSampleFrameCount</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_AudioSampleRate </td><td><em>sample_rate</em>,</td></tr><tr class="odd"><td></td><td></td><td>uint32_t </td><td><em>requested_sample_frame_count</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [static]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a53611e94bca5d4a5f7acdd3e5285adb9" class="el" title="RecommendSampleFrameCount() returns a supported frame count closest to the requested count...">RecommendSampleFrameCount()</a> returns a supported frame count closest to the requested count.

The sample frame count determines the overall latency of audio. Smaller frame counts will yield lower latency, but higher CPU utilization. Supported sample frame counts will vary by hardware and system (consider that the local system might be anywhere from a cell phone or a high-end audio workstation). Sample counts less than `PP_AUDIOMINSAMPLEFRAMECOUNT` and greater than `PP_AUDIOMAXSAMPLEFRAMECOUNT` are never supported on any system, but values in between aren't necessarily valid. This function will return a supported count closest to the requested value for use in the constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance associated with this resource.</td></tr><tr class="even"><td>[in]</td><td>sample_rate</td><td>A <code>PP_AudioSampleRate</code> which is either <code>PP_AUDIOSAMPLERATE_44100</code> or <code>PP_AUDIOSAMPLERATE_48000</code>.</td></tr><tr class="odd"><td>[in]</td><td>requested_sample_frame_count</td><td>A uint32_t requested frame count.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A uint32\_t containing the recommended sample frame count if successful. If the sample frame count or bit rate is not supported, this function will fail and return 0.

<span id="abf073122a1b9ef65f149fda9be57246f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static PP_AudioSampleRate <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#abf073122a1b9ef65f149fda9be57246f" class="el">pp::AudioConfig::RecommendSampleRate</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#abf073122a1b9ef65f149fda9be57246f" class="el" title="RecommendSampleRate() returns the native sample rate used by the audio system.">RecommendSampleRate()</a> returns the native sample rate used by the audio system.

Applications that use the recommended sample rate might obtain lower latency and higher fidelity output.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance associated with this resource.</td></tr></tbody></table>

<span id="ad7cb79f7f92993257643574457ee8d0c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#ad7cb79f7f92993257643574457ee8d0c" class="el">pp::AudioConfig::sample_frame_count</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal sample frame count.

**Returns:**  
A uint32\_t containing the sample frame count.

<span id="a988b8489ec9335be25605561d0293813" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_AudioSampleRate <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_audio_config#a988b8489ec9335be25605561d0293813" class="el">pp::AudioConfig::sample_rate</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PP_AudioSampleRate` enum.

**Returns:**  
The `PP_AudioSampleRate` enum.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/audio__config_8h/" class="el">audio_config.h</a>
