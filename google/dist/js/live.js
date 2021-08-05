import {
  a as BaseStateElement,
  h as html,
  s as styleInject,
  B as BaseElement,
} from "./index-79f4e752.js";
import {
  B as BaseModalElement,
  g as generateIdSalt,
} from "./index-e68cd105.js";
import { s as store } from "./store-a85adfb0.js";
import "./index-5e56af64.js";

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
 * @fileoverview A carousel manager which controls the video links for the top
 * carousel of the event page.
 *
 * Note that this element just uses global styles for the Live page.
 */

class EventCarousel extends BaseStateElement {
  static get properties() {
    return {
      eventDays: { type: Object },
    };
  }

  render() {
    // Note that we use `isChatActive` to determine whether the current day
    // shows as "Broadcasting". We backed ourselves into a corner with the
    // `activeEventDay` property as it actually reflects the upcoming day, even
    // hours before the event starts (which is useful for the YT _preview_).

    const renderDay = (day) => {
      const { isComplete, isChatActive, videoId, playlistId, title } = day;
      const isClickable = Boolean(
        // Allows to click if playlist is available, otherwise depends on event status.
        (playlistId || isComplete || isChatActive) && (videoId || playlistId)
      );

      // The thumbnail is shown as long as we have a videoId, regardless of
      // whether the day is complete or not.
      // nb. We use "maxresdefault" as the other images have black bars as they
      // try to fit 4:3 rendering.
      const thumbnailPart = videoId
        ? html`<div class="w-event-carousel__thumbnail">
            <img
              alt="${title}"
              src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg"
              width="178"
              height="110"
            />
          </div>`
        : "";

      let message = "Coming soon";
      if (isChatActive) {
        message = "Broadcasting";
      } else if (isClickable) {
        message = "All sessions";
      }

      const descriptionPart = html` <div class="w-event-carousel__description">
        ${title} &mdash; ${message}
      </div>`;

      if (isClickable) {
        // Prefer the playlistId over the videoId, if available.
        const href =
          !isChatActive && playlistId
            ? `https://www.youtube.com/playlist?list=${playlistId}`
            : `https://youtu.be/${videoId}`;
        return html`
          <a
            class="w-event-carousel__day gc-analytics-event"
            data-category="web.dev"
            data-label="live, open ${title} on YouTube"
            data-action="click"
            href="${href}"
            target="_blank"
          >
            ${thumbnailPart} ${descriptionPart}
          </a>
        `;
      }
      return html`
        <div class="w-event-carousel__day w-event-carousel__pending">
          ${thumbnailPart} ${descriptionPart}
        </div>
      `;
    };

    return html`${this.eventDays.map(renderDay)}`;
  }

  onStateChanged({ eventDays }) {
    this.eventDays = eventDays;
  }
}

customElements.define("web-event-carousel", EventCarousel);

var css_248z$4 =
  'web-event-map {\n  display: block;\n  text-align: left;\n  font-family: "Google Sans", sans-serif;\n}\nweb-event-map code {\n  display: none;\n}\nweb-event-map ul {\n  margin-top: 24px;\n  list-style: none;\n  font: inherit;\n  white-space: nowrap;\n  line-height: 32px;\n}\nweb-event-map ul li > :first-child {\n  min-width: 180px;\n  display: inline-block;\n}\nweb-event-map ul li > :last-child {\n  font-size: 14px;\n  color: #5f6368;\n}\nweb-event-map select {\n  color: #5f6368;\n  font-size: 16px;\n  margin: -14px 0 16px;\n  width: initial;\n}';
styleInject(css_248z$4);

/**
 * @fileoverview Element that renders a map and a list of local events.
 */

const encodeMarkers = function (markers) {
  const color = "red";
  return markers
    .map((marker) => {
      return `markers=color:${color}%7Clabel:${marker.place[0]}%7C${marker.marker}`;
    })
    .join("&");
};

