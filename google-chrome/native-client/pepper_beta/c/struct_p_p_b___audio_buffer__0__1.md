---json {"title":"PPB_AudioBuffer Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a0d62d7fb07cae07004bbc6fbe1f14dcd" class="el">IsAudioBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a1072f128761e1869ca8bd8e31fc18b51" class="el">GetTimestamp</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a03113971cf40f80274d4475e335fbea3" class="el">SetTimestamp</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> timestamp)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga78757d4be14d14d17708071a9466afbd" class="el">PP_AudioBuffer_SampleRate</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a69f6c324fcc347f24f064f38a19d2465" class="el">GetSampleRate</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga2ba5c3a8eed23fa49a73b218b1bce044" class="el">PP_AudioBuffer_SampleSize</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a71f0374949280835b5db4503c4ef8e15" class="el">GetSampleSize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a6dd92974e5543ade219fff80b8bb1a38" class="el">GetNumberOfChannels</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#abba9e5c66fb8fb01771002b9667ec80f" class="el">GetNumberOfSamples</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="even"><td style="text-align: right;">void *(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a6c2b7a87ea483ee31950efef6de57201" class="el">GetDataBuffer</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr><tr class="odd"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#aad58d200bfdd1e1ed1e1cb6884a10570" class="el">GetDataBufferSize</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

---

## Field Documentation

<span id="a6c2b7a87ea483ee31950efef6de57201" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void*(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a6c2b7a87ea483ee31950efef6de57201" class="el">PPB_AudioBuffer::GetDataBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the data buffer containing the audio samples.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A pointer to the beginning of the data buffer.

<span id="aad58d200bfdd1e1ed1e1cb6884a10570" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#aad58d200bfdd1e1ed1e1cb6884a10570" class="el">PPB_AudioBuffer::GetDataBufferSize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the size of the data buffer in bytes.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The size of the data buffer in bytes.

<span id="a6dd92974e5543ade219fff80b8bb1a38" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a6dd92974e5543ade219fff80b8bb1a38" class="el">PPB_AudioBuffer::GetNumberOfChannels</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the number of channels in the audio buffer.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of channels in the audio buffer.

<span id="abba9e5c66fb8fb01771002b9667ec80f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#abba9e5c66fb8fb01771002b9667ec80f" class="el">PPB_AudioBuffer::GetNumberOfSamples</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the number of samples in the audio buffer.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of samples in the audio buffer. For example, at a sampling rate of 44,100 Hz in stereo audio, a buffer containing 4410 \* 2 samples would have a duration of 100 milliseconds.

<span id="a69f6c324fcc347f24f064f38a19d2465" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga78757d4be14d14d17708071a9466afbd" class="el">PP_AudioBuffer_SampleRate</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a69f6c324fcc347f24f064f38a19d2465" class="el">PPB_AudioBuffer::GetSampleRate</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the sample rate of the audio buffer.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The sample rate of the audio buffer.

<span id="a71f0374949280835b5db4503c4ef8e15" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga2ba5c3a8eed23fa49a73b218b1bce044" class="el">PP_AudioBuffer_SampleSize</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a71f0374949280835b5db4503c4ef8e15" class="el">PPB_AudioBuffer::GetSampleSize</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the sample size of the audio buffer.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The sample size of the audio buffer.

<span id="a1072f128761e1869ca8bd8e31fc18b51" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a1072f128761e1869ca8bd8e31fc18b51" class="el">PPB_AudioBuffer::GetTimestamp</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer)</td></tr></tbody></table>

Gets the timestamp of the audio buffer.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_TimeDelta` containing the timestamp of the audio buffer. Given in seconds since the start of the containing audio stream.

<span id="a0d62d7fb07cae07004bbc6fbe1f14dcd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a0d62d7fb07cae07004bbc6fbe1f14dcd" class="el">PPB_AudioBuffer::IsAudioBuffer</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

Determines if a resource is an AudioBuffer resource.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>The <code>PP_Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` with `PP_TRUE` if the given resource is an AudioBuffer resource or `PP_FALSE` otherwise.

<span id="a03113971cf40f80274d4475e335fbea3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio_buffer__0__1#a03113971cf40f80274d4475e335fbea3" class="el">PPB_AudioBuffer::SetTimestamp</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> buffer, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> timestamp)</td></tr></tbody></table>

Sets the timestamp of the audio buffer.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>buffer</td><td>A <code>PP_Resource</code> corresponding to an audio buffer resource.</td></tr><tr class="even"><td>[in]</td><td>timestamp</td><td>A <code>PP_TimeDelta</code> containing the timestamp of the audio buffer. Given in seconds since the start of the containing audio stream.</td></tr></tbody></table>

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__audio__buffer_8h/" class="el">ppb_audio_buffer.h</a>
