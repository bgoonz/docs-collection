<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format" alt="Cat contemplating how to fix a leak" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Dnk2j14tUTNqqSYN8FHj.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#detached-window-memory-leaks" class="w-toc__header--link">Detached window memory leaks</a>

- [What's a memory leak in JavaScript?](#whats-a-memory-leak)
- [What's a detached window?](#whats-a-detached-window)
- [How detached windows cause memory leaks](#how-detached-windows-cause-leaks)
- [Detecting memory leaks caused by detached windows](#detect-leaks)
- [Measure memory programmatically](#measure-memory)
- [Solutions for avoiding detached window leaks](#solutions)
- [Example: Closing a popup](#solution-example)
- [Solution: Unset references](#solution-unset-references)
- [Solution: Monitor and dispose](#solution-monitor-dispose)
- [Solution: Use WeakRef](#solution-weakref)
- [Solution: Communicate over postMessage](#solution-postmessage)
- [Solution: Avoid references using noopener](#solution-noopener)
- [Feedback](#feedback)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Detached window memory leaks

Find and fix tricky memory leaks caused by detached windows.

Sep 29, 2020

[<img src="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jason Miller" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/developit/)

<a href="/authors/developit/" class="w-author__name-link">Jason Miller</a>

- <a href="https://twitter.com/_developit" class="w-author__link">Twitter</a>
- <a href="https://github.com/developit" class="w-author__link">GitHub</a>
- <a href="https://jasonformat.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/T5PegmVyKW3nxjuHZF14.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Bartek Nowierski" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/T5PegmVyKW3nxjuHZF14.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/T5PegmVyKW3nxjuHZF14.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/T5PegmVyKW3nxjuHZF14.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/T5PegmVyKW3nxjuHZF14.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/T5PegmVyKW3nxjuHZF14.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/bartekn/)

<a href="/authors/bartekn/" class="w-author__name-link">Bartek Nowierski</a>

## What's a memory leak in JavaScript? <a href="#whats-a-memory-leak" class="w-headline-link">#</a>

A memory leak is an unintentional increase in the amount of memory used by an application over time. In JavaScript, memory leaks happen when objects are no longer needed, but are still referenced by functions or other objects. These references prevent the unneeded objects from being reclaimed by the garbage collector.

The job of the garbage collector is to identify and reclaim objects that are no longer reachable from the application. This works even when objects reference themselves, or cyclically reference each other–once there are no remaining references through which an application could access a group of objects, it can be garbage collected.

    let A = {};
    console.log(A); // local variable reference

    let B = {A}; // B.A is a second reference to A

    A = null; // unset local variable reference

    console.log(B.A); // A can still be referenced by B

    B.A = null; // unset B's reference to A

    // No references to A are left. It can be garbage collected.

A particularly tricky class of memory leak occurs when an application references objects that have their own lifecycle, like DOM elements or popup windows. It's possible for these types of objects to become unused without the application knowing, which means application code may have the only remaining references to an object that could otherwise be garbage collected.

## What's a detached window? <a href="#whats-a-detached-window" class="w-headline-link">#</a>

In the following example, a slideshow viewer application includes buttons to open and close a presenter notes popup. Imagine a user clicks **Show Notes**, then closes the popup window directly instead of clicking the **Hide Notes** button–the `notesWindow` variable still holds a reference to the popup that could be accessed, even though the popup is no longer in use.

    <button id="show">Show Notes</button>
    <button id="hide">Hide Notes</button>
    <script type="module">
      let notesWindow;
      document.getElementById('show').onclick = () => {
        notesWindow = window.open('/presenter-notes.html');
      };
      document.getElementById('hide').onclick = () => {
        if (notesWindow) notesWindow.close();
      };
    </script>

This is an example of a detached window. The popup window was closed, but our code has a reference to it that prevents the browser from being able to destroy it and reclaim that memory.

When a page calls `window.open()` to create a new browser window or tab, a [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object is returned that represents the window or tab. Even after such a window has been closed or the user has navigated it away, the `Window` object returned from `window.open()` can still be used to access information about it. This is one type of detached window: because JavaScript code can still potentially access properties on the closed `Window` object, it must be kept in memory. If the window included a lot of JavaScript objects or iframes, that memory can't be reclaimed until there are no remaining JavaScript references to the window's properties.

Using Chrome DevTools to demonstrate how it's possible to retain a document after a window has been closed.

The same issue can also occur when using `<iframe>` elements. Iframes behave like nested windows that contain documents, and their `contentWindow` property provides access to the contained `Window` object, much like the value returned by `window.open()`. JavaScript code can keep a reference to an iframe's `contentWindow` or `contentDocument` even if the iframe is removed from the DOM or its URL changes, which prevents the document from being garbage collected since its properties can still be accessed.

Demonstration of how an event handler can retain an iframe's document, even after navigating the iframe to a different URL.

In cases where a reference to the `document` within a window or iframe is retained from JavaScript, that document will be kept in-memory even if the containing window or iframe navigates to a new URL. This can be particularly troublesome when the JavaScript holding that reference doesn't detect that the window/frame has navigated to a new URL, since it doesn't know when it becomes the last reference keeping a document in memory.

## How detached windows cause memory leaks <a href="#how-detached-windows-cause-leaks" class="w-headline-link">#</a>

When working with windows and iframes on the same domain as the primary page, it's common to listen for events or access properties across document boundaries. For example, let's revisit a variation on the presentation viewer example from the beginning of this guide. The viewer opens a second window for displaying speaker notes. The speaker notes window listens for`click` events as its cue to move to the next slide. If the user closes this notes window, the JavaScript running in the original parent window still has full access to the speaker notes document:

    <button id="notes">Show Presenter Notes</button>
    <script type="module">
      let notesWindow;
      function showNotes() {
        notesWindow = window.open('/presenter-notes.html');
        notesWindow.document.addEventListener('click', nextSlide);
      }
      document.getElementById('notes').onclick = showNotes;

      let slide = 1;
      function nextSlide() {
        slide += 1;
        notesWindow.document.title = `Slide  ${slide}`;
      }
      document.body.onclick = nextSlide;
    </script>

Imagine we close the browser window created by `showNotes()` above. There's no event handler listening to detect that the window has been closed, so nothing is informing our code that it should clean up any references to the document. The `nextSlide()` function is still "live" because it is bound as a click handler in our main page, and the fact that `nextSlide` contains a reference to `notesWindow` means the window is still referenced and can't be garbage collected.

Illustration of how references to a window prevent it from being garbage collected once closed.

See [Solution: communicate over postMessage](#solution-communicate-over-postmessage) to learn how to fix this particular memory leak.

There are a number of other scenarios where references are accidentally retained that prevent detached windows from being eligible for garbage collection:

- Event handlers can be registered on an iframe's initial document prior to the frame navigating to its intended URL, resulting in accidental references to the document and the iframe persisting after other references have been cleaned up.

- A memory-heavy document loaded in a window or iframe can be accidentally kept in-memory long after navigating to a new URL. This is often caused by the parent page retaining references to the document in order to allow for listener removal.

- When passing a JavaScript object to another window or iframe, the Object's prototype chain includes references to the environment it was created in, including the window that created it. This means it's just as important to avoid holding references to objects from other windows as it is to avoid holding references to the windows themselves.

  index.html:

      <script>
        let currentFiles;
        function load(files) {
          // this retains the popup:
          currentFiles = files;
        }
        window.open('upload.html');
      </script>

  upload.html:

      <input type="file" id="file" />
      <script>
        file.onchange = () => {
          parent.load(file.files);
        };
      </script>

## Detecting memory leaks caused by detached windows <a href="#detect-leaks" class="w-headline-link">#</a>

Tracking down memory leaks can be tricky. It is often difficult to construct isolated reproductions of these issues, particularly when multiple documents or windows are involved. To make things more complicated, inspecting potential leaked references can end up creating additional references that prevent the inspected objects from being garbage collected. To that end, it's useful to start with tools that specifically avoid introducing this possibility.

A great place to start debugging memory problems is to [take a heap snapshot](https://developers.google.com/web/tools/chrome-devtools/memory-problems#discover_detached_dom_tree_memory_leaks_with_heap_snapshots). This provides a point-in-time view into the memory currently used by an application - all the objects that have been created but not yet garbage-collected. Heap snapshots contain useful information about objects, including their size and a list of the variables and closures that reference them.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format" alt="A heap snapshot showing the references that retain a large object." class="w-screenshot" sizes="(min-width: 762px) 762px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/4tBcZ7lZEqkmonijrOGa.png?auto=format&amp;w=1524 1524w" width="762" height="419" /><figcaption>A heap snapshot showing the references that retain a large object.</figcaption></figure>To record a heap snapshot, head over to the **Memory** tab in Chrome DevTools and select **Heap Snapshot** in the list of available profiling types. Once the recording has finished, the **Summary** view shows current objects in-memory, grouped by constructor.

Demonstration of taking a heap snapshot in Chrome DevTools.

**Try it**! Open this [step-by-step walk through](https://detached-windows-test.glitch.me) in a new window.

Analyzing heap dumps can be a daunting task, and it can be quite difficult to find the right information as part of debugging. To help with this, Chromium engineers [yossik@](https://github.com/ykahlon) and [peledni@](https://github.com/peledni) developed a standalone [Heap Cleaner](https://github.com/ykahlon/heap-cleaner) tool that can help highlight a specific node like a detached window. Running Heap Cleaner on a trace removes other unnecessary information from the retention graph, which makes the trace cleaner and much easier to read.

### Measure memory programmatically <a href="#measure-memory" class="w-headline-link">#</a>

Heap snapshots provide a high level of detail and are excellent for figuring out where leaks occur, but taking a heap snapshot is a manual process. Another way to check for memory leaks is to obtain the currently used JavaScript heap size from the [`performance.memory` API](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory):

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format" alt="Checking the used JS heap size in DevTools as a popup is created, closed and unreferenced." sizes="(min-width: 621px) 621px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/TIypz58ucRgAnnNu1LwR.png?auto=format&amp;w=1242 1242w" width="621" height="394" /><figcaption>Checking the used JS heap size in DevTools as a popup is created, closed and unreferenced.</figcaption></figure>The `performance.memory` API only provides information about the JavaScript heap size, which means it doesn't include memory used by the popup's document and resources. To get the full picture, we'd need to use the new [`performance.measureUserAgentSpecificMemory()` API](/monitor-total-page-memory-usage/) currently being trialled in Chrome.

## Solutions for avoiding detached window leaks <a href="#solutions" class="w-headline-link">#</a>

The two most common cases where detached windows cause memory leaks are when the parent document retains references to a closed popup or removed iframe, and when unexpected navigation of a window or iframe results in event handlers never being unregistered.

### Example: Closing a popup <a href="#solution-example" class="w-headline-link">#</a>

The [unset references](#solution-unset-references), [monitor and dispose](#solution-monitor-dispose), and [WeakRef](#solution-weakref) solutions are all based off of this example.

In the following example, two buttons are used to open and close a popup window. In order for the **Close Popup** button to work, a reference to the opened popup window is stored in a variable:

    <button id="open">Open Popup</button>
    <button id="close">Close Popup</button>
    <script>
      let popup;
      open.onclick = () => {
        popup = window.open('/login.html');
      };
      close.onclick = () => {
        popup.close();
      };
    </script>

At first glance, it seems like the above code avoids common pitfalls: no references to the popup's document are retained, and no event handlers are registered on the popup window. However, once the **Open Popup** button is clicked the `popup` variable now references the opened window, and that variable is accessible from the scope of the **Close Popup** button click handler. Unless `popup` is reassigned or the click handler removed, that handler's enclosed reference to `popup` means it can't be garbage-collected.

### Solution: Unset references <a href="#solution-unset-references" class="w-headline-link">#</a>

Variables that reference another window or its document cause it to be retained in memory. Since objects in JavaScript are always references, assigning a new value to variables removes their reference to the original object. To "unset" references to an object, we can reassign those variables to the value `null`.

Applying this to the previous [popup example](#solution-example), we can modify the close button handler to make it "unset" its reference to the popup window:

    let popup;
    open.onclick = () => {
      popup = window.open('/login.html');
    };
    close.onclick = () => {
      popup.close();
      popup = null;
    };

This helps, but reveals a further problem specific to windows created using `open()`: what if the user closes the window instead of clicking our custom close button? Further still, what if the user starts browsing to other websites in the window we opened? While it originally seemed sufficient to unset the `popup` reference when clicking our close button, there is still a memory leak when users don't use that particular button to close the window. Solving this requires detecting these cases in order to unset lingering references when they occur.

### Solution: Monitor and dispose <a href="#solution-monitor-dispose" class="w-headline-link">#</a>

In many situations, the JavaScript responsible for opening windows or creating frames does not have exclusive control over their lifecycle. Popups can be closed by the user, or navigation to a new document can cause the document previously contained by a window or frame to become detached. In both cases, the browser fires an `pagehide` event to signal that the document is being unloaded.

**Caution**: There's another event called`unload` which is similar to`pagehide` but is considered harmful and should be avoided as much as possible. See [Legacy lifecycle APIs to avoid: the unload event](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event) for details.

The `pagehide` event can be used to detect closed windows and navigation away from the current document. However, there is one important caveat: all newly-created windows and iframes contain an empty document, then asynchronously navigate to the given URL if provided. As a result, an initial `pagehide` event is fired shortly after creating the window or frame, just before the target document has loaded. Since our reference cleanup code needs to run when the _target_ document is unloaded, we need to ignore this first `pagehide` event. There are a number of techniques for doing so, the simplest of which is to ignore pagehide events originating from the initial document's `about:blank` URL. Here's how it would look in our [popup example](#solution-example):

    let popup;
    open.onclick = () => {
      popup = window.open('/login.html');

      // listen for the popup being closed/exited:
      popup.addEventListener('pagehide', () => {
        // ignore initial event fired on "about:blank":
        if (!popup.location.host) return;

        // remove our reference to the popup window:
        popup = null;
      });
    };

It's important to note that this technique only works for windows and frames that have the same effective origin as the parent page where our code is running. When loading content from a different origin, both `location.host` and the `pagehide` event are unavailable for security reasons. While it's generally best to avoid keeping references to other origins, in the rare cases where this is required it is possible to monitor the `window.closed` or `frame.isConnected` properties. When these properties change to indicate a closed window or removed iframe, it's a good idea to unset any references to it.

    let popup = window.open('https://example.com');
    let timer = setInterval(() => {
      if (popup.closed) {
        popup = null;
        clearInterval(timer);
      }
    }, 1000);

### Solution: Use WeakRef <a href="#solution-weakref" class="w-headline-link">#</a>

`WeakRef` is a new feature of the JavaScript language, [available in desktop Firefox since version 79](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#Browser_compatibility) and [Chromium-based browsers since version 84](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#Browser_compatibility). Since it's not yet widely-supported, this solution is better suited to tracking down and debugging issues rather than fixing them for production.

JavaScript recently gained support for a new way to reference objects that allows garbage collection to take place, called [`WeakRef`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef). A `WeakRef` created for an object is not a direct reference, but rather a separate object that provides a special `.deref()` method that returns a reference to the object as long as it has not been garbage-collected. With `WeakRef`, it is possible to access the current value of a window or document while still allowing it to be garbage collected. Instead of retaining a reference to the window that must be manually unset in response to events like `pagehide` or properties like `window.closed`, access to the window is obtained as-needed. When the window is closed, it can be garbage collected, causing the `.deref()` method to begin returning `undefined`.

    <button id="open">Open Popup</button>
    <button id="close">Close Popup</button>
    <script>
      let popup;
      open.onclick = () => {
        popup = new WeakRef(window.open('/login.html'));
      };
      close.onclick = () => {
        const win = popup.deref();
        if (win) win.close();
      };
    </script>

One interesting detail to consider when using `WeakRef` to access windows or documents is that the reference generally remains available for a short period of time after the window is closed or iframe removed. This is because `WeakRef` continues returning a value until its associated object has been garbage-collected, which happens asynchronously in JavaScript and generally during idle time. Thankfully, when checking for detached windows in the Chrome DevTools **Memory** panel, taking a heap snapshot actually triggers garbage collection and disposes the weakly-referenced window. It's also possible to check that an object referenced via `WeakRef` has been disposed from JavaScript, either by detecting when `deref()` returns `undefined` or using the new [`FinalizationRegistry` API](https://v8.dev/features/weak-references#:~:text=FinalizationRegistry):

    let popup = new WeakRef(window.open('/login.html'));

    // Polling deref():
    let timer = setInterval(() => {
      if (popup.deref() === undefined) {
        console.log('popup was garbage-collected');
        clearInterval(timer);
      }
    }, 20);

    // FinalizationRegistry API:
    let finalizers = new FinalizationRegistry(() => {
      console.log('popup was garbage-collected');
    });
    finalizers.register(popup.deref());

### Solution: Communicate over `postMessage` <a href="#solution-postmessage" class="w-headline-link">#</a>

Detecting when windows are closed or navigation unloads a document gives us a way to remove handlers and unset references so that detached windows can be garbage collected. However, these changes are specific fixes for what can sometimes be a more fundamental concern: direct coupling between pages.

A more holistic alternative approach is available that avoids stale references between windows and documents: establishing separation by limiting cross-document communication to [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). Thinking back to our original presenter notes example, functions like `nextSlide()` updated the notes window directly by referencing it and manipulating its content. Instead, the primary page could pass the necessary information to the notes window asynchronously and indirectly over `postMessage()`.

    let updateNotes;
    function showNotes() {
      // keep the popup reference in a closure to prevent outside references:
      let win = window.open('/presenter-view.html');
      win.addEventListener('pagehide', () => {
        if (!win || !win.location.host) return; // ignore initial "about:blank"
        win = null;
      });
      // other functions must interact with the popup through this API:
      updateNotes = (data) => {
        if (!win) return;
        win.postMessage(data, location.origin);
      };
      // listen for messages from the notes window:
      addEventListener('message', (event) => {
        if (event.source !== win) return;
        if (event.data[0] === 'nextSlide') nextSlide();
      });
    }
    let slide = 1;
    function nextSlide() {
      slide += 1;
      // if the popup is open, tell it to update without referencing it:
      if (updateNotes) {
        updateNotes(['setSlide', slide]);
      }
    }
    document.body.onclick = nextSlide;

While this still requires the windows to reference each other, neither retains a reference to the current _document_ from another window. A message-passing approach also encourages designs where window references are held in a single place, meaning only a single reference needs to be unset when windows are closed or navigate away. In the above example, only `showNotes()` retains a reference to the notes window, and it uses the `pagehide` event to ensure that reference is cleaned up.

### Solution: Avoid references using `noopener` <a href="#solution-noopener" class="w-headline-link">#</a>

In cases where a popup window is opened that your page doesn't need to communicate with or control, you may be able to avoid ever obtaining a reference to the window. This is particularly useful when creating windows or iframes that will load content from another site. For these cases, `window.open()` accepts a [`"noopener"` option](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#noopener) that works just like the [`rel="noopener"` attribute](/external-anchors-use-rel-noopener/) for HTML links:

    window.open('https://example.com/share', null, 'noopener');

The `"noopener"` option causes `window.open()` to return `null`, making it impossible to accidentally store a reference to the popup. It also prevents the popup window from getting a reference to its parent window, since the `window.opener` property will be `null`.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

Hopefully some of the suggestions in this article help with finding and fixing memory leaks. If you have another technique for debugging detached windows or this article helped uncover leaks in your app, I'd love to know! You can find me on Twitter [@\_developit](https://twitter.com/_developit).

<a href="/tags/memory/" class="w-chip">Memory</a> <a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Sep 29, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/detached-window-memory-leaks/index.md)

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
