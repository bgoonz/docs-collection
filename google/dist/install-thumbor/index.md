<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format" alt="A pile of photos." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/prjXX7rGf0hOFVZVoxUe.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-to-install-the-thumbor-image-cdn" class="w-toc__header--link">How to install the Thumbor image CDN</a>

- [Intro](#intro)
- [Prerequisites](#prerequisites)
- [Install Thumbor Dependencies](#install-thumbor-dependencies)
- [Install Thumbor](#install-thumbor)
- [Run Thumbor](#run-thumbor)
- [Open Firewall Port](#open-firewall-port)
- [Try It Out](#try-it-out)
- [Appendix: Configuring Systemd](#appendix:-configuring-systemd)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How to install the Thumbor image CDN

Thumbor can be used for free to resize, compress, and transform images on-demand.

Aug 14, 2019

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

Image CDNs make it easy to dynamically optimize the aesthetics and performance of your images. Unlike most image CDNs, [Thumbor](http://thumbor.org/) is open-source and can be used for free to resize, compress, and transform images. It's suitable for production use; [Wikipedia](https://wikitech.wikimedia.org/wiki/Thumbor) and [Square](https://medium.com/square-corner-blog/dynamic-images-with-thumbor-a430a1cfcd87) both use Thumbor.

This guide explains how to install Thumbor on your own server. Once installed, you'll be able to use Thumbor as an API for transforming your images.

## Intro <a href="#intro" class="w-headline-link">#</a>

You'll be installing Thumbor on a VM running Ubuntu 16.04. Ubuntu 16.04 is a very common image and these instructions are intended to work on any cloud provider. Creating a VM might sound like more work than installing Thumbor on your local machine, but the minutes that you take to create a VM will probably save you hours or days of frustration trying to get Thumbor to properly install on your local machine. Although easy to use, Thumbor is notoriously difficult to install but these instructions simplify the process. If dependencies download quickly, the installation can be completed in 5 to 10 minutes.

## Prerequisites <a href="#prerequisites" class="w-headline-link">#</a>

This post assumes that you know how to create a Ubuntu 16.04 LTS VM on a cloud platform like [Google Cloud](https://cloud.google.com/compute/docs/instances/create-start-instance), [AWS,](https://aws.amazon.com/getting-started/tutorials/launch-a-virtual-machine/) or [Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal?toc=%2Fazure%2Fvirtual-machines%2Flinux%2Ftoc.json) and how to use command line tools to set up the VM.

## Install Thumbor Dependencies <a href="#install-thumbor-dependencies" class="w-headline-link">#</a>

Update and upgrade Ubuntu's already-installed packages:

    sudo apt-get update -y && sudo apt-get upgrade -y

Install `pip`, the package manager for Python. Later you'll install Thumbor with `pip`.

    sudo apt-get install -y python-pip

Install Thumbor's dependencies. Thumbor's documentation does not explicitly mention these dependencies, but Thumbor will not install successfully without them.

    # ssl packages
    sudo apt-get install -y libcurl4-openssl-dev libssl-dev

    # computer vision packages
    sudo apt-get install -y python-opencv libopencv-dev

    # image format packages
    sudo apt-get install -y libjpeg-dev libpng-dev libwebp-dev webp

## Install Thumbor <a href="#install-thumbor" class="w-headline-link">#</a>

Install Thumbor using pip.

    sudo pip install thumbor

Note: Many Python developers use [virtualenv](https://pypi.org/project/virtualenv/) to manage their packages. For the sake of simplicity, these instructions do not use `virtualenv`. If you are installing Thumbor in a standalone environment, `virtualenv` is not necessary. If you choose to use `virtualenv`, note that Thumbor requires Python 2.7 and will not work with newer versions of `pip` (e.g., these instructions use `pip` 8.1.1).

If you've successfully installed Thumbor, this should work:

    thumbor --help

## Run Thumbor <a href="#run-thumbor" class="w-headline-link">#</a>

Run Thumbor. Debug logging is optional but can be helpful when you're getting started.

    thumbor --log-level debug

Thumbor is now running.

## Open Firewall Port <a href="#open-firewall-port" class="w-headline-link">#</a>

By default, Thumbor runs on port 8888. If your VM's IP address is `12.123.12.122`, then you would access Thumbor from the web browser at `http://12.123.12.123:8888/.../$IMAGE`.

However, this probably won't work for you (yet) because cloud providers usually require that you explicitly open firewall ports before they will accept incoming traffic.

Update the firewall to expose port 8888. Here's more information on how to do this for: [Google Cloud](https://cloud.google.com/vpc/docs/using-firewalls), [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html), and [Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nsg-quickstart-portal). Note that for Google Cloud you need to first [assign a static IP address to your VM](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address) and then [allow an external HTTP connection](https://cloud.google.com/vpc/docs/special-configurations#externalhttpconnection).

## Try It Out <a href="#try-it-out" class="w-headline-link">#</a>

Thumbor is now accessible and ready for use. Try it out by visiting the following URL:

    http://YOUR_VIRTUAL_MACHINE:8888/unsafe/100x100/https://web.dev/install-thumbor/hero.jpg

Note that this URL uses HTTP. Thumbor uses HTTP by default but can be [configured](https://thumbor.readthedocs.io/en/latest/image_loader.html) to use HTTPS.

You should see an image that is 100 pixels wide by 100 pixels tall. Thumbor has taken the image `hero.jpg` and size specified in the URL string and served the result. You can replace the image in the URL string (i.e., `https://web.dev/install-thumbor/hero.jpg`) with any other image (e.g., `https://your-site.com/cat.jpg`) and Thumbor will resize that image too.

The [Optimize images with Thumbor](/use-thumbor/#thumbor-url-format) article has more information on using the Thumbor API. In particular, you may be interested in [setting up a Thumbor configuration file](/use-thumbor/#appendix:-thumbor.conf).

## Appendix: Configuring Systemd <a href="#appendix:-configuring-systemd" class="w-headline-link">#</a>

This step explains how to make sure that the Thumbor process keeps running, even after the VM has been restarted. This step is important for production sites, but optional if you're just playing around with Thumbor.

[Systemd](https://www.freedesktop.org/software/systemd/man/systemd.html) is the "system and service manager" for Linux operating systems. `systemd` makes it easy to configure when services (processes) run.

You will be configuring `systemd` to automatically start Thumbor on VM boot. If the VM is restarted, the Thumbor process will automatically restart as well. This is much more reliable than relying on user intervention to start Thumbor.

Navigate to the `/lib/systemd/system` directory. This directory contains the service files for `systemd`.

    cd /lib/systemd/system

As superuser, create a `thumbor.service` file.

    sudo touch thumbor.service

Using your favorite text editor (vim and nano come pre-installed on Ubuntu or you can install another editor), add the following configuration to `thumbor.service`. This configuration will run `/usr/local/bin/thumbor` (i.e. the Thumbor binary) once networking is available and will restart Thumbor on [failure](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Restart=).

    [Unit]

    Description=Service for Thumbor image CDN

    Documentation=https://thumbor.readthedocs.io/en/latest/

    After=network.target

    [Service]

    ExecStart=/usr/local/bin/thumbor

    Restart=on-failure

    [Install]

    WantedBy=multi-user.target

`systemctl` is the utility used to manage `systemd`. Use the `start` command to start Thumbor.

    sudo systemctl start thumbor.service

Note: If Thumbor is currently running, you should stop it before attempting to start Thumbor using `systemctl`.

Next, "enable" Thumbor. This means that Thumbor will automatically start on boot.

    sudo systemctl enable thumbor.service

Verify that you've successfully configured `systemd` by running the `status` command.

    systemctl status thumbor.service

If you've successfully set up thumbor.service to use `systemd`, the [status](https://www.freedesktop.org/software/systemd/man/systemctl.html#status%20PATTERN%E2%80%A6%7CPID%E2%80%A6%5D) should show that it is enabled and active.

<figure><img src="https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format" class="w-screenshot" sizes="(min-width: 466px) 466px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/e04pxe6uE090ewJ3WWPX.jpg?auto=format&amp;w=932 932w" width="466" height="164" /></figure><a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/images/" class="w-chip">Images</a>

<span class="w-mr--sm"> Last updated: Aug 14, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/install-thumbor/index.md)

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
