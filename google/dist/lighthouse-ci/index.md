<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format" alt="Lighthouse CI displayed over a screenshot of Lighthouse CI server" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8q10N5o2xDA7YJKcefm5.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#performance-monitoring-with-lighthouse-ci" class="w-toc__header--link">Performance monitoring with Lighthouse CI</a>

- [Overview](#overview)
- [Use Lighthouse CI locally](#cli)
- [Setup your CI process to run Lighthouse CI](#ci-setup)
- [Set up a GitHub Action to run Lighthouse CI](#github-actions)
- [Set up a GitHub status check](#github-status-checks)
- [Set up the Lighthouse CI Server](#server-setup)
- [Find out more](#find-out-more)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Performance monitoring with Lighthouse CI

How to add Lighthouse to a continuous integration system, such as GitHub Actions.

Jul 27, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/fast" class="w-post-signpost__link">Fast load times</a>

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) is a suite of tools for using Lighthouse during continuous integration. Lighthouse CI can be incorporated into developer workflows in many different ways. This guide covers the following topics:

- Using the Lighthouse CI CLI.
- Configuring your CI provider to run Lighthouse CI.
- Setting up a [GitHub Action](https://github.com/features/actions) and [status check](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks) for Lighthouse CI. This will automatically display Lighthouse results on GitHub pull requests.
- Building a performance dashboard and data store for Lighthouse reports.

## Overview <a href="#overview" class="w-headline-link">#</a>

Lighthouse CI is a suite of free tools that facilitate using Lighthouse for performance monitoring. A single Lighthouse report provides a snapshot of a web page's performance at the time that it is run; Lighthouse CI shows how these findings have changed over time. This can be used to identify the impact of particular code changes or ensure that performance thresholds are met during continuous integration processes. Although performance monitoring is the most common use case for Lighthouse CI, it can be used to monitor other aspects of the Lighthouse report - for example, SEO or accessibility.

The core functionality of Lighthouse CI is provided by the Lighthouse CI command line interface. (Note: This is a separate tool than the [Lighthouse CLI](https://github.com/GoogleChrome/lighthouse#using-the-node-cli).) The Lighthouse CI CLI provides a set of [commands](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#commands) for using Lighthouse CI. For example, the `autorun` command executes multiple Lighthouse runs, identifies the median Lighthouse report, and uploads the report for storage. This behavior can be heavily customized by passing additional flags or customizing Lighthouse CI's configuration file, `lighthouserc.js`.

Although the core functionality of Lighthouse CI is primarily encapsulated in the Lighthouse CI CLI, Lighthouse CI is typically used through one of the following approaches:

- Running Lighthouse CI as part of continuous integration
- Using a Lighthouse CI GitHub Action that runs and comments on every pull request
- Tracking performance over time via the dashboard provided by Lighthouse Server.

All of these approaches are built upon the Lighthouse CI CLI.

Alternatives to Lighthouse CI include third-party performance monitoring services or writing your own script to collect performance data during the CI process. You should consider using a third-party service if you'd prefer to let someone else handle the management of your performance monitoring server and test devices, or, if you want notification capabilities (such as email or Slack integration) without having to build these features yourself.

## Use Lighthouse CI locally <a href="#cli" class="w-headline-link">#</a>

This section explains how to run and install the Lighthouse CI CLI locally and how to configure `lighthouserc.js`. Running the Lighthouse CI CLI locally is the easiest way to make sure that your `lighthouserc.js` is configured correctly.

1.  Install the Lighthouse CI CLI.

        npm install -g @lhci/cli

    Lighthouse CI is configured by placing a `lighthouserc.js` file in the root of your project's repo. This file is mandatory and will contain Lighthouse CI related configuration information. Although Lighthouse CI can be [configured to be used without a git repo](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#build-context), the instructions in this article assume that your project repo is configured to use git.

2.  In the root of your repository, create a `lighthouserc.js` [configuration file](https://github.com/GoogleChrome/lighthouse-ci/blob/v0.4.1/docs/configuration.md#configuration-file).

        touch lighthouserc.js

3.  Add the following code to `lighthouserc.js`. This code is an empty Lighthouse CI configuration. You will be adding to this configuration in later steps.

        module.exports = {
          ci: {
            collect: {
              /* Add configuration here */
            },
            upload: {
              /* Add configuration here */
            },
          },
        };

4.  Every time that Lighthouse CI runs, it starts a server to serve your site. This server is what enables Lighthouse to load your site even when no other servers are running. When Lighthouse CI finishes running, it will automatically shutdown the server. To ensure that serving works correctly, you should configure either the [`staticDistDir`](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#detecting-collectstaticdistdir) or [`startServerCommand`](https://github.com/GoogleChrome/lighthouse-ci/blob/v0.4.1/docs/configuration.md#startservercommand) properties.

    If your site is static, add the `staticDistDir` property to the `ci.collect` object to indicate where your static files are located. Lighthouse CI will use its own server to serve these files while testing your site. If your site is not static, add the `startServerCommand` property to the `ci.collect` object to indicate the command that starts your server. Lighthouse CI will start a new server process during testing and shut it down after.

        // Static site example
        collect: {
          staticDistDir: './public',
        }

        // Dynamic site example
        collect: {
          startServerCommand: 'npm run start',
        }

5.  Add the [`url`](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#url) property to the `ci.collect` object to indicate URL(s) that Lighthouse CI should run Lighthouse against. The value of the `url` property should be provided as an array of URLs; this array can contain one or more URLs. By default, Lighthouse CI will run Lighthouse three times against each URL.

        collect: {
          // ...
          url: ['http://localhost:8080']
        }

    Note: These URLs should be serveable by the server you configured in the previous step. Thus, if you're running Lighthouse CI locally, these URLs should probably include `localhost` rather than your production host.

6.  Add the [`target`](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#target) property to the `ci.upload` object and set the value to `'temporary-public-storage'`. The Lighthouse report(s) collected by Lighthouse CI will be uploaded to temporary public storage. The report will remain there for seven days and then be automatically deleted. This setup guide uses the "temporary public storage" upload option because it is quick to setup. For information on other ways of storing Lighthouse reports, refer to the [documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#target).

        upload: {
          target: 'temporary-public-storage',
        }

    The storage location of the report will be similar to this:

        https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1580152437799-46441.report.html

    (This URL won't work because the report has already been deleted.)

7.  Run the Lighthouse CI CLI from the terminal using the `autorun` command. This will run Lighthouse three times and upload the median Lighthouse report.

        lhci autorun

    If you've correctly configured Lighthouse CI, running this command should produce output similar to this:

        ✅  .lighthouseci/ directory writable
        ✅  Configuration file found
        ✅  Chrome installation found
        ⚠️   GitHub token not set
        Healthcheck passed!

        Started a web server on port 65324...
        Running Lighthouse 3 time(s) on http://localhost:65324/index.html
        Run #1...done.
        Run #2...done.
        Run #3...done.
        Done running Lighthouse!

        Uploading median LHR of http://localhost:65324/index.html...success!
        Open the report at https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1591720514021-82403.report.html
        No GitHub token set, skipping GitHub status check.

        Done running autorun.

    You can ignore the `GitHub token not set` message in the console output. A GitHub token is only necessary if you want to use Lighthouse CI with a GitHub Action. How to setup a GitHub Action is explained later in this article.

    Clicking on the link in the output that begins with `https://storage.googleapis.com...` will take you to the Lighthouse report corresponding to the median Lighthouse run.

    The defaults used by `autorun` can be overridden via the command line or `lighthouserc.js`. For example, the `lighthouserc.js` configuration below indicates that five Lighthouse runs should be collected every time `autorun` executes.

8.  Update `lighthouserc.js` to use the `numberOfRuns` property:

        module.exports = {
            // ...
            collect: {
              numberOfRuns: 5
            },
          // ...
          },
        };

9.  Re-run the `autorun` command:

        lhci autorun

    The terminal output should show that Lighthouse has been run five times rather than the default three:

        ✅  .lighthouseci/ directory writable
        ✅  Configuration file found
        ✅  Chrome installation found
        ⚠️   GitHub token not set
        Healthcheck passed!

        Automatically determined ./dist as `staticDistDir`.
        Set it explicitly in lighthouserc.json if incorrect.

        Started a web server on port 64444...
        Running Lighthouse 5 time(s) on http://localhost:64444/index.html
        Run #1...done.
        Run #2...done.
        Run #3...done.
        Run #4...done.
        Run #5...done.
        Done running Lighthouse!

        Uploading median LHR of http://localhost:64444/index.html...success!
        Open the report at https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1591716944028-6048.report.html
        No GitHub token set, skipping GitHub status check.

        Done running autorun.

    To learn about other configuration options, refer to the Lighthouse CI [configuration documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md).

## Setup your CI process to run Lighthouse CI <a href="#ci-setup" class="w-headline-link">#</a>

Lighthouse CI can be used with your favorite CI tool. The [Configure Your CI Provider](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#configure-your-ci-provider) section of the Lighthouse CI documentation contains code samples showing how to incorporate Lighthouse CI into the configuration files of common CI tools. Specifically, these code samples show how to run Lighthouse CI to collect performance measurements during the CI process.

Using Lighthouse CI to collect performance measurements is a good place to start with performance monitoring. However, advanced users may want to go a step further and use Lighthouse CI to fail builds if they don't meet pre-defined criteria such as passing particular Lighthouse audits or meeting all performance budgets. This behavior is configured through the [`assert`](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#assert) property of the `lighthouserc.js` file.

Lighthouse CI supports three levels of assertions:

- `off`: ignore assertions
- `warn`: print failures to stderr
- `error`: print failures to stderr and exit Lighthouse CI with a non-zero [exit code](https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html#:~:text=A%20non%2Dzero%20exit%20status,N%20as%20the%20exit%20status.)

Below is an example of a `lighthouserc.js` configuration that includes assertions. It sets assertions for the scores of Lighthouse's performance and accessibility categories. To try this out, add the assertions shown below to your `lighthouserc.js` file, then rerun Lighthouse CI.

    module.exports = {
      ci: {
        collect: {
          // ...
        },
        assert: {
          assertions: {
            'categories:performance': ['warn', {minScore: 1}],
            'categories:accessibility': ['error', {minScore: 1}]
          }
        },
        upload: {
          // ...
        },
      },
    };

The console output that it generates looks like this:

<figure><img src="https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ti9NuzxPKZCYVIzjjddc.png?auto=format&amp;w=1600 1600w" width="800" height="431" /></figure>For more information on Lighthouse CI assertions, refer to the [documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#assert).

## Set up a GitHub Action to run Lighthouse CI <a href="#github-actions" class="w-headline-link">#</a>

This section assumes that you're familiar with git, GitHub, and GitHub Pull Requests.

A [GitHub Action](https://github.com/features/actions) can be used to run Lighthouse CI. This will generate a new Lighthouse report every time that a code change is pushed to any branch of a GitHub repository. Use this in conjunction with a [status check](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks) to display these results on each pull request.

<figure><img src="https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1600 1600w" width="800" height="297" /></figure>1.  In the root of your repository, create a directory named `.github/workflows`. The [workflows](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#about-workflows) for your project will go in this directory. A workflow is a process that runs at a predetermined time (for example, when code is pushed) and is composed of one or more actions.

        mkdir .github
        mkdir .github/workflows

2.  In `.github/workflows` create a file named `lighthouse-ci.yaml`. This file will hold the configuration for a new workflow.

        touch lighthouse-ci.yaml

3.  Add the following text to `lighthouse-ci.yaml`.

        name: Build project and run Lighthouse CI
        on: [push]
        jobs:
          lhci:
            name: Lighthouse CI
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v1
              - name: Use Node.js 10.x
                uses: actions/setup-node@v1
                with:
                  node-version: 10.x
              - name: npm install
                run: |
                  npm install
              - name: run Lighthouse CI
                run: |
                  npm install -g @lhci/cli@0.3.x
                  lhci autorun --upload.target=temporary-public-storage || echo "LHCI failed!"

    This configuration sets up a workflow consisting of a single job that will run whenever new code is pushed to the repository. This job has four steps:

    - Check out the repository that Lighthouse CI will be run against
    - Install and configure Node
    - Install required npm packages
    - Run Lighthouse CI and upload the results to temporary public storage.

4.  Commit these changes and push them to GitHub. If you've correctly followed the steps above, pushing code to GitHub will trigger running the workflow you just added.

5.  To confirm that Lighthouse CI has triggered and to view the report it generated, go to the **Actions** tab of your project. You should see the **Build project and Run Lighthouse CI** workflow listed under your most recent commit.

    <figure><img src="https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ougavsYk6faiNidNxIGQ.png?auto=format&amp;w=1600 1600w" width="800" height="216" /></figure>You can navigate to the Lighthouse report corresponding to a particular commit from the **Actions** tab. Click on the commit, click on the **Lighthouse CI** workflow step, then expand the results of the **run Lighthouse CI** step.

    <figure><img src="https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/aJF6FVHGOPpGNxKB3LjY.png?auto=format&amp;w=1600 1600w" width="800" height="366" /></figure>You've just set up a GitHub Action to run Lighthouse CI. This will be most useful when used in conjunction with a GitHub [status check](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks).

### Set up a GitHub status check <a href="#github-status-checks" class="w-headline-link">#</a>

A status check, if configured, is a message that appears on every PR and typically includes information such as the results of a test or the success of a build.

<figure><img src="https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RZIfiOAPrst9Cxtxi9AX.png?auto=format&amp;w=1600 1600w" width="800" height="297" /></figure>The steps below explain how to set up a status check for Lighthouse CI.

1.  Go to the [Lighthouse CI GitHub App page](https://github.com/apps/lighthouse-ci) and click **Configure**.

2.  (Optional) If you're part of multiple organizations on GitHub, choose the organization that owns the repository for which you want to use Lighthouse CI.

3.  Select **All repositories** if you want to enable Lighthouse CI in all repositories or select **Only select repositories** if you only want to use it in specific repositories, and then select the repositories. Then click **Install & Authorize**.

4.  Copy the token that is displayed. You'll use it in the next step.

5.  To add the token, navigate to the **Settings** page of your GitHub repository, click **Secrets**, then click **Add a new secret**.

    <figure><img src="https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ZYH9cOHehImZLI6vov1r.png?auto=format&amp;w=1600 1600w" width="800" height="375" /></figure>6.  Set the **Name** field to `LHCI_GITHUB_APP_TOKEN` and set the **Value** field to the token that you copied in the last step and then click the **Add secret** button.

6.  The status check is ready for use. To test it, [create a new pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) or push a commit to an existing pull request.

## Set up the Lighthouse CI Server <a href="#server-setup" class="w-headline-link">#</a>

The Lighthouse CI server provides a dashboard for exploring historical Lighthouse reporting. It can also act as a private, long-term datastore for Lighthouse reports.

<figure><img src="https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/4xv6LLe6G48weVNl1CO1.png?auto=format&amp;w=1600 1600w" width="800" height="581" /></figure><figure><img src="https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/vp9hVBQGZk01fUMpIQ1Z.png?auto=format&amp;w=1600 1600w" width="800" height="556" /></figure>1.  Choose which commits to compare.
2.  The amount that the Lighthouse score has changed between the two commits.
3.  This section only shows metrics that have changed between the two commits.
4.  Regressions are highlighted in pink.
5.  Improvements are highlighted in blue.

Lighthouse CI Server is best-suited to users who are comfortable deploying and managing their own infrastructure.

For information on setting up the Lighthouse CI server, including recipes for using Heroku and Docker for deployment, refer to these [instructions](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/server.md).

## Find out more <a href="#find-out-more" class="w-headline-link">#</a>

- [Lighthouse CI GitHub repo](https://github.com/GoogleChrome/lighthouse-ci)

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/lighthouse/" class="w-chip">Lighthouse</a>

<span class="w-mr--sm"> Last updated: Jul 27, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/lighthouse-ci/index.md)

<a href="/blog" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to all articles</a>

- ### Contribute

  - <a href="https://github.com/GoogleChrome/web.dev/issues/new?assignees=&amp;labels=bug&amp;template=bug_report.md&amp;title=" class="w-footer__linkbox-link">File a bug</a>
  - <a href="https://github.com/googlechrome/web.dev" class="w-footer__linkbox-link">View source</a>

- ### Related content

  - <a href="https://blog.chromium.org/" class="w-footer__linkbox-link">Chrome updates</a>
  - <a href="https://developers.google.com/web/" class="w-footer__linkbox-link">Web Fundamentals</a>
  - <a href="https://developers.google.com/web/showcase/" class="w-footer__linkbox-link">Case studies</a>
  - <a href="https://devwebfeed.appspot.com/" class="w-footer__linkbox-link">DevWeb Content Firehose</a>
  - <a href="/podcasts/" class="w-footer__linkbox-link">Podcasts</a>
  - <a href="/shows/" class="w-footer__linkbox-link">Shows</a>

- ### Connect

  - <a href="https://www.twitter.com/@ChromiumDev" class="w-footer__linkbox-link">Twitter</a>
  - <a href="https://www.youtube.com/user/ChromeDevelopers" class="w-footer__linkbox-link">YouTube</a>

<a href="https://developers.google.com/" class="w-footer__utility-logo-link"><img src="/images/lockup-color.png" alt="Google Developers" class="w-footer__utility-logo" width="185" height="33" /></a>

- <a href="https://developer.chrome.com/home" class="w-footer__utility-link">Chrome</a>
- <a href="https://firebase.google.com/" class="w-footer__utility-link">Firebase</a>
- <a href="https://cloud.google.com/" class="w-footer__utility-link">Google Cloud Platform</a>
- <a href="https://developers.google.com/products" class="w-footer__utility-link">All products</a>

<!-- -->

- <a href="https://policies.google.com/" class="w-footer__utility-link">Terms &amp; Privacy</a>
- <a href="/community-guidelines/" class="w-footer__utility-link">Community Guidelines</a>

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies).
