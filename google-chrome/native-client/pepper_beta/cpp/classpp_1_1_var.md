---json {"title":"pp::Var Class Reference"} ---

Inheritance diagram for pp::Var:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_var__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_var-members/)

Classes
-------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_dont_manage/" class="el">DontManage</a></td></tr><tr class="even"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_null/" class="el">Null</a></td></tr><tr class="odd"><td style="text-align: right;"> </td><td>Special value passed to constructor to make <code>NULL</code>. <a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_null#details">More...</a><br />
</td></tr><tr class="even"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception/" class="el">OutException</a></td></tr><tr class="odd"><td style="text-align: right;"> </td><td>This class is used when calling the raw C PPAPI when using the C++ <code>Var</code> as a possible NULL exception. <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#details">More...</a><br />
</td></tr></tbody></table>

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">Var</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a8dc13cf4d873293e06e6d23325ab2544" class="el">Var</a> (<a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_null/" class="el">Null</a>)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a6eba29ce9f635feb4ffbdfba1014ff99" class="el">Var</a> (bool b)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a6de6c1f791f105b70d0cf815f63c2304" class="el">Var</a> (int32_t i)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a9bbdfd7d1aa2bd6c8d526ff5f6a2c035" class="el">Var</a> (double d)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a24ae309e6e0335d2b16aab6039c231fa" class="el">Var</a> (const char *utf8_str)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a4b0c8c5ef714c9444cfd8f1dd4a9fb25" class="el">Var</a> (const std::string &amp;utf8_str)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a7a9b5f09aa3c5f6f6ca961904c7d87ba" class="el">Var</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">pp::Resource</a> &amp;resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a64a857e38d59b1e012a02d7b8f98680f" class="el">Var</a> (<a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, const PP_Var &amp;var)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a52415e7de337c97b08eb70b06e0cda4b" class="el">Var</a> (const PP_Var &amp;var)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a2356640f40527226f295cc15ec01f302" class="el">Var</a> (<a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_dont_manage/" class="el">DontManage</a>, const PP_Var &amp;var)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#aa87cbd4cc4bc47b6f1f8a749f60aa062" class="el">Var</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a148a5009f2f445edfec0a5f83ed94cf4" class="el">~Var</a> ()</td></tr><tr class="even"><td style="text-align: right;">virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a65601024610f1625c9945acb8725d7c4" class="el">operator=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad689c287e64f984eb951c57af303a444" class="el">operator==</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp;other) const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#afe677b5834bfb5f1364d212a52f1879e" class="el">is_undefined</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#aa4a9d8309d3390aa56a4f2966daf6533" class="el">is_null</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a83773e6f9e2ac3723e33b6a1586d5c1e" class="el">is_bool</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a57ce2eb7f023f383194155b25b53d297" class="el">is_string</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a79ed26c49d64b536619a1ee574848a36" class="el">is_object</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a7a28894a77f9d69d1a4b0272bf80d657" class="el">is_array</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae061050e5deaac345eb089b9cd8796ea" class="el">is_dictionary</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a8ed51b6cd4e1b6fee46d8fdf27c98ef1" class="el">is_resource</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae7dd6f7e851c81ee259095f3e826f3fd" class="el">is_int</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a4a9e093ddf1475542bf0b3231e03d631" class="el">is_double</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae803a32764804c873dd16c48bd4fdc83" class="el">is_number</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ac0fd1d153203f8fe6c23b88618a5ef65" class="el">is_array_buffer</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a07e7a4ea38b990e6c230109823347e70" class="el">AsBool</a> () const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad31cdb379b6ceaae967125e358c81d16" class="el">AsInt</a> () const</td></tr><tr class="even"><td style="text-align: right;">double </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a8a798b08e197948c161737fc7b745af6" class="el">AsDouble</a> () const</td></tr><tr class="odd"><td style="text-align: right;">std::string </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a22a1e3b2a0783b949bedcdae49c07c97" class="el">AsString</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">pp::Resource</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a0346197dfa6ba350c6d9e3c85cc0ce80" class="el">AsResource</a> () const</td></tr><tr class="odd"><td style="text-align: right;">const PP_Var &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad828439641c93930ff188b45b45b4261" class="el">pp_var</a> () const</td></tr><tr class="even"><td style="text-align: right;">PP_Var </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a84a725a42640a63747f7f6bc252b65d4" class="el">Detach</a> ()</td></tr><tr class="odd"><td style="text-align: right;">std::string </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a835b1e5a601d6e5ceb9a7d1b5fb7a66f" class="el">DebugString</a> () const</td></tr></tbody></table>

