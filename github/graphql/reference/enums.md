---
title: Enums
redirect_from:
  - /v4/enum
  - /v4/reference/enum
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## About enums

[Enums](https://graphql.github.io/graphql-spec/June2018/#sec-Enums) represent possible sets of values for a field.

For example, the [`Issue`](/graphql/reference/objects#issue) object has a field called `state`. The state is an enum (specifically, of type [`IssueState`](/graphql/reference/enums#issuestate)) because it may be `OPEN` or `CLOSED`.

For more information, see "[Introduction to GraphQL](/graphql/guides/introduction-to-graphql)."

{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}
