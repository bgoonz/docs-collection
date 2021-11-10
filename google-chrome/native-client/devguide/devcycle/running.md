---json {"title":"Running"} ---

{% include 'partials/nacl-warning.njk' %}

---

- <a href="#introduction" id="id6" class="reference internal">Introduction</a>
- <a href="#portable-native-client-pnacl-applications" id="id7" class="reference internal">Portable Native Client (PNaCl) applications</a>
- <a href="#native-client-applications-and-the-chrome-web-store" id="id8" class="reference internal">Native Client applications and the Chrome Web Store</a>
- <a href="#prerequisites" id="id9" class="reference internal">Prerequisites</a>

  - <a href="#browser-and-pepper-versions" id="id10" class="reference internal">Browser and Pepper versions</a>
  - <a href="#chrome-cache" id="id11" class="reference internal">Chrome Cache</a>

- <a href="#requirements" id="id12" class="reference internal">Requirements</a>

  - <a href="#native-client-flag" id="id13" class="reference internal">Native Client flag</a>
  - <a href="#web-server" id="id14" class="reference internal">Web server</a>

- <a href="#technique-1-local-server" id="id15" class="reference internal">Technique 1: Local server</a>
- <a href="#technique-2-packaged-application-loaded-as-an-unpacked-extension" id="id16" class="reference internal">Technique 2: Packaged application loaded as an unpacked extension</a>
- <a href="#technique-3-hosted-application-loaded-as-an-unpacked-extension" id="id17" class="reference internal">Technique 3: Hosted application loaded as an unpacked extension</a>
- <a href="#technique-4-chrome-web-store-application-with-trusted-testers" id="id18" class="reference internal">Technique 4: Chrome Web Store application with trusted testers</a>

## Introduction

This document describes how to run Native Client applications during development.

The workflow for PNaCl applications is straightfoward and will only be discussed briefly. For NaCl applications distributed through the web-store, there is a number of options and these will be discussed more in-depth.

## Portable Native Client (PNaCl) applications

Running PNaCl applications from the open web is enabled in Chrome version 31 and above; therefore, no special provisions are required to run and test such applications locally. An application that uses a PNaCl module can be tested similarly to any other web application that only consists of HTML, CSS and JavaScript.

To better simulate a production environment, it’s recommended to start a local web server to serve the application’s files. The NaCl SDK comes with a simple local server built in, and the process of using it to run PNaCl applications is described in <a href="/docs/native-client/devguide/tutorial/tutorial-part1#tutorial-step-2" class="reference internal"><em>the tutorial</em></a>.

## Native Client applications and the Chrome Web Store

Before reading about how to run Native Client applications, it’s important to understand a little bit about how Native Client applications are distributed. As explained in <a href="/docs/native-client/devguide/distributing" class="reference internal"><em>Distributing Your Application</em></a>, Native Client applications must currently be distributed through the **Chrome Web Store (CWS)**. Applications in the CWS are one of three types:

- A **hosted application** is an application that you host on a server of your choice. To distribute an application as a hosted application, you upload application metadata to the CWS. Learn more on the <a href="/apps" class="reference external">Chrome App</a> documentation page.
- A **packaged application** is an application that is hosted in the CWS and downloaded to the user’s machine. To distribute an application as a packaged application, you upload the entire application, including all application assets and metadata, to the CWS. Learn more on the <a href="/apps" class="reference external">Chrome App</a> documentation page.
- An **extension** is a packaged application that has a tiny UI component (extensions are typically used to extend the functionality of the Chrome browser). To distribute an application as an extension, you upload the entire application, including all application assets and metadata, to the CWS. Learn more on the <a href="/extensions" class="reference external">Chrome extensions</a> documentation page.

The web store documentation contains a handy guide to <a href="/webstore/choosing" class="reference external">help you choose which to use</a>.

It’s clearly not convenient to package and upload files to the Chrome Web Store every time you want to run a new build of your application, but there are four alternative techniques you can use to run the application during development. These techniques are listed in the following table and described in detail below. Each technique has certain requirements (NaCl flag, web server, and/or CWS metadata); these are explained in the <a href="#requirements" class="reference internal"><em>Requirements</em></a> section below.

Technique

Requires Web Server

Requires CWS Metadata

**1. Local server**

Run a local server and simply point your browser to your application on the server.

This technique requires the NaCl flag.

![CHK](/docs/native-client/images/check-red.png)

**2. Packaged application loaded as an unpacked extension**

