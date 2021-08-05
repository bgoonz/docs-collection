Developer Guide
===============

This document describes details of how to implement Google tag Manager on your site.

Using a Data Layer
------------------

To ensure maximum flexibility, portability, and ease of implementation, Google Tag Manager functions best when deployed alongside a data layer. A data layer is an object that contains all of the information that you want to pass to Google Tag Manager. Information such as events or variables can be passed to Google Tag Manager via the data layer, and triggers can be set up in Google Tag Manager based on the values of variables (e.g., fire a remarketing tag when `purchase_total` > $100) or based on the specific events. Variable values can also be passed through to other tags (e.g., pass `purchase_total` into the value field of a tag).

Rather than referencing variables, transaction information, page categories, and other important signals scattered throughout your page, Google Tag Manager is designed to easily reference information that you put in this data layer. However, explicitly declaring the data layer is optional and if you choose not to implement the data layer, you can still access values from the page using the [Variables](https://support.google.com/tagmanager/answer/6106899) feature, but you cannot use events without the data layer. Implementing the data layer with variables and associated values, as opposed to waiting for those variables to load throughout the page, ensures that they will be available as soon as you need them to fire tags.

### Adding Data Layer Variables to a Page

To set up your data layer, add the following snippet of code to the head of your page above your container snippet:

<script>\
  dataLayer =  [];\
</script>

The above snippet is an empty object that can be populated with information to pass to Google Tag Manager. For example, we might want to set data layer variables within the data layer to indicate that the page is a signup page and that the visitor has been identified as being a high-value customer. To do so, we'd populate our data layer as follows:

<script>\
  dataLayer =  [{\ 'pageCategory':  'signup',\ 'visitorType':  'high-value'\ }];\
</script>

For example, Google Tag Manager can be configured to fire tags on all pages marked as `signup` and/or on which the visitor has been marked as `high-value`. It's important that this data layer snippet be set above the container snippet as described in the [Quick Start Guide](https://developers.google.com/tag-manager/quickstart).

If the data layer code is called after the container snippet, any variables declared within will not be available for Google Tag Manager to selectively fire tags on page load. Here are some examples:

#### Incorrect

<!-- Google Tag Manager -->\
...\
<!-- End Google Tag Manager -->\
<script>\
  dataLayer =  [{\ 'pageCategory':  'signup',\ 'visitorType':  'high-value'\ }];\
</script>

Note: If you put the Google Tag Manager container snippet above the dataLayer array, Google Tag Manager may malfunction, and will not be able to read the variables defined in the array.

#### Correct

<script>\
  dataLayer =  [{\ 'pageCategory':  'signup',\ 'visitorType':  'high-value'\ }];\
</script>\
<!-- Google Tag Manager -->\
...\
<!-- End Google Tag Manager -->

Each of the variables declared within the data layer object will persist as long as the visitor remains on the current page. Data layer variables that are relevant across pages (e.g. `visitorType`) must therefore be declared in the data layer on each page of your website. While you don't need to put the same set of variables in the data layer on every page, you should use a consistent naming convention. In other words, if you set the page category on the signup page using `pageCategory`, to set a page category on a purchase page, you should do so using `pageCategory` as well.

Explicitly declaring a data layer is optional. Therefore, if you choose not to implement the data layer code and populate it with variables, the Google Tag Manager container snippet will initiate a data layer object for you.

### Using the Data Layer with HTML Event Handlers

Google Tag Manager provides a special data layer variable called an `event` that is used within JavaScript event listeners to initiate tag firing when a user interacts with website elements such as a button. For example, you may want to fire a conversion tracking tag when a user clicks the `Submit` button on a newsletter signup form. Events may be called based on user interaction with website elements such as links, buttons, components of a menu system, or based on other JavaScript (e.g. time delays, etc.).

This functionality is accomplished by calling the `push` API as a method of the data layer on your page (e.g. attached to the particular elements to be tracked). The basic syntax for setting an event, then, is as follows:

dataLayer.push({'event':  'event_name'});

where `event_name` is a string indicating what the given event or element is.

As an example, to set an event when a user clicks a button, you might modify the button's link to call the `push()` API as follows:

<a  href="#"  name="button1"  onclick="dataLayer.push({'event':  'button1-click'});"  >Button 1</a>

Sometimes, the data you wish to collect or use to trigger certain tags may not load until after the user has interacted with the page. Using a combination of data layer variables and events, you may dynamically push this information to your data layer as necessary.

Data layer variables may be pushed dynamically to the data layer to capture information such as values entered or selected in a form, metadata associated with a video that the visitor is playing, the color of a product (e.g. a car) customized by the visitor, the destination URLs of clicked links, etc.

As with events, this functionality is accomplished by calling the `push()` API to add or replace data layer variables in the data layer. The basic syntax for setting dynamic data layer variables, then, is as follows:

dataLayer.push({'variable_name':  'variable_value'});

Where `variable_name` is a string indicating the name of the data layer variable to be set, and `variable_value` is a string indicating the value of the data layer variable to be set or replaced.

As an example, to set a data layer variable with a color preference when the visitor engages with a car customization widget, you might push the following dynamic data layer variable:

dataLayer.push({'color':  'red'});

### One Push, Multiple Variables

Instead of using `dataLayer.push()` for each variable and event, you can push multiple variables and events at once. Here's an example of how to do this:

dataLayer.push({\ 'color':  'red',\ 'conversionValue':  50,\ 'event':  'customizeCar'\
});

You can use the same technique within a link event handler:

<a  href="#"\
   name="color"\
   onclick="dataLayer.push({\
     'color':  'red',\
     'conversionValue':  50,\
     'event':  'customizeCar'});">Customize Color</a>

It's important to note that pushing a variable of the same name as an existing variable to the data layer will cause the existing value to be overwritten by the new value. For example, if upon clicking the above link, there were already a variable named `color` with a value of `blue` declared within the data layer, that value would be overwritten moving forward with the new value of `red`.

### How the Asynchronous Syntax Works

Google Tag Manager is an asynchronous tag, meaning that when it executes, it does not block other elements from rendering on the page. It also causes the other tags that are deployed via Google Tag Manager to be deployed asynchronously, meaning that a slow loading tag won't block other tracking tags.

The dataLayer object is what makes the asynchronous syntax possible. It acts as a queue, which is a first-in,first-out data structure that collects API calls and tags are fired according to those API calls. To add something to the queue, use the `dataLayer.push` method. The `dataLayer.push` method can be used to pass in extra metadata to Google Tag Manager via [variables](http://support.google.com/tagmanager/bin/answer.py?answer=2644341) and can be used to specify events.

The creation of the dataLayer object can either be specified before the Google Tag Manager snippet, or it will be created by Google Tag Manager if the dataLayer object hasn't already been defined.

For more information on the asynchronous syntax, read the [Tracking Reference for the `dataLayer.push` method](https://developers.google.com/tag-manager/reference#reference).

### Avoiding Common Pitfalls

When implementing Google Tag Manager, keep the following in mind:

#### Do not overwrite your dataLayer

When you use assignment to assign values to `dataLayer` e.g. `dataLayer = [{'item': 'value'}]`, it will overwrite any existing values. It is best to declare your dataLayer as high up in your source code as possible, *above* your container snippet or any [Optimize page hiding snippet](https://developers.google.com/optimize). After your `dataLayer` has been declared, you can use `dataLayer.push({'item': 'value'})` to add additional values to it later in your scripts.

#### The dataLayer object name is case-sensitive

If you try to push a variable or event without the proper casing, the push will not work. Examples:

datalayer.push({'pageTitle':  'Home'}); // Won't work

dataLayer.push({'pageTitle':  'Home'}); // Better

#### Variable names should be enclosed in quotes

While quotes are not strictly required for variable names that consist of only letters, numbers, and underscores, and which are not reserved words (e.g. function, export, native, etc.), to avoid issues, it's recommended that all variable names be enclosed in quotes. Examples:

dataLayer.push({new-variable:  'value'}); // Won't work

dataLayer.push({'new-variable':  'value'}); // Better

#### Variable names should be kept consistent across pages

If you use different variable names for the same variables on different pages, GTM will be unable to consistently fire tags in all desired locations. Examples:

##### Won't work

// Homepage:\
dataLayer.push({'visitorType':  'low-value'});

// Checkout Page:\
dataLayer.push({'visitor_type':  'high-value'});

##### Better

// Homepage:\
dataLayer.push({'visitorType':  'low-value'});

// Checkout Page:\
dataLayer.push({'visitorType':  'high-value'});

#### Any information needed to fire tags on a page load must be declared in the data layer above the container snippet

In order to fire tags on a page load matching some condition (e.g. on pages marked as having a pageCategory of `sports`), the pageCategory must be defined in the data layer above the container snippet (e.g. `'pageCategory': 'sports'`). Variables pushed to the data layer (i.e. using `dataLayer.push()`) after the container snippet will not be able to fire tags on page loads with a matching condition.

#### Tags deployed with Google Tag Manager should not be left hard-coded or deployed by another tool as well

Any tags that are fired from Google Tag Manager should be *migrated* to Google Tag Manager, not just duplicated (for more information about migrating tags, see [Migrating Tags to Google Tag Manager](https://developers.google.com/tag-manager/devguide#migration)). Deploying tags both with Google Tag Manager and through other systems or hard-coded on your site may result in inflation of data (and other data integrity issues) resulting from those tags. For example, if you migrate your Google Analytics tracking code to fire from Google Tag Manager, the hard-coded Google Analytics tracking code should be removed from your site.

### Renaming the Data Layer

By default, the data layer initiated and referenced by Google Tag Manager will be called `dataLayer`. If you'd prefer to use a different name for your data layer, you may do so by replacing the data layer parameter value (highlighted below) in your container snippet with the name of your choice.

<!-- Google Tag Manager -->\
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\
new  Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\
})(window,document,'script','myNewName','GTM-XXXX');</script>\
<!-- End Google Tag Manager -->

Then, all references to your data layer (i.e. when declaring the data layer above the snippet and when pushing events or dynamic Data Layer Variables to the data layer with the `push()` API) should also be adjusted to reflect your custom data layer name:

<script>\ myNewName  =  [{\ // ...\ }];\ myNewName.push({'variable_name':  'variable_value'});\
</script>

Migrating Tags to Google Tag Manager
------------------------------------

In order to gain the most value from Google Tag Manager, we recommend that you migrate most of your existing tags into Google Tag Manager (tags that are [not supported](https://support.google.com/tagmanager/answer/6103576) should not be migrated). This section describes a best practice migration workflow. The process has 5 main steps:

1.  Map your site (optional)

    To begin your migration, you'll want to think about which tags you currently have deployed on your site and what data you're trying to collect. For data collection think about what actions you want to track (events) and what additional data from the page you'll want to collect (variables). Create a map of tags, the data you want those tags to collect, and which events or pages you want to associate with those tags.

2.  Implement standard Google Tag Manager snippet

    Once you've mapped your site, you'll want to install just the single Google Tag Manager snippet on your site (empty) and deploy it. See [Quick Start](https://developers.google.com/tag-manager/quickstart) for more information.

3.  Add Events and Variables

    Customize your Google Tag Manager installation using the methods outlined in the [Add Events and Variables](https://developers.google.com/tag-manager/devguide#events) section.

4.  Add tags with associated triggers in Google Tag Manager's management interface

    After you've completed setting up the site with the Google Tag Manager snippet and data collection APIs, you should add your site [tags](http://support.google.com/tagmanager/bin/answer.py?answer=2574372) to the user interface. DO NOT publish at this time. Simply add and configure the tags from your site in the Google Tag Manager management interface using the appropriate templates and set up the triggers appropriately (more information about how to do this in our [Help Center Triggers](http://support.google.com/tagmanager/bin/answer.py?answer=2644396) article).

5.  Final migration swap

    The last step is where you simultaneously swap out your old tags and publish your tags in Google Tag Manager. Within a few minutes of each other, you'll want to:

    -   Remove your site tags in a single code push
    -   Once you know this push is successful, press the "Publish" button for your container version.

    This method might cause a small gap in data, but once the initial swap occurs, no more data gaps will appear. Alternatively, you could swap the order here and publish shortly before your site changes go live. This might cause minor, one-time data duplication instead of a small data gap.

After you've completed the initial migration to Google Tag Manager, any subsequent tagging needs you have can be handled without site code changes via the Google Tag Manager interface.

Multiple Domains
----------------

While you can use the same container for multiple websites it's recommended that each separate web property that you manage be deployed with its own container. This separation will prevent changes specific to one website from having undesired effects on other websites using the same container. In some situations, however, when multiple Top Level Domains or subdomains are considered to be members of the same website, it may be beneficial to manage their tags through the same Google Tag Manager container.

When choosing to use a single container across multiple domains, it's important to carefully configure your tags and triggers within Google Tag Manager. Using the default "All Pages" trigger in Google Tag Manager (i.e. `$url matches RegEx .*`) will fire tags on all pages of all domains on which your container snippet is deployed. Since some tags have configurations or purposes specific to the domain on which they're deployed, you may need to create custom triggers (or even remove the "All Pages" trigger) to fire tags on all pages of one or each domain individually.

For example, you may choose to deploy your Google Analytics tracking code through GTM with configurations to support GA tracking across [multiple domains or subdomains](https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingSite).

![Image showing multiple domains](https://developers.google.com/tag-manager/img/cross-domain.png)

In such a case, you would add a line of code to your GA tracking code to manually set the first-party domain on which to set the GA cookies (e.g. on `www.example-petstore.com` and `dogs.example-petstore.com`, you might set the cookies to the common domain, `.example-petstore.com`). However, on the secondary site, `www.my-example-blogsite.com`, you might set the cookies to `.my-example-blogsite.com`. Therefore, you would want one of two GA tracking code tags (one set to `.example-petstore.com`, and one set to `.my-example-blogsite.com`) to fire on each of the two domains. If both domains were sharing a common GTM container, using the default "All Pages" trigger in Google Tag Manager, would cause each tag to fire on all pages of both domains.

Multiple Containers on a Page
-----------------------------

For the best performance of a page, keep the number of Google Tag Manager containers on the page minimal.

If you use more than one container on a page, implement the container snippets with a common data layer object. For example, you may implement two container snippets as follows:

1.  Copy the following JavaScript and paste it as close to the opening `<head>` tag as possible on the page:

    <!-- Google Tag Manager -->\
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\
    new  Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\
    })(window,document,'script','dataLayer','GTM-XXXX');</script>

    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\
    new  Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\
    })(window,document,'script','dataLayer','GTM-YYYY');</script>\
    <!-- End Google Tag Manager -->

2.  Copy the following snippet and paste it immediately after the opening `<body>` tag on the page:

    <!-- Google Tag Manager (noscript) -->\
    <noscript><iframe  src="//www.googletagmanager.com/ns.html?id=GTM-XXXX"\
    height="0"  width="0"  style="display:none;visibility:hidden"></iframe></noscript>

    <noscript><iframe  src="//www.googletagmanager.com/ns.html?id=GTM-YYYY"\
    height="0"  width="0"  style="display:none;visibility:hidden"></iframe></noscript>\
    <!-- End Google Tag Manager (noscript) -->

Note that you can use only a single common data layer for all Google Tag Manager containers on a page because using more than one data layer can cause some triggers to stop working and could have other implications. So don't rename the data layer for a subset of containers on the page. You can, if necessary, rename the data layer for all containers on the page.

Avoid implementing a Google Tag Manager container through a custom HTML tag in another Google Tag Manager container because it could add latency in the tags from the secondary container and could have other implications.

Adding Data Layer Variables for Devices without JavaScript Support
------------------------------------------------------------------

In order to accommodate visitors who have JavaScript disabled or are visiting from devices that don't support JavaScript, Google Tag Manager includes a `<noscript>` snippet to deploy non-JavaScript dependent tags even when the primary GTM JavaScript cannot load.

It's important to note, however, that the data layer (containing the data layer variables declared on page load) and any events or dynamic data layer variables pushed to the data layer all rely on JavaScript to function. Therefore, if any of the triggers to fire your non-JavaScript dependent tags (that you want to fire even when JavaScript can't load) depend on data layer variables, you must pass those Data Layer Variables to the `<noscript>` iframe as query parameters. For example, to fire a tag when the `pageCategory` is `sports` and the `visitorType` is `returning`, you would modify the container snippet on the given page as follows:

<!-- Google Tag Manager (noscript) -->\
<noscript><iframe  src="//www.googletagmanager.com/ns.html?id=GTM-XXXX&pageCategory=sports&visitorType=returning"  height="0"\ width="0"  style="display:none;visibility:hidden"></iframe></noscript>\
<!-- End Google Tag Manager (noscript) -->

Where each data layer variable is appended to the end of the iframe's source URL as plain text query parameters separated by ampersands.

Security
--------

Google Tag Manager incorporates a host of features to help ensure the security of your websites and apps. In addition to the following code-level security features, you may also want to familiarize yourself with Tag Manager's [access controls](https://support.google.com/tagmanager/answer/6107011) , [2-step verification](https://support.google.com/tagmanager/answer/4525539), and [malware detection](https://support.google.com/tagmanager/answer/6328489).

Administrators can [restrict tag deployment](https://developers.google.com/tag-manager/web/restrict) for their installations to allow only specific tags to be deployed. You can also configure Google Tag Manager to work with a [CSP implementation](https://developers.google.com/tag-manager/web/csp).

Using a protocol-relative URL
-----------------------------

By default, the Google Tag Manager container snippet always uses https to load containers (i.e., `https://www.googletagmanager.com`). This helps protect your container from malicious parties and snooping, and in many cases, also improves performance.

If you'd prefer to load your Google Tag Manager containers in a protocol-relative manner, you may do so by adjusting the source URL protocol (highlighted below) in your container snippet to be `//` instead of `https://`.

<!-- Google Tag Manager -->\
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\
new  Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\
})(window,document,'script','dataLayer','GTM-XXXX');</script>\
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->\
<noscript><iframe  src="//www.googletagmanager.com/ns.html?id=GTM-XXXX"\
height="0"  width="0"  style="display:none;visibility:hidden"></iframe></noscript>\
<!-- End Google Tag Manager (noscript) -->

When using a protocol-relative URL, the container would be loaded using http on pages with an `http://` URL; and, would be loaded using https on pages with an `https://` URL.

Older versions of the Google Tag Manager container snippet always used a protocol-relative URL to load containers (i.e., `//www.googletagmanager.com`). These older protocol-relative versions of the Google Tag Manager container snippet will continue to work without being updated.

While most of the tag templates in Google Tag Manager are also protocol relative, it's important to make sure that, when setting up custom tags to fire on secure pages, those tags are also either protocol relative or secure.
