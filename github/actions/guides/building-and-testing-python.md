{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %} {% data reusables.actions.ae-beta %}

## Introduction

This guide shows you how to build, test, and publish a Python package.

{% ifversion ghae %} For instructions on how to make sure your {% data variables.actions.hosted\_runner %} has the required software installed, see “[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images).” {% else %} {% data variables.product.prodname\_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Python and PyPy. You don’t have to install anything! For a full list of up-to-date software and the pre-installed versions of Python and PyPy, see “[Specifications for {% data variables.product.prodname\_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”. {% endif %}

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname\_actions %}. For more information, see “[Learn {% data variables.product.prodname\_actions %}](/actions/learn-github-actions).”

We recommend that you have a basic understanding of Python, PyPy, and pip. For more information, see: - [Getting started with Python](https://www.python.org/about/gettingstarted/) - [PyPy](https://pypy.org/) - [Pip package manager](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Starting with the Python workflow template

{% data variables.product.prodname\_dotcom %} provides a Python workflow template that should work for most Python projects. This guide includes examples that you can use to customize the template. For more information, see the [Python workflow template](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

To get started quickly, add the template to the `.github/workflows` directory of your repository.

{% raw %}

    name: Python package

    on: [push]

    jobs:
      build:

        runs-on: ubuntu-latest
        strategy:
          matrix:
            python-version: [3.6, 3.7, 3.8, 3.9]

        steps:
          - uses: actions/checkout@v2
          - name: Set up Python ${{ matrix.python-version }}
            uses: actions/setup-python@v2
            with:
              python-version: ${{ matrix.python-version }}
          - name: Install dependencies
            run: |
              python -m pip install --upgrade pip
              pip install flake8 pytest
              if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
          - name: Lint with flake8
            run: |
              # stop the build if there are Python syntax errors or undefined names
              flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
              # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
              flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
          - name: Test with pytest
            run: |
              pytest

{% endraw %}

## Specifying a Python version

To use a pre-installed version of Python or PyPy on a {% data variables.product.prodname\_dotcom %}-hosted runner, use the `setup-python` action. This action finds a specific version of Python or PyPy from the tools cache on each runner and adds the necessary binaries to `PATH`, which persists for the rest of the job. If a specific version of Python is not pre-installed in the tools cache, the `setup-python` action will download and set up the appropriate version from the [`python-versions`](https://github.com/actions/python-versions) repository.

Using the `setup-python` action is the recommended way of using Python with {% data variables.product.prodname\_actions %} because it ensures consistent behavior across different runners and different versions of Python. If you are using a self-hosted runner, you must install Python and add it to `PATH`. For more information, see the [`setup-python` action](https://github.com/marketplace/actions/setup-python).

The table below describes the locations for the tools cache in each {% data variables.product.prodname\_dotcom %}-hosted runner.

<table style="width:98%;"><colgroup><col style="width: 20%" /><col style="width: 24%" /><col style="width: 20%" /><col style="width: 34%" /></colgroup><thead><tr class="header"><th></th><th>Ubuntu</th><th>Mac</th><th>Windows</th></tr></thead><tbody><tr class="odd"><td><strong>Tool Cache Directory</strong></td><td><code>/opt/hostedtoolcache/*</code></td><td><code>/Users/runner/hostedtoolcache/*</code></td><td><code>C:\hostedtoolcache\windows\*</code></td></tr><tr class="even"><td><strong>Python Tool Cache</strong></td><td><code>/opt/hostedtoolcache/Python/*</code></td><td><code>/Users/runner/hostedtoolcache/Python/*</code></td><td><code>C:\hostedtoolcache\windows\Python\*</code></td></tr><tr class="odd"><td><strong>PyPy Tool Cache</strong></td><td><code>/opt/hostedtoolcache/PyPy/*</code></td><td><code>/Users/runner/hostedtoolcache/PyPy/*</code></td><td><code>C:\hostedtoolcache\windows\PyPy\*</code></td></tr></tbody></table>

If you are using a self-hosted runner, you can configure the runner to use the `setup-python` action to manage your dependencies. For more information, see [using setup-python with a self-hosted runner](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) in the `setup-python` README.

{% data variables.product.prodname\_dotcom %} supports semantic versioning syntax. For more information, see “[Using semantic versioning](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)” and the “[Semantic versioning specification](https://semver.org/).”

### Using multiple Python versions

{% raw %}

    name: Python package

    on: [push]

    jobs:
      build:

        runs-on: ubuntu-latest
        strategy:
          # You can use PyPy versions in python-version.
          # For example, pypy2 and pypy3
          matrix:
            python-version: [2.7, 3.6, 3.7, 3.8, 3.9]

        steps:
          - uses: actions/checkout@v2
          - name: Set up Python ${{ matrix.python-version }}
            uses: actions/setup-python@v2
            with:
              python-version: ${{ matrix.python-version }}
          # You can test your matrix by printing the current Python version
          - name: Display Python version
            run: python -c "import sys; print(sys.version)"

{% endraw %}

### Using a specific Python version

You can configure a specific version of python. For example, 3.8. Alternatively, you can use semantic version syntax to get the latest minor release. This example uses the latest minor release of Python 3.

{% raw %}

    name: Python package

    on: [push]

    jobs:
      build:

        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v2
          - name: Set up Python 3.x
            uses: actions/setup-python@v2
            with:
              # Semantic version range syntax or exact version of a Python version
              python-version: '3.x'
              # Optional - x64 or x86 architecture, defaults to x64
              architecture: 'x64'
          # You can test your matrix by printing the current Python version
          - name: Display Python version
            run: python -c "import sys; print(sys.version)"

{% endraw %}

### Excluding a version

If you specify a version of Python that is not available, `setup-python` fails with an error such as: `##[error]Version 3.4 with arch x64 not found`. The error message includes the available versions.

You can also use the `exclude` keyword in your workflow if there is a configuration of Python that you do not wish to run. For more information, see “[Workflow syntax for {% data variables.product.prodname\_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).”

{% raw %}

    name: Python package

    on: [push]

    jobs:
      build:

        runs-on: ${{ matrix.os }}
        strategy:
          matrix:
            os: [ubuntu-latest, macos-latest, windows-latest]
            python-version: [3.6, 3.7, 3.8, 3.9, pypy2, pypy3]
            exclude:
              - os: macos-latest
                python-version: 3.6
              - os: windows-latest
                python-version: 3.6

{% endraw %}

### Using the default Python version

We recommend using `setup-python` to configure the version of Python used in your workflows because it helps make your dependencies explicit. If you don’t use `setup-python`, the default version of Python set in `PATH` is used in any shell when you call `python`. The default version of Python varies between {% data variables.product.prodname\_dotcom %}-hosted runners, which may cause unexpected changes or use an older version than expected.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>{% data variables.product.prodname_dotcom %}-hosted runner</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Ubuntu</td><td>Ubuntu runners have multiple versions of system Python installed under <code>/usr/bin/python</code> and <code>/usr/bin/python3</code>. The Python versions that come packaged with Ubuntu are in addition to the versions that {% data variables.product.prodname_dotcom %} installs in the tools cache.</td></tr><tr class="even"><td>Windows</td><td>Excluding the versions of Python that are in the tools cache, Windows does not ship with an equivalent version of system Python. To maintain consistent behavior with other runners and to allow Python to be used out-of-the-box without the <code>setup-python</code> action, {% data variables.product.prodname_dotcom %} adds a few versions from the tools cache to <code>PATH</code>.</td></tr><tr class="odd"><td>macOS</td><td>The macOS runners have more than one version of system Python installed, in addition to the versions that are part of the tools cache. The system Python versions are located in the <code>/usr/local/Cellar/python/*</code> directory.</td></tr></tbody></table>

## Installing dependencies

{% data variables.product.prodname\_dotcom %}-hosted runners have the pip package manager installed. You can use pip to install dependencies from the PyPI package registry before building and testing your code. For example, the YAML below installs or upgrades the `pip` package installer and the `setuptools` and `wheel` packages.

When using {% data variables.product.prodname\_dotcom %}-hosted runners, you can also cache dependencies to speed up your workflow. For more information, see “<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>.”

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: python -m pip install --upgrade pip setuptools wheel

{% endraw %}

### Requirements file

After you update `pip`, a typical next step is to install dependencies from _requirements.txt_.

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt

{% endraw %}

### Caching Dependencies

When using {% data variables.product.prodname\_dotcom %}-hosted runners, you can cache pip dependencies using a unique key, and restore the dependencies when you run future workflows using the [`cache`](https://github.com/marketplace/actions/cache) action. For more information, see “<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>.”

Pip caches dependencies in different locations, depending on the operating system of the runner. The path you’ll need to cache may differ from the Ubuntu example below depending on the operating system you use. For more information, see [Python caching examples](https://github.com/actions/cache/blob/main/examples.md#python---pip).

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Setup Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Cache pip
      uses: actions/cache@v2
      with:
        # This path is specific to Ubuntu
        path: ~/.cache/pip
        # Look to see if there is a cache hit for the corresponding requirements file
        key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
        restore-keys: |
          ${{ runner.os }}-pip-
          ${{ runner.os }}-
    - name: Install dependencies
      run: pip install -r requirements.txt

{% endraw %}

{% note %}

**Note:** Depending on the number of dependencies, it may be faster to use the dependency cache. Projects with many large dependencies should see a performance increase as it cuts down the time required for downloading. Projects with fewer dependencies may not see a significant performance increase and may even see a slight decrease due to how pip installs cached dependencies. The performance varies from project to project.

{% endnote %}

## Testing your code

You can use the same commands that you use locally to build and test your code.

### Testing with pytest and pytest-cov

This example installs or upgrades `pytest` and `pytest-cov`. Tests are then run and output in JUnit format while code coverage results are output in Cobertura. For more information, see [JUnit](https://junit.org/junit5/) and [Cobertura](https://cobertura.github.io/cobertura/).

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Test with pytest
      run: |
        pip install pytest
        pip install pytest-cov
        pytest tests.py --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html

{% endraw %}

### Using Flake8 to lint code

The following example installs or upgrades `flake8` and uses it to lint all files. For more information, see [Flake8](http://flake8.pycqa.org/en/latest/).

{% raw %}

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Lint with flake8
      run: |
        pip install flake8
        flake8 .

{% endraw %}

### Running tests with tox

With {% data variables.product.prodname\_actions %}, you can run tests with tox and spread the work across multiple jobs. You’ll need to invoke tox using the `-e py` option to choose the version of Python in your `PATH`, rather than specifying a specific version. For more information, see [tox](https://tox.readthedocs.io/en/latest/).

{% raw %}

    name: Python package

    on: [push]

    jobs:
      build:

        runs-on: ubuntu-latest
        strategy:
          matrix:
            python: [3.7, 3.8, 3.9]

        steps:
          - uses: actions/checkout@v2
          - name: Setup Python
            uses: actions/setup-python@v2
            with:
              python-version: ${{ matrix.python }}
          - name: Install Tox and any other packages
            run: pip install tox
          - name: Run Tox
            # Run tox using the version of Python in `PATH`
            run: tox -e py

{% endraw %}

## Packaging workflow data as artifacts

You can upload artifacts to view after a workflow completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see “[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).”

The following example demonstrates how you can use the `upload-artifact` action to archive test results from running `pytest`. For more information, see the [`upload-artifact` action](https://github.com/actions/upload-artifact).

{% raw %}

    name: Python package

    on: [push]

    jobs:
      build:

        runs-on: ubuntu-latest
        strategy:
          matrix:
            python-version: [3.6, 3.7, 3.8, 3.9]

        steps:
          - uses: actions/checkout@v2
          - name: Setup Python # Set Python version
            uses: actions/setup-python@v2
            with:
              python-version: ${{ matrix.python-version }}
          # Install pip and pytest
          - name: Install dependencies
            run: |
              python -m pip install --upgrade pip
              pip install pytest
          - name: Test with pytest
            run: pytest tests.py --doctest-modules --junitxml=junit/test-results-${{ matrix.python-version }}.xml
          - name: Upload pytest test results
            uses: actions/upload-artifact@v2
            with:
              name: pytest-results-${{ matrix.python-version }}
              path: junit/test-results-${{ matrix.python-version }}.xml
            # Use always() to always run this step to publish test results when there are test failures
            if: ${{ always() }}

{% endraw %}

## Publishing to package registries

You can configure your workflow to publish your Python package to a package registry once your CI tests pass. This section demonstrates how you can use {% data variables.product.prodname\_actions %} to upload your package to PyPI each time you [publish a release](/github/administering-a-repository/managing-releases-in-a-repository).

For this example, you will need to create two [PyPI API tokens](https://pypi.org/help/#apitoken). You can use secrets to store the access tokens or credentials needed to publish your package. For more information, see “[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).”

    {% data reusables.actions.actions-not-certified-by-github-comment %}

    name: Upload Python Package

    on:
      release:
        types: [published]

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - name: Set up Python
            uses: actions/setup-python@v2
            with:
              python-version: '3.x'
          - name: Install dependencies
            run: |
              python -m pip install --upgrade pip
              pip install build
          - name: Build package
            run: python -m build
          - name: Publish package
            uses: pypa/gh-action-pypi-publish@27b31702a0e7fc50959f5ad993c78deac1bdfc29
            with:
              user: __token__
              password: {% raw %}${{ secrets.PYPI_API_TOKEN }}{% endraw %}

For more information about the template workflow, see [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
