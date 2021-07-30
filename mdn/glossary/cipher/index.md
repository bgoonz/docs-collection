--- title: Cipher slug: Glossary/Cipher tags: - Cryptography - Glossary - Privacy - Security ---

In {{glossary("cryptography")}}, a **cipher** is an algorithm that can {{glossary("encryption", "encode")}} {{glossary("cleartext")}} to make it unreadable, and to {{glossary("decryption", "decode")}} it back.

Ciphers were common long before the information age (e.g., [substitution ciphers](https://en.wikipedia.org/wiki/Substitution_cipher), [transposition ciphers](https://en.wikipedia.org/wiki/Transposition_cipher), and [permutation ciphers](https://en.wikipedia.org/wiki/Permutation_cipher)), but none of them were cryptographically secure except for the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).

Modern ciphers are designed to withstand {{glossary("attack", "attacks")}} discovered by a {{glossary("cryptanalysis", "cryptanalyst")}}. There is no guarantee that all attack methods have been discovered, but each algorithm is judged against known classes of attacks.

Ciphers operate two ways, either as [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) on successive blocks, or buffers, of data, or as [stream ciphers](https://en.wikipedia.org/wiki/Stream_cipher) on a continuous data flow (often of sound or video).

They also are classified according to how their {{glossary("key", "keys")}} are handled:

-   [symmetric key](https://en.wikipedia.org/wiki/Symmetric_key_algorithm) algorithms use the same key to encode and decode a message. The key also must be sent securely if the message is to stay confidential.
-   [asymmetric key](https://en.wikipedia.org/wiki/Asymmetric_key_algorithm) algorithms use a different key for encryption and decryption.

1.  General knowledge
    1.  {{Interwiki("wikipedia", "Cipher")}} on Wikipedia
    2.  [Encryption and Decryption](/en-US/docs/Archive/Security/Encryption_and_Decryption)
2.  [MDN Web Docs Glossary](/en-US/docs/Glossary)
    1.  {{Glossary("Block cipher mode of operation")}}
    2.  {{Glossary("Cipher")}}
    3.  {{Glossary("Ciphertext")}}
    4.  {{Glossary("Cipher suite")}}
    5.  {{Glossary("Cryptanalysis")}}
    6.  {{Glossary("Cryptography")}}
    7.  {{Glossary("Decryption")}}
    8.  {{Glossary("Encryption")}}
    9.  {{Glossary("Key")}}
    10. {{Glossary("Plaintext")}}
    11. {{Glossary("Public-key cryptography")}}
    12. {{Glossary("Symmetric-key cryptography")}}
