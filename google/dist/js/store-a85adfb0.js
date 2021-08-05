function n(n, t) {
  for (var r in t) n[r] = t[r];
  return n;
}
function createStore(t) {
  var r = [];
  function u(n) {
    for (var t = [], u = 0; u < r.length; u++)
      r[u] === n ? (n = null) : t.push(r[u]);
    r = t;
  }
  function e(u, e, f) {
    t = e ? u : n(n({}, t), u);
    for (var i = r, o = 0; o < i.length; o++) i[o](t, f);
  }
  return (
    (t = t || {}),
    {
      action: function (n) {
        function r(t) {
          e(t, !1, n);
        }
        return function () {
          for (var u = arguments, e = [t], f = 0; f < arguments.length; f++)
            e.push(u[f]);
          var i = n.apply(this, e);
          if (null != i) return i.then ? i.then(r) : r(i);
        };
      },
      setState: e,
      subscribe: function (n) {
        return (
          r.push(n),
          function () {
            u(n);
          }
        );
      },
      unsubscribe: u,
      getState: function () {
        return t;
      },
    }
  );
}

var devtools = function unistoreDevTools(store) {
  var extension =
    window.__REDUX_DEVTOOLS_EXTENSION__ ||
    window.top.__REDUX_DEVTOOLS_EXTENSION__;
  var ignoreState = false;

  if (!extension) {
    console.warn("Please install/enable Redux devtools extension");
    store.devtools = null;

    return store;
  }

  if (!store.devtools) {
    store.devtools = extension.connect();
    store.devtools.subscribe(function (message) {
      if (message.type === "DISPATCH" && message.state) {
        ignoreState =
          message.payload.type === "JUMP_TO_ACTION" ||
          message.payload.type === "JUMP_TO_STATE";
        store.setState(JSON.parse(message.state), true);
      }
    });
    store.devtools.init(store.getState());
    store.subscribe(function (state, action) {
      var actionName = (action && action.name) || "setState";

      if (!ignoreState) {
        store.devtools.send(actionName, state);
      } else {
        ignoreState = false;
      }
    });
  }

  return store;
};

/**
 * @param {string} name of meta tag to read
 * @return {?string} value or null for no node
 */
function getMeta(name) {
  // This doesn't just check <head>, as our partial generation might dump the
  // meta tag into the page content.
  const node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    return null;
  }
  return node.getAttribute("content") || node.getAttribute("value");
}

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
 * @fileoverview Provides a helper for calculating relative time.
 */

/**
 * @param {?string} raw a date-like string
 * @return {number} the number of milliseconds we're pretending to be offset by
 */
function getTimeOffset(raw) {
  if (!raw) {
    return 0;
  }

  const overrides = {
    "wdl-day1": "2020-06-30T16:02Z",
    "wdl-preday2": "2020-07-01T10:59Z", // before 1hr buffer
    "wdl-day2": "2020-07-01T12:00Z",
    "wdl-day3": "2020-07-02T07:30Z",
  };

  raw = overrides[raw] || raw;

  const d = new Date(raw);
  if (+d) {
    const now = new Date();
    console.warn("debug time start at", d);
    return +d - +now;
  }
  return 0;
}

/**
 * @fileoverview Wraps access to `window.localStorage`, as Firefox throws a
 * SecurityError (or it is null) when it is not available.
 */

/**
 * @return {!Object<string, string>}
 */
function getLocalStorage() {
  let cand;
  try {
    cand = window.localStorage;
  } catch (e) {
    // ignore
  }
  return cand || {};
}

/**
 * Exports a safe version of localStorage.
 *
 * @type {!Object<string, string>}
 */
const localStorage = getLocalStorage();

var isProd = false;
var env = "dev";
var firebaseConfig = {
  apiKey: "AIzaSyCc27LkiT_ZvmEszthj__edZEzB7B7976s",
  authDomain: "web-dev-staging.firebaseapp.com",
  databaseURL: "https://web-dev-staging.firebaseio.com",
  projectId: "web-dev-staging",
  storageBucket: "web-dev-staging.appspot.com",
  messagingSenderId: "950800540990",
  appId: "1:950800540990:web:5bfeb5de58f8ce7ceef86f",
};

const initialParams = new URLSearchParams(window.location.search);
const timeOffset = getTimeOffset(initialParams.get("_now"));

const initialState = {
  // The first time the app boots we won't know whether the user is signed
  // in or out.
  // While we check, we should put things into an indeterminate state so we
  // don't render incorrect UI.
  checkingSignedInState: true,

  // The user has successfully signed in; default to cached value to help prevent FOUC
  isSignedIn: Boolean(localStorage["webdev_isSignedIn"]),
  user: null,

  // The most recent URL measured and the Date when it was first analyzed by the user.
  userUrlSeen: null,
  userUrl: null, // null for unknown/not signed-in, "" for unset

  // Whether a fetch should be made for the user's URL.
  userUrlResultsPending: false,

  // The URL currently being run through Lighthouse.
  activeLighthouseUrl: null,

  // The most recent Lighthouse results.
  lighthouseResult: null,

  // The most recent error from the Lighthouse CI, if any.
  lighthouseError: null,

  currentUrl: window.location.pathname,
  currentLanguage: document.documentElement.getAttribute("lang"),
  isOffline: Boolean(getMeta("offline")),
  isNavigationDrawerOpen: false,
  isModalOpen: false,
  isSearchExpanded: false,

  // Whether to show the progressbar and mark the main content as busy, during a load.
  isPageLoading: false,

  // When a user lands on the page, check if they have accepted our
  // cookie policy.
  // We automatically accept cookies in dev and test environments so the cookie
  // banner doesn't interfere with tests.
  userAcceptsCookies: !isProd,

  // Handle hiding/showing the snackbar.
  showingSnackbar: false,
  snackbarType: null,

  // Used to override the current time for web.dev/LIVE testing.
  timeOffset,

  // Data for the current web.dev/LIVE event.
  eventDays: [],
  activeEventDay: null, // livestream shown for this day
};

let store;
{
  store = devtools(createStore(initialState));
}

export { env as e, firebaseConfig as f, localStorage as l, store as s };
