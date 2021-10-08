---json {"title":"pp::Point Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_point-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a0175483c538fdf65c7bd056f0dc25b90" class="el">Point</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a18c7d4691920879ed45bde20b79c8d76" class="el">Point</a> (int32_t in_x, int32_t in_y)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a3d572a358d2f3ce860bc7d0406e1c1da" class="el">Point</a> (const PP_Point &amp;point)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#abd093db1c01b63642cf8a8b73620626e" class="el">~Point</a> ()</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a2d5803331cba5ef9f6fea1dca3fb0773" class="el">operator PP_Point</a> () const</td></tr><tr class="even"><td style="text-align: right;">const PP_Point &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a1e25e160421a213924a4956a1d8da8b8" class="el">pp_point</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_Point &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#afff81b0164d11767c03a49e8e6ee3509" class="el">pp_point</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a802963acd6223e5520c4e93a0ae7c1ab" class="el">x</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a1282f3331d3565beafd7e939d6ffcac7" class="el">set_x</a> (int32_t in_x)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a870a9bfcf7a54c18f4e5f382f69fc60d" class="el">y</a> () const</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#af3e1a26a8dd635d8c77c5f86d81deb3c" class="el">set_y</a> (int32_t in_y)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a7f2e778a029a9c6303f9606c165bcd73" class="el">operator+</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;other) const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a098ba0a739056bec9da6706e7be28f2b" class="el">operator-</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;other) const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a560a8ea46bd77f995f201437e78c26a9" class="el">operator+=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a94cb2c93b7ab92c441bb4fc49a4223a3" class="el">operator-=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a197414e35cbd23b762fb04cb39bb2296" class="el">swap</a> (<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp;other)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A 2 dimensional point with 0,0 being the upper-left starting coordinate.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a0175483c538fdf65c7bd056f0dc25b90" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a0175483c538fdf65c7bd056f0dc25b90" class="el">pp::Point::Point</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The default constructor for a point at 0,0.

<span id="a18c7d4691920879ed45bde20b79c8d76" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a0175483c538fdf65c7bd056f0dc25b90" class="el">pp::Point::Point</a></td><td>(</td><td>int32_t </td><td><em>in_x</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>in_y</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting two int32\_t values for x and y and converting them to a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>in_x</td><td>An int32_t value representing a horizontal coordinate of a point, starting with 0 as the left-most coordinate.</td></tr><tr class="even"><td>[in]</td><td>in_y</td><td>An int32_t value representing a vertical coordinate of a point, starting with 0 as the top-most coordinate.</td></tr></tbody></table>

<span id="a3d572a358d2f3ce860bc7d0406e1c1da" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a0175483c538fdf65c7bd056f0dc25b90" class="el">pp::Point::Point</a></td><td>(</td><td>const PP_Point &amp; </td><td><em>point</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

A constructor accepting a pointer to a PP\_Point and converting the PP\_Point to a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

This is an implicit conversion constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>point</td><td>A pointer to a PP_Point.</td></tr></tbody></table>

<span id="abd093db1c01b63642cf8a8b73620626e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#abd093db1c01b63642cf8a8b73620626e" class="el">pp::Point::~Point</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a2d5803331cba5ef9f6fea1dca3fb0773" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>pp::Point::operator PP_Point</td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

A function allowing implicit conversion of a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> to a PP\_Point.

**Returns:**  
A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

<span id="a7f2e778a029a9c6303f9606c165bcd73" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> pp::Point::operator+</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>other</em></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Adds two Points (this and other) together by adding their x values and y values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a560a8ea46bd77f995f201437e78c26a9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a>&amp; pp::Point::operator+=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Adds two Points (this and other) together by adding their x and y values.

Returns this point as the result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
This <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a098ba0a739056bec9da6706e7be28f2b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> pp::Point::operator-</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>other</em></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Subtracts one <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> from another <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> by subtracting their x values and y values.

Returns a new point with the result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a94cb2c93b7ab92c441bb4fc49a4223a3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a>&amp; pp::Point::operator-=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Subtracts one <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> from another <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> by subtracting their x values and y values.

Returns this point as the result.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
This <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a> containing the result.

<span id="a1e25e160421a213924a4956a1d8da8b8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const PP_Point&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a1e25e160421a213924a4956a1d8da8b8" class="el">pp::Point::pp_point</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal PP\_Point struct.

**Returns:**  
A const reference to the internal PP\_Point struct.

<span id="afff81b0164d11767c03a49e8e6ee3509" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Point&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a1e25e160421a213924a4956a1d8da8b8" class="el">pp::Point::pp_point</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Getter function for returning the internal PP\_Point struct.

**Returns:**  
A mutable reference to the PP\_Point struct.

<span id="a1282f3331d3565beafd7e939d6ffcac7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a1282f3331d3565beafd7e939d6ffcac7" class="el">pp::Point::set_x</a></td><td>(</td><td>int32_t </td><td><em>in_x</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of x.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>in_x</td><td>A new x value.</td></tr></tbody></table>

<span id="af3e1a26a8dd635d8c77c5f86d81deb3c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#af3e1a26a8dd635d8c77c5f86d81deb3c" class="el">pp::Point::set_y</a></td><td>(</td><td>int32_t </td><td><em>in_y</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Setter function for setting the value of y.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>in_y</td><td>A new y value.</td></tr></tbody></table>

<span id="a197414e35cbd23b762fb04cb39bb2296" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a197414e35cbd23b762fb04cb39bb2296" class="el">pp::Point::swap</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> &amp; </td><td><em>other</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Swaps the coordinates of two Points.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.</td></tr></tbody></table>

<span id="a802963acd6223e5520c4e93a0ae7c1ab" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a802963acd6223e5520c4e93a0ae7c1ab" class="el">pp::Point::x</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of x.

**Returns:**  
The value of x for this <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

<span id="a870a9bfcf7a54c18f4e5f382f69fc60d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#a870a9bfcf7a54c18f4e5f382f69fc60d" class="el">pp::Point::y</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

Getter function for returning the value of y.

**Returns:**  
The value of y for this <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el" title="A 2 dimensional point with 0,0 being the upper-left starting coordinate.">Point</a>.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/point_8h/" class="el">point.h</a>
