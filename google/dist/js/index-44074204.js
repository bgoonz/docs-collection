import {
  s as styleInject,
  B as BaseElement,
  h as html,
  r as render,
  a as BaseStateElement,
  b as openToC,
  d as closeToC,
  t as trackEvent,
} from "./index-79f4e752.js";
import { e as env } from "./store-a85adfb0.js";
import {
  B as BaseModalElement,
  g as generateIdSalt,
} from "./index-e68cd105.js";

var css_248z$7 =
  'web-question {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n}\n\n.web-question__content {\n  display: block;\n  flex: 1 1 0;\n  height: 0;\n  padding: 0 1.5rem 1.5rem;\n  overflow-y: auto;\n}\n@media (min-width: 481px) {\n  .web-question__content {\n    flex: 1 1 auto;\n    height: 25rem;\n  }\n}\n\n.web-question__footer {\n  border-top: 1px solid #dadce0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0.625rem;\n}\n@media (min-width: 481px) {\n  .web-question__footer {\n    padding: 1rem;\n  }\n}\n\n.web-question__cta {\n  overflow: visible;\n}\n\n.web-question__cta::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  align-items: center;\n  background: #018642;\n  border-radius: 50%;\n  color: #fff;\n  content: "check";\n  display: flex;\n  font-size: 18px;\n  height: 24px;\n  justify-content: center;\n  left: calc(-24px - .5rem);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: calc(50% - 12px);\n  transform: scale(0);\n  transition: opacity 0.4s ease, transform 0.2s ease;\n  width: 24px;\n}\n\n[state=completed] .web-question__cta::before {\n  opacity: 1;\n  transform: scale(1);\n}';
styleInject(css_248z$7);

/**
 * Element that renders an assessment question shell.
 * Needs children that extend BaseResponseElement to work corectly.
 *
 * @extends {BaseElement}
 */
class AssessmentQuestion extends BaseElement {
  static get properties() {
    return {
      id: { type: String, reflect: true },
      state: { type: String, reflect: true },
      height: { type: String, attribute: "question-height" }, // used in CSS
    };
  }

  constructor() {
    super();
    this.state = "unanswered";
    this.prerenderedChildren = null;
    this.ctaLabel = "Check";

    this.responseComponentUpdated = this.responseComponentUpdated.bind(this);
    this.reset = this.reset.bind(this);
    this.height = null;
  }

  render() {
    if (!this.prerenderedChildren) {
      this.prerenderedChildren = [];

      for (const child of this.children) {
        this.prerenderedChildren.push(child);
      }
    }

    const heightStyle = this.height ? "height: " + this.height + ";" : "";

    /* eslint-disable indent */
    return html`
      <div class="web-question__content" style="${heightStyle}">
        ${this.prerenderedChildren}
      </div>
      <div class="web-question__footer">
        <span></span>
        <button
          @click="${this.onSubmit}"
          class="w-button w-button--primary web-assessment__button web-question__cta gc-analytics-event"
          data-category="Self-assessments"
          data-label="CTA, ${this.id}"
          ?disabled="${this.state === "unanswered"}"
        >
          ${this.ctaLabel}
        </button>
      </div>
    `;
    /* eslint-enable indent */
  }

  firstUpdated() {
    // Listen to state updates from child response components.
    this.addEventListener("response-update", this.responseComponentUpdated);

    // Listen to contained option selections.
    this.addEventListener("question-option-select", (e) => {
      const ce = /** @type {!CustomEvent} */ (e);
      const { detail: optionIndex, target } = ce;

      // This event comes from the final option that the user selects.
      // Find the index of the response that this input is contained within.
      // We could also use `target.closest("[data-role=response]")` to look _up_ from the option,
      // but we'd still need to find its index.
      let responseIndex = -1;
      /** @type {(import('../ResponseMultipleChoice').ResponseMultipleChoice|import('../ResponseThinkAndCheck').ResponseThinkAndCheck)[]} */
      const responseComponents = Array.from(
        this.querySelectorAll("[data-role=response]")
      );
      for (let i = 0; i < responseComponents.length; ++i) {
        if (responseComponents[i].contains(/** @type {Element} */ (target))) {
          responseIndex = i;
          break;
        }
      }
      if (responseIndex === -1) {
        return;
      }

      // Send an Analytics event manually. We don't want to pipe through the IDs all the way down
      // to each individual option.
      ga("send", "event", {
        eventCategory: "Self-assessments",
        eventAction: "click",
        eventLabel: `${this.id}-response-${responseIndex}-option-${optionIndex}`,
      });
    });
  }

  // Update question state based on state of response components.
  responseComponentUpdated() {
    /** @type {NodeListOf<(import('../ResponseMultipleChoice').ResponseMultipleChoice|import('../ResponseThinkAndCheck').ResponseThinkAndCheck)>} */
    const responseComponents = this.querySelectorAll("[data-role=response]");
    const stateArr = Array.from(responseComponents).map(({ state }) => state);

    if (stateArr.includes("unanswered")) {
      this.state = "unanswered";
    } else if (stateArr.includes("answeredIncorrectly")) {
      this.state = "answeredIncorrectly";
    } else {
      this.state = "answeredCorrectly";
    }
  }

  onSubmit() {
    switch (this.state) {
      case "answeredCorrectly":
        this.updateResponseComponents();
        this.state = "completed";
        this.ctaLabel = this.checkNextQuestion() ? "Next" : "Reset quiz";
        break;
      case "answeredIncorrectly":
        this.updateResponseComponents();
        this.state = "unanswered";
        this.ctaLabel = "Recheck";

        /** @type import('../Tabs').Tabs */
        const tabs = this.closest("web-tabs");
        /** @type import('../Assessment').Assessment */
        const assessment = this.closest("web-assessment");
        if (tabs) {
          // Focus currently active tab since submit button disables
          tabs.focusTab(tabs.activeTab);
        } else if (assessment) {
          // For singleton questions, focus the parent assessment component
          assessment.focus();
        }
        break;
      case "completed":
        const nextQuestion = this.checkNextQuestion();

        if (nextQuestion) {
          this.requestNextQuestionNav();
        } else {
          this.requestAssessmentReset();
        }
    }
  }

  updateResponseComponents() {
    /** @type {NodeListOf<(import('../ResponseMultipleChoice').ResponseMultipleChoice|import('../ResponseThinkAndCheck').ResponseThinkAndCheck)>} */
    const responseComponents = this.querySelectorAll("[data-role=response]");

    for (const responseComponent of responseComponents) {
      responseComponent.submitResponse();
    }
  }

  // TODO(samthor): This should maybe emit a custom event that the Tabs component responds to?
  checkNextQuestion() {
    const panel = this.closest(".web-tabs__panel");

    if (!panel) {
      return;
    }

    return panel.nextElementSibling;
  }

