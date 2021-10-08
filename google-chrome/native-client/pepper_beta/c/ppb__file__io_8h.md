---json {"title":"ppb_file_io.h File Reference"} ---

Include dependency graph for ppb_file_io.h:

![](/docs/native-client/pepper_beta/c/ppb__file__io_8h__incl.png)

## Data Structures

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___file_i_o__1__1/" class="el">PPB_FileIO</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPB_FileIO</code> struct is used to operate on a regular file (PP_FileType_Regular). <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___file_i_o__1__1#details">More...</a><br />
</td></tr></tbody></table>

## Defines

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__file__io_8h#aee417de3562daef62dbf68ddc16a8477" class="el">PPB_FILEIO_INTERFACE</a>   "PPB_FileIO;1.1"</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/c/ppb__file__io_8h#af7e4bdd4e8dbe17acf89068130f60660" class="el">PPB_FILEIO_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__file__io_8h#aee417de3562daef62dbf68ddc16a8477" class="el">PPB_FILEIO_INTERFACE</a></td></tr></tbody></table>

## Typedefs

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___file_i_o__1__1/" class="el">PPB_FileIO</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___interfaces#ga7b7a4f4317a5af9982ba79d60f04db69" class="el">PPB_FileIO</a></td></tr></tbody></table>

## Enumerations

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4c87e6dd19c1d49b66a9b37136a82e82" class="el">PP_FileOpenFlags</a> {<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga4c87e6dd19c1d49b66a9b37136a82e82a9d409b8a19e1a1c90b6c01f45cea8468" class="el">PP_FILEOPENFLAG_READ</a> = 1 &lt;&lt; 0, <a href="/docs/native-client/pepper_beta/c/group___enums#gga4c87e6dd19c1d49b66a9b37136a82e82ad43adf355739f7a82d0f1a884531afbd" class="el">PP_FILEOPENFLAG_WRITE</a> = 1 &lt;&lt; 1, <a href="/docs/native-client/pepper_beta/c/group___enums#gga4c87e6dd19c1d49b66a9b37136a82e82adc826ab2826a482ee2b15cc25d0d9ba2" class="el">PP_FILEOPENFLAG_CREATE</a> = 1 &lt;&lt; 2, <a href="/docs/native-client/pepper_beta/c/group___enums#gga4c87e6dd19c1d49b66a9b37136a82e82afc54dddff300e46f1ea644855abfd3e5" class="el">PP_FILEOPENFLAG_TRUNCATE</a> = 1 &lt;&lt; 3,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga4c87e6dd19c1d49b66a9b37136a82e82a3ffa615692f3b3a2da0f1e04903eefce" class="el">PP_FILEOPENFLAG_EXCLUSIVE</a> = 1 &lt;&lt; 4, <a href="/docs/native-client/pepper_beta/c/group___enums#gga4c87e6dd19c1d49b66a9b37136a82e82a78c13cbbccebfa9c2b8b2f758397795c" class="el">PP_FILEOPENFLAG_APPEND</a> = 1 &lt;&lt; 5<br />
}</td></tr></tbody></table>

## Variables

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4c87e6dd19c1d49b66a9b37136a82e82" class="el">PP_FileOpenFlags</a></td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This file defines the API to create a file i/o object.

---

## Define Documentation

<span id="af7e4bdd4e8dbe17acf89068130f60660" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__file__io_8h#af7e4bdd4e8dbe17acf89068130f60660" class="el">PPB_FILEIO_INTERFACE</a>   <a href="/docs/native-client/pepper_beta/c/ppb__file__io_8h#aee417de3562daef62dbf68ddc16a8477" class="el">PPB_FILEIO_INTERFACE</a></td></tr></tbody></table>

<span id="aee417de3562daef62dbf68ddc16a8477" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/c/ppb__file__io_8h#aee417de3562daef62dbf68ddc16a8477" class="el">PPB_FILEIO_INTERFACE</a>   "PPB_FileIO;1.1"</td></tr></tbody></table>
