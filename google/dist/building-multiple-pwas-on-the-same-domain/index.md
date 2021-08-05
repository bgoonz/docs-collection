<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format" alt="Multiple Shifting Gears." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/RvAJGCLAmeyRSHKn5Nwc.jpeg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#building-multiple-progressive-web-apps-on-the-same-domain" class="w-toc__header--link">Building multiple Progressive Web Apps on the same domain</a>

- [Technical terms](#technical-terms)
- [The case for multiple, related PWAs](#the-case-for-multiple-related-pwas)
- [Using separate origins](#using-separate-origins)
- [Using the same origin](#using-the-same-origin)
- [Non-overlapping paths](#non-overlapping-paths)
- [Overlapping/nested paths](#overlappingnested-paths)
- [Challenges for multiple, same-origin PWAs](#challenges-for-multiple-same-origin-pwas)
- [Additional challenges for overlapping/nested paths](#additional-challenges-for-overlappingnested-paths)
- [Conclusion](#conclusion)
- [Additional resources](#additional-resources)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building multiple Progressive Web Apps on the same domain

How to build multiple PWAs, taking advantage of the same domain name, to make the user aware that they belong to the same organization or service.

Jun 2, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Demian Renzulli" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/EuTrT82fyivFn16L0vD9.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/demianrenzulli/)

<a href="/authors/demianrenzulli/" class="w-author__name-link">Demian Renzulli</a>

- <a href="https://twitter.com/drenzulli" class="w-author__link">Twitter</a>
- <a href="https://github.com/demianrenzulli" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@demianrenzulli" class="w-author__link">Glitch</a>

[<img src="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/9gFKixjZHcpFPVcOX9Av.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Matt Giuca" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/9gFKixjZHcpFPVcOX9Av.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/9gFKixjZHcpFPVcOX9Av.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/9gFKixjZHcpFPVcOX9Av.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/9gFKixjZHcpFPVcOX9Av.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/9gFKixjZHcpFPVcOX9Av.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/mgiuca/)

<a href="/authors/mgiuca/" class="w-author__name-link">Matt Giuca</a>

- <a href="https://twitter.com/mgiuca" class="w-author__link">Twitter</a>
- <a href="https://github.com/mgiuca" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/1v5F1SOBl46ZghbHQMle.svg" alt="Chase Phillips" class="w-author__image" width="64" height="64" />](/authors/cmp/)

<a href="/authors/cmp/" class="w-author__name-link">Chase Phillips</a>

- <a href="https://github.com/chasephillips" class="w-author__link">GitHub</a>

In the [Progressive Web Apps in multi-origin sites blog post](https://web.dev/multi-origin-pwas/), Demian discussed the challenges that sites built on multiple origins face when trying to build a single Progressive Web App that encompasses all of them.

An example of this type of site architecture is a ecommerce site where:

- The home page is at `https://www.example.com`.
- The category pages are hosted at `https://category.example.com`.
- The product detail pages at `https://product.example.com`.

As discussed in the article, the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) imposes several restrictions, preventing the sharing of service workers, caches, and permissions across origins. For that reason, we strongly recommend avoiding this type of configuration and for those that already have sites built in this way, to consider migrating to a single origin site architecture whenever possible.

<figure><img src="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format" alt="Avoid using different origins for site sections of the same site when trying to build a unified Progresive Web App." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/QnwgUcEBv8o8k2XiAYbm.png?auto=format&amp;w=1600 1600w" width="800" height="461" /><figcaption>Avoid using different origins for site sections of the same site when trying to build a unified Progresive Web App.</figcaption></figure>In this post, we take a look at the opposite case: instead of a single PWA across different origins we'll analyze the case of companies that want to provide **multiple PWAs**, taking advantage of the same **domain name**, and make the user aware that those PWAs belong to the same organization or service.

As you might have noticed, we are using different, but interrelated terms, like domains and origins. Before moving forward, let's review these concepts.

## Technical terms <a href="#technical-terms" class="w-headline-link">#</a>

- **Domain:** Any sequence of labels as defined in the Domain Name System (DNS). For example: `com` and `example.com` are domains.
- **Hostname:** A DNS entry that resolves to at least one IP address. For example: `www.example.com` would be a hostname, `example.com` could be a hostname if it had an IP address, and `com` would never resolve to an IP address and so it could never be a hostname.
- **Origin:** A combination of a scheme, hostname and (optionally) port. For example, `https://www.example.com:443` is an origin.

As its name implies, [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) imposes restrictions on origins, so we'll mostly refer to the term throughout the article. Nevertheless, we'll use "domains" or "subdomains" from time to time, to describe the technique being used, in order to create the different "origins".

## The case for multiple, related PWAs <a href="#the-case-for-multiple-related-pwas" class="w-headline-link">#</a>

In some cases, you might want to build independent apps, but still identify them as belonging to the same organization or "brand". Reusing the same **domain name** is a good way of establishing that relationship. For example:

- An ecommerce site wants to create a standalone experience to let sellers manage their inventory, while making sure they understand that it belongs to the main website where the users buy products.
- A sports news site wants to build a specific app for a major sporting event, to let users receive stats about their favorite competitions via notifications, and install it as a Progressive Web App, while making sure that users recognize it as an app built by the news company.
- A company wants to build separate chat, mail, and calendar apps and wants them to work as individual apps, tied to the company's name.

## <figure><img src="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format" alt="Company that owns example.com wants to provide three independent apps or PWAs, using the same domain name to establish the relationship between them." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/XEwhGkkV9Bz7Z2KEJWjm.png?auto=format&amp;w=1600 1600w" width="800" height="475" /><figcaption>Company that owns example.com wants to provide three independent apps or PWAs, using the same domain name to establish the relationship between them.</figcaption></figure>Using separate origins <a href="#using-separate-origins" class="w-headline-link">#</a>

The recommended approach in cases like these is for each conceptually distinct app live on its own origin.

If you want to use the same domain name inside all of them, you can do that by using subdomains. For example, a company that provides multiple internet apps or services can host a mail app at `https://mail.example.com` and a calendar app at `https://calendar.example.com`, while offering the main service of their business at `https://www.example.com`. Another example is a sports site that wants to create an independent app completely dedicated to an important sports event, like a football championship at `https://footballcup.example.com`, that users can install and use independently of the main sport site, hosted at `https://www.example.com`. This approach might also be useful for platforms that let customers create independent apps of their own under the company's brand. For example, an app that lets merchants create their own PWAs at `https://merchant1.example.com`, `https://merchant2.example.com`, etc.

Using different origins ensures isolation between the apps, which means that each of them can manage different browser features independently, including:

- **Installability:** Each app has its own Manifest and provides its own installable experience.
- **Storage:** Each app has its own caches, local storage, and basically all forms of device-local storage, without sharing them with the others.
- **Service Workers:** Each app has its own service worker for the registered scopes.
- **Permissions:** Permissions are also scoped by origins. Thanks to that, users will know exactly which service they are giving permissions for, and features like notifications will be properly attributed to each app.

Creating such a degree of isolation is the most desirable in the use case of multiple, independent PWAs, so **we strongly recommend this approach**.

If apps on subdomains want to share local data with each other they will still be able to do it via cookies, or for more advanced scenarios they could consider synchronizing the storage through a server.

## <figure><img src="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format" alt="Building different PWAs in distinct origins, by using subdomains is a good practice." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/FfuseK64y4PRqXYEGEt9.png?auto=format&amp;w=1600 1600w" width="800" height="421" /><figcaption>Building different PWAs in distinct origins, by using subdomains is a good practice.</figcaption></figure>Using the same origin <a href="#using-the-same-origin" class="w-headline-link">#</a>

The second approach is building the different PWAs on the same origin. This includes the following scenarios:

### Non-overlapping paths <a href="#non-overlapping-paths" class="w-headline-link">#</a>

Multiple PWAs or conceptual "web apps", hosted on the same origin, with non-overlapping paths. For example:

- `https://example.com/app1/`
- `https://example.com/app2/`

### Overlapping/nested paths <a href="#overlappingnested-paths" class="w-headline-link">#</a>

Multiple PWAs on the same origin, one of whose scope is nested inside the other:

- `https://example.com/` (the "outer app")
- `https://example.com/app/` (the "inner app")

The service worker API and manifest format allow you to do either of the above, using path-level scoping. However, in both cases, using the same origin presents many problems and limitations, the root of which stems from the fact that the browser won't fully consider these to be distinct "apps", therefore **this approach is discouraged**.

<figure><img src="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format" alt="Using paths (overlapping or not) to provide two independent PWAs (“app1”, “app2”) under the same origin is discouraged." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/26V1DWN36MZr3mUo8ChSBlCpzp43/6HX5zEb58sEEWQoJt82m.png?auto=format&amp;w=1600 1600w" width="800" height="420" /><figcaption>Using paths (overlapping or not) to provide two independent PWAs (“app1”, “app2”) under the same origin is discouraged.</figcaption></figure>In the next section, we analyze these challenges in more detail, and what can be done, if using separate origins is not an option.

## Challenges for multiple, same-origin PWAs <a href="#challenges-for-multiple-same-origin-pwas" class="w-headline-link">#</a>

Here are some practical issues common to both same-origin approaches:

- **Storage:** Cookies, local storage, and all forms of device-local storage are shared between apps. For that reason, if the user decides to wipe local data for one app, it will wipe all the data from the origin; there's no way to do this for a single app. Note that Chrome and some other browsers will actively prompt users to wipe local data when uninstalling one of the apps, and this will affect data for the other apps on the origin as well. Another issue is that apps will also have to share their [storage quota](https://web.dev/storage-for-the-web/#how-much) which means if either of them takes up too much space, the other will be negatively impacted.
- **Permissions:** Permissions are tied to the origin. That means if the user grants a permission to one app, it will apply to all apps on that origin simultaneously. That may sound like a good thing (not having to ask for a permission multiple times), but remember: if the user blocks permission to one app, it will prevent the others from requesting that permission or using that feature.
- **User settings:** Settings are also set per-origin. For example, if two apps have different font sizes, and the user wants to adjust the zoom in only one of them to compensate for it, they won't be able to do it without applying the setting to the other apps as well.

These challenges make it difficult to encourage this approach. Nevertheless, if you can't use a separate origin (e.g. a subdomain), as discussed in the [Using separate origins](#using-separate-origins) section, from the two same-origin options we presented, using non-overlapping paths is strongly recommended, over overlapping/nested paths.

As mentioned, the challenges discussed in this section are common to both same-origin approaches. In the next section we'll go deeper into the details of why using overlapping/nested paths is the least recommended strategy.

## Additional challenges for overlapping/nested paths <a href="#additional-challenges-for-overlappingnested-paths" class="w-headline-link">#</a>

The additional issue with overlapping/nested paths approach (where `https://example.com/` is the outer app and `https://example.com/app/` is the inner app), is that all URLs in the inner app will actually be considered part of both the outer app and the inner app.

In practice this presents the following issues:

- **Installation Promotion:** If the user visits the inner app (for example, in a web browser), when the outer app is already installed in the user's device, the browser won't show the install promotional banners, and the [BeforeInstallPrompt event](https://web.dev/customize-install/) won't be triggered. The reason is that the browser will check and see whether the current page belongs to an app that's already installed, and it will conclude that it is. The workaround for this is to install the inner app manually (via "Create Shortcut" browser menu option), or to install the inner app first, before the outer app.
- **[Notification](https://developer.mozilla.org/en-US/docs/Web/API/notification) and the [Badging API](https://web.dev/badging-api/)**: If the outer app is installed but the inner app is not, notifications and badges coming from the inner app will be erroneously attributed to the outer app (which is the nearest enclosing scope of an installed app). This feature works properly in the case where both apps are installed on the user's device.
- **[Link Capturing](https://github.com/WICG/sw-launch/blob/main/declarative_link_capturing.md)**: The outer app may capture URLs that belong to the inner app. This is especially likely if the outer app is installed but the inner app isn't. Similarly, links within the outer app that link to the inner app will not link capture into the inner app, since they are considered to be within the outer app's scope. Additionally, on Chrome OS and Android, if these apps are added to the Play Store (as [Trusted Web Activities](https://developer.chrome.com/docs/android/trusted-web-activity/overview/)), the outer app will capture all links. Even if the inner app is installed, the OS will still offer the user the choice of opening them in the outer app.

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

In this article we looked at different ways in which developers can build multiple Progressive Web Apps related to each other within the same **domain**.

In summary, we strongly recommend using a different origin (e.g. by using subdomains) to host independent PWAs. Hosting them in the same origin presents many challenges, mainly because the browser won't fully consider these to be distinct apps.

- Separate origins: **Recommended**
- Same origin, non-overlapping paths: **Not recommended**
- Same origin, overlapping/nested paths: **Strongly not recommended**

If it's not possible to use different origins, using non-overlapping paths (e.g. `https://example.com/app1/` and `https://example.com/app2/` it's strongly recommended over using overlapping or nested paths, like `https://example.com/` (for the outer app) and `https://example.com/app/` (for the inner app).

## Additional resources <a href="#additional-resources" class="w-headline-link">#</a>

- [Progressive Web Apps in multi-origin sites](https://web.dev/multi-origin-pwas/)

With many thanks for their technical reviews and suggestions: _Joe Medley, Dominick Ng, Alan Cutter, Daniel Murphy, Penny McLachlan, Thomas Steiner and Darwin Huang_

_Photo by [Tim Mossholder](https://unsplash.com/@timmossholder) on [Unsplash](https://unsplash.com/photos/GmvH5v9l3K4)_

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/service-worker/" class="w-chip">Service Worker</a> <a href="/tags/storage/" class="w-chip">Storage</a>

<span class="w-mr--sm"> Last updated: Jun 2, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/building-multiple-pwas-on-the-same-domain/index.md)

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
