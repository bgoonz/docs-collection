Remote Development with Linux
=============================

Linux is a highly variable environment and the large number of server, container, and desktop distributions can make it difficult to know what is supported. Visual Studio Code Remote Development has prerequisites for the specific host / container / WSL distribution you will be connecting to.

The extensions are known to work when connecting to recent stable/LTS version of:

-   **Ubuntu 64-bit x86, ARMv8l (AArch64)** (16.04+, IoT 18.04+)
-   **Debian 64-bit x86, ARMv8l (AArch64)** (Stretch/9+)
-   **Raspbian ARMv7l (AArch32) 32-bit** (Stretch/9+)
-   **CentOS / RHEL 64-bit x86** (7+)
-   **Alpine Linux 64-bit x86 containers or WSL hosts** (3.9+) in Remote - Containers, Remote - WSL

The following non-Linux SSH hosts are also supported:

-   **Windows 10 / Server 2016/2019 SSH hosts** (1803+) using the [official OpenSSH Server](https://docs.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse) and enabling `remote.SSH.useLocalServer` [in VS Code settings](/docs/getstarted/settings.md).
-   **macOS** 10.14+ (Mojave) SSH hosts with [Remote Login enabled](https://support.apple.com/guide/mac-help/allow-a-remote-computer-to-access-your-mac-mchlp1066/mac).

However, if you are using a non-standard configuration or downstream distribution of Linux, you may run into issues. This document provides information on requirements as well as tips to help you get up and running even if your configuration is only community-supported.

Note that **other extensions may have dependencies** beyond those listed here. Some extensions also contain compiled native code that **may not work on Alpine Linux, or ARMv7 (AArch32), or ARMv8 (AArch64)**. These platforms are considered in “preview” for this reason. If you encounter an issue that only occurs with a particular extension, **contact the extension authors** for information on their native dependencies.

Local Linux prerequisites
-------------------------

If you are running Linux locally, the [VS Code prerequisites](/docs/supporting/requirements.md) drive most of the requirements.

In addition, specific Remote Development extensions have further requirements:

-   **Remote - SSH:** `ssh` needs to be in the path. The shell binary is typically in the `openssh-client` package.
-   **Remote - Containers**: Docker CE/EE 18.06+ and Docker Compose 1.21+. Follow the [official install instructions for Docker CE/EE for your distribution](https://docs.docker.com/install/#supported-platforms). If you are using Docker Compose, follow the [Install Docker Compose directions](https://docs.docker.com/compose/install/) as well. (Note that the Ubuntu Snap package is not supported and packages in distributions may be out of date.) `docker` and `docker-compose` must also be in the path. However, Docker does not need to be running if you are [using a remote host](https://aka.ms/vscode-remote/containers/remote-host).

Remote host / container / WSL Linux prerequisites
-------------------------------------------------

Platform prerequisites are primarily driven by the version of the [Node.js](https://nodejs.org/en/docs/meta/topics/dependencies/) runtime (and by extension the [V8 JavaScript engine](https://v8docs.nodesource.com)) shipped in the server component automatically installed on each remote endpoint. This server also has a set of related native node modules that need to be compiled and tested for each target. **64-bit x86 glibc-based** Linux distributions currently provide the best support given these requirements.

You may encounter issues with certain extensions with native dependencies with **ARMv7l (AArch32) / ARMv8l (AArch64) glibc-based** hosts, containers, or WSL and **64-bit x86 musl-based Alpine Linux**. For ARMv7l/ARMv8l, extensions may only include x86\_64 versions of native modules or runtimes in the extension. For Alpine Linux, included native code or runtimes may not work due to [fundamental differences](https://wiki.musl-libc.org/functional-differences-from-glibc.html) between how `libc` is implemented in Alpine Linux (`musl`) and other distributions (`glibc`). In both these cases, extensions will need to opt-in to supporting these platforms by compiling / including binaries for these additional targets. Please raise an issue with the appropriate extension author requesting support if you encounter an extension that does not work as expected.

<table style="width:99%;"><colgroup><col style="width: 24%" /><col style="width: 32%" /><col style="width: 31%" /><col style="width: 12%" /></colgroup><thead><tr class="header"><th>Distribution</th><th>Base Requirements</th><th>Remote - SSH Requirements</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>General</td><td>kernel &gt;= 3.10, glibc &gt;=2.17, libstdc++ &gt;= 3.4.18, Python 2.6 or 2.7, tar</td><td>OpenSSH server, <code>bash</code>, and <code>curl</code> or <code>wget</code></td><td>Run <code>ldd --version</code> to check the glibc version. Run <code>strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX</code> to see if libstdc++ 3.4.18 is available.</td></tr><tr class="even"><td>Ubuntu 16.04+, Debian 8+, Raspbian Stretch/9+ and downstream distributions</td><td><code>libc6 libstdc++6 python-minimal ca-certificates tar</code></td><td><code>openssh-server bash</code> and <code>curl</code> or <code>wget</code></td><td>Requires kernel &gt;= 3.10, glibc &gt;= 2.17, libstdc++ &gt;= 3.4.18. Debian &lt; 8 (Jessie) and Ubuntu &lt; 14.04 do not meet this requirement.</td></tr><tr class="odd"><td>RHEL / CentOS 7+</td><td><code>glibc libgcc libstdc++ python ca-certificates tar</code></td><td><code>openssh-server bash</code> and <code>curl</code> or <code>wget</code></td><td>Requires kernel &gt;= 3.10, glibc &gt;= 2.17, libstdc++ &gt;= 3.4.18. RHEL / CentOS &lt; 7 does not meet this requirement without using a <a href="#updating-glibc-and-libstdc-on-rhel-centos-6">workaround to upgrade</a>.</td></tr><tr class="even"><td>Alpine Linux 3.9+</td><td><code>musl libgcc libstdc++</code>. musl &gt;= 1.1.18, glibc not required.</td><td>Not yet supported.</td><td>Supported in Remote - Containers and Remote - WSL. Extensions installed in the container may not work due to <code>glibc</code> dependencies in extension native code.</td></tr><tr class="odd"><td>openSUSE Leap / SUSE Linux Enterprise 15+</td><td><code>glibc libgcc_s1 libstdc++6 python ca-certificates gzip tar</code></td><td><code>curl</code> or <code>wget</code></td><td>Requires kernel &gt;= 3.10, glibc, libstdc++6</td></tr></tbody></table>

Tips by Linux distribution
--------------------------

The following is a list of distributions and any base requirements that may be missing. End-of-life versions of distributions are not included.

-   ✅ = Working
-   ⚠️ = Working, but see note for limitations
-   🔬 = Experimental
-   🛑 = Unsupported, but has workaround
-   ❌ = Unsupported

<table style="width:99%;"><colgroup><col style="width: 28%" /><col style="width: 19%" /><col style="width: 26%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Server Distribution</th><th>Docker Image</th><th>Missing libraries</th><th>Notes / additional steps</th></tr></thead><tbody><tr class="odd"><td>⚠️ Alpine Linux 3.10 (64-bit)</td><td><code>alpine:3.10</code></td><td><code>libgcc libstdc++</code></td><td>Supported in Remote - Containers and Remote - WSL only. Some extensions installed in the container may not work due to <code>glibc</code> dependencies in extension native code.</td></tr><tr class="even"><td>✅ CentOS 7 Server (64-bit)</td><td><code>centos:7</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>🛑 CentOS 6 Server (64-bit)</td><td><code>centos:6</code></td><td><code>glibc</code> &gt;= 2.17, <code>libstdc++</code> &gt;= 3.4.18</td><td><a href="#updating-glibc-and-libstdc-on-rhel-centos-6">Requires a workaround</a>.</td></tr><tr class="even"><td>✅ Debian 10 Server (64-bit)</td><td><code>debian:10</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>✅ Debian 9 Server (64-bit)</td><td><code>debian:9</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="even"><td>✅ openSUSE Leap Server 15 (64-bit)</td><td><code>opensuse/leap:15</code></td><td>Docker image is missing <code>tar</code> and <code>gzip</code>.</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>✅ openSUSE Leap Server 42.3 (64-bit)</td><td><code>opensuse/leap:42.3</code></td><td>Docker image is missing <code>tar</code> and <code>gzip</code>.</td><td>&lt;none&gt;</td></tr><tr class="even"><td>✅ Oracle Linux 7 (64-bit)</td><td><code>oraclelinux:7</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>🛑️ Oracle Linux 6 (64-bit)</td><td><code>oraclelinux:6</code></td><td><code>glibc</code> &gt;= 2.17, <code>libstdc++</code> &gt;= 3.4.18. Docker image is missing <code>tar</code>.</td><td><a href="#updating-glibc-and-libstdc-on-rhel-centos-6">Requires a workaround</a>.</td></tr><tr class="even"><td>⚠️ Raspbian Stretch/9 (ARMv7l 32-bit)</td><td>&lt;n/a&gt;</td><td>&lt;none&gt;</td><td>Some extensions may not work when installed on an ARMv7l host due to extension x86 native code. Remote - Containers <strong>does</strong> support connecting to containers on an ARM host.</td></tr><tr class="odd"><td>✅ RedHat Enterprise Linux 7 (64-bit)</td><td></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="even"><td>🛑 RedHat Enterprise Linux 6 (64-bit)</td><td></td><td><code>glibc</code> &gt;= 2.17, <code>libstdc++</code> &gt;= 3.4.18</td><td><a href="#updating-glibc-and-libstdc-on-rhel-centos-6">Requires a workaround</a>.</td></tr><tr class="odd"><td>✅ SUSE Linux Enterprise Server 15 (64-bit)</td><td></td><td>Docker image is missing <code>tar</code> and <code>gzip</code>.</td><td>&lt;none&gt;</td></tr><tr class="even"><td>✅ SUSE Linux Enterprise Server 12 (64-bit)</td><td></td><td>Docker image is missing <code>tar</code> and <code>gzip</code>.</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>❌ SUSE Linux Enterprise Server 11 (64-bit)</td><td></td><td><code>glibc</code> &gt;= 2.17, <code>libstdc++</code> &gt;= 3.4.18</td><td>Might work compiling glibc from source, but untested.</td></tr><tr class="even"><td>⚠️ Ubuntu 18.04 IoT (ARMv8l 64-bit)</td><td></td><td>&lt;n/a&gt;</td><td>Some extensions may not work when installed on an ARMv8l host due to extension x86 native code. Remote - Containers <strong>does</strong> support connecting to containers on an ARM host.</td></tr><tr class="odd"><td>✅ Ubuntu Server 20.04 (64-bit)</td><td><code>ubuntu:20.04</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="even"><td>✅ Ubuntu Server 19.04 (64-bit)</td><td><code>ubuntu:19.04</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>✅ Ubuntu Server 18.04 (64-bit)</td><td><code>ubuntu:18.04</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="even"><td>✅ Ubuntu Server 16.04 (64-bit)</td><td><code>ubuntu:16.04</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr><tr class="odd"><td>✅ Ubuntu Server 14.04 (64-bit)</td><td><code>ubuntu:14.04</code></td><td>&lt;none&gt;</td><td>&lt;none&gt;</td></tr></tbody></table>

Updating glibc and libstdc++ on RHEL / CentOS 6
-----------------------------------------------

RHEL / CentOS 6 ships with glibc 2.12 and libstdc++ 3.4.13. Unfortunately, this does not meet the requirements for Remote Development. RHEL / CentOS 6 goes out of support [in 2020](https://endoflife.software/operating-systems/linux/centos), so we strongly recommend **upgrading to RHEL / CentOS 7** or higher.

However, as a workaround, you can either build glibc manually or use the following script to install updated binaries. The bash script below will upgrade these libraries without having to build them. It is adapted from information in this [article](https://serverkurma.com/linux/how-to-update-glibc-newer-version-on-centos-6-x/), this [gist](https://gist.github.com/harv/f86690fcad94f655906ee9e37c85b174), and this [Fedora copr project](https://copr.fedorainfracloud.org/coprs/mosquito/myrepo-el6/). The article also includes instructions for manually building glibc if you would prefer not to use the binaries from the article.

Do not run this script on anything mission critical **without a rollback strategy** since it does update libraries that other applications depend on.

For servers, run the following script and restart the server so the updates take effect.

    # Update glibc and static libs
    wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm
    wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm
    wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm
    wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm
    wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-utils-2.17-55.el6.x86_64.rpm
    wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-static-2.17-55.el6.x86_64.rpm
    sudo rpm -Uh --force --nodeps \
        glibc-2.17-55.el6.x86_64.rpm \
        glibc-common-2.17-55.el6.x86_64.rpm \
        glibc-devel-2.17-55.el6.x86_64.rpm \
        glibc-headers-2.17-55.el6.x86_64.rpm \
        glibc-static-2.17-55.el6.x86_64.rpm \
        glibc-utils-2.17-55.el6.x86_64.rpm

    # Update libstdc++
    wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-4.8.2-16.3.el6.x86_64.rpm
    wget  https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm
    wget https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-static-4.8.2-16.3.el6.x86_64.rpm
    sudo rpm -Uh \
        libstdc++-4.8.2-16.3.el6.x86_64.rpm \
        libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm \
        libstdc++-static-4.8.2-16.3.el6.x86_64.rpm

In a container environment, you can add similar contents to a Dockerfile:

    FROM centos:6

    RUN yum -y install wget tar

    # Update glibc
    RUN wget -q http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm \
        && wget -q http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm \
        && wget -q http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm \
        && wget -q http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm \
        && wget -q https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-utils-2.17-55.el6.x86_64.rpm \
        && wget -q https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-static-2.17-55.el6.x86_64.rpm \
        && rpm -Uh --force --nodeps \
            glibc-2.17-55.el6.x86_64.rpm \
            glibc-common-2.17-55.el6.x86_64.rpm \
            glibc-devel-2.17-55.el6.x86_64.rpm \
            glibc-headers-2.17-55.el6.x86_64.rpm \
            glibc-static-2.17-55.el6.x86_64.rpm \
            glibc-utils-2.17-55.el6.x86_64.rpm \
        && rm *.rpm

    # Update libstdc++
    RUN  wget -q https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-4.8.2-16.3.el6.x86_64.rpm \
        && wget -q https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm \
        && wget -q https://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/gcc-4.8.2-16.3.fc20/libstdc++-static-4.8.2-16.3.el6.x86_64.rpm \
        && rpm -Uh \
            libstdc++-4.8.2-16.3.el6.x86_64.rpm \
            libstdc++-devel-4.8.2-16.3.el6.x86_64.rpm \
            libstdc++-static-4.8.2-16.3.el6.x86_64.rpm \
        && rm *.rpm

Questions or feedback
---------------------

-   See [Tips and Tricks](/docs/remote/troubleshooting.md#containers-tips) or the [FAQ](/docs/remote/faq.md).
-   Search on [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-remote).
-   Add a [feature request](https://aka.ms/vscode-remote/feature-requests) or [report a problem](https://aka.ms/vscode-remote/issues/new).
-   Create a [development container definition](https://aka.ms/vscode-dev-containers) for others to use.
-   Contribute to [our documentation](https://github.com/microsoft/vscode-docs) or [VS Code itself](https://github.com/microsoft/vscode).
-   See our [CONTRIBUTING](https://aka.ms/vscode-remote/contributing) guide for details.
