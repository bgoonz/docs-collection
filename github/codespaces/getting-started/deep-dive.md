---
title: Deep dive into Codespaces
intro: 'Understand how {% data variables.product.prodname_codespaces %} works.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
---

{% data variables.product.prodname_codespaces %} is an instant, cloud-based development environment that uses a container to provide you with common languages, tools, and utilities for development. {% data variables.product.prodname_codespaces %} is also configurable, allowing you to create a customized development environment for your project. By configuring a custom development environment for your project, you can have a repeatable codespace configuration for all users of your project.

## Creating your codespace

There are a number of entry points to create a codespace.

- From your repository for new feature work.
- From an open pull request to explore work-in-progress.
- From a commit in the repository's history to investigate a bug at a specific point in time.
- From {% data variables.product.prodname_vscode %}.
  
Your codespace can be ephemeral if you need to test something or you can return to the same codespace to work on long-running feature work. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."

Once you've selected the option to create a new codespace, some steps happen in the background before the codespace is available to you.

![Open with Codespaces button](/assets/images/help/codespaces/open-with-codespaces-button-smaller.png)
### Step 1: VM and storage are assigned to your codespace

When you create a codespace, a [shallow clone](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) of your repository is made on a Linux virtual machine that is both dedicated and private to you. Having a dedicated VM ensures that you have the entire set of compute resources from that machine available to you. If necessary, this also allows you to have full root access to your container.

### Step 2: Container is created

{% data variables.product.prodname_codespaces %} uses a container as the development environment. This container is created based on the configurations that you can define in a `devcontainer.json` file and/or Dockerfile in your repository. If you don't [configure a container](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project), {% data variables.product.prodname_codespaces %} uses a [default image](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration), which has many languages and runtimes available. For information on what the default image contains, see the [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) repository.

### Step 3: Connecting to the codespace

When your container has been created and any other initialization has run, you'll be connected to your codespace. You can connect to it through the web or via [Visual Studio Code](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code), or both, if needed.

### Step 4: Post-creation setup

Once you're connected to your codespace, automated setup that you specified in your `devcontainer.json` file, such as running the `postCreateCommand` and `postAttachCommand`, may continue. If you have a public dotfiles repository {% data variables.product.prodname_codespaces %}, you can enable it for use with new codespaces. When enabled, your dotfiles will be cloned to the container and look for an install file. For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account#dotfiles)." 

Finally, the entire history of the repository is copied down with a full clone.

During post-creation setup you'll still be able to use the integrated terminal and make edits to your files, but take care to avoid any race conditions between your work and the commands that are running.
## {% data variables.product.prodname_codespaces %} lifecycle

### Saving files in your codespace

As you develop in your codespace, it will save any changes to your files every few seconds. Your codespace will keep running for 30 minutes after the last activity. After that time it will stop running but you can restart it from either from the existing browser tab or the list of existing codespaces. File changes from the editor and terminal output are counted as activity and so your codespace will not stop if terminal output is continuing.

{% note %}

**Note:** Changes in a codespace in {% data variables.product.prodname_vscode %} are not saved automatically, unless you have enabled [Auto Save](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save).
{% endnote %}

### Closing or stopping your codespace

To stop your codespace you can [use the command palette](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)). If you exit your codespace without running the stop command, such as closing the browser tab, running processes will continue until a window of inactivity occurs. 

When you close or stop your codespace, all uncommitted changes are preserved until you connect to the codespace again.


## Running your application

Port forwarding gives you access to TCP ports running within your codespace. For example, if you're running a web application on port 4000 within your codespace, you can automatically forward that port to make the application accessible from your browser.

Port forwarding determines which ports are made accessible to you from the remote machine. Even if you do not forward a port, that port is still accessible to other processes running inside the codespace itself. 

![Diagram showing how port forwarding works in a codespace](/assets/images/help/codespaces/port-forwarding.png)

When an application running inside {% data variables.product.prodname_codespaces %} outputs a port to the console, {% data variables.product.prodname_codespaces %} detects the localhost URL pattern and automatically forwards the port. You can click on the URL in the terminal or in the toast message to open the port in a browser. For more information on port forwarding, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."

While ports can be forwarded automatically, they are not are publicly accessible to the internet. By default, all ports are private, but you can [manually make a port public](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port) to share access through a URL.

Running your application when you first land in your codespace can make for a fast inner dev loop. As you edit, your changes are automatically saved and available on your forwarded port. To view changes, go back to the running application tab in your browser and refresh it.

## Committing and pushing your changes

Git is available by default in your codespace and so you can rely on your existing Git workflow. You can work with Git in your codespace either via the Terminal or by using [Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol)'s source control UI. For more information, see "[Using source control in your codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"

![Running git status in Codespaces Terminal](/assets/images/help/codespaces/git-status.png)

You can create a codespace from any branch, commit, or pull request in your project. Because {% data variables.product.prodname_codespaces %} is designed to be ephemeral, you can use it as an isolated environment to experiment, check a teammate's pull request, or fix merge conflicts. While you can only create one codespace for each branch, you can switch to a new or existing branch within your codespace.

{% note %}

**Note:** Commits from your codespace will be attributed to the name and public email configured at https://github.com/settings/profile. A token scoped to the repository, included in the environment as `GITHUB_TOKEN`, and your GitHub credentials will be used to authenticate.

{% endnote %}

## Personalizing your codespace with extensions

Using {% data variables.product.prodname_vscode %} in your codespace gives you access to the {% data variables.product.prodname_vscode %} Marketplace so that you can add any extensions you need. For information on how extensions run in {% data variables.product.prodname_codespaces %}, see [Supporting Remote Development and GitHub Codespaces](https://code.visualstudio.com/api/advanced-topics/remote-extensions) in the {% data variables.product.prodname_vscode %} docs. 

If you already use {% data variables.product.prodname_vscode %}, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to automatically sync extensions, settings, themes, and keyboard shortcuts between your local instance and any {% data variables.product.prodname_codespaces %} you create.
