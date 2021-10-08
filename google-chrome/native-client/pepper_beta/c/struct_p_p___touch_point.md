—json {“title”:“PP\_TouchPoint Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">uint32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a27542ca67fc89c4fe41050750b80fc3b" class="el">id</a></td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a5c2dfab481eaafbd40c9b837fc6f9106" class="el">position</a></td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#abcf813398210aaeaa587858f90139292" class="el">radius</a></td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a8861a485f64399c787093d7fbf609b89" class="el">rotation_angle</a></td></tr><tr class="odd"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a3af90cd7d4415434a1f18a23eb28b2d9" class="el">pressure</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PP_TouchPoint` struct represents all information about a single touch point, such as position, id, rotation angle, and pressure.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a27542ca67fc89c4fe41050750b80fc3b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>uint32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a27542ca67fc89c4fe41050750b80fc3b" class="el">PP_TouchPoint::id</a></td></tr></tbody></table>

This value represents the identifier for this TouchPoint.

The id corresponds to the order in which the points were pressed. For example, the first point to be pressed has an id of 0, the second has an id of 1, and so on. An id can be reused when a touch point is released. For example, if two fingers are down, with id 0 and 1, and finger 0 releases, the next finger to be pressed can be assigned to id 0.

<span id="a5c2dfab481eaafbd40c9b837fc6f9106" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a5c2dfab481eaafbd40c9b837fc6f9106" class="el">PP_TouchPoint::position</a></td></tr></tbody></table>

This value represents the x and y pixel position of this TouchPoint relative to the upper-left of the module instance receiving the event.

<span id="a3af90cd7d4415434a1f18a23eb28b2d9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a3af90cd7d4415434a1f18a23eb28b2d9" class="el">PP_TouchPoint::pressure</a></td></tr></tbody></table>

This value represents the pressure applied to this TouchPoint.

This value is typically between 0 and 1, with 0 indicating no pressure and 1 indicating some maximum pressure. Scaling differs depending on the hardware and the value is not guaranteed to stay within that range.

<span id="abcf813398210aaeaa587858f90139292" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#abcf813398210aaeaa587858f90139292" class="el">PP_TouchPoint::radius</a></td></tr></tbody></table>

This value represents the elliptical radii, in screen pixels, in the x and y direction of this TouchPoint.

<span id="a8861a485f64399c787093d7fbf609b89" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point#a8861a485f64399c787093d7fbf609b89" class="el">PP_TouchPoint::rotation_angle</a></td></tr></tbody></table>

This value represents the angle of rotation in degrees of the elliptical model of this TouchPoint clockwise from “up.”.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__touch__point_8h/" class="el">pp_touch_point.h</a>
