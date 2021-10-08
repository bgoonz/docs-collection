—json {“title”:“logging.h File Reference”} —

Include dependency graph for logging.h:

![](/docs/native-client/pepper_beta/cpp/logging_8h__incl.png)

Defines
-------

<table><tbody><tr class="odd"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/cpp/logging_8h#a5cb259e0fd1a8c0c64fbc891bc273417" class="el">PP_DCHECK</a>(a)   assert(a)</td></tr><tr class="even"><td style="text-align: right;">#define </td><td><a href="/docs/native-client/pepper_beta/cpp/logging_8h#a1c536418e751c9bda850cd2bc919e0ca" class="el">PP_NOTREACHED</a>()   assert(false)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines two macro asserts.

------------------------------------------------------------------------

Define Documentation
--------------------

<span id="a5cb259e0fd1a8c0c64fbc891bc273417" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/cpp/logging_8h#a5cb259e0fd1a8c0c64fbc891bc273417" class="el">PP_DCHECK</a></td><td>(</td><td> </td><td>a</td><td>)</td><td>   assert(a)</td></tr></tbody></table>

This macro asserts that ‘a’ evaluates to true.

In debug mode, this macro will crash the program if the assertion evaluates to false. It (typically) has no effect in release mode.

<span id="a1c536418e751c9bda850cd2bc919e0ca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>#define <a href="/docs/native-client/pepper_beta/cpp/logging_8h#a1c536418e751c9bda850cd2bc919e0ca" class="el">PP_NOTREACHED</a></td><td>(</td><td></td><td>)</td><td>   assert(false)</td></tr></tbody></table>

This macro asserts false in debug builds.

It’s used in code paths that you don’t expect to execute.

**Example:**

     if (!pointer) {
     // Pointer wasn't valid! This shouldn't happen.
     PP_NOTREACHED();
     return;
     }
     // Do stuff to the pointer, since you know it's valid.
     pointer->DoSomething();
