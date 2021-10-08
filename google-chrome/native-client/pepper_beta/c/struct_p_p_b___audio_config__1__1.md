---json {"title":"PPB_AudioConfig Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a541f636cd6818dbf09ff3680701753ae" class="el">CreateStereo16Bit</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a> sample_rate, uint32_t sample_frame_count)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#ad8e61c620a5b2081302e741c94aef921" class="el">RecommendSampleFrameCount</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a> sample_rate, uint32_t requested_sample_frame_count)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a51282d6afa187ef1fc3a3a559735e209" class="el">IsAudioConfig</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a3e9e2d57f89f78d5373f09e9a6bcac72" class="el">GetSampleRate</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> config)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a743a6033adee1e3e8e4822d72e0ccc68" class="el">GetSampleFrameCount</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> config)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a7c6808dbbfba59c85facd85548a0199c" class="el">RecommendSampleRate</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `PPB_AudioConfig` interface contains pointers to several functions for establishing your audio configuration within the browser.

This interface only supports 16-bit stereo output.

Refer to the [Audio](/docs/native-client/devguide/coding/audio) chapter in the Developer's Guide for information on using this interface.

---

## Field Documentation

<span id="a541f636cd6818dbf09ff3680701753ae" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a541f636cd6818dbf09ff3680701753ae" class="el">PPB_AudioConfig::CreateStereo16Bit</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a> sample_rate, uint32_t sample_frame_count)</td></tr></tbody></table>

CreateStereo16bit() creates a 16 bit audio configuration resource.

The `sample_rate` should be the result of calling `RecommendSampleRate` and `sample_frame_count` should be the result of calling `RecommendSampleFrameCount`. If the sample frame count or bit rate isn't supported, this function will fail and return a null resource.

A single sample frame on a stereo device means one value for the left channel and one value for the right channel.

Buffer layout for a stereo int16 configuration: `int16_t *buffer16;` `buffer16[0]` is the first left channel sample. `buffer16[1]` is the first right channel sample. `buffer16[2]` is the second left channel sample. `buffer16[3]` is the second right channel sample. ... `buffer16[2 * (sample_frame_count - 1)]` is the last left channel sample. `buffer16[2 * (sample_frame_count - 1) + 1]` is the last right channel sample. Data will always be in the native endian format of the platform.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>sample_rate</td><td>A <code>PP_AudioSampleRate</code> which is either <code>PP_AUDIOSAMPLERATE_44100</code> or <code>PP_AUDIOSAMPLERATE_48000</code>.</td></tr><tr class="odd"><td>[in]</td><td>sample_frame_count</td><td>A <code>uint32_t</code> frame count returned from the <code>RecommendSampleFrameCount</code> function.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the `PPB_Audio_Config` if successful or a null resource if the sample frame count or bit rate are not supported.

<span id="a743a6033adee1e3e8e4822d72e0ccc68" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a743a6033adee1e3e8e4822d72e0ccc68" class="el">PPB_AudioConfig::GetSampleFrameCount</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> config)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a743a6033adee1e3e8e4822d72e0ccc68" class="el" title="GetSampleFrameCount() returns the sample frame count for the given PPB_Audio_Config.">GetSampleFrameCount()</a> returns the sample frame count for the given `PPB_Audio_Config`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to an audio config resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `uint32_t` containing sample frame count or 0 if the resource is invalid. Refer to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#ad8e61c620a5b2081302e741c94aef921" class="el" title="RecommendSampleFrameCount() returns the supported sample frame count closest to the requested count...">RecommendSampleFrameCount()</a> for more on sample frame counts.

<span id="a3e9e2d57f89f78d5373f09e9a6bcac72" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a3e9e2d57f89f78d5373f09e9a6bcac72" class="el">PPB_AudioConfig::GetSampleRate</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> config)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a3e9e2d57f89f78d5373f09e9a6bcac72" class="el" title="GetSampleRate() returns the sample rate for the given PPB_Audio_Config.">GetSampleRate()</a> returns the sample rate for the given `PPB_Audio_Config`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_Audio_Config</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_AudioSampleRate` containing sample rate or `PP_AUDIOSAMPLERATE_NONE` if the resource is invalid.

<span id="a51282d6afa187ef1fc3a3a559735e209" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a51282d6afa187ef1fc3a3a559735e209" class="el">PPB_AudioConfig::IsAudioConfig</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a51282d6afa187ef1fc3a3a559735e209" class="el" title="IsAudioConfig() determines if the given resource is a PPB_Audio_Config.">IsAudioConfig()</a> determines if the given resource is a `PPB_Audio_Config`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to an audio config resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` containing `PP_TRUE` if the given resource is an `AudioConfig` resource, otherwise `PP_FALSE`.

<span id="ad8e61c620a5b2081302e741c94aef921" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#ad8e61c620a5b2081302e741c94aef921" class="el">PPB_AudioConfig::RecommendSampleFrameCount</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a> sample_rate, uint32_t requested_sample_frame_count)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#ad8e61c620a5b2081302e741c94aef921" class="el" title="RecommendSampleFrameCount() returns the supported sample frame count closest to the requested count...">RecommendSampleFrameCount()</a> returns the supported sample frame count closest to the requested count.

The sample frame count determines the overall latency of audio. Since one "frame" is always buffered in advance, smaller frame counts will yield lower latency, but higher CPU utilization.

Supported sample frame counts will vary by hardware and system (consider that the local system might be anywhere from a cell phone or a high-end audio workstation). Sample counts less than `PP_AUDIOMINSAMPLEFRAMECOUNT` and greater than `PP_AUDIOMAXSAMPLEFRAMECOUNT` are never supported on any system, but values in between aren't necessarily valid. This function will return a supported count closest to the requested frame count.

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#ad8e61c620a5b2081302e741c94aef921" class="el" title="RecommendSampleFrameCount() returns the supported sample frame count closest to the requested count...">RecommendSampleFrameCount()</a> result is intended for audio output devices.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td></td></tr><tr class="even"><td>[in]</td><td>sample_rate</td><td>A <code>PP_AudioSampleRate</code> which is either <code>PP_AUDIOSAMPLERATE_44100</code> or <code>PP_AUDIOSAMPLERATE_48000.</code></td></tr><tr class="odd"><td>[in]</td><td>requested_sample_frame_count</td><td>A <code>uint_32t</code> requested frame count.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `uint32_t` containing the recommended sample frame count if successful.

<span id="a7c6808dbbfba59c85facd85548a0199c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#gaee750c350655f2fb0fe04c04029e0ff8" class="el">PP_AudioSampleRate</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a7c6808dbbfba59c85facd85548a0199c" class="el">PPB_AudioConfig::RecommendSampleRate</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_config__1__1#a7c6808dbbfba59c85facd85548a0199c" class="el" title="RecommendSampleRate() returns the native sample rate that the browser is using in the backend...">RecommendSampleRate()</a> returns the native sample rate that the browser is using in the backend.

Applications that use the recommended sample rate will have potentially better latency and fidelity. The return value is intended for audio output devices. If the output sample rate cannot be determined, this function can return PP_AUDIOSAMPLERATE_NONE.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td></td></tr></tbody></table>

<!-- -->

**Returns:**  
A `uint32_t` containing the recommended sample frame count if successful.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__audio__config_8h/" class="el">ppb_audio_config.h</a>
