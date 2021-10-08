—json {“title”:“PPB\_VarArrayBuffer Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a348f1470a2fc6cba9d430d0544e84225" class="el">Create</a> )(uint32_t size_in_bytes)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a0ad6305942f991daa6dfe3b579931ea1" class="el">ByteLength</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t *byte_length)</td></tr><tr class="odd"><td style="text-align: right;">void <em>(</em> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a4c7c25b939f56de64fa3f6f906a7da8c" class="el">Map</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> array)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#ac841a12b7eb93dd05bd2b864920e22a7" class="el">Unmap</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> array)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_VarArrayBuffer` interface provides a way to interact with JavaScript ArrayBuffers, which represent a contiguous sequence of bytes.

Use `PPB_Var` to manage the reference count for a `VarArrayBuffer`. Note that these Vars are not part of the embedding page’s DOM, and can only be shared with JavaScript using the `PostMessage` and `HandleMessage` functions of `pp::Instance`.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a0ad6305942f991daa6dfe3b579931ea1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a0ad6305942f991daa6dfe3b579931ea1" class="el">PPB_VarArrayBuffer::ByteLength</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t *byte_length)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a0ad6305942f991daa6dfe3b579931ea1" class="el" title="ByteLength() retrieves the length of the VarArrayBuffer in bytes.">ByteLength()</a> retrieves the length of the `VarArrayBuffer` in bytes.

On success, `byte_length` is set to the length of the given `ArrayBuffer` var. On failure, `byte_length` is unchanged (this could happen, for instance, if the given `PP_Var` is not of type `PP_VARTYPE_ARRAY_BUFFER`). Note that <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a0ad6305942f991daa6dfe3b579931ea1" class="el" title="ByteLength() retrieves the length of the VarArrayBuffer in bytes.">ByteLength()</a> will successfully retrieve the size of an `ArrayBuffer` even if the `ArrayBuffer` is not currently mapped.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>The <code>ArrayBuffer</code> whose length should be returned.</td></tr><tr class="even"><td>[out]</td><td>byte_length</td><td>A variable which is set to the length of the given <code>ArrayBuffer</code> on success.</td></tr></tbody></table>

**Returns:**  
`PP_TRUE` on success, `PP_FALSE` on failure.

<span id="a348f1470a2fc6cba9d430d0544e84225" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a348f1470a2fc6cba9d430d0544e84225" class="el">PPB_VarArrayBuffer::Create</a>)(uint32_t size_in_bytes)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a348f1470a2fc6cba9d430d0544e84225" class="el" title="Create() creates a zero-initialized VarArrayBuffer.">Create()</a> creates a zero-initialized `VarArrayBuffer`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>size_in_bytes</td><td>The size of the <code>ArrayBuffer</code> to be created.</td></tr></tbody></table>

**Returns:**  
A `PP_Var` representing a `VarArrayBuffer` of the requested size and with a reference count of 1.

<span id="a4c7c25b939f56de64fa3f6f906a7da8c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void<em>(</em> <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a4c7c25b939f56de64fa3f6f906a7da8c" class="el">PPB_VarArrayBuffer::Map</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> array)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a4c7c25b939f56de64fa3f6f906a7da8c" class="el" title="Map() maps the ArrayBuffer in to the module&#39;s address space and returns a pointer to the beginning of...">Map()</a> maps the `ArrayBuffer` in to the module’s address space and returns a pointer to the beginning of the buffer for the given `ArrayBuffer PP_Var`.

ArrayBuffers are copied when transmitted, so changes to the underlying memory are not automatically available to the embedding page.

Note that calling <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a4c7c25b939f56de64fa3f6f906a7da8c" class="el" title="Map() maps the ArrayBuffer in to the module&#39;s address space and returns a pointer to the beginning of...">Map()</a> can be a relatively expensive operation. Use care when calling it in performance-critical code. For example, you should call it only once when looping over an `ArrayBuffer`.

**Example:**

     char* data = (char*)(array_buffer_if.Map(array_buffer_var));
     uint32_t byte_length = 0;
     PP_Bool ok = array_buffer_if.ByteLength(array_buffer_var, &byte_length);
     if (!ok)
       return DoSomethingBecauseMyVarIsNotAnArrayBuffer();
     for (uint32_t i = 0; i < byte_length; ++i)
       data[i] = 'A';

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>The <code>ArrayBuffer</code> whose internal buffer should be returned.</td></tr></tbody></table>

**Returns:**  
A pointer to the internal buffer for this `ArrayBuffer`. Returns `NULL` if the given `PP_Var` is not of type `PP_VARTYPE_ARRAY_BUFFER`.

<span id="ac841a12b7eb93dd05bd2b864920e22a7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#ac841a12b7eb93dd05bd2b864920e22a7" class="el">PPB_VarArrayBuffer::Unmap</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> array)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#ac841a12b7eb93dd05bd2b864920e22a7" class="el" title="Unmap() unmaps the given ArrayBuffer var from the module address space.">Unmap()</a> unmaps the given `ArrayBuffer` var from the module address space.

Use this if you want to save memory but might want to call <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var_array_buffer__1__0#a4c7c25b939f56de64fa3f6f906a7da8c" class="el" title="Map() maps the ArrayBuffer in to the module&#39;s address space and returns a pointer to the beginning of...">Map()</a> to map the buffer again later. The `PP_Var` remains valid and should still be released using `PPB_Var` when you are done with the `ArrayBuffer`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>The <code>ArrayBuffer</code> to be released.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__var__array__buffer_8h/" class="el">ppb_var_array_buffer.h</a>
