---
title: Uploading a SARIF file to GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
---
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About SARIF file uploads for {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} creates {% data variables.product.prodname_code_scanning %} alerts in a repository using information from Static Analysis Results Interchange Format (SARIF) files. SARIF files can be uploaded to a repository using the API or {% data variables.product.prodname_actions %}. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

You can generate SARIF files using many static analysis security testing tools, including {% data variables.product.prodname_codeql %}. The results must use SARIF version 2.1.0. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)."

You can upload the results using {% data variables.product.prodname_actions %}, the {% data variables.product.prodname_code_scanning %} API, {% ifversion fpt or ghes > 3.0 or ghae-next %}the {% data variables.product.prodname_codeql_cli %}, {% endif %}or the {% data variables.product.prodname_codeql_runner %}. The best upload method will depend on how you generate the SARIF file, for example, if you use:

- {% data variables.product.prodname_actions %} to run the {% data variables.product.prodname_codeql %} action, there is no further action required. The {% data variables.product.prodname_codeql %} action uploads the SARIF file automatically when it completes analysis.
- {% data variables.product.prodname_actions %} to run a SARIF-compatible analysis tool, you could update the workflow to include a final step that uploads the results (see below). {% ifversion fpt or ghes > 3.0 or ghae-next %}
 - The {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_code_scanning %} in your CI system, you can use the CLI to upload results to {% data variables.product.prodname_dotcom %} (for more information, see "[Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)").{% endif %}
- The {% data variables.product.prodname_codeql_runner %}, to run {% data variables.product.prodname_code_scanning %} in your CI system, by default the runner automatically uploads results to {% data variables.product.prodname_dotcom %} on completion. If you block the automatic upload, when you are ready to upload results you can use the `upload` command (for more information, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)").
- A tool that generates results as an artifact outside of your repository, you can use the {% data variables.product.prodname_code_scanning %} API to upload the file (for more information, see "[Upload an analysis as SARIF data](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)").

{% data reusables.code-scanning.not-available %}

## Uploading a {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_actions %}

To use {% data variables.product.prodname_actions %} to upload a third-party SARIF file to a repository, you'll need a  workflow. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Your workflow will need to use the `upload-sarif` action, which is part of the `github/codeql-action` repository. It has input parameters that you can use to configure the upload. The main input parameter you'll use is `sarif-file`, which configures the file or directory of SARIF files to be uploaded. The directory or file path is relative to the root of the repository. For more information see the [`upload-sarif` action](https://github.com/github/codeql-action/tree/HEAD/upload-sarif).

The `upload-sarif` action can be configured to run when the `push` and `scheduled` event occur. For more information about {% data variables.product.prodname_actions %}  events, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."

If your SARIF file doesn't include `partialFingerprints`, the `upload-sarif` action will calculate the `partialFingerprints` field for you and attempt to prevent duplicate alerts. {% data variables.product.prodname_dotcom %} can only create `partialFingerprints` when the repository contains both the SARIF file and the source code used in the static analysis. For more information about preventing duplicate alerts, see "[About SARIF support for code scanning](/code-security/secure-coding/sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)."

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Example workflow for SARIF files generated outside of a repository

You can create a new workflow that uploads SARIF files after you commit them to your repository. This is useful when the SARIF file is generated as an artifact outside of your repository.

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)." 

This workflow uploads the `results.sarif` file located in the root of the repository. For more information about creating a workflow file, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Alternatively, you could modify this workflow to upload a directory of SARIF files. For example, you could place all SARIF files in a directory in the root of your repository called `sarif-output` and set the action's input parameter `sarif_file` to `sarif-output`.

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      security-events: write{% endif %}
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Upload SARIF file
        uses: github/codeql-action/upload-sarif@v1
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

### Example workflow that runs the ESLint analysis tool

If you generate your third-party SARIF file as part of a continuous integration (CI) workflow, you can add the `upload-sarif` action as a step after running your CI tests. If you don't already have a CI workflow, you can create one using a {% data variables.product.prodname_actions %} template. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)." 

The workflow shows an example of running the ESLint static analysis tool as a step in a workflow. The `Run ESLint` step runs the ESLint tool and outputs the `results.sarif` file. The workflow then uploads the `results.sarif` file to {% data variables.product.prodname_dotcom %} using the `upload-sarif` action. For more information about creating a workflow file, see "[Introduction to GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)."

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      security-events: write{% endif %}
    steps:
      - uses: actions/checkout@v2
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: github/codeql-action/upload-sarif@v1
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Further reading

- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Viewing your workflow history](/actions/managing-workflow-runs/viewing-workflow-run-history)"{%- ifversion fpt or ghes > 3.0 or ghae-next %}
- "[About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)"{% else %}
- "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"{% endif %}
- "[Upload an analysis as SARIF data](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"
