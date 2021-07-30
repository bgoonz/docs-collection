---
title: Project board permissions for an organization
intro: 'Organization owners and people with project board admin permissions can customize who has read, write, and admin permissions to your organization’s project boards.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Project board permissions
---

## Permissions overview

There are three levels of permissions to a project board for people and teams:

{% data reusables.project-management.project-board-permissions %}

Organization owners and people with admin permissions can give a person access to an organization project board individually, as an outside collaborator or organization member, or through their membership in a team or organization. An outside collaborator is someone who is not an organization member but given permissions to collaborate in your organization.

Organization owners and people with admin permissions to a project board can also:
- Set default project board permissions for all organization members.
- Manage access to the project board for organization members, teams, and outside collaborators. For more information, see "[Managing team access to an organization project board](/articles/managing-team-access-to-an-organization-project-board)", "[Managing an individual’s access to an organization project board](/articles/managing-an-individual-s-access-to-an-organization-project-board)", or "[Managing access to a project board for organization members](/articles/managing-access-to-a-project-board-for-organization-members)."
- Manage project board visibility. For more information, see "[Managing access to a project board for organization members](/articles/managing-access-to-a-project-board-for-organization-members)."

## Cascading permissions for project boards

{% data reusables.project-management.cascading-permissions %}

For example, if an organization owner has given all organization members read permissions to a project board, and a project board admin gives an organization member write permissions to that board as an individual collaborator, that person would have write permissions to the project board.

## Project board visibility

{% data reusables.project-management.project-board-visibility %} You can change the project board's visibility from private to {% ifversion ghae %}internal{% else %}public{% endif %} and back again. For more information, see "[Changing project board visibility](/articles/changing-project-board-visibility)."

## Further reading

- "[Changing project board visibility](/articles/changing-project-board-visibility)"
- "[Managing an individual’s access to an organization project board](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Managing team access to an organization project board](/articles/managing-team-access-to-an-organization-project-board)"
- "[Managing access to a project board for organization members](/articles/managing-access-to-a-project-board-for-organization-members)"
