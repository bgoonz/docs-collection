<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

# Codelab: Building a Sidenav component

Jan 21, 2021

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="
                        https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,
                        https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,
                        https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,
                        https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,
                        https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x
                      " width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

This codelab teaches you how to build a responsive slide out side navigation layout component on the web. We'll build the component as we go, starting with HTML, then CSS, then JavaScript.

Check out my blog post [Building a Sidenav component](/building-a-sidenav-component) to learn about the CSS web platform features chosen for building this component.

## Setup <a href="#setup" class="w-headline-link">#</a>

1.  Click **Remix to Edit** to make the project editable.
2.  Open `app/index.html`.

## HTML <a href="#html" class="w-headline-link">#</a>

First, get the essentials of the HTML setup so there's content and some boxes to work with.

Drop the following HTML into the `<body>` tag.

    <aside></aside>
    <main></main>

The `<aside>` holds the navigation menu as a complimentary element to `<main>`, which holds the primary page content.

Next we'll fill in those semantic elements with the rest of the page content.

Add a navigation element, some navigation links and a close link inside the `<aside>` element.

    <aside>
      <nav>
        <h4>My</h4>
        <a href="#">Dashboard</a>
        <a href="#">Profile</a>
        <a href="#">Preferences</a>
        <a href="#">Archive</a>

        <h4>Settings</h4>
        <a href="#">Accessibility</a>
        <a href="#">Theme</a>
        <a href="#">Admin</a>
      </nav>

      <a href="#"></a>
    </aside>

Links go great inside `<nav>` elements, and `<nav>` elements go great in `<aside>` sidebars. Still, there's more we can do to improve.

In the main content element, add a header and an article to semantically hold the layout content.

    <main>
      <header>
        <a href="#sidenav-open" class="hamburger">
          <svg viewBox="0 0 50 40">
            <line x1="0" x2="100%" y1="10%" y2="10%" />
            <line x1="0" x2="100%" y1="50%" y2="50%" />
            <line x1="0" x2="100%" y1="90%" y2="90%" />
          </svg>
        </a>
        <h1>Site Title</h1>
      </header>

      <article>
        {put some placeholder content here}
      </article>
    </main>

You can ignore the `The attribute name of [ viewBox ] must be in lowercase` lint error from Glitch.

The header has the menu open link. The aside has the close button. We'll show and hide elements based on viewport size soon.

In the `<article>` element, we pasted a placeholder sentence. Replace \`\` with your own stuff, or paste the lorem provided below:

    <h2>Totam Header</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consectetur, necessitatibus velit officia ut impedit veritatis temporibus soluta? Totam odit cupiditate facilis nisi sunt hic necessitatibus voluptatem nihil doloribus! Enim.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>

    <h3>Subhead Totam Odit</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>

    <h3>Subhead</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>

This content, and it's length, are what will cause the page to be scrollable when it exceeds your viewport height.

So far you've added an aside element, with a nav, links and a way to close the sidenav. You also added a header, a way to open the sidenav, and an article to the main element. This is clean, semantic and pretty timeless already, but we can make it cleaner and clearer for everyone. The open link in the sidenav could be more clearly marked.

Add attributes `title` and `aria-label` to the header open link element:

    <a href="#sidenav-open" class="hamburger">
    <a href="#sidenav-open" title="Open Menu" aria-label="Open Menu" class="hamburger">

The open SVG icon could be more clearly marked as well. Add the following attributes to the SVG inside the open link element:

    <svg viewBox="0 0 50 40">
    <svg viewBox="0 0 50 40" role="presentation" focusable="false" aria-label="trigram for heaven symbol">

The close link in the sidenav could be more clearly marked. Add attributes `title` and `aria-label` to the sidenav close link element:

    <a href="#"></a>
    <a href="#" title="Close Menu" aria-label="Close Menu"></a>

**Gotchas!**

While all links do not require titles or special labels, I believe these to be an exception since they're being used to change the URL, like a link does, but they don't have any text content of their own.

## CSS <a href="#css" class="w-headline-link">#</a>

Time to layout the elements. The main content and sidenav are direct children of the `<body>` tag, so that's a good place to start.

Add the following CSS into `css/sidenav.css` so the `<body>` element lays out the children.

    body {
      display: grid;
      grid: [stack] 1fr / min-content [stack] 1fr;

      @media (max-width: 540px) {
        & > :matches(aside, main) {
          grid-area: stack;
        }
      }
    }

This layout essentially says: Create a named row `stack` with everything in it, and 2 columns in that row, the 2nd of which is named `stack` also. The 1st column should be sized by its minimal content needs, and the 2nd column can take up the rest. Then, if in a constrained viewport of `540px` or less, put the sidenav and main content elements into the same row and column, resulting in them being on top of each other in a 1x1 grid.

With this responsive stacking functionality as a base, we can now leverage the state of the URL bar to toggle the visibility and transition style of the sidenav.

Update the `<aside>` element back in `app/index.html`:

    <aside>
    <aside id="sidenav-open">

This enables CSS to match an element and the URL hash together. This is important for `:target` usage. Now the element's ID can match the URL hash we'll be setting with `<a>` tags.

In addition, for easier JavaScript targeting, add IDs for key elements that control the sidenav. First, add an ID to the sidenav open link:

    <a href="#sidenav-open" class="hamburger" title="Open Menu" aria-label="Open Menu">
    <a href="#sidenav-open" id="sidenav-button" class="hamburger" title="Open Menu" aria-label="Open Menu">

Next, add an ID to the sidenav close link:

    <a href="#" title="Close Menu" aria-label="Close Menu"></a>
    <a href="#" id="sidenav-close" title="Close Menu" aria-label="Close Menu"></a>

That wraps up the macro `<body>` responsive stacking layout, plus ties us into the URL bar. Let's keep going!

The `<aside>` has a neat layout too. It has 2 children, a `<nav>` which is the paper-like looking component that slides out, and a closing `<a>` link element that sets the url has to `#`. The link is invisible to the right of the paper slide out nav; it's so folks can "click off" the visual component to dismiss it.

