---
title: Launching GitHub Desktop from the command line
shortTitle: Launching from the command line
intro: You can launch GitHub Desktop from the command line.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
---
{% mac %}

1. In the menu bar, select the **{% data variables.product.prodname_desktop %}** menu, then click **Install Command Line Tool**.
![Install Command Line Tool option in the {% data variables.product.prodname_desktop %} drop-down menu](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Open Terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  You can also change to your repository path and then type `github .` to open that repository.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Open a command prompt.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 You can also change to your repository path and then type `github .` to open that repository.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
