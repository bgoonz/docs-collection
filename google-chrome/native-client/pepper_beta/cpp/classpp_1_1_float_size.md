---json {"title":"pp::FloatSize Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a91414423a7cbbf8351411068bf421dd0" class="el">FloatSize</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#aa0e0d4226243d988ae0b3deda568b4aa" class="el">FloatSize</a> (const PP_FloatSize &amp;s)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a9c220e08fee17fc94c0f4be986dced9f" class="el">FloatSize</a> (float w, float h)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#aa84f34b811eaa0d1df9df3e45ffcad62" class="el">~FloatSize</a> ()</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#afb9299a590c01b087093f6ed92851e34" class="el">operator PP_FloatSize</a> ()</td></tr><tr class="even"><td style="text-align: right;">const PP_FloatSize &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a7b6927a68a34300dd387e1c1a88f1ba1" class="el">pp_float_size</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_FloatSize &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#ad498f68d6cdef2b82d36e86186b0dea8" class="el">pp_float_size</a> ()</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a0d6da88f00641c03bac5719e70120f60" class="el">width</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a1ba0848cf46407dbd38faae98066d19b" class="el">set_width</a> (float w)</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a50b992d924016a21b105eb4188498fb5" class="el">height</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#ae97846a7d14b1c512908672277ea651c" class="el">set_height</a> (float h)</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#af853066f332b80b810be32f1b8a53088" class="el">GetArea</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#add235ac4ae08be3c14b3a0033e97b470" class="el">SetSize</a> (float w, float h)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a080710fed6678c639b1a894e88734fb6" class="el">Enlarge</a> (float w, float h)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a0528086304774d3024798a42ec559e79" class="el">IsEmpty</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A size of an object based on width and height.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a91414423a7cbbf8351411068bf421dd0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a91414423a7cbbf8351411068bf421dd0" class="el">pp::FloatSize::FloatSize</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The default constructor. Initializes the width and height to 0.0f.

<span id="aa0e0d4226243d988ae0b3deda568b4aa" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a91414423a7cbbf8351411068bf421dd0" class="el">pp::FloatSize::FloatSize</a></td><td>(</td><td>const PP_FloatSize &amp; </td><td><em>s</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting a pointer to a `PP_FloatSize` and converting the `PP_FloatSize` to a `FloatSize`.

This is an implicit conversion constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>s</td><td>A pointer to a <code>PP_FloatSize</code>.</td></tr></tbody></table>

<span id="a9c220e08fee17fc94c0f4be986dced9f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a91414423a7cbbf8351411068bf421dd0" class="el">pp::FloatSize::FloatSize</a></td><td>(</td><td>float </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting two float values for width and height and converting them to a `FloatSize`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>An float value representing a width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>An float value representing a height.</td></tr></tbody></table>

<span id="aa84f34b811eaa0d1df9df3e45ffcad62" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#aa84f34b811eaa0d1df9df3e45ffcad62" class="el">pp::FloatSize::~FloatSize</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a080710fed6678c639b1a894e88734fb6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a080710fed6678c639b1a894e88734fb6" class="el">pp::FloatSize::Enlarge</a></td><td>(</td><td>float </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a080710fed6678c639b1a894e88734fb6" class="el" title="Enlarge() enlarges the size of an object.">Enlarge()</a> enlarges the size of an object.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>A width to add the current width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>A height to add to the current height.</td></tr></tbody></table>

<span id="af853066f332b80b810be32f1b8a53088" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#af853066f332b80b810be32f1b8a53088" class="el">pp::FloatSize::GetArea</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#af853066f332b80b810be32f1b8a53088" class="el" title="GetArea() determines the area (width * height).">GetArea()</a> determines the area (width \* height).

**Returns:**  
The area.

<span id="a50b992d924016a21b105eb4188498fb5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a50b992d924016a21b105eb4188498fb5" class="el">pp::FloatSize::height</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of height.

**Returns:**  
The value of height for this `FloatSize`.

<span id="a0528086304774d3024798a42ec559e79" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a0528086304774d3024798a42ec559e79" class="el">pp::FloatSize::IsEmpty</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a0528086304774d3024798a42ec559e79" class="el" title="IsEmpty() determines if the size is zero.">IsEmpty()</a> determines if the size is zero.

**Returns:**  
true if the size is zero.

<span id="afb9299a590c01b087093f6ed92851e34" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>pp::FloatSize::operator PP_FloatSize</td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

PP\_FloatSize() allows implicit conversion of a `FloatSize` to a `PP_FloatSize`.

**Returns:**  
A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el" title="A size of an object based on width and height.">Size</a>.

<span id="a7b6927a68a34300dd387e1c1a88f1ba1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const PP_FloatSize&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a7b6927a68a34300dd387e1c1a88f1ba1" class="el">pp::FloatSize::pp_float_size</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PP_FloatSize` struct.

**Returns:**  
A const reference to the internal `PP_FloatSize` struct.

<span id="ad498f68d6cdef2b82d36e86186b0dea8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_FloatSize&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a7b6927a68a34300dd387e1c1a88f1ba1" class="el">pp::FloatSize::pp_float_size</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PP_FloatSize` struct.

**Returns:**  
A mutable reference to the `PP_FloatSize` struct.

<span id="ae97846a7d14b1c512908672277ea651c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#ae97846a7d14b1c512908672277ea651c" class="el">pp::FloatSize::set_height</a></td><td>(</td><td>float </td><td><em>h</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of height.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>h</td><td>A new height value.</td></tr></tbody></table>

<span id="a1ba0848cf46407dbd38faae98066d19b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a1ba0848cf46407dbd38faae98066d19b" class="el">pp::FloatSize::set_width</a></td><td>(</td><td>float </td><td><em>w</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of width.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>A new width value.</td></tr></tbody></table>

<span id="add235ac4ae08be3c14b3a0033e97b470" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#add235ac4ae08be3c14b3a0033e97b470" class="el">pp::FloatSize::SetSize</a></td><td>(</td><td>float </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#add235ac4ae08be3c14b3a0033e97b470" class="el" title="SetSize() sets the value of width and height.">SetSize()</a> sets the value of width and height.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>A new width value.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>A new height value.</td></tr></tbody></table>

<span id="a0d6da88f00641c03bac5719e70120f60" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#a0d6da88f00641c03bac5719e70120f60" class="el">pp::FloatSize::width</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of width.

**Returns:**  
The value of width for this `FloatSize`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/size_8h/" class="el">size.h</a>
