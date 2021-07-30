--- title: Grid slug: Glossary/Grid tags: - CSS - CSS Grid - Glossary ---

A *CSS grid* is defined using the `grid` value of the {{cssxref("display")}} property; you can define columns and rows on your grid using the {{cssxref("grid-template-rows")}} and {{cssxref("grid-template-columns")}} properties.

The grid that you define using these properties is described as an *explicit grid*.

If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column {{glossary("grid tracks", "tracks")}} to hold {{glossary("grid item", "grid items")}}, then extra tracks will be created in the implicit grid. The *implicit grid* is the grid created automatically due to content being added outside of the tracks defined.

In the example below I have created an *explicit grid* of three columns and two rows. The *third* row on the grid is an *implicit grid* row track, formed due to their being more than the six items which fill the explicit tracks.

    * {box-sizing: border-box;}

    .wrapper {
        border: 2px solid #f76707;
        border-radius: 5px;
        background-color: #fff4e6;
    }

    .wrapper > div {
        border: 2px solid #ffa94d;
        border-radius: 5px;
        background-color: #ffd8a8;
        padding: 1em;
        color: #d9480f;
    }

    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100px 100px;
    }

    <div class="wrapper">
       <div>One</div>
       <div>Two</div>
       <div>Three</div>
       <div>Four</div>
       <div>Five</div>
       <div>Six</div>
       <div>Seven</div>
       <div>Eight</div>
    </div>

{{ EmbedLiveSample('example', '500', '330') }}

1.  CSS Grid Layout Guide:  
    *[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)*
2.  Property reference
    1.  {{cssxref("grid-template-columns")}}
    2.  {{cssxref("grid-template-rows")}}
    3.  {{cssxref("grid")}}
    4.  {{cssxref("grid-template")}}
