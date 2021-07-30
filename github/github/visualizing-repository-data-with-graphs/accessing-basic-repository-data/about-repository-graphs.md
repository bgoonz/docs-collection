---
title: About repository graphs
intro: Repository graphs help you view and analyze data for your repository.
redirect_from:
  - /articles/using-graphs/
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---
A repository's graphs give you information on {% ifversion fpt %} traffic, projects that depend on the repository,{% endif %} contributors and commits to the repository, and a repository's forks and network. If you maintain a repository, you can use this data to get a better understanding of who's using your repository and why they're using it.

{% ifversion fpt %}

Some repository graphs are available only in public repositories with {% data variables.product.prodname_free_user %}:
- Pulse
- Contributors
- Traffic
- Commits
- Code frequency
- Network

All other repository graphs are available in all repositories. Every repository graph is available in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

{% endif %}

## Further reading

- "[Accessing basic repository data](/articles/accessing-basic-repository-data)"
- "[Analyzing changes to a repository's content](/articles/analyzing-changes-to-a-repository-s-content)"
- "[Understanding connections between repositories](/articles/understanding-connections-between-repositories)"
