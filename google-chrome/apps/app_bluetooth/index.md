2014-03-11

{% Aside ‘caution’ %}

**Important:** Chrome will be removing support for Chrome Apps on all platforms. Chrome browser and the Chrome Web Store will continue to support extensions. [**Read the announcement**](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html) and learn more about [**migrating your app**](/apps/migration).

{% endAside %}

This document describes how to use the [Bluetooth](/docs/extensions/reference/bluetooth), [Bluetooth Socket](/docs/extensions/reference/bluetoothSocket) and [Bluetooth Low Energy](/docs/extensions/reference/bluetoothLowEnergy) APIs to communicate with Bluetooth and Bluetooth Low Energy devices.

For background information about Bluetooth, see the official [Bluetooth specifications](http://www.bluetooth.org).

{% Aside %}

**Note:** With Chrome 56, users can select nearby Bluetooth Low Energy devices to provide to web sites that use the [Web Bluetooth](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) API.

{% endAside %}

Manifest requirements {: \#manifest }
-------------------------------------

For Chrome Apps that use Bluetooth, add the [bluetooth](/docs/apps/manifest/bluetooth/) entry to the manifest and specify, if appropriate, the UUIDs of profiles, protocols or services you wish to implement along with whether you wish to implement these with the socket and/or Low Energy APIs.

For example for a socket implementation:

    "bluetooth": {
      "uuids": [ "1105", "1106" ],
      "socket": true
    }

And for a Low Energy implementation:

    "bluetooth": {
      "uuids": [ "180D", "1809", "180F" ],
      "low_energy": true
    }

To only access adapter state, discover nearby devices, and obtain basic information about devices, only the entry itself is required:

    "bluetooth": {}

Adapter information {: \#adapter\_info }
----------------------------------------

### Obtaining adapter state {: \#adapter\_state }

To obtain the state of the Bluetooth adapter, use the [bluetooth.getAdapterState](/docs/extensions/reference/bluetooth/#method-getAdapterState) method:

    chrome.bluetooth.getAdapterState(function(adapter) {
      console.log("Adapter " + adapter.address + ": " + adapter.name);
    });

### Adapter notifications {: \#adapter\_notifications }

The [bluetooth.onAdapterStateChanged](/docs/extensions/reference/bluetooth/#event-onAdapterStateChanged) event is sent whenever the adapter state changes. This can be used, for example, to determine when the adapter radio is powered on or off.

    var powered = false;
    chrome.bluetooth.getAdapterState(function(adapter) {
      powered = adapter.powered;
    });

    chrome.bluetooth.onAdapterStateChanged.addListener(
      function(adapter) {
        if (adapter.powered != powered) {
          powered = adapter.powered;
          if (powered) {
            console.log("Adapter radio is on");
          } else {
            console.log("Adapter radio is off");
          }
        }
      });

Device information {: \#device\_info }
--------------------------------------

### Listing known devices {: \#listing\_devices }

To get a list of the devices known to the Bluetooth adapter, use the [bluetooth.getDevices](/docs/extensions/reference/bluetooth/#method-getDevices) method:

    chrome.bluetooth.getDevices(function(devices) {
      for (var i = 0; i < devices.length; i++) {
        console.log(devices[i].address);
      }
    });

All devices are returned, including paired devices and devices recently discovered. It will not begin discovery of new devices (see [Discovering nearby devices](#discovery)).

### Receiving device notifications {: \#device\_notifications }

Instead of repeatedly calling [bluetooth.getDevices](/docs/extensions/reference/bluetooth/#method-getDevices), you can use the [bluetooth.onDeviceAdded](/docs/extensions/reference/bluetooth/#event-onDeviceAdded), [bluetooth.onDeviceChanged](/docs/extensions/reference/bluetooth/#event-onDeviceChanged) and [bluetooth.onDeviceRemoved](/docs/extensions/reference/bluetooth/#event-onDeviceRemoved) events to receive notifications.

The [bluetooth.onDeviceAdded](/docs/extensions/reference/bluetooth/#event-onDeviceAdded) event is sent whenever a device is discovered by the adapter or makes a connection to the adapter:

    chrome.bluetooth.onDeviceAdded.addListener(function(device) {
      console.log(device.address);
    });

Adding a listener for this event does not begin discovery of devices (see [Discovering nearby devices](#discovery)).

Changes to devices, including previously discovered devices becoming paired, are notified by the [bluetooth.onDeviceChanged](/docs/extensions/reference/bluetooth/#event-onDeviceChanged) event:

    chrome.bluetooth.onDeviceChanged.addListener(function(device) {
      console.log(device.address);
    });

Finally the [bluetooth.onDeviceRemoved](/docs/extensions/reference/bluetooth/#event-onDeviceRemoved) event is sent whenever a paired device is removed from the system, or a discovered device has not been seen recently:

    chrome.bluetooth.onDeviceRemoved.addListener(function(device) {
      console.log(device.address);
    });

### Discovering nearby devices {: \#discovery }

To begin discovery of nearby devices, use the [bluetooth.startDiscovery](/docs/extensions/reference/bluetooth/#method-startDiscovery) method. Discovery can be resource intensive so you should call [bluetooth.stopDiscovery](/docs/extensions/reference/bluetooth/#method-stopDiscovery) when done.

You should call [bluetooth.startDiscovery](/docs/extensions/reference/bluetooth/#method-startDiscovery) whenever your app needs to discover nearby devices. Do not make the call conditional on the `discovering` property of [bluetooth.AdapterState](/docs/extensions/reference/bluetooth/#type-AdapterState). The call will succeed even if another app is discovering nearby devices, and will ensure the adapter continues to perform discovery after that other app has stopped.

Information about each newly discovered device is received using the [bluetooth.onDeviceAdded](/docs/extensions/reference/bluetooth/#event-onDeviceAdded) event. For devices that have already been discovered recently, or have been previously paired with or connected to, the event will not be sent. Instead you should call [bluetooth.getDevices](/docs/extensions/reference/bluetooth/#method-getDevices) to obtain the current information, and use the [bluetooth.onDeviceChanged](/docs/extensions/reference/bluetooth/#event-onDeviceChanged) event to be notified of changes to that information as a result of discovery.

Example:

    var device_names = {};
    var updateDeviceName = function(device) {
      device_names[device.address] = device.name;
    };
    var removeDeviceName = function(device) {
      delete device_names[device.address];
    }

    // Add listeners to receive newly found devices and updates
    // to the previously known devices.
    chrome.bluetooth.onDeviceAdded.addListener(updateDeviceName);
    chrome.bluetooth.onDeviceChanged.addListener(updateDeviceName);
    chrome.bluetooth.onDeviceRemoved.addListener(removeDeviceName);

    // With the listeners in place, get the list of devices found in
    // previous discovery sessions, or any currently active ones,
    // along with paired devices.
    chrome.bluetooth.getDevices(function(devices) {
      for (var i = 0; i < devices.length; i++) {
        updateDeviceName(devices[i]);
      }
    });

    // Now begin the discovery process.
    chrome.bluetooth.startDiscovery(function() {
      // Stop discovery after 30 seconds.
      setTimeout(function() {
        chrome.bluetooth.stopDiscovery(function() {});
      }, 30000);
    });

If the user turns off the Bluetooth radio, all discovery sessions will be ended and not resumed automatically when the radio is switched on. If this matters to your app, you should watch the [bluetooth.onAdapterStateChanged](/docs/extensions/reference/bluetooth/#event-onAdapterStateChanged) event. If the `discovering` property changes to `false`, then your app will need to call [bluetooth.startDiscovery](/docs/extensions/reference/bluetooth/#method-startDiscovery) again to resume. Be cautious of the resource intensive nature of discovery.

### Identifying devices {: \#identifying\_devices }

A number of different options are provided for identifying devices returned by [bluetooth.getDevices](/docs/extensions/reference/bluetooth/#method-getDevices) and the related events.

If the device supports the Bluetooth [Device ID specification](https://developer.bluetooth.org/TechnologyOverview/Pages/DI.aspx), several properties are added to the Device object containing the fields defined by that specification. Example:

    chrome.bluetooth.getDevices(function(devices) {
      for (var i = 0; i < devices.length; i++) {
        if (devices[0].vendorIdSource != undefined) {
          console.log(devices[0].address + ' = ' +
                      devices[0].vendorIdSource + ':' +
                      devices[0].vendorId.toString(16) + ':' +
                      devices[0].productId.toString(16) + ':' +
                      devices[0].deviceId.toString(16));
        }
      }
    });

The Device ID specification is usually sufficient to identify a particular model, and even revision, of a device from a vendor. Where it is not present, you must instead rely on information about the class or type of the device, optionally combined with the manufacturer prefix in the `address`.

Most Bluetooth devices provide Class of Device information as a bit-field interpreted according to the [Baseband Assigned Numbers](https://www.bluetooth.org/en-us/specification/assigned-numbers/baseband) document. This bit-field is available in the `deviceClass` property.

    chrome.bluetooth.getDevices(function(devices) {
      for (var i = 0; i < devices.length; i++) {
        if (devices[0].vendorIdSource != undefined) {
          console.log(devices[0].address + ' = ' +
                      devices[0].deviceClass.toString(16));
        }
      }
    });

Parsing the field can be complex so for the most common device types Chrome handles this for you and sets the `type` field. Where this is not available, or insufficient for your needs, you’ll need to parse the `deviceClass` yourself.

    chrome.bluetooth.getDevices(function(devices) {
      for (var i = 0; i < devices.length; i++) {
        if (devices[0].vendorIdSource != undefined) {
          console.log(devices[0].address + ' = ' + devices[0].type);
        }
      }
    });

Using RFCOMM and L2CAP {: \#using\_rfcomm }
-------------------------------------------

Chrome Apps may make connections to any device that supports RFCOMM or L2CAP services. This includes the majority of classic Bluetooth devices on the market.

### Connecting to a socket {: \#connecting }

In order to make a connection to a device you need three things. A socket to make the connection with, created using [bluetoothSocket.create](/docs/extensions/reference/bluetoothSocket#method-create); the address of the device you wish to connect to, and the UUID of the service itself.

Before making the connection you should verify that the adapter is aware of the device by using [bluetooth.getDevice](/docs/extensions/reference/bluetooth/#method-getDevice) or the device discovery APIs.

The information necessary to establish the underlying connection, including whether the RFCOMM or L2CAP protocol should be used and which channel or PSM, is obtained using SDP discovery on the device.

Example:

    var uuid = '1105';
    var onConnectedCallback = function() {
      if (chrome.runtime.lastError) {
        console.log("Connection failed: " + chrome.runtime.lastError.message);
      } else {
        // Profile implementation here.
      }
    };

    chrome.bluetoothSocket.create(function(createInfo) {
      chrome.bluetoothSocket.connect(createInfo.socketId,
        device.address, uuid, onConnectedCallback);
    });

Keep a handle to the socketId so that you can later send data ([bluetoothSocket.send](/docs/extensions/reference/bluetoothSocket#method-send)) to this socket.

### Receiving from and sending to a socket {: \#receiving }

Receiving data from and sending to a socket uses `ArrayBuffer` objects. To learn about ArrayBuffers, check out the overview, [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays), and the tutorial, [How to convert ArrayBuffer to and from String](https://updates.html5rocks.com/2012/06/How-to-convert-ArrayBuffer-to-and-from-String).

To send data you have in `arrayBuffer` use [bluetoothSocket.send](/docs/extensions/reference/bluetoothSocket#method-send):

    chrome.bluetoothSocket.send(socketId, arrayBuffer, function(bytes_sent) {
      if (chrome.runtime.lastError) {
        console.log("Send failed: " + chrome.runtime.lastError.message);
      } else {
        console.log("Sent " + bytes_sent + " bytes")
      }
    })

In contrast to the method to send data, data is received in an event ([bluetoothSocket.onReceive](/docs/extensions/reference/bluetoothSocket#event-onReceive). Sockets are created unpaused (see [bluetoothSocket.setPaused](/docs/extensions/reference/bluetoothSocket#method-setPaused)) so the listener for this event is typically added between [bluetoothSocket.create](/docs/extensions/reference/bluetoothSocket#method-create) and [bluetoothSocket.connect](/docs/extensions/reference/bluetoothSocket#method-connect).

    chrome.bluetoothSocket.onRecieve.addListener(function(receiveInfo) {
      if (receiveInfo.socketId != socketId)
        return;
      // receiveInfo.data is an ArrayBuffer.
    });

### Receiving socket errors and disconnection {: \#errors }

To be notified of socket errors, including disconnection, add a listener to the [bluetoothSocket.onReceiveError](/docs/extensions/reference/bluetoothSocket#event-onReceiveError) event.

    chrome.bluetoothSocket.onReceiveError.addListener(function(errorInfo) {
      // Cause is in errorInfo.error.
      console.log(errorInfo.errorMessage);
    });

### Disconnecting from a socket {: \#disconnection }

To hang up the connection and disconnect the socket use [bluetoothSocket.disconnect](/docs/extensions/reference/bluetoothSocket#method-disconnect).

    chrome.bluetoothSocket.disconnect(socketId);

Publishing services
-------------------

In addition to making outbound connections to devices, Chrome Apps may publish services that may be used by any device that supports RFCOMM or L2CAP.

### Listening on a socket {: \#listening }

Two types of published service are supported. RFCOMM is the most commonly used and covers the majority of devices and profiles:

    var uuid = '1105';
    chrome.bluetoothSocket.create(function(createInfo) {
      chrome.bluetoothSocket.listenUsingRfcomm(createInfo.socketId,
        uuid, onListenCallback);
    });

L2CAP is the other and covers other device types and vendor-specific uses such as firmware uploading.

    var uuid = '0b87367c-f188-47cd-bc20-a5f4f70973c6';
    chrome.bluetoothSocket.create(function(createInfo) {
      chrome.bluetoothSocket.listenUsingL2cap(createInfo.socketId,
        uuid, onListenCallback);
    });

In both cases an optional [bluetoothSocket.ListenOptions](/docs/extensions/reference/bluetoothSocket#type-ListenOptions) may be passed to allocate a specific channel or PSM. The callback indicates error through `chrome.runtime.lastError` and success otherwise. Keep a handle to the socketId so that you can later accept connections ([bluetoothSocket.onAccept](/docs/extensions/reference/bluetoothSocket#event-onAccept)) from this socket.

### Accepting client connections {: \#accepting }

Client connections are accepted and passed to your application through the [bluetoothSocket.onAccept](/docs/extensions/reference/bluetoothSocket#event-onAccept) event.

    chrome.bluetoothSocket.onAccept.addListener(function(acceptInfo) {
      if (info.socketId != serverSocketId)
        return;

      // Say hello...
      chrome.bluetoothSocket.send(acceptInfo.clientSocketId,
        data, onSendCallback);

      // Accepted sockets are initially paused,
      // set the onReceive listener first.
      chrome.bluetoothSocket.onReceive.addListener(onReceive);
      chrome.bluetoothSocket.setPaused(false);
    });

### Stop accepting client connections {: \#stop-accepting }

To stop accepting client connections and unpublish the service use [bluetoothSocket.disconnect](/docs/extensions/reference/bluetoothSocket#method-disconnect).

    chrome.bluetoothSocket.disconnect(serverSocketId);

Interacting with Low Energy devices {: \#low-energy }
-----------------------------------------------------

Bluetooth Low Energy or (Bluetooth Smart) is a wireless technology aimed at reduced power consumption. The [Bluetooth Low Energy](/docs/extensions/reference/bluetoothLowEnergy) API allows applications to implement the central role in a LE connection to a peripheral. The following sections describe how to discover, connect to, and interact with Bluetooth Low Energy peripherals.

### Discovering and connecting to peripherals {: \#le-discovery }

As with traditional Bluetooth devices, LE peripherals can be discovered using the methods described in [Discovering nearby devices](#discovery) . An LE device makes itself discoverable by sending data packets called “Advertising Data” and the device is said to be in *advertising mode*. The advertising data may contain UUIDs of services that are available on the device. If present, these UUIDs will be accessible using the `uuids` property of the corresponding [bluetooth.Device](/docs/extensions/reference/bluetooth/#type-Device) object.

Once discovered, an LE device can be connected to by calling [bluetoothLowEnergy.connect](/docs/extensions/reference/bluetoothLowEnergy#method-connect) so that the application can interact with its services:

    chrome.bluetooth.onDeviceAdded.addListener(function(device) {
      var uuid = '0000180d-0000-1000-8000-00805f9b34fb';
      if (!device.uuids || device.uuids.indexOf(uuid) < 0)
        return;

      // The device has a service with the desired UUID.
      chrome.bluetoothLowEnergy.connect(device.address, function () {
        if (chrome.runtime.lastError) {
          console.log('Failed to connect: ' + chrome.runtime.lastError.message);
          return;
        }

        // Connected! Do stuff...
        ...
      });
    });

Once connected, the `connected` property of the corresponding [bluetooth.Device](/docs/extensions/reference/bluetooth/#type-Device) object will have the value `true`. Calling [bluetoothLowEnergy.connect](/docs/extensions/reference/bluetoothLowEnergy#method-connect) establishes a claim by the application on the physical connection to the device. A physical connection to the device can exist without ever calling [bluetoothLowEnergy.connect](/docs/extensions/reference/bluetoothLowEnergy#method-connect) (for example due to another application). In this case, while your application can still interact with the services of the device, it should always call [bluetoothLowEnergy.connect](/docs/extensions/reference/bluetoothLowEnergy#method-connect) to prevent another application from disconnecting the physical link.

Once your application no longer needs to be connected, it can remove its claim on the connection by calling [bluetoothLowEnergy.disconnect](/docs/extensions/reference/bluetoothLowEnergy#method-disconnect):

    chrome.bluetoothLowEnergy.disconnect(deviceAddress);

Note that this won’t necessarily destroy the physical link to the device, as there may be other applications who have active connections to the device. Sometimes the device might become disconnected due to reasons that are beyond the control of the application (e.g. if the device disappears or gets explicitly disconnected by the user through utilities of the operating system). Your application should observe the [bluetooth.onDeviceChanged](/docs/extensions/reference/bluetooth/#event-onDeviceChanged) event to get notified of changes to the connection and reconnect if necessary.

Once connected, the device that is running Chrome will be in the so called *central role*, while the remote device is said to be in the *peripheral role*. At this point, your application can interact with the services on the device using the methods described in the following section. *Note:* The APIs currently do not support acting as a LE peripheral; apps can only implement the central role.

### Services, Characteristics, and Descriptors {: \#gatt }

Bluetooth Low Energy is based on a simple request-response protocol called the *Attribute Protocol* (ATT). Using ATT, a central device interacts with the so called *attributes* on a peripheral device by conforming to a special Bluetooth profile called the *Generic Attribute Profile* (GATT). GATT defines the following high level concepts:

-   Service: A GATT service represents a collection of data and associated behaviors to accomplish a particular function of a device. For example, a heart rate monitor will typically have at least one “Heart Rate Service”. Information about a GATT service is contained in a [bluetoothLowEnergy.Service](/docs/extensions/reference/bluetoothLowEnergy#type-Service) object.
-   Characteristic: A GATT characteristic is a basic data element used to construct a GATT service, containing a value along with properties that define how that value can be accessed. For example, the “Heart Rate Service” has the “Heart Rate Measurement” characteristic, which is used to obtain the value of the user’s heart rate. Information about a GATT characteristic is contained in a [bluetoothLowEnergy.Characteristic](/docs/extensions/reference/bluetoothLowEnergy#type-Characteristic) object.
-   Descriptor: A GATT characteristic descriptor contains further information about a characteristic. Information about a GATT characteristic descriptor is contained in a [bluetoothLowEnergy.Descriptor](/docs/extensions/reference/bluetoothLowEnergy#type-Descriptor) object.

The [Bluetooth Low Energy](/docs/extensions/reference/bluetoothLowEnergy) API allows applications to find information about a device’s services, characteristics, and descriptors by calling [bluetoothLowEnergy.getServices](/docs/extensions/reference/bluetoothLowEnergy#method-getServices), [bluetoothLowEnergy.getCharacteristics](/docs/extensions/reference/bluetoothLowEnergy#method-getCharacteristics), and [bluetoothLowEnergy.getDescriptors](/docs/extensions/reference/bluetoothLowEnergy#method-getDescriptors). Apps can filter through services, characteristics, and descriptors by comparing their `uuid` field to the desired GATT UUID:

    chrome.bluetoothLowEnergy.getServices(deviceAddress, function(services) {
      ...
      for (var i = 0; i < services.length; i++) {
        if (services[i].uuid == HEART_RATE_SERVICE_UUID) {
          heartRateService = services[i];
          break;
        }
      }
      ...
    });

Each service, characteristic, and descriptor accessible through the API is assigned a unique instance identifier, which can be obtained using the `instanceId` field. This instance ID can be used to identify a GATT object and to perform specific operations on it:

    chrome.bluetoothLowEnergy.getCharacteristics(heartRateService.instanceId,
                                                 function(chracteristics) {
      ...
      for (var i = 0; i < characteristics.length; i++) {
        if (characteristics[i].uuid == HEART_RATE_MEASUREMENT_UUID) {
          measurementChar = characteristics[i];
          break;
        }
      }
      ...
      chrome.bluetoothLowEnergy.getDescriptors(measurementChar.instanceId,
                                               function(descriptors) {
        ...
      });
    });

### Service events {: \#service-events }

Once a device is connected, Chrome will discover its services. As each service is discovered and removed, the application will receive the [bluetoothLowEnergy.onServiceAdded](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceAdded) and [bluetoothLowEnergy.onServiceRemoved](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceRemoved) events:

      var initializeService = function(service) {
        if (!service) {
          console.log('No service selected!');
          // Reset UI, etc.
          ...
          return;
        }

        myService = service;

        // Get all the characteristics and descriptors and bootstrap the app.
        ...
      };

      chrome.bluetoothLowEnergy.onServiceAdded.addListener(function(service) {
        if (service.uuid == MY_SERVICE_UUID)
          initializeService(service);
      });

      chrome.bluetoothLowEnergy.onServiceRemoved.addListener(function(service) {
        if (service.instanceId == myService.instanceId)
          initializeService(null);
      });

Chrome discovers all characteristics and descriptors of a service asynchronously and sends the [bluetoothLowEnergy.onServiceAdded](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceAdded) event once discovery has completed. If the connection to a peripheral terminates, Chrome removes all related services and sends the [bluetoothLowEnergy.onServiceRemoved](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceRemoved) event.

Some peripherals may modify their services, e.g. the characteristics of a service may change or services may get added and removed entirely. Chrome notifies apps of these changes using the [bluetoothLowEnergy.onServiceChanged](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceChanged), [bluetoothLowEnergy.onServiceAdded](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceAdded), and [bluetoothLowEnergy.onServiceRemoved](/docs/extensions/reference/bluetoothLowEnergy#event-onServiceRemoved) events.

      chrome.bluetoothLowEnergy.onServiceChanged.addListener(function(service) {
        if (service.instanceId != myService.instanceId)
          return;

        updateMyService(service);
      });

### Reading and writing a characteristic’s value {: \#gatt-read-write }

A GATT characteristic encodes one aspect of its service. A central app reads, acts on, and modifies the state of a peripheral’s service by operating on a characteristic’s value. The characteristic value is a sequence of bytes and its meaning is defined by the high-level specification that defines a certain characteristic. For example, the value of the *Heart Rate Measurement* characteristic encodes the user’s heart rate and the total amount of calories they burned, while the *Body Sensor Location* characteristic encodes where in the body the heart rate sensor should be worn.

Chrome provides the [bluetoothLowEnergy.readCharacteristicValue](/docs/extensions/reference/bluetoothLowEnergy#method-readCharacteristicValue) method to read the value of a characteristic:

    chrome.bluetoothLowEnergy.readCharacteristicValue(chrc.instanceId,
                                                      function(result) {
      if (chrome.runtime.lastError) {
        console.log('Failed to read value: ' + chrome.runtime.lastError.message);
        return;
      }

      var bytes = new Uint8Array(result.value);

      // Do stuff with the bytes.
      ...
    });

Some characteristics are writable, especially those that behave as “Control Points”, where writing the value has side effects. For example, the *Heart Rate Control Point* characteristic is used to tell a heart rate sensor to reset its count of total calories burned and only supports writes. To achieve this, Chrome provides the [bluetoothLowEnergy.writeCharacteristicValue](/docs/extensions/reference/bluetoothLowEnergy#method-writeCharacteristicValue) method:

    var myBytes = new Uint8Array([ ... ]);
    chrome.bluetoothLowEnergy.writeCharacteristicValue(chrc.instanceId,
                                                       myBytes.buffer,
                                                       function() {
      if (chrome.runtime.lastError) {
        console.log('Failed to write value: ' +
                    chrome.runtime.lastError.message);
        return;
      }

      // Value is written now.
    });

Characteristic descriptors behave the same way and can be readable and/or writable. Chrome provides the [bluetoothLowEnergy.readDescriptorValue](/docs/extensions/reference/bluetoothLowEnergy#method-readDescriptorValue) and [bluetoothLowEnergy.writeDescriptorValue](/docs/extensions/reference/bluetoothLowEnergy#method-writeDescriptorValue) methods to read and write the value of a descriptor.

To check if a characteristic supports reads or writes, an application can check the `properties` field of a [bluetoothLowEnergy.Characteristic](/docs/extensions/reference/bluetoothLowEnergy#type-Characteristic) object. While this field does not contain information about the security requirements to access a value, it does describe which value operation the characteristic supports in general.

### Handling value notifications {: \#gatt-notifications }

Some characteristics make their value known using notifications or indications. For example the *Heart Rate Measurement* characteristic is neither readable nor writable but sends updates on its current value at regular intervals. Applications can listen to these notifications using the [bluetoothLowEnergy.onCharacteristicValueChanged](/docs/extensions/reference/bluetoothLowEnergy#event-onCharacteristicValueChanged) event.

      chrome.bluetoothLowEnergy.onCharacteristicValueChanged.addListener(
          function(chrc) {
        if (chrc.instanceId != myCharId)
          return;

        var bytes = new Uint8Array(chrc.value);

        // Do stuff with the bytes.
        ...
      });

Even if a characteristic supports notifications/indications, they aren’t enabled by default. An application should call the [bluetoothLowEnergy.startCharacteristicNotifications](/docs/extensions/reference/bluetoothLowEnergy#method-startCharacteristicNotifications) and [bluetoothLowEnergy.stopCharacteristicNotifications](/docs/extensions/reference/bluetoothLowEnergy#method-stopCharacteristicNotifications) methods to start or stop receiving the [bluetoothLowEnergy.onCharacteristicValueChanged](/docs/extensions/reference/bluetoothLowEnergy#event-onCharacteristicValueChanged) event.

      // Start receiving characteristic value notifications.
      var notifying = false;
      chrome.bluetoothLowEnergy.startCharacteristicNotifications(chrc.instanceId,
                                                                 function() {
        if (chrome.runtime.lastError) {
          console.log('Failed to enable notifications: ' +
                      chrome.runtime.lastError.message);
          return;
        }

        notifying = true;
      });

      ...

      // No longer interested in notifications from this characteristic.
      if (notifying) {
        chrome.bluetoothLowEnergy.stopCharacteristicNotifications(
            chrc.instanceId);
      }

Once notifications are started, the application will receive the [bluetoothLowEnergy.onCharacteristicValueChanged](/docs/extensions/reference/bluetoothLowEnergy#event-onCharacteristicValueChanged) every time a notification or indication is received from the characteristic. If the characteristic supports reads, then this event will also be sent after a successful call to [bluetoothLowEnergy.readCharacteristicValue](/docs/extensions/reference/bluetoothLowEnergy#method-readCharacteristicValue). This allows apps to unify the control flow of a value update triggered through a read request and notifications:

      chrome.bluetoothLowEnergy.onCharacteristicValueChanged.addListener(
          function(chrc) {
        // Process the value.
        ...
      });

      chrome.bluetoothLowEnergy.startCharacteristicNotifications(chrc.instanceId,
                                                                 function() {
        // Notifications started. Read the initial value.
        chrome.bluetoothLowEnergy.readCharacteristicValue(chrc.instanceId,
                                                          function(result) {
          ...
          // No need to do anything here since onCharacteristicValueChanged
          // will handle it.
        });
      });

If a characteristic supports notifications, its `properties` field will contain either the `"notify"` or `"indicate"` property.

NOTE: If a characteristic supports notifications/indications, it will have the “Client Characteristic Configuration” descriptor to enable/disable notifications. Chrome does not permit apps to write to this descriptor. Apps should instead use the [bluetoothLowEnergy.startCharacteristicNotifications](/docs/extensions/reference/bluetoothLowEnergy#method-startCharacteristicNotifications) and [bluetoothLowEnergy.stopCharacteristicNotifications](/docs/extensions/reference/bluetoothLowEnergy#method-stopCharacteristicNotifications) methods to control notification behavior.
