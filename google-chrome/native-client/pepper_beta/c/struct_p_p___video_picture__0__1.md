—json {“title”:“PP\_VideoPicture Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#a5745b95f0df115201c6ac1eab564cf2e" class="el">decode_id</a></td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#a8ee7a6fdddbf71d429a16f7779af6f0f" class="el">texture_id</a></td></tr><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#af73723a3d48c5b8ae027826dccfdc88c" class="el">texture_target</a></td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#aeed32ff6cc3c52d51b0a5179904e5676" class="el">texture_size</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Struct describing a decoded video picture.

The decoded picture data is stored in the GL texture corresponding to |texture\_id|. The plugin can determine which Decode call generated the picture using |decode\_id|.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a5745b95f0df115201c6ac1eab564cf2e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#a5745b95f0df115201c6ac1eab564cf2e" class="el">PP_VideoPicture::decode_id</a></td></tr></tbody></table>

|decode\_id| parameter of the Decode call which generated this picture.

See the PPB\_VideoDecoder function Decode() for more details.

<span id="a8ee7a6fdddbf71d429a16f7779af6f0f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#a8ee7a6fdddbf71d429a16f7779af6f0f" class="el">PP_VideoPicture::texture_id</a></td></tr></tbody></table>

Texture ID in the plugin’s GL context.

The plugin can use this to render the decoded picture.

<span id="aeed32ff6cc3c52d51b0a5179904e5676" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#aeed32ff6cc3c52d51b0a5179904e5676" class="el">PP_VideoPicture::texture_size</a></td></tr></tbody></table>

Dimensions of the texture holding the decoded picture.

<span id="af73723a3d48c5b8ae027826dccfdc88c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___video_picture__0__1#af73723a3d48c5b8ae027826dccfdc88c" class="el">PP_VideoPicture::texture_target</a></td></tr></tbody></table>

The GL texture target for the decoded picture.

Possible values are: GL\_TEXTURE\_2D GL\_TEXTURE\_RECTANGLE\_ARB GL\_TEXTURE\_EXTERNAL\_OES

The pixel format of the texture is GL\_RGBA.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__codecs_8h/" class="el">pp_codecs.h</a>
