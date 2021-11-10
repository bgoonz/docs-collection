--- title: Multiple-column layout slug: Learn/CSS/CSS_layout/Multiple-column_Layout tags: - Beginner - CSS - Guide - Layout - Learn - Learning - Multi-col - Multiple columns ---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS\_layout/Positioning", "Learn/CSS/CSS\_layout/Responsive\_Design", "Learn/CSS/CSS\_layout")}}

The multiple-column layout specification gives you a method of laying content out in columns, as you might see in a newspaper. This article explains how to use this feature.

<table><tbody><tr class="odd"><td>Prerequisites:</td><td>HTML basics (study <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), and an idea of How CSS works (study <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a>.)</td></tr><tr class="even"><td>Objective:</td><td>To learn how to create multiple-column layout on webpages, such as you might find in a newspaper.</td></tr></tbody></table>

## A basic example

We will now explore how to use multiple-column layout, often referred to as _multicol_. You can follow along by [downloading the multicol starting point file](https://github.com/mdn/learning-area/blob/master/css/css-layout/multicol/0-starting-point.html) and adding the CSS into the appropriate places. At the bottom of the section you can see a live example of what the final code should look like.

Our starting point contains some very simple HTML; a wrapper with a class of `container` inside which is a heading and some paragraphs.

The {{htmlelement("div")}} with a class of container will become our multicol container. We switch on multicol by using one of two properties {{cssxref("column-count")}} or {{cssxref("column-width")}}. The `column-count` property will create as many columns as the value you give it, so if you add the following CSS to your stylesheet and reload the page, you will get three columns:

    .container {
      column-count: 3;
    }

The columns that you create have flexible widths — the browser works out how much space to assign each column.

###### column-count example

    body {
      width: 90%;
      max-width: 900px;
      margin: 2em auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif;
    }


    <div class="container">
      <h1>Simple multicol example</h1>

      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
      Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
      ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
      quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
      elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
      cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.</p>
    </div>

    .container {
      column-count: 3;
    }

{{ EmbedLiveSample('Multicol\_1', '100%', 400) }}

Change your CSS to use `column-width` as follows:

    .container {
      column-width: 200px;
    }

The browser will now give you as many columns as it can of the size that you specify; any remaining space is then shared between the existing columns. This means that you will not get exactly the width that you specify, unless your container is exactly divisible by that width.

###### column-width example

    body {
      width: 90%;
      max-width: 900px;
      margin: 2em auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif;
    }

    <div class="container">
      <h1>Simple multicol example</h1>

      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
      Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
      ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
      quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
      elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
      cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.</p>
    </div>

    .container {
      column-width: 200px;
    }

{{ EmbedLiveSample('Multicol\_2', '100%', 400) }}

## Styling the columns

The columns created by multicol cannot be styled individually. There is no way to make one column bigger than other columns, or to change the background or text color of a single column. You have two opportunities to change the way that columns display:

- Changing the size of the gap between columns using the {{cssxref("column-gap")}}.
- Adding a rule between columns with {{cssxref("column-rule")}}.

Using your example above, change the size of the gap by adding a `column-gap` property:

    .container {
      column-width: 200px;
      column-gap: 20px;
    }

You can play around with different values — the property accepts any length unit. Now add a rule between the columns, with `column-rule`. In a similar way to the {{cssxref("border")}} property that you encountered in previous lessons, `column-rule` is a shorthand for {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}}, and {{cssxref("column-rule-width")}}, and accepts the same values as `border`.

    .container {
      column-count: 3;
      column-gap: 20px;
      column-rule: 4px dotted rgb(79, 185, 227);
    }

Try adding rules of different styles and colors.

###### Styling the columns

    body {
      width: 90%;
      max-width: 900px;
      margin: 2em auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif;
    }
    .container {
     column-count: 3;
     column-gap: 20px;
     column-rule: 4px dotted rgb(79, 185, 227);
    }

    <div class="container">
      <h1>Simple multicol example</h1>

      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
      Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
      ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
      quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
      elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
      cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.</p>
    </div>

{{ EmbedLiveSample('Multicol\_3', '100%', 400) }}

Something to take note of is that the rule does not take up any width of its own. It lies across the gap you created with `column-gap`. To make more space either side of the rule you will need to increase the `column-gap` size.

