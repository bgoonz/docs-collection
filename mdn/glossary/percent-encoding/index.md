--- title: Percent-encoding slug: Glossary/percent-encoding tags: - Glossary - WebMechanics ---

**Percent-encoding** is a mechanism to encode 8-bit characters that have specific meaning in the context of {{Glossary("URL", "URLs")}}. It is sometimes called URL encoding. The encoding consists of substitution: A '%' followed by the hexadecimal representation of the ASCII value of the replace character.

Special characters needing encoding are: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, as well as `'%'` itself. Other characters don't need to be encoded, though they could.

<table><tbody><tr class="odd"><td><code>':'</code></td><td><code>'/'</code></td><td><code>'?'</code></td><td><code>'#'</code></td><td><code>'['</code></td><td><code>']'</code></td><td><code>'@'</code></td><td><code>'!'</code></td><td><code>'$'</code></td><td><code>'&amp;'</code></td><td><code>"'"</code></td><td><code>'('</code></td><td><code>')'</code></td><td><code>'*'</code></td><td><code>'+'</code></td><td><code>','</code></td><td><code>';'</code></td><td><code>'='</code></td><td><code>'%'</code></td><td><code>' '</code></td></tr><tr class="even"><td><code>%3A</code></td><td><code>%2F</code></td><td><code>%3F</code></td><td><code>%23</code></td><td><code>%5B</code></td><td><code>%5D</code></td><td><code>%40</code></td><td><code>%21</code></td><td><code>%24</code></td><td><code>%26</code></td><td><code>%27</code></td><td><code>%28</code></td><td><code>%29</code></td><td><code>%2A</code></td><td><code>%2B</code></td><td><code>%2C</code></td><td><code>%3B</code></td><td><code>%3D</code></td><td><code>%25</code></td><td><code>%20</code> or <code>+</code></td></tr></tbody></table>

Depending on the context, the character `' '` is translated to a `'+'` (like in the percent-encoding version used in an `application/x-www-form-urlencoded` message), or in `'%20'` like on URLs.

## Learn more

### General knowledge

- Definition of [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in Wikipedia.

### Technical knowledge

- {{RFC(3986)}}, section 2.1, where this encoding is defined.
