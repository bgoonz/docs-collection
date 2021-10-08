—json {“title”:“pp::InstanceHandle Class Reference”} —

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#aa9e22c3dc382054c2f3dd816396348dc" class="el">InstanceHandle</a> (<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance/" class="el">Instance</a> *instance)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#a9f001cc657a9b9b9307dfa5b20d31856" class="el">InstanceHandle</a> (PP_Instance <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#ac413eef4320841121cae58be977d1f7d" class="el">pp_instance</a>)</td></tr><tr class="odd"><td style="text-align: right;">PP_Instance </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#ac413eef4320841121cae58be977d1f7d" class="el">pp_instance</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

An instance handle identifies an instance in a constructor for a resource.

This class solves two different problems:

1.  A <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance/" class="el">pp::Instance</a> object’s lifetime is managed by the system on the main pepper thread of the module. This means that it may get destroyed at any time based on something that happens on the web page. Therefore, it’s not safe to refer to a `pp::Instance` object on a background thread. Instead, we need to pass some kind of identifier to resource constructors so that they may safely be used on background threads. If the instance becomes invalid, the resource creation will fail on the background thread, but it won’t crash.

2.  `PP_Instance` would be a good identifier to use for this case. However, using `PP_Instance` in the constructor to resources is problematic because it is just a typedef for an integer, as is a `PP_Resource`. Many resources have alternate constructors that just take an existing `PP_Resource`, so the constructors would be ambiguous. Having this wrapper around a `PP_Instance` prevents this ambiguity, and also provides a nice place to consolidate an implicit conversion from `pp::Instance*` for prettier code on the main thread (you can just pass “this” to resource constructors in your instance objects).

You should always pass an `InstanceHandle` to background threads instead of a `pp::Instance`, and use them in resource constructors and code that may be used from background threads.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="aa9e22c3dc382054c2f3dd816396348dc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#aa9e22c3dc382054c2f3dd816396348dc" class="el">pp::InstanceHandle::InstanceHandle</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance/" class="el">Instance</a> * </td><td><em>instance</em></td><td>)</td><td></td></tr></tbody></table>

Implicit constructor for converting a `pp::Instance` to an instance handle.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this <code>InstanceHandle</code> will be associated.</td></tr></tbody></table>

<span id="a9f001cc657a9b9b9307dfa5b20d31856" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#aa9e22c3dc382054c2f3dd816396348dc" class="el">pp::InstanceHandle::InstanceHandle</a></td><td>(</td><td>PP_Instance </td><td><em>pp_instance</em></td><td>)</td><td><code> [inline, explicit]</code></td></tr></tbody></table>

This constructor explicitly converts a `PP_Instance` to an instance handle.

This should not be implicit because it can make some resource constructors ambiguous. `PP_Instance` is just a typedef for an integer, as is `PP_Resource`, so the compiler can get confused between the two.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>pp_instance</td><td>The instance with which this <code>InstanceHandle</code> will be associated.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="ac413eef4320841121cae58be977d1f7d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Instance <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#ac413eef4320841121cae58be977d1f7d" class="el">pp::InstanceHandle::pp_instance</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle#ac413eef4320841121cae58be977d1f7d" class="el" title="The pp_instance() function returns the PP_Instance.">pp_instance()</a> function returns the `PP_Instance`.

**Returns:**  
A `PP_Instance` internal instance handle.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/instance__handle_8h/" class="el">instance_handle.h</a>
