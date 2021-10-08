2012-09-17

{% Aside ‘caution’ %}

**Important:** Chrome will be removing support for Chrome Apps on all platforms. Chrome browser and the Chrome Web Store will continue to support extensions. [**Read the announcement**](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html) and learn more about [**migrating your app**](/apps/migration).

{% endAside %}

This document describes how to use the [USB API](usb) to communicate with USB devices. Some devices are not accessible through the USB API (see the [Caveats](#caveats) section below for details). Chrome Apps can also connect to [serial](serial) and [Bluetooth](bluetooth) devices.

{% Aside %}

**Samples:** For examples that illustrate how Chrome Apps can connect to hardware devices, see the [serial](https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/serial), [servo](https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/servo), and [usb](https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/usb) samples.

{% endAside %}

For background information about USB, see the official [USB specifications](http://www.usb.org/home).  
[*USB in a NutShell*](http://www.beyondlogic.org/usbnutshell/usb1.shtml) is a reasonable crash course that you may find helpful.

Manifest requirement {: \#manifest }
------------------------------------

The USB API requires the “usb” permission in the manifest file:

    "permissions": [
      "usb"
    ]

In addition, in order to prevent [finger-printing](http://en.wikipedia.org/wiki/Device_fingerprint), you must declare all the device types you want to access in the manifest file. Each type of USB device corresponds to a vendor id/product id (VID/PID) pair. You can use [usb.getDevices](/apps/usb#method-getDevices) to enumerate devices by their VID/PID pair.

You must declare the VID/PID pairs for each type of device you want to use under the `usbDevices` permission in your app’s manifest file, as shown in the example below:

    "permissions": [
      {
        "usbDevices": [
          {
            "vendorId": 123,
            "productId": 456
          }
        ]
      }
    ]

{% Aside %}

Note that only decimal numbers are allowed in JSON format. You cannot use hexadecimal numbers in these fields.

{% endAside %}

Since **Chrome 57**, the requirement for declaring all the device types in the app manifest is relaxed for apps running as Chrome OS [kiosk apps](apps/manifest/kiosk_enabled). For kiosk apps, you can use the `interfaceClass` permission property to request permission to access USB devices that:

-   implement a USB interface of a specific interface class
-   have a specific USB device class

For example, the following `usbDevices` permission would grant an app access to all USB devices that implement a printer interface (interface class code 7), and to USB hub devices (device class code 9):

    "permissions": [
      {
        "usbDevices": [
          {"interfaceClass": 7},
          {"interfaceClass": 9}
        ]
      }
    ]

For the list of acceptable `interfaceClass` values, see [USB Class Codes](http://www.usb.org/developers/defined_class).

The `interfaceClass` property can be combined with the `vendorId` property to get access only to USB devices from a specific vendor, as demonstrated by the following example:

    "permissions": [
      {
        "usbDevices": [
          {
            "vendorId": 123,
            "interfaceClass": 7
          }
        ]
      }
    ]

{% Aside %}

Note that `usbDevices` permissions with `interfaceClass` property have effect only when the app is running in kiosk session - outside a kiosk session these permissions will be ignored.

{% endAside %}

Finding a device {: \#finding\_device }
---------------------------------------

To determine whether one or more specific devices are connected to a user’s system, use the [usb.getDevices](/apps/usb#method-getDevices) method:

    chrome.usb.getDevices(enumerateDevicesOptions, callback);

<table><thead><tr class="header"><th>Parameter (type)</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>EnumerateDevicesOptions (object)</td><td>An object specifying both a <code>vendorId</code> (long) and <code>productId</code> (long) used to find the correct type of device on the bus. Your manifest must declare the <code>usbDevices</code> permission section listing all the <code>vendorId</code> and <code>deviceId</code> pairs your app wants to access.</td></tr><tr class="even"><td>callback (function)</td><td>Called when the device enumeration is finished. The callback will be executed with one parameter, an array of <code>Device</code> objects with three properties: <code>device</code>, <code>vendorId</code>, <code>productId</code>. The device property is a stable identifier for a connected device. It will not change until the device is unplugged. The detail of the identifier is opaque and subject to change. Do not rely on its current type.<br />
If no devices are found, the array will be empty.</td></tr></tbody></table>

Example:

    function onDeviceFound(devices) {
      this.devices=devices;
      if (devices) {
        if (devices.length > 0) {
          console.log("Device(s) found: "+devices.length);
        } else {
          console.log("Device could not be found");
        }
      } else {
        console.log("Permission denied.");
      }
    }

    chrome.usb.getDevices({"vendorId": vendorId, "productId": productId}, onDeviceFound);

Opening a device {: \#usb\_open }
---------------------------------

Once the `Device` objects are returned, you can open a device using usb.openDevice to obtain a connection handle. You can only communicate with USB devices using connection handles.

<table><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>device</td><td>Object received in <a href="/apps/usb#method-getDevices">usb.getDevices</a> callback.</td></tr><tr class="even"><td>data (arraybuffer)</td><td>Contains the data sent by the device if the transfer was inbound.</td></tr></tbody></table>

Example:

    var usbConnection = null;
    var onOpenCallback = function(connection) {
      if (connection) {
        usbConnection = connection;
        console.log("Device opened.");
      } else {
        console.log("Device failed to open.");
      }
    };

    chrome.usb.openDevice(device, onOpenCallback);

{% Aside %}

Not every device can be opened successfully. In general, operating systems lock down many types of USB interfaces (e.g. keyboards and mice, mass storage devices, webcams, etc.) and they cannot be claimed by user applications. On Linux (other than Chrome OS), once an interface of a device is locked down by the OS, the whole device is locked down (because all the interfaces shares the same device file), even if the other interfaces of the device can be used in theory. On Chrome OS, you can request access to unlocked interfaces using the [usb.requestAccess](/apps/usb#method-requestAccess) method. If permitted, the permission broker will unlock the device file for you.

{% endAside %}

To simplify the opening process, you can use the [usb.findDevices](/apps/usb#method-findDevices) method, which enumerates, requests access, and opens devices in one call:

    chrome.usb.findDevices({"vendorId": vendorId, "productId": productId, "interfaceId": interfaceId}, callback);

which is equivalent to:

    chrome.usb.getDevices({"vendorId": vendorId, "productId": productId}, function (devices) {
      if (!devices) {
        console.log("Error enumerating devices.");
        callback();
        return;
      }
      var connections = [], pendingAccessRequests = devices.length;
      devices.forEach(function (device) {
        chrome.usb.requestAccess(interfaceId, function () {
          // No need to check for errors at this point.
          // Nothing can be done if an error occurs anyway. You should always try
          // to open the device.
          chrome.usb.openDevices(device, function (connection) {
            if (connection) connections.push(connection);
            pendingAccessRequests--;
            if (pendingAccessRequests == 0) {
              callback(connections);
            }
          });
        });
      })
    });

USB transfers and receiving data from a device {: \#usb\_transfers }
--------------------------------------------------------------------

The USB protocol defines four types of transfers: [control](#control_transfers), [bulk](#bulk_transfers), [isochronous](#isochronous_transfers) and [interrupt](#interrupt_transfers). These transfers are described below.

Transfers can occur in both directions: device-to-host (inbound), and host-to-device (outbound). Due to the nature of the USB protocol, both inbound and outbound messages must be initiated by the host (the computer that runs the Chrome app). For inbound (device-to-host) messages, the host (initiated by your JavaScript code) sends a message flagged as “inbound” to the device. The details of the message depend on the device, but usually will have some identification of what you are requesting from it. The device then responds with the requested data. The device’s response is handled by Chrome and delivered asynchronously to the callback you specify in the transfer method. An outbound (host-to-device) message is similar, but the response doesn’t contain data returned from the device.

For each message from the device, the specified callback will receive an event object with the following properties:

<table><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>resultCode (integer)</td><td>0 is success; other values indicate failure. An error string can be<br />
read from <code>chrome.extension.lastError</code> when a failure is<br />
indicated.</td></tr><tr class="even"><td>data (arraybuffer)</td><td>Contains the data sent by the device if the transfer was inbound.</td></tr></tbody></table>

Example:

    var onTransferCallback = function(event) {
       if (event && event.resultCode === 0 && event.data) {
         console.log("got " + event.data.byteLength + " bytes");
       }
    };

    chrome.usb.bulkTransfer(connectionHandle, transferInfo, onTransferCallback);

CONTROL transfers {: \#control\_transfers }
-------------------------------------------

Control transfers are generally used to send or receive configuration or command parameters to a USB device. The controlTransfer method always sends to/reads from endpoint 0, and no claimInterface is required. The method is simple and receives three parameters:

    chrome.usb.controlTransfer(connectionHandle, transferInfo, transferCallback)

<table><thead><tr class="header"><th>Parameter (types)</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>connectionHandle</td><td>Object received in <a href="/apps/usb#method-openDevice">usb.openDevice</a> callback.</td></tr><tr class="even"><td>transferInfo</td><td>Parameter object with values from the table below. Check your USB device protocol specification for details.</td></tr><tr class="odd"><td>transferCallback()</td><td>Invoked when the transfer has completed.</td></tr></tbody></table>

Values for `transferInfo` object:

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>requestType (string)</td><td>“vendor”, “standard”, “class” or “reserved”.</td></tr><tr class="even"><td>recipient (string)</td><td>“device”, “interface”, “endpoint” or “other”.</td></tr><tr class="odd"><td>direction (string)</td><td>“in” or “out”. The “in” direction is used to notify the device that<br />
it should send information to the host. All communication on a USB<br />
bus is host-initiated, so use an “in” transfer to allow a device to<br />
send information back.</td></tr><tr class="even"><td>request (integer)</td><td>Defined by your device’s protocol.</td></tr><tr class="odd"><td>value (integer)</td><td>Defined by your device’s protocol.</td></tr><tr class="even"><td>index (integer)</td><td>Defined by your device’s protocol.</td></tr><tr class="odd"><td>length (integer)</td><td>Only used when direction is “in”. Notifies the device that this is the amount of data the host is expecting in response.</td></tr><tr class="even"><td>data (arraybuffer)</td><td>Defined by your device’s protocol, required when direction is “out”.</td></tr></tbody></table>

Example:

    var transferInfo = {
      "requestType": "vendor",
       "recipient": "device",
      "direction": "out",
      "request":  0x31,
      "value": 120,
      "index": 0,
      // Note that the ArrayBuffer, not the TypedArray itself is used.
      "data": new Uint8Array([4, 8, 15, 16, 23, 42]).buffer
    };
    chrome.usb.controlTransfer(connectionHandle, transferInfo, optionalCallback);

ISOCHRONOUS transfers {: \#isochronous\_transfers }
---------------------------------------------------

Isochronous transfers are the most complex type of USB transfer. They are commonly used for streams of data, like video and sound. To initiate an isochronous transfer (either inbound or outbound), you must use the [usb.isochronousTransfer](/apps/usb#method-isochronousTransfer) method:

    chrome.usb.isochronousTransfer(connectionHandle, isochronousTransferInfo, transferCallback)

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>connectionHandle</td><td>Object received in <a href="/apps/usb#method-openDevice">usb.openDevice</a> callback.</td></tr><tr class="even"><td>isochronousTransferInfo</td><td>Parameter object with the values in the table below.</td></tr><tr class="odd"><td>transferCallback()</td><td>Invoked when the transfer has completed.</td></tr></tbody></table>

Values for `isochronousTransferInfo` object:

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>transferInfo (object)</td><td>An object with the following attributes:<br />
<strong>direction (string):</strong> “in” or “out”.<br />
<strong>endpoint (integer):</strong> defined by your device. Usually can be found by looking at an USB instrospection tool, like <code>lsusb -v</code><br />
<strong>length (integer):</strong> only used when direction is “in”. Notifies the device that this is the amount of data the host is expecting in response.<br />
Should be AT LEAST <code>packets</code> × <code>packetLength</code>.<br />
<strong>data (arraybuffer):</strong> defined by your device’s protocol; only used when direction is “out”.</td></tr><tr class="even"><td>packets (integer)</td><td>Total number of packets expected in this transfer.</td></tr><tr class="odd"><td>packetLength (integer)</td><td>Expected length of each packet in this transfer.</td></tr></tbody></table>

Example:

    var transferInfo = {
      "direction": "in",
      "endpoint": 1,
      "length": 2560
    };

    var isoTransferInfo = {
      "transferInfo": transferInfo,
      "packets": 20,
      "packetLength": 128
    };

    chrome.usb.isochronousTransfer(connectionHandle, isoTransferInfo, optionalCallback);

{% Aside %}

**Notes:** One isochronous transfer will contain `isoTransferInfo.packets` packets of `isoTransferInfo.packetLength` bytes. If it is an inbound transfer (your code requested data from the device), the `data` field in the onUsbEvent will be an ArrayBuffer of size `transferInfo.length`. It is your duty to walk through this ArrayBuffer and extract the different packets, each starting at a multiple of `isoTransferInfo.packetLength` bytes.

If you are expecting a stream of data from the device, remember that you will have to send one “inbound” transfer for each transfer you expect back. USB devices don’t send transfers to the USB bus unless the host explicitly requests them through “inbound” transfers.

{% endAside %}

BULK transfers {: \#bulk\_transfers }
-------------------------------------

Bulk transfers are commonly used to transfer a large amount of non-time-sensitive data in a reliable way. [usb.bulkTransfer](/apps/usb#method-bulkTransfer) has three parameters:

    chrome.usb.bulkTransfer(connectionHandle, transferInfo, transferCallback);

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>connectionHandle</td><td>Object received in <a href="/apps/usb#method-openDevice">usb.openDevice</a> callback.</td></tr><tr class="even"><td>transferInfo</td><td>Parameter object with the values in the table below.</td></tr><tr class="odd"><td>transferCallback</td><td>Invoked when the transfer has completed.</td></tr></tbody></table>

Values for `transferInfo` object:

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>direction (string)</td><td>“in” or “out”.</td></tr><tr class="even"><td>endpoint (integer)</td><td>Defined by your device’s protocol.</td></tr><tr class="odd"><td>length (integer)</td><td>Only used when direction is “in”. Notifies the device that this is the amount of data the host is expecting in response.</td></tr><tr class="even"><td>data (ArrayBuffer)</td><td>Defined by your device’s protocol; only used when direction is “out”.</td></tr></tbody></table>

Example:

    var transferInfo = {
      "direction": "out",
      "endpoint": 1,
      "data": new Uint8Array([4, 8, 15, 16, 23, 42]).buffer
    };

INTERRUPT transfers {: \#interrupt\_transfers }
-----------------------------------------------

Interrupt transfers are used to small amount of time sensitive data. Since all USB communication is initiated by the host, host code usually polls the device periodically, sending interrupt IN transfers that will make the device send data back if there is anything in the interrupt queue (maintained by the device). [usb.interruptTransfer](/apps/usb#method-interruptTransfer) has three parameters:

    chrome.usb.interruptTransfer(connectionHandle, transferInfo, transferCallback);

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>connectionHandle</td><td>Object received in <a href="/apps/usb#method-openDevice">usb.openDevice</a> callback.</td></tr><tr class="even"><td>transferInfo</td><td>Parameter object with the values in the table below.</td></tr><tr class="odd"><td>transferCallback</td><td>Invoked when the transfer has completed. Notice that this callback doesn’t contain the device’s response. The purpose of the callback is simply to notify your code that the asynchronous transfer requests has been processed.</td></tr></tbody></table>

Values for `transferInfo` object:

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>direction (string)</td><td>“in” or “out”.</td></tr><tr class="even"><td>endpoint (integer)</td><td>Defined by your device’s protocol.</td></tr><tr class="odd"><td>length (integer)</td><td>Only used when direction is “in”. Notifies the device that this is the amount of data the host is expecting in response.</td></tr><tr class="even"><td>data (ArrayBuffer)</td><td>Defined by your device’s protocol; only used when direction is “out”.</td></tr></tbody></table>

Example:

    var transferInfo = {
      "direction": "in",
      "endpoint": 1,
      "length": 2
    };
    chrome.usb.interruptTransfer(connectionHandle, transferInfo, optionalCallback);

Caveats {: \#caveats }
----------------------

Not all devices can be accessed through the USB API. In general, devices are not accessible because either the Operating System’s kernel or a native driver holds them off from user space code. Some examples are devices with HID profiles on OSX systems, and USB pen drives.

On most Linux systems, USB devices are mapped with read-only permissions by default. To open a device through this API, your user will need to have write access to it too. A simple solution is to set a udev rule. Create a file `/etc/udev/rules.d/50-yourdevicename.rules` with the following content:

    SUBSYSTEM=="usb", ATTR{idVendor}=="[yourdevicevendor]", MODE="0664", GROUP="plugdev"

Then, just restart the udev daemon: `service udev restart`. You can check if device permissions are set correctly by following these steps:

-   Run `lsusb` to find the bus and device numbers.
-   Run `ls -al /dev/bus/usb/[bus]/[device]`. This file should be owned by group “plugdev” and have group write permissions.

Your app cannot do this automatically since this this procedure requires root access. We recommend that you provide instructions to end-users and link to the [Caveats](#caveats) section on this page for an explanation.

On Chrome OS, simply call [usb.requestAccess](/apps/usb#method-requestAccess). The permission broker does this for you.
