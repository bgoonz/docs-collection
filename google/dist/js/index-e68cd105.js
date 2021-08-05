import {
  s as styleInject,
  B as BaseElement,
  o as openModal,
  c as closeModal,
  h as html,
} from "./index-79f4e752.js";

/**
 * @return {boolean} whether Web Share is supported on this browser
 */
function isWebShareSupported() {
  if (!("share" in window.navigator)) {
    return false;
  }

  // Ensure that the user would be able to share a reference URL.
  // This is part of Web Share Level 2, so feature-detect it:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=903010
  if ("canShare" in navigator) {
    const url = `https://${window.location.hostname}`;
    return window.navigator.canShare({ url });
  }

  return true;
}

/**
 * @fileoverview Element that adds a share action on click.
 */

/**
 * Renders share element. This simply adds behavaior to share, and does not
 * render any HTML.
 *
 * @extends {HTMLElement}
 * @final
 */
class ShareAction extends HTMLElement {
  constructor() {
    super();
    const webShareSupported = isWebShareSupported();

    // Add "share" or "twitter" to the data-label of this element, for Analytics.
    let label = this.getAttribute("data-label") || "";
    if (label) {
      label += ", ";
    }
    label += webShareSupported ? "share" : "twitter";
    this.setAttribute("data-label", label);

    const handler = webShareSupported ? this.onWebShare : this.onTwitterShare;
    this.addEventListener("click", handler.bind(this));
  }

  onWebShare(e) {
    e.preventDefault();
    navigator.share({
      url: this.shareUrl,
      text: this.shareText,
    });
  }

  onTwitterShare(e) {
    const url = new URL("https://twitter.com/share");
    url.searchParams.set("url", this.shareUrl);
    url.searchParams.set("text", this.shareText);
    e.preventDefault();
    window.open(url.toString(), "share-twitter", "width=550,height=235");
  }

  get shareUrl() {
    return window.location.href;
  }

  get shareText() {
    // Check for a custom message.
    const messageText = this.getAttribute("message");
    if (messageText && messageText.length) {
      return messageText;
    }

    // If no custom message is found, fallback to using the page title
    // plus the author's names.
    let authorText = "";
    const rawAuthors = this.getAttribute("authors") || "";
    if (rawAuthors && rawAuthors.length) {
      const authors = rawAuthors
        .split("|")
        .map((x) => x.trim())
        .filter(Boolean);
      // ListFormat isn't widely supported; feature-detect it first
      if ("ListFormat" in Intl) {
        const il = new Intl.ListFormat("en");
        authorText = ` by ${il.format(authors)}`;
      } else {
        authorText = ` by ${authors.join(", ")}`;
      }
    }

    return document.title + authorText;
  }
}

customElements.define("share-action", ShareAction);

/**
 * @param {!Element} scroller
 * @param {string} dimension
 * @return {boolean}
 */
const checkOverflow = (scroller, dimension) => {
  if (dimension !== "height" && dimension !== "width") {
    throw new TypeError("Can only check overflow for height or width.");
  }

  if (!scroller) {
    throw new TypeError(`Can't check overflow on an undefined element.`);
  }

  const clientDimension =
    dimension === "width" ? scroller.clientWidth : scroller.clientHeight;
  const scrollDimension =
    dimension === "width" ? scroller.scrollWidth : scroller.scrollHeight;

  return scrollDimension > clientDimension;
};

