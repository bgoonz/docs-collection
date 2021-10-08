—json {“title”:“pp\_array\_output.h File Reference”} —

Include dependency graph for pp\_array\_output.h:

![](/docs/native-client/pepper_beta/c/pp__array__output_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el">PP_ArrayOutput</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>A structure that defines a way for the browser to return arrays of data to the plugin. <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output#details">More…</a><br />
</td></tr></tbody></table>

Typedefs
--------

<table><tbody><tr class="odd"><td style="text-align: right;">typedef void <em>(</em> </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gaa363de651fad7342a37ec58375276af7" class="el">PP_ArrayOutput_GetDataBuffer</a> )(void *user_data, uint32_t element_count, uint32_t element_size)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

PP\_ArrayOutput\_GetDataBuffer is a callback function to allocate plugin memory for an array.

It returns the allocated memory or null on failure.

This function will be called reentrantly. This means that if you call a function PPB\_Foo.GetData(&array\_output), GetData will call your GetDataBuffer function before it returns.

This function will be called even when returning 0-length arrays, so be sure your implementation can support that. You can return NULL for 0 length arrays and it will not be treated as a failure.

You should not perform any processing in this callback, including calling other PPAPI functions, outside of allocating memory. You should not throw any exceptions. In C++, this means using “new (nothrow)” or being sure to catch any exceptions before returning.

The C++ wrapper provides a convenient templatized implementation around std::vector which you should generally use instead of coding this specifically.

**Parameters:**  

<table><tbody><tr class="odd"><td>user_data</td><td>The pointer provided in the <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output/" class="el" title="A structure that defines a way for the browser to return arrays of data to the plugin.">PP_ArrayOutput</a> structure. This has no meaning to the browser, it is intended to be used by the implementation to figure out where to put the data.</td></tr><tr class="even"><td>element_count</td><td>The number of elements in the array. This will be 0 if there is no data to return.</td></tr><tr class="odd"><td>element_size</td><td>The size of each element in bytes.</td></tr></tbody></table>

**Returns:**  
Returns a pointer to the allocated memory. On failure, returns null. You can also return null if the element\_count is 0. When a non-null value is returned, the buffer must remain valid until after the callback runs. If used with a blocking callback, the buffer must remain valid until after the function returns. The plugin can then free any memory that it allocated.
