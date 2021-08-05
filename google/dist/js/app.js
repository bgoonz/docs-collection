import { s as store, l as localStorage } from "./store-a85adfb0.js";

/**
 * @fileoverview Provides a helper that removes active Service Workers.
 */

/**
 * Removes any previous Service Workers from this domain. If any were found and
 * removed, reloads this page. This is safe to call even if there's no support.
 *
 * @return {!Promise<void>|void}
 */
function removeServiceWorkers() {
  if (!("serviceWorker" in navigator)) {
    return; // can't return Promise in case we're running in ancient browser
  }

  return navigator.serviceWorker
    .getRegistrations()
    .then((all) => {
      return Promise.all(all.map((reg) => reg.unregister()));
    })
    .then((tasks) => {
      if (tasks.length) {
        window.location.reload();
      }
    });
}

/**
 * @fileoverview Site entrypoint.
 *
 * This is web.dev's core JS bundle; it includes unistore, and some basic
 * sw cleanup code.
 */

// This hides a legacy browser warning that can appear on the /measure page
// See .unsupported-notice in _page-header.scss
document.body.classList.remove("unresolved");

// Configures global page state (loading, signed in).
function onGlobalStateChanged({ isSignedIn }) {
  document.body.classList.toggle("lh-signedin", isSignedIn);

  // Cache whether the user was signed in, to help prevent FOUC in future and
  // for Analytics, as this can be read synchronosly and Firebase's auth takes
  // ~ms to arrive.
  localStorage["webdev_isSignedIn"] = isSignedIn ? "probably" : "";
}
store.subscribe(onGlobalStateChanged);
onGlobalStateChanged(store.getState());

removeServiceWorkers();
