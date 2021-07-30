---
title: Managing GitHub Actions with GitHub CLI
intro: "You can use {% data variables.product.prodname_cli %} to interact with {% data variables.product.prodname_actions %}."
product: "{% data reusables.gated-features.actions %}"
versions:
  fpt: "*"
  ghes: ">=2.22"
  ghae: "*"
type: overview
topics:
  - Workflows
shortTitle: GitHub CLI & GitHub Actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Setting up {% data variables.product.prodname_cli %}

{% data reusables.cli.download-update-cli %} {% data reusables.cli.actions-cli-version %} {% data reusables.cli.cli-manual %}

{% data reusables.cli.cli-auth %}

{% data reusables.cli.cli-repo %}

## Managing {% data variables.product.prodname_actions %} with {% data variables.product.prodname_cli %}

To view all available commands related to {% data variables.product.prodname_actions %}, run `gh actions`.

For more information on using commands in specific scenarios, see the following procedures:

- "[Re-running a workflow](/actions/managing-workflow-runs/re-running-a-workflow#re-run-a-workflow-through-github-cli)"
- "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-using-github-cli)"
- "[Downloading workflow artifacts](/actions/managing-workflow-runs/downloading-workflow-artifacts#download-artifacts-through-github-cli)"
- "[Using workflow run logs](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-through-github-cli)"
- "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history#viewing-workflow-run-history-with-github-cli)"{% ifversion fpt or ghes > 2.22 or ghae %}
- "[Disabling and enabling a workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#disabling-and-enabling-workflows-through-github-cli)"{% endif %}
