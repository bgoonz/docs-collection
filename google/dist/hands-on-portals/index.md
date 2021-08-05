<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format" alt="A logo of Portals" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/7hJbSWnhhE1lRVHJOWI9.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#hands-on-with-portals:-seamless-navigation-on-the-web" class="w-toc__header--link">Hands-on with Portals: seamless navigation on the web</a>

- [What Portals enable](#what-portals-enable)
- [Try out Portals](#try-out-portals)
- [Enabling via about://flags](#enable-flags)
- [Implement Portals](#implement-portals)
- [Check out the spec](#check-out-the-spec)
- [Customize the style when embedded as a &lt;portal&gt; element](#customize-the-style-when-embedded-as-a-lessportalgreater-element)
- [Messaging between the &lt;portal&gt; element and portalHost](#messaging-between-the-lessportalgreater-element-and-portalhost)
- [Activating the &lt;portal&gt; element and receiving the portalactivate event](#activating-the-lessportalgreater-element-and-receiving-the-portalactivate-event)
- [Retrieving the predecessor](#retrieving-the-predecessor)
- [Knowing your page was adopted as a predecessor](#knowing-your-page-was-adopted-as-a-predecessor)
- [Use cases and plans](#use-cases-and-plans)
- [Feedback welcome](#feedback-welcome)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Hands-on with Portals: seamless navigation on the web

Learn how the proposed Portals API can improve your navigation UX.

May 6, 2019 <span class="w-author__separator">•</span> Updated Feb 15, 2021

[<img src="https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Yusuke Utsunomiya" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ztcrpMPYTd84oPTN4GdY.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/uskay/)

<a href="/authors/uskay/" class="w-author__name-link">Yusuke Utsunomiya</a>

- <a href="https://twitter.com/uskay" class="w-author__link">Twitter</a>
- <a href="https://blog.uskay.io/" class="w-author__link">Blog</a>

Making sure your pages load fast is key to delivering a good user experience. But one area we often overlook is page transitions—what our users see when they move between pages.

A new web platform API proposal called [Portals](https://github.com/WICG/portals) aims to help with this by streamlining the experience as users navigate _across_ your site.

See Portals in action:

Seamless embeds and navigation with Portals. Created by [Adam Argyle](https://twitter.com/argyleink).

## What Portals enable <a href="#what-portals-enable" class="w-headline-link">#</a>

Single Page Applications (SPAs) offer nice transitions but come at the cost of higher complexity to build. Multi-page Applications (MPAs) are much easier to build, but you end up with blank screens between pages.

Portals offer the best of both worlds: the low complexity of an MPA with the seamless transitions of an SPA. Think of them like an `<iframe>` in that they allow for embedding, but unlike an `<iframe>`, they also come with features to navigate to their content.

Seeing is believing: please first check out what we showcased at Chrome Dev Summit 2018:

With classic navigations, users have to wait with a blank screen until the browser finishes rendering the destination. With Portals, users get to experience an animation, while the `<portal>` pre-renders content and creates a seamless navigation experience.

Before Portals, we could have rendered another page using an `<iframe>`. We could also have added animations to move the frame around the page. But an `<iframe>` won't let you navigate into its content. Portals close this gap, enabling interesting use cases.

## Try out Portals <a href="#try-out-portals" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enable-flags" class="w-headline-link">#</a>

Try out Portals in Chrome 85 and later versions by flipping an experimental flag:

- Enable the `about://flags/#enable-portals` flag for same-origin navigations.
- For testing out cross-origin navigations, enable the `about://flags/#enable-portals-cross-origin` flag in addition.

During this early phase of the Portals experiment, we also recommend using a completely separate user data directory for your tests by setting the [`--user-data-dir`](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md#command-line) command line flag. Once Portals are enabled, confirm in DevTools that you have the new shiny `HTMLPortalElement`.

<img src="https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format" alt="A screenshot of the DevTools console showing the HTMLPortalElement" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/aUrrqhzMxaEX865Fk5zX.png?auto=format&amp;w=1600 1600w" width="800" height="252" />

## Implement Portals <a href="#implement-portals" class="w-headline-link">#</a>

Let's walk through a basic implementation example.

    // Create a portal with the wikipedia page, and embed it
    // (like an iframe). You can also use the <portal> tag instead.
    portal = document.createElement('portal');
    portal.src = 'https://en.wikipedia.org/wiki/World_Wide_Web';
    portal.style = '...';
    document.body.appendChild(portal);

    // When the user touches the preview (embedded portal):
    // do fancy animation, e.g. expand …
    // and finish by doing the actual transition.
    // For the sake of simplicity, this snippet will navigate
    // on the `onload` event of the Portals element.
    portal.addEventListener('load', (evt) => {
       portal.activate();
    });

It's that simple. Try this code in the DevTools console, the wikipedia page should open up.

<img src="https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format" alt="A gif of preview portal style demo" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/rp6i8ngGJkvooXJ9WmLK.gif?auto=format&amp;w=1600 1600w" width="800" height="557" />

If you wanted to build something like we showed at Chrome Dev Summit which works just like the demo above, the following snippet will be of interest.

    // Adding some styles with transitions
    const style = document.createElement('style');
    style.innerHTML = `
      portal {
        position:fixed;
        width: 100%;
        height: 100%;
        opacity: 0;
        box-shadow: 0 0 20px 10px #999;
        transform: scale(0.4);
        transform-origin: bottom left;
        bottom: 20px;
        left: 20px;
        animation-name: fade-in;
        animation-duration: 1s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
      }
      .portal-transition {
        transition: transform 0.4s;
      }
      @media (prefers-reduced-motion: reduce) {
        .portal-transition {
          transition: transform 0.001s;
        }
      }
      .portal-reveal {
        transform: scale(1.0) translateX(-20px) translateY(20px);
      }
      @keyframes fade-in {
        0%   { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
    const portal = document.createElement('portal');
    // Let's navigate into the WICG Portals spec page
    portal.src = 'https://wicg.github.io/portals/';
    // Add a class that defines the transition. Consider using
    // `prefers-reduced-motion` media query to control the animation.
    // https://developers.google.com/web/updates/2019/03/prefers-reduced-motion
    portal.classList.add('portal-transition');
    portal.addEventListener('click', (evt) => {
      // Animate the portal once user interacts
      portal.classList.add('portal-reveal');
    });
    portal.addEventListener('transitionend', (evt) => {
      if (evt.propertyName == 'transform') {
        // Activate the portal once the transition has completed
        portal.activate();
      }
    });
    document.body.append(style, portal);

It is also easy to do feature detection to progressively enhance a website using Portals.

    if ('HTMLPortalElement' in window) {
      // If this is a platform that have Portals...
      const portal = document.createElement('portal');
      ...
    }

If you want to quickly experience what Portals feel like, try using [uskay-portals-demo.glitch.me](https://uskay-portals-demo.glitch.me). Be sure you access it with Chrome 85 or later versions and turn on the [experimental flag](#enable-flags)!

1.  Enter a URL you want to preview.
2.  The page will then be embedded as a `<portal>` element.
3.  Click on the preview.
4.  The preview will be activated after an animation.

<img src="https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format" alt="A gif of using the glitch demo of using Portals" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Y4Vv6v3DAAC32IsiWS7g.gif?auto=format&amp;w=1600 1600w" width="800" height="547" />

## Check out the spec <a href="#check-out-the-spec" class="w-headline-link">#</a>

We are actively discussing [the Portals spec](https://wicg.github.io/portals/) in the Web Incubation Community Group (WICG). To quickly get up to speed, take a look at some of the [key scenarios](https://github.com/WICG/portals/blob/master/key-scenarios.md). These are the three important features to familiarize yourself with:

- [The `<portal>` element:](https://wicg.github.io/portals/#the-portal-element) The HTML element itself. The API is very simple. It consists of the `src` attribute, the `activate` function and an interface for messaging (`postMessage`). `activate` takes an optional argument to pass data to the `<portal>` upon activation.
- [The `portalHost` interface:](https://wicg.github.io/portals/#the-portalhost-interface) Adds a `portalHost` object to the `window` object. This lets you check if the page is embedded as a `<portal>` element. It also provides an interface for messaging (`postMessage`) back to the host.
- [The PortalActivateEvent interface:](https://wicg.github.io/portals/#the-portalactivateevent-interface) An event that fires when the `<portal>` is activated. There is a neat function called `adoptPredecessor` which you can use to retrieve the previous page as a `<portal>` element. This allows you to create seamless navigations and composed experiences between two pages.

Let's look beyond the basic usage pattern. Here is a non-exhaustive list of what you can achieve with Portals along with sample code.

### Customize the style when embedded as a `<portal>` element <a href="#customize-the-style-when-embedded-as-a-lessportalgreater-element" class="w-headline-link">#</a>

    // Detect whether this page is hosted in a portal
    if (window.portalHost) {
      // Customize the UI when being embedded as a portal
    }

### Messaging between the `<portal>` element and `portalHost` <a href="#messaging-between-the-lessportalgreater-element-and-portalhost" class="w-headline-link">#</a>

    // Send message to the portal element
    const portal = document.querySelector('portal');
    portal.postMessage({someKey: someValue}, ORIGIN);

    // Receive message via window.portalHost
    window.portalHost.addEventListener('message', (evt) => {
      const data = evt.data.someKey;
      // handle the event
    });

### Activating the `<portal>` element and receiving the `portalactivate` event <a href="#activating-the-lessportalgreater-element-and-receiving-the-portalactivate-event" class="w-headline-link">#</a>

    // You can optionally add data to the argument of the activate function
    portal.activate({data: {somekey: 'somevalue'}});

    // The portal content will receive the portalactivate event
    // when the activate happens
    window.addEventListener('portalactivate', (evt) => {
      // Data available as evt.data
      const data = evt.data;
    });

### Retrieving the predecessor <a href="#retrieving-the-predecessor" class="w-headline-link">#</a>

    // Listen to the portalactivate event
    window.addEventListener('portalactivate', (evt) => {
      // ... and creatively use the predecessor
      const portal = evt.adoptPredecessor();
      document.querySelector('someElm').appendChild(portal);
    });

### Knowing your page was adopted as a predecessor <a href="#knowing-your-page-was-adopted-as-a-predecessor" class="w-headline-link">#</a>

    // The activate function returns a Promise.
    // When the promise resolves, it means that the portal has been activated.
    // If this document was adopted by it, then window.portalHost will exist.
    portal.activate().then(() => {
      // Check if this document was adopted into a portal element.
      if (window.portalHost) {
        // You can start communicating with the portal element
        // i.e. listen to messages
        window.portalHost.addEventListener('message', (evt) => {
          // handle the event
        });
      }
    });

By combining all of the features supported by Portals, you can build really fancy user experiences. For instance, the demo below demonstrates how Portals can enable a seamless user experience between a website and third party embed content.

Interested in this demo? [Fork it on GitHub](https://github.com/WICG/portals/tree/master/demos/portal-embed-demo) and build your own version!

## Use cases and plans <a href="#use-cases-and-plans" class="w-headline-link">#</a>

We hope you liked this brief tour of Portals! We can't wait to see what you can come up with. For instance, you might want to start using Portals for non-trivial navigations such as: pre-rendering the page for your best-seller product from a product category listing page.

Another important thing to know is that Portals can be used in cross-origin navigations, just like an `<iframe>`. So, if you have multiple websites that cross reference one another, you can also use Portals to create seamless navigations between two different websites. This cross-origin use case is very unique to Portals, and can even improve the user experience of SPAs.

## Feedback welcome <a href="#feedback-welcome" class="w-headline-link">#</a>

Portals are ready for experimentation in Chrome 85 and later versions. Feedback from the community is crucial to the design of new APIs, so please try it out and tell us what you think! If you have any feature requests or feedback, please head over to the [WICG GitHub repo](https://github.com/WICG/portals/issues).

<a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Feb 15, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/hands-on-portals/index.md)

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
