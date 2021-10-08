2014-10-17

{% Aside ‘caution’ %}

**Important:** Chrome will be removing support for Chrome Apps on all platforms. Chrome browser and the Chrome Web Store will continue to support extensions. [**Read the announcement**](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html) and learn more about [**migrating your app**](/apps/migration).

{% endAside %}

{% Aside %}

**Want to start fresh from here?** Find the previous step’s code in the [reference code zip](https://github.com/mangini/io13-codelab/archive/master.zip) under ***cheat\_code &gt; solution\_for\_step3***.

{% endAside %}

In this step, you will learn:

-   How to show external web content inside your app in a secure and sandboxed way.

*Estimated time to complete this step: 10 minutes.*  
To preview what you will complete in this step, [jump down to the bottom of this page ↓](#launch).

Learn about the webview tag {: \#overview }
-------------------------------------------

Some applications need to present external web content directly to the user but keep them inside the application experience. For example, a news aggregator might want to embed the news from external sites with all the formatting, images, and behavior of the original site. For these and other usages, Chrome Apps have a custom HTML tag called [webview](/docs/extensions/reference/webviewTag).

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/8Au5I2qFyIOANWUbmh70.png”, alt=“The Todo app using a webview”, height=“524”, width=“737” %}

{% Aside %}

**Webviews are sandboxed processes:** The enclosing Chrome App (also known as the “embedder page”) cannot easily access the webview’s loaded DOM. You can only interact with the webview using its API.

{% endAside %}

Implement the webview tag {: \#implement-webview }
--------------------------------------------------

Update the Todo app to search for URLs in the todo item text and create a hyperlink. The link, when clicked, opens a new Chrome App window (not a browser tab) with a webview presenting the content.

### Update permissions {: \#update-permissions }

In ***manifest.json***, request the `webview` permission:

    "permissions": [
      "storage",
      "alarms",
      "notifications",
      "webview"
    ],

### Create a webview embedder page {: \#create-webview }

Create a new file in the root of your project folder and name it ***webview.html***. This file is a basic webpage with one `<webview>` tag:

    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <webview style="width: 100%; height: 100%;"></webview>
    </body>
    </html>

### Parse for URLs in todo items {: \#parse-urls }

At the end of ***controller.js***, add a new method called `_parseForURLs()`:

      Controller.prototype._getCurrentPage = function () {
        return document.location.hash.split('/')[1];
      };

      Controller.prototype._parseForURLs = function (text) {
        var re = /(https?:\/\/[^\s"<>,]+)/g;
        return text.replace(re, '<a href="$1" data-src="$1">$1</a>');
      };

      // Export to window
      window.app.Controller = Controller;
    })(window);

Whenever a string starting with “http://” or “https://” is found, a HTML anchor tag is created to wrap around the URL.

### Render hyperlinks in the todo list {: \#render-links }

Find `showAll()` in *controller.js*. Update `showAll()` to parse for links by using the `_parseForURLs()` method added previously:

    /**
     * An event to fire on load. Will get all items and display them in the
     * todo-list
     */
    Controller.prototype.showAll = function () {
      this.model.read(function (data) {
        this.$todoList.innerHTML = this.view.show(data);
        this.$todoList.innerHTML = this._parseForURLs(this.view.show(data));
      }.bind(this));
    };

Do the same for `showActive()` and `showCompleted()`:

    /**
     * Renders all active tasks
     */
    Controller.prototype.showActive = function () {
      this.model.read({ completed: 0 }, function (data) {
        this.$todoList.innerHTML = this.view.show(data);
        this.$todoList.innerHTML = this._parseForURLs(this.view.show(data));
      }.bind(this));
    };

    /**
     * Renders all completed tasks
     */
    Controller.prototype.showCompleted = function () {
      this.model.read({ completed: 1 }, function (data) {
        this.$todoList.innerHTML = this.view.show(data);
        this.$todoList.innerHTML = this._parseForURLs(this.view.show(data));
      }.bind(this));
    };

And finally, add `_parseForURLs()` to `editItem()`:

    Controller.prototype.editItem = function (id, label) {
      ...
      var onSaveHandler = function () {
        ...
          // Instead of re-rendering the whole view just update
          // this piece of it
          label.innerHTML = value;
          label.innerHTML = this._parseForURLs(value);
        ...
      }.bind(this);
      ...
    }

Still in `editItem()`, fix the code so that it uses the `innerText` of the label instead of the label’s `innerHTML`:

    Controller.prototype.editItem = function (id, label) {
      ...
      // Get the innerHTML of the label instead of requesting the data from the
      // Get the innerText of the label instead of requesting the data from the
      // ORM. If this were a real DB this would save a lot of time and would avoid
      // a spinner gif.
      input.value = label.innerHTML;
      input.value = label.innerText;
      ...
    }

### Open new window containing webview {: \#open-webview }

Add a `_doShowUrl()` method to *controller.js*. This method opens a new Chrome App window via [chrome.app.window.create()](/docs/extensions/reference/app_window#method-create) with *webview.html* as the window source:

      Controller.prototype._parseForURLs = function (text) {
        var re = /(https?:\/\/[^\s"<>,]+)/g;
        return text.replace(re, '<a href="$1" data-src="$1">$1</a>');
      };

      Controller.prototype._doShowUrl = function(e) {
        // only applies to elements with data-src attributes
        if (!e.target.hasAttribute('data-src')) {
          return;
        }
        e.preventDefault();
        var url = e.target.getAttribute('data-src');
        chrome.app.window.create(
         'webview.html',
         {hidden: true},   // only show window when webview is configured
         function(appWin) {
           appWin.contentWindow.addEventListener('DOMContentLoaded',
             function(e) {
               // when window is loaded, set webview source
               var webview = appWin.contentWindow.
                    document.querySelector('webview');
               webview.src = url;
               // now we can show it:
               appWin.show();
             }
           );
         });
      };

      // Export to window
      window.app.Controller = Controller;
    })(window);

In the `chrome.app.window.create()` callback, note how the webview’s URL is set via the [`src` tag attribute](/docs/extensions/reference/webviewTag#tag).

Lastly, add a click event listener inside the `Controller` constructor to call `doShowUrl()` when a user clicks on a link:

    function Controller(model, view) {
      ...
      this.router = new Router();
      this.router.init();

      this.$todoList.addEventListener('click', this._doShowUrl);

      window.addEventListener('load', function () {
        this._updateFilterState();
      }.bind(this));
      ...
    }

Launch your finished Todo app {: \#launch }
-------------------------------------------

You are done Step 4! If you reload your app and add a todo item with a full URL starting with http:// or https://, you should see something like this:

For more information {: \#recap }
---------------------------------

For more detailed information about some of the APIs introduced in this step, refer to:

-   [Declare Permissions](/docs/extensions/mv3/declare_permissions/ "Read 'Declare Permissions' in the Chrome developer docs") [↑](#update-permissions "This feature mentioned in 'Update app permissions'")
-   [Tag](/docs/extensions/reference/webviewTag "Read '<webview> Tag' in the Chrome developer docs") [↑](#overview "This feature mentioned in 'Learn about the webview tag'")
-   [chrome.app.window.create()](/docs/extensions/reference/app_window#method-create "Read 'chrome.app.window.create()' in the Chrome developer docs") [↑](#open-webview "This feature mentioned in 'Open new window containing webview'")

Ready to continue onto the next step? Go to [Step 5 - Add images from the web »](../app_codelab_images)
