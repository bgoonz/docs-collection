---json {"title":"pp::FileIO Class Reference"} ---

Inheritance diagram for pp::FileIO:

![Inheritance graph](/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_dev/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o-members/)

Classes
-------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><strong>CallbackData1_0</strong></td></tr></tbody></table>

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a67b9da7adaadcb58c7429aa1984f757e" class="el">FileIO</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a7c3f17d75a139e92b2cdc52d8f2f5fd0" class="el">FileIO</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a7bc6f391da690a381874111e350692f0" class="el">FileIO</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el">FileIO</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#adafce7733e27fc3bf12cdb7833927bae" class="el">Open</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp;file_ref, int32_t open_flags, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a0e1cb3e0e2f1cd73c0d5a08a20e60fab" class="el">Query</a> (PP_FileInfo *result_buf, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a30766070559c1b719784ebc4f8d369f4" class="el">Touch</a> (PP_Time last_access_time, PP_Time last_modified_time, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el">Read</a> (int64_t offset, char *buffer, int32_t bytes_to_read, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a809ad6c8aa27f647c044c7053a84867a" class="el">Read</a> (int32_t offset, int32_t max_read_length, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; std::vector&lt; char &gt; &gt; &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9ef23f569178ce6a53536fb27d459bcf" class="el">Write</a> (int64_t offset, const char *buffer, int32_t bytes_to_write, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a49014400d013c27b9950368f54974935" class="el">SetLength</a> (int64_t length, const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a074d9c13b5825b378c343e5dd890d789" class="el">Flush</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a5f08c15cc2b23548b2e401c55102d709" class="el">Close</a> ()</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `FileIO` class represents a regular file.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a67b9da7adaadcb58c7429aa1984f757e" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a67b9da7adaadcb58c7429aa1984f757e" class="el">pp::FileIO::FileIO</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> `FileIO` object.

<span id="a7c3f17d75a139e92b2cdc52d8f2f5fd0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a67b9da7adaadcb58c7429aa1984f757e" class="el">pp::FileIO::FileIO</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor used to create a `FileIO` and associate it with the provided `Instance`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a7bc6f391da690a381874111e350692f0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a67b9da7adaadcb58c7429aa1984f757e" class="el">pp::FileIO::FileIO</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el">FileIO</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `FileIO`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>FileIO</code>.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a5f08c15cc2b23548b2e401c55102d709" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a5f08c15cc2b23548b2e401c55102d709" class="el">pp::FileIO::Close</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a5f08c15cc2b23548b2e401c55102d709" class="el" title="Close() cancels any IO that may be pending, and closes the FileIO object.">Close()</a> cancels any IO that may be pending, and closes the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object.

Any pending callbacks will still run, reporting `PP_ERROR_ABORTED` if pending IO was interrupted. It is not valid to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#adafce7733e27fc3bf12cdb7833927bae" class="el" title="Open() opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP_FileOpenFlags values.">Open()</a> again after a call to this method.

**Note:** If the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object is destroyed, and it is still open, then it will be implicitly closed, so you are not required to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a5f08c15cc2b23548b2e401c55102d709" class="el" title="Close() cancels any IO that may be pending, and closes the FileIO object.">Close()</a>.

<span id="a074d9c13b5825b378c343e5dd890d789" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a074d9c13b5825b378c343e5dd890d789" class="el">pp::FileIO::Flush</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a074d9c13b5825b378c343e5dd890d789" class="el" title="Flush() flushes changes to disk.">Flush()</a> flushes changes to disk.

This call can be very expensive!

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a074d9c13b5825b378c343e5dd890d789" class="el" title="Flush() flushes changes to disk.">Flush()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="adafce7733e27fc3bf12cdb7833927bae" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#adafce7733e27fc3bf12cdb7833927bae" class="el">pp::FileIO::Open</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> &amp; </td><td><em>file_ref</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>open_flags</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#adafce7733e27fc3bf12cdb7833927bae" class="el" title="Open() opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP_FileOpenFlags values.">Open()</a> opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP\_FileOpenFlags values.

Upon success, the corresponding file is classified as "in use" by this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object until such time as the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object is closed or destroyed.