var css_248z$1 =
  "@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes scaleup {\n  0% {\n    transform: scale(0.8);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.web-modal {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.32);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  opacity: 0;\n  overflow: auto;\n  padding: 1em;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: visibility 0s 150ms;\n  visibility: hidden;\n  z-index: 275;\n}\n.web-modal .web-modal__container {\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  max-height: 100%;\n  max-width: 35em;\n  min-height: 20em;\n  pointer-events: auto;\n  width: 26em;\n}\n.web-modal .web-modal__header {\n  border-bottom: 1px solid transparent;\n  margin: 0;\n  padding: 1.5rem 1.5rem 0.5rem;\n}\n.web-modal .web-modal__content {\n  flex: 1;\n  overflow: auto;\n  padding: 0 1.5rem;\n}\n.web-modal .web-modal__footer {\n  border-top: 1px solid transparent;\n  display: grid;\n  gap: 0.5rem;\n  grid-template-columns: 1fr auto;\n  justify-items: end;\n  padding: 1rem;\n}\n.web-modal .web-modal__button {\n  height: 44px;\n}\n.web-modal[open] {\n  opacity: 1;\n  transition: visibility 0s;\n  visibility: visible;\n}\n.web-modal[animatable] {\n  animation: 75ms linear reverse fadein;\n}\n.web-modal[animatable][open] {\n  animation: 150ms linear fadein;\n}\n.web-modal[animatable][open] .web-modal__container {\n  animation: 150ms cubic-bezier(0, 0, 0.2, 1) scaleup, 75ms linear fadein;\n}\n.web-modal[overflow] .web-modal__header {\n  border-color: #dadce0;\n}\n.web-modal[overflow] .web-modal__footer {\n  border-color: #dadce0;\n}";
styleInject(css_248z$1);

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Base element that provides modal functionality.
 * Handles inert state for document, focus management, and modal content overflow.
 *
 * @extends {BaseElement}
 */
class BaseModalElement extends BaseElement {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      animatable: { type: Boolean, reflect: true },
      overflow: { type: Boolean, reflect: true },
      parentModal: { type: String, reflect: true, attribute: "parent-modal" },
    };
  }

  constructor() {
    super();

    this.open_ = false;
    this.animatable = false;
    this.overflow = false;
    /** @type HTMLElement */
    this._triggerElement = null;
    this._parent = null;
    this.parentModal = null;

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.onClick);
    // Set tabindex to -1 so modal can be focused when it's opened.
    this.tabIndex = -1;
    this.inert = !this.open;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.onClick);
    // To account for the Assessment modal, which opens itself,
    // check whether the modal is connected before closing it
    // to keep it from staying open after nav.
    window.setTimeout(() => {
      if (!this.isConnected) {
        this.open = false;
      }
    }, 0);
  }

  set open(val) {
    if (this.open_ === val) {
      return;
    }

    const oldVal = this.open_;

    this.open_ = val;
    if (this.open_) {
      // Must get trigger before manipulating the DOM.
      this._triggerElement = /** @type HTMLElement */ (document.activeElement);
      // Add keyup event listener to this element rather than document
      // so a nested modal doesn't close its parent modal when the user presses Esc.
      this.addEventListener("keyup", this.onKeyUp);
      window.addEventListener("resize", this.onResize);
    } else {
      // Fire custom event to allow other components
      // to respond when the modal closes, if needed
      // (e.g., to reenable a button).
      const event = new Event("close-modal");

      this.dispatchEvent(event);
      window.removeEventListener("resize", this.onResize);
    }

    this.manageDocument();
    this.animatable = true;
    this.addEventListener("animationend", this.onAnimationEnd, {
      once: true,
    });
    this.inert = this.open; // starts the wrong way around, and flips onAnimationEnd

    this.requestUpdate("open", oldVal);
  }

  get open() {
    return this.open_;
  }

  onClick(e) {
    // Check whether the event target matches the currentTarget
    // so the modal only closes when a user clicks the scrim.
    if (e.currentTarget !== e.target) {
      return;
    }
    this.open = false;
  }

  onKeyUp(e) {
    // Close modal when user presses Escape.
    if (e.key === "Escape") {
      this.open = false;
    }
  }

  // Assumes modal on/off transitions are handled by an animation
  // rather than a transition.
  onAnimationEnd() {
    this.animatable = false;
    // Must wait until animation ends to change focus and check overflow.
    this.manageFocus();
    if (this.open) {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    } else {
      window.removeEventListener("resize", this.onResize);
      this.removeEventListener("keyup", this.onKeyUp);
    }
    this.inert = !this.open;
  }

  onResize() {
    // Set the modal's overflow prop to true if it has overflow to allow for styling changes
    // (e.g., adding borders to the child element handling overflow).
    // If the client component needs to use a different class for the element
    // handling overflow, it will need its own animationend listener.
    const content = this.querySelector(".web-modal__content");

    if (!content) {
      return;
    }

    this.overflow = checkOverflow(content, "height");
  }

  // Manage state of the document based on the modal state.
  manageDocument() {
    if (this.open) {
      // When the modal is opened, inert the rest of the document.
      openModal();

      // If the modal is triggered by an element in a parent modal,
      // inert the triggering modal and tag it so it can be uninerted later.
      // (Tagging prevents failure if elements move around in the DOM.)
      const parent = this.closest(this.parentModal);

      if (parent) {
        parent.inert = true;
        this._parent = parent;
      }
    } else if (!this.open && this.parentModal) {
      // If the modal is triggered by an element in another modal,
      // uninert the triggering modal but leave the document inert.

      if (parent) {
        parent.inert = false;
        this._parent = null;
      }
    } else {
      // When the modal is closed, uninert the rest of the document.
      closeModal();
    }
  }

  manageFocus() {
    if (this.open) {
      // When the modal is opened, move focus into the modal so
      // folks using a screen reader or switch can access it.
      this.focus();
    } else {
      // When the modal is closed, restore focus to the triggering element.
      // NOTE: It might be more techincally pure to
      // use a unistore action for this.
      if (this._triggerElement) {
        this._triggerElement.focus();
        this._triggerElement = null;
      } else {
        document.body.focus();
      }
    }
  }
}

