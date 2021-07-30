---
title: Disabling issues
intro: You may wish to turn issues off for your repository if you do not accept contributions or bug reports.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under Features, unselect the **Issues** checkbox.
  ![Remove Issues checkbox](/assets/images/help/issues/issues_settings_remove_from_repo.png)

If you decide to enable issues again in the future, any issues that were previously added will be available.

{% ifversion fpt %}

{% tip %}

Please contact {% data variables.contact.contact_support %} if you want to turn off issues because of abuse from strangers.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
