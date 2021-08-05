<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format" alt="Clipboard with shopping list" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/aA9eqo0ZZNHFcFJGUGQs.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#unblocking-clipboard-access" class="w-toc__header--link">Unblocking clipboard access</a>

- [Copy: writing data to the clipboard](#copy:-writing-data-to-the-clipboard)
- [writeText()](<#writetext()>)
- [write()](<#write()>)
- [The copy event](#the-copy-event)
- [Paste: reading data from clipboard](#paste:-reading-data-from-clipboard)
- [readText()](<#readtext()>)
- [read()](<#read()>)
- [Working with pasted files](#working-with-pasted-files)
- [The paste event](#the-paste-event)
- [Handling multiple file types](#handling-multiple-file-types)
- [Security and permissions](#security-and-permissions)
- [Permissions policy integration](#permissions-policy-integration)
- [Feature detection](#feature-detection)
- [Demos](#demos)
- [Next Steps](#next-steps)
- [Related links](#related-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Unblocking clipboard access

Safer, unblocked clipboard access for text and images

Jul 31, 2020 <span class="w-author__separator">•</span> Updated Jul 29, 2021

[<img src="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jason Miller" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/developit/)

<a href="/authors/developit/" class="w-author__name-link">Jason Miller</a>

- <a href="https://twitter.com/_developit" class="w-author__link">Twitter</a>
- <a href="https://github.com/developit" class="w-author__link">GitHub</a>
- <a href="https://jasonformat.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Over the past few years, browsers have used [`document.execCommand()`](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands) for clipboard interactions. Though widely supported, this method of cutting and pasting came at a cost: clipboard access was synchronous, and could only read and write to the DOM.

That's fine for small bits of text, but there are many cases where blocking the page for clipboard transfer is a poor experience. Time consuming sanitization or image decoding might be needed before content can be safely pasted. The browser may need to load or inline linked resources from a pasted document. That would block the page while waiting on the disk or network. Imagine adding permissions into the mix, requiring that the browser block the page while requesting clipboard access. At the same time, the permissions put in place around `document.execCommand()` for clipboard interaction are loosely defined and vary between browsers.

The [Async Clipboard API](https://www.w3.org/TR/clipboard-apis/#async-clipboard-api) addresses these issues, providing a well-defined permissions model that doesn't block the page. Safari recently announced [support for it in version 13.1](https://webkit.org/blog/10855/). With that, major browsers have a basic level of support in place. As of this writing, Firefox only supports text; and image support is limited to PNGs in some browsers. If you're interested in using the API, [consult a browser support table](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#Browser_compatibility) before proceeding.

The Async Clipboard API is limited to handling text and images. Chrome 84 introduces an experimental feature that allows the clipboard to handle any arbitrary data type.

## Copy: writing data to the clipboard <a href="#copy:-writing-data-to-the-clipboard" class="w-headline-link">#</a>

### writeText() <a href="#writetext()" class="w-headline-link">#</a>

To copy text to the clipboard call `writeText()`. Since this API is asynchronous, the `writeText()` function returns a Promise that resolves or rejects depending on whether the passed text is copied successfully:

    async function copyPageUrl() {
      try {
        await navigator.clipboard.writeText(location.href);
        console.log('Page URL copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }

### write() <a href="#write()" class="w-headline-link">#</a>

Actually, `writeText()` is just a convenience method for the generic `write()` method, which also lets you copy images to the clipboard. Like `writeText()`, it is asynchronous and returns a Promise.

To write an image to the clipboard, you need the image as a [`blob`](https://developer.mozilla.org/en-US/docs/Web/API/blob). One way to do this is by requesting the image from a server using `fetch()`, then calling [`blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/blob) on the response.

Requesting an image from the server may not be desirable or possible for a variety of reasons. Fortunately, you can also draw the image to a canvas and call the canvas' [`toBlob()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob) method.

Next, pass an array of `ClipboardItem` objects as a parameter to the `write()` method. Currently you can only pass one image at a time, but we hope to add support for multiple images in the future. `ClipboardItem` takes an object with the MIME type of the image as the key and the blob as the value. For Blob objects obtained from `fetch()` or `canvas.toBlob()`, the `blob.type` property automatically contains the correct MIME type for an image.

    try {
      const imgURL = '/images/generic/file.png';
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log('Image copied.');
    } catch (err) {
      console.error(err.name, err.message);
    }

**Warning**: Safari (WebKit) treats user activation differently than Chromium (Blink) (see [WebKit bug \#222262](https://bugs.webkit.org/show_bug.cgi?id=222262)). For Safari, run all asynchronous operations in a promise whose result you assign to the `ClipboardItem`:

    new ClipboardItem({
      'foo/bar': new Promise(async (resolve) => {
          // Prepare `blobValue` of type `foo/bar`
          resolve(new Blob([blobValue], { type: 'foo/bar' }));
        }),
      })

### The copy event <a href="#the-copy-event" class="w-headline-link">#</a>

In the case where a user initiates a clipboard copy, non-textual data is provided as a Blob for you. The [`copy` event](https://developer.mozilla.org/en-US/docs/Web/API/Document/copy_event) includes a `clipboardData` property with the items already in the right format, eliminating the need to manually create a Blob. Call `preventDefault()` to prevent the default behavior in favor of your own logic, then copy contents to the clipboard. What's not covered in this example is how to fall back to earlier APIs when the Clipboard API isn't supported. I'll cover that under [Feature detection](#feature-detection), later in this article.

    document.addEventListener('copy', async (e) => {
        e.preventDefault();
        try {
          let clipboardItems = [];
          for (const item of e.clipboardData.items) {
            if (!item.type.startsWith('image/')) {
              continue;
            }
            clipboardItems.push(
              new ClipboardItem({
                [item.type]: item,
              })
            );
            await navigator.clipboard.write(clipboardItems);
            console.log('Image copied.');
          }
        } catch (err) {
          console.error(err.name, err.message);
        }
      });

## Paste: reading data from clipboard <a href="#paste:-reading-data-from-clipboard" class="w-headline-link">#</a>

### readText() <a href="#readtext()" class="w-headline-link">#</a>

To read text from the clipboard, call `navigator.clipboard.readText()` and wait for the returned Promise to resolve:

    async function getClipboardContents() {
      try {
        const text = await navigator.clipboard.readText();
        console.log('Pasted content: ', text);
      } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
      }
    }

### read() <a href="#read()" class="w-headline-link">#</a>

The `navigator.clipboard.read()` method is also asynchronous and returns a Promise. To read an image from the clipboard, obtain a list of [`ClipboardItem`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem) objects, then iterate over them.

Each `ClipboardItem` can hold its contents in different types, so you'll need to iterate over the list of types, again using a `for...of` loop. For each type, call the `getType()` method with the current type as an argument to obtain the corresponding Blob. As before, this code is not tied to images, and will work with other future file types.

    async function getClipboardContents() {
      try {
        const clipboardItems = await navigator.clipboard.read();
        for (const clipboardItem of clipboardItems) {
          for (const type of clipboardItem.types) {
            const blob = await clipboardItem.getType(type);
            console.log(URL.createObjectURL(blob));
          }
        }
      } catch (err) {
        console.error(err.name, err.message);
      }
    }

### Working with pasted files <a href="#working-with-pasted-files" class="w-headline-link">#</a>

It is useful for users to be able to use clipboard keyboard shortcuts such as ctrl+c and ctrl+v. Chromium exposes _read-only_ files on the clipboard as outlined below. This triggers when the user hits the operating system's default paste shortcut or when the user clicks **Edit** then **Paste** in the browser's menu bar. No further plumbing code is needed.

    document.addEventListener("paste", async e => {
      e.preventDefault();
      if (!e.clipboardData.files.length) {
        return;
      }
      const file = e.clipboardData.files[0];
      // Read the file's contents, assuming it's a text file.
      // There is no way to write back to it.
      console.log(await file.text());
    });

### The paste event <a href="#the-paste-event" class="w-headline-link">#</a>

As noted before, there are plans to introduce events to work with the Clipboard API, but for now you can use the existing `paste` event. It works nicely with the new asynchronous methods for reading clipboard text. As with the `copy` event, don't forget to call `preventDefault()`.

    document.addEventListener('paste', async (e) => {
      e.preventDefault();
      const text = await navigator.clipboard.readText();
      console.log('Pasted text: ', text);
    });

As with the `copy` event, falling back to earlier APIs when the Clipboard API isn't supported will be covered under [Feature detection](#feature-detection).

## Handling multiple file types <a href="#handling-multiple-file-types" class="w-headline-link">#</a>

Most implementations put multiple data formats on the clipboard for a single cut or copy operation. There are two reasons for this: as an app developer, you have no way of knowing the capabilities of the app that a user wants to copy text or images to, and many applications support pasting structured data as plain text. This is presented to users with an **Edit** menu item with a name such as **Paste and match style** or **Paste without formatting**.

The following example shows how to do this. This example uses `fetch()` to obtain image data, but it could also come from a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) or the [File System Access API](/file-system-access/).

    async function copy() {
      const image = await fetch('kitten.png').then(response => response.blob());
      const text = new Blob(['Cute sleeping kitten'], {type: 'text/plain'});
      const item = new ClipboardItem({
        'text/plain': text,
        'image/png': image
      });
      await navigator.clipboard.write([item]);
    }

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

Clipboard access has always presented a security concern for browsers. Without proper permissions, a page could silently copy all manner of malicious content to a user's clipboard that would produce catastrophic results when pasted. Imagine a web page that silently copies `rm -rf /` or a [decompression bomb image](http://www.aerasec.de/security/advisories/decompression-bomb-vulnerability.html) to your clipboard.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format" alt="The permission prompt for the Clipboard API." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Dt4QpuEuik9ja970Zos1.png?auto=format&amp;w=1600 1600w" width="800" height="338" /><figcaption>The permission prompt for the Clipboard API.</figcaption></figure>Giving web pages unfettered read access to the clipboard is even more troublesome. Users routinely copy sensitive information like passwords and personal details to the clipboard, which could then be read by any page without the user's knowledge.

As with many new APIs, the Clipboard API is only supported for pages served over HTTPS. To help prevent abuse, clipboard access is only allowed when a page is the active tab. Pages in active tabs can write to the clipboard without requesting permission, but reading from the clipboard always requires permission.

Permissions for copy and paste have been added to the [Permissions API](https://developers.google.com/web/updates/2015/04/permissions-api-for-the-web). The `clipboard-write` permission is granted automatically to pages when they are the active tab. The `clipboard-read` permission must be requested, which you can do by trying to read data from the clipboard. The code below shows the latter:

    const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
    const permissionStatus = await navigator.permissions.query(queryOpts);
    // Will be 'granted', 'denied' or 'prompt':
    console.log(permissionStatus.state);

    // Listen for changes to the permission state
    permissionStatus.onchange = () => {
      console.log(permissionStatus.state);
    };

You can also control whether a user gesture is required to invoke cutting or pasting using the `allowWithoutGesture` option. The default for this value varies by browser, so you should always include it.

Here's where the asynchronous nature of the Clipboard API really comes in handy: attempting to read or write clipboard data automatically prompts the user for permission if it hasn't already been granted. Since the API is promise-based, this is completely transparent, and a user denying clipboard permission causes the promise to reject so the page can respond appropriately.

Because Chrome only allows clipboard access when a page is the active tab, you'll find that some of the examples here don't run if pasted directly into DevTools, since DevTools itself is the active tab. There's a trick: defer clipboard access using `setTimeout()`, then quickly click inside the page to focus it before the functions are called:

    setTimeout(async () => {
      const text = await navigator.clipboard.readText();
      console.log(text);
    }, 2000);

## Permissions policy integration <a href="#permissions-policy-integration" class="w-headline-link">#</a>

To use the API in iframes, you need to enable it with [Permissions Policy](https://w3c.github.io/webappsec-permissions-policy/), which defines a mechanism that allows for selectively enabling and disabling various browser features and APIs. Concretely, you need to pass either or both of `clipboard-read` or `clipboard-write`, depending on the needs of your app.

    <iframe
        src="index.html"
        allow="clipboard-read; clipboard-write"
    >
    </iframe>

## Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To use the Async Clipboard API while supporting all browsers, test for `navigator.clipboard` and fall back to earlier methods. For example, here's how you might implement pasting to include other browsers.

    document.addEventListener('paste', async (e) => {
      e.preventDefault();
      let text;
      if (navigator.clipboard) {
        text = await navigator.clipboard.readText();
      }
      else {
        text = e.clipboardData.getData('text/plain');
      }
      console.log('Got pasted text: ', text);
    });

That's not the whole story. Before the Async Clipboard API, there were a mix of different copy and paste implementations across web browsers. In most browsers, the browser's own copy and paste can be triggered using `document.execCommand('copy')` and `document.execCommand('paste')`. If the text to be copied is a string not present in the DOM, it must be injected into the DOM and selected:

    button.addEventListener('click', (e) => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.value = text;
      input.focus();
      input.select();
      const result = document.execCommand('copy');
      if (result === 'unsuccessful') {
        console.error('Failed to copy text.');
      }
    });

In Internet Explorer, you can also access the clipboard through `window.clipboardData`. If accessed within a user gesture such as a click event—part of asking permission responsibly—no permissions prompt is shown.

## Demos <a href="#demos" class="w-headline-link">#</a>

You can play with the Async Clipboard API in the demos below or [directly on Glitch](https://async-clipboard-api.glitch.me/).

The first example demonstrates moving text on and off the clipboard.

To try the API with images use this demo. Recall that only PNGs are supported and only in [a few browsers](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility).

## Next Steps <a href="#next-steps" class="w-headline-link">#</a>

Chrome is actively working on expanding the Asynchronous Clipboard API with simplified events aligned with the [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API). Because of potential risks Chrome is treading carefully. To stay up to date on Chrome's progress, watch this article and our [blog](/blog/) for updates.

For now, support for the Clipboard API is available in [a number of browsers](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#Browser_compatibility).

Happy copying and pasting!

## Related links <a href="#related-links" class="w-headline-link">#</a>

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The Asynchronous Clipboard API was implemented by [Darwin Huang](https://www.linkedin.com/in/darwinhuang/) and [Gary Kačmarčík](https://www.linkedin.com/in/garykac/). Darwin also provided the demo. Thanks to [Kyarik](https://github.com/kyarik) and again Gary Kačmarčík for reviewing parts of this article.

Hero image by [Markus Winkler](https://unsplash.com/@markuswinkler) on [Unsplash](https://unsplash.com/photos/7iSEHWsxPLw).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/async-clipboard/index.md)

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
