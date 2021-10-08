2015-06-12

The `event_rules` manifest property provides a mechanism to add rules that intercept, block, or modify web requests in-flight using [declarativeWebRequest](/docs/extensions/declarativeWebRequest) or take actions depending on the content of a page, without requiring permission to read the page’s content using [declarativeContent](/docs/extensions/declarativeContent).

## Translating rules from javascript to manifest {: \#translation }

The following defines a rule to display a page action if the current page has a video css tag in javascript:

    chrome.declarativeContent.onPageChanged.addRules([{
      actions: [
        new chrome.declarativeContent.ShowPageAction()
      ],
      conditions: [
        new chrome.declarativeContent.PageStateMatcher(
            {css: ["video"]}
        )
      ]
    }]);

This is the same definition in the manifest:

    {
      "name": "Sample extension",
      "event_rules": [{
        "event": "declarativeContent.onPageChanged",
        "actions": [{
          "type": "declarativeContent.ShowPageAction"
        }],
        "conditions": [{
          "type": "declarativeContent.PageStateMatcher",
          "css": ["video"]
        }]
      }],
      ...
    }
