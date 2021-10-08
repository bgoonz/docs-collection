---json {"title":"pp::Module Class Reference"} ---

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_module-members/)

Public Types
------------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef std::map&lt; PP_Instance,<br />
<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance/" class="el">Instance</a> * &gt; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a47cd6188f0321e74b71126a5fd014b12" class="el">InstanceMap</a></td></tr></tbody></table>

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a67b76ad37316a2e89ebd2902a6503686" class="el">Module</a> ()</td></tr><tr class="even"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ac3c912841726117a128d2e056f15210e" class="el">~Module</a> ()</td></tr><tr class="odd"><td style="text-align: right;">virtual bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a873a824f0e462008d1167e34544ad360" class="el">Init</a> ()</td></tr><tr class="even"><td style="text-align: right;">PP_Module </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a95bb3148c925f46938ee0f267b1c66e5" class="el">pp_module</a> () const</td></tr><tr class="odd"><td style="text-align: right;">PPB_GetInterface </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8955edbfec01524388338b440633850a" class="el">get_browser_interface</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_core/" class="el">Core</a> * </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#afd1d02002faaa6a4531ad06ca0423c9f" class="el">core</a> ()</td></tr><tr class="odd"><td style="text-align: right;">const void * </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8c8c946f741e140ff7dd21b36b1a42a5" class="el">GetPluginInterface</a> (const char *interface_name)</td></tr><tr class="even"><td style="text-align: right;">const void * </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a2aece372fdef35ded56d69a4e881a376" class="el">GetBrowserInterface</a> (const char *interface_name)</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance/" class="el">Instance</a> * </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ab57a787b61cd72fdcea0d232ed88eaef" class="el">InstanceForPPInstance</a> (PP_Instance instance)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#aeddc6021140b4bdea3a83c36e7b8ec7e" class="el">AddPluginInterface</a> (const std::string &amp;interface_name, const void *vtable)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#acd9a63a4b364c28abfeac39687f2fa1a" class="el">InternalInit</a> (PP_Module mod, PPB_GetInterface <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8955edbfec01524388338b440633850a" class="el">get_browser_interface</a>)</td></tr><tr class="even"><td style="text-align: right;">const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a47cd6188f0321e74b71126a5fd014b12" class="el">InstanceMap</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a3b9ec2c079aa51ceeedfe98f4c9e1a98" class="el">current_instances</a> () const</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module/" class="el">Module</a> * </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ac8cca5d744e812ec3221bc391086b026" class="el">Get</a> ()</td></tr></tbody></table>

Protected Member Functions
--------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">virtual <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance/" class="el">Instance</a> * </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a648f236af50501bac40ce40296611825" class="el">CreateInstance</a> (PP_Instance instance)=0</td></tr></tbody></table>

Friends
-------

<table><tbody><tr class="odd"><td style="text-align: right;">PP_Bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ab0f2ba24fd03fa31fc2e47d4f8ceb158" class="el">Instance_DidCreate</a> (PP_Instance pp_instance, uint32_t argc, const char *argn[], const char *argv[])</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#accf4ce5410f02db9c87dcca045043128" class="el">Instance_DidDestroy</a> (PP_Instance instance)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module/" class="el" title="The Module class.">Module</a> class.

The browser calls <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a648f236af50501bac40ce40296611825" class="el" title="CreateInstance() should be overridden to create your own module type.">CreateInstance()</a> to create an instance of your module on the web page. The browser creates a new instance for each `<embed>` tag with `type="application/x-nacl"`

------------------------------------------------------------------------

Member Typedef Documentation
----------------------------

