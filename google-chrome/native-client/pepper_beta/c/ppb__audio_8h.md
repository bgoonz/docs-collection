---json {"title":"ppb_audio.h File Reference"} ---

Include dependency graph for ppb_audio.h:

![](/docs/native-client/pepper_beta/c/ppb__audio_8h__incl.png)

## Data Structures

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1/" class="el">PPB_Audio</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPB_Audio</code> interface contains pointers to several functions for handling audio resources. <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1#details">More...</a><br />
</td></tr></tbody></table>

## Defines

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__audio_8h#a05e57cf808f3ccd4467019e20832f28d" class="el">PPB_AUDIO_INTERFACE</a>   "PPB_Audio;1.1"</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__audio_8h#a7d9614327b9f7d6e145eabd5bf2c4ad1" class="el">PPB_AUDIO_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__audio_8h#a05e57cf808f3ccd4467019e20832f28d" class="el">PPB_AUDIO_INTERFACE</a></td></tr></tbody></table>

## Typedefs

<table><tbody><tr class="odd"><td style="text-align: right;">typedef void(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga2ec91970f3cb75769ce631b3b732803e" class="el">PPB_Audio_Callback</a> )(void *sample_buffer, uint32_t buffer_size_in_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> latency, void *user_data)</td></tr><tr class="even"><td style="text-align: right;">typedef struct <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___audio__1__1/" class="el">PPB_Audio</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___interfaces#gaa420ab6e5eec1d780700bb505fe7d7f5" class="el">PPB_Audio</a></td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This file defines the `PPB_Audio` interface, which provides realtime stereo audio streaming capabilities.

---

## Define Documentation

<span id="a7d9614327b9f7d6e145eabd5bf2c4ad1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__audio_8h#a7d9614327b9f7d6e145eabd5bf2c4ad1" class="el">PPB_AUDIO_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__audio_8h#a05e57cf808f3ccd4467019e20832f28d" class="el">PPB_AUDIO_INTERFACE</a></td></tr></tbody></table>

<span id="a05e57cf808f3ccd4467019e20832f28d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__audio_8h#a05e57cf808f3ccd4467019e20832f28d" class="el">PPB_AUDIO_INTERFACE</a>   "PPB_Audio;1.1"</td></tr></tbody></table>
