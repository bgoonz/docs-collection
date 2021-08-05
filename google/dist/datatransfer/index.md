<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/QDbWuORGDrUkKquHEeAU.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#breaking-down-barriers-using-the-datatransfer-api" class="w-toc__header--link">Breaking down barriers using the DataTransfer API</a>

- [Transferring data](#transferring-data)
- [Transfer using copy and paste](#transfer-using-copy-and-paste)
- [Custom data formats](#custom-data-formats)
- [Connecting the web](#connecting-the-web)
- [Concerns](#concerns)
- [Browser compatibility](#browser-compatibility)
- [Discoverability](#discoverability)
- [Accessibility](#accessibility)
- [Security and privacy](#security-and-privacy)
- [Getting started with the Transmat helper library](#getting-started-with-the-transmat-helper-library)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Breaking down barriers using the DataTransfer API

Enable the user to share data beyond the browser window.

Apr 21, 2021

[<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/1P2utnbQKi02S0iz4GUz.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jorik Tangelder" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/1P2utnbQKi02S0iz4GUz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/1P2utnbQKi02S0iz4GUz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/1P2utnbQKi02S0iz4GUz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/1P2utnbQKi02S0iz4GUz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/1P2utnbQKi02S0iz4GUz.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joriktangelder/)

<a href="/authors/joriktangelder/" class="w-author__name-link">Jorik Tangelder</a>

- <a href="https://twitter.com/jorikdelaporik" class="w-author__link">Twitter</a>
- <a href="https://github.com/jtangelder" class="w-author__link">GitHub</a>
- <a href="https://jorik.dev/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

You might have heard about the [DataTransfer API](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) before, that is part of the [HTML5 Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) and [Clipboard events](https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event). It can be used to transfer data between source and receiving targets. This API [ready to use](https://caniuse.com/mdn-api_datatransfer_setdata) in all modern desktop browsers.

The drag-drop and copy-paste interactions are often used for interactions within a page, transferring a simple text from A to B. But what is oftentimes overlooked is the ability to use these same interactions to go beyond the browser window.

Both the browser's built-in drag-and-drop as well as the copy-paste interactions can communicate with other (web) applications, not tied to any origin. The API has support for providing multiple data entries that can have different behaviors based on where data is transferred to. Your web application can send and receive the transferred data when listening to incoming events.

This capability can change the way we think about sharing and interoperability in web applications on desktop. Transferring data between applications doesn't need to rely on tightly coupled integrations anymore. Instead you can give the user the full control to transfer their data to wherever they would like.

An example of interactions that are possible with the DataTransfer API.

## Transferring data <a href="#transferring-data" class="w-headline-link">#</a>

To get started with transferring data, you'll need to implement drag-drop or copy-paste. The examples below show drag-drop interactions, but the process for copy-paste is similar. If you are unfamiliar with the Drag and Drop API, there's a great article [explaining HTML5 Drag and Drop](https://web.dev/drag-and-drop/) that details the ins and outs.

By providing [MIME-type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) keyed data, you are able to freely interact with external applications. Most WYSIWYG editors, text editors, and browsers respond to the "primitive" mime-types used in the example below.

    document.querySelector('#dragSource').addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', 'Foo bar');
      event.dataTransfer.setData('text/html', '<h1>Foo bar</h1>');
      event.dataTransfer.setData('text/uri-list', 'https://example.com');
    });

Receiving the data transfer works almost the same as providing it. Listen to the receiving events (`drop`, or `paste`) and read the keys. When dragging over an element, the browser only has access to the `type` keys of the data. The data itself can only be accessed after a drop.

    document.querySelector('#dropTarget').addEventListener('dragover', (event) => {
      console.log(event.dataTransfer.types);
      // Accept the drag-drop transfer.
      event.preventDefault();
    });

    document.querySelector('#dropTarget').addEventListener('drop', (event) => {
      // Log all the transferred data items to the console.
      for (let type of event.dataTransfer.types) {
        console.log({ type, data: event.dataTransfer.getData(type) });
      }
      event.preventDefault();
    });

Three MIME-types are widely supported across applications:

- **`text/html`:** Renders the HTML payload in `contentEditable` elements and rich text (WYSIWYG) editors like Google Docs, Microsoft Word, and others.
- **`text/plain:`** Sets the value of input elements, content of code editors, and the fallback from `text/html`.
- **`text/uri-list`:** Navigates to the URL when dropping on the URL bar or browser page. A URL shortcut will be created when dropping on a directory or the desktop.

The widespread adoption of `text/html` by WYSIWYG editors makes it very useful. Like in HTML documents, you can embed resources by using [Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) or publicly accessible URLs. This works well with exporting visuals (for example from a canvas) to editors like Google Docs.

    const redPixel = 'data:image/gif;base64,R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs=';
    const html = '<img src="' + redPixel + '" width="100" height="100" alt="" />';
    event.dataTransfer.setData('text/html', html);

### Transfer using copy and paste <a href="#transfer-using-copy-and-paste" class="w-headline-link">#</a>

For posterity, using the DataTransfer API with copy-paste interactions looks like the following. Notice that the `dataTransfer` property is named `clipboardData` for clipboard events.

    // Listen to copy-paste events on the document.
    document.addEventListener('copy', (event) => {
      const copySource = document.querySelector('#copySource');
      // Only copy when the `activeElement` (i.e., focused element) is,
      // or is within, the `copySource` element.
      if (copySource.contains(document.activeElement)) {
        event.clipboardData.setData('text/plain', 'Foo bar');
        event.preventDefault();
      }
    });

    document.addEventListener('paste', (event) => {
      const pasteTarget = document.querySelector('#pasteTarget');
      if (pasteTarget.contains(document.activeElement)) {
        const data = event.clipboardData.getData('text/plain');
        console.log(data);
      }
    });

## Custom data formats <a href="#custom-data-formats" class="w-headline-link">#</a>

You are not limited to the primitive MIME types, but can use any key to identify the transferred data. This can be useful for cross-browser interactions within your application. As shown below, you can transfer more complex data using the `JSON.stringify()` and `JSON.parse()` functions.

    document.querySelector('#dragSource').addEventListener('dragstart', (event) => {
      const data = { foo: 'bar' };
      event.dataTransfer.setData('my-custom-type', JSON.stringify(data));
    });

    document.querySelector('#dropTarget').addEventListener('dragover', (event) => {
      // Only allow dropping when our custom data is available.
      if (event.dataTransfer.types.includes('my-custom-type')) {
        event.preventDefault();
      }
    });

    document.querySelector('#dropTarget').addEventListener('drop', (event) => {
      if (event.dataTransfer.types.includes('my-custom-type')) {
        event.preventDefault();
        const dataString = event.dataTransfer.getData('my-custom-type');
        const data = JSON.parse(dataString);
        console.log(data);
      }
    });

## Connecting the web <a href="#connecting-the-web" class="w-headline-link">#</a>

While custom formats are great for communication between applications you have in your control, it also limits the user when transferring data to applications that aren't using your format. If you want to connect with third-party applications across the web, you need a universal data format.

The [JSON-LD](https://json-ld.org/) (Linked Data) standard is a great candidate for this. It is lightweight and easy to read from and write to in JavaScript. [Schema.org](https://schema.org) contains many predefined types that can be used, and custom schema definitions are an option as well.

    const data = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentLocation: 'Venice, Italy',
      contentUrl: 'venice.jpg',
      datePublished: '2010-08-08',
      description: 'I took this picture during our honey moon.',
      name: 'Canal in Venice',
    };
    event.dataTransfer.setData('application/ld+json', JSON.stringify(data));

When using the Schema.org types, you can start with the generic [Thing](https://schema.org/Thing) type, or use something closer to your use case like [Event](https://schema.org/Event), [Person](https://schema.org/Person), [MediaObject](https://schema.org/MediaObject), [Place](https://schema.org/Place), or even highly-specific types like [MedicalEntity](https://schema.org/MedicalEntity) if need be. When you use TypeScript, you can use the interface definitions from the [schema-dts](https://github.com/google/schema-dts) type definitions.

By transmitting and receiving JSON-LD data, you will support a more connected and open web. With applications speaking the same language, you can create deep integrations with external applications. There's no need for complicated API integrations; all the information that's needed is included in the transferred data.

Think of all the possibilities for transferring data between any (web) application with no restrictions: sharing events from a calendar to your favorite ToDo app, attaching virtual files to emails, sharing contacts. That would be great, right? This starts with you! 🙌

## Concerns <a href="#concerns" class="w-headline-link">#</a>

While the DataTransfer API is available today, there are some things to be aware of before integrating.

### Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

Desktop browsers all have great support for the technique described above, while mobile devices do not. The technique has been tested on all major browsers (Chrome, Edge, Firefox, Safari) and operating systems (Android, Chrome OS, iOS, macOS, Ubuntu Linux, and Windows), but unfortunately Android and iOS didn't pass the test. While browsers continue to develop, for now the technique is limited to desktop browsers only.

### Discoverability <a href="#discoverability" class="w-headline-link">#</a>

Drag-drop and copy-paste are system-level interactions when working on a desktop computer, with roots back to the first GUIs about 40 years ago. Think for example about how many times you have used these interactions for organizing files. On the web, this is not very common yet.

You will need to educate users about this new interaction, and come up with UX patterns to make this recognizable, especially for people whose experience with computers so far has been confined to mobile devices.

### Accessibility <a href="#accessibility" class="w-headline-link">#</a>

Drag-drop is not a very accessible interaction, but the DataTransfer API works with copy-paste, too. Make sure you listen to copy-paste events! It doesn't take much extra work, and your users will be grateful to you for adding it.

### Security and privacy <a href="#security-and-privacy" class="w-headline-link">#</a>

There are some security and privacy considerations you should be aware of when using the technique.

- Clipboard data is available to other applications on the user's device.
- Web applications you are dragging over have access to the type keys, not the data. The data only becomes available on drop or paste.
- The received data should be treated like any other user input; sanitize and validate before using.

## Getting started with the Transmat helper library <a href="#getting-started-with-the-transmat-helper-library" class="w-headline-link">#</a>

Are you excited about using the DataTransfer API in your application? Consider taking a look at the [Transmat library on GitHub](https://google.github.io/transmat). This open-source library aligns browser differences, provides JSON-LD utilities, contains an observer to respond to transfer events for highlighting drop-areas, and lets you integrate the data transfer operations among existing drag and drop implementations.

    import { Transmat, TransmatObserver, addListeners } from 'transmat';

    // Send data on drag/copy.
    addListeners(myElement, 'transmit', (event) => {
      const transmat = new Transmat(event);
      transmat.setData({
        'text/plain': 'Foobar',
        'application/json': { foo: 'bar' },
      });
    });

    // Receive data on drop/paste.
    addListeners(myElement, 'receive', (event) => {
      const transmat = new Transmat(event);
      if (transmat.hasType('application/json') && transmat.accept()) {
        const data = JSON.parse(transmat.getData('application/json'));
      }
    });

    // Observe transfer events and highlight drop areas.
    const obs = new TransmatObserver((entries) => {
      for (const entry of entries) {
        const transmat = new Transmat(entry.event);
        if (transmat.hasMimeType('application/json')) {
          entry.target.classList.toggle('drag-over', entry.isTarget);
          entry.target.classList.toggle('drag-active', entry.isActive);
        }
      }
    });
    obs.observe(myElement);

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Hero image by [Luba Ertel](https://unsplash.com/@ertelier) on [Unsplash](https://unsplash.com/photos/WlL8aHeMcVM).

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: Apr 21, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/datatransfer/index.md)

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
