<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format" alt="A Bluetooth chip on a coin" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/CME5IVhdn0pngs7jAlFX.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#communicating-with-bluetooth-devices-over-javascript" class="w-toc__header--link">Communicating with Bluetooth devices over JavaScript</a>

- [Before we start](#before-we-start)
- [Available for origin trials](#available-for-origin-trials)
- [Security requirements](#security-requirements)
- [HTTPS only](#https-only)
- [User gesture required](#user-gesture-required)
- [Get into the code](#get-into-the-code)
- [Request Bluetooth devices](#request)
- [Connect to a Bluetooth device](#connect)
- [Read a Bluetooth Characteristic](#read)
- [Write to a Bluetooth Characteristic](#write)
- [Receive GATT notifications](#notifications)
- [Disconnect from a Bluetooth Device](#disconnect)
- [Read and write to Bluetooth descriptors](#descriptors)
- [Samples, demos and codelabs](#samples-demos-and-codelabs)
- [Beginner](#beginner)
- [Combining multiple operations](#combining-multiple-operations)
- [Libraries](#libraries)
- [Tools](#tools)
- [Tips](#tips)
- [What's next](#what's-next)
- [Show support for the API](#show-support-for-the-api)
- [Resources](#resources)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Communicating with Bluetooth devices over JavaScript

The Web Bluetooth API allows websites to communicate with Bluetooth devices.

Jul 21, 2015 <span class="w-author__separator">•</span> Updated May 7, 2021

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="François Beaufort" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/mXjY3z3JmrispGtu9yn6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/beaufortfrancois/)

<a href="/authors/beaufortfrancois/" class="w-author__name-link">François Beaufort</a>

- <a href="https://github.com/beaufortfrancois" class="w-author__link">GitHub</a>

What if I told you websites could communicate with nearby Bluetooth devices in a secure and privacy-preserving way? This way, heart rate monitors, singing lightbulbs, and even [turtles](https://www.youtube.com/watch?v=1LV1Fk5ZXwA) could interact directly with a website.

Until now, the ability to interact with Bluetooth devices has been possible only for platform-specific apps. The Web Bluetooth API aims to change this and brings it to web browsers as well.

## Before we start <a href="#before-we-start" class="w-headline-link">#</a>

This article assumes you have some basic knowledge of how Bluetooth Low Energy (BLE) and the [Generic Attribute Profile](https://www.bluetooth.com/specifications/gatt/) (GATT) work.

Even though the [Web Bluetooth API specification](https://webbluetoothcg.github.io/web-bluetooth/) is not finalized yet, the spec authors are actively looking for enthusiastic developers to try out this API and give [feedback on the spec](https://github.com/WebBluetoothCG/web-bluetooth/issues) and [feedback on the implementation](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EBluetooth).

A subset of the Web Bluetooth API is available in Chrome OS, Chrome for Android 6.0, Mac (Chrome 56) and Windows 10 (Chrome 70). This means you should be able to [request](#request) and [connect to](#connect) nearby Bluetooth Low Energy devices, [read](#read)/[write](#write) Bluetooth characteristics, [receive GATT Notifications](#notifications), know when a [Bluetooth device gets disconnected](#disconnect), and even [read and write to Bluetooth descriptors](#descriptors). See MDN's [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#Browser_compatibility) table for more information.

For Linux and earlier versions of Windows, enable the `#experimental-web-platform-features` flag in `about://flags`.

### Available for origin trials <a href="#available-for-origin-trials" class="w-headline-link">#</a>

In order to get as much feedback as possible from developers using the Web Bluetooth API in the field, Chrome has previously added this feature in Chrome 53 as an [origin trial](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md) for Chrome OS, Android, and Mac.

The trial has successfully ended in January 2017.

## Security requirements <a href="#security-requirements" class="w-headline-link">#</a>

To understand the security tradeoffs, I recommend the [Web Bluetooth Security Model](https://medium.com/@jyasskin/the-web-bluetooth-security-model-666b4e7eed2) post from Jeffrey Yasskin, a software engineer on the Chrome team, working on the Web Bluetooth API specification.

### HTTPS only <a href="#https-only" class="w-headline-link">#</a>

Because this experimental API is a powerful new feature added to the web, it is made available only to [secure contexts](https://w3c.github.io/webappsec-secure-contexts/#intro). This means you'll need to build with [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) in mind.

### User gesture required <a href="#user-gesture-required" class="w-headline-link">#</a>

As a security feature, discovering Bluetooth devices with `navigator.bluetooth.requestDevice` must be triggered by [a user gesture](https://html.spec.whatwg.org/multipage/interaction.html#activation) such as a touch or a mouse click. We're talking about listening to [`pointerup`](https://developers.google.com/web/updates/2016/10/pointer-events), `click`, and `touchend` events.

    button.addEventListener('pointerup', function(event) {
      // Call navigator.bluetooth.requestDevice
    });

## Get into the code <a href="#get-into-the-code" class="w-headline-link">#</a>

The Web Bluetooth API relies heavily on JavaScript [Promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise). If you're not familiar with them, check out this great [Promises tutorial](/promises). One more thing, `() => {}` are simply ECMAScript 2015 [Arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Request Bluetooth devices <a href="#request" class="w-headline-link">#</a>

This version of the Web Bluetooth API specification allows websites, running in the Central role, to connect to remote GATT Servers over a BLE connection. It supports communication among devices that implement Bluetooth 4.0 or later.

When a website requests access to nearby devices using `navigator.bluetooth.requestDevice`, the browser prompts user with a device chooser where they can pick one device or simply cancel the request.

[Bluetooth device user prompt.](https://webbluetoothcg.github.io/demos/playbulb-candle/)

The `navigator.bluetooth.requestDevice()` function takes a mandatory object that defines filters. These filters are used to return only devices that match some advertised Bluetooth GATT services and/or the device name.

#### Services filter <a href="#services-filter" class="w-headline-link">#</a>

For instance, to request Bluetooth devices advertising the [Bluetooth GATT Battery Service](https://www.bluetooth.com/specifications/gatt/):

    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });

If your Bluetooth GATT Service is not on the list of [the standardized Bluetooth GATT services](https://www.bluetooth.com/specifications/assigned-numbers/) though, you may provide either the full Bluetooth UUID or a short 16- or 32-bit form.

    navigator.bluetooth.requestDevice({
      filters: [{
        services: [0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']
      }]
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });

#### Name filter <a href="#name-filter" class="w-headline-link">#</a>

You can also request Bluetooth devices based on the device name being advertised with the `name` filters key, or even a prefix of this name with the `namePrefix` filters key. Note that in this case, you will also need to define the `optionalServices` key to be able to access any services not included in a service filter. If you don't, you'll get an error later when trying to access them.

    navigator.bluetooth.requestDevice({
      filters: [{
        name: 'Francois robot'
      }],
      optionalServices: ['battery_service'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });

#### Manufacturer data filter <a href="#manufacturer-data-filter" class="w-headline-link">#</a>

It is also possible to request Bluetooth devices based on the manufacturer specific data being advertised with the `manufacturerData` filters key. This key is an array of objects with a mandatory [Bluetooth company identifier](https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers/) key named `companyIdentifier`. You can also provide a data prefix that filters manufacturer data from Bluetooth devices that start with it. Note that you will also need to define the `optionalServices` key to be able to access any services not included in a service filter. If you don't, you'll get an error later when trying to access them.

    // Filter Bluetooth devices from Google company with manufacturer data bytes
    // that start with [0x01, 0x02].
    navigator.bluetooth.requestDevice({
      filters: [{
        manufacturerData: [{
          companyIdentifier: 0x00e0,
          dataPrefix: new Uint8Array([0x01, 0x02])
        }]
      }],
      optionalServices: ['battery_service'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });

A mask can also be used with a data prefix to match some patterns in manufacturer data. Check out the [Bluetooth data filters explainer](https://github.com/WebBluetoothCG/web-bluetooth/blob/main/data-filters-explainer.md) to learn more.

At the time of writing, the `manufacturerData` filter key is available in Chrome 92. If backwards compatibility with older browsers is desired, you have to provide a fallback option as the manufacturer data filter is considered empty. See an [example](https://groups.google.com/a/chromium.org/g/blink-dev/c/5Id2LANtFko/m/5SIig7ktAgAJ).

#### No filters <a href="#no-filters" class="w-headline-link">#</a>

Finally, instead of `filters` you can use the `acceptAllDevices` key to show all nearby Bluetooth devices. You will also need to define the `optionalServices` key to be able to access some services. If you don't, you'll get an error later when trying to access them.

    navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });

**Caution**: This may result in a bunch of unrelated devices being shown in the chooser and energy being wasted as there are no filters. Use it with caution.

### Connect to a Bluetooth device <a href="#connect" class="w-headline-link">#</a>

So what do you do now that you have a `BluetoothDevice`? Let's connect to the Bluetooth remote GATT Server which holds the service and characteristic definitions.

    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
      // Human-readable name of the device.
      console.log(device.name);

      // Attempts to connect to remote GATT Server.
      return device.gatt.connect();
    })
    .then(server => { /* … */ })
    .catch(error => { console.error(error); });

### Read a Bluetooth Characteristic <a href="#read" class="w-headline-link">#</a>

Here we are connected to the GATT Server of the remote Bluetooth device. Now we want to get a Primary GATT Service and read a characteristic that belongs to this service. Let's try, for instance, to read the current charge level of the device's battery.

In the example below, `battery_level` is the [standardized Battery Level Characteristic](https://www.bluetooth.com/specifications/gatt/).

    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => device.gatt.connect())
    .then(server => {
      // Getting Battery Service…
      return server.getPrimaryService('battery_service');
    })
    .then(service => {
      // Getting Battery Level Characteristic…
      return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
      // Reading Battery Level…
      return characteristic.readValue();
    })
    .then(value => {
      console.log(`Battery percentage is ${value.getUint8(0)}`);
    })
    .catch(error => { console.error(error); });

If you use a custom Bluetooth GATT characteristic, you may provide either the full Bluetooth UUID or a short 16- or 32-bit form to `service.getCharacteristic`.

Note that you can also add a `characteristicvaluechanged` event listener on a characteristic to handle reading its value. Check out the [Read Characteristic Value Changed Sample](https://googlechrome.github.io/samples/web-bluetooth/read-characteristic-value-changed.html) to see how to optionally handle upcoming GATT notifications as well.

    …
    .then(characteristic => {
      // Set up event listener for when characteristic value changes.
      characteristic.addEventListener('characteristicvaluechanged',
                                      handleBatteryLevelChanged);
      // Reading Battery Level…
      return characteristic.readValue();
    })
    .catch(error => { console.error(error); });

    function handleBatteryLevelChanged(event) {
      const batteryLevel = event.target.value.getUint8(0);
      console.log('Battery percentage is ' + batteryLevel);
    }

### Write to a Bluetooth Characteristic <a href="#write" class="w-headline-link">#</a>

Writing to a Bluetooth GATT Characteristic is as easy as reading it. This time, let's use the Heart Rate Control Point to reset the value of the Energy Expended field to 0 on a heart rate monitor device.

I promise there is no magic here. It's all explained in the [Heart Rate Control Point Characteristic page](https://www.bluetooth.com/specifications/gatt/).

    navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] })
    .then(device => device.gatt.connect())
    .then(server => server.getPrimaryService('heart_rate'))
    .then(service => service.getCharacteristic('heart_rate_control_point'))
    .then(characteristic => {
      // Writing 1 is the signal to reset energy expended.
      const resetEnergyExpended = Uint8Array.of(1);
      return characteristic.writeValue(resetEnergyExpended);
    })
    .then(_ => {
      console.log('Energy expended has been reset.');
    })
    .catch(error => { console.error(error); });

### Receive GATT notifications <a href="#notifications" class="w-headline-link">#</a>

Now, let's see how to be notified when the [Heart Rate Measurement](https://www.bluetooth.com/specifications/gatt/) characteristic changes on the device:

    navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] })
    .then(device => device.gatt.connect())
    .then(server => server.getPrimaryService('heart_rate'))
    .then(service => service.getCharacteristic('heart_rate_measurement'))
    .then(characteristic => characteristic.startNotifications())
    .then(characteristic => {
      characteristic.addEventListener('characteristicvaluechanged',
                                      handleCharacteristicValueChanged);
      console.log('Notifications have been started.');
    })
    .catch(error => { console.error(error); });

    function handleCharacteristicValueChanged(event) {
      const value = event.target.value;
      console.log('Received ' + value);
      // TODO: Parse Heart Rate Measurement value.
      // See https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor/heartRateSensor.js
    }

The [Notifications Sample](https://googlechrome.github.io/samples/web-bluetooth/notifications.html) shows you to how to stop notifications with `stopNotifications()` and properly remove the added `characteristicvaluechanged` event listener.

### Disconnect from a Bluetooth Device <a href="#disconnect" class="w-headline-link">#</a>

To provide a better user experience, you may want to listen for disconnection events and invite the user to reconnect:

    navigator.bluetooth.requestDevice({ filters: [{ name: 'Francois robot' }] })
    .then(device => {
      // Set up event listener for when device gets disconnected.
      device.addEventListener('gattserverdisconnected', onDisconnected);

      // Attempts to connect to remote GATT Server.
      return device.gatt.connect();
    })
    .then(server => { /* … */ })
    .catch(error => { console.error(error); });

    function onDisconnected(event) {
      const device = event.target;
      console.log(`Device ${device.name} is disconnected.`);
    }

You can also call `device.gatt.disconnect()` to disconnect your web app from the Bluetooth device. This will trigger existing `gattserverdisconnected` event listeners. Note that it will NOT stop bluetooth device communication if another app is already communicating with the Bluetooth device. Check out the [Device Disconnect Sample](https://googlechrome.github.io/samples/web-bluetooth/device-disconnect.html) and the [Automatic Reconnect Sample](https://googlechrome.github.io/samples/web-bluetooth/automatic-reconnect.html) to dive deeper.

**Caution**: Bluetooth GATT attributes, services, characteristics, etc. are invalidated when a device disconnects. This means your code should always retrieve (through `getPrimaryService(s)`, `getCharacteristic(s)`, etc.) these attributes after reconnecting.

### Read and write to Bluetooth descriptors <a href="#descriptors" class="w-headline-link">#</a>

Bluetooth GATT descriptors are attributes that describe a characteristic value. You can read and write them to in a similar way to Bluetooth GATT characteristics.

Let's see for instance how to read the user description of the measurement interval of the device's health thermometer.

In the example below, `health_thermometer` is the [Health Thermometer service](https://www.bluetooth.com/specifications/gatt/), `measurement_interval` the [Measurement Interval characteristic](https://www.bluetooth.com/specifications/gatt/), and `gatt.characteristic_user_description` the [Characteristic User Description descriptor](https://www.bluetooth.com/specifications/assigned-numbers/).

    navigator.bluetooth.requestDevice({ filters: [{ services: ['health_thermometer'] }] })
    .then(device => device.gatt.connect())
    .then(server => server.getPrimaryService('health_thermometer'))
    .then(service => service.getCharacteristic('measurement_interval'))
    .then(characteristic => characteristic.getDescriptor('gatt.characteristic_user_description'))
    .then(descriptor => descriptor.readValue())
    .then(value => {
      const decoder = new TextDecoder('utf-8');
      console.log(`User Description: ${decoder.decode(value)}`);
    })
    .catch(error => { console.error(error); });

Now that we've read the user description of the measurement interval of the device's health thermometer, let's see how to update it and write a custom value.

    navigator.bluetooth.requestDevice({ filters: [{ services: ['health_thermometer'] }] })
    .then(device => device.gatt.connect())
    .then(server => server.getPrimaryService('health_thermometer'))
    .then(service => service.getCharacteristic('measurement_interval'))
    .then(characteristic => characteristic.getDescriptor('gatt.characteristic_user_description'))
    .then(descriptor => {
      const encoder = new TextEncoder('utf-8');
      const userDescription = encoder.encode('Defines the time between measurements.');
      return descriptor.writeValue(userDescription);
    })
    .catch(error => { console.error(error); });

## Samples, demos and codelabs <a href="#samples-demos-and-codelabs" class="w-headline-link">#</a>

All [Web Bluetooth samples](https://googlechrome.github.io/samples/web-bluetooth/index.html) below have been successfully tested. To enjoy these samples to their fullest, I recommend you install the [BLE Peripheral Simulator Android App](https://play.google.com/store/apps/details?id=io.github.webbluetoothcg.bletestperipheral) which simulates a BLE peripheral with a Battery Service, a Heart Rate Service, or a Health Thermometer Service.

### Beginner <a href="#beginner" class="w-headline-link">#</a>

- [Device Info](https://googlechrome.github.io/samples/web-bluetooth/device-info.html) - retrieve basic device information from a BLE Device.
- [Battery Level](https://googlechrome.github.io/samples/web-bluetooth/battery-level.html) - retrieve battery information from a BLE Device advertising Battery information.
- [Reset Energy](https://googlechrome.github.io/samples/web-bluetooth/reset-energy.html) - reset energy expended from a BLE Device advertising Heart Rate.
- [Characteristic Properties](https://googlechrome.github.io/samples/web-bluetooth/characteristic-properties.html) - display all properties of a specific characteristic from a BLE Device.
- [Notifications](https://googlechrome.github.io/samples/web-bluetooth/notifications.html) - start and stop characteristic notifications from a BLE Device.
- [Device Disconnect](https://googlechrome.github.io/samples/web-bluetooth/device-disconnect.html) - disconnect and get notified from a disconnection of a BLE Device after connecting to it.
- [Get Characteristics](https://googlechrome.github.io/samples/web-bluetooth/get-characteristics.html) - get all characteristics of an advertised service from a BLE Device.
- [Get Descriptors](https://googlechrome.github.io/samples/web-bluetooth/get-descriptors.html) - get all characteristics' descriptors of an advertised service from a BLE Device.
- [Manufacturer Data Filter](https://googlechrome.github.io/samples/web-bluetooth/manufacturer-data-filter.html) - retrieve basic device information from a BLE Device that matches manufacturer data.

### Combining multiple operations <a href="#combining-multiple-operations" class="w-headline-link">#</a>

- [GAP Characteristics](https://googlechrome.github.io/samples/web-bluetooth/gap-characteristics.html) - get all GAP characteristics of a BLE Device.
- [Device Information Characteristics](https://googlechrome.github.io/samples/web-bluetooth/device-information-characteristics.html) - get all Device Information characteristics of a BLE Device.
- [Link Loss](https://googlechrome.github.io/samples/web-bluetooth/link-loss.html) - set the Alert Level characteristic of a BLE Device (readValue & writeValue).
- [Discover Services & Characteristics](https://googlechrome.github.io/samples/web-bluetooth/discover-services-and-characteristics.html) - discover all accessible primary services and their characteristics from a BLE Device.
- [Automatic Reconnect](https://googlechrome.github.io/samples/web-bluetooth/automatic-reconnect.html) - reconnect to a disconnected BLE device using an exponential backoff algorithm.
- [Read Characteristic Value Changed](https://googlechrome.github.io/samples/web-bluetooth/read-characteristic-value-changed.html) - read battery level and be notified of changes from a BLE Device.
- [Read Descriptors](https://googlechrome.github.io/samples/web-bluetooth/read-descriptors.html) - read all characteristic's descriptors of a service from a BLE Device.
- [Write Descriptor](https://googlechrome.github.io/samples/web-bluetooth/write-descriptor.html) - write to the descriptor "Characteristic User Description" on a BLE Device.

Check out our [curated Web Bluetooth Demos](https://github.com/WebBluetoothCG/demos) and [official Web Bluetooth Codelabs](https://github.com/search?q=org%3Agooglecodelabs+bluetooth) as well.

## Libraries <a href="#libraries" class="w-headline-link">#</a>

- [web-bluetooth-utils](https://www.npmjs.com/package/web-bluetooth-utils) is a npm module that adds some convenience functions to the API.
- A Web Bluetooth API shim is available in [noble](https://github.com/sandeepmistry/noble), the most popular Node.js BLE central module. This allows you to webpack/browserify noble without the need for a WebSocket server or other plugins.
- [angular-web-bluetooth](https://github.com/manekinekko/angular-web-bluetooth) is a module for [Angular](https://angularjs.org) that abstracts away all the boilerplate needed to configure the Web Bluetooth API.

## Tools <a href="#tools" class="w-headline-link">#</a>

- [Get Started with Web Bluetooth](https://beaufortfrancois.github.io/sandbox/web-bluetooth/generator) is a simple Web App that will generate all the JavaScript boilerplate code to start interacting with a Bluetooth device. Enter a device name, a service, a characteristic, define its properties and you're good to go.
- If you're already a Bluetooth developer, the [Web Bluetooth Developer Studio Plugin](https://github.com/beaufortfrancois/sandbox/tree/gh-pages/web-bluetooth/bluetooth-developer-studio-plugin) will also generate the Web Bluetooth JavaScript code for your Bluetooth device.

## Tips <a href="#tips" class="w-headline-link">#</a>

A **Bluetooth Internals** page is available in Chrome at `about://bluetooth-internals` so that you can inspect everything about nearby Bluetooth devices: status, services, characteristics, and descriptors.

<figure><img src="https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format" alt="Internal page in Chrome for debugging Bluetooth devices." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/nPX2OfcQKwKtU9xBNhMe.jpg?auto=format&amp;w=1600 1600w" width="800" height="572" /><figcaption>Internal page in Chrome for debugging Bluetooth devices.</figcaption></figure>I also recommend checking out the official [How to file Web Bluetooth bugs](https://sites.google.com/a/chromium.org/dev/developers/how-tos/file-web-bluetooth-bugs) page as debugging Bluetooth can be hard sometimes.

## What's next <a href="#what&#39;s-next" class="w-headline-link">#</a>

Check the [browser and platform implementation status](https://github.com/WebBluetoothCG/web-bluetooth/blob/master/implementation-status.md) first to know which parts of the Web Bluetooth API are currently being implemented.

Though it's still incomplete, here's a sneak peek of what to expect in the near future:

- [Scanning for nearby BLE advertisements](https://github.com/WebBluetoothCG/web-bluetooth/pull/239) will happen with `navigator.bluetooth.requestLEScan()`.
- A new `serviceadded` event will track newly discovered Bluetooth GATT Services while `serviceremoved` event will track removed ones. A new `servicechanged` event will fire when any characteristic and/or descriptor gets added or removed from a Bluetooth GATT Service.

### Show support for the API <a href="#show-support-for-the-api" class="w-headline-link">#</a>

Are you planning to use the Web Bluetooth API? Your public support helps the Chrome team prioritize features and shows other browser vendors how critical it is to support them.

Send a tweet to [@ChromiumDev](https://twitter.com/ChromiumDev) using the hashtag [`#WebBluetooth`](https://twitter.com/search?q=%23WebBluetooth&src=typed_query&f=live) and let us know where and how you are using it.

## Resources <a href="#resources" class="w-headline-link">#</a>

- Stack Overflow: <https://stackoverflow.com/questions/tagged/web-bluetooth>
- Chrome Feature Status: <https://www.chromestatus.com/feature/5264933985976320>
- Chrome Implementation Bugs: <https://crbug.com/?q=component:Blink%3EBluetooth>
- Web Bluetooth Spec: <https://webbluetoothcg.github.io/web-bluetooth>
- Spec Issues: <https://github.com/WebBluetoothCG/web-bluetooth/issues>
- BLE Peripheral Simulator App: <https://github.com/WebBluetoothCG/ble-test-peripheral-android>

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

Thanks to [Kayce Basques](https://github.com/kaycebasques) for reviewing this article. Hero image by [SparkFun Electronics from Boulder, USA](<https://commons.wikimedia.org/wiki/File:Bluetooth_4.0_Module_-_BR-LE_4.0-S2A_(16804031059).jpg>).

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=web-bluetooth), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bweb-bluetooth%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: May 7, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/bluetooth/index.md)

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
