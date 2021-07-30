---
title: Reviewing your authorized integrations
intro: You can review your authorized integrations to audit the access that each integration has to your account and data.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
---
## Reviewing your authorized {% data variables.product.prodname_oauth_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

## Reviewing your authorized {% data variables.product.prodname_github_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. Click the **Authorized {% data variables.product.prodname_github_apps %}** tab.
![Authorized {% data variables.product.prodname_github_apps %} tab](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Review the {% data variables.product.prodname_github_apps %} that have access to your account. For those that you don't recognize or that are out of date, click **Revoke**. To revoke all {% data variables.product.prodname_github_apps %}, click **Revoke all**.
   ![List of authorized {% data variables.product.prodname_github_app %}](/assets/images/help/settings/revoke-github-app.png)

## Further reading
{% ifversion fpt %}
- "[About integrations](/articles/about-integrations)"{% endif %}
- "[Reviewing your authorized applications (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
