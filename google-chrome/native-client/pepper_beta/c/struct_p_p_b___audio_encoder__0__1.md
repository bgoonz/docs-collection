---json {"title":"PPB\_AudioEncoder Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a116d0908bcdd955e33e00cbd9ae04110" class="el">Create</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a63e54ec7e63e940c59c1b365669a5002" class="el">IsAudioEncoder</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a2ad5e2334abb35ede4c413e50e92ec61" class="el">GetSupportedProfiles</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el">Initialize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, uint32_t channels, <a href="/docs/native-client/pepper_beta/c/group___enums#ga78757d4be14d14d17708071a9466afbd" class="el">PP_AudioBuffer_SampleRate</a> input_sample_rate, <a href="/docs/native-client/pepper_beta/c/group___enums#ga2ba5c3a8eed23fa49a73b218b1bce044" class="el">PP_AudioBuffer_SampleSize</a> input_sample_size, <a href="/docs/native-client/pepper_beta/c/group___enums#gadadb1eaddb4ea71cb8620db1f4ce301e" class="el">PP_AudioProfile</a> output_profile, uint32_t initial_bitrate, <a href="/docs/native-client/pepper_beta/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> acceleration, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a49a627f22227a877391f2f569a4490ff" class="el">GetNumberOfSamples</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ac154730ff2248134c73d5155c4a7095f" class="el">GetBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *audio_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a61e9304df6da6bbb97236805d702d0a3" class="el">Encode</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a7386d14006ed634530d0ad2ecdb61529" class="el">GetBitstreamBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_bitstream_buffer/" class="el">PP_AudioBitstreamBuffer</a> *bitstream_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a8046882d9584418d02e017130aa55d80" class="el">RecycleBitstreamBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_bitstream_buffer/" class="el">PP_AudioBitstreamBuffer</a> *bitstream_buffer)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ac5a8cbc3578816a15f3418882b6b720c" class="el">RequestBitrateChange</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, uint32_t bitrate)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ad472829d0944505ce8cfb2a2b6308165" class="el">Close</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Audio encoder interface.

Typical usage:

-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a116d0908bcdd955e33e00cbd9ae04110" class="el" title="Creates a new audio encoder resource.">Create()</a> to create a new audio encoder resource.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a2ad5e2334abb35ede4c413e50e92ec61" class="el" title="Gets an array of supported audio encoder profiles.">GetSupportedProfiles()</a> to determine which codecs and profiles are available.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> to initialize the encoder for a supported profile.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ac154730ff2248134c73d5155c4a7095f" class="el" title="Gets a blank audio buffer (with metadata given by the Initialize() call) which can be filled with aud...">GetBuffer()</a> to get an empty buffer and fill it in, or get an audio buffer from another resource, e.g. `PPB_MediaStreamAudioTrack`.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a61e9304df6da6bbb97236805d702d0a3" class="el" title="Encodes an audio buffer.">Encode()</a> to push the audio buffer to the encoder. If an external buffer is pushed, wait for completion to recycle the buffer.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a7386d14006ed634530d0ad2ecdb61529" class="el" title="Gets the next encoded bitstream buffer from the encoder.">GetBitstreamBuffer()</a> continuously (waiting for each previous call to complete) to pull encoded buffers from the encoder.
-   Call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a8046882d9584418d02e017130aa55d80" class="el" title="Recycles a bitstream buffer back to the encoder.">RecycleBitstreamBuffer()</a> after consuming the data in the bitstream buffer.
-   To destroy the encoder, the plugin should release all of its references to it. Any pending callbacks will abort before the encoder is destroyed.

Available audio codecs vary by platform. All: opus.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ad472829d0944505ce8cfb2a2b6308165" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ad472829d0944505ce8cfb2a2b6308165" class="el">PPB_AudioEncoder::Close</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder)</td></tr></tbody></table>

