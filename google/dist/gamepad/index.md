<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format" alt="The hands of a person playing the Chrome dino game on a game console." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/nnmBquEmUtTIh89pkhvp.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#play-the-chrome-dino-game-with-your-gamepad" class="w-toc__header--link">Play the Chrome dino game with your gamepad</a>

- [Using the Gamepad API](#using-the-gamepad-api)
- [Feature detection and browser support](#feature-detection-and-browser-support)
- [How the browser represents a gamepad](#how-the-browser-represents-a-gamepad)
- [Being notified when a gamepad gets connected](#being-notified-when-a-gamepad-gets-connected)
- [Being notified when a gamepad gets disconnected](#being-notified-when-a-gamepad-gets-disconnected)
- [The gamepad in your game loop](#the-gamepad-in-your-game-loop)
- [Making use of the vibration actuator](#making-use-of-the-vibration-actuator)
- [Integration with Permissions Policy](#integration-with-permissions-policy)
- [Demo](#demo)
- [Bonus: play Chrome dino on web.dev](#bonus:-play-chrome-dino-on-web.dev)
- [Useful links](#useful-links)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Play the Chrome dino game with your gamepad

Learn how to use the Gamepad API to push your web games to the next level.

Nov 3, 2020 <span class="w-author__separator">•</span> Updated Nov 4, 2020

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

Chrome's offline page easter egg is one of the worst-kept secrets in history (`[citation needed]`, but claim made for the dramatic effect). If you press the space key or, on mobile devices, tap the dinosaur, the offline page becomes a playable arcade game. You might be aware that you do not actually have to go offline when you feel like playing: in Chrome, you can just navigate to `about://dino`, or, for the geek in you, browse to `about://network-error/-106`. But did you know that there are currently [270 million Chrome dino games played every month](https://www.blog.google/products/chrome/chrome-dino#jump-content:~:text=There%20are%20currently%20270%20million%20games%20played%20every%20month)?

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format" alt="Press the space bar to play!" class="w-screenshot w-screenshot--filled" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BQ9zVNGfI0PjH6LTwxj5.png?auto=format&amp;w=1600 1600w" width="800" height="647" /><figcaption>Press the space bar to play!</figcaption></figure>Another fact that arguably is more useful to know and that you might not be aware of is that in arcade mode you can play the game with a gamepad. Gamepad support was added roughly one year ago as of the time of this writing in a [commit](https://github.com/chromium/chromium/commit/fcafd36b23c535e307da4213b7d639f8c13b8da2) by [Reilly Grant](https://github.com/reillyeon). As you can see, the game, just like the rest of the Chromium project, is fully [open source](https://github.com/chromium/chromium/tree/master/components/neterror/resources). In this post, I want to show you how to use the Gamepad API.

## Using the Gamepad API <a href="#using-the-gamepad-api" class="w-headline-link">#</a>

The [Gamepad API](https://w3c.github.io/gamepad/) has been around for a long time. This post disregards all the legacy features and vendor prefixes.

### Feature detection and browser support <a href="#feature-detection-and-browser-support" class="w-headline-link">#</a>

The Gamepad API has universally great [browser support](https://caniuse.com/gamepad) across both desktop and mobile. You can detect if the Gamepad API is supported using the snippet below:

    if ('getGamepads' in navigator) {
      // The API is supported!
    }

### How the browser represents a gamepad <a href="#how-the-browser-represents-a-gamepad" class="w-headline-link">#</a>

The browser represents gamepads as `Gamepad` objects. A `Gamepad` has the following fields:

- `id`: An identification string for the gamepad. This string identifies the brand or style of connected gamepad device.
- `index`: The index of the gamepad in the navigator.
- `connected`: Indicates whether the gamepad is still connected to the system.
- `timestamp`: The last time the data for this gamepad was updated.
- `mapping`: The button and axes mapping in use for this device. Currently the only mapping is `"standard"`.
- `axes`: An array of values for all axes of the gamepad, linearly normalized to the range of `-1.0`–`1.0`.
- `buttons`: An array of button states for all buttons of the gamepad.

Note that buttons can be digital (pressed or not pressed) or analog (for example, 78% pressed). This is why buttons are reported as `GamepadButton` objects, with the following attributes:

- `pressed`: The pressed state of the button (`true` if the button is currently pressed, and `false` if it is not pressed.
- `touched`: The touched state of the button. If the button is capable of detecting touch, this property is `true` if the button is currently being touched, and `false` otherwise.
- `value`: For buttons that have an analog sensor, this property represents the amount by which the button has been pressed, linearly normalized to the range of `0.0`–`1.0`.

One additional thing that you might encounter, depending on your browser and the gamepad you have, is a `vibrationActuator` property. This field is currently implemented in Chrome and earmarked for [merging](https://github.com/w3c/gamepad/pull/68) into the [Gamepad Extensions](https://w3c.github.io/gamepad/extensions.html) spec.

The schematic overview below, taken [straight from the spec](https://w3c.github.io/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout:~:text=Figure%201%20Visual%20representation%20of%20a%20standard%20gamepad%20layout.), shows the mapping and the arrangement of the buttons and axes on a generic gamepad.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/qy6OxKmPAE5dpfLCMhZt.svg" alt="Visual representation of a standard gamepad layout (Source)." width="800" height="566" /><figcaption>Visual representation of a standard gamepad layout (<a href="https://w3c.github.io/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout:~:text=Figure%201%20Visual%20representation%20of%20a%20standard%20gamepad%20layout.">Source</a>).</figcaption></figure>### Being notified when a gamepad gets connected <a href="#being-notified-when-a-gamepad-gets-connected" class="w-headline-link">#</a>

To learn when a gamepad is connected, listen for the `gamepadconnected` event that triggers on the `window` object. When the user connects a gamepad, which can either happen via USB or via Bluetooth, a `GamepadEvent` is fired that has the gamepad's details in an aptly named `gamepad` property. Below, you can see an example from an Xbox 360 controller that I had lying around (yes, I am into retro gaming).

    window.addEventListener('gamepadconnected', (event) => {
      console.log('✅ 🎮 A gamepad was connected:', event.gamepad);
      /*
        gamepad: Gamepad
        axes: (4) [0, 0, 0, 0]
        buttons: (17) [GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton]
        connected: true
        id: "Xbox 360 Controller (STANDARD GAMEPAD Vendor: 045e Product: 028e)"
        index: 0
        mapping: "standard"
        timestamp: 6563054.284999998
        vibrationActuator: GamepadHapticActuator {type: "dual-rumble"}
      */
    });

### Being notified when a gamepad gets disconnected <a href="#being-notified-when-a-gamepad-gets-disconnected" class="w-headline-link">#</a>

Being notified of gamepad disconnects happens analogously to the way connections are detected. This time the app listens for the `gamepaddisconnected` event. Note how in the example below `connected` is now `false` when I unplug the Xbox 360 controller.

    window.addEventListener('gamepaddisconnected', (event) => {
      console.log('❌ 🎮 A gamepad was disconnected:', event.gamepad);
      /*
        gamepad: Gamepad
        axes: (4) [0, 0, 0, 0]
        buttons: (17) [GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton, GamepadButton]
        connected: false
        id: "Xbox 360 Controller (STANDARD GAMEPAD Vendor: 045e Product: 028e)"
        index: 0
        mapping: "standard"
        timestamp: 6563054.284999998
        vibrationActuator: null
      */
    });

### The gamepad in your game loop <a href="#the-gamepad-in-your-game-loop" class="w-headline-link">#</a>

Getting a hold of a gamepad starts with a call to `navigator.getGamepads()`, which returns a `GamepadList` object with `Gamepad` items. The `GamepadList` object in Chrome _always_ has a fixed length of four items. If zero or less than four gamepads are connected, an item may just be `null`. Always be sure to check all items of the `GamepadList` and be aware that gamepads "remember" their slot and may not always be present at the first available slot.

    // When no gamepads are connected:
    navigator.getGamepads();
    // GamepadList {0: null, 1: null, 2: null, 3: null, length: 4}

If one or several gamepads are connected, but `navigator.getGamepads()` still reports `null` items, you may need to "wake" each gamepad by pressing any of its buttons. You can then poll the gamepad states in your game loop as shown below.

    const pollGamepad = () => {
      // Always call `navigator.getGamepads()` inside of
      // the game loop, not outside.
      const gamepads = navigator.getGamepads();
      for (const gamepad of gamepads) {
        // Disregard empty slots.
        if (!gamepad) {
          continue;
        }
        // Process the gamepad state.
        console.log(gamepad);
      }
      // Call yourself upon the next animation frame.
      // (Typically this happens every 60 times per second.)
      window.requestAnimationFrame(pollGamepad)
    };
    // Kick off the initial game loop iteration.
    pollGamepad();

**Gotchas!**

Do not store a lasting reference to the `GamepadList` result _outside_ of the game loop, since the method returns a static snapshot, not a live object. Call `navigator.getGamepads()` each time anew _in your game loop_.

### Making use of the vibration actuator <a href="#making-use-of-the-vibration-actuator" class="w-headline-link">#</a>

The `vibrationActuator` property returns a `GamepadHapticActuator` object, which corresponds to a configuration of motors or other actuators that can apply a force for the purposes of haptic feedback. Haptic effects can be played by calling `Gamepad.vibrationActuator.playEffect()`. The only currently valid effect type is `'dual-rumble'`. Dual-rumble describes a haptic configuration with an eccentric rotating mass vibration motor in each handle of a standard gamepad. In this configuration, either motor is capable of vibrating the whole gamepad. The two masses are unequal so that the effects of each can be combined to create more complex haptic effects. Dual-rumble effects are defined by four parameters:

- `duration`: Sets the duration of the vibration effect in milliseconds.
- `startDelay`: Sets the duration of the delay until the vibration is started.
- `strongMagnitude` and `weakMagnitude`: Set the vibration intensity levels for the heavier and lighter eccentric rotating mass motors, normalized to the range `0.0`–`1.0`.

<!-- -->

    // This assumes a `Gamepad` as the value of the `gamepad` variable.
    const vibrate = (gamepad, delay = 0, duration = 100, weak = 1.0, strong = 1.0) => {
      if (!('vibrationActuator' in gamepad)) {
        return;
      }
      gamepad.vibrationActuator.playEffect('dual-rumble', {
        // Start delay in ms.
        startDelay: delay,
        // Duration is ms.
        duration: duration,
        // The magnitude of the weak actuator (between 0 and 1).
        weakMagnitude: weak,
        // The magnitude of the strong actuator (between 0 and 1).
        strongMagnitude: strong,
      });
    };

### Integration with Permissions Policy <a href="#integration-with-permissions-policy" class="w-headline-link">#</a>

The Gamepad API spec defines a [policy-controlled feature](https://w3c.github.io/webappsec-permissions-policy/) identified by the string `"gamepad"`. Its default `allowlist` is `"self"`. A document's permissions policy determines whether any content in that document is allowed to access `navigator.getGamepads()`. If disabled in any document, no content in the document will be allowed to use `navigator.getGamepads()`, nor will the `gamepadconnected` and `gamepaddisconnected` events fire.

    <iframe src="index.html" allow="gamepad"></iframe>

## Demo <a href="#demo" class="w-headline-link">#</a>

A simple [gamepad tester demo](https://gamepad-demo.glitch.me/) is embedded below. The source code is available [on Glitch](https://glitch.com/edit/#!/gamepad-demo). Try the demo by connecting a gamepad via USB or Bluetooth and pressing any of its buttons or moving any of its axis.

## Bonus: play Chrome dino on web.dev <a href="#bonus:-play-chrome-dino-on-web.dev" class="w-headline-link">#</a>

You can play [Chrome dino](https://tomayac.github.io/chrome-dino-gamepad/) with your gamepad on this very site. The source code is available [on GitHub](https://github.com/tomayac/chrome-dino-gamepad). Check out the gamepad polling implementation in [`trex-runner.js`](https://github.com/tomayac/chrome-dino-gamepad/blob/885eb6134805345bf31eeb9971830adeb84747ab/trex-runner.js#L529-L571) and note how it is emulating key presses.

For the [Chrome dino gamepad](https://tomayac.github.io/chrome-dino-gamepad/) demo to work, I have ripped out the Chrome dino game from the core Chromium project (updating an [earlier effort](https://github.com/arnellebalane/trex-runner) by [Arnelle Ballane](https://arnellebalane.com/)), placed it on a standalone site, extended the existing gamepad API implementation by adding ducking and vibration effects, created a full screen mode, and [Mehul Satardekar](https://github.com/mehulsatardekar) contributed a dark mode implementation. Happy gaming!

## Useful links <a href="#useful-links" class="w-headline-link">#</a>

- [Gamepad API spec](https://w3c.github.io/gamepad/)
- [Gamepad API extensions spec](https://w3c.github.io/gamepad/extensions.html)
- [GitHub repository](https://github.com/w3c/gamepad/)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

This article was reviewed by [François Beaufort](https://github.com/beaufortfrancois) and [Joe Medley](https://github.com/jpmedley). The Gamepad API spec is currently edited by [Steve Agoston](https://github.com/sagoston), [James Hollyer](https://www.linkedin.com/in/james-hollyer-981110a3/), and [Matt Reynolds](https://github.com/nondebug). The former spec editors are [Brandon Jones](https://blog.tojicode.com/), [Scott Graham](https://h4ck3r.net/), and [Ted Mielczarek](http://ted.mielczarek.org/). The Gamepad Extensions spec is edited by [Brandon Jones](https://blog.tojicode.com/). Hero image by Laura Torrent Puig.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Nov 4, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/gamepad/index.md)

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
