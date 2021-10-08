---json {"title":"pp::FileRef Class Reference"} ---

Inheritance diagram for pp::FileRef:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a4c79db956157379aa877e57ff06d2c10" class="el">FileRef</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a3345910589954a8fb573cdf2c82166b0" class="el">FileRef</a> (PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a50652a877b8c02c736f86b1d69fc9b11" class="el">FileRef</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a95aad2e3c8d9b52b1ac09279c8cf8113" class="el">FileRef</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_system/" class="el">FileSystem</a> &amp;file_system, const char *path)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a9a66f16e7d9a4198c206144bc3498ec5" class="el">FileRef</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">PP_FileSystemType </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a71de4e20d117efcf4ac8000c2149e3f8" class="el">GetFileSystemType</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#acb186b79d906675e288ff5d0d0a7eab2" class="el">GetName</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a657da250b3ff47ca8f1c616f9ebee6a0" class="el">GetPath</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a514534c1a31732e328e062bdaa194919" class="el">GetParent</a> () const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#afb1a20f9864801457db28d32ab1d7104" class="el">MakeDirectory</a> (int32_t make_directory_flags, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab8e5d24d96c7408b140b74aa0ed8d7ca" class="el">Touch</a> (PP_Time last_access_time, PP_Time last_modified_time, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#abfdb9c3db04b0ef2591953f79c255873" class="el">Delete</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab1d7f8a63643561a6529952faa881505" class="el">Rename</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp;new_file_ref, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a6de22adc35e4485dfba663dad64c15fb" class="el">Query</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; PP_FileInfo &gt; &amp;callback)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#af16f7bba00d624a16a1d9b9b09347c8c" class="el">ReadDirectoryEntries</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; std::vector&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &gt; &gt; &amp;callback)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `FileRef` class represents a "weak pointer" to a file in a file system.

---

## Constructor & Destructor Documentation

<span id="a4c79db956157379aa877e57ff06d2c10" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a4c79db956157379aa877e57ff06d2c10" class="el">pp::FileRef::FileRef</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `FileRef` object.

<span id="a3345910589954a8fb573cdf2c82166b0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a4c79db956157379aa877e57ff06d2c10" class="el">pp::FileRef::FileRef</a></td><td>(</td><td>PP_Resource </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used when you have an existing PP_Resource for a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el" title="The FileRef class represents a &quot;weak pointer&quot; to a file in a file system.">FileRef</a> and which to create a C++ object that takes an additional reference to the resource.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A PP_Resource corresponding to file reference.</td></tr></tbody></table>

<span id="a50652a877b8c02c736f86b1d69fc9b11" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a4c79db956157379aa877e57ff06d2c10" class="el">pp::FileRef::FileRef</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a PP_Resource as a return value that has already been reference counted.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A PP_Resource corresponding to file reference.</td></tr></tbody></table>

<span id="a95aad2e3c8d9b52b1ac09279c8cf8113" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a4c79db956157379aa877e57ff06d2c10" class="el">pp::FileRef::FileRef</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_system/" class="el">FileSystem</a> &amp; </td><td><em>file_system</em>,</td></tr><tr class="even"><td></td><td></td><td>const char * </td><td><em>path</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor that creates a weak pointer to a file in the given file system.

File paths are POSIX style.

If the `path` is malformed, the resulting `FileRef` will have a null `PP_Resource`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>file_system</td><td>A <code>FileSystem</code> corresponding to a file system type.</td></tr><tr class="even"><td>[in]</td><td>path</td><td>A path to the file. Must begin with a '/' character.</td></tr></tbody></table>

<span id="a9a66f16e7d9a4198c206144bc3498ec5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a4c79db956157379aa877e57ff06d2c10" class="el">pp::FileRef::FileRef</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `FileRef`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A pointer to a <code>FileRef</code>.</td></tr></tbody></table>

---

## Member Function Documentation

<span id="abfdb9c3db04b0ef2591953f79c255873" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#abfdb9c3db04b0ef2591953f79c255873" class="el">pp::FileRef::Delete</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#abfdb9c3db04b0ef2591953f79c255873" class="el" title="Delete() deletes a file or directory.">Delete()</a> deletes a file or directory.

If `file_ref` refers to a directory, then the directory must be empty. It is an error to delete a file or directory that is in use. It is not valid to delete a file in the external file system.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#abfdb9c3db04b0ef2591953f79c255873" class="el" title="Delete() deletes a file or directory.">Delete()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="a71de4e20d117efcf4ac8000c2149e3f8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_FileSystemType <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a71de4e20d117efcf4ac8000c2149e3f8" class="el">pp::FileRef::GetFileSystemType</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a71de4e20d117efcf4ac8000c2149e3f8" class="el" title="GetFileSystemType() returns the type of the file system.">GetFileSystemType()</a> returns the type of the file system.

**Returns:**  
A `PP_FileSystemType` with the file system type if valid or `PP_FILESYSTEMTYPE_INVALID` if the provided resource is not a valid file reference.

<span id="acb186b79d906675e288ff5d0d0a7eab2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#acb186b79d906675e288ff5d0d0a7eab2" class="el">pp::FileRef::GetName</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#acb186b79d906675e288ff5d0d0a7eab2" class="el" title="GetName() returns the name of the file.">GetName()</a> returns the name of the file.

**Returns:**  
A `Var` containing the name of the file. The value returned by this function does not include any path components (such as the name of the parent directory, for example). It is just the name of the file. Use <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a657da250b3ff47ca8f1c616f9ebee6a0" class="el" title="GetPath() returns the absolute path of the file.">GetPath()</a> to get the full file path.

<span id="a514534c1a31732e328e062bdaa194919" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a514534c1a31732e328e062bdaa194919" class="el">pp::FileRef::GetParent</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a514534c1a31732e328e062bdaa194919" class="el" title="GetParent() returns the parent directory of this file.">GetParent()</a> returns the parent directory of this file.

If `file_ref` points to the root of the filesystem, then the root is returned.

**Returns:**  
A `FileRef` containing the parent directory of the file. This function fails if the file system type is `PP_FileSystemType_External`.

<span id="a657da250b3ff47ca8f1c616f9ebee6a0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a657da250b3ff47ca8f1c616f9ebee6a0" class="el">pp::FileRef::GetPath</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a657da250b3ff47ca8f1c616f9ebee6a0" class="el" title="GetPath() returns the absolute path of the file.">GetPath()</a> returns the absolute path of the file.

**Returns:**  
A `Var` containing the absolute path of the file. This function fails if the file system type is `PP_FileSystemType_External`.

<span id="afb1a20f9864801457db28d32ab1d7104" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#afb1a20f9864801457db28d32ab1d7104" class="el">pp::FileRef::MakeDirectory</a></td><td>(</td><td>int32_t </td><td><em>make_directory_flags</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#afb1a20f9864801457db28d32ab1d7104" class="el" title="MakeDirectory() makes a new directory in the file system according to the given make_directory_flags...">MakeDirectory()</a> makes a new directory in the file system according to the given `make_directory_flags`, which is a bit-mask of the `PP_MakeDirectoryFlags` values.

It is not valid to make a directory in the external file system.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>make_directory_flags</td><td>A bit-mask of the <code>PP_MakeDirectoryFlags</code> values. See <code>ppb_file_ref.h</code> for more details.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#afb1a20f9864801457db28d32ab1d7104" class="el" title="MakeDirectory() makes a new directory in the file system according to the given make_directory_flags...">MakeDirectory()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="a6de22adc35e4485dfba663dad64c15fb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a6de22adc35e4485dfba663dad64c15fb" class="el">pp::FileRef::Query</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; PP_FileInfo &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a6de22adc35e4485dfba663dad64c15fb" class="el" title="Query() queries info about a file or directory.">Query()</a> queries info about a file or directory.

You must have access to read this file or directory if it exists in the external filesystem.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#a6de22adc35e4485dfba663dad64c15fb" class="el" title="Query() queries info about a file or directory.">Query()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="af16f7bba00d624a16a1d9b9b09347c8c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#af16f7bba00d624a16a1d9b9b09347c8c" class="el">pp::FileRef::ReadDirectoryEntries</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; std::vector&lt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &gt; &gt; &amp; </td><td><em>callback</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#af16f7bba00d624a16a1d9b9b09347c8c" class="el" title="ReadDirectoryEntries() Reads all entries in the directory.">ReadDirectoryEntries()</a> Reads all entries in the directory.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallbackWithOutput</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#af16f7bba00d624a16a1d9b9b09347c8c" class="el" title="ReadDirectoryEntries() Reads all entries in the directory.">ReadDirectoryEntries()</a>. On success, the directory entries will be passed to the given function.</td></tr></tbody></table>

Normally you would use a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a> to allow callbacks to be bound to your class. See <a href="/docs/native-client/pepper_beta/cpp/completion__callback__factory_8h/" class="el" title="This file defines the API to create CompletionCallback objects that are bound to member functions...">completion_callback_factory.h</a> for more discussion on how to use this. Your callback will generally look like:

       void OnReadDirectoryEntries(
           int32_t result,
           const std::vector<DirectoryEntry>& entries) {
         if (result == PP_OK)
           // use entries...
       }

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="ab1d7f8a63643561a6529952faa881505" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab1d7f8a63643561a6529952faa881505" class="el">pp::FileRef::Rename</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp; </td><td><em>new_file_ref</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab1d7f8a63643561a6529952faa881505" class="el" title="Rename() renames a file or directory.">Rename()</a> renames a file or directory.

Argument `new_file_ref` must refer to files in the same file system as in this object. It is an error to rename a file or directory that is in use. It is not valid to rename a file in the external file system.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>new_file_ref</td><td>A <code>FileRef</code> corresponding to a new file reference.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab1d7f8a63643561a6529952faa881505" class="el" title="Rename() renames a file or directory.">Rename()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="ab8e5d24d96c7408b140b74aa0ed8d7ca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab8e5d24d96c7408b140b74aa0ed8d7ca" class="el">pp::FileRef::Touch</a></td><td>(</td><td>PP_Time </td><td><em>last_access_time</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_Time </td><td><em>last_modified_time</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab8e5d24d96c7408b140b74aa0ed8d7ca" class="el" title="Touch() Updates time stamps for a file.">Touch()</a> Updates time stamps for a file.

You must have write access to the file if it exists in the external filesystem.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>last_access_time</td><td>The last time the file was accessed.</td></tr><tr class="even"><td>[in]</td><td>last_modified_time</td><td>The last time the file was modified.</td></tr><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref#ab8e5d24d96c7408b140b74aa0ed8d7ca" class="el" title="Touch() Updates time stamps for a file.">Touch()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/file__ref_8h/" class="el">file_ref.h</a>
