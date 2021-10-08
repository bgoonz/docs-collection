---json {"title":"pp::DirectoryEntry Class Reference"} ---

[List of all members.](/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#abd1a4a70ed1b922a232c78be62b1fe86" class="el">DirectoryEntry</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#aa8fe311e0fe27aee989f0a055ec2f2e4" class="el">DirectoryEntry</a> (<a href="/docs/native-client/pepper_dev/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, const PP_DirectoryEntry &amp;data)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#af60a142d874f0bc2fed98bd8ae5b7cdc" class="el">DirectoryEntry</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#a3dd150a66dcb8e3b063f411d904dc356" class="el">~DirectoryEntry</a> ()</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &amp; </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#a7e1b5b7376a2da0a4f736eb986092556" class="el">operator=</a> (const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#aea481437bc555e04429b4e7ec1005ef0" class="el">is_null</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#af6ff2a3c83a6f26455573bc07f15ec4d" class="el">file_ref</a> () const</td></tr><tr class="even"><td style="text-align: right;">PP_FileType </td><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#a9c91f7dda30ef2f31ec9547f9fd9faaf" class="el">file_type</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `DirectoryEntry` class represents information about a directory entry.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="abd1a4a70ed1b922a232c78be62b1fe86" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#abd1a4a70ed1b922a232c78be62b1fe86" class="el">pp::DirectoryEntry::DirectoryEntry</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

Default constructor for creating an <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#aea481437bc555e04429b4e7ec1005ef0" class="el" title="This function determines if this DirectoryEntry is a null value.">is_null()</a> `DirectoryEntry` object.

<span id="aa8fe311e0fe27aee989f0a055ec2f2e4" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#abd1a4a70ed1b922a232c78be62b1fe86" class="el">pp::DirectoryEntry::DirectoryEntry</a></td><td>(</td><td><a href="/docs/native-client/pepper_dev/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>const PP_DirectoryEntry &amp; </td><td><em>data</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have a `PP_DirectoryEntry` which contains a `FileRef` that has already been reference counted as a return value.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>data</td><td>A <code>PP_DirectoryEntry</code> to be copied.</td></tr></tbody></table>

<span id="af60a142d874f0bc2fed98bd8ae5b7cdc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#abd1a4a70ed1b922a232c78be62b1fe86" class="el">pp::DirectoryEntry::DirectoryEntry</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

A copy constructor for `DirectoryEntry`.

This constructor increments a reference count of the `FileRef` held by this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el" title="The DirectoryEntry class represents information about a directory entry.">DirectoryEntry</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A pointer to a <code>DirectoryEntry</code>.</td></tr></tbody></table>

<span id="a3dd150a66dcb8e3b063f411d904dc356" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#a3dd150a66dcb8e3b063f411d904dc356" class="el">pp::DirectoryEntry::~DirectoryEntry</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

A destructor that decrements a reference count of the `FileRef` held by this `DirectoryEntry`.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="af6ff2a3c83a6f26455573bc07f15ec4d" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#af6ff2a3c83a6f26455573bc07f15ec4d" class="el">pp::DirectoryEntry::file_ref</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function returns the `FileRef` held by this `DirectoryEntry`.

**Returns:**  
A `FileRef` of the file.

<span id="a9c91f7dda30ef2f31ec9547f9fd9faaf" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>PP_FileType <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#a9c91f7dda30ef2f31ec9547f9fd9faaf" class="el">pp::DirectoryEntry::file_type</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function returns the `PP_FileType` of the file referenced by this `DirectoryEntry`.

**Returns:**  
A `PP_FileType` of the file.

<span id="aea481437bc555e04429b4e7ec1005ef0" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry#aea481437bc555e04429b4e7ec1005ef0" class="el">pp::DirectoryEntry::is_null</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function determines if this `DirectoryEntry` is a null value.

**Returns:**  
true if this `DirectoryEntry` is null, otherwise false.

<span id="a7e1b5b7376a2da0a4f736eb986092556" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a>&amp; pp::DirectoryEntry::operator=</td><td>(</td><td>const <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el">DirectoryEntry</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

This function assigns one `DirectoryEntry` object to this `DirectoryEntry` object.

This function increases the reference count of the `FileRef` of the other <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el" title="The DirectoryEntry class represents information about a directory entry.">DirectoryEntry</a> while decrementing the reference count of the <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_file_ref/" class="el" title="The FileRef class represents a &quot;weak pointer&quot; to a file in a file system.">FileRef</a> of this <a href="/docs/native-client/pepper_dev/cpp/classpp_1_1_directory_entry/" class="el" title="The DirectoryEntry class represents information about a directory entry.">DirectoryEntry</a>.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>other</td><td>A pointer to a <code>DirectoryEntry</code>.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A new `DirectoryEntry` object.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_dev/cpp/directory__entry_8h/" class="el">directory_entry.h</a>
