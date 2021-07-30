---
title: GitHub's products
intro: 'An overview of {% data variables.product.prodname_dotcom %}''s products and pricing plans.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---
## About {% data variables.product.prodname_dotcom %}'s products

{% data variables.product.prodname_dotcom %} offers free and paid products. You can see pricing and a full list of features for each product at <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

## {% data variables.product.prodname_free_user %} for user accounts

With {% data variables.product.prodname_free_team %} for user accounts, you can work with unlimited collaborators on unlimited public repositories with a full feature set, and on unlimited private repositories with a limited feature set.

With {% data variables.product.prodname_free_user %}, your user account includes:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Two-factor authentication enforcement
- 2,000 {% data variables.product.prodname_actions %} minutes
- 500MB {% data variables.product.prodname_registry %} storage

## {% data variables.product.prodname_pro %}

In addition to the features available with {% data variables.product.prodname_free_user %} for user accounts, {% data variables.product.prodname_pro %} includes:
- {% data variables.contact.github_support %} via email
- 3,000 {% data variables.product.prodname_actions %} minutes
- 2GB {% data variables.product.prodname_registry %} storage
- Advanced tools and insights in private repositories:
  - Required pull request reviewers
  - Multiple pull request reviewers
  - Auto-linked references
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Protected branches
  - Code owners
  - Repository insights graphs: Pulse, contributors, traffic, commits, code frequency, network, and forks

## {% data variables.product.prodname_free_team %} for organizations

With {% data variables.product.prodname_free_team %} for organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set.

In addition to the features available with {% data variables.product.prodname_free_user %} for user accounts, {% data variables.product.prodname_free_team %} for organizations includes:
- {% data variables.product.prodname_gcf %}
- Team discussions
- Team access controls for managing groups
- 2,000 {% data variables.product.prodname_actions %} minutes
- 500MB {% data variables.product.prodname_registry %} storage

## {% data variables.product.prodname_team %}

In addition to the features available with {% data variables.product.prodname_free_team %} for organizations, {% data variables.product.prodname_team %} includes:
- {% data variables.contact.github_support %} via email
- 3,000 {% data variables.product.prodname_actions %} minutes
- 2GB {% data variables.product.prodname_registry %} storage
- Advanced tools and insights in private repositories:
  - Required pull request reviewers
  - Multiple pull request reviewers
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Protected branches
  - Code owners
  - Repository insights graphs: Pulse, contributors, traffic, commits, code frequency, network, and forks
  - Draft pull requests
  - Team pull request reviewers
  - Scheduled reminders

{% data reusables.github-actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} includes two deployment options: cloud-hosted and self-hosted.

In addition to the features available with {% data variables.product.prodname_team %}, {% data variables.product.prodname_enterprise %} includes:
- {% data variables.contact.enterprise_support %}
- Additional security, compliance, and deployment controls
- Authentication with SAML single sign-on
- Access provisioning with SAML or SCIM
- {% data variables.product.prodname_github_connect %}{% ifversion fpt or ghae or ghes > 2.22 %}
- The option to purchase {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."{% endif %}

{% data variables.product.prodname_ghe_cloud %} also includes:
- {% data variables.contact.enterprise_support %}. For more information, see "<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} support</a>" and "<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} Addendum</a>."
- 50,000 {% data variables.product.prodname_actions %} minutes
- 50GB {% data variables.product.prodname_registry %} storage
- Access control for {% data variables.product.prodname_pages %} sites. For more information, see <a href="/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site" class="dotcom-only">Changing the visibility of your {% data variables.product.prodname_pages %} site</a>"
- A service level agreement for 99.9% monthly uptime
- The option to centrally manage policy and billing for multiple {% data variables.product.prodname_dotcom_the_website %} organizations with an enterprise account. For more information, see "<a href="/articles/about-enterprise-accounts" class="dotcom-only">About enterprise accounts</a>."

You can set up a trial to evaluate {% data variables.product.prodname_ghe_cloud %}. For more information, see "<a href="/articles/setting-up-a-trial-of-github-enterprise-cloud" class="dotcom-only">Setting up a trial of {% data variables.product.prodname_ghe_cloud %}</a>."

For more information about hosting your own instance of [{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com), contact {% data variables.contact.contact_enterprise_sales %}. {% data reusables.enterprise_installation.request-a-trial %}
