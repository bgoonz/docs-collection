<span class="w-tooltip w-tooltip--left">Open menu</span>

<a href="/" class="header-default__logo-link gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="header-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="header-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="header-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="header-default__link gc-analytics-event">Blog</a> <a href="/about/" class="header-default__link gc-analytics-event">About</a>

<span class="w-tooltip">Close</span>

<a href="/" class="gc-analytics-event"><img src="/images/lockup.svg" alt="web.dev" class="drawer-default__logo" width="125" height="30" /></a>

<a href="/learn/" class="drawer-default__link gc-analytics-event">Learn</a> <a href="/measure/" class="drawer-default__link gc-analytics-event">Measure</a> <a href="/blog/" class="drawer-default__link gc-analytics-event">Blog</a> <a href="/about/" class="drawer-default__link gc-analytics-event">About</a>

<img src="https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format" alt="this 🤔" class="w-hero w-hero--cover" sizes="100vw" srcset="https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=200 200w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=228 228w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=260 260w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=296 296w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=338 338w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=385 385w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=439 439w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=500 500w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=571 571w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=650 650w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=741 741w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=845 845w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=964 964w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=1098 1098w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=1252 1252w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=1428 1428w,     https://web-dev.imgix.net/image/CZmpGM8Eo1dFe0KNhEO9SGO8Ok23/cePCOGeXNFT6WCy85gb4.png?auto=format&amp;w=1600 1600w" width="1600" height="480" />

## <a href="#javascript:-what-is-the-meaning-of-this" class="w-toc__header--link">JavaScript: What is the meaning of this?</a>

