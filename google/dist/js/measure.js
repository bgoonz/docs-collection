import {
  s as styleInject,
  B as BaseElement,
  h as html,
  f as svg,
  g as requestFetchReports,
  L as LH_HOST,
  a as BaseStateElement,
  i as requestRunLighthouse,
  j as signIn,
} from "./index-79f4e752.js";
import { s as store } from "./store-a85adfb0.js";

var css_248z$8 =
  "@keyframes indeterminate {\n  0% {\n    transform: translateX(0) scaleX(0);\n  }\n  40% {\n    transform: translateX(0) scaleX(0.4);\n  }\n  100% {\n    transform: translateX(100%) scaleX(0.5);\n  }\n}\nweb-progress-bar {\n  display: block;\n}\n\n.web-progress-bar-wrapper {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: rgba(96, 1, 255, 0.2);\n  border-radius: 2px;\n  overflow: hidden;\n  contain: strict;\n}\n\n.web-progress-bar-indeterminate {\n  background-color: #6001ff;\n  width: 100%;\n  height: 100%;\n  animation: indeterminate 1s infinite linear;\n  transform-origin: 0% 50%;\n}";
styleInject(css_248z$8);

/**
 * @fileoverview An indeterminate progress bar.
 */

/**
 * An indeterminate progress bar.
 * @extends {BaseElement}
 * @final
 */
class ProgressBar extends BaseElement {
  render() {
    return html`
      <div class="web-progress-bar-wrapper">
        <div class="web-progress-bar-indeterminate"></div>
      </div>
    `;
  }

  firstUpdated() {
    this.setAttribute("role", "progressbar");
  }
}

customElements.define("web-progress-bar", ProgressBar);

var css_248z$7 =
  "@keyframes sparkline-dash-animation {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\nweb-sparkline-chart {\n  display: block;\n  height: 100px;\n}\nweb-sparkline-chart:focus {\n  outline: none;\n}\nweb-sparkline-chart .sl-outer {\n  position: absolute;\n}\nweb-sparkline-chart .path.dashed {\n  stroke-linecap: round;\n  stroke-width: 1;\n  stroke-dasharray: 4;\n  stroke-dashoffset: 0;\n  stop-color: #9aa0a6;\n  stroke: #9aa0a6;\n}\nweb-sparkline-chart .result--fail {\n  stroke: #e53935;\n  stop-color: #e53935;\n  fill: #e53935;\n  stroke-width: 2;\n}\nweb-sparkline-chart .result--average {\n  stroke: #fb8c00;\n  stop-color: #fb8c00;\n  fill: #fb8c00;\n  stroke-width: 2;\n}\nweb-sparkline-chart .result--pass {\n  stroke: #18b663;\n  stop-color: #18b663;\n  fill: #18b663;\n  stroke-width: 2;\n}\nweb-sparkline-chart .sl-caption {\n  z-index: 100;\n  position: relative;\n}\nweb-sparkline-chart .sl-caption rect {\n  stroke-width: 0;\n}\nweb-sparkline-chart .sl-caption--value {\n  font-size: 14px;\n  font-weight: 600;\n}\nweb-sparkline-chart .sl-caption--date {\n  font-size: 12px;\n  stroke-width: 0 !important;\n  fill: #9aa0a6;\n}\nweb-sparkline-chart svg {\n  pointer-events: none;\n  display: block;\n}\nweb-sparkline-chart .sl-cursor {\n  stroke-linecap: round;\n}\nweb-sparkline-chart .path {\n  stroke-linecap: round;\n}\nweb-sparkline-chart .gradient {\n  transition: opacity 600ms ease-in-out;\n  opacity: 0;\n}\nweb-sparkline-chart .gradient.fadein {\n  opacity: 1;\n}\nweb-sparkline-chart .sr-announcer {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n}";
styleInject(css_248z$7);

/**
 * @fileoverview Element that renders data as a spark line.
 */

const HAS_RESIZE_OBSERVER = typeof ResizeObserver === "function";

/**
 * @param {number} val to round
 * @return {number} number rounded to two decimals
 */
function clampTo2Decimals(val) {
  return Math.round(val * 100) / 100;
}

/**
 * Render a sparkline.
 * @extends {BaseElement}
 * @final
 */
class SparklineChart extends BaseElement {
  static get properties() {
    return {
      fill: { type: Boolean },
      values: { type: Object },
      medians: { type: Object },

      // TODO(robdodson): make these all --var?
      topPadding: { type: Number }, // top padding to prevent catching popup
      circleRadius: { type: Number }, // configurable circle radius
      strokeWidth: { type: Number }, // width of SVG stroke

      demo: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.fill = false;
    this.topPadding = 20;
    this.circleRadius = 3;
    this.strokeWidth = 2;

    // private, updated in render() by calling getBoundingClientRect
    this.width_ = 0;
    this.height_ = 0;

    // cursor selection, causes non-render() changes
    this.point_ = null;

    // elements stolen from renderRoot
    /** @type SVGLineElement */
    this.cursorElement_ = null;
    this.scoreElement_ = null;
    this.announcerElement_ = null;
    this.scoreValueText_ = null;
    this.scoreDateText_ = null;

    // processed points from values that allow mouse focus
    this.datapoints = [];

    // bind so this can be added/removed from a global handler
    this.onResize = this.onResize.bind(this);

    if (HAS_RESIZE_OBSERVER) {
      // We rely on our user ensuring that <web-sparkline-chart> has size.
      const ro = new ResizeObserver(this.onResize);
      ro.observe(this);
    }
  }

  set demo(demo) {
    this.demo_ = demo;

    if (demo) {
      this.values = [
        { score: 35, date: "2019-05-22" },
        { score: 30, date: "2019-05-24" },
        { score: 20, date: "2019-06-01" },
        { score: 50, date: "2019-06-24" },
        { score: 92, date: "2019-06-29" },
        { score: 90, date: "2019-07-01" },
      ];

      this.medians = [{ score: 89, date: "2019-06-24" }];
    }
  }

  get demo() {
    return this.demo_;
  }

  redrawPoint() {
    if (!(this.cursorElement_ && this.scoreElement_)) {
      return;
    }

    // Clear the point if it was drawn on the screen.
    if (!this.point_) {
      this.cursorElement_.setAttribute("x1", "-10000");
      this.cursorElement_.setAttribute("x2", "-10000");
      this.scoreElement_.setAttribute("transform", "translate(-10000,-10000)");
      return;
    }

    // Draw the point on the screen.
    this.cursorElement_.setAttribute("x1", this.point_.x);
    this.cursorElement_.setAttribute("x2", this.point_.x);
    this.cursorElement_.setAttribute("y1", this.point_.y);
    this.cursorElement_.setAttribute("y2", String(this.height_));
    const colorClass = this.computeColorClass_(this.point_.score);
    this.cursorElement_.style.stroke = colorClass;
    this.cursorElement_.classList.value = `sl-cursor result--${colorClass}`;

    // Set text first, then measure.
    this.scoreValueText_.textContent = this.point_.score;

    const d = new Date(this.point_.date);
    let dateText = "\u2014"; // em dash

    if (d.getTime()) {
      // d.getTime() is NaN/falsey if invalid
      try {
        dateText = new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
        }).format(d);
      } catch (err) {
        dateText = d.toLocaleDateString();
      }
    }
    this.scoreDateText_.textContent = dateText;

    const PADDING = 3;

    const scoreHoverRectWidth =
      this.scoreElement_.getBoundingClientRect().width;
    const x = Math.max(
      PADDING,
      Math.min(
        this.width_ - scoreHoverRectWidth - 2 * PADDING,
        this.point_.x - scoreHoverRectWidth / 2
      )
    );
    const y = Math.max(
      -1 * (this.height_ / 2),
      Math.min(this.height_ / 2 - PADDING - 10, this.point_.y - 10)
    );

