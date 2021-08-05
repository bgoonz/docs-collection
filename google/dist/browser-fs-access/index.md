<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Y4wGmGP8P0Dc99c3eKkT.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#reading-and-writing-files-and-directories-with-the-browser-fs-access-library" class="w-toc__header--link">Reading and writing files and directories with the browser-fs-access library</a>

- [The traditional way of dealing with files](#the-traditional-way-of-dealing-with-files)
- [Opening files](#opening-files)
- [Opening directories](#opening-directories)
- [Saving (rather: downloading) files](<#saving-(rather:-downloading)-files>)
- [The problem](#the-problem)
- [The File System Access API](#the-file-system-access-api)
- [Opening files](#opening-files-2)
- [Opening directories](#opening-directories-2)
- [Saving files](#saving-files)
- [Introducing browser-fs-access](#introducing-browser-fs-access)
- [Design philosophy](#design-philosophy)
- [Using the browser-fs-access library](#using-the-browser-fs-access-library)
- [Demo](#demo)
- [The browser-fs-access library in the wild](#the-browser-fs-access-library-in-the-wild)
- [Real life code sample](#real-life-code-sample)
- [UI considerations](#ui-considerations)
- [Conclusions](#conclusions)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Reading and writing files and directories with the browser-fs-access library

Jul 27, 2020 <span class="w-author__separator">•</span> Updated Jan 27, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Browsers have been able to deal with files and directories for a long time. The [File API](https://w3c.github.io/FileAPI/) provides features for representing file objects in web applications, as well as programmatically selecting them and accessing their data. The moment you look closer, though, all that glitters is not gold.

## The traditional way of dealing with files <a href="#the-traditional-way-of-dealing-with-files" class="w-headline-link">#</a>

If you know how it used to work the old way, you can [jump down straight to the new way](#the-file-system-access-api).

### Opening files <a href="#opening-files" class="w-headline-link">#</a>

As a developer, you can open and read files via the [`<input type="file">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) element. In its simplest form, opening a file can look something like the code sample below. The `input` object gives you a [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList), which in the case below consists of just one [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File). A `File` is a specific kind of [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob), and can be used in any context that a Blob can.

    const openFile = async () => {
      return new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', () => {
          resolve(input.files[0]);
        });
        input.click();
      });
    };

### Opening directories <a href="#opening-directories" class="w-headline-link">#</a>

For opening folders (or directories), you can set the [`<input webkitdirectory>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-webkitdirectory) attribute. Apart from that, everything else works the same as above. Despite its vendor-prefixed name, `webkitdirectory` is not only usable in Chromium and WebKit browsers, but also in the legacy EdgeHTML-based Edge as well as in Firefox.

### Saving (rather: downloading) files <a href="#saving-(rather:-downloading)-files" class="w-headline-link">#</a>

For saving a file, traditionally, you are limited to _downloading_ a file, which works thanks to the [`<a download>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download:~:text=download) attribute. Given a Blob, you can set the anchor's `href` attribute to a `blob:` URL that you can get from the [`URL.createObjectURL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) method.

**Caution**: To prevent memory leaks, always revoke the URL after the download.

    const saveFile = async (blob) => {
      const a = document.createElement('a');
      a.download = 'my-file.txt';
      a.href = URL.createObjectURL(blob);
      a.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
      });
      a.click();
    };

### The problem <a href="#the-problem" class="w-headline-link">#</a>

A massive downside of the _download_ approach is that there is no way to make a classic open→edit→save flow happen, that is, there is no way to _overwrite_ the original file. Instead, you end up with a new _copy_ of the original file in the operating system's default Downloads folder whenever you "save".

## The File System Access API <a href="#the-file-system-access-api" class="w-headline-link">#</a>

The File System Access API makes both operations, opening and saving, a lot simpler. It also enables _true saving_, that is, you can not only choose where to save a file, but also overwrite an existing file.

For a more thorough introduction to the File System Access API, see the article [The File System Access API: simplifying access to local files](/file-system-access/).

### Opening files <a href="#opening-files-2" class="w-headline-link">#</a>

With the [File System Access API](https://wicg.github.io/file-system-access/), opening a file is a matter of one call to the `window.showOpenFilePicker()` method. This call returns a file handle, from which you can get the actual `File` via the `getFile()` method.

    const openFile = async () => {
      try {
        // Always returns an array.
        const [handle] = await window.showOpenFilePicker();
        return handle.getFile();
      } catch (err) {
        console.error(err.name, err.message);
      }
    };

### Opening directories <a href="#opening-directories-2" class="w-headline-link">#</a>

Open a directory by calling `window.showDirectoryPicker()` that makes directories selectable in the file dialog box.

### Saving files <a href="#saving-files" class="w-headline-link">#</a>

Saving files is similarly straightforward. From a file handle, you create a writable stream via `createWritable()`, then you write the Blob data by calling the stream's `write()` method, and finally you close the stream by calling its `close()` method.

    const saveFile = async (blob) => {
      try {
        const handle = await window.showSaveFilePicker({
          types: [{
            accept: {
              // Omitted
            },
          }],
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return handle;
      } catch (err) {
        console.error(err.name, err.message);
      }
    };

## Introducing browser-fs-access <a href="#introducing-browser-fs-access" class="w-headline-link">#</a>

As perfectly fine as the File System Access API is, it's [not yet widely available](https://caniuse.com/native-filesystem-api).

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format" alt="Browser support table for the File System Access API. (Source)" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/G1jsSjCBR871W1uKQWeN.png?auto=format&amp;w=1600 1600w" width="800" height="224" /><figcaption>Browser support table for the File System Access API. (<a href="https://caniuse.com/native-filesystem-api">Source</a>)</figcaption></figure>This is why I see the File System Access API as a [progressive enhancement](/progressively-enhance-your-pwa). As such, I want to use it when the browser supports it, and use the traditional approach if not; all while never punishing the user with unnecessary downloads of unsupported JavaScript code. The [browser-fs-access](https://github.com/GoogleChromeLabs/browser-fs-access) library is my answer to this challenge.

### Design philosophy <a href="#design-philosophy" class="w-headline-link">#</a>

Since the File System Access API is still likely to change in the future, the browser-fs-access API is not modeled after it. That is, the library is not a [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill), but rather a [ponyfill](https://github.com/sindresorhus/ponyfill). You can (statically or dynamically) exclusively import whatever functionality you need to keep your app as small as possible. The available methods are the aptly named [`fileOpen()`](https://github.com/GoogleChromeLabs/browser-fs-access#opening-files), [`directoryOpen()`](https://github.com/GoogleChromeLabs/browser-fs-access#opening-directories), and [`fileSave()`](https://github.com/GoogleChromeLabs/browser-fs-access#saving-files). Internally, the library feature-detects if the File System Access API is supported, and then imports the corresponding code path.

### Using the browser-fs-access library <a href="#using-the-browser-fs-access-library" class="w-headline-link">#</a>

The three methods are intuitive to use. You can specify your app's accepted `mimeTypes` or file `extensions`, and set a `multiple` flag to allow or disallow selection of multiple files or directories. For full details, see the [browser-fs-access API documentation](https://github.com/GoogleChromeLabs/browser-fs-access#api-documentation). The code sample below shows how you can open and save image files.

    // The imported methods will use the File
    // System Access API or a fallback implementation.
    import {
      fileOpen,
      directoryOpen,
      fileSave,
    } from 'https://unpkg.com/browser-fs-access';

    (async () => {
      // Open an image file.
      const blob = await fileOpen({
        mimeTypes: ['image/*'],
      });

      // Open multiple image files.
      const blobs = await fileOpen({
        mimeTypes: ['image/*'],
        multiple: true,
      });

      // Open all files in a directory,
      // recursively including subdirectories.
      const blobsInDirectory = await directoryOpen({
        recursive: true
      });

      // Save a file.
      await fileSave(blob, {
        fileName: 'Untitled.png',
      });
    })();

### Demo <a href="#demo" class="w-headline-link">#</a>

You can see the above code in action in a [demo](https://browser-fs-access.glitch.me/) on Glitch. Its [source code](https://glitch.com/edit/#!/browser-fs-access) is likewise available there. Since for security reasons cross origin sub frames are not allowed to show a file picker, the demo cannot be embedded in this article.

## The browser-fs-access library in the wild <a href="#the-browser-fs-access-library-in-the-wild" class="w-headline-link">#</a>

In my free time, I contribute a tiny bit to an [installable PWA](/progressive-web-apps/#installable) called [Excalidraw](https://excalidraw.com/), a whiteboard tool that lets you easily sketch diagrams with a hand-drawn feel. It is fully responsive and works well on a range of devices from small mobile phones to computers with large screens. This means it needs to deal with files on all the various platforms whether or not they support the File System Access API. This makes it a great candidate for the browser-fs-access library.

I can, for example, start a drawing on my iPhone, save it (technically: download it, since Safari does not support the File System Access API) to my iPhone Downloads folder, open the file on my desktop (after transferring it from my phone), modify the file, and overwrite it with my changes, or even save it as a new file.

<figure><img src="https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format" alt="Starting an Excalidraw drawing on an iPhone where the File System Access API is not supported, but where a file can be saved (downloaded) to the Downloads folder." class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/u1Gwxp5MxS39wl8PW2vz.png?auto=format&amp;w=600 600w" width="300" height="649" /><figcaption>Starting an Excalidraw drawing on an iPhone where the File System Access API is not supported, but where a file can be saved (downloaded) to the Downloads folder.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format" alt="Opening and modifying the Excalidraw drawing on the desktop where the File System Access API is supported and thus the file can be accessed via the API." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/W1lt36DtKuveBJJTzonC.png?auto=format&amp;w=1600 1600w" width="800" height="592" /><figcaption>Opening and modifying the Excalidraw drawing on the desktop where the File System Access API is supported and thus the file can be accessed via the API.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format" alt="Overwriting the original file with the modifications to the original Excalidraw drawing file. The browser shows a dialog asking me whether this is fine." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/srqhiMKy2i9UygEP4t8e.png?auto=format&amp;w=1600 1600w" width="800" height="585" /><figcaption>Overwriting the original file with the modifications to the original Excalidraw drawing file. The browser shows a dialog asking me whether this is fine.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format" alt="Saving the modifications to a new Excalidraw file. The original file remains untouched." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/FLzOZ4eXZ1lbdQaA4MQi.png?auto=format&amp;w=1600 1600w" width="800" height="592" /><figcaption>Saving the modifications to a new Excalidraw file. The original file remains untouched.</figcaption></figure>### Real life code sample <a href="#real-life-code-sample" class="w-headline-link">#</a>

Below, you can see an actual example of browser-fs-access as it is used in Excalidraw. This excerpt is taken from [`/src/data/json.ts`](https://github.com/excalidraw/excalidraw/blob/cd87bd6901b47430a692a06a8928b0f732d77097/src/data/json.ts#L24-L52). Of special interest is how the `saveAsJSON()` method passes either a file handle or `null` to browser-fs-access' `fileSave()` method, which causes it to overwrite when a handle is given, or to save to a new file if not.

    export const saveAsJSON = async (
      elements: readonly ExcalidrawElement[],
      appState: AppState,
      fileHandle: any,
    ) => {
      const serialized = serializeAsJSON(elements, appState);
      const blob = new Blob([serialized], {
        type: "application/json",
      });
      const name = `${appState.name}.excalidraw`;
      (window as any).handle = await fileSave(
        blob,
        {
          fileName: name,
          description: "Excalidraw file",
          extensions: ["excalidraw"],
        },
        fileHandle || null,
      );
    };

    export const loadFromJSON = async () => {
      const blob = await fileOpen({
        description: "Excalidraw files",
        extensions: ["json", "excalidraw"],
        mimeTypes: ["application/json"],
      });
      return loadFromBlob(blob);
    };

### UI considerations <a href="#ui-considerations" class="w-headline-link">#</a>

Whether in Excalidraw or your app, the UI should adapt to the browser's support situation. If the File System Access API is supported (`if ('showOpenFilePicker' in window) {}`) you can show a **Save As** button in addition to a **Save** button. The screenshots below show the difference between Excalidraw's responsive main app toolbar on iPhone and on Chrome desktop. Note how on iPhone the **Save As** button is missing.

## <figure><img src="https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format" alt="Excalidraw app toolbar on iPhone with just a Save button." class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/c2sjjj86zh53VDrPIo6M.png?auto=format&amp;w=600 600w" width="300" height="226" /><figcaption>Excalidraw app toolbar on iPhone with just a <strong>Save</strong> button.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format" alt="Excalidraw app toolbar on Chrome with a Save and a focused Save As button." class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/unUUghwH5mG2hLnaViHK.png?auto=format&amp;w=600 600w" width="300" height="66" /><figcaption>Excalidraw app toolbar on Chrome with a <strong>Save</strong> and a focused <strong>Save As</strong> button.</figcaption></figure>Conclusions <a href="#conclusions" class="w-headline-link">#</a>

Working with system files technically works on all modern browsers. On browsers that support the File System Access API, you can make the experience better by allowing for true saving and overwriting (not just downloading) of files and by letting your users create new files wherever they want, all while remaining functional on browsers that do not support the File System Access API. The [browser-fs-access](https://github.com/GoogleChromeLabs/browser-fs-access) makes your life easier by dealing with the subtleties of progressive enhancement and making your code as simple as possible.

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [Joe Medley](https://github.com/jpmedley) and [Kayce Basques](https://github.com/kaycebasques). Thanks to the [contributors to Excalidraw](https://github.com/excalidraw/excalidraw/graphs/contributors) for their work on the project and for reviewing my Pull Requests. [Hero image](https://unsplash.com/photos/hXrPSgGFpqQ) by [Ilya Pavlov](https://unsplash.com/@ilyapavlov) on Unsplash.

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/file-system/" class="w-chip">File System</a>

<span class="w-mr--sm"> Last updated: Jan 27, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/browser-fs-access/index.md)

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
