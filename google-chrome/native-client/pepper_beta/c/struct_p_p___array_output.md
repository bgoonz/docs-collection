—json {“title”:“PP\_ArrayOutput Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_beta/c/group___typedefs#gaa363de651fad7342a37ec58375276af7" class="el">PP_ArrayOutput_GetDataBuffer</a> </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output#acfd88c0475e6518cc9ed058c85744c58" class="el">GetDataBuffer</a></td></tr><tr class="even"><td style="text-align: right;">void * </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output#a6323083ee2b06f902c9c334c6b10a6d0" class="el">user_data</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

A structure that defines a way for the browser to return arrays of data to the plugin.

The browser can not allocate memory on behalf of the plugin because the plugin and browser may have different allocators.

Array output works by having the browser call to the plugin to allocate a buffer, and then the browser will copy the contents of the array into that buffer.

In C, you would typically implement this as follows:

     struct MyArrayOutput {
       void* data;
       int element_count;
     };
     void* MyGetDataBuffer(void* user_data, uint32_t count, uint32_t size) {
       MyArrayOutput* output = (MyArrayOutput*)user_data;
       output->element_count = count;
       if (size) {
         output->data = malloc(count * size);
         if (!output->data)  // Be careful to set size properly on malloc failure.
           output->element_count = 0;
       } else {
         output->data = NULL;
       }
       return output->data;
     }
     void MyFunction() {
       MyArrayOutput array = { NULL, 0 };
       PP_ArrayOutput output = { &MyGetDataBuffer, &array };
       ppb_foo->GetData(&output);
     }

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="acfd88c0475e6518cc9ed058c85744c58" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gaa363de651fad7342a37ec58375276af7" class="el">PP_ArrayOutput_GetDataBuffer</a> <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output#acfd88c0475e6518cc9ed058c85744c58" class="el">PP_ArrayOutput::GetDataBuffer</a></td></tr></tbody></table>

A pointer to the allocation function that the browser will call.

<span id="a6323083ee2b06f902c9c334c6b10a6d0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void* <a href="/docs/native-client/pepper_beta/c/struct_p_p___array_output#a6323083ee2b06f902c9c334c6b10a6d0" class="el">PP_ArrayOutput::user_data</a></td></tr></tbody></table>

Data that is passed to the allocation function.

Typically, this is used to communicate how the data should be stored.

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/pp__array__output_8h/" class="el">pp_array_output.h</a>
