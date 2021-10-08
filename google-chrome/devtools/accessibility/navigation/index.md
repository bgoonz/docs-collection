2019-03-08

This guide aims to help users who primarily rely on assistive technology like screen readers access and use [Chrome DevTools](/docs/devtools). Chrome DevTools is a suite of web developer tools built into the Google Chrome browser. See [Accessibility Reference](/docs/devtools/accessibility/reference) if you’re looking for DevTools features related to improving the accessibility of a web page.

The accessibility of DevTools is a work-in-progress. Some panels and tabs work better with assistive technology than others. This guide walks you through the panels which are the most accessible and highlights specific issues you may encounter along the way.

## Overview {: \#overview }

Before starting, it helps to have a mental model of how the DevTools UI is structured. DevTools is divided into a series of _panels_ which are organized into an [ARIA `tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist). For example:

- The **Elements** panel lets you view and change [DOM nodes](/docs/devtools/dom) or [CSS](/docs/devtools/css).
- The [**Console** panel](/docs/devtools/console) lets you read JavaScript logs and live edit objects.

Within the content area of each panel, there are a number of different tools, often referred to as _tabs_ or _panes_ in the documentation. For instance, the **Elements** panel contains additional tabs to inspect event listeners, the accessibility tree, and much more. The distinction between tabs and panes is somewhat arbitrary. The only reason you’ll see one term or the other is to maintain consistency with the rest of the official DevTools documentation.

## Keyboard shortcuts {: \#shortcuts }

The [DevTools Keyboard Shortcuts reference](/docs/devtools/shortcuts) is a helpful cheatsheet. Be sure to bookmark it and refer back to it as you explore the different panels.

## Open DevTools {: \#open }

To get started, read through [Open Chrome DevTools](/docs/devtools/open). There are a number of ways to open DevTools, either through keyboard shortcuts or menu items.

## Navigate between panels {: \#panelnav }

### Navigate by keyboard {: \#keynav }

- With DevTools open, press Control+\] or Command+\] (Mac) to focus the next panel.
- Press Control+\[ or Command+\[ (Mac) to focus the previous panel.
- It’s also possible to use Shift+Tab to move focus into a panel’s `tablist` and use the arrow keys to change panels, though it may be faster to use the previously mentioned shortcuts.

#### Known issues {: \#keynavissues }

- Some panels, such as the **Console** and **Performance** panels, may move focus into their content area as soon as they are activated. This can make navigating by arrow keys difficult.
- The selected panel’s name is announced, but only after it has read the focused content in the panel. This can make it very easy to miss.

### Navigate by Command Menu {: \#commandmenunav }

To focus a specific panel, use the [**Command Menu**](/docs/devtools/command-menu/):

1.  With DevTools open, press Control+Shift+P or Command+Shift+P (Mac) to open the **Command Menu**. The **Command Menu** is a fuzzy search autocomplete combobox.
2.  Type the name of the panel you’d like to open, then use the Down Arrow keyboard to navigate to the correct option.
3.  Press Enter to run a command.

For example, to open the **Elements** panel:

1.  Open the **Command Menu**.
2.  Type E then L. The **Panel &gt; Show Elements** option is selected.
3.  Press Enter to run the command that opens the panel.

Opening a panel this way directs focus to the contents of the panel itself. In the case of the **Elements** panel, focus moves into the **DOM Tree**.

## Elements panel {: \#elements }

### Inspect an element on the page {: \#inspect }

1.  Navigate to the element you want to inspect using the screen reader’s cursor.
2.  Simulate a right-mouse click on the element to open the context menu.
3.  Choose the **Inspect** option. This opens the [**Elements** panel](/docs/devtools/dom) and focuses the element in the **DOM Tree**.

The **DOM Tree** is laid out as an [ARIA `tree`](https://www.w3.org/TR/wai-aria-1.1/#tree). See [Navigate the **DOM Tree** with a keyboard](/docs/devtools/dom#keynav) for an example.

### Copy the code for an element in the DOM Tree {: \#outerhtml }

1.  With focus on a node in the **DOM Tree**, bring up the right-click context menu.
2.  Expand the **Copy** option.
3.  Select **Copy outerHTML**.

#### Known issues {: \#outerhtmlissues }

- **Copy outerHTML** often doesn’t select the current node but instead selects its parent node. However, the contents of the element should still be in the copied outerHTML.

### Modify the attributes of an element in the DOM Tree {: \#attributes }

- With focus on a node in the **DOM Tree**, press Enter to make it editable.
- Press Tab to move between attribute values. When you hear “space” you are inside of an empty text input and can type a new attribute value.
- Press Control+Enter or Command+Enter (Mac) to accept the change and hear the entire contents of the element.

#### Known issues {: \#attributesissues }

- When you type into the text input you get no feedback. If you make a typo and use the arrow keys to explore your input you also get no feedback. The easiest way to check your work is to accept the change, then listen for the entire element to be announced.

### Edit the HTML of an element in the DOM Tree {: \#nodetype }

- With focus on a node in the **DOM Tree**, press Enter to make it editable.
- Press Tab to move between attribute values. When you hear the element’s name, for instance, “h2”, you are inside of a text input and may change the element’s type.
- Press Control+Enter or Command+Enter (Mac) to accept the change.

For example, typing `h3` and pressing Control+Enter or Command+Enter (Mac) changes the element’s start and end tags to `h3`.

## Elements panel tabs {: \#elementstabs }

The **Elements** panel contains additional tabs for inspecting things like the CSS applied to an element or its place in the accessibility tree.

- With focus on a node in the **DOM Tree**, press Tab until you hear that the **Styles** pane is selected.
- Use the Right Arrow to explore other available tabs.

The **DOM Tree** turns elements with `href` attributes into focusable links, so you may need to press Tab more than once to reach the Styles pane.

### Known issues {: \#elementstabsissues }

The **DOM Breakpoints** and **Properties** tabs are not keyboard accessible.

### Styles pane {: \#styles }

In the **Styles** pane you’ll find controls for filtering styles, toggling element states (such as [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) and [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)), toggling classes, and adding new classes. There is also a powerful style inspection tool to explore and modify styles currently applied to the element that’s in focus in the **DOM Tree**.

The key concept to understand about the **Styles** pane is that it only shows styles for the currently-selected node in the **DOM Tree**. For example, suppose you’re done inspecting the styles of a `<header>` node, and now you want to look at the styles for a `<footer>` node. To do that, you first need to select the `<footer>` node in the **DOM Tree**. You might find it faster to use the [Inspect](#inspect) workflow to inspect a node that’s in the general vicinity of the `footer` node (such as a link within the footer), which focuses the **DOM Tree**, and then use your keyboard to navigate to the exact node that you’re interested in.

#### Navigate the Styles pane {: \#stylesnav }

Because all of the style tools connect in one way or another back to the **Styles** pane, it makes sense to become an expert in this tool first.

- With focus on the **Styles** pane, press Tab to move focus inside and explore its contents.
- Press Tab until the first style becomes active. If you’re using a screen reader this first style will be announced as “element.style {}”.
- Press Down Arrow to navigate the list of styles in order of specificity. A screen reader announces each style starting with the name of the CSS file, the line number that the style appears on, and the style name itself. For example: “main.css:233 .card\_\_img {}”
- Press Enter to inspect a style in more detail. Focus begins on an editable version of the style name.
- Press Tab to move between editable versions of each CSS property and their corresponding values. At the end of each style block is a blank editable text field which you may use to add additional CSS properties.
- You may continue to press Tab to move through the list of styles, or press Escape to exit this mode and go back to navigating by arrow keys.

Be sure to read through [the Styles pane keyboard reference](/docs/devtools/shortcuts#styles) for additional shortcuts.

##### Known Issues {: \#stylesnavissues }

- If you use the **Filter** editable text field you will no longer be able to navigate the list of styles.

#### Toggle element state {: \#togglestate }

To toggle an element’s state, such as `:active` or `:focus`:

1.  Navigate to the **Styles** pane and press Tab until the **Toggle Element State** button has focus.
2.  Press Enter to expand the collection of element states. The element states are presented as a group of checkboxes.
3.  Press Tab until the first state, `:active`, has focus.
4.  Press Space to enable it. If the currently-selected element in the DOM Tree has an `:active` style, it’s now applied.
5.  Continue pressing Tab to explore all of the available states.

#### Add an exiting class {: \#addclass }

Adjacent to the **Toggle Element State** button is the **Element Classes** button. Move focus to it by pressing Tab then Enter. Focus moves into an edit text field labeled **Add New Class**.

The **Element Classes** button is primarily used for adding existing classes to an element. For example, if your stylesheet contained a helper class named `.clearfix` you could press `.` inside of the edit text field to see a suggestion list of classes and use the Down Arrow to find the `.clearfix` suggestion. Or type the class name out yourself and press Enter to apply it.

#### Add a new style rule {: \#addrule }

Adjacent to the **Element Classes** button is the **New Style Rule** button. Move focus to it by pressing Tab and press Enter. Focus moves into an editable text field inside of the style inspector. The initial text content of the field is the tag name of the element that is selected in the **DOM Tree**. You may type any class name you want into this field and then press Tab to assign CSS properties to it.

### Computed tab {: \#computed }

With focus on the [**Computed** tab](/docs/devtools/css/reference#computed), press Tab to move focus inside and explore its contents. Within the **Computed** tab there are controls for exploring which CSS properties are actually applied to an element in order of specificity.

#### Explore all computed styles {: \#explorecomputed }

Press Tab until you reach the collection of computed styles. These are presented as an ARIA `tree`. Expanding a listbox reveals which CSS selectors are applying the computed style. These selectors are organized by specificity. A screen reader announces the computed value, which CSS selector is currently matching, the filename of the stylesheet that contains the selector, and the line number for the selector.

#### Known issues {: \#explorecomputedissues }

- If you use the **Filter** text field you will no longer be able to inspect styles.

### Event listeners tab {: \#listeners }

From within the **Elements** panel you may inspect the event listeners applied to an element using the **Event Listeners** tab. With focus on the **Styles** pane, press the Right Arrow to navigate to the **Event Listeners** tab.

#### Explore event listeners {: \#explorelisteners }

Event listeners are presented as an ARIA `tree`. You may use the arrow keys to navigate them. A screen reader announces the name of the DOM object that the event listener is attached to, as well as the file name where the event listener is defined and its line number.

### Accessibility pane {: \#accessibility }

With focus on the [**Accessibility** pane](/docs/devtools/accessibility/reference#pane), press Tab to move focus inside and explore its contents. Within the **Accessibility** pane there are controls for exploring the accessibility tree, the ARIA attributes applied to an element, and its computed accessibility properties.

#### Accessibility Tree {: \#accessibilitytree }

The **Accessibility Tree** is presented as an ARIA `tree` where each `treeitem` corresponds to an element in the DOM. The tree announces the computed role for the selected node. Generic elements like `div` and `span` are announced as “GenericContainer” in the tree. Use the arrow keys to traverse the tree and explore parent-child relationships.

#### Known issues {: \#accessibilitytreeissues }

- The type of ARIA tree used by the **Accessibility** pane may not be properly exposed in Chrome for macOS screen readers like VoiceOver. Subscribe to [Chromium issue \#868480](https://bugs.chromium.org/p/chromium/issues/detail?id=868480) to be informed about progress on this issue.
- The **ARIA Attributes** and **Computed Properties** sections are marked up as ARIA trees, but they do not currently have focus management so they are not keyboard operable.

## Audits panel {: \#audits }

The **Audits** panel let’s you run a series of tests against a site to check for common issues related to performance, accessibility, SEO, and a number of other categories.

### Configure and run an audit {: \#configureaudits }

1.  When the **Audits** panel is first opened, focus is placed on the **Run Audit** button at the end of the form. By default the form is configured to run audits for every category using mobile emulation on a simulated 3G connection.
2.  Use Shift+Tab or navigate back in Browse mode to change the audit settings.
3.  When you’re ready to run the audit, navigate back to the **Run Audit** button and press Enter.
4.  Focus moves into a modal window with a **Cancel** button which allows you to exit the audit. You may hear a series of earcons as the audit runs and refreshes the page multiple times.

#### Known issues {: \#configureauditsissues }

- The different sections of the configuration form are not currently marked up with a `fieldset` element. It may be easier to navigate them in Browse mode to figure out which controls are associated with each section.
- There is no earcon or live region announcement when the audit is finished running. Generally it takes about 30 seconds, after which you should be able to navigate to the results. Using Browse mode may be the easiest way to reach the results.

### Navigate the audit report {: \#auditsnav }

The audit report is organized into sections that correspond with each of the audit categories. The report opens with a list of scores for each category. These scores are also links which can be used to skip to the relevant sections. Within each section are expandable `details` elements, which contain information relating to passed or failed audits. By default, only failing audits are shown. Each section ends with a final `details` element which contains all of the passed audits.

To run a new audit, use Shift+Tab to exit the report and look for the **Perform An Audit** button.
