---json {"title":"pp\_file\_info.h File Reference"} ---

Include dependency graph for pp\_file\_info.h:

![](/docs/native-client/pepper_beta/c/pp__file__info_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___file_info/" class="el">PP_FileInfo</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PP_FileInfo</code> struct represents all information about a file, such as size, type, and creation time. <a href="/docs/native-client/pepper_beta/c/struct_p_p___file_info#details">More...</a><br />
</td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga36f6dfbe9c1e98540c5247f790746427" class="el">PP_FileType</a> { <a href="/docs/native-client/pepper_beta/c/group___enums#gga36f6dfbe9c1e98540c5247f790746427acd0d93632365573bba7774b7fe0c62fd" class="el">PP_FILETYPE_REGULAR</a> = 0, <a href="/docs/native-client/pepper_beta/c/group___enums#gga36f6dfbe9c1e98540c5247f790746427a81b606e1444df5fb838a692f891fbde9" class="el">PP_FILETYPE_DIRECTORY</a> = 1, <a href="/docs/native-client/pepper_beta/c/group___enums#gga36f6dfbe9c1e98540c5247f790746427a9e3863ab973d8643dcc96708f55df880" class="el">PP_FILETYPE_OTHER</a> = 2 }</td></tr><tr class="even"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a> {<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga87b353f2ec8935c9c3294daff612c145a48e7bd0df8bd086812085be972e963a0" class="el">PP_FILESYSTEMTYPE_INVALID</a> = 0, <a href="/docs/native-client/pepper_beta/c/group___enums#gga87b353f2ec8935c9c3294daff612c145aa21f18053ba5b3594a0b5373074742c2" class="el">PP_FILESYSTEMTYPE_EXTERNAL</a> = 1, <a href="/docs/native-client/pepper_beta/c/group___enums#gga87b353f2ec8935c9c3294daff612c145a4c51625a4c977d3fab0c4dd28127603c" class="el">PP_FILESYSTEMTYPE_LOCALPERSISTENT</a> = 2, <a href="/docs/native-client/pepper_beta/c/group___enums#gga87b353f2ec8935c9c3294daff612c145abefda8d47a5cd9b8918f012c34496ca9" class="el">PP_FILESYSTEMTYPE_LOCALTEMPORARY</a> = 3,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga87b353f2ec8935c9c3294daff612c145aeceec88ea91ee70c499ff39119dd33b5" class="el">PP_FILESYSTEMTYPE_ISOLATED</a> = 4<br />
}</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga36f6dfbe9c1e98540c5247f790746427" class="el">PP_FileType</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a></td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___structs#gad224cb61c5859f6655b274eff7328664" class="el">PP_FileInfo</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines three enumerations for use in the PPAPI C file IO APIs.
