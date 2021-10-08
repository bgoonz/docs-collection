---json {"title":"PP_ImageDataDesc Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc#a0a621fd3704227310f14ba47323a80e1" class="el">format</a></td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc#ad5b1dc56bf041929e1b54c7c96d1bd85" class="el">size</a></td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc#a27f743f8f59a611853815865681bead6" class="el">stride</a></td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `PP_ImageDataDesc` structure represents a description of image data.

---

## Field Documentation

<span id="a0a621fd3704227310f14ba47323a80e1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga2ee7ad01799553e5f17bdaa35dd952ee" class="el">PP_ImageDataFormat</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc#a0a621fd3704227310f14ba47323a80e1" class="el">PP_ImageDataDesc::format</a></td></tr></tbody></table>

This value represents one of the image data types in the `PP_ImageDataFormat` enum.

<span id="ad5b1dc56bf041929e1b54c7c96d1bd85" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc#ad5b1dc56bf041929e1b54c7c96d1bd85" class="el">PP_ImageDataDesc::size</a></td></tr></tbody></table>

This value represents the size of the bitmap in pixels.

<span id="a27f743f8f59a611853815865681bead6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___image_data_desc#a27f743f8f59a611853815865681bead6" class="el">PP_ImageDataDesc::stride</a></td></tr></tbody></table>

This value represents the row width in bytes.

This may be different than width \* 4 since there may be padding at the end of the lines.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__image__data_8h/" class="el">ppb_image_data.h</a>
