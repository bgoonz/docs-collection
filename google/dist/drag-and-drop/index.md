<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#using-the-html5-drag-and-drop-api" class="w-toc__header--link">Using the HTML5 Drag and Drop API</a>

- [Creating draggable content](#creating-draggable-content)
- [Listening for dragging events](#listening-for-dragging-events)
- [Starting and ending a drag and drop sequence](#starting-and-ending-a-drag-and-drop-sequence)
- [Add additional visual cues with dragenter, dragover, and dragleave](#add-additional-visual-cues-with-dragenter-dragover-and-dragleave)
- [Completing the drop](#completing-the-drop)
- [More dragging properties](#more-dragging-properties)
- [File upload with drag and drop](#file-upload-with-drag-and-drop)
- [More resources](#more-resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Using the HTML5 Drag and Drop API

Sep 30, 2010 <span class="w-author__separator">•</span> Updated Jul 29, 2020

[<img src="https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Eric Bidelman" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ACrLFM1rLlaY2fzUTeXl.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/ericbidelman/)

<a href="/authors/ericbidelman/" class="w-author__name-link">Eric Bidelman</a>

- <a href="https://twitter.com/ebidel" class="w-author__link">Twitter</a>

[<img src="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rachel Andrew" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rachelandrew/)

<a href="/authors/rachelandrew/" class="w-author__name-link">Rachel Andrew</a>

- <a href="https://twitter.com/rachelandrew" class="w-author__link">Twitter</a>
- <a href="https://github.com/rachelandrew" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rachelandrew" class="w-author__link">Glitch</a>
- <a href="https://rachelandrew.co.uk/" class="w-author__link">Blog</a>

The HTML5 Drag and Drop (DnD) API means that we can make almost any element on our page draggable. In this post we'll explain the basics of Drag and Drop.

## Creating draggable content <a href="#creating-draggable-content" class="w-headline-link">#</a>

It's worth noting that in most browsers, text selections, images, and links are draggable by default. For example, if you drag the Google logo on [Google Search](https://google.com) you will see the ghost image. The image can then be dropped in the address bar, an `<input type="file" />` element, or even the desktop. To make other types of content draggable you need to use the HTML5 DnD APIs.

To make an object draggable set `draggable=true` on that element. Just about anything can be drag-enabled, images, files, links, files, or any markup on your page.

In our example we're creating an interface to rearrange some columns, which have been laid out with CSS Grid. The basic markup for my columns looks like this, with each column having the `draggable` attribute set to `true`.

    <div class="container">
      <div draggable="true" class="box">A</div>
      <div draggable="true" class="box">B</div>
      <div draggable="true" class="box">C</div>
    </div>

Here's the CSS for my container and box elements. Note that the only CSS related to DnD functionality is the [`cursor: move`](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) property. The rest of the code just controls the layout and styling of the container and box elements.

    .container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }

    .box {
      border: 3px solid #666;
      background-color: #ddd;
      border-radius: .5em;
      padding: 10px;
      cursor: move;
    }

At this point you will find that you can drag the items, however nothing else will happen. To add the DnD functionality we need to use the JavaScript API.

## Listening for dragging events <a href="#listening-for-dragging-events" class="w-headline-link">#</a>

There are a number of different events to attach to for monitoring the entire drag and drop process.

- [`dragstart`](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event)
- [`drag`](https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event)
- [`dragenter`](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event)
- [`dragleave`](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragleave_event)
- [`dragover`](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event)
- [`drop`](https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event)
- [`dragend`](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragend_event)

To handle the DnD flow, you need some kind of source element (where the drag originates), the data payload (what you're trying to drop), and a target (an area to catch the drop). The source element can be an image, list, link, file object, block of HTML, etc. The target is the drop zone (or set of drop zones) that accepts the data the user is trying to drop. Keep in mind that not all elements can be targets, for example an image can't be a target.

## Starting and ending a drag and drop sequence <a href="#starting-and-ending-a-drag-and-drop-sequence" class="w-headline-link">#</a>

Once you have `draggable="true"` attributes defined on your content, attach a `dragstart` event handler to kick off the DnD sequence for each column.

This code will set the column's opacity to 40% when the user begins dragging it, then return it to 100% when the dragging event ends.

    function handleDragStart(e) {
        this.style.opacity = '0.4';
      }

      function handleDragEnd(e) {
        this.style.opacity = '1';
      }

      let items = document.querySelectorAll('.container .box');
      items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragend', handleDragEnd, false);
      });

The result can be seen in the Glitch demo below. Drag an item and it becomes opaque. As the `dragstart` event's target is the source element, setting `this.style.opacity` to 40% gives the user visual feedback that the element is the current selection being moved. Once you drop the item, although the drop functionality is not in place, the source element returns to 100% opacity.

## Add additional visual cues with `dragenter`, `dragover`, and `dragleave` <a href="#add-additional-visual-cues-with-dragenter-dragover-and-dragleave" class="w-headline-link">#</a>

To help the user understand how to interact with your interface, use the `dragenter`, `dragover` and `dragleave` event handlers. In this example the columns are drop targets in addition to being draggable. Help the user to understand this by making the border dashed as they hold a dragged item over a column. For example, in your CSS you might create an `over` class to represent elements that are drop targets:

    .box.over {
      border: 3px dotted #666;
    }

Then, in your JavaScript set up the event handlers, add the `over` class when the column is dragged over, and remove it when we leave. In the `dragend` handler we also make sure to remove the classes at the end of the drag.

    document.addEventListener('DOMContentLoaded', (event) => {

      function handleDragStart(e) {
        this.style.opacity = '0.4';
      }

      function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
          item.classList.remove('over');
        });
      }

      function handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        return false;
      }

      function handleDragEnter(e) {
        this.classList.add('over');
      }

      function handleDragLeave(e) {
        this.classList.remove('over');
      }

      let items = document.querySelectorAll('.container .box');
      items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('dragend', handleDragEnd, false);
      });
    });

