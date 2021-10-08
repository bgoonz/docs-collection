—json {“title”:“pp::CompletionCallback Class Reference”} —

Inheritance diagram for pp::CompletionCallback:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2dae27f9f015c3b9342a4a65f05bd356" class="el">CompletionCallback</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#afe88416d324795a748d5112e197b0131" class="el">CompletionCallback</a> (PP_CompletionCallback_Func func, void *user_data)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a14fd9478ff007a91a3cdfa397c8e6e56" class="el">CompletionCallback</a> (PP_CompletionCallback_Func func, void *user_data, int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a60e466572fe7de362969dd41179c971f" class="el">flags</a>)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a89fb884e8af572e9bf38fb880e132438" class="el">set_flags</a> (int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a60e466572fe7de362969dd41179c971f" class="el">flags</a>)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a7795404cc15a4f96523c28db21d364c4" class="el">Run</a> (int32_t result)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2996ca2f2b640c7da6da9016a5b0cd16" class="el">RunAndClear</a> (int32_t result)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a6ce66ec2655c9157cab494f248551b5f" class="el">IsOptional</a> () const</td></tr><tr class="even"><td style="text-align: right;">const PP_CompletionCallback &amp; </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#ada943a747c94eebb1e32dbd6914c2526" class="el">pp_completion_callback</a> () const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a60e466572fe7de362969dd41179c971f" class="el">flags</a> () const</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a24d1648d1a92a5c36894ce081457e603" class="el">MayForce</a> (int32_t result) const</td></tr></tbody></table>

Protected Attributes
--------------------

<table><tbody><tr class="odd"><td style="text-align: right;">PP_CompletionCallback </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#af071c756ff3eb007dfbea3f50df74111" class="el">cc_</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This API enables you to implement and receive callbacks when Pepper operations complete asynchronously.

You can create these objects yourself, but it is most common to use the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a> to allow the callbacks to call class member functions.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a2dae27f9f015c3b9342a4a65f05bd356" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2dae27f9f015c3b9342a4a65f05bd356" class="el">pp::CompletionCallback::CompletionCallback</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The default constructor will create a blocking `CompletionCallback` that can be passed to a method to indicate that the calling thread should be blocked until the asynchronous operation corresponding to the method completes.

**Note:** Blocking completion callbacks are only allowed from from background threads.

<span id="afe88416d324795a748d5112e197b0131" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2dae27f9f015c3b9342a4a65f05bd356" class="el">pp::CompletionCallback::CompletionCallback</a></td><td>(</td><td>PP_CompletionCallback_Func </td><td><em>func</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor for creating a `CompletionCallback`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>func</td><td>The function to be called on completion.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>The user data to be passed to the callback function. This is optional and is typically used to help track state in case of multiple pending callbacks.</td></tr></tbody></table>

<span id="a14fd9478ff007a91a3cdfa397c8e6e56" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2dae27f9f015c3b9342a4a65f05bd356" class="el">pp::CompletionCallback::CompletionCallback</a></td><td>(</td><td>PP_CompletionCallback_Func </td><td><em>func</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>flags</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

A constructor for creating a `CompletionCallback` with specified flags.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>func</td><td>The function to be called on completion.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>The user data to be passed to the callback function. This is optional and is typically used to help track state in case of multiple pending callbacks.</td></tr><tr class="odd"><td>[in]</td><td>flags</td><td>Bit field combination of <code>PP_CompletionCallback_Flag</code> flags used to control how non-NULL callbacks are scheduled by asynchronous methods.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a60e466572fe7de362969dd41179c971f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a60e466572fe7de362969dd41179c971f" class="el">pp::CompletionCallback::flags</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a60e466572fe7de362969dd41179c971f" class="el" title="The flags() function returns flags used to control how non-NULL callbacks are scheduled by asynchrono...">flags()</a> function returns flags used to control how non-NULL callbacks are scheduled by asynchronous methods.

**Returns:**  
An int32\_t containing a bit field combination of `PP_CompletionCallback_Flag` flags.

<span id="a6ce66ec2655c9157cab494f248551b5f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a6ce66ec2655c9157cab494f248551b5f" class="el">pp::CompletionCallback::IsOptional</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a6ce66ec2655c9157cab494f248551b5f" class="el" title="IsOptional() is used to determine the setting of the PP_COMPLETIONCALLBACK_FLAG_OPTIONAL flag...">IsOptional()</a> is used to determine the setting of the `PP_COMPLETIONCALLBACK_FLAG_OPTIONAL` flag.

This flag allows any method taking such callback to complete synchronously and not call the callback if the operation would not block. This is useful when performance is an issue, and the operation bandwidth should not be limited to the processing speed of the message loop.

