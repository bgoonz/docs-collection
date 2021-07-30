---
title: Deleting a repository
intro: You can delete any repository or fork if you're either an organization owner or have admin permissions for the repository or fork. Deleting a forked repository does not delete the upstream repository.
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---
{% data reusables.organizations.owners-and-admins-can %} delete an organization repository. If **Allow members to delete or transfer repositories for this organization** has been disabled, only organization owners can delete organization repositories. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}Deleting a public repository will not delete any forks of the repository.{% endif %}

{% warning %}

**Warnings**:

- Deleting a repository will **permanently** delete release attachments and team permissions. This action **cannot** be undone.
- Deleting a private {% ifversion ghes or fpt or ghae %}or internal {% endif %}repository will delete all forks of the repository.
 
{% endwarning %}

{% ifversion fpt %}
You can restore some deleted repositories within 90 days. For more information, see "[Restoring a deleted repository](/articles/restoring-a-deleted-repository)."
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. Under Danger Zone, click **Delete this repository**.
   ![Repository deletion button](/assets/images/help/repository/repo-delete.png)
3. **Read the warnings**.
4. To verify that you're deleting the correct repository, type the name of the repository you want to delete.
   ![Deletion labeling](/assets/images/help/repository/repo-delete-confirmation.png)
5. Click **I understand the consequences, delete this repository**.
