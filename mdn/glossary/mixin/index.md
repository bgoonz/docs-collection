--- title: Mixin slug: Glossary/Mixin tags: - CodingScripting - Glossary - Method - Mixin - Property ---

<span class="seoSummary">A *mixin* is a {{Glossary("class")}} (interface, in WebAPI spec terms) in which some or all of its {{Glossary("method", "methods")}} and/or {{Glossary("property", "properties")}} are unimplemented, requiring that another {{Glossary("class")}} or {{Glossary("interface")}} provide the missing implementations.</span> The new class or interface then includes both the properties and methods from the mixin as well as those it defines itself. All of the methods and properties are used exactly the same regardless of whether they're implemented in the mixin or the interface or class that implements the mixin.

The advantage of mixins is that they can be used to simplify the design of APIs in which multiple interfaces need to include the same methods and properties.

For example, the {{domxref("WindowOrWorkerGlobalScope")}} mixin is used to provide methods and properties that need to be available on both the {{domxref("Window")}} and {{domxref("WorkerGlobalScope")}} interfaces. The mixin is implemented by both of those interfaces.

Learn more
----------

### General knowledge

-   <a href="https://en.wikipedia.org/wiki/Mixin" class="external external-icon">Mixin</a> on Wikipedia