## Spanning columns

You can cause an element to span across all of the columns. In this case the content breaks when the spanning element is introduced and continues below creating a new set of column boxes. To cause an element to span all of the columns use the {{cssxref("column-span")}} property set to `all`.

Note that it isn't possible to cause an element to span some columns. The property can only have the value of `none` (which is the default) or `all`.

###### Spanning the columns

    body {
      width: 90%;
      max-width: 900px;
      margin: 2em auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif;
    }
    .container {
     column-count: 3;
     column-gap: 20px;
     column-rule: 4px dotted rgb(79, 185, 227);
    }
    h2 {
     column-span: all;
     background-color: rgb(79, 185, 227);
     color: white;
     padding: .5em;
    }

    <div class="container">
      <h1>Simple multicol example</h1>

      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.

      <h2>Spanning subhead</h2>
      Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
      ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
      quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

      <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
      elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
      cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.</p>
    </div>

{{ EmbedLiveSample('Multicol\_Span', '100%', 400) }}

## Columns and fragmentation

The content of a multi-column layout is fragmented. It essentially behaves the same way as content behaves in paged media — such as when you print a webpage. When you turn your content into a multicol container it is fragmented into columns, and the content breaks to allow this to happen.

Sometimes, this breaking will happen in places that lead to a poor reading experience. In the live example below, I have used multicol to lay out a series of boxes, each of which have a heading and some text inside. The heading becomes separated from the text if the columns fragment between the two.

###### Cards example

    body {
      width: 90%;
      max-width: 900px;
      margin: 2em auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif;
    }

    <div class="container">
        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>
        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

    </div>

    .container {
      column-width: 250px;
      column-gap: 20px;
    }

    .card {
      background-color: rgb(207, 232, 220);
      border: 2px solid rgb(79, 185, 227);
      padding: 10px;
      margin: 0 0 1em 0;
    }

{{ EmbedLiveSample('Multicol\_4', '100%', 600) }}

To control this behavior we can use properties from the [CSS Fragmentation](/en-US/docs/Web/CSS/CSS_Fragmentation) specification. This specification gives us properties to control breaking of content in multicol and in paged media. For example, add the property {{cssxref("break-inside")}} with a value of `avoid` to the rules for `.card`. This is the container of the heading and text, and therefore we do not want to fragment this box.

At the present time it is also worth adding the older property `page-break-inside: avoid` for best browser support.

    .card {
      break-inside: avoid;
      page-break-inside: avoid;
      background-color: rgb(207,232,220);
      border: 2px solid rgb(79,185,227);
      padding: 10px;
      margin: 0 0 1em 0;
    }

Reload the page and your boxes should stay in one piece.

###### Multicol Fragmentation

    body {
      width: 90%;
      max-width: 900px;
      margin: 2em auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif;
    }

    <div class="container">
        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>
        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

        <div class="card">
          <h2>I am the heading</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                    vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                    tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                    vel, viverra egestas ligula.</p>
        </div>

    </div>

    .container {
      column-width: 250px;
      column-gap: 20px;
    }

    .card {
      break-inside: avoid;
      page-break-inside: avoid;
      background-color: rgb(207, 232, 220);
      border: 2px solid rgb(79, 185, 227);
      padding: 10px;
      margin: 0 0 1em 0;
    }

{{ EmbedLiveSample('Multicol\_5', '100%', 600) }}

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multicol_skills).

## Summary

You now know how to use the basic features of multiple-column layout, another tool at your disposal when choosing a layout method for the designs you are building.

## See also

- [CSS Fragmentation](/en-US/docs/Web/CSS/CSS_Fragmentation)
- [Using multi-column layouts](/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)

{{PreviousMenuNext("Learn/CSS/CSS\_layout/Positioning", "Learn/CSS/CSS\_layout/Responsive\_Design", "Learn/CSS/CSS\_layout")}}

## In this module

- [Introduction to CSS layout](/en-US/docs/Learn/CSS/CSS_layout/Introduction)
- [Normal flow](/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/en-US/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/en-US/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [Multiple-column layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Beginner's guide to media queries](/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- [Legacy layout methods](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Supporting older browsers](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Fundamental layout comprehension assessment](/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
