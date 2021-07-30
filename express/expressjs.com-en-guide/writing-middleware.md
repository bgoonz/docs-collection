# Writing middleware for use in Express apps

## Overview

_Middleware_ functions are functions that have access to the [request object](/%7B%7B%20page.lang%20%7D%7D/4x/api.html#req) (`req`), the [response object](/%7B%7B%20page.lang%20%7D%7D/4x/api.html#res) (`res`), and the `next` function in the application’s request-response cycle. The `next` function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

The following figure shows the elements of a middleware function call:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><img src="/images/express-mw.png" id="mw-fig-img" /></td><td><div id="callout1" class="callout">HTTP method for which the middleware function applies.</div><div id="callout2" class="callout">Path (route) for which the middleware function applies.</div><div id="callout3" class="callout">The middleware function.</div><div id="callout4" class="callout">Callback argument to the middleware function, called “next” by convention.</div><div id="callout5" class="callout">HTTP <a href="/%7B%7B%20page.lang%20%7D%7D/4x/api.html#res">response</a> argument to the middleware function, called “res” by convention.</div><div id="callout6" class="callout">HTTP <a href="/%7B%7B%20page.lang%20%7D%7D/4x/api.html#req">request</a> argument to the middleware function, called “req” by convention.</div></td></tr></tbody></table>

Starting with Express 5, middleware functions that return a Promise will call `next(value)` when they reject or throw an error. `next` will be called with either the rejected value or the thrown Error.

## Example

Here is an example of a simple “Hello World” Express application. The remainder of this article will define and add three middleware functions to the application: one called `myLogger` that prints a simple log message, one called `requestTime` that displays the timestamp of the HTTP request, and one called `validateCookies` that validates incoming cookies.

    var express = require('express')
    var app = express()

    app.get('/', function (req, res) {
      res.send('Hello World!')
    })

    app.listen(3000)

### Middleware function myLogger

Here is a simple example of a middleware function called “myLogger”. This function just prints “LOGGED” when a request to the app passes through it. The middleware function is assigned to a variable named `myLogger`.

    var myLogger = function (req, res, next) {
      console.log('LOGGED')
      next()
    }

Notice the call above to `next()`. Calling this function invokes the next middleware function in the app. The `next()` function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The `next()` function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.

To load the middleware function, call `app.use()`, specifying the middleware function. For example, the following code loads the `myLogger` middleware function before the route to the root path (/).

    var express = require('express')
    var app = express()

    var myLogger = function (req, res, next) {
      console.log('LOGGED')
      next()
    }

    app.use(myLogger)

    app.get('/', function (req, res) {
      res.send('Hello World!')
    })

    app.listen(3000)

Every time the app receives a request, it prints the message “LOGGED” to the terminal.

The order of middleware loading is important: middleware functions that are loaded first are also executed first.

If `myLogger` is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

The middleware function `myLogger` simply prints a message, then passes on the request to the next middleware function in the stack by calling the `next()` function.

### Middleware function requestTime

Next, we’ll create a middleware function called “requestTime” and add a property called `requestTime` to the request object.

    var requestTime = function (req, res, next) {
      req.requestTime = Date.now()
      next()
    }

The app now uses the `requestTime` middleware function. Also, the callback function of the root path route uses the property that the middleware function adds to `req` (the request object).

    var express = require('express')
    var app = express()

    var requestTime = function (req, res, next) {
      req.requestTime = Date.now()
      next()
    }

    app.use(requestTime)

    app.get('/', function (req, res) {
      var responseText = 'Hello World!<br>'
      responseText += '<small>Requested at: ' + req.requestTime + '</small>'
      res.send(responseText)
    })

    app.listen(3000)

When you make a request to the root of the app, the app now displays the timestamp of your request in the browser.

### Middleware function validateCookies

Finally, we’ll create a middleware function that validates incoming cookies and sends a 400 response if cookies are invalid.

Here’s an example function that validates cookies with an external async service.

    async function cookieValidator (cookies) {
      try {
        await externallyValidateCookie(cookies.testCookie)
      } catch {
        throw new Error('Invalid cookies')
      }
    }

Here we use the [`cookie-parser`](/resources/middleware/cookie-parser.html) middleware to parse incoming cookies off the `req` object and pass them to our `cookieValidator` function. The `validateCookies` middleware returns a Promise that upon rejection will automatically trigger our error handler.

    var express = require('express')
    var cookieParser = require('cookie-parser')
    var cookieValidator = require('./cookieValidator')

    var app = express()

    async function validateCookies (req, res, next) {
      await cookieValidator(req.cookies)
      next()
    }

    app.use(cookieParser())

    app.use(validateCookies)

    // error handler
    app.use(function (err, req, res, next) {
      res.status(400).send(err.message)
    })

    app.listen(3000)

Note how `next()` is called after `await cookieValidator(req.cookies)`. This ensures that if `cookieValidator` resolves, the next middleware in the stack will get called. If you pass anything to the `next()` function (except the string `'route'` or `'router'`), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

Because you have access to the request object, the response object, the next middleware function in the stack, and the whole Node.js API, the possibilities with middleware functions are endless.

For more information about Express middleware, see: [Using Express middleware](/%7B%7B%20page.lang%20%7D%7D/guide/using-middleware.html).

## Configurable middleware

If you need your middleware to be configurable, export a function which accepts an options object or other parameters, which, then returns the middleware implementation based on the input parameters.

File: `my-middleware.js`

    module.exports = function (options) {
      return function (req, res, next) {
        // Implement the middleware function based on the options object
        next()
      }
    }

The middleware can now be used as shown below.

    var mw = require('./my-middleware.js')

    app.use(mw({ option1: '1', option2: '2' }))

Refer to [cookie-session](https://github.com/expressjs/cookie-session) and [compression](https://github.com/expressjs/compression) for examples of configurable middleware.
