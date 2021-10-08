---json {"title":"PPB\_MessageLoop Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2bbe000366ee68200cb97d956b9e33ef" class="el">Create</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ab3ac0fdbe4c56d687bcf316552f0a6f6" class="el">GetForMainThread</a> )(void)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a8049f2ad6395195a673d801b1eeb65df" class="el">GetCurrent</a> )(void)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ad7e1c1fb0baf6a0446ffb241a6b226b9" class="el">AttachToCurrentThread</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el">Run</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop)</td></tr><tr class="even"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a77b0e82e183d5295b0d765f70c4fe7ff" class="el">PostWork</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback, int64_t delay_ms)</td></tr><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#adbbdc03661c9ac41df82fffcc566603d" class="el">PostQuit</a> )(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> should_destroy)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A message loop allows PPAPI calls to be issued on a thread.

You may not issue any API calls on a thread without creating a message loop. It also allows you to post work to the message loop for a thread.

To process work posted to the message loop, as well as completion callbacks for asynchronous operations, you must run the message loop via <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el" title="Runs the thread message loop.">Run()</a>.

Note the system manages the lifetime of the instance (and all associated resources). If the instance is deleted from the page, background threads may suddenly see their PP\_Resource handles become invalid. In this case, calls will fail with PP\_ERROR\_BADRESOURCE. If you need to access data associated with your instance, you will probably want to create some kind of threadsafe proxy object that can handle asynchronous destruction of the instance object.

Typical usage: On the main thread:

-   Create the thread yourself (using pthreads).
-   Create the message loop resource.
-   Pass the message loop resource to your thread's main function.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a77b0e82e183d5295b0d765f70c4fe7ff" class="el" title="Schedules work to run on the given message loop.">PostWork()</a> on the message loop to run functions on the thread.

From the background thread's main function:

-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ad7e1c1fb0baf6a0446ffb241a6b226b9" class="el" title="Sets the given message loop resource as being the associated message loop for the currently running t...">AttachToCurrentThread()</a> with the message loop resource.
-   Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el" title="Runs the thread message loop.">Run()</a> with the message loop resource.

Your callbacks should look like this:

       void DoMyWork(void* user_data, int32_t status) {
         if (status != PP_OK) {
           Cleanup();  // e.g. free user_data.
           return;
         }
         ... do your work...
       }

For a C++ example, see ppapi/utility/threading/simple\_thread.h

