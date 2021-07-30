---
title: Getting started with GitHub AE
intro: 'Get started with setting up and configuring {% data variables.product.product_name %} for {% data variables.product.product_location %}.'
versions:
  ghae: '*'
---

This guide will walk you through setting up, configuring, and managing settings for {% data variables.product.product_location %} on {% data variables.product.product_name %} as an enterprise owner.

## Part 1: Setting up {% data variables.product.product_name %}
To get started with {% data variables.product.product_name %}, you can create your enterprise account, initialize {% data variables.product.product_name %}, configure an IP allow list, configure user authentication and provisioning, and manage billing for {% data variables.product.product_location %}.

### 1. Creating your {% data variables.product.product_name %} enterprise account
You will first need to purchase {% data variables.product.product_name %}. For more information, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Initializing {% data variables.product.product_name %}
After {% data variables.product.company_short %} creates the owner account for {% data variables.product.product_location %} on {% data variables.product.product_name %}, you will receive an email to sign in and complete the initialization. During initialization, you, as the enterprise owner, will name {% data variables.product.product_location %}, configure SAML SSO, create policies for all organizations in {% data variables.product.product_location %}, and configure a support contact for your enterprise members. For more information, see "[Initializing {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)."

### 3. Restricting network traffic
You can configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your enterprise account. For more information, see "[Restricting network traffic to your enterprise](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)."

### 4. Managing identity and access for {% data variables.product.product_location %}
You can centrally manage access to {% data variables.product.product_location %} on {% data variables.product.product_name %} from an identity provider (IdP) using SAML single sign-on (SSO) for user authentication and System for Cross-domain Identity Management (SCIM) for user provisioning. Once you configure provisioning, you can assign or unassign users to the application from the IdP, creating or disabling user accounts in the enterprise. For more information, see "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)."

### 5. Managing billing for {% data variables.product.product_location %}
Owners of the subscription for {% data variables.product.product_location %} on {% data variables.product.product_name %} can view billing details for {% data variables.product.product_name %} in the Azure portal. For more information, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

## Part 2: Organizing and managing enterprise members
As an enterprise owner for {% data variables.product.product_name %}, you can manage settings on user, repository, team, and organization levels. You can manage members of {% data variables.product.product_location %}, create and manage organizations, set policies for repository management, and create and manage teams.

### 1. Managing members of {% data variables.product.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Creating organizations
{% data reusables.getting-started.creating-organizations %}

### 3. Adding members to organizations
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Creating teams
{% data reusables.getting-started.creating-teams %}

### 5. Setting organization and repository permission levels
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Enforcing repository management policies
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Part 3: Building securely
To increase the security of {% data variables.product.product_location %}, you can monitor {% data variables.product.product_location %} and configure security and analysis features for your organizations.

### 1. Monitoring {% data variables.product.product_location %}
You can monitor {% data variables.product.product_location %} with your activity dashboard and audit logging. For more information, see "[Monitoring activity in your enterprise](/admin/user-management/monitoring-activity-in-your-enterprise)."

### 2. Configuring security features for your organizations
{% data reusables.getting-started.configuring-security-features %}

## Part 4: Customizing and automating work on {% data variables.product.product_location %}
You can customize and automate work in organizations in {% data variables.product.product_location %} with the {% data variables.product.prodname_dotcom %} API, {% data variables.product.prodname_actions %}, and {% data variables.product.prodname_pages %}.

### 1. Using the {% data variables.product.prodname_dotcom %} API
{% data reusables.getting-started.api %}

### 2. Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

For more information on enabling and configuring {% data variables.product.prodname_actions %} for {% data variables.product.product_name %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae)."

### 3. Using {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Part 5: Using {% data variables.product.prodname_dotcom %}'s learning and support resources
Your enterprise members can learn more about Git and {% data variables.product.prodname_dotcom %} with our learning resources, and you can get the support you need with {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Learning with {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab-enterprise %}

### 2. Working with {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
