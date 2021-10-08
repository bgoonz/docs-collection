---json {"title":"PPB\_VarArray Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#af70ca94305325f09306058ec87f50ca5" class="el">Create</a> )(void)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#a20431bfeea806a1af61d4cca2f1f1437" class="el">Get</a> )(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t index)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#aea60f6d4917fa248237c6bfd1eda92fe" class="el">Set</a> )(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t index, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr><tr class="even"><td style="text-align: right;">uint32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#ab1163119c730c95fea571a4618b8cc8f" class="el">GetLength</a> )(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#a4868611700bcca797bfae701870ce83b" class="el">SetLength</a> )(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t length)</td></tr></tbody></table>

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="af70ca94305325f09306058ec87f50ca5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#af70ca94305325f09306058ec87f50ca5" class="el">PPB_VarArray::Create</a>)(void)<code> [read]</code></td></tr></tbody></table>

Creates an array var, i.e., a `PP_Var` with type set to `PP_VARTYPE_ARRAY`.

The array length is set to 0.

**Returns:**  
An empty array var, whose reference count is set to 1 on behalf of the caller.

<span id="a20431bfeea806a1af61d4cca2f1f1437" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#a20431bfeea806a1af61d4cca2f1f1437" class="el">PPB_VarArray::Get</a>)(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t index)<code> [read]</code></td></tr></tbody></table>

Gets an element from the array.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>An array var.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>An index indicating which element to return.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The element at the specified position. The reference count of the element returned is incremented on behalf of the caller. If `index` is larger than or equal to the array length, an undefined var is returned.

<span id="ab1163119c730c95fea571a4618b8cc8f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#ab1163119c730c95fea571a4618b8cc8f" class="el">PPB_VarArray::GetLength</a>)(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array)</td></tr></tbody></table>

Gets the array length.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>An array var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The array length.

<span id="aea60f6d4917fa248237c6bfd1eda92fe" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#aea60f6d4917fa248237c6bfd1eda92fe" class="el">PPB_VarArray::Set</a>)(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t index, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr></tbody></table>

Sets the value of an element in the array.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>An array var.</td></tr><tr class="even"><td>[in]</td><td>index</td><td>An index indicating which element to modify. If <code>index</code> is larger than or equal to the array length, the length is updated to be <code>index</code> + 1. Any position in the array that hasn't been set before is set to undefined, i.e., <code>PP_Var</code> of type <code>PP_VARTYPE_UNDEFINED</code>.</td></tr><tr class="odd"><td>[in]</td><td>value</td><td>The value to set. The array holds a reference to it on success.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` indicating whether the operation succeeds.

<span id="a4868611700bcca797bfae701870ce83b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___var_array__1__0#a4868611700bcca797bfae701870ce83b" class="el">PPB_VarArray::SetLength</a>)(struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___var/" class="el">PP_Var</a> array, uint32_t length)</td></tr></tbody></table>

Sets the array length.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>array</td><td>An array var.</td></tr><tr class="even"><td>[in]</td><td>length</td><td>The new array length. If <code>length</code> is smaller than its current value, the array is truncated to the new length; any elements that no longer fit are removed and the references to them will be released. If <code>length</code> is larger than its current value, undefined vars are appended to increase the array to the specified length.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Bool` indicating whether the operation succeeds.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__var__array_8h/" class="el">ppb_var_array.h</a>
