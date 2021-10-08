---json {"title":"ppb\_mouse\_cursor.h File Reference"} ---

Include dependency graph for ppb\_mouse\_cursor.h:

![](/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___mouse_cursor__1__0/" class="el">PPB_MouseCursor</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PPB_MouseCursor</code> allows setting the mouse cursor. <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___mouse_cursor__1__0#details">More...</a><br />
</td></tr></tbody></table>

Defines
-------

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h#a5108cd274942fbb6aa1726d32b7b82eb" class="el">PPB_MOUSECURSOR_INTERFACE</a>   "PPB_MouseCursor;1.0"</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h#a9f058eab16725eb940b802f90acb11a9" class="el">PPB_MOUSECURSOR_INTERFACE</a>   <a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h#a5108cd274942fbb6aa1726d32b7b82eb" class="el">PPB_MOUSECURSOR_INTERFACE</a></td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef struct <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___mouse_cursor__1__0/" class="el">PPB_MouseCursor</a> </td><td><a href="/docs/native-client/pepper_stable/c/group___interfaces#gae583d9ea6381e1e4cb7b462c35c5d1de" class="el">PPB_MouseCursor</a></td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_stable/c/group___enums#gac53273018386c1db9542d2a06bbe118b" class="el">PP_MouseCursor_Type</a> {<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba1360614abe2d2c3838a42238f75e9ec1" class="el">PP_MOUSECURSOR_TYPE_CUSTOM</a> = -1, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba7c0a8b04f51fbf8e12abd4240fb24a9f" class="el">PP_MOUSECURSOR_TYPE_POINTER</a> = 0, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba7ee7ede873ec3158179a1ea648bfe677" class="el">PP_MOUSECURSOR_TYPE_CROSS</a> = 1, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba5cf81326a94c1150ce98cc15924dee69" class="el">PP_MOUSECURSOR_TYPE_HAND</a> = 2,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba705545fdbd4088bf4522b32aa5815877" class="el">PP_MOUSECURSOR_TYPE_IBEAM</a> = 3, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118babf8c49b2fc9ee7208b20e7e1f96e2930" class="el">PP_MOUSECURSOR_TYPE_WAIT</a> = 4, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bacea1ebe2038e33bb649bcf8ed32f0e7e" class="el">PP_MOUSECURSOR_TYPE_HELP</a> = 5, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba3efb608fc10dd3979d4bc0c41654f14b" class="el">PP_MOUSECURSOR_TYPE_EASTRESIZE</a> = 6,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba02b638a93841e0f51d234b6643cffcd0" class="el">PP_MOUSECURSOR_TYPE_NORTHRESIZE</a> = 7, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118baceb2b9888eed1ef5fe8c5dbc94195b3a" class="el">PP_MOUSECURSOR_TYPE_NORTHEASTRESIZE</a> = 8, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bab95b486b6772a79a599c4287f966cd19" class="el">PP_MOUSECURSOR_TYPE_NORTHWESTRESIZE</a> = 9, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bac39262939712092e11cc4569b6cab626" class="el">PP_MOUSECURSOR_TYPE_SOUTHRESIZE</a> = 10,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba0d7f8011aba0f13ceda6688585b725af" class="el">PP_MOUSECURSOR_TYPE_SOUTHEASTRESIZE</a> = 11, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba54f482730eba910a940e1c975f14e2a2" class="el">PP_MOUSECURSOR_TYPE_SOUTHWESTRESIZE</a> = 12, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba0c8edb786c8193ef657716a358e327b6" class="el">PP_MOUSECURSOR_TYPE_WESTRESIZE</a> = 13, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118babf7026dfaea82565f2527ddbb0383053" class="el">PP_MOUSECURSOR_TYPE_NORTHSOUTHRESIZE</a> = 14,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba98177b2980fa939ed33d41c531f06310" class="el">PP_MOUSECURSOR_TYPE_EASTWESTRESIZE</a> = 15, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118baf01a2e620b481daeb42b6344843e9e38" class="el">PP_MOUSECURSOR_TYPE_NORTHEASTSOUTHWESTRESIZE</a> = 16, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba05d35a31c8af640a6cf2295790e933ee" class="el">PP_MOUSECURSOR_TYPE_NORTHWESTSOUTHEASTRESIZE</a> = 17, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bab163a58c75a983ac943d39827c0976cd" class="el">PP_MOUSECURSOR_TYPE_COLUMNRESIZE</a> = 18,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bac4d90e13c8d17e32ee9498b795d2f4ca" class="el">PP_MOUSECURSOR_TYPE_ROWRESIZE</a> = 19, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba6dbf3de573762e2322d6e8a2392b19fb" class="el">PP_MOUSECURSOR_TYPE_MIDDLEPANNING</a> = 20, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba9fec33093306cea2ea6bb6810e8f9040" class="el">PP_MOUSECURSOR_TYPE_EASTPANNING</a> = 21, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba0805b4d3a42bb560a656247a57ed6fe0" class="el">PP_MOUSECURSOR_TYPE_NORTHPANNING</a> = 22,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118babeaeb782ba084c45e0d12f2bf428a9c3" class="el">PP_MOUSECURSOR_TYPE_NORTHEASTPANNING</a> = 23, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba2590e0dc133a8b4534c475abd60c2e1d" class="el">PP_MOUSECURSOR_TYPE_NORTHWESTPANNING</a> = 24, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bac9ab4fdcaccb7dcf3a9e0c5edf056e92" class="el">PP_MOUSECURSOR_TYPE_SOUTHPANNING</a> = 25, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bacf7c5132070bb6fd8e86ffcafb1dd8b6" class="el">PP_MOUSECURSOR_TYPE_SOUTHEASTPANNING</a> = 26,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118baebe615cd19bad5b076b2dd9d86dcd825" class="el">PP_MOUSECURSOR_TYPE_SOUTHWESTPANNING</a> = 27, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba8c357f06fc1fc96c091b378d10cc4f02" class="el">PP_MOUSECURSOR_TYPE_WESTPANNING</a> = 28, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bab6757be35df5a1e246b3ce8b80c92fbd" class="el">PP_MOUSECURSOR_TYPE_MOVE</a> = 29, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba52c5c4259a391557c045b0b82cc0a1fa" class="el">PP_MOUSECURSOR_TYPE_VERTICALTEXT</a> = 30,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba62afaa44930d75f750fdf28199511194" class="el">PP_MOUSECURSOR_TYPE_CELL</a> = 31, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bad73cecab74f94844438e494ff1439b9f" class="el">PP_MOUSECURSOR_TYPE_CONTEXTMENU</a> = 32, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118baca9b4bef41f4c4bd90e81573357b137c" class="el">PP_MOUSECURSOR_TYPE_ALIAS</a> = 33, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118babda91fe9ce56b304d95a1ce01fbe8084" class="el">PP_MOUSECURSOR_TYPE_PROGRESS</a> = 34,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba1c6cb6e16ac90b8829175e8af9a4a72d" class="el">PP_MOUSECURSOR_TYPE_NODROP</a> = 35, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bacee11626427a6fa36653243c4d551608" class="el">PP_MOUSECURSOR_TYPE_COPY</a> = 36, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba7a9b1b3187b0bd011b5e19380d4fd698" class="el">PP_MOUSECURSOR_TYPE_NONE</a> = 37, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba7d10d5fcc4d9e6aaed4af83246de15a0" class="el">PP_MOUSECURSOR_TYPE_NOTALLOWED</a> = 38,<br />
  <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba203b038de96b903e253e29aea5a66460" class="el">PP_MOUSECURSOR_TYPE_ZOOMIN</a> = 39, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118ba797321d4cad9a863a5338318912f3a98" class="el">PP_MOUSECURSOR_TYPE_ZOOMOUT</a> = 40, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118bafc45b71a6185639e12ac2827a641bdaa" class="el">PP_MOUSECURSOR_TYPE_GRAB</a> = 41, <a href="/docs/native-client/pepper_stable/c/group___enums#ggac53273018386c1db9542d2a06bbe118baa242aeb17b35d8e44e449786a2cbcd1c" class="el">PP_MOUSECURSOR_TYPE_GRABBING</a> = 42<br />
}</td></tr></tbody></table>

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/c/group___enums#ga9b1b55c2ccaa49d084206619c9034dde" class="el">PP_COMPILE_ASSERT_ENUM_SIZE_IN_BYTES</a> (<a href="/docs/native-client/pepper_stable/c/group___enums#gac53273018386c1db9542d2a06bbe118b" class="el">PP_MouseCursor_Type</a>, 4)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the `PPB_MouseCursor` interface for setting the mouse cursor.

------------------------------------------------------------------------

Define Documentation
--------------------

<span id="a9f058eab16725eb940b802f90acb11a9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h#a9f058eab16725eb940b802f90acb11a9" class="el">PPB_MOUSECURSOR_INTERFACE</a>   <a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h#a5108cd274942fbb6aa1726d32b7b82eb" class="el">PPB_MOUSECURSOR_INTERFACE</a></td></tr></tbody></table>

<span id="a5108cd274942fbb6aa1726d32b7b82eb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_stable/c/ppb__mouse__cursor_8h#a5108cd274942fbb6aa1726d32b7b82eb" class="el">PPB_MOUSECURSOR_INTERFACE</a>   "PPB_MouseCursor;1.0"</td></tr></tbody></table>
