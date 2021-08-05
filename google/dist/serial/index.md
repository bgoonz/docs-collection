<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format" alt="Old modems, routers, network equipment. Serial, phone, audio, ethernet connectors." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/PMOws2Au6GPLq9sXSSqw.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#read-from-and-write-to-a-serial-port" class="w-toc__header--link">Read from and write to a serial port</a>

- [What is the Web Serial API?](#what)
- [Suggested use cases](#use-cases)
- [Current status](#status)
- [Using the Web Serial API](#use)
- [Feature detection](#feature-detection)
- [Open a serial port](#open-port)
- [Read from a serial port](#read-port)
- [Write to a serial port](#write-port)
- [Close a serial port](#close-port)
- [Listen to connection and disconnection](#connection-disconnection)
- [Handle signals](#signals)
- [Transforming streams](#transforming-streams)
- [Dev Tips](#dev-tips)
- [Codelab](#codelab)
- [Browser support](#browser-support)
- [Polyfill](#polyfill)
- [Security and privacy](#security-privacy)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support](#show-support)
- [Helpful links](#helpful)
- [Demos](#demos)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Read from and write to a serial port

The Web Serial API allows websites to communicate with serial devices.

Aug 12, 2020 <span class="w-author__separator">•</span> Updated Mar 3, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

**Success**: The Web Serial API, part of the [capabilities project](/fugu-status/), launched in Chrome 89.

## What is the Web Serial API? <a href="#what" class="w-headline-link">#</a>

A serial port is a bidirectional communication interface that allows sending and receiving data byte by byte.

The Web Serial API provides a way for websites to read from and write to a serial device with JavaScript. Serial devices are connected either through a serial port on the user's system or through removable USB and Bluetooth devices that emulate a serial port.

In other words, the Web Serial API bridges the web and the physical world by allowing websites to communicate with serial devices, such as microcontrollers and 3D printers.

This API is also a great companion to [WebUSB](https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web) as operating systems require applications to communicate with some serial ports using their higher-level serial API rather than the low-level USB API.

## Suggested use cases <a href="#use-cases" class="w-headline-link">#</a>

In the educational, hobbyist, and industrial sectors, users connect peripheral devices to their computers. These devices are often controlled by microcontrollers via a serial connection used by custom software. Some custom software to control these devices is built with web technology:

- [Arduino Create](https://create.arduino.cc/)
- [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator)
- [Espruino Web IDE](http://espruino.com/ide)
- [Microsoft MakeCode](https://www.microsoft.com/en-us/makecode)

In some cases, websites communicate with the device through an agent application that users installed manually. In others, the application is delivered in a packaged application through a framework such as Electron. And in others, the user is required to perform an additional step such as copying a compiled application to the device via a USB flash drive.

In all these cases, the user experience will be improved by providing direct communication between the website and the device that it is controlling.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/reillyeon/serial/blob/gh-pages/EXPLAINER.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://reillyeon.github.io/serial/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">Complete</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developers.chrome.com/origintrials/#/view_trial/2992641952387694593">Complete</a></td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Complete</strong></td></tr></tbody></table>

## Using the Web Serial API <a href="#use" class="w-headline-link">#</a>

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the Web Serial API is supported, use:

    if ("serial" in navigator) {
      // The Web Serial API is supported.
    }

### Open a serial port <a href="#open-port" class="w-headline-link">#</a>

The Web Serial API is asynchronous by design. This prevents the website UI from blocking when awaiting input, which is important because serial data can be received at any time, requiring a way to listen to it.

To open a serial port, first access a `SerialPort` object. For this, you can either prompt the user to select a single serial port by calling `navigator.serial.requestPort()`, or pick one from `navigator.serial.getPorts()` which returns a list of serial ports the website has been granted access to previously.

    // Prompt user to select any serial port.
    const port = await navigator.serial.requestPort();

    // Get all serial ports the user has previously granted the website access to.
    const ports = await navigator.serial.getPorts();

The `navigator.serial.requestPort()` function takes an optional object literal that defines filters. Those are used to match any serial device connected over USB with a mandatory USB vendor (`usbVendorId`) and optional USB product identifiers (`usbProductId`).

    // Filter on devices with the Arduino Uno USB Vendor/Product IDs.
    const filters = [
      { usbVendorId: 0x2341, usbProductId: 0x0043 },
      { usbVendorId: 0x2341, usbProductId: 0x0001 }
    ];

    // Prompt user to select an Arduino Uno device.
    const port = await navigator.serial.requestPort({ filters });

    const { usbProductId, usbVendorId } = port.getInfo();

<figure><img src="https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format" alt="User prompt for selecting a BBC micro:bit" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/BT9OxLREXfb0vcnHlYu8.jpg?auto=format&amp;w=1600 1600w" width="800" height="513" /><figcaption>User prompt for selecting a BBC micro:bit</figcaption></figure>Calling `requestPort()` prompts the user to select a device and returns a `SerialPort` object. Once you have a `SerialPort` object, calling `port.open()` with the desired baud rate will open the serial port. The `baudRate` dictionary member specifies how fast data is sent over a serial line. It is expressed in units of bits-per-second (bps). Check your device's documentation for the correct value as all the data you send and receive will be gibberish if this is specified incorrectly. For some USB and Bluetooth devices that emulate a serial port this value may be safely set to any value as it is ignored by the emulation.

    // Prompt user to select any serial port.
    const port = await navigator.serial.requestPort();

    // Wait for the serial port to open.
    await port.open({ baudRate: 9600 });

You can also specify any of the options below when opening a serial port. These options are optional and have convenient [default values](https://reillyeon.github.io/serial/#dom-serialoptions).

- `dataBits`: The number of data bits per frame (either 7 or 8).
- `stopBits`: The number of stop bits at the end of a frame (either 1 or 2).
- `parity`: The parity mode (either `"none"`, `"even"` or `"odd"`).
- `bufferSize`: The size of the read and write buffers that should be created (must be less than 16MB).
- `flowControl`: The flow control mode (either `"none"` or `"hardware"`).

### Read from a serial port <a href="#read-port" class="w-headline-link">#</a>

Input and output streams in the Web Serial API are handled by the Streams API.

If streams are new to you, check out [Streams API concepts](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts). This article barely scratches the surface of streams and stream handling.

After the serial port connection is established, the `readable` and `writable` properties from the `SerialPort` object return a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) and a [WritableStream](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream). Those will be used to receive data from and send data to the serial device. Both use `Uint8Array` instances for data transfer.

When new data arrives from the serial device, `port.readable.getReader().read()` returns two properties asynchronously: the `value` and a `done` boolean. If `done` is true, the serial port has been closed or there is no more data coming in. Calling `port.readable.getReader()` creates a reader and locks `readable` to it. While `readable` is [locked](https://streams.spec.whatwg.org/#lock), the serial port can't be closed.

    const reader = port.readable.getReader();

    // Listen to data coming from the serial device.
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // Allow the serial port to be closed later.
        reader.releaseLock();
        break;
      }
      // value is a Uint8Array.
      console.log(value);
    }

Some non-fatal serial port read errors can happen under some conditions such as buffer overflow, framing errors, or parity errors. Those are thrown as exceptions and can be caught by adding another loop on top of the previous one that checks `port.readable`. This works because as long as the errors are non-fatal, a new [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) is created automatically. If a fatal error occurs, such as the serial device being removed, then `port.readable` becomes null.

    while (port.readable) {
      const reader = port.readable.getReader();

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            // Allow the serial port to be closed later.
            reader.releaseLock();
            break;
          }
          if (value) {
            console.log(value);
          }
        }
      } catch (error) {
        // TODO: Handle non-fatal read error.
      }
    }

If the serial device sends text back, you can pipe `port.readable` through a `TextDecoderStream` as shown below. A `TextDecoderStream` is a [transform stream](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream) that grabs all `Uint8Array` chunks and converts them to strings.

    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    // Listen to data coming from the serial device.
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // Allow the serial port to be closed later.
        reader.releaseLock();
        break;
      }
      // value is a string.
      console.log(value);
    }

### Write to a serial port <a href="#write-port" class="w-headline-link">#</a>

To send data to a serial device, pass data to `port.writable.getWriter().write()`. Calling `releaseLock()` on `port.writable.getWriter()` is required for the serial port to be closed later.

    const writer = port.writable.getWriter();

    const data = new Uint8Array([104, 101, 108, 108, 111]); // hello
    await writer.write(data);


    // Allow the serial port to be closed later.
    writer.releaseLock();

Send text to the device through a `TextEncoderStream` piped to `port.writable` as shown below.

    const textEncoder = new TextEncoderStream();
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

    const writer = textEncoder.writable.getWriter();

    await writer.write("hello");

### Close a serial port <a href="#close-port" class="w-headline-link">#</a>

`port.close()` closes the serial port if its `readable` and `writable` members are [unlocked](https://streams.spec.whatwg.org/#lock), meaning `releaseLock()` has been called for their respective reader and writer.

    await port.close();

However, when continuously reading data from a serial device using a loop, `port.readable` will always be locked until it encounters an error. In this case, calling `reader.cancel()` will force `reader.read()` to resolve immediately with `{ value: undefined, done: true }` and therefore allowing the loop to call `reader.releaseLock()`.

    // Without transform streams.

    let keepReading = true;
    let reader;

    async function readUntilClosed() {
      while (port.readable && keepReading) {
        reader = port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              // reader.cancel() has been called.
              break;
            }
            // value is a Uint8Array.
            console.log(value);
          }
        } catch (error) {
          // Handle error...
        } finally {
          // Allow the serial port to be closed later.
          reader.releaseLock();
        }
      }

      await port.close();
    }

    const closedPromise = readUntilClosed();

    document.querySelector('button').addEventListener('click', async () => {
      // User clicked a button to close the serial port.
      keepReading = false;
      // Force reader.read() to resolve immediately and subsequently
      // call reader.releaseLock() in the loop example above.
      reader.cancel();
      await closedPromise;
    });

Closing a serial port is more complicated when using [transform streams](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream) (like `TextDecoderStream` and `TextEncoderStream`). Call `reader.cancel()` as before. Then call `writer.close()` and `port.close()`. This propagates errors through the transform streams to the underlying serial port. Because error propagation doesn't happen immediately, you need to use the `readableStreamClosed` and `writableStreamClosed` promises created earlier to detect when `port.readable` and `port.writable` have been unlocked. Cancelling the `reader` causes the stream to be aborted; this is why you must catch and ignore the resulting error.

    // With transform streams.

    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    // Listen to data coming from the serial device.
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        reader.releaseLock();
        break;
      }
      // value is a string.
      console.log(value);
    }

    const textEncoder = new TextEncoderStream();
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

    reader.cancel();
    await readableStreamClosed.catch(() => { /* Ignore the error */ });

    writer.close();
    await writableStreamClosed;

    await port.close();

### Listen to connection and disconnection <a href="#connection-disconnection" class="w-headline-link">#</a>

If a serial port is provided by a USB device then that device may be connected or disconnected from the system. When the website has been granted permission to access a serial port, it should monitor the `connect` and `disconnect` events.

    navigator.serial.addEventListener("connect", (event) => {
      // TODO: Automatically open event.target or warn user a port is available.
    });

    navigator.serial.addEventListener("disconnect", (event) => {
      // TODO: Remove |event.target| from the UI.
      // If the serial port was opened, a stream error would be observed as well.
    });

Prior to Chrome 89 the `connect` and `disconnect` events fired a custom `SerialConnectionEvent` object with the affected `SerialPort` interface available as the `port` attribute. You may want to use `event.port || event.target` to handle the transition.

### Handle signals <a href="#signals" class="w-headline-link">#</a>

After establishing the serial port connection, you can explicitly query and set signals exposed by the serial port for device detection and flow control. These signals are defined as boolean values. For example, some devices such as Arduino will enter a programming mode if the Data Terminal Ready (DTR) signal is toggled.

Setting [output signals](https://reillyeon.github.io/serial/#serialoutputsignals-dictionary) and getting [input signals](https://reillyeon.github.io/serial/#serialinputsignals-dictionary) are respectively done by calling `port.setSignals()` and `port.getSignals()`. See usage examples below.

    // Turn off Serial Break signal.
    await port.setSignals({ break: false });

    // Turn on Data Terminal Ready (DTR) signal.
    await port.setSignals({ dataTerminalReady: true });

    // Turn off Request To Send (RTS) signal.
    await port.setSignals({ requestToSend: false });

    const signals = await port.getSignals();
    console.log(`Clear To Send:       ${signals.clearToSend}`);
    console.log(`Data Carrier Detect: ${signals.dataCarrierDetect}`);
    console.log(`Data Set Ready:      ${signals.dataSetReady}`);
    console.log(`Ring Indicator:      ${signals.ringIndicator}`);

### Transforming streams <a href="#transforming-streams" class="w-headline-link">#</a>

When you receive data from the serial device, you won't necessarily get all of the data at once. It may be arbitrarily chunked. For more information, see [Streams API concepts](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts).

To deal with this, you can use some built-in transform streams such as `TextDecoderStream` or create your own transform stream which allows you to parse the incoming stream and return parsed data. The transform stream sits between the serial device and the read loop that is consuming the stream. It can apply an arbitrary transform before the data is consumed. Think of it like an assembly line: as a widget comes down the line, each step in the line modifies the widget, so that by the time it gets to its final destination, it's a fully functioning widget.

<figure><img src="https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format" alt="World War II Castle Bromwich Aeroplane Factory" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/seICV1jfxA6NfFRt9iVL.jpg?auto=format&amp;w=1600 1600w" width="800" height="519" /><figcaption>World War II Castle Bromwich Aeroplane Factory</figcaption></figure>For example, consider how to create a transform stream class that consumes a stream and chunks it based on line breaks. Its `transform()` method is called every time new data is received by the stream. It can either enqueue the data or save it for later. The `flush()` method is called when the stream is closed, and it handles any data that hasn't been processed yet.

To use the transform stream class, you need to pipe an incoming stream through it. In the third code example under [Read from a serial port](#read-port), the original input stream was only piped through a `TextDecoderStream`, so we need to call `pipeThrough()` to pipe it through our new `LineBreakTransformer`.

    class LineBreakTransformer {
      constructor() {
        // A container for holding stream data until a new line.
        this.chunks = "";
      }

      transform(chunk, controller) {
        // Append new chunks to existing chunks.
        this.chunks += chunk;
        // For each line breaks in chunks, send the parsed lines out.
        const lines = this.chunks.split("\r\n");
        this.chunks = lines.pop();
        lines.forEach((line) => controller.enqueue(line));
      }

      flush(controller) {
        // When the stream is closed, flush any remaining chunks out.
        controller.enqueue(this.chunks);
      }
    }

    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable
      .pipeThrough(new TransformStream(new LineBreakTransformer()))
      .getReader();

For debugging serial device communication issues, use the `tee()` method of `port.readable` to split the streams going to or from the serial device. The two streams created can be consumed independently and this allows you to print one to the console for inspection.

    const [appReadable, devReadable] = port.readable.tee();

    // You may want to update UI with incoming data from appReadable
    // and log incoming data in JS console for inspection from devReadable.

## Dev Tips <a href="#dev-tips" class="w-headline-link">#</a>

Debugging the Web Serial API in Chrome is easy with the internal page, `about://device-log` where you can see all serial device related events in one single place.

## <figure><img src="https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format" alt="Internal page in Chrome for debugging the Web Serial API." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/p2T9gxxLsDWsS1GaqoXj.jpg?auto=format&amp;w=1600 1600w" width="800" height="547" /><figcaption>Internal page in Chrome for debugging the Web Serial API.</figcaption></figure>Codelab <a href="#codelab" class="w-headline-link">#</a>

In the [Google Developer codelab](https://codelabs.developers.google.com/codelabs/web-serial), you'll use the Web Serial API to interact with a [BBC micro:bit](https://microbit.org/) board to show images on its 5x5 LED matrix.

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

The Web Serial API is available on all desktop platforms (Chrome OS, Linux, macOS, and Windows) in Chrome 89.

## Polyfill <a href="#polyfill" class="w-headline-link">#</a>

On Android, support for USB-based serial ports is possible using the WebUSB API and the [Serial API polyfill](https://github.com/google/web-serial-polyfill). This polyfill is limited to hardware and platforms where the device is accessible via the WebUSB API because it has not been claimed by a built-in device driver.

## Security and privacy <a href="#security-privacy" class="w-headline-link">#</a>

The spec authors have designed and implemented the Web Serial API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. The ability to use this API is primarily gated by a permission model that grants access to only a single serial device at a time. In response to a user prompt, the user must take active steps to select a particular serial device.

To understand the security tradeoffs, check out the [security](https://github.com/reillyeon/serial/blob/gh-pages/EXPLAINER.md#security-considerations) and [privacy](https://github.com/reillyeon/serial/blob/gh-pages/EXPLAINER.md#privacy-considerations) sections of the Web Serial API Explainer.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team would love to hear about your thoughts and experiences with the Web Serial API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work as expected? Or are there missing methods or properties that you need to implement your idea?

File a spec issue on the [Web Serial API GitHub repo](https://github.com/wicg/serial/issues) or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ESerial). Be sure to include as much detail as you can, provide simple instructions for reproducing the bug, and have _Components_ set to `Blink>Serial`. [Glitch](https://glitch.com) works great for sharing quick and easy repros.

### Show support <a href="#show-support" class="w-headline-link">#</a>

Are you planning to use the Web Serial API? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#SerialAPI`](https://twitter.com/search?q=%23SerialAPI&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Specification](https://reillyeon.github.io/serial/)
- [Tracking bug](https://crbug.com/884928)
- [ChromeStatus.com entry](https://chromestatus.com/feature/6577673212002304)
- Blink Component: [`Blink>Serial`](https://chromestatus.com/features#component%3ABlink%3ESerial)

## Demos <a href="#demos" class="w-headline-link">#</a>

- [Serial Terminal](https://googlechromelabs.github.io/serial-terminal/)
- [Espruino Web IDE](https://www.espruino.com/ide/)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [Reilly Grant](https://twitter.com/reillyeon) and [Joe Medley](https://github.com/jpmedley) for their reviews of this article. Aeroplane factory photo by [Birmingham Museums Trust](https://unsplash.com/@birminghammuseumstrust) on [Unsplash](https://unsplash.com/photos/E1PSU-7aWcY).

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Mar 3, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/serial/index.md)

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
