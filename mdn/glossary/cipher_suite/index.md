--- title: Cipher suite slug: Glossary/Cipher\_suite tags: - Cryptography - Glossary - Security ---

<span class="seoSummary">A cipher suite is a combination of a key exchange algorithm, authentication method, bulk encryption {{Glossary("cipher")}}, and message authentication code.</span>

In a {{Glossary("cryptosystem")}} like {{Glossary("TLS")}}, the client and server must agree on a cipher suite before they can begin communicating securely.  A typical cipher suite looks like ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256 or ECDHE-RSA-AES128-GCM-SHA256, indicating:

-   ECDHE (elliptic curve Diffie-Hellman ephemeral) for key exchange
-   RSA for authentication
-   AES-128 as the cipher, with Galois/Counter Mode (GCM) as the block cipher mode of operation
-   SHA-256 as the hash-based message authentication code (HMAC)

Learn more
----------

-   [Mozilla recommended cipher suite choices for TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)
