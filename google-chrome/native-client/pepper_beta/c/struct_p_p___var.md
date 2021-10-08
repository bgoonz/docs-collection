---json {"title":"PP\_Var Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga9815041477d810724e44da862f9852ed" class="el">PP_VarType</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___var#a80a9be8f342e8d849d4911e5585a8123" class="el">type</a></td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___var#aa0b507acd514bb2644341721b838b870" class="el">padding</a></td></tr><tr class="odd"><td style="text-align: right;">union <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value/" class="el">PP_VarValue</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___var#ada122d12bf6da5cf78699a170d188542" class="el">value</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PP_VAR` struct is a variant data type and can contain any value of one of the types named in the `PP_VarType` enum.

This structure is for passing data between native code which can be strongly typed and the browser (JavaScript) which isn't strongly typed.

JavaScript has a "number" type for holding a number, and does not differentiate between floating point and integer numbers. The JavaScript operations will try to optimize operations by using integers when possible, but could end up with doubles. Therefore, you can't assume a numeric `PP_Var` will be the type you expect. Your code should be capable of handling either int32\_t or double for numeric PP\_Vars sent from JavaScript.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="aa0b507acd514bb2644341721b838b870" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___var#aa0b507acd514bb2644341721b838b870" class="el">PP_Var::padding</a></td></tr></tbody></table>

The `padding` ensures `value` is aligned on an 8-byte boundary relative to the start of the struct.

Some compilers align doubles on 8-byte boundaries for 32-bit x86, and some align on 4-byte boundaries.

<span id="a80a9be8f342e8d849d4911e5585a8123" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga9815041477d810724e44da862f9852ed" class="el">PP_VarType</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___var#a80a9be8f342e8d849d4911e5585a8123" class="el">PP_Var::type</a></td></tr></tbody></table>

<span id="ada122d12bf6da5cf78699a170d188542" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>union <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value/" class="el">PP_VarValue</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___var#ada122d12bf6da5cf78699a170d188542" class="el">PP_Var::value</a></td></tr></tbody></table>

This `value` represents the contents of the <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el" title="The PP_VAR struct is a variant data type and can contain any value of one of the types named in the P...">PP_Var</a>.

Only one of the fields of `value` is valid at a time based upon `type`.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__var_8h/" class="el">pp_var.h</a>
