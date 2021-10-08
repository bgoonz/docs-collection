---json {"title":"rect.h File Reference"} ---

Include dependency graph for rect.h:

![](/docs/native-client/pepper_dev/cpp/rect_8h__incl.png)

Classes
-------

<table><tbody><tr class="odd"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A 2 dimensional rectangle. <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect#details">More...</a><br />
</td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A 2 dimensional rectangle. <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect#details">More...</a><br />
</td></tr></tbody></table>

Namespaces
----------

<table><tbody><tr class="odd"><td style="text-align: right;">namespace  </td><td><a href="/docs/native-client/pepper_dev/cpp/namespacepp/" class="el">pp</a></td></tr></tbody></table>

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/rect_8h#a79b9bc57ea3e03a0e56b7975b4ffd401" class="el">operator==</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp;lhs, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp;rhs)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/rect_8h#a29f92b097dbed35ecf5f5ab1932a644e" class="el">operator!=</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp;lhs, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp;rhs)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/rect_8h#aef5ba071d7dd3b4a51d5750f056a2649" class="el">operator==</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp;lhs, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp;rhs)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/rect_8h#acdab4b41e6fa67e079c9c54407fc9153" class="el">operator!=</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp;lhs, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp;rhs)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the APIs for creating a 2 dimensional rectangle.

------------------------------------------------------------------------

Function Documentation
----------------------

<span id="a29f92b097dbed35ecf5f5ab1932a644e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator!=</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether two Rects are not equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>Rect</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>Rect</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the given Rects are equal, otherwise false.

<span id="acdab4b41e6fa67e079c9c54407fc9153" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator!=</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether two Rects are not equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>FloatRect</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>FloatRect</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the given Rects are equal, otherwise false.

<span id="a79b9bc57ea3e03a0e56b7975b4ffd401" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_rect/" class="el">pp::Rect</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether the x, y, width, and height values of two rectangles and are equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>Rect</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>Rect</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if they are equal, false if unequal.

<span id="aef5ba071d7dd3b4a51d5750f056a2649" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_rect/" class="el">pp::FloatRect</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether the x, y, width, and height values of two rectangles and are equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>FloatRect</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>FloatRect</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if they are equal, false if unequal.
