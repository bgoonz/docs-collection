--- title: Origin slug: Glossary/Origin tags: - Glossary - Security - WebMechanics - origin ---

Web content's **origin** is defined by the _scheme_ (protocol), _hostname_ (domain), and _port_ of the {{Glossary("URL")}} used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.

Some operations are restricted to same-origin content, and this restriction can be lifted using {{Glossary("CORS")}}.

## Examples of same origin

<table><tbody><tr class="odd"><td><code>http://example.com/app1/index.html</code><br />
<code>http://example.com/app2/index.html</code></td><td>same origin because same scheme (<code>http</code>) and hostname (<code>example.com</code>)</td></tr><tr class="even"><td><code>http://Example.com:80</code><br />
<code>http://example.com</code></td><td>same origin because a server delivers HTTP content through port 80 by default</td></tr></tbody></table>

## Examples of different origin

<table><tbody><tr class="odd"><td><code>http://example.com/app1</code><br />
<code>https://example.com/app2</code></td><td>different schemes</td></tr><tr class="even"><td><code>http://example.com</code><br />
<code>http://www.example.com</code><br />
<code>http://myapp.example.com</code></td><td>different hostnames</td></tr><tr class="odd"><td><code>http://example.com</code><br />
<code>http://example.com:8080</code></td><td>different ports</td></tr></tbody></table>

## See also

- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [HTML specification: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)

{{QuickLinksWithSubpages("/en-US/docs/Glossary")}}
