# Extension Manifest

Every Visual Studio Code extension needs a manifest file `package.json` at the root of the extension directory structure.

## Fields

<table style="width:98%;"><colgroup><col style="width: 13%" /><col style="width: 1%" /><col style="width: 10%" /><col style="width: 74%" /></colgroup><thead><tr class="header"><th>Name</th><th style="text-align: center;">Required</th><th>Type</th><th>Details</th></tr></thead><tbody><tr class="odd"><td><code>name</code></td><td style="text-align: center;">Y</td><td><code>string</code></td><td>The name of the extension - should be all lowercase with no spaces.</td></tr><tr class="even"><td><code>version</code></td><td style="text-align: center;">Y</td><td><code>string</code></td><td><a href="https://semver.org/">SemVer</a> compatible version.</td></tr><tr class="odd"><td><code>publisher</code></td><td style="text-align: center;">Y</td><td><code>string</code></td><td>The <a href="/api/working-with-extensions/publishing-extension#publishers-and-personal-access-tokens">publisher name</a></td></tr><tr class="even"><td><code>engines</code></td><td style="text-align: center;">Y</td><td><code>object</code></td><td>An object containing at least the <code>vscode</code> key matching the versions of VS Code that the extension is <a href="/api/working-with-extensions/publishing-extension#visual-studio-code-compatibility">compatible</a> with. Cannot be <code>*</code>. For example: <code>^0.10.5</code> indicates compatibility with a minimum VS Code version of <code>0.10.5</code>.</td></tr><tr class="odd"><td><code>license</code></td><td style="text-align: center;"></td><td><code>string</code></td><td>Refer to <a href="https://docs.npmjs.com/files/package.json#license">npm’s documentation</a>. If you do have a <code>LICENSE</code> file in the root of your extension, the value for <code>license</code> should be <code>"SEE LICENSE IN &lt;filename&gt;"</code>.</td></tr><tr class="even"><td><code>displayName</code></td><td style="text-align: center;"></td><td><code>string</code></td><td>The display name for the extension used in the Marketplace.</td></tr><tr class="odd"><td><code>description</code></td><td style="text-align: center;"></td><td><code>string</code></td><td>A short description of what your extension is and does.</td></tr><tr class="even"><td><code>categories</code></td><td style="text-align: center;"></td><td><code>string[]</code></td><td>The categories you want to use for the extensions. Allowed values: <code>[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs, Data Science, Machine Learning, Visualization, Notebooks, Education]</code></td></tr><tr class="odd"><td><code>keywords</code></td><td style="text-align: center;"></td><td><code>array</code></td><td>An array of <strong>keywords</strong> to make it easier to find the extension. These are included with other extension <strong>Tags</strong> on the Marketplace. This list is currently limited to 5 keywords.</td></tr><tr class="even"><td><code>galleryBanner</code></td><td style="text-align: center;"></td><td><code>object</code></td><td>Helps format the Marketplace header to match your icon. See details below.</td></tr><tr class="odd"><td><code>preview</code></td><td style="text-align: center;"></td><td><code>boolean</code></td><td>Sets the extension to be flagged as a Preview in the Marketplace.</td></tr><tr class="even"><td><code>main</code></td><td style="text-align: center;"></td><td><code>string</code></td><td>The entry point to your extension.</td></tr><tr class="odd"><td><a href="/api/references/contribution-points"><code>contributes</code></a></td><td style="text-align: center;"></td><td><code>object</code></td><td>An object describing the extension’s <a href="/api/references/contribution-points">contributions</a>.</td></tr><tr class="even"><td><a href="/api/references/activation-events"><code>activationEvents</code></a></td><td style="text-align: center;"></td><td><code>array</code></td><td>An array of the <a href="/api/references/activation-events">activation events</a> for this extension.</td></tr><tr class="odd"><td><code>badges</code></td><td style="text-align: center;"></td><td><code>array</code></td><td>Array of <a href="/api/references/extension-manifest#approved-badges">approved</a> badges to display in the sidebar of the Marketplace’s extension page. Each badge is an object containing 3 properties: <code>url</code> for the badge’s image URL, <code>href</code> for the link users will follow when clicking the badge and <code>description</code>.</td></tr><tr class="even"><td><code>markdown</code></td><td style="text-align: center;"></td><td><code>string</code></td><td>Controls the Markdown rendering engine used in the Marketplace. Either <code>github</code> (default) or <code>standard</code>.</td></tr><tr class="odd"><td><code>qna</code></td><td style="text-align: center;"></td><td><code>marketplace</code> (default), <code>string</code>, <code>false</code></td><td>Controls the <strong>Q &amp; A</strong> link in the Marketplace. Set to <code>marketplace</code> to enable the default Marketplace Q &amp; A site. Set to a string to provide the URL of a custom Q &amp; A site. Set to <code>false</code> to disable Q &amp; A altogether.</td></tr><tr class="even"><td><code>dependencies</code></td><td style="text-align: center;"></td><td><code>object</code></td><td>Any runtime Node.js dependencies your extensions needs. Exactly the same as <a href="https://docs.npmjs.com/files/package.json#dependencies">npm’s <code>dependencies</code></a>.</td></tr><tr class="odd"><td><code>devDependencies</code></td><td style="text-align: center;"></td><td><code>object</code></td><td>Any development Node.js dependencies your extension needs. Exactly the same as <a href="https://docs.npmjs.com/files/package.json#devdependencies">npm’s <code>devDependencies</code></a>.</td></tr><tr class="even"><td><code>extensionPack</code></td><td style="text-align: center;"></td><td><code>array</code></td><td>An array with the ids of extensions bundled with this extension. These other extensions will be installed when the primary extension is installed. The id of an extension is always <code>${publisher}.${name}</code>. For example: <code>vscode.csharp</code>.</td></tr><tr class="odd"><td><code>extensionDependencies</code></td><td style="text-align: center;"></td><td><code>array</code></td><td>An array with the ids of extensions that this extension depends on. These other extensions will be installed when the primary extension is installed. The id of an extension is always <code>${publisher}.${name}</code>. For example: <code>vscode.csharp</code>.</td></tr><tr class="even"><td><code>extensionKind</code></td><td style="text-align: center;"></td><td><code>array</code></td><td>An array that indicates where the extension should run in remote configurations. Values are <code>ui</code> (run locally), <code>workspace</code> (run on remote machine) or both, with the order setting the preference. For example: <code>[ui, workspace]</code> indicates the extension can run in either location but prefers to run on the local machine.</td></tr><tr class="odd"><td><code>scripts</code></td><td style="text-align: center;"></td><td><code>object</code></td><td>Exactly the same as <a href="https://docs.npmjs.com/misc/scripts">npm’s <code>scripts</code></a> but with extra VS Code specific fields such as <a href="/api/working-with-extensions/publishing-extension#prepublish-step">vscode:prepublish</a> or <a href="/api/references/extension-manifest#extension-uninstall-hook">vscode:uninstall</a>.</td></tr><tr class="even"><td><code>icon</code></td><td style="text-align: center;"></td><td><code>string</code></td><td>The path to the icon of at least 128x128 pixels (256x256 for Retina screens).</td></tr></tbody></table>

