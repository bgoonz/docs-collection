2012-09-17

{% include ‘partials/extensions/mv2-legacy-page.md’ %}

Extensions empower users to create their ideal browsing experience, tailored to an individual’s abilities and preferences. Extensions should include accessibility components that encourage an inclusive user base by enabling people with visual impairments, hearing loss, limited dexterity, and other disabilities to access the extension.

Everyone, not just users with special needs, can benefit from accessibility features. Vision impaired, low dexterity and power users all benefit from keyboard shortcuts. Captions and transcripts are essential to deaf users, but also help language learners.

People may interact with an extension in a variety of ways. Some users have a standard monitor, keyboard and mouse - or they may depend on a screen magnifier and possibly a [screen reader](https://webaim.org/techniques/screenreader/). While it is impossible to predict what tools people will use to access an extension, there are steps any developer can take to make an extension as accessible as possible.

## Integrate accessible UI controls {: \#controls }

If users can’t access the user interface controls, they are unable to use an extension. The easiest way to create an accessible UI is to use a standard HTML control.

{% Aside %}

Note: If an extension requires a custom control, it is much easier to make a custom control accessible from the beginning than to go back an add accessibility support later.

{% endAside %}

### Standard controls {: \#htmlcontrols }

Whenever possible, use [standard HTML UI controls](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML). Standard HTML controls are keyboard accessible, scale easily and are generally understood by screen readers.

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/GzBvxe7wf61STDT30M2C.png”, alt=“Screenshots and code for button, checkbox, radio, text, select/option, and link”, height=“350”, width=“550” %}

### WAI-ARIA in custom controls {: \#aria }

The [Web Accessibility Initiative - Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/), WAI-ARIA, is a specification for making UI controls accessible to screen readers through a standard set of DOM attributes. These attributes provide information to the screen reader about the function and current state of controls on a web page.