    // Position score/date centered on the hover card.
    const scoreTextWidth = this.scoreValueText_.getBoundingClientRect().width;
    const dateTextWidth = this.scoreDateText_.getBoundingClientRect().width;
    this.scoreDateText_.setAttribute(
      "x",
      String(scoreHoverRectWidth / 2 - dateTextWidth / 2)
    );
    this.scoreValueText_.setAttribute(
      "x",
      String(scoreHoverRectWidth / 2 - scoreTextWidth / 2)
    );
    this.scoreElement_.setAttribute("transform", `translate(${x},${y})`);
    this.scoreElement_.classList.value = `sl-caption result--${colorClass}`;
  }

  set point(point) {
    if (this.point_ === point) {
      return;
    }

    this.point_ = point;
    if (point) {
      const date = new Date(point.date).toLocaleDateString();
      this.announce_(`Score ${point.score} on date ${date}`);
    }
    this.redrawPoint();
  }

  get point() {
    return this.point_;
  }

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute("aria-valuemin", "0");
    this.setAttribute("aria-valuemax", "100");

    this.setAttribute("role", "group");
    this.setAttribute(
      "aria-label",
      "scores over time. Use arrow keys to navigate"
    );

    if (!HAS_RESIZE_OBSERVER) {
      window.addEventListener("resize", this.onResize);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (!HAS_RESIZE_OBSERVER) {
      window.removeEventListener("resize", this.onResize);
    }
  }

  /**
   * As a mouse moves over this element, find and highlight the nearest point in the chart.
   *
   * @param {WMouseEvent} e
   */
  onMouseMove(e) {
    // TODO(b/117590606): Make this work with touch events.
    const mouseX = e.offsetX;

    const nextDataPointIdx = this.datapoints.findIndex(
      (entry) => entry.x >= mouseX
    );
    const prevPoint = this.datapoints[nextDataPointIdx - 1];
    const nextPoint = this.datapoints[nextDataPointIdx];

    let point;
    if (!nextPoint) {
      point = this.datapoints[this.datapoints.length - 1];
    } else if (!prevPoint) {
      point = this.datapoints[0];
    } else {
      if (Math.abs(mouseX - prevPoint.x) <= Math.abs(mouseX - nextPoint.x)) {
        point = prevPoint;
      } else {
        point = nextPoint;
      }
    }

    this.point = point;
  }

  /**
   * Allow keyboard navigation through points.
   *
   * @param {KeyboardEvent} e
   */
  onKeyDown(e) {
    switch (e.key) {
      case "Right":
      case "ArrowRight":
        this.setNextPoint_();
        break;

      case "Left":
      case "ArrowLeft":
        this.setPrevPoint_();
        break;

      default:
        return;
    }

    e.preventDefault();
  }

  /**
   * Set the next point that should be drawn to the screen.
   * @private
   */
  setNextPoint_() {
    // Unless the user has focused on the last, this should always find a point
    // as the disused cursor is hidden offscreen to the left.
    const cursorX = this.cursorElement_.getAttribute("x1");
    const nextPoint = this.datapoints.find((entry) => entry.x > cursorX);
    if (nextPoint) {
      this.point = nextPoint;
    }
  }

  /**
   * Set the previous point that should be drawn to the screen.
   * @private
   */
  setPrevPoint_() {
    const cursorX = +this.cursorElement_.getAttribute("x1");
    const currentPointIdx = this.datapoints.findIndex(
      (entry) => entry.x === cursorX
    );

    const prevPoint =
      currentPointIdx === -1
        ? this.datapoints.slice(-1)[0]
        : this.datapoints[currentPointIdx - 1];
    if (prevPoint) {
      this.point = prevPoint;
    }
  }

  /**
   * Clear the point due to blur or mouseout.
   */
  onClearPoint() {
    this.point = null;
  }

  /**
   * Announce content for screen readers using an ARIA live region.
   * @private
   * @param {string} msg
   */
  announce_(msg) {
    this.announcerElement_.textContent = msg;
    window.setTimeout(() => {
      this.announcerElement_.textContent = "";
    }, 100);
  }

  /**
   * Calculate the data point y's value
   * @param {number} score
   * @return {number}
   */
  calculateY(score) {
    const scoreRatio = Math.min(1, Math.max(score / 100, 0));
    return (1 - scoreRatio) * this.height_;
  }

  /**
   * Generates the line path from values.
   * @param {Array<LighthouseScore>?} values Values to generate a path from.
   * @return {{datapoints: Array<Object>, paths: Array<PathPart>}}
   * @private
   */
  processValues(values) {
    if (!values || values.length === 0) {
      // no values, failure case: just draw in the top-left corner
      return {
        datapoints: [],
        paths: [
          {
            points: "M0 0 L0 0",
            firstPoint: { x: 0, y: 0 },
            lastPoint: { x: 0, y: 0 },
            color: "",
          },
        ],
      };
    }

    // Regardless of how many values we have, each is interspersed by the same offset.
    const offset =
      values.length > 1 ? Math.floor(this.width_ / (values.length - 1)) : 0;

    const datapoints = [];
    const paths = [];

    let points = `M0 ${this.calculateY(values[0].score).toFixed(2)}`;
    let firstPoint = { x: NaN, y: NaN };
    let lastPoint = { x: NaN, y: NaN };
    let prevColor;

    values.forEach((value, i) => {
      const isFirstPoint = i === 0;
      const isLastPoint = i === values.length - 1;

      // if last point, use width (otherwise the clamp hides ~fractional pixels)
      const x = isLastPoint ? this.width_ : i * offset;
      const y = parseFloat(this.calculateY(value.score).toFixed(2));
      const currColor = this.computeColorClass_(value.score);

      if (isFirstPoint) {
        firstPoint = { x, y };
      } else if (prevColor !== currColor) {
        paths.push({ firstPoint, lastPoint, color: prevColor, points });
        points = `M${lastPoint.x} ${lastPoint.y} L${lastPoint.x} ${lastPoint.y}`;
        firstPoint = { x: lastPoint.x, y: lastPoint.y };
      }

      points += ` L${x} ${y}`;

      if (isLastPoint) {
        if (isFirstPoint) {
          // if this graph only has one point, the fill needs to reset to far left
          firstPoint.x = 0;
        }
        paths.push({
          firstPoint,
          lastPoint: { x, y },
          color: currColor,
          points,
        });
      }

      prevColor = currColor;
      lastPoint = { x, y };

      datapoints.push({
        x,
        y,
        score: clampTo2Decimals(value.score),
        date: value.date,
      });
    });

    return { paths, datapoints };
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("fill") || changedProperties.has("values")) {
      const gradients = this.renderRoot.querySelectorAll(".gradient");
      for (const gradient of gradients) {
        if (this.fill) {
          gradient.classList.add("fadein");
        } else {
          gradient.classList.remove("fadein");
        }
      }
    }
  }

  render() {
    const rect = this.getBoundingClientRect();

    // If the element hasn't yet had layout, then request a rerender a frame later.
    if (!rect.width || !rect.height) {
      window.requestAnimationFrame(() => this.requestUpdate());
      // we can't bail early, as firstUpdated() still needs to steal rendered nodes
    }

    const pixelBuffer = this.circleRadius + this.strokeWidth / 2;

    // Save width and height, padded by any requested buffer. This is needed for processValues()
    // and showing the user's cursor.
    // Align the SVG content by `pixelBuffer` on the top, left, and right sides. Add topPadding on
    // the top, to allow the popup to be contained properly.
    const groupTransform = `translate(${pixelBuffer},${
      pixelBuffer + this.topPadding
    })`;
    this.width_ = rect.width - pixelBuffer * 2;
    this.height_ = rect.height - pixelBuffer - this.topPadding;

    const { paths, datapoints } = this.processValues(this.values);
    this.datapoints = datapoints;

    if (this.datapoints.length) {
      this.setAttribute("aria-valuenow", this.datapoints.slice(-1)[0].score);
    } else {
      this.removeAttribute("aria-valuenow");
    }

    const lastDataPoint = paths[paths.length - 1] || null;

    // Only render medians if there's actually a value contained here.
    let medianPaths;
    if (this.medians && this.medians.length) {
      const { paths } = this.processValues(this.medians);
      medianPaths = paths.map(({ points }) => {
        return svg`<path d="${points}" class="path dashed" />`;
      });
    }

    const lastDataPointCircle = lastDataPoint
      ? svg`
      <circle
        cx="${lastDataPoint.lastPoint.x}"
        cy="${lastDataPoint.lastPoint.y}"
        r="${this.circleRadius}"
        stroke-width="${this.strokeWidth}"
        class="result--${lastDataPoint.color}"
        style="fill:#fff" />`
      : "";

    /* eslint-disable max-len,indent */
    const innerSVG = svg`
      <svg xmlns="http://www.w3.org/2000/svg"
          width="100%" height="100%">
        <defs>
          <filter id="hover-shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000"
               flood-opacity="0.4"/>
          </filter>
          <linearGradient id="gradient-pass" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="rgb(24,182,99)" stop-opacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient-average" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="rgb(251,140,0)" stop-opacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient-fail" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="rgb(229,57,53)" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        <g transform="${groupTransform}">
          ${paths.map(({ firstPoint, points, color }) => {
            // Ensures that each path segment's fill is complete.
            const d = `${points} V ${this.height_} H ${firstPoint.x} Z`;
            return svg`
              <path class="gradient"
                  d="${d}"
                  fill="${this.fill ? `url(#gradient-${color})` : "none"}" />
              <path d="${points}" class="path result--${color}" style="fill:none" />
            `;
          })}
          ${medianPaths}
          <line class="sl-cursor"
                x1="-10000" x2="-10000" y1="0" y2="${this.height_}" />
          ${lastDataPointCircle}
          <g class="sl-caption" transform="translate(-10000,-10000)" aria-hidden="true">
            <rect width="50" height="40" fill="#fff" rx="2" ry="2"
                  style="filter:url(#hover-shadow)"/>
            <text class="sl-caption--value" stroke="none" x="25" y="18"></text>
            <text class="sl-caption--date" stroke="none" x="3" y="32"></text>
          </g>
        </g>
      </svg>`;

    return html`
      <div
        style="width: ${rect.width}px; height: ${rect.height}px"
        tabindex="0"
        class="sl-outer"
        @blur=${this.onClearPoint}
        @mouseout=${this.onClearPoint}
        @mousemove=${this.onMouseMove}
        @keydown=${this.onKeyDown}
      >
        ${innerSVG}
        <div aria-live="assertive" class="sr-announcer"></div>
      </div>
    `;
  }

  /**
   * Determines Lighthouse pass/average/fail coloring based on value.
   * @param {number} val
   * @return {string}
   * @private
   */
  computeColorClass_(val) {
    // Match to Lighthouse rating. See https://goo.gl/Pz6xfR.
    let result = "fail";
    if (val >= 90) {
      result = "pass";
    } else if (val >= 50) {
      result = "average";
    }
    return result;
  }

  onResize() {
    // When the browser window resizes, force a render to redraw the SVG.
    this.requestUpdate().then(() => {
      this.redrawPoint();
    });
  }

  firstUpdated() {
    this.cursorElement_ = this.renderRoot.querySelector(".sl-cursor");
    this.scoreElement_ = this.renderRoot.querySelector(".sl-caption");
    this.announcerElement_ = this.querySelector(".sr-announcer");
    this.scoreValueText_ =
      this.scoreElement_.querySelector(".sl-caption--value");
    this.scoreDateText_ = this.scoreElement_.querySelector(".sl-caption--date");
  }
}

