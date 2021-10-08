---json {"title":"pp::Core Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_core-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a09c663df7fcb527b3e5e71ea07531899" class="el">AddRefResource</a> (PP_Resource resource)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a5fd1b4530d9f01ebf3c50115238a8195" class="el">ReleaseResource</a> (PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;">PP_Time </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a8c7991d43fc5b4fce51095ad7dccaec1" class="el">GetTime</a> ()</td></tr><tr class="even"><td style="text-align: right;">PP_TimeTicks </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#ae80748da9fe60f2b83fbf3e18978f86f" class="el">GetTimeTicks</a> ()</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#af20d1f92600f588bc74115fcbd17a1c7" class="el">CallOnMainThread</a> (int32_t delay_in_milliseconds, const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback, int32_t result=0)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a052082be868f24d1f1807afa4eb7e7e4" class="el">IsMainThread</a> ()</td></tr></tbody></table>

## Friends

<table><tbody><tr class="odd"><td style="text-align: right;">class </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a21f639900c480510650969df9c74d17d" class="el">Module</a></td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

APIs related to memory management, time, and threads.

---

## Member Function Documentation

<span id="a09c663df7fcb527b3e5e71ea07531899" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a09c663df7fcb527b3e5e71ea07531899" class="el">pp::Core::AddRefResource</a></td><td>(</td><td>PP_Resource </td><td><em>resource</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a09c663df7fcb527b3e5e71ea07531899" class="el" title="AddRefResource() increments the reference count for the provided resource.">AddRefResource()</a> increments the reference count for the provided `resource`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

<span id="af20d1f92600f588bc74115fcbd17a1c7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#af20d1f92600f588bc74115fcbd17a1c7" class="el">pp::Core::CallOnMainThread</a></td><td>(</td><td>int32_t </td><td><em>delay_in_milliseconds</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>result</em> = <code>0</code> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#af20d1f92600f588bc74115fcbd17a1c7" class="el" title="CallOnMainThread() schedules work to be executed on the main pepper thread after the specified delay...">CallOnMainThread()</a> schedules work to be executed on the main pepper thread after the specified delay.

The delay may be 0 to specify a call back as soon as possible.

The |result| parameter will just be passed as the second argument to the callback. Many applications won't need this, but it allows a module to emulate calls of some callbacks which do use this value.

**Note:** <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#af20d1f92600f588bc74115fcbd17a1c7" class="el" title="CallOnMainThread() schedules work to be executed on the main pepper thread after the specified delay...">CallOnMainThread()</a>, even when used from the main thread with a delay of 0 milliseconds, will never directly invoke the callback. Even in this case, the callback will be scheduled asynchronously.

**Note:** If the browser is shutting down or if the module has no instances, then the callback function may not be called.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>delay_in_milliseconds</td><td>An int32_t delay in milliseconds.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>CompletionCallback</code> callback function that the browser will call after the specified delay.</td></tr><tr class="odd"><td>[in]</td><td>result</td><td>An int32_t that the browser will pass to the given <code>CompletionCallback</code>.</td></tr></tbody></table>

<span id="a8c7991d43fc5b4fce51095ad7dccaec1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Time <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a8c7991d43fc5b4fce51095ad7dccaec1" class="el">pp::Core::GetTime</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a8c7991d43fc5b4fce51095ad7dccaec1" class="el" title="GetTime() returns the &quot;wall clock time&quot; according to the browser.">GetTime()</a> returns the "wall clock time" according to the browser.

**Returns:**  
A `PP_Time` containing the "wall clock time" according to the browser.

<span id="ae80748da9fe60f2b83fbf3e18978f86f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_TimeTicks <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#ae80748da9fe60f2b83fbf3e18978f86f" class="el">pp::Core::GetTimeTicks</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#ae80748da9fe60f2b83fbf3e18978f86f" class="el" title="GetTimeTicks() returns the &quot;tick time&quot; according to the browser.">GetTimeTicks()</a> returns the "tick time" according to the browser.

This clock is used by the browser when passing some event times to the module (for example, using the `PP_InputEvent::time_stamp_seconds` field). It is not correlated to any actual wall clock time (like <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a8c7991d43fc5b4fce51095ad7dccaec1" class="el" title="GetTime() returns the &quot;wall clock time&quot; according to the browser.">GetTime()</a>). Because of this, it will not change if the user changes their computer clock.

**Returns:**  
A `PP_TimeTicks` containing the "tick time" according to the browser.

<span id="a052082be868f24d1f1807afa4eb7e7e4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a052082be868f24d1f1807afa4eb7e7e4" class="el">pp::Core::IsMainThread</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a052082be868f24d1f1807afa4eb7e7e4" class="el" title="IsMainThread() returns true if the current thread is the main pepper thread.">IsMainThread()</a> returns true if the current thread is the main pepper thread.

This function is useful for implementing sanity checks, and deciding if dispatching using <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#af20d1f92600f588bc74115fcbd17a1c7" class="el" title="CallOnMainThread() schedules work to be executed on the main pepper thread after the specified delay...">CallOnMainThread()</a> is required.

**Returns:**  
true if the current thread is the main pepper thread, otherwise false.

<span id="a5fd1b4530d9f01ebf3c50115238a8195" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a5fd1b4530d9f01ebf3c50115238a8195" class="el">pp::Core::ReleaseResource</a></td><td>(</td><td>PP_Resource </td><td><em>resource</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_core#a5fd1b4530d9f01ebf3c50115238a8195" class="el" title="ReleaseResource() decrements the reference count for the provided resource.">ReleaseResource()</a> decrements the reference count for the provided `resource`.

The resource will be deallocated if the reference count reaches zero.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

---

## Friends And Related Function Documentation

<span id="a21f639900c480510650969df9c74d17d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>friend class <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_module/" class="el">Module</a><code> [friend]</code></td></tr></tbody></table>

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/core_8h/" class="el">core.h</a>
