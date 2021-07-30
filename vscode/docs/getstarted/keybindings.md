Key Bindings for Visual Studio Code
===================================

Visual Studio Code lets you perform most tasks directly from the keyboard. This page lists out the default bindings (keyboard shortcuts) and describes how you can update them.

> **Note:** If you visit this page on a Mac, you will see the key bindings for the Mac. If you visit using Windows or Linux, you will see the keys for that platform. If you need the key bindings for another platform, hover your mouse over the key you are interested in.

Keyboard Shortcuts editor
-------------------------

Visual Studio Code provides a rich and easy keyboard shortcuts editing experience using **Keyboard Shortcuts** editor. It lists all available commands with and without keybindings and you can easily change / remove / reset their keybindings using the available actions. It also has a search box on the top that helps you in finding commands or keybindings. You can open this editor by going to the menu under **File** &gt; **Preferences** &gt; **Keyboard Shortcuts**. (**Code** &gt; **Preferences** &gt; **Keyboard Shortcuts** on macOS)

![Keyboard Shortcuts](images/keybinding/keyboard-shortcuts.gif)

Most importantly, you can see keybindings according to your keyboard layout. For example, key binding `kbstyle(Cmd+\)` in US keyboard layout will be shown as `kbstyle(Ctrl+Shift+Alt+Cmd+7)` when layout is changed to German. The dialog to enter key binding will assign the correct and desired key binding as per your keyboard layout.

