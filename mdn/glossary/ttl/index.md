--- title: TTL slug: Glossary/TTL tags: - Caching - Domain Name System - Glossary - Infrastructure - Networking - Performance ---

<span class="seoSummary">TTL can refer either to : </span>

- <span class="seoSummary">the lifetime of a packet in a network can do before being released</span>
- <span class="seoSummary">the expiry time of cached data</span>

## Networking

In networking, the TTL, embedded in the packet, is a usually defined as a number of hops or as an expiration timestamp after which the packet is dropped. It provides a way to avoids network congestion, but releasing packets after they roamed the network too long.

## Caching

In the context of caching, TTL (as an unsigned 32-bit integer) being a part of the {{Glossary("Response header", "HTTP response header")}} or the {{Glossary("DNS")}} query, indicates the amount of time in seconds during which the resource can be cached by the requester.

## Learn more

### General knowledge

- {{Interwiki("wikipedia", "Time to live", "TTL")}} on Wikipedia

### Technical reference

- [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181#section-8) on IETF

- [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035) on IETF
