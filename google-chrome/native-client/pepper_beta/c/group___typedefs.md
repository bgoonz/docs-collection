---json {"title":"Typedefs"} ---

## Typedefs

<table><tbody><tr class="odd"><td style="text-align: right;">typedef void *(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gaa363de651fad7342a37ec58375276af7" class="el">PP_ArrayOutput_GetDataBuffer</a> )(void *user_data, uint32_t element_count, uint32_t element_size)</td></tr><tr class="even"><td style="text-align: right;">typedef void(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a> )(void *user_data, int32_t result)</td></tr><tr class="odd"><td style="text-align: right;">typedef int32_t </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a></td></tr><tr class="even"><td style="text-align: right;">typedef int32_t </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a></td></tr><tr class="odd"><td style="text-align: right;">typedef int32_t </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a></td></tr><tr class="even"><td style="text-align: right;">typedef double </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a></td></tr><tr class="odd"><td style="text-align: right;">typedef double </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a></td></tr><tr class="even"><td style="text-align: right;">typedef double </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a></td></tr><tr class="odd"><td style="text-align: right;">typedef const void *(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> )(const char *interface_name)</td></tr><tr class="even"><td style="text-align: right;">typedef void(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga2ec91970f3cb75769ce631b3b732803e" class="el">PPB_Audio_Callback</a> )(void *sample_buffer, uint32_t buffer_size_in_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> latency, void *user_data)</td></tr><tr class="odd"><td style="text-align: right;">typedef int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gae33224cdac15cf8596127fe7b5f08325" class="el">PP_InitializeModule_Func</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a> module, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> get_browser_interface)</td></tr><tr class="even"><td style="text-align: right;">typedef void(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gad2b49167bcbf6c2c895ffb1a61bc720c" class="el">PP_ShutdownModule_Func</a> )(void)</td></tr><tr class="odd"><td style="text-align: right;">typedef const void *(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga893cfdc559fdf7ae3004816357c3d7e9" class="el">PP_GetInterface_Func</a> )(const char *interface_name)</td></tr></tbody></table>

---

## Typedef Documentation

<span id="gaa363de651fad7342a37ec58375276af7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef void*(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#gaa363de651fad7342a37ec58375276af7" class="el">PP_ArrayOutput_GetDataBuffer</a>)(void *user_data, uint32_t element_count, uint32_t element_size)</td></tr></tbody></table>

