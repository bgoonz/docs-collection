# Timers

> Stability: 2 - Stable

The `timer` module exposes a global API for scheduling functions to be called at some future period of time. Because the timer functions are globals, there is no need to call `require('timers')` to use the API.

The timer functions within Node.js implement a similar API as the timers API provided by Web Browsers but use a different internal implementation that is built around the Node.js [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout).

## Class: `Immediate`

This object is created internally and is returned from [`setImmediate()`](#timers_setimmediate_callback_args). It can be passed to [`clearImmediate()`](#timers_clearimmediate_immediate) in order to cancel the scheduled actions.

By default, when an immediate is scheduled, the Node.js event loop will continue running as long as the immediate is active. The `Immediate` object returned by [`setImmediate()`](#timers_setimmediate_callback_args) exports both `immediate.ref()` and `immediate.unref()` functions that can be used to control this default behavior.

### `immediate.hasRef()`

- Returns: {boolean}

If true, the `Immediate` object will keep the Node.js event loop active.

### `immediate.ref()`

- Returns: {Immediate} a reference to `immediate`

When called, requests that the Node.js event loop _not_ exit so long as the `Immediate` is active. Calling `immediate.ref()` multiple times will have no effect.

By default, all `Immediate` objects are “ref’ed”, making it normally unnecessary to call `immediate.ref()` unless `immediate.unref()` had been called previously.

### `immediate.unref()`

- Returns: {Immediate} a reference to `immediate`

When called, the active `Immediate` object will not require the Node.js event loop to remain active. If there is no other activity keeping the event loop running, the process may exit before the `Immediate` object’s callback is invoked. Calling `immediate.unref()` multiple times will have no effect.

## Class: `Timeout`

This object is created internally and is returned from [`setTimeout()`](#timers_settimeout_callback_delay_args) and [`setInterval()`](#timers_setinterval_callback_delay_args). It can be passed to either [`clearTimeout()`](#timers_cleartimeout_timeout) or [`clearInterval()`](#timers_clearinterval_timeout) in order to cancel the scheduled actions.

By default, when a timer is scheduled using either [`setTimeout()`](#timers_settimeout_callback_delay_args) or [`setInterval()`](#timers_setinterval_callback_delay_args), the Node.js event loop will continue running as long as the timer is active. Each of the `Timeout` objects returned by these functions export both `timeout.ref()` and `timeout.unref()` functions that can be used to control this default behavior.

### `timeout.hasRef()`

- Returns: {boolean}

If true, the `Timeout` object will keep the Node.js event loop active.

### `timeout.ref()`

- Returns: {Timeout} a reference to `timeout`

When called, requests that the Node.js event loop _not_ exit so long as the `Timeout` is active. Calling `timeout.ref()` multiple times will have no effect.

By default, all `Timeout` objects are “ref’ed”, making it normally unnecessary to call `timeout.ref()` unless `timeout.unref()` had been called previously.

### `timeout.refresh()`

- Returns: {Timeout} a reference to `timeout`

Sets the timer’s start time to the current time, and reschedules the timer to call its callback at the previously specified duration adjusted to the current time. This is useful for refreshing a timer without allocating a new JavaScript object.

Using this on a timer that has already called its callback will reactivate the timer.

### `timeout.unref()`

- Returns: {Timeout} a reference to `timeout`

When called, the active `Timeout` object will not require the Node.js event loop to remain active. If there is no other activity keeping the event loop running, the process may exit before the `Timeout` object’s callback is invoked. Calling `timeout.unref()` multiple times will have no effect.

Calling `timeout.unref()` creates an internal timer that will wake the Node.js event loop. Creating too many of these can adversely impact performance of the Node.js application.

### `timeout[Symbol.toPrimitive]()`

- Returns: {integer} a number that can be used to reference this `timeout`

Coerce a `Timeout` to a primitive. The primitive can be used to clear the `Timeout`. The primitive can only be used in the same thread where the timeout was created. Therefore, to use it across [`worker_threads`](worker_threads.md) it must first be passed to the correct thread. This allows enhanced compatibility with browser `setTimeout()` and `setInterval()` implementations.

## Scheduling timers

A timer in Node.js is an internal construct that calls a given function after a certain period of time. When a timer’s function is called varies depending on which method was used to create the timer and what other work the Node.js event loop is doing.

### `setImmediate(callback[, ...args])`

- `callback` {Function} The function to call at the end of this turn of the Node.js [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout)
- `...args` {any} Optional arguments to pass when the `callback` is called.
- Returns: {Immediate} for use with [`clearImmediate()`](#timers_clearimmediate_immediate)

Schedules the “immediate” execution of the `callback` after I/O events’ callbacks.

When multiple calls to `setImmediate()` are made, the `callback` functions are queued for execution in the order in which they are created. The entire callback queue is processed every event loop iteration. If an immediate timer is queued from inside an executing callback, that timer will not be triggered until the next event loop iteration.

If `callback` is not a function, a [`TypeError`](errors.md#errors_class_typeerror) will be thrown.

This method has a custom variant for promises that is available using [`timersPromises.setImmediate()`](#timers_timerspromises_setimmediate_value_options).

### `setInterval(callback[, delay[, ...args]])`

- `callback` {Function} The function to call when the timer elapses.
- `delay` {number} The number of milliseconds to wait before calling the `callback`. **Default:** `1`.
- `...args` {any} Optional arguments to pass when the `callback` is called.
- Returns: {Timeout} for use with [`clearInterval()`](#timers_clearinterval_timeout)

Schedules repeated execution of `callback` every `delay` milliseconds.

When `delay` is larger than `2147483647` or less than `1`, the `delay` will be set to `1`. Non-integer delays are truncated to an integer.

If `callback` is not a function, a [`TypeError`](errors.md#errors_class_typeerror) will be thrown.

This method has a custom variant for promises that is available using [`timersPromises.setInterval()`](#timers_timerspromises_setinterval_delay_value_options).

### `setTimeout(callback[, delay[, ...args]])`

- `callback` {Function} The function to call when the timer elapses.
- `delay` {number} The number of milliseconds to wait before calling the `callback`. **Default:** `1`.
- `...args` {any} Optional arguments to pass when the `callback` is called.
- Returns: {Timeout} for use with [`clearTimeout()`](#timers_cleartimeout_timeout)

Schedules execution of a one-time `callback` after `delay` milliseconds.

The `callback` will likely not be invoked in precisely `delay` milliseconds. Node.js makes no guarantees about the exact timing of when callbacks will fire, nor of their ordering. The callback will be called as close as possible to the time specified.

When `delay` is larger than `2147483647` or less than `1`, the `delay` will be set to `1`. Non-integer delays are truncated to an integer.

If `callback` is not a function, a [`TypeError`](errors.md#errors_class_typeerror) will be thrown.

This method has a custom variant for promises that is available using [`timersPromises.setTimeout()`](#timers_timerspromises_settimeout_delay_value_options).

## Cancelling timers

The [`setImmediate()`](#timers_setimmediate_callback_args), [`setInterval()`](#timers_setinterval_callback_delay_args), and [`setTimeout()`](#timers_settimeout_callback_delay_args) methods each return objects that represent the scheduled timers. These can be used to cancel the timer and prevent it from triggering.

For the promisified variants of [`setImmediate()`](#timers_setimmediate_callback_args) and [`setTimeout()`](#timers_settimeout_callback_delay_args), an [`AbortController`](globals.md#globals_class_abortcontroller) may be used to cancel the timer. When canceled, the returned Promises will be rejected with an `'AbortError'`.

For `setImmediate()`:

    const { setImmediate: setImmediatePromise } = require('timers/promises');

    const ac = new AbortController();
    const signal = ac.signal;

    setImmediatePromise('foobar', { signal })
      .then(console.log)
      .catch((err) => {
        if (err.name === 'AbortError')
          console.log('The immediate was aborted');
      });

    ac.abort();

For `setTimeout()`:

    const { setTimeout: setTimeoutPromise } = require('timers/promises');

    const ac = new AbortController();
    const signal = ac.signal;

    setTimeoutPromise(1000, 'foobar', { signal })
      .then(console.log)
      .catch((err) => {
        if (err.name === 'AbortError')
          console.log('The timeout was aborted');
      });

    ac.abort();

### `clearImmediate(immediate)`

- `immediate` {Immediate} An `Immediate` object as returned by [`setImmediate()`](#timers_setimmediate_callback_args).

Cancels an `Immediate` object created by [`setImmediate()`](#timers_setimmediate_callback_args).

### `clearInterval(timeout)`

- `timeout` {Timeout|string|number} A `Timeout` object as returned by [`setInterval()`](#timers_setinterval_callback_delay_args) or the [primitive](#timers_timeout_symbol_toprimitive) of the `Timeout` object as a string or a number.

Cancels a `Timeout` object created by [`setInterval()`](#timers_setinterval_callback_delay_args).

### `clearTimeout(timeout)`

- `timeout` {Timeout|string|number} A `Timeout` object as returned by [`setTimeout()`](#timers_settimeout_callback_delay_args) or the [primitive](#timers_timeout_symbol_toprimitive) of the `Timeout` object as a string or a number.

Cancels a `Timeout` object created by [`setTimeout()`](#timers_settimeout_callback_delay_args).

## Timers Promises API

The `timers/promises` API provides an alternative set of timer functions that return `Promise` objects. The API is accessible via `require('timers/promises')`.

    import {
      setTimeout,
      setImmediate,
      setInterval,
    } from 'timers/promises';

    const {
      setTimeout,
      setImmediate,
      setInterval,
    } = require('timers/promises');

### `timersPromises.setTimeout([delay[, value[, options]]])`

- `delay` {number} The number of milliseconds to wait before fulfilling the promise. **Default:** `1`.
- `value` {any} A value with which the promise is fulfilled.
- `options` {Object}
  - `ref` {boolean} Set to `false` to indicate that the scheduled `Timeout` should not require the Node.js event loop to remain active. **Default:** `true`.
  - `signal` {AbortSignal} An optional `AbortSignal` that can be used to cancel the scheduled `Timeout`.

<!-- -->

    import {
      setTimeout,
    } from 'timers/promises';

    const res = await setTimeout(100, 'result');

    console.log(res);  // Prints 'result'

    const {
      setTimeout,
    } = require('timers/promises');

    setTimeout(100, 'result').then((res) => {
      console.log(res);  // Prints 'result'
    });

### `timersPromises.setImmediate([value[, options]])`

- `value` {any} A value with which the promise is fulfilled.
- `options` {Object}
  - `ref` {boolean} Set to `false` to indicate that the scheduled `Immediate` should not require the Node.js event loop to remain active. **Default:** `true`.
  - `signal` {AbortSignal} An optional `AbortSignal` that can be used to cancel the scheduled `Immediate`.

<!-- -->

    import {
      setImmediate,
    } from 'timers/promises';

    const res = await setImmediate('result');

    console.log(res);  // Prints 'result'

    const {
      setImmediate,
    } = require('timers/promises');

    setImmediate('result').then((res) => {
      console.log(res);  // Prints 'result'
    });

### `timersPromises.setInterval([delay[, value[, options]]])`

Returns an async iterator that generates values in an interval of `delay` ms.

- `delay` {number} The number of milliseconds to wait between iterations. **Default:** `1`.
- `value` {any} A value with which the iterator returns.
- `options` {Object}
  - `ref` {boolean} Set to `false` to indicate that the scheduled `Timeout` between iterations should not require the Node.js event loop to remain active. **Default:** `true`.
  - `signal` {AbortSignal} An optional `AbortSignal` that can be used to cancel the scheduled `Timeout` between operations.

<!-- -->

    import {
      setInterval,
    } from 'timers/promises';

    const interval = 100;
    for await (const startTime of setInterval(interval, Date.now())) {
      const now = Date.now();
      console.log(now);
      if ((now - startTime) > 1000)
        break;
    }
    console.log(Date.now());

    const {
      setInterval,
    } = require('timers/promises');
    const interval = 100;

    (async function() {
      for await (const startTime of setInterval(interval, Date.now())) {
        const now = Date.now();
        console.log(now);
        if ((now - startTime) > 1000)
          break;
      }
      console.log(Date.now());
    })();
