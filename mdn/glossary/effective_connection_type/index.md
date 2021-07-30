--- title: Effective connection type slug: Glossary/Effective\_connection\_type tags: - Glossary - Navigator - Network Information API - NetworkInformation - Performance - Reference - Web Performance - connect - effective connection type - effectiveType ---

**Effective connection type** (ECT) refers to the measured network performance, returning a cellular connection type, like 3G, even if the actual connection is tethered broadband or WiFi, based on the time between the browser requesting a page and effective type of the connection.

The values of '`slow-2g`', '`2g`', '`3g`', and '`4g`' are determined using observed round-trip times and downlink values.

<table><caption>Table of effective connection types</caption><thead><tr class="header"><th>ECT</th><th>Minimum <a href="/en-US/docs/Glossary/Round_Trip_Time_(RTT)">RTT</a></th><th>Maximum downlink</th><th>Explanation</th></tr></thead><tbody><tr class="odd"><td><code>slow-2g</code></td><td>2000ms</td><td>50 Kbps</td><td>The network is suited for small transfers only such as text-only pages.</td></tr><tr class="even"><td><code>2g</code></td><td>1400ms</td><td>70 Kbps</td><td>The network is suited for transfers of small images.</td></tr><tr class="odd"><td><code>3g</code></td><td>270ms</td><td>700 Kbps</td><td>The network is suited for transfers of large assets such as high resolution images, audio, and SD video.</td></tr><tr class="even"><td><code>4g</code></td><td>0ms</td><td>∞</td><td>The network is suited for HD video, real-time video, etc.</td></tr></tbody></table>

[effectiveType](/en-US/docs/Web/API/NetworkInformation/effectiveType) is a property of the [Network Information API](/en-US/docs/Web/API/Network_Information_API), exposed to JavaScript via the [navigator.connection](/en-US/docs/Web/API/Navigator/connection) object. To see your effective connection type, open the console of the developer tools of a supporting browser and enter the following:

    navigator.connection.effectiveType;

See also
--------

-   [Network Information API](/en-US/docs/Web/API/Network_Information_API)
-   {{domxref('NetworkInformation')}}
-   {{domxref('NetworkInformation.effectiveType')}}
-   {{HTTPHeader("ECT")}}
