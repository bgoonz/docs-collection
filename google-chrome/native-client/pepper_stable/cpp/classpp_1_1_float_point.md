---json {"title":"pp::FloatPoint Class Reference"} ---

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a384b29d8aba4a43b399393e695eb1e81" class="el">FloatPoint</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#acb70a23a641f05fd5eb99e9439e556d2" class="el">FloatPoint</a> (float in_x, float in_y)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a401fc74a911cd0d4996b00f8b10a1951" class="el">FloatPoint</a> (const PP_FloatPoint &amp;point)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#ab41958133c5b48f6002ad9bffdad46c0" class="el">~FloatPoint</a> ()</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#adfa14cbb4f94c3133e4bce72f93570bf" class="el">operator PP_FloatPoint</a> () const</td></tr><tr class="even"><td style="text-align: right;">const PP_FloatPoint &amp; </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a74112618552ed91f200794127bf64eea" class="el">pp_float_point</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_FloatPoint &amp; </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a75ab7bd430e1f5edb00d9976061898ed" class="el">pp_float_point</a> ()</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a9109ddb0920cf0eeb7ace3b40a95dc17" class="el">x</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a276b372b82ea3cd0021017ba4a002838" class="el">set_x</a> (float in_x)</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#ac8bcb2ac55fa5fcf89a7b61369eeed2b" class="el">y</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#abdb8eeb5c2aa051e6776ae2967fc6d40" class="el">set_y</a> (float in_y)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a8aeaf7286bc04e7ff7f9d405fdfe614b" class="el">operator+</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;other) const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a2ae33c7eb2dbc4a8d366db080f3a136b" class="el">operator-</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;other) const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a15985b03ca98d65bdf300dc3d12ca57a" class="el">operator+=</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a419049446659935f8bfe3e47d33b752b" class="el">operator-=</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a138f26f94ed5a97e1ee083e65eb101bf" class="el">swap</a> (<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp;other)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A 2 dimensional floating-point point with 0,0 being the upper-left starting coordinate.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a384b29d8aba4a43b399393e695eb1e81" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a384b29d8aba4a43b399393e695eb1e81" class="el">pp::FloatPoint::FloatPoint</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

A constructor for a point at 0,0.

<span id="acb70a23a641f05fd5eb99e9439e556d2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a384b29d8aba4a43b399393e695eb1e81" class="el">pp::FloatPoint::FloatPoint</a></td><td>(</td><td>float </td><td><em>in_x</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>in_y</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting two values for x and y and converting them to a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el" title="A 2 dimensional floating-point point with 0,0 being the upper-left starting coordinate.">FloatPoint</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>in_x</td><td>An value representing a horizontal coordinate of a point, starting with 0 as the left-most coordinate.</td></tr><tr class="even"><td>[in]</td><td>in_y</td><td>An value representing a vertical coordinate of a point, starting with 0 as the top-most coordinate.</td></tr></tbody></table>

<span id="a401fc74a911cd0d4996b00f8b10a1951" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a384b29d8aba4a43b399393e695eb1e81" class="el">pp::FloatPoint::FloatPoint</a></td><td>(</td><td>const PP_FloatPoint &amp; </td><td><em>point</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting a pointer to a PP\_FloatPoint and converting the PP\_Point to a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

This is an implicit conversion constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>point</td><td>A PP_FloatPoint.</td></tr></tbody></table>

<span id="ab41958133c5b48f6002ad9bffdad46c0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#ab41958133c5b48f6002ad9bffdad46c0" class="el">pp::FloatPoint::~FloatPoint</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="adfa14cbb4f94c3133e4bce72f93570bf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>pp::FloatPoint::operator PP_FloatPoint</td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

A function allowing implicit conversion of a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el" title="A 2 dimensional floating-point point with 0,0 being the upper-left starting coordinate.">FloatPoint</a> to a PP\_FloatPoint.

<span id="a8aeaf7286bc04e7ff7f9d405fdfe614b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> pp::FloatPoint::operator+</td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>other</em></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Adds two Points (this and other) together by adding their x values and y values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a15985b03ca98d65bdf300dc3d12ca57a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a>&amp; pp::FloatPoint::operator+=</td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Adds two Points (this and other) together by adding their x and y values.

Returns this point as the result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
This <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a2ae33c7eb2dbc4a8d366db080f3a136b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> pp::FloatPoint::operator-</td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>other</em></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Subtracts one <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> from another <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> by subtracting their x values and y values.

Returns a new point with the result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el" title="A 2 dimensional floating-point point with 0,0 being the upper-left starting coordinate.">FloatPoint</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a419049446659935f8bfe3e47d33b752b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a>&amp; pp::FloatPoint::operator-=</td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Subtracts one <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> from another <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> by subtracting their x values and y values.

Returns this point as the result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
This <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a74112618552ed91f200794127bf64eea" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const PP_FloatPoint&amp; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a74112618552ed91f200794127bf64eea" class="el">pp::FloatPoint::pp_float_point</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal PP\_FloatPoint struct.

**Returns:**  
A const reference to the internal PP\_FloatPoint struct.

<span id="a75ab7bd430e1f5edb00d9976061898ed" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_FloatPoint&amp; <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a74112618552ed91f200794127bf64eea" class="el">pp::FloatPoint::pp_float_point</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal PP\_Point struct.

**Returns:**  
A mutable reference to the PP\_Point struct.

<span id="a276b372b82ea3cd0021017ba4a002838" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a276b372b82ea3cd0021017ba4a002838" class="el">pp::FloatPoint::set_x</a></td><td>(</td><td>float </td><td><em>in_x</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of x.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>in_x</td><td>A new x value.</td></tr></tbody></table>

<span id="abdb8eeb5c2aa051e6776ae2967fc6d40" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#abdb8eeb5c2aa051e6776ae2967fc6d40" class="el">pp::FloatPoint::set_y</a></td><td>(</td><td>float </td><td><em>in_y</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of y.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>in_y</td><td>A new y value.</td></tr></tbody></table>

<span id="a138f26f94ed5a97e1ee083e65eb101bf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a138f26f94ed5a97e1ee083e65eb101bf" class="el">pp::FloatPoint::swap</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Swaps the coordinates of two Points.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<span id="a9109ddb0920cf0eeb7ace3b40a95dc17" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#a9109ddb0920cf0eeb7ace3b40a95dc17" class="el">pp::FloatPoint::x</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of x.

**Returns:**  
The value of x for this <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

<span id="ac8bcb2ac55fa5fcf89a7b61369eeed2b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_float_point#ac8bcb2ac55fa5fcf89a7b61369eeed2b" class="el">pp::FloatPoint::y</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of y.

**Returns:**  
The value of y for this <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/point_8h/" class="el">point.h</a>
