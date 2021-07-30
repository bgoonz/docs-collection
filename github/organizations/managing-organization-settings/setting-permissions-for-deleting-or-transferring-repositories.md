---
title: Setting permissions for deleting or transferring repositories
intro: 'You can allow organization members with admin permissions to a repository to delete or transfer the repository, or limit the ability to delete or transfer repositories to organization owners only.'
redirect_from:
  - /articles/setting-permissions-for-deleting-or-transferring-repositories-in-your-organization/
  - /articles/setting-permissions-for-deleting-or-transferring-repositories
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-deleting-or-transferring-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set repo management policy
---

Owners can set permissions for deleting or transferring repositories in an organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository deletion and transfer", select or deselect **Allow members to delete or transfer repositories for this organization**.
![Checkbox to allow members to delete repositories](/assets/images/help/organizations/disallow-members-to-delete-repositories.png)
6. Click **Save**.
