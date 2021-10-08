—json {“title”:“PPP\_Messaging Struct Reference”} —

Data Fields
-----------

<table><tbody><tr class="odd"><td style="text-align: right;">void(* </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p_p___messaging__1__0#a558ca784cf11eaba479ff8621ae2c507" class="el">HandleMessage</a> )(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> message)</td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

The `PPP_Messaging` interface contains pointers to functions that you must implement to handle postMessage events on the associated DOM element.

------------------------------------------------------------------------

Field Documentation
-------------------

<span id="a558ca784cf11eaba479ff8621ae2c507" class="anchor" style="margin: 0;"></span>

<table><tbody><tr class="odd"><td>void(* <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___messaging__1__0#a558ca784cf11eaba479ff8621ae2c507" class="el">PPP_Messaging::HandleMessage</a>)(<a href="/docs/native-client/pepper_beta/c/group___typedefs#ga89b662403e6a687bb914b80114c0d19d" class="el">PP_Instance</a> instance, struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> message)</td></tr></tbody></table>

<a href="/docs/native-client/pepper_beta/c/struct_p_p_p___messaging__1__0#a558ca784cf11eaba479ff8621ae2c507" class="el" title="HandleMessage() is a function that the browser calls when PostMessage() is invoked on the DOM element...">HandleMessage()</a> is a function that the browser calls when PostMessage() is invoked on the DOM element for the module instance in JavaScript.

Note that PostMessage() in the JavaScript interface is asynchronous, meaning JavaScript execution will not be blocked while <a href="/docs/native-client/pepper_beta/c/struct_p_p_p___messaging__1__0#a558ca784cf11eaba479ff8621ae2c507" class="el" title="HandleMessage() is a function that the browser calls when PostMessage() is invoked on the DOM element...">HandleMessage()</a> is processing the message.

**Parameters:**  

<table><tbody><tr class="odd"><td>[in]</td><td>instance</td><td>A <code>PP_Instance</code> identifying one instance of a module.</td></tr><tr class="even"><td>[in]</td><td>message</td><td>A <code>PP_Var</code> which has been converted from a JavaScript value. JavaScript array/object types are supported from Chrome M29 onward. All JavaScript values are copied when passing them to the plugin.</td></tr></tbody></table>

When converting JavaScript arrays, any object properties whose name is not an array index are ignored. When passing arrays and objects, the entire reference graph will be converted and transferred. If the reference graph has cycles, the message will not be sent and an error will be logged to the console.

The following JavaScript code invokes `HandleMessage`, passing the module instance on which it was invoked, with `message` being a string `PP_Var` containing “Hello world!”

**Example:**

     <body>
       <object id="plugin"
               type="application/x-ppapi-postMessage-example"/>
       <script type="text/javascript">
         document.getElementById('plugin').postMessage("Hello world!");
       </script>
     </body>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

-   <a href="/docs/native-client/pepper_beta/c/ppp__messaging_8h/" class="el">ppp_messaging.h</a>
