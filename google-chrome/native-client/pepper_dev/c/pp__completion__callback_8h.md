---json {"title":"pp\_completion\_callback.h File Reference"} ---

Include dependency graph for pp\_completion\_callback.h:

![](/docs/native-client/pepper_dev/c/pp__completion__callback_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td><code>PP_CompletionCallback</code> is a common mechanism for supporting potentially asynchronous calls in browser interfaces. <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback#details">More...</a><br />
</td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef void(* </td><td><a href="/docs/native-client/pepper_dev/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> )(void *user_data, int32_t result)</td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga7610f0fba2396d46384859caa4d91798" class="el">PP_CompletionCallback_Flag</a> { <a href="/docs/native-client/pepper_dev/c/group___enums#gga7610f0fba2396d46384859caa4d91798a6eedc0f315784a4cb47c5806b828c7cc" class="el">PP_COMPLETIONCALLBACK_FLAG_NONE</a> = 0 &lt;&lt; 0, <a href="/docs/native-client/pepper_dev/c/group___enums#gga7610f0fba2396d46384859caa4d91798aebb176d8930b14219b7966fd93a2e967" class="el">PP_COMPLETIONCALLBACK_FLAG_OPTIONAL</a> = 1 &lt;&lt; 0 }</td></tr></tbody></table>

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> </td><td><a href="/docs/native-client/pepper_dev/c/group___functions#ga8691f15edad9b391c3644064ac57f191" class="el">PP_MakeCompletionCallback</a> (<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> func, void *user_data)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> </td><td><a href="/docs/native-client/pepper_dev/c/group___functions#gabd6bf83f4c787477631c37d44418c4db" class="el">PP_MakeOptionalCompletionCallback</a> (<a href="/docs/native-client/pepper_dev/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> func, void *user_data)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/c/group___functions#gaffce49266a735f9ee8d149b14477404f" class="el">PP_RunCompletionCallback</a> (struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> *cc, int32_t result)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> </td><td><a href="/docs/native-client/pepper_dev/c/group___functions#ga340e452b4931d17bd44928769490e282" class="el">PP_BlockUntilComplete</a> (void)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/c/group___functions#ga8dac45aa496bbb1f97a15e2833d3ed02" class="el">PP_RunAndClearCompletionCallback</a> (struct <a href="/docs/native-client/pepper_dev/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> *cc, int32_t res)</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/c/group___enums#ga7610f0fba2396d46384859caa4d91798" class="el">PP_CompletionCallback_Flag</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the API to create and run a callback.
