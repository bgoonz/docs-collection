---json {"title":"pp::MouseLock Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#a2c304f04bbcca852cfff575595de291f" class="el">MouseLock</a> (<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance/" class="el">Instance</a> *instance)</td></tr><tr class="even"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#a2ac121eb177f22d69c46066d979e06a8" class="el">~MouseLock</a> ()</td></tr><tr class="odd"><td style="text-align: right;">virtual void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#a325767b75e132ae0c1ca7d4776f5d05c" class="el">MouseLockLost</a> ()=0</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#ad17ce49daa092ec8ec6ca56aebf5b2cc" class="el">LockMouse</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#ad896ad4a23395cc6735930437bfb92e6" class="el">UnlockMouse</a> ()</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This class allows you to associate the `PPP_MouseLock` and `PPB_MouseLock` C-based interfaces with an object.

It associates itself with the given instance, and registers as the global handler for handling the `PPP_MouseLock` interface that the browser calls.

You would typically use this class by inheritance on your instance or by composition.

**Example (inheritance):**

       class MyInstance : public pp::Instance, public pp::MouseLock {
         class MyInstance() : pp::MouseLock(this) {
         }
         ...
       };

**Example (composition):**

       class MyMouseLock : public pp::MouseLock {
         ...
       };

       class MyInstance : public pp::Instance {
         MyInstance() : mouse_lock_(this) {
         }

         MyMouseLock mouse_lock_;
       };

---

## Constructor & Destructor Documentation

<span id="a2c304f04bbcca852cfff575595de291f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#a2c304f04bbcca852cfff575595de291f" class="el">pp::MouseLock::MouseLock</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance/" class="el">Instance</a> * </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor for creating a `MouseLock`.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a2ac121eb177f22d69c46066d979e06a8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#a2ac121eb177f22d69c46066d979e06a8" class="el">pp::MouseLock::~MouseLock</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

Destructor.

---

## Member Function Documentation

<span id="ad17ce49daa092ec8ec6ca56aebf5b2cc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#ad17ce49daa092ec8ec6ca56aebf5b2cc" class="el">pp::MouseLock::LockMouse</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#ad17ce49daa092ec8ec6ca56aebf5b2cc" class="el" title="LockMouse() requests the mouse to be locked.">LockMouse()</a> requests the mouse to be locked.

While the mouse is locked, the cursor is implicitly hidden from the user. Any movement of the mouse will generate a `PP_INPUTEVENT_TYPE_MOUSEMOVE` event. The `GetPosition()` function in `InputEvent()` reports the last known mouse position just as mouse lock was entered. The `GetMovement()` function provides relative movement information indicating what the change in position of the mouse would be had it not been locked.

The browser may revoke the mouse lock for reasons including (but not limited to) the user pressing the ESC key, the user activating another program using a reserved keystroke (e.g. ALT+TAB), or some other system event.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32_t containing an error code from `pp_errors.h`.

<span id="a325767b75e132ae0c1ca7d4776f5d05c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#a325767b75e132ae0c1ca7d4776f5d05c" class="el">pp::MouseLock::MouseLockLost</a></td><td>(</td><td></td><td>)</td><td><code> [pure virtual]</code></td></tr></tbody></table>

PPP_MouseLock functions exposed as virtual functions for you to override.

<span id="ad896ad4a23395cc6735930437bfb92e6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_mouse_lock#ad896ad4a23395cc6735930437bfb92e6" class="el">pp::MouseLock::UnlockMouse</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

UnlockMouse causes the mouse to be unlocked, allowing it to track user movement again.

This is an asynchronous operation. The module instance will be notified using the `PPP_MouseLock` interface when it has lost the mouse lock.

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/mouse__lock_8h/" class="el">mouse_lock.h</a>
