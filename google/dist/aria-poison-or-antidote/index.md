<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format" alt="Man lying on the floor covered in post-it notes with empty checkboxes and messages such as off line, overthink, $, chill, take a break, and zzzz." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/avB7jubYxhJr1dHQzl6c.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#aria:-poison-or-antidote" class="w-toc__header--link">ARIA: poison or antidote?</a>

- [What is ARIA?](#what-is-aria)
- [What isn't ARIA?](#what-isn't-aria)
- [How does ARIA work?](#how-does-aria-work)
- [Why ARIA?](#why-aria)
- [Menu bar example](#menu-bar-example)
- [Supporting mouse clicker people](#supporting-mouse-clicker-people)
- [Making our menu bar keyboard accessible](#making-our-menu-bar-keyboard-accessible)
- [Screen reader access to our menu bar](#screen-reader-access-to-our-menu-bar)
- [Dealing with bugs](#dealing-with-bugs)
- [Keyboard bugs (HTML!)](<#keyboard-bugs-(html!)>)
- [ARIA bugs: why are there so many?](#aria-bugs:-why-are-there-so-many)
- [Summary](#summary)
- [Addendum 1: Additional Resources](#addendum-1:-additional-resources)
- [Hybrid reference with keyboard info and code examples](#hybrid-reference-with-keyboard-info-and-code-examples)
- [Addendum 2: What is ARIA most used for?](#addendum-2:-what-is-aria-most-used-for)
- [Addendum 3: What's an Accessibility API?](#addendum-3:-what's-an-accessibility-api)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# ARIA: poison or antidote?

How lying to screen readers cures accessibility, when it doesn't rub salt in it!

Aug 18, 2020

[<img src="https://web-dev.imgix.net/image/admin/VU5wtCAkiSbrzkXznpwT.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Aaron Leventhal" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/VU5wtCAkiSbrzkXznpwT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/VU5wtCAkiSbrzkXznpwT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/VU5wtCAkiSbrzkXznpwT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/VU5wtCAkiSbrzkXznpwT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/VU5wtCAkiSbrzkXznpwT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/aaronleventhal/)

<a href="/authors/aaronleventhal/" class="w-author__name-link">Aaron Leventhal</a>

- <a href="https://twitter.com/aaronlev" class="w-author__link">Twitter</a>

## What is ARIA? <a href="#what-is-aria" class="w-headline-link">#</a>

ARIA lets web authors create an alternative reality, seen only by screen readers 🤥

Sometimes it's necessary to expand on the truth or even downright "lie" to screen readers about what's happening in web content. For example, "focus is really over here!" or "this is really a slider!". It's like adding magical sticky notes on top of tools and widgets on your workbench. These magical sticky notes make everyone believe what's written on them.

Whenever a magical sticky note exists, it either overrides our belief about what each tool is, or something about the tool. Example: "this thing over here is a glue gun!". Even though it's still actually an empty blue box sitting there on the workbench, the magical sticky note will make us see it is a glue gun. We can also add, "and it is 30% full!". The screen reader will now report that there is a 30% full glue gun there.

The web equivalent to this is to take a plain box element (a div) with an image inside of it, and use ARIA to say it's a slider at value 30 out of 100.

## What isn't ARIA? <a href="#what-isn&#39;t-aria" class="w-headline-link">#</a>

ARIA does not affect the appearance of a web page, or the behavior for a mouse or keyboard user. Only users of assistive technologies will notice any difference from ARIA. Web developers can add any arbitrary ARIA without affecting users that aren't running an assistive technology.

You read it right: ARIA doesn't actually do anything to keyboard focus or tab order. That's all done in HTML, sometimes tweaked with bits of JavaScript.

## How does ARIA work? <a href="#how-does-aria-work" class="w-headline-link">#</a>

Browsers are asked by a screen reader or other assistive technology for information about each element. When ARIA is present on an element, the browser takes in the information and changes what it tells the screen reader about that element.

## Why ARIA? <a href="#why-aria" class="w-headline-link">#</a>

Why would we ever want to lie to our users!?

Let's say the local web store doesn't sell all the widgets we need. But, we are [MacGyver](https://www.cbs.com/shows/macgyver/), dammit. We can just invent our own widgets from other widgets! FWIW, the [MacGyver's seven most used things](https://www.cbs.com/shows/macgyver/news/1005839/the-notorious-tools-of-macgyver-s-trade/) are Swiss Army knives, gum, shoe strings, matches, paper clips, birthday candles, and duct tape. He uses them to make bombs and other things that aren't just laying around. This is pretty similar to a web author who needs to make a menu bar. Menu bars are so useful you would think they would be part of HTML, but they aren't. Oh well! You didn't think authors would be happy with links and buttons did you? So the author will cobble one together using their favorite tools: divs, images, style, click handlers, keypress handlers, spit, and ARIA.

Sometimes, rather than using ARIA to the max, we just use it as an enhancement. It can be useful to sprinkle a little ARIA on some HTML that already basically works. For example, we might want a form control to point to an error message alert that relates to some invalid input. Or we might want to indicate that a textbox is for searching. These little tweaks can make ordinary websites more usable with a screen reader.

## Menu bar example <a href="#menu-bar-example" class="w-headline-link">#</a>

### Supporting mouse clicker people <a href="#supporting-mouse-clicker-people" class="w-headline-link">#</a>

Let's make a menu bar together. We show a bunch of items in generic box elements called divs. Any time our user clicks on a div, it executes the corresponding command. Cool, it works for mouse clicker people!

Next we make it look pretty. We use CSS, i.e. styles, lining things up nicely and putting visual outlines around them. We make it look enough like other menu bars that sighties intuitively know that it's a menu bar and how to use it. Our menu bar even uses a different background color on any item that the mouse is over, giving the user some helpful visual feedback.

Some menu items are parents. They spawn child submenus. Whenever the user hovers on one of these we start an animation that slides out the child submenu.

This, of course, is all pretty inaccessible, as is the usual case for many things on the web, largely because the HTML standards wizards didn't add everything a web author needs. And even if they did, web authors would always want to invent their own special version anyway.

### Making our menu bar keyboard accessible <a href="#making-our-menu-bar-keyboard-accessible" class="w-headline-link">#</a>

As a first step toward accessibility, let's add keyboard accessibility. This part only uses HTML, and not ARIA. Remember that ARIA does not affect core aspects such as appearance, mouse, or keyboard for users without assistive technologies.

Just like a web page can respond to the mouse, it can also respond to the keyboard. Our JavaScript will listen to all keystrokes that occur and decide if the keypress is useful. If not, it throws it back to the page like a fish that's too small to eat. Our rules are something like:

- If the user presses an arrow key, let's look at our own internal menu bar blueprints and decide what the new active menu item should be. We will clear any current highlights and highlight the new menu item so the sighted user visually knows where they are. The web page should then call `event.preventDefault()` to prevent the browser from performing the usual action (scrolling the page, in this case).
- If the user presses the Enter key, we can treat it just like a click, and perform the appropriate action (or even open another menu).
- If the user presses a key that should do something else, don't eat that! Throw it back to the page as nature intended. For example, our menu bar doesn't need the Tab key, so throw it back! This is hard to get right, and authors often mess it up. For example, the menu bar needs arrow keys, but not Alt+Arrow or Command+Arrow. Those are shortcuts for moving to the previous/next page in the web history of your browser tab. If the author isn't careful, the menu bar will eat those. This kind of bug happens a lot, and we haven't even started with ARIA yet!

### Screen reader access to our menu bar <a href="#screen-reader-access-to-our-menu-bar" class="w-headline-link">#</a>

Our menu bar was created with duct tape and divs. As a result, a screen reader has no idea what any of it is. The background color for the active item is just a color. The menu item divs are just plain objects with no particular meaning. Consequently, a user of our menu bar doesn't get any instructions about what keys to press or what item they're on.

But that's no fair! The menu bar acts just fine for the sighted user.

ARIA to the rescue. ARIA lets us pretend to the screen reader that focus is in a menu bar. If the author does everything right, our custom menu bar will look to the screen reader just like a menu bar in a desktop application.

Our first, ahem, ARIA lie, is to use the `aria-activedescendant` attribute, and set it to the ID of the currently active menuitem, being careful to update it whenever it changes. For example, `aria-activedescendant="settings-menuitem"`. This little white lie causes the screen reader to consider our ARIA active item as the focus, which is read aloud or shown on a Braille display.

## Explanation of _ancestor_, _parent_, and _descendant_

The term descendant refers to the fact that an item is contained somewhere inside of another. The opposite term is ancestor, which is to say an item is contained by ancestors. For the next container up/down, these may use the more specific terms parent/child. For example, imagine a document with a paragraph that has a link inside. The link's parent is a paragraph, but it also has the document as an ancestor. Conversely, the document may have many paragraph children, each with links. The links are all descendants of the grandparent document.

Back to `aria-activedescendant`. By using it to point from the focused menu bar to a specific menu item, the screen reader now knows where the user has moved, but nothing else about the object. What is this div thing anyway? That's where the role attribute comes in. We use `role="menubar"` on the containing element for the entire thing, then we use `role="menu"` on groups of items, and `role="menuitem"` on … drumroll … the individual menu items.

And what if the menuitem can lead to a child menu? The user needs to know that right? For a sighted user, there might be a little picture of a triangle at the end of the menu, but the screen reader doesn't know how to automatically read images, at least at this point. We can add `aria-expanded="false"` on each expandable menuitem to indicate that 1) there is something that can be expanded, and 2) it currently is not expanded. As an added touch the author should put `role="none"` on the img triangle to indicate it's for prettification purposes only. This prevents the screen reader from saying anything about the image that would be redundant at best and possibly annoying.

## Dealing with bugs <a href="#dealing-with-bugs" class="w-headline-link">#</a>

### Keyboard bugs (HTML!) <a href="#keyboard-bugs-(html!)" class="w-headline-link">#</a>

Although keyboard access is a part of core HTML, authors mess it up all the time, either because they don't use keyboard navigation all that much, or because there is much nuance to get right.

Examples of bugs:

- A checkbox uses spacebar to toggle, but the author forgot to call `preventDefault()`. Now the spacebar will both toggle the checkbox and page down, which is the default browser behavior for spacebar.
- An ARIA modal dialog wants to trap tab navigation inside of it, and the author forgets to specifically allow Control+Tab through to the browser. Now, Control+Tab just navigates within their dialog, and doesn't switch tabs in the browser as it should. Ugh.
- An author creates a selection list, and implements up/down, but does not implement home/end/pageup/pagedown or first letter navigation.

Authors should follow known patterns. Check out the [Resources](#resources) section for more information.

For pure keyboard access issues, it's useful to also try without a screen reader, or with virtual browser mode off. Screen readers are not generally necessary to discover keyboard bugs, and keyboard access is actually implemented with HTML, not ARIA. After all, ARIA doesn't affect basic stuff like the keyboard or mouse behavior, it only lies to the screen reader about what's in the web page, what's currently focused, etc.

Keyboard bugs are almost always a bug in the web content, specifically in their HTML and JavaScript, not in ARIA.

### ARIA bugs: why are there so many? <a href="#aria-bugs:-why-are-there-so-many" class="w-headline-link">#</a>

There are many, many places where authors can get ARIA wrong, and each will lead to either complete breakage or subtle differences. The subtle ones are probably worse, because the author won't catch most of them before publishing.

After all, unless the author is an experienced screen reader user, something is going to go wrong in the ARIA. In our menu bar example, the author could think the "option" role was to be used when "menuitem" was correct. They could forget to use `aria-expanded`, forget to set and clear `aria-activedescendant` at the right times, or forget to have a menu bar containing the other menus. And what about menu item counts? Usually menu items are presented by screen readers with something like "item 3 of 5" so that the user knows where they are. This is generally counted automatically by the browser, but in some cases, and in some browser - screen reader combinations, the wrong numbers might be computed, and the author would need to override these numbers with `aria-posinset` and `aria-setsize`.

And this is just menu bars. Think of how many kinds of widgets there are. Glance at the ARIA spec or authoring practices if you like. For each pattern, there are a dozen ways ARIA could be misused. ARIA relies on authors to know what they're doing. What could possibly go wrong, given that most authors are not screen reader users?

In other words, it is 100 percent necessary for actual screen reader users to try ARIA widgets before they're considered shippable. There's too much nuance. Ideally everything would be tried with several different browser-screen reader combinations, because of the numerous implementation quirks, in addition to a few incomplete implementations.

## Summary <a href="#summary" class="w-headline-link">#</a>

In summary, ARIA magic can be used to override or add to anything and everything that the HTML says. It can be used to do little fine changes to the accessibility presentation, or to create an entire experience. This is why ARIA is both incredibly powerful and yet dangerous in the hands of our friendly local web authors who don't generally use screen readers themselves.

ARIA is just a dumb truth override markup layer. When a screen reader asks what's happening, if ARIA exists, they get the ARIA version of the truth instead of the real underlying truth.

## Addendum 1: Additional Resources <a href="#addendum-1:-additional-resources" class="w-headline-link">#</a>

### Hybrid reference with keyboard info and code examples <a href="#hybrid-reference-with-keyboard-info-and-code-examples" class="w-headline-link">#</a>

- [W3C's ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/): this documents the important keyboard navigation characteristics of each example and provides working JS/CSS/ARIA code. The examples are focused on what works today, and do not cover mobile.

## Addendum 2: What is ARIA most used for? <a href="#addendum-2:-what-is-aria-most-used-for" class="w-headline-link">#</a>

Because ARIA can replace or supplement small or large truths, generally useful for saying stuff that the screen reader cares about.

Here are some common uses of ARIA.

- Special widgets that don't exist in HTML, like a menu bar, autocomplete, tree, or spreadsheet
- Widgets that exist in HTML, but the author invented their own anyway, possibly because they needed to tweak the behavior or appearance of the normal widget. For example, an HTML `<input type="range">` element is basically a slider, but authors want to make it look different. For most things, CSS can be used, but for `input type="range"`, CSS is awkward. An author can make their own slider, and use `role="slider"` on it with `aria-valuenow` to say what the current value is.
- Live regions tell screen readers "in this area of the page, anything that changes is worth telling the user about."
- Landmarks (HTML has equivalents now). These are somewhat like headings, in that they help screen reader users find what they want faster. However, they're different in that they contain the entire related area. Like, "this container is the main area of the page" and "this container over here is a navigation panel".

## Addendum 3: What's an Accessibility API? <a href="#addendum-3:-what&#39;s-an-accessibility-api" class="w-headline-link">#</a>

An accessibility API is how a screen reader or other AT knows what's in the page and what's happening right now. Examples include MSAA, IA2, and UIA. And that's just Windows! There are two parts to an accessibility API:

- A "tree" of objects that represents a container hierarchy. These are like Russian nesting dolls, but each doll can contain multiple other dolls. For example, a document can contain a bunch of paragraphs, and a paragraph can have text, images, links, boldface, etc. Each item in the object tree can have properties like a role (what am I?), a name/label, a user-entered value, a description, as well as boolean states like focusable, focused, required, checked. ARIA can override any of these properties.  
  The screen reader uses the tree to help the user navigate in virtual buffer mode, like "go to the next heading please".
- A series of events that occur describing changes to the tree, like "focus is now over here!". The screen reader uses the events to tell the user what has just happened. When important HTML or ARIA markup changes, an event is fired to tell the screen reader that something changed.

Usually authors just use HTML, which maps nicely to these accessibility APIs. When HTML is not enough, ARIA is used and the browser overrides the HTML semantics before sending the object tree or events to the screen reader.

<a href="/tags/accessibility/" class="w-chip">Accessibility</a>

<span class="w-mr--sm"> Last updated: Aug 18, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/aria-poison-or-antidote/index.md)

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