Closes the audio encoder, and cancels any pending encodes.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` . It is not valid to call any encoder functions after a call to this method. **Note:** Destroying the audio encoder closes it implicitly, so you are not required to call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ad472829d0944505ce8cfb2a2b6308165" class="el" title="Closes the audio encoder, and cancels any pending encodes.">Close()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr></tbody></table>

<span id="a116d0908bcdd955e33e00cbd9ae04110" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a116d0908bcdd955e33e00cbd9ae04110" class="el">PPB_AudioEncoder::Create</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a new audio encoder resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the audio encoder.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to an audio encoder if successful or 0 otherwise.

<span id="a61e9304df6da6bbb97236805d702d0a3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a61e9304df6da6bbb97236805d702d0a3" class="el">PPB_AudioEncoder::Encode</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Encodes an audio buffer.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[in]</td><td>audio_buffer</td><td>The <code>PPB_AudioBuffer</code> to be encoded.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion. Plugins that pass <code>PPB_AudioBuffer</code> resources owned by other resources should wait for completion before reusing them.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> has not successfully completed.

<span id="a7386d14006ed634530d0ad2ecdb61529" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a7386d14006ed634530d0ad2ecdb61529" class="el">PPB_AudioEncoder::GetBitstreamBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_bitstream_buffer/" class="el">PP_AudioBitstreamBuffer</a> *bitstream_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets the next encoded bitstream buffer from the encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[out]</td><td>bitstream_buffer</td><td>A <code>PP_BitstreamBuffer</code> containing encoded audio data.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion. The plugin can call GetBitstreamBuffer from the callback in order to continuously "pull" bitstream buffers from the encoder.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> has not successfully completed. Returns PP\_ERROR\_INPROGRESS if a prior call to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a7386d14006ed634530d0ad2ecdb61529" class="el" title="Gets the next encoded bitstream buffer from the encoder.">GetBitstreamBuffer()</a> has not completed.

<span id="ac154730ff2248134c73d5155c4a7095f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ac154730ff2248134c73d5155c4a7095f" class="el">PPB_AudioEncoder::GetBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> *audio_buffer, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets a blank audio buffer (with metadata given by the <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> call) which can be filled with audio data and passed to the encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[out]</td><td>audio_buffer</td><td>A blank <code>PPB_AudioBuffer</code> resource.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> has not successfully completed.

<span id="a49a627f22227a877391f2f569a4490ff" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a49a627f22227a877391f2f569a4490ff" class="el">PPB_AudioEncoder::GetNumberOfSamples</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder)</td></tr></tbody></table>

Gets the number of audio samples per channel that audio buffers must contain in order to be processed by the encoder.

This will be the number of samples per channels contained in buffers returned by <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ac154730ff2248134c73d5155c4a7095f" class="el" title="Gets a blank audio buffer (with metadata given by the Initialize() call) which can be filled with aud...">GetBuffer()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing the number of samples required, or an error code from `pp_errors.h`. Returns PP\_ERROR\_FAILED if <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> has not successfully completed.

<span id="a2ad5e2334abb35ede4c413e50e92ec61" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a2ad5e2334abb35ede4c413e50e92ec61" class="el">PPB_AudioEncoder::GetSupportedProfiles</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Gets an array of supported audio encoder profiles.

These can be used to choose a profile before calling <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[in]</td><td>output</td><td>A <code>PP_ArrayOutput</code> to receive the supported <code>PP_AudioProfileDescription</code> structs.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
If &gt;= 0, the number of supported profiles returned, otherwise an error code from `pp_errors.h`.

<span id="a676b09b0a98069daea08678a8c9e5d70" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el">PPB_AudioEncoder::Initialize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, uint32_t channels, <a href="/docs/native-client/pepper_beta/c/group___enums#ga78757d4be14d14d17708071a9466afbd" class="el">PP_AudioBuffer_SampleRate</a> input_sample_rate, <a href="/docs/native-client/pepper_beta/c/group___enums#ga2ba5c3a8eed23fa49a73b218b1bce044" class="el">PP_AudioBuffer_SampleSize</a> input_sample_size, <a href="/docs/native-client/pepper_beta/c/group___enums#gadadb1eaddb4ea71cb8620db1f4ce301e" class="el">PP_AudioProfile</a> output_profile, uint32_t initial_bitrate, <a href="/docs/native-client/pepper_beta/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> acceleration, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

Initializes an audio encoder resource.

The plugin should call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a676b09b0a98069daea08678a8c9e5d70" class="el" title="Initializes an audio encoder resource.">Initialize()</a> successfully before calling any of the functions below.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[in]</td><td>channels</td><td>The number of audio channels to encode.</td></tr><tr class="odd"><td>[in]</td><td>input_sampling_rate</td><td>The sampling rate of the input audio buffer.</td></tr><tr class="even"><td>[in]</td><td>input_sample_size</td><td>The sample size of the input audio buffer.</td></tr><tr class="odd"><td>[in]</td><td>output_profile</td><td>A <code>PP_AudioProfile</code> specifying the codec profile of the encoded output stream.</td></tr><tr class="even"><td>[in]</td><td>initial_bitrate</td><td>The initial bitrate for the encoder.</td></tr><tr class="odd"><td>[in]</td><td>acceleration</td><td>A <code>PP_HardwareAcceleration</code> specifying whether to use a hardware accelerated or a software implementation.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. Returns PP\_ERROR\_NOTSUPPORTED if audio encoding is not available, or the requested codec profile is not supported.

<span id="a63e54ec7e63e940c59c1b365669a5002" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a63e54ec7e63e940c59c1b365669a5002" class="el">PPB_AudioEncoder::IsAudioEncoder</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if the given resource is an audio encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> identifying a resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `PPB_AudioEncoder`, `PP_FALSE` if the resource is invalid or some other type.

<span id="a8046882d9584418d02e017130aa55d80" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#a8046882d9584418d02e017130aa55d80" class="el">PPB_AudioEncoder::RecycleBitstreamBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, const struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_bitstream_buffer/" class="el">PP_AudioBitstreamBuffer</a> *bitstream_buffer)</td></tr></tbody></table>

Recycles a bitstream buffer back to the encoder.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[in]</td><td>bitstream_buffer</td><td>A <code>PP_BitstreamBuffer</code> that is no longer needed by the plugin.</td></tr></tbody></table>

<span id="ac5a8cbc3578816a15f3418882b6b720c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_encoder__0__1#ac5a8cbc3578816a15f3418882b6b720c" class="el">PPB_AudioEncoder::RequestBitrateChange</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> audio_encoder, uint32_t bitrate)</td></tr></tbody></table>

Requests a change to the encoding bitrate.

This is only a request, fulfilled on a best-effort basis.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>audio_encoder</td><td>A <code>PP_Resource</code> identifying the audio encoder.</td></tr><tr class="even"><td>[in]</td><td>bitrate</td><td>The requested new bitrate, in bits per second.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__audio__encoder_8h/" class="el">ppb_audio_encoder.h</a>
