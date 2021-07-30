Use the Windows Subsystem for Linux (WSL)
=========================================

What is WSL?
------------

The [Windows Subsystem for Linux](https://docs.microsoft.com/windows/wsl/about) (WSL) lets you run a Linux environment, including command-line tools and applications, directly on Windows, without the overhead of a traditional virtual machine or dual boot setup.

WSL especially helps web developers and those working with Bash and Linux-first tools (for example, Ruby and Python) to use their tools on Windows and ensure consistency between development and production environments.

Get started with WSL in VS Code
-------------------------------

To get started with using WSL in VS Code, you’ll need to download the [Remote - WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) from the Extension Marketplace.

![Remote WSL extension](images/wsl/remote-wsl.png)

You’ll also need WSL and a Linux distribution installed. We recommend using WSL 2, which is the newest version of WSL, as you will benefit from significant [performance advantages](https://docs.microsoft.com/windows/wsl/compare-versions) over WSL 1.

Check out Remote - WSL in action:

<img src="https://github.com/microsoft/vscode-remote-release/blob/main/docs/images/remote-wsl-open-code.gif?raw=true" alt="Gif using Remote - WSL" class="thumb" />

The typical flow is you’ll open a Linux command prompt, navigate to a folder of your choosing, and type `code .` to launch a new instance of VS Code connected to WSL. From there, you get the full experience of using VS Code as if you were developing on Linux, except you’re on a Windows machine!

Next steps
----------

We highly recommend checking out the step-by-step [WSL tutorial](/docs/remote/wsl-tutorial.md) to learn more.
