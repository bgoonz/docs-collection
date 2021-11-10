<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format" alt="Betty Crocker Cake Mix—Coffee Cinnamon." class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/uWpEHKUQjInjnw4h1YIC.jpg?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#wake-lock-api-case-study:-300percent-increase-in-purchase-intent-indicators-on-bettycrocker.com" class="w-toc__header--link">Wake Lock API case study: 300% increase in purchase intent indicators on BettyCrocker.com</a>

- [The retired iOS and Android apps](#the-retired-ios-and-android-apps)
- [Bringing the killer feature to the web with the Wake Lock API](#bringing-the-killer-feature-to-the-web-with-the-wake-lock-api)
- [Requesting a wake lock](#requesting-a-wake-lock)
- [Releasing a wake lock](#releasing-a-wake-lock)
- [The implementation](#the-implementation)
- [The wake lock container](#the-wake-lock-container)
- [The wake lock component](#the-wake-lock-component)
- [Results](#results)
- [Conclusions](#conclusions)
- [Acknowledgements](#acknowledgements)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# Wake Lock API case study: 300% increase in purchase intent indicators on BettyCrocker.com

Nothing is worse when cooking with a mobile device than its screen turning off in the middle of a recipe step. Learn how cooking site BettyCrocker.com used the Wake Lock API to prevent this from happening.

May 19, 2020 <span class="w-author__separator">•</span> Updated May 19, 2020

[<img src="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Thomas Steiner" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/8PLpVmFef6mj72MVWeiN.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/thomassteiner/)

<a href="/authors/thomassteiner/" class="w-author__name-link">Thomas Steiner</a>

- <a href="https://twitter.com/tomayac" class="w-author__link">Twitter</a>
- <a href="https://github.com/tomayac" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@tomayac" class="w-author__link">Glitch</a>
- <a href="https://blog.tomayac.com/" class="w-author__link">Blog</a>

[<img src="https://web-dev.imgix.net/image/admin/1v5F1SOBl46ZghbHQMle.svg" alt="Phillip Kriegel" class="w-author__image" width="64" height="64" />](/authors/phillipkriegel/)

<a href="/authors/phillipkriegel/" class="w-author__name-link">Phillip Kriegel</a>

- <a href="https://github.com/philkrie" class="w-author__link">GitHub</a>
- <a href="https://www.philkrie.me/" class="w-author__link">Blog</a>

For nearly a century, Betty Crocker has been America's source for modern cooking instruction and trusted recipe development. Launched in 1997, their site [BettyCrocker.com](https://www.bettycrocker.com/) today receives more than 12 million visitors per month. After they **implemented the Wake Lock API**, their **indicators of [purchase intent](https://www.igi-global.com/dictionary/technology-and-sharing-economy-based-business-models-for-marketing-to-connected-consumers/24144) were about 300% higher** for wake lock users compared to all users.

## The retired iOS and Android apps <a href="#the-retired-ios-and-android-apps" class="w-headline-link">#</a>

Released to [much fanfare](https://consumergoods.com/betty-crocker-launches-cookbook-app) in 2014, Betty Crocker recently took their apps out of the Apple App Store and the Google Play Store after they had been deprioritized. For a long time, the Betty Crocker team has preferred adding new features to the mobile site instead of the iOS/Android apps. The technical platform the iOS/Android apps were created on was outdated, and the business did not have the resources to support updating and maintaining the apps moving forward. The web app also was objectively way bigger traffic-wise, more modern, and easier to enhance.

The iOS/Android apps did have one _killer feature_, though, that their users loved:

> Millennial cooking pro tip: the [@BettyCrocker](https://twitter.com/BettyCrocker) mobile app doesn't dim or lock when you're following a recipe. —[@AvaBeilke](https://twitter.com/AvaBeilke/status/996746473168670720)

> 80% of people cook with a device in the kitchen, but screen dimming and locking is a problem. What did [@BettyCrocker](https://twitter.com/BettyCrocker) do? Updated their app to NOT dim when users are in a recipe. —[@Katie_Tweedy\_](https://twitter.com/Katie_Tweedy_/status/996746567762763776)

## Bringing the killer feature to the web with the Wake Lock API <a href="#bringing-the-killer-feature-to-the-web-with-the-wake-lock-api" class="w-headline-link">#</a>

When cooking with a device, there is nothing more frustrating than having to touch the screen with messy hands or even your nose when the screen turns off. Betty Crocker asked themselves how they could port the killer feature of their iOS/Android apps over to the web app. This is when they learned about [Project Fugu](https://developers.google.com/web/updates/capabilities) and the [Wake Lock API](/wakelock/).

<img src="https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format" alt="A person kneading dough on a kitchen table covered in flour" sizes="(min-width: 800px) 800px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/admin/Yoj65m20XpoPdaL8ejAv.jpg?auto=format&amp;w=1600 1600w" width="800" height="533" />

The Wake Lock API provides a way to prevent the device from dimming or locking the screen. This capability enables new experiences that, until now, required an iOS/Android app. The Wake Lock API reduces the need for hacky and potentially power-hungry workarounds.

### Requesting a wake lock <a href="#requesting-a-wake-lock" class="w-headline-link">#</a>

To request a wake lock, you need to call the `navigator.wakeLock.request()` method that returns a `WakeLockSentinel` object. You will use this object as a [sentinel value](https://en.wikipedia.org/wiki/Sentinel_value). The browser can refuse the request for various reasons (for example, because the battery is too low), so it is a good practice to wrap the call in a `try…catch` statement.

### Releasing a wake lock <a href="#releasing-a-wake-lock" class="w-headline-link">#</a>

You also need a way to release a wake lock, which is achieved by calling the `release()` method of the `WakeLockSentinel` object. If you want to automatically release the wake lock after a certain period of time has passed, you can use `window.setTimeout()` to call `release()`, as shown in the example below.

    // The wake lock sentinel.
    let wakeLock = null;

    // Function that attempts to request a wake lock.
    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
          console.log('Wake Lock was released');
        });
        console.log('Wake Lock is active');
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    };

    // Request a wake lock…
    await requestWakeLock();
    // …and release it again after 5s.
    window.setTimeout(() => {
      wakeLock.release();
      wakeLock = null;
    }, 5000);

## The implementation <a href="#the-implementation" class="w-headline-link">#</a>

With the new web app, users should be enabled to easily navigate through a recipe, complete steps, and even walk away without the screen locking. To achieve this goal, the team first built a quick front-end prototype as a proof of concept and to gather UX input.

After the prototype proved useful, they designed a [Vue.js component](https://vuejs.org/v2/guide/components.html) that could be shared across all their brands ([BettyCrocker](https://www.bettycrocker.com/), [Pillsbury](https://www.pillsbury.com/), and [Tablespoon](https://www.tablespoon.com/)). Even though only Betty Crocker had iOS and Android apps, the three sites do have a shared code base, so they were able to implement the component once, and deploy it everywhere, as shown in the screenshots below.

<figure><img src="https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format" alt="BettyCrocker.com wake lock toggle." class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/I9y4AIPEK9P4V0JFn4y1.png?auto=format&amp;w=1200 1200w" width="600" height="170" /><figcaption>BettyCrocker.com wake lock toggle.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format" alt="Pillsbury.com wake lock toggle." class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/PXS7bnWxYiLKtmLekulr.png?auto=format&amp;w=1200 1200w" width="600" height="152" /><figcaption>Pillsbury.com wake lock toggle.</figcaption></figure><figure><img src="https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format" alt="Tablespoon.com wake lock toggle." class="w-screenshot" sizes="(min-width: 600px) 600px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/admin/S5NQabO9qJTwlidx2eZo.png?auto=format&amp;w=1200 1200w" width="600" height="152" /><figcaption>Tablespoon.com wake lock toggle.</figcaption></figure>When developing the component based on the new site's modernized framework, there was a strong focus on the [`ViewModel` layer of the MVVM pattern](https://012.vuejs.org/guide/). The team also programmed with interoperability in mind to enable functionality on legacy and new frameworks of the site.

To keep track of viewability and usability, Betty Crocker integrated analytics tracking for core events in the wake lock lifecycle. The team utilized feature management to deploy the wake lock component to a single site for initial production rollout, and then deployed the feature to the rest of the sites after monitoring usage and page health. They continue to monitor analytics data based on the usage of this component.

As a failsafe for users, the team created a forced timeout to disable the wake lock after one hour of inactivity. The final implementation they settled on was in the short-term a toggle switch on all recipe pages across their sites. In the long-term, they envision a revamped recipe page view.

### The wake lock container <a href="#the-wake-lock-container" class="w-headline-link">#</a>

    var wakeLockControl = () => {
      return import(/* webpackChunkName: 'wakeLock' */ './wakeLock');
    };

    export default {
      components: {
        wakeLockControl: wakeLockControl,
      },
      data() {
        return {
          config: {},
          wakeLockComponent: '',
        };
      },
      methods: {
        init: function(config) {
          this.config = config || {};
          if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
            this.wakeLockComponent = 'wakeLockControl';
          } else {
            console.log('Browser not supported');
          }
        },
      },
    };

### The wake lock component <a href="#the-wake-lock-component" class="w-headline-link">#</a>

    <template>
      <div class="wakeLock">
        <div class="textAbove"></div>
        <label class="switch" :aria-label="settingsInternal.textAbove">
          <input type="checkbox" @change="onChange()" v-model="isChecked">
          <span class="slider round"></span>
        </label>
      </div>
    </template>

    <script type="text/javascript">
      import debounce from 'lodash.debounce';

      const scrollDebounceMs = 1000;

      export default {
        props: {
          settings: { type: Object },
        },
        data() {
          return {
            settingsInternal: this.settings || {},
            isChecked: false,
            wakeLock: null,
            timerId: 0,
          };
        },
        created() {
          this.$_raiseAnalyticsEvent('Wake Lock Toggle Available');
        },
        methods: {
          onChange: function() {
            if (this.isChecked) {
              this.$_requestWakeLock();
            } else {
              this.$_releaseWakeLock();
            }
          },
          $_requestWakeLock: async function() {
            try {
              this.wakeLock = await navigator.wakeLock.request('screen');
              //Start new timer
              this.$_handleAbortTimer();
              //Only add event listeners after wake lock is successfully enabled
              document.addEventListener(
                'visibilitychange',
                this.$_handleVisibilityChange,
              );
              window.addEventListener(
                'scroll',
                debounce(this.$_handleAbortTimer, scrollDebounceMs),
              );
              this.$_raiseAnalyticsEvent('Wake Lock Toggle Enabled');
            } catch (e) {
              this.isChecked = false;
            }
          },
          $_releaseWakeLock: function() {
            try {
              this.wakeLock.release();
              this.wakeLock = null;
              //Clear timer
              this.$_handleAbortTimer();
              //Clean up event listeners
              document.removeEventListener(
                'visibilitychange',
                this.$_handleVisibilityChange,
              );
              window.removeEventListener(
                'scroll',
                debounce(this.$_handleAbortTimer, scrollDebounceMs),
              );
            } catch (e) {
              console.log(`Wake Lock Release Error: ${e.name}, ${e.message}`);
            }
          },
          $_handleAbortTimer: function() {
            //If there is an existing timer then clear it and set to zero
            if (this.timerId !== 0) {
              clearTimeout(this.timerId);
              this.timerId = 0;
            }
            //Start new timer; Will be triggered from toggle enabled or scroll event
            if (this.isChecked) {
              this.timerId = setTimeout(
                this.$_releaseWakeLock,
                this.settingsInternal.timeoutDurationMs,
              );
            }
          },
          $_handleVisibilityChange: function() {
            //Handle navigating away from page/tab
            if (this.isChecked) {
              this.$_releaseWakeLock();
              this.isChecked = false;
            }
          },
          $_raiseAnalyticsEvent: function(eventType) {
            let eventParams = {
              EventType: eventType,
              Position: window.location.pathname || '',
            };
            Analytics.raiseEvent(eventParams);
          },
        },
      };
    </script>

### Results <a href="#results" class="w-headline-link">#</a>

The Vue.js component has been deployed on all three sites and delivered great results. During the period from December 10th, 2019 to January 10th, 2020, BettyCrocker.com reported the following metrics:

- Of all Betty Crocker users with a browser compatible with the Wake Lock API, 3.5% of them enabled the feature immediately, making it a top-5 action.
- The session duration for users who enabled the wake lock was 3.1× longer than for users who did not.
- The bounce rate for users who enabled the wake lock was 50% lower than for those not using the wake lock feature.
- Indicators of purchase intent were about 300% higher for wake lock users compared to all users.

  3.1<sub>×</sub>

Longer session duration

50<sub>%</sub>

Lower bounce rate

300<sub>%</sub>

Higher purchase intent indicators

## Conclusions <a href="#conclusions" class="w-headline-link">#</a>

Betty Crocker has seen fantastic results using the Wake Lock API. You can test the feature yourself by searching for your favorite recipe on any of their sites ([BettyCrocker](https://www.bettycrocker.com/), [Pillsbury](https://www.pillsbury.com/), or [Tablespoon](https://www.tablespoon.com/)) and enabling the **Prevent your screen from going dark while you cook** toggle.

Use cases for wake locks do not stop at recipe sites. Other examples are boarding pass or ticket apps that need to keep the screen on until the barcode has been scanned, kiosk-style apps that keep the screen on continuously, or web-based presentation apps that prevent the screen from sleeping during a presentation.

We have compiled [everything you need to know about the Wake Lock API](/wakelock/) in a comprehensive article on this very site. Happy reading, and happy cooking!

## Acknowledgements <a href="#acknowledgements" class="w-headline-link">#</a>

The _person kneading dough_ photo courtesy of [Julian Hochgesang](https://unsplash.com/@julianhochgesang) on [Unsplash](https://unsplash.com/photos/huepD-06_pQ).

<a href="/tags/case-study/" class="w-chip">Case Study</a> <a href="/tags/capabilities/" class="w-chip">Capabilities</a>

<span class="w-mr--sm"> Last updated: May 19, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/betty-crocker/index.md)

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