Protected Attributes
--------------------

<table><tbody><tr class="odd"><td style="text-align: right;">PP_Var </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a7c1225564a0e3ab910823fc20d2611ab" class="el">var_</a></td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a94bec264c03634f7ba66fb46ed4fda0b" class="el">is_managed_</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A generic type used for passing data types between the module and the page.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="af571fae55754a20ae95ffd140726d04c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor.

Creates a `Var` of type `Undefined`.

<span id="a8dc13cf4d873293e06e6d23325ab2544" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_null/" class="el">Null</a> </td><td></td><td>)</td><td></td></tr></tbody></table>

A constructor used to create a `Var` of type `Null`.

<span id="a6eba29ce9f635feb4ffbdfba1014ff99" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>bool </td><td><em>b</em></td><td>)</td><td></td></tr></tbody></table>

A constructor used to create a `Var` of type `Bool`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>b</td><td>A boolean value.</td></tr></tbody></table>

<span id="a6de6c1f791f105b70d0cf815f63c2304" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>int32_t </td><td><em>i</em></td><td>)</td><td></td></tr></tbody></table>

A constructor used to create a 32 bit integer `Var`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>i</td><td>A 32 bit integer value.</td></tr></tbody></table>

<span id="a9bbdfd7d1aa2bd6c8d526ff5f6a2c035" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>double </td><td><em>d</em></td><td>)</td><td></td></tr></tbody></table>

A constructor used to create a double value `Var`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>d</td><td>A double value.</td></tr></tbody></table>

<span id="a24ae309e6e0335d2b16aab6039c231fa" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>const char * </td><td><em>utf8_str</em></td><td>)</td><td></td></tr></tbody></table>

A constructor used to create a UTF-8 character `Var`.

<span id="a4b0c8c5ef714c9444cfd8f1dd4a9fb25" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>const std::string &amp; </td><td><em>utf8_str</em></td><td>)</td><td></td></tr></tbody></table>

A constructor used to create a UTF-8 character `Var`.

<span id="a7a9b5f09aa3c5f6f6ca961904c7d87ba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">pp::Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a resource `Var`.

<span id="a64a857e38d59b1e012a02d7b8f98680f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>const PP_Var &amp; </td><td><em>var</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor used when you have received a `Var` as a return value that has had its reference count incremented for you.

You will not normally need to use this constructor because the reference count will not normally be incremented for you.

<span id="a52415e7de337c97b08eb70b06e0cda4b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>const PP_Var &amp; </td><td><em>var</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor that increments the reference count.

<span id="a2356640f40527226f295cc15ec01f302" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1_var_1_1_dont_manage/" class="el">DontManage</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>const PP_Var &amp; </td><td><em>var</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This constructor is used when we've given a `PP_Var` as an input argument from somewhere and that reference is managing the reference count for us.

The object will not have its reference count increased or decreased by this class instance.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>var</td><td>A <code>Var</code>.</td></tr></tbody></table>

<span id="aa87cbd4cc4bc47b6f1f8a749f60aa062" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#af571fae55754a20ae95ffd140726d04c" class="el">pp::Var::Var</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

A constructor for copying a `Var`.

<span id="a148a5009f2f445edfec0a5f83ed94cf4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a148a5009f2f445edfec0a5f83ed94cf4" class="el">pp::Var::~Var</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a07e7a4ea38b990e6c230109823347e70" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a07e7a4ea38b990e6c230109823347e70" class="el">pp::Var::AsBool</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a07e7a4ea38b990e6c230109823347e70" class="el" title="AsBool() converts this Var to a bool.">AsBool()</a> converts this `Var` to a bool.

Assumes the internal representation <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a83773e6f9e2ac3723e33b6a1586d5c1e" class="el" title="This function determines if this Var is a bool value.">is_bool()</a>. If it's not, it will assert in debug mode, and return false.

**Returns:**  
A bool version of this `Var`.

<span id="a8a798b08e197948c161737fc7b745af6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>double <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a8a798b08e197948c161737fc7b745af6" class="el">pp::Var::AsDouble</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a8a798b08e197948c161737fc7b745af6" class="el" title="AsDouble() converts this Var to a double.">AsDouble()</a> converts this `Var` to a double.

This function is necessary because JavaScript doesn't have a concept of ints and doubles, only numbers. The distinction between the two is an optimization inside the compiler. Since converting from a double to an int may be lossy, if you care about the distinction, either always work in doubles, or check !is\_double() before calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad31cdb379b6ceaae967125e358c81d16" class="el" title="AsInt() converts this Var to an int32_t.">AsInt()</a>.

