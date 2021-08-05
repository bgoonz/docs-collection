<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format" alt="The Lowes logo." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/U0Xrfy2kVLEb3JSiPS5C.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#lowe&#39;s-website-is-among-fastest-performing-e-commerce-websites" class="w-toc__header--link">Lowe's website is among fastest performing e-commerce websites</a>

- [Problem](#problem)
- [Solution](#solution)
- [Impact](#impact)
- [Implementation](#implementation)
- [Automated Speed Governance (ASG) process flow](<#automated-speed-governance-(asg)-process-flow>)
- [Spinnaker](#spinnaker)
- [Jenkins and Lighthouse](#jenkins-and-lighthouse)
- [Jenkins and SSG app](#jenkins-and-ssg-app)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Lowe's website is among fastest performing e-commerce websites

By building an automated performance testing and monitoring system, the Lowe's Site Speed Team test pull requests against performance budgets, and prevent performance regressions going into production.

Mar 23, 2021

[<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/urBoPCVFLFNYxcA4rWBO.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Ashish Choudhury" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/urBoPCVFLFNYxcA4rWBO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/urBoPCVFLFNYxcA4rWBO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/urBoPCVFLFNYxcA4rWBO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/urBoPCVFLFNYxcA4rWBO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/urBoPCVFLFNYxcA4rWBO.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/choudhuryashish/)

<a href="/authors/choudhuryashish/" class="w-author__name-link">Ashish Choudhury</a>

[<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/E0gT4HrFyUImA5COXOme.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Dinakar Chandolu" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/E0gT4HrFyUImA5COXOme.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/E0gT4HrFyUImA5COXOme.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/E0gT4HrFyUImA5COXOme.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/E0gT4HrFyUImA5COXOme.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/E0gT4HrFyUImA5COXOme.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/dinakarchandolu/)

<a href="/authors/dinakarchandolu/" class="w-author__name-link">Dinakar Chandolu</a>

[<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D36izBJ4CpCDjAxWhUe6.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Abhimanyu Raibahadur" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D36izBJ4CpCDjAxWhUe6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D36izBJ4CpCDjAxWhUe6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D36izBJ4CpCDjAxWhUe6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D36izBJ4CpCDjAxWhUe6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/D36izBJ4CpCDjAxWhUe6.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/abhimanyuraibahadur/)

<a href="/authors/abhimanyuraibahadur/" class="w-author__name-link">Abhimanyu Raibahadur</a>

[<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/5FvsHblPdOVKpC5Pdru2.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Dhilip venkatesh Uvarajan" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/5FvsHblPdOVKpC5Pdru2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/5FvsHblPdOVKpC5Pdru2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/5FvsHblPdOVKpC5Pdru2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/5FvsHblPdOVKpC5Pdru2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/5FvsHblPdOVKpC5Pdru2.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/dhilipvenkateshuvarajan/)

<a href="/authors/dhilipvenkateshuvarajan/" class="w-author__name-link">Dhilip venkatesh Uvarajan</a>

[<img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/lR8Vo8IDNt6AnLSVvObk.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Safwan Samla" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/lR8Vo8IDNt6AnLSVvObk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/lR8Vo8IDNt6AnLSVvObk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/lR8Vo8IDNt6AnLSVvObk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/lR8Vo8IDNt6AnLSVvObk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/lR8Vo8IDNt6AnLSVvObk.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/safwans/)

<a href="/authors/safwans/" class="w-author__name-link">Safwan Samla</a>

[<img src="https://web-dev.imgix.net/image/admin/obrDCmQVA55Oc4bBX5ek.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Garima Mimani" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/obrDCmQVA55Oc4bBX5ek.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/obrDCmQVA55Oc4bBX5ek.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/obrDCmQVA55Oc4bBX5ek.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/obrDCmQVA55Oc4bBX5ek.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/obrDCmQVA55Oc4bBX5ek.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/gmimani/)

<a href="/authors/gmimani/" class="w-author__name-link">Garima Mimani</a>

- <a href="https://github.com/garimamimani" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@garimamimani" class="w-author__link">Glitch</a>

This post was authored by [Ashish Choudhury](https://www.linkedin.com/in/choudhuryashish/), [Dinakar Chandolu](https://www.linkedin.com/in/dinakarchandolu/), [Abhimanyu Raibahadur](https://www.linkedin.com/in/abhimanyuraibahadur/), and [Dhilipvenkatesh Uvarajan](https://www.linkedin.com/in/dhilip-venkatesh-uvarajan-16914624/) from Lowe's.

[Lowe's](https://www.lowes.com/) is a nearly $90B home improvement retailer that operates about 2,200 stores and employs more than 300,000 associates. By building an automated testing and monitoring system that prevents performance regressions from deploying to production, Lowe's Site Speed Team was able to improve its website performance, ranking among the top retail sites.

## Problem <a href="#problem" class="w-headline-link">#</a>

The Site Speed Team's goal is to make the Lowe's site one of the fastest e-commerce sites in terms of page load performance. Before they built their automated testing and monitoring system, Lowe's website developers were unable to measure performance automatically in pre-production environments. Existing tools only conducted tests in the production environment. As a result, inferior builds slipped into production, creating a poor user experience. These inferior builds would remain in production until they were detected by the Site Speed Team and reverted by the author.

## Solution <a href="#solution" class="w-headline-link">#</a>

The Site Speed Team used open source tools to build an automated performance testing and monitoring system for pre-production environments. The system measures the performance of every pull request (PR) and gates the PR from shipping to production if it does not meet the Site Speed Team's [performance budget](/performance-budgets-101/) and [metric criteria](/vitals/). The system also measures SEO and ADA compliance.

## Impact <a href="#impact" class="w-headline-link">#</a>

From a sample of 1 team over 16 weeks deploying 102 builds, the automated performance testing and monitoring system prevented 32 builds with subpar performance from going into production.

Where it used to take the Site Speed Team three to five days to inform developers that they had shipped performance regressions into production, the system now automatically informs developers of performance problems five minutes after submitting a pull request in a pre-production environment.

Code quality is improving over time, as measured by the fact that fewer pull requests are being flagged for performance regressions. The Site Speed Team is also gradually tightening governance budgets to continuously improve site quality.

In general, having clear ownership of problematic code has shifted the engineering culture. Instead of begrudging reactive corrections because it was never clear who actually introduced the problems, the team can make proactive optimizations with ownership of problematic code being objectively attributable.

## Implementation <a href="#implementation" class="w-headline-link">#</a>

The heart of the Site Speed Governance (SSG) app is [Lighthouse CI](/lighthouse-ci/). The SSG app uses Lighthouse to validate and audit the page performance of every pull request.

<figure><img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/62alkvo2eRYoyptYeDbZ.png?auto=format&amp;w=1600 1600w" width="800" height="567" /></figure>The SSG app causes a build to fail if the Site Speed Team's defined [performance budget](/performance-budgets-101/) and metric targets are not reached. It enforces not only load performance but also SEO, PWA, and accessibility. It can report status immediately to authors, reviewers, and SRE teams. It can also be configured to bypass the checks when exceptions are needed.

## Automated Speed Governance (ASG) process flow <a href="#automated-speed-governance-(asg)-process-flow" class="w-headline-link">#</a>

### Spinnaker <a href="#spinnaker" class="w-headline-link">#</a>

Start point. A developer merges their code into a pre-production environment.

1.  Deploy the pre-production environment with CDN assets.
2.  Check for the successful deployment.
3.  Run a [Docker](https://www.docker.com/) container to start building the ASG application or send a notification (in the event of deployment failure).

### Jenkins and Lighthouse <a href="#jenkins-and-lighthouse" class="w-headline-link">#</a>

1.  Build the ASG application with [Jenkins](https://www.jenkins.io/).
2.  Run a custom Docker container that has Chrome and Lighthouse installed. Pull `lighthouserc.json` from the SSG app and run `lhci autorun --collect-url=https://example.com`.

### Jenkins and SSG app <a href="#jenkins-and-ssg-app" class="w-headline-link">#</a>

1.  Extract `assertion-results.json` from lhci and compare it to predefined budgets in `budgets.json`. Save the output as a text file and upload it to [Nexus](https://www.sonatype.com/nexus/repository-oss) for future comparisons.
2.  Compare the current `assertion-results.json` to the last successful build (downloaded from Nexus) and save it as a text file.
3.  Build an HTML email with the success or failure information.
4.  Send the email to the relevant distribution lists with Jenkins.

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/web-vitals/" class="w-chip">Web Vitals</a> <a href="/tags/performance/" class="w-chip">Performance</a>

<span class="w-mr--sm"> Last updated: Mar 23, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/lowes/index.md)

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
