---
title: Creating a project board
intro: 'Project boards can be used to create customized workflows to suit your needs, like tracking and prioritizing specific feature work, comprehensive roadmaps, or even release checklists.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} For more information, see "[Linking a repository to a project board](/articles/linking-a-repository-to-a-project-board)."

Once you've created your project board, you can add issues, pull requests, and notes to it. For more information, see "[Adding issues and pull requests to a project board](/articles/adding-issues-and-pull-requests-to-a-project-board)" and "[Adding notes to a project board](/articles/adding-notes-to-a-project-board)."

You can also configure workflow automations to keep your project board in sync with the status of issues and pull requests. For more information, see "[About automation for project boards](/articles/about-automation-for-project-boards)."

{% data reusables.project-management.project-board-import-with-api %}

## Creating a user-owned project board

{% data reusables.profile.access_profile %}
2. On the top of your profile page, in the main navigation, click {% octicon "project" aria-label="The project board icon" %} **Projects**.
![Project tab](/assets/images/help/projects/user-projects-tab.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Creating an organization-wide project board

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Creating a repository project board

{% data reusables.repositories.navigate-to-repo %}
2. Under your repository name, click {% octicon "project" aria-label="The project board icon" %} **Projects**.
![Project tab](/assets/images/help/projects/repo-tabs-projects.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Further reading

- "[About projects boards](/articles/about-project-boards)"
- "[Editing a project board](/articles/editing-a-project-board)"{% ifversion fpt %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
- "[Closing a project board](/articles/closing-a-project-board)"
- "[About automation for project boards](/articles/about-automation-for-project-boards)"