Add the following CSS to `css/sidenav.css`:

    #sidenav-open {
      display: grid;
      grid-template-columns: [nav] 2fr [escape] 1fr;
    }

I thought the ratio and names were a really nice touch here, where grid could shine and give a designer a lot of control.

Next I need to conditionally overlay the main content and persist my position through any document scrolling. This is a great job for `position: sticky` and some `overscroll-behavior`.

Add the following styles for the sidenav:

    #sidenav-open {
      display: grid;
      grid-template-columns: [nav] 2fr [escape] 1fr;

      @media (max-width: 540px) {
        position: sticky;
        top: 0;
        max-height: 100vh;
        overflow: hidden auto;
        overscroll-behavior: contain;

        visibility: hidden; /* not keyboard accessible when closed */
      }
    }

Those styles ensure the sidenav is the viewport height, scrolls vertically and contains the scroll. Very importantly, it hides the element. By default, when the viewport is `540px` or smaller, hide that sidenav. Unless!

Add a `:target` pseudo-selector to the `#sidenav-open` element:

    #sidenav-open {

      @media (max-width: 540px) {

        &:target {
          visibility: visible;
        }
      }
    }

When the ID of that element and the URL bar are the same, set `visibility` to `visible`. Go ahead and open the side menu after scrolling the page, or try scrolling the page while the sidenav is open. What do you think?

Add the following CSS to the bottom of `app/sidenav.css`:

    #sidenav-button,
    #sidenav-close {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      user-select: none;
      touch-action: manipulation;

      @media (min-width: 540px) {
        display: none;
      }
    }

These styles target our open and close buttons, specifies their tap and touch styles, and also hides them when viewports are `540px` or larger.

For some flair, let's add CSS transforms with respectful accessibility. Add the following CSS to `css/sidenav.css`:

    #sidenav-open {
      --easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);
      --duration: .6s;

      ...

      @media (max-width: 540px) {
        ...

        transform: translateX(-110vw);
        will-change: transform;
        transition:
          transform var(--duration) var(--easeOutExpo),
          visibility 0s linear var(--duration);

        &:target {
          visibility: visible;
          transform: translateX(0);
          transition: transform var(--duration) var(--easeOutExpo);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        --duration: 1ms;
      }
    }

A demo of the interaction with and without duration applied based on the \`prefers-reduced-motion\` media query.

### Sprinkle in some JavaScript <a href="#sprinkle-in-some-javascript" class="w-headline-link">#</a>

The `Escape` key should close the menu. Add this JS to `js/index.js`:

    const sidenav = document.querySelector('#sidenav-open');

    sidenav.addEventListener('keyup', e => {
      if (e.code === 'Escape') {
        document.location.hash = '';
      }
    });

This listens for a key event on the sidenav element. If it's `Escape`, it sets the URL hash to empty, making the sidenav transition out.

This next piece of UX JS is focus management. I want to make opening and closing easy, so I wait until the sidenav has finished a transition of some kind, then cross check it against the URL hash to determine if it's in or out. I then use JavaScript to set the focus on the button complimentary to the one they just pressed.

Add the following JavaScript to `js/index.js`:

    const closenav = document.querySelector('#sidenav-close');
    const opennav = document.querySelector('#sidenav-button');

    sidenav.addEventListener('transitionend', e => {
      if (e.propertyName !== 'transform') {
        return;
      }

      const isOpen = document.location.hash === '#sidenav-open';

      isOpen
        ? closenav.focus()
        : opennav.focus();
    });

## Try it out <a href="#try-it-out" class="w-headline-link">#</a>

- To preview the site, press **View App**. Then press **Fullscreen** ![fullscreen](/images/glitch/fullscreen.svg).

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

That's a wrap up for the needs I had with the component. Feel free to build upon it, drive it with JavaScript state instead of the URL, and in general make it yours! There's always more to add or more use cases to cover.

Open up `css/brandnav.css` to check out the non-layout related styles that I applied to this component. I didn't feel it was important to the feature set I was focusing on, and I hoped that separating styles from layout would encourage copy and paste. There could be more learning for you there!

How do you make slide out responsive sidenav components? Do you ever have more than 1, like one on both sides? I'd love to feature your solution in a YouTube video, make sure to [tweet at me](https://twitter.com/argyleink) or comment in YouTube with your code, it'll help everyone out!

<a href="/building-a-sidenav-component" class="w-article-navigation__link w-article-navigation__link--back w-article-navigation__link--single gc-analytics-event">Return to article</a>

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
