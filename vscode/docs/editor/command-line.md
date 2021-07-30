Command Line Interface (CLI)
============================

Visual Studio Code has a powerful command line interface built-in that lets you control how you launch the editor. You can open files, install extensions, change the display language, and output diagnostics through command-line options (switches).

![command line example](images/command-line/hero.png)

If you are looking for how to run command-line tools inside VS Code, see the [Integrated Terminal](/docs/editor/integrated-terminal.md).

Command line help
-----------------

To get an overview of the VS Code command line interface, open a terminal or command prompt and type `code --help`. You will see the version, usage example, and list of command line options.

![command line help](images/command-line/command-line-help.png)

Launching from command line
---------------------------

You can launch VS Code from the command line to quickly open a file, folder, or project. Typically, you open VS Code within the context of a folder. To do this, from an open terminal or command prompt, navigate to your project folder and type `code .`:

![launch VS Code](images/command-line/launch-vscode.png)

**Note:** Users on macOS must first run a command (**Shell Command: Install ‘code’ command in PATH**) to add VS Code executable to the `PATH` environment variable. Read the [macOS setup guide](/docs/setup/mac.md) for help.

Windows and Linux installations should add the VS Code binaries location to your system path. If this isn’t the case, you can manually add the location to the `Path` environment variable (`$PATH` on Linux). For example, on Windows, VS Code is installed under `AppData\Local\Programs\Microsoft VS Code\bin`. To review platform specific setup instructions, see [Setup](/docs/setup/setup-overview.md).

> **Insiders:** If you are using the VS Code [Insiders](/insiders) preview, you launch your Insiders build with `code-insiders`.

Core CLI options
----------------

Here are optional arguments you can use when starting VS Code at the command line via `code`:

<table style="width:99%;"><colgroup><col style="width: 62%" /><col style="width: 37%" /></colgroup><thead><tr class="header"><th>Argument</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-h</code> or <code>--help</code></td><td>Print usage</td></tr><tr class="even"><td><code>-v</code> or <code>--version</code></td><td>Print VS Code version (for example, 1.22.2), GitHub commit id, and architecture (for example, x64).</td></tr><tr class="odd"><td><code>-n</code> or <code>--new-window</code></td><td>Opens a new session of VS Code instead of restoring the previous session (default).</td></tr><tr class="even"><td><code>-r</code> or <code>--reuse-window</code></td><td>Forces opening a file or folder in the last active window.</td></tr><tr class="odd"><td><code>-g</code> or <code>--goto</code></td><td>When used with <em>file:line[:character]</em>, opens a file at a specific line and optional character position. This argument is provided since some operating systems permit <code>:</code> in a file name.</td></tr><tr class="even"><td><code>-d</code> or <code>--diff</code></td><td>Open a file difference editor. Requires two file paths as arguments.</td></tr><tr class="odd"><td><code>-w</code> or <code>--wait</code></td><td>Wait for the files to be closed before returning.</td></tr><tr class="even"><td><code>--locale &lt;locale&gt;</code></td><td>Set the <a href="/docs/getstarted/locales.md">display language</a> (locale) for the VS Code session. (for example, <code>en-US</code> or <code>zh-TW</code>)</td></tr></tbody></table>

![launch with locale](images/command-line/launch-locale.png)

Opening Files and Folders
-------------------------

Sometimes you will want to open or create a file. If the specified file does not exist, VS Code will create them for you along with any new intermediate folders:

    code index.html style.css documentation\readme.md

For both files and folders, you can use absolute or relative paths. Relative paths are relative to the current directory of the command prompt where you run `code`.

If you specify more than one file at the command line, VS Code will open only a single instance.

If you specify more than one folder at the command line, VS Code will create a [Multi-root Workspace](/docs/editor/multi-root-workspaces.md) including each folder.

<table style="width:99%;"><colgroup><col style="width: 62%" /><col style="width: 37%" /></colgroup><thead><tr class="header"><th>Argument</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>file</code></td><td>Name of a file to open. If the file doesn’t exist, it will be created and marked as edited. You can specify multiple files by separating each file name with a space.</td></tr><tr class="even"><td><code>file:line[:character]</code></td><td>Used with the <code>-g</code> argument. Name of a file to open at the specified line and optional character position. You can specify multiple files in this manner, but you must use the <code>-g</code> argument (once) before using the <code>file:line[:character]</code> specifier.</td></tr><tr class="odd"><td><code>folder</code></td><td>Name of a folder to open. You can specify multiple folders and a new <a href="/docs/editor/multi-root-workspaces.md">Multi-root Workspace</a> is created.</td></tr></tbody></table>

![go to line and column](images/command-line/goto-line-column.png)

Working with extensions
-----------------------

You can install and manage VS Code [extensions](/docs/editor/extension-marketplace.md) from the command line.

