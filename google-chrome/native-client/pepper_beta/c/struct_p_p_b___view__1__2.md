---json {"title":"PPB\_View Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a74d7a537d292a9f0a59bba78f19f683b" class="el">IsView</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#af767d8feb7445431648389d52b977079" class="el">GetRect</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *rect)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a002327305e06133095aa8aefb0d77de1" class="el">IsFullscreen</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el">IsVisible</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aafc97fdd80955aa32d6bca58828eabd6" class="el">IsPageVisible</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a39a55aa9b1933e5f4d37c3f1100556b7" class="el">GetClipRect</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *clip)</td></tr><tr class="odd"><td style="text-align: right;">float(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#acff2671f2780e13264354000ec178391" class="el">GetDeviceScale</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">float(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aef9d532581488ce90af0cbff5464c37c" class="el">GetCSSScale</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aa6b09b1066326b2d1272d9aa7f34d69c" class="el">GetScrollOffset</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *offset)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

`PPB_View` represents the state of the view of an instance.

You will receive new view information using `PPP_Instance.DidChangeView`.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a39a55aa9b1933e5f4d37c3f1100556b7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a39a55aa9b1933e5f4d37c3f1100556b7" class="el">PPB_View::GetClipRect</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *clip)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a39a55aa9b1933e5f4d37c3f1100556b7" class="el" title="GetClipRect() returns the clip rectangle relative to the upper-left corner of the module instance...">GetClipRect()</a> returns the clip rectangle relative to the upper-left corner of the module instance.

This rectangle indicates the portions of the module instance that are scrolled into view.

If the module instance is scrolled off the view, the return value will be (0, 0, 0, 0). This clip rectangle does *not* take into account page visibility. Therefore, if the module instance is scrolled into view, but the page itself is on a tab that is not visible, the return rectangle will contain the visible rectangle as though the page were visible. Refer to <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aafc97fdd80955aa32d6bca58828eabd6" class="el" title="IsPageVisible() determines if the page that contains the module instance is visible.">IsPageVisible()</a> and <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> if you want to account for page visibility.

Most applications will not need to worry about the clip rectangle. The recommended behavior is to do full updates if the module instance is visible, as determined by <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a>, and do no updates if it is not visible.

However, if the cost for computing pixels is very high for your application, or the pages you're targeting frequently have very large module instances with small visible portions, you may wish to optimize further. In this case, the clip rectangle will tell you which parts of the module to update.

Note that painting of the page and sending of view changed updates happens asynchronously. This means when the user scrolls, for example, it is likely that the previous backing store of the module instance will be used for the first paint, and will be updated later when your application generates new content with the new clip. This may cause flickering at the boundaries when scrolling. If you do choose to do partial updates, you may want to think about what color the invisible portions of your backing store contain (be it transparent or some background color) or to paint a certain region outside the clip to reduce the visual distraction when this happens.

**Parameters:**  
<table><tbody><tr class="odd"><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr><tr class="even"><td>clip</td><td>Output argument receiving the clip rect on success.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` if the resource was valid and the clip rect was filled in, `PP_FALSE` if not.

<span id="aef9d532581488ce90af0cbff5464c37c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aef9d532581488ce90af0cbff5464c37c" class="el">PPB_View::GetCSSScale</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

GetCSSScale returns the scale factor between DIPs and CSS pixels.

This allows proper scaling between DIPs - as sent via the Pepper API - and CSS pixel coordinates used for Web content.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
css\_scale A `float` value representing the number of DIPs per CSS pixel. If the resource is invalid, the value will be 0.0.

<span id="acff2671f2780e13264354000ec178391" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>float(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#acff2671f2780e13264354000ec178391" class="el">PPB_View::GetDeviceScale</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

GetDeviceScale returns the scale factor between device pixels and Density Independent Pixels (DIPs, also known as logical pixels or UI pixels on some platforms).

This allows the developer to render their contents at device resolution, even as coordinates / sizes are given in DIPs through the API.

Note that the coordinate system for Pepper APIs is DIPs. Also note that one DIP might not equal one CSS pixel - when page scale/zoom is in effect.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `float` value representing the number of device pixels per DIP. If the resource is invalid, the value will be 0.0.

<span id="af767d8feb7445431648389d52b977079" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#af767d8feb7445431648389d52b977079" class="el">PPB_View::GetRect</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> *rect)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#af767d8feb7445431648389d52b977079" class="el" title="GetRect() retrieves the rectangle of the module instance associated with a view changed notification ...">GetRect()</a> retrieves the rectangle of the module instance associated with a view changed notification relative to the upper-left of the browser viewport.

This position changes when the page is scrolled.

The returned rectangle may not be inside the visible portion of the viewport if the module instance is scrolled off the page. Therefore, the position may be negative or larger than the size of the page. The size will always reflect the size of the module were it to be scrolled entirely into view.

In general, most modules will not need to worry about the position of the module instance in the viewport, and only need to use the size.

**Parameters:**  
<table><tbody><tr class="odd"><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr><tr class="even"><td>rect</td><td>A <code>PP_Rect</code> receiving the rectangle on success.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` if the resource was valid and the viewport rectangle was filled in, `PP_FALSE` if not.

<span id="aa6b09b1066326b2d1272d9aa7f34d69c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aa6b09b1066326b2d1272d9aa7f34d69c" class="el">PPB_View::GetScrollOffset</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> *offset)</td></tr></tbody></table>

