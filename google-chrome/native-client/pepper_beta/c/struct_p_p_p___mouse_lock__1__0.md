---json {"title":"PPP\_MouseLock Struct Reference"} ---

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___mouse_lock__1__0#abbc863bf2e6b2e608bdbde3d9229debf" class="el">MouseLockLost</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPP_MouseLock` interface contains a function that you must implement to receive mouse lock events from the browser.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="abbc863bf2e6b2e608bdbde3d9229debf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___mouse_lock__1__0#abbc863bf2e6b2e608bdbde3d9229debf" class="el">PPP_MouseLock::MouseLockLost</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_p___mouse_lock__1__0#abbc863bf2e6b2e608bdbde3d9229debf" class="el" title="MouseLockLost() is called when the instance loses the mouse lock, such as when the user presses the E...">MouseLockLost()</a> is called when the instance loses the mouse lock, such as when the user presses the ESC key.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppp__mouse__lock_8h/" class="el">ppp_mouse_lock.h</a>
