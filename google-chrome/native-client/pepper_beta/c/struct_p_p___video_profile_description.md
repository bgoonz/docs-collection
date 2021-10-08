---json {"title":"PP\_VideoProfileDescription Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#aa4cf8bf248f49de606d5bda97c5b4ae1" class="el">profile</a></td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#aa53694c107dc67256986b95e62ca13a2" class="el">max_resolution</a></td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#a21f8d2e8f5b995afb27edd43667f3eed" class="el">max_framerate_numerator</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#aa4b5113713acbb32d92145ac9f3a925f" class="el">max_framerate_denominator</a></td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#a10da7a8d059171fcf5bd907a6d9c0e60" class="el">hardware_accelerated</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Supported video profile information.

See the PPB\_VideoEncoder function GetSupportedProfiles() for more details.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a10da7a8d059171fcf5bd907a6d9c0e60" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#a10da7a8d059171fcf5bd907a6d9c0e60" class="el">PP_VideoProfileDescription::hardware_accelerated</a></td></tr></tbody></table>

Whether the profile is hardware accelerated.

<span id="aa4b5113713acbb32d92145ac9f3a925f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#aa4b5113713acbb32d92145ac9f3a925f" class="el">PP_VideoProfileDescription::max_framerate_denominator</a></td></tr></tbody></table>

The denominator of the maximum frame rate.

<span id="a21f8d2e8f5b995afb27edd43667f3eed" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#a21f8d2e8f5b995afb27edd43667f3eed" class="el">PP_VideoProfileDescription::max_framerate_numerator</a></td></tr></tbody></table>

The numerator of the maximum frame rate.

<span id="aa53694c107dc67256986b95e62ca13a2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#aa53694c107dc67256986b95e62ca13a2" class="el">PP_VideoProfileDescription::max_resolution</a></td></tr></tbody></table>

Dimensions of the maximum resolution of video frames, in pixels.

<span id="aa4cf8bf248f49de606d5bda97c5b4ae1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description#aa4cf8bf248f49de606d5bda97c5b4ae1" class="el">PP_VideoProfileDescription::profile</a></td></tr></tbody></table>

The codec profile.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__codecs_8h/" class="el">pp_codecs.h</a>