customElements.define("web-sparkline-chart", SparklineChart);

var css_248z$6 =
  "web-lighthouse-gauge {\n  color: #bdc1c6;\n  display: block;\n  position: relative;\n}\nweb-lighthouse-gauge .gauge__pass {\n  color: #18b663;\n}\nweb-lighthouse-gauge .gauge__average {\n  color: #fb8c00;\n}\nweb-lighthouse-gauge .gauge__fail {\n  color: #e53935;\n}\nweb-lighthouse-gauge .gauge {\n  stroke-linecap: round;\n}\nweb-lighthouse-gauge .gauge-base {\n  stroke: #e8eaed;\n  stroke-width: 9;\n}\nweb-lighthouse-gauge .gauge__pass .gauge-base {\n  stroke: rgba(24, 182, 99, 0.2);\n}\nweb-lighthouse-gauge .gauge__average .gauge-base {\n  stroke: rgba(251, 140, 0, 0.2);\n}\nweb-lighthouse-gauge .gauge__fail .gauge-base {\n  stroke: rgba(229, 57, 53, 0.2);\n}\nweb-lighthouse-gauge .gauge-arc {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 9;\n  transition: stroke-dasharray 1.2s;\n}\nweb-lighthouse-gauge .bootstrap {\n  stroke-dasharray: 0 359 !important;\n}\nweb-lighthouse-gauge .gauge-percent {\n  align-items: center;\n  bottom: 0;\n  color: currentColor;\n  display: flex;\n  font: inherit;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}";
styleInject(css_248z$6);

/**
 * @fileoverview Element that shows a score in a gauge.
 */

/**
 * @extends {BaseElement}
 * @final
 */
class LighthouseGauge extends BaseElement {
  static get properties() {
    return {
      score: { type: Number },
      _bootstrap: { type: Boolean }, // holds arc value at zero for hydration
    };
  }

  constructor() {
    super();
    this.score = 0;
  }

  connectedCallback() {
    super.connectedCallback();

    this._bootstrap = true;
    window.requestAnimationFrame(() => {
      this._bootstrap = false;
    });
  }

  render() {
    const clamped = Math.max(0, Math.min(1, this.score));
    const round = Math.round(clamped * 100);

    // nb. Pulled directly from report/html/renderer/util.js in Lighthouse.
    let label = "fail";
    if (clamped >= 0.9) {
      label = "pass";
    } else if (clamped >= 0.5) {
      label = "average";
    }
    const className = `gauge__${label}`;

    return html`
      <div class=${className}>
        <svg viewBox="0 0 120 120" class="gauge" fill="none" stroke-width="2">
          <circle class="gauge-base" r="53" cx="60" cy="60"></circle>
          <circle
            class="gauge-arc ${this._bootstrap ? "bootstrap" : ""}"
            transform="rotate(-90 60 60)"
            stroke-dasharray="${clamped * 329} 329"
            stroke-dashoffset="0"
            r="53"
            cx="60"
            cy="60"
          ></circle>
        </svg>
        <div class="gauge-percent">${round}</div>
      </div>
    `;
  }

  firstUpdated() {
    this.setAttribute("role", "progressbar");
    this.setAttribute("aria-valuemin", "0");
    this.setAttribute("aria-valuemax", "100");
  }

  updated() {
    this.setAttribute("aria-valuenow", String(this.score * 100));
  }
}

customElements.define("web-lighthouse-gauge", LighthouseGauge);

/**
 * @fileoverview Wraps fetching the global audit mapping data from HTML.
 *
 * We embed the "Guide To Audit" mapping, which tells users what guide to read to help them solve a
 * particular Lighthouse audit, on the Measure page as JSON in a hidden `<code>` block. This lazily
 * parses the JSON when it is first required.
 */

let cache = null;

/**
 * Lazily returns a parsed version of the "Guide To Audit" mapping that is injected into the
 * Measure page. If it's not on this page, returns null.
 *
 * @return {!Object}
 */
function getAuditGuideMapping() {
  if (cache) {
    return cache;
  }

  const codeElement = document.getElementById("guide-audit-mapping");

  if (codeElement === null) {
    return null;
  }

  let guideToAudit;
  try {
    guideToAudit = JSON.parse(codeElement.textContent);
  } catch (err) {
    console.warn("LH id -> guide JSON was malformed. Check", codeElement);
    throw err;
  }

  const auditToGuide = {};

  for (const guide of guideToAudit.guides) {
    for (const audit of guide.lighthouse) {
      if (!(audit in auditToGuide)) {
        auditToGuide[audit] = [];
      }
      auditToGuide[audit].push(guide);
    }
  }

  cache = auditToGuide;
  return cache;
}

/**
 * @fileoverview Contains helpers for interacting with Lighthouse report data.
 */

const descriptionRegex = /^(.+) \[Learn more\]\((.+)\)\.$/;

const categories = [
  {
    id: "performance",
    title: "Performance",
  },
  // TODO(b/119501689): remove PWA audits for now.
  /* {
    id: 'pwa',
    title: 'PWA',
  },*/
  {
    id: "accessibility",
    title: "Accessibility",
  },
  {
    id: "best-practices",
    title: "Best Practices",
  },
  {
    id: "seo",
    title: "SEO",
  },
];

const metrics = [
  {
    title: "First Contentful Paint",
    id: "first-contentful-paint",
  },
  {
    title: "Time to Interactive",
    id: "interactive",
  },
  {
    title: "Speed Index",
    id: "speed-index",
  },
  {
    title: "Total Blocking Time",
    id: "total-blocking-time",
  },
  {
    title: "Largest Contentful Paint",
    id: "largest-contentful-paint",
    vitals: true,
  },
  {
    title: "Cumulative Layout Shift",
    id: "cumulative-layout-shift",
    vitals: true,
  },
];

// prettier-ignore
/**
 * @const {!Object<string, function({weight: number, overallSavingsMs: ?number}): string>}
 */
const CATEGORY_TO_IMPACT_MAPPING = {
  Accessibility: ({weight}) => {
    if (weight <= 4) {
      return 'Low';
    }
    if (weight <= 7) {
      return 'Medium';
    }
    return 'High';
  },
  'Best Practices': () => {
    return 'Medium';
  },
  Performance: ({overallSavingsMs}) => {
    if (!overallSavingsMs) {
      return 'Low';
    }
    if (overallSavingsMs <= 50) {
      return 'Low';
    }
    if (overallSavingsMs <= 250) {
      return 'Medium';
    }
    return 'High';
  },
  'Progressive Web App': ({weight}) => {
    if (weight <= 3) {
      return 'Low';
    }
    if (weight <= 6) {
      return 'Medium';
    }
    return 'High';
  },
  SEO: () => {
    return 'Medium';
  },
};

/**
 * @const {!Object<string, number>}
 */
const IMPACT_TO_SCORE_MAPPING = {
  Low: 1,
  Medium: 2,
  High: 3,
};

/**
 * @param {!CombinedAuditAndAuditRef} category
 * @return {!CombinedAuditAndAuditRef}
 */
