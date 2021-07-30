--- title: Media (CSS) slug: Glossary/Media/CSS tags: - CSS - Glossary - Intro - Media ---

<span class="seoSummary">In the context of {{Glossary("CSS")}} (Cascading Style Sheets), the term **media** refers to the destination to which the document is to be drawn by the {{Glossary("rendering engine")}}. </span>Typically, this is a screen—but it may also be a printer, a speech synthesizer, Braille display, or another type of device.

CSS offers several features that allow you to tweak your document's styles—or even offer different styles—according to the media **type** (such as screen or print, to name two) or media **capabilities** (such as width, resolution, or other values) of the viewer's device.

Learn more
----------

### General knowledge

-   [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

### Technical reference

[Media queries](/en-US/docs/Web/CSS/Media_Queries)  
Define a set of characteristics or parameters required to apply the CSS styles that are specified within the curly braces of the media query; for example: only applying certain CSS styles for devices below 768 pixels.

{{cssxref("@media")}} [at-rule](/en-US/docs/Web/CSS/At-rule)  
Conditionally apply part of a [stylesheet](/en-US/docs/Learn/CSS/First_steps/How_CSS_works#how_to_apply_your_css_to_your_html), based on the result of a media query.

{{domxref("Window.matchMedia()")}}  
Test the viewing device against a media query.