(You can also create the message loop resource on the background thread, but then the main thread will have no reference to it should you want to call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a77b0e82e183d5295b0d765f70c4fe7ff" class="el" title="Schedules work to run on the given message loop.">PostWork()</a>).

THREAD HANDLING

The main thread has an implicitly created message loop. The main thread is the thread where PPP\_InitializeModule and PPP\_Instance functions are called. You can retrieve a reference to this message loop by calling <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ab3ac0fdbe4c56d687bcf316552f0a6f6" class="el" title="Returns a resource identifying the message loop for the main thread.">GetForMainThread()</a> or, if your code is on the main thread, <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a8049f2ad6395195a673d801b1eeb65df" class="el" title="Returns a reference to the PPB_MessageLoop object attached to the current thread.">GetCurrent()</a> will also work.

Some special threads created by the system can not have message loops. In particular, the background thread created for audio processing has this requirement because it's intended to be highly responsive to keep up with the realtime requirements of audio processing. You can not make PPAPI calls from these threads.

Once you associate a message loop with a thread, you don't have to keep a reference to it. The system will hold a reference to the message loop for as long as the thread is running. The current message loop can be retrieved using the <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a8049f2ad6395195a673d801b1eeb65df" class="el" title="Returns a reference to the PPB_MessageLoop object attached to the current thread.">GetCurrent()</a> function.

It is legal to create threads in your plugin without message loops, but PPAPI calls will fail unless explicitly noted in the documentation.

You can create a message loop object on a thread and never actually run the message loop. This will allow you to call blocking PPAPI calls (via <a href="/docs/native-client/pepper_stable/c/group___functions#ga340e452b4931d17bd44928769490e282" class="el" title="PP_BlockUntilComplete() is used in place of an actual completion callback to request blocking behavio...">PP_BlockUntilComplete()</a>). If you make any asynchronous calls, the callbacks from those calls will be queued in the message loop and never run. The same thing will happen if work is scheduled after the message loop exits and the message loop is not run again.

DESTRUCTION AND ERROR HANDLING

Often, your application will associate memory with completion callbacks. For example, the C++ CompletionCallbackFactory has a small amount of heap-allocated memory for each callback. This memory will be leaked if the callback is never run. To avoid this memory leak, you need to be careful about error handling and shutdown.

There are a number of cases where posted callbacks will never be run:

-   You tear down the thread (via pthreads) without "destroying" the message loop (via PostQuit with should\_destroy = PP\_TRUE). In this case, any tasks in the message queue will be lost.

<!-- -->

-   You create a message loop, post callbacks to it, and never run it.

<!-- -->

-   You quit the message loop via PostQuit with should\_destroy set to PP\_FALSE. In this case, the system will assume the message loop will be run again later and keep your tasks.

To do proper shutdown, call PostQuit with should\_destroy = PP\_TRUE. This will prohibit future work from being posted, and will allow the message loop to run until all pending tasks are run.

If you post a callback to a message loop that's been destroyed, or to an invalid message loop, PostWork will return an error and will not run the callback. This is true even for callbacks with the "required" flag set, since the system may not even know what thread to issue the error callback on.

Therefore, you should check for errors from PostWork and destroy any associated memory to avoid leaks. If you're using the C++ CompletionCallbackFactory, use the following pattern:

     pp::CompletionCallback callback = factory_.NewOptionalCallback(...);
     int32_t result = message_loop.PostWork(callback);
     if (result != PP_OK)
       callback.Run(result);

This will run the callback with an error value, and assumes that the implementation of your callback checks the "result" argument and returns immediately on error.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ad7e1c1fb0baf6a0446ffb241a6b226b9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ad7e1c1fb0baf6a0446ffb241a6b226b9" class="el">PPB_MessageLoop::AttachToCurrentThread</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop)</td></tr></tbody></table>

Sets the given message loop resource as being the associated message loop for the currently running thread.

You must call this function exactly once on a thread before making any PPAPI calls. A message loop can only be attached to one thread, and the message loop can not be changed later. The message loop will be attached as long as the thread is running or until you quit with should\_destroy set to PP\_TRUE.

If this function fails, attempting to run the message loop will fail. Note that you can still post work to the message loop: it will get queued up should the message loop eventually be successfully attached and run.

**Returns:**  
-   PP\_OK: The message loop was successfully attached to the thread and is ready to use.
-   PP\_ERROR\_BADRESOURCE: The given message loop resource is invalid.
-   PP\_ERROR\_INPROGRESS: The current thread already has a message loop attached. This will always be the case for the main thread, which has an implicit system-created message loop attached.
-   PP\_ERROR\_WRONG\_THREAD: The current thread type can not have a message loop attached to it. See the interface level discussion about these special threads, which include realtime audio threads.

<span id="a2bbe000366ee68200cb97d956b9e33ef" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2bbe000366ee68200cb97d956b9e33ef" class="el">PPB_MessageLoop::Create</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

Creates a message loop resource.

This may be called from any thread. After your thread starts but before issuing any other PPAPI calls on it, you must associate it with a message loop by calling AttachToCurrentThread.

<span id="a8049f2ad6395195a673d801b1eeb65df" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a8049f2ad6395195a673d801b1eeb65df" class="el">PPB_MessageLoop::GetCurrent</a>)(void)</td></tr></tbody></table>

Returns a reference to the PPB\_MessageLoop object attached to the current thread.

If there is no attached message loop, the return value will be 0.

<span id="ab3ac0fdbe4c56d687bcf316552f0a6f6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a>(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ab3ac0fdbe4c56d687bcf316552f0a6f6" class="el">PPB_MessageLoop::GetForMainThread</a>)(void)</td></tr></tbody></table>

Returns a resource identifying the message loop for the main thread.

The main thread always has a message loop created by the system.

<span id="adbbdc03661c9ac41df82fffcc566603d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#adbbdc03661c9ac41df82fffcc566603d" class="el">PPB_MessageLoop::PostQuit</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop, <a href="/docs/native-client/pepper_stable/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> should_destroy)</td></tr></tbody></table>

Posts a quit message to the given message loop's work queue.

Work posted before that point will be processed before quitting.

This may be called on the message loop registered for the current thread, or it may be called on the message loop registered for another thread. It is an error to attempt to <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#adbbdc03661c9ac41df82fffcc566603d" class="el" title="Posts a quit message to the given message loop&#39;s work queue.">PostQuit()</a> the main thread loop.

