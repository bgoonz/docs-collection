# when clause contexts

Visual Studio Code sets various context keys and specific values depending on what elements are visible and active in the VS Code UI. These contexts can be used to selectively enable or disable extension commands and UI elements, such as menus and views.

For example, VS Codes uses when clauses to enable or disable command keybindings, which you can see in the Default Keybindings JSON (**Preferences: Open Default Keyboard Shortcuts (JSON)**):

    { "key": "f5",  "command": "workbench.action.debug.start",
                       "when": "debuggersAvailable && !inDebugMode" },

Above the built-in **Start Debugging** command has the keyboard shortcut `kb(workbench.action.debug.start)`, which is only enabled when there is an appropriate debugger available (context `debuggersAvailable` is true) and the editor isn’t in debug mode (context `inDebugMode` is false).

## Conditional operators

For conditional expressions, you can use the following conditional operators:

<table><thead><tr class="header"><th>Operator</th><th>Symbol</th><th>Example</th></tr></thead><tbody><tr class="odd"><td>Equality</td><td><code>==</code></td><td><code>"editorLangId == typescript"</code></td></tr><tr class="even"><td>Inequality</td><td><code>!=</code></td><td><code>"resourceExtname != .js"</code></td></tr><tr class="odd"><td>Or</td><td><code>||</code></td><td><code>"isLinux</code><code>||</code><code>isWindows"</code></td></tr><tr class="even"><td>And</td><td><code>&amp;&amp;</code></td><td><code>"textInputFocus &amp;&amp; !editorReadonly"</code></td></tr><tr class="odd"><td>Not</td><td><code>!</code></td><td><code>!editorReadonly</code></td></tr><tr class="even"><td>Matches</td><td><code>=~</code></td><td><code>"resourceScheme =~ /^untitled$|^file$/"</code></td></tr><tr class="odd"><td>Greater than</td><td><code>&gt;</code> <code>&gt;=</code></td><td><code>"gitOpenRepositoryCount &gt;= 1"</code></td></tr><tr class="even"><td>Less than</td><td><code>&lt;</code> <code>&lt;=</code></td><td><code>"workspaceFolderCount &lt; 2"</code></td></tr><tr class="odd"><td>In</td><td><code>in</code></td><td><code>resourceFilename in supportedFolders</code> (<a href="#in-conditional-operator">details</a> below)</td></tr></tbody></table>

### key-value when clause operator

There is a key-value pair match operator for `when` clauses. The expression `key =~ value` treats the right-hand side as a regular expression to match against the left-hand side. For example, to contribute context menu items for all Docker files, one could use:

       "when": "resourceFilename =~ /docker/"

## Available contexts

Below are some of the available `when` clause contexts, which evaluate to Boolean true/false.