These functions will assert in debug mode and return 0 if the internal representation is not <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae803a32764804c873dd16c48bd4fdc83" class="el" title="This function determines if this Var is a number.">is_number()</a>.

**Returns:**  
An double version of this `Var`.

<span id="ad31cdb379b6ceaae967125e358c81d16" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad31cdb379b6ceaae967125e358c81d16" class="el">pp::Var::AsInt</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad31cdb379b6ceaae967125e358c81d16" class="el" title="AsInt() converts this Var to an int32_t.">AsInt()</a> converts this `Var` to an int32\_t.

This function is required because JavaScript doesn't have a concept of ints and doubles, only numbers. The distinction between the two is an optimization inside the compiler. Since converting from a double to an int may be lossy, if you care about the distinction, either always work in doubles, or check !is\_double() before calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad31cdb379b6ceaae967125e358c81d16" class="el" title="AsInt() converts this Var to an int32_t.">AsInt()</a>.

These functions will assert in debug mode and return 0 if the internal representation is not <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae803a32764804c873dd16c48bd4fdc83" class="el" title="This function determines if this Var is a number.">is_number()</a>.

**Returns:**  
An int32\_t version of this `Var`.

<span id="a0346197dfa6ba350c6d9e3c85cc0ce80" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource/" class="el">pp::Resource</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a0346197dfa6ba350c6d9e3c85cc0ce80" class="el">pp::Var::AsResource</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

Gets the resource contained in the var.

If this object is not a resource, it will assert in debug mode, and return a null resource.

**Returns:**  
The `pp::Resource` that is contained in the var.

<span id="a22a1e3b2a0783b949bedcdae49c07c97" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>std::string <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a22a1e3b2a0783b949bedcdae49c07c97" class="el">pp::Var::AsString</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a22a1e3b2a0783b949bedcdae49c07c97" class="el" title="AsString() converts this Var to a string.">AsString()</a> converts this `Var` to a string.

If this object is not a string, it will assert in debug mode, and return an empty string.

**Returns:**  
A string version of this `Var`.

<span id="a835b1e5a601d6e5ceb9a7d1b5fb7a66f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>std::string <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a835b1e5a601d6e5ceb9a7d1b5fb7a66f" class="el">pp::Var::DebugString</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a835b1e5a601d6e5ceb9a7d1b5fb7a66f" class="el" title="DebugString() returns a short description &quot;Var&lt;X&gt;&quot; that can be used for logging, where &quot;X&quot; is the und...">DebugString()</a> returns a short description "Var&lt;X&gt;" that can be used for logging, where "X" is the underlying scalar or "UNDEFINED" or "OBJ" as it does not call into the browser to get the object description.

**Returns:**  
A string displaying the value of this `Var`. This function is used for debugging.

<span id="a84a725a42640a63747f7f6bc252b65d4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Var <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a84a725a42640a63747f7f6bc252b65d4" class="el">pp::Var::Detach</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a84a725a42640a63747f7f6bc252b65d4" class="el" title="Detach() detaches from the internal PP_Var of this object, keeping the reference count the same...">Detach()</a> detaches from the internal `PP_Var` of this object, keeping the reference count the same.

This is used when returning a `PP_Var` from an API function where the caller expects the return value to have the reference count incremented for it.

**Returns:**  
A detached version of this object without affecting the reference count.

<span id="a7a28894a77f9d69d1a4b0272bf80d657" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a7a28894a77f9d69d1a4b0272bf80d657" class="el">pp::Var::is_array</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is an array.

**Returns:**  
true if this `Var` is an array, otherwise false.

<span id="ac0fd1d153203f8fe6c23b88618a5ef65" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ac0fd1d153203f8fe6c23b88618a5ef65" class="el">pp::Var::is_array_buffer</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is an ArrayBuffer.

<span id="a83773e6f9e2ac3723e33b6a1586d5c1e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a83773e6f9e2ac3723e33b6a1586d5c1e" class="el">pp::Var::is_bool</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a bool value.

**Returns:**  
true if this `Var` is a bool, otherwise false.

<span id="ae061050e5deaac345eb089b9cd8796ea" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae061050e5deaac345eb089b9cd8796ea" class="el">pp::Var::is_dictionary</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a dictionary.

**Returns:**  
true if this `Var` is a dictionary, otherwise false.

