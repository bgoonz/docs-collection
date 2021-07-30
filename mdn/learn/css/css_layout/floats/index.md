--- title: Floats slug: Learn/CSS/CSS\_layout/Floats tags: - Article - Beginner - CSS - Clearing - CodingScripting - Floats - Guide - Layout - columns - multi-column ---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS\_layout/Grids", "Learn/CSS/CSS\_layout/Positioning", "Learn/CSS/CSS\_layout")}}

Originally for floating images inside blocks of text, the {{cssxref("float")}} property became one of the most commonly used tools for creating multiple column layouts on webpages. With the advent of flexbox and grid it has now returned to its original purpose, as this article explains.

<table><tbody><tr class="odd"><td>Prerequisites:</td><td>HTML basics (study <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), and an idea of How CSS works (study <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a>.)</td></tr><tr class="even"><td>Objective:</td><td>To learn how to create floated features on webpages, and to use the clear property and other methods of clearing floats.</td></tr></tbody></table>

The background of floats
------------------------

The {{cssxref("float")}} property was introduced to allow web developers to implement simple layouts involving an image floating inside a column of text, with the text wrapping around the left or right of it. The kind of thing you might get in a newspaper layout.

But web developers quickly realized that you can float anything, not just images, so the use of float broadened, for example to fun layout effects such as [drop-caps](https://css-tricks.com/snippets/css/drop-caps/).

Floats have commonly been used to create entire web site layouts featuring multiple columns of information floated so they sit alongside one another (the default behavior would be for the columns to sit below one another, in the same order as they appear in the source). There are newer, better layout techniques available and so use of floats in this way should be regarded as a [legacy technique](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods).

In this article we'll just concentrate on the proper uses of floats.

A simple float example
----------------------

Let's explore how to use floats. We'll start with a really simple example involving floating a block of text around an element. You can follow along by creating a new `index.html` file on your computer, filling it with a [simple HTML template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html), and inserting the below code into it at the appropriate places. At the bottom of the section, you can see a live example of what the final code should look like.

First, we'll start off with some simple HTML — add the following to your HTML body, removing anything that was inside there before:

    <h1>Simple float example</h1>

    <div class="box">Float</div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. </p>

    <p>Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

Now apply the following CSS to your HTML (using a {{htmlelement("style")}} element or a {{htmlelement("link")}} to a separate `.css` file — your choice):

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .box {
      width: 150px;
      height: 100px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

If you save and refresh now, you'll see something much like what you'd expect — the box is sitting above the text, in normal flow. To float the text around it add the {{cssxref("float")}} and {{cssxref("margin-right")}} properties to the `.box` rule:

    .box {
      float: left;
      margin-right: 15px;
      width: 150px;
      height: 100px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

Now if you save and refresh you'll see something like the following:

###### Float Example 1

    <h1>Simple float example</h1>

    <div class="box">Float</div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>

    <p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .box {
      float: left;
      margin-right: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

{{ EmbedLiveSample('Float\_1', '100%', 500) }}

So let's think about how the float works — the element with the float set on it (the {{htmlelement("div")}} element in this case) is taken out of the normal layout flow of the document and stuck to the left-hand side of its parent container ({{htmlelement("body")}}, in this case). Any content that comes below the floated element in the normal layout flow will now wrap around it, filling up the space to the right-hand side of it as far up as the top of the floated element. There, it will stop.

Floating the content to the right has exactly the same effect, but in reverse — the floated element will stick to the right, and the content will wrap around it to the left. Try changing the float value to `right` and replace {{cssxref("margin-right")}} with {{cssxref("margin-left")}} in the last ruleset to see what the result is.

While we can add a margin to the float to push the text away, we can't add a margin to the text to move it away from the float. This is because a floated element is taken out of normal flow, and the boxes of the following items actually run behind the float. You can demonstrate this by making some changes to your example.

Add a class of `special` to the first paragraph of text, the one immediately following the floated box, then in your CSS add the following rules. These will give our following paragraph a background color.

    .special {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
    }

To make the effect easier to see, change the `margin-right` on your float to `margin`, so you get space all around the float. You will be able to see the background on the paragraph running right underneath the floated box, as in the example below.

###### Float Example 2

    <h1>Simple float example</h1>

    <div class="box">Float</div>

    <p class="special">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>

    <p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>    

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .box {
      float: left;
      margin: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

    .special {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
    }

{{ EmbedLiveSample('Float\_2', '100%', 500) }}

The [line boxes](/en-US/docs/Web/CSS/Visual_formatting_model#line_boxes) of our following element have been shortened so the text runs around the float, but due to the float being removed from normal flow the box around the paragraph still remains full width.

Clearing floats
---------------

We have seen that the float is removed from normal flow and that other elements will display beside it, therefore if we want to stop the following element from moving up we need to clear it; this is achieved with the {{cssxref("clear")}} property.

In your HTML from the previous example, add a class of `cleared` to the second paragraph below the floated item. Then add the following to your CSS:

    .cleared {
      clear: left;
    }

###### Float Example 3

    <h1>Simple float example</h1>

    <div class="box">Float</div>

    <p class="special">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>

    <p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .box {
      float: left;
      margin: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

    .special {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
    }

    .cleared {
      clear: left;
    }

{{ EmbedLiveSample('Float\_3', '100%', 600) }}

You should see that the following paragraph clears the floated element and no longer comes up alongside it. The `clear` property accepts the following values:

-   `left`: Clear items floated to the left.
-   `right`: Clear items floated to the right.
-   `both`: Clear any floated items, left or right.

Clearing boxes wrapped around a float
-------------------------------------

You now know how to clear something following a floated element, but let's see what happens if you have a tall float and a short paragraph, with a box wrapped around both elements. Change your document so that the first paragraph and our floated box are wrapped with a {{htmlelement("div")}} with a class of `wrapper`.

    <div class="wrapper">
      <div class="box">Float</div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.</p>
    </div>

In your CSS, add the following rule for the `.wrapper` class and then reload the page:

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
    }

In addition, remove the original `.cleared` class:

    .cleared {
        clear: left;
    }

You will see that, just like in the example where we put a background color on the paragraph, the background color runs behind the float.

###### Float Example 4

    <h1>Simple float example</h1>
    <div class="wrapper">
      <div class="box">Float</div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
    </div>

    <p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>    

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
    }

    .box {
      float: left;
      margin: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

{{ EmbedLiveSample('Float\_4', '100%', 600) }}

Once again, this is because the float has been taken out of normal flow. Clearing the following element doesn't help with this box clearing problem, where you want the bottom of the box to wrap the floated item and wrapping content even if the content is shorter. There are three potential ways to deal with this, two of which work in all browsers — yet are slightly hacky — and a third new way that deals with this situation properly.

### The clearfix hack

The way that this situation has traditionally been dealt with is to use something known as a "clearfix hack". This involves inserting some generated content after the box which contains the float and wrapping content, and setting that to clear both.

Add the following CSS to our example:

    .wrapper::after {
      content: "";
      clear: both;
      display: block;
    }

Now reload the page and the box should clear. This is essentially the same as if you had added an HTML element such as a `<div>` below the items and set it to `clear: both`.

###### Float Example 5

    <h1>Simple float example</h1>
    <div class="wrapper">
      <div class="box">Float</div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
    </div>
    <p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>      

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
    }

    .box {
      float: left;
      margin: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

    .wrapper::after {
      content: "";
      clear: both;
      display: block;
    }

{{ EmbedLiveSample('Float\_5', '100%', 600) }}

### Using overflow

An alternative method is to set the {{cssxref("overflow")}} property of the wrapper to a value other than `visible`.

Remove the clearfix CSS you added in the last section, and instead add `overflow: auto` to the rules for wrapper. Once again, the box should clear.

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
      overflow: auto;
    }

###### Float Example 6

    <h1>Simple float example</h1>
    <div class="wrapper">
      <div class="box">Float</div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
    </div>
    <p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>    

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
      overflow: auto;
    }

    .box {
      float: left;
      margin: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

{{ EmbedLiveSample('Float\_6', '100%', 600) }}

This example works by creating what is known as a **block formatting context** (BFC). This is like a mini layout inside your page, inside which everything is contained, therefore our floated element is contained inside the BFC and the background runs behind both items. This will usually work, however, in certain cases you might find unwanted scrollbars or clipped shadows due to unintended consequences of using overflow.

### display: flow-root

The modern way of solving this problem is to use the value `flow-root` of the `display` property. This exists only to create a BFC without using hacks — there will be no unintended consequences when you use it. Remove `overflow: auto` from your `.wrapper` rule and add `display: flow-root`. Assuming you have a [supporting browser](/en-US/docs/Web/CSS/display#browser_compatibility), the box will clear.

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
      display: flow-root;
    }

###### Float Example 7

    <h1>Simple float example</h1>
    <div class="wrapper">
      <div class="box">Float</div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
    </div>
    <p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>    

    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      font: .9em/1.2 Arial, Helvetica, sans-serif
    }

    .wrapper {
      background-color: rgb(79,185,227);
      padding: 10px;
      color: #fff;
      display: flow-root;
    }

    .box {
      float: left;
      margin: 15px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: rgb(207,232,220);
      padding: 1em;
    }

{{ EmbedLiveSample('Float\_7', '100%', 600) }}

Test your skills!
-----------------

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Floats](/en-US/docs/Learn/CSS/CSS_layout/Floats_skills).

Summary
-------

You now know all there is to know about floats in modern web development. See the article on [legacy layout methods](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) for information on how they used to be used, which may be useful if you find yourself working on older projects.

{{PreviousMenuNext("Learn/CSS/CSS\_layout/Grids", "Learn/CSS/CSS\_layout/Positioning", "Learn/CSS/CSS\_layout")}}

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
