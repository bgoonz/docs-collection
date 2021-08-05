<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format" alt="Image of hard disk platters" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/qn7E0q1EWJUqdzsuHwx4.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#the-file-system-access-api:-simplifying-access-to-local-files" class="w-toc__header--link">The File System Access API: simplifying access to local files</a>

- [What is the File System Access API?](#what-is-it)
- [Current status](#status)
- [Using the File System Access API](#how-to-use)
- [Try it](#try-it)
- [Read a file from the local file system](#read-file)
- [Write the file to the local file system](#write-file)
- [Specifying a suggested file name and start directory](#specifying-a-suggested-file-name-and-start-directory)
- [Specifying the purpose of different file pickers](#specifying-the-purpose-of-different-file-pickers)
- [Storing file handles or directory handles in IndexedDB](#storing-file-handles-or-directory-handles-in-indexeddb)
- [Stored file or directory handles and permissions](#stored-file-or-directory-handles-and-permissions)
- [Opening a directory and enumerating its contents](#opening-a-directory-and-enumerating-its-contents)
- [Creating or accessing files and folders in a directory](#creating-or-accessing-files-and-folders-in-a-directory)
- [Resolving the path of an item in a directory](#resolving-the-path-of-an-item-in-a-directory)
- [Deleting files and folders in a directory](#deleting-files-and-folders-in-a-directory)
- [Drag and drop integration](#drag-and-drop-integration)
- [Accessing the origin private file system](#accessing-the-origin-private-file-system)
- [Polyfilling](#polyfilling)
- [Security and permissions](#security-considerations)
- [Opening a file or saving a new file](#opening-a-file-or-saving-a-new-file)
- [Modifying an existing file or directory](#modifying-an-existing-file-or-directory)
- [Transparency](#transparency)
- [Permission persistence](#permission-persistence)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Problem with the implementation?](#problem-with-the-implementation)
- [Planning to use the API?](#planning-to-use-the-api)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# The File System Access API: simplifying access to local files

The File System Access API allows web apps to read or save changes directly to files and folders on the user's device.

Aug 20, 2019 <span class="w-author__separator">•</span> Updated Jul 29, 2021

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

## What is the File System Access API? <a href="#what-is-it" class="w-headline-link">#</a>

The [File System Access API](https://wicg.github.io/file-system-access/) (formerly known as Native File System API and prior to that it was called Writeable Files API) enables developers to build powerful web apps that interact with files on the user's local device, like IDEs, photo and video editors, text editors, and more. After a user grants a web app access, this API allows them to read or save changes directly to files and folders on the user's device. Beyond reading and writing files, the File System Access API provides the ability to open a directory and enumerate its contents.

The File System Access API—despite the similar name—is distinct from the [`FileSystem`](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem) interface exposed by the [File and Directory Entries API](https://wicg.github.io/entries-api/#api-domfilesystem), which documents the types and operations made available by browsers to script when a hierarchy of files and directories are dragged and dropped onto a page or selected using form elements or equivalent user actions.

It is likewise distinct from the deprecated [File API: Directories and System](https://www.w3.org/TR/file-system-api/) specification, which defines an API to navigate file system hierarchies and a means by which browsers may expose sandboxed sections of a user's local filesystem to web applications.

If you've worked with reading and writing files before, much of what I'm about to share will be familiar to you. I encourage you to read it anyway, because not all systems are alike.

We've put a lot of thought into the design and implementation of the File System Access API to ensure that people can easily manage their files. See the [security and permissions](#security-considerations) section for more information.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/file-system-access/blob/main/EXPLAINER.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/file-system-access/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="https://wicg.github.io/file-system-access/">Complete</a></td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Complete</strong></td></tr></tbody></table>

During the origin trial phase, there was a universal method named `Window.chooseFileSystemEntries()` that has been replaced with the three specialized methods `Window.showOpenFilePicker()`, `Window.showSaveFilePicker()`, and `Window.showDirectoryPicker()`. There were a number of other [changes](https://github.com/WICG/file-system-access/blob/main/changes.md) that you can read up on.

## Using the File System Access API <a href="#how-to-use" class="w-headline-link">#</a>

To show off the power and usefulness of the File System Access API, I wrote a single file [text editor](https://googlechromelabs.github.io/text-editor/). It lets you open a text file, edit it, save the changes back to disk, or start a new file and save the changes to disk. It's nothing fancy, but provides enough to help you understand the concepts.

### Try it <a href="#try-it" class="w-headline-link">#</a>

See the File System Access API in action in the [text editor](https://googlechromelabs.github.io/text-editor/) demo.

### Read a file from the local file system <a href="#read-file" class="w-headline-link">#</a>

The first use case I wanted to tackle was to ask the user to choose a file, then open and read that file from disk.

#### Ask the user to pick a file to read <a href="#ask-the-user-to-pick-a-file-to-read" class="w-headline-link">#</a>

The entry point to the File System Access API is [`window.showOpenFilePicker()`](https://wicg.github.io/file-system-access/#api-showopenfilepicker). When called, it shows a file picker dialog box, and prompts the user to select a file. After they select a file, the API returns an array of file handles. An optional `options` parameter lets you influence the behavior of the file picker, for example, by allowing the user to select multiple files, or directories, or different file types. Without any options specified, the file picker allows the user to select a single file. This is perfect for a text editor.

Like many other powerful APIs, calling `showOpenFilePicker()` must be done in a [secure context](https://w3c.github.io/webappsec-secure-contexts/), and must be called from within a user gesture.

    let fileHandle;
    butOpenFile.addEventListener('click', async () => {
      // Destructure the one-element array.
      [fileHandle] = await window.showOpenFilePicker();
      // Do something with the file handle.
    });

Once the user selects a file, `showOpenFilePicker()` returns an array of handles, in this case a one-element array with one [`FileSystemFileHandle`](https://wicg.github.io/file-system-access/#api-filesystemfilehandle) that contains the properties and methods needed to interact with the file.

It's helpful to keep a reference to the file handle around so that it can be used later. It'll be needed to save changes back to the file, or to perform any other file operations.

#### Read a file from the file system <a href="#read-a-file-from-the-file-system" class="w-headline-link">#</a>

Now that you have a handle to a file, you can get the file's properties, or access the file itself. For now, I'll simply read its contents. Calling `handle.getFile()` returns a [`File`](https://w3c.github.io/FileAPI/) object, which contains a blob. To get the data from the blob, call one of [its methods](https://developer.mozilla.org/en-US/docs/Web/API/Blob), ([`slice()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice), [`stream()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream), [`text()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text), or [`arrayBuffer()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer)).

    const file = await fileHandle.getFile();
    const contents = await file.text();

For the majority of use cases, you can read files in _sequential_ order with the `stream()`, `text()`, or `arrayBuffer()` methods. For getting _random access_ to a file's contents, use the `slice()` method.

The `File` object returned by `FileSystemFileHandle.getFile()` is only readable as long as the underlying file on disk hasn't changed. If the file on disk is modified, the `File` object becomes unreadable and you'll need to call `getFile()` again to get a new `File` object to read the changed data.

#### Putting it all together <a href="#putting-it-all-together" class="w-headline-link">#</a>

When users click the Open button, the browser shows a file picker. Once they've selected a file, the app reads the contents and puts them into a `<textarea>`.

    let fileHandle;
    butOpenFile.addEventListener('click', async () => {
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      textArea.value = contents;
    });

### Write the file to the local file system <a href="#write-file" class="w-headline-link">#</a>

In the text editor, there are two ways to save a file: **Save**, and **Save As**. **Save** simply writes the changes back to the original file using the file handle retrieved earlier. But **Save As** creates a new file, and thus requires a new file handle.

#### Create a new file <a href="#create-a-new-file" class="w-headline-link">#</a>

To save a file, call [`showSaveFilePicker()`](https://wicg.github.io/file-system-access/#api-showsavefilepicker), which will show the file picker in "save" mode, allowing the user to pick a new file they want to use for saving. For the text editor, I also wanted it to automatically add a `.txt` extension, so I provided some additional parameters.

    async function getNewFileHandle() {
      const options = {
        types: [
          {
            description: 'Text Files',
            accept: {
              'text/plain': ['.txt'],
            },
          },
        ],
      };
      const handle = await window.showSaveFilePicker(options);
      return handle;
    }

undefined Sometimes processing the to-be-saved data takes some time after the user clicks the **Save** button in your app. A common gotcha is to do this work _before_ the `showSaveFilePicker()` code has run, resulting in a `SecurityError Failed to execute 'showSaveFilePicker' on 'Window': Must be handling a user gesture to show a file picker.`. Instead, get the file handle first, and only _after_ obtaining the file handle start processing the data.

#### Save changes to disk <a href="#save-to-disk" class="w-headline-link">#</a>

You can find all the code for saving changes to a file in my [text editor](https://googlechromelabs.github.io/text-editor/) demo on [GitHub](https://github.com/GoogleChromeLabs/text-editor/). The core file system interactions are in [`fs-helpers.js`](https://github.com/GoogleChromeLabs/text-editor/blob/main/src/inline-scripts/fs-helpers.js). At its simplest, the process looks like the code below. I'll walk through each step and explain it.

    async function writeFile(fileHandle, contents) {
      // Create a FileSystemWritableFileStream to write to.
      const writable = await fileHandle.createWritable();
      // Write the contents of the file to the stream.
      await writable.write(contents);
      // Close the file and write the contents to disk.
      await writable.close();
    }

Writing data to disk uses a [`FileSystemWritableFileStream`](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream) object, essentially a [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream). Create the stream by calling `createWritable()` on the file handle object. When `createWritable()` is called, the browser first checks if the user has granted write permission to the file. If permission to write hasn't been granted, the browser will prompt the user for permission. If permission isn't granted, `createWritable()` will throw a `DOMException`, and the app will not be able to write to the file. In the text editor, these `DOMException`s are handled in the [`saveFile()`](https://github.com/GoogleChromeLabs/text-editor/blob/main/src/inline-scripts/app.js) method.

The `write()` method takes a string, which is what's needed for a text editor. But it can also take a [BufferSource](https://developer.mozilla.org/en-US/docs/Web/API/BufferSource), or a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob). For example, you can pipe a stream directly to it:

    async function writeURLToFile(fileHandle, url) {
      // Create a FileSystemWritableFileStream to write to.
      const writable = await fileHandle.createWritable();
      // Make an HTTP request for the contents.
      const response = await fetch(url);
      // Stream the response into the file.
      await response.body.pipeTo(writable);
      // pipeTo() closes the destination pipe by default, no need to close it.
    }

You can also [`seek()`](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream-seek), or [`truncate()`](https://wicg.github.io/file-system-access/#api-filesystemwritablefilestream-truncate) within the stream to update the file at a specific position, or resize the file.

**Caution**: Changes are **not** written to disk until the stream is closed, either by calling `close()` or when the stream is automatically closed by the pipe.

### Specifying a suggested file name and start directory <a href="#specifying-a-suggested-file-name-and-start-directory" class="w-headline-link">#</a>

In many cases you may want your app to suggest a default file name or location. For example, a text editor might want to suggest a default file name of `Untitled Text.txt` rather than `Untitled`. You can achieve this by passing a `suggestedName` property as part of the `showSaveFilePicker` options.

    const fileHandle = await self.showSaveFilePicker({
      suggestedName: 'Untitled Text.txt',
      types: [{
        description: 'Text documents',
        accept: {
          'text/plain': ['.txt'],
        },
      }],
    });

The same goes for the default start directory. If you're building a text editor, you may want to start the file save or file open dialog in the default `documents` folder, whereas for an image editor, may want to start in the default `pictures` folder. You can suggest a default start directory by passing a `startIn` property to the `showSaveFilePicker`, `showDirectoryPicker()`, or `showOpenFilePicker` methods like so.

    const fileHandle = await self.showOpenFilePicker({
      startIn: 'pictures'
    });

The list of the well-known system directories is:

- `desktop`: The user's desktop directory, if such a thing exists.
- `documents`: Directory in which documents created by the user would typically be stored.
- `downloads`: Directory where downloaded files would typically be stored.
- `music`: Directory where audio files would typically be stored.
- `pictures`: Directory where photos and other still images would typically be stored.
- `videos`: Directory where videos/movies would typically be stored.

Apart from well-known system directories, you can also pass an existing file or directory handle as a value for `startIn`. The dialog would then open in the same directory.

    // Assume `directoryHandle` were a handle to a previously opened directory.
    const fileHandle = await self.showOpenFilePicker({
      startIn: directoryHandle
    });

### Specifying the purpose of different file pickers <a href="#specifying-the-purpose-of-different-file-pickers" class="w-headline-link">#</a>

Sometimes applications have different pickers for different purposes. For example, a rich text editor may allow the user to open text files, but also to import images. By default, each file picker would open at the last-remembered location. You can circumvent this by storing `id` values for each type of picker. If an `id` is specified, the file picker implementation will remember a separate last-used directory for pickers with that same `id`.

    const fileHandle1 = await self.showSaveFilePicker({
      id: 'openText',
    });

    const fileHandle2 = await self.showSaveFilePicker({
      id: 'importImage',
    });

### Storing file handles or directory handles in IndexedDB <a href="#storing-file-handles-or-directory-handles-in-indexeddb" class="w-headline-link">#</a>

File handles and directory handles are serializable, which means that you can save a file or directory handle to IndexedDB, or call `postMessage()` to send them between the same top-level origin.

Saving file or directory handles to IndexedDB means that you can store state, or remember which files or directories a user was working on. This makes it possible to keep a list of recently opened or edited files, offer to re-open the last file when the app is opened, restore the previous working directory, and more. In the text editor, I store a list of the five most recent files the user has opened, making it easy to access those files again.

The code example below shows storing and retrieving a file handle and a directory handle. You can [see this in action](https://filehandle-directoryhandle-indexeddb.glitch.me/) over on Glitch (I use the [idb-keyval](https://www.npmjs.com/package/idb-keyval) library for brevity).

    import { get, set } from 'https://unpkg.com/idb-keyval@5.0.2/dist/esm/index.js';

    const pre1 = document.querySelector('pre.file');
    const pre2 = document.querySelector('pre.directory');
    const button1 = document.querySelector('button.file');
    const button2 = document.querySelector('button.directory');

    // File handle
    button1.addEventListener('click', async () => {
      try {
        const fileHandleOrUndefined = await get('file');
        if (fileHandleOrUndefined) {
          pre1.textContent = `Retrieved file handle "${fileHandleOrUndefined.name}" from IndexedDB.`;
          return;
        }
        const [fileHandle] = await window.showOpenFilePicker();
        await set('file', fileHandle);
        pre1.textContent = `Stored file handle for "${fileHandle.name}" in IndexedDB.`;
      } catch (error) {
        alert(error.name, error.message);
      }
    });

    // Directory handle
    button2.addEventListener('click', async () => {
      try {
        const directoryHandleOrUndefined = await get('directory');
        if (directoryHandleOrUndefined) {
          pre2.textContent = `Retrieved directroy handle "${directoryHandleOrUndefined.name}" from IndexedDB.`;
          return;
        }
        const directoryHandle = await window.showDirectoryPicker();
        await set('directory', directoryHandle);
        pre2.textContent = `Stored directory handle for "${directoryHandle.name}" in IndexedDB.`;
      } catch (error) {
        alert(error.name, error.message);
      }
    });

### Stored file or directory handles and permissions <a href="#stored-file-or-directory-handles-and-permissions" class="w-headline-link">#</a>

Since permissions currently are not persisted between sessions, you should verify whether the user has granted permission to the file or directory using `queryPermission()`. If they haven't, use `requestPermission()` to (re-)request it. This works the same for file and directory handles. You need to run `fileOrDirectoryHandle.requestPermission(descriptor)` or `fileOrDirectoryHandle.queryPermission(descriptor)` respectively.

In the text editor, I created a `verifyPermission()` method that checks if the user has already granted permission, and if required, makes the request.

    async function verifyPermission(fileHandle, readWrite) {
      const options = {};
      if (readWrite) {
        options.mode = 'readwrite';
      }
      // Check if permission was already granted. If so, return true.
      if ((await fileHandle.queryPermission(options)) === 'granted') {
        return true;
      }
      // Request permission. If the user grants permission, return true.
      if ((await fileHandle.requestPermission(options)) === 'granted') {
        return true;
      }
      // The user didn't grant permission, so return false.
      return false;
    }

By requesting write permission with the read request, I reduced the number of permission prompts: the user sees one prompt when opening the file, and grants permission to both read and write to it.

### Opening a directory and enumerating its contents <a href="#opening-a-directory-and-enumerating-its-contents" class="w-headline-link">#</a>

To enumerate all files in a directory, call [`showDirectoryPicker()`](https://wicg.github.io/file-system-access/#api-showdirectorypicker). The user selects a directory in a picker, after which a [`FileSystemDirectoryHandle`](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle) is returned, which lets you enumerate and access the directory's files.

    const butDir = document.getElementById('butDirectory');
    butDir.addEventListener('click', async () => {
      const dirHandle = await window.showDirectoryPicker();
      for await (const entry of dirHandle.values()) {
        console.log(entry.kind, entry.name);
      }
    });

### Creating or accessing files and folders in a directory <a href="#creating-or-accessing-files-and-folders-in-a-directory" class="w-headline-link">#</a>

From a directory, you can create or access files and folders using the [`getFileHandle()`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getfilehandle) or respectively the [`getDirectoryHandle()`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-getdirectoryhandle) method. By passing in an optional `options` object with a key of `create` and a boolean value of `true` or `false`, you can determine if a new file or folder should be created if it doesn't exist.

    // In an existing directory, create a new directory named "My Documents".
    const newDirectoryHandle = await existingDirectoryHandle.getDirectoryHandle('My Documents', {
      create: true,
    });
    // In this new directory, create a file named "My Notes.txt".
    const newFileHandle = await newDirectoryHandle.getFileHandle('My Notes.txt', { create: true });

### Resolving the path of an item in a directory <a href="#resolving-the-path-of-an-item-in-a-directory" class="w-headline-link">#</a>

When working with files or folders in a directory, it can be useful to resolve the path of the item in question. This can be done with the aptly named [`resolve()`](https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle-resolve) method. For resolving, the item can be a direct or indirect child of the directory.

    // Resolve the path of the previously created file called "My Notes.txt".
    const path = await newDirectoryHandle.resolve(newFileHandle);
    // `path` is now ["My Documents", "My Notes.txt"]

### Deleting files and folders in a directory <a href="#deleting-files-and-folders-in-a-directory" class="w-headline-link">#</a>

If you have obtained access to a directory, you can delete the contained files and folders with the [`removeEntry()`](https://wicg.github.io/file-system-access/#dom-filesystemdirectoryhandle-removeentry) method. For folders, deletion can optionally be recursive and include all subfolders and the therein contained files.

    // Delete a file.
    await directoryHandle.removeEntry('Abandoned Projects.txt');
    // Recursively delete a folder.
    await directoryHandle.removeEntry('Old Stuff', { recursive: true });

### Drag and drop integration <a href="#drag-and-drop-integration" class="w-headline-link">#</a>

The [HTML Drag and Drop interfaces](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) enable web applications to accept [dragged and dropped files](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop) on a web page. During a drag and drop operation, dragged file and directory items are associated with file entries and directory entries respectively. The `DataTransferItem.getAsFileSystemHandle()` method returns a promise with a `FileSystemFileHandle` object if the dragged item is a file, and a promise with a `FileSystemDirectoryHandle` object if the dragged item is a directory. The listing below shows this in action. Note that the Drag and Drop interface's [`DataTransferItem.kind`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind) will be `"file"` for both files _and_ directories, whereas the File System Access API's [`FileSystemHandle.kind`](https://wicg.github.io/file-system-access/#dom-filesystemhandle-kind) will be `"file"` for files and `"directory"` for directories.

    elem.addEventListener('dragover', (e) => {
      // Prevent navigation.
      e.preventDefault();
    });

    elem.addEventListener('drop', async (e) => {
      // Prevent navigation.
      e.preventDefault();
      // Process all of the items.
      for (const item of e.dataTransfer.items) {
        // Careful: `kind` will be 'file' for both file
        // _and_ directory entries.
        if (item.kind === 'file') {
          const entry = await item.getAsFileSystemHandle();
          if (entry.kind === 'directory') {
            handleDirectoryEntry(entry);
          } else {
            handleFileEntry(entry);
          }
        }
      }
    });

### Accessing the origin private file system <a href="#accessing-the-origin-private-file-system" class="w-headline-link">#</a>

The origin private file system is a storage endpoint that, as the name suggests, is private to the origin of the page. While browsers will typically implement this by persisting the contents of this origin private file system to disk somewhere, it is _not_ intended that the contents be easily user accessible. Similarly, there is _no_ expectation that files or directories with names matching the names of children of the origin private file system exist. While the browser might make it seem that there are files, internally—since this is an origin private file system—the browser might store these "files" in a database or any other data structure. Essentially: what you create with this API, do _not_ expect to find it 1:1 somewhere on the hard disk. You can operate as usual on the origin private file system once you have access to the root `FileSystemDirectoryHandle`.

    const root = await navigator.storage.getDirectory();
    // Create a new file handle.
    const fileHandle = await root.getFileHandle('Untitled.txt', { create: true });
    // Create a new directory handle.
    const dirHandle = await root.getDirectoryHandle('New Folder', { create: true });
    // Recursively remove a directory.
    await root.removeEntry('Old Stuff', { recursive: true });

## Polyfilling <a href="#polyfilling" class="w-headline-link">#</a>

It is not possible to completely polyfill the File System Access API methods.

- The `showOpenFilePicker()` method can be approximated with an `<input type="file">` element.
- The `showSaveFilePicker()` method can be simulated with a `<a download="file_name">` element, albeit this will trigger a programmatic download and not allow for overwriting existing files.
- The `showDirectoryPicker()` method can be somewhat emulated with the non-standard `<input type="file" webkitdirectory>` element.

We have developed a library called [browser-fs-access](/browser-fs-access/) that uses the File System Access API wherever possible and that falls back to these next best options in all other cases.

## Security and permissions <a href="#security-considerations" class="w-headline-link">#</a>

The Chrome team has designed and implemented the File System Access API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control and transparency, and user ergonomics.

### Opening a file or saving a new file <a href="#opening-a-file-or-saving-a-new-file" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format" alt="A file picker used to open an existing file for reading." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=571 571w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=650 650w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=741 741w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=845 845w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=964 964w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=1098 1098w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=1252 1252w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=1428 1428w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BtrU36qfJoC5M9AgRumF.jpg?auto=format&amp;w=1600 1600w" width="800" height="577" /><figcaption>A file picker used to open an existing file for reading.</figcaption></figure>When opening a file, the user provides permission to read a file or directory via the file picker. The open file picker can only be shown via a user gesture when served from a [secure context](https://w3c.github.io/webappsec-secure-contexts/). If users change their minds, they can cancel the selection in the file picker and the site does not get access to anything. This is the same behavior as that of the `<input type="file">` element.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format" alt="A file picker used to save a file to disk." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=571 571w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=650 650w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=741 741w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=845 845w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=964 964w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=1098 1098w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=1252 1252w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=1428 1428w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/DZFcgVmVFVyfddL8PdSx.jpg?auto=format&amp;w=1600 1600w" width="800" height="577" /><figcaption>A file picker used to save a file to disk.</figcaption></figure>Similarly, when a web app wants to save a new file, the browser will show the save file picker, allowing the user to specify the name and location of the new file. Since they are saving a new file to the device (versus overwriting an existing file), the file picker grants the app permission to write to the file.

#### Restricted folders <a href="#restricted-folders" class="w-headline-link">#</a>

To help protect users and their data, the browser may limit the user's ability to save to certain folders, for example, core operating system folders like Windows, the macOS Library folders, etc. When this happens, the browser will show a modal prompt and ask the user to choose a different folder.

### Modifying an existing file or directory <a href="#modifying-an-existing-file-or-directory" class="w-headline-link">#</a>

A web app cannot modify a file on disk without getting explicit permission from the user.

#### Permission prompt <a href="#permission-prompt" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format" alt="Prompt shown to users before the browser is granted write permission on an existing file." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=571 571w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=650 650w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=741 741w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=845 845w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=964 964w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=1098 1098w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=1252 1252w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=1428 1428w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1Ycrs0DnLzZY2egNYzk2.jpg?auto=format&amp;w=1600 1600w" width="800" height="281" /><figcaption>Prompt shown to users before the browser is granted write permission on an existing file.</figcaption></figure>If a person wants to save changes to a file that they previously granted read access to, the browser will show a modal permission prompt, requesting permission for the site to write changes to disk. The permission request can only be triggered by a user gesture, for example, by clicking a Save button.

Alternatively, a web app that edits multiple files, like an IDE, can also ask for permission to save changes at the time of opening.

If the user chooses Cancel, and does not grant write access, the web app cannot save changes to the local file. It should provide an alternative method to allow the user to save their data, for example by providing a way to ["download" the file](https://developers.google.com/web/updates/2011/08/Downloading-resources-in-HTML5-a-download), saving data to the cloud, etc.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format" alt="Omnibox icon indicating the user has granted the website permission to save to a local file." class="w-screenshot" sizes="(min-width: 282px) 282px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=200 200w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=228 228w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=260 260w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=296 296w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=338 338w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=385 385w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=439 439w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=500 500w,      https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/14mRo309FodD4T3OL0J6.jpg?auto=format&amp;w=564 564w" width="282" height="162" /><figcaption>Omnibox icon indicating the user has granted the website permission to save to a local file.</figcaption></figure>Once a user has granted permission to a web app to save a local file, the browser will show an icon in the URL bar. Clicking on the icon opens a pop-over showing the list of files the user has given access to. The user can easily revoke that access if they choose.

### Permission persistence <a href="#permission-persistence" class="w-headline-link">#</a>

The web app can continue to save changes to the file without prompting until all tabs for that origin are closed. Once a tab is closed, the site loses all access. The next time the user uses the web app, they will be re-prompted for access to the files.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

We want to hear about your experiences with the File System Access API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model?

- File a spec issue on the [WICG File System Access GitHub repo](https://github.com/wicg/file-system-access/issues/), or add your thoughts to an existing issue.

### Problem with the implementation? <a href="#problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

- File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EStorage%3EFileSystem). Be sure to include as much detail as you can, simple instructions for reproducing, and set _Components_ to `Blink>Storage>FileSystem`. [Glitch](https://glitch.com) works great for sharing quick and easy repros.

### Planning to use the API? <a href="#planning-to-use-the-api" class="w-headline-link">#</a>

Planning to use the File System Access API on your site? Your public support helps us to prioritize features, and shows other browser vendors how critical it is to support them.

- Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/writable-file-api/1433).
- Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#FileSystemAccess`](https://twitter.com/search?q=%23FileSystemAccess&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Public explainer](https://github.com/WICG/file-system-access/blob/main/EXPLAINER.md)
- [File System Access specification](https://wicg.github.io/file-system-access/) & [File specification](https://w3c.github.io/FileAPI/)
- [Tracking bug](https://crbug.com/853326)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/6284708426022912)
- Request an [origin trial token]()
- [TypeScript definitions](https://www.npmjs.com/package/@types/wicg-file-system-access)
- [File System Access API - Chromium Security Model](https://docs.google.com/document/d/1NJFd-EWdUlQ7wVzjqcgXewqC5nzv_qII4OvlDtK6SE8/edit)
- Blink Component: `Blink>Storage>FileSystem`

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The File System Access API spec was written by [Marijn Kruisselbrink](https://github.com/mkruisselbrink).

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=native-file-system-api-js), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bnative-file-system-api-js%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/file-system/" class="w-chip">File System</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/file-system-access/index.md)

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
