--- title: Browsing context slug: Glossary/Browsing\_context tags: - Glossary ---

A **browsing context** is the environment in which a browser displays a {{domxref("Document")}}. In modern browsers, it usually is a *tab*, but can be a *window* or even only parts of a page, like a *frame* or an *iframe*.

Each browsing context has a specific origin, the origin of the active document and a history that memorize all the displayed documents, in order.

Communication between browsing context is severely constrained. Between browsing context of the same origin, a {{domxref("BroadcastChannel")}} can be opened and used.

Learn more
----------

-   See {{glossary("origin")}}
