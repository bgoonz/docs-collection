<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format" alt="A series of screens shows a phone camera scanning an image and generating a link." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/SJQDe005xR0Cvu9JPt78.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#visual-searching-with-the-web-perception-toolkit" class="w-toc__header--link">Visual searching with the Web Perception Toolkit</a>

- [How does it work?](#how-does-it-work)
- [Structured data](#structured-data)
- [The user experience](#the-user-experience)
- [Formatting cards](#formatting-cards)
- [Conclusion](#conclusion)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Visual searching with the Web Perception Toolkit

Easy to use real-world interactivity.

May 7, 2019

[<img src="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Joe Medley" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/ynJFmvKEbD9diZZsTdkD.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/joemedley/)

<a href="/authors/joemedley/" class="w-author__name-link">Joe Medley</a>

- <a href="https://twitter.com/medleyjp" class="w-author__link">Twitter</a>
- <a href="https://github.com/jpmedley" class="w-author__link">GitHub</a>

Wouldn't it be great if users could search your site using their camera? Imagine this. Your site is Razor McShaveyface. Your customers tell you they have trouble finding the right cartridges for their razor when they reorder. They don't know the right keywords for your product search. And let's be honest, they probably never will.

What if they never need to? What if they could point their phone's camera at the UPC code on package and your site could present them with the right cartridge and a big red "reorder" button?

Think of other ways you can use a camera on a site. Imagine a site that supports in-store price checking. Imagine getting information about a museum exhibit or historical marker. Imagine identifying real-world landmarks in games like geocaching or scavenger hunts.

[The Web Perception Toolkit](https://github.com/GoogleChromeLabs/perception-toolkit) makes these camera-based scenarios possible. In some cases you can even create an experience without writing code.

## How does it work? <a href="#how-does-it-work" class="w-headline-link">#</a>

The open-source Web Perception Toolkit helps you add visual search to your website. It passes a device camera stream through a set of detectors that map real-world objects, here called "targets", to content on your site. This mapping is defined using Structured Data (JSON-LD) on your site. With this data, you can present the right information in a customizable UI.

I'll show you enough of this to give you a taste of how it works. For a complete explanation, check out the [Getting Started](https://perceptiontoolkit.dev/getting-started/) guide, the [toolkit reference](https://perceptiontoolkit.dev/documentation/), the [I/O Sandbox demo](https://io.perceptiontoolkit.dev/) and the [sample demos](https://github.com/GoogleChromeLabs/perception-toolkit/tree/master/demo).

## Structured data <a href="#structured-data" class="w-headline-link">#</a>

The toolkit can't find just any target in the camera's view. You must provide it with linked JSON data for the targets you want it to recognize. This data also contains information about those targets that will be shown to the user.

The data is all you need to create a user experience like the one in the image below. If you do nothing else, the Web Perception Toolkit can identify targets, then show and hide cards based on the information provided in the data. Try this for yourself using our [artifact-map demo](https://github.com/GoogleChromeLabs/perception-toolkit/tree/master/demo/artifact-map).

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format" alt="The default interface." class="w-screenshot" sizes="(min-width: 300px) 300px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/UD5t3RD9HZ7OIHVaAg31.png?auto=format&amp;w=600 600w" width="300" height="518" /><figcaption>The default interface.</figcaption></figure>Add data to your site with a JSON linked data file, included using a `<script>` tag and the `"application/ld+json"` MIME type.

    <script type="application/ld+json" src="//path/to/your/sitemap.jsonld">

The file itself looks something like this:

    [
      {
        "@context": "https://schema.googleapis.com/",
        "@type": "ARArtifact",
        "arTarget": {
          "@type": "Barcode",
          "text": "012345678912"
        },
        "arContent": {
          "@type": "WebPage",
          "url": "http://localhost:8080/demo/artifact-map/products/product1.html",
          "name": "Product 1",
          "description": "This is a product with a barcode",
          "image": "http://localhost:8080/demo/artifact-map/products/product1.png"
        }
      }
    ]

## The user experience <a href="#the-user-experience" class="w-headline-link">#</a>

What if you want more than the default user experience? The toolkit gives you lifecycle events, Card and Button objects for crafting the user experience around those events, and an easy way to style the cards. I'm going to show a little of this with code based losely on our [Getting Started](https://perceptiontoolkit.dev/getting-started/) guide.

The most important lifecycle event is `PerceivedResults`, which is fired every time a target is found. A target can be a real-world object or a marker such as a bar code or QR code.

The process for responding to this event is the same as for any other event with an exception already alluded to. If you don't implement the event, a user interface is automatically created using structured data. To override this behavior start your event handler by calling`event.preventDefault()`.

    const container = document.querySelector('.container');
    async function onPerceivedResults(event) {
      // preventDefault() to stop default result Card from showing.
      event.preventDefault();
      // Process the event.
    }
    window.addEventListener(PerceptionToolkit.Events.PerceivedResults, onPerceivedResults);

Let's look at the event more closely. The event itself contains arrays of markers and targets that it has both found and lost. When targets are found in the world, the even fires and passes found objects in `event.found`. Similarly, when targets pass from the camera view the event fires again, passing lost objects in `event.lost`. This helps account for hand and marker movements: cameras not held steadily enough, dropped markers, that kind of thing.

    async function onPerceivedResults(event) {
      // preventDefault() to stop default result Card from showing
      event.preventDefault();
      if (container.childNodes.length > 0) { return; }
      const { found, lost } = event.detail;
      // Deal with lost and found objects.
    }

Next, you show an appropriate card based on what the toolkit found.

    async function onPerceivedResults(event) {
      event.preventDefault();
      if (container.childNodes.length > 0) { return; }
      const { found, lost } = event.detail;
      if (found.length === 0 && lost.length === 0) {
        // Object not found.
        // Show a card with an offer to show the catalog.
      } else if (found.length > 0) {
        // Object found.
        // Show a card with a reorder button.
      }
    }

Adding cards and buttons is simply a matter of instantiating them and appending them to a parent object. For example:

    const { Card } = PerceptionToolkit.Elements;
    const card = new Card();
    card.src = 'Your message here.'
    container.appendChild(card)'

Finally, here's what the whole thing looks like. Notice the conveniences I've added to the user experience. Whether the marker is found or not, I provide one-click access to what I think is most useful in the circumstances.

    async function onPerceivedResults(event) {
      // preventDefault() to stop default result Card from showing
      event.preventDefault();
      if (container.childNodes.length > 0) { return; }
      const { found, lost } = event.detail;
      const { ActionButton, Card } = PerceptionToolkit.Elements;
      if (found.length === 0 && lost.length === 0) {
        //Make a view catalog button.
        const button =  new ActionButton();
        button.label = 'View catalog';
        button.addEventListener('click', () => {
          card.close();
          //Run code to launch a catalog.
        });
        //Make a card for the button.
        const card = new Card();
        card.src = 'We wish we could help, but that\'s not our razor. Would you like to see our catalog?';
        card.appendChild(button);
        //Tell the toolkit it does not keep the card around
        // if it finds something it recognizes.
        card.dataset.notRecognized = true;
        container.appendChild(card);
      } else if (found.length > 0) {
        //Make a reorder button.
        const button = new ActionButton();
        button.label = 'Reorder';
        botton.addEventListener('click', () => {
          card.close();
          //Run code to reorder.
        })
        const card = new Card();
        card.src = found[0].content;
        card.appendChild(button);
        container.appendChild(card);
      }
    }

## Formatting cards <a href="#formatting-cards" class="w-headline-link">#</a>

The Web Perception Toolkit provides built-in formatting for cards and buttons with the default stylesheet. But you can easily add your own. The provided `Card` and `ActionButton` objects contain `style` properties (among many others) that let you put your organizational stamp on the look and feel. To include the default stylesheet, add a `<link>` element to your page.

    <link rel="stylesheet" href="//path/to/toolkit/styles/perception-toolkit.css">

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

As I said at the top, this is not an exhaustive look at the [Web Perception Toolkit](https://github.com/GoogleChromeLabs/perception-toolkit). Hopefully it gives you a sense of how easy it is to add visual searching to a website. Learn more with the [Getting Started](https://perceptiontoolkit.dev/getting-started/) guide and the [sample demos](https://github.com/GoogleChromeLabs/perception-toolkit/tree/master/demo). Dig in to the [toolkit documentation](https://perceptiontoolkit.dev/documentation/) to learn what it can do.

<span class="w-mr--sm"> Last updated: May 7, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/perception-toolkit/index.md)

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
