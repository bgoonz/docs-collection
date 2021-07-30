--- title: Normal Flow slug: Learn/CSS/CSS\_layout/Normal\_Flow tags: - Beginner - CSS - Layout - Learn - float - grid - normal flow ---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS\_layout/Introduction", "Learn/CSS/CSS\_layout/Flexbox", "Learn/CSS/CSS\_layout")}}

This article explains normal flow, or the way that webpage elements lay themselves out if you have not changed their layout.

<table><tbody><tr class="odd"><td>Prerequisites:</td><td>The basics of HTML (study <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), and an idea of How CSS works (study <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a>.)</td></tr><tr class="even"><td>Objective:</td><td>To explain how browsers layout web pages by default, before we begin to make changes.</td></tr></tbody></table>

As detailed in the last lesson introducing layout, elements on a webpage lay out in the normal flow, if you have not applied any CSS to change the way they behave. And, as we began to discover, you can change how elements behave either by adjusting their position in that normal flow, or removing them from it altogether. Starting with a solid, well-structured document that is readable in normal flow is the best way to begin any webpage. It ensures that your content is readable, even if the user is using a very limited browser or a device such as a screen reader that reads out the content of the page. In addition, as normal flow is designed to make a readable document, by starting in this way you are working with the document rather than fighting against it as you make changes to the layout.

Before digging deeper into different layout methods, it is worth revisiting some of the things you will have studied in previous modules with regard to normal document flow.

How are elements laid out by default?
-------------------------------------

First of all, individual element boxes are laid out by taking the elements' content, then adding any padding, border and margin around them — it's that box model thing again, which we've looked at earlier.

By default, a [block level element](/en-US/docs/Web/HTML/Block-level_elements)'s content fills the available inline space of the parent element containing it, and grows in the block dimension to accommodate its content. [Inline elements](/en-US/docs/Web/HTML/Inline_elements) are the size of their content. You can't set width or height on inline elements — they just sit inside the content of block level elements. If you want to control the size of an inline element in this manner, you need to set it to behave like a block level element with `display: block;` (or even,`display: inline-block;` which mixes characteristics from both.)

That explains individual elements, but what about how elements interact with one another? The normal layout flow (mentioned in the layout introduction article) is the system by which elements are placed inside the browser's viewport. By default, block-level elements are laid out in the *block flow direction*, based on the parent's [writing mode](/en-US/docs/Web/CSS/writing-mode) (*initial*: horizontal-tb) — each one will appear on a new line below the last one, and they will be separated by any margin that is set on them. In English therefore, or any other horizontal, top to bottom writing mode, block-level elements are laid out vertically.

Inline elements behave differently — they don't appear on new lines; instead, they all sit on the same line along with any adjacent (or wrapped) text content, as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing text or elements will move down to a new line.

If two adjacent elements both have the margin set on them and the two margins touch, the larger of the two remains, and the smaller one disappears — this is called margin collapsing, and we have met this before too.

Let's look at a simple example that explains all of this:

    <h1>Basic document flow</h1>

    <p>I am a basic block level element. My adjacent block level elements sit on new lines below me.</p>

    <p>By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.</p>

    <p>We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.</p>

    <p>inline elements <span>like this one</span> and <span>this one</span> sit on the same line along with adjacent text nodes, if there is space on the same line. Overflowing inline elements will <span>wrap onto a new line if possible (like this one containing text)</span>, or just go on to a new line if not, much like this image will do: <img src="long.jpg"></p>

    body {
      width: 500px;
      margin: 0 auto;
    }

    p {
      background: rgba(255,84,104,0.3);
      border: 2px solid rgb(255,84,104);
      padding: 10px;
      margin: 10px;
    }

    span {
      background: white;
      border: 1px solid black;
    }

{{ EmbedLiveSample('Normal\_Flow', '100%', 500) }}

Summary
-------

Now that you understand normal flow, and how the browser lays things out by default, move on to understand how to change this default display to create the layout needed by your design.

{{PreviousMenuNext("Learn/CSS/CSS\_layout/Introduction", "Learn/CSS/CSS\_layout/Flexbox", "Learn/CSS/CSS\_layout")}}

In this module
--------------

-   [Introduction to CSS layout](/en-US/docs/Learn/CSS/CSS_layout/Introduction)
-   [Normal flow](/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
-   [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
-   [Grid](/en-US/docs/Learn/CSS/CSS_layout/Grids)
-   [Floats](/en-US/docs/Learn/CSS/CSS_layout/Floats)
-   [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
-   [Multiple-column layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
-   [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
-   [Beginner's guide to media queries](/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
-   [Legacy layout methods](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
-   [Supporting older browsers](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
-   [Fundamental layout comprehension assessment](/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
