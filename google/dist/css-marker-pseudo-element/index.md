<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format" alt="Showing the anatomy of a single list item by putting separate boxes around the bullet and the text" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/GPGTyXJOh0cH0wa1PvXH.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#custom-bullets-with-css-::marker" class="w-toc__header--link">Custom bullets with CSS ::marker</a>

- [Browser compatibilty](#browser-compatibilty)
- [Pseudo-elements](#pseudo-elements)
- [Creating a marker](#creating-a-marker)
- [Styling a marker](#styling-a-marker)
- [Debugging](#debugging)
- [Future Pseudo-element styling](#future-pseudo-element-styling)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Custom bullets with CSS ::marker

It is now trivial to customize the color, size or type of number or bullet when using a &lt;ul&gt; or &lt;ol&gt;.

Sep 2, 2020 <span class="w-author__separator">•</span> Updated Sep 2, 2020

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Oriol Brufau" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uedrGuXN8MZ0tg11zsmK.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/loirooriol/)

<a href="/authors/loirooriol/" class="w-author__name-link">Oriol Brufau</a>

- <a href="https://github.com/Loirooriol" class="w-author__link">GitHub</a>

Thanks to Igalia, sponsored by Bloomberg, we can finally put our hacks away for styling lists. See!

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format" alt="View Source" class="w-screenshot" sizes="(min-width: 665px) 665px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/WOmqXrog0YoriZqqIzEZ.png?auto=format&amp;w=1330 1330w" width="665" height="384" /><figcaption><a href="https://glitch.com/edit/#!/marker-fun-example">View Source</a></figcaption></figure>Thanks to [CSS `::marker`](https://www.w3.org/TR/css-lists-3/#marker-pseudo) we can change the content and some of the styles of bullets and numbers.

## Browser compatibilty <a href="#browser-compatibilty" class="w-headline-link">#</a>

`::marker` is supported in Firefox for desktop and Android, desktop Safari and iOS Safari (but only the `color` and `font-*` properties, see [Bug 204163](https://bugs.webkit.org/show_bug.cgi?id=204163)), and Chromium-based desktop and Android browsers. See MDN's [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker#Browser_compatibility) table for updates.

## Pseudo-elements <a href="#pseudo-elements" class="w-headline-link">#</a>

Consider the following essential HTML unordered list:

    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Dolores quaerat illo totam porro</li>
      <li>Quidem aliquid perferendis voluptates</li>
      <li>Ipsa adipisci fugit assumenda dicta voluptates nihil reprehenderit consequatur alias facilis rem</li>
      <li>Fuga</li>
    </ul>

Which results in the following unsurprising rendering:

The dot at the beginning of each `<li>` item is free! The browser is drawing and creating a generated marker box for you.

Today we're excited to talk about the `::marker` pseudo-element, which gives the ability to style the bullet element that browsers create for you.

**Key Term**: A pseudo-element represents an element in the document other than those which exist in the document tree. For example, you can select the first line of a paragraph using the pseudo-element `p::first-line`, even though there is no HTML element wrapping that line of text.

### Creating a marker <a href="#creating-a-marker" class="w-headline-link">#</a>

The `::marker` pseudo-element marker box is automatically generated inside every list item element, preceding the actual contents and the `::before` pseudo-element.

    li::before {
      content: "::before";
      background: lightgray;
      border-radius: 1ch;
      padding-inline: 1ch;
      margin-inline-end: 1ch;
    }

Typically, list items are `<li>` HTML elements, but other elements can also become list items with `display: list-item`.

    <dl>
      <dt>Lorem</dt>
      <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit</dd>
      <dd>Dolores quaerat illo totam porro</dd>

      <dt>Ipsum</dt>
      <dd>Quidem aliquid perferendis voluptates</dd>
    </dl>

    dd {
      display: list-item;
      list-style-type: "🤯";
      padding-inline-start: 1ch;
    }

### Styling a marker <a href="#styling-a-marker" class="w-headline-link">#</a>

Until `::marker`, lists could be styled using `list-style-type` and `list-style-image` to change the list item symbol with 1 line of CSS:

    li {
      list-style-image: url(/right-arrow.svg);
      /* OR */
      list-style-type: '👉';
      padding-inline-start: 1ch;
    }

That's handy but we need more. What about changing the color, size, spacing, etc!? That's where `::marker` comes to the rescue. It allows individual and global targeting of these pseudo-elements from CSS:

    li::marker {
      color: hotpink;
    }

    li:first-child::marker {
      font-size: 5rem;
    }

**Caution**: If the above list does not have pink bullets, then `::marker` is not supported in your browser.

The `list-style-type` property gives very limited styling possibilities. The `::marker` pseudo-element means that you can target the marker itself and apply styles directly to it. This allows for far more control.

That said, you can't use every CSS property on a `::marker`. The list of which properties are allowed and not allowed are clearly indicated in the spec. If you try something interesting with this pseudo-element and it doesn't work, the list below is your guide into what can and can't be done with CSS:

#### Allowed CSS `::marker` Properties <a href="#allowed-css-::marker-properties" class="w-headline-link">#</a>

- `animation-*`
- `transition-*`
- `color`
- `direction`
- `font-*`
- `content`
- `unicode-bidi`
- `white-space`

Changing the contents of a `::marker` is done with `content` as opposed to `list-style-type`. In this next example the first item is styled using `list-style-type` and the second with `::marker`. The properties in the first case apply to the entire list item, not just the marker, which means that the text is animating as well as the marker. When using `::marker` we can target just the marker box and not the text.

Also, note how the disallowed `background` property has no effect.

List Styles

    li:nth-child(1) {
      list-style-type: '?';
      font-size: 2rem;
      background: hsl(200 20% 88%);
      animation: color-change 3s ease-in-out infinite;
    }

Mixed results between the marker and the list item

Marker Styles

    li:nth-child(2)::marker {
      content: '!';
      font-size: 2rem;
      background: hsl(200 20% 88%);
      animation: color-change 3s ease-in-out infinite;
    }

Focused results between marker and list item

**Gotchas!**

In Chromium, `white-space` only works for inside positioned markers. For outside positioned markers, the style adjuster always forces `white-space: pre` in order to preserve the trailing space.

#### Changing the content of a marker <a href="#changing-the-content-of-a-marker" class="w-headline-link">#</a>

Here are some of the ways you could style your markers.

**Changing all list items**

    li {
      list-style-type: "😍";
    }

    /* OR */

    li::marker {
      content: "😍";
    }

**Changing just one list item**

    li:last-child::marker {
      content: "😍";
    }

**Changing a list item to SVG**

    li::marker {
      content: url(/heart.svg);
      content: url(#heart);
      content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='24' width='24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='none' stroke='hotpink' stroke-width='3'/></svg>");
    }

**Changing numbered lists** What about an `<ol>` though? The marker on an ordered list item is a number and not a bullet by default. In CSS these are called [Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters), and they're quite powerful. They even have properties to set and reset where the number starts and ends, or switching them to roman numerals. Can we style that? Yep, and we can even use the marker content value to build our own numbering presentation.

    li::marker {
      content: counter(list-item) "› ";
      color: hotpink;
    }

### Debugging <a href="#debugging" class="w-headline-link">#</a>

Chrome DevTools is ready to help you inspect, debug and modify the styles applying to `::marker` pseudo elements.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format" class="w-screenshot" sizes="(min-width: 776px) 776px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/PYKVXEzycrMhQujXsNxQ.png?auto=format&amp;w=1552 1552w" width="776" height="574" /></figure>### Future Pseudo-element styling <a href="#future-pseudo-element-styling" class="w-headline-link">#</a>

You can find out more about ::marker from:

- [CSS Lists, Markers and Counters](https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/) from [Smashing Magazine](https://www.smashingmagazine.com/)
- [Counting With CSS Counters and CSS Grid](https://css-tricks.com/counting-css-counters-css-grid/) from [CSS-Tricks](https://css-tricks.com/)
- [Using CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) from [MDN](https://developer.mozilla.org/)

It's great to get access to something which has been hard to style. You might wish that you could style other automatically generated elements. You might be frustrated with `<details>` or the search input autocomplete indicator, things that are not implemented in the same way across browsers. One way to share what you need is by creating a want at <https://webwewant.fyi>.

<a href="/tags/css/" class="w-chip">CSS</a>

<span class="w-mr--sm"> Last updated: Sep 2, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/css-marker-pseudo-element/index.md)

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