function computeWeightForAuditResult(category) {
  category.impact = CATEGORY_TO_IMPACT_MAPPING[category.ref.cat]({
    weight: category.ref.weight,
    overallSavingsMs:
      category.audit.details && category.audit.details.overallSavingsMs,
  });

  return category;
}

/**
 * @param {!CombinedAuditAndAuditRef} category
 * @return {boolean}
 */
function filterAuditResult(category) {
  // TODO(b/119501689): remove pwa audits for now.
  if (category.ref.cat === "Progressive Web App") {
    return false;
  }

  // Some performance audits (for example 'First Contentful Paint') provide
  // raw numbers. They do not actually contain 'overallSavingsMs'.
  if (category.ref.cat === "Performance") {
    if (!category.audit.details) {
      return false;
    }

    const overallSavingsMs = category.audit.details.overallSavingsMs;

    if (overallSavingsMs === undefined || overallSavingsMs <= 0) {
      return false;
    }

    return true;
  }

  // Remove all categories that either have no score or already have a perfect
  // score
  if (
    category.audit.score === null ||
    category.audit.score === undefined ||
    category.audit.score === 1
  ) {
    return false;
  }

  return true;
}

/**
 * @param {!CombinedAuditAndAuditRef} one
 * @param {!CombinedAuditAndAuditRef} other
 * @return {number}
 */
function sortOnWeights(one, other) {
  return (
    IMPACT_TO_SCORE_MAPPING[other.impact] - IMPACT_TO_SCORE_MAPPING[one.impact]
  );
}

/**
 * @param {string} description
 * @return {?string}
 */
function getAuditReferenceDocLink(description) {
  const match = descriptionRegex.exec(description);
  if (match) {
    return match[2];
  }
  return null;
}

var css_248z$5 =
  'web-lighthouse-scores-audits {\n  display: block;\n  min-height: 400px;\n  margin-top: 40px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-headers {\n  font: 500 14px / 1.1428571429 Segoe UI, system-ui, -apple-system, sans-serif;\n  color: #5f6368;\n  text-transform: uppercase;\n  display: flex;\n  padding: 8px 16px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-headers .lh-audit-list-row__item {\n  line-height: 60px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-rows .lh-audit-list-row {\n  background-color: #fff;\n  margin: 8px 0;\n  padding: 16px;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-rows .lh-audit-list-row:last-child {\n  margin-bottom: 0;\n}\nweb-lighthouse-scores-audits .lh-audit-list-rows .lh-audit-list-row__impact {\n  display: inline-flex;\n  background-color: rgba(96, 1, 255, 0.2);\n  color: #6001ff;\n  font-weight: 500;\n  border-radius: 20px;\n  height: 32px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n}\nweb-lighthouse-scores-audits .lh-audit-list-rows .lh-audit-list-row__impact--high {\n  background-color: #fcebea;\n  color: #d5100c;\n}\nweb-lighthouse-scores-audits .lh-audit-list-rows .lh-audit-list-row__impact--medium {\n  background-color: #fef3e5;\n  color: #c6320d;\n}\nweb-lighthouse-scores-audits .lh-audit-list-rows .lh-audit-list-row__impact--low {\n  background-color: #ebebff;\n  color: #3740ff;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__item {\n  margin-right: 16px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__link {\n  text-decoration: underline;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__item:last-of-type {\n  margin-right: 0;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__impact {\n  min-width: 75px;\n  display: flex;\n  align-items: center;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__impact-arrow {\n  display: flex;\n  align-items: center;\n  background: none;\n  border: 0;\n  padding-left: 0;\n  border-bottom: 1px solid transparent;\n  color: inherit;\n  text-transform: uppercase;\n  outline: none;\n  box-shadow: none;\n  font: 500 14px / 1.1428571429 Segoe UI, system-ui, -apple-system, sans-serif;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__impact-arrow:focus-within {\n  border-bottom: 1px solid #5f6368;\n  margin-bottom: 0;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__impact-arrow::after {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  content: "arrow_drop_down";\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__impact-arrow[data-inverted]::after {\n  content: "arrow_drop_up";\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__category {\n  min-width: 150px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__recommendation,\nweb-lighthouse-scores-audits .lh-audit-list-row__guide {\n  width: 50%;\n  overflow: hidden;\n}\nweb-lighthouse-scores-audits .lh-audit-list-row__guide {\n  padding: 0 4px;\n}\nweb-lighthouse-scores-audits .lh-audit-list-see-more__container {\n  display: flex;\n  margin-top: 32px;\n  flex-direction: column;\n}\nweb-lighthouse-scores-audits .lh-audit-list-see-more__button {\n  align-self: center;\n}\nweb-lighthouse-scores-audits .lh-audit-list-see-more__button:disabled {\n  display: none;\n}\n@media screen and (max-width: 840px) {\n  web-lighthouse-scores-audits .lh-audit-list-headers .lh-audit-list-row__category,\nweb-lighthouse-scores-audits .lh-audit-list-row__category {\n    display: none;\n  }\n}';
styleInject(css_248z$5);

/**
 * @fileoverview An element which shows a friendly list of failing audits and related guides.
 */

const NUM_AUDITS_TO_SHOW = 10;

/**
 * Renders a table for the passed Lighthouse report.
 *
 * @param {!LighthouseLastRunDetail} lhr The lighthouse report to render a table for.
 * @param {!CombinedAuditAndAuditRef} category
 * @return {!TemplateResult}
 */
function createRowForAuditCategory(lhr, category) {
  /** @type TemplateResult | string[] */
  let relevantGuides = ["Guide coming soon"];
  const audit = lhr.audits[category.ref.id];

  const auditGuideMapping = getAuditGuideMapping();
  if (auditGuideMapping) {
    const guidesForAudit = auditGuideMapping[category.ref.id];
    if (guidesForAudit) {
      relevantGuides = guidesForAudit.map((guide) => {
        return html`
          <a
            href="${guide.url}"
            class="lh-audit-list-row__link internal gc-analytics-event"
            data-category="web.dev"
            data-label="audit todos, internal link"
            data-action="click"
            target="_blank"
            >${guide.title}</a
          >
        `;
      });
    } else {
      const docLink = getAuditReferenceDocLink(audit.description);
      if (docLink) {
        relevantGuides = html`
          <a
            href="${docLink}"
            class="lh-audit-list-row__link external gc-analytics-event"
            target="_blank"
            data-category="web.dev"
            data-label="audit todos, external link"
            data-action="click"
            >${audit.title}</a
          >
        `;
      }
    }
  }

  return html`
    <div class="lh-audit-list-row" role="row">
      <span
        class="lh-audit-list-row__impact lh-audit-list-row__item
                lh-audit-list-row__impact--${category.impact.toLowerCase()}"
        role="cell"
        >${category.impact}</span
      >
      <span
        class="lh-audit-list-row__item lh-audit-list-row__category"
        role="cell"
        >${category.ref.cat}</span
      >
      <span
        class="lh-audit-list-row__item lh-audit-list-row__recommendation"
        role="cell"
        >${audit.title}</span
      >
      <span class="lh-audit-list-row__item lh-audit-list-row__guide" role="cell"
        >${relevantGuides}</span
      >
    </div>
  `;
}

/* eslint-disable require-jsdoc */
class LighthouseScoresAudits extends BaseElement {
  static get properties() {
    return {
      timesExpanded: { type: Number }, // number of times a user has asked for more help
      inverted: { type: Boolean }, // whether to sort by low impact first
      filteringOn: { type: String }, // the Lighthouse category to filter to
      lhr: { type: Object }, // contains the raw Lighthouse results data
    };
  }

  constructor() {
    super();
    this.timesExpanded = 0;
    this.inverted = false;
  }

  set lhr(value) {
    if (this._lhr === value) {
      return; // don't reset, same results
    }

    // setting lhr resets most properties of this element
    this.timesExpanded = 1;
    this.inverted = false;
    this.filteringOn = null;

    const oldValue = this._lhr;
    this._lhr = value;
    this.requestUpdate("lhr", oldValue);
  }

  get lhr() {
    return this._lhr;
  }

  firstUpdated() {
    this.setAttribute("role", "table");
    this.setAttribute("aria-label", "Lighthouse audits and suggested guides");
  }

  /**
   * @private
   * @param {!LighthouseLastRunDetail} lhr The lighthouse report to render a
   *     table for.
   * @return {!Array<!CombinedAuditAndAuditRef>} The audits and refs, sorted
   *     on performance improvement or ref weight.
   */
  getHighestImpactScores(lhr) {
    const sortedValues = Object.values(lhr.categories)
      // First filter on selected category.
      .filter((cat) => (this.filteringOn ? cat.id === this.filteringOn : true))
      // Flatmap all audits with their corresponding category.
      .map((cat) => {
        return cat.auditRefs.map((ref) =>
          Object.assign({ cat: cat.title }, ref)
        );
      })
      .reduce((one, other) => one.concat(other), [])
      .map((ref) => ({ ref, audit: lhr.audits[ref.id] }))
      .filter(filterAuditResult)
      .map(computeWeightForAuditResult)
      .sort(sortOnWeights);

    if (this.inverted) {
      sortedValues.reverse();
    }
    return sortedValues;
  }

