---json {"title":"PPB_Audio Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a9714ecad5eeefae9d5d98c5ea29ac5ce" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> config, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga2ec91970f3cb75769ce631b3b732803e" class="el">PPB_Audio_Callback</a> audio_callback, void *user_data)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#af516cae7c19f1439d630fd58049db85b" class="el">IsAudio</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a85615368f68e629eaeef6507e6b5f8b3" class="el">GetCurrentConfig</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a764b5ba357af0f781839c4f696615a23" class="el">StartPlayback</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a82049c2fbe4f151839fd13f8d10e8395" class="el">StopPlayback</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `PPB_Audio` interface contains pointers to several functions for handling audio resources.

Refer to the [Audio](/docs/native-client/devguide/coding/audio) chapter in the Developer's Guide for information on using this interface. Please see descriptions for each `PPB_Audio` and `PPB_AudioConfig` function for more details. A C example using `PPB_Audio` and `PPB_AudioConfig` follows.

**Example:**

     void audio_callback(void* sample_buffer,
                         uint32_t buffer_size_in_bytes,
                         void* user_data) {
       ... quickly fill in the buffer with samples and return to caller ...
      }

     ...Assume the application has cached the audio configuration interface in
     audio_config_interface and the audio interface in
     audio_interface...

     uint32_t count = audio_config_interface->RecommendSampleFrameCount(
         PP_AUDIOSAMPLERATE_44100, 4096);
     PP_Resource pp_audio_config = audio_config_interface->CreateStereo16Bit(
         pp_instance, PP_AUDIOSAMPLERATE_44100, count);
     PP_Resource pp_audio = audio_interface->Create(pp_instance, pp_audio_config,
         audio_callback, NULL);
     audio_interface->StartPlayback(pp_audio);

     ...audio_callback() will now be periodically invoked on a separate thread...

---

## Field Documentation

<span id="a9714ecad5eeefae9d5d98c5ea29ac5ce" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a9714ecad5eeefae9d5d98c5ea29ac5ce" class="el">PPB_Audio::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> config, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga2ec91970f3cb75769ce631b3b732803e" class="el">PPB_Audio_Callback</a> audio_callback, void *user_data)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a9714ecad5eeefae9d5d98c5ea29ac5ce" class="el" title="Create() creates an audio resource.">Create()</a> creates an audio resource.

No sound will be heard until <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a764b5ba357af0f781839c4f696615a23" class="el" title="StartPlayback() starts the playback of the audio resource and begins periodically calling the callbac...">StartPlayback()</a> is called. The callback is called with the buffer address and given user data whenever the buffer needs to be filled. From within the callback, you should not call `PPB_Audio` functions. The callback will be called on a different thread than the one which created the interface. For performance-critical applications (i.e. low-latency audio), the callback should avoid blocking or calling functions that can obtain locks, such as malloc. The layout and the size of the buffer passed to the audio callback will be determined by the device configuration and is specified in the `AudioConfig` documentation.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to an audio config resource.</td></tr><tr class="odd"><td>[in]</td><td>audio_callback</td><td>A <code>PPB_Audio_Callback</code> callback function that the browser calls when it needs more samples to play.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>A pointer to user data used in the callback function.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the audio resource if successful or 0 if the configuration cannot be honored or the callback is null.

<span id="a85615368f68e629eaeef6507e6b5f8b3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a85615368f68e629eaeef6507e6b5f8b3" class="el">PPB_Audio::GetCurrentConfig</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio)</td></tr></tbody></table>

GetCurrrentConfig() returns an audio config resource for the given audio resource.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the audio config resource if successful.

<span id="af516cae7c19f1439d630fd58049db85b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#af516cae7c19f1439d630fd58049db85b" class="el">PPB_Audio::IsAudio</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#af516cae7c19f1439d630fd58049db85b" class="el" title="IsAudio() determines if the provided resource is an audio resource.">IsAudio()</a> determines if the provided resource is an audio resource.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a generic resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` containing containing `PP_TRUE` if the given resource is an Audio resource, otherwise `PP_FALSE`.

<span id="a764b5ba357af0f781839c4f696615a23" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a764b5ba357af0f781839c4f696615a23" class="el">PPB_Audio::StartPlayback</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a764b5ba357af0f781839c4f696615a23" class="el" title="StartPlayback() starts the playback of the audio resource and begins periodically calling the callbac...">StartPlayback()</a> starts the playback of the audio resource and begins periodically calling the callback.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` containing `PP_TRUE` if successful, otherwise `PP_FALSE`. Also returns `PP_TRUE` (and be a no-op) if called while playback is already in progress.

<span id="a82049c2fbe4f151839fd13f8d10e8395" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a82049c2fbe4f151839fd13f8d10e8395" class="el">PPB_Audio::StopPlayback</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a82049c2fbe4f151839fd13f8d10e8395" class="el" title="StopPlayback() stops the playback of the audio resource.">StopPlayback()</a> stops the playback of the audio resource.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to an audio resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` containing `PP_TRUE` if successful, otherwise `PP_FALSE`. Also returns `PP_TRUE` (and is a no-op) if called while playback is already stopped. If a callback is in progress, <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#a82049c2fbe4f151839fd13f8d10e8395" class="el" title="StopPlayback() stops the playback of the audio resource.">StopPlayback()</a> will block until the callback completes.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__audio_8h/" class="el">ppb_audio.h</a>
