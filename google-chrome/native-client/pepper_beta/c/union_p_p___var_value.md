---json {"title":"PP_VarValue Union Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> </td><td><a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#ab7c79b63a2e7fef545fcf8195bb5ad12" class="el">as_bool</a></td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#a74da1e2b62153f138ae49147842f6d2c" class="el">as_int</a></td></tr><tr class="odd"><td style="text-align: right;">double </td><td><a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#aa4a3a6095ef825b30237d7c856ba4bf7" class="el">as_double</a></td></tr><tr class="even"><td style="text-align: right;">int64_t </td><td><a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#af3087d15f3c1ee35fe48f215292df1ad" class="el">as_id</a></td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value/" class="el" title="The PP_VarValue union stores the data for any one of the types listed in the PP_VarType enum...">PP_VarValue</a> union stores the data for any one of the types listed in the PP_VarType enum.

---

## Field Documentation

<span id="ab7c79b63a2e7fef545fcf8195bb5ad12" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#ab7c79b63a2e7fef545fcf8195bb5ad12" class="el">PP_VarValue::as_bool</a></td></tr></tbody></table>

If `type` is `PP_VARTYPE_BOOL`, `as_bool` represents the value of this `PP_Var` as `PP_Bool`.

<span id="aa4a3a6095ef825b30237d7c856ba4bf7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>double <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#aa4a3a6095ef825b30237d7c856ba4bf7" class="el">PP_VarValue::as_double</a></td></tr></tbody></table>

If `type` is `PP_VARTYPE_DOUBLE`, `as_double` represents the value of this `PP_Var` as `double`.

<span id="af3087d15f3c1ee35fe48f215292df1ad" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int64_t <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#af3087d15f3c1ee35fe48f215292df1ad" class="el">PP_VarValue::as_id</a></td></tr></tbody></table>

If `type` is `PP_VARTYPE_STRING`, `PP_VARTYPE_OBJECT`, `PP_VARTYPE_ARRAY`, `PP_VARTYPE_DICTIONARY`, `PP_VARTYPE_ARRAY_BUFFER`, or `PP_VARTYPE_RESOURCE`, `as_id` represents the value of this `PP_Var` as an opaque handle assigned by the browser.

This handle is guaranteed never to be 0, so a module can initialize this ID to 0 to indicate a "NULL handle."

<span id="a74da1e2b62153f138ae49147842f6d2c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#a74da1e2b62153f138ae49147842f6d2c" class="el">PP_VarValue::as_int</a></td></tr></tbody></table>

If `type` is `PP_VARTYPE_INT32`, `as_int` represents the value of this `PP_Var` as `int32_t`.

---

The documentation for this union was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/pp__var_8h/" class="el">pp_var.h</a>
