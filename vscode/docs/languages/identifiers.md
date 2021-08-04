# Language Identifiers

In Visual Studio Code, each [language mode](/docs/languages/overview.md#changing-the-language-for-the-selected-file) has a unique specific language identifier. That identifier is rarely seen by the user except in the settings, for example, when associating file extensions to a language:

        "files.associations": {
            "*.myphp": "php"
        }

Note that casing matters for exact identifier matching (‘Markdown’ != ‘markdown’)

The language identifier becomes essential for VS Code extension developers when adding new language capabilities or when replacing a language support.

Every language defines its _id_ through the `languages` configuration point in the extension’s `package.json` file:

        "languages": [{
            "id": "java",
            "extensions": [ ".java", ".jav" ],
            "aliases": [ "Java", "java" ]
        }]

Language supports are added using the language identifier:

        "grammars": [{
            "language": "groovy",
            "scopeName": "source.groovy",
            "path": "./syntaxes/Groovy.tmLanguage.json"
        }],
        "snippets": [{
            "language": "groovy",
            "path": "./snippets/groovy.json"
        }]

    languages.registerCompletionItemProvider('php', new PHPCompletionItemProvider(), '.', '$')

## New identifier guidelines

When defining a new language identifier, use the following guidelines:

- Use the lowercased programming language name.
- Search for other extensions in the Marketplace to find out if a language identifier has already been used.

## Known language identifiers

The following table lists known language identifiers:

<table><thead><tr class="header"><th>Language</th><th>Identifier</th></tr></thead><tbody><tr class="odd"><td>ABAP</td><td><code>abap</code></td></tr><tr class="even"><td>Windows Bat</td><td><code>bat</code></td></tr><tr class="odd"><td>BibTeX</td><td><code>bibtex</code></td></tr><tr class="even"><td>Clojure</td><td><code>clojure</code></td></tr><tr class="odd"><td>Coffeescript</td><td><code>coffeescript</code></td></tr><tr class="even"><td>C</td><td><code>c</code></td></tr><tr class="odd"><td>C++</td><td><code>cpp</code></td></tr><tr class="even"><td>C#</td><td><code>csharp</code></td></tr><tr class="odd"><td>CSS</td><td><code>css</code></td></tr><tr class="even"><td>Diff</td><td><code>diff</code></td></tr><tr class="odd"><td>Dockerfile</td><td><code>dockerfile</code></td></tr><tr class="even"><td>F#</td><td><code>fsharp</code></td></tr><tr class="odd"><td>Git</td><td><code>git-commit</code> and <code>git-rebase</code></td></tr><tr class="even"><td>Go</td><td><code>go</code></td></tr><tr class="odd"><td>Groovy</td><td><code>groovy</code></td></tr><tr class="even"><td>Handlebars</td><td><code>handlebars</code></td></tr><tr class="odd"><td>Haml</td><td><code>haml</code></td></tr><tr class="even"><td>HTML</td><td><code>html</code></td></tr><tr class="odd"><td>Ini</td><td><code>ini</code></td></tr><tr class="even"><td>Java</td><td><code>java</code></td></tr><tr class="odd"><td>JavaScript</td><td><code>javascript</code></td></tr><tr class="even"><td>JavaScript React</td><td><code>javascriptreact</code>, <code>jsx</code></td></tr><tr class="odd"><td>JSON</td><td><code>json</code></td></tr><tr class="even"><td>JSON with Comments</td><td><code>jsonc</code></td></tr><tr class="odd"><td>LaTeX</td><td><code>latex</code></td></tr><tr class="even"><td>Less</td><td><code>less</code></td></tr><tr class="odd"><td>Lua</td><td><code>lua</code></td></tr><tr class="even"><td>Makefile</td><td><code>makefile</code></td></tr><tr class="odd"><td>Markdown</td><td><code>markdown</code></td></tr><tr class="even"><td>Objective-C</td><td><code>objective-c</code></td></tr><tr class="odd"><td>Objective-C++</td><td><code>objective-cpp</code></td></tr><tr class="even"><td>Perl</td><td><code>perl</code> and <code>perl6</code></td></tr><tr class="odd"><td>PHP</td><td><code>php</code></td></tr><tr class="even"><td>Plain Text</td><td><code>plaintext</code></td></tr><tr class="odd"><td>PowerShell</td><td><code>powershell</code></td></tr><tr class="even"><td>Pug</td><td><code>jade</code>, <code>pug</code></td></tr><tr class="odd"><td>Python</td><td><code>python</code></td></tr><tr class="even"><td>R</td><td><code>r</code></td></tr><tr class="odd"><td>Razor (cshtml)</td><td><code>razor</code></td></tr><tr class="even"><td>Ruby</td><td><code>ruby</code></td></tr><tr class="odd"><td>Rust</td><td><code>rust</code></td></tr><tr class="even"><td>SCSS</td><td><code>scss</code> (syntax using curly brackets), <code>sass</code> (indented syntax)</td></tr><tr class="odd"><td>ShaderLab</td><td><code>shaderlab</code></td></tr><tr class="even"><td>Shell Script (Bash)</td><td><code>shellscript</code></td></tr><tr class="odd"><td>Slim</td><td><code>slim</code></td></tr><tr class="even"><td>SQL</td><td><code>sql</code></td></tr><tr class="odd"><td>Stylus</td><td><code>stylus</code></td></tr><tr class="even"><td>Swift</td><td><code>swift</code></td></tr><tr class="odd"><td>TypeScript</td><td><code>typescript</code></td></tr><tr class="even"><td>TypeScript React</td><td><code>typescriptreact</code></td></tr><tr class="odd"><td>TeX</td><td><code>tex</code></td></tr><tr class="even"><td>Visual Basic</td><td><code>vb</code></td></tr><tr class="odd"><td>Vue</td><td><code>vue</code></td></tr><tr class="even"><td>Vue HTML</td><td><code>vue-html</code></td></tr><tr class="odd"><td>XML</td><td><code>xml</code></td></tr><tr class="even"><td>XSL</td><td><code>xsl</code></td></tr><tr class="odd"><td>YAML</td><td><code>yaml</code></td></tr></tbody></table>