Also check [npm’s `package.json` reference](https://docs.npmjs.com/files/package.json).

## Example

Here is a complete `package.json`

    {
      "name": "wordcount",
      "displayName": "Word Count",
      "version": "0.1.0",
      "publisher": "ms-vscode",
      "description": "Markdown Word Count Example - reports out the number of words in a Markdown file.",
      "author": {
        "name": "seanmcbreen"
      },
      "categories": ["Other"],
      "icon": "images/icon.png",
      "galleryBanner": {
        "color": "#C80000",
        "theme": "dark"
      },
      "activationEvents": ["onLanguage:markdown"],
      "engines": {
        "vscode": "^1.0.0"
      },
      "main": "./out/extension",
      "scripts": {
        "vscode:prepublish": "node ./node_modules/vscode/bin/compile",
        "compile": "node ./node_modules/vscode/bin/compile -watch -p ./"
      },
      "devDependencies": {
        "@types/vscode": "^0.10.x",
        "typescript": "^1.6.2"
      },
      "license": "SEE LICENSE IN LICENSE.txt",
      "bugs": {
        "url": "https://github.com/microsoft/vscode-wordcount/issues",
        "email": "smcbreen@microsoft.com"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/microsoft/vscode-wordcount.git"
      },
      "homepage": "https://github.com/microsoft/vscode-wordcount/blob/main/README.md"
    }

## Marketplace Presentation Tips

Here are some tips and recommendations to make your extension look great when displayed on the [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode).

Always use the latest `vsce` so `npm install -g vsce` to make sure you have it.

Have a `README.md` Markdown file in your extension’s root folder and we will include the contents in the body of the extension details (on the Marketplace). You can provide relative path image links in the `README.md`.

Here are a few examples:

1.  [Word Count](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount)
2.  [MD Tools](https://marketplace.visualstudio.com/items/seanmcbreen.MDTools)

Provide a good display name and description. This is important for the Marketplace and in product displays. These strings are also used for text search in VS Code and having relevant keywords will help a lot.

        "displayName": "Word Count",
        "description": "Markdown Word Count Example - reports out the number of words in a Markdown file.",

An icon and a contrasting banner color look great on the Marketplace page header. The `theme` attribute refers to the font to be used in the banner - `dark` or `light`.

    {
      "icon": "images/icon.png",
      "galleryBanner": {
        "color": "#C80000",
        "theme": "dark"
      }
    }

There are several optional links (`bugs`, `homepage`, `repository`) you can set and these are displayed under the **Resources** section of the Marketplace.

    {
      "license": "SEE LICENSE IN LICENSE.txt",
      "homepage": "https://github.com/microsoft/vscode-wordcount/blob/main/README.md",
      "bugs": {
        "url": "https://github.com/microsoft/vscode-wordcount/issues",
        "email": "smcbreen@microsoft.com"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/microsoft/vscode-wordcount.git"
      }
    }

<table><thead><tr class="header"><th>Marketplace Resources link</th><th>package.json attribute</th></tr></thead><tbody><tr class="odd"><td>Issues</td><td><code>bugs:url</code></td></tr><tr class="even"><td>Repository</td><td><code>repository:url</code></td></tr><tr class="odd"><td>Homepage</td><td><code>homepage</code></td></tr><tr class="even"><td>License</td><td><code>license</code></td></tr></tbody></table>

Set a `category` for your extension. Extensions in the same `category` are grouped together on the Marketplace which improves filtering and discovery.

> **Note:** Only use the values that make sense for your extension. Allowed values are `[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs, Data Science, Machine Learning, Visualization, Notebooks, Education]`. Use `Programming Languages` for general language features like syntax highlighting and code completions. The category `Language Packs` is reserved for display language extensions (for example, localized Bulgarian).

    {
      "categories": ["Linters", "Programming Languages", "Other"]
    }

### Approved Badges

Due to security concerns, we only allow badges from trusted services.

We allow badges from the following URL prefixes:

- api.bintray.com
- api.travis-ci.com
- api.travis-ci.org
- app.fossa.io
- badge.buildkite.com
- badge.fury.io
- badge.waffle.io
- badgen.net
- badges.frapsoft.com
- badges.gitter.im
- badges.greenkeeper.io
- cdn.travis-ci.com
- cdn.travis-ci.org
- ci.appveyor.com
- circleci.com
- cla.opensource.microsoft.com
- codacy.com
- codeclimate.com
- codecov.io
- coveralls.io
- david-dm.org
- deepscan.io
- dev.azure.com
- docs.rs
- flat.badgen.net
- gemnasium.com
- githost.io
- github.com (from Workflows only)
- gitlab.com
- godoc.org
- goreportcard.com
- img.shields.io
- isitmaintained.com
- marketplace.visualstudio.com
- nodesecurity.io
- opencollective.com
- snyk.io
- travis-ci.com
- travis-ci.org
- visualstudio.com
- vsmarketplacebadge.apphb.com
- www.bithound.io
- www.versioneye.com

If you have other badges you would like to use, please open a GitHub [issue](https://github.com/microsoft/vscode/issues) and we’re happy to take a look.

## Combining Extension Contributions

The `yo code` generator lets you easily package TextMate themes, colorizers and snippets and create new extensions. When the generator is run, it creates a complete standalone extension package for each option. However, it is often more convenient to have a single extension which combines multiple contributions. For example, if you are adding support for a new language, you’d like to provide users with both the language definition with colorization and also snippets and perhaps even debugging support.

To combine extension contributions, edit an existing extension manifest `package.json` and add the new contributions and associated files.

Below is an extension manifest which includes a LaTex language definition (language identifier and file extensions), colorization (`grammar`), and snippets.

    {
      "name": "language-latex",
      "description": "LaTex Language Support",
      "version": "0.0.1",
      "publisher": "someone",
      "engines": {
        "vscode": "0.10.x"
      },
      "categories": ["Programming Languages", "Snippets"],
      "contributes": {
        "languages": [
          {
            "id": "latex",
            "aliases": ["LaTeX", "latex"],
            "extensions": [".tex"]
          }
        ],
        "grammars": [
          {
            "language": "latex",
            "scopeName": "text.tex.latex",
            "path": "./syntaxes/latex.tmLanguage.json"
          }
        ],
        "snippets": [
          {
            "language": "latex",
            "path": "./snippets/snippets.json"
          }
        ]
      }
    }

Notice that the extension manifest `categories` attribute now includes both `Programming Languages` and `Snippets` for easy discovery and filtering on the Marketplace.

> **Tip:** Make sure your merged contributions are using the same identifiers. In the example above, all three contributions are using “latex” as the language identifier. This lets VS Code know that the colorizer (`grammar`) and snippets are for the LaTeX language and will be active when editing LaTeX files.

## Extension Packs

You can bundle separate extensions together in **Extension Packs**. An Extension Pack is a set of extensions that will be installed together. This enables easily sharing your favorite extensions with other users or creating a set of extensions for a particular scenario like PHP development to help a PHP developer get started with VS Code quickly.

An Extension Pack bundles other extensions using the `extensionPack` attribute inside the `package.json` file.

For example, here is an Extension Pack for PHP that includes a debugger, language service, and formatter:

    {
      "extensionPack": [
        "felixfbecker.php-debug",
        "felixfbecker.php-intellisense",
        "Kasik96.format-php"
      ]
    }

When installing an Extension Pack, VS Code will now also install its extension dependencies.

Extension packs should be categorized in the `Extension Packs` Marketplace category:

    {
      "categories": ["Extension Packs"]
    }

To create an extension pack, you can use the `yo code` Yeoman generator and choose the **New Extension Pack** option. There is an option to seed the pack with the set of extensions you have currently installed in your VS Code instance. In this way, you can easily create an Extension Pack with your favorite extensions, publish it to the Marketplace, and share it with others.

An Extension Pack should not have any functional dependencies with its bundled extensions and the bundled extensions should be manageable independent of the pack. If an extension has a dependency on another extension, that dependency should be declared with the `extensionDependencies` attribute.

### Extension uninstall hook

If your extension has some clean up to be done when it is uninstalled from VS Code, you can register a `node` script to the uninstall hook `vscode:uninstall` under `scripts` section in extension’s package.json.

    {
      "scripts": {
        "vscode:uninstall": "node ./out/src/lifecycle"
      }
    }

This script gets executed when the extension is completely uninstalled from VS Code which is when VS Code is restarted (shutdown and start) after the extension is uninstalled.

**Note**: Only Node.js scripts are supported.

## Useful Node modules

There are several Node.js modules available on npmjs to help with writing VS Code extensions. You can include these in your extension’s `dependencies` section.

- [vscode-nls](https://www.npmjs.com/package/vscode-nls) - Support for externalization and localization.
- [vscode-uri](https://www.npmjs.com/package/vscode-uri) - The URI implementation used by VS Code and its extensions.
- [jsonc-parser](https://www.npmjs.com/package/jsonc-parser) - A scanner and fault tolerant parser to process JSON with or without comments.
- [request-light](https://www.npmjs.com/package/request-light) - A light weight Node.js request library with proxy support
- [vscode-extension-telemetry](https://www.npmjs.com/package/vscode-extension-telemetry) - Consistent telemetry reporting for VS Code extensions.
- [vscode-languageclient](https://www.npmjs.com/package/vscode-languageclient) - Easily integrate language servers adhering to the [language server protocol](https://microsoft.github.io/language-server-protocol).

## Next steps

To learn more about VS Code extensibility model, try these topics:

- [Contribution Points](/api/references/contribution-points) - VS Code contribution points reference
- [Activation Events](/api/references/activation-events) - VS Code activation events reference
- [Extension Marketplace](/docs/editor/extension-marketplace) - Read more about the VS Code Extension Marketplace
