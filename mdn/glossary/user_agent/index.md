--- title: User agent slug: Glossary/User_agent tags: - Browser - Glossary - UA - User-agent - Web Browser - WebMechanics - agent - user agent - userAgent ---

<span class="seoSummary">A user agent is a computer program representing a person, for example, a {{Glossary("Browser","browser")}} in a {{Glossary("World Wide Web", "Web")}} context.</span>

Besides a browser, a user agent could be a bot scraping webpages, a download manager, or another app accessing the Web. Along with each request they make to the server, browsers include a self-identifying {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} header called a user agent (UA) string. This string often identifies the browser, its version number, and its host operating system.

<span class="objectBox objectBox-string">Spam bots, download managers, and some browsers often send a fake UA string to announce themselves as a different client. This is known as _user agent spoofing_.</span>

<span class="objectBox objectBox-string">The user agent string can be accessed with </span>{{Glossary("JavaScript")}}<span class="objectBox objectBox-string"> on the client side using the {{domxref("NavigatorID/userAgent", "NavigatorID.userAgent")}} property.</span>

A typical user agent string looks like this: <span class="objectBox objectBox-string">`"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`. </span>

## Learn more

### General knowledge

- {{interwiki("wikipedia", "User agent")}} on Wikipedia

### Technical reference

- {{domxref("NavigatorID/userAgent", "NavigatorID.userAgent")}}
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "14.43")}}: The `User-Agent` header

1.  [MDN Web Docs Glossary](/en-US/docs/Glossary)
    1.  {{Glossary("Browser")}}
2.  HTTP Headers
    1.  {{HTTPHeader("User-agent")}}
