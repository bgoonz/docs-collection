--- title: Selector (CSS) slug: Glossary/CSS\_Selector tags: - CSS - CSS Selector - CodingScripting - Glossary - HTML - Selector ---

A **CSS selector** is the part of a CSS rule that describes what elements in a document the rule will match. The matching elements will have the rule's specified style applied to them.

Consider this CSS:

    p {
      color: green;
    }

    div.warning {
      width: 100%;
      border: 2px solid yellow;
      color: white;
      background-color: darkred;
      padding: 0.8em 0.8em 0.6em;
    }

    #customized {
      font: 16px Lucida Grande, Arial, Helvetica, sans-serif;
    }

The selectors here are `"p"` (which applies the color green to the text inside any {{HTMLElement("p")}} element), `"div.warning"` (which makes any {{HTMLElement("div")}} element with the {{Glossary("CSS class", "class")}} `"warning"` look like a warning box), and `"#customized"`, which sets the base font of the element with the ID `"customized"` to 16-pixel tall Lucida Grande or one of a few fallback fonts.

We can then apply this CSS to some HTML, such as:

    <p>This is happy text.</p>

    <div class="warning">
      Be careful! There are wizards present, and they are quick to anger!
    </div>

    <div id="customized">
      <p>This is happy text.</p>

      <div class="warning">
        Be careful! There are wizards present, and they are quick to anger!
      </div>
    </div>

The resulting page content is styled like this:

{{EmbedLiveSample("glossary-selector-details", 640, 210)}}

1.  [Learn more about CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) in our introduction to CSS.
2.  Basic selectors
    1.  [Type selectors](/en-US/docs/Web/CSS/Type_selectors) `elementname`
    2.  [Class selectors](/en-US/docs/Web/CSS/Class_selectors) `.classname`
    3.  [ID selectors](/en-US/docs/Web/CSS/ID_selectors) `#idname`
    4.  [Universal selectors](/en-US/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
    5.  [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) `[attr=value]`
    6.  [State selectors](/en-US/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`
3.  Grouping selectors
    1.  [Selector list](/en-US/docs/Web/CSS/Selector_list) `A, B`
4.  Combinators
    1.  [Adjacent sibling selectors](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
    2.  [General sibling selectors](/en-US/docs/Web/CSS/General_sibling_combinator) `A ~ B`
    3.  [Child selectors](/en-US/docs/Web/CSS/Child_combinator) `A > B`
    4.  [Descendant selectors](/en-US/docs/Web/CSS/Descendant_combinator) `A B`
5.  Pseudo
    1.  [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes) `:`
    2.  [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements) `::`
