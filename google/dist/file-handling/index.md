<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format" alt="Binders in many colors." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/tf0sUZX6G7AM8PvU1t0B.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#let-installed-web-applications-be-file-handlers" class="w-toc__header--link">Let installed web applications be file handlers</a>

- [Suggested use cases for the File Handling API](#use-cases)
- [Current status](#status)
- [How to use the File Handling API](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Progressive enhancement](#progressive-enhancement)
- [Feature detection](#feature-detection)
- [The declarative part of the File Handling API](#the-declarative-part-of-the-file-handling-api)
- [The imperative part of the File Handling API](#the-imperative-part-of-the-file-handling-api)
- [DevTools support](#devtools-support)
- [Demo](#demo)
- [Security](#security)
- [Permissions, permissions persistence, and file handler updates](#permissions-permissions-persistence-and-file-handler-updates)
- [File-related challenges](#file-related-challenges)
- [Default handler challenges](#default-handler-challenges)
- [User control](#user-control)
- [Transparency](#transparency)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Let installed web applications be file handlers

Register an app as a file handler with the operating system.

Oct 22, 2020 <span class="w-author__separator">•</span> Updated Jul 29, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The File Handling API is part of the [capabilities project](/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

Now that web apps are [capable of reading and writing files](/file-system-access/), the next logical step is to let developers declare these very web apps as file handlers for the files their apps can create and process. The File Handling API allows you to do exactly this. After registering a text editor app as a file handler and after installing it, you can right-click a `.txt` file on macOS and select "Get Info" to then instruct the OS that it should always open `.txt` files with this app as default.

### Suggested use cases for the File Handling API <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- Office applications like text editors, spreadsheet apps, and slideshow creators.
- Graphics editors and drawing tools.
- Video game level editor tools.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/file-handling/blob/main/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><strong><a href="https://developer.chrome.com/origintrials/#/view_trial/-6682215947110973439">In progress</a></strong></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use the File Handling API <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the File Handling API locally, without an origin trial token, enable the `#file-handling-api` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chromium 92, the File Handling API will be available as an origin trial in Chromium. The origin trial is expected to end in Chromium 94 (October 13, 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/-6682215947110973439) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### Progressive enhancement <a href="#progressive-enhancement" class="w-headline-link">#</a>

The File Handling API per se cannot be polyfilled. The functionality of opening files with a web app, however, can be achieved through two other means:

- The [Web Share Target API](/web-share-target/) lets developers specify their app as a share target so files can be opened from the operating system's share sheet.
- The [File System Access API](/file-system-access/) can be integrated with file drag and drop, so developers can handle dropped files in the already opened app.

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the File Handling API is supported, use:

    if ('launchQueue' in window) {
      // The File Handling API is supported.
    }

File Handling is currently limited to desktop operating systems.

### The declarative part of the File Handling API <a href="#the-declarative-part-of-the-file-handling-api" class="w-headline-link">#</a>

As a first step, web apps need to declaratively describe in their [web app manifest](/add-manifest/) what kind of files they can handle. The File Handling API extends web app manifest with a new property called `"file_handlers"` that accepts an array of, well, file handlers. A file handler is an object with two properties:

- An `"action"` property that points to a URL within the scope of the app as its value.
- An `"accept"` property with an object of MIME-types as keys and lists of file extensions as their values.

The example below, showing only the relevant excerpt of the web app manifest, should make it clearer:

    {
      "file_handlers": [
        {
          "action": "/open-csv",
          "accept": {
            "text/csv": [".csv"]
          }
        },
        {
          "action": "/open-svg",
          "accept": {
            "image/svg+xml": ".svg"
          }
        },
        {
          "action": "/open-graf",
          "accept": {
            "application/vnd.grafr.graph": [".grafr", ".graf"],
            "application/vnd.alternative-graph-app.graph": ".graph"
          }
        }
      ]
    }

This is for a hypothetical application that handles comma-separated value (`.csv`) files at `/open-csv`, scalable vector graphics (`.svg`) files at `/open-svg`, and a made-up Grafr file format with any of `.grafr`, `.graf`, or `.graph` as the extension at `/open-graf`.

For this declaration to have any effect, the application must be installed. You can learn more in an article series on this very site on [making your app installable](/progressive-web-apps/#installable).

### The imperative part of the File Handling API <a href="#the-imperative-part-of-the-file-handling-api" class="w-headline-link">#</a>

Now that the app has declared what files it can handle at which in-scope URL in theory, it needs to imperatively do something with incoming files in practice. This is where the `launchQueue` comes into play. To access launched files, a site needs to specify a consumer for the `window.launchQueue` object. Launches are queued until they are handled by the specified consumer, which is invoked exactly once for each launch. In this manner, every launch is handled, regardless of when the consumer was specified.

    if ('launchQueue' in window) {
      launchQueue.setConsumer((launchParams) => {
        // Nothing to do when the queue is empty.
        if (!launchParams.files.length) {
          return;
        }
        for (const fileHandle of launchParams.files) {
          // Handle the file.
        }
      });
    }

### DevTools support <a href="#devtools-support" class="w-headline-link">#</a>

There is no DevTools support at the time of this writing, but I have filed a [feature request](https://bugs.chromium.org/p/chromium/issues/detail?id=1130552) for support to be added.

## Demo <a href="#demo" class="w-headline-link">#</a>

I have added file handling support to [Excalidraw](https://excalidraw.com/), a cartoon-style drawing app. To test it, you first need to install Excalidraw. When you then create a file with it and store it somewhere on your file system, you can open the file via a double click, or a right click and then select "Excalidraw" in the context menu. You can check out the [implementation](https://github.com/excalidraw/excalidraw/search?q=launchqueue&type=code) in the source code.

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format" alt="Double click or right click a file in your operating system&#39;s file explorer." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TMh8Qev0XdwgIx7jJlP5.png?auto=format&amp;w=1600 1600w" width="800" height="422" /><figcaption>Double click or right click a file in your operating system's file explorer.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format" alt="Excalidraw is the default file handler for .excalidraw files." class="w-screenshot w-screenshot--filled" sizes="(min-width: 488px) 488px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wCNbMl6kJ11XziG3LO65.png?auto=format&amp;w=976 976w" width="488" height="266" /><figcaption>Excalidraw is the default file handler for <code>.excalidraw</code> files.</figcaption></figure>Security <a href="#security" class="w-headline-link">#</a>

The Chrome team has designed and implemented the File Handling API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

## Permissions, permissions persistence, and file handler updates <a href="#permissions-permissions-persistence-and-file-handler-updates" class="w-headline-link">#</a>

To ensure user trust and the safety of users' files when the File Handling API is used to open a file, a permission prompt will be shown before a PWA can view a file. This permission prompt will be shown right after the user selects the PWA to open a file, so that the permission is tightly coupled to the action of opening a file using the PWA, making it more understandable and relevant.

This permission will show every time until the user clicks to **Allow** or **Block** file handling for the site, or ignores the prompt three times (after which Chromium will embargo and block this permission). The selected setting will persist across the PWA closing and reopening.

When the manifest updates and changes in the `"file_handlers"` section are detected, the permissions will be reset.

### File-related challenges <a href="#file-related-challenges" class="w-headline-link">#</a>

There is a large category of attack vectors that are opened by allowing websites access to files. These are outlined in the [article on the File System Access API](/file-system-access/#security-considerations). The additional security-pertinent capability that the File Handling API provides over the File System Access API is the ability to grant access to certain files through the operating system's built-in UI, as opposed to through a file picker shown by a web application.

There is still a risk that users may unintentionally grant a web application access to a file by opening it. However, it is generally understood that opening a file allows the application it is opened with to read and/or manipulate that file. Therefore, a user's explicit choice to open a file in an installed application, such as via an "Open with…" context menu, can be read as a sufficient signal of trust in the application.

### Default handler challenges <a href="#default-handler-challenges" class="w-headline-link">#</a>

The exception to this is when there are no applications on the host system for a given file type. In this case, some host operating systems may automatically promote the newly registered handler to the default handler for that file type, silently and without any intervention by the user. This would mean if the user double clicks a file of that type, it would automatically open in the registered web app. On such host operating systems, when the user agent determines that there is no existing default handler for the file type, an explicit permission prompt might be necessary to avoid accidentally sending the contents of a file to a web application without the user's consent.

### User control <a href="#user-control" class="w-headline-link">#</a>

The spec states that browsers should not register every site that can handle files as a file handler. Instead, file handling registration should be gated behind installation and never happen without explicit user confirmation, especially if a site is to become the default handler. Rather than hijacking existing extensions like `.json` that the user probably already has a default handler registered for, sites should consider crafting their own extensions.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

All operating systems allow users to change the present file associations. This is outside the scope of the browser.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the File Handling API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model?

- File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/file-handling/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `UI>Browser>WebAppInstalls>FileHandling` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the File Handling API? Your public support helps the Chrome team to prioritize features and shows other browser vendors how critical it is to support them.

- Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/proposal-ability-to-register-file-handlers/3084).
- Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#FileHandling`](https://twitter.com/search?q=%23FileHandling&src=typed_query&f=live) and let us know where and how you are using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/WICG/file-handling/blob/main/explainer.md)
- [File Handling API demo](https://excalidraw.com/) | [File Handling API demo source](https://github.com/excalidraw/excalidraw/search?q=launchqueue&type=code)
- [Chromium tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=829689)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5721776357113856)
- Blink Component: [`UI>Browser>WebAppInstalls>FileHandling`](https://bugs.chromium.org/p/chromium/issues/list?q=component:UI%3EBrowser%3EWebAppInstalls%3EFileHandling)
- [TAG Review](https://github.com/w3ctag/design-reviews/issues/371)
- [Mozilla Standards Position](https://github.com/mozilla/standards-positions/issues/158)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The File Handling API was specified by [Eric Willigers](https://github.com/ericwilligers), [Jay Harris](https://github.com/fallaciousreasoning), and [Raymes Khoury](https://github.com/raymeskhoury). This article was reviewed by [Joe Medley](https://github.com/jpmedley).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/file-handling/index.md)

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
