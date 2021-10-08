---json {"title":"PPB\_FileRef Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a10924f2900841919002972972567df40" class="el">Create</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_system, const char *path)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a53f053134366e9491aee0b88e08346c8" class="el">IsFileRef</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#acf8cefbf96f2e8ec6b3acd7233dbcce4" class="el">GetFileSystemType</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#ad58bd00ff6a93829b810e4bb4a2ba1af" class="el">GetName</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#aafb00e9a6100b5a1490819606ed36451" class="el">GetPath</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#af6cfee4cde7c6d96aec1fd49d3768113" class="el">GetParent</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a829f880110d9d0756552a7070a08ed33" class="el">MakeDirectory</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> directory_ref, int32_t make_directory_flags, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a7a83c853e8066a47eb7f222967ac4559" class="el">Touch</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_access_time, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_modified_time, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#afe27a664ce6b576ae754ed3122f83cae" class="el">Delete</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a5139b53dae2953f5e3ec18a3b4ad93fa" class="el">Rename</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> new_file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#abc723bde3892c6e5d323497070a08a60" class="el">Query</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___file_info/" class="el">PP_FileInfo</a> *info, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#adf5ee82e600680aae53cd70e39e9a568" class="el">ReadDirectoryEntries</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_FileRef` struct represents a "weak pointer" to a file in a file system.

This struct contains a `PP_FileSystemType` identifier and a file path string.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a10924f2900841919002972972567df40" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a10924f2900841919002972972567df40" class="el">PPB_FileRef::Create</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_system, const char *path)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a10924f2900841919002972972567df40" class="el" title="Create() creates a weak pointer to a file in the given file system.">Create()</a> creates a weak pointer to a file in the given file system.

File paths are POSIX style.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a file system.</td></tr><tr class="even"><td>[in]</td><td>path</td><td>A path to the file. Must begin with a '/' character.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a file reference if successful or 0 if the path is malformed.

<span id="afe27a664ce6b576ae754ed3122f83cae" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#afe27a664ce6b576ae754ed3122f83cae" class="el">PPB_FileRef::Delete</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#afe27a664ce6b576ae754ed3122f83cae" class="el" title="Delete() deletes a file or directory.">Delete()</a> deletes a file or directory.

If `file_ref` refers to a directory, then the directory must be empty. It is an error to delete a file or directory that is in use. It is not valid to delete a file in the external file system.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#afe27a664ce6b576ae754ed3122f83cae" class="el" title="Delete() deletes a file or directory.">Delete()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="acf8cefbf96f2e8ec6b3acd7233dbcce4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#acf8cefbf96f2e8ec6b3acd7233dbcce4" class="el">PPB_FileRef::GetFileSystemType</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#acf8cefbf96f2e8ec6b3acd7233dbcce4" class="el" title="GetFileSystemType() returns the type of the file system.">GetFileSystemType()</a> returns the type of the file system.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_FileSystemType` with the file system type if valid or `PP_FILESYSTEMTYPE_INVALID` if the provided resource is not a valid file reference.

<span id="ad58bd00ff6a93829b810e4bb4a2ba1af" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#ad58bd00ff6a93829b810e4bb4a2ba1af" class="el">PPB_FileRef::GetName</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#ad58bd00ff6a93829b810e4bb4a2ba1af" class="el" title="GetName() returns the name of the file.">GetName()</a> returns the name of the file.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` containing the name of the file. The value returned by this function does not include any path components (such as the name of the parent directory, for example). It is just the name of the file. Use <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#aafb00e9a6100b5a1490819606ed36451" class="el" title="GetPath() returns the absolute path of the file.">GetPath()</a> to get the full file path.

<span id="af6cfee4cde7c6d96aec1fd49d3768113" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#af6cfee4cde7c6d96aec1fd49d3768113" class="el">PPB_FileRef::GetParent</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#af6cfee4cde7c6d96aec1fd49d3768113" class="el" title="GetParent() returns the parent directory of this file.">GetParent()</a> returns the parent directory of this file.

If `file_ref` points to the root of the filesystem, then the root is returned.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` containing the parent directory of the file. This function fails if the file system type is `PP_FileSystemType_External`.

<span id="aafb00e9a6100b5a1490819606ed36451" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#aafb00e9a6100b5a1490819606ed36451" class="el">PPB_FileRef::GetPath</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#aafb00e9a6100b5a1490819606ed36451" class="el" title="GetPath() returns the absolute path of the file.">GetPath()</a> returns the absolute path of the file.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` containing the absolute path of the file. This function fails if the file system type is `PP_FileSystemType_External`.