**Parameters:**  
<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><tbody><tr class="odd"><td>[in]</td><td>file_ref</td><td>A <code>PP_Resource</code> corresponding to a file reference.</td></tr><tr class="even"><td>[in]</td><td>open_flags</td><td>A bit-mask of the <code>PP_FileOpenFlags</code> values. Valid values are:<ul><li>PP_FILEOPENFLAG_READ</li><li>PP_FILEOPENFLAG_WRITE</li><li>PP_FILEOPENFLAG_CREATE</li><li>PP_FILEOPENFLAG_TRUNCATE</li><li>PP_FILEOPENFLAG_EXCLUSIVE See <code>PP_FileOpenFlags</code> in <code>ppb_file_io.h</code> for more details on these flags.</li></ul></td></tr><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#adafce7733e27fc3bf12cdb7833927bae" class="el" title="Open() opens the specified regular file for I/O according to the given open flags, which is a bit-mask of the PP_FileOpenFlags values.">Open()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a0e1cb3e0e2f1cd73c0d5a08a20e60fab" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a0e1cb3e0e2f1cd73c0d5a08a20e60fab" class="el">pp::FileIO::Query</a></td><td>(</td><td>PP_FileInfo * </td><td><em>result_buf</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a0e1cb3e0e2f1cd73c0d5a08a20e60fab" class="el" title="Query() queries info about the file opened by this FileIO object.">Query()</a> queries info about the file opened by this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object.

