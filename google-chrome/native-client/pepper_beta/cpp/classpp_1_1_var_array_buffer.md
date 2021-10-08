---json {"title":"pp::VarArrayBuffer Class Reference"} ---

Inheritance diagram for pp::VarArrayBuffer:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a3ce55ddf56dd4fe7bb37cf6cbf10a85a" class="el">VarArrayBuffer</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#aa933ee36d23a31ae35acacbb10069a6b" class="el">VarArrayBuffer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;var)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a7fd29347661fc1539dd474cc3f0e2a72" class="el">VarArrayBuffer</a> (uint32_t size_in_bytes)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a9b76b96c7b11a10aa4424c02b4a5511b" class="el">VarArrayBuffer</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer/" class="el">VarArrayBuffer</a> &amp;buffer)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#afc67644105914d333c2266c056c99190" class="el">~VarArrayBuffer</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer/" class="el">VarArrayBuffer</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#afe636bd8a6011c04dce0eaa84af7c1ee" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer/" class="el">VarArrayBuffer</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a9cbb8584d8edc5d03875de67dec4086c" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#aee1fdb39f8a1ebcd8a78fb5e996e0af2" class="el">ByteLength</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void * </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#ab81d9579bcacf5eb927a9638092d2f3b" class="el">Map</a> ()</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a271e6bb122f313a758b5fce1dc751687" class="el">Unmap</a> ()</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

`VarArrayBuffer` provides a way to interact with JavaScript ArrayBuffers, which represent a contiguous sequence of bytes.

Note that these vars are not part of the embedding page's DOM, and can only be shared with JavaScript using the `PostMessage` and `HandleMessage` functions of `Instance`.

---

## Constructor & Destructor Documentation

<span id="a3ce55ddf56dd4fe7bb37cf6cbf10a85a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a3ce55ddf56dd4fe7bb37cf6cbf10a85a" class="el">pp::VarArrayBuffer::VarArrayBuffer</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

The default constructor constructs a `VarArrayBuffer` which is 0 byte long.

<span id="aa933ee36d23a31ae35acacbb10069a6b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a3ce55ddf56dd4fe7bb37cf6cbf10a85a" class="el">pp::VarArrayBuffer::VarArrayBuffer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>var</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Construct a `VarArrayBuffer` given a var for which <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ac0fd1d153203f8fe6c23b88618a5ef65" class="el" title="This function determines if this Var is an ArrayBuffer.">is_array_buffer()</a> is true.

This will refer to the same `ArrayBuffer` as var, but allows you to access methods specific to `VarArrayBuffer`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>An <code>ArrayBuffer</code> var.</td></tr></tbody></table>

<span id="a7fd29347661fc1539dd474cc3f0e2a72" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a3ce55ddf56dd4fe7bb37cf6cbf10a85a" class="el">pp::VarArrayBuffer::VarArrayBuffer</a></td><td>(</td><td>uint32_t </td><td><em>size_in_bytes</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Construct a new `VarArrayBuffer` which is `size_in_bytes` bytes long and initialized to zero.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>size_in_bytes</td><td>The size of the constructed <code>ArrayBuffer</code> in bytes.</td></tr></tbody></table>

<span id="a9b76b96c7b11a10aa4424c02b4a5511b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a3ce55ddf56dd4fe7bb37cf6cbf10a85a" class="el">pp::VarArrayBuffer::VarArrayBuffer</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer/" class="el">VarArrayBuffer</a> &amp; </td><td><em>buffer</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Copy constructor.

<span id="afc67644105914d333c2266c056c99190" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#afc67644105914d333c2266c056c99190" class="el">pp::VarArrayBuffer::~VarArrayBuffer</a></td><td>(</td><td></td><td>)</td><td><code> [inline, virtual]</code></td></tr></tbody></table>

---

## Member Function Documentation

<span id="aee1fdb39f8a1ebcd8a78fb5e996e0af2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#aee1fdb39f8a1ebcd8a78fb5e996e0af2" class="el">pp::VarArrayBuffer::ByteLength</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#aee1fdb39f8a1ebcd8a78fb5e996e0af2" class="el" title="ByteLength() retrieves the length of the VarArrayBuffer in bytes.">ByteLength()</a> retrieves the length of the `VarArrayBuffer` in bytes.

**Returns:**  
The length of the `VarArrayBuffer` in bytes.

<span id="ab81d9579bcacf5eb927a9638092d2f3b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void* <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#ab81d9579bcacf5eb927a9638092d2f3b" class="el">pp::VarArrayBuffer::Map</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#ab81d9579bcacf5eb927a9638092d2f3b" class="el" title="Map() maps the ArrayBuffer in to the module&#39;s address space and returns a pointer to the beginning of...">Map()</a> maps the `ArrayBuffer` in to the module's address space and returns a pointer to the beginning of the internal buffer for this `ArrayBuffer`.

ArrayBuffers are copied when transmitted, so changes to the underlying memory are not automatically available to the embedding page.

Note that calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#ab81d9579bcacf5eb927a9638092d2f3b" class="el" title="Map() maps the ArrayBuffer in to the module&#39;s address space and returns a pointer to the beginning of...">Map()</a> can be a relatively expensive operation. Use care when calling it in performance-critical code. For example, you should call it only once when looping over an `ArrayBuffer`.

**Example:**

       char* data = static_cast<char*>(array_buffer_var.Map());
       uint32_t byte_length = array_buffer_var.ByteLength();
       for (uint32_t i = 0; i < byte_length; ++i)
         data[i] = 'A';

**Returns:**  
A pointer to the internal buffer for this `ArrayBuffer`.

<span id="afe636bd8a6011c04dce0eaa84af7c1ee" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer/" class="el">VarArrayBuffer</a>&amp; pp::VarArrayBuffer::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer/" class="el">VarArrayBuffer</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

This function assigns one `VarArrayBuffer` to another `VarArrayBuffer`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>The <code>VarArrayBuffer</code> to be assigned.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The resulting `VarArrayBuffer`.

<span id="a9cbb8584d8edc5d03875de67dec4086c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a>&amp; pp::VarArrayBuffer::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

This function assigns one `VarArrayBuffer` to another `VarArrayBuffer`.

A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el" title="A generic type used for passing data types between the module and the page.">Var</a>'s assignment operator is overloaded here so that we can check for assigning a non-ArrayBuffer var to a `VarArrayBuffer`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>The <code>VarArrayBuffer</code> to be assigned.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The resulting `VarArrayBuffer` (as a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el" title="A generic type used for passing data types between the module and the page.">Var</a>&).

Reimplemented from <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a65601024610f1625c9945acb8725d7c4" class="el">pp::Var</a>.

<span id="a271e6bb122f313a758b5fce1dc751687" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a271e6bb122f313a758b5fce1dc751687" class="el">pp::VarArrayBuffer::Unmap</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a271e6bb122f313a758b5fce1dc751687" class="el" title="Unmap() unmaps this ArrayBuffer var from the module address space.">Unmap()</a> unmaps this `ArrayBuffer` var from the module address space.

Use this if you want to save memory but might want to call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#ab81d9579bcacf5eb927a9638092d2f3b" class="el" title="Map() maps the ArrayBuffer in to the module&#39;s address space and returns a pointer to the beginning of...">Map()</a> to map the buffer again later.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/var__array__buffer_8h/" class="el">var_array_buffer.h</a>
