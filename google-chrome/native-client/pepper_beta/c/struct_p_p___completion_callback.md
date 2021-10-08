---json {"title":"PP\_CompletionCallback Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback#ac8919fd5c44ffdde5e659b51bc696ed4" class="el">func</a></td></tr><tr class="even"><td style="text-align: right;">void * </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback#a7a35a0fdb8e1c49c738e29bbc93066cb" class="el">user_data</a></td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback#a4bd2d9440bc8dc18eeeca2d464156a38" class="el">flags</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

`PP_CompletionCallback` is a common mechanism for supporting potentially asynchronous calls in browser interfaces.

Any method that takes a `PP_CompletionCallback` can be used in one of three different ways:

-   Required: The callback will always be invoked asynchronously on the thread where the associated PPB method was invoked. The method will always return PP\_OK\_COMPLETIONPENDING when a required callback, and the callback will be invoked later (barring system or thread shutdown; see PPB\_MessageLoop for details). Required callbacks are the default.  
      
    NOTE: If you use a required callback on a background thread, you must have created and attached a PPB\_MessageLoop. Otherwise, the system can not run your callback on that thread, and will instead emit a log message and crash your plugin to make the problem more obvious.

<!-- -->

-   Optional: The callback may be invoked asynchronously, or the PPB method may complete synchronously if it can do so without blocking. If the method will complete asynchronously, it will return PP\_OK\_COMPLETIONPENDING. Otherwise, it will complete synchronously and return an appropriate code (see below for more information on the return code). Optional callbacks are generally more difficult to use correctly than Required callbacks, but can provide better performance for some APIs (especially APIs with buffered reads, such as PPB\_URLLoader or PPB\_FileIO).  
      
    NOTE: If you use an optional callback on a background thread, and you have not created and attached a PPB\_MessageLoop, then the method you invoke will fail without running and return PP\_ERROR\_NO\_MESSAGE\_LOOP.

<!-- -->

-   Blocking: In this case, the callback's function pointer is NULL, and the invoked method must complete synchronously. The method will run to completion and return an appropriate code when finished (see below for more information). Blocking completion callbacks are only supported on background threads.  
      
    `PP_BlockUntilComplete()` provides a convenient way to specify blocking behavior. Refer to `PP_BlockUntilComplete` for more information.

When the callback is run asynchronously, the result parameter passed to `func` is an int32\_t that, if negative indicates an error code whose meaning is specific to the calling method (refer to `pp_error.h` for further information). A positive or 0 value is a return result indicating success whose meaning depends on the calling method (e.g. number of bytes read).

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a4bd2d9440bc8dc18eeeca2d464156a38" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback#a4bd2d9440bc8dc18eeeca2d464156a38" class="el">PP_CompletionCallback::flags</a></td></tr></tbody></table>

Flags used to control how non-NULL callbacks are scheduled by asynchronous methods.

<span id="ac8919fd5c44ffdde5e659b51bc696ed4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback#ac8919fd5c44ffdde5e659b51bc696ed4" class="el">PP_CompletionCallback::func</a></td></tr></tbody></table>

This value is a callback function that will be called, or NULL if this is a blocking completion callback.

<span id="a7a35a0fdb8e1c49c738e29bbc93066cb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void* <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback#a7a35a0fdb8e1c49c738e29bbc93066cb" class="el">PP_CompletionCallback::user_data</a></td></tr></tbody></table>

This value is a pointer to user data passed to a callback function.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__completion__callback_8h/" class="el">pp_completion_callback.h</a>
