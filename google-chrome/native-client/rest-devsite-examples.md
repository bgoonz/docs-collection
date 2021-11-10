---json {"title":"Examples of ReST markup for chromesite (Document title)"} ---

## Document structure

A document starts with a Sphinx target which serves as the document name throughout the tree. It can serve as a link target in other documents that want to link to this one (see the Links section below).

## Basic markup

In general, follow the rules from <a href="http://sphinx-doc.org/rest.html" class="reference external">http://sphinx-doc.org/rest.html</a>

Some **bold text** and _italic text_ and `fixed-font text`. Non marked-up text can follow these immediately by using a backslash: **pexe**s.

For pleasant collaborative editing, please use the accepted coding guidelines: wrap at 80 columns, no tabs, etc.

Quotes (`<blockquote>`) are created by indenting the paragraph:

Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. – Linus Torvalds

Here’s an en-dash – and an m-dash — too.

### Unicode samples

Copyright sign ©, and uacute Ú.

## Images

Please use absolute paths (starting with `/`) for images:

![/native-client/images/NaclBlock.png](/docs/native-client/images/NaclBlock.png)

## Links

### To other documents within the tree

Internal links to other documents are created <a href="/docs/native-client/overview" class="reference internal"><em>like this</em></a>. The document name within the angle brackets is relative to the root dir of the doc tree and does not have an extension.

Here’s a link to a document in a subdirectory: <a href="/docs/native-client/devguide/tutorial/tutorial-part1" class="reference internal"><em>the tutorial</em></a>. And a link to a subdirectory index page <a href="/docs/native-client/devguide/index" class="reference internal"><em>devguide index</em></a>.

### To sections inside documents

To internal locations within documents, labels are used. For example, this link goes to the label explicitly placed in this document - <a href="#link-for-section-heading" class="reference internal"><em>Section heading</em></a>. This works across documents as well. Label names must be unique in the tree, and can refer to anything (like images).

It’s also possible to give such cross-references custom names: <a href="#link-for-section-heading" class="reference internal"><em>Same Section Heading</em></a>.

### To external locations

Plain links can be placed like this: <a href="http://google.com" class="reference external">http://google.com</a> and also <a href="http://google.com" class="reference external">like this</a>.

## Definition lists

Can be used to define a group of related terms. Internal formatting is supported within the definition. No special formatting needs to be done for the definition name/title - it’s handled by the chromesite documentation server.

Apple  
The apple is the pomaceous fruit of the apple tree, species Malus domestica in the rose family (**Rosaceae**).

Fig  
The common fig (**Ficus carica**) is a species of flowering plant in the genus Ficus, from the family Moraceae, known as the common fig (or just the fig), anjeer (Iran, Pakistan), and dumur (Bengali).

Pear  
The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae.

## Notes and Admonitions

The documentation server supports special “notes” that are indented and have a background color. We’ll generate them with the `Note` directive, providing the class explicitly. The class is one of `note`, `caution`, `warning`, `special`.

This is a note.

Foo bar.

Also:

Caution – you have been warned.

## Source code

Here’s source code that will be pretty-printed. It’s just a plain `<pre>` that presents pre-formatted code with coloring:

    #include <iostream>

    int main() {
      char c = 'x';
      std::cout << "Hello world\n";
      return 0;
    }

For some code (like shell samples), we want to disable pretty-printing:

    $ ls | wc
    $ echo "hello world"

By default `:prettyprint:` is `1`.

For short inline code, use fixed-formatting like `int x = 2;`. Note that this won’t get syntax-highlighted and may be line-wrapped, so keep it very short.

## <span id="link-for-section-heading"></span>Section heading

Here’s a demonstration of heading nesting levels. This is a top-level section in the document. The document title is the first header and it’s delimited by hash signes (`#`) from above and below.

### Subsection heading

Subsection.

#### Sub-subsection heading

That’s pretty deep...

##### Sub-sub-subsection heading

It’s probably not the best idea to go this far (renders to `<h5>`).

## Lists

Auto-numbered ordered lists:

1.  One
2.  Two
3.  Three

Manually numbered ordered lists:

1.  One
2.  Two
3.  Three

Unordered (bullet) lists:

- One
- Two
- Three

Lists can be nested and mixed too:

- Toplevel

  1.  One
  2.  Two

- Back to top level

## Tables

The full scoop on tables is <a href="http://sphinx-doc.org/rest.html#tables" class="reference external">http://sphinx-doc.org/rest.html#tables</a> and the Docutils pages linked from it.

“Simple tables” require less markup but are limited:

<table><thead><tr class="header"><th>A</th><th>B</th><th>A and B</th></tr></thead><tbody><tr class="odd"><td>False</td><td>False</td><td>False</td></tr><tr class="even"><td>True</td><td>False</td><td>False</td></tr><tr class="odd"><td>False</td><td>True</td><td>False</td></tr><tr class="even"><td>True</td><td>True</td><td>True</td></tr></tbody></table>

“Grid tables” are versatile but require more markup:

<table><thead><tr class="header"><th>Header row, column 1 (header rows optional)</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></thead><tbody><tr class="odd"><td>body row 1, column 1</td><td>column 2</td><td>column 3</td><td>column 4</td></tr><tr class="even"><td>body row 2</td><td>...</td><td>...</td><td> </td></tr></tbody></table>
