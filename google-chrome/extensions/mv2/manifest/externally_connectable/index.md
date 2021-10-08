2013-08-21

The `externally_connectable` manifest property declares which extensions, apps, and web pages can connect to your extension via [runtime.connect](/docs/extensions/runtime#method-connect) and [runtime.sendMessage](/docs/extensions/runtime#method-sendMessage).

For a tutorial on message passing see [cross-extension and app messaging](/docs/extensions/mv2/messaging#external) and [sending messages from web pages](/docs/extensions/mv2/messaging#external-webpage).

## Connecting without externally_connectable {: \#without-externally-connectable }

If `externally_connectable` is not declared in your extension’s manifest, all extensions and apps can connect, but no webpages can connect. As a consequence, when updating your manifest to use `externally_connectable`, if `"ids": ["*"]` is not specified then other extensions and apps will lose the ability to connect to your extension. This may be an unintended consequence, so keep it in mind.

## Sample manifest.json {: \#manifest }

    {
      "name": "My externally connectable extension",
      "externally_connectable": {
        // Extension and app IDs. If this field is not specified, no
        // extensions or apps can connect.
        "ids": [
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
          ...
          // Alternatively, to match all extensions and apps, specify only
          // "*".
          "*"
        ],
        // Match patterns for web pages. Does not affect content scripts.
        // If this field is not specified, no webpages can connect.
        "matches": [
          "https://*.google.com/*",
          "*://*.chromium.org/*",
          ...
        ],
        // Indicates that the extension would like to make use of the TLS
        // channel ID of the web page connecting to it. The web page must
        // also opt to send the TLS channel ID to the extension via setting
        // includeTlsChannelId to true in runtime.connect's connectInfo
        // or runtime.sendMessage's options.
        "accepts_tls_channel_id": false
      },
      ...
    }

## Reference {: \#reference }

The externally_connectable manifest key can have the following properties:

- **`ids` (array of string)** - optional

  The IDs of extensions or apps that are allowed to connect. If left empty or unspecified, no extensions or apps can connect.

  The wildcard `"*"` will allow all extensions and apps to connect.

- **`matches` (array of string)** - optional

  The URL patterns for _web pages_ that are allowed to connect. _This does not affect content scripts._ If left empty or unspecified, no web pages can connect.

  Patterns cannot include wildcard domains nor subdomains of [(effective) top level domains](http://publicsuffix.org/list/); `*://google.com/*` and `http://*.chromium.org/*` are valid, while `<all_urls>`, `http://*/*`, `*://*.com/*`, and even `http://*.appspot.com/*` are not.

- **`accepts_tls_channel_id` (boolean)** - optional

  If `true`, messages sent via [runtime.connect](/docs/extensions/runtime#method-connect) or [runtime.sendMessage](/docs/extensions/runtime#method-sendMessage) will set [runtime.MessageSender.tlsChannelId](/docs/extensions/runtime#property-MessageSender-tlsChannelId) if those methods request it to be. If `false`, [runtime.MessageSender.tlsChannelId](/docs/extensions/runtime#property-MessageSender-tlsChannelId) will never be set under any circumstance.
