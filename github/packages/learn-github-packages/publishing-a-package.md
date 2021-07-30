---
title: Publishing a package
intro: 'You can publish a package to {% data variables.product.prodname_registry %} to make the package available for others to download and re-use.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## About published packages

You can help people understand and use your package by providing a description and other details like installation and usage instructions on the package page. {% data variables.product.product_name %} provides metadata for each version, such as the publication date, download activity, and recent versions. For an example package page, see [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} A repository can be connected to more than one package. To prevent confusion, make sure the README and description clearly provide information about each package.

{% ifversion fpt %}
If a new version of a package fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
{% endif %}

## Publishing a package

You can publish a package to {% data variables.product.prodname_registry %} using any {% ifversion fpt or ghae %}supported package client{% else %}package type enabled for your instance{% endif %} by following the same general guidelines.

1. Create or use an existing access token with the appropriate scopes for the task you want to accomplish. For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)."
2. Authenticate to {% data variables.product.prodname_registry %} using your access token and the instructions for your package client.
3. Publish the package using the instructions for your package client.

For instructions specific to your package client, see "[Working with a GitHub Packages registry](/packages/working-with-a-github-packages-registry)."

After you publish a package, you can view the package on {% data variables.product.prodname_dotcom %}. For more information, see "[Viewing packages](/packages/learn-github-packages/viewing-packages)."
