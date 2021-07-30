---
title: Increasing storage capacity
intro: "You can increase or change the amount of storage available for Git repositories, databases, search indexes, and other persistent application data."
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: "*"
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

As more users join {% data variables.product.product_location %}, you may need to resize your storage volume. Refer to the documentation for your virtualization platform for information on resizing storage.

## Requirements and recommendations

{% note %}

**Note:** Before resizing any storage volume, put your instance in maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endnote %}

### Minimum requirements

{% data reusables.enterprise_installation.hardware-rec-table %}

## Increasing the data partition size

1. Resize the existing user volume disk using your virtualization platform's tools.
   {% data reusables.enterprise_installation.ssh-into-instance %}
2. Put the appliance in maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."
3. Reboot the appliance to detect the new storage allocation:

```shell
$ sudo reboot
```

5. Run the `ghe-storage-extend` command to expand the `/data/user` filesystem:

```shell
$ ghe-storage-extend
```

## Increasing the root partition size using a new appliance

1. Set up a new {% data variables.product.prodname_ghe_server %} instance with a larger root disk using the same version as your current appliance. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)."
2. Shut down the current appliance:

```shell
$ sudo poweroff
```

3. Detach the data disk from the current appliance using your virtualization platform's tools.
4. Attach the data disk to the new appliance with the larger root disk.

## Increasing the root partition size using an existing appliance

{% warning %}

**Warning:** Before increasing the root partition size, you must put your instance in maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endwarning %}

1. Attach a new disk to your {% data variables.product.prodname_ghe_server %} appliance.
2. Run the `parted` command to format the disk:

```shell
$ sudo parted /dev/xvdg mklabel msdos
$ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
$ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
```

3. Run the `ghe-upgrade` command to install a full, platform specific package to the newly partitioned disk. A universal hotpatch upgrade package, such as `github-enterprise-2.11.9.hpkg`, will not work as expected. After the `ghe-upgrade` command completes, application services will automatically terminate.

```shell
$ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
```

4. Shut down the appliance:

```shell
$ sudo poweroff
```

5. In the hypervisor, remove the old root disk and attach the new root disk at the same location as the old root disk.
6. Start the appliance.
7. Ensure system services are functioning correctly, then release maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."