  render() {
    const lhr = this.lhr;
    /** @type TemplateResult | string[] */
    let rows = html``;
    let allRowsShown = false;

    if (lhr) {
      const scores = this.getHighestImpactScores(lhr);
      allRowsShown = scores.length <= NUM_AUDITS_TO_SHOW * this.timesExpanded;

      rows = scores
        .slice(0, NUM_AUDITS_TO_SHOW * this.timesExpanded)
        .map((category) => createRowForAuditCategory(lhr, category));
    } else {
      // Render placeholder rows for hydrating.
      const testArray = Array(NUM_AUDITS_TO_SHOW * this.timesExpanded).keys();
      rows = Array.from(testArray).map(() => {
        return html`
          <div class="lh-audit-list-row" role="row">
            <span
              class="lh-audit-list-row__impact lh-audit-list-row__item"
              role="cell"
            ></span>
          </div>
        `;
      });
    }

    return html`
      <div class="lh-audit-list-headers" role="row">
        <span
          class="lh-audit-list-row__impact lh-audit-list-row__item"
          role="columnheader"
        >
          <button
            class="lh-audit-list-row__impact-arrow"
            @click="${this.onInvert}"
            ?data-inverted="${this.inverted}"
          >
            Impact
          </button>
        </span>
        <span
          class="lh-audit-list-row__category lh-audit-list-row__item"
          role="columnheader"
          >Category</span
        >
        <span
          class="lh-audit-list-row__recommendation lh-audit-list-row__item"
          role="columnheader"
          >Audit</span
        >
        <span
          class="lh-audit-list-row__guide lh-audit-list-row__item"
          role="columnheader"
          >Guide</span
        >
      </div>
      <div class="lh-audit-list-rows" role="rowgroup">${rows}</div>
      <div class="lh-audit-list-see-more__container">
        <button
          @click="${this.onIncreaseAuditsShown}"
          ?disabled="${!lhr || allRowsShown}"
          class="w-button lh-audit-list-see-more__button gc-analytics-event"
          data-category="web.dev"
          data-label="audit todos, see more"
          data-action="click"
        >
          See more
        </button>
      </div>
    `;
  }

  onInvert(e) {
    e.preventDefault();
    this.inverted = !this.inverted;
  }

  onIncreaseAuditsShown(e) {
    e.preventDefault();
    this.timesExpanded++;
  }

  /**
   * Toggles filtering of the audit list.
   * @param {?string} cat Category id to filter on. Passing null or the same
   *     name clears the filter.
   * @export
   */
  filter(cat) {
    // Reset filter if same category is passed, otherwise set new filter.
    this.filteringOn = cat === this.filteringOn ? null : cat;
  }
}

customElements.define("web-lighthouse-scores-audits", LighthouseScoresAudits);

/**
 * @fileoverview Container element for displaying Lighthouse results.
 */

/* eslint-disable require-jsdoc */
class LighthouseScoresContainer extends BaseElement {
  static get properties() {
    return {
      filteringOn: { type: String }, // the Lighthouse category to filter to, not from state

      lighthouseError: { type: String },
      activeLighthouseUrl: { type: String },
      auditedOn: { type: Date },
      lighthouseResultUrl: { type: String },
      lighthouseResultRuns: { type: Array },
      lighthouseResultLastLhr: { type: Object },
    };
  }

  constructor() {
    super();
    this.onStateChanged = this.onStateChanged.bind(this);
  }

  render() {
    return html`
      <web-lighthouse-scores-meta
        .errorMessage=${this.lighthouseError}
        .auditedOn=${this.auditedOn}
        .url=${this.lighthouseResultUrl}
      ></web-lighthouse-scores-meta>
      <web-lighthouse-scores-stats
        @category=${(e) => (this.filteringOn = e.detail)}
        .lhrRuns=${this.lighthouseResultRuns}
        .disabled=${Boolean(this.activeLighthouseUrl)}
      ></web-lighthouse-scores-stats>
      <web-lighthouse-scores-metrics
        .lhr=${this.lighthouseResultLastLhr}
        ?hidden=${!this.lighthouseResultLastLhr}
      ></web-lighthouse-scores-metrics>
      <web-lighthouse-scores-audits
        .filteringOn=${this.filteringOn}
        .lhr=${this.lighthouseResultLastLhr}
        ?hidden=${!this.lighthouseResultLastLhr}
      ></web-lighthouse-scores-audits>
    `;
  }

  onStateChanged() {
    const {
      lighthouseError,
      lighthouseResult,
      activeLighthouseUrl,
      userUrlResultsPending,
    } = store.getState();

    // Only request reports if this element is visible on the page. This prevents a user's signin
    // from fetching reports before they're needed.
    if (userUrlResultsPending) {
      const { userUrl, userUrlSeen } = store.getState();
      requestFetchReports(userUrl, userUrlSeen);
      store.setState({
        userUrlResultsPending: false,
      });
    }

    this.lighthouseError = lighthouseError;
    this.activeLighthouseUrl = activeLighthouseUrl;

    const runs = (lighthouseResult && lighthouseResult.runs) || [];
    const lastRun = runs.slice(-1)[0] || null;

    this.lighthouseResultUrl = lighthouseResult ? lighthouseResult.url : null;
    this.lighthouseResultRuns = runs;
    this.lighthouseResultLastLhr = lastRun ? lastRun.lhr : null;

    let auditedOn = null;
    if (lastRun) {
      const d = new Date(lastRun.auditedOn);
      if (d.getTime()) {
        auditedOn = d;
      }
    }
    this.auditedOn = auditedOn;
  }

  connectedCallback() {
    super.connectedCallback();
    store.subscribe(this.onStateChanged);
    this.onStateChanged();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    store.unsubscribe(this.onStateChanged);
  }
}

customElements.define(
  "web-lighthouse-scores-container",
  LighthouseScoresContainer
);

var css_248z$4 =
  'web-lighthouse-scores-meta .lh-report-meta {\n  margin-top: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\nweb-lighthouse-scores-meta .lh-report-meta__links {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 481px) {\n  web-lighthouse-scores-meta .lh-report-meta__links {\n    justify-content: space-between;\n    flex-direction: row;\n  }\n}\n@media (min-width: 865px) {\n  web-lighthouse-scores-meta .lh-report-meta__links {\n    display: block;\n  }\n}\nweb-lighthouse-scores-meta .lh-report-meta__lastaudit {\n  margin-left: 8px;\n}\n@media (min-width: 481px) {\n  web-lighthouse-scores-meta .lh-report-meta__lastaudit {\n    margin-left: 8px;\n  }\n}\n@media (min-width: 865px) {\n  web-lighthouse-scores-meta .lh-report-meta__lastaudit {\n    min-width: 180px;\n    margin-right: 16px;\n    display: inline-block;\n  }\n}\nweb-lighthouse-scores-meta .lh-report-invisible {\n  visibility: hidden;\n}\nweb-lighthouse-scores-meta .lh-report-link {\n  margin: 0 8px;\n  text-decoration: underline;\n  white-space: nowrap;\n}\nweb-lighthouse-scores-meta .lh-error-msg {\n  color: #e53935;\n  max-width: 100%;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n}\nweb-lighthouse-scores-meta .lh-error-msg:empty {\n  display: none;\n}\nweb-lighthouse-scores-meta .lh-error-msg::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  content: "info";\n  margin-right: 8px;\n  font-size: 20px;\n  alt: "";\n}';
styleInject(css_248z$4);

/**
 * @fileoverview Shows meta information about a Lighthouse run, including an optional error.
 */

/* eslint-disable require-jsdoc */
class LighthouseScoresMeta extends BaseElement {
  static get properties() {
    return {
      errorMessage: { type: String },
      url: { type: String },
      auditedOn: { type: Date },
    };
  }

  constructor() {
    super();
    this.errorMessage = null;
    this.url = null;
    this.auditedOn = null;
  }

  firstUpdated() {
    this.setAttribute("aria-label", "Lighthouse meta information");
  }

