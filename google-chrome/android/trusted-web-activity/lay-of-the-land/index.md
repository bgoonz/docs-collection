2020-02-04

There’s a fair amount of ecosystem around Trusted Web Activities and it can be quite difficult to see how everything relates and what you should use. This article hopes to address that.

If you are new to Trusted Web Activities or just looking for the recommended set of tools you should be using today, here’s what you need to be aware of:

- [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap/): a NodeJS tool that allows developers to create and build an Android APK that wraps an existing PWA. The generated application is powered by Trusted Web Activities, but this is transparent to the developer. No Android development experience is required. Check the [Bubblewrap documentation](https://github.com/GoogleChromeLabs/bubblewrap/blob/master/README.md) to get started.
- [android-browser-helper](https://github.com/GoogleChrome/android-browser-helper): an Android Library that encapsulates the Trusted Web Activities protocol. Recommended for developers who are familiar with Android development and want to use Trusted Web Activities as one of the Activities in their Android App or make customisations that are not supported by Bubblewrap. To get started with android-browser-helper, check the [documentation](/docs/android/trusted-web-activity/integration-guide) and our [demos](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos).

The next section gives a brief summary of all the projects in relation to each other. Finally (for the really curious) there’s a history section to show you how we got here and where we’re planning to go in the near future.

## An overview of the libraries {: \#library-overview }

Here’s a short, single sentence summary of each of the libraries you may end up using:

- [androidx.browser](https://developer.android.com/jetpack/androidx/releases/browser), an Android library for interacting with the browser installed on the user’s device.
- The [Android Browser Helper](https://github.com/GoogleChrome/android-browser-helper), a library building on androidx.browser for Trusted Web Activity clients providing convenience methods and sensible defaults.
- [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap/), a tool to create Trusted Web Activities from PWAs without touching any Java code.

In addition, each of these libraries/tools replaces an older one:

- **androidx.browser** replaces the [Custom Tabs Support Library](https://developer.android.com/topic/libraries/support-library/packages#custom-tabs).
- The **Android Browser Helper** should be used instead of the [custom-tabs-client](https://github.com/GoogleChrome/custom-tabs-client).
- **Bubblewrap** should be used instead of [svgomg-twa](https://github.com/GoogleChromeLabs/svgomg-twa).

## History {: \#history }

### The Android Support Library {: \#android-support-library }

The [Android Support Library](https://developer.android.com/topic/libraries/support-library) extends the Android platform with new APIs and compatibility features. It is split across multiple packages, with the [Custom Tabs Support Library](https://developer.android.com/topic/libraries/support-library/packages#custom-tabs) containing functionality for interacting with browsers on the user’s system. Development of the **Custom Tabs Support Library** was primarily done in the [custom-tabs-client](https://github.com/GoogleChrome/custom-tabs-client) GitHub repo, with the changes being upstreamed back into the **Android Support Library**.

A [Custom Tab](/docs/android/custom-tabs) is an Android Activity that uses a browser to display a web page. The primary benefit for the developer is that it can be themed and has a close button, so the user still remains in the developer’s app (instead of leaving the app and going to the full browsing experience). As an Android API, Custom Tabs can be supported by any browser and will use the user’s default browser (although this can be overridden by developers).

Because [Trusted Web Activities](/docs/android/trusted-web-activity) are built on top of Custom Tabs, they started their life in this **custom-tabs-client** library. Trusted Web Activities remove the Custom Tabs top bar when the user is browsing a site owned by the app’s developer. This opens the doors to seamless integration of your website within a native Android app, and can be used to create apps where all functionality is provided by the web.

### AndroidX {: \#androidx }

The **Android Support Library** was later rebranded as [AndroidX](https://developer.android.com/jetpack/androidx), which itself is part of a larger effort to improve developer experience called [JetPack](https://developer.android.com/jetpack). So, Custom Tabs and Trusted Web Activities had to move from the **Custom Tabs Support Library** to the new [androidx.browser](https://developer.android.com/jetpack/androidx/releases/browser).

Some of the code that we had written in custom-tabs-client was appropriate for a library of Trusted Web Activity helper classes, but not for an Android API. Code dealing with checking for out of date Chrome versions and prompting the user to update or making decisions about how data should be stored could not move into AndroidX. Therefore, we created an alternative library to contain these parts of **custom-tabs-client** that couldn’t go into **androidx.browser**, and so the [Android Browser Helper](https://github.com/GoogleChrome/android-browser-helper) was born.

The **Android Browser Helper** was created to contain code that can be specific to browsers (not just Chrome, we’re open to code specifically for other browsers) and can make concrete decisions that libraries shouldn’t. We took this opportunity to generally separate the roles of these two libraries:

- **androidx.browser** contains the basic building blocks for interacting with browsers on the user’s system.
- The **Android Browser Helper** contains convenient to use and sensible default implementations.

### Bootstrapping {: \#bootstrapping }

Developers are busy people, with a lot of work to do and deadlines to match. To help with this, we created two tools to let user’s bootstrap their Trusted Web Activity.

The first (and oldest) is [svgomg-twa](https://github.com/GoogleChromeLabs/svgomg-twa), which is a GitHub hosted Android Project that launches a Trusted Web Activity. It was originally designed to be a demo project which evolved into more of a template. Users can clone that repo and modify the [build.gradle](https://github.com/GoogleChromeLabs/svgomg-twa/blob/master/app/build.gradle) file to point to their own website, build it and produce a Trusted Web Activity without touching any Java code. (Getting the Digital Asset Links to verified does require more effort, read more [here](/docs/android/trusted-web-activity/quick-start).)

**svgomg-twa** started out depending on custom-tabs-client, but then moved over to the Android Browser Helper (and transitively androidx.browser).

The newest and shiniest tool is [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap/), a Node.js tool that will take your Web App Manifest and generate a Trusted Web Activity for you. This is the easiest way to create a Trusted Web Activity from an existing PWA and doesn’t require any Android development knowledge.

## Near Future {: \#near-future }

We will be deprecating **svgomg-twa** for two reasons:

- **Bubblewrap** essentially generates a filled out **svgomg-twa** for a developer. It does this interactively and can take the configuration from a Web App manifest (which a PWA will likely already have).
- If developers want a reference for how to start their own Trusted Web Activity project from scratch, they can look at the Android Browser Helpers [demos](https://github.com/GoogleChrome/android-browser-helper/tree/master/demos) directory.

New developers should use **Bubblewrap** to generate their project instead. If you’re already using **svgomg-twa** and have made some heavy modifications, you’ll be fine to continue doing so, but won’t get updates.

We plan to make **Bubblewrap** as capable as possible, so if there’s an obvious feature missing or you come across a bug, feel free to [create an issue](https://github.com/GoogleChromeLabs/bubblewrap/issues/new).
