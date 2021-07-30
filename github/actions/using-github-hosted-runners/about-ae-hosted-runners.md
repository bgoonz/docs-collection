---
title: About AE hosted runners
intro: "{% data variables.product.prodname_ghe_managed %} offers customizable and security hardened hosted virtual machines to run {% data variables.product.prodname_actions %} workflows. You can select the hardware, bring your own machine image, and enable an IP address for networking with your {% data variables.actions.hosted_runner %}."
product: "{% data reusables.gated-features.actions %}"
versions:
  ghae: "*"
---

{% data reusables.actions.ae-beta %}

## About {% data variables.actions.hosted_runner %}s

An {% data variables.actions.hosted_runner %} is a virtual machine hosted by {% data variables.product.prodname_dotcom %} with the {% data variables.product.prodname_actions %} runner service installed.

{% data variables.product.prodname_ghe_managed %} lets you create and customize {% data variables.actions.hosted_runner %}s using Ubuntu or Windows images; you can select the size of machine you want and configure security hardened networking for them. {% data variables.actions.hosted_runner %}s are fully managed and auto-scaled by {% data variables.product.prodname_dotcom %}.

Each workflow job is executed in a fresh instance of the {% data variables.actions.hosted_runner %}, and you can run workflows directly on the virtual machine or in a Docker container. All steps in the job execute in the same instance, allowing the actions in that job to share information using the {% data variables.actions.hosted_runner %}'s filesystem.

{% note %}
{% data variables.actions.hosted_runner %}s are the only runners available for {% data variables.product.prodname_ghe_managed %}, and self-hosted runners are not available.
{% endnote %}

To add {% data variables.actions.hosted_runner %}s to your organization or enterprise, see ["Adding {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/adding-ae-hosted-runners)."

## Pool assignments for {% data variables.actions.hosted_runner %}s

Your {% data variables.actions.hosted_runner %}s are allocated to the same pool as your {% data variables.product.prodname_ghe_managed %} instance. No other customers have access to this pool, and as a result, {% data variables.actions.hosted_runner %}s are not shared with any other customers.

## Managing your {% data variables.actions.hosted_runner %}s

During the {% data variables.actions.hosted_runner %} beta, you can manage your {% data variables.actions.hosted_runner %}s by contacting {% data variables.product.prodname_dotcom %} support. For example, {% data variables.product.prodname_dotcom %} support can assist you with adding a new {% data variables.actions.hosted_runner %}, assigning labels, or moving a {% data variables.actions.hosted_runner %} to a different group.

## Billing

{% data variables.product.prodname_actions %} is currently in beta for {% data variables.product.prodname_ghe_managed %}. During this beta period, {% data variables.actions.hosted_runner %}s are not billed, and can be used for free.

Once the beta ends, billed usage will include the full uptime of active instances in your AE hosted runner sets. This includes:

- Job time - minutes spent running Actions job.
- Management - minutes spent re-imaging machines and any idle time created as a result of desired auto-scale behavior.

Pricing will scale linearly with cores. For example, 4 cores will be twice the price of 2 cores. Windows VMs will be priced higher than Linux VMs.

## Hardware specifications

{% data variables.actions.hosted_runner %}s are available on a range of virtual machines hosted in Microsoft Azure. Depending on regional availability, you can choose from `Standard_Das_v4`, `Standard_DS_v2`, `Standard_Fs_v2 series`. Certain regions also include GPU runners based on `Standard_NCs_v3`.

For more information about these Azure machine resources, see "[Sizes for virtual machines in Azure](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes)" in the Microsoft Azure documentation.

To determine which runner executed a job, you can review the workflow logs. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."

## Software specifications

You can use {% data variables.actions.hosted_runner %}s with standard operating system images, or you can add images that you've created.

### Default operating system images

These images only include the standard operating system tools:

- Ubuntu 18.04 LTS (Canonical)
- Ubuntu 16.04 LTS (Canonical)
- Windows Server 2019 (Microsoft)
- Windows Server 2016 (Microsoft)

### Custom operating system images

You can create your own OS images in Azure and have them added to {% data variables.product.prodname_ghe_managed %} as {% data variables.actions.hosted_runner %}s. For more information, see "[Adding an {% data variables.actions.hosted_runner %} with a custom image"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).

## Network specifications

You can optionally enable a fixed static public IP address for your {% data variables.actions.hosted_runner %}s. If enabled, all {% data variables.actions.hosted_runner %}s in your instance will share a range of 2 to 4 IP addresses, and will communicate using ports on those addresses.

If you don't enable static public IP addresses, then your {% data variables.actions.hosted_runner %}s will subsequently have the same IP address ranges as the Azure datacenters. Inbound ICMP packets are blocked, so `ping` or `traceroute` commands are not expected to work.

To get a list of IP address ranges that {% data variables.product.prodname_actions %} uses for {% data variables.actions.hosted_runner %}s, you can use the {% data variables.product.prodname_dotcom %} REST API . For more information, see the `actions` key in the response of the "[Get GitHub meta information](/rest/reference/meta#get-github-meta-information)" endpoint. You can use this list of IP addresses if you require an allow-list to prevent unauthorized access to your internal resources.

The list of {% data variables.product.prodname_actions %} IP addresses returned by the API is updated once a week.

## Administrative privileges for {% data variables.actions.hosted_runner %}s

The Linux virtual machines run using passwordless `sudo`. When you need to execute commands or install tools that require more privileges than the current user, you can use `sudo` without needing to provide a password. For more information, see the "[Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html)."

Windows virtual machines are configured to run as administrators with User Account Control (UAC) disabled. For more information, see "[How User Account Control works](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" in the Windows documentation.

## File systems

{% data variables.product.prodname_dotcom %} executes actions and shell commands in specific directories on the virtual machine. The file paths on virtual machines are not static. Use the environment variables {% data variables.product.prodname_dotcom %} provides to construct file paths for the `home`, `workspace`, and `workflow` directories.

| Directory             | Environment variable | Description                                                                                                                                                                                           |
| --------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`               | Contains user-related data. For example, this directory could contain credentials from a login attempt.                                                                                               |
| `workspace`           | `GITHUB_WORKSPACE`   | Actions and shell commands execute in this directory. An action can modify the contents of this directory, which subsequent actions can access.                                                       |
| `workflow/event.json` | `GITHUB_EVENT_PATH`  | The `POST` payload of the webhook event that triggered the workflow. {% data variables.product.prodname_dotcom %} rewrites this each time an action executes to isolate file content between actions. |

For a list of the environment variables {% data variables.product.prodname_dotcom %} creates for each workflow, see "[Using environment variables](/github/automating-your-workflow-with-github-actions/using-environment-variables)."

### Docker container filesystem

Actions that run in Docker containers have static directories under the `/github` path. However, we strongly recommend using the default environment variables to construct file paths in Docker containers.

{% data variables.product.prodname_dotcom %} reserves the `/github` path prefix and creates three directories for actions.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`
