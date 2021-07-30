{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %} {% data reusables.actions.ae-beta %}

## Introduction

This guide shows you how to create a continuous integration (CI) workflow that builds and tests Node.js code. If your CI tests pass, you may want to deploy your code or publish a package.

## Prerequisites

We recommend that you have a basic understanding of Node.js, YAML, workflow configuration options, and how to create a workflow file. For more information, see:

- “[Learn {% data variables.product.prodname\_actions %}](/actions/learn-github-actions)”
- “[Getting started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)”

{% data reusables.actions.enterprise-setup-prereq %}

## Starting with the Node.js workflow template

{% data variables.product.prodname\_dotcom %} provides a Node.js workflow template that will work for most Node.js projects. This guide includes npm and Yarn examples that you can use to customize the template. For more information, see the [Node.js workflow template](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

To get started quickly, add the template to the `.github/workflows` directory of your repository. The workflow shown below assumes that the default branch for your repository is `main`.

{% raw %}

    name: Node.js CI

    on:
      push:
        branches: [ main ]
      pull_request:
        branches: [ main ]

    jobs:
      build:

        runs-on: ubuntu-latest

        strategy:
          matrix:
            node-version: [10.x, 12.x, 14.x, 15.x]

        steps:
          - uses: actions/checkout@v2
          - name: Use Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v2
            with:
              node-version: ${{ matrix.node-version }}
          - run: npm ci
          - run: npm run build --if-present
          - run: npm test

{% endraw %}

{% data reusables.github-actions.example-github-runner %}

## Specifying the Node.js version

The easiest way to specify a Node.js version is by using the `setup-node` action provided by {% data variables.product.prodname\_dotcom %}. For more information see, [`setup-node`](https://github.com/actions/setup-node/).

The `setup-node` action takes a Node.js version as an input and configures that version on the runner. The `setup-node` action finds a specific version of Node.js from the tools cache on each runner and adds the necessary binaries to `PATH`, which persists for the rest of the job. Using the `setup-node` action is the recommended way of using Node.js with {% data variables.product.prodname\_actions %} because it ensures consistent behavior across different runners and different versions of Node.js. If you are using a self-hosted runner, you must install Node.js and add it to `PATH`.

The template includes a matrix strategy that builds and tests your code with four Node.js versions: 10.x, 12.x, 14.x, and 15.x. The ‘x’ is a wildcard character that matches the latest minor and patch release available for a version. Each version of Node.js specified in the `node-version` array creates a job that runs the same steps.

Each job can access the value defined in the matrix `node-version` array using the `matrix` context. The `setup-node` action uses the context as the `node-version` input. The `setup-node` action configures each job with a different Node.js version before building and testing code. For more information about matrix strategies and contexts, see “[Workflow syntax for {% data variables.product.prodname\_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)” and “[Context and expression syntax for {% data variables.product.prodname\_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions).”

{% raw %}

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

{% endraw %}

Alternatively, you can build and test with exact Node.js versions.

    strategy:
      matrix:
        node-version: [8.16.2, 10.17.0]

Or, you can build and test using a single version of Node.js too.

{% raw %}

    name: Node.js CI

    on: [push]

    jobs:
      build:

        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v2
          - name: Use Node.js
            uses: actions/setup-node@v2
            with:
              node-version: '12.x'
          - run: npm ci
          - run: npm run build --if-present
          - run: npm test

{% endraw %}

If you don’t specify a Node.js version, {% data variables.product.prodname\_dotcom %} uses the environment’s default Node.js version. {% ifversion ghae %} For instructions on how to make sure your {% data variables.actions.hosted\_runner %} has the required software installed, see “[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images).” {% else %} For more information, see “[Specifications for {% data variables.product.prodname\_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”. {% endif %}

## Installing dependencies

{% data variables.product.prodname\_dotcom %}-hosted runners have npm and Yarn dependency managers installed. You can use npm and Yarn to install dependencies in your workflow before building and testing your code. The Windows and Linux {% data variables.product.prodname\_dotcom %}-hosted runners also have Grunt, Gulp, and Bower installed.

When using {% data variables.product.prodname\_dotcom %}-hosted runners, you can also cache dependencies to speed up your workflow. For more information, see “<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>.”

### Example using npm

This example installs the dependencies defined in the _package.json_ file. For more information, see [`npm install`](https://docs.npmjs.com/cli/install).

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '12.x'
    - name: Install dependencies
      run: npm install

Using `npm ci` installs the versions in the _package-lock.json_ or _npm-shrinkwrap.json_ file and prevents updates to the lock file. Using `npm ci` is generally faster than running `npm install`. For more information, see [`npm ci`](https://docs.npmjs.com/cli/ci.html) and “[Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable).”

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '12.x'
    - name: Install dependencies
      run: npm ci

{% endraw %}

### Example using Yarn

This example installs the dependencies defined in the _package.json_ file. For more information, see [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '12.x'
    - name: Install dependencies
      run: yarn

Alternatively, you can pass `--frozen-lockfile` to install the versions in the _yarn.lock_ file and prevent updates to the _yarn.lock_ file.

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '12.x'
    - name: Install dependencies
      run: yarn --frozen-lockfile

### Example using a private registry and creating the .npmrc file

{% data reusables.github-actions.setup-node-intro %}

To authenticate to your private registry, you’ll need to store your npm authentication token as a secret. For example, create a repository secret called `NPM_TOKEN`. For more information, see “[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).”

In the example below, the secret `NPM_TOKEN` stores the npm authentication token. The `setup-node` action configures the _.npmrc_ file to read the npm authentication token from the `NODE_AUTH_TOKEN` environment variable. When using the `setup-node` action to create an _.npmrc_ file, you must set the `NODE_AUTH_TOKEN` environment variable with the secret that contains your npm authentication token.

Before installing dependencies, use the `setup-node` action to create the _.npmrc_ file. The action has two input parameters. The `node-version` parameter sets the Node.js version, and the `registry-url` parameter sets the default registry. If your package registry uses scopes, you must use the `scope` parameter. For more information, see [`npm-scope`](https://docs.npmjs.com/misc/scope).

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        always-auth: true
        node-version: '12.x'
        registry-url: https://registry.npmjs.org
        scope: '@octocat'
    - name: Install dependencies
      run: npm ci
      env:
        NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}

{% endraw %}

The example above creates an _.npmrc_ file with the following contents:

    //registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
    @octocat:registry=https://registry.npmjs.org/
    always-auth=true

### Example caching dependencies

When using {% data variables.product.prodname\_dotcom %}-hosted runners, you can cache and restore the dependencies using the [`setup-node` action](https://github.com/actions/setup-node).

The following example caches dependencies for npm.

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '14'
        cache: 'npm'
    - run: npm install
    - run: npm test

The following example caches dependencies for Yarn.

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '14'
        cache: 'yarn'
    - run: yarn
    - run: yarn test

The following example caches dependencies for pnpm (v6.10+).

    {% data reusables.actions.actions-not-certified-by-github-comment %}

    # NOTE: pnpm caching support requires pnpm version >= 6.10.0

    steps:
    - uses: actions/checkout@v2
    - uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
      with:
        version: 6.10.0
    - uses: actions/setup-node@v2
      with:
        node-version: '14'
        cache: 'pnpm'
    - run: pnpm install
    - run: pnpm test

To cache dependencies, you must have a `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` file in the root of the repository. If you need more flexible customization, you can use the [`cache` action](https://github.com/marketplace/actions/cache). For more information, see “<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>”.

## Building and testing your code

You can use the same commands that you use locally to build and test your code. For example, if you run `npm run build` to run build steps defined in your _package.json_ file and `npm test` to run your test suite, you would add those commands in your workflow file.

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '12.x'
    - run: npm install
    - run: npm run build --if-present
    - run: npm test

## Packaging workflow data as artifacts

You can save artifacts from your build and test steps to view after a job completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see “[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).”

## Publishing to package registries

You can configure your workflow to publish your Node.js package to a package registry after your CI tests pass. For more information about publishing to npm and {% data variables.product.prodname\_registry %}, see “[Publishing Node.js packages](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages).”