<span id="ga6fe12e1a41df5e10103a811036d4d8d2" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef void(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga6fe12e1a41df5e10103a811036d4d8d2" class="el">PP_CompletionCallback_Func</a>)(void *user_data, int32_t result)</td></tr></tbody></table>

This typedef defines the signature that you implement to receive callbacks on asynchronous completion of an operation.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>user_data</td><td>A pointer to user data passed to a callback function.</td></tr><tr class="even"><td>[in]</td><td>result</td><td>If result is 0 (PP_OK), the operation succeeded. Negative values (other than -1 or PP_OK_COMPLETE) indicate error and are specified in <a href="/docs/native-client/pepper_beta/c/pp__errors_8h/" class="el" title="This file defines an enumeration of all PPAPI error codes.">pp_errors.h</a>. Positive values for result usually indicate success and have some operation-dependent meaning (such as bytes read).</td></tr></tbody></table>

<span id="ga893cfdc559fdf7ae3004816357c3d7e9" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef const void*(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga893cfdc559fdf7ae3004816357c3d7e9" class="el">PP_GetInterface_Func</a>)(const char *interface_name)</td></tr></tbody></table>

Defines the type of the `PPP_ShutdownModule` function.

<span id="gae33224cdac15cf8596127fe7b5f08325" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef int32_t(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#gae33224cdac15cf8596127fe7b5f08325" class="el">PP_InitializeModule_Func</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a> module, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> get_browser_interface)</td></tr></tbody></table>

Defines the type of the `PPP_InitializeModule` function.

<span id="ga89b662403e6a687bb914b80114c0d19d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a></td></tr></tbody></table>

The `PP_Instance` value uniquely identifies one instance of a module (.nexe/PP_Module).

There will be one module instance for every &lt;embed&gt; tag on a page.

This identifier is an opaque handle assigned by the browser to the module. It is guaranteed never to be 0, so a module can initialize it to 0 to indicate a "NULL handle."

<span id="gab780dd451cd7f51284cb752edd88f9a0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a></td></tr></tbody></table>

The PP_Module value uniquely identifies the module or .nexe.

This identifier is an opaque handle assigned by the browser to the module. It is guaranteed never to be 0, so a module can initialize it to 0 to indicate a "NULL handle."

<span id="gafdc3895ee80f4750d0d95ae1b677e9b7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gafdc3895ee80f4750d0d95ae1b677e9b7" class="el">PP_Resource</a></td></tr></tbody></table>

This typedef represents an opaque handle assigned by the browser to the resource.

The handle is guaranteed never to be 0 for a valid resource, so a module can initialize it to 0 to indicate a "NULL handle." Some interfaces may return a NULL resource to indicate failure.

While a Var represents something callable to JS or from the module to the DOM, a resource has no meaning or visibility outside of the module interface.

Resources are reference counted. Use `AddRefResource()` and `ReleaseResource()` in `ppb_core.h` to manage the reference count of a resource. The data will be automatically destroyed when the internal reference count reaches 0.

<span id="gad2b49167bcbf6c2c895ffb1a61bc720c" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef void(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#gad2b49167bcbf6c2c895ffb1a61bc720c" class="el">PP_ShutdownModule_Func</a>)(void)</td></tr></tbody></table>

Defines the type of the `PPP_ShutdownModule` function.

<span id="ga537b277d2116e42b6acfe9323d40e1a0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga537b277d2116e42b6acfe9323d40e1a0" class="el">PP_Time</a></td></tr></tbody></table>

The `PP_Time` type represents the "wall clock time" according to the browser and is defined as the number of seconds since the Epoch (00:00:00 UTC, January 1, 1970).

<span id="ga3962a5355895925a757f613567e422fa" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a></td></tr></tbody></table>

A `PP_TimeDelta` value represents a duration of time which is measured in seconds.

<span id="ga71cb1042cdeb38d7881b121f3b09ce94" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga71cb1042cdeb38d7881b121f3b09ce94" class="el">PP_TimeTicks</a></td></tr></tbody></table>

A `PP_TimeTicks` value represents time ticks which are measured in seconds and are used for indicating the time that certain messages were received.

In contrast to `PP_Time`, `PP_TimeTicks` does not correspond to any actual wall clock time and will not change discontinuously if the user changes their computer clock.

The units are in seconds, but are not measured relative to any particular epoch, so the most you can do is compare two values.

<span id="ga2ec91970f3cb75769ce631b3b732803e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef void(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga2ec91970f3cb75769ce631b3b732803e" class="el">PPB_Audio_Callback</a>)(void *sample_buffer, uint32_t buffer_size_in_bytes, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga3962a5355895925a757f613567e422fa" class="el">PP_TimeDelta</a> latency, void *user_data)</td></tr></tbody></table>

`PPB_Audio_Callback` defines the type of an audio callback function used to fill the audio buffer with data.

Please see the Create() function in the `PPB_Audio` interface for more details on this callback.

**Parameters:**

<table><tbody><tr class="odd"><td>[in]</td><td>sample_buffer</td><td>A buffer to fill with audio data.</td></tr><tr class="even"><td>[in]</td><td>buffer_size_in_bytes</td><td>The size of the buffer in bytes.</td></tr><tr class="odd"><td>[in]</td><td>latency</td><td>How long before the audio data is to be presented.</td></tr><tr class="even"><td></td><td>inout]</td><td>user_data An opaque pointer that was passed into <code>PPB_Audio.Create()</code>.</td></tr></tbody></table>

<span id="ga68ad7c927b86e0c29d890603edd33154" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>typedef const void*(* <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a>)(const char *interface_name)</td></tr></tbody></table>

This function pointer type defines the signature for the `PPB_GetInterface` function.

A generic `PPB_GetInterface` pointer is passed to `PPP_InitializedModule` when your module is loaded. You can use this pointer to request a pointer to a specific browser interface. Browser interface names are ASCII strings and are generally defined in the header file for the interface, such as `PPB_AUDIO_INTERFACE` found in `ppb.audio.h` or `PPB_GRAPHICS_2D_INTERFACE` in `ppb_graphics_2d.h`. Click [here](/docs/native-client/pepper_beta/c/globals_defs/ "macros") for a complete list of interface names.

This value will be NULL if the interface is not supported on the browser.
