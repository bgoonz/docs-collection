--- title: CSS property compatibility table for form controls slug: Learn/Forms/Property_compatibility_table_for_form_controls tags: - Advanced - CSS - Forms - Guide - HTML - Junk - NeedsUpdate - Web ---

{{learnsidebar}}

The following compatibility tables try to summarize the state of CSS support for HTML forms. Due to the complexity of CSS and HTML forms, these tables can't be considered a perfect reference. However, they will give you good insight into what can and can't be done, which will help you learn how to do things.

## How to read the tables

### Values

For each property, there are four possible values:

Yes  
There's reasonably consistent support for the property across browsers. You may still face strange side effects in certain edge cases.

Partial  
While the property works, you may frequently face strange side effects or inconsistencies. You should probably avoid these properties unless you master those side effects first.

No  
The property doesn't work or is so inconsistent that it's not reliable.

n.a.  
The property has no meaning for this type of widget.

### Rendering

For each property there are two possible renderings:

N (Normal)  
Indicates that the property is applied as it is

T (Tweaked)  
Indicates that the property is applied with the extra rule below:

<!-- -->

    * {
      /* Turn off the native look and feel */
      -webkit-appearance: none;
      appearance: none;

    /* for Internet Explorer */
      background: none;
    }

## Compatibility tables

### Global behaviors

Some behaviors are common to many browsers at a global level:

{{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}}, {{cssxref("height")}}  
Using one of these properties can partially or fully turn off the native look & feel of widgets on some browsers. Be careful when you use them.

{{cssxref("line-height")}}  
This property is supported inconsistently across browsers and you should avoid it.

{{cssxref("text-decoration")}}  
This property is not supported by Opera on form widgets.

{{cssxref("text-overflow")}}  
Opera, Safari, and IE9 do not support this property on form widgets.

{{cssxref("text-shadow")}}  
Opera does not support {{cssxref("text-shadow")}} on form widgets and IE9 does not support it at all.

### Text fields

See the `{{htmlelement("input/text", "text")}}`, `{{htmlelement("input/search", "search")}}`, and `{{htmlelement("input/password", "password")}}` input types.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Partial<sup>\[1\]\[2\]</sup>

Yes

1.  WebKit browsers (mostly on Mac OSX and iOS) use the native look & feel for the search fields. Therefore, it's required to use `-webkit-appearance:none` to be able to apply this property to search fields.
2.  On Windows 7, Internet Explorer 9 does not apply the border unless `background:none` is applied.

{{cssxref("border")}}

Partial<sup>\[1\]\[2\]</sup>

Yes

1.  WebKit browsers (mostly on Mac OSX and iOS) use the native look & feel for the search fields. Therefore, it's required to use `-webkit-appearance:none` to be able to apply this property to search fields.
2.  On Windows 7, Internet Explorer 9 does not apply the border unless `background:none` is applied.

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Partial<sup>\[1\]\[2\]</sup>

Yes

1.  WebKit browsers (mostly on Mac OSX and iOS) use the native look & feel for the search fields. Therefore, it's required to use `-webkit-appearance:none` to be able to apply this property to search fields.
2.  On Windows 7, Internet Explorer 9 does not apply the border unless `background:none` is applied.

_Text and font_

{{cssxref("color")}}<sup>\[1\]</sup>

Yes

Yes

1.  If the {{cssxref("border-color")}} property is not set, some WebKit based browsers will apply the {{cssxref("color")}} property to the border as well as the font on `{{htmlelement("textarea")}}`s.

{{cssxref("font")}}

Yes

Yes

See the note about {{cssxref("line-height")}}

{{cssxref("letter-spacing")}}

Yes

Yes

{{cssxref("text-align")}}

Yes

Yes

{{cssxref("text-decoration")}}

Partial

Partial

See the note about Opera