  render() {
    const hidden = !this.url || this.errorMessage || !this.auditedOn;

    let auditedOnText = "\u2014"; // em dash
    if (!hidden && this.auditedOn) {
      try {
        const opts = {
          day: "numeric",
          month: "short",
          hour: "numeric",
          minute: "numeric",
        };
        auditedOnText = new Intl.DateTimeFormat("en-US", opts).format(
          this.auditedOn
        );
      } catch (err) {
        auditedOnText = this.auditedOn.toLocaleString();
      }
    }

    const encodedUrl = encodeURIComponent(this.url);

    return html`
      <div class="lh-report-meta">
        <span class="lh-report-meta__links" ?hidden="${hidden}">
          <span class="lh-report-meta__lastaudit">
            <span>Last audit:</span> <span>${auditedOnText}</span>
          </span>
          <span>
            <a
              href="${LH_HOST}/lh/html?url=${encodedUrl}"
              title="View latest Lighthouse report"
              class="viewreport lh-report-link gc-analytics-event"
              data-category="web.dev"
              data-label="view lighthouse report"
              data-action="click"
              target="_blank"
              rel="noopener"
              >View Report</a
            >
          </span>
        </span>
        <span class="lh-error-msg">${this.errorMessage}</span>
      </div>
    `;
  }
}

customElements.define("web-lighthouse-scores-meta", LighthouseScoresMeta);

var css_248z$3 =
  'web-lighthouse-scores-metrics .lh-metrics-container {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  border-radius: inherit;\n  background-color: #fff;\n  margin-top: 16px;\n  padding: 32px;\n  min-height: 64px;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\nweb-lighthouse-scores-metrics .lh-metrics-vitals {\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  padding-top: 16px;\n}\nweb-lighthouse-scores-metrics .lh-metrics-vitals::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  color: #2962ff;\n  content: "bookmark";\n  margin-right: 5px;\n  font-size: 20px;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table {\n  flex-wrap: wrap;\n  justify-content: center;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__metric {\n  flex: 1;\n  width: calc(50% - 15px);\n  min-width: 260px;\n  max-width: 300px;\n  flex-basis: auto;\n  margin: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n  border-bottom: 1px solid #e8eaed;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__metric span {\n  display: flex;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__icon {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  align-items: center;\n  font-size: 16px;\n  margin-left: 5px;\n}\nweb-lighthouse-scores-metrics .lh-vital::after {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  color: #2962ff;\n  content: "bookmark";\n  margin-left: 5px;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__score.lh-score--fail {\n  color: #e53935;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__score.lh-score--fail .lh-metrics-table__icon::before {\n  content: "warning";\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__score.lh-score--average {\n  color: #fb8c00;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__score.lh-score--average .lh-metrics-table__icon::before {\n  content: "info";\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__score.lh-score--pass {\n  color: #18b663;\n}\nweb-lighthouse-scores-metrics .lh-metrics-table__score.lh-score--pass .lh-metrics-table__icon::before {\n  content: "check_circle";\n}';
styleInject(css_248z$3);

/**
 * @fileoverview An element which shows key metrics for a Lighthouse run.
 */

/* eslint-disable require-jsdoc */
class LighthouseScoresMetrics extends BaseElement {
  static get properties() {
    return {
      lhr: { type: Object }, // the single Lighthouse run being shown
    };
  }

  constructor() {
    super();
    this.lhr = null;
  }

  firstUpdated() {
    this.setAttribute("role", "table");
    this.setAttribute("aria-label", "Lighthouse key metrics");
  }

  render() {
    /** @type {string|Array<string|TemplateResult>} */
    let inner = "";
    let hasVitals = false;

    if (this.lhr) {
      const metricToHtml = (metric) => {
        const audit = this.lhr.audits[metric.id];
        if (!audit) {
          return "";
        }

        let label = null;
        if (audit.score >= 0.9) {
          label = "pass";
        } else if (audit.score >= 0.5) {
          label = "average";
        } else {
          label = "fail";
        }

        const vitalsClass = metric.vitals ? "lh-vital" : "";
        hasVitals = hasVitals || metric.vitals;

        return html`
          <div class="lh-metrics-table__metric">
            <span class="${vitalsClass}">${metric.title}</span>
            <span
              class="lh-metrics-table__score lh-score--${label}"
              aria-label="${label} score: ${audit.displayValue}"
              role="group"
            >
              ${audit.displayValue}
              <span class="lh-metrics-table__icon"></span>
            </span>
          </div>
        `;
      };
      inner = metrics.map(metricToHtml);
    }

    return html`
      <div class="lh-metrics-container">
        <div class="lh-metrics-table">${inner}</div>
        <div class="lh-metrics-vitals" ?hidden=${!hasVitals}>
          <span
            >Core Web Vitals assessment. To learn more, see
            <a href="/vitals">Web Vitals</a>.</span
          >
        </div>
      </div>
    `;
  }
}

customElements.define("web-lighthouse-scores-metrics", LighthouseScoresMetrics);

var css_248z$2 =
  'web-lighthouse-scores-stats web-progress-bar {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n}\nweb-lighthouse-scores-stats .lh-score-cards {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  border-radius: inherit;\n  background-color: #fff;\n  min-height: 64px;\n}\nweb-lighthouse-scores-stats .lh-score-cards {\n  margin-top: 16px;\n}\n@media screen and (min-width: 840px) {\n  web-lighthouse-scores-stats .lh-score-cards {\n    margin-top: 32px;\n  }\n}\nweb-lighthouse-scores-stats .lh-score-card {\n  color: unset;\n  font-size: unset;\n  display: block;\n}\nweb-lighthouse-scores-stats .lh-score-card > input[type=radio] {\n  display: none;\n}\nweb-lighthouse-scores-stats .lh-audit-running web-progress-bar {\n  visibility: visible;\n}\nweb-lighthouse-scores-stats .lh-score-cards--fade .lh-score-card {\n  opacity: 0.5;\n}\nweb-lighthouse-scores-stats .lh-score-card {\n  position: relative;\n  padding: 16px;\n  width: 25%;\n  height: 100%;\n  border-left: 1px solid #dadce0;\n  border-bottom: 1px solid #dadce0;\n  display: flex;\n  flex-direction: column;\n}\nweb-lighthouse-scores-stats .lh-score-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 500;\n}\nweb-lighthouse-scores-stats .lh-score-card__data {\n  position: relative;\n}\nweb-lighthouse-scores-stats .lh-score-card__title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 0;\n  user-select: none;\n}\nweb-lighthouse-scores-stats web-sparkline {\n  display: inline-block;\n  width: 100%;\n  height: 100px;\n}\nweb-lighthouse-scores-stats web-lighthouse-gauge {\n  width: 50px;\n  height: 50px;\n  contain: content;\n  display: block;\n  user-select: none;\n}\nweb-lighthouse-scores-stats .lh-score-card__scorescale {\n  text-align: right;\n}\nweb-lighthouse-scores-stats .lh-score-card__scorescale.lh-score__label {\n  margin: 16px 0;\n}\nweb-lighthouse-scores-stats .lh-score__label {\n  font-size: 14px;\n  color: #5f6368;\n  width: 100%;\n}\nweb-lighthouse-scores-stats .lh-score-card__legend {\n  display: inline-block;\n}\nweb-lighthouse-scores-stats .lh-score-card__legend .lh-score-card__legend--ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\nweb-lighthouse-scores-stats .lh-score-card__range {\n  white-space: nowrap;\n}\nweb-lighthouse-scores-stats .lh-score-card__range::before {\n  content: "";\n  width: 14px;\n  height: 8px;\n  border-radius: 4px;\n  display: inline-block;\n  margin: 0 5px;\n}\nweb-lighthouse-scores-stats .lh-score-card__range.lh-score--fail::before {\n  background-color: #e53935;\n}\nweb-lighthouse-scores-stats .lh-score-card__range.lh-score--average::before {\n  background-color: #fb8c00;\n}\nweb-lighthouse-scores-stats .lh-score-card__range.lh-score--pass::before {\n  background-color: #18b663;\n}\n@media screen and (min-width: 1440px) {\n  web-lighthouse-scores-stats web-lighthouse-gauge {\n    width: 50px;\n    height: 50px;\n  }\n  web-lighthouse-scores-stats .lh-score-cards {\n    flex-wrap: nowrap;\n  }\n}\n@media screen and (min-width: 840px) and (max-width: 1024px) {\n  web-lighthouse-scores-stats web-lighthouse-gauge {\n    width: 30px;\n    height: 30px;\n    font-size: 14px;\n  }\n  web-lighthouse-scores-stats .lh-score-card__title {\n    font-size: 14px;\n    max-width: calc(100% - 30px) !important;\n  }\n}\n@media screen and (min-width: 840px) {\n  web-lighthouse-scores-stats .results-row {\n    grid-column: 1/span 12;\n  }\n  web-lighthouse-scores-stats .report_header_enterurl {\n    display: flex;\n  }\n  web-lighthouse-scores-stats .lh-controls {\n    margin-top: 0;\n    flex-wrap: nowrap;\n  }\n  web-lighthouse-scores-stats .lh-enterurl {\n    margin-right: 32px;\n    width: 100%;\n  }\n  web-lighthouse-scores-stats .lh-input {\n    width: 100%;\n  }\n  web-lighthouse-scores-stats .lh-score-card {\n    border-bottom: 0;\n  }\n  web-lighthouse-scores-stats .lh-score-card.lh-score__label {\n    display: none;\n  }\n  web-lighthouse-scores-stats .lh-score-card__header {\n    flex-direction: row;\n  }\n  web-lighthouse-scores-stats .lh-score-card__title {\n    max-width: calc(100% - 60px);\n  }\n  web-lighthouse-scores-stats .lh-score-card__range:not([data-first]) {\n    margin-left: 4px;\n  }\n  web-lighthouse-scores-stats .lh-score__label {\n    text-align: right;\n    margin-top: 16px;\n  }\n  web-lighthouse-scores-stats .lh-score-card__legend {\n    margin-left: 24px;\n  }\n}\n@media screen and (max-width: 840px) {\n  web-lighthouse-scores-stats .lh-score-card {\n    min-width: 50%;\n  }\n  web-lighthouse-scores-stats .lh-score-cards + .lh-score__label {\n    display: none;\n  }\n  web-lighthouse-scores-stats .lh-score-card__title {\n    margin-bottom: 8px;\n  }\n  web-lighthouse-scores-stats .lh-score-card__legend {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 8px 0;\n  }\n  web-lighthouse-scores-stats .lh-score-card__legend:last-child {\n    order: -1;\n  }\n}';
