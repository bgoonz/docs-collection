—json {“title”:“pp\_var.h File Reference”} —

Include dependency graph for pp\_var.h:

![](/docs/native-client/pepper_beta/c/pp__var_8h__incl.png)

Data Structures
---------------

<table><tbody><tr class="odd"><td style="text-align: right;">union  </td><td><a href="/docs/native-client/pepper_beta/c/union_p_p___var_value/" class="el">PP_VarValue</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value/" class="el" title="The PP_VarValue union stores the data for any one of the types listed in the PP_VarType enum...">PP_VarValue</a> union stores the data for any one of the types listed in the PP_VarType enum. <a href="/docs/native-client/pepper_beta/c/union_p_p___var_value#details">More…</a><br />
</td></tr><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td>The <code>PP_VAR</code> struct is a variant data type and can contain any value of one of the types named in the <code>PP_VarType</code> enum. <a href="/docs/native-client/pepper_beta/c/struct_p_p___var#details">More…</a><br />
</td></tr></tbody></table>

Enumerations
------------

<table><tbody><tr class="odd"><td style="text-align: right;">enum  </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga9815041477d810724e44da862f9852ed" class="el">PP_VarType</a> {<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda499cc75cc2a3a16632b6f0e38172fce7" class="el">PP_VARTYPE_UNDEFINED</a> = 0, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852edabfa22cf2659270ee5d4c1ff4eabf6e67" class="el">PP_VARTYPE_NULL</a> = 1, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852edad1a70cd8b8b8b815687c3234f40513b5" class="el">PP_VARTYPE_BOOL</a> = 2, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda40a4a8c45ec7629e3093eb93b9ff1556" class="el">PP_VARTYPE_INT32</a> = 3,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda26caea042c1cb14ff640f7aec3f2af90" class="el">PP_VARTYPE_DOUBLE</a> = 4, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda079c1c085b9b0f1b076807a0eb5ba6bd" class="el">PP_VARTYPE_STRING</a> = 5, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda7060b95352ff46ed2f0144e08cc949cc" class="el">PP_VARTYPE_OBJECT</a> = 6, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda50df125d91ade69f5b2de4d08427508c" class="el">PP_VARTYPE_ARRAY</a> = 7,<br />
  <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852edae44188e85906d83c2f52f34aa5b38687" class="el">PP_VARTYPE_DICTIONARY</a> = 8, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda363024b8067811f2f2f42f969be44529" class="el">PP_VARTYPE_ARRAY_BUFFER</a> = 9, <a href="/docs/native-client/pepper_beta/c/group___enums#gga9815041477d810724e44da862f9852eda898e69540595e8b95681d850ddecc7f1" class="el">PP_VARTYPE_RESOURCE</a> = 10<br />
}</td></tr></tbody></table>

Functions
---------

<table><tbody><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga0edc8314fc1a92f93dd3d0eab286cb5d" class="el">PP_MakeUndefined</a> (void)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga75f83ac65ccbf57866d52d45cd5792e7" class="el">PP_MakeNull</a> (void)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#ga0fba11ae90d57086064d41b0af710253" class="el">PP_MakeBool</a> (<a href="/docs/native-client/pepper_beta/c/group___enums#ga4f272d99be14aacafe08dfd4ef830918" class="el">PP_Bool</a> value)</td></tr><tr class="even"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gad14a59fa681d4cc532b3d49c0438f0ca" class="el">PP_MakeInt32</a> (int32_t value)</td></tr><tr class="odd"><td style="text-align: right;">struct <a href="/docs/native-client/pepper_beta/c/struct_p_p___var/" class="el">PP_Var</a> </td><td><a href="/docs/native-client/pepper_beta/c/group___functions#gafbebaae212cb7e737efc56eea0e785b5" class="el">PP_MakeDouble</a> (double value)</td></tr></tbody></table>

Variables
---------

<table><tbody><tr class="odd"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___enums#ga9815041477d810724e44da862f9852ed" class="el">PP_VarType</a></td></tr><tr class="even"><td style="text-align: right;"> </td><td><a href="/docs/native-client/pepper_beta/c/group___structs#ga7c0f59e0d0c137b8390435582dc8e54d" class="el">PP_Var</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the API for handling the passing of data types between your module and the page.
