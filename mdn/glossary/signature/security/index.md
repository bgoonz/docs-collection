--- title: Signature (security) slug: Glossary/Signature/Security tags: - Cryptography - Glossary - Privacy - Security ---

A **signature**, or *digital signature*, is a {{glossary("protocol")}} showing that a message is authentic.

From the {{glossary("hash")}} of a given message, the **signing process** first generates a digital signature linked to the signing entity, using the entity's private {{glossary("key")}}.

On receiving the message, the **verification process **

-   *authenticates the sender -* uses the sender's public key to {{glossary("decryption","decrypt")}} the signature and recover the hash, which can only be created with the sender's private key, and
-   *checks message integrity -* compares the hash with a newly calculated one from the received document (the two hashes will differ if the document has been tampered with)

The system fails if the private key is compromised or the recipient is deceitfully given the wrong public key.

Learn more
----------

### General knowledge

-   {{Interwiki("wikipedia", "Digital signature")}} on Wikipedia
-   See {{glossary("digest")}}, {{glossary("encryption")}}