# Global objects

These objects are available in all modules. The following variables may appear to be global but are not. They exist only in the scope of modules, see the [module system documentation](modules.md):

- [`__dirname`](modules.md#modules_dirname)
- [`__filename`](modules.md#modules_filename)
- [`exports`](modules.md#modules_exports)
- [`module`](modules.md#modules_module)
- [`require()`](modules.md#modules_require_id)

The objects listed here are specific to Node.js. There are [built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) that are part of the JavaScript language itself, which are also globally accessible.

## Class: `AbortController`

A utility class used to signal cancelation in selected `Promise`-based APIs. The API is based on the Web API [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

    const ac = new AbortController();

    ac.signal.addEventListener('abort', () => console.log('Aborted!'),
                               { once: true });

    ac.abort();

    console.log(ac.signal.aborted);  // Prints True

### `abortController.abort()`

Triggers the abort signal, causing the `abortController.signal` to emit the `'abort'` event.

### `abortController.signal`

- Type: {AbortSignal}

### Class: `AbortSignal`

- Extends: {EventTarget}

The `AbortSignal` is used to notify observers when the `abortController.abort()` method is called.

#### Static method: `AbortSignal.abort()`

- Returns: {AbortSignal}

Returns a new already aborted `AbortSignal`.

#### Event: `'abort'`

The `'abort'` event is emitted when the `abortController.abort()` method is called. The callback is invoked with a single object argument with a single `type` property set to `'abort'`:

    const ac = new AbortController();

    // Use either the onabort property...
    ac.signal.onabort = () => console.log('aborted!');

    // Or the EventTarget API...
    ac.signal.addEventListener('abort', (event) => {
      console.log(event.type);  // Prints 'abort'
    }, { once: true });

    ac.abort();

The `AbortController` with which the `AbortSignal` is associated will only ever trigger the `'abort'` event once. We recommended that code check that the `abortSignal.aborted` attribute is `false` before adding an `'abort'` event listener.

Any event listeners attached to the `AbortSignal` should use the `{ once: true }` option (or, if using the `EventEmitter` APIs to attach a listener, use the `once()` method) to ensure that the event listener is removed as soon as the `'abort'` event is handled. Failure to do so may result in memory leaks.

#### `abortSignal.aborted`

- Type: {boolean} True after the `AbortController` has been aborted.

#### `abortSignal.onabort`

- Type: {Function}

An optional callback function that may be set by user code to be notified when the `abortController.abort()` function has been called.

## Class: `Buffer`

- {Function}

Used to handle binary data. See the [buffer section](buffer.md).

## `__dirname`

This variable may appear to be global but is not. See [`__dirname`](modules.md#modules_dirname).

## `__filename`

This variable may appear to be global but is not. See [`__filename`](modules.md#modules_filename).

## `atob(data)`

> Stability: 3 - Legacy. Use `Buffer.from(data, 'base64')` instead.

Global alias for [`buffer.atob()`](buffer.md#buffer_buffer_atob_data).

## `btoa(data)`

> Stability: 3 - Legacy. Use `buf.toString('base64')` instead.

Global alias for [`buffer.btoa()`](buffer.md#buffer_buffer_btoa_data).

## `clearImmediate(immediateObject)`

[`clearImmediate`](timers.md#timers_clearimmediate_immediate) is described in the [timers](timers.md) section.

## `clearInterval(intervalObject)`

[`clearInterval`](timers.md#timers_clearinterval_timeout) is described in the [timers](timers.md) section.

## `clearTimeout(timeoutObject)`

[`clearTimeout`](timers.md#timers_cleartimeout_timeout) is described in the [timers](timers.md) section.

## `console`

- {Object}

Used to print to stdout and stderr. See the [`console`](console.md) section.

## `Event`

A browser-compatible implementation of the `Event` class. See [`EventTarget` and `Event` API](events.md#event-target-and-event-api) for more details.

## `EventTarget`

A browser-compatible implementation of the `EventTarget` class. See [`EventTarget` and `Event` API](events.md#event-target-and-event-api) for more details.

## `exports`

This variable may appear to be global but is not. See [`exports`](modules.md#modules_exports).

## `global`

- {Object} The global namespace object.

In browsers, the top-level scope is the global scope. This means that within the browser `var something` will define a new global variable. In Node.js this is different. The top-level scope is not the global scope; `var something` inside a Node.js module will be local to that module.

## `MessageChannel`

The `MessageChannel` class. See [`MessageChannel`](worker_threads.md#worker_threads_class_messagechannel) for more details.

## `MessageEvent`

The `MessageEvent` class. See [`MessageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/MessageEvent) for more details.

## `MessagePort`

The `MessagePort` class. See [`MessagePort`](worker_threads.md#worker_threads_class_messageport) for more details.

## `module`

This variable may appear to be global but is not. See [`module`](modules.md#modules_module).

## `performance`

The [`perf_hooks.performance`](perf_hooks.md#perf_hooks_perf_hooks_performance) object.

## `process`

- {Object}

The process object. See the [`process` object](process.md#process_process) section.

## `queueMicrotask(callback)`

- `callback` {Function} Function to be queued.

The `queueMicrotask()` method queues a microtask to invoke `callback`. If `callback` throws an exception, the [`process` object](process.md#process_process) `'uncaughtException'` event will be emitted.

The microtask queue is managed by V8 and may be used in a similar manner to the [`process.nextTick()`](process.md#process_process_nexttick_callback_args) queue, which is managed by Node.js. The `process.nextTick()` queue is always processed before the microtask queue within each turn of the Node.js event loop.

    // Here, `queueMicrotask()` is used to ensure the 'load' event is always
    // emitted asynchronously, and therefore consistently. Using
    // `process.nextTick()` here would result in the 'load' event always emitting
    // before any other promise jobs.

    DataHandler.prototype.load = async function load(key) {
      const hit = this._cache.get(url);
      if (hit !== undefined) {
        queueMicrotask(() => {
          this.emit('load', hit);
        });
        return;
      }

      const data = await fetchData(key);
      this._cache.set(url, data);
      this.emit('load', data);
    };

## `require()`

This variable may appear to be global but is not. See [`require()`](modules.md#modules_require_id).

## `setImmediate(callback[, ...args])`

[`setImmediate`](timers.md#timers_setimmediate_callback_args) is described in the [timers](timers.md) section.

## `setInterval(callback, delay[, ...args])`

[`setInterval`](timers.md#timers_setinterval_callback_delay_args) is described in the [timers](timers.md) section.

## `setTimeout(callback, delay[, ...args])`

[`setTimeout`](timers.md#timers_settimeout_callback_delay_args) is described in the [timers](timers.md) section.

## `TextDecoder`

The WHATWG `TextDecoder` class. See the [`TextDecoder`](util.md#util_class_util_textdecoder) section.

## `TextEncoder`

The WHATWG `TextEncoder` class. See the [`TextEncoder`](util.md#util_class_util_textencoder) section.

## `URL`

The WHATWG `URL` class. See the [`URL`](url.md#url_class_url) section.

## `URLSearchParams`

The WHATWG `URLSearchParams` class. See the [`URLSearchParams`](url.md#url_class_urlsearchparams) section.

## `WebAssembly`

- {Object}

The object that acts as the namespace for all W3C [WebAssembly](https://webassembly.org) related functionality. See the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/WebAssembly) for usage and compatibility.
