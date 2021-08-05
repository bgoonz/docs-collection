<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#responsive-web-design-basics" class="w-toc__header--link">Responsive web design basics</a>

- [Set the viewport](#viewport)
- [Ensure an accessible viewport](#accessible-viewport)
- [Size content to the viewport](#size-content)
- [Images](#images)
- [Layout](#layout)
- [Use CSS media queries for responsiveness](#media-queries)
- [Media queries based on viewport size](#viewport-media-queries)
- [Media queries based on device capability](#capability-media-queries)
- [How to choose breakpoints](#breakpoints)
- [Pick major breakpoints by starting small, then working up](#major-breakpoints)
- [Optimize text for reading](#optimize-text-for-reading)
- [Avoid simply hiding content](#avoid-simply-hiding-content)
- [View media query breakpoints in Chrome DevTools](#devtools)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Responsive web design basics

How to create sites which respond to the needs and capabilities of the device they are viewed on.

Feb 12, 2019 <span class="w-author__separator">•</span> Updated May 14, 2020

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Rachel Andrew" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/dUAN2DEXHRT6G6iPrIby.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/rachelandrew/)

<a href="/authors/rachelandrew/" class="w-author__name-link">Rachel Andrew</a>

- <a href="https://twitter.com/rachelandrew" class="w-author__link">Twitter</a>
- <a href="https://github.com/rachelandrew" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@rachelandrew" class="w-author__link">Glitch</a>
- <a href="https://rachelandrew.co.uk/" class="w-author__link">Blog</a>

- [Set the viewport](#viewport)
- [Size content to the viewport](#size-content)
- [Use CSS media queries for responsiveness](#media-queries)
- [How to choose breakpoints](#breakpoints)
- [View media query breakpoints in Chrome DevTools](#devtools)

The use of mobile devices to surf the web continues to grow at an astronomical pace, and these devices are often constrained by display size and require a different approach to how content is laid out on the screen.

Responsive web design, originally defined by [Ethan Marcotte in A List Apart](http://alistapart.com/article/responsive-web-design/), responds to the needs of the users and the devices they're using. The layout changes based on the size and capabilities of the device. For example, on a phone users would see content shown in a single column view; a tablet might show the same content in two columns.

A multitude of different screen sizes exist across phones, "phablets," tablets, desktops, game consoles, TVs, and even wearables. Screen sizes are always changing, so it's important that your site can adapt to any screen size, today or in the future. In addition, devices have different features with which we interact with them. For example some of your visitors will be using a touchscreen. Modern responsive design considers all of these things to optimize the experience for everyone.

## Set the viewport <a href="#viewport" class="w-headline-link">#</a>

Pages optimized for a variety of devices must include a meta viewport tag in the head of the document. A meta viewport tag gives the browser instructions on how to control the page's dimensions and scaling.

To attempt to provide the best experience, mobile browsers render the page at a desktop screen width (usually about `980px`, though this varies across devices), and then try to make the content look better by increasing font sizes and scaling the content to fit the screen. This means that font sizes may appear inconsistent to users, who may have to double-tap or pinch-to-zoom in order to see and interact with the content.

    <!DOCTYPE html>
    <html lang="en">
      <head>
        …
        <meta name="viewport" content="width=device-width, initial-scale=1">
        …
      </head>
      …

Using the meta viewport value `width=device-width` instructs the page to match the screen's width in device-independent pixels. A device (or density) independent pixel being a representation of a single pixel, which may on a high density screen consist of many physical pixels. This allows the page to reflow content to match different screen sizes, whether rendered on a small mobile phone or a large desktop monitor.

<figure><img src="https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format" alt="An example of how the page loads in a device without the viewport meta tag. See this example on Glitch." sizes="(min-width: 500px) 500px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/SrMBH5gokGU06S0GsjLS.png?auto=format&amp;w=1000 1000w" width="500" height="640" /><figcaption>An example of how the page loads in a device without the viewport meta tag. <a href="https://without-vp-meta.glitch.me/">See this example on Glitch</a>.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format" alt="An example of how the page loads in a device with the viewport meta tag. See this example on Glitch." sizes="(min-width: 500px) 500px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/9NrJxt3aEv37A3E7km65.png?auto=format&amp;w=1000 1000w" width="500" height="888" /><figcaption>An example of how the page loads in a device with the viewport meta tag. <a href="https://with-vp-meta.glitch.me/">See this example on Glitch</a>.</figcaption></figure>[Some browsers](https://css-tricks.com/probably-use-initial-scale1/) keep the page's width constant when rotating to landscape mode, and zoom rather than reflow to fill the screen. Adding the value `initial-scale=1` instructs browsers to establish a 1:1 relationship between CSS pixels and device-independent pixels regardless of device orientation, and allows the page to take advantage of the full landscape width.

**Caution**: To ensure that older browsers can properly parse the attributes, use a comma to separate attributes.

The [Does not have a `<meta name="viewport">` tag with `width` or `initial-scale`](/viewport/) Lighthouse audit can help you automate the process of making sure that your HTML documents are using the viewport meta tag correctly.

### Ensure an accessible viewport <a href="#accessible-viewport" class="w-headline-link">#</a>

In addition to setting an `initial-scale`, you can also set the following attributes on the viewport:

- `minimum-scale`
- `maximum-scale`
- `user-scalable`

When set, these can disable the user's ability to zoom the viewport, potentially causing accessibility issues. Therefore we would not recommend using these attributes.

## Size content to the viewport <a href="#size-content" class="w-headline-link">#</a>

On both desktop and mobile devices, users are used to scrolling websites vertically but not horizontally; forcing the user to scroll horizontally or to zoom out in order to see the whole page results in a poor user experience.

When developing a mobile site with a meta viewport tag, it's easy to accidentally create page content that doesn't quite fit within the specified viewport. For example, an image that is displayed at a width wider than the viewport can cause the viewport to scroll horizontally. You should adjust this content to fit within the width of the viewport, so that the user does not need to scroll horizontally.

The [Content is not sized correctly for the viewport](/content-width/) Lighthouse audit can help you automate the process of detecting overflowing content.

### Images <a href="#images" class="w-headline-link">#</a>

An image has fixed dimensions and if it is larger than the viewport will cause a scrollbar. A common way to deal with this problem is to give all images a `max-width` of `100%`. This will cause the image to shrink to fit the space it has, should the viewport size be smaller than the image. However because the `max-width`, rather than the `width` is `100%`, the image will not stretch larger than its natural size. It is generally safe to add the following to your stylesheet so that you will never have a problem with images causing a scrollbar.

    img {
      max-width: 100%;
      display: block;
    }

#### Add the dimensions of the image to the img element <a href="#image-dimensions" class="w-headline-link">#</a>

When using `max-width: 100%` you are overriding the natural dimensions of the image, however you should still use the `width` and `height` attributes on your `<img>` tag. This is because modern browsers will use this information to reserve space for the image before it loads in, this will help to avoid [layout shifts](/optimize-cls/) as content loads.

### Layout <a href="#layout" class="w-headline-link">#</a>

Since screen dimensions and width in CSS pixels vary widely between devices (for example, between phones and tablets, and even between different phones), content should not rely on a particular viewport width to render well.

In the past, this required setting elements used to create layout in percentages. In the example below, you can see a two-column layout with floated elements, sized using pixels. Once the viewport becomes smaller than the total width of the columns, we have to scroll horizontally to see the content.

<figure><img src="https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format" alt="A floated layout using pixels. See this example on Glitch." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/exFCZNQLUveUnpMFjvcj.jpg?auto=format&amp;w=1600 1600w" width="800" height="504" /><figcaption>A floated layout using pixels. <a href="https://layout-floats-px.glitch.me/">See this example on Glitch</a>.</figcaption></figure>By using percentages for the widths, the columns always remain a certain percentage of the container. This means that the columns become narrower, rather than creating a scrollbar.

Modern CSS layout techniques such as Flexbox, Grid Layout, and Multicol make the creation of these flexible grids much easier.

#### Flexbox <a href="#flexbox" class="w-headline-link">#</a>

This layout method is ideal when you have a set of items of different sizes and you would like them to fit comfortably in a row or rows, with smaller items taking less space and larger ones getting more space.

    .items {
      display: flex;
      justify-content: space-between;
    }

In a responsive design, you can use Flexbox to display items as a single row, or wrapped onto multiple rows as the available space decreases.

[Read more about Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).

#### CSS Grid Layout <a href="#grid" class="w-headline-link">#</a>

CSS Grid Layout allows for the straightforward creation of flexible grids. If we consider the earlier floated example, rather than creating our columns with percentages, we could use grid layout and the `fr` unit, which represents a portion of the available space in the container.

    .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }

Grid can also be used to create regular grid layouts, with as many items as will fit. The number of available tracks will be reduced as the screen size shrinks. In the below demo, we have as many cards as will fit on each row, with a minimum size of `200px`.

[Read more about CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

#### Multiple-column layout <a href="#multicol" class="w-headline-link">#</a>

For some types of layout you can use Multiple-column Layout (Multicol), which can create responsive numbers of columns with the `column-width` property. In the demo below, you can see that columns are added if there is room for another `200px` column.

[Read more about Multicol](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

## Use CSS media queries for responsiveness <a href="#media-queries" class="w-headline-link">#</a>

Sometimes you will need to make more extensive changes to your layout to support a certain screen size than the techniques shown above will allow. This is where media queries become useful.

Media queries are simple filters that can be applied to CSS styles. They make it easy to change styles based on the types of device rendering the content, or the features of that device, for example width, height, orientation, ability to hover, and whether the device is being used as a touchscreen.

To provide different styles for printing, you need to target a _type_ of output so you could include a stylesheet with print styles as follows:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        …
        <link rel="stylesheet" href="print.css" media="print">
        …
      </head>
      …

Alternatively, you could include print styles within your main stylesheet using a media query:

    @media print {
      /* print styles go here */
    }

It is also possible to include separate stylesheets in your main CSS file using the `@import` syntax, `@import url(print.css) print;`, however this use is not recommended for performance reasons. See [Avoid CSS imports](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations#avoid_css_imports) for more details.

For responsive web design, we are typically querying the _features_ of the device in order to provide a different layout for smaller screens, or when we detect that our visitor is using a touchscreen.

### Media queries based on viewport size <a href="#viewport-media-queries" class="w-headline-link">#</a>

Media queries enable us to create a responsive experience where specific styles are applied to small screens, large screens, and anywhere in between. The feature we are detecting here is therefore screen size, and we can test for the following things.

- `width` (`min-width`, `max-width`)
- `height` (`min-height`, `max-height`)
- `orientation`
- `aspect-ratio`

All of these features have excellent browser support, for more details including browser support information see [width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width), [height](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height), [orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation), and [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio) on MDN.

The specification did include tests for `device-width` and `device-height`. These have been deprecated and should be avoided. `device-width` and `device-height` tested for the actual size of the device window which was not useful in practice because this may be different from the viewport the user is looking at, for example if they have resized the browser window.

### Media queries based on device capability <a href="#capability-media-queries" class="w-headline-link">#</a>

Given the range of devices available, we cannot make the assumption that every large device is a regular desktop or laptop computer, or that people are only using a touchscreen on a small device. With some newer additions to the media queries specification we can test for features such as the type of pointer used to interact with the device and whether the user can hover over elements.

- `hover`
- `pointer`
- `any-hover`
- `any-pointer`

Try viewing this demo on different devices, such as a regular desktop computer and a phone or tablet.

These newer features have good support in all modern browsers. Find out more on the MDN pages for [hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover), [any-hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover), [pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer), [any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer).

#### Using `any-hover` and `any-pointer` <a href="#using-any-hover-and-any-pointer" class="w-headline-link">#</a>

The features `any-hover` and `any-pointer` test if the user has the capability to hover, or use that type of pointer even if it is not the primary way they are interacting with their device. Be very careful when using these. Forcing a user to switch to a mouse when they are using their touchscreen is not very friendly! However, `any-hover` and `any-pointer` may be useful if it is important to work out what kind of device a user has. For example, a laptop with a touchscreen and trackpad should match coarse and fine pointers, in addition to the ability to hover.

## How to choose breakpoints <a href="#breakpoints" class="w-headline-link">#</a>

Don't define breakpoints based on device classes. Defining breakpoints based on specific devices, products, brand names, or operating systems that are in use today can result in a maintenance nightmare. Instead, the content itself should determine how the layout adjusts to its container.

### Pick major breakpoints by starting small, then working up <a href="#major-breakpoints" class="w-headline-link">#</a>

Design the content to fit on a small screen size first, then expand the screen until a breakpoint becomes necessary. This allows you to optimize breakpoints based on content and maintain the least number of breakpoints possible.

Let's work through the example we saw at the beginning: the weather forecast. The first step is to make the forecast look good on a small screen.

<figure><img src="https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format" alt="The app at a narrow width." class="w-screenshot" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/3KPWtKzDFCwImLyHprRP.png?auto=format&amp;w=800 800w" width="400" height="667" /><figcaption>The app at a narrow width.</figcaption></figure>Next, resize the browser until there is too much white space between the elements, and the forecast simply doesn't look as good. The decision is somewhat subjective, but above `600px` is certainly too wide.

<figure><img src="https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format" alt="The app at a point where we feel we should tweak the design." class="w-screenshot" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/sh1P84rvjvviENlVFED4.png?auto=format&amp;w=800 800w" width="400" height="240" /><figcaption>The app at a point where we feel we should tweak the design.</figcaption></figure>To insert a breakpoint at `600px`, create two media queries at the end of your CSS for the component, one to use when the browser is `600px` and below, and one for when it is wider than `600px`.

    @media (max-width: 600px) {

    }

    @media (min-width: 601px) {

    }

Finally, refactor the CSS. Inside the media query for a `max-width` of `600px`, add the CSS which is only for small screens. Inside the media query for a `min-width` of `601px` add CSS for larger screens.

#### Pick minor breakpoints when necessary <a href="#pick-minor-breakpoints-when-necessary" class="w-headline-link">#</a>

In addition to choosing major breakpoints when layout changes significantly, it is also helpful to adjust for minor changes. For example, between major breakpoints it may be helpful to adjust the margins or padding on an element, or increase the font size to make it feel more natural in the layout.

Let's start by optimizing the small screen layout. In this case, let's boost the font when the viewport width is greater than `360px`. Second, when there is enough space, we can separate the high and low temperatures so that they're on the same line instead of on top of each other. And let's also make the weather icons a bit larger.

    @media (min-width: 360px) {
      body {
        font-size: 1.0em;
      }
    }

    @media (min-width: 500px) {
      .seven-day-fc .temp-low,
      .seven-day-fc .temp-high {
        display: inline-block;
        width: 45%;
      }

      .seven-day-fc .seven-day-temp {
        margin-left: 5%;
      }

      .seven-day-fc .icon {
        width: 64px;
        height: 64px;
      }
    }

Similarly, for the large screens it's best to limit to maximum width of the forecast panel so it doesn't consume the whole screen width.

    @media (min-width: 700px) {
      .weather-forecast {
        width: 700px;
      }
    }

### Optimize text for reading <a href="#optimize-text-for-reading" class="w-headline-link">#</a>

Classic readability theory suggests that an ideal column should contain 70 to 80 characters per line (about 8 to 10 words in English). Thus, each time the width of a text block grows past about 10 words, consider adding a breakpoint.

<figure><img src="https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format" alt="The text as read on a mobile device." class="w-screenshot" sizes="(min-width: 400px) 400px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/C4IGJw9hbPXKnTSovEXS.jpg?auto=format&amp;w=800 800w" width="400" height="488" /><figcaption>The text as read on a mobile device.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format" alt="The text as read on a desktop browser with a breakpoint added to constrain the line length." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/rmsa1EB5FpvWV0vFIpTF.jpg?auto=format&amp;w=1600 1600w" width="800" height="377" /><figcaption>The text as read on a desktop browser with a breakpoint added to constrain the line length.</figcaption></figure>Let's take a deeper look at the above blog post example. On smaller screens, the Roboto font at `1em` works perfectly giving 10 words per line, but larger screens require a breakpoint. In this case, if the browser width is greater than `575px`, the ideal content width is `550px`.

    @media (min-width: 575px) {
      article {
        width: 550px;
        margin-left: auto;
        margin-right: auto;
      }
    }

### Avoid simply hiding content <a href="#avoid-simply-hiding-content" class="w-headline-link">#</a>

Be careful when choosing what content to hide or show depending on screen size. Don't simply hide content just because you can't fit it on the screen. Screen size is not a definitive indication of what a user may want. For example, eliminating the pollen count from the weather forecast could be a serious issue for spring-time allergy sufferers who need the information to determine if they can go outside or not.

## View media query breakpoints in Chrome DevTools <a href="#devtools" class="w-headline-link">#</a>

Once you've got your media query breakpoints set up, you'll want to see how your site looks with them. You could resize your browser window to trigger the breakpoints, but Chrome DevTools has a built-in feature that makes it easy to see how a page looks under different breakpoints.

<figure><img src="https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format" alt="DevTools showing the weather app as it looks at a wider viewport size." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/DhaeCbVo5AmzZ0CyLtVp.png?auto=format&amp;w=1600 1600w" width="800" height="522" /><figcaption>DevTools showing the weather app as it looks at a wider viewport size.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format" alt="DevTools showing the weather app as it looks at a narrower viewport size." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/35IEQnhGox93PHvbeglM.png?auto=format&amp;w=1600 1600w" width="800" height="521" /><figcaption>DevTools showing the weather app as it looks at a narrower viewport size.</figcaption></figure>To view your page under different breakpoints:

[Open DevTools](https://developers.google.com/web/tools/chrome-devtools#open) and then turn on [Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode#toggle). This opens in [responsive mode](https://developers.google.com/web/tools/chrome-devtools/device-mode#responsive) by default.

To see your media queries, open the Device Mode menu and select [Show media queries](https://developers.google.com/web/tools/chrome-devtools/device-mode#queries) to display your breakpoints as colored bars above your page.

Click on one of the bars to view your page while that media query is active. Right-click on a bar to jump to the media query's definition.

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/layout/" class="w-chip">Layout</a> <a href="/tags/mobile/" class="w-chip">Mobile</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: May 14, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/responsive-web-design-basics/index.md)

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
