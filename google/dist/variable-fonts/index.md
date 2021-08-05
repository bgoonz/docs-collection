<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/SHy7jOlEVPU1lsyfgvlG.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#introduction-to-variable-fonts-on-the-web" class="w-toc__header--link">Introduction to variable fonts on the web</a>

- [Browser compatibility](#browser-compatibility)
- [Introduction](#introduction)
- [Challenges for the designer and developer](#challenges-for-the-designer-and-developer)
- [Anatomy of a variable font](#anatomy-of-a-variable-font)
- [Italics](#italics)
- [Axes definitions](#axes-definitions)
- [Use cases and benefits](#use-cases-and-benefits)
- [Exciting expression](#exciting-expression)
- [Animation](#animation)
- [Finesse](#finesse)
- [Variable fonts in CSS](#variable-fonts-in-css)
- [Loading variable font files](#loading-variable-font-files)
- [Using weights and widths](#using-weights-and-widths)
- [Using italics and obliques](#using-italics-and-obliques)
- [Using optical sizes](#using-optical-sizes)
- [Using custom axes](#using-custom-axes)
- [Variable fonts on Google Fonts](#variable-fonts-on-google-fonts)
- [Font-variation-settings inheritance](#font-variation-settings-inheritance)
- [Performance gains](#performance-gains)
- [Fallbacks and browser support](#fallbacks)
- [Thanks](#thanks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Introduction to variable fonts on the web

A new font specification that can significantly reduce font file sizes

Feb 19, 2018 <span class="w-author__separator">•</span> Updated Aug 17, 2020

[<img src="https://web-dev.imgix.net/image/admin/0MyqDvMQmaxVodxo5kr9.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Mustafa Kurtuldu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/0MyqDvMQmaxVodxo5kr9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/0MyqDvMQmaxVodxo5kr9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/0MyqDvMQmaxVodxo5kr9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/0MyqDvMQmaxVodxo5kr9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/0MyqDvMQmaxVodxo5kr9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mustafakurtuldu/)

<a href="/authors/mustafakurtuldu/" class="w-author__name-link">Mustafa Kurtuldu</a>

- <a href="https://twitter.com/mustafa_x" class="w-author__link">Twitter</a>
- <a href="https://github.com/mustafa-x" class="w-author__link">GitHub</a>
- <a href="https://www.designtoday.info/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/Yw6cuEYfVm8eOqiRFtml.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Dave Crossland" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Yw6cuEYfVm8eOqiRFtml.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Yw6cuEYfVm8eOqiRFtml.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Yw6cuEYfVm8eOqiRFtml.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Yw6cuEYfVm8eOqiRFtml.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Yw6cuEYfVm8eOqiRFtml.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/dcrossland/)

<a href="/authors/dcrossland/" class="w-author__name-link">Dave Crossland</a>

- <a href="https://twitter.com/davelab6" class="w-author__link">Twitter</a>
- <a href="https://github.com/davelab6" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/sJXQNtqZbfnddKBtKZo1.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Roel Nieskens" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sJXQNtqZbfnddKBtKZo1.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/sJXQNtqZbfnddKBtKZo1.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/sJXQNtqZbfnddKBtKZo1.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/sJXQNtqZbfnddKBtKZo1.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/sJXQNtqZbfnddKBtKZo1.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/roeln/)

<a href="/authors/roeln/" class="w-author__name-link">Roel Nieskens</a>

- <a href="https://twitter.com/pixelambacht" class="w-author__link">Twitter</a>
- <a href="https://github.com/roeln" class="w-author__link">GitHub</a>
- <a href="https://pixelambacht.nl/" class="w-author__link">Blog</a>

In this article, we will look at what variable fonts are, the benefits they offer, and how we can use them in our work. First, let's review how typography works on the web, and what innovations variable fonts bring.

## Browser compatibility <a href="#browser-compatibility" class="w-headline-link">#</a>

As of May 2020 variable fonts are supported in most browsers. See [Can I use variable fonts?](https://caniuse.com/#feat=variable-fonts) and [Fallbacks](#fallbacks).

## Introduction <a href="#introduction" class="w-headline-link">#</a>

The terms font and typeface are often used interchangeably by developers. However there is a difference: A typeface is the underlying visual design that can exist in many different typesetting technologies, and a font is one of these implementations, in a digital file format. In other words, a typeface is what you _see_, and the font is what you _use_.

Another concept that is often overlooked is the distinction between a style, and a family. A style is a single and specific typeface, such as Bold Italic, and a family is the complete set of styles.

Before variable fonts, each style was implemented as a separate font file. With variable fonts, all styles can be contained in a single file.

## <figure><img src="https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format" alt="Left: a specimen of the Roboto typeface family. Right: named styles within the family." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RbhgXwS81Y9PVRJnTjPX.png?auto=format&amp;w=1600 1600w" width="800" height="600" /><figcaption>Left: a specimen of the Roboto typeface family. Right: named styles within the family.</figcaption></figure>Challenges for the designer and developer <a href="#challenges-for-the-designer-and-developer" class="w-headline-link">#</a>

When a designer creates a print project they face some constraints, such as the physical size of the page layout, the number of colors they can use (which is determined by the kind of printing press that will be used), and so on. But they can use as many typeface styles as they like. This means that the typography of print media is often rich and sophisticated, so that the reading experience is truly delightful. Think of the last time you enjoyed browsing an excellent magazine.

Web designers and developers have different constraints than print designers, and an important one is the associated bandwidth costs of our designs. This has been a sticking point for richer typographic experiences, as they come at a cost. With traditional web fonts, each style used in our designs requires users to download a separate font file, which increases latency and page rendering time. Only including the Regular and Bold styles, plus their italic counterparts, can amount to 500 KB or more of font data. This is even before we have dealt with how the fonts are rendered, the fallback patterns we need to use, or undesirable side-effects such as [FOIT and FOUT](https://www.zachleat.com/web/fout-vs-foit/).

Many font families offer a much wider range of styles, from Thin to Black weights, narrow and wide widths, a variety of stylistic details, and even size-specific designs (optimized for large or small text sizes.) Since you'd have to load a new font file for every style (or combinations of styles), many web developers choose not to use these capabilities, reducing the reading experience of their users.

## Anatomy of a variable font <a href="#anatomy-of-a-variable-font" class="w-headline-link">#</a>

Variable fonts address these challenges, by packing styles into a single file.

This works by starting with a central or 'default' style, usually the 'Regular'–an upright roman design with the most typical weight and width that is most suitable for plain text. This is then connected to other styles in a continuous range, called an 'axis.' The most common axis is **Weight**, which can connect the default style through to a Bold style. Any individual style can be located along an axis, and is called an 'instance' of the variable font. Some instances are named by the font developer, for example Weight axis location 600 is called SemiBold.

The variable font [Roboto Flex](https://github.com/TypeNetwork/Roboto-Flex) has three styles for its **Weight** axis. The Regular style is at the center, and there are two styles at the opposite ends of the axis, one lighter and the other heavier. Between these, you can choose from 900 instances:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format" alt="Above: Illustrated anatomy of the Weight axis for the typeface Roboto." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Ecr5godvTKunVXP7W8aU.png?auto=format&amp;w=1600 1600w" width="800" height="218" /><figcaption>Above: Illustrated anatomy of the Weight axis for the typeface Roboto.</figcaption></figure>The font developer can offer a set of different axes. You can combine them because they all share the same default styles. Roboto has three styles in a Width axis: the Regular is at the center of the axis, and two styles, narrower and wider, are at each end. These provide all the widths of the Regular style, and combine with the Weight axis to provide all the widths for every weight.

Roboto Flex in random combinations of Width and Weight

This means there are thousands of styles! This may seem like massive overkill, but the quality of the reading experience can be remarkably enhanced by this diversity of type styles. And, if it is without performance penalty, web developers can use a few or as many styles as they wish–it's up to their design.

### Italics <a href="#italics" class="w-headline-link">#</a>

The way that Italics are handled in variable fonts is interesting, as there are two difference approaches. Typefaces like Helvetica or Roboto have interpolation compatible contours, so their Roman and Italic styles can be interpolated between and the **Slant** axis can be used to get from Roman to Italic.

Other typefaces (such as Garamond, Baskerville, or Bodoni) have Roman and Italic glyph contours that are not interpolation compatible. For example, the contours that typically define a Roman lowercase "n" do not match the contours used to define an Italic lowercase "n". Instead of interpolating one contour to the other, the **Italic** axis toggles from Roman to Italic contours.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format" alt="Amstelvar&#39;s &quot;n&quot; contours in Italic (12 point, regular weight, normal width), and in Roman. Image supplied by David Berlow, type designer and typographer at Font Bureau." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/EySl1LIfX1QIrGq654PO.png?auto=format&amp;w=1600 1600w" width="800" height="520" /><figcaption>Amstelvar's "n" contours in Italic (12 point, regular weight, normal width), and in Roman. Image supplied by David Berlow, type designer and typographer at Font Bureau.</figcaption></figure>After the switch to Italic, the axes available to the user should be the same as those for the Roman, just as the character set should be the same.

A glyph substitution capability can also be seen for individual glyphs, and used anywhere in the design space of a variable font. For example, a dollar sign design with two vertical bars works best at larger point sizes, but at smaller point sizes a design with only one bar is better. When we have fewer pixels for rendering the glyph, a two bar design can become illegible. To combat this, much like the Italic axis, a glyph substitution of one glyph for another can occur along the **Optical Size** axis at a point decided by the type designer.

In summary, where the contours allow for it, type designers can create fonts that interpolate between various styles in a multi-dimensional design space. This gives you granular control over your typography, and a great deal of power.

## Axes definitions <a href="#axes-definitions" class="w-headline-link">#</a>

There are five [registered axes](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg#registered-axis-tags), which control known, predictable features of the font: weight, width, optical size, slant and italics. Besides those, a font can contain custom axes. These can control any design aspect of the font the type designer wishes: the size of serifs, the length of swashes, the height of ascenders or the size of the dot on the i.

Even though axes can control the same feature, they might use different values. For example, in the Oswald and Hepta Slab variable fonts there is only one axis available, Weight, but the ranges are different–Oswald has the same range as before it was upgraded to be variable, 200 to 700, but Hepta Slab has an extreme hairline weight at 1 that goes all the up to 900.

The five registered axes have 4-character lowercase tags that are used to set their values in CSS:

Axis names and CSS values

Weight

`wght`

Width

`wdth`

Slant

`slnt`

Optical Size

`opsz`

Italics

`ital`

Since the font developer defines which axes are available in a variable font, and which values they can have, it is essential to find out what each font offers. The font's documentation should provide this, or you can inspect the font using a tool like [Wakamai Fondue](https://wakamaifondue.com).

## Use cases and benefits <a href="#use-cases-and-benefits" class="w-headline-link">#</a>

Setting the axes values comes down to personal taste and applying typographic best practices. The danger with any new technology is possible misuse, and settings that are overly artistic or exploratory could also decrease legibility of the actual text. For titles, exploring different axes to create great artistic designs are exciting, but for body copy this risks making the text illegible.

### Exciting expression <a href="#exciting-expression" class="w-headline-link">#</a>

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format" sizes="(min-width: 495px) 495px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Rh7wLaBLauEF02D2dqMC.png?auto=format&amp;w=990 990w" width="495" height="174" /></figure>One great example of artistic expression is shown above, an exploration of the typeface [Decovar](https://www.typenetwork.com/brochure/decovar-a-decorative-variable-font-by-david-berlow) by Mandy Michael.

You can view the working example and source code for the above sample [here](https://codepen.io/mandymichael/pen/YYaWop).

### Animation <a href="#animation" class="w-headline-link">#</a>

Typeface Zycon, designed for animation by David Berlow, type designer and typographer at Font Bureau.

There is also a possibility to explore animating characters with variable fonts. Above is an example of different axes being used with the typeface Zycon. See the live [animation example on Axis Praxis](https://www.axis-praxis.org/specimens/zycon).

[Anicons](https://typogram.github.io/Anicons) is the world's first animated color icon font, based on Material Design Icons. Anicons is an experiment that combines two cutting edge font technologies: variable fonts and color fonts.

A few examples of hover animations from Anicon's color icon font

### Finesse <a href="#finesse" class="w-headline-link">#</a>

Amstelvar using little bits of XTRA in opposite directions so the words' widths are evened out

[Roboto Flex](https://github.com/TypeNetwork/Roboto-Flex) and [Amstelvar](https://github.com/TypeNetwork/Amstelvar) offer a set of "Parametric Axes." In these axes, the letters are deconstructed into 4 fundamental aspects of form: black or positive shapes, white or negative shapes, and the x and y dimensions. In the same way that primary colors can be blended with any other color to adjust it, these 4 aspects can be used to fine tune any other axis.

The XTRA axis in Amstelvar allows you to adjust the "white" per mille value, as shown above. Using little bits of XTRA in opposite directions, the words' widths are evened out.

## Variable fonts in CSS <a href="#variable-fonts-in-css" class="w-headline-link">#</a>

### Loading variable font files <a href="#loading-variable-font-files" class="w-headline-link">#</a>

Variable fonts are loaded though the same `@font-face` mechanism as traditional static web fonts, but with two new enhancements:

    @font-face {
       font-family: 'Roboto Flex';
     src: url('RobotoFlex-VF.woff2') format('woff2 supports variations'),
           url('RobotoFlex-VF.woff2') format('woff2-variations');
        font-weight: 100 1000;
        font-stretch: 25% 151%;
    }

**1. Source Formats:** We don't want the browser to download the font if it doesn't support variable fonts, so we add a `format` description: once in the [future format](https://www.w3.org/TR/css-fonts-4/#font-face-src-requirement-types) (`woff2 supports variations`), once in the current but soon to be deprecated format (`woff2-variations`). If the browser supports variable fonts and supports the upcoming syntax, it will use the first declaration. If it supports variable fonts and the current syntax, it will use the second declaration. They both point to the same font file.

**2. Style Ranges:** You'll notice we're supplying two values for `font-weight` and `font-stretch`. Instead of telling the browser which specific weight this font provides (for example `font-weight: 500;`), we now give it the **range** of weights supported by the font. For Roboto Flex, the Weight axis ranges from 100 to 1000, and CSS directly maps the axis range to the `font-weight` style property. By specifying the range in `@font-face`, any value outside this range will be "capped" to the nearest valid value. The Width axis range is mapped in the same way to the `font-stretch` property.

If you're using the Google Fonts API, this will all be taken care of. Not only will the CSS contain the proper source formats and ranges, Google Fonts will also send static fallback fonts in case variable fonts aren't supported.

### Using weights and widths <a href="#using-weights-and-widths" class="w-headline-link">#</a>

Currently, the axes you can reliably set from CSS are the `wght` axis through `font-weight`, and the `wdth` axis through `font-stretch`.

Traditionally, you would set `font-weight` as a keyword (`light`, `bold`) or as a numerical value between 100 and 900, in steps of 100. With variable fonts, you can set any value within the font's Width range:

    .kinda-light {
      font-weight: 125;
    }

    .super-heavy {
      font-weight: 1000;
    }

Roboto Flex' Weight axis being changed from its minimum to its maximum.

Likewise, we can set `font-stretch` with keywords (`condensed`, `ultra-expanded`) or with percentage values:

    .kinda-narrow {
      font-stretch: 33.3%;
    }

    .super-wide {
      font-stretch: 151%;
    }

Roboto Flex' Width axis being changed from its minimum to its maximum.

### Using italics and obliques <a href="#using-italics-and-obliques" class="w-headline-link">#</a>

The `ital` axis is intended for fonts that contain both a regular style, and an italic style. The axis is meant to be an on/off switch: value `0` is off and will show the regular style, value `1` will show the italics. Unlike other axes, there's no transition. A value of `0.5` won't give you "half italics".

The `slnt` axis is different from italics in that it's not a new _style_, but just slants the regular style. By default its value is `0`, which means the default upright letter shapes. Roboto Flex has a maximum slant of -10 degrees, meaning the letters will lean to the right when going from 0 to -10.

It would be intuitive to set these axis through the `font-style` property, but as of April 2020, how to exactly do this is [still being worked out](https://github.com/w3c/csswg-drafts/issues/3125). So for now, you should treat these as custom axes, and set them through `font-variation-settings`:

    i, em, .italic {
     /* Should be font-style: italic; */
      font-variation-settings: 'ital' 1;
    }

    .slanted {
     /* Should be font-style: oblique 10deg; */
       font-variation-settings: 'slnt' 10;
    }

Roboto Flex' Slant axis being changed from its minimum to its maximum.

### Using optical sizes <a href="#using-optical-sizes" class="w-headline-link">#</a>

A typeface can be rendered very small (a 12px footnote) or very large (a 80px headline). Fonts can respond to these size changes by changing its letter shapes to better suit its size. A small size might be better off without fine details, while a large size might benefit from more details and thinner strokes.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format" alt="The letter &#39;a&#39; in Roboto Flex at different pixel sizes, then scaled to be the same size, shows the differences in design. Try it yourself on Codepen" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/wrVCGSQNaGWhNp97BoRS.png?auto=format&amp;w=1600 1600w" width="800" height="147" /><figcaption>The letter 'a' in Roboto Flex at different pixel sizes, then scaled to be the same size, shows the differences in design. <a href="https://codepen.io/RoelN/pen/PoPvdeV">Try it yourself on Codepen</a></figcaption></figure>A new CSS property has been introduced for this axis: `font-optical-sizing`. By default it's set to `auto`, which makes the browser set the axis value based on the `font-size`. This means the browser will pick the best optical size automatically, but if you wish to turn this off you can set `font-optical-sizing` to `none`.

You can also set a custom value for the `opsz` axis, if you deliberately want an optical size that doesn't match the font size. The following CSS would cause text to be displayed at a large size, but at an optical size as if it were printed in `8pt`:

    .small-yet-large {
      font-size: 100px;
      font-variation-settings: 'opsz' 8;
    }

### Using custom axes <a href="#using-custom-axes" class="w-headline-link">#</a>

Unlike registered axes, custom axes will not be mapped to an existing CSS property, so you will always have to set them through `font-variation-settings`. Tags for custom axes are always in uppercase, to distinguish them from registered axes.

Roboto Flex offers a few custom axes, and the most important is Grade (`GRAD`). A Grade axis is interesting as it changes the weight of the font without changing the widths, so line breaks do not change. By playing with a Grade axis, you can avoid being forced to fiddle with changes to Weight axis that affects the overall width, and then changes to the Width axis that affect the overall weight.

Roboto Flex' Grade axis being changed from its minimum to its maximum.

As `GRAD` is a custom axis, with a range of -1 to 1, we need to address it with `font-variation-settings`:

    .grade-light {
       font-variation-settings: `GRAD` -1;
    }

    .grade-normal {
     font-variation-settings: `GRAD` 0;
    }

    .grade-heavy {
       font-variation-settings: `GRAD` 1;
    }

### Variable fonts on Google Fonts <a href="#variable-fonts-on-google-fonts" class="w-headline-link">#</a>

Google Fonts has expanded their catalog with [variable fonts](https://fonts.google.com/?vfonly=true), and adding new ones regularly. The interface is currently aimed at picking single instances from the font: you select the variation you want, click "Select this style", and it will be added to the `<link>` element that fetches the CSS and fonts from Google Fonts.

To use all the available axes, or ranges of values, you will have to [manually compose](https://developers.google.com/fonts/docs/css2) the URL to the Google Fonts API. The [variable fonts overview](https://fonts.google.com/variablefonts) lists all axes and values.

The [Google Variable Fonts Links](https://github.com/RoelN/google-variable-fonts-links) tool can also give you the latest URLs for the full variable fonts.

## Font-variation-settings inheritance <a href="#font-variation-settings-inheritance" class="w-headline-link">#</a>

While all registered axes will soon be supported through existing CSS properties, for the time being you might need to rely on `font-variation-settings` as a fallback. And if your font has custom axes, you'll need `font-variation-settings` too.

However, here's a little gotcha with `font-variation-settings`. Every property you _don't explicitly set_ will automatically be reset to its default. Previously set values aren't inherited! This means the following will not work as expected:

    <span class="slanted grade-light">
     I should be slanted and have a light grade
    </span>

First the browser will apply `font-variation-settings: 'slnt' 10` from the `.slanted` class. Then it will apply `font-variation-settings: 'GRAD' -1` from the `.grade-light` class. But this will reset the `slnt` back to its default of 0! The result will be text in a light grade, but not slanted.

Luckily, we can work around this by using CSS variables:

    /* Set the default values */
    :root {
       --slnt: 0;
        --GRAD: 0;
    }

    /* Change value for these elements and their children */
    .slanted {
        --slnt: 10;
    }

    .grade-light {
      --grad: -1;
    }

    .grade-normal {
     --grad: 0;
    }

    .grade-heavy {
       --grad: 1;
    }

    /* Apply whatever value is kept in the CSS variables */
    .slanted,
    .grade-light,
    .grade-normal,
    .grade-heavy {
     font-variation-settings: 'slnt' var(--slnt), 'GRAD' var(--GRAD);
    }

CSS variables will cascade, so if an element (or one of its parents) will have set the `slnt` to `10`, it will keep that value, even if you set `GRAD` to something else. See [Fixing variable font inheritance](https://pixelambacht.nl/2019/fixing-variable-font-inheritance/) for an in-depth explanation of this technique.

Note that animating CSS variables doesn't work (by design), so something like this doesn't work:

    @keyframes width-animation {
       from { --wdth: 25; }
       to   { --wdth: 151; }
    }

These animations will have to happen directly on `font-variation-settings`.

## Performance gains <a href="#performance-gains" class="w-headline-link">#</a>

OpenType variable fonts allow us to store multiple variations of a type family into a single font file. [Monotype](https://medium.com/@monotype/part-2-from-truetype-gx-to-variable-fonts-4c28b16997c3) ran an experiment by combining 12 input fonts to generate eight weights, across three widths, across both the Italic and Roman styles. Storing 48 individual fonts in a single variable font file meant a _88% reduction in file size_.

However, if you are using a single font such as Roboto Regular and nothing else, you might not see a net gain in font size if you were to switch to a variable font with many axes. As always, it depends on your use-case.

On the flip side, animating the font between settings may cause performance issues. Although this will improve once variable font support in browsers gets more mature, the problem can be reduced somewhat by only animating fonts that are currently on screen. This handy snippet by [Dinamo](https://abcdinamo.com/news/using-variable-fonts-on-the-web) pauses animations in elements with the class `vf-animation`, when they're not on screen:

    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        // Pause/Play the animation
        if (entry.isIntersecting) entry.target.style.animationPlayState = "running"
        else entry.target.style.animationPlayState = "paused"
      });
    });

    var variableTexts = document.querySelectorAll(".vf-animation");
    variableTexts.forEach(function(el) { observer.observe(el); });

If your font responds to user interaction, it's a good idea to [throttle or debounce](https://css-tricks.com/debouncing-throttling-explained-examples/) input events. This will prevent the browser from rendering instances of the variable font that changed so little from the previous instance the human eye wouldn't see the difference.

If you're using Google Fonts, it's a good idea to [preconnect](/preconnect-and-dns-prefetch/) to `https://fonts.gstatic.com`, the domain where Google's fonts are hosted. This will make sure the browser knows early on where to get the fonts when it comes across them in the CSS:

    <link rel="preconnect" href="https://fonts.gstatic.com" />

This tip works for other CDNs as well: the sooner you let the browser set up a network connection, the sooner it can download your fonts.

Find more performance tips for loading Google Fonts in [The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/).

## Fallbacks and browser support <a href="#fallbacks" class="w-headline-link">#</a>

All modern browsers [support variable fonts](https://caniuse.com/#feat=variable-fonts). In case you need to support older browsers, you can choose to build your site with static fonts, and use variable fonts as progressive enhancement:

    /* Set up Roboto for old browsers, only regular + bold */
    @font-face {
      font-family: Roboto;
      src: url('Roboto-Regular.woff2');
      font-weight: normal;
    }

    @font-face {
      font-family: Roboto;
      src: url('Roboto-Bold.woff2');
      font-weight: bold;
    }

    body {
      font-family: Roboto;
    }

    .super-bold {
      font-weight: bold;
    }

    /* Set up Roboto for modern browsers, all weights */
    @supports (font-variation-settings: normal) {
      @font-face {
        font-family: 'Roboto';
        src: url('RobotoFlex-VF.woff2') format('woff2 supports variations'),
             url('RobotoFlex-VF.woff2') format('woff2-variations');
        font-weight: 100 1000;
        font-stretch: 25% 151%;
      }

      .super-bold {
        font-weight: 1000;
      }
    }

For older browsers, text with the class `.super-bold` will get rendered in the normal bold, as that's the only bold font we have available. When variable fonts are supported, we can actually use the heaviest weight of 1000.

If you are using the Google Fonts API, it will take care of loading the proper fonts for your visitor's browsers. Say you request the font Oswald in weight range 200 to 700, like so:

    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">

Modern browsers that can handle variable fonts will get the variable font, and will have every weight between 200 and 700 available. Older browsers will get served individual static fonts for every weight. In this case, this means they'll download 6 font files: one for weight 200, one for weight 300, and so on.

## Thanks <a href="#thanks" class="w-headline-link">#</a>

This article would have only been made possible with the help of the following people:

- [Mustafa Kurtuldu](https://twitter.com/mustafa_x), UX designer and design advocate at Google
- [Roel Nieskens](https://twitter.com/PixelAmbacht), UX designer/developer and typography expert at [Kabisa](https://kabisa.nl)
- [Dave Crossland](https://twitter.com/davelab6), Program Manager, Google Fonts
- [David Berlow](https://twitter.com/dberlow), type designer and typographer at [Font Bureau](https://fontbureau.typenetwork.com/)
- [Laurence Penney](https://twitter.com/lorp), developer of [axis-praxis.org](https://axis-praxis.org)
- [Mandy Michael](https://twitter.com/Mandy_Kerr), developer of [variablefonts.dev](https://variablefonts.dev)

Hero image by [Bruno Martins](https://unsplash.com/@brunus) on [Unsplash](https://unsplash.com/photos/OhJmwB4XWLE).

<a href="/tags/fonts/" class="w-chip">Fonts</a> <a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Aug 17, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/variable-fonts/index.md)

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