{{cssxref("text-indent")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  IE9 supports this property only on `{{htmlelement("textarea")}}`s, whereas Opera only supports it on single line text fields.

{{cssxref("text-overflow")}}

Partial

Partial

{{cssxref("text-shadow")}}

Partial

Partial

{{cssxref("text-transform")}}

Yes

Yes

_Border and background_

{{cssxref("background")}}

Partial<sup>\[1\]</sup>

Yes

1.  WebKit browsers (mostly on Mac OSX and iOS) use the native look & feel for the search fields. Therefore, it's required to use `-webkit-appearance:none` to be able to apply this property to search fields. On Windows 7, Internet Explorer 9 does not apply the border unless `background:none` is applied.

{{cssxref("border-radius")}}

Partial<sup>\[1\]\[2\]</sup>

Yes

1.  WebKit browsers (mostly on Mac OSX and iOS) use the native look & feel for the search fields. Therefore, it's required to use `-webkit-appearance:none` to be able to apply this property to search fields. On Windows 7, Internet Explorer 9 does not apply the border unless `background:none` is applied.
2.  On Opera the {{cssxref("border-radius")}} property is applied only if an explicit border is set.

{{cssxref("box-shadow")}}

No

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property.

### Buttons

See the `{{htmlelement("input/button", "button")}}`,  `{{htmlelement("input/submit", "submit")}}`, and `{{htmlelement("input/reset", "reset")}}` input types and the `{{htmlelement("button")}}` element.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Partial<sup>\[1\]</sup>

Yes

1.  This property is not applied on WebKit based browsers on Mac OSX or iOS.

{{cssxref("border")}}

Partial

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Partial<sup>\[1\]</sup>

Yes

1.  This property is not applied on WebKit based browsers on Mac OSX or iOS.

_Text and font_

{{cssxref("color")}}

Yes

Yes

{{cssxref("font")}}

Yes

Yes

See the note about {{cssxref("line-height")}}.

{{cssxref("letter-spacing")}}

Yes

Yes

{{cssxref("text-align")}}

No

No

{{cssxref("text-decoration")}}

Partial

Yes

{{cssxref("text-indent")}}

Yes

Yes

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

Partial

Partial

{{cssxref("text-transform")}}

Yes

Yes

_Border and background_

{{cssxref("background")}}

Yes

Yes

{{cssxref("border-radius")}}

Yes<sup>\[1\]</sup>

Yes<sup>\[1\]</sup>

1.  On Opera the {{cssxref("border-radius")}} property is applied only if an explicit border is set.

{{cssxref("box-shadow")}}

No

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property.

### Number

See the  `{{htmlelement("input/number", "number")}}` input type. There is no standard way to change the style of spinners used to change the value of the field, with the spinners on Safari being outside the field.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  On Opera, the spinners are zoomed in, which can hide the content of the field.

{{cssxref("border")}}

Yes

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  On Opera, the spinners are zoomed in, which can hide the content of the field.

_Text and font_

{{cssxref("color")}}

Yes

Yes

{{cssxref("font")}}

Yes

Yes

See the note about {{cssxref("line-height")}}.

{{cssxref("letter-spacing")}}

Yes

Yes

{{cssxref("text-align")}}

Yes

Yes

{{cssxref("text-decoration")}}

Partial

Partial

{{cssxref("text-indent")}}

Yes

Yes

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

Partial

Partial

{{cssxref("text-transform")}}

N.A.

N.A.

_Border and background_

{{cssxref("background")}}

No

No

Supported but there is too much inconsistency between browsers to be reliable.

{{cssxref("border-radius")}}

No

No

{{cssxref("box-shadow")}}

No

No

### Check boxes and radio buttons

See the `{{htmlelement("input/checkbox", "checkbox")}}` and `{{htmlelement("input/radio", "radio")}}` input types.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Some browsers add extra margins and others stretch the widget.

{{cssxref("height")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Some browsers add extra margins and others stretch the widget.

{{cssxref("border")}}

No

No

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

No

No

_Text and font_

{{cssxref("color")}}

N.A.

N.A.

{{cssxref("font")}}

N.A.

N.A.

{{cssxref("letter-spacing")}}

N.A.

N.A.

{{cssxref("text-align")}}

N.A.

N.A.

{{cssxref("text-decoration")}}

N.A.

N.A.

{{cssxref("text-indent")}}

N.A.

N.A.

{{cssxref("text-overflow")}}

N.A.

N.A.

{{cssxref("text-shadow")}}

N.A.

N.A.

{{cssxref("text-transform")}}

N.A.

N.A.

_Border and background_

{{cssxref("background")}}

No

No

{{cssxref("border-radius")}}

No

No

{{cssxref("box-shadow")}}

No

No

### Select boxes (single line)

See the `{{htmlelement("select")}}`,  `{{htmlelement("optgroup")}}` and  `{{htmlelement("option")}}` elements.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  This property is okay on the `{{htmlelement("select")}}` element, but it cannot be the case on the `{{htmlelement("option")}}` or `{{htmlelement("optgroup")}}` elements.

{{cssxref("height")}}

No

Yes

{{cssxref("border")}}

Partial

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

No<sup>\[1\]</sup>

Partial<sup>\[2\]</sup>

1.  The property is applied, but in an inconsistent way between browsers on Mac OSX.
2.  The property is well applied on the `{{htmlelement("select")}}` element, but is inconsistently handled on `{{htmlelement("option")}}` and `{{htmlelement("optgroup")}}` elements.

_Text and font_

{{cssxref("color")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  On Mac OSX, WebKit based browsers do not support this property on native widgets and they, along with Opera, do not support it at all on `{{htmlelement("option")}}` and `{{htmlelement("optgroup")}}` elements.

{{cssxref("font")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  On Mac OSX, WebKit based browsers do not support this property on native widgets and they, along with Opera, do not support it at all on `{{htmlelement("option")}}` and `{{htmlelement("optgroup")}}` elements.

{{cssxref("letter-spacing")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property on `{{htmlelement("select")}}`, `{{htmlelement("option")}}`, and `{{htmlelement("optgroup")}}` elements; WebKit based browsers on Mac OSX do not support this property on `{{htmlelement("option")}}` and `{{htmlelement("optgroup")}}` elements.

{{cssxref("text-align")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  IE9 on Windows 7 and WebKit based browsers on Mac OSX do not support this property on this widget.

{{cssxref("text-decoration")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Only Firefox provides full support for this property. Opera does not support this property at all and other browsers only support it on the `{{htmlelement("select")}}` element.

{{cssxref("text-indent")}}

Partial<sup>\[1\]\[2\]</sup>

Partial<sup>\[1\]\[2\]</sup>

1.  Most of the browsers only support this property on the `{{htmlelement("select")}}` element.
2.  IE9 does not support this property.

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

Partial<sup>\[1\]\[2\]</sup>

Partial<sup>\[1\]\[2\]</sup>

1.  Most of the browsers only support this property on the `{{htmlelement("select")}}` element.
2.  IE9 does not support this property.

{{cssxref("text-transform")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Most of the browsers only support this property on the `{{htmlelement("select")}}` element.

_Border and background_

{{cssxref("background")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Most of the browsers only support this property on the `{{htmlelement("select")}}` element.

{{cssxref("border-radius")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

{{cssxref("box-shadow")}}

No

Partial<sup>\[1\]</sup>

Note Firefox does not provide any way to change the down arrow on the `{{htmlelement("select")}}` element.

### Select boxes (multiline)

See the `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` and  `{{htmlelement("option")}}` elements and the [`size` attribute](/en-US/docs/Web/HTML/Attributes/size).

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Yes

Yes

{{cssxref("border")}}

Yes

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Opera does not support {{cssxref("padding-top")}} and {{cssxref("padding-bottom")}} on the `{{htmlelement("select")}}` element.

_Text and font_

{{cssxref("color")}}

Yes

Yes

{{cssxref("font")}}

Yes

Yes

See the note about {{cssxref("line-height")}}.

{{cssxref("letter-spacing")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property on `{{htmlelement("select")}}`, `{{htmlelement("option")}}`, and `{{htmlelement("optgroup")}}` elements; WebKit based browsers on Mac OSX do not support this property on `{{htmlelement("option")}}` and `{{htmlelement("optgroup")}}` elements.

{{cssxref("text-align")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  IE9 on Windows 7 and WebKit based browser on Mac OSX do not support this property on this widget.

{{cssxref("text-decoration")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Only supported by Firefox and IE9+.

{{cssxref("text-indent")}}

No

No

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

No

No

{{cssxref("text-transform")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Most of the browsers only support this property on the `{{htmlelement("select")}}` element.

_Border and background_

{{cssxref("background")}}

Yes

Yes

{{cssxref("border-radius")}}

Yes<sup>\[1\]</sup>

Yes<sup>\[1\]</sup>

1.  On Opera the {{cssxref("border-radius")}} property is applied only if an explicit border is set.

{{cssxref("box-shadow")}}

No

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property.

### Datalist

See the `{{htmlelement("datalist")}}` and `{{htmlelement("input")}}` elements and the [`list` attribute](/en-US/docs/Web/HTML/Attributes/list).

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

No

No

{{cssxref("height")}}

No

No

{{cssxref("border")}}

No

No

{{cssxref("margin")}}

No

No

{{cssxref("padding")}}

No

No

_Text and font_

{{cssxref("color")}}

No

No

{{cssxref("font")}}

No

No

{{cssxref("letter-spacing")}}

No

No

{{cssxref("text-align")}}

No

No

{{cssxref("text-decoration")}}

No

No

{{cssxref("text-indent")}}

No

No

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

No

No

{{cssxref("text-transform")}}

No

No

_Border and background_

{{cssxref("background")}}

No

No

{{cssxref("border-radius")}}

No

No

{{cssxref("box-shadow")}}

No

No

### File picker

See the `{{htmlelement("input/file", "file")}}` input type.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

No

No

{{cssxref("height")}}

No

No

{{cssxref("border")}}

No

No

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

No

No

_Text and font_

{{cssxref("color")}}

Yes

Yes

{{cssxref("font")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Supported, but there is too much inconsistency between browsers to be reliable.

{{cssxref("letter-spacing")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Many browsers apply this property to the select button.

{{cssxref("text-align")}}

No

No

{{cssxref("text-decoration")}}

No

No

{{cssxref("text-indent")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  It acts more or less like an extra left margin outside the widget.

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

No

No

{{cssxref("text-transform")}}

No

No

_Border and background_

{{cssxref("background")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Supported, but there is too much inconsistency between browsers to be reliable.

{{cssxref("border-radius")}}

No

No

{{cssxref("box-shadow")}}

No

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property.

### Date pickers

See the `{{htmlelement("input/date", "date")}}` and `{{htmlelement("input/time", "time")}}` input types. Many properties are supported, but there is too much inconsistency between browsers to be reliable.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

No

No

{{cssxref("height")}}

No

No

{{cssxref("border")}}

No

No

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

No

No

_Text and font_

{{cssxref("color")}}

No

No

{{cssxref("font")}}

No

No

{{cssxref("letter-spacing")}}

No

No

{{cssxref("text-align")}}

No

No

{{cssxref("text-decoration")}}

No

No

{{cssxref("text-indent")}}

No

No

{{cssxref("text-overflow")}}

No

No

{{cssxref("text-shadow")}}

No

No

{{cssxref("text-transform")}}

No

No

_Border and background_

{{cssxref("background")}}

No

No

{{cssxref("border-radius")}}

No

No

{{cssxref("box-shadow")}}

No

No

### Color pickers

See the `{{htmlelement("input/color", "color")}}` input type:

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

No<sup>\[1\]</sup>

Yes

1.  Opera handles this like a select widget with the same restriction.

{{cssxref("border")}}

Yes

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

No<sup>\[1\]</sup>

Yes

1.  Opera handles this like a select widget with the same restriction.

_Text and font_

{{cssxref("color")}}

N.A.

N.A.

{{cssxref("font")}}

N.A.

N.A.

{{cssxref("letter-spacing")}}

N.A.

N.A.

{{cssxref("text-align")}}

N.A.

N.A.

{{cssxref("text-decoration")}}

N.A.

N.A.

{{cssxref("text-indent")}}

N.A.

N.A.

{{cssxref("text-overflow")}}

N.A.

N.A.

{{cssxref("text-shadow")}}

N.A.

N.A.

{{cssxref("text-transform")}}

N.A.

N.A.

_Border and background_

{{cssxref("background")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Supported, but there is too much inconsistency between browsers to be reliable.

{{cssxref("border-radius")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

{{cssxref("box-shadow")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

### Meters and progress

See the `{{htmlelement("meter")}}` and `{{htmlelement("progress")}}` elements:

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Yes

Yes

{{cssxref("border")}}

Partial

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Yes

Partial<sup>\[1\]</sup>

1.  Chrome hides the `{{htmlelement("progress")}}` and `{{htmlelement("meter")}}` element when the {{cssxref("padding")}} property is applied on a tweaked element.

_Text and font_

{{cssxref("color")}}

N.A.

N.A.

{{cssxref("font")}}

N.A.

N.A.

{{cssxref("letter-spacing")}}

N.A.

N.A.

{{cssxref("text-align")}}

N.A.

N.A.

{{cssxref("text-decoration")}}

N.A.

N.A.

{{cssxref("text-indent")}}

N.A.

N.A.

{{cssxref("text-overflow")}}

N.A.

N.A.

{{cssxref("text-shadow")}}

N.A.

N.A.

{{cssxref("text-transform")}}

N.A.

N.A.

_Border and background_

{{cssxref("background")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Supported, but there is too much inconsistency between browsers to be reliable.

{{cssxref("border-radius")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

{{cssxref("box-shadow")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

### Range

See the `{{htmlelement("input/range", "range")}}` input type. There is no standard way to change the style of the range grip and Opera has no way to tweak the default rendering of the range widget.

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  Chrome and Opera add some extra space around the widget, whereas Opera on Windows 7 stretches the range grip.

{{cssxref("border")}}

No

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Partial<sup>\[1\]</sup>

Yes

1.  The {{cssxref("padding")}} is applied, but has no visual effect.

_Text and font_

{{cssxref("color")}}

N.A.

N.A.

{{cssxref("font")}}

N.A.

N.A.

{{cssxref("letter-spacing")}}

N.A.

N.A.

{{cssxref("text-align")}}

N.A.

N.A.

{{cssxref("text-decoration")}}

N.A.

N.A.

{{cssxref("text-indent")}}

N.A.

N.A.

{{cssxref("text-overflow")}}

N.A.

N.A.

{{cssxref("text-shadow")}}

N.A.

N.A.

{{cssxref("text-transform")}}

N.A.

N.A.

_Border and background_

{{cssxref("background")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

1.  Supported, but there is too much inconsistency between browsers to be reliable.

{{cssxref("border-radius")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

{{cssxref("box-shadow")}}

No<sup>\[1\]</sup>

No<sup>\[1\]</sup>

### Image buttons

See the `{{htmlelement("input/image", "image")}}` input type:

Property

N

T

Note

_CSS box model_

{{cssxref("width")}}

Yes

Yes

{{cssxref("height")}}

Yes

Yes

{{cssxref("border")}}

Yes

Yes

{{cssxref("margin")}}

Yes

Yes

{{cssxref("padding")}}

Yes

Yes

_Text and font_

{{cssxref("color")}}

N.A.

N.A.

{{cssxref("font")}}

N.A.

N.A.

{{cssxref("letter-spacing")}}

N.A.

N.A.

{{cssxref("text-align")}}

N.A.

N.A.

{{cssxref("text-decoration")}}

N.A.

N.A.

{{cssxref("text-indent")}}

N.A.

N.A.

{{cssxref("text-overflow")}}

N.A.

N.A.

{{cssxref("text-shadow")}}

N.A.

N.A.

{{cssxref("text-transform")}}

N.A.

N.A.

_Border and background_

{{cssxref("background")}}

Yes

Yes

{{cssxref("border-radius")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property.

{{cssxref("box-shadow")}}

Partial<sup>\[1\]</sup>

Partial<sup>\[1\]</sup>

1.  IE9 does not support this property.

## See also

### Learning path

- [Your first HTML form](/en-US/docs/Learn/Forms/Your_first_form)
- [How to structure an HTML form](/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [The native form widgets](/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 input types](/en-US/docs/Learn/Forms/HTML5_input_types)
- [Additional form controls](/en-US/docs/Learn/Forms/Other_form_controls)
- [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes)
- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- [Sending forms through JavaScript](/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [How to build custom form widgets](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML forms in legacy browsers](/en-US/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling)
- [Property compatibility table for form widgets](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
