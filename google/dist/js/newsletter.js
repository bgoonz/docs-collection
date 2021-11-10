import "./index-5e56af64.js";
import { B as BaseElement, k as debounce } from "./index-79f4e752.js";
import "./store-a85adfb0.js";

/**
 * @fileoverview Element that resizes iframe based on content.
 */

/**
 * Resizes newsletter iframe.
 *
 * @extends {BaseElement}
 * @final
 */
class Newsletter extends BaseElement {
  constructor() {
    super();
    this.onIFrameLoad = this.onIFrameLoad.bind(this);
    this.resizeIFrame = debounce(this.resizeIFrame.bind(this), 100);
  }

  connectedCallback() {
    super.connectedCallback();
    this.iframe = this.querySelector("iframe");
    if (this.iframe) {
      if (this.iframe.contentWindow.document.readyState === "complete") {
        this.onIFrameLoad();
      } else {
        this.iframe.addEventListener("load", this.onIFrameLoad);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.resizeIFrame);
  }

  onIFrameLoad() {
    this.iframe.scrolling = "no";
    this.iframe.contentWindow.document
      .querySelectorAll("a")
      .forEach((a) => (a.target = "_parent"));
    this.resizeIFrame();
    window.addEventListener("resize", this.resizeIFrame);
    this.iframe.removeEventListener("load", this.onIFrameLoad);
  }

  resizeIFrame() {
    this.iframe.height = String(
      this.iframe.contentWindow.document.body.scrollHeight
    );
  }
}

customElements.define("web-newsletter", Newsletter);
