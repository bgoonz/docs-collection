<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#urlpattern-brings-routing-to-the-web-platform" class="w-toc__header--link">URLPattern brings routing to the web platform</a>

- [Background](#background)
- [Syntax compatibility](#syntax-compatibility)
- [Additional features](#additional-features)
- [Examples](#examples)
- [Constructing the pattern](#constructing-the-pattern)
- [Using the pattern](#using-the-pattern)
- [Anonymous and named groups](#anonymous-and-named-groups)
- [Unicode support and normalization](#unicode-support-and-normalization)
- [Putting it all together](#putting-it-all-together)
- [Browser support and polyfills](#browser-support-and-polyfills)
- [Feedback and future plans](#feedback-and-future-plans)
- [Support for templating](#support-for-templating)
- [Enabling future web platform features](#future-features)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# URLPattern brings routing to the web platform

An approach to standardizing common pattern matching use cases.

Jul 22, 2021

[<img src="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jeff Posnick" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/uskKSRCW1HyOTCjtdMdo.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jeffposnick/)

<a href="/authors/jeffposnick/" class="w-author__name-link">Jeff Posnick</a>

- <a href="https://twitter.com/jeffposnick" class="w-author__link">Twitter</a>
- <a href="https://github.com/jeffposnick" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@jeffposnick" class="w-author__link">Glitch</a>
- <a href="https://twitter.com/jeffposnick" class="w-author__link">Blog</a>

## Background <a href="#background" class="w-headline-link">#</a>

Routing is a key piece of every web application. At its heart, routing involves taking a URL, applying some pattern matching or other app-specific logic to it, and then, usually, displaying web content based on the result. Routing might be implemented in a number of ways: it's sometimes code running on a server that maps a path to files on disk, or logic in a single-page app that waits for changes to the current location and creates a corresponding piece of DOM to display.

While there is no one definitive standard, web developers have gravitated towards a common syntax for expressing URL routing patterns that share a lot in common with [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), but with some domain-specific additions like tokens for matching path segments. Popular server-side frameworks like [Express](https://expressjs.com/en/guide/routing.html) and [Ruby on Rails](https://guides.rubyonrails.org/routing.html) use this syntax (or something very close to it), and JavaScript developers can use modules like `path-to-regexp` or `regexpparam` to add that logic to their own code.

`URLPattern` is a proposed addition to the web platform that builds on the foundation created by these frameworks. Its goal is to standardize a routing pattern syntax, including support for wildcards, named token groups, regular expression groups, and group modifiers. `URLPattern` instances created with this syntax can perform common routing tasks, like matching against full URLs or a URL `pathname`, and returning information about the token and group matches.

Another benefit to providing URL matching directly in the web platform is that a common syntax can then be shared with [other APIs](#future-features) that also need to match against URLs.

## Syntax compatibility <a href="#syntax-compatibility" class="w-headline-link">#</a>

A guiding philosophy for `URLPattern` is to avoid reinvention. If you're already familiar with the routing syntax used in Express or Ruby on Rails, you shouldn't have to learn anything new. But given the slight divergences between syntaxes in popular routing libraries, something had to be chosen as the base syntax, and the designers of `URLPattern` decided to use the pattern syntax from `path-to-regexp` (though not its API surface) as the starting point.

This decision was made after close consultation with the current maintainer of `path-to-regexp`.

The best way to familiarize yourself with the core of the supported syntax is to refer to the [documentation](https://github.com/pillarjs/path-to-regexp#parameters) for `path-to-regexp`. You can [read the documentation](https://github.com/WICG/urlpattern/blob/main/mdn-drafts/QUICK-REFERENCE.md) intended for publication on [MDN](https://developer.mozilla.org/) in its current home on GitHub.

### Additional features <a href="#additional-features" class="w-headline-link">#</a>

The syntax of `URLPattern` is a superset of what `path-to-regexp` supports, as `URLPattern` supports a uncommon feature among routing libraries: matching [origins](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin), including wildcards in hostnames. Most other routing libraries just deal with the [pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname), and occasionally the [search](https://developer.mozilla.org/en-US/docs/Web/API/URL/search) or [hash](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) portion of a URL. They never have to check the origin portion of a URL, as they're only used for same-origin routing within a self-contained web app.

Taking origins into account opens the door for additional use cases, like routing cross-origin requests inside of a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers)'s `fetch` event handler. If you're only routing same-origin URLs, you can effectively ignore this additional feature and use `URLPattern` like other libraries.

## Examples <a href="#examples" class="w-headline-link">#</a>

### Constructing the pattern <a href="#constructing-the-pattern" class="w-headline-link">#</a>

To create a `URLPattern`, pass its constructor either strings or an object whose properties contain info about the pattern to match against.

Passing an object offers the most explicit control over what pattern to use for matching each URL component. At its most verbose, this can look like

    const p = new URLPattern({
      protocol: 'https',
      username: '',
      password: '',
      hostname: 'example.com',
      port: '',
      pathname: '/foo/:image.jpg',
      search: '*',
      hash: '*',
    });

Providing an empty string for a property will only match if the corresponding part of the URL is not set. The wildcard `*` will match any value for a given portion of the URL.

The constructor offers several shortcuts for simpler usage. Completely omitting `search` and `hash`, or any other properties, is equivalent to setting them to the `'*'` wildcard. The above example could be simplified to

    const p = new URLPattern({
      protocol: 'https',
      username: '',
      password: '',
      hostname: 'example.com',
      port: '',
      pathname: '/foo/:image.jpg',
    });

As an additional shortcut, all of the information about the origin can be provided in a single property, `baseURL`, leading to

    const p = new URLPattern({
      pathname: '/foo/:image.jpg',
      baseURL: 'https://example.com',
    });

All of these examples assume that your use case involves matching origins. If you're only interested in matching on the other portions of the URL, excluding the origin (as is the case for many "traditional" single-origin routing scenarios), then you can omit the origin information entirely, and just provide some combination of the `pathname`, `search`, and `hash` properties. As before, omitted properties will be treated as if they were set to the `*` wildcard pattern.

    const p = new URLPattern({pathname: '/foo/:image.jpg'});

As an alternative to passing in an object to the constructor, you can provide either one or two strings. If one string is provided, it should represent a full URL pattern, including pattern information used to match the origin. If you provide two strings, the second string is used as a `baseURL`, and the first string is considered relative to that base.

Whether one string or two are provided, the `URLPattern` constructor will parse the full URL pattern, breaking it up into URL components, and map each portion of the larger pattern to the corresponding component. This means that under the hood, each `URLPattern` created with strings ends up being represented the same as an equivalent `URLPattern` created with an object. The strings constructor is just a shortcut, for those who prefer a less verbose interface.

    const p = new URLPattern('https://example.com/foo/:image.jpg?*#*');

When using strings to create a `URLPattern`, there are a few caveats to keep in mind.

Leaving a property out when using an object to construct `URLPattern` is equivalent to providing a `*` wildcard for that property. When the full URL string pattern is parsed, if one of the URL components is missing a value, it's treated as if the component's property were set to `''`, which will only match when that component is empty.

When using strings, you need to explicitly include the wildcards if you want them to be used in the constructed `URLPattern`.

    // p1 and p2 are equivalent.
    const p1 = new URLPattern('/foo', location.origin);
    const p2 = new URLPattern({
      protocol: location.protocol,
      hostname: location.hostname,
      pathname: '/foo',
      search: '',
      hash: '',
    });

    // p3 and p4 are equivalent.
    const p3 = new URLPattern('/foo?*#*', location.origin);
    const p4 = new URLPattern({
      protocol: location.protocol,
      hostname: location.hostname,
      pathname: '/foo',
    });

You should also be aware that parsing a string pattern into its components is potentially ambiguous. There are characters, like `:`, that are found in URLs but also have special meaning in the pattern matching syntax. To avoid this ambiguity, the `URLPattern` constructor assumes that any of those special characters are part of a pattern, not part of the URL. If you want an ambiguous character to be interpreted as part of the URL, make sure to escape it with a `\` character. For example, the literal URL `about:blank` should be escaped as `'about\\:blank'` when provided as a string.

### Using the pattern <a href="#using-the-pattern" class="w-headline-link">#</a>

After constructing a `URLPattern`, you have two options for using it. The `test()` and `exec()` methods both take the same input and use the same algorithm to check for a match, and only differ in their return value. `test()` returns `true` when there's a match for the given input, and `false` otherwise. `exec()` returns detailed information about the match along with capture groups, or `null` if there is no match. The following examples demonstrate using `exec()`, but you could swap in `test()` for any of them if you only want a simple boolean return value.

One way to use the `test()` and `exec()` methods is by passing in strings. Similar to what the constructor supports, if a single string is provided, it should be a full URL, including the origin. If two strings are provided, the second string is treated as a `baseURL` value, and the first string is evaluated as relative to that base.

    const p = new URLPattern({
      pathname: '/foo/:image.jpg',
      baseURL: 'https://example.com',
    });

    const result = p.exec('https://example.com/foo/cat.jpg');
    // result will contain info about the successful match.
    // const result = p.exec('/foo/cat.jpg', 'https://example.com')
    // is equivalent, using the baseURL syntax.

    const noMatchResult = p.exec('https://example.com/bar');
    // noMatchResult will be null.

Alternatively, you can pass the same sort of object that the constructor supports, with properties that are set to just the portions of the URL you care about matching.

    const p = new URLPattern({pathname: '/foo/:image.jpg'});

    const result = p.exec({pathname: '/foo/:image.jpg'});
    // result will contain info about the successful match.

When using `exec()` on a `URLPattern` that contains wildcards or tokens, the return value will give you information about what the corresponding values were in the input URL. This can save you the trouble of having to parse out those values yourself.

    const p = new URLPattern({
      hostname: ':subdomain.example.com',
      pathname: '/*/:image.jpg'
    });

    const result = p.exec('https://imagecdn1.example.com/foo/cat.jpg');
    // result.hostname.groups.subdomain will be 'imagecdn1'
    // result.pathname.groups[0] will be 'foo', corresponding to *
    // result.pathname.groups.image will be 'cat'

### Anonymous and named groups <a href="#anonymous-and-named-groups" class="w-headline-link">#</a>

When you pass a URL string to `exec()`, you get back a value telling your which portions matched all of the pattern's groups.

The return value has properties that correspond to the components of the `URLPattern`, like `pathname`. So if a group was defined as part of the `pathname` portion of the `URLPattern`, then the matches can be found in the return value's `pathname.groups`. The matches are represented differently depending on whether the corresponding pattern was an anonymous or named group.

You can use array indices to access the values for an anonymous pattern match. If there are multiple anonymous patterns, index `0` will represent the matching value for the left-most one, with `1` and further indices used for subsequent patterns.

When using named groups in a pattern, the matches will exposed as properties whose names correspond to each group name.

If you're familiar with the `exec()` method of a `RegExp` object, then the return values from `URLPattern.exec()` method will look [very similar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#examples) when it comes to representing anonymous and named groups.

### Unicode support and normalization <a href="#unicode-support-and-normalization" class="w-headline-link">#</a>

`URLPattern` supports Unicode characters in a few different ways.

- Named groups, like `:café`, can contain Unicode characters. The rules used for valid [JavaScript identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier) apply to named groups.

- Text within a pattern will be automatically encoded according to the same rules used for URL encoding of that particular component. Unicode characters within `pathname` will be [percent-encoded](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding), so a `pathname` pattern like `/café` is normalized to `/caf%C3%A9` automatically. Unicode characters in the `hostname` are automatically encoded using [Punycode](https://en.wikipedia.org/wiki/Punycode), rather than percent-encoding.

- Regular expression groups must contain only ASCII characters. Regular expression syntax makes it difficult and unsafe to automatically encode Unicode characters in these groups. If you want to match a Unicode character in a regular expression group,you need to percent encode it manually, like `(caf%C3%A9)` to match `café`.

In addition to encoding Unicode characters, `URLPattern` also performs URL normalization. For example, `/foo/./bar` in the `pathname` component is collapsed to the equivalent `/foo/bar`.

When in doubt about how a given input pattern has been normalized, inspect the constructed `URLPattern` instance using your browser's [DevTools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools).

## Putting it all together <a href="#putting-it-all-together" class="w-headline-link">#</a>

The Glitch demo embedded below illustrates a core use case of `URLPattern` inside of a service worker's `fetch event handler`, mapping specific patterns to asynchronous functions that could generate a response to network requests. The concepts in this example could be applied to other routing scenarios as well, either server-side or client-side.

## Browser support and polyfills <a href="#browser-support-and-polyfills" class="w-headline-link">#</a>

We're letting developers know about `URLPattern` early, and would appreciate any [feedback](https://github.com/WICG/urlpattern/issues) based on the prerelease interface. This article will be kept up to date with information about browser support over time.

`URLPattern` is not currently enabled by default in any browser, but Chrome and Chromium-based browsers like Edge partially support `URLPattern` starting with version 93. You can try it out by enabling the `#experimental-web-platform-features` flag in `about://flags`.

The `urlpattern-polyfill` library provides a way to use the `URLPattern` interface in browsers or environments like [Node](https://nodejs.org/) which lack built-in support. If you use the polyfill, make sure that you use feature detection to ensure that you're only loading it if the current environment lacks support. Otherwise, you'll lose one of the key benefits of `URLPattern`: the fact that support environments don't have to download and parse additional code in order to use it.

    if (!(globalThis && 'URLPattern' in globalThis)) {
      // URLPattern is not available, so the polyfill is needed.
    }

## Feedback and future plans <a href="#feedback-and-future-plans" class="w-headline-link">#</a>

Some aspects of `URLPattern` are [still being developed](https://github.com/WICG/urlpattern/blob/main/202012-update.md#whats-still-left-to-do), and there are a number of [open questions](https://github.com/WICG/urlpattern/blob/main/202012-update.md#open-questions) about specific behaviors that may still be refined. We encourage you to try out `URLPattern` early and provide any feedback via the [Discussions](https://github.com/WICG/urlpattern/discussions) feature in the associated GitHub repo.

### Support for templating <a href="#support-for-templating" class="w-headline-link">#</a>

The `path-to-regexp` library provides a `compile() function` that effectively reverses the routing behavior. `compile()` takes a pattern and values for the token placeholders, and returns a string for a URL path with those values substituted in.

We hope to [add this to URLPattern](https://github.com/WICG/urlpattern/discussions/41) in the future, but it's not within scope for the initial release.

### Enabling future web platform features <a href="#future-features" class="w-headline-link">#</a>

Assuming `URLPattern` becomes an established part of the web platform, other features that could benefit from routing or pattern matching can build on top of it as a primitive.

There are ongoing discussions about using `URLPattern` for proposed features like [service worker scope pattern matching](https://github.com/WICG/urlpattern/blob/main/explainer.md), [PWAs as file handlers](https://web.dev/pwa-url-handler/#the-web-app-origin-association-file), and [speculative prefetching](https://github.com/jeremyroman/alternate-loading-modes/blob/main/triggers.md).

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

See the [original explainer document](https://github.com/WICG/urlpattern/blob/main/explainer.md#references--acknowledgements) for a full list of acknowledgements.

The thumbnail image for this post is by [Vic](https://unsplash.com/@megindoors?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/route-66?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

<span class="w-mr--sm"> Last updated: Jul 22, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/urlpattern/index.md)

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
