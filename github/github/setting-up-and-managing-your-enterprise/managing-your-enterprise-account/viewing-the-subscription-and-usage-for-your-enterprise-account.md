---
title: Viewing the subscription and usage for your enterprise account
intro: 'You can view the current subscription, license usage, invoices, payment history, and other billing information for your enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners and billing managers can access and manage all billing settings for enterprise accounts.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
---
## About billing for enterprise accounts

Enterprise accounts are currently available to {% data variables.product.prodname_enterprise %} customers paying by invoice. Billing for all of the organizations and {% data variables.product.prodname_ghe_server %} instances connected to your enterprise account are aggregated into a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services (including paid licenses in organizations, {% data variables.large_files.product_name_long %} data packs,{% ifversion fpt or ghes > 3.0 %} {% data variables.product.prodname_GH_advanced_security %} usage,{% endif %} and subscriptions for {% data variables.product.prodname_marketplace %} apps).

{% ifversion fpt %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."{% endif %}

For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

## Viewing the subscription and usage for your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "User {% ifversion fpt %}Licenses{% else %}licenses{% endif %}", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% ifversion fpt %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![License and subscription information in enterprise billing settings](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a {% ifversion fpt %}CSV{% elsif ghes %}JSON{% endif %} file with license details{% ifversion fpt %}, to the right of "User Licenses"{% endif %}, click **View {% ifversion fpt %}details{% elsif ghes %}users{% endif %}** or {% ifversion fpt %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Export license usage**{% endif %}.{% ifversion fpt %}
  !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
{% ifversion fpt or ghes > 3.0 %}
1. Optionally, to view usage details for other features, in the left sidebar, click **Billing**.
  ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png)
{% endif %}

{% ifversion fpt %}
## Further reading

- "[About billing for GitHub Actions](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#about-billing-for-github-actions)"
- "[About billing for Git Large File Storage](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)"
- "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)"

{% endif %}
