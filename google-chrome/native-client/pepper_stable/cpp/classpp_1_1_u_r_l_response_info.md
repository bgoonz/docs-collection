---json {"title":"pp::URLResponseInfo Class Reference"} ---

Inheritance diagram for pp::URLResponseInfo:

![Inheritance graph](/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info__inherit__graph.png)

<span class="legend">\[[legend](/docs/native-client/pepper_stable/cpp/graph_legend/)\]</span>

[List of all members.](/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a239b1eb1076f2da6c75af416c8f02e6b" class="el">URLResponseInfo</a> ()</td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a157bf323368bc4b7e63ce604ecc272c1" class="el">URLResponseInfo</a> (<a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a>, PP_Resource resource)</td></tr><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#aa2fb382084c248e56dffb09e1191a6f1" class="el">URLResponseInfo</a> (const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info/" class="el">URLResponseInfo</a> &amp;other)</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#ac30d83aa38148e6d90f3c22ab01b10dc" class="el">GetProperty</a> (PP_URLResponseProperty property) const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a77debd316d7b575b6cae43cb1bb14cbc" class="el">GetBodyAsFileRef</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#ad53acecc41062e0b60167b78c268a0bb" class="el">GetURL</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a6c25ffe56f7d9da0817fd84346bbaf10" class="el">GetRedirectURL</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a3ae355f52b46a6d2e65fed19bfcec323" class="el">GetRedirectMethod</a> () const</td></tr><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#aa7d27c0d6af582dc374461c8d0f868b3" class="el">GetStatusCode</a> () const</td></tr><tr class="even"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#aa6b506dff751344d0b85f596ab1a41a8" class="el">GetStatusLine</a> () const</td></tr><tr class="odd"><td style="text-align: right;"><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> </td><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#ae1fbc3ec4025534fbbf7e152af8308c7" class="el">GetHeaders</a> () const</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

<a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info/" class="el" title="URLResponseInfo provides an API for examining URL responses.">URLResponseInfo</a> provides an API for examining URL responses.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a239b1eb1076f2da6c75af416c8f02e6b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a239b1eb1076f2da6c75af416c8f02e6b" class="el">pp::URLResponseInfo::URLResponseInfo</a></td><td>(</td><td></td><td>)</td><td><code> [inline]</code></td></tr></tbody></table>

Default constructor.

This constructor creates an `is_null` resource.

<span id="a157bf323368bc4b7e63ce604ecc272c1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a239b1eb1076f2da6c75af416c8f02e6b" class="el">pp::URLResponseInfo::URLResponseInfo</a></td><td>(</td><td><a href="/docs/native-client/pepper_stable/cpp/namespacepp#a339083c1beec620267bf8b3c55decaa5" class="el">PassRef</a> </td><td>,</td></tr><tr class="even"><td></td><td></td><td>PP_Resource </td><td><em>resource</em> </td></tr><tr class="odd"><td></td><td>)</td><td></td><td></td></tr></tbody></table>

A constructor used when you have received a `PP_Resource` as a return value that has already been reference counted.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>resource</td><td>A <code>PP_Resource</code> corresponding to a resource.</td></tr></tbody></table>

<span id="aa2fb382084c248e56dffb09e1191a6f1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a239b1eb1076f2da6c75af416c8f02e6b" class="el">pp::URLResponseInfo::URLResponseInfo</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info/" class="el">URLResponseInfo</a> &amp; </td><td><em>other</em></td><td>)</td><td></td></tr></tbody></table>

The copy constructor for `URLResponseInfo`.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a77debd316d7b575b6cae43cb1bb14cbc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_file_ref/" class="el">FileRef</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a77debd316d7b575b6cae43cb1bb14cbc" class="el">pp::URLResponseInfo::GetBodyAsFileRef</a></td><td>(</td><td></td><td>)</td><td>const</td></tr></tbody></table>

This function returns a `FileRef` pointing to the file containing the response body.

This is only valid if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was set on the `URLRequestInfo` used to produce this response. This file remains valid until the `URLLoader` associated with this `URLResponseInfo` is closed or destroyed.

**Returns:**  
A `FileRef` corresponding to a `FileRef` if successful, an `is_null` object if `PP_URLREQUESTPROPERTY_STREAMTOFILE` was not requested or if the `URLLoader` has not been opened yet.

<span id="ae1fbc3ec4025534fbbf7e152af8308c7" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#ae1fbc3ec4025534fbbf7e152af8308c7" class="el">pp::URLResponseInfo::GetHeaders</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function gets the `PP_URLRESPONSEPROPERTY_HEADERS` property for the response.

**Returns:**  
An `is_string Var` containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

<span id="ac30d83aa38148e6d90f3c22ab01b10dc" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#ac30d83aa38148e6d90f3c22ab01b10dc" class="el">pp::URLResponseInfo::GetProperty</a></td><td>(</td><td>PP_URLResponseProperty </td><td><em>property</em></td><td>)</td><td>const</td></tr></tbody></table>

This function gets a response property.

**Parameters:**  
<table><tbody><tr class="odd"><td>[in]</td><td>property</td><td>A <code>PP_URLResponseProperty</code> identifying the type of property in the response.</td></tr></tbody></table>

<!-- -->

**Returns:**  
A `Var` containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

<span id="a3ae355f52b46a6d2e65fed19bfcec323" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a3ae355f52b46a6d2e65fed19bfcec323" class="el">pp::URLResponseInfo::GetRedirectMethod</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function gets the `PP_URLRESPONSEPROPERTY_REDIRECTMETHOD` property for the response.

**Returns:**  
An `is_string Var` containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

<span id="a6c25ffe56f7d9da0817fd84346bbaf10" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#a6c25ffe56f7d9da0817fd84346bbaf10" class="el">pp::URLResponseInfo::GetRedirectURL</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function gets the `PP_URLRESPONSEPROPERTY_REDIRECTURL` property for the response.

**Returns:**  
An `is_string Var` containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

<span id="aa7d27c0d6af582dc374461c8d0f868b3" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>int32_t <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#aa7d27c0d6af582dc374461c8d0f868b3" class="el">pp::URLResponseInfo::GetStatusCode</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function gets the `PP_URLRESPONSEPROPERTY_STATUSCODE` property for the response.

**Returns:**  
A int32\_t containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

<span id="aa6b506dff751344d0b85f596ab1a41a8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#aa6b506dff751344d0b85f596ab1a41a8" class="el">pp::URLResponseInfo::GetStatusLine</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function gets the `PP_URLRESPONSEPROPERTY_STATUSLINE` property for the response.

**Returns:**  
An `is_string Var` containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

<span id="ad53acecc41062e0b60167b78c268a0bb" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_var/" class="el">Var</a> <a href="/docs/native-client/pepper_stable/cpp/classpp_1_1_u_r_l_response_info#ad53acecc41062e0b60167b78c268a0bb" class="el">pp::URLResponseInfo::GetURL</a></td><td>(</td><td></td><td>)</td><td>const<code> [inline]</code></td></tr></tbody></table>

This function gets the `PP_URLRESPONSEPROPERTY_URL` property for the response.

**Returns:**  
An `is_string Var` containing the response property value if successful, `is_undefined Var` if an input parameter is invalid.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_stable/cpp/url__response__info_8h/" class="el">url_response_info.h</a>