The list here isn’t exhaustive and you can find other `when` clause contexts by searching and filtering in the Keyboard Shortcuts editor (**Preferences: Open Keyboard Shortcuts**) or reviewing the Default Keybindings JSON file (**Preferences: Open Default Keyboard Shortcuts (JSON)**).

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Context name</th><th>True when</th></tr></thead><tbody><tr class="odd"><td><strong>Editor contexts</strong></td><td></td></tr><tr class="even"><td><code>editorFocus</code></td><td>An editor has focus, either the text or a widget.</td></tr><tr class="odd"><td><code>editorTextFocus</code></td><td>The text in an editor has focus (cursor is blinking).</td></tr><tr class="even"><td><code>textInputFocus</code></td><td>Any editor has focus (regular editor, debug REPL, etc.).</td></tr><tr class="odd"><td><code>inputFocus</code></td><td>Any text input area has focus (editors or text boxes).</td></tr><tr class="even"><td><code>editorHasSelection</code></td><td>Text is selected in the editor.</td></tr><tr class="odd"><td><code>editorHasMultipleSelections</code></td><td>Multiple regions of text are selected (multiple cursors).</td></tr><tr class="even"><td><code>editorReadonly</code></td><td>The editor is read only.</td></tr><tr class="odd"><td><code>editorLangId</code></td><td>True when the editor’s associated <a href="/docs/languages/identifiers">language ID</a> matches. Example: <code>"editorLangId == typescript"</code>.</td></tr><tr class="even"><td><code>isInDiffEditor</code></td><td>The active editor is a difference editor.</td></tr><tr class="odd"><td><code>isInEmbeddedEditor</code></td><td>True when the focus is inside an embedded editor.</td></tr><tr class="even"><td><strong>Operating system contexts</strong></td><td></td></tr><tr class="odd"><td><code>isLinux</code></td><td>True when the OS is Linux</td></tr><tr class="even"><td><code>isMac</code></td><td>True when the OS is macOS</td></tr><tr class="odd"><td><code>isWindows</code></td><td>True when the OS is Windows</td></tr><tr class="even"><td><code>isWeb</code></td><td>True when accessing the editor from the Web</td></tr><tr class="odd"><td><strong>List contexts</strong></td><td></td></tr><tr class="even"><td><code>listFocus</code></td><td>A list has focus.</td></tr><tr class="odd"><td><code>listSupportsMultiselect</code></td><td>A list supports multi select.</td></tr><tr class="even"><td><code>listHasSelectionOrFocus</code></td><td>A list has selection or focus.</td></tr><tr class="odd"><td><code>listDoubleSelection</code></td><td>A list has a selection of 2 elements.</td></tr><tr class="even"><td><code>listMultiSelection</code></td><td>A list has a selection of multiple elements.</td></tr><tr class="odd"><td><strong>Mode contexts</strong></td><td></td></tr><tr class="even"><td><code>inSnippetMode</code></td><td>The editor is in snippet mode.</td></tr><tr class="odd"><td><code>inQuickOpen</code></td><td>The Quick Open dropdown has focus.</td></tr><tr class="even"><td><strong>Resource contexts</strong></td><td></td></tr><tr class="odd"><td><code>resourceScheme</code></td><td>True when the resource Uri scheme matches. Example: <code>"resourceScheme == file"</code></td></tr><tr class="even"><td><code>resourceFilename</code></td><td>True when the Explorer or editor filename matches. Example: <code>"resourceFilename == gulpfile.js"</code></td></tr><tr class="odd"><td><code>resourceExtname</code></td><td>True when the Explorer or editor filename extension matches. Example: <code>"resourceExtname == .js"</code></td></tr><tr class="even"><td><code>resourceDirname</code></td><td>True when the Explorer or editor’s resource absolute folder path matches. Example: <code>"resourceDirname == /users/alice/project/src"</code></td></tr><tr class="odd"><td><code>resourcePath</code></td><td>True when the Explorer or editor’s resource absolute path matches. Example: <code>"resourcePath == /users/alice/project/gulpfile.js"</code></td></tr><tr class="even"><td><code>resourceLangId</code></td><td>True when the Explorer or editor title <a href="/docs/languages/identifiers">language ID</a> matches. Example: <code>"resourceLangId == markdown"</code></td></tr><tr class="odd"><td><code>isFileSystemResource</code></td><td>True when the Explorer or editor file is a file system resource that can be handled from a file system provider</td></tr><tr class="even"><td><code>resourceSet</code></td><td>True when an Explorer or editor file is set</td></tr><tr class="odd"><td><code>resource</code></td><td>The full Uri of the Explorer or editor file</td></tr><tr class="even"><td><strong>Explorer contexts</strong></td><td></td></tr><tr class="odd"><td><code>explorerViewletVisible</code></td><td>True if Explorer view is visible.</td></tr><tr class="even"><td><code>explorerViewletFocus</code></td><td>True if Explorer view has keyboard focus.</td></tr><tr class="odd"><td><code>filesExplorerFocus</code></td><td>True if File Explorer section has keyboard focus.</td></tr><tr class="even"><td><code>openEditorsFocus</code></td><td>True if OPEN EDITORS section has keyboard focus.</td></tr><tr class="odd"><td><code>explorerResourceIsFolder</code></td><td>True if a folder is selected in the Explorer.</td></tr><tr class="even"><td><strong>Editor widget contexts</strong></td><td></td></tr><tr class="odd"><td><code>findWidgetVisible</code></td><td>Editor Find widget is visible.</td></tr><tr class="even"><td><code>suggestWidgetVisible</code></td><td>Suggestion widget (IntelliSense) is visible.</td></tr><tr class="odd"><td><code>suggestWidgetMultipleSuggestions</code></td><td>Multiple suggestions are displayed.</td></tr><tr class="even"><td><code>renameInputVisible</code></td><td>Rename input text box is visible.</td></tr><tr class="odd"><td><code>referenceSearchVisible</code></td><td>Peek References peek window is open.</td></tr><tr class="even"><td><code>inReferenceSearchEditor</code></td><td>The Peek References peek window editor has focus.</td></tr><tr class="odd"><td><code>config.editor.stablePeek</code></td><td>Keep peek editors open (controlled by <code>editor.stablePeek</code> setting).</td></tr><tr class="even"><td><code>quickFixWidgetVisible</code></td><td>Quick Fix widget is visible.</td></tr><tr class="odd"><td><code>parameterHintsVisible</code></td><td>Parameter hints are visible (controlled by <code>editor.parameterHints.enabled</code> setting).</td></tr><tr class="even"><td><code>parameterHintsMultipleSignatures</code></td><td>Multiple parameter hints are displayed.</td></tr><tr class="odd"><td><strong>Debugger contexts</strong></td><td></td></tr><tr class="even"><td><code>debuggersAvailable</code></td><td>An appropriate debugger extension is available</td></tr><tr class="odd"><td><code>inDebugMode</code></td><td>A debug session is running.</td></tr><tr class="even"><td><code>debugState</code></td><td>Active debugger state. Possible values are <code>inactive</code>, <code>initializing</code>, <code>stopped</code>, <code>running</code>.</td></tr><tr class="odd"><td><code>debugType</code></td><td>True when debug type matches. Example: <code>"debugType == 'node'"</code>.</td></tr><tr class="even"><td><code>inDebugRepl</code></td><td>Focus is in the Debug Console REPL.</td></tr><tr class="odd"><td><strong>Integrated terminal contexts</strong></td><td></td></tr><tr class="even"><td><code>terminalFocus</code></td><td>An integrated terminal has focus.</td></tr><tr class="odd"><td><code>terminalIsOpen</code></td><td>An integrated terminal is opened.</td></tr><tr class="even"><td><strong>Timeline view contexts</strong></td><td></td></tr><tr class="odd"><td><code>timelineFollowActiveEditor</code></td><td>True if the Timeline view is following the active editor.</td></tr><tr class="even"><td><strong>Timeline view item contexts</strong></td><td></td></tr><tr class="odd"><td><code>timelineItem</code></td><td>True when the timeline item’s context value matches. Example: <code>"timelineItem =~ /git:file:commit\\b/"</code>.</td></tr><tr class="even"><td><strong>Extension contexts</strong></td><td></td></tr><tr class="odd"><td><code>extension</code></td><td>True when the extension’s ID matches. Example: <code>"extension == eamodio.gitlens"</code>.</td></tr><tr class="even"><td><code>extensionStatus</code></td><td>True when the extension is installed. Example: <code>"extensionStatus == installed"</code>.</td></tr><tr class="odd"><td><code>extensionHasConfiguration</code></td><td>True if the extension has configuration.</td></tr><tr class="even"><td><strong>Global UI contexts</strong></td><td></td></tr><tr class="odd"><td><code>notificationFocus</code></td><td>Notification has keyboard focus.</td></tr><tr class="even"><td><code>notificationCenterVisible</code></td><td>Notification Center is visible at the bottom right of VS Code.</td></tr><tr class="odd"><td><code>notificationToastsVisible</code></td><td>Notification toast is visible at the bottom right of VS Code.</td></tr><tr class="even"><td><code>searchViewletVisible</code></td><td>Search view is open.</td></tr><tr class="odd"><td><code>sideBarVisible</code></td><td>Side Bar is displayed.</td></tr><tr class="even"><td><code>sideBarFocus</code></td><td>Side Bar has focus.</td></tr><tr class="odd"><td><code>panelFocus</code></td><td>Panel has focus.</td></tr><tr class="even"><td><code>inZenMode</code></td><td>Window is in Zen Mode.</td></tr><tr class="odd"><td><code>isCenteredLayout</code></td><td>Editor is in centered layout mode.</td></tr><tr class="even"><td><code>workbenchState</code></td><td>Can be <code>empty</code>, <code>folder</code> (1 folder), or <code>workspace</code>.</td></tr><tr class="odd"><td><code>workspaceFolderCount</code></td><td>Count of workspace folders.</td></tr><tr class="even"><td><code>replaceActive</code></td><td>Search view Replace text box is open.</td></tr><tr class="odd"><td><code>view</code></td><td>True when view identifier matches. Example: <code>"view == myViewsExplorerID"</code>.</td></tr><tr class="even"><td><code>viewItem</code></td><td>True when viewItem context matches. Example: <code>"viewItem == someContextValue"</code>.</td></tr><tr class="odd"><td><code>isFullscreen</code></td><td>True when window is in fullscreen.</td></tr><tr class="even"><td><code>focusedView</code></td><td>The identifier of the currently focused view.</td></tr><tr class="odd"><td><code>canNavigateBack</code></td><td>True if it is possible to navigate back.</td></tr><tr class="even"><td><code>canNavigateForward</code></td><td>True if it is possible to navigate forward.</td></tr><tr class="odd"><td><code>canNavigateToLastEditLocation</code></td><td>True if it is possible to navigate to the last edit location.</td></tr><tr class="even"><td><strong>Global Editor UI contexts</strong></td><td></td></tr><tr class="odd"><td><code>textCompareEditorVisible</code></td><td>At least one diff (compare) editor is visible.</td></tr><tr class="even"><td><code>textCompareEditorActive</code></td><td>A diff (compare) editor is active.</td></tr><tr class="odd"><td><code>editorIsOpen</code></td><td>True if one editor is open.</td></tr><tr class="even"><td><code>groupEditorsCount</code></td><td>Number of editors in a group.</td></tr><tr class="odd"><td><code>activeEditorGroupEmpty</code></td><td>True if the active editor group has no editors.</td></tr><tr class="even"><td><code>activeEditorGroupIndex</code></td><td>A number starting from <code>1</code> reflecting the position of an editor group in the editor grid. The group with index <code>1</code> will be the first in the top-left corner.</td></tr><tr class="odd"><td><code>activeEditorGroupLast</code></td><td>Will be <code>true</code> for the last editor group in the editor grid.</td></tr><tr class="even"><td><code>multipleEditorGroups</code></td><td>True when multiple editor groups are present.</td></tr><tr class="odd"><td><code>activeEditor</code></td><td>The identifier of the active editor in a group.</td></tr><tr class="even"><td><code>activeEditorIsDirty</code></td><td>True when the active editor in a group is dirty.</td></tr><tr class="odd"><td><code>activeEditorIsNotPreview</code></td><td>True when the active editor in a group is not in preview mode.</td></tr><tr class="even"><td><code>activeEditorIsPinned</code></td><td>True when the active editor in a group is pinned.</td></tr><tr class="odd"><td><code>inSearchEditor</code></td><td>True when focus is inside a search editor.</td></tr><tr class="even"><td><strong>Configuration settings contexts</strong></td><td></td></tr><tr class="odd"><td><code>config.editor.minimap.enabled</code></td><td>True when the setting <code>editor.minimap.enabled</code> is <code>true</code>.</td></tr></tbody></table>