<span id="a53f053134366e9491aee0b88e08346c8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a53f053134366e9491aee0b88e08346c8" class="el">PPB_FileRef::IsFileRef</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a53f053134366e9491aee0b88e08346c8" class="el" title="IsFileRef() determines if the provided resource is a file reference.">IsFileRef()</a> determines if the provided resource is a file reference.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `PPB_FileRef`, `PP_FALSE` if the resource is invalid or some type other than `PPB_FileRef`.

<span id="a829f880110d9d0756552a7070a08ed33" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a829f880110d9d0756552a7070a08ed33" class="el">PPB_FileRef::MakeDirectory</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> directory_ref, int32_t make_directory_flags, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a829f880110d9d0756552a7070a08ed33" class="el" title="MakeDirectory() makes a new directory in the file system according to the given make_directory_flags...">MakeDirectory()</a> makes a new directory in the file system according to the given `make_directory_flags`, which is a bit-mask of the `PP_MakeDirectoryFlags` values.

It is not valid to make a directory in the external file system.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="even"><td>[in]</td><td>make_directory_flags</td><td>A bit-mask of the <code>PP_MakeDirectoryFlags</code> values.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a829f880110d9d0756552a7070a08ed33" class="el" title="MakeDirectory() makes a new directory in the file system according to the given make_directory_flags...">MakeDirectory()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="abc723bde3892c6e5d323497070a08a60" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#abc723bde3892c6e5d323497070a08a60" class="el">PPB_FileRef::Query</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___file_info/" class="el">PP_FileInfo</a> *info, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#abc723bde3892c6e5d323497070a08a60" class="el" title="Query() queries info about a file or directory.">Query()</a> queries info about a file or directory.

You must have access to read this file or directory if it exists in the external filesystem.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="even"><td>[out]</td><td>info</td><td>A pointer to a <code>PP_FileInfo</code> which will be populated with information about the file or directory.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#abc723bde3892c6e5d323497070a08a60" class="el" title="Query() queries info about a file or directory.">Query()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="adf5ee82e600680aae53cd70e39e9a568" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#adf5ee82e600680aae53cd70e39e9a568" class="el">PPB_FileRef::ReadDirectoryEntries</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> output, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#adf5ee82e600680aae53cd70e39e9a568" class="el" title="ReadDirectoryEntries() reads all entries in a directory.">ReadDirectoryEntries()</a> reads all entries in a directory.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a directory reference.</td></tr><tr class="even"><td>[in]</td><td>output</td><td>An output array which will receive <code>PP_DirectoryEntry</code> objects on success.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to run on completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a5139b53dae2953f5e3ec18a3b4ad93fa" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a5139b53dae2953f5e3ec18a3b4ad93fa" class="el">PPB_FileRef::Rename</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, <a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> new_file_ref, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a5139b53dae2953f5e3ec18a3b4ad93fa" class="el" title="Rename() renames a file or directory.">Rename()</a> renames a file or directory.

Arguments `file_ref` and `new_file_ref` must both refer to files in the same file system. It is an error to rename a file or directory that is in use. It is not valid to rename a file in the external file system.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="even"><td>[in]</td><td>new_file_ref</td><td>A <code>PP_Resource</code> corresponding to a new file reference.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a5139b53dae2953f5e3ec18a3b4ad93fa" class="el" title="Rename() renames a file or directory.">Rename()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a7a83c853e8066a47eb7f222967ac4559" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a7a83c853e8066a47eb7f222967ac4559" class="el">PPB_FileRef::Touch</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_access_time, <a href="/docs/native-client/pepper_dev/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_modified_time, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a7a83c853e8066a47eb7f222967ac4559" class="el" title="Touch() Updates time stamps for a file.">Touch()</a> Updates time stamps for a file.

You must have write access to the file if it exists in the external filesystem.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="even"><td>[in]</td><td>last_access_time</td><td>The last time the file was accessed.</td></tr><tr class="odd"><td>[in]</td><td>last_modified_time</td><td>The last time the file was modified.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_ref__1__2#a7a83c853e8066a47eb7f222967ac4559" class="el" title="Touch() Updates time stamps for a file.">Touch()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__file__ref_8h/" class="el">ppb_file_ref.h</a>
