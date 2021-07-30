---
title: Adding GitHub App managers in your organization
intro: 'Organization owners can grant users the ability to manage some or all {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add GitHub App managers
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization#github-app-managers)."

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "Management", type the username of the person you want to designate as a {% data variables.product.prodname_github_app %} manager in the organization, and click **Grant**.
![Add a {% data variables.product.prodname_github_app %} manager](/assets/images/help/organizations/add-github-app-manager.png)

## Giving someone the ability to manage an individual {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for.
![Select {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Under "App managers", type the username of the person you want to designate as a GitHub App manager for the app, and click **Grant**.
![Add a {% data variables.product.prodname_github_app %} manager for a specific app](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt %}
## Further reading

- "[About {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
