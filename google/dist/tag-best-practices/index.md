<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/aIZgX5qHUBalZz0dUNqN.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#best-practices-for-tags-and-tag-managers" class="w-toc__header--link">Best practices for tags and tag managers</a>

- [Tag types](#tag-types)
- [Not all scripts should be loaded using a tag manager](#not-all-scripts-should-be-loaded-using-a-tag-manager)
- [Be careful with Custom HTML tags](#be-careful-with-custom-html-tags)
- [Consider using Custom Templates](#consider-using-custom-templates)
- [Inject scripts correctly](#inject-scripts-correctly)
- [Use pixels](#use-pixels)
- [Get clarification](#get-clarification)
- [Triggers](#triggers)
- [Choose an appropriate trigger event](#choose-an-appropriate-trigger-event)
- [Use custom events](#use-custom-events)
- [Use specific trigger conditions](#use-specific-trigger-conditions)
- [Load your tag manager at an appropriate time](#load-your-tag-manager-at-an-appropriate-time)
- [Tag Management](#tag-management)
- [Use the data layer](#use-the-data-layer)
- [Remove duplicate and unused tags](#remove-duplicate-and-unused-tags)
- [Use allow and deny lists](#use-allow-and-deny-lists)
- [Consider using server-side tagging](#consider-using-server-side-tagging)
- [Containers](#containers)
- [Use only one container per page](#use-only-one-container-per-page)
- [Use separate containers if needed](#use-separate-containers-if-needed)
- [Keep an eye on container size](#keep-an-eye-on-container-size)
- [Name your container versions](#name-your-container-versions)
- [Tagging workflows](#tagging-workflows)
- [Test tags before deploying](#test-tags-before-deploying)
- [Monitor tag performance](#monitor-tag-performance)
- [Require approval for container changes](#require-approval-for-container-changes)
- [Periodically audit tag usage](#periodically-audit-tag-usage)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Best practices for tags and tag managers

Optimize tags and tag managers for Core Web Vitals.

Jul 29, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/learn-web-vitals" class="w-post-signpost__link">Web Vitals</a>

[<img src="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Katie Hempenius" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/fZo7BJGec2MNRt6cWpeh.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/katiehempenius/)

<a href="/authors/katiehempenius/" class="w-author__name-link">Katie Hempenius</a>

- <a href="https://twitter.com/katiehempenius" class="w-author__link">Twitter</a>
- <a href="https://github.com/khempenius" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@khempenius" class="w-author__link">Glitch</a>
- <a href="https://katiehempenius.com/" class="w-author__link">Blog</a>

[Tags](https://support.google.com/tagmanager/answer/3281060?hl=en) are snippets of third-party code that are inserted into a site, typically via a tag manager. Tags are most commonly used for marketing and analytics.

Although tags and third-party scripts are often fundamentally the exact same thing, the separate terminology reflects the different ways that these scripts are used: "tags" are typically owned by marketing departments and added via tag managers; whereas "third-party scripts" more commonly refer to resources added through code changes made by engineering departments.

The performance impact of tags and tag managers varies wildly from site to site. Tag managers can be compared to an envelope: the tag manager provides a vessel—but what you fill it with and how you use it is mostly up to you.

This article discusses techniques for optimizing tags and tag managers for performance and Web Vitals. Although this article references Google Tag Manager, many of the ideas discussed are also applicable to other tag managers.

## Tag types <a href="#tag-types" class="w-headline-link">#</a>

The impact of tags on performance varies by tag type. Generally speaking, image tags ("pixels") are the most performant, followed by custom templates, and lastly, custom HTML tags.

However, keep in mind that how you use a tag greatly influences its performance impact. "Pixels" are highly performant largely because the nature of this tag type imposes tight restrictions on how they can be used; custom HTML tags aren't necessarily always bad for performance, but due to the level of freedom they offer users, they can be easy to misuse in a way that is bad for performance.

When thinking about tags, keep scale in mind: the performance impact of any single tag may be negligible—but can become significant when tens or hundreds of tags are used on the same page.

### Not all scripts should be loaded using a tag manager <a href="#not-all-scripts-should-be-loaded-using-a-tag-manager" class="w-headline-link">#</a>

Tag managers are typically not a good mechanism for loading resources that implement immediate visual or functional aspects of the user experience—for example, cookie notices, hero images, or site features. Using a tag manager to load these resources typically delays their delivery. This is bad for the user experience and can also increase metrics like LCP and CLS. In addition, keep in mind that some users block tag managers. Using a tag manager to implement UX features may result in a broken website for some of your users.

Resources requested via tag manager will typically load later than resources requested directly. This is not always a bad thing. If a tag manager is primarily used to deliver non-essential resources, this delay can be used constructively by providing a mechanism for delaying non-essential requests.

### Be careful with Custom HTML tags <a href="#be-careful-with-custom-html-tags" class="w-headline-link">#</a>

[Custom HTML tags](https://support.google.com/tagmanager/answer/6107167/custom-tags?hl=en#CustomHTML) have been around for many years and are heavily used on most sites. Custom HTML tags allow you to enter your own code with few restrictions. As a result, Custom HTML tags can be used in a wide variety of ways and their performance impact varies significantly. When measuring the performance of your site, be aware that most tools will attribute the performance impact of a Custom HTML tag to the tag manager that injected it—rather than the tag itself.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format" alt="Screenshot of creating a custom tag in Google Tag Manager" class="screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/cjLFJStmZvkQkr4DYPlk.png?auto=format&amp;w=1600 1600w" width="800" height="470" />

Custom HTML tags work by inserting an element into the surrounding page. The act of inserting elements into the page can be a source of performance issues, and in some cases, also cause layout shifts.

- In most situations, if an element is inserted into the page, the browser must recalculate the size and position of each item on the page—this process is known as [layout](https://developers.google.com/web/updates/2018/09/inside-browser-part3#layout). The performance impact of a single layout is minimal, but when it occurs excessively it can become a source of performance issues. The impact of this phenomenon is larger on lower-end devices and pages with a high number of DOM elements.
- If a visible page element is inserted into the DOM after the surrounding area has already been rendered, it can cause a layout shift. This phenomenon is not unique to tag managers—however, because tags typically load later than other parts of the page, it's common for them to be inserted into the DOM after the surrounding page has already been rendered.

If you're adding or changing visible content on a page, keep in mind that search engines will need to be able to fetch and process the JavaScript used. For Google, you can [verify rendering of a page](https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering#verify) for Search; other search engines may have similar testing tools available.

### Consider using Custom Templates <a href="#consider-using-custom-templates" class="w-headline-link">#</a>

[Custom templates](https://developers.google.com/tag-manager/templates) support some of the same operations as Custom HTML tags but are built upon a sandboxed version of JavaScript that provides [APIs](https://developers.google.com/tag-manager/templates/api) for common use cases like script injection and pixel injection. Due to the greater restrictions imposed on custom templates, these tags are much less likely to exhibit performance or security issues; however, for these same reasons, custom templates will not work for all use cases.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format" alt="Screenshot of using a custom template in Google Tag Manager" class="screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QRz6pn83YE6plVivynA7.png?auto=format&amp;w=1600 1600w" width="800" height="388" />

### Inject scripts correctly <a href="#inject-scripts-correctly" class="w-headline-link">#</a>

Using a tag manager to inject a script is a very common use case. The recommended way to do this is to use a Custom Template and the [`injectScript`](https://developers.google.com/tag-manager/templates/api#injectscript) API.

For information on using the injectScript API to convert an existing Custom HTML tag, see [Convert an existing tag](https://developers.google.com/tag-manager/templates/convert-existing-tag).

If you must you use a Custom HTML tag, here are some things to keep in mind:

- Libraries and large third-party scripts should be loaded via a script tag that downloads an external file (for example, `<script src="external-scripts.js">`), rather than directly copy-pasting the script's contents into the tag. Although forgoing use of the `<script>` tag eliminates a separate round-trip to download the script's contents, this practice increases container size and prevents the script from being cached separately by the browser.
- Many vendors recommend placing their `<script>` tag at the top of the `<head>`. However, for scripts loaded via tag manager, this recommendation is usually unnecessary: in most situations, the browser has already finished parsing the `<head>` by the time that the tag manager executes.

### Use pixels <a href="#use-pixels" class="w-headline-link">#</a>

In some situations third-party scripts can be replaced with image or iframe "pixels". Compared to their script-based counterparts, these pixels may support less functionality; however, because there is no JavaScript execution, they are also the most performant and secure type of tag. Pixels have a very small resource size (less than 1 KB) and do not cause layout shifts.

Check with your third-party provider for more information on their support for pixels. Additionally, you can try inspecting their code for a `<noscript>` tag. If a vendor supports pixels, they will often include them within the `<noscript>` tag.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format" alt="Screenshot of custom image tag in Google Tag Manager" sizes="(min-width: 512px) 512px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/QMdKBiA8UYcX4V06Lt8V.png?auto=format&amp;w=1024 1024w" width="512" height="295" />

#### Alternatives to pixels <a href="#alternatives-to-pixels" class="w-headline-link">#</a>

Pixels became popular largely because at one time they were one of the cheapest and most reliable ways to make a HTTP request in situations where the server response is not relevant ( for example, when sending data to analytics providers). The [`navigator.sendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) and [`fetch() keepalive`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters) APIs are designed to address this same use case but are arguably more reliable than pixels.

The `sendBeacon()` and `fetch() keepalive` APIs will both still work in situations where the browser is [unloading](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) the page: for example, both of these APIs can be used to track outbound link clicks. By contrast, techniques like pixels and [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) would likely fail in those cases.

There is nothing wrong with continuing to use pixels—they are well supported and have minimal performance impact. However, if you are building your own beacons, it is worth considering using one of these APIs.

##### `sendBeacon()` <a href="#sendbeacon()" class="w-headline-link">#</a>

The [`navigator.sendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) API is designed for sending small amounts of data to web servers in situations where the server response does not matter.

    const url = "https://example.com/analytics";
    const data = JSON.stringify({
        event: "checkout",
        time: performance.now()
    });

    navigator.sendBeacon(url, data);

`sendBeacon()` has a limited API: it only supports making POST requests and does not support setting custom headers. It is [supported](https://caniuse.com/beacon) by all modern browsers.

##### `fetch() keepalive` <a href="#fetch()-keepalive" class="w-headline-link">#</a>

[`keepalive`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters) is a flag that allows the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to be used to make non-blocking requests like event reporting and analytics. It is used by including `keepalive: true` in the parameters passed to `fetch()`.

    const url = "https://example.com/analytics";
    const data = JSON.stringify({
      event: "checkout",
      time: performance.now()
    });

    fetch(url, {
        method: 'POST',
        body: data,
        keepalive: true
    });

If `fetch() keepalive` and `sendBeacon()` seem very similar, it's because they are. In fact, in Chromium browsers, `sendBeacon()` is now built upon `fetch() keepalive`.

When choosing between `fetch() keepalive` and `sendBeacon()`, it's important to consider the features and browser support that you need. The fetch() API is significantly more flexible; however, `keepalive` has less browser [support](https://caniuse.com/?search=keepalive) than `sendBeacon()`.

### Get clarification <a href="#get-clarification" class="w-headline-link">#</a>

Tags are often created by following guidance provided by a third-party vendor. If it is unclear what a vendor's code does—consider asking someone who knows. Getting a second opinion can help identify if a tag has the potential to create performance or security issues.

## Triggers <a href="#triggers" class="w-headline-link">#</a>

At a high-level, optimizing [tag triggers](https://support.google.com/tagmanager/topic/7679108?hl=en&ref_topic=7679384) generally consists of making sure to not trigger tags more than necessary and choosing a trigger that balances business needs with performance costs.

### Choose an appropriate trigger event <a href="#choose-an-appropriate-trigger-event" class="w-headline-link">#</a>

The performance impact of a tag is not fixed: generally speaking, the earlier that a tag fires, the greater its impact on performance. Resources are typically constrained during the initial page load and therefore loading or executing a particular resource (or tag) takes resources away from something else.

Although it is important to choose appropriate triggers for all tags, it is particularly important for tags that load large resources or execute long scripts.

### Use custom events <a href="#use-custom-events" class="w-headline-link">#</a>

[Custom events](https://support.google.com/tagmanager/answer/7679219?hl=en) allow you to fire triggers in response to page events that aren't covered by Google Tag Manager's built-in triggers. For example, many tags use [page view triggers](https://support.google.com/tagmanager/answer/7679319?hl=en); however, the time period between `DOM Ready` and `Window Loaded` can be lengthy on many pages and this can make it difficult to fine-tune when a tag fires. Custom events provide a solution to this problem.

To use custom events, first create a custom event trigger and update your tags to use this trigger.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format" alt="Screenshot of a Custom Event trigger in Google Tag Manager" sizes="(min-width: 512px) 512px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/BvkKSJi7PeAONrdKfIXq.png?auto=format&amp;w=1024 1024w" width="512" height="286" />

To fire the trigger, push the corresponding event to the data layer.

    // Custom event trigger that fires after 2 seconds
    setTimeout(() => {
      dataLayer.push({
        'event' : 'my-custom-event'
      });
    }, 2000);

### Use specific trigger conditions <a href="#use-specific-trigger-conditions" class="w-headline-link">#</a>

Using specific trigger conditions helps avoid firing a tag unnecessarily. Although there are many ways to apply this concept, one of the simplest yet most useful things you can do is ensure that a tag only fires on pages where it is actually used.

<img src="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format" alt="Screenshot showing trigger conditions in Google Tag Manager" sizes="(min-width: 512px) 512px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G3MVBTGhNr560S6zEQu4.png?auto=format&amp;w=1024 1024w" width="512" height="288" />

[Built-in variables](https://support.google.com/tagmanager/answer/7182738) can also be incorporated into trigger conditions to limit tag firing.

### Load your tag manager at an appropriate time <a href="#load-your-tag-manager-at-an-appropriate-time" class="w-headline-link">#</a>

Adjusting when you tag manager loads can have a significant impact on performance. Triggers, regardless of how they are configured, can't fire until after a tag manager loads. Although it is important to choose good triggers for individual tags (as explained above), experimenting with when you load your tag manager can often have an equal or greater impact given that this single decision will impact all tags on a page.

## Tag Management <a href="#tag-management" class="w-headline-link">#</a>

### Use the data layer <a href="#use-the-data-layer" class="w-headline-link">#</a>

The [data layer](https://developers.google.com/tag-manager/devguide) "contains all of the information that you want to pass to Google Tag Manager". More concretely, it is a JavaScript array of objects that contain information about the page. It can also be used to trigger tags.

    // Contents of the data layer
    window.dataLayer = [{
        'pageCategory': 'signup',
        'visitorType': 'high-value'
      }];

    // Pushing a variable to the data layer
    window.dataLayer.push({'variable\_name': 'variable\_value'});

    // Pushing an event to the data layer
    window.dataLayer.push({'event': 'event\_name'});

Although Google Tag Manager can be used without the data layer, its use is strongly recommended. The data layer provides a way to consolidate the data being accessed by third-party scripts into a single place thereby providing better visibility into its usage. Amongst other things, this can help reduce redundant variable calculations and script execution.

The performance benefits of the data layer might seem non-intuitive given that updating the data layer causes Google Tag Manager to reevaluate all container variables and potentially trigger tags—all of which entails JavaScript execution. Although it is possible to misuse the data layer, generally speaking, if working with the data layer is a source of performance issues, it probably indicates that the container itself has performance issues—the data layer is merely making these issues more apparent.

### Remove duplicate and unused tags <a href="#remove-duplicate-and-unused-tags" class="w-headline-link">#</a>

Duplicate tags can occur when a tag is included in a page's HTML markup in addition to being injected through a tag manager.

Unused tags should be paused or removed rather than blocked through use of a [trigger exception](https://support.google.com/tagmanager/answer/7679318?hl=en). Pausing or removing a tag removes the code from the container; blocking does not.

### Use allow and deny lists <a href="#use-allow-and-deny-lists" class="w-headline-link">#</a>

[Allow and deny lists](https://developers.google.com/tag-manager/web/restrict) allow you to configure highly granular restrictions on the tags, triggers, and variables allowed on a page. This can be used to help enforce performance best practices and other policies.

Allow and deny lists are configured through the data layer.

    window.dataLayer = [{
      'gtm.allowlist': ['&lt;id>', '&lt;id>', ...],
      'gtm.blocklist': ['customScripts']
    }];

### Consider using server-side tagging <a href="#consider-using-server-side-tagging" class="w-headline-link">#</a>

Switching to server-side tagging is not a trivial task, but it is worth considering - particularly for larger sites that want more control over their data. Server-side tagging removes vendor code from the client, and with it, offloads processing from the client to the server.

For example, when using client-side tagging, sending data to multiple analytics accounts entails that the client initiates separate requests for each endpoint. By contrast, with server-side tagging, a single request is made by the client to the server-side container, and from there, this data is forwarded to different analytics accounts.

Keep in mind that server-side tagging only works with some tags; tag compatibility varies depending on vendor.

For more information, see [An introduction to server-side tagging](https://developers.google.com/tag-manager/serverside/intro).

## Containers <a href="#containers" class="w-headline-link">#</a>

### Use only one container per page <a href="#use-only-one-container-per-page" class="w-headline-link">#</a>

Using multiple [containers](https://developers.google.com/tag-manager/api/v1/reference/accounts/containers) on a single page can create significant performance issues as it introduces additional overhead and script execution. It is rare for multiple containers to be used effectively.

If you must use multiple containers per page, [follow Google Tag manager guidance for setting up multiple containers](https://developers.google.com/tag-manager/devguide#multiple-containers).

### Use separate containers if needed <a href="#use-separate-containers-if-needed" class="w-headline-link">#</a>

If you use a tag manager for multiple properties (for example, a web app and a mobile app)—the number of containers you use can help or hurt your workflow productivity. It can also impact performance.

Generally speaking, a single container can effectively be used across multiple sites if the sites are similar in use and structure. For example, although a brand's mobile and web apps might serve similar functions, it's likely that the apps will be structured differently, and therefore more effectively managed through separate containers. Trying to reuse a single container too broadly typically unnecessarily increases the complexity and size of the container by forcing the adoption of complex logic to manage tags and triggers.

### Keep an eye on container size <a href="#keep-an-eye-on-container-size" class="w-headline-link">#</a>

The size of a container is determined by its tags, triggers, and variables. Although a small container may negatively impact page performance, a large container almost certainly will.

Container size should not be your north-star metric when optimizing your tag usage; however, a large container size is often a warning sign that a container is not well maintained and possibly misused.

Google Tag Manager [limits](https://support.google.com/tagmanager/answer/2772488?hl=en) container size to 200 KB and will warn about container size starting at 140 KB. However, most sites should aim to keep their containers far smaller than this. For perspective, the median site container is around 6 KB.

To determine the size of your container, look at the size of the response returned by `https://www.googletagmanager.com/gtag/js?id=YOUR_ID`. This response contains the Google Tag Manager library plus the contents of the container. By itself, the Google Tag Manager library is around 33 KB.

### Name your container versions <a href="#name-your-container-versions" class="w-headline-link">#</a>

A [container version](https://developers.google.com/tag-manager/api/v1/reference/accounts/containers/versions) is a snapshot of a container's content at a particular point in time. Using a meaningful name and along with including a short description of meaningful changes within can go a long way in making it easier to debug future performance issues.

## Tagging workflows <a href="#tagging-workflows" class="w-headline-link">#</a>

### Test tags before deploying <a href="#test-tags-before-deploying" class="w-headline-link">#</a>

Testing your tags before deployment can help catch issues (performance and otherwise) before they ship.

Things to consider when testing a tag include:

- Is the tag working correctly?
- Does the tag cause any layout shifts?
- Does the tag load any resources? How large are these resources?
- Does the tag trigger a long-running script?

#### Preview mode <a href="#preview-mode" class="w-headline-link">#</a>

[Preview mode](https://support.google.com/tagmanager/answer/6107056) allows you to test tag changes on your actual site without having to deploy them to the public first. Preview mode includes a debugging console that provides information about tags.

The execution time of Google Tag Manager will be different (slightly slower) when run in Preview mode due to the additional overhead required to expose information in the debugging console. Thus, comparing Web Vitals measurements collected in preview mode to those collected in production is not recommended. However, this discrepancy should not affect the execution behavior of the tags themselves.

#### Standalone testing <a href="#standalone-testing" class="w-headline-link">#</a>

An alternative approach to testing tags is to set up an empty page containing a container with a single tag—the tag you are testing. This testing setup is less realistic and won't catch some issues (for example, whether a tag causes layout shifts)—however it can make it easier to isolate and measure the impact of the tag on things like script execution. Check out how [Telegraph uses this isolation approach to improve performance](https://medium.com/the-telegraph-engineering/improving-third-party-web-performance-at-the-telegraph-a0a1000be5) of third-party code.

### Monitor tag performance <a href="#monitor-tag-performance" class="w-headline-link">#</a>

The Google Tag Manager [Monitoring API](https://developers.google.com/tag-manager/templates/monitoring) can be used to gather information about the [execution time](https://developers.google.com/tag-manager/templates/monitoring#execution_times) of a particular tag. This information is reported to an endpoint of your choosing.

For more information, see [How to build a Google Tag Manager Monitor](https://www.simoahava.com/analytics/google-tag-manager-monitor/).

### Require approval for container changes <a href="#require-approval-for-container-changes" class="w-headline-link">#</a>

First-party code typically goes through review and testing before deployment - treat your tags the same. Adding [two-step verification](https://support.google.com/tagmanager/answer/4525539/tag-manager-and-2-step-verification?hl=en), which requires administrator approval for container changes, is one way to do this. Alternatively, if you don't want to require two-step verification but would still like to keep an eye on changes, you can set up [container notifications](https://support.google.com/tagmanager/answer/9713667?hl=en) to receive email alerts about container events of your choosing.

### Periodically audit tag usage <a href="#periodically-audit-tag-usage" class="w-headline-link">#</a>

One of the challenges of working with tags is that they tend to accumulate over time: tags get added but are rarely removed. Auditing tags periodically is one way to reverse this trend. The ideal frequency for doing this will depend on how often your site's tags are updated.

For more information, see [Keeping third-party scripts under control](/controlling-third-party-scripts/).

<a href="/tags/performance/" class="w-chip">Performance</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/tag-best-practices/index.md)

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
