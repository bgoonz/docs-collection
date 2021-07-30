---
title: Viewing people with access to your repository
intro: 'Organization owners can view people’s access to a repository within an organization. Owners of organizations using {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} can also export a CSV list of people who have access to a repository.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: View people with access
---

Administrators can use this information to help off-board people, gather data for compliance, and other general security checkups.

![Repository people permissions list](/assets/images/help/repository/repository-permissions-list.png)

## Viewing people with access to your repository

{% ifversion fpt %}
{% note %}

**Note**: You can also see a combined overview of teams and people with access to your repository. For more information, see "[Managing teams and people with access to your repository](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)."

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}

## Exporting a list of people with access to your repository

Owners of organizations on {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} can export a CSV list of people who have access to a repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Click **Export CSV**.
  ![People tab in the repository sidebar](/assets/images/help/repository/export-repository-permissions.png)