> **Note**: You can use any user or workspace setting that evaluates to a boolean here with the prefix `"config."`.

## Active/focused view or panel when clause context

You can have a when clause that checks if a specific view or panel is visible.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Context name</th><th>True when</th></tr></thead><tbody><tr class="odd"><td>activeViewlet</td><td>True when view is visible. Example: <code>"activeViewlet == 'workbench.view.explorer'"</code></td></tr><tr class="even"><td>activePanel</td><td>True when panel is visible. Example: <code>"activePanel == 'workbench.panel.output'"</code></td></tr><tr class="odd"><td>focusedView</td><td>True when view is focused. Example: <code>"focusedView == myViewsExplorerID"</code></td></tr></tbody></table>

View Identifiers:

- workbench.view.explorer - File Explorer
- workbench.view.search - Search
- workbench.view.scm - Source Control
- workbench.view.debug - Run
- workbench.view.extensions - Extensions

Panel Identifiers:

- workbench.panel.markers - Problems
- workbench.panel.output - Output
- workbench.panel.repl - Debug Console
- terminal - Integrated Terminal
- workbench.panel.comments - Comments
- workbench.view.search - Search when `search.location` is set to `panel`

If you want a when clause that is enabled only when a specific view or panel has focus, use `sideBarFocus` or `panelFocus` in combination with `activeViewlet` or `activePanel`.

