# Moving to Express 5

## Overview

Express 5.0 is still in the alpha release stage, but here is a preview of the changes that will be in the release and how to migrate your Express 4 app to Express 5.

Express 5 is not very different from Express 4: The changes to the API are not as significant as from 3.0 to 4.0. Although the basic API remains the same, there are still breaking changes; in other words an existing Express 4 program might not work if you update it to use Express 5.

To install the latest alpha and to preview Express 5, enter the following command in your application root directory:

    $ npm install express@>=5.0.0-alpha.8 --save

You can then run your automated tests to see what fails, and fix problems according to the updates listed below. After addressing test failures, run your app to see what errors occur. You’ll find out right away if the app uses any methods or properties that are not supported.

## Changes in Express 5

Here is the list of changes (as of the alpha 2 release ) that will affect you as a user of Express. See the [pull request](https://github.com/expressjs/express/pull/2237) for a list of all the planned features.

**Removed methods and properties**

- [app.del()](#app.del)
- [app.param(fn)](#app.param)
- [Pluralized method names](#plural)
- [Leading colon in name argument to app.param(name, fn)](#leading)
- [req.param(name)](#req.param)
- [res.json(obj, status)](#res.json)
- [res.jsonp(obj, status)](#res.jsonp)
- [res.send(body, status)](#res.send.body)
- [res.send(status)](#res.send.status)
- [res.sendfile()](#res.sendfile)

**Changed**

- [app.router](#app.router)
- [req.host](#req.host)
- [req.query](#req.query)

**Improvements**

- [res.render()](#res.render)

### Removed methods and properties

If you use any of these methods or properties in your app, it will crash. So, you’ll need to change your app after you update to version 5.

#### app.del()

Express 5 no longer supports the `app.del()` function. If you use this function an error is thrown. For registering HTTP DELETE routes, use the `app.delete()` function instead.

Initially `del` was used instead of `delete`, because `delete` is a reserved keyword in JavaScript. However, as of ECMAScript 6, `delete` and other reserved keywords can legally be used as property names.

#### app.param(fn)

The `app.param(fn)` signature was used for modifying the behavior of the `app.param(name, fn)` function. It has been deprecated since v4.11.0, and Express 5 no longer supports it at all.

#### Pluralized method names

The following method names have been pluralized. In Express 4, using the old methods resulted in a deprecation warning. Express 5 no longer supports them at all:

`req.acceptsCharset()` is replaced by `req.acceptsCharsets()`.

`req.acceptsEncoding()` is replaced by `req.acceptsEncodings()`.

`req.acceptsLanguage()` is replaced by `req.acceptsLanguages()`.

#### Leading colon (:) in the name for app.param(name, fn)

A leading colon character (:) in the name for the `app.param(name, fn)` function is a remnant of Express 3, and for the sake of backwards compatibility, Express 4 supported it with a deprecation notice. Express 5 will silently ignore it and use the name parameter without prefixing it with a colon.

This should not affect your code if you follow the Express 4 documentation of [app.param](/%7B%7B%20page.lang%20%7D%7D/4x/api.html#app.param), as it makes no mention of the leading colon.

#### req.param(name)

This potentially confusing and dangerous method of retrieving form data has been removed. You will now need to specifically look for the submitted parameter name in the `req.params`, `req.body`, or `req.query` object.

#### res.json(obj, status)

Express 5 no longer supports the signature `res.json(obj, status)`. Instead, set the status and then chain it to the `res.json()` method like this: `res.status(status).json(obj)`.

#### res.jsonp(obj, status)

Express 5 no longer supports the signature `res.jsonp(obj, status)`. Instead, set the status and then chain it to the `res.jsonp()` method like this: `res.status(status).jsonp(obj)`.

#### res.send(body, status)

Express 5 no longer supports the signature `res.send(obj, status)`. Instead, set the status and then chain it to the `res.send()` method like this: `res.status(status).send(obj)`.

#### res.send(status)

Express 5 no longer supports the signature `res.send(status)`, where _`status`_ is a number. Instead, use the `res.sendStatus(statusCode)` function, which sets the HTTP response header status code and sends the text version of the code: “Not Found”, “Internal Server Error”, and so on. If you need to send a number by using the `res.send()` function, quote the number to convert it to a string, so that Express does not interpret it as an attempt to use the unsupported old signature.

#### res.sendfile()

The `res.sendfile()` function has been replaced by a camel-cased version `res.sendFile()` in Express 5.

### Changed

#### app.router

The `app.router` object, which was removed in Express 4, has made a comeback in Express 5. In the new version, this object is a just a reference to the base Express router, unlike in Express 3, where an app had to explicitly load it.

#### req.host

In Express 4, the `req.host` function incorrectly stripped off the port number if it was present. In Express 5 the port number is maintained.

#### req.query

In Express 4.7 and Express 5 onwards, the query parser option can accept `false` to disable query string parsing when you want to use your own function for query string parsing logic.

### Improvements

#### res.render()

This method now enforces asynchronous behavior for all view engines, avoiding bugs caused by view engines that had a synchronous implementation and that violated the recommended interface.
