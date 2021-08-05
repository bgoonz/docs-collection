<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format" alt="A photo of an Android phone showing an app shortcuts menu" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/1ekafMZjtzcd0G3TLQJ4.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#get-things-done-quickly-with-app-shortcuts" class="w-toc__header--link">Get things done quickly with app shortcuts</a>

- [About app shortcuts](#about-app-shortcuts)
- [Define app shortcuts in the web app manifest](#define-app-shortcuts-in-the-web-app-manifest)
- [name](#name)
- [short_name (optional)](<#short_name-(optional)>)
- [description (optional)](<#description-(optional)>)
- [url](#url)
- [icons (optional)](<#icons-(optional)>)
- [Test your app shortcuts](#test-your-app-shortcuts)
- [Best practices](#best-practices)
- [Order app shortcuts by priority](#order-app-shortcuts-by-priority)
- [Use distinct app shortcut names](#use-distinct-app-shortcut-names)
- [Measure app shortcuts usage](#measure-app-shortcuts-usage)
- [Browser support](#browser-support)
- [Trusted Web Activity support](#trusted-web-activity-support)
- [Sample](#sample)
- [Helpful links](#helpful-links)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Get things done quickly with app shortcuts

App shortcuts give quick access to a handful of common actions that users need frequently.

May 20, 2020 <span class="w-author__separator">•</span> Updated May 3, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

[<img src="https://web-dev.imgix.net/image/admin/n1MFAKkwQLIbMeIvdkQ2.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jungkee Song" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/n1MFAKkwQLIbMeIvdkQ2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/n1MFAKkwQLIbMeIvdkQ2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/n1MFAKkwQLIbMeIvdkQ2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/n1MFAKkwQLIbMeIvdkQ2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/n1MFAKkwQLIbMeIvdkQ2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jungkees/)

<a href="/authors/jungkees/" class="w-author__name-link">Jungkee Song</a>

- <a href="https://twitter.com/jungkees" class="w-author__link">Twitter</a>
- <a href="https://github.com/jungkees" class="w-author__link">GitHub</a>

To improve users' productivity and facilitate re-engagement with key tasks, the web platform now supports app shortcuts. They allow web developers to provide quick access to a handful of common actions that users need frequently.

At the time of writing, app shortcuts are available on Android (Chrome 84), Windows (Chrome 85 and Edge 85), and Chrome OS (Chrome 92).

This article will teach you how to define those app shortcuts. Additionally, you'll learn some associated best practices.

## About app shortcuts <a href="#about-app-shortcuts" class="w-headline-link">#</a>

App shortcuts help users quickly start common or recommended tasks within your web app. Easy access to those tasks from anywhere the app icon is displayed will enhance users' productivity as well as increase their engagement with the web app.

The app shortcuts menu is invoked by right-clicking the app icon in the taskbar (Windows) or dock (macOS) on the user's desktop, or long pressing the app's launcher icon on Android.

<figure><img src="https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format" alt="App shortcuts menu opened on Android" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/F4TsJNfRJNJSt2ZpqVAy.png?auto=format&amp;w=1600 1600w" width="800" height="420" /><figcaption>App shortcuts menu opened on Android</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format" alt="App shortcuts menu opened on Windows" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RoF6k7Aw6WNvaEcsgIcb.png?auto=format&amp;w=1600 1600w" width="800" height="420" /><figcaption>App shortcuts menu opened on Windows</figcaption></figure>The app shortcuts menu is shown only for [Progressive Web Apps](/progressive-web-apps/) that are installed on the user's desktop or mobile device. Check out [What does it take to be installable?](/install-criteria/) to learn about installability requirements.

Each app shortcut expresses a user intent, each of which is associated with a URL within the [scope](/add-manifest/#scope) of your web app. The URL is opened when users activate the app shortcut. Examples of app shortcuts include the following:

- Top-level navigation items (e.g., home, timeline, recent orders)
- Search
- Data entry tasks (e.g., compose an email or tweet, add a receipt)
- Activities (e.g., start a chat with the most popular contacts)

Big thanks to the folks at Microsoft Edge and Intel for designing and standardizing app shortcuts. Chrome depends on a community of committers working together to move the Chromium project forward. Not every Chromium committer is a Googler, and these contributors deserve special recognition!

## Define app shortcuts in the web app manifest <a href="#define-app-shortcuts-in-the-web-app-manifest" class="w-headline-link">#</a>

App shortcuts are optionally defined in the [web app manifest](/add-manifest), a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. More specifically, they are declared in the `shortcuts` array member. Below is an example of a potential web app manifest.

    {
      "name": "Player FM",
      "start_url": "https://player.fm?utm_source=homescreen",
      …
      "shortcuts": [
        {
          "name": "Open Play Later",
          "short_name": "Play Later",
          "description": "View the list of podcasts you saved for later",
          "url": "/play-later?utm_source=homescreen",
          "icons": [{ "src": "/icons/play-later.png", "sizes": "192x192" }]
        },
        {
          "name": "View Subscriptions",
          "short_name": "Subscriptions",
          "description": "View the list of podcasts you listen to",
          "url": "/subscriptions?utm_source=homescreen",
          "icons": [{ "src": "/icons/subscriptions.png", "sizes": "192x192" }]
        }
      ]
    }

Each member of the `shortcuts` array is a dictionary that contains at least a `name` and a `url`. Other members are optional.

### name <a href="#name" class="w-headline-link">#</a>

The human-readable label for the app shortcut when displayed to the user.

### short_name (optional) <a href="#short_name-(optional)" class="w-headline-link">#</a>

The human-readable label used where space is limited. It is recommended that you provide it, even though it's optional.

### description (optional) <a href="#description-(optional)" class="w-headline-link">#</a>

The human-readable purpose for the app shortcut. It is not used at the time of writing but may be exposed to assistive technology in the future.

### url <a href="#url" class="w-headline-link">#</a>

The URL opened when a user activates the app shortcut. This URL must exist within the scope of the web app manifest. If it is a relative URL, the base URL will be the URL of the web app manifest.

### icons (optional) <a href="#icons-(optional)" class="w-headline-link">#</a>

An array of image resource objects. Each object must include the `src` and a `sizes` property. Unlike [web app manifest icons](/add-manifest/#icons), the `type` of image is optional.

SVG files are not supported at the time of writing, use PNG instead.

If you want pixel-perfect icons, provide them in increments of 48dp (i.e. 36x36, 48x48, 72x72, 96x96, 144x144, 192x192 pixel icons). Otherwise, it is recommended that you use a single 192x192 pixel icon.

As a quality measure, icons must be at least half of the device's ideal size on Android, which is 48dp. For example, to display on an [xxhdpi screen](https://developer.android.com/training/multiscreen/screendensities#TaskProvideAltBmp), the icon must be at least 72 by 72 pixels. (This is derived from the [formula for converting](https://developer.android.com/training/multiscreen/screendensities#dips-pels) dp units for pixel units.)

## Test your app shortcuts <a href="#test-your-app-shortcuts" class="w-headline-link">#</a>

To verify your app shortcuts are setup correctly, use the **Manifest** pane in the **Application** panel of DevTools.

<figure><img src="https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format" alt="App shortcuts shown in DevTools" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/rEL0r8lEfYHlsj0ylLSL.png?auto=format&amp;w=1600 1600w" width="800" height="534" /><figcaption>App shortcuts shown in DevTools</figcaption></figure>This pane provides a human-readable version of many of your manifest's properties, including app shortcuts. It makes it easy to verify that all of the shortcut icons, if provided, are loading properly.

App shortcuts may not be available right away to all users because Progressive Web App updates are capped to once a day. Find out more about [how Chrome handles updates to the web app manifest](/manifest-updates).

## Best practices <a href="#best-practices" class="w-headline-link">#</a>

### Order app shortcuts by priority <a href="#order-app-shortcuts-by-priority" class="w-headline-link">#</a>

You are encouraged to order app shortcuts by priority, with the most critical app shortcuts appearing first in the `shortcuts` array as the limit on the number of app shortcuts displayed varies depending on the platform. Chrome and Edge on Windows for instance limit the number of app shortcuts to 10 while Chrome for Android only takes the first 4 app shortcuts into account.

Chrome 92 for Android 7 now allow only 3 app shortcuts. A shortcut to the site settings was added, taking one of the available shortcut slots for the app.

### Use distinct app shortcut names <a href="#use-distinct-app-shortcut-names" class="w-headline-link">#</a>

You should not rely on icons to differentiate app shortcuts as they may not always be visible. For instance, macOS doesn't support icons in the dock shortcuts menu. Use distinct names for each app shortcut.

### Measure app shortcuts usage <a href="#measure-app-shortcuts-usage" class="w-headline-link">#</a>

You should annotate app shortcuts `url` entries like you would do with `start_url` for analytics purposes (e.g. `url: "/my-shortcut?utm_source=homescreen"`).

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

App shortcuts are available on Android (Chrome 84), Windows (Chrome 85 and Edge 85), and Chrome OS (Chrome 92 behind the experimental `about://flags/#enable-desktop-pwas-app-icon-shortcuts-menu-ui` flag). More desktop platform support will follow.

## <figure><img src="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format" alt="App shortcuts menu opened on Chrome OS" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vvhSqZboQoZZN9wBvoXq72wzGAf1/6KgvySxUcryuD0gwXa0u.png?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>App shortcuts menu opened on Chrome OS</figcaption></figure>Trusted Web Activity support <a href="#trusted-web-activity-support" class="w-headline-link">#</a>

[Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap), the recommended tool to build Android apps that use [Trusted Web Activity](/using-a-pwa-in-your-android-app/), reads app shortcuts from the web app manifest and automatically generates the corresponding configuration for the Android app. Note that icons for app shortcuts are [required](https://github.com/GoogleChromeLabs/bubblewrap/issues/116) and must be at least 96 by 96 pixels in Bubblewrap.

[PWABuilder](https://www.pwabuilder.com/), a great tool to easily turn a Progressive Web App into a Trusted Web Activity, supports app shortcuts with some [caveats](https://github.com/pwa-builder/CloudAPK/issues/25).

For developers integrating Trusted Web Activity manually into their Android application, [Android app shortcuts](https://developer.android.com/guide/topics/ui/shortcuts) can be used to implement the same behaviors.

## Sample <a href="#sample" class="w-headline-link">#</a>

Check out the [app shortcuts sample](https://app-shortcuts.glitch.me) and its [source](https://glitch.com/edit/#!/app-shortcuts).

## Helpful links <a href="#helpful-links" class="w-headline-link">#</a>

- [Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Shortcuts/explainer.md)
- [Spec](https://w3c.github.io/manifest/#shortcuts-member)
- [App shortcuts sample](https://app-shortcuts.glitch.me) | [App shortcuts sample source](https://glitch.com/edit/#!/app-shortcuts)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=955497)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5706099464339456)
- Blink Component: [`UI>Browser>WebAppInstalls`](https://crbug.com/?q=component:UI%3EBrowser%3EWebAppInstalls)

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: May 3, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/app-shortcuts/index.md)

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
