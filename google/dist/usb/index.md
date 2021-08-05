<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format" alt="A photo of an Arduino Micro board" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/hhnhxiNuRWMfGqy4NSaH.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#access-usb-devices-on-the-web" class="w-toc__header--link">Access USB Devices on the Web</a>

- [Before I start](#before-i-start)
- [Available for origin trials](#available-for-origin-trials)
- [Privacy and security](#privacy-and-security)
- [HTTPS only](#https-only)
- [User gesture required](#user-gesture-required)
- [Feature Policy](#feature-policy)
- [Let's start coding](#let's-start-coding)
- [Get access to USB devices](#get-access-to-usb-devices)
- [Talk to an Arduino USB board](#talk-to-an-arduino-usb-board)
- [I want more](#i-want-more)
- [Tips](#tips)
- [Resources](#resources)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Access USB Devices on the Web

The WebUSB API makes USB safer and easier to use by bringing it to the Web.

Mar 30, 2016 <span class="w-author__separator">•</span> Updated Feb 23, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

If I said plainly and simply "USB", there is a good chance that you will immediately think of keyboards, mice, audio, video, and storage devices. You're right but you'll find other kinds of Universal Serial Bus (USB) devices out there.

These non-standardized USB devices require hardware vendors to write platform-specific drivers and SDKs in order for you (the developer) to take advantage of them. Sadly this platform-specific code has historically prevented these devices from being used by the Web. And that's one of the reasons the WebUSB API has been created: to provide a way to expose USB device services to the Web. With this API, hardware manufacturers will be able to build cross-platform JavaScript SDKs for their devices. But most importantly this will **make USB safer and easier to use by bringing it to the Web**.

Let's see the behavior you could expect with the WebUSB API:

1.  Buy a USB device.
2.  Plug it into your computer. A notification appears right away, with the right website to go to for this device.
3.  Click the notification. The website is there and ready to use!
4.  Click to connect and a USB device chooser shows up in Chrome where you can pick your device.

Tada!

What would this procedure be like without the WebUSB API?

1.  Install a platform-specific application.
2.  If it's even supported on my operating system, verify that I've downloaded the right thing.
3.  Install the thing. If you're lucky, you'll get no scary OS prompts or popups warning you about installing drivers/applications from the internet. If you're unlucky, the installed drivers or applications malfunction and harm your computer. (Remember, the web is built to [contain malfunctioning websites](https://www.youtube.com/watch?v=29e0CtgXZSI)).
4.  If you only use the feature once, the code stays on your computer until you think to remove it. (On the Web, the space for unused is eventually reclaimed.)

## Before I start <a href="#before-i-start" class="w-headline-link">#</a>

This article assumes you have some basic knowledge of how USB works. If not, I recommend reading [USB in a NutShell](http://www.beyondlogic.org/usbnutshell). For background information about USB, check out the [official USB specifications](https://www.usb.org/).

The [WebUSB API](https://wicg.github.io/webusb/) is available in Chrome 61.

### Available for origin trials <a href="#available-for-origin-trials" class="w-headline-link">#</a>

In order to get as much feedback as possible from developers using the WebUSB API in the field, we've previously added this feature in Chrome 54 and Chrome 57 as an [origin trial](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md).

The latest trial has successfully ended in September 2017.

## Privacy and security <a href="#privacy-and-security" class="w-headline-link">#</a>

### HTTPS only <a href="#https-only" class="w-headline-link">#</a>

Because of this feature's power, it only works on [secure contexts](https://w3c.github.io/webappsec/specs/powerfulfeatures/#intro). This means you'll need to build with [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) in mind.

### User gesture required <a href="#user-gesture-required" class="w-headline-link">#</a>

As a security precaution, `navigator.usb.requestDevice()` may only be called through a user gesture such as a touch or mouse click.

### Feature Policy <a href="#feature-policy" class="w-headline-link">#</a>

A [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) is a mechanism that allows developers to selectively enable and disable various browser features and APIs. It can be defined via an HTTP header and/or an iframe "allow" attribute.

You can define a feature policy that controls whether the usb attribute is exposed on the Navigator object, or in other words if you allow WebUSB.

Below is an example of a header policy where WebUSB is not allowed:

    Feature-Policy: fullscreen "*"; usb "none"; payment "self" https://payment.example.com

Below is another example of a container policy where USB is allowed:

    <iframe allowpaymentrequest allow="usb; fullscreen"></iframe>

## Let's start coding <a href="#let&#39;s-start-coding" class="w-headline-link">#</a>

The WebUSB API relies heavily on JavaScript [Promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise). If you're not familiar with them, check out this great [Promises tutorial](/promises). One more thing, `() => {}` are simply ECMAScript 2015 [Arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Get access to USB devices <a href="#get-access-to-usb-devices" class="w-headline-link">#</a>

You can either prompt the user to select a single connected USB device using `navigator.usb.requestDevice()` or call `navigator.usb.getDevices()` to get a list of all connected USB devices the origin has access to.

The `navigator.usb.requestDevice()` function takes a mandatory JavaScript object that defines `filters`. These filters are used to match any USB device with the given vendor (`vendorId`) and, optionally, product (`productId`) identifiers. The `classCode`, `protocolCode`, `serialNumber`, and `subclassCode` keys can also be defined there as well.

<figure><img src="https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format" alt="USB device user prompt." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KIbPwUfEqgZZLxugxBOY.png?auto=format&amp;w=1600 1600w" width="800" height="533" /><figcaption>USB device user prompt.</figcaption></figure>For instance, here's how to get access to a connected Arduino device configured to allow the origin.

    navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] })
    .then(device => {
      console.log(device.productName);      // "Arduino Micro"
      console.log(device.manufacturerName); // "Arduino LLC"
    })
    .catch(error => { console.error(error); });

Before you ask, I didn't magically come up with this `0x2341` hexadecimal number. I simply searched for the word "Arduino" in this [List of USB ID's](http://www.linux-usb.org/usb.ids).

The USB `device` returned in the fulfilled promise above has some basic, yet important information about the device such as the supported USB version, maximum packet size, vendor, and product IDs, the number of possible configurations the device can have. Basically it contains all fields in the [device USB Descriptor](http://www.beyondlogic.org/usbnutshell/usb5.shtml#DeviceDescriptors).

By the way, if a USB device announces its [support for WebUSB](https://wicg.github.io/webusb/#webusb-platform-capability-descriptor), as well as defining a landing page URL, Chrome will show a persistent notification when the USB device is plugged in. Clicking this notification will open the landing page.

<figure><img src="https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format" alt="WebUSB notification." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/1gRIz2wY4LYofeFq5cc3.png?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>WebUSB notification.</figcaption></figure>From there, you can simply call `navigator.usb.getDevices()` and access your Arduino device as shown below.

    navigator.usb.getDevices().then(devices => {
      devices.forEach(device => {
        console.log(device.productName);      // "Arduino Micro"
        console.log(device.manufacturerName); // "Arduino LLC"
      });
    })

### Talk to an Arduino USB board <a href="#talk-to-an-arduino-usb-board" class="w-headline-link">#</a>

Okay, now let's see how easy it is to communicate from a WebUSB compatible Arduino board over the USB port. Check out instructions at <https://github.com/webusb/arduino> to WebUSB-enable your [sketches](http://www.arduino.cc/en/Tutorial/Sketch).

Don't worry, I'll cover all the WebUSB device methods mentioned below later in this article.

    let device;

    navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] })
    .then(selectedDevice => {
        device = selectedDevice;
        return device.open(); // Begin a session.
      })
    .then(() => device.selectConfiguration(1)) // Select configuration #1 for the device.
    .then(() => device.claimInterface(2)) // Request exclusive control over interface #2.
    .then(() => device.controlTransferOut({
        requestType: 'class',
        recipient: 'interface',
        request: 0x22,
        value: 0x01,
        index: 0x02})) // Ready to receive data
    .then(() => device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
    .then(result => {
      const decoder = new TextDecoder();
      console.log('Received: ' + decoder.decode(result.data));
    })
    .catch(error => { console.error(error); });

Please keep in mind that the WebUSB library I'm using here is just implementing one example protocol (based on the standard USB serial protocol) and that manufacturers can create any set and types of endpoints they wish. Control transfers are especially nice for small configuration commands as they get bus priority and have a well defined structure.

And here's the sketch that has been uploaded to the Arduino board.

    // Third-party WebUSB Arduino library
    #include <WebUSB.h>

    WebUSB WebUSBSerial(1 /* https:// */, "webusb.github.io/arduino/demos");

    #define Serial WebUSBSerial

    void setup() {
      Serial.begin(9600);
      while (!Serial) {
        ; // Wait for serial port to connect.
      }
      Serial.write("WebUSB FTW!");
      Serial.flush();
    }

    void loop() {
      // Nothing here for now.
    }

The third-party [WebUSB Arduino library](https://github.com/webusb/arduino/tree/gh-pages/library/WebUSB) used in the sample code above does basically two things:

- The device acts as a WebUSB device enabling Chrome to read the [landing page URL](https://wicg.github.io/webusb/#webusb-platform-capability-descriptor).
- It exposes a WebUSB Serial API that you may use to override the default one.

Look at the JavaScript code again. Once I get the `device` picked by the user, `device.open()` runs all platform-specific steps to start a session with the USB device. Then, I have to select an available USB Configuration with `device.selectConfiguration()`. Remember that a configuration specifies how the device is powered, its maximum power consumption and its number of interfaces. Speaking of interfaces, I also need to request exclusive access with `device.claimInterface()` since data can only be transferred to an interface or associated endpoints when the interface is claimed. Finally calling `device.controlTransferOut()` is needed to set up the Arduino device with the appropriate commands to communicate through the WebUSB Serial API.

From there, `device.transferIn()` performs a bulk transfer onto the device to inform it that the host is ready to receive bulk data. Then, the promise is fulfilled with a `result` object containing a [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) `data` that has to be parsed appropriately.

If you're familiar with USB, all of this should look pretty familiar.

### I want more <a href="#i-want-more" class="w-headline-link">#</a>

The WebUSB API lets you interact with the all USB transfer/endpoint types:

- CONTROL transfers, used to send or receive configuration or command parameters to a USB device, are handled with `controlTransferIn(setup, length)` and `controlTransferOut(setup, data)`.
- INTERRUPT transfers, used for a small amount of time sensitive data, are handled with the same methods as BULK transfers with `transferIn(endpointNumber, length)` and `transferOut(endpointNumber, data)`.
- ISOCHRONOUS transfers, used for streams of data like video and sound, are handled with `isochronousTransferIn(endpointNumber, packetLengths)` and `isochronousTransferOut(endpointNumber, data, packetLengths)`.
- BULK transfers, used to transfer a large amount of non-time-sensitive data in a reliable way, are handled with `transferIn(endpointNumber, length)` and `transferOut(endpointNumber, data)`.

You may also want to have a look at Mike Tsao's [WebLight project](https://github.com/sowbug/weblight) which provides a ground-up example of building a USB-controlled LED device designed for the WebUSB API (not using an Arduino here). You'll find hardware, software, and firmware.

## Tips <a href="#tips" class="w-headline-link">#</a>

Debugging USB in Chrome is easier with the internal page `about://device-log` where you can see all USB device related events in one single place.

<figure><img src="https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format" alt="Device log page in Chrome for debugging the WebUSB API." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/ssq2mMZmxpWtALortfZx.png?auto=format&amp;w=1600 1600w" width="800" height="442" /><figcaption>Device log page in Chrome for debugging the WebUSB API.</figcaption></figure>The internal page `about://usb-internals` also comes in handy and allows you to simulate connection and disconnection of virtual WebUSB devices. This is be useful for doing UI testing without for real hardware.

<figure><img src="https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format" alt="Internal page in Chrome for debugging the WebUSB API." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KB5z4p7fZRsvkfhVTNkb.png?auto=format&amp;w=1600 1600w" width="800" height="294" /><figcaption>Internal page in Chrome for debugging the WebUSB API.</figcaption></figure>On most Linux systems, USB devices are mapped with read-only permissions by default. To allow Chrome to open a USB device, you will need to add a new [udev rule](https://www.freedesktop.org/software/systemd/man/udev.html). Create a file at `/etc/udev/rules.d/50-yourdevicename.rules` with the following content:

    SUBSYSTEM=="usb", ATTR{idVendor}=="[yourdevicevendor]", MODE="0664", GROUP="plugdev"

where `[yourdevicevendor]` is `2341` if your device is an Arduino for instance. `ATTR{idProduct}` can also be added for a more specific rule. Make sure your `user` is a [member](https://wiki.debian.org/SystemGroups) of the `plugdev` group. Then, just reconnect your device.

Microsoft OS 2.0 Descriptors used by the Arduino examples only work on Windows 8.1 and later. Without that Windows support still requires manual installation of an INF file.

## Resources <a href="#resources" class="w-headline-link">#</a>

- Stack Overflow: <https://stackoverflow.com/questions/tagged/webusb>
- WebUSB API Spec: [http://wicg.github.io/webusb/](https://wicg.github.io/webusb/)
- Chrome Feature Status: <https://www.chromestatus.com/feature/5651917954875392>
- Spec Issues: <https://github.com/WICG/webusb/issues>
- Implementation Bugs: <http://crbug.com?q=component:Blink%3EUSB>
- WebUSB ❤ ️Arduino: <https://github.com/webusb/arduino>
- IRC: [\#webusb](irc://irc.w3.org:6665/#webusb) on W3C's IRC
- WICG Mailing list: <https://lists.w3.org/Archives/Public/public-wicg/>
- WebLight project: <https://github.com/sowbug/weblight>

Send a tweet to \[@ChromiumDev\]\[cr-dev-twitter\] using the hashtag [`#WebUSB`](https://twitter.com/search?q=%23WebUSB&src=typed_query&f=live) and let us know where and how you're using it.

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [Joe Medley](https://github.com/jpmedley) for reviewing this article.

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=webusb), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bwebusb%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Feb 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/usb/index.md)

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
