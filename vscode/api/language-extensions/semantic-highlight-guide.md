# Semantic Highlight Guide

Semantic highlighting is an addition to syntax highlighting as described in the [Syntax Highlight Guide](/api/language-extensions/syntax-highlight-guide). Visual Studio Code uses TextMate grammars as the main tokenization engine. TextMate grammars work on a single file as input and break it up based on lexical rules expressed in regular expressions.

Semantic tokenization allows language servers to provide additional token information based on the language server’s knowledge on how to resolve symbols in the context of a project. Themes can opt in to use semantic tokens to improve and refine the syntax highlighting from grammars. The editor applies the highlighting from semantic tokens on top of the highlighting from grammars.

Here’s an example of what semantic highlighting can add:

Without semantic highlighting:

![without semantic highlighting](images/semantic-highlighting/no-semantic-highlighting.png)

With semantic highlighting:

![with semantic highlighting](images/semantic-highlighting/with-semantic-highlighting.png)

Notice the color differences based on language service symbol understanding:

- line 10: `languageModes` is colored as a parameter
- line 11: `Range` and `Position` are colored as classes and `document` as a parameter.
- line 13: `getFoldingRanges` is colored as a function.

## Semantic token provider

To implement semantic highlighting, language extensions can register a `semantic token provider` by document language and/or file name. The editor will make requests to the providers when semantic tokens are needed.

    const tokenTypes = ['class', 'interface', 'enum', 'function', 'variable'];
    const tokenModifiers = ['declaration', 'documentation'];
    const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

    const provider: vscode.DocumentSemanticTokensProvider = {
      provideDocumentSemanticTokens(document: vscode.TextDocument): vscode.ProviderResult<vscode.SemanticTokens> {
        // analyze the document and return semantic tokens

        const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
        // on line 1, characters 1-5 are a class declaration
        tokensBuilder.push(
          new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 5)),
          'class',
          ['declaration'],
        );
        return tokensBuilder.build();
      }
    };

    const selector = { language: 'java', scheme: 'file' }; // register for all Java documents from the local file system

    vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);

The semantic token provider API comes in two flavors to accommodate a language server’s capabilities:

- `DocumentSemanticTokensProvider` - Always takes a full document as input.

  - `provideDocumentSemanticTokens` - Provides all tokens of a document.
  - `provideDocumentSemanticTokensEdits`- Provides all tokens of a document as a delta to the previous response.

- `DocumentRangeSemanticTokensProvider` - Works only on a range.

  - `provideDocumentRangeSemanticTokens` - Provides all tokens of a document range.

Each token returned by the provider comes with a classification that consists of a token type, any number of token modifiers, and a token language.

As seen in the example above, the provider names the types and modifiers it’s going to use in a `SemanticTokensLegend`. That allows the `provide` APIs to return token types and modifies as an index to the legend.

## Semantic token classification

The output of a semantic token provider consists of tokens. Each token has a range and a token classification that describes what kind of syntax element the token represents. Optionally, the classification can also name a language, if the token is part of an embedded language.

To describe the kind of syntax element, semantic token types and modifiers are used. This information is similar to the TextMate scopes described in the [Syntax Highlight Guide](/api/language-extensions/syntax-highlight-guide), but we wanted to come up with a dedicated and cleaner classification system.

VS Code comes with a set of standard semantic token types and modifiers for all semantic token providers to use. Still, semantic token providers are free to define new types and modifiers and create a subtype of the standard types.

### Standard token types and modifiers

The standard types and modifiers cover common concepts used by many languages. While each language might use a different terminology for some types and modifiers, by adhering to the standard classifications, it will be possible for theme authors to define theming rules that work across languages.

These are the standard semantic token types and semantic token modifiers predefined by VS Code:

Standard token types:

<table style="width:99%;"><colgroup><col style="width: 47%" /><col style="width: 52%" /></colgroup><thead><tr class="header"><th>ID</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>namespace</code></td><td>For identifiers that declare or reference a namespace, module, or package.</td></tr><tr class="even"><td><code>class</code></td><td>For identifiers that declare or reference a class type.</td></tr><tr class="odd"><td><code>enum</code></td><td>For identifiers that declare or reference an enumeration type.</td></tr><tr class="even"><td><code>interface</code></td><td>For identifiers that declare or reference an interface type.</td></tr><tr class="odd"><td><code>struct</code></td><td>For identifiers that declare or reference a struct type.</td></tr><tr class="even"><td><code>typeParameter</code></td><td>For identifiers that declare or reference a type parameter.</td></tr><tr class="odd"><td><code>type</code></td><td>For identifiers that declare or reference a type that is not covered above.</td></tr><tr class="even"><td><code>parameter</code></td><td>For identifiers that declare or reference a function or method parameters.</td></tr><tr class="odd"><td><code>variable</code></td><td>For identifiers that declare or reference a local or global variable.</td></tr><tr class="even"><td><code>property</code></td><td>For identifiers that declare or reference a member property, member field, or member variable.</td></tr><tr class="odd"><td><code>enumMember</code></td><td>For identifiers that declare an enumeration property, constant, or member.</td></tr><tr class="even"><td><code>event</code></td><td>For identifiers that declare an event property.</td></tr><tr class="odd"><td><code>function</code></td><td>For identifiers that declare a function.</td></tr><tr class="even"><td><code>method</code></td><td>For identifiers that declare a member function or method.</td></tr><tr class="odd"><td><code>macro</code></td><td>For identifiers that declare a macro.</td></tr><tr class="even"><td><code>label</code></td><td>For identifiers that declare a label.</td></tr><tr class="odd"><td><code>comment</code></td><td>For tokens that represent a comment.</td></tr><tr class="even"><td><code>string</code></td><td>For tokens that represent a string literal.</td></tr><tr class="odd"><td><code>keyword</code></td><td>For tokens that represent a language keyword.</td></tr><tr class="even"><td><code>number</code></td><td>For tokens that represent a number literal.</td></tr><tr class="odd"><td><code>regexp</code></td><td>For tokens that represent a regular expression literal.</td></tr><tr class="even"><td><code>operator</code></td><td>For tokens that represent an operator.</td></tr></tbody></table>

Standard token modifiers:

<table><thead><tr class="header"><th>ID</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>declaration</code></td><td>For declarations of symbols.</td></tr><tr class="even"><td><code>definition</code></td><td>For definitions of symbols, for example, in header files.</td></tr><tr class="odd"><td><code>readonly</code></td><td>For readonly variables and member fields (constants).</td></tr><tr class="even"><td><code>static</code></td><td>For class members (static members).</td></tr><tr class="odd"><td><code>deprecated</code></td><td>For symbols that should no longer be used.</td></tr><tr class="even"><td><code>abstract</code></td><td>For types and member functions that are abstract.</td></tr><tr class="odd"><td><code>async</code></td><td>For functions that are marked async.</td></tr><tr class="even"><td><code>modification</code></td><td>For variable references where the variable is assigned to.</td></tr><tr class="odd"><td><code>documentation</code></td><td>For occurrences of symbols in documentation.</td></tr><tr class="even"><td><code>defaultLibrary</code></td><td>For symbols that are part of the standard library.</td></tr></tbody></table>