**Parameters:**  
<table><tbody><tr class="odd"><td>should_destroy</td><td>Marks the message loop as being in a destroyed state and prevents further posting of messages.</td></tr></tbody></table>

If you quit a message loop without setting should\_destroy, it will still be attached to the thread and you can still run it again by calling <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el" title="Runs the thread message loop.">Run()</a> again. If you destroy it, it will be detached from the current thread.

**Returns:**  
-   PP\_OK: The request to quit was successfully posted.
-   PP\_ERROR\_BADRESOURCE: The message loop was invalid.
-   PP\_ERROR\_WRONG\_THREAD: You are attempting to quit the main thread. The main thread's message loop is managed by the system and can't be quit.

<span id="a77b0e82e183d5295b0d765f70c4fe7ff" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a77b0e82e183d5295b0d765f70c4fe7ff" class="el">PPB_MessageLoop::PostWork</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop, struct <a href="/docs/native-client/pepper_stable/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback, int64_t delay_ms)</td></tr></tbody></table>

Schedules work to run on the given message loop.

This may be called from any thread. Posted work will be executed in the order it was posted when the message loop is <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el" title="Runs the thread message loop.">Run()</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>message_loop</td><td>The message loop resource.</td></tr><tr class="even"><td>callback</td><td>The completion callback to execute from the message loop.</td></tr><tr class="odd"><td>delay_ms</td><td>The number of milliseconds to delay execution of the given completion callback. Passing 0 means it will get queued normally and executed in order.</td></tr></tbody></table>

The completion callback will be called with PP\_OK as the "result" parameter if it is run normally. It is good practice to check for PP\_OK and return early otherwise.

The "required" flag on the completion callback is ignored. If there is an error posting your callback, the error will be returned from PostWork and the callback will never be run (because there is no appropriate place to run your callback with an error without causing unexpected threading problems). If you associate memory with the completion callback (for example, you're using the C++ CompletionCallbackFactory), you will need to free this or manually run the callback. See "Destruction and error handling" above.

You can call this function before the message loop has started and the work will get queued until the message loop is run. You can also post work after the message loop has exited as long as should\_destroy was PP\_FALSE. It will be queued until the next invocation of <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el" title="Runs the thread message loop.">Run()</a>.

**Returns:**  
-   PP\_OK: The work was posted to the message loop's queue. As described above, this does not mean that the work has been or will be executed (if you never run the message loop after posting).
-   PP\_ERROR\_BADRESOURCE: The given message loop resource is invalid.
-   PP\_ERROR\_BADARGUMENT: The function pointer for the completion callback is null (this will be the case if you pass <a href="/docs/native-client/pepper_stable/c/group___functions#ga340e452b4931d17bd44928769490e282" class="el" title="PP_BlockUntilComplete() is used in place of an actual completion callback to request blocking behavio...">PP_BlockUntilComplete()</a>).
-   PP\_ERROR\_FAILED: The message loop has been destroyed.

<span id="a2262dd5022845450f77b3601578cc22d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#a2262dd5022845450f77b3601578cc22d" class="el">PPB_MessageLoop::Run</a>)(<a href="/docs/native-client/pepper_stable/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a> message_loop)</td></tr></tbody></table>

Runs the thread message loop.

Running the message loop is required for you to get issued completion callbacks on the thread.

The message loop identified by the argument must have been previously successfully attached to the current thread.

You may not run nested run loops. Since the main thread has an implicit message loop that the system runs, you may not call Run on the main thread.

**Returns:**  
-   PP\_OK: The message loop was successfully run. Note that on success, the message loop will only exit when you call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#adbbdc03661c9ac41df82fffcc566603d" class="el" title="Posts a quit message to the given message loop&#39;s work queue.">PostQuit()</a>.
-   PP\_ERROR\_BADRESOURCE: The given message loop resource is invalid.
-   PP\_ERROR\_WRONG\_THREAD: You are attempting to run a message loop that has not been successfully attached to the current thread. Call <a href="/docs/native-client/pepper_stable/c/struct_p_p_b___message_loop__1__0#ad7e1c1fb0baf6a0446ffb241a6b226b9" class="el" title="Sets the given message loop resource as being the associated message loop for the currently running t...">AttachToCurrentThread()</a>.
-   PP\_ERROR\_INPROGRESS: You are attempting to call Run in a nested fashion (Run is already on the stack). This will occur if you attempt to call run on the main thread's message loop (see above).

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/c/ppb__message__loop_8h/" class="el">ppb_message_loop.h</a>
