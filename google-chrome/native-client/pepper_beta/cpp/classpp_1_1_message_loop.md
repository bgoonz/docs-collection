---json {"title":"pp::MessageLoop Class Reference"} ---

Inheritance diagram for pp::MessageLoop:

![Inheritance graph](/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_beta/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a424cabb7ac0b27aed54a6485dd880533" class="el">MessageLoop</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a985004b1e2b2bb09f62cb59b320c6625" class="el">MessageLoop</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ab7c519d456320eda6aa57548e9574b44" class="el">MessageLoop</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el">MessageLoop</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2019e1f3f291bf4d87cdb41efea187e7" class="el">MessageLoop</a> (PP_Resource pp_message_loop)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5373c3f4b64dbb34d2a8334a23d0f95" class="el">AttachToCurrentThread</a> ()</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el">Run</a> ()</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2c24506ef8be1745d29983b2d7803e36" class="el">PostWork</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;callback, int64_t delay_ms=0)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2311af860834b866076fb518ac27eab5" class="el">PostQuit</a> (bool should_destroy)</td></tr></tbody></table>

## Static Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;">static <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el">MessageLoop</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a70558dd2cfda90b4869dc9960223f7ed" class="el">GetForMainThread</a> ()</td></tr><tr class="even"><td style="text-align: right;">static <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el">MessageLoop</a> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#abba91f736f52838f28961a571f79f09a" class="el">GetCurrent</a> ()</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

A message loop allows PPAPI calls to be issued on a thread.

You may not issue any API calls on a thread without creating a message loop. It also allows you to post work to the message loop for a thread.

To process work posted to the message loop, as well as completion callbacks for asynchronous operations, you must run the message loop via <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el" title="Runs the thread message loop.">Run()</a>.

Note the system manages the lifetime of the instance (and all associated resources). If the instance is deleted from the page, background threads may suddenly see their PP_Resource handles become invalid. In this case, calls will fail with PP_ERROR_BADRESOURCE. If you need to access data associated with your instance, you will probably want to create some kind of threadsafe proxy object that can handle asynchronous destruction of the instance object.

Typical usage: On the main thread:

- Create the thread yourself (using pthreads).
- Create the message loop resource.
- Pass the message loop resource to your thread's main function.
- Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2c24506ef8be1745d29983b2d7803e36" class="el" title="Schedules work to run on the given message loop.">PostWork()</a> on the message loop to run functions on the thread.

From the background thread's main function:

- Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5373c3f4b64dbb34d2a8334a23d0f95" class="el" title="Sets the given message loop resource as being the associated message loop for the currently running t...">AttachToCurrentThread()</a> with the message loop resource.
- Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el" title="Runs the thread message loop.">Run()</a> with the message loop resource.

Your callbacks should look like this:

       void DoMyWork(void* user_data, int32_t status) {
         if (status != PP_OK) {
           Cleanup();  // e.g. free user_data.
           return;
         }
         ... do your work...
       }

For a C++ example, see ppapi/utility/threading/simple_thread.h