For example, the when clause below is true only when the File Explorer has focus:

    "sideBarFocus && activeViewlet == 'workbench.view.explorer'"

## Check a setting in a when clause

In a when clause, you can reference a configuration (setting) value by prefixing it with `config.`, for example `config.editor.tabCompletion` or `config.breadcrumbs.enabled`.

## Add a custom when clause context

If you are authoring your own VS Code extension and need to enable/disable commands, menus, or views by using a `when` clause context and none of the existing keys suit your needs, you can add your own context with the `setContext` command.

The first example below sets the key `myExtension.showMyCommand` to true, which you can use in enablement of commands or with the `when` property. The second example stores a value that you could use with a `when` clause to check if the number of cool open things is greater than 2.

    vscode.commands.executeCommand('setContext', 'myExtension.showMyCommand', true);

    vscode.commands.executeCommand('setContext', 'myExtension.numberOfCoolOpenThings', 4);

## ‘in’ conditional operator

The `in` operator for `when` clauses allows for a dynamic lookup of a context key’s value within another context key’s value. For example, if you wanted to add a context menu command to folders that contain a certain type of file (or something that can’t be statically known), you can now use the `in` operator to achieve it.

First, determine which folders should support the command, and the folder name to an array. Then, use the `setContext` command to turn the array into a context key:

    vscode.commands.executeCommand('setContext', 'ext.supportedFolders', [ 'test', 'foo', 'bar' ]);

    // or

    // Note in this case (using an object), the value doesn't matter, it is based on the existence of the key in the object
    vscode.commands.executeCommand('setContext', 'ext.supportedFolders', { 'test': true, 'foo': 'anything', 'bar': false });

