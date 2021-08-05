<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format" alt="An illustration of a smartphone next to the text &quot;Scale on web&quot;" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/373gEGS1WasAvqbvVoH9.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#how-goibibo&#39;s-pwa-improved-conversions-by-60percent" class="w-toc__header--link">How Goibibo's PWA improved conversions by 60%</a>

- [Highlighting the opportunity](#opportunity)
- [The tools they used](#tools)
- [Contact Picker API](#contact-picker)
- [WebOTP](#web-otp)
- [Web Share API](#web-share)
- [Push notifications](#notifications)
- [How new web capabilities improved Goibibo's funnel](#funnel)
- [Overall business results](#results)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# How Goibibo's PWA improved conversions by 60%

Bridging the gap between web and iOS/Android experiences to delight users.

Sep 29, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/progressive-web-apps" class="w-post-signpost__link">Progressive Web Apps</a>

[Goibibo](https://goibibo.com) is India's leading online travel booking portal. By building a full-featured and reliable [Progressive Web App](/pwa) that matched the capabilities of their iOS and Android apps, Goibibo achieved a 60% increase in conversions (compared to their previous web flow).

60<sub>%</sub>

Increase in conversions

20<sub>%</sub>

Increase in logged-in users

## Highlighting the opportunity <a href="#opportunity" class="w-headline-link">#</a>

In their journey to improve user experience, Goibibo noticed a few trends:

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format" class="w-screenshot w-screenshot--filled w-figure--inline-right" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/0dmwrJViuhgA3I4IDCkj.png?auto=format&amp;w=1600 1600w" width="800" height="1624" /></figure>-   With users either already shifted or quickly shifting to mobile, their initial strategy towards mobile web was to build a lightweight and functional application. This worked, with search-to-details-page conversions equalizing on web and iOS/Android, but the iOS/Android apps won in all further steps of the conversion funnel.

- There were significant drop offs at the payment stage of the PWA compared to their iOS/Android apps. This was when they decided to invest in their PWA with the goal of letting users experience the same UX on their PWA as on their iOS/Android apps.

- They also noticed nearly 20% of their users were starting a session on the web and converting on the app. This reiterated their belief that a chunk of users will go untapped without an aligned PWA and iOS/Android app strategy.

## The tools they used <a href="#tools" class="w-headline-link">#</a>

### Contact Picker API <a href="#contact-picker" class="w-headline-link">#</a>

Nearly 15% of Goibibo's logged-in users make bookings for family or friends on the mobile web. Goibibo used the [Contact Picker API](/contact-picker/) to enable PWA users to fill in forms on behalf of others hassle-free.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Pdqx8qyXbwzzS8ivNS3l.png?auto=format&amp;w=1600 1600w" width="800" height="360" /></figure>

### WebOTP <a href="#web-otp" class="w-headline-link">#</a>

Because secure authentication is a big challenge in India, Goibibo used the [WebOTP (One-Time Password) API](/web-otp/) to reduce sign-in friction on their PWA.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/Nf0NeE3sSFOrYleAsxVd.png?auto=format&amp;w=1600 1600w" width="800" height="526" /></figure>

### Web Share API <a href="#web-share" class="w-headline-link">#</a>

To bridge the gap between their web and iOS/Android experiences, Goibibo adopted the [Web Share API](/web-share/) to make it easier to share links, text, or files around hotel details, train availability, and so on.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/u5pl2i6MHBkDZESQRHXR.png?auto=format&amp;w=1600 1600w" width="800" height="356" /></figure>

### Push notifications <a href="#notifications" class="w-headline-link">#</a>

Goibibo used [web push notifications](https://developers.google.com/web/fundamentals/push-notifications) to retarget bounced users with relevant updates like flight fare alerts and other customized content.

<figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format" class="w-screenshot" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/baFHO5RXsOVdE6qiT0AR.png?auto=format&amp;w=1600 1600w" width="800" height="414" /></figure>

## How new web capabilities improved Goibibo's funnel <a href="#funnel" class="w-headline-link">#</a>

## <figure><img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format" class="w-screenshot" sizes="(min-width: 711px) 711px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/rsENPcTITCviudxIhPU1.png?auto=format&amp;w=1422 1422w" width="711" height="627" /></figure>Overall business results <a href="#results" class="w-headline-link">#</a>

- Iterations to PWA interfaces resulted in a 60% jump in conversion rate (compared to the previous mobile web flow) and delighted users.
- [New web capabilities](/fugu-status/) improved UX and caused a 20% increase in logged-in users (who convert 6x more).

> We always strive for seamless user experience and in turn better conversion rates. We saw improved user engagement and better conversion rates on PWA than on the original mobile web flow. Hence, investing in PWA is critical to our success and if we had not, it would have cost us a fortune.
>
> Rithish Saralaya, VP Engineering, Goibibo

Check out the [Scale on web case studies](/tags/scale-on-web) page for more success stories from India and Southeast Asia.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a> <a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a> <a href="/tags/scale-on-web/" class="w-chip">Scale on web</a>

<span class="w-mr--sm"> Last updated: Sep 29, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/goibibo/index.md)

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
