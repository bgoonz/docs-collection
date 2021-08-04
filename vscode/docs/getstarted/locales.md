# Display Language

Visual Studio Code ships by default with English as the display language and other [languages](#available-locales) rely on Language Pack [extensions](/docs/editor/extension-marketplace.md) available from the [Marketplace](https://marketplace.visualstudio.com/search?target=VSCode&category=Language%20Packs&sortBy=Downloads).

VS Code detects the operating system’s UI language and will prompt you to install the appropriate Language Pack, if available on the Marketplace. Below is an example recommending a Simplified Chinese Language Pack:

![Language Pack recommendation](images/locales/lang-pack-recommendation.png)

After installing the Language Pack extension and following the prompt to restart, VS Code will use the Language Pack matching your operating system’s UI language.

## Changing the Display Language

You can also override the default UI language by explicitly setting the VS Code display language using the **Configure Display Language** command.

Press `kb(workbench.action.showCommands)` to bring up the **Command Palette** then start typing “display” to filter and display the **Configure Display Language** command.

![configure display language command](images/locales/configure-language-command.png)

Press `kbstyle(Enter)` and a list of installed languages by [locale](#available-locales) is displayed, with the current `locale` highlighted.

![installed languages list](images/locales/installed-languages-list.png)

Use the **Install additional languages…** option to install more Language Packs from the [Marketplace](https://marketplace.visualstudio.com/search?target=VSCode&category=Language%20Packs&sortBy=Downloads), or select a different `locale` from the list. Changing the `locale` requires a restart of VS Code. You will be prompted to restart when you select a `locale`.

The **Configure Display Language** command writes to the Runtime Configuration Arguments file `argv.json` in your user VS Code folder (`.vscode`).

The `locale` can also be changed by editing the `argv.json` file directly (**Preferences: Configure Runtime Arguments**) and restarting VS Code.

## Available locales

<table><thead><tr class="header"><th>Display Language</th><th>Locale</th></tr></thead><tbody><tr class="odd"><td>English (US)</td><td><code>en</code></td></tr><tr class="even"><td>Simplified Chinese</td><td><code>zh-CN</code></td></tr><tr class="odd"><td>Traditional Chinese</td><td><code>zh-TW</code></td></tr><tr class="even"><td>French</td><td><code>fr</code></td></tr><tr class="odd"><td>German</td><td><code>de</code></td></tr><tr class="even"><td>Italian</td><td><code>it</code></td></tr><tr class="odd"><td>Spanish</td><td><code>es</code></td></tr><tr class="even"><td>Japanese</td><td><code>ja</code></td></tr><tr class="odd"><td>Korean</td><td><code>ko</code></td></tr><tr class="even"><td>Russian</td><td><code>ru</code></td></tr><tr class="odd"><td>Bulgarian</td><td><code>bg</code></td></tr><tr class="even"><td>Hungarian</td><td><code>hu</code></td></tr><tr class="odd"><td>Portuguese (Brazil)</td><td><code>pt-br</code></td></tr><tr class="even"><td>Turkish</td><td><code>tr</code></td></tr></tbody></table>

## Marketplace Language Packs

As described above, VS Code ships with English as the default display language, but other languages are available through [Marketplace Language Packs](https://marketplace.visualstudio.com/search?target=VSCode&category=Language%20Packs&sortBy=Downloads).

You can search for Language Packs in the Extensions view (`kb(workbench.view.extensions)`) by typing the language you are looking for along with `category:"Language Packs"`.

![German Language Pack](images/locales/german-language-pack.png)

You can have multiple Language Packs installed and select the current display language with the **Configure Display Language** command.

## Setting the Language

If you want to use a specific language for a VS Code session, you can use the command-line switch `--locale` to specify a locale when you launch VS Code.

Below is an example of using the `--locale` command-line switch to set the VS Code display language to French:

    code . --locale=fr

**Note**: You must have the appropriate Language Pack installed for the language you specify with the command-line switch. If the matching Language Pack is not installed, VS Code will display English.

## Common questions

### Unable to write to file because the file is dirty

This notification may mean that your `argv.json` file wasn’t saved after a previous change. Check if there are any errors in the file (**Preferences: Configure Runtime Arguments**), make sure the file is saved, and try to install the Language Pack again.

### Can I contribute to a language pack’s translations?

Yes, the [Visual Studio Code Community Localization Project](https://aka.ms/vscodeloc) is open to anyone, where contributors can provide new translations, vote on existing translations, or suggest process improvements.