(You can also create the message loop resource on the background thread, but then the main thread will have no reference to it should you want to call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2c24506ef8be1745d29983b2d7803e36" class="el" title="Schedules work to run on the given message loop.">PostWork()</a>).

THREAD HANDLING

The main thread has an implicitly created message loop. The main thread is the thread where PPP_InitializeModule and PPP_Instance functions are called. You can retrieve a reference to this message loop by calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a70558dd2cfda90b4869dc9960223f7ed" class="el">GetForMainThread()</a> or, if your code is on the main thread, <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#abba91f736f52838f28961a571f79f09a" class="el">GetCurrent()</a> will also work.

Some special threads created by the system can not have message loops. In particular, the background thread created for audio processing has this requirement because it's intended to be highly responsive to keep up with the realtime requirements of audio processing. You can not make PPAPI calls from these threads.

Once you associate a message loop with a thread, you don't have to keep a reference to it. The system will hold a reference to the message loop for as long as the thread is running. The current message loop can be retrieved using the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#abba91f736f52838f28961a571f79f09a" class="el">GetCurrent()</a> function.

It is legal to create threads in your plugin without message loops, but PPAPI calls will fail unless explicitly noted in the documentation.

You can create a message loop object on a thread and never actually run the message loop. This will allow you to call blocking PPAPI calls (via PP_BlockUntilComplete()). If you make any asynchronous calls, the callbacks from those calls will be queued in the message loop and never run. The same thing will happen if work is scheduled after the message loop exits and the message loop is not run again.

DESTRUCTION AND ERROR HANDLING

Often, your application will associate memory with completion callbacks. For example, the C++ <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a> has a small amount of heap-allocated memory for each callback. This memory will be leaked if the callback is never run. To avoid this memory leak, you need to be careful about error handling and shutdown.

There are a number of cases where posted callbacks will never be run:

- You tear down the thread (via pthreads) without "destroying" the message loop (via PostQuit with should_destroy = PP_TRUE). In this case, any tasks in the message queue will be lost.

<!-- -->

- You create a message loop, post callbacks to it, and never run it.

<!-- -->

- You quit the message loop via PostQuit with should_destroy set to PP_FALSE. In this case, the system will assume the message loop will be run again later and keep your tasks.

To do proper shutdown, call PostQuit with should_destroy = PP_TRUE. This will prohibit future work from being posted, and will allow the message loop to run until all pending tasks are run.

If you post a callback to a message loop that's been destroyed, or to an invalid message loop, PostWork will return an error and will not run the callback. This is true even for callbacks with the "required" flag set, since the system may not even know what thread to issue the error callback on.

Therefore, you should check for errors from PostWork and destroy any associated memory to avoid leaks. If you're using the C++ <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a>, use the following pattern:

     pp::CompletionCallback callback = factory_.NewOptionalCallback(...);
     int32_t result = message_loop.PostWork(callback);
     if (result != PP_OK)
       callback.Run(result);

This will run the callback with an error value, and assumes that the implementation of your callback checks the "result" argument and returns immediately on error.

---

## Constructor & Destructor Documentation

<span id="a424cabb7ac0b27aed54a6485dd880533" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a424cabb7ac0b27aed54a6485dd880533" class="el">pp::MessageLoop::MessageLoop</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Creates an <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el" title="A message loop allows PPAPI calls to be issued on a thread.">MessageLoop</a> resource.

<span id="a985004b1e2b2bb09f62cb59b320c6625" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a424cabb7ac0b27aed54a6485dd880533" class="el">pp::MessageLoop::MessageLoop</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Creates a message loop associated with the given instance.

The resource will be <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> on failure.

This may be called from any thread. After your thread starts but before issuing any other PPAPI calls on it, you must associate it with a message loop by calling AttachToCurrentThread.

<span id="ab7c519d456320eda6aa57548e9574b44" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a424cabb7ac0b27aed54a6485dd880533" class="el">pp::MessageLoop::MessageLoop</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el">MessageLoop</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

<span id="a2019e1f3f291bf4d87cdb41efea187e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a424cabb7ac0b27aed54a6485dd880533" class="el">pp::MessageLoop::MessageLoop</a></td><td>(</td><td>PP_Resource </td><td><em>pp_message_loop</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Takes an additional ref to the resource.

---

## Member Function Documentation

<span id="ad5373c3f4b64dbb34d2a8334a23d0f95" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5373c3f4b64dbb34d2a8334a23d0f95" class="el">pp::MessageLoop::AttachToCurrentThread</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Sets the given message loop resource as being the associated message loop for the currently running thread.

You must call this function exactly once on a thread before making any PPAPI calls. A message loop can only be attached to one thread, and the message loop can not be changed later. The message loop will be attached as long as the thread is running or until you quit with should_destroy set to PP_TRUE.

If this function fails, attempting to run the message loop will fail. Note that you can still post work to the message loop: it will get queued up should the message loop eventually be successfully attached and run.

**Returns:**

- PP_OK: The message loop was successfully attached to the thread and is ready to use.
- PP_ERROR_BADRESOURCE: The given message loop resource is invalid.
- PP_ERROR_INPROGRESS: The current thread already has a message loop attached. This will always be the case for the main thread, which has an implicit system-created message loop attached.
- PP_ERROR_WRONG_THREAD: The current thread type can not have a message loop attached to it. See the interface level discussion about these special threads, which include realtime audio threads.

<span id="abba91f736f52838f28961a571f79f09a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el">MessageLoop</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#abba91f736f52838f28961a571f79f09a" class="el">pp::MessageLoop::GetCurrent</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

<span id="a70558dd2cfda90b4869dc9960223f7ed" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop/" class="el">MessageLoop</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a70558dd2cfda90b4869dc9960223f7ed" class="el">pp::MessageLoop::GetForMainThread</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

<span id="a2311af860834b866076fb518ac27eab5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2311af860834b866076fb518ac27eab5" class="el">pp::MessageLoop::PostQuit</a></td><td>(</td><td>bool </td><td><em>should_destroy</em></td><td>)</td><td></td></tr></tbody></table>

Posts a quit message to the given message loop's work queue.

Work posted before that point will be processed before quitting.

This may be called on the message loop registered for the current thread, or it may be called on the message loop registered for another thread. It is an error to attempt to quit the main thread loop.

**Parameters:**

<table><tbody><tr class="odd"><td>should_destroy</td><td>Marks the message loop as being in a destroyed state and prevents further posting of messages.</td></tr></tbody></table>

If you quit a message loop without setting should_destroy, it will still be attached to the thread and you can still run it again by calling <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el" title="Runs the thread message loop.">Run()</a> again. If you destroy it, it will be detached from the current thread.

**Returns:**

- PP_OK: The request to quit was successfully posted.
- PP_ERROR_BADRESOURCE: The message loop was invalid.
- PP_ERROR_WRONG_THREAD: You are attempting to quit the main thread. The main thread's message loop is managed by the system and can't be quit.

<span id="a2c24506ef8be1745d29983b2d7803e36" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2c24506ef8be1745d29983b2d7803e36" class="el">pp::MessageLoop::PostWork</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>callback</em>,</td></tr><tr class="even"><td></td><td></td><td>int64_t </td><td><em>delay_ms</em> = <code>0</code> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Schedules work to run on the given message loop.

This may be called from any thread. Posted work will be executed in the order it was posted when the message loop is <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el" title="Runs the thread message loop.">Run()</a>.

**Parameters:**

<table><tbody><tr class="odd"><td>callback</td><td>A pointer to the completion callback to execute from the message loop.</td></tr><tr class="even"><td>delay_ms</td><td>The number of milliseconds to delay execution of the given completion callback. Passing 0 means it will get queued normally and executed in order.</td></tr></tbody></table>

The completion callback will be called with PP_OK as the "result" parameter if it is run normally. It is good practice to check for PP_OK and return early otherwise.

The "required" flag on the completion callback is ignored. If there is an error posting your callback, the error will be returned from PostWork and the callback will never be run (because there is no appropriate place to run your callback with an error without causing unexpected threading problems). If you associate memory with the completion callback (for example, you're using the C++ <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a>), you will need to free this or manually run the callback. See "Desctruction and error handling" above.

You can call this function before the message loop has started and the work will get queued until the message loop is run. You can also post work after the message loop has exited as long as should_destroy was PP_FALSE. It will be queued until the next invocation of <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el" title="Runs the thread message loop.">Run()</a>.

**Returns:**

- PP_OK: The work was posted to the message loop's queue. As described above, this does not mean that the work has been or will be executed (if you never run the message loop after posting).
- PP_ERROR_BADRESOURCE: The given message loop resource is invalid.
- PP_ERROR_BADARGUMENT: The function pointer for the completion callback is null (this will be the case if you pass PP_BlockUntilComplete()).
- PP_ERROR_FAILED: The message loop has been destroyed.

<span id="ad5ac96f80c12d701acfbe558e8fb3a4c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5ac96f80c12d701acfbe558e8fb3a4c" class="el">pp::MessageLoop::Run</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Runs the thread message loop.

Running the message loop is required for you to get issued completion callbacks on the thread.

The message loop identified by the argument must have been previously successfully attached to the current thread.

You may not run nested run loops. Since the main thread has an implicit message loop that the system runs, you may not call Run on the main thread.

**Returns:**

- PP_OK: The message loop was successfully run. Note that on success, the message loop will only exit when you call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#a2311af860834b866076fb518ac27eab5" class="el" title="Posts a quit message to the given message loop&#39;s work queue.">PostQuit()</a>.
- PP_ERROR_BADRESOURCE: The given message loop resource is invalid.
- PP_ERROR_WRONG_THREAD: You are attempting to run a message loop that has not been successfully attached to the current thread. Call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_message_loop#ad5373c3f4b64dbb34d2a8334a23d0f95" class="el" title="Sets the given message loop resource as being the associated message loop for the currently running t...">AttachToCurrentThread()</a>.
- PP_ERROR_INPROGRESS: You are attempting to call Run in a nested fashion (Run is already on the stack). This will occur if you attempt to call run on the main thread's message loop (see above).

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/message__loop_8h/" class="el">message_loop.h</a>
