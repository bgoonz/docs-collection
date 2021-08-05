<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#read-files-in-javascript" class="w-toc__header--link">Read files in JavaScript</a>

- [The modern File System Access API](#the-modern-file-system-access-api)
- [Working with files, the classic way](#working-with-files-the-classic-way)
- [Select files](#select)
- [HTML input element](#select-input)
- [Custom drag-and-drop](#select-dnd)
- [What about directories?](#directories)
- [Read file metadata](#read-metadata)
- [Read a file's content](#read-content)
- [Monitor the progress of a file read](#monitor-progress)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Read files in JavaScript

How to select files, read file metadata and content, and monitor read progress.

Jun 18, 2010 <span class="w-author__separator">•</span> Updated Mar 29, 2021

[<img src="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Kayce Basques" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/7GdPR4YDRHSS6llepBOd.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/kaycebasques/)

<a href="/authors/kaycebasques/" class="w-author__name-link">Kayce Basques</a>

- <a href="https://twitter.com/kaycebasques" class="w-author__link">Twitter</a>
- <a href="https://github.com/kaycebasques" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@kaycebasques" class="w-author__link">Glitch</a>
- <a href="https://kayce.basqu.es/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Being able to select and interact with files on the user's local device is one of the most commonly used features of the web. It allows users to select files and upload them to a server, for example, uploading photos, or submitting tax documents, etc. But, it also allows sites to read and manipulate them without ever having to transfer the data across the network.

## The modern File System Access API <a href="#the-modern-file-system-access-api" class="w-headline-link">#</a>

The File System Access API provides an easy way to both read and write to files and directories on the user's local system. It's currently available in most Chromium-derived browsers like Chrome or Edge. To learn more about it, see the [File System Access API](/file-system-access/) article.

Since the File System Access API is not compatible with all browsers yet, check out [browser-fs-access](https://github.com/GoogleChromeLabs/browser-fs-access), a helper library that uses the new API wherever it is available, but falls back to legacy approaches when it is not.

## Working with files, the classic way <a href="#working-with-files-the-classic-way" class="w-headline-link">#</a>

This guide shows you how to:

- Select files
  - [Using the HTML input element](#select-input)
  - [Using a drag-and-drop zone](#select-dnd)
- [Read file metadata](#read-metadata)
- [Read a file's content](#read-content)

## Select files <a href="#select" class="w-headline-link">#</a>

### HTML input element <a href="#select-input" class="w-headline-link">#</a>

The easiest way to allow users to select files is using the [`<input type="file">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) element, which is supported in every major browser. When clicked, it lets a user select a file, or multiple files if the [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Additional_attributes) attribute is included, using their operating system's built-in file selection UI. When the user finishes selecting a file or files, the element's `change` event is fired. You can access the list of files from `event.target.files`, which is a [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) object. Each item in the `FileList` is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

    <!-- The `multiple` attribute lets users select multiple files. -->
    <input type="file" id="file-selector" multiple>
    <script>
      const fileSelector = document.getElementById('file-selector');
      fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList);
      });
    </script>

Check if the [`window.showOpenFilePicker()`](/file-system-access/#ask-the-user-to-pick-a-file-to-read) method is a viable alternative for your use case, since it also gives you a file handle so you can possibly write back to the file, apart from reading. This method can be [polyfilled](https://github.com/GoogleChromeLabs/browser-fs-access#opening-files).

This example lets a user select multiple files using their operating system's built-in file selection UI and then logs each selected file to the console.

#### Limit the types of files user can select <a href="#accept" class="w-headline-link">#</a>

In some cases, you may want to limit the types of files users can select. For example, an image editing app should only accept images, not text files. To do that, you can add an [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Additional_attributes) attribute to the input element to specify which files are accepted.

    <input type="file" id="file-selector" accept=".jpg, .jpeg, .png">

### Custom drag-and-drop <a href="#select-dnd" class="w-headline-link">#</a>

In some browsers, the `<input type="file">` element is also a drop target, allowing users to drag-and-drop files into your app. But, the drop target is small, and can be hard to use. Instead, once you've provided the core functionality using an `<input type="file">` element, you can provide a large, custom drag-and-drop surface.

Check if the [`DataTransferItem.getAsFileSystemHandle()`](/file-system-access/#drag-and-drop-integration) method is a viable alternative for your use case, since it also gives you a file handle so you can possibly write back to the file, apart from reading.

#### Choose your drop zone <a href="#choose-drop-zone" class="w-headline-link">#</a>

Your drop surface will depend on the design of your application. You may only want part of the window to be a drop surface, or potentially the entire window.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format" alt="Squoosh makes the entire window a drop zone." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xX8UXdqkLmZXu3Ad1Z2q.png?auto=format&amp;w=1600 1600w" width="800" height="589" /><figcaption>Squoosh makes the entire window a drop zone.</figcaption></figure>Squoosh allows the user to drag-and-drop an image anywhere into the window, and clicking **select an image** invokes the `<input type="file">` element. Whatever you choose as your drop zone, make sure it's clear to the user that they can drag-and-drop files onto that surface.

#### Define the drop zone <a href="#define-drop-zone" class="w-headline-link">#</a>

To enable an element to be a drag-and-drop zone, you'll need to listen for two events, [`dragover`](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event) and [`drop`](https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event). The `dragover` event updates the browser UI to visually indicate that the drag-and-drop action is creating a copy of the file. The `drop` event is fired after the user has dropped the files onto the surface. Similar to the input element, you can access the list of files from `event.dataTransfer.files`, which is a [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) object. Each item in the `FileList` is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

    const dropArea = document.getElementById('drop-area');

    dropArea.addEventListener('dragover', (event) => {
      event.stopPropagation();
      event.preventDefault();
      // Style the drag-and-drop as a "copy file" operation.
      event.dataTransfer.dropEffect = 'copy';
    });

    dropArea.addEventListener('drop', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const fileList = event.dataTransfer.files;
      console.log(fileList);
    });

[`event.stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) and [`event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) stop the browser's default behavior from happening, and allow your code to run instead. Without them, the browser would otherwise navigate away from your page and open the files the user dropped into the browser window.

Check out [Custom drag-and-drop](https://custom-drag-and-drop.glitch.me/) for a live demonstration.

### What about directories? <a href="#directories" class="w-headline-link">#</a>

Unfortunately, today there isn't a good way to get access to a directory.

The [`webkitdirectory`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory) attribute on the `<input type="file">` element allows the user to choose a directory or directories. It is supported in some Chromium-based browsers, and possibly desktop Safari, but has [conflicting](https://caniuse.com/#search=webkitdirectory) reports of browser compatibility.

Check if the [`window.showDirectoryPicker()`](/file-system-access/#opening-a-directory-and-enumerating-its-contents) method is a viable alternative for your use case, since it also gives you a directory handle so you can possibly write back to the directory, apart from reading. This method can be [polyfilled](https://github.com/GoogleChromeLabs/browser-fs-access#opening-directories).

If drag-and-drop is enabled, a user may try to drag a directory into the drop zone. When the drop event is fired, it will include a `File` object for the directory, but will be unable to access any of the files within the directory.

## Read file metadata <a href="#read-metadata" class="w-headline-link">#</a>

The [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object contains a number of metadata properties about the file. Most browsers provide the file name, the size of the file, and the MIME type, though depending on the platform, different browsers may provide different, or additional information.

    function getMetadataForFileList(fileList) {
      for (const file of fileList) {
        // Not supported in Safari for iOS.
        const name = file.name ? file.name : 'NOT SUPPORTED';
        // Not supported in Firefox for Android or Opera for Android.
        const type = file.type ? file.type : 'NOT SUPPORTED';
        // Unknown cross-browser support.
        const size = file.size ? file.size : 'NOT SUPPORTED';
        console.log({file, name, type, size});
      }
    }

You can see this in action in the [`input-type-file`](https://input-type-file.glitch.me/) Glitch demo.

## Read a file's content <a href="#read-content" class="w-headline-link">#</a>

To read a file, use [`FileReader`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader), which enables you to read the content of a `File` object into memory. You can instruct `FileReader` to read a file as an [array buffer](https://developer.mozilla.org/docs/Web/API/FileReader/readAsArrayBuffer), a [data URL](https://developer.mozilla.org/docs/Web/API/FileReader/readAsDataURL), or [text](https://developer.mozilla.org/docs/Web/API/FileReader/readAsText).

    function readImage(file) {
      // Check if the file is an image.
      if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        img.src = event.target.result;
      });
      reader.readAsDataURL(file);
    }

The example above reads a `File` provided by the user, then converts it to a data URL, and uses that data URL to display the image in an `img` element. Check out the [`read-image-file`](https://read-image-file.glitch.me/) Glitch to see how to verify that the user has selected an image file.

### Monitor the progress of a file read <a href="#monitor-progress" class="w-headline-link">#</a>

When reading large files, it may be helpful to provide some UX to indicate how far the read has progressed. For that, use the [`progress`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/progress_event) event provided by `FileReader`. The `progress` event provides two properties, `loaded`, the amount read, and `total`, the total amount to read.

    function readFile(file) {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        const result = event.target.result;
        // Do something with result
      });

      reader.addEventListener('progress', (event) => {
        if (event.loaded && event.total) {
          const percent = (event.loaded / event.total) * 100;
          console.log(`Progress: ${Math.round(percent)}`);
        }
      });
      reader.readAsDataURL(file);
    }

Hero image by Vincent Botta from [Unsplash](https://unsplash.com/photos/bv_rJXpNU9I)

<a href="/tags/storage/" class="w-chip">Storage</a>

<span class="w-mr--sm"> Last updated: Mar 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/read-files/index.md)

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