  requestNextQuestionNav() {
    const event = new Event("request-nav-to-next");

    this.dispatchEvent(event);
  }

  requestAssessmentReset() {
    const event = new Event("request-assessment-reset", { bubbles: true });

    this.dispatchEvent(event);
  }

  // Helper function to allow other components to reset the question
  // to its unanswered state.
  reset() {
    /** @type {NodeListOf<(import('../ResponseMultipleChoice').ResponseMultipleChoice|import('../ResponseThinkAndCheck').ResponseThinkAndCheck)>} */
    const responseComponents = this.querySelectorAll("[data-role=response]");
    const questionContent = this.querySelector(".web-question__content");

    for (const responseComponent of responseComponents) {
      responseComponent.reset();
    }
    this.ctaLabel = "Check";
    questionContent.scrollTop = 0;
  }
}

customElements.define("web-question", AssessmentQuestion);

var css_248z$6 =
  '@media (min-width: 865px) {\n  web-codelab .w-sizer.w-test {\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n  }\n  web-codelab .w-sizer.w-test::after {\n    content: "";\n    background: #eb0f00;\n    height: 2px;\n  }\n}\nweb-codelab .w-sizer .w-aside {\n  margin: 16px;\n}\n@media (min-width: 865px) {\n  web-codelab .w-sizer {\n    position: sticky;\n    top: 80px;\n    height: calc(100vh - 96px);\n  }\n}\nweb-codelab .web-codelab__headline {\n  padding-top: 0;\n}\nweb-codelab .web-codelab__glitch {\n  flex: 1;\n  order: -1;\n}\n@media (min-width: 865px) {\n  web-codelab .web-codelab__glitch {\n    order: initial;\n  }\n}';
styleInject(css_248z$6);

/**
 * @fileoverview Element that renders codelab expandable/collapsible codelab
 * instructions and an embedded Glitch iframe.
 */

/**
 * Render codelab instructions and Glitch
 * @extends {BaseElement}
 * @final
 */
class Codelab extends BaseElement {
  static get properties() {
    return {
      // Name of the glitch to render in the iframe.
      glitch: { type: String },
      // The file to show when the Glitch renders.
      path: { type: String },
      // Whether we are a desktop-sized browser or not.
      _isDesktop: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.glitch = "";
    this.path = "index.html";
    // _isDesktop has no default value as it's only correctly set between connected/disconnected
    // callbacks via the MediaQueryList's listener.

    this._mql = window.matchMedia("(min-width: 865px)");
    this._toggleDesktop = () => (this._isDesktop = this._mql.matches);
  }

  connectedCallback() {
    super.connectedCallback();
    this._mql.addListener(this._toggleDesktop);
    this._toggleDesktop();
  }

  disconnectedCallback() {
    super.connectedCallback();
    this._mql.removeListener(this._toggleDesktop);
  }

  /**
   * Normally LitElement will remove any light DOM children that are not
   * slotted when we call render().
   * Because we don't use slots, and we _do_ want to preserve this element's
   * light DOM children (they hold the codelab instructions) we create a new
   * renderRoot for LitElement.
   * https://lit-element.polymer-project.org/guide/templates#renderroot
   * This will render the glitch element as a sibling to the existing light
   * DOM children.
   */
  createRenderRoot() {
    const container = /** @type this */ (
      /** @type Element */ (document.createElement("div"))
    );
    container.className = "web-codelab__glitch";
    this.appendChild(container);
    return container;
  }

  glitchSrc(embed) {
    let url = "https://glitch.com/embed/?attributionHidden=true";

    if (this.path) {
      url += `&path=${encodeURI(this.path)}`;
    }

    if (embed) {
      url += `#!/embed/${encodeURI(this.glitch)}`;
    }

    return url;
  }

  render() {
    if (!this.glitch) {
      return html``;
    }
    const isTest = env === "test";

    // If this is a test, always show the warning. Percy snapshots our DOM at a
    // low resolution before resizing it, so we can't rely on _isDesktop being
    // different for smaller or larger tests. The `w-test` ensures we test the
    // sticky behavior of this element.
    if (!this._isDesktop || isTest) {
      const message = `This Glitch isn't available on small screens`;
      return html`
        <div class="w-sizer ${""}">
          <div class="w-aside w-aside--warning">
            <p>
              <strong>Warning:</strong> ${message},
              <a target="_blank" rel="noopener" href=${this.glitchSrc(false)}>
                open it in a new tab.</a
              >
            </p>
          </div>
        </div>
      `;
    }

    return html`
      <div class="w-sizer">
        <iframe
          allow="geolocation; microphone; camera; midi; encrypted-media"
          alt="Embedded glitch ${this.glitch}"
          title="Embedded glitch ${this.glitch}"
          src="${this.glitchSrc(true)}"
          style="height: 100%; width: 100%; border: 0;"
        >
        </iframe>
      </div>
    `;
  }
}

customElements.define("web-codelab", Codelab);

var css_248z$5 =
  '.web-assessment__launcher {\n  display: flex;\n  flex-direction: column;\n  margin: 3em 0;\n}\n\n.web-assessment__button {\n  height: 3rem;\n}\n\nweb-assessment {\n  display: none;\n  flex-direction: column;\n}\nweb-assessment[animatable] {\n  animation: 0.25s ease reverse modal-slideup;\n}\nweb-assessment[animatable][open] {\n  animation: 0.25s ease modal-slideup;\n}\nweb-assessment.unresolved * {\n  display: none !important;\n}\n@media (min-width: 481px) {\n  web-assessment {\n    display: flex;\n    margin: 5em 0 !important;\n    padding: 0 !important;\n  }\n}\n\n@keyframes modal-slideup {\n  0% {\n    transform: translateY(40%);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n.web-assessment__open,\n.web-assessment__open:hover,\n.web-assessment__open:active,\n.web-assessment__open:focus {\n  background: #018642;\n}\n\n.web-assessment__close {\n  position: absolute;\n  right: 0.5rem;\n  top: 0.75rem;\n}\n\n.web-assessment__lockup {\n  color: #018642;\n}\n\n.web-assessment__lockup::before {\n  content: "school";\n}\n\n.web-assessment--singleton .web-assessment__header {\n  border-bottom: 1px solid #dadce0;\n}\n\n.web-assessment__content {\n  display: flex;\n  flex: 1;\n}\n\nweb-assessment[open],\nweb-assessment[animatable] {\n  background: #fff;\n  bottom: 0;\n  display: flex;\n  left: 0;\n  margin: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 250;\n}\nweb-assessment[open] .web-assessment__header,\nweb-assessment[animatable] .web-assessment__header {\n  padding: 1.5rem 3.5rem 1rem 1.5rem;\n}\nweb-assessment[open] .web-assessment__set-leader,\nweb-assessment[animatable] .web-assessment__set-leader {\n  display: none;\n}\n\n@media (min-width: 481px) {\n  .web-assessment__launcher {\n    display: none;\n  }\n\n  .web-assessment__close {\n    display: none;\n  }\n\n  .web-assessment__header {\n    padding: 1.5rem 1.5rem 1rem;\n  }\n}';
styleInject(css_248z$5);

/*
 * Copyright 2020 Google LLC
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
 * Element that renders a self-assessment callout.
 * @extends {BaseModalElement}
 * @final
 */
class Assessment extends BaseModalElement {
  static get properties() {
    return {
      modal: { attribute: "aria-modal", reflect: true },
      open: { type: Boolean, reflect: true },
      animatable: { type: Boolean, reflect: true },
      overflow: { type: Boolean, reflect: true },
      parentModal: { type: String, reflect: true, attribute: "parent-modal" },
    };
  }