<table style="width:99%;"><colgroup><col style="width: 62%" /><col style="width: 37%" /></colgroup><thead><tr class="header"><th>Argument</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>--install-extension &lt;ext&gt;</code></td><td>Install an extension. Provide the full extension name <code>publisher.extension</code> as an argument. Use <code>--force</code> argument to avoid prompts.</td></tr><tr class="even"><td><code>--uninstall-extension &lt;ext&gt;</code></td><td>Uninstall an extension. Provide the full extension name <code>publisher.extension</code> as an argument.</td></tr><tr class="odd"><td><code>--disable-extensions</code></td><td>Disable all installed extensions. Extensions will still be visible in the <strong>Disabled</strong> section of the Extensions view but they will never be activated.</td></tr><tr class="even"><td><code>--list-extensions</code></td><td>List the installed extensions.</td></tr><tr class="odd"><td><code>--show-versions</code></td><td>Show versions of installed extensions, when using <code>--list-extensions</code></td></tr><tr class="even"><td><code>--enable-proposed-api &lt;ext&gt;</code></td><td>Enables proposed api features for an extension. Provide the full extension name <code>publisher.extension</code> as an argument.</td></tr></tbody></table>

![install extension](images/command-line/install-extension.png)

Advanced CLI options
--------------------

There are several CLI options that help with reproducing errors and advanced setup.

<table style="width:99%;"><colgroup><col style="width: 62%" /><col style="width: 37%" /></colgroup><thead><tr class="header"><th>Argument</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>--extensions-dir &lt;dir&gt;</code></td><td>Set the root path for extensions. Has no effect in <a href="/docs/editor/portable.md">Portable Mode</a>.</td></tr><tr class="even"><td><code>--user-data-dir &lt;dir&gt;</code></td><td>Specifies the directory that user data is kept in, useful when running as root. Has no effect in <a href="/docs/editor/portable.md">Portable Mode</a>.</td></tr><tr class="odd"><td><code>-s, --status</code></td><td>Print process usage and diagnostics information.</td></tr><tr class="even"><td><code>-p, --performance</code></td><td>Start with the <strong>Developer: Startup Performance</strong> command enabled.</td></tr><tr class="odd"><td><code>--disable-gpu</code></td><td>Disable GPU hardware acceleration.</td></tr><tr class="even"><td><code>--verbose</code></td><td>Print verbose output (implies <code>--wait</code>).</td></tr><tr class="odd"><td><code>--prof-startup</code></td><td>Run CPU profiler during startup.</td></tr><tr class="even"><td><code>--upload-logs</code></td><td>Uploads logs from current session to a secure endpoint.</td></tr><tr class="odd"><td><strong>Multi-root</strong></td><td></td></tr><tr class="even"><td><code>--add &lt;dir&gt;</code></td><td>Add folder(s) to the last active window for a multi-root workspace.</td></tr></tbody></table>

Opening VS Code with URLs
-------------------------

You can also open projects and files using the platform’s URL handling mechanism. Use the following URL formats to:

Open a project

    vscode://file/{full path to project}/

    vscode://file/c:/myProject/

Open a file

    vscode://file/{full path to file}

    vscode://file/c:/myProject/package.json

Open a file to line and column

    vscode://file/{full path to file}:line:column

    vscode://file/c:/myProject/package.json:5:10

You can use the URL in applications such as browsers or file explorers that can parse and redirect the URL. For example, on Windows, you could pass a `vscode://` URL directly to the Windows Explorer or to the command line as `start vscode://{full path to file}`.

![vscode url in Windows Explorer](images/command-line/vscode-url.png)

> **Note**: If you are using VS Code [Insiders](/insiders) builds, the URL prefix is `vscode-insiders://`.

Next steps
----------

Read on to find out about:

-   [Integrated Terminal](/docs/editor/integrated-terminal.md) - Run command-line tools from inside VS Code.
-   [Basic Editing](/docs/editor/codebasics.md) - Learn the basics of the VS Code editor.
-   [Code Navigation](/docs/editor/editingevolved.md) - VS Code lets you quickly understand and move through your source code.

Common questions
----------------

### ‘code’ is not recognized as an internal or external command

Your OS cannot find the VS Code binary `code` on its path. The VS Code Windows and Linux installations should have installed VS Code on your path. Try uninstalling and reinstalling VS Code. If `code` is still not found, consult the platform specific setup topics for [Windows](/docs/setup/windows.md) and [Linux](/docs/setup/linux.md).

On macOS, you need to manually run the **Shell Command: Install ‘code’ command in PATH** command (available through the **Command Palette** `kb(workbench.action.showCommands)`). Consult the [macOS](/docs/setup/mac.md) specific setup topic for details.

### How do I get access to a command line (terminal) from within VS Code?

VS Code has an [Integrated Terminal](/docs/editor/integrated-terminal.md) where you can run command-line tools from within VS Code.

### Can I specify the settings location for VS Code in order to have a portable version?

Not directly through the command line, but VS Code has a [Portable Mode](/docs/editor/portable.md) which lets you keep settings and data in the same location as your installation, for example, on a USB drive.
