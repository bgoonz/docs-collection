---
title: Enabling OAuth App access restrictions for your organization
intro: 'Organization owners can enable {% data variables.product.prodname_oauth_app %} access restrictions to prevent untrusted apps from accessing the organization''s resources while allowing organization members to use {% data variables.product.prodname_oauth_apps %} for their personal accounts.'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable OAuth App
---

{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Warnings**:
- Enabling {% data variables.product.prodname_oauth_app %} access restrictions will revoke organization access for all previously authorized {% data variables.product.prodname_oauth_apps %} and SSH keys. For more information, see "[About {% data variables.product.prodname_oauth_app %} access restrictions](/articles/about-oauth-app-access-restrictions)."
- Once you've set up {% data variables.product.prodname_oauth_app %} access restrictions, make sure to re-authorize any {% data variables.product.prodname_oauth_app %} that require access to the organization's private data on an ongoing basis. All organization members will need to create new SSH keys, and the organization will need to create new deploy keys as needed.
- When {% data variables.product.prodname_oauth_app %} access restrictions are enabled, applications can use an OAuth token to access information about {% data variables.product.prodname_marketplace %} transactions.

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Under "Third-party application access policy," click **Setup application access restrictions**.
  ![Set up restrictions button](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. After you review the information about third-party access restrictions, click **Restrict third-party application access**.
  ![Restriction confirmation button](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
