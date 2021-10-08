---json {"title":"Functions"} ---

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga8691f15edad9b391c3644064ac57f191" class="el">PP_MakeCompletionCallback</a> (<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> func, void *user_data)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gabd6bf83f4c787477631c37d44418c4db" class="el">PP_MakeOptionalCompletionCallback</a> (<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> func, void *user_data)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gaffce49266a735f9ee8d149b14477404f" class="el">PP_RunCompletionCallback</a> (struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> *cc, int32_t result)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga340e452b4931d17bd44928769490e282" class="el">PP_BlockUntilComplete</a> (void)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga8dac45aa496bbb1f97a15e2833d3ed02" class="el">PP_RunAndClearCompletionCallback</a> (struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> *cc, int32_t res)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga15880e8085178758053cc521af33b250" class="el">PP_MakePoint</a> (int32_t x, int32_t y)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga0aca79088546fe91d13c97db9033e709" class="el">PP_MakeFloatPoint</a> (float x, float y)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gaf868e2929269ef195241b79a015fcf61" class="el">PP_MakeRectFromXYWH</a> (int32_t x, int32_t y, int32_t w, int32_t h)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_rect/" class="el">PP_FloatRect</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga0d58c0f7ab657c5cdd92afe7b5da0fce" class="el">PP_MakeFloatRectFromXYWH</a> (float x, float y, float w, float h)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga35a97e64d18402d8feff46722b98beb0" class="el">PP_MakeSize</a> (int32_t w, int32_t h)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_size/" class="el">PP_FloatSize</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gaa45701f5b00be4d57637165ae9382251" class="el">PP_MakeFloatSize</a> (float w, float h)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gae7f6d41cbb173c12f474242c2a3bf5e7" class="el">PP_MakeTouchPoint</a> (void)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga0edc8314fc1a92f93dd3d0eab286cb5d" class="el">PP_MakeUndefined</a> (void)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga75f83ac65ccbf57866d52d45cd5792e7" class="el">PP_MakeNull</a> (void)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga0fba11ae90d57086064d41b0af710253" class="el">PP_MakeBool</a> (<a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> value)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gad14a59fa681d4cc532b3d49c0438f0ca" class="el">PP_MakeInt32</a> (int32_t value)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gafbebaae212cb7e737efc56eea0e785b5" class="el">PP_MakeDouble</a> (double value)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga2fc7b396531c19417d8d7171d56da8b6" class="el">PPP_InitializeModule</a> (<a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a> module, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> get_browser_interface)</td></tr><tr class="odd"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gaa3021aba7ddc17a8cecb4bc4f8374e98" class="el">PPP_ShutdownModule</a> (void)</td></tr><tr class="even"><td style="text-align: right;">const void * </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga4127b148b2bd0f3bc2c078dd38cbe4cf" class="el">PPP_GetInterface</a> (const char *interface_name)</td></tr></tbody></table>

------------------------------------------------------------------------

Function Documentation
----------------------

<span id="ga340e452b4931d17bd44928769490e282" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga340e452b4931d17bd44928769490e282" class="el">PP_BlockUntilComplete</a></td><td>(</td><td>void </td><td></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga340e452b4931d17bd44928769490e282" class="el" title="PP_BlockUntilComplete() is used in place of an actual completion callback to request blocking behavio...">PP_BlockUntilComplete()</a> is used in place of an actual completion callback to request blocking behavior.

If specified, the calling thread will block until the function completes. Blocking completion callbacks are only allowed from background threads.

**Returns:**  
A `PP_CompletionCallback` structure.

