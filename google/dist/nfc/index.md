<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format" alt="A photo of NFC tags" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/TqG3qb5MiLGNTnAgKtqO.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#interact-with-nfc-devices-on-chrome-for-android" class="w-toc__header--link">Interact with NFC devices on Chrome for Android</a>

- [What is Web NFC?](#what)
- [Suggested use cases](#use-cases)
- [Current status](#status)
- [Using Web NFC](#use)
- [Feature detection](#feature-detection)
- [Terminology](#terminology)
- [Scan NFC tags](#scan)
- [Write NFC tags](#write)
- [Security and permissions](#security-and-permissions)
- [Cookbook](#cookbook)
- [Check for permission](#check-for-permission)
- [Abort NFC operations](#abort-nfc-operations)
- [Read and write a text record](#read-and-write-a-text-record)
- [Read and write a URL record](#read-and-write-a-url-record)
- [Read and write a MIME type record](#read-and-write-a-mime-type-record)
- [Read and write an absolute-URL record](#read-and-write-an-absolute-url-record)
- [Read and write a smart poster record](#read-and-write-a-smart-poster-record)
- [Read and write an external type record](#read-and-write-an-external-type-record)
- [Read and write an empty record](#read-and-write-an-empty-record)
- [Browser support](#browser-support)
- [Dev Tips](#dev-tips)
- [Demos](#demos)
- [Feedback](#feedback)
- [Tell us about the API design](#tell-us-about-the-api-design)
- [Report a problem with the implementation](#report-a-problem-with-the-implementation)
- [Show support](#show-support)
- [Helpful links](#helpful)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Interact with NFC devices on Chrome for Android

Reading and writing to NFC tags is now possible.

Feb 12, 2020 <span class="w-author__separator">•</span> Updated Feb 23, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

**Success**: Web NFC, part of the [capabilities project](/fugu-status/), launched in Chrome 89 for Android.

## What is Web NFC? <a href="#what" class="w-headline-link">#</a>

NFC stands for Near Field Communications, a short-range wireless technology operating at 13.56 MHz that enables communication between devices at a distance less than 10 cm and a transmission rate of up to 424 kbit/s.

Web NFC provides sites the ability to read and write to NFC tags when they are in close proximity to the user's device (usually 5-10 cm, 2-4 inches). The current scope is limited to NFC Data Exchange Format (NDEF), a lightweight binary message format that works across different tag formats.

## <figure><img src="https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format" alt="Diagram of an NFC operation" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/jWmCabXZCB6zNwQIR90I.png?auto=format&amp;w=1600 1600w" width="800" height="489" /><figcaption>Diagram of an NFC operation</figcaption></figure>Suggested use cases <a href="#use-cases" class="w-headline-link">#</a>

Web NFC is limited to NDEF because the security properties of reading and writing NDEF data are more easily quantifiable. Low-level I/O operations (e.g. ISO-DEP, NFC-A/B, NFC-F), Peer-to-Peer communication mode and Host-based Card Emulation (HCE) are not supported.

Examples of sites that may use Web NFC include:

- Museums and art galleries can display additional information about a display when the user touches their device to an NFC card near the exhibit.
- Inventory management sites can read or write data to the NFC tag on a container to update information on its contents.
- Conference sites can use it to scan NFC badges during the event.
- Sites can use it for sharing initial secrets needed for device or service provisioning scenarios and also to deploy configuration data in operational mode.

## <figure><img src="https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format" alt="NFC inventory management illustrated" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/zTEXhIx9nDWtbKrIPN0x.png?auto=format&amp;w=1600 1600w" width="800" height="383" /><figcaption>NFC inventory management illustrated</figcaption></figure>Current status <a href="#status" class="w-headline-link">#</a>

<table><thead><tr class="header"><th>Step</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>1. Create explainer</td><td><a href="https://github.com/w3c/web-nfc/blob/gh-pages/EXPLAINER.md#web-nfc-explained">Complete</a></td></tr><tr class="even"><td>2. Create initial draft of specification</td><td><a href="https://w3c.github.io/web-nfc/">Complete</a></td></tr><tr class="odd"><td>3. Gather feedback &amp; iterate on design</td><td><a href="#feedback">Complete</a></td></tr><tr class="even"><td>4. Origin trial</td><td><a href="https://developers.chrome.com/origintrials/#/view_trial/236438980436951041">Complete</a></td></tr><tr class="odd"><td><strong>5. Launch</strong></td><td><strong>Complete</strong></td></tr></tbody></table>

## Using Web NFC <a href="#use" class="w-headline-link">#</a>

### Feature detection <a href="#feature-detection" class="w-headline-link">#</a>

Feature detection for hardware is different from what you're probably used to. The presence of `NDEFReader` tells you that the browser supports Web NFC, but not whether the required hardware is present. In particular, if the hardware is missing, the promise returned by certain calls will reject. I'll provide details when I describe `NDEFReader`.

    if ('NDEFReader' in window) { /* Scan and write NFC tags */ }

### Terminology <a href="#terminology" class="w-headline-link">#</a>

An NFC tag is a passive NFC device, meaning that is powered by magnetic induction when an active NFC device (.e.g a phone) is in proximity. NFC tags come in many forms and fashions, as stickers, credit cards, arm wrists, etc.

<figure><img src="https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format" alt="A transparent NFC tag" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/uUBxSkSc3MJBG8Lw52fV.jpg?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>A transparent NFC tag</figcaption></figure>The `NDEFReader` object is the entry point in Web NFC that exposes functionality for preparing reading and/or writing actions that are fulfilled when an NDEF tag comes in proximity. The `NDEF` in `NDEFReader` stands for NFC Data Exchange Format, a lightweight binary message format standardized by the [NFC Forum](https://nfc-forum.org/).

The `NDEFReader` object is for acting on incoming NDEF messages from NFC tags and for writing NDEF messages to NFC tags within range.

An NFC tag that supports NDEF is like a post-it note. Anyone can read it, and unless it is read-only, anyone can write to it. It contains a single NDEF message which encapsulates one or more NDEF records. Each NDEF record is a binary structure that contains a data payload, and associated type information. Web NFC supports the following NFC Forum standardized record types: empty, text, URL, smart poster, MIME type, absolute URL, external type, unknown, and local type.

<figure><img src="https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format" alt="Diagram of an NDEF message" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/50clBWSJbKkyumsxrioB.png?auto=format&amp;w=1600 1600w" width="800" height="243" /><figcaption>Diagram of an NDEF message</figcaption></figure>### Scan NFC tags <a href="#scan" class="w-headline-link">#</a>

To scan NFC tags, first instantiate a new `NDEFReader` object. Calling `scan()` returns a promise. The [user may be prompted](#security-and-permissions) if access was not previously granted. The promise will resolve if the following conditions are all met:

- User has allowed the website to interact with NFC devices when they tap their phone.
- The user's phone supports NFC.
- The user has enabled NFC on their phone.

Once the promise is resolved, incoming NDEF messages are available by subscribing to `reading` events via an event listener. You should also subscribe to `readingerror` events to be notified when incompatible NFC tags are in proximity.

    const ndef = new NDEFReader();
    ndef.scan().then(() => {
      console.log("Scan started successfully.");
      ndef.onreadingerror = () => {
        console.log("Cannot read data from the NFC tag. Try another one?");
      };
      ndef.onreading = event => {
        console.log("NDEF message read.");
      };
    }).catch(error => {
      console.log(`Error! Scan failed to start: ${error}.`);
    });

When an NFC tag is in proximity, a `NDEFReadingEvent` event is fired. It contains two properties unique to it:

- `serialNumber` represents the serial number of the device (.e.g 00-11-22-33-44-55-66), or an empty string if none is available.
- `message` represents the NDEF message stored in the NFC tag.

To read the content of the NDEF message, loop through `message.records` and process their `data` members [appropriately](https://w3c.github.io/web-nfc/#data-mapping) based on their `recordType`. The `data` member is exposed as a `DataView` as it allows handling cases where data is encoded in UTF-16.

    ndef.onreading = event => {
      const message = event.message;
      for (const record of message.records) {
        console.log("Record type:  " + record.recordType);
        console.log("MIME type:    " + record.mediaType);
        console.log("Record id:    " + record.id);
        switch (record.recordType) {
          case "text":
            // TODO: Read text record with record data, lang, and encoding.
            break;
          case "url":
            // TODO: Read URL record with record data.
            break;
          default:
            // TODO: Handle other records with record data.
        }
      }
    };

The [cookbook](#cookbook) contains many examples of how to read NDEF records based on their types.

### Write NFC tags <a href="#write" class="w-headline-link">#</a>

To write NFC tags, first instantiate a new `NDEFReader` object. Calling `write()` returns a promise. The [user may be prompted](#security-and-permissions) if access was not previously granted. At this point, an NDEF message is "prepared" and promise will resolve if the following conditions are all met:

- User has allowed the website to interact with NFC devices when they tap their phone.
- The user's phone supports NFC.
- The user has enabled NFC on their phone.
- User has tapped an NFC tag and an NDEF message has been successfully written.

To write text to an NFC tag, pass a string to the `write()` method.

    const ndef = new NDEFReader();
    ndef.write(
      "Hello World"
    ).then(() => {
      console.log("Message written.");
    }).catch(error => {
      console.log(`Write failed :-( try again: ${error}.`);
    });

To write a URL record to an NFC tag, pass a dictionary that represents an NDEF message to `write()`. In the example below, the NDEF message is a dictionary with a `records` key. Its value is an array of records - in this case, a URL record defined as an object with a `recordType` key set to `"url"` and a `data` key set to the URL string.

    const ndef = new NDEFReader();
    ndef.write({
      records: [{ recordType: "url", data: "https://w3c.github.io/web-nfc/" }]
    }).then(() => {
      console.log("Message written.");
    }).catch(error => {
      console.log(`Write failed :-( try again: ${error}.`);
    });

It is also possible to write multiple records to an NFC tag.

    const ndef = new NDEFReader();
    ndef.write({ records: [
        { recordType: "url", data: "https://w3c.github.io/web-nfc/" },
        { recordType: "url", data: "https://web.dev/nfc/" }
    ]}).then(() => {
      console.log("Message written.");
    }).catch(error => {
      console.log(`Write failed :-( try again: ${error}.`);
    });

The [cookbook](#cookbook) contains many examples of how to write other types of NDEF records.

If the NFC tag contains an NDEF message that is not meant to be overwritten, set the `overwrite` property to `false` in the options passed to the `write()` method. In that case, the returned promise will reject if an NDEF message is already stored in the NFC tag.

    const ndef = new NDEFReader();
    ndef.write("Writing data on an empty NFC tag is fun!", { overwrite: false })
    .then(() => {
      console.log("Message written.");
    }).catch(_ => {
      console.log(`Write failed :-( try again: ${error}.`);
    });

### Security and permissions <a href="#security-and-permissions" class="w-headline-link">#</a>

The Chrome team has designed and implemented Web NFC using the core principles defined in [Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/master/docs/security/permissions-for-powerful-web-platform-features.md), including user control, transparency, and ergonomics.

Because NFC expands the domain of information potentially available to malicious websites, the availability of NFC is restricted to maximize users' awareness and control over NFC use.

<figure><img src="https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format" alt="Web NFC user prompt" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/PjUcOk4zbtOFJLXfSeSD.png?auto=format&amp;w=1600 1600w" width="800" height="407" /><figcaption>Web NFC user prompt</figcaption></figure>Web NFC is only available to top-level frames and secure browsing contexts (HTTPS only). Origins must first request the `"nfc"` [permission](https://w3c.github.io/permissions/) while handling a user gesture (e.g a button click). The NDEFReader `scan()` and `write()` methods trigger a user prompt, if access was not previously granted.

      document.querySelector("#scanButton").onclick = async () => {
        const ndef = new NDEFReader();
        // Prompt user to allow website to interact with NFC devices.
        await ndef.scan();
        ndef.onreading = event => {
          // TODO: Handle incoming NDEF messages.
        };
      };

The combination of a user-initiated permission prompt and real-world, physical movement of bringing the device over a target NFC tag mirrors the chooser pattern found in the other file and device-access APIs.

To perform a scan or write, the web page must be visible when the user touches an NFC tag with their device. The browser uses haptic feedback to indicate a tap. Access to the NFC radio is blocked if the display is off or the device is locked. For non visible web pages, receiving and pushing NFC content are suspended, and resumed when a web page becomes visible again.

Thanks to the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API), it is possible to track when document visibility changes.

    document.onvisibilitychange = event => {
      if (document.hidden) {
        // All NFC operations are automatically suspended when document is hidden.
      } else {
        // All NFC operations are resumed, if needed.
      }
    };

## Cookbook <a href="#cookbook" class="w-headline-link">#</a>

Here's some code samples to get you started.

### Check for permission <a href="#check-for-permission" class="w-headline-link">#</a>

The [Permissions API](https://www.w3.org/TR/permissions/) allows checking whether the `"nfc"` permission was granted. This example shows how to scan NFC tags without user interaction if access was previously granted, or show a button otherwise. Note that the same mechanism works for writing NFC tags as it uses the same permission under the hood.

    const ndef = new NDEFReader();

    async function startScanning() {
      await ndef.scan();
      ndef.onreading = event => {
        /* handle NDEF messages */
      };
    }

    const nfcPermissionStatus = await navigator.permissions.query({ name: "nfc" });
    if (nfcPermissionStatus.state === "granted") {
      // NFC access was previously granted, so we can start NFC scanning now.
      startScanning();
    } else {
      // Show a "scan" button.
      document.querySelector("#scanButton").style.display = "block";
      document.querySelector("#scanButton").onclick = event => {
        // Prompt user to allow UA to send and receive info when they tap NFC devices.
        startScanning();
      };
    }

### Abort NFC operations <a href="#abort-nfc-operations" class="w-headline-link">#</a>

Using the `AbortController` primitive makes it easy to abort NFC operations. The example below shows you how to pass the `signal` of an `AbortController` through the options of NDEFReader `scan()` and `write()` methods and abort both NFC operations at the same time.

    const abortController = new AbortController();
    abortController.signal.onabort = event => {
      // All NFC operations have been aborted.
    };

    const ndef = new NDEFReader();
    await ndef.scan({ signal: abortController.signal });

    await ndef.write("Hello world", { signal: abortController.signal });

    document.querySelector("#abortButton").onclick = event => {
      abortController.abort();
    };

### Read and write a text record <a href="#read-and-write-a-text-record" class="w-headline-link">#</a>

The text record `data` can be decoded with a `TextDecoder` instantiated with the record `encoding` property. Note that the language of the text record is available through its `lang` property.

    function readTextRecord(record) {
      console.assert(record.recordType === "text");
      const textDecoder = new TextDecoder(record.encoding);
      console.log(`Text: ${textDecoder.decode(record.data)} (${record.lang})`);
    }

To write a simple text record, pass a string to the NDEFReader `write()` method.

    const ndef = new NDEFReader();
    await ndef.write("Hello World");

Text records are UTF-8 by default and assume the current document's language but both properties (`encoding` and `lang`) can be specified using the full syntax for creating a custom NDEF record.

    function a2utf16(string) {
      let result = new Uint16Array(string.length);
      for (let i = 0; i < string.length; i++) {
        result[i] = string.codePointAt(i);
      }
      return result;
    }

    const textRecord = {
      recordType: "text",
      lang: "fr",
      encoding: "utf-16",
      data: a2utf16("Bonjour, François !")
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [textRecord] });

### Read and write a URL record <a href="#read-and-write-a-url-record" class="w-headline-link">#</a>

Use `TextDecoder` to decode the record's `data`.

    function readUrlRecord(record) {
      console.assert(record.recordType === "url");
      const textDecoder = new TextDecoder();
      console.log(`URL: ${textDecoder.decode(record.data)}`);
    }

To write a URL record, pass an NDEF message dictionary to the NDEFReader `write()` method. The URL record contained in the NDEF message is defined as an object with a `recordType` key set to `"url"` and a `data` key set to the URL string.

    const urlRecord = {
      recordType: "url",
      data:"https://w3c.github.io/web-nfc/"
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [urlRecord] });

### Read and write a MIME type record <a href="#read-and-write-a-mime-type-record" class="w-headline-link">#</a>

The `mediaType` property of a MIME type record represents the MIME type of the NDEF record payload so that `data` can be properly decoded. For instance, use `JSON.parse` to decode JSON text and an Image element to decode image data.

    function readMimeRecord(record) {
      console.assert(record.recordType === "mime");
      if (record.mediaType === "application/json") {
        const textDecoder = new TextDecoder();
        console.log(`JSON: ${JSON.parse(decoder.decode(record.data))}`);
      }
      else if (record.mediaType.startsWith('image/')) {
        const blob = new Blob([record.data], { type: record.mediaType });
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
      }
      else {
        // TODO: Handle other MIME types.
      }
    }

To write a MIME type record, pass an NDEF message dictionary to the NDEFReader `write()` method. The MIME type record contained in the NDEF message is defined as an object with a `recordType` key set to `"mime"`, a `mediaType` key set to the actual MIME type of the content, and a `data` key set to an object that can be either an `ArrayBuffer` or provides a view on to an `ArrayBuffer` (e.g. `Uint8Array`, `DataView`).

    const encoder = new TextEncoder();
    const data = {
      firstname: "François",
      lastname: "Beaufort"
    };
    const jsonRecord = {
      recordType: "mime",
      mediaType: "application/json",
      data: encoder.encode(JSON.stringify(data))
    };

    const imageRecord = {
      recordType: "mime",
      mediaType: "image/png",
      data: await (await fetch("icon1.png")).arrayBuffer()
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [jsonRecord, imageRecord] });

### Read and write an absolute-URL record <a href="#read-and-write-an-absolute-url-record" class="w-headline-link">#</a>

The absolute-URL record `data` can be decoded with a simple `TextDecoder`.

    function readAbsoluteUrlRecord(record) {
      console.assert(record.recordType === "absolute-url");
      const textDecoder = new TextDecoder();
      console.log(`Absolute URL: ${textDecoder.decode(record.data)}`);
    }

To write an absolute URL record, pass an NDEF message dictionary to the NDEFReader `write()` method. The absolute-URL record contained in the NDEF message is defined as an object with a `recordType` key set to `"absolute-url"` and a `data` key set to the URL string.

    const absoluteUrlRecord = {
      recordType: "absolute-url",
      data:"https://w3c.github.io/web-nfc/"
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [absoluteUrlRecord] });

### Read and write a smart poster record <a href="#read-and-write-a-smart-poster-record" class="w-headline-link">#</a>

A smart poster record (used in magazine advertisements, fliers, billboards, etc.), describes some web content as an NDEF record that contains an NDEF message as its payload. Call `record.toRecords()` to transform `data` to a list of records contained in the smart poster record. It should have a URL record, a text record for the title, a MIME type record for the image, and some [custom local type records](https://w3c.github.io/web-nfc/#smart-poster-record) such as `":t"`, `":act"`, and `":s"` respectively for the type, action, and size of the smart poster record.

Local type records are unique only within the local context of the containing NDEF record. Use them when the meaning of the types doesn't matter outside of the local context of the containing record and when storage usage is a hard constraint. Local type record names always start with `:` in Web NFC (e.g. `":t"`, `":s"`, `":act"`). This is to differentiate a text record from a local type text record for instance.

    function readSmartPosterRecord(smartPosterRecord) {
      console.assert(record.recordType === "smart-poster");
      let action, text, url;

      for (const record of smartPosterRecord.toRecords()) {
        if (record.recordType == "text") {
          const decoder = new TextDecoder(record.encoding);
          text = decoder.decode(record.data);
        } else if (record.recordType == "url") {
          const decoder = new TextDecoder();
          url = decoder.decode(record.data);
        } else if (record.recordType == ":act") {
          action = record.data.getUint8(0);
        } else {
          // TODO: Handle other type of records such as `:t`, `:s`.
        }
      }

      switch (action) {
        case 0:
          // Do the action
          break;
        case 1:
          // Save for later
          break;
        case 2:
          // Open for editing
          break;
      }
    }

To write a smart poster record, pass an NDEF message to the NDEFReader `write()` method. The smart poster record contained in the NDEF message is defined as an object with a `recordType` key set to `"smart-poster"` and a `data` key set to an object that represents (once again) an NDEF message contained in the smart poster record.

    const encoder = new TextEncoder();
    const smartPosterRecord = {
      recordType: "smart-poster",
      data: {
        records: [
          {
            recordType: "url", // URL record for smart poster content
            data: "https://my.org/content/19911"
          },
          {
            recordType: "text", // title record for smart poster content
            data: "Funny dance"
          },
          {
            recordType: ":t", // type record, a local type to smart poster
            data: encoder.encode("image/gif") // MIME type of smart poster content
          },
          {
            recordType: ":s", // size record, a local type to smart poster
            data: new Uint32Array([4096]) // byte size of smart poster content
          },
          {
            recordType: ":act", // action record, a local type to smart poster
            // do the action, in this case open in the browser
            data: new Uint8Array([0])
          },
          {
            recordType: "mime", // icon record, a MIME type record
            mediaType: "image/png",
            data: await (await fetch("icon1.png")).arrayBuffer()
          },
          {
            recordType: "mime", // another icon record
            mediaType: "image/jpg",
            data: await (await fetch("icon2.jpg")).arrayBuffer()
          }
        ]
      }
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [smartPosterRecord] });

### Read and write an external type record <a href="#read-and-write-an-external-type-record" class="w-headline-link">#</a>

To create application defined records, use external type records. These may contain an NDEF message as payload that is accessible with `toRecords()`. Their name contains the domain name of the issuing organization, a colon and a type name that is at least one character long, for instance `"example.com:foo"`.

    function readExternalTypeRecord(externalTypeRecord) {
      for (const record of externalTypeRecord.toRecords()) {
        if (record.recordType == "text") {
          const decoder = new TextDecoder(record.encoding);
          console.log(`Text: ${textDecoder.decode(record.data)} (${record.lang})`);
        } else if (record.recordType == "url") {
          const decoder = new TextDecoder();
          console.log(`URL: ${decoder.decode(record.data)}`);
        } else {
          // TODO: Handle other type of records.
        }
      }
    }

To write an external type record, pass an NDEF message dictionary to the NDEFReader `write()` method. The external type record contained in the NDEF message is defined as an object with a `recordType` key set to the name of the external type and a `data` key set to an object that represents an NDEF message contained in the external type record. Note that the `data` key can also be either an `ArrayBuffer` or provides a view on to an `ArrayBuffer` (e.g. `Uint8Array`, `DataView`).

    const externalTypeRecord = {
      recordType: "example.game:a",
      data: {
        records: [
          {
            recordType: "url",
            data: "https://example.game/42"
          },
          {
            recordType: "text",
            data: "Game context given here"
          },
          {
            recordType: "mime",
            mediaType: "image/png",
            data: await (await fetch("image.png")).arrayBuffer()
          }
        ]
      }
    };

    const ndef = new NDEFReader();
    ndef.write({ records: [externalTypeRecord] });

### Read and write an empty record <a href="#read-and-write-an-empty-record" class="w-headline-link">#</a>

An empty record has no payload.

To write an empty record, pass an NDEF message dictionary to the NDEFReader `write()` method. The empty record contained in the NDEF message is defined as an object with a `recordType` key set to `"empty"`.

    const emptyRecord = {
      recordType: "empty"
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [emptyRecord] });

## Browser support <a href="#browser-support" class="w-headline-link">#</a>

Web NFC is available on Android in Chrome 89.

## Dev Tips <a href="#dev-tips" class="w-headline-link">#</a>

Here's a list of things I wish I had known when I started playing with Web NFC:

- Android handles NFC tags at the OS-level before Web NFC is operational.
- You can find an NFC icon on [material.io](https://material.io/resources/icons/?icon=nfc&style=baseline).
- Use NDEF record `id` to easily identifying a record when needed.
- An unformatted NFC tag that supports NDEF contains a single record of the empty type.
- Writing an [android application record](https://developer.android.com/guide/topics/connectivity/nfc/nfc#aar) is easy, as shown below.

<!-- -->

    const encoder = new TextEncoder();
    const aarRecord = {
      recordType: "android.com:pkg",
      data: encoder.encode("com.example.myapp")
    };

    const ndef = new NDEFReader();
    await ndef.write({ records: [aarRecord] });

## Demos <a href="#demos" class="w-headline-link">#</a>

Try out the [official sample](https://googlechrome.github.io/samples/web-nfc/) and check out some cool Web NFC demos:

- [Cards demo](https://web-nfc-demo.glitch.me)
- [Grocery Demo](https://kenchris.github.io/webnfc-groceries)
- [Intel RSP Sensor NFC](https://kenchris.github.io/webnfc-rsp/)
- [Media MEMO](https://webnfc-media-memo.netlify.com/)

Web NFC cards demo at Chrome Dev Summit 2019

## Feedback <a href="#feedback" class="w-headline-link">#</a>

The [Web NFC Community Group](https://www.w3.org/community/web-nfc/) and the Chrome team would love to hear about your thoughts and experiences with Web NFC.

### Tell us about the API design <a href="#tell-us-about-the-api-design" class="w-headline-link">#</a>

Is there something about the API that doesn't work as expected? Or are there missing methods or properties that you need to implement your idea?

File a spec issue on the [Web NFC GitHub repo](https://github.com/w3c/web-nfc/issues) or add your thoughts to an existing issue.

### Report a problem with the implementation <a href="#report-a-problem-with-the-implementation" class="w-headline-link">#</a>

Did you find a bug with Chrome's implementation? Or is the implementation different from the spec?

File a bug at [https://new.crbug.com](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ENFC). Be sure to include as much detail as you can, provide simple instructions for reproducing the bug, and have _Components_ set to `Blink>NFC`. [Glitch](https://glitch.com) works great for sharing quick and easy repros.

### Show support <a href="#show-support" class="w-headline-link">#</a>

Are you planning to use Web NFC? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/chromiumdev) using the hashtag [`#WebNFC`](https://twitter.com/search?q=%23WebNFC&src=typed_query&f=live) and let us know where and how you're using it.

## Helpful links <a href="#helpful" class="w-headline-link">#</a>

- [Specification](https://w3c.github.io/web-nfc/)
- [Web NFC Demo](https://web-nfc-demo.glitch.me/) | [Web NFC Demo source](https://glitch.com/edit/#!/web-nfc-demo?path=script.js:1:0)
- [Tracking bug](https://bugs.chromium.org/p/chromium/issues/detail?id=520391)
- [ChromeStatus.com entry](https://www.chromestatus.com/feature/6261030015467520)
- Blink Component: [`Blink>NFC`](https://chromestatus.com/features#component%3ABlink%3ENFC)

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Big thanks to the [folks at Intel](https://github.com/w3c/web-nfc/graphs/contributors) for implementing Web NFC. Google Chrome depends on a community of committers working together to move the Chromium project forward. Not every Chromium committer is a Googler, and these contributors deserve special recognition!

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=webnfc), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bwebnfc%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/nfc/index.md)

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