/**
 * Generates a random string that can be used to ensure uniqueness of
 * the elements id on a page.
 * @param {string} [idPrefix] An id prefix to be followed by the generated salt.
 *     Used to check the uniqueness of the outcome id (prefix + salt).
 * @return {string} Id salt.
 */
const generateIdSalt = (idPrefix) => {
  const salt = Math.random().toString(36).substr(2, 9);
  return document.getElementById(idPrefix + salt)
    ? generateIdSalt(idPrefix)
    : salt;
};

var css_248z =
  '/**\n *\n * Copyright 2019 Google Inc. All rights reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nweb-tabs {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  --primary-color: var(--hover-color, #018642);\n  --hover-color: var(--hover-color, #e8f5e9);\n  --active-color: var(--active-color, #c8e6c9);\n}\nweb-tabs .web-tabs__tablist {\n  align-items: flex-end;\n  border-bottom: 1px solid #dadce0;\n  display: flex;\n  min-height: 50px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  width: 100%;\n}\nweb-tabs .web-tabs__tablist {\n  scrollbar-color: #80868b transparent;\n  scrollbar-width: thin;\n}\nweb-tabs .web-tabs__tablist::-webkit-scrollbar {\n  height: 10px;\n  width: 10px;\n}\nweb-tabs .web-tabs__tablist::-webkit-scrollbar-thumb {\n  background: #80868b;\n  background-clip: padding-box;\n  border: 2.5px solid transparent;\n  border-radius: 5px;\n}\nweb-tabs .web-tabs__tablist::-webkit-scrollbar-thumb:hover {\n  background-color: #62676c;\n}\nweb-tabs .web-tabs__tablist::-webkit-scrollbar-thumb:active {\n  background-color: #4a4e51;\n}\nweb-tabs .web-tabs__tablist::-webkit-scrollbar-track {\n  background: transparent;\n}\nweb-tabs[overflow] .web-tabs__tablist {\n  padding-left: 3rem;\n}\nweb-tabs .web-tabs__tab {\n  -webkit-tap-highlight-color: transparent;\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 3px;\n  color: #3740ff;\n  cursor: pointer;\n  display: inline-flex;\n  font: 500 0.875rem/2.25rem Segoe UI, system-ui, -apple-system, sans-serif;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: 0;\n  padding: 0 16px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: background-color 0.2s, box-shadow 0.2s;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeSpeed;\n  border-radius: 0;\n  color: #000;\n  flex: 1 0 auto;\n  height: 3rem;\n  margin: 0;\n  min-width: fit-content;\n  transition: background 0.2s, box-shadow 0.2s, color 0.2s;\n}\n@media (hover: hover) {\n  web-tabs .web-tabs__tab:hover,\nweb-tabs .web-tabs__tab:focus {\n    background: var(--hover-color);\n  }\n}\nweb-tabs .web-tabs__tab:focus {\n  box-shadow: inset 0 0 0 1px #3740ff;\n  outline: 0;\n}\nweb-tabs .web-tabs__tab:active {\n  background: var(--active-color);\n  box-shadow: none;\n}\nweb-tabs .web-tabs__tab[aria-selected=true] {\n  color: var(--primary-color);\n}\nweb-tabs .web-tabs__tab::after {\n  background: transparent;\n  bottom: 0;\n  content: "";\n  display: block;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  transition: background 0.2s;\n}\nweb-tabs .web-tabs__tab[aria-selected=true]::after {\n  background: var(--primary-color);\n}\nweb-tabs .web-tabs__text-label {\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\nweb-tabs .web-tabs__tab[aria-selected=true] .web-tabs__text-label {\n  opacity: 1;\n}\nweb-tabs .web-tabs__panel {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\nweb-tabs .web-tabs__panel {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n.js-focus-visible .web-tabs__tab:focus:not(.focus-visible) {\n  box-shadow: none;\n}';