Then, in the `package.json` you could add a menu contribution for the `explorer/context` menu:

    // Note, this assumes you have already defined a command called ext.doSpecial
    "menus": {
      "explorer/context": [
        {
          "command": "ext.doSpecial",
          "when": "explorerResourceIsFolder && resourceFilename in ext.supportedFolders"
        }
      ]
    }

In that example, we are taking the value of `resourceFilename` (which is the name of the folder in this case) and checking for its existence in the value of `ext.supportedFolders`. If it exists, the menu will be shown. This powerful operator should allow for richer conditional and dynamic contributions that support `when` clauses, for example menus, views, etc.

## Inspect Context Keys utility

If you’d like to see all currently active context keys at runtime, you can use the **Developer: Inspect Context Keys** command from the Command Palette (`kb(workbench.action.showCommands)`). **Inspect Context Keys** will display context keys and their values in the VS Code Developer Tools **Console** tab (**Help** &gt; **Toggle Developer Tools**).

When you run **Developer: Inspect Context Keys**, your cursor will highlight elements in the VS Code UI and when you click on an element, the current context keys and their states will be output as an object to the Console.

![Inspect Context Keys output](images/when-clause-contexts/inspect-context-keys.png)

The list of active context keys is extensive and may contain [custom context keys](#add-a-custom-when-clause-context) from extensions you have installed.

> **Note**: Some context keys are for VS Code internal use and may change in the future.
