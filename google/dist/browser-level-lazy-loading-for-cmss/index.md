<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format" alt="A lazy leopard relaxing on a tree" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Tx8vq8DMsflw49EHAa8Q.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#browser-level-lazy-loading-for-cmss" class="w-toc__header--link">Browser-level lazy-loading for CMSs</a>

- [Background](#background)
- [The case for implementing lazy-loading now](#the-case-for-implementing-lazy-loading-now)
- [Standardization](#standardization)
- [Browser support](#browser-support)
- [Distance-from-viewport thresholds](#distance-from-viewport-thresholds)
- [User experience recommendations](#user-experience-recommendations)
- [Require dimension attributes on elements](#require-dimension-attributes-on-elements)
- [Avoid lazy-loading above-the-fold elements](#avoid-lazy-loading-above-the-fold-elements)
- [Avoid a JavaScript fallback](#avoid-a-javascript-fallback)
- [Technical recommendations](#technical-recommendations)
- [Enable lazy-loading by default](#enable-lazy-loading-by-default)
- [Allow per-element modifications](#allow-per-element-modifications)
- [Retrofit existing content](#retrofit-existing-content)
- [Next steps](#next-steps)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Browser-level lazy-loading for CMSs

Learnings for adopting the standardized loading attribute

Nov 20, 2020 <span class="w-author__separator">•</span> Updated Jul 29, 2021

[<img src="https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Felix Arntz" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/rAUzMzFAA67M36n66uVT.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/felixarntz/)

<a href="/authors/felixarntz/" class="w-author__name-link">Felix Arntz</a>

- <a href="https://twitter.com/felixarntz" class="w-author__link">Twitter</a>
- <a href="https://felix-arntz.me" class="w-author__link">Blog</a>

My goal with this post is to persuade CMS platform developers and contributors (i.e. the people who develop CMS cores) that [now is the time to implement support for the browser-level image lazy-loading feature](#the-case-for-implementing-lazy-loading-now). I'll also share recommendations on how to [ensure high-quality user experiences](#user-experience-recommendations) and [enable customization by other developers](#technical-recommendations) while implementing lazy-loading. These guidelines come from our experience adding support to WordPress as well as helping Joomla, Drupal, and TYPO3 implement the feature.

Regardless of whether you're a CMS platform developer or a CMS user (i.e. a person who builds websites with a CMS), you can use this post to learn more about the benefits of browser-level lazy-loading in your CMS. Check out the [Next steps](#next-steps) section for suggestions on how you can encourage your CMS platform to implement lazy-loading.

## Background <a href="#background" class="w-headline-link">#</a>

Over the past year, [lazy-loading images and iframes using the `loading` attribute](/browser-level-image-lazy-loading/) has [become part of the WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes) and [seen growing adoption by various browsers](https://caniuse.com/#feat=loading-lazy-attr). These milestones however only lay the groundwork for a [faster and more resource-saving web](/browser-level-image-lazy-loading/#why-browser-level-lazy-loading). It is now on the distributed web ecosystem to make use of the `loading` attribute.

Content management systems [power about 60% of websites](https://w3techs.com/technologies/overview/content_management), so these platforms play a vital role in bringing adoption of modern browser features to the web. With a few popular open-source CMSs such as [WordPress](https://make.wordpress.org/core/2020/07/14/lazy-loading-images-in-5-5/), [Joomla](https://github.com/joomla/joomla-cms/pull/28838), and [TYPO3](https://review.typo3.org/c/Packages/TYPO3.CMS/+/63317) having already implemented support for the `loading` attribute on images, let's have a look at their approaches and the takeaways which are relevant for adopting the feature in other CMS platforms as well. Lazy-loading media is a key web performance feature that sites should benefit from at a large scale, which is why adopting it at the CMS core level is recommended.

## The case for implementing lazy-loading now <a href="#the-case-for-implementing-lazy-loading-now" class="w-headline-link">#</a>

### Standardization <a href="#standardization" class="w-headline-link">#</a>

Adoption of non-standardized browser features in CMSs facilitates widespread testing and can surface potential areas of improvement. However, the general consensus across CMSs is that, as long as a browser feature is not standardized, it should preferably be implemented in the form of an extension or plugin for the respective platform. Only once standardized can a feature be considered for adoption in the platform core.

**Success**: Browser-level lazy-loading is now part of the WHATWG HTML Standard for both [`img`](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-loading) and [`iframe`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-loading) elements.

### Browser support <a href="#browser-support" class="w-headline-link">#</a>

Browser support of the feature is a similar concern: The majority of CMS users should be able to benefit from the feature. If there is a considerable percentage of browsers where the feature is not yet supported, the feature has to ensure that it at least has no adverse effect for those.

**Success**: [Browser-level lazy-loading is widely supported by browsers](https://caniuse.com/#feat=loading-lazy-attr) and [the `loading` attribute is simply ignored](/browser-level-image-lazy-loading/#browser-compatibility) by those browsers that have not adopted it yet.

### Distance-from-viewport thresholds <a href="#distance-from-viewport-thresholds" class="w-headline-link">#</a>

A common concern with lazy-loading implementations is that they in principle increase the likelihood that an image will not be loaded once it becomes visible in the user's viewport because the loading cycle starts at a later stage. Contrary to previous JavaScript-based solutions, [browsers approach this conservatively](/browser-level-image-lazy-loading/#distance-from-viewport-thresholds) and furthermore can fine-tune their approach based on real-world user experience data, minimizing the impact, so browser-level lazy-loading should be safe to adopt by CMS platforms.

**Success**: Experiments using Chrome on Android indicated that on 4G networks, 97.5% of below-the-fold lazy-loaded images were fully loaded within 10ms of becoming visible, compared to 97.6% for non lazy-loaded images. In other words, there was virtually no difference (0.1%) in the user experience of eagerly-loaded images and lazy-loaded images.

## User experience recommendations <a href="#user-experience-recommendations" class="w-headline-link">#</a>

### Require dimension attributes on elements <a href="#require-dimension-attributes-on-elements" class="w-headline-link">#</a>

In order to avoid [layout shifts](/cls/), it has been a long-standing recommendation that [embedded content such as images or iframes should always include the dimension attributes `width` and `height`](/optimize-cls/#images-without-dimensions), so that the browser can infer the aspect ratio of those elements before actually loading them. This recommendation is relevant regardless of whether an element is being lazy-loaded or not. However, due to the [0.1% greater likelihood of an image not being fully loaded once in the viewport](#distance-from-viewport-thresholds) it becomes slightly more applicable with lazy-loading in place.

CMSs should preferably provide dimension attributes on all images and iframes. If this is not possible for every such element, they are recommended to skip lazy-loading images which do not provide both of these attributes.

**Caution**: If the CMS is unable to provide `width` and `height` attributes on images and iframes on a large scale, you will have to weigh the trade-offs between saving additional network resources and a slightly higher chance for layout shifts to decide whether lazy-loading is worth it.

### Avoid lazy-loading above-the-fold elements <a href="#avoid-lazy-loading-above-the-fold-elements" class="w-headline-link">#</a>

At the moment CMSs are recommended to only add `loading="lazy"` attributes to images and iframes which are positioned below-the-fold, to avoid a delay in the [Largest Contentful Paint](/lcp/) metric, which in some cases can be significant [as discovered in July 2021](/lcp-lazy-loading/). However, it has to be acknowledged that it's complex to assess the position of an element relative to the viewport before the rendering process. This applies especially if the CMS uses an automated approach for adding `loading` attributes, but even based on manual intervention several factors such as the different viewport sizes and aspect ratios have to be considered. Still, it is strongly recommended to omit hero images and other images or iframes that are likely to appear above the fold from being lazy-loaded.

Depending on the capabilities and audience of the CMS, try to define reasonable estimates for whether an image or iframe is likely to be in the initial viewport, for example never lazy-loading elements in a header template or the hero image of the main content. In addition, offer either a UI or API which allows modifying the existence of the `loading` attribute on elements.

### Avoid a JavaScript fallback <a href="#avoid-a-javascript-fallback" class="w-headline-link">#</a>

While JavaScript can be used to [provide lazy-loading to browsers which do not (yet) support the `loading` attribute](/browser-level-image-lazy-loading/#how-do-i-handle-browsers-that-don't-yet-support-lazy-loading), such mechanisms always rely on initially removing the `src` attribute of an image or iframe, which causes a delay for the browsers that _do_ support the attribute. In addition, rolling out such a JavaScript-based solution in the frontends of a large-scale CMS increases the surface area for potential issues, which is part of why no major CMS had adopted lazy-loading in its core prior to the standardized browser feature.

**Caution**: Avoid providing a JavaScript-based fallback in the CMS. With growing adoption of the `loading` attribute and no adverse effects on browser versions that do not support it yet, it is safer to not provide the feature to those browsers and instead encourage updating to a newer browser version.

## Technical recommendations <a href="#technical-recommendations" class="w-headline-link">#</a>

### Enable lazy-loading by default <a href="#enable-lazy-loading-by-default" class="w-headline-link">#</a>

The overall recommendation for CMSs implementing browser-level lazy-loading is to enable it by default, i.e. `loading="lazy"` should be added to images and iframes, preferably [only for those elements that include dimension attributes](#require-dimension-attributes-on-elements). Having the feature enabled by default will result in greater network resource savings than if it had to be enabled manually, for example on a per-image basis.

As much as possible, `loading="lazy"` should [only be added to elements which likely appear below-the-fold](#avoid-lazy-loading-above-the-fold-elements). While this requirement can be complex to implement for a CMS due to lack of client-side awareness and various viewport sizes, it is recommended to at least [use approximate heuristics to omit elements such as hero images that will likely appear above-the-fold from being lazy-loaded](/lcp-lazy-loading/#testing-a-fix).

### Allow per-element modifications <a href="#allow-per-element-modifications" class="w-headline-link">#</a>

While `loading="lazy"` should be added to images and iframes by default, it is crucial to allow omitting the attribute on certain images, for example to optimize for [LCP](/lcp/). If the audience of the CMS is on average considered more tech-savvy, this could be a UI control exposed for every image and iframe allowing to opt out of lazy-loading for that element. Alternatively or in addition, an API could be exposed to third-party developers so that they can make similar changes through code.

WordPress for example allows to skip the `loading` attribute either for an [entire HTML tag or context](https://developer.wordpress.org/reference/hooks/wp_lazy_loading_enabled/) or for a [specific HTML element in the content](https://developer.wordpress.org/reference/hooks/wp_img_tag_add_loading_attr/).

**Caution**: If an element should not be lazy-loaded, require or encourage skipping the `loading` attribute entirely. While using `loading="eager"` is a supported alternative, this would tell the browser explicitly to always load the image right away, which would prevent potential benefits if browsers implemented further mechanisms and heuristics to automatically decide which elements to lazy-load.

### Retrofit existing content <a href="#retrofit-existing-content" class="w-headline-link">#</a>

At a high level, there are two approaches for adding the `loading` attribute to HTML elements in a CMS:

- Either add the attribute from within the content editor in the backend, persistently saving it in the database.
- Add the attribute on the fly when rendering content from the database in the frontend.

It is recommended for CMS to opt for adding the attribute on the fly when rendering, in order to bring the lazy-loading benefits to any existing content as well. If the attribute could solely be added through the editor, only new or recently modified pieces of content would receive the benefits, drastically reducing the CMS's impact on saving network resources. Furthermore, adding the attribute on the fly will easily allow for future modifications, should the capabilities of browser-level lazy-loading be further expanded.

Adding the attribute on the fly should cater for a potentially existing `loading` attribute on an element though and let such an attribute take precedence. This way, the CMS or an extension for it could also implement the editor-driven approach without causing a conflict with duplicate attributes.

#### Optimize server-side performance <a href="#optimize-server-side-performance" class="w-headline-link">#</a>

When adding the `loading` attribute to content on the fly using (for example) a server-side middleware, speed is a consideration. Depending on the CMS, the attribute could be added either via DOM traversal or regular expressions, with the latter being recommended for performance.

Regular expressions use should be kept to a minimum, for example a single regex which collects all `img` and `iframe` tags in the content including their attributes and then adds the `loading` attribute to each tag string as applicable. WordPress for example goes as far as [having a single general regular expression to perform various on-the-fly operations to certain elements](https://developer.wordpress.org/reference/functions/wp_filter_content_tags/), of which adding `loading="lazy"` is just one, using a single regular expression to facilitate multiple features. This form of optimization furthermore is another reason why adopting lazy-loading in a CMS's core is recommended over an extension - it allows for better server-side performance optimization.

## Next steps <a href="#next-steps" class="w-headline-link">#</a>

See if there is an existing feature request ticket to add support for the feature in your CMS, or open a new one if there is none yet. Use references to this post as needed to support your proposal.

Tweet me ([felixarntz@](https://twitter.com/felixarntz)) for questions or comments, or to get your CMS listed on this page if support for browser-level lazy-loading has been added. If you encounter other challenges, I am also curious to learn more about them to hopefully find a solution.

If you're a CMS platform developer, study how other CMSs have implemented lazy-loading:

- [WordPress Core](https://make.wordpress.org/core/2020/07/14/lazy-loading-images-in-5-5/)
- [Joomla](https://github.com/joomla/joomla-cms/pull/28838)
- [TYPO3](https://review.typo3.org/c/Packages/TYPO3.CMS/+/63317)

You can use the learnings from your research and the technical recommendations from this post to start contributing code to your CMS, for example in form of a patch or pull-request.

Hero photo by [Colin Watts](https://unsplash.com/@imagefactory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lazy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

<a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Jul 29, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/browser-level-lazy-loading-for-cmss/index.md)

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
