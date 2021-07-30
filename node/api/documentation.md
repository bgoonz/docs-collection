# About this documentation

Welcome to the official API reference documentation for Node.js!

Node.js is a JavaScript runtime built on the [V8 JavaScript engine](https://v8.dev/).

## Contributing

Report errors in this documentation in [the issue tracker](https://github.com/nodejs/node/issues/new). See [the contributing guide](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) for directions on how to submit pull requests.

## Stability index

Throughout the documentation are indications of a section’s stability. Some APIs are so proven and so relied upon that they are unlikely to ever change at all. Others are brand new and experimental, or known to be hazardous.

The stability indices are as follows:

> Stability: 0 - Deprecated. The feature may emit warnings. Backward compatibility is not guaranteed.

> Stability: 1 - Experimental. The feature is not subject to [Semantic Versioning](https://semver.org/) rules. Non-backward compatible changes or removal may occur in any future release. Use of the feature is not recommended in production environments.

> Stability: 2 - Stable. Compatibility with the npm ecosystem is a high priority.

> Stability: 3 - Legacy. The feature is no longer recommended for use. While it likely will not be removed, and is still covered by semantic-versioning guarantees, use of the feature should be avoided.

Use caution when making use of Experimental features, particularly within modules. Users may not be aware that experimental features are being used. Bugs or behavior changes may surprise users when Experimental API modifications occur. To avoid surprises, use of an Experimental feature may need a command-line flag. Experimental features may also emit a [warning](process.md#process_event_warning).

## Stability overview

## JSON output

Every `.html` document has a corresponding `.json` document. This is for IDEs and other utilities that consume the documentation.

## System calls and man pages

Node.js functions which wrap a system call will document that. The docs link to the corresponding man pages which describe how the system call works.

Most Unix system calls have Windows analogues. Still, behavior differences may be unavoidable.
