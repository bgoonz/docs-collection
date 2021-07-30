# Internationalization support

Node.js has many features that make it easier to write internationalized programs. Some of them are:

- Locale-sensitive or Unicode-aware functions in the [ECMAScript Language Specification](https://tc39.github.io/ecma262/):
  - [`String.prototype.normalize()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  - [`String.prototype.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  - [`String.prototype.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- All functionality described in the [ECMAScript Internationalization API Specification](https://tc39.github.io/ecma402/) (aka ECMA-402):
  - [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) object
  - Locale-sensitive methods like [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) and [`Date.prototype.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- The [WHATWG URL parser](url.md#url_the_whatwg_url_api)’s [internationalized domain names](https://en.wikipedia.org/wiki/Internationalized_domain_name) (IDNs) support
- [`require('buffer').transcode()`](buffer.md#buffer_buffer_transcode_source_fromenc_toenc)
- More accurate [REPL](repl.md#repl_repl) line editing
- [`require('util').TextDecoder`](util.md#util_class_util_textdecoder)
- [`RegExp` Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)

Node.js and the underlying V8 engine use [International Components for Unicode (ICU)](http://site.icu-project.org/) to implement these features in native C/C++ code. The full ICU data set is provided by Node.js by default. However, due to the size of the ICU data file, several options are provided for customizing the ICU data set either when building or running Node.js.

## Options for building Node.js

To control how ICU is used in Node.js, four `configure` options are available during compilation. Additional details on how to compile Node.js are documented in [BUILDING.md](https://github.com/nodejs/node/blob/HEAD/BUILDING.md).

- `--with-intl=none`/`--without-intl`
- `--with-intl=system-icu`
- `--with-intl=small-icu`
- `--with-intl=full-icu` (default)

An overview of available Node.js and JavaScript features for each `configure` option:

<table style="width:97%;"><colgroup><col style="width: 28%" /><col style="width: 24%" /><col style="width: 21%" /><col style="width: 16%" /><col style="width: 8%" /></colgroup><thead><tr class="header"><th>Feature</th><th><code>none</code></th><th><code>system-icu</code></th><th><code>small-icu</code></th><th><code>full-icu</code></th></tr></thead><tbody><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"><code>String.prototype.normalize()</code></a></td><td>none (function is no-op)</td><td>full</td><td>full</td><td>full</td></tr><tr class="even"><td><code>String.prototype.to*Case()</code></td><td>full</td><td>full</td><td>full</td><td>full</td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"><code>Intl</code></a></td><td>none (object does not exist)</td><td>partial/full (depends on OS)</td><td>partial (English-only)</td><td>full</td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>String.prototype.localeCompare()</code></a></td><td>partial (not locale-aware)</td><td>full</td><td>full</td><td>full</td></tr><tr class="odd"><td><code>String.prototype.toLocale*Case()</code></td><td>partial (not locale-aware)</td><td>full</td><td>full</td><td>full</td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"><code>Number.prototype.toLocaleString()</code></a></td><td>partial (not locale-aware)</td><td>partial/full (depends on OS)</td><td>partial (English-only)</td><td>full</td></tr><tr class="odd"><td><code>Date.prototype.toLocale*String()</code></td><td>partial (not locale-aware)</td><td>partial/full (depends on OS)</td><td>partial (English-only)</td><td>full</td></tr><tr class="even"><td><a href="url.md#url_legacy_url_api">Legacy URL Parser</a></td><td>partial (no IDN support)</td><td>full</td><td>full</td><td>full</td></tr><tr class="odd"><td><a href="url.md#url_the_whatwg_url_api">WHATWG URL Parser</a></td><td>partial (no IDN support)</td><td>full</td><td>full</td><td>full</td></tr><tr class="even"><td><a href="buffer.md#buffer_buffer_transcode_source_fromenc_toenc"><code>require('buffer').transcode()</code></a></td><td>none (function does not exist)</td><td>full</td><td>full</td><td>full</td></tr><tr class="odd"><td><a href="repl.md#repl_repl">REPL</a></td><td>partial (inaccurate line editing)</td><td>full</td><td>full</td><td>full</td></tr><tr class="even"><td><a href="util.md#util_class_util_textdecoder"><code>require('util').TextDecoder</code></a></td><td>partial (basic encodings support)</td><td>partial/full (depends on OS)</td><td>partial (Unicode-only)</td><td>full</td></tr><tr class="odd"><td><a href="https://github.com/tc39/proposal-regexp-unicode-property-escapes"><code>RegExp</code> Unicode Property Escapes</a></td><td>none (invalid <code>RegExp</code> error)</td><td>full</td><td>full</td><td>full</td></tr></tbody></table>

The “(not locale-aware)” designation denotes that the function carries out its operation just like the non-`Locale` version of the function, if one exists. For example, under `none` mode, `Date.prototype.toLocaleString()`’s operation is identical to that of `Date.prototype.toString()`.

### Disable all internationalization features (`none`)

If this option is chosen, ICU is disabled and most internationalization features mentioned above will be **unavailable** in the resulting `node` binary.

### Build with a pre-installed ICU (`system-icu`)

Node.js can link against an ICU build already installed on the system. In fact, most Linux distributions already come with ICU installed, and this option would make it possible to reuse the same set of data used by other components in the OS.

Functionalities that only require the ICU library itself, such as [`String.prototype.normalize()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) and the [WHATWG URL parser](url.md#url_the_whatwg_url_api), are fully supported under `system-icu`. Features that require ICU locale data in addition, such as [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) _may_ be fully or partially supported, depending on the completeness of the ICU data installed on the system.

### Embed a limited set of ICU data (`small-icu`)

This option makes the resulting binary link against the ICU library statically, and includes a subset of ICU data (typically only the English locale) within the `node` executable.

Functionalities that only require the ICU library itself, such as [`String.prototype.normalize()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) and the [WHATWG URL parser](url.md#url_the_whatwg_url_api), are fully supported under `small-icu`. Features that require ICU locale data in addition, such as [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat), generally only work with the English locale:

    const january = new Date(9e8);
    const english = new Intl.DateTimeFormat('en', { month: 'long' });
    const spanish = new Intl.DateTimeFormat('es', { month: 'long' });

    console.log(english.format(january));
    // Prints "January"
    console.log(spanish.format(january));
    // Prints "M01" on small-icu
    // Should print "enero"

This mode provides a balance between features and binary size.

#### Providing ICU data at runtime

If the `small-icu` option is used, one can still provide additional locale data at runtime so that the JS methods would work for all ICU locales. Assuming the data file is stored at `/some/directory`, it can be made available to ICU through either:

- The [`NODE_ICU_DATA`](cli.md#cli_node_icu_data_file) environment variable:

      env NODE_ICU_DATA=/some/directory node

- The [`--icu-data-dir`](cli.md#cli_icu_data_dir_file) CLI parameter:

      node --icu-data-dir=/some/directory

(If both are specified, the `--icu-data-dir` CLI parameter takes precedence.)

ICU is able to automatically find and load a variety of data formats, but the data must be appropriate for the ICU version, and the file correctly named. The most common name for the data file is `icudt6X[bl].dat`, where `6X` denotes the intended ICU version, and `b` or `l` indicates the system’s endianness. Check [“ICU Data”](http://userguide.icu-project.org/icudata) article in the ICU User Guide for other supported formats and more details on ICU data in general.

The [full-icu](https://www.npmjs.com/package/full-icu) npm module can greatly simplify ICU data installation by detecting the ICU version of the running `node` executable and downloading the appropriate data file. After installing the module through `npm i full-icu`, the data file will be available at `./node_modules/full-icu`. This path can be then passed either to `NODE_ICU_DATA` or `--icu-data-dir` as shown above to enable full `Intl` support.

### Embed the entire ICU (`full-icu`)

This option makes the resulting binary link against ICU statically and include a full set of ICU data. A binary created this way has no further external dependencies and supports all locales, but might be rather large. This is the default behavior if no `--with-intl` flag is passed. The official binaries are also built in this mode.

## Detecting internationalization support

To verify that ICU is enabled at all (`system-icu`, `small-icu`, or `full-icu`), simply checking the existence of `Intl` should suffice:

    const hasICU = typeof Intl === 'object';

Alternatively, checking for `process.versions.icu`, a property defined only when ICU is enabled, works too:

    const hasICU = typeof process.versions.icu === 'string';

To check for support for a non-English locale (i.e. `full-icu` or `system-icu`), [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) can be a good distinguishing factor:

    const hasFullICU = (() => {
      try {
        const january = new Date(9e8);
        const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
        return spanish.format(january) === 'enero';
      } catch (err) {
        return false;
      }
    })();

For more verbose tests for `Intl` support, the following resources may be found to be helpful:

- [btest402](https://github.com/srl295/btest402): Generally used to check whether Node.js with `Intl` support is built correctly.
- [Test262](https://github.com/tc39/test262/tree/HEAD/test/intl402): ECMAScript’s official conformance test suite includes a section dedicated to ECMA-402.
