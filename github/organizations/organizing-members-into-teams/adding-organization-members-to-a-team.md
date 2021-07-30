---
title: Adding organization members to a team
intro: 'People with owner or team maintainer permissions can add organization members to teams. People with owner permissions can also {% ifversion fpt %}invite non-members to join{% else %}add non-members to{% endif %} a team and the organization.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Above the list of team members, click **Add a member**.
![Add member button](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Further reading

- "[About teams](/articles/about-teams)"
- "[Managing team access to an organization repository](/articles/managing-team-access-to-an-organization-repository)"
