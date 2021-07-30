--- title: What HTML features promote accessibility? slug: Learn/Common\_questions/HTML\_features\_for\_accessibility tags: - Accessibility - Beginner - HTML - Learn - NeedsContent ---

{{draft}}

The following content describes specific features of HTML that can be used to make a web page more accessible to people with different disabilities.

Tabbing
-------

Users who do not or cannot use pointing devices can Tab through links and, as such, links should be in a logical tabbing order. The `tabindex` attribute allows you to define this order. If the HTML is linear, as it should be, a logical tabbing order should automatically fall into place.

    <ul>
      <li><a href="here.html" tabindex="1">Here</a></li>
      <li><a href="there.html" tabindex="3">There</a></li>
      <li><a href="anywhere.html" tabindex="2">Anywhere</a></li>
    </ul>

In this example (which is used purely as a demonstration—do not do this), tabbing would jump from “Here” to “Anywhere” to “There”.

Link Titles
-----------

If you have a link that isn’t self-descriptive, or the link destination could benefit from being explained in more detail, you can add information to a link using the `title` attribute.

    <p>I'm really bad at writing link text. <a href="inept.html" title="Why I'm rubbish at writing link text: An explanation and an apology.">Click here</a> to find out more.</p>

Access Keys
-----------

*Access keys* provide easier navigation by assigning a *keyboard shortcut* to a link, which will usually gain focus when the user presses Alt or Ctrl + the access key. The exact key combination varies by platform.

    <a href="somepage.html" accesskey="s">Some page</a>

Skip Links
----------

To aid tabbing, you can supply links that allow users to jump over chunks of your web page. You might want to allow someone to jump over a plethora of navigation links, for example, so they can just read a page’s main content rather than cycle through all of the links.

    <header>
      <h1>The Heading</h1>
      <a href="#content">Skip to content</a>
    </header>

    <nav>
      <!-- navigation stuff -->
    </nav>

    <section id="content">
      <!--your content -->
    </section>
