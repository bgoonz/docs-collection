---
title: Adding a new SSH key to your GitHub account
intro: 'To configure your {% data variables.product.product_name %} account to use your new (or existing) SSH key, you''ll also need to add it to your {% data variables.product.product_name %} account.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
---
Before adding a new SSH key to your {% data variables.product.product_name %} account, you should have:
* [Checked for existing SSH keys](/articles/checking-for-existing-ssh-keys)
* [Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

After adding a new SSH key to your {% data variables.product.product_name %} account, you can reconfigure any local repositories to use SSH. For more information, see "[Switching remote URLs from HTTPS to SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)."

{% data reusables.ssh.dsa-support %}

{% mac %}

{% include tool-switcher %}
{% webui %}

1. Copy the SSH public key to your clipboard.

  If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```

  {% tip %}

  **Tip:** If `pbcopy` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Click **New SSH key** or **Add SSH key**.
  ![SSH Key button](/assets/images/help/settings/ssh-add-ssh-key.png)
5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
6. Paste your key into the "Key" field.
  ![The key field](/assets/images/help/settings/ssh-key-paste.png)
7. Click **Add SSH key**.
  ![The Add key button](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user_settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% include tool-switcher %}

{% webui %}

1. Copy the SSH public key to your clipboard.

  If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.

  ```shell
  $ clip &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```

  {% tip %}

  **Tip:** If `clip` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Click **New SSH key** or **Add SSH key**.
  ![SSH Key button](/assets/images/help/settings/ssh-add-ssh-key.png)
5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
6. Paste your key into the "Key" field.
  ![The key field](/assets/images/help/settings/ssh-key-paste.png)
7. Click **Add SSH key**.
  ![The Add key button](/assets/images/help/settings/ssh-add-key.png)
8. If prompted, confirm your {% data variables.product.product_name %} password.
  ![Sudo mode dialog](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endwindows %}

{% linux %}

{% include tool-switcher %}
{% webui %}

1. Copy the SSH public key to your clipboard.

  If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.

  ```shell
  $ sudo apt-get update
  $ sudo apt-get install xclip
  # Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

  $ xclip -selection clipboard &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```
  {% tip %}

  **Tip:** If `xclip` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Click **New SSH key** or **Add SSH key**.
  ![SSH Key button](/assets/images/help/settings/ssh-add-ssh-key.png)
5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
6. Paste your key into the "Key" field.
  ![The key field](/assets/images/help/settings/ssh-key-paste.png)
7. Click **Add SSH key**.
  ![The Add key button](/assets/images/help/settings/ssh-add-key.png)
8. If prompted, confirm your {% data variables.product.product_name %} password.
  ![Sudo mode dialog](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.download-cli %}

To add an SSH key to your GitHub account, use the `ssh-key add` subcommand.

```shell
gh ssh-key add <em>key-file</em>
```

To include a title for the new key, use the `-t` or `--title` flag.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

{% endcli %}

{% ifversion fpt %}
## Further reading

- "[Authorizing an SSH key for use with SAML single sign-on](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
