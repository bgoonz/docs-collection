---
title: About commit signature verification
intro: 'Using GPG or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on {% data variables.product.product_name %} so other people can be confident that the changes come from a trusted source.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
---
## About commit signature verification

You can sign commits and tags locally, to give other people confidence about the origin of a change you have made. If a commit or tag has a GPG or S/MIME signature that is cryptographically verifiable, GitHub marks the commit or tag {% ifversion fpt %}"Verified" or "Partially verified."{% else %}"Verified."{% endif %}

![Verified commit](/assets/images/help/commits/verified-commit.png)

{% ifversion fpt %}
Commits and tags have the following verification statuses, depending on whether you have enabled vigilant mode. By default vigilant mode is not enabled. For information on how to enable vigilant mode, see "[Displaying verification statuses for all of your commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)."

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

### Default statuses

| Status         | Description |
| -------------- | ----------- |
| **Verified**   | The commit is signed and the signature was successfully verified.
| **Unverified** | The commit is signed but the signature could not be verified.
| No verification status | The commit is not signed.

### Statuses with vigilant mode enabled

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %}
If a commit or tag has a signature that can't be verified, {% data variables.product.product_name %} marks the commit or tag "Unverified."
{% endif %}

Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-signed-commits)."

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt %}
{% data variables.product.product_name %} will automatically use GPG to sign commits you make using the {% data variables.product.product_name %} web interface, except for when you squash and merge a pull request that you are not the author of. Commits signed by {% data variables.product.product_name %} will have a verified status on {% data variables.product.product_name %}. You can verify the signature locally using the public key available at https://github.com/web-flow.gpg. The full fingerprint of the key is `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`. You can optionally choose to have {% data variables.product.product_name %} sign commits you make in {% data variables.product.prodname_codespaces %}. For more information about enabling GPG verification for your codespaces, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
{% endif %}

## GPG commit signature verification

You can use GPG to sign commits with a GPG key that you generate yourself.

{% data variables.product.product_name %} uses OpenPGP libraries to confirm that your locally signed commits and tags are cryptographically verifiable against a public key you have added to your {% data variables.product.product_name %} account.

To sign commits using GPG and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Check for existing GPG keys](/articles/checking-for-existing-gpg-keys)
2. [Generate a new GPG key](/articles/generating-a-new-gpg-key)
3. [Add a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
5. [Sign commits](/articles/signing-commits)
6. [Sign tags](/articles/signing-tags)

## S/MIME commit signature verification

You can use S/MIME to sign commits with an X.509 key issued by your organization.

{% data variables.product.product_name %} uses [the Debian ca-certificates package](https://packages.debian.org/hu/jessie/ca-certificates), the same trust store used by Mozilla browsers, to confirm that your locally signed commits and tags are cryptographically verifiable against a public key in a trusted root certificate.

{% data reusables.gpg.smime-git-version %}

To sign commits using S/MIME and have those commits verified on {% data variables.product.product_name %}, follow these steps:

1. [Tell Git about your signing key](/articles/telling-git-about-your-signing-key)
2. [Sign commits](/articles/signing-commits)
3. [Sign tags](/articles/signing-tags)

You don't need to upload your public key to {% data variables.product.product_name %}.

{% ifversion fpt %}
## Signature verification for bots

Organizations and {% data variables.product.prodname_github_apps %} that require commit signing can use bots to sign commits. If a commit or tag has a bot signature that is cryptographically verifiable, {% data variables.product.product_name %} marks the commit or tag as verified.

Signature verification for bots will only work if the request is verified and authenticated as the {% data variables.product.prodname_github_app %} or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.
{% endif %}

## Further reading

- "[Signing commits](/articles/signing-commits)"
- "[Signing tags](/articles/signing-tags)"
- "[Troubleshooting commit signature verification](/articles/troubleshooting-commit-signature-verification)"