<span id="a47cd6188f0321e74b71126a5fd014b12" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef std::map&lt;PP_Instance, <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance/" class="el">Instance</a>*&gt; <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a47cd6188f0321e74b71126a5fd014b12" class="el">pp::Module::InstanceMap</a></td></tr></tbody></table>

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a67b76ad37316a2e89ebd2902a6503686" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a67b76ad37316a2e89ebd2902a6503686" class="el">pp::Module::Module</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<span id="ac3c912841726117a128d2e056f15210e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ac3c912841726117a128d2e056f15210e" class="el">pp::Module::~Module</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="aeddc6021140b4bdea3a83c36e7b8ec7e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#aeddc6021140b4bdea3a83c36e7b8ec7e" class="el">pp::Module::AddPluginInterface</a></td><td>(</td><td>const std::string &amp; </td><td><em>interface_name</em>,</td></tr><tr class="even"><td></td><td></td><td>const void * </td><td><em>vtable</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#aeddc6021140b4bdea3a83c36e7b8ec7e" class="el" title="AddPluginInterface() adds a handler for a provided interface name.">AddPluginInterface()</a> adds a handler for a provided interface name.

When the browser requests that interface name, the provided `vtable` will be returned.

In general, modules will not need to call this directly. Instead, the C++ wrappers for each interface will register themselves with this function.

This function may be called more than once with the same interface name and vtable with no effect. However, it may not be used to register a different vtable for an already-registered interface. It will assert for a different registration for an already-registered interface in debug mode, and just ignore the registration in release mode.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>interface_name</td><td>The interface name that will receive a handler.</td></tr><tr class="even"><td>[in,out]</td><td>vtable</td><td>The vtable to return for <code>interface_name</code>.</td></tr></tbody></table>

<span id="afd1d02002faaa6a4531ad06ca0423c9f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_core/" class="el">Core</a>* <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#afd1d02002faaa6a4531ad06ca0423c9f" class="el">pp::Module::core</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#afd1d02002faaa6a4531ad06ca0423c9f" class="el" title="The core() function returns the core interface for doing basic global operations.">core()</a> function returns the core interface for doing basic global operations.

The return value is guaranteed to be non-NULL once the module has successfully initialized and during the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a873a824f0e462008d1167e34544ad360" class="el" title="Init() is automatically called after the object is created.">Init()</a> call.

It will be NULL before <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a873a824f0e462008d1167e34544ad360" class="el" title="Init() is automatically called after the object is created.">Init()</a> has been called.

**Returns:**  
The core interface for doing basic global operations.

<span id="a648f236af50501bac40ce40296611825" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance/" class="el">Instance</a>* <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a648f236af50501bac40ce40296611825" class="el">pp::Module::CreateInstance</a></td><td>(</td><td>PP_Instance </td><td><em>instance</em></td><td>)</td><td><code> [protected, pure virtual]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a648f236af50501bac40ce40296611825" class="el" title="CreateInstance() should be overridden to create your own module type.">CreateInstance()</a> should be overridden to create your own module type.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The resulting instance.

<span id="a3b9ec2c079aa51ceeedfe98f4c9e1a98" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a47cd6188f0321e74b71126a5fd014b12" class="el">InstanceMap</a>&amp; <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a3b9ec2c079aa51ceeedfe98f4c9e1a98" class="el">pp::Module::current_instances</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a3b9ec2c079aa51ceeedfe98f4c9e1a98" class="el" title="The current_instances() function allows iteration over the current instances in the module...">current_instances()</a> function allows iteration over the current instances in the module.

**Returns:**  
An `InstanceMap` of all instances in the module.

<span id="ac8cca5d744e812ec3221bc391086b026" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module/" class="el">Module</a>* <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ac8cca5d744e812ec3221bc391086b026" class="el">pp::Module::Get</a></td><td>(</td><td></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ac8cca5d744e812ec3221bc391086b026" class="el" title="Get() returns the global instance of this module object, or NULL if the module is not initialized yet...">Get()</a> returns the global instance of this module object, or NULL if the module is not initialized yet.

**Returns:**  
The global instance of the module object.

<span id="a8955edbfec01524388338b440633850a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PPB_GetInterface <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8955edbfec01524388338b440633850a" class="el">pp::Module::get_browser_interface</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8955edbfec01524388338b440633850a" class="el" title="The get_browser_interface() function returns the internal get_browser_interface pointer.">get_browser_interface()</a> function returns the internal `get_browser_interface` pointer.

**Returns:**  
A `PPB_GetInterface` internal pointer.

<span id="a2aece372fdef35ded56d69a4e881a376" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const void* <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a2aece372fdef35ded56d69a4e881a376" class="el">pp::Module::GetBrowserInterface</a></td><td>(</td><td>const char * </td><td><em>interface_name</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a2aece372fdef35ded56d69a4e881a376" class="el" title="GetBrowserInterface() returns interfaces which the browser implements (i.e.">GetBrowserInterface()</a> returns interfaces which the browser implements (i.e.

PPB interfaces).

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>interface_name</td><td>The browser interface for the module to get.</td></tr></tbody></table>

<span id="a8c8c946f741e140ff7dd21b36b1a42a5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const void* <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8c8c946f741e140ff7dd21b36b1a42a5" class="el">pp::Module::GetPluginInterface</a></td><td>(</td><td>const char * </td><td><em>interface_name</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a8c8c946f741e140ff7dd21b36b1a42a5" class="el" title="GetPluginInterface() implements GetInterface for the browser to get module interfaces.">GetPluginInterface()</a> implements `GetInterface` for the browser to get module interfaces.

If you need to provide your own implementations of new interfaces, use <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#aeddc6021140b4bdea3a83c36e7b8ec7e" class="el" title="AddPluginInterface() adds a handler for a provided interface name.">AddPluginInterface()</a> which this function will use.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>interface_name</td><td>The module interface for the browser to get.</td></tr></tbody></table>

<span id="a873a824f0e462008d1167e34544ad360" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a873a824f0e462008d1167e34544ad360" class="el">pp::Module::Init</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a873a824f0e462008d1167e34544ad360" class="el" title="Init() is automatically called after the object is created.">Init()</a> is automatically called after the object is created.

This is where you can put functions that rely on other parts of the API, now that the module has been created.

**Returns:**  
true if successful, otherwise false.

<span id="ab57a787b61cd72fdcea0d232ed88eaef" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance/" class="el">Instance</a>* <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ab57a787b61cd72fdcea0d232ed88eaef" class="el">pp::Module::InstanceForPPInstance</a></td><td>(</td><td>PP_Instance </td><td><em>instance</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ab57a787b61cd72fdcea0d232ed88eaef" class="el" title="InstanceForPPInstance() returns the object associated with this PP_Instance, or NULL if one is not fo...">InstanceForPPInstance()</a> returns the object associated with this `PP_Instance`, or NULL if one is not found.

This should only be called from the main thread! This instance object may be destroyed at any time on the main thread, so using it on other threads may cause a crash.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>This <code>PP_Instance</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The object associated with this `PP_Instance`, or NULL if one is not found.

<span id="acd9a63a4b364c28abfeac39687f2fa1a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#acd9a63a4b364c28abfeac39687f2fa1a" class="el">pp::Module::InternalInit</a></td><td>(</td><td>PP_Module </td><td><em>mod</em>,</td></tr><tr class="even"><td></td><td></td><td>PPB_GetInterface </td><td><em>get_browser_interface</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

function that can be overridden by the base classes.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>mod</td><td>A <code>PP_Module</code>.</td></tr><tr class="even"><td>[in]</td><td>get_browser_interface</td><td>The browser interface to set.</td></tr></tbody></table>

<!-- -->

**Returns:**  
true if successful, otherwise false.

<span id="a95bb3148c925f46938ee0f267b1c66e5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Module <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a95bb3148c925f46938ee0f267b1c66e5" class="el">pp::Module::pp_module</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#a95bb3148c925f46938ee0f267b1c66e5" class="el" title="The pp_module() function returns the internal module handle.">pp_module()</a> function returns the internal module handle.

**Returns:**  
A `PP_Module` internal module handle.

------------------------------------------------------------------------

Friends And Related Function Documentation
------------------------------------------

<span id="ab0f2ba24fd03fa31fc2e47d4f8ceb158" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#ab0f2ba24fd03fa31fc2e47d4f8ceb158" class="el">Instance_DidCreate</a></td><td>(</td><td>PP_Instance </td><td><em>pp_instance</em>,</td></tr><tr class="even"><td></td><td></td><td>uint32_t </td><td><em>argc</em>,</td></tr><tr class="odd"><td></td><td></td><td>const char * </td><td><em>argn</em>[],</td></tr><tr class="even"><td></td><td></td><td>const char * </td><td><em>argv</em>[] </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [friend]</code></td></tr></tbody></table>

<span id="accf4ce5410f02db9c87dcca045043128" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_module#accf4ce5410f02db9c87dcca045043128" class="el">Instance_DidDestroy</a></td><td>(</td><td>PP_Instance </td><td><em>instance</em></td><td>)</td><td><code> [friend]</code></td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/module_8h/" class="el">module.h</a>
