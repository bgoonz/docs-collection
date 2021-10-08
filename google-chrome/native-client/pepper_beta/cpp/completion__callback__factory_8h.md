---json {"title":"completion\_callback\_factory.h File Reference"} ---

Include dependency graph for completion\_callback\_factory.h:

![](/docs/native-client/pepper_beta/cpp/completion__callback__factory_8h__incl.png)

Classes
-------

<table><tbody><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper/" class="el">pp::internal::TypeUnwrapper&lt; T &gt;</a></td></tr><tr class="even"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper_3_01_t_01_6_01_4/" class="el">pp::internal::TypeUnwrapper&lt; T &amp; &gt;</a></td></tr><tr class="odd"><td style="text-align: right;">struct  </td><td><a href="/docs/native-client/pepper_beta/cpp/structpp_1_1internal_1_1_type_unwrapper_3_01const_01_t_01_6_01_4/" class="el">pp::internal::TypeUnwrapper&lt; const T &amp; &gt;</a></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory/" class="el">pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;</a></td></tr><tr class="odd"><td style="text-align: right;"> </td><td>CompletionCallbackFactory&lt;T&gt; may be used to create <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback/" class="el" title="This API enables you to implement and receive callbacks when Pepper operations complete asynchronousl...">CompletionCallback</a> objects that are bound to member functions. <a href="/docs/native-client/pepper_beta/cpp/classpp_1_1_completion_callback_factory#details">More...</a><br />
</td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::BackPointer</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::CallbackData&lt; Dispatcher &gt;</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::Dispatcher0&lt; Method &gt;</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::DispatcherWithOutput0&lt; Output, Method &gt;</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::Dispatcher1&lt; Method, A &gt;</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::DispatcherWithOutput1&lt; Output, Method, A &gt;</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::Dispatcher2&lt; Method, A, B &gt;</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::DispatcherWithOutput2&lt; Output, Method, A, B &gt;</strong></td></tr><tr class="even"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::Dispatcher3&lt; Method, A, B, C &gt;</strong></td></tr><tr class="odd"><td style="text-align: right;">class  </td><td><strong>pp::CompletionCallbackFactory&lt; T, ThreadTraits &gt;::DispatcherWithOutput3&lt; Output, Method, A, B, C &gt;</strong></td></tr></tbody></table>

Namespaces
----------

<table><tbody><tr class="odd"><td style="text-align: right;">namespace  </td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp/" class="el">pp</a></td></tr><tr class="even"><td style="text-align: right;">namespace  </td><td><a href="/docs/native-client/pepper_beta/cpp/namespacepp_1_1internal/" class="el">pp::internal</a></td></tr></tbody></table>

------------------------------------------------------------------------

<span id="details" class="anchor" style="margin: 0;"></span>

Detailed Description
--------------------

This file defines the API to create CompletionCallback objects that are bound to member functions.
