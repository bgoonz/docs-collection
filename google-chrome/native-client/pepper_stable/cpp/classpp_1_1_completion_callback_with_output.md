---json {"title":"pp::CompletionCallbackWithOutput&lt; T &gt; Class Template Reference"} ---

Inheritance diagram for pp::CompletionCallbackWithOutput&lt; T &gt;:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output-members/)

Public Types
------------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef<br />
internal::CallbackOutputTraits<br />
&lt; T &gt;::StorageType </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a></td></tr><tr class="even"><td style="text-align: right;">typedef<br />
internal::CallbackOutputTraits<br />
&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#aca381518bda2f9cb12c4ddc725da91ce" class="el">APIArgType</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#aca381518bda2f9cb12c4ddc725da91ce" class="el">APIArgType</a></td></tr></tbody></table>

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a29dd26e95218dce78e2475f29ea669cb" class="el">CompletionCallbackWithOutput</a> (<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a> *<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a8fac51ce72828752c025ca888897f2ef" class="el">output</a>)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a36bc9e5fd9e8d503020fe338b8b9802e" class="el">CompletionCallbackWithOutput</a> (PP_CompletionCallback_Func func, void *user_data, <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a> *<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a8fac51ce72828752c025ca888897f2ef" class="el">output</a>)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a311725af061d86e58cc89a588fa542f9" class="el">CompletionCallbackWithOutput</a> (PP_CompletionCallback_Func func, void *user_data, int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback#a60e466572fe7de362969dd41179c971f" class="el">flags</a>, <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a> *<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a8fac51ce72828752c025ca888897f2ef" class="el">output</a>)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#aca381518bda2f9cb12c4ddc725da91ce" class="el">APIArgType</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a8fac51ce72828752c025ca888897f2ef" class="el">output</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

### template&lt;typename T&gt; class pp::CompletionCallbackWithOutput&lt; T &gt;

A <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el" title="A CompletionCallbackWithOutput defines a completion callback that additionally stores a pointer to so...">CompletionCallbackWithOutput</a> defines a completion callback that additionally stores a pointer to some output data.

Some C++ wrappers take a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el" title="A CompletionCallbackWithOutput defines a completion callback that additionally stores a pointer to so...">CompletionCallbackWithOutput</a> when the browser is returning a bit of data as part of the function call. The "output" parameter stored in the <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el" title="A CompletionCallbackWithOutput defines a completion callback that additionally stores a pointer to so...">CompletionCallbackWithOutput</a> will receive the data from the browser.

You can create this yourself, but it is most common to use with the <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a>'s NewCallbackWithOutput, which manages the storage for the output parameter for you and passes it as an argument to your callback function.

Note that this class doesn't actually do anything with the output data, it just stores a pointer to it. C++ wrapper objects that accept a <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el" title="A CompletionCallbackWithOutput defines a completion callback that additionally stores a pointer to so...">CompletionCallbackWithOutput</a> will retrieve this pointer and pass it to the browser as the output parameter.

------------------------------------------------------------------------

Member Typedef Documentation
----------------------------

<span id="aca381518bda2f9cb12c4ddc725da91ce" class="anchor" style="margin: 0;"></span>

template&lt;typename T &gt;

<table><tbody><tr class="odd"><td>typedef internal::CallbackOutputTraits&lt;T&gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#aca381518bda2f9cb12c4ddc725da91ce" class="el">APIArgType</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#aca381518bda2f9cb12c4ddc725da91ce" class="el">APIArgType</a></td></tr></tbody></table>

<span id="a333f3b00a9f6549b3b70291787f31459" class="anchor" style="margin: 0;"></span>

template&lt;typename T &gt;

<table><tbody><tr class="odd"><td>typedef internal::CallbackOutputTraits&lt;T&gt;::StorageType <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a></td></tr></tbody></table>

The type that will actually be stored in the completion callback.

In the common case, this will be equal to the template parameter (for example, CompletionCallbackWithOutput&lt;int&gt; would obviously take an int\*. However, resources are passed as PP\_Resource, vars as PP\_Var, and arrays as our special ArrayOutputAdapter object. The CallbackOutputTraits defines specializations for all of these cases.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a29dd26e95218dce78e2475f29ea669cb" class="anchor" style="margin: 0;"></span>

template&lt;typename T &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a> * </td><td><em>output</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The default constructor will create a blocking `CompletionCallback` that references the given output data.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>output</td><td>A pointer to the data associated with the callback. The caller must ensure that this pointer outlives the completion callback.</td></tr></tbody></table>

**Note:** Blocking completion callbacks are only allowed from from background threads.

<span id="a36bc9e5fd9e8d503020fe338b8b9802e" class="anchor" style="margin: 0;"></span>

template&lt;typename T &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a></td><td>(</td><td>PP_CompletionCallback_Func </td><td><em>func</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em>,</td></tr><tr class="odd"><td></td><td></td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a> * </td><td><em>output</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor for creating a `CompletionCallback` that references the given output data.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>func</td><td>The function to be called on completion.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>The user data to be passed to the callback function. This is optional and is typically used to help track state in case of multiple pending callbacks.</td></tr><tr class="odd"><td>[in]</td><td>output</td><td>A pointer to the data associated with the callback. The caller must ensure that this pointer outlives the completion callback.</td></tr></tbody></table>

<span id="a311725af061d86e58cc89a588fa542f9" class="anchor" style="margin: 0;"></span>

template&lt;typename T &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a></td><td>(</td><td>PP_CompletionCallback_Func </td><td><em>func</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>flags</em>,</td></tr><tr class="even"><td></td><td></td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a333f3b00a9f6549b3b70291787f31459" class="el">OutputStorageType</a> * </td><td><em>output</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor for creating a `CompletionCallback` that references the given output data.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>func</td><td>The function to be called on completion.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>The user data to be passed to the callback function. This is optional and is typically used to help track state in case of multiple pending callbacks.</td></tr><tr class="odd"><td>[in]</td><td>flags</td><td>Bit field combination of <code>PP_CompletionCallback_Flag</code> flags used to control how non-NULL callbacks are scheduled by asynchronous methods.</td></tr><tr class="even"><td>[in]</td><td>output</td><td>A pointer to the data associated with the callback. The caller must ensure that this pointer outlives the completion callback.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a8fac51ce72828752c025ca888897f2ef" class="anchor" style="margin: 0;"></span>

template&lt;typename T &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#aca381518bda2f9cb12c4ddc725da91ce" class="el">APIArgType</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output/" class="el">pp::CompletionCallbackWithOutput</a>&lt; T &gt;::<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback_with_output#a8fac51ce72828752c025ca888897f2ef" class="el">output</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/completion__callback_8h/" class="el">completion_callback.h</a>
