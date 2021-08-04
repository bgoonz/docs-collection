# VS Code Remote Development

**Visual Studio Code Remote Development** allows you to use a container, remote machine, or the [Windows Subsystem for Linux](https://docs.microsoft.com/windows/wsl) (WSL) as a full-featured development environment. You can:

- Develop on the **same operating system** you deploy to or use **larger or more specialized** hardware.
- **Separate** your development environment to avoid impacting your local **machine configuration**.
- Make it easy for new contributors to **get started** and keep everyone on a **consistent environment**.
- Use tools or runtimes **not available** on your local OS or manage **multiple versions** of them.
- Develop your Linux-deployed applications using the **Windows Subsystem for Linux**.
- Access an **existing** development environment from **multiple machines or locations**.
- Debug an **application running somewhere else** such as a customer site or in the cloud.

**No source code** needs to be on your local machine to get these benefits. Each extension in the [Remote Development extension pack](https://aka.ms/vscode-remote/download/extension) can run commands and other extensions directly inside a container, in WSL, or on a remote machine so that everything feels like it does when you run locally.

![Architecture](images/remote-overview/architecture.png)

## Getting started

### Remote Development extension pack

The [Remote Development extension pack](https://aka.ms/vscode-remote/download/extension) includes three extensions. See the following articles to get started with each of them:

- [Remote - SSH](/docs/remote/ssh.md) - Connect to any location by opening folders on a remote machine/VM using SSH.
- [Remote - Containers](/docs/remote/containers.md) - Work with a separate toolchain or container-based application inside (or mounted into) a container.
- [Remote - WSL](/docs/remote/wsl.md) - Get a Linux-powered development experience in the Windows Subsystem for Linux.

While most VS Code extensions should work unmodified in a remote environment, extension authors can learn more at [Supporting Remote Development](/api/advanced-topics/remote-extensions.md).

## Remote tutorials

The tutorials below will walk you through running Visual Studio Code with the Remote Development extensions.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Tutorial</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><a href="/docs/remote/ssh-tutorial.md">Remote via SSH</a></td><td>Connect to remote and virtual machines with Visual Studio Code via SSH.</td></tr><tr class="even"><td><a href="/docs/remote/wsl-tutorial.md">Work in WSL</a></td><td>Run Visual Studio Code in Windows Subsystem for Linux.</td></tr><tr class="odd"><td><a href="/docs/remote/containers-tutorial.md">Develop in Containers</a></td><td>Run Visual Studio Code in a Docker Container.</td></tr><tr class="even"><td><a href="https://docs.github.com/github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code">GitHub Codespaces</a></td><td>Connect to a codespace with Visual Studio Code.</td></tr></tbody></table>

## GitHub Codespaces

[GitHub Codespaces](/docs/remote/codespaces.md) provides remote development environments that are managed for you. You can configure and create a development environment hosted in the cloud, which is spun up and available when you need it.

## Questions or feedback

- See [Tips and Tricks](/docs/remote/troubleshooting.md) or the [FAQ](/docs/remote/faq.md).
- Search on [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-remote).
- Add a [feature request](https://aka.ms/vscode-remote/feature-requests) or [report a problem](https://aka.ms/vscode-remote/issues/new).
