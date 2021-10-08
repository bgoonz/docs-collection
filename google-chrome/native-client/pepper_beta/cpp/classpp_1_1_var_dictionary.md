---json {"title":"pp::VarDictionary Class Reference"} ---

Inheritance diagram for pp::VarDictionary:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a8687ca12c7d53653e7ea164ca13c86f8" class="el">VarDictionary</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#ae90f19faf752428dce18ab319a421aa7" class="el">VarDictionary</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;var)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#aaca1887754d80b56503cd0c329397f74" class="el">VarDictionary</a> (const PP_Var &amp;var)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a42546bb501a2e5d74f1092e88cf162ac" class="el">VarDictionary</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary/" class="el">VarDictionary</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#adc8bdb1aee0e5deaee3b88a755cbc9ff" class="el">~VarDictionary</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary/" class="el">VarDictionary</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a0fc59e6a9751d35815e0bfa4a0d06217" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary/" class="el">VarDictionary</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a689815e0b4e50e2f1e9aaa8b1ef34e00" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a2221719e6c6f35e4333f426f8366451b" class="el">Get</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;key) const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a5655feba6620abf7654d008e245971d8" class="el">Set</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;key, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;value)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a1a3c22688159becedcb855fa78619c8c" class="el">Delete</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;key)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a3fd937b874ff4c5361e5b0e21829bd6a" class="el">HasKey</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;key) const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a90073effa08ca9664e357027ba4c8c48" class="el">GetKeys</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a8687ca12c7d53653e7ea164ca13c86f8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a8687ca12c7d53653e7ea164ca13c86f8" class="el">pp::VarDictionary::VarDictionary</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs a new dictionary var.

<span id="ae90f19faf752428dce18ab319a421aa7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a8687ca12c7d53653e7ea164ca13c86f8" class="el">pp::VarDictionary::VarDictionary</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>var</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `VarDictionary` given a var for which <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae061050e5deaac345eb089b9cd8796ea" class="el" title="This function determines if this Var is a dictionary.">is_dictionary()</a> is true.

This will refer to the same dictionary var, but allow you to access methods specific to dictionary.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A dictionary var.</td></tr></tbody></table>

<span id="aaca1887754d80b56503cd0c329397f74" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a8687ca12c7d53653e7ea164ca13c86f8" class="el">pp::VarDictionary::VarDictionary</a></td><td>(</td><td>const PP_Var &amp; </td><td><em>var</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `VarDictionary` given a `PP_Var` of type PP\_VARTYPE\_DICTIONARY.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <code>PP_Var</code> of type PP_VARTYPE_DICTIONARY.</td></tr></tbody></table>

<span id="a42546bb501a2e5d74f1092e88cf162ac" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a8687ca12c7d53653e7ea164ca13c86f8" class="el">pp::VarDictionary::VarDictionary</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary/" class="el">VarDictionary</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

Copy constructor.

<span id="adc8bdb1aee0e5deaee3b88a755cbc9ff" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#adc8bdb1aee0e5deaee3b88a755cbc9ff" class="el">pp::VarDictionary::~VarDictionary</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a1a3c22688159becedcb855fa78619c8c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a1a3c22688159becedcb855fa78619c8c" class="el">pp::VarDictionary::Delete</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>key</em></td><td>)</td><td></td></tr></tbody></table>

Deletes the specified key and its associated value, if the key exists.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>key</td><td>A string var.</td></tr></tbody></table>

<span id="a2221719e6c6f35e4333f426f8366451b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a2221719e6c6f35e4333f426f8366451b" class="el">pp::VarDictionary::Get</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>key</em></td><td>)</td><td>const</td></tr></tbody></table>

Gets the value associated with the specified key.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>key</td><td>A string var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The value that is associated with `key`. If `key` is not a string var, or it doesn't exist in the dictionary, an undefined var is returned.

<span id="a90073effa08ca9664e357027ba4c8c48" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array/" class="el">VarArray</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a90073effa08ca9664e357027ba4c8c48" class="el">pp::VarDictionary::GetKeys</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets all the keys in the dictionary.

**Returns:**  
An array var which contains all the keys of the dictionary. The elements are string vars. Returns an empty array var if failed.

<span id="a3fd937b874ff4c5361e5b0e21829bd6a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a3fd937b874ff4c5361e5b0e21829bd6a" class="el">pp::VarDictionary::HasKey</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>key</em></td><td>)</td><td>const</td></tr></tbody></table>

Checks whether a key exists.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>key</td><td>A string var.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `bool` indicating whether the key exists.

<span id="a0fc59e6a9751d35815e0bfa4a0d06217" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary/" class="el">VarDictionary</a>&amp; pp::VarDictionary::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary/" class="el">VarDictionary</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

Assignment operator.

<span id="a689815e0b4e50e2f1e9aaa8b1ef34e00" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a>&amp; pp::VarDictionary::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

The `Var` assignment operator is overridden here so that we can check for assigning a non-dictionary var to a `VarDictionary`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>The dictionary var to be assigned.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The resulting `VarDictionary` (as a `Var`&).

Reimplemented from <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a65601024610f1625c9945acb8725d7c4" class="el">pp::Var</a>.

<span id="a5655feba6620abf7654d008e245971d8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a5655feba6620abf7654d008e245971d8" class="el">pp::VarDictionary::Set</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>key</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>value</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Sets the value associated with the specified key.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>key</td><td>A string var. If this key hasn't existed in the dictionary, it is added and associated with <code>value</code>; otherwise, the previous value is replaced with <code>value</code>.</td></tr><tr class="even"><td>[in]</td><td>value</td><td>The value to set.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `bool` indicating whether the operation succeeds.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/var__dictionary_8h/" class="el">var_dictionary.h</a>
