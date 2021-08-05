<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format" alt="Elgato Stream Deck photo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/05NRg2Lw0w5Rv6TToabY.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#connecting-to-uncommon-hid-devices" class="w-toc__header--link">Connecting to uncommon HID devices</a>

- [Suggested use cases](#use-cases)
- [Current status](#status)
- [Terminology](#terminology)
- [Using the WebHID API](#use)
- [Feature detection](#feature-detection)
- [Open a HID connection](#open)
- [Receive input reports](#receive-input-reports)
- [Send output reports](#send-output-reports)
- [Send and receive feature reports](#feature-reports)
- [Listen to connection and disconnection](#connection-disconnection)
- [Dev Tips](#dev-tips)
- [Browser support](#browser-support)
- [Demos](#demos)
- [Security and privacy](#security-privacy)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support](#show-support)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Connecting to uncommon HID devices

The WebHID API allows websites to access alternative auxiliary keyboards and exotic gamepads.

Sep 15, 2020 <span class="w-author__separator">•</span> Updated Feb 27, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

**Success**: The WebHID API, part of the [capabilities project](/fugu-status/), launched in Chrome 89.

There is a long tail of human interface devices (HIDs), such as alternative keyboards or exotic gamepads, that are too new, too old, or too uncommon to be accessible by systems' device drivers. The WebHID API solves this by providing a way to implement device-specific logic in JavaScript.

## Suggested use cases <a href="#use-cases" class="w-headline-link">#</a>

A HID device takes input from or provides output to humans. Examples of devices include keyboards, pointing devices (mice, touchscreens, etc.), and gamepads. The [HID protocol](https://www.usb.org/hid) makes it possible to access these devices on desktop computers using operating system drivers. The web platform supports HID devices by relying on these drivers.

The inability to access uncommon HID devices is particularly painful when it comes to alternative auxiliary keyboards (e.g. [Elgato Stream Deck](https://www.elgato.com/en/gaming/stream-deck), [Jabra headsets](https://www.jabra.com/business/office-headsets), [X-keys](https://xkeys.com/xkeys.html)) and exotic gamepad support. Gamepads designed for desktop often use HID for gamepad inputs (buttons, joysticks, triggers) and outputs (LEDs, rumble). Unfortunately, gamepad inputs and outputs are not well standardized and web browsers often require custom logic for specific devices. This is unsustainable and results in poor support for the long tail of older and uncommon devices. It also causes the browser to depend on quirks in the behavior of specific devices.

## Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/WICG/webhid/blob/master/EXPLAINER.md">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://wicg.github.io/webhid/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">Complete</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developers.chrome.com/origintrials/#/register_trial/1074108511127863297">Complete</a></td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Complete</strong></td></tr></tbody></table>

## Terminology <a href="#terminology" class="w-headline-link">#</a>

HID consists of two fundamental concepts: reports and report descriptors. Reports are the data that is exchanged between a device and a software client. The report descriptor describes the format and meaning of data that the device supports.

A HID (Human Interface Device) is a type of device that takes input from or provides output to humans. It also refers to the HID protocol, a standard for bi-directional communication between a host and a device that is designed to simplify the installation procedure. The HID protocol was originally developed for USB devices, but has since been implemented over many other protocols, including Bluetooth.

Applications and HID devices exchange binary data through three report types:

<table><thead><tr class="header"><th>Report type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Input report</td><td>Data that is sent from the device to the application (e.g. a button is pressed.)</td></tr><tr class="even"><td>Output report</td><td>Data that is sent from the application to the device (e.g. a request to turn on the keyboard backlight.)</td></tr><tr class="odd"><td>Feature report</td><td>Data that may be sent in either direction. The format is device-specific.</td></tr></tbody></table>

A report descriptor describes the binary format of reports supported by the device. Its structure is hierarchical and can group reports together as distinct collections within the top-level collection. The [format](https://gist.github.com/beaufortfrancois/583424dfef66be1ade86231fd1a260c7) of the descriptor is defined by the HID specification.

A HID usage is a numeric value referring to a standardized input or output. Usage values allow a device to describe the intended use of the device and the purpose of each field in its reports. For example, one is defined for the left button of a mouse. Usages are also organized into usage pages, which provide an indication of the high-level category of the device or report.

## Using the WebHID API <a href="#use" class="w-headline-link">#</a>

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

To check if the WebHID API is supported, use:

    if ("hid" in navigator) {
      // The WebHID API is supported.
    }

### Open a HID connection <a href="#open" class="w-headline-link">#</a>

The WebHID API is asynchronous by design to prevent the website UI from blocking when awaiting input. This is important because HID data can be received at any time, requiring a way to listen to it.

To open a HID connection, first access a `HIDDevice` object. For this, you can either prompt the user to select a device by calling `navigator.hid.requestDevice()`, or pick one from `navigator.hid.getDevices()` which returns a list of devices the website has been granted access to previously.

The `navigator.hid.requestDevice()` function takes a mandatory object that defines filters. Those are used to match any device connected with a USB vendor identifier (`vendorId`), a USB product identifier (`productId`), a usage page value (`usagePage`), and a usage value (`usage`). You can get those from [the USB ID Repository](http://www.linux-usb.org/usb-ids.html) and the [HID usage tables document](https://usb.org/document-library/hid-usage-tables-12).

The multiple `HIDDevice` objects returned by this function represent multiple HID interfaces on the same physical device.

    // Filter on devices with the Nintendo Switch Joy-Con USB Vendor/Product IDs.
    const filters = [
      {
        vendorId: 0x057e, // Nintendo Co., Ltd
        productId: 0x2006 // Joy-Con Left
      },
      {
        vendorId: 0x057e, // Nintendo Co., Ltd
        productId: 0x2007 // Joy-Con Right
      }
    ];

    // Prompt user to select a Joy-Con device.
    const [device] = await navigator.hid.requestDevice({ filters });

    // Get all devices the user has previously granted the website access to.
    const devices = await navigator.hid.getDevices();

<figure><img src="https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format" alt="User prompt for selecting a Nintendo Switch Joy-Con." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/gaZo8LxG3Y8eU2VirlZ4.jpg?auto=format&amp;w=1600 1600w" width="800" height="513" /><figcaption>User prompt for selecting a Nintendo Switch Joy-Con.</figcaption></figure>A `HIDDevice` object contains USB vendor and product identifiers for device identification. Its `collections` attribute is initialized with a hierarchical description of the device's report formats.

    for (let collection of device.collections) {
      // A HID collection includes usage, usage page, reports, and subcollections.
      console.log(`Usage: ${collection.usage}`);
      console.log(`Usage page: ${collection.usagePage}`);

      for (let inputReport of collection.inputReports) {
        console.log(`Input report: ${inputReport.reportId}`);
        // Loop through inputReport.items
      }

      for (let outputReport of collection.outputReports) {
        console.log(`Output report: ${outputReport.reportId}`);
        // Loop through outputReport.items
      }

      for (let featureReport of collection.featureReports) {
        console.log(`Feature report: ${featureReport.reportId}`);
        // Loop through featureReport.items
      }

      // Loop through subcollections with collection.children
    }

The `HIDDevice` devices are by default returned in a "closed" state and must be opened by calling `open()` before data can be sent or received.

    // Wait for the HID connection to open before sending/receiving data.
    await device.open();

### Receive input reports <a href="#receive-input-reports" class="w-headline-link">#</a>

Once the HID connection has been established, you can handle incoming input reports by listening to the `"inputreport"` events from the device. Those events contain the HID data as a [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) object (`data`), the HID device it belongs to (`device`), and the 8-bit report ID associated with the input report (`reportId`).

<figure><img src="https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format" alt="Nintendo Switch Joy-Con devices." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Hr4EXZcunl7r2TJwVvQ8.jpg?auto=format&amp;w=1600 1600w" width="800" height="575" /><figcaption>Nintendo Switch Joy-Con devices.</figcaption></figure>Continuing with the previous example, the code below shows you how to detect which button the user has pressed on a Joy-Con Right device so that you can hopefully try it at home.

    device.addEventListener("inputreport", event => {
      const { data, device, reportId } = event;

      // Handle only the Joy-Con Right device and a specific report ID.
      if (device.productId !== 0x2007 && reportId !== 0x3f) return;

      const value = data.getUint8(0);
      if (value === 0) return;

      const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
      console.log(`User pressed button ${someButtons[value]}.`);
    });

### Send output reports <a href="#send-output-reports" class="w-headline-link">#</a>

To send an output report to a HID device, pass the 8-bit report ID associated with the output report (`reportId`) and bytes as a [`BufferSource`](https://developer.mozilla.org/en-US/docs/Web/API/BufferSource) (`data`) to `device.sendReport()`. The returned promise resolves once the report has been sent. If the HID device does not use report IDs, set `reportId` to 0.

The example below applies to a Joy-Con device and shows you how to make it rumble with output reports.

    // First, send a command to enable vibration.
    // Magical bytes come from https://github.com/mzyy94/joycon-toolweb
    const enableVibrationData = [1, 0, 1, 64, 64, 0, 1, 64, 64, 0x48, 0x01];
    await device.sendReport(0x01, new Uint8Array(enableVibrationData));

    // Then, send a command to make the Joy-Con device rumble.
    // Actual bytes are available in the sample below.
    const rumbleData = [ /* ... */ ];
    await device.sendReport(0x10, new Uint8Array(rumbleData));

### Send and receive feature reports <a href="#feature-reports" class="w-headline-link">#</a>

Feature reports are the only type of HID data reports that can travel in both directions. They allow HID devices and applications to exchange non standardized HID data. Unlike input and output reports, feature reports are not received or sent by the application on a regular basis.

<figure><img src="https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format" alt="Laptop keyboard" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/QJiKwOCVAtUsAWUnqLxi.jpg?auto=format&amp;w=1600 1600w" width="800" height="575" /><figcaption>Laptop keyboard</figcaption></figure>To send a feature report to a HID device, pass the 8-bit report ID associated with the feature report (`reportId`) and bytes as a [`BufferSource`](https://developer.mozilla.org/en-US/docs/Web/API/BufferSource) (`data`) to `device.sendFeatureReport()`. The returned promise resolves once the report has been sent. If the HID device does not use report IDs, set `reportId` to 0.

The example below illustrates the use of feature reports by showing you how to request an Apple keyboard backlight device, open it, and make it blink.

    const waitFor = duration => new Promise(r => setTimeout(r, duration));

    // Prompt user to select an Apple Keyboard Backlight device.
    const [device] = await navigator.hid.requestDevice({
      filters: [{ vendorId: 0x05ac, usage: 0x0f, usagePage: 0xff00 }]
    });

    // Wait for the HID connection to open.
    await device.open();

    // Blink!
    const reportId = 1;
    for (let i = 0; i < 10; i++) {
      // Turn off
      await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
      await waitFor(100);
      // Turn on
      await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
      await waitFor(100);
    }

To receive a feature report from a HID device, pass the 8-bit report ID associated with the feature report (`reportId`) to `device.receiveFeatureReport()`. The returned promise resolves with a [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) object that contains the contents of the feature report. If the HID device does not use report IDs, set `reportId` to 0.

    // Request feature report.
    const dataView = await device.receiveFeatureReport(/* reportId= */ 1);

    // Read feature report contents with dataView.getInt8(), getUint8(), etc...

### Listen to connection and disconnection <a href="#connection-disconnection" class="w-headline-link">#</a>

When the website has been granted permission to access a HID device, it can actively receive connection and disconnection events by listening to `"connect"` and `"disconnect"` events.

    navigator.hid.addEventListener("connect", event => {
      // Automatically open event.device or warn user a device is available.
    });

    navigator.hid.addEventListener("disconnect", event => {
      // Remove |event.device| from the UI.
    });

## Dev Tips <a href="#dev-tips" class="w-headline-link">#</a>

Debugging HID in Chrome is easy with the internal page, `about://device-log` where you can see all HID and USB device related events in one single place.

## <figure><img src="https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format" alt="Internal page in Chrome to debug HID." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zwpr1W7oDsRw0DKsFQ9D.jpg?auto=format&amp;w=1600 1600w" width="800" height="575" /><figcaption>Internal page in Chrome to debug HID.</figcaption></figure>Browser support <a href="#browser-support" class="w-headline-link">#</a>

The WebHID API is available on all desktop platforms (Chrome OS, Linux, macOS, and Windows) in Chrome 89.

## Demos <a href="#demos" class="w-headline-link">#</a>

Some WebHID demos are listed at [web.dev/hid-examples](/hid-examples/). Go have a look!

## Security and privacy <a href="#security-privacy" class="w-headline-link">#</a>

The spec authors have designed and implemented the WebHID API using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/lkgr/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics. The ability to use this API is primarily gated by a permission model that grants access to only a single HID device at a time. In response to a user prompt, the user must take active steps to select a particular HID device.

To understand the security tradeoffs, check out the [Security and Privacy Considerations](https://wicg.github.io/webhid/#security-and-privacy) section of the WebHID spec.

On top of this, Chrome inspects the usage of each top-level collection and if a top-level collection has a protected usage (e.g. generic keyboard, mouse), then a website won't be able to send and receive any reports defined in that collection. The full list of protected usages is [publicly available](https://source.chromium.org/chromium/chromium/src/+/master:services/device/public/cpp/hid/hid_usage_and_page.cc).

Note that security-sensitive HID devices (such as FIDO HID devices used for stronger authentication) are also blocked in Chrome. See the [USB blocklist](https://source.chromium.org/chromium/chromium/src/+/master:chrome/browser/usb/usb_blocklist.cc) and [HID blocklist](https://source.chromium.org/chromium/chromium/src/+/master:services/device/public/cpp/hid/hid_blocklist.cc) files.

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The Chrome team would love to hear about your thoughts and experiences with the WebHID API.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work as expected? Or are there missing methods or properties that you need to implement your idea?

File a spec issue on the [WebHID API GitHub repo](https://github.com/wicg/webhid/issues) or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EHID). Be sure to include as much detail as you can, provide simple instructions for reproducing the bug, and have _Components_ set to `Blink>HID`. [Glitch](https://glitch.com) works great for sharing quick and easy repros.

### Show support <a href="#show-support" class="w-headline-link">#</a>

Are you planning to use the WebHID API? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#WebHID`](https://twitter.com/search?q=%23WebHID&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Specification](https://wicg.github.io/webhid/)
- [Tracking bug](https://crbug.com/890096)
- [ChromeStatus.com entry](https://chromestatus.com/feature/5172464636133376)
- Blink Component: [`Blink>HID`](https://chromestatus.com/features#component%3ABlink%3EHID)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [Matt Reynolds](https://github.com/nondebug) and [Joe Medley](https://github.com/jpmedley) for their reviews of this article. Red and blue Nintendo Switch photo by [Sara Kurfeß](https://unsplash.com/photos/jqpRECmiNEU), and black and silver laptop computer photo by [Athul Cyriac Ajay](https://unsplash.com/photos/ndokCrfQWrI) on Unsplash.

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=webhid), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bwebhid%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Feb 27, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/hid/index.md)

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
