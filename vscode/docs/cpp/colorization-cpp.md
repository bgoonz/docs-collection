# Enhanced colorization

The Visual Studio Code C/C++ extension now supports semantic colorization, when IntelliSense is enabled. Use of enhanced colorization is controlled by the C_Cpp.enhancedColorization setting. This setting is enabled by default.

    "C_Cpp.enhancedColorization": "Enabled"

## Themes

Colors can be associated using the existing support for theming and color customization in VS Code. See the [VS Code Themes documentation](/docs/getstarted/themes.md) for more information.

Colors are associated with [semantic tokens](https://code.visualstudio.com/api/extension-guides/color-theme#semantic-colors) as well as [TextMate scopes](https://macromates.com/manual/en/language_grammars#naming_conventions).

### C/C++ Themes Extension

We’ve created a set of VS Code themes that closely resemble the default Light and Dark themes in Visual Studio, and include colors for semantic tokens. These themes can be found [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-themes).

## IntelliSense Tokens and Scopes

<table style="width:98%;"><colgroup><col style="width: 30%" /><col style="width: 34%" /><col style="width: 34%" /></colgroup><thead><tr class="header"><th>Token</th><th style="text-align: center;">Semantic Token name</th><th style="text-align: center;">Fallback TextMate Scope</th></tr></thead><tbody><tr class="odd"><td>Class Template</td><td style="text-align: center;">templateType</td><td style="text-align: center;">entity.name.type.class.templated</td></tr><tr class="even"><td>Enumerator</td><td style="text-align: center;">enumMember</td><td style="text-align: center;">variable.other.enummember</td></tr><tr class="odd"><td>Event (C++/CLI)</td><td style="text-align: center;">event</td><td style="text-align: center;">variable.other.event</td></tr><tr class="even"><td>Function</td><td style="text-align: center;">function</td><td style="text-align: center;">entity.name.function</td></tr><tr class="odd"><td>Function Template</td><td style="text-align: center;">templateFunction</td><td style="text-align: center;">entity.name.function.templated</td></tr><tr class="even"><td>Generic Type (C++/CLI)</td><td style="text-align: center;">genericType</td><td style="text-align: center;">entity.name.type.class.generic</td></tr><tr class="odd"><td>Global Variable</td><td style="text-align: center;">variable.global</td><td style="text-align: center;">variable.other.global</td></tr><tr class="even"><td>Label</td><td style="text-align: center;">label</td><td style="text-align: center;">entity.name.label</td></tr><tr class="odd"><td>Local Variable</td><td style="text-align: center;">variable.local</td><td style="text-align: center;">variable.other.local</td></tr><tr class="even"><td>Macro</td><td style="text-align: center;">macro</td><td style="text-align: center;">entity.name.function.preprocessor</td></tr><tr class="odd"><td>Member Field</td><td style="text-align: center;">property</td><td style="text-align: center;">variable.other.property</td></tr><tr class="even"><td>Member Function</td><td style="text-align: center;">member</td><td style="text-align: center;">entity.name.function.member</td></tr><tr class="odd"><td>Namespace</td><td style="text-align: center;">namespace</td><td style="text-align: center;">entity.name.namespace</td></tr><tr class="even"><td>New / Delete</td><td style="text-align: center;">newOperator</td><td style="text-align: center;">keyword.operator.new</td></tr><tr class="odd"><td>Operator Overload Function</td><td style="text-align: center;">operatorOverload</td><td style="text-align: center;">entity.name.function.operator</td></tr><tr class="even"><td>Operator Overload Member</td><td style="text-align: center;">memberOperatorOverload</td><td style="text-align: center;">entity.name.function.operator.member</td></tr><tr class="odd"><td>Parameter</td><td style="text-align: center;">parameter</td><td style="text-align: center;">variable.parameter</td></tr><tr class="even"><td>Property (C++/CLI)</td><td style="text-align: center;">cliProperty</td><td style="text-align: center;">variable.other.property.cli</td></tr><tr class="odd"><td>Reference Type (C++/CLI)</td><td style="text-align: center;">referenceType</td><td style="text-align: center;">entity.name.type.class.reference</td></tr><tr class="even"><td>Static Member Field</td><td style="text-align: center;">property.static</td><td style="text-align: center;">variable.other.property.static</td></tr><tr class="odd"><td>Static Member Function</td><td style="text-align: center;">member.static</td><td style="text-align: center;">entity.name.function.member.static</td></tr><tr class="even"><td>Type</td><td style="text-align: center;">type</td><td style="text-align: center;">entity.name.type</td></tr><tr class="odd"><td>User-Defined Literal - Number</td><td style="text-align: center;">numberLiteral</td><td style="text-align: center;">entity.name.operator.custom-literal.number</td></tr><tr class="even"><td>User-Defined Literal - Raw</td><td style="text-align: center;">customLiteral</td><td style="text-align: center;">entity.name.operator.custom-literal</td></tr><tr class="odd"><td>User-Defined Literal - String</td><td style="text-align: center;">stringLiteral</td><td style="text-align: center;">entity.name.operator.custom-literal.string</td></tr><tr class="even"><td>Value Type (C++/CLI)</td><td style="text-align: center;">valueType</td><td style="text-align: center;">entity.name.type.class.value</td></tr></tbody></table>

## Customizing Colors in Settings

Colors can also be overridden globally, in settings:

        "editor.semanticTokenColorCustomizations": {
            "rules": {
                "templateType": {
                    "foreground": "#ff0000",
                    "fontStyle": "italic bold underline"
                }
            }
        }

Or, overridden on a per-theme basis:

        "editor.semanticTokenColorCustomizations": {
            "[Visual Studio Dark]": {
                "rules": {
                    "templateType": {
                        "foreground": "#ff0000",
                        "fontStyle": "italic bold underline"
                    }
                }
            }
        }
