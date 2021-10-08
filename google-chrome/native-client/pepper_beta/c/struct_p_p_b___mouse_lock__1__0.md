—json {“title”:“PPB\_MouseLock Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___mouse_lock__1__0#ac137bc2d66abfa39428ea67236c85401" class="el">LockMouse</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___mouse_lock__1__0#a1b9ab648a3638b469be6235d4c76d634" class="el">UnlockMouse</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPB_MouseLock` interface is implemented by the browser.

This interface provides a way of locking the target of mouse events to a single module instance and removing the cursor from view. This mode is useful for certain classes of applications, especially first-person perspective 3D applications and 3D modeling software.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="ac137bc2d66abfa39428ea67236c85401" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___mouse_lock__1__0#ac137bc2d66abfa39428ea67236c85401" class="el">PPB_MouseLock::LockMouse</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> callback)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___mouse_lock__1__0#ac137bc2d66abfa39428ea67236c85401" class="el" title="LockMouse() requests the mouse to be locked.">LockMouse()</a> requests the mouse to be locked.

While the mouse is locked, the cursor is implicitly hidden from the user. Any movement of the mouse will generate a `PP_INPUTEVENT_TYPE_MOUSEMOVE` event. The `GetPosition()` function in the `PPB_MouseInputEvent` interface reports the last known mouse position just as mouse lock was entered. The `GetMovement()` function provides relative movement information indicating what the change in position of the mouse would be had it not been locked.

The browser may revoke the mouse lock for reasons including (but not limited to) the user pressing the ESC key, the user activating another program using a reserved keystroke (e.g. ALT+TAB), or some other system event.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a1b9ab648a3638b469be6235d4c76d634" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___mouse_lock__1__0#a1b9ab648a3638b469be6235d4c76d634" class="el">PPB_MouseLock::UnlockMouse</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_b___mouse_lock__1__0#a1b9ab648a3638b469be6235d4c76d634" class="el" title="UnlockMouse() causes the mouse to be unlocked, allowing it to track user movement again...">UnlockMouse()</a> causes the mouse to be unlocked, allowing it to track user movement again.

This is an asynchronous operation. The module instance will be notified using the `PPP_MouseLock` interface when it has lost the mouse lock.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr></tbody></table>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppb__mouse__lock_8h/" class="el">ppb_mouse_lock.h</a>
