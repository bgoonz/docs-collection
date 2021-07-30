---
title: Cloning a repository
intro: 'When you create a repository on {% data variables.product.product_location %}, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.'
redirect_from:
  - /articles/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---
## About cloning a repository

You can clone a repository from {% data variables.product.product_location %} to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from {% data variables.product.product_location %} to your local machine.

Cloning a repository pulls down a full copy of all the repository data that {% data variables.product.product_location %} has at that point in time, including all versions of every file and folder for the project. You can push your changes to the remote repository on {% data variables.product.product_location %}, or pull other people's changes from {% data variables.product.product_location %}. For more information, see "[Using Git](/github/getting-started-with-github/using-git)".

You can clone your existing repository or clone another person's existing repository to contribute to a project.

## Cloning a repository

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.download-cli %}

To clone a repository locally, use the `repo clone` subcommand. Replace the `repository` parameter with the repository name. For example, `octo-org/octo-repo`, `monalisa/octo-repo`, or `octo-repo`. If the `OWNER/` portion of the `OWNER/REPO` repository argument is omitted, it defaults to the name of the authenticating user.

```shell
gh repo clone <em>repository</em>
```

You can also use the GitHub URL to clone a repository.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. Follow the prompts in {% data variables.product.prodname_desktop %} to complete the clone.

For more information, see "[Cloning a repository from {% data variables.product.prodname_dotcom %} to {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)."

{% enddesktop %}

## Cloning an empty repository

An empty repository contains no files. It's often made if you don't initialize the repository with a README when creating it.

{% data reusables.repositories.navigate-to-repo %}
2. To clone your repository using the command line using HTTPS, under "Quick setup", click {% octicon "clippy" aria-label="The clipboard icon" %}. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "clippy" aria-label="The clipboard icon" %}.
   ![Empty repository clone URL button](/assets/images/help/repository/empty-https-url-clone-button.png)

   Alternatively, to clone your repository in Desktop, click {% octicon "desktop-download" aria-label="The desktop download button" %} **Set up in Desktop** and follow the prompts to complete the clone.
   ![Empty repository clone desktop button](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

## Troubleshooting cloning errors

When cloning a repository it's possible that you might encounter some errors.

If you're unable to clone a repository, check that:

- You can connect using HTTPS. For more information, see "[HTTPS cloning errors](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)."
- You have permission to access the repository you want to clone. For more information, see "[Error: Repository not found](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)."
- The default branch you want to clone still exists. For more information, see  have permission to access the repository you want to clone. For more information, see "[Error: Remote HEAD refers to nonexistent ref, unable to checkout](/github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)."

{% ifversion fpt %}

## Further reading

- "[Troubleshooting connectivity problems](/articles/troubleshooting-connectivity-problems)"
{% endif %}
