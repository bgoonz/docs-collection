---json {"title":"pp::View Class Reference"} ---

Inheritance diagram for pp::View:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_view__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_view-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aebcd4ab8818a6e1dfe68e2c435823ad9" class="el">View</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a89cc79b6731f0e67d0821fe83b3e64fb" class="el">View</a> (PP_Resource view_resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_rect/" class="el">Rect</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a37996c51fa6cc2dc25783461ecde0bb9" class="el">GetRect</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a2ae3a19ade644199982a2d09c6dd5c11" class="el">IsFullscreen</a> () const</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el">IsVisible</a> () const</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a30a0919ba5e4209ef52207375c5fc5f6" class="el">IsPageVisible</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_rect/" class="el">Rect</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff9a53367325d9138ab7d9cd39e40ce2" class="el">GetClipRect</a> () const</td></tr><tr class="even"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a52759c57da28a6c06a5da23d28519287" class="el">GetDeviceScale</a> () const</td></tr><tr class="odd"><td style="text-align: right;">float </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a42d5b4ab4ffed3f020d3fd303a14a9dd" class="el">GetCSSScale</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#abdad2f4e5b9b07376d590785c91ea356" class="el">GetScrollOffset</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This class represents the state of the view for an instance and contains functions for retrieving the current state of that view.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="aebcd4ab8818a6e1dfe68e2c435823ad9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aebcd4ab8818a6e1dfe68e2c435823ad9" class="el">pp::View::View</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `View` object.

<span id="a89cc79b6731f0e67d0821fe83b3e64fb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aebcd4ab8818a6e1dfe68e2c435823ad9" class="el">pp::View::View</a></td><td>(</td><td>PP_Resource </td><td><em>view_resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Creates a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view/" class="el" title="This class represents the state of the view for an instance and contains functions for retrieving the...">View</a> resource, taking and holding an additional reference to the given resource handle.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="aff9a53367325d9138ab7d9cd39e40ce2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_rect/" class="el">Rect</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff9a53367325d9138ab7d9cd39e40ce2" class="el">pp::View::GetClipRect</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff9a53367325d9138ab7d9cd39e40ce2" class="el" title="GetClipRect() returns the clip rectangle relative to the upper-left corner of the module instance...">GetClipRect()</a> returns the clip rectangle relative to the upper-left corner of the module instance.

This rectangle indicates the portions of the module instance that are scrolled into view.

If the module instance is scrolled off the view, the return value will be (0, 0, 0, 0). This clip rectangle does *not* take into account page visibility. Therefore, if the module instance is scrolled into view, but the page itself is on a tab that is not visible, the return rectangle will contain the visible rectangle as though the page were visible. Refer to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a30a0919ba5e4209ef52207375c5fc5f6" class="el" title="IsPageVisible() determines if the page that contains the module instance is visible.">IsPageVisible()</a> and <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> if you want to account for page visibility.

Most applications will not need to worry about the clip rectangle. The recommended behavior is to do full updates if the module instance is visible, as determined by <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a>, and do no updates if it is not visible.

However, if the cost for computing pixels is very high for your application, or the pages you're targeting frequently have very large module instances with small visible portions, you may wish to optimize further. In this case, the clip rectangle will tell you which parts of the module to update.

Note that painting of the page and sending of view changed updates happens asynchronously. This means when the user scrolls, for example, it is likely that the previous backing store of the module instance will be used for the first paint, and will be updated later when your application generates new content with the new clip. This may cause flickering at the boundaries when scrolling. If you do choose to do partial updates, you may want to think about what color the invisible portions of your backing store contain (be it transparent or some background color) or to paint a certain region outside the clip to reduce the visual distraction when this happens.

**Returns:**  
The rectangle representing the visible part of the module instance. If the resource is invalid, the empty rectangle is returned.

<span id="a42d5b4ab4ffed3f020d3fd303a14a9dd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a42d5b4ab4ffed3f020d3fd303a14a9dd" class="el">pp::View::GetCSSScale</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

GetCSSScale returns the scale factor between DIPs and CSS pixels.

This allows proper scaling between DIPs - as sent via the Pepper API - and CSS pixel coordinates used for Web content.

**Returns:**  
A `float` value representing the number of DIPs per CSS pixel.

<span id="a52759c57da28a6c06a5da23d28519287" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a52759c57da28a6c06a5da23d28519287" class="el">pp::View::GetDeviceScale</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

GetDeviceScale returns the scale factor between device pixels and DIPs (also known as logical pixels or UI pixels on some platforms).

This allows the developer to render their contents at device resolution, even as coordinates / sizes are given in DIPs through the API.

Note that the coordinate system for Pepper APIs is DIPs. Also note that one DIP might not equal one CSS pixel - when page scale/zoom is in effect.

**Returns:**  
A `float` value representing the number of device pixels per DIP.

<span id="a37996c51fa6cc2dc25783461ecde0bb9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_rect/" class="el">Rect</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a37996c51fa6cc2dc25783461ecde0bb9" class="el">pp::View::GetRect</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a37996c51fa6cc2dc25783461ecde0bb9" class="el" title="GetRect() retrieves the rectangle of the module instance associated with a view changed notification ...">GetRect()</a> retrieves the rectangle of the module instance associated with a view changed notification relative to the upper-left of the browser viewport.

This position changes when the page is scrolled.

The returned rectangle may not be inside the visible portion of the viewport if the module instance is scrolled off the page. Therefore, the position may be negative or larger than the size of the page. The size will always reflect the size of the module were it to be scrolled entirely into view.

In general, most modules will not need to worry about the position of the module instance in the viewport, and only need to use the size.

**Returns:**  
The rectangle of the instance. The default return value for an invalid <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view/" class="el" title="This class represents the state of the view for an instance and contains functions for retrieving the...">View</a> is the empty rectangle.

<span id="abdad2f4e5b9b07376d590785c91ea356" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_point/" class="el">Point</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#abdad2f4e5b9b07376d590785c91ea356" class="el">pp::View::GetScrollOffset</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

GetScrollOffset returns the scroll offset of the window containing the plugin.

**Returns:**  
A `Point` which is set to the value of the scroll offset in CSS pixels.

<span id="a2ae3a19ade644199982a2d09c6dd5c11" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a2ae3a19ade644199982a2d09c6dd5c11" class="el">pp::View::IsFullscreen</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a2ae3a19ade644199982a2d09c6dd5c11" class="el" title="IsFullscreen() returns whether the instance is currently displaying in fullscreen mode...">IsFullscreen()</a> returns whether the instance is currently displaying in fullscreen mode.

**Returns:**  
`true` if the instance is in full screen mode, or `false` if it's not or the resource is invalid.

<span id="a30a0919ba5e4209ef52207375c5fc5f6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a30a0919ba5e4209ef52207375c5fc5f6" class="el">pp::View::IsPageVisible</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a30a0919ba5e4209ef52207375c5fc5f6" class="el" title="IsPageVisible() determines if the page that contains the module instance is visible.">IsPageVisible()</a> determines if the page that contains the module instance is visible.

The most common cause of invisible pages is that the page is in a background tab in the browser.

Most applications should use <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> instead of this function since the module instance could be scrolled off of a visible page, and this function will still return true. However, depending on how your module interacts with the page, there may be certain updates that you may want to perform when the page is visible even if your specific module instance is not visible.

**Returns:**  
`true` if the instance might be visible to the user, `false` if it is definitely not visible.

<span id="aff1f9900e594167a276a624e52e5ac4c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el">pp::View::IsVisible</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> determines whether the module instance might be visible to the user.

For example, the Chrome window could be minimized or another window could be over it. In both of these cases, the module instance would not be visible to the user, but <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#aff1f9900e594167a276a624e52e5ac4c" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> will return true.

Use the result to speed up or stop updates for invisible module instances.

This function performs the duties of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a37996c51fa6cc2dc25783461ecde0bb9" class="el" title="GetRect() retrieves the rectangle of the module instance associated with a view changed notification ...">GetRect()</a> (determining whether the module instance is scrolled into view and the clip rectangle is nonempty) and <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_view#a30a0919ba5e4209ef52207375c5fc5f6" class="el" title="IsPageVisible() determines if the page that contains the module instance is visible.">IsPageVisible()</a> (whether the page is visible to the user).

**Returns:**  
`true` if the instance might be visible to the user, `false` if it is definitely not visible.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/view_8h/" class="el">view.h</a>