<span id="ga0fba11ae90d57086064d41b0af710253" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga0fba11ae90d57086064d41b0af710253" class="el">PP_MakeBool</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> </td><td><em>value</em></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga0fba11ae90d57086064d41b0af710253" class="el" title="PP_MakeBool() is used to wrap a boolean value into a PP_Var struct for passing to the browser...">PP_MakeBool()</a> is used to wrap a boolean value into a `PP_Var` struct for passing to the browser.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>value</td><td>A <code>PP_Bool</code> enumeration to wrap.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` structure.

<span id="ga8691f15edad9b391c3644064ac57f191" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga8691f15edad9b391c3644064ac57f191" class="el">PP_MakeCompletionCallback</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> </td><td><em>func</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga8691f15edad9b391c3644064ac57f191" class="el" title="PP_MakeCompletionCallback() is used to create a PP_CompletionCallback.">PP_MakeCompletionCallback()</a> is used to create a `PP_CompletionCallback`.

**Example, creating a Required callback:**

     struct PP_CompletionCallback cc = PP_MakeCompletionCallback(Foo, NULL);

**Example, creating an Optional callback:**

     struct PP_CompletionCallback cc = PP_MakeCompletionCallback(Foo, NULL);
     cc.flags = cc.flags | PP_COMPLETIONCALLBACK_FLAG_OPTIONAL;

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>func</td><td>A <code>PP_CompletionCallback_Func</code> that will be called.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>A pointer to user data passed to your callback function. This is optional and is typically used to help track state when you may have multiple callbacks pending.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_CompletionCallback` structure.

