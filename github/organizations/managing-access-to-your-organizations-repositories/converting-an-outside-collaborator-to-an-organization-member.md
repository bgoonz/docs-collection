---
title: Converting an outside collaborator to an organization member
intro: 'If you would like to give an outside collaborator on your organization''s repositories broader permissions within your organization, you can {% ifversion fpt %}invite them to become a member of{% else %}make them a member of{% endif %} the organization.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Organization owners can {% ifversion fpt %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Convert collaborator to member
---
{% ifversion fpt %}
If your organization is on a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see "[About per-user pricing](/articles/about-per-user-pricing)." {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %}
If your organization [requires members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), users {% ifversion fpt %}you invite must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before they can accept the invitation.{% else %}must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.{% endif %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% ifversion fpt %}
5. To the right of the name of the outside collaborator you want to become a member, use the {% octicon "gear" aria-label="The gear icon" %} drop-down menu and click **Invite to organization**.![Invite outside collaborators to organization](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. To the right of the name of the outside collaborator you want to become a member, click **Invite to organization**.![Invite outside collaborators to organization](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% ifversion fpt %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Further reading

- "[Converting an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator)"
