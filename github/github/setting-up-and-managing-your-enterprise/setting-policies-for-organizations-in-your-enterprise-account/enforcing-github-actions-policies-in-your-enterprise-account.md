---
title: Enforcing GitHub Actions policies in your enterprise account
intro: 'Enterprise owners can disable, enable, and limit {% data variables.product.prodname_actions %} for an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: Policies for GitHub Actions
---
## About {% data variables.product.prodname_actions %} permissions for your enterprise account

By default, {% data variables.product.prodname_actions %} is enabled in all organizations owned by an enterprise account. You can choose to disable {% data variables.product.prodname_actions %} for all organizations owned by an enterprise account, or only allow specified organizations. You can also limit the use of public actions, so that people can only use local actions that exist in your organization.

For more information about {% data variables.product.prodname_actions %}, see "[About {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

## Managing {% data variables.product.prodname_actions %} permissions for your enterprise account

You can disable all workflows for an enterprise or set a policy that configures which actions can be used in an organization.

{% data reusables.actions.actions-use-policy-settings %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Click **Save**.

## Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under **Policies**, select **Allow select actions** and add your required actions to the list.
  ![Add actions to allow list](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)

## Configuring required approval for workflows from public forks

{% data reusables.actions.workflow-run-approve-public-fork %} You can configure this behavior for your enterprise using the procedure below.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

## Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

### Configuring the private fork policy for your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

## Setting the permissions of the `GITHUB_TOKEN` for your enterprise

{% data reusables.github-actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your enterprise, organizations, or repositories. If you choose the restricted option as the default in your enterprise settings, this prevents the more permissive setting being chosen in the organization or repository settings.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under **Workflow permissions**, choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.
  ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
1. Click **Save** to apply the settings.
