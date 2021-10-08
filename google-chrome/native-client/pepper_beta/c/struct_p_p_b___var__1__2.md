---json {"title":"PPB_Var Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a52f49d7d04522a69bbbc2b5161a32c1c" class="el">AddRef</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a3ca6fe76b51c14df6cc6a04d77edb807" class="el">Release</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a5c7ce303ae72998f54ba5da3357f7641" class="el">VarFromUtf8</a> )(const char *data, uint32_t len)</td></tr><tr class="even"><td style="text-align: right;">const char *(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a573919f500ea491afe6c8c9dddc0106f" class="el">VarToUtf8</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var, uint32_t *len)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a686edc2d60c7d3803a03f8e1c1fb1414" class="el">VarToResource</a> )(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a3b2240a7db38d55b6ea084a7d3cfe340" class="el">VarFromResource</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

PPB_Var API.

---

## Field Documentation

<span id="a52f49d7d04522a69bbbc2b5161a32c1c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a52f49d7d04522a69bbbc2b5161a32c1c" class="el">PPB_Var::AddRef</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a52f49d7d04522a69bbbc2b5161a32c1c" class="el" title="AddRef() adds a reference to the given var.">AddRef()</a> adds a reference to the given var.

If this is not a refcounted object, this function will do nothing so you can always call it no matter what the type.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <code>PP_Var</code> that will have a reference added.</td></tr></tbody></table>

<span id="a3ca6fe76b51c14df6cc6a04d77edb807" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a3ca6fe76b51c14df6cc6a04d77edb807" class="el">PPB_Var::Release</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a3ca6fe76b51c14df6cc6a04d77edb807" class="el" title="Release() removes a reference to given var, deleting it if the internal reference count becomes 0...">Release()</a> removes a reference to given var, deleting it if the internal reference count becomes 0.

If the `PP_Var` is of type `PP_VARTYPE_RESOURCE`, it will implicitly release a reference count on the `PP_Resource` (equivalent to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___core__1__0#af3163aefc33071af39cd085a0a2d44fe" class="el" title="ReleaseResource() removes a reference from a resource.">PPB_Core::ReleaseResource()</a>).

If the given var is not a refcounted object, this function will do nothing so you can always call it no matter what the type.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <code>PP_Var</code> that will have a reference removed.</td></tr></tbody></table>

<span id="a3b2240a7db38d55b6ea084a7d3cfe340" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a3b2240a7db38d55b6ea084a7d3cfe340" class="el">PPB_Var::VarFromResource</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)<code> [read]</code></td></tr></tbody></table>

Creates a new `PP_Var` from a given resource.

Implicitly adds a reference count on the `PP_Resource` (equivalent to PPB_Core::AddRefResource(resource)).

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> to be wrapped in a var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` created for this resource, with type `PP_VARTYPE_RESOURCE`. The reference count of the var is set to 1 on behalf of the caller.

<span id="a5c7ce303ae72998f54ba5da3357f7641" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a5c7ce303ae72998f54ba5da3357f7641" class="el">PPB_Var::VarFromUtf8</a>)(const char *data, uint32_t len)<code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a5c7ce303ae72998f54ba5da3357f7641" class="el" title="VarFromUtf8() creates a string var from a string.">VarFromUtf8()</a> creates a string var from a string.

The string must be encoded in valid UTF-8 and is NOT NULL-terminated, the length must be specified in `len`. It is an error if the string is not valid UTF-8.

If the length is 0, the `*data` pointer will not be dereferenced and may be `NULL`. Note, however if length is 0, the "NULL-ness" will not be preserved, as <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a573919f500ea491afe6c8c9dddc0106f" class="el" title="VarToUtf8() converts a string-type var to a char* encoded in UTF-8.">VarToUtf8()</a> will never return `NULL` on success, even for empty strings.

The resulting object will be a refcounted string object. It will be AddRef'ed for the caller. When the caller is done with it, it should be Released.

On error (basically out of memory to allocate the string, or input that is not valid UTF-8), this function will return a Null var.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>data</td><td>A string</td></tr><tr class="even"><td>[in]</td><td>len</td><td>The length of the string.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` structure containing a reference counted string object.

<span id="a686edc2d60c7d3803a03f8e1c1fb1414" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a686edc2d60c7d3803a03f8e1c1fb1414" class="el">PPB_Var::VarToResource</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var)</td></tr></tbody></table>

Converts a resource-type var to a `PP_Resource`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <code>PP_Var</code> struct containing a resource-type var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Resource` retrieved from the var, or 0 if the var is not a resource. The reference count of the resource is incremented on behalf of the caller.

<span id="a573919f500ea491afe6c8c9dddc0106f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const char*(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a573919f500ea491afe6c8c9dddc0106f" class="el">PPB_Var::VarToUtf8</a>)(struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> var, uint32_t *len)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___var__1__2#a573919f500ea491afe6c8c9dddc0106f" class="el" title="VarToUtf8() converts a string-type var to a char* encoded in UTF-8.">VarToUtf8()</a> converts a string-type var to a char\* encoded in UTF-8.

This string is NOT NULL-terminated. The length will be placed in `*len`. If the string is valid but empty the return value will be non-NULL, but `*len` will still be 0.

If the var is not a string, this function will return NULL and `*len` will be 0.

The returned buffer will be valid as long as the underlying var is alive. If the instance frees its reference, the string will be freed and the pointer will be to arbitrary memory.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el" title="The PP_VAR struct is a variant data type and can contain any value of one of the types named in the P...">PP_Var</a> struct containing a string-type var.</td></tr><tr class="even"><td>[in,out]</td><td>len</td><td>A pointer to the length of the string-type var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A char\* encoded in UTF-8.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__var_8h/" class="el">ppb_var.h</a>
