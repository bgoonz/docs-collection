---
title: Troubleshooting the CodeQL workflow
shortTitle: Troubleshoot CodeQL workflow
intro: 'If you''re having problems with {% data variables.product.prodname_code_scanning %}, you can troubleshoot by using these tips for resolving issues.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
---
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

## Producing detailed logs for debugging

To produce more detailed logging output, you can enable step debug logging. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)."

## Automatic build for a compiled language fails

If an automatic build of code for a compiled language within your project fails, try the following troubleshooting steps.

- Remove the `autobuild` step from your {% data variables.product.prodname_code_scanning %} workflow and add specific build steps. For information about editing the workflow, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)." For more information about replacing the `autobuild` step, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

- If your workflow doesn't explicitly specify the languages to analyze, {% data variables.product.prodname_codeql %} implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages C/C++, C#, and Java, {% data variables.product.prodname_codeql %} only analyzes the language with the most source files. Edit the workflow and add a build matrix specifying the languages you want to analyze. The default CodeQL analysis workflow uses such a matrix.

  The following extracts from a workflow show how you can use a matrix within the job strategy to specify languages, and then reference each language within the "Initialize {% data variables.product.prodname_codeql %}" step:

  ```yaml
  jobs:
    analyze:{% ifversion fpt or ghes > 3.1 or ghae-next %}
      permissions:
        security-events: write
        actions: read{% endif %}
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: github/codeql-action/init@v1
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  For more information about editing the workflow, see "[Configuring code scanning](/code-security/secure-coding/configuring-code-scanning)."

## No code found during the build

If your workflow fails with an error `No source code was seen during the build` or `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, this indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code. Several reasons can explain such a failure:

1. Automatic language detection identified a supported language, but there is no analyzable code of that language in the repository. A typical example is when our language detection service finds a file associated with a particular programming language like a `.h`, or `.gyp` file, but no corresponding executable code is present in the repository. To solve the problem, you can manually define the languages you want to analyze by updating the list of languages in the `language` matrix. For example, the following configuration will analyze only Go, and JavaScript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below
      # Supported options are:
      # ['csharp', 'cpp', 'go', 'java', 'javascript', 'python']
      language: ['go', 'javascript']
  ```
For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.
1. Your {% data variables.product.prodname_code_scanning %} workflow is analyzing a compiled language (C, C++, C#, or Java), but the code was not compiled. By default, the {% data variables.product.prodname_codeql %} analysis workflow contains an `autobuild` step, however, this step represents a best effort process, and may not succeed in building your code, depending on your specific build environment. Compilation may also fail if you have removed the `autobuild` step and did not include build steps manually.  For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
1. Your workflow is analyzing a compiled language (C, C++, C#, or Java), but portions of your build are cached to improve performance (most likely to occur with build systems like Gradle or Bazel). Since {% data variables.product.prodname_codeql %} observes the activity of the compiler to understand the data flows in a repository, {% data variables.product.prodname_codeql %} requires a complete build to take place in order to perform analysis. 
1. Your workflow is analyzing a compiled language (C, C++, C#, or Java), but compilation does not occur between the `init` and `analyze` steps in the workflow. {% data variables.product.prodname_codeql %} requires that your build happens in between these two steps in order to observe the activity of the compiler and perform analysis. 
1. Your compiled code (in C, C++, C#, or Java) was compiled successfully, but {% data variables.product.prodname_codeql %} was unable to detect the compiler invocations. The most common causes are:

   * Running your build process in a separate container to {% data variables.product.prodname_codeql %}. For more information, see "[Running CodeQL code scanning in a container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)."
   * Building using a distributed build system external to GitHub Actions, using a daemon process.
   * {% data variables.product.prodname_codeql %} isn't aware of the specific compiler you are using.

  For .NET Framework projects, and for C# projects using either `dotnet build` or `msbuild` that target .NET Core 2, you should specify `/p:UseSharedCompilation=false` in your workflow's `run` step, when you build your code. The `UseSharedCompilation` flag isn't necessary for .NET Core 3.0 and later.
  
  For example, the following configuration for C# will pass the flag during the first build step.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false 
   ```

  If you encounter another problem with your specific compiler or configuration, contact {% data variables.contact.contact_support %}.

For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)." 

## Portions of my repository were not analyzed using `autobuild`

The {% data variables.product.prodname_codeql %} `autobuild` feature uses heuristics to build the code in a repository, however, sometimes this approach results in incomplete analysis of a repository. For example, when multiple `build.sh` commands exist in a single repository, the analysis may not complete since the `autobuild` step will only execute one of the commands. The solution is to replace the `autobuild` step with build steps which build all of the source code which you wish to analyze. For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

## The build takes too long

If your build with {% data variables.product.prodname_codeql %} analysis takes too long to run, there are several approaches you can try to reduce the build time. 

### Increase the memory or cores

If you use self-hosted runners to run {% data variables.product.prodname_codeql %} analysis, you can increase the memory or the number of cores on those runners.