Along with the standard types and modifiers, VS Code defines a mapping of types and modifiers to similar TextMate scopes. That’s covered in the section [Semantic Token Scope Map](#semantic-token-scope-map).

### Custom token types and modifiers

If necessary, extensions can declare new types and modifiers or create sub types of existing types through the `semanticTokenTypes` and `semanticTokenModifiers` contribution points in their extension’s `package.json`:

    {
      "contributes": {
        "semanticTokenTypes": [{
          "id": "templateType",
          "superType": "type",
          "description": "A template type."
        }],
        "semanticTokenModifiers": [{
          "id": "native",
          "description": "Annotates a symbol that is implemented natively"
        }]
      }
    }

In the example above, an extension declares a new type `templateType` and a new modifier `native`. By naming `type` as the super type, the new type will inherit the styling rules that have already been defined for `type`.

Along with custom token types, extensions can define how these are mapped to TextMate scopes. This is described in the [Custom Mappings](#custom-textmate-scope-mappings) section.

## Enablement of semantic highlighting

Whether semantic tokens are computed and highlighted is decided by the setting `editor.semanticHighlighting.enabled`. It can have values `true`, `false`, and `configuredByTheme`.

- `true` and `false` turn semantic highlighting on or off for all themes.
- `configuredByTheme` is the default and lets each theme control whether semantic highlighting is enabled or not. All the themes that ship with VS Code (for example, the “Dark+” default) have semantic highlighting enabled by default.

Language extensions that depend on semantic tokens can override the default for their language in their `package.json`:

    {
      "configurationDefaults": {
        "[languageId]": {
          "editor.semanticHighlighting.enabled": true
        }
      }
    }

## Theming

Theming is about assigning colors and styles to tokens. Theming rules are specified in Color Theme files (JSON format). Users can also customize the theming rules in the user settings.

### Semantic coloring in Color Themes

Two new properties have been added to the Color Theme file format in order to support highlighting based on semantic tokens.

The property `semanticHighlighting` defines whether the theme is ready for highlighting using semantic tokens. It is false by default, but we encourage all themes to enable it. The property is used when the setting `editor.semanticHighlighting.enabled` is set to `configuredByTheme`.

The property `semanticTokenColors` allows a theme to define new coloring rules that match against the semantic token types and modifiers that are emitted by the semantic token providers.

    {
      "name": "Red Theme",
      "tokenColors": [
        {
          "scope": "comment",
          "settings": {
            "foreground": "#dd0000",
            "fontStyle": "italic"
          }
        }
      ],
      "semanticHighlighting": true,
      "semanticTokenColors": {
        "variable.readonly:java": "#ff0011"
      }
    }

`variable.readonly:java` is called a selector and has the form `(*|tokenType)(.tokenModifier)*(:tokenLanguage)?`.

The value describes the style if the rule matches. It is either a string, representing the foreground color, or an object, in the form `{ foreground: string, bold: boolean, italic: boolean, underline: boolean }` or `{ foreground: string, fontStyle: string }` as used for TextMate theme rule in `tokenColors`.

The foreground needs to follow a color format as described in [Color formats](/api/references/theme-color#color-formats). Transparency is not supported.

Here are other examples of selectors and styles:

- `"*.declaration": { "bold": true } // all declarations are bold`
- `"class:java": { "foreground": "#0f0", "italic": true } // classes in java`

If no rule matches or the theme has no `semanticTokenColors` section (but `semanticHighlighting` enabled), VS Code uses the [Semantic Token Scope Map](#semantic-token-scope-map) to evaluate a TextMate scope for the given semantic token. That scope is matched against the themes TextMate theming rules in `tokenColors`.

## Semantic token scope map

In order to make semantic highlighting work for themes that have not defined any specific semantic rules and to serve as fallback for custom token types and modifiers, VS Code maintains a map from semantic token selectors to TextMate scopes.

If a theme has semantic highlighting enabled, but does not contain a rule for the given semantic token, these TextMate scopes are used to find a TextMate theming rule instead.

### Predefined TextMate scope mappings

The following table lists the currently predefined mappings.

<table><thead><tr class="header"><th>Semantic Token Selector</th><th>Fallback TextMate Scope</th></tr></thead><tbody><tr class="odd"><td><code>namespace</code></td><td><code>entity.name.namespace</code></td></tr><tr class="even"><td><code>type</code></td><td><code>entity.name.type</code></td></tr><tr class="odd"><td><code>type.defaultLibrary</code></td><td><code>support.type</code></td></tr><tr class="even"><td><code>struct</code></td><td><code>storage.type.struct</code></td></tr><tr class="odd"><td><code>class</code></td><td><code>entity.name.type.class</code></td></tr><tr class="even"><td><code>class.defaultLibrary</code></td><td><code>support.class</code></td></tr><tr class="odd"><td><code>interface</code></td><td><code>entity.name.type.interface</code></td></tr><tr class="even"><td><code>enum</code></td><td><code>entity.name.type.enum</code></td></tr><tr class="odd"><td><code>function</code></td><td><code>entity.name.function</code></td></tr><tr class="even"><td><code>function.defaultLibrary</code></td><td><code>support.function</code></td></tr><tr class="odd"><td><code>method</code></td><td><code>entity.name.function.member</code></td></tr><tr class="even"><td><code>macro</code></td><td><code>entity.name.function.macro</code></td></tr><tr class="odd"><td><code>variable</code></td><td><code>variable.other.readwrite</code> , <code>entity.name.variable</code></td></tr><tr class="even"><td><code>variable.readonly</code></td><td><code>variable.other.constant</code></td></tr><tr class="odd"><td><code>variable.readonly.defaultLibrary</code></td><td><code>support.constant</code></td></tr><tr class="even"><td><code>parameter</code></td><td><code>variable.parameter</code></td></tr><tr class="odd"><td><code>property</code></td><td><code>variable.other.property</code></td></tr><tr class="even"><td><code>property.readonly</code></td><td><code>variable.other.constant.property</code></td></tr><tr class="odd"><td><code>enumMember</code></td><td><code>variable.other.enummember</code></td></tr><tr class="even"><td><code>event</code></td><td><code>variable.other.event</code></td></tr></tbody></table>

### Custom TextMate scope mappings

This map can be extended by extensions through the `semanticTokenScopes` contribution point in their `package.json`.

There are two use cases for extensions to do that:

- The extension that defines custom token types and token modifiers provides TextMate scopes as fallback when a theme does not define a theming rule for the added semantic token type or modifiers:

      {
        "contributes": {
          "semanticTokenScopes": [
            {
              "scopes": {
                "templateType": [ "entity.name.type.template" ]
              }
            }
          ]
        }
      }

- The provider of a TextMate grammar can describe the language-specific scopes. That helps with themes that contain language-specific theming rules.

      {
        "contributes": {
          "semanticTokenScopes": [
            {
              "language": "typescript",
              "scopes": {
                "property.readonly": ["variable.other.constant.property.ts"],
              }
            }
          ]
        }
      }

## Try it out

We have a [Semantic Tokens sample](https://github.com/microsoft/vscode-extension-samples/tree/main/semantic-tokens-sample) that illustrates how to create a semantic token provider.

The [scope inspector](/api/language-extensions/syntax-highlight-guide#scope-inspector) tool allows you to explore what semantic tokens are present in a source file and what theme rules they match to. To see semantic token, use a built-in theme (for example, Dark+) on a TypeScript file.
