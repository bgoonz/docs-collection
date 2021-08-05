<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format" alt="Page of a font book." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/oeXwG1zSwnivzpvcUJly.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#use-advanced-typography-with-local-fonts" class="w-toc__header--link">Use advanced typography with local fonts</a>

- [Web safe fonts](#web-safe-fonts)
- [Web fonts](#web-fonts)
- [Local fonts as fingerprint vector](#local-fonts-as-fingerprint-vector)
- [The Local Font Access API](#the-local-font-access-api)
- [Why do we need the Local Font Access API when there are web fonts?](#why-do-we-need-the-local-font-access-api-when-there-are-web-fonts)
- [Current status](#status)
- [How to use the Local Font Access API](#how-to-use-the-local-font-access-api)
- [Demo](#demo)
- [Privacy considerations](#privacy-considerations)
- [Security and permissions](#security-and-permissions)
- [User control](#user-control)
- [Transparency](#transparency)
- [Permission persistence](#permission-persistence)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful links](#helpful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Use advanced typography with local fonts

Learn how the Local Font Access API allows you to access the user's locally installed fonts and obtain low-level details about them.

Aug 24, 2020 <span class="w-author__separator">•</span> Updated Jul 30, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The Local Font Access API is part of the [capabilities project](https://developers.google.com/web/updates/capabilities) and is currently in development. This post will be updated as the implementation progresses.

## Web safe fonts <a href="#web-safe-fonts" class="w-headline-link">#</a>

If you have been doing web development long enough, you may remember the so-called [web safe fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts). These fonts are known to be available on nearly all instances of the most used operating systems (namely Windows, macOS, the most common Linux distributions, Android, and iOS). In the early 2000s, Microsoft even spearheaded an [initiative](https://web.archive.org/web/20020124085641/http://www.microsoft.com/typography/fontpack/default.htm) called _TrueType core fonts for the Web_ that provided these fonts for free download with the objective that _"whenever you visit a Web site that specifies them, you'll see pages exactly as the site designer intended"_. Yes, this included sites set in [Comic Sans MS](https://docs.microsoft.com/en-us/typography/font-list/comic-sans-ms). Here is a classic web safe font stack (with the ultimate fallback of whatever [`sans-serif`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#%3Cgeneric-name%3E:~:text=sans%2Dserif,-Glyphs) font) might look like this:

    body {
      font-family: Helvetica, Arial, sans-serif;
    }

## Web fonts <a href="#web-fonts" class="w-headline-link">#</a>

The days where web safe fonts really mattered are long gone. Today, we have [web fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts), some of which are even [variable fonts](/variable-fonts/) that we can tweak further by changing the values for the various exposed axes. You can use web fonts by declaring an [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) block at the start of the CSS, which specifies the font file(s) to download:

    @font-face {
      font-family: 'FlamboyantSansSerif';
      src: url('flamboyant.woff2');
    }

After this, you can then use the custom web font by specifying the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family), as normal:

    body {
      font-family: 'FlamboyantSansSerif';
    }

## Local fonts as fingerprint vector <a href="#local-fonts-as-fingerprint-vector" class="w-headline-link">#</a>

Most web fonts come from, well, the web. An interesting fact, though, is that the [`src`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src) property in the `@font-face` declaration, apart from the [`url()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#Values:~:text=%3Curl%3E%20%5B%20format(%20%3Cstring%3E%23%20)%20%5D%3F,-Specifies>) function, also accepts a [`local()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#format():~:text=downloaded.-,%3Cfont%2Dface%2Dname%3E>) function. This allows custom fonts to be loaded (surprise!) locally. If the user happens to have _FlamboyantSansSerif_ installed on their operating system, the local copy will be used rather than it being downloaded:

    @font-face {
      font-family: 'FlamboyantSansSerif';
      src: local('FlamboyantSansSerif'), url('flamboyant.woff2');
    }

This approach provides a nice fallback mechanism that potentially saves bandwidth. On the Internet, unfortunately, we cannot have nice things. The problem with the `local()` function is that it can be abused for browser fingerprinting. Turns out, the list of fonts a user has installed can be pretty identifying. A lot of companies have their own corporate fonts that are installed on employees' laptops. For example, Google has a corporate font called _Google Sans_.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format" alt="The Google Sans font installed on a Google employee&#39;s laptop." class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xivl6c1xM2VlqFf9GvgQ.png?auto=format&amp;w=1600 1600w" width="800" height="420" /><figcaption>The Google Sans font installed on a Google employee's laptop.</figcaption></figure>An attacker can try to determine what company someone works for by testing for the existence of a large number of known corporate fonts like *Google Sans*. The attacker would attempt rendering text set in these fonts on a canvas and measure the glyphs. If the glyphs match the known shape of the corporate font, the attacker has a hit. If the glyphs do not match, the attacker knows that a default replacement font was used since the corporate font was not installed. For full details on this and other browser fingerprinting attacks, read the [survey paper](http://www-sop.inria.fr/members/Nataliia.Bielova/papers/Lape-etal-20-TWEB.pdf) by Laperdix *et al.*

Company fonts apart, even just the list of installed fonts can be identifying. The situation with this attack vector has become so bad that recently the WebKit team [decided](https://webkit.org/tracking-prevention/#table-of-contents-toggle:~:text=Changed%20font%20availability%20to%20web%20content,but%20not%20locally%20user%2Dinstalled%20fonts) to _"only include \[in the list available fonts\] web fonts and fonts that come with the operating system, but not locally user-installed fonts"_. (And here I am, with an article on granting access to local fonts.)

## The Local Font Access API <a href="#the-local-font-access-api" class="w-headline-link">#</a>

The beginning of this article may have put you in a negative mood. Can we really not have nice things? Fret not. We think we can, and maybe [everything is not hopeless](http://hyperboleandahalf.blogspot.com/2013/05/depression-part-two.html#Blog1:~:text=like-,hopeless). But first, let me answer a question that you might be asking yourself.

### Why do we need the Local Font Access API when there are web fonts? <a href="#why-do-we-need-the-local-font-access-api-when-there-are-web-fonts" class="w-headline-link">#</a>

Professional-quality design and graphics tools have historically been difficult to deliver on the web. One stumbling block has been an inability to access and use the full variety of professionally constructed and hinted fonts that designers have locally installed. Web fonts enable some publishing use-cases, but fail to enable programmatic access to the vector glyph shapes and font tables used by rasterizers to render the glyph outlines. There is likewise no way to access a web font's binary data.

- Design tools need access to font bytes to do their own OpenType layout implementation and allow design tools to hook in at lower levels, for actions such as performing vector filters or transforms on the glyph shapes.
- Developers may have legacy font stacks for their applications that they are bringing to the web. To use these stacks, they usually require direct access to font data, something web fonts do not provide.
- Some fonts may not be licensed for delivery over the web. For example, Linotype has a license for some fonts that only includes [desktop use](https://www.linotype.com/25/font-licensing.html).

The Local Font Access API is an attempt at solving these challenges. It consists of two parts:

- A **font enumeration API**, which allows users to grant access to the full set of available system fonts.
- From each enumeration result, the ability to request low-level (byte-oriented) **SFNT container access** that includes the full font data.

### Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/local-font-access">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/local-font-access/">In progress</a></td></tr><tr class="odd"><td>3. <strong>Gather feedback &amp; iterate on design</strong></td><td><a href="#feedback"><strong>In progress</strong></a></td></tr><tr class="even"><td>4. Origin trial</td><td>Complete</td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

### How to use the Local Font Access API <a href="#how-to-use-the-local-font-access-api" class="w-headline-link">#</a>

#### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the Local Font Access API locally, enable the `#font-access` flag in `about://flags`.

#### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the Local Font Access API is supported, use:

    if ('fonts' in navigator) {
      // The Local Font Access API is supported
    }

#### Asking for permission <a href="#asking-for-permission" class="w-headline-link">#</a>

Access to a user's local fonts is gated behind the `"local-fonts"` permission, which you can request with [`navigator.permissions.request()`](https://w3c.github.io/permissions/#requesting-more-permission).

    // Ask for permission to use the API
    try {
      const status = await navigator.permissions.request({
        name: 'local-fonts',
      });
      if (status.state !== 'granted') {
        throw new Error('Permission to access local fonts not granted.');
      }
    } catch (err) {
      // A `TypeError` indicates the 'local-fonts'
      // permission is not yet implemented, so
      // only `throw` if this is _not_ the problem.
      if (err.name !== 'TypeError') {
        throw err;
      }
    }

#### Enumerating local fonts <a href="#enumerating-local-fonts" class="w-headline-link">#</a>

Once the permission has been granted, you can then, from the `FontManager` interface that is exposed on `navigator.fonts`, call `query()` to ask the browser for the locally installed fonts, which it will display in a picker for the user to select all or a subset from to be shared with the page. This results in an array that you can loop over. Each font is represented as a `FontMetadata` object with the properties `family` (for example, `"Comic Sans MS"`), `fullName` (for example, `"Comic Sans MS"`), and `postscriptName` (for example, `"ComicSansMS"`).

    // Query for all available fonts and log metadata.
    try {
      const pickedFonts = await navigator.fonts.query();
      for (const metadata of pickedFonts) {
        console.log(metadata.postscriptName);
        console.log(metadata.fullName);
        console.log(metadata.family);
      }
    } catch (err) {
      console.error(err.name, err.message);
    }

#### Accessing SFNT data <a href="#accessing-sfnt-data" class="w-headline-link">#</a>

Full [SFNT](https://en.wikipedia.org/wiki/SFNT) access is available via the `blob()` method of the `FontMetadata` object. SFNT is a font file format which can contain other fonts, such as PostScript, TrueType, OpenType, Web Open Font Format (WOFF) fonts and others.

    try {
      const pickedFonts = await navigator.fonts.query();
      for (const metadata of pickedFonts) {
        // We're only interested in a particular font.
        if (metadata.family !== 'Comic Sans MS') {
          continue;
        }
        // `blob()` returns a Blob containing valid and complete
        // SFNT-wrapped font data.
        const sfnt = await metadata.blob();

        const sfntVersion = new TextDecoder().decode(
          // Slice out only the bytes we need: the first 4 bytes are the SFNT
          // version info.
          // Spec: https://docs.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
          await sfnt.slice(0, 4).arrayBuffer(),
        );

        let outlineFormat = 'UNKNOWN';
        switch (sfntVersion) {
          case '\x00\x01\x00\x00':
          case 'true':
          case 'typ1':
            outlineFormat = 'truetype';
            break;
          case 'OTTO':
            outlineFormat = 'cff';
            break;
        }
        console.log('Outline format:', outlineFormat);
      }
    } catch (err) {
      console.error(err.name, err.message);
    }

## Demo <a href="#demo" class="w-headline-link">#</a>

You can see the Local Font Access API in action in the [demo](https://local-font-access.glitch.me/demo/) below. Be sure to also check out the [source code](https://glitch.com/edit/#!/local-font-access?path=README.md%3A1%3A0). The demo showcases a custom element called [`<font-select>`](https://github.com/tomayac/font-select) that implements a local font picker.

## Privacy considerations <a href="#privacy-considerations" class="w-headline-link">#</a>

The `"local-fonts"` permission appears to provide a highly fingerprintable surface. However, browsers are free to return anything they like. For example, anonymity-focused browsers may choose to only provide a set of default fonts built into the browser. Similarly, browsers are not required to provide table data exactly as it appears on disk.

Wherever possible, the Local Font Access API is designed to only expose exactly the information needed to enable the mentioned use cases. System APIs may produce a list of installed fonts not in a random or a sorted order, but in the order of font installation. Returning exactly the list of installed fonts given by such a system API can expose additional data that may be used for fingerprinting, and use cases we want to enable are not assisted by retaining this ordering. As a result, this API requires that the returned data be sorted before being returned.

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chrome team has designed and implemented the Local Font Access API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

### User control <a href="#user-control" class="w-headline-link">#</a>

Access to a user's fonts is fully under their control and will not be allowed unless the `"local-fonts"` permission, as listed in the [permission registry](https://w3c.github.io/permissions/#permission-registry), is granted.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

Whether a site has been granted access to the user's local fonts will be visible in the [site information sheet](https://support.google.com/chrome/answer/114662?hl=en&co=GENIE.Platform=Desktop).

### Permission persistence <a href="#permission-persistence" class="w-headline-link">#</a>

The `"local-fonts"` permission will be persisted between page reloads. It can be revoked via the _site information_ sheet.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team wants to hear about your experiences with the Local Font Access API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that does not work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/local-font-access/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>Storage>FontAccess` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Local Font Access API? Your public support helps the Chrome team to prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#LocalFontAccess`](https://twitter.com/search?q=%23LocalFontAccess&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful-links" class="w-headline-link">#</a>

- [Explainer](https://github.com/WICG/local-font-access)
- [Spec draft](https://wicg.github.io/local-font-access/)
- [Chromium bug for font enumeration](https://bugs.chromium.org/p/chromium/issues/detail?id=535764)
- [Chromium bug for font table access](https://crbug.com/982054)
- [ChromeStatus entry](https://chromestatus.com/feature/6234451761692672)
- [GitHub repo](https://github.com/WICG/local-font-access/issues)
- [TAG review](https://github.com/w3ctag/design-reviews/issues/399)
- [Mozilla standards position](https://github.com/mozilla/standards-positions/issues/401)
- [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/-7289075996899147775)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The Local Font Access API spec was edited by [Emil A. Eklund](https://www.linkedin.com/in/emilaeklund/), [Alex Russell](https://infrequently.org/), [Joshua Bell](https://www.linkedin.com/in/joshuaseanbell/), and [Olivier Yiptong](https://github.com/oyiptong/). This article was reviewed by [Joe Medley](https://github.com/jpmedley), [Dominik Röttsches](https://fi.linkedin.com/in/dominik-r%C3%B6ttsches-7323684), and [Olivier Yiptong](https://github.com/oyiptong/). Hero image by [Brett Jordan](https://unsplash.com/@brett_jordan) on [Unsplash](https://unsplash.com/photos/qrjvkj-oS-M).

<a href="/tags/fonts/" class="w-chip">Fonts</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 30, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/local-fonts/index.md)

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