const formatDate = function (date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

/**
 * Renders a map and a list of local events. It takes input from a <code>
 * element embedded as a child of this element.
 *
 * @final
 */
class EventMap extends BaseStateElement {
  static get properties() {
    return {
      title: { type: String },
      center: { type: String },
      zoom: { type: Number },
      size: { type: String },
      events: { type: String },
      key: { type: String },
      localEvents: { type: Object },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.center = "";
    this.size = "600x300";
    this.events = null;
    this.zoom = 0;
    this.key = "";
  }

  onStateChanged({ communityEvents }) {
    if (communityEvents && this.events !== communityEvents) {
      this.events = communityEvents;
      this.eventRegions = Object.keys(this.events);
      this.localEvents = this.events[this.eventRegions[0]];
    }
  }

  onChange(e) {
    this.localEvents = this.events[e.target.value];
  }

  render() {
    if (!this.events) {
      // Returning null/falsey/empty string tells Lit to leave the current contents alone.
      return html``;
    }

    // Set the minimal zoom to 4, if only 1 marker present.
    const zoom = this.zoom || this.localEvents.length < 2 ? 4 : "";
    const params = [
      `center=${this.center}`,
      `zoom=${zoom}`,
      `size=${this.size}`,
      `maptype=roadmap`,
      encodeMarkers(this.localEvents),
      `key=${this.key}`,
    ].join("&");
    const url = `https://maps.googleapis.com/maps/api/staticmap?${params}`;

    // prettier-ignore
    /* eslint-disable indent */
    return html`
      <select class="w-select--borderless" @change="${this.onChange}">
        ${this.eventRegions.map((region) => {
          return html`<option value=${region}>${region}</option>`;
        })}
      </select>
      <img
        width="600"
        height="300"
        src="${url}"
        alt="${this.title}"
      />
      <ul class="w-event-list__community-events">
        ${this.localEvents.map((entry) => {
          const date = new Date(entry.date);
          return html`
            <li>
              <a href="${entry.link}" target="_blank">${entry.place} (${entry.country})</a>
              <time datetime=${date.toISOString()}>
                ${formatDate(date)}
              </time>
            </li>
          `;
        })}
      </ul>
    `;
  }
}

customElements.define("web-event-map", EventMap);

var css_248z$3 =
  "web-event-schedule-modal .modal {\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  padding: 16px 16px 8px;\n  background: white;\n  max-width: 100%;\n  width: 512px;\n}\n@media (min-width: 481px) {\n  web-event-schedule-modal .modal {\n    padding: 16px 24px;\n  }\n}\nweb-event-schedule-modal h2 {\n  margin: 0 0 12px;\n}\nweb-event-schedule-modal .w-event-schedule-modal__about {\n  font-size: 14px;\n  color: #3c4043;\n  font-weight: 500;\n  margin: 12px 0;\n}\nweb-event-schedule-modal button.w-button.close {\n  float: right;\n  letter-spacing: 0;\n  margin: auto -8px -8px auto;\n  text-transform: none;\n}\nweb-event-schedule-modal p {\n  color: #5f6368;\n  font: inherit;\n  font-size: 14px;\n  margin: 8px 0;\n}\nweb-event-schedule-modal p:first-of-type {\n  margin-top: 16px;\n}";
styleInject(css_248z$3);

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
 * @fileoverview Modal element for session information.
 */

class EventScheduleModal extends BaseModalElement {
  static get properties() {
    return {
      sessionRow: { type: Object },
      _sessionName: { type: String },
      _authorsPart: { type: Object },
      _abstractPart: { type: Object },
      _youtubeLinkPart: { type: Object },
      _titleId: { type: String },
      open: { type: Boolean, reflect: true },
      animatable: { type: Boolean, reflect: true },
      overflow: { type: Boolean, reflect: true },
      parentModal: { type: String, reflect: true, attribute: "parent-modal" },
    };
  }

  constructor() {
    super();

    this._titleId = generateIdSalt();
    this.sessionRow = null;
  }

  shouldUpdate(changedProperties) {
    if (!changedProperties.has("sessionRow")) {
      return super.shouldUpdate(changedProperties);
    }

    this._authorsPart = null;
    this._abstractPart = null;
    this._sessionName = "";

    if (!this.sessionRow) {
      return true;
    }
    const row = this.sessionRow;

    // Extract the authors' collection and abstract.
    this._authorsPart = row.querySelector(".w-event-schedule__speaker");
    this._abstractPart = row.querySelector(".w-event-schedule__abstract");
    if (this._abstractPart) {
      this._abstractPart.removeAttribute("hidden");
    }

    // Extract the optional YouTube link.
    this._youtubeLinkPart = row.querySelector(".w-event-schedule__video");

    // Extract the title from the link that was used to open us.
    const link = row.querySelector(".w-event-schedule__open");
    if (link) {
      this._sessionName = link.textContent;
    }
    return true;
  }

  render() {
    return html`
      <div class="modal" aria-modal="true" aria-labelledby="${this._titleId}">
        <div class="w-event-schedule-modal__about">About this session</div>
        <h2 id=${this._titleId}>${this._sessionName || "?"}</h2>
        ${this._authorsPart || ""}
        ${this._youtubeLinkPart || ""}
        ${this._abstractPart || ""}
        <button
          class="w-button close gc-analytics-event"
          data-category="web.dev"
          data-label="live, close session modal"
          data-action="click"
          @click=${() => (this.open = false)}
        >
          Close
        </button>
      </main>
    `;
  }
}

customElements.define("web-event-schedule-modal", EventScheduleModal);

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
 * @fileoverview A schedule manager which opens and closes modals based on
 * the current href. Looks in children for content.
 *
 * This does not inherit from BaseStateElement as it is not a LitElement.
 */

class EventSchedule extends HTMLElement {
  constructor() {
    super();
    this.onStateChanged = this.onStateChanged.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onModalAnimationEnd = this.onModalAnimationEnd.bind(this);

    this._activeEventDay = null;
    this._currentSession = null;
    /** @type import('../Tabs').Tabs */
    this._tabsElement = null;

    // This just creates an element, we're not yet making it part of the DOM,
    // so it's allowed here in the constructor.

    this._modalElement =
      /** @type import('../EventScheduleModal').EventScheduleModal */ (
        document.createElement("web-event-schedule-modal")
      );
    this._modalElement.className = "web-modal";
    this._modalElement.open = false;
    this._modalElement.addEventListener("close-modal", this.onCloseModal);

    this._modalElement.addEventListener(
      "animationend",
      this.onModalAnimationEnd
    );
  }

  onCloseModal() {
    if (!window.location.hash.substr(1)) {
      return; // we closed ourselves, so got an event that can be ignored
    }
    const url = window.location.pathname + window.location.search;
    window.history.replaceState(null, null, url);
    this.onHashChange();
  }

  /**
   * @param {string} hash
   * @returns {HTMLElement|null}
   */
  _elementForHash(hash = window.location.hash) {
    const id = hash.substr(1);
    return this.querySelector(`[data-session-id="${id}"]`);
  }

  /**
   * Controls the open/close of session modals, by matching the page's hash to any contained
   * elements with a matching `data-session-id` attribute.
   *
   * If no hash is set, or no element is found, hides any modal.
   */
  onHashChange() {
    const session = this.isConnected ? this._elementForHash() : null;
    if (session === this._currentSession) {
      return;
    }

    this._currentSession = session;
    if (!session) {
      this._modalElement.open = false;
      // Our animationend handler, added above, clears the modal after its remove animation.
      return;
    }

    // Clone the session node and pass it to our session. This is kinda gross but basically we use
    // it as the canonical source of truth for the modal. We also have to remove all tabindex
    // attributes as they may have been added by the inert polyfill.
    const clone = /** @type HTMLElement */ (session.cloneNode(true));
    clone.querySelectorAll("[tabindex]").forEach((el) => {
      el.removeAttribute("tabindex");
    });

    // If the user opens this page from externally on a specific session, make sure we're showing
    // the correct day of tab.
    const index = this._tabsElement.indexOfTabByChild(session);
    if (index !== -1) {
      this._tabsElement.activeTab = index;
    }

    this._modalElement.sessionRow = clone;
    this._modalElement.open = true;
    document.body.append(this._modalElement);
  }

  onModalAnimationEnd() {
    // Don't remove the modal if it's been made open again.
    if (!this._modalElement.open) {
      this._modalElement.remove();
    }
  }

  /**
   * Handles clicks within this schedule, searching for hashes which open a
   * session.
   *
   * @param {WMouseEvent} ev
   */
  onClick(ev) {
    if (!ev.target.href) {
      return;
    }

    const check = new URL(ev.target.href);
    const id = check.hash.substr(1);
    check.hash = "";

    const page = new URL(window.location.toString());
    page.hash = "";

    if (!(page.toString() === check.toString() && id)) {
      return;
    }

    // We clicked on a link that's on the same page but has a hash, so intercept
    // it if handled. We need this as otherwise a history stack event occurs.

    const session = this._elementForHash(ev.target.hash);
    if (!session) {
      return;
    }

    window.history.replaceState(null, null, ev.target.hash);
    this.onHashChange();
    ev.preventDefault();
  }

  connectedCallback() {
    this._tabsElement = this.querySelector("web-tabs");
    if (!this._tabsElement) {
      throw new Error(`web-event-schedule expects web-tabs child element`);
    }

    window.addEventListener("hashchange", this.onHashChange);
    this.addEventListener("click", this.onClick);

    customElements.whenDefined("web-tabs").then(() => {
      if (!this.isConnected) {
        return; // disconnected while we waited for web-tabs
      }

      store.subscribe(this.onStateChanged);
      this.onStateChanged(store.getState()); // subscribe doesn't trigger listener
      this.onHashChange();
    });
  }

  disconnectedCallback() {
    store.unsubscribe(this.onStateChanged);

    window.removeEventListener("hashchange", this.onHashChange);
    this.removeEventListener("click", this.onClick);
    this.onHashChange();

    this._tabsElement = null;
  }

  onStateChanged({ activeEventDay }) {
    // Update the activeEventDay which in turn sets the current active tab.
    // This happens initially when the component first boots and again if the
    // user leaves the tab open and we transition to a new day.
    // This does not attempt to set the tabsElement on every tick because we
    // assume the user will be changing tabs on their own.
    if (
      activeEventDay &&
      activeEventDay !== this._activeEventDay &&
      !this._modalElement.open
    ) {
      this._tabsElement.activeTab = activeEventDay.index;
      this._activeEventDay = activeEventDay;
    }
  }
}

customElements.define("web-event-schedule", EventSchedule);

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

// Pretend the date is active within this buffer. This is useful so we can
// reveal the player for a bit more time.
const bufferMinutes = 60;
const bufferChatMinutes = 10;

// Run the timer every minute.
const timerEveryMillisecond = 60 * 1000;

/**
 * @fileoverview Provides an element which publishes event data to Unistore, as well as finding
 * the most relevant day to show information for (the active day).
 *
 * Notably:
 *   - From one hour after the current day, you'll see that day
 *   - If you refresh the page one hour after that day, you'll see the next day
 */

class EventStore extends HTMLElement {
  constructor() {
    super();
    this.onStateChanged = this.onStateChanged.bind(this);
    this._update = this._update.bind(this);

    this._timer = 0;
    this._timeOffset = 0;
    this._days = [];
  }

  /**
   * Interval function to determine which day is currently active and whether
   * or not chat should be enabled.
   */
  _update() {
    const now = +new Date() + this._timeOffset;

    let daysPropertiesChange = false;
    let activeDay = null;

    // If there was a previously active day (because the user has their tab open for a long time),
    // then prefer it over showing the upcoming day (we store that in nextPendingDay).
    let nextPendingDay = null;

    for (const day of this._days || []) {
      const timeOffsetBy = (minutes) => {
        const d = new Date(day.when);
        d.setMinutes(d.getMinutes() + minutes);
        return +d;
      };

      const activeStart = timeOffsetBy(-bufferMinutes);
      const activeEnd = timeOffsetBy(day.duration + bufferMinutes);
      const chatStart = timeOffsetBy(-bufferChatMinutes);
      const chatEnd = timeOffsetBy(day.duration + bufferChatMinutes);

      // DEBUG
      // Suggest leaving this checked-in because it's very useful for debugging.
      // console.log(
      //   'day.when',
      //   `${new Date(day.when)}\n`,
      //   'activeStart:',
      //   `${new Date(activeStart)}\n`,
      //   'chatStart:',
      //   `${new Date(chatStart)}\n`,
      //   'activeEnd:',
      //   `${new Date(activeEnd)}\n`,
      //   'chatEnd:',
      //   `${new Date(chatEnd)}\n`,
      // );

      // Are we past the completion of this day? This allows the YT link to show up.
      const isComplete = now >= activeEnd;
      if (day.isComplete !== isComplete) {
        day.isComplete = isComplete;
        daysPropertiesChange = true;
      }
      if (!isComplete && nextPendingDay === null) {
        // The first time we find an incomplete day (e.g., tomorrow's event day), mark it as the
        // next pending day we use as the active fallback.
        nextPendingDay = day;
      }

      // Is this day active (within the buffer time range)?
      const isActive = now >= activeStart && now < activeEnd;
      if (isActive) {
        activeDay = day;
      }

      // Is this the active day for chat (within the actual time range)?
      const isChatActive = now >= chatStart && now < chatEnd;
      if (day.isChatActive !== isChatActive) {
        day.isChatActive = isChatActive;
        daysPropertiesChange = true;
      }
    }

    // If there was no previously active day, then choose the upcoming day.
    // If we've reached the end of the event then revert to the first day.
    if (activeDay === null) {
      activeDay = nextPendingDay ? nextPendingDay : this._days[0];
    }

    // If there was a property change on any particular day, change the Array
    // reference so listeners can use simple comparisons to force a refresh.
    if (daysPropertiesChange) {
      this._days = this._days.slice();
    }

    store.setState({
      eventDays: this._days,
      activeEventDay: activeDay,
    });
  }

  connectedCallback() {
    const raw = JSON.parse(this.textContent.trim());

    for (let i = 0; i < raw.days.length; ++i) {
      const day = raw.days[i];
      day.index = i;
      day.isComplete = false;
      day.isChatActive = false;
    }

    this._days = raw.days || [];
    store.setState({ communityEvents: raw.communityEvents });

    this._update();
    this._timer = window.setInterval(this._update, timerEveryMillisecond);

    store.subscribe(this.onStateChanged);
    this.onStateChanged(store.getState());
  }

  disconnectedCallback() {
    store.unsubscribe(this.onStateChanged);

    this._days = [];
    this._update();

    window.clearInterval(this._timer);
  }

  onStateChanged({ timeOffset }) {
    if (this._timeOffset !== timeOffset) {
      this._timeOffset = timeOffset;
      this._update();
    }
  }
}

customElements.define("web-event-store", EventStore);

var css_248z$2 =
  'web-event-time time {\n  align-items: center;\n  display: flex;\n  min-height: 120px;\n}\nweb-event-time .date {\n  align-items: center;\n  display: flex;\n  flex-flow: column;\n  font-family: "Google Sans", sans-serif;\n  margin-right: 32px;\n  text-align: left;\n  width: 80px;\n}\nweb-event-time .date__month {\n  text-transform: uppercase;\n}\nweb-event-time .date__day {\n  font-size: 44px;\n  line-height: 1;\n  text-transform: uppercase;\n}\nweb-event-time .time {\n  text-align: left;\n}\nweb-event-time .time__timezone {\n  color: #5f6368;\n}';
styleInject(css_248z$2);

/**
 * @fileoverview Element that renders a time in local timezone.
 */

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const connected = new Set();
let timezoneCheckInterval = 0;
let previous = 0;

/**
 * This runs every ten minutes while any `web-event-time` element exists on the page. It checks for
 * the rare but frustrating case where a user's timezone changes while the page is open.
 */
function checkTimezone() {
  const now = new Date().getTimezoneOffset();
  if (now !== previous) {
    previous = now;
    connected.forEach((node) => node.requestUpdate());
  }
}

/**
 * Renders an event's time in the user's local timezone, including optional duration.
 *
 * @extends {BaseElement}
 * @final
 */
class EventTime extends BaseElement {
  static get properties() {
    return {
      datetime: { type: String },
      duration: { type: Number },
    };
  }

  constructor() {
    super();
    this._date = null;
    this.datetime = null;
    this.duration = null;
  }

  connectedCallback() {
    super.connectedCallback();

    if (connected.size === 0) {
      // Every 10 minutes, check if we're in the same timezone.
      timezoneCheckInterval = window.setInterval(checkTimezone, 10 * 60 * 1000);
    }
    connected.add(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    connected.delete(this);
    if (connected.size === 0) {
      window.clearInterval(timezoneCheckInterval);
    }
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has("datetime")) {
      this._date = null;

      if (this.datetime) {
        const d = new Date(Date.parse(this.datetime));
        if (+d) {
          // +d checks the validity of the parsed date (0 if invalid).
          this._date = d;
        }
      }
    }

    return super.shouldUpdate(changedProperties);
  }

  render() {
    if (!this._date) {
      return html`<!-- Invalid time "${this.datetime || ""}" -->`;
    }

    const format = (d, options) => {
      return new Intl.DateTimeFormat("default", options).format(d);
    };
    const options = new Intl.DateTimeFormat().resolvedOptions();

    let durationPart = html``;
    if (this.duration > 0) {
      const end = new Date(this._date);
      end.setMinutes(end.getMinutes() + this.duration);
      durationPart = html`
        &mdash; ${format(end, { hour: "numeric", minute: "2-digit" })}
      `;
    }

    return html`
      <time datetime=${this._date.toISOString()}>
        <div class="date">
          <div class="date__month">${months[this._date.getMonth()]}</div>
          <div class="date__day">${this._date.getDate()}</div>
        </div>
        <div class="time">
          <div class="time__value">
            ${format(this._date, { hour: "numeric", minute: "2-digit" })}
            ${durationPart}
          </div>
          <div class="time__timezone">
            ${options.timeZoneName || options.timeZone || "Local Time"}
          </div>
        </div>
      </time>
    `;
  }
}

customElements.define("web-event-time", EventTime);

var css_248z$1 =
  'web-event-q-and-a {\n  display: block;\n}\nweb-event-q-and-a select {\n  color: #5f6368;\n  font-family: "Google Sans", sans-serif;\n  margin: -14px 0 16px;\n  width: auto;\n}';
styleInject(css_248z$1);

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
 * @extends {BaseElement}
 * @final
 */
class EventQAndA extends BaseElement {
  static get properties() {
    return {
      selected: { type: String },
    };
  }

  constructor() {
    super();
    this.closeDetail = this.closeDetail.bind(this);
    this.selectCategory = this.selectCategory.bind(this);

    this.childElements = [];
    this.categories = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.childElements = Array.from(this.children);

    const categories = new Set();
    this.childElements.forEach((element) =>
      categories.add(element.getAttribute("data-category"))
    );
    this.categories = Array.from(categories).map((c) => ({
      name: c,
      value: c,
    }));
    this.categories.push({ name: "All categories", value: null });

    this.selected = this.categories[0].value;
    this.addEventListener("click", this.closeDetail);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.closeDetail);
  }

  render() {
    this.filterCategories();

    return html`
      <select
        class="w-select--borderless w-mb--sm"
        @change="${this.selectCategory}"
      >
        ${this.renderOptions()}
      </select>
      ${this.childElements}
    `;
  }

  renderOptions() {
    return this.categories.map((c) =>
      c.value
        ? html`<option value="${c.value}">${c.name}</option>`
        : html`<option value>${c.name}</option>`
    );
  }

  closeDetail($event) {
    const categoryElement = $event.target.closest("[data-category]");
    if (!categoryElement) {
      return;
    }
    this.childElements.forEach((element) => {
      if (element !== categoryElement) {
        element.open = false;
      }
    });
  }

  selectCategory($event) {
    this.selected = $event.target.value;
  }

  filterCategories() {
    this.childElements.forEach((element) => {
      const show =
        !this.selected ||
        element.getAttribute("data-category") === this.selected;
      element.classList.toggle("hidden", !show);
    });
  }
}

customElements.define("web-event-q-and-a", EventQAndA);

var css_248z =
  'web-livestream-container {\n  display: flex;\n  margin: auto;\n  max-width: 1600px;\n  position: relative;\n}\nweb-livestream-container .web-livestream-container__col-yt {\n  max-width: 100%;\n  align-items: center;\n  background-color: #f8f9fa;\n  display: flex;\n  flex: 1;\n}\nweb-livestream-container .web-livestream-container__col-chat {\n  display: none;\n}\n@media (min-width: 865px) {\n  web-livestream-container .web-livestream-container__col-chat {\n    border-left: 1px solid #dadce0;\n    display: block;\n    min-height: 600px;\n    width: 400px;\n  }\n}\n@media (hover: none) {\n  web-livestream-container .web-livestream-container__col-chat {\n    display: none;\n  }\n}\nweb-livestream-container .w-youtube-chat {\n  height: 100%;\n  width: 100%;\n}\nweb-livestream-container .w-youtube-disabled-chat {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n}\nweb-livestream-container .w-youtube-disabled-chat__text {\n  max-width: 250px;\n  color: #5f6368;\n}\nweb-livestream-container .w-youtube-disabled-chat__link {\n  display: block;\n  font-family: "Google Sans", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  margin-top: 16px;\n}\nweb-livestream-container .web-livestream-container__chat-toggle {\n  display: none;\n}\n@media (min-width: 865px) {\n  web-livestream-container .web-livestream-container__chat-toggle {\n    align-items: center;\n    appearance: none;\n    background: none;\n    border-radius: 1px;\n    border: none;\n    bottom: -48px;\n    color: #5f6368;\n    cursor: pointer;\n    display: flex;\n    font-size: 12px;\n    height: 40px;\n    line-height: 20px;\n    padding: 8px;\n    position: absolute;\n    right: 0;\n    text-align: center;\n  }\n  web-livestream-container .web-livestream-container__chat-toggle:hover {\n    background-color: #dadce0;\n  }\n}\n@media (hover: none) {\n  web-livestream-container .web-livestream-container__chat-toggle {\n    display: none;\n  }\n}\n\nweb-livestream-container[chat-closed] .web-livestream-container__col-chat {\n  display: none;\n}';
styleInject(css_248z);

/* eslint-disable require-jsdoc */
class LivestreamContainer extends BaseStateElement {
  static get properties() {
    return {
      videoId: { type: String },
      isChatActive: { type: Boolean },
      chatClosed: { type: Boolean, reflect: true, attribute: "chat-closed" },
    };
  }

  constructor() {
    super();
    this.videoId = null;
    this.isChatActive = true;
    this.chatClosed = false;
    this.isSignedIn = undefined;
  }

  render() {
    if (!this.videoId) {
      return html``;
    }

    // prettier-ignore
    /* eslint-disable indent */
    return html`
      <div class="web-livestream-container__col-yt">
        <div class="youtube">
          <lite-youtube
            videoid="${this.videoId}"
            videotitle="web.dev YouTube livestream"
          ></lite-youtube>
        </div>
      </div>

      <div class="web-livestream-container__col-chat">
        ${this.isChatActive ?
          html`
            <iframe
              title="web.dev YouTube live chat"
              class="w-youtube-chat"
              src="https://www.youtube.com/live_chat?v=${this.videoId}&amp;embed_domain=${location.hostname}"
              frameborder="0"
            ></iframe>
          ` :
          html`
            <div class="w-youtube-disabled-chat">
              <div class="w-youtube-disabled-chat__text">
                <div>
                  Live Chat is currently disabled. Please head to YouTube and
                  ask your questions in the comments on the video.
                </div>
                <a
                  class="w-youtube-disabled-chat__link"
                  href="https://www.youtube.com/watch?v=${this.videoId}">
                  Go to YouTube
                </a>
              </div>
            </div>
          `
        }
      </div>
      <button class="web-livestream-container__chat-toggle" @click="${() => {this.chatClosed = !this.chatClosed;}}">
        ${this.chatClosed ?
          html`<i class="material-icons">chevron_left</i> <span>Open live chat</span>` :
          html`<i class="material-icons">chevron_right</i> <span>Close live chat</span>`
        }
      </button>
    `;
  }

  /**
   * @param {!Object<string, *>} state
   */
  onStateChanged({ activeEventDay, isSignedIn }) {
    const { videoId, isChatActive } = activeEventDay || {
      videoId: null,
      isChatActive: false,
    };
    this.videoId = videoId;
    this.isChatActive = isChatActive;

    // If there was a signed-in state change, reload all our frames as YouTube won't otherwise
    // reconfigure them automatically. This can technically force a double-reload, if videoId also
    // changes in the same update, but in practice they're updated separately.
    // Note that signed-in state might change for one of two reasons:
    //  1) the user is signed into Google but signs in/out of web.dev (and reload is needless)
    //  2) the user signs in or out of Google as part of web.dev (reload is required)
    if (this.isSignedIn !== isSignedIn) {
      const frames = this.renderRoot.querySelectorAll("iframe");
      frames.forEach((frame) => {
        frame.src = "" + frame.src;
      });
      this.isSignedIn = isSignedIn;
    }
  }
}

customElements.define("web-livestream-container", LivestreamContainer);
