---
title: Disabling or limiting GitHub Actions for a repository
intro: 'Repository owners can disable, enable, and limit {% data variables.product.prodname_actions %} for a specific repository.'
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
shortTitle: GitHub Actions
---
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_actions %} permissions for your repository

{% data reusables.github-actions.disabling-github-actions %} For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

You can enable {% data variables.product.prodname_actions %} for your repository. {% data reusables.github-actions.enabled-actions-description %} You can disable {% data variables.product.prodname_actions %} for your repository altogether. {% data reusables.github-actions.disabled-actions-description %}

Alternatively, you can enable {% data variables.product.prodname_actions %} in your repository but limit the actions a workflow can run. {% data reusables.github-actions.enabled-local-github-actions %}

{% ifversion ghes < 3.0 %}

## Managing {% data variables.product.prodname_actions %} permissions for your repository

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or {% ifversion fpt %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif ghes > 2.21 %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. Under "Actions permissions", select an option.
  ![Enable, disable, or limits actions for this repository](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% ifversion fpt or ghes > 2.22 %}

## Managing {% data variables.product.prodname_actions %} permissions for your repository

You can disable all workflows for a repository or set a policy that configures which actions can be used in a repository.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise that has overriding policy. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" or {% ifversion fpt %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif ghes > 2.21 %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Actions permissions**, select an option.
  ![Set actions policy for this organization](/assets/images/help/repository/actions-policy.png)
1. Click **Save**.

## Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Actions permissions**, select **Allow select actions** and add your required actions to the list.
  ![Add actions to allow list](/assets/images/help/repository/actions-policy-allow-list.png)
2. Click **Save**.
{% endif %}

{% ifversion fpt %}
## Configuring required approval for workflows from public forks

{% data reusables.actions.workflow-run-approve-public-fork %} You can configure this behavior for a repository using the procedure below. Modifying this setting overrides the configuration set at the organization or enterprise level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes > 2.22 %}
## Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

### Configuring the private fork policy for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## Setting the permissions of the `GITHUB_TOKEN` for your repository

{% data reusables.github-actions.workflow-permissions-intro %}

The default permissions can also be configured in the organization settings. If the more restricted default has been selected in the organization settings, the same option is auto-selected in your repository settings and the permissive option is disabled.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.
  ![Set GITHUB_TOKEN permissions for this repository](/assets/images/help/settings/actions-workflow-permissions-repository.png)
1. Click **Save** to apply the settings.
{% endif %}