### Use matrix builds to parallelize the analysis

The default {% data variables.product.prodname_codeql_workflow %} uses a build matrix of languages, which causes the analysis of each language to run in parallel. If you have specified the languages you want to analyze directly in the "Initialize CodeQL" step, analysis of each language will happen sequentially. To speed up analysis of multiple languages, modify your workflow to use a matrix. For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.

### Reduce the amount of code being analyzed in a single workflow

Analysis time is typically proportional to the amount of code being analyzed. You can reduce the analysis time by reducing the amount of code being analyzed at once, for example, by excluding test code, or breaking analysis into multiple workflows that analyze only a subset of your code at a time.

For compiled languages like Java, C, C++, and C#, {% data variables.product.prodname_codeql %} analyzes all of the code which was built during the workflow run. To limit the amount of code being analyzed, build only the code which you wish to analyze by specifying your own build steps in a `run` block. You can combine specifying your own build steps with using the `paths` or `paths-ignore` filters on the `pull_request` and `push` events to ensure that your workflow only runs when specific code is changed. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

For interpreted languages like Go, JavaScript, Python, and TypeScript, that {% data variables.product.prodname_codeql %} analyzes without a specific build, you can specify additional configuration options to limit the amount of code to analyze. For more information, see "[Specifying directories to scan](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)."

If you split your analysis into multiple workflows as described above, we still recommend that you have at least one workflow which runs on a `schedule` which analyzes all of the code in your repository. Because {% data variables.product.prodname_codeql %} analyzes data flows between components, some complex security behaviors may only be detected on a complete build. 

### Run only during a `schedule` event

If your analysis is still too slow to be run during `push` or `pull_request` events, then you may want to only trigger analysis on the `schedule` event. For more information, see "[Events](/actions/learn-github-actions/introduction-to-github-actions#events)."

{% ifversion fpt %}
## Results differ between analysis platforms

If you are analyzing code written in Python, you may see different results depending on whether you run the {% data variables.product.prodname_codeql_workflow %} on Linux, macOS, or Windows.

On GitHub-hosted runners that use Linux, the {% data variables.product.prodname_codeql_workflow %} tries to install and analyze Python dependencies, which could lead to more results. To disable the auto-install, add `setup-python-dependencies: false` to the "Initialize CodeQL" step of the workflow. For more information about configuring the analysis of Python dependencies, see "[Analyzing Python dependencies](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)."

{% endif %}

## Error: "Server error"

If the run of a workflow for {% data variables.product.prodname_code_scanning %} fails due to a server error, try running the workflow again. If the problem persists, contact {% data variables.contact.contact_support %}.

## Error: "Out of disk" or "Out of memory"

On very large projects, {% data variables.product.prodname_codeql %} may run out of disk or memory on the runner.
{% ifversion fpt %}If you encounter this issue on a hosted {% data variables.product.prodname_actions %} runner, contact {% data variables.contact.contact_support %} so that we can investigate the problem.
{% else %}If you encounter this issue, try increasing the memory on the runner.{% endif %}

{% ifversion fpt %}
## Error: 403 "Resource not accessible by integration" when using {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} is considered untrusted when it triggers a workflow run, and the workflow will run with read-only scopes. Uploading {% data variables.product.prodname_code_scanning %} results for a branch usually requires the `security_events: write` scope. However, {% data variables.product.prodname_code_scanning %} always allows the uploading of results when the `pull_request` event triggers the action run. This is why, for {% data variables.product.prodname_dependabot %} branches, we recommend you use the `pull_request` event instead of the `push` event.

A simple approach is to run on pushes to the default branch and any other important long-running branches, as well as pull requests opened against this set of branches:
```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```
An alternative approach is to run on all pushes except for {% data variables.product.prodname_dependabot %} branches:
```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Analysis still failing on the default branch

If the {% data variables.product.prodname_codeql_workflow %} still fails on a commit made on the default branch, you need to check:
- whether {% data variables.product.prodname_dependabot %} authored the commit
- whether the pull request that includes the commit has been merged using `@dependabot squash and merge`

This type of merge commit is authored by {% data variables.product.prodname_dependabot %} and therefore, any workflows running on the commit will have read-only permissions. If you enabled {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} security updates or version updates on your repository, we recommend you avoid using the {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` command. Instead, you can enable auto-merge for your repository. This means that pull requests will be automatically merged when all required reviews are met and status checks have passed. For more information about enabling auto-merge, see "[Automatically merging a pull request](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)."
{% endif %}

## Warning: "git checkout HEAD^2 is no longer necessary"

If you're using an old {% data variables.product.prodname_codeql %} workflow you may get the following warning in the output from the "Initialize {% data variables.product.prodname_codeql %}" action:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Fix this by removing the following lines from the {% data variables.product.prodname_codeql %} workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the {% data variables.product.prodname_codeql %} workflow.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

The revised `steps` section of the workflow will look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1

      ...
```

For more information about editing the {% data variables.product.prodname_codeql %} workflow file, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)."
