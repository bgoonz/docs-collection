---
title: Filtering files in a pull request
intro: 'To help you quickly review changes in a large pull request, you can filter changed files.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Filter files
---
You can filter files in a pull request by file extension type, such as `.html` or `.js`, lack of an extension, code ownership, or dotfiles.

{% tip %}

**Tip:** To simplify your pull request diff view, you can also temporarily hide deleted files or files you have already viewed in the pull request diff from the file filter drop-down menu.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request you'd like to filter.
{% data reusables.repositories.changed-files %}
4. Use the File filter drop-down menu, and select, unselect, or click the desired filters.
  ![File filter option above pull request diff](/assets/images/help/pull_requests/file-filter-option.png)
5. Optionally, to clear the filter selection, under the **Files changed** tab, click **Clear**.
  ![Clear file filter selection](/assets/images/help/pull_requests/clear-file-filter.png)

## Further reading

- "[About comparing branches in a pull request](/articles/about-comparing-branches-in-pull-requests)"
- "[Finding changed methods and functions in a pull request](/articles/finding-changed-methods-and-functions-in-a-pull-request)"