There are a couple of points worth covering in this code:

- In the case of dragging something like a link, you need to prevent the browser's default behavior, which is to navigate to that link. To do this, call `e.preventDefault()` in the `dragover` event. Another good practice is to return `false` in that same handler.
- The `dragenter` event handler is used to toggle the `over` class instead of `dragover`. If you use `dragover`, the CSS class would be toggled many times as the event `dragover` continued to fire on a column hover. Ultimately, that would cause the browser's renderer to do a large amount of unnecessary work. Keeping redraws to a minimum is always a good idea. If you need to use the `dragover` event for something, consider [throttling or debouncing your event listener](https://css-tricks.com/debouncing-throttling-explained-examples/).

## Completing the drop <a href="#completing-the-drop" class="w-headline-link">#</a>

To process the actual drop, add an event listener for the `drop` event. In the `drop` handler, you'll need to prevent the browser's default behavior for drops, which is typically some sort of annoying redirect. You can prevent the event from bubbling up the DOM by calling `e.stopPropagation()`.

    function handleDrop(e) {
      e.stopPropagation(); // stops the browser from redirecting.
      return false;
    }

If you run the code at this point, the item will not drop to the new location. To achieve this you need to use the [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) object.

The `dataTransfer` property is where all the DnD magic happens. It holds the piece of data sent in a drag action. `dataTransfer` is set in the `dragstart` event and read/handled in the drop event. Calling `e.dataTransfer.setData(mimeType, dataPayload)` lets you set the object's MIME type and data payload.

In this example, we're going to allow users to rearrange the order of the columns. To do that, first you need to store the source element's HTML when the drag starts:

    function handleDragStart(e) {
      this.style.opacity = '0.4';

      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }

In the `drop` event you process the column drop, setting the source column's HTML to the HTML of the target column that you dropped on, first checking that the user is not dropping back onto the same column they dragged from.

    function handleDrop(e) {
      e.stopPropagation();

      if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }

      return false;
    }

You can see the result in the following demo. Drag and release the A column on top of the B column and notice how they change places:

## More dragging properties <a href="#more-dragging-properties" class="w-headline-link">#</a>

The `dataTransfer` object exposes properties to provide visual feedback to the user during the drag process. These properties can also be used to control how each drop target responds to a particular data type.

- [`dataTransfer.effectAllowed`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed) restricts what 'type of drag' the user can perform on the element. It is used in the drag-and-drop processing model to initialize the `dropEffect` during the `dragenter` and `dragover` events. The property can be set to the following values: `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all`, and `uninitialized`.
- [`dataTransfer.dropEffect`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect) controls the feedback that the user is given during the `dragenter` and `dragover` events. When the user hovers over a target element, the browser's cursor will indicate what type of operation is going to take place (e.g. a copy, a move, etc.). The effect can take on one of the following values: `none`, `copy`, `link`, `move`.
- [`e.dataTransfer.setDragImage(imgElement, x, y)`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage) means that instead of using the browser's default 'ghost image' feedback, you can optionally set a drag icon.

## File upload with drag and drop <a href="#file-upload-with-drag-and-drop" class="w-headline-link">#</a>

This simple example uses a column as both the drag source and drag target. This might be seen in a UI where the user is asked to rearrange the items. In some situations the drag target and source may be different, such as an interface where the user needs to select one image to be the main image for a product by dragging the selected image onto a target.

Drag and Drop is frequently used to allow users to drag items from their desktop into an application. The main difference is in your `drop` handler. Instead of using `dataTransfer.getData()` to access the files, their data will be contained in the `dataTransfer.files` property:

    function handleDrop(e) {
      e.stopPropagation(); // Stops some browsers from redirecting.
      e.preventDefault();

      var files = e.dataTransfer.files;
      for (var i = 0, f; f = files[i]; i++) {
        // Read the File objects in this FileList.
      }
    }

You can find more information about this in [Custom drag-and-drop](/read-files/#select-dnd).

## More resources <a href="#more-resources" class="w-headline-link">#</a>

- [The Drag and Drop Specification](https://html.spec.whatwg.org/multipage/dnd.html#dnd)
- [MDN HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [How To Make A Drag-and-Drop File Uploader With Vanilla JavaScript](https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/)
- [Creating a Parking Game With the HTML Drag and Drop API](https://css-tricks.com/creating-a-parking-game-with-the-html-drag-and-drop-api/)
- [How To Use The HTML Drag-and-Drop API In React](https://www.smashingmagazine.com/2020/02/html-drag-drop-api-react/)

<a href="/tags/html/" class="w-chip">HTML</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/file-system/" class="w-chip">File System</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/drag-and-drop/index.md)

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
