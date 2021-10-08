---json {"title":"pp::Var::OutException Class Reference"} ---

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception-members/)

## Public Member Functions

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#afa4be8888c046a7b4f54be2cec82e4e7" class="el">OutException</a> (<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> *v)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#af2300053414367146b49f6f71c2eb513" class="el">~OutException</a> ()</td></tr><tr class="odd"><td style="text-align: right;">PP_Var * </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#ae27bafd88243e3b2fffc3038a1f31971" class="el">get</a> ()</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This class is used when calling the raw C PPAPI when using the C++ `Var` as a possible NULL exception.

This class will handle getting the address of the internal value out if it's non-NULL and fixing up the reference count.

**Warning:** this will only work for things with exception semantics, i.e. that the value will not be changed if it's a non-undefined exception. Otherwise, this class will mess up the refcounting.

This is a bit subtle:

- If NULL is passed, we return NULL from <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#ae27bafd88243e3b2fffc3038a1f31971" class="el">get()</a> and do nothing.

<!-- -->

- If a undefined value is passed, we return the address of a undefined var from get and have the output value take ownership of that var.

<!-- -->

- If a non-undefined value is passed, we return the address of that var from get, and nothing else should change.

Example: void FooBar(a, b, Var\* exception = NULL) { foo_interface-&gt;Bar(a, b, Var::OutException(exception).<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#ae27bafd88243e3b2fffc3038a1f31971" class="el">get()</a>); }

---

## Constructor & Destructor Documentation

<span id="afa4be8888c046a7b4f54be2cec82e4e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#afa4be8888c046a7b4f54be2cec82e4e7" class="el">pp::Var::OutException::OutException</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var/" class="el">Var</a> * </td><td><em>v</em></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

A constructor.

<span id="af2300053414367146b49f6f71c2eb513" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#af2300053414367146b49f6f71c2eb513" class="el">pp::Var::OutException::~OutException</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Destructor.

---

## Member Function Documentation

<span id="ae27bafd88243e3b2fffc3038a1f31971" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_Var* <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_var_1_1_out_exception#ae27bafd88243e3b2fffc3038a1f31971" class="el">pp::Var::OutException::get</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

---

The documentation for this class was generated from the following file:

- <a href="/docs/native-client/pepper_beta/cpp/var_8h/" class="el">var.h</a>
