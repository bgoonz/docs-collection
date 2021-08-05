<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format" alt="Hero Image" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/XHfyVzz2S49XK7jRl9Xx.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#building-split-text-animations" class="w-toc__header--link">Building split text animations</a>

- [Overview](#overview)
- [Preparing motion conditionals](#preparing-motion-conditionals)
- [Splitting Text](#splitting-text)
- [Splitting letters utility function](#splitting-letters-utility-function)
- [Splitting words utility function](#splitting-words-utility-function)
- [Making boxes utility function](#making-boxes-utility-function)
- [Utilities conclusion](#utilities-conclusion)
- [Split orchestration](#split-orchestration)
- [Finding Elements](#finding-elements)
- [Finding elements from JavaScript](#finding-elements-from-javascript)
- [Finding elements from CSS](#finding-elements-from-css)
- [Splitting text in place](#splitting-text-in-place)
- [Splitting animations and transitions](#splitting-animations-and-transitions)
- [Split letters](#split-letters)
- [Split words](#split-words)
- [Conclusion](#conclusion)
- [Community remixes](#community-remixes)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building split text animations

A foundational overview of how to build split letter and word animations.

Apr 20, 2021

[<img src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Adam Argyle" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/adamargyle/)

<a href="/authors/adamargyle/" class="w-author__name-link">Adam Argyle</a>

- <a href="https://twitter.com/argyleink" class="w-author__link">Twitter</a>
- <a href="https://github.com/argyleink" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@argyleink" class="w-author__link">Glitch</a>
- <a href="https://nerdy.dev" class="w-author__link">Blog</a>

In this post I want to share thinking on ways to solve split text animations and interactions for the web that are minimal, accessible, and work across browsers. Try the [demo](https://gui-challenges.web.app/split-text/dist/).

[Demo](https://gui-challenges.web.app/split-text/dist/)

If you prefer video, here's a YouTube version of this post:

## Overview <a href="#overview" class="w-headline-link">#</a>

Split text animations can be amazing. We'll be barely scratching the surface of animation potential in this post, but it does provide a foundation to build upon. The goal is to animate progressively. The text should be readable by default, with the animation built on top. Split text motion effects can get extravagant and potentially disruptive, so we will only manipulate HTML, or apply motion styles if the user is OK with motion.

Here's a general overview of the workflow and results:

1.  [Prepare](#preparing-motion-conditionals) reduced motion conditional variables for CSS and JS.
2.  [Prepare](#splitting-letters-utility-function) split text utilities in JavaScript.
3.  [Orchestrate](#split-orchestration) the conditionals and utilities on page load.
4.  [Write](#splitting-animations-and-transitions) CSS transitions and animations for letters and words (the rad part!).

Here's a preview of the conditional results we're going for:

<figure><img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format" alt="User prefers reduced motion: text is legible / unsplit" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/TIrcTqDDX0tQiRyIuin1.png?auto=format&amp;w=1600 1600w" width="800" height="517" /><figcaption>User prefers reduced motion: text is legible / unsplit</figcaption></figure>If a user prefers reduced motion, we leave the HTML document alone and do no animation. If motion is OK, we go ahead and chop it up into pieces. Here's a preview of the HTML after JavaScript has split the text by letter.

<figure><img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format" alt="User is OK with motion; text split into multiple elements" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/prwDis2IMcZxFD39mnWF.png?auto=format&amp;w=1600 1600w" width="800" height="517" /><figcaption>User is OK with motion; text split into multiple elements</figcaption></figure>### Preparing motion conditionals <a href="#preparing-motion-conditionals" class="w-headline-link">#</a>

The conveniently [available](https://caniuse.com/prefers-reduced-motion) `@media (prefers-reduced-motion: reduce)` media query will be used from CSS and JavaScript in this project. This media query is our primary conditional for deciding to split text or not. The CSS media query will be used to withhold transitions and animations, while the JavaScript media query will be used to withhold the HTML manipulation.

**Question:** What else should be used to withhold split text animations?

#### Preparing the CSS conditional <a href="#preparing-the-css-conditional" class="w-headline-link">#</a>

I used PostCSS to enable the syntax of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/), where I can store a media query boolean into a variable:

    @custom-media --motionOK (prefers-reduced-motion: no-preference);

#### Preparing the JS conditional <a href="#preparing-the-js-conditional" class="w-headline-link">#</a>

In JavaScript, the browser provides a way to check media queries, I used [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to extract and rename the boolean result from the media query check:

    const {matches:motionOK} = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    )

I can then test for `motionOK`, and only change the document if the user has not requested to reduce motion.

    if (motionOK) {
      // document split manipulations
    }

I can check the same value by using PostCSS to enable the `@nest` syntax from [Nesting Draft 1](https://drafts.csswg.org/css-nesting-1/). This allows me to store all the logic about the animation and it's style requirements for the parent and children, in one place:

    letter-animation {
      @media (--motionOK) {
        /* animation styles */
      }
    }

With the PostCSS custom property and a JavaScript boolean, we're ready to conditionally upgrade the effect. That rolls us into the next section where I break down the JavaScript for transforming strings into elements.

## Splitting Text <a href="#splitting-text" class="w-headline-link">#</a>

Text letters, words, lines, etc., cannot be individually animated with CSS or JS. To achieve the effect, we need boxes. If we want to animate each letter, then each letter needs to be an element. If we want to animate each word, then each word needs to be an element.

1.  Create JavaScript utility functions for splitting strings into elements
2.  Orchestrate the usage of these utilities

In this demo I'll be splitting the text from JavaScript on the DOM of the page. If you're in a framework or on the server, you could split the text into elements from there, but do so respectfully.

### Splitting letters utility function <a href="#splitting-letters-utility-function" class="w-headline-link">#</a>

A fun place to start is with a function which takes a string and returns each letter in an array.

    export const byLetter = text =>
      [...text].map(span)

The [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax from ES6 really helped make that a swift task.

### Splitting words utility function <a href="#splitting-words-utility-function" class="w-headline-link">#</a>

Similar to splitting letters, this function takes a string and returns each word in an array.

    export const byWord = text =>
      text.split(' ').map(span)

The [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method on JavaScript strings allows us to specify which characters to slice at. I passed an empty space, indicating a split between words.

### Making boxes utility function <a href="#making-boxes-utility-function" class="w-headline-link">#</a>

The effect requires boxes for each letter, and we see in those functions, that [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is being called with a `span()` function. Here is the `span()` function.

    const span = (text, index) => {
      const node = document.createElement('span')

      node.textContent = text
      node.style.setProperty('--index', index)

      return node
    }

It's crucial to note that a custom property called `--index` is being set with the array position. Having the boxes for the letter animations is great, but having an index to use in CSS is a seemingly small addition with a large impact. Most notable in this large impact is [staggering](https://css-tricks.com/different-approaches-for-creating-a-staggered-animation/). We'll be able to use `--index` as a way of offsetting animations for a staggered look.

### Utilities conclusion <a href="#utilities-conclusion" class="w-headline-link">#</a>

The `splitting.js` module in completion:

    const span = (text, index) => {
      const node = document.createElement('span')

      node.textContent = text
      node.style.setProperty('--index', index)

      return node
    }

    export const byLetter = text =>
      [...text].map(span)

    export const byWord = text =>
      text.split(' ').map(span)

Next is importing and using these `byLetter()` and `byWord()` functions.

## Split orchestration <a href="#split-orchestration" class="w-headline-link">#</a>

With the splitting utilities ready to use, putting it all together means:

1.  **Finding** which elements to split
2.  **Splitting** them and **replacing** text with HTML

After that, CSS takes over and will animate the elements / boxes.

### Finding Elements <a href="#finding-elements" class="w-headline-link">#</a>

I chose to use attributes and values to store information about the desired animation and how to split the text. I liked putting these declarative options into the HTML. The attribute `split-by` is used from JavaScript, to find elements and create boxes for either letters or words. The attribute `letter-animation` or `word-animation` is used from CSS, to target element children and apply transforms and animations.

Here's a sample of HTML that demonstrates the two attributes:

    <h1 split-by="letter" letter-animation="breath">animated letters</h1>
    <h1 split-by="word" word-animation="trampoline">hover the words</h1>

### Finding elements from JavaScript <a href="#finding-elements-from-javascript" class="w-headline-link">#</a>

I used the CSS selector syntax for attribute presence to gather the list of elements which want their text split:

    const splitTargets = document.querySelectorAll('[split-by]')

### Finding elements from CSS <a href="#finding-elements-from-css" class="w-headline-link">#</a>

I also used the attribute presence selector in CSS to give all letter animations the same base styles. Later, we'll use the attribute value to add more specific styles to achieve an effect.

    letter-animation {
      @media (--motionOK) {
        /* animation styles */
      }
    }

### Splitting text in place <a href="#splitting-text-in-place" class="w-headline-link">#</a>

For each of the split targets we find in JavaScript, we'll split their text based on the value of the attribute and map each string to a `<span>`. We can then replace the text of the element with the boxes we made:

    splitTargets.forEach(node => {
      const type = node.getAttribute('split-by')
      let nodes = null

      if (type === 'letter') {
        nodes = byLetter(node.innerText)
      }
      else if (type === 'word') {
        nodes = byWord(node.innerText)
      }

      if (nodes) {
        node.firstChild.replaceWith(...nodes)
      }
    })

#### Orchestration conclusion <a href="#orchestration-conclusion" class="w-headline-link">#</a>

`index.js` in completion:

    import {byLetter, byWord} from './splitting.js'

    const {matches:motionOK} = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    )

    if (motionOK) {
      const splitTargets = document.querySelectorAll('[split-by]')

      splitTargets.forEach(node => {
        const type = node.getAttribute('split-by')
        let nodes = null

        if (type === 'letter')
          nodes = byLetter(node.innerText)
        else if (type === 'word')
          nodes = byWord(node.innerText)

        if (nodes)
          node.firstChild.replaceWith(...nodes)
      })
    }

The JavaScript could be read in the following English:

1.  Import some helper utility functions.
2.  Check if motion is ok for this user, if not do nothing.
3.  For each element that wants to be split.
    1.  Split them based on how they want to be split.
    2.  Replace text with elements.

## Splitting animations and transitions <a href="#splitting-animations-and-transitions" class="w-headline-link">#</a>

The above splitting document manipulation has just unlocked a multitude of potential animations and effects with CSS or JavaScript. There are a few links at the bottom of this article to help inspire your splitting potential.

Time to show what you can do with this! I'll share 4 CSS driven animations and transitions. 🤓

### Split letters <a href="#split-letters" class="w-headline-link">#</a>

As a foundation for the split letter effects, I found the following CSS to be helpful. I put all transitions and animations behind the motion media query and then give each new child letter `span` a display property plus a style for what to do with white spaces:

    [letter-animation] > span {
      display: inline-block;
      white-space: break-spaces;
    }

The white spaces style is important so that the spans which are only a space, aren't collapsed by the layout engine. Now onto the stateful fun stuff.

#### Transition split letters example <a href="#transition-split-letters-example" class="w-headline-link">#</a>

This example uses CSS transitions to the split text effect. With transitions we need states for the engine to animate between, and I chose three states: no hover, hover in sentence, hover on a letter.

When the user hovers the sentence, aka the container, I scale back all the children as if the user pushed them further away. Then, as the user hovers a letter, I bring it forward.

    @media (--motionOK) {
      [letter-animation="hover"] {
        &:hover > span {
          transform: scale(.75);
        }

        & > span {
          transition: transform .3s ease;
          cursor: pointer;

          &:hover {
            transform: scale(1.25);
          }
        }
      }
    }

#### Animate split letters example <a href="#animate-split-letters-example" class="w-headline-link">#</a>

This example uses a predefined `@keyframe` animation to infinitely animated each letter, and leverages the inline custom property index to create a stagger effect.

    @media (--motionOK) {
      [letter-animation="breath"] > span {
        animation:
          breath 1200ms ease
          calc(var(--index) * 100 * 1ms)
          infinite alternate;
      }
    }

    @keyframes breath {
      from {
        animation-timing-function: ease-out;
      }
      to {
        transform: translateY(-5px) scale(1.25);
        text-shadow: 0 0 25px var(--glow-color);
        animation-timing-function: ease-in-out;
      }
    }

**Objective**: CSS `calc()` will use the unit type from the last item in the calculation. In the above case, that's 1ms. It's used strategically to convert the otherwise unitless number, into a value of `<time>` for the animation.

### Split words <a href="#split-words" class="w-headline-link">#</a>

Flexbox worked as a container type for me here in these examples, nicely leveraging the `ch` unit as a healthy gap length.

    word-animation {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 1ch;
    }

Flexbox devtools showing the gap between words

#### Transition split words example <a href="#transition-split-words-example" class="w-headline-link">#</a>

In this transition example I use hover again. As the effect initially hides the content until hover, I ensured that the interaction and styles were only applied if the device had the capability to hover.

    @media (hover) {
      [word-animation="hover"] {
        overflow: hidden;
        overflow: clip;

        & > span {
          transition: transform .3s ease;
          cursor: pointer;

          &:not(:hover) {
            transform: translateY(50%);
          }
        }
      }
    }

#### Animate split words example <a href="#animate-split-words-example" class="w-headline-link">#</a>

In this animation example I use CSS `@keyframes` again to create a staggered infinite animation on a regular paragraph of text.

    [word-animation="trampoline"] > span {
      display: inline-block;
      transform: translateY(100%);
      animation:
        trampoline 3s ease
        calc(var(--index) * 150 * 1ms)
        infinite alternate;
    }

    @keyframes trampoline {
      0% {
        transform: translateY(100%);
        animation-timing-function: ease-out;
      }
      50% {
        transform: translateY(0);
        animation-timing-function: ease-in;
      }
    }

## Conclusion <a href="#conclusion" class="w-headline-link">#</a>

Now that you know how I did it, how would you?! 🙂

Let's diversify our approaches and learn all the ways to build on the web. Create a Codepen or host your own demo, tweet me with it, and I'll add it to the Community remixes section below.

Source

- [GUI Challenges source on GitHub](https://github.com/argyleink/gui-challenges)
- [Splitting text Codepen starter](https://codepen.io/argyleink/pen/poRLyOM)

More demos and inspiration

- [Splitting text Codepen collection](https://codepen.io/collection/XpROaV/)
- [Splitting.js](https://splitting.js.org/)

## Community remixes <a href="#community-remixes" class="w-headline-link">#</a>

- `<text-hover>` web component by [gnehcwu](https://twitter.com/gnehcwu) on [CodeSandbox](https://codesandbox.io/s/texthover-webcomponent-gkpm2)

<a href="/tags/css/" class="w-chip">CSS</a> <a href="/tags/dom/" class="w-chip">DOM</a> <a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: Apr 20, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/building-split-text-animations/index.md)

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
