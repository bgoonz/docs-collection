2013-05-12

One or more mappings from MIME types to the Native Client module that handles each type. For example, the bold code in the following snippet registers a Native Client module as the content handler for the OpenOffice spreadsheet MIME type.

    {
      "name": "Native Client OpenOffice Spreadsheet Viewer",
      "version": "0.1",
      "description": "Open OpenOffice spreadsheets, right in your browser.",
      "nacl_modules": [{
        "path": "OpenOfficeViewer.nmf",
        "mime_type": "application/vnd.oasis.opendocument.spreadsheet"
      }]
    }

The value of “path” is the location of a Native Client manifest (a `.nmf` file) within the extension directory. For more information on Native Client and `.nmf` files, see the [Native Client Technical Overview](/docs/native-client/overview?csw=1).

Each MIME type can be associated with only one `.nmf` file, but a single `.nmf` file might handle multiple MIME types. The following example shows an extension with two `.nmf` files that handle three MIME types.

    {
      "name": "Spreadsheet Viewer",
      "version": "0.1",
      "description": "Open OpenOffice and Excel spreadsheets, right in your browser.",
      "nacl_modules": [{
        "path": "OpenOfficeViewer.nmf",
        "mime_type": "application/vnd.oasis.opendocument.spreadsheet"
      },
      {
        "path": "OpenOfficeViewer.nmf",
        "mime_type": "application/vnd.oasis.opendocument.spreadsheet-template"
      },
      {
        "path": "ExcelViewer.nmf",
        "mime_type": "application/excel"
      }]
    }

**Note:** You can use Native Client modules in extensions without specifying “nacl\_modules”. Use “nacl\_modules” only if you want the browser to use your Native Client module to display a particular type of content.
