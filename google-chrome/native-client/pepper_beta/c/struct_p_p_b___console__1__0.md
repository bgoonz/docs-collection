---json {"title":"PPB_Console Struct Reference"} ---

## Data Fields

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___console__1__0#ae54272123735f49c8d7eb09cb2e1e368" class="el">Log</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gac39067c0883ec80b94290dd2a3bae440" class="el">PP_LogLevel</a> level, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr><tr class="even"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_b___console__1__0#a87a75566f5b86ebb6e2b7bf529d6ade1" class="el">LogWithSource</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gac39067c0883ec80b94290dd2a3bae440" class="el">PP_LogLevel</a> level, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> source, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr></tbody></table>

---

## Field Documentation

<span id="ae54272123735f49c8d7eb09cb2e1e368" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___console__1__0#ae54272123735f49c8d7eb09cb2e1e368" class="el">PPB_Console::Log</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gac39067c0883ec80b94290dd2a3bae440" class="el">PP_LogLevel</a> level, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr></tbody></table>

Logs the given message to the JavaScript console associated with the given plugin instance with the given logging level.

The name of the plugin issuing the log message will be automatically prepended to the message. The value may be any type of Var.

<span id="a87a75566f5b86ebb6e2b7bf529d6ade1" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_b___console__1__0#a87a75566f5b86ebb6e2b7bf529d6ade1" class="el">PPB_Console::LogWithSource</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, <a href="/docs/native-client/pepper_beta/c/group___enums#gac39067c0883ec80b94290dd2a3bae440" class="el">PP_LogLevel</a> level, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> source, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> value)</td></tr></tbody></table>

Logs a message to the console with the given source information rather than using the internal PPAPI plugin name.

The name must be a string var.

The regular log function will automatically prepend the name of your plugin to the message as the "source" of the message. Some plugins may wish to override this. For example, if your plugin is a Python interpreter, you would want log messages to contain the source .py file doing the log statement rather than have "python" show up in the console.

---

The documentation for this struct was generated from the following file:

- <a href="/docs/native-client/pepper_beta/c/ppb__console_8h/" class="el">ppb_console.h</a>
