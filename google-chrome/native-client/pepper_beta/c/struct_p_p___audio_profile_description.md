---json {"title":"PP_AudioProfileDescription Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#gadadb1eaddb4ea71cb8620db1f4ce301e" class="el">PP_AudioProfile</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a4253ebb9ec2065525a4b9c948111d896" class="el">profile</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a4806e98fc63b158b26b293c4de803667" class="el">max_channels</a></td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a1a340d0676442d0dfad60219c6dd3886" class="el">sample_size</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a266fce27c0c60cd5648ec331da9f04cf" class="el">sample_rate</a></td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a3f77a750a3d903e565deae13d8d814b4" class="el">hardware_accelerated</a></td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

Supported audio profile information.

See the PPB_AudioEncoder function GetSupportedProfiles() for more details.

---

## Field Documentation

<span id="a3f77a750a3d903e565deae13d8d814b4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a3f77a750a3d903e565deae13d8d814b4" class="el">PP_AudioProfileDescription::hardware_accelerated</a></td></tr></tbody></table>

Whether the profile is hardware accelerated.

<span id="a4806e98fc63b158b26b293c4de803667" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a4806e98fc63b158b26b293c4de803667" class="el">PP_AudioProfileDescription::max_channels</a></td></tr></tbody></table>

Maximum number of channels that can be encoded.

<span id="a4253ebb9ec2065525a4b9c948111d896" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#gadadb1eaddb4ea71cb8620db1f4ce301e" class="el">PP_AudioProfile</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a4253ebb9ec2065525a4b9c948111d896" class="el">PP_AudioProfileDescription::profile</a></td></tr></tbody></table>

The codec profile.

<span id="a266fce27c0c60cd5648ec331da9f04cf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a266fce27c0c60cd5648ec331da9f04cf" class="el">PP_AudioProfileDescription::sample_rate</a></td></tr></tbody></table>

Sampling rate that can be encoded.

<span id="a1a340d0676442d0dfad60219c6dd3886" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___audio_profile_description#a1a340d0676442d0dfad60219c6dd3886" class="el">PP_AudioProfileDescription::sample_size</a></td></tr></tbody></table>

Sample size.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/pp__codecs_8h/" class="el">pp_codecs.h</a>
