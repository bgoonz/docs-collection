—json {“title”:“PP\_VideoProfileDescription Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a97e76f7bc9c271fdd8b8964670711f65" class="el">profile</a></td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#ab3ffdab3497ff29df3d31e44c560f2f4" class="el">max_resolution</a></td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a01c7a68c5b96c3d2cc048e35d82330dd" class="el">max_framerate_numerator</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a5339510fd2f94fde1e83f81b9bd47aa8" class="el">max_framerate_denominator</a></td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a4d558d8ca3c8903544cb1f12c07d2a42" class="el">acceleration</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Supported video profile information.

See the PPB\_VideoEncoder function GetSupportedProfiles() for more details.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a4d558d8ca3c8903544cb1f12c07d2a42" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga6a3fd7e22be02521243b52481afadae5" class="el">PP_HardwareAcceleration</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a4d558d8ca3c8903544cb1f12c07d2a42" class="el">PP_VideoProfileDescription::acceleration</a></td></tr></tbody></table>

A value indicating if the profile is available in hardware, software, or both.

<span id="a5339510fd2f94fde1e83f81b9bd47aa8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a5339510fd2f94fde1e83f81b9bd47aa8" class="el">PP_VideoProfileDescription::max_framerate_denominator</a></td></tr></tbody></table>

The denominator of the maximum frame rate.

<span id="a01c7a68c5b96c3d2cc048e35d82330dd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a01c7a68c5b96c3d2cc048e35d82330dd" class="el">PP_VideoProfileDescription::max_framerate_numerator</a></td></tr></tbody></table>

The numerator of the maximum frame rate.

<span id="ab3ffdab3497ff29df3d31e44c560f2f4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#ab3ffdab3497ff29df3d31e44c560f2f4" class="el">PP_VideoProfileDescription::max_resolution</a></td></tr></tbody></table>

Dimensions of the maximum resolution of video frames, in pixels.

<span id="a97e76f7bc9c271fdd8b8964670711f65" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4d50d27186f68b2de578e82162206fea" class="el">PP_VideoProfile</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_profile_description__0__1#a97e76f7bc9c271fdd8b8964670711f65" class="el">PP_VideoProfileDescription::profile</a></td></tr></tbody></table>

The codec profile.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__codecs_8h/" class="el">pp_codecs.h</a>