This function will fail if the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object has not been opened.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>result_buf</td><td>The <code>PP_FileInfo</code> structure representing all information about the file.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a0e1cb3e0e2f1cd73c0d5a08a20e60fab" class="el" title="Query() queries info about the file opened by this FileIO object.">Query()</a>. <code>result_buf</code> must remain valid until after the callback runs. If you pass a blocking callback, <code>result_buf</code> must remain valid until after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a0e1cb3e0e2f1cd73c0d5a08a20e60fab" class="el" title="Query() queries info about the file opened by this FileIO object.">Query()</a> returns.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a9e4576a9a5c946b4aa971daca526e457" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el">pp::FileIO::Read</a></td><td>(</td><td>int64_t </td><td><em>offset</em>,</td></tr><tr class="even"><td></td><td></td><td>char * </td><td><em>buffer</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>bytes_to_read</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

Reads from an offset in the file.

The size of the buffer must be large enough to hold the specified number of bytes to read. This function might perform a partial read, meaning that all the requested bytes might not be returned, even if the end of the file has not been reached.

This function reads into a buffer that the caller supplies. This buffer must remain valid as long as the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> resource is alive. If you use a completion callback factory and it goes out of scope, it will not issue the callback on your class, BUT the callback factory can NOT cancel the request from the browser's perspective. This means that the browser will still try to write to your buffer even if the callback factory is destroyed!

So you must ensure that your buffer outlives the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> resource. If you have one class and use the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> resource exclusively from that class and never make any copies, this will be fine: the resource will be destroyed when your class is. But keep in mind that copying a <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">pp::FileIO</a> object just creates a second reference to the original resource. For example, if you have a function like this: <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">pp::FileIO</a> MyClass::GetFileIO(); where a copy of your <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> resource could outlive your class, the callback will still be pending when your class goes out of scope, creating the possibility of writing into invalid memory. So it's recommended to keep your <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> resource and any output buffers tightly controlled in the same scope.

**Caveat:** This <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a> is potentially unsafe if you're using a <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback_factory/" class="el" title="CompletionCallbackFactory&lt;T&gt; may be used to create CompletionCallback objects that are bound to membe...">CompletionCallbackFactory</a> to scope callbacks to the lifetime of your class. When your class goes out of scope, the callback factory will not actually cancel the callback, but will rather just skip issuing the callback on your class. This means that if the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object outlives your class (if you made a copy saved somewhere else, for example), then the browser will still try to write into your buffer when the asynchronous read completes, potentially causing a crash.

See the other version of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a> which avoids this problem by writing into <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback_with_output/" class="el" title="A CompletionCallbackWithOutput defines a completion callback that additionally stores a pointer to so...">CompletionCallbackWithOutput</a>, where the output buffer is automatically managed by the callback.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>offset</td><td>The offset into the file.</td></tr><tr class="even"><td>[in]</td><td>buffer</td><td>The buffer to hold the specified number of bytes read.</td></tr><tr class="odd"><td>[in]</td><td>bytes_to_read</td><td>The number of bytes to read from <code>offset</code>.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a>. <code>buffer</code> must remain valid until after the callback runs. If you pass a blocking callback, <code>buffer</code> must remain valid until after <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a> returns.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An The number of bytes read an error code from `pp_errors.h`. If the return value is 0, then end-of-file was reached. It is valid to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a> multiple times with a completion callback to queue up parallel reads from the file at different offsets.

<span id="a809ad6c8aa27f647c044c7053a84867a" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el">pp::FileIO::Read</a></td><td>(</td><td>int32_t </td><td><em>offset</em>,</td></tr><tr class="even"><td></td><td></td><td>int32_t </td><td><em>max_read_length</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback_with_output/" class="el">CompletionCallbackWithOutput</a>&lt; std::vector&lt; char &gt; &gt; &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a> reads from an offset in the file.

A PP\_ArrayOutput must be provided so that output will be stored in its allocated buffer. This function might perform a partial read.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>file_io</td><td>A <code>PP_Resource</code> corresponding to a file <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a>.</td></tr><tr class="even"><td>[in]</td><td>offset</td><td>The offset into the file.</td></tr><tr class="odd"><td>[in]</td><td>max_read_length</td><td>The maximum number of bytes to read from <code>offset</code>.</td></tr><tr class="even"><td>[in]</td><td>output</td><td>A <code>PP_ArrayOutput</code> to hold the output data.</td></tr><tr class="odd"><td>[in]</td><td>callback</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
The number of bytes read or an error code from `pp_errors.h`. If the return value is 0, then end-of-file was reached. It is valid to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9e4576a9a5c946b4aa971daca526e457" class="el" title="Reads from an offset in the file.">Read()</a> multiple times with a completion callback to queue up parallel reads from the file, but pending reads cannot be interleaved with other operations.

<span id="a49014400d013c27b9950368f54974935" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a49014400d013c27b9950368f54974935" class="el">pp::FileIO::SetLength</a></td><td>(</td><td>int64_t </td><td><em>length</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a49014400d013c27b9950368f54974935" class="el" title="SetLength() sets the length of the file.">SetLength()</a> sets the length of the file.

If the file size is extended, then the extended area of the file is zero-filled. The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object must have been opened with write access.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>length</td><td>The length of the file to be set.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a49014400d013c27b9950368f54974935" class="el" title="SetLength() sets the length of the file.">SetLength()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a30766070559c1b719784ebc4f8d369f4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a30766070559c1b719784ebc4f8d369f4" class="el">pp::FileIO::Touch</a></td><td>(</td><td>PP_Time </td><td><em>last_access_time</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_Time </td><td><em>last_modified_time</em>,</td></tr><tr class="odd"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="even"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a30766070559c1b719784ebc4f8d369f4" class="el" title="Touch() Updates time stamps for the file opened by this FileIO object.">Touch()</a> Updates time stamps for the file opened by this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object.

This function will fail if the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object has not been opened.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>last_access_time</td><td>The last time the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> was accessed.</td></tr><tr class="even"><td>[in]</td><td>last_modified_time</td><td>The last time the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> was modified.</td></tr><tr class="odd"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a30766070559c1b719784ebc4f8d369f4" class="el" title="Touch() Updates time stamps for the file opened by this FileIO object.">Touch()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

<span id="a9ef23f569178ce6a53536fb27d459bcf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9ef23f569178ce6a53536fb27d459bcf" class="el">pp::FileIO::Write</a></td><td>(</td><td>int64_t </td><td><em>offset</em>,</td></tr><tr class="even"><td></td><td></td><td>const char * </td><td><em>buffer</em>,</td></tr><tr class="odd"><td></td><td></td><td>int32_t </td><td><em>bytes_to_write</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9ef23f569178ce6a53536fb27d459bcf" class="el" title="Write() writes to an offset in the file.">Write()</a> writes to an offset in the file.

This function might perform a partial write. The <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o/" class="el" title="The FileIO class represents a regular file.">FileIO</a> object must have been opened with write access.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>offset</td><td>The offset into the file.</td></tr><tr class="even"><td>[in]</td><td>buffer</td><td>The buffer to hold the specified number of bytes read.</td></tr><tr class="odd"><td>[in]</td><td>bytes_to_write</td><td>The number of bytes to write to <code>offset</code>.</td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9ef23f569178ce6a53536fb27d459bcf" class="el" title="Write() writes to an offset in the file.">Write()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An The number of bytes written or an error code from `pp_errors.h`. If the return value is 0, then end-of-file was reached. It is valid to call <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_i_o#a9ef23f569178ce6a53536fb27d459bcf" class="el" title="Write() writes to an offset in the file.">Write()</a> multiple times with a completion callback to queue up parallel writes to the file at different offsets.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/file__io_8h/" class="el">file_io.h</a>
