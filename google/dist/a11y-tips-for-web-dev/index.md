<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format" alt="Illustration showing images of common disabilities pinned to a corkboard." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/whvrlDQbdAnmwbnZH7qX.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#accessibility-tips-for-web-developers" class="w-toc__header--link">Accessibility tips for web developers</a>

- [Are your UI components accessible?](#are-your-ui-components-accessible)
- [Can your UI component be used with the keyboard alone?](#can-your-ui-component-be-used-with-the-keyboard-alone)
- [Using tabindex](#using-tabindex)
- [Using autofocus](#using-autofocus)
- [Adding keyboard interaction](#adding-keyboard-interaction)
- [Can you use your UI component with a screen reader?](#can-you-use-your-ui-component-with-a-screen-reader)
- [Do all components and images have meaningful text alternatives?](#do-all-components-and-images-have-meaningful-text-alternatives)
- [Do your components provide semantic information?](#do-your-components-provide-semantic-information)
- [Can users understand everything without relying on color?](#can-users-understand-everything-without-relying-on-color)
- [Is there sufficient contrast between text and images and their background?](#is-there-sufficient-contrast-between-text-and-images-and-their-background)
- [Is the moving or flashing content in your components stoppable and safe?](#is-the-moving-or-flashing-content-in-your-components-stoppable-and-safe)
- [Accessibility Tooling](#accessibility-tooling)
- [Conclusions](#conclusions)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Accessibility tips for web developers

Improving accessibility makes your site more useable for everyone.

Dec 6, 2019

[<img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Addy Osmani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/LJyNTOzyWbowv2mrlzPS.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/addyosmani/)

<a href="/authors/addyosmani/" class="w-author__name-link">Addy Osmani</a>

- <a href="https://twitter.com/addyosmani" class="w-author__link">Twitter</a>
- <a href="https://github.com/addyosmani" class="w-author__link">GitHub</a>

It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability you can optimize for: **visual**, **hearing**, **mobility**, **cognition**, **speech**, and **neural**. Many tools and resources can help here, even if you're totally new to web accessibility.

Over one billion people live with some form of disability. You might have been in a loud room at some point trying to hear the conversation around you or in a low-lighting condition trying to find something in the dark. Do you remember the frustration you felt with that circumstance? Now imagine if that temporary condition were permanent. How different would your experience on the web be?

To be accessible, sites need to work across multiple devices with varying screen sizes and different kinds of input, such as screen readers. Moreover, sites should be usable by the broadest group of users, including those with disabilities. Here's a sample of just a few disabilities your users may have:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Vision</th><th>Hearing</th><th>Mobility</th></tr></thead><tbody><tr class="odd"><td><ul><li>Low vision</li><li>Blindness</li><li>Color blindness</li><li>Cataracts</li><li>Sun glare</li></ul></td><td><ul><li>Hard of hearing</li><li>Deafness</li><li>Noise</li><li>Ear infection</li></ul></td><td><ul><li>Spinal cord injury</li><li>Limited dexterity</li><li>Hands full</li></ul></td></tr><tr class="even"><td>Cognitive</td><td>Speech</td><td>Neural</td></tr><tr class="odd"><td><ul><li>Learning disability</li><li>Sleepiness or distraction</li><li>Migraine</li><li>Autism</li><li>Seizure</li></ul></td><td><ul><li>Ambient noise</li><li>Sore throat</li><li>Speech impediment</li><li>Unable to speak</li></ul></td><td><ul><li>Depression</li><li>PTSD</li><li>Bipolar disorder</li><li>Anxiety</li></ul></td></tr></tbody></table>

**Visual issues** range from an inability to distinguish colors to no vision at all.

- Ensure text content meets a minimum [contrast ratio threshold](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast).
- Avoid communicating information [using solely color](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-without-color) and ensure that all text is [resizable](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale).
- Ensure all user interface components can be used with assistive technologies such as screen readers, magnifiers, and braille displays. This entails ensuring that UI components are marked up such that accessibility APIs can programmatically determine the _role_, _state_, _value_, and _title_ of any element.

**Tip:** The element inspection feature in the Chrome, Edge, and Firefox developer tools displays a tooltip of CSS properties that includes a quick check for color contrast ratio.

<img src="https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format" alt="Screenshot of the Chrome DevTools Inspect Element tooltip." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/avwZaOjEWT7pES1OqUly.jpg?auto=format&amp;w=1600 1600w" width="800" height="370" />

I personally live with low vision, and I often find myself zooming in on sites, their DevTools, and the terminal. While supporting zoom is almost never at the top of developers' to-do lists, it can make a world of difference to users like me.🤓

**Hearing issues** mean a user may have issues hearing sound emitted from a page.

- Provide [text alternatives](http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt) for all content that is not strictly text.
- Test that your UI components are still functional [without sound](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-understanding).

<img src="https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format" alt="Screenshot of the ChromeVox screen reader reading a web page." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ZIbJHF5vyMxmKAN9juO1.jpg?auto=format&amp;w=1600 1600w" width="800" height="500" />

**Mobility issues** can include the inability to operate a mouse, a keyboard, or a touch screen.

- Make the content of your UI components [functionally accessible from a keyboard](http://www.w3.org/TR/wai-aria-practices/#keyboard) for any actions one would otherwise use a mouse for.
- Ensure pages are correctly marked up for assistive technologies—including screen readers, voice control software, and physical switch controls—which tend to use the same APIs.

**Cognitive issues** mean a user may require assistive technologies to help them with reading text, so it's important to ensure text alternatives exist.

- Be mindful when using animations. Avoid video and animation that [repeat](http://www.w3.org/TR/WCAG20/#time-limits) or flash, which can cause [issues](http://www.w3.org/TR/WCAG20/#seizure) for some users.

  The [`prefers-reduced-motion`](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion#too_much_motion_in_real_life_and_on_the_web) CSS media query allows you to limit animations and autoplaying videos for users who prefer reduced motion:

      /*
      If the user expresses a preference for reduced motion, don't use animations on buttons.
      */
      @media (prefers-reduced-motion: reduce) {
        button {
          animation: none;
        }
      }

- Avoid interactions that are [timing-based](https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html).

This may seem like a lot of bases to cover, but we'll walk through the process for assessing and then improving the accessibility of your UI components.

**Tip:** The GOV.UK accessibility team has made some great [accessibility dos and don'ts digital posters](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/) to spread awareness of best practices in your team:

<img src="https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format" alt="Digital posters showing accessibility dos and don&#39;ts." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/lmcS2dTmBHuUo3j0ERCp.jpg?auto=format&amp;w=1600 1600w" width="800" height="721" />

## Are your UI components accessible? <a href="#are-your-ui-components-accessible" class="w-headline-link">#</a>

**Summary (tl;dr)**

When auditing your page's UI components for accessibility, ask yourself:

- **Can you use your UI component with the keyboard only?**

  Does the component manage focus and avoid focus traps? Can it respond to the appropriate keyboard events?

- **Can you use your UI component with a screen reader?**

  Have you provided text alternatives for any information presented visually? Have you added semantic information using ARIA?

- **Can your UI component work without sound?**

  Turn off your speakers and go through your use cases.

- **Can your UI component work without color?**

  Ensure your UI component can be used by someone who cannot see colors. A helpful tool for simulating color blindness is a Chrome extension called [SEE](https://chrome.google.com/webstore/detail/see/dkihcccbkkakkbpikjmpnbamkgbjfdcn). (Try all four forms of color blindness simulation available.) You may also be interested in the [Daltonize](https://chrome.google.com/webstore/detail/daltonize/obcnmdgpjakcffkcjnonpdlainhphpgh) extension, which is similarly useful.

- **Can your UI component work with high-contrast mode enabled?**

  All modern operating systems support a high contrast mode. [High Contrast](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en) is a Chrome extension that can help here.

Standardized controls (such as `<button>` and `<select>`) have accessibility built in by the browser. They are focusable using the `Tab` key; they respond to keyboard events (like the `Enter`, `Space`, and arrow keys); and they have semantic roles, states, and properties used by accessibility tools. Their default styling should also meet the accessibility requirements listed above.

Custom UI components (with the exception of components that extend standard elements like `<button>`) do not have any built-in functionality, including accessibility, so you need to provide it. A good place to start when implementing accessibility is to compare your component to an analogous standard element (or a combination of several standard elements, depending on how complex your component is).

**Tip:** Most browser developer tools support inspecting the accessibility tree of a page. In Chrome DevTools, this is available via the **Accessibility** tab in the **Elements** panel:

<img src="https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format" alt="Screenshot of the accessibility tree view in Chrome DevTools." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/FcpD3oNA1C39KbQuNinf.png?auto=format&amp;w=1600 1600w" width="800" height="486" />

Firefox also has an **Accessibility** panel:

<img src="https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format" alt="Screenshot of the accessibility tree view in FireFox DevTools." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/DRqDC9mtfcejAIjLImdR.jpg?auto=format&amp;w=1600 1600w" width="800" height="500" />

Safari exposes accessibility information in the **Elements** panel's **Node** tab.

The following is a list of questions you can ask yourself when attempting to make your UI components more accessible.

## Can your UI component be used with the keyboard alone? <a href="#can-your-ui-component-be-used-with-the-keyboard-alone" class="w-headline-link">#</a>

Ideally, ensure that all functionality in your UI component can be accessed via keyboard. When designing your user experience, think about how you would use your element with the keyboard alone and figure out a consistent set of keyboard interactions.

First, ensure that you have a sensible focus target for each component. For example, a complex component like a menu may be one focus target within a page but should then manage focus within itself so that the active menu item always takes focus.

<figure><img src="https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format" alt="Managing focus within a complex element." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/8zpJMaaY0DuAHdugbSr3.png?auto=format&amp;w=1600 1600w" width="800" height="377" /><figcaption>Managing focus within a complex element.</figcaption></figure>### Using tabindex <a href="#using-tabindex" class="w-headline-link">#</a>

The `tabindex` attribute allows elements and UI components to be focused using the keyboard. Keyboard-only and assistive technology users both need to be able to place keyboard focus on elements to interact with them. Built-in interactive elements (like `<button>`) are implicitly focusable, so they don't need a `tabindex` attribute unless you wish to change their position in the tab order.

**There are three types of `tabindex` values:**

- **`tabindex="0"`** is the most common and places the element in the natural tab order (defined by the DOM order).

- **a `tabindex` value greater than 0** places the element in a manual tab order—all elements in the page with a positive `tabindex` value are visited in numerical order before elements in the natural tab order.

- **a `tabindex` value equal to -1** causes the element to be programmatically focusable, but not in the tab order.

For custom UI components, always use `tabindex` values of 0 or -1, as you won't be able to determine the order of elements on a given page ahead of time—and even if you did, the order may change. A `tabindex` value of -1 is particularly useful for managing focus within complex components as described above.

Also ensure that focus is always visible, whether by allowing the default focus ring style or by applying a discernible custom focus style. Remember not to trap keyboard users—they should be able to move focus away from an element using only the keyboard.

You may also be interested in the roving `tabindex` or `aria-activedescendant` approaches, [covered over on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Technique_1_Roving_tabindex).

### Using autofocus <a href="#using-autofocus" class="w-headline-link">#</a>

The HTML autofocus attribute allows an author to specify that a particular element should automatically take focus when the page is loaded. `autofocus` is already supported on [all web form controls](https://html.spec.whatwg.org/multipage/forms.html#association-of-controls-and-forms), including buttons. To autofocus elements in your own custom UI components, call the [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.focus) method, supported on all HTML elements that can be focused (for example, `document.querySelector('myButton').focus()`).

### Adding keyboard interaction <a href="#adding-keyboard-interaction" class="w-headline-link">#</a>

Once your UI component is focusable, provide a good keyboard interaction story when a component is focused by handling appropriate keyboard events. For example, allow the user to use arrow keys to select menu options and `Space` or `Enter` to activate buttons. The ARIA [design patterns guide](http://www.w3.org/TR/wai-aria-practices/#aria_ex) provides some guidance here.

Finally, ensure that your keyboard shortcuts are discoverable. A common practice is to have a keyboard shortcut legend (on-screen text) to inform the user that shortcuts exist. For example, "Press ? for keyboard shortcuts." Alternatively, a hint such a tooltip can be used to inform the user about a shortcut.

The importance of managing focus cannot be overstated. One example is a navigation drawer. If you add a UI component to the page, you need to direct focus to an element inside of it; otherwise, users may have to tab through the entire page to get there. This can be a frustrating experience, so be sure to test focus for all keyboard navigable components in your page.

**Tip:** You can use [Puppeteer](https://github.com/puppeteer/puppeteer) to automate running keyboard accessibility tests for toggling UI states. [WalkMe Engineering](https://medium.com/walkme-engineering/web-accessibility-testing-d499a7f7a032) has a great guide on this I recommend reading.

<figure><img src="https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format" class="w-screenshot" sizes="(min-width: 441px) 441px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/3lZosaL1YXafLn4ZRINl.gif?auto=format&amp;w=882 882w" width="441" height="400" /></figure>// Example for expanding and collapsing a category with the Space key
    const category = await page.$(`.category`);

    // verify tabIndex, role and focus
    expect(await page.evaluate(elem => elem.getAttribute(`role`), category)).toEqual(`button`);
    expect(await page.evaluate(elem => elem.getAttribute(`tabindex`), category)).toEqual(`0`);
    expect(await page.evaluate(elem => window.document.activeElement === elem, category)).toEqual(true);

    // verify aria-expanded = false
    expect(await page.evaluate(elem => elem.getAttribute(`aria-expanded`), category)).toEqual(`false`);

    // toggle category by pressing Space
    await page.keyboard.press('Space');

    // verify aria-expanded = true
    expect(await page.evaluate(elem => elem.getAttribute(`aria-expanded`), category)).toEqual(`true`);

## Can you use your UI component with a screen reader? <a href="#can-you-use-your-ui-component-with-a-screen-reader" class="w-headline-link">#</a>

Around 1–2% of people use a screen reader. Can you understand all important information and interact with the component using the screen reader and keyboard alone?

The following questions should help you address screen reader accessibility.

### Do all components and images have meaningful text alternatives? <a href="#do-all-components-and-images-have-meaningful-text-alternatives" class="w-headline-link">#</a>

Wherever information about the _name_ or _purpose_ of an interactive component is conveyed visually, provide an accessible text alternative.

For example, if your `<fancy-menu>` UI component only displays a gear icon to indicate that it's a settings menu, it needs an accessible text alternative, such as "settings," that conveys the same information. Depending on context, you can provide a text alternative using an `alt` attribute, an `aria-label` attribute, an `aria-labelledby` attribute, or plain text in the Shadow DOM. You can find general technical tips in [WebAIM Quick Reference](http://webaim.org/resources/quickref/).

Any UI component that displays an image should provide a mechanism for providing alternative text for that image, analogous to the `alt` attribute.

### Do your components provide semantic information? <a href="#do-your-components-provide-semantic-information" class="w-headline-link">#</a>

Assistive technology conveys semantic information that is otherwise expressed to sighted users via visual cues such as formatting, cursor style, or position. Standardized elements have this semantic information built-in by the browser, but for custom components you need to use [ARIA](http://www.w3.org/WAI/PF/aria/) to add the information.

As a rule of thumb, any component that listens to a mouse click or hover event should not only have some kind of keyboard event listener, but also an ARIA role and potentially ARIA states and attributes.

For example, a custom `<fancy-slider>` UI component might take an ARIA role of slider, which has some related ARIA attributes: `aria-valuenow`, `aria-valuemin` and `aria-valuemax`. By binding these attributes to the relevant properties on your custom component, you can allow users of assistive technology to interact with the element, change its value, and even cause the element's visual presentation to change accordingly.

<figure><img src="https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format" alt="A range slider component." class="w-screenshot" sizes="(min-width: 159px) 159px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=159 159w,     https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=181 181w,     https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=207 207w,     https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=236 236w,     https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=269 269w,     https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=306 306w,     https://web-dev.imgix.net/image/admin/BD2bS6XEEUlORVOGHwhe.png?auto=format&amp;w=318 318w" width="159" height="56" /><figcaption>A range slider component.</figcaption></figure><fancy-slider role="slider" aria-valuemin="1" aria-valuemax="5" aria-valuenow="2.5"></fancy-slider>

### Can users understand everything without relying on color? <a href="#can-users-understand-everything-without-relying-on-color" class="w-headline-link">#</a>

Color shouldn't be used as the only means of conveying information, such as indicating a status, prompting the user for a response, or visualizing data. For example, if you have a pie chart, provide labels and values for each slice so users who have visual impairments can understand the information even if they can't tell where the slices begin and end:

<figure><img src="https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format" alt="An accessible pie chart. (From the W3C Web Accessibility Initiative.)" sizes="(min-width: 500px) 500px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/4DlbNfCX7AYYrPSpQg4L.png?auto=format&amp;w=1000 1000w" width="500" height="442" /><figcaption>An accessible pie chart. (From the <a href="https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Informational_Graphic_Contrast_(Minimum)">W3C Web Accessibility Initiative</a>.)</figcaption></figure>### Is there sufficient contrast between text and images and their background? <a href="#is-there-sufficient-contrast-between-text-and-images-and-their-background" class="w-headline-link">#</a>

Any text content displayed in your component should meet the [minimum WCAG AA-level contrast threshold](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast). Consider providing a high-contrast theme that meets the [higher AAA threshold](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast7), and ensure that user agent style sheets can be applied if users require custom contrast or different colors. You can use this [Color Contrast Checker](http://webaim.org/resources/contrastchecker/) as an aid when designing your component.

### Is the moving or flashing content in your components stoppable and safe? <a href="#is-the-moving-or-flashing-content-in-your-components-stoppable-and-safe" class="w-headline-link">#</a>

Content that moves, scrolls, or blinks for more than five seconds should be able to be paused, stopped or hidden. In general, avoid flashing content. If something must flash, make sure it flashes no more than three times per second.

## Accessibility Tooling <a href="#accessibility-tooling" class="w-headline-link">#</a>

A number of tools are available that can assist with debugging the accessibility of your visual components.

- [Axe](http://www.deque.com/products/axe/) provides automated accessibility testing for your framework or browser of choice. [Axe Puppeteer](https://www.deque.com/blog/axe-and-attest-integration-puppeteer/) can be used for writing automated accessibility tests.
- The [Lighthouse](https://developers.google.com/web/tools/lighthouse) Accessibility audits provide helpful insights for discovering common accessibility issues. The accessibility score is a weighted average of all accessibility audits based on [Axe user impact assessments](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md). For monitoring accessibility via continuous integration, see [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci).

<img src="https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format" alt="Screenshot of the Lighthouse accessibility audit." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Bft9DABqWge4ZRpF6wzK.png?auto=format&amp;w=1600 1600w" width="800" height="649" />

- [Tenon.io](https://tenon.io/) is useful for testing common accessibility problems. Tenon has strong integration support across build tools, browsers (via extensions), and even text editors.

- There are many library- and framework-specific tools for highlighting accessibility issues with components. For example, [web.dev](/accessibility-auditing-react/) explains how to use [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) to highlight accessibility issues for React components in your editor:

  <img src="https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format" alt="Screenshot of a code editor with an accessibility issue flagged by eslint-plugin-jsx-a11y." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/9bAOYq7Cr11vzf4P04d2.png?auto=format&amp;w=1600 1600w" width="800" height="500" />

  If you use Angular, [codelyzer](/accessible-angular-with-codelyzer) provides in-editor accessibility audits too:

  <img src="https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format" alt="Screenshot of a code editor with an accessibility issue flagged by codelyzer." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Ca3rCQlJ53C7ILx3hwot.png?auto=format&amp;w=1600 1600w" width="800" height="433" />

- You can examine the way that assistive technologies see web content by using [Accessibility Inspector](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html#//apple_ref/doc/uid/TP40001078-CH210-SW1) (Mac) or [Windows Automation API Testing Tools](<http://msdn.microsoft.com/en-us/library/windows/desktop/dd373661(v=vs.85).aspx>) and [AccProbe](http://accessibility.linuxfoundation.org/a11yweb/util/accprobe/) (Windows). You can also see the full accessibility tree that Chrome creates by navigating to `about://accessibility`.

- The best way to test for screen reader support on a Mac is using the VoiceOver utility. Use `⌘F5` to enable or disable it, `Ctrl+Option ←→` to move through the page, and `Ctrl+Shift+Option + ↑↓` to move up and down the accessibility tree. For more detailed instructions, see the [full list of VoiceOver commands](http://www.apple.com/voiceover/info/guide/_1131.html) and the [list of VoiceOver Web commands](http://www.apple.com/voiceover/info/guide/_1131.html#vo27972).

- [tota11y](http://khan.github.io/tota11y/) is a useful visualizer for assistive technology issues built by Khan Academy. It's a script that adds a button to your document that triggers several plugins for annotating things like insufficient contrast ratio and other a11y violations.

- On Windows, [NVDA](http://www.nvaccess.org/) is a free, open source screen reader that's fully featured and rapidly gaining in popularity. However, note that it has a much steeper learning curve for sighted users than VoiceOver.

- [ChromeLens](http://chromelens.xyz/) helps develop for the visually impaired. It also has great support for visualizing keyboard navigation paths.

  <img src="https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format" alt="Screenshot of ChromeLens." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/RcDZ95ALFvNeDdpdv2Mo.jpg?auto=format&amp;w=1600 1600w" width="800" height="514" />

- [ChromeVox](http://www.chromevox.com/) is a screen reader available as a Chrome extension and built into ChromeOS devices.

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

We still have a long way to go to improve accessibility on the web. Per the [Web Almanac](https://almanac.httparchive.org/en/2019/accessibility):

- 4 out of every 5 sites have text that easily blends into the background, making it unreadable.
- 49.91% of pages still fail to provide `alt` attributes for some of their images.
- Only 24% of pages that use buttons or links include textual labels for them.
- Only 22.33% of pages provide labels for all their form inputs.

To learn more about accessibility fundamentals and help improve those statistics, I recommend the [Accessible to all](/accessible/) docs on web.dev. There's much we can do to build experiences that are more accessible for everyone.

<img src="https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format" alt="Screenshot of the web.dev &#39;Accessible to all&#39; collection page." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/iMaXm08LsbVKpkNCZEwA.jpg?auto=format&amp;w=1600 1600w" width="800" height="513" />

<a href="/tags/accessibility/" class="w-chip">Accessibility</a> <a href="/tags/ux/" class="w-chip">UX</a>

<span class="w-mr--sm"> Last updated: Dec 6, 2019 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/a11y-tips-for-web-dev/index.md)

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
