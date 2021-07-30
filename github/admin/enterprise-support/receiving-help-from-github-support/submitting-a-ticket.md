---
title: Submitting a ticket
intro: "You can submit a support ticket using {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or the support portal{% elsif ghae %}{% data variables.contact.ae_azure_portal %}{% endif %}."
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
versions:
  ghes: "*"
  ghae: "*"
type: how_to
topics:
  - Enterprise
  - Support
---

## About submitting a ticket

{% ifversion ghae %}

You can submit a ticket for support with {% data variables.product.prodname_ghe_managed %} from the {% data variables.contact.ae_azure_portal %}.

{% endif %}

Before submitting a ticket, you should gather helpful information for {% data variables.contact.github_support %} and choose a contact person. For more information, see "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)."

{% ifversion ghes %}
After submitting your support request and optional diagnostic information, {% data variables.contact.github_support %} may ask you to download and share a support bundle with us. For more information, see "[Providing data to {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)."

## Submitting a ticket using the {% data variables.contact.enterprise_portal %}

1. Navigate to the {% data variables.contact.contact_enterprise_portal %}.
2. Click **Submit a Ticket**
   ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
   {% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
   {% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

## Submitting a ticket using your enterprise account

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %} 3. In the left sidebar, click **Enterprise licensing**.
!["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png) 4. Under "{% data variables.product.prodname_enterprise %} Help", click **{% data variables.contact.enterprise_support %} Portal**.
![Link to navigate to Enterprise support site](/assets/images/enterprise/support/enterprise-support-link.png) 5. Click **Submit a Ticket**
![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

## Submitting a ticket using the {% data variables.product.product_name %} {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %} 5. If you'd like to include diagnostics with your support ticket, Under "Diagnostics", click **Download diagnostic info** and save the file locally. You'll attach this file to your support ticket later.
![Button to download diagnostics info](/assets/images/enterprise/support/download-diagnostics-info-button.png) 6. Under "Open Support Request", click **New support request**.
![Button to open a support request](/assets/images/enterprise/management-console/open-support-request.png) 5. Click **Submit a Ticket**
![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %} 14. To include diagnostics with your support ticket, click **Add file**, then attach the diagnostics file you downloaded.
![Add file button](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %} 7. Click **Submit**.

{% endif %}

{% ifversion ghae %}

## Prerequisites

To submit a ticket for {% data variables.product.prodname_ghe_managed %} in the {% data variables.contact.ae_azure_portal %}, you must provide the ID for your {% data variables.product.prodname_ghe_managed %} subscription in Azure to your Customer Success Account Manager (CSAM) at Microsoft.

## Submitting a ticket using the {% data variables.contact.ae_azure_portal %}

Commercial customers can submit a support request in the {% data variables.contact.contact_ae_portal %}. Government customers should use the [Azure portal for government customers](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). For more information, see [Create an Azure support request](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) in the Microsoft Docs.

## Troubleshooting problems in the {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} is unable to troubleshoot access and subscription issues in the Azure portal. For help with the Azure portal, contact your CSAM at Microsoft or review the following information.

- If you cannot sign into the Azure portal, see [Troubleshoot Azure subscription sign-in issues](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) in the Microsoft Docs or [submit a request directly](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- If you can sign into the Azure portal but you cannot submit a ticket for {% data variables.product.prodname_ghe_managed %}, review the prerequisites for submitting a ticket. For more information, see "[Prerequisites](#prerequisites)".

{% endif %}

## Further reading

- "[About {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% ifversion ghes %}
- "[About {% data variables.contact.premium_support %} for {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