  constructor() {
    super();
    this.modal = false;
    this._placeholder = null;
    this.breakpoint_ = matchMedia("(min-width: 481px)");

    this.onAssessmentAnimationEnd = this.onAssessmentAnimationEnd.bind(this);
    this.onAssessmentResize = this.onAssessmentResize.bind(this);
    this.reset = this.reset.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
    this.openAssessment = this.openAssessment.bind(this);
    this.closeAssessment = this.closeAssessment.bind(this);
  }

  render() {
    if (!this.prerenderedChildren) {
      this.prerenderedChildren = [];
      this.setLeader = [];

      for (const child of this.children) {
        if (child.classList.contains("web-assessment__set-leader")) {
          this.setLeader.push(child);
        } else {
          this.prerenderedChildren.push(child);
        }
      }
    }

    return html`
      <div class="w-callout__header web-assessment__header">
        <h2 class="w-callout__lockup web-assessment__lockup">
          Check your understanding
        </h2>
        ${this.setLeader}
        <button
          @click="${this.onCloseClick}"
          class="w-button--icon w-button--round web-assessment__close"
          data-icon="close"
        >
          <span role="tooltip" class="w-tooltip">Close</span>
        </button>
      </div>
      ${this.prerenderedChildren}
    `;
  }

  firstUpdated() {
    this.classList.remove("unresolved");
    // Override BaseModalElement's inert behavior since Assessment
    // is visible on desktop in closed state.
    // (display: none used to remove it from the tab order when closed on mobile.)
    this.inert = false;
    // Render the launcher that appears in closed state on mobile.
    this.renderLauncher();
    // Listen to reset requests from child question components.
    this.addEventListener("request-assessment-reset", this.reset);

    // Get our position within all assessments on the page, and use this as the
    // basis for our Analytics ID.
    const assessments = document.querySelectorAll("web-assessment");
    const idx = [...assessments].indexOf(this);
    this.id = "web-assessment-" + idx;

    const questions = Array.from(this.querySelectorAll("web-question"));
    questions.forEach((question, i) => {
      question.setAttribute("id", `${this.id}-question-${i}`);
    });
  }

