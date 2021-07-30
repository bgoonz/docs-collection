--- title: caret slug: Glossary/caret tags: - Cursor - Glossary - Input - caret - insertion point - text cursor - text entry - text input - text insertion point ---

<span class="seoSummary">A **caret** (sometimes called a "text cursor") is an indicator displayed on the screen to indicate where text input will be inserted.</span> Most user interfaces represent the caret using a thin vertical line or a character-sized box that flashes, but this can vary. This point in the text is called the **insertion point**. The word "caret" differentiates the text insertion point from the mouse cursor.

On the web, a caret is used to represent the insertion point in {{HTMLElement("input")}} and {{HTMLElement("textarea")}} elements, as well as any elements whose {{htmlattrxref("contenteditable")}} attribute is set, thereby allowing the contents of the element to be edited by the user.

Learn more
----------

### General knowledge

-   {{interwiki("wikipedia", "Caret navigation")}} on Wikipedia

### CSS related to the caret

You can set the color of the caret for a given element's editable content by setting the element's CSS {{cssxref("caret-color")}} property to the appropriate {{cssxref("&lt;color&gt;")}} value.

### HTML elements that may present a caret

These elements provide text entry fields or boxes and therefore make use of the caret.

-   `<input type="text">`
-   `<input type="password">`
-   `<input type="search">`
-   `<input type="date">`, `<input type="time">`, `<input type="datetime">`, and `<input type="datetime-local">`
-   `<input type="number">`[,](/en-US/docs/Web/HTML/Element/input/number) `<input type="range">`
-   `<input type="email">`, `<input type="tel">`, and `<input type="url">`
-   {{HTMLElement("textarea")}}
-   Any element with its {{htmlattrxref("contenteditable")}} attribute set
