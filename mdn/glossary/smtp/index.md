--- title: SMTP slug: Glossary/SMTP tags: - Beginner - Collaboration - Glossary - Infrastructure - Sharing ---

**SMTP** (Simple Mail Transfer Protocol) is a {{glossary("protocol")}} used to send a new email.  Like {{glossary("POP3")}} and {{glossary("NNTP")}}, it is a {{Glossary("state machine")}}-driven protocol.

The protocol is relatively straightforward. Primary complications include supporting various authentication mechanisms (<a href="https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface" class="external">GSSAPI</a>, <a href="https://en.wikipedia.org/wiki/CRAM-MD5" class="external">CRAM-MD5</a>, <a href="https://en.wikipedia.org/wiki/NTLM" class="external">NTLM</a>, MSN, AUTH LOGIN, AUTH PLAIN, etc.), handling error responses, and falling back when authentication mechanisms fail (e.g., the server claims to support a mechanism, but doesn't).

1.  [Glossary](/en-US/docs/Glossary)
    1.  {{glossary("NNTP")}}
    2.  {{glossary("POP3")}}
    3.  {{glossary("protocol")}}
    4.  {{Glossary("state machine")}}
2.  Wikipedia articles
    1.  {{Interwiki("wikipedia", "SMTP")}}