  // Add unique IDs to passed elements
  addUniqueID(elements, target) {
    const idx = [...elements].indexOf(target);

    if (target.id === "undefined") {
      target.id = idx;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    // Close modal if viewport is >481 px so document isn't inert on desktop
    this.breakpoint_.addListener(this.onAssessmentResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.breakpoint_.removeListener(this.onAssessmentResize);
  }

  renderLauncher() {
    const launcher = document.createElement("div");
    const contentTemplate = (setLeader) => html`
      <div class="w-callout__header web-assessment__header">
        <h2 class="w-callout__lockup web-assessment__lockup">
          Check your understanding
        </h2>
        <div class="w-callout__blurb web-assessment__set-leader">
          ${setLeader}
        </div>
      </div>
      <button
        @click="${this.onOpenClick}"
        class="w-button w-button--primary web-assessment__button web-assessment__open"
      >
        Open quiz
      </button>
    `;
    // lit-element prevents children from being duplicated,
    // so grab setLeader text content.
    const text = this.setLeader[0] ? this.setLeader[0].textContent : "";
    const content = contentTemplate(text);

    render(content, launcher);
    launcher.className = "web-assessment__launcher";
    this.before(launcher);
  }

  onOpenClick() {
    this.open = true;
  }

  onCloseClick() {
    this.open = false;
  }

  updated(changedProps) {
    if (changedProps.has("open")) {
      this.modal = this.open;
      if (this.open) {
        this.openAssessment();
      } else {
        this.addEventListener("animationend", this.closeAssessment, {
          once: true,
        });
      }
    }
  }

  openAssessment() {
    // Get a ref to the assessment's previous sibling
    // so the assessment can be reinserted below it when it's closed.
    this._placeholder = this.previousElementSibling;

    // Since the assessment is visible when closed on desktop,
    // wait to set the dialog role until it's open.
    this.setAttribute("role", "dialog");
    this.addEventListener("animationend", this.onAssessmentAnimationEnd, {
      once: true,
    });

    // Move the assessment to the end of the body so it's not
    // inside an inert element.
    document.body.append(this);
  }

  closeAssessment() {
    // Since the assessment is visible when closed on desktop,
    // override BaseModalElement's inert behavior.
    // (display: none used to remove it from the tab order when closed on mobile.)
    this.inert = false;
    // Move assessment back to its original location in case viewport
    // becomes larger than the mobile breakpoint.
    if (this._placeholder) {
      this._placeholder.after(this);
      this._placeholder = null;
    }
  }

  onAssessmentAnimationEnd() {
    /** @type import('../Tabs').Tabs */
    const tabs = this.querySelector("web-tabs");

    if (!tabs) {
      return;
    }

    // Apply overflow class to tabs if needed.
    tabs.onResize();
    // Override default modal focus behavior so active tab is always in viewport
    // when assessment is opened.
    tabs.focusTab(tabs.activeTab);
  }

  // When viewport is wider than mobile breakpoint
  // (src/styles/tools/_breakpoints.scss)
  // close modal and remove dialog role
  // so things don't break if a mobile user switches to landscape orientation
  // while the assessment modal is open.
  onAssessmentResize() {
    this.open = false;
    this.removeAttribute("role");
  }

  // Reset assessment to initial state.
  reset() {
    /** @type import('../Tabs').Tabs */
    const tabs = this.querySelector("web-tabs");
    /** @type NodeListOf<import('../AssessmentQuestion').AssessmentQuestion> */
    const questions = this.querySelectorAll("web-question");

    for (const question of questions) {
      question.reset();
    }

    if (tabs) {
      tabs.focusTab(0);
    }
  }
}

customElements.define("web-assessment", Assessment);

var css_248z$4 =
  "[state=completed] [data-role=option],\n[data-role=option][data-submitted] {\n  background: #f1f3f4;\n  border-radius: 3px;\n  cursor: initial;\n}\n\n[data-role=option][data-correct][data-submitted] {\n  background: rgba(1, 134, 66, 0.08);\n  box-shadow: inset 0 0 0 1px #018642;\n}\n\n.web-response__correctness-flag {\n  color: #5f6368;\n  display: none;\n  padding: 0.1875rem 0 0.5rem;\n}\n\n[state=completed] .web-response__correctness-flag,\n[data-role=option][data-submitted] .web-response__correctness-flag {\n  display: block;\n}\n\n[data-role=option][data-submitted] .web-response__correctness-flag {\n  color: #e51661;\n}\n\n[data-role=option][data-submitted][data-correct] .web-response__correctness-flag {\n  color: #018642;\n}\n\n.web-response__option-rationale {\n  color: #5f6368;\n  display: none;\n  font-size: 0.833em;\n  padding: 0.5rem 0 0;\n}\n\n[state=completed] .web-response__option-rationale,\n[data-submitted] .web-response__option-rationale {\n  display: block;\n}\n\n.web-response__option-rationale > *:first-child {\n  margin-top: 0;\n}\n\n.web-response__option-rationale > *:last-child {\n  margin-bottom: 0;\n}\n\n.web-response__option-rationale p {\n  font-size: 1em;\n  line-height: 1.5;\n}\n\n.web-response__option-rationale ol > li,\n.web-response__option-rationale ul > li {\n  font-size: 1em;\n}\n\n.web-response__option-rationale ol > li::before {\n  margin-top: 0.25em;\n}";
styleInject(css_248z$4);

/*
 * Copyright 2020 Google LLC
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
 * Base element used by all self-assessment response components.
 *
 * @extends {BaseElement}
 */
class BaseResponseElement extends BaseElement {
  static get properties() {
    return {
      state: { type: String, reflect: true },
      correctAnswer: { attribute: "correct-answer", type: String },
    };
  }

  constructor() {
    super();
    this.state = "unanswered";
    this.correctAnswer = "";
    this.maxSelections = null;
    this.minSelections = null;

    this.deselectOption = this.deselectOption.bind(this);
    this.enforceCardinality = this.enforceCardinality.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.reset = this.reset.bind(this);
  }

  /**
   * Returns an object containing the minimum and maximum allowed selections
   * for a response component based on the passed cardinality string.
   * @param {string} cardinality A string indicating the cardinality of the response.
   *                 May be in the format n, n+, or n-m.
   * @return {Object} An object containing the min and max allowed selections.
   */
  static getSelectionRange(cardinality) {
    let min = 1;
    let max = null;

    if (cardinality === "1");
    else if (/^\d+$/.test(cardinality)) {
      min = parseInt(cardinality);
      max = min;
    } else if (/^\d+\+$/.test(cardinality)) {
      min = parseInt(cardinality);
      max = 0;
    } else if (/^\d-\d+$/.test(cardinality)) {
      [min, max] = cardinality.split("-").map(parseInt);
    }
    // Input errors handled in src/site/_includes/components/Assessment.js

    return { min, max };
  }

  firstUpdated() {
    this.identifyCorrectOptions();
  }

  updated() {
    this.reportUpdate();
  }

  reportUpdate() {
    const event = new CustomEvent("response-update", {
      bubbles: true,
      detail: {
        responseState: this.state,
      },
    });

    this.dispatchEvent(event);
  }

  // Add the data-correct attribute to correct options
  // so they show as correct when they're submitted.
  identifyCorrectOptions() {
    if (!this.correctAnswer) {
      return;
    }

    // Input errors for correctAnswer handled in
    // src/site/_includes/components/Assessment.js
    const correctAnswersArr = this.correctAnswer.split(",").map(Number);
    const options = this.querySelectorAll("[data-role=option]");

    for (let i = 0; i < options.length; i++) {
      if (correctAnswersArr.includes(i)) {
        options[i].setAttribute("data-correct", "");
      }
    }
  }

  // Reports whether response component's minimum selections have been met
  // and disables unselected options when maximum selection is reached.
  // NOTE: Assumes client components handle the data-selected attribute.
  // (Necessary because selection mechanism will vary by response type.)
  enforceCardinality() {
    const options = this.querySelectorAll("[data-role=option]");
    let numSelected = 0;

    for (const option of options) {
      if (option.hasAttribute("data-selected")) {
        numSelected++;
      }
    }

    // Check whether minimum selections have been made
    // and whether selections are correct.
    // (If minimum selections have been made, AssessmentQuestion CTA enables.)
    const isAnsweredCorrectly = this.checkIfCorrect();

    if (numSelected >= this.minSelections && isAnsweredCorrectly) {
      this.state = "answeredCorrectly";
    } else if (numSelected >= this.minSelections && !isAnsweredCorrectly) {
      this.state = "answeredIncorrectly";
    } else {
      this.state = "unanswered";
    }

    // Disable remaining unselected options
    // when the maximum number of selections is reached.
    // Break if there is no max selection.
    if (this.maxSelections === 0 || this.maxSelections === null) {
      return;
    }

    for (const option of options) {
      const isSelected = option.hasAttribute("data-selected");
      const hasBeenChecked = option.hasAttribute("data-submitted");

      if (numSelected < this.maxSelections && !isSelected && !hasBeenChecked) {
        this.enableOption(option);
      } else if (!isSelected && !hasBeenChecked) {
        this.disableOption(option);
      }
    }
  }

  // Return true if selections include all correct options.
  // NOTE: This considers responses that include all correct options
  // AND some incorrect options as correct--because it's not clear what else
  // we'd do in that case other than reveal the full correct answer.
  checkIfCorrect() {
    const correctAnswersArr = this.correctAnswer.split(",").map(Number);
    const options = this.querySelectorAll("[data-role=option]");
    const selections = [];

    options.forEach((el, index) => {
      if (el.hasAttribute("data-selected")) {
        selections.push(index);
      }
    });

    return correctAnswersArr.every((val) => selections.includes(val));
  }

  // Updates option states when response component is submitted.
  // NOTE: Assumes client components have a deselectOption() method.
  // (Necessary because selection mechanisms will vary by response type.)
  submitResponse() {
    const options = this.querySelectorAll("[data-role=option]");

    for (const option of options) {
      const isSelected = option.hasAttribute("data-selected");
      const isCorrect = option.hasAttribute("data-correct");
      const isSubmitted = option.hasAttribute("data-submitted");

      if (this.state === "answeredIncorrectly") {
        if (isSelected && isCorrect) {
          option.setAttribute("data-submitted", "");
          this.disableOption(option);
        } else if (isSelected && !isCorrect) {
          option.setAttribute("data-submitted", "");
          this.disableOption(option);
          if (typeof this.deselectOption === "function") {
            this.deselectOption(option);
          }
        } else if (!isSelected && !isSubmitted) {
          this.enableOption(option);
        }
      } else if (this.state === "answeredCorrectly") {
        this.disableOption(option);
        if (isSelected) {
          option.setAttribute("data-submitted", "");
        }
      }
    }
    // Force responseComponent state change on next option selection
    // so AssessmentQuestion state updates.
    if (this.state === "answeredIncorrectly") {
      this.state = "unanswered";
    }
  }

  // Helper function to allow other components to reset the response
  // to its unanswered state.
  // NOTE: Assumes client components have a deselectOption() method.
  // (Necessary because selection mechanisms will vary by response type.)
  reset() {
    const options = this.querySelectorAll("[data-role=option]");

    this.state = "unanswered";
    for (const option of options) {
      option.removeAttribute("data-submitted");
      if (typeof this.deselectOption === "function") {
        this.deselectOption(option);
      }
      this.enableOption(option);
    }
  }

  // @ts-ignore-start
  deselectOption(option) {} // eslint-disable-line no-unused-vars
  // @ts-ignore-end

  disableOption(option) {
    const inputs = option.querySelectorAll("input, button");

    option.setAttribute("disabled", "");
    for (const input of inputs) {
      input.disabled = true;
    }
  }

  enableOption(option) {
    const inputs = option.querySelectorAll("input, button");

    option.removeAttribute("disabled");
    for (const input of inputs) {
      input.disabled = false;
    }
  }
}

var css_248z$3 =
  'web-response-mc .web-response-mc__selector {\n  border-color: #018642;\n}\nweb-response-mc input[type=radio] ~ .web-response-mc__selector::after {\n  border-color: #018642;\n}\n@media (hover: hover) {\n  web-response-mc .web-response-mc__option:hover .web-response-mc__selector::before,\nweb-response-mc .web-response-mc__input:focus ~ .web-response-mc__selector::before {\n    background: #e8f5e9;\n  }\n}\nweb-response-mc .web-response-mc__option:active .web-response-mc__selector::before {\n  background: #c8e6c9;\n}\nweb-response-mc input[type=checkbox]:checked ~ .web-response-mc__selector {\n  background: #018642;\n}\n\n[state=completed] .web-response-mc__option,\n.web-response-mc__option[data-submitted] {\n  align-items: flex-start;\n  justify-self: stretch;\n  padding: 1rem 1rem 1.5rem;\n}\n\n[state=completed] .web-response-mc__input[disabled] ~ .web-response-mc__selector {\n  background: #80868b;\n  border-color: #80868b;\n  transition: none;\n}\n\n.web-select-group__option[data-submitted] .web-response-mc__input ~ .web-response-mc__selector {\n  background: #e51661 !important;\n  border-color: #e51661 !important;\n  transition: none;\n}\n\n.web-select-group__option[data-submitted][data-correct] .web-response-mc__input ~ .web-response-mc__selector {\n  background: #018642 !important;\n  border-color: #018642 !important;\n  transition: none;\n}\n\n[state=completed] .web-response-mc__selector::before,\n.web-select-group__option[data-submitted] .web-response-mc__selector::before {\n  background: none !important;\n}\n\n[state=completed] .web-response-mc__input ~ .web-response-mc__selector::after,\n.web-select-group__option[data-submitted] .web-response-mc__input ~ .web-response-mc__selector::after {\n  border: 0;\n  content: "remove";\n  height: initial;\n  transform: initial;\n  transition: none;\n  width: initial;\n}\n\n.web-select-group__option[data-submitted] .web-response-mc__input ~ .web-response-mc__selector::after {\n  content: "clear";\n}\n\n.web-select-group__option[data-submitted][data-correct] .web-response-mc__input ~ .web-response-mc__selector::after {\n  content: "check";\n}\n\n[state=completed] .web-select-group__option[disabled],\n.web-select-group__option[data-submitted][disabled] {\n  pointer-events: auto;\n}\n\n[state=completed] .web-select-group__option[disabled] .web-select-group__option-content,\n.web-select-group__option[data-submitted][disabled] .web-select-group__option-content {\n  opacity: 1;\n}';
styleInject(css_248z$3);

class ResponseMultipleChoice extends BaseResponseElement {
  static get properties() {
    return {
      id: { type: String, reflect: true },
      cardinality: { type: String }, // Allows a range, so it's a string
      columns: { type: Boolean },
      state: { type: String, reflect: true },
      correctAnswer: { attribute: "correct-answer", type: String },
    };
  }

  constructor() {
    super();
    this.prerenderedChildren = null;
    this.options = null;
    this.optionContents = null;
    this.rationales = null;
    this.minSelections = null;
    this.maxSelections = null;
    this.selectType = null;
    this.cardinality = null;
    this.columns = false;

    this.onOptionInput = this.onOptionInput.bind(this);
    this.deselectOption = this.deselectOption.bind(this);
    this.updateSelections = this.updateSelections.bind(this);

    // Used to ensure grouping of radio buttons. Just needs to be unique.
    this._formName = generateIdSalt("web-response-mc-form-");
  }

  render() {
    const correctArr = this.correctAnswer.split(",").map(Number);
    this.selectType = this.cardinality === "1" ? "radio" : "checkbox";
    const selectionRange = BaseResponseElement.getSelectionRange(
      this.cardinality
    );

    this.minSelections = selectionRange.min;
    this.maxSelections = selectionRange.max;

    if (!this.prerenderedChildren) {
      this.prerenderedChildren = [];
      this.options = [];
      this.optionContents = [];
      this.rationales = [];

      for (const child of this.children) {
        const role = child.getAttribute("data-role");

        switch (role) {
          case "option":
            this.optionContents.push(child);
            break;
          case "rationale":
            this.rationales.push(child);
            break;
          default:
            this.prerenderedChildren.push(child);
        }
      }

      for (let i = 0; i < this.optionContents.length; i++) {
        const isCorrect = correctArr.includes(i);

        this.options.push(
          this.optionTemplate(
            this.optionContents[i],
            this.rationales[i],
            isCorrect
          )
        );
      }
    }

    /* eslint-disable indent */
    return html`
      ${this.prerenderedChildren}
      <fieldset
        class="web-select-group web-response-mc"
        ?columns="${this.columns}"
      >
        <div class="web-select-group__options-wrapper">
          ${this.options.map(
            (option, i) =>
              html`
                <label
                  class="web-select-group__option web-response-mc__option"
                  data-role="option"
                >
                  <input
                    @input=${this.onOptionInput}
                    @click=${this.onOptionClick}
                    class="web-select-group__input web-response-mc__input gc-analytics-event"
                    type="${this.selectType}"
                    name="web-response-mc-form-${this._formName}"
                    value="${i}"
                  />
                  <span
                    class="web-select-group__selector web-response-mc__selector"
                  ></span>
                  <span class="web-select-group__option-content">
                    ${option}
                  </span>
                </label>
              `
          )}
        </div>
      </fieldset>
    `;
    /* eslint-enable indent */
  }

  optionTemplate(content, rationale, isCorrect) {
    const flag = document.createElement("div");

    flag.className = "web-response__correctness-flag";
    if (isCorrect) {
      flag.textContent = "Correct";
    } else {
      flag.textContent = "Incorrect";
    }
    content.prepend(flag);
    rationale.className = "web-response__option-rationale";
    content.append(rationale);

    // Remove data-role since it's being applied to the option label
    // in render().
    content.removeAttribute("data-role");

    return content;
  }

  firstUpdated() {
    super.firstUpdated();
  }

  onOptionInput(e) {
    this.updateSelections(e);
    this.enforceCardinality();
  }

  /**
   *
   * @param {WMouseEvent<HTMLInputElement>} e
   */
  onOptionClick(e) {
    const target = e.target;
    const index = Number(target.value);

    const ce = new CustomEvent("question-option-select", {
      detail: index,
      bubbles: true,
    });
    this.dispatchEvent(ce);
  }

  updateSelections(e) {
    const options = this.querySelectorAll("[data-role=option]");
    const currentOption = e.target.closest("[data-role=option]");

    if (e.target.checked) {
      if (this.cardinality === "1") {
        for (const option of options) {
          option.removeAttribute("data-selected");
        }
      }
      currentOption.setAttribute("data-selected", "");
    } else {
      currentOption.removeAttribute("data-selected");
    }
  }

  // Helper function to allow BaseResponseElement to deselect options as needed.
  deselectOption(option) {
    option.removeAttribute("data-selected");
    option.querySelector("input").checked = false;
  }
}

customElements.define("web-response-mc", ResponseMultipleChoice);

var css_248z$2 =
  "[state=completed] .web-response-tac__option-rationale {\n  font: 400 12px / 1.5 Segoe UI, system-ui, -apple-system, sans-serif;\n  background: rgba(1, 134, 66, 0.08);\n  border-radius: 3px;\n  color: #202124;\n  display: block;\n  line-height: 1.778 !important;\n  padding: 1.125rem;\n}\n@media (min-width: 241px) {\n  [state=completed] .web-response-tac__option-rationale {\n    font: 400 14px / 1.5 Segoe UI, system-ui, -apple-system, sans-serif;\n  }\n}\n@media (min-width: 321px) {\n  [state=completed] .web-response-tac__option-rationale {\n    font: 400 16px / 1.5 Segoe UI, system-ui, -apple-system, sans-serif;\n  }\n}";
styleInject(css_248z$2);

class ResponseThinkAndCheck extends BaseResponseElement {
  constructor() {
    super();
    this.prerenderedChildren = null;
    this.option = null;

    this.reset = this.reset.bind(this);
  }

  render() {
    if (!this.prerenderedChildren) {
      this.prerenderedChildren = [];
      this.option = [];

      for (const child of this.children) {
        if (child.getAttribute("data-role") === "rationale") {
          // TACs are a weird response type because they don't have any options.
          // So, to avoid complicating the site/_includes/components/Assessment.js rendering logic,
          // set the data-role here so TACs work with
          // the BaseResponseElement's showOptions() method.
          child.setAttribute("data-role", "option");
          child.className =
            "web-response__option-rationale web-response-tac__option-rationale";
          this.option.push(child);
        } else {
          this.prerenderedChildren.push(child);
        }
      }
    }

    return html`${this.prerenderedChildren} ${this.option}`;
  }

  connectedCallback() {
    super.connectedCallback();
    // Unlike other response types,
    // Think-and-checks don't have any options,
    // so they can only be answeredCorrectly (default) or completed.
    this.state = "answeredCorrectly";
  }

  // Override BaseResponseElement's reset() method
  // since Think-and-checks have no options
  // and so are answeredCorrectly by default.
  reset() {
    super.reset();
    this.state = "answeredCorrectly";
  }
}

customElements.define("web-response-tac", ResponseThinkAndCheck);

var css_248z$1 =
  '.web-select-group {\n  border: 0;\n  margin: 1.5rem 0;\n  padding: 0;\n}\n\n.web-select-group__options-wrapper {\n  display: grid;\n  gap: 1em;\n  justify-items: start;\n}\n\n[columns] > fieldset > .web-select-group__options-wrapper {\n  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));\n  justify-items: stretch;\n}\n\n.web-select-group__option {\n  font: 400 13.5px / 1.5555555556 Segoe UI, system-ui, -apple-system, sans-serif;\n  margin-top: 27px;\n  margin-bottom: 27px;\n  -webkit-tap-highlight-color: transparent;\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  line-height: 1.5 !important;\n  margin: 0 !important;\n  padding: 0 1rem;\n  position: relative;\n  z-index: 1;\n}\n@media (min-width: 241px) {\n  .web-select-group__option {\n    font: 400 15px / 1.8666666667 Segoe UI, system-ui, -apple-system, sans-serif;\n    margin-top: 31.5px;\n    margin-bottom: 31.5px;\n  }\n}\n@media (min-width: 321px) {\n  .web-select-group__option {\n    font: 400 18px / 1.7777777778 Segoe UI, system-ui, -apple-system, sans-serif;\n    margin-top: 36px;\n    margin-bottom: 36px;\n  }\n}\n\n.w-selectgroup__option--standalone {\n  justify-content: center;\n}\n\n.web-select-group__option[disabled] {\n  pointer-events: none;\n}\n\n.web-select-group__option-content {\n  transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.web-select-group__option[disabled] .web-select-group__option-content {\n  opacity: 0.5;\n}\n\n.web-select-group__input {\n  cursor: inherit;\n  left: 0;\n  margin: 0;\n  opacity: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n}\n\n.web-select-group__selector {\n  align-items: center;\n  border: 2px solid #3740ff;\n  border-radius: 2px;\n  display: inline-flex;\n  flex: 0 0 auto;\n  height: 18px;\n  justify-content: center;\n  margin: 0.4375rem 1.5625rem 0.4375rem 0.3125rem;\n  position: relative;\n  transition: border 0.12s cubic-bezier(0, 0, 0.2, 1), background 0.12s cubic-bezier(0, 0, 0.2, 1);\n  width: 18px;\n}\n\n.w-selectgroup__option--standalone ~ .w-selectgroup__selector {\n  margin: 0.4375rem;\n}\n\ninput[type=radio] ~ .web-select-group__selector {\n  border-radius: 50%;\n  height: 20px;\n  margin: 0.375rem 1.5rem 0.375rem 0.25rem;\n  width: 20px;\n}\n\n.w-selectgroup__option--standalone input[type=radio] ~ .w-selectgroup__selector {\n  margin: 0.375rem;\n}\n\n.web-select-group__selector::before {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  content: "";\n  display: block;\n  height: 40px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: background 0.12s cubic-bezier(0, 0, 0.2, 1), border 0.12s cubic-bezier(0, 0, 0.2, 1);\n  width: 40px;\n  z-index: -1;\n}\n\n.web-select-group__selector::after {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  color: #fff;\n  content: "";\n  display: block;\n  font-size: 18px;\n}\n\ninput[type=radio] ~ .web-select-group__selector::after {\n  border: 5px solid #3740ff;\n  border-radius: 50%;\n  height: 0;\n  transform: scale(0);\n  transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1);\n  width: 0;\n}\n\n@media (hover: hover) {\n  .web-select-group__option:hover .web-select-group__selector::before,\n.web-select-group__input:focus ~ .web-select-group__selector::before {\n    background: rgba(55, 64, 255, 0.11);\n  }\n}\n.web-select-group__option:active .web-select-group__selector::before {\n  background: rgba(55, 64, 255, 0.26);\n}\n\n.web-select-group__input:focus ~ .web-select-group__selector::before {\n  border-color: #3740ff;\n}\n\n.js-focus-visible .web-select-group__input:focus:not(.focus-visible) ~ .web-select-group__selector::before {\n  border-color: transparent;\n}\n\ninput[type=radio]:checked ~ .web-select-group__selector::after {\n  transform: scale(1);\n}\n\ninput[type=checkbox]:checked ~ .web-select-group__selector {\n  background: #3740ff;\n}\n\ninput[type=checkbox]:checked ~ .web-select-group__selector::after {\n  content: "check";\n}\n\n.web-select-group__input[disabled] ~ .web-select-group__selector {\n  border-color: #bdc1c6;\n}\n\ninput[type=checkbox][disabled]:checked ~ .web-select-group__selector {\n  background: #bdc1c6;\n}\n\n.web-select-group__input[disabled] ~ .web-select-group__selector::after {\n  border-color: #bdc1c6;\n}';
styleInject(css_248z$1);

/**
 * Element that renders a radio group or checkbox group.
 *
 * @extends {BaseElement}
 */
class SelectGroup extends BaseElement {
  static get properties() {
    return {
      type: { type: String },
      prefix: { type: String },
      columns: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.idSalt = generateIdSalt("web-select-group-");
    this.selectors = null;
    this.type = null;
    this.prefix = null;
    this.columns = false;
  }

  render() {
    if (!this.prefix) {
      this.prefix = "";
    }

    if (!this.selectors) {
      this.selectors = [];

      for (let i = 0; i < this.children.length; i++) {
        this.selectors.push(
          this.selectorTemplate(i, this.children[i], this.type, this.prefix)
        );
      }
    }

    return html`
      <fieldset
        class="web-select-group ${this.prefix}"
        ?columns="${this.columns}"
      >
        <div class="web-select-group__options-wrapper">${this.selectors}</div>
      </fieldset>
    `;
  }

  selectorTemplate(i, content, type, prefix) {
    let labelClass = "";
    let inputClass = "";
    let selectorClass = "";

    if (prefix) {
      labelClass = prefix + "__option";
      inputClass = prefix + "__input";
      selectorClass = prefix + "__selector";
    }

    return html`
      <label
        class="web-select-group__option ${labelClass}"
        data-category="Site-Wide Custom Events"
        data-label="${type}, web-select-group-${this.idSalt}-${i}"
      >
        <input
          @change="${this.onChange}"
          class="web-select-group__input ${inputClass}"
          type="${type}"
          name="web-select-group-${this.idSalt}"
          value="${i}"
        />
        <span class="web-select-group__selector ${selectorClass}"></span>
        <span class="web-select-group__option-content">${content}</span>
      </label>
    `;
  }

  onChange() {
    this.reportSelections();
  }

  // Tell parent components how many selections have been made.
  reportSelections() {
    const inputs = this.querySelectorAll("input");
    let count = 0;

    for (const input of inputs) {
      if (input.checked) {
        count++;
      }
    }

    const event = new CustomEvent("change-selections", {
      detail: {
        numSelections: count,
      },
    });

    this.dispatchEvent(event);
  }
}

customElements.define("web-select-group", SelectGroup);

/*
 * Copyright 2020 Google LLC
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
 * limitations under the Licenspe.
 */

/**
 * Element that adds active classes to its children when the user scrolls to
 * a heading this child points to.
 * @extends {BaseElement}
 * @final
 */
class ScrollSpy extends BaseElement {
  constructor() {
    super();
    this.scrollSpy = this.scrollSpy.bind(this);
    this.tocActiveClass = "w-scroll-spy__active";
    this.tocVisibleClass = "w-scroll-spy__visible";
  }

  connectedCallback() {
    super.connectedCallback();
    this.articleContent = document.querySelector("main");

    if (!this.articleContent) {
      return;
    }

    this.headings = this.articleContent.querySelectorAll(
      "h1[id], h2[id], h3[id]"
    );

    this.observer = new IntersectionObserver(this.scrollSpy, {
      rootMargin: "0px 0px -80% 0px",
    });
    this.headings.forEach((heading) => this.observer.observe(heading));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  scrollSpy(headings) {
    const links = new Map(
      [...this.querySelectorAll("a")].map((l) => [l.getAttribute("href"), l])
    );
    for (const heading of headings) {
      const href = `#${heading.target.getAttribute("id")}`;
      const link = links.get(href);

      if (link) {
        if (heading.intersectionRatio > 0) {
          link.classList.add(this.tocVisibleClass);
          this.previouslyActiveHeading = heading.target.getAttribute("id");
        } else {
          link.classList.remove(this.tocVisibleClass);
        }
      }

      const firstVisibleLink = this.querySelector(`.${this.tocVisibleClass}`);

      links.forEach((link) => {
        link.classList.remove(this.tocActiveClass, this.tocVisibleClass);
      });

      if (firstVisibleLink) {
        firstVisibleLink.classList.add(this.tocActiveClass);
      }

      if (!firstVisibleLink && this.previouslyActiveHeading) {
        const last = this.querySelector(
          `a[href="#${this.previouslyActiveHeading}"]`
        );
        last.classList.add(this.tocActiveClass);
      }
    }
  }
}

customElements.define("web-scroll-spy", ScrollSpy);

/*
 * Copyright 2020 Google LLC
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
 * Element that renders table of contents.
 * @extends {BaseStateElement}
 * @final
 */
class TableOfContents extends BaseStateElement {
  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.tocActiveClass = "w-toc__active";
    this.tocBorderClass = "w-toc__border";
    this.tocVisibleClass = "w-toc__visible";
  }

  connectedCallback() {
    // This sets initial global state before subscribing to the store.
    // If we didn't do this then `this.opened` would always be set to false
    // because onStateChanged runs synchronously after we call
    // super.connectedCallback();
    if (this.hasAttribute("opened")) {
      openToC();
    }

    super.connectedCallback();
    this.tocHTML = this.innerHTML;
    this.articleContent = this.closest("main");

    if (!this.articleContent) {
      console.warn(`Article container not found.`);
      return;
    }
  }

  render() {
    const content = /** @type TemplateStringsArray */ (
      /** @type ReadonlyArray<string> */ ([this.tocHTML])
    );
    return html`
      <div class="w-toc__label">
        <span>In this article</span>
        <button
          class="w-button w-button--secondary w-button--icon"
          data-icon="close"
          aria-label="Close Table of Contents"
          @click="${closeToC}"
        ></button>
      </div>
      <web-scroll-spy>
        <div class="w-toc__content">${html(content)}</div>
      </web-scroll-spy>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    closeToC();
    this.observer.disconnect();
  }

  onStateChanged({ isTocOpened }) {
    this.opened = isTocOpened;
  }
}

customElements.define("web-table-of-contents", TableOfContents);

/*
 * Copyright 2020 Google LLC
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
 * Element that renders table of contents open button.
 * @extends {BaseStateElement}
 * @final
 */
class TableOfContentsButton extends BaseStateElement {
  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button
        class="w-toc__button--open w-button w-button--secondary w-button--icon"
        data-icon="list_alt"
        aria-label="Open Table of Contents"
        @click="${openToC}"
      ></button>
    `;
  }

  onStateChanged({ isTocOpened }) {
    this.opened = isTocOpened;
  }
}

customElements.define("web-table-of-contents-button", TableOfContentsButton);

var css_248z =
  'web-feedback {\n  display: block;\n}\n@media print {\n  web-feedback {\n    display: none;\n  }\n}\nweb-feedback .web-feedback__row {\n  align-items: center;\n  border-bottom: 1px solid #dadce0;\n  display: grid;\n  font-family: "Google Sans", sans-serif;\n  font-size: 0.875em;\n  font-weight: 500;\n  grid-template-columns: 2fr 1fr 1fr;\n  line-height: 1.5;\n  /* Center the contents of the 2nd and 3rd columns. */\n}\nweb-feedback .web-feedback__row:first-of-type, web-feedback .web-feedback__row:last-of-type {\n  border-bottom: 0;\n}\nweb-feedback .web-feedback__row > *:not(:first-child) {\n  justify-self: center;\n}\nweb-feedback .web-feedback__row > label {\n  padding: 1rem;\n}';
styleInject(css_248z);

/**
 * @fileoverview Element that handles feedback on posts.
 */

/** @types {WebFeedback.Question[]} */
const defaultQuestions = [
  { text: "Was this page helpful?", label: "helpful", name: "Helpfulness" },
  {
    text: "Did this page help you complete your goal(s)?",
    label: "effective",
    name: "Effectiveness",
  },
];

/** @types {WebFeedback.Question[]} */
const additionalQuestions = [
  { text: "Does this API meet your needs?", label: "api", name: "API" },
];

/**
 * Element that handles feedback on posts to submit to Analytics.
 *
 * @extends {BaseElement}
 * @final
 */
class Feedback extends BaseElement {
  static get properties() {
    return {
      additionalQuestions: {
        attribute: "additional-questions",
        converter: (/** @type string */ v) => v.toLocaleLowerCase().split(","),
      },
    };
  }

  constructor() {
    super();
    this.robotName = "is-it-just-me-or-was-this-form-filled-out-by-a-robot";
    this.submitted = false;
    this.submit = this.submit.bind(this);
    this.additionalQuestions = [];
  }

  submit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const formIsRobot = String(form.get(this.robotName)).length !== 0;
    form.delete(this.robotName);
    const formIterable = Array.from(form.entries());

    if (formIterable.length === 0 || this.submitted) {
      return;
    }

    this.submitted = true;
    this.requestUpdate();

    if (formIsRobot) {
      return;
    }

    formIterable.forEach((entry) => {
      trackEvent({
        category: "Feedback",
        action: "submit",
        label: entry[0],
        value: Number(entry[1]),
      });
    });
  }

  updated() {
    /** @type {HTMLParagraphElement} */
    const confirmationElement = this.querySelector(".w-feedback__confirmation");
    if (this.submitted && confirmationElement) {
      confirmationElement.focus();
    }
  }

  /**
   * @param {WebFeedback.Question[]} questions
   * @returns {TemplateResult[]}
   */
  renderQuestions(questions) {
    return questions.map(
      (q) => html`<div class="web-feedback__row">
        <div id="${q.label}-label">${q.text}</div>
        <label>
          <input
            type="radio"
            aria-labelledby="${q.label}-label yes-label"
            name="${q.name}"
            value="1"
          />
        </label>
        <label>
          <input
            type="radio"
            aria-labelledby="${q.label}-label no-label"
            name="${q.name}"
            value="0"
          />
        </label>
      </div>`
    );
  }

  render() {
    const additionalQuestionsSet = new Set(this.additionalQuestions);
    const additionalQuestionsToDisplay = additionalQuestions.filter((q) =>
      additionalQuestionsSet.has(q.label)
    );

    // Because we share CSS with the `app.css` we want this to be in the light DOM
    return html`
      <details class="w-details" open>
        <summary class="w-details__summary">
          <h2 class="w-details__header">Give feedback</h2>
        </summary>
        <div
          class="w-display--flex w-justify-content--center ${!this.submitted &&
          "hidden"}"
        >
          <p
            class="w-feedback__confirmation w-text--center w-force-focus"
            tabindex="-1"
          >
            Thank you for the feedback!
          </p>
        </div>
        <form
          class="w-feedback__form ${this.submitted && "hidden"}"
          @submit=${this.submit}
        >
          <small>All fields optional</small>
          <div class="web-feedback__rows">
            <div class="web-feedback__row">
              <div></div>
              <div id="yes-label">Yes</div>
              <div id="no-label">No</div>
            </div>
            ${this.renderQuestions(additionalQuestionsToDisplay)}
            ${this.renderQuestions(defaultQuestions)}
          </div>

          <div class="w-visually-hidden">
            <label for="${this.robotName}"
              >Congrats on finding this field, I'd recommend you not filling it
              out though...</label
            >
            <input
              type="text"
              id="${this.robotName}"
              name="${this.robotName}"
              tabindex="-1"
            />
          </div>

          <div class="w-text--center w-mt--sm">
            <button class="w-button w-button--primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </details>
    `;
  }
}

customElements.define("web-feedback", Feedback);