Load your packaged application into Chrome as an unpacked extension and run it without a server. An unpacked extension is an application whose source and metadata files are located in an unzipped folder on your development machine. The CWS manifest file (explained below) must specify a local_path field.

![CHK](/docs/native-client/images/check-red.png)

**3. Hosted application loaded as an unpacked extension**

Load your hosted application into Chrome as an unpacked extension and run it from a server (which can be a local server). The CWS manifest file must specify a web_url field.

![CHK](/docs/native-client/images/check-red.png)

![CHK](/docs/native-client/images/check-red.png)

**4. CWS application with untrusted testers**

The standard technique for distributing a packaged or hosted application in the CWS. You can limit the application to trusted testers. This technique requires a server if your application is a hosted application.

![CHK](/docs/native-client/images/check-red.png)

Which of the above techniques you use to run your application during development is largely a matter of personal preference (i.e., would you rather start a local server or create CWS metadata?). As a general rule, once you have an idea of how you plan to distribute your application, you should use the corresponding technique during development. Choosing a distribution option depends on a number of factors such as application size, application start-up time, hosting costs, offline functionality, etc. (see <a href="/docs/native-client/devguide/distributing" class="reference internal"><em>Distributing Your Application</em></a> for details), but you don’t need to make a decision about how to distribute your application at the outset.

The next two sections of this document describe a couple of prerequisites for running applications during development, and explain the three requirements listed in the table above (NaCl flag, web server, and CWS metadata). The subsequent sections of the document provide instructions for how to use each of the four techniques.

## Prerequisites

### Browser and Pepper versions

Before you run a new build of your application, make sure that you’re using the correct version of Chrome. Each version of Chrome supports a corresponding version of the Pepper API. You (and your users) must use a version of Chrome that is equal to or higher than the version of the Pepper API that your application uses. For example, if you compiled your application using the `pepper_37` bundle, your application uses the Pepper 37 API, and you must run the application in Chrome 37 or higher. To check which version of Chrome you’re using, type `about:version` in the Chrome address bar.

### <span id="cache"></span>Chrome Cache

Chrome caches resources aggressively. You should disable Chrome’s cache whenever you are developing a Native Client application in order to make sure Chrome loads new versions of your application. Follow the instructions <a href="/docs/native-client/devguide/tutorial/tutorial-part1#tutorial-step-3" class="reference internal"><em>in the tutorial</em></a>.

## <span id="id2"></span>Requirements

### <span id="flag"></span>Native Client flag

Native Client is automatically enabled for applications that are installed from the Chrome Web Store. To enable Native Client for applications that are not installed from the Chrome Web Store, you must explicitly turn on the Native Client flag in Chrome as follows:

1.  Type `about:flags` in the Chrome address bar.
2.  Scroll down to “Native Client”.
3.  If the link below “Native Client” says “Disable”, then Native Client is already enabled and you don’t need to do anything else.
4.  If the link below “Native Client” says “Enable”:
    - Click the “Enable” link.
    - Click the “Relaunch Now” button in the bottom of the screen. **Native Client will not be enabled until you relaunch your browser**. All browser windows will restart when you relaunch Chrome.

If you enable the Native Client flag and still can’t run applications from outside the Chrome Web Store, you may need to enable the Native Client plugin:

1.  Type `about:plugins` in the Chrome address bar.
2.  Scroll down to “Native Client”.
3.  If the link below “Native Client” says “Enable”, click the link to enable the Native Client plugin. You do not need to relaunch Chrome after enabling the Native Client plugin.

### <span id="id3"></span>Web server

For security reasons, Native Client applications must come from a server (you can’t simply drag HTML files into your browser). The Native Client SDK comes with a lightweight Python web server that you can run to serve your application locally. The server can be invoked from a Makefile. Here is how to run the server:

    $ cd examples
    $ make serve

By default, the server listens for requests on port 5103. You can use the server to run most applications under the `examples` directory where you started the server. For example, to run the `flock` example in the SDK, start the server and point your browser to `http://localhost:5103/demo/flock/`.

Some of the applications need special flags to Chrome, and must be run with the `make run` command. See <a href="/docs/native-client/sdk/examples#running-the-sdk-examples" class="reference internal"><em>Run the SDK examples</em></a> for more details.

#### <span id="metadata"></span>Chrome Web Store metadata

Applications published in the Chrome Web Store must be accompanied by CWS metadata; specifically, a Chrome Web Store manifest file named `manifest.json`, and at least one icon.

