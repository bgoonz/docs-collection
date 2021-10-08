2020-10-15

A few rules:

- Posts should **NOT** contain any h1’s in markdown. The `title` element in the YAML frontmatter will generate the page’s h1. Only use h2-h4s in markdown.
- Make sure all of your images have `alt` text unless they are purely decorative.
- Don’t forget to add your new doc to the `_data/docs/[project-name]/toc.yml` or else it won’t show up in the site navigation!
- Make sure authors appear in the `authorsData.json` file and that they have uploaded a headshot to our image CDN. See [How to add an author](https://developer.chrome.com/docs/handbook/how-to/add-an-author/).
- Make sure tags have been added to `tags.yml`. See [How to add a tag](https://developer.chrome.com/docs/handbook/how-to/add-a-tag/).
- Code blocks should use triple backticks and include a language name. Example:

  <p>Hello world!</p>
