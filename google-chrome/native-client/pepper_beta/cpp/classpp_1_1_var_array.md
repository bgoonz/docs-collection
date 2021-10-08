---json {"title":"pp::VarArray Class Reference"} ---

Inheritance diagram for pp::VarArray:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a780daccc2dc02eac8a52b3c6acf245ed" class="el">VarArray</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a3aabef79f9d8af79a4ef5dda73a09c05" class="el">VarArray</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;var)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#abb66ecc726d9aca28bd4a430a391a5d3" class="el">VarArray</a> (const PP_Var &amp;var)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a839cc2aa7b5a4698f3a11214f76e56c0" class="el">VarArray</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a667aca2cad8fd48469dab1228f479284" class="el">~VarArray</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a5acb01cba7823e5b4096a3d1c1cf31be" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#aeb98c95929dd46d1f64eba13db724154" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a61f3bd9357da964824bc3dfbc7715b12" class="el">Get</a> (uint32_t index) const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a6769d254d64ca6f0e5a5321ad9158d89" class="el">Set</a> (uint32_t index, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;value)</td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#afaa8006ed2c7fa4fb99a6d9d96b91f5a" class="el">GetLength</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a6d37da10169a4e9f66152d74231694b9" class="el">SetLength</a> (uint32_t length)</td></tr></tbody></table>

---

## Constructor & Destructor Documentation

<span id="a780daccc2dc02eac8a52b3c6acf245ed" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a780daccc2dc02eac8a52b3c6acf245ed" class="el">pp::VarArray::VarArray</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs a new array var.

<span id="a3aabef79f9d8af79a4ef5dda73a09c05" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a780daccc2dc02eac8a52b3c6acf245ed" class="el">pp::VarArray::VarArray</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>var</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `VarArray` given a var for which <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a7a28894a77f9d69d1a4b0272bf80d657" class="el" title="This function determines if this Var is an array.">is_array()</a> is true.

This will refer to the same array var, but allow you to access methods specific to arrays.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>An array var.</td></tr></tbody></table>

<span id="abb66ecc726d9aca28bd4a430a391a5d3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a780daccc2dc02eac8a52b3c6acf245ed" class="el">pp::VarArray::VarArray</a></td><td>(</td><td>const PP_Var &amp; </td><td><em>var</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `VarArray` given a `PP_Var` of type PP_VARTYPE_ARRAY.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <code>PP_Var</code> of type PP_VARTYPE_ARRAY.</td></tr></tbody></table>

<span id="a839cc2aa7b5a4698f3a11214f76e56c0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a780daccc2dc02eac8a52b3c6acf245ed" class="el">pp::VarArray::VarArray</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

Copy constructor.

<span id="a667aca2cad8fd48469dab1228f479284" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a667aca2cad8fd48469dab1228f479284" class="el">pp::VarArray::~VarArray</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

---

## Member Function Documentation

<span id="a61f3bd9357da964824bc3dfbc7715b12" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a61f3bd9357da964824bc3dfbc7715b12" class="el">pp::VarArray::Get</a></td><td>(</td><td>uint32_t </td><td><em>index</em></td><td>)</td><td>const</td></tr></tbody></table>

Gets an element from the array.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>index</td><td>An index indicating which element to return.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The element at the specified position. If `index` is larger than or equal to the array length, an undefined var is returned.

<span id="afaa8006ed2c7fa4fb99a6d9d96b91f5a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#afaa8006ed2c7fa4fb99a6d9d96b91f5a" class="el">pp::VarArray::GetLength</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the array length.

**Returns:**  
The array length.

<span id="a5acb01cba7823e5b4096a3d1c1cf31be" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a>&amp; pp::VarArray::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

Assignment operator.

<span id="aeb98c95929dd46d1f64eba13db724154" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a>&amp; pp::VarArray::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

The `Var` assignment operator is overridden here so that we can check for assigning a non-array var to a `VarArray`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>The array var to be assigned.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The resulting `VarArray` (as a `Var`&).

Reimplemented from <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a65601024610f1625c9945acb8725d7c4" class="el">pp::Var</a>.

<span id="a6769d254d64ca6f0e5a5321ad9158d89" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a6769d254d64ca6f0e5a5321ad9158d89" class="el">pp::VarArray::Set</a></td><td>(</td><td>uint32_t </td><td><em>index</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>value</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets the value of an element in the array.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>index</td><td>An index indicating which element to modify. If <code>index</code> is larger than or equal to the array length, the length is updated to be <code>index</code> + 1. Any position in the array that hasn't been set before is set to undefined, i.e., <code>PP_Var</code> of type <code>PP_VARTYPE_UNDEFINED</code>.</td></tr><tr class="even"><td>[in]</td><td>value</td><td>The value to set.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `bool` indicating whether the operation succeeds.

<span id="a6d37da10169a4e9f66152d74231694b9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#a6d37da10169a4e9f66152d74231694b9" class="el">pp::VarArray::SetLength</a></td><td>(</td><td>uint32_t </td><td><em>length</em></td><td>)</td><td></td></tr></tbody></table>

Sets the array length.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>length</td><td>The new array length. If <code>length</code> is smaller than its current value, the array is truncated to the new length; any elements that no longer fit are removed. If <code>length</code> is larger than its current value, undefined vars are appended to increase the array to the specified length.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `bool` indicating whether the operation succeeds.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/var__array_8h/" class="el">var_array.h</a>
