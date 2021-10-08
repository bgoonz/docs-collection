---json {"title":"PPB\_Core Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#a63ea7047ef5278cc3735dbfd60bd5b81" class="el">AddRefResource</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#af3163aefc33071af39cd085a0a2d44fe" class="el">ReleaseResource</a> )(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#abae0871b4efc729f4658c37543242857" class="el">GetTime</a> )(void)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad6b66e732c6a592605b7b83c7bddd97d" class="el">GetTimeTicks</a> )(void)</td></tr><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad23da4428f462f9f387bab423e93d1f4" class="el">CallOnMainThread</a> )(int32_t delay_in_milliseconds, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback, int32_t result)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#a2f784682b530b66ed3de692154298e17" class="el">IsMainThread</a> )(void)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_Core` interface contains pointers to functions related to memory management, time, and threads on the browser.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a63ea7047ef5278cc3735dbfd60bd5b81" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#a63ea7047ef5278cc3735dbfd60bd5b81" class="el">PPB_Core::AddRefResource</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#a63ea7047ef5278cc3735dbfd60bd5b81" class="el" title="AddRefResource() adds a reference to a resource.">AddRefResource()</a> adds a reference to a resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

<span id="ad23da4428f462f9f387bab423e93d1f4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad23da4428f462f9f387bab423e93d1f4" class="el">PPB_Core::CallOnMainThread</a>)(int32_t delay_in_milliseconds, struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback, int32_t result)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad23da4428f462f9f387bab423e93d1f4" class="el" title="CallOnMainThread() schedules work to be executed on the main module thread after the specified delay...">CallOnMainThread()</a> schedules work to be executed on the main module thread after the specified delay.

The delay may be 0 to specify a call back as soon as possible.

The `result` parameter will just be passed as the second argument to the callback. Many applications won't need this, but it allows a module to emulate calls of some callbacks which do use this value.

**Note:** CallOnMainThread, even when used from the main thread with a delay of 0 milliseconds, will never directly invoke the callback. Even in this case, the callback will be scheduled asynchronously.

**Note:** If the browser is shutting down or if the module has no instances, then the callback function may not be called.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>delay_in_milliseconds</td><td>An int32_t delay in milliseconds.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> callback function that the browser will call after the specified delay.</td></tr><tr class="odd"><td>[in]</td><td>result</td><td>An int32_t that the browser will pass to the given <code>PP_CompletionCallback</code>.</td></tr></tbody></table>

<span id="abae0871b4efc729f4658c37543242857" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#abae0871b4efc729f4658c37543242857" class="el">PPB_Core::GetTime</a>)(void)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#abae0871b4efc729f4658c37543242857" class="el" title="GetTime() returns the &quot;wall clock time&quot; according to the browser.">GetTime()</a> returns the "wall clock time" according to the browser.

**Returns:**  
A `PP_Time` containing the "wall clock time" according to the browser.

<span id="ad6b66e732c6a592605b7b83c7bddd97d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad6b66e732c6a592605b7b83c7bddd97d" class="el">PPB_Core::GetTimeTicks</a>)(void)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad6b66e732c6a592605b7b83c7bddd97d" class="el" title="GetTimeTicks() returns the &quot;tick time&quot; according to the browser.">GetTimeTicks()</a> returns the "tick time" according to the browser.

This clock is used by the browser when passing some event times to the module (e.g. using the `PP_InputEvent::time_stamp_seconds` field). It is not correlated to any actual wall clock time (like <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#abae0871b4efc729f4658c37543242857" class="el" title="GetTime() returns the &quot;wall clock time&quot; according to the browser.">GetTime()</a>). Because of this, it will not run change if the user changes their computer clock.

**Returns:**  
A `PP_TimeTicks` containing the "tick time" according to the browser.

<span id="a2f784682b530b66ed3de692154298e17" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a>(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#a2f784682b530b66ed3de692154298e17" class="el">PPB_Core::IsMainThread</a>)(void)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#a2f784682b530b66ed3de692154298e17" class="el" title="IsMainThread() returns true if the current thread is the main pepper thread.">IsMainThread()</a> returns true if the current thread is the main pepper thread.

This function is useful for implementing sanity checks, and deciding if dispatching using <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#ad23da4428f462f9f387bab423e93d1f4" class="el" title="CallOnMainThread() schedules work to be executed on the main module thread after the specified delay...">CallOnMainThread()</a> is required.

**Returns:**  
A `PP_Bool` containing `PP_TRUE` if the current thread is the main pepper thread, otherwise `PP_FALSE`.

<span id="af3163aefc33071af39cd085a0a2d44fe" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#af3163aefc33071af39cd085a0a2d44fe" class="el">PPB_Core::ReleaseResource</a>)(<a href="/docs/native-client/pepper_dev/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> resource)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/c/struct_p_p_b___core__1__0#af3163aefc33071af39cd085a0a2d44fe" class="el" title="ReleaseResource() removes a reference from a resource.">ReleaseResource()</a> removes a reference from a resource.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>config</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/c/ppb__core_8h/" class="el">ppb_core.h</a>
