---json {"title":"PPB\_VarDictionary Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a1fad06939f6d2c711a319d6b984f45f5" class="el">Create</a> )(void)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#ac078e850f04e097ee67cefc3a475ec77" class="el">Get</a> )(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a8af80f44eaab36b5c8bc670be405dc21" class="el">Set</a> )(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a2df16916e3bd3ecc2de6e27100bb71db" class="el">Delete</a> )(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a2b7c0b449352d77b0c36c2bdb270eb9a" class="el">HasKey</a> )(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#ab481ddec5b69bf964b63e859decc1e97" class="el">GetKeys</a> )(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A dictionary var contains key-value pairs with unique keys.

The keys are strings while the values can be arbitrary vars. Key comparison is always done by value instead of by reference.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a1fad06939f6d2c711a319d6b984f45f5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a1fad06939f6d2c711a319d6b984f45f5" class="el">PPB_VarDictionary::Create</a>)(void)<code> [read]</code></td></tr></tbody></table>

Creates a dictionary var, i.e., a `PP_Var` with type set to `PP_VARTYPE_DICTIONARY`.

**Returns:**  
An empty dictionary var, whose reference count is set to 1 on behalf of the caller.

<span id="a2df16916e3bd3ecc2de6e27100bb71db" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a2df16916e3bd3ecc2de6e27100bb71db" class="el">PPB_VarDictionary::Delete</a>)(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key)</td></tr></tbody></table>

Deletes the specified key and its associated value, if the key exists.

The reference to the element will be released.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>dict</td><td>A dictionary var.</td></tr><tr class="even"><td>[in]</td><td>key</td><td>A string var.</td></tr></tbody></table>

<span id="ac078e850f04e097ee67cefc3a475ec77" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#ac078e850f04e097ee67cefc3a475ec77" class="el">PPB_VarDictionary::Get</a>)(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key)<code> [read]</code></td></tr></tbody></table>

Gets the value associated with the specified key.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>dict</td><td>A dictionary var.</td></tr><tr class="even"><td>[in]</td><td>key</td><td>A string var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The value that is associated with `key`. The reference count of the element returned is incremented on behalf of the caller. If `key` is not a string var, or it doesn't exist in `dict`, an undefined var is returned.

<span id="ab481ddec5b69bf964b63e859decc1e97" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#ab481ddec5b69bf964b63e859decc1e97" class="el">PPB_VarDictionary::GetKeys</a>)(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict)<code> [read]</code></td></tr></tbody></table>

Gets all the keys in a dictionary.

Please note that for each key that you set into the dictionary, a string var with the same contents is returned; but it may not be the same string var (i.e., `value.as_id` may be different).

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>dict</td><td>A dictionary var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An array var which contains all the keys of `dict`. Its reference count is incremented on behalf of the caller. The elements are string vars. Returns a null var if failed.

<span id="a2b7c0b449352d77b0c36c2bdb270eb9a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a2b7c0b449352d77b0c36c2bdb270eb9a" class="el">PPB_VarDictionary::HasKey</a>)(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key)</td></tr></tbody></table>

Checks whether a key exists.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>dict</td><td>A dictionary var.</td></tr><tr class="even"><td>[in]</td><td>key</td><td>A string var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` indicating whether the key exists.

<span id="a8af80f44eaab36b5c8bc670be405dc21" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___var_dictionary__1__0#a8af80f44eaab36b5c8bc670be405dc21" class="el">PPB_VarDictionary::Set</a>)(struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> dict, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> key, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr></tbody></table>

Sets the value associated with the specified key.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>dict</td><td>A dictionary var.</td></tr><tr class="even"><td>[in]</td><td>key</td><td>A string var. If this key hasn't existed in <code>dict</code>, it is added and associated with <code>value</code>; otherwise, the previous value is replaced with <code>value</code>.</td></tr><tr class="odd"><td>[in]</td><td>value</td><td>The value to set. The dictionary holds a reference to it on success.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` indicating whether the operation succeeds.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__var__dictionary_8h/" class="el">ppb_var_dictionary.h</a>
