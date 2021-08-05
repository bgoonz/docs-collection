<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#building-a-device-for-webusb" class="w-toc__header--link">Building a device for WebUSB</a>

- [Background](#background)
- [API basics](#api-basics)
- [WebUSB descriptors](#webusb-descriptors)
- [Platform-specific considerations](#platform-specific-considerations)
- [macOS](#macos)
- [Linux](#linux)
- [Android](#android)
- [Chrome OS](#chrome-os)
- [Windows](#windows)
- [Examples](#examples)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Building a device for WebUSB

Build a device to take full advantage of the WebUSB API.

Dec 20, 2018 <span class="w-author__separator">•</span> Updated Dec 3, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/devices" class="w-post-signpost__link">Devices</a>

[<img src="https://web-dev.imgix.net/image/admin/C7kO2T8Q8jSZxU9xj3AC.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Reilly Grant" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/C7kO2T8Q8jSZxU9xj3AC.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/C7kO2T8Q8jSZxU9xj3AC.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/C7kO2T8Q8jSZxU9xj3AC.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/C7kO2T8Q8jSZxU9xj3AC.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/C7kO2T8Q8jSZxU9xj3AC.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/reillyg/)

<a href="/authors/reillyg/" class="w-author__name-link">Reilly Grant</a>

- <a href="https://twitter.com/reillyeon" class="w-author__link">Twitter</a>
- <a href="https://github.com/reillyeon" class="w-author__link">GitHub</a>

This article explains how to build a device to take full advantage of the [WebUSB API](https://wicg.github.io/webusb). For a brief introduction to the API itself, see [Access USB Devices on the Web](/usb).

## Background <a href="#background" class="w-headline-link">#</a>

The Universal Serial Bus (USB) has become the most common physical interface for connecting peripherals to desktop and mobile computing devices. In addition to defining the electrical characteristics of the bus and a general model for communicating with a device, USB specifications include a set of device class specifications. These are general models for particular classes of devices such as storage, audio, video, networking, etc. that device manufacturers can implement. The advantage of these device class specifications is that an operating system vendor can implement a single driver based on the class specification (a "class driver") and any device implementing that class will be supported. This was a great improvement over every manufacturer needing to write their own device drivers.

Some devices however don't fit into one of these standardized device classes. A manufacturer may instead choose to label their device as implementing the vendor-specific class. In this case the operating system chooses which device driver to load based on information provided in the vendor's driver package, typically a set of vendor and product IDs which are known to implement a particular vendor-specific protocol.

Another feature of the USB is that devices may provide multiple interfaces to the host they are connected to. Each interface can implement either a standardized class or be vendor-specific. When an operating system chooses the right drivers to handle the device each interface can be claimed by a different driver. For example, a USB webcam typically provides two interfaces, one implementing the USB video class (for the camera) and one implementing the USB audio class (for the microphone). The operating system does not load a single "webcam driver" but instead loads independent video and audio class drivers which take responsibility for the separate functions of the device. This composition of interface classes provides for greater flexibility.

## API basics <a href="#api-basics" class="w-headline-link">#</a>

Many of the standard USB classes have corresponding web APIs. For example, a page can capture video from a video class device using [`getUserMedia()`](https://html5rocks.com/en/tutorials/getusermedia/intro/) or receive input events from a human interface (HID) class device by listening for [KeyboardEvents](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) or [PointerEvents](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events), or by using the [Gamepad](/gamepad) or the [WebHID](/hid) API. Just as not all devices implement a standardized class definition, not all devices implement features that correspond to existing web platform APIs. When this is the case the WebUSB API can fill that gap by providing a way for sites to claim a vendor-specific interface and implement support for it from directly within their page.

The specific requirements for a device to be accessible via WebUSB vary slightly from platform to platform due to differences in how operating systems manage USB devices but the basic requirement is that a device should not already have a driver claiming the interface the page wants to control. This could be either a generic class driver provided by the OS vendor or a device driver provided by the vendor. As USB devices can provide multiple interfaces, each of which may have its own driver, it is possible to build a device for which some interfaces are claimed by a driver and others are left accessible to the browser.

For example, a high-end USB keyboard may provide an HID class interface that will be claimed by the operating system's input subsystem and a vendor-specific interface that remains available to WebUSB for use by a configuration tool. This tool can be served on the manufacturer's website allowing the user to change aspects of the device's behavior such as macro keys and lighting effects without installing any platform-specific software. Such a device's configuration descriptor would look something like this:

Values in this and other tables in this document are presented in hexadecimal or binary, whichever is more readable. The USB is a little-endian bus and so any integer value larger than 1 byte should be sent least-significant byte first.

Value

Field

Description

Configuration descriptor

`0x09`

bLength

Size of this descriptor

`0x02`

bDescriptorType

Configuration descriptor

`0x0039`

wTotalLength

Total length of this series of descriptors

`0x02`

bNumInterfaces

Number of interfaces

`0x01`

bConfigurationValue

Configuration 1

`0x00`

iConfiguration

Configuration name (none)

`0b1010000`

bmAttributes

Self-powered device with remote wakeup

`0x32`

bMaxPower

Max Power is expressed in 2 mA increments

Interface descriptor

`0x09`

bLength

Size of this descriptor

`0x04`

bDescriptorType

Interface descriptor

`0x00`

bInterfaceNumber

Interface 0

`0x00`

bAlternateSetting

Alternate setting 0 (default)

`0x01`

bNumEndpoints

1 endpoint

`0x03`

bInterfaceClass

HID interface class

`0x01`

bInterfaceSubClass

Boot interface subclass

`0x01`

bInterfaceProtocol

Keyboard

`0x00`

iInterface

Interface name (none)

HID descriptor

`0x09`

bLength

Size of this descriptor

`0x21`

bDescriptorType

HID descriptor

`0x0101`

bcdHID

HID version 1.1

`0x00`

bCountryCode

Hardware target country

`0x01`

bNumDescriptors

Number of HID class descriptors to follow

`0x22`

bDescriptorType

Report descriptor type

`0x003F`

wDescriptorLength

Total length of the Report descriptor

Endpoint descriptor

`0x07`

bLength

Size of this descriptor

`0x05`

bDescriptorType

Endpoint descriptor

`0b10000001`

bEndpointAddress

Endpoint 1 (IN)

`0b00000011`

bmAttributes

Interrupt

`0x0008`

wMaxPacketSize

8 byte packets

`0x0A`

bInterval

10ms interval

Interface descriptor

`0x09`

bLength

Size of this descriptor

`0x04`

bDescriptorType

Interface descriptor

`0x01`

bInterfaceNumber

Interface 1

`0x00`

bAlternateSetting

Alternate setting 0 (default)

`0x02`

bNumEndpoints

2 endpoints

`0xFF`

bInterfaceClass

Vendor-specific interface class

`0x00`

bInterfaceSubClass

`0x00`

bInterfaceProtocol

`0x00`

iInterface

Interface name (none)

Endpoint descriptor

`0x07`

bLength

Size of this descriptor

`0x05`

bDescriptorType

Endpoint descriptor

`0b10000010`

bEndpointAddress

Endpoint 1 (IN)

`0b00000010`

bmAttributes

Bulk

`0x0040`

wMaxPacketSize

64 byte packets

`0x00`

bInterval

N/A for bulk endpoints

Endpoint descriptor

`0x07`

bLength

Size of this descriptor

`0x05`

bDescriptorType

Endpoint descriptor

`0b00000011`

bEndpointAddress

Endpoint 3 (OUT)

`0b00000010`

bmAttributes

Bulk

`0x0040`

wMaxPacketSize

64 byte packets

`0x00`

bInterval

N/A for bulk endpoints

The configuration descriptor consists of multiple descriptors concatenated together. Each begins with `bLength` and `bDescriptorType` fields so that they can be identified. The first interface is an HID interface with an associated HID descriptor and a single endpoint used to deliver input events to the operating system. The second interface is a vendor-specific interface with two endpoints that can be used to send commands to the device and receive responses in return.

## WebUSB descriptors <a href="#webusb-descriptors" class="w-headline-link">#</a>

While WebUSB can work with many devices without firmware modifications, additional functionality is enabled by marking the device with specific descriptors indicating support for WebUSB. For example, you can specify a landing page URL that the browser can direct the user to when your device is plugged in.

<figure><img src="https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format" alt="WebUSB notification." class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/KBZaQNlDcishHiu3XkPU.png?auto=format&amp;w=1600 1600w" width="800" height="450" /><figcaption>WebUSB notification.</figcaption></figure>The Binary device Object Store (BOS) is a concept introduced in USB 3.0 but has also been backported to USB 2.0 devices as part of version 2.1. Declaring support for WebUSB starts with including the following Platform Capability Descriptor in the BOS descriptor:

Value

Field

Description

Binary device Object Store descriptor

`0x05`

bLength

Size of this descriptor

`0x0F`

bDescriptorType

Binary device Object Store descriptor

`0x001D`

wTotalLength

Total length of this series of descriptors

`0x01`

bNumDeviceCaps

Number of device capability descriptors in the BOS

WebUSB platform capability descriptor

`0x18`

bLength

Size of this descriptor

`0x10`

bDescriptorType

Device capability descriptor

`0x05`

bDevCapabilityType

Platform capability descriptor

`0x00`

bReserved

`{0x38, 0xB6, 0x08, 0x34, 0xA9, 0x09, 0xA0, 0x47, 0x8B, 0xFD, 0xA0, 0x76, 0x88, 0x15, 0xB6, 0x65}`

PlatformCapablityUUID

WebUSB platform capability descriptor GUID in little-endian format

`0x0100`

bcdVersion

WebUSB descriptor version 1.0

`0x01`

bVendorCode

bRequest value for WebUSB

`0x01`

iLandingPage

URL for landing page

The UUID above would be written as `{3408b638-09a9-47a0-8bfd-a0768815b665}`; however, when sent as part of a USB descriptor its component fields must be sent in little-endian order. This transformation is complex so the proper encoding is given here for reference. See [RFC4122](https://tools.ietf.org/html/rfc4122).

The platform capability UUID identifies this as a [WebUSB Platform Capability descriptor](https://wicg.github.io/webusb/#webusb-platform-capability-descriptor), which provides basic information about the device. For the browser to fetch more information about the device it uses the `bVendorCode` value to issue additional requests to the device. The only request currently specified is `GET_URL` which returns a [URL descriptor](https://wicg.github.io/webusb/#url-descriptor). These are similar to string descriptors but are designed to encode URLs in the fewest bytes. A URL descriptor for `"https://google.com"` would look like this:

Value

Field

Description

URL descriptor

`0x0D`

bLength

Size of this descriptor

`0x03`

bDescriptorType

URL descriptor

`0x01`

bScheme

https://

`"google.com"`

URL

UTF-8 encoded URL content

When your device is first plugged in the browser reads the BOS descriptor by issuing this standard `GET_DESCRIPTOR` control transfer:

<table><thead><tr class="header"><th>bmRequestType</th><th>bRequest</th><th>wValue</th><th>wIndex</th><th>wLength</th><th>Data (response)</th></tr></thead><tbody><tr class="odd"><td><code>0b10000000</code></td><td><code>0x06</code></td><td><code>0x0F00</code></td><td><code>0x0000</code></td><td>*</td><td>The BOS descriptor</td></tr></tbody></table>

This request is usually made twice, the first time with a large enough `wLength` so that the host finds out the value of the `wTotalLength` field without committing to a large transfer and then again when the full descriptor length is known.

If the WebUSB Platform Capability descriptor has the `iLandingPage` field set to a non-zero value the browser then performs a WebUSB-specific `GET_URL` request by issuing a control transfer with the `bRequest` set to the `bVendorCode` value from the platform capability descriptor and `wValue` set to the `iLandingPage` value. The request code for `GET_URL` (`0x02`) goes in `wIndex`:

<table><thead><tr class="header"><th>bmRequestType</th><th>bRequest</th><th>wValue</th><th>wIndex</th><th>wLength</th><th>Data (response)</th></tr></thead><tbody><tr class="odd"><td><code>0b11000000</code></td><td><code>0x01</code></td><td><code>0x0001</code></td><td><code>0x0002</code></td><td>*</td><td>The URL descriptor</td></tr></tbody></table>

Again, this request may be issued twice in order to first probe for the length of the descriptor being read.

Support for displaying a notification when a USB device is plugged in is not available yet on Android.

## Platform-specific considerations <a href="#platform-specific-considerations" class="w-headline-link">#</a>

While the WebUSB API attempts to provide a consistent interface for accessing USB devices developers should still be aware of requirements imposed on applications such as a web browsers requirements in order to access devices.

### macOS <a href="#macos" class="w-headline-link">#</a>

Nothing special is necessary for macOS. A website using WebUSB can connect to the device and claim any interfaces that aren't claimed by a kernel driver or another application.

### Linux <a href="#linux" class="w-headline-link">#</a>

Linux is like macOS but by default most distributions do not set up user accounts with permission to open USB devices. A system daemon called udev is responsible for assigning the user and group allowed to access a device. A rule such as this will assign ownership of a device matching the given vendor and product IDs to the `plugdev` group which is a common group for users with access to peripherals:

    SUBSYSTEM=="usb", ATTR{idVendor}=="XXXX", ATTR{idProduct}=="XXXX", GROUP="plugdev"

Replace `XXXX` with the hexadecimal vendor and product IDs for your device, e.g. `ATTR{idVendor}=="18d1", ATTR{idProduct}=="4e11"` would match a Nexus One phone. These must be written without the usual "0x" prefix and all lowercase to be recognized correctly. To find the IDs for your device run the command line tool `lsusb`.

This rule should be placed in a file in the `/etc/udev/rules.d` directory and takes effect as soon as the device is plugged in. There is no need to restart udev.

### Android <a href="#android" class="w-headline-link">#</a>

The Android platform is based on Linux but does not require any modification to system configuration. By default any device that does not have a driver built into the operating system is available to the browser. Developers should be aware however that users will encounter an additional step when connecting to the device. Once a user selects a device in response to a call to [`requestDevice()`](https://wicg.github.io/webusb/#dom-usb-requestdevice), Android will display a prompt asking whether to allow Chrome to access it. This prompt also reappears if a user returns to a website that already has permission to connect to a device and the website calls [`open()`](https://wicg.github.io/webusb/#dom-usbdevice-open).

In addition more devices will be accessible on Android than on desktop Linux because fewer drivers are included by default. A notable omission, for example, is the USB CDC-ACM class commonly implemented by USB-to-serial adapters as there is no API in the Android SDK for communicating with a serial device.

### Chrome OS <a href="#chrome-os" class="w-headline-link">#</a>

Chrome OS is based on Linux as well and also does not require any modification to system configuration. The permission_broker service controls access to USB devices and will allow the browser to access them as long as there is at least one unclaimed interface.

### Windows <a href="#windows" class="w-headline-link">#</a>

The Windows driver model introduces an additional requirement. Unlike the platforms above the ability to open a USB device from a user application is not the default, even if there is no driver loaded. Instead there is a special driver, WinUSB, that needs to be loaded in order to provide the interface applications use to access the device. This can be done with either a custom driver information file (INF) installed on the system or by modifying the device firmware to provide the Microsoft OS Compatibility Descriptors during enumeration.

#### Driver Information File (INF) <a href="#driver-information-file-(inf)" class="w-headline-link">#</a>

A driver information file tells Windows what to do when encountering a device for the first time. Since the user's system already includes the WinUSB driver all that's necessary is for the INF file to associate your vendor and product ID with this new installation rule. The file below is a basic example. Save it to a file with the `.inf` extension, change the sections marked with "X", then right click on it and choose "Install" from the context menu.

    [Version]
    Signature   = "$Windows NT$"
    Class       = USBDevice
    ClassGUID   = {88BAE032-5A81-49f0-BC3D-A4FF138216D6}
    Provider    = %ManufacturerName%
    CatalogFile = WinUSBInstallation.cat
    DriverVer   = 09/04/2012,13.54.20.543

    ; ========== Manufacturer/Models sections ===========

    [Manufacturer]
    %ManufacturerName% = Standard,NTx86,NTia64,NTamd64

    [Standard.NTx86]
    %USB\MyCustomDevice.DeviceDesc% = USB_Install,USB\VID_XXXX&PID_XXXX

    [Standard.NTia64]
    %USB\MyCustomDevice.DeviceDesc% = USB_Install,USB\VID_XXXX&PID_XXXX

    [Standard.NTamd64]
    %USB\MyCustomDevice.DeviceDesc% = USB_Install,USB\VID_XXXX&PID_XXXX

    ; ========== Class definition ===========

    [ClassInstall32]
    AddReg = ClassInstall_AddReg

    [ClassInstall_AddReg]
    HKR,,,,%ClassName%
    HKR,,NoInstallClass,,1
    HKR,,IconPath,%REG_MULTI_SZ%,"%systemroot%\system32\setupapi.dll,-20"
    HKR,,LowerLogoVersion,,5.2

    ; =================== Installation ===================

    [USB_Install]
    Include = winusb.inf
    Needs   = WINUSB.NT

    [USB_Install.Services]
    Include = winusb.inf
    Needs   = WINUSB.NT.Services

    [USB_Install.HW]
    AddReg = Dev_AddReg

    [Dev_AddReg]
    HKR,,DeviceInterfaceGUIDs,0x10000,"{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}"

    ; =================== Strings ===================

    [Strings]
    ManufacturerName              = "Your Company Name Here"
    ClassName                     = "Your Company Devices"
    USB\MyCustomDevice.DeviceDesc = "Your Device Name Here"

The `[Dev_AddReg]` section configures the set of DeviceInterfaceGUIDs for the device. Every device interface must have a GUID in order for an application to find and connect to it through the Windows API. Use the `New-Guid` PowerShell cmdlet or an online tool to generate a random GUID.

For development purposes the [Zadig tool](https://zadig.akeo.ie/) provides an easy interface for replacing the driver loaded for a USB interface with the WinUSB driver.

#### Microsoft OS compatibility descriptors <a href="#microsoft-os-compatibility-descriptors" class="w-headline-link">#</a>

The INF file approach above is cumbersome because it requires configuring every user's machine ahead of time. Windows 8.1 and higher offers an alternative through the use of custom USB descriptors. These descriptors provide information to the Windows operating system when the device is first plugged in that would normally be included in the INF file.

Once you have WebUSB descriptors set up it is easy to add Microsoft's OS compatibility descriptors as well. First extend the BOS descriptor with this additional platform capability descriptor. Make sure to update `wTotalLength` and `bNumDeviceCaps` to account for it.

Value

Field

Description

Microsoft OS 2.0 platform capability descriptor

`0x1C`

bLength

Size of this descriptor

`0x10`

bDescriptorType

Device capability descriptor

`0x05`

bDevCapabilityType

Platform capability descriptor

`0x00`

bReserved

`{0xDF, 0x60, 0xDD, 0xD8, 0x89, 0x45, 0xC7, 0x4C, 0x9C, 0xD2, 0x65, 0x9D, 0x9E, 0x64, 0x8A, 0x9F}`

PlatformCapablityUUID

Microsoft OS 2.0 platform compatibility descriptor GUID in little-endian format

`0x06030000`

dwWindowsVersion

Minimum compatible Windows version (Windows 8.1)

`0x00B2`

wMSOSDescriptorSetTotalLength

Total length of the descriptor set

`0x02`

bMS_VendorCode

bRequest value for retrieving further Microsoft descriptors

`0x00`

bAltEnumCode

Device does not support alternate enumeration

As with the WebUSB descriptors you have to pick a `bRequest` value to be used by control transfers related to these descriptors. In this example I've picked `0x02`. `0x07`, placed in `wIndex`, is the command to retrieve the Microsoft OS 2.0 Descriptor Set from the device.

<table><thead><tr class="header"><th>bmRequestType</th><th>bRequest</th><th>wValue</th><th>wIndex</th><th>wLength</th><th>Data (response)</th></tr></thead><tbody><tr class="odd"><td><code>0b11000000</code></td><td><code>0x02</code></td><td><code>0x0000</code></td><td><code>0x0007</code></td><td>*</td><td>MS OS 2.0 Descriptor Set</td></tr></tbody></table>

A USB device can have multiple functions and so the first part of the descriptor set describes which function the properties that follow are associated with. The example below configures interface 1 of a composite device. The descriptor gives the OS two important pieces of information about this interface. The compatible ID descriptor tells Windows that this device is compatible with the WinUSB driver. The registry property descriptor functions similarly to the `[Dev_AddReg]` section of the INF example above, setting a registry property to assign this function a device interface GUID.

Value

Field

Description

Microsoft OS 2.0 descriptor set header

`0x000A`

wLength

Size of this descriptor

`0x0000`

wDescriptorType

Descriptor set header descriptor

`0x06030000`

dwWindowsVersion

Minimum compatible Windows version (Windows 8.1)

`0x00B2`

wTotalLength

Total length of the descriptor set

Microsoft OS 2.0 configuration subset header

`0x0008`

wLength

Size of this descriptor

`0x0001`

wDescriptorType

Configuration subset header desc.

`0x00`

bConfigurationValue

Applies to configuration 1 (indexed from 0 despite configurations normally indexed from 1)

`0x00`

bReserved

Must be set to 0

`0x00A8`

wTotalLength

Total length of the subset including this header

Microsoft OS 2.0 function subset header

`0x0008`

wLength

Size of this descriptor

`0x0002`

wDescriptorType

Function subset header descriptor

`0x01`

bFirstInterface

First interface of the function

`0x00`

bReserved

Must be set to 0

`0x00A0`

wSubsetLength

Total length of the subset including this header

Microsoft OS 2.0 compatible ID descriptor

`0x0014`

wLength

Size of this descriptor

`0x0003`

wDescriptorType

Compatible ID descriptor

`"WINUSB\0\0"`

CompatibileID

ASCII string padded to 8 bytes

`"\0\0\0\0\0\0\0\0"`

SubCompatibleID

ASCII string padded to 8 bytes

Microsoft OS 2.0 registry property descriptor

`0x0084`

wLength

Size of this descriptor

`0x0004`

wDescriptorType

Registry property descriptor

`0x0007`

wPropertyDataType

REG_MULTI_SZ

`0x002A`

wPropertyNameLength

Length of the property name

`"DeviceInterfaceGUIDs\0"`

PropertyName

Property name with null terminator encoded in UTF-16LE

`0x0050`

wPropertyDataLength

Length of the property value

`"{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}\0\0"`

PropertyData

GUID plus two null terminators encoded in UTF-16LE

Windows will only query the device for this information once. If the device does not respond with valid descriptors it will not ask again the next time the device is connected. Microsoft has provided [a list of USB Device Registry Entries](https://docs.microsoft.com/en-us/windows-hardware/drivers/usbcon/usb-device-specific-registry-settings) describing the registry entries created when enumerating a device. When testing delete the entries created for a device for force Windows to try to read the descriptors again.

For more information check out Microsoft's [blog post](https://techcommunity.microsoft.com/t5/microsoft-usb-blog/how-to-install-winusb-sys-without-a-custom-inf/ba-p/270769) on how to use these descriptors.

## Examples <a href="#examples" class="w-headline-link">#</a>

Example code implementing WebUSB-aware devices that include both WebUSB descriptors and Microsoft OS descriptors can be found in these projects:

- [WebLight](https://github.com/sowbug/weblight)
- [WebUSB Arduino Library](https://github.com/webusb/arduino)

Have a question about using this feature? You can get help by [asking a question on Stack Overflow](https://stackoverflow.com/questions/ask?tags=webusb), or [browsing a list of questions](https://stackoverflow.com/search?q=%5Bwebusb%5D+is%3Aquestion) asked by other developers.

<a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/devices/" class="w-chip">Devices</a>

<span class="w-mr--sm"> Last updated: Dec 3, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/build-for-webusb/index.md)

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
