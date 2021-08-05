<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format" alt="A hand draws letters in calligraphic script on paper." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/k1gdvpBMneFVrOC5h4yQ.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#recognize-your-users&#39;-handwriting" class="w-toc__header--link">Recognize your users' handwriting</a>

- [What is the Handwriting Recognition API?](#what)
- [Suggested use cases for the Handwriting Recognition API](#use-cases)
- [Current status](#status)
- [How to use the Handwriting Recognition API](#use)
- [Enabling via about://flags](#enabling-via-about:flags)
- [Enabling support during the origin trial phase](#enabling-support-during-the-origin-trial-phase)
- [Register for the origin trial](#register-for-ot)
- [Feature detection](#feature-detection)
- [Core concepts](#core-concepts)
- [Demo](#demo)
- [Security and permissions](#security-and-permissions)
- [User control](#user-control)
- [Transparency](#transparency)
- [Permission persistence](#permission-persistence)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support for the API](#show-support-for-the-api)
- [Helpful Links](#helpful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Recognize your users' handwriting

The Handwriting Recognition API allows you to recognize text from handwritten input as it happens.

May 17, 2021

[<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pguQ0oykD0nNu9jM5OcP.jpeg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Christian Liebel" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pguQ0oykD0nNu9jM5OcP.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pguQ0oykD0nNu9jM5OcP.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pguQ0oykD0nNu9jM5OcP.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pguQ0oykD0nNu9jM5OcP.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/pguQ0oykD0nNu9jM5OcP.jpeg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/christianliebel/)

<a href="/authors/christianliebel/" class="w-author__name-link">Christian Liebel</a>

- <a href="https://twitter.com/christianliebel" class="w-author__link">Twitter</a>
- <a href="https://github.com/christianliebel" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@christianliebel" class="w-author__link">Glitch</a>
- <a href="https://christianliebel.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

The Handwriting Recognition API is part of the [capabilities project](/fugu-status/) and is currently in development. This post will be updated as the implementation progresses.

## What is the Handwriting Recognition API? <a href="#what" class="w-headline-link">#</a>

The Handwriting Recognition API allows you to convert handwriting (ink) from your users into text. Some operating systems have long included such APIs, and with this new capability, your web apps can finally use this functionality. The conversion takes place directly on the user's device, works even in offline mode, all without adding any third-party libraries or services.

This API implements so-called "on-line" or near real-time recognition. This means that the handwritten input is recognized while the user is drawing it by capturing and analyzing the single strokes. In contrast to "off-line" procedures such as Optical Character Recognition (OCR), where only the end product is known, on-line algorithms can provide a higher level of accuracy due to additional signals like the temporal sequence and pressure of individual ink strokes.

### Suggested use cases for the Handwriting Recognition API <a href="#use-cases" class="w-headline-link">#</a>

Example uses include:

- Note-taking applications where users want to capture handwritten notes and have them translated into text.
- Forms applications where users can use pen or finger input due to time constraints.
- Games that require filling in letters or numbers, such as crosswords, hangman, or sudoku.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/handwriting-recognition/blob/main/explainer.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td>Not started</td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">In progress</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developer.chrome.com/origintrials/#/view_trial/3207688834594635777">In progress</a></td></tr><tr class="odd"><td>5. Launch</td><td>Not started</td></tr></tbody></table>

## How to use the Handwriting Recognition API <a href="#use" class="w-headline-link">#</a>

### Enabling via about://flags <a href="#enabling-via-about:flags" class="w-headline-link">#</a>

To experiment with the Handwriting Recognition API locally, without an origin trial token, enable the `#experimental-web-platform-features` flag in `about://flags`.

Note that the API is currently exclusive to Chrome OS devices. Chrome 91 already contains limited support for the API, but to fully experience it, we recommend you test on Chrome 92 to Chrome 94.

### Enabling support during the origin trial phase <a href="#enabling-support-during-the-origin-trial-phase" class="w-headline-link">#</a>

Starting in Chrome 92, the Handwriting Recognition API will be available as an origin trial on Chrome OS. The origin trial is expected to end in Chrome 94 (October 13, 2021).

Origin trials allow you to try new features and give feedback on their usability, practicality, and effectiveness to the web standards community. For more information, see the [Origin Trials Guide for Web Developers](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md). To sign up for this or another origin trial, visit the [registration page](https://developers.chrome.com/origintrials/#/trials/active).

### Register for the origin trial <a href="#register-for-ot" class="w-headline-link">#</a>

1.  [Request a token](https://developer.chrome.com/origintrials/#/view_trial/3207688834594635777) for your origin.
2.  Add the token to your pages. There are two ways to do that:
    - Add an `origin-trial` `<meta>` tag to the head of each page. For example, this may look something like:  
      `<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">`
    - If you can configure your server, you can also add the token using an `Origin-Trial` HTTP header. The resulting response header should look something like:  
      `Origin-Trial: TOKEN_GOES_HERE`

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

Detect browser support by checking for the existence of the `createHandwritingRecognizer()` method on the navigator object:

    if ('createHandwritingRecognizer' in navigator) {
      // 🎉 The Handwriting Recognition API is supported!
    }

### Core concepts <a href="#core-concepts" class="w-headline-link">#</a>

The Handwriting Recognition API converts handwritten input into text, regardless of the input method (mouse, touch, pen). The API has four main entities:

1.  A _point_ represents where the pointer was at a particular time.
2.  A _stroke_ consists of one or more points. The recording of a stroke starts when the user puts the pointer down (i.e., clicks the primary mouse button, or touches the screen with their pen or finger) and ends when they raise the pointer back up.
3.  A _drawing_ consists of one or more strokes. The actual recognition takes place at this level.
4.  The _recognizer_ is configured with the expected input language. It is used to create an instance of a drawing with the recognizer configuration applied.

These concepts are implemented as specific interfaces and dictionaries, which I'll cover shortly.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format" alt="The core entities of the Handwriting Recognition API: One or more points compose a stroke, one or more strokes compose a drawing, that the recognizer creates. The actual recognition takes place at the drawing level." sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/IUbfA7u5K0vUYspj7XK5.png?auto=format&amp;w=1600 1600w" width="800" height="445" />

#### Creating a recognizer <a href="#creating-a-recognizer" class="w-headline-link">#</a>

To recognize text from handwritten input, you need to obtain an instance of a `HandwritingRecognizer` by calling `navigator.createHandwritingRecognizer()` and passing constraints to it. Constraints determine the handwriting recognition model that should be used. Currently, you can specify a list of languages in order of preference:

    const recognizer = await navigator.createHandwritingRecognizer({
      languages: ['en'],
    });

**Caution**: The current implementation on Chrome OS can only recognize one language at a time. It only supports English (`en`), and a gesture model (`zxx-x-gesture`) to recognize gestures such as crossing out words.

The method returns a promise resolving with an instance of a `HandwritingRecognizer` when the browser can fulfill your request. Otherwise, it will reject the promise with an error, and handwriting recognition will not be available. For this reason, you may want to query the recognizer's support for particular recognition features first.

#### Querying recognizer support <a href="#querying-recognizer-support" class="w-headline-link">#</a>

By calling `navigator.queryHandwritingRecognizerSupport()`, you can check if the target platform supports the handwriting recognition features you intend to use. In the following example, the developer:

- wants to detect texts in English
- get alternative, less likely predictions when available
- gain access to the segmentation result, i.e., the recognized characters, including the points and strokes that make them up

<!-- -->

    const { languages, alternatives, segmentationResults } =
      await navigator.queryHandwritingRecognizerSupport({
        languages: ['en'],
        alternatives: true,
        segmentationResult: true,
      });

    console.log(languages); // true or false
    console.log(alternatives); // true or false
    console.log(segmentationResult); // true or false

The method returns a promise resolving with a result object. If the browser supports the feature specified by the developer, its value will be set to `true`. Otherwise, it will be set to `false`. You can use this information to enable or disable certain features within your application, or to adjust your query and send a new one.

Due to fingerprinting concerns, you cannot request a list of supported features, such as particular languages, and the browser may ask for user permission or reject your request entirely if you send too many feature queries.

#### Start a drawing <a href="#start-a-drawing" class="w-headline-link">#</a>

Within your application, you should offer an input area where the user makes their handwritten entries. For performance reasons, it is recommended to implement this with the help of a [canvas object](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial). The exact implementation of this part is out of scope for this article, but you may refer to the [demo](#demo) to see how it can be done.

To start a new drawing, call the `startDrawing()` method on the recognizer. This method takes an object containing different hints to fine-tune the recognition algorithm. All hints are optional:

- The kind of text being entered: text, email addresses, numbers, or an individual character (`recognitionType`)
- The type of input device: mouse, touch, or pen input (`inputType`)
- The preceding text (`textContext`)
- The number of less-likely alternative predictions that should be returned (`alternatives`)
- A list of user-identifiable characters ("graphemes") the user will most likely enter (`graphemeSet`)

The Handwriting Recognition API plays well with [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) which provide an abstract interface to consume input from any pointing device. The pointer event arguments contain the type of pointer being used. This means you can use pointer events to determine the input type automatically. In the following example, the drawing for handwriting recognition is automatically created on the first occurrence of a `pointerdown` event on the handwriting area. As the `pointerType` may be empty or set to a proprietary value, I introduced a consistency check to make sure only supported values are set for the drawing's input type.

    let drawing;
    let activeStroke;

    canvas.addEventListener('pointerdown', (event) => {
      if (!drawing) {
        drawing = recognizer.startDrawing({
          recognitionType: 'text', // email, number, per-character
          inputType: ['mouse', 'touch', 'pen'].find((type) => type === event.pointerType),
          textContext: 'Hello, ',
          alternatives: 2,
          graphemeSet: ['f', 'i', 'z', 'b', 'u'], // for a fizz buzz entry form
        });
      }
      startStroke(event);
    });

**Caution**: The current implementation on Chrome OS does not support grapheme sets yet, they are silently ignored.

#### Add a stroke <a href="#add-a-stroke" class="w-headline-link">#</a>

The `pointerdown` event is also the right place to start a new stroke. To do so, create a new instance of `HandwritingStroke`. Also, you should store the current time as a point of reference for the subsequent points added to it:

    function startStroke(event) {
      activeStroke = {
        stroke: new HandwritingStroke(),
        startTime: Date.now(),
      };
      addPoint(event);
    }

#### Add a point <a href="#add-a-point" class="w-headline-link">#</a>

After creating the stroke, you should directly add the first point to it. As you will add more points later on, it makes sense to implement the point creation logic in a separate method. In the following example, the `addPoint()` method calculates the elapsed time from the reference timestamp. The temporal information is optional, but can improve recognition quality. Then, it reads the X and Y coordinates from the pointer event and adds the point to the current stroke.

    function addPoint(event) {
      const timeElapsed = Date.now() - activeStroke.startTime;
      activeStroke.stroke.addPoint({
        x: event.offsetX,
        y: event.offsetY,
        t: timeElapsed,
      });
    }

The `pointermove` event handler is called when the pointer is moved across the screen. Those points need to be added to the stroke as well. The event can also be raised if the pointer is not in a "down" state, for example when moving the cursor across the screen without pressing the mouse button. The event handler from the following example checks if an active stroke exists, and adds the new point to it.

    canvas.addEventListener('pointermove', (event) => {
      if (activeStroke) {
        addPoint(event);
      }
    });

#### Recognize text <a href="#recognize-text" class="w-headline-link">#</a>

When the user lifts the pointer again, you can add the stroke to your drawing by calling its `addStroke()` method. The following example also resets the `activeStroke`, so the `pointermove` handler will not add points to the completed stroke.

If necessary, you can also use the drawing's `getStrokes()` method to list all strokes, and the `removeStroke()` method to remove a particular one from the drawing.

Next, it's time for recognizing the user's input by calling the `getPrediction()` method on the drawing. Recognition usually takes less than a few hundred milliseconds, so you can repeatedly run predictions if needed. The following example runs a new prediction after each completed stroke.

    canvas.addEventListener('pointerup', async (event) => {
      drawing.addStroke(activeStroke.stroke);
      activeStroke = null;

      const [mostLikelyPrediction, ...lessLikelyAlternatives] = await drawing.getPrediction();
      if (mostLikelyPrediction) {
        console.log(mostLikelyPrediction.text);
      }
      lessLikelyAlternatives?.forEach((alternative) => console.log(alternative.text));
    });

This method returns a promise which resolves with an array of predictions ordered by their likelihood. The number of elements depends on the value you passed to the `alternatives` hint. You could use this array to present the user with a choice of possible matches, and have them select an option. Alternatively, you can simply go with the most likely prediction, which is what I do in the example.

The prediction object contains the recognized text and an optional segmentation result, which I will discuss in the following section.

#### Detailed insights with segmentation results <a href="#detailed-insights-with-segmentation-results" class="w-headline-link">#</a>

If supported by the target platform, the prediction object can also contain a segmentation result. This is an array containing all recognized handwriting segment, a combination of the recognized user-identifiable character (`grapheme`) along with its position in the recognized text (`beginIndex`, `endIndex`), and the strokes and points that created it.

    if (mostLikelyPrediction.segmentationResult) {
      mostLikelyPrediction.segmentationResult.forEach(
        ({ grapheme, beginIndex, endIndex, drawingSegments }) => {
          console.log(grapheme, beginIndex, endIndex);
          drawingSegments.forEach(({ strokeIndex, beginPointIndex, endPointIndex }) => {
            console.log(strokeIndex, beginPointIndex, endPointIndex);
          });
        },
      );
    }

You could use this information to track down the recognized graphemes on the canvas again.

<img src="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format" alt="Boxes are drawn around each recognized grapheme" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/8WbTDNrhLsU0El80frMBGE4eMCD3/0UK0jj7vOXaNqkRr3SF9.png?auto=format&amp;w=1600 1600w" width="800" height="338" />

#### Complete recognition <a href="#complete-recognition" class="w-headline-link">#</a>

After the recognition has completed, you can free resources by calling the `clear()` method on the `HandwritingDrawing`, and the `finish()` method on the `HandwritingRecognizer`:

    drawing.clear();
    recognizer.finish();

## Demo <a href="#demo" class="w-headline-link">#</a>

The web component `<handwriting-textarea>` implements a [progressively enhanced](/progressively-enhance-your-pwa/), editing control capable of handwriting recognition. By clicking the button in the lower right corner of the editing control, you activate the drawing mode. When you complete the drawing, the web component will automatically start the recognition and add the recognized text back to the editing control. If the Handwriting Recognition API is not supported at all, or the platform doesn't support the requested features, the edit button will be hidden. But the basic editing control remains usable as a `<textarea>`.

The web component offers properties and attributes to define the recognition behavior from the outside, including `languages` and `recognitiontype`. You can set the content of the control via the `value` attribute:

    <handwriting-textarea languages="en" recognitiontype="text" value="Hello"></handwriting-textarea>

To be informed about any changes to the value, you can listen to the `input` event.

You can try the component using [this demo on Glitch](https://handwriting-recognition.glitch.me/). Also be sure to have a look at the [source code](https://github.com/christianliebel/handwriting-textarea). To use the control in your application, [obtain it from npm](https://www.npmjs.com/package/handwriting-textarea).

## Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chromium team has designed and implemented the Handwriting Recognition API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

### User control <a href="#user-control" class="w-headline-link">#</a>

The Handwriting Recognition API can't be turned off by the user. It is only available for websites delivered via HTTPS, and may only be called from the top-level browsing context.

### Transparency <a href="#transparency" class="w-headline-link">#</a>

There is no indication if handwriting recognition is active. To prevent fingerprinting, the browser implements countermeasures, such as displaying a permission prompt to the user when it detects possible abuse.

### Permission persistence <a href="#permission-persistence" class="w-headline-link">#</a>

The Handwriting Recognition API currently does not show any permissions prompts. Thus, permission does not need to be persisted in any way.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chromium team wants to hear about your experiences with the Handwriting Recognition API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work like you expected? Or are there missing methods or properties that you need to implement your idea? Have a question or comment on the security model? File a spec issue on the corresponding [GitHub repo](https://github.com/WICG/handwriting-recognition/issues), or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chromium's implementation? Or is the implementation different from the spec? File a bug at [new.crbug.com](https://new.crbug.com). Be sure to include as much detail as you can, simple instructions for reproducing, and enter `Blink>Handwriting` in the **Components** box. [Glitch](https://glitch.com/) works great for sharing quick and easy repros.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Handwriting Recognition API? Your public support helps the Chromium team prioritize features and shows other browser vendors how critical it is to support them.

Share how you plan to use it on the [WICG Discourse thread](https://discourse.wicg.io/t/proposal-handwriting-recognition-api/4935). Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#HandwritingRecognition`](https://twitter.com/search?q=%23HandwritingRecognition&src=recent_search_click&f=live) and let us know where and how you're using it.

## Helpful Links <a href="#helpful-links" class="w-headline-link">#</a>

- [Explainer](https://github.com/WICG/handwriting-recognition/blob/main/explainer.md)
- [GitHub repo](https://github.com/WICG/handwriting-recognition)
- [ChromeStatus](https://www.chromestatus.com/features/5263213807534080)
- [Chromium bug](https://crbug.com/1207667)
- [TAG review](https://github.com/w3ctag/design-reviews/issues/591)
- [Intent to Prototype](https://groups.google.com/a/chromium.org/g/blink-dev/c/VXUq1UY4m7Y)
- [WebKit-Dev thread](https://lists.webkit.org/pipermail/webkit-dev/2021-March/031762.html)
- [Mozilla standards position](https://github.com/mozilla/standards-positions/issues/507)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [Joe Medley](https://github.com/jpmedley), Honglin Yu and Jiewei Qian. Hero image by [Samir Bouaked](https://unsplash.com/@sbouaked) on [Unsplash](https://unsplash.com/photos/MFvflDBZdyM).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: May 17, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/handwriting-recognition/index.md)

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
