---json {"title":"ppp.h File Reference"} ---

Include dependency graph for ppp.h:

![](/docs/native-client/pepper_beta/c/ppp_8h__incl.png)

## Typedefs

<table><tbody><tr class="odd"><td style="text-align: right;">typedef int32_t(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gae33224cdac15cf8596127fe7b5f08325" class="el">PP_InitializeModule_Func</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a> module, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> get_browser_interface)</td></tr><tr class="even"><td style="text-align: right;">typedef void(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#gad2b49167bcbf6c2c895ffb1a61bc720c" class="el">PP_ShutdownModule_Func</a> )(void)</td></tr><tr class="odd"><td style="text-align: right;">typedef const void *(* </td><td><a href="/docs/native-client/pepper_beta/c/group___typedefs#ga893cfdc559fdf7ae3004816357c3d7e9" class="el">PP_GetInterface_Func</a> )(const char *interface_name)</td></tr></tbody></table>

## Functions

<table><tbody><tr class="odd"><td style="text-align: right;">int32_t </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga2fc7b396531c19417d8d7171d56da8b6" class="el">PPP_InitializeModule</a> (<a href="/docs/native-client/pepper_beta/c/group___typedefs#gab780dd451cd7f51284cb752edd88f9a0" class="el">PP_Module</a> module, <a href="/docs/native-client/pepper_beta/c/group___typedefs#ga68ad7c927b86e0c29d890603edd33154" class="el">PPB_GetInterface</a> get_browser_interface)</td></tr><tr class="even"><td style="text-align: right;">void </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gaa3021aba7ddc17a8cecb4bc4f8374e98" class="el">PPP_ShutdownModule</a> (void)</td></tr><tr class="odd"><td style="text-align: right;">const void * </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga4127b148b2bd0f3bc2c078dd38cbe4cf" class="el">PPP_GetInterface</a> (const char *interface_name)</td></tr></tbody></table>

---

<span id="details" class="anchor" style="margin: 0;"></span>

## Detailed Description

This file defines three functions that your module must implement to interact with the browser.
