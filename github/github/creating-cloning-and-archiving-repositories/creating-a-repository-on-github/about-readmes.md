---
title: About READMEs
intro: 'You can add a README file to your repository to tell other people why your project is useful, what they can do with your project, and how they can use it.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---
## About READMEs

You can add a README file to a repository to communicate important information about your project. A README, along with a repository license{% ifversion fpt or ghes > 3.2 or ghae-issue-4651 %}, citation file{% endif %}{% ifversion fpt %}, contribution guidelines, and a code of conduct{% elsif ghes %} and contribution guidelines{% endif %}, communicates expectations for your project and helps you manage contributions.

For more information about providing guidelines for your project, see {% ifversion fpt %}"[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."

A README is often the first item a visitor will see when visiting your repository. README files typically include information on:
- What the project does
- Why the project is useful
- How users can get started with the project
- Where users can get help with your project
- Who maintains and contributes to the project

If you put your README file in your repository's root, `docs`, or hidden `.github` directory, {% data variables.product.product_name %} will recognize and automatically surface your README to repository visitors.

![Main page of the github/scientist repository and its README file](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghae or ghes > 2.21 %}

{% ifversion fpt or ghes > 2.21 %}

{% data reusables.profile.profile-readme %}

{% endif %}

![README file on your username/username repository](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

## Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

The auto-generated table of contents is enabled by default for all Markdown files in a repository, but you can disable this feature for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features", deselect **Table of contents**.
![Automatic TOC setting for repositories](/assets/images/help/repository/readme-automatic-toc-setting.png)

## Section links in README files and blob pages

{% data reusables.repositories.section-links %}

## Relative links and image paths in README files

{% data reusables.repositories.relative-links %}

## Further reading

- "[Adding a file to a repository](/articles/adding-a-file-to-a-repository)"
- 18F's "[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)"
