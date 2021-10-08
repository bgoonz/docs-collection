---json {"title":"pp::FileSystem Class Reference"} ---

Inheritance diagram for pp::FileSystem:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#aaa3cca58df52c4a3c4daaf0e615a1168" class="el">FileSystem</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#a4d56e93917775b192558b55fe682acfd" class="el">FileSystem</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system/" class="el">FileSystem</a> &amp;other)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#a33ddc6114cd25d48727c300dccc8754d" class="el">FileSystem</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#af97b2860b7e99d2283cf556b4ca78c48" class="el">FileSystem</a> (<a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#a8e73239f076ec5897d49b2bf530fdfdc" class="el">FileSystem</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance, PP_FileSystemType type)</td></tr><tr class="even"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#ae1ca78fc88c2e2a507e9ab71d9352d54" class="el">Open</a> (int64_t expected_size, const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp;cc)</td></tr></tbody></table>

Static Public Member Functions
------------------------------

<table><tbody><tr class="odd"><td style="text-align: right;">static bool </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#ae48a32b67e78b1e2125270ec68fab29d" class="el">IsFileSystem</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp;resource)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `FileSystem` class identifies the file system type associated with a file.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="aaa3cca58df52c4a3c4daaf0e615a1168" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#aaa3cca58df52c4a3c4daaf0e615a1168" class="el">pp::FileSystem::FileSystem</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Constructs an <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource#a859068e34cdc2dc0b78754c255323aa9" class="el" title="This functions determines if this resource is invalid or uninitialized.">is_null()</a> filesystem resource.

If you use this constructor, you will have to assign it to a "real" <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system/" class="el" title="The FileSystem class identifies the file system type associated with a file.">FileSystem</a> object before you can use it.

<span id="a4d56e93917775b192558b55fe682acfd" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#aaa3cca58df52c4a3c4daaf0e615a1168" class="el">pp::FileSystem::FileSystem</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system/" class="el">FileSystem</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `FileSystem`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A reference to a <code>FileSystem</code>.</td></tr></tbody></table>

<span id="a33ddc6114cd25d48727c300dccc8754d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#aaa3cca58df52c4a3c4daaf0e615a1168" class="el">pp::FileSystem::FileSystem</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

Constructs a `FileSystem` from a `Resource`.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Resource</code> containing a file system.</td></tr></tbody></table>

<span id="af97b2860b7e99d2283cf556b4ca78c48" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#aaa3cca58df52c4a3c4daaf0e615a1168" class="el">pp::FileSystem::FileSystem</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a PP\_Resource as a return value that has already been reference counted.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A PP_Resource corresponding to a PPB_FileSystem.</td></tr></tbody></table>

<span id="a8e73239f076ec5897d49b2bf530fdfdc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#aaa3cca58df52c4a3c4daaf0e615a1168" class="el">pp::FileSystem::FileSystem</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em>,</td></tr><tr class="even"><td></td><td></td><td>PP_FileSystemType </td><td><em>type</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

This constructor creates a file system object of the given type.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr><tr class="even"><td>[in]</td><td>type</td><td>A file system type as defined by <code>PP_FileSystemType</code> enum.</td></tr></tbody></table>

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="ae48a32b67e78b1e2125270ec68fab29d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>static bool <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#ae48a32b67e78b1e2125270ec68fab29d" class="el">pp::FileSystem::IsFileSystem</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_resource/" class="el">Resource</a> &amp; </td><td><em>resource</em></td><td>)</td><td><code> [static]</code></td></tr></tbody></table>

Checks whether a `Resource` is a file system, to test whether it is appropriate for use with the `FileSystem` constructor.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>Resource</code> to test.</td></tr></tbody></table>

<!-- -->

**Returns:**  
True if `resource` is a file system.

<span id="ae1ca78fc88c2e2a507e9ab71d9352d54" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#ae1ca78fc88c2e2a507e9ab71d9352d54" class="el">pp::FileSystem::Open</a></td><td>(</td><td>int64_t </td><td><em>expected_size</em>,</td></tr><tr class="even"><td></td><td></td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_completion_callback/" class="el">CompletionCallback</a> &amp; </td><td><em>cc</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#ae1ca78fc88c2e2a507e9ab71d9352d54" class="el" title="Open() opens the file system.">Open()</a> opens the file system.

A file system must be opened before running any other operation on it.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>expected_size</td><td>The expected size of the file system. Note that this does not request quota; to do that, you must either invoke requestQuota from JavaScript: <a href="http://www.html5rocks.com/en/tutorials/file/filesystem/#toc-requesting-quota">http://www.html5rocks.com/en/tutorials/file/filesystem/#toc-requesting-quota</a> or set the unlimitedStorage permission for Chrome Web Store apps: <a href="http://code.google.com/chrome/extensions/manifest.html#permissions">http://code.google.com/chrome/extensions/manifest.html#permissions</a></td></tr><tr class="even"><td>[in]</td><td>cc</td><td>A <code>PP_CompletionCallback</code> to be called upon completion of <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_system#ae1ca78fc88c2e2a507e9ab71d9352d54" class="el" title="Open() opens the file system.">Open()</a>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
An int32\_t containing an error code from `pp_errors.h`.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/file__system_8h/" class="el">file_system.h</a>
