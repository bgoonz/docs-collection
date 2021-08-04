--- title: Entity slug: Glossary/Entity tags: - CodingScripting - Composing - Glossary - HTML ---

<span class="seoSummary">An {{glossary("HTML")}} **entity **is a piece of text ("string") that begins with an ampersand (`&`) and ends with a semicolon (`;`) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.  </span>

Many characters have memorable entities. For example, the entity for the copyright symbol (`©`) is `&copy;`. For less memorable characters, such as `&#8212;` or `&#x2014;`, you can use a [reference chart](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) or [decoder tool](https://mothereff.in/html-entities).

## Reserved characters

Some special characters are reserved for use in HTML, meaning that your browser will parse them as HTML code. For example, if you use the less-than (`<`) sign, the browser interprets any text that follows as a {{Glossary('tag')}}.

To display these characters as text, replace them with their corresponding character entities, as shown in the following table.

<table><thead><tr class="header"><th>Character</th><th>Entity</th><th>Note</th></tr></thead><tbody><tr class="odd"><td>&amp;</td><td><code>&amp;amp;</code></td><td>Interpreted as the beginning of an entity or character reference.</td></tr><tr class="even"><td>&lt;</td><td><code>&amp;lt;</code></td><td>Interpreted as the beginning of a {{Glossary('tag')}}</td></tr><tr class="odd"><td>&gt;</td><td><code>&amp;gt;</code></td><td>Interpreted as the ending of a {{Glossary('tag')}}</td></tr><tr class="even"><td>"</td><td><code>&amp;quot;</code></td><td>Interpreted as the beginning and end of an {{Glossary('attribute')}}'s value.</td></tr></tbody></table>

## Learn more

### Technical reference

- [Official list of character entities](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