styleInject(css_248z);

/**
 * Element that wraps each child element in a tab panel
 * and renders a tab for each panel.
 * @extends {BaseElement}
 */
class Tabs extends BaseElement {
  static get properties() {
    return {
      label: { type: String },
      activeTab: { type: Number, reflect: true },
      overflow: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.label = "";
    this.activeTab = 0;
    this.overflow = false;
    this.prerenderedChildren = null;
    this.tabs = null;
    this.idSalt = generateIdSalt("web-tab-");

    this.onResize = this.onResize.bind(this);
    this._changeTab = this._changeTab.bind(this);
    this.focusTab = this.focusTab.bind(this);
    this.previousTab = this.previousTab.bind(this);
    this.nextTab = this.nextTab.bind(this);
    this.firstTab = this.firstTab.bind(this);
    this.lastTab = this.lastTab.bind(this);
  }

  render() {
    if (!this.prerenderedChildren) {
      this.prerenderedChildren = [];
      this.tabs = [];
      let i = 1;

      for (const child of this.children) {
        // Set id and aria-labelledby attributes for each panel for a11y.
        this.prerenderedChildren.push(this.panelTemplate(i, child));
        // Get tab label from child data-label attribute
        // and render a tab for each panel.
        const tabLabel = child.getAttribute("data-label");
        this.tabs.push(this.tabTemplate(i, tabLabel));
        i++;
      }
    }

    return html`
      <div
        class="web-tabs__tablist"
        role="tablist"
        aria-label="${this.label || "tabs"}"
      >
        ${this.tabs}
      </div>
      ${this.prerenderedChildren}
    `;
  }

  tabTemplate(i, tabLabel) {
    switch (tabLabel) {
      case "question":
        tabLabel = "Question " + i;
        break;
      case "sample":
        tabLabel = "Sample " + i;
        break;
      case "":
      case null:
      case "bare":
        tabLabel = i;
        break;
    }

    // Need @click so tabs work on iOS Safari
    return html`
      <button
        @click=${this.onFocus}
        @focus=${this.onFocus}
        @keydown=${this.onKeydown}
        class="web-tabs__tab gc-analytics-event"
        role="tab"
        aria-selected="false"
        id="web-tab-${this.idSalt}-${i}"
        aria-controls="web-tab-${this.idSalt}-${i}-panel"
        tabindex="-1"
        data-category="Site-Wide Custom Events"
        data-label="tab, ${tabLabel}"
      >
        <span class="web-tabs__text-label">${tabLabel}</span>
      </button>
    `;
  }

  panelTemplate(i, child) {
    const index = i - 1; // i is 1-indexed
    return html`
      <div
        data-index=${index}
        id="web-tab-${this.idSalt}-${i}-panel"
        class="web-tabs__panel"
        role="tabpanel"
        aria-labelledby="web-tab-${this.idSalt}-${i}"
        hidden
      >
        ${child}
      </div>
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    this.activeTab = 0;
    this.onResize();

    // If Tabs component contains AssessmentQuestion components,
    // listen for requests to navigate to the next tab.
    const questions = this.querySelectorAll("web-question");

    if (!questions) {
      return;
    }

    for (const question of questions) {
      question.addEventListener("request-nav-to-next", this.nextTab);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.onResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.onResize);
  }

  updated(changedProperties) {
    if (changedProperties.has("activeTab")) {
      this._changeTab();
    }
  }

  // Update state of tabs and associated panels.
  _changeTab() {
    /** @type NodeListOf<HTMLButtonElement> */
    const tabs = this.querySelectorAll(".web-tabs__tab");
    /** @type NodeListOf<HTMLDivElement> */
    const panels = this.querySelectorAll(".web-tabs__panel");
    const activeTab = tabs[this.activeTab];
    const activePanel = panels[this.activeTab];

    if (activeTab) {
      for (const tab of tabs) {
        tab.setAttribute("aria-selected", "false");
        tab.setAttribute("tabindex", "-1");
      }

      activeTab.setAttribute("aria-selected", "true");
      activeTab.removeAttribute("tabindex");
    }

    if (activePanel) {
      for (const panel of panels) {
        panel.hidden = true;
      }

      activePanel.hidden = false;
    }
  }

  onResize() {
    const tabs = this.querySelector(".web-tabs__tablist");

    this.overflow = checkOverflow(tabs, "width");
  }

  onFocus(e) {
    const tab = e.currentTarget;
    const tabs = this.querySelectorAll(".web-tabs__tab");
    const index = Array.from(tabs).indexOf(tab);

    // Match behavior specified for Material scrollable tabs:
    // https://material.io/components/tabs/#scrollable-tabs
    tab.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    this.activeTab = index;
  }

  onKeydown(e) {
    /** @type NodeListOf<HTMLButtonElement> */
    const tabs = this.querySelectorAll(".web-tabs__tab");
    const KEYCODE = {
      END: 35,
      HOME: 36,
      LEFT: 37,
      RIGHT: 39,
    };

    switch (e.keyCode) {
      case KEYCODE.RIGHT:
        e.preventDefault();
        this.nextTab();
        break;
      case KEYCODE.LEFT:
        e.preventDefault();
        this.previousTab();
        break;
      case KEYCODE.HOME:
        e.preventDefault();
        this.firstTab();
        break;
      case KEYCODE.END:
        e.preventDefault();
        this.lastTab();
        break;
    }
    tabs[this.activeTab].focus();
  }

  // Helper method to allow other components to focus an arbitrary tab.
  focusTab(index) {
    /** @type NodeListOf<HTMLButtonElement> */
    const tabs = this.querySelectorAll(".web-tabs__tab");

    if (tabs[index]) {
      tabs[index].focus();
    }
  }

  // If previous tab exists, make it active. If not, make last tab active.
  previousTab() {
    const tabs = this.querySelectorAll(".web-tabs__tab");

    if (tabs[this.activeTab - 1]) {
      this.activeTab = this.activeTab - 1;
    } else {
      this.activeTab = tabs.length - 1;
    }
  }

  // If next tab exists, make it active. If not, make first tab active.
  nextTab() {
    const tabs = this.querySelectorAll(".web-tabs__tab");

    this.activeTab = (this.activeTab + 1) % tabs.length || 0;
  }

  // Make first tab active.
  firstTab() {
    this.activeTab = 0;
  }

  // Make last tab active.
  lastTab() {
    const tabs = this.querySelectorAll(".web-tabs__tab");

    this.activeTab = tabs.length - 1;
  }

  /**
   * @param {HTMLElement} node to check
   * @return {number} the index of the tab containing this node, or -1 for none
   */
  indexOfTabByChild(node) {
    /** @type HTMLElement */
    const panel = node.closest('[class="web-tabs__panel"]');
    if (!this.contains(panel)) {
      return -1;
    }
    const index = parseInt(panel.getAttribute("data-index"));
    return isNaN(index) ? -1 : index;
  }
}

customElements.define("web-tabs", Tabs);

export { BaseModalElement as B, generateIdSalt as g };
