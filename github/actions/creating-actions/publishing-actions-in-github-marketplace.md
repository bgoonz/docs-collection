{% data reusables.actions.ae-beta %}

You must accept the terms of service to publish actions in {% data variables.product.prodname\_marketplace %}.

## About publishing actions

Before you can publish an action, you’ll need to create an action in your repository. For more information, see “[Creating actions](/actions/creating-actions).”

When you plan to publish your action to {% data variables.product.prodname\_marketplace %}, you’ll need ensure that the repository only includes the metadata file, code, and files necessary for the action. Creating a single repository for the action allows you to tag, release, and package the code in a single unit. {% data variables.product.prodname\_dotcom %} also uses the action’s metadata on your {% data variables.product.prodname\_marketplace %} page.

Actions are published to {% data variables.product.prodname\_marketplace %} immediately and aren’t reviewed by {% data variables.product.prodname\_dotcom %} as long as they meet these requirements:

- The action must be in a public repository.
- Each repository must contain a single action.
- The action’s metadata file (`action.yml` or `action.yaml`) must be in the root directory of the repository.
- The `name` in the action’s metadata file must be unique.
  - The `name` cannot match an existing action name published on {% data variables.product.prodname\_marketplace %}.
  - The `name` cannot match a user or organization on {% data variables.product.prodname\_dotcom %}, unless the user or organization owner is publishing the action. For example, only the {% data variables.product.prodname\_dotcom %} organization can publish an action named `github`.
  - The `name` cannot match an existing {% data variables.product.prodname\_marketplace %} category.
  - {% data variables.product.prodname\_dotcom %} reserves the names of {% data variables.product.prodname\_dotcom %} features.

## Publishing an action

You can add the action you’ve created to {% data variables.product.prodname\_marketplace %} by tagging it as a new release and publishing it.

To draft a new release and publish the action to {% data variables.product.prodname\_marketplace %}, follow these instructions:

{% data reusables.repositories.navigate-to-repo %} 1. When a repository contains an action metadata file (`action.yml` or `action.yaml`), you’ll see a banner to publish the action to {% data variables.product.prodname\_marketplace %}. Click **Draft a release**. ![Publish this action to markeplace button](/assets/images/help/repository/publish-github-action-to-markeplace-button.png) 1. Select **Publish this action to the {% data variables.product.prodname\_marketplace %}**. If you can’t select the **Publish this action to the {% data variables.product.prodname\_marketplace %}** checkbox, you’ll need to read and accept the {% data variables.product.prodname\_marketplace %} agreement first. ![Select publish to Marketplace](/assets/images/help/repository/marketplace_actions_publish.png) 1. If the labels in your metadata file contain any problems, you will see an error message. ![See notification](/assets/images/help/repository/marketplace_actions_fixerrors.png) 1. If you see any on-screen suggestions, address them by updating your metadata file. Once complete, you will see an “Everything looks good!” message. ![Fix errors](/assets/images/help/repository/marketplace_actions_looksgood.png) 1. Choose a “Primary Category” and, optionally, “Another Category” which will help people find your action in {% data variables.product.prodname\_marketplace %}. ![Choose category](/assets/images/help/repository/marketplace_actions_categories.png) 1. Tag your Action with a version, and add a release title. This helps people know what changes or features the release includes. People will see the version in the action’s dedicated {% data variables.product.prodname\_marketplace %} page. ![Tag a version](/assets/images/help/repository/marketplace_actions_version.png) 1. Complete all other fields and click **Publish release**. Publishing requires you to use two-factor authentication. For more information, see “[Configuring two-factor authentication](/articles/configuring-two-factor-authentication/).” ![Publish the release](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Removing an action from {% data variables.product.prodname\_marketplace %}

To remove a published action from {% data variables.product.prodname\_marketplace %}, you’ll need to update each published release. Perform the following steps for each release of the action you’ve published to {% data variables.product.prodname\_marketplace %}.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} 3. On the Releases page, to the right of the release you want to edit, click **Edit**. ![Release edit button](/assets/images/help/releases/release-edit-btn.png) 4. Select **Publish this action to the {% data variables.product.prodname\_marketplace %}** to remove the check from the box. ![Publish this action button](/assets/images/help/repository/actions-marketplace-unpublish.png) 5. Click **Update release** at the bottom of the page. ![Update release button](/assets/images/help/repository/actions-marketplace-update-release.png)
