--- title: Quality values slug: Glossary/Quality\_values tags: - Glossary - WebMechanics ---

<span class="seoSummary">**Quality values**, or *q-values* and *q-factors*, are used to describe the order of priority of values in a comma-separated list. It is a special syntax allowed in some [HTTP headers](/en-US/docs/Web/HTTP/Headers) and in HTML.</span> The importance of a value is marked by the suffix `';q='` immediately followed by a value between `0` and `1` included, with up to three decimal digits, the highest value denoting the highest priority. When not present, the default value is `1`.

Examples
--------

The following syntax

    text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8

indicates the order of priority:

<table><thead><tr class="header"><th>Value</th><th>Priority</th></tr></thead><tbody><tr class="odd"><td><code>text/html</code> and <code>application/xhtml+xml</code></td><td><code>1.0</code></td></tr><tr class="even"><td><code>application/xml</code></td><td><code>0.9</code></td></tr><tr class="odd"><td><code>*/*</code></td><td><code>0.8</code></td></tr></tbody></table>

If there is no priority defined for the first two values, the order in the list is irrelevant. Nevertheless, with the same quality, more specific values have priority over less specific ones:

    text/html;q=0.8,text/*;q=0.8,*/*;q=0.8

Value

Priority

`text/html`

`0.8` (but totally specified)

`text/*`

`0.8` (partially specified)

`*/*`

`0.8` (not specified)

Some syntax, like the one of {{HTTPHeader("Accept")}}, allow additional specifiers like `text/html;level=1`. These increase the specificity of the value. Their use is extremely rare.

Browser-specific information
----------------------------

### Firefox

Starting with Firefox 18, the quality factor values are clamped to 2 decimal places. They used to be clamped to only 1 decimal place in earlier versions ({{bug(672448)}}).

More information
----------------

-   [HTTP headers](/en-US/docs/Web/HTTP/Headers) using q-values in their syntax: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}.
-   [Header field definitions.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