To add WAI-ARIA support to custom controls, the DOM elements of an extension will need to be modified to include attributes Chrome uses to raise events during user interaction. Screen readers respond to these events and describe the function of the control. DOM attributes specified by WAI-ARIA are classified into [_roles_](https://www.w3.org/TR/wai-aria/#roles), [_states_, and _properties_](https://www.w3.org/TR/wai-aria/#states_and_properties).

    <div role="toolbar">

The [`aria-activedescendant`](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-activedescendant) property specifies which child of a toolbar receives focus when the toolbar receives focus. The code `tabindex="0"` specifies that the toolbar receives focus in document order.

Consider the complete specification for an example toolbar below:

    <div role="toolbar" tabindex="0" aria-activedescendant="button1">
      <img src="buttoncut.png" role="button" alt="cut" id="button1">
      <img src="buttoncopy.png" role="button" alt="copy" id="button2">
      <img src="buttonpaste.png" role="button" alt="paste" id="button3">
    </div>

Once WAI-ARIA roles, states, and properties are added to the DOM of a control, Google Chrome raises the appropriate events to the screen reader. Because WAI-ARIA support is still a work in progress, Google Chrome might not raise an event for every WAI-ARIA property, and screen readers might not recognize all of the events being raised.

For a quick tutorial on adding WAI-ARIA controls to custom controls, see [Dave Raggett’s presentation from WWW2010](https://www.w3.org/2010/Talks/www2010-dsr-diy-aria/).

### Focus in custom controls {: \#focus }

Keyboard focus is essentials for users who navigate the web without a mouse. Make sure operation and navigation controls, such as buttons, list boxes and menu bars can receive keyboard focus.

By default, the only elements in the HTML DOM that can receive keyboard focus are anchors, buttons, and form controls. However, setting the HTML attribute `tabIndex` to `0` places DOM elements in the default tab sequence, enabling them to receive keyboard focus.

    element.tabIndex = 0

    element.focus();

Setting `tabIndex = -1` removes the element from the tab sequence but still allows the element to receive keyboard focus programmatically.

## Support keyboard access {: \#keyboard }

Extensions should be usable with just a keyboard, allowing users who can’t use a mouse, and power users who simply don’t, to access them.

### Navigation {: \#navigation }

Check that a user can navigate between different parts of an extension without using the mouse. Check that any use of a [popup](/docs/extensions/mv2/user_interface#popup) is keyboard navigable. Use [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179?hl=en) to determine if an extension is navigable.

Make sure it’s easy to see which parts of the interface have keyboard focus. Usually a focus outline moves around the interface, however, if CSS is used too heavily the outline might be suppressed or the contrast reduced.

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/KLh65zbJuxjLzdmYxFrP.png”, alt=“A focus outline on a Search button”, height=“75”, width=“200” %}

{% Img src=“image/BrQidfK9jaQyIHwdw91aVpkPiib2/nrhQ8wybIh28GxRFfmSl.png”, alt=“A focus outline on one of a series of links”, height=“40”, width=“400” %}

### Shortcuts {: \#shortcuts }

While the most common keyboard navigation strategy involves using the Tab key to rotate focus through an extension’s interface, it is not always the easiest or most efficient option.

A simple JavaScript keyboard handler could look like the following. Note how the WAI-ARIA property `aria-activedescendant` is updated in response to user input to reflect the current active toolbar button.

     function optionKeyEvent(event) {
      var tb = event.target;
      var buttonid;

      ENTER_KEYCODE = 13;
      RIGHT_KEYCODE = 39;
      LEFT_KEYCODE = 37;
      // Partial sample code for processing arrow keys.
      if (event.type == "keydown") {
        // Implement circular keyboard navigation within the toolbar buttons
        if (event.keyCode == ENTER_KEYCODE) {
          ExecuteButtonAction(getCurrentButtonID());
          // getCurrentButtonID defined elsewhere
        } else if (event.keyCode == event.RIGHT_KEYCODE) {
          // Change the active toolbar button to the one to the right (circular).
          var buttonid = getNextButtonID();
          // getNextButtonID defined elsewhere
          tb.setAttribute("aria-activedescendant", buttonid);
        } else if (event.keyCode == event.LEFT_KEYCODE) {
          // Change the active toolbar button to the one to the left (circular).
          var buttonid = getPrevButtonID();
          // getPrevButtonID defined elsewhere
          tb.setAttribute("aria-activedescendant", buttonid);
        } else {
          return true;
        }
        return false;
      }
    }

    <div role="toolbar" tabindex="0" aria-activedescendant="button1" id="tb1"
         onkeydown="return optionKeyEvent(event);"
         onkeypress="return optionKeyEvent(event);">
      <img src="buttoncut" role="button" alt="cut" id="button1">
      <img src="buttoncopy" role="button" alt="copy" id="button1">
      <img src="buttonpaste" role="button" alt="paste" id="button1">
    </div>

Extensions can create explicit keyboard shortcuts to important extension UI elements. To implement these shortcuts, connect keyboard event listeners to controls. Make users aware of the available shortcuts by providing them in the [options page](/docs/extensions/mv2/options).

## Provide accessible content {: \#more }

Providing accessible content is important to all users. Many of the following guidelines may sound familiar, as they reflect good practices for all web content.

### Text {: \#text }

Font choices and text size impact how readable an extension’s content is. Users with sight issues may need to increase an extensions text size. If using keyboard shortcuts, make sure they do not interfere with the zoom shortcuts built into Chrome.

As an indicator of flexibility of an extension’s UI, apply the [200% test](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale); if the text size or page zoom is increased 200%, is it still usable?

Avoid baking text into images. Users are unable to modify the size and screen readers are unable to interpret images. Insead, opt for styled web font, such as one of the fonts found in the [Google Font API](https://developers.google.com/fonts/). Web fonts can scale to different sizes and can be accessed by people using screen readers.

### Colors {: \#colors }

There should be sufficient contrast between background color and the text color in an extension. Use a [contrast checking tool](https://snook.ca/technical/colour_contrast/colour.html) to test if the background and foreground colors provide an appropriate contrast.

When evaluating contrast, verify that every part of the extension that relies on graphics to convey information is clearly visible. For specific images, tools such as [Coblis—Color Blindness Simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/) can be used to see what an image looks like in various forms of color deficiency.

Consider offering different color themes, or giving the user the ability to customize the color scheme, to create a better contrast.

### Sound {: \#sound }

If an extension relies upon sound or video to convey information, ensure that captions or a transcript is available. See the [Described and Captioned Media Program guidelines](https://dcmp.org/learn/213) for more information on captions.

### Images {: \#images }

Provide informative alt text for images.

    <img src="img.jpg" alt="The logo for the extension">

Use the alt text to state the purpose of the image rather than a literal description of the contents of an image. Spacer images or purely decorative images should have a blank `""` alt text or removed from the HTML entirely and placed in the CSS.

If the extension must use text in an image, include the image text in the alt text. A good resource to refer to is the [WebAIM article on appropriate alt text](https://webaim.org/techniques/alttext/).

## Learn more {: \#learn_more }

Learn more about accessibility in Chrome by checking out the [A11ycasts](https://www.youtube.com/watch?v=Ag3DMNbL_ig&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) channel and reading through the [Chromium Accessibility Technical Documentation](https://www.chromium.org/developers/design-documents/accessibility#TOC-WAI-ARIA-Support).