For doing more advanced keyboard shortcut customization, read [Advanced Customization](/docs/getstarted/keybindings.md#advanced-customization).

Keymap extensions
-----------------

Keyboard shortcuts are vital to productivity and changing keyboarding habits can be tough. To help with this, **File** &gt; **Preferences** &gt; **Keymaps** shows you a list of popular keymap extensions. These extensions modify the VS Code shortcuts to match those of other editors so you don’t need to learn new keyboard shortcuts. There is also a [Keymaps category](https://marketplace.visualstudio.com/search?target=VSCode&category=Keymaps&sortBy=Downloads) of extensions in the Marketplace.

> Tip: Click on an extension tile above to read the description and reviews to decide which extension is best for you. See more in the [Marketplace](https://marketplace.visualstudio.com/vscode).

Keyboard Shortcuts Reference
----------------------------

We also have a printable version of these keyboard shortcuts. **Help** &gt; **Keyboard Shortcut Reference** displays a condensed PDF version suitable for printing as an easy reference.

Below are links to the three platform-specific versions (US English keyboard):

-   [Windows](https://go.microsoft.com/fwlink/?linkid=832145)
-   [macOS](https://go.microsoft.com/fwlink/?linkid=832143)
-   [Linux](https://go.microsoft.com/fwlink/?linkid=832144)

Detecting keybinding conflicts
------------------------------

If you have many extensions installed or you have [customized](/docs/getstarted/keybindings.md#advanced-customization) your keyboard shortcuts, you can sometimes have keybinding conflicts where the same keyboard shortcut is mapped to several commands. This can result in confusing behavior, especially if different keybindings are going in and out of scope as you move around the editor.

The **Keyboard Shortcuts** editor has a context menu command **Show Same Keybindings**, which will filter the keybindings based on a keyboard shortcut to display conflicts.

![show keybinding conflicts menu](images/keybinding/show-conflicts-menu.png)

Pick a command with the keybinding you think is overloaded and you can see if multiple commands are defined, the source of the keybindings and when they are active.

![show keybinding conflicts result](images/keybinding/show-conflicts-result.png)

Troubleshooting keybindings
---------------------------

To troubleshoot keybindings problems, you can execute the command **Developer: Toggle Keyboard Shortcuts Troubleshooting**. This will activate logging of dispatched keyboard shortcuts and will open an output panel with the corresponding log file.

You can then press your desired keybinding and check what keyboard shortcut VS Code detects and what command is invoked.

For example, when pressing `cmd+/` in a code editor on macOS, the logging output would be:

    [KeybindingService]: / Received  keydown event - modifiers: [meta], code: MetaLeft, keyCode: 91, key: Meta
    [KeybindingService]: | Converted keydown event - modifiers: [meta], code: MetaLeft, keyCode: 57 ('Meta')
    [KeybindingService]: \ Keyboard event cannot be dispatched.
    [KeybindingService]: / Received  keydown event - modifiers: [meta], code: Slash, keyCode: 191, key: /
    [KeybindingService]: | Converted keydown event - modifiers: [meta], code: Slash, keyCode: 85 ('/')
    [KeybindingService]: | Resolving meta+[Slash]
    [KeybindingService]: \ From 2 keybinding entries, matched editor.action.commentLine, when: editorTextFocus && !editorReadonly, source: built-in.

The first keydown event is for the `MetaLeft` key (`cmd`) and cannot be dispatched. The second keydown event is for the `Slash` key (`/`) and is dispatched as `meta+[Slash]`. There were two keybinding entries mapped from `meta+[Slash]` and the one that matched was for the command `editor.action.commentLine`, which has the `when` condition `editorTextFocus && !editorReadonly` and is a built-in keybinding entry.

Viewing modified keybindings
----------------------------

You can view any user modified keyboard shortcuts in VS Code in the **Keyboard Shortcuts** editor with the **Show User Keybindings** command in the **More Actions** (**…**) menu. This applies the `@source:user` filter to the **Keyboard Shortcuts** editor (**Source** is ‘User’).

![Default Keyboard Shortcuts](images/keybinding/user-keyboard-shortcuts.png)

Advanced customization
----------------------

All keyboard shortcuts in VS Code can be customized via the `keybindings.json` file.

-   To configure keyboard shortcuts through the JSON file, open **Keyboard Shortcuts** editor and select the **Open Keyboard Shortcuts (JSON)** button on the right of the editor title bar.
-   This will open your `keybindings.json` file where you can overwrite the [Default Keybindings](/docs/getstarted/keybindings.md#default-keybindings).

![Open Keyboard Shortcuts JSON button](images/keybinding/open-keyboard-shortcuts-json.png)

You can also open the `keybindings.json` file from the Command Palette (`kb(workbench.action.showCommands)`) with the **Preferences: Open Keyboard Shortcuts (JSON)** command.

Keyboard rules
--------------

Each rule consists of:

-   a `key` that describes the pressed keys.
-   a `command` containing the identifier of the command to execute.
-   an **optional** `when` clause containing a boolean expression that will be evaluated depending on the current **context**.

Chords (two separate keypress actions) are described by separating the two keypresses with a space. For example, `kbstyle(Ctrl+K Ctrl+C)`.

When a key is pressed:

-   the rules are evaluated from **bottom** to **top**.
-   the first rule that matches, both the `key` and in terms of `when`, is accepted.
-   no more rules are processed.
-   if a rule is found and has a `command` set, the `command` is executed.

The additional `keybindings.json` rules are appended at runtime to the bottom of the default rules, thus allowing them to overwrite the default rules. The `keybindings.json` file is watched by VS Code so editing it while VS Code is running will update the rules at runtime.

The keyboard shortcuts dispatching is done by analyzing a list of rules that are expressed in JSON. Here are some examples:

    // Keybindings that are active when the focus is in the editor
    { "key": "home",            "command": "cursorHome",                  "when": "editorTextFocus" },
    { "key": "shift+home",      "command": "cursorHomeSelect",            "when": "editorTextFocus" },

    // Keybindings that are complementary
    { "key": "f5",              "command": "workbench.action.debug.continue", "when": "inDebugMode" },
    { "key": "f5",              "command": "workbench.action.debug.start",    "when": "!inDebugMode" },

    // Global keybindings
    { "key": "ctrl+f",          "command": "actions.find" },
    { "key": "alt+left",        "command": "workbench.action.navigateBack" },
    { "key": "alt+right",       "command": "workbench.action.navigateForward" },

    // Global keybindings using chords (two separate keypress actions)
    { "key": "ctrl+k enter",    "command": "workbench.action.keepEditor" },
    { "key": "ctrl+k ctrl+w",   "command": "workbench.action.closeAllEditors" },

Accepted keys
-------------

The `key` is made up of modifiers and the key itself.

The following modifiers are accepted:

<table><thead><tr class="header"><th>Platform</th><th>Modifiers</th></tr></thead><tbody><tr class="odd"><td>macOS</td><td><code>kbstyle(Ctrl+)</code>, <code>kbstyle(Shift+)</code>, <code>kbstyle(Alt+)</code>, <code>kbstyle(Cmd+)</code></td></tr><tr class="even"><td>Windows</td><td><code>kbstyle(Ctrl+)</code>, <code>kbstyle(Shift+)</code>, <code>kbstyle(Alt+)</code>, <code>kbstyle(Win+)</code></td></tr><tr class="odd"><td>Linux</td><td><code>kbstyle(Ctrl+)</code>, <code>kbstyle(Shift+)</code>, <code>kbstyle(Alt+)</code>, <code>kbstyle(Meta+)</code></td></tr></tbody></table>

The following keys are accepted:

-   `kbstyle(f1-f19)`, `kbstyle(a-z)`, `kbstyle(0-9)`
-   `` kbstyle(`) ``, `kbstyle(-)`, `kbstyle(=)`, `kbstyle([)`, `kbstyle(])`, `kbstyle(\)`, `kbstyle(;)`, `kbstyle(')`, `kbstyle(,)`, `kbstyle(.)`, `kbstyle(/)`
-   `kbstyle(left)`, `kbstyle(up)`, `kbstyle(right)`, `kbstyle(down)`, `kbstyle(pageup)`, `kbstyle(pagedown)`, `kbstyle(end)`, `kbstyle(home)`
-   `kbstyle(tab)`, `kbstyle(enter)`, `kbstyle(escape)`, `kbstyle(space)`, `kbstyle(backspace)`, `kbstyle(delete)`
-   `kbstyle(pausebreak)`, `kbstyle(capslock)`, `kbstyle(insert)`
-   `kbstyle(numpad0-numpad9)`, `kbstyle(numpad_multiply)`, `kbstyle(numpad_add)`, `kbstyle(numpad_separator)`
-   `kbstyle(numpad_subtract)`, `kbstyle(numpad_decimal)`, `kbstyle(numpad_divide)`

Command arguments
-----------------

You can invoke a command with arguments. This is useful if you often perform the same operation on a specific file or folder. You can add a custom keyboard shortcut to do exactly what you want.

The following is an example overriding the `kbstyle(Enter)` key to print some text:

      { "key": "enter", "command": "type",
                        "args": { "text": "Hello World" },
                        "when": "editorTextFocus" }

The type command will receive `{"text": "Hello World"}` as its first argument and add “Hello World” to the file instead of producing the default command.

For more information on commands that take arguments, refer to [Built-in Commands](/api/references/commands.md).

Removing a specific key binding rule
------------------------------------

You can write a key binding rule that targets the removal of a specific default key binding. With the `keybindings.json`, it was always possible to redefine all the key bindings of VS Code, but it can be difficult to make a small tweak, especially around overloaded keys, such as `kbstyle(Tab)` or `kbstyle(Escape)`. To remove a specific key binding, add a `-` to the `command` and the rule will be a removal rule.

Here is an example:

    // In Default Keyboard Shortcuts
    ...
    { "key": "tab", "command": "tab", "when": ... },
    { "key": "tab", "command": "jumpToNextSnippetPlaceholder", "when": ... },
    { "key": "tab", "command": "acceptSelectedSuggestion", "when": ... },
    ...

    // To remove the second rule, for example, add in keybindings.json:
    { "key": "tab", "command": "-jumpToNextSnippetPlaceholder" }

Keyboard layouts
----------------

> **Note:** This section relates only to key bindings, not to typing in the editor.

The keys above are string representations for virtual keys and do not necessarily relate to the produced character when they are pressed. More precisely:

-   Reference: [Virtual-Key Codes (Windows)](https://msdn.microsoft.com/library/windows/desktop/dd375731)
-   `kbstyle(tab)` for `VK_TAB` (`0x09`)
-   `kbstyle(;)` for `VK_OEM_1` (`0xBA`)
-   `kbstyle(=)` for `VK_OEM_PLUS` (`0xBB`)
-   `kbstyle(,)` for `VK_OEM_COMMA` (`0xBC`)
-   `kbstyle(-)` for `VK_OEM_MINUS` (`0xBD`)
-   `kbstyle(.)` for `VK_OEM_PERIOD` (`0xBE`)
-   `kbstyle(/)` for `VK_OEM_2` (`0xBF`)
-   `` kbstyle(`) `` for `VK_OEM_3` (`0xC0`)
-   `kbstyle([)` for `VK_OEM_4` (`0xDB`)
-   `kbstyle(\)` for `VK_OEM_5` (`0xDC`)
-   `kbstyle(])` for `VK_OEM_6` (`0xDD`)
-   `kbstyle(')` for `VK_OEM_7` (`0xDE`)
-   etc.

Different keyboard layouts usually reposition the above virtual keys or change the characters produced when they are pressed. When using a different keyboard layout than the standard US, Visual Studio Code does the following:

All the key bindings are rendered in the UI using the current system’s keyboard layout. For example, `Split Editor` when using a French (France) keyboard layout is now rendered as `kbstyle(Ctrl+*)`:

![render key binding](images/keybinding/render-key-binding.png)

When editing `keybindings.json`, VS Code highlights misleading key bindings, those that are represented in the file with the character produced under the standard US keyboard layout, but that need pressing keys with different labels under the current system’s keyboard layout. For example, here is how the **Default Keyboard Shortcuts** rules look like when using a French (France) keyboard layout:

![keybindings.json guidance](images/keybinding/keybindings-json.png)

There is also a widget that helps input the key binding rule when editing `keybindings.json`. To launch the **Define Keybinding** widget, press `kb(editor.action.defineKeybinding)`. The widget listens for key presses and renders the serialized JSON representation in the text box and below it, the keys that VS Code has detected under your current keyboard layout. Once you’ve typed the key combination you want, you can press `kbstyle(Enter)` and a rule snippet will be inserted.

![key binding widget](images/keybinding/key-binding-widget.png)

> **Note:** On Linux, Visual Studio Code detects your current keyboard layout on start-up and then caches this information. For a good experience, we recommend restarting VS Code if you change your keyboard layout.

Keyboard layout-independent bindings
------------------------------------

Using scan codes, it is possible to define keybindings which do not change with the change of the keyboard layout. For example:

    { "key": "cmd+[Slash]", "command": "editor.action.commentLine",
                               "when": "editorTextFocus" }

Accepted scan codes:

-   `kbstyle([F1]-[F19])`, `kbstyle([KeyA]-[KeyZ])`, `kbstyle([Digit0]-[Digit9])`
-   `kbstyle([Backquote])`, `kbstyle([Minus])`, `kbstyle([Equal])`, `kbstyle([BracketLeft])`, `kbstyle([BracketRight])`, `kbstyle([Backslash])`, `kbstyle([Semicolon])`, `kbstyle([Quote])`, `kbstyle([Comma])`, `kbstyle([Period])`, `kbstyle([Slash])`
-   `kbstyle([ArrowLeft])`, `kbstyle([ArrowUp])`, `kbstyle([ArrowRight])`, `kbstyle([ArrowDown])`, `kbstyle([PageUp])`, `kbstyle([PageDown])`, `kbstyle([End])`, `kbstyle([Home])`
-   `kbstyle([Tab])`, `kbstyle([Enter])`, `kbstyle([Escape])`, `kbstyle([Space])`, `kbstyle([Backspace])`, `kbstyle([Delete])`
-   `kbstyle([Pause])`, `kbstyle([CapsLock])`, `kbstyle([Insert])`
-   `kbstyle([Numpad0]-[Numpad9])`, `kbstyle([NumpadMultiply])`, `kbstyle([NumpadAdd])`, `kbstyle([NumpadComma])`
-   `kbstyle([NumpadSubtract])`, `kbstyle([NumpadDecimal])`, `kbstyle([NumpadDivide])`

when clause contexts
--------------------

VS Code gives you fine control over when your key bindings are enabled through the optional `when` clause. If your key binding doesn’t have a `when` clause, the key binding is globally available at all times. A `when` clause evaluates to either Boolean true or false for enabling key bindings.

VS Code sets various context keys and specific values depending on what elements are visible and active in the VS Code UI. For example, the built-in **Start Debugging** command has the keyboard shortcut `kb(workbench.action.debug.start)`, which is only enabled when there is an appropriate debugger available (context `debuggersAvailable` is true) and the editor isn’t in debug mode (context `inDebugMode` is false):

![Start Debugging when clause in the Keyboard Shorts editor](images/keybinding/start-debugging-when-clause.png)

You can also view a keybinding’s when clause directly in the Default Keybindings JSON (**Preferences: Open Default Keyboard Shortcuts (JSON)**):

    { "key": "f5",  "command": "workbench.action.debug.start",
                       "when": "debuggersAvailable && !inDebugMode" },

### Conditional operators

For when clause conditional expressions, the following conditional operators are useful for keybindings:

<table><thead><tr class="header"><th>Operator</th><th>Symbol</th><th>Example</th></tr></thead><tbody><tr class="odd"><td>Equality</td><td><code>==</code></td><td><code>"editorLangId == typescript"</code></td></tr><tr class="even"><td>Inequality</td><td><code>!=</code></td><td><code>"resourceExtname != .js"</code></td></tr><tr class="odd"><td>Or</td><td><code>||</code></td><td><code>"isLinux</code><code>||</code><code>isWindows"</code></td></tr><tr class="even"><td>And</td><td><code>&amp;&amp;</code></td><td><code>"textInputFocus &amp;&amp; !editorReadonly"</code></td></tr><tr class="odd"><td>Matches</td><td><code>=~</code></td><td><code>"resourceScheme =~ /^untitled$|^file$/"</code></td></tr></tbody></table>

You can find the full list of when clause conditional operators in the [when clause contexts](/api/references/when-clause-contexts.md#conditional-operators) reference.

### Available contexts

You can find some of the available `when` clause contexts in the [when clause context reference](/api/references/when-clause-contexts.md).

The list there isn’t exhaustive and you can find other `when` clause contexts by searching and filtering in the Keyboard Shortcuts editor (**Preferences: Open Keyboard Shortcuts** ) or reviewing the Default Keybindings JSON file (**Preferences: Open Default Keyboard Shortcuts (JSON)**).

Custom keybindings for refactorings
-----------------------------------

The `editor.action.codeAction` command lets you configure keybindings for specific [Refactorings](/docs/editor/refactoring.md) (Code Actions). For example, the keybinding below triggers the **Extract function** refactoring Code Actions:

    {
      "key": "ctrl+shift+r ctrl+e",
      "command": "editor.action.codeAction",
      "args": {
        "kind": "refactor.extract.function"
      }
    }

This is covered in depth in the [Refactoring](/docs/editor/refactoring.md#keybindings-for-code-actions) topic where you can learn about different kinds of Code Actions and how to prioritize them in the case of multiple possible refactorings.

Default Keyboard Shortcuts
--------------------------

You can view all default keyboard shortcuts in VS Code in the **Keyboard Shortcuts** editor with the **Show Default Keybindings** command in the **More Actions** (**…**) menu. This applies the `@source:default` filter to the **Keyboard Shortcuts** editor (**Source** is ‘Default’).

![Default Keyboard Shortcuts](images/keybinding/default-keyboard-shortcuts.png)

You can view the default keyboard shortcuts as a JSON file using the command **Preferences: Open Default Keyboard Shortcuts (JSON)**.

> **Note:** The following keys are rendered assuming a standard US keyboard layout. If you use a different keyboard layout, please [read below](/docs/getstarted/keybindings.md#keyboard-layouts). You can view the currently active keyboard shortcuts in VS Code in the **Command Palette** (**View** -&gt; **Command Palette**) or in the **Keyboard Shortcuts** editor (**File** &gt; **Preferences** &gt; **Keyboard Shortcuts**).

Some commands included below do not have default keyboard shortcuts and so are displayed as `kbstyle(unassigned)` but you can assign your own keybindings.

### Basic Editing

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Cut line (empty selection)</td><td><code>kb(editor.action.clipboardCutAction)</code></td><td><code>editor.action.clipboardCutAction</code></td></tr><tr class="even"><td>Copy line (empty selection)</td><td><code>kb(editor.action.clipboardCopyAction)</code></td><td><code>editor.action.clipboardCopyAction</code></td></tr><tr class="odd"><td>Paste</td><td><code>kb(editor.action.clipboardPasteAction)</code></td><td><code>editor.action.clipboardPasteAction</code></td></tr><tr class="even"><td>Delete Line</td><td><code>kb(editor.action.deleteLines)</code></td><td><code>editor.action.deleteLines</code></td></tr><tr class="odd"><td>Insert Line Below</td><td><code>kb(editor.action.insertLineAfter)</code></td><td><code>editor.action.insertLineAfter</code></td></tr><tr class="even"><td>Insert Line Above</td><td><code>kb(editor.action.insertLineBefore)</code></td><td><code>editor.action.insertLineBefore</code></td></tr><tr class="odd"><td>Move Line Down</td><td><code>kb(editor.action.moveLinesDownAction)</code></td><td><code>editor.action.moveLinesDownAction</code></td></tr><tr class="even"><td>Move Line Up</td><td><code>kb(editor.action.moveLinesUpAction)</code></td><td><code>editor.action.moveLinesUpAction</code></td></tr><tr class="odd"><td>Copy Line Down</td><td><code>kb(editor.action.copyLinesDownAction)</code></td><td><code>editor.action.copyLinesDownAction</code></td></tr><tr class="even"><td>Copy Line Up</td><td><code>kb(editor.action.copyLinesUpAction)</code></td><td><code>editor.action.copyLinesUpAction</code></td></tr><tr class="odd"><td>Undo</td><td><code>kb(undo)</code></td><td><code>undo</code></td></tr><tr class="even"><td>Redo</td><td><code>kb(redo)</code></td><td><code>redo</code></td></tr><tr class="odd"><td>Add Selection To Next Find Match</td><td><code>kb(editor.action.addSelectionToNextFindMatch)</code></td><td><code>editor.action.addSelectionToNextFindMatch</code></td></tr><tr class="even"><td>Move Last Selection To Next Find Match</td><td><code>kb(editor.action.moveSelectionToNextFindMatch)</code></td><td><code>editor.action.moveSelectionToNextFindMatch</code></td></tr><tr class="odd"><td>Undo last cursor operation</td><td><code>kb(cursorUndo)</code></td><td><code>cursorUndo</code></td></tr><tr class="even"><td>Insert cursor at end of each line selected</td><td><code>kb(editor.action.insertCursorAtEndOfEachLineSelected)</code></td><td><code>editor.action.insertCursorAtEndOfEachLineSelected</code></td></tr><tr class="odd"><td>Select all occurrences of current selection</td><td><code>kb(editor.action.selectHighlights)</code></td><td><code>editor.action.selectHighlights</code></td></tr><tr class="even"><td>Select all occurrences of current word</td><td><code>kb(editor.action.changeAll)</code></td><td><code>editor.action.changeAll</code></td></tr><tr class="odd"><td>Select current line</td><td><code>kb(expandLineSelection)</code></td><td><code>expandLineSelection</code></td></tr><tr class="even"><td>Insert Cursor Below</td><td><code>kb(editor.action.insertCursorBelow)</code></td><td><code>editor.action.insertCursorBelow</code></td></tr><tr class="odd"><td>Insert Cursor Above</td><td><code>kb(editor.action.insertCursorAbove)</code></td><td><code>editor.action.insertCursorAbove</code></td></tr><tr class="even"><td>Jump to matching bracket</td><td><code>kb(editor.action.jumpToBracket)</code></td><td><code>editor.action.jumpToBracket</code></td></tr><tr class="odd"><td>Indent Line</td><td><code>kb(editor.action.indentLines)</code></td><td><code>editor.action.indentLines</code></td></tr><tr class="even"><td>Outdent Line</td><td><code>kb(editor.action.outdentLines)</code></td><td><code>editor.action.outdentLines</code></td></tr><tr class="odd"><td>Go to Beginning of Line</td><td><code>kb(cursorHome)</code></td><td><code>cursorHome</code></td></tr><tr class="even"><td>Go to End of Line</td><td><code>kb(cursorEnd)</code></td><td><code>cursorEnd</code></td></tr><tr class="odd"><td>Go to End of File</td><td><code>kb(cursorBottom)</code></td><td><code>cursorBottom</code></td></tr><tr class="even"><td>Go to Beginning of File</td><td><code>kb(cursorTop)</code></td><td><code>cursorTop</code></td></tr><tr class="odd"><td>Scroll Line Down</td><td><code>kb(scrollLineDown)</code></td><td><code>scrollLineDown</code></td></tr><tr class="even"><td>Scroll Line Up</td><td><code>kb(scrollLineUp)</code></td><td><code>scrollLineUp</code></td></tr><tr class="odd"><td>Scroll Page Down</td><td><code>kb(scrollPageDown)</code></td><td><code>scrollPageDown</code></td></tr><tr class="even"><td>Scroll Page Up</td><td><code>kb(scrollPageUp)</code></td><td><code>scrollPageUp</code></td></tr><tr class="odd"><td>Fold (collapse) region</td><td><code>kb(editor.fold)</code></td><td><code>editor.fold</code></td></tr><tr class="even"><td>Unfold (uncollapse) region</td><td><code>kb(editor.unfold)</code></td><td><code>editor.unfold</code></td></tr><tr class="odd"><td>Fold (collapse) all subregions</td><td><code>kb(editor.foldRecursively)</code></td><td><code>editor.foldRecursively</code></td></tr><tr class="even"><td>Unfold (uncollapse) all subregions</td><td><code>kb(editor.unfoldRecursively)</code></td><td><code>editor.unfoldRecursively</code></td></tr><tr class="odd"><td>Fold (collapse) all regions</td><td><code>kb(editor.foldAll)</code></td><td><code>editor.foldAll</code></td></tr><tr class="even"><td>Unfold (uncollapse) all regions</td><td><code>kb(editor.unfoldAll)</code></td><td><code>editor.unfoldAll</code></td></tr><tr class="odd"><td>Add Line Comment</td><td><code>kb(editor.action.addCommentLine)</code></td><td><code>editor.action.addCommentLine</code></td></tr><tr class="even"><td>Remove Line Comment</td><td><code>kb(editor.action.removeCommentLine)</code></td><td><code>editor.action.removeCommentLine</code></td></tr><tr class="odd"><td>Toggle Line Comment</td><td><code>kb(editor.action.commentLine)</code></td><td><code>editor.action.commentLine</code></td></tr><tr class="even"><td>Toggle Block Comment</td><td><code>kb(editor.action.blockComment)</code></td><td><code>editor.action.blockComment</code></td></tr><tr class="odd"><td>Find</td><td><code>kb(actions.find)</code></td><td><code>actions.find</code></td></tr><tr class="even"><td>Replace</td><td><code>kb(editor.action.startFindReplaceAction)</code></td><td><code>editor.action.startFindReplaceAction</code></td></tr><tr class="odd"><td>Find Next</td><td><code>kb(editor.action.nextMatchFindAction)</code></td><td><code>editor.action.nextMatchFindAction</code></td></tr><tr class="even"><td>Find Previous</td><td><code>kb(editor.action.previousMatchFindAction)</code></td><td><code>editor.action.previousMatchFindAction</code></td></tr><tr class="odd"><td>Select All Occurrences of Find Match</td><td><code>kb(editor.action.selectAllMatches)</code></td><td><code>editor.action.selectAllMatches</code></td></tr><tr class="even"><td>Toggle Find Case Sensitive</td><td><code>kb(toggleFindCaseSensitive)</code></td><td><code>toggleFindCaseSensitive</code></td></tr><tr class="odd"><td>Toggle Find Regex</td><td><code>kb(toggleFindRegex)</code></td><td><code>toggleFindRegex</code></td></tr><tr class="even"><td>Toggle Find Whole Word</td><td><code>kb(toggleFindWholeWord)</code></td><td><code>toggleFindWholeWord</code></td></tr><tr class="odd"><td>Toggle Use of Tab Key for Setting Focus</td><td><code>kb(editor.action.toggleTabFocusMode)</code></td><td><code>editor.action.toggleTabFocusMode</code></td></tr><tr class="even"><td>Toggle Render Whitespace</td><td><code>kb(toggleRenderWhitespace)</code></td><td><code>toggleRenderWhitespace</code></td></tr><tr class="odd"><td>Toggle Word Wrap</td><td><code>kb(editor.action.toggleWordWrap)</code></td><td><code>editor.action.toggleWordWrap</code></td></tr></tbody></table>

### Rich Languages Editing

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Trigger Suggest</td><td><code>kb(editor.action.triggerSuggest)</code></td><td><code>editor.action.triggerSuggest</code></td></tr><tr class="even"><td>Trigger Parameter Hints</td><td><code>kb(editor.action.triggerParameterHints)</code></td><td><code>editor.action.triggerParameterHints</code></td></tr><tr class="odd"><td>Format Document</td><td><code>kb(editor.action.formatDocument)</code></td><td><code>editor.action.formatDocument</code></td></tr><tr class="even"><td>Format Selection</td><td><code>kb(editor.action.formatSelection)</code></td><td><code>editor.action.formatSelection</code></td></tr><tr class="odd"><td>Go to Definition</td><td><code>kb(editor.action.revealDefinition)</code></td><td><code>editor.action.revealDefinition</code></td></tr><tr class="even"><td>Show Hover</td><td><code>kb(editor.action.showHover)</code></td><td><code>editor.action.showHover</code></td></tr><tr class="odd"><td>Peek Definition</td><td><code>kb(editor.action.peekDefinition)</code></td><td><code>editor.action.peekDefinition</code></td></tr><tr class="even"><td>Open Definition to the Side</td><td><code>kb(editor.action.revealDefinitionAside)</code></td><td><code>editor.action.revealDefinitionAside</code></td></tr><tr class="odd"><td>Quick Fix</td><td><code>kb(editor.action.quickFix)</code></td><td><code>editor.action.quickFix</code></td></tr><tr class="even"><td>Go to References</td><td><code>kb(editor.action.goToReferences)</code></td><td><code>editor.action.goToReferences</code></td></tr><tr class="odd"><td>Rename Symbol</td><td><code>kb(editor.action.rename)</code></td><td><code>editor.action.rename</code></td></tr><tr class="even"><td>Replace with Next Value</td><td><code>kb(editor.action.inPlaceReplace.down)</code></td><td><code>editor.action.inPlaceReplace.down</code></td></tr><tr class="odd"><td>Replace with Previous Value</td><td><code>kb(editor.action.inPlaceReplace.up)</code></td><td><code>editor.action.inPlaceReplace.up</code></td></tr><tr class="even"><td>Expand AST Selection</td><td><code>kb(editor.action.smartSelect.expand)</code></td><td><code>editor.action.smartSelect.expand</code></td></tr><tr class="odd"><td>Shrink AST Selection</td><td><code>kb(editor.action.smartSelect.shrink)</code></td><td><code>editor.action.smartSelect.shrink</code></td></tr><tr class="even"><td>Trim Trailing Whitespace</td><td><code>kb(editor.action.trimTrailingWhitespace)</code></td><td><code>editor.action.trimTrailingWhitespace</code></td></tr><tr class="odd"><td>Change Language Mode</td><td><code>kb(workbench.action.editor.changeLanguageMode)</code></td><td><code>workbench.action.editor.changeLanguageMode</code></td></tr></tbody></table>

### Navigation

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Show All Symbols</td><td><code>kb(workbench.action.showAllSymbols)</code></td><td><code>workbench.action.showAllSymbols</code></td></tr><tr class="even"><td>Go to Line…</td><td><code>kb(workbench.action.gotoLine)</code></td><td><code>workbench.action.gotoLine</code></td></tr><tr class="odd"><td>Go to File…, Quick Open</td><td><code>kb(workbench.action.quickOpen)</code></td><td><code>workbench.action.quickOpen</code></td></tr><tr class="even"><td>Go to Symbol…</td><td><code>kb(workbench.action.gotoSymbol)</code></td><td><code>workbench.action.gotoSymbol</code></td></tr><tr class="odd"><td>Show Problems</td><td><code>kb(workbench.actions.view.problems)</code></td><td><code>workbench.actions.view.problems</code></td></tr><tr class="even"><td>Go to Next Error or Warning</td><td><code>kb(editor.action.marker.nextInFiles)</code></td><td><code>editor.action.marker.nextInFiles</code></td></tr><tr class="odd"><td>Go to Previous Error or Warning</td><td><code>kb(editor.action.marker.prevInFiles)</code></td><td><code>editor.action.marker.prevInFiles</code></td></tr><tr class="even"><td>Show All Commands</td><td><code>kb(workbench.action.showCommands)</code> or <code>kbstyle(F1)</code></td><td><code>workbench.action.showCommands</code></td></tr><tr class="odd"><td>Navigate Editor Group History</td><td><code>kb(workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup)</code></td><td><code>workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup</code></td></tr><tr class="even"><td>Go Back</td><td><code>kb(workbench.action.navigateBack)</code></td><td><code>workbench.action.navigateBack</code></td></tr><tr class="odd"><td>Go back in Quick Input</td><td><code>kb(workbench.action.quickInputBack)</code></td><td><code>workbench.action.quickInputBack</code></td></tr><tr class="even"><td>Go Forward</td><td><code>kb(workbench.action.navigateForward)</code></td><td><code>workbench.action.navigateForward</code></td></tr></tbody></table>

### Editor/Window Management

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>New Window</td><td><code>kb(workbench.action.newWindow)</code></td><td><code>workbench.action.newWindow</code></td></tr><tr class="even"><td>Close Window</td><td><code>kb(workbench.action.closeWindow)</code></td><td><code>workbench.action.closeWindow</code></td></tr><tr class="odd"><td>Close Editor</td><td><code>kb(workbench.action.closeActiveEditor)</code></td><td><code>workbench.action.closeActiveEditor</code></td></tr><tr class="even"><td>Close Folder</td><td><code>kb(workbench.action.closeFolder)</code></td><td><code>workbench.action.closeFolder</code></td></tr><tr class="odd"><td>Cycle Between Editor Groups</td><td><code>kb(workbench.action.navigateEditorGroups)</code></td><td><code>workbench.action.navigateEditorGroups</code></td></tr><tr class="even"><td>Split Editor</td><td><code>kb(workbench.action.splitEditor)</code></td><td><code>workbench.action.splitEditor</code></td></tr><tr class="odd"><td>Focus into First Editor Group</td><td><code>kb(workbench.action.focusFirstEditorGroup)</code></td><td><code>workbench.action.focusFirstEditorGroup</code></td></tr><tr class="even"><td>Focus into Second Editor Group</td><td><code>kb(workbench.action.focusSecondEditorGroup)</code></td><td><code>workbench.action.focusSecondEditorGroup</code></td></tr><tr class="odd"><td>Focus into Third Editor Group</td><td><code>kb(workbench.action.focusThirdEditorGroup)</code></td><td><code>workbench.action.focusThirdEditorGroup</code></td></tr><tr class="even"><td>Focus into Editor Group on the Left</td><td><code>kb(workbench.action.focusPreviousGroup)</code></td><td><code>workbench.action.focusPreviousGroup</code></td></tr><tr class="odd"><td>Focus into Editor Group on the Right</td><td><code>kb(workbench.action.focusNextGroup)</code></td><td><code>workbench.action.focusNextGroup</code></td></tr><tr class="even"><td>Move Editor Left</td><td><code>kb(workbench.action.moveEditorLeftInGroup)</code></td><td><code>workbench.action.moveEditorLeftInGroup</code></td></tr><tr class="odd"><td>Move Editor Right</td><td><code>kb(workbench.action.moveEditorRightInGroup)</code></td><td><code>workbench.action.moveEditorRightInGroup</code></td></tr><tr class="even"><td>Move Active Editor Group Left</td><td><code>kb(workbench.action.moveActiveEditorGroupLeft)</code></td><td><code>workbench.action.moveActiveEditorGroupLeft</code></td></tr><tr class="odd"><td>Move Active Editor Group Right</td><td><code>kb(workbench.action.moveActiveEditorGroupRight)</code></td><td><code>workbench.action.moveActiveEditorGroupRight</code></td></tr><tr class="even"><td>Move Editor into Next Group</td><td><code>kb(workbench.action.moveEditorToNextGroup)</code></td><td><code>workbench.action.moveEditorToNextGroup</code></td></tr><tr class="odd"><td>Move Editor into Previous Group</td><td><code>kb(workbench.action.moveEditorToPreviousGroup)</code></td><td><code>workbench.action.moveEditorToPreviousGroup</code></td></tr></tbody></table>

### File Management

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>New File</td><td><code>kb(workbench.action.files.newUntitledFile)</code></td><td><code>workbench.action.files.newUntitledFile</code></td></tr><tr class="even"><td>Open File…</td><td><code>kb(workbench.action.files.openFile)</code></td><td><code>workbench.action.files.openFile</code></td></tr><tr class="odd"><td>Save</td><td><code>kb(workbench.action.files.save)</code></td><td><code>workbench.action.files.save</code></td></tr><tr class="even"><td>Save All</td><td><code>kb(saveAll)</code></td><td><code>saveAll</code></td></tr><tr class="odd"><td>Save As…</td><td><code>kb(workbench.action.files.saveAs)</code></td><td><code>workbench.action.files.saveAs</code></td></tr><tr class="even"><td>Close</td><td><code>kb(workbench.action.closeActiveEditor)</code></td><td><code>workbench.action.closeActiveEditor</code></td></tr><tr class="odd"><td>Close Others</td><td><code>kb(workbench.action.closeOtherEditors)</code></td><td><code>workbench.action.closeOtherEditors</code></td></tr><tr class="even"><td>Close Group</td><td><code>kb(workbench.action.closeEditorsInGroup)</code></td><td><code>workbench.action.closeEditorsInGroup</code></td></tr><tr class="odd"><td>Close Other Groups</td><td><code>kb(workbench.action.closeEditorsInOtherGroups)</code></td><td><code>workbench.action.closeEditorsInOtherGroups</code></td></tr><tr class="even"><td>Close Group to Left</td><td><code>kb(workbench.action.closeEditorsToTheLeft)</code></td><td><code>workbench.action.closeEditorsToTheLeft</code></td></tr><tr class="odd"><td>Close Group to Right</td><td><code>kb(workbench.action.closeEditorsToTheRight)</code></td><td><code>workbench.action.closeEditorsToTheRight</code></td></tr><tr class="even"><td>Close All</td><td><code>kb(workbench.action.closeAllEditors)</code></td><td><code>workbench.action.closeAllEditors</code></td></tr><tr class="odd"><td>Reopen Closed Editor</td><td><code>kb(workbench.action.reopenClosedEditor)</code></td><td><code>workbench.action.reopenClosedEditor</code></td></tr><tr class="even"><td>Keep Open</td><td><code>kb(workbench.action.keepEditor)</code></td><td><code>workbench.action.keepEditor</code></td></tr><tr class="odd"><td>Copy Path of Active File</td><td><code>kb(workbench.action.files.copyPathOfActiveFile)</code></td><td><code>workbench.action.files.copyPathOfActiveFile</code></td></tr><tr class="even"><td>Reveal Active File in Windows</td><td><code>kb(workbench.action.files.revealActiveFileInWindows)</code></td><td><code>workbench.action.files.revealActiveFileInWindows</code></td></tr><tr class="odd"><td>Show Opened File in New Window</td><td><code>kb(workbench.action.files.showOpenedFileInNewWindow)</code></td><td><code>workbench.action.files.showOpenedFileInNewWindow</code></td></tr><tr class="even"><td>Compare Opened File With</td><td><code>kb(workbench.files.action.compareFileWith)</code></td><td><code>workbench.files.action.compareFileWith</code></td></tr></tbody></table>

### Display

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Toggle Full Screen</td><td><code>kb(workbench.action.toggleFullScreen)</code></td><td><code>workbench.action.toggleFullScreen</code></td></tr><tr class="even"><td>Toggle Zen Mode</td><td><code>kb(workbench.action.toggleZenMode)</code></td><td><code>workbench.action.toggleZenMode</code></td></tr><tr class="odd"><td>Leave Zen Mode</td><td><code>kb(workbench.action.exitZenMode)</code></td><td><code>workbench.action.exitZenMode</code></td></tr><tr class="even"><td>Zoom in</td><td><code>kb(workbench.action.zoomIn)</code></td><td><code>workbench.action.zoomIn</code></td></tr><tr class="odd"><td>Zoom out</td><td><code>kb(workbench.action.zoomOut)</code></td><td><code>workbench.action.zoomOut</code></td></tr><tr class="even"><td>Reset Zoom</td><td><code>kb(workbench.action.zoomReset)</code></td><td><code>workbench.action.zoomReset</code></td></tr><tr class="odd"><td>Toggle Sidebar Visibility</td><td><code>kb(workbench.action.toggleSidebarVisibility)</code></td><td><code>workbench.action.toggleSidebarVisibility</code></td></tr><tr class="even"><td>Show Explorer / Toggle Focus</td><td><code>kb(workbench.view.explorer)</code></td><td><code>workbench.view.explorer</code></td></tr><tr class="odd"><td>Show Search</td><td><code>kb(workbench.view.search)</code></td><td><code>workbench.view.search</code></td></tr><tr class="even"><td>Show Source Control</td><td><code>kb(workbench.view.scm)</code></td><td><code>workbench.view.scm</code></td></tr><tr class="odd"><td>Show Run</td><td><code>kb(workbench.view.debug)</code></td><td><code>workbench.view.debug</code></td></tr><tr class="even"><td>Show Extensions</td><td><code>kb(workbench.view.extensions)</code></td><td><code>workbench.view.extensions</code></td></tr><tr class="odd"><td>Show Output</td><td><code>kb(workbench.action.output.toggleOutput)</code></td><td><code>workbench.action.output.toggleOutput</code></td></tr><tr class="even"><td>Quick Open View</td><td><code>kb(workbench.action.quickOpenView)</code></td><td><code>workbench.action.quickOpenView</code></td></tr><tr class="odd"><td>Open New Command Prompt</td><td><code>kb(workbench.action.terminal.openNativeConsole)</code></td><td><code>workbench.action.terminal.openNativeConsole</code></td></tr><tr class="even"><td>Toggle Markdown Preview</td><td><code>kb(markdown.showPreview)</code></td><td><code>markdown.showPreview</code></td></tr><tr class="odd"><td>Open Preview to the Side</td><td><code>kb(markdown.showPreviewToSide)</code></td><td><code>markdown.showPreviewToSide</code></td></tr><tr class="even"><td>Toggle Integrated Terminal</td><td><code>kb(workbench.action.terminal.toggleTerminal)</code></td><td><code>workbench.action.terminal.toggleTerminal</code></td></tr></tbody></table>

### Search

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Show Search</td><td><code>kb(workbench.view.search)</code></td><td><code>workbench.view.search</code></td></tr><tr class="even"><td>Replace in Files</td><td><code>kb(workbench.action.replaceInFiles)</code></td><td><code>workbench.action.replaceInFiles</code></td></tr><tr class="odd"><td>Toggle Match Case</td><td><code>kb(toggleSearchCaseSensitive)</code></td><td><code>toggleSearchCaseSensitive</code></td></tr><tr class="even"><td>Toggle Match Whole Word</td><td><code>kb(toggleSearchWholeWord)</code></td><td><code>toggleSearchWholeWord</code></td></tr><tr class="odd"><td>Toggle Use Regular Expression</td><td><code>kb(toggleSearchRegex)</code></td><td><code>toggleSearchRegex</code></td></tr><tr class="even"><td>Toggle Search Details</td><td><code>kb(workbench.action.search.toggleQueryDetails)</code></td><td><code>workbench.action.search.toggleQueryDetails</code></td></tr><tr class="odd"><td>Focus Next Search Result</td><td><code>kb(search.action.focusNextSearchResult)</code></td><td><code>search.action.focusNextSearchResult</code></td></tr><tr class="even"><td>Focus Previous Search Result</td><td><code>kb(search.action.focusPreviousSearchResult)</code></td><td><code>search.action.focusPreviousSearchResult</code></td></tr><tr class="odd"><td>Show Next Search Term</td><td><code>kb(history.showNext)</code></td><td><code>history.showNext</code></td></tr><tr class="even"><td>Show Previous Search Term</td><td><code>kb(history.showPrevious)</code></td><td><code>history.showPrevious</code></td></tr></tbody></table>

### Search Editor

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Open Results In Editor</td><td><code>kb(search.action.openInEditor)</code></td><td><code>search.action.openInEditor</code></td></tr><tr class="even"><td>Focus Search Editor Input</td><td><code>kb(search.action.focusQueryEditorWidget)</code></td><td><code>search.action.focusQueryEditorWidget</code></td></tr><tr class="odd"><td>Search Again</td><td><code>kb(rerunSearchEditorSearch)</code></td><td><code>rerunSearchEditorSearch</code></td></tr><tr class="even"><td>Delete File Results</td><td><code>kb(search.searchEditor.action.deleteFileResults)</code></td><td><code>search.searchEditor.action.deleteFileResults</code></td></tr></tbody></table>

### Preferences

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Open Settings</td><td><code>kb(workbench.action.openSettings)</code></td><td><code>workbench.action.openSettings</code></td></tr><tr class="even"><td>Open Workspace Settings</td><td><code>kb(workbench.action.openWorkspaceSettings)</code></td><td><code>workbench.action.openWorkspaceSettings</code></td></tr><tr class="odd"><td>Open Keyboard Shortcuts</td><td><code>kb(workbench.action.openGlobalKeybindings)</code></td><td><code>workbench.action.openGlobalKeybindings</code></td></tr><tr class="even"><td>Open User Snippets</td><td><code>kb(workbench.action.openSnippets)</code></td><td><code>workbench.action.openSnippets</code></td></tr><tr class="odd"><td>Select Color Theme</td><td><code>kb(workbench.action.selectTheme)</code></td><td><code>workbench.action.selectTheme</code></td></tr><tr class="even"><td>Configure Display Language</td><td><code>kb(workbench.action.configureLocale)</code></td><td><code>workbench.action.configureLocale</code></td></tr></tbody></table>

### Debug

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Toggle Breakpoint</td><td><code>kb(editor.debug.action.toggleBreakpoint)</code></td><td><code>editor.debug.action.toggleBreakpoint</code></td></tr><tr class="even"><td>Start</td><td><code>kb(workbench.action.debug.start)</code></td><td><code>workbench.action.debug.start</code></td></tr><tr class="odd"><td>Continue</td><td><code>kb(workbench.action.debug.continue)</code></td><td><code>workbench.action.debug.continue</code></td></tr><tr class="even"><td>Start (without debugging)</td><td><code>kb(workbench.action.debug.run)</code></td><td><code>workbench.action.debug.run</code></td></tr><tr class="odd"><td>Pause</td><td><code>kb(workbench.action.debug.pause)</code></td><td><code>workbench.action.debug.pause</code></td></tr><tr class="even"><td>Step Into</td><td><code>kb(workbench.action.debug.stepInto)</code></td><td><code>workbench.action.debug.stepInto</code></td></tr></tbody></table>

### Tasks

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Run Build Task</td><td><code>kb(workbench.action.tasks.build)</code></td><td><code>workbench.action.tasks.build</code></td></tr><tr class="even"><td>Run Test Task</td><td><code>kb(workbench.action.tasks.test)</code></td><td><code>workbench.action.tasks.test</code></td></tr></tbody></table>

### Extensions

<table><colgroup><col style="width: 35%" /><col style="width: 15%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Key</th><th>Command id</th></tr></thead><tbody><tr class="odd"><td>Install Extension</td><td><code>kb(workbench.extensions.action.installExtension)</code></td><td><code>workbench.extensions.action.installExtension</code></td></tr><tr class="even"><td>Show Installed Extensions</td><td><code>kb(workbench.extensions.action.showInstalledExtensions)</code></td><td><code>workbench.extensions.action.showInstalledExtensions</code></td></tr><tr class="odd"><td>Show Outdated Extensions</td><td><code>kb(workbench.extensions.action.listOutdatedExtensions)</code></td><td><code>workbench.extensions.action.listOutdatedExtensions</code></td></tr><tr class="even"><td>Show Recommended Extensions</td><td><code>kb(workbench.extensions.action.showRecommendedExtensions)</code></td><td><code>workbench.extensions.action.showRecommendedExtensions</code></td></tr><tr class="odd"><td>Show Popular Extensions</td><td><code>kb(workbench.extensions.action.showPopularExtensions)</code></td><td><code>workbench.extensions.action.showPopularExtensions</code></td></tr><tr class="even"><td>Update All Extensions</td><td><code>kb(workbench.extensions.action.updateAllExtensions)</code></td><td><code>workbench.extensions.action.updateAllExtensions</code></td></tr></tbody></table>

Next steps
----------

Now that you know about our Key binding support, what’s next…

-   [Language Support](/docs/languages/overview.md) - Our Good, Better, Best language grid to see what you can expect
-   [Debugging](/docs/editor/debugging.md) - This is where VS Code really shines
-   [Node.js](/docs/nodejs/nodejs-tutorial.md) - End to end Node.js scenario with a sample app

Common questions
----------------

### How can I find out what command is bound to a specific key?

In the **Keyboard Shortcut** editor, you can filter on specific keystrokes to see which commands are bound to which keys. Below you can see that `kbstyle(Ctrl+Shift+P)` is bound to **Show All Commands** to bring up the Command Palette.

![Key bindings quick outline](images/keybinding/filter-on-keys.png)

### How to add a key binding to an action, for example, add Ctrl+D to Delete Lines

Find a rule that triggers the action in the **Default Keyboard Shortcuts** and write a modified version of it in your `keybindings.json` file:

    // Original, in Default Keyboard Shortcuts
    { "key": "ctrl+shift+k",          "command": "editor.action.deleteLines",
                                         "when": "editorTextFocus" },
    // Modified, in User/keybindings.json, Ctrl+D now will also trigger this action
    { "key": "ctrl+d",                "command": "editor.action.deleteLines",
                                         "when": "editorTextFocus" },

### How can I add a key binding for only certain file types?

Use the `editorLangId` context key in your `when` clause:

    { "key": "shift+alt+a",           "command": "editor.action.blockComment",
                                         "when": "editorTextFocus && editorLangId == csharp" },

### I have modified my key bindings in `keybindings.json`; why don’t they work?

The most common problem is a syntax error in the file. Otherwise, try removing the `when` clause or picking a different `key`. Unfortunately, at this point, it is a trial and error process.
