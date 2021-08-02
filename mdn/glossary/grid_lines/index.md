--- title: Grid Lines slug: Glossary/Grid\_Lines tags: - CSS Grids ---

**Grid lines** are created when you define {{glossary("Grid tracks", "tracks")}} in the explicit grid using [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout). In the following example there is a grid with three column tracks and two row tracks. This gives us 4 column lines and 3 row lines.

    * {box-sizing: border-box;}

    .wrapper {
        border: 2px solid #f76707;
        border-radius: 5px;
        background-color: #fff4e6;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(3, 100px);
    }

    .wrapper > div {
        border: 2px solid #ffa94d;
        border-radius: 5px;
        background-color: #ffd8a8;
        padding: 1em;
        color: #d9480f;
    }

    <div class="wrapper">
       <div>One</div>
       <div>Two</div>
       <div>Three</div>
       <div>Four</div>
       <div>Five</div>
    </div>

    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100px 100px;
    }

{{ EmbedLiveSample('example\_1', '500', '250') }}

Lines can be addressed using their line number. In a left-to-right language such as English, column line 1 will be on the left of the grid, row line 1 on the top. Lines numbers respect the [writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes) of the document and so in a right-to-left language for example, column line 1 will be on the right of the grid. The image below shows the line numbers of the grid, assuming the language is left-to-right.

![Diagram showing the grid with lines numbered.](1_diagram_numbered_grid_lines.png)

Lines are also created in the *implicit grid* when implicit tracks are created to hold content positioned outside of the *explicit grid*, however these lines cannot be addressed by a number.

Placing items onto the grid by line number
------------------------------------------

Having created a grid, you can place items onto the grid by line number. In the following example the item is positioned from column line 1 to column line 3, and from row line 1 to row line 3.

    * {box-sizing: border-box;}

    .wrapper {
        border: 2px solid #f76707;
        border-radius: 5px;
        background-color: #fff4e6;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(3, 100px);
    }

    .wrapper > div {
        border: 2px solid #ffa94d;
        border-radius: 5px;
        background-color: #ffd8a8;
        padding: 1em;
        color: #d9480f;
    }

    <div class="wrapper">
       <div class="item">Item</div>
    </div>

    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100px 100px;
    }
    .item {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }

{{ EmbedLiveSample('example\_2', '500', '250') }}

Naming lines
------------

The lines created in the *explicit grid* can be named, by adding the name in square brackets before or after the track sizing information. When placing an item, you can then use these names instead of the line number, as demonstrated below.

    * {box-sizing: border-box;}

    .wrapper {
        border: 2px solid #f76707;
        border-radius: 5px;
        background-color: #fff4e6;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(3, 100px);
    }

    .wrapper > div {
        border: 2px solid #ffa94d;
        border-radius: 5px;
        background-color: #ffd8a8;
        padding: 1em;
        color: #d9480f;
    }

    <div class="wrapper">
       <div class="item">Item</div>
    </div>

    .wrapper {
      display: grid;
      grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
      grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
    }
    .item {
      grid-column-start: col1-start;
      grid-column-end: col3-start;
      grid-row-start: row1-start;
      grid-row-end: rows-end;
    }

{{ EmbedLiveSample('example\_3', '500', '250') }}

Learn more
----------

### Property reference

-   {{cssxref("grid-template-columns")}}
-   {{cssxref("grid-template-rows")}}
-   {{cssxref("grid-column-start")}}
-   {{cssxref("grid-column-end")}}
-   {{cssxref("grid-column")}}
-   {{cssxref("grid-row-start")}}
-   {{cssxref("grid-row-end")}}
-   {{cssxref("grid-row")}}

### Further reading

-   CSS Grid Layout Guide: *[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)*
-   CSS Grid Layout Guide: *[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)*
-   CSS Grid Layout Guide: *[Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)*
-   CSS Grid Layout Guide: *[CSS Grids, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)*
-   [Definition of Grid Lines in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-line-concept)