Below is an example of a CWS manifest file for a **hosted application**:

    {
      "name": "My NaCl App",
      "description": "Simple game implemented using Native Client",
      "version": "0.1",
      "icons": {
        "128": "icon128.png"
      },
      "app": {
        "urls": [
          "http://mysubdomain.example.com/"
        ],
        "launch": {
          "web_url": "http://mysubdomain.example.com/my_app_main_page.html"
        }
      }
    }

For a **packaged application**, you can omit the urls field, and replace the `web_url` field with a `local_path` field, as shown below:

    {
      "name": "My NaCl App",
      "description": "Simple game implemented using Native Client",
      "version": "0.1",
      "icons": {
        "16": "icon16.png",
        "128": "icon128.png"
      },
      "app": {
        "launch": {
          "local_path": "my_app_main_page.html"
        }
      }
    }

You must put the `manifest.json` file in the same directory as your application’s main HTML page.

If you don’t have icons for your application, you can use the following icons as placeholders:

![ICON16](/docs/native-client/images/icon16.png)

![ICON128](/docs/native-client/images/icon128.png)

Put the icons in the same directory as the CWS manifest file. For more information about CWS manifest files and application icons, see:

- <a href="/webstore/get_started_simple" class="reference external">Chrome Web Store Tutorial: Getting Started</a>
- <a href="/extensions/manifest" class="reference external">Chrome Web Store Formats: Manifest Files</a>

## Technique 1: Local server

To run your application from a local server:

- Enable the <a href="#flag" class="reference internal"><em>Native Client flag</em></a> in Chrome.
- Start a <a href="#web-server" class="reference internal"><em>local web server</em></a>.
- Put your application under the examples directory in the SDK bundle you are using (for example, in the directory `pepper_35/examples/my_app`).
- Access your application on the local server by typing the location of its HTML file in Chrome, for example: `http://localhost:5103/my_app/my_app_main_page.html`.

**Note:** You don’t have to use a local web server—you can use another server if you already have one running. You must still enable the Native Client flag in order to run your application from the server.

## Technique 2: Packaged application loaded as an unpacked extension

For development purposes, Chrome lets you load a packaged application as an unpacked extension. To load and run your packaged application as an unpacked extension:

1.  Create a Chrome Web Store manifest file and one or more icons for your application.
    - Follow the instructions above under Chrome Web Store metadata to create these files.
    - Note that the CWS manifest file should contain the `local_path` field rather than the `web_url` field.
2.  Put the CWS manifest file and the application icon(s) in the same directory as your application’s main HTML page.
3.  Load the application as an unpacked extension in Chrome:
    - Bring up the extensions management page in Chrome by clicking the menu icon ![menu-icon](/docs/native-client/images/menu-icon.png) and choosing **Tools &gt; Extensions**.
    - Check the box for **Developer mode** and then click the **Load unpacked extension** button: ![extensions](/docs/native-client/images/extensions-management.png)
    - In the file dialog that appears, select your application directory. Unless you get an error dialog, you’ve now installed your app in Chrome.
4.  Open a new tab in Chrome and click the **Apps** link at the bottom of the page to show your installed apps: ![new-tab-apps](/docs/native-client/images/new-tab-apps.png)
5.  The icon for your newly installed app should appear on the New Tab page. Click the icon to launch the app.

For additional information about how to create CWS metadata and load your application into Chrome (including troubleshooting information), see the <a href="/webstore/get_started_simple" class="reference external">Chrome Web Store Tutorial: Getting Started</a>.

See also <a href="/docs/native-client/sdk/examples#run-sdk-examples-as-packaged" class="reference internal"><em>Run the SDK examples as Chrome apps</em></a>.

## Technique 3: Hosted application loaded as an unpacked extension

For development purposes, Chrome lets you load a hosted application as an unpacked extension. To load and run your hosted application as an unpacked extension:

1.  Start a web server to serve your application.
    - You can use the <a href="#web-server" class="reference internal"><em>local web server</em></a> included with the Native Client SDK if you want.
2.  Upload your application (.html, .nmf, .nexe, .css, .js, image files, etc.) to the server.
    - If you’re using the local server included with the Native Client SDK, simply put your application under the `examples` directory in the SDK bundle you are using (e.g., in the directory `pepper_37/examples/my_app`).
3.  Create a Chrome Web Store manifest file and one or more icons for your application.
    - Follow the instructions above under <a href="#metadata" class="reference internal"><em>Chrome Web Store metadata</em></a> to create these files.
    - In the CWS manifest file, the `web_url` field should specify the location of your application on your server. If you’re using the local server included with the SDK, the `web_url` field should look something like `http://localhost:5103/my_app/my_app_main_page.html`.