styleInject(css_248z$2);

/**
 * @fileoverview An element which shows a number of sparklines and gauges.
 */

/* eslint-disable require-jsdoc */
class LighthouseScoresStats extends BaseElement {
  static get properties() {
    return {
      lhrRuns: { type: Array }, // all the Lighthouse runs being shown
      category: { type: String }, // the current chosen category
      disabled: { type: Boolean }, // fades out UI elements for LH run
      medians: { type: Array },
    };
  }

  constructor() {
    super();

    this.lhrRuns = [];
    this.disabled = false;
    this.medians = [];
  }

  firstUpdated() {
    this.setAttribute("role", "table");
    this.setAttribute("aria-label", "Lighthouse performance over time");
  }

  /**
   * @param {WMouseEvent<HTMLInputElement>} e
   * @private
   */
  onCardClick(e) {
    if (this.category === e.target.value) {
      // clicking on card again clears filter
      this.category = null;
    } else {
      this.category = e.target.value;
    }
    const event = new CustomEvent("category", {
      detail: this.category,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  /**
   * @param {string} catId
   * @return {!Array<!LighthouseScore>}
   * @export
   */
  getScoresForCategory(catId) {
    const runs = this.lhrRuns || [];
    return runs
      .map((run) => {
        const items = run.lhrSlim;
        const item = (items || []).find((item) => item.id === catId);
        if (!item) {
          return null;
        }
        return {
          date: run.auditedOn,
          score: item.score * 100,
        };
      })
      .filter(Boolean);
  }

  /**
   * @return {Array<TemplateResult>}
   */
  generateCards() {
    /**
     * @param {Array<LighthouseScore>} scores
     * @return {TemplateResult}
     */
    const generateGraphs = (scores) => {
      if (!scores.length) {
        return html``;
      }
      return html`
        <web-sparkline-chart
          class="score-line"
          fill
          showlast
          .values="${scores}"
          .medians="${this.medians}"
        ></web-sparkline>
      `;
    };

    return categories.map(({ id, title }) => {
      const scores = this.getScoresForCategory(id);
      const lastScore = scores.slice(-1)[0] || { score: 0 };

      return html`
        <label class="lh-score-card">
          <input
            type="radio"
            name="lh-score-category"
            value="${id}"
            .checked=${this.category === id}
            @click=${this.onCardClick}
          />
          <div class="lh-score-card__header">
            <span
              class="lh-score-card__title"
              aria-hidden="true"
              >${title}</span
            >
            <web-lighthouse-gauge
              aria-labelledby="${id}-score-gauge-title"
              score="${lastScore.score / 100}"
            ></web-lighthouse-gauge>
          </div>
          <div class="lh-score-card__data">
            ${generateGraphs(scores)}
          </div>
        </div>
      `;
    });
  }

  scoreLegend(inline = true) {
    const className = inline ? "lh-score-card" : "";

    return html`
      <div class="${className} lh-score__label">
        <div class="lh-score-card__legend">
          <span>Score scale:</span>
          <span class="lh-score-card__range lh-score--fail" data-first>
            0-49
          </span>
          <span class="lh-score-card__range lh-score--average">50-89</span>
          <span class="lh-score-card__range lh-score--pass">90-100</span>
        </div>
      </div>
    `;
  }

  render() {
    const lastRun = this.lhrRuns && this.lhrRuns.slice(-1)[0];
    const lhr = lastRun ? lastRun.lhr : null;

    return html`
      <div class="${this.disabled ? "lh-audit-running" : ""}">
        <div class="lh-score-cards ${!lhr ? "lh-score-cards--fade" : ""}">
          <web-progress-bar></web-progress-bar>
          ${this.generateCards()} ${this.scoreLegend(true)}
        </div>
        ${this.scoreLegend(false)}
      </div>
    `;
  }
}

customElements.define("web-lighthouse-scores-stats", LighthouseScoresStats);

var css_248z$1 =
  '@charset "UTF-8";\nweb-url-chooser {\n  display: block;\n  /** The "X" button that appears to the right of a URL. */\n  /** The currently selected URL, not in editing mode. */\n}\nweb-url-chooser:not([switching]) .lh-enterurl--switch {\n  display: none;\n}\nweb-url-chooser[switching] .lh-enterurl--selected {\n  display: none;\n}\nweb-url-chooser .lh-report-header-enterurl {\n  position: relative;\n}\nweb-url-chooser .lh-enterurl {\n  position: relative;\n  align-self: center;\n}\nweb-url-chooser .lh-enterurl__close {\n  align-items: center;\n  background: none;\n  border: 0;\n  box-shadow: none;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  margin: 0 8px;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\nweb-url-chooser .lh-enterurl__close[disabled] {\n  display: none;\n}\nweb-url-chooser .lh-enterurl__close::after {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: normal normal normal 24px/1 "Material Icons";\n  font-feature-settings: "liga";\n  text-rendering: optimizeSpeed;\n  text-transform: none;\n  word-wrap: normal;\n  content: "close";\n  color: #bdc1c6;\n}\nweb-url-chooser .lh-enterurl__close:focus, web-url-chooser .lh-enterurl__close::-moz-focus-inner {\n  outline: 0;\n}\nweb-url-chooser .lh-enterurl__close:focus::after {\n  color: #202124;\n}\nweb-url-chooser .lh-enterurl--selected {\n  font-weight: 500;\n  padding-left: 24px;\n  background: url(\'data:image/svg+xml;utf8,<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg"><path fill="%23212121" d="M7.992,0 C3.576,0 0,3.584 0,8 C0,12.416 3.576,16 7.992,16 C12.416,16 16,12.416 16,8 C16,3.584 12.416,0 7.992,0 Z M13.536,4.8 L11.176,4.8 C10.92,3.8 10.552,2.84 10.072,1.952 C11.544,2.456 12.768,3.48 13.536,4.8 Z M8,1.632 C8.664,2.592 9.184,3.656 9.528,4.8 L6.472,4.8 C6.816,3.656 7.336,2.592 8,1.632 Z M1.808,9.6 C1.68,9.088 1.6,8.552 1.6,8 C1.6,7.448 1.68,6.912 1.808,6.4 L4.512,6.4 C4.448,6.928 4.4,7.456 4.4,8 C4.4,8.544 4.448,9.072 4.512,9.6 L1.808,9.6 Z M2.464,11.2 L4.824,11.2 C5.08,12.2 5.448,13.16 5.928,14.048 C4.456,13.544 3.232,12.528 2.464,11.2 Z M4.824,4.8 L2.464,4.8 C3.232,3.472 4.456,2.456 5.928,1.952 C5.448,2.84 5.08,3.8 4.824,4.8 Z M8,14.368 C7.336,13.408 6.816,12.344 6.472,11.2 L9.528,11.2 C9.184,12.344 8.664,13.408 8,14.368 Z M9.872,9.6 L6.128,9.6 C6.056,9.072 6,8.544 6,8 C6,7.456 6.056,6.92 6.128,6.4 L9.872,6.4 C9.944,6.92 10,7.456 10,8 C10,8.544 9.944,9.072 9.872,9.6 Z M10.072,14.048 C10.552,13.16 10.92,12.2 11.176,11.2 L13.536,11.2 C12.768,12.52 11.544,13.544 10.072,14.048 Z M11.488,9.6 C11.552,9.072 11.6,8.544 11.6,8 C11.6,7.456 11.552,6.928 11.488,6.4 L14.192,6.4 C14.32,6.912 14.4,7.448 14.4,8 C14.4,8.552 14.32,9.088 14.192,9.6 L11.488,9.6 Z" id="icon/action/language_24px"></path></svg>\') no-repeat 0 50%;\n}\nweb-url-chooser .lh-enterurl--selected::before {\n  content: "​";\n  user-select: none;\n}\nweb-url-chooser .lh-input {\n  background-color: #fff;\n  border-radius: 2px;\n  border: 1px solid #e8eaed;\n  color: #202124;\n  font: 16px/20px Roboto, sans-serif;\n  height: 56px;\n  margin: 0;\n  max-width: 100%;\n  outline: none;\n  padding: 8px 16px;\n  transition: box-shadow 0.2s ease-in-out;\n  width: 100%;\n}\nweb-url-chooser .lh-input:focus {\n  box-shadow: inset 0 -2px 0 0 #3740ff;\n}\nweb-url-chooser .lh-input::-ms-clear {\n  display: none;\n}\nweb-url-chooser .lh-controls {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\nweb-url-chooser .lh-controls .w-button {\n  flex: 1 1 auto;\n  height: 56px;\n  justify-content: center;\n}\nweb-url-chooser .lh-controls button + button {\n  margin-left: 16px;\n}\n\n@media screen and (min-width: 840px) {\n  web-url-chooser .lh-report-header-enterurl {\n    display: flex;\n  }\n  web-url-chooser .lh-controls {\n    margin-top: 0;\n    flex-wrap: nowrap;\n  }\n  web-url-chooser .lh-enterurl {\n    margin-right: 32px;\n    width: 100%;\n  }\n  web-url-chooser .lh-input {\n    width: 100%;\n  }\n}';
styleInject(css_248z$1);

/**
 * @fileoverview Displays the primary URL chooser for Lighthouse.
 */
class UrlChooser extends BaseElement {
  static get properties() {
    return {
      url: { type: String },
      switching: { type: Boolean, reflect: true },
      hasError: { type: Boolean },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.url = null; // when signed out or waiting for Firestore, this is null
    this.switching = true; // controls whether the user is editing the URL
    this.disabled = false; // disables buttons (because Lighthouse is active)

    // non-properties (stolen DOM nodes)
    /** @type HTMLInputElement | null */
    this._urlInput;
    /** @type HTMLButtonElement | null */
    this._runLighthouseButton;
    this.hasError = false;
  }

  render() {
    return html`
      <div class="lh-report-header-enterurl">
        <div class="lh-enterurl lh-enterurl--selected">${this.url}</div>
        <div class="lh-enterurl lh-enterurl--switch">
          <input
            ?disabled=${this.disabled}
            type="url"
            class="lh-input"
            name="url"
            placeholder="Enter a web page URL"
            pattern="https?://.*"
            minlength="7"
            @keyup="${this.onUrlKeyup}"
          />
          <button
            ?disabled=${this.disabled}
            class="lh-enterurl__close gc-analytics-event"
            data-category="web.dev"
            data-label="measure, remove url"
            data-action="click"
            aria-label="Remove URL"
            @click=${this.onClearInput}
          ></button>
        </div>
        <div class="lh-controls">
          <button
            ?disabled=${this.disabled}
            class="w-button w-button--secondary gc-analytics-event"
            data-category="web.dev"
            data-label="measure, switch url"
            data-action="click"
            @click=${this.onSwitchUrl}
          >
            Switch URL
          </button>
          <button
            ?disabled=${this.disabled}
            class="w-button w-button--primary gc-analytics-event"
            data-category="web.dev"
            data-label="measure, run audit"
            data-action="click"
            id="run-lh-button"
            @click=${this.onRequestAudit}
          >
            Run Audit
          </button>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this._urlInput = this.renderRoot.querySelector('input[type="url"]');
    this._runLighthouseButton = this.renderRoot.querySelector("#run-lh-button");
  }

  updated(changedProperties) {
    const input = this._urlInput;

    if (changedProperties.has("hasError")) {
      if (this.hasError) {
        // hasError false -> true implies switching, but not the other way around
        this.switching = true;
      }
    }
    if (changedProperties.has("switching") && this.switching) {
      input.setSelectionRange(0, input.value.length);
      input.focus();
    }
    if (changedProperties.has("url")) {
      // Note: This behavior can't be performed in a setter as the <input /> might not have been
      // rendered yet.
      const url = this.url;
      if (input) {
        if (this.switching && url && !input.value) {
          // if the user has just signed in, the element was in an initial state,
          // AND the user hasn't typed anything, reset element with URL
          input.value = url;
          this.switching = false;
        } else if (url === null && !this.switching) {
          // if the user has signed out, clear the href and enter switching mode
          input.value = "";
          this.switching = true;
        } else if (!this.switching) {
          // in all other cases, only update the URL if ther user isn't switching
          input.value = url;
        }
      }
    }
  }

  onRequestAudit() {
    // Even if the user isn't switching URLs, fix and verify the saved URL which is inserted into
    // the <input /> inside this element.
    this.fixUpUrl();
    if (!this._urlInput.validity.valid) {
      const detail =
        "Invalid URL. Please enter a full URL starting with https://.";
      const event = new CustomEvent("web-error", { bubbles: true, detail });
      this.dispatchEvent(event);
      return;
    }

    // "Request Audit" finishes editing the URL.
    this.switching = false;

    const event = new CustomEvent("audit", { detail: this._urlInput.value });
    this.dispatchEvent(event);
  }

  onSwitchUrl() {
    this.switching = true;

    // Focus won't occur if switching is already true, so trigger it here too.
    this._urlInput.focus();
  }

  onUrlKeyup(e) {
    if (e.key === "Escape") {
      this.onClearInput();
    } else if (e.key === "Enter") {
      this._runLighthouseButton.click();
    }
  }

  /**
   * Performs basic fixes on the URL in the <input />.
   */
  fixUpUrl() {
    let url = this._urlInput.value.trim();
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      url = `http://${url}`;
    }
    if (url !== this._urlInput.value && this._urlInput) {
      this._urlInput.value = url;
    }
  }

  onClearInput() {
    if (this._urlInput) {
      this._urlInput.value = "";
    }
  }
}

customElements.define("web-url-chooser", UrlChooser);

/**
 * @fileoverview Manages state interaction with UrlChooser.
 *
 * Invokes Lighthouse when the UrlChooser requests it, possibly with an updated URL.
 */
class UrlChooserContainer extends BaseStateElement {
  static get properties() {
    return {
      url: { type: String },
      active: { type: Boolean },
      hasError: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.url = null; // when signed out or waiting for Firestore, this is null
    this.active = false;
  }

  render() {
    return html`
      <web-url-chooser
        .url=${this.url}
        .disabled=${this.active}
        .hasError=${this.hasError}
        @audit=${this.runAudit}
      ></web-url-chooser>
    `;
  }

  onStateChanged(state) {
    // As userUrl can change (a signed-in user can modify it in another browser
    // window), _prefer_ any URL that's currently being run through Lighthouse.
    // This will prevent e.g. "foo.com" (after a user has hit "Run Audit") being
    // replaced by "bar.com" (which is run in another browser window), and then
    // results being approprtioned to the wrong URL.

    this.url = state.activeLighthouseUrl || state.userUrl;
    this.active = state.activeLighthouseUrl !== null;
    this.hasError = Boolean(state.lighthouseError);
  }

  runAudit(e) {
    const url = e.detail;
    requestRunLighthouse(url);
  }
}

customElements.define("web-url-chooser-container", UrlChooserContainer);

var css_248z = ".lh-signin-button {\n  margin-top: 16px;\n}";
styleInject(css_248z);

/* eslint-disable require-jsdoc */
class SigninButton extends BaseStateElement {
  static get properties() {
    return {
      checkingSignedInState: { type: Boolean },
      isSignedIn: { type: Boolean },
    };
  }

  render() {
    if (this.isSignedIn) {
      // lit-element ignores "" (prior to 2.2.2), so return an empty template.
      return html``;
    }

    // We don't set "disabled" attribute on the <button> based on this, because
    // it causes a visual transition. Just disable the action while checking.
    const action = this.checkingSignedInState ? null : signIn;

    return html`
      <button
        @click=${action}
        class="w-button w-button--secondary lh-signin-button gc-analytics-event"
        data-category="web.dev"
        data-label="measure, big sign-in"
        data-action="click"
      >
        <svg
          class="w-mr--sm"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 48 48"
          width="24"
          heigh="24"
        >
          <defs>
            <path
              id="a"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
          </defs>
          <clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath>
          <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
          <path
            clip-path="url(#b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
          />
          <path
            clip-path="url(#b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
          />
          <path
            clip-path="url(#b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
          />
        </svg>
        Sign in with Google
      </button>
    `;
  }

  onStateChanged({ checkingSignedInState, isSignedIn }) {
    this.checkingSignedInState = checkingSignedInState;
    this.isSignedIn = isSignedIn;
  }
}

customElements.define("web-signin-button", SigninButton);
