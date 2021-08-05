<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format" alt="decorative shadow dome" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/IIPe5m8edvp0XMPpzrz9.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#declarative-shadow-dom" class="w-toc__header--link">Declarative Shadow DOM</a>

- [Building a Declarative Shadow Root](#building)
- [Serialization](#serialization)
- [Component hydration](#hydration)
- [One shadow per root](#shadow-per-root)
- [Timing is everything](#timing)
- [Parser-only](#parser-only)
- [Server-rendering with style](#styling)
- [Avoiding the flash of unstyled content](#fouc)
- [Feature detection and browser support](#detection-support)
- [Polyfill](#polyfill)
- [Further Reading](#further-reading)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Declarative Shadow DOM

A new way to implement and use Shadow DOM directly in HTML.

Sep 30, 2020 <span class="w-author__separator">•</span> Updated Apr 14, 2021

[<img src="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jason Miller" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/bPCYfhUgxdCpXhKAWc9X.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/developit/)

<a href="/authors/developit/" class="w-author__name-link">Jason Miller</a>

- <a href="https://twitter.com/_developit" class="w-author__link">Twitter</a>
- <a href="https://github.com/developit" class="w-author__link">GitHub</a>
- <a href="https://jasonformat.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/t7E3inN3orEPpDUXSkXR.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Mason Freed" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/t7E3inN3orEPpDUXSkXR.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/t7E3inN3orEPpDUXSkXR.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/t7E3inN3orEPpDUXSkXR.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/t7E3inN3orEPpDUXSkXR.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/t7E3inN3orEPpDUXSkXR.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/masonfreed/)

<a href="/authors/masonfreed/" class="w-author__name-link">Mason Freed</a>

- <a href="https://twitter.com/Mfreed777" class="w-author__link">Twitter</a>
- <a href="https://github.com/mfreed7" class="w-author__link">GitHub</a>

Declarative Shadow DOM is a proposed web platform feature that the Chrome team is looking for feedback on. Try it out using the [experimental flag](#detection-support) or [polyfill](#polyfill).

[Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom) is one of the three Web Components standards, rounded out by [HTML templates](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) and [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). Shadow DOM provides a way to scope CSS styles to a specific DOM subtree and isolate that subtree from the rest of the document. The `<slot>` element gives us a way to control where the children of a Custom Element should be inserted within its Shadow Tree. These features combined enable a system for building self-contained, reusable components that integrate seamlessly into existing applications just like a built-in HTML element.

Until now, the only way to use Shadow DOM was to construct a shadow root using JavaScript:

    const host = document.getElementById('host');
    const shadowRoot = host.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>';

An imperative API like this works fine for client-side rendering: the same JavaScript modules that define our Custom Elements also create their Shadow Roots and set their content. However, many web applications need to render content server-side or to static HTML at build time. This can be an important part of delivering a reasonable experience to visitors who may not be capable of running JavaScript.

The justifications for [Server-Side Rendering](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) (SSR) vary from project to project. Some websites must provide fully functional server-rendered HTML in order to meet accessibility guidelines, others choose to deliver a baseline no-JavaScript experience as a way to guarantee good performance on slow connections or devices.

Historically, it has been difficult to use Shadow DOM in combination with Server-Side Rendering because there was no built-in way to express Shadow Roots in the server-generated HTML. There are also performance implications when attaching Shadow Roots to DOM elements that have already been rendered without them. This can cause layout shifting after the page has loaded, or temporarily show a flash of unstyled content ("FOUC") while loading the Shadow Root's stylesheets.

[Declarative Shadow DOM](https://github.com/mfreed7/declarative-shadow-dom/blob/master/README.md) (DSD) removes this limitation, bringing Shadow DOM to the server.

## Building a Declarative Shadow Root <a href="#building" class="w-headline-link">#</a>

A Declarative Shadow Root is a `<template>` element with a `shadowroot` attribute:

    <host-element>
      <template shadowroot="open">
        <slot></slot>
      </template>
      <h2>Light content</h2>
    </host-element>

A template element with the `shadowroot` attribute is detected by the HTML parser and immediately applied as the shadow root of its parent element. Loading the pure HTML markup from the above sample results in the following DOM tree:

    <host-element>
      #shadow-root (open)
      <slot>
        ↳
        <h2>Light content</h2>
      </slot>
    </host-element>

This code sample is following the Chrome DevTools Elements panel's conventions for displaying Shadow DOM content. For example, the `↳` character represents slotted Light DOM content.

This gives us the benefits of Shadow DOM's encapsulation and slot projection in static HTML. No JavaScript is needed to produce the entire tree, including the Shadow Root.

## Serialization <a href="#serialization" class="w-headline-link">#</a>

In addition to introducing the new `<template>` syntax for creating shadow roots and attaching them to elements, Declarative Shadow Dom also includes a new API for getting the HTML contents of an element. The new `getInnerHTML()` method works like `.innerHTML`, but provides an option to control whether shadow roots should be included in the returned HTML:

    const html = element.getInnerHTML({includeShadowRoots: true});
    `<host-element>
      <template shadowroot="open"><slot></slot></template>
      <h2>Light content</h2>
    </host-element>`;

Passing the `includeShadowRoots:true` option serializes the entire subtree of an element, **including its shadow roots**. The included shadow roots are serialized using the `<template shadowroot>` syntax.

In order to preserve encapsulation semantics, any [closed shadow roots](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode) within an element will not be serialized by default. To include closed shadow roots in the serialized HTML, an array of references to those shadow roots can be passed via a new `closedRoots` option:

    const html = element.getInnerHTML({
      includeShadowRoots: true,
      closedRoots: [shadowRoot1, shadowRoot2, ...]
    });

When serializing the HTML within an element, any closed shadow roots that are present in the `closedRoots` array will be serialized using the same template syntax as open shadow roots:

    <host-element>
      <template shadowroot="closed">
        <slot></slot>
      </template>
      <h2>Light content</h2>
    </host-element>

Serialized closed shadow roots are indicated by a `shadowroot` attribute with a value of `closed`.

## Component hydration <a href="#hydration" class="w-headline-link">#</a>

Declarative Shadow DOM can be used on its own as a way to encapsulate styles or customize child placement, but it's most powerful when used with Custom Elements. Components built using Custom Elements get automatically upgraded from static HTML. With the introduction of Declarative Shadow DOM, it's now possible for a Custom Element to have a shadow root before it gets upgraded.

A Custom Element being upgraded from HTML that includes a Declarative Shadow Root will already have that shadow root attached. This means the element will have a `shadowRoot` property already available when it is instantiated, without your code explicitly creating one. It's best to check `this.shadowRoot` for any existing shadow root in your element's constructor. If there is already a value, the HTML for this component included a Declarative Shadow Root. If the value is null, there was no Declarative Shadow Root present in the HTML or the browser doesn't support Declarative Shadow DOM.

    <menu-toggle>
      <template shadowroot="open">
        <button>
          <slot></slot>
        </button>
      </template>
      Open Menu
    </menu-toggle>

    <script>
      class MenuToggle extends HTMLElement {
        constructor() {
          super();

          // Detect whether we have SSR content already:
          if (this.shadowRoot) {
            // A Declarative Shadow Root exists!
            // wire up event listeners, references, etc.:
            const button = this.shadowRoot.firstElementChild;
            button.addEventListener('click', toggle);
          } else {
            // A Declarative Shadow Root doesn't exist.
            // Create a new shadow root and populate it:
            const shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = `<button><slot></slot></button>`;
            shadow.firstChild.addEventListener('click', toggle);
          }
        }
      }

      customElements.define('menu-toggle', MenuToggle);
    </script>

Custom Elements have been around for a while, and until now there was no reason to check for an existing shadow root before creating one using `attachShadow()`. Declarative Shadow DOM includes a small change that allows existing components to work despite this: calling the `attachShadow()` method on an element with an existing **Declarative** Shadow Root will **not** throw an error. Instead, the Declarative Shadow Root is emptied and returned. This allows older components not built for Declarative Shadow DOM to continue working, since declarative roots are preserved until an imperative replacement is created.

For newly-created Custom Elements, a new [ElementInternals.shadowRoot](https://github.com/w3c/webcomponents/issues/871) property provides an explicit way to get a reference to an element's existing Declarative Shadow Root, both open and closed. This can be used to check for and use any Declarative Shadow Root, while still falling back to`attachShadow()` in cases where one was not provided.

    class MenuToggle extends HTMLElement {
      constructor() {
        super();

        const internals = this.attachInternals();

        // check for a Declarative Shadow Root:
        let shadow = internals.shadowRoot;
        if (!shadow) {
          // there wasn't one. create a new Shadow Root:
          shadow = this.attachShadow({mode: 'open'});
          shadow.innerHTML = `<button><slot></slot></button>`;
        }

        // in either case, wire up our event listener:
        shadow.firstChild.addEventListener('click', toggle);
      }
    }
    customElements.define('menu-toggle', MenuToggle);

## One shadow per root <a href="#shadow-per-root" class="w-headline-link">#</a>

A Declarative Shadow Root is only associated with its parent element. This means shadow roots are always colocated with their associated element. This design decision ensures shadow roots are streamable like the rest of an HTML document. It's also convenient for authoring and generation, since adding a shadow root to an element does not require maintaining a registry of existing shadow roots.

The tradeoff of associating shadow roots with their parent element is that it is not possible for multiple elements to be initialized from the same Declarative Shadow Root `<template>`. However, this is unlikely to matter in most cases where Declarative Shadow DOM is used, since the contents of each shadow root are seldom identical. While server-rendered HTML often contains repeated element structures, their content generally differs–slight variations in text, attributes, etc. Because the contents of a serialized Declarative Shadow Root are entirely static, upgrading multiple elements from a single Declarative Shadow Root would only work if the elements happened to be identical. Finally, the impact of repeated similar shadow roots on network transfer size is relatively small due to the effects of compression.

In the future, it might be possible to revisit shared shadow roots. If the DOM gains support for [built-in templating](https://w3c.github.io/webcomponents/proposals/Template-Instantiation.html), Declarative Shadow Roots could be treated as templates that are instantiated in order to construct the shadow root for a given element. The current Declarative Shadow DOM design allows for this possibility to exist in the future by limiting shadow root association to a single element.

## Timing is everything <a href="#timing" class="w-headline-link">#</a>

Associating Declarative Shadow Roots directly with their parent element simplifies the process of upgrading and attaching them to that element. Declarative Shadow Roots are detected during HTML parsing, and attached immediately when their **closing** `</template>` tag is encountered.

    <div id="el">
      <script>
        el.shadowRoot; // null
      </script>

      <template shadowroot="open">
        <!-- shadow realm -->
      </template>

      <script>
        el.shadowRoot; // ShadowRoot
      </script>
    </div>

Prior to being attached, the contents of a `<template>` element with the `shadowroot` attribute are an inert Document Fragment and are not accessible via the `.content` property like a standard template. This security measure prevents JavaScript from being able to obtain a reference to closed shadow roots. As a result, the contents of a Declarative Shadow Root are not rendered until its closing `</template>` tag is parsed.

    <div>
      <template id="shadow" shadowroot="open">
        shadow realm
        <script>
          shadow.content; // null
        </script>
      </template>
    </div>

## Parser-only <a href="#parser-only" class="w-headline-link">#</a>

Declarative Shadow DOM is a feature of the HTML parser. This means that a Declarative Shadow Root will only be parsed and attached for `<template>` tags with a `shadowroot` attribute that are present during HTML parsing. In other words, Declarative Shadow Roots can be constructed during initial HTML parsing:

    <some-element>
      <template shadowroot="open">
        shadow root content for some-element
      </template>
    </some-element>

Setting the `shadowroot` attribute of a `<template>` element does nothing, and the template remains an ordinary template element:

    const div = document.createElement('div');
    const template = document.createElement('template');
    template.setAttribute('shadowroot', 'open'); // this does nothing
    div.appendChild(template);
    div.shadowRoot; // null

To avoid some important security considerations, Declarative Shadow Roots also can't be created using fragment parsing APIs like `innerHTML` or `insertAdjacentHTML()`. The only way to parse HTML with Declarative Shadow Roots applied is to pass a new `includeShadowRoots` option to `DOMParser`:

    <script>
      const html = `
        <div>
          <template shadowroot="open"></template>
        </div>
      `;
      const div = document.createElement('div');
      div.innerHTML = html; // No shadow root here
      const fragment = new DOMParser().parseFromString(html, 'text/html', {
        includeShadowRoots: true
      }); // Shadow root here
    </script>

## Server-rendering with style <a href="#styling" class="w-headline-link">#</a>

Inline and external stylesheets are fully supported inside Declarative Shadow Roots using the standard `<style>` and `<link>` tags:

    <nineties-button>
      <template shadowroot="open">
        <style>
          button {
            color: seagreen;
          }
        </style>
        <link rel="stylesheet" href="/comicsans.css" />
        <button>
          <slot></slot>
        </button>
      </template>
      I'm Blue
    </nineties-button>

Styles specified this way are also highly optimized: if the same stylesheet is present in multiple Declarative Shadow Roots, it is only loaded and parsed once. The browser uses a single backing `CSSStyleSheet` that is shared by all of the shadow roots, eliminating duplicate memory overhead.

[Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) are not supported in Declarative Shadow DOM. This is because there is currently no way to serialize constructable stylesheets in HTML, and no way to refer to them when populating `adoptedStyleSheets`.

## Avoiding the flash of unstyled content <a href="#fouc" class="w-headline-link">#</a>

One potential issue in browsers that do not yet support Declarative Shadow DOM is avoiding "flash of unstyled content" (FOUC), where the raw contents are shown for Custom Elements that have not yet been upgraded. Prior to Declarative Shadow DOM, one common technique for avoiding FOUC was to apply a `display:none` style rule to Custom Elements that haven't been loaded yet, since these have not had their shadow root attached and populated. In this way, content is not displayed until it is "ready":

    <style>
      x-foo:not(:defined) > * {
        display: none;
      }
    </style>

With the introduction of Declarative Shadow DOM, Custom Elements can be rendered or authored in HTML such that their shadow content is in-place and ready before the client-side component implementation is loaded:

    <x-foo>
      <template shadowroot="open">
        <style>h2 { color: blue; }</style>
        <h2>shadow content</h2>
      </template>
    </x-foo>

In this case, the `display:none` "FOUC" rule would prevent the declarative shadow root's content from showing. However, removing that rule would cause browsers without Declarative Shadow DOM support to show incorrect or unstyled content until the Declarative Shadow DOM [polyfill](#polyfill) loads and converts the shadow root template into a real shadow root.

Fortunately, this can be solved in CSS by modifying the FOUC style rule. In browsers that support Declarative Shadow DOM, the `<template shadowroot>` element is immediately converted into a shadow root, leaving no `<template>` element in the DOM tree. Browsers that don't support Declarative Shadow DOM preserve the `<template>` element, which we can use to prevent FOUC:

    <style>
      x-foo:not(:defined) > template[shadowroot] ~ *  {
        display: none;
      }
    </style>

Instead of hiding the not-yet-defined Custom Element, the revised "FOUC" rule hides its _children_ when they follow a `<template shadowroot>` element. Once the Custom Element is defined, the rule no longer matches. The rule is ignored in browsers that support Declarative Shadow DOM because the `<template shadowroot>` child is removed during HTML parsing.

## Feature detection and browser support <a href="#detection-support" class="w-headline-link">#</a>

Declarative Shadow DOM is available in Chrome 90 and Edge 91. It can also be enabled using the **Experimental Web Platform Features** flag in Chrome 85. Navigate to `about://flags/#enable-experimental-web-platform-features` to find that setting.

As a new web platform API, Declarative Shadow DOM does not yet have widespread support across all browsers. Browser support can be detected by checking for the existence of a `shadowroot` property on the prototype of `HTMLTemplateElement`:

    function supportsDeclarativeShadowDOM() {
      return HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot');
    }

## Polyfill <a href="#polyfill" class="w-headline-link">#</a>

Building a simplified polyfill for Declarative Shadow DOM is relatively straightforward, since a polyfill doesn't need to perfectly replicate the timing semantics or parser-only characteristics that a browser implementation concerns itself with. To polyfill Declarative Shadow DOM, we can scan the DOM to find all `<template shadowroot>` elements, then convert them to attached Shadow Roots on their parent element. This process can be done once the document is ready, or triggered by more specific events like Custom Element lifecycles.

    document.querySelectorAll('template[shadowroot]').forEach(template => {
      const mode = template.getAttribute('shadowroot');
      const shadowRoot = template.parentNode.attachShadow({ mode });
      shadowRoot.appendChild(template.content);
      template.remove();
    });

## Further Reading <a href="#further-reading" class="w-headline-link">#</a>

- [Explainer with alternatives and performance analysis](https://github.com/mfreed7/declarative-shadow-dom/blob/master/README.md)
- [Chromestatus for Declarative Shadow DOM](https://www.chromestatus.com/feature/5191745052606464)
- [Intent to Prototype](https://groups.google.com/a/chromium.org/g/blink-dev/c/nJDc-1s3R9U/m/uCJKsEqpAwAJ)

<a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/html/" class="w-chip">HTML</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/rendering/" class="w-chip">Rendering</a>

<span class="w-mr--sm"> Last updated: Apr 14, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/declarative-shadow-dom/index.md)

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