<span id="a4a9e093ddf1475542bf0b3231e03d631" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a4a9e093ddf1475542bf0b3231e03d631" class="el">pp::Var::is_double</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a double value.

The `is_double` function returns the internal representation. The JavaScript runtime may convert between the two as needed, so the distinction may not be relevant in all cases (int is really an optimization inside the runtime). So most of the time, you will want to check <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae803a32764804c873dd16c48bd4fdc83" class="el" title="This function determines if this Var is a number.">is_number()</a>.

**Returns:**  
true if this `Var` is a double, otherwise false.

<span id="ae7dd6f7e851c81ee259095f3e826f3fd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae7dd6f7e851c81ee259095f3e826f3fd" class="el">pp::Var::is_int</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is an integer value.

The `is_int` function returns the internal representation. The JavaScript runtime may convert between the two as needed, so the distinction may not be relevant in all cases (int is really an optimization inside the runtime). So most of the time, you will want to check <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae803a32764804c873dd16c48bd4fdc83" class="el" title="This function determines if this Var is a number.">is_number()</a>.

**Returns:**  
true if this `Var` is an integer, otherwise false.

<span id="aa4a9d8309d3390aa56a4f2966daf6533" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#aa4a9d8309d3390aa56a4f2966daf6533" class="el">pp::Var::is_null</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a null value.

**Returns:**  
true if this `Var` is null, otherwise false.

<span id="ae803a32764804c873dd16c48bd4fdc83" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ae803a32764804c873dd16c48bd4fdc83" class="el">pp::Var::is_number</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a number.

**Returns:**  
true if this `Var` is an int32\_t or double number, otherwise false.

<span id="a79ed26c49d64b536619a1ee574848a36" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a79ed26c49d64b536619a1ee574848a36" class="el">pp::Var::is_object</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is an object.

**Returns:**  
true if this `Var` is an object, otherwise false.

<span id="a8ed51b6cd4e1b6fee46d8fdf27c98ef1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a8ed51b6cd4e1b6fee46d8fdf27c98ef1" class="el">pp::Var::is_resource</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a resource.

**Returns:**  
true if this `Var` is a resource, otherwise false.

<span id="a57ce2eb7f023f383194155b25b53d297" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a57ce2eb7f023f383194155b25b53d297" class="el">pp::Var::is_string</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is a string value.

**Returns:**  
true if this `Var` is a string, otherwise false.

<span id="afe677b5834bfb5f1364d212a52f1879e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#afe677b5834bfb5f1364d212a52f1879e" class="el">pp::Var::is_undefined</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `Var` is an undefined value.

**Returns:**  
true if this `Var` is undefined, otherwise false.

<span id="a65601024610f1625c9945acb8725d7c4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a>&amp; pp::Var::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

This function assigns one `Var` to another `Var`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>The <code>Var</code> to be assigned.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A resulting `Var`.

Reimplemented in <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array_buffer#a9cbb8584d8edc5d03875de67dec4086c" class="el">pp::VarArrayBuffer</a>, <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_dictionary#a689815e0b4e50e2f1e9aaa8b1ef34e00" class="el">pp::VarDictionary</a>, and <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_array#aeb98c95929dd46d1f64eba13db724154" class="el">pp::VarArray</a>.

<span id="ad689c287e64f984eb951c57af303a444" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool pp::Var::operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> &amp; </td><td><em>other</em></td><td>)</td><td>const</td></tr></tbody></table>

This function compares object identity (rather than value identity) for objects, dictionaries, and arrays.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>The <code>Var</code> to be compared to this <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el" title="A generic type used for passing data types between the module and the page.">Var</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the `other` `Var` is the same as this `Var`, otherwise false.

<span id="ad828439641c93930ff188b45b45b4261" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const PP_Var&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#ad828439641c93930ff188b45b45b4261" class="el">pp::Var::pp_var</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function returns the internal `PP_Var` managed by this `Var` object.

**Returns:**  
A const reference to a `PP_Var`.

------------------------------------------------------------------------

Member Data Documentation
-------------------------

<span id="a94bec264c03634f7ba66fb46ed4fda0b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a94bec264c03634f7ba66fb46ed4fda0b" class="el">pp::Var::is_managed_</a><code> [protected]</code></td></tr></tbody></table>

<span id="a7c1225564a0e3ab910823fc20d2611ab" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Var <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var#a7c1225564a0e3ab910823fc20d2611ab" class="el">pp::Var::var_</a><code> [protected]</code></td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/var_8h/" class="el">var.h</a>
