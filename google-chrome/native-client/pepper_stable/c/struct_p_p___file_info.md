---json {"title":"PP\_FileInfo Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">int64_t </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a8e477e77e1938f657ae282139f628368" class="el">size</a></td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga36f6dfbe9c1e98540c5247f790746427" class="el">PP_FileType</a> </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a2b38985af2a482ddd196cd40b13378f5" class="el">type</a></td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a> </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a02a26955ced1a31ba23806c7cc22676a" class="el">system_type</a></td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#ae440d0229864ae7eed164cce2e517c1c" class="el">creation_time</a></td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#aa28b1c96d04220ed40f711126032ad20" class="el">last_access_time</a></td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a08c89b213b808c573fbe98079bab7a56" class="el">last_modified_time</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PP_FileInfo` struct represents all information about a file, such as size, type, and creation time.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ae440d0229864ae7eed164cce2e517c1c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#ae440d0229864ae7eed164cce2e517c1c" class="el">PP_FileInfo::creation_time</a></td></tr></tbody></table>

This value represents the creation time of the file.

<span id="aa28b1c96d04220ed40f711126032ad20" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#aa28b1c96d04220ed40f711126032ad20" class="el">PP_FileInfo::last_access_time</a></td></tr></tbody></table>

This value represents the last time the file was accessed.

<span id="a08c89b213b808c573fbe98079bab7a56" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a08c89b213b808c573fbe98079bab7a56" class="el">PP_FileInfo::last_modified_time</a></td></tr></tbody></table>

This value represents the last time the file was modified.

<span id="a8e477e77e1938f657ae282139f628368" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int64_t <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a8e477e77e1938f657ae282139f628368" class="el">PP_FileInfo::size</a></td></tr></tbody></table>

This value represents the size of the file measured in bytes.

<span id="a02a26955ced1a31ba23806c7cc22676a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a> <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a02a26955ced1a31ba23806c7cc22676a" class="el">PP_FileInfo::system_type</a></td></tr></tbody></table>

This value represents the file system type of the file as defined by the `PP_FileSystemType` enum.

<span id="a2b38985af2a482ddd196cd40b13378f5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga36f6dfbe9c1e98540c5247f790746427" class="el">PP_FileType</a> <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info#a2b38985af2a482ddd196cd40b13378f5" class="el">PP_FileInfo::type</a></td></tr></tbody></table>

This value represents the type of file as defined by the `PP_FileType` enum.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/pp__file__info_8h/" class="el">pp_file_info.h</a>