<span id="gafbebaae212cb7e737efc56eea0e785b5" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> <a href="/docs/native-client/pepper_beta/c/group___functions#gafbebaae212cb7e737efc56eea0e785b5" class="el">PP_MakeDouble</a></td><td>(</td><td>double </td><td><em>value</em></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gafbebaae212cb7e737efc56eea0e785b5" class="el" title="PP_MakeDouble() is used to wrap a double value into a PP_Var struct for passing to the browser...">PP_MakeDouble()</a> is used to wrap a double value into a `PP_Var` struct for passing to the browser.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>value</td><td>A double to wrap.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` structure.

<span id="ga0aca79088546fe91d13c97db9033e709" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_point/" class="el">PP_FloatPoint</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga0aca79088546fe91d13c97db9033e709" class="el">PP_MakeFloatPoint</a></td><td>(</td><td>float </td><td><em>x</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>y</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<span id="ga0d58c0f7ab657c5cdd92afe7b5da0fce" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_rect/" class="el">PP_FloatRect</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga0d58c0f7ab657c5cdd92afe7b5da0fce" class="el">PP_MakeFloatRectFromXYWH</a></td><td>(</td><td>float </td><td><em>x</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>y</em>,</td></tr><tr class="odd"><td></td><td></td><td>float </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga0d58c0f7ab657c5cdd92afe7b5da0fce" class="el" title="PP_MakeFloatRectFromXYWH() creates a PP_FloatRect given x and y coordinates and width and height dime...">PP_MakeFloatRectFromXYWH()</a> creates a `PP_FloatRect` given x and y coordinates and width and height dimensions as float values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>x</td><td>An float value representing a horizontal coordinate of a point, starting with 0 as the left-most coordinate.</td></tr><tr class="even"><td>[in]</td><td>y</td><td>An float value representing a vertical coordinate of a point, starting with 0 as the top-most coordinate.</td></tr><tr class="odd"><td>[in]</td><td>w</td><td>An float value representing a width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>An float value representing a height.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_FloatRect` structure.

<span id="gaa45701f5b00be4d57637165ae9382251" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___float_size/" class="el">PP_FloatSize</a> <a href="/docs/native-client/pepper_beta/c/group___functions#gaa45701f5b00be4d57637165ae9382251" class="el">PP_MakeFloatSize</a></td><td>(</td><td>float </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>float </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gaa45701f5b00be4d57637165ae9382251" class="el" title="PP_MakeFloatSize() creates a PP_FloatSize given a width and height as float values.">PP_MakeFloatSize()</a> creates a `PP_FloatSize` given a width and height as float values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>An float value representing a width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>An float value representing a height.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_FloatSize` structure.

<span id="gad14a59fa681d4cc532b3d49c0438f0ca" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> <a href="/docs/native-client/pepper_beta/c/group___functions#gad14a59fa681d4cc532b3d49c0438f0ca" class="el">PP_MakeInt32</a></td><td>(</td><td>int32_t </td><td><em>value</em></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gad14a59fa681d4cc532b3d49c0438f0ca" class="el" title="PP_MakeInt32() is used to wrap a 32 bit integer value into a PP_Var struct for passing to the browser...">PP_MakeInt32()</a> is used to wrap a 32 bit integer value into a `PP_Var` struct for passing to the browser.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>value</td><td>An int32 to wrap.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Var` structure.

<span id="ga75f83ac65ccbf57866d52d45cd5792e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga75f83ac65ccbf57866d52d45cd5792e7" class="el">PP_MakeNull</a></td><td>(</td><td>void </td><td></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga75f83ac65ccbf57866d52d45cd5792e7" class="el" title="PP_MakeNull() is used to wrap a null value into a PP_Var struct for passing to the browser...">PP_MakeNull()</a> is used to wrap a null value into a `PP_Var` struct for passing to the browser.

**Returns:**  
A `PP_Var` structure,

<span id="gabd6bf83f4c787477631c37d44418c4db" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> <a href="/docs/native-client/pepper_beta/c/group___functions#gabd6bf83f4c787477631c37d44418c4db" class="el">PP_MakeOptionalCompletionCallback</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> </td><td><em>func</em>,</td></tr><tr class="even"><td></td><td></td><td>void * </td><td><em>user_data</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gabd6bf83f4c787477631c37d44418c4db" class="el" title="PP_MakeOptionalCompletionCallback() is used to create a PP_CompletionCallback with PP_COMPLETIONCALLB...">PP_MakeOptionalCompletionCallback()</a> is used to create a <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el" title="PP_CompletionCallback is a common mechanism for supporting potentially asynchronous calls in browser ...">PP_CompletionCallback</a> with PP\_COMPLETIONCALLBACK\_FLAG\_OPTIONAL set.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>func</td><td>A PP_CompletionCallback_Func to be called on completion.</td></tr><tr class="even"><td>[in]</td><td>user_data</td><td>A pointer to user data passed to be passed to the callback function. This is optional and is typically used to help track state in case of multiple pending callbacks.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el" title="PP_CompletionCallback is a common mechanism for supporting potentially asynchronous calls in browser ...">PP_CompletionCallback</a> structure.

<span id="ga15880e8085178758053cc521af33b250" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___point/" class="el">PP_Point</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga15880e8085178758053cc521af33b250" class="el">PP_MakePoint</a></td><td>(</td><td>int32_t </td><td><em>x</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>y</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga15880e8085178758053cc521af33b250" class="el" title="PP_MakePoint() creates a PP_Point given the x and y coordinates as int32_t values.">PP_MakePoint()</a> creates a `PP_Point` given the x and y coordinates as int32\_t values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>x</td><td>An int32_t value representing a horizontal coordinate of a point, starting with 0 as the left-most coordinate.</td></tr><tr class="even"><td>[in]</td><td>y</td><td>An int32_t value representing a vertical coordinate of a point, starting with 0 as the top-most coordinate.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Point` structure.

<span id="gaf868e2929269ef195241b79a015fcf61" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___rect/" class="el">PP_Rect</a> <a href="/docs/native-client/pepper_beta/c/group___functions#gaf868e2929269ef195241b79a015fcf61" class="el">PP_MakeRectFromXYWH</a></td><td>(</td><td>int32_t </td><td><em>x</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>y</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gaf868e2929269ef195241b79a015fcf61" class="el" title="PP_MakeRectFromXYWH() creates a PP_Rect given x and y coordinates and width and height dimensions as ...">PP_MakeRectFromXYWH()</a> creates a `PP_Rect` given x and y coordinates and width and height dimensions as int32\_t values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>x</td><td>An int32_t value representing a horizontal coordinate of a point, starting with 0 as the left-most coordinate.</td></tr><tr class="even"><td>[in]</td><td>y</td><td>An int32_t value representing a vertical coordinate of a point, starting with 0 as the top-most coordinate.</td></tr><tr class="odd"><td>[in]</td><td>w</td><td>An int32_t value representing a width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>An int32_t value representing a height.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Rect` structure.

<span id="ga35a97e64d18402d8feff46722b98beb0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___size/" class="el">PP_Size</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga35a97e64d18402d8feff46722b98beb0" class="el">PP_MakeSize</a></td><td>(</td><td>int32_t </td><td><em>w</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>h</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga35a97e64d18402d8feff46722b98beb0" class="el" title="PP_MakeSize() creates a PP_Size given a width and height as int32_t values.">PP_MakeSize()</a> creates a `PP_Size` given a width and height as int32\_t values.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>w</td><td>An int32_t value representing a width.</td></tr><tr class="even"><td>[in]</td><td>h</td><td>An int32_t value representing a height.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `PP_Size` structure.

<span id="gae7f6d41cbb173c12f474242c2a3bf5e7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___touch_point/" class="el">PP_TouchPoint</a> <a href="/docs/native-client/pepper_beta/c/group___functions#gae7f6d41cbb173c12f474242c2a3bf5e7" class="el">PP_MakeTouchPoint</a></td><td>(</td><td>void </td><td></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gae7f6d41cbb173c12f474242c2a3bf5e7" class="el" title="PP_MakeTouchPoint() creates a PP_TouchPoint.">PP_MakeTouchPoint()</a> creates a `PP_TouchPoint`.

**Returns:**  
A `PP_TouchPoint` structure.

<span id="ga0edc8314fc1a92f93dd3d0eab286cb5d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> <a href="/docs/native-client/pepper_beta/c/group___functions#ga0edc8314fc1a92f93dd3d0eab286cb5d" class="el">PP_MakeUndefined</a></td><td>(</td><td>void </td><td></td><td>)</td><td><code> [read]</code></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga0edc8314fc1a92f93dd3d0eab286cb5d" class="el" title="PP_MakeUndefined() is used to wrap an undefined value into a PP_Var struct for passing to the browser...">PP_MakeUndefined()</a> is used to wrap an undefined value into a `PP_Var` struct for passing to the browser.

**Returns:**  
A `PP_Var` structure.

<span id="ga8dac45aa496bbb1f97a15e2833d3ed02" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/c/group___functions#ga8dac45aa496bbb1f97a15e2833d3ed02" class="el">PP_RunAndClearCompletionCallback</a></td><td>(</td><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> * </td><td><em>cc</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>res</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga8dac45aa496bbb1f97a15e2833d3ed02" class="el" title="PP_RunAndClearCompletionCallback() runs a callback and clears the reference to that callback...">PP_RunAndClearCompletionCallback()</a> runs a callback and clears the reference to that callback.

This function is used when the null-ness of a completion callback is used as a signal for whether a completion callback has been registered. In this case, after the execution of the callback, it should be cleared. However, this introduces a conflict if the completion callback wants to schedule more work that involves the same completion callback again (for example, when reading data from an URLLoader, one would typically queue up another read callback). As a result, this function clears the pointer before the provided callback is executed.

<span id="gaffce49266a735f9ee8d149b14477404f" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/c/group___functions#gaffce49266a735f9ee8d149b14477404f" class="el">PP_RunCompletionCallback</a></td><td>(</td><td>struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___completion_callback/" class="el">PP_CompletionCallback</a> * </td><td><em>cc</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>result</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gaffce49266a735f9ee8d149b14477404f" class="el" title="PP_RunCompletionCallback() is used to run a callback.">PP_RunCompletionCallback()</a> is used to run a callback.

It invokes the callback function passing it user data specified on creation and completion |result|.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A pointer to a <code>PP_CompletionCallback</code> that will be run.</td></tr><tr class="even"><td>[in]</td><td>result</td><td>The result of the operation. Non-positive values correspond to the error codes from <a href="/docs/native-client/pepper_beta/c/pp__errors_8h/" class="el" title="This file defines an enumeration of all PPAPI error codes.">pp_errors.h</a> (excluding PP_OK_COMPLETIONPENDING). Positive values indicate additional information such as bytes read.</td></tr></tbody></table>

<span id="ga4127b148b2bd0f3bc2c078dd38cbe4cf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>const void* <a href="/docs/native-client/pepper_beta/c/group___functions#ga4127b148b2bd0f3bc2c078dd38cbe4cf" class="el">PPP_GetInterface</a></td><td>(</td><td>const char * </td><td><em>interface_name</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga4127b148b2bd0f3bc2c078dd38cbe4cf" class="el" title="PPP_GetInterface() is called by the browser to query the module for interfaces it supports...">PPP_GetInterface()</a> is called by the browser to query the module for interfaces it supports.

Your module must implement the `PPP_Instance` interface or it will be unloaded. Other interfaces are optional.

This function is called from within browser code whenever an interface is needed. This means your plugin could be reentered via this function if you make a browser call and it needs an interface. Furthermore, you should not make any other browser calls from within your implementation to avoid reentering the browser.

As a result, your implementation of this should merely provide a lookup from the requested name to an interface pointer, via something like a big if/else block or a map, and not do any other work.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>interface_name</td><td>A pointer to a "PPP" (plugin) interface name. Interface names are null-terminated ASCII strings.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A pointer for the interface or `NULL` if the interface is not supported.

<span id="ga2fc7b396531c19417d8d7171d56da8b6" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_beta/c/group___functions#ga2fc7b396531c19417d8d7171d56da8b6" class="el">PPP_InitializeModule</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a> </td><td><em>module</em>,</td></tr><tr class="even"><td></td><td></td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> </td><td><em>get_browser_interface</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#ga2fc7b396531c19417d8d7171d56da8b6" class="el" title="PPP_InitializeModule() is the entry point for a module and is called by the browser when your module ...">PPP_InitializeModule()</a> is the entry point for a module and is called by the browser when your module loads.

Your code must implement this function.

Failure indicates to the browser that this module can not be used. In this case, the module will be unloaded and ShutdownModule will NOT be called.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>module</td><td>A handle to your module. Generally you should store this value since it will be required for other API calls.</td></tr><tr class="even"><td>[in]</td><td>get_browser_interface</td><td>A pointer to the function that you can use to query for browser interfaces. Generally you should store this value for future use.</td></tr></tbody></table>

<!-- -->

**Returns:**  
`PP_OK` on success. Any other value on failure.

<span id="gaa3021aba7ddc17a8cecb4bc4f8374e98" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_beta/c/group___functions#gaa3021aba7ddc17a8cecb4bc4f8374e98" class="el">PPP_ShutdownModule</a></td><td>(</td><td>void </td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/group___functions#gaa3021aba7ddc17a8cecb4bc4f8374e98" class="el" title="PPP_ShutdownModule() is sometimes called before the module is unloaded.">PPP_ShutdownModule()</a> is **sometimes** called before the module is unloaded.

It is not recommended that you implement this function.

There is no practical use of this function for third party modules. Its existence is because of some internal use cases inside Chrome.

Since your module runs in a separate process, there's no need to free allocated memory. There is also no need to free any resources since all of resources associated with an instance will be force-freed when that instance is deleted.

**Note:** This function will always be skipped on untrusted (Native Client) implementations. This function may be skipped on trusted implementations in certain circumstances when Chrome does "fast shutdown" of a web page.
