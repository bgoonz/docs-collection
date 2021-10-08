---json {"title":"pp::TouchPoint Class Reference"} ---

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a76b04de6cd756e80d3b039988faed697" class="el">TouchPoint</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#affadca4389137e288a0a9a53019a2211" class="el">TouchPoint</a> (const PP_TouchPoint &amp;point)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#aa0a99fd96e567b9b6ea9acd3f955a4d0" class="el">TouchPoint</a> (const PP_TouchPoint &amp;point, const PP_FloatPoint &amp;<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#ad93f3cf6195c7c3af21cf28dbc2f7e85" class="el">tilt</a>)</td></tr><tr class="even"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a9bc0e1ce3579b52927da1104646b994b" class="el">id</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#aa4a407b747e9c523844eba4aaf861773" class="el">position</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a92f3376a9db010e20bed4a5fe3e42f0f" class="el">radii</a> () const</td></tr><tr class="odd"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a82c6f0f579e30d37d0f14cdbb3ca9177" class="el">rotation_angle</a> () const</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a4e09d5e4a892da9f6b32c9986a25376c" class="el">pressure</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PP_FloatPoint </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#ad93f3cf6195c7c3af21cf28dbc2f7e85" class="el">tilt</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

Wrapper class for PP\_TouchPoint.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a76b04de6cd756e80d3b039988faed697" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a76b04de6cd756e80d3b039988faed697" class="el">pp::TouchPoint::TouchPoint</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<span id="affadca4389137e288a0a9a53019a2211" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a76b04de6cd756e80d3b039988faed697" class="el">pp::TouchPoint::TouchPoint</a></td><td>(</td><td>const PP_TouchPoint &amp; </td><td><em>point</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<span id="aa0a99fd96e567b9b6ea9acd3f955a4d0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a76b04de6cd756e80d3b039988faed697" class="el">pp::TouchPoint::TouchPoint</a></td><td>(</td><td>const PP_TouchPoint &amp; </td><td><em>point</em>,</td></tr><tr class="even"><td></td><td></td><td>const PP_FloatPoint &amp; </td><td><em>tilt</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a9bc0e1ce3579b52927da1104646b994b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a9bc0e1ce3579b52927da1104646b994b" class="el">pp::TouchPoint::id</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

**Returns:**  
The identifier for this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a>. This corresponds to the order in which the points were pressed. For example, the first point to be pressed has an id of 0, the second has an id of 1, and so on. An id can be reused when a touch point is released. For example, if two fingers are down, with id 0 and 1, and finger 0 releases, the next finger to be pressed can be assigned to id 0.

<span id="aa4a407b747e9c523844eba4aaf861773" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#aa4a407b747e9c523844eba4aaf861773" class="el">pp::TouchPoint::position</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

**Returns:**  
The x-y coordinates of this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a>, in DOM coordinate space.

<span id="a4e09d5e4a892da9f6b32c9986a25376c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a4e09d5e4a892da9f6b32c9986a25376c" class="el">pp::TouchPoint::pressure</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

**Returns:**  
The pressure applied to this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a>. This is typically a value between 0 and 1, with 0 indicating no pressure and 1 indicating some maximum pressure, but scaling differs depending on the hardware and the value is not guaranteed to stay within that range.

<span id="a92f3376a9db010e20bed4a5fe3e42f0f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_float_point/" class="el">FloatPoint</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a92f3376a9db010e20bed4a5fe3e42f0f" class="el">pp::TouchPoint::radii</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

**Returns:**  
The elliptical radii, in screen pixels, in the x and y direction of this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a>.

<span id="a82c6f0f579e30d37d0f14cdbb3ca9177" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#a82c6f0f579e30d37d0f14cdbb3ca9177" class="el">pp::TouchPoint::rotation_angle</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

**Returns:**  
The angle of rotation of the elliptical model of this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point/" class="el" title="Wrapper class for PP_TouchPoint.">TouchPoint</a> from the y-axis.

<span id="ad93f3cf6195c7c3af21cf28dbc2f7e85" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_FloatPoint <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_touch_point#ad93f3cf6195c7c3af21cf28dbc2f7e85" class="el">pp::TouchPoint::tilt</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

**Returns:**  
The tilt of this touchpoint. This is a float point. Values of x and y are between 0 and 90, with 0 indicating 0 degrees and 90 indicating

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/touch__point_8h/" class="el">touch_point.h</a>
