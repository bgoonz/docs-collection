---
title: Configuring notifications for vulnerable dependencies
shortTitle: Configuring notifications
intro: 'Optimize how you receive notifications about  {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts.'
versions:
  ghes: '* <=2.22'
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
---
<!--See /content/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies for the current version of this article -->

## About notifications for vulnerable dependencies

{% ifversion ghes > 2.21 %}When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% else %}When {% data variables.product.product_name %} detects vulnerable dependencies in your repositories, it sends security alerts.{% endif %}

{% ifversion ghes = 2.21 %}
Your site administrator needs to enable security alerts for vulnerable dependencies for {% data variables.product.product_location %} before you can use the feature. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% ifversion ghes %}
By default, if your site administrator has configured email for notifications on your enterprise, you will receive {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} by email.{% endif %}

{% ifversion ghes > 2.21 %}Site administrators can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% ifversion ghes < 2.22 %}Site administrators can also enable security alerts without notifications. For more information, see "[Enabling security alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

## Configuring notifications for {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}

You can configure notification settings for yourself or your organization from the Manage notifications drop-down {% octicon "bell" aria-label="The notifications bell" %} shown at the top of each page. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion ghes > 2.21 %}
  ![{% data variables.product.prodname_dependabot_alerts %} options](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Security alerts options](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show {% ifversion fpt or ghes > 2.21 %}{% data variables.product.prodname_dependabot %}{% else %} security{% endif %} alerts. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)."

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)."

## How to reduce the noise from notifications for vulnerable dependencies

If you are concerned about receiving too many notifications for {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} enabled. You can still navigate to see your {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} in your repository's Security tab.

## Further reading

- "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