On synchronous method completion, the completion result will be returned by the method itself. Otherwise, the method will return PP\_OK\_COMPLETIONPENDING, and the callback will be invoked asynchronously on the same thread where the PPB method was invoked.

**Returns:**  
true if this callback is optional, otherwise false.

<span id="a24d1648d1a92a5c36894ce081457e603" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a24d1648d1a92a5c36894ce081457e603" class="el">pp::CompletionCallback::MayForce</a></td><td>(</td><td>int32_t </td><td><em>result</em></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a24d1648d1a92a5c36894ce081457e603" class="el" title="MayForce() is used when implementing functions taking callbacks.">MayForce()</a> is used when implementing functions taking callbacks.

If the callback is required and `result` indicates that it has not been scheduled, it will be forced on the main thread.

**Example:**

     int32_t OpenURL(pp::URLLoader* loader,
                     pp::URLRequestInfo* url_request_info,
                     const CompletionCallback& cc) {
       if (loader == NULL || url_request_info == NULL)
         return cc.MayForce(PP_ERROR_BADRESOURCE);
       return loader->Open(*loader, *url_request_info, cc);
     }

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>result</td><td>PP_OK_COMPLETIONPENDING or the result of the completed operation to be passed to the callback function. PP_OK_COMPLETIONPENDING indicates that the callback has already been scheduled. Other non-positive values correspond to error codes from <code>pp_errors.h</code>. Positive values indicate additional information such as bytes read.</td></tr></tbody></table>

**Returns:**  
`PP_OK_COMPLETIONPENDING` if the callback has been forced, result parameter otherwise.

<span id="ada943a747c94eebb1e32dbd6914c2526" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const PP_CompletionCallback&amp; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#ada943a747c94eebb1e32dbd6914c2526" class="el">pp::CompletionCallback::pp_completion_callback</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#ada943a747c94eebb1e32dbd6914c2526" class="el" title="The pp_completion_callback() function returns the underlying PP_CompletionCallback">pp_completion_callback()</a> function returns the underlying `PP_CompletionCallback`

**Returns:**  
A `PP_CompletionCallback`.

<span id="a7795404cc15a4f96523c28db21d364c4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a7795404cc15a4f96523c28db21d364c4" class="el">pp::CompletionCallback::Run</a></td><td>(</td><td>int32_t </td><td><em>result</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a7795404cc15a4f96523c28db21d364c4" class="el" title="Run() is used to run the CompletionCallback.">Run()</a> is used to run the `CompletionCallback`.

Normally, the system runs a `CompletionCallback` after an asynchronous operation completes, but programs may wish to run the `CompletionCallback` manually in order to reuse the same code paths.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>result</td><td>The result of the operation to be passed to the callback function. Non-positive values correspond to the error codes from <code>pp_errors.h</code> (excluding <code>PP_OK_COMPLETIONPENDING</code>). Positive values indicate additional information such as bytes read.</td></tr></tbody></table>

<span id="a2996ca2f2b640c7da6da9016a5b0cd16" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2996ca2f2b640c7da6da9016a5b0cd16" class="el">pp::CompletionCallback::RunAndClear</a></td><td>(</td><td>int32_t </td><td><em>result</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a2996ca2f2b640c7da6da9016a5b0cd16" class="el" title="RunAndClear() is used to run the CompletionCallback and clear out the callback so that it cannot be r...">RunAndClear()</a> is used to run the `CompletionCallback` and clear out the callback so that it cannot be run a second time.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>result</td><td>The result of the operation to be passed to the callback function. Non-positive values correspond to the error codes from <code>pp_errors.h</code> (excluding <code>PP_OK_COMPLETIONPENDING</code>). Positive values indicate additional information such as bytes read.</td></tr></tbody></table>

<span id="a89fb884e8af572e9bf38fb880e132438" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a89fb884e8af572e9bf38fb880e132438" class="el">pp::CompletionCallback::set_flags</a></td><td>(</td><td>int32_t </td><td><em>flags</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#a89fb884e8af572e9bf38fb880e132438" class="el" title="The set_flags() function is used to set the flags used to control how non-NULL callbacks are schedule...">set_flags()</a> function is used to set the flags used to control how non-NULL callbacks are scheduled by asynchronous methods.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>flags</td><td>Bit field combination of <code>PP_CompletionCallback_Flag</code> flags used to control how non-NULL callbacks are scheduled by asynchronous methods.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Data Documentation
-------------------------

<span id="af071c756ff3eb007dfbea3f50df74111" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_CompletionCallback <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback#af071c756ff3eb007dfbea3f50df74111" class="el">pp::CompletionCallback::cc_</a><code> [protected]</code></td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/completion__callback_8h/" class="el">completion_callback.h</a>
