---json {"title":"pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt; Class Template Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory-members/)

## Classes

<table><tbody><tr class="odd"><td style="text-align: right;">class  </td><td><strong>BackPointer</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>CallbackData</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>Dispatcher0</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>Dispatcher1</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>Dispatcher2</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>Dispatcher3</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>DispatcherWithOutput0</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>DispatcherWithOutput1</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>DispatcherWithOutput2</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>DispatcherWithOutput3</strong></td></tr></tbody></table>

## Public Member Functions



<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab870c8d37638facb949a86226c5138dc" class="el">CompletionCallbackFactory</a> (T \*object=NULL)



<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8341b9bfa1660d5f3f38d2530a0a9d42" class="el">~CompletionCallbackFactory</a> ()

void

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ad43328a7d8c19233e3fa0b762f357088" class="el">CancelAll</a> ()

void

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a6289f165e3ce15a07061f8be411e186c" class="el">Initialize</a> (T \*object)

T \*

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a5cd104c9185333647e1a752860ca0336" class="el">GetObject</a> ()

template&lt;typename Method &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el">NewCallback</a> (Method method)

template&lt;typename Method &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el">NewOptionalCallback</a> (Method method)

template&lt;typename Output &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>  
&lt; typename  
<a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>  
&lt; Output &gt;::StorageType &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el">NewCallbackWithOutput</a> (void(T::\*method)(int32_t, Output))

template&lt;typename Method , typename A &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#aaa341cc4aa04c12dfe58a4452467b225" class="el">NewCallback</a> (Method method, const A &a)

template&lt;typename Method , typename A &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a221758746a8b10563148990cf63d085d" class="el">NewOptionalCallback</a> (Method method, const A &a)

template&lt;typename Output , typename A &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>  
&lt; typename  
<a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>  
&lt; Output &gt;::StorageType &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a85f3416759e1d7297025f5a0fb037fd9" class="el">NewCallbackWithOutput</a> (void(T::\*method)(int32_t, Output, A), const A &a)

template&lt;typename Method , typename A , typename B &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a3d32cb2060a1da7ce73e8657c94f15fa" class="el">NewCallback</a> (Method method, const A &a, const B &b)

template&lt;typename Method , typename A , typename B &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#abe32b7e60edc4699de46dc8640e90bcb" class="el">NewOptionalCallback</a> (Method method, const A &a, const B &b)

template&lt;typename Output , typename A , typename B &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>  
&lt; typename  
<a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>  
&lt; Output &gt;::StorageType &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a5f1288cad38fa17aa1f07f5793908e24" class="el">NewCallbackWithOutput</a> (void(T::\*method)(int32_t, Output, A, B), const A &a, const B &b)

template&lt;typename Method , typename A , typename B , typename C &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a4110e491c1358c951903ef1b0fecf58d" class="el">NewCallback</a> (Method method, const A &a, const B &b, const C &c)

template&lt;typename Method , typename A , typename B , typename C &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#aaa7f305418d469d8be2ec801dd0bfeda" class="el">NewOptionalCallback</a> (Method method, const A &a, const B &b, const C &c)

template&lt;typename Output , typename A , typename B , typename C &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>  
&lt; typename  
<a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>  
&lt; Output &gt;::StorageType &gt;

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a3653f981f4decf82d697e46a6d21519f" class="el">NewCallbackWithOutput</a> (void(T::\*method)(int32_t, Output, A, B, C), const A &a, const B &b, const C &c)

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

### template&lt;typename T, typename ThreadTraits = ThreadSafeThreadTraits&gt; class pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;

CompletionCallbackFactory&lt;T&gt; may be used to create <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a> objects that are bound to member functions.

If a factory is destroyed, then any pending callbacks will be cancelled preventing any bound member functions from being called. The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ad43328a7d8c19233e3fa0b762f357088" class="el" title="CancelAll() cancels all CompletionCallbacks allocated from this factory.">CancelAll()</a> method allows pending callbacks to be cancelled without destroying the factory.

**Note:** `CompletionCallbackFactory<T>` isn't thread safe, but it is somewhat thread-friendly when used with a thread-safe traits class as the second template element. However, it only guarantees safety for creating a callback from another thread, the callback itself needs to execute on the same thread as the thread that creates/destroys the factory. With this restriction, it is safe to create the `CompletionCallbackFactory` on the main thread, create callbacks from any thread and pass them to CallOnMainThread().

**Example:**

       class MyClass {
        public:
         // If an compiler warns on following using |this| in the initializer
         // list, use PP_ALLOW_THIS_IN_INITIALIZER_LIST macro.
         MyClass() : factory_(this) {
         }

         void OpenFile(const pp::FileRef& file) {
           pp::CompletionCallback cc = factory_.NewCallback(&MyClass::DidOpen);
           int32_t rv = file_io_.Open(file, PP_FileOpenFlag_Read, cc);
           CHECK(rv == PP_OK_COMPLETIONPENDING);
         }

        private:
         void DidOpen(int32_t result) {
           if (result == PP_OK) {
             // The file is open, and we can begin reading.
             // ...
           } else {
             // Failed to open the file with error given by 'result'.
           }
         }

         pp::CompletionCallbackFactory<MyClass> factory_;
       };

**Passing additional parameters to your callback**

As a convenience, the `CompletionCallbackFactory` can optionally create a closure with up to three bound parameters that it will pass to your callback function. This can be useful for passing information about the request to your callback function, which is especially useful if your class has multiple asynchronous callbacks pending.

For the above example, of opening a file, let's say you want to keep some description associated with your request, you might implement your OpenFile and DidOpen callback as follows:

       void OpenFile(const pp::FileRef& file) {
         std::string message = "Opening file!";
         pp::CompletionCallback cc = factory_.NewCallback(&MyClass::DidOpen,
                                                          message);
         int32_t rv = file_io_.Open(file, PP_FileOpenFlag_Read, cc);
         CHECK(rv == PP_OK_COMPLETIONPENDING);
       }
       void DidOpen(int32_t result, const std::string& message) {
         // "message" will be "Opening file!".
         ...
       }

**Optional versus required callbacks**

When you create an "optional" callback, the browser may return the results synchronously if they are available. This can allow for higher performance in some cases if data is available quickly (for example, for network loads where there may be a lot of data coming quickly). In this case, the callback will never be run.

When creating a new callback with the factory, there will be data allocated on the heap that tracks the callback information and any bound arguments. This data is freed when the callback executes. In the case of optional callbacks, since the browser will never issue the callback, the internal tracking data will be leaked.

Therefore, if you use optional callbacks, it's important to manually issue the callback to free up this data. The typical pattern is:

       pp::CompletionCallback callback = callback_factory.NewOptionalCallback(
           &MyClass::OnDataReady);
       int32_t result = interface->GetData(callback);
       if (result != PP_OK_COMPLETIONPENDING)
          callback.Run(result);

Because of this additional complexity, it's generally recommended that you not use optional callbacks except when performance is more important (such as loading large resources from the network). In most other cases, the performance difference will not be worth the additional complexity, and most functions may never actually have the ability to complete synchronously.

**Completion callbacks with output**

For some API calls, the browser returns data to the caller via an output parameter. These can be difficult to manage since the output parameter must remain valid for as long as the callback is pending. Note also that CancelAll (or destroying the callback factory) does _not_ cancel the callback from the browser's perspective, only the execution of the callback in the plugin code, and the output parameter will still be written to! This means that you can't use class members as output parameters without risking crashes.

To make this case easier, the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a> can allocate and manage the output data for you and pass it to your callback function. This makes such calls more natural and less error-prone.

To create such a callback, use NewCallbackWithOutput and specify a callback function that takes the output parameter as its second argument. Let's say you're calling a function GetFile which asynchronously returns a <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_file_ref/" class="el" title="The FileRef class represents a &quot;weak pointer&quot; to a file in a file system.">pp::FileRef</a>. GetFile's signature will be `int32_t GetFile(const CompletionCallbackWithOutput<pp::FileRef>& callback);` and your calling code would look like this:

       void RequestFile() {
         file_interface->GetFile(callback_factory_.NewCallbackWithOutput(
             &MyClass::GotFile));
       }
       void GotFile(int32_t result, const pp::FileRef& file) {
         if (result == PP_OK) {
           ...use file...
         } else {
           ...handle error...
         }
       }

As with regular completion callbacks, you can optionally add up to three bound arguments. These are passed following the output argument.

Your callback may take the output argument as a copy (common for small types like integers, a const reference (common for structures and resources to avoid an extra copy), or as a non-const reference. One optimization you can do if your callback function may take large arrays is to accept your output argument as a non-const reference and to swap() the argument with a vector of your own to store it. This means you don't have to copy the buffer to consume it.

---

## Constructor & Destructor Documentation

<span id="ab870c8d37638facb949a86226c5138dc" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">CompletionCallbackFactory</a></td><td>(</td><td>T * </td><td><em>object</em> = <code>NULL</code></td><td>)</td><td><code> [inline, explicit]</code></td></tr></tbody></table>

This constructor creates a `CompletionCallbackFactory` bound to an object.

If the constructor is called without an argument, the default value of `NULL` is used. The user then must call <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a6289f165e3ce15a07061f8be411e186c" class="el" title="Initialize() binds the CallbackFactory to a particular object.">Initialize()</a> to initialize the object.

param\[in\] object Optional parameter. An object whose member functions are to be bound to CompletionCallbacks created by this `CompletionCallbackFactory`. The default value of this parameter is `NULL`.

<span id="a8341b9bfa1660d5f3f38d2530a0a9d42" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::~<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">CompletionCallbackFactory</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Destructor.

---

## Member Function Documentation

<span id="ad43328a7d8c19233e3fa0b762f357088" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ad43328a7d8c19233e3fa0b762f357088" class="el">CancelAll</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ad43328a7d8c19233e3fa0b762f357088" class="el" title="CancelAll() cancels all CompletionCallbacks allocated from this factory.">CancelAll()</a> cancels all `CompletionCallbacks` allocated from this factory.

<span id="a5cd104c9185333647e1a752860ca0336" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

<table><tbody><tr class="odd"><td>T* <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a5cd104c9185333647e1a752860ca0336" class="el">GetObject</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a5cd104c9185333647e1a752860ca0336" class="el" title="GetObject() returns the object that was passed at initialization to Intialize().">GetObject()</a> returns the object that was passed at initialization to Intialize().

**Returns:**  
the object passed to the constructor or Intialize().

<span id="a6289f165e3ce15a07061f8be411e186c" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a6289f165e3ce15a07061f8be411e186c" class="el">Initialize</a></td><td>(</td><td>T * </td><td><em>object</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a6289f165e3ce15a07061f8be411e186c" class="el" title="Initialize() binds the CallbackFactory to a particular object.">Initialize()</a> binds the `CallbackFactory` to a particular object.

Use this when the object is not available at `CallbackFactory` creation, and the `NULL` default is passed to the constructor. The object may only be initialized once, either by the constructor, or by a call to <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a6289f165e3ce15a07061f8be411e186c" class="el" title="Initialize() binds the CallbackFactory to a particular object.">Initialize()</a>.

This class may not be used on any thread until initialization is complete.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>object</td><td>The object whose member functions are to be bound to the <code>CompletionCallback</code> created by this <code>CompletionCallbackFactory</code>.</td></tr></tbody></table>

<span id="ab25d7ebdcdcd28f06ab767fdbbd4868f" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el">NewCallback</a></td><td>(</td><td>Method </td><td><em>method</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

NewCallback allocates a new, single-use `CompletionCallback`.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="aaa341cc4aa04c12dfe58a4452467b225" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method , typename A &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el">NewCallback</a></td><td>(</td><td>Method </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el" title="NewCallback allocates a new, single-use CompletionCallback.">NewCallback()</a> allocates a new, single-use `CompletionCallback`.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation. Method should be of type: <code>void (T::*)(int32_t result, const A&amp; a)</code></td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a3d32cb2060a1da7ce73e8657c94f15fa" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method , typename A , typename B &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el">NewCallback</a></td><td>(</td><td>Method </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em>,</td></tr><tr class="odd"><td></td><td></td><td>const B &amp; </td><td><em>b</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el" title="NewCallback allocates a new, single-use CompletionCallback.">NewCallback()</a> allocates a new, single-use `CompletionCallback`.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td></td><td>method</td><td>The method taking the callback. Method should be of type: <code>void (T::*)(int32_t result, const A&amp; a, const B&amp; b)</code></td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="odd"><td>[in]</td><td>b</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a4110e491c1358c951903ef1b0fecf58d" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method , typename A , typename B , typename C &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el">NewCallback</a></td><td>(</td><td>Method </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em>,</td></tr><tr class="odd"><td></td><td></td><td>const B &amp; </td><td><em>b</em>,</td></tr><tr class="even"><td></td><td></td><td>const C &amp; </td><td><em>c</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#ab25d7ebdcdcd28f06ab767fdbbd4868f" class="el" title="NewCallback allocates a new, single-use CompletionCallback.">NewCallback()</a> allocates a new, single-use `CompletionCallback`.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td></td><td>method</td><td>The method taking the callback. Method should be of type: <code> void (T::*)(int32_t result, const A&amp; a, const B&amp; b, const C&amp; c) </code></td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="odd"><td>[in]</td><td>b</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="even"><td>[in]</td><td>c</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a8c550ff8d18548ba962af29309880eeb" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Output &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; typename <a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>&lt;Output&gt;::StorageType&gt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el">NewCallbackWithOutput</a></td><td>(</td><td>void(T::*)(int32_t, Output) </td><td><em>method</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el" title="NewCallbackWithOutput() allocates a new, single-use CompletionCallback where the browser will pass an...">NewCallbackWithOutput()</a> allocates a new, single-use `CompletionCallback` where the browser will pass an additional parameter containing the result of the request.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a85f3416759e1d7297025f5a0fb037fd9" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Output , typename A &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; typename <a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>&lt;Output&gt;::StorageType&gt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el">NewCallbackWithOutput</a></td><td>(</td><td>void(T::*)(int32_t, Output, A) </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el" title="NewCallbackWithOutput() allocates a new, single-use CompletionCallback where the browser will pass an...">NewCallbackWithOutput()</a> allocates a new, single-use `CompletionCallback` where the browser will pass an additional parameter containing the result of the request.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation.</td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a5f1288cad38fa17aa1f07f5793908e24" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Output , typename A , typename B &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; typename <a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>&lt;Output&gt;::StorageType&gt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el">NewCallbackWithOutput</a></td><td>(</td><td>void(T::*)(int32_t, Output, A, B) </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em>,</td></tr><tr class="odd"><td></td><td></td><td>const B &amp; </td><td><em>b</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el" title="NewCallbackWithOutput() allocates a new, single-use CompletionCallback where the browser will pass an...">NewCallbackWithOutput()</a> allocates a new, single-use `CompletionCallback` where the browser will pass an additional parameter containing the result of the request.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation.</td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="odd"><td>[in]</td><td>b</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a3653f981f4decf82d697e46a6d21519f" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Output , typename A , typename B , typename C &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; typename <a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">internal::TypeUnwrapper</a>&lt;Output&gt;::StorageType&gt; <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el">NewCallbackWithOutput</a></td><td>(</td><td>void(T::*)(int32_t, Output, A, B, C) </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em>,</td></tr><tr class="odd"><td></td><td></td><td>const B &amp; </td><td><em>b</em>,</td></tr><tr class="even"><td></td><td></td><td>const C &amp; </td><td><em>c</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#a8c550ff8d18548ba962af29309880eeb" class="el" title="NewCallbackWithOutput() allocates a new, single-use CompletionCallback where the browser will pass an...">NewCallbackWithOutput()</a> allocates a new, single-use `CompletionCallback` where the browser will pass an additional parameter containing the result of the request.

The `CompletionCallback` must be run in order for the memory allocated by the methods to be freed.

**Parameters:**

<table><tbody><tr class="odd"><td></td><td>method</td><td>The method to be run.</td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="odd"><td>[in]</td><td>b</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="even"><td>[in]</td><td>c</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="adacce232874e0d5ab52ffa4bd8af9ef7" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el">NewOptionalCallback</a></td><td>(</td><td>Method </td><td><em>method</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el" title="NewOptionalCallback() allocates a new, single-use CompletionCallback that might not run if the method...">NewOptionalCallback()</a> allocates a new, single-use `CompletionCallback` that might not run if the method taking it can complete synchronously.

Thus, if after passing the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a> to a Pepper method, the method does not return PP_OK_COMPLETIONPENDING, then you should manually call the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a>'s Run method, or memory will be leaked.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="a221758746a8b10563148990cf63d085d" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method , typename A &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el">NewOptionalCallback</a></td><td>(</td><td>Method </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el" title="NewOptionalCallback() allocates a new, single-use CompletionCallback that might not run if the method...">NewOptionalCallback()</a> allocates a new, single-use `CompletionCallback` that might not run if the method taking it can complete synchronously.

Thus, if after passing the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a> to a Pepper method, the method does not return PP_OK_COMPLETIONPENDING, then you should manually call the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a>'s Run method, or memory will be leaked.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method to be invoked upon completion of the operation. Method should be of type: <code>void (T::*)(int32_t result, const A&amp; a)</code></td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="abe32b7e60edc4699de46dc8640e90bcb" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method , typename A , typename B &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el">NewOptionalCallback</a></td><td>(</td><td>Method </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em>,</td></tr><tr class="odd"><td></td><td></td><td>const B &amp; </td><td><em>b</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el" title="NewOptionalCallback() allocates a new, single-use CompletionCallback that might not run if the method...">NewOptionalCallback()</a> allocates a new, single-use `CompletionCallback` that might not run if the method taking it can complete synchronously.

Thus, if after passing the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a> to a Pepper method, the method does not return PP_OK_COMPLETIONPENDING, then you should manually call the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a>'s Run method, or memory will be leaked.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method taking the callback. Method should be of type: <code>void (T::*)(int32_t result, const A&amp; a, const B&amp; b)</code></td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="odd"><td>[in]</td><td>b</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

<span id="aaa7f305418d469d8be2ec801dd0bfeda" class="anchor" style="margin: 0;"></span>

template&lt;typename T , typename ThreadTraits = ThreadSafeThreadTraits&gt;

template&lt;typename Method , typename A , typename B , typename C &gt;

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory</a>&lt; T, ThreadTraits &gt;::<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el">NewOptionalCallback</a></td><td>(</td><td>Method </td><td><em>method</em>,</td></tr><tr class="even"><td></td><td></td><td>const A &amp; </td><td><em>a</em>,</td></tr><tr class="odd"><td></td><td></td><td>const B &amp; </td><td><em>b</em>,</td></tr><tr class="even"><td></td><td></td><td>const C &amp; </td><td><em>c</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [inline]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#adacce232874e0d5ab52ffa4bd8af9ef7" class="el" title="NewOptionalCallback() allocates a new, single-use CompletionCallback that might not run if the method...">NewOptionalCallback()</a> allocates a new, single-use `CompletionCallback` that might not run if the method taking it can complete synchronously.

Thus, if after passing the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a> to a Pepper method, the method does not return PP_OK_COMPLETIONPENDING, then you should manually call the <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a>'s Run method, or memory will be leaked.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>method</td><td>The method taking the callback. Method should be of type: <code> void (T::*)(int32_t result, const A&amp; a, const B&amp; b, const C&amp; c) </code></td></tr><tr class="even"><td>[in]</td><td>a</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="odd"><td>[in]</td><td>b</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr><tr class="even"><td>[in]</td><td>c</td><td>Passed to <code>method</code> when the completion callback runs.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `CompletionCallback`.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/completion__callback__factory_8h/" class="el">completion_callback_factory.h</a>
