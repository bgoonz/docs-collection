2018-04-23

{% include ‘partials/extensions/mv2-legacy-page.md’ %}

Implementing non-persistent background scripts will greatly reduce the resource cost of your extension. Most extension functionality can be supported by an event based background script. Only under [rare circumstances](/docs/extensions/mv2/background_pages#persistentWarning) should an extension have a persistent background, as they constantly consume system resources and can cause a strain on lower-powered devices.

Enhance an extension’s performance by migrating a persistent background script to an event-based non-persistent model.

## Designate persistence as false {: \#persistence }

Locate the `"background"` key in the extension [manifest](/docs/extensions/reference/tabs) file, then add or update the `"persistent"` field to false.

    {
      "name": "My extension",
      ...
      "background": {
        "scripts": ["background.js"],
        "persistent": false
      },
      ...
    }

The same applies to background scripts that rely on an HTML file.

    {
      "name": "My extension",
      ...
      "background": {
        "page": "background.html",
        "persistent": false
      },
      ...
    }

## Surface event listeners {: \#listeners }

Listeners must be at the top-level to activate the background script if an important event is triggered. Registered listeners may need to be restructred to a synchronous pattern. Structuring listeners, as below, will not allow them to be invoked because they are not registered synchronously.

    chrome.storage.local.get('runtimeEvents', function (events) {
      for (let event of events)
        chrome.runtime[event].addListener(listener);
    });

Instead, keep listeners at top-level and unnested.

    chrome.runtime.onStartup.addListener(function() {
      // run startup function
    })

## Record state changes in storage {: \#storage }

Use the [storage API](/docs/extensions/reference/storage) to set and return states and values. Use `local.set` to update on the local machine.

      chrome.storage.local.set({ variable: variableInformation });

Use `local.get` to grab the value of that variable.

    chrome.storage.local.get(['variable'], function(result) {
      let awesomeVariable = result.variable;
      // Do something with awesomeVariable
    });

## Transform timers into alarms {: \#timers }

DOM-based timers, such as `window.setTimeout()` or `window.setInterval()`, are not honored in non-persistent background scripts if they trigger when the event page is dormant.

    let timeout = 1000 * 60 * 3;  // 3 minutes in milliseconds
    window.setTimeout(function() {
      alert('Hello, world!');
    }, timeout);

Instead, use the [alarms API](/docs/extensions/reference/alarms).

    chrome.alarms.create({delayInMinutes: 3.0})

Then add a listener.

    chrome.alarms.onAlarm.addListener(function() {
      alert("Hello, world!")
    });

## Update calls for background script functions {: \#backgroundFunctions }

If using [`extension.getBackgroundPage`](/docs/extensions/reference/extension#method-getBackgroundPage) to call a function from the background page, update to [`runtime.getBackgroundPage`](/docs/extensions/reference/runtime#method-getBackgroundPage). The newer method activates the non-persistent script before returning it.

    function backgroundFunction() {
      alert('Background, reporting for duty!')
    }

    document.getElementById('target').addEventListener('click', function(){
      chrome.extension.getBackgroundPage().backgroundFunction();
    });

This method won’t work if the background script is inactive, which is the default state for a non-persistent script. The newer method includes a callback function to ensure the background script has loaded.

    document.getElementById('target').addEventListener('click', function() {
      chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.backgroundFunction()
      })
    });
