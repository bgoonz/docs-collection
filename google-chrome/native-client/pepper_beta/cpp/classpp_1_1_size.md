---json {"title":"pp::Size Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_size-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a5ffffc4488c677716baed27752b6a6c1" class="el">Size</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#aa050f55ab1775d0ee1b0ae174e1495df" class="el">Size</a> (const PP_Size &amp;s)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a14a1c612454596e43a94c01da338bc1e" class="el">Size</a> (int w, int h)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#aff4a88df9882be410ca78d338d2d87dc" class="el">~Size</a> ()</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a72cbb6066dd37615daaa3d3c1a0c595a" class="el">operator PP_Size</a> ()</td></tr><tr class="even"><td style="text-align: right;">const PP_Size &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ad61947a5f2a3bbe90dc62c62cc799174" class="el">pp_size</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_Size &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ae20ce070c015adec8b5411b047db5917" class="el">pp_size</a> ()</td></tr><tr class="even"><td style="text-align: right;">int </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#af043a504c701e32c504c63b9e91ac500" class="el">width</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a104cf1f6a95c1430f7cd15a26815e82a" class="el">set_width</a> (int w)</td></tr><tr class="even"><td style="text-align: right;">int </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a61a68178eefa2589ead95491ac079139" class="el">height</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a2805413bf372ad033fcf505c8d3cce34" class="el">set_height</a> (int h)</td></tr><tr class="even"><td style="text-align: right;">int </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ac056add4f1e8b1f90a6e3c65afa4ba3b" class="el">GetArea</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a25d85979d55798a9b672ca73c1d48222" class="el">SetSize</a> (int w, int h)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a51a74964f27e139003b82aad55dd63f5" class="el">Enlarge</a> (int w, int h)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a11e791714686761966773adcc94218bb" class="el">IsEmpty</a> () const</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

A size of an object based on width and height.

---

## Constructor & Destructor Documentation

<span id="a5ffffc4488c677716baed27752b6a6c1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a5ffffc4488c677716baed27752b6a6c1" class="el">pp::Size::Size</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The default constructor. Initializes the width and height to 0.

<span id="aa050f55ab1775d0ee1b0ae174e1495df" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a5ffffc4488c677716baed27752b6a6c1" class="el">pp::Size::Size</a></td><td>(</td><td>const PP_Size &amp; </td><td><em>s</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting a pointer to a `PP_Size` and converting the `PP_Size` to a `Size`.

This is an implicit conversion constructor.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>s</td><td>A pointer to a <code>PP_Size</code>.</td></tr></tbody></table>

<span id="a14a1c612454596e43a94c01da338bc1e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a5ffffc4488c677716baed27752b6a6c1" class="el">pp::Size::Size</a></td><td>(</td><td>int </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>int </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting two int values for width and height and converting them to a `Size`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>An int value representing a width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>An int value representing a height.</td></tr></tbody></table>

<span id="aff4a88df9882be410ca78d338d2d87dc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#aff4a88df9882be410ca78d338d2d87dc" class="el">pp::Size::~Size</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Destructor.

---

## Member Function Documentation

<span id="a51a74964f27e139003b82aad55dd63f5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a51a74964f27e139003b82aad55dd63f5" class="el">pp::Size::Enlarge</a></td><td>(</td><td>int </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>int </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a51a74964f27e139003b82aad55dd63f5" class="el" title="Enlarge() enlarges the size of an object.">Enlarge()</a> enlarges the size of an object.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>A width to add the current width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>A height to add to the current height.</td></tr></tbody></table>

<span id="ac056add4f1e8b1f90a6e3c65afa4ba3b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ac056add4f1e8b1f90a6e3c65afa4ba3b" class="el">pp::Size::GetArea</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ac056add4f1e8b1f90a6e3c65afa4ba3b" class="el" title="GetArea() determines the area (width * height).">GetArea()</a> determines the area (width \* height).

**Returns:**  
The area.

<span id="a61a68178eefa2589ead95491ac079139" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a61a68178eefa2589ead95491ac079139" class="el">pp::Size::height</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of height.

**Returns:**  
The value of height for this `Size`.

<span id="a11e791714686761966773adcc94218bb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a11e791714686761966773adcc94218bb" class="el">pp::Size::IsEmpty</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a11e791714686761966773adcc94218bb" class="el" title="IsEmpty() determines if the size is zero.">IsEmpty()</a> determines if the size is zero.

**Returns:**  
true if the size is zero.

<span id="a72cbb6066dd37615daaa3d3c1a0c595a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>pp::Size::operator PP_Size</td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

PP_Size() allows implicit conversion of a `Size` to a `PP_Size`.

**Returns:**  
A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el" title="A size of an object based on width and height.">Size</a>.

<span id="ad61947a5f2a3bbe90dc62c62cc799174" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const PP_Size&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ad61947a5f2a3bbe90dc62c62cc799174" class="el">pp::Size::pp_size</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PP_Size` struct.

**Returns:**  
A const reference to the internal `PP_Size` struct.

<span id="ae20ce070c015adec8b5411b047db5917" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Size&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#ad61947a5f2a3bbe90dc62c62cc799174" class="el">pp::Size::pp_size</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal `PP_Size` struct.

**Returns:**  
A mutable reference to the `PP_Size` struct.

<span id="a2805413bf372ad033fcf505c8d3cce34" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a2805413bf372ad033fcf505c8d3cce34" class="el">pp::Size::set_height</a></td><td>(</td><td>int </td><td><em>h</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of height.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>h</td><td>A new height value.</td></tr></tbody></table>

<span id="a104cf1f6a95c1430f7cd15a26815e82a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a104cf1f6a95c1430f7cd15a26815e82a" class="el">pp::Size::set_width</a></td><td>(</td><td>int </td><td><em>w</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of width.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>A new width value.</td></tr></tbody></table>

<span id="a25d85979d55798a9b672ca73c1d48222" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a25d85979d55798a9b672ca73c1d48222" class="el">pp::Size::SetSize</a></td><td>(</td><td>int </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>int </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#a25d85979d55798a9b672ca73c1d48222" class="el" title="SetSize() sets the value of width and height.">SetSize()</a> sets the value of width and height.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>A new width value.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>A new height value.</td></tr></tbody></table>

<span id="af043a504c701e32c504c63b9e91ac500" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#af043a504c701e32c504c63b9e91ac500" class="el">pp::Size::width</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of width.

**Returns:**  
The value of width for this `Size`.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/size_8h/" class="el">size.h</a>