4.  Put the CWS manifest file and the application icon(s) in the same directory as your application’s main HTML page.
5.  Load the application as an unpacked extension in Chrome:
    - Bring up the extensions management page in Chrome by clicking the menu icon ![menu-icon](/docs/native-client/images/menu-icon.png) and choosing **Tools &gt; Extensions**.
    - Check the box for **Developer mode** and then click the **Load unpacked extension** button: ![extensions](/docs/native-client/images/extensions-management.png)
    - In the file dialog that appears, select your application directory. Unless you get an error dialog, you’ve now installed your app in Chrome.
6.  Open a new tab in Chrome and click the **Apps** link at the bottom of the page to show your installed apps: ![new-tab-apps](/docs/native-client/images/new-tab-apps.png)
7.  The icon for your newly installed app should appear on the New Tab page. Click the icon to launch the app.

For additional information about how to create CWS metadata and load your application into Chrome (including troubleshooting information), see the <a href="/webstore/get_started_simple" class="reference external">Chrome Web Store Tutorial: Getting Started</a>.

## Technique 4: Chrome Web Store application with trusted testers

When you’re ready to test your application more broadly, you can upload the application to the Chrome Web Store and let some trusted testers run it. Here is how to do so:

1.  Create the Chrome Web Store metadata required to publish your application:
    - First, create a Chrome Web Store manifest file and one or more icons for your application, as described above under <a href="#metadata" class="reference internal"><em>Chrome Web Store metadata</em></a>. Note that packaged applications must have at least two icons (a 16x16 icon and a 128x128 icon).
    - You also need to create the following additional assets before you can publish your application:
      - a screenshot (size must be 640x400 or 1280x800)
      - a promotional image called a “small tile” (size must be 440x280)
2.  For a **packaged application**:
    - Create a zip file with the CWS manifest file, the application icons, and all your application files (.html, .nmf, .nexe, .css, .js, image files, etc.)
3.  For a **hosted application**:
    - Create a zip file with the CWS manifest file and the application icon(s).
    - Upload the application files (.html, .nmf, .nexe, .css, .js, image files, etc.) to the server on which the application is being hosted.
    - Use <a href="http://www.google.com/webmasters/tools/" class="reference external">Google Webmaster Tools</a> to verify ownership of the website on which the application runs.
4.  Log in to the <a href="https://chrome.google.com/webstore/developer/dashboard" class="reference external">Chrome Web Store Developer Dashboard</a>.
    - The first time you log in, click the “Add new item” button to display the Google Chrome Web Store Developer Agreement. Review and accept the agreement and then return to the <a href="https://chrome.google.com/webstore/developer/dashboard" class="reference external">Developer Dashboard</a>.
5.  Click “Edit your tester accounts” at the bottom of the Developer Dashboard.
6.  Enter a series of email addresses for your testers (separated by commas or whitespace), and click the “Save Changes” button.
7.  Click the “Add new item” button to add your application to the Chrome Web Store.
8.  Click the “Choose file” button and select the zip file you created earlier.
9.  Click the “Upload” button; this uploads your zip file and opens the “Edit item” page.
10. Edit the following required fields on the “Edit item” page:
    - Upload an application icon.
    - Upload a screenshot.
    - Upload a small tile.
    - Select a category for your application (accounting application, action game, etc.).
    - Select a language for your application.
11. If you are an owner or manager of a Google Group, you can select that group in the “Trusted testers” field.
    - You may want to create a Google Group specifically for your testers. When you add a group to the “Trusted testers” field, all group members will be able to test the application, in addition to the individuals you added to the “trusted tester accounts” field on the Developer Dashboard.
12. Click the “Publish to test accounts” button at the bottom of the page and click “OK”.
13. A page comes up that shows your application’s listing in the Chrome Web Store. Copy the URL and mail it to your trusted testers.
    - When you publish an application to test accounts, the application’s CWS listing is visible only to you and to people who are logged into those accounts. Your application won’t appear in search results, so you need to give testers a direct link to your application’s CWS listing. Users won’t be able to find the application by searching in the CWS.

To publish an application to the world after publishing it to test accounts, you must first unpublish the application. For additional information see <a href="/webstore/docs/publish" class="reference external">Publishing Your App</a>, and in particular <a href="/webstore/publish#testaccounts" class="reference external">Publishing to test accounts</a>.
