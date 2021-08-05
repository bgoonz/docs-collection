<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format" alt="A metal chain used as the symbol for links." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/KKxFqY5Q6ovfi3qomHcv.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#url-protocol-handler-registration-for-pwas" class="w-toc__header--link">URL protocol handler registration for PWAs</a>

- [Background on schemes (aka. protocols)](<#background-on-schemes-(aka.-protocols)>)
- [Background on the registerProtocolHandler() method](<#background-on-the-registerprotocolhandler()-method>)
- [What this proposal is about](#what-this-proposal-is-about)
- [Use cases](#use-cases)
- [Current status](#status)
- [Enabling via about://flags or edge://flags](#enabling-via-about:flags-or-edge:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [How to use URL protocol handler registration for PWAs](#how-to-use-url-protocol-handler-registration-for-pwas)
- [Multiple apps registering for the same protocol](#multiple-apps-registering-for-the-same-protocol)
- [The same app registering for multiple protocols](#the-same-app-registering-for-multiple-protocols)
- [App updates and handler registration](#app-updates-and-handler-registration)
- [Demo](#demo)
- [Security considerations](#security-considerations)
- [Non user-initiated navigation attempts](#non-user-initiated-navigation-attempts)
- [Allowlist of protocols](#allowlist-of-protocols)
- [Default protocol handlers](#default-protocol-handlers)
- [Consent prompt](#consent-prompt)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Useful links](#useful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# URL protocol handler registration for PWAs

Let installed PWAs handle links that use a specific protocol for a more integrated experience.

May 11, 2021 <span class="w-author__separator">•</span> Updated Jul 2, 2021

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

URL protocol handler registration for PWAs is part of the [capabilities project](https://web.dev/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

## Background on schemes (aka. protocols) <a href="#background-on-schemes-(aka.-protocols)" class="w-headline-link">#</a>

A _Uniform Resource Identifier_ (URI) is a compact sequence of characters that identifies an abstract or physical resource. Each URI begins with a [scheme](https://tools.ietf.org/html/rfc3986#section-3.1) name that refers to a specification for assigning identifiers within that scheme. As such, the URI syntax is a federated and extensible naming system wherein each scheme's specification may further restrict the syntax and semantics of identifiers using that scheme. Schemes are also known as protocols. You can see some examples of schemes below.

    tel:+1-816-555-1212
    mailto:Jane.Doe@example.com
    news:comp.infosystems.www.servers.unix
    https://web.dev/

The term _Uniform Resource Locator_ (URL) refers to the subset of URIs that, in addition to identifying a resource, provide a means of locating the resource by describing its primary access mechanism (e.g., its network location).

## Background on the `registerProtocolHandler()` method <a href="#background-on-the-registerprotocolhandler()-method" class="w-headline-link">#</a>

The secure-content-only `Navigator` method [`registerProtocolHandler()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler) lets sites register their ability to open or handle particular URL schemes. Therefore, sites need to call the method like so: `navigator.registerProtocolHandler(scheme, url)`. The two parameters are defined as follows:

- `scheme`: A string containing the protocol the site wishes to handle.
- `url`: A string containing the URL of the handler. This URL must include `%s`, as a placeholder that will be replaced with the escaped URL to be handled.

The scheme must either be one of the [safelisted schemes](https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme) (for example, `mailto`, `bitcoin`, or `magnet`) or begin with `web+`, followed by at least one or more lowercase ASCII letters after the `web+` prefix, for instance, `web+coffee`.

To make this clearer, here is a concrete example of the flow:

1.  The user visits a site at `https://coffeeshop.example.com/` that makes the following call: `navigator.registerProtocolHandler('web+coffee', 'coffee?type=%s')`.
2.  At a later point, while visiting `https://randomsite.example.com/`, the user clicks on a link such as `<a href="web+coffee:latte-macchiato">All about latte macchiato</a>`.
3.  This causes the browser to navigate to the following URL: `https://coffeeshop.example.com/coffee?type=web%2Bcoffee%3A%2F%2Flatte-macchiato`. The search string URL-decoded then reads `?type=web+coffee://latte-macchiato`.

## What this proposal is about <a href="#what-this-proposal-is-about" class="w-headline-link">#</a>

The present _URL protocol handler registration for PWAs_ proposal is about offering protocol handler registration as part of a PWA installation through its manifest. After registering a PWA as a protocol handler, when a user clicks on a hyperlink with a specific scheme such as `mailto` , `bitcoin`, or `web+music` from a browser or a platform-specific app, the registered PWA will open and receive the URL. It is important to note that both the proposed manifest-based registration and the traditional `registerProtocolHandler()` play very similar roles in practice, while still allowing the possibility for complementary user-experiences:

- Similarities include requirements around the list of schemes allowed to be registered, and the name and format of parameters, etc.
- Differences in the manifest-based registration are subtle, but might be useful to enhance the experience for PWA users. For example, manifest-based PWA registration may not require an additional user action apart from the user-initiated installation of the PWA.

### Use cases <a href="#use-cases" class="w-headline-link">#</a>

- In a word processing PWA, the user in a document encounters a link to a presentation like `web+presentations://deck2378465`. When the user clicks on the link, the presentation PWA automatically opens in the correct scope and shows the slide deck.
- In a platform-specific chat app, the user in a chat message receives a link to a `magnet` URL. Upon clicking the link, an installed torrent PWA launches and starts downloading.
- The user has a music streaming PWA installed. When a friend shares a link to a song like `web+music://songid=1234&time=0:13` and the user clicks on it, the music streaming PWA will automatically launch in a standalone window.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/URLProtocolHandler/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://github.com/w3c/manifest/pull/972">In progress</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. <strong>Origin trial</strong></td><td><strong><a href="https://developer.chrome.com/origintrials/#/view_trial/1136033006004207617">In progress</a></strong></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

### Enabling via about://flags or edge://flags <a href="#enabling-via-about:flags-or-edge:flags" class="w-headline-link">#</a>

To experiment with URL protocol handler registration for PWAs locally, without an origin trial token, enable the `#enable-desktop-pwas-protocol-handling` flag in `about://flags` or `edge://flags`.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chromium 92, the File Handling API will be available as an origin trial in Chromium. The origin trial is expected to end in Chromium 94 (October 13, 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token]() for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

## How to use URL protocol handler registration for PWAs <a href="#how-to-use-url-protocol-handler-registration-for-pwas" class="w-headline-link">#</a>

The API for URL protocol handler registration is modeled closely on `navigator.registerProtocolHandler()`. Just this time the information is passed declaratively via the web app manifest in a new property called `"protocol_handlers"` that takes an array of objects with the two required keys `"protocol"` and `"url"`. The code snippet below shows how to register `web+tea` and `web+coffee`. The values are strings containing the URL of the handler with the required `%s` placeholder for the escaped URL.

    {
      "protocol_handlers": [
        {
          "protocol": "web+tea",
          "url": "/tea?type=%s"
        },
        {
          "protocol": "web+coffee",
          "url": "/coffee?type=%s"
        }
      ]
    }

### Multiple apps registering for the same protocol <a href="#multiple-apps-registering-for-the-same-protocol" class="w-headline-link">#</a>

If multiple applications register themselves as handlers for the same scheme, for example, the `mailto` protocol, the operating system will show the user a picker and let them decide which of the registered handlers to use.

### The same app registering for multiple protocols <a href="#the-same-app-registering-for-multiple-protocols" class="w-headline-link">#</a>

The same app can register itself for multiple protocols, as you can see in the code sample above.

### App updates and handler registration <a href="#app-updates-and-handler-registration" class="w-headline-link">#</a>

Handler registrations are synchronized with the latest manifest version provided by the app. There are two cases:

- An update that adds new handlers triggers handler registration (separate from app installation).
- An update that removes handlers triggers handler unregistration (separate from app uninstallation).

## Demo <a href="#demo" class="w-headline-link">#</a>

You can see a demo of URL protocol handler registration for PWAs on Glitch.

1.  If you have not done so before, [enable the flag](#enabling-via-chrome:flags).
2.  Go to <https://protocol-handler.glitch.me/>, install the PWA, and reload the app after the installation. The browser has now registered the PWA as a handler for the `web+coffee` protocol with the operating system.
3.  In the installed PWA window, click on the link <https://protocol-handler-link.glitch.me/>. This will open a new browser tab with three links. Click on the first or the second (latte macchiato or americano). The browser will now show you a prompt and ask if you are fine with the app being a protocol handler for the `web+coffee` protocol. If you agree, the PWA will open and show the selected coffee.
4.  To compare with the traditional flow that uses `navigator.registerProtocolHandler()`, click the \*_Register protocol handler_ button in the PWA. Then in the browser tab click the third link (chai). It will likewise show a prompt, but then open the PWA in a tab, not in a browser window.
5.  Send yourself a message on a platform-specific application like Skype on Windows with a link like `<a href="web+coffee://americano">Americano</a>` and click it. It should likewise open the installed PWA.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format" alt="URL protocol handler demo with browser tab with links on the left, and standalone PWA window on the right." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/lfjgVAiGjVE9VohX3EDs.png?auto=format&amp;w=1600 1600w" width="800" height="461" />

## Security considerations <a href="#security-considerations" class="w-headline-link">#</a>

Since PWA installation requires the context to be secure, protocol handling inherits this constraint. The list of registered protocol handlers is not exposed to the web in any way so it cannot be used as a fingerprinting vector.

### Non user-initiated navigation attempts <a href="#non-user-initiated-navigation-attempts" class="w-headline-link">#</a>

Navigation attempts that are not initiated by the user, but that are programmatic, may not open apps. The custom protocol URL may only be used in top-level browsing contexts, but not, for example, as the URL of an iframe.

### Allowlist of protocols <a href="#allowlist-of-protocols" class="w-headline-link">#</a>

Just like with `registerProtocolHandler()` there is an allowlist of protocols that apps can register to handle.

### Default protocol handlers <a href="#default-protocol-handlers" class="w-headline-link">#</a>

Registration of PWA protocol handlers will not take over the default handler for a protocol. Instead, the next time the protocol is invoked, an operating system disambiguation dialog will prompt the user to either keep using the default handler or select the newly registered handler.

### Consent prompt <a href="#consent-prompt" class="w-headline-link">#</a>

On the first launch of the PWA due to an invoked protocol, the user will be presented with a permission dialog. This dialog will display the app name and origin of the app, and ask the user if the app is allowed to handle links from the protocol. If a user rejects the permission dialog, the registered protocol handler will be ignored by the operating system. To unregister the protocol handler, the user needs to uninstall the PWA that registered it.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with URL protocol handler registration for PWAs.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that does not work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/MicrosoftEdge/MSEdgeExplainers/tree/main/URLProtocolHandler), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `UI>Browser>WebAppInstalls` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use URL protocol handler registration for PWAs? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/proposal-url-protocol-handler-registration-for-pwas/4276). Send a Tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#ProtocolHandler`](https://twitter.com/search?q=%23ProtocolHandler&src=recent_search_click&f=live) and let us know where and how you're using it.

## Useful links <a href="#useful-links" class="w-headline-link">#</a>

- [Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/URLProtocolHandler/explainer.md)
- [Spec proposal](https://github.com/w3c/manifest/pull/972)
- [GitHub](https://github.com/MicrosoftEdge/MSEdgeExplainers/tree/main/URLProtocolHandler)
- [ChromeStatus](https://chromestatus.com/feature/5151703944921088)
- [Chromium bug](https://crbug.com/1019239)
- [TAG review](https://github.com/w3ctag/design-reviews/issues/482)
- [Discourse](https://discourse.wicg.io/t/proposal-url-protocol-handler-registration-for-pwas/4276)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

URL protocol handler registration for PWAs was implemented and specified by [Fabio Rocha](https://www.linkedin.com/in/fabiorochap/), [Diego González](https://www.linkedin.com/in/diekus/), [Connor Moody](https://www.linkedin.com/in/connor-d-moody/), and [Samuel Tang](https://www.linkedin.com/in/tangsamuel/) from the Microsoft Edge team. This article was reviewed by [Joe Medley](https://github.com/jpmedley) and Fabio Rocha. Hero image by [JJ Ying](https://unsplash.com/@jjying) on [Unsplash](https://unsplash.com/photos/PDxYfXVlK2M).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: Jul 2, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/url-protocol-handler/index.md)

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
