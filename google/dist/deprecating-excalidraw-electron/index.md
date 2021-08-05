<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format" alt="Excalidraw drawing with a stylized Electron logo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/qfK9zbKBQalqq5zdr1P1.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#deprecating-excalidraw-electron-in-favor-of-the-web-version" class="w-toc__header--link">Deprecating Excalidraw Electron in favor of the web version</a>

- [How Excalidraw Desktop came into being](#how-excalidraw-desktop-came-into-being)
- [What is Electron?](#what-is-electron)
- [Where Excalidraw Desktop left off](#where-excalidraw-desktop-left-off)
- [How the web serves us today and in the future](#how-the-web-serves-us-today-and-in-the-future)
- [Installable Progressive Web App](#installable-progressive-web-app)
- [File system access](#file-system-access)
- [Drag and drop support](#drag-and-drop-support)
- [Clipboard access](#clipboard-access)
- [File handling](#file-handling)
- [Declarative link capturing](#declarative-link-capturing)
- [Conclusion](#conclusion)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Deprecating Excalidraw Electron in favor of the web version

Learn why the Excalidraw project decided to deprecate their Electron wrapper in favor of the web version.

Jan 7, 2021 <span class="w-author__separator">•</span> Updated May 19, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

[Excalidraw](https://excalidraw.com/) is a virtual collaborative whiteboard that lets you easily sketch diagrams that feel hand-drawn. This article was cross-posted to and first appeared on the [Excalidraw blog](https://blog.excalidraw.com/deprecating-excalidraw-electron/).

On the [Excalidraw project](https://github.com/excalidraw), we have decided to deprecate [Excalidraw Desktop](https://github.com/excalidraw/excalidraw-desktop), an [Electron](https://www.electronjs.org/) wrapper for Excalidraw, in favor of the web version that you can—and always could—find at [excalidraw.com](https://excalidraw.com/). After a careful analysis, we have decided that [Progressive Web App](/pwa/) (PWA) is the future we want to build upon. Read on to learn why.

## How Excalidraw Desktop came into being <a href="#how-excalidraw-desktop-came-into-being" class="w-headline-link">#</a>

Soon after [@vjeux](https://twitter.com/vjeux) created the initial version of Excalidraw in January 2020 and [blogged about it](https://blog.excalidraw.com/reflections-on-excalidraw/), he proposed the following in [Issue \#561](https://github.com/excalidraw/excalidraw/issues/561#issue-555138343):

> Would be great to wrap Excalidraw within Electron (or equivalent) and publish it as a \[platform-specific\] application to the various app stores.

The immediate reaction by [@voluntadpear](https://github.com/voluntadpear) was to suggest:

> What about making it a PWA instead? Android currently supports adding them to the Play Store as Trusted Web Activities and hopefully iOS will do the same soon. On Desktop, Chrome lets you download a desktop shortcut to a PWA.

The decision that [@vjeux](https://github.com/vjeux) took in the end was simple:

> We should do both :)

While work on converting the version of Excalidraw into a PWA was started by [@voluntadpear](https://github.com/voluntadpear) and later others, [@lipis](https://github.com/lipis) independently [went ahead](https://github.com/excalidraw/excalidraw/issues/561#issuecomment-579573783) and created a [separate repo](https://github.com/excalidraw/excalidraw-desktop) for Excalidraw Desktop.

To this day, the initial goal set by [@vjeux](https://github.com/vjeux), that is, to submit Excalidraw to the various app stores, has not been reached yet. Honestly, no one has even started the submission process to any of the stores. But why is that? Before I answer, let's look at Electron, the platform.

## What is Electron? <a href="#what-is-electron" class="w-headline-link">#</a>

The unique selling point of [Electron](https://www.electronjs.org/) is that it allows you to _"build cross-platform desktop apps with JavaScript, HTML, and CSS"_. Apps built with Electron are _"compatible with Mac, Windows, and Linux"_, that is, _"Electron apps build and run on three platforms"_. According to the homepage, the hard parts that Electron makes easy are [automatic updates](https://www.electronjs.org/docs/api/auto-updater), [system-level menus and notifications](https://www.electronjs.org/docs/api/menu), [crash reporting](https://www.electronjs.org/docs/api/crash-reporter), [debugging and profiling](https://www.electronjs.org/docs/api/content-tracing), and [Windows installers](https://www.electronjs.org/docs/api/auto-updater#windows). Turns out, some of the promised features need a detailed look at the small print.

- For example, automatic updates _"are \[currently\] only \[supported\] on macOS and Windows. There is no built-in support for auto-updater on Linux, so it is recommended to use the distribution's package manager to update your app"_.

- Developers can create system-level menus by calling `Menu.setApplicationMenu(menu)`. On Windows and Linux, the menu will be set as each window's top menu, while on macOS there are many system-defined standard menus, like the [Services](https://developer.apple.com/documentation/appkit/nsapplication/1428608-servicesmenu?language=objc) menu. To make one's menus a standard menu, developers should set their menu's `role` accordingly, and Electron will recognize them and make them become standard menus. This means that a lot of menu-related code will use the following platform check: `const isMac = process.platform === 'darwin'`.

- Windows installers can be made with [windows-installer](https://github.com/electron/windows-installer). The README of the project highlights that _"for a production app you need to sign your application. Internet Explorer's SmartScreen filter will block your app from being downloaded, and many anti-virus vendors will consider your app as malware unless you obtain a valid cert"_ \[sic\].

Looking at just these three examples, it is clear that Electron is far from "write once, run everywhere". Distributing an app on app stores requires [code signing](https://www.electronjs.org/docs/tutorial/code-signing), a security technology for certifying app ownership. Packaging an app requires using tools like [electron-forge](https://github.com/electron-userland/electron-forge) and thinking about where to host packages for app updates. It gets complex relatively quickly, especially when the objective truly is cross platform support. I want to note that it is _absolutely_ possible to create stunning Electron apps with enough effort and dedication. For Excalidraw Desktop, we were not there.

## Where Excalidraw Desktop left off <a href="#where-excalidraw-desktop-left-off" class="w-headline-link">#</a>

Excalidraw Desktop so far is basically the Excalidraw web app bundled as an [`.asar`](https://github.com/electron/asar) file with an added **About Excalidraw** window. The look and feel of the application is almost identical to the web version.

<figure><img src="https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format" alt="Excalidraw Desktop is almost indistinguishable from the web version" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/oR9usELiRYTSu8V7i7vj.png?auto=format&amp;w=1600 1600w" width="800" height="601" /><figcaption>Excalidraw Desktop is almost indistinguishable from the web version</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format" alt="The About Excalibur menu providing insights into the versions" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/y9d4nWR3p0VjvHcnP0iq.png?auto=format&amp;w=800 800w" width="400" height="330" /><figcaption>The <strong>About Excalibur</strong> menu providing insights into the versions</figcaption></figure>On macOS, there is now a system-level menu at the top of the application, but since none of the menu actions—apart from **Close Window** and **About Excalidraw**—are hooked up to to anything, the menu is, in its current state, pretty useless. Meanwhile, all actions can of course be performed via the regular Excalidraw toolbars and the context menu.

<figure><img src="https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format" alt="The menu bar of Excalidraw Desktop on macOS" sizes="(min-width: 736px) 736px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/akQQgmMKo66quqeVDdAH.png?auto=format&amp;w=1472 1472w" width="736" height="138" /><figcaption>The menu bar of Excalidraw Desktop on macOS</figcaption></figure>We use [electron-builder](https://github.com/electron-userland/electron-builder), which supports [file type associations](https://www.electron.build/configuration/configuration#PlatformSpecificBuildOptions-fileAssociations). By double-clicking an `.excalidraw` file, ideally the Excalidraw Desktop app should open. The relevant excerpt of our `electron-builder.json` file looks like this:

    {
      "fileAssociations": [
        {
          "ext": "excalidraw",
          "name": "Excalidraw",
          "description": "Excalidraw file",
          "role": "Editor",
          "mimeType": "application/json"
        }
      ]
    }

Unfortunately, in practice, this does not always work as intended, since, depending on the installation type (for the current user, for all users), apps on Windows 10 do not have the rights to associate a file type to themselves.

These shortcomings and the pending work to make the experience truly app-like on _all_ platforms (which, again, with enough effort _is_ possible) were a strong argument for us to reconsider our investment in Excalidraw Desktop. The way bigger argument for us, though, was that we foresee that for _our_ use case, we do not need all the features Electron offers. The grown and still growing set of capabilities of the web serves us equally well, if not better.

## How the web serves us today and in the future <a href="#how-the-web-serves-us-today-and-in-the-future" class="w-headline-link">#</a>

Even in 2020, [jQuery](https://jquery.com/) is still [incredibly popular](https://almanac.httparchive.org/en/2020/javascript#libraries). For many developers it has become a habit to use it, despite the fact that today they [might not need jQuery](http://youmightnotneedjquery.com/). There is a similar resource for Electron, aptly called [You Might Not Need Electron](https://youmightnotneedelectron.com/). Let me outline why we think we do not need Electron.

### Installable Progressive Web App <a href="#installable-progressive-web-app" class="w-headline-link">#</a>

Excalidraw today is an [installable](/installable/) Progressive Web App with a [service worker](https://excalidraw.com/service-worker.js) and a [web app manifest](https://excalidraw.com/manifest.json). It caches all its resources in two caches, one for fonts and font-related CSS, and one for everything else.

<figure><img src="https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format" alt="Excalidraw&#39;s cache contents" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/tTo7miHIREZRySv8aoBd.png?auto=format&amp;w=1600 1600w" width="800" height="569" /><figcaption>Excalidraw's cache contents</figcaption></figure>This means the application is fully offline-capable and can run without a network connection. Chromium-based browsers on both desktop and mobile prompt the user to install the app. You can see the installation prompt in the screenshot below.

<figure><img src="https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format" alt="The Excalidraw install dialog in Chrome" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/be3EQLezj3776w6SHLPi.png?auto=format&amp;w=800 800w" width="400" height="258" /><figcaption>The Excalidraw install dialog in Chrome</figcaption></figure>Excalidraw is configured to run as a standalone application, so when you install it, you get an app that runs in its own window. It is fully integrated in the operating system's multitasking UI and gets its own app icon on the home screen, Dock, or task bar; depending on the platform where you install it.

<figure><img src="https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format" alt="The Excalidraw PWA in a standalone window" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/MbMgQlGSBeNcX7Y362jV.png?auto=format&amp;w=1600 1600w" width="800" height="584" /><figcaption>The Excalidraw PWA in a standalone window</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format" alt="The Excalidraw icon on the macOS Dock" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/7ncf98ZQZcg4g3UP2s7F.png?auto=format&amp;w=800 800w" width="400" height="167" /><figcaption>The Excalidraw icon on the macOS Dock</figcaption></figure>### File system access <a href="#file-system-access" class="w-headline-link">#</a>

Excalidraw uses [browser-fs-access](https://github.com/GoogleChromeLabs/browser-fs-access) for accessing the file system of the operating system. On supporting browsers, this allows for a true open→edit→save workflow and actual over-saving and "save as", with a transparent fallback for other browsers. You can learn more about this feature in my blog post [Reading and writing files and directories with the browser-fs-access library](/browser-fs-access/).

### Drag and drop support <a href="#drag-and-drop-support" class="w-headline-link">#</a>

Files can be dragged and dropped onto the Excalidraw window just as in platform-specific applications. On a browser that supports the [File System Access API](/file-system-access/), a dropped file can be immediately edited and the modifications be saved to the original file. This is so intuitive that you sometimes forget that you are dealing with a web app.

### Clipboard access <a href="#clipboard-access" class="w-headline-link">#</a>

Excalidraw works well with the operating system's clipboard. Entire Excalidraw drawings or also just individual objects can be copied and pasted in `image/png` and `image/svg+xml` formats, allowing for an easy integration with other platform-specific tools like [Inkscape](https://inkscape.org/) or web-based tools like [SVGOMG](https://jakearchibald.github.io/svgomg/).

<figure><img src="https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format" alt="The Excalidraw context menu offering clipboard actions" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/90gLbYTtkKtDfun4fiRM.png?auto=format&amp;w=1600 1600w" width="800" height="746" /><figcaption>The Excalidraw context menu offering clipboard actions</figcaption></figure>### File handling <a href="#file-handling" class="w-headline-link">#</a>

Excalidraw already supports the experimental [File Handling API](/file-handling/), which means `.excalidraw` files can be double-clicked in the operating system's file manager and open directly in the Excalidraw app, since Excalidraw registers as a file handler for `.excalidraw` files in the operating system.

### Declarative link capturing <a href="#declarative-link-capturing" class="w-headline-link">#</a>

Excalidraw drawings can be shared by link. Here is an [example](https://excalidraw.com/#json=4646308765761536,jwZJW8JsOM75vdhqG2nBgA). In the future, if people have Excalidraw installed as a PWA, such links will not open in a browser tab, but launch a new standalone window. Pending implementation, this will work thanks to [declarative link capturing](https://github.com/WICG/sw-launch/blob/master/declarative_link_capturing.md), an, at the time of writing, bleeding-edge proposal for a new web platform feature.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

The web has come a long way, with more and more features landing in browsers that only a couple of years or even months ago were unthinkable on the web and exclusive to platform-specific applications. Excalidraw is at the forefront of what is possible in the browser, all while acknowledging that not all browsers on all platforms support each feature we use. By betting on a progressive enhancement strategy, we enjoy the latest and greatest wherever possible, but without leaving anyone behind. Best viewed in _any_ browser.

Electron has served us well, but in 2020 and beyond, we can live without it. Oh, and for that objective of [@vjeux](https://github/com/vjeux): since the Android Play Store now accepts PWAs in a container format called [Trusted Web Activity](/using-a-pwa-in-your-android-app/) and since the [Microsoft Store supports PWAs](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-edgehtml/microsoft-store), too, you can expect Excalidraw in these stores in the not too distant future. Meanwhile, you can always use and install [Excalidraw in and from the browser](https://excalidraw.com/).

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [@lipis](https://github.com/lipis), [@dwelle](https://github.com/dwelle), and [Joe Medley](https://github.com/jpmedley).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/case-study/" class="w-chip">Case Study</a>

<span class="w-mr--sm"> Last updated: May 19, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/deprecating-excalidraw-electron/index.md)

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
