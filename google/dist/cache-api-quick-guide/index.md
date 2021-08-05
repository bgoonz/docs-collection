<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

## <a href="#the-cache-api:-a-quick-guide" class="w-toc__header--link">The Cache API: A quick guide</a>

- [Where is it available?](#where-is-it-available)
- [What can be stored](#what-can-be-stored)
- [How much can be stored?](#how-much-can-be-stored)
- [Creating and opening a cache](#creating-and-opening-a-cache)
- [Adding to a cache](#adding-to-a-cache)
- [cache.add](#cache.add)
- [cache.addAll](#cache.addall)
- [cache.put](#cache.put)
- [Retrieving from a cache](#retrieving)
- [Searching](#searching)
- [Filtering](#filtering)
- [Creating an index](#creating-an-index)
- [Deleting an item](#deleting-an-item)
- [Deleting a cache](#deleting-a-cache)
- [Thanks](#thanks)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# The Cache API: A quick guide

Learn how to use the Cache API to make your application data available offline.

Oct 3, 2017 <span class="w-author__separator">•</span> Updated Apr 27, 2020

<span class="w-post-signpost__title">Appears in:</span> <a href="/reliable" class="w-post-signpost__link">Network reliability</a>

[<img src="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Pete LePage" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/3rFbsLsMMk1VveHfBRSu.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/petelepage/)

<a href="/authors/petelepage/" class="w-author__name-link">Pete LePage</a>

- <a href="https://twitter.com/petele" class="w-author__link">Twitter</a>
- <a href="https://github.com/petele" class="w-author__link">GitHub</a>
- <a href="https://glitch.com/@petele" class="w-author__link">Glitch</a>
- <a href="https://petelepage.com" class="w-author__link">Blog</a>

The [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) is a system for storing and retrieving network requests and their corresponding responses. These might be regular requests and responses created in the course of running your application, or they could be created solely for the purpose of storing data for later use.

The Cache API was created to enable service workers to cache network requests so that they can provide fast responses, regardless of network speed or availablity. However, the API can also be used as a general storage mechanism.

## Where is it available? <a href="#where-is-it-available" class="w-headline-link">#</a>

The Cache API is available in [all modern browsers](https://caniuse.com/#feat=mdn-api_cache). It is exposed via the global `caches` property, so you can test for the presence of the API with a simple feature detection:

    const cacheAvailable = 'caches' in self;

The Cache API can be accessed from a window, iframe, worker, or service worker.

## What can be stored <a href="#what-can-be-stored" class="w-headline-link">#</a>

The caches only store pairs of [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects, representing HTTP requests and responses, respectively. However, the requests and responses can contain any kind of data that can be transferred over HTTP.

### How much can be stored? <a href="#how-much-can-be-stored" class="w-headline-link">#</a>

In short, **a lot**, at least a couple of hundred megabytes, and potentially hundreds of gigabytes or more. Browser implementations vary, but the amount of storage available is usually based on the amount of storage available on the device.

## Creating and opening a cache <a href="#creating-and-opening-a-cache" class="w-headline-link">#</a>

To open a cache, use the `caches.open(name)` method, passing the name of the cache as the single parameter. If the named cache does not exist, it is created. This method returns a `Promise` that resolves with the `Cache` object.

    const cache = await caches.open('my-cache');
    // do something with cache...

## Adding to a cache <a href="#adding-to-a-cache" class="w-headline-link">#</a>

There are three ways to add an item to a cache - `add`, `addAll`, and `put`. All three methods return a `Promise`.

### `cache.add` <a href="#cache.add" class="w-headline-link">#</a>

First, there is `cache.add()`. It takes one parameter, either a `Request` or a URL (`string`). It makes a request to the network and stores the response in the cache. If the fetch fails, or if the status code of the response is not in the 200 range, then nothing is stored and the `Promise` rejects. Note that cross-origin requests not in CORS mode cannot be stored because they return a `status` of `0`. Such requests can only be stored with `put`.

    // Retreive data.json from the server and store the response.
    cache.add(new Request('/data.json'));

    // Retreive data.json from the server and store the response.
    cache.add('/data.json');

### `cache.addAll` <a href="#cache.addall" class="w-headline-link">#</a>

Next, there is `cache.addAll()`. It works similarly to `add()`, but takes an array of `Request` objects or URLs (`string`s). This works similarly to calling `cache.add` for each individual request, except that the `Promise` rejects if any single request is not cached.

    const urls = ['/weather/today.json', '/weather/tomorrow.json'];
    cache.addAll(urls);

In each of these cases, a new entry overwrites any matching existing entry. This uses the same matching rules described in the section on [retrieving](#retrieving).

### `cache.put` <a href="#cache.put" class="w-headline-link">#</a>

Finally, there is `cache.put()`, which allows you to store either a response from the network, or create and store your own `Response`. It takes two parameters. The first can either be a `Request` object or a URL (`string`). The second must be a `Response`, either from the network, or generated by your code.

    // Retrieve data.json from the server and store the response.
    cache.put('/data.json');

    // Create a new entry for test.json and store the newly created response.
    cache.put('/test.json', new Response('{"foo": "bar"}'));

    // Retrieve data.json from the 3rd party site and store the response.
    cache.put('https://example.com/data.json');

The `put()` method is more permissive than either `add()` or `addAll()`, and will allow you to store non-CORS responses, or other responses where the status code of the response is not in the 200 range. It will overwrite any previous responses for the same request.

#### Creating Request objects <a href="#creating-request-objects" class="w-headline-link">#</a>

Create the `Request` object using a URL for the thing being stored:

    const request = new Request('/my-data-store/item-id');

#### Working with Response objects <a href="#working-with-response-objects" class="w-headline-link">#</a>

The `Response` object constructor accepts many types of data, including `Blob`s, `ArrayBuffer`s, `FormData` objects, and strings.

    const imageBlob = new Blob([data], {type: 'image/jpeg'});
    const imageResponse = new Response(imageBlob);
    const stringResponse = new Response('Hello world');

You can set the MIME type of a `Response` by setting the appropriate header.

      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const jsonResponse = new Response('{}', options);

If you have retrieved a `Response` and wish to access its body, there are several helper methods you can use. Each returns a `Promise` that resolves with a value of a different type.

Method

Description

`arrayBuffer`

Returns an `ArrayBuffer` containing the body, serialized to bytes.

`blob`

Returns a `Blob`. If the `Response` was created with a `Blob` then this new `Blob` has the same type. Otherwise, the `Content-Type` of the `Response` is used.

`text`

Interprets the bytes of the body as a UTF-8 encoded string.

`json`

Interprets the bytes of the body as a UTF-8 encoded string, then tries to parse it as JSON. Returns the resulting object, or throws a `TypeError` if the string cannot be parsed as JSON.

`formData`

Interprets the bytes of the body as an HTML form, encoded either as `multipart/form-data` or `application/x-www-form-urlencoded`. Returns a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object, or throws a `TypeError` if the data cannot be parsed.

`body`

Returns a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) for the body data.

For example

    const response = new Response('Hello world');
    const buffer = await response.arrayBuffer();
    console.log(new Uint8Array(buffer));
    // Uint8Array(11) [72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

## Retrieving from a cache <a href="#retrieving" class="w-headline-link">#</a>

To find an item in a cache, you can use the `match` method.

    const response = await cache.match(request);
    console.log(request, response);

If `request` is a string the browser converts it to a `Request` by calling `new Request(request)`. The function returns a `Promise` that resolves to a `Response` if a matching entry is found, or `undefined` otherwise.

To determine if two `Requests` match, the browser uses more than just the URL. Two requests are considered different if they have different query strings, `Vary` headers, or HTTP methods (`GET`, `POST`, `PUT`, etc.).

You can ignore some or all of these things by passing an options object as a second parameter.

    const options = {
      ignoreSearch: true,
      ignoreMethod: true,
      ignoreVary: true
    };

    const response = await cache.match(request, options);
    // do something with the response

If more than one cached request matches then the one that was created first is returned. If you want to retrieve _all_ matching responses, you can use `cache.matchAll()`.

    const options = {
      ignoreSearch: true,
      ignoreMethod: true,
      ignoreVary: true
    };

    const responses = await cache.matchAll(request, options);
    console.log(`There are ${responses.length} matching responses.`);

As a shortcut you can search over all caches at once by using `caches.match()` instead of calling `cache.match()` for each cache.

## Searching <a href="#searching" class="w-headline-link">#</a>

The Cache API does not provide a way to search for requests or responses except for matching entries against a `Response` object. However, you can implement your own search using filtering or by creating an index.

### Filtering <a href="#filtering" class="w-headline-link">#</a>

One way to implement your own search is to iterate over all entries and filter down to the ones that you want. Let's say that you want to find all items that have URLs ending with `.png`.

    async function findImages() {
      // Get a list of all of the caches for this origin
      const cacheNames = await caches.keys();
      const result = [];

      for (const name of cacheNames) {
        // Open the cache
        const cache = await caches.open(name);

        // Get a list of entries. Each item is a Request object
        for (const request of await cache.keys()) {
          // If the request URL matches, add the response to the result
          if (request.url.endsWith('.png')) {
            result.push(await cache.match(request));
          }
        }
      }

      return result;
    }

This way you can use any property of the `Request` and `Response` objects to filter the entries. Note that this is slow if you search over large sets of data.

### Creating an index <a href="#creating-an-index" class="w-headline-link">#</a>

The other way to implement your own search is to maintain a separate index of entries that can be searched and store the index in IndexedDB. Since this is the kind of operation that IndexedDB was designed for it has much better performance with large numbers of entries.

If you store the URL of the `Request` alongside the searchable properties then you can easily retrieve the correct cache entry after doing the search.

## Deleting an item <a href="#deleting-an-item" class="w-headline-link">#</a>

To delete an item from a cache:

    cache.delete(request);

Where request can be a `Request` or a URL string. This method also takes the same options object as `cache.match`, which allows you to delete multiple `Request`/`Response` pairs for the same URL.

    cache.delete('/example/file.txt', {ignoreVary: true, ignoreSearch: true});

## Deleting a cache <a href="#deleting-a-cache" class="w-headline-link">#</a>

To delete a cache, call `caches.delete(name)`. This function returns a `Promise` that resolves to `true` if the cache existed and was deleted, or `false` otherwise.

## Thanks <a href="#thanks" class="w-headline-link">#</a>

Thanks to Mat Scales who wrote the original version of this article, which first appeared on WebFundamentals.

<a href="/tags/progressive-web-apps/" class="w-chip">Progressive Web Apps</a>

<span class="w-mr--sm"> Last updated: Apr 27, 2020 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/cache-api-quick-guide/index.md)

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
