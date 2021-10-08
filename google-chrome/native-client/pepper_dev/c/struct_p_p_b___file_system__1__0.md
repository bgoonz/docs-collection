---json {"title":"PPB\_FileSystem Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a14946dd216cfe9cf786b2c1442588083" class="el">Create</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a> type)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a4d65860ba1d916f2488bab25e89d2dba" class="el">IsFileSystem</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a9add9cdffaa742c8d19c33a73bca9e3a" class="el">Open</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_system, int64_t expected_size, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a59a9fed00deae5bfbc9480184232ab68" class="el">GetType</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_system)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_FileSystem` struct identifies the file system type associated with a file.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a14946dd216cfe9cf786b2c1442588083" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a14946dd216cfe9cf786b2c1442588083" class="el">PPB_FileSystem::Create</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_dev/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a> type)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a14946dd216cfe9cf786b2c1442588083" class="el" title="Create() creates a file system object of the given type.">Create()</a> creates a file system object of the given type.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance with the file.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A file system type as defined by <code>PP_FileSystemType</code> enum (except PP_FILESYSTEMTYPE_ISOLATED, which is currently not supported).</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` corresponding to a file system if successful.

<span id="a59a9fed00deae5bfbc9480184232ab68" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga87b353f2ec8935c9c3294daff612c145" class="el">PP_FileSystemType</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a59a9fed00deae5bfbc9480184232ab68" class="el">PPB_FileSystem::GetType</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_system)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a59a9fed00deae5bfbc9480184232ab68" class="el" title="GetType() returns the type of the provided file system.">GetType()</a> returns the type of the provided file system.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_system</td><td>A <code>PP_Resource</code> corresponding to a file system.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_FileSystemType` with the file system type if valid or `PP_FILESYSTEMTYPE_INVALID` if the provided resource is not a valid file system. It is valid to call this function even before <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a9add9cdffaa742c8d19c33a73bca9e3a" class="el" title="Open() opens the file system.">Open()</a> completes.

<span id="a4d65860ba1d916f2488bab25e89d2dba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a4d65860ba1d916f2488bab25e89d2dba" class="el">PPB_FileSystem::IsFileSystem</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a4d65860ba1d916f2488bab25e89d2dba" class="el" title="IsFileSystem() determines if the provided resource is a file system.">IsFileSystem()</a> determines if the provided resource is a file system.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a file system.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the resource is a `PPB_FileSystem`, `PP_FALSE` if the resource is invalid or some type other than `PPB_FileSystem`.

<span id="a9add9cdffaa742c8d19c33a73bca9e3a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a9add9cdffaa742c8d19c33a73bca9e3a" class="el">PPB_FileSystem::Open</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> file_system, int64_t expected_size, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a9add9cdffaa742c8d19c33a73bca9e3a" class="el" title="Open() opens the file system.">Open()</a> opens the file system.

A file system must be opened before running any other operation on it.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_system</td><td>A <code>PP_Resource</code> corresponding to a file system.</td></tr><tr class="even"><td>[in]</td><td>expected_size</td><td>The expected size of the file system. Note that this does not request quota; to do that, you must either invoke requestQuota from JavaScript: <a href="http://www.html5rocks.com/en/tutorials/file/filesystem/#toc-requesting-quota">http://www.html5rocks.com/en/tutorials/file/filesystem/#toc-requesting-quota</a> or set the unlimitedStorage permission for Chrome Web Store apps: <a href="http://code.google.com/chrome/extensions/manifest.html#permissions">http://code.google.com/chrome/extensions/manifest.html#permissions</a></td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___file_system__1__0#a9add9cdffaa742c8d19c33a73bca9e3a" class="el" title="Open() opens the file system.">Open()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__file__system_8h/" class="el">ppb_file_system.h</a>
