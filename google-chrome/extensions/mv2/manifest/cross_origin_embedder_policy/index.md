2021-08-03

The `cross_origin_embedder_policy` manifest key lets the extension to specify a value for the [Cross-Origin-Embedder-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) (COEP) response header for requests to the extension’s origin. This includes the extension’s background context (service worker or background page), popup, options page, tabs that are open to an extension resource, etc.

Together with [cross\_origin\_opener\_policy](/docs/extensions/mv2/manifest/cross_origin_opener_policy/), this key allows the extension to opt into [cross-origin isolation](/docs/extensions/mv2/cross-origin-isolation/).

Manifest declaration
--------------------

{% Aside %}

This key was introduced in Chrome 93.

{% endAside %}

The `cross_origin_embedder_policy` manifest key takes an object. This object should only contain one property named `value` with a string value. Chrome uses this string as the value of the `Cross-Origin-Embedder-Policy` header when serving resources from the extension’s origin. For example:

    {
        ...
        "cross_origin_embedder_policy": {
          "value": "require-corp"
        },
        ...
    }

See the [Cross-origin isolation overview](/docs/extensions/mv2/cross-origin-isolation/) for more information about this feature.
