—json {“title”:“point.h File Reference”} —

Include dependency graph for point.h:

![](/docs/native-client/pepper_beta/cpp/point_8h__incl.png)

Classes
-------

<table><tbody><tr class="odd"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A 2 dimensional point with 0,0 being the upper-left starting coordinate. <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point#details">More…</a><br />
</td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A 2 dimensional floating-point point with 0,0 being the upper-left starting coordinate. <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point#details">More…</a><br />
</td></tr></tbody></table>

Namespaces
----------

<table><tbody><tr class="odd"><td style="text-align: right;">namespace  </td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp/" class="el">pp</a></td></tr></tbody></table>

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/point_8h#acdca90fb96f299839dcea8d836d6f92f" class="el">operator==</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp;rhs)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/point_8h#a49089c373eeebff274a723f7545b7680" class="el">operator!=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp;rhs)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/point_8h#a59d82ac98ce35697fae48edd66a7fdba" class="el">operator==</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp;rhs)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/point_8h#a429594ae059c2956f538876c3c4e68c2" class="el">operator!=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp;rhs)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the API to create a 2 dimensional point.

------------------------------------------------------------------------

Function Documentation
----------------------

<span id="a49089c373eeebff274a723f7545b7680" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator!=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

Determines whether two Points have different coordinates.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The Point on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The Point on the right-hand side of the equation.</td></tr></tbody></table>

**Returns:**  
true if the coordinates of lhs are equal to the coordinates of rhs, otherwise false.

<span id="a429594ae059c2956f538876c3c4e68c2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator!=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

Determines whether two Points have different coordinates.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The Point on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The Point on the right-hand side of the equation.</td></tr></tbody></table>

**Returns:**  
true if the coordinates of lhs are equal to the coordinates of rhs, otherwise false.

<span id="acdca90fb96f299839dcea8d836d6f92f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">pp::Point</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

Determines whether the x and y values of two Points are equal.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The Point on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The Point on the right-hand side of the equation.</td></tr></tbody></table>

**Returns:**  
true if they are equal, false if unequal.

<span id="a59d82ac98ce35697fae48edd66a7fdba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_point/" class="el">pp::FloatPoint</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

Determines whether the x and y values of two FloatPoints are equal.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The Point on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The Point on the right-hand side of the equation.</td></tr></tbody></table>

**Returns:**  
true if they are equal, false if unequal.
