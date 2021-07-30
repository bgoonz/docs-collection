# Modules: ECMAScript modules

> Stability: 2 - Stable

## Introduction

ECMAScript modules are [the official standard format](https://tc39.github.io/ecma262/#sec-modules) to package JavaScript code for reuse. Modules are defined using a variety of [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements.

The following example of an ES module exports a function:

    // addTwo.mjs
    function addTwo(num) {
      return num + 2;
    }

    export { addTwo };

The following example of an ES module imports the function from `addTwo.mjs`:

    // app.mjs
    import { addTwo } from './addTwo.mjs';

    // Prints: 6
    console.log(addTwo(4));

Node.js fully supports ECMAScript modules as they are currently specified and provides interoperability between them and its original module format, [CommonJS](modules.md).

## Enabling

Node.js treats JavaScript code as CommonJS modules by default. Authors can tell Node.js to treat JavaScript code as ECMAScript modules via the `.mjs` file extension, the `package.json` [`"type"`](packages.md#packages_type) field, or the `--input-type` flag. See [Modules: Packages](packages.md#packages_determining_module_system) for more details.

## Packages

This section was moved to [Modules: Packages](packages.md).

## `import` Specifiers

### Terminology

The _specifier_ of an `import` statement is the string after the `from` keyword, e.g. `'path'` in `import { sep } from 'path'`. Specifiers are also used in `export from` statements, and as the argument to an `import()` expression.

There are three types of specifiers:

- _Relative specifiers_ like `'./startup.js'` or `'../config.mjs'`. They refer to a path relative to the location of the importing file. _The file extension is always necessary for these._

- _Bare specifiers_ like `'some-package'` or `'some-package/shuffle'`. They can refer to the main entry point of a package by the package name, or a specific feature module within a package prefixed by the package name as per the examples respectively. _Including the file extension is only necessary for packages without an [`"exports"`](packages.md#packages_exports) field._

- _Absolute specifiers_ like `'file:///opt/nodejs/config.js'`. They refer directly and explicitly to a full path.

Bare specifier resolutions are handled by the [Node.js module resolution algorithm](#esm_resolver_algorithm_specification). All other specifier resolutions are always only resolved with the standard relative [URL](https://url.spec.whatwg.org/) resolution semantics.

Like in CommonJS, module files within packages can be accessed by appending a path to the package name unless the package’s [`package.json`](packages.md#packages_node_js_package_json_field_definitions) contains an [`"exports"`](packages.md#packages_exports) field, in which case files within packages can only be accessed via the paths defined in [`"exports"`](packages.md#packages_exports).

For details on these package resolution rules that apply to bare specifiers in the Node.js module resolution, see the [packages documentation](packages.md).

### Mandatory file extensions

A file extension must be provided when using the `import` keyword to resolve relative or absolute specifiers. Directory indexes (e.g. `'./startup/index.js'`) must also be fully specified.

This behavior matches how `import` behaves in browser environments, assuming a typically configured server.

### URLs

ES modules are resolved and cached as URLs. This means that files containing special characters such as `#` and `?` need to be escaped.

`file:`, `node:`, and `data:` URL schemes are supported. A specifier like `'https://example.com/app.js'` is not supported natively in Node.js unless using a [custom HTTPS loader](#esm_https_loader).

#### `file:` URLs

Modules are loaded multiple times if the `import` specifier used to resolve them has a different query or fragment.

    import './foo.mjs?query=1'; // loads ./foo.mjs with query of "?query=1"
    import './foo.mjs?query=2'; // loads ./foo.mjs with query of "?query=2"

The volume root may be referenced via `/`, `//` or `file:///`. Given the differences between [URL](https://url.spec.whatwg.org/) and path resolution (such as percent encoding details), it is recommended to use [url.pathToFileURL](url.md#url_url_pathtofileurl_path) when importing a path.

#### `data:` Imports

[`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are supported for importing with the following MIME types:

- `text/javascript` for ES Modules
- `application/json` for JSON
- `application/wasm` for Wasm

`data:` URLs only resolve [_Bare specifiers_](#esm_terminology) for builtin modules and [_Absolute specifiers_](#esm_terminology). Resolving [_Relative specifiers_](#esm_terminology) does not work because `data:` is not a [special scheme](https://url.spec.whatwg.org/#special-scheme). For example, attempting to load `./foo` from `data:text/javascript,import "./foo";` fails to resolve because there is no concept of relative resolution for `data:` URLs. An example of a `data:` URLs being used is:

    import 'data:text/javascript,console.log("hello!");';
    import _ from 'data:application/json,"world!"';

#### `node:` Imports

`node:` URLs are supported as an alternative means to load Node.js builtin modules. This URL scheme allows for builtin modules to be referenced by valid absolute URL strings.

    import fs from 'node:fs/promises';

## Builtin modules

[Core modules](modules.md#modules_core_modules) provide named exports of their public API. A default export is also provided which is the value of the CommonJS exports. The default export can be used for, among other things, modifying the named exports. Named exports of builtin modules are updated only by calling [`module.syncBuiltinESMExports()`](module.md#module_module_syncbuiltinesmexports).

    import EventEmitter from 'events';
    const e = new EventEmitter();

    import { readFile } from 'fs';
    readFile('./foo.txt', (err, source) => {
      if (err) {
        console.error(err);
      } else {
        console.log(source);
      }
    });

    import fs, { readFileSync } from 'fs';
    import { syncBuiltinESMExports } from 'module';
    import { Buffer } from 'buffer';

    fs.readFileSync = () => Buffer.from('Hello, ESM');
    syncBuiltinESMExports();

    fs.readFileSync === readFileSync;

## `import()` expressions

[Dynamic `import()`](https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) is supported in both CommonJS and ES modules. In CommonJS modules it can be used to load ES modules.

## `import.meta`

- {Object}

The `import.meta` meta property is an `Object` that contains the following properties.

### `import.meta.url`

- {string} The absolute `file:` URL of the module.

This is defined exactly the same as it is in browsers providing the URL of the current module file.

This enables useful patterns such as relative file loading:

    import { readFileSync } from 'fs';
    const buffer = readFileSync(new URL('./data.proto', import.meta.url));

### `import.meta.resolve(specifier[, parent])`

> Stability: 1 - Experimental

This feature is only available with the `--experimental-import-meta-resolve` command flag enabled.

- `specifier` {string} The module specifier to resolve relative to `parent`.
- `parent` {string|URL} The absolute parent module URL to resolve from. If none is specified, the value of `import.meta.url` is used as the default.
- Returns: {Promise}

Provides a module-relative resolution function scoped to each module, returning the URL string.

    const dependencyAsset = await import.meta.resolve('component-lib/asset.css');

`import.meta.resolve` also accepts a second argument which is the parent module from which to resolve from:

    await import.meta.resolve('./dep', import.meta.url);

This function is asynchronous because the ES module resolver in Node.js is allowed to be asynchronous.

## Interoperability with CommonJS

### `import` statements

An `import` statement can reference an ES module or a CommonJS module. `import` statements are permitted only in ES modules, but dynamic [`import()`](#esm_import_expressions) expressions are supported in CommonJS for loading ES modules.

When importing [CommonJS modules](#esm_commonjs_namespaces), the `module.exports` object is provided as the default export. Named exports may be available, provided by static analysis as a convenience for better ecosystem compatibility.

### `require`

The CommonJS module `require` always treats the files it references as CommonJS.

Using `require` to load an ES module is not supported because ES modules have asynchronous execution. Instead, use [`import()`](#esm_import_expressions) to load an ES module from a CommonJS module.

### CommonJS Namespaces

CommonJS modules consist of a `module.exports` object which can be of any type.

When importing a CommonJS module, it can be reliably imported using the ES module default import or its corresponding sugar syntax:

    import { default as cjs } from 'cjs';

    // The following import statement is "syntax sugar" (equivalent but sweeter)
    // for `{ default as cjsSugar }` in the above import statement:
    import cjsSugar from 'cjs';

    console.log(cjs);
    console.log(cjs === cjsSugar);
    // Prints:
    //   <module.exports>
    //   true

The ECMAScript Module Namespace representation of a CommonJS module is always a namespace with a `default` export key pointing to the CommonJS `module.exports` value.

This Module Namespace Exotic Object can be directly observed either when using `import * as m from 'cjs'` or a dynamic import:

    import * as m from 'cjs';
    console.log(m);
    console.log(m === await import('cjs'));
    // Prints:
    //   [Module] { default: <module.exports> }
    //   true

For better compatibility with existing usage in the JS ecosystem, Node.js in addition attempts to determine the CommonJS named exports of every imported CommonJS module to provide them as separate ES module exports using a static analysis process.

For example, consider a CommonJS module written:

    // cjs.cjs
    exports.name = 'exported';

The preceding module supports named imports in ES modules:

    import { name } from './cjs.cjs';
    console.log(name);
    // Prints: 'exported'

    import cjs from './cjs.cjs';
    console.log(cjs);
    // Prints: { name: 'exported' }

    import * as m from './cjs.cjs';
    console.log(m);
    // Prints: [Module] { default: { name: 'exported' }, name: 'exported' }

As can be seen from the last example of the Module Namespace Exotic Object being logged, the `name` export is copied off of the `module.exports` object and set directly on the ES module namespace when the module is imported.

Live binding updates or new exports added to `module.exports` are not detected for these named exports.

The detection of named exports is based on common syntax patterns but does not always correctly detect named exports. In these cases, using the default import form described above can be a better option.

Named exports detection covers many common export patterns, reexport patterns and build tool and transpiler outputs. See [cjs-module-lexer](https://github.com/guybedford/cjs-module-lexer/tree/1.2.2) for the exact semantics implemented.

### Differences between ES modules and CommonJS

#### No `require`, `exports` or `module.exports`

In most cases, the ES module `import` can be used to load CommonJS modules.

If needed, a `require` function can be constructed within an ES module using [`module.createRequire()`](module.md#module_module_createrequire_filename).

#### No `__filename` or `__dirname`

These CommonJS variables are not available in ES modules.

`__filename` and `__dirname` use cases can be replicated via [`import.meta.url`](#esm_import_meta_url).

#### No JSON Module Loading

JSON imports are still experimental and only supported via the `--experimental-json-modules` flag.

Local JSON files can be loaded relative to `import.meta.url` with `fs` directly:

    import { readFile } from 'fs/promises';
    const json = JSON.parse(await readFile(new URL('./dat.json', import.meta.url)));

Alternatively `module.createRequire()` can be used.

#### No Native Module Loading

Native modules are not currently supported with ES module imports.

They can instead be loaded with [`module.createRequire()`](module.md#module_module_createrequire_filename) or [`process.dlopen`](process.md#process_process_dlopen_module_filename_flags).

#### No `require.resolve`

Relative resolution can be handled via `new URL('./local', import.meta.url)`.

For a complete `require.resolve` replacement, there is a flagged experimental [`import.meta.resolve`](#esm_import_meta_resolve_specifier_parent) API.

Alternatively `module.createRequire()` can be used.

#### No `NODE_PATH`

`NODE_PATH` is not part of resolving `import` specifiers. Please use symlinks if this behavior is desired.

#### No `require.extensions`

`require.extensions` is not used by `import`. The expectation is that loader hooks can provide this workflow in the future.

#### No `require.cache`

`require.cache` is not used by `import` as the ES module loader has its own separate cache.

## JSON modules

> Stability: 1 - Experimental

Currently importing JSON modules are only supported in the `commonjs` mode and are loaded using the CJS loader. [WHATWG JSON modules specification](https://html.spec.whatwg.org/#creating-a-json-module-script) are still being standardized, and are experimentally supported by including the additional flag `--experimental-json-modules` when running Node.js.

When the `--experimental-json-modules` flag is included, both the `commonjs` and `module` mode use the new experimental JSON loader. The imported JSON only exposes a `default`. There is no support for named exports. A cache entry is created in the CommonJS cache to avoid duplication. The same object is returned in CommonJS if the JSON module has already been imported from the same path.

Assuming an `index.mjs` with

    import packageConfig from './package.json';

The `--experimental-json-modules` flag is needed for the module to work.

    node index.mjs # fails
    node --experimental-json-modules index.mjs # works

## Wasm modules

> Stability: 1 - Experimental

Importing Web Assembly modules is supported under the `--experimental-wasm-modules` flag, allowing any `.wasm` files to be imported as normal modules while also supporting their module imports.

This integration is in line with the [ES Module Integration Proposal for Web Assembly](https://github.com/webassembly/esm-integration).

For example, an `index.mjs` containing:

    import * as M from './module.wasm';
    console.log(M);

executed under:

    node --experimental-wasm-modules index.mjs

would provide the exports interface for the instantiation of `module.wasm`.

## Top-level `await`

> Stability: 1 - Experimental

The `await` keyword may be used in the top level (outside of async functions) within modules as per the [ECMAScript Top-Level `await` proposal](https://github.com/tc39/proposal-top-level-await/).

Assuming an `a.mjs` with

    export const five = await Promise.resolve(5);

And a `b.mjs` with

    import { five } from './a.mjs';

    console.log(five); // Logs `5`

    node b.mjs # works

## Loaders

> Stability: 1 - Experimental

**Note: This API is currently being redesigned and will still change.**

To customize the default module resolution, loader hooks can optionally be provided via a `--experimental-loader ./loader-name.mjs` argument to Node.js.

When hooks are used they only apply to ES module loading and not to any CommonJS modules loaded.

### Hooks

#### `resolve(specifier, context, defaultResolve)`

> Note: The loaders API is being redesigned. This hook may disappear or its signature may change. Do not rely on the API described below.

- `specifier` {string}
- `context` {Object}
  - `conditions` {string\[\]}
  - `parentURL` {string}
- `defaultResolve` {Function}
- Returns: {Object}
  - `url` {string}

The `resolve` hook returns the resolved file URL for a given module specifier and parent URL. The module specifier is the string in an `import` statement or `import()` expression, and the parent URL is the URL of the module that imported this one, or `undefined` if this is the main entry point for the application.

The `conditions` property on the `context` is an array of conditions for [Conditional exports](packages.md#packages_conditional_exports) that apply to this resolution request. They can be used for looking up conditional mappings elsewhere or to modify the list when calling the default resolution logic.

The current [package exports conditions](packages.md#packages_conditional_exports) are always in the `context.conditions` array passed into the hook. To guarantee _default Node.js module specifier resolution behavior_ when calling `defaultResolve`, the `context.conditions` array passed to it _must_ include _all_ elements of the `context.conditions` array originally passed into the `resolve` hook.

    /**
     * @param {string} specifier
     * @param {{
     *   conditions: !Array<string>,
     *   parentURL: !(string | undefined),
     * }} context
     * @param {Function} defaultResolve
     * @returns {Promise<{ url: string }>}
     */
    export async function resolve(specifier, context, defaultResolve) {
      const { parentURL = null } = context;
      if (Math.random() > 0.5) { // Some condition.
        // For some or all specifiers, do some custom logic for resolving.
        // Always return an object of the form {url: <string>}.
        return {
          url: parentURL ?
            new URL(specifier, parentURL).href :
            new URL(specifier).href,
        };
      }
      if (Math.random() < 0.5) { // Another condition.
        // When calling `defaultResolve`, the arguments can be modified. In this
        // case it's adding another value for matching conditional exports.
        return defaultResolve(specifier, {
          ...context,
          conditions: [...context.conditions, 'another-condition'],
        });
      }
      // Defer to Node.js for all other specifiers.
      return defaultResolve(specifier, context, defaultResolve);
    }

#### `getFormat(url, context, defaultGetFormat)`

> Note: The loaders API is being redesigned. This hook may disappear or its signature may change. Do not rely on the API described below.

- `url` {string}
- `context` {Object}
- `defaultGetFormat` {Function}
- Returns: {Object}
  - `format` {string}

The `getFormat` hook provides a way to define a custom method of determining how a URL should be interpreted. The `format` returned also affects what the acceptable forms of source values are for a module when parsing. This can be one of the following:

<table style="width:98%;"><colgroup><col style="width: 10%" /><col style="width: 25%" /><col style="width: 63%" /></colgroup><thead><tr class="header"><th><code>format</code></th><th>Description</th><th>Acceptable Types For <code>source</code> Returned by <code>getSource</code> or <code>transformSource</code></th></tr></thead><tbody><tr class="odd"><td><code>'builtin'</code></td><td>Load a Node.js builtin module</td><td>Not applicable</td></tr><tr class="even"><td><code>'commonjs'</code></td><td>Load a Node.js CommonJS module</td><td>Not applicable</td></tr><tr class="odd"><td><code>'json'</code></td><td>Load a JSON file</td><td>{ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>string</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a> }</td></tr><tr class="even"><td><code>'module'</code></td><td>Load an ES module</td><td>{ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>string</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a> }</td></tr><tr class="odd"><td><code>'wasm'</code></td><td>Load a WebAssembly module</td><td>{ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a> }</td></tr></tbody></table>

Note: These types all correspond to classes defined in ECMAScript.

- The specific [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) object is a [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).
- The specific [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) object is a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

Note: If the source value of a text-based format (i.e., `'json'`, `'module'`) is not a string, it is converted to a string using [`util.TextDecoder`](util.md#util_class_util_textdecoder).

    /**
     * @param {string} url
     * @param {Object} context (currently empty)
     * @param {Function} defaultGetFormat
     * @returns {Promise<{ format: string }>}
     */
    export async function getFormat(url, context, defaultGetFormat) {
      if (Math.random() > 0.5) { // Some condition.
        // For some or all URLs, do some custom logic for determining format.
        // Always return an object of the form {format: <string>}, where the
        // format is one of the strings in the preceding table.
        return {
          format: 'module',
        };
      }
      // Defer to Node.js for all other URLs.
      return defaultGetFormat(url, context, defaultGetFormat);
    }

#### `getSource(url, context, defaultGetSource)`

> Note: The loaders API is being redesigned. This hook may disappear or its signature may change. Do not rely on the API described below.

- `url` {string}
- `context` {Object}
  - `format` {string}
- `defaultGetSource` {Function}
- Returns: {Object}
  - `source` {string|SharedArrayBuffer|Uint8Array}

The `getSource` hook provides a way to define a custom method for retrieving the source code of an ES module specifier. This would allow a loader to potentially avoid reading files from disk.

    /**
     * @param {string} url
     * @param {{ format: string }} context
     * @param {Function} defaultGetSource
     * @returns {Promise<{ source: !(string | SharedArrayBuffer | Uint8Array) }>}
     */
    export async function getSource(url, context, defaultGetSource) {
      const { format } = context;
      if (Math.random() > 0.5) { // Some condition.
        // For some or all URLs, do some custom logic for retrieving the source.
        // Always return an object of the form {source: <string|buffer>}.
        return {
          source: '...',
        };
      }
      // Defer to Node.js for all other URLs.
      return defaultGetSource(url, context, defaultGetSource);
    }

#### `transformSource(source, context, defaultTransformSource)`

> Note: The loaders API is being redesigned. This hook may disappear or its signature may change. Do not rely on the API described below.

- `source` {string|SharedArrayBuffer|Uint8Array}
- `context` {Object}
  - `format` {string}
  - `url` {string}
- Returns: {Object}
  - `source` {string|SharedArrayBuffer|Uint8Array}

The `transformSource` hook provides a way to modify the source code of a loaded ES module file after the source string has been loaded but before Node.js has done anything with it.

If this hook is used to convert unknown-to-Node.js file types into executable JavaScript, a resolve hook is also necessary in order to register any unknown-to-Node.js file extensions. See the [transpiler loader example](#esm_transpiler_loader) below.

    /**
     * @param {!(string | SharedArrayBuffer | Uint8Array)} source
     * @param {{
     *   format: string,
     *   url: string,
     * }} context
     * @param {Function} defaultTransformSource
     * @returns {Promise<{ source: !(string | SharedArrayBuffer | Uint8Array) }>}
     */
    export async function transformSource(source, context, defaultTransformSource) {
      const { url, format } = context;
      if (Math.random() > 0.5) { // Some condition.
        // For some or all URLs, do some custom logic for modifying the source.
        // Always return an object of the form {source: <string|buffer>}.
        return {
          source: '...',
        };
      }
      // Defer to Node.js for all other sources.
      return defaultTransformSource(source, context, defaultTransformSource);
    }

#### `getGlobalPreloadCode()`

> Note: The loaders API is being redesigned. This hook may disappear or its signature may change. Do not rely on the API described below.

- Returns: {string}

Sometimes it might be necessary to run some code inside of the same global scope that the application runs in. This hook allows the return of a string that is run as sloppy-mode script on startup.

Similar to how CommonJS wrappers work, the code runs in an implicit function scope. The only argument is a `require`-like function that can be used to load builtins like “fs”: `getBuiltin(request: string)`.

If the code needs more advanced `require` features, it has to construct its own `require` using `module.createRequire()`.

    /**
     * @returns {string} Code to run before application startup
     */
    export function getGlobalPreloadCode() {
      return `\
    globalThis.someInjectedProperty = 42;
    console.log('I just set some globals!');

    const { createRequire } = getBuiltin('module');
    const { cwd } = getBuiltin('process');

    const require = createRequire(cwd() + '/<preload>');
    // [...]
    `;
    }

### Examples

The various loader hooks can be used together to accomplish wide-ranging customizations of Node.js’ code loading and evaluation behaviors.

#### HTTPS loader

In current Node.js, specifiers starting with `https://` are unsupported. The loader below registers hooks to enable rudimentary support for such specifiers. While this may seem like a significant improvement to Node.js core functionality, there are substantial downsides to actually using this loader: performance is much slower than loading files from disk, there is no caching, and there is no security.

    // https-loader.mjs
    import { get } from 'https';

    export function resolve(specifier, context, defaultResolve) {
      const { parentURL = null } = context;

      // Normally Node.js would error on specifiers starting with 'https://', so
      // this hook intercepts them and converts them into absolute URLs to be
      // passed along to the later hooks below.
      if (specifier.startsWith('https://')) {
        return {
          url: specifier
        };
      } else if (parentURL && parentURL.startsWith('https://')) {
        return {
          url: new URL(specifier, parentURL).href
        };
      }

      // Let Node.js handle all other specifiers.
      return defaultResolve(specifier, context, defaultResolve);
    }

    export function getFormat(url, context, defaultGetFormat) {
      // This loader assumes all network-provided JavaScript is ES module code.
      if (url.startsWith('https://')) {
        return {
          format: 'module'
        };
      }

      // Let Node.js handle all other URLs.
      return defaultGetFormat(url, context, defaultGetFormat);
    }

    export function getSource(url, context, defaultGetSource) {
      // For JavaScript to be loaded over the network, we need to fetch and
      // return it.
      if (url.startsWith('https://')) {
        return new Promise((resolve, reject) => {
          get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ source: data }));
          }).on('error', (err) => reject(err));
        });
      }

      // Let Node.js handle all other URLs.
      return defaultGetSource(url, context, defaultGetSource);
    }

    // main.mjs
    import { VERSION } from 'https://coffeescript.org/browser-compiler-modern/coffeescript.js';

    console.log(VERSION);

With the preceding loader, running `node --experimental-loader ./https-loader.mjs ./main.mjs` prints the current version of CoffeeScript per the module at the URL in `main.mjs`.

#### Transpiler loader

Sources that are in formats Node.js doesn’t understand can be converted into JavaScript using the [`transformSource` hook](#esm_transformsource_source_context_defaulttransformsource). Before that hook gets called, however, other hooks need to tell Node.js not to throw an error on unknown file types; and to tell Node.js how to load this new file type.

This is less performant than transpiling source files before running Node.js; a transpiler loader should only be used for development and testing purposes.

    // coffeescript-loader.mjs
    import { URL, pathToFileURL } from 'url';
    import CoffeeScript from 'coffeescript';
    import { cwd } from 'process';

    const baseURL = pathToFileURL(`${cwd()}/`).href;

    // CoffeeScript files end in .coffee, .litcoffee or .coffee.md.
    const extensionsRegex = /\.coffee$|\.litcoffee$|\.coffee\.md$/;

    export function resolve(specifier, context, defaultResolve) {
      const { parentURL = baseURL } = context;

      // Node.js normally errors on unknown file extensions, so return a URL for
      // specifiers ending in the CoffeeScript file extensions.
      if (extensionsRegex.test(specifier)) {
        return {
          url: new URL(specifier, parentURL).href
        };
      }

      // Let Node.js handle all other specifiers.
      return defaultResolve(specifier, context, defaultResolve);
    }

    export function getFormat(url, context, defaultGetFormat) {
      // Now that we patched resolve to let CoffeeScript URLs through, we need to
      // tell Node.js what format such URLs should be interpreted as. For the
      // purposes of this loader, all CoffeeScript URLs are ES modules.
      if (extensionsRegex.test(url)) {
        return {
          format: 'module'
        };
      }

      // Let Node.js handle all other URLs.
      return defaultGetFormat(url, context, defaultGetFormat);
    }

    export function transformSource(source, context, defaultTransformSource) {
      const { url, format } = context;

      if (extensionsRegex.test(url)) {
        return {
          source: CoffeeScript.compile(source, { bare: true })
        };
      }

      // Let Node.js handle all other sources.
      return defaultTransformSource(source, context, defaultTransformSource);
    }

    # main.coffee
    import { scream } from './scream.coffee'
    console.log scream 'hello, world'

    import { version } from 'process'
    console.log "Brought to you by Node.js version #{version}"

    # scream.coffee
    export scream = (str) -> str.toUpperCase()

With the preceding loader, running `node --experimental-loader ./coffeescript-loader.mjs main.coffee` causes `main.coffee` to be turned into JavaScript after its source code is loaded from disk but before Node.js executes it; and so on for any `.coffee`, `.litcoffee` or `.coffee.md` files referenced via `import` statements of any loaded file.

## Resolution algorithm

### Features

The resolver has the following properties:

- FileURL-based resolution as is used by ES modules
- Support for builtin module loading
- Relative and absolute URL resolution
- No default extensions
- No folder mains
- Bare specifier package resolution lookup through node_modules

### Resolver algorithm

The algorithm to load an ES module specifier is given through the **ESM_RESOLVE** method below. It returns the resolved URL for a module specifier relative to a parentURL.

The algorithm to determine the module format of a resolved URL is provided by **ESM_FORMAT**, which returns the unique module format for any file. The _“module”_ format is returned for an ECMAScript Module, while the _“commonjs”_ format is used to indicate loading through the legacy CommonJS loader. Additional formats such as _“addon”_ can be extended in future updates.

In the following algorithms, all subroutine errors are propagated as errors of these top-level routines unless stated otherwise.

_defaultConditions_ is the conditional environment name array, `["node", "import"]`.

The resolver can throw the following errors: \* _Invalid Module Specifier_: Module specifier is an invalid URL, package name or package subpath specifier. \* _Invalid Package Configuration_: package.json configuration is invalid or contains an invalid configuration. \* _Invalid Package Target_: Package exports or imports define a target module for the package that is an invalid type or string target. \* _Package Path Not Exported_: Package exports do not define or permit a target subpath in the package for the given module. \* _Package Import Not Defined_: Package imports do not define the specifier. \* _Module Not Found_: The package or module requested does not exist. \* _Unsupported Directory Import_: The resolved path corresponds to a directory, which is not a supported target for module imports.

### Resolver Algorithm Specification

**ESM_RESOLVE**(_specifier_, _parentURL_)

> 1.  Let _resolved_ be **undefined**.
> 2.  If _specifier_ is a valid URL, then
>     1.  Set _resolved_ to the result of parsing and reserializing _specifier_ as a URL.
> 3.  Otherwise, if _specifier_ starts with _“/”_, _“./”_ or _“../”_, then
>     1.  Set _resolved_ to the URL resolution of _specifier_ relative to _parentURL_.
> 4.  Otherwise, if _specifier_ starts with _“\#”_, then
>     1.  Set _resolved_ to the destructured value of the result of **PACKAGE_IMPORTS_RESOLVE**(_specifier_, _parentURL_, _defaultConditions_).
> 5.  Otherwise,
>     1.  Note: _specifier_ is now a bare specifier.
>     2.  Set _resolved_ the result of **PACKAGE_RESOLVE**(_specifier_, _parentURL_).
> 6.  If _resolved_ contains any percent encodings of _“/”_ or _“\\”_ (_“%2f”_ and _“%5C”_ respectively), then
>     1.  Throw an _Invalid Module Specifier_ error.
> 7.  If the file at _resolved_ is a directory, then
>     1.  Throw an _Unsupported Directory Import_ error.
> 8.  If the file at _resolved_ does not exist, then
>     1.  Throw a _Module Not Found_ error.
> 9.  Set _resolved_ to the real path of _resolved_.
> 10. Let _format_ be the result of **ESM_FORMAT**(_resolved_).
> 11. Load _resolved_ as module format, _format_.
> 12. Return _resolved_.

**PACKAGE_RESOLVE**(_packageSpecifier_, _parentURL_)

> 1.  Let _packageName_ be **undefined**.
> 2.  If _packageSpecifier_ is an empty string, then
>     1.  Throw an _Invalid Module Specifier_ error.
> 3.  If _packageSpecifier_ does not start with _“@”_, then
>     1.  Set _packageName_ to the substring of _packageSpecifier_ until the first _“/”_ separator or the end of the string.
> 4.  Otherwise,
>     1.  If _packageSpecifier_ does not contain a _“/”_ separator, then
>         1.  Throw an _Invalid Module Specifier_ error.
>     2.  Set _packageName_ to the substring of _packageSpecifier_ until the second _“/”_ separator or the end of the string.
> 5.  If _packageName_ starts with _“.”_ or contains _“\\”_ or _“%”_, then
>     1.  Throw an _Invalid Module Specifier_ error.
> 6.  Let _packageSubpath_ be _“.”_ concatenated with the substring of _packageSpecifier_ from the position at the length of _packageName_.
> 7.  Let _selfUrl_ be the result of **PACKAGE_SELF_RESOLVE**(_packageName_, _packageSubpath_, _parentURL_).
> 8.  If _selfUrl_ is not **undefined**, return _selfUrl_.
> 9.  If _packageSubpath_ is _“.”_ and _packageName_ is a Node.js builtin module, then
>     1.  Return the string _“node:”_ concatenated with _packageSpecifier_.
> 10. While _parentURL_ is not the file system root,
>     1.  Let _packageURL_ be the URL resolution of _“node_modules/”_ concatenated with _packageSpecifier_, relative to _parentURL_.
>     2.  Set _parentURL_ to the parent folder URL of _parentURL_.
>     3.  If the folder at _packageURL_ does not exist, then
>         1.  Set _parentURL_ to the parent URL path of _parentURL_.
>         2.  Continue the next loop iteration.
>     4.  Let _pjson_ be the result of **READ_PACKAGE_JSON**(_packageURL_).
>     5.  If _pjson_ is not **null** and _pjson_.\_exports\_ is not **null** or **undefined**, then
>         1.  Let _exports_ be _pjson.exports_.
>         2.  Return the _resolved_ destructured value of the result of **PACKAGE_EXPORTS_RESOLVE**(_packageURL_, _packageSubpath_, _pjson.exports_, _defaultConditions_).
>     6.  Otherwise, if _packageSubpath_ is equal to _“.”_, then
>         1.  Return the result applying the legacy **LOAD_AS_DIRECTORY** CommonJS resolver to _packageURL_, throwing a _Module Not Found_ error for no resolution.
>     7.  Otherwise,
>         1.  Return the URL resolution of _packageSubpath_ in _packageURL_.
> 11. Throw a _Module Not Found_ error.

**PACKAGE_SELF_RESOLVE**(_packageName_, _packageSubpath_, _parentURL_)

> 1.  Let _packageURL_ be the result of **READ_PACKAGE_SCOPE**(_parentURL_).
> 2.  If _packageURL_ is **null**, then
>     1.  Return **undefined**.
> 3.  Let _pjson_ be the result of **READ_PACKAGE_JSON**(_packageURL_).
> 4.  If _pjson_ is **null** or if _pjson_.\_exports\_ is **null** or **undefined**, then
>     1.  Return **undefined**.
> 5.  If _pjson.name_ is equal to _packageName_, then
>     1.  Return the _resolved_ destructured value of the result of **PACKAGE_EXPORTS_RESOLVE**(_packageURL_, _subpath_, _pjson.exports_, _defaultConditions_).
> 6.  Otherwise, return **undefined**.

**PACKAGE_EXPORTS_RESOLVE**(_packageURL_, _subpath_, _exports_, _conditions_)

> 1.  If _exports_ is an Object with both a key starting with _“.”_ and a key not starting with _“.”_, throw an _Invalid Package Configuration_ error.
> 2.  If _subpath_ is equal to _“.”_, then
>     1.  Let _mainExport_ be **undefined**.
>     2.  If _exports_ is a String or Array, or an Object containing no keys starting with _“.”_, then
>         1.  Set _mainExport_ to _exports_.
>     3.  Otherwise if _exports_ is an Object containing a _“.”_ property, then
>         1.  Set _mainExport_ to _exports_\[_“.”_\].
>     4.  If _mainExport_ is not **undefined**, then
>         1.  Let _resolved_ be the result of **PACKAGE_TARGET_RESOLVE**( _packageURL_, _mainExport_, _""_, **false**, **false**, _conditions_).
>         2.  If _resolved_ is not **null** or **undefined**, then
>             1.  Return _resolved_.
> 3.  Otherwise, if _exports_ is an Object and all keys of _exports_ start with _“.”_, then
>     1.  Let _matchKey_ be the string _“./”_ concatenated with _subpath_.
>     2.  Let _resolvedMatch_ be result of **PACKAGE_IMPORTS_EXPORTS_RESOLVE**( _matchKey_, _exports_, _packageURL_, **false**, _conditions_).
>     3.  If _resolvedMatch_.\_resolve\_ is not **null** or **undefined**, then
>         1.  Return _resolvedMatch_.
> 4.  Throw a _Package Path Not Exported_ error.

**PACKAGE_IMPORTS_RESOLVE**(_specifier_, _parentURL_, _conditions_)

> 1.  Assert: _specifier_ begins with _“\#”_.
> 2.  If _specifier_ is exactly equal to _“\#”_ or starts with _“\#/”_, then
>     1.  Throw an _Invalid Module Specifier_ error.
> 3.  Let _packageURL_ be the result of **READ_PACKAGE_SCOPE**(_parentURL_).
> 4.  If _packageURL_ is not **null**, then
>     1.  Let _pjson_ be the result of **READ_PACKAGE_JSON**(_packageURL_).
>     2.  If _pjson.imports_ is a non-null Object, then
>         1.  Let _resolvedMatch_ be the result of **PACKAGE_IMPORTS_EXPORTS_RESOLVE**(_specifier_, _pjson.imports_, _packageURL_, **true**, _conditions_).
>         2.  If _resolvedMatch_.\_resolve\_ is not **null** or **undefined**, then
>             1.  Return _resolvedMatch_.
> 5.  Throw a _Package Import Not Defined_ error.

**PACKAGE_IMPORTS_EXPORTS_RESOLVE**(_matchKey_, _matchObj_, _packageURL_, _isImports_, _conditions_)

> 1.  If _matchKey_ is a key of _matchObj_, and does not end in \_"\*"\_, then
>     1.  Let _target_ be the value of _matchObj_\[_matchKey_\].
>     2.  Let _resolved_ be the result of **PACKAGE_TARGET_RESOLVE**( _packageURL_, _target_, _""_, **false**, _isImports_, _conditions_).
>     3.  Return the object _{ resolved, exact: **true** }_.
> 2.  Let _expansionKeys_ be the list of keys of _matchObj_ ending in _“/”_ or \_"\*"\_, sorted by length descending.
> 3.  For each key _expansionKey_ in _expansionKeys_, do
>     1.  If _expansionKey_ ends in \_"\*"\_ and _matchKey_ starts with but is not equal to the substring of _expansionKey_ excluding the last \_"\*"\_ character, then
>         1.  Let _target_ be the value of _matchObj_\[_expansionKey_\].
>         2.  Let _subpath_ be the substring of _matchKey_ starting at the index of the length of _expansionKey_ minus one.
>         3.  Let _resolved_ be the result of **PACKAGE_TARGET_RESOLVE**( _packageURL_, _target_, _subpath_, **true**, _isImports_, _conditions_).
>         4.  Return the object _{ resolved, exact: **true** }_.
>     2.  If _matchKey_ starts with _expansionKey_, then
>         1.  Let _target_ be the value of _matchObj_\[_expansionKey_\].
>         2.  Let _subpath_ be the substring of _matchKey_ starting at the index of the length of _expansionKey_.
>         3.  Let _resolved_ be the result of **PACKAGE_TARGET_RESOLVE**( _packageURL_, _target_, _subpath_, **false**, _isImports_, _conditions_).
>         4.  Return the object _{ resolved, exact: **false** }_.
> 4.  Return the object _{ resolved: **null**, exact: **true** }_.

**PACKAGE_TARGET_RESOLVE**(_packageURL_, _target_, _subpath_, _pattern_, _internal_, _conditions_)

> 1.  If _target_ is a String, then
>     1.  If _pattern_ is **false**, _subpath_ has non-zero length and _target_ does not end with _“/”_, throw an _Invalid Module Specifier_ error.
>     2.  If _target_ does not start with _“./”_, then
>         1.  If _internal_ is **true** and _target_ does not start with _“../”_ or _“/”_ and is not a valid URL, then
>             1.  If _pattern_ is **true**, then
>                 1.  Return **PACKAGE_RESOLVE**(_target_ with every instance of \_"\*"\_ replaced by _subpath_, _packageURL_ + _“/”_)\_.
>             2.  Return **PACKAGE_RESOLVE**(_target_ + _subpath_, _packageURL_ + _“/”_)\_.
>         2.  Otherwise, throw an _Invalid Package Target_ error.
>     3.  If _target_ split on _“/”_ or _“\\”_ contains any _“.”_, _“..”_ or _“node_modules”_ segments after the first segment, throw an _Invalid Package Target_ error.
>     4.  Let _resolvedTarget_ be the URL resolution of the concatenation of _packageURL_ and _target_.
>     5.  Assert: _resolvedTarget_ is contained in _packageURL_.
>     6.  If _subpath_ split on _“/”_ or _“\\”_ contains any _“.”_, _“..”_ or _“node_modules”_ segments, throw an _Invalid Module Specifier_ error.
>     7.  If _pattern_ is **true**, then
>         1.  Return the URL resolution of _resolvedTarget_ with every instance of \_"\*"\_ replaced with _subpath_.
>     8.  Otherwise,
>         1.  Return the URL resolution of the concatenation of _subpath_ and _resolvedTarget_.
> 2.  Otherwise, if _target_ is a non-null Object, then
>     1.  If _exports_ contains any index property keys, as defined in ECMA-262 [6.1.7 Array Index](https://tc39.es/ecma262/#integer-index), throw an _Invalid Package Configuration_ error.
>     2.  For each property _p_ of _target_, in object insertion order as,
>         1.  If _p_ equals _“default”_ or _conditions_ contains an entry for _p_, then
>             1.  Let _targetValue_ be the value of the _p_ property in _target_.
>             2.  Let _resolved_ be the result of **PACKAGE_TARGET_RESOLVE**( _packageURL_, _targetValue_, _subpath_, _pattern_, _internal_, _conditions_).
>             3.  If _resolved_ is equal to **undefined**, continue the loop.
>             4.  Return _resolved_.
>     3.  Return **undefined**.
> 3.  Otherwise, if _target_ is an Array, then
>     1.  If \_target.length is zero, return **null**.
>     2.  For each item _targetValue_ in _target_, do
>         1.  Let _resolved_ be the result of **PACKAGE_TARGET_RESOLVE**( _packageURL_, _targetValue_, _subpath_, _pattern_, _internal_, _conditions_), continuing the loop on any _Invalid Package Target_ error.
>         2.  If _resolved_ is **undefined**, continue the loop.
>         3.  Return _resolved_.
>     3.  Return or throw the last fallback resolution **null** return or error.
> 4.  Otherwise, if _target_ is _null_, return **null**.
> 5.  Otherwise throw an _Invalid Package Target_ error.

**ESM_FORMAT**(_url_)

> 1.  Assert: _url_ corresponds to an existing file.
> 2.  Let _pjson_ be the result of **READ_PACKAGE_SCOPE**(_url_).
> 3.  If _url_ ends in _“.mjs”_, then
>     1.  Return _“module”_.
> 4.  If _url_ ends in _“.cjs”_, then
>     1.  Return _“commonjs”_.
> 5.  If _pjson?.type_ exists and is _“module”_, then
>     1.  If _url_ ends in _“.js”_, then
>         1.  Return _“module”_.
>     2.  Throw an _Unsupported File Extension_ error.
> 6.  Otherwise,
>     1.  Throw an _Unsupported File Extension_ error.

**READ_PACKAGE_SCOPE**(_url_)

> 1.  Let _scopeURL_ be _url_.
> 2.  While _scopeURL_ is not the file system root,
>     1.  Set _scopeURL_ to the parent URL of _scopeURL_.
>     2.  If _scopeURL_ ends in a _“node_modules”_ path segment, return **null**.
>     3.  Let _pjson_ be the result of **READ_PACKAGE_JSON**(_scopeURL_).
>     4.  If _pjson_ is not **null**, then
>         1.  Return _pjson_.
> 3.  Return **null**.

**READ_PACKAGE_JSON**(_packageURL_)

> 1.  Let _pjsonURL_ be the resolution of _“package.json”_ within _packageURL_.
> 2.  If the file at _pjsonURL_ does not exist, then
>     1.  Return **null**.
> 3.  If the file at _packageURL_ does not parse as valid JSON, then
>     1.  Throw an _Invalid Package Configuration_ error.
> 4.  Return the parsed JSON source of the file at _pjsonURL_.

### Customizing ESM specifier resolution algorithm

> Stability: 1 - Experimental

The current specifier resolution does not support all default behavior of the CommonJS loader. One of the behavior differences is automatic resolution of file extensions and the ability to import directories that have an index file.

The `--experimental-specifier-resolution=[mode]` flag can be used to customize the extension resolution algorithm. The default mode is `explicit`, which requires the full path to a module be provided to the loader. To enable the automatic extension resolution and importing from directories that include an index file use the `node` mode.

    $ node index.mjs
    success!
    $ node index # Failure!
    Error: Cannot find module
    $ node --experimental-specifier-resolution=node index
    success!