GetScrollOffset returns the scroll offset of the window containing the plugin.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr><tr class="even"><td>[out]</td><td>offset</td><td>A <code>PP_Point</code> which will be set to the value of the scroll offset in CSS pixels.</td></tr></tbody></table>

<!-- -->

**Returns:**  
Returns `PP_TRUE` if the resource was valid and the offset was filled in, `PP_FALSE` if not.

<span id="a002327305e06133095aa8aefb0d77de1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a002327305e06133095aa8aefb0d77de1" class="el">PPB_View::IsFullscreen</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a002327305e06133095aa8aefb0d77de1" class="el" title="IsFullscreen() returns whether the instance is currently displaying in fullscreen mode...">IsFullscreen()</a> returns whether the instance is currently displaying in fullscreen mode.

**Parameters:**  
<table><tbody><tr class="odd"><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the instance is in full screen mode, or `PP_FALSE` if it's not or the resource is invalid.

<span id="aafc97fdd80955aa32d6bca58828eabd6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aafc97fdd80955aa32d6bca58828eabd6" class="el">PPB_View::IsPageVisible</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aafc97fdd80955aa32d6bca58828eabd6" class="el" title="IsPageVisible() determines if the page that contains the module instance is visible.">IsPageVisible()</a> determines if the page that contains the module instance is visible.

The most common cause of invisible pages is that the page is in a background tab in the browser.

Most applications should use <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> instead of this function since the module instance could be scrolled off of a visible page, and this function will still return true. However, depending on how your module interacts with the page, there may be certain updates that you may want to perform when the page is visible even if your specific module instance is not visible.

**Parameters:**  
<table><tbody><tr class="odd"><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the instance is plausibly visible to the user, `PP_FALSE` if it is definitely not visible.

<span id="a74d7a537d292a9f0a59bba78f19f683b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a74d7a537d292a9f0a59bba78f19f683b" class="el">PPB_View::IsView</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a74d7a537d292a9f0a59bba78f19f683b" class="el" title="IsView() determines if the given resource is a valid PPB_View resource.">IsView()</a> determines if the given resource is a valid `PPB_View` resource.

Note that `PPB_ViewChanged` resources derive from `PPB_View` and will return true here as well.

**Parameters:**  
<table><tbody><tr class="odd"><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the given resource supports `PPB_View` or `PP_FALSE` if it is an invalid resource or is a resource of another type.

<span id="a86813cde54dea35dd7cbe119f4a0fe7b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el">PPB_View::IsVisible</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> determines whether the module instance might be visible to the user.

For example, the Chrome window could be minimized or another window could be over it. In both of these cases, the module instance would not be visible to the user, but <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#a86813cde54dea35dd7cbe119f4a0fe7b" class="el" title="IsVisible() determines whether the module instance might be visible to the user.">IsVisible()</a> will return true.

Use the result to speed up or stop updates for invisible module instances.

This function performs the duties of <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#af767d8feb7445431648389d52b977079" class="el" title="GetRect() retrieves the rectangle of the module instance associated with a view changed notification ...">GetRect()</a> (determining whether the module instance is scrolled into view and the clip rectangle is nonempty) and <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___view__1__2#aafc97fdd80955aa32d6bca58828eabd6" class="el" title="IsPageVisible() determines if the page that contains the module instance is visible.">IsPageVisible()</a> (whether the page is visible to the user).

**Parameters:**  
<table><tbody><tr class="odd"><td>resource</td><td>A <code>PP_Resource</code> corresponding to a <code>PPB_View</code> resource.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the instance might be visible to the user, `PP_FALSE` if it is definitely not visible.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__view_8h/" class="el">ppb_view.h</a>
