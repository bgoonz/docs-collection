---json {"title":"PPB\_FileIO Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aedb8773ba67e4c2a1ed3f3a249bb5e30" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a09429d1ccad3a300cdc459f2ae4816e7" class="el">IsFileIO</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a860b24adbb67188de3fd66db44ff961e" class="el">Open</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, int32_t open_flags, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf7c4d3f2712e5aa436b2ac1588ada02" class="el">Query</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info/" class="el">PP_FileInfo</a> *info, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a9f680131d9df0129d79492eb1b41edfc" class="el">Touch</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_access_time, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_modified_time, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el">Read</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t offset, char *buffer, int32_t bytes_to_read, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a4cbaeff3318200d3913127553ad90aad" class="el">Write</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t offset, const char *buffer, int32_t bytes_to_write, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aea6686b51ee5a9ef40c2442a7faa652f" class="el">SetLength</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t length, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf97d8e09d27253b6eb0b9ca9e7b20b1" class="el">Flush</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#af321f0590ecd269b728106235e260e26" class="el">Close</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a85f0de223c9011c79df5b063ecd4a89f" class="el">ReadToArray</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t offset, int32_t max_read_length, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> *output, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_FileIO` struct is used to operate on a regular file (PP\_FileType\_Regular).

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="af321f0590ecd269b728106235e260e26" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#af321f0590ecd269b728106235e260e26" class="el">PPB_FileIO::Close</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#af321f0590ecd269b728106235e260e26" class="el" title="Close() cancels any IO that may be pending, and closes the FileIO object.">Close()</a> cancels any IO that may be pending, and closes the FileIO object.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. It is not valid to call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a860b24adbb67188de3fd66db44ff961e" class="el" title="Open() opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP_FileOpenFlags values.">Open()</a> again after a call to this method. **Note:** If the FileIO object is destroyed, and it is still open, then it will be implicitly closed, so you are not required to call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#af321f0590ecd269b728106235e260e26" class="el" title="Close() cancels any IO that may be pending, and closes the FileIO object.">Close()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr></tbody></table>

<span id="aedb8773ba67e4c2a1ed3f3a249bb5e30" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aedb8773ba67e4c2a1ed3f3a249bb5e30" class="el">PPB_FileIO::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aedb8773ba67e4c2a1ed3f3a249bb5e30" class="el" title="Create() creates a new FileIO object.">Create()</a> creates a new FileIO object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the file.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a FileIO if successful or 0 if the module is invalid.

<span id="acf97d8e09d27253b6eb0b9ca9e7b20b1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf97d8e09d27253b6eb0b9ca9e7b20b1" class="el">PPB_FileIO::Flush</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf97d8e09d27253b6eb0b9ca9e7b20b1" class="el" title="Flush() flushes changes to disk.">Flush()</a> flushes changes to disk.

This call can be very expensive! The FileIO object must have been opened with write access and there must be no other operations pending.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf97d8e09d27253b6eb0b9ca9e7b20b1" class="el" title="Flush() flushes changes to disk.">Flush()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. PP\_ERROR\_FAILED will be returned if the file isn't opened, and PP\_ERROR\_INPROGRESS will be returned if there is another operation pending.

<span id="a09429d1ccad3a300cdc459f2ae4816e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a09429d1ccad3a300cdc459f2ae4816e7" class="el">PPB_FileIO::IsFileIO</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a09429d1ccad3a300cdc459f2ae4816e7" class="el" title="IsFileIO() determines if the provided resource is a FileIO.">IsFileIO()</a> determines if the provided resource is a FileIO.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a FileIO.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `PPB_FileIO`, `PP_FALSE` if the resource is invalid or some type other than `PPB_FileIO`.

<span id="a860b24adbb67188de3fd66db44ff961e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a860b24adbb67188de3fd66db44ff961e" class="el">PPB_FileIO::Open</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, <a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_ref, int32_t open_flags, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a860b24adbb67188de3fd66db44ff961e" class="el" title="Open() opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP_FileOpenFlags values.">Open()</a> opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the `PP_FileOpenFlags` values.

Upon success, the corresponding file is classified as "in use" by this FileIO object until such time as the FileIO object is closed or destroyed.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a FileIO.</td></tr><tr class="even"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="odd"><td>[in]</td><td>open_flags</td><td>A bit-mask of the <code>PP_FileOpenFlags</code> values.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a860b24adbb67188de3fd66db44ff961e" class="el" title="Open() opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP_FileOpenFlags values.">Open()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="acf7c4d3f2712e5aa436b2ac1588ada02" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf7c4d3f2712e5aa436b2ac1588ada02" class="el">PPB_FileIO::Query</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___file_info/" class="el">PP_FileInfo</a> *info, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf7c4d3f2712e5aa436b2ac1588ada02" class="el" title="Query() queries info about the file opened by this FileIO object.">Query()</a> queries info about the file opened by this FileIO object.

The FileIO object must be opened, and there must be no other operations pending.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a FileIO.</td></tr><tr class="even"><td>[out]</td><td>info</td><td>The <code>PP_FileInfo</code> structure representing all information about the file.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf7c4d3f2712e5aa436b2ac1588ada02" class="el" title="Query() queries info about the file opened by this FileIO object.">Query()</a>. <code>info</code> must remain valid until after the callback runs. If you pass a blocking callback, <code>info</code> must remain valid until after <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#acf7c4d3f2712e5aa436b2ac1588ada02" class="el" title="Query() queries info about the file opened by this FileIO object.">Query()</a> returns.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. PP\_ERROR\_FAILED will be returned if the file isn't opened, and PP\_ERROR\_INPROGRESS will be returned if there is another operation pending.

<span id="ad9295a1eb59a2b31df2e522ec7794f0d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el">PPB_FileIO::Read</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t offset, char *buffer, int32_t bytes_to_read, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el" title="Read() reads from an offset in the file.">Read()</a> reads from an offset in the file.

The size of the buffer must be large enough to hold the specified number of bytes to read. This function might perform a partial read, meaning all the requested bytes might not be returned, even if the end of the file has not been reached. The FileIO object must have been opened with read access.

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a85f0de223c9011c79df5b063ecd4a89f" class="el" title="ReadToArray() reads from an offset in the file.">ReadToArray()</a> is preferred to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el" title="Read() reads from an offset in the file.">Read()</a> when doing asynchronous operations.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr><tr class="even"><td>[in]</td><td>offset</td><td>The offset into the file.</td></tr><tr class="odd"><td>[in]</td><td>buffer</td><td>The buffer to hold the specified number of bytes read.</td></tr><tr class="even"><td>[in]</td><td>bytes_to_read</td><td>The number of bytes to read from <code>offset</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el" title="Read() reads from an offset in the file.">Read()</a>. <code>buffer</code> must remain valid until after the callback runs. If you pass a blocking callback, <code>buffer</code> must remain valid until after <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el" title="Read() reads from an offset in the file.">Read()</a> returns.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of bytes read or an error code from `pp_errors.h`. If the return value is 0, then end-of-file was reached. It is valid to call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#ad9295a1eb59a2b31df2e522ec7794f0d" class="el" title="Read() reads from an offset in the file.">Read()</a> multiple times with a completion callback to queue up parallel reads from the file, but pending reads cannot be interleaved with other operations.

<span id="a85f0de223c9011c79df5b063ecd4a89f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a85f0de223c9011c79df5b063ecd4a89f" class="el">PPB_FileIO::ReadToArray</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t offset, int32_t max_read_length, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a> *output, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a85f0de223c9011c79df5b063ecd4a89f" class="el" title="ReadToArray() reads from an offset in the file.">ReadToArray()</a> reads from an offset in the file.

A <a href="/docs/native-client/pepper_stable/c/struct_p_p___array_output/" class="el" title="A structure that defines a way for the browser to return arrays of data to the plugin.">PP_ArrayOutput</a> must be provided so that output will be stored in its allocated buffer. This function might perform a partial read. The FileIO object must have been opened with read access.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr><tr class="even"><td>[in]</td><td>offset</td><td>The offset into the file.</td></tr><tr class="odd"><td>[in]</td><td>max_read_length</td><td>The maximum number of bytes to read from <code>offset</code>.</td></tr><tr class="even"><td>[in]</td><td>output</td><td>A <code>PP_ArrayOutput</code> to hold the output data.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a85f0de223c9011c79df5b063ecd4a89f" class="el" title="ReadToArray() reads from an offset in the file.">ReadToArray()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of bytes read or an error code from `pp_errors.h`. If the return value is 0, then end-of-file was reached. It is valid to call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a85f0de223c9011c79df5b063ecd4a89f" class="el" title="ReadToArray() reads from an offset in the file.">ReadToArray()</a> multiple times with a completion callback to queue up parallel reads from the file, but pending reads cannot be interleaved with other operations.

<span id="aea6686b51ee5a9ef40c2442a7faa652f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aea6686b51ee5a9ef40c2442a7faa652f" class="el">PPB_FileIO::SetLength</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t length, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aea6686b51ee5a9ef40c2442a7faa652f" class="el" title="SetLength() sets the length of the file.">SetLength()</a> sets the length of the file.

If the file size is extended, then the extended area of the file is zero-filled. The FileIO object must have been opened with write access and there must be no other operations pending.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr><tr class="even"><td>[in]</td><td>length</td><td>The length of the file to be set.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#aea6686b51ee5a9ef40c2442a7faa652f" class="el" title="SetLength() sets the length of the file.">SetLength()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. PP\_ERROR\_FAILED will be returned if the file isn't opened, and PP\_ERROR\_INPROGRESS will be returned if there is another operation pending.

<span id="a9f680131d9df0129d79492eb1b41edfc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a9f680131d9df0129d79492eb1b41edfc" class="el">PPB_FileIO::Touch</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_access_time, <a href="/docs/native-client/pepper_stable/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a> last_modified_time, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a9f680131d9df0129d79492eb1b41edfc" class="el" title="Touch() Updates time stamps for the file opened by this FileIO object.">Touch()</a> Updates time stamps for the file opened by this FileIO object.

This function will fail if the FileIO object has not been opened. The FileIO object must be opened, and there must be no other operations pending.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr><tr class="even"><td>[in]</td><td>last_access_time</td><td>The last time the FileIO was accessed.</td></tr><tr class="odd"><td>[in]</td><td>last_modified_time</td><td>The last time the FileIO was modified.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a9f680131d9df0129d79492eb1b41edfc" class="el" title="Touch() Updates time stamps for the file opened by this FileIO object.">Touch()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`. PP\_ERROR\_FAILED will be returned if the file isn't opened, and PP\_ERROR\_INPROGRESS will be returned if there is another operation pending.

<span id="a4cbaeff3318200d3913127553ad90aad" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a4cbaeff3318200d3913127553ad90aad" class="el">PPB_FileIO::Write</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_io, int64_t offset, const char *buffer, int32_t bytes_to_write, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a4cbaeff3318200d3913127553ad90aad" class="el" title="Write() writes to an offset in the file.">Write()</a> writes to an offset in the file.

This function might perform a partial write. The FileIO object must have been opened with write access.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file FileIO.</td></tr><tr class="even"><td>[in]</td><td>offset</td><td>The offset into the file.</td></tr><tr class="odd"><td>[in]</td><td>buffer</td><td>The buffer to hold the specified number of bytes read.</td></tr><tr class="even"><td>[in]</td><td>bytes_to_write</td><td>The number of bytes to write to <code>offset</code>.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a4cbaeff3318200d3913127553ad90aad" class="el" title="Write() writes to an offset in the file.">Write()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of bytes written or an error code from `pp_errors.h`. If the return value is 0, then end-of-file was reached. It is valid to call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___file_i_o__1__1#a4cbaeff3318200d3913127553ad90aad" class="el" title="Write() writes to an offset in the file.">Write()</a> multiple times with a completion callback to queue up parallel writes to the file, but pending writes cannot be interleaved with other operations.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__file__io_8h/" class="el">ppb_file_io.h</a>
