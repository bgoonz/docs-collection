---
title: Removing an outside collaborator from an organization repository
intro: Owners and repository admins can remove an outside collaborator's access to a repository.
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove collaborator
---

{% ifversion fpt %}

{% warning %}

**Warning:**
- When removing an outside collaborator from a private repository, the paid license count does not automatically downgrade. To pay for fewer licenses after removing users from your organization, follow the steps in "[Downgrading your organization's paid seats](/articles/downgrading-your-organization-s-paid-seats)."

- You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.

{% endwarning %}

{% endif %}

While forks of private repositories are deleted when a collaborator is removed, the person will still retain any local clones of your repository.

## Removing outside collaborators from all repositories in an organization

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. Select the outside collaborator or outside collaborators you'd like to remove from the organization.
![List of outside collaborators with two outside collaborators selected](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Above the list of outside collaborators, use the drop-down menu, and click **Remove from all repositories**.
![Drop-down menu with option to remove outside collaborators ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Review the outside collaborator or outside collaborators who will be removed from the organization, then click **Remove outside collaborators**.
  ![List of outside collaborators who will be removed and Remove outside collaborators button](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## Removing an outside collaborator from a particular repository in an organization

If you only want to remove an outside collaborator from certain repositories in your organization, you can remove this person's access to one specific repository at a time.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. To the right of the username of the person you want to remove, use the {% octicon "gear" aria-label="The Settings gear" %} drop-down menu, and click **Manage**.
  ![Manage access button](/assets/images/help/organizations/member-manage-access.png)
6. To the right of the repository that you want to remove the outside collaborator from, click **Manage access**.
![Select manage access button next to a repository the outside collaborator has access to](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. To completely remove the outside collaborator's access to the repository, in the upper right corner, click **Remove access to this repository**.
![Remove access to this repository button](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. To confirm, click **Remove access**.
![Confirm outside collaborator who will be removed from the repository](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

## Further reading

- "[Adding outside collaborators to repositories in your organization](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Converting an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator)"
