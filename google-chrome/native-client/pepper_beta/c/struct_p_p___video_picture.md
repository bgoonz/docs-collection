---json {"title":"PP\_VideoPicture Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a88b392adb1304481c346b5369c46a26b" class="el">decode_id</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#ae1a9b538db9e422e9f4c9126e941ea25" class="el">texture_id</a></td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a5e2d5f24f86223ad71f2efb83116f118" class="el">texture_target</a></td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a0f3c7022b44215e06f98f771f75641cc" class="el">texture_size</a></td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a1068a6b0ec8376cadcc7b08e607085f2" class="el">visible_rect</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Struct describing a decoded video picture.

The decoded picture data is stored in the GL texture corresponding to |texture\_id|. The plugin can determine which Decode call generated the picture using |decode\_id|.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a88b392adb1304481c346b5369c46a26b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a88b392adb1304481c346b5369c46a26b" class="el">PP_VideoPicture::decode_id</a></td></tr></tbody></table>

|decode\_id| parameter of the Decode call which generated this picture.

See the PPB\_VideoDecoder function Decode() for more details.

<span id="ae1a9b538db9e422e9f4c9126e941ea25" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#ae1a9b538db9e422e9f4c9126e941ea25" class="el">PP_VideoPicture::texture_id</a></td></tr></tbody></table>

Texture ID in the plugin's GL context.

The plugin can use this to render the decoded picture.

<span id="a0f3c7022b44215e06f98f771f75641cc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a0f3c7022b44215e06f98f771f75641cc" class="el">PP_VideoPicture::texture_size</a></td></tr></tbody></table>

Dimensions of the texture holding the decoded picture.

<span id="a5e2d5f24f86223ad71f2efb83116f118" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a5e2d5f24f86223ad71f2efb83116f118" class="el">PP_VideoPicture::texture_target</a></td></tr></tbody></table>

The GL texture target for the decoded picture.

Possible values are: GL\_TEXTURE\_2D GL\_TEXTURE\_RECTANGLE\_ARB GL\_TEXTURE\_EXTERNAL\_OES

The pixel format of the texture is GL\_RGBA.

<span id="a1068a6b0ec8376cadcc7b08e607085f2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture#a1068a6b0ec8376cadcc7b08e607085f2" class="el">PP_VideoPicture::visible_rect</a></td></tr></tbody></table>

The visible subrectangle of the picture.

The plugin should display only this part of the picture.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__codecs_8h/" class="el">pp_codecs.h</a>
