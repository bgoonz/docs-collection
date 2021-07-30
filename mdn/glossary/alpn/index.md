--- title: ALPN slug: Glossary/ALPN tags: - ALPN - Draft - Glossary - NeedsContent - TLS ---

**Application-Layer {{Glossary("Protocol")}} Negotiation** (**ALPN**) is a {{Glossary("TLS")}} extension which indicates what application layer protocol is negotiating the encrypted connection without requiring additional round trips.

<table><caption>Important protocol identifiers:</caption><thead><tr class="header"><th>Protocol</th><th>Identification sequence</th></tr></thead><tbody><tr class="odd"><td>{{Glossary("HTTP")}}/1.1</td><td><code>0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31</code> ("http/1.1")</td></tr><tr class="even"><td>{{Glossary("HTTP 2", "HTTP/2")}}</td><td><code>0x68 0x32</code> ("h2")</td></tr><tr class="odd"><td>HTTP/2 over cleartext {{Glossary("TCP")}}</td><td><code>0x68 0x32 0x63</code> ("h2c")</td></tr></tbody></table>

Specifications
--------------

<table><thead><tr class="header"><th>Specification</th><th>Status</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>{{RFC(7301)}}</td><td><span class="spec-RFC">IETF RFC</span></td><td>Initial definition.</td></tr></tbody></table>

See also
--------

-   [IANA registered ALPN identifiers](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
