--- title: Fetch directive slug: Glossary/Fetch\_directive tags: - CSP - HTTP - Security ---

**{{Glossary("CSP")}} fetch directives** are used in a {{HTTPHeader("Content-Security-Policy")}} header and control locations from which certain resource types may be loaded. For instance, {{CSP("script-src")}} allows developers to allow trusted sources of script to execute on a page, while {{CSP("font-src")}} controls the sources of web fonts.

All fetch directives fall back to {{CSP("default-src")}}. That means, if a fetch directive is absent in the CSP header, the user agent will look for the `default-src` directive.

See [Fetch directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) for a complete list.

1.  [Glossary](/en-US/docs/Glossary)
    1.  {{Glossary("CSP")}}
    2.  {{Glossary("Reporting directive")}}
    3.  {{Glossary("Document directive")}}
    4.  {{Glossary("Navigation directive")}}
2.  Reference
    1.  <https://www.w3.org/TR/CSP/#directives-fetch>
    2.  {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
    3.  {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
    4.  {{HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for")}} {{Deprecated\_Inline}}
    5.  {{HTTPHeader("Content-Security-Policy")}}
