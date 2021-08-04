--- title: CSS pixel slug: Glossary/CSS_pixel tags: - CSS - CSS Pixel - Glossary - height - length - pixel - size - unit - width ---

The **CSS pixel**—denoted in {{Glossary("CSS")}} with the suffix `px`—is a unit of length which roughly corresponds to the width or height of a single dot that can be comfortably seen by the human eye without strain, but is otherwise as small as possible. By definition, this is the physical size of a single pixel at a pixel density of 96 DPI, located an arm's length away from the viewer's eyes.

That definition, of course, leaves a lot of wiggle room, as the terms "be comfortably seen" and "an arm's length away" are imprecise, varying from person to person. When a user is sitting at a desk in front of a desktop, the display is generally substantially farther away from their eyes than when they're on a cell phone, for instance.

As such, it generally suffices to say that when the unit `px` is used, the goal is to try to have the distance `96px` equal about 1 inch on the screen, regardless of the actual pixel density of the screen. In other words, if the user is on a phone with a pixel density of 266 DPI, and an element is placed on the screen with a width of `96px`, the actual width of the element would be 266 {{Glossary("Device pixel","device pixels")}}.

## Learn more

### Technical reference

- [CSS Values and Units Module, section 5.2: Absolute Lengths](https://drafts.csswg.org/css-values-3/#absolute-lengths)

### Learn about it

- [CSS Length Explained](https://hacks.mozilla.org/2013/09/css-length-explained/) on the MDN Hacks Blog
