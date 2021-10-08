2013-05-12

The `name` and `short_name` manifest properties are short, plain text strings that identify the extension. You can specify locale-specific strings for both fields; see [Internationalization](/docs/extensions/i18n) for details.

## Name {: \#name }

The `name` (maximum of 45 characters) is the primary identifier of the extension and is a required field. It is displayed in the following locations:

- Install dialog
- Extension management UI
- [Chrome Web Store](https://chrome.google.com/webstore)

## Short Name {: \#short_name }

The `short_name` (maximum of 12 characters recommended) is a short version of the extension’s name. It is an optional field and if not specified, the `name` will be used, though it will likely be truncated. The short name is typically used where there is insufficient space to display the full name, such as:

- App launcher
- New Tab page
