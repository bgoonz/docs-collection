--- title: Site slug: Glossary/Site tags: - Glossary - Security - WebMechanics ---

The *site* of a piece of web content is determined by the *registrable domain* of the host within the origin. This is computed by consulting a *Public Suffix List* to find the portion of the host which is counted as the *public suffix* (e.g. `com`, `org` or `co.uk`).

The concept of a *site* is used in [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie#directives), as well as a web application's [Cross-Origin Resource Policy](/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)).

Examples of the same site
-------------------------

<table><tbody><tr class="odd"><td><code>https://developer.mozilla.org/en-US/docs/</code><br />
<code>https://support.mozilla.org/en-US/</code></td><td>same site because the registrable domain of <em>mozilla.org</em> is the same</td></tr><tr class="even"><td><code>http://example.com:8080</code><br />
<code>https://example.com</code></td><td>same site because scheme and port are not relevant</td></tr></tbody></table>

Examples of different site
--------------------------

<table><tbody><tr class="odd"><td><code>https://developer.mozilla.org/en-US/docs/</code><br />
<code>https://example.com</code></td><td>not same site because the registrable domain of the two URLs differs</td></tr></tbody></table>
