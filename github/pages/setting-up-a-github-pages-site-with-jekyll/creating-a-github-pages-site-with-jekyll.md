---
title: Creating a GitHub Pages site with Jekyll
intro: 'You can use Jekyll to create a {% data variables.product.prodname_pages %} site in a new or existing repository.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/creating-a-github-pages-site-with-jekyll
  - /github/working-with-github-pages/creating-a-github-pages-site-with-jekyll
permissions: 'People with admin permissions for a repository can create a {% data variables.product.prodname_pages %} site with Jekyll.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pages
shortTitle: Create site with Jekyll
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Prerequisites

Before you can use Jekyll to create a {% data variables.product.prodname_pages %} site, you must install Jekyll and Git. For more information, see [Installation](https://jekyllrb.com/docs/installation/) in the Jekyll documentation and "[Set up Git](/articles/set-up-git)."

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Creating a repository for your site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}

## Creating your site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. If you don't already have a local copy of your repository, navigate to the location where you want to store your site's source files, replacing _PARENT-FOLDER_ with the folder you want to contain the folder for your repository.
  ```shell
  $ cd <em>PARENT-FOLDER</em>
  ```
3. If you haven't already, initialize a local Git repository, replacing _REPOSITORY-NAME_ with the name of your repository.
  ```shell
  $ git init <em>REPOSITORY-NAME</em>
  > Initialized empty Git repository in /Users/octocat/my-site/.git/
  # Creates a new folder on your computer, initialized as a Git repository
  ```
  4. Change directories to the repository.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  # Changes the working directory
  ```
{% data reusables.pages.decide-publishing-source %}
{% data reusables.pages.navigate-publishing-source %}
  For example, if you chose to publish your site from the `docs` folder on the default branch, create and change directories to the `docs` folder.
 ```shell
 $ mkdir docs
 # Creates a new folder called docs
 $ cd docs
 ```
 If you chose to publish your site from the `gh-pages` branch, create and checkout the `gh-pages` branch.
 ```shell
 $ git checkout --orphan gh-pages
 # Creates a new branch, with no history or contents, called gh-pages and switches to the gh-pages branch
 ```
7. To create a new Jekyll site, use the `jekyll new` command:
   ```shell
   $ jekyll new .
   # Creates a Jekyll site in the current directory
   ```
8. Open the Gemfile that Jekyll created.
1. Add "#" to the beginning of the line that starts with `gem "jekyll"` to comment out this line.
1. Add the `github-pages` gem by editing the line starting with `# gem "github-pages"`. Change this line to:

   ```shell
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Replace _GITHUB-PAGES-VERSION_ with the latest supported version of the `github-pages` gem. You can find this version here: "[Dependency versions](https://pages.github.com/versions/)."

   The correct version Jekyll will be installed as a dependency of the `github-pages` gem.
1. Save and close the Gemfile.
11. From the command line, run `bundle update`.
11. Optionally, make any necessary edits to the `_config.yml` file. This is required for relative paths when the repository is hosted in a subdirectory.  For more information, see "[Splitting a subfolder out into a new repository](/github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository)."
   ```yml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder   
  ```
11. Optionally, test your site locally. For more information, see "[Testing your {% data variables.product.prodname_pages %} site locally with Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)."
12. Add and commit your work.
```shell
git add .
git commit -m 'Initial GitHub pages site with Jekyll'
```
14. Add your {% data variables.product.product_name %} repository as a remote, replacing {% ifversion ghes or ghae %}_HOSTNAME_ with your enterprise's hostname,{% endif %} _USER_ with the account that owns the repository{% ifversion ghes or ghae %},{% endif %} and _REPOSITORY_ with the name of the repository.
```shell
{% ifversion fpt %}
$ git remote add origin https://github.com/<em>USER</em>/<em>REPOSITORY</em>.git
{% else %}
$ git remote add origin https://<em>HOSTNAME</em>/<em>USER</em>/<em>REPOSITORY</em>.git
{% endif %}
```
13. Push the repository to {% data variables.product.product_name %}, replacing _BRANCH_ with the name of the branch you're working on.
   ```shell
   $ git push -u origin <em>BRANCH</em>
   ```
{% data reusables.pages.configure-publishing-source %}
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% ifversion fpt %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

## Next steps

To add a new page or post to your site, see "[Adding content to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-content-to-your-github-pages-site-using-jekyll)."

{% data reusables.pages.add-jekyll-theme %} For more information, see "[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)."
