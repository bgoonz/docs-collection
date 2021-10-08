---json {"title":"PPP_Instance Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aff2dd72f7aab6335cacf8bc3a66ccbba" class="el">DidCreate</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t argc, const char *argn[], const char *argv[])</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#a99edbb91abde255fec3bc3e1f9c8ba82" class="el">DidDestroy</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aa028a7b17d62242ac56b6ab4b55dc047" class="el">DidChangeView</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> view)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#abf4a481156b605938416bf873bd2c782" class="el">DidChangeFocus</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> has_focus)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#a2fba2c9d06044a48e73a649b04398e1d" class="el">HandleDocumentLoad</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> url_loader)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

The `PPP_Instance` interface contains pointers to a series of functions that you must implement in your module.

These functions can be trivial (simply return the default return value) unless you want your module to handle events such as change of focus or input events (keyboard/mouse) events.

---

## Field Documentation

<span id="abf4a481156b605938416bf873bd2c782" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#abf4a481156b605938416bf873bd2c782" class="el">PPP_Instance::DidChangeFocus</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> has_focus)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#abf4a481156b605938416bf873bd2c782" class="el" title="DidChangeFocus() is called when an instance has gained or lost focus.">DidChangeFocus()</a> is called when an instance has gained or lost focus.

Having focus means that keyboard events will be sent to the instance. An instance's default condition is that it will not have focus.

The focus flag takes into account both browser tab and window focus as well as focus of the plugin element on the page. In order to be deemed to have focus, the browser window must be topmost, the tab must be selected in the window, and the instance must be the focused element on the page.

**Note:**Clicks on instances will give focus only if you handle the click event. Return `true` from `HandleInputEvent` in `PPP_InputEvent` (or use unfiltered events) to signal that the click event was handled. Otherwise, the browser will bubble the event and give focus to the element on the page that actually did end up consuming it. If you're not getting focus, check to make sure you're either requesting them via ` RequestInputEvents()`` (which implicitly marks all input events as consumed) or via ``RequestFilteringInputEvents() ` and returning true from your event handler.

``` `

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance receiving the input event.</td></tr><tr class="even"><td>[in]</td><td>has_focus</td><td>Indicates the new focused state of the instance.</td></tr></tbody></table>

<span id="aa028a7b17d62242ac56b6ab4b55dc047" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aa028a7b17d62242ac56b6ab4b55dc047" class="el">PPP_Instance::DidChangeView</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> view)</td></tr></tbody></table>

`DidChangeView() is called when the position, size, or other view attributes of the instance has changed. `

<span id="aff2dd72f7aab6335cacf8bc3a66ccbba" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aff2dd72f7aab6335cacf8bc3a66ccbba" class="el">PPP_Instance::DidCreate</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, uint32_t argc, const char *argn[], const char *argv[])</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aff2dd72f7aab6335cacf8bc3a66ccbba" class="el" title="DidCreate() is a creation handler that is called when a new instance is created.">DidCreate()</a> is a creation handler that is called when a new instance is created.

This function is called for each instantiation on the page, corresponding to one &lt;embed&gt; tag on the page.

Generally you would handle this call by initializing the information your module associates with an instance and creating a mapping from the given `PP_Instance` handle to this data. The `PP_Instance` handle will be used in subsequent calls to identify which instance the call pertains to.

It's possible for more than one instance to be created in a single module. This means that you may get more than one `OnCreate` without an `OnDestroy` in between, and should be prepared to maintain multiple states associated with each instance.

If this function reports a failure (by returning `PP_FALSE`), the instance will be deleted.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A new <code>PP_Instance</code> identifying one instance of a module. This is an opaque handle.</td></tr><tr class="even"><td>[in]</td><td>argc</td><td>The number of arguments contained in <code>argn</code> and <code>argv</code>.</td></tr><tr class="odd"><td>[in]</td><td>argn</td><td>An array of argument names. These argument names are supplied in the &lt;embed&gt; tag, for example: <code>&lt;embed id="nacl_module" dimensions="2"&gt;</code> will produce two argument names: "id" and "dimensions."</td></tr><tr class="even"><td>[in]</td><td>argv</td><td>An array of argument values. These are the values of the arguments listed in the &lt;embed&gt; tag, for example <code>&lt;embed id="nacl_module" dimensions="2"&gt;</code> will produce two argument values: "nacl_module" and "2". The indices of these values match the indices of the corresponding names in <code>argn</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` on success or `PP_FALSE` on failure.

<span id="a99edbb91abde255fec3bc3e1f9c8ba82" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#a99edbb91abde255fec3bc3e1f9c8ba82" class="el">PPP_Instance::DidDestroy</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#a99edbb91abde255fec3bc3e1f9c8ba82" class="el" title="DidDestroy() is an instance destruction handler.">DidDestroy()</a> is an instance destruction handler.

This function is called in many cases (see below) when a module instance is destroyed. It will be called even if <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aff2dd72f7aab6335cacf8bc3a66ccbba" class="el" title="DidCreate() is a creation handler that is called when a new instance is created.">DidCreate()</a> returned failure.

Generally you will handle this call by deallocating the tracking information and the `PP_Instance` mapping you created in the <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#aff2dd72f7aab6335cacf8bc3a66ccbba" class="el" title="DidCreate() is a creation handler that is called when a new instance is created.">DidCreate()</a> call. You can also free resources associated with this instance but this isn't required; all resources associated with the deleted instance will be automatically freed when this function returns.

The instance identifier will still be valid during this call, so the module can perform cleanup-related tasks. Once this function returns, the `PP_Instance` handle will be invalid. This means that you can't do any asynchronous operations like network requests, file writes or messaging from this function since they will be immediately canceled.

**Note:** This function will always be skipped on untrusted (Native Client) implementations. This function may be skipped on trusted implementations in certain circumstances when Chrome does "fast shutdown" of a web page. Fast shutdown will happen in some cases when all module instances are being deleted, and no cleanup functions will be called. The module will just be unloaded and the process terminated.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

<span id="a2fba2c9d06044a48e73a649b04398e1d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#a2fba2c9d06044a48e73a649b04398e1d" class="el">PPP_Instance::HandleDocumentLoad</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> url_loader)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_p___instance__1__1#a2fba2c9d06044a48e73a649b04398e1d" class="el" title="HandleDocumentLoad() is called after initialize for a full-frame instance that was instantiated based...">HandleDocumentLoad()</a> is called after initialize for a full-frame instance that was instantiated based on the MIME type of a DOMWindow navigation.

This situation only applies to modules that are pre-registered to handle certain MIME types. If you haven't specifically registered to handle a MIME type or aren't positive this applies to you, your implementation of this function can just return `PP_FALSE`.

The given `url_loader` corresponds to a `PPB_URLLoader` instance that is already opened. Its response headers may be queried using `PPB_URLLoader::GetResponseInfo`. The reference count for the URL loader is not incremented automatically on behalf of the module. You need to increment the reference count yourself if you are going to keep a reference to it.

This method returns `PP_FALSE` if the module cannot handle the data. In response to this method, the module should call ReadResponseBody() to read the incoming data.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying the instance that should do the load.</td></tr><tr class="even"><td>[in]</td><td>url_loader</td><td>An open <code>PPB_URLLoader</code> instance.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_TRUE` if the data was handled, `PP_FALSE` otherwise. If you return false, the load will be canceled for you.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppp__instance_8h/" class="el">ppp_instance.h</a>
