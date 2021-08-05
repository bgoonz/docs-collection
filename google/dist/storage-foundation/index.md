<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format" alt="Hacker binary attack code." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/jHUvdkuNQBLYxfWrCizd.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#high-performance-storage-for-your-app:-the-storage-foundation-api" class="w-toc__header--link">High performance storage for your app: the Storage Foundation API</a>

- [Why does the web need another storage API?](#why-does-the-web-need-another-storage-api)
- [Suggested use cases for the Storage Foundation API](#use-cases)
- [What is the Storage Foundation API?](#what)
- [File system calls](#file-system-calls)
- [File handles](#file-handles)
- [Current status](#status)
- [How to use the Storage Foundation API](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Feature detection](#feature-detection)
- [Complete examples](#complete-examples)
- [Demo](#demo)
- [Security and permissions](#security-and-permissions)
- [User control](#user-control)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# High performance storage for your app: the Storage Foundation API

The Storage Foundation API resembles a basic file system, with direct access to stored data through buffers and offsets. It gives developers flexibility by providing generic, simple, and performant primitives on which they can build higher-level components.

Jun 16, 2021 <span class="w-author__separator">•</span> Updated Jun 30, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The Storage Foundation API is part of the [capabilities project](https://web.dev/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

The web platform increasingly offers developers the tools they need to build fined-tuned high-performance applications for the web. Most notably, [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) (Wasm) has opened the door to fast and powerful web applications, while technologies like [Emscripten](https://emscripten.org/) now allow developers to reuse tried and tested code on the web. To truly leverage this potential, developers must have the same power and flexibility when it comes to storage.

This is where the Storage Foundation API comes in. The Storage Foundation API is a new fast and unopinionated storage API that unlocks new and much-requested use cases for the web, such as implementing performant databases and gracefully managing large temporary files. With this new interface, developers can "bring their own storage" to the web, reducing the feature gap between web and platform-specific code.

The Storage Foundation API is designed to resemble a very basic file system so it gives developers flexibility by providing generic, simple, and performant primitives on which they can build higher-level components. Applications can take advantage of the best tool for their needs, finding the right balance between usability, performance, and reliability.

## Why does the web need another storage API? <a href="#why-does-the-web-need-another-storage-api" class="w-headline-link">#</a>

The web platform offers a number of storage options for developers, each of which is built with specific use-cases in mind.

- Some of these options clearly do not overlap with this proposal as they only allow very small amounts of data to be stored, like [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), or the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) consisting of the `sessionStorage` and the `localStorage` mechanisms.
- Other options are already deprecated for various reasons like the [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) or [WebSQL](https://www.w3.org/TR/webdatabase/).
- The [File System Access API](/file-system-access/) has a similar API surface, but its use is to interface with the client's file system and provide access to data that may be outside of the origin's or even the browser's ownership. This different focus comes with stricter security considerations and higher performance costs.
- The [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) can be used as a backend for some of the Storage Foundation API's use-cases. For example, Emscripten includes [IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html), an IndexedDB-based persistent file system. However, since IndexedDB is fundamentally a key-value store, it comes with significant performance limitations. Furthermore, directly accessing subsections of a file is even more difficult and slower under IndexedDB.
- Finally, the [CacheStorage interface](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage) is widely supported and is tuned for storing large-sized data such as web application resources, but the values are immutable.

The Storage Foundation API is an attempt at closing all the gaps of the previous storage options by allowing for the performant storage of mutable large files defined within the origin of the application.

### Suggested use cases for the Storage Foundation API <a href="#use-cases" class="w-headline-link">#</a>

Examples of sites that may use this API include:

- Productivity or creativity apps that operate on large amounts of video, audio, or image data. Such apps can offload segments to disk instead of holding them in memory.
- Apps that rely on a persistent file system accessible from Wasm and that need more performance than what IDBFS can guarantee.

## What is the Storage Foundation API? <a href="#what" class="w-headline-link">#</a>

There are two main parts to the API:

- **File system calls**, which provide basic functionality to interact with files and file paths.
- **File handles**, which provide read and write access to an existing file.

### File system calls <a href="#file-system-calls" class="w-headline-link">#</a>

The Storage Foundation API introduces a new object, `storageFoundation`, that lives on the `window` object and that includes a number of functions:

We are currently exploring the tradeoffs between providing a synchronous versus an asynchronous API. The interfaces are designed to be asynchronous as a temporary measure and will be updated once a decision has been reached. For more background on the tradeoffs, see the [Explainer](https://github.com/WICG/storage-foundation-api-explainer#sync-vs-async).

- `storageFoundation.open(name)`: Opens the file with the given name if it exists and otherwise creates a new file. Returns a promise that resolves with the the opened file.

**Warning**: File names are restricted to lowercase alphanumeric characters and underscore (`a-z`, `0-9`, `_`).

A file can only be opened once. This means concurrent access from different tabs is currently not possible.

- `storageFoundation.delete(name)`: Removes the file with the given name. Returns a promise that resolves when the file is deleted.
- `storageFoundation.rename(oldName, newName)`: Renames the file from the old name to the new name atomically. Returns a promise that resolves when the file is renamed.
- `storageFoundation.getAll()`: Returns a promise that resolves with an array of all existing file names.
- `storageFoundation.requestCapacity(requestedCapacity)`: Requests new capacity (in bytes) for usage by the current execution context. Returns a promise that resolved with the remaining amount of capacity available.

The Storage Foundation API achieves fast and predictable performance by implementing its own quota management system. Web applications must explicitly ask for capacity before storing any new data. This request will be granted according to the browser's quota guidelines. Anytime an application starts a new JavaScript execution context (e.g., a new tab, a new worker, or when reloading the page), it must make sure it owns sufficient capacity before writing any data.

- `storageFoundation.releaseCapacity(toBeReleasedCapacity)`: Releases the specified number of bytes from the current execution context, and returns a promise that resolves with the remaining capacity.
- `storageFoundation.getRemainingCapacity()`: Returns a promise that resolves with the capacity available for the current execution context.

### File handles <a href="#file-handles" class="w-headline-link">#</a>

Working with files happens via the following functions:

The Storage Foundation API used to be called NativeIO. Some references to this name still remain and will be removed eventually.

- `NativeIOFile.close()`: Closes a file, and returns a promise that resolves when the operation completes.
- `NativeIOFile.flush()`: Synchronizes (that is, flushes) a file's in-memory state with the storage device, and returns a promise that resolves when the operation completes.

It is a known issue that `flush()` might be slow and we are exploring whether offering a faster, less reliable variant would be useful.

- `NativeIOFile.getLength()`: Returns a promise that resolves with the length of the file in bytes.

- `NativeIOFile.setLength(length)`: Sets the length of the file in bytes, and returns a promise that resolves when the operation completes. If the new length is smaller than the current length, bytes are removed starting from the end of the file. Otherwise the file is extended with zero-valued bytes.

- `NativeIOFile.read(buffer, offset)`: Reads the contents of the file at the given offset through a buffer that is the result of transferring the given buffer, which is then left detached. Returns a `NativeIOReadResult` with the transferred buffer and the the number of bytes that were successfully read.

  A `NativeIOReadResult` is an object that consists of two entries:

  - `buffer`: An [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView), which is the result of transferring the buffer passed to `read()`. It is of the same type and length as source buffer.
  - `readBytes`: The number of bytes that were successfully read into `buffer`. This may be less than the buffer size, if an error occurs or if the read range spans beyond the end of the file. It is set to zero if the read range is beyond the end of the file.

- `NativeIOFile.write(buffer, offset)`: Writes the contents of the given buffer into the file at the given offset. The buffer is transferred before any data is written and is therefore left detached. Returns a `NativeIOWriteResult` with the transferred buffer and the number of bytes that were successfully written. The file will be extended if the write range exceeds its length.

  A `NativeIOWriteResult` is an object that consists of two entries:

  - `buffer`: An [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) which is the result of transferring the buffer passed to `write()`. It is of the same type and length as the source buffer.
  - `writtenBytes`: The number of bytes that were successfully written into `buffer`. This may be less than the buffer size if an error occurs.

Calls to `NativeIOFile.write()` only guarantee that the data has been written to the file, but it does not guarantee that the data has been persisted to the underlying storage. To ensure that no data loss occurs on system crash, you must call `NativeIOFile.flush()` and wait for it to successfully return.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/storage-foundation-api-explainer#readme">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><strong><a href="https://developer.chrome.com/origintrials/#/view_trial/2916080758722396161">In progress</a></strong></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

There is currently an [ongoing effort](https://docs.google.com/document/d/1g7ZCqZ5NdiU7oqyCpsc2iZ7rRAY1ZXO-9VoG4LfP7fM/edit?usp=sharing) to augment the [origin private file system](/file-system-access/#accessing-the-origin-private-file-system) of the [File System Access API](/file-system-access/) as to not introduce yet another entry point for a storage system. This article will be updated as we make progress on this.

## How to use the Storage Foundation API <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the Storage Foundation API locally, without an origin trial token, enable the `#experimental-web-platform-features` flag in `about://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chromium 90, the Storage Foundation API is available as an origin trial in Chromium. The origin trial is expected to end in Chromium 95 (November 10, 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/2916080758722396161) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the Storage Foundation API is supported, use:

    if ('storageFoundation' in window) {
      // The Storage Foundation API is supported.
    }

### Complete examples <a href="#complete-examples" class="w-headline-link">#</a>

To make the concepts introduced above clearer, here are two complete examples that walk you through the different stages in the lifecycle of Storage Foundation files.

#### Opening, writing, reading, closing <a href="#opening-writing-reading-closing" class="w-headline-link">#</a>

    // Open a file (creating it if needed).
    const file = await storageFoundation.open('test_file');
    try {
      // Request 100 bytes of capacity for this context.
      await storageFoundation.requestCapacity(100);

      const writeBuffer = new Uint8Array([64, 65, 66]);
      // Write the buffer at offset 0. After this operation, `result.buffer`
      // contains the transferred buffer and `result.writtenBytes` is 3,
      // the number of bytes written. `writeBuffer` is left detached.
      let result = await file.write(writeBuffer, 0);

      const readBuffer = new Uint8Array(3);
      // Read at offset 1. `result.buffer` contains the transferred buffer,
      // `result.readBytes` is 2, the number of bytes read. `readBuffer` is left
      // detached.
      result = await file.read(readBuffer, 1);
      // `Uint8Array(3) [65, 66, 0]`
      console.log(result.buffer);
    } finally {
      file.close();
    }

#### Opening, listing, deleting <a href="#opening-listing-deleting" class="w-headline-link">#</a>

    // Open three different files (creating them if needed).
    await storageFoundation.open('sunrise');
    await storageFoundation.open('noon');
    await storageFoundation.open('sunset');
    // List all existing files.
    // `["sunset", "sunrise", "noon"]`
    await storageFoundation.getAll();
    // Delete one of the three files.
    await storageFoundation.delete('noon');
    // List all remaining existing files.
    // `["sunrise", "noon"]`
    await storageFoundation.getAll();

## Demo <a href="#demo" class="w-headline-link">#</a>

You can play with the [Storage Foundation API demo](https://storage-foundation.glitch.me/) in the embed below. Create, rename, write into, and read from files, and see the available capacity you have requested update as you make changes. You can find the [source code](https://glitch.com/edit/#!/storage-foundation) of the demo on Glitch.

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chromium team has designed and implemented the Storage Foundation API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

Following the same pattern as other modern storage APIs on the web, access to the Storage Foundation API is origin-bound, meaning that an origin may only access self-created data. It is also limited to secure contexts.

### User control <a href="#user-control" class="w-headline-link">#</a>

Storage quota will be used to distribute access to disk space and to prevent abuse. Memory you want to occupy needs to be requested first. Like other storage APIs, users can clear the space taken by Storage Foundation API through their browser.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with the Storage Foundation API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that does not work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/storage-foundation-api-explainer/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>Storage` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Storage Foundation API? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#StorageFoundation`](https://twitter.com/search?q=%23StorageFoundation&src=recent_search_click&f=live) and let us know where and how you are using it. Ask a question on StackOverflow with the hashtag [`#file-system-access-api`](https://stackoverflow.com/questions/tagged/file-system-access-api).

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/WICG/storage-foundation-api-explainer#readme)
- [Storage Foundation API demo](https://storage-foundation.glitch.me/) | [Storage Foundation API demo source](https://glitch.com/edit/#!/storage-foundation)
- [Chromium tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=914488)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5670244905385984)
- Blink Component: [`Blink>Storage>NativeIO`](https://chromestatus.com/features#component%3ABlink%3EStorage)
- [TAG Review](https://github.com/w3ctag/design-reviews/issues/566)
- [Intent to Prototype](https://groups.google.com/a/chromium.org/g/blink-dev/c/gh0gTHO18YQ)
- [WebKit thread](https://lists.webkit.org/pipermail/webkit-dev/2021-February/031687.html)
- [Mozilla thread](https://github.com/mozilla/standards-positions/issues/481)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The Storage Foundation API was specified and implemented by [Emanuel Krivoy](https://github.com/fivedots) and [Richard Stotz](https://github.com/rstz). This article was reviewed by [Pete LePage](https://github.com/petele) and [Joe Medley](https://github.com/jpmedley).

Hero image via [Markus Spiske](https://unsplash.com/@markusspiske) on [Unsplash](https://unsplash.com/photos/iar-afB0QQw).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jun 30, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/storage-foundation/index.md)

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