- [If the function is defined as an arrow function:](#arrow-functions)
- [Other examples](#other-examples)
- ['Bound' instance methods](#'bound'-instance-methods)
- [Otherwise, if the function/class is called with new:](#new)
- [Other examples](#other-examples-2)
- [Otherwise, if the function has a 'bound' this value:](#bound)
- [Other examples](#other-examples-3)
- [Otherwise, if this is set at call-time:](#call-apply)
- [Otherwise, if the function is called via a parent object (parent.func()):](#object-member)
- [Otherwise, if the function or parent scope is in strict mode:](#strict)
- [Otherwise:](#otherwise)
- [Phew!](#phew!)

Share <a href="/newsletter/" class="w-actions__fab w-actions__fab--subscribe gc-analytics-event"><span>subscribe</span></a>

- <a href="/" class="w-breadcrumbs__link w-breadcrumbs__link--left-justify gc-analytics-event">Home</a>
- <a href="/blog" class="w-breadcrumbs__link gc-analytics-event">All articles</a>

# JavaScript: What is the meaning of this?

Figuring out the value of `this` can be tricky in JavaScript, here's how to do it…

Mar 8, 2021

[<img src="https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?auto=format&amp;fit=crop&amp;h=64&amp;w=64" alt="Jake Archibald" class="w-author__image" sizes="(min-width: 64px) 64px, calc(100vw - 48px)" srcset="https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=1&amp;q=75 1x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=2&amp;q=50 2x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=3&amp;q=35 3x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=4&amp;q=23 4x,     https://web-dev.imgix.net/image/admin/Cprm03kLbFXkxbzGLI6x.jpg?fit=crop&amp;h=64&amp;w=64&amp;auto=format&amp;dpr=5&amp;q=20 5x" width="64" height="64" />](/authors/jakearchibald/)

<a href="/authors/jakearchibald/" class="w-author__name-link">Jake Archibald</a>

- <a href="https://twitter.com/jaffathecake" class="w-author__link">Twitter</a>
- <a href="https://jakearchibald.com/" class="w-author__link">Blog</a>

JavaScript's `this` is the butt of many jokes, and that's because, well, it's pretty complicated. However, I've seen developers do much-more-complicated and domain-specific things to avoid dealing with this `this`. If you're unsure about `this`, hopefully this will help. This is my `this` guide.

I'm going to start with the most specific situation, and end with the least-specific. This article is kinda like a big `if (…) … else if () … else if (…) …`, so you can go straight to the first section that matches the code you're looking at.

1.  [If the function is defined as an arrow function](#arrow-functions)
2.  [Otherwise, if the function/class is called with `new`](#new)
3.  [Otherwise, if the function has a 'bound' `this` value](#bound)
4.  [Otherwise, if `this` is set at call-time](#call-apply)
5.  [Otherwise, if the function is called via a parent object (`parent.func()`)](#object-member)
6.  [Otherwise, if the function or parent scope is in strict mode](#strict)
7.  [Otherwise](#otherwise)

## If the function is defined as an arrow function: <a href="#arrow-functions" class="w-headline-link">#</a>

    const arrowFunction = () => {
      console.log(this);
    };

In this case, the value of `this` is _always_ the same as `this` in the parent scope:

    const outerThis = this;

    const arrowFunction = () => {
      // Always logs `true`:
      console.log(this === outerThis);
    };

Arrow functions are great because the inner value of `this` can't be changed, it's _always_ the same as the outer `this`.

### Other examples <a href="#other-examples" class="w-headline-link">#</a>

With arrow functions, the value of `this` _can't_ be changed with [`bind`](#bound):

    // Logs `true` - bound `this` value is ignored:
    arrowFunction.bind({foo: 'bar'})();

With arrow functions, the value of `this` _can't_ be changed with [`call` or `apply`](#call-apply):

    // Logs `true` - called `this` value is ignored:
    arrowFunction.call({foo: 'bar'});
    // Logs `true` - applied `this` value is ignored:
    arrowFunction.apply({foo: 'bar'});

With arrow functions, the value of `this` _can't_ be changed by calling the function as a member of another object:

    const obj = {arrowFunction};
    // Logs `true` - parent object is ignored:
    obj.arrowFunction();

With arrow functions, the value of `this` _can't_ be changed by calling the function as a constructor:

    // TypeError: arrowFunction is not a constructor
    new arrowFunction();

### 'Bound' instance methods <a href="#&#39;bound&#39;-instance-methods" class="w-headline-link">#</a>

With instance methods, if you want to ensure `this` always refers to the class instance, the best way is to use arrow functions and [class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields):

    class Whatever {
      someMethod = () => {
        // Always the instance of Whatever:
        console.log(this);
      };
    }

This pattern is really useful when using instance methods as event listeners in components (such as React components, or web components).

The above might feel like it's breaking the "`this` will be the same as `this` in the parent scope" rule, but it starts to make sense if you think of class fields as syntactic sugar for setting things in the constructor:

    class Whatever {
      someMethod = (() => {
        const outerThis = this;
        return () => {
          // Always logs `true`:
          console.log(this === outerThis);
        };
      })();
    }

    // …is roughly equivalent to:

    class Whatever {
      constructor() {
        const outerThis = this;
        this.someMethod = () => {
          // Always logs `true`:
          console.log(this === outerThis);
        };
      }
    }

Alternative pattens involve binding an existing function in the constructor, or assigning the function in the constructor. If you can't use class fields for some reason, assigning functions in the constructor is a reasonable alternative:

    class Whatever {
      constructor() {
        this.someMethod = () => {
          // …
        };
      }
    }

## Otherwise, if the function/class is called with `new`: <a href="#new" class="w-headline-link">#</a>

    new Whatever();

The above will call `Whatever` (or its constructor function if it's a class) with `this` set to the result of `Object.create(Whatever.prototype)`.

    class MyClass {
      constructor() {
        console.log(
          this.constructor === Object.create(MyClass.prototype).constructor,
        );
      }
    }

    // Logs `true`:
    new MyClass();

The same is true for older-style constructors:

    function MyClass() {
      console.log(
        this.constructor === Object.create(MyClass.prototype).constructor,
      );
    }

    // Logs `true`:
    new MyClass();

### Other examples <a href="#other-examples-2" class="w-headline-link">#</a>

When called with `new`, the value of `this` _can't_ be changed with [`bind`](#bound):

    const BoundMyClass = MyClass.bind({foo: 'bar'});
    // Logs `true` - bound `this` value is ignored:
    new BoundMyClass();

When called with `new`, the value of `this` _can't_ be changed by calling the function as a member of another object:

    const obj = {MyClass};
    // Logs `true` - parent object is ignored:
    new obj.MyClass();

## Otherwise, if the function has a 'bound' `this` value: <a href="#bound" class="w-headline-link">#</a>

    function someFunction() {
      return this;
    }

    const boundObject = {hello: 'world'};
    const boundFunction = someFunction.bind(boundObject);

Whenever `boundFunction` is called, its `this` value will be the object passed to `bind` (`boundObject`).

    // Logs `false`:
    console.log(someFunction() === boundObject);
    // Logs `true`:
    console.log(boundFunction() === boundObject);

**Warning**: Avoid using `bind` to bind a function to its outer `this`. Instead, use [arrow functions](#arrow-functions), as they make `this` clear from the function declaration, rather than something that happens later in the code.

Don't use `bind` to set `this` to some value unrelated to the parent object; it's usually unexpected and it's why `this` gets such a bad reputation. Consider passing the value as an argument instead; it's more explicit, and works with arrow functions.

### Other examples <a href="#other-examples-3" class="w-headline-link">#</a>

When calling a bound function, the value of `this` _can't_ be changed with [`call` or `apply`](#call-apply):

    // Logs `true` - called `this` value is ignored:
    console.log(boundFunction.call({foo: 'bar'}) === boundObject);
    // Logs `true` - applied `this` value is ignored:
    console.log(boundFunction.apply({foo: 'bar'}) === boundObject);

When calling a bound function, the value of `this` _can't_ be changed by calling the function as a member of another object:

    const obj = {boundFunction};
    // Logs `true` - parent object is ignored:
    console.log(obj.boundFunction() === boundObject);

## Otherwise, if `this` is set at call-time: <a href="#call-apply" class="w-headline-link">#</a>

    function someFunction() {
      return this;
    }

    const someObject = {hello: 'world'};

    // Logs `true`:
    console.log(someFunction.call(someObject) === someObject);
    // Logs `true`:
    console.log(someFunction.apply(someObject) === someObject);

The value of `this` is the object passed to `call`/`apply`.

**Warning**: Don't use `call`/`apply` to set `this` to some value unrelated to the parent object; it's usually unexpected and it's why `this` gets such a bad reputation. Consider passing the value as an argument instead; it's more explicit, and works with arrow functions.

Unfortunately `this` is set to some other value by things like DOM event listeners, and using it can result in difficult-to-understand code:

Don't

    element.addEventListener('click', function (event) {
      // Logs `element`, since the DOM spec sets `this` to
      // the element the handler is attached to.
      console.log(this);
    });

I avoid using `this` in cases like above, and instead:

Do

    element.addEventListener('click', (event) => {
      // Ideally, grab it from a parent scope:
      console.log(element);
      // But if you can't do that, get it from the event object:
      console.log(event.currentTarget);
    });

## Otherwise, if the function is called via a parent object (`parent.func()`): <a href="#object-member" class="w-headline-link">#</a>

    const obj = {
      someMethod() {
        return this;
      },
    };

    // Logs `true`:
    console.log(obj.someMethod() === obj);

In this case the function is called as a member of `obj`, so `this` will be `obj`. This happens at call-time, so the link is broken if the function is called without its parent object, or with a different parent object:

    const {someMethod} = obj;
    // Logs `false`:
    console.log(someMethod() === obj);

    const anotherObj = {someMethod};
    // Logs `false`:
    console.log(anotherObj.someMethod() === obj);
    // Logs `true`:
    console.log(anotherObj.someMethod() === anotherObj);

`someMethod() === obj` is false because `someMethod` _isn't_ called as a member of `obj`. You might have encountered this gotcha when trying something like this:

    const $ = document.querySelector;
    // TypeError: Illegal invocation
    const el = $('.some-element');

This breaks because the implementation of `querySelector` looks at its own `this` value and expects it to be a DOM node of sorts, and the above breaks that connection. To achieve the above correctly:

    const $ = document.querySelector.bind(document);
    // Or:
    const $ = (...args) => document.querySelector(...args);

Fun fact: Not all APIs use `this` internally. Console methods like `console.log` were changed to avoid `this` references, so `log` doesn't need to be bound to `console`.

**Warning**: Don't transplant a function onto an object just to set `this` to some value unrelated to the parent object; it's usually unexpected and it's why `this` gets such a bad reputation. Consider passing the value as an argument instead; it's more explicit, and works with arrow functions.

## Otherwise, if the function or parent scope is in strict mode: <a href="#strict" class="w-headline-link">#</a>

    function someFunction() {
      'use strict';
      return this;
    }

    // Logs `true`:
    console.log(someFunction() === undefined);

In this case, the value of `this` is undefined. `'use strict'` isn't needed in the function if the parent scope is in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (and all modules are in strict mode).

**Warning**: Don't rely on this. I mean, there are easier ways to get an `undefined` value 😀.

## Otherwise: <a href="#otherwise" class="w-headline-link">#</a>

    function someFunction() {
      return this;
    }

    // Logs `true`:
    console.log(someFunction() === globalThis);

In this case, the value of `this` is the same as `globalThis`.

Most folks (including me) call `globalThis` the global object, but this isn't 100% technically correct. Here's [Mathias Bynens with the details](https://mathiasbynens.be/notes/globalthis#terminology), including why it's called `globalThis` rather than simply `global`.

**Warning**: Avoid using `this` to reference the global object (yes, I'm still calling it that). Instead, use [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), which is much more explicit.

## Phew! <a href="#phew!" class="w-headline-link">#</a>

And that's it! That's everything I know about `this`. Any questions? Something I've missed? Feel free to [tweet at me](https://twitter.com/jaffathecake).

Thanks to [Mathias Bynens](https://twitter.com/mathias), [Ingvar Stepanyan](https://twitter.com/RReverser), and [Thomas Steiner](https://twitter.com/tomayac) for reviewing.

<a href="/tags/javascript/" class="w-chip">JavaScript</a>

<span class="w-mr--sm"> Last updated: Mar 8, 2021 </span> [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/blog/javascript-this/index.md)

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
