---
title: API previews
intro: You can use API previews to try out new features and provide feedback before these features become official.
redirect_from:
  - /v3/previews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---


API previews let you try out new APIs and changes to existing API methods before they become part of the official GitHub API.

During the preview period, we may change some features based on developer feedback. If we do make changes, we'll announce them on the [developer blog](https://developer.github.com/changes/) without advance notice.

To access an API preview, you'll need to provide a custom [media type](/rest/overview/media-types) in the `Accept` header for your requests. Feature documentation for each preview specifies which custom media type to provide.

{% ifversion fpt %}
## Migrations

Allows you to download repositories from your GitHub user or organization account to review, backup, and [migrate](/rest/reference/migrations) data to {% data variables.product.prodname_ghe_server %}.

**Custom media type:** `wyandotte-preview`
**Announced:** [2018-05-24](https://developer.github.com/changes/2018-05-24-user-migration-api/)
{% endif %}

## Enhanced deployments

Exercise greater control over [deployments](/rest/reference/repos#deployments) with more information and finer granularity.

**Custom media type:** `ant-man-preview`
**Announced:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

## Reactions

Manage [reactions](/rest/reference/reactions) for commits, issues, and comments.

**Custom media type:** `squirrel-girl-preview`
**Announced:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/)
**Update:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

## Timeline

Get a [list of events](/rest/reference/issues#timeline) for an issue or pull request.

**Custom media type:** `mockingbird-preview`
**Announced:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% ifversion ghes %}
## Pre-receive environments

Create, list, update, and delete environments for pre-receive hooks.

**Custom media type:** `eye-scream-preview`
**Announced:** [2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments)
{% endif %}

{% ifversion ghes < 2.22 %}
## Integrations

Manage [integrations](/v3/integrations) through the API.

**Custom media type:** `machine-man-preview`
**Announced:** [2016-09-14](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access/)
{% endif %}

## Projects

Manage [projects](/rest/reference/projects).

**Custom media type:** `inertia-preview`
**Announced:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/)
**Update:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)

## Commit search

[Search commits](/rest/reference/search).

**Custom media type:** `cloak-preview`
**Announced:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

## Repository topics

View a list of [repository topics](/articles/about-topics/) in [calls](/rest/reference/repos) that return repository results.

**Custom media type:** `mercy-preview`
**Announced:** [2017-01-31](https://github.com/blog/2309-introducing-topics)

## Codes of conduct

View all [codes of conduct](/rest/reference/codes-of-conduct) or get which code of conduct a repository has currently.

**Custom media type:** `scarlet-witch-preview`

{% ifversion ghae or ghes %}

## Global webhooks

Enables [global webhooks](/rest/reference/enterprise-admin#global-webhooks/) for  [organization](/webhooks/event-payloads/#organization) and [user](/webhooks/event-payloads/#user) event types. This API preview is only available for {% data variables.product.prodname_ghe_server %}.

**Custom media type:** `superpro-preview`
**Announced:** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% ifversion ghes < 2.22 %}
## Add lock reason

You can now add a reason when you [lock an issue](/rest/reference/issues#lock-an-issue).

**Custom media type:** `sailor-v-preview`
**Announced:** [2018-01-10](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)
{% endif %}

## Require signed commits

You can now use the API to manage the setting for [requiring signed commits on protected branches](/rest/reference/repos#branches).

**Custom media type:** `zzzax-preview`
**Announced:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)

## Require multiple approving reviews

You can now [require multiple approving reviews](/rest/reference/repos#branches) for a pull request using the API.

**Custom media type:** `luke-cage-preview`
**Announced:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% ifversion ghes < 3.0 %}
## Check runs and check suites API

Allows a GitHub App to run external checks on a repository's code. See the [Check runs](/rest/reference/checks#runs) and [Check suites](/rest/reference/checks#suites) APIs for more details.

**Custom media type:** `antiope-preview`
**Announced:** [2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)
{% endif %}

{% ifversion ghes %}

## Anonymous Git access to repositories

When a {% data variables.product.prodname_ghe_server %} instance is in private mode, site and repository administrators can enable anonymous Git access for a public repository.

**Custom media type:** `x-ray-preview`
**Announced:** [2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}

## Project card details

The REST API responses for [issue events](/rest/reference/issues#events) and [issue timeline events](/rest/reference/issues#timeline) now return the `project_card` field for project-related events.

**Custom media type:** `starfox-preview`
**Announced:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% ifversion fpt %}

## GitHub App Manifests

GitHub App Manifests allow people to create preconfigured GitHub Apps. See "[Creating GitHub Apps from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" for more details.

**Custom media type:** `fury-preview`

{% endif %}

## Deployment statuses

You can now update the `environment` of a [deployment status](/rest/reference/repos#create-a-deployment-status) and use the `in_progress` and `queued` states. When you create deployment statuses, you can now use the `auto_inactive` parameter to mark old `production` deployments as `inactive`.

**Custom media type:** `flash-preview`
**Announced:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

## Repository creation permissions

You can now configure whether organization members can create repositories and which types of repositories they can create. See "[Update an organization](/rest/reference/orgs#update-an-organization)" for more details.

**Custom media types:** `surtur-preview`
**Announced:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

## Content attachments

You can now provide more information in GitHub for URLs that link to registered domains by using the {% data variables.product.prodname_unfurls %} API. See "[Using content attachments](/apps/using-content-attachments/)" for more details.

**Custom media types:** `corsair-preview`
**Announced:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

## Enable and disable Pages

You can use the new endpoints in the [Pages API](/rest/reference/repos#pages) to enable or disable Pages. To learn more about Pages, see "[GitHub Pages Basics](/categories/github-pages-basics)".

**Custom media types:** `switcheroo-preview`
**Announced:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

## List branches or pull requests for a commit

You can use two new endpoints in the [Commits API](/rest/reference/repos#commits) to list branches or pull requests for a commit.

**Custom media types:** `groot-preview`
**Announced:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

## Enable or disable vulnerability alerts for a repository

You can use two new endpoints in the [Repos API](/rest/reference/repos) to enable or disable vulnerability alerts.

**Custom media types:** `dorian-preview`
**Announced:** [2019-04-24](https://developer.github.com/changes/2019-04-24-vulnerability-alerts/)

## Update a pull request branch

You can use a new endpoint to [update a pull request branch](/rest/reference/pulls#update-a-pull-request-branch) with changes from the HEAD of the upstream branch.

**Custom media types:** `lydian-preview`
**Announced:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% ifversion fpt %}
## Enable or disable automated security fixes

You can use a new set of endpoints to [enable and disable automated security fixes](/rest/reference/repos#enable-automated-security-fixes).

**Custom media types:** `london-preview`
**Announced:** [2019-06-04](https://developer.github.com/changes/2019-06-04-automated-security-fixes/)
{% endif %}

## Create and use repository templates

You can use a new endpoint to [Create a repository using a template](/rest/reference/repos#create-a-repository-using-a-template) and [Create a repository for the authenticated user](/rest/reference/repos#create-a-repository-for-the-authenticated-user) that is a template repository by setting the `is_template` parameter to `true`. [Get a repository](/rest/reference/repos#get-a-repository) to check whether it's set as a template repository using the `is_template` key.

**Custom media types:** `baptiste-preview`
**Announced:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% ifversion fpt or ghes or ghae %}
## New visibility parameter for the Repositories API

You can set and retrieve the visibility of a repository in the [Repositories API](/rest/reference/repos).

**Custom media types:** `nebula-preview`
**Announced:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
