---json {"title":"size.h File Reference"} ---

Include dependency graph for size.h:

![](/docs/native-client/pepper_beta/cpp/size_8h__incl.png)

Classes
-------

<table><tbody><tr class="odd"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A size of an object based on width and height. <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size#details">More...</a><br />
</td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A size of an object based on width and height. <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size#details">More...</a><br />
</td></tr></tbody></table>

Namespaces
----------

<table><tbody><tr class="odd"><td style="text-align: right;">namespace  </td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp/" class="el">pp</a></td></tr></tbody></table>

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/size_8h#ad3d13cbe3886f37d082352f261892564" class="el">operator==</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp;rhs)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/size_8h#a915ab1f503e22dc6662ad56caa1eb7c3" class="el">operator!=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp;rhs)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/size_8h#a227bd323e3966f98cc11f640d291b9a6" class="el">operator==</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp;rhs)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/size_8h#acc55d56de0ab6dd4ca35730cb6672ddd" class="el">operator!=</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp;lhs, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp;rhs)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the API to create a size based on width and height.

------------------------------------------------------------------------

Function Documentation
----------------------

<span id="a915ab1f503e22dc6662ad56caa1eb7c3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator!=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether two `Sizes` are not equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>Size</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>Size</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the `Size` of lhs are equal to the `Size` of rhs, otherwise false.

<span id="acc55d56de0ab6dd4ca35730cb6672ddd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator!=</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether two `FloatSizes` are not equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>FloatSize</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>FloatSize</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if the `FloatSize` of lhs are equal to the `FloatSize` of rhs, otherwise false.

<span id="ad3d13cbe3886f37d082352f261892564" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">pp::Size</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether the width and height values of two sizes are equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>Size</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>Size</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if they are equal, false if unequal.

<span id="a227bd323e3966f98cc11f640d291b9a6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool operator==</td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp; </td><td><em>lhs</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_float_size/" class="el">pp::FloatSize</a> &amp; </td><td><em>rhs</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

This function determines whether the width and height values of two sizes are equal.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>lhs</td><td>The <code>FloatSize</code> on the left-hand side of the equation.</td></tr><tr class="even"><td>[in]</td><td>rhs</td><td>The <code>FloatSize</code> on the right-hand side of the equation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if they are equal, false if unequal.
