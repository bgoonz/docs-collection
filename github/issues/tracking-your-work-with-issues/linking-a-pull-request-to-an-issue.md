---
title: Linking a pull request to an issue
intro: You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when the pull request is merged.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
---
{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

## About linked issues and pull requests

You can link an issue to a pull request {% ifversion fpt or ghes or ghae %}manually or {% endif %}using a supported keyword in the pull request description. 

When you link a pull request to the issue the pull request addresses, collaborators can see that someone is working on the issue.

When you merge a linked pull request into the default branch of a repository, its linked issue is automatically closed. For more information about the default branch, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

## Linking a pull request to an issue using a keyword

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch). 

* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved

The syntax for closing keywords depends on whether the issue is in the same repository as the pull request.

Linked issue | Syntax | Example
--------------- | ------ | ------
Issue in the same repository | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
Issue in a different repository | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
Multiple issues | Use full syntax for each issue | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

{% ifversion fpt or ghes or ghae %}Only manually linked pull requests can be manually unlinked. To unlink an issue that you linked using a keyword, you must edit the pull request description to remove the keyword.{% endif %}

You can also use closing keywords in a commit message. The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.


{% ifversion fpt or ghes or ghae %}
## Manually linking a pull request to an issue

Anyone with write permissions to a repository can manually link a pull request to an issue.

You can manually link up to ten issues to each pull request. The issue and pull request must be in the same repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. In the list of pull requests, click the pull request that you'd like to link to an issue.
4. In the right sidebar, click **Linked issues**.
  ![Linked issues in the right sidebar](/assets/images/help/pull_requests/linked-issues.png)
5. Click the issue you want to link to the pull request.
  ![Drop down to link issue](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

## Further reading

- "[Autolinked references and URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
