---
title: Renaming a repository
intro: You can rename a repository if you're either an organization owner or have admin permissions for the repository.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---
When you rename a repository, all existing information, with the exception of project site URLs, is automatically redirected to the new name, including:

* Issues
* Wikis
* Stars
* Followers

For more information on project sites, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

In addition to redirecting web traffic, all `git clone`, `git fetch`, or `git push` operations targeting the previous location will continue to function as if made on the new location. However, to reduce confusion, we strongly recommend updating any existing local clones to point to the new repository URL. You can do this by using  `git remote` on the command line:

```shell
$ git remote set-url origin <em>new_url</em>
```

For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

{% ifversion fpt %}

If you plan to rename a repository that has a {% data variables.product.prodname_pages %} site, we recommend using a custom domain for your site. This ensures that the site's URL isn't impacted by renaming the repository. For more information, see "[About custom domains and {% data variables.product.prodname_pages %} site](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)." 

{% endif %}

{% tip %}

**Tip:** {% data reusables.organizations.owners-and-admins-can %} rename a repository. {% data reusables.organizations.new-repo-permissions-more-info %}

{% endtip %}

{% warning %}

**Warning**: If you create a new repository under your account in the future, do not reuse the original name of the renamed repository. If you do, redirects to the renamed repository will break.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under the **Repository Name** heading, type the new name of your repository.
   ![Repository rename](/assets/images/help/repository/repository-name-change.png)
4. Click **Rename**. You're done!
