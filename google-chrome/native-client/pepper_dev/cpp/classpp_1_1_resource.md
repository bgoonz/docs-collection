---json {"title":"pp::Resource Class Reference"} ---

Inheritance diagram for pp::Resource:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_resource__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_resource-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a56679e93a58101c8dce5dc510811a094" class="el">Resource</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#ab0f664099ca06367180f220ea7e0b831" class="el">Resource</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a081165265e2bd8217eaa2be2aeeb3aa3" class="el">~Resource</a> ()</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#aaf808a98bdaa7998d82e19514aa87423" class="el">operator=</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el">is_null</a> () const</td></tr><tr class="even"><td style="text-align: right;">PP_Resource </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a46a6123de0b007ad3fcb6f666534ccb4" class="el">pp_resource</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_Resource </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a81b9246381bdddacca3ac25f6ded2bfd" class="el">detach</a> ()</td></tr></tbody></table>

Protected Member Functions
--------------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a555de93fdf4793f7db1183bf71d20580" class="el">Resource</a> (PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a907d3d6b7e292587c8cb9ff30d0a418d" class="el">Resource</a> (<a href="/docs/native-client/pepper_dev/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a3eda014529127a818df8d5bb5ec2fdf0" class="el">PassRefFromConstructor</a> (PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#ad4016f37d3022863ca0188acb26ac9c4" class="el">Clear</a> ()</td></tr></tbody></table>

Friends
-------

<table><tbody><tr class="odd"><td style="text-align: right;">class </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a966ff6c3e1475d52398924cc6d3cbb6d" class="el">Var</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A reference counted module resource.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a56679e93a58101c8dce5dc510811a094" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a56679e93a58101c8dce5dc510811a094" class="el">pp::Resource::Resource</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

The default constructor.

<span id="ab0f664099ca06367180f220ea7e0b831" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a56679e93a58101c8dce5dc510811a094" class="el">pp::Resource::Resource</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

A constructor for copying a resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <code>Resource</code>.</td></tr></tbody></table>

<span id="a081165265e2bd8217eaa2be2aeeb3aa3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a081165265e2bd8217eaa2be2aeeb3aa3" class="el">pp::Resource::~Resource</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

Destructor.

<span id="a555de93fdf4793f7db1183bf71d20580" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a56679e93a58101c8dce5dc510811a094" class="el">pp::Resource::Resource</a></td><td>(</td><td>PP_Resource </td><td><em>resource</em></td><td>)</td><td><code> [explicit, protected]</code></td></tr></tbody></table>

A constructor used when a `PP_Resource` is provided as a return value whose reference count we need to increment.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

<span id="a907d3d6b7e292587c8cb9ff30d0a418d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a56679e93a58101c8dce5dc510811a094" class="el">pp::Resource::Resource</a></td><td>(</td><td><a href="/docs/native-client/pepper_dev/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [protected]</code></td></tr></tbody></table>

Constructor used when a `PP_Resource` already has a ref count assigned.

Add additional refcount is not taken.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="ad4016f37d3022863ca0188acb26ac9c4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#ad4016f37d3022863ca0188acb26ac9c4" class="el">pp::Resource::Clear</a></td><td>(</td><td></td><td>)</td><td><code> [protected]</code></td></tr></tbody></table>

Sets this resource to null. This releases ownership of the resource.

<span id="a81b9246381bdddacca3ac25f6ded2bfd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Resource <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a81b9246381bdddacca3ac25f6ded2bfd" class="el">pp::Resource::detach</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

This function releases ownership of this resource and returns it to the caller.

Note that the reference count on the resource is unchanged and the caller needs to release the resource.

**Returns:**  
The detached `PP_Resource`.

<span id="a859068e34cdc2dc0b78754c255323aa9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el">pp::Resource::is_null</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This functions determines if this resource is invalid or uninitialized.

**Returns:**  
true if this resource is invalid or uninitialized.

<span id="aaf808a98bdaa7998d82e19514aa87423" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el">Resource</a>&amp; pp::Resource::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

This function assigns one `Resource` to another `Resource`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el" title="A reference counted module resource.">Resource</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el" title="A reference counted module resource.">Resource</a> containing the assigned <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource/" class="el" title="A reference counted module resource.">Resource</a>.

<span id="a3eda014529127a818df8d5bb5ec2fdf0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a3eda014529127a818df8d5bb5ec2fdf0" class="el">pp::Resource::PassRefFromConstructor</a></td><td>(</td><td>PP_Resource </td><td><em>resource</em></td><td>)</td><td><code> [protected]</code></td></tr></tbody></table>

PassRefFromConstructor is called by derived class' constructors to initialize this `Resource` with a `PP_Resource` that has already had its reference count incremented by `Core::AddRefResource`.

It also assumes this object has no current resource.

The intended usage of this function that the derived class constructor will call the default `Resource` constructor, then make a call to create a resource. It then wants to assign the new resource (which, since it was returned by the browser, already had its reference count increased).

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

<span id="a46a6123de0b007ad3fcb6f666534ccb4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Resource <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a46a6123de0b007ad3fcb6f666534ccb4" class="el">pp::Resource::pp_resource</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

------------------------------------------------------------------------

Friends And Related Function Documentation
------------------------------------------

<span id="a966ff6c3e1475d52398924cc6d3cbb6d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>friend class <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_var/" class="el">Var</a><code> [friend]</code></td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/resource_8h/" class="el">resource.h</a>
