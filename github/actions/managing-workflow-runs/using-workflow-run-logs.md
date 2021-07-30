---
title: Using workflow run logs
intro: "You can view, search, and download the logs for each job in a workflow run."
product: "{% data reusables.gated-features.actions %}"
versions:
  fpt: "*"
  ghes: ">=2.22"
  ghae: "*"
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

You can see whether a workflow run is in progress or complete from the workflow run page. You must be logged in to a {% data variables.product.prodname_dotcom %} account to view workflow run information, including for public repositories. For more information, see "[Access permissions on GitHub](/articles/access-permissions-on-github)."

If the run is complete, you can see whether the result was a success, failure, canceled, or neutral. If the run failed, you can view and search the build logs to diagnose the failure and re-run the workflow. You can also view billable job execution minutes, or download logs and build artifacts.

{% data variables.product.prodname_actions %} use the Checks API to output statuses, results, and logs for a workflow. {% data variables.product.prodname_dotcom %} creates a new check suite for each workflow run. The check suite contains a check run for each job in the workflow, and each job includes steps. {% data variables.product.prodname_actions %} are run as a step in a workflow. For more information about the Checks API, see "[Checks](/rest/reference/checks)."

{% data reusables.github-actions.invalid-workflow-files %}

## Viewing logs to diagnose failures

If your workflow run fails, you can see which step caused the failure and review the failed step's build logs to troubleshoot. You can see the time it took for each step to run. You can also copy a permalink to a specific line in the log file to share with your team. {% data reusables.repositories.permissions-statement-read %}

In addition to the steps configured in the workflow file, {% data variables.product.prodname_dotcom %} adds two additional steps to each job to set up and complete the job's execution. These steps are logged in the workflow run with the names "Set up job" and "Complete job".

For jobs run on {% data variables.product.prodname_dotcom %}-hosted runners, "Set up job" records details of the runner's virtual environment, and includes a link to the list of preinstalled tools that were present on the runner machine.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% data reusables.repositories.view-failed-job-results-superlinter %}
{% data reusables.repositories.view-specific-line-superlinter %}

## Searching logs

You can search the build logs for a particular step. When you search logs, only expanded steps are included in the results. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% ifversion fpt or ghes > 2.22 or ghae %}

1. In the upper-right corner of the log output, in the **Search logs** search box, type a search query.
   {% ifversion fpt or ghes > 3.0 or ghae %}
   ![Search box to search logs](/assets/images/help/repository/search-log-box-updated-2.png)
   {% else %}
   ![Search box to search logs](/assets/images/help/repository/search-log-box-updated.png)
   {% endif %}
   {% else %}
1. To expand each step you want to include in your search, click the step.
   ![Step name](/assets/images/help/repository/failed-check-step.png)
1. In the upper-right corner of the log output, in the **Search logs** search box, type a search query.
   ![Search box to search logs](/assets/images/help/repository/search-log-box.png)
   {% endif %}

## Downloading logs

You can download the log files from your workflow run. You can also download a workflow's artifacts. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)." {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% ifversion fpt or ghes > 2.22 or ghae %}

1. In the upper right corner, click {% ifversion fpt or ghes > 3.0 or ghae %}{% octicon "gear" aria-label="The gear icon" %}{% else %}{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}{% endif %} and select **Download log archive**.
   {% ifversion fpt or ghes > 3.0 or ghae %}
   ![Download logs drop-down menu](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
   {% else %}
   ![Download logs drop-down menu](/assets/images/help/repository/download-logs-drop-down-updated.png)
   {% endif %}
   {% else %}
1. In the upper right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Download log archive**.
   ![Download logs drop-down menu](/assets/images/help/repository/download-logs-drop-down.png)
   {% endif %}

## Deleting logs

You can delete the log files from your workflow run. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% ifversion fpt or ghes > 2.22 or ghae %}

1. In the upper right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
   {% ifversion fpt or ghes > 3.0 or ghae %}
   ![Kebab-horizontal icon](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
   {% else %}
   ![Kebab-horizontal icon](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated.png)
   {% endif %}
2. To delete the log files, click the **Delete all logs** button and review the confirmation prompt.
   {% ifversion fpt or ghes > 3.0 or ghae %}
   ![Delete all logs](/assets/images/help/repository/delete-all-logs-updated-2.png)
   {% else %}
   ![Delete all logs](/assets/images/help/repository/delete-all-logs-updated.png)
   {% endif %}
   After deleting logs, the **Delete all logs** button is removed to indicate that no log files remain in the workflow run.
   {% else %}
3. In the upper right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
   ![Kebab-horizontal icon](/assets/images/help/repository/workflow-run-kebab-horizontal-icon.png)
4. To delete the log files, click the **Delete all logs** button and review the confirmation prompt.
   ![Delete all logs](/assets/images/help/repository/delete-all-logs.png)
   After the logs have been deleted, the **Delete all logs** button is removed to indicate that no log files remain in the workflow run.
   {% endif %}

## Viewing logs with {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

To view the log for a specific job, use the `run view` subcommand. Replace `run-id` with the ID of run that you want to view logs for. {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a job from the run. If you don't specify `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent run, and then returns another interactive menu for you to choose a job from the run.

```shell
gh run view <em>run-id</em> --log
```

You can also use the `--job` flag to specify a job ID. Replace `job-id` with the ID of the job that you want to view logs for.

```shell
gh run view --job <em>job-id</em> --log
```

You can use `grep` to search the log. For example, this command will return all log entries that contain the word `error`.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

To filter the logs for any failed steps, use `--log-failed` instead of `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
