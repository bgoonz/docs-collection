In addition to the [chrome.\* APIs](/docs/extensions/reference), extensions can use all the APIs that the browser provides to web pages and apps. If the browser doesn’t support an API you want to use, you can bundle additional API libraries into your extension.

Here’s a sampling of the APIs that extensions can use:

Standard JavaScript APIs  
These are the same core JavaScript and [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API) (DOM) APIs that you can use in ordinary web apps.

XMLHttpRequest  
Use [XMLHttpRequest](/docs/extensions/mv2/xhr) to request data from one or more servers. The [permissions](/docs/extensions/mv2/declare_permissions) field of the manifest specifies which hosts the extension can send requests to.

HTML and other emerging APIs  
Google Chrome supports modern HTML features, along with other emerging APIs. Here are some of the APIs you can use:

-   audio ([tutorial](http://www.html5rocks.com/tutorials/audio/quick/))
-   application cache ([tutorial](http://www.html5rocks.com/tutorials/appcache/beginner/))
-   canvas ([articles](http://www.html5rocks.com/en/tutorials/#canvas))
-   geolocation ([tutorial](http://www.html5rocks.com/tutorials/geolocation/trip_meter/))
-   local storage ([tutorial](http://www.html5rocks.com/en/tutorials/offline/storage/))
-   notifications ([tutorial](http://www.html5rocks.com/tutorials/notifications/quick/))
-   video ([tutorial](http://www.html5rocks.com/en/tutorials/video/basics/))
-   web database ([tutorial](http://www.html5rocks.com/tutorials/webdatabase/todo/))

See [html5rocks.com](http://www.html5rocks.com) for HTML5 information, tutorials, an interactive playground, and links to other resources.

Web APIs  
Your extension can use Web APIs. Especially useful are the CSS features such as filters, animations, and transformations. Here’s an example of using WebKit styles to make the UI spin:

    <style>
      div:hover {
        transform: rotate(360deg);
        transition: all 1s ease-out;
      }
    </style>

V8 APIs, such as JSON  
Because JSON is in V8, you don’t need to include a JSON library to use JSON functions.

APIs in bundled libraries  
If you want to use a library that the browser doesn’t provide (for example, jQuery), you can bundle that library’s JavaScript files with your extension. Bundled libraries work in extensions just as they do in other web pages.
