—json {“title”:“pp::Fullscreen Class Reference”} —

[List of all members.](/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen-members/)

Public Member Functions
-----------------------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a3c3655d21fbef531a3eec82f9eb2115b" class="el">Fullscreen</a> (const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp;instance)</td></tr><tr class="even"><td style="text-align: right;">virtual </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a4d73ff65edc8ef8f802f5a932e5081e8" class="el">~Fullscreen</a> ()</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a555c0d2c2fc120cfac925a62cc8a7345" class="el">IsFullscreen</a> ()</td></tr><tr class="even"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a2c316cb6ebe4552df661aeea88e6f365" class="el">SetFullscreen</a> (bool fullscreen)</td></tr><tr class="odd"><td style="text-align: right;">bool </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a6bc430c1d41a7696194374d05d8eee41" class="el">GetScreenSize</a> (<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> *size)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen/" class="el" title="The Fullscreen class allowing you to check and toggle fullscreen mode.">Fullscreen</a> class allowing you to check and toggle fullscreen mode.

------------------------------------------------------------------------

Constructor & Destructor Documentation
--------------------------------------

<span id="a3c3655d21fbef531a3eec82f9eb2115b" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a3c3655d21fbef531a3eec82f9eb2115b" class="el">pp::Fullscreen::Fullscreen</a></td><td>(</td><td>const <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_instance_handle/" class="el">InstanceHandle</a> &amp; </td><td><em>instance</em></td><td>)</td><td><code> [explicit]</code></td></tr></tbody></table>

A constructor for creating a `Fullscreen`.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>The instance with which this resource will be associated.</td></tr></tbody></table>

<span id="a4d73ff65edc8ef8f802f5a932e5081e8" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>virtual <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a4d73ff65edc8ef8f802f5a932e5081e8" class="el">pp::Fullscreen::~Fullscreen</a></td><td>(</td><td></td><td>)</td><td><code> [virtual]</code></td></tr></tbody></table>

Destructor.

------------------------------------------------------------------------

Member Function Documentation
-----------------------------

<span id="a6bc430c1d41a7696194374d05d8eee41" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a6bc430c1d41a7696194374d05d8eee41" class="el">pp::Fullscreen::GetScreenSize</a></td><td>(</td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_size/" class="el">Size</a> * </td><td><em>size</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a6bc430c1d41a7696194374d05d8eee41" class="el" title="GetScreenSize() gets the size of the screen in pixels.">GetScreenSize()</a> gets the size of the screen in pixels.

The module instance will be resized to this size when <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a2c316cb6ebe4552df661aeea88e6f365" class="el" title="SetFullscreen() switches the module instance to and from fullscreen mode.">SetFullscreen()</a> is called to enter fullscreen mode.

**Parameters:**  

<table><tbody><tr class="odd"><td>[out]</td><td>size</td><td>The size of the entire screen in pixels.</td></tr></tbody></table>

**Returns:**  
`true` on success or `false` on failure.

<span id="a555c0d2c2fc120cfac925a62cc8a7345" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a555c0d2c2fc120cfac925a62cc8a7345" class="el">pp::Fullscreen::IsFullscreen</a></td><td>(</td><td></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a555c0d2c2fc120cfac925a62cc8a7345" class="el" title="IsFullscreen() checks whether the module instance is currently in fullscreen mode.">IsFullscreen()</a> checks whether the module instance is currently in fullscreen mode.

**Returns:**  
`true` if the module instance is in fullscreen mode, `false` if the module instance is not in fullscreen mode.

<span id="a2c316cb6ebe4552df661aeea88e6f365" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>bool <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a2c316cb6ebe4552df661aeea88e6f365" class="el">pp::Fullscreen::SetFullscreen</a></td><td>(</td><td>bool </td><td><em>fullscreen</em></td><td>)</td><td></td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a2c316cb6ebe4552df661aeea88e6f365" class="el" title="SetFullscreen() switches the module instance to and from fullscreen mode.">SetFullscreen()</a> switches the module instance to and from fullscreen mode.

The transition to and from fullscreen mode is asynchronous. During the transition, <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a555c0d2c2fc120cfac925a62cc8a7345" class="el" title="IsFullscreen() checks whether the module instance is currently in fullscreen mode.">IsFullscreen()</a> will return the previous value and no 2D or 3D device can be bound. The transition ends at DidChangeView() when <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_fullscreen#a555c0d2c2fc120cfac925a62cc8a7345" class="el" title="IsFullscreen() checks whether the module instance is currently in fullscreen mode.">IsFullscreen()</a> returns the new value. You might receive other DidChangeView() calls while in transition.

The transition to fullscreen mode can only occur while the browser is processing a user gesture, even if `true` is returned.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>fullscreen</td><td><code>true</code> to enter fullscreen mode, or <code>false</code> to exit fullscreen mode.</td></tr></tbody></table>

**Returns:**  
`true` on success or `false` on failure.

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/cpp/fullscreen_8h/" class="el">fullscreen.h</a>
