{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %} {% data reusables.actions.ae-beta %}

## About exit codes

{% data variables.product.prodname\_dotcom %} uses the exit code to set the action’s check run status, which can be `success` or `failure`.

<table style="width:98%;"><colgroup><col style="width: 28%" /><col style="width: 42%" /><col style="width: 28%" /></colgroup><thead><tr class="header"><th>Exit status</th><th>Check run status</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>0</code></td><td><code>success</code></td><td>The action completed successfully and other tasks that depends on it can begin.</td></tr><tr class="even"><td>Nonzero value (any integer but 0)</td><td><code>failure</code></td><td>Any other exit code indicates the action failed. When an action fails, all concurrent actions are canceled and future actions are skipped. The check run and check suite both get a <code>failure</code> status.</td></tr></tbody></table>

## Setting a failure exit code in a JavaScript action

If you are creating a JavaScript action, you can use the actions toolkit [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) package to log a message and set a failure exit code. For example:

    try {
      // something
    } catch (error) {
      core.setFailed(error.message);
    }

For more information, see “[Creating a JavaScript action](/articles/creating-a-javascript-action).”

## Setting a failure exit code in a Docker container action

If you are creating a Docker container action, you can set a failure exit code in your `entrypoint.sh` script. For example:

    if <condition> ; then
      echo "Game over!"
      exit 1
    fi

For more information, see “[Creating a Docker container action](/articles/creating-a-docker-container-action).”